# Technology Stack

Status: Proposed
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-08-28
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

The owned T3-derived checkout in the workspace sibling `../scient-desktop/`
(relative to the Scient repository root) is the maintained current
application. ADR-0005 records the selected foundation and completed cutover.
The retired Synara-derived source is historical evidence only. Inherited
package layouts, dependencies, state models, and provider models remain
implementation evidence, not automatically accepted Scient architecture.

## Accepted Foundation Target

[ADR-0005](decisions/ADR-0005-t3-derived-desktop-foundation.md) accepted a
fresh, literal-ancestry T3-derived application. The
[migration plan](../planning/t3-foundation-migration-plan.md) preserves the
proof-gated transition and cutover record. The public T3-derived repository is
now the released and supported Scient Desktop; the Synara-derived predecessor
is retired.

The application preserves literal ancestry from exact official T3 commit
`a2ca89aa10f13a2222e08afd98c66285121d5ba2`. The bounded identity and safety
envelope reviewed at `ae4c1aba522ea5b1aad94754b42f10a39f888574` was integrated
through then-candidate PR #1; D4 closeout reached then-candidate `main`
`bc22a67f4051965d13f35ab75cfa50464c5a65cd`. Those facts were historical gate
evidence, not release authority by themselves; later release and cutover gates
completed. Current implementation remains distinct from proposed scientific
platform architecture.

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
| Product language | TypeScript | Implemented current desktop foundation; future scientific-domain boundaries remain deliberate decisions |
| UI framework | React | Implemented current desktop foundation with Vite |
| Desktop shell | Electron | Implemented current desktop foundation |
| Local coordinator | Node.js WebSocket server with Effect-based typed contracts | Implemented current desktop foundation |
| Workspace tooling | pnpm workspaces, Turbo, Vite | Implemented current desktop tooling |
| Cloud web app | React, with Next.js as a later candidate | Not scaffolded |
| Local application state | SQLite for inherited app/session projections; future memory and project-state storage undecided | App SQLite implemented; memory architecture not yet designed |
| Cloud database | Postgres | Proposed; not scaffolded |
| Cloud platform | Supabase | Initial default candidate; not scaffolded |
| Large file storage | Object storage | Proposed; not scaffolded |
| Sync | Local-first project-state-to-cloud sync | Under evaluation; storage and sync engines not selected or scaffolded |
| Current application foundation | Standalone Scient-owned, literal-ancestry T3-derived source | Implemented, released, and maintained through reviewed upstream intake plus explicit Scient divergence |
| Historical predecessor | Synara-derived source | Retired private repository; evidence only, no new-work or release authority |
| External-agent layer | Current T3-derived provider contracts and adapters | Implemented host machinery; external agents remain distinct from the planned Scient agent |
| First-party agent | One owned Scient agent; refreshed native foundation still under evaluation between Pi, OpenCode, and any equivalently qualified candidate | ADR-0005 preserves the one-agent ownership boundary but does not select the refreshed baseline; Scient product/runtime not yet implemented |
| Historical agent source | Standalone Scient-owned, OpenCode-derived `scient-agent` repository | Incumbent source evidence and governance history; not an automatic future implementation baseline |
| Agent capability sources | Pi, OpenCode, Hermes, Codex, Goose, OpenHands SDK, Aider, and later qualified sources | Research, selective adaptation, or bounded-worker candidates; no worker selected |
| Executor safety reference | Codex | Evaluation/reference |
| Scientific runtime | Python via uv | Proposed |
| Native services | Rust selectively | Deferred until needed |
| Rich text editor | ProseMirror/Tiptap family | Candidate |
| Collaborative text | Yjs or equivalent CRDT layer | Candidate |
| Versioning | Domain history, snapshots, Git for artifacts | Proposed direction |

## Current Application State

The executable application is the owned T3-derived checkout in the workspace
sibling `../scient-desktop/`. Current source facts should be read from that
repository at an exact revision; on 2026-08-28 its `origin/main` was
`aa23f1d3b96f6904dcc1a114cc33415fa267315a`. The repository owns Electron,
React/Vite, Node WebSocket services, typed Effect contracts, SQLite
projections, provider adapters, browser/preview, files, terminals, Git, release
machinery, and current Scient-specific scientific packages.

Scient-specific mainline capabilities now include project initiation, Sources,
PDF reading, safe text editing, universal direct file opening, exact-file
freshness, rich chat diagrams/charts/math, interactive HTML, HTML-to-PDF,
LaTeX builds, generated-document artifacts, MATLAB analysis, and selected
scientific skills. Their repo-local implementation documentation is current
behavior authority. They do not by themselves define the future canonical
scientific project graph, manuscript model, memory, cloud mirror, or native
Scient agent.

The owned OpenCode-derived `scient-agent` repository remains historical
incumbent source evidence for the planned native Scient agent. Its refreshed
foundation still follows the separate Foundation Gate. The retired
Synara-derived desktop is evidence and rollback history only.

Current desktop toolchain requirements live in its root instructions and
tracked package metadata. Do not copy the retired Synara Node, pnpm, Electron,
or build assumptions into new work.

## Application Architecture

Scient should be built as a desktop-first product with a cloud collaboration plane.

The local app must remain useful without network access. The cloud layer provides account identity, backup, cross-device access, project sharing, collaboration, background jobs, and web access.

The current application has this inherited host shape:

```text
../scient-desktop/
  apps/desktop
  apps/server
  apps/web
  packages/contracts
  packages/effect-acp
  packages/shared
```

That tree is maintained T3-derived host code. It should not become the
scientific domain model by accident. Current Scient-specific implementations
belong in owned packages and `apps/*/src/scient` seams in the desktop
repository; research notes and source evidence remain in this repository.

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

This is a possible future decomposition to validate, not a required refactor.
Final package boundaries should emerge from the local project, agent gateway,
scientific workflow, and later sync pressure rather than from renaming T3
packages in place.

When both clients exist, the desktop and web apps should share domain types,
validation logic, UI primitives, editor components, and project-state views
where practical.

## Desktop

Electron is the implemented desktop shell.

Electron is the pragmatic first choice because Scient needs React, local files,
embedded structured storage, subprocesses, agent CLIs, and local background
services. These are all easier to integrate in Electron than in a stricter
native shell during the first product build. This shell choice does not select
the canonical project-storage technology.

ADR-0005 answers the host-selection question. The remaining constraint is
unchanged: scientific work must not be forced into coding projects, Git
worktrees, provider threads, or engine-owned artifacts merely because those
concepts exist in the host.

Tauri is not rejected. It is deferred.

Tauri should be reconsidered if Electron becomes a proven blocker for memory use, binary size, security posture, or native integration. Rust can still be introduced behind stable TypeScript-facing interfaces before any full shell migration.

## Web

The current `apps/web` is a React/Vite workbench UI used by the local
server and Electron app. It is not a scaffold for Scient's future cloud web
client.

Use React for the future cloud web app. Next.js remains a default candidate, but
no cloud web app exists yet and it is not part of the first local scaffold pass.
Scient's core product model should not depend on Next.js-specific server
behavior. The eventual web app should be a continuation client of the Scient
cloud/project model, not a separate product with separate semantics.

## Local Data

The current application uses SQLite for host app, session,
orchestration, and projection state. That database must not be relabeled as the
Scient scientific project database. Scient-owned project persistence has not
been selected, designed, or implemented. The future memory-architecture project
will decide the roles of conversations, user memory, project memory, raw
history, files, local application storage, and cloud storage before evaluating
their persistence technologies. Open questions remain in the draft
[Memory Architecture Discovery](../planning/memory-architecture-discovery.md).

Scient should distinguish:

- global app state, such as recent projects, local settings, device identity, and local caches
- project-owned scientific state, such as sources, protocol records, evidence records, extraction records, manuscript state, agent runs, and sync metadata

The relationship among project-owned scientific records, future memory, raw
history, and ordinary files remains an open product and architecture question.
Do not turn one candidate representation into architecture before that broader
memory discovery.

The application uses Effect SQL with SQLite. Do not replace
that layer merely to satisfy a candidate target stack. Whether any part of a
future memory architecture reuses it is explicitly undecided.

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

- Build the first agent-enabled Scient workflow through the **Scient agent**,
  the product's one owned first-party research agent, after a fresh
  implementation-time foundation comparison.
- Treat Scient as one agent product, codebase, runtime identity, configuration,
  authority, release, and update responsibility. Do not model it as a thin
  Scient shell over separately authoritative branded engines.
- Keep inherited foundation core, directly adapted source, and Scient-owned
  capabilities identifiable inside Scient's source where practical. This is a
  maintenance and provenance boundary, not a product-identity boundary.
- Preserve the inherited external-agent layer. External OpenCode remains a
  distinct external agent with its own binary or endpoint, configuration,
  credentials, sessions, and updates.
- Pi and OpenCode are the current native-foundation finalists; neither is
  selected for refreshed implementation.
- Hermes is a leading research-worker and capability-source candidate;
  OpenCode or Codex may be coding-worker candidates when they add distinct
  value; Goose, OpenHands, Aider, and future sources remain focused references
  or candidates.
- A specialist worker is optional and bounded. Scient owns the task, selected
  context, capabilities, final synthesis, provenance, proposal, review, and
  recovery. Worker sessions and memories are non-canonical.
- Over time, recurring essential capabilities should move into the native
  Scient agent when integration improves quality, privacy, offline use,
  reliability, coherence, or long-term ownership.
- The detailed evidence and selection proof live in the
  [2026-08-06 foundation investigation](../research/source-evaluations/scient-agent-foundation-and-capability-strategy-2026-08-06.md).

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

The ProseMirror/Tiptap family is the leading prototype candidate because it
supports structured editing, extensibility, citations, comments, and
collaboration through Yjs-style integrations. Plate and Lexical must be tested
against the same scientific manuscript fixture before selection.

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
| Retired Synara-derived application | Standalone owned source, historical build and migration evidence | No current product work; archive/rollback evidence only | Gate 1 and Gate 1.5 reports and superseded ADR-0001 |
| Current T3-derived application | Exact official ancestry, released desktop, current upstream-intake path, and multiple Scient-owned scientific feature seams | Long-term upstream cost, future scientific-project authority, cloud continuation, and platform-specific depth | Accepted ADR-0005, historical migration plan, current desktop source and operations docs |
| Scient source foundation | Historical owned OpenCode build, Synara compatibility, project-root fidelity, transcript fidelity, and approval flow for a constrained action; current Pi/OpenCode/Hermes/Goose/OpenHands/Codex source investigation | Fresh native-foundation selection, Scient identity and packaging, owned capabilities, isolated state, durable task behavior, worker need, and justified inherited-core changes | [2026-08-06 foundation investigation](../research/source-evaluations/scient-agent-foundation-and-capability-strategy-2026-08-06.md) and future Foundation Gate; no refreshed foundation selected |
| External agents | Nine inherited adapters and external OpenCode settings/adapter paths are present in source | Per-agent live compatibility, subscription/auth behavior, project-task certification, and migration protection | [Scient and external agents implementation plan](../planning/scient-and-external-agents-implementation-plan.md) |
| Scient project state and memory | Product responsibilities, high-level memory principles, approved non-Git recovery requirement, and trust boundary are documented | Memory scopes, canonical representation, conversation relationship, package seam, portability, recovery, cloud sync, and first real scientific object relationship | PRD, [Memory Architecture Discovery](../planning/memory-architecture-discovery.md), and future focused architecture work |
| Scient-agent and Scient-app boundary | Scient-agent identity plus context, proposal, review, provenance, and permission responsibilities are documented | Actual contract, code placement, event mapping, isolated Scient-agent state, and accepted write-back path | ADR-0005 preserves the ADR-0001 agent boundary; linked implementation plans; `agent-runtime.md` remains a future home |
| Specialist workers and capability sources | Pi, OpenCode, Hermes, Goose, OpenHands, Codex, and Aider roles inspected at different depths | Whether any worker is needed, its bounded contract, distribution, safety, update path, and which capabilities should become native | 2026-08-06 foundation investigation; zero selected workers |
| Cloud sync | Postgres, object storage, and local-first sync are proposed directions | Authority, offline behavior, conflicts, revocation, and recovery | Later roadmap and focused architecture work |

Gate 1 and Gate 1.5 are retained only as historical names for completed work.
Future product and implementation sequencing lives in
`../planning/product-roadmap.md` and the linked implementation plan.

## Current And Proposed Stack Direction

The stack below combines current implementation roles and still-proposed
scientific, cloud, and agent choices. The T3-derived desktop foundation is
current; that does not make every future technology below accepted.

```text
TypeScript
React
Electron
SQLite for inherited app state; future memory storage undecided
Postgres
Supabase as initial cloud platform candidate
object storage
local-first sync under evaluation
one owned Scient first-party agent; refreshed foundation unselected
current T3-derived adapters for independently connected external agents
Pi/OpenCode native-foundation finalists
Hermes/OpenCode/Codex possible bounded workers
Codex/Goose/OpenHands/Aider capability and architecture references
Python via uv for scientific computation
selective Rust services later
ProseMirror/Tiptap-family editor
CRDTs only for collaborative text
Git for human-readable artifacts, not required sharing
```

The external-agent line describes host delivery only. It does not select the
native Scient agent foundation or make external-agent sessions canonical
scientific state.

Update this document when a technology role, foundation status, or validation
state changes. The overall target stack remains proposed until the first
Scient-owned local project and agent boundaries work. Cloud and web choices
remain later proposals until their authority and sync risks are tested.
