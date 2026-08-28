# Local ScientFactory Workspace Setup

Status: Active
Owner: Yaacov
Created: 2026-07-31
Last updated: 2026-08-28
Purpose: Provides the repeatable setup procedure for an internal contributor's local multi-repository ScientFactory workspace.
Doc type: Operational procedure

## Document Rules

This guide owns the executable local setup procedure. The root [Scient
README](../../README.md#related-repositories-and-local-workspace) owns the
repository roles and required workspace shape. The [GitHub operating
model](../operations/github-operating-model.md) owns branch, pull-request,
release, and worktree rules.

The workspace is a local convenience, not a monorepo or a new GitHub
repository. Access to sibling repositories gives cross-repository reading
context; it does not expand a task's write scope.

## Prerequisites

- Git and [GitHub CLI](https://cli.github.com/) are installed.
- `gh auth status --hostname github.com` succeeds for the contributor's GitHub
  account.
- The account has access to the private `ScientFactory/Scient` repository.
- The selected workspace parent contains no unrelated private repositories,
  credentials, personal files, or customer material.

## Create The Workspace

Choose any contributor-owned parent directory. `~/REPOs/ScientFactory` is an
example, not a required path or repository name.

```sh
mkdir -p ~/REPOs/ScientFactory
cd ~/REPOs/ScientFactory
gh repo clone ScientFactory/Scient Scient
gh repo clone ScientFactory/scient-desktop scient-desktop
gh repo clone ScientFactory/scient-agent scient-agent
```

The intended active workspace contains:

```text
ScientFactory/
├── Scient/
├── scient-desktop/
└── scient-agent/
```

`scient-desktop` is the public T3-derived current application. The retired
Synara-derived repository is intentionally excluded from new workspaces. A
historical checkout may be retained separately for an explicitly authorized
recovery audit.

### Bootstrap-script alignment

`scripts/bootstrap-workspace.sh` still contains the former
`scient-desktop-next` checkout in its executable repository list. GitHub now
redirects that name to `scient-desktop`, so running the script against a fresh
workspace would create two local checkouts of the same active repository. Until
that script and its tests receive a separate code change, use the explicit
`gh repo clone` commands above and do not treat the script as current
workspace authority.

Include the public website only when website or download-surface work needs it:

```sh
gh repo clone ScientFactory/ScientFactory-website website
```

## Safety And Idempotency

The current bootstrap implementation is fail-closed for the operations below,
but its repository inventory is stale as described above. Its retained safety
properties are:

- clones only missing repositories;
- validates every origin fetch URL and every effective push URL as HTTPS or SSH
  GitHub URLs for the expected repository;
- leaves an existing valid checkout's branch, files, index, remotes, and local
  changes untouched;
- stages each clone in a temporary directory before moving it into place;
- uses no-clobber promotion and stops if another process creates the destination
  during placement;
- rejects symbolic-link destinations so repository scope cannot escape the
  selected workspace parent;
- stops when a destination is not a Git checkout, has no `origin`, or points to
  another repository; and
- never fetches, pulls, switches, cleans, resets, installs dependencies, creates
  branches, or initializes Git in the workspace root.

If an explicit clone is interrupted, inspect the destination before retrying;
`gh repo clone` does not replace a valid existing checkout automatically.

## Start Working

Open the plain parent directory—not only one child checkout—as the editor or
agent workspace. Before changing anything:

1. Read `Scient/AGENTS.md`.
2. Identify which child repository owns the task.
3. Read that repository's `AGENTS.md`, `CONTRIBUTING.md`, and applicable setup
   documentation.
4. Run Git commands and create branches only inside the owning repository.
5. Put temporary worktrees outside the product workspace.
6. Use separate branches, commits, and pull requests for changes spanning more
   than one repository, and state their dependency order explicitly.

Dependency installation is repository-specific and intentionally excluded from
the bootstrap. Follow the current instructions in each repository rather than
assuming one workspace-wide package command.

The setup commands create only each ScientFactory-owned `origin`. They do not
create donor remotes. Before performing upstream intake, follow the owning
repository's `UPSTREAM.md` and verify that its official `upstream` fetch URL
is correct and its push URL is `DISABLED`.

## Troubleshooting

### GitHub CLI is not authenticated

Run `gh auth login`, confirm the intended account and Git protocol, and rerun
the bootstrap. Origin validation errors never print the configured remote URL,
and the command never prints or stores credentials.

### A destination already exists

Do not delete or rename it automatically. Read the reported path, inspect its
contents and `origin`, and decide whether it is the intended checkout or
unrelated work. The bootstrap fails closed so it cannot overwrite unique work.

### A repository is unavailable

Confirm organization membership and repository access with the project owner.
Do not substitute a fork or similarly named repository without an explicit
repository-ownership decision.
