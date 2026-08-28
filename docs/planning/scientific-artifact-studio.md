# Scientific Artifact Studio

Status: Proposed
Owner: Yaacov
Created: 2026-08-14
Last updated: 2026-08-28
Purpose: Proposes the product boundary, durable object model, experience, source strategy, capability envelope, quality gates, and staged growth path for Scient's scientific artifact inspection, composition, revision, and export workspace.
Doc type: Planning note

## Document Rules

This document owns the proposed direction for the **Scientific Artifact
Studio**: the product area in which researchers and agents inspect, compose,
revise, compare, explain, and publish figures, tables, diagrams, interactive
visuals, and related scientific artifacts.

It coordinates with, but does not replace:

- the accepted [Product Requirements Document](../product/PRD.md);
- the [Scientific Computing And Data Analysis
  Roadmap](scientific-computing-and-data-analysis-roadmap.md), which owns
  runtimes, analysis runs, datasets, computational provenance, and generated
  outputs;
- the [File, Resource, And Presentation
  Foundation](file-resource-and-presentation-foundation.md), which owns file
  identity, relocation, presenter selection, common viewer states, and broad
  read-only coverage;
- the [Scientific Document Platform
  Roadmap](scientific-document-platform-roadmap.md), which owns universal
  opening, source and visual document authoring, LaTeX/typesetting, Office
  compatibility, manuscripts, review, collaboration, and publishing;
- the [Open-Source Adaptation
  Map](../research/source-evaluations/open-source-adaptation-map.md), which owns
  detailed donor and dependency evidence; and
- future accepted architecture decisions and implementation plans.

This proposal does **not** select a canvas engine, approve a dependency, define
an exact persisted schema, authorize a broad T3 divergence, or claim that the
described Studio exists today. Those decisions require their own evidence and
approval.

### Update Policy

Update this document when the Studio product boundary, authority modes,
artifact/representation model, first durable slice, engine evaluation,
integration ownership, or capability sequence materially changes. Record
exact dependency pins, licenses, and source-depth findings in the adaptation
map or a focused source evaluation rather than duplicating volatile evidence
here.

## Decision Summary

Scient should build one **Scientific Artifact Studio**, not a collection of
unrelated figure editors, chart widgets, HTML previews, TSX canvases, image
tools, and export buttons.

The Studio should be a durable product area with three connected concepts:

- **Artifact Inspector** — opens an artifact to its most useful available
  representation and exposes source, provenance, status, revisions, uses, and
  export options;
- **Figure Studio** — the first complete authoring surface, focused on
  publication-ready figures and mixed multi-panel compositions; and
- **Scientific Canvas** — the finite, precise spatial composition surface used
  by Figure Studio and later by diagrams, visual explanations, presentation
  figures, and other structured visual artifacts.

The underlying foundation must not be TSX-specific or canvas-library-specific.
A scientific artifact can have several faithful representations—interactive,
declarative, vector, raster, native, document, data, thumbnail, and accessible
text—without pretending that one format is universally canonical. The Studio
must know which representation is authoritative, which are derived, what can
be edited directly, how the artifact was produced, and what becomes stale when
its source changes.

The first durable product slice should be **Figure Studio And Scientific
Composition Foundation**. It should let a researcher:

1. open an existing figure artifact from a run, file, chat, project view, or
   manuscript reference;
2. inspect its current/stale/failed-latest state, source run, code, inputs,
   parameters, available representations, and prior revisions;
3. place one or more figures on a finite publication artboard;
4. resize, align, crop, label, group, and annotate panels;
5. set captions, alternative text, physical dimensions, and export intent;
6. apply the same typed operations manually or through an agent;
7. preserve direct edits separately from regenerated source output;
8. close and reopen without losing the exact working state; and
9. export a self-contained SVG and high-resolution PNG with a truthful receipt.

PDF export should compose with the current generated-document/PDF foundation
and a future qualified controlled-composition renderer instead of creating a
second PDF system. Browser live-page export is implemented but is not by itself
the Studio composition exporter. Manuscript and Office surfaces should
reference Studio artifacts by stable identity rather than copying anonymous
pixels into each document.

Approve this document as a product and planning direction only. Do not yet
approve an engine, package layout, persisted schema, collaboration model, or
complete implementation sequence.

## Why This Product Area Exists

Scientists do not merely generate images. They move repeatedly between data,
code, runtime output, visual interpretation, annotation, multi-panel layout,
captions, manuscript use, peer review, and publication export.

Today those steps are often split across Python or R scripts, MATLAB, notebooks,
PowerPoint, Illustrator, Inkscape, BioRender, Office documents, image-analysis
software, and chat. The split causes recurring failures:

- a figure is detached from the run and data that produced it;
- manual polish cannot be reproduced or distinguished from generated content;
- an agent can rewrite code but cannot reliably target the visual object the
  researcher is discussing;
- a manuscript contains an old image after the analysis changed;
- interactive output is flattened too early;
- a vector original is lost behind a screenshot;
- captions, panel labels, alternative text, dimensions, and export settings
  drift across copies; and
- the final publication file cannot explain what was preserved, rasterized,
  substituted, or lost.

The accepted PRD already requires generated and editable tables, figures,
charts, diagrams, visual plans, captions, artifact review, manuscript usage,
export readiness, provenance, staleness, manual correction, and agent-assisted
work. The Studio makes that requirement concrete without turning Scient into
only a figure editor or copying the shape of a general design application.

## Product Vocabulary

Use the following terms consistently:

| Term | Meaning |
|---|---|
| **Scientific Artifact Studio** | The complete product area for artifact inspection, structured visual composition, revision, provenance, agent work, review, and export. |
| **Artifact Inspector** | The surface that opens one artifact and its representations, history, status, provenance, uses, and actions. It may be read-only for some authority modes. |
| **Figure Studio** | The first authoring experience, optimized for scientific figures and multi-panel publication compositions. |
| **Scientific Canvas** | A precise finite artboard and interaction model used inside Studio authoring surfaces. It is not the universal project model and is not automatically an infinite whiteboard. |
| **Artifact** | A stable project object representing a meaningful scientific output or visual work across revisions. |
| **Artifact revision** | An immutable produced or accepted version of an artifact. |
| **Representation** | One concrete form of an artifact revision, such as Plotly JSON, interactive HTML, SVG, PDF, PNG, TIFF, a MATLAB FIG file, or accessible text. |
| **Composition** | A structured arrangement of referenced artifact revisions plus labels, annotations, layout, caption, and export intent. |
| **Producer** | The runtime, adapter, import path, agent operation, or manual Studio operation that created a revision or representation. |
| **Usage** | A stable reference from a manuscript, presentation, report, claim, evidence record, chat context, or other project object to an artifact. |
| **Operation** | A typed, attributable, reversible change to an artifact or composition. Humans and agents use the same operation vocabulary. |
| **Export receipt** | A record of the source revision, chosen representations, transformations, substitutions, rasterization, dimensions, warnings, and resulting file. |

Use **Scientific Canvas**, not **Canva**, for the Scient surface. Canva is a
separate commercial product and is not the intended architecture or product
category.

## Product Boundary And Related Owners

The Studio should integrate with adjacent surfaces through stable identities
and capabilities instead of absorbing their responsibilities.

| Responsibility | Owning area | Studio relationship |
|---|---|---|
| Resolve and open any local/chat/project-linked file | File/resource/presentation foundation | The foundation resolves the resource and chooses the best registered surface. The Studio is one destination, not a second click-to-open system. |
| Read ordinary images, SVG, PDF, HTML, text, and unsupported files | File foundation, shared viewers, and Browser | Reuse the viewer when inspection is sufficient; offer `Edit in Figure Studio` only when a meaningful authoring mode exists. |
| Run Python, R, MATLAB, notebooks, and analysis pipelines | Computing and analysis workbench | The workbench produces run records and artifact representations. The Studio consumes and revises them without hiding execution truth. |
| Compile LaTeX, Typst, Quarto, and other documents | Document platform | Document builds produce artifacts and can reference Studio figures. The Studio does not become a compiler. |
| Author manuscripts and Office-compatible documents | Document platform | Manuscripts and documents reference artifact identity/revision and display a projection. Layout around the figure belongs to the document; editing the figure belongs to the Studio. |
| Browse and run arbitrary interactive HTML or TSX applications | Browser and code/runtime surfaces | The Studio can register the result as an interactive representation and provide visual targeting, but the browser remains the runtime. |
| Persist generated PDFs and read them | Existing generated-document/PDF foundation | Reuse identity, revision, resolution, and reader seams where appropriate. Do not generalize a PDF-only schema into the complete artifact model by adding format branches. |
| Edit microscopy, medical imaging, molecules, maps, or other domain data | Domain adapters | Domain tools preserve their specialized semantics and may project selected views into Studio compositions. |
| Freeform whiteboarding and early visual planning | Later canvas/diagram capability | May reuse interaction primitives, but freeform whiteboard state must not become figure, provenance, workflow, or project truth. |

The Studio is therefore responsible for the continuity between artifact
identity, representations, composition, manual/agent operations, provenance,
review, use, and export. It is not responsible for implementing every source
runtime, file parser, browser engine, manuscript editor, or domain viewer.

### Artifact Family Capability Envelope

`Artifact` is intentionally broader than `Figure`, but Studio authoring depth
should be earned per artifact family. The universal opener may route a resource
through the Artifact Inspector without implying that Figure Studio can edit it.

| Artifact family | Useful Studio role | Owning or continuation surface |
|---|---|---|
| Static and interactive charts | Inspect, compare, annotate, semantically edit supported specs, compose, and export. | Producer code/runtime remains authoritative when code-native. |
| Multi-panel figures and visual abstracts | Full structured-native composition and publication export. | Figure Studio is the primary owner. |
| Scientific images and image plates | Inspect metadata/calibration, non-destructive presentation edits, annotate, compose, and export. | Domain image tools own quantitative processing. |
| Publication tables | Inspect, style, annotate, compose, reference, and later edit structured table semantics. | Data/table workbench owns underlying datasets and transformations. |
| Diagrams, networks, protocols, and evidence maps | Compose structured objects or preserve diagrams-as-code, annotate, and export. | Graph/workflow/domain adapters own specialized structure. |
| Interactive HTML, dashboards, simulations, and TSX apps | Run, inspect, target visual/source context, annotate, capture variants, and export/share. | Browser plus code/runtime surface owns execution and source edits. |
| Audio, video, animation, and time-based scientific output | Inspect, comment on time ranges, preserve metadata/provenance, capture poster/static derivatives, and reference. | Dedicated media players/editors own playback and deep editing. |
| 3D, molecular, medical, microscopy, geospatial, and other domain visuals | Inspect through a specialized interactive representation, capture views, annotate, and compose publication output. | Domain adapter owns scientific semantics and measurements. |
| PDF, HTML report, notebook, and generated document | Inspect, reference exact pages/regions or derived figures, and include in provenance. | Document/browser/notebook surfaces own the complete document. |
| Dataset, model/checkpoint, log, archive, and other nonvisual artifact | Show identity, provenance, status, uses, and the best registered viewer; allow a visual derivative to become a figure. | Data, analysis, terminal/log, archive, or domain surface owns inspection and editing depth. |
| Manuscript, DOCX, PPTX, and other Office-compatible document | Reference, update, or place approved artifact variants. | Document platform owns document editing and package preservation. |
| Unknown or unsupported file | Preserve identity/original, state the limitation, and provide download/reveal/open-externally recovery. | Universal opener and external application continuation. |

This prevents two opposite mistakes: limiting the Studio to ordinary images,
and pretending that every scientific output belongs on one editable canvas.

## Current Implementation Baseline

This section was rechecked against `ScientFactory/scient-desktop`
`origin/main` `aa23f1d3b96f6904dcc1a114cc33415fa267315a` on
2026-08-28. Open pull requests and detached worktrees are intentionally not
treated as mainline truth.

Current foundations worth preserving include:

- the T3-derived desktop host, work tabs/right-panel surfaces, browser tabs,
  project files, chat-linked actions, and preview automation;
- a browser element picker that can return a best-effort selector plus React
  component/source attribution when available, while still working on
  non-React pages;
- Scient's PDF reader and producer-neutral generated-document lifecycle;
- one lazy rich-fence registry that currently presents Mermaid, Vega-Lite, and
  Plotly in chat while preserving source and fallback behavior;
- a MATLAB analysis runtime whose figure artifacts can carry PNG, SVG, HTML,
  PDF, or native FIG representations, while the current default producer
  deliberately publishes bounded PNG and FIG output;
- interactive local HTML viewing plus browser HTML-to-PDF export through the
  generated-document lifecycle;
- stable generated-document authority, logical key, artifact identity,
  immutable revision identity, content hash, producer/operation provenance,
  current/stale/failed-production binding, and retained last-success behavior;
  and
- authorized URL resolution kept outside the PDF reader through a source
  descriptor/resolver seam.

The current generated-document contract is deliberately narrow:

- `GeneratedDocumentArtifact` only accepts `application/pdf`;
- `PdfSourceDescriptor` models workspace, generated, and direct environment
  PDFs without making renewable URLs or thread authorization part of identity;
- the store validates and publishes immutable PDF revisions.

That is a strong PDF/document foundation, not the universal Studio artifact
model. The Studio should reuse or extract genuinely generic identity and
lifecycle primitives only after contract review. It should not turn
`PdfSourceDescriptor` into a growing union of Plotly, SVG, MATLAB, image,
table, HTML, and canvas branches.

The computing and document roadmaps already propose an artifact registry,
staleness graph, shared surface registry, `AnalysisRun`, `DocumentBuild`, and
generic artifact references. This document refines the product contract those
future foundations must serve; it does not claim that the complete registry or
Studio exists today.

Current source evidence:

- [generated-document and PDF source
  contracts](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/packages/scient-document-artifacts/src/contracts.ts);
- [immutable generated-document
  store](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/apps/server/src/scient/documentArtifacts/GeneratedDocumentStore.ts);
- [preview IPC and picked-element
  contract](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/packages/contracts/src/ipc.ts);
- [desktop picked-element payload
  handling](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/apps/desktop/src/preview/PickedElementPayload.ts); and
- [shared rich-fence
  registry](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/apps/web/src/scient/presentation/ScientRichFence.tsx).

## Target Researcher Experience

### Open From Anywhere

The same artifact should open from:

- a chat link or agent result;
- the project explorer;
- an analysis run and its output strip;
- recent or stale artifacts on Project Home;
- a manuscript figure or table reference;
- a presentation or report;
- artifact search/history; and
- an external/local file selected through the universal opener.

Every entry point should resolve the same logical artifact identity when one
exists. Temporary URLs, chat thread IDs, browser tab IDs, or renewable asset
grants are access concerns, not artifact identity.

### Inspect Before Editing

Opening an artifact should immediately show useful content. The Studio should
not require a project-wide scan, source runtime, or successful rebuild before
showing an available representation.

The inspector should expose, in a compact and progressively disclosed form:

- title, kind, current revision, and status;
- best representation and alternatives;
- source file, run, code range, notebook cell, dataset, parameters, and method
  notes when known;
- producer and environment/toolchain receipt;
- created/updated time and revision history;
- current, stale, rebuilding, failed-latest, partial, imported, or unknown
  state;
- caption, alternative text, dimensions, color profile, and export variants;
- manuscript, presentation, claim, evidence, and project usages;
- direct edits and whether they survive regeneration; and
- available actions based on the authority mode and representation
  capabilities.

Missing source, missing runtime, malformed representation, failed latest run,
or unsupported editability must never turn an otherwise available last-success
artifact into a blank panel.

### Compose A Publication Figure

Figure Studio should make the normal scientific job direct:

1. Start from one or more existing artifact revisions.
2. Choose a journal, presentation, free-size, or custom physical artboard.
3. Place panels without flattening them prematurely.
4. Align, distribute, resize, crop, mask, group, and order panels.
5. Add stable panel labels, text, arrows, shapes, regions, legends, scale bars,
   and explanatory overlays.
6. Inspect or adjust supported semantic chart properties where the source
   representation permits it.
7. Add a caption, subcaptions, alternative text, keywords, and notes.
8. Check dimensions, effective raster resolution, font embedding/substitution,
   line weights, contrast, color accessibility, clipping, and missing assets.
9. Compare against the previous accepted revision.
10. Export with a receipt and update linked manuscript usages deliberately.

The Studio should optimize for exact, publication-oriented artboards rather
than begin as an unbounded mood board. Pan and zoom are navigation; physical
size and deterministic export are product truth.

### Point At The Visual And Ask An Agent

Researchers should be able to select a panel, object, axis, annotation,
legend, region, or visual group and ask an agent to change or explain it.

The context receipt should include:

- artifact and revision identity;
- selected object IDs or a bounded visual region;
- available source/spec attribution;
- composition hierarchy and neighboring objects;
- a current rendered crop for spatial context;
- linked code, data, run, caption, and usage when relevant; and
- the authority mode and allowed operation types.

Cursor's element-to-code Design Mode is a useful behavior reference: selection
identity and spatial context together are stronger than a screenshot or a text
description alone. Scient must adapt that pattern to scientific objects,
provenance, data, and accepted operations rather than copy a UI-development
workflow wholesale.

### Regenerate Without Losing Work

When source code or data changes:

- the prior accepted revision remains visible until a valid replacement is
  available;
- dependent artifacts/usages become stale or require review according to
  known dependencies;
- a new producer revision never overwrites an immutable prior revision;
- direct composition edits remain attached to stable panel/object references
  where possible;
- ambiguous remapping produces a visible reconciliation task rather than
  silently moving annotations to the wrong content; and
- the researcher can compare, accept, reject, rebind, or keep the prior
  revision.

## Authority Modes

One editing model cannot honestly cover code-generated plots, declarative
charts, imported images, native MATLAB figures, SVG diagrams, and structured
Studio compositions. Every artifact must have one explicit authority mode.

### 1. Structured-Native Studio Artifact

Scient's structured composition is authoritative.

Examples:

- a multi-panel publication figure assembled in Figure Studio;
- a Studio-native annotation layer;
- a structured diagram or visual explanation created through Studio
  operations; or
- a future structured publication table.

Manual and agent operations update the same owned model. SVG, PNG, PDF, HTML,
and Office/manuscript projections are derived representations. Export/import
must report loss and unsupported features.

### 2. Code-Native Artifact

Source code, data, parameters, and a producing run are authoritative.

Examples:

- Matplotlib/seaborn Python;
- ggplot2 R;
- MATLAB plotting code;
- Plotly or Vega-Lite produced from code;
- Quarto, notebook, or executable-document output; and
- a TSX/React or HTML application written as source.

The Studio may directly edit a preserved declarative spec when that spec is an
accepted source representation. For arbitrary code, a visual instruction
becomes a proposed source diff plus rerun, not an undocumented mutation of the
rendered output. Composition overlays may remain Studio-native and separate
from regenerated panel content.

### 3. Imported Or Native-Format Artifact

An imported/native file remains authoritative unless the researcher explicitly
converts or detaches it.

Examples:

- SVG, EPS, PDF, PNG, JPEG, TIFF, WebP, or HEIC;
- MATLAB `.fig`;
- GraphPad Prism or Origin project output;
- Office/PPTX figure content;
- an external Plotly HTML file;
- an illustration from Inkscape, Illustrator, BioRender, or another external
  editor; and
- domain-native imaging, molecule, map, or visualization formats.

The Studio should preserve the original bytes and expose only operations its
adapter can honor. A conversion creates a new structured-native artifact or
representation with a fidelity receipt; it must not silently replace the
original.

## Durable Artifact Model

The following is a product-level contract, not an exact database or TypeScript
schema.

### Artifact Identity

An artifact needs:

- an environment/project authority;
- a stable logical artifact ID independent of thread, tab, URL, and current
  file path;
- a human title and artifact kind;
- an authority mode;
- current, accepted, stale, archived, or superseded state;
- the active and last-successful revision references; and
- links to producing operations and project usages.

Moving or renaming a source file should not silently create a new artifact when
the project can preserve identity. Identical paths in different environments
or projects must remain isolated.

### Immutable Revisions

Each successful production, accepted manual edit, import, reconciliation, or
conversion creates an immutable revision with:

- content/revision identity and hashes;
- parent or predecessor revisions;
- creator, operation, producer, and timestamp;
- authority-mode-specific source relationship;
- representations belonging to that revision;
- validation status and warnings;
- review/acceptance state; and
- supersession and comparison links.

Failed and partial attempts are recorded without becoming the active accepted
revision. A last-successful artifact remains usable and visibly stale.

### Representation Bundle

One artifact revision may carry several representations of the same scientific
content:

| Representation role | Examples | Primary use |
|---|---|---|
| `native` | MATLAB FIG, external editor file, original SVG/PDF, source package | External continuation and highest available source fidelity. |
| `spec` | Vega-Lite JSON, Plotly JSON, Mermaid, Graphviz, Cytoscape graph | Structured/semantic editing and deterministic rerendering. |
| `interactive` | Self-contained HTML, Plotly/Matlab web canvas, WebGL view, TSX app build | Exploration and interaction. |
| `vector` | SVG, PDF, EPS | Publication layout, print, zoom, and external vector editing. |
| `raster` | PNG, TIFF, JPEG, WebP | Universal display, microscopy/image content, thumbnails, and export. |
| `data` | Arrow, Parquet, CSV slice, JSON data binding | Chart inspection, semantic edits, provenance, and downstream reuse. |
| `document` | PDF page/region, HTML report, notebook output | Contextual report or document projection. |
| `thumbnail` | Bounded PNG/WebP preview | Fast lists, history, chat, and mobile. |
| `accessibility` | Alt text, long description, data summary, reading/interaction instructions | Nonvisual access and review. |

Jupyter's MIME bundles are the right conceptual starting point: one output can
offer several representations and the frontend chooses the best it supports.
Scient's durable model must go further by adding stable identity, immutable
revisions, capabilities, provenance, validation, staleness, storage policy,
and project usage.

Representations must declare capabilities rather than rely on filename
assumptions:

- displayable, interactive, selectable, semantically editable, spatially
  editable, externally editable, printable, exportable, and accessible;
- intrinsic size, physical units, pixel density, view box, color profile, and
  font information where relevant;
- dependencies, local assets, runtime/library needs, and self-contained state;
- validation result and known fidelity limits; and
- whether the representation can be regenerated from the authoritative
  source.

### Provenance And Dependency Links

An artifact can link to:

- `AnalysisRun`, `DocumentBuild`, notebook execution, import, conversion,
  manual Studio operation, or agent operation;
- source files, code ranges, cells, data revisions, parameters, methods,
  environments, packages, toolboxes, and fonts;
- claims, evidence, captions, manuscript sections, presentations, reports,
  and publication packages;
- parent/child artifacts, panels, tables, and derived exports; and
- review, approval, comparison, and reconciliation records.

Dependency truth may be complete, partial, or unknown. Scient should not
promise perfect staleness inference for arbitrary code. Explicit producer
declarations, observed output capture, structured specifications, and accepted
relationships should improve precision over time while unknown remains
visible.

### Composition

A structured composition needs:

- stable composition and revision identity;
- finite page/artboard definitions with physical units;
- a hierarchy of panels, groups, references, annotations, and text;
- stable object IDs and z-order;
- position, size, crop/mask, transform, and constraint data;
- links to artifact revisions or deliberate `follow current` bindings;
- panel labels, captions, subcaptions, alt text, and reading order;
- theme/style tokens appropriate to publication work;
- export profiles and validation results; and
- operation history, comments, suggestions, and review state.

By default, a composition should pin the exact artifact revision used for a
publication result. `Follow current` can be offered during active work, but an
export or submission package must resolve and record exact revisions.

### Usage References

A manuscript, slide, report, claim, or chat should reference an artifact by
stable identity plus either:

- an exact revision;
- the accepted/current binding with visible staleness; or
- a publication/export variant created from an exact revision.

Copying pixels to the clipboard remains useful, but it must not be the only
integration. The project should be able to answer where an artifact is used
and which usages need review after an update.

### Operations And Receipts

Manual and agent actions should share typed operations such as:

- add/remove/reorder panel;
- bind/rebind artifact revision;
- move/resize/rotate/crop/mask/group/ungroup;
- align/distribute/snap/set artboard;
- add/update panel label, text, arrow, shape, scale bar, legend, or region;
- set caption, subcaption, alt text, dimensions, or export profile;
- update supported chart encoding, axis, scale, legend, color, facet, filter,
  or annotation;
- propose source change and rerun;
- compare/accept/reject/revert/reconcile revision; and
- export/publish/attach/reference.

Each durable operation should record actor, time, target IDs, base revision,
result revision, and reason/context when useful. Bulk agent operations should
remain inspectable as a bounded proposal rather than dozens of invisible
micro-edits.

## Scientific Canvas Experience

### Artboard And Navigation

The first canvas should support:

- finite pages/artboards in pixels, points, millimeters, centimeters, or
  inches;
- common journal, poster, slide, and custom sizes;
- deterministic zoom, pan, fit, actual-size, and selection framing;
- rulers, guides, grids, margins, bleeds, safe areas, and snapping;
- high-DPI displays without changing export geometry;
- light/dark application themes while preserving the artifact's own intended
  background; and
- exact reopen of artboard, zoom, pan, selection, sidebar, and tool state.

An infinite whiteboard may be useful later for protocols, evidence maps, and
early visual planning. It is a separate mode and should not compromise the
determinism of publication artboards.

### Selection And Direct Manipulation

Support:

- single, multi, area, hierarchy, and keyboard selection;
- resize, rotate, crop, mask, and constrained transforms;
- align, distribute, equal-size, tidy, lock, hide, and group;
- layers/object tree and direct selection through overlapping content;
- editable bounds and physical values in an inspector;
- predictable undo/redo and cancel-in-progress behavior;
- copy/paste and duplication without losing artifact references; and
- accessible keyboard paths for every essential operation.

### Scientific Annotations

The Studio should eventually support:

- panel labels and subfigure labels;
- arrows, connectors, brackets, lines, boxes, ellipses, and callouts;
- text with Unicode, RTL/LTR, math, superscripts/subscripts, and scientific
  symbols;
- scale bars with explicit unit and calibration relationship;
- regions of interest and masks;
- legends, keys, notes, significance markers, and uncertainty explanations;
- image/channel annotations and color bars through domain-aware adapters; and
- stable reading order and accessible descriptions.

Annotations should remain structured objects whenever possible. A flattened
export is a representation, not the only surviving edit state.

### Semantic Chart Editing

When a representation exposes a supported declarative or interactive spec,
Figure Studio should allow direct, validated changes to:

- fields and encodings;
- chart/mark type where semantically valid;
- linear, logarithmic, temporal, categorical, and other supported scales;
- axis labels, domains, ticks, formats, and titles;
- facets, layers, panels, and small multiples;
- filters, selections, parameters, and interaction controls;
- legend position, order, labels, and visibility;
- colors, symbols, line styles, and accessible palettes;
- error bars, confidence intervals, distributions, and uncertainty marks;
- annotations and reference lines; and
- dimensions, typography, margins, and export intent.

Vega-Lite is the strongest first declarative chart candidate because it is a
compact JSON grammar for interactive multi-view visualization. Plotly should
remain a first interactive representation because its figure structure
separates data, layout, frames, and runtime configuration and is already common
across scientific Python and notebooks.

Scient must preserve the source grammar. A limited Studio form should not
silently rewrite unsupported properties or claim a lossless round trip it
cannot provide.

### Raster And Image Work

Initial raster operations should be non-destructive and publication-focused:

- crop, mask, rotate, flip, resize, and place;
- brightness/contrast/gamma or channel-display adjustments only when the
  operation and original remain inspectable;
- scale, effective DPI, color profile, transparency, and compression checks;
- before/after comparison;
- original-data link and domain-viewer continuation; and
- warnings when edits could change scientific interpretation.

Deep microscopy/pathology processing, segmentation, measurements, DICOM/NIfTI
semantics, and quantitative image analysis belong to domain adapters such as
napari, Fiji/ImageJ, CellProfiler, or QuPath integrations. Figure Studio should
compose their outputs, not reimplement their scientific engines.

### Tables, Diagrams, And Other Visuals

The same foundation should later support:

- publication tables with structured cells, headers, notes, units, estimates,
  uncertainty, significance, provenance, and export;
- Mermaid, Graphviz, Cytoscape, evidence graphs, protocol diagrams, and
  analysis workflow views;
- maps and geospatial figures;
- molecular and structural-biology views;
- image plates and microscopy panels;
- equations and visual mathematical explanations;
- interactive reports and dashboards;
- posters and presentation figures; and
- visual abstracts and submission graphics.

Each type keeps its domain model. The Studio contributes identity,
representations, composition, operations, provenance, review, and export—not a
single lowest-common-denominator shape format.

## File, Producer, And Representation Strategy

### Core Format Roles

| Format/source | Recommended role | Editing posture |
|---|---|---|
| SVG | Preferred open vector representation and first composition export. | Parse and edit a supported subset; preserve unsupported source and report downgrade. Do not promise arbitrary SVG round-trip perfection. |
| PNG/WebP/JPEG | Universal raster display and compact output. | Non-destructive placement/annotation; retain original and effective-resolution truth. |
| TIFF | High-quality scientific raster and microscopy exchange. | Preserve metadata where possible; large/multiframe/domain content may require a specialized viewer. |
| PDF/EPS | Publication/vector continuation and final output. | Primarily inspect/place/export; use dedicated conversion or external editing rather than pretending PDF is a native Studio model. |
| Vega/Vega-Lite JSON | Primary declarative, agent-editable chart representation. | Structured semantic editing with schema validation and deterministic rendering. |
| Plotly JSON/HTML | Primary interactive chart representation. | Edit supported figure properties; preserve the original spec and distinguish runtime config. |
| HTML/CSS/JavaScript | Interactive artifact and report representation. | Run in the browser-capable surface with local assets and visible loading/error states; Studio annotations or source proposals remain separate. |
| TSX/React | Optional code-native custom interactive artifact source. | Open as source plus live browser representation. Visual requests become source diffs and reruns. Never make TSX the universal artifact model. |
| MATLAB FIG | Native MATLAB continuation and provenance representation. | Preserve/download/open externally; regenerate from code when possible; do not reverse-engineer it into the first Studio model. |
| Mermaid/Graphviz | Diagrams-as-code. | Source remains authoritative; Studio can provide targeted property/source proposals and compose rendered SVG. |
| CSV/Arrow/Parquet/JSON | Data representation supporting charts and tables. | Use the data/table workbench for full editing; Studio consumes stable bindings and sampled/declared fields. |
| DOCX/PPTX/XLSX | External compatibility documents and publication/presentation containers. | Reference or embed exported variants through document-platform adapters; do not use Office packages as Studio truth. |
| Quarto/MyST/Stencila/Jupyter outputs | Executable document and publishing representations. | Preserve source/runtime authority; register rich outputs and references through adapters. |

### Producer Expectations

#### Python

- Matplotlib/seaborn: capture SVG or PDF when correct, high-resolution PNG as
  fallback, code/data/run provenance, and a thumbnail.
- Plotly: capture Plotly JSON, self-contained or dependency-declared HTML,
  vector/raster exports where supported, and source/run provenance.
- Altair/Vega-Lite: capture the declarative spec, data binding/receipt,
  interactive render, SVG, and PNG.
- Jupyter: accept MIME bundles but promote meaningful output into durable
  artifact identity rather than leaving it only as notebook cell state.
- marimo: treat as a later adapter and behavior reference, not Studio or
  project authority.

#### R

- ggplot2: capture source/run, SVG/PDF where suitable, and high-resolution
  raster fallback.
- Plotly for R and htmlwidgets: preserve interactive HTML/spec when possible.
- `gt` and related structured table outputs: preserve table semantics and
  publication representations instead of only screenshots.

#### MATLAB

The adapter should be version-aware:

- retain `.fig` as native continuation where produced;
- capture PNG for universal display;
- prefer SVG or vector PDF where the installed MATLAB release and figure permit
  it;
- capture physical dimensions, resolution, background, fonts, and export
  warnings; and
- on R2026a or later, capture interactive HTML when useful and supported.

MathWorks documents `exportgraphics` support for SVG since R2025a and an HTML
interactive web canvas since R2026a, alongside PNG, TIFF, PDF, dimensions,
resolution, padding, and vector/raster choices. Scient should use those
official capabilities through the installed licensed MATLAB rather than
inventing a private renderer.

#### Browser And TSX Applications

An interactive application may be valuable as a dashboard, custom scientific
viewer, simulation, teaching artifact, or data exploration surface. The
browser should run it; the Studio should add:

- durable artifact/revision identity;
- source mapping or best-effort element targeting;
- captured screenshot/vector/PDF variants where meaningful;
- data and run provenance;
- comments, annotations, and agent context;
- export/share receipts; and
- a clear boundary between application source edits and Studio composition
  overlays.

This is why TSX support is useful but should not be first: it exercises the
code-native interactive mode after the general artifact and representation
contracts exist.

## Manual And Agent Work Use The Same Model

### Direct Structured Operations

When Scient owns the structured representation, both a person and an agent may
apply the same typed operation. The UI can provide direct manipulation while an
agent calls the operation programmatically.

Example:

```text
setPanelBounds(panel-2, x=91mm, y=18mm, width=79mm, height=62mm)
setPanelLabel(panel-2, "B")
setArtifactAltText(figure-17, "...")
bindArtifactRevision(panel-2, plot-9@revision-4)
```

The exact API is not selected here. The product requirement is one auditable
operation model, not pixel-coordinate prompts layered over a separate manual
editor.

### Source-Proposal Operations

When code or a native format is authoritative:

1. The researcher selects the relevant visual object or region.
2. Scient resolves available spec/source/provenance context.
3. The agent proposes a source change or a supported semantic spec change.
4. The researcher can inspect the diff and affected inputs.
5. Scient reruns through the normal execution coordinator.
6. A new immutable artifact revision is validated and compared.
7. The researcher accepts, rejects, or refines it.

The Studio must not imply that dragging an axis in a rendered Matplotlib PNG
can magically preserve source truth. It may offer a source-backed action such
as `Change axis to log scale`, but the durable change is code/spec plus a new
run.

### Visual Review And Suggestions

Comments and suggestions should target stable artifact/object/revision
identity, not only screen coordinates. Screenshot regions remain useful as
supporting spatial evidence. Review must survive reopening and clearly show
when its target revision is no longer current.

## Export, Publication, And External Continuation

### Export Profiles

Support reusable, versioned profiles for:

- journal figures;
- manuscripts and preprints;
- slide decks and posters;
- web/interactive publication;
- repositories and supplementary material;
- presentations and social/visual abstracts; and
- custom institutional requirements.

A profile may specify physical dimensions, allowed formats, resolution,
background, color space/profile, font policy, line weights, compression,
naming, panel labels, accessibility requirements, and validation thresholds.

Profiles must be inspectable and overrideable. They are not a reason to hide
the actual export settings.

### Export Quality

Exports should check, as applicable:

- exact source and composition revisions;
- physical size and aspect ratio;
- raster effective DPI at placed size;
- vector/raster substitutions;
- font embedding, substitution, and missing glyphs;
- transparency and background behavior;
- clipping, masks, filters, and unsupported SVG features;
- RTL/LTR, Unicode, math, and scientific-symbol rendering;
- color profile, contrast, and color-vision accessibility;
- line weights and small text;
- missing local assets or runtime dependencies;
- interactive features lost in static output; and
- alternative text and long description.

No system can promise perfect conversion among arbitrary native, vector,
raster, browser, Office, and publication formats. Scient's quality promise is
to preserve the strongest available representation, avoid unnecessary
flattening, validate known requirements, retain originals, and disclose every
known downgrade.

### Initial And Later Exports

Initial complete exports:

- self-contained SVG;
- high-resolution PNG; and
- a machine-readable export receipt.

Next exports:

- PDF through the shared PDF rendering foundation;
- TIFF with explicit color/resolution behavior;
- clipboard/file variants for manuscript and presentation insertion; and
- a package containing original, composition, exports, and receipt.

Later:

- interactive self-contained HTML where feasible;
- PPTX/DOCX placement through document-platform adapters;
- journal/submission packages;
- repository/deposit integrations; and
- print-production color workflows after evidence justifies them.

## Experience States And Recovery

Every Studio surface must provide polished, truthful states for:

- loading metadata;
- loading the preferred representation;
- switching or preparing a representation;
- importing/converting;
- rebuilding/rerunning;
- current and accepted;
- stale with last-success visible;
- failed latest attempt with retry/log/source actions;
- partial output;
- missing source or data;
- missing runtime, package, font, or local asset;
- malformed/unsupported representation;
- external file changed;
- edit conflict or ambiguous regeneration mapping;
- permission/read-only limitation;
- very large/slow artifact with progressive or alternate representation; and
- deleted/moved source with retained artifact recovery.

No state should resolve to an unexplained black, white, empty, or indefinitely
spinning canvas. If the best representation fails, the inspector should offer
the next valid representation, source, log, original file, retry, and external
open as appropriate.

## Architecture Direction

This is a proposed separation of responsibilities, not an exact package plan.

### Scient-Owned Core

Scient should own:

- artifact, revision, representation, composition, usage, and operation
  contracts;
- authority modes and capabilities;
- current/last-success/stale/failed-latest lifecycle;
- representation selection and fallback policy;
- provenance and dependency relationships;
- structured composition state and deterministic operations;
- review, comparison, reconciliation, and export receipts;
- adapter registration boundaries; and
- project/manuscript/chat integration semantics.

These are the durable product model. A canvas SDK, chart library, browser,
runtime, Office engine, or publishing tool must remain replaceable beneath
them.

### Adapter Boundaries

Adapters should cover:

- producer/runtime capture;
- file/native import and external continuation;
- representation validation and rendering;
- semantic editing for supported specs;
- conversion and export;
- domain-specific visualization; and
- document/manuscript placement.

Complexity belongs at these boundaries. The Studio core should not contain
`if MATLAB`, `if Plotly`, `if DOCX`, or `if TSX` behavior scattered through
generic UI and storage.

### Renderer And Surface Registry

The universal opener and Studio need a capability-based registry that can
answer:

- can this resource or representation be displayed here?;
- is it interactive?;
- can it be selected or semantically/spatially edited?;
- is a source/native/external continuation available?;
- what platform/runtime is required?;
- what loading/error/fallback states exist?; and
- which representation should be preferred for this task?

The task matters. Interactive Plotly may be preferred for exploration, SVG for
composition, PNG for a fast chat thumbnail, and PDF for print review—all for
the same artifact revision.

### Storage And Resolution

Artifact metadata, logical identity, revisions, and relationships should be
project/environment-scoped and serializable. Large representation bytes may
live in project files, an artifact store, or an external/native location
according to authority and retention policy.

Clients should receive authorized resource descriptors/URLs from the owning
environment rather than raw assumptions about local paths. URL renewal must not
change artifact identity or reset viewer/Studio state. Local and remote clients
should consume the same artifact contract, with full authoring available only
where the producer and source authority can support it.

### Retention

Before implementation, define:

- which originals and accepted revisions are never automatically removed;
- storage budgets and project/user overrides;
- derived-representation regeneration rules;
- LRU/age behavior for caches and unopened transient outputs;
- protection for artifacts currently open, referenced, exported, or under
  review;
- cleanup of failed/temp output; and
- portable archive/export behavior.

Retention must not silently delete the only native, vector, interactive, or
provenance-bearing representation.

### T3 Upstream Separation

Keep Studio implementation in Scient-owned packages and directories. The
inherited T3 surface should be touched only at narrow seams:

1. register/open a work surface;
2. register universal-opener capabilities;
3. connect browser preview/element-selection context;
4. attach or reference an artifact in chat;
5. resolve project/environment resources; and
6. show a stable artifact reference in shared file/project UI.

Do not fork T3's browser, chat, tab system, file tree, or right-panel model to
create the Studio. Do not put scientific artifact state into T3 preview-session
or chat-thread state. A T3 upstream merge should be able to change its internal
implementation without migrating the Studio's scientific model.

## Source Strategy

Scient should use a mix of owned contracts, selected dependencies, adapters,
and behavior references. No single donor is the product foundation.

Official sources were refreshed on 2026-08-28 for the roles summarized below.
Exact revisions, transitive licenses, component boundaries, and acceptance
evidence must be recorded in the adaptation map before selection.

| Source | Useful role | Proposed disposition |
|---|---|---|
| [Jupyter messaging](https://jupyter-client.readthedocs.io/en/latest/messaging.html) | Multiple MIME representations of one output, frontend-selected display, display updates. | Adapt the representation-bundle concept; add Scient identity, provenance, persistence, capabilities, and staleness. |
| [Vega-Lite](https://vega.github.io/vega-lite/docs/) / Altair | Declarative JSON grammar for interactive multi-view charts. | Primary semantic-chart representation candidate. |
| [Plotly](https://plotly.com/python/figure-structure/) | Widely used interactive figure tree with data/layout/frames and JSON serialization. | Primary interactive-chart adapter; never the only Figure model. |
| [Stencila figures](https://stencila.io/docs/documents/figures/) | Stable figures/subfigures, captions, layouts, overlays, executable figures, and cross-references. | Strong behavior/schema reference; translate ideas into Scient-owned contracts. |
| [Cursor Canvases](https://cursor.com/changelog/04-15-26) and [Design Mode](https://cursor.com/blog/design-mode) | Durable interactive agent artifacts and element/source/spatial targeting. | Behavior reference only; adapt the visual-to-agent loop to scientific identity and provenance. |
| [Fabric.js](https://fabricjs.com/docs/core-concepts/) | Object interaction, selection, transforms, serialization, raster/SVG export. | Serious finite-canvas dependency candidate; evaluate round trips, text, accessibility, performance, and scientific fixtures. Its own docs state SVG import/export is not one-to-one. |
| [tldraw](https://tldraw.dev/community/license) | Mature editor architecture, interactions, custom shapes, history, collaboration, accessibility, and agent-driving patterns. | Strong architecture/UX reference and possible paid dependency. Production requires an appropriate license; it is not a permissive default. |
| [Excalidraw](https://github.com/excalidraw/excalidraw) | MIT whiteboard, shapes, arrows, open JSON, and export behavior. | Freeform/diagram behavior reference; sketch style and whiteboard model are not the publication-figure foundation. |
| [xyflow](https://github.com/xyflow/xyflow) | MIT node-and-edge workflow UI. | Later analysis workflow, evidence graph, or protocol diagram component; not precise figure composition. |
| [Penpot](https://github.com/penpot/penpot) | Open design-platform behavior, SVG-oriented design, plugins, collaboration, and external continuation ideas. | Product/architecture reference and potential integration target; too large to embed or fork as the Studio. |
| Inkscape and diagrams.net | Vector/diagram external editing and interoperability. | External continuation and compatibility oracles; avoid rebuilding their full breadth. |
| Matplotlib, ggplot2, MATLAB, Plotly, Vega-Lite | Scientific figure producers. | First adapter corpus, not Studio core. |
| napari, Fiji/ImageJ, CellProfiler, QuPath, Mol*, 3Dmol.js, RDKit | Domain scientific visualization and analysis. | Later domain adapters; preserve specialized semantics. |
| BioRender, GraphPad Prism, OriginPro, Illustrator, PowerPoint | Researcher expectations for templates, figure polish, statistics, external editing, and publication workflows. | Product/compatibility references only unless a separately evaluated integration exists. |

### Canvas Engine Decision Gate

Do not choose an engine from demos or feature lists. Compare at least:

1. a focused SVG/DOM artboard backed by Scient's structured model;
2. Fabric.js behind the same model; and
3. tldraw behind the same model if commercial terms are acceptable.

Use one frozen scientific figure fixture and the same host. Evaluate:

- finite physical artboards and deterministic export;
- vector/raster/interactive panel embedding;
- text, Unicode, RTL, math, fonts, and accessibility;
- selection, transforms, snapping, guides, hierarchy, and keyboard operation;
- stable custom object IDs and typed operation integration;
- undo/redo and exact state restoration;
- large images and many objects;
- SVG import/export fidelity and unsupported-feature preservation;
- headless or deterministic export needs;
- collaboration/history separability;
- bundle/runtime performance in the actual Scient host;
- desktop/web/mobile viability;
- licensing, update strategy, removal path, and maintenance cost; and
- how much engine state would leak into canonical Studio data.

Prefer the smallest engine that passes the complete fixture. Do not build raw
interaction mechanics merely to avoid a dependency, and do not adopt a mature
infinite-canvas product if it forces the wrong artifact model.

## First Durable Vertical Slice

The first implementation should be real foundation work that later stages
extend, not a disposable demonstration.

### Included

- Scient-owned artifact/representation/composition contracts at the minimum
  depth required by the slice;
- adapters for existing static image/SVG output and one current analysis
  artifact source when available;
- Artifact Inspector with representation switcher, provenance, status,
  caption/alt, dimensions, export options, and recovery states;
- finite Figure Studio artboard;
- multi-panel placement and stable bindings;
- move/resize/crop/group/order/align/distribute;
- panel labels, text, arrows, simple shapes, and structured annotations;
- exact undo/redo and close/reopen state;
- current/stale/failed-latest behavior with last-success retained;
- manual and agent use of the same operation reducers/contracts;
- self-contained SVG and high-resolution PNG export;
- export receipt and basic publication checks; and
- opening/reference paths from the existing project/chat/artifact seams without
  duplicating those systems.

### Explicitly Deferred From The First Slice

- arbitrary TSX application compilation;
- full declarative chart authoring UI;
- deep Plotly/Vega-Lite semantic editing;
- full raster image processing;
- microscopy/molecular/geospatial domain tools;
- freeform infinite whiteboard;
- realtime collaboration;
- Office/PPTX editing;
- PDF composition export until a controlled renderer is qualified against the
  Studio corpus; reuse current generated-document/PDF contracts;
- complete journal-template marketplace;
- full color-management/print-production workflow; and
- a universal import/export promise for arbitrary SVG/PDF/native files.

Deferred capabilities must remain reachable through adapters and stable
contracts. They should not require replacing the artifact identity,
representation, composition, operation, or provenance foundation.

### Exit Gate

The slice is complete when the frozen mixed-figure fixture can be opened,
inspected, composed, edited manually and through typed operations, closed,
reopened, regenerated/staled, compared, recovered after a failed update, and
exported to SVG/PNG with stable geometry and a truthful receipt.

## Ordered Capability Roadmap

Every stage should remain independently useful and extend the same foundation.

### Stage 0 — Contract, Corpus, And Engine Evidence

- accept or revise this product boundary;
- freeze artifact, representation, composition, and operation vocabulary;
- define the first fixture corpus and quality measurements;
- identify exact integration seams with current analysis, PDF, opener,
  browser, chat, and manuscript work;
- compare the canvas-engine candidates in the actual Scient host; and
- write the architecture decisions required before irreversible schema or
  dependency choices.

Exit gate: the first durable slice has one accepted model, engine decision, and
bounded ownership map; no parallel lane needs to invent a private artifact
identity.

### Stage 1 — Figure Studio And Scientific Composition Foundation

Implement the complete first slice above.

Exit gate: mixed static/vector figure composition is durable, agentic,
recoverable, exportable, and connected to its source artifacts.

### Stage 2 — Regeneration, Revision Comparison, And Manuscript Use

- connect accepted analysis producers and staleness;
- preserve overlays across regenerated panel revisions where identity maps;
- add visual/revision comparison and reconciliation;
- add stable manuscript/presentation usage references;
- add update-review workflows; and
- add PDF export through the shared renderer.

Exit gate: changing source data/code can produce, review, accept, and propagate
a new figure revision without losing prior work or silently changing a
manuscript.

### Stage 3 — Declarative And Interactive Charts

- add Vega-Lite/Altair semantic editing;
- add Plotly interaction/spec inspection and supported edits;
- add interactive/static representation switching;
- add chart data/encoding/scale/legend/uncertainty operations; and
- add chart-specific accessibility and export validation.

Exit gate: one declarative and one interactive chart can be edited, rerendered,
composed, exported, and traced to data/run truth.

### Stage 4 — Rich Images, Tables, And Diagrams

- add high-quality raster/TIFF handling and domain-adapter handoff;
- add publication table objects;
- add Mermaid/Graphviz/Cytoscape diagrams and structured overlays;
- add scale/calibration-aware annotations; and
- add large-artifact performance paths.

Exit gate: the Studio supports the most common non-chart scientific visual
outputs without flattening their domain truth.

### Stage 5 — Code-Native Interactive Artifacts

- register HTML/JS/TSX custom applications as artifacts;
- connect browser element/source/spatial targeting;
- add source-proposal/rerun/visual-compare loop;
- capture static and publication representations; and
- add share/export behavior with dependency and runtime receipts.

Exit gate: an agent-written interactive artifact can be opened, targeted,
revised through source, reviewed, and published without becoming the universal
Studio model.

### Stage 6 — Collaboration, Templates, And Publication Depth

- comments, suggestions, assignments, approvals, and attributed operations;
- offline/local-first collaboration through an owned contract;
- journal/presentation/poster/visual-abstract templates;
- advanced accessibility, color, typography, and print checks;
- publication/submission package integration; and
- project/lab template governance.

Exit gate: teams can review and publish Studio artifacts with durable history
and external continuation.

### Stage 7 — Domain Packs And Broader Scientific Visual Work

- microscopy/pathology;
- neuroscience and medical imaging;
- molecular/structural biology and chemistry;
- geospatial and maps;
- networks and systems biology;
- engineering/simulation/3D;
- protocol/evidence/analysis workflow canvases; and
- discipline-specific publication/export profiles.

Exit gate: domain tools extend the shared Studio without contaminating its
generic model or losing specialized scientific semantics.

## Quality And Acceptance Corpus

Freeze representative fixtures before implementation. At minimum include:

### Producers And Representations

- Matplotlib/seaborn figure with text, math, transparency, markers, and SVG +
  PNG representations;
- ggplot2 figure with facets, legend, uncertainty, and PDF/SVG + raster output;
- MATLAB figure with `.fig`, PNG, SVG/vector PDF where supported, and R2026a
  interactive HTML where available;
- Plotly interactive figure plus JSON, HTML, SVG/PNG fallback, annotations,
  frames or controls;
- Vega-Lite layered/faceted interactive specification with data binding;
- Mermaid/Graphviz/Cytoscape diagram;
- publication table with units, estimates, confidence intervals, notes, and
  provenance;
- imported SVG containing text, clip paths, masks, filters, gradients, and an
  intentionally unsupported construct;
- large PNG/TIFF scientific image with physical calibration and metadata;
- PDF/EPS publication source;
- self-contained and dependency-bearing HTML; and
- code-native TSX interactive artifact for the later stage.

### Composition And Typography

- one mixed four-panel figure combining vector, raster, chart, and diagram;
- asymmetric spanning panel layout;
- panel labels, subcaptions, callouts, arrows, scale bar, legend, and crop;
- Latin, RTL, CJK, Unicode scientific symbols, and mixed-direction text;
- inline/display math and superscript/subscript;
- missing font and font-substitution case;
- light, dark, transparent, and explicit artifact backgrounds;
- color-vision deficiency and low-contrast case; and
- long caption and complete alt/long description.

### Lifecycle And Recovery

- current artifact;
- source/data update causing staleness;
- successful regeneration with stable panel mapping;
- regeneration with ambiguous object/panel mapping;
- failed latest run retaining last success;
- partial output;
- missing source/runtime/package/font/local asset;
- corrupt or malformed representation;
- moved/renamed source with preserved artifact identity;
- project reopen and authorized-URL renewal;
- two environments with identical paths remaining isolated;
- manual and agent operations on the same base revision;
- conflict, reject, revert, and recovery; and
- retention cleanup that never removes an open/referenced accepted revision.

### Export And Interoperability

- exact SVG/PNG geometry and physical size;
- effective DPI and line/text-size checks;
- font embedding/substitution and missing-glyph checks;
- transparency and color behavior;
- rasterized-content receipt;
- static export of interactive content with declared loss;
- manuscript/presentation insertion and update reference;
- reopen in Inkscape and common browsers;
- later PDF review in Scient and external PDF viewers; and
- package/archive containing original, composition, exports, and receipts.

## Platform Implications

### Desktop

Desktop is the full authoring surface because it can access local files,
runtimes, native editors, fonts, clipboard/file export, and browser/Electron
capabilities. Native runtime discovery, large artifact memory, GPU behavior,
color/font differences, and hardened packaging require platform-specific proof.

### Web And Remote Environments

Web clients should inspect, review, comment, and perform supported structured
operations through the owning environment. Artifact bytes and source actions
remain environment-authorized. Avoid transferring every native or large
representation when a suitable interactive/vector/raster derivative exists.

### Mobile

Mobile should begin as a continuation surface:

- inspect, zoom, switch representation, and view provenance/status;
- comment, approve/reject, update caption/alt text, and compare revisions;
- attach/reference an artifact in chat; and
- download/share an approved export.

Full precision artboard authoring is not required for the first mobile path.

### macOS, Windows, And Linux

Test separately:

- fonts, text shaping, RTL/IME, and color behavior;
- clipboard and drag/drop formats;
- native/open-external behavior;
- installed MATLAB/R/Python and rendering dependencies;
- GPU/WebGL/canvas limits;
- large image memory and file mapping;
- PDF/SVG/raster export fidelity;
- filesystem path/case/permission behavior; and
- packaging/license closure for native or Wasm dependencies.

## Performance And Scale Requirements

The Studio should remain responsive with:

- many artifact revisions and usages;
- dozens of panels/objects on one publication figure;
- large raster images and high-DPI displays;
- interactive WebGL/browser representations;
- long revision histories;
- local and remote environment connections; and
- concurrent agent work and user review.

Use representation-specific lazy loading, thumbnails, tiling/pyramids for large
images, object culling where needed, bounded history materialization, and
background export. Do not continuously repaint an idle canvas. Performance
budgets and corpus measurements must be set before selecting an engine.

## Accessibility And Scientific Integrity

Accessibility is part of artifact quality:

- full keyboard navigation and operation;
- visible focus and selection semantics;
- screen-reader-readable object hierarchy and controls;
- alternative text and long descriptions;
- logical reading order independent of z-order;
- non-color encodings and contrast checks;
- zoom/reflow where the artifact type allows;
- RTL, CJK, IME, Unicode, and math support; and
- accessible data summaries for charts and tables.

Scientific integrity requires:

- originals and generated/direct edits remain distinguishable;
- image adjustments and crops are recorded and reversible;
- scale bars/calibration cannot become detached from their measurement basis;
- data, code, parameters, methods, runs, and uncertainty remain linked;
- stale and failed-latest state remains visible;
- agent-generated changes are attributable and reviewable;
- exports identify flattening, rasterization, substitution, and loss; and
- unknown provenance remains unknown rather than being invented.

## What Not To Build First

- Do not make `.tsx` or a private React component tree the universal artifact
  format.
- Do not make a canvas SDK's store the canonical project model.
- Do not begin with an infinite whiteboard and call it a scientific figure
  system.
- Do not copy or fork Canva, Figma, Penpot, Illustrator, PowerPoint, BioRender,
  MATLAB, JupyterLab, or another complete application to avoid defining
  Scient's boundary.
- Do not build separate Python, R, MATLAB, notebook, HTML, and Office figure
  editors.
- Do not flatten every artifact to PNG on ingestion.
- Do not claim arbitrary SVG, PDF, Office, native, or HTML round-trip fidelity.
- Do not make a screenshot the only visual-to-agent context.
- Do not let agents edit a derived image while implying the source code or data
  changed.
- Do not duplicate the browser, PDF reader, universal opener, execution
  coordinator, manuscript editor, or document export pipeline.
- Do not block opening a valid last-success representation because the source,
  runtime, or latest rebuild is unavailable.
- Do not select an engine before the same frozen fixture runs through every
  serious candidate in the actual Scient host.

## Open Decisions And Required Gates

Before implementation architecture is accepted, decide:

1. the exact boundary between generic artifact primitives, existing generated
   document/PDF contracts, analysis artifacts, and Studio compositions;
2. the canvas engine after common-fixture evidence;
3. the smallest stable structured composition model and operation vocabulary;
4. whether SVG is only an export/import representation or also an editable
   source mode for a defined subset;
5. representation storage, retention, cache, and portable archive rules;
6. how explicit and inferred dependency/staleness links coexist;
7. how source/object identity maps across regeneration;
8. the first accepted Plotly/Vega-Lite semantic editing subset;
9. PDF/TIFF/color/font export mechanisms and platform closure;
10. how collaboration/history attaches without becoming Studio authority;
11. exact desktop/web/mobile capability parity; and
12. which domain adapter follows the general Figure Studio proof.

Each hard-to-reverse decision should become an ADR only after evidence and
explicit acceptance. The implementation plan should then assign narrow
packages, seams, PR order, fixtures, and exit criteria.

## Approval Proposal

Approve:

- one Scientific Artifact Studio product area;
- Figure Studio as the first durable surface;
- a finite Scientific Canvas for precise composition;
- the three authority modes;
- stable artifact/revision identity with multi-representation bundles;
- source/run/data/provenance/staleness continuity;
- the same typed operations for manual and agent work;
- stable manuscript/presentation usages;
- truthful export receipts and originals retained; and
- Scient-owned contracts with narrow T3 and donor seams.

Do not yet approve:

- a canvas engine;
- a concrete package or persisted schema;
- TSX as the first or canonical format;
- a whole donor application or broad T3 fork;
- realtime collaboration architecture;
- full Office, Illustrator, BioRender, MATLAB, Jupyter, or domain-tool parity;
  or
- an implementation start before the contract/corpus/engine evidence gate is
  reviewed.

## Completion Criteria For This Product Area

The long-term Scientific Artifact Studio is successful when a researcher can:

- open important scientific artifacts from anywhere in the project;
- see the best available static, interactive, vector, raster, native, data,
  and accessible representations without blank or false-success states;
- understand how an artifact was produced, whether it is current, and where it
  is used;
- compose and revise publication figures, tables, diagrams, and visual outputs
  without losing source truth;
- point to visual objects and collaborate with an agent through the same
  inspectable operation and source-proposal model;
- regenerate from changed code/data, compare revisions, preserve manual work,
  and review downstream impacts;
- integrate exact artifact revisions into manuscripts, presentations,
  reports, claims, and publication packages;
- export high-quality static and interactive variants with truthful receipts;
- continue in external/native scientific and design tools without lock-in; and
- extend the foundation to new scientific domains without replacing its
  identity, representation, provenance, composition, operation, and review
  contracts.

At that point Scient will not merely display files or generate attractive
charts. It will preserve the complete scientific life of an artifact from
source and analysis through interpretation, composition, review, manuscript
use, publication, and future revision.
