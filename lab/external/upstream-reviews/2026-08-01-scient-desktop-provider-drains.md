# Upstream Review: Scient Desktop Provider Drains, 2026-08-01

Status: Active
Owner: Yaacov
Created: 2026-08-01
Last updated: 2026-08-01
Purpose: Records the complete Synara review after the July 31 tail, including the provider-notification drain lifetime fix.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Owned head inspected: `6ff7f3692083d4006986c30150892dc2cbc6fd32`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Previous contiguous review-evidence boundary: `7367e77efb56bb37afc4f5288bae9f9cc2bd49f1`
- Bounded observation: 2026-08-01 03:10:21 IDT / 2026-08-01 00:10:21 UTC
- Observed official tip: `e701d207e5d88787fab77f1daf2683bd84724a03`
- Current stable release: `v0.6.3`, peeled to `d958a9e583377a30cf4d97fb4c5e1d834eafbf92`
- Complete range: `7367e77e..e701d207` (1 commit)
- Dispositioned: 1 of 1; remaining: 0
- Official-history check: the previous boundary remains an ancestor of the observed tip.
- Remote safety: the desktop `upstream` fetch URL is the official Synara repository and its push URL is `DISABLED`.

## Review Depth

The commit subject, parent, full changed-path set, statistics, complete focused
patch, surrounding provider-session implementation, session-scope cleanup,
current Scient seams, and existing provider tests were inspected. The donor
commit was decomposed because it combines a runtime reliability fix, a Claude
behavior comment, and a developer-only probe. No donor automation or probe was
executed. No UI files, styles, assets, screenshots, stories, responsive states,
motion, or accessibility behavior changed, so there is no separate visual-design
opportunity in this range.

This evidence dispositions the source range. It does not claim that donor code
executed correctly in Scient. The selected runtime behavior requires a separate
Scient-owned implementation and regression proof before intake.

## Complete Disposition Ledger

| Official commit and lane | Classification | User or operational effect | Current Scient seam and overlap | Dependencies and protected risk | Disposition | Selected now? |
|---|---|---|---|---|---|---|
| `e701d207` — Cursor, Droid, and Grok notification-drain lifetime; donor paths `apps/server/src/provider/Layers/{Cursor,Droid,Grok}Adapter.ts` | Safety/reliability; provider/runtime lifecycle | Keeps assistant text, tool updates, plans, and usage flowing after session startup returns. Without it, a drain forked under the startup caller can be interrupted with that caller, leaving the session apparently ready while later events disappear and the transcript stays empty. | Scient has the same three adapters, explicit per-session scopes, stored drain fibers, and `Effect.forkChild` calls at the corresponding drain sites. The session scopes already close on stop/failure, making them the narrow owned lifetime boundary. | Independent of the Claude comment and probe. Risk is lifecycle, shutdown, interruption, replay, duplicate consumers, and session-scope leakage. No storage, migration, credential, permission, updater, release, or UI contract changes are required. | **Reimplement.** Bind each drain to its existing Scient-owned session scope and add deterministic post-start delivery plus teardown tests. Do not import the mixed donor commit. | **Yes.** Prepare a separate bounded desktop intake PR; checkpoint and integration-base truth remain separate. |
| `e701d207` — Claude steer timing comment; donor path `apps/server/src/provider/Layers/ClaudeAdapter.ts` | Provider/protocol documentation | Clarifies that a steer queued behind a long tool call is read when the CLI constructs its next API request, after the tool returns. | Scient has the same provider-owned steering seam and an equivalent comment whose wording is slightly less precise. No runtime behavior changes in this lane. | Independent documentation only; must not overstate SDK guarantees beyond observed CLI behavior. | **Adapt as documentation only** if the bounded desktop intake touches the adjacent provider explanation; otherwise retain as a lesson. | Optional, non-blocking. |
| `e701d207` — `apps/server/steer-probe2.mjs` | Upstream-only developer experiment; security/release hygiene | One-off manual probe interrupts a long Bash tool call to observe queued steer timing. It has no shipped user experience. | Scient has maintained provider tests and must not retain an absolute developer executable path, `bypassPermissions`, forced `process.exit`, or an unbounded promise in product source. | Coupled to a local Claude installation and developer credentials; unsuitable for CI, packaging, or normal runtime. | **Reject.** Preserve the behavioral lesson in evidence; use hermetic tests or an explicitly authorized disposable probe if future reproduction is needed. | No. |

## UI And Product-Design Review

The range contains no direct user-interface or product-design change. Its user
impact is indirect but important: provider output that already belongs in the
existing transcript must remain visible and live. The selected implementation
must preserve current transcript presentation, status, focus, scrolling,
accessibility, and provider identity; it should not add new UI or copy merely to
mask a dead event drain.

## Intake Decision

Select a Scient-native reimplementation of the notification-drain lifetime
behavior for Cursor, Droid, and Grok. The smallest maintainable change is to
fork each existing drain into its already-owned `sessionScope`, retain explicit
fiber interruption and scope closure on stop/failure, and prove both delivery
after `startSession` settles and cessation after teardown. Do not cherry-pick
the mixed donor commit and do not add its probe file.

The Claude wording may be adapted as a documentation-only sub-lane. No donor
identity, storage, credentials, permissions, persistence, updater, release
automation, or commit ancestry is selected.

## Resulting State

- Complete contiguous Synara review evidence: through `e701d207e5d88787fab77f1daf2683bd84724a03`.
- Proposed repo-local `reviewedThrough`: `e701d207e5d88787fab77f1daf2683bd84724a03`; the accepted checkpoint remains unchanged until desktop PR #171 is refreshed, verified, reviewed, and merged.
- Literal `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`.
- Selected intake: Scient-owned provider-drain lifetime reimplementation in a separate desktop PR; exact owned PR and tested head remain pending.
- Rolling issue: close only after the repo-local checkpoint is accepted.
- Rollback: revert the parent evidence PR to restore the prior review boundary; product rollback remains independently owned by the future desktop intake PR.
