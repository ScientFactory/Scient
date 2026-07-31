#!/usr/bin/env bash

set -euo pipefail

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)"
readonly BOOTSTRAP="$SCRIPT_DIR/bootstrap-workspace.sh"
readonly TEST_ROOT="$(mktemp -d "${TMPDIR:-/tmp}/scient-workspace-bootstrap-test.XXXXXX")"

cleanup() {
  rm -rf "$TEST_ROOT"
}
trap cleanup EXIT

fail() {
  printf 'FAIL: %s\n' "$*" >&2
  exit 1
}

assert_directory() {
  [[ -d "$1" ]] || fail "expected directory: $1"
}

assert_missing() {
  [[ ! -e "$1" ]] || fail "expected path to be absent: $1"
}

assert_contains() {
  local path=$1
  local expected=$2
  grep -Fq "$expected" "$path" || fail "expected '$expected' in $path"
}

assert_not_contains() {
  local path=$1
  local unexpected=$2
  if grep -Fq "$unexpected" "$path"; then
    fail "did not expect '$unexpected' in $path"
  fi
}

fake_bin="$TEST_ROOT/bin"
mkdir -p "$fake_bin"

cat >"$fake_bin/gh" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail

if [[ "$1 $2" == "auth status" ]]; then
  exit 0
fi

if [[ "$1 $2" == "repo clone" ]]; then
  repository=$3
  destination=$4
  printf '%s\n' "$repository" >>"$GH_TEST_LOG"
  git init -q "$destination"
  git -C "$destination" remote add origin "https://github.com/$repository.git"
  exit 0
fi

exit 64
EOF
chmod +x "$fake_bin/gh"

export GH_TEST_LOG="$TEST_ROOT/gh.log"
export PATH="$fake_bin:$PATH"

dry_workspace="$TEST_ROOT/dry-workspace"
"$BOOTSTRAP" --workspace "$dry_workspace" --dry-run >"$TEST_ROOT/dry.out"
assert_missing "$dry_workspace"
assert_contains "$TEST_ROOT/dry.out" "Dry run complete"

workspace="$TEST_ROOT/workspace"
"$BOOTSTRAP" --workspace "$workspace" >"$TEST_ROOT/first.out"
assert_directory "$workspace/Scient/.git"
assert_directory "$workspace/scient-desktop/.git"
assert_directory "$workspace/scient-agent/.git"
assert_missing "$workspace/website"
[[ "$(wc -l <"$GH_TEST_LOG" | tr -d ' ')" == 3 ]] || fail "expected three clone calls"

git -C "$workspace/scient-desktop" checkout -q -b local-work
printf 'preserve me\n' >"$workspace/scient-desktop/local.txt"
git -C "$workspace/scient-agent" remote set-url origin git@github.com:ScientFactory/scient-agent.git
"$BOOTSTRAP" --workspace "$workspace" >"$TEST_ROOT/second.out"
[[ "$(git -C "$workspace/scient-desktop" branch --show-current)" == "local-work" ]] ||
  fail "existing branch changed"
[[ -f "$workspace/scient-desktop/local.txt" ]] || fail "existing untracked file changed"
[[ "$(wc -l <"$GH_TEST_LOG" | tr -d ' ')" == 3 ]] || fail "rerun cloned repositories"
assert_contains "$TEST_ROOT/second.out" "existing checkouts were left untouched"

"$BOOTSTRAP" --workspace "$workspace" --with-website >"$TEST_ROOT/website.out"
assert_directory "$workspace/website/.git"
[[ "$(wc -l <"$GH_TEST_LOG" | tr -d ' ')" == 4 ]] || fail "website was not cloned once"

conflict_workspace="$TEST_ROOT/conflict-workspace"
mkdir -p "$conflict_workspace/scient-agent"
if "$BOOTSTRAP" --workspace "$conflict_workspace" >"$TEST_ROOT/conflict.out" 2>&1; then
  fail "non-Git destination should fail"
fi
assert_contains "$TEST_ROOT/conflict.out" "not a Git checkout"

symlink_workspace="$TEST_ROOT/symlink-workspace"
mkdir -p "$symlink_workspace"
ln -s "$TEST_ROOT/missing-target" "$symlink_workspace/scient-agent"
if "$BOOTSTRAP" --workspace "$symlink_workspace" >"$TEST_ROOT/symlink.out" 2>&1; then
  fail "occupied symlink destination should fail"
fi
assert_contains "$TEST_ROOT/symlink.out" "symbolic link"

live_symlink_target="$TEST_ROOT/live-symlink-target"
git init -q "$live_symlink_target"
git -C "$live_symlink_target" remote add origin \
  https://github.com/ScientFactory/scient-agent.git
live_symlink_workspace="$TEST_ROOT/live-symlink-workspace"
mkdir -p "$live_symlink_workspace"
ln -s "$live_symlink_target" "$live_symlink_workspace/scient-agent"
if "$BOOTSTRAP" --workspace "$live_symlink_workspace" >"$TEST_ROOT/live-symlink.out" 2>&1; then
  fail "live symlink destination should fail"
fi
assert_contains "$TEST_ROOT/live-symlink.out" "symbolic link"

credential_workspace="$TEST_ROOT/credential-workspace"
mkdir -p "$credential_workspace/Scient"
git init -q "$credential_workspace/Scient"
git -C "$credential_workspace/Scient" remote add origin \
  https://example-user:SECRET_CREDENTIAL_SENTINEL@github.com/ScientFactory/Scient.git
if "$BOOTSTRAP" --workspace "$credential_workspace" --dry-run >"$TEST_ROOT/credential.out" 2>&1; then
  fail "credential-bearing origin should fail"
fi
assert_contains "$TEST_ROOT/credential.out" "not a supported HTTPS or SSH GitHub URL"
assert_not_contains "$TEST_ROOT/credential.out" "SECRET_CREDENTIAL_SENTINEL"

malformed_workspace="$TEST_ROOT/malformed-workspace"
mkdir -p "$malformed_workspace/Scient"
git init -q "$malformed_workspace/Scient"
git -C "$malformed_workspace/Scient" remote add origin \
  "https://github.com/ScientFactory/Scient.git?token=SECRET_PATH_SENTINEL"
if "$BOOTSTRAP" --workspace "$malformed_workspace" --dry-run >"$TEST_ROOT/malformed.out" 2>&1; then
  fail "malformed GitHub origin should fail"
fi
assert_contains "$TEST_ROOT/malformed.out" "not a supported HTTPS or SSH GitHub URL"
assert_not_contains "$TEST_ROOT/malformed.out" "SECRET_PATH_SENTINEL"

http_workspace="$TEST_ROOT/http-workspace"
mkdir -p "$http_workspace/Scient"
git init -q "$http_workspace/Scient"
git -C "$http_workspace/Scient" remote add origin \
  http://github.com/ScientFactory/Scient.git
if "$BOOTSTRAP" --workspace "$http_workspace" --dry-run >"$TEST_ROOT/http.out" 2>&1; then
  fail "plaintext HTTP origin should fail"
fi
assert_contains "$TEST_ROOT/http.out" "not a supported HTTPS or SSH GitHub URL"

wrong_workspace="$TEST_ROOT/wrong-workspace"
mkdir -p "$wrong_workspace/scient-agent"
git init -q "$wrong_workspace/scient-agent"
git -C "$wrong_workspace/scient-agent" remote add origin https://github.com/example/wrong.git
if "$BOOTSTRAP" --workspace "$wrong_workspace" >"$TEST_ROOT/wrong.out" 2>&1; then
  fail "wrong origin should fail"
fi
assert_contains "$TEST_ROOT/wrong.out" \
  "expected GitHub repository ScientFactory/scient-agent"

printf 'PASS: workspace bootstrap safety and idempotency\n'
