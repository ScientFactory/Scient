# Technology Stack

Status: Proposed
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Records PapiLab's current technology stack direction and open implementation decisions.
Doc type: Architecture direction

This document records the current technology stack direction for PapiLab and
distinguishes that direction from the inherited scaffold currently available in
the lab.

It is intentionally limited to stack decisions: what we plan to use, what role each technology plays, what remains under evaluation, and what is explicitly deferred. Detailed designs for sync, security, project format, and agent runtime should live in separate architecture documents.

## Document Rules

This document owns technology roles, adoption status, verified evidence, and
remaining technology risks. It does not own the product roadmap, implementation
sequence, detailed runtime contract, or executed experiment records.

Update it when a technology role, adoption decision, verified result, or
material unresolved risk changes. Put product sequencing in
`../planning/product-roadmap.md`, implementation work in the relevant planning
document, and exact run evidence under `lab/`.

The owned Synara checkout under `desktop-app-forks/synara/` is the maintained
application foundation. Its inherited package layout, dependencies, state model,
and provider model remain implementation evidence, not automatically accepted
PapiLab architecture.

## Product Constraints

PapiLab is a local-first, cloud-mirrored scientific workspace. Local work must remain usable offline, while cloud mirroring supports backup, cross-device access, sharing, and collaboration.

The stack must support:

- a serious desktop app
- offline-first project work
- cloud-backed sharing and collaboration
- versioned and inspectable research artifacts
- agent execution inside the real project workspace
- source-grounded scientific records
- clear human review of high-impact changes

The core architectural rule is:

> PapiLab owns scientific truth. Agents and infrastructure serve that truth.

## Stack Summary

| Layer | Current Direction | Status |
|---|---|---|
| Product language | TypeScript | Proposed; inherited scaffold currently uses TypeScript 5.7 |
| UI framework | React | Proposed; inherited scaffold uses React with Vite |
| Desktop shell | Electron | Proposed first choice; present in inherited scaffold |
| Local coordinator | Bun/Node.js WebSocket server | Inherited scaffold candidate; not yet a PapiLab decision |
| Workspace tooling | Bun workspaces, Turborepo, Vite | Inherited scaffold candidate; not yet a PapiLab decision |
| Cloud web app | React, with Next.js as a later candidate | Not scaffolded |
| Local database | SQLite | Proposed; inherited scaffold uses it for app/session projections, not PapiLab project truth |
| Cloud database | Postgres | Proposed; not scaffolded |
| Cloud platform | Supabase | Initial default candidate; not scaffolded |
| Large file storage | Object storage | Proposed; not scaffolded |
| Sync | Local-first SQLite-to-cloud sync | Under evaluation; not scaffolded |
| Application foundation | Owned Synara fork | Accepted initial foundation through ADR-0001; scientific product fit remains unproven |
| Agent provider layer | Synara provider contracts and service | Inherited runtime machinery to pressure-test behind a PapiLab-owned boundary |
| Agent runtime foundation | Owned OpenCode fork | Accepted initial foundation through ADR-0001; build and adapter compatibility verified |
| Later agent candidate | Goose | Source-depth candidate; integration deferred until after the first PapiLab gateway |
| Executor safety reference | Codex | Evaluation/reference |
| Scientific runtime | Python via uv | Proposed |
| Native services | Rust selectively | Deferred until needed |
| Rich text editor | ProseMirror/Tiptap family | Candidate |
| Collaborative text | Yjs or equivalent CRDT layer | Candidate |
| Versioning | Domain history, snapshots, Git for artifacts | Proposed direction |

## Actual Scaffold State

As of 2026-07-16, the executable application scaffold is the owned Synara
checkout at `desktop-app-forks/synara/`. Its PapiLab identity and project-init
lane passed hosted CI at `2ecdbb5e` and was merged as `50294e64`. The subsequent
application-foundation follow-up passed hosted CI at `f7760e97` and advanced
owned `main` to `bb7ee10a`; exact provenance is recorded in
`lab/external/sources.lock.md`.
The owned OpenCode fork is at `agent-forks/opencode/` on `dev` at `f85656c01`,
pushed to `yaacovcorcos/opencode`. Historical Gate 1 and Gate 1.5 commits,
tags, and ignored runtime evidence remain historical records; they are not the
active PapiLab implementation baseline.

The scaffold currently provides:

| Scaffold area | Inspected reality | PapiLab boundary |
|---|---|---|
| Desktop | Electron app under `apps/desktop` | Candidate shell machinery, not accepted PapiLab product architecture |
| Local UI | React 19 and Vite under `apps/web` | Local workbench UI; not the future cloud web client |
| Local coordinator | Bun during development, Node-compatible build, WebSocket RPC, provider routing, terminal/filesystem/Git/browser services under `apps/server` | Runtime machinery PapiLab may wrap or borrow; not the scientific project kernel |
| Local state | SQLite through Effect SQL | Synara session/orchestration projection state; not canonical PapiLab scientific state |
| Shared contracts | Effect schemas in `packages/contracts` plus runtime helpers in `packages/shared` | Candidate provider/runtime boundary; PapiLab domain contracts do not exist yet |
| Agent integration | Existing provider adapters, including the OpenCode SDK path verified with the owned OpenCode binary | Reusable execution machinery; no PapiLab agent gateway or run ledger exists yet |
| Tooling | Bun workspaces, Turborepo, Vite, Vitest, TypeScript 5.7 | Inherited compatibility baseline, not an automatic long-term commitment |

`lab/papilab-bridge/` currently contains planning documentation only. The owned
Synara checkout now contains the dependency-light `@papilab/project-init`
package, but there are still no PapiLab-owned scientific domain contracts,
agent gateway, cloud client, sync implementation, or production build pipeline.

### Scaffold Use Rule

The inherited scaffold pass and owned-fork identity pass are complete. Continue
to sync the owned Synara fork deliberately, preserve the isolated PapiLab state
and updater boundary, and promote only the parts that prove useful behind a
PapiLab-owned project and agent contract. Do not restructure inherited packages
or add scientific truth to Synara state merely because the shell now carries
PapiLab identity.

### TypeScript Version Baseline

Use the current stable TypeScript release for new PapiLab-owned packages when
their selected dependencies support it. As of 2026-07-09, that means TypeScript
7.x, the native TypeScript compiler line announced by the TypeScript team on
2026-07-08
([official announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/),
inspected 2026-07-09).

The inherited Synara scaffold is pinned to TypeScript 5.7.3. Boot and verify it
without a compiler upgrade first. A later TypeScript 7 compatibility spike must
check the actual Effect language service, Electron, React, Vite, test, lint, and
build paths before changing the inherited baseline.

TypeScript 5.7 is therefore a scaffold compatibility fact, not a PapiLab product
commitment. TypeScript 7 is a target baseline for new PapiLab-owned code, not a
prerequisite for the first Synara health check. Record any durable exception in
`docs/development/typescript.md` or the relevant implementation document once
PapiLab-owned code exists.

## Application Architecture

PapiLab should be built as a desktop-first product with a cloud collaboration plane.

The local app must remain useful without network access. The cloud layer provides account identity, backup, cross-device access, project sharing, collaboration, background jobs, and web access.

The current lab scaffold has this upstream shape:

```text
desktop-app-forks/synara/
  apps/desktop
  apps/server
  apps/web
  packages/contracts
  packages/effect-acp
  packages/shared
```

That tree remains foreign source and should not become the PapiLab package map by
accident. Source-tracing notes and disposable adapter experiments may use
`lab/papilab-bridge/`. The first vertical-slice implementation belongs in the
permanent location selected from source evidence during the implementation
plan; do not treat the lab as its default code home.

Possible later PapiLab-owned package areas include:

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

Electron is the pragmatic first choice because PapiLab needs React, local files, SQLite, subprocesses, agent CLIs, and local background services. These are all easier to integrate in Electron than in a stricter native shell during the first product build.

The immediate validation question is whether the Synara-derived shell can host
a PapiLab-owned project mode without forcing scientific work into coding
projects, Git worktrees, provider threads, or engine-owned artifacts. If it
cannot, keep useful runtime components as references or donors and build a
smaller PapiLab-owned shell instead of deepening the fork.

Tauri is not rejected. It is deferred.

Tauri should be reconsidered if Electron becomes a proven blocker for memory use, binary size, security posture, or native integration. Rust can still be introduced behind stable TypeScript-facing interfaces before any full shell migration.

## Web

The scaffold's `apps/web` is a React/Vite local workbench UI used by the local
server and Electron app. It is not a scaffold for PapiLab's future cloud web
client.

Use React for the future cloud web app. Next.js remains a default candidate, but
no cloud web app exists yet and it is not part of the first local scaffold pass.
PapiLab's core product model should not depend on Next.js-specific server
behavior. The eventual web app should be a continuation client of the PapiLab
cloud/project model, not a separate product with separate semantics.

## Local Data

Use SQLite locally.

The inherited scaffold already uses SQLite for Synara app, session,
orchestration, and projection state. That database must not be relabeled as the
PapiLab scientific project database. PapiLab-owned project persistence has not
been designed or implemented.

PapiLab should distinguish:

- global app state, such as recent projects, local settings, device identity, and local caches
- per-project scientific state, such as papers, protocol records, evidence records, extraction records, manuscript state, agent runs, and sync metadata

The per-project database is the more important architectural object because projects must be portable and recoverable.

The inherited scaffold uses Effect SQL with SQLite through Bun. Do not replace
that layer merely to satisfy the target stack before the scaffold baseline is
known. For PapiLab-owned project persistence, evaluate Effect SQL, Drizzle,
Kysely, or a narrower owned layer after the first project-state contract exists.

## Cloud Data

Use Postgres as the cloud database.

Use Supabase as the initial default cloud platform candidate because it provides hosted Postgres, object storage, auth options, realtime primitives, row-level security, and local development tooling.

The architectural commitment is to Postgres and object storage, not to Supabase-specific behavior. PapiLab should avoid unnecessary dependence on Supabase-only features where standard Postgres, portable SQL, or provider-neutral object storage is sufficient.

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
- a PapiLab-owned sync layer if vendor tools do not fit the required project model

Convex is not selected as the primary database or local-first sync foundation. It may be evaluated for collaboration features or realtime cloud workflows, but the current stack direction requires portable local project state backed by SQLite.

PapiLab should maintain domain-level mutation and audit semantics so the product is not locked to one sync vendor.

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

PapiLab should use layered versioning.

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
runtime candidates. PapiLab does not yet have its own agent gateway, scientific
task contract, context receipt, run ledger, proposed-change lifecycle, or
accepted write-back path.

Current posture:

- Build the first PapiLab workflow on the owned OpenCode runtime through the
  existing verified Synara integration.
- Codex is the execution-safety and sandboxing reference.
- Evaluate Goose later as a broader local-agent engine through `goose acp` over
  stdio, behind the PapiLab gateway. Keep authenticated `goose serve` as a later
  process-separated option; do not use the removed `goosed` REST surface.
- Treat Goose permissions, sessions, recipes, and tool events as runtime inputs
  to normalize. They do not provide the PapiLab project boundary or canonical
  run ledger by themselves.

PapiLab should not commit to any agent's internal data model as the canonical project model.

Agents should act through PapiLab-owned tools and permission policies, especially for high-impact scientific changes.

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

They must not replace the PapiLab scientific kernel.

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
- an agent's internal session database as PapiLab's source of truth

## Validation Status And Remaining Unknowns

Completed historical experiments remain evidence, not the roadmap.

| Area | Proven | Not Yet Proven | Evidence Or Owner |
|---|---|---|---|
| Synara-derived application | Owned fork, build, isolated PapiLab identity and state, reviewed upstream process | Scientific-product fit, sustainable domain UI divergence, and long-term maintenance cost | Gate 1 and Gate 1.5 lab reports; ADR-0001 owns adoption |
| OpenCode-derived runtime | Owned build, Synara compatibility, project-root fidelity, transcript fidelity, and approval flow for a constrained action | PapiLab scientific tools, durable task behavior, recovery semantics, and justified core changes | Gate 1.5 report; ADR-0001 owns adoption |
| PapiLab project state | Product responsibilities and trust boundary are documented | Persistence, portable local record, recovery, and first real scientific object relationship | First vertical-slice plan |
| PapiLab agent boundary | Context, proposal, review, provenance, and permission responsibilities are documented | Actual contract, code placement, event mapping, and accepted write-back path | First vertical-slice plan; `agent-runtime.md` remains a future home |
| Goose | Source seams, ACP path, and safety risks inspected | Owned fork, adapter, isolation, and incremental value after the PapiLab gateway | Goose source-depth inspection |
| Cloud sync | Postgres, object storage, and local-first sync are proposed directions | Authority, offline behavior, conflicts, revocation, and recovery | Later roadmap and focused architecture work |

Gate 1 and Gate 1.5 are retained only as historical names for completed work.
Future product and implementation sequencing lives in
`../planning/product-roadmap.md` and the linked implementation plan.

## Current Stack Direction

The proposed and accepted-by-ADR foundation direction is:

```text
TypeScript
React
Electron
SQLite
Postgres
Supabase as initial cloud platform candidate
object storage
local-first sync under evaluation
owned OpenCode fork as the initial agent-runtime foundation
Codex safety reference
Goose later substrate/provider evaluation
Python via uv for scientific computation
selective Rust services later
ProseMirror/Tiptap-family editor
CRDTs only for collaborative text
Git for human-readable artifacts, not required sharing
```

Update this document when a technology role or its validation status changes.
The overall target stack remains proposed until the first PapiLab-owned local
project and agent boundaries work. Cloud and web choices remain later proposals
until their authority and sync risks are tested.
