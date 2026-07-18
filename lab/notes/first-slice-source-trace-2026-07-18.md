# First Scientific Slice Source Trace

Status: Complete; awaiting Yaacov review
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Selects the permanent Scient-owned state, recovery, UI, and execution boundary for the first scientific vertical slice.
Doc type: Implementation evidence

## Verdict

**Go for the permanent walking skeleton after the review checkpoint.** The
maintained Synara-derived desktop can host the slice without making its project,
thread, provider, or checkpoint projections canonical scientific state.

Use a hybrid placement:

1. a permanent `packages/scient-project` package in `scient-desktop` owns the
   first-slice domain rules, project-local persistence, proposal decisions,
   recovery, and filesystem-scope policy;
2. thin contracts, trusted-server RPC, and project-level UI shims call that
   package; and
3. a narrow executor port accepts immutable task/context receipts and returns a
   proposal. A deterministic fake implements that port first. Scient later
   implements it as a distinct execution target; external OpenCode remains an
   independent adapter.

Canonical accepted state belongs in the project folder, with `.scient/project.json`
as portable identity and `.scient/project.sqlite` as the first-slice record and
revision ledger. Synara's `~/.scient/userdata/state.sqlite`, provider sessions,
chat transcripts, and Git checkpoint refs remain host state or execution
evidence only.

The existing Git-backed checkpoint mechanism is not suitable for the required
non-Git guarantee. For the first slice, proposal acceptance should be one SQLite
transaction that creates a recovery point referring to the prior accepted
revisions, appends the decision, and advances the accepted record pointers.
Revert creates new accepted revisions; it does not rewrite history. No Git
repository, worktree, executor session, or transcript is required to reopen or
recover the accepted source-to-note relationship.

One required native-agent gap is now proven: the selected `scient-agent` source
still defaults its global data/config/state roots and database name to
`opencode`. Native Scient packaging must supply a dedicated first-party runtime
profile before it can be connected. That change must not alter the existing
external OpenCode adapter or its user-owned data paths.

## Controlled Fixture

Use a deterministic synthetic capsule for the first implementation PR. This is
the safer first fixture because no public capsule with compatible excerpt,
dataset, figure, and redistribution rights has yet been validated as one
self-contained unit. Replacing the fixture later with an openly licensed study
does not change the selected architecture.

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

After the host resolves a workspace root, the trusted server should inspect
`.scient/project.json` and open `.scient/project.sqlite` through the new package.
The project-level UI is keyed by the portable Scient project ID, while the
Synara project ID remains a replaceable host reference. Moving the whole folder
preserves Scient identity and history; reopening from a new path may create or
recover a different host project row without changing canonical records.

Failure to open the canonical store must not silently fall back to chat state.
It should show an explicit unavailable/migration/recovery state and leave the
project files untouched until the user chooses a safe action.

## Path B: Manual Operations And Minimal UI

The current product has the necessary shell but no canonical scientific
operations. The smallest placement is a new project-level route and component,
not another chat-thread projection:

- add `_chat.project.$projectId.tsx` as the thin route shim;
- add a focused `ScientProjectView` with source, task/context, proposal, and
  history sections;
- enter it from the existing project row/context menu in `Sidebar.tsx`;
- reuse existing dialog, button, form, toast, loading, and error primitives;
- reuse `WorkspaceFilePreview` only for optional local-file inspection; and
- use a small structured before/proposed-note review card. Do not force the
  note through Git/file diff machinery merely to reuse `DiffPanel`.

Both UI actions and executor output call the same package commands through the
trusted server:

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

Add a Scient-owned `ScientificTaskExecutor` port whose input contains only:

- stable execution-target ID;
- Scient project ID and run ID;
- project-root capability reference, not an arbitrary model-generated path;
- immutable task revision;
- immutable context receipt with selected source revision IDs and hashes;
- allowed operation/capability set; and
- cancellation signal.

Its output is a proposed record plus normalized run evidence. It cannot accept
scientific state and cannot write canonical tables directly. The server records
the run and proposal through package commands after validating IDs, hashes,
scope, and current revisions.

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

For the first slice:

1. canonical operations accept only package IDs and root-relative paths;
2. the fake executor has no filesystem capability;
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
| Source excerpt and evidence note | New Scient project package | Versioned rows in `.scient/project.sqlite` | Yes | Yes |
| Task and context receipt | New Scient project package | Versioned task and immutable context-receipt rows in `.scient/project.sqlite` | Yes | Yes |
| Run receipt, proposal, and decision | New Scient project package | Append-only run, proposal revision, and decision rows in `.scient/project.sqlite` | Yes | Yes |
| Recovery state | New Scient project package | Recovery-point and accepted-revision ledger rows in `.scient/project.sqlite`; content-addressed blobs only when later file materialization requires them | Yes | Yes |

Project-local SQLite must use foreign keys, WAL or an equally safe journaling
mode, explicit schema versioning, deterministic migrations, busy timeouts, and
backup/recovery tests. Secrets and provider credentials never enter this file.
Large source files are out of scope; the first exact excerpt is stored as text
with a digest and local source locator.

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

The first-slice proposal flow is instead:

1. create immutable source, task, and context revisions;
2. open a run receipt before executor invocation;
3. record executor evidence and a proposal linked to exact revision IDs;
4. allow proposal text edits as new proposal revisions;
5. on accept, begin one database transaction;
6. append a recovery point containing the prior accepted revision pointers;
7. append the decision and accepted note revision;
8. atomically advance the accepted pointers and commit; and
9. on reject or failure, append the outcome without changing accepted pointers.

Reopening reads the portable project identity and canonical ledger without
starting an agent. Recovery creates a new decision/revision that points back to
the recovery point; audit history remains intact. Interrupted transactions roll
back through SQLite. Corruption/open failures are explicit and read-only until
backup or repair is chosen.

This is credible for the fixture because acceptance changes only canonical
records. Later materialized project-file changes require content-addressed
preimages or another reviewed file transaction; they must not be silently
declared covered by the first ledger.

## Permanent Seam Comparison

Scores use 1 (poor) to 5 (strong).

| Option | Shared manual/agent operations | Session-independent truth | Non-Git recovery | Low inherited-core change | Upstream cost | Maintainer clarity | Reversible |
|---|---:|---:|---:|---:|---:|---:|---:|
| One namespaced package with integration left implicit | 4 | 5 | 5 | 5 | 5 | 4 | 5 |
| Isolated modules scattered across contracts/server/UI | 3 | 2 | 3 | 3 | 2 | 2 | 2 |
| **Hybrid package plus thin integration shims and executor port** | **5** | **5** | **5** | **4** | **4** | **5** | **5** |

The hybrid is selected because the package makes ownership and portability
real, while named shims make the UI/server/executor crossings explicit and
testable. Scattered modules would let host projections become accidental truth.
A package with no explicit integration policy would still leave executor and UI
call paths ambiguous.

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

## Required Changes And Proven Gaps

### Scient desktop

- add `packages/scient-project` with domain commands, SQLite repository,
  migrations, revision/recovery ledger, and path-scope policy;
- add narrow DTO/RPC contracts and server services that resolve portable
  identity from the workspace root and call the package;
- add one project-level route/view and sidebar entry; and
- add the executor port, deterministic fake, and later one Scient adapter.

No change to Synara's orchestration event schema, `projection_projects`, generic
provider event schema, or Git checkpoint store is required for the fixture.

### Scient agent

Before native connection, replace the inherited hardcoded global identity/path
defaults with a build/runtime profile that gives Scient dedicated data, config,
state, cache, temp, log, auth, database, plugin, and update locations. Use a
brand-neutral durable first-party ID where records persist. Keep upstream
OpenCode defaults available to external OpenCode builds; never redirect or
migrate the user's external OpenCode state implicitly.

Then expose a bounded Scient workflow capability that consumes the gateway
receipt and returns a proposal. The first capability profile must not provide
unrestricted shell or direct canonical writes.

## Exact First Coding Backlog

After Yaacov accepts this trace, implement in this order and keep each repository
change independently reviewable:

1. **Fixture and package contract:** commit the synthetic capsule fixture and
   create `@scientfactory/scient-project` with branded IDs, schemas, command
   results, revision invariants, and a deterministic in-memory repository.
2. **Canonical store:** add `.scient/project.sqlite` open/create validation,
   migrations, source/task/context/run/proposal/decision tables, transactional
   acceptance, recovery points, reopen/move tests, busy/corrupt/interrupted
   cases, and dependency audit.
3. **Trusted server boundary:** add project-root identity resolution, real-path
   scope checks, package service wiring, typed RPC methods, and tests proving
   host project/session deletion cannot delete canonical records.
4. **Manual project UI:** add the project-level route/view, manual excerpt and
   task/context forms, proposal edit/accept/reject/history UI, explicit store
   errors, and close/reopen flow.
5. **Fake executor proof:** implement `ScientificTaskExecutor` with a
   deterministic fake that receives only the context receipt and returns the
   expected two-sentence proposal; prove cancellation/failure leave accepted
   state unchanged.
6. **End-to-end non-Git test:** run initialized -> source -> task -> proposal ->
   accept -> close -> move folder -> reopen -> recover, while proving the
   folder remains outside Git and no provider transcript is needed.
7. **Execution-target foundation:** add stable agent-connection/execution-target
   identity above `ProviderKind`, preserve all external settings and adapters,
   and test migration with Scient absent/present.
8. **Native Scient isolation:** in `scient-agent`, add the dedicated first-party
   runtime profile and prove simultaneous Scient/external-OpenCode credentials,
   processes, paths, sessions, and updates do not overlap.
9. **Native adapter:** connect Scient to the executor port with scoped gateway
   tools, normalized evidence, cancellation, and failures; replay a sanitized
   live run before the final controlled-fixture smoke.

Do not combine steps 7-9 with the first domain/store PR. The fake proves the
scientific boundary before provider plumbing can obscure it.

## Go/No-Go Conditions

Go after review because:

- manual and agent paths share one command boundary;
- accepted state is independent of host and provider sessions;
- non-Git recovery is transactional and testable for the fixture;
- project scope is enforced at the canonical/gateway boundary rather than
  trusted to prompt wording;
- external OpenCode remains unchanged; and
- the first coding backlog is bounded.

Stop and revisit this decision if implementation proves any of these:

- project-local SQLite cannot be opened/moved/recovered safely across supported
  desktop platforms;
- accepted state requires host projection IDs or an executor transcript;
- scoped gateway tools cannot prevent direct native-agent writes for the
  controlled workflow;
- native Scient cannot isolate every durable path from external OpenCode without
  a broad upstream-hostile rewrite; or
- the project-level UI requires a broad workbench redesign.

## Review Checkpoint

No product-code implementation follows from this note until Yaacov reviews the
selected hybrid boundary, `.scient/project.sqlite` ledger, non-Git recovery,
filesystem-scope rule, external OpenCode separation, and backlog above.
