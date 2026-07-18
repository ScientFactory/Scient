# First Scientific Slice Source Trace

Status: Complete as source evidence; persistence and package decisions deferred
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Maps the first scientific slice's current source seams, proven gaps, and decision requirements without selecting a persistence technology or authorizing product implementation.
Doc type: Implementation evidence

## Verdict

**Do not implement the permanent scientific-state skeleton yet.** The maintained
Synara-derived desktop can host the slice without making its project, thread,
provider, or checkpoint projections canonical scientific state, but the
permanent package seam and persistence model remain open for later review.

A hybrid placement remains a leading candidate, not an accepted design:

1. a possible `packages/scient-project` package in `scient-desktop` owns the
   first-slice domain rules, project-local persistence, proposal decisions,
   recovery, and filesystem-scope policy;
2. thin contracts, trusted-server RPC, and project-level UI shims call that
   package; and
3. a narrow executor port accepts immutable task/context receipts and returns a
   proposal. Deterministic fake-executor implementation is deferred for later
   discussion. Scient would eventually implement the port as a distinct
   execution target; external OpenCode remains an independent adapter.

The requirement under review is that canonical accepted state remain
independent of Synara's `~/.scient/userdata/state.sqlite`, provider sessions,
chat transcripts, and Git checkpoint refs. `.scient/project.json` already owns
portable identity. The location and representation of ongoing scientific
records are not selected. Project-local SQLite, append-only structured files, a
hybrid canonical-log/index design, and an app-local store with explicit portable
bundles require evidence-based comparison in
[`scient-project-persistence-decision-brief.md`](../../docs/architecture/scient-project-persistence-decision-brief.md).

The existing Git-backed checkpoint mechanism is not suitable for the approved
non-Git guarantee. A future persistence design must prove that acceptance is
atomic or equivalently recoverable, records the prior accepted state, appends
the decision, and advances accepted state without rewriting history. No Git
repository, worktree, executor session, or transcript may be the only way to
reopen or recover the accepted source-to-note relationship. The mechanism is
open.

One required and user-approved native-agent gap is now proven: the selected
`scient-agent` source still defaults its global data/config/state roots and
database name to `opencode`. Native Scient packaging must supply a dedicated
first-party runtime profile before it can be connected. That change must not
alter the existing external OpenCode adapter or its user-owned data paths.

## Controlled Fixture

The deterministic synthetic capsule below remains a candidate for a later
controlled persistence or executor test. Yaacov deferred fake-executor product
implementation and is separately preparing a real project for later manual
testing. The controlled fixture would protect the real project from destructive
crash, corruption, migration, and recovery experiments; it is not authorized by
this trace.

The capsule is `greenhouse-seedling-capsule` and lives outside every parent Git
repository during runtime tests. Its committed test fixture will contain:

- `README.md`: project title, question, and short plan;
- `sources/trial-summary.txt`: a locally authored source summary with one
  designated exact excerpt;
- `data/seedling-heights.csv`: a small deterministic dataset;
- `analysis/summary.txt`: precomputed group means and the command used to
  reproduce them;
- `outputs/height-by-treatment.svg`: one representative figure;
- `writing/results-fragment.md`: a short results fragment;
- `expected/stages.json`: deterministic initialized, source-added,
  task-created, proposed, accepted, reopened, and recovered states; and
- no network, cloud service, parser, sensitive data, or external API.

The first exercised thread is deliberately narrower than the capsule: manually
select one exact excerpt, create the task “Summarize this excerpt as a
two-sentence evidence note using only the selected text,” produce one
deterministic proposed note, inspect its source link, accept or reject it,
reopen the project, and prove recovery. The data, analysis, figure, and writing
files are context for future slices and are not ingested in this one.

## Selected Sources And Health

| Source | Selected revision | Working state | Relevant upstream result | Minimal health evidence |
|---|---|---|---|---|
| Scient desktop (`scient-desktop`) | owned `main` `57e6b2cde09f64db367b894506f56db605fb91b4` | Canonical checkout clean when selected | Official Synara reviewed through `69304bc1d59d86da8afbac367118c75db8c9dbfe`; verifier current with no unreviewed commits | Existing installed-app smoke reached project initialization. On reliability branch `8a8398e8`, full tests, typecheck, build, release smoke, and 171 browser tests passed; the branch does not alter this trace's product seams. |
| Scient agent (`scient-agent`) | owned `dev` `bc125cbc60c36e4b7013f8d7cf755f745af509b3` | Clean and equal to `origin/dev` | Official OpenCode reviewed through `fab213312927ea64cf968832c527206e8c944f9e`; verifier current with no unreviewed commits | Maintained upstream verifier and public-identity check passed. A live Scient action was not run because native Scient identity, private state, packaging, and gateway are correctly still absent. |

No upstream code was merged during this trace. The agent revision advanced only
through already-merged repository automation changes after the prior source-lock
snapshot; the runtime files inspected below remain selected source, not proof of
a native Scient product.

## Path A: Project Creation, Opening, And Reopening

### Current path

| Stage | Exact entry point | State and behavior |
|---|---|---|
| Folder selection and setup choice | `apps/web/src/components/Sidebar.tsx`: `addProjectFromPath`, `requestProjectInitializationDecision`; `apps/web/src/components/ScientProjectInitializationDialog.tsx` | Opening first calls the Scient initialization preview. The user may initialize, recover, roll back, open without setup, or cancel. Opening without setup makes no Scient initialization write. |
| Shared initialization flow | `apps/web/src/lib/scientProjectInitialization.ts`: `prepareScientProjectForOpening` | Re-previews after failures, consumes one-time preview capabilities, reports completion, and keeps initialization separate from project registration. |
| Trusted filesystem application | `apps/server/src/scientProjectInitialization.ts`: `ScientProjectInitializationService`; `packages/scient-project-init` | The server calls the existing dependency-light kernel. Preview capabilities expire and are single-use. Kernel preconditions, path containment, transaction recovery, and preserve/propose/conflict behavior remain authoritative. |
| Host project registration | `apps/web/src/lib/projectCreation.ts`: `createOrRecoverProjectFromPath`; `apps/server/src/orchestration/decider.ts`: `project.create`; `apps/server/src/orchestration/projectMetadataProjection.ts`: `applyProjectMetadataProjection` | A Synara project ID, title, workspace root, default model, and timestamps are persisted as events and `projection_projects`. Duplicate roots are recovered or rejected. This registration can survive restart but is a host index, not Scient project identity. |
| Restart read model | `apps/server/src/orchestration/Layers/ProjectionPipeline.ts`; `apps/server/src/orchestration/Layers/ProjectionSnapshotQuery.ts`; `apps/web/src/store.ts` | SQLite projections rebuild the shell snapshot and sidebar. Failure to synchronize is surfaced as a retryable add-project error. |

Desktop production state derives from `SCIENT_HOME` (normally `~/.scient`).
`apps/server/src/config.ts:deriveServerPaths` places host events, projections,
settings, and provider session projections in
`~/.scient/userdata/state.sqlite`. Electron/Chromium UI state uses the separate
platform user-data profile resolved by
`apps/desktop/src/desktopUserDataProfile.ts` (on macOS,
`~/Library/Application Support/scient`).

### Scient attachment point

After the host resolves a workspace root, a future trusted server boundary
should inspect `.scient/project.json` and open the selected project-owned record
boundary through the approved package or service seam. The project-level UI
should be keyed by the portable Scient project ID, while the Synara project ID
remains a replaceable host reference. The persistence review must define what
must move, copy, export, or restore for history to remain portable; this trace
does not assume that a folder copy is sufficient.

Failure to open the canonical store must not silently fall back to chat state.
It should show an explicit unavailable/migration/recovery state and leave the
project files untouched until the user chooses a safe action.

## Path B: Manual Operations And Minimal UI

The current product has the necessary shell but no canonical scientific
operations. A candidate UI placement is a new project-level route and component,
not another chat-thread projection:

- add `_chat.project.$projectId.tsx` as the thin route shim;
- add a focused `ScientProjectView` with source, task/context, proposal, and
  history sections;
- enter it from the existing project row/context menu in `Sidebar.tsx`;
- reuse existing dialog, button, form, toast, loading, and error primitives;
- reuse `WorkspaceFilePreview` only for optional local-file inspection; and
- use a small structured before/proposed-note review card. Do not force the
  note through Git/file diff machinery merely to reuse `DiffPanel`.

Both UI actions and later executor output must call the same Scient-owned domain
commands through a trusted boundary. Whether that boundary is a package or
another reviewed seam remains open.

- add or revise a source excerpt;
- create a task and immutable context receipt;
- begin/finish/fail a run receipt;
- record a proposal linked to exact source and context revisions;
- edit the proposal without accepting it;
- accept or reject with a decision record; and
- create or apply a recovery action.

The existing `EditorWorkspaceView`, chat composer, Kanban board, and
thread-proposed-plan surfaces may remain available, but none owns source,
evidence, task, proposal, or decision truth for this slice.

## Path C: Scient Execution And External OpenCode Separation

### Reusable inherited path

| Concern | Exact current seam | Reuse decision |
|---|---|---|
| Provider contract | `apps/server/src/provider/Services/ProviderAdapter.ts`: `ProviderAdapterShape` | Reuse provider session, send, interrupt, request response, thread read, and canonical event concepts behind a new executor port. Do not expose `ProviderKind` as Scient's durable execution-target identity. |
| Session orchestration | `apps/server/src/orchestration/Layers/ProviderCommandReactor.ts`: session start/restart, cwd resolution, prompt assembly, interrupt, approval dispatch | Reuse as external-agent infrastructure. Native Scient may later adapt to the same normalized lifecycle, but scientific context must be assembled by the Scient gateway from an immutable context receipt. |
| External OpenCode | `apps/server/src/provider/Layers/OpenCodeAdapter.ts`: `startSession`, `sendTurn`, `interruptTurn`, `respondToRequest`; `apps/server/src/provider/opencodeRuntime.ts`: `OPENCODE_CLI_SPEC` | Preserve unchanged as the user's independently installed/connected OpenCode. It keeps its own binary/URL/password, `opencode` data directory, credentials, sessions, and updates. |
| Runtime evidence | `packages/contracts/src/providerRuntime.ts`: `ProviderRuntimeEvent` family; `apps/server/src/orchestration/Layers/ProviderRuntimeIngestion.ts` | Reuse normalized session, turn, item, content, approval, tool, file, warning, error, and completion events as execution evidence. They do not become canonical scientific records. |
| Native source | owned `scient-agent`: `packages/core/src/global.ts`; `packages/core/src/database/database.ts` | Selected inherited core, but not yet a native product runtime. It currently hardcodes the application path segment `opencode` and default database names `opencode*.db`; this is the exact state-isolation gap to close. |

### Execution contract

A later Scient-owned `ScientificTaskExecutor` candidate would accept only:

- stable execution-target ID;
- Scient project ID and run ID;
- project-root capability reference, not an arbitrary model-generated path;
- immutable task revision;
- immutable context receipt with selected source revision IDs and hashes;
- allowed operation/capability set; and
- cancellation signal.

Its output would be a proposed record plus normalized run evidence. It cannot
accept scientific state and cannot write canonical records directly. The
trusted Scient boundary would record the run and proposal only after validating
IDs, hashes, scope, and current revisions.

### Filesystem scope

`apps/server/src/workspace/Layers/WorkspacePaths.ts` and
`WorkspaceFileSystem.ts` already provide useful lexical and real-path
containment for app file RPC. They should be reused by server shims, including
symlink checks, but they do not confine provider-native tools or a shell.

The selected agent source improves mutation safety in
`packages/core/src/location-mutation.ts`, which rejects relative escapes and
requires `external_directory` permission for explicit external mutation paths.
However, `packages/core/src/tool/bash.ts` explicitly states that command-argument
path scanning is advisory and that the shell runs with host-user filesystem,
process, and network authority. A cwd plus approval mode is therefore not an
enforceable project sandbox.

Approved scope requirements for a later slice are:

1. canonical operations accept only package IDs and root-relative paths;
2. any controlled executor used for proof has no filesystem capability unless
   a separately reviewed capability is required;
3. native Scient later runs with a dedicated capability profile that disables
   unrestricted shell/direct-write tools for this workflow and exposes only
   scoped Scient gateway tools;
4. every gateway path is resolved against the registered real project root and
   rechecked after following existing ancestors/symlinks; and
5. proposal acceptance, not model output, is the only route to canonical state.

If a later workflow genuinely requires arbitrary shell execution, add an OS
sandbox or isolated staged workspace as a separate safety slice. Do not claim
that the current OpenCode permission prompt alone enforces filesystem scope.

## Path D: Persistence And State Ownership

| State | Current owner | Location | Survives restart? | Canonical for Scient? |
|---|---|---|---|---|
| Application identity and settings | Synara-derived Scient host | Electron profile under platform app data; server settings at `~/.scient/userdata/settings.json` | Yes | No |
| Workspace path | Synara-derived host | `projection_projects.workspace_root` in `~/.scient/userdata/state.sqlite` and UI shell state | Yes | Host reference only |
| Synara project/session projection | Synara-derived host | orchestration events and projection tables in `~/.scient/userdata/state.sqlite` | Yes | No |
| Scient session and transcript | Missing; OpenCode-derived source selected | Must use a dedicated first-party agent data/config/state root and database, separate from external OpenCode | Must for runtime continuity | No |
| External OpenCode session and transcript | External OpenCode plus host adapter | External OpenCode's XDG/Application Support `opencode` data; resume/session projection in host SQLite | Provider-dependent; normally yes | No |
| Runtime events and tool logs | Agent plus host ingestion | Provider-native store; normalized host events/projections; optional `~/.scient/userdata/logs/provider/events.log` | Yes where persisted | Evidence only |
| Scient project identity | Existing project-init kernel | `.scient/project.json` | Yes and moves with folder | Yes |
| Source excerpt and evidence note | Missing | Project-owned representation and location undecided | Must | Must |
| Task and context receipt | Missing | Project-owned representation and location undecided | Must | Must |
| Run receipt, proposal, and decision | Missing | Project-owned representation and location undecided | Must | Must |
| Recovery state | Missing | Project-owned representation and location undecided | Must | Must |

The persistence choice must be evaluated against reliability, atomicity,
performance, scale, backup/restore, portability, readable export, Git and cloud-
folder behavior, concurrency, migration, packaging, future sync, and an exit
path. Secrets and provider credentials must never enter project-owned scientific
state. Large source files remain out of the first structured-state experiment.
The complete open question and reviewer assignment live in the
[persistence decision brief](../../docs/architecture/scient-project-persistence-decision-brief.md).

## Path E: Proposal, Review, Non-Git Recovery, And Reopening

Current checkpointing is intentionally Git-specific:

- `apps/server/src/checkpointing/Services/CheckpointStore.ts` defines hidden
  Git-ref capture, restore, reverse diff, and checkpoint diff;
- `apps/server/src/checkpointing/Layers/CheckpointStore.ts` implements those
  operations with an isolated Git index and refs; and
- `apps/server/src/orchestration/Layers/CheckpointReactor.ts` emits
  “Checkpoints are unavailable because this project is not a git repository”
  for the non-Git boundary.

Provider live diffs and host proposed plans are useful presentation/evidence
inputs, but they remain thread/provider projections and cannot reconstruct an
accepted scientific note after their session is deleted.

The approved behavioral requirement for a later proposal flow is:

1. create immutable source, task, and context revisions;
2. open a run receipt before executor invocation;
3. record executor evidence and a proposal linked to exact revision IDs;
4. allow proposal text edits as new proposal revisions;
5. on accept, begin one atomic or equivalently recoverable publish operation;
6. append or preserve a recovery point containing the prior accepted state;
7. append the decision and accepted note revision;
8. atomically advance the accepted state and publish; and
9. on reject or failure, append the outcome without changing accepted pointers.

Reopening must read the portable project identity and canonical record without
starting an agent. Recovery creates a new decision/revision that points back to
the recovery point; audit history remains intact. Interrupted publication must
leave the old state authoritative or the new state fully authoritative, never a
silent partial mixture. Corruption/open failures must be explicit and read-only
until a verified recovery action is chosen.

This behavioral boundary is credible for a controlled fixture only if
acceptance changes a bounded set of canonical records atomically or through an
equivalently proven protocol. Later materialized project-file changes require
content-addressed preimages or another reviewed file transaction; they must not
be silently declared covered by the first record mechanism.

## Permanent Seam Comparison

Scores use 1 (poor) to 5 (strong). They are preliminary source-trace analysis,
not user acceptance and not a persistence-technology score.

| Option | Shared manual/agent operations | Session-independent truth | Non-Git recovery | Low inherited-core change | Upstream cost | Maintainer clarity | Reversible |
|---|---:|---:|---:|---:|---:|---:|---:|
| One namespaced package with integration left implicit | 4 | 5 | 5 | 5 | 5 | 4 | 5 |
| Isolated modules scattered across contracts/server/UI | 3 | 2 | 3 | 3 | 2 | 2 | 2 |
| Hybrid package plus thin integration shims and executor port | 5 | 5 | 5 | 4 | 4 | 5 | 5 |

The hybrid remains the leading code-placement candidate because a package can
make ownership explicit while named shims make UI/server/executor crossings
testable. It is not selected. Yaacov deferred the permanent package and
persistence choice for later review. The persistence evaluation must determine
whether this placement remains appropriate once storage, migration, backup,
portability, and support obligations are understood.

## Reuse Unchanged

- `@scientfactory/project-init` for folder inspection, initialization,
  migration, and interrupted-init recovery;
- folder picker, duplicate project recovery, host project registration, and
  sidebar shell;
- trusted local server and typed websocket RPC transport;
- `WorkspacePaths`/`WorkspaceFileSystem` containment for app-owned paths;
- normalized provider runtime events as execution evidence;
- provider interrupt and approval UI concepts behind the executor adapter;
- common UI primitives, toasts, loading/error surfaces, and optional file
  preview; and
- existing external provider registry/settings/adapters, especially OpenCode.

## Do Not Couple Scient Truth To

- `ProviderKind`, model selection, or one provider's resume cursor;
- Synara project ID, thread ID, message ID, proposed-plan rows, or checkpoint
  refs;
- app `state.sqlite`, browser local storage, Electron profile, or provider event
  log;
- external OpenCode binary, URL, password, auth file, XDG root, session DB, or
  update channel;
- Git repository presence, worktrees, branches, or hidden refs;
- unrestricted shell commands or model-generated paths; or
- T3 Code, Goose, cloud, mobile, collaboration, or remote execution.

## Proven Gaps And Candidate Changes

### Scient desktop candidates - not authorized

- evaluate whether `packages/scient-project` should own domain commands,
  persistence-independent interfaces, revision/recovery rules, and path-scope
  policy;
- select a persistence model only through the decision brief's reviewed gates;
- add narrow DTO/RPC contracts and server services that resolve portable
  identity from the workspace root and call the package;
- add one project-level route/view and sidebar entry; and
- later evaluate the executor port, controlled deterministic adapter, and one
  Scient adapter; the fake-executor product proof is deferred.

No change to Synara's orchestration event schema, `projection_projects`, generic
provider event schema, or Git checkpoint store is required for the fixture.

### Scient agent requirement - approved, implementation later

Before native connection, replace the inherited hardcoded global identity/path
defaults with a build/runtime profile that gives Scient dedicated data, config,
state, cache, temp, log, auth, database, plugin, and update locations. Use a
brand-neutral durable first-party ID where records persist. Keep upstream
OpenCode defaults available to external OpenCode builds; never redirect or
migrate the user's external OpenCode state implicitly.

After a later review, expose a bounded Scient workflow capability that consumes
the gateway receipt and returns a proposal. The first capability profile must
not provide unrestricted shell or direct canonical writes.

## Deferred Decision And Coding Sequence

No scientific persistence or executor code is authorized by this trace. The
next sequence is documentation and evidence first:

1. **Requirements review:** revise and accept the technology-neutral ownership,
   recovery, portability, export, performance, and collaboration requirements.
2. **Candidate review:** compare project-local SQLite, append-only structured
   files, canonical files plus a derived index, app-local storage plus portable
   bundles, and any reviewer-supported alternative.
3. **Disposable evidence run:** exercise real persistence, process, filesystem,
   copy, backup, restore, migration, concurrency, scale, and corruption behavior
   without using production code or the user's live project.
4. **Architecture decision:** propose an ADR with evidence, rejected options,
   unsupported behavior, and an exit path; keep it Proposed until Yaacov accepts
   it.
5. **Package and implementation plan:** only then select the permanent package
   seam and rewrite the coding backlog around the accepted model.
6. **Deferred executor discussion:** decide later when and how a deterministic
   executor proof and the user's real project should enter the sequence.
7. **Native Scient isolation:** preserve the approved requirement that native
   Scient and external OpenCode never share credentials, processes, paths,
   sessions, plugins, databases, or updates; authorize implementation separately.

## Go/No-Go Conditions

Go now only for completing and publishing the independent T3 reliability work and
for documenting/reviewing persistence requirements. Do not begin scientific-
state product implementation.

The later design may go to implementation only when evidence proves:

- manual and agent paths share one command boundary;
- accepted state is independent of host and provider sessions;
- non-Git recovery is atomic or equivalently recoverable and testable;
- project scope is enforced at the canonical/gateway boundary rather than
  trusted to prompt wording;
- external OpenCode remains unchanged; and
- the first coding backlog is bounded around an accepted persistence model.

Stop and revisit this decision if implementation proves any of these:

- no candidate can meet the reviewed reliability, portability, performance,
  backup, export, migration, and concurrency requirements at acceptable cost;
- accepted state requires host projection IDs or an executor transcript;
- scoped gateway tools cannot prevent direct native-agent writes for the
  controlled workflow;
- native Scient cannot isolate every durable path from external OpenCode without
  a broad upstream-hostile rewrite; or
- the project-level UI requires a broad workbench redesign.

## Review Checkpoint

The source map is complete, but its former SQLite and hybrid-package selection
is withdrawn pending later review. The approved requirements are non-Git
recovery, trusted filesystem scope, and complete native-Scient/external-OpenCode
runtime independence. Fake-executor work is deferred. Use the
[Scient Project Persistence Decision Brief](../../docs/architecture/scient-project-persistence-decision-brief.md)
for the next review; do not infer implementation authorization from this note.
