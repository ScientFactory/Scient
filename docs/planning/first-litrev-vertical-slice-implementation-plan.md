# First LitRev Vertical Slice Implementation Plan

Status: Draft
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Defines the bounded source-tracing, implementation, and verification plan for the first LitRev scientific project slice.
Doc type: Planning note

## Document Rules

This plan operationalizes the active product slice in `product-roadmap.md` and
the ownership decision in
`../architecture/decisions/ADR-0001-synara-opencode-foundation-and-litrev-ownership-boundary.md`.
It owns the immediate work sequence, boundary-trace requirements, implementation
scope, and acceptance checks for this slice. It does not define the full project
format, final runtime architecture, complete scientific schema, or implemented
behavior.

The fork, upstream-update, and divergence rules remain owned by
`open-source-adaptation-build-strategy.md`. Exact executed evidence belongs in a
dated lab note. Do not invent permanent package paths, APIs, schemas, or commands
before the selected Synara and OpenCode revisions have been traced.

Update this plan when source tracing or implementation evidence resolves an open
boundary, changes the sequence, or invalidates an assumption. Do not rewrite the
roadmap or ADR unless the evidence changes their product outcome or accepted
architecture decision.

## Goal

Build one permanent LitRev-owned workflow on the maintained Synara and OpenCode
foundations: manual source capture, bounded agent assistance, a visible proposal
and decision, and durable reopening and recovery.

The first work phase is a bounded **First-Slice Boundary Trace**, not another
numbered gate, disposable bridge, or general Synara architecture tour. It must
end with an evidence-backed permanent code-placement decision before product
implementation begins.

## Product Slice

1. Open or create a local non-Git LitRev project.
2. Persist minimal LitRev-owned project identity.
3. Add one synthetic source excerpt manually.
4. Create one bounded scientific task with an inspectable context receipt.
5. Execute the task through the owned OpenCode runtime.
6. Record the action and result in a LitRev-owned run/proposal boundary.
7. Return one evidence-linked note as a proposal.
8. Let the researcher inspect, edit, accept, or reject the proposal.
9. Create a non-Git recovery point before accepted state changes.
10. Close and reopen the project with its accepted state and history intact.

Names such as project record, source excerpt, context receipt, run receipt,
proposal, decision, and recovery point are responsibility labels for this slice,
not a frozen general schema.

## Operating Boundaries

- Trace and build only the path required by the controlled fixture. Note other
  surfaces without inventorying the whole Synara or OpenCode codebase.
- Treat the owned Synara monorepo as the expected application-code home, while
  earning the exact permanent package or module placement through source
  evidence. Code location does not make Synara session, projection, or provider
  state canonical LitRev state.
- If no clean Synara-hosted seam can preserve the accepted ownership boundary,
  the trace may recommend a separate repository or process topology. That is an
  escape route requiring explicit review and any necessary ADR change, not a
  fourth default architecture to build speculatively.
- Use `lab/litrev-bridge/` only for disposable experiments or trace material; it
  is not the default home for the permanent slice.
- Prefer existing provider, extension, configuration, tool, and adapter seams.
  Allow narrow inherited-core changes only for demonstrated product, safety, or
  reliability needs.
- Stop OpenCode source tracing at Synara's existing adapter/SDK boundary unless
  a required behavior cannot be understood or enforced there.
- Keep accepted scientific state independent of Synara and OpenCode session or
  projection databases.
- Keep upstream maintenance separate from LitRev product branches and commits.
- Defer Goose, cloud, sync, collaboration, mobile, and broad product redesign.

## Controlled Fixture

Define the fixture before or at the start of source tracing so every inspection
question serves the same workflow.

The fixture must use:

- a local folder outside any parent Git repository;
- one synthetic project title and research question;
- one short synthetic study excerpt;
- one bounded task, such as summarizing the excerpt into a two-sentence
  evidence-linked note using only supplied material;
- one expected structured source-to-note relationship that identifies the
  exact supporting excerpt and remains inspectable after reopening;
- no cloud service, sensitive data, PDF parser, citation manager, or external
  scientific API; and
- deterministic expected system behavior independent of live model wording.

The fixture is controlled test material for the real implementation, not a
throwaway product architecture or a complete scientific sample project.

## Phase 1: First-Slice Boundary Trace

### Success Criterion

The trace is complete only when LitRev knows exactly which Synara and OpenCode
surfaces will host the first project/agent boundary, where permanent LitRev code
will live, how state ownership and non-Git recovery work, and which exact coding
tasks may begin next.

### 1. Select The Foundation Baseline

For the owned Synara and OpenCode checkouts:

1. Restore clean owned checkouts at the canonical paths recorded in
   `../../lab/external/sources.lock.md` if they are not currently present. Do
   not reuse an unrelated or dirty historical checkout.
2. Record local `HEAD`, branch, remotes, dirty state, and the maintained commit
   recorded in `../../lab/external/sources.lock.md`.
3. Inspect current official upstream heads and run each repository's maintained
   LitRev source/upstream verifier.
4. Review upstream changes only where they touch the fixture path: project or
   workspace lifecycle, provider invocation, approval, runtime events,
   persistence, review, recovery, or reopening.
5. Do not merge upstream automatically. If relevant upstream work should be
   accepted first, handle it through a separate maintenance branch and pull
   request, verify it, then select the resulting owned commit as the trace base.
6. Record the exact selected revisions before deeper tracing.

Perform only the health checks needed to prove the selected baseline is usable:

- maintained source checks;
- enough Synara boot behavior to reach the fixture path;
- OpenCode discovery; and
- one harmless provider action only if needed to resolve baseline uncertainty.

Do not recreate the deleted Gate 1.5 runtime or produce another large evidence
archive before product implementation exists.

### 2. Trace Five Vertical Paths

For each path, record exact entry points, important files and symbols, state
read or written, restart behavior, failure behavior, and ownership. Do not trace
unrelated subsystems deeply.

#### A. Project Creation, Opening, And Reopening

Trace how a local folder becomes a Synara project or workspace, whether Git or a
worktree is assumed, what identity and metadata Synara stores, and what survives
restart. Determine where LitRev project initialization can attach without
turning Synara's project or orchestration projection into canonical scientific
state.

#### B. Manual Operations And Minimal UI Placement

Find the smallest existing surfaces that can create or open the project, add one
source excerpt, show one evidence note, inspect task context, and review a
proposal. Determine how manual UI and agent-facing integration can call the same
LitRev-owned operations without redesigning the full workbench.

#### C. OpenCode Execution

Trace provider discovery, session creation, working-directory selection,
prompt/context assembly, permissions, approvals, tool and file events,
cancellation, errors, final result, and runtime projection. Determine which
existing provider/runtime events are reusable execution evidence and where the
LitRev gateway must add scientific context and proposal semantics. Identify
where LitRev can enforce project filesystem scope independently of generated
paths, shell commands, or model requests.

#### D. Persistence And State Ownership

Map every relevant state to its current owner, physical location, restart
behavior, and LitRev authority. The trace note must include and complete this
table:

| State | Current owner | Location | Survives restart? | Canonical for LitRev? |
|---|---|---|---|---|
| Application identity and settings | Synara | To trace | To trace | No |
| Workspace path | Synara | To trace | To trace | Host reference only |
| Synara project/session projection | Synara | To trace | To trace | No |
| OpenCode session and transcript | OpenCode/Synara | To trace | To trace | No |
| Runtime events and tool logs | OpenCode/Synara | To trace | To trace | Evidence only |
| LitRev project identity | Missing | To decide | Must | Yes |
| Source excerpt and evidence note | Missing | To decide | Must | Yes |
| Task and context receipt | Missing | To decide | Must | Yes |
| Run receipt, proposal, and decision | Missing | To decide | Must | Yes |
| Recovery state | Missing | To decide | Must | Yes |

#### E. Proposal, Review, Non-Git Recovery, And Reopening

Trace how file changes and diffs are represented, what review machinery can be
reused, what failure and cancellation leave behind, and whether accepted work
can be reconstructed without an executor session or chat transcript.

At the currently recorded maintained Synara revision, the inspected
`CheckpointStore` interface is Git-backed. The trace must verify that boundary
and decide whether a small LitRev-owned snapshot, transaction, or equivalent
mechanism can protect accepted state in a non-Git project. If safe non-Git
recovery requires adopting worktrees or a broad core rewrite, treat that as a
foundation-fit warning rather than a minor later task.

### Known Source Starting Points

Reverify these paths, relative to the owned Synara checkout, at the selected
source revision. They are starting points for the trace, not accepted LitRev
interfaces:

- Synara project creation: `apps/web/src/lib/projectCreation.ts`
- provider contract: `apps/server/src/provider/Services/ProviderAdapter.ts`
- OpenCode adapter: `apps/server/src/provider/Layers/OpenCodeAdapter.ts`
- normalized provider events: `packages/contracts/src/providerRuntime.ts`
- current checkpoint boundary:
  `apps/server/src/checkpointing/Services/CheckpointStore.ts`

### 3. Compare Permanent Seam Options

Compare only the first permanent placement needed by the fixture:

1. a clearly namespaced LitRev package inside the owned Synara monorepo;
2. isolated LitRev modules in the relevant Synara contracts, server, and UI
   areas; or
3. a hybrid with a permanent LitRev domain/persistence package plus small Synara
   integration shims and the existing provider adapter as the executor port.

The hybrid is the leading hypothesis, not an accepted package design. Score each
option by:

- whether manual UI and agents share the same operations;
- independence of accepted state from sessions and projections;
- non-Git project and recovery support;
- amount of inherited-core change;
- upstream-maintenance cost;
- clarity for future maintainers; and
- reversibility if Synara later becomes unsuitable.

If all three Synara-hosted options fail to preserve a clear LitRev-owned state
and capability boundary, record that result instead of selecting the least-bad
option. The trace may then recommend external composition and identify which
parts of ADR-0001, if any, must be revisited before implementation.

Do not design the full project graph or package map. Decide only the first home
for project identity, source excerpt, evidence note, task/context, run/proposal/
decision, and recovery responsibilities.

### 4. Produce The Trace Decision

Create one dated evidence note at:

`lab/notes/first-slice-source-trace-YYYY-MM-DD.md`

It must record:

1. the fixture definition;
2. selected Synara and OpenCode revisions;
3. relevant upstream assessment and minimal health checks;
4. the five path maps with exact files and symbols;
5. the completed state-ownership table;
6. non-Git behavior and recovery findings;
7. the proposed filesystem-scope enforcement boundary;
8. candidate seam comparison and selected permanent placement;
9. existing machinery to reuse unchanged;
10. surfaces LitRev must not couple to;
11. any required Synara change and any proven OpenCode gap;
12. the exact first coding backlog; and
13. a go/no-go verdict for implementation.

Update this plan only where the trace resolves an open boundary. Update
`../../lab/external/sources.lock.md` if checkout pins change. Do not update the
roadmap or ADR unless the trace invalidates them.

### 5. Review Checkpoint

Stop for Yaacov's review before product code begins. The review should decide
only whether the selected permanent boundary is understandable, serves both
manual and agent work, keeps scientific state outside inherited sessions,
supports credible non-Git recovery, defines enforceable project filesystem
scope, and produces a sufficiently narrow coding backlog.

Once accepted, begin implementation. Do not add another exploratory phase
unless the trace identifies a real blocker.

## Phase 2: Permanent Walking Skeleton

Implement in this order:

1. **Manual project lifecycle.** Create, open, close, and reopen a non-Git
   project with durable LitRev-owned identity.
2. **Manual scientific operations.** Add and edit the source excerpt and
   evidence note through LitRev-owned operations. Persist a structured,
   inspectable relationship from the note to the exact supporting excerpt.
3. **Minimal persistence and recovery.** Persist only the fixture's project,
   source, note, task, context, proposal, decision, and recovery
   responsibilities. Make proposal application atomic or equivalently
   recoverable, including a deterministic crash or failure during apply. Do not
   freeze a complete schema.
4. **Deterministic executor.** Implement a fake at the LitRev-owned gateway's
   executor port. Use it to prove context, proposal, accept/edit/reject,
   failure, cancellation, crash-mid-apply recovery, and reopening without
   relying on model wording or provider state.
5. **Filesystem-scope enforcement.** Prove that permitted reads and proposed
   writes inside the fixture project succeed, while attempts to read or write
   outside the authorized project scope are rejected. Generated paths, shell
   commands, and model requests must not widen that scope.
6. **Integration review checkpoint.** Stop for Yaacov's review after the
   deterministic boundary, recovery, and confinement tests pass. Confirm that
   the gateway is genuinely LitRev-owned before wiring in a live provider or
   changing inherited core.
7. **Owned OpenCode integration.** Put the real owned runtime behind the same
   LitRev gateway and project operations. Change OpenCode core only for a
   demonstrated gap that existing SDK, adapter, configuration, tool, skill, or
   permission seams cannot satisfy cleanly. Re-run filesystem-scope tests
   through the real adapter path.
8. **Minimal review UI.** Show exact context, proposal contents, affected
   project material, edit/accept/reject controls, and understandable failure or
   cancellation state.
9. **Non-Git recovery proof.** Prove accepted state can be protected and
   understood after ordinary failure and crash-mid-apply without Git refs, an
   active executor session, or reconstructing chat history.
10. **Live end-to-end smoke.** Run the controlled fixture through owned
   OpenCode, review the proposal, close the app, reopen it, and verify
   LitRev-owned state. If the normalized runtime event sequence adds adapter
   coverage beyond the gateway fake, sanitize it into a stable replay fixture;
   do not commit raw provider transcripts, secrets, or machine-specific paths.

## Repository And Change Lanes

- The LitRev repository owns decisions, roadmap, implementation planning,
  source-trace evidence, and cross-repository source pins.
- The owned Synara repository hosts the real application implementation,
  including permanent LitRev-owned packages or modules, UI integration,
  canonical project persistence, gateway, review, and recovery workflow, unless
  the accepted trace decision invokes the external-topology escape route.
- The owned OpenCode fork remains unchanged until the trace or implementation
  proves a runtime gap. Any change uses its own narrow branch and review.
- Upstream synchronization uses separate maintenance branches and pull requests;
  do not mix it with first-slice product changes.
- Goose remains deferred until the LitRev gateway works through OpenCode.

## Acceptance Criteria

- The fixture project does not require Git, a cloud service, or network science
  dependencies.
- Manual and agent-assisted work use the same LitRev-owned project operations.
- The researcher can inspect the exact project material supplied to the agent.
- The reopened evidence note retains a structured LitRev-owned link to the exact
  supporting source excerpt, and the researcher can inspect that support
  without reconstructing agent prose or chat history.
- Agent output remains proposed until the researcher accepts it.
- Accept, edit, reject, failure, and cancellation do not create unexplained
  partial accepted state.
- A deterministic crash or failure during proposal application leaves either
  the prior accepted state or a complete recoverable change, never a silently
  partial accepted result.
- Reads and proposed writes outside the authorized project scope are rejected
  through both the deterministic executor and owned OpenCode adapter paths.
- Accepted project state and recovery remain independent of Synara/OpenCode
  session and projection databases.
- The project reopens with its accepted note, source relationship, task,
  context, proposal decision, and recovery information understandable from
  LitRev-owned state.
- Deterministic tests prove system behavior; one live owned-OpenCode smoke proves
  the real adapter path without making live model wording the only evidence.
- The completed slice produces an explicit decision about deeper Synara and
  OpenCode ownership.

## Explicit Exclusions

- Goose integration
- cloud sync, accounts, sharing, or collaboration
- mobile implementation
- complete PDF parsing or citation management
- full manuscript, analysis, notebook, or figure systems
- complete project schema or agent-run architecture
- broad Synara redesign or package renaming
- speculative OpenCode core changes
- polished research-cockpit UI
- another disposable bridge implementation
- a large Gate 1.5-style runtime evidence archive

## Stop And Reconsider Conditions

Stop and report before widening scope if:

- the shell requires scientific state to become Synara session or projection
  state;
- a non-Git project cannot be supported without adopting worktree assumptions;
- the UI must depend directly on provider-specific state to express the
  workflow;
- accepted state cannot be recovered independently of an executor session or
  chat transcript;
- safe working-directory, permission scope, or proposal review cannot be
  enforced;
- the selected boundary cannot serve both manual and agent operations;
- non-Git recovery requires a broad inherited-core rewrite; or
- completing the fixture requires a broad product redesign.

## Evidence To Record During Implementation

- exact source revisions, source paths, and chosen code boundary;
- commands, checks, and deterministic expectations;
- fixture inputs and expected state transitions;
- state, snapshot, and artifact locations;
- context supplied to the agent;
- approvals, runtime events, proposals, and decisions;
- allowed and denied filesystem-scope cases and their enforcement boundary;
- failure, cancellation, reopening, and recovery behavior;
- live smoke inputs, outputs, limitations, cleanup, and any sanitized normalized
  replay fixture; and
- the resulting decision about deeper Synara/OpenCode ownership.

## Definitions Of Done

### Boundary Trace Done

- selected source baseline;
- controlled fixture;
- five-path map;
- completed state-ownership table;
- explicit non-Git recovery approach;
- selected permanent code location;
- reuse-versus-change list;
- OpenCode-change verdict;
- Synara-hosted versus external-topology verdict;
- narrow first coding backlog; and
- Yaacov's approval to implement.

### Vertical Slice Done

A researcher can open a non-Git LitRev project, add one source excerpt, edit the
same project manually, delegate one bounded task, inspect the exact context,
receive a proposal, inspect its structured link to the exact supporting excerpt,
edit/accept/reject it, remain confined to the authorized project scope, recover
safely from failure or crash-mid-apply, close and reopen the project, and
understand its scientific state from LitRev-owned records alone.

After implementation evidence and Yaacov's review, promote only the architecture
that the slice actually proves:

- promote the validated project, persistence, portability, and recovery
  contract into `../architecture/project-format.md`, activating that placeholder
  only if the evidence makes the contract defensible;
- promote the validated gateway, executor, context, proposal, approval, event,
  and confinement contract into `../architecture/agent-runtime.md`, activating
  that placeholder only if the evidence makes the contract defensible;
- update `../architecture/security-and-permissions.md` with proven enforcement
  behavior and clearly retained open risks; and
- create or amend an ADR only when the accepted topology, recovery mechanism, or
  inherited-core boundary is a durable architecture decision.

Leave a placeholder unchanged when the slice has not produced enough evidence
to make its future contract defensible.
