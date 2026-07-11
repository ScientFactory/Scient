# Technology Stack

Status: Proposed
Owner: Yaacov
Last updated: 2026-07-11
Purpose: Records LitRev's current technology stack direction and open implementation decisions.
Doc type: Architecture direction

This document records the current technology stack direction for LitRev and
distinguishes that direction from the inherited scaffold currently available in
the lab.

It is intentionally limited to stack decisions: what we plan to use, what role each technology plays, what remains under evaluation, and what is explicitly deferred. Detailed designs for sync, security, project format, and agent runtime should live in separate architecture documents.

The Synara checkout under `lab/external/` is an ignored, pinned upstream source
tree used for experiments. It is not current LitRev implementation and does not
make its package layout, dependencies, state model, or provider model accepted
LitRev architecture.

## Product Constraints

LitRev is a local-first, cloud-mirrored scientific workspace. Local work must remain usable offline, while cloud mirroring supports backup, cross-device access, sharing, and collaboration.

The stack must support:

- a serious desktop app
- offline-first project work
- cloud-backed sharing and collaboration
- versioned and inspectable research artifacts
- agent execution inside the real project workspace
- source-grounded scientific records
- clear human review of high-impact changes

The core architectural rule is:

> LitRev owns scientific truth. Agents and infrastructure serve that truth.

## Stack Summary

| Layer | Current Direction | Status |
|---|---|---|
| Product language | TypeScript | Proposed; inherited scaffold currently uses TypeScript 5.7 |
| UI framework | React | Proposed; inherited scaffold uses React with Vite |
| Desktop shell | Electron | Proposed first choice; present in inherited scaffold |
| Local coordinator | Bun/Node.js WebSocket server | Inherited scaffold candidate; not yet a LitRev decision |
| Workspace tooling | Bun workspaces, Turborepo, Vite | Inherited scaffold candidate; not yet a LitRev decision |
| Cloud web app | React, with Next.js as a later candidate | Not scaffolded |
| Local database | SQLite | Proposed; inherited scaffold uses it for app/session projections, not LitRev project truth |
| Cloud database | Postgres | Proposed; not scaffolded |
| Cloud platform | Supabase | Initial default candidate; not scaffolded |
| Large file storage | Object storage | Proposed; not scaffolded |
| Sync | Local-first SQLite-to-cloud sync | Under evaluation; not scaffolded |
| Agent provider layer | Synara provider contracts and service | Inherited scaffold candidate; needs boundary validation |
| Agent executor | OpenCode | Owned upstream-aligned fork verified through the inherited adapter in Gate 1.5 |
| Agent substrate | Goose | Deferred to Gate 1.6; source-depth candidate, not adopted |
| Executor safety reference | Codex | Evaluation/reference |
| Scientific runtime | Python via uv | Proposed |
| Native services | Rust selectively | Deferred until needed |
| Rich text editor | ProseMirror/Tiptap family | Candidate |
| Collaborative text | Yjs or equivalent CRDT layer | Candidate |
| Versioning | Domain history, snapshots, Git for artifacts | Proposed direction |

## Actual Scaffold State

As of 2026-07-11, the executable application scaffold is the ignored checkout
of LitRev's owned Synara fork at
`lab/external/desktop-app-forks/synara/`. The review branch
`codex/gate-1-5` is at
`77d0854c3cbfdf579e90ed61577a70553f5c3fa6`, based on tested official upstream
`3267a2fbf430b733a6d7ff1759f6689023d85689`, and is merged into owned `main` at
`536064b23d4211f33a812a1d6303c7029b9ed146`. The owned OpenCode fork and exact
tested commit are recorded in `lab/external/sources.lock.md`; its Gate 1.5
source/build worktree remains under ignored runtime evidence rather than parent
Git history.

The scaffold currently provides:

| Scaffold area | Inspected reality | LitRev boundary |
|---|---|---|
| Desktop | Electron app under `apps/desktop` | Candidate shell machinery, not accepted LitRev product architecture |
| Local UI | React 19 and Vite under `apps/web` | Local workbench UI; not the future cloud web client |
| Local coordinator | Bun during development, Node-compatible build, WebSocket RPC, provider routing, terminal/filesystem/Git/browser services under `apps/server` | Runtime machinery LitRev may wrap or borrow; not the scientific project kernel |
| Local state | SQLite through Effect SQL | Synara session/orchestration projection state; not canonical LitRev scientific state |
| Shared contracts | Effect schemas in `packages/contracts` plus runtime helpers in `packages/shared` | Candidate provider/runtime boundary; LitRev domain contracts do not exist yet |
| Agent integration | Existing provider adapters, including the OpenCode SDK path verified with the owned OpenCode binary | Reusable execution machinery; no LitRev agent gateway or run ledger exists yet |
| Tooling | Bun workspaces, Turborepo, Vite, Vitest, TypeScript 5.7 | Inherited compatibility baseline, not an automatic long-term commitment |

`lab/litrev-bridge/` currently contains planning documentation only. There are
no LitRev-owned app packages, project database, scientific domain contracts,
agent gateway, cloud client, sync implementation, or production build pipeline.

### Scaffold Use Rule

The inherited scaffold pass and owned-fork identity pass are complete. Continue
to sync the owned Synara fork deliberately, preserve the isolated LitRev state
and updater boundary, and promote only the parts that prove useful behind a
LitRev-owned project and agent contract. Do not restructure inherited packages
or add scientific truth to Synara state merely because the shell now carries
LitRev identity.

### TypeScript Version Baseline

Use the current stable TypeScript release for new LitRev-owned packages when
their selected dependencies support it. As of 2026-07-09, that means TypeScript
7.x, the native TypeScript compiler line announced by the TypeScript team on
2026-07-08
([official announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/),
inspected 2026-07-09).

The inherited Synara scaffold is pinned to TypeScript 5.7.3. Boot and verify it
without a compiler upgrade first. A later TypeScript 7 compatibility spike must
check the actual Effect language service, Electron, React, Vite, test, lint, and
build paths before changing the inherited baseline.

TypeScript 5.7 is therefore a scaffold compatibility fact, not a LitRev product
commitment. TypeScript 7 is a target baseline for new LitRev-owned code, not a
prerequisite for the first Synara health check. Record any durable exception in
`docs/development/typescript.md` or the relevant implementation document once
LitRev-owned code exists.

## Application Architecture

LitRev should be built as a desktop-first product with a cloud collaboration plane.

The local app must remain useful without network access. The cloud layer provides account identity, backup, cross-device access, project sharing, collaboration, background jobs, and web access.

The current lab scaffold has this upstream shape:

```text
lab/external/desktop-app-forks/synara/
  apps/desktop
  apps/server
  apps/web
  packages/contracts
  packages/effect-acp
  packages/shared
```

That tree remains foreign source and should not become the LitRev package map by
accident. The first LitRev-owned contracts and adapter experiments belong in
`lab/litrev-bridge/` until their boundary is proven.

Possible later LitRev-owned package areas include:

```text
apps/desktop
apps/web          # only when the cloud continuation client is started
packages/ui
packages/domain
packages/editor
packages/sync
packages/agent
packages/science
```

This is a target decomposition to validate, not a scaffold that exists today.
Final package boundaries should emerge from the local project, agent gateway,
scientific workflow, and later sync pressure rather than from renaming Synara
packages in place.

When both clients exist, the desktop and web apps should share domain types,
validation logic, UI primitives, editor components, and project-state views
where practical.

## Desktop

Use Electron for the first desktop experiment. The inherited Synara scaffold
already provides the Electron shell.

Electron is the pragmatic first choice because LitRev needs React, local files, SQLite, subprocesses, agent CLIs, and local background services. These are all easier to integrate in Electron than in a stricter native shell during the first product build.

The immediate validation question is whether the Synara-derived shell can host
a LitRev-owned project mode without forcing scientific work into coding
projects, Git worktrees, provider threads, or engine-owned artifacts. If it
cannot, keep useful runtime components as references or donors and build a
smaller LitRev-owned shell instead of deepening the fork.

Tauri is not rejected. It is deferred.

Tauri should be reconsidered if Electron becomes a proven blocker for memory use, binary size, security posture, or native integration. Rust can still be introduced behind stable TypeScript-facing interfaces before any full shell migration.

## Web

The scaffold's `apps/web` is a React/Vite local workbench UI used by the local
server and Electron app. It is not a scaffold for LitRev's future cloud web
client.

Use React for the future cloud web app. Next.js remains a default candidate, but
no cloud web app exists yet and it is not part of the first local scaffold pass.
LitRev's core product model should not depend on Next.js-specific server
behavior. The eventual web app should be a continuation client of the LitRev
cloud/project model, not a separate product with separate semantics.

## Local Data

Use SQLite locally.

The inherited scaffold already uses SQLite for Synara app, session,
orchestration, and projection state. That database must not be relabeled as the
LitRev scientific project database. LitRev-owned project persistence has not
been designed or implemented.

LitRev should distinguish:

- global app state, such as recent projects, local settings, device identity, and local caches
- per-project scientific state, such as papers, protocol records, evidence records, extraction records, manuscript state, agent runs, and sync metadata

The per-project database is the more important architectural object because projects must be portable and recoverable.

The inherited scaffold uses Effect SQL with SQLite through Bun. Do not replace
that layer merely to satisfy the target stack before the scaffold baseline is
known. For LitRev-owned project persistence, evaluate Effect SQL, Drizzle,
Kysely, or a narrower owned layer after the first project-state contract exists.

## Cloud Data

Use Postgres as the cloud database.

Use Supabase as the initial default cloud platform candidate because it provides hosted Postgres, object storage, auth options, realtime primitives, row-level security, and local development tooling.

The architectural commitment is to Postgres and object storage, not to Supabase-specific behavior. LitRev should avoid unnecessary dependence on Supabase-only features where standard Postgres, portable SQL, or provider-neutral object storage is sufficient.

## File Storage

Use local filesystem storage for local project assets.

Use cloud object storage for mirrored large assets:

- PDFs
- figures
- images
- datasets
- exports
- generated reports
- large analysis artifacts

Supabase Storage is the initial default candidate if Supabase is used as the cloud platform. S3-compatible storage, Cloudflare R2, or another object store should remain viable alternatives.

Large binary assets should not be stored directly in Postgres.

## Sync

Use local-first sync between local SQLite/project state and the cloud collaboration plane.

The exact sync engine is not yet selected.

Current candidates:

- PowerSync for SQLite-to-Postgres local-first sync
- Electric for Postgres-backed read sync and live web/cloud views
- a LitRev-owned sync layer if vendor tools do not fit the required project model

Convex is not selected as the primary database or local-first sync foundation. It may be evaluated for collaboration features or realtime cloud workflows, but the current stack direction requires portable local project state backed by SQLite.

LitRev should maintain domain-level mutation and audit semantics so the product is not locked to one sync vendor.

## Collaboration

Use database sync for structured scientific state.

Use CRDTs only for document-like collaborative surfaces where simultaneous text editing matters.

Good CRDT candidates:

- notes
- comments
- protocol text
- manuscript sections
- figure annotations

Do not use CRDTs as the whole application database.

## Versioning

LitRev should use layered versioning.

Current direction:

- domain history for meaningful scientific changes
- snapshots for restore points before major agent or batch operations
- Git for human-readable artifacts such as protocols, manuscripts, scripts, and exports
- CRDT history only for collaborative text surfaces where appropriate

Git should be available for transparent project history and power-user workflows, but normal project sharing should not require GitHub or GitLab.

## Agent Runtime

The agent runtime is an execution layer, not the product kernel.

The inherited scaffold already contains provider contracts, a provider service,
session/event projections, and adapters for several coding agents. These are
runtime candidates. LitRev does not yet have its own agent gateway, scientific
task contract, context receipt, run ledger, proposed-change lifecycle, or
accepted write-back path.

Initial posture:

- Verify Synara's existing OpenCode adapter as the first executor spike.
- Codex is the execution-safety and sandboxing reference.
- Evaluate Goose in Gate 1.6 as a broader local-agent engine through `goose acp`
  over stdio, behind the future LitRev gateway. Keep authenticated `goose serve`
  as a later process-separated option; do not use the removed `goosed` REST
  surface.
- Treat Goose permissions, sessions, recipes, and tool events as runtime inputs
  to normalize. They do not provide the LitRev project boundary or canonical
  run ledger by themselves.

LitRev should not commit to any agent's internal data model as the canonical project model.

Agents should act through LitRev-owned tools and permission policies, especially for high-impact scientific changes.

## Scientific Runtime

Use Python as the first-class scientific computation runtime.

Initial Python tooling:

- uv
- Python
- pandas or polars
- numpy
- scipy
- matplotlib
- plotly
- PyMuPDF or pypdf

R support may be added later if specific scientific workflows require it.

TypeScript owns product logic. Python owns scientific computation where the ecosystem is stronger.

## Native Services

Do not make Rust the primary application language on day one.

Use Rust selectively when it clearly improves a local subsystem, such as:

- local search
- file indexing
- PDF/text extraction acceleration
- process isolation
- sandboxing
- filesystem watching
- sync worker performance
- large corpus processing

Rust services should sit behind stable TypeScript-facing interfaces.

## Editor

Use a structured rich-text editor for scientific writing.

The ProseMirror/Tiptap family is the current default candidate because it supports structured editing, extensibility, citations, comments, and collaboration through Yjs-style integrations.

The editor must support source-grounded writing and citation traceability.

## Authentication

Cloud identity is required for shared projects.

Authentication remains under evaluation.

Candidates include:

- Supabase Auth, if Supabase becomes the primary cloud platform
- Better Auth or a similar provider-portable auth layer, if portability becomes more important

The chosen auth layer must support project membership, invitations, roles, device identity, audit attribution, and access revocation.

## Open-Source Policy

Open-source systems may be used as references, engines, adapters, or fork candidates.

They must not replace the LitRev scientific kernel.

Preferred licenses:

- MIT
- Apache-2.0
- BSD-style licenses
- MPL where compatible and isolated

Avoid AGPL dependencies unless the licensing consequences are explicitly accepted.

## Explicit Non-Decisions

The following are not decided in this document:

- exact local project folder format
- exact sync protocol
- exact event schema
- exact cloud permission model
- exact encryption model
- exact CRDT provider
- exact editor data model
- exact agent tool contract
- exact packaging and auto-update system

These should be decided in focused architecture documents after implementation spikes.

## Deferred Choices

Do not choose these by default on day one:

- Tauri as the initial desktop shell
- Rust as the primary product language
- Convex as the primary database
- Git as the required sharing system
- CRDTs as the entire app data model
- an agent's internal session database as LitRev's source of truth

## Initial Validation Gates

Validate the stack in ordered gates so scaffold compatibility, LitRev product
ownership, scientific workflow quality, and sync risk do not fail as one opaque
experiment.

### Gate 1: Inherited Scaffold Baseline

- Install and boot the pinned Synara checkout with its existing versions and
  isolated state.
- Verify desktop, local web UI, server, SQLite state, project/folder opening,
  file preview, terminal, browser, provider status, and clean shutdown.
- Verify OpenCode discovery and one harmless turn.
- Record exact commands, ports, state paths, failures, and unsupported behavior
  in the lab.

**2026-07-11 result: passed on the supported baseline.** The scaffold booted,
and the official Homebrew OpenCode CLI `1.17.18` completed one approved,
OpenAI-backed `pwd` in a standalone non-Git fixture. The Synara UI and SQLite
stored the exact expected response, and no checkpoint warning occurred. The
earlier failures belonged to an experimental pinned-source launcher, an expired
copied credential, and a fixture incorrectly placed inside the parent Git
repository. External Browser DNS and interrupted-runner marker cleanup remain
non-blocking scaffold follow-ups. See the corrected evidence in
[`lab/notes/synara-gate-1-baseline-2026-07-11.md`](../../lab/notes/synara-gate-1-baseline-2026-07-11.md)
and proceed through Gate 1.5 before Gate 2.

### Gate 1.5: Owned Fork And Identity Baseline

**2026-07-11 result: passed.** LitRev owns public Synara and OpenCode forks
under `yaacovcorcos`, with writable owned `origin` remotes and fetch-only
official `upstream` remotes. The maintained Synara branch is based on current
official upstream and carries isolated LitRev display, bundle, state, browser,
storage, branch-prefix, and updater identity in reviewable commits. Release
publication requires an explicitly configured LitRev-owned repository.
Installed clients remain independently hard-disabled from automatic updates;
enabling them additionally requires a reviewed code change and a
feed-consumption test.

An OpenCode `1.17.18` binary built from the owned fork completed the constrained
non-Git `pwd` smoke through Synara while preserving the exact project root,
transcript, and approval-required runtime record. Synara/OpenCode runtime and
session databases remain non-canonical integration state. Goose repository,
build, adapter, runtime, and adoption work remain entirely deferred to Gate
1.6. See
[`lab/notes/gate-1-5-execution-report-2026-07-11.md`](../../lab/notes/gate-1-5-execution-report-2026-07-11.md).

### Gate 2: LitRev-Owned Local Boundary

- Add the smallest LitRev-owned project reference, task intent, context receipt,
  run receipt, and artifact/proposed-change reference in `lab/litrev-bridge/`.
- Open one local fixture project without requiring Git.
- Let one executor act inside the approved project boundary.
- Capture what context was used, what actions ran, what files or artifacts
  changed, what failed, and what requires review.
- Keep Synara session and projection state outside canonical LitRev project
  truth.

### Gate 3: Scientific Workflow Proof

- Import one public or synthetic source fixture.
- Preserve one exact source region and one evidence-linked note or draft passage.
- Run one agent task that produces a reviewable project change.
- Prove manual continuation, accept/reject behavior, checkpointing, and recovery.

### Gate 4: Cloud And Sync Risk Spike

Run this only after the local proof is coherent:

- mirror one representative structured record and one asset to Postgres/object
  storage;
- work offline, reconnect, and verify conflict/recovery behavior;
- decide whether the web client is read/review continuation or may author
  canonical project changes;
- avoid building a broad cloud web product before this authority boundary is
  understood.

## Current Recommendation

Use the pinned Synara checkout only as the immediate lab scaffold:

```text
Electron desktop shell
React/Vite local workbench UI
Bun/Node.js local coordinator
WebSocket RPC
SQLite projection state
Effect contracts and runtime helpers
existing OpenCode adapter for first verification
TypeScript 5.7 inherited compatibility baseline
```

Build LitRev-owned project and agent contracts outside Synara's canonical state.
Do not treat the scaffold's coding-project model, package names, provider
sessions, SQLite schema, or TypeScript version as LitRev commitments.

The proposed target direction remains:

```text
TypeScript
React
Electron
SQLite
Postgres
Supabase as initial cloud platform candidate
object storage
local-first sync under evaluation
OpenCode first executor spike
Codex safety reference
Goose later substrate/provider evaluation
Python via uv for scientific computation
selective Rust services later
ProseMirror/Tiptap-family editor
CRDTs only for collaborative text
Git for human-readable artifacts, not required sharing
```

Update this document after each validation gate with what was proven,
invalidated, retained only for compatibility, or deferred. The target stack
remains a proposal until LitRev-owned local project and agent boundaries work;
cloud and web choices remain later proposals until the sync/authority spike.
