# Upstream Review: Scient Desktop And Synara, 2026-07-26

Status: Draft
Owner: Yaacov
Created: 2026-07-26
Last updated: 2026-07-26
Purpose: Records the complete Synara review from Scient's previous checkpoint through the official tip observed on 2026-07-26.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Initial owned head inspected: `dab9b6d58e2a3f3da02c5475b86dc083f71580f1`
- Publication-refresh owned head: `5d5df0c41e09a6dceb0bdb13f63167bc46ff3370`; the review reconciled desktop PR #129's newly merged migration-lineage guard before publication
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Previous `reviewedThrough`: `3a5720bdd0ae4ace444379cabf0a634941d232fd`
- Last tip observed by the intake automation: `3f66f8ee5b1e5d8aa682029b31b4b89b797a5e7f`
- Official tip fetched: `8ea6da0a0715c69f7b744fd4c8b38d698ab7687e`
- Latest stable release observed: `v0.6.1`, peeled to `3f66f8ee5b1e5d8aa682029b31b4b89b797a5e7f`
- Complete range: `3a5720bdd0ae4ace444379cabf0a634941d232fd..8ea6da0a0715c69f7b744fd4c8b38d698ab7687e` (144 commits)
- Daily delta: `3f66f8ee5b1e5d8aa682029b31b4b89b797a5e7f..8ea6da0a0715c69f7b744fd4c8b38d698ab7687e` (3 commits)
- Review evidence: fetched commit graph, per-commit subject/path/stat inspection, focused patches for candidate and protected lanes, current Scient source/tests, live open-PR and worktree overlap inventory.

## Review Depth

Every commit in the complete contiguous range received a disposition below. Broad
or mixed commits are decomposed in the named sub-lanes after the ledger. This is
a source-intake review, not a claim that donor code was executed or completely
audited. No donor UI was rendered and no browser, screenshot, geometry, visual,
or manual interaction validation was performed.

The shorthand in the ledger means:

- `GATEWAY`: reject the donor agent-gateway/session/credential architecture; retain bounded lessons only.
- `EQUIV`: Scient already has an equivalent or stronger owned behavior.
- `VISUAL`: potentially useful presentation idea, but appearance-dependent and not eligible for automatic intake.
- `BROAD`: broad refactor or architecture package without a bounded Scient gap.
- `RELEASE`: donor publication, packaging, or CI mechanics do not carry Scient release authority.
- `ABSENT`: the useful behavior depends on a donor subsystem or lifecycle seam Scient does not own.
- `OVERLAP`: useful behavior, but an active or ambiguous Scient lane touches the same seam.
- `LESSON`: retain the reliability or maintenance principle without code intake.

## Complete Commit Ledger

| Official commit | Classification | Disposition | Reason and follow-up |
|---|---|---|---|
| `40798196` | Agent gateway | Reject | `GATEWAY` |
| `e0ed7cca` | Gateway hardening | Reject | `GATEWAY` |
| `a3aab2f6` | Gateway privilege/UI | Reject | `GATEWAY` |
| `879cddcb` | Gateway isolation/lifecycle | Reject | `GATEWAY` |
| `2ea0163d` | Gateway privilege/token | Reject | `GATEWAY` |
| `14cb546f` | Gateway sessions/policy | Reject | `GATEWAY` |
| `608f164a` | Gateway reservations/token state | Reject | `GATEWAY` |
| `805e19cd` | Gateway hardening | Reject | `GATEWAY` |
| `f749431d` | Merge | Reject | `GATEWAY`; no independent behavior |
| `93674615` | Gateway metadata | Reject | `GATEWAY` |
| `b8ef45b0` | Merge | Reject | `GATEWAY`; no independent behavior |
| `f01a85ea` | Orchestration/UI refactor | Reject | `BROAD` |
| `8fca6844` | Gateway guidance/UX | Reject | `GATEWAY` |
| `0b31b907` | Merge | Reject | `GATEWAY`; no independent behavior |
| `94d7d921` | Gateway credentials | Reject | `GATEWAY` |
| `dc04c033` | Merge | Reject | `GATEWAY`; no independent behavior |
| `4588fa66` | Gateway turn authority/recovery | Reject | `GATEWAY` |
| `d4bff950` | Formatter-only | Reject | No user behavior |
| `14f0c53a` | Gateway recovery/lifecycle | Reject | `GATEWAY` |
| `113fd75c` | Merge | Reject | `GATEWAY`; no independent behavior |
| `77089dbb` | Gateway hardening | Reject | `GATEWAY` |
| `3b275aaa` | Workflow-card layout | Defer | `VISUAL` |
| `0d4c7203` | Agent-panel alignment | Defer | `VISUAL` |
| `4eee7a55` | Command-journal cleanup test | Reject | `ABSENT`; gateway-only lifecycle |
| `7e43730b` | Codex child-event isolation | Reject | `EQUIV`; Scient has primary-thread/active-turn guards |
| `3195cc1a` | Global new-thread project | Reject | `EQUIV`; Scient owns project-aware new-thread routing |
| `312a1cec` | Fast-mode picker layout | Defer | `VISUAL`; current Scient fast-mode semantics are stronger |
| `f4a020d0` | Composer clearance | Reject | `EQUIV` |
| `1e3a1410` | React/compiler cleanup | Reject | `BROAD`; no bounded gap |
| `8fc6c02d` | Model picker width | Defer | `VISUAL` |
| `710e3e4d` | Markdown heading hierarchy | Defer | `VISUAL` |
| `7c5bdded` | Merge | Reject | `GATEWAY`; no independent behavior |
| `a6b85d71` | Gateway recovery/waits | Reject | `GATEWAY` |
| `26b8fa76` | Merge | Reject | `GATEWAY`; no independent behavior |
| `a704822e` | Gateway cleanup ownership | Reject | `GATEWAY` |
| `db1022bb` | Gateway audit follow-up | Reject | `GATEWAY` |
| `f4973f38` | Gateway creation authority | Reject | `GATEWAY` |
| `633998e7` | Gateway interrupted creation | Reject | `GATEWAY` |
| `2e7fe849` | Gateway merge | Reject | `GATEWAY` |
| `7c5c3b3f` | Cleanup baseline | Reject | `BROAD` |
| `8e2ab3ca` | Dead-code deletion | Reject | `BROAD` |
| `38884977` | Domain consolidation | Reject | `BROAD` |
| `b34086d8` | Interface consolidation | Reject | `BROAD` |
| `c32caefc` | Runtime consolidation | Reject | `BROAD` |
| `5ab208a6` | Store decomposition | Reject | `BROAD` |
| `16b0f2c0` | Composer-store decomposition | Reject | `BROAD` |
| `c6d00279` | Chat controllers | Reject | `BROAD` |
| `f43a753d` | Sidebar controllers | Reject | `BROAD` |
| `84568be8` | Transcript/chat decomposition | Reject | `BROAD` |
| `65b6bd08` | Settings workflows | Reject | `BROAD` |
| `0a321adf` | Provider mapping seams | Reject | `BROAD`; Scient adapters have diverged |
| `44f93c0e` | Codex mapping seam | Reject | `BROAD` |
| `1c5889fe` | Runtime projection seam | Reject | `BROAD` |
| `1988db72` | Git/terminal probes | Reject | `BROAD` |
| `735864f6` | Projection codec | Reject | `BROAD` |
| `70f470d5` | Desktop protocol | Reject | `BROAD` |
| `c11f2204` | Browser policy | Reject | `BROAD`; Scient owns hardened browser boundaries |
| `4f2254c4` | Download policy | Reject | `BROAD` |
| `5502b01a` | Browser API consolidation | Reject | `BROAD` |
| `01a4692e` | Subagent scans | Reject | `BROAD` |
| `2be7c049` | Protocol mappings | Reject | `BROAD` |
| `4d127fcc` | Dead internal surfaces | Reject | `BROAD` |
| `035937b6` | Cleanup regression repairs | Reject | Coupled to rejected cleanup range |
| `1664ce2f` | Formatter-only | Reject | No independent behavior |
| `a7d2a142` | Architecture/UX bundle | Reject | `BROAD` |
| `b9c076f5` | Architecture cleanup | Reject | `BROAD` |
| `e0a3c457` | Dialog/icon polish | Defer | `VISUAL` |
| `c01c2511` | Startup replay pruning | Reject | `ABSENT`; donor-only runtime-open-turn repository/table, while Scient owns a different startup reconciler |
| `65fd4746` | Cross-task labels/sidebar order | Reject | `EQUIV` for behavior; remaining value is `VISUAL` |
| `d3b9c66d` | Bun build externalization | Reject | `EQUIV`; Scient owns separate build/release proof |
| `9ceb8f28` | Headless Antigravity capture | Reject | `EQUIV`; Scient's provider connection avoids donor GUI capture |
| `2227a4d7` | Live-thread sidebar priority | Reject | `EQUIV` |
| `7b91d562` | Pi model catalog | Reject | `EQUIV`; Scient uses discovery plus custom provider-qualified models |
| `011b80f9` | Claude context projection | Reject | `EQUIV`; current model/options and adapter tests cover it |
| `ac1a41c7` | Active-turn revert guard | Reject | `EQUIV`; Scient owns active-turn/checkpoint safeguards |
| `925b7dac` | Windows backend shutdown | Defer | High-quality but protected, broad lifecycle/update work; current main lacks full equivalence and active PRs #121/#126 overlap |
| `7dbe027f` | External MCP integration | Reject | `BROAD`; imports donor identity, runtime, credentials, and storage assumptions |
| `16029b0c` | Project spaces | Reject | Donor product/storage model conflicts with Scient project authority |
| `d23c6d72` | Interrupted worktree recovery | Defer | `LESSON`; require a specific Scient recovery defect before intake |
| `3cefd5a3` | Space-switcher sizing | Reject | Rejected product concept and `VISUAL` |
| `db07e3d2` | MCP home-dir handling | Reject | `ABSENT`; donor gateway subcommands are not owned |
| `58c37d9d` | Missing Codex cwd diagnosis | Reject | `EQUIV`; Scient separates CLI availability from project cwd failures |
| `b7617e0b` | Keyboard shortcuts | Defer | `VISUAL`/interactive and product-specific |
| `54158720` | AppSnap shortcut | Reject | Donor-only capture feature |
| `162c6619` | ACP permissions/release | Defer | Decomposed below; current main does not fully match the donor permission policy |
| `676b2850` | Space shortcuts | Reject | Rejected product concept |
| `d03a888b` | Running spinner | Reject | `EQUIV`; Scient already adopted reduced-motion-safe treatment |
| `00af505c` | Browser control recovery | Reject | `EQUIV`; Scient has owned browser recovery and trust boundaries |
| `950663e6` | Provider-path validation | Reject | `EQUIV`; current provider onboarding validates blank paths |
| `b6befa65` | MCP authorization UI | Reject | `GATEWAY` |
| `3fb8d71e` | Merge | Reject | No independent behavior |
| `9cce0225` | Merge | Reject | No independent behavior |
| `0ce3cbff` | Reliability/UX bundle | Reject | `BROAD`; bounded lessons were checked against current seams |
| `343bc071` | Formatter-only | Reject | No user behavior |
| `2552e7a4` | Gateway project filtering | Reject | `GATEWAY` |
| `d8e8b86c` | PR badge visibility | Reject | `EQUIV` behavior; remaining value is `VISUAL` |
| `634070dc` | Picker spacing | Defer | `VISUAL` |
| `779cd649` | Studio Git UI | Reject | `EQUIV`; Scient owns Studio Git and folder access |
| `3eb5b108` | Architecture/UX bundle | Reject | `BROAD`; OpenCode completion sub-lane is `EQUIV` |
| `b9937ada` | OpenCode completion quiet loop | Reject | `EQUIV`; Scient PR #120 owns completion backstops |
| `2e7ab4dd` | Select popup styling | Defer | `VISUAL` |
| `30bcf4dc` | Inline space creation | Reject | Rejected product concept |
| `a183bac9` | Commit-and-push shortcut | Reject | `EQUIV`; Scient owns branch/automation affordances |
| `f084e94e` | Architecture/workflow bundle | Reject | `BROAD`; bounded behaviors are `EQUIV` |
| `8ed0da89` | Implicit automation memory writes | Reject | Donor automation mutation authority is not imported |
| `406d9e0c` | Automation lifecycle | Reject | `EQUIV`; current owned automation state model is stricter |
| `e490b41c` | Automation reconciliation | Reject | `EQUIV`; remaining row presentation is `VISUAL` |
| `835fb20e` | Automation list review state | Defer | `VISUAL`; no non-visual fast-lane proof |
| `eccd2b05` | Synara v0.6.0 release | Reject | `RELEASE` |
| `ed6c98d6` | Linux packaging | Reject | `RELEASE`; Scient owns stricter Linux launcher validation |
| `54fcf73f` | Linux PTY packaging | Reject | `RELEASE` |
| `7cad8fc8` | Desktop packager lookup | Reject | `RELEASE` |
| `a5071ccc` | Windows release lockfile | Reject | `RELEASE` |
| `5b529325` | Windows staging lock | Reject | `RELEASE` |
| `867bf1af` | Windows staging args | Reject | `RELEASE` |
| `51f6a2c3` | Revert | Reject | Reverts rejected release-only change |
| `7d3b2854` | Revert | Reject | Reverts rejected release-only change |
| `3b75a322` | Release staging | Reject | `RELEASE` |
| `ac7ae66d` | Release finalization | Reject | `RELEASE` |
| `9e714dce` | Production-only staging | Reject | `RELEASE` |
| `20188659` | Frozen Windows staging | Reject | `RELEASE` |
| `5caad23b` | Unsigned Windows release | Reject | `RELEASE`; conflicts with Scient publication authority |
| `29161f77` | Bun Windows staging | Reject | `RELEASE` |
| `83f94ab0` | Windows CI staging | Reject | `RELEASE` |
| `942c59de` | Windows staging lock update | Reject | `RELEASE` |
| `f6c8bf33` | Windows production staging | Reject | `RELEASE` |
| `ea136916` | Builder resolution | Reject | `RELEASE` |
| `e1cd6127` | Pinned outbound DNS | Reject | `ABSENT`; helper belongs to rejected donor gateway/outbound subsystem |
| `2c237bfb` | New-chat project picker | Defer | `OVERLAP` with active PR #128 and appearance-dependent behavior |
| `afc69fb3` | Project-trigger color | Defer | `VISUAL` and `OVERLAP` with PR #128 |
| `807acfe3` | Diff refresh/toggle | Defer | Current main lacks both fixes; active PR #127 overlaps the exact files and behavior |
| `c3964039` | Full virtualized-diff copy | Defer | Valuable, but interactive/selection proof is prohibited and PR #127 overlaps |
| `6b0f6d70` | OpenCode plan-agent state | Reject | Donor plan-agent persistence is absent; Scient's OpenCode model differs |
| `97ca5097` | Pi ModelRuntime discovery | Defer | Valuable SDK-alignment lesson; broad provider/runtime dependency and active provider lanes |
| `8d247292` | Automation status icons | Defer | `VISUAL` |
| `e89af583` | Landing trigger styling | Defer | `VISUAL` and `OVERLAP` with PR #128 |
| `83b68523` | Architecture/reliability bundle | Defer | Decomposed below; no whole-commit intake |
| `54dff37d` | Build diagnostics cleanup | Reject | `RELEASE`; obsolete donor config |
| `5495a6e8` | Database recovery/migration guard | Defer | Decomposed below; current main has the lineage guard, while protected recovery/update lanes and other active overlap prohibit automatic intake |
| `47dc7145` | Windows migration CI | Defer | Current main has the merged lineage guard but not the donor recovery path or its Windows proof |
| `3f66f8ee` | Synara v0.6.1 release | Reject | `RELEASE` |
| `77d28c26` | Landing project text color | Defer | Quality 4/5; useful consistency, but purely `VISUAL` and overlaps dirty PR #128 |
| `0388a9b3` | Thread detail/process scanning | Adapt | Quality 5/5 overall; decomposed below and not selected now |
| `8ea6da0a` | Automation/process/recovery bundle | Defer | Quality 4/5 with extensive tests, but 187 files cross protected and visual lanes; decomposed below |

## Mixed-Commit Sublanes

| Commit and sub-lane | User/operational effect | Scient seam and disposition |
|---|---|---|
| `40798196` gateway credentials/control plane | Introduces tokens, MCP injection, gateway tools, sessions, and write-capable control authority. | **Reject.** Imports donor credential, session, permission, and automation authority. |
| `40798196` provider dispatch provenance | Propagates gateway-created origin across provider dispatch and thread creation. | **Reject.** Coupled to the rejected gateway; retain provenance-isolation principles only. |
| `40798196` agent-created-thread UI | Adds sidebar/chat origin labels and navigation for gateway-created threads. | **Defer.** Coupled to rejected gateway product assumptions and appearance dependent. |
| `40798196` profile/activity presentation | Adds unrelated profile and activity-heatmap behavior. | **Reject.** Unrelated to the gateway problem and presentation-specific. |
| `f01a85ea` gateway persistence and target resolution | Refactors credentials, sessions, durable operations, and target lookup. | **Reject.** Coupled to rejected gateway storage and authority. |
| `f01a85ea` cross-task dispatch provenance | Changes provider/adapters and event attribution for cross-task work. | **Reject.** Current Scient owns provider/thread provenance separately; retain isolation lessons only. |
| `f01a85ea` cross-task UI/session logic | Adds origin labels, thread-creation behavior, tool labels, and session-state presentation. | **Defer.** Appearance/interaction dependent and coupled to the gateway model. |
| `f01a85ea` fixtures and plan artifacts | Updates dev/browser fixtures and donor planning material. | **Reject.** Donor-only test/planning infrastructure. |
| `a7d2a142` gateway diagnostics and managed-worktree recovery | Adds diagnostic cursors, sanitized summaries, worktree setup/recovery, and durable gateway operations. | **Reject.** Coupled to the rejected agent-gateway authority, storage, and session model. |
| `a7d2a142` websocket admission/backpressure | Bounds and orders snapshot/live transport under pressure. | **Defer.** Retain the lesson; require a current repro before adapting donor internals. |
| `a7d2a142` completed-turn tool grouping | Collapses many tool rows behind a summary. | **Defer.** Appearance and interaction dependent; not eligible here. |
| `a7d2a142` remaining Git/automation/UI refactor | Mixes Git behavior, automation updates, sidebar/chat changes, and migrations. | **Reject.** No whole-commit intake; protected and visual lanes are not independently portable. |
| `b9c076f5` ACP runtime rewrite | Replaces a generated Effect ACP package with donor-local runtime/session primitives. | **Reject.** Broad protected provider/protocol rewrite with very low direct portability. |
| `b9c076f5` thread-detail retention/transport | Adjusts lease retention and websocket delivery around thread detail. | **Defer.** The useful ownership concept is reviewed separately in `0388a9b3`; active PR #123 overlaps the route seam. |
| `b9c076f5` timeline grouping and picker changes | Changes tool grouping, sidebar/chat, and composer pickers. | **Defer.** Visual/interactive and mixed with the rejected runtime rewrite. |
| `0ce3cbff` external MCP gateway | Extends donor MCP authorization, repositories, and overview. | **Reject.** Donor gateway identity/storage/authorization are not imported. |
| `0ce3cbff` cross-thread mentions | Adds context expansion and chips for mentioning other threads. | **Reject.** Scient already owns mention/context behavior; any gap needs a focused current repro. |
| `0ce3cbff` tool labels/summaries | Improves argument summaries and work-log labels. | **Defer.** Presentation-heavy; current Scient has owned tool labeling and no isolated gap was proven. |
| `0ce3cbff` composer/menu behavior | Changes first-send, menus, chips, selection, and project picking. | **Defer.** Visual/interactive and broad. |
| `3eb5b108` provider lifecycle and OpenCode completion | Hardens Droid/Grok/OpenCode runtime completion, event scoping, and transport. | **Reject.** Current main already includes Scient PR #120's owned OpenCode completion backstop; remaining providers need separate repros. |
| `3eb5b108` project creation | Adds a donor project dialog and path behavior. | **Reject.** Scient owns project initiation separately. |
| `3eb5b108` Spaces/sidebar/visual changes | Changes donor Spaces navigation, sidebar structure, and dialogs. | **Reject.** Conflicts with product authority and is appearance dependent. |
| `d23c6d72` interrupted worktree/startup recovery | Reclaims or explains worktrees left behind by interrupted creation. | **Defer.** Retain the lesson; require a specific current Scient recovery repro before adapting cleanup authority. |
| `d23c6d72` desktop shutdown/update preparation | Coordinates backend exit and update lifecycle during recovery. | **Defer.** Protected updater/process lane with active overlap in PRs #121/#126. |
| `d23c6d72` websocket session cleanup | Cleans connection-owned session state during disconnect/restart. | **Defer.** Retain the lesson; prove a gap before changing lifecycle code. |
| `d23c6d72` external MCP admission | Changes donor external-MCP bridge and admission behavior. | **Reject.** Rejected donor gateway/authorization model. |
| `d23c6d72` Spaces/menu/store polish | Mixes Spaces projection and UI changes into recovery work. | **Reject.** Conflicts with Scient product authority and is appearance dependent. |
| `f084e94e` automation persistence and proposal lifecycle | Adds migrations, proposal/memory/settings state, scheduler behavior, and write-capable gateway tools. | **Reject.** Imports donor automation mutation and persistence authority. |
| `f084e94e` bounded provider event ingress/reconciliation | Bounds callback queues and reconciles runtime events across adapters. | **Defer.** Valuable reliability lesson, but broad across every provider and no bounded current defect was established. |
| `f084e94e` deletion/terminal/server lifecycle | Coordinates active-thread deletion, runtime cleanup, terminal ownership, and transport. | **Defer.** Protected lifecycle behavior requiring dedicated cross-system proof. |
| `f084e94e` automation proposal UI | Adds proposal actions and routes that exercise donor automation mutation authority. | **Reject.** Coupled to the rejected automation persistence/control model. |
| `f084e94e` generic card/work-log presentation | Changes labels, cards, and notification presentation. | **Defer.** Appearance dependent and no isolated behavior gap was proven. |
| `83b68523` Opus 5 catalog | Makes the new model selectable with appropriate capabilities. | **Defer.** Active desktop PR #123 already owns this model/provider seam. |
| `83b68523` supervised process teardown | Avoids losing descendants during shutdown. | **Defer.** Retain the lesson; current Scient does not own the donor `supervisedProcessTeardown` subsystem. |
| `83b68523` remaining architecture/refactor | Changes many donor layers without one bounded user gap. | **Reject.** Broad direct portability is very low. |
| `162c6619` ACP permission policy | Prevents full-access auto-approval from bypassing Plan-mode or orphan-turn policy and normalizes the active interaction mode. | **Adapt.** Not selected now: current Scient auto-approves some Cursor/Grok full-access requests without the complete donor turn/plan/orphan policy, and this protected lane needs dedicated threat-modelled tests. |
| `162c6619` Droid/Grok/OpenCode plan lifecycle | Converts provider-specific plan approval/rejection into explicit proposal lifecycle while avoiding stale/orphan attribution. | **Defer.** Valuable but broad across three adapters, sessions, and approvals; establish provider-specific gaps before bounded work. |
| `162c6619` macOS release finalization | Finalizes and proves donor DMG/update-manifest mechanics. | **Reject.** Donor release authority and packaging assumptions do not transfer to Scient. |
| `925b7dac` graceful backend stop | Gives the Windows backend an authenticated graceful-stop request, bounded wait, exit proof, and one force fallback. | **Defer.** Donor quality is 5/5, but current main lacks the whole behavior, the change crosses desktop/server/update lifecycle boundaries, and active PRs #121/#126 overlap. Reassess on the owned backend lifecycle seam after those lanes resolve. |
| `925b7dac` updater preparation | Coordinates backend/database shutdown with update installation. | **Defer.** Protected updater and persisted-data lane; requires hosted Windows and release-specific proof outside this automation. |
| `5495a6e8` migration lineage guard | Fails CI when an already-shipped migration is renumbered or renamed. | **Reject.** Equivalent or stronger Scient-owned lineage validation merged in desktop PR #129 before publication refresh. |
| `5495a6e8` bounded crash supervision | Adds readiness-based backoff, a circuit breaker, bounded diagnostic output, and one recovery handoff for repeated backend-start failures. | **Adapt.** Not selected here: PR #126 overlaps much of this behavior, and current main does not yet provide it. |
| `5495a6e8` in-place database/update recovery | Suppresses backend restart while recovery owns the database and offers check/download/install when the normal app cannot open. | **Defer.** High user value but very high protected data-loss/updater risk, coupled to donor migration history and recovery UI; requires dedicated recovery and hosted release proof. |
| `5495a6e8` Opus/disabled-provider discovery | Restores model visibility across Canary/disabled-provider discovery cases. | **Defer.** Active PR #123 overlaps the provider/model seam; current main is not treated as equivalent. |
| `5495a6e8` Windows project loading | Repairs null projection bindings and makes the working-directory migration rerunnable. | **Defer.** Protected persisted-data lane requiring dedicated Windows and migration proof. |
| `5495a6e8` Spaces switching | Repairs donor Spaces navigation state. | **Reject.** Spaces is not accepted Scient product authority. |
| `807acfe3` diff-mode remount | Includes the render mode in the virtualized file-list key so switching modes cannot leave stale rows. | **Adapt.** Not selected now: current main lacks the fix, but active PR #127 owns the exact DiffPanel seam. |
| `807acfe3` live Git refresh guard | Returns early when branch discovery is null and gates status polling until branch state is ready, preventing a self-sustaining invalidation loop. | **Adapt.** Not selected now: current main lacks the guard, but active PR #127 owns the exact Git refresh seam. |
| `0388a9b3` thread-detail retention | Prevents an in-flight snapshot from repopulating stale thread detail after lease release, and evicts unowned details. | **Adapt.** Not selected now: active PR #123 touches `apps/web/src/routes/__root.tsx`; smallest future seam is a pure retention predicate plus EventRouter ownership tests. |
| `0388a9b3` process-scan throttling | Stops synchronous descendant scans from running on every teardown poll before the root exits. | **Defer.** Retain the lesson; the donor helper is absent from Scient and direct portability is low. |
| `8ea6da0a` automation runs/completion/self-cancellation | Adds dedicated run identity, completion policies, automation-mode contracts, and gateway-authorized self-cancellation. | **Reject.** Imports donor automation persistence and gateway mutation authority; no whole-lane portability. |
| `8ea6da0a` renderer crash recovery | Bounds automatic renderer reloads, then offers an actionable recovery prompt instead of looping forever. | **Defer.** High user value and donor quality 5/5, but it changes desktop lifecycle and visible recovery UI and requires prohibited interactive/visual validation. Smallest future seam: pure bounded-reload policy plus separately validated Electron wiring. |
| `8ea6da0a` shell hydration/executable lookup/open behavior | Hydrates the shell environment once, resolves executables across platform-specific paths, and reduces blocking OS calls. | **Defer.** Valuable performance/reliability lesson, but broad across environment trust, provider discovery, and process launch; require a current Scient repro and clean-profile proof. |
| `8ea6da0a` Codex/process supervision and provider maintenance | Recovers stuck provider processes, bounds maintenance, and adjusts worktree/process ownership. | **Defer.** Protected provider/session/process lane with active backend and packaged-startup overlaps; not independently fast-lane eligible. |
| `8ea6da0a` projection normalization and snapshot pipeline | Normalizes store projections, batches snapshot work, and repairs stale derived state. | **Defer.** Broad state-architecture change across server and web; no isolated current Scient failure was proven. |
| `8ea6da0a` donor migration/index cleanup | Drops donor orchestration indexes and changes automation/provider runtime persistence. | **Reject.** Donor schema lineage and storage assumptions must not enter Scient by direct intake. |
| `8ea6da0a` Git status, PR, and cache updates | Adjusts Git broadcaster/cache invalidation, diff totals, branch controls, and PR refresh. | **Defer.** Mixed operational/UI lane with active PR #127 overlap and no single independently proven gap. |
| `8ea6da0a` terminal lifecycle and identifiers | Stabilizes managed terminal wrappers, session IDs, and manager cleanup. | **Defer.** Protected process/session lifecycle; current Scient has owned terminal identity and needs a specific repro before changes. |
| `8ea6da0a` attachment/composer/chat behavior | Changes attachment identity, composer automation intent, chat state, and many control surfaces. | **Defer.** Broad behavior mixed with appearance and interaction; not eligible for automatic non-visual intake. |
| `8ea6da0a` React compiler/hot-path UI sweep | Reworks memoization and component primitives across most visible surfaces. | **Reject.** Mechanical/performance intent is useful, but the diff is appearance-sensitive, massive, and cannot be certified without prohibited UI validation. |

## Intake Decision

No product code was selected or implemented. The highest-value new behavior,
thread-detail retention ownership, is blocked from automatic intake by active
overlap. The full-diff copy and landing picker changes require prohibited visual
or interactive validation, and remaining behavior is equivalent, donor-coupled,
release-only, or too broad. Zero implementations is the quality-preserving result.

## Resulting State

- Proposed `reviewedThrough`: `8ea6da0a0715c69f7b744fd4c8b38d698ab7687e`
- `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`
- Tested owned head: `5d5df0c41e09a6dceb0bdb13f63167bc46ff3370`; the review began on `dab9b6d58e2a3f3da02c5475b86dc083f71580f1` and reconciled the merged lineage-guard delta at publication refresh; no donor product code was tested or integrated
- Rolling issue: desktop issue #15 is stale and should close only after this review-state change merges
- Remaining follow-up: re-evaluate thread-detail retention after PR #123 resolves, and full-diff copy after PR #127 resolves with explicit interactive validation outside this automation
