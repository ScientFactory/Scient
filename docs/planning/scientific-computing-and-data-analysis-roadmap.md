# Scientific Computing And Data Analysis Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-07-24
Last updated: 2026-07-26
Purpose: Proposes the product boundary, shared-foundation requirements, source strategy, validation approach, and dependency-ordered path for manual scientific code editing, Python, R, MATLAB, notebooks, datasets, tables, figures, analysis runs, reproducible computation, and scientific artifacts in Scient.
Doc type: Planning note

## Document Rules

This roadmap owns the proposed direction and dependency order for Scient's
scientific computing and data-analysis workbench. It does not own the active
product sequence, accepted architecture, current implementation, complete
open-source inventory, or the manuscript and publishing roadmap.

The accepted product contract lives in the [PRD](../product/PRD.md). Current
product sequencing lives in the [Product Roadmap](product-roadmap.md). Detailed
source evidence lives in the
[Open-Source Adaptation Map](../research/source-evaluations/open-source-adaptation-map.md),
and the source-relationship policy lives in the
[Open-Source Adaptation Build Strategy](open-source-adaptation-build-strategy.md).
LaTeX, rich scholarly writing, publishing, and the complete Overleaf-class
capability horizon live in the sibling
[Manuscript, Typesetting, And Publishing Roadmap](manuscript-typesetting-and-publishing-roadmap.md).
Cross-domain requirements, first complete domain slices, source candidates, and
validation gates live in the
[Scientific Domain Workflows Roadmap](scientific-domain-workflows-roadmap.md).

Names in this document describe proposed responsibilities, not accepted
packages, schemas, APIs, or implementation locations. Approval of this roadmap
should authorize the stated product boundary, permanent invariants, near-term
proofs, and focused follow-up decisions. It should not silently accept every
candidate dependency or later capability.

### Update Policy

Update this document when its product boundary, first proof, stage order,
cross-domain contract, validation fixtures, or current implementation snapshot
materially changes. Keep time-sensitive implementation truth pinned to a dated
release or commit. Promote durable architecture into focused architecture
documents or ADRs rather than letting this planning note become the permanent
architecture owner.

## Decision Summary

Scient should build one first-class **Scientific Computing and Data Analysis
workbench**, not separate Python, R, MATLAB, notebook, table, and figure
mini-products.

The first product gap is more basic than a language integration: the shipped
Scient app can view and diff code but does not provide a normal manual source
editor. The workbench should therefore begin with a revision-aware editable
document surface, followed by one execution coordinator, diagnostics, receipts,
artifacts, and recovery. Python, R, MATLAB, Jupyter-compatible notebooks,
Quarto/R Markdown, tables, figures, and later remote compute should attach
through adapters without making an external IDE or runtime the product model.

This roadmap now makes its first real execution choice: **Python through `uv`
is the first `AnalysisRun` adapter proof.** It has the broadest fit with the
accepted scientific validation path, the proposed technology direction, and a
small end-to-end data-to-artifact slice. The shared coordinator must still pass
a contract test for a specialized `DocumentBuild`, so the manuscript lane can
reuse the foundation without waiting for R and MATLAB or creating a second
coordinator.

The near-term product is intentionally finite:

1. Correct file classification and unsupported/recovery states.
2. Add safe first-class manual source editing.
3. Prove the shared execution contract with one real Python adapter.
4. Turn produced CSV, image, SVG, PDF, HTML, logs, and generated files into
   inspectable project artifacts.

**Stages 0–3 are a coherent standalone product.** If no notebook, rich data
explorer, debugger, remote runtime, or domain pack ships afterward, researchers
still gain a useful workbench in which they can edit real code, run a real
analysis, inspect its outputs, recover failures, and continue manually or with
an agent.

R and MATLAB parity is the next explicit expansion, not a hidden requirement
inside the first Python proof. Notebooks, rich data exploration, figures,
language services, debugging, reproducibility, remote compute, and domain packs
then build on the same editor, execution, and artifact contracts.

Domain validation begins with the foundation rather than waiting for a final
domain-pack stage. Neuroscience, biology, and clinical workflows enter earlier
because they match current users and selected rich projects. Chemistry,
mathematics, and computer science remain first-class: each receives an early
bounded fixture and permanent requirements so the shared foundation does not
harden around only tabular life-science analysis. The sibling domain roadmap
owns those slices and gates.

The scientific workbench and manuscript workspace must share document identity,
project resolution, execution lifecycle, diagnostics, artifacts, history,
permissions, and agent review. They should not share one oversized domain model.
`AnalysisRun` and `DocumentBuild` remain distinct specializations, and the
manuscript roadmap owns typesetting and scholarly-authoring depth.

This is a proposed direction, not accepted product truth or architecture.

## Product Boundary

The accepted PRD treats data, code, analysis, figures, and artifacts as one
connected research lifecycle. This roadmap makes that category concrete. It
owns the experience of transforming project data through executable work into
reviewable, reusable scientific outputs.

It includes:

- manual editing of scientific source and configuration files;
- Python, R, and MATLAB runtime integration;
- script, selection, section, cell, notebook, and document execution;
- datasets, tables, runtime variables, logs, figures, and generated files;
- run history, environment receipts, provenance, staleness, comparison, and
  recovery;
- language diagnostics, formatting, testing, and later debugging/profiling;
- local and later remote/HPC computation; and
- agent assistance operating on the same files, runs, diagnostics, and
  artifacts available to the researcher manually.

It does not absorb every adjacent product area:

- LaTeX, Typst, citations, manuscript structure, source/visual scholarly
  authoring, publication profiles, and Overleaf-class collaboration belong to
  the [manuscript roadmap](manuscript-typesetting-and-publishing-roadmap.md).
- The universal local-file opener and HTML/image/SVG/PDF/media viewers are
  horizontal document infrastructure. This workbench consumes them rather than
  creating alternate click handlers or private viewers.
- Project identity, permissions, history, collaboration, and local-first sync
  are cross-cutting platform responsibilities. This roadmap states the
  scientific requirements they must satisfy but does not select their storage
  or sync architecture.
- Evidence, literature review, protocols, ELN behavior, task coordination, and
  project memory retain their own product responsibilities even when analysis
  artifacts link to them.
- BIDS/NIfTI, DICOM, NWB, EEG/MEG, genomics, single-cell, microscopy,
  chemistry, symbolic mathematics, formal proof, software benchmarks, traces,
  and similar workflows belong in typed domain adapters over the generic file,
  data, execution, and artifact contracts described in the
  [Scientific Domain Workflows Roadmap](scientific-domain-workflows-roadmap.md).

Separate categories must still agree on the stable project objects and
relationships that cross them. A figure linked into a manuscript, an agent
comment on a failed run, or a citation to an exported dataset must not become a
copy detached from the producing file, run, artifact, history, or permission
context.

## Current Product Truth

This snapshot was verified on 2026-07-26 against the published
[Scient v0.5.13](https://github.com/ScientFactory/scient-desktop/releases/tag/v0.5.13)
release and `release/stable` commit
[`20c77213`](https://github.com/ScientFactory/scient-desktop/commit/20c77213659f6e98a3706de09fa83f7182a0bc94).
It is implementation evidence, not the long-term product contract.

| Capability | Verified state | Consequence |
|---|---|---|
| Open project and granted absolute local files | Yes. The universal route can resolve and open project files plus explicitly granted absolute local files. | The computing workbench should reuse this route. |
| View ordinary source | Yes. The workspace preview reads and syntax-highlights text. | Researchers can inspect code. |
| Manually edit ordinary source | No. Ordinary source remains a read-only rendered surface. | A real source editor is still the first major gap. |
| Save from the preview | Only the narrow Markdown task-checkbox interaction writes file content. | This is not general editing. |
| View Git/session diffs | Yes. Existing diff and changed-file surfaces are useful foundations. | Review exists, but direct correction still requires an agent, terminal editor, or external app. |
| Run commands | Yes through the terminal when the executable exists. | Execution is shell work, not yet an integrated scientific run. |
| Run Python/R/MATLAB through a workbench | No first-party runtime picker, Run action, normalized output dock, variable inspector, or `AnalysisRun` record exists. | Results are not automatically connected to project provenance. |
| Markdown and common local viewers | Markdown, image, SVG, PDF, HTML, audio, and video routes exist. HTML includes isolated local-site preparation. | Scientific outputs should compose with these viewers rather than rebuild them. |
| Executable scientific documents | `.Rmd`, `.qmd`, `.ipynb`, and typesetting source can be viewed as source but do not have integrated execution/build workflows. | Notebook and document adapters remain proposed. |
| Large text | Reads default to 1,000,000 bytes and report truncation. | A future editor must never save a partial read as a complete file. |
| Binary files | Binary-like content is rejected by the ordinary text reader. | `.mlx`, `.mat`, `.rds`, `.RData`, HDF5, NIfTI, and similar formats require typed viewers/adapters. |
| Concurrent/external edits | The write contract accepts full replacement text without an expected revision. | General editing would risk silent overwrite until the write contract changes. |

Relevant release evidence:

- the pinned
  [workspace preview](https://github.com/ScientFactory/scient-desktop/blob/20c77213659f6e98a3706de09fa83f7182a0bc94/apps/web/src/components/WorkspaceFilePreview.tsx)
  keeps ordinary source read-only and contains the narrow Markdown checkbox
  write path;
- the pinned
  [workspace filesystem](https://github.com/ScientFactory/scient-desktop/blob/20c77213659f6e98a3706de09fa83f7182a0bc94/apps/server/src/workspace/Layers/WorkspaceFileSystem.ts)
  defaults to a 1,000,000-byte read, rejects binary-like content, and writes
  full replacement content without a compare token; and
- the pinned
  [viewer registry utility](https://github.com/ScientFactory/scient-desktop/blob/20c77213659f6e98a3706de09fa83f7182a0bc94/packages/shared/src/localPreviewFiles.ts)
  routes Markdown, source, image, SVG, PDF, HTML, audio, and video.

Availability of Python, R, MATLAB, Jupyter, Quarto, or a TeX distribution on one
development machine is not product truth. Missing, misconfigured, multiple,
removed, or differently installed runtimes must all be normal tested states.

## Target Researcher Experience

The workbench should feel like one scientific project workspace, not a generic
IDE embedded beside chat.

### Product Placement

- **Project explorer:** files, datasets, notebooks, runs, and artifacts.
- **Work tabs:** editable source, rendered document, notebook, table, figure,
  PDF, HTML, or typed scientific viewer.
- **Agent and review:** conversation, explanations, line-linked comments,
  proposed edits, and exact references to files, diagnostics, runs, variables,
  tables, and figures.
- **Output dock:** Run Output, Problems, Variables, Tests, Terminal, and later
  Debug Console.
- **Project Home:** recent/failed runs, stale results, missing runtimes,
  conflicts, review requests, collaborator activity, and important artifacts.

The first slices should strengthen the existing layout rather than introduce a
fully configurable IDE shell.

### Opening And Editing A File

Every file activation should enter the shared universal opener once:

1. Resolve the exact file and whether it is project-owned or external.
2. Classify by content and extension where safe and useful.
3. Select the best registered surface.
4. Show useful loading, empty, unsupported, malformed, missing-resource, or
   recovery states rather than a blank panel.
5. Preserve `Open externally`, `Reveal`, and `Copy path` continuations.

Project-owned editable text should open directly in the editor. A granted
external file should open immediately in view mode and offer deliberate
continuations:

- **Edit original** through a separately granted, revision-aware write
  capability scoped to that exact file;
- **Import or copy into project** when project provenance and collaboration are
  desired; or
- **Open externally** in the user's normal tool.

Import must not be required merely to view or intentionally edit a normal local
file. Editing an external file in place should be explicit and should not imply
that it has become a Scient project artifact.

### Editing And Running

For a normal `.py`, `.R`, or scientific-context `.m` file:

1. Open immediately with syntax-aware manual editing.
2. Show `Saved`, `Saving`, `Modified`, `Save failed`, or `Conflict` truthfully.
3. Run the file, current selection, or recognized section when supported.
4. Select or confirm the runtime only when ambiguity exists.
5. Stream stdout, stderr, diagnostics, progress, plots, tables, and created
   files into one output dock.
6. Preserve an inspectable run receipt.
7. Register meaningful outputs as project artifacts and show current/stale/
   unknown state relative to code, data, parameters, and environment.
8. Let the researcher ask an agent about the exact source, diagnostic, variable,
   run, table region, or figure while preserving direct manual correction.

`.m` is genuinely ambiguous across MATLAB, Wolfram, Objective-C, and other
contexts. Scient should prefer MATLAB only when scientific/project context or
explicit user choice supports it, remember a deliberate choice, and preserve a
plain-text fallback rather than pretending the extension proves the language.

### Notebooks, Data, And Figures

For `.ipynb`, `.Rmd`, and `.qmd`, source/cell/rendered modes should refer to the
same durable document and visible runtime state. Saved output, live output, and
stale output must remain distinguishable. Import/export must report lossy
features, and `Run all from clean state` should be a first-class reproducibility
action.

A dataset should initially open into a read-only inspector showing schema,
types, size, sampling/paging truth, missingness, compact summaries, provenance,
and explicit filter/sort/copy/export scope. Mutation should produce a new file
or reviewable transformation rather than silently rewriting research data.

A figure should open as an artifact with its producing run, code, data,
parameters, caption, dimensions, format, variants, and manuscript usage. It
should not become an anonymous image detached from how it was made.

## Product Invariants

These invariants should survive every stage:

1. **Manual work is first-class.** Anything an agent edits or runs remains
   inspectable and correctable without asking an agent.
2. **One logical document, one explicit authority.** File buffers, notebook
   cells, previews, diffs, rich editors, and agent references are projections
   of one identified document or explicitly reconciled representations—not
   competing truths.
3. **No silent overwrite.** A save is conditional on the revision that was
   edited or enters an explicit conflict flow.
4. **No partial-file save.** Truncated, lossy-decoded, or binary content is
   never written back as if complete text had been loaded.
5. **Shared execution vocabulary, specialized records.** Analysis runs,
   notebook execution, document builds, and agent-triggered work share
   lifecycle, event, diagnostic, cancellation, and artifact vocabulary without
   erasing the distinct semantics of `AnalysisRun` or `DocumentBuild`.
6. **User-installed runtimes remain user-owned.** Scient discovers and connects
   to environments; it does not secretly replace them.
7. **Portable project material outranks hidden state.** Standard source,
   notebooks, environments, data, and exports remain usable outside Scient.
8. **Outputs remain connected.** A table, plot, model, report, or export knows
   the run and inputs that produced it.
9. **Staleness is visible.** Changed code, data, parameters, methods, or
   environment must not leave prior output presented as current.
10. **Agent and manual actions share authority.** An MCP or agent integration is
    not a privileged second product path.
11. **Missing tools are normal.** Missing runtimes, packages, toolboxes,
    licenses, kernels, compilers, fonts, or language servers produce setup
    states—not crashes or blank panels.
12. **Local-first does not mean local-only.** Remote execution can attach through
    adapters without moving canonical project state into an opaque service.
13. **Open before resolving deeply.** The selected file remains visible while
    project, root, dependency, engine, or runtime discovery continues or fails.
14. **Shared substrate, domain-specific UX.** Reuse document identity, project
    context, execution lifecycle, diagnostics, history, artifacts, and viewers;
    keep analysis, notebook, typesetting, and manuscript concepts explicit.
15. **Collaboration is designed early.** Identity, attribution, permissions,
    history, proposals, review, revocation, and recovery must not be retrofitted
    after scientific objects harden. Realtime co-editing can ship later.
16. **Projection loss is never silent.** Imports, exports, rich renderers, and
    alternate formats report preserved, normalized, downgraded, unresolved, and
    lost material.
17. **Editing, execution, collaboration, and history are separable.** Failure or
    replacement in one layer must not corrupt the others.
18. **Capability parity does not require donor lock-in.** Replacing an editor,
    runtime, renderer, collaboration engine, or publishing provider must not
    require replacing the scientific project model.
19. **Collections are not flattened into files.** Participants, samples,
    specimens, sites, sessions, runs, assays, channels, cohorts, conditions,
    timepoints, and software experiments may form typed relationships while
    original files stay portable.
20. **Units and reference systems remain explicit.** Values, coordinates,
    sampling bases, vocabularies, ontologies, and standards retain their
    identity and version.
21. **Large scientific data is progressive.** Metadata, indexes, chunks,
    regions, tiles, paging, and sampling precede eager loading.
22. **Restricted location is part of capability truth.** External,
    institutional, remote, restricted, and de-identified data expose the
    actions actually available without automatically entering generic agent
    context.
23. **Domain standards stay identifiable.** Imported and exported BIDS, NWB,
    AnnData, FHIR, OMOP, CDISC, DICOM, chemical, proof, and trace artifacts do
    not silently become an invented universal Scient format.

## Shared Foundation Contract

The following names identify responsibilities for focused architecture work;
they are not accepted schemas or package boundaries.

### Document Identity And File Lifecycle

Define a document identity above any particular editor or representation.
File-backed source uses a `WorkspaceFileDocument`-like specialization that owns:

- canonical or external path plus stable open-tab identity;
- loaded revision/hash, encoding, line endings, completeness, and file size;
- current buffer, dirty state, selection, folds, undo history, and view mode;
- conditional save, atomic replace, retry, and close/quit flushing;
- file-watcher reconciliation and conflict state;
- recoverable drafts outside the canonical file;
- line/range anchors used by comments, diffs, diagnostics, and agents; and
- capabilities such as editable, runnable, renderable, binary, truncated,
  external, generated, or locked.

Structured-native manuscripts or future scientific objects may share document
identity, revisions, anchors, history, and projections without pretending they
are file buffers. The manuscript roadmap owns that deeper representation
decision.

The current full-replacement write API is insufficient for general editing.
Read must return revision/completeness metadata; write must require the expected
revision, preserve permissions where possible, replace atomically per platform,
and return the new revision.

### Surface Registry

The universal opener and workbench should share a registry containing:

- matcher/classifier and confidence or ambiguity;
- supported modes such as source, preview, log, split, table, notebook, figure,
  collection, multidimensional image, genome, medical image, molecule,
  spectrum, proof state, trace, binary inspector, or external continuation;
- edit/save/run capabilities;
- renderer and action providers;
- project-context, size, platform, and dependency requirements; and
- loading, failure, recovery, and fallback behavior.

HTML, SVG, PDF, image, media, CSV, notebooks, typesetting, and future
scientific viewers should compose here rather than grow extension switches in
multiple click handlers.

### Project And Dependency Resolver

Opening a file and understanding an executable or compilable project are
different operations. An optional adapter-driven resolver should return:

- the selected document and immediate directory context;
- a resolved or candidate root/entry point;
- source, asset, bibliography, configuration, data, and generated-file edges;
- the evidence and ambiguity behind resolution;
- a remembered explicit choice with scoped invalidation; and
- partial, missing, cyclic, external, or unresolved capability states.

It must not turn every file into a project or crawl unbounded directories. The
file opens first; deeper context is progressively resolved only when an action
needs it.

### Execution Coordinator And Specialized Adapters

One coordinator owns lifecycle mechanics:

- provider/toolchain discovery and capability reporting;
- preparation from explicit source revisions and project context;
- start, interrupt, cancel, supersede, and owned process-tree termination;
- normalized streaming events and diagnostics with backpressure;
- logs, files, rich output, partial output, and artifact registration;
- receipts, last-success state, recovery of abandoned/lost attempts; and
- platform-correct paths, quoting, and executable identity.

Specialized adapters retain domain semantics:

- `AnalysisRuntimeAdapter` and `AnalysisRun`: run file/selection/section/cell,
  stateful or short-lived sessions, variables, packages/toolboxes, tests,
  methods, parameters, and data outputs;
- `TypesettingEngineAdapter` and `DocumentBuild`: root, dependencies, recipes,
  compiler passes, bibliography/index work, logs, diagnostics, outputs, and
  source/output synchronization; and
- notebook/executable-document adapters: composition of runtime and build
  behavior rather than one impersonating the other.

The viewer never spawns a compiler or runtime directly.

### Event, Receipt, Artifact, And Staleness Contract

Normalized events include stdout/stderr, diagnostics, progress, unsupported
input requests, rich displays, created/modified files, variable updates, tests,
environment/license warnings, and terminal states such as completed, cancelled,
failed, crashed, superseded, or lost.

Every preserved execution records:

- initiating human or agent and requested action;
- execution/adapter identity and exact executable/version;
- source/document revisions, selection/section/root, and working directory;
- parameters, declared inputs, environment and dependency identity;
- status, duration, exit/cancellation/failure truth;
- logs and rich outputs with size-aware retention;
- produced/changed files and promoted artifacts;
- relationship to prior/retried/superseded work; and
- staleness inputs.

An artifact is more than a path. It has stable project identity, type/format,
producing run, inputs, current/stale/unknown state, current attempt versus last
success, preview/external continuations, revisions, and later links to claims,
manuscripts, evidence, or deposits.

Begin with explicit or observed outputs. Do not promise perfect dependency
inference for arbitrary scripts.

### Environment And Toolchain Resolver

Runtime discovery must work in GUI environments whose `PATH` differs from the
terminal. It should inspect platform conventions and allow explicit executable
selection for Python/`uv`, R/`renv`, MATLAB releases and licensing, Jupyter
kernels, Quarto/Pandoc, and typesetting tools.

Discovery is read-only. Installation, package restore, environment mutation, or
runtime download requires a clear action, visible destination, and recoverable
result.

### Early Collaboration, History, And Permission Gate

The accepted PRD makes collaboration core. Before the document, run, artifact,
or comment models harden, the cross-cutting platform work must define:

- actor identity, project membership, roles, and external guests;
- attribution for human, agent, runtime, import, and synchronized changes;
- comments, suggestions/proposals, accept/reject, and recovery;
- revisions, meaningful history, checkpoints, restore, and deleted-object
  recovery;
- future-access revocation and ownership continuity; and
- the boundary among project authority, local state, cloud mirror, and
  ephemeral presence.

This design work proceeds alongside Stages 0–2 without delaying the first local
single-researcher slice. After stable local scientific state exists, the active
product roadmap owns a narrow asynchronous shared-project validation. Realtime
co-editing, offline multi-device sync, and institution administration remain
later expansions.

## Focused Source Strategy

The full donor inventory and source-depth evidence belong in the
[Open-Source Adaptation Map](../research/source-evaluations/open-source-adaptation-map.md).
This roadmap retains only candidates that materially affect its near-term
sequence.

| Source | Roadmap role | Decision boundary |
|---|---|---|
| [T3](https://github.com/pingdotgg/t3code) | UX/implementation reference for editable file review, line-linked comments, truthful pending state, and save coordination. | Adapt behavior and tests; do not inherit its product model or patched beta editor by default. |
| [CodeMirror 6](https://codemirror.net/) | Preferred source-editor candidate after the common fixture. | Editor state is a projection; it never writes outside the document contract. |
| [Monaco](https://github.com/microsoft/monaco-editor) and existing `@pierre/diffs` | Monaco is the capability challenger; `@pierre/diffs` remains the diff/review foundation. | Do not assume VS Code extensions work in Monaco or force one library to own editing and diffs. |
| [Jupyter services/rendermime](https://jupyterlab.readthedocs.io/en/stable/api/modules/services.html) | Selected protocol/MIME dependencies or references. | Do not embed the JupyterLab application or make live kernel state canonical. |
| [marimo](https://github.com/marimo-team/marimo) | Reproducibility/reactivity reference and optional external adapter. | Do not make a Python-specific notebook representation Scient's cross-language model. |
| [RStudio](https://github.com/rstudio/rstudio) and [Positron](https://github.com/posit-dev/positron) | R/data-science workflow and UX references. | Do not fork/embed them or treat source-available code as permissive. |
| [R languageserver](https://github.com/REditorSupport/languageserver), [IRkernel](https://github.com/IRkernel/IRkernel), and [renv](https://github.com/rstudio/renv) | Initial R language/notebook/environment compatibility path. | Basic editing and execution must degrade cleanly when they are absent. |
| Official [MATLAB VS Code extension](https://github.com/mathworks/MATLAB-extension-for-vscode), [MATLAB MCP Core Server](https://github.com/matlab/matlab-mcp-core-server), and [Jupyter integration](https://github.com/mathworks/jupyter-matlab-proxy) | Official behavior, agent-adapter, and notebook references for user-installed licensed MATLAB. | Do not imply Scient installs MATLAB, grants a license, or can replace manual work with MCP. |
| [DuckDB](https://github.com/duckdb/duckdb), [Arrow](https://arrow.apache.org/), and [Perspective](https://github.com/perspective-dev/perspective) | Data-query/interchange/grid prototype candidates. | Accept only after fidelity, performance, accessibility, Electron, worker, and licensing gates. |
| Native Python/R/MATLAB plots plus [Vega-Lite](https://github.com/vega/vega-lite) | Figure capture and portable declarative-specification path. | Do not force every figure into one library or detach it from the producing run. |
| [Quarto](https://github.com/quarto-dev/quarto-cli) and [Pandoc](https://github.com/jgm/pandoc) | Executable-document adapters and cross-domain proof. | Do not reimplement compilers or make their ASTs canonical project state. |
| [BIDS](https://bids-specification.readthedocs.io/) and [BIDS Validator](https://github.com/bids-standard/bids-validator) | Later neuroscience domain adapter. | Do not couple the generic data workbench to neuroimaging. |
| [Scientific Domain Workflows Roadmap](scientific-domain-workflows-roadmap.md) source set | Focused domain viewer, engine, standard, and workflow candidates for neuroscience, biology, clinical research, chemistry, mathematics, and CS. | Activate only the source needed by a complete fixture; keep detailed evidence in the research map. |

### Source Editor Proof

Compare CodeMirror 6 with the current T3-inspired option using `.py`, `.R`,
scientific-context `.m`, `.qmd`, `.tex`, `.bib`, `.typ`, a large file, a
pathological long line, RTL/bidirectional text, IME, screen-reader/keyboard
behavior, exact agent selections, source/rendered switching, LSP transport,
external modification, conflict recovery, theme, memory, and bundle behavior.

Approve CodeMirror if it passes. Use Monaco only if a necessary desktop
capability cannot be delivered reasonably. Reconsider the newer
`@pierre/diffs/editor` only after its beta/patch/maintenance boundary is
acceptable.

## Ordered Roadmap

The sequence uses user value and dependency, not calendar estimates. The active
[Product Roadmap](product-roadmap.md) remains the authority for when these
capabilities enter the overall Scient product sequence.

### Domain Validation Overlay

Domain support is continuous validation, not only Stage 11:

| Overlay | Shared-stage proof |
|---|---|
| D0 with Stages 0–1 | Representative domain text, metadata, binary, image, collection, and archive files open to a useful surface or honest continuation. |
| D1 with Stages 2–5 | OpenNeuro behavioral, clinical phenotyping, Cancer Biology, medical statistics in R, symbolic mathematics, and CS build/test/benchmark fixtures use the shared run and artifact contracts. |
| D2 with Stages 6–8 | BIDS/NWB, AnnData/genomics, DICOM, molecule, proof-state, and trace prototypes prove typed viewing, large-data behavior, and manuscript links. |
| D3 with Stages 9–10 | Selected pipelines, remote/HPC runs, repositories, and publication packages preserve local/remote authority and reproducibility. |

The [Scientific Domain Workflows Roadmap](scientific-domain-workflows-roadmap.md)
defines the complete slices, source candidates, and non-goals. These overlays
must not delay the standalone Stages 0–3 product, but each stage should avoid
choices that make its next domain fixture impossible.

## Stage 0 — Accurate File Truth And Recovery

**Researcher outcome:** every recognized scientific file opens into a useful
surface or an honest continuation instead of being blank, mislabelled, or
dangerously editable.

1. Correct scientific classification in Scient's own capability layer. Treat
   `.m` as context-dependent and let the user resolve ambiguity.
2. Recognize common Python, R, MATLAB, notebook, typesetting, tabular, array,
   HDF5, and domain extensions even when the current result is a clear
   unsupported/binary viewer.
3. Distinguish known-but-unsupported, missing runtime, binary, too large,
   truncated, malformed, missing, permission denied, and failed-to-load states.
4. Never expose ordinary editing for incomplete or binary content.
5. Preserve Open externally, Reveal, Copy path, and appropriate import/edit
   continuations.
6. Route chat, explorer, run, artifact, and manuscript links through one opener.
7. Preserve Markdown, image, SVG, PDF, HTML, media, diff, terminal, and chat
   behavior through regression coverage.

Exit gate: every fixture resolves to the intended viewer or a useful recovery
state; no recognized scientific type produces a blank panel or false language
certainty.

## Stage 1 — First-Class Manual Source Editing

**Researcher outcome:** a scientist can make and recover ordinary source edits
without leaving Scient or delegating every correction to an agent.

Required behavior:

- edit/create project-owned text files and deliberately edit an external file
  in place through a scoped write grant;
- preserve stable tab/buffer identity and unsaved state across navigation;
- provide undo/redo, indentation, bracket behavior, line numbers, wrapping,
  find/replace, goto line, keyboard navigation, and accessible selection;
- syntax support for Python, R, MATLAB, Markdown, Quarto, LaTeX, YAML, JSON,
  shell, SQL, and existing general languages with a safe fallback;
- truthful dirty/saving/saved/failed/conflicted states;
- manual Save and standard shortcut; enable autosave only after recovery and
  conflict semantics are proven;
- external change detection with Compare, Reload, Keep mine, and explicit
  resolution;
- crash/quit draft recovery without treating the draft as canonical;
- exact line/range comments and agent context;
- Markdown source/rendered switching without lost edit state;
- read-only behavior for generated, locked, truncated, binary, or unsupported
  content; and
- encoding/line-ending preservation plus progressive large-file degradation.

Necessary filesystem work:

- read returns revision/hash, size, encoding, line endings, completeness, and
  capabilities;
- write requires expected revision and returns the new revision;
- atomic replace and permission preservation are platform-tested;
- watcher events and saves reconcile without loops; and
- recovery drafts remain outside canonical files until restored.

Exit gate: a researcher can open, edit, save, diff, recover, and ask an agent
about the same `.py`, `.R`, `.m`, `.qmd`, or `.tex` file without silent loss.

## Stage 2 — Shared Execution Contract And Python Proof

**Researcher outcome:** a scientist can run a Python file or selection, stop it,
understand failure, and inspect exactly what ran without treating terminal text
as the scientific record.

Before implementation, approve the coordinator boundary, base receipt,
cancellation/supersession semantics, diagnostic envelope, artifact handoff,
project context, and contract simulators.

The first real adapter is Python through `uv` or an explicitly selected Python:

- Run file, Run selection, and Stop from the editor/command palette;
- compact runtime/environment indicator;
- stdout, stderr, status, duration, progress, and diagnostics in the output
  dock;
- missing/multiple/misconfigured runtime states with setup continuation;
- visible working directory and exact executable/version;
- current-file run history;
- manual and agent initiation shown in the same surface; and
- a preserved `AnalysisRun` receipt.

The shared contract simultaneously uses a `DocumentBuild` simulator or bounded
spike to prove that one coordinator can support different specialized receipts.
It does not require shipping LaTeX in this stage.

Process correctness includes process-tree cancellation, late-event rejection
after supersession, output backpressure, noninteractive-prompt reporting,
responsive UI, platform-native path handling, and correct distinction among
success, failure, cancellation, crash, superseded, and lost.

Exit gate: the Python fixture runs through the common UI and creates a complete
receipt; missing Python is equally usable as a setup state; the document-build
contract fixture passes without introducing a second coordinator.

## Stage 3 — Outputs Become Project Artifacts

**Researcher outcome:** an analysis produces a coherent, reopenable trail rather
than files scattered beside terminal output.

1. Detect files created, changed, or deleted during a preserved run.
2. Open text/code through the editor; images/SVG/PDF/HTML through shared
   viewers; CSV/TSV through a bounded read-only table preview; unsupported
   output through raw metadata and external/export continuation.
3. Register promoted outputs with source run, runtime, inputs, source revision,
   timestamp, and current/stale/unknown state.
4. Distinguish temporary files, partial output, current attempt, and last
   successful artifact.
5. Keep the last successful preview visible and labelled during a rebuild or
   failed replacement.
6. Let the researcher promote/dismiss discovered outputs so caches do not flood
   Project Home.
7. Provide meaningful text/table/figure comparison where fidelity permits.

Exit gate: one Python run reads a small dataset and produces a CSV, PNG, SVG,
PDF, and HTML report that can be reopened from run history, Project Home, chat,
and the explorer through the same viewer route.

### Standalone Product Gate

At this point Scient has a complete initial scientific-computing workbench:
safe editing, one real runtime, truthful execution, inspectable artifacts,
manual/agent parity, and recovery. This is a shippable stopping point and the
minimum foundation every later stage must preserve.

## Stage 4 — R And MATLAB Adapter Parity

**Researcher outcome:** an R or MATLAB researcher gets the same honest basic
edit/run/stop/receipt/artifact loop rather than a language-specific sidecar.

Validate the common contract with thin adapters:

- R: `Rscript`, selected R home/library, version, and `renv` context;
- MATLAB: supported installed-runtime batch invocation, release, license, and
  project/toolbox discovery; and
- all languages: available, missing, multiple, misconfigured, running,
  cancelled, failed, and successful states.

Do not add language-specific custom panels before Python, R, and MATLAB can at
least use the common Run/Stop/output/receipt/artifact surface.

Exit gate: the same deterministic analysis fixture runs through each available
runtime and produces comparable receipts/artifacts; absent proprietary or
optional runtimes use contract simulators plus explicitly labelled licensed
validation.

This stage intentionally conflicts with the older proposed technology-stack
wording that makes R merely conditional later scope. Approval of this roadmap
should trigger an explicit technology-stack reconciliation; the conflict must
not be silently smoothed away.

## Stage 5 — Language-Native Quality

**Researcher outcome:** each language feels native without changing the common
workbench mental model.

Python candidates include `uv` environment/lockfile truth, a reviewed language
server and formatter/linter such as Ruff, `pytest`, `ipykernel`, and common
scientific-output handoff without making pandas/Polars/NumPy or a plotting
library the product model.

R candidates include installation/library discovery, explicit `renv`
restore/install, `languageserver`, `lintr`, `styler`, testthat, IRkernel,
Quarto/R Markdown, table handoff, ggplot2 figure capture, and later Ark as an
independent challenger.

MATLAB candidates include installation/release/license/toolbox truth; run file,
selection, and section; command output; variables; figures; tests; and later
debugging through supported official interfaces. The official MCP server is an
optional agent lane linked back to the same run/artifact record. `.mlx` remains
a typed binary with Open in MATLAB and fidelity-proven conversion/viewing paths
until Scient can support it honestly.

Exit gate: each language gains useful diagnostics/environment truth while
preserving the common editor, execution, artifact, and recovery model.

## Stage 6 — Jupyter-Compatible Notebooks And Executable Documents

**Researcher outcome:** existing notebooks and Quarto/R Markdown projects open,
edit, run, render, diff, and export without creating a second project shell.

The first notebook slice includes cell/Markdown editing, structural undo,
kernel selection, run/interrupt/restart/clean-run actions, visible session
truth, saved-versus-live output, semantic diff, metadata/fidelity reporting,
and reviewed MIME rendering for text, errors, Markdown, math, images, SVG,
HTML, JSON, tables, Plotly, and Vega.

Imported notebooks and executable HTML/JavaScript output need explicit trust
and isolation behavior, but a valid document should not become blank or
unusable merely because one rich output is unsupported.

Quarto and R Markdown compose `AnalysisRun` and `DocumentBuild`: editable source,
explicit execution/build adapters, citations/figures/logs, shared HTML/PDF/DOCX
viewers, and stale output. marimo begins as ordinary Python source plus an
optional external/managed-session continuation when installed.

Exit gate: standard notebook/executable-document fixtures work through the
same project, runtime, renderer, receipt, and artifact boundaries.

## Stage 7 — Data Explorer And Variable Inspector

**Researcher outcome:** a scientist can understand a dataset or live runtime
object without loading everything, mutating source data, or leaving the project
record.

Begin with CSV, TSV, Parquet, and Arrow. Add Excel through the shared document
infrastructure when fidelity is ready, then typed JSON/JSONL, NumPy, R, MATLAB,
HDF5, and domain adapters.

The DuckDB/Arrow/Perspective prototype must measure first render, memory,
paging, sampling, cancellation, types, dates/time zones, categoricals,
missingness, nesting, wide tables, keyboard/screen-reader behavior, RTL,
selection/copy/export scope, workers, bundle cost, and Electron behavior across
platforms.

The default remains read-only exploration. Explicit transformations create a
new file or reviewable change.

Variables show name, type/class, shape, compact preview, size, paged expansion,
source session, and last update. Tables/arrays and figures open in shared
viewers; live session values become durable only through an explicit artifact
action.

## Stage 8 — Figures And Visual Analysis

**Researcher outcome:** figures remain faithful, reproducible, reviewable, and
connected to their scientific origin.

- capture native static figures from Python, R, and MATLAB;
- support common interactive figures through the accepted HTML/MIME viewers;
- preserve Plotly and Vega/Vega-Lite specifications when available;
- record dimensions, resolution, relevant color metadata, source run, code,
  data, parameters, caption, and export variants;
- add meaningful revision comparison and visual-difference assistance; and
- defer a declarative builder until generated specifications remain ordinary
  editable project files with clean round trips.

Figures and tables link into manuscripts, evidence, presentations, and
repositories without becoming anonymous snapshots.

## Stage 9 — Diagnostics, Testing, Debugging, And Profiling

Add deeper IDE behavior only after editing and execution are dependable:

- Problems aggregation and source navigation;
- previewable code actions/formatting;
- normalized test explorer/history;
- breakpoints, stack, scopes, watches, and debug console through reviewed
  adapters; and
- profiling/performance artifacts connected to runs.

LSP and DAP are adapter protocols, not reasons to embed VS Code.

## Stage 10 — Reproducibility And Remote/HPC Compute

**Researcher outcome:** a local or remote run leaves the same inspectable record
and recovers truthfully from environment drift or disconnection.

Reproducibility includes runtime/environment receipts, Python/R/MATLAB/project
identity, Quarto/Pandoc and kernelspec versions, clean-run verification,
unknown staleness, machine-readable run/artifact manifests, and environment
drift comparison. Containers or packaging remain opt-in after ordinary local
work succeeds.

Remote work can attach to Jupyter servers, SSH targets, and later schedulers
such as Slurm. It must preserve explicit local/remote file and artifact
authority, queued/running/lost states, reconnect, and confirmed cancellation.
Closing a local app must not be described as cancelling remote work unless the
remote system confirms it.

## Stage 11 — Domain Packs And Interoperability

After the generic data, artifact, runtime, and viewer contracts work, domain
packs can deepen typed workflows without redefining the project model.

The first deeper pack follows current-user and rich-project evidence:
neuroscience/BIDS relationships, validation, OpenNeuro continuation,
NIfTI/NWB metadata and bounded viewing, events/confounds, pipeline provenance,
and later EEG/MEG/iEEG. Biology and clinical work proceed through the same
foundation with R/Bioconductor, indexed genomics, AnnData, OME data,
cohort/phenotype artifacts, OMOP/FHIR/CDISC compatibility, and de-identified
DICOM viewing.

Chemistry, mathematics, and computer science are not postponed until those
lanes are complete. Their bounded structure, symbolic/proof, and
build/test/benchmark/trace fixtures begin in D0–D2; Stage 11 adds only the
domain depth justified by active projects.

The [Scientific Domain Workflows Roadmap](scientific-domain-workflows-roadmap.md)
owns the exact lane boundaries and activation gates.

## Researcher Outcomes And Validation Map

Rich projects, deterministic fixtures, and external benchmarks prove different
things. None substitutes for the others.

| Milestone | Researcher-visible proof | Deterministic evidence | Rich-project connection |
|---|---|---|---|
| Stage 0–1 | Open and safely edit Python, R, MATLAB-context, notebook/document source, including failure/recovery. | Editor/file fixture pack. | Supports every later scientific project without blocking the active first slice. |
| Stage 2–3 | Run one Python analysis and reopen its outputs with provenance/staleness. | Shared execution and artifact fixtures. | Use the active project strategy where its analysis step is ready; do not let extra benchmark work delay the bounded proof. |
| Stage 4 | Repeat one analysis through Python, R, and MATLAB where available. | Runtime parity fixture plus simulators/licensed lanes. | Demonstrates that the product serves R/MATLAB researchers rather than only Python users. |
| Stage 7–8 | Inspect data and produce a reproducible table/figure. | Pinned CSV/Parquet/Arrow and figure outputs. | Activate the planned BCG `dat.colditz1994` and exact-output OWID fixtures when the active roadmap reaches data-to-figure work. |
| D0–D2 overlay | Open domain files, run bounded workflows, and inspect typed outputs across all six domain lanes. | Domain fixture portfolio for neuroscience, biology, clinical research, chemistry, mathematics, and CS. | Use OpenNeuro Flanker, clinical phenotyping, Cancer Biology, BCG meta-analysis, plus bounded chemistry/math/CS fixtures before flagship breadth. |
| Stage 11 / D3 | Reproduce a domain pipeline and interoperate with an external standard, repository, or remote system. | Pipeline, large-data, repository, and recovery fixtures. | Use NARPS, CORE-Bench, and BixBench only after lighter precursors pass. |

Every stage must test an ordinary case, missing dependency, malformed input,
failure/recovery case, and manual continuation. Product validation asks whether
a researcher can understand and continue the work; component fixtures ask
whether the contract behaves deterministically.

## Platform Implications

### macOS

- discover GUI-invisible runtimes in app bundles, frameworks, Homebrew, Conda,
  `uv`, and user-selected locations;
- preserve chosen MATLAB release and distinguish Apple Silicon/Intel native
  dependencies;
- include owned subprocesses/local servers in signing, notarization, and
  hardened-runtime review; and
- flush/recover drafts and terminate only sessions Scient owns.

### Windows

- handle drive letters, UNC, spaces, quoting, CRLF, code pages, long paths,
  locked files, and atomic-replace differences;
- distinguish native Windows from WSL runtimes/files;
- discover Python/R/MATLAB without assuming shell `PATH`;
- terminate process trees reliably; and
- test Defender/antivirus effects on temp files, local servers, environments,
  and generated artifacts.

### Linux

- support distro packages, environment modules, user installs, Conda, `uv`,
  MATLAB roots, and HPC paths;
- preserve sandboxed distribution boundaries while exposing deliberately
  selected files and runtimes; and
- distinguish graphical, headless, container, and remote execution.

### All Platforms

- runtime absence, multiple versions, upgrade/removal, and license changes;
- file watching, conflicts, cancellation, orphan cleanup, backpressure, and
  abandoned-run recovery;
- local server ports/tokens/lifecycle;
- Unicode, Hebrew/RTL content, IME, accessibility, keyboard, high-DPI figures;
- local/remote/container/WSL path boundaries; and
- deterministic receipts despite platform launch differences.

## Quality And Fixture Plan

Maintain a small versioned fixture pack that tests capabilities rather than
only components.

### Editor And File Fixtures

- `.py`, `.R`, ambiguous/scientific `.m`, `.Rmd`, `.qmd`, `.tex`, `.bib`,
  `.typ`, JSON/YAML, and unknown text;
- UTF-8, RTL comments, combining characters, CRLF, missing final newline,
  unsupported encoding, very large file, long line, truncation, binary,
  read-only permission, external modification, save failure, and disk-full;
- app/renderer restart with unsaved recovery; and
- source/rendered switching and exact line/range agent references.

### Runtime Parity Fixture

The same small analysis in Python, R, and MATLAB reads one CSV, validates
columns/missingness, calculates a deterministic summary, emits stdout/warning,
and produces CSV, PNG, SVG where supported, and HTML. Include deliberate
failure, slow cancellation, missing package/toolbox, multiple runtime, crash,
and success.

### Shared Execution And Artifact Fixtures

- start, stream, complete, fail, cancel, crash, supersede, and lose connection;
- kill owned child processes and ignore obsolete late events;
- partial output versus last success;
- app-restart recovery/classification;
- shared receipt fields plus distinct `AnalysisRun`/`DocumentBuild` fields;
- created/updated/deleted files and manual edits to generated artifacts;
- source/data/environment changes and unknown staleness; and
- reopening from explorer, Project Home, run history, chat, and manuscript link
  through one viewer route.

### Notebook And Data Fixtures

- clean/out-of-order notebooks, trusted/untrusted rich output, math, images,
  SVG, tables, Plotly/Vega, HTML/JavaScript, errors, metadata round trip, and
  semantic diff;
- R Markdown/Quarto with code, citations, local assets, missing assets, build
  failure, and stale output; and
- CSV/TSV/Parquet/Arrow plus typed/broken NumPy, R, MATLAB, HDF5, zero-byte,
  malformed, extension/content mismatch, permission failure, sampling, filter,
  sort, export scope, and cancellation.

### Domain Fixture

Maintain a bounded portfolio rather than one neuroscience-only fixture:

- OpenNeuro Flanker plus BIDS success/error and a small NIfTI/NWB inspection;
- the selected clinical phenotyping and Cancer Biology projects plus BCG
  meta-analysis;
- a small genomics or single-cell collection with sample and assay metadata;
- a small molecule/macromolecular structure with malformed and multi-molecule
  cases;
- one exact SymPy derivation and one checked Lean theorem; and
- one multi-language CS repository with build, tests, deterministic benchmark,
  trace/profile, and exact revision.

Flagship NARPS, CORE-Bench, and BixBench work follows the lighter fixtures.

## What Not To Build First

- Do not fork VS Code, RStudio, Positron, JupyterLab, MATLAB, or a whole
  scientific IDE to avoid defining Scient's project contracts.
- Do not build separate Python, R, and MATLAB products.
- Do not call read-only syntax highlighting an editor.
- Do not adopt T3's beta editor solely because it provides a quick edit loop.
- Do not build notebooks before safe ordinary editing and one script run.
- Do not use MCP as the only MATLAB integration or imply Scient supplies MATLAB
  or its license.
- Do not make `.mlx`, notebook JSON, proprietary binaries, live variables,
  editor state, or hidden databases the universal analysis model.
- Do not mutate datasets through a convenient grid without an explicit
  transformation/provenance record.
- Do not enable arbitrary interactive output in the main application renderer.
- Do not promise perfect dependency/staleness inference for arbitrary scripts.
- Do not postpone identity/history/permission design until realtime
  collaboration, and do not build realtime co-editing before authority and
  conflict semantics.
- Do not delay useful viewing or deliberate editing because a perfect typed
  viewer/editor is unavailable.
- Do not postpone mathematics and computer science until every life-science
  integration is complete.
- Do not create separate domain workbenches or make one domain standard the
  generic Dataset, AnalysisRun, or project model.

## Approval Package

Approval should be separable rather than all-or-nothing.

### A. Product Boundary And Permanent Principles

Approve Scientific Computing and Data Analysis as the owner of manual
scientific source editing, runtime integration, notebooks, data exploration,
figures, analysis runs, and artifacts, governed by the invariants above.

### B. Near-Term Standalone Product

Approve Stages 0–3: accurate file truth, revision-aware editing, a shared
execution coordinator with Python as the first real adapter, and outputs as
reopenable artifacts.

### C. Cross-Domain Contract

Approve one shared responsibility boundary for document identity, surfaces,
project resolution, execution lifecycle, diagnostics, receipts, artifacts,
history, permissions, and review, while retaining distinct analysis and
document-build semantics.

### D. Authorized Spikes, Not Dependency Acceptance

Authorize the source-editor fixture; execution/document-build contract proof;
Python/R/MATLAB parity fixture; and later DuckDB/Arrow/Perspective,
Jupyter/MIME, language-service, and debug-adapter evaluations. A spike winner
still needs the appropriate architecture, dependency, license, and platform
decision.

Also authorize the D0 domain fixture portfolio and the bounded D1 proofs in the
Scientific Domain Workflows Roadmap. Rich viewers, pipeline engines, and
institutional integrations remain separately gated source spikes.

### E. Explicitly Deferred Expansion

Keep language-native depth, notebooks, rich data/variables, figures, debugging,
remote/HPC, and domain packs in the proposed order. Keep manuscript/typesetting/
publishing depth in its sibling roadmap. Do not treat the full horizon as a
commitment in the first implementation.

## Open Decisions And Required Reconciliation

- exact document/revision/conditional-write representation;
- source-editor winner after the common fixture;
- first Python environment discovery and selection UX;
- retention and promotion policy for logs, rich output, and discovered files;
- staleness inputs that are explicit, inferred, or unknown in the first slice;
- external edit-in-place grant, expiration, conflict, and audit UX;
- R/MATLAB support timing reconciliation with the proposed technology stack;
- first notebook client/MIME dependency set and imported-output behavior;
- data explorer prototype pass thresholds;
- typed collection, units/reference-system, large-data, domain-viewer state,
  workflow-run, and restricted-location boundaries;
- first accepted domain fixtures and component prototypes across all six lanes;
- which decisions are hard enough to require ADRs.

## Next Planning Handoffs After Approval

Create only the handoffs needed for active work:

1. document identity, file lifecycle, conditional-write, and surface-registry
   architecture;
2. shared execution, diagnostics, receipts, artifact/last-success/staleness
   architecture with `AnalysisRun` and `DocumentBuild` contract fixtures;
3. source-editor interaction design and dependency spike;
4. Python vertical-slice implementation/quality plan;
5. early identity/history/permission/collaboration requirements routed to the
   existing cross-cutting architecture owners;
6. technology-stack reconciliation for R/MATLAB timing if this proposal is
   accepted; and
7. D0 domain file/metadata fixtures and the first bounded domain proofs from the
   Scientific Domain Workflows Roadmap.

Later notebook, data, figure, debug, remote, and domain documents should be
created only when their stage becomes active.

## Roadmap Completion Criteria

This proposal is ready for an approval decision when reviewers agree that it:

- preserves the accepted PRD and active product-roadmap authority;
- defines a coherent standalone Stages 0–3 product;
- chooses Python as the first real proof while preserving shared
  `AnalysisRun`/`DocumentBuild` mechanics;
- keeps manual and agent work on the same project objects;
- provides a real R/MATLAB parity milestone without blocking the first proof;
- connects code, data, runs, figures, tables, and artifacts with truthful
  staleness and recovery;
- designs collaboration foundations early while deferring realtime depth;
- keeps manuscript/typesetting depth in the linked sibling roadmap;
- keeps neuroscience, biology, clinical research, chemistry, mathematics, and
  computer science first-class without fragmenting the workbench;
- distinguishes dependencies, adapters, references, proprietary runtimes, and
  deferred decisions;
- validates researcher outcomes as well as component contracts; and
- preserves current Markdown, diff, terminal, and universal-viewer behavior.

It should remain Proposed until the owner accepts its decision package. Detail
alone does not make it Active or accepted architecture.
