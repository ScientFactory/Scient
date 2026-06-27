# Technology Stack

Status: Proposed
Owner: Yaacov
Last updated: 2026-06-27
Purpose: Records LitRev's current technology stack direction and open implementation decisions.
Doc type: Architecture direction

This document records the current technology stack direction for LitRev.

It is intentionally limited to stack decisions: what we plan to use, what role each technology plays, what remains under evaluation, and what is explicitly deferred. Detailed designs for sync, security, project format, and agent runtime should live in separate architecture documents.

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
| Product language | TypeScript | Proposed |
| UI framework | React | Proposed |
| Desktop shell | Electron | Proposed first choice |
| Web app | React, likely Next.js | Proposed |
| Local database | SQLite | Proposed |
| Cloud database | Postgres | Proposed |
| Cloud platform | Supabase | Initial default candidate |
| Large file storage | Object storage | Proposed |
| Sync | Local-first SQLite-to-cloud sync | Under evaluation |
| Agent executor | OpenCode | First spike |
| Agent alternatives | Goose, Codex | Evaluation/reference |
| Scientific runtime | Python via uv | Proposed |
| Native services | Rust selectively | Deferred until needed |
| Rich text editor | ProseMirror/Tiptap family | Candidate |
| Collaborative text | Yjs or equivalent CRDT layer | Candidate |
| Versioning | Domain history, snapshots, Git for artifacts | Proposed direction |

## Application Architecture

LitRev should be built as a desktop-first product with a cloud collaboration plane.

The local app must remain useful without network access. The cloud layer provides account identity, backup, cross-device access, project sharing, collaboration, background jobs, and web access.

Recommended package shape:

```text
apps/desktop
apps/web
packages/ui
packages/domain
packages/editor
packages/sync
packages/agent
packages/science
```

The desktop and web apps should share domain types, validation logic, UI primitives, editor components, and project-state views where practical.

## Desktop

Use Electron for the first desktop app.

Electron is the pragmatic first choice because LitRev needs React, local files, SQLite, subprocesses, agent CLIs, and local background services. These are all easier to integrate in Electron than in a stricter native shell during the first product build.

Tauri is not rejected. It is deferred.

Tauri should be reconsidered if Electron becomes a proven blocker for memory use, binary size, security posture, or native integration. Rust can still be introduced behind stable TypeScript-facing interfaces before any full shell migration.

## Web

Use React for the cloud web app.

Next.js is the default candidate for the web app, but LitRev's core product model should not depend on Next.js-specific server behavior. The web app should be another client of the LitRev cloud/project model, not a separate product with separate semantics.

## Local Data

Use SQLite locally.

LitRev should distinguish:

- global app state, such as recent projects, local settings, device identity, and local caches
- per-project scientific state, such as papers, protocol records, evidence records, extraction records, manuscript state, agent runs, and sync metadata

The per-project database is the more important architectural object because projects must be portable and recoverable.

Use a SQL-friendly TypeScript data layer such as Drizzle or Kysely unless a later proof shows a better fit.

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

Initial posture:

- OpenCode is the first executor spike.
- Codex is the execution-safety and sandboxing reference.
- Goose is an evaluation candidate for broader local-agent, desktop, API, and MCP architecture.

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

## Initial Validation Slice

The stack should be validated through a narrow vertical slice:

- Electron desktop app
- local SQLite project state
- cloud Postgres mirror
- one imported PDF
- one protocol or notes surface
- one paper/evidence record
- one agent task through OpenCode
- one cloud web view of mirrored project state

This slice is successful only if local work remains usable offline and later syncs correctly.

## Current Recommendation

Build LitRev with:

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
Goose evaluation candidate
Python via uv for scientific computation
selective Rust services later
ProseMirror/Tiptap-family editor
CRDTs only for collaborative text
Git for human-readable artifacts, not required sharing
```

This stack should be treated as a proposal until the first local-first desktop/cloud/agent vertical slice proves or invalidates it.
