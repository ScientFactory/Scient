# PapiLab Rename Execution Report

Status: Active
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Records the executed PapiLab identity cutover, verification results, and remaining external cutover work.
Doc type: Research evidence

## Scope

This report records the 2026-07-16 rename from LitRev to PapiLab across the
documentation-first parent repository, the owned Synara-derived desktop
checkout, the owned OpenCode maintenance checkout, and GitHub repository
identity. Historical Gate evidence and inherited Synara/OpenCode identities
remain unchanged where they are source or immutable historical truth.

## Completed Changes

- Parent GitHub repository renamed from `yaacovcorcos/LitRev` to
  `yaacovcorcos/PapiLab`; local `origin` updated accordingly.
- Owned Synara-derived repository renamed from `yaacovcorcos/synara` to
  `yaacovcorcos/papilab-desktop`; local `origin` updated accordingly and its
  official Synara `upstream` remains fetch-only.
- Active parent documentation, indexes, ADR path, first-slice plan path,
  skills, and lab bridge path use PapiLab terminology.
- Desktop product-owned identifiers use the `PapiLab`/`papilab` namespace,
  including the protocol, storage/home paths, package/initiation namespace,
  assets, runtime variables, updater channel, scratch workspace, and branch
  prefix. Inherited `@synara/*` and other upstream identity remains intact.
- Project initiation now lives at `packages/papilab-project-init/`, is named
  `@papilab/project-init`, and creates `.papilab/project.json`.
- OpenCode's owned maintenance command and test path are now
  `papilab:upstream-check`, `script/papilab-upstream-check.ts`, and
  `test/papilab/`.

## Source Revisions

| Checkout | Branch | Commit | Remote |
|---|---|---|---|
| Synara-derived desktop | `codex/project-init-kernel` | `9390d2ef` | `yaacovcorcos/papilab-desktop` |
| OpenCode | `dev` | `f85656c01` | `yaacovcorcos/opencode` |

## Verification

- Parent `git diff --check`: passed.
- Parent Markdown relative-link check: passed with zero broken links under
  `docs/`.
- PapiLab project-init package TypeScript check: passed.
- PapiLab project-init focused tests: 4 files, 37 tests passed.
- Synara-derived desktop brand check: passed (`PapiLab identity check passed`).
- Targeted renamed-surface tests: 4 files, 19 tests passed; the project-init
  package remains at 4 files, 31 tests passed.
- Synara-derived desktop release smoke and both full upstream source suites
  were not run locally because Bun is not installed in this environment. The
  hosted source checks remain the authoritative follow-up.
- OpenCode push protection still names the old required status
  `LitRev source quality`; updating that GitHub protection rule returned HTTP
  404 with the current token. The renamed workflow now reports
  `PapiLab source quality`, so branch protection must be reconciled before the
  next protected merge.

## Public Surface Status

`https://papilab.com` redirects to `https://www.papilab.com/`, which currently
serves a page titled `LitRev Dashboard`. No DNS or deployment change was made
from this repository. The owning deployment must update its application copy,
authentication callbacks, downloads, and any release/update endpoints before
the public rename can be declared complete.

The GitHub repository descriptions and topics now use the PapiLab identity.

## Historical Allowances

The exact `litrev-gate-*` tags, Gate 1/Gate 1.5 evidence, historical runtime
paths, and old source references remain preserved as historical records. They
are not active PapiLab namespaces.
