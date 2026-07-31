# Upstream Review: Scient Desktop And Synara Tail, 2026-07-31

Status: Draft
Owner: Yaacov
Created: 2026-07-31
Last updated: 2026-08-01
Purpose: Records the complete Synara disposition review after the merged July 30-31 evidence through the current official tip.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Tested owned head: `aaf81de45909d090e024b00f2b1b528e134d7929`; hosted main CI run `30665802249` passed all jobs.
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Repo-local accepted `reviewedThrough`: `04703ddb4c951378aca9a1c7b71263b8648efd7f`
- Existing contiguous review evidence before this record: `04703ddb..96d4f69b` (31 commits), recorded in `2026-07-30-scient-desktop.md`; its checkpoint remains proposed until the dependent repo-local state is accepted.
- Review-evidence boundary entering this tail record: `96d4f69bc3f8d48120142b035e8c25faaa096d10`
- Prior tip captured by this record: `f972bd2eac0913101add6c7563877816eb4c8e21`
- Current fetched tip: `712f2950c83fecd98a83353fbaa1baf2e41fde3e`
- Current stable release: `v0.6.3`, peeled to `d958a9e583377a30cf4d97fb4c5e1d834eafbf92`
- Full accepted-boundary range: `04703ddb..712f2950` (40 commits)
- Complete tail dispositioned in this record: `96d4f69b..712f2950` (9 commits)
- New extension inspected after the prior revision of this record: `f972bd2e..712f2950` (4 commits)
- Previously dispositioned by contiguous repository evidence: 31 of 40
- Dispositioned in this record: 9 of 40
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
| `1887615c` | Mixed reliability/performance update: reuses Git's index stat cache for checkpoints, makes one Git status refresh asynchronous, normalizes provider warnings, proactively rotates one donor-specific retired gateway session, coalesces subscription recovery, hydrates promoted drafts, preloads the thread route, and marks an inherited development PATH as hydrated. | 3/5 overall; several strong focused tests and useful ideas, but seven unrelated seams are bundled and some rely on newer Synara-only lifecycle contracts. | Scient has the checkpoint and warning gaps. It already guards subscription startup equivalently. Its visible Git path uses a different broadcaster; promoted-draft recovery needs a current repro; its gateway uses stable session credentials with exact turn authority rather than Synara's retired-turn marker; the route and shell-hydration chains have diverged. | High for checkpoint/warning concepts, medium for draft recovery, low for direct parent portability. | Very Hard as a parent; performance, Git index correctness, provider lifecycle, projection ordering, browser proof, and developer environment behavior. | **Decompose. Adapt checkpoint seeding and warning normalization only; defer or reject the other lanes as recorded below.** | Yes; the two independent non-visual sub-lanes were later integrated through desktop PRs #175 and #174 without a parent cherry-pick. |
| `f972bd2e` | Shows provider, model, reasoning/thinking level, and fast mode in sidebar thread hover cards while sharing composer trait-label logic. | 3/5; useful helper extraction and unit coverage, but loose assertions do not prove the rendered hover card, accessibility, or visual quality, and the commit includes formatting-only churn. | Scient has the same hover-card, model formatter, provider icon, and composer-trait seams, but does not show model details there. | High concept fit and medium code portability. | Medium; presentation, truncation, unknown models, tooltip/keyboard accessibility, and visual acceptance. | **Adapt later as a separate human-validated visual feature; reject formatting-only sub-lanes.** | No; automated implementation is prohibited because correctness depends on visual and interaction proof. |
| `b477c821` | Extends the donor's cumulative thread-list anchoring behavior. | The useful behavior is cumulative with the preceding anchoring work rather than an independent portable change. | Scient owns its thread-list geometry and restoration behavior separately. | Medium concept fit; low direct portability. | Hard; list geometry, focus, scrolling, and human interaction proof. | **Adapt later as part of one cumulative anchoring change.** | No; retain the behavior for a separately bounded and human-validated adaptation. |
| `3aac6001` | Mixes Claude-native steering, further anchoring behavior, and a Codex path already covered by Scient. | The three sub-lanes have different ownership and cannot be dispositioned honestly as one import. | Scient has provider-specific steering seams, owned list anchoring, and an equivalent Codex behavior. | High concept fit for Claude steering, medium for anchoring, none for the duplicate Codex lane; low parent portability. | Very Hard as a parent; provider semantics plus visual list behavior. | **Decompose: reimplement Claude-native steering separately, adapt anchoring later, and reject the duplicate Codex lane.** | No parent intake. |
| `5266dd98` | Stabilizes the donor's cumulative anchoring behavior. | Useful only together with the preceding anchoring sequence and its geometry assumptions. | Scient's thread-list presentation remains independently owned. | Medium concept fit; low direct portability. | Hard; selection, scroll restoration, list updates, and visual proof. | **Adapt later with the cumulative anchoring sequence.** | No. |
| `712f2950` | Adds a dock launcher, repairs one missed promoted-draft recovery path, and refines the cumulative anchoring behavior. | The commit again crosses independent product, recovery, and presentation seams. | Scient already has equivalent or better dock-launch behavior; promoted-draft recovery still needs a current Scient reproduction; anchoring remains a human-validated presentation change. | None for the dock code, high concept fit for recovery, and medium for anchoring; low parent portability. | Very Hard as a parent; lifecycle recovery and visual interaction proof. | **Reject the dock launcher; reimplement draft-promotion recovery only after reproduction; adapt anchoring later with the cumulative sequence.** | No parent intake. |

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
| `b477c821`, `3aac6001`, `5266dd98`, and `712f2950` anchoring sequence | Adapt the cumulative behavior once at Scient's owned thread-list seam rather than importing intermediate donor states. | Selection changes, prepend/append, draft promotion, scroll restoration, focus, themes, responsive geometry, and human visual/interaction acceptance. |
| `3aac6001` Claude-native steering | Reimplement only the Claude-specific behavior through Scient's provider-owned steering contract. | Claude capabilities, unsupported modes, provider switching, persistence, restart, errors, and no Codex behavior regression. |
| `3aac6001` duplicate Codex path | Do not import; retain Scient's equivalent owned behavior. | Existing regression coverage remains green. |
| `712f2950` promoted-draft recovery | Reproduce the missed promotion case before adapting a bounded owned recovery path. | Delayed detail, reconnect, stale projection, retention eviction, duplicate events, and browser acceptance. |
| `712f2950` dock launcher | Do not import; Scient's current launcher is equivalent or better. | Existing dock-launch behavior and packaging checks remain green. |

## Intake Decision

The mixed parent commits are not portable. The two earlier bounded sub-lanes,
checkpoint index seeding and provider-warning normalization, were implemented
as independent Scient-native changes and integrated through desktop PRs #175
and #174 respectively. Neither imports donor ancestry, gateway authority,
persistence, identity, browser behavior, or automation truth. Claude-native
steering and promoted-draft recovery remain separate reimplementation
candidates; the latter still requires a current reproduction. The cumulative
anchoring and hover features remain later human-validated adaptations. The dock
launcher and duplicate Codex lane are rejected because Scient already has
equivalent or better owned behavior.

## Resulting State

- Complete contiguous Synara evidence now covers through `712f2950c83fecd98a83353fbaa1baf2e41fde3e`.
- Proposed repo-local `reviewedThrough`: `712f2950c83fecd98a83353fbaa1baf2e41fde3e`. The accepted repo-local checkpoint remains `04703ddb4c951378aca9a1c7b71263b8648efd7f` until dependent desktop PR #171 is updated and accepted.
- Literal `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`.
- Integrated Scient-native adaptations from `1887615c`: warning normalization through desktop PR #174, merged as `1d965f5d4ea21456e173a3df04677e926e7c96e9`, and checkpoint index seeding through desktop PR #175, merged as tested owned head `aaf81de45909d090e024b00f2b1b528e134d7929`.
- Rolling issue: close only after the dependent repo-local checkpoint is accepted.
