# Scientific Computing And Data Analysis Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-07-24
Last updated: 2026-11-24
Purpose: Proposes the scope, architecture, and implementation sequence for Scient's computing workbench and its shared document foundations.
Doc type: Planning note

## Decision Summary

Scient should develop one **Scientific Computing and Data Analysis** workbench
for scripts, notebooks, datasets, figures, and results. Use the same project
files, runs, and results for manual and agent work. The next priority is a
result a researcher can inspect, compare, and hand off for a rerun with its
original inputs. Apply that workflow to scripts and parameterized notebooks.
[Recommended Next Implementation](#recommended-next-implementation)

Reuse the file opener, conditional editor, dataset grid, and artifact viewers.
Keep the current editor seam and evaluate a replacement only against a concrete
unmet requirement. Share project resolution, execution mechanics, diagnostics,
and artifacts across stateful `ComputeSession`, isolated `AnalysisRun`, and
`DocumentBuild`. Each record keeps its own semantics.

This proposal guides bounded design and implementation planning. The related
roadmaps below own Python-specific scope, document and file infrastructure,
and artifact inspection, composition, and publication.

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

The workbench and manuscript platform share document identity, provenance,
history, assets, projections, and agent actions.

## Sources Of Authority And Related Plans

This proposal is subordinate to the accepted
[PRD](../product/PRD.md). It refines the `Data, code, analysis, figures, and
artifacts` area currently summarized in
[Product Planning](product-planning.md) and fits after the coherent foundations
sequenced in the active [Product Roadmap](product-roadmap.md).

Related plans own the following dependencies.

- [Open-Source Adaptation Build Strategy](open-source-adaptation-build-strategy.md)
  for the fork-versus-adapter boundary;
- [Open-Source Adaptation Map](../research/source-evaluations/open-source-adaptation-map.md)
  for the broader donor inventory;
- [Scientific Document Platform Roadmap](scientific-document-platform-roadmap.md)
  for universal viewing, mathematics, typesetting, Office interoperability,
  manuscript authoring, review, collaboration, and publishing;
- [File, Resource, And Presentation Foundation](file-resource-and-presentation-foundation.md)
  for stable file identity, relocation, resolution, presentation selection,
  shared viewer states, and broad view-only coverage;
- [Scientific Python Environment Roadmap](scientific-python-environment-roadmap.md)
  for Python execution, environment recovery, and later analysis workflows;
- [Scientific Artifact Studio](scientific-artifact-studio.md) for artifact
  inspection, representation, comparison, composition, and publication export;
- [Scientific Document Platform Source Map](../research/source-evaluations/scientific-document-platform-source-map.md)
  for focused document-platform donor evidence, pins, exclusions, and gates;
- the generic “open any file from chat” plan for one consistent file-opening
  path, exact-file resolution, and recoverable viewer states;
- future architecture decisions for execution, artifacts, reproducibility,
  project format, permissions, and collaboration;
- future accepted document-platform architecture and implementation plans. The
  engine choice, first typesetting slice, manuscript representation,
  collaboration model, and donor-adaptation depth remain outside this roadmap.

## Desktop Baseline, 2026-11-23

Desktop `main` source and Help were reviewed at
[`c7bbc046`](https://github.com/ScientFactory/scient-desktop/commit/c7bbc0469f37c421ed2fe86fd917a55c0f68341c).
The table records source capabilities. Packaged and cross-platform qualification
remain open.

| Roadmap area | What Desktop main supports |
|---|---|
| 0–2. Open, edit, run | Project source editing, revision-aware saves, file/selection/cell runs, and retained run history for manual and agent Compute work. |
| 3 and 7. Results and figures | Rich outputs, figure saving, batch exports, and linked results. Fresh whole-script runs can publish figures, tables, and values written to `SCIENT_RESULTS_DIR` for Markdown and LaTeX. Revisions retain script identity, runtime, outputs, and observed project-file reads where supported. |
| 4. Language support | Python, R (IRkernel or Ark), Julia, DuckDB SQL, MATLAB, and installed Jupyter kernels. Scient-managed Python has its own runtime and toolkit recipes. |
| 5. Notebooks | `.ipynb` code and Markdown editing, saved cell outputs, restart and run all, session variables where supported, heuristic staleness, and agent read/edit/run. |
| 6. Datasets and variables | Paged CSV, TSV, Parquet, and workbook grids with search and sort. The grid also shows table-like kernel variables. |
| 8. Diagnostics and IDE depth | Run errors and output locations guide researchers back to source or into chat. |
| 9–10. Handoff, remote, and domains | Sessions run on the selected Scient server, including SSH. Run history, notebooks, and script result revisions provide handoff evidence. |

Sources: [Compute Help](https://scientfactory.com/docs/scientific-computing/),
[Compute internals](https://github.com/ScientFactory/scient-desktop/blob/c7bbc0469f37c421ed2fe86fd917a55c0f68341c/docs/internals/scient-compute.md),
[linked result publication](https://github.com/ScientFactory/scient-desktop/blob/c7bbc0469f37c421ed2fe86fd917a55c0f68341c/apps/server/src/scient/results/ComputeResults.ts),
[result revisions and staleness](https://github.com/ScientFactory/scient-desktop/blob/c7bbc0469f37c421ed2fe86fd917a55c0f68341c/apps/server/src/scient/results/resultRevisions.ts),
and [Remote Access Help](https://scientfactory.com/docs/remote-access/).

### PR #1082 candidate, 2026-11-24

[PR #1082](https://github.com/ScientFactory/scient-desktop/pull/1082) is
pending merge at `bc1e3d8e069`. The candidate extends the baseline as follows.

- **Linked result revisions and comparison.** Scripts and fresh notebooks can
  publish linked results with parameters, declared inputs, and available run
  and environment evidence. Compare two revisions and inspect changed values,
  tables, figures, and provenance. Publication requires writing linked outputs
  to `SCIENT_RESULTS_DIR`.
- **Notebook parameters, sweeps, and Reader view.** Tagged parameters drive
  explicit fresh runs and bounded sweeps. Reader can switch between saved
  settings and their results without starting a kernel.
- **Result package export and verification.** Export a chosen revision with
  source, outputs, a manifest, RO-Crate metadata, environment evidence, and
  selected input files. Verification reruns supported analyses and reports
  per-output differences.
- **Dataset profiles and saved views.** Show column summaries with exact or
  sampled scope. Save reusable DuckDB SQL views, materialize them, and declare
  them as run inputs.
- **Notebook output and code navigation.** Inline text, plots, errors, and
  written-file links, plus failure summaries, heading navigation, and explicit
  setup replay through a selected cell, and one-click code folding from the
  language row in the editor and Reader.

[Candidate Compute Help](https://github.com/ScientFactory/scient-desktop/blob/bc1e3d8e069/docs/user/scientific-computing.md)
· [Candidate file-preview Help](https://github.com/ScientFactory/scient-desktop/blob/bc1e3d8e069/docs/user/file-previews.md)

## Recommended Next Implementation

Start notebook environment recovery alongside candidate qualification.

1. **Linked revisions and comparison (Stages 3, 7, 9) — built-pending-merge.**
   Notebook revisions carry package evidence, failed and stopped fresh runs
   reach the paper's last-attempt row, and an empty publish keeps the previous
   result. Remaining: qualify on Windows and Linux.
2. **Notebook parameters, sweeps, Reader, inline output, replay, and folding
   (Stage 5) — built-pending-merge.** Reader and export are bound to the exact
   saved source and cell boundaries. Reader opens saved settings without a
   published run and opens retained outputs it cannot preview. Sweeps take any
   parameter, and agents can stop a sweep. Remaining: qualify on Windows and
   Linux.
3. **Result packages and verification (Stages 4, 9) — built-pending-merge.**
   Packages keep the original input digests apart from the export copies, and
   the verdict says when outputs matched but the original inputs are
   unconfirmed. Remaining: qualify cancellation of long verification runs on
   Windows and Linux.
4. **Profiles and saved views (Stage 6) — built-pending-merge.** Paging, copy,
   profile and export are pinned to one view revision, and export follows the
   grid's filters for people and agents. Remaining: volatile SQL expressions
   can still change between evaluations.
5. **Python notebook environment recovery (Stage 4) — open.** Start with
   [Use once, lockfile restore, and agent parity](#first-milestone-python-notebook-environment-recovery).
   Extend the same selection and recovery contract to other Compute entry
   points after this workflow passes.
6. **Quarto publishing (Stages 5, 7) — open.** Render a saved `.qmd` through an
   installed Quarto runtime. Preserve the build log and last good output, and
   link the build to the analysis result it used. Follow with R Markdown.

Qualify packaged workflows on Windows and Linux, including native filesystem
observation, file pickers, paths, runtime selection, cancellation, and reopen.
Keep broader widgets, automatic kernel
reactivity, deeper debugging and profiling, scheduler reconnect and recovery,
and domain packs as follow-on work.

**Acceptance fixture.** Use a synthetic prediction dataset with known threshold
counts. Publish metrics, a confusion matrix, and a figure from equivalent script
and notebook runs. Compare thresholds, change a declared input, and interrupt a
rerun. Confirm the prior result survives reopen and Reader switches among saved
settings without a kernel. Export a selected revision and verify it in a clean
environment with the original inputs. Verify that substituting changed data
cannot produce an unqualified verification verdict.

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

Current disposition: the safety-critical workspace text lifecycle is
implemented. The remaining work is broader session identity, relocation,
recovery drafts, encoding/line-ending depth, and future editor capabilities;
do not replace the current editor without a failing requirement and migration
proof.

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

Current disposition: direct file opening has a typed presentation union, but
workspace preview and other entry points still dispatch separately. The
[file foundation](file-resource-and-presentation-foundation.md) owns the
convergence into one registry and shell.

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

LaTeX `DocumentBuild`, isolated `AnalysisRun`, and stateful `ComputeSession`
use specialized lifecycles. Extend the event, cancellation, diagnostic,
process, and artifact seams where the implementations share them.

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

- `AnalysisRuntimeAdapter` supports isolated run file/selection/task actions,
  short-lived processes, environment and package/toolbox identity, tests, and
  runtime diagnostics;
- `ComputeLanguageAdapter` and `ComputeSession` support persistent state,
  run-cell/run-selection semantics, variables, retained rich output, interrupt,
  and session recovery without pretending to be an `AnalysisRun`;
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

Current disposition: the generated-document and MATLAB analysis-artifact
families are implemented first consumers. The Scientific Artifact Studio owns
future inspection/composition UX; this roadmap owns computational producers,
runs, environments, and staleness evidence.

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

#### Runtime Selection And Dependency Recovery

**Observed gap.** In the Document Lab dev app on 2026-11-23, a fixture's Python
run used Homebrew Python 3.14.6 and raised `ModuleNotFoundError` for `pypdf`.
The Document Lab runtime had a separate Python 3.14.7 that imported all five
third-party modules the fixture imports. Its private environment was outside
Compute's normal discovery locations. The recovery UI recognized `pypdf` and
could only suggest an already verified Compute-managed Python or open Settings.
The fixture also expects a tools directory as a positional argument. Runtime
recovery and supplying the arguments are independent parts of this run.
[Desktop discovery](https://github.com/ScientFactory/scient-desktop/blob/449442682a75a85102d762a4cb0601bbd61ba9a1/apps/server/src/scient/compute/RuntimeDiscovery.ts)
· [Dependency recovery](https://github.com/ScientFactory/scient-desktop/blob/449442682a75a85102d762a4cb0601bbd61ba9a1/apps/web/src/scient/compute/computeDependencyRecovery.ts)

**Researcher outcome.** Start in the intended project environment, see what
actually ran, and recover a failed run from the file. A collaborator or agent
should be able to inspect the same choice and the evidence for it. A Python
environment includes the interpreter, its package search paths, and any
manager-specific launch context. Two environments can share the same base
interpreter and still produce different results.
[Python virtual environments](https://docs.python.org/3/library/venv.html)

| Approach | Evaluation |
|---|---|
| Scan the computer for every virtual environment or package | Finds some stray environments. Scan cost, inaccessible locations, duplicate caches and missing project intent make results unreliable. |
| Require an interpreter path | Precise and broadly compatible. Keep it as an escape hatch and preserve the selected environment if its path stops working. |
| Auto-select an environment by inspecting imports | Useful evidence for suggestions. Dynamic imports, project modules, editable installs, native dependencies and version constraints make this an unreliable execution default. |
| Run a package manager by default | A manager can create a locked environment when asked. For example, ordinary `uv run` may synchronize the environment. Launching a file and preparing its environment need distinct actions. [uv run behavior](https://docs.astral.sh/uv/concepts/projects/run/) |
| Resolve project intent, discover within supported scopes, and support registration | Recommended. It preserves the existing fast path and gives a supported route for environments anywhere on the execution host, including feature-owned environments. Use dependency evidence to offer recovery choices. |

**Proposed design.**

1. **One host-owned resolver for every Compute entry point.** Extend Desktop's
   existing discovery, selection and verification, using the execution host
   and authorized project as context. Keep environment identity separate from
   the executable. A candidate has a logical identity, origin, scope, owner,
   launch details and a resolved generation or fingerprint. Preserve a
   Python virtual environment's launcher path and prefix even when the
   executable points at the same base Python as another environment. For
   owner-managed runtimes, resolve a stable name to the active verified
   generation and pin that generation for the session. Document Lab can
   publish such a candidate when its environment is intended for Compute use.
   Its private tools and credentials remain subject to their existing access
   rules.
   [Desktop runtime contract](https://github.com/ScientFactory/scient-desktop/blob/449442682a75a85102d762a4cb0601bbd61ba9a1/packages/scient-compute/src/contract.ts)
2. **Discover using project and manager conventions.** Cover standalone and
   system Python, named and arbitrary-path virtual environments, existing uv
   and Poetry or Pipenv environments, Conda/Mamba and Pixi, version-manager
   installs, Scient-managed Python, registered feature environments, and
   supported Jupyter kernel specifications. Extend manager coverage with
   bounded inventory or project lookup on demand. Any environment with a
   supported launch route can be added explicitly even when no manager
   advertises it. On file open, show cached candidates and passive discovery.
   Verify on demand with bounded, cancellable probes on the host. Resolve the
   environment through its manager where activation affects native libraries
   or environment variables. Use the normal execution permissions for any
   launcher, hook or probe that runs code. A declaration or lockfile describes
   intent. The live environment needs a separate check.
   [uv project environments](https://docs.astral.sh/uv/concepts/projects/layout/)
   · [Conda environment inventory](https://docs.conda.io/projects/conda/en/stable/commands/env/list.html)
   · [Jupyter kernel specifications](https://jupyter-client.readthedocs.io/en/stable/kernels.html)
3. **Select by explicit intent.** Honor a runtime chosen for this run, then a
   saved project binding, a clear project environment, and the current
   platform's automatic fallback. Surface an unavailable explicit or project
   choice with a repair or rebind action. An environment explicitly declared by
   the project can require setup before it can run. Show each ambiguous
   alternative with its origin and the reason it qualifies. Do not replace the runtime
   of a running session. A switch creates a new session, with the previous
   run and outputs still available. Keep host-local paths in the host binding.
   Share portable recipe and environment evidence when a project moves.
4. **Recover from the file.** Show the selected environment and why it was
   chosen. For a missing dependency, check eligible existing environments
   using declared requirements and bounded package metadata where available.
   A distribution name can differ from the import name. Distinguish declared,
   installed, loadability verified, and unknown. User code, optional imports,
   ambiguous namespace packages and native loading errors deserve their own
   evidence. Recheck a proposed choice before starting it. In the run error,
   show the failed environment and where a verified alternative was found.
   Offer **Use once** and **Use for this project** alongside a separate
   **Rerun** action. A combined switch and rerun is appropriate when the
   researcher asks for both. The failed run may already have produced side
   effects. If a usable environment is absent, offer **Restore project
   environment** for a declared recipe or **Download** for a matching
   Scient-managed runtime or toolkit. Offer a dependency addition to a
   project-owned environment through its manager when that is the intended
   repair. Show the target, planned manifest or lockfile changes, progress,
   cancellation and the result of verification. Keep provisioning with its
   owner and leave shared or system installations intact by default.
   [Python package metadata](https://docs.python.org/3/library/importlib.metadata.html)
   · [Python inline script metadata](https://packaging.python.org/en/latest/specifications/inline-script-metadata/)
   · [Scientific Python Environment Roadmap](scientific-python-environment-roadmap.md#f-reproducibility-and-environment)
5. **Keep run setup and evidence together.** File runs should be able to keep
   a project-relative working directory and a structured argument list,
   without shell interpolation. Sessions, fresh runs and verification should
   record the environment actually launched, its host, language version,
   generation or fingerprint, and available manifest or lockfile evidence.
   Record source, declared inputs, parameters and arguments where appropriate.
   Redact secrets and omit machine-local paths from portable evidence. Use
   the same selection and diagnostics for people and agents, and make drift
   and incomplete evidence visible in history and handoff.

**Give agents the same recovery actions.** Compute tools can list runtimes,
set up managed Python and toolkits, and run in a session or with the project
default. Direct selection of a discovered environment for a fresh notebook
run and project runtime binding remain open.
[Agent Compute tools](https://github.com/ScientFactory/scient-desktop/blob/dd117a18603931ff0ecc9be279f99bf301587da1/apps/server/src/mcp/toolkits/compute/tools.ts)
· [Managed setup handler](https://github.com/ScientFactory/scient-desktop/blob/dd117a18603931ff0ecc9be279f99bf301587da1/apps/server/src/mcp/toolkits/compute/handlers.ts)

Expose the same host-owned resolver and operations to the UI and the agent:

- Inspect the project's effective environment and why it was selected. Return
  stable candidate IDs, scope, readiness, and structured dependency evidence
  from inventory, verification and run diagnostics. An agent can ask whether
  an existing candidate meets a requirement and get the same answer as the UI.
- Select an environment for a new run or session. Allow an explicit project
  default change and surface it in Settings. Switching a live user session
  requires authorization to end it and clear its variables. Otherwise, a new
  session leaves it available. Run receipts show which choice the agent used.
- Register an existing environment and manage installation, restore, updates,
  repair and removal where the environment owner and the user's permissions
  allow it. Use the existing operation authorization for each action. Keep
  one-run selection, project preference changes, and host-wide management
  distinct so a request to fix one script stays within that scope.
- Return a durable operation handle with status, progress and cancellation for
  long-running setup. Recheck the requested environment and dependency when it
  settles. Rerun when asked and report whether the original failure is fixed.
  The researcher can inspect the operation and take over through the UI.

Extend the existing Compute tools where the action fits. Keep dependency
recovery available through the first failure response and the ordinary
file-run workflow, including for agents with a small tool budget. A successful
repair should use supported Compute operations end to end, with its provenance
visible alongside a manual run.

**Apply the contract across languages.** Each adapter describes its own
environment. R combines an R executable, library paths and a project such as
`renv`, with restore explicit. Julia combines an executable with the active
project, manifest and depot context. DuckDB needs its engine version,
extensions and connection or database context. MATLAB needs the chosen
installation, project or toolbox availability, and a license and connection
check at the appropriate step. An installed Jupyter kernelspec describes a
launch command and environment. Verify what it actually starts. Remote hosts
resolve and verify their own candidates. This gives Settings, file runs, the
Console, notebooks and agent tools one model for environment choice, setup,
failure, and the receipt.
[renv project environments](https://rstudio.github.io/renv/articles/renv.html)
· [Julia Pkg environments](https://pkgdocs.julialang.org/v1/environments/)

#### First Milestone: Python Notebook Environment Recovery

A researcher should be able to recover from the first failed import in a
fresh notebook run, see which Python produced the next result, and still
open the previous result. Start with one saved Python `.ipynb` project on
Desktop. The fresh-run path exercises a new session and already records
runtime evidence when it publishes a result.

**Build order**

1. **Use an existing environment.** Start with the server path in
   `notebookRuns.ts`. Carry the first failed cell ID, a reference to its
   execution, its structured Compute diagnostic, and the runtime actually
   used into the fresh-run outcome. Use live run evidence for recovery.
   Imported notebook outputs remain readable as saved output. Extend
   `ComputeRuntimeRegistry` and the existing runtime discovery and
   verification to check the project's discovered and explicitly registered
   Python environments. Start from the existing **Add a location** flow
   and project runtime preference. Recheck the chosen candidate on the
   execution host. Distinguish installed metadata from a successful
   import probe, including when native loading fails. Use the existing
   execution permissions for probes. Only claim a lockfile match when
   the evidence supports it. In the failed-run panel, link to the cell and
   offer **Use once** and **Use for this project** when an eligible
   alternative is found. Pass that choice through the fresh-run request
   into a new session. A one-run choice leaves the project default in place.
   Keep **Run fresh** explicit after selection. Use the existing history and
   result records for the failed and successful attempts.
2. **Restore one declared environment.** Support a single project with
   `pyproject.toml` and `uv.lock` at its root and compatible `uv` and Python
   already on the execution host. Offer **Prepare environment** when the
   declared environment is absent or needs repair. Show the project,
   execution host, target environment and lockfile before setup. Use
   `uv sync --locked` with the selected interpreter, automatic Python
   downloads disabled, and an explicitly controlled, project-specific
   destination owned by Scient. Prepare a fresh environment at its final
   path and make it available only after verification. Keep an existing
   working environment and its live sessions available throughout. Recheck
   the manifest and lockfile identities before making the new environment
   selectable. Serialize preparation for the same project, report
   progress, and support cancellation and retry. If the lock is stale
   or setup fails, show the reason and retain the previous result.
   Record the runtime and the lockfile digest used for the next fresh run.
   [uv locking and syncing](https://docs.astral.sh/uv/concepts/projects/sync/)
   · [uv environment path](https://docs.astral.sh/uv/concepts/projects/config/#project-environment-path)
3. **Give agents the same recovery path.** Extend the existing Compute
   tools to return the failure, eligible environment choices and evidence,
   accept a one-run choice or project binding, and request the same
   permission-checked prepare operation. Reuse the server operation ID and
   status for progress and cancellation. Agents rerun through the same
   notebook entry point and history records as researchers. Keep the
   operation contracts shared from step 1. The notebook UI and fixture
   work can proceed in parallel once the diagnostic and selection shapes
   are agreed.

**Acceptance fixture**

Use a synthetic notebook with a saved result, an early `pypdf` import and a
later cell that writes a deterministic output. Run it against two virtual
environments that share a base Python. The first lacks `pypdf`. Register
the second outside the project and verify the import there.

- The first run identifies the failing cell and the Python it used. Later
  cells are skipped and the previous result stays available. After
  **Use once** and **Run fresh**, the run succeeds in a new session, records
  the environment in history and leaves the project preference intact.
  A saved project choice survives reopening. If it disappears, the next
  run reports that choice as unavailable and offers a way to recover.
- Remove the eligible alternative, restore from the fixture's lockfile
  and explicitly rerun with the prepared environment. Verify the locked
  version and lockfile digest used, and confirm that both declaration files
  retain their original bytes. Concurrent requests share one preparation.
  Test a stale lock, a cancelled restore and an offline cache miss. Each
  attempt leaves the last successful result accessible and any incomplete
  environment unavailable for selection.
- Opening Reader view, expanding code and browsing saved results starts
  no installer or kernel. An unknown import offers diagnosis or an
  environment choice without a guessed package download. A denied agent
  preparation leaves the environment unchanged. With authorization, an
  agent can prepare and rerun the same fixture with its own attributed run
  record. A project choice saved by the agent is used by the next manual run.

**Qualification.** Exercise resolution and preparation on the server, test
selection and retry in the notebook UI, and run the complete fixture in a
local macOS dev app. Qualify other hosts before enabling restore on them.

**Follow-on work.** Apply the same recovery contract to interactive cells and
scripts, then Console and independent verification. Add an explicit,
reviewable dependency addition to a project-owned environment when the
dependency is genuinely undeclared. Use Document Lab to prove registered
generations and structured arguments. Wider manager discovery, remote-host
restore and drift, and additional languages follow their own fixtures.

### 9. Document Authority, Projection, Collaboration, And Publication Contract

The [Scientific Document Platform Roadmap](scientific-document-platform-roadmap.md)
owns the [platform model](scientific-document-platform-roadmap.md#proposed-platform-model)
and [authority modes](scientific-document-platform-roadmap.md#authority-modes).
Compute should preserve Scient's shared boundaries:

- Keep canonical file-native projects and structured-native manuscripts
  identifiable across edits and exports. Authority changes require an explicit
  conversion with a fidelity report and access to the original.
- Give linked results and build receipts stable revision and artifact
  identities so source maps, comments, review anchors, history, and restored
  versions can still locate them after a move or edit.
- Share attributed operations and permission checks across manual and agent
  work. Version large assets independently from manuscript text and preserve
  recoverable history across offline work and collaboration.
- Keep build, editing, review, history, and publishing contracts independently
  replaceable. Publication adapters should retain links to results and the
  evidence supporting them.

## Source Strategy: What To Reuse, Adapt, Or Only Study

“Steal” should mean licensed, selective adaptation with attribution and a clear
upgrade boundary. The sources below have different roles; none should silently
become Scient's product model.

| Source | Proposed relationship | Reuse or adapt | Do not take |
|---|---|---|---|
| [T3](https://github.com/pingdotgg/t3code) (MIT) | Current upstream lineage plus UX and implementation reference | Preserve inherited editable file review, source/rendered modes, line comments, pending state, save coordination, and tests through narrow Scient seams. | Do not let the file panel or editor define scientific authority, relocation, analysis, or document semantics. |
| [CodeMirror 6](https://codemirror.net/) (MIT) | Replacement challenger when a concrete unmet requirement exists | Modular editor, language packages, search, lint, merge, collaboration primitives, and its LSP ecosystem. | Do not migrate from the working editor without fixture evidence and state/upstream-cost proof; editor state is never canonical project state. |
| [Monaco Editor](https://github.com/microsoft/monaco-editor) (MIT) | Challenger/reference | Use as the capability benchmark for desktop IDE expectations. | Do not assume VS Code extensions work in Monaco; the official project says they do not. Its web workers, bundle weight, and lack of mobile-browser support make it a weaker default for Scient. |
| Existing `@pierre/diffs/editor` | Current editor, diff, and review substrate | Preserve its working interaction seam behind Scient-owned revisions, conditional saves, conflicts, truncation, and freshness. | Do not make it irreplaceable or allow library state to become document authority. |
| [Tiptap/ProseMirror](https://github.com/ueberdosis/tiptap), [Plate](https://github.com/udecode/plate), and [Lexical](https://github.com/facebook/lexical) | Scientific rich-editor projection candidates and UX sources | Prototype the same long manuscript with stable semantic nodes, citations/evidence, equations, figures/tables, comments, suggestions, accessibility, performance, collaboration, and import/export. | Do not let an editor's JSON/operation format become manuscript truth or select a winner before the common fixture passes. |
| [Zotero](https://github.com/zotero/zotero), [JabRef](https://github.com/JabRef/jabref), and [CSL](https://citationstyles.org/) | Required citation/reference compatibility and selected component candidates | Adapt import/export, structured references, citation keys, styles, locators, refresh, metadata repair, group-library expectations, and citation round trips. | Do not rebuild or fork a full reference manager first, copy copyleft code without review, or reduce evidence-linked citations to bibliography strings. |
| [Zettlr](https://github.com/Zettlr/Zettlr) | Local academic-writing and submission-workflow reference | Study file-oriented writing, citations, math/Mermaid, Pandoc profiles, templates, and journal/conference export while preserving external-editor continuity. | Do not make Markdown the only authoring model or inherit a whole desktop application. |
| [LaTeX Workshop](https://github.com/James-Yu/LaTeX-Workshop) (MIT) | Strongest bounded LaTeX workflow reference | Study its documented root discovery, recipes/toolchains, cancellation, dependency tracking, output/auxiliary directories, PDF refresh, and SyncTeX behavior; adapt algorithms and UX behind Scient contracts with attribution where code is reused. | Do not embed a VS Code extension or inherit VS Code's workspace, settings, and process model. |
| [Tectonic](https://tectonic-typesetting.github.io/) | Alternative managed-engine candidate | Compare reproducible bundles, automatic multi-pass behavior, Unicode/OpenType support, and cross-platform packaging with current TinyTeX and installed-TeX paths. | Do not add a second managed engine without material fixture-proven value and licensing/distribution review. |
| [TexLab](https://github.com/latex-lsp/texlab) (GPL-3.0) | External LaTeX language-server candidate already used by `scient-agent` | Reuse the standard LSP boundary for cross-file diagnostics, completion, navigation, symbols, and forward-search capabilities after desktop lifecycle and redistribution review. | Do not copy GPL implementation into Scient or make a TeX distribution/compiler a prerequisite for opening and editing source. |
| [Overleaf product/docs](https://docs.overleaf.com/) and [Community Edition](https://github.com/overleaf/overleaf) (AGPL-3.0 repository) | Comprehensive capability baseline, systems reference, compatibility target, and possible future integration subject to a separate decision | Track the full hosted workflow—code/visual editing, project/files, compilation, diagnostics, comments, tracked changes, history, collaboration, templates, citations, Git/GitHub, submission, AI assistance, groups, SSO, managed users, metrics, and offboarding—and study the repository's separation of editor/update/storage, real-time, history, compilation, Git, chat, notifications, and web concerns. | Do not assume Community Edition contains every hosted/professional feature, make its service topology Scient's architecture, or copy/link AGPL components without explicit license/product/operations acceptance. A future isolated integration, maintained fork, or self-hosted path is not permanently prohibited, but it requires its own source-depth review and ADR. |
| [Typst](https://github.com/typst/typst) (Apache-2.0) | First-class future typesetting adapter | Preserve `.typ` as editable portable source and evaluate its incremental compiler, diagnostics, bibliography, PDF output, and watch behavior through the same document-build contract. | Do not design the contract around TeX-only pass mechanics or make Typst a hidden conversion layer for LaTeX projects. |
| [MyST](https://github.com/jupyter-book/mystmd) and [Stencila](https://github.com/stencila/stencila) | Scientific publishing challenger and semantic-document/provenance references | Compare citations, cross-references, executable/notebook publishing, JATS, TeX/Typst paths, semantic nodes, executable steps, and agent provenance against Scient-owned document contracts. | Do not make source Markdown, either project's schema, or an executable-document runtime the canonical Scient model without a focused decision. |
| [Yjs/Hocuspocus](https://github.com/yjs/yjs), [Automerge](https://github.com/automerge/automerge), and [ShareDB](https://github.com/share/sharedb) | Bounded collaboration-engine prototype set | Test real-time editing, awareness, offline changes, attribution, reconnect, schema migration, persistence, export, and recovery through one collaboration harness. | Do not use CRDT/OT state as project authorization, accepted scientific state, or the only history; do not put large assets inside a text collaboration document. |
| Word and Google Docs | Manuscript exchange and review-quality compatibility baseline | Match understandable comments, suggestions/track changes, roles, presence, version restoration, and `.docx` import/export expectations through Scient-owned semantics. | Do not make Scient generic office software or rely on closed implementation details. |
| [OSF](https://github.com/CenterForOpenScience/osf.io), [Dataverse](https://github.com/IQSS/dataverse), and [OpenReview](https://github.com/openreview/openreview) | Sharing, deposit, review, role, and publication reference/adapter set | Study project/repository handoff, draft-review-publish, persistent identifiers/citations, external collaborators, assignments, decisions, and immutable releases. | Do not make a repository or conference-review system the working manuscript truth or copy its domain hierarchy wholesale. |
| [JupyterLab](https://github.com/jupyterlab/jupyterlab), [services](https://jupyterlab.readthedocs.io/en/stable/api/modules/services.html), and [rendermime](https://jupyterlab.readthedocs.io/en/stable/api/modules/rendermime.html) (BSD-3-Clause project) | Registry/context/`Open With` reference plus selected protocol/rendering candidates | Adapt document registry, model/context, factory, kernel/server, MIME, and explicit `Open With` patterns where dependency review supports it. | Do not embed or fork the full application or duplicate Scient's shell, project model, file explorer, and chat. |
| [marimo](https://github.com/marimo-team/marimo) (Apache-2.0) | Adapter and reproducibility reference | Pure-Python notebook storage, reactive dependency/staleness ideas, disabled expensive cells, SQL/dataframe UX, optional external “Open in marimo.” | Do not make a Python-specific reactive model Scient's cross-language canonical notebook format. |
| [RStudio](https://github.com/rstudio/rstudio) (AGPL-3.0) | UX reference | Source/console/environment/history/plots/help layout and R researcher workflows. | Do not fork or embed the IDE. Keep license and architecture boundaries explicit. |
| [Positron](https://github.com/posit-dev/positron) (Elastic License 2.0) | Source-available UX reference only | Study data explorer, variables, plots, sessions, and multi-language data-science ergonomics. | Do not copy/fork product code as though it were ordinary permissive open source. |
| [R `languageserver`](https://github.com/REditorSupport/languageserver) | R LSP adapter | Diagnostics, completion, hover, definition, references, symbols, formatting, and related standard LSP features. | Do not require it for basic editing or execution; degrade gracefully when absent. |
| [IRkernel](https://github.com/IRkernel/IRkernel) | Initial R notebook adapter | Standard Jupyter kernelspec compatibility. | Do not make Jupyter the only way to run R scripts. |
| [renv](https://github.com/rstudio/renv) | R environment adapter/reference | Detect lockfile/project library and preserve environment receipts. | Do not mutate or restore environments silently. |
| [Ark](https://github.com/posit-dev/ark) (MIT) | Supported R kernel | Use the existing kernel integration. Evaluate language-server and debugging features separately. | Keep the integration usable independently of Positron. |
| [MATLAB extension for VS Code](https://github.com/mathworks/MATLAB-extension-for-vscode) (MIT) | Official architecture/UX reference | Installation discovery, run/debug/workspace behavior, project handling, and compatibility expectations. | A VS Code extension is not directly embeddable in Scient; do not pretend it installs MATLAB or grants a license. |
| [MATLAB MCP Core Server](https://github.com/matlab/matlab-mcp-core-server) | Official agent adapter candidate | First-party MCP setup for agent-assisted MATLAB actions, session attach/start, and official extensibility after license/telemetry review. | MCP must not replace the manual editor, Run action, output, or project run record. Do not enable telemetry or mutations without explicit product choices. |
| [MATLAB Integration for Jupyter](https://github.com/mathworks/jupyter-matlab-proxy) | Optional notebook/full-MATLAB continuation | MATLAB kernel access in Jupyter and an external browser-based MATLAB continuation for installed, licensed MATLAB. | Do not embed the full MATLAB desktop/browser UI as Scient's workbench or imply the package installs MATLAB. |
| [DuckDB](https://github.com/duckdb/duckdb) (MIT) | SQL runtime and saved-view engine | Use the Compute SQL path and qualify saved-view reads and materialization. | Preserve source files and portable SQL views. |
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

Scient's editable source surface adds revision-aware saves, conflict handling,
and freshness to the inherited T3 interactions.

- T3 currently uses a `1.3.0-beta` `@pierre/diffs` editor plus a local patch;
- the inspected save path sends full file contents and does not demonstrate the
  expected-revision conflict contract Scient needs;
- it does not provide R, MATLAB, Jupyter, data runtime, artifact, or scientific
  provenance architecture;
- its file panel is designed for an agent coding product, not for long-lived
  research data and analysis state.

Recommendation: preserve the inherited interaction seam and Scient-owned
correctness wrapper. Evaluate CodeMirror or Monaco only against a concrete,
unmet requirement and include migration cost, upstream-conflict risk, input
method, accessibility, long-file, review-comment, and state-preservation tests.

## Ordered Roadmap

The stages below describe dependencies and target coverage. Use the dated
[Desktop baseline](#desktop-baseline-2026-11-23) to check implementation status
and the [recommended sequence](#recommended-next-implementation) to pick up work.

Stages 0–3 retain regression requirements for the landed editing, execution,
and artifact foundations. Stages 4–10 describe target coverage.

## Stage 0 — Landed In Part: Make File Truth Accurate

These requirements remain the regression and consolidation envelope. Correct
MATLAB `.m` source classification and several known scientific source types are
already implemented; unified unsupported states and entry-point routing remain
owned by the file foundation.

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

## Stage 1 — Landed Foundation: First-Class Manual Source Editing

The safety-critical core of this slice is current implementation. The
requirements below remain its regression and extension envelope; the editor
dependency proof is reopened only for a concrete unmet capability.

### Required behavior

- edit project-owned text files in the central workspace;
- create a new text/source file from the explorer;
- open multiple files with stable tab identity or, if tabs are deferred, retain
  unsaved state when navigating and make the limitation explicit;
- undo/redo, indentation, bracket behavior, line numbers, wrapping, find,
  replace, goto line, keyboard navigation, and accessible selection;
- syntax support for Python, R, MATLAB, Markdown, Quarto, LaTeX, YAML, JSON,
  shell, SQL, and the app's existing general languages, using the current
  editor seam where it meets the fixture contract and a tested replacement only
  where a concrete requirement proves it cannot;
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

### Editor capability and replacement gate

Keep one bounded fixture suite for the current editor seam. Test `.py`, `.R`,
`.m`, `.qmd`, `.tex`, `.bib`, and `.typ` plus:

- a large file and a pathological long line;
- RTL/bidirectional text inside comments and strings;
- macOS/Windows/Linux keyboard behavior;
- IME composition;
- line comments and exact agent selections;
- source/rendered switching;
- LSP diagnostics and completion transport;
- file conflict/reload without lost edits;
- theme, accessibility, memory, and bundle behavior.

Do not schedule a replacement while the current editor passes. If it fails a
necessary capability that cannot be repaired cleanly, compare CodeMirror 6 and
Monaco against the same suite, including migration and upstream-conflict cost,
and select only the smallest candidate that closes the proven gap.

Exit gate: a researcher can manually open, edit, save, diff, recover, and ask an
agent about the same `.py`, `.R`, `.m`, `.qmd`, or `.tex` file without silent
data loss.

## Stage 2 — Shared Execution And Specialized Adapters

Compute, isolated analysis, and document builds already establish their
respective execution lifecycles. Use a cross-domain contract fixture to
qualify common process, event, diagnostics, cancellation, and artifact
mechanics with specialized receipts.

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

### Adapter compatibility

Preserve `ComputeSession` for stateful kernels, `AnalysisRun` for isolated work,
and `DocumentBuild` for builds. Compare Python, R, and MATLAB using the same
run, stop, diagnostic, source receipt, and recovery fixtures. Surface runtime
capabilities and setup states through the shared UI.

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

Desktop main already uses IRkernel and Ark. Extend that runtime path where a
research workflow needs it, starting with environment evidence for handoff.

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
- evaluate Ark's additional language-server and debugging capabilities separately
  from its existing kernel role.

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

### Notebook compatibility targets

Desktop main already opens, edits, and runs `.ipynb` files and saves cell
outputs. The checklist describes compatibility targets. See the
[PR #1082 candidate](#pr-1082-candidate-2026-11-24) for the next implementation
baseline.

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

### Notebook Cell Output And Recovery

Qualify inline output, the first-failure summary, and setup replay with an
offline notebook that fails in a setup cell, skips later cells, and renders an
animation after repair. Check that replay through the selected cell recovers
the expected output. Also exercise an imported notebook with a locked
environment, native libraries, and an external data failure. Use the same
execution and [environment recovery](#runtime-selection-and-dependency-recovery)
rules for researchers and agents.

### Notebook Parameters And Interactive Reader View

Keep tagged parameters and saved outputs portable in Jupyter. Show effective
settings separately from pending edits and make code and results keyboard
accessible. Browsing precomputed settings starts no kernel. A new setting
requires an explicit run, with the resulting revision linked to the settings
it used. Portable Reader exports and broader live widgets remain follow-on work.
[Papermill parameters](https://papermill.readthedocs.io/en/latest/usage-parameterize.html)
· [Desmos interactive notebooks](https://help.desmos.com/hc/en-us/articles/48321123450765-Build-Interactive-Notebooks)

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

Build on the existing CSV, TSV, Parquet, and workbook grid. Qualify
[profiles and reusable dataset inputs](#recommended-next-implementation), then
add typed adapters for JSON/JSONL, NumPy, R, MATLAB, HDF5, and domain formats as
research workflows require them.

Evaluate Arrow for interchange and Perspective for grid/chart work when the
current viewer has a measured gap. For larger datasets, measure:

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

Extend the Variables view using the available adapter capabilities:

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
The [Scientific Artifact Studio](scientific-artifact-studio.md) owns the
proposed inspection and composition experience above these producer outputs;
this stage owns capture, run/data provenance, and computational regeneration.

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

Scient-managed SSH environments already run Compute on the selected host.
Extend remote execution through the same result records once the local handoff
has been verified.

- attach to existing Jupyter servers;
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
owns build UX, root and engine choices, manuscript growth, and the Overleaf
adaptation decision. Its
[Staged implementation](scientific-document-platform-roadmap.md#ordered-implementation-roadmap)
and
[quality fixtures](scientific-document-platform-roadmap.md#quality-and-fixture-plan)
govern that work. The
[source map](../research/source-evaluations/scientific-document-platform-source-map.md)
owns donor pins and dispositions.

Compute shares file resolution, lifecycle mechanics, diagnostics, and artifact
viewers with the landed LaTeX source/build/log/PDF/SyncTeX loop. Keep source
available during setup failures. Resolve bounded project context, preserve the
last successful output, and anchor diagnostics and assets to their revisions.

A `DocumentBuild` receipt owns the root, dependency and toolchain evidence,
build passes, log, diagnostics, and output. Link executable documents to the
`AnalysisRun` or result revision they used. Preserve source and artifact
identity as engines, editor projections, and publication adapters evolve.

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

Approve focused planning for one Compute workbench on the shared file and
artifact foundations. Keep manual editing, stateful kernels, isolated runs,
and document builds interoperable through shared mechanics and specialized
records. Extend the existing language adapters, notebook surface, and dataset
grid through the [recommended work](#recommended-next-implementation) and
platform fixtures. Keep publication composition with the Scientific Artifact
Studio and manuscript growth with the Scientific Document Platform. Add
domain packs after the generic workbench handles ordinary analysis reliably.

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
