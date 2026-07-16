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
| Synara-derived desktop | `main` | `50294e64` | `yaacovcorcos/papilab-desktop` |
| OpenCode | `dev` | `f85656c01` | `yaacovcorcos/opencode` |

## Verification

- Parent `git diff --check`: passed.
- Parent Markdown relative-link check: passed with zero broken links under
  `docs/`.
- PapiLab project-init package TypeScript check: passed.
- PapiLab project-init focused tests: 4 files, 43 tests passed.
- Synara-derived desktop brand check: passed (`PapiLab identity check passed`).
- Targeted renamed-surface tests: 4 files, 19 tests passed; the project-init
  package now passes 4 files and 43 tests.
- The desktop fork was reconciled with official upstream `3603a00e` and was
  zero commits behind it at exact tested head `2ecdbb5e`. Hosted run
  `29514254313` passed formatting, lint, typecheck, the full test suite, browser
  tests, the desktop build, preload verification, Windows process regression,
  and release smoke. PR #4 merged that tested head to owned `main` as
  `50294e6400737e28753d995f1252025f6c76e901`.
- OpenCode branch protection now requires the renamed `PapiLab quality` check;
  the former `LitRev source quality` requirement has been removed.

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
