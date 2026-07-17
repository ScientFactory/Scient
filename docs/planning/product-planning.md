# Product Planning

Status: Draft
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Tracks current product planning after the accepted PRD, including candidate features, open product questions, and cross-document handoffs.
Doc type: Planning note

## Document Rules

This file is not product truth. The accepted product direction lives in
`docs/product/PRD.md`; evolving product principles live in the draft
`docs/product/product-philosophy.md`.

Use this file to plan what may become product work later: candidate capabilities, unresolved product questions, feature-level tradeoffs, and handoffs to architecture, design, quality, research, or implementation docs. Active product sequencing lives in `product-roadmap.md`.

Do not duplicate PRD prose here. If a requirement is already accepted, link to the PRD instead of restating it. If a planning item becomes accepted product truth, promote the stable wording into the PRD and leave only a short trace here if useful.

Do not use this file for implementation architecture, package boundaries, runtime choices, parser choices, sync-engine decisions, database schemas, source-code tasks, or test plans. Move those to the owning architecture, development, or quality document when they become real decisions.

Raw or unprocessed ideas belong in `idea-inbox.md`. Move them here only after
they have been evaluated enough to become a candidate feature or open product
question.

## Current Planning Role

The PRD is now accepted as the product truth for Scient's identity, principles, workspace responsibilities, major capability areas, non-goals, readiness criteria, and open product questions.

This file now has four jobs:

1. Preserve candidate capabilities and questions that may affect the active roadmap.
2. Preserve feature candidates and deferred ideas without making them accepted requirements.
3. Capture product questions that still need decisions.
4. Route architecture, design, quality, and research follow-ups to the right documents.

## Planning Rules

Evaluate product candidates against these questions:

1. What research work does this help complete?
2. Which durable project material, record, relationship, or workspace responsibility does it create, inspect, edit, connect, review, or recover?
3. Does it strengthen the connected project record?
4. Can the researcher inspect, edit, correct, continue, and recover the work manually?
5. Can an agent help without hiding the work in chat?
6. Does it improve evidence, analysis, writing, collaboration, memory, provenance, review, portability, or recovery?
7. Does it belong in product planning, roadmap, architecture, design, quality, research, or implementation?

Keep product centrality separate from validation timing.

Product centrality values:

- `Core` - central to Scient's product identity.
- `Important` - important to a strong product but not defining for the first coherent product shape.
- `Later` - likely valuable after foundational workflows are proven.
- `Idea` - captured for later thinking.
- `Rejected for now` - intentionally outside current product direction.

Validation timing values:

- `Foundation` - needed before a coherent product scenario can work.
- `Early validation` - candidate for an early coherence test.
- `Early expansion` - likely shortly after the first coherent scenario.
- `Later` - useful later, not needed to prove the first shape.
- `Deferred` - deliberately postponed or blocked by another decision.
- `Promoted to PRD` - accepted product truth now lives in `docs/product/PRD.md`.

Mobile role values:

- `None first` - not part of the first product surface.
- `Read/review` - useful for reading, status, or inspection.
- `Capture` - useful for quick notes, source capture, or project intake.
- `Approval` - useful for approvals, rejections, and lightweight review.
- `Light edit` - safe for small edits or comments.
- `Desktop first` - too complex or risky for early mobile use.

## Current Roadmap

The active product sequence now lives in
[`product-roadmap.md`](product-roadmap.md). Its current slice combines a local
project, manual source capture, bounded agent work, visible context, a
reviewable proposal, a researcher decision, reopening, and recovery.

This file retains the compact capability inventory and unresolved product
questions. It does not duplicate roadmap sequencing or implementation
architecture.

## Feature Inventory

This is the active feature inventory. It should stay compact. Add detail only when it clarifies product decisions that are not already accepted in the PRD.

| Product area | Candidate capabilities | Centrality | Validation timing | Mobile role | Notes and handoffs |
|---|---|---|---|---|---|
| Project and workspace | Local project, stable project identity, local files, project home, project-wide search, object-aware quick actions, readable project status. | Core | Foundation | Read/review later | Architecture handoff: `docs/architecture/project-format.md`. |
| Project direction, protocol, notes, and decisions | Flexible project direction, protocol fields, guided bootstrap, sample project, notes linked to project objects, decision log. | Core | Early validation | Capture and approval later | Keep flexible; do not force a rigid `ResearchQuestion` object model into product truth. |
| Source discovery, import, and reading | Database/API connectors, real project library, duplicate-safe source identity, metadata repair, reference-manager import/export, PDF/document parsing, reader and annotations. | Core | Early validation | Read/review later | Architecture handoffs: project format, source parsing, external adapters. |
| Screening, extraction, and evidence | Screening decisions, evidence records, extraction schemas, extraction tables, claim links, quality/risk judgments, PRISMA-style accounting where needed, study detail backlinks. | Core | Early validation to early expansion | Approval later | Depth depends on first workflow; do not become an enterprise review platform first. |
| Evidence-grounded synthesis | Ask from project evidence, cited answers, gap/conflict/uncertainty flags, answer-to-note/evidence/draft capture. | Important | Early expansion | Read/review later | Architecture handoff: retrieval and evidence context should not become canonical state. |
| Manuscript, citations, and publishing | Section/full-draft writing, evidence rail, citation diagnostics, evidence-linked vs auxiliary citations, metadata, journal adaptation, import/export/reconciliation, publication artifacts. | Core | Early validation to early expansion | Read/review and light edit later | Design handoff: serious editor UX. Architecture handoff: citation/export model. |
| Data, code, analysis, figures, and artifacts | Script or notebook-compatible work, approved execution, run records, datasets, outputs, stale-output detection, tables, figures, visual planning, artifact manager. | Core | Early validation to early expansion | Desktop first; review later | Architecture handoffs: execution, artifacts, reproducibility, project format. |
| Agent delegation and safe automation | Object-scoped tasks, context receipts, project-aware tools, proposed artifacts, task queue, durable runs, approvals, retries, cancellation, recovery. | Core | Foundation to early validation | Approval later | Architecture handoffs: `docs/architecture/agent-runtime.md` and `docs/architecture/security-and-permissions.md`. |
| Model access and routing | Provider-connected subscriptions, bring-your-own API keys, Scient-managed access, manual model choice, and later task-aware routing. | Core | Foundation to early expansion | None first | Sequencing and commercial options: `model-access-and-routing-evolution.md`. Candidate portfolio: `../research/source-evaluations/model-portfolio-and-provider-routing.md`. |
| Scientific skills | Built-in bounded skills for evidence extraction, drafting, citation checking, data analysis, figure creation, method guidance, journal adaptation, project mentoring. | Important | Early expansion | Approval later | Start with a tiny skill set; defer marketplace/registry mechanics. |
| Project memory | Inspectable memory, source/authority/confidence/freshness metadata, pin/archive/forget, conflict/staleness handling, project continuity summaries. | Core | Foundation to early expansion | Capture and review later | Architecture handoff: memory may need its own doc after agent runtime pressure clarifies boundaries. |
| Identity, sharing, collaboration, and mobile | Account/device identity, roles, permissions, invitations, shared review, comments, assignments, attribution, cloud mirror, sync/conflict states, mobile continuation. | Core | Design early, implement in phases | Read/review/capture/approval | Architecture handoffs: collaboration model, local-first sync, security. |
| Provenance, versioning, and recovery | Event history, source/evidence/citation/action provenance, diffs, checkpoints, snapshots, rollback, failed-run recovery, optional Git-like workflows. | Core | Foundation | Approval later | Normal users should not need Git. Architecture and quality handoffs required. |
| External interoperability and open science | Reference managers, citation formats, scholarly databases, document formats, repositories, drives, code/data tools, archives, deposit records. | Important | Early where it unblocks core workflows | Read/review later | Name specific targets in roadmap/architecture only when compatibility is the requirement. |
| Deferred adjacent-product depth | Full reference manager, full notebook, full ELN, full enterprise review platform, full statistics package, full workflow platform, full repository, complete journal submission, full mobile parity. | Later or rejected for now | Deferred | None first | Keep compatible paths, not first-product ownership. |

## Open Product Questions

The PRD intentionally leaves these open. Resolve them in the right document when a decision becomes necessary.

| Question | Why it matters | Likely owner |
|---|---|---|
| Which source connector or import path is first? | Source intake must be real enough to prove evidence and citation workflows. | Product planning plus architecture. |
| Which citation import/export/rendering paths are required first? | Citation quality is core infrastructure, but targets should not sprawl. | Product planning plus manuscript/citation architecture. |
| What parser strategy supports source-region provenance without owning parser output as the product model? | Evidence traceability depends on parsing, but parser data should not define Scient's canonical model. | Architecture and research. |
| What is the first data/code execution path? | Analysis continuity is core, but execution boundaries affect safety and product complexity. | Architecture and security. |
| How should Scient-managed model access be priced? | Subscription, included usage, credits, pay-as-you-go, or a hybrid create different user and cost risks. | `model-access-and-routing-evolution.md`. |
| Which high-impact actions require approval first? | Agentic work needs trust without blocking all useful automation. | Product planning plus security/agent architecture. |
| What cloud mirroring and collaboration semantics come first? | Local-first ownership, backup, sharing, conflicts, revocation, and restore must be coherent. | Collaboration, sync, and security architecture. |
| What mobile actions are allowed first? | Mobile should continue project work without becoming a second source of truth. | Product planning and design. |
| Which sensitive data classes are supported, unsupported, or institution-gated? | Security posture must be explicit before real sensitive projects are encouraged. | Security architecture and product planning. |
| How should cross-project memory or organization-level methods work, if at all? | Useful later, but dangerous before project-level memory is trustworthy. | Product planning and future architecture. |

## Handoffs

Use this section to route work out of product planning. Do not let this file become an architecture, design, quality, or research backlog.

| Handoff area | Destination | Product planning input |
|---|---|---|
| Project format | `docs/architecture/project-format.md` | Durable project records, local files, artifacts, source/evidence/citation/analysis relationships, export/deposit records. |
| Agent runtime | `docs/architecture/agent-runtime.md` | Object-scoped tasks, context receipts, project-aware tools, proposed artifacts, durable runs, retries, checkpoints, recovery. |
| Security and permissions | `docs/architecture/security-and-permissions.md` | High-impact action review, permission scope, unknown-data handling, local execution, imported-file trust, sensitive data classes. |
| Collaboration model | `docs/architecture/collaboration-model.md` | Roles, membership, invitations, attribution, shared review, comments, assignments, conflict states. |
| Local-first sync | `docs/architecture/local-first-sync.md` | Local ownership, cloud mirror, device identity, offline behavior, restore, revocation, conflict semantics. |
| Product design | `docs/design/product-design-principles.md` | Project home, workspace areas, object-aware actions, context receipts, review surfaces, mobile continuation. |
| Quality | `docs/quality/testing-philosophy.md` and future quality docs | Evaluation lanes for parsing, retrieval, extraction, citations, draft verification, code execution, stale-output detection, agent recovery, import/export fidelity. |
| Source research | `docs/research/source-evaluations/` and `docs/research/spike-reports/` | External tools as evidence, not product truth or architecture decisions. |

## When To Create New Planning Docs

The first coherent product slice is now owned by `product-roadmap.md`.

Create narrower planning docs only when a topic becomes too large for this file and is still not ready for product truth, architecture direction, design direction, quality doctrine, or implementation planning.

Do not create duplicate idea files. Capture raw ideas in `idea-inbox.md`; after
triage, remove the inbox entry and add or update one compact row here only when
the idea belongs in product planning.
