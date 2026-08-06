# T3 Foundation D4 Candidate Bootstrap Evidence

Status: Draft
Owner: Yaacov
Created: 2026-08-06
Last updated: 2026-08-06
Purpose: Records the exact D4 candidate creation, literal T3 ancestry, bounded safety envelope, verification, reviews, publication state, and remaining limitations.
Doc type: Research evidence

## Decision Context

[ADR-0005](../../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
accepts a fresh T3-derived successor application. The active
[migration plan](../../planning/t3-foundation-migration-plan.md) authorized D4
to create a private candidate from an exact official T3 base and prove a
collision-safe, production-dark foundation before feature migration.

This report records what the D4 drafts make true. It does not amend ADR-0005,
integrate either draft, authorize Proof 2 or D5, release an application, move
users, or cut over from the current Synara-derived Scient desktop.

## Exact Repository And Ancestry State

| State | Exact evidence |
|---|---|
| Parent Scient evidence base | `7ecea1840cbd5e6ac13e72a94e26bc1f7bf75a2e` on `ScientFactory/Scient` `origin/main` |
| Official T3 source | `https://github.com/pingdotgg/t3code.git`, `main` |
| Observed and selected D4 T3 base | `a2ca89aa10f13a2222e08afd98c66285121d5ba2` |
| Release tag at the selected base | `v0.0.32-nightly.20260806.1012` |
| Owned candidate | Private `https://github.com/ScientFactory/scient-desktop-next` |
| Candidate default branch | `main`, still exactly the selected T3 base while the safety envelope remains a draft |
| Candidate draft branch | `agent/d4-bootstrap-20260806` |
| Implemented and reviewed draft head | `ae4c1aba522ea5b1aad94754b42f10a39f888574` |
| Published candidate evidence | Draft [candidate PR #1](https://github.com/ScientFactory/scient-desktop-next/pull/1) |

The owned `origin` is writable. Official T3 is the candidate's fetch-only
`upstream`, whose push URL is `DISABLED`. No Synara remote is configured. The
candidate retains literal ancestry from the selected official T3 commit; an
observed later T3 tip is not an integration-base advance.

## Bounded D4 Safety Envelope

The draft changes only bootstrap and safety behavior needed to coexist with
the current app while remaining non-releasable:

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
  verification, and rollback.

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
tests, visual regression, or manual UI acceptance was performed. Hosted checks
for the exact candidate head were queued when this evidence was recorded; they
are not claimed green.

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

The candidate is eligible to remain a draft for D4 acceptance or revision.

## Limitations And Deferred Proof

- GitHub rejected private-repository branch-protection configuration with HTTP
  403 under the current plan. This must be resolved before public release
  authority is considered.
- The parent source lock and machine maintained-source manifest intentionally
  omit the candidate until the safety envelope and its repo-local state are
  integrated on the owned default branch. This dated report records the draft
  without pretending that draft head is accepted default-branch state.
- Hosted candidate CI was queued when recorded and is not substitute evidence
  for the exact successful local run.
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
| Selected | The exact T3 base is the candidate's literal ancestry and current owned `main`. |
| Implemented | The bounded safety envelope exists at draft head `ae4c1aba522ea5b1aad94754b42f10a39f888574`. |
| Published | Candidate PR #1 is an open draft. |
| Integrated | No. Candidate `main` remains the exact donor base. |
| Released or cut over | No. The current Synara-derived `scient-desktop` remains the supported product. |

The next decision is to accept or revise the exact D4/Proof 1 candidate and
this evidence update. Neither draft authorizes Proof 2, D5 feature work, cloud
enablement, release, or cutover. Closing the drafts leaves the current app
unchanged; the candidate repository and its literal donor-base history can be
retained as evidence without publication.
