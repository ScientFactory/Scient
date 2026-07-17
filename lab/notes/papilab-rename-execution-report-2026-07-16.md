# PapiLab Rename Execution Report

Status: Active
Owner: Yaacov
Last updated: 2026-07-17
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
| Synara-derived desktop | `main` | `fd37cdcd` | `yaacovcorcos/papilab-desktop` |
| OpenCode | `dev` | `8c19505ec` | `yaacovcorcos/opencode` |

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
- The application-foundation follow-up was tested at exact head
  `f7760e9757e9df286c37317d1a3f2052d2e5949b`. Hosted run `29515163695`
  passed formatting, lint, typecheck, the full test suite, browser tests, the
  desktop build, Windows process regression, and release smoke. PR #5 merged
  that tested head to owned `main` as
  `bb7ee10afa2b6a462d8e13204261fb355503036b`.
- Later cosmetic and inherited-example cleanup landed through desktop PRs #7
  and #8 without changing the ownership boundary.
- The maintained desktop fork was then reconciled through official Synara
  v0.5.5 at upstream `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`.
  Exact head `d4b10c27339992e63a16e83f2384ca53ccacabca`
  passed hosted CI run `29567845155`, including formatting, lint, typecheck,
  the full unit and browser suites, desktop build, preload verification,
  Windows process regression, and release smoke. PR #9 merged it to owned
  `main` as `fd37cdcda16ff34c3b13d098e5a35d0d1aff5096`, zero commits
  behind that tested upstream revision.
- OpenCode branch protection now requires `PapiLab source quality`; the former
  `LitRev source quality` requirement has been removed. The workflow and
  required-check context were aligned during the reviewed 1.18.3 sync. Exact
  head `bb3e3867922a4f185f02541564bfb960e4fec03f` passed hosted run
  `29569910754`; PR #4 merged it to owned `dev` as
  `18ca88886d86e83ddd959f0f4eaf17948697ae17`.
- Official upstream review-tooltip follow-up `b527f605d9136a0b651cbc034e24ce02de15c631`
  was reviewed separately. Exact head
  `865f8bde1aa64b7993b8211664c544ba6a4d3d68` passed hosted run
  `29571215689`; PR #5 merged it to owned `dev` as
  `8c19505ecc2780bce01dd8acb3a695a6b3b8868b`.

## Public Surface Status

`https://papilab.com` redirects to `https://www.papilab.com/`, which currently
serves a page titled `LitRev Dashboard`. No DNS or deployment change was made
from this repository. The owner has explicitly deferred that separate public
cutover; it is not a blocker to closing the repository rename. The owning
deployment must update its application copy, authentication callbacks,
downloads, and any release/update endpoints before the public rename itself can
be declared complete.

The GitHub repository descriptions and topics now use the PapiLab identity.

## Historical Allowances

The exact `litrev-gate-*` tags, Gate 1/Gate 1.5 evidence, historical runtime
paths, and old source references remain preserved as historical records. They
are not active PapiLab namespaces.
