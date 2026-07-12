#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
synara_repo="${SYNARA_REPO:-$repo_root/lab/external/desktop-app-forks/synara}"
opencode_repo="${OPENCODE_REPO:-$repo_root/lab/runtime/gate-1-5/worktrees/opencode-upstream}"
synara_bun="${SYNARA_BUN:-$repo_root/lab/runtime/gate-1-5/tools/bun-1.3.12/bun-darwin-aarch64/bun}"
opencode_bun="${OPENCODE_BUN:-$repo_root/lab/runtime/gate-1-5/tools/bun-1.3.14/bun-darwin-aarch64/bun}"
smoke_db="${LITREV_GATE_1_5_SMOKE_DB:-$repo_root/lab/runtime/gate-1-5/homes/synara-branch/state/dev/state.sqlite}"
fixture_root="${LITREV_GATE_1_5_FIXTURE_ROOT:-/private/tmp/litrev-gate-1-5-fixture}"
owned_opencode_binary="${LITREV_GATE_1_5_OPENCODE_BINARY:-$opencode_repo/packages/opencode/dist/opencode-darwin-arm64/bin/opencode}"
skip_source_checks="${LITREV_GATE_1_5_SKIP_SOURCE_CHECKS:-false}"

smoke_synara_commit="f3a235f45ad027b7436d3339a336e96ca22074a0"
smoke_opencode_commit="0be0c5aa1df6cc2874b23aa2bd76fc5d5b6f98d4"
fixture_readme_sha256="054d15459112497cdeb08b5632d02202b72e06180e94bf21eb95b6f529ecbdc0"

fail() {
  echo "Gate 1.5 verification failed: $*" >&2
  exit 1
}

require_command() {
  command -v "$1" >/dev/null 2>&1 || fail "required command not found: $1"
}

if [[ ! -d "$repo_root/lab/runtime/gate-1-5" ]]; then
  require_command node
  node "$repo_root/lab/scripts/verify-gate-1-5-manifest.mjs"
  echo "Gate 1.5 committed evidence passed."
  echo "The user-approved local runtime evidence was deleted after accepted closeout on 2026-07-12."
  exit 0
fi

require_file() {
  [[ -f "$1" ]] || fail "required file not found: $1"
}

assert_equal() {
  local label="$1"
  local actual="$2"
  local expected="$3"
  [[ "$actual" == "$expected" ]] || fail "$label expected $expected, received ${actual:-<empty>}"
}

verify_post_smoke_synara_changes() {
  local path
  while IFS= read -r path; do
    [[ -z "$path" ]] && continue
    if git -C "$synara_repo" diff --quiet upstream/main -- "$path"; then
      continue
    fi
    case "$path" in
      .github/workflows/release.yml | \
      .plans/profile-data-source-audit.md | \
      apps/server/src/*.test.ts | \
      apps/server/src/*/*.test.ts | \
      apps/server/src/*/*/*.test.ts | \
      apps/server/src/*/*/*/*.test.ts | \
      apps/server/src/memoryDiagnostics.ts | \
      apps/server/src/provider/Layers/ClaudeAdapter.test.ts | \
      apps/server/src/provider/Layers/ProviderService.test.ts | \
      apps/server/src/provider/attachmentProjection.ts | \
      apps/web/src/*.test.ts | \
      apps/web/src/*.test.tsx | \
      apps/web/src/*/*.test.ts | \
      apps/web/src/*/*.test.tsx | \
      apps/web/src/*/*/*.test.ts | \
      apps/web/src/*/*/*.test.tsx | \
      apps/web/src/components/ChatView.browser.tsx | \
      apps/web/src/whatsNew/entries.ts | \
      packages/shared/src/git.test.ts | \
      apps/desktop/src/main.ts | \
      scripts/build-desktop-artifact.ts | \
      scripts/check-brand-identity.ts | \
      scripts/check-brand-identity.test.ts | \
      scripts/litrev-upstream-check.ts | \
      scripts/litrev-upstream-check.test.ts | \
      scripts/release-smoke.ts)
        ;;
      *) fail "Synara runtime-affecting file changed after the live smoke: $path" ;;
    esac
  done < <(git -C "$synara_repo" diff --name-only "$smoke_synara_commit..HEAD")
}

verify_post_smoke_opencode_changes() {
  local path
  while IFS= read -r path; do
    [[ -z "$path" ]] && continue
    if git -C "$opencode_repo" diff --quiet upstream/dev -- "$path"; then
      continue
    fi
    case "$path" in
      .github/workflows/litrev-quality.yml | \
      script/litrev-upstream-check.ts | \
      packages/opencode/test/litrev/upstream-check.test.ts)
        ;;
      *) fail "OpenCode runtime-affecting file changed after the live smoke: $path" ;;
    esac
  done < <(git -C "$opencode_repo" diff --name-only "$smoke_opencode_commit..HEAD")
}

run_source_verifier() {
  local source_repo="$1"
  local bun_binary="$2"
  (
    cd "$source_repo"
    PATH="$(dirname "$bun_binary"):$PATH" "$bun_binary" run litrev:upstream-check --checks
  )
}

require_command git
require_command node
require_command sqlite3
require_command shasum
require_file "$synara_bun"
require_file "$opencode_bun"
require_file "$smoke_db"
require_file "$fixture_root/README.md"
require_file "$owned_opencode_binary"

assert_equal "Synara worktree status" "$(git -C "$synara_repo" status --porcelain)" ""
assert_equal "OpenCode worktree status" "$(git -C "$opencode_repo" status --porcelain)" ""

node "$repo_root/lab/scripts/verify-gate-1-5-manifest.mjs" \
  --local-evidence \
  --synara-head "$(git -C "$synara_repo" rev-parse HEAD)" \
  --opencode-head "$(git -C "$opencode_repo" rev-parse HEAD)"

if [[ "$skip_source_checks" == "true" ]]; then
  echo "Skipping source suites because LITREV_GATE_1_5_SKIP_SOURCE_CHECKS=true."
else
  run_source_verifier "$synara_repo" "$synara_bun"
  run_source_verifier "$opencode_repo" "$opencode_bun"
fi

verify_post_smoke_synara_changes
verify_post_smoke_opencode_changes

assert_equal \
  "owned transcript" \
  "$(sqlite3 "$smoke_db" "SELECT count(*) FROM projection_thread_messages WHERE role='assistant' AND text='LITREV_OPENCODE_OWNED_OK /private/tmp/litrev-gate-1-5-fixture';")" \
  "1"
assert_equal \
  "approval transcript" \
  "$(sqlite3 "$smoke_db" "SELECT count(*) FROM projection_thread_messages WHERE role='assistant' AND text='LITREV_OPENCODE_APPROVAL_OK /private/tmp/litrev-gate-1-5-fixture';")" \
  "1"
assert_equal \
  "approval-required OpenCode runtimes" \
  "$(sqlite3 "$smoke_db" "SELECT count(*) FROM provider_session_runtime WHERE provider_name='opencode' AND adapter_key='opencode' AND runtime_mode='approval-required' AND status='stopped';")" \
  "2"
assert_equal \
  "resolved approval decision" \
  "$(sqlite3 "$smoke_db" "SELECT count(*) FROM projection_pending_approvals WHERE status='resolved' AND decision='acceptForSession';")" \
  "1"
assert_equal \
  "fixture file inventory" \
  "$(find "$fixture_root" -mindepth 1 -type f -print | sed "s#^$fixture_root/##")" \
  "README.md"
assert_equal \
  "fixture README SHA-256" \
  "$(shasum -a 256 "$fixture_root/README.md" | awk '{print $1}')" \
  "$fixture_readme_sha256"

credential_copy="$repo_root/lab/runtime/gate-1-5/homes/synara-branch/os-home/.local/share/opencode/auth.json"
[[ ! -e "$credential_copy" ]] || fail "temporary OpenCode credential copy still exists"

if command -v lsof >/dev/null 2>&1; then
  [[ -z "$(lsof -nP -iTCP:58091 -sTCP:LISTEN 2>/dev/null || true)" ]] || fail "port 58091 is still listening"
  [[ -z "$(lsof -nP -iTCP:8943 -sTCP:LISTEN 2>/dev/null || true)" ]] || fail "port 8943 is still listening"
fi

echo "Gate 1.5 verification passed."
echo "Synara head: $(git -C "$synara_repo" rev-parse HEAD)"
echo "OpenCode head: $(git -C "$opencode_repo" rev-parse HEAD)"
echo "Owned OpenCode binary: $($owned_opencode_binary --version)"
echo "The committed manifest distinguishes the live-smoke commits from reviewed post-smoke source changes and records the authenticated historical evidence inventory."
