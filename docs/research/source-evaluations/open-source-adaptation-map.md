# LitRev Open-Source Adaptation Map

Status: Proposed
Owner: Yaacov
Last updated: 2026-06-27
Purpose: Maps which open-source systems LitRev should study, prototype, adapt, or integrate, and which product boundaries LitRev must keep owned.
Doc type: Research evidence

## Document Rules

This document is a cross-source research synthesis. It records what LitRev can
learn from external open-source systems, which ideas deserve prototypes, and
which boundaries must stay inside LitRev.

This document does not own product truth, accepted architecture, current
implementation, package boundaries, or final dependency choices. Product truth
belongs in `docs/product/`. Accepted stack direction belongs in
`docs/architecture/`. Hard-to-reverse decisions belong in
`docs/architecture/decisions/`.

### Update Policy

Update this document when a source evaluation, prototype, license review, or
explicit product/architecture decision materially changes what LitRev should
adapt, avoid, or prove next.

When a recommendation becomes accepted architecture, promote it into the relevant
architecture document or ADR. This file should remain the research trail, not
the canonical decision record.

## Evidence State

This is a synthesis document, not a finished per-source evaluation.

Current inputs:

- Yaacov's product notes and collected model-answer research.
- LitRev's documentation policy, product documents, and proposed architecture
  direction as of 2026-06-27.
- Related scientific-tool landscape and architecture-scorecard research.
- Focused data-analysis and figure-tool source scan on 2026-06-27.

Remaining evidence gaps before architecture promotion:

- source links for each evaluated project
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

Open-source adaptation here means study, prototype, adapt, or integrate an idea.
It does not mean fork a product wholesale or copy code without a license review.

The main rule is:

> LitRev owns the scientific product core. Open-source projects provide proven
> mechanisms around that core.

## Truth Boundary

LitRev should have one canonical scientific model. Everything external attaches
to it as an adapter, engine, projection, or export artifact.

| Boundary | Meaning | Examples |
|---|---|---|
| Canonical LitRev model | The durable project truth. | Project, Paper, SourceChunk, Claim, EvidenceLink, ScreeningDecision, Dataset, Analysis, Figure, Manuscript, AgentAction, Provenance. |
| Engine adapter state | Runtime-specific state that can be cached, inspected, and rebuilt from the LitRev model. | PaperQA context stores, ASReview screening DBs, GROBID/Docling extraction outputs, executor session metadata. |
| Editor projection | State used to render and edit a manuscript, not the manuscript truth itself. | Tiptap JSON, Plate/Slate state, Lexical state, Yjs document state. |
| Export artifact | A generated package or file derived from the LitRev model. | Quarto project, Pandoc AST, MyST document, LaTeX/Typst output, Word export, JATS export. |
| Agent runtime log | A replayable history of tool calls, approvals, diffs, errors, checkpoints, and artifacts. | Goose sessions, Codex sessions, OpenCode sessions, LitRev AgentRun records. |

This boundary prevents a common architecture mistake: letting the most convenient
tool format quietly become the product truth.

## LitRev-Owned Core

These pieces should not be copied from any external project. They are the product
itself.

| Core area | What LitRev must own | Why this cannot be outsourced |
|---|---|---|
| Scientific project graph | Projects, questions, searches, papers, source chunks, claims, evidence links, protocols, datasets, analyses, figures, manuscripts, citations, reviews, agent actions, provenance, exports. | No existing source has the full research lifecycle as one connected object model. This is the thing that makes LitRev LitRev. |
| Evidence model | A claim can link to exact paper regions, extracted values, screening decisions, analyses, and manuscript assertions. | Generic RAG, PDF extraction, and reference managers do not enforce scientific traceability deeply enough. |
| Local project contract | A project is a real folder with readable files, local structured state, snapshot/artifact versioning that may be Git-backed, exports, datasets, figures, and logs. | This is the trust and durability spine. It must be designed around scientists, not around a generic coding repo or cloud database. |
| Agent work contract | Every meaningful agent change has permissions, logs, diffs, provenance, rollback, and an explanation tied to project evidence. | Coding agents have useful mechanics, but they do not understand scientific accountability by default. |
| Scientific memory | Project memory remembers protocol decisions, evidence judgments, extraction choices, writing preferences, analysis decisions, collaborator choices, and prior agent work. | Memory needs scientific semantics, not only conversation recall. |
| Research cockpit UI | The UI exposes the project graph through workspaces: library, protocol, evidence, draft, analysis, figures, memory, runs, and sharing. | A generic chat app, IDE, ELN, notebook, or paper library would make the product center wrong. |

## Primary Sources For Prototypes

These are the sources most likely to shape early architecture prototypes after
the canonical LitRev schema and event contract exist.

### Local Agent Platform

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Goose | Local daemon/sidecar posture, sessions, recipes, scheduler ideas, MCP extensions, provider registry, safety inspectors, desktop sidecar patterns, repeatable task workflows. | Goose seems closest to the local agent platform layer: something that can live beside the app and coordinate tools/providers safely. | Do not make Goose the product center. LitRev is a scientific workspace containing an agent platform, not an agent platform with science tools bolted on. | Needs deeper code-level review focused on daemon/session/provider/safety/recipe architecture. |
| OpenCode | File/shell/edit executor, LSP/code-project operations, snapshots, session protocol, CLI/TUI/server/client split, plugin/tool architecture. | LitRev needs the power to read/write files, run commands, create artifacts, and show diffs like a serious coding agent. | Do not turn LitRev into "OpenCode for science." The scientific object graph must remain above the executor. | Candidate executor reference; needs source-backed harness prototype. |
| Codex app-server | Approval protocol, sandbox model, diff flow, interrupt/rollback/session protocol, file API, skills/MCP, Rust daemon boundary. | Useful comparator for what a trusted local executor and approval model can feel like. | Do not depend on Codex-specific assumptions as the only runtime path. | Needs direct harness comparison against OpenCode. |
| Aider | Git-centered edit discipline, repo maps, patch workflow, simple terminal ergonomics. | Useful as a benchmark for file changes and rollback, even if not the main architecture. | Do not make the app Python-first or terminal-first because Aider is good. | Side benchmark, not primary source. |

Recommendation: treat Goose as the current leading reference for the local agent
substrate, and OpenCode/Codex as the current leading executor references. LitRev
should put a thin, testable adapter over executor candidates instead of betting
everything on one executor too early.

### Desktop Shell, Backend Lifecycle, And Provider Abstraction

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| T3 Code | Desktop/backend process lifecycle, provider-instance patterns, remote/SSH/Tailscale ideas if needed, multi-surface product structure. | Gives practical patterns for a desktop agent app that coordinates backends and providers. | Do not inherit coding-product assumptions. | Needs targeted review of provider-instance and process lifecycle code. |
| Synara | Orchestration, UI/provider adapters, Effect server ideas, event-sourced orchestration, desktop/web split, worktree/Git flows. | Useful for building a reliable agent workspace that can explain what happened. | Do not copy its UI shape blindly; LitRev needs a research cockpit. | Candidate reference; needs prototype pressure test. |
| Vercel AI SDK | Model/provider abstraction, typed stream parts, tool-call state, approval status, UI message events, mock providers, and model I/O tests. | Useful for model plumbing and chat/event surfaces around LitRev-owned actions. | Do not use it as the abstraction over local executors like OpenCode or Codex. Executor actions need a LitRev-owned contract. | Candidate model I/O layer; needs a narrow harness prototype. |
| Vercel AI Elements | Tool cards, source citations, confirmations, terminal output, file trees, artifacts, plans, queue state. | Useful UI pieces for agent work inspection. | Do not let it make LitRev a generic chat surface. | Side UI pattern source. |

Recommendation: adapt shell/process/provider ideas from T3 Code and Synara, but
keep the scientific navigation and object model LitRev-owned.

### Memory, Provenance, Permissions, And Safety

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Hermes | Checkpointing ideas, relay-auth patterns to verify, slash-command authorization ideas, and context-compression patterns. | Useful as a side-bench for selected safety and continuity mechanics. | Do not let Hermes materially shape the scientific memory/provenance architecture, and do not use it as the primary file-writing executor. | Targeted side review only. |
| Goose | Safety inspectors, provider registry, recipe/session boundaries. | Useful for local agent safety and repeatable task recipes. | Do not make recipes replace scientific skills/protocols. | Needs deeper review. |
| OpenClaw | Gateway, channels, diagnostics, onboarding, app/device continuation, plugin distribution, safe media store ideas, SSRF guards, prompt-injection-safe file context. | Useful when LitRev grows beyond desktop into cloud/mobile/channel continuity and needs hardened external input handling. | Do not make LitRev a personal messaging assistant or center the product on chat/voice sessions. | Side-to-core later; security-specific ideas deserve targeted review. |
| Earlier LitRev prototype | Memory trust metadata, memory UI, durable agent runs, checkpoints, autonomy controls, idempotency records. | Earlier product work has valuable reliability patterns that should not be discarded. | Do not copy an older hosted persistence shape if the next product is local-first. | High value; already inventoried. |

Recommendation: build a LitRev memory/provenance layer using earlier prototype
typed run/memory concepts, Goose/Codex action/session metadata, Stencila-style
provenance concepts, and only small targeted Hermes ideas where they survive
source review.

### Manuscript Editor And Scientific Drafting

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Tiptap / ProseMirror | Schema-controlled rich text, custom nodes, NodeViews, stable block IDs, collaboration path, Markdown/HTML/static rendering, citations and evidence nodes. | Current default candidate for a Google Docs-like scientific editor with custom semantics. Earlier LitRev prototype work also makes it a familiar candidate. | Do not accept a generic Notion-like block editor as enough, and do not treat Tiptap JSON as canonical manuscript truth. It is an editor projection. | Default candidate; needs long-document prototype. |
| Plate | AI-rich editor patterns, comments, diff/suggestion UX, docx import/export, polished component patterns. | It may be an important source for the writing experience, even if not the final editor base. | Do not assume Slate/Plate wins without long-manuscript and collaboration tests. | Must prototype against Tiptap. |
| Lexical | Performance, accessibility, headless editor architecture, Word/HTML import lessons. | Serious fallback if Tiptap/Plate struggle with long scientific documents. | More DIY for scientific features. | Challenger prototype. |
| Overleaf | Academic writing workflow, LaTeX project model, compile logs, templates, collaboration expectations. | Scientists know it; it teaches submission and LaTeX workflows. | Do not fork Overleaf or become LaTeX-first. | Reference only unless export integration. |
| Word / Google Docs | Track changes, comments, collaborative writing expectations, non-technical manuscript UX. | Many scientists live here. Export/import must respect their workflows. | Do not make LitRev generic office software. | Product reference. |

Recommendation: use Tiptap first, prototype Plate and Lexical against the same
scientific document, and keep Overleaf/Word/Google Docs as UX and export
benchmarks.

### Citations, Reference Library, And PDF Reading

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Zotero | Import/export, translators, PDF reader/annotations, collections, tags, citation insertion, CSL, group-library expectations. | Zotero is the reference manager scientists already trust. LitRev must cooperate with it. | Do not rebuild Zotero first. | Core integration target. |
| JabRef | BibTeX/BibLaTeX correctness, citation keys, local `.bib` durability, PDF metadata writing, citation relation views. | Important candidate for open local citation correctness. | Do not inherit Java desktop product shape. | Candidate citation reference; needs source evaluation. |
| CSL ecosystem | Citation styles, bibliography generation conventions. | Required for real manuscript output. | Do not invent a private citation style system. | Required integration. |
| Paperpile / Mendeley / EndNote / ReadCube | User expectations for reference workflows, institutional habits, Google Docs/Word integration patterns. | Scientists will import from or compare to these. | Do not build around proprietary assumptions. | Side reference. |

Recommendation: make Zotero/JabRef/CSL compatibility a first-class kernel
requirement, not a plugin afterthought.

### Document Ingestion And Evidence Extraction

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| GROBID | Scholarly PDF extraction, TEI output, references, citation contexts, figures, tables, affiliations, PDF coordinates. | Leading scholarly parser candidate. Coordinates are critical for evidence traceability. | Do not make TEI the whole LitRev object model. | Sidecar candidate. |
| Docling | Multi-format conversion result boundary: PDF, Word, PowerPoint, HTML, image, LaTeX, Markdown, JATS, XML, tables, page/item provenance, confidence/errors/timings, document pipelines. | LitRev will ingest more than scholarly PDFs, and ingestion must expose what was converted, where it came from, how confident it is, and what failed. | Do not rely on it alone for scholarly references until benchmarked, and do not let Docling's internal result format become canonical LitRev state. | Sidecar candidate. |
| Marker | PDF-to-Markdown benchmark. | Useful for readable agent input and fallback extraction. | Do not choose it without corpus benchmark. | Side benchmark. |
| Earlier LitRev extraction work | Existing PDF/metadata processing, artifact review, extraction confidence/failure handling. | There is previous product flow worth preserving. | Do not assume previous extraction quality is good enough for the next architecture. | Keep the flow, benchmark the engine. |

Recommendation: use GROBID and Docling together. GROBID for scholarly structure;
Docling for general document conversion. LitRev should own the evidence graph
above both.

### Scientific QA, RAG, And Evidence Answers

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| PaperQA | `Doc` / `Text` / `Context` split, citation-grounded scientific QA, cited context provenance, paper-directory indexing, clients for Crossref/OpenAlex/Semantic Scholar/Unpaywall/retractions. | Important open-source scientific RAG candidate, and its source/context split is useful for LitRev evidence linking. | Do not treat RAG output as truth without evidence objects and review. Do not use PaperQA persistence as canonical project state. | Sidecar/reference candidate. |
| Elicit | Evidence tables, structured reports, extraction and screening UX, sentence-level citations. | Best commercial benchmark for AI literature workflows. | Do not become a cloud-only Elicit clone. | Product reference. |
| Consensus / SciSpace / scite | Claim synthesis, paper Q&A, citation context, support/contrast/mention framing. | Useful for answer UX and evidence relationship semantics. | Do not accept black-box synthesis without inspectable sources. | Side reference. |

Recommendation: PaperQA can inspire the engine, but LitRev must make every
answer land in project evidence objects, not just chat text.

### Screening, Review, Protocols, And PRISMA

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| ASReview | Project directory persistence, screening decision DB, active-learning loop, project schema, simulation, model components, screening queues. | Leading open-source screening engine candidate, with useful boundaries between review data, decisions, and model-driven prioritization. | Do not let the model silently decide inclusion/exclusion. Do not use ASReview's DB/web stack as canonical LitRev state. | Source candidate. |
| Rayyan | Screening UX, collaboration, inclusion/exclusion reasons, PRISMA-like review operations. | Strong product benchmark for systematic review teams. | Do not copy SaaS-only workflow assumptions. | Product reference. |
| Covidence / DistillerSR / EPPI-Reviewer / RevMan / JBI SUMARI | Institutional review workflows, risk of bias, extraction, compliance expectations. | These define what evidence teams expect. | Do not treat enterprise workflows as day-one scope. | Side reference. |
| protocols.io / SciNote / RSpace / eLabFTW | Protocol authoring/execution, lab procedures, experiment records. | Useful for protocol objects beyond literature reviews. | Do not become a wet-lab ELN before the literature core works. | Side-to-core later. |

Recommendation: build protocol and screening as first-class objects early.
ASReview is the main open-source source; Rayyan/Covidence/etc. are UX and
workflow references.

### Scientific Publishing, Export, And Submission

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Quarto / Pandoc | Multi-format scientific publishing, citations, crossrefs, executable docs, Word/PDF/HTML/Typst/LaTeX paths, document schemas, defaults/templates/filters, export artifact DAG ideas. | Primary pragmatic export lane to test first. | Do not force users to author raw Quarto if the UX should be Google Docs-like. Do not make Quarto internals or Pandoc AST the LitRev core. | Primary export prototype. |
| MyST | Scientific Markdown, JATS, citations, crossrefs, TeX/Typst export, notebook publishing. | Credible source-format and publishing challenger to Quarto/Pandoc. | Do not make source Markdown the only UX. Do not promote it before export needs are benchmarked. | Challenger export/source-format prototype. |
| Manubot | Git-backed automated manuscript pipeline. | Useful for reproducible manuscript build ideas. | Not a live scientific editor. | Side reference. |
| Typst / LaTeX / Overleaf | Final typesetting and academic submission expectations. | Export credibility depends on them. | Do not become typesetting-first. | Export target/reference. |

Recommendation: keep LitRev's internal manuscript model separate from export
formats. Prototype Quarto/Pandoc first, keep MyST as the challenger, and export
to Word/PDF/HTML/LaTeX/Typst where feasible rather than making any one format
the product core too early.

### Scientific Schema And Provenance

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Stencila | Semantic scientific document schemas, executable/provenance-aware documents, agent actions, figure workflows, and structured document-object ideas. | Valuable as a science-native schema and provenance reference for LitRev's own document and evidence model. | Do not adopt the whole product, and do not let Stencila schemas replace the canonical LitRev model without a deliberate architecture decision. | Deep source evaluation required. |

Recommendation: study Stencila for semantic document and provenance ideas, not
as an export engine peer. Any Stencila-inspired shape must be translated into
LitRev-owned objects before it can become project truth.

### Data, Code, Analysis, Figures, And Scientific Artifacts

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| marimo | Reactive Python analysis objects, dependency DAG, stale propagation, SQL cells, app/script duality, Git-friendly notebooks, AI-native data work. | Best current analysis-workbench inspiration for LitRev because an agent can write real Python while the UI can expose dependency state and stale outputs. | Do not make LitRev a notebook app. Do not let marimo runtime state become the canonical `Analysis` object. | Primary analysis-workbench prototype candidate; official-doc scan done, code/license/prototype still needed. |
| JupyterLab / `.ipynb` | Kernel ecosystem, notebook import/export, notebook compatibility, scientist familiarity, extension expectations. | Researchers already have notebook projects, and many collaborators will expect notebook continuation. | Do not embed the whole JupyterLab UI as the LitRev workspace, and do not make hidden notebook state the analysis truth. | Compatibility target, not product core. |
| DuckDB | Embedded analytical SQL over local files and local project data. | Strong fit for local-first analysis: agents can query CSV/Parquet/Arrow-style data without requiring a cloud warehouse or server database. | Do not make DuckDB the project database or provenance model. It is an execution/query engine under LitRev objects. | Add as primary local analysis engine candidate. |
| pandas / Polars | DataFrame manipulation, cleaning, joins, reshaping, exploration, lazy/eager tabular pipelines. | pandas is still the compatibility language of scientific Python; Polars is attractive for performant, lazy, agent-written pipelines over larger local data. | Do not expose library choice as the user-facing model. LitRev should record datasets, transforms, runs, tables, and figures above the DataFrame library. | Add as initial Python data runtime set: pandas for compatibility, Polars for performance. |
| Apache Arrow / Parquet | Columnar interchange and artifact formats between Python, SQL engines, cloud, and exported datasets. | LitRev needs durable, efficient data artifacts that can move between analysis engines and remain inspectable outside the app. | Do not make low-level columnar formats visible as the product model for normal users. | Add as preferred data interchange/artifact direction. |
| Ibis | Portable query/DataFrame expression layer across local and remote backends. | Could let LitRev start local with DuckDB and later run similar analysis code against cloud or institutional backends. | Do not add before a real portability need appears; it can obscure the simple pandas/Polars/DuckDB story. | Later candidate after the first local analysis prototype. |
| SciPy / statsmodels / scikit-learn | Scientific algorithms, statistical modeling, hypothesis tests, predictive modeling, reusable method skills. | LitRev agents will need a trusted baseline for common scientific/statistical tasks, not only generic Python execution. | Do not become a statistics package GUI first, and do not let agents present model output without method notes, assumptions, parameters, and provenance. | Add as core scientific Python runtime references. |
| R / tidyverse / ggplot2 | R analysis compatibility, grammar-of-graphics expectations, statistical ecosystem, collaborator workflows. | Many research groups still rely on R; ggplot2 is a major reference for chart specification and statistical graphics. | Do not make R a day-one core runtime unless the first validation scenario requires it. | Later runtime compatibility and figure grammar reference. |
| DVC / DataLad | Dataset/artifact versioning, large-file management, experiment/data provenance. | Important for reproducible analyses and for projects with files too large or too changeable for ordinary Git. | Too technical for day-one normal users if exposed raw; keep as power-user adapter or internal inspiration. | Later power-user integration; keep in source map. |
| Snakemake / Nextflow / Galaxy / Renku | Reproducible workflows, pipeline execution, non-coder workflow UI, cloud/HPC sessions. | Important for computational science and bioinformatics projects where analysis is a pipeline, not a single script. | Not the day-one product kernel, and not the default analysis UX for ordinary researchers. | Side shelf for workflow expansion. |
| jamovi / JASP / GNU PSPP | Friendly statistical GUI, SPSS-like workflows, classical/Bayesian analysis expectations, reportable tables/plots. | Useful reminders that many researchers want guided statistics and readable outputs, not raw code. | Do not build a separate point-and-click statistics clone; LitRev should keep code-backed reproducibility and agent-run provenance. | UX reference for method assistant and results tables. |
| Orange Data Mining | Visual programming, data mining, ML workflow canvases, no-code exploration. | Useful for seeing how non-coders understand pipelines and model steps. | Do not make LitRev a general visual ETL or no-code ML platform. | Side shelf only unless a visual analysis-plan workflow becomes central. |

Recommendation: LitRev should own `Dataset`, `Analysis`, `AnalysisRun`, `Table`,
`Figure`, `Artifact`, dependency/staleness state, method notes, and provenance.
The first prototype should be marimo-inspired, but the engine stack should be
plain local Python through `uv`, DuckDB for local SQL, pandas/Polars for
DataFrame work, Arrow/Parquet for durable tabular artifacts, and a small trusted
scientific Python package baseline.

### Figure, Table, Diagram, And Visual-Science Sources

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Matplotlib / seaborn | Publication-grade static figures, statistical plots, Python ecosystem defaults. | Most Python scientific plotting still lands here; agents can generate reproducible code and export static outputs. | Do not treat a rendered PNG/SVG as the editable figure truth. Keep code, data, parameters, and figure metadata connected. | Add as default static-figure runtime. |
| Plotly | Interactive, browser-native, publication-quality charts and scientific chart types. | Good fit for inspectable LitRev artifacts and app-embedded exploratory figures. | Do not let Plotly JSON become the only Figure model; store it as one projection/export. | Add as first interactive chart runtime. |
| Altair / Vega-Lite | Declarative chart specifications, JSON grammar, concise interactive graphics. | Best candidate for agent-editable chart specs because an agent can modify a structured grammar rather than pixel output. | Not enough alone for every publication figure or complex custom visual. | Add as primary editable/declarative chart-spec reference. |
| Bokeh / HoloViz / Panel / Datashader | Browser dashboards, widgets, large/streaming data visualization, Python-to-web apps. | Useful when LitRev needs richer exploratory dashboards or very large visual data. | Too broad and framework-like for the first figure core. | Side shelf after Plotly/Altair prototype. |
| Observable Plot / D3 | Web-native exploratory charts and custom visualization grammar. | Useful for LitRev's React surface when a figure or evidence view needs custom web interaction. | Do not make researchers author JavaScript to get normal scientific figures. | Side reference for web UI charts. |
| Great Tables / gt | Publication-ready tables in Python/R with structured table parts and exportable formats. | Scientific outputs often include tables as much as figures; tables need provenance, styling, captions, and manuscript links. | Do not reduce tables to screenshots or arbitrary HTML. | Add as table-output reference. |
| Mermaid / Graphviz / Cytoscape.js | Diagrams-as-code, graph/network diagrams, evidence graphs, workflow graphs. | LitRev will need visualizations of claims, evidence, protocols, and analysis dependencies, not only statistical charts. | Do not make graph layout output the project graph truth. | Add as diagram/graph-output references. |
| tldraw / Excalidraw / xyflow | Canvas editing, whiteboard diagrams, node-based workflows, visual planning. | Useful for protocol sketches, evidence maps, analysis flow views, and editable figure planning surfaces. | Do not make LitRev canvas-first or treat a freeform canvas as scientific provenance. | Keep and expand as side component sources. |
| Inkscape / diagrams.net / BioIcons | SVG editing, diagram editing, open scientific icon libraries. | Useful for final figure polish and biology/chemistry illustration assets, especially as open alternatives to commercial illustration tools. | Do not rebuild Illustrator/BioRender first; integrate/export where useful. | Add as open figure-polish and icon-source references. |
| napari / Fiji / ImageJ / CellProfiler / QuPath | Bioimage viewing, annotation, quantitative image analysis, microscopy/pathology workflows. | Crucial for life-science projects where figures come from images and measurements, not simple tables. | Do not make bioimage analysis part of the general first core unless the validation scenario requires it. | Domain-specific side shelf with high future value. |
| RDKit / Mol* / 3Dmol.js / Biopython | Chemistry, molecular, structural-biology, and bioinformatics computation/visualization. | Important for discipline-specific figure and analysis adapters. | Do not overload the first product with every scientific domain toolkit. | Domain-specific side shelf; add when a project scenario needs it. |
| Streamlit / Dash / Shiny / Gradio | Data apps, dashboards, interactive reports, model demos. | Useful for artifact-export and "share this analysis view" patterns. | Do not make generated apps the LitRev analysis model or primary UI. | Side reference for shareable analysis artifacts. |
| BioRender / GraphPad Prism / OriginPro | Commercial figure/statistics UX expectations. | Scientists need modifiable figures, statistical outputs, templates, annotations, and publication polish. | Mostly commercial/reference only. | Product reference, not source-code adaptation. |

Recommendation: LitRev needs multiple figure lanes, not one figure library. The
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

| Source | Adaptation target | Why it matters | Do not adopt | Depth status |
|---|---|---|---|---|
| Yjs / Hocuspocus | Real-time collaborative document editing, shared types, awareness, persistence, WebSocket backend. | Default first candidate if Tiptap remains the editor. | Do not use Yjs as the whole project database. | Core collaboration candidate. |
| Yorkie | CRDT document server, schemas, server-side document lifecycle. | Serious challenger to Hocuspocus. | Adds Go/service complexity. | Challenger prototype after conflict cases are defined. |
| PowerSync / Electric | SQLite-to-cloud and Postgres-backed sync candidates for structured project state. | Current architecture direction already points toward SQLite-to-cloud sync for non-manuscript project state. | Do not choose one before testing conflict semantics on LitRev objects. | Primary structured-sync candidate set. |
| TinyBase / RxDB / cr-sqlite | Local-first metadata and replication experiments. | Useful fallback or reference set if the primary sync candidates do not fit LitRev's object model. | Do not expand the first validation pass to every sync engine without a strict harness. | Secondary sync reference set. |
| OSF | Open-science project sharing and external integrations. | Good model for connecting to GitHub, GitLab, Google Drive, Dataverse, Figshare, Zotero, etc. | Do not make OSF the source of truth. | Side-to-core for sharing. |
| Dataverse | Dataset repository deposit, metadata, APIs, groups, permissions, export. | Important for institutional data publication. | Do not build a repository platform inside LitRev. | Deposit/export reference. |
| GitHub / GitLab | Versioning, review, remote backup, collaborator workflows. | Useful as optional project remote. | Do not make Git the only sync/collaboration story. | Required optional integration. |

Recommendation: split collaboration into three problems: manuscript realtime
editing, structured project-state sync, and cloud sharing/deposit. First define
LitRev conflict cases, then test a narrow candidate set against those cases.

## Secondary Sources To Revisit

These are not first-core sources, but each has something worth returning to.

| Source group | Why it stays on the side shelf |
|---|---|
| Benchling, LabArchives, Labfolder, Labguru | Useful for lab operations, institutional expectations, inventory, compliance, and biotech workflows. Too domain-specific and commercial to define the first LitRev core. |
| BioRender, GraphPad Prism, OriginPro | Important commercial references for figure/statistics UX. Use them to understand scientist expectations, while the open figure stack above drives adaptation and prototyping. |
| Covidence, DistillerSR, EPPI-Reviewer, RevMan, JBI SUMARI, Nested Knowledge | Important for mature systematic review workflows and compliance. Revisit when review-team/collaboration/risk-of-bias depth becomes central. |
| Mendeley, EndNote, Paperpile, ReadCube Papers | Important import/export and user-expectation references. Zotero/JabRef/CSL should drive the open core first. |
| Google Docs, Microsoft Word | Essential UX/export benchmarks for comments, suggestions, and manuscript exchange. Not product foundations. |
| OpenAlex, Semantic Scholar, Crossref, PubMed, arXiv, Unpaywall, OpenCitations | External data/search sources and scholarly graph APIs. They feed LitRev; they do not define the app architecture. |
| LangGraph | Useful for explicit long-running scientific workflows. Do not make it the whole agent architecture. |
| Tauri/Rust shell | Revisit after Electron/React prototypes expose a real limitation. Rust remains excellent for sidecars. |

## Prototype Sequence

Do these in order because each one reduces a major architecture risk.

0. Canonical LitRev schema and event contract.
   Define the first version of LitRev-owned project objects before any tool
   shootout: `Project`, `Paper`, `SourceChunk`, `Claim`, `EvidenceLink`,
   `ScreeningDecision`, `Manuscript`, `Analysis`, `Figure`, `AgentAction`,
   `Provenance`, and an event/action log. Every later prototype must read and
   write through this contract, even when an external engine has its own storage
   or document format.

1. Agent kernel shootout.
   Build one local project scenario and run it through Goose-inspired daemon
   ideas, Codex/OpenCode executor adapters, and Synara/T3-style shell logs. The
   scenario should import papers, create a protocol, edit a draft, run a script,
   update an artifact, and show approvals/diffs/provenance through the LitRev
   object and event contract.

2. Evidence pipeline.
   Import from Zotero/JabRef, parse with GROBID and Docling, answer with PaperQA,
   and screen with ASReview. The pass condition is exact source traceability for
   every extracted value and answer, while keeping LitRev's Paper, SourceChunk,
   EvidenceLink, and ScreeningDecision objects as the canonical state.

3. Scientific editor shootout.
   Build the same manuscript slice in Tiptap, Plate, and Lexical. Include
   citations, evidence-linked claims, comments, suggestions, figures, tables,
   equations, stable block IDs, and export.

4. Publishing export prototype.
   Map LitRev manuscript/evidence objects to Quarto/Pandoc first and MyST as a
   challenger. Export to Word/PDF/HTML/LaTeX or Typst where feasible. Treat each
   export as an artifact DAG generated from LitRev state.

5. Scientific schema and provenance prototype.
   Compare LitRev manuscript/evidence objects against Stencila-style semantic
   document and provenance concepts. The pass condition is not adoption of
   Stencila, but a clearer LitRev-owned shape for document semantics, executable
   steps, provenance, and agent-authored changes.

6. Analysis and figure prototype.
   Define `Dataset`, `Analysis`, `AnalysisRun`, `Table`, `Figure`, and
   `Artifact` objects; run Python through `uv`; query local data through DuckDB;
   transform data with pandas or Polars; produce a static Matplotlib figure, an
   interactive Plotly figure, an editable Altair/Vega-Lite spec, and a
   manuscript-ready table; link every output back to data, code, parameters,
   method notes, captions, manuscript claims, and stale-output checks.

7. Collaboration and sync prototype.
   First define conflict cases for LitRev objects: concurrent manuscript edits,
   evidence judgment changes, screening decisions, citation edits, agent actions,
   and artifact updates. Then test Yjs/Hocuspocus for document-like collaboration
   and PowerSync/Electric for structured project-state sync. Keep Yorkie,
   TinyBase, RxDB, and cr-sqlite as challengers or fallback references unless the
   first pass exposes a real gap. Validate every synced shape against LitRev
   schema before it becomes project truth.

## Current Synthesis

Current research points toward LitRev as a local-first, cloud-mirrored scientific
workspace with a LitRev-owned project graph; TypeScript/React product logic;
Electron-first desktop delivery unless a real limitation appears; SQLite local
project state mirrored to Postgres/object storage; OpenCode as the first
executor spike; Codex as the safety/sandboxing reference; Goose as a broader
local-agent architecture reference; Tiptap/ProseMirror-family writing;
GROBID/Docling/PaperQA/ASReview-powered evidence workflows; Quarto/Pandoc-first
export with MyST as challenger; Stencila as a scientific schema/provenance
reference; marimo-inspired analysis with Jupyter compatibility; DuckDB,
pandas/Polars, and Arrow/Parquet for local tabular work; Matplotlib, Plotly,
Altair/Vega-Lite, and table-generation tools for figures and scientific
artifacts; and CRDTs only for collaborative document-like surfaces where
simultaneous editing matters.

## Non-Negotiables

- Do not fork a whole product as the base.
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
- Do not rebuild Zotero, Jupyter, Overleaf, or an ELN before proving the LitRev
  project graph.
