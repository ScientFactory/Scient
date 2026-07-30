# Upstream Review: Scient Desktop And Synara, 2026-07-30

Status: Draft
Owner: Yaacov
Created: 2026-07-30
Last updated: 2026-07-30
Purpose: Records the complete Synara disposition review from the accepted July 29 checkpoint through the current official tip.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Owned head inspected: `a9d762f8d5f05c5d1fc0042acd909acf892e435c`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Accepted `reviewedThrough`: `04703ddb4c951378aca9a1c7b71263b8648efd7f`
- Last tip observed by the intake automation: `04703ddb4c951378aca9a1c7b71263b8648efd7f`
- Official tip fetched: `47e71197781f15eea1db957b7d98339ef5f24fd7`
- Latest stable release observed: `v0.6.3`, peeled to `d958a9e583377a30cf4d97fb4c5e1d834eafbf92`
- Complete and daily range: `04703ddb..47e71197` (20 commits)
- Review evidence: fetched commit graph; every subject, path set, statistic, parent, dependency, workflow, migration, release, and surrounding commit; focused patches for candidates and protected lanes; current Scient source/tests; live PR/worktree overlap.

## Review Depth And Boundaries

Every commit in the complete contiguous range received a disposition below. Merge commits remain visible and are not double-counted as independent features. Broad commits retain parent rows and named sub-lanes.

This is source-intake evidence, not a claim that donor code was executed or completely audited. No donor or Scient UI was rendered. No computer use, browser automation, screenshots, geometry checks, visual tests, or manual UI acceptance were performed.

The companion [T3 scheduled review](2026-07-30-t3-code.md) records all 198 commits in the required reference-donor range. T3 remains research-only and its durable targeted-review boundary does not advance.

## Complete Synara Commit Ledger

| Official commit | User or operational effect | Donor quality | Current Scient behavior and fit | Portability, difficulty, and risk | Disposition and recommendation |
|---|---|---|---|---|---|
| `8f6521a6` | Adds provider-agnostic visible-browser tools for navigation, input, waits, screenshots, uploads, diagnostics, and provider MCP injection. | 4/5; extensive contracts and tests, but 151 files and about 29.6k additions. | Scient has an owned browser panel and native-pipe bridge, but no equivalent general provider-agnostic browser automation host. Concept fit is high. | Low direct portability; Very Hard. Browser permissions, uploads, screenshot privacy, trusted input, session leases, credentials, gateway transport, packaging, and active agent-gateway overlap. | **Reimplement later.** Specify Scient gateway/browser authority first and require nonvisual contracts plus separately authorized browser and human acceptance. |
| `19ef8708` | Reconciles the browser-control branch with then-current main. | 3/5; necessary integration maintenance, not independent behavior. | No standalone Scient gap beyond the parent feature. | None independently; Hard conflict-resolution lineage. | **Defer with `8f6521a6`.** Do not import a merge commit separately. |
| `e3850b69` | Lets users capture persistent DOM annotations and carry them as composer references and handoff context. | 4/5; comprehensive feature and tests, but 71 files and about 7.3k additions. | High scientific-workflow concept fit for pointing at exact browser evidence; Scient lacks this owned annotation model. | Low direct portability; Very Hard. Webview security, redaction, persistence, drafts, handoff, timeline layout, accessibility, and browser acceptance. | **Reimplement later.** Start with an evidence-selection authority and redaction contract, not donor UI/state. |
| `d1f3c935` | Hardens annotation metadata and thread-handoff serialization. | 5/5; focused contract follow-up. | Valuable invariant only if an annotation model is accepted. | Low; Hard and dependent on `e3850b69`. | **Defer.** Retain metadata minimization and validation as requirements. |
| `f7dd807d` | Formats the annotation implementation. | 3/5; mechanical cleanup. | No independent user or operational gap. | None; Easy but entirely parent-dependent. | **Reject as standalone intake.** |
| `daf55e8a` | Aligns desktop annotation identity and browser-host contracts. | 4/5; precise compile/contract repair. | No applicable seam without the parent architecture. | Low; Hard due Electron/browser identity. | **Defer with the parent.** |
| `f29087fb` | Completes annotation draft typing. | 4/5; small correctness follow-up. | No current Scient annotation draft type. | Low; Medium and parent-dependent. | **Defer with the parent.** |
| `bb6b9dc4` | Allows annotation-linked timeline estimates without an item id. | 3/5; one-line compatibility change. | Scient timeline identity rules differ; no reproduced gap. | Low; Medium lifecycle risk despite tiny patch. | **Defer.** Reproduce on a future Scient annotation seam. |
| `b35ed506` | Isolates annotation edit-predicate tests. | 4/5; sound test factoring. | Test-only and dependent on the absent parent feature. | None; Easy. | **Reject as standalone intake.** |
| `ce078e1e` | Removes a stale annotation validator after the contract changed. | 4/5; appropriate cleanup. | No matching validator or feature. | None; Easy but parent-dependent. | **Reject as standalone intake.** |
| `e9fb1dd6` | Hardens browser diagnostics, target selection, selector handling, and pipe-server behavior after review. | 5/5; focused security/reliability follow-up with tests. | Scient has related browser/session code, but this patch targets the unowned automation host. | Low; Hard. Browser privacy, target ownership, and active gateway overlap. | **Defer with `8f6521a6`.** Preserve the failure-redaction and target-ownership lessons. |
| `9f84d647` | Merges browser-control review fixes into the annotation branch. | 3/5; integration-only. | No independent behavior beyond already listed parents. | None independently; Hard lineage. | **Defer with both parent features.** |
| `0c85e88f` | Redacts contenteditable descendants from captured annotations. | 5/5; focused privacy hardening with end-to-end coverage. | Scient has no DOM-annotation capture path, but the privacy invariant is directly relevant. | Medium concept portability; Hard because browser capture and appearance-dependent proof are required. | **Reimplement with any future annotation feature.** Never capture editable descendant content by default. |
| `c67ccc72` | Tightens trusted input, wait/evaluation, Pi adapter, and desktop automation host behavior after review. | 5/5; good adversarial follow-up. | Related Scient browser and provider seams are independently owned and actively overlapping. | Low; Very Hard. Trusted input, provider sessions, browser lifecycle. | **Defer with `8f6521a6`.** |
| `f16bda8e` | Merges the latest browser-control review fixes into annotations. | 3/5; integration-only. | No independent Scient behavior. | None independently; Hard lineage. | **Defer with parent features.** |
| `9d7c2df8` | Prevents a poison runtime-journal row or degraded event pump from killing active turns; heals pumps and improves reconciliation/fork diagnostics. | 5/5; 486 additions with careful attempt/time gates and lifecycle tests. | Scient owns analogous runtime ingestion, command, projection, and provider-manager seams but has no equivalent poison-row quarantine. User benefit is high if the failure reproduces. | Low direct portability; Very Hard. Data loss, dead-letter authority, provider sessions, concurrency, recovery, and active provider/gateway overlap. | **Reimplement after a Scient-specific repro.** Design quarantine retention, user visibility, replay, and recovery before mutation. |
| `c6edf2da` | Caps long subagent, workflow, and task lists so they cannot push the composer off-screen. | 5/5; small shared token and regression test. | Scient has the same stacked-panel primitives and currently lacks the cap. High concept fit. | High code portability; Easy technically, but correctness/value are visual, responsive, and interaction-dependent. | **Adapt after human visual/accessibility acceptance.** Ineligible for unattended intake. |
| `10cc6260` | Merges the browser-control feature into main. | 3/5; integration-only. | No new behavior beyond `8f6521a6` and `e9fb1dd6`. | None independently; Very Hard donor ancestry. | **Reject as standalone intake; follow parent disposition.** |
| `2ef4913d` | Reconciles main after browser control and annotation work. | 3/5; integration-only conflict resolution. | No independent Scient gap. | None independently; Hard lineage. | **Reject as standalone intake; follow parent dispositions.** |
| `47e71197` | Merges persistent DOM annotations into main. | 3/5; integration-only. | No new behavior beyond the annotation series. | None independently; Very Hard donor ancestry. | **Reject as standalone intake; follow `e3850b69`.** |

## Mixed-Commit And Feature Sublanes

| Commit and sub-lane | User effect | Scient-native decision |
|---|---|---|
| `8f6521a6` actionability, trusted input, navigation, waits | Lets an agent act on visible browser content with guarded real input and bounded waiting. | **Reimplement later.** Define explicit browser-session ownership, target selection, cancellation, and denial tests. |
| `8f6521a6` screenshots, uploads, and diagnostics | Lets users/agents capture page state, upload workspace files, and diagnose failures. | **Defer.** Privacy, path authority, redaction, size limits, and browser proof are mandatory. |
| `8f6521a6` gateway credentials, MCP transport, and provider injection | Makes browser tools available across providers. | **Defer.** Active Scient agent-gateway work owns authorization and session leases; never import donor credential/control-plane assumptions. |
| `8f6521a6` browser-panel activation | Opens the visible browser when a tool needs it. | **Defer.** Requires visual, focus, dock, and interactive acceptance. |
| `e3850b69` DOM capture and redaction | Lets a researcher point to an exact page element while reducing captured sensitive text. | **Reimplement later.** Start with a minimal evidence-selection schema and default-deny content capture. |
| `e3850b69` draft persistence and handoff | Keeps annotations attached to drafts and task handoffs. | **Defer.** Needs explicit source identity, stale-target behavior, deletion, recovery, and project-truth boundaries. |
| `e3850b69` chips, strips, and timeline layout | Makes annotations visible and editable in chat. | **Defer.** Visual and appearance-dependent accessibility proof is required. |
| `9d7c2df8` poison journal gate | Dead-letters a deterministically blocking row only after attempt and elapsed-time thresholds. | **Reimplement only with recovery design.** Define evidence retention, user notice, retry/replay authority, and no-silent-loss proof. |
| `9d7c2df8` degraded pump healing and reconciliation | Avoids settling active work while event evidence is incomplete, then heals after sustained success. | **Reimplement after repro.** Test healthy, transient failure, poison event, recovery, abandonment, restart, and stale-session cases. |
| `9d7c2df8` runtime-mode and fork generations | Prevents lifecycle changes from invalidating live work. | **Defer.** Active provider/session lanes must settle first. |
| `c6edf2da` stacked-list cap | Keeps the composer reachable with many agents/tasks. | **Adapt after human proof.** Reuse Scient’s shared stacked-panel tokens and verify keyboard, screen reader, overflow, responsive, and reduced-motion behavior. |

## Ranked Intake Decision

1. T3 `85a89868` deterministic review-preview safety ranks above Synara candidates because it closes a proven current gap, is nonvisual, low risk, testable, and independent of protected product state.
2. `9d7c2df8` is the highest-value Synara reliability candidate, but requires a Scient repro, recovery policy, and active provider/gateway-lane separation.
3. `8f6521a6` visible provider-agnostic browser control has high product fit, but is a broad permission, privacy, browser, gateway, and interactive-acceptance project.
4. `e3850b69` DOM annotations could strengthen evidence-grounded scientific work, but needs a Scient-owned evidence-selection model and browser/privacy design.
5. `c6edf2da` is a small likely UI win, but the automation cannot perform the required visual, responsive, interaction, or accessibility acceptance.

No Synara commit qualifies for unattended implementation in this run.

## Proposed Checkpoint

After maintainer acceptance of this review and the dependent desktop-state change:

- Proposed `reviewedThrough`: `47e71197781f15eea1db957b7d98339ef5f24fd7`
- Proposed `reviewedAt`: `2026-07-30`
- `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`
- Update mode: unchanged as `divergent-cherry-pick`
- Selective intake does not add Synara ancestry.
