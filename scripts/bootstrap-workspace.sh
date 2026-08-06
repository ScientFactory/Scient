#!/usr/bin/env bash

set -euo pipefail

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)"
readonly SCIENT_REPO_ROOT="$(git -C "$SCRIPT_DIR/.." rev-parse --show-toplevel)"

workspace_arg="$(dirname "$SCIENT_REPO_ROOT")"
include_website=false
dry_run=false

usage() {
  cat <<'EOF'
Usage: ./scripts/bootstrap-workspace.sh [options]

Create or validate a plain ScientFactory workspace containing independent
sibling Git repositories.

Options:
  --workspace <path>  Workspace root (default: parent of this Scient checkout)
  --with-website      Include the optional website repository
  --dry-run           Report planned actions without changing the filesystem
  -h, --help          Show this help

The command never pulls, fetches, switches, cleans, or edits an existing
checkout. It stops if an occupied destination is not the expected repository.
Prefix a relative workspace name beginning with `-` with `./`.
EOF
}

fail() {
  printf 'error: %s\n' "$*" >&2
  exit 1
}

fail_promotion() {
  local final_destination=$1

  if [[ -e "$final_destination" || -L "$final_destination" ]]; then
    fail "destination appeared during promotion; left it untouched and discarded the staged clone: $final_destination"
  fi
  fail "could not promote staged clone; destination was left absent and the staged clone was discarded: $final_destination"
}

while (($# > 0)); do
  case "$1" in
    --workspace)
      (($# >= 2)) || fail "--workspace requires a path"
      [[ -n "$2" ]] || fail "--workspace requires a non-empty path"
      case "$2" in
        -*) fail "--workspace value must not look like an option; prefix a relative name with ./" ;;
      esac
      workspace_arg=$2
      shift 2
      ;;
    --with-website)
      include_website=true
      shift
      ;;
    --dry-run)
      dry_run=true
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      fail "unknown option: $1"
      ;;
  esac
done

case "$workspace_arg" in
  /*) workspace=$workspace_arg ;;
  *) workspace="$PWD/$workspace_arg" ;;
esac

if [[ "$dry_run" == false ]]; then
  mkdir -p "$workspace"
fi

if [[ -d "$workspace" ]]; then
  workspace="$(cd "$workspace" && pwd -P)"
fi

if [[ -d "$workspace" ]] && git -C "$workspace" rev-parse --show-toplevel >/dev/null 2>&1; then
  fail "workspace root must be a plain non-Git directory: $workspace"
fi

canonical_github_repo() {
  local url=$1
  local repo

  case "$url" in
    https://github.com/*)
      repo=${url#*github.com/}
      ;;
    git@github.com:*)
      repo=${url#git@github.com:}
      ;;
    ssh://git@github.com/*)
      repo=${url#ssh://git@github.com/}
      ;;
    *)
      return 1
      ;;
  esac

  repo=${repo%.git}
  [[ "$repo" =~ ^[A-Za-z0-9][A-Za-z0-9-]*/[A-Za-z0-9_.-]+$ ]] || return 1
  printf '%s\n' "$repo" | tr '[:upper:]' '[:lower:]'
}

validate_checkout() {
  local destination=$1
  local expected_repo=$2
  local expected_repo_normalized
  local top_level
  local origin_url
  local actual_repo
  local fetch_urls=()
  local push_urls=()

  [[ ! -L "$destination" ]] ||
    fail "destination is a symbolic link; expected a direct Git checkout: $destination"
  [[ -d "$destination" ]] ||
    fail "destination exists but is not a Git checkout directory: $destination"

  top_level=$(git -C "$destination" rev-parse --show-toplevel 2>/dev/null) ||
    fail "destination exists but is not a Git checkout: $destination"
  top_level="$(cd "$top_level" && pwd -P)"
  [[ "$top_level" == "$(cd "$destination" && pwd -P)" ]] ||
    fail "destination is inside a different Git checkout: $destination"

  while IFS= read -r origin_url; do
    fetch_urls+=("$origin_url")
  done < <(git -C "$destination" remote get-url --all origin 2>/dev/null)
  ((${#fetch_urls[@]} > 0)) || fail "checkout has no origin fetch URL: $destination"

  while IFS= read -r origin_url; do
    push_urls+=("$origin_url")
  done < <(git -C "$destination" remote get-url --push --all origin 2>/dev/null)
  ((${#push_urls[@]} > 0)) || fail "checkout has no effective origin push URL: $destination"

  expected_repo_normalized=$(printf '%s' "$expected_repo" | tr '[:upper:]' '[:lower:]')
  for origin_url in "${fetch_urls[@]}"; do
    actual_repo=$(canonical_github_repo "$origin_url") ||
      fail "checkout origin fetch URL is not a supported HTTPS or SSH GitHub URL for $expected_repo: $destination"
    [[ "$actual_repo" == "$expected_repo_normalized" ]] ||
      fail "checkout origin fetch URL does not point to expected GitHub repository $expected_repo: $destination"
  done
  for origin_url in "${push_urls[@]}"; do
    actual_repo=$(canonical_github_repo "$origin_url") ||
      fail "checkout effective origin push URL is not a supported HTTPS or SSH GitHub URL for \
$expected_repo: $destination"
    [[ "$actual_repo" == "$expected_repo_normalized" ]] ||
      fail "checkout effective origin push URL does not point to expected GitHub repository \
$expected_repo: $destination"
  done
}

repositories=(
  "Scient|ScientFactory/Scient"
  "scient-desktop|ScientFactory/scient-desktop"
  "scient-desktop-next|ScientFactory/scient-desktop-next"
  "scient-agent|ScientFactory/scient-agent"
)

if [[ "$include_website" == true ]]; then
  repositories+=("website|ScientFactory/ScientFactory-website")
fi

missing=()

printf 'ScientFactory workspace: %s\n' "$workspace"

for entry in "${repositories[@]}"; do
  IFS='|' read -r directory repository <<<"$entry"
  destination="$workspace/$directory"

  if [[ -e "$destination" || -L "$destination" ]]; then
    validate_checkout "$destination" "$repository"
    printf '[keep]  %s already matches %s\n' "$destination" "$repository"
  else
    missing+=("$entry")
    printf '[clone] %s -> %s\n' "$repository" "$destination"
  fi
done

if [[ "$dry_run" == true ]]; then
  printf 'Dry run complete; no files were changed.\n'
  exit 0
fi

if ((${#missing[@]} == 0)); then
  printf 'Workspace is already complete; existing checkouts were left untouched.\n'
  exit 0
fi

command -v gh >/dev/null 2>&1 || fail "GitHub CLI (gh) is required to clone missing repositories"
gh auth status --hostname github.com >/dev/null 2>&1 ||
  fail "GitHub CLI is not authenticated for github.com; run: gh auth login"

staging=$(mktemp -d "$workspace/.scient-workspace-bootstrap.XXXXXX")
cleanup() {
  rm -rf "$staging"
}
trap cleanup EXIT

for entry in "${missing[@]}"; do
  IFS='|' read -r directory repository <<<"$entry"
  staged_destination="$staging/$directory"
  final_destination="$workspace/$directory"

  gh repo clone "$repository" "$staged_destination"
  validate_checkout "$staged_destination" "$repository"
  [[ ! -e "$final_destination" && ! -L "$final_destination" ]] ||
    fail "destination appeared while cloning; left it untouched and discarded the staged clone: $final_destination"
  # GNU mv can return nonzero for an occupied directory, while BSD mv can
  # report a successful -n no-op. Handle both and retain the source-disappearance
  # postcondition so neither behavior can nest or replace a raced-in target.
  if ! mv -n "$staged_destination" "$workspace"; then
    fail_promotion "$final_destination"
  fi
  [[ ! -e "$staged_destination" && ! -L "$staged_destination" ]] ||
    fail_promotion "$final_destination"
  printf '[done]  %s\n' "$final_destination"
done

printf '\nWorkspace ready. Open this parent directory in your editor or agent:\n%s\n' "$workspace"
printf 'Read Scient/AGENTS.md and each task-owning repository guide before editing.\n'
