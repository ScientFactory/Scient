# Upstream Review: Scient Desktop And Synara, 2026-07-26

Status: Draft
Owner: Yaacov
Created: 2026-07-26
Last updated: 2026-07-26
Purpose: Records the complete Synara review from Scient's previous checkpoint through the official tip observed on 2026-07-26.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Owned head inspected: `dab9b6d58e2a3f3da02c5475b86dc083f71580f1`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Previous `reviewedThrough`: `3a5720bdd0ae4ace444379cabf0a634941d232fd`
- Last tip observed by the intake automation: `3f66f8ee44c0793436585b20388515be8f9e7ca0`
- Official tip fetched: `0388a9b397a12771a3716587269cbd967599736a`
- Latest stable release observed: `v0.6.1`, peeled to `3f66f8ee44c0793436585b20388515be8f9e7ca0`
- Complete range: `3a5720bdd0ae4ace444379cabf0a634941d232fd..0388a9b397a12771a3716587269cbd967599736a` (143 commits)
- Daily delta: `3f66f8ee44c0793436585b20388515be8f9e7ca0..0388a9b397a12771a3716587269cbd967599736a` (2 commits)
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
| `c01c2511` | Startup replay pruning | Reject | `EQUIV`; Scient reconciles and clears stale runtime state at startup |
| `65fd4746` | Cross-task labels/sidebar order | Reject | `EQUIV` for behavior; remaining value is `VISUAL` |
| `d3b9c66d` | Bun build externalization | Reject | `EQUIV`; Scient owns separate build/release proof |
| `9ceb8f28` | Headless Antigravity capture | Reject | `EQUIV`; Scient's provider connection avoids donor GUI capture |
| `2227a4d7` | Live-thread sidebar priority | Reject | `EQUIV` |
| `7b91d562` | Pi model catalog | Reject | `EQUIV`; Scient uses discovery plus custom provider-qualified models |
| `011b80f9` | Claude context projection | Reject | `EQUIV`; current model/options and adapter tests cover it |
| `ac1a41c7` | Active-turn revert guard | Reject | `EQUIV`; Scient owns active-turn/checkpoint safeguards |
| `925b7dac` | Windows backend shutdown | Reject | `EQUIV`; current owned lifecycle plus active PRs #121/#126 cover the seam |
| `7dbe027f` | External MCP integration | Reject | `BROAD`; imports donor identity, runtime, credentials, and storage assumptions |
| `16029b0c` | Project spaces | Reject | Donor product/storage model conflicts with Scient project authority |
| `d23c6d72` | Interrupted worktree recovery | Defer | `LESSON`; require a specific Scient recovery defect before intake |
| `3cefd5a3` | Space-switcher sizing | Reject | Rejected product concept and `VISUAL` |
| `db07e3d2` | MCP home-dir handling | Reject | `ABSENT`; donor gateway subcommands are not owned |
| `58c37d9d` | Missing Codex cwd diagnosis | Reject | `EQUIV`; Scient separates CLI availability from project cwd failures |
| `b7617e0b` | Keyboard shortcuts | Defer | `VISUAL`/interactive and product-specific |
| `54158720` | AppSnap shortcut | Reject | Donor-only capture feature |
| `162c6619` | ACP permissions/release | Reject | `EQUIV` permission boundaries; `RELEASE` for publication lane |
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
| `807acfe3` | Diff refresh/toggle | Reject | `EQUIV`; active PR #127 is the Scient-owned lane |
| `c3964039` | Full virtualized-diff copy | Defer | Valuable, but interactive/selection proof is prohibited and PR #127 overlaps |
| `6b0f6d70` | OpenCode plan-agent state | Reject | Donor plan-agent persistence is absent; Scient's OpenCode model differs |
| `97ca5097` | Pi ModelRuntime discovery | Defer | Valuable SDK-alignment lesson; broad provider/runtime dependency and active provider lanes |
| `8d247292` | Automation status icons | Defer | `VISUAL` |
| `e89af583` | Landing trigger styling | Defer | `VISUAL` and `OVERLAP` with PR #128 |
| `83b68523` | Architecture/reliability bundle | Defer | Decomposed below; no whole-commit intake |
| `54dff37d` | Build diagnostics cleanup | Reject | `RELEASE`; obsolete donor config |
| `5495a6e8` | Database recovery/migration guard | Reject | `EQUIV`; Scient PR #49 research and active PR #129 own the protected lane |
| `47dc7145` | Windows migration CI | Reject | `EQUIV`; active PR #129 owns the exact proof lane |
| `3f66f8ee` | Synara v0.6.1 release | Reject | `RELEASE` |
| `77d28c26` | Landing project text color | Defer | Quality 4/5; useful consistency, but purely `VISUAL` and overlaps dirty PR #128 |
| `0388a9b3` | Thread detail/process scanning | Adapt | Quality 5/5 overall; decomposed below and not selected now |

## Mixed-Commit Sublanes

| Commit and sub-lane | User/operational effect | Scient seam and disposition |
|---|---|---|
| `83b68523` Opus 5 catalog | Makes the new model selectable with appropriate capabilities. | **Defer / overlap.** Active desktop PR #123 already owns this model/provider seam. |
| `83b68523` supervised process teardown | Avoids losing descendants during shutdown. | **Defer / lesson.** Current Scient does not own the donor `supervisedProcessTeardown` subsystem; prove a Scient lifecycle defect first. |
| `83b68523` remaining architecture/refactor | Changes many donor layers without one bounded user gap. | **Reject.** Broad direct portability is very low. |
| `0388a9b3` thread-detail retention | Prevents an in-flight snapshot from repopulating stale thread detail after lease release, and evicts unowned details. | **Adapt later.** Current Scient lacks the exact retention guard, but active PR #123 touches `apps/web/src/routes/__root.tsx`; the lane is not independently mergeable now. Smallest future seam: a pure retention predicate plus EventRouter ownership tests. |
| `0388a9b3` process-scan throttling | Stops synchronous descendant scans from running on every teardown poll before the root exits. | **Defer / lesson.** Quality 4/5, but the donor helper is absent from Scient; direct portability is low and dependency risk is high. |

## Intake Decision

No product code was selected or implemented. The highest-value new behavior,
thread-detail retention ownership, is blocked from automatic intake by active
overlap. The full-diff copy and landing picker changes require prohibited visual
or interactive validation, and remaining behavior is equivalent, donor-coupled,
release-only, or too broad. Zero implementations is the quality-preserving result.

## Resulting State

- Proposed `reviewedThrough`: `0388a9b397a12771a3716587269cbd967599736a`
- `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`
- Tested owned head: source inspection base `dab9b6d58e2a3f3da02c5475b86dc083f71580f1`; no product code was tested or integrated
- Rolling issue: desktop issue #15 is stale and should close only after this review-state change merges
- Remaining follow-up: re-evaluate thread-detail retention after PR #123 resolves, and full-diff copy after PR #127 resolves with explicit interactive validation outside this automation
