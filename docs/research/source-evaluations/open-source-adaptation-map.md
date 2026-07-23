# Scient Open-Source Adaptation Map

Status: Proposed
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-07-23
Purpose: Maps which open-source systems Scient should study, prototype, adapt, or integrate, and which product boundaries Scient must keep owned.
Doc type: Research evidence

## Document Rules

This document is a cross-source research synthesis. It records what Scient can
learn from external open-source systems, which ideas deserve prototypes, and
which boundaries must stay inside Scient.

This document does not own product truth, accepted architecture, current
implementation, package boundaries, or final dependency choices. Product truth
belongs in `docs/product/`. Accepted stack direction belongs in
`docs/architecture/`. Hard-to-reverse decisions belong in
`docs/architecture/decisions/`.

### Update Policy

Update this document when a source evaluation, prototype, license review, or
explicit product/architecture decision materially changes what Scient should
adapt, avoid, or prove next.

When a recommendation becomes accepted architecture, promote it into the relevant
architecture document or ADR. This file should remain the research trail, not
the canonical decision record.

## Evidence State

This is a synthesis document, not a finished per-source evaluation.

Current inputs:

- Yaacov's product notes and collected model-answer research.
- Scient's documentation policy, product documents, and proposed architecture
  direction as of 2026-07-07.
- Related scientific-tool landscape and architecture-scorecard research.
- Focused data-analysis and figure-tool source scan on 2026-06-27.
- Focused desktop-base and science-app source scan on 2026-07-07, covering
  Synara, Zotero-family components, Paperlib, Tropy, Zettlr, Overleaf,
  JupyterLab Desktop, Stencila, ELN/RDM tools, local-first knowledge apps, and
  CoCalc.
- The accepted foundation decision in
  `../../architecture/decisions/ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md`:
  use the owned Synara-derived source initially; build Scient as the owned
  OpenCode-derived first-party agent; preserve external OpenCode separately;
  and keep Scient's scientific meaning, agent boundary, provenance, and review
  model owned.
- Current planning discussion that upstream-trackable tools, thin forks,
  divergent forks, reference sources, projections, adapters, and export targets
  need different update strategies.
- Focused Lacuna scan on 2026-07-09, using the arXiv paper
  [Lacuna: A Research Map for Machine Learning](https://arxiv.org/html/2606.26246v1)
  and live site as a research-map reference for literature search, synthesis, and
  agent-readable paper-grounded intermediate objects.
- Targeted T3 Code inspection through revision
  `bf76535fe4da71d8de7b8bd5ffa0d2086b7af8d0` on 2026-07-18, with
  accepted, deferred, and rejected dispositions recorded in
  [`t3-code-targeted-review-2026-07-18.md`](../../../lab/notes/t3-code-targeted-review-2026-07-18.md).
- Focused collaboration and organization scan on 2026-07-23, covering
  scientific project and review systems, local-first and real-time engines,
  relationship-based authorization, research identity and affiliation,
  institution provisioning standards, and versioned scientific data.

Remaining evidence gaps before architecture promotion:

- complete source links for each evaluated project where not already listed
  below
- inspected repository paths or commit SHAs where claims depend on code
- license notes, especially for AGPL or source-available projects
- source-specific inspection dates
- benchmark or prototype results for contested choices

Rows marked as "needs review", "candidate", "side shelf", or "prototype" are
not decisions.

Confidence labels in this document are prioritization labels, not proof of
source quality. They should be replaced with source-backed evaluations once
links, inspected revisions, licenses, and prototype results exist.

## Promotion Path

- validated source findings stay in `docs/research/source-evaluations/`
- prototype results go in `docs/research/spike-reports/`
- accepted stack direction goes in `docs/architecture/technology-stack.md`
- accepted runtime, sync, collaboration, security, and project-format designs go
  in their matching `docs/architecture/*.md` documents
- serious hard-to-reverse choices get an ADR under `docs/architecture/decisions/`

Open-source adaptation here means study, prototype, adapt, fork narrowly,
integrate, or use as a reference. It does not mean adopting another product's
domain model as Scient's core, or copying code without a license review.

The main rule is:

> Scient owns the scientific product core. Open-source projects provide proven
> mechanisms around that core.

## Adaptation Modes

Use these labels when mapping external sources to Scient work. They are planning
and research labels, not accepted architecture.

| Mode | Meaning | Guardrail |
|---|---|---|
| Scient-owned core | Scient defines the durable product object, permission boundary, or scientific truth. | This cannot be delegated to an external app, engine, database, editor, or agent. |
| Upstream-trackable integration | Scient keeps the upstream tool mostly intact and integrates through configuration, SDK, CLI, plugin, API, sidecar, wrapper, or adapter. | Upstream updates should usually be possible through version bumps plus adapter fixes. |
| Add-on layer | Scient builds prompts, plugins, wrappers, adapters, UI panels, metadata capture, or commands around a tool without changing its core. | The upstream tool should remain recognizable and updateable. |
| Forked workbench prototype | Scient uses a fork of an existing app to move faster on shell, UI, orchestration, terminals, diffs, provider sessions, or local process management. | This is a workbench-specific use of thin fork or divergent fork. It must not own the Scient scientific model. |
| Embedded engine | Scient calls an external tool through a CLI, SDK, local service, or sidecar. | Raw engine state is preserved for inspection, but accepted changes write back through Scient-owned objects and permissions. |
| Adapter | Scient imports, exports, syncs, or reconciles with another tool or format. | The adapter translates between systems; it does not make the external format canonical. |
| Projection | Scient renders or edits a Scient object through an editor, notebook, chart, CRDT, export AST, or runtime-specific representation. | The projection can be regenerated or reconciled from Scient state. |
| Thin fork | Scient changes a small, isolated integration seam in an upstream project. | The fork should stay close enough to upstream that merging updates remains realistic. |
| Divergent fork | Scient materially changes the upstream project's product assumptions, architecture, data model, or UX. | Upstream updates are no longer directly mergeable; future upstream work becomes cherry-pick material. |
| Reference / cherry-pick source | Scient studies workflows, UX, architecture patterns, or code and manually adapts selected ideas. | No dependency or clean update path is expected. |
| Export target | Scient generates files, packages, deposits, or publication artifacts from Scient state. | Exported output is not project truth. |
| Compatibility target | Scient must cooperate with this tool or format because researchers already use it. | Compatibility does not mean adopting the external tool's product model. |
| Deferred shelf | A source is valuable but not needed for the first coherent product slice. | Keep it visible without expanding the first build. |
| Avoid / do not adopt | A source or pattern is worth knowing about but should not shape Scient's architecture. | Usually because it would pull Scient away from the scientific project center. |

### Update Strategy Labels

Use these labels with source rows when the update path matters:

| Update strategy | Meaning |
|---|---|
| `no-upstream` | Scient owns this part. There is no external project to update from. |
| `version-bump` | The source can usually be updated directly, with normal dependency testing. |
| `adapter-maintained` | Update upstream, then repair or validate the Scient adapter. |
| `thin-fork-merge` | Keep the fork close enough to upstream that regular merges remain plausible. |
| `divergent-cherry-pick` | Upstream updates cannot be merged directly; inspect and adapt useful changes manually. |
| `reference-only` | No dependency or fork; watch for ideas and patterns. |
| `deferred` | No active update work now. |

## Global Fork And Borrow Strategy

The accepted foundation direction is more aggressive than "study only", but
still Scient-boundary-first:

1. Use the owned Synara-derived source as the initial application foundation because it
   materially accelerates the desktop shell, chat, terminal, diff,
   provider-session, and local-process surfaces.
2. Pressure-test that foundation through the first science-facing slice while
   keeping Scient's project state, agent gateway, source/evidence meaning, and
   review model outside Synara's coding assumptions.
3. Treat science apps as specialized sources, not desktop bases: Zotero-family
   tools for sources and PDFs, Zettlr/Overleaf/Quarto/MyST for writing/export
   expectations, Jupyter-style tools for analysis compatibility, and ELN/RDM
   tools for protocol/lab/repository references.
4. Use the owned OpenCode-derived source as the foundation for Scient, Scient's
   first-party agent. Scient is the resulting owned agent, not a shell over a
   separate OpenCode engine. Preserve external OpenCode as an independent
   external agent. Keep Goose as a deferred source of capabilities and
   architecture lessons after the first Scient gateway exists.
5. Use standalone Scient-owned repositories as the writable source remotes, while preferring
   upstream binaries, SDKs, CLIs, configuration, sidecars, adapters, and
   extensions over core modifications. Owned source may remain upstream-
   aligned. Use divergent core changes only when Scient intentionally takes
   ownership of a modified product surface and accepts cherry-pick updates.
6. Normalize Scient and external agents through a Scient-owned Agent Gateway: scoped context,
   permissions, approvals, file actions, tool calls, diffs, artifacts, errors,
   checkpoints, and final write-back.
7. Preserve raw upstream logs as runtime evidence, but store accepted scientific
   work as Scient project objects.
8. Re-evaluate any fork once the first vertical scientific workflow works. If the
   fork's product assumptions fight Scient's project model, keep only the useful
   parts and move toward a more Scient-owned shell.

The matching build strategy is started in
`docs/planning/open-source-adaptation-build-strategy.md`. This source map remains
the research trail, not the build plan or final architecture decision.

## Truth Boundary

Scient should have one canonical scientific model. Everything external attaches
to it as an adapter, engine, projection, or export artifact.

| Boundary | Meaning | Examples |
|---|---|---|
| Canonical Scient model | The durable project truth. | Project, Paper, SourceChunk, Claim, EvidenceLink, ScreeningDecision, Dataset, Analysis, Figure, Manuscript, AgentAction, Provenance. |
| Engine adapter state | Runtime-specific state that can be cached, inspected, and rebuilt from the Scient model. | PaperQA context stores, ASReview screening DBs, GROBID/Docling extraction outputs, executor session metadata. |
| Editor projection | State used to render and edit a manuscript, not the manuscript truth itself. | Tiptap JSON, Plate/Slate state, Lexical state, Yjs document state. |
| Export artifact | A generated package or file derived from the Scient model. | Quarto project, Pandoc AST, MyST document, LaTeX/Typst output, Word export, JATS export. |
| Agent runtime log | A replayable history of tool calls, approvals, diffs, errors, checkpoints, and artifacts. | Goose sessions, Codex sessions, OpenCode sessions, Scient execution-run records. |

This boundary prevents a common architecture mistake: letting the most convenient
tool format quietly become the product truth.

## Scient-Owned Core

These pieces should not be copied from any external project. They are the product
itself.

| Core area | What Scient must own | Why this cannot be outsourced |
|---|---|---|
| Scientific project graph | Projects, questions, searches, papers, source chunks, claims, evidence links, protocols, datasets, analyses, figures, manuscripts, citations, reviews, agent actions, provenance, exports. | No existing source has the full research lifecycle as one connected object model. This is the thing that makes Scient Scient. |
| Evidence model | A claim can link to exact paper regions, extracted values, screening decisions, analyses, and manuscript assertions. | Generic RAG, PDF extraction, and reference managers do not enforce scientific traceability deeply enough. |
| Local project contract | A project is a real folder with readable files, local structured state, snapshot/artifact versioning that may be Git-backed, exports, datasets, figures, and logs. | This is the trust and durability spine. It must be designed around scientists, not around a generic coding repo or cloud database. |
| Agent work contract | Every meaningful agent change has permissions, logs, diffs, provenance, rollback, and an explanation tied to project evidence. | Coding agents have useful mechanics, but they do not understand scientific accountability by default. |
| Scientific memory | Project memory remembers protocol decisions, evidence judgments, extraction choices, writing preferences, analysis decisions, collaborator choices, and prior agent work. | Memory needs scientific semantics, not only conversation recall. |
| Research cockpit UI | The UI exposes the project graph through workspaces: library, protocol, evidence, draft, analysis, figures, memory, runs, and sharing. | A generic chat app, IDE, ELN, notebook, or paper library would make the product center wrong. |

## PRD Surface Adaptation Map

This map connects the accepted PRD surfaces to the strongest source candidates
identified so far. It is a working recommendation, not a final dependency list.

| PRD surface | Best source candidates so far | Current borrow mode | Scient-owned boundary |
|---|---|---|---|
| Project Home | Synara and T3 Code for workbench status, sessions, terminals, branches, diffs, previews, and provider activity; Vercel AI Elements for inspectable agent UI patterns. | Forked workbench prototype and reference. | Project status, stale-output signals, review needs, blocked work, collaborator activity, and next actions belong to Scient project state. |
| Scient And Connected-Agent Chat | Synara-derived source for the multi-agent workspace shell; the owned OpenCode-derived source as Scient's agent foundation; external OpenCode and other inherited adapters as separate external choices; Goose for later capability and architecture study; Codex for safety and approval reference; Vercel AI SDK for typed model/tool streams. | Inherited workbench, owned OpenCode-derived agent, external-agent adapters, and references. | Scient identity, context receipts, permissions, tool scope, proposed changes, durable AgentRun records, checkpoints, and accepted write-back belong to Scient. |
| Project Direction And Protocol | protocols.io, SciNote, RSpace, eLabFTW, Chemotion, Kadi4Mat, and openBIS as protocol, ELN, lab workflow, and research-data-management references. | Reference and later adapter candidates. | The project direction, protocol fields, eligibility criteria, analysis plan, and decision log are Scient objects. |
| Source Library And Reader | Zotero, Zotero Reader, Zotero Document Worker, Paperlib, Tropy, JabRef, CSL, GROBID, Docling, and local-first note/PDF references such as Logseq and SiYuan. | Adapter, component spike, embedded parser, compatibility target, and reference. | Source identity, duplicate confidence, source-region links, parser state, annotations, backlinks, and citation intent belong to Scient. |
| Evidence Ledger And Claims | ASReview for screening mechanics; GROBID and Docling for extraction; PaperQA for cited scientific QA; Lacuna for paper-grounded research-map patterns; Elicit, Rayyan, Covidence, scite, Consensus, and SciSpace as workflow references. | Embedded engines, adapters, and references. | Evidence records, claims, support links, extraction review state, uncertainty, contradictions, and unsupported-claim diagnostics belong to Scient. |
| Synthesis Surface | PaperQA for grounded answer mechanics; Lacuna for map-grounded literature search and survey synthesis; Elicit, Consensus, SciSpace, and scite for answer and evidence UX references. | Embedded engine and reference. | Synthesis becomes durable only when saved into Scient notes, evidence, claims, decisions, or draft material. |
| Draft And Manuscript Workspace | Tiptap/ProseMirror first; Plate and Lexical as challengers; Zettlr, Overleaf, Word, and Google Docs as academic writing and collaboration references; Quarto/Pandoc/MyST/Manubot for export and publishing paths. | Projection, challenger prototype, reference, and export adapter. | Manuscript structure, citations, evidence links, comments, suggestions, reconciliation state, and publication metadata belong to Scient. |
| Data And Analysis Workbench | Python through uv; marimo as reactive-notebook reference; Jupyter/JupyterLab Desktop, RStudio/Positron, and CoCalc as analysis-workbench references; DuckDB, pandas, Polars, Arrow/Parquet, SciPy, statsmodels, scikit-learn, and later R/tidyverse. | Embedded runtime, projection, compatibility target, and reference. | Dataset, Analysis, AnalysisRun, parameters, method notes, outputs, dependency state, staleness, and provenance belong to Scient. |
| Figures, Tables, And Artifacts | Matplotlib/seaborn, Plotly, Altair/Vega-Lite, Great Tables/gt, Mermaid, Graphviz, Cytoscape.js, tldraw, Excalidraw, xyflow, Inkscape, diagrams.net, and BioIcons. | Runtime projection, artifact generator, and reference. | Figure, Table, Artifact, caption, data/code linkage, manuscript usage, review state, and stale-output state belong to Scient. |
| Agent Runs And Review | Scient's OpenCode-derived source foundation, external OpenCode and other agents, Goose, Codex, Synara, T3 Code, and Vercel AI SDK/Elements. | Owned agent source, external-agent adapters, forked workbench prototype, and references. | AgentRun lifecycle, approvals, diffs, logs, artifacts, failures, retries, cancellation, checkpoints, and recovery belong to Scient. |
| Memory, History, And Decisions | Earlier PapiLab prototype patterns, Stencila provenance ideas, Goose/Codex/OpenCode runtime logs, AFFiNE/Logseq/SiYuan knowledge-workspace patterns, and targeted Hermes ideas. | Reference and normalized runtime evidence. | Scientific memory, decision history, trust metadata, provenance, snapshots, rollback, and auditability belong to Scient. |
| Collaboration And Mobile Continuation | Yjs/Hocuspocus for document collaboration; Automerge, ShareDB, and Yorkie as bounded challengers; a server-authoritative operation log and narrowly scoped database replication as separate structured-state approaches; Electric as a read-path candidate; PowerSync only after service-license and operations review; OSF, Dataverse, GitHub, and GitLab for sharing/deposit expectations. | Candidate engine, adapter, and reference. | Membership, roles, permissions, attribution, conflict state, accepted scientific operations, cloud mirror authority, mobile action scope, and recovery belong to Scient. |
| Settings, Integrations, And Export | Zotero/JabRef/CSL, Quarto/Pandoc/MyST, Typst/LaTeX/Overleaf, OSF, Dataverse, GitHub, GitLab, object storage, and cloud-drive style integrations. | Adapter and export target. | Project configuration, integration state, export/deposit records, portability receipts, and fidelity reports belong to Scient. |

## Source Relationship Classification

This table applies the current adaptation vocabulary to the source set. It is a
planning map, not an accepted dependency list by itself. Where a row reflects
ADR-0001, that ADR remains the decision authority.

| Source / thing | What Scient takes | Relationship mode | Update strategy |
|---|---|---|---|
| Scient scientific project graph | Projects, sources, evidence, claims, datasets, runs, figures, manuscripts, memory, provenance. | Scient-owned core | `no-upstream` |
| Scient agent contract | Permissions, context receipts, proposed changes, review, recovery. | Scient-owned core | `no-upstream` |
| Synara | Desktop workbench, chat shell, terminals, diffs, sessions, provider/workflow UI. | Accepted initial application foundation through ADR-0001. Keep changes isolated where useful; allow deliberate divergence when Scient owns the surface. | `thin-fork-merge`; move deliberately to `divergent-cherry-pick` if deeply reshaped |
| OpenCode source fork | Local file read/write, shell, code edits, patches, sessions, and possibly subagents as the inherited source foundation for Scient. | Accepted source foundation for Scient through ADR-0001. Inherited core remains internally traceable, but Scient is the owned agent product. External OpenCode remains a separate external adapter path. | `adapter-maintained` initially; allow narrow, identifiable core changes and deliberate divergence for proven Scient needs |
| Goose | Broader local automation, ACP agent/server, recipes, MCP extensions, scheduling, and subagents. | Deferred capability and architecture source for Scient after the first Scient gateway. A future external Goose agent would require a separate decision. | `deferred`; later `reference-only`, `adapter-maintained`, or selective adaptation based on evidence |
| Codex app-server | Sandbox, approvals, diffs, rollback, interrupt/resume ideas. | Reference / cherry-pick source. | `reference-only` |
| T3 Code | Backend lifecycle, provider-instance separation, preview/process patterns. | Reference / cherry-pick source. | `reference-only` |
| Aider | Git/edit discipline, repo-map and patch workflow lessons. | Reference benchmark. | `reference-only` |
| Vercel AI SDK | Typed model/tool streams and model/tool UI event flow. | Upstream-trackable integration, adapter. | `version-bump` or `adapter-maintained` |
| Vercel AI Elements | Agent UI cards and inspection patterns. | Add-on layer or reference. | `version-bump` if used |
| Tiptap / ProseMirror | Main manuscript editor substrate, custom nodes, evidence/citation nodes. | Upstream-trackable integration, projection, add-on layer. | `adapter-maintained`; thin fork only if forced |
| Plate | Editor challenger, comments/suggestions/docx/AI UX. | Projection and reference. | `reference-only` unless it wins |
| Lexical | Editor challenger for performance and accessibility. | Projection and reference. | `reference-only` unless it wins |
| Overleaf | LaTeX academic workflow, compile logs, collaboration expectations. | Reference, compatibility target, export target. | `reference-only`; no fork |
| Zettlr | Academic Markdown writing, citation workflow, Pandoc-based export, local-file writing UX. | Reference, export-path inspiration, compatibility expectation. | `reference-only`; no fork |
| Word / Google Docs | Comments, track changes, manuscript exchange expectations. | Compatibility target. | `adapter-maintained`; export/import only |
| Zotero | Import/export, translators, collections, PDF/annotation expectations. | Adapter and compatibility target. | `adapter-maintained`; do not fork product |
| Zotero Reader | PDF/EPUB/HTML reading and annotation UX, source-region navigation, annotation-to-note behavior. | Component spike, reference, possible upstream-trackable integration after license/source review. | `adapter-maintained` if embedded; otherwise `reference-only` |
| Zotero Document Worker | PDF annotation processing, PDF text extraction/rendering, structured extraction from PDFs/EPUBs/HTML snapshots. | Component spike, embedded worker candidate, parser reference. | `adapter-maintained` if embedded; otherwise `reference-only` |
| Paperlib | Modern academic paper manager UX, metadata scraping, full-text search, paper notes, LLM paper features, writing integration. | Reference and possible adapter ideas; no base fork. | `reference-only` first; license review before copying code |
| Tropy | Research-source/photo item modeling, metadata templates, annotation/transcription UX, SQLite/plugin/export patterns. | Reference, source-detail UX inspiration, possible later adapter. | `reference-only`; no fork first |
| JabRef | BibTeX/BibLaTeX correctness and local citation-key discipline. | Reference and compatibility target. | `reference-only` first |
| CSL | Citation rendering and styles. | Upstream-trackable integration, embedded library, adapter. | `version-bump` |
| GROBID | Scholarly PDF structure, citations, coordinates. | Embedded engine and adapter. | `adapter-maintained` |
| Docling | General document conversion and provenance. | Embedded engine and adapter. | `adapter-maintained` |
| Marker | PDF-to-Markdown benchmark or fallback. | Deferred shelf and reference. | `reference-only` |
| PaperQA | Grounded scientific QA over sources. | Embedded engine and adapter. | `adapter-maintained` |
| Lacuna | Paper-grounded research map, concept elements, research directions, cleaned `/md` pages, MCP-facing schema, and evaluated literature-search/deep-research workflow. | Reference / cherry-pick source; possible search-map prototype input. | `reference-only` first |
| ASReview | Screening engine and active-learning workflow. | Embedded engine and adapter. | `adapter-maintained` |
| Elicit / Rayyan / Covidence / scite / Consensus / SciSpace | Evidence UX and workflow patterns. | Reference, with possible compatibility targets later. | `reference-only` |
| protocols.io | Protocol authoring, versionable methods, public protocol/deposit expectations. | Reference and later compatibility target. | `deferred` |
| eLabFTW | ELN experiments, protocols, inventory/resources, audit/signature expectations, permissions, API and `.eln` ecosystem awareness. | Reference and possible later adapter. | `deferred`; no core fork |
| SciNote | Life-science ELN workflow, experimental-data organization, Docker/Rails deployment lessons. | Reference and possible later adapter. | `deferred`; no core fork |
| RSpace | Research orchestrator/ELN/sample-management patterns, FAIR workflow and PID/repository integration expectations. | Reference and possible later adapter. | `deferred`; no core fork |
| Chemotion / Kadi4Mat / openBIS | Domain ELN/RDM workflows for chemistry, materials science, FAIR data, repository and instrument/workflow linkage. | Deferred reference and future domain adapters. | `deferred`; no first-core adoption |
| Quarto / Pandoc | Export pipeline, citations, crossrefs, Word/PDF/HTML/LaTeX paths. | Embedded export engine and adapter. | `adapter-maintained` |
| MyST | Challenger scientific publishing/export path. | Export target and adapter. | challenger; `adapter-maintained` if selected |
| Typst / LaTeX | Final typesetting outputs. | Export target. | `adapter-maintained`; export only |
| Manubot | Git-backed manuscript automation ideas. | Reference / cherry-pick source. | `reference-only` |
| Stencila | Semantic scientific document and provenance ideas. | Reference / cherry-pick source. | `reference-only`; no adoption unless later ADR |
| AFFiNE | Local-first docs, canvas, tables, whiteboard/document fusion, collaboration and block-workspace ideas. | Reference for workspace/canvas UX; no desktop base. | `reference-only` |
| Logseq | Local-first knowledge graph, Markdown/Org notes, backlinks, PDF annotation, task/knowledge workflows. | Reference for notes, backlinks, and annotation-to-knowledge flows. | `reference-only`; no fork |
| SiYuan | Block-level references, Markdown WYSIWYG, PDF annotation links, export formats, local/self-hosted knowledge base patterns. | Reference for block references, notes, and local-first knowledge UX. | `reference-only`; no fork |
| Python / uv | Scientific runtime. | Embedded runtime. | `version-bump` |
| marimo | Reactive analysis UX, dependency DAG, stale-state ideas. | Reference and projection candidate. | `reference-only`; no fork first |
| Jupyter / `.ipynb` | Notebook compatibility, import, export. | Compatibility target, adapter, projection. | `adapter-maintained` |
| JupyterLab Desktop | Notebook/file/session desktop UX and compatibility expectations. | Reference only; not a base. | `reference-only`; avoid dependency until maintenance/security posture is re-evaluated |
| RStudio / Positron | Data-science IDE layout, variable/data viewers, Quarto/R Markdown expectations, AI/data-assistant patterns. | Reference and compatibility expectation. | `reference-only`; no fork |
| CoCalc | Scientific collaboration mix: Jupyter, LaTeX, terminal, whiteboard, time travel, chatrooms. | Reference only because its source is under MS-RSL, not a normal open-source reuse license. | `reference-only`; no fork |
| DuckDB | Local analytical SQL engine. | Embedded engine. | `version-bump` or `adapter-maintained` |
| pandas / Polars | DataFrame execution. | Embedded runtime libraries. | `version-bump` |
| Arrow / Parquet | Tabular artifact and interchange formats. | Compatibility target and artifact target. | `adapter-maintained`; stable format |
| SciPy / statsmodels / scikit-learn | Scientific and statistical methods. | Embedded runtime libraries. | `version-bump` |
| R / tidyverse / ggplot2 | Collaborator/runtime compatibility and figure grammar reference. | Deferred compatibility target. | `deferred` |
| Ibis / DVC / DataLad | Portability and data versioning. | Deferred adapter and reference. | `deferred` |
| Snakemake / Nextflow / Galaxy / Renku | Pipeline workflow expansion. | Deferred shelf. | `deferred` |
| jamovi / JASP / PSPP / Orange | Statistics and no-code UX lessons. | Reference and deferred shelf. | `reference-only`; no fork |
| Matplotlib / seaborn | Static publication figures. | Embedded figure engine and projection. | `version-bump` |
| Plotly | Interactive charts. | Projection and embedded chart runtime. | `version-bump` |
| Altair / Vega-Lite | Editable declarative chart specs. | Projection and spec target. | `version-bump` |
| Great Tables / gt | Publication tables. | Embedded output engine and projection. | `version-bump` |
| Mermaid / Graphviz / Cytoscape.js | Diagrams and graphs. | Embedded output engine and projection. | `version-bump` |
| tldraw / Excalidraw / xyflow | Canvas and flow UI components. | Add-on layer and projection; possible thin fork if needed. | `version-bump` first; `thin-fork-merge` only if needed |
| Inkscape / diagrams.net / BioIcons | Figure polish and scientific icons. | Compatibility target, reference, export target. | `reference-only`; no fork |
| napari / Fiji / ImageJ / CellProfiler / QuPath | Bioimage workflows. | Deferred domain adapters. | `deferred` |
| RDKit / Mol* / 3Dmol.js / Biopython | Chemistry and bio domain tools. | Deferred embedded engines. | `deferred` |
| Streamlit / Dash / Shiny / Gradio | Shareable analysis app patterns. | Reference and export inspiration. | `reference-only`; no fork |
| BioRender / GraphPad Prism / OriginPro | Commercial UX expectations. | Reference only. | `reference-only`; no code |
| Yjs / Hocuspocus | Realtime document collaboration. | Upstream-trackable integration, projection, collaboration engine. | `adapter-maintained` |
| Yorkie | CRDT challenger. | Deferred challenger. | `deferred`; prototype only |
| Electric | Structured read-model replication candidate, not a complete bidirectional project-sync answer. | Prototype behind a Scient-owned adapter only if the read path matches a concrete slice. | `deferred`; conflict harness, write-path design, then ADR |
| PowerSync | Local SQLite synchronization candidate with separate client and service licensing considerations. | Prototype only after service-license, hosting, authorization, and recovery review. | `deferred`; license/operations review, conflict harness, then ADR |
| TinyBase / RxDB / cr-sqlite | Sync fallback/reference set. | Deferred challenger. | `deferred` |
| OSF / Dataverse | Sharing and deposit. | Adapter, export target, compatibility target. | `adapter-maintained` |
| GitHub / GitLab | Optional remote, versioning, review path. | Adapter and compatibility target. | `adapter-maintained` |
| OpenAlex / Semantic Scholar / Crossref / PubMed / arXiv / Unpaywall / OpenCitations | Scholarly discovery and source metadata. | Adapter and search connectors. | `adapter-maintained` |
| Benchling / LabArchives / Labfolder / Labguru | Lab and ELN expectations. | Deferred reference. | `deferred`; avoid first core |
| LangGraph | Long-running workflow ideas. | Deferred reference. | `deferred`; no core adoption |
| Tauri / Rust shell | Possible future shell or native services. | Deferred platform candidate. | `deferred`; revisit only after a real blocker |

## Primary Sources For Prototypes

These are sources likely to shape architecture prototypes. This research map
does not set their implementation order; the active sequence lives in
`../../planning/product-roadmap.md` and its linked implementation plan.

### Scient And Connected-Agent Sources

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Goose | ACP over stdio or authenticated HTTP/WebSocket, persistent sessions, recipes, scheduling, MCP extensions, provider registry, safety inspectors, hooks, and subagents. | Goose is a strong source of broader-agent capabilities and architecture lessons that may later improve Scient. Current ACP supports streaming, permission requests, cancellation, client-provided file/terminal capabilities, and session lifecycle. | Do not make Goose the product center, turn Scient into an engine-switching shell, or make Goose session state canonical. Do not rely on its working directory as a filesystem sandbox: built-in developer tools accept absolute paths, and autonomous mode is the default. | Source-depth review completed at `3c1fdd692`; implementation work is deferred until after the first Scient gateway works through Scient. |
| OpenCode | File/shell/edit agent behavior, LSP/code-project operations, snapshots, session protocol, CLI/TUI/server/client split, and plugin/tool architecture. | The standalone owned source is Scient's agent foundation. Scient needs these capabilities and intends to own and evolve the resulting agent. | Do not expose Scient as “OpenCode for science,” treat OpenCode as a second engine underneath Scient, or let agent state define the scientific object graph. External OpenCode remains a separate external agent. | Owned-source build and Synara compatibility smoke completed in historical Gate 1.5 work. ADR-0001 accepts Scient as the owned OpenCode-derived first-party agent; ADR-0002 owns repository authority; the first vertical slice must implement and validate that identity and boundary. |
| Codex app-server | Approval protocol, sandbox model, diff flow, interrupt/rollback/session protocol, file API, skills/MCP, Rust daemon boundary. | Useful comparator for what a trusted local executor and approval model can feel like. | Do not depend on Codex-specific assumptions as the only runtime path. | Needs direct harness comparison against OpenCode. |
| Aider | Git-centered edit discipline, repo maps, patch workflow, simple terminal ergonomics. | Useful as a benchmark for file changes and rollback, even if not the main architecture. | Do not make the app Python-first or terminal-first because Aider is good. | Side benchmark, not primary source. |

Recommendation: build Scient from the owned OpenCode source foundation and
defer Goose work until the Scient gateway works through Scient. Use a bounded
`goose acp` comparison later when it helps evaluate capabilities or architecture;
do not use that experiment to redefine Scient as an engine-switching shell. The
old `goosed` REST surface was removed upstream, and authenticated `goose serve`
is relevant only to a separately reviewed process or external-agent path.

### Desktop Shell, Backend Lifecycle, And Provider Abstraction

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| T3 Code | Bounded reliability fixes now; provider-instance separation as design evidence for execution targets above `ProviderKind`; lifecycle and diagnostics patterns only when a concrete trigger appears. | Supplies proven implementation details and comparison evidence without becoming Scient's product architecture. | Do not inherit coding-product assumptions, broad runtime alignment, mobile/cloud surfaces, or speculative remote infrastructure. | Targeted review completed through `bf76535fe4da71d8de7b8bd5ffa0d2086b7af8d0` on 2026-07-18. Three reliability fixes were accepted, snapshot startup was characterized, browser socket isolation was proven and fixed, and all larger ideas were explicitly deferred or rejected. |
| Synara | Orchestration, UI/provider adapters, Effect server ideas, event-sourced orchestration, desktop/web split, worktree/Git flows. | Useful for building a reliable agent workspace that can explain what happened. | Do not copy its UI shape blindly; Scient needs a research cockpit. | Accepted initial application foundation through ADR-0001; scientific-product fit still needs pressure testing. |
| Vercel AI SDK | Model/provider abstraction, typed stream parts, tool-call state, approval status, UI message events, mock providers, and model I/O tests. | Useful for model plumbing and chat/event surfaces around Scient-owned actions. | Do not use it as the abstraction over local executors like OpenCode or Codex. Executor actions need a Scient-owned contract. | Candidate model I/O layer; needs a narrow harness prototype. |
| Vercel AI Elements | Tool cards, source citations, confirmations, terminal output, file trees, artifacts, plans, queue state. | Useful UI pieces for agent work inspection. | Do not let it make Scient a generic chat surface. | Side UI pattern source. |

Recommendation: keep Synara as the owned application foundation and use T3 Code
only as a trigger-driven donor. The completed T3 review does not create an
ongoing upstream-monitoring obligation. Provider-instance patterns may inform
the already-planned execution-target contract, while scientific navigation,
canonical state, provenance, review, and recovery remain Scient-owned.

### Desktop Base And Science-App Candidates

The 2026-07-07 desktop/science-app scan did not find a better first desktop
base than Synara. The science apps are still valuable, but mostly as specialized
source-library, reader, writing, analysis, protocol, and research-object
references around a Scient-owned project kernel.

| Source | Adaptation target | Why it matters | Do not adopt | Current use |
|---|---|---|---|---|
| Synara | Initial desktop application foundation: chat, provider sessions, terminals, previews, diffs, local process/workspace flow. | It already concentrates the workbench machinery Scient would otherwise have to build before testing the scientific workflow. | Do not let Synara's coding sessions, Git worktrees, or provider chats become the Scient project model. | Accepted through ADR-0001; the first scientific slice must validate product fit and identify justified divergence. |
| Zotero | Reference manager compatibility, library import/export, source identity, citations, PDF/annotation expectations. | Researchers already trust Zotero, and Scient cannot treat source/citation work as an afterthought. | Do not fork the full Zotero desktop app or rebuild Zotero first. | Adapter and compatibility target. |
| Zotero Reader / Zotero Document Worker | PDF/EPUB/HTML reading, annotations, source-region navigation, annotation processing, text extraction and rendering. | Source-region fidelity is central to Scient's evidence model; these components are closer to the needed reader/parser behavior than generic PDF viewers. | Do not make Zotero's reader or worker state canonical Scient state. | Component spike and reference after source-depth/license review. |
| Paperlib | Modern paper-library UI, metadata scraping, full-text search, paper notes, LLM paper features, writing integration. | It is a good challenge to older reference-manager UX and is close to "paper library for active writing." | Do not make Scient only a paper manager or copy GPL code without review. | Reference and possible adapter ideas. |
| Tropy | Research-source object modeling, custom metadata templates, annotation/transcription UX, SQLite, plugins, export. | It thinks in research objects rather than only files, which is useful for source detail surfaces. | Do not turn Scient into a photo/archive manager. | Reference for source/detail metadata UX. |
| Zettlr | Local academic writing, citation workflows, Pandoc export, Markdown/math/Mermaid rendering, journal submission profiles. | It shows how a local-first academic writing surface can stay file-oriented and export-friendly. | Do not make raw Markdown the only authoring UX. | Reference and export/workflow benchmark. |
| Overleaf | Collaborative LaTeX, templates, compile logs, academic expectations. | It remains the academic writing benchmark for LaTeX-heavy users. | Do not fork it as the desktop base; it is server/web-shaped and LaTeX-first. | Reference, compatibility target, export target. |
| JupyterLab Desktop | Notebook opening, file/session behavior, notebook compatibility. | Useful for analysis compatibility and desktop analysis expectations. | Do not base Scient on it; maintenance/security posture must be rechecked before any dependency. | Reference only. |
| Stencila | Scientific document schemas, executable-document and provenance ideas, LLM-aware document direction. | It is one of the few science-native systems thinking seriously about semantic documents plus agent/LLM authorship. | Do not adopt its schema as Scient truth without an ADR. | Deep reference. |
| eLabFTW / SciNote / RSpace / Chemotion / Kadi4Mat / openBIS | ELN, protocol, inventory, FAIR/RDM, repository, audit, and lab workflow expectations. | These show what scientific-traceability and institutional research-data workflows require outside pure literature review. | Do not become a wet-lab ELN or RDM platform before proving the project graph. | Deferred reference and later adapters. |
| AFFiNE / Logseq / SiYuan | Local-first docs, canvas, backlinks, block references, PDF annotation links, knowledge graph and note workflows. | Useful for manual researcher workspace behavior: notes, backlinks, object links, canvas/planning, and local ownership. | Do not make Scient a generic PKM or Notion clone. | Reference only. |
| CoCalc | Jupyter, LaTeX, terminal, whiteboard, chat, real-time collaboration, scientific teaching/research workspace. | It proves the value of combining computation, writing, terminal, and collaboration in one scientific environment. | Do not fork or run from source as a base; MS-RSL source licensing makes it reference-only for Scient. | Reference only. |

Recommendation: begin by stabilizing a Synara fork as the workbench shell, then
immediately pressure-test it with science surfaces: import a paper, view and
annotate source material, create an evidence-linked note or draft paragraph,
delegate one agent task, and review the resulting project change. If Synara
cannot host that without forcing coding-product assumptions into Scient's
kernel, keep its useful pieces as cherry-pick/reference material and move toward
a more Scient-owned shell.

Source and reference links checked for this scan:

- Desktop/agent shell: [Synara](https://github.com/Emanuele-web04/synara),
  [T3 Code](https://github.com/pingdotgg/t3code),
  [Goose](https://github.com/aaif-goose/goose),
  [OpenCode](https://opencode.ai/),
  [OpenCode source](https://github.com/anomalyco/opencode).
- Source library and reader: [Zotero](https://github.com/zotero/zotero),
  [Zotero Reader](https://github.com/zotero/reader),
  [Zotero Document Worker](https://github.com/zotero/document-worker),
  [Paperlib](https://github.com/Future-Scholars/paperlib),
  [Tropy](https://tropy.org/),
  [Tropy GitHub](https://github.com/tropy),
  [JabRef](https://github.com/JabRef/jabref).
- Writing and publishing: [Zettlr](https://github.com/Zettlr/Zettlr),
  [Overleaf](https://github.com/overleaf/overleaf),
  [Quarto](https://quarto.org/),
  [MyST](https://mystmd.org/),
  [Manubot rootstock](https://github.com/manubot/rootstock).
- Analysis and computation workbench: [JupyterLab Desktop](https://github.com/jupyterlab/jupyterlab-desktop),
  [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/),
  [RStudio](https://posit.co/products/open-source/rstudio),
  [Positron](https://github.com/posit-dev/positron),
  [CoCalc](https://github.com/sagemathinc/cocalc).
- Science-native provenance and lab/RDM references:
  [Stencila](https://github.com/stencila/stencila),
  [eLabFTW](https://github.com/elabftw/elabftw),
  [SciNote](https://github.com/scinote-eln/scinote-web),
  [RSpace](https://github.com/rspace-os/rspace-web),
  [Chemotion ELN](https://github.com/ComPlat/chemotion_ELN),
  [Kadi4Mat](https://gitlab.com/iam-cms/kadi),
  [openBIS](https://openbis.ch/),
  [openBIS GitHub](https://github.com/openbis).
- Local-first workspace and knowledge references:
  [AFFiNE](https://github.com/toeverything/affine),
  [Logseq](https://github.com/logseq/logseq),
  [SiYuan](https://github.com/siyuan-note/siyuan).

### Memory, Provenance, Permissions, And Safety

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Hermes | Checkpointing ideas, relay-auth patterns to verify, slash-command authorization ideas, and context-compression patterns. | Useful as a side-bench for selected safety and continuity mechanics. | Do not let Hermes materially shape the scientific memory/provenance architecture, and do not use it as the primary file-writing executor. | Targeted side review only. |
| Goose | Safety inspectors, provider registry, recipe/session boundaries. | Useful for local agent safety and repeatable task recipes. | Do not make recipes replace scientific skills/protocols. | Needs deeper review. |
| OpenClaw | Gateway, channels, diagnostics, onboarding, app/device continuation, plugin distribution, safe media store ideas, SSRF guards, prompt-injection-safe file context. | Useful when Scient grows beyond desktop into cloud/mobile/channel continuity and needs hardened external input handling. | Do not make Scient a personal messaging assistant or center the product on chat/voice sessions. | Side-to-core later; security-specific ideas deserve targeted review. |
| AFFiNE | Local-first docs/canvas/table workspace, block composition, whiteboard/document fusion, collaboration posture. | Useful as a reference for manual planning, visual thinking, and mixed document/canvas work inside a project. | Do not make Scient a generic Notion/Miro alternative. | Reference only. |
| Logseq | Local-first knowledge graph, Markdown/Org storage, backlinks, PDF annotation, task and note workflows. | Useful for backlinking, annotation-to-note behavior, and researcher-owned local knowledge. | Do not make Scient a generic PKM graph. | Reference only. |
| SiYuan | Block-level references, Markdown WYSIWYG, PDF annotation links, export formats, local/self-hosted architecture. | Useful for block references, local note UX, and fine-grained object linking. | Do not adopt its block model as Scient's scientific object model. | Reference only. |
| Earlier PapiLab prototype | Memory trust metadata, memory UI, durable agent runs, checkpoints, autonomy controls, idempotency records. | Earlier product work has valuable reliability patterns that should not be discarded. | Do not copy an older hosted persistence shape if the next product is local-first. | High value; already inventoried. |

Recommendation: build a Scient memory/provenance layer using earlier prototype
typed run/memory concepts, Goose/Codex action/session metadata, Stencila-style
provenance concepts, and only small targeted Hermes ideas where they survive
source review.

### Manuscript Editor And Scientific Drafting

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Tiptap / ProseMirror | Schema-controlled rich text, custom nodes, NodeViews, stable block IDs, collaboration path, Markdown/HTML/static rendering, citations and evidence nodes. | Current default candidate for a Google Docs-like scientific editor with custom semantics. Earlier PapiLab prototype work also makes it a familiar candidate. | Do not accept a generic Notion-like block editor as enough, and do not treat Tiptap JSON as canonical manuscript truth. It is an editor projection. | Default candidate; needs long-document prototype. |
| Plate | AI-rich editor patterns, comments, diff/suggestion UX, docx import/export, polished component patterns. | It may be an important source for the writing experience, even if not the final editor base. | Do not assume Slate/Plate wins without long-manuscript and collaboration tests. | Must prototype against Tiptap. |
| Lexical | Performance, accessibility, headless editor architecture, Word/HTML import lessons. | Serious fallback if Tiptap/Plate struggle with long scientific documents. | More DIY for scientific features. | Challenger prototype. |
| Overleaf | Academic writing workflow, LaTeX project model, compile logs, templates, collaboration expectations. | Scientists know it; it teaches submission and LaTeX workflows. | Do not fork Overleaf or become LaTeX-first. | Reference only unless export integration. |
| Word / Google Docs | Track changes, comments, collaborative writing expectations, non-technical manuscript UX. | Many scientists live here. Export/import must respect their workflows. | Do not make Scient generic office software. | Product reference. |

Recommendation: use Tiptap first, prototype Plate and Lexical against the same
scientific document, and keep Overleaf/Word/Google Docs as UX and export
benchmarks.

### Citations, Reference Library, And PDF Reading

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Zotero | Import/export, translators, PDF reader/annotations, collections, tags, citation insertion, CSL, group-library expectations. | Zotero is the reference manager scientists already trust. Scient must cooperate with it. | Do not rebuild Zotero first or fork the full Zotero product. | Core integration and compatibility target. |
| Zotero Reader / Zotero Document Worker | PDF/EPUB/HTML reader and annotator; annotation processing; PDF text extraction and rendering; structured extraction from PDFs, EPUBs, and HTML snapshots. | This is the strongest current component/reference candidate for Scient's source reader and source-region workflows. | Do not make the reader's annotation state or worker output the canonical evidence model. | Component spike; source-depth and license review needed. |
| Paperlib | Modern paper-library UI, metadata scraping, full-text search, notes, RSS discovery, writing integration, LLM paper features. | Useful pressure test against older reference-manager UX, especially for active paper writing. | Do not use it as the base product or copy GPL code without review. | Reference and possible adapter ideas. |
| Tropy | Research-source item modeling, custom metadata templates, annotation/transcription, SQLite persistence, plugins, JSON-LD/CSV export. | Useful for source-detail UX and the idea that research materials are objects with researcher-defined metadata, not just files. | Do not make Scient an archive-photo manager. | Reference for source/detail surfaces. |
| JabRef | BibTeX/BibLaTeX correctness, citation keys, local `.bib` durability, PDF metadata writing, citation relation views. | Important candidate for open local citation correctness. | Do not inherit Java desktop product shape. | Candidate citation reference; needs source evaluation. |
| CSL ecosystem | Citation styles, bibliography generation conventions. | Required for real manuscript output. | Do not invent a private citation style system. | Required integration. |
| Paperpile / Mendeley / EndNote / ReadCube | User expectations for reference workflows, institutional habits, Google Docs/Word integration patterns. | Scientists will import from or compare to these. | Do not build around proprietary assumptions. | Side reference. |

Recommendation: make Zotero/JabRef/CSL compatibility a first-class kernel
requirement, not a plugin afterthought. Evaluate Zotero Reader and Document
Worker as focused components for source viewing and extraction, and use Paperlib
and Tropy as pressure tests for modern source-library and source-detail UX.

### Document Ingestion And Evidence Extraction

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| GROBID | Scholarly PDF extraction, TEI output, references, citation contexts, figures, tables, affiliations, PDF coordinates. | Leading scholarly parser candidate. Coordinates are critical for evidence traceability. | Do not make TEI the whole Scient object model. | Sidecar candidate. |
| Docling | Multi-format conversion result boundary: PDF, Word, PowerPoint, HTML, image, LaTeX, Markdown, JATS, XML, tables, page/item provenance, confidence/errors/timings, document pipelines. | Scient will ingest more than scholarly PDFs, and ingestion must expose what was converted, where it came from, how confident it is, and what failed. | Do not rely on it alone for scholarly references until benchmarked, and do not let Docling's internal result format become canonical Scient state. | Sidecar candidate. |
| Marker | PDF-to-Markdown benchmark. | Useful for readable agent input and fallback extraction. | Do not choose it without corpus benchmark. | Side benchmark. |
| Earlier PapiLab extraction work | Existing PDF/metadata processing, artifact review, extraction confidence/failure handling. | There is previous product flow worth preserving. | Do not assume previous extraction quality is good enough for the next architecture. | Keep the flow, benchmark the engine. |

Recommendation: use GROBID and Docling together. GROBID for scholarly structure;
Docling for general document conversion. Scient should own the evidence graph
above both.

### Scientific QA, RAG, And Evidence Answers

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| PaperQA | `Doc` / `Text` / `Context` split, citation-grounded scientific QA, cited context provenance, paper-directory indexing, clients for Crossref/OpenAlex/Semantic Scholar/Unpaywall/retractions. | Important open-source scientific RAG candidate, and its source/context split is useful for Scient evidence linking. | Do not treat RAG output as truth without evidence objects and review. Do not use PaperQA persistence as canonical project state. | Sidecar/reference candidate. |
| Lacuna | Research-map substrate for paper search, source-linked concept elements, research directions, cleaned markdown pages, and multi-stage deep-research synthesis. | Strong reference for search and synthesis over durable intermediate objects rather than raw PDFs or one-off chat. | Do not make Lacuna's generated map, directions, or proposals the Scient project graph. Do not treat generated directions as truth without source review. | Research-map reference; inspected arXiv and live site on 2026-07-09. |
| Elicit | Evidence tables, structured reports, extraction and screening UX, sentence-level citations. | Best commercial benchmark for AI literature workflows. | Do not become a cloud-only Elicit clone. | Product reference. |
| Consensus / SciSpace / scite | Claim synthesis, paper Q&A, citation context, support/contrast/mention framing. | Useful for answer UX and evidence relationship semantics. | Do not accept black-box synthesis without inspectable sources. | Side reference. |

Recommendation: PaperQA can inspire the local answer engine, while Lacuna is a
strong reference for the research-map layer that makes literature search and
survey synthesis navigable for agents. Scient must still make every accepted
answer, direction, or synthesis land in project evidence objects, not just chat
text or generated map pages.

### Screening, Review, Protocols, And PRISMA

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| ASReview | Project directory persistence, screening decision DB, active-learning loop, project schema, simulation, model components, screening queues. | Leading open-source screening engine candidate, with useful boundaries between review data, decisions, and model-driven prioritization. | Do not let the model silently decide inclusion/exclusion. Do not use ASReview's DB/web stack as canonical Scient state. | Source candidate. |
| Rayyan | Screening UX, collaboration, inclusion/exclusion reasons, PRISMA-like review operations. | Strong product benchmark for systematic review teams. | Do not copy SaaS-only workflow assumptions. | Product reference. |
| Covidence / DistillerSR / EPPI-Reviewer / RevMan / JBI SUMARI | Institutional review workflows, risk of bias, extraction, compliance expectations. | These define what evidence teams expect. | Do not treat enterprise workflows as day-one scope. | Side reference. |
| protocols.io | Protocol authoring/execution, versionable methods, public method-sharing expectations. | Useful for protocol objects beyond literature reviews. | Do not make external protocol repositories the Scient project record. | Reference and later compatibility target. |
| eLabFTW | Experiments, protocols, inventories/resources, advanced permissions, audit/signature expectations, REST API, `.eln` ecosystem awareness. | Useful for lab and institutional traceability expectations. | Do not become a full ELN or inventory/LIMS product before the project graph works. | Deferred reference and later adapter. |
| SciNote | Life-science ELN workflows and experimental data organization. | Useful for understanding life-science user expectations and ELN workflow vocabulary. | Do not inherit Rails/Docker/web-server product shape. | Deferred reference. |
| RSpace | Research orchestrator/ELN/sample management, FAIR workflow, PIDs, repository and tool integrations. | Useful for how research infrastructure connects notebooks, samples, repositories, and institutional workflows. | Do not make Scient an institutional RDM suite first. | Deferred reference and later adapter. |
| Chemotion / Kadi4Mat / openBIS | Domain-specific ELN/RDM workflows for chemistry, materials science, FAIR data, instrument/workflow linkage, repositories. | Useful when Scient needs domain-aware protocol/data extensions. | Do not pull domain-specific ELN complexity into the first product core. | Deferred domain reference. |

Recommendation: build protocol and screening as first-class objects early.
ASReview is the main open-source source; Rayyan/Covidence/etc. are UX and
workflow references.

### Scientific Publishing, Export, And Submission

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Zettlr | Local academic writing, citation integration, Markdown/math/Mermaid rendering, Pandoc export profiles, journal/conference submission workflows. | Useful as a local-first academic writing benchmark that is closer to researchers than a generic Markdown app. | Do not make Scient a Markdown-only writing tool or treat file text as the only manuscript truth. | Reference and export workflow benchmark. |
| Quarto / Pandoc | Multi-format scientific publishing, citations, crossrefs, executable docs, Word/PDF/HTML/Typst/LaTeX paths, document schemas, defaults/templates/filters, export artifact DAG ideas. | Primary pragmatic export lane to test first. | Do not force users to author raw Quarto if the UX should be Google Docs-like. Do not make Quarto internals or Pandoc AST the Scient core. | Primary export prototype. |
| MyST | Scientific Markdown, JATS, citations, crossrefs, TeX/Typst export, notebook publishing. | Credible source-format and publishing challenger to Quarto/Pandoc. | Do not make source Markdown the only UX. Do not promote it before export needs are benchmarked. | Challenger export/source-format prototype. |
| Manubot | Git-backed automated manuscript pipeline. | Useful for reproducible manuscript build ideas. | Not a live scientific editor. | Side reference. |
| Typst / LaTeX / Overleaf | Final typesetting and academic submission expectations. | Export credibility depends on them. | Do not become typesetting-first. | Export target/reference. |

Recommendation: keep Scient's internal manuscript model separate from export
formats. Prototype Quarto/Pandoc first, keep MyST as the challenger, and export
to Word/PDF/HTML/LaTeX/Typst where feasible rather than making any one format
the product core too early.

### Scientific Schema And Provenance

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Stencila | Semantic scientific document schemas, executable/provenance-aware documents, agent actions, figure workflows, and structured document-object ideas. | Valuable as a science-native schema and provenance reference for Scient's own document and evidence model. | Do not adopt the whole product, and do not let Stencila schemas replace the canonical Scient model without a deliberate architecture decision. | Deep source evaluation required. |

Recommendation: study Stencila for semantic document and provenance ideas, not
as an export engine peer. Any Stencila-inspired shape must be translated into
Scient-owned objects before it can become project truth.

### Data, Code, Analysis, Figures, And Scientific Artifacts

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| marimo | Reactive Python analysis objects, dependency DAG, stale propagation, SQL cells, app/script duality, Git-friendly notebooks, AI-native data work. | Best current analysis-workbench inspiration for Scient because an agent can write real Python while the UI can expose dependency state and stale outputs. | Do not make Scient a notebook app. Do not let marimo runtime state become the canonical `Analysis` object. | Primary analysis-workbench prototype candidate; official-doc scan done, code/license/prototype still needed. |
| JupyterLab / `.ipynb` | Kernel ecosystem, notebook import/export, notebook compatibility, scientist familiarity, extension expectations. | Researchers already have notebook projects, and many collaborators will expect notebook continuation. | Do not embed the whole JupyterLab UI as the Scient workspace, and do not make hidden notebook state the analysis truth. | Compatibility target, not product core. |
| JupyterLab Desktop | Notebook/file/session desktop behavior and one-click notebook opening expectations. | Useful for understanding scientist expectations around local notebook workflows in a desktop shell. | Do not use it as Scient's base desktop app; maintenance/security status must be rechecked before any dependency. | Reference only. |
| RStudio / Positron | Data-science IDE layout, variables/data viewers, plots, Quarto/R Markdown workflows, AI/data assistant expectations. | Useful for researchers who think in R/Python analysis workspaces rather than coding-agent workspaces. | Do not fork a data-science IDE as the first shell. | Reference and compatibility expectation. |
| CoCalc | Combined Jupyter, LaTeX, terminal, chat, whiteboard, time-travel, and scientific collaboration. | It demonstrates the value of a multi-surface scientific workbench. | Do not fork or run its source as a base; treat it as reference-only because of MS-RSL source licensing. | Reference only. |
| DuckDB | Embedded analytical SQL over local files and local project data. | Strong fit for local-first analysis: agents can query CSV/Parquet/Arrow-style data without requiring a cloud warehouse or server database. | Do not make DuckDB the project database or provenance model. It is an execution/query engine under Scient objects. | Add as primary local analysis engine candidate. |
| pandas / Polars | DataFrame manipulation, cleaning, joins, reshaping, exploration, lazy/eager tabular pipelines. | pandas is still the compatibility language of scientific Python; Polars is attractive for performant, lazy, agent-written pipelines over larger local data. | Do not expose library choice as the user-facing model. Scient should record datasets, transforms, runs, tables, and figures above the DataFrame library. | Add as initial Python data runtime set: pandas for compatibility, Polars for performance. |
| Apache Arrow / Parquet | Columnar interchange and artifact formats between Python, SQL engines, cloud, and exported datasets. | Scient needs durable, efficient data artifacts that can move between analysis engines and remain inspectable outside the app. | Do not make low-level columnar formats visible as the product model for normal users. | Add as preferred data interchange/artifact direction. |
| Ibis | Portable query/DataFrame expression layer across local and remote backends. | Could let Scient start local with DuckDB and later run similar analysis code against cloud or institutional backends. | Do not add before a real portability need appears; it can obscure the simple pandas/Polars/DuckDB story. | Later candidate after the first local analysis prototype. |
| SciPy / statsmodels / scikit-learn | Scientific algorithms, statistical modeling, hypothesis tests, predictive modeling, reusable method skills. | Scient agents will need a trusted baseline for common scientific/statistical tasks, not only generic Python execution. | Do not become a statistics package GUI first, and do not let agents present model output without method notes, assumptions, parameters, and provenance. | Add as core scientific Python runtime references. |
| R / tidyverse / ggplot2 | R analysis compatibility, grammar-of-graphics expectations, statistical ecosystem, collaborator workflows. | Many research groups still rely on R; ggplot2 is a major reference for chart specification and statistical graphics. | Do not make R a day-one core runtime unless the first validation scenario requires it. | Later runtime compatibility and figure grammar reference. |
| DVC / DataLad | Dataset/artifact versioning, large-file management, experiment/data provenance. | Important for reproducible analyses and for projects with files too large or too changeable for ordinary Git. | Too technical for day-one normal users if exposed raw; keep as power-user adapter or internal inspiration. | Later power-user integration; keep in source map. |
| Snakemake / Nextflow / Galaxy / Renku | Reproducible workflows, pipeline execution, non-coder workflow UI, cloud/HPC sessions. | Important for computational science and bioinformatics projects where analysis is a pipeline, not a single script. | Not the day-one product kernel, and not the default analysis UX for ordinary researchers. | Side shelf for workflow expansion. |
| jamovi / JASP / GNU PSPP | Friendly statistical GUI, SPSS-like workflows, classical/Bayesian analysis expectations, reportable tables/plots. | Useful reminders that many researchers want guided statistics and readable outputs, not raw code. | Do not build a separate point-and-click statistics clone; Scient should keep code-backed reproducibility and agent-run provenance. | UX reference for method assistant and results tables. |
| Orange Data Mining | Visual programming, data mining, ML workflow canvases, no-code exploration. | Useful for seeing how non-coders understand pipelines and model steps. | Do not make Scient a general visual ETL or no-code ML platform. | Side shelf only unless a visual analysis-plan workflow becomes central. |

Recommendation: Scient should own `Dataset`, `Analysis`, `AnalysisRun`, `Table`,
`Figure`, `Artifact`, dependency/staleness state, method notes, and provenance.
The first prototype should be marimo-inspired, but the engine stack should be
plain local Python through `uv`, DuckDB for local SQL, pandas/Polars for
DataFrame work, Arrow/Parquet for durable tabular artifacts, and a small trusted
scientific Python package baseline.

### Figure, Table, Diagram, And Visual-Science Sources

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Matplotlib / seaborn | Publication-grade static figures, statistical plots, Python ecosystem defaults. | Most Python scientific plotting still lands here; agents can generate reproducible code and export static outputs. | Do not treat a rendered PNG/SVG as the editable figure truth. Keep code, data, parameters, and figure metadata connected. | Add as default static-figure runtime. |
| Plotly | Interactive, browser-native, publication-quality charts and scientific chart types. | Good fit for inspectable Scient artifacts and app-embedded exploratory figures. | Do not let Plotly JSON become the only Figure model; store it as one projection/export. | Add as first interactive chart runtime. |
| Altair / Vega-Lite | Declarative chart specifications, JSON grammar, concise interactive graphics. | Best candidate for agent-editable chart specs because an agent can modify a structured grammar rather than pixel output. | Not enough alone for every publication figure or complex custom visual. | Add as primary editable/declarative chart-spec reference. |
| Bokeh / HoloViz / Panel / Datashader | Browser dashboards, widgets, large/streaming data visualization, Python-to-web apps. | Useful when Scient needs richer exploratory dashboards or very large visual data. | Too broad and framework-like for the first figure core. | Side shelf after Plotly/Altair prototype. |
| Observable Plot / D3 | Web-native exploratory charts and custom visualization grammar. | Useful for Scient's React surface when a figure or evidence view needs custom web interaction. | Do not make researchers author JavaScript to get normal scientific figures. | Side reference for web UI charts. |
| Great Tables / gt | Publication-ready tables in Python/R with structured table parts and exportable formats. | Scientific outputs often include tables as much as figures; tables need provenance, styling, captions, and manuscript links. | Do not reduce tables to screenshots or arbitrary HTML. | Add as table-output reference. |
| Mermaid / Graphviz / Cytoscape.js | Diagrams-as-code, graph/network diagrams, evidence graphs, workflow graphs. | Scient will need visualizations of claims, evidence, protocols, and analysis dependencies, not only statistical charts. | Do not make graph layout output the project graph truth. | Add as diagram/graph-output references. |
| tldraw / Excalidraw / xyflow | Canvas editing, whiteboard diagrams, node-based workflows, visual planning. | Useful for protocol sketches, evidence maps, analysis flow views, and editable figure planning surfaces. | Do not make Scient canvas-first or treat a freeform canvas as scientific provenance. | Keep and expand as side component sources. |
| Inkscape / diagrams.net / BioIcons | SVG editing, diagram editing, open scientific icon libraries. | Useful for final figure polish and biology/chemistry illustration assets, especially as open alternatives to commercial illustration tools. | Do not rebuild Illustrator/BioRender first; integrate/export where useful. | Add as open figure-polish and icon-source references. |
| napari / Fiji / ImageJ / CellProfiler / QuPath | Bioimage viewing, annotation, quantitative image analysis, microscopy/pathology workflows. | Crucial for life-science projects where figures come from images and measurements, not simple tables. | Do not make bioimage analysis part of the general first core unless the validation scenario requires it. | Domain-specific side shelf with high future value. |
| RDKit / Mol* / 3Dmol.js / Biopython | Chemistry, molecular, structural-biology, and bioinformatics computation/visualization. | Important for discipline-specific figure and analysis adapters. | Do not overload the first product with every scientific domain toolkit. | Domain-specific side shelf; add when a project scenario needs it. |
| Streamlit / Dash / Shiny / Gradio | Data apps, dashboards, interactive reports, model demos. | Useful for artifact-export and "share this analysis view" patterns. | Do not make generated apps the Scient analysis model or primary UI. | Side reference for shareable analysis artifacts. |
| BioRender / GraphPad Prism / OriginPro | Commercial figure/statistics UX expectations. | Scientists need modifiable figures, statistical outputs, templates, annotations, and publication polish. | Mostly commercial/reference only. | Product reference, not source-code adaptation. |

Recommendation: Scient needs multiple figure lanes, not one figure library. The
first figure prototype should support a static Matplotlib figure, an interactive
Plotly figure, an editable Altair/Vega-Lite spec, and a publication table, all
linked to the same `AnalysisRun`, data inputs, parameters, captions, manuscript
uses, and stale-output checks.

Official-source links checked in this pass:

- Analysis workbench and data engines: [marimo](https://docs.marimo.io/),
  [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/),
  [DuckDB](https://duckdb.org/), [pandas](https://pandas.pydata.org/docs/),
  [Polars](https://docs.pola.rs/), [Apache Arrow](https://arrow.apache.org/),
  [Ibis](https://ibis-project.org/).
- Scientific Python and R runtime references: [SciPy](https://scipy.org/),
  [statsmodels](https://www.statsmodels.org/),
  [scikit-learn](https://scikit-learn.org/stable/),
  [tidyverse](https://www.tidyverse.org/),
  [ggplot2](https://ggplot2.tidyverse.org/).
- Figure and table tools: [Matplotlib](https://matplotlib.org/),
  [seaborn](https://seaborn.pydata.org/), [Plotly Python](https://plotly.com/python/),
  [Altair](https://altair-viz.github.io/), [Vega-Lite](https://vega.github.io/vega-lite/),
  [Bokeh](https://bokeh.org/), [HoloViz](https://holoviz.org/),
  [Observable Plot](https://observablehq.com/plot/),
  [Great Tables](https://posit-dev.github.io/great-tables/), [gt](https://gt.rstudio.com/).
- Diagrams, image science, and domain visuals: [Mermaid](https://mermaid.js.org/),
  [Graphviz](https://graphviz.org/), [Cytoscape.js](https://js.cytoscape.org/),
  [tldraw](https://tldraw.dev/), [xyflow](https://xyflow.com/),
  [Excalidraw](https://docs.excalidraw.com/), [Inkscape](https://inkscape.org/),
  [BioIcons](https://bioicons.com/), [napari](https://napari.org/),
  [Fiji/ImageJ](https://imagej.net/software/fiji/),
  [CellProfiler](https://cellprofiler.org/), [QuPath](https://qupath.github.io/),
  [RDKit](https://www.rdkit.org/), [Mol*](https://molstar.org/),
  [3Dmol.js](https://3dmol.csb.pitt.edu/), [Biopython](https://biopython.org/).
- Workflow, statistical GUI, and shareable app references:
  [DVC](https://dvc.org/), [DataLad](https://www.datalad.org/),
  [Snakemake](https://snakemake.readthedocs.io/en/stable/),
  [Nextflow](https://www.nextflow.io/docs/latest/),
  [Galaxy](https://galaxyproject.org/), [Renku](https://renkulab.io/),
  [jamovi](https://www.jamovi.org/), [JASP](https://jasp-stats.org/),
  [GNU PSPP](https://www.gnu.org/software/pspp/),
  [Orange Data Mining](https://orangedatamining.com/),
  [Streamlit](https://streamlit.io/), [Dash](https://dash.plotly.com/),
  [Shiny for Python](https://shiny.posit.co/py/), [Gradio](https://www.gradio.app/).

### Collaboration, Sync, Sharing, And Cloud

Collaboration is not one feature, database, or conflict-resolution algorithm.
The source scan supports separating at least these product and architecture
problems:

1. person identity, scientific attribution, and affiliation;
2. organizations, labs, groups, subgroups, and institution administration;
3. ad hoc teams, project membership, external guests, and ownership continuity;
4. authorization, invitations, revocation, and permission inheritance;
5. comments, suggestions, assignments, proposals, approvals, and decisions;
6. simultaneous editing and ephemeral presence on document-like surfaces;
7. offline and cross-device synchronization of structured scientific objects;
8. versioning and transfer of PDFs, datasets, code, figures, and other large or
   binary artifacts;
9. attributed history, provenance, comparison, recovery, and audit; and
10. open-science sharing, registration, deposit, citation, and publication.

A CRDT or operational-transformation engine may solve part of item 6 or 7. It
does not define Scient's account model, project roles, scientific
responsibility, accepted project state, review policy, or institutional
governance.

#### Scientific And Product Reference Systems

| Source | Mechanisms worth learning from | Reuse posture and Scient boundary |
|---|---|---|
| [OSF Projects](https://help.osf.io/article/353-welcome-to-projects) and [research groups](https://help.osf.io/article/413-getting-started-for-research-groups) | Research projects and independently permissioned nested components; contributors with read, write, and admin access; project activity; external integrations; registrations; lab and consortium organization. | High-value product and interoperability reference. Do not make OSF Scient's source of truth or copy its project/component hierarchy before testing Scient's own object and permission model. Review exact repository paths and licenses before code reuse. |
| [Dataverse](https://guides.dataverse.org/en/6.9/quickstart/what-is-dataverse.html) | Dataset drafts and publication, contributor-versus-curator review, groups, roles, file restrictions, major/minor versions, version comparison, persistent citation, and repository deposit. | Adopt the draft -> review -> publish and immutable-version ideas for deposits and releases. Do not build a repository platform or force all working project data into repository semantics. |
| [eLabFTW](https://doc.elabftw.net/) | Multiple teams, granular read/write scope, experiment comments, revision history, locking, ownership transfer, audit trails, signatures, timestamps, and immutable archives. | Strong laboratory and regulated-record reference. Its application is AGPLv3; treat it as a product model unless a separately reviewed adaptation justifies the license obligations. Do not imply that borrowing the interaction model gives Scient compliance. |
| [OpenReview groups](https://docs.openreview.net/getting-started/objects-in-openreview/groups) | Hierarchical groups, role-scoped access, invitations that define who can create or edit which records and when, signatures, readers/writers, assignments, review, and decision workflows. | Strong reference for reviewable scientific operations and delegated authority. The web application is AGPLv3 while client libraries have different licenses; review per component before reuse. Do not inherit conference-specific terminology as Scient's general collaboration model. |
| [Current JupyterLab real-time collaboration](https://jupyterlab.readthedocs.io/en/4.4.x/user/rtc.html), its [collaboration extension](https://github.com/jupyterlab/jupyter-collaboration), and the [earlier RTC model warning](https://jupyterlab.readthedocs.io/en/3.5.x/user/rtc.html) | Yjs-backed collaborative notebooks and files, shared cursors, and an evolving content-provider integration. Earlier RTC documentation explicitly warned that two editor models for the same underlying file could diverge. | Reuse implementation lessons where compatible; JupyterLab and the collaboration extension are BSD-3-Clause. Keep model mismatch as a Scient test case without presenting an older experimental limitation as current behavior: two projections of one scientific object must not silently diverge. |
| [Overleaf collaboration](https://docs.overleaf.com/collaborating/collaborating-in-overleaf), [history](https://docs.overleaf.com/writing-and-editing/history-and-versioning), and [Community Edition](https://github.com/overleaf/overleaf) | Familiar scientific co-writing, comments, tracked changes, history, ownership transfer, groups, and external collaborators. | Product baseline and selective source reference. Community Edition is AGPLv3, omits some hosted/professional collaboration features, and warns that unsandboxed compiles assume trusted users. Do not fork it as Scient's foundation. |
| [Google Docs/Drive sharing](https://support.google.com/drive/answer/2494822), [comments and suggestions](https://support.google.com/docs/answer/6239410), and [version history](https://support.google.com/docs/answer/190843) | Low-friction invitation, viewer/commenter/editor roles, visible presence, suggestion accept/reject, attribution, and understandable restoration. | Closed-product UX baseline. Copy the clarity of the interaction model, not implementation or branding. Extend review beyond text into evidence, analyses, figures, decisions, and agent work. |
| [Notion groups and sharing](https://www.notion.com/help/create-and-manage-groups) | Workspace members, external guests, groups, group owners, teamspaces, page-level access, inherited child access, and SCIM-managed groups. | Useful institution-administration reference and a warning about inherited over-access. Scient must let external scientific collaborators participate naturally and must keep group membership separate from project responsibility. |
| [GitHub pull-request reviews](https://docs.github.com/en/pull-requests/reference/pull-request-reviews) and [code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) | Draft proposals, explicit diffs, comments, exact suggestions, approve/request-changes decisions, required reviewers, ownership-based routing, checks, and a durable decision timeline. | Adapt into object-level proposals and review for both humans and agents. Raw Git remains optional; scientific users should not need branches or commits to review an evidence or analysis change. |
| [DVC](https://dvc.org/doc/command-reference/) and [DataLad](https://handbook.datalad.org/) | Content-addressed or externally stored data, lightweight version metadata, reproducible snapshots, selective transfer, remotes, and collaboration around large datasets and experiment artifacts. | Reference for large-data and artifact semantics, not for ordinary comments or live editing. Preserve hashes, provenance, versions, and storage routes without forcing Git commands on normal users. |

#### Identity, Affiliation, Organizations, And Authorization

| Source or standard | Adaptation target | Boundary |
|---|---|---|
| [ORCID](https://info.orcid.org/orcid-trust/) and [ROR](https://ror.org/about/) | Persistent researcher and research-organization identifiers; source-attributed affiliations; interoperable authorship and affiliation metadata. | Identity and affiliation evidence are not authorization. A verified institutional affiliation must never silently grant project access, an organization role, or scientific responsibility. ROR intentionally does not model every department or lab, so Scient still needs local group structures. |
| [Keycloak organizations](https://www.keycloak.org/docs/latest/server_admin/) | Open-source identity brokering, invitations, organization membership, isolated nested groups, organization-specific claims, and future institutional SSO. | Apache-2.0 reference or later integration candidate. Do not make a full enterprise identity server a dependency of the first shared-project slice. Authentication remains separate from Scient authorization. |
| [Google Zanzibar](https://research.google/pubs/zanzibar-googles-consistent-global-authorization-system/), [OpenFGA](https://openfga.dev/docs/concepts), and [SpiceDB](https://authzed.com/docs/spicedb) | Relationship-based access such as person -> group -> project -> object, inheritance, exclusions, temporary relationships, and testable permission checks. | OpenFGA and SpiceDB are Apache-2.0 prototype candidates, not selected dependencies. First model Scient relationships and adversarial cases; then compare operational complexity, consistency behavior, auditability, local/offline enforcement, and migration cost. |
| [SCIM 2.0 users and groups](https://www.rfc-editor.org/info/rfc7643/) and [protocol](https://www.rfc-editor.org/info/rfc7644/) | Later institution-managed provisioning, deprovisioning, and group synchronization. | Provisioning is not authorization and is not needed for the first collaboration slice. Treat identity-provider groups as imported facts that Scient policies may map, not as self-executing project permissions. |

#### Real-Time And Local-First Engine Candidates

| Candidate | What it proves | License/reuse posture | Main risk or boundary | Current disposition |
|---|---|---|---|---|
| [Yjs](https://github.com/yjs/yjs) + [Hocuspocus](https://github.com/ueberdosis/hocuspocus) | Network-agnostic shared types, editor bindings, offline updates, awareness, snapshots, and a self-hostable WebSocket backend with authentication, read-only connections, persistence, and lifecycle hooks. | MIT. | Awareness is ephemeral, authorization remains external, and Yjs update state must not become the canonical scientific project record. Persisting only rendered JSON loses collaboration history. | Default first prototype for manuscript/note surfaces if the selected editor keeps a mature Yjs binding. |
| [Automerge](https://automerge.org/docs/hello/) | JSON-like CRDT state, local storage, transport-agnostic synchronization, change history, branching, and merging across broader application objects. | MIT. | A broad CRDT project model may make validation, authorization, selective sync, schema evolution, and accepted scientific operations harder to reason about. | Primary local-first challenger for a small structured Scient object set. |
| [ShareDB](https://github.com/share/sharedb/blob/master/README.md) | Server-oriented operational transformation for JSON documents with middleware access control, history, presence, queries, projections, offline reconnection, and pub/sub scaling. | MIT. | More server-authoritative and operationally centralized; requires custom object semantics and careful client recovery. | Primary OT challenger when authoritative validation or ordered review matters more than masterless merge. |
| [Yorkie](https://github.com/yorkie-team/yorkie) | JSON-like CRDT documents, client replicas, offline editing, conflict resolution, server lifecycle, and JavaScript/iOS/Android clients. | Apache-2.0. | Adds a Go service and document-store model; ecosystem and Scient integration must be tested rather than inferred. | Mobile/server challenger after the first conflict harness exists. |
| [Electric](https://github.com/electric-sql/electric) | Apache-2.0 partial replication and high-scale delivery of Postgres shapes through an HTTP read-path sync engine. | Apache-2.0. | The current system describes itself as a read-path engine, not a complete bidirectional local-write solution. It cannot be listed as a drop-in SQLite-to-cloud answer without an explicit write path. | Structured read-model candidate, not a selected project-sync engine. |
| [PowerSync](https://docs.powersync.com/intro/self-hosting) | Local SQLite SDKs and synchronization with a backend database, including self-hosting. | Client SDKs are Apache-2.0; the service is source-available under the Functional Source License, with separate open and enterprise self-hosted offerings. | Creates licensing, service, and vendor-dependence questions and still requires Scient-specific conflict and authorization semantics. | Candidate only after license/operations review and the same conflict harness. |
| [TinyBase](https://tinybase.org/guides/synchronization/) | Small TypeScript local-first store, persistence, mergeable stores, and pluggable synchronizers. | MIT. | Smaller data model and ecosystem; easy demos must not be mistaken for project-scale correctness. | Useful low-cost harness or fallback for bounded metadata. |
| RxDB and cr-sqlite | Alternative local databases, replication, and CRDT experiments. | Mixed component and commercial-plugin considerations require exact license review. | Expanding the shootout before conflict cases and pass criteria are fixed will produce activity, not a decision. | Side shelf unless primary candidates expose a concrete gap. |

The choice is not "CRDT or OT for Scient." Document-like editing, structured
scientific operations, large artifacts, and review/approval can legitimately
use different mechanisms behind one coherent product history.

#### Recommended Validation Sequence

This is a research recommendation, not accepted architecture or an
implementation commitment.

1. **Define the collaboration contract before infrastructure.** Specify actor
   identity, project roles, external guests, object ownership, proposal and
   decision records, attribution, revocation behavior, checkpoints, and the
   canonical operations for a small set of Scient objects. Define adversarial
   cases: simultaneous edits, conflicting screening decisions, changed
   evidence links, stale analyses, agent-versus-human edits, offline
   revocation, deleted groups, ownership transfer, and failed partial sync.
2. **Validate one asynchronous shared-project slice first.** Invite one
   collaborator, assign a project role, comment or suggest, propose a change,
   inspect a diff, accept or reject it, recover an earlier state, and revoke
   future access. Run the same flow for a human and an agent. This can prove the
   collaboration product boundary before simultaneous co-editing exists.
3. **Prototype document-like real-time collaboration separately.** Compare
   Yjs/Hocuspocus against Automerge and ShareDB on one manuscript or structured
   note. Test attribution, comments/suggestions, reconnect, offline edits,
   schema migration, authorization changes, persistence, export, and recovery.
4. **Prototype structured scientific-state sync only after canonical
   operations exist.** Compare a server-authoritative operation log and narrow
   local database replication against Automerge/Yorkie-style object sync.
   Electric and PowerSync should be evaluated for the exact read/write path
   they provide, not grouped together as interchangeable products.
5. **Handle large and binary artifacts through versioned asset semantics.**
   Use immutable or content-addressed versions, hashes, provenance, selective
   transfer, and explicit replacement/promotion. Do not put PDFs, raw datasets,
   or rendered figures inside a text CRDT.
6. **Add institution administration only after project collaboration works.**
   Introduce durable organizations, labs/groups, delegated group managers,
   external guests, ownership transfer, audit, and later SSO/SCIM. A nested
   group may help select people or inherit a default policy, but it must not
   silently determine scientific responsibility or every project permission.

Each prototype should pass the same harness: no silent data loss; deterministic
accepted Scient state; inspectable attribution; explicit unresolved conflicts;
permission checks at every authoritative boundary; revocation of future access;
offline-state disclosure; schema migration and export; backup and restore; and
no requirement that a proprietary service remain available to open a local
project.

Revocation must be described honestly. It can stop future authorized access and
synchronization, invalidate sessions or keys, and remove server-held copies
according to policy. It cannot guarantee erasure of material a collaborator was
previously authorized to download, export, copy, or retain offline.

## Secondary Sources To Revisit

These are not first-core sources, but each has something worth returning to.

| Source group | Why it stays on the side shelf |
|---|---|
| Benchling, LabArchives, Labfolder, Labguru | Useful for lab operations, institutional expectations, inventory, compliance, and biotech workflows. Too domain-specific and commercial to define the first Scient core. |
| BioRender, GraphPad Prism, OriginPro | Important commercial references for figure/statistics UX. Use them to understand scientist expectations, while the open figure stack above drives adaptation and prototyping. |
| Covidence, DistillerSR, EPPI-Reviewer, RevMan, JBI SUMARI, Nested Knowledge | Important for mature systematic review workflows and compliance. Revisit when review-team/collaboration/risk-of-bias depth becomes central. |
| Mendeley, EndNote, Paperpile, ReadCube Papers | Important import/export and user-expectation references. Zotero/JabRef/CSL should drive the open core first. |
| Google Docs, Microsoft Word | Essential UX/export benchmarks for comments, suggestions, and manuscript exchange. Not product foundations. |
| OpenAlex, Semantic Scholar, Crossref, PubMed, arXiv, Unpaywall, OpenCitations | External data/search sources and scholarly graph APIs. They feed Scient; they do not define the app architecture. |
| LangGraph | Useful for explicit long-running scientific workflows. Do not make it the whole agent architecture. |
| Tauri/Rust shell | Revisit after Electron/React prototypes expose a real limitation. Rust remains excellent for sidecars. |

## Prototype Backlog

These are research prototype candidates, not the current product or
implementation sequence. Their numbering is retained only as a stable reference
to the earlier synthesis. The active sequence lives in
`../../planning/product-roadmap.md`.

0. Canonical Scient schema and event contract.
   Define the first version of Scient-owned project objects before any tool
   shootout: `Project`, `Paper`, `SourceChunk`, `Claim`, `EvidenceLink`,
   `ScreeningDecision`, `Manuscript`, `Analysis`, `Figure`, `AgentAction`,
   `Provenance`, and an event/action log. Every later prototype must read and
   write through this contract, even when an external engine has its own storage
   or document format.

1. Agent kernel shootout.
   Build one local project scenario through Scient, then compare the same
   Scient boundary with selected external-agent adapters and bounded
   Goose/Codex architecture references. The scenario should import papers,
   create a protocol, edit a draft, run a script, update an artifact, and show
   approvals/diffs/provenance through the Scient object and event contract.

2. Evidence pipeline.
   Import from Zotero/JabRef, parse with GROBID and Docling, answer with PaperQA,
   and screen with ASReview. The pass condition is exact source traceability for
   every extracted value and answer, while keeping Scient's Paper, SourceChunk,
   EvidenceLink, and ScreeningDecision objects as the canonical state.

3. Scientific editor shootout.
   Build the same manuscript slice in Tiptap, Plate, and Lexical. Include
   citations, evidence-linked claims, comments, suggestions, figures, tables,
   equations, stable block IDs, and export.

4. Publishing export prototype.
   Map Scient manuscript/evidence objects to Quarto/Pandoc first and MyST as a
   challenger. Export to Word/PDF/HTML/LaTeX or Typst where feasible. Treat each
   export as an artifact DAG generated from Scient state.

5. Scientific schema and provenance prototype.
   Compare Scient manuscript/evidence objects against Stencila-style semantic
   document and provenance concepts. The pass condition is not adoption of
   Stencila, but a clearer Scient-owned shape for document semantics, executable
   steps, provenance, and agent-authored changes.

6. Analysis and figure prototype.
   Define `Dataset`, `Analysis`, `AnalysisRun`, `Table`, `Figure`, and
   `Artifact` objects; run Python through `uv`; query local data through DuckDB;
   transform data with pandas or Polars; produce a static Matplotlib figure, an
   interactive Plotly figure, an editable Altair/Vega-Lite spec, and a
   manuscript-ready table; link every output back to data, code, parameters,
   method notes, captions, manuscript claims, and stale-output checks.

7. Collaboration and sync prototype.
   First implement a test-only collaboration contract and conflict harness for
   actor identity, invitations, project roles, external guests, comments,
   proposals, decisions, ownership transfer, revocation, and canonical Scient
   operations. Prove one asynchronous human-and-agent review flow before adding
   simultaneous editing. Then compare Yjs/Hocuspocus, Automerge, and ShareDB on
   one document-like surface; compare a server-authoritative operation log,
   Automerge or Yorkie, and narrowly scoped local-database replication on a
   small structured object set; and keep large artifacts in separately
   versioned, hashed storage. Evaluate Electric as a read-path candidate and
   PowerSync only after its service license and operations model are reviewed.
   Do not promote any engine until the common harness proves attribution,
   authorization, offline behavior, conflict visibility, migration, export,
   backup, restore, and deterministic accepted Scient state.

## Current Synthesis

Current research points toward Scient as a local-first, cloud-mirrored scientific
workspace with a Scient-owned project graph; TypeScript/React product logic;
Electron-first desktop delivery unless a real limitation appears; a candidate
local structured store with a separately validated cloud mirror; the owned Synara-derived source as the
accepted initial application foundation; Scient as the owned OpenCode-derived
first-party agent; external OpenCode and other external agents as separate
choices; Codex as the safety/sandboxing reference; Goose as a later capability
and architecture source for Scient; Tiptap/ProseMirror-family writing;
GROBID/Docling/PaperQA/ASReview-powered evidence workflows; Lacuna-inspired
research-map patterns for paper-grounded search and synthesis;
Quarto/Pandoc-first export with MyST as challenger;
Stencila as a scientific schema/provenance reference; marimo-inspired analysis
with Jupyter compatibility; DuckDB, pandas/Polars, and Arrow/Parquet for local
tabular work; Matplotlib, Plotly, Altair/Vega-Lite, and table-generation tools
for figures and scientific artifacts; an asynchronous, reviewable shared-project
slice before realtime collaboration; relationship-based authorization only
after Scient's roles and adversarial cases are modeled; CRDT or OT mechanisms
for bounded collaborative surfaces rather than as the product's authority; and
separately versioned storage for large scientific artifacts.

## Non-Negotiables

- Do not let a whole-product foundation become Scient's source of truth. The
  owned Synara-derived source is acceptable only while Scient's scientific project state,
  agent gateway, provenance, and review model stay outside inherited coding-
  product assumptions.
- Do not let any source define the scientific object model.
- Do not hide scientific work inside chat messages.
- Do not accept agent changes without inspectable diffs and provenance.
- Do not accept evidence answers without source links.
- Do not let editor state, RAG stores, screening DBs, CRDT state, or export ASTs
  become canonical project truth.
- Do not let notebook state, chart-library JSON, rendered images, dashboard apps,
  or image-analysis tool state become canonical `Analysis` or `Figure` truth.
- Do not make GitHub/GitLab the only cloud/sync story.
- Do not choose Rust/Tauri as a symbol of seriousness; use Rust where it solves
  a real subsystem problem.
- Do not rebuild Zotero, Jupyter, Overleaf, or an ELN before proving the Scient
  project graph.
