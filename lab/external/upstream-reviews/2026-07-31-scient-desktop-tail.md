# Upstream Review: Scient Desktop And Synara Tail, 2026-07-31

Status: Draft
Owner: Yaacov
Created: 2026-07-31
Last updated: 2026-07-31
Purpose: Records the complete Synara disposition review after the merged July 30-31 evidence through the current official tip.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Owned head inspected: `a9d762f8d5f05c5d1fc0042acd909acf892e435c`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Authoritatively covered boundary: `96d4f69bc3f8d48120142b035e8c25faaa096d10`
- Repo-local accepted `reviewedThrough`: `04703ddb4c951378aca9a1c7b71263b8648efd7f`
- Last observed tip: `35cab763c9e542b22d65bf910a36e99d33be8455`
- Current fetched tip: `35cab763c9e542b22d65bf910a36e99d33be8455`
- Current stable release: `v0.6.3`, peeled to `d958a9e583377a30cf4d97fb4c5e1d834eafbf92`
- Full required range: `96d4f69b..35cab763` (3 commits)
- Daily delta from the last observed tip: empty (0 commits)
- Authoritative-covered before this review: 0 of 3
- Newly dispositioned: 3 of 3
- Remaining undispositioned: 0

## Review Depth

Every commit received subject, parent, path, statistic, complete focused-patch,
dependency, protected-lane, current Scient seam, and test inspection. The range
is linear and the prior boundary remains an ancestor of the current tip. This
is source-review evidence, not proof that donor code executed correctly in
Scient. No donor or Scient UI was rendered, and no browser automation,
computer use, screenshots, geometry checks, visual tests, or manual UI
acceptance were performed.

## Complete Tail Ledger

| Official commit | User or operational effect | Donor quality | Current Scient behavior and owning seam | Concept fit and code portability | Difficulty and protected risk | Disposition | Selected now? |
|---|---|---|---|---|---|---|---|
| `e94a85cd` | Makes first-message sends stop looking locally stuck once their exact user message is durable, removes an unused cold-start model lookup, avoids duplicate provider-session scans, and trims truncated command summaries. | 4/5; useful measured startup and acknowledgement fixes with focused tests, but one commit mixes four seams. | Scient still performs the eager Codex `model/list`, acknowledges local dispatch only from turn/session transitions, scans sessions before and during ensure, and can leave a truncated Claude command summary ending in whitespace. Owners are `codexAppServerManager`, `ProviderCommandReactor`, `ChatView` dispatch logic, and `ClaudeAdapter`. | Medium concept fit; low direct portability because Scient has independently expanded provider, fork, skill-bootstrap, and queue semantics on these files. | Very Hard as a parent; provider/session lifecycle, local acknowledgement ordering, performance, and active historical provider overlap. | **Defer.** Reproduce and profile each sub-lane independently; do not import the mixed commit. | No; unrelated to the capability/MCP/browser/annotation architecture and not safely independent. |
| `71b25ecc` | Surfaces a provider start that times out instead of leaving a task forever in Starting, conditionally avoids overwriting a newer session, and retries a missing initial thread snapshot once. | 5/5; careful compare-and-set and recovery tests with explicit uncertain settlement. | Scient has provider command deadlines and startup reconciliation but lacks this exact conditional session update and first-snapshot retry contract. Owners are orchestration contracts/decider/reactor and the renderer event router. | High concept fit; low direct portability because current Scient has diverged orchestration, automation, provider, and projection consumers. | Very Hard; concurrency, stale-session overwrite, event ordering, contracts, recovery, and cross-repository protocol proof. | **Reimplement after a Scient-specific timeout/snapshot repro.** Preserve compare-and-set and bounded retry principles. | No; protected shared lifecycle breadth conflicts with the independent fast-lane requirement. |
| `35cab763` | Prevents repeated subscription restarts from starving initial chat hydration by reading the thread projection directly during recovery. | 5/5; focused correction to the preceding retry design with lifecycle coverage. | Scient has the same snapshot/replay event-router family but has independently diverged store and retention handling; no current reproduction proves starvation. | High concept fit; low direct portability and dependent on `71b25ecc`. | Hard; projection ordering, stale cursors, buffered events, and renderer/server lifecycle. | **Reimplement only with the preceding recovery contract and a current Scient repro.** | No; dependent, high-risk lifecycle work outside this architecture lane. |

## Mixed-Commit Sublanes

| Commit and sub-lane | Smallest Scient-native follow-up | Proof required |
|---|---|---|
| `e94a85cd` eager Codex model lookup | Remove only if startup tracing shows the request is redundant and lazy discovery remains account- and generation-correct. | Cold/warm startup timing, first model-picker load, offline/error fallback, shutdown cancellation. |
| `e94a85cd` exact first-message acknowledgement | Bind the local dispatch snapshot to the generated user-message id without weakening duplicate-send protection. | First send, resend, worktree setup, durable message before turn projection, failure, stale thread switch, double-submit. |
| `e94a85cd` session-scan deduplication | Return the before/after live session from the existing ensure operation rather than adding another process-wide lookup. | Existing, restarted, forked, fresh, disappearing, and raced sessions across every provider. |
| `e94a85cd` command-summary trimming | Apply the final `trimEnd` at Scient's shared summary boundary if the whitespace defect reproduces. | Exact 400-character whitespace/newline boundaries and non-command fallbacks. |
| `71b25ecc` timed-out start settlement | Add a conditional session transition keyed by the observed session generation/status and retain the uncertain-delivery activity. | Timeout, late success, concurrent restart, interruption, automation start, stale command, restart recovery. |
| `71b25ecc` and `35cab763` snapshot hydration | Prefer one owned direct projection read with a bounded fallback; never spin subscriptions indefinitely. | Draft promotion, missing snapshot, delayed creation, buffered events, retention eviction, reconnect, stale cursor, terminal failure. |

## Intake Decision

All three commits are valuable reliability evidence, but none is selected for
the current Scient capability, external MCP, automation authority, visible
browser, or scientific-annotation implementation. They are protected lifecycle
work with active historical overlap and must begin with current Scient
reproductions. Zero code from this tail was adopted, copied, adapted, or
reimplemented by this review.

## Resulting State

- Complete contiguous Synara evidence now covers through `35cab763c9e542b22d65bf910a36e99d33be8455`.
- Proposed repo-local `reviewedThrough`: `35cab763c9e542b22d65bf910a36e99d33be8455` on 2026-07-31.
- Literal `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`.
- Selective intake from this tail: none.
- Rolling issue: close only after the dependent repo-local checkpoint is accepted.
