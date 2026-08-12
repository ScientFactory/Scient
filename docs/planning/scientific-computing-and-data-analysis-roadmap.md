# Scientific Computing And Data Analysis Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-07-24
Last updated: 2026-08-12
Purpose: Proposes the product boundary, architecture direction, source-adaptation strategy, and ordered implementation path for manual code editing, Python, R, MATLAB, notebooks, executable documents, datasets, tables, figures, analysis runs, reproducible computational work, and the shared foundations it coordinates with Scient's document platform.
Doc type: Planning note

## Decision Summary

Scient should build one first-class **Scientific Computing and Data Analysis**
workbench, not a collection of unrelated Python, R, MATLAB, notebook, table,
and chart features.

The first product gap is more basic than a language integration: the current
Scient desktop app can read and diff code, but it does not provide a normal
manual code editor. The workbench should therefore begin with a durable,
project-aware editable document surface, followed by shared project-resolution,
execution, diagnostics, and artifact foundations. Scientific analysis and
compiled documents should specialize those foundations through distinct
contracts such as `AnalysisRun` and `DocumentBuild`; they should not be forced
into one oversized runtime abstraction. Python, R, MATLAB, Jupyter, Quarto,
LaTeX, Typst, tables, and figures can then attach through adapters without
forcing Scient to become a fork of VS Code, RStudio, Positron, JupyterLab,
MATLAB, or Overleaf.

The sibling [Scientific Document Platform Roadmap](scientific-document-platform-roadmap.md)
now owns universal document viewing, inline mathematics, LaTeX and peer
typesetting projects, Office compatibility, structured manuscript authoring,
review, collaboration, and publishing. This computing roadmap must preserve
the shared document, project-resolution, execution, diagnostics, and artifact
seams while keeping `AnalysisRun` and `DocumentBuild` semantically distinct.

The recommended direction is:

1. Correct current file classification and unsupported-state bugs.
2. Add first-class manual editing with explicit save, conflict, and recovery
   behavior.
3. Add a shared execution coordinator, project/dependency resolver, event
   vocabulary, diagnostics model, and artifact contract, while preserving
   specialized analysis-run and document-build semantics.
4. Prove the shared foundation with one bounded vertical slice. Python remains
   the first analysis adapter; whether a LaTeX build or Python run is the first
   overall proof remains an explicit sequencing decision rather than an
   architecture constraint.
5. Turn execution outputs into inspectable project artifacts: logs, tables, images,
   SVG, PDF, HTML, and generated files.
6. Add Jupyter-compatible notebooks and executable documents without embedding
   all of JupyterLab.
7. Add data exploration, variable inspection, figure workflows, language
   services, debugging, and remote compute in that order.
8. Add domain packs such as neuroscience/BIDS after the generic workbench can
   already open, edit, run, inspect, compare, and recover ordinary analysis.
9. Gate every shared document decision against the complete manuscript
   capability envelope so the first opener, editor, build, history, and
   collaboration work remains usable rather than becoming migration debt.

The recommended editor substrate is **CodeMirror 6**, subject to a bounded
capability proof. Keep the existing `@pierre/diffs` integration for diff
rendering. Adapt T3's useful interaction patterns—editable file review, pending
save state, line-linked comments, and source/rendered modes—but do not make its
currently patched beta `@pierre/diffs/editor` package Scient's permanent editor
foundation.

This is a proposed direction, not accepted product truth or accepted
architecture. Approval should authorize focused design and architecture work,
not a wholesale IDE build.

## Why This Is A Separate Product Category

The accepted PRD already treats data, code, analysis, figures, and artifacts as
a connected research lifecycle. This roadmap makes that product area concrete.
It owns the experience of transforming project data through executable work
into reviewable outputs.

It includes:

- manual editing of scientific source and configuration files;
- Python, R, and MATLAB runtime integration;
- script, selection, cell, and notebook execution;
- datasets, tables, variables, logs, figures, and generated files;
- run history, environment receipts, provenance, staleness, comparison, and
  recovery;
- language diagnostics, formatting, testing, and later debugging;
- local and later remote computation;
- agent assistance operating on the same files, runs, and artifacts available
  to the researcher manually.

It does **not** absorb every scientific tool into one feature:

- LaTeX, Typst, citations, manuscript structure, and Overleaf-like
  collaboration belong primarily to the manuscript and publishing category.
  They should reuse the same document, project-resolution, execution,
  diagnostics, artifact, and preview foundations while retaining
  manuscript-specific build and collaboration semantics.
- The universal local-file opener and HTML/image/PDF viewers are horizontal
  document infrastructure. This workbench consumes them; it should not create a
  second set of click handlers or viewers.
- Protocols, ELN behavior, literature review, evidence extraction, task
  tracking, and lab memory remain separate product responsibilities even when
  analysis artifacts link to them.
- Domain formats such as BIDS/NIfTI, DICOM, NWB, EEG/MEG formats, HDF5, and
  microscopy formats belong in domain interoperability packs built on top of
  the generic file, data, and artifact contracts.

The earlier reference to “Beads” is ambiguous. If it meant **BIDS**, the Brain
Imaging Data Structure, it belongs in the later neuroscience domain pack. If it
meant the Beads issue-tracking system, it belongs in project/task and agent
coordination, not in this roadmap. Neither interpretation should distort the
first computing workbench.

“Separate category” does not mean “design independently.” The computing
workbench owns reusable execution and artifact mechanics; the manuscript area
owns scholarly authoring, citation, review, publishing, and collaboration
semantics. Both must agree on document identity, authority, provenance,
projects, history, assets, projections, and agent actions before either freezes
its foundation.

## Sources Of Authority And Related Plans

This proposal is subordinate to the accepted
[PRD](../product/PRD.md). It refines the `Data, code, analysis, figures, and
artifacts` area currently summarized in
[Product Planning](product-planning.md) and fits after the coherent foundations
sequenced in the active [Product Roadmap](product-roadmap.md).

It also depends on, but does not replace:

- [Open-Source Adaptation Build Strategy](open-source-adaptation-build-strategy.md)
  for the fork-versus-adapter boundary;
- [Open-Source Adaptation Map](../research/source-evaluations/open-source-adaptation-map.md)
  for the broader donor inventory;
- [Scientific Document Platform Roadmap](scientific-document-platform-roadmap.md)
  for universal viewing, mathematics, typesetting, Office interoperability,
  manuscript authoring, review, collaboration, and publishing;
- [Scientific Document Platform Source Map](../research/source-evaluations/scientific-document-platform-source-map.md)
  for focused document-platform donor evidence, pins, exclusions, and gates;
- the generic “open any file from chat” plan for one consistent file-opening
  path, exact-file resolution, and recoverable viewer states;
- future architecture decisions for execution, artifacts, reproducibility,
  project format, permissions, and collaboration;
- future accepted document-platform architecture and implementation plans. The
  engine choice, first typesetting slice, manuscript representation,
  collaboration model, and donor-adaptation depth remain outside this roadmap.

## Current Product Truth: What Scient Can Do Today

This section distinguishes the installed release from proposed or in-progress
viewer work. It was checked against the installed macOS app version `0.5.12`,
the `release/stable` desktop source, and the current local source on 2026-07-24.

| Capability | Current state | Consequence |
|---|---|---|
| Open project source files | Yes. The workspace file preview can read and syntax-highlight ordinary text source. | Researchers can inspect code. |
| Manually edit ordinary code | No. Source is rendered in read-only `<pre>` surfaces. | The area called an editor is not yet a manual editor. |
| Save from the preview | Only the narrow Markdown task-checkbox interaction writes a file. | This does not constitute general source editing. |
| View Git/session diffs | Yes. Scient already has diff and changed-file surfaces. | Review exists, but correction still requires an agent, terminal editor, or external app. |
| Run commands | Yes, through the generic terminal when the executable exists. | Running is possible as shell work, not as an integrated analysis action. |
| Run Python/R/MATLAB through a workbench | No. There is no first-party runtime picker, Run action, output panel, variable inspector, or analysis run record. | Results are not automatically connected to project provenance. |
| Python availability on the inspected Mac | `python3` and `uv` were discoverable. | Python is the cheapest adapter with which to prove the common execution contract. |
| R availability on the inspected Mac | `R` and `Rscript` were not discoverable. | Scient needs excellent missing-runtime and setup UX; it must not assume R is bundled. |
| MATLAB availability on the inspected Mac | No MATLAB executable or application was found. | Scient must integrate a user-installed, licensed MATLAB; it cannot bundle MATLAB. |
| Jupyter/Quarto availability on the inspected Mac | Neither command was discoverable. | Notebook/document support needs environment discovery and setup, not silent failure. |
| Markdown preview | Yes for `.md`, `.mdx`, and `.markdown`. | `.Rmd` and `.qmd` currently fall back to plain source and have no executable preview. |
| Images and PDF | The shipped shared preview supports common images and PDF. | These should become shared artifact renderers, not be rebuilt inside the workbench. |
| HTML | Separate viewer work is in progress and is not yet proof of a shipped analysis-output contract. | Interactive analysis HTML should consume the universal viewer once its behavior is accepted. |
| Large text | Reads default to 1,000,000 bytes and report truncation. | Editing must refuse or explicitly reopen truncated content; it must never save a partial file. |
| Binary files | NUL-like content is rejected by the text reader. | `.mlx`, `.mat`, `.rds`, `.RData`, HDF5, NIfTI, and similar formats need typed viewers/adapters. |
| Concurrent/external edits | The current write API accepts full replacement text without an expected revision. | A real editor would risk silent overwrite unless the write contract changes first. |

Relevant implementation evidence:

- the shipped [workspace preview](https://github.com/ScientFactory/scient-desktop/blob/release/stable/apps/web/src/components/WorkspaceFilePreview.tsx)
  explicitly marks ordinary source as read-only and contains the narrow Markdown
  checkbox write path;
- the server `WorkspaceFileSystem` defaults to a 1,000,000-byte read, rejects
  binary-like data, and writes full replacement content without a compare token;
- the current filename highlighter resolves `.R` as R and `.py` as Python, but
  resolves `.m` as Wolfram and treats `.Rmd`, `.qmd`, `.ipynb`, and `.mlx` as
  plain text;
- Scient already depends on `@pierre/diffs` for readable source/diff surfaces,
  but its current stable package does not expose the beta editor used by T3.

### Direct Answer To The Original Question

Today, a researcher can open and review Python, R, or MATLAB-looking files and
can inspect diffs. They can use the terminal to invoke a runtime that they have
installed. They cannot yet comfortably write those files manually in Scient,
run them through a first-class R/MATLAB/Python workbench, inspect structured
variables and outputs, or connect the run to durable project artifacts.

That is a material product gap, not a small polish issue.

## Target Researcher Experience

The workbench should feel like a scientific project workspace, not a generic IDE
embedded beside a chat.

### Product Placement

Keep the current workspace composition and strengthen it:

- **left: project explorer** — files, datasets, notebooks, runs, and artifacts;
- **center: work tabs** — editable source, rendered document, notebook, table,
  figure, PDF, HTML, or typed scientific viewer;
- **right: agent and review** — conversation, explanation, requested changes,
  line-linked comments, and proposed actions;
- **bottom: output dock** — Run Output, Problems, Variables, Tests, Terminal,
  and later Debug Console;
- **Project Home** — recent and failed runs, stale results, missing runtimes,
  unresolved conflicts, review requests, and important artifacts.

This should not begin with a full configurable IDE layout. The existing layout
can support the first slices if tabs and dock states are coherent.

### Opening A File

Every local-file activation should enter the shared universal opener once and
then dispatch by resolved file capability:

1. Resolve the exact file and determine whether it is project-owned or an
   external/chat-linked file.
2. Classify by content and extension, not extension alone where sniffing is
   safe and useful.
3. Choose the best registered surface.
4. Show a useful loading, empty, unsupported, malformed, missing-resource, or
   recovery state instead of an empty black/blank panel.
5. Preserve a reliable “Open externally” continuation for formats Scient does
   not yet own.

Project-owned text opens editable. An external file opened through a temporary
grant remains read-only until the researcher deliberately imports or copies it
into the project. That is a product-integrity distinction, not an obstacle to
viewing: external files should still open smoothly and visibly whenever a
renderer exists.

### Editing And Running

For a normal `.py`, `.R`, or `.m` file, the core loop should be:

1. Open immediately with syntax-aware manual editing.
2. Show `Saved`, `Saving`, `Modified`, `Save failed`, or `Conflict` truthfully.
3. Let the researcher run the file, current selection, or recognized section.
4. Select or confirm the runtime only when ambiguity exists.
5. Stream stdout, stderr, diagnostics, progress, plots, tables, and created
   files into one output dock.
6. Preserve an inspectable run receipt.
7. Register meaningful outputs as project artifacts and show whether they are
   current or stale relative to their code, data, parameters, and environment.
8. Let the researcher ask an agent about the exact selection, diagnostic,
   variable, run, table region, or figure while keeping manual correction
   available.

### Notebooks And Executable Documents

For `.ipynb`, `.Rmd`, and `.qmd`:

- source and rendered/cell views should be explicit modes of the same durable
  file, not unrelated copies;
- kernel/runtime identity and state must be visible;
- cell outputs must not be presented as current after their dependencies
  change;
- import/export should preserve standard formats and warn about lossy features;
- hidden runtime state should never outrank saved project files and run records;
- “Run all from clean state” is a first-class reproducibility action;
- documents can render Markdown, LaTeX math, tables, images, SVG, HTML, and
  supported interactive MIME outputs through shared renderers.

### Data And Figures

Opening a dataset should produce a useful inspector before Scient attempts to
become a statistics package:

- schema and types;
- row/column counts when cheap or explicitly computed;
- sampled and paged table view;
- sort, filter, column selection, and search;
- missingness and compact descriptive summaries;
- raw/source mode where meaningful;
- provenance, file size, modification state, and the runs that consumed or
  produced it;
- export/copy actions that state whether they operate on all data, the filtered
  view, or a sample.

Figures should open as artifacts with source run, code, parameters, caption,
dimensions, format, and export options. A plot should not become an anonymous
image detached from how it was made.

## Product Invariants

These invariants should survive every stage:

1. **Manual work is first-class.** Anything an agent edits or runs must remain
   inspectable and correctable without asking an agent.
2. **One file, one canonical project identity.** Editor buffers, notebook cells,
   previews, diffs, and agent references are projections of the same project
   file, not competing truths.
3. **No silent overwrite.** A save must be conditional on the revision the user
   edited or must enter an explicit conflict flow.
4. **No partial-file save.** Truncated, lossy-decoded, or binary content can be
   viewed through an appropriate surface but never accidentally written back as
   if complete text had been loaded.
5. **One execution vocabulary, specialized records.** Analysis runs, notebook
   execution, document builds, and agent-triggered work should share lifecycle,
   event, diagnostic, cancellation, and artifact vocabulary without erasing the
   distinct fields and UX of an `AnalysisRun` or `DocumentBuild`.
6. **User-installed runtimes remain user-owned.** Scient discovers and connects
   to environments; it does not secretly replace them.
7. **Files remain portable.** Standard source, notebook, environment, and data
   formats outrank private hidden state.
8. **Outputs remain connected.** A table, plot, model, report, or export should
   know the run and inputs that produced it.
9. **Staleness is visible.** If code, data, parameters, or environment changed,
   Scient must not imply that prior output is current.
10. **Agent and manual actions share authority.** MCP or an agent integration is
    not a second, privileged product path.
11. **Missing tools are normal.** Missing R, MATLAB, Python packages, kernels,
    licenses, typesetting engines, bibliography tools, fonts, or language
    servers produce setup states, not crashes or blank panels.
12. **The workbench is local-first.** Remote execution can be added later through
    adapters without moving canonical project state into an opaque service.
13. **Open the file before resolving the project.** A selected source file must
    remain visible even when its root, dependencies, engine, or runtime cannot
    be resolved. Formats that require context may add a bounded project view;
    they must not make ordinary files wait for a workspace-scale scan.
14. **Shared substrate, domain-specific UX.** Reuse document state, project
    resolution, execution orchestration, diagnostics, artifacts, and viewers.
    Keep analysis, notebook, typesetting, and manuscript concepts explicit on
    top rather than hiding them behind generic task language.
15. **Authority mode is explicit.** An existing LaTeX/Typst/Quarto project can
    remain file-native, while a Scient-native manuscript can be structured-
    native. Exactly one representation is authoritative for a document at a
    time; conversion or mode changes require a visible fidelity report.
16. **Semantic identity survives projections.** Sections, citations, claims,
    equations, figures, tables, comments, suggestions, and source anchors need
    stable identities that can survive editor changes, compilation, import,
    export, collaboration, and agent work as far as the format permits.
17. **Projection loss is never silent.** Rich editor state, CRDT/OT state,
    Pandoc/Quarto/MyST ASTs, LaTeX/Typst files, Word/JATS exports, and rendered
    PDF/HTML are projections, interchange forms, or artifacts unless the
    document's explicit authority mode says otherwise. Round trips must report
    preserved, downgraded, unresolved, and lost content.
18. **Editing, builds, collaboration, and history are separable services.** A
    compiler failure must not corrupt editing; a collaboration engine must not
    become project authority; history must span manual, agent, imported, and
    synchronized changes; and every layer needs independent recovery.
19. **Capability parity does not require donor lock-in.** Scient should be able
    to deliver the full target workflow through owned contracts, selected
    dependencies, adapters, or a deliberately reviewed donor integration.
    Replacing one editor, compiler, sync engine, or publishing provider must not
    require replacing the scientific project model.

## Proposed Architecture Direction

The following names describe responsibilities, not accepted package or schema
names.

### 1. Editable Workspace Document

Create one document lifecycle shared by ordinary source, Markdown/Quarto/LaTeX
source, notebook text representations, and configuration files.

It should own:

- canonical project path and stable open-tab identity;
- loaded revision/hash, encoding, line endings, completeness, and file size;
- current buffer, dirty state, selection, folds, undo history, and view mode;
- conditional save and atomic replace;
- save queue, retry, and close/quit flushing;
- file-watcher reconciliation and conflict state;
- recoverable local draft after app or renderer failure;
- line/column anchors used by comments, diffs, diagnostics, and agent context;
- capability flags such as editable, runnable, renderable, binary, truncated,
  external, and generated.

Do not implement general editing by turning the current `<pre>` into a mutable
DOM surface and calling the existing full-replacement write blindly. The server
write contract must first accept an expected revision/hash and return the new
revision. Writes should be atomic where the platform permits. A watcher event
that matches the just-confirmed save should be distinguishable from a genuine
external edit.

### 2. Surface Registry

The universal opener and workbench should share a registry resembling:

- matcher/classifier;
- supported modes (`source`, `preview`, `log`, `split`, `table`, `notebook`,
  `figure`, `binary-inspector`, `external`);
- edit and save capability;
- renderer component;
- project-context requirements and execution actions;
- size, platform, and dependency constraints;
- recovery/fallback action.

That lets HTML, SVG, PDF, image, CSV, notebook, LaTeX, and future scientific
viewers compose without growing a single extension switch across many click
handlers.

### 3. Project And Dependency Resolver

Opening a file and understanding an executable or compilable project are
different operations. Add an optional resolver above the canonical document
and below domain-specific workbenches. It should be able to return:

- the selected document and its immediate directory context;
- a resolved or candidate project/root entry point;
- source, asset, bibliography, configuration, data, and generated-file edges;
- the evidence used for resolution and any ambiguity;
- a remembered explicit choice scoped to the project, with a way to change it;
- capability flags for partial, missing, cyclic, outside-project, or unresolved
  dependency context.

The resolver should be adapter-driven. LaTeX can inspect magic-root comments,
document markers, configuration, and `input`/`include`/`import` relationships;
Quarto can inspect project configuration and render targets; notebooks can
resolve kernels and referenced files; Python, R, and MATLAB can inspect their
native project/environment markers. Do not make every ordinary file a project
or let a resolver crawl an unbounded home directory.

For an arbitrary absolute file opened from chat or outside the active project,
show source immediately. If compilation or execution needs neighboring files,
request or derive the smallest useful directory/project context and remember a
deliberate choice. Failure to establish that context is a recoverable state,
not a blank viewer.

### 4. Execution Coordinator And Specialized Adapters

Define one coordinator for lifecycle mechanics shared by analysis and document
builds:

- discover providers, installations, versions, and prerequisites;
- prepare an execution from an explicit source revision and project context;
- start, interrupt, cancel, supersede, and terminate owned process trees;
- stream normalized events and diagnostics with backpressure;
- register logs, generated files, rich output, and durable artifacts;
- preserve an execution receipt and recover abandoned/lost state;
- expose capabilities without pretending every provider supports every action.

Keep specialized adapter contracts above that coordinator:

- `AnalysisRuntimeAdapter` supports run file/selection/cell/task, short-lived
  processes or stateful sessions, variables/workspace objects, environment and
  package/toolbox identity, tests, and runtime diagnostics;
- `TypesettingEngineAdapter` supports root document, build recipe/engine,
  bibliography passes, output and auxiliary directories, rebuild/watch,
  structured compile diagnostics, produced PDF/HTML, and later source-output
  synchronization;
- notebook and executable-document adapters compose runtime and build behavior
  rather than forcing one to masquerade as the other.

This separation makes Python, R, MATLAB, Tectonic, `latexmk`, installed TeX
distributions, Typst, and Quarto replaceable providers. The viewer must never
spawn a compiler or runtime directly.

### 5. Normalized Execution Event Stream

Normalize adapter output into events such as:

- `stdout` and `stderr`;
- diagnostic with source range and severity;
- progress/status;
- input request, with a visible rule for whether interaction is supported;
- rich display bundle (`text`, Markdown, LaTeX, image, SVG, HTML, JSON, table,
  Vega/Plotly when supported);
- created or modified file;
- variable/workspace update;
- test result;
- warning about environment, package, license, or compatibility;
- completed, cancelled, failed, or lost.

Jupyter's MIME bundle model is a useful compatibility vocabulary, but Scient's
canonical execution record should not be identical to a live kernel message
stream. Typesetting builds should use the same lifecycle and diagnostic
envelope while keeping build phases, logs, and outputs explicit.

### 6. Execution Receipts

Every meaningful execution should preserve a shared base receipt:

- command/action and initiating user or agent;
- execution kind, provider/adapter identity, and capabilities used;
- source file/revision and relevant selection/cell/section or root identity;
- project working directory;
- implementation and version;
- parameters and declared inputs;
- start/end status, exit code, cancellation, and failure reason;
- stdout/stderr and rich outputs, with size-aware retention;
- files and artifacts created or changed;
- code/data/environment revisions used;
- relationship to prior or retried runs;
- staleness calculation inputs.

An `AnalysisRun` adds runtime environment/kernel/toolbox/package identity,
variable/test events, and selection/cell semantics. A `DocumentBuild` adds the
resolved root and dependency graph, engine and recipe, bibliography/index
passes, output/auxiliary locations, structured compile diagnostics, and the
last successful render it replaces or leaves current. Quarto or notebook
execution may link both receipts rather than flattening them.

An exploratory selection run can remain lightweight. An execution promoted
into the project record should satisfy its specialized receipt. The UI must
distinguish ephemeral console activity from preserved scientific evidence and
an unsuccessful build attempt from its last successful preview.

### 7. Artifact Registry And Staleness Graph

An artifact is more than a filesystem path. Register datasets, tables, figures,
models, reports, exports, and other durable outputs with:

- stable project identity;
- type and format;
- producing run and source code;
- upstream files/data/parameters/environment;
- current/stale/unknown state;
- current attempt, last successful artifact, and partial/failed-output state;
- preview surface and external-open option;
- history and comparison when replaced;
- manual annotations, captions, or decisions;
- later manuscript/evidence/deposit relationships.

Start with explicit run-declared or observed file outputs. Do not begin by
promising perfect automatic dependency inference across arbitrary scripts.

### 8. Environment And Toolchain Resolver

GUI applications frequently see a different `PATH` from a terminal. Runtime
discovery must inspect platform conventions and let the researcher confirm an
explicit executable or installation:

- macOS application bundles, framework installs, Homebrew, Conda, `uv`, and
  user paths;
- Windows registry/install locations, Store/launcher behavior, Conda, and the
  distinction between native Windows and WSL;
- Linux distro paths, modules, Conda, `uv`, and remote/HPC environments;
- R libraries and `renv` projects;
- Python virtual environments and `uv` projects;
- MATLAB roots, releases, licensing state, projects, and toolbox availability;
- Jupyter kernelspecs and remote server connections;
- TeX distributions, Tectonic, `latexmk`, bibliography tools, Typst, Quarto,
  Pandoc, fonts, and project-local configuration.

Discovery is read-only. Installing packages, changing environments, or
downloading a runtime requires a clear action and visible destination.

### 9. Document Authority, Projection, Collaboration, And Publication Contract

The shared foundation needs an explicit contract for the future manuscript
platform before the first typesetting implementation hardens. This is a set of
responsibilities and validation requirements, not an accepted schema or package
design.

#### Two authority modes, one project experience

Scient must support both of these without treating one as a temporary import:

- **file-native document projects** — existing LaTeX, Typst, Quarto, Markdown,
  or other portable source files and their dependency graph remain canonical.
  Semantic indexes, visual previews, comments, diagnostics, and collaboration
  anchors are derived state. Accepted edits write back through revision-aware
  file operations in a form the original toolchain can continue using;
- **structured-native manuscripts** — Scient's scholarly document model is
  canonical. Rich-text editors, source-like views, CRDT/OT documents, LaTeX,
  Typst, Quarto, MyST, Word, JATS, HTML, and PDF are projections, interchange
  forms, or artifacts unless an explicit conversion changes authority.

One project may contain both kinds of document, but a single manuscript cannot
silently have two canonical representations. Import, conversion, detachment,
or a change of authority must create a reviewable reconciliation showing what
was preserved, normalized, downgraded, unresolved, or lost. If round-trip
editing cannot preserve a construct, Scient should keep source editing
available and label the visual surface's limit instead of rewriting it.

#### Stable identity and cross-projection anchors

Path and character offsets are insufficient for full manuscript work. The
foundation should preserve, where the authority mode permits:

- stable document/project identity across rename, copy, import, and sync;
- revisions and content identity for conditional writes and history;
- logical identities for sections, paragraphs/blocks, citations, equations,
  figures, tables, listings, footnotes, references, and publication metadata;
- range/source maps among semantic objects, editor positions, source files,
  compilation diagnostics, and rendered output;
- resilient comment, suggestion, evidence, review, and agent anchors with
  quoted/context fallback plus an explicit orphan/re-anchor state;
- stable asset identity independent of a particular relative path when the
  manuscript model, history, or collaboration requires it.

The foundation does not need every semantic node in the first opener. It does
need a versioned extension seam so early line anchors and file identities can
be promoted without breaking comments, history, citations, or source/PDF
navigation later.

#### Projection and reconciliation adapters

Use a common adapter shape for rich editors, portable source formats, imports,
exports, and publishing providers. Each adapter should be able to declare:

- supported input/output features and authority modes;
- parse/import, render/export, and incremental-update capabilities;
- stable-identity and source-map preservation;
- fidelity limits and a machine- plus human-readable reconciliation report;
- version/toolchain/template/profile dependencies;
- deterministic fixture round trips and raw-source/output continuations;
- whether the result is editable, reviewable, generated, or detached.

This allows Tiptap/ProseMirror, Plate, or Lexical to compete as editor
projections; LaTeX, Typst, Quarto/Pandoc, MyST, Word, JATS, Markdown, and HTML
to compete or coexist as format adapters; and a later publishing/submission
provider to change without redefining manuscript truth.

#### Collaboration, review, and history

Collaboration should operate on attributed document/project operations rather
than on an editor engine's opaque state. The shared contract must support:

- comment threads, mentions, assignments, suggestions, tracked changes,
  accept/reject decisions, reviewer modes, and resolved/archived states;
- the same proposal/review lifecycle for human and agent changes;
- ephemeral presence, cursors, selections, and typing state that never become
  scientific authority;
- asynchronous/offline work, visible conflicts, reconnect, schema migration,
  ownership transfer, revocation of future access, and recovery;
- labelled milestones, attributed activity, version comparison, single-file
  and whole-project restore, deleted-file recovery, and durable export;
- separately versioned large/binary assets rather than embedding PDFs,
  datasets, or figures inside a text CRDT.

Yjs/Hocuspocus, Automerge, ShareDB, Yorkie, or a future engine may implement a
bounded collaboration surface. None should own project membership,
authorization, accepted scientific state, or the only readable history.

#### Publication and institutional extension points

The manuscript platform should be able to add without replacing the document
foundation:

- template records with origin, license, maintainer, version, update, and
  project-copy semantics;
- journal/conference/thesis/grant profiles, required metadata, reporting
  guidelines, style/citation rules, and validation findings;
- source packages, PDFs, supplementary files, data/code availability material,
  cover letters, and other versioned submission artifacts;
- direct publisher/repository/deposit adapters with submission receipts and a
  manual download continuation;
- Zotero/JabRef/CSL and other reference-manager adapters with citation-key and
  refresh/reconciliation truth;
- Git/GitHub/GitLab, local editor, drive, repository, and external-authoring
  integrations without collapsing their histories into Scient history;
- individual, guest, project, group, lab, and institution roles; SSO and later
  provisioning; managed-account policy; ownership continuity; audit; retention;
  metrics; feature/AI controls; and secure offboarding.

Institution administration belongs to the identity/collaboration platform, not
the typesetting engine. Submission belongs to publication adapters, not the
editor. Keeping those boundaries explicit is what lets the first local opener
scale to a full hosted, institutional, or hybrid experience.

#### Service-separation lesson from Overleaf

Overleaf's current repository separates real-time editing, document update and
storage, project history, file storage, compilation, Git bridging, chat,
notifications, and the web application. Scient should preserve comparable
responsibility boundaries in contracts and tests, but it should not infer that
it needs the same deployable services, databases, or network topology. Local
desktop implementations may be in-process modules; cloud collaboration may
later split them operationally.

This separation provides a future scaling test: compilation can move from local
to managed or remote execution; an editor or collaboration engine can change;
history can grow from local snapshots to shared project history; and publishing
integrations can expand without migrating the canonical scientific project.

## Source Strategy: What To Reuse, Adapt, Or Only Study

“Steal” should mean licensed, selective adaptation with attribution and a clear
upgrade boundary. The sources below have different roles; none should silently
become Scient's product model.

| Source | Proposed relationship | Reuse or adapt | Do not take |
|---|---|---|---|
| [T3](https://github.com/pingdotgg/t3code) (MIT) | UX and implementation reference | Editable file review, source/rendered modes, line comments, optimistic pending state, save coordination, tests around latest-write behavior. | Do not copy the whole file panel or inherit its product model. Do not adopt its patched beta editor without a capability/license/maintenance proof. |
| [CodeMirror 6](https://codemirror.net/) (MIT) | Preferred editor dependency after spike | Modular editor, language packages, search, lint, merge, collaboration primitives, and its current LSP client. | Do not treat editor state as canonical project state or let extensions write outside the document contract. |
| [Monaco Editor](https://github.com/microsoft/monaco-editor) (MIT) | Challenger/reference | Use as the capability benchmark for desktop IDE expectations. | Do not assume VS Code extensions work in Monaco; the official project says they do not. Its web workers, bundle weight, and lack of mobile-browser support make it a weaker default for Scient. |
| Existing `@pierre/diffs` | Retain for diffs and review | Current high-quality diff rendering and selection model. | Do not force one library to own both diff rendering and the long-term scientific editor merely to reduce package count. |
| [Tiptap/ProseMirror](https://github.com/ueberdosis/tiptap), [Plate](https://github.com/udecode/plate), and [Lexical](https://github.com/facebook/lexical) | Scientific rich-editor projection candidates and UX sources | Prototype the same long manuscript with stable semantic nodes, citations/evidence, equations, figures/tables, comments, suggestions, accessibility, performance, collaboration, and import/export. | Do not let an editor's JSON/operation format become manuscript truth or select a winner before the common fixture passes. |
| [Zotero](https://github.com/zotero/zotero), [JabRef](https://github.com/JabRef/jabref), and [CSL](https://citationstyles.org/) | Required citation/reference compatibility and selected component candidates | Adapt import/export, structured references, citation keys, styles, locators, refresh, metadata repair, group-library expectations, and citation round trips. | Do not rebuild or fork a full reference manager first, copy copyleft code without review, or reduce evidence-linked citations to bibliography strings. |
| [Zettlr](https://github.com/Zettlr/Zettlr) | Local academic-writing and submission-workflow reference | Study file-oriented writing, citations, math/Mermaid, Pandoc profiles, templates, and journal/conference export while preserving external-editor continuity. | Do not make Markdown the only authoring model or inherit a whole desktop application. |
| [LaTeX Workshop](https://github.com/James-Yu/LaTeX-Workshop) (MIT) | Strongest bounded LaTeX workflow reference | Study its documented root discovery, recipes/toolchains, cancellation, dependency tracking, output/auxiliary directories, PDF refresh, and SyncTeX behavior; adapt algorithms and UX behind Scient contracts with attribution where code is reused. | Do not embed a VS Code extension or inherit VS Code's workspace, settings, and process model. |
| [Tectonic](https://tectonic-typesetting.github.io/) | Leading managed-engine candidate | Evaluate reproducible bundles, automatic multi-pass typesetting/bibliography behavior, Unicode/OpenType support, local CLI operation, and cross-platform packaging through `TypesettingEngineAdapter`. | Do not make Tectonic the architecture or promise universal package compatibility before fixture and licensing/distribution review. |
| [TexLab](https://github.com/latex-lsp/texlab) (GPL-3.0) | External LaTeX language-server candidate already used by `scient-agent` | Reuse the standard LSP boundary for cross-file diagnostics, completion, navigation, symbols, and forward-search capabilities after desktop lifecycle and redistribution review. | Do not copy GPL implementation into Scient or make a TeX distribution/compiler a prerequisite for opening and editing source. |
| [Overleaf product/docs](https://docs.overleaf.com/) and [Community Edition](https://github.com/overleaf/overleaf) (AGPL-3.0 repository) | Comprehensive capability baseline, systems reference, compatibility target, and possible future integration subject to a separate decision | Track the full hosted workflow—code/visual editing, project/files, compilation, diagnostics, comments, tracked changes, history, collaboration, templates, citations, Git/GitHub, submission, AI assistance, groups, SSO, managed users, metrics, and offboarding—and study the repository's separation of editor/update/storage, real-time, history, compilation, Git, chat, notifications, and web concerns. | Do not assume Community Edition contains every hosted/professional feature, make its service topology Scient's architecture, or copy/link AGPL components without explicit license/product/operations acceptance. A future isolated integration, maintained fork, or self-hosted path is not permanently prohibited, but it requires its own source-depth review and ADR. |
| [Typst](https://github.com/typst/typst) (Apache-2.0) | First-class future typesetting adapter | Preserve `.typ` as editable portable source and evaluate its incremental compiler, diagnostics, bibliography, PDF output, and watch behavior through the same document-build contract. | Do not design the contract around TeX-only pass mechanics or make Typst a hidden conversion layer for LaTeX projects. |
| [MyST](https://github.com/jupyter-book/mystmd) and [Stencila](https://github.com/stencila/stencila) | Scientific publishing challenger and semantic-document/provenance references | Compare citations, cross-references, executable/notebook publishing, JATS, TeX/Typst paths, semantic nodes, executable steps, and agent provenance against Scient-owned document contracts. | Do not make source Markdown, either project's schema, or an executable-document runtime the canonical Scient model without a focused decision. |
| [Yjs/Hocuspocus](https://github.com/yjs/yjs), [Automerge](https://github.com/automerge/automerge), and [ShareDB](https://github.com/share/sharedb) | Bounded collaboration-engine prototype set | Test real-time editing, awareness, offline changes, attribution, reconnect, schema migration, persistence, export, and recovery through one collaboration harness. | Do not use CRDT/OT state as project authorization, accepted scientific state, or the only history; do not put large assets inside a text collaboration document. |
| Word and Google Docs | Manuscript exchange and review-quality compatibility baseline | Match understandable comments, suggestions/track changes, roles, presence, version restoration, and `.docx` import/export expectations through Scient-owned semantics. | Do not make Scient generic office software or rely on closed implementation details. |
| [OSF](https://github.com/CenterForOpenScience/osf.io), [Dataverse](https://github.com/IQSS/dataverse), and [OpenReview](https://github.com/openreview/openreview) | Sharing, deposit, review, role, and publication reference/adapter set | Study project/repository handoff, draft-review-publish, persistent identifiers/citations, external collaborators, assignments, decisions, and immutable releases. | Do not make a repository or conference-review system the working manuscript truth or copy its domain hierarchy wholesale. |
| [JupyterLab services](https://jupyterlab.readthedocs.io/en/stable/api/modules/services.html) and [rendermime](https://jupyterlab.readthedocs.io/en/stable/api/modules/rendermime.html) (BSD-3-Clause project) | Selected protocol/rendering dependencies or references | Kernel/server communication, MIME compatibility, and proven output renderers where dependency review supports it. | Do not embed or fork the full JupyterLab application and duplicate Scient's shell, project model, file explorer, and chat. |
| [marimo](https://github.com/marimo-team/marimo) (Apache-2.0) | Adapter and reproducibility reference | Pure-Python notebook storage, reactive dependency/staleness ideas, disabled expensive cells, SQL/dataframe UX, optional external “Open in marimo.” | Do not make a Python-specific reactive model Scient's cross-language canonical notebook format. |
| [RStudio](https://github.com/rstudio/rstudio) (AGPL-3.0) | UX reference | Source/console/environment/history/plots/help layout and R researcher workflows. | Do not fork or embed the IDE. Keep license and architecture boundaries explicit. |
| [Positron](https://github.com/posit-dev/positron) (Elastic License 2.0) | Source-available UX reference only | Study data explorer, variables, plots, sessions, and multi-language data-science ergonomics. | Do not copy/fork product code as though it were ordinary permissive open source. |
| [R `languageserver`](https://github.com/REditorSupport/languageserver) | R LSP adapter | Diagnostics, completion, hover, definition, references, symbols, formatting, and related standard LSP features. | Do not require it for basic editing or execution; degrade gracefully when absent. |
| [IRkernel](https://github.com/IRkernel/IRkernel) | Initial R notebook adapter | Standard Jupyter kernelspec compatibility. | Do not make Jupyter the only way to run R scripts. |
| [renv](https://github.com/rstudio/renv) | R environment adapter/reference | Detect lockfile/project library and preserve environment receipts. | Do not mutate or restore environments silently. |
| [Ark](https://github.com/posit-dev/ark) (MIT) | Later R kernel/LSP/DAP challenger | Evaluate its R kernel and emerging language/debug protocol capabilities when they are independently usable. | Do not depend on Positron-only advanced behavior or unsigned/unpackaged components for the first R slice. |
| [MATLAB extension for VS Code](https://github.com/mathworks/MATLAB-extension-for-vscode) (MIT) | Official architecture/UX reference | Installation discovery, run/debug/workspace behavior, project handling, and compatibility expectations. | A VS Code extension is not directly embeddable in Scient; do not pretend it installs MATLAB or grants a license. |
| [MATLAB MCP Core Server](https://github.com/matlab/matlab-mcp-core-server) | Official agent adapter candidate | First-party MCP setup for agent-assisted MATLAB actions, session attach/start, and official extensibility after license/telemetry review. | MCP must not replace the manual editor, Run action, output, or project run record. Do not enable telemetry or mutations without explicit product choices. |
| [MATLAB Integration for Jupyter](https://github.com/mathworks/jupyter-matlab-proxy) | Optional notebook/full-MATLAB continuation | MATLAB kernel access in Jupyter and an external browser-based MATLAB continuation for installed, licensed MATLAB. | Do not embed the full MATLAB desktop/browser UI as Scient's workbench or imply the package installs MATLAB. |
| [DuckDB](https://github.com/duckdb/duckdb) (MIT) | Preferred data-query dependency candidate | In-process, read-oriented exploration of CSV/Parquet/Arrow and scalable preview queries. | Do not silently rewrite source datasets or make a DuckDB catalog the only project truth. |
| [Apache Arrow](https://arrow.apache.org/) (Apache-2.0) | Interchange layer | Columnar interchange among runtimes, viewers, and streamed tables where it reduces copying. | Do not require every runtime or small table to serialize through Arrow. |
| [Perspective](https://github.com/perspective-dev/perspective) (Apache-2.0) | Table/grid/chart prototype candidate | Virtualized grid, large/streaming data, Arrow integration, and composable web component. | Do not accept bundle size, accessibility, keyboard, theme, or export behavior without a Scient-specific proof. |
| [Vega-Lite](https://github.com/vega/vega-lite) (BSD-3-Clause) | Declarative figure specification candidate | Portable chart definitions, inspectable encodings, and renderer-independent saved specifications. | Do not replace native Python/R/MATLAB plotting libraries or force every figure into Vega-Lite. |
| [Quarto](https://github.com/quarto-dev/quarto-cli) (MIT) and [Pandoc](https://github.com/jgm/pandoc) | External publishing adapters and cross-domain contract proof | Render `.qmd`/`.Rmd`, citations, math, figures, and publication outputs through linked analysis-run/document-build receipts and shared viewers. | Do not reimplement their compilers, hide source/output divergence, or force every typesetting engine through Quarto. |
| [BIDS Specification](https://bids-specification.readthedocs.io/) and [BIDS Validator](https://github.com/bids-standard/bids-validator) | Later neuroscience domain adapter | Dataset tree semantics, metadata inspection, validation, and OpenNeuro readiness. | Do not couple the generic data workbench to neuroimaging or load huge imaging data into ordinary text/table views. |

### T3 Review In Detail

The inspected current T3 source at commit
[`202e5609`](https://github.com/pingdotgg/t3code/commit/202e5609ffb294bc0aa86c08ce1d3751de567226)
now contains a meaningful manual editor in
[`FilePreviewPanel.tsx`](https://github.com/pingdotgg/t3code/blob/202e5609ffb294bc0aa86c08ce1d3751de567226/apps/web/src/components/files/FilePreviewPanel.tsx).
It uses `@pierre/diffs/editor`, enables `contentEditable`, integrates line
comments with chat context, updates an optimistic file cache, and debounces
writes through a tested
[`FileSaveCoordinator`](https://github.com/pingdotgg/t3code/blob/202e5609ffb294bc0aa86c08ce1d3751de567226/apps/web/src/components/files/fileSaveCoordinator.ts).

This is useful and materially better than Scient's current read-only source
surface. It proves that the existing diff-oriented interaction can support a
fast editing loop. It is not a complete foundation for Scient's target:

- T3 currently uses a `1.3.0-beta` `@pierre/diffs` editor plus a local patch;
- the inspected save path sends full file contents and does not demonstrate the
  expected-revision conflict contract Scient needs;
- it does not provide R, MATLAB, Jupyter, data runtime, artifact, or scientific
  provenance architecture;
- its file panel is designed for an agent coding product, not for long-lived
  research data and analysis state.

Recommendation: reproduce the *behavioral contract* in Scient—editable
project-owned source, line review, truthful pending state, latest-write
coordination, and tests—while proving CodeMirror against the scientific cases.
If the CodeMirror proof fails a critical capability, re-evaluate Monaco and the
newer `@pierre/diffs/editor`; do not commit to the beta dependency by default.

## Ordered Roadmap

The sequence below intentionally uses dependency and user value rather than
calendar estimates.

## Stage 0 — Make Current File Truth Accurate

Fix small but important defects before adding a runtime:

1. Correct `.m` classification from Wolfram to MATLAB in Scient's own file
   classification layer rather than waiting on a transitive package.
2. Recognize `.R`, `.r`, `.Rmd`, `.rmd`, `.qmd`, `.py`, `.ipynb`, `.m`, `.mlx`,
   `.mat`, `.rds`, `.RData`, `.csv`, `.tsv`, `.parquet`, `.arrow`, `.feather`,
   `.h5`, `.hdf5`, `.npy`, `.npz`, `.tex`, `.ltx`, `.latex`, `.bib`, `.bibtex`,
   `.bst`, `.sty`, `.cls`, `.dtx`, `.ins`, and `.typ` as known capabilities even
   when the only current result is a clear unsupported viewer.
3. Separate **known but unsupported**, **missing runtime**, **binary format**,
   **too large**, **truncated**, **malformed**, and **failed to load** states.
4. Never show a normal editable affordance for truncated or binary content.
5. Give every unsupported scientific file an `Open externally`, `Reveal in
   Finder/Explorer`, and `Copy path` continuation.
6. Route chat-linked and explorer-linked files through the same opener and
   renderer registry.
7. Preserve current Markdown, image, PDF, diff, terminal, and chat behavior with
   regression tests.

Exit gate: the fixture inventory opens into an accurate surface or a useful
recovery state; no recognized scientific type produces a blank panel or is
mislabelled as another language.

## Stage 1 — First-Class Manual Source Editing

This is the highest-ROI product slice because every later language and document
benefits from it.

### Required behavior

- edit project-owned text files in the central workspace;
- create a new text/source file from the explorer;
- open multiple files with stable tab identity or, if tabs are deferred, retain
  unsaved state when navigating and make the limitation explicit;
- undo/redo, indentation, bracket behavior, line numbers, wrapping, find,
  replace, goto line, keyboard navigation, and accessible selection;
- syntax support for Python, R, MATLAB, Markdown, Quarto, LaTeX, YAML, JSON,
  shell, SQL, and the app's existing general languages, using reviewed
  CodeMirror language packages where available and a tested fallback where an
  official package does not exist;
- explicit dirty/saving/saved/failed/conflicted indicators;
- auto-save only after its recovery and conflict semantics are proven; a manual
  Save action and standard shortcut remain available;
- external file change detection with `Compare`, `Reload`, `Keep mine`, and
  deliberate resolution;
- crash/quit draft recovery without pretending an unsaved draft is the project
  file;
- selection and line-comment actions that produce precise agent context;
- source/rendered toggle for Markdown without losing edit state;
- a read-only mode for external, generated, locked, truncated, or unsupported
  files;
- encoding and line-ending preservation or an explicit conversion warning;
- large-file thresholds that disable expensive features progressively rather
  than freezing the entire app.

### Necessary server work

- read returns revision/hash, size, encoding decision, line endings,
  completeness, and capability flags;
- write requires the expected revision and rejects a stale save;
- successful write returns a new revision;
- atomic replace and permission preservation are tested per platform;
- file watching and editor saves reconcile without loops;
- recovery drafts live outside the canonical project file until restored.

### Editor dependency proof

Build one bounded proof comparing CodeMirror 6 with the current T3-inspired
option. Test `.py`, `.R`, `.m`, `.qmd`, `.tex`, `.bib`, and `.typ` plus:

- a large file and a pathological long line;
- RTL/bidirectional text inside comments and strings;
- macOS/Windows/Linux keyboard behavior;
- IME composition;
- line comments and exact agent selections;
- source/rendered switching;
- LSP diagnostics and completion transport;
- file conflict/reload without lost edits;
- theme, accessibility, memory, and bundle behavior.

Approve CodeMirror if it passes. Use Monaco only if a concrete, necessary
desktop capability cannot be delivered reasonably with CodeMirror. Treat the
T3 beta editor as a challenger, not the default.

Exit gate: a researcher can manually open, edit, save, diff, recover, and ask an
agent about the same `.py`, `.R`, `.m`, `.qmd`, or `.tex` file without silent
data loss.

## Stage 2 — Shared Execution Coordinator And First Adapter Proof

Prove lifecycle, cancellation, diagnostics, receipts, artifacts, and recovery
before building notebooks or a full manuscript environment.

The foundation must pass a small cross-domain contract fixture before either
domain builds deeply: one analysis action and one document build should be able
to use the same coordinator and event envelope while producing different
specialized receipts. This is an architecture gate, not a requirement to ship
both user-facing integrations in the same release.

### User-facing slice

- `Run file`, `Run selection`, and `Stop` in the editor toolbar and command
  palette;
- a compact runtime indicator with version/environment;
- streaming output dock with stdout, stderr, status, duration, and diagnostics;
- missing-runtime state with detected alternatives and a route to settings;
- run history for the current file;
- visible project working directory;
- explicit confirmation for the first potentially consequential execution when
  product policy requires it, without prompting on every ordinary run;
- run initiated manually or by an agent appears in the same surface.

### Adapter sequencing decision

Python with `uv` remains the recommended first **analysis** adapter because it
is already present on the inspected development machine and aligns with the
current source-adaptation plan. A bounded LaTeX `DocumentBuild` may instead be
the first overall execution proof if its typesetting plan is approved and ready
first. The choice must be made from implementation readiness and researcher
value; it must not create two coordinators or make one domain impersonate the
other.

Before either implementation begins, approve the shared coordinator boundary,
base receipt, cancellation/supersession semantics, diagnostic envelope,
artifact registration, project-context handoff, and contract simulators. Then
implement the selected thin vertical slice and exercise the other domain
through a contract test double or spike.

For the analysis lane, validate the same contract with minimal R and MATLAB
adapters immediately after the Python proof:

- Python: `python`/`python3`, `uv run`, selected virtual environment;
- R: `Rscript` for file/selection execution, selected R home/library;
- MATLAB: `matlab -batch` or the supported installed-runtime invocation for
  file execution, with release/license discovery.

Do not add language-specific custom panels before all three can at least report
`available`, `missing`, `misconfigured`, run, stream, stop, and preserve an
`AnalysisRun` receipt through the common UI. Do not delay a useful LaTeX opener
until R and MATLAB ship; its `DocumentBuild` lane has its own acceptance gate.

### Process correctness

- cancel the process tree, not only the immediate launcher;
- distinguish cancellation, failure, crash, lost connection, and success;
- impose output backpressure and size-aware persistence;
- surface prompts that cannot be answered in noninteractive mode;
- prevent a long run from blocking editor/UI responsiveness;
- preserve platform-native quoting and paths without constructing shell strings
  from untrusted filenames;
- record the exact executable and version actually used.

Exit gate: the same fixture can be implemented in Python, R, and MATLAB; each
available runtime runs from the same toolbar, each missing runtime has an
honest setup state, and each run produces comparable receipts.

## Stage 3 — Outputs Become Project Artifacts

Connect execution to the universal viewer and project record.

1. Register files created or changed during a preserved run.
2. Open text/code through the editor, images/SVG/PDF through shared viewers,
   HTML through the accepted browser viewer, and tables through the first data
   inspector.
3. Render rich display output through a capability registry; unsupported MIME
   output must expose raw metadata and an external/export continuation.
4. Show source run, runtime, inputs, code revision, and timestamp beside an
   artifact.
5. Mark artifacts stale when tracked upstream revisions change.
6. Let the user promote or dismiss discovered outputs so temporary cache files
   do not flood Project Home.
7. Compare text/table/figure revisions where a meaningful comparison exists.
8. Keep a last successful preview visible and labelled while a replacement is
   building or has failed; never present failed/partial output as the current
   successful artifact.

This stage is where the HTML/image/SVG/PDF work and scientific workbench meet.
The workbench must call the generic viewer; it should not duplicate it.

Exit gate: a run that produces a CSV, PNG, SVG, PDF, and HTML report leaves a
coherent, reopenable project trail rather than only terminal text.

## Stage 4 — Language-Native Quality

Add value behind one common product surface.

### Python

- `uv` project/environment detection and explicit interpreter selection;
- environment and lockfile receipt;
- diagnostics/formatting through selected standard tools such as Ruff and a
  Python language server after separate dependency review;
- `pytest` integration into normalized test results;
- `ipykernel` discovery for notebook compatibility;
- common scientific output detection for pandas/Polars, NumPy, Matplotlib,
  seaborn, Plotly, Altair/Vega-Lite, SciPy, statsmodels, and scikit-learn
  without coupling Scient's data model to those libraries.

### R

- R installation and library discovery;
- `renv` detection, status, restore/install actions with explicit confirmation,
  and lockfile receipt;
- R `languageserver` for diagnostics, completion, navigation, and formatting;
- `lintr`, `styler`, and testthat integration through standard result shapes;
- RStudio-style Environment/History/Plots/Help expectations studied as UX,
  implemented in Scient's own surface;
- IRkernel for notebook compatibility;
- Quarto/R Markdown execution and preview;
- tidyverse/data.table/Arrow table handoff and ggplot2 figure capture;
- Ark evaluated later as a kernel/LSP/debug challenger, not a prerequisite.

### MATLAB

- installation picker that understands macOS app bundles, Windows Program Files,
  and Linux roots;
- visible release, connection, license, and toolbox state;
- edit and run `.m` files without requiring a notebook;
- run file/selection/section, stop, diagnostics, command output, variables,
  figures, tests, and later debugging through supported official interfaces;
- use the official VS Code extension as behavior/reference evidence, not as an
  embedded extension;
- optional official MATLAB MCP Core Server setup for the agent lane, connected
  back to the same run/artifact records;
- optional MATLAB-Jupyter integration when notebook support exists;
- `.mlx` remains a typed binary with `Open in MATLAB` and supported
  export/import paths until a fidelity-proven viewer exists;
- prefer plain-text `.m` and supported plain-text live-code workflows for new
  version-controlled work when they meet the user's MATLAB release and needs;
- `.mat` receives metadata/variable inspection before Scient attempts arbitrary
  round-trip editing.

Exit gate: each language gains useful native diagnostics and environment truth
without changing the common editor/run/artifact mental model.

## Stage 5 — Jupyter-Compatible Notebooks And Executable Documents

Notebook compatibility is important, but it should sit on the proven editor,
runtime, renderer, and run-record layers.

### First notebook slice

- open and inspect `.ipynb` structure without dumping raw JSON by default;
- edit code and Markdown cells;
- add/delete/move cells with undo;
- choose a discovered local or remote kernel;
- run cell, run above/below/all, interrupt, restart, and run all from clean
  state;
- show execution status and kernel/session truth;
- render standard text, error, Markdown, LaTeX, PNG/JPEG, SVG, HTML, JSON, table,
  Plotly, and Vega MIME types through reviewed renderers;
- trust and sanitize rules must be explicit for imported notebooks and
  executable HTML/JavaScript output;
- preserve/import/export standard notebook metadata and report any lossy
  transformation;
- diff notebooks semantically by cells/source/outputs where possible;
- let the user clear output and distinguish saved from live output;
- generate a preserved run receipt for clean or promoted executions.

Use selected Jupyter client/protocol and MIME-rendering packages where they
reduce protocol risk. Do not embed all of JupyterLab.

### Quarto And R Markdown

- recognize `.qmd` and `.Rmd` as editable documents;
- source/rendered split or toggle;
- execute through explicit Quarto/R/Python/Jupyter adapters;
- capture build log, citations, figures, intermediate files, and output report;
- preview HTML/PDF/DOCX through the shared viewers;
- reveal stale preview when source, data, code, or environment changes;
- preserve linked `AnalysisRun` and `DocumentBuild` receipts when executable
  code and publishing both participate.

### marimo

Start as an optional external adapter:

- detect a marimo program;
- open as normal Python source;
- offer `Open in marimo` or a managed local session when installed;
- capture produced artifacts and session link;
- study its reactive dependency graph, disabled expensive cells, and stale-state
  behavior for Scient's own notebook/reproducibility design.

Do not convert every Python notebook to marimo or use marimo's Python-specific
serialization as the cross-language Scient format.

Exit gate: standard notebooks and executable documents open, edit, run, render,
diff, and export without creating a second project shell.

## Stage 6 — Data Explorer And Variable Inspector

### Dataset viewer

Begin with CSV, TSV, Parquet, and Arrow. Add Excel through the existing document
infrastructure when its fidelity and dependency boundary are ready. Then add
typed adapters for JSON/JSONL, NumPy, R, MATLAB, HDF5, and domain formats.

Prototype DuckDB plus Arrow for read-oriented queries and Perspective for the
grid/chart surface. The proof must measure:

- first render and memory on small, medium, and larger-than-memory files;
- paging, sampling, cancellation, and progress;
- type fidelity, dates/time zones, categorical values, missing values, nested
  data, and very wide tables;
- keyboard navigation, screen-reader semantics, selection, copy, RTL content,
  theming, and high-DPI behavior;
- whether filter/sort/export operates locally and on which rows;
- bundle and worker behavior in Electron on all platforms;
- Arrow/DuckDB/Perspective version and licensing maintenance.

The default should be read-only exploration. Data mutations become explicit
transformations that produce a new file or a reviewable change; a grid should
not silently rewrite a research dataset.

### Runtime variables

Add a Variables tab backed by adapter capabilities:

- name, type/class, dimensions/shape, compact value preview, and size;
- expandable structures with paging;
- open table/array in the dataset viewer;
- open figure in the artifact viewer;
- source session and last update;
- clear/restart behavior that does not imply variables are durable artifacts;
- an explicit “Save as artifact” action where appropriate.

Exit gate: a researcher can inspect a large table and the live variables of an
R, Python, or MATLAB session without freezing the app or confusing session
state with saved data.

## Stage 7 — Figures, Graphs, And Visual Analysis

The first job is faithful output capture, not a no-code chart builder.

1. Render and preserve native static figures from Matplotlib/seaborn, ggplot2,
   and MATLAB.
2. Support common interactive HTML/JavaScript figures through the accepted HTML
   viewer mode and standard notebook MIME renderers.
3. Preserve Plotly and Vega/Vega-Lite specifications when available so figures
   remain inspectable rather than only rasterized.
4. Add figure metadata: dimensions, resolution, color profile when relevant,
   source run, code, data, parameters, caption, and export variants.
5. Add side-by-side revision comparison and visual-difference assistance where
   it provides reliable value.
6. Add a declarative visual builder only after generated specifications remain
   editable as ordinary project files and round-trip cleanly.
7. Link selected figures and tables into manuscript, presentation, evidence,
   and repository workflows without copying anonymous snapshots.

Exit gate: a figure is reproducible, reviewable, exportable, and connected to
its scientific origin.

## Stage 8 — Diagnostics, Testing, Debugging, And Profiling

Add deeper IDE behavior only after editing and execution are dependable:

- Problems panel aggregating parser, language-server, runtime, test, and build
  diagnostics with source navigation;
- code actions and formatting with a preview when they affect many lines;
- normalized unit-test explorer and run history;
- breakpoints, call stack, scopes, watch expressions, and debug console through
  language/runtime adapters;
- profiling and performance artifacts;
- MATLAB test/debug integration through supported official mechanisms;
- R debug support only when a maintained independent adapter meets the product
  gate;
- Python debug support through a separately reviewed debug adapter;
- agent explanations anchored to exact diagnostics and run state.

Debug protocol support is not a reason to embed VS Code. DAP/LSP are adapter
protocols; Scient should implement only the client/product surface it needs.

## Stage 9 — Reproducibility, Collaboration, And Remote Compute

### Reproducibility

- project runtime choices and environment receipts;
- Python `uv.lock`/project state, R `renv.lock`, MATLAB release/project/toolbox
  identity, Quarto/Pandoc versions, and Jupyter kernelspec identity;
- clean-run verification;
- cached-output invalidation and explicit unknown staleness;
- exportable run manifest and machine-readable artifact provenance;
- comparison of environment drift;
- opt-in packaging/container/remote recipes after local workflows work.

### Collaboration

- attributed edits and run initiators;
- comments/suggestions on source, cells, tables, figures, diagnostics, and runs;
- conflict handling before realtime co-editing;
- shared artifact review and approval;
- later CodeMirror collaboration primitives only after the local-first sync
  architecture selects authority, offline, and merge semantics.

### Remote and HPC

- attach to existing Jupyter servers;
- SSH/remote execution adapter;
- scheduler adapters such as Slurm after local run receipts are stable;
- remote file/artifact synchronization with explicit authority;
- reconnect, cancellation, queued/running/lost states;
- no claim that a local app termination cancelled remote work unless confirmed;
- organization/institution configuration only after identity and permission
  architecture exists.

Exit gate: local and remote runs preserve the same inspectable research record
and recover coherently from disconnection.

## Stage 10 — Domain Packs, Beginning With Neuroscience/BIDS

Once generic data, artifacts, and runtimes work, a neuroscience pack can add:

- BIDS-aware project/dataset tree;
- BIDS metadata summaries and sidecar relationships;
- official BIDS validation with navigable findings;
- OpenNeuro import/deposit preparation;
- NIfTI header and volume orientation inspection, followed later by imaging
  views through a reviewed scientific visualization dependency;
- events/confounds tables through the generic data explorer;
- provenance links to R/Python/MATLAB pipelines;
- large-data and de-identification warnings;
- later NWB, EEG/MEG, DICOM, microscopy, and discipline-specific adapters.

The active Scient roadmap already names OpenNeuro/BIDS fixtures. This domain
pack should validate that the generic workbench serves a real neuroscientist,
not redefine the generic workbench around one field.

## Document-Platform Handoff: LaTeX And The Long-Term Overleaf Direction

The [Scientific Document Platform Roadmap](scientific-document-platform-roadmap.md)
now owns the integrated proposal, stages, current Scient Desktop Next baseline,
viewer UX, Office/manuscript relationships, approval boundary, and complete
quality plan. The focused
[source map](../research/source-evaluations/scientific-document-platform-source-map.md)
owns current upstream pins and source dispositions. This section is retained
only as the computing workbench's shared-contract rationale; where planning
details diverge, the focused document-platform roadmap governs this proposed
product area.

The retained LaTeX discussion records shared-contract rationale; the focused
document-platform roadmap now owns its product proposal, and no engine or
product decision is accepted here. Its central architectural claim remains
sound: the
first universal typesetting opener should be a thin, durable layer of the later
manuscript workbench, not a disposable `LatexFilePreview` component.

### Durable shared contract

Define a `TypesetProject` as a domain specialization over shared Scient
infrastructure:

- `.tex`, `.ltx`, `.latex`, `.bib`, `.bibtex`, `.bst`, `.sty`, `.cls`, `.dtx`,
  `.ins`, `.typ`, Quarto, and related portable text use `WorkspaceDocument`;
- the universal opener and `SurfaceRegistry` provide `Preview`, `Source`,
  `Log`, and optional split modes without creating a second tab identity;
- `ProjectAndDependencyResolver` provides the root, sources, local styles,
  classes, bibliography, figures, and generated-output context;
- `ExecutionCoordinator` owns start, cancel, supersede, progress, recovery, and
  process-tree lifecycle;
- `TypesettingEngineAdapter` owns engine-specific preparation and parsing;
- compile findings use the shared Problems model and durable source anchors;
- PDF/HTML use the existing shared viewers and artifact registry;
- a `DocumentBuild` receipt preserves root/source revisions, dependency graph,
  engine/recipe, bibliography passes, environment, log, diagnostics, outputs,
  and staleness inputs;
- chat, agents, review comments, and later source-to-output navigation refer to
  the same documents, source ranges, build, and output artifact.

The shared execution layer must not flatten typesetting into an analysis run.
An analysis result cares about runtime state, code selections, variables,
tests, and data outputs. A document build cares about its root, dependency
graph, engine passes, bibliography/index work, log, and last successful render.
They should share mechanics and vocabulary while retaining those semantics.

### First universal typesetting opener

The first useful slice should:

1. Open source immediately from the project explorer, chat, scratch space, or
   an arbitrary absolute local path, even when no compiler or project root is
   available.
2. Resolve the smallest bounded project context needed for local inputs,
   images, styles/classes, bibliography, and compilation. Do not require import
   into the current project merely to see a file.
3. Offer `Preview`, `Source`, and `Log`, plus an optional split view; preserve
   scroll/zoom and the selected source across rebuilds where practical.
4. Build, rebuild, cancel, and supersede an obsolete build without leaving
   orphan processes or letting late output replace a newer result.
5. Parse errors and warnings into navigable diagnostics while retaining the
   complete raw log.
6. Keep the last successful PDF visible and explicitly stale when the next
   build is running or fails.
7. Show useful missing-engine, missing-package, ambiguous-root,
   missing-resource, malformed-source, cancellation, and build-failure states;
   source remains usable in every case.
8. Keep auxiliary and temporary files outside source directories by default,
   unless a project configuration deliberately specifies otherwise.
9. Reuse the existing PDF viewer instead of building a private typesetting PDF
   surface; add forward/inverse source synchronization later through durable
   anchors and reviewed SyncTeX support.

This is intentionally a complete local viewing/build loop, not yet full
Overleaf. Smooth opening and useful output are the default. Normal execution
boundaries—explicit provider discovery, owned process lifecycle, bounded file
context, and truthful errors—should protect reliability without turning valid
local documents into artificial read-only or blank states.

### Root and project resolution

The LaTeX resolver should evaluate evidence in a documented order and expose
ambiguity rather than guessing invisibly:

1. a prior explicit choice for the same project/context;
2. a root magic comment such as `% !TEX root`;
3. project configuration;
4. the selected file if it contains document-root markers;
5. bounded reverse dependency discovery through `input`, `include`, `import`,
   and related relationships;
6. a concise root chooser when more than one credible candidate remains.

The selected source is not replaced by the root. A chapter opened from chat
should remain the active source while its parent document supplies compilation
context. Cache only choices whose scope and invalidation are understood.

### Engine and language-service strategy

No engine is approved by this roadmap. Build the adapter contract first, then
compare candidates against the fixture pack and platform/distribution review:

- Tectonic is the leading managed, lower-setup local engine candidate;
- an installed `latexmk`/TeX Live/MiKTeX path preserves compatibility with
  existing projects, including explicit XeLaTeX/LuaLaTeX choices;
- Typst should be a peer adapter, not a LaTeX conversion hack;
- Quarto/Pandoc should compose analysis and document-build receipts;
- a future remote build provider should implement the same contract without
  making local files or artifacts opaque.

LaTeX Workshop is the strongest bounded reference for root discovery, build
recipes, cancellation, dependency/output directories, PDF refresh, and
SyncTeX. TexLab is a plausible external LSP and is already integrated in
`scient-agent`, but the desktop lifecycle, binary distribution, GPL boundary,
and relationship to the editor need explicit review. Overleaf is a long-term
workflow reference, not the local opener's codebase or service architecture.

### Full manuscript capability envelope

The long-term target is not merely an improved LaTeX preview. Scient should be
able to cover the useful capabilities researchers expect from Overleaf and the
broader scholarly-authoring ecosystem, then exceed them by connecting evidence,
analysis, figures, provenance, and agents. The target envelope is:

| Capability area | Durable target | Foundation that must exist early |
|---|---|---|
| Project and file lifecycle | Create, import/upload, copy, archive, tag, search, download, export, manage multi-file trees and assets, open arbitrary local sources, and preserve external-tool continuity. | Stable project/document/asset identity; file-native authority; conditional writes; bounded project resolution; import/export receipts. |
| Source and visual authoring | First-class source and rich visual surfaces, long-document navigation/search, syntax and language assistance, math, tables, figures, cross-references, accessibility, and safe reconciliation with external edits. | Surface and projection registries; semantic identities and source maps; explicit authority; recoverable drafts and conflicts. |
| Compilation and preview | Local, managed, or remote engines; versioned toolchains; automatic/manual/fast builds; cancellation; cache/output control; logs and output files; useful error modes; last-success preview; source/output synchronization. | Execution coordinator; project/dependency resolver; `DocumentBuild`; diagnostics; artifact registry; provider capability discovery. |
| Citations and evidence | BibTeX/BibLaTeX, Zotero/JabRef/CSL interoperability, citation search/keys/locators/styles, metadata repair, refresh/reconciliation, unresolved states, and a distinction between evidence-linked and auxiliary references. | Structured reference and citation identities; adapter contract; provenance/evidence links; fidelity reporting. |
| Review and discussion | Edit/review/view roles, link or invited access, comment threads, mentions, assignments, suggestions and tracked changes, accept/reject, reviewer modes, and later contextual project chat. | Durable attributed operations and anchors; permissions independent of the editor; one human/agent proposal lifecycle. |
| History and recovery | Attributed activity, labelled milestones, comparisons, downloadable snapshots, file/project restore, deleted-file recovery, and intelligible relationships to Git/import/sync history. | Revision graph and immutable receipts independent of CRDT/OT state; asset versioning; migration and restore contracts. |
| Realtime and local-first collaboration | Presence, cursors, concurrent edits, offline work, reconnect, visible conflict handling, ownership transfer, future-access revocation, and recovery without making a hosted service canonical for file-native projects. | Collaboration-engine boundary; identity/authorization; authority rules; portable history; separately versioned large assets. |
| Templates and publication | Versioned template registry/gallery, origin and license, update/reconciliation, journal/conference/thesis/grant profiles, metadata and style validation, submission packages, direct adapters, receipts, repositories, deposits, and persistent identifiers. | Template/profile/publication adapter contracts; projection/fidelity reports; artifact packages; identity and audit. |
| Integrations and portability | Git/GitHub/GitLab, local editors, Zotero, storage/drive providers, APIs and automation, source package import/export, and explicit history/conflict semantics at every boundary. | Provider adapters over owned document/project contracts; no external integration as sole project truth. |
| Scientific and agent advantage | Evidence-linked claims, analysis-to-figure-to-manuscript provenance, executable documents, reproducibility checks, error assistance, language help, summaries/explanations, equation/table assistance, citation suggestions, and reviewable agent tasks. | Shared documents, runs, builds, artifacts, citations, evidence, permissions, and attributed proposal/approval records. |
| Group and institution operation | Guests, groups/labs/institutions, roles, SSO and provisioning, managed accounts, ownership continuity, audit, retention/offboarding, metrics, and feature/AI policy. | Identity, authorization, audit, policy, export, and deletion contracts outside the editor/compiler. |
| Accessibility, mobile, and international use | Keyboard/screen-reader quality, responsive review and approval, Unicode, multilingual/RTL content, and reliable behavior across desktop and browser continuations. | Semantic surfaces, command/action model, scoped bidi behavior, platform fixtures, and progressive rendering. |

This is a capability inventory, not a promise that every item ships in one
release or that Overleaf is the only benchmark. A capability may be delivered
through owned implementation, a reviewed dependency, an adapter to an existing
service, or a deliberately accepted donor integration. The permanent test is
whether it composes with Scient's authority, identity, provenance, recovery,
and portability contracts.

### Capability growth ladder

Use the following maturity ladder to prevent both throwaway first work and a
premature attempt to build the whole platform. These are dependency layers,
not accepted release dates:

1. **M0 — universal file-native opener and build:** open any source, resolve
   bounded project context, edit safely, compile through an adapter, inspect
   diagnostics/log/output, and retain the last successful artifact.
2. **M1 — manuscript kernel:** formalize authority modes, semantic identities,
   anchors, projections, reconciliation reports, assets, revisions, and import/
   export receipts before rich or collaborative state becomes entrenched.
3. **M2 — serious individual authoring:** prove the scientific rich-editor
   projection, source/visual round trips, structured citations/evidence,
   figures/tables/equations, project search/navigation, templates, and
   deterministic exports.
4. **M3 — asynchronous review and durable history:** add comments, mentions,
   assignments, suggestions/track changes, human and agent accept/reject,
   milestones, comparison, restore, and deleted-file recovery.
5. **M4 — realtime/local-first collaboration:** add a replaceable collaboration
   engine, presence, offline/reconnect, conflicts, migration, revocation, and
   multi-device recovery without moving scientific authority into engine state.
6. **M5 — publication and ecosystem:** add template/profile registries,
   validation, submission/deposit packages and providers, Git/reference-manager/
   storage integrations, receipts, and reliable source/Word/JATS/HTML/PDF
   interchange.
7. **M6 — groups and institutions:** add guests, groups, roles, managed users,
   SSO/provisioning, audit, retention/offboarding, metrics, policy controls,
   accessible mobile review, and hybrid deployment choices.
8. **M7 — integrated scientific intelligence:** connect literature evidence,
   claims, datasets, analysis runs, figures, executable documents, peer review,
   reproducibility checks, and governed agent assistance into one traceable
   research lifecycle.

Each maturity level must extend the same document/project identities and
contracts. It may add schemas and services, but should not require replacing
the opener, project resolver, editor boundary, history, build receipts, or
artifact registry established below it.

### Overleaf adaptation options and decision gate

The present recommendation is to use Overleaf as a comprehensive product and
systems reference while building Scient-owned contracts and selectively using
permissive components or adapters. It is not a permanent ruling against every
deeper relationship. Future options include:

- compatibility and project-package exchange only;
- an integration or synchronization adapter to an Overleaf deployment;
- selected isolated services behind Scient contracts;
- a maintained Community Edition fork or self-hosted offering;
- an independently implemented Scient platform with equivalent capabilities.

Before choosing anything deeper than reference, compatibility, or a bounded
adapter, complete a dedicated source-depth, license, product, and operational
decision. It must compare the actual hosted, professional, and Community
Edition feature sets; identify per-component licensing and distribution
obligations; measure how much relevant implementation is reusable; test fit
with desktop/local-first and structured-native projects; define canonical data
and history; price deployment, upgrades, observability, migration, security,
and upstream maintenance; and show that the option accelerates the complete
capability envelope rather than only reproducing a LaTeX collaboration silo.

Overleaf's service separation is a valuable architectural lesson, not a
topology prescription. Likewise, Community Edition availability is neither
proof that all hosted features can be adopted nor a reason to reject a future
fork that later proves legally, operationally, and strategically superior.

### Open decisions for the typesetting plan

Resolve these in the separate LaTeX architecture and implementation proposal:

- whether `DocumentBuild` or Python `AnalysisRun` is the first shared execution
  proof;
- whether and how Scient distributes a managed Tectonic binary/bundle;
- the first installed-TeX discovery matrix and engine override UX;
- how external absolute files receive bounded neighboring-directory context;
- auxiliary/output directory defaults and project overrides;
- TexLab distribution/update ownership and license obligations;
- root-choice persistence, invalidation, and multi-root behavior;
- the first source/PDF synchronization milestone;
- the exact file-native and structured-native manuscript representations and
  the UX for deliberate conversion or authority changes;
- the stable semantic identity, anchor, source-map, and orphan/re-anchor model;
- the rich-editor projection winner after one scientific manuscript fixture is
  tested in Tiptap/ProseMirror, Plate, and Lexical;
- the projection-adapter and fidelity/reconciliation report schema;
- the review/history operation model and the bounded collaboration-engine
  prototype winner;
- the Overleaf relationship: compatibility, integration, isolated services,
  fork/self-host, independent implementation, or a staged combination;
- the template/profile/submission registry and first direct publishing or
  repository adapters;
- where individual, guest, group, institution, and mobile continuation scope
  enters the delivery sequence.

## Platform Implications

### macOS

- GUI `PATH` differs from terminal shells; discover app bundles and common
  package managers explicitly.
- MATLAB usually appears as `/Applications/MATLAB_R20xx.app`; preserve the
  chosen release.
- discover MacTeX/BasicTeX, Tectonic, Typst, Quarto, and explicit user-selected
  engines without assuming an interactive shell `PATH`.
- Apple Silicon and Intel native dependencies require separate artifact proof.
- spawned processes and local servers must be included in signing/notarization
  and hardened-runtime review where applicable.
- quit/relaunch must flush or recover editor drafts and terminate only sessions
  Scient actually owns.

### Windows

- handle drive letters, UNC paths, spaces, quoting, CRLF, code pages, long paths,
  locked files, and atomic-replace differences.
- distinguish native Windows runtimes from WSL runtimes. An executable or MATLAB
  installed in one environment is not automatically usable from the other.
- terminate process trees reliably.
- discover MATLAB installations and Python/R launchers without assuming shell
  `PATH`.
- discover MiKTeX, TeX Live, Tectonic, Typst, and Quarto; test spaces, drive
  letters, Unicode paths, locked PDFs, and distribution-specific package setup.
- test antivirus/Defender effects on temporary files, local servers, and
  package environments.

### Linux

- distro packages, environment modules, user installs, Conda, and HPC paths vary
  widely.
- sandboxed distributions must deliberately expose user-selected runtimes and
  files without weakening the whole application.
- graphical MATLAB and headless/server behavior differ.
- TeX Live/distro packages, Tectonic, Typst, Quarto, fonts, and headless PDF
  behavior vary; discovery must report what is actually executable.
- remote/HPC will be especially important but must not precede the local
  adapter contract.

### All Platforms

- runtime detection, absence, multiple versions, upgrades, and removal;
- filesystem watching and save conflicts;
- cancellation and orphan cleanup;
- local Jupyter/marimo/MATLAB-proxy ports, tokens, and lifecycle;
- native/worker dependency packaging;
- compiler/toolchain upgrades, build-cache location, auxiliary-file cleanup,
  and recovery of abandoned document builds;
- Unicode and Hebrew source, RTL passages, font discovery/embedding, and
  XeLaTeX/LuaLaTeX/Tectonic differences;
- high-DPI charts, accessibility, keyboard behavior, and IME;
- paths crossing local, remote, container, or WSL boundaries;
- deterministic run receipts despite platform-specific launch mechanics.

## Quality And Fixture Plan

Create a small, versioned scientific fixture pack that tests capability rather
than only component rendering.

### Editor fixtures

- `.py`, `.R`, `.m`, `.Rmd`, `.qmd`, `.tex`, `.bib`, `.typ`, JSON/YAML, and an
  unknown text extension;
- UTF-8, RTL comments, combining characters, CRLF, missing final newline, and a
  deliberately unsupported encoding;
- large file, long line, truncated read, read-only permissions, and external
  modification during an unsaved edit;
- app crash/forced renderer reload with unsaved recovery;
- save permission failure and disk-full simulation;
- source/rendered switch and exact line-comment/agent reference.

### Runtime parity fixture

Implement the same small analysis in Python, R, and MATLAB:

- read the same CSV;
- validate columns and missing values;
- calculate a deterministic summary;
- emit stdout and a deliberate warning;
- produce a CSV table, PNG, SVG where supported, and HTML report;
- include a deliberately failing variant;
- include a slow/cancellable variant;
- include a missing-package/toolbox variant.

Test available, missing, misconfigured, multiple-version, cancelled, crashed,
and successful states. Do not require all proprietary runtimes on every CI
lane; use contract simulators plus licensed, permitted validation where
available, and label the distinction.

### Shared execution contract fixture

Exercise the coordinator independently of a full language integration:

- start, stream progress/log/diagnostics, complete, fail, cancel, and supersede;
- kill owned child processes and ignore late events from an obsolete attempt;
- register partial output separately from a last successful artifact;
- restore or classify an execution abandoned by app restart;
- preserve a shared base receipt while `AnalysisRun` and `DocumentBuild` retain
  different required fields;
- open every resulting artifact through the same universal viewer route.

### Notebook/document fixtures

- clean and out-of-order `.ipynb`;
- trusted/untrusted rich HTML and JavaScript output;
- Matplotlib, ggplot2, MATLAB, Plotly, Vega-Lite, SVG, LaTeX math, table, and
  error MIME bundles;
- R Markdown and Quarto with code, citations, math, local images, missing
  resource, build error, and stale output;
- metadata round-trip and semantic diff.

### Typesetting fixtures

- single-file LaTeX with no external dependencies;
- a chapter opened directly whose root document includes it;
- local images, styles/classes, bibliography, citations, and multiple source
  directories;
- `.typ` plus Quarto/Pandoc as peer adapter cases;
- Unicode and Hebrew/RTL text with a documented font/engine setup;
- ambiguous root, cyclic or missing include, missing package/resource, malformed
  source, and unavailable engine;
- slow build cancellation, superseded rebuild, process cleanup, and app restart;
- failed rebuild retains a labelled last successful PDF;
- PDF refresh preserves useful zoom/scroll position and later source anchors;
- arbitrary absolute source outside the active project, with and without
  adjacent project context;
- auxiliary and temporary outputs do not pollute source directories by default;
- macOS, Windows, and Linux discovery paths plus a deterministic adapter
  simulator for CI lanes without a full TeX distribution.

### Manuscript platform compatibility fixture

Use one realistic multi-file scientific paper to test the architectural path,
not only isolated editor widgets. Maintain both a file-native project and a
structured-native manuscript case and require:

- source and visual edits, an external file edit, and an explicit authority
  conversion all produce correct revisions and an understandable
  reconciliation report;
- sections, citations/evidence, equations, figures, tables, cross-references,
  footnotes, metadata, and assets retain stable identities where supported;
- LaTeX, Typst, Quarto/MyST, Word, JATS, HTML, and PDF adapters declare and
  report preserved, normalized, downgraded, unresolved, and lost content;
- comments, suggestions, accepted/rejected changes, evidence anchors, and
  source/output navigation survive ordinary edits and builds, with visible
  orphan/re-anchor recovery when they cannot;
- humans and agents use the same attributed suggestion and approval lifecycle;
- history labels, comparisons, single-file/project restore, and deleted-file
  recovery work independently of the current editor or collaboration engine;
- concurrent, offline, reconnect, conflict, schema-migration, access-revocation,
  and abandoned-session cases recover without silent loss;
- large figures, PDFs, datasets, and supplements are versioned as assets rather
  than embedded in a text collaboration document;
- template upgrade, publication-profile validation, submission-package
  creation, and provider failure leave reviewable artifacts and receipts;
- Git or external-provider synchronization cannot silently discard comments,
  suggestions, evidence links, or accepted Scient history; and
- an editor, compiler, collaboration engine, or publishing adapter can be
  replaced in the fixture without migrating the canonical project model.

### Data fixtures

- CSV/TSV/Parquet/Arrow with small, wide, large, nested, date/time-zone,
  categorical, and missing-value cases;
- `.mat`, `.rds`, `.RData`, HDF5, NumPy, and unknown/broken binaries;
- zero-byte, malformed, extension/content mismatch, permission failure, and a
  file changed during read;
- filters, sort, copy/export scope, sampling truth, and cancellation.

### Artifact and provenance fixtures

- run creates, updates, and deletes outputs;
- source/data/environment change marks result stale;
- failed run leaves partial output clearly identified;
- retry links to prior run;
- manually edited generated file becomes a new revision, not silently
  overwritten;
- artifact opens from explorer, Project Home, run history, chat, and manuscript
  link through the same viewer;
- recovery after app restart.

### Domain fixture

After the generic workbench passes, add the selected OpenNeuro/BIDS fixture from
the active product roadmap. Validate metadata navigation and the official BIDS
validator before attempting heavy imaging visualization.

## What Not To Build First

- Do not fork VS Code, RStudio, Positron, JupyterLab, MATLAB, or Overleaf as a
  shortcut around defining Scient's project, authority, provenance, and
  interoperability contracts.
- Do not build separate Python, R, and MATLAB mini-products.
- Do not call a read-only syntax preview an editor.
- Do not adopt a beta editor solely because T3 currently uses it.
- Do not build a full notebook before safe editing and ordinary script runs.
- Do not build a one-off `LatexFilePreview` that spawns a compiler, invents its
  own project scan, or bypasses shared diagnostics, artifacts, and cancellation.
- Do not fork or self-host Overleaf merely to deliver the first local opener or
  before the dedicated adaptation decision gate. Do not permanently exclude a
  deeper Overleaf relationship if that review later proves it is the best way
  to deliver the full capability envelope.
- Do not assume cloning Community Edition produces hosted/professional feature
  parity or Scient's evidence, analysis, provenance, and agent advantages.
- Do not use MCP as the only MATLAB integration.
- Do not bundle or redistribute MATLAB or imply Scient supplies a license.
- Do not make `.mlx`, `.ipynb` JSON, proprietary workspace binaries, or hidden
  database state Scient's universal canonical analysis model.
- Do not mutate datasets through a convenient grid without creating an explicit
  transformation and provenance.
- Do not enable arbitrary interactive output in the main application renderer.
- Do not promise automatic perfect dependency/staleness inference for arbitrary
  scripts in the first version.
- Do not build realtime collaboration before save conflict and authority rules.
- Do not delay useful viewing because a perfect typed editor is unavailable;
  show the file and provide honest capabilities and continuations.

## Approval Proposal

Approve the following direction:

1. **Category:** establish Scientific Computing and Data Analysis as the owner
   of manual scientific source editing, runtimes, notebooks, data exploration,
   figures, runs, and analysis artifacts.
2. **Foundation:** make a conditional, recoverable editable document and surface
   registry shared with the universal file opener; add explicit file-native and
   structured-native authority modes, stable identities/anchors, projection and
   reconciliation adapters, and an optional bounded project/dependency resolver
   for formats that need more than one pathname.
3. **Editor:** run a bounded CodeMirror 6 proof and use it by default if it
   passes; retain `@pierre/diffs` for diff/review; adapt T3 behaviors but not its
   patched beta foundation wholesale.
4. **Execution:** define one execution coordinator, normalized event and
   diagnostic envelope, base receipt, and artifact/staleness contract, with
   specialized `AnalysisRuntimeAdapter`/`AnalysisRun` and
   `TypesettingEngineAdapter`/`DocumentBuild` contracts.
5. **Proof order:** keep Python/`uv` as the first analysis adapter; choose the
   first overall proof between a thin Python run and thin LaTeX build only after
   both use the approved shared boundary. Then validate R and MATLAB parity
   immediately in the analysis lane.
6. **R:** use official R, `renv`, R `languageserver`, and IRkernel as the first
   compatibility path; treat Ark as a later challenger.
7. **MATLAB:** integrate user-installed licensed MATLAB; use official MathWorks
   sources as adapters/references; add the official MATLAB MCP Core Server as an
   optional agent lane, not the manual workbench.
8. **Notebooks:** implement selected Jupyter protocol/MIME compatibility after
   script execution; do not embed all of JupyterLab; keep marimo as an adapter
   and design reference.
9. **Data:** prototype DuckDB + Arrow + Perspective behind Scient's own data
   viewer contract and accept them only after performance/accessibility/fidelity
   gates.
10. **Figures:** capture native language outputs first, preserve interactive and
    declarative specifications where available, and connect figures to source
    runs and manuscripts.
11. **LaTeX:** build the first universal typesetting opener as a durable
    `TypesetProject` specialization with immediate source, bounded root and
    dependency resolution, `Preview | Source | Log`, cancellable builds,
    diagnostics, and a retained last successful PDF. Select engines only after
    an adapter/fixture/platform proof.
12. **Manuscripts:** evolve that opener through the complete capability
    envelope: serious source/visual authoring, citations/evidence, review,
    durable history, realtime/local-first collaboration, templates,
    publishing, integrations, portability, institutions, accessibility/mobile,
    and governed scientific agent assistance, without replacing the shared
    document, execution, diagnostics, history, and artifact base.
13. **Source posture:** keep Overleaf and every donor behind owned contracts.
    Start with product reference, compatibility, and bounded adapters; leave a
    future isolated integration, self-hosted deployment, or maintained fork
    available only after a dedicated source-depth/license/product/operations
    decision proves it superior for the complete target.
14. **Domains:** add neuroscience/BIDS as a later adapter pack after the generic
    workbench is useful.
15. **Scope control:** preserve current Markdown, diff, terminal, PDF/image, and
    browser behavior; integrate rather than duplicate the universal viewer.

Reject for now:

- an unreviewed wholesale donor fork;
- a language-specific architecture;
- notebook-first sequencing;
- agent-only execution;
- proprietary-runtime bundling;
- an unqualified promise of full IDE, Overleaf, MATLAB, or RStudio parity in
  the first implementation.

## First Implementation Planning Handoffs After Approval

Approval of this roadmap should create separate bounded documents rather than
turning this planning note into implementation architecture:

1. editable workspace document and conditional-write architecture;
2. universal surface registry and file capability design;
3. bounded project/dependency resolver architecture;
4. editor dependency spike report;
5. shared execution/event/diagnostic/base-receipt architecture with explicit
   `AnalysisRun` and `DocumentBuild` specializations;
6. artifact, last-success, and staleness architecture;
7. Python/R/MATLAB parity fixture and quality plan;
8. first workbench interaction design;
9. dependency/license review for selected packages;
10. MATLAB integration and licensing/telemetry decision record;
11. universal typesetting opener architecture, interaction design, and
    engine/LSP/license/platform fixture spike;
12. manuscript authority, semantic identity, anchor, projection, fidelity, and
    reconciliation architecture decision;
13. scientific rich-editor shootout using one source/visual/citation/evidence/
    figure/review/import-export fixture;
14. citation/reference/evidence architecture and Zotero/JabRef/CSL adapter plan;
15. review, attributed history, restore, and replaceable collaboration-engine
    architecture plus offline/conflict/revocation fixture;
16. template/profile/publication/submission architecture and first adapter plan;
17. Overleaf hosted/professional/Community Edition source-depth, feature-gap,
    license, operations, local-first, and structured-manuscript decision record;
18. notebook protocol/rendering spike after the script-run gate passes.

## Roadmap Completion Criteria

This proposal is ready for an approval decision when reviewers agree that it:

- answers the current-state question without overstating shipped capability;
- keeps manual and agent work on the same project objects;
- provides a non-throwaway path from a universal LaTeX/source opener to richer
  manuscript work covering the complete Overleaf-class capability envelope and
  Scient's additional evidence, analysis, provenance, and agent workflows;
- supports durable file-native and structured-native authority, stable semantic
  identity, replaceable projections, and explicit round-trip fidelity without
  requiring an opener or project-model migration;
- shares execution mechanics across analysis and document builds without
  erasing their distinct semantics;
- scales from ordinary scripts to notebooks, data, plots, debugging, remote
  compute, and domain packs through explicit adapters;
- distinguishes reusable dependencies, adapter integrations, UX references,
  source-available projects, and proprietary software;
- leaves deeper Overleaf integration, self-hosting, or fork adoption open to a
  dedicated evidence-based gate rather than silently accepting or forbidding it;
- sequences the highest-ROI foundations before full IDE depth;
- preserves current viewer, Markdown, diff, terminal, and browser behavior;
- contains explicit exit gates, platform implications, recovery states, and
  fixtures;
- leaves product acceptance and architecture decisions with the proper owners.

It should be revised when product approval changes the scope, a dependency spike
invalidates the editor/data choices, or implementation evidence changes current
truth. It should not be marked Active merely because it is detailed.
