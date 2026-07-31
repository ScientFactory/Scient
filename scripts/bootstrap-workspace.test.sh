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

cat >"$fake_bin/mv" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail

if [[ "${MV_TEST_FORCE_FAILURE:-false}" == true ]]; then
  exit 73
fi
if [[ "${MV_TEST_STATUS_ZERO_NOOP:-false}" == true ]]; then
  exit 0
fi

if [[ -n "${MV_TEST_COLLISION_PATH:-}" ]]; then
  case "${MV_TEST_COLLISION_KIND:-}" in
    empty-directory)
      mkdir -p "$MV_TEST_COLLISION_PATH"
      ;;
    nonempty-directory)
      mkdir -p "$MV_TEST_COLLISION_PATH"
      printf 'preserve collision\n' >"$MV_TEST_COLLISION_PATH/preserved.txt"
      ;;
    symlink)
      ln -s "$MV_TEST_COLLISION_TARGET" "$MV_TEST_COLLISION_PATH"
      ;;
    *)
      printf 'unexpected MV_TEST_COLLISION_KIND\n' >&2
      exit 65
      ;;
  esac
fi

exec /bin/mv "$@"
EOF
chmod +x "$fake_bin/mv"

export GH_TEST_LOG="$TEST_ROOT/gh.log"
export PATH="$fake_bin:$PATH"

option_workspace_root="$TEST_ROOT/option-workspace-root"
mkdir -p "$option_workspace_root"
if (cd "$option_workspace_root" && "$BOOTSTRAP" --workspace "") >"$TEST_ROOT/empty-option.out" 2>&1; then
  fail "empty workspace value should fail"
fi
assert_contains "$TEST_ROOT/empty-option.out" "requires a non-empty path"
assert_missing "$GH_TEST_LOG"
if (cd "$option_workspace_root" && "$BOOTSTRAP" --workspace --dry-run) >"$TEST_ROOT/option.out" 2>&1; then
  fail "option-looking workspace value should fail"
fi
assert_contains "$TEST_ROOT/option.out" "must not look like an option"
assert_missing "$option_workspace_root/--dry-run"
assert_missing "$GH_TEST_LOG"
(cd "$option_workspace_root" && "$BOOTSTRAP" --workspace ./-scient-workspace --dry-run) \
  >"$TEST_ROOT/dashed-workspace.out"
assert_contains "$TEST_ROOT/dashed-workspace.out" "Dry run complete"
assert_missing "$option_workspace_root/-scient-workspace"
assert_missing "$GH_TEST_LOG"

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
git -C "$workspace/scient-desktop" remote set-url --push origin \
  git@github.com:ScientFactory/scient-desktop.git
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

mixed_workspace="$TEST_ROOT/mixed-workspace"
mkdir -p "$mixed_workspace/Scient"
git init -q "$mixed_workspace/Scient"
git -C "$mixed_workspace/Scient" remote add origin \
  https://github.com/ScientFactory/Scient.git
git -C "$mixed_workspace/Scient" remote set-url --add origin \
  ssh://git@github.com/ScientFactory/Scient.git
git -C "$mixed_workspace/Scient" remote set-url --add --push origin \
  https://github.com/ScientFactory/Scient.git
git -C "$mixed_workspace/Scient" remote set-url --add --push origin \
  git@github.com:ScientFactory/Scient.git
"$BOOTSTRAP" --workspace "$mixed_workspace" --dry-run >"$TEST_ROOT/mixed.out"
assert_contains "$TEST_ROOT/mixed.out" "already matches ScientFactory/Scient"

wrong_fetch_workspace="$TEST_ROOT/wrong-fetch-workspace"
mkdir -p "$wrong_fetch_workspace/Scient"
git init -q "$wrong_fetch_workspace/Scient"
git -C "$wrong_fetch_workspace/Scient" remote add origin \
  https://github.com/ScientFactory/Scient.git
git -C "$wrong_fetch_workspace/Scient" remote set-url --add origin \
  https://github.com/example/SECRET_FETCH_SENTINEL.git
git -C "$wrong_fetch_workspace/Scient" remote set-url --push origin \
  git@github.com:ScientFactory/Scient.git
if "$BOOTSTRAP" --workspace "$wrong_fetch_workspace" --dry-run >"$TEST_ROOT/wrong-fetch.out" 2>&1; then
  fail "wrong secondary fetch URL should fail"
fi
assert_contains "$TEST_ROOT/wrong-fetch.out" "origin fetch URL does not point"
assert_not_contains "$TEST_ROOT/wrong-fetch.out" "SECRET_FETCH_SENTINEL"

wrong_push_workspace="$TEST_ROOT/wrong-push-workspace"
mkdir -p "$wrong_push_workspace/Scient"
git init -q "$wrong_push_workspace/Scient"
git -C "$wrong_push_workspace/Scient" remote add origin \
  https://github.com/ScientFactory/Scient.git
git -C "$wrong_push_workspace/Scient" remote set-url --add --push origin \
  https://github.com/ScientFactory/Scient.git
git -C "$wrong_push_workspace/Scient" remote set-url --add --push origin \
  git@github.com:example/SECRET_WRONG_PUSH.git
if "$BOOTSTRAP" --workspace "$wrong_push_workspace" --dry-run >"$TEST_ROOT/wrong-push.out" 2>&1; then
  fail "wrong URL among multiple effective push URLs should fail"
fi
assert_contains "$TEST_ROOT/wrong-push.out" "effective origin push URL does not point"
assert_not_contains "$TEST_ROOT/wrong-push.out" "SECRET_WRONG_PUSH"

credential_push_workspace="$TEST_ROOT/credential-push-workspace"
mkdir -p "$credential_push_workspace/Scient"
git init -q "$credential_push_workspace/Scient"
git -C "$credential_push_workspace/Scient" remote add origin \
  https://github.com/ScientFactory/Scient.git
git -C "$credential_push_workspace/Scient" remote set-url --push origin \
  https://example-user:SECRET_PUSH_SENTINEL@github.com/ScientFactory/Scient.git
if "$BOOTSTRAP" --workspace "$credential_push_workspace" --dry-run >"$TEST_ROOT/credential-push.out" 2>&1; then
  fail "credential-bearing push URL should fail"
fi
assert_contains "$TEST_ROOT/credential-push.out" "effective origin push URL is not a supported"
assert_not_contains "$TEST_ROOT/credential-push.out" "SECRET_PUSH_SENTINEL"

malformed_push_workspace="$TEST_ROOT/malformed-push-workspace"
mkdir -p "$malformed_push_workspace/Scient"
git init -q "$malformed_push_workspace/Scient"
git -C "$malformed_push_workspace/Scient" remote add origin \
  https://github.com/ScientFactory/Scient.git
git -C "$malformed_push_workspace/Scient" remote set-url --push origin \
  "https://github.com/ScientFactory/Scient.git?token=SECRET_MALFORMED_PUSH_SENTINEL"
if "$BOOTSTRAP" --workspace "$malformed_push_workspace" --dry-run >"$TEST_ROOT/malformed-push.out" 2>&1; then
  fail "malformed push URL should fail"
fi
assert_contains "$TEST_ROOT/malformed-push.out" "effective origin push URL is not a supported"
assert_not_contains "$TEST_ROOT/malformed-push.out" "SECRET_MALFORMED_PUSH_SENTINEL"

wrong_workspace="$TEST_ROOT/wrong-workspace"
mkdir -p "$wrong_workspace/scient-agent"
git init -q "$wrong_workspace/scient-agent"
git -C "$wrong_workspace/scient-agent" remote add origin https://github.com/example/wrong.git
if "$BOOTSTRAP" --workspace "$wrong_workspace" >"$TEST_ROOT/wrong.out" 2>&1; then
  fail "wrong origin should fail"
fi
assert_contains "$TEST_ROOT/wrong.out" \
  "expected GitHub repository ScientFactory/scient-agent"

for collision_kind in empty-directory nonempty-directory; do
  collision_workspace="$TEST_ROOT/promotion-$collision_kind"
  mkdir -p "$collision_workspace"
  collision_path="$collision_workspace/Scient"
  if MV_TEST_COLLISION_KIND="$collision_kind" \
    MV_TEST_COLLISION_PATH="$collision_path" \
    "$BOOTSTRAP" --workspace "$collision_workspace" >"$TEST_ROOT/promotion-$collision_kind.out" 2>&1; then
    fail "$collision_kind promotion collision should fail"
  fi
  assert_contains "$TEST_ROOT/promotion-$collision_kind.out" "appeared during promotion"
  assert_directory "$collision_path"
  assert_missing "$collision_path/.git"
  assert_missing "$collision_path/Scient"
done
assert_missing "$TEST_ROOT/promotion-empty-directory/Scient/preserved.txt"
assert_contains "$TEST_ROOT/promotion-nonempty-directory/Scient/preserved.txt" \
  "preserve collision"

collision_symlink_target="$TEST_ROOT/promotion-symlink-target"
mkdir -p "$collision_symlink_target"
printf 'preserve symlink target\n' >"$collision_symlink_target/preserved.txt"
collision_symlink_workspace="$TEST_ROOT/promotion-symlink"
mkdir -p "$collision_symlink_workspace"
collision_symlink_path="$collision_symlink_workspace/Scient"
if MV_TEST_COLLISION_KIND=symlink \
  MV_TEST_COLLISION_PATH="$collision_symlink_path" \
  MV_TEST_COLLISION_TARGET="$collision_symlink_target" \
  "$BOOTSTRAP" --workspace "$collision_symlink_workspace" >"$TEST_ROOT/promotion-symlink.out" 2>&1; then
  fail "symlink promotion collision should fail"
fi
assert_contains "$TEST_ROOT/promotion-symlink.out" "appeared during promotion"
[[ -L "$collision_symlink_path" ]] || fail "promotion collision symlink was replaced"
[[ "$(readlink "$collision_symlink_path")" == "$collision_symlink_target" ]] ||
  fail "promotion collision symlink target changed"
assert_contains "$collision_symlink_target/preserved.txt" "preserve symlink target"
assert_missing "$collision_symlink_target/.git"
assert_missing "$collision_symlink_target/Scient"

promotion_failure_workspace="$TEST_ROOT/promotion-failure"
mkdir -p "$promotion_failure_workspace"
if MV_TEST_FORCE_FAILURE=true \
  "$BOOTSTRAP" --workspace "$promotion_failure_workspace" >"$TEST_ROOT/promotion-failure.out" 2>&1; then
  fail "non-collision promotion failure should fail"
fi
assert_contains "$TEST_ROOT/promotion-failure.out" "could not promote staged clone"
assert_missing "$promotion_failure_workspace/Scient"

promotion_noop_workspace="$TEST_ROOT/promotion-status-zero-noop"
mkdir -p "$promotion_noop_workspace"
if MV_TEST_STATUS_ZERO_NOOP=true \
  "$BOOTSTRAP" --workspace "$promotion_noop_workspace" >"$TEST_ROOT/promotion-status-zero-noop.out" 2>&1; then
  fail "status-zero promotion no-op should fail"
fi
assert_contains "$TEST_ROOT/promotion-status-zero-noop.out" "could not promote staged clone"
assert_missing "$promotion_noop_workspace/Scient"

printf 'PASS: workspace bootstrap safety and idempotency\n'
