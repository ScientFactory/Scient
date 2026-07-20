# GitHub Operating Model

Status: Active
Owner: Yaacov
Created: 2026-07-20
Last updated: 2026-07-20
Purpose: Defines how ScientFactory repositories, branches, pull requests, releases, deployments, permissions, and local worktrees are operated.
Doc type: Operational procedure

## Outcome

ScientFactory uses separate repositories for product authority, desktop code,
agent source, and the public website. Ordinary development lands in each
repository's integration branch. Shipping code is a separate, deliberate
promotion. Website production is the one exception: a reviewed merge to the
website's `main` branch deploys production automatically.

The local `ScientFactory/` directory is a plain container, not a monorepo and
not a Git repository. Every commit, branch, worktree, pull request, check, and
release belongs to exactly one child repository.

## Repository And Branch Map

| Repository | Local folder | Visibility | Integration branch | Release or deployment authority |
| --- | --- | --- | --- | --- |
| `ScientFactory/Scient` | `Scient/` | Private | `main` | No release branch. Product truth, architecture, plans, cross-repository pins, and operating procedures live here. |
| `ScientFactory/scient-desktop` | `scient-desktop/` | Public | `main` | `release/stable` is the only desktop release source. A merge to `main` does not release the app. |
| `ScientFactory/scient-agent` | `scient-agent/` | Public | `dev` | `release/stable` is the agent promotion boundary. Agent artifact publication remains disabled until an owned artifact contract exists. |
| `ScientFactory/ScientFactory-website` | `website/` | Public | `main` | `main` is the Cloudflare Pages production source. Pull requests receive preview deployments. |

The website repository uses `website/` locally because the parent folder
already supplies the ScientFactory context. The remote repository keeps the
explicit `ScientFactory-website` name.

## What Goes Where

Push a change to the repository that owns its implementation or authority:

- Product requirements, architecture decisions, company-to-product boundaries,
  cross-repository source pins, operating procedures, and accepted planning go
  to `Scient`.
- Desktop UI, desktop runtime, packaging, updater behavior, signing, and desktop
  release workflows go to `scient-desktop`.
- First-party agent source, inherited OpenCode review state, agent build logic,
  and agent release validation go to `scient-agent`.
- Marketing pages, download-page behavior, release-download metadata adapters,
  website redirects, edge functions, and website deployment configuration go
  to `ScientFactory-website`.

Do not duplicate a maintained implementation across repositories. A document
may link to another repository, but should not copy that repository's source or
claim authority over its release.

## Normal Change Flow

1. Refresh the owning repository from its remote integration branch.
2. Create one narrowly named branch and one dedicated worktree for the task.
3. Make scoped commits; never stage unrelated user or agent work.
4. Push the branch and open a pull request against the integration branch.
5. Wait for required checks and review. Resolve conversations before merging.
6. Squash-merge and delete the remote task branch.
7. Remove the task worktree and local task branch only after confirming the pull
   request is merged and the worktree is inactive and clean.

Use branch names that describe the work, such as `feature/...`, `fix/...`,
`docs/...`, or an agent-owned prefix. Do not develop directly on a release
branch.

## Local Worktrees

Keep primary checkouts as siblings:

```text
ScientFactory/
├── Scient/
├── scient-desktop/
├── scient-agent/
└── website/
```

Keep temporary worktrees outside that container, under:

```text
/Users/yaacov/REPOs/ScientFactory-worktrees/
```

Before removing a worktree, confirm all of the following:

- no active Codex task, terminal, editor, preview server, or build uses it;
- `git status --short` is empty, or every retained file has an explicit owner;
- its pull request is merged or its work has been deliberately abandoned; and
- any branch deletion is separate from worktree removal and is independently
  safe.

Never use blanket cleanup across the sibling repositories.

## Desktop Release Promotion

`scient-desktop/main` is the integration branch. It may continue moving without
changing the version installed by users.

To ship a desktop release:

1. Select and record the exact tested commit on `main`.
2. Open a promotion pull request from `main` to `release/stable`.
3. Require desktop quality, browser, build, and release-smoke checks on the
   promotion pull request.
4. Merge only after deciding that this exact commit should ship.
5. Run the release workflow from the resulting `release/stable` head.
6. Create an immutable version tag and GitHub Release from that exact head.
7. Verify the published artifacts, website download metadata, and an installed
   application before declaring the release live.

A green build on `main`, a draft release, or an artifact produced from another
commit is not a public release.

## Agent Release Promotion

`scient-agent/dev` is the integration branch. `release/stable` accepts promotion
pull requests from `dev`, plus narrowly scoped `hotfix/*` pull requests during
an emergency.

The `Scient source quality` and `Scient release policy` checks protect the agent
promotion boundary. The release-policy workflow validates branch provenance and
records the exact source SHA. It intentionally does not publish an agent binary
or package yet: the native Scient agent artifact, versioning, signing, and
consumer contract are not implemented. Enabling publication requires a reviewed
artifact contract and a separate workflow change; a branch promotion alone must
never invent a release.

## Website Deployment

Cloudflare Pages is connected directly to
`ScientFactory/ScientFactory-website`:

- pull requests build preview deployments;
- required `Website quality` and `Cloudflare Pages` checks must pass;
- merging to protected `main` deploys production;
- `scientfactory.com` and `www.scientfactory.com` point to that Pages project;
  and
- website code is not deployed from `scient-desktop` or from a website
  `release`/`deploy` branch.

This makes `main` unambiguous: it always means
`ScientFactory/ScientFactory-website:main` when discussing website production.
Rollback uses a reviewed revert or a known-good commit restored through a pull
request, followed by production verification.

## Cross-Repository Changes

When one outcome needs several repositories, use separate branches, commits,
and pull requests. Record the dependency order in every pull request.

Prefer this sequence:

1. land backward-compatible producer or contract changes;
2. land consumers against the available contract;
3. update cross-repository pins or canonical documentation in `Scient`; and
4. promote releases only after the integrated state is proven.

Do not use matching branch names as a substitute for explicit commit SHAs and
pull-request links.

## Hotfixes

For an urgent released-product fix:

1. branch `hotfix/<description>` from the affected repository's
   `release/stable` head;
2. make the smallest safe change and run the full release checks;
3. merge a reviewed pull request into `release/stable`;
4. publish and verify the fixed release from that exact head; and
5. immediately merge or reapply the hotfix into the integration branch so the
   fix cannot disappear from future releases.

Website incidents use a normal fix or revert pull request against website
`main`; there is no separate website release branch.

## Access And Review

Organization owners retain organization and repository administration. The
`Scient 001` team has write access to the four repositories. Yaacov and Yishay
are team maintainers. Team maintenance allows managing team membership and team
settings; it does not replace organization-owner authority or bypass repository
rules by itself.

Public code repositories require pull requests, one approval, current required
checks, resolved conversations, linear history, and no force-push or branch
deletion on protected branches. Repository administrators retain emergency
bypass so recovery is possible, but normal work follows the same pull-request
path.

`Scient` is private. On the organization's current GitHub Free plan, GitHub does
not enforce branch protection for that private repository. Treat `main` as
process-protected: use pull requests, scoped checks, review, and squash merges
even though the platform cannot enforce every rule. Re-evaluate native
protection if the repository becomes public or the organization plan changes.

## Definition Of Done

A repository change is complete only when:

- the owning pull request is merged and required checks passed;
- the intended integration or release branch contains the merge;
- deployment or publication is separately verified when applicable;
- linked repositories and canonical documentation are consistent;
- temporary worktrees and merged local branches are safely removed; and
- unrelated local files and active worktrees remain untouched.
