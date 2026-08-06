# T3 Foundation D4 Candidate Bootstrap Evidence

Status: Active
Owner: Yaacov
Created: 2026-08-06
Last updated: 2026-08-06
Purpose: Records the exact D4 candidate creation, literal T3 ancestry, bounded safety envelope, integration, local development path, verification, and remaining limitations.
Doc type: Research evidence

## Decision Context

[ADR-0005](../../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
accepts a fresh T3-derived successor application. The active
[migration plan](../../planning/t3-foundation-migration-plan.md) authorized D4
to create a private candidate from an exact official T3 base and prove a
collision-safe, production-dark foundation before feature migration.

This report records the completed D4 state. It does not amend ADR-0005,
authorize unrelated Proof 2 or D5 work, release an application, move users, or
cut over from the current Synara-derived Scient desktop.

## Exact Repository And Ancestry State

| State | Exact evidence |
|---|---|
| Parent Scient evidence base | `7ecea1840cbd5e6ac13e72a94e26bc1f7bf75a2e` on `ScientFactory/Scient` `origin/main` |
| Official T3 source | `https://github.com/pingdotgg/t3code.git`, `main` |
| Observed and selected D4 T3 base | `a2ca89aa10f13a2222e08afd98c66285121d5ba2` |
| Release tag at the selected base | `v0.0.32-nightly.20260806.1012` |
| Owned candidate | Private `https://github.com/ScientFactory/scient-desktop-next` |
| D4 safety implementation head | `ae4c1aba522ea5b1aad94754b42f10a39f888574` on `agent/d4-bootstrap-20260806` |
| D4 safety integration | [Candidate PR #1](https://github.com/ScientFactory/scient-desktop-next/pull/1), squash merge `3e8f7bc0e18be4a42c23b021e68bf30e3690bc4d` |
| GitHub-hosted CI integration | Candidate PR #3, squash merge `742cb7c0ef48545f238781efb7413ff222de7410` |
| Blacksmith removal | [Candidate PR #4](https://github.com/ScientFactory/scient-desktop-next/pull/4), squash merge `35138dedac6aa87890552ae09467bc8ec3ba0583` |
| Managed local development app | [Candidate PR #2](https://github.com/ScientFactory/scient-desktop-next/pull/2), reviewed head `70ae73dcadb7933e583cda5298ed1462c3895d68`, squash merge `bc22a67f4051965d13f35ab75cfa50464c5a65cd` |
| Candidate default branch after D4 | `main` at `bc22a67f4051965d13f35ab75cfa50464c5a65cd` |

The owned `origin` is writable. Official T3 is the candidate's fetch-only
`upstream`, whose push URL is `DISABLED`. No Synara remote is configured. The
candidate retains literal ancestry from the selected official T3 commit; an
observed later T3 tip is not an integration-base advance.

## Bounded D4 Safety Envelope

The integrated D4 work changes only bootstrap, safety, CI portability, and
local-development behavior needed to coexist with the current app while
remaining non-releasable:

- a provisional technical candidate identity isolates application IDs,
  protocols, state roots, Electron partitions, and client persistence;
- the compiled candidate ignores ambient inherited `T3CODE_HOME` and inherited
  `t3Home` bootstrap state, while an explicit candidate CLI `--base-dir`
  remains authoritative;
- the Windows/WSL path passed by the candidate uses its candidate-specific
  POSIX state path;
- cloud routes, provider-identity delivery, OTLP, PostHog, service commands,
  workflow publication, signing, update publication, and release authority
  fail closed by default; and
- repository-local governance records exact ancestry, upstream mode,
  protected divergence, license/notice obligations, secret boundaries,
  verification, and rollback;
- inherited Blacksmith runner labels are removed in favor of standard GitHub
  runners, without installing or authorizing a third-party CI app; and
- `Scient Next (Dev)` provides one managed, checkout-owned macOS development
  launcher with isolated state, explicit status/log/stop/install/uninstall
  commands, and a maintainer runbook.

This is a provisional technical identity, not public rebranding. Inherited T3
web title and boot-shell copy remain unchanged. D4 did not implement scientific
features, move user data, enable cloud or mobile services, change the current
Scient desktop, publish releases, or alter website/download surfaces.

## Verification

Final local verification ran on 2026-08-06 at 12:26:21 Asia/Jerusalem
(09:26:21 UTC) against exact head
`ae4c1aba522ea5b1aad94754b42f10a39f888574`, using Node `24.14.0` and pnpm
`11.10.0`:

- format passed across 2,425 files; lint and typecheck passed, with only
  inherited typecheck suggestions;
- focused D4 verification passed 6 files and 194 tests; the full non-visual
  test run passed 207 files with 2 skipped and 1,873 tests with 7 skipped; and
- the web, marketing, server, and desktop builds, non-visual desktop smoke,
  `git diff --check`, artifact check, and clean-worktree check passed.

No computer use, browser automation, screenshots, geometry checks, visual
tests, visual regression, or manual UI acceptance was performed by the
implementation agent. Candidate PR #2's exact final head additionally passed
three focused launcher, lifecycle, and identity files with 22 tests, focused
formatting, JSON parsing, and `git diff --check`. Hosted release smoke passed.
On exact candidate `main`, hosted CI run
[`31116906719`](https://github.com/ScientFactory/scient-desktop-next/actions/runs/31116906719)
passed Check, including typecheck and the desktop build. Test, mobile static,
and release smoke failed before checkout while GitHub returned Service
Unavailable, Internal Server Error, or Bad Gateway resolving action downloads;
they are infrastructure failures and are not claimed green.

## Independent D4 Reviews

Exactly three non-author read-only reviews examined only the D4
`a2ca89aa10f13a2222e08afd98c66285121d5ba2..ae4c1aba522ea5b1aad94754b42f10a39f888574`
delta and the minimum adjacent inherited code needed to validate it. They did
not review the whole T3 repository.

1. Correctness, reliability, concurrency, lifecycle, performance, and
   regression review found no unresolved P0, P1, or P2 issue.
2. Security, privacy, data loss, credentials, sessions, permissions, updater,
   release, and production-dark boundary review found no unresolved P0, P1, or
   P2 issue.
3. Architecture, maintainability, Scient ownership and identity, T3 lineage,
   user behavior, test sufficiency, and D4 eligibility review found no
   unresolved P0, P1, or P2 issue.

Those reviews supported integration of the bounded safety envelope. They did
not certify the whole inherited T3 repository or authorize later product work.

## Limitations And Deferred Proof

- GitHub rejected private-repository branch-protection configuration with HTTP
  403 under the current plan. This must be resolved before public release
  authority is considered.
- The parent source lock and machine maintained-source manifest still omit the
  candidate. Changing either snapshot activates a strict current-head gate for
  all recorded public sources, while the current verifier also uses
  unauthenticated raw GitHub requests that cannot read this private repository.
  A later focused operations change must reconcile the public snapshots and add
  a least-privilege private-repository evidence path; this dated report owns the
  exact D4 state until then.
- Standard GitHub-hosted jobs intermittently failed while resolving action
  downloads after Blacksmith removal. Successful local exact-head checks, the
  earlier hosted release smoke, and the exact-main hosted Check are recorded
  separately; no setup failure is called green.
- No packaged Windows/WSL launch was performed. The path and state behavior is
  covered by focused code tests and static verification, but later platform
  proof remains required.
- Production cloud-secret lifecycle, selected-user cloud, mobile product
  behavior, final branding, updater/signing authority, legacy-state import,
  scientific seams, and hostile-upstream update cost remain later gates.
- An operator can still deliberately provide an explicit candidate path. D4
  prevents ambient and inherited accidental reuse; later transition work owns
  compatibility and import policy.

## State Distinctions And Next Gate

| Term | D4 state |
|---|---|
| Observed | Official T3 base `a2ca89aa10f13a2222e08afd98c66285121d5ba2` and nightly tag were inspected and selected. |
| Reviewed | The exact candidate base-to-head D4 delta and local verification evidence received three scoped reviews. |
| Selected | The exact T3 base remains literal ancestry of candidate `main`; later observed T3 tips do not move it. |
| Implemented | The bounded safety envelope was reviewed at `ae4c1aba522ea5b1aad94754b42f10a39f888574`; CI portability, Blacksmith removal, and the managed development app were implemented in their own candidate lanes. |
| Published | Candidate PRs #1, #2, #3, and #4 were published and merged; no release artifact was published. |
| Integrated | Yes. Candidate `main` is `bc22a67f4051965d13f35ab75cfa50464c5a65cd`, with the selected T3 base in literal ancestry. |
| Released or cut over | No. The current Synara-derived `scient-desktop` remains the supported product. |

D4 is complete. The next bounded migration slice is to plan and implement the
candidate's Scient rebranding and product-identity cleanup without sacrificing
literal T3 ancestry, easy upstream merges, attribution, or the D4 isolation
boundaries. D4 completion does not authorize unrelated feature work, cloud
enablement, release, user-data migration, or cutover.
