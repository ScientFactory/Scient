# First Scient Vertical Slice Implementation Plan

Status: Draft
Owner: Yaacov
Created: 2026-07-16
Last updated: 2026-07-18
Purpose: Defines the bounded source-tracing, implementation, and verification plan for the first Scient scientific project slice.
Doc type: Planning note

## Document Rules

This plan operationalizes the active product slice in `product-roadmap.md` and
the ownership decision in
`../architecture/decisions/ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md`.
It owns the immediate work sequence, boundary-trace requirements, implementation
scope, and acceptance checks for this slice. It does not define the full project
format, final runtime architecture, complete scientific schema, or implemented
behavior.

The fork, upstream-update, and divergence rules remain owned by
`open-source-adaptation-build-strategy.md`. Exact executed evidence belongs in a
dated lab note. Do not invent permanent package paths, APIs, schemas, or commands
before the selected Synara and OpenCode revisions have been traced.
Scient's identity, its internal inherited-core maintenance boundary, and the
preservation of external agents are governed by
`scient-and-external-agents-implementation-plan.md` and ADR-0001.

Update this plan when source tracing or implementation evidence resolves an open
boundary, changes the sequence, or invalidates an assumption. Do not rewrite the
roadmap or ADR unless the evidence changes their product outcome or accepted
architecture decision.

## Goal

Build one permanent Scient-owned workflow on the maintained Synara foundation
through **Scient**, Scient's owned OpenCode-derived first-party agent: manual
source capture, bounded agent assistance, a visible proposal and decision, and
durable reopening and recovery.

The first work begins with a bounded project-initiation placement trace and a
portable Scient-owned initialization kernel. The remaining **First-Slice
Boundary Trace** follows before scientific-state, UI, or executor integration.
Neither trace is another numbered gate, disposable bridge, or general Synara
architecture tour. Each must end with the evidence-backed decision required by
the next implementation step.

## Current Execution Status

Phase 1 is complete. The placement trace selected the permanent package seam,
and the reviewed desktop implementation added `@scientfactory/project-init`
with zero-write inspection, explicit plan/apply behavior, conservative
recovery, and focused tests. The package, trusted-server RPC, project-open/setup dialog, and
interrupted-initialization recovery UI are present on maintained desktop `main`
at `bd2a6eed6243b13fc1423b21b2454ae060bce5c7`. They initialize only the portable
foundation and do not make the host project projection canonical.

Phase 2 source tracing is complete in
`../../lab/notes/first-slice-source-trace-2026-07-18.md`. It proved the current
state-ownership gaps and candidate seams. Yaacov clarified that conversations,
project memory, user memory, recovery, cloud synchronization, and their storage
boundaries belong to a dedicated future memory-architecture project, not an
immediate persistence decision. Those unprocessed ideas now live in the
[`Idea Inbox`](idea-inbox.md#memory-context-and-continuity). The permanent
scientific-operation package and fake-executor product proof also remain
deferred. Non-Git recovery, trusted project filesystem scope, and complete
native-Scient/external-OpenCode runtime independence remain product
requirements; they are not a selected memory design. The existing project-init
kernel already enforces path containment for initialization, while later
scientific-operation and native-agent boundaries remain to be built.
The selected OpenCode-derived source is `67e7f3f0341c7a5bad8d68e0a29f113b450eb02a`
on `dev`, but the native agent is not yet implemented or packaged. No
scientific-state store, Scient agent gateway, proposal/decision ledger, or
complete scientific workflow is claimed as implemented.

## Product Slice

1. Open an existing local folder without modifying it.
2. Preview and initialize a local non-Git Scient project without silently
   overwriting existing files.
3. Persist minimal, path-independent Scient-owned project identity.
4. Add one selected source excerpt manually.
5. Create one bounded scientific task with an inspectable context receipt.
6. Execute the task through Scient.
7. Record the action and result in a Scient-owned run/proposal boundary.
8. Return one evidence-linked note as a proposal.
9. Let the researcher inspect, edit, accept, or reject the proposal.
10. Create a non-Git recovery point before accepted state changes.
11. Close and reopen the project with its accepted state and history intact.

Names such as project record, source excerpt, context receipt, run receipt,
proposal, decision, and recovery point are responsibility labels for this slice,
not a frozen general schema.

## Operating Boundaries

- Trace and build only the path required by the controlled fixture. Note other
  surfaces without inventorying the whole Synara or OpenCode codebase.
- Treat the owned Synara monorepo as the expected application-code home, while
  earning the exact permanent package or module placement through source
  evidence. Code location does not make Synara session, projection, or provider
  state canonical Scient state.
- If no clean Synara-hosted seam can preserve the accepted ownership boundary,
  the trace may recommend a separate repository or process topology. That is an
  escape route requiring explicit review and any necessary ADR change, not a
  fourth default architecture to build speculatively.
- Use `lab/scient-bridge/` only for disposable experiments or trace material; it
  is not the default home for the permanent slice.
- Prefer existing provider, extension, configuration, tool, and adapter seams.
  Allow narrow inherited-core changes only for demonstrated product, safety, or
  reliability needs.
- Begin Scient tracing from Synara's existing OpenCode adapter/SDK boundary and
  the owned OpenCode-derived source. Trace deeper only when a required Scient behavior,
  identity boundary, or safety rule cannot be understood or enforced there.
- Preserve external OpenCode and every inherited external-agent adapter while
  adding Scient as a distinct execution target.
- Keep accepted scientific state independent of Synara, Scient, connected
  OpenCode, and other external-agent session or projection databases.
- Keep upstream maintenance separate from Scient product branches and commits.
- Defer Goose, cloud, sync, collaboration, mobile, and broad product redesign.

## Project-Initiation Foundation

The first permanent implementation is a portable project-initiation kernel in
the owned Synara monorepo. The source-backed placement selected in
`../../lab/notes/project-initiation-placement-trace-2026-07-16.md` is
`packages/scient-project-init`, published only as a private workspace package
named `@scientfactory/project-init` at this stage.

The package must not depend on Electron, React, Synara application modules,
OpenCode, SQLite, a model provider, or a scientific discipline. It owns only:

- folder inspection;
- initialization requests and deterministic plans;
- rendering the universal project foundation;
- declarative profile-descriptor validation;
- safe filesystem application and interrupted-initialization recovery; and
- deterministic tests and a developer-only harness.

The universal foundation for a newly initialized project is:

```text
PROJECT.md
AGENTS.md
.scient/project.json
```

Opening an ordinary folder is a zero-write operation. Initialization is an
explicit, separately previewed action. Existing `PROJECT.md` or `AGENTS.md`
files are preserved; any proposed managed-content insertion requires a visible
diff and explicit approval. The first package validates profile extension
points with test fixtures but does not ship a discipline or workflow profile.

## Controlled Fixture

Define the fixture before or at the start of source tracing so every inspection
question serves the same workflow.

For this slice, use the **Many Labs 2 Knobe side-effect effect** selected in
[`../research/source-evaluations/scientific-project-fixture-selection.md`](../research/source-evaluations/scientific-project-fixture-selection.md).
Complete its artifact, license, dependency, and expected-output audit before
packaging source material. If that audit cannot produce a safe, shareable, and
deterministic capsule, use **ManyBabies 4** as the designated replacement and
record the failed activation condition rather than quietly substituting another
project.

The first slice needs only the Knobe capsule's source-to-note thread: one exact
source excerpt, one bounded task, one expected evidence-linked note, and the
review and reopening states below. Protocol, data, analysis, and output
snapshots may be included as pinned context for later reuse, but this plan does
not require Scient to execute the study analysis or generate a figure in the
first slice.

Use a compressed scientific-project capsule: a small, locally self-contained
representation of a complete research project, preferably reduced from an
openly licensed reproducible study. Use a synthetic equivalent only if a
suitable public project cannot be reduced safely, legally, and deterministically.
The capsule should be broad enough to expose full-project relationships without
requiring anyone to conduct a new study.

The capsule must include:

- a local folder outside any parent Git repository;
- one project title, research question or hypothesis, and brief plan;
- a small source set with one exact excerpt selected for the first slice;
- a small data subset, a locally runnable or precomputed analysis, and one
  representative table or figure;
- a short results or manuscript fragment that can remain connected to its
  supporting evidence and analysis;
- documented expected states representing key project stages so later slices
  can reuse the same capsule without simulating months of elapsed work;
- one bounded task, such as summarizing the excerpt into a two-sentence
  evidence-linked note using only supplied material;
- one expected structured source-to-note relationship that identifies the
  exact supporting excerpt and remains inspectable after reopening;
- no cloud service, sensitive data, PDF parser, citation manager, or external
  scientific API; and
- deterministic expected system behavior independent of live model wording.

The first slice exercises only the selected source-to-note thread. The broader
data, analysis, output, and writing artifacts are project context and reusable
fixtures for later slices; they do not expand this slice into full analysis,
figure, or manuscript implementation and do not freeze a complete project
schema. The capsule is controlled test material for the real implementation,
not a throwaway product architecture or a requirement to recreate the original
study.

## Phase 1: Foundation Selection And Initiation Placement Trace

### Success Criterion

This phase is complete when the clean owned source baseline is selected and
Scient knows where the dependency-light initialization package will live, which
process will integrate its filesystem operations, which inherited project-open
surfaces will call it later, and which exact kernel tasks may begin. It does not
complete the remaining scientific-state or executor boundary trace.

### 1. Select The Foundation Baseline

For the owned Synara and OpenCode checkouts:

1. Restore clean owned checkouts at the canonical paths recorded in
   `../../lab/external/sources.lock.md` if they are not currently present. Do
   not reuse an unrelated or dirty historical checkout.
2. Record local `HEAD`, branch, remotes, dirty state, and the maintained commit
   recorded in `../../lab/external/sources.lock.md`.
3. Inspect current official upstream heads and run each repository's maintained
   Scient source/upstream verifier.
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

### 2. Trace Project-Initiation Placement

Trace the existing package boundaries, folder picker, project-create path,
server filesystem services, path-containment helpers, and project persistence.
Record the evidence and decision in
`../../lab/notes/project-initiation-placement-trace-2026-07-16.md` before adding
the permanent package.

The trace must decide:

- the package path and dependency boundary;
- which process will own filesystem application when UI integration begins;
- how opening a folder remains distinct from initializing it;
- how existing Synara projection state remains non-canonical; and
- which work is safe to implement before OpenCode tracing.

### 3. Implement The Portable Initiation Kernel

Implement and verify the package without product UI or executor integration.
The first implementation must include:

1. zero-write folder inspection and explicit state classification;
2. initialization request validation;
3. pure, inspectable planning with create, preserve, propose, and conflict
   operations;
4. deterministic rendering for `PROJECT.md`, a new root `AGENTS.md`, and
   `.scient/project.json`;
5. apply-time precondition checks so filesystem changes after preview abort
   safely;
6. path and symlink containment;
7. recoverable, idempotent filesystem application;
8. declarative, traversal-safe profile descriptors tested through fixtures but
   not exposed as a product profile; and
9. tests for empty, existing, initialized, partial, invalid, moved, raced, and
   interrupted folders.

Stop for review after the package passes its focused tests and dependency audit.
Do not add Synara UI, server RPC, scientific records, or OpenCode behavior in
this package pull request.

## Phase 2: Remaining First-Slice Boundary Trace

### Success Criterion

This trace is complete only when Scient knows exactly which Synara and OpenCode
surfaces will host the scientific project/agent boundary, how state ownership
and non-Git recovery work beyond initialization, and which exact integration
tasks may begin next.

### 1. Trace Five Vertical Paths

For each path, record exact entry points, important files and symbols, state
read or written, restart behavior, failure behavior, and ownership. Do not trace
unrelated subsystems deeply.

#### A. Project Creation, Opening, And Reopening

Trace how a local folder becomes a Synara project or workspace, whether Git or a
worktree is assumed, what identity and metadata Synara stores, and what survives
restart. Determine where Scient project initialization can attach without
turning Synara's project or orchestration projection into canonical scientific
state.

#### B. Manual Operations And Minimal UI Placement

Find the smallest existing surfaces that can create or open the project, add one
source excerpt, show one evidence note, inspect task context, and review a
proposal. Determine how manual UI and agent-facing integration can call the same
Scient-owned operations without redesigning the full workbench.

#### C. Scient Execution And External OpenCode Separation

Trace provider discovery, session creation, working-directory selection,
prompt/context assembly, permissions, approvals, tool and file events,
cancellation, errors, final result, and runtime projection. Determine which
existing provider/runtime events are reusable execution evidence and where the
Scient gateway must add scientific context and proposal semantics. Identify
where Scient can enforce project filesystem scope independently of generated
paths, shell commands, or model requests.

Start from the existing external OpenCode adapter and the owned OpenCode source
fork, but do not turn that adapter into Scient. Decide the narrowest path for
building Scient as one OpenCode-derived agent with its own identity,
configuration, state, lifecycle, and updates while external OpenCode remains
independently selectable and configured.

#### D. Persistence And State Ownership

Map every relevant state to its current owner, physical location, restart
behavior, and Scient authority. The trace note must include and complete this
table:

| State | Current owner | Location | Survives restart? | Canonical for Scient? |
|---|---|---|---|---|
| Application identity and settings | Synara | To trace | To trace | No |
| Workspace path | Synara | To trace | To trace | Host reference only |
| Synara project/session projection | Synara | To trace | To trace | No |
| Scient session and transcript | Missing; OpenCode-derived source selected | To decide | Must for runtime continuity | No |
| External OpenCode session and transcript | OpenCode/Synara | To trace | To trace | No |
| Runtime events and tool logs | Scient or external agent/Synara | To trace | To trace | Evidence only |
| Scient project identity | Missing | To decide | Must | Yes |
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
and decide whether a small Scient-owned snapshot, transaction, or equivalent
mechanism can protect accepted state in a non-Git project. If safe non-Git
recovery requires adopting worktrees or a broad core rewrite, treat that as a
foundation-fit warning rather than a minor later task.

### Known Source Starting Points

Reverify these paths, relative to the owned Synara checkout, at the selected
source revision. They are starting points for the trace, not accepted Scient
interfaces:

- Synara project creation: `apps/web/src/lib/projectCreation.ts`
- provider contract: `apps/server/src/provider/Services/ProviderAdapter.ts`
- OpenCode adapter: `apps/server/src/provider/Layers/OpenCodeAdapter.ts`
- normalized provider events: `packages/contracts/src/providerRuntime.ts`
- current checkpoint boundary:
  `apps/server/src/checkpointing/Services/CheckpointStore.ts`

### 2. Compare Permanent Seam Options

Compare only the first permanent placement needed by the fixture:

1. a clearly namespaced Scient package inside the owned Synara monorepo;
2. isolated Scient modules in the relevant Synara contracts, server, and UI
   areas; or
3. a hybrid with a permanent Scient domain/persistence package plus small Synara
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

If all three Synara-hosted options fail to preserve a clear Scient-owned state
and capability boundary, record that result instead of selecting the least-bad
option. The trace may then recommend external composition and identify which
parts of ADR-0001, if any, must be revisited before implementation.

Do not design the full project graph or package map. Decide only the first home
for project identity, source excerpt, evidence note, task/context, run/proposal/
decision, and recovery responsibilities.

### 3. Produce The Trace And Decision Boundary

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
8. candidate seam comparison and either a selected permanent placement or an
   explicit owner-approved deferral;
9. existing machinery to reuse unchanged;
10. surfaces Scient must not couple to;
11. any required Synara change, the Scient integration seam, and any proven
    inherited OpenCode-core gap;
12. the exact first coding backlog or the evidence/decision sequence required
    before such a backlog is safe; and
13. a go/no-go verdict for implementation.

Update this plan only where the trace resolves an open boundary. Update
`../../lab/external/sources.lock.md` if checkout pins change. Do not update the
roadmap or ADR unless the trace invalidates them.

### 4. Review Checkpoint

The first review established three requirements: non-Git recovery, trusted
project filesystem scope, and complete native-Scient/external-OpenCode runtime
independence. Yaacov later clarified that the review had grouped future memory-
architecture questions too narrowly as a current persistence decision. The
scopes and relationships among conversations, user memory, project memory, raw
history, files, local storage, and future cloud storage must be discovered
together in a dedicated future project.

The candidate questions are preserved in the
[`Idea Inbox`](idea-inbox.md#memory-context-and-continuity). They do not select
SQLite, define a project ledger, authorize memory implementation, or block the
independent T3 reliability work. The permanent scientific-operation package and
deterministic fake-executor product proof remain separate deferred decisions.

## Phase 3: Permanent Walking Skeleton

Status: Deferred. The ordered work below remains a candidate sequence, not
current authorization. Replan the memory-dependent steps only when the future
memory-architecture project begins, and revisit the fake-executor question
separately. Do not treat that future discovery as a current T3 dependency.

Implement in this order:

1. **Manual project lifecycle integration.** Connect the reviewed initiation
   kernel to the trusted local server and minimal Synara UI so a researcher can
   open an ordinary folder without writes or preview, initialize, close, and
   reopen a non-Git Scient project with durable identity. Keep planning and
   safety rules inside the kernel rather than duplicating them in UI or RPC
   handlers.
2. **Manual scientific operations.** Add and edit the source excerpt and
   evidence note through Scient-owned operations. Persist a structured,
   inspectable relationship from the note to the exact supporting excerpt.
3. **Minimal persistence and recovery.** Persist only the fixture's project,
   source, note, task, context, proposal, decision, and recovery
   responsibilities. Make proposal application atomic or equivalently
   recoverable, including a deterministic crash or failure during apply. Do not
   freeze a complete schema.
4. **Deterministic executor.** Implement a fake at the Scient-owned gateway's
   executor port. Use it to prove context, proposal, accept/edit/reject,
   failure, cancellation, crash-mid-apply recovery, and reopening without
   relying on model wording or provider state.
5. **Filesystem-scope enforcement.** Prove that permitted reads and proposed
   writes inside the fixture project succeed, while attempts to read or write
   outside the authorized project scope are rejected. Generated paths, shell
   commands, and model requests must not widen that scope.
6. **Integration review checkpoint.** Stop for Yaacov's review after the
   deterministic boundary, recovery, and confinement tests pass. Confirm that
   the gateway is genuinely Scient-owned before wiring in a live provider or
   changing inherited core.
7. **Scient integration.** Build and identify the owned OpenCode-derived agent
   as Scient and put Scient behind the same Scient gateway and project
   operations. Scient is one agent/runtime, not a shell over a separately
   identified OpenCode engine. Keep inherited OpenCode core and Scient-owned
   additions internally identifiable where practical; change inherited core
   only for a demonstrated gap that existing SDK, adapter, configuration, tool,
   skill, or permission seams cannot satisfy cleanly. Keep external OpenCode
   registered and independently configured. Re-run filesystem-scope tests
   through Scient.
8. **Minimal review UI.** Show exact context, proposal contents, affected
   project material, edit/accept/reject controls, and understandable failure or
   cancellation state.
9. **Non-Git recovery proof.** Prove accepted state can be protected and
   understood after ordinary failure and crash-mid-apply without Git refs, an
   active executor session, or reconstructing chat history.
10. **Live end-to-end smoke.** Run the controlled fixture through Scient,
   review the proposal, close the app, reopen it, and verify
   Scient-owned state. If the normalized runtime event sequence adds adapter
   coverage beyond the gateway fake, sanitize it into a stable replay fixture;
   do not commit raw provider transcripts, secrets, or machine-specific paths.

## Repository And Change Lanes

- The Scient repository owns decisions, roadmap, implementation planning,
  source-trace evidence, and cross-repository source pins.
- The owned Synara repository hosts the real application implementation,
  including permanent Scient-owned packages or modules, UI integration,
  canonical project persistence, gateway, review, and recovery workflow, unless
  the accepted trace decision invokes the external-topology escape route.
- The owned OpenCode-derived repository is Scient's source foundation. It remains unchanged
  until the trace or implementation proves the first required Scient identity,
  packaging, integration, or runtime change. Keep inherited-core and
  Scient-owned changes in narrow, reviewable lanes.
- Upstream synchronization uses separate maintenance branches and pull requests;
  do not mix it with first-slice product changes.
- External OpenCode and the other inherited external agents remain available;
  their broader project-task certification does not block this Scient-first
  slice.
- Goose remains deferred until the Scient gateway works through Scient.

## Acceptance Criteria

- The fixture project does not require Git, a cloud service, or network science
  dependencies.
- Manual and agent-assisted work use the same Scient-owned project operations.
- The researcher can inspect the exact project material supplied to the agent.
- The reopened evidence note retains a structured Scient-owned link to the exact
  supporting source excerpt, and the researcher can inspect that support
  without reconstructing agent prose or chat history.
- Agent output remains proposed until the researcher accepts it.
- Accept, edit, reject, failure, and cancellation do not create unexplained
  partial accepted state.
- A deterministic crash or failure during proposal application leaves either
  the prior accepted state or a complete recoverable change, never a silently
  partial accepted result.
- Reads and proposed writes outside the authorized project scope are rejected
  through both the deterministic executor and Scient paths.
- Scient and external OpenCode remain distinct execution targets; this slice
  must not repurpose the existing `opencode` identity or configuration.
- Accepted project state and recovery remain independent of Synara, Scient, and
  external-agent session and projection databases.
- The project reopens with its accepted note, source relationship, task,
  context, proposal decision, and recovery information understandable from
  Scient-owned state.
- Deterministic tests prove system behavior; one live Scient smoke proves the
  real agent path without making live model wording the only evidence.
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
- speculative changes to Scient's inherited OpenCode core
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
- approved non-Git recovery requirement and unresolved future memory handoff;
- permanent code-location candidates and explicit owner deferral;
- reuse-versus-change list;
- Scient integration and inherited OpenCode-core change verdict;
- Synara-hosted versus external-topology verdict;
- future memory questions routed to the idea inbox; and
- no implied authorization for scientific-state or memory implementation.

### Vertical Slice Done

A researcher can open a non-Git Scient project, add one source excerpt, edit the
same project manually, delegate one bounded task, inspect the exact context,
receive a proposal, inspect its structured link to the exact supporting excerpt,
edit/accept/reject it, remain confined to the authorized project scope, recover
safely from failure or crash-mid-apply, close and reopen the project, and
understand its scientific state from Scient-owned records alone.

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
