# Technology Stack

Status: Proposed
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-07-18
Purpose: Records Scient's current technology stack direction and open implementation decisions.
Doc type: Architecture direction

This document records the current technology stack direction for Scient and
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

The owned Synara checkout in the workspace sibling `../scient-desktop/`
(relative to the Scient repository root) is the maintained application
foundation. Its inherited package layout, dependencies, state model, and
provider model remain implementation evidence, not automatically accepted
Scient architecture.

## Product Constraints

Scient is a local-first, cloud-mirrored scientific workspace. Local work must remain usable offline, while cloud mirroring supports backup, cross-device access, sharing, and collaboration.

The stack must support:

- a serious desktop app
- offline-first project work
- cloud-backed sharing and collaboration
- versioned and inspectable research artifacts
- agent execution inside the real project workspace
- source-grounded scientific records
- clear human review of high-impact changes

The core architectural rule is:

> Scient owns scientific truth. Agents and infrastructure serve that truth.

`../product/scient-product-identity.md` accepts ScientFactory as the company
and Scient as both app and native-agent name. Technical text distinguishes the
Scient app from the planned Scient agent where needed.

## Stack Summary

| Layer | Current Direction | Status |
|---|---|---|
| Product language | TypeScript | Proposed; inherited scaffold currently uses TypeScript 5.7 |
| UI framework | React | Proposed; inherited scaffold uses React with Vite |
| Desktop shell | Electron | Proposed first choice; present in inherited scaffold |
| Local coordinator | Bun/Node.js WebSocket server | Inherited scaffold candidate; not yet a Scient decision |
| Workspace tooling | Bun workspaces, Turborepo, Vite | Inherited scaffold candidate; not yet a Scient decision |
| Cloud web app | React, with Next.js as a later candidate | Not scaffolded |
| Local structured state | SQLite for inherited app/session projections; canonical Scient project store undecided | App SQLite implemented; project persistence under later review |
| Cloud database | Postgres | Proposed; not scaffolded |
| Cloud platform | Supabase | Initial default candidate; not scaffolded |
| Large file storage | Object storage | Proposed; not scaffolded |
| Sync | Local-first project-state-to-cloud sync | Under evaluation; storage and sync engines not selected or scaffolded |
| Application foundation | Standalone Scient-owned, Synara-derived source | Accepted initial foundation through ADR-0001; ownership authority through ADR-0002; scientific product fit remains unproven |
| External-agent layer | Synara provider contracts and service | Inherited machinery for external agents; preservation required, project-task compatibility not yet certified |
| First-party agent | Scient, derived from standalone Scient-owned, OpenCode-derived source | Accepted identity and source foundation through ADR-0001; ownership authority through ADR-0002; Scient product/runtime not yet implemented |
| Later Scient source | Goose | Source-depth candidate for capabilities and architecture lessons; deferred until after the first Scient gateway |
| Executor safety reference | Codex | Evaluation/reference |
| Scientific runtime | Python via uv | Proposed |
| Native services | Rust selectively | Deferred until needed |
| Rich text editor | ProseMirror/Tiptap family | Candidate |
| Collaborative text | Yjs or equivalent CRDT layer | Candidate |
| Versioning | Domain history, snapshots, Git for artifacts | Proposed direction |

## Actual Scaffold State

As of 2026-07-18, the executable application scaffold is the owned Synara
checkout in the workspace sibling `../scient-desktop/`. Its Scient identity and project-init
lane passed hosted CI at `2ecdbb5e` and was merged as `50294e64`. The subsequent
application-foundation follow-up passed hosted CI at `f7760e97` and advanced
the owned application baseline. A later maintained sync through official Synara
v0.5.5 passed hosted CI at `d4b10c27` and advanced owned `main` to
`fd37cdcd`. The Scient rename then passed hosted CI at `179fa01e` and merged to
owned `main` as `d9d8992a`, based on tested upstream `9be46c3c`. Subsequent
reviewed UI and project-init status follow-ups advanced maintained `main` to
`2ecfbe19`. Standalone ownership and upstream-maintenance follow-ups then
advanced maintained `main` to `57e6b2cd`; exact provenance is recorded in
`lab/external/sources.lock.md`.
The owned OpenCode-derived repository—the current source foundation for the Scient
agent—is in the workspace sibling `../scient-agent/` on `dev` at `bc125cbc`,
after a reviewed sync through source version 1.18.3 at official upstream
`69a80663` and the standalone upstream-maintenance rollout. Historical
Gate 1 and Gate 1.5 commits, tags, and ignored runtime evidence remain
historical records; they are not the active Scient implementation baseline.

The scaffold currently provides:

| Scaffold area | Inspected reality | Scient boundary |
|---|---|---|
| Desktop | Electron app under `apps/desktop` | Candidate shell machinery, not accepted Scient product architecture |
| Local UI | React 19 and Vite under `apps/web` | Local workbench UI; not the future cloud web client |
| Local coordinator | Bun during development, Node-compatible build, WebSocket RPC, provider routing, terminal/filesystem/Git/browser services under `apps/server` | Runtime machinery Scient may wrap or borrow; not the scientific project kernel |
| Local state | SQLite through Effect SQL | Synara session/orchestration projection state; not canonical Scient scientific state |
| Shared contracts | Effect schemas in `packages/contracts` plus runtime helpers in `packages/shared` | Candidate provider/runtime boundary; Scient domain contracts do not exist yet |
| Agent integration | Existing provider adapters, including external OpenCode, plus compatibility evidence from the owned OpenCode build | Reusable external-agent machinery; Scient, its isolated identity, and the Scient gateway do not exist yet |
| Tooling | Bun workspaces, Turborepo, Vite, Vitest, TypeScript 5.7 | Inherited compatibility baseline, not an automatic long-term commitment |

`lab/scient-bridge/` currently contains planning documentation only. The owned
desktop checkout now contains the dependency-light `@scientfactory/project-init`
package, but there are still no Scient-owned scientific domain contracts,
Scient implementation, agent gateway, cloud client, sync implementation, or
production build pipeline.

### Scaffold Use Rule

The inherited scaffold pass and owned-source identity pass are complete. Review
official Synara changes deliberately through the upstream-intake process, preserve the isolated Scient state
and updater boundary, and promote only the parts that prove useful behind a
Scient-owned project and agent contract. Do not restructure inherited packages
or add scientific truth to Synara state merely because the shell now carries
Scient identity.

### TypeScript Version Baseline

Use the current stable TypeScript release for new Scient-owned packages when
their selected dependencies support it. As of 2026-07-09, that means TypeScript
7.x, the native TypeScript compiler line announced by the TypeScript team on
2026-07-08
([official announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/),
inspected 2026-07-09).

The inherited Synara scaffold is pinned to TypeScript 5.7.3. Boot and verify it
without a compiler upgrade first. A later TypeScript 7 compatibility spike must
check the actual Effect language service, Electron, React, Vite, test, lint, and
build paths before changing the inherited baseline.

TypeScript 5.7 is therefore a scaffold compatibility fact, not a Scient product
commitment. TypeScript 7 is a target baseline for new Scient-owned code, not a
prerequisite for the first Synara health check. Record any durable exception in
`docs/development/typescript.md` or the relevant implementation document once
Scient-owned code exists.

## Application Architecture

Scient should be built as a desktop-first product with a cloud collaboration plane.

The local app must remain useful without network access. The cloud layer provides account identity, backup, cross-device access, project sharing, collaboration, background jobs, and web access.

The current lab scaffold has this upstream shape:

```text
../scient-desktop/
  apps/desktop
  apps/server
  apps/web
  packages/contracts
  packages/effect-acp
  packages/shared
```

That tree remains foreign source and should not become the Scient package map by
accident. Source-tracing notes and disposable adapter experiments may use
`lab/scient-bridge/`. The first vertical-slice implementation belongs in a
permanent location to be selected from source evidence and the deferred
persistence review; do not treat the lab as its default code home.

Possible later Scient-owned package areas include:

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

Electron is the pragmatic first choice because Scient needs React, local files,
embedded structured storage, subprocesses, agent CLIs, and local background
services. These are all easier to integrate in Electron than in a stricter
native shell during the first product build. This shell choice does not select
the canonical project-storage technology.

The immediate validation question is whether the Synara-derived shell can host
a Scient-owned project mode without forcing scientific work into coding
projects, Git worktrees, provider threads, or engine-owned artifacts. If it
cannot, keep useful runtime components as references or donors and build a
smaller Scient-owned shell instead of deepening the fork.

Tauri is not rejected. It is deferred.

Tauri should be reconsidered if Electron becomes a proven blocker for memory use, binary size, security posture, or native integration. Rust can still be introduced behind stable TypeScript-facing interfaces before any full shell migration.

## Web

The scaffold's `apps/web` is a React/Vite local workbench UI used by the local
server and Electron app. It is not a scaffold for Scient's future cloud web
client.

Use React for the future cloud web app. Next.js remains a default candidate, but
no cloud web app exists yet and it is not part of the first local scaffold pass.
Scient's core product model should not depend on Next.js-specific server
behavior. The eventual web app should be a continuation client of the Scient
cloud/project model, not a separate product with separate semantics.

## Local Data

Use the inherited SQLite boundary for current global app, session,
orchestration, and projection state. Do not infer from that implementation that
SQLite is selected for canonical Scient project records.

The inherited scaffold already uses SQLite for Synara app, session,
orchestration, and projection state. That database must not be relabeled as the
Scient scientific project database. Scient-owned project persistence has not
been selected, designed, or implemented. The open requirements, candidates,
risks, questions, and evidence gates live in the
[Scient Project Persistence Decision Brief](scient-project-persistence-decision-brief.md).

Scient should distinguish:

- global app state, such as recent projects, local settings, device identity, and local caches
- project-owned scientific state, such as sources, protocol records, evidence records, extraction records, manuscript state, agent runs, and sync metadata

The project-owned scientific record boundary is the more important
architectural object because projects must be portable and recoverable. Its
representation may be a project-local database, append-only structured files, a
canonical-file/derived-index hybrid, an app-local store with explicit portable
bundles, or another reviewed model.

The inherited scaffold uses Effect SQL with SQLite through Bun. Do not replace
that layer merely to satisfy a candidate target stack. If project persistence
later selects SQLite, evaluate Effect SQL, Drizzle, Kysely, or a narrower owned
layer only after the project-state contract and persistence evidence are
reviewed.

## Cloud Data

Use Postgres as the cloud database.

Use Supabase as the initial default cloud platform candidate because it provides hosted Postgres, object storage, auth options, realtime primitives, row-level security, and local development tooling.

The architectural commitment is to Postgres and object storage, not to Supabase-specific behavior. Scient should avoid unnecessary dependence on Supabase-only features where standard Postgres, portable SQL, or provider-neutral object storage is sufficient.

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

The product direction requires local-first sync between project-owned state and
the future cloud collaboration plane. The local representation, cloud authority
model, and exact sync engine are not selected.

The exact sync engine is not yet selected.

Current candidates:

- PowerSync if a compatible SQLite-to-Postgres topology is proven
- Electric for Postgres-backed read sync and live web/cloud views
- a Scient-owned sync layer if vendor tools do not fit the required project model

Convex is not selected as the primary database or local-first sync foundation.
It may be evaluated for collaboration features or realtime cloud workflows, but
no candidate may override the requirements for researcher-owned, portable,
recoverable local project state.

Scient should maintain domain-level mutation and audit semantics so the product is not locked to one sync vendor.

## Collaboration

Use an explicit structured-state synchronization protocol for structured
scientific state once the canonical local representation and cloud authority
model are accepted. Do not assume file-level sync, database sync, or one vendor
before that decision.

Use CRDTs only for document-like collaborative surfaces where simultaneous text editing matters.

Good CRDT candidates:

- notes
- comments
- protocol text
- manuscript sections
- figure annotations

Do not use CRDTs as the whole application database.

## Versioning

Scient should use layered versioning.

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
runtime candidates. Scient does not yet have its own agent gateway, scientific
task contract, context receipt, run ledger, proposed-change lifecycle, or
accepted write-back path.

Current posture:

- Build the first Scient workflow through the **Scient agent**, the product's
  first-party research agent derived from the owned OpenCode source foundation.
- Treat Scient as one agent product, codebase, runtime identity, configuration,
  release, and update channel. Do not model it as a Scient shell that launches
  a separately identified OpenCode engine.
- Keep inherited OpenCode core and Scient-owned capabilities and integrations
  identifiable inside Scient's source where practical. This is a maintenance
  boundary for selective upstream updates, not a product or process boundary.
- Preserve the inherited external-agent layer. External OpenCode remains a
  distinct external agent with its own binary or endpoint, configuration,
  credentials, sessions, and updates.
- Codex is the execution-safety and sandboxing reference.
- Evaluate Goose later as a source of capabilities and architecture lessons for
  Scient. ACP may remain useful for a bounded comparison or for a future
  separately offered external Goose agent, but Scient must not become a shell that
  silently switches between branded engines.
- Treat any Goose permissions, sessions, recipes, and tool events as research or
  external-runtime inputs to normalize. They do not provide the Scient project
  boundary or canonical run ledger by themselves.

Scient should not commit to any agent's internal data model as the canonical project model.

Agents should act through Scient-owned tools and permission policies, especially for high-impact scientific changes.

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

They must not replace the Scient scientific kernel.

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
- an agent's internal session database as Scient's source of truth

## Validation Status And Remaining Unknowns

Completed historical experiments remain evidence, not the roadmap.

| Area | Proven | Not Yet Proven | Evidence Or Owner |
|---|---|---|---|
| Synara-derived application | Standalone owned source, build, isolated Scient identity and state, reviewed upstream process | Scientific-product fit, sustainable domain UI divergence, and long-term maintenance cost | Gate 1 and Gate 1.5 lab reports; ADR-0001 owns adoption; ADR-0002 owns repository authority |
| Scient source foundation | Owned OpenCode build, Synara compatibility, project-root fidelity, transcript fidelity, and approval flow for a constrained action | Scient identity and packaging, owned capabilities, isolated Scient state, durable task behavior, and justified inherited-core changes | Gate 1.5 report proves the source baseline; ADR-0001 owns Scient adoption |
| External agents | Nine inherited adapters and external OpenCode settings/adapter paths are present in source | Per-agent live compatibility, subscription/auth behavior, project-task certification, and migration protection | [Scient and external agents implementation plan](../planning/scient-and-external-agents-implementation-plan.md) |
| Scient project state | Product responsibilities, approved non-Git recovery requirement, and trust boundary are documented | Canonical representation, package seam, reliability, portability, performance, backup, export, sync, and first real scientific object relationship | [Persistence decision brief](scient-project-persistence-decision-brief.md) and first vertical-slice plan |
| Scient-agent and Scient-app boundary | Scient-agent identity plus context, proposal, review, provenance, and permission responsibilities are documented | Actual contract, code placement, event mapping, isolated Scient-agent state, and accepted write-back path | ADR-0001 and linked implementation plans; `agent-runtime.md` remains a future home |
| Goose | Source seams, ACP path, and safety risks inspected | Incremental capabilities or architecture lessons for Scient; any future external Goose path is a separate decision | Goose source-depth inspection |
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
SQLite for inherited app state; canonical project persistence undecided
Postgres
Supabase as initial cloud platform candidate
object storage
local-first sync under evaluation
Scient as the owned OpenCode-derived first-party agent
inherited Synara adapters for independently connected external agents
Codex safety reference
Goose later capability and architecture source for Scient
Python via uv for scientific computation
selective Rust services later
ProseMirror/Tiptap-family editor
CRDTs only for collaborative text
Git for human-readable artifacts, not required sharing
```

Update this document when a technology role or its validation status changes.
The overall target stack remains proposed until the first Scient-owned local
project and agent boundaries work. Cloud and web choices remain later proposals
until their authority and sync risks are tested.
