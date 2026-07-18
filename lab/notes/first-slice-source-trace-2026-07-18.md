# First Scientific Slice Source Trace

Status: Complete as source evidence; memory and package architecture not selected
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Maps the first scientific slice's current source seams and proven gaps without selecting memory layers, persistence technology, or permanent product architecture.
Doc type: Implementation evidence

## Verdict

The maintained Synara-derived desktop can host a later scientific workflow
without making its project, thread, provider, or checkpoint projections
canonical scientific memory. This source trace does not select the future
memory architecture, its storage, or the permanent scientific-operation package.

A hybrid placement was one source-trace candidate, not an accepted design:

1. a possible `packages/scient-project` package in `scient-desktop` owns the
   first-slice domain rules, proposal decisions, recovery behavior, and
   filesystem-scope policy;
2. thin contracts, trusted-server RPC, and project-level UI shims call that
   package; and
3. a narrow executor port accepts immutable task/context receipts and returns a
   proposal. Deterministic fake-executor implementation is deferred for later
   discussion. Scient would eventually implement the port as a distinct
   execution target; external OpenCode remains an independent adapter.

The trace proved that `.scient/project.json` already owns portable project
identity while ongoing scientific memory and records have no selected location
or representation. Conversations, task/run context, project memory, user
memory, raw history, files, recovery, and cloud sync must be discussed together
in a dedicated future memory-architecture project. The raw candidate layers and
questions are preserved in the
[`Memory Architecture Discovery`](../../docs/planning/memory-architecture-discovery.md).

The existing Git-backed checkpoint mechanism is not suitable for the approved
non-Git guarantee. A future memory and recovery design must determine how
accepted work remains coherent and recoverable without making a Git repository,
worktree, executor session, or transcript the only reconstruction path. The
mechanism and record model are open.

One required and user-approved native-agent gap is now proven: the selected
`scient-agent` source still defaults its global data/config/state roots and
database name to `opencode`. Native Scient packaging must supply a dedicated
first-party runtime profile before it can be connected. That change must not
alter the existing external OpenCode adapter or its user-owned data paths.

## Controlled Fixture

The deterministic synthetic capsule below remains a candidate for a later
controlled memory/recovery or executor test. Yaacov deferred fake-executor product
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
| Scient desktop (`scient-desktop`) | owned `main` `bd2a6eed6243b13fc1423b21b2454ae060bce5c7` | Canonical checkout clean when selected | Official Synara reviewed through `69304bc1d59d86da8afbac367118c75db8c9dbfe`; verifier current with no unreviewed commits | Existing installed-app smoke reached project initialization. Reliability PR #14 passed full tests, typecheck, build, release smoke, and 171 browser tests at exact head `8a8398e8` before merging; the change does not alter this trace's product seams. |
| Scient agent (`scient-agent`) | owned `dev` `67e7f3f0341c7a5bad8d68e0a29f113b450eb02a` | Clean and equal to `origin/dev` | Official OpenCode reviewed through `fab213312927ea64cf968832c527206e8c944f9e`; verifier current with no unreviewed commits | Maintained upstream verifier and public-identity check passed. A live Scient action was not run because native Scient identity, private state, packaging, and gateway are correctly still absent. |

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

After the host resolves a workspace root, later project-aware capabilities can
inspect `.scient/project.json` and key their UI to the portable Scient project
ID while keeping the Synara project ID as a replaceable host reference. This
trace does not decide which memory or record boundary is then opened, what must
move with the folder, or how export, restore, and cloud continuation work.
Existing host or chat state must not be described as accepted memory merely
because no future store has been selected.

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

## Path D: Current State Ownership And Future Memory Questions

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

The future memory-architecture project must decide which of these rows represent
memory, raw history, provenance, ordinary files, application state, or another
kind of project record before comparing storage technologies. Its questions
include portability, Git independence and compatibility, user-selected cloud
folders, recovery, conversation retention, future Scient cloud sync, privacy,
and export. They are preserved in the
[`Memory Architecture Discovery`](../../docs/planning/memory-architecture-discovery.md).
Secrets and provider credentials must never become project memory merely for
convenience.

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

The trace sketched the following candidate later proposal flow. Only the high-
level non-Git recovery outcome is approved; these record and transaction details
are not accepted memory architecture:

1. create immutable source, task, and context revisions;
2. open a run receipt before executor invocation;
3. record executor evidence and a proposal linked to exact revision IDs;
4. allow proposal text edits as new proposal revisions;
5. on accept, begin one atomic or equivalently recoverable publish operation;
6. append or preserve a recovery point containing the prior accepted state;
7. append the decision and accepted note revision;
8. atomically advance the accepted state and publish; and
9. on reject or failure, append the outcome without changing accepted pointers.

The future memory discovery must decide whether this is the right model, what
reopening and recovery mean at each memory layer, and how interrupted changes or
corruption are surfaced. This trace does not select immutable records,
transactions, accepted pointers, content-addressed preimages, or another repair
protocol.

## Permanent Seam Comparison

Scores use 1 (poor) to 5 (strong). They are preliminary source-trace analysis,
not user acceptance and not a persistence-technology score.

| Option | Shared manual/agent operations | Session-independent truth | Non-Git recovery | Low inherited-core change | Upstream cost | Maintainer clarity | Reversible |
|---|---:|---:|---:|---:|---:|---:|---:|
| One namespaced package with integration left implicit | 4 | 5 | 5 | 5 | 5 | 4 | 5 |
| Isolated modules scattered across contracts/server/UI | 3 | 2 | 3 | 3 | 2 | 2 | 2 |
| Hybrid package plus thin integration shims and executor port | 5 | 5 | 5 | 4 | 4 | 5 | 5 |

The hybrid scored highest in this preliminary comparison because a package can
make ownership explicit while named shims make UI/server/executor crossings
testable. It is not selected. A future memory architecture may change which
responsibilities belong together, so this comparison remains historical source-
trace evidence rather than a current package recommendation.

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
- do not select persistence or memory boundaries from this trace;
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

## Deferred Memory-Architecture Handoff

This trace does not authorize memory, persistence, or executor implementation.
It hands the unresolved relationships among conversation history, task/run
context, user memory, project memory, raw history, provenance, files, recovery,
and cloud sync to a dedicated future discovery project. The candidate layers,
questions, and explicit non-decisions are preserved in the
[`Memory Architecture Discovery`](../../docs/planning/memory-architecture-discovery.md).

The permanent scientific-operation package and deterministic fake-executor
product proof remain separate deferred questions. Native Scient isolation is an
approved independent requirement: native Scient and external OpenCode must not
share credentials, processes, paths, sessions, plugins, databases, or updates.

## Go/No-Go Conditions

The independent T3 reliability work may complete without any memory decision.
This trace also does not create a broad blocker for unrelated product work.
Memory-dependent workflow behavior should be planned only when the dedicated
memory project begins; the package, executor proof, and native-agent integration
require their own explicit authorization.

## Review Checkpoint

The source map is complete, but its former SQLite and hybrid-package selection
is withdrawn. The approved requirements are non-Git recovery, trusted
filesystem scope, and complete native-Scient/external-OpenCode runtime
independence. Fake-executor work is deferred. Future memory questions live in
the [`Memory Architecture Discovery`](../../docs/planning/memory-architecture-discovery.md);
do not infer memory architecture or implementation authorization from this note.
