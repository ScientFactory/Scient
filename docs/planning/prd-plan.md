# PRD Plan

Status: Draft
Owner: Yaacov
Last updated: 2026-06-27
Purpose: Plans the LitRev PRD by organizing candidate product sections, product decisions, and feature inventory before promotion into canonical product truth.
Doc type: Planning note

## Document Rules

This is the working plan for the LitRev PRD, not canonical product truth.

Use this file to shape PRD sections, collect feature ideas, group related product work, compare priorities, defer uncertain items, and decide what is ready to promote.

Items become product truth only when they are moved into `docs/product/PRD.md` or another accepted product document.

When adding or changing features:

- keep related features grouped by category
- avoid duplicate entries by updating the existing feature instead of creating a second name for the same product object
- preserve rough ideas instead of deleting them too early
- mark product centrality and validation timing separately
- decide the mobile role explicitly when possible
- avoid describing unbuilt behavior as implemented

## Promotion Workflow

Use this plan as a staging area:

1. Capture rough product ideas in the feature inventory.
2. Group related ideas into a future PRD section.
3. Clarify the researcher workflow need, agent role, manual role, current-step decision, mobile role, and open questions.
4. Consolidate overlapping entries into one user-facing product capability when they describe the same workflow.
5. Replace implementation, vendor, and OSS-source names with product capability language unless external compatibility is itself the requirement.
6. Decide what wording is stable enough for the PRD.
7. Promote only the stable section into `docs/product/PRD.md`.
8. Mark promoted items here as `Promoted to PRD` or leave a note pointing to the PRD section.

Do not promote a feature just because it is exciting. Promote it when it is clear enough to guide product, design, architecture, and implementation decisions.

## How To Decide What To Build

LitRev should prioritize features by the research work they enable, not by whether a feature exists in another tool.

The research project is the organizing unit. Roles are useful lenses for understanding real needs, but LitRev should not fragment into separate products for separate personas.

When evaluating a feature, ask:

1. Which research role needs this?
2. What project work are they trying to complete?
3. Which durable project material, record, relationship, or workspace responsibility does this create, inspect, edit, connect, review, or recover?
4. Does it strengthen the connected project record?
5. Can the researcher inspect, edit, and continue the work manually?
6. Can the agent help without hiding the work in chat?
7. Does it improve evidence, analysis, writing, collaboration, memory, provenance, review, or recovery?
8. Does it belong in the promoted PRD, an early validation candidate, later scope, or deferred scope?

A feature should move closer to the PRD when it supports real research work and strengthens the durable project workspace.

A feature should stay deferred when it mainly copies another product, adds convenience without improving the project record, depends on unclear user needs, or creates complexity without improving research continuity, trust, or output quality.

### Research Roles And Work They Need To Do

| Role | Research work they need to do | Product implications |
|---|---|---|
| PhD student or graduate researcher | Turn early ideas into questions, read literature, take notes, plan methods, analyze data, write drafts, receive feedback, and revise toward publication. | Project guidance, notes, source library, protocol or project plan, analysis workspace, draft area, advisor comments, and project memory. |
| Postdoc or academic researcher | Manage multiple research projects, synthesize sources, run analyses, create figures, write manuscripts, coordinate coauthors, and preserve decisions. | Multi-project workspace, evidence graph, analysis runs, figures, manuscript workflow, versioning, collaboration, and export. |
| Clinician-researcher or applied researcher | Find relevant evidence quickly, evaluate sources, connect findings to clinical or applied questions, and produce reports or manuscripts under time constraints. | Fast source search, evidence extraction, quality appraisal, source-grounded synthesis, citation support, and concise reporting outputs. |
| Research assistant or coordinator | Search databases, clean metadata, screen papers, extract data, organize files, prepare tables, update citations, and complete assigned tasks. | Task assignment, reviewable contributions, screening queues, extraction forms, source cleanup tools, and approval or review flows. |
| Data analyst or statistician | Prepare datasets, write and run code, choose methods, generate tables and figures, document assumptions, and reproduce results. | Dataset handling, code execution, analysis runs, method notes, run provenance, figure and table generation, and stale-output detection. |
| Computational researcher or bioinformatician | Build code-driven research workflows, manage datasets, run scripts or pipelines, track parameters and environments, produce reproducible outputs, and connect computational results to claims and manuscripts. | Code and project workspace, dataset and artifact handling, reproducible runs, environment and parameter records, pipeline-aware provenance, figure and table outputs, stale-output detection, and links from results to claims and manuscript sections. |
| PI, advisor, or project lead | Review project direction, inspect evidence, guide decisions, comment on drafts, approve major changes, and understand progress. | Project overview, decision log, comments, review queues, evidence inspection, approval flows, and progress or status views. |
| Coauthor or collaborator | Contribute sources, notes, analysis, figures, text, comments, and revisions while preserving attribution. | Shared project access, comments, suggestions, attribution, role-aware permissions, manuscript review, and artifact review. |
| Librarian or information specialist | Design search strategies, choose databases, refine queries, validate metadata, deduplicate sources, and preserve search provenance. | Search strategy workspace, query history, source connectors, deduplication, metadata normalization, import and export, and reproducible search records. |
| Reviewer or mentor | Review drafts, evidence support, claims, methods, figures, and unresolved questions without owning the whole project. | Comment-only access, review mode, claim support checks, evidence links, suggestion workflow, and unresolved-question tracking. |
| Independent researcher | Keep all project material locally owned, organized, portable, and exportable without institutional infrastructure. | Local-first project folder, portable archive, readable files, citation and export support, durable memory, and optional cloud mirror. |
| Agent or AI worker | Read project context, perform bounded tasks, propose changes, run tools, update artifacts, and explain work. | LitRev-owned project tools, context targets, permissions, logs, proposed artifacts, approvals, and recovery paths. |

Use the existing product centrality and validation timing fields below to classify features after this role-and-work review. Do not create a separate priority scale unless the current fields stop being expressive enough.

## Promoted PRD Sections

These sections have already been drafted in `docs/product/PRD.md`. Their detailed planning scaffolding should not keep appearing as active planned work here.

| PRD section | Current role in the PRD |
|---|---|
| Product Overview | Defines LitRev as a local-first scientific workspace where researchers and agents run a project from early formation through publication-ready outputs. |
| Target Users | Defines the broad user base as people doing scientific and scholarly research, while keeping the research project as the organizing unit. |
| Product Principles | States the durable product constraints: project-centered research, agentic-first but researcher-owned work, traceability, local-first collaboration and versioning, connected outputs, and an open research ecosystem. |
| Research Project Lifecycle | Describes the non-linear project lifecycle from project direction through material gathering, reading, evidence, data/computation, figures, writing, export, preservation, collaboration, agent work, and recovery. |
| Core Project Workspace Requirements | Defines what the workspace must reliably preserve, connect, expose, and let researchers, collaborators, and agents work on across the project. |
| Project Workspace Areas | Names the main product areas and the product responsibility each one owns without committing to fixed pages, schemas, or implementation boundaries. |
| Source, Evidence, Claims, And Scientific Trust | Defines the scientific trust layer for source records, parsing visibility, backlinks, screening, extraction tables, evidence links, claim support, uncertainty, and grounded synthesis. |
| Data, Code, Analysis, Figures, And Artifacts | Defines first-class data, computation, analysis-run, stale-output, figure, table, artifact, and agent-assisted analysis requirements without committing to one notebook, runtime, statistics, or workflow-platform model. |
| Manuscript, Publishing, And Research Outputs | Defines serious scholarly writing, citations, evidence rails, claim-support diagnostics, comments, publication artifacts, import, export, and reconciliation with external writing tools. |
| Agent Delegation, Review, And Safe Automation | Defines object-scoped agent work, context capture, reviewable outputs, approvals, failures, retries, logs, and recovery as the user-facing contract for safe automation. |
| Project Memory And Continuity | Defines inspectable, editable, challengeable project memory for project direction, decisions, preferences, unresolved questions, and prior agent work. |
| Local-First Ownership, Collaboration, And Mobile Continuation | Defines local ownership, optional cloud mirroring, collaboration, permissions, attribution, review, synchronized co-editing where useful, and mobile as continuation rather than full parity. |
| Provenance, Versioning, Recovery, And Auditability | Defines useful project history, provenance, diffs, checkpoints, rollback, version comparison, auditability, and recovery without requiring normal users to manage raw logs or Git. |
| External Scholarly Interoperability | Defines deliberate import, export, deposit, archive, and continuation paths across existing research tools, formats, repositories, and open-science platforms. |
| Deferred Scope And Non-Goals | Defines adjacent products and deep platform areas LitRev should not fully replace in its first product shape while preserving compatibility and later expansion paths. |

## No Remaining PRD Section Candidates

The full promotion-map section set has been drafted in `docs/product/PRD.md`. Future work here should refine, split, or prune promoted sections rather than treating the old promotion map as unpromoted backlog.

## PRD Section Placement Stress Test

Use this mapping to test whether features belong cleanly in the PRD structure. Each product item should have one primary home. It may be referenced elsewhere, but the PRD should define it only once. If a feature fits in multiple places, choose the section that owns the user-facing product promise and cross-reference the supporting section only when needed.

| PRD section | Feature and item examples |
|---|---|
| Project Workspace Areas | project home, dashboard, project status, workspace navigation, command palette, object-aware quick actions, project-wide search, project direction area, protocol area, library, reader, evidence area, analysis area, figures/artifacts area, manuscript area, agent work area, review/history area, memory area, settings |
| Source, Evidence, Claims, And Scientific Trust | research database search, PubMed or OpenAlex connectors, DOI lookup, source import, deduplication, metadata normalization, reference library, PDF reader, annotations, document parsing, source chunks, screening queue, inclusion and exclusion decisions, PRISMA counts, evidence ledger, extraction forms, evidence graph, claim support, unsupported-claim detection, risk of bias, quality appraisal, uncertainty and conflict flags |
| Manuscript, Publishing, And Research Outputs | draft area, section mode, full-draft mode, outline, manuscript sections, inline citations, bibliography, citation diagnostics, evidence rail, claim support checks, journal adaptation, word-count or style checks, DOCX export, PDF export, Markdown, LaTeX, Quarto or Pandoc export, manuscript import and reconciliation |
| Data, Code, Analysis, Figures, And Artifacts | analysis workspace, code editor, Python execution, notebook import, notebook compatibility, reproducible runs, run logs, datasets, data tables, generated tables, figure creation, editable scientific figures, chart builder, artifact manager, stale output detection, analysis dependency graph, statistical methods assistant |
| Agent Delegation, Review, And Safe Automation | send selected object to agent, context capture, object-scoped tasks, project-aware tools, agent task inbox, task status queue, model choice or router, built-in scientific skills, proposed artifacts, agent-generated evidence, agent draft edits, agent source cleanup, controlled writes, permission profiles, background tasks, cancellation, retries, approvals, accept, reject, and edit flows |
| Project Memory And Continuity | project memory, user preferences, writing preferences, protocol decisions, source judgments, prior agent work, unresolved questions, memory health, memory freshness, inspect, edit, and forget memory, pinned context, project continuity summaries |
| Local-First Ownership, Collaboration, And Mobile Continuation | local project files, local project database, cloud mirror status, sync state, conflict state, account and auth, profile management, device identity, roles, permissions, invitations, shared projects, comments, assignments, notifications, synchronized co-editing, mobile reading, mobile approvals, mobile capture, mobile task status |
| Provenance, Versioning, Recovery, And Auditability | source provenance, search provenance, citation provenance, evidence provenance, agent action logs, event history, diffs, snapshots, checkpoints, rollback, restore, audit trail, version history, Git-backed artifacts, recovery after failed agent run |
| External Scholarly Interoperability | Zotero import and export, JabRef, BibTeX, BibLaTeX, CSL JSON, RIS, DOI metadata, PubMed, OpenAlex, Crossref, arXiv, Semantic Scholar, Git, GitHub, GitLab, OSF, Dataverse, Figshare, Google Drive, institutional repositories, Word, DOCX, LaTeX, PDF, Quarto, Pandoc |
| Deferred Scope And Non-Goals | full Zotero replacement, full Overleaf replacement, full Jupyter replacement, full ELN, enterprise systematic-review platform, full mobile parity, full product-wide real-time collaboration, complex workflow pipelines, complete journal submission system |

Trust should be handled with clear ownership:

- Scientific trust belongs with sources, evidence, claims, citation support, and source-grounded synthesis.
- Agent trust belongs with delegation, proposed artifacts, approvals, safe automation, and review.
- Operational trust belongs with provenance, versioning, recovery, and auditability.

## Earlier Scope Notes To Revisit

The older "first workflow wedge" and "first validation slice" drafts have been removed from active PRD section planning because the current PRD no longer treats a single evidence-to-manuscript wedge as settled product truth.

Do not promote those older drafts directly. Reuse their useful ideas only after deciding the next concrete product scope. Candidate scope ideas to revisit include:

- evidence-grounded literature-to-manuscript workflow
- biomedical researcher combining literature review with project data
- computational or bioinformatics researcher with code and pipelines
- PhD student or broad academic author needing project guidance and drafting support
- local project bootstrap with source import, evidence extraction, draft support, agent review, and recovery

## PRD Success Criteria

The PRD is ready to guide design and implementation when it can answer these product questions clearly:

- Which researchers and workflows does the PRD explicitly serve?
- Which project materials, records, relationships, and workspace responsibilities are durable product truth, and which are implementation details?
- Can a researcher trace a draft claim or citation back to exact source support?
- Can a researcher do the same work manually without depending on chat?
- Can an agent work on the same project materials and surfaces the researcher sees and edits?
- Can the researcher inspect, approve, reject, compare, and recover high-impact agent changes?
- Does any proposed early validation scope have a concrete pass/fail scenario rather than a broad list of desirable features?
- Which items are core to LitRev's product identity, and which are early, later, or deferred validation work?
- What is the mobile role for each product area, even if mobile is not in the early validation scope?
- Which requirements belong in the PRD, and which belong in architecture, research, implementation, or planning documents?

## Mobile Product Principle

Mobile is a project-continuation surface, not a separate source of truth and not full desktop parity by default.

The likely mobile role is reading, capture, quick notes, comments, notifications, task status, lightweight review, approvals, and continuation. Heavy project setup, deep drafting, code execution, complex evidence modeling, export configuration, and recovery workflows should start on desktop unless a specific mobile workflow proves otherwise.

For every product item, decide whether mobile should be read-only, queued for later review, allowed to make lightweight edits, allowed to approve agent work, or excluded from the first mobile surface.

## Promotion Guardrails

Before moving planning material into the PRD:

- Translate tool, vendor, OSS project, framework, and stack names into product capability language unless external compatibility is the actual requirement.
- Keep OSS names in planning or research notes as evidence, inspiration, or implementation candidates.
- Separate product requirements from architecture choices and implementation candidates.
- Consolidate overlapping entries into the user-facing product capability before promotion.
- Give each item one primary home in the PRD. Other sections may reference it, but should not redefine it.
- Phrase implementation mechanisms as product capabilities unless the specific mechanism is the product requirement. For example, use "technical publishing export" before naming Quarto, MyST, or Pandoc; "tabular analysis" before naming DuckDB or SQL; and "avoid duplicate destructive work" before naming idempotency.
- Preserve the "more than, not does not do" positioning boundary.
- Do not promote a broad feature list as early-validation scope unless it maps to a concrete validation scenario.
- Make the manual researcher workflow first-class wherever agent work is described.
- State the mobile role explicitly, including when mobile is deferred.

## PRD Promotion Map From Feature Inventory And Source Research

Use this map to trace the raw feature inventory and source-evaluation research into promoted PRD sections. It does not promote any item by itself, and it does not accept any open-source dependency, vendor, runtime, editor, sync engine, parser, or model architecture as product truth.

The source-evaluation map should be used with three different levels of weight:

- Product and UX references can shape what researchers will expect from a capability.
- Engine, runtime, editor, sync, parser, and architecture candidates should usually stay out of PRD wording unless the product requirement is external compatibility itself.
- Compatibility targets may be named in the PRD when bringing work in, sending work out, or preserving existing scholarly workflows is the product requirement.

Because `docs/research/source-evaluations/open-source-adaptation-map.md` is still research evidence, source names in this table are source inputs, not final decisions. Before an OSS-backed detail becomes architecture direction, it still needs source links, inspection dates, license review, and, where relevant, prototype or benchmark evidence.

This promotion map has now been translated into `docs/product/PRD.md` at the product-contract level. Keep it as source-support and placement history. Future work should refine promoted sections, remove repetition, and move implementation-specific choices to architecture or implementation plans.

| Feature inventory area | Primary PRD home | What the PRD should describe | Source inputs to use | Keep out of the PRD for now | Original promotion timing or current note |
|---|---|---|---|---|---|
| Project kernel and local workspace | `Project Workspace Areas`; `Local-First Ownership, Collaboration, And Mobile Continuation` | A durable local project workspace with project status, navigation, search, object-aware actions, readable project material, and cloud-mirror readiness. The workspace map should name concrete surfaces: project home, project direction/protocol, source library/reader, notes/decisions, evidence, analysis, figures/artifacts, manuscript, agent work/review, memory/history, collaboration/sharing, settings, and interoperability. | Earlier LitRev prototype, Synara, T3 Code, Git/Git-like workflows. | Exact project-folder schema, local database schema, sync protocol, package boundaries, desktop process architecture, and Git as required sharing. | Promoted to PRD as a concise surface-responsibility map. Future changes should refine responsibilities without turning surfaces into fixed schemas or implementation boundaries. |
| Protocol, notes, and decisions | `Project Workspace Areas` | A flexible project-direction area for topic, goals, protocol, scope, criteria, extraction plan, analysis plan, reporting plan, notes, milestones, and decision history. Include guided project bootstrap that can turn loose starting material into a reviewed project scaffold, plus project notes linked to sources, evidence, drafts, and decisions. When protocols govern evidence, screening, or extraction, the evidence/trust section can reference those rules without owning project direction. | ASReview, Rayyan, Covidence/DistillerSR/EPPI-Reviewer/RevMan/JBI SUMARI, protocols.io, SciNote, RSpace, eLabFTW. | Treating `ResearchQuestion` as a rigid app object, full ELN behavior, full enterprise systematic-review compliance, and premature framework-specific protocol schemas. | Promoted to PRD through the workspace surface map; deeper protocol/review frameworks can expand after source/evidence workflows are clearer. |
| Source discovery, import, and reading | `Source, Evidence, Claims, And Scientific Trust`; `External Scholarly Interoperability` | Real source discovery, imports, deduplication, metadata normalization, reference manager compatibility, project library, reader/annotation support, source chunks, exact source-region provenance, parser confidence, failure visibility, and source/study detail surfaces with backlinks to notes, evidence, citations, draft usage, figures, analysis, and unresolved issues. Later discovery depth may include literature maps, citation networks, and source-neighborhood exploration. | Zotero, JabRef, CSL, BibTeX/BibLaTeX, RIS, PubMed, OpenAlex, Crossref, arXiv, Semantic Scholar, Unpaywall, OpenCitations, GROBID, Docling, Marker, Paperpile/Mendeley/EndNote/ReadCube as expectation references. | Committing to one parser, making TEI or Docling output canonical, rebuilding Zotero first, proprietary-manager assumptions, parser implementation detail beyond product-visible provenance/failure states, and full citation-network exploration before the core source workflow works. | Promoted to PRD at the product-contract level. Detailed connectors and parser choices remain external interoperability, architecture, or implementation work. |
| Screening, evidence, and evidence graph | `Source, Evidence, Claims, And Scientific Trust` | Screening decisions, inclusion/exclusion reasons, extraction schemas, extraction tables, extracted values, source-linked table cells, exportable evidence tables, evidence ledger, evidence links, claim support, contradiction/uncertainty flags, quality appraisal, risk-of-bias support, and PRISMA-style accounting where the workflow requires it. | ASReview, Rayyan, Covidence, DistillerSR, EPPI-Reviewer, RevMan, JBI SUMARI, Nested Knowledge, Elicit, scite, Consensus, SciSpace. | Silent model-driven include/exclude decisions, full enterprise review platform scope, all quality frameworks at once, and an overbuilt graph UI before first traceable evidence paths work. | Promoted to PRD at the product-contract level. Review-framework depth and active-learning behavior still depend on the chosen validation scenario. |
| Evidence-grounded synthesis | `Source, Evidence, Claims, And Scientific Trust` | Project Q&A and synthesis that answers from project evidence, shows exact support, flags gaps/conflicts/uncertainty, and lets useful answers become notes, evidence links, draft material, or decisions. | PaperQA, Elicit, Consensus, SciSpace, scite, Crossref/OpenAlex/Semantic Scholar context sources. | Treating RAG answers as truth, saving opaque chat as the project record, using a sidecar RAG store as canonical state, or hiding weak support behind polished prose. | Promoted to PRD at the product-contract level. Retrieval architecture and answer-generation mechanics remain out of the PRD. |
| Drafting, citations, and manuscript | `Manuscript, Publishing, And Research Outputs`; `External Scholarly Interoperability` | A serious manual writing workspace with section and full-document modes, outline/structure, citations, bibliography, evidence rail, claim-support diagnostics, comments/suggestions, journal adaptation, reports, thesis sections, grant/proposal sections, publication build diagnostics, crossrefs, templates, export artifact graph, export/import, and reconciliation with external documents. | Tiptap/ProseMirror, Plate, Lexical, Word, Google Docs, Overleaf, Zotero, JabRef, CSL, Quarto, Pandoc, MyST, Manubot, LaTeX, Typst. | Editor data model as canonical truth, raw Quarto/MyST/LaTeX authoring as the required UX, full Overleaf or Word replacement, export ASTs as the manuscript model, and complete journal submission systems. | Early validation needs a thin but real draft/citation workflow; publication export, diagnostics, and reconciliation can expand once manuscript and evidence links are stable. |
| Data, code, analysis, figures, and artifacts | `Data, Code, Analysis, Figures, And Artifacts`; `Manuscript, Publishing, And Research Outputs` | Datasets, queryable tables, scripts, notebook import/export or notebook-compatible work, code execution, parameters, environment/dependency capture where needed, local tabular transformations, analysis runs, reproducible outputs, dataset and artifact version awareness, stale-output detection, statistical analysis, method-assumption guidance, readable results tables, later meta-analysis helpers, publication tables, static computational figures, interactive figures, editable chart specifications, diagrams/graph visuals, editable scientific visuals, visual planning surfaces, artifact review, shareable analysis views as later artifacts, and links from outputs back to data, code, parameters, method notes, claims, captions, figures, tables, and manuscript sections. | Analysis workbench and data engines: marimo, JupyterLab, DuckDB, pandas/Polars, Arrow/Parquet; scientific/statistical runtimes: SciPy, statsmodels, scikit-learn, R/tidyverse/ggplot2; reproducibility and workflows: DVC, DataLad, Snakemake, Nextflow, Galaxy, Renku; figures and tables: Matplotlib, Plotly, Altair/Vega-Lite, Great Tables/gt, Observable Plot/D3; diagrams and visual planning: Mermaid/Graphviz/Cytoscape.js, tldraw, Excalidraw, xyflow; scientific illustration and domain visuals: BioRender, GraphPad Prism, OriginPro, Inkscape, diagrams.net, BioIcons, napari/Fiji/ImageJ/CellProfiler/QuPath, RDKit/Mol*/3Dmol.js/Biopython; shareable analysis apps: Streamlit/Dash/Shiny/Gradio; Stencila. | Turning LitRev into a notebook app, full workflow/pipeline platform, full statistics package, full BioRender/GraphPad replacement, exposing DVC/DataLad-style mechanics before user-facing artifact needs are clear, and remote/cloud compute unless local analysis is insufficient. | Core product area. Minimal data, analysis, figure, and artifact continuity should be described in the PRD early; depth depends on the validation scenario. |
| Agent runtime, tools, and skills | `Agent Delegation, Review, And Safe Automation`; `Provenance, Versioning, Recovery, And Auditability` | Object-scoped delegation, context capture, project-aware tools, file writing/editing, code writing/running, approved local tool use, visible built-in scientific skills, skill definitions, task inbox/status queue, task states, proposed changes, logs, approvals, cancellations, retries, failures, and recovery paths. | OpenCode, Codex app-server, Goose, Aider, Synara, T3 Code, Vercel AI SDK, Vercel AI Elements, Hermes, OpenClaw, earlier LitRev prototype. | Runtime architecture, model routing internals, external connector/server design, executor session databases as project truth, copying an external agent product shape, and skill marketplace/registry mechanics before built-in skills prove useful. | Foundation for any agent-modified evidence, draft, file, code, citation, or artifact. The PRD should describe the user/product contract; architecture should decide the executor contract. |
| Project memory and context | `Project Memory And Continuity`; `Agent Delegation, Review, And Safe Automation` | Inspectable memory for project direction, protocol decisions, source judgments, extraction choices, writing preferences, analysis decisions, unresolved questions, collaborator choices, prior agent work, freshness, confidence, conflicts, and edit/forget behavior. | Earlier LitRev prototype, Hermes, Goose, Codex action/session metadata, Stencila provenance concepts. | Vector-store design, memory database schema, context-compression implementation, opaque memory that researchers cannot inspect or correct, cross-project memory, organization-level memory, and approved-method libraries before project-level memory works. | Minimal early memory is likely needed for continuity; rich memory health, merge, distrust, and cleanup flows can mature later. |
| Identity, sharing, collaboration, and mobile | `Local-First Ownership, Collaboration, And Mobile Continuation` | Accounts where needed for cloud mirroring, profile management, device identity, project membership, roles, permissions, invitations, access revocation, attribution, comments, suggestions, assignments, synchronized co-editing where useful, conflict states, notifications, and mobile continuation for reading, capture, review, approvals, and task status. | Yjs/Hocuspocus, Yorkie, PowerSync, Electric, TinyBase, RxDB, cr-sqlite, OSF, Dataverse, GitHub, GitLab, Google Drive, Zotero groups, Word/Google Docs collaboration expectations. | Exact auth provider, sync engine, CRDT provider, encryption model, full product-wide real-time collaboration, cloud-only source of truth, and full mobile parity. | Design for it from the foundation; promote detailed PRD requirements after local project and cloud-mirror semantics are clearer. Mobile should stay continuation-first unless a specific mobile workflow proves otherwise. |
| Review, provenance, versioning, and recovery | `Provenance, Versioning, Recovery, And Auditability`; supporting references from trust and agent sections | Event history, source provenance, evidence provenance, citation provenance, agent action logs, diffs, checkpoints, snapshots, rollback, version comparison, auditability, failed-run recovery, optional Git/Git-like workflows for readable artifacts, and timestamped/certified records only when later institutional workflows require them. | Git, Aider, Codex app-server, OpenCode, Goose, Stencila, DVC, DataLad, earlier LitRev prototype. | Exact event schema, Git as mandatory collaboration, raw runtime logs as the user-facing audit surface, provenance that records activity without helping researchers understand or recover work, and institutional compliance/signature suites before core recovery works. | Foundation for trust. A thin version is needed early before agents can make high-impact changes. |
| External scholarly interoperability and non-goals | `External Scholarly Interoperability`; `Deferred Scope And Non-Goals` | Deliberate import, export, deposit, archive, and continuation paths across reference managers, scholarly databases, citation formats, document formats, code/data tools, repositories, cloud drives, publishing systems, and open-science platforms. Also name what LitRev should not fully replace first, and preserve later paths for public project pages, review publication packages, repository-facing summaries, institutional systems, and advanced external automation. | Zotero, JabRef, CSL, PubMed, OpenAlex, Crossref, arXiv, Semantic Scholar, OSF, Dataverse, Figshare, GitHub, GitLab, Google Drive, Word/DOCX, PDF, LaTeX, Quarto, Pandoc, MyST, Jupyter, Overleaf, ELN and enterprise review platforms as boundary references. | Integration sprawl, complete journal submission systems, full Zotero/Overleaf/Jupyter/ELN replacement, institutional compliance suites, electronic signatures/timestamps, public project hosting, and advanced automation across email/chat/calendar/GitHub/lab systems before the core project workspace works. | End-of-PRD section. Keep concise and boundary-setting; detailed adapters belong in research, architecture, or implementation plans. |

### Promotion Status

The recommended promotion-map sections have been drafted in the PRD. Next PRD work should be a review pass, not more promotion:

- remove repetition between lifecycle, workspace requirements, workspace surfaces, and detailed capability sections
- decide whether any promoted section is too broad for product truth and should be moved back to planning
- check whether source/evidence, analysis, writing, agents, memory, collaboration, provenance, interoperability, and non-goals have the right level of specificity
- keep implementation candidates, source names, package choices, and runtime architecture out of the PRD unless external compatibility is the product requirement

## Core Feature Categories To Carry Into The PRD

These categories come from OSS and source-evaluation research and should stay visible as PRD planning inputs. They are not automatically accepted product truth; the detailed feature entries below carry their current status, current-step decision, mobile role, and open questions.

| Category | PRD reason |
|---|---|
| Reference manager interoperability | LitRev should treat Zotero, JabRef, BibTeX/BibLaTeX, and CSL import/export as core scholarly workflow infrastructure, not as plugin afterthoughts. |
| Scholarly document parsing and source-chunk provenance | PDF parsing, structured text, tables, figures, citation contexts, coordinates, confidence, and parser failure states are the base layer for evidence-grounded work. |
| Screening queue and active-learning prioritization | Study triage should support researcher-controlled screening while allowing ASReview-style prioritization or similar assistive methods when useful. |
| Review frameworks, risk of bias, and reporting counts | Protocol-driven reviews need inclusion/exclusion reasons, PRISMA-style accounting, quality frameworks, and risk-of-bias judgments. |
| Scientific QA context engine | Grounded question-answering should land against LitRev evidence, source, and claim objects, not remain trapped in chat. |
| Publishing build and export artifact graph | Manuscripts should export through publication-ready paths with diagnostics, references, crossrefs, build logs, and journal/template adaptation. |
| Reactive analysis graph and stale output detection | When data, code, methods, or evidence change, LitRev should know which tables, figures, claims, and manuscript sections may be stale. |
| Notebook compatibility | LitRev should support Jupyter-compatible scientific work without becoming only a notebook application. |
| Dataset and large artifact versioning | Research projects need durable handling for datasets, figures, reports, intermediate outputs, and large artifacts, with DVC/DataLad-inspired ideas considered. |
| Editable scientific figures and visual planning | Figures should be editable scientific objects linked to data, code, evidence, and manuscript claims, not static images detached from provenance. |
| Scientific workflow and pipeline execution | Workflow and pipeline concepts from tools like Snakemake, Nextflow, and Galaxy may be needed for computational projects, likely later unless computational research becomes the early validation scenario. |
| Open science deposit and external project integrations | LitRev should plan for export, deposit, archive, and project integration paths such as OSF, Dataverse, Figshare, GitHub/GitLab, Google Drive, institutional repositories, and Zotero groups. |

## Candidate PRD Thesis

LitRev helps researchers run a complete evidence-grounded scientific project in one local-first workspace. It connects protocol, sources, screening, extracted evidence, claims, analysis, figures, manuscript writing, agent work, memory, and provenance so researchers can move faster without losing control, traceability, or scientific accountability.

This is candidate wording for the PRD. Refine before promotion.

## Product Positioning Notes

When positioning LitRev against adjacent product categories, avoid saying LitRev is "not" those things in a way that implies the product does not include their capabilities.

Use this framing instead:

- LitRev includes reference and citation management, but is broader than a reference manager.
- LitRev includes manuscript drafting, but is broader than a writing editor.
- LitRev includes source screening and extraction, but is broader than a systematic-review queue.
- LitRev includes notes, but is broader than a notebook app.
- LitRev includes code execution and analysis, but is broader than a notebook or coding-agent UI.
- LitRev includes chat and agent delegation, but is broader than a chatbot with files.
- LitRev includes cloud collaboration, but must preserve local-first ownership and project durability.

The intended boundary is "more than," not "does not do."

## Candidate Project Record Ingredients

This is a rough planning inventory, not an accepted PRD section and not a database or app-object model. Before promotion, these ideas should be reframed as workspace responsibilities, surfaces, records, or relationships that researchers and agents need to use.

The current names are intentionally provisional. Some are implementation-shaped and may be renamed, merged, or dropped.

| Candidate item | Working meaning |
|---|---|
| `Project` | The durable research workspace. |
| `ResearchQuestion` | The scientific question being pursued. |
| `Protocol` | The planned method, criteria, extraction, analysis, and reporting rules. |
| `Search` | A saved query or discovery run with source, date, filters, counts, and provenance. |
| `SearchResult` | Candidate record for a source found by a search before or during import into the project library. |
| `Paper` | A scholarly source or reference. |
| `FileAsset` | Candidate object for a PDF, dataset, image, document, script, export, or other project file that needs metadata and provenance. |
| `SourceChunk` | Exact text, region, table, figure, or other source location used as evidence. |
| `SourceRegion` | Candidate subobject for a PDF coordinate region, page range, table cell, figure, or other precise source location. |
| `ScreeningDecision` | Include, exclude, or maybe decision with rationale and criteria. |
| `Criterion` | Candidate object or field for eligibility, exclusion, quality, extraction, or analysis criteria from the protocol. |
| `Outcome` | Candidate object or field for outcomes, endpoints, variables, or measures tracked by the project. |
| `ExtractionSchema` | Structured fields to extract from studies. |
| `ExtractedDataItem` | A source-grounded extracted value, observation, or result. |
| `Claim` | A scientific assertion made inside the project or manuscript. |
| `EvidenceLink` | A typed relationship between claim, source, evidence, extracted value, citation, or artifact. |
| `Dataset` | Data used or produced in the project. |
| `Analysis` | Code, workflow, or method that transforms data. |
| `AnalysisRun` | A durable execution with inputs, outputs, logs, environment, and provenance. |
| `Figure` | Visual artifact linked to data, code, evidence, and manuscript use. |
| `Table` | Candidate object for tabular outputs, extraction tables, analysis results, or manuscript-ready tables. |
| `Manuscript` | The structured draft or publication object. |
| `ManuscriptSection` | Candidate object or subobject for a section, block, paragraph, heading, or other stable manuscript unit. |
| `Citation` | Link between manuscript text, reference metadata, source records, and evidence. |
| `Bibliography` | Candidate generated view or object for formatted reference output and bibliography diagnostics. |
| `Note` | Human or agent-created project note. |
| `ReviewComment` | Comment, suggestion, issue, or review item. |
| `ContextTarget` | Selected project object, text range, source region, claim, artifact, or workspace state sent to an agent as task context. |
| `AgentRun` | A bounded agent task. |
| `AgentAction` | A meaningful agent operation within the project. |
| `ToolCall` | Candidate record for a tool invocation within an agent run when the call needs inspection, audit, or recovery. |
| `Artifact` | Output proposed or produced by a user, agent, tool, or analysis run. |
| `ApprovalDecision` | Human decision on a high-impact action or proposed change. |
| `Memory` | Inspectable durable project, user, or study memory. |
| `ProjectMember` | Candidate object for a collaborator, role, attribution, invitation, or shared-project participant. |
| `ExportDepositRecord` | Export, submission, deposit, archive, or preservation record. |

## Candidate Product Boundary

The manual workspace and the agent workspace should be the same workspace.

Agent-created work should land in the relevant LitRev object with provenance. If the agent screens a paper, edits a claim, extracts a value, runs code, drafts a paragraph, changes a citation, or creates a figure, that work should be inspectable and editable through the normal project surfaces.

## Feature Inventory

This inventory is the raw material for the PRD plan. It can contain rough ideas, candidates, early-validation items, later items, and open questions.

## Feature Classification Values

Avoid using one `Status` value to mean both product importance and implementation timing.

Product centrality:

- `Core` - central to LitRev's product identity.
- `Important` - likely important, but not defining for the first product shape.
- `Later` - likely valuable after the first product shape is proven.
- `Idea` - captured for later thinking.
- `Rejected for now` - intentionally not part of the current product direction.

Validation timing:

- `Foundation` - foundation likely needed before a coherent validation scenario can run.
- `Early validation` - candidate for an early validation scenario.
- `Early expansion` - likely early expansion after the first validation scenario.
- `Later` - not needed to prove the first product shape.
- `Deferred` - blocked by another decision or deliberately postponed.
- `Promoted to PRD` - moved into canonical product direction.

Existing feature entries below may still use a compact `Status` line while rough. When an entry is edited or promoted, replace that with separate `Product centrality` and `Validation timing` fields.

## Product Spine

This spine is a working lifecycle map. It helps organize features without turning the list into the PRD.

1. Start a project.
2. Build the protocol.
3. Discover and import sources.
4. Read, screen, extract, and analyze evidence.
5. Build the evidence graph.
6. Ask and synthesize with evidence.
7. Write and revise the manuscript.
8. Analyze data and create figures.
9. Use agents safely.
10. Remember and evolve.
11. Share, review, preserve, and recover project state.

## Early Validation Candidate Bundle

This bundle is an early candidate backlog for a future validation scenario. It is not settled scope and not all mandatory.

Likely needs representation in an early validation scenario, even if thin:

- Local project workspace.
- Stable local project files and project state.
- Research question and minimal protocol workspace.
- Source import or PDF attachment with source metadata.
- Source chunks with provenance.
- Evidence ledger with one structured record.
- Context capture from selected project objects into agent work.
- Project-aware agent tools for the paper-to-evidence-to-draft workflow.
- Draft workspace with one evidence-linked cited section.
- Review/history surface for agent changes.
- Durable agent run record with basic recovery path.

Should be designed early, but does not need full early-validation depth:

- Cloud-mirror-ready project identity.
- Guided project bootstrap.
- Real research library beyond the imported first paper.
- Full PDF/file reader and annotation workflow.
- Full citation style and bibliography management.
- Complete snapshots, rollback, and recovery.
- Complete code execution and analysis workspace.
- Mobile continuation surface.

## Project Kernel And Local Workspace

### Local LitRev Project Workspace

Status: Early validation
Why it matters: LitRev needs a durable project container before agents, files, evidence, drafts, memory, and cloud mirroring have a stable place to live.
Researcher workflow need: Researchers need to start, reopen, inspect, and continue a real research project.
Agent role: Work inside the selected project instead of operating in an unstructured folder.
Manual role: Create, open, inspect, rename, archive, and manage a project directly.
Current-step decision: Needed at the foundation.
Mobile role: Later; likely project awareness and continuation, not full project creation at first.
Open questions: What is the minimum project identity and metadata needed before sync exists?

### Stable Local Files And Project Structure

Status: Early validation
Why it matters: LitRev is local-first, so files must have a clear local home and relationship to project state.
Researcher workflow need: Researchers need to keep PDFs, datasets, notes, figures, scripts, exports, and project artifacts organized.
Agent role: Read, write, and attach files through project-aware tools.
Manual role: Browse, open, move, and understand files without going through chat.
Current-step decision: Needed early.
Mobile role: Later; likely read, preview, capture, and upload.
Open questions: Which files are direct filesystem artifacts, and which are represented primarily as database records?

### Cloud-Mirror-Ready Project Identity And Sync Metadata

Status: Early validation
Why it matters: The local project should be shaped so cloud mirroring is not bolted on later.
Researcher workflow need: Researchers need eventual backup, cross-device access, and collaboration without losing local-first ownership.
Agent role: Preserve stable IDs, mutation history, and sync-safe writes.
Manual role: Understand whether project state is local-only, syncing, synced, or conflicted.
Current-step decision: Needed as a foundation, even if full sync is later.
Mobile role: Later; mobile depends on cloud mirror semantics.
Open questions: Which project records or relationships require stable IDs and mutation logs in early validation?

### Project-Wide Search

Status: Candidate
Why it matters: A serious research workspace needs fast retrieval across project material.
Researcher workflow need: Researchers need to find sources, files, notes, extracted evidence, draft text, decisions, agent runs, figures, and artifacts.
Agent role: Search project state and retrieve context for grounded work.
Manual role: Search and filter project material directly.
Current-step decision: Basic search is likely useful early; advanced indexing can come later.
Mobile role: Later; likely search/read/review rather than heavy editing.
Open questions: Should first search cover only database objects, files, extracted text, or all three?

### Command Palette And Object-Aware Quick Actions

Status: Candidate
Why it matters: Researchers need fast ways to act from the object they are currently inspecting without routing every action through chat or deep navigation.
Researcher workflow need: Researchers need quick actions such as send to agent, add to evidence, cite in draft, compare sources, create note, screen paper, run check, export, or open related objects.
Agent role: Receive object-scoped tasks from the current workspace surface with explicit context and permissions.
Manual role: Trigger common project actions directly from sources, evidence records, notes, drafts, analyses, figures, and agent-run surfaces.
Current-step decision: Candidate once the first core objects exist; a small command palette can become early connective tissue across the workspace.
Mobile role: Later; likely simplified object actions from reading, review, approval, and capture surfaces.
Open questions: Which object actions are universal, and which are surface-specific?

## Protocol, Notes, And Decisions

### Research Question And Protocol Workspace

Status: Early validation
Why it matters: LitRev needs to know the project's question, scope, inclusion criteria, outcomes, extraction plan, analysis plan, and reporting plan.
Researcher workflow need: Researchers need a place to define, revise, and review the protocol.
Agent role: Help turn a topic into a structured research question, protocol, search strategy, extraction plan, analysis plan, and reporting plan.
Manual role: Write, edit, approve, and version the protocol directly.
Current-step decision: Needed early because it guides source discovery, screening, extraction, synthesis, and drafting.
Mobile role: Later; likely reading, comments, approvals, and small edits.
Open questions: Which protocol fields are mandatory in early validation?

### Guided Project Bootstrap

Status: Early validation
Why it matters: Starting a real research project is complex, and LitRev should help researchers create a usable project structure without hiding the scientific decisions.
Researcher workflow need: Researchers need to turn a topic or early question into a project with scope, protocol draft, source strategy, initial library, evidence plan, analysis expectations, and draft structure.
Agent role: Propose a project scaffold, ask clarifying questions, suggest protocol fields, and create initial project objects after review.
Manual role: Edit, accept, reject, or skip suggested setup steps and start from a blank project when preferred.
Current-step decision: Useful in early validation because it creates the first coherent path into the product.
Mobile role: Later; likely continue setup, answer clarifying questions, review scaffold, or capture project ideas rather than full setup first.
Open questions: What is the smallest bootstrap flow that creates real project objects without becoming a generic onboarding wizard?

### Project Notes Linked To Sources, Evidence, Drafts, And Decisions

Status: Candidate
Why it matters: Researchers need informal thinking space that still connects to durable project objects.
Researcher workflow need: Researchers need to capture observations, interpretations, questions, and reminders while reading or drafting.
Agent role: Create, summarize, link, and recall notes in context.
Manual role: Write, organize, link, and search notes.
Current-step decision: A simple notes surface likely belongs early, but it should not delay the evidence/draft slice.
Mobile role: Yes, later; capture and quick review are natural mobile uses.
Open questions: Are notes freeform documents, object-attached comments, or both?

### Decision Log

Status: Candidate
Why it matters: Long research projects need a durable record of why choices were made.
Researcher workflow need: Researchers need to preserve protocol choices, inclusion/exclusion decisions, analysis choices, interpretation decisions, and manuscript decisions.
Agent role: Propose decision records and cite supporting project context.
Manual role: Create, approve, edit, and review decisions.
Current-step decision: Minimal decision capture is useful early; a complete decision-log UI can come later.
Mobile role: Later; review and approval are likely useful.
Open questions: Which decisions must be structured versus narrative?

## Source Discovery, Import, And Reading

### Research Database And API Connectors

Status: Early validation
Why it matters: LitRev should discover literature from real scientific sources, not only user-uploaded files.
Researcher workflow need: Researchers need to search and import sources from databases such as PubMed, OpenAlex, Semantic Scholar, Crossref, arXiv, and similar sources.
Agent role: Query source databases, retrieve metadata, suggest candidate papers, and preserve provenance for search results.
Manual role: Run searches, inspect results, save sources, and adjust queries.
Current-step decision: Start with one or two high-value connectors, then expand.
Mobile role: Later; likely saved-search review and source triage.
Open questions: Which database should be first, and how should query provenance be stored?

### Real Research Library

Status: Early validation
Why it matters: LitRev needs a durable library of project sources that researchers can trust, inspect, organize, and reuse.
Researcher workflow need: Researchers need a library that combines imported references, PDFs, metadata, tags, collections, notes, screening state, evidence status, citation state, and source provenance.
Agent role: Add sources through database search, imports, DOI lookup, PDF parsing, deduplication, metadata repair, and evidence extraction status updates.
Manual role: Browse, filter, tag, sort, merge, correct, read, and organize sources directly.
Current-step decision: Needed early because source discovery, reading, screening, evidence, and citations all depend on it.
Mobile role: Later; likely reading list, quick triage, saved-search review, lightweight tagging, and source notes.
Open questions: Should the first library be project-local only, or should LitRev eventually support a cross-project personal research library?

### Source Import, Deduplication, And Metadata Normalization

Status: Early validation
Why it matters: Search results, PDFs, and references must become clean source records.
Researcher workflow need: Researchers need imported sources to deduplicate, normalize metadata, connect PDFs, and preserve citations.
Agent role: Match duplicate records, fill metadata, and flag uncertainty.
Manual role: Review metadata, merge duplicates, attach PDFs, and correct citations.
Current-step decision: Needed for evidence and citation reliability.
Mobile role: Later; likely quick review and triage.
Open questions: What is the minimum metadata model for the first source record?

### Reference Manager Interoperability

Status: Early validation
Why it matters: Researchers already use reference managers, and LitRev should cooperate with trusted citation libraries instead of making users start from zero.
Researcher workflow need: Researchers need import/export compatibility with tools such as Zotero, JabRef, BibTeX/BibLaTeX, CSL, and eventually common proprietary managers.
Agent role: Import references, preserve citation metadata, detect missing or inconsistent metadata, and keep citations connected to source records.
Manual role: Import, export, review, merge, correct, tag, and organize references.
Current-step decision: Zotero/JabRef/CSL compatibility should be treated as core, not a late plugin.
Mobile role: Later; likely source/library review and lightweight metadata correction.
Open questions: What is the first reliable import/export path: Zotero library, `.bib`, CSL JSON, RIS, or DOI lookup?

### Scholarly Document Parsing And Source-Chunk Provenance

Status: Early validation
Why it matters: Evidence traceability depends on knowing exactly what text, table, figure, coordinate, or region an extraction came from.
Researcher workflow need: Researchers need source chunks, citation contexts, tables, figures, references, extraction confidence, and parsing failures to be inspectable.
Agent role: Use parser output from sidecar engines such as GROBID or Docling while translating results into LitRev-owned source and evidence objects.
Manual role: Inspect parsed chunks, correct extraction errors, and understand parser confidence or failure states.
Current-step decision: Needed early because evidence extraction and claim support require source-location provenance.
Mobile role: Later; likely source/chunk review only.
Open questions: Which parser should be first for scholarly PDFs, and how should coordinates, confidence, and extraction errors be stored?

### PDF And File Reader

Status: Early validation
Why it matters: Researchers need to read source material directly inside the workspace.
Researcher workflow need: Researchers need to open, search, annotate, and navigate PDFs and other project files.
Agent role: Parse, summarize, cite, and extract from imported sources.
Manual role: Read and inspect files without relying on agent output.
Current-step decision: Needed early.
Mobile role: Later; mobile reading and quick review are likely important.
Open questions: What is the first acceptable reader: PDF preview, extracted text view, annotation view, or a combination?

## Screening, Evidence, And Evidence Graph

### Screening And Inclusion/Exclusion Decisions

Status: Candidate
Why it matters: Literature review and evidence synthesis workflows need transparent screening decisions.
Researcher workflow need: Researchers need to screen studies, record inclusion/exclusion reasons, and revisit decisions.
Agent role: Suggest screening decisions with evidence and uncertainty.
Manual role: Approve, reject, edit, and audit screening decisions.
Current-step decision: Likely early if the first workflow is literature-review heavy; otherwise after basic source/evidence records.
Mobile role: Later; mobile screening and quick review may be valuable.
Open questions: Is screening part of early validation or an early expansion?

### Screening Queue And Active-Learning Prioritization

Status: Candidate
Why it matters: Large literature projects need a way to prioritize screening without letting a model silently decide inclusion.
Researcher workflow need: Researchers need screening queues, model-prioritized candidates, inclusion/exclusion history, and transparent rationale.
Agent role: Suggest prioritization, surface likely relevant papers, and explain uncertainty.
Manual role: Make final screening decisions, audit model suggestions, and adjust criteria.
Current-step decision: Candidate after basic source import and screening decisions exist.
Mobile role: Later; mobile screening may be useful for quick review.
Open questions: When should ASReview-style prioritization enter the product, and what safeguards are required?

### Evidence Ledger With Structured Evidence Records

Status: Early validation
Why it matters: LitRev needs source-grounded scientific records, not just summaries in chat.
Researcher workflow need: Researchers need to extract, inspect, compare, filter, validate, and reuse evidence.
Agent role: Extract candidate evidence from sources and link it to source locations.
Manual role: Add, edit, validate, reject, and organize evidence records.
Current-step decision: Core early-validation feature.
Mobile role: Later; likely lightweight review, validation, comments, and approvals.
Open questions: What is the first evidence-record shape: quote, claim, method, result, population, intervention, outcome, limitation, or note?

### Evidence Graph And Claim Traceability

Status: Candidate
Why it matters: LitRev should connect papers, source chunks, extracted values, claims, citations, decisions, figures, and manuscript assertions.
Researcher workflow need: Researchers need to know which evidence supports which claims and where unsupported claims exist.
Agent role: Link claims to evidence, detect unsupported claims, and flag conflicts.
Manual role: Inspect and edit links between sources, evidence, claims, and draft text.
Current-step decision: Minimal claim-to-evidence linking should appear early; a full graph can mature later.
Mobile role: Later; likely review and conflict inspection.
Open questions: What link types are needed first?

### Evidence Strength And Quality Evaluation

Status: Candidate
Why it matters: Not all evidence has the same reliability, relevance, or methodological strength.
Researcher workflow need: Researchers need help evaluating study quality, bias, strength of evidence, and applicability.
Agent role: Apply evidence-quality frameworks, explain judgments, and flag uncertainty.
Manual role: Review, override, and document quality judgments.
Current-step decision: Likely after evidence records and screening are stable.
Mobile role: Later; likely review and approval.
Open questions: Which quality frameworks should LitRev support first, and should they vary by study type?

### Protocol-Aware Screening And PRISMA Accounting

Status: Candidate
Why it matters: Screening should be governed by the project protocol, and evidence projects often require discipline-specific quality frameworks, risk-of-bias assessment, and transparent PRISMA-style accounting.
Researcher workflow need: Researchers need protocol-linked eligibility criteria, screening decisions, exclusion reasons, duplicate counts, retrieval counts, extraction completeness, review-framework fields, and flow reporting.
Agent role: Suggest protocol-aware screening decisions, apply framework-specific checks, flag missing review fields, and maintain countable screening provenance.
Manual role: Choose the framework, make final screening and risk-of-bias judgments, correct counts, and review generated PRISMA-style summaries.
Current-step decision: Candidate once screening and evidence records are stable.
Mobile role: Later; likely review and approval.
Open questions: Which first framework matters most for the first target workflow?

### Study Detail And Evidence Backlinks

Status: Candidate
Why it matters: Each study needs a trustworthy detail surface that shows how it is used across the whole project.
Researcher workflow need: Researchers need to open a study and see metadata, files, notes, screening decisions, extracted evidence, quality judgments, citations, draft usage, figures, and unresolved issues.
Agent role: Update study-linked objects and preserve backlinks from evidence, claims, citations, draft sections, analyses, and figures.
Manual role: Inspect a study's project footprint, correct links, navigate to every place the study is used, and understand whether the study has pending review work.
Current-step decision: Candidate soon after the source library and evidence ledger exist; a minimal study detail surface may be needed early.
Mobile role: Later; likely read, review, annotate, and approve study-linked changes.
Open questions: Which backlinks must be visible in the first study detail surface?

## Evidence-Grounded Synthesis

### Ask And Synthesize From Project Evidence

Status: Candidate
Why it matters: Researchers need to ask questions of the project and get answers grounded in actual sources and extracted evidence.
Researcher workflow need: Researchers need summaries, comparisons, contradictions, gaps, and uncertainty flags.
Agent role: Answer from project evidence, show exact sources, flag uncertainty/conflict/unsupported claims, and avoid unsupported synthesis.
Manual role: Inspect source support, refine questions, and save useful syntheses.
Current-step decision: Useful soon after the evidence ledger exists.
Mobile role: Later; mobile Q&A and review may be useful.
Open questions: What counts as sufficient support for an answer?

### Scientific QA Context Engine

Status: Candidate
Why it matters: Researchers need answers grounded in project evidence, not generic retrieval over loose PDFs.
Researcher workflow need: Researchers need cited context, source provenance, contradiction flags, uncertainty, and saved syntheses.
Agent role: Use sidecar RAG or QA engines such as PaperQA as an engine while keeping LitRev evidence objects as the truth layer.
Manual role: Inspect cited context, accept or reject saved answers, and convert useful answers into notes, evidence links, or draft text.
Current-step decision: Candidate after source chunks and evidence objects exist.
Mobile role: Later; lightweight Q&A and answer review may fit mobile.
Open questions: What answer types should be saved as durable objects versus transient chat?

## Drafting, Citations, And Manuscript

### Draft Workspace With Section And Full-Draft Modes

Status: Early validation
Why it matters: LitRev aims to carry work to a publication-ready manuscript.
Researcher workflow need: Researchers need a serious manual writing surface, not just agent-generated text, with both focused section-level work and full-manuscript review.
Agent role: Draft, revise, cite, and suggest changes in manuscript sections or across the full draft.
Manual role: Write, edit, reorganize, cite, and review draft text directly in section mode and full-draft mode.
Current-step decision: Needed early, but the first version can be thin if it uses the real draft object model.
Mobile role: Later; likely reading, comments, small edits, and review rather than full drafting first.
Open questions: What is the first draft unit: section, paragraph, claim, or document block, and how does section mode stay synchronized with full-draft mode?

### Draft Evidence Rail, Citation Diagnostics, And Claim Support Checks

Status: Candidate
Why it matters: Drafting should stay connected to evidence rather than becoming a detached writing surface.
Researcher workflow need: Researchers need to see supporting evidence while writing, add evidence from the ledger into draft context, diagnose citation problems, navigate from study/source detail back to draft usage, and check support for selected claims.
Agent role: Suggest supporting evidence, identify missing or weak support, create backlinks, diagnose citation issues, and run claim-support checks from selected draft text.
Manual role: Inspect a section's evidence rail, add or remove linked evidence, follow backlinks, review citation diagnostics, and decide whether a claim is adequately supported.
Current-step decision: A minimal version should appear with the draft/evidence workflow; richer diagnostics can mature later.
Mobile role: Later; likely review evidence support and unresolved claim issues.
Open questions: What evidence-support states are needed first: supported, weakly supported, conflicting, unsupported, or needs review?

### Citation Handling And Bibliography Management

Status: Early validation
Why it matters: Scientific drafting depends on reliable citation insertion, formatting, and bibliography generation.
Researcher workflow need: Researchers need inline citation nodes, auto-generated references, citation diagnostics, and reliable citation formatting while writing.
Agent role: Suggest citations, detect citation gaps, update citation links, and flag citation/reference problems.
Manual role: Manage references, choose citations, correct metadata, inspect citation diagnostics, and format bibliography output.
Current-step decision: Needed with the first real draft workflow.
Mobile role: Later; likely citation review and lightweight correction.
Open questions: What citation style and bibliography export should be supported first?

### Journal-Specific Draft Adaptation

Status: Candidate
Why it matters: Researchers often need to adapt structure, formatting, word count, references, figures, and tone for a target journal.
Researcher workflow need: Researchers need manuscript revision against journal instructions.
Agent role: Analyze journal requirements and propose compliant draft changes.
Manual role: Review and approve journal-specific adaptations.
Current-step decision: Later than core drafting and citation support.
Mobile role: Later; likely review only.
Open questions: How should journal instructions be stored and cited?

### Manuscript Export, Import, And Reconciliation

Status: Candidate
Why it matters: LitRev should produce usable final outputs and reconcile external manuscript edits when needed.
Researcher workflow need: Researchers need DOCX, PDF, Markdown, LaTeX, references, figures, tables, submission-ready packages, and a way to reconcile imported edits back into the project draft.
Agent role: Prepare exports, check completeness, flag missing citations/artifacts, and help reconcile imported manuscript changes.
Manual role: Configure export, inspect output, import revised drafts, review reconciliation, and correct issues.
Current-step decision: Candidate after draft/citation foundations exist.
Mobile role: Later; likely preview and share/export status.
Open questions: Which export format should be first, and how much import/reconciliation is required before publication workflows feel trustworthy?

### Publishing Build And Export Artifact Graph

Status: Candidate
Why it matters: Publication outputs should be reproducible artifacts generated from LitRev state rather than one-off files.
Researcher workflow need: Researchers need crossrefs, citation styles, journal templates, figures, tables, executable outputs, build logs, and export diagnostics.
Agent role: Prepare export artifacts through tools such as Quarto/Pandoc or MyST challengers, capture build errors, and connect outputs back to manuscript objects.
Manual role: Choose export target, inspect build logs, fix diagnostics, and download or deposit outputs.
Current-step decision: Candidate after draft/citation foundations exist; export proof should appear before claiming publication readiness.
Mobile role: Later; preview/status only.
Open questions: Should the first publishing path be DOCX, PDF, Markdown, Quarto/Pandoc, MyST, LaTeX, Typst, or a narrower pair?

## Data Analysis, Code, Statistics, And Artifacts

### Code Execution And Analysis Workspace

Status: Early validation
Why it matters: LitRev should support scientific computation where projects require code, datasets, analysis runs, tables, and figures.
Researcher workflow need: Researchers need to run code, inspect results, and connect outputs to the project.
Agent role: Write, run, debug, and explain analysis code within project permissions.
Manual role: Edit code, run analyses, inspect outputs, and reproduce results.
Current-step decision: Needed early if the first vertical slice includes analysis; otherwise soon after evidence/draft.
Mobile role: Later; likely run status and result review, not full coding.
Open questions: What is the first supported runtime: Python via uv only, notebooks, scripts, or both?

### Reactive Analysis Graph And Stale Output Detection

Status: Candidate
Why it matters: Scientific analysis is often a dependency graph, not just a linear notebook transcript.
Researcher workflow need: Researchers need to know when a result, table, or figure is stale because upstream data, code, parameters, or methods changed.
Agent role: Track dependencies between data, code, SQL, analysis steps, outputs, figures, and manuscript claims.
Manual role: Inspect dependency chains, rerun stale analyses, and decide whether outputs remain valid.
Current-step decision: Candidate after basic code execution and captured outputs exist.
Mobile role: Later; likely stale-output notifications and result review.
Open questions: How much marimo-style reactivity is needed before the analysis workspace feels trustworthy?

### Notebook Compatibility

Status: Candidate
Why it matters: Scientists expect Jupyter compatibility even if LitRev should not become a notebook app.
Researcher workflow need: Researchers need to import, run, inspect, or reference notebooks when projects already use them.
Agent role: Read notebooks, execute safe cells or scripts when permitted, extract outputs, and connect them to project artifacts.
Manual role: Open notebook-derived work, review outputs, and decide what becomes durable LitRev analysis state.
Current-step decision: Candidate after the first Python/script analysis path.
Mobile role: Later; result review only.
Open questions: Should first compatibility be notebook import, notebook execution, or notebook-to-script conversion?

### Reproducible Runs And Captured Outputs

Status: Candidate
Why it matters: Analysis outputs should be tied to inputs, code, environment, run history, and manuscript claims.
Researcher workflow need: Researchers need to know which dataset/script/run produced each table, figure, or result.
Agent role: Record run metadata, attach outputs, and connect artifacts to evidence and draft claims.
Manual role: Inspect run history and reproduce or rerun analyses.
Current-step decision: Minimal run capture should accompany code execution.
Mobile role: Later; likely result review and notifications.
Open questions: What run metadata is mandatory in the first version?

### Dataset And Large Artifact Versioning

Status: Candidate
Why it matters: Data, generated figures, reports, and large artifacts need versioning and provenance without forcing users into raw technical tools.
Researcher workflow need: Researchers need to know which dataset or artifact version was used for each analysis, figure, or claim.
Agent role: Track artifact versions, detect changed inputs, and preserve links to outputs.
Manual role: Inspect versions, restore prior artifacts, and decide what should be archived or exported.
Current-step decision: Candidate after local project structure and analysis outputs exist.
Mobile role: Later; review only.
Open questions: Should DVC/DataLad-style ideas be hidden behind LitRev UX, optional power-user integrations, or both?

### Figures, Tables, And Artifacts Manager

Status: Candidate
Why it matters: Figures, tables, generated reports, and other outputs need a durable project home.
Researcher workflow need: Researchers need to create, inspect, revise, cite, and export figures and tables.
Agent role: Generate figures/tables and link them to code, data, and manuscript claims.
Manual role: Review, edit metadata, choose outputs, and place artifacts into the manuscript.
Current-step decision: Candidate after basic analysis and draft workflows.
Mobile role: Later; likely preview, comment, and approve.
Open questions: What artifact types should be first: static images, tables, charts, reports, or datasets?

### Reviewable Proposed Artifacts

Status: Candidate
Why it matters: Agent-created or tool-created outputs should not silently become accepted project truth.
Researcher workflow need: Researchers need proposed evidence records, draft edits, figures, tables, analyses, notes, citations, exports, and source changes to be reviewable before they affect trusted project state.
Agent role: Produce proposed artifacts with provenance, diffs, confidence, dependencies, and suggested next actions.
Manual role: Preview, compare, accept, reject, edit, save as draft, or attach proposed artifacts to the right project object.
Current-step decision: Needed early for any high-impact agent output; the first version can focus on evidence and draft proposals.
Mobile role: Later; approval, rejection, comment, and lightweight preview are strong mobile uses.
Open questions: Which artifact types must be proposed by default, and which can be applied immediately with history?

### Editable Scientific Figures And Visual Planning

Status: Candidate
Why it matters: Scientists need modifiable scientific figures, diagrams, charts, and workflow visuals, not only generated images.
Researcher workflow need: Researchers need to edit figure components, preserve figure provenance, plan diagrams, and connect figures to data, code, evidence, and manuscript claims.
Agent role: Generate figure drafts, update chart data, suggest visual improvements, and preserve source links.
Manual role: Edit figures, adjust visual encodings, annotate diagrams, and approve final artifacts.
Current-step decision: Candidate after the artifact manager exists.
Mobile role: Later; preview/comment/approve.
Open questions: What should be first: charts from data, schematic figures, evidence graphs, protocol diagrams, or analysis-flow canvases?

### Scientific Workflow And Pipeline Execution

Status: Later
Why it matters: Some computational projects need multi-step workflows, pipelines, and reproducible execution beyond a single script or notebook.
Researcher workflow need: Computational researchers may need Snakemake, Nextflow, Galaxy-like workflows, or similar pipeline concepts.
Agent role: Create, run, explain, and debug bounded workflows when permitted.
Manual role: Inspect pipeline steps, inputs, outputs, and failures.
Current-step decision: Later unless the first target user is computational science or bioinformatics.
Mobile role: Later; status and result review.
Open questions: Which workflow systems matter for the first target research community?

### Statistical Methods Assistant

Status: Candidate
Why it matters: Researchers often need help selecting appropriate statistical methods for a project design and dataset.
Researcher workflow need: Researchers need method suggestions tied to question, outcome type, design, assumptions, and available data.
Agent role: Recommend candidate statistical methods, explain assumptions, and warn about limitations.
Manual role: Review and choose methods; document the decision.
Current-step decision: Later than the core project/evidence/draft workflow unless analysis is the first target use case.
Mobile role: Later; likely review and decision approval.
Open questions: What methodological boundaries and disclaimers are required?

## Agent Runtime, Model Routing, Tools, And Skills

### Agent Runtime Adapter For Open-Source Agents

Status: Early validation
Why it matters: LitRev should use agents as workers inside the project without adopting an external agent's data model as the product base.
Researcher workflow need: Researchers need to delegate project work to an agent.
Agent role: Execute tasks using selected OSS executors such as OpenCode, with Codex/Goose as references or alternatives.
Manual role: Start tasks, inspect results, and control permissions.
Current-step decision: Needed early, after or alongside the local project kernel.
Mobile role: Later; likely task status, approval, and notification rather than full task execution first.
Open questions: Which executor is the first integration target, and what tool contract should LitRev expose?

### Model Connections And Task Router

Status: Candidate
Why it matters: Different scientific tasks may require different model strengths, costs, latency, context windows, and tool capabilities.
Researcher workflow need: Researchers need either a smart router that chooses an appropriate model or explicit control over which model to use.
Agent role: Route tasks to the chosen model or user-selected model, preserve routing decisions, and expose failures.
Manual role: Choose router mode or a specific model; manage preferences and overrides.
Current-step decision: A simple explicit model choice can come early; a sophisticated router can come later.
Mobile role: Later; likely task-level model preference and cost/status awareness.
Open questions: What routing criteria should be visible to the user?

### Context Capture And Object-Scoped Agent Work

Status: Early validation
Why it matters: LitRev agents need precise project context from the object or workspace the researcher is using, not vague chat prompts.
Researcher workflow need: Researchers need to send a selected object, claim, source chunk, paper, evidence record, note, draft section, analysis, figure, or current workspace context to an agent.
Agent role: Receive a durable context target, rehydrate the relevant project context locally or through the cloud with access checks, and produce work scoped back to the originating object.
Manual role: Select context from protocol, paper, evidence, note, manuscript, analysis, and figure surfaces; inspect what context was sent; and adjust or remove context before running the task.
Current-step decision: Core early-validation behavior because it defines how agent work stays grounded in LitRev project context.
Mobile role: Later; likely send-to-agent from reading, review, notification, or approval surfaces.
Open questions: What context target types are required first, and what access checks must run before the agent receives rehydrated context?

### Project-Aware Agent Tools

Status: Early validation
Why it matters: Agents should operate on LitRev-owned project objects, not only loose files.
Researcher workflow need: Agent work must become reviewable project progress.
Agent role: Read source, search databases, create evidence, update draft sections, add notes, run analysis, attach artifacts, update citations, and record decisions through project-aware tools.
Manual role: Inspect and edit every agent-created object.
Current-step decision: Needed for agent work to stay product-shaped.
Mobile role: Later; likely approve, reject, or review tool actions.
Open questions: What is the minimum tool set for the first paper-to-evidence-to-draft workflow?

### Agent Task Inbox And Status Queue

Status: Candidate
Why it matters: Delegated work needs a visible operating surface.
Researcher workflow need: Researchers need to see active, queued, completed, failed, blocked, and review-needed tasks.
Agent role: Report progress, blockers, outputs, artifacts, and required approvals.
Manual role: Start, pause, cancel, inspect, retry, and approve tasks.
Current-step decision: A thin version is useful early once agents run tasks.
Mobile role: Yes, later; status, approval, and notification are strong mobile use cases.
Open questions: Which task states are needed in early validation?

### Durable Agent Runs, Events, Checkpoints, And Recovery

Status: Early validation
Why it matters: Agent work should be durable, inspectable, resumable, and recoverable instead of disappearing into chat transcripts or temporary tool logs.
Researcher workflow need: Researchers need to know what an agent was asked to do, what context it used, what actions it took, what it changed, what artifacts it proposed, where it failed, and how to resume or roll back.
Agent role: Record run events, tool calls, checkpoints, proposed artifacts, applied changes, failures, approvals, and recovery points.
Manual role: Inspect run history, compare outputs, resume failed work, approve proposals, retry bounded steps, and restore from checkpoints.
Current-step decision: Needed early for trust if agents can modify evidence, drafts, files, analyses, citations, or project memory.
Mobile role: Later; likely run status, approval requests, failure notifications, and lightweight review.
Open questions: What event granularity is useful to researchers without overwhelming them?

### Built-In Scientific Skills

Status: Candidate
Why it matters: LitRev should support repeatable expert workflows rather than making every task depend on ad hoc prompting.
Researcher workflow need: Researchers need reliable help with literature review, data analysis, figure creation, evidence synthesis, paper drafting, evidence-quality evaluation, journal adaptation, statistical methods, and research mentoring.
Agent role: Use built-in skills for bounded scientific workflows with inspectable outputs.
Manual role: Choose, configure, review, and refine skill outputs.
Current-step decision: Start with a small first set after the agent tool contract exists; do not try to build every skill at once.
Mobile role: Later; likely launch simple tasks, monitor progress, review outputs, and approve changes.
Open questions: Which first skill proves the product best: literature review, evidence extraction, drafting, data analysis, figure making, or citation checking?

### Research Mentoring And PhD Counseling Skill

Status: Idea
Why it matters: Researchers, especially students, may need guidance on project direction, scope, milestones, writing, advisor communication, and academic strategy.
Researcher workflow need: Some users may want project-aware mentoring alongside technical research assistance.
Agent role: Offer advice grounded in the project state and explicit user context.
Manual role: Treat advice as advisory and decide what to act on.
Current-step decision: Later; not part of core early validation.
Mobile role: Later; conversational review and planning may fit mobile.
Open questions: How should the product separate scientific work assistance from personal or academic advising?

## Project Memory And Context

### Inspectable Memory With Trust And Health Metadata

Status: Candidate
Why it matters: LitRev needs durable project memory so agent work stays grounded in the project's question, protocol, source judgments, analysis choices, writing preferences, unresolved questions, and prior decisions.
Researcher workflow need: Researchers need continuity across long projects and many agent/manual work sessions.
Agent role: Recall project context, decisions, preferences, source judgments, prior work, methods, and unresolved questions without inventing state, while exposing memory source, freshness, confidence, and conflict state.
Manual role: Inspect, correct, pin, remove, trust, distrust, merge, and understand memory records and their health.
Current-step decision: A minimal project memory model is likely needed early; a complete memory system is later.
Mobile role: Later; likely quick capture, reminders, review, and project-continuation context.
Open questions: What is the smallest memory model that supports the first workflow without becoming opaque, stale, or over-trusted?

## Identity, Permissions, Sharing, And Collaboration

### Authentication And Account System

Status: Candidate
Why it matters: Cloud mirroring, sharing, collaboration, device identity, and access revocation need real identity.
Researcher workflow need: Researchers need secure access to their own projects and shared projects.
Agent role: Attribute cloud-side and shared-project actions to the correct user/device context.
Manual role: Sign in, manage sessions, recover access, and understand account state.
Current-step decision: Not required for a local-only first proof, but required before serious cloud mirroring and collaboration.
Mobile role: Yes; mobile requires account/session continuity.
Open questions: Should early auth use Supabase Auth, Better Auth, or another provider-portable layer?

### Profiles, Roles, And Multi-User Projects

Status: Candidate
Why it matters: Collaboration needs user identity, project membership, roles, attribution, invitations, and profile-level preferences.
Researcher workflow need: Researchers need to work with collaborators, supervisors, assistants, and project-specific roles.
Agent role: Respect permissions and attribute agent-mediated changes in collaborative projects.
Manual role: Invite collaborators, see who changed what, and manage roles.
Current-step decision: Likely after local project and cloud identity basics; not first local slice.
Mobile role: Yes; likely invitations, notifications, approvals, and lightweight collaboration management.
Open questions: What roles are needed first: owner, editor, reviewer, viewer, or project assistant?

### Shared Project Collaboration

Status: Candidate
Why it matters: LitRev should support excellent shared work on a research project, not just file sync.
Researcher workflow need: Researchers need to co-read, co-edit, comment, review, assign work, resolve questions, and preserve attribution.
Agent role: Work within project permissions and collaborative context.
Manual role: Collaborate on sources, evidence, notes, protocols, drafts, analyses, and reviews.
Current-step decision: Later than local-first foundation, but cloud mirroring should be designed for it from the start.
Mobile role: Yes; review, comments, notifications, approvals, and lightweight edits.
Open questions: Which collaboration actions require real-time editing versus ordinary synced state?

### Open Science Deposit And External Project Integrations

Status: Candidate
Why it matters: Finished research often needs to move into external repositories, drives, institutional systems, or open-science platforms.
Researcher workflow need: Researchers need export, deposit, archive, and sharing paths for datasets, figures, manuscripts, project records, and source packages.
Agent role: Prepare deposit packages, validate metadata, and track export/deposit records.
Manual role: Choose destination, inspect package contents, approve deposit, and preserve records.
Current-step decision: Candidate after export, artifact, and cloud sharing foundations exist.
Mobile role: Later; status/approval only.
Open questions: Which integrations matter first: OSF, Dataverse, Figshare, GitHub/GitLab, Google Drive, institutional repositories, or Zotero groups?

### Mobile Continuation Surface

Status: Candidate
Why it matters: Some research work naturally happens away from the main desktop workspace.
Researcher workflow need: Researchers may need reading, capture, notifications, quick review, approvals, comments, and project awareness on mobile.
Agent role: Surface task status and approval requests to mobile.
Manual role: Continue lightweight work without making mobile a separate source of truth.
Current-step decision: Not first local slice, but every feature should define its mobile role.
Mobile role: This is the mobile product surface.
Open questions: Which mobile actions are read-only, queued, or allowed to mutate shared project state?

## Review, Provenance, Versioning, And Recovery

### Review And History Surface For Agent Changes

Status: Early validation
Why it matters: LitRev must make agent work inspectable, attributable, auditable, and recoverable.
Researcher workflow need: Researchers need to know what changed and recover earlier states.
Agent role: Record proposed and applied changes with enough context to review.
Manual role: Accept, reject, compare, restore, and understand changes.
Current-step decision: Needed early for trust, especially before agents modify evidence or drafts.
Mobile role: Later; likely notifications, approvals, and lightweight review.
Open questions: What needs snapshot protection in early validation: draft edits, evidence records, files, or all high-impact operations?

### Snapshots, Rollback, And Recovery

Status: Early validation
Why it matters: High-impact changes need recovery paths.
Researcher workflow need: Researchers need confidence that agent or manual changes can be reversed or recovered.
Agent role: Create checkpoints before risky work and explain recoverability.
Manual role: Create, inspect, compare, restore, and manage snapshots.
Current-step decision: Needed early for agent trust.
Mobile role: Later; likely inspect and approve restore actions, not perform complex recovery first.
Open questions: Which operations require automatic checkpoints?

### Git Handling For Human-Readable Artifacts

Status: Candidate
Why it matters: Git can provide transparent history for protocols, manuscripts, scripts, exports, and power-user workflows.
Researcher workflow need: Some researchers need version history, diffs, branching, and reproducible artifact history.
Agent role: Commit, diff, branch, and restore human-readable artifacts when permitted.
Manual role: Inspect changes, review diffs, and use Git workflows where appropriate.
Current-step decision: Candidate after basic project artifacts exist; Git should not be required for normal sharing.
Mobile role: Later; likely read-only diff/review.
Open questions: Which project artifacts should be Git-backed first?
