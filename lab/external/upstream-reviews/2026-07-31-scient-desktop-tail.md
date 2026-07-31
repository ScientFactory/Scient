# Upstream Review: Scient Desktop And Synara Tail, 2026-07-31

Status: Draft
Owner: Yaacov
Created: 2026-07-31
Last updated: 2026-07-31
Purpose: Records the complete Synara disposition review after the merged July 30-31 evidence through the current official tip.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Owned head inspected: `af413e30c2807ad396890a392981ae188fd0353f`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Authoritatively covered boundary: `96d4f69bc3f8d48120142b035e8c25faaa096d10`
- Repo-local accepted `reviewedThrough`: `04703ddb4c951378aca9a1c7b71263b8648efd7f`
- Last observed tip: `35cab763c9e542b22d65bf910a36e99d33be8455`
- Current fetched tip: `f972bd2eac0913101add6c7563877816eb4c8e21`
- Current stable release: `v0.6.3`, peeled to `d958a9e583377a30cf4d97fb4c5e1d834eafbf92`
- Full required range: `96d4f69b..f972bd2e` (5 commits)
- Daily delta from the last observed tip: `35cab763..f972bd2e` (2 commits)
- Authoritative-covered before this review: 0 of 5
- Newly dispositioned: 5 of 5
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
| `1887615c` | Mixed reliability/performance update: reuses Git's index stat cache for checkpoints, makes one Git status refresh asynchronous, normalizes provider warnings, proactively rotates one donor-specific retired gateway session, coalesces subscription recovery, hydrates promoted drafts, preloads the thread route, and marks an inherited development PATH as hydrated. | 3/5 overall; several strong focused tests and useful ideas, but seven unrelated seams are bundled and some rely on newer Synara-only lifecycle contracts. | Scient has the checkpoint and warning gaps. It already guards subscription startup equivalently. Its visible Git path uses a different broadcaster; promoted-draft recovery needs a current repro; its gateway uses stable session credentials with exact turn authority rather than Synara's retired-turn marker; the route and shell-hydration chains have diverged. | High for checkpoint/warning concepts, medium for draft recovery, low for direct parent portability. | Very Hard as a parent; performance, Git index correctness, provider lifecycle, projection ordering, browser proof, and developer environment behavior. | **Decompose. Adapt checkpoint seeding and warning normalization only; defer or reject the other lanes as recorded below.** | Yes, only the two independent non-visual sub-lanes; no parent cherry-pick. |
| `f972bd2e` | Shows provider, model, reasoning/thinking level, and fast mode in sidebar thread hover cards while sharing composer trait-label logic. | 3/5; useful helper extraction and unit coverage, but loose assertions do not prove the rendered hover card, accessibility, or visual quality, and the commit includes formatting-only churn. | Scient has the same hover-card, model formatter, provider icon, and composer-trait seams, but does not show model details there. | High concept fit and medium code portability. | Medium; presentation, truncation, unknown models, tooltip/keyboard accessibility, and visual acceptance. | **Adapt later as a separate human-validated visual feature; reject formatting-only sub-lanes.** | No; automated implementation is prohibited because correctness depends on visual and interaction proof. |

## Mixed-Commit Sublanes

| Commit and sub-lane | Smallest Scient-native follow-up | Proof required |
|---|---|---|
| `e94a85cd` eager Codex model lookup | Remove only if startup tracing shows the request is redundant and lazy discovery remains account- and generation-correct. | Cold/warm startup timing, first model-picker load, offline/error fallback, shutdown cancellation. |
| `e94a85cd` exact first-message acknowledgement | Bind the local dispatch snapshot to the generated user-message id without weakening duplicate-send protection. | First send, resend, worktree setup, durable message before turn projection, failure, stale thread switch, double-submit. |
| `e94a85cd` session-scan deduplication | Return the before/after live session from the existing ensure operation rather than adding another process-wide lookup. | Existing, restarted, forked, fresh, disappearing, and raced sessions across every provider. |
| `e94a85cd` command-summary trimming | Apply the final `trimEnd` at Scient's shared summary boundary if the whitespace defect reproduces. | Exact 400-character whitespace/newline boundaries and non-command fallbacks. |
| `71b25ecc` timed-out start settlement | Add a conditional session transition keyed by the observed session generation/status and retain the uncertain-delivery activity. | Timeout, late success, concurrent restart, interruption, automation start, stale command, restart recovery. |
| `71b25ecc` and `35cab763` snapshot hydration | Prefer one owned direct projection read with a bounded fallback; never spin subscriptions indefinitely. | Draft promotion, missing snapshot, delayed creation, buffered events, retention eviction, reconnect, stale cursor, terminal failure. |
| `1887615c` checkpoint index seeding | Copy the exact resolved working index into the throwaway checkpoint index before `git add -A`, with safe fallback to `read-tree HEAD`. | Normal and unborn repositories, linked worktrees, missing/copy-failing index, staged plus unstaged parity, live-index immutability, interruption, cleanup, and concurrency. |
| `1887615c` asynchronous Git refresh | Reimplement only at Scient's `GitManager`/`GitStatusBroadcaster` boundary if measurement shows network refresh blocks visible status. | Cold/stale/fresh remotes, offline and missing cwd, no stale overwrite, follow-up publication, cancellation, and measured latency. |
| `1887615c` warning normalization | Trim summary/details/path at `CodexAdapter`; omit empty optional fields while preserving fallback summaries, ranges, and unrelated events. | Surrounding and whitespace-only values, Unicode, non-string input, path/range preservation, deprecation/config events, and no new logging. |
| `1887615c` retired gateway rotation | Do not import. Revisit only if Scient later adopts per-turn credential retirement and can prove next-turn latency warrants proactive lifecycle mutation. | Exact generation, concurrent next send/stop/restart, failed rotation, shutdown, duplicated terminal events, and no valid-runtime interruption. |
| `1887615c` subscription and promoted-draft recovery | Keep Scient's existing subscription in-flight guard; reproduce the promoted-draft gap before adapting direct detail reconciliation. | Duplicate welcome/bootstrap, shell-snapshot promotion, delayed detail, reconnect, retention eviction, stale events, and required browser acceptance. |
| `1887615c` route preload and development PATH marker | Measure independently; do not import the absent Synara shell-hydration chain or obsolete route hook. | Startup traces, immediate navigation, offline chunk failure, empty PATH recovery, slow shell plugins, cancellation, and packaging separation. |
| `f972bd2e` model hover summary | Reuse one owned trait-summary helper only inside a dedicated visual/accessibility change. | Exact stored/runtime selection, unknown model, fast-only providers, truncation, keyboard/tooltip accessibility, themes, and human visual acceptance. |

## Intake Decision

The mixed parent commits are not portable. Two bounded sub-lanes are selected:
checkpoint index seeding improves automation and interactive turn latency in
large repositories, and provider-warning normalization makes MCP/configuration
diagnostics precise. Both are independent non-visual Scient-native adaptations
from current owned `main`; neither imports donor gateway authority, persistence,
identity, browser behavior, or automation truth. The promoted-draft and hover
features remain recommendations because their proof requires prohibited browser
or visual acceptance.

## Resulting State

- Complete contiguous Synara evidence now covers through `f972bd2eac0913101add6c7563877816eb4c8e21`.
- Proposed repo-local `reviewedThrough`: `f972bd2eac0913101add6c7563877816eb4c8e21` on 2026-07-31.
- Literal `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`.
- Selective intake from this tail: two independent Scient-native sub-lanes from `1887615c`; no donor commit ancestry.
- Rolling issue: close only after the dependent repo-local checkpoint is accepted.
