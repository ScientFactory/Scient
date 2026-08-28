# Scientific Document Platform Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-08-12
Last updated: 2026-08-28
Purpose: Proposes Scient's integrated product boundary, architecture direction, source-adaptation strategy, quality gates, and ordered implementation path for universal document viewing, scientific mathematics, source and visual authoring, typesetting, Office interoperability, review, collaboration, and publishing.
Doc type: Planning note

## Document Rules

This document is the proposed integration plan for Scient's **Scientific
Document Platform**. It owns the relationship and delivery order among file
viewing, document sessions, mathematics, LaTeX and other typesetting systems,
Office-format interoperability, manuscript authoring, review, collaboration,
and publishing.

It does not replace the accepted [PRD](../product/PRD.md), claim that proposed
architecture is implemented, select a dependency before its gate passes, or
own detailed external-source evidence. The focused
[Scientific Document Platform Source Map](../research/source-evaluations/scientific-document-platform-source-map.md)
owns that evidence. Accepted hard-to-reverse decisions belong in
`docs/architecture/decisions/`; implemented desktop behavior belongs beside the
code in `ScientFactory/scient-desktop`.

The [File, Resource, And Presentation Foundation](file-resource-and-presentation-foundation.md)
owns horizontal file identity, relocation, presentation selection, viewer
states, and broad read-only coverage. The
[Scientific Computing And Data Analysis Roadmap](scientific-computing-and-data-analysis-roadmap.md)
owns analysis runtimes, notebooks, datasets, variables, analysis runs, and
computational figures. [Scientific Artifact Studio](scientific-artifact-studio.md)
owns artifact inspection and structured visual composition. These plans share
small contracts without merging `DocumentBuild`, `AnalysisRun`, ordinary
files, generated documents, and Studio compositions into one ambiguous record.

### Update Policy

Update this roadmap when its product boundary, authority modes, shared
contracts, source posture, implementation order, acceptance gates, or current
desktop baseline materially changes. Keep current implementation evidence
dated and pinned. Move accepted architecture into its proper owner rather than
silently treating this proposed plan as architecture truth.

## Decision Summary

Scient should build one **Scientific Document Platform**, not separate and
eventually incompatible viewers for Markdown, PDF, HTML, LaTeX, DOCX, XLSX,
PPTX, and future manuscript formats.

The platform should let a researcher open a file from chat, search, the Files
tree, or another product surface and reach one durable document session. That
session may expose source, a visual projection, a rendered preview, build
problems and logs, review/history, or an external continuation according to the
document's capabilities. A format failure must produce a useful recovery state,
not an empty, black, or permanently loading panel.

The recommended direction is:

1. Consume the shared file foundation instead of owning a second opener,
   relocation resolver, presentation registry, or viewer shell.
2. Coordinate document sessions and format adapters above that horizontal
   foundation.
3. Preserve the implemented inline/display mathematics path independently from
   full document compilation.
4. Preserve and extend the implemented LaTeX build loop: immediate source,
   root discovery, compilation, diagnostics, log, last-success PDF, and
   source/PDF synchronization.
5. Reuse the current producer-neutral generated-document and PDF-reader
   boundary rather than creating format-specific readers.
6. Add broad view-only coverage before editing every binary format. A file
   should remain openable even when rich editing or perfect fidelity is not
   available.
7. Treat DOCX, XLSX, and PPTX as format-specific compatibility documents with
   preservation adapters, not as a single "Office" product model.
8. Build a Scient-owned structured manuscript model for new native scholarly
   work. LaTeX, Word, JATS, HTML, PDF, Typst, and Quarto are then projections,
   interchange formats, or artifacts rather than competing canonical models.
9. Keep editor, compiler, collaboration, import/export, and viewing engines
   replaceable behind Scient-owned identities, revisions, receipts, and
   operations.
10. Grow the landed LaTeX foundation into serious authoring, citations and evidence,
    review, history, collaboration, templates, publishing, submission, and
    institutional operation without replacing its foundational document and
    artifact contracts.

This is a proposal for review. It does not approve a whole GenOffice or
Overleaf fork, a particular rich-editor engine, managed compiler distribution,
an Office dependency, or a collaboration engine.

## Why The Name Is Scientific Document Platform

"Office platform" is too narrow and imports another product category's shape.
The scope also contains source files, scholarly manuscripts, equations,
typesetting projects, PDFs, HTML, images, citations, review, and publication.

"Manuscript platform" is also too narrow: spreadsheets, presentations,
general-purpose files, generated artifacts, and source-native projects remain
important. "Scientific content platform" is too broad because it would blur
documents with datasets, analysis runtimes, protocols, literature workflows,
and the whole Scient project.

**Scientific Document Platform** is therefore the planning and architecture
name. It describes a connected document lifecycle while leaving datasets,
analysis, evidence, and project memory in their own product owners. A future UI
may use simpler labels such as Files, Documents, Draft, Preview, or Publish;
this planning name does not prescribe navigation wording.

## Accepted Product Basis

The accepted PRD already requires:

- a durable, connected project rather than isolated files and chats;
- first-class manual work alongside reviewable agent work;
- source, evidence, citation, analysis, figure, table, and manuscript
  traceability;
- serious scholarly writing and honest import/export reconciliation;
- local ownership, collaboration, history, recovery, and external
  continuation; and
- no single editor, export format, typesetting system, external tool, or cloud
  service as the product core.

This roadmap translates those requirements into a proposed document-platform
boundary and sequence. If this proposal conflicts with the accepted PRD, the
PRD governs until a human-owned product decision changes it.

## Target Researcher Experience

### Open Anything To A Useful State

A researcher should be able to select a linked local file from chat or open it
through another existing entry point and get a useful result immediately.

- Text and source open in an editor even if no compiler or parser exists.
- Images and SVG open directly with fit, zoom, and error recovery.
- PDF opens in the Scient PDF reader.
- HTML opens in a browser-capable artifact surface with local assets and clear
  loading, execution, navigation, and failure states.
- LaTeX, Typst, and Quarto source opens before build discovery completes.
- Office files open to the best available view, with editing offered only when
  the selected adapter can preserve the required content.
- Unknown, encrypted, damaged, too-large, or unsupported files show metadata,
  the reason richer handling is unavailable, and practical continuations such
  as source/hex inspection where appropriate, system open, reveal, download,
  retry, or adapter setup.

Opening and executing are different capabilities. Normal local viewing should
not be blocked merely because macros, scripts, remote resources, compilation,
or rich editing need a separate supported path.

### One Document, Several Coordinated Surfaces

The user should not perceive separate unrelated viewers for the same work. A
document session may expose:

- **Source** — editable file or project source;
- **Visual** — rich or layout-oriented projection;
- **Preview** — rendered HTML, image, PDF, slides, sheet, or other artifact;
- **Problems** — navigable diagnostics, missing resources, and fidelity issues;
- **Log** — complete build, conversion, or adapter output;
- **Review** — comments, suggestions, proposed agent changes, and comparison;
- **History** — revisions, milestones, external changes, restore, and receipts;
- **Open externally** — deliberate continuation in a native or specialized
  application.

Only applicable surfaces should appear. Switching among them should preserve
identity, selection, scroll or page state where meaningful, and the user's
understanding of which representation is authoritative.

### Mathematics Everywhere It Belongs

Inline and display mathematics in chat or Markdown should render during normal
reading without invoking a TeX compiler. The raw expression remains copyable
and malformed or unsupported math remains visible.

Full LaTeX projects are different: they need files, root discovery, resources,
compiler passes, bibliography/index tools, diagnostics, build cancellation,
and generated artifacts. Both experiences should share visual math quality and
accessibility goals but not one execution mechanism.

### Manual And Agent Work Share The Same Document

A researcher, collaborator, or agent should act on the same stable document
identity. Agent work should land as inspectable source edits, semantic
operations, comments, suggestions, builds, conversions, or generated
artifacts—not a detached answer whose relationship to the document is lost.

The platform must support propose, inspect, edit, accept, reject, apply,
compare, checkpoint, and recover. The exact operation and storage model remains
an architecture decision, but the product lifecycle must not depend on the
chosen editor or collaboration engine.

## Product Boundary And Related Owners

| Area | Owning plan or product area | Scientific Document Platform relationship |
|---|---|---|
| File identity, relocation, preparation, presentation selection, viewer shell, and broad read-only coverage | [File, Resource, And Presentation Foundation](file-resource-and-presentation-foundation.md) | Produces one resolved, authorized resource and selected presentation. This platform must consume it rather than add competing click handlers, path rules, or generic viewer states. |
| Document editing, builds, Office compatibility, manuscripts, review, and publishing | This roadmap | Owns document-specific lifecycle above the horizontal file/presentation foundation. |
| Python, R, MATLAB, notebooks, datasets, variables, analysis runs, and computational provenance | [Scientific Computing And Data Analysis](scientific-computing-and-data-analysis-roadmap.md) | Shares editors, project resolution, execution events, diagnostics, and artifacts while preserving analysis-specific semantics. |
| Sources, reading, extraction, evidence, claims, and citation meaning | PRD source/evidence areas and future focused plans | Supplies structured references, evidence links, source regions, and claim relationships to manuscripts. |
| Artifact inspection, figures, visual composition, and publication export | [Scientific Artifact Studio](scientific-artifact-studio.md) | Documents reference stable artifact revisions and projections; the manuscript editor does not become the figure runtime or canvas. |
| Project identity, storage, sync, authorization, and recovery | Future focused architecture and accepted project/collaboration decisions | The document platform consumes these contracts and must not invent a private project or permission model. |
| Domain data such as DICOM, NIfTI, NWB, microscopy, molecules, and very large scientific arrays | Domain interoperability packs | May use the universal viewer shell and artifact identities but should not be forced into a manuscript representation. |

## Current Scient Desktop Baseline

This snapshot was checked on 2026-08-28 against
`ScientFactory/scient-desktop` `origin/main`
`aa23f1d3b96f6904dcc1a114cc33415fa267315a`. It is current-source
evidence, not a promise that every installed release or platform has identical
behavior.

### Implemented Foundations To Preserve

- Workspace text/source uses the inherited `@pierre/diffs/editor` with content
  revisions, conditional saves, atomic replacement, permission preservation,
  truncated-save refusal, dirty-buffer conflict choices, and exact-file
  freshness.
- Direct arbitrary-file opening classifies and presents image/SVG, PDF, HTML,
  Markdown, text, audio, video, and unknown binary. It respects environment
  authority and keeps renewable asset URLs out of logical identity.
- Local HTML opens in the integrated Browser with normal JavaScript and bounded
  relative local assets. Browser HTML-to-PDF publishes immutable generated
  revisions, preserves last success, and reuses the Scient PDF reader.
- The PDF reader accepts workspace, direct-environment, and generated sources;
  preserves page/zoom/sidebar/position across remount and URL renewal; and
  supports search, outline, thumbnails, password handling, ranges, native save
  copy, and direction-aware titles.
- Chat and Markdown render scoped inline/display math through KaTeX while
  retaining source and malformed-input fallback.
- LaTeX source has root discovery, local/managed toolchains, build lifecycle,
  diagnostics, logs, cancellation/supersession, last-success PDF, missing-
  package recovery, and SyncTeX.
- Mermaid, Vega-Lite, and Plotly share one lazy rich-fence registry in chat.
- The MATLAB runtime provides revision-safe run-file execution, runtime
  discovery/verification, queues, cancellation, diagnostics, history, and
  bounded figure artifacts.

### Remaining Horizontal Gaps

The shared [file foundation](file-resource-and-presentation-foundation.md) owns
these cross-format gaps:

- file surfaces still use current absolute or relative paths as durable
  identity, so rename/move recovery is absent;
- workspace preview still has a separate closed
  `empty | image | pdf | text` dispatch while the direct opener has eight
  presentation kinds;
- exact-file freshness follows a known path but cannot relocate it; and
- no common presenter registry and shell yet owns all moved, unsupported,
  malformed, encrypted, derivative, and adapter-failure states.

### Remaining Document-Platform Gaps

- No qualified broad Office view/preservation/editing engine or fidelity
  receipt exists.
- No Scient-native structured manuscript representation, semantic anchor model,
  or source/visual reconciliation contract is accepted.
- Typst and Quarto do not yet consume a generalized document-build provider
  boundary.
- Citation/evidence authoring, comments, suggestions, durable document history,
  realtime collaboration, publication profiles, and institutional document
  operation remain future work.
- Controlled Scient-document PDF export and semantic extraction remain separate
  future adapters; Browser live-page export is implemented but is not those
  capabilities.

Relevant implementation evidence:

- [universal file-opening contract](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/docs/internals/scient-universal-file-opening.md)
- [workspace file panel](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/apps/web/src/components/files/FilePreviewPanel.tsx)
- [generated-document contracts](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/packages/scient-document-artifacts/src/contracts.ts)
- [PDF reader](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/docs/internals/scient-pdf-reader.md)
- [browser PDF export](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/docs/internals/scient-browser-pdf-export.md)
- [LaTeX implementation](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/docs/internals/scient-latex.md)
- [analysis runtime](https://github.com/ScientFactory/scient-desktop/blob/aa23f1d3b96f6904dcc1a114cc33415fa267315a/docs/internals/scient-analysis-runtime-foundation.md)

## Proposed Platform Model

The following names are conceptual contract candidates, not frozen TypeScript
APIs or accepted schemas:

```text
OpenableResource
        |
        v
DocumentSession -- stable identity, authority mode, revision, capabilities
        |
        +-- SourceSurface
        +-- VisualProjection
        +-- PreviewSurface --------> ArtifactReference
        +-- Problems / Log --------> DocumentBuild or ConversionReceipt
        +-- Review / History ------> attributed operations and revisions
        |
        +-- FormatAdapter
        +-- ProjectionAdapter
        +-- TypesettingEngineAdapter
        +-- CollaborationAdapter
```

### Openable Resource

The universal opener should produce a resource with a stable location,
environment/project context, revision evidence where available, media/format
hints, and allowed continuations. A resource may be a workspace file, an
explicit external local file, a generated artifact, or a remote/project-backed
document in a later architecture.

The document platform must not infer that every resource belongs to the active
workspace or duplicate the universal opener's resolution policy.

### Document Session

A document session coordinates one logical document across surfaces. At
minimum it needs:

- stable session and resource identity;
- current revision and external-change state;
- explicit authority mode;
- supported read, edit, build, preview, reconcile, review, and export
  capabilities;
- pending local edits and conditional-save state;
- active source, selection, page, sheet, slide, or projection state where
  meaningful;
- associated builds, conversions, diagnostics, artifacts, and receipts; and
- recovery behavior when an adapter, process, asset, or source changes.

Closing a UI tab must not silently delete durable document state, and opening
the same resource through another entry point should normally focus or restore
the same logical surface rather than produce divergent unsynchronized copies.

### Surface And Adapter Registry

Replace the expanding format `if/else` with registered adapters that declare:

- recognized formats and confidence;
- supported surfaces and actions;
- required assets, runtimes, or services;
- whether editing is lossless, constrained, projection-based, or unsupported;
- loading, failure, and fallback behavior;
- platform and connection-mode availability;
- import/export and fidelity behavior; and
- test fixtures required before activation.

Selection must be deterministic and observable. A failed preferred adapter may
fall back to another registered view, but the product must not silently switch
authority or claim fidelity the fallback cannot provide.

### Revision-Aware Document Writes

Serious editing requires conditional saves. A save should identify the source
revision it was based on and fail into a recoverable conflict if the file
changed externally. Atomic replacement, draft recovery, explicit overwrite or
merge, and accurate dirty state are platform requirements.

Large or truncated text must be opened through a supported large-file mode or
kept read-only. The app must never save a truncated buffer over the full source.

### Generic Artifact References

PDF, HTML, images, logs, converted documents, and generated files should be
addressable as artifacts independently of their source paths. An artifact
reference should carry producing operation/build identity, revision or content
identity, media type, freshness, and a bounded asset route.

Generalizing the existing PDF reader from a workspace path to a PDF/artifact
source is the first concrete proof. The reader remains the same polished PDF
surface whether the bytes came from a workspace file or a LaTeX build.

### Document Build And Conversion Receipts

`DocumentBuild` should remain distinct from `AnalysisRun` while sharing a base
execution envelope. A build should record:

- document/project/root identity and revision;
- engine/provider and relevant toolchain identity;
- dependencies and inputs known to the build;
- start, progress, cancellation, supersession, and completion state;
- diagnostics and complete bounded log access;
- produced artifacts and which last-success artifact they replace;
- freshness/staleness relationships; and
- enough context to reproduce, explain, compare, and recover.

Import, export, or projection reconciliation should produce a separate
conversion/fidelity receipt rather than being disguised as a successful build.

## Authority Modes

The platform needs explicit authority because the correct answer differs by
workflow.

### File-Native Source Project

Existing LaTeX, Typst, Quarto, Markdown, or similar project files remain
canonical. Scient edits those files, resolves project context, builds them,
and records artifacts and receipts. It must preserve compatibility with
external editors and command-line tools.

### File-Native Compatibility Document

A directly opened DOCX, XLSX, or PPTX remains the canonical compatibility
document unless the user deliberately converts it. Scient may maintain a
visual or semantic projection, but saves must preserve unsupported package
content and report any known downgrade. An Office file is not automatically
the canonical Scient manuscript, dataset, analysis, or figure model merely
because it can be edited.

### Structured-Native Scient Document

For new native manuscripts, Scient's semantic document model is canonical.
Stable structures can connect sections, claims, evidence, citations, figures,
tables, equations, metadata, comments, and agent proposals. LaTeX, DOCX, JATS,
HTML, PDF, Typst, Quarto, and Markdown are projections, interchange formats, or
generated artifacts.

### Deliberate Conversion And Reconciliation

Changing authority mode must be an explicit operation. The resulting receipt
should identify what was:

- preserved;
- normalized;
- downgraded;
- unresolved;
- omitted or lost; and
- retained only in the original source/package.

The user should be able to keep the original, inspect the converted result,
and continue externally. A visual resemblance is not proof of round-trip
fidelity.

## Capability Workstreams

### 1. Universal Opening And Viewer Experience

This platform consumes the universal opener's resolved resource and the shared
presentation shell. It contributes document-specific surfaces and actions,
including:

- immediate identity/title and loading feedback;
- deterministic format/capability resolution;
- source or metadata fallback;
- consistent toolbar and surface switching;
- error details that are understandable but do not replace recovery actions;
- retry, reload, reopen externally, reveal, download, and report actions as
  applicable;
- retained last-good content during refresh or rebuild;
- theme-aware non-blank loading and error backgrounds; and
- state preservation when the resource changes without changing identity.

View-only breadth should precede rich editing breadth, but a weak preview must
not be presented as fidelity-complete.

### 2. Chat And Markdown Mathematics

Scient now uses `remark-math` and bundled KaTeX for scoped inline and display
math in chat and Markdown. MathJax remains only a fallback candidate if a
maintained fixture corpus demonstrates required TeX or MathML coverage that
KaTeX cannot provide acceptably.

Required behavior includes inline and display math, streaming stability,
copyable raw TeX, code/dollar disambiguation, malformed expressions, unsupported
commands, keyboard and screen-reader behavior, light/dark themes, and mixed
RTL/LTR content. This work does not require or substitute for a PDF compiler.

### 3. Universal Typesetting Opener

The implemented LaTeX foundation now:

1. Open selected source immediately.
2. Discover the credible root in a documented order while preserving the
   selected chapter/source as the active editor.
3. Discover supported local engines and show a concise setup state when none
   is available.
4. Build through a replaceable typesetting adapter.
5. Offer `Preview`, `Source`, `Problems`, and `Log`, with split view where
   useful.
6. Cancel and supersede builds without orphaning processes or allowing stale
   completion to replace a newer result.
7. Parse navigable diagnostics while preserving the full raw log.
8. Retain and mark the last successful PDF stale when a later build fails.
9. Keep temporary/auxiliary output away from source files by default, subject
   to deliberate project configuration.
10. Supports reviewed SyncTeX forward/inverse source-PDF navigation.

Root evidence should consider a prior explicit project choice, root magic
comments, project configuration, document-root markers, bounded reverse
dependency discovery, and an explicit chooser when ambiguity remains.

Scient currently discovers installed tools and can provision a managed TinyTeX
toolchain. Tectonic remains a separately qualified low-setup candidate, not the
assumed implementation. Installed `latexmk`, TeX Live, MacTeX, BasicTeX,
MiKTeX, XeLaTeX, and LuaLaTeX paths remain important for real project
compatibility. Typst is a peer adapter. Quarto/Pandoc builds compose with
analysis receipts but must not become the only route to every typesetting
engine.

### 4. Broad View-Only Document Coverage

Add a binary-document gateway and view adapters for common Office/OpenDocument,
ebook, archive, media, and scientific artifact formats as evidence justifies.
Flyfish is a candidate for a bounded broad-viewer proof. AnyDoc may supply
derived text for search and agents but cannot prove visual fidelity.

Every adapter needs malformed, encrypted, missing-resource, oversized,
unsupported-feature, cancellation, crash, and fallback tests. The platform
must remain useful when an optional viewer is absent or fails.

### 5. DOCX Compatibility Editing

Run GenOffice's DOCX engine path, EigenPal's open core, Sobree, and Docxodus
through one frozen scientific-DOCX harness. GenOffice's original-package
preservation and dirty-region patching approach is the strongest architectural
idea in the current evidence, but no engine or integration depth is selected.

The chosen adapter must preserve the original OOXML package, pass unsupported
parts through, modify only understood dirty regions, and produce a fidelity
receipt. No-op and narrow edits must reopen in Microsoft Word and LibreOffice.

Do not adopt GenOffice's application shell, project store, provider/search
layer, agent runtime, or Genspark account dependency. If its engine wins,
extract or pin only the bounded engine/projection seam required behind Scient
contracts.

### 6. Structured Manuscript Authoring

Prototype the same scientific document in Tiptap/ProseMirror, Plate, and
Lexical. The fixture must include stable semantic nodes, citations/evidence,
equations, figures, tables, cross-references, comments/suggestions,
accessibility, long-document performance, collaboration binding, and
import/export.

Tiptap/ProseMirror is the leading prototype candidate because it aligns with the
strongest current DOCX preservation donor and has mature extension and
collaboration paths. Its document JSON must remain a projection/interaction
model unless a later architecture decision explicitly selects otherwise.

### 7. Spreadsheets And Presentations

XLSX and PPTX should follow the same session, revision, adapter, fidelity, and
artifact contracts but require format-specific models.

- XLSX needs cells, formulas, named ranges, charts, sheets, recalculation,
  external links, viewport loading, and explicit relationships to Scient
  datasets/tables/analyses.
- PPTX needs slides, layouts, masters, themes, assets, notes, animations, and
  constrained layout operations.

Univer is a likely spreadsheet-surface candidate, paired with an open or
Scient-owned preservation gateway. GenOffice and BetterOffice remain engine
candidates. Neither a workbook nor a slide deck should silently become
scientific data or manuscript truth.

### 8. Citations, Evidence, And Cross-References

The document platform should consume Scient-owned reference, citation,
evidence, claim, figure, table, and source-region identities. It should not
store citation truth only as rendered strings or editor-specific inline nodes.

Required capabilities include BibTeX/BibLaTeX and CSL interoperability,
Zotero/JabRef continuity, locators, bibliography generation, metadata repair,
unresolved-key states, cited-versus-uncited visibility, cross-references, and
the PRD distinction between evidence-linked and auxiliary citations.

### 9. Review, History, Collaboration, And Agent Proposals

Comments, suggestions, tracked changes, mentions, assignments, comparisons,
milestones, and restore should operate on stable attributed document
operations and anchors. Human and agent proposals should use one review
lifecycle.

Yjs/Hocuspocus is the first rich-text collaboration prototype candidate;
Automerge and ShareDB remain challengers for different state shapes. A CRDT or
OT engine may implement concurrent editing but must not define project
authorization, accepted scientific state, complete history, asset versioning,
or authority mode.

### 10. Publishing, Submission, And External Continuation

Quarto/Pandoc is the primary pragmatic multi-format export lane; MyST is a
challenger for scientific publishing and semantic interchange. Overleaf is the
comprehensive workflow and capability reference for LaTeX-oriented project
collaboration, compilation, history, templates, integrations, and institutions.

The platform should grow toward versioned publication profiles, metadata and
style validation, submission packages, repositories/deposits, persistent
identifiers, receipts, and external editor/service continuation. No export or
submission system becomes the only project truth.

## Source Strategy Summary

The detailed evidence, pins, licenses, exclusions, and refresh conditions live
in the [focused source map](../research/source-evaluations/scientific-document-platform-source-map.md).

| Source | Proposed Scient role | Present disposition |
|---|---|---|
| T3-derived Scient Desktop | Current host shell, right-panel/file workflow, typed RPC, assets, and process substrate | Current implementation host; preserve through narrow Scient-owned seams. |
| Scient file/resource foundation | Relocation, presenter selection, common shell, and broad read-only coverage | Proposed horizontal owner; this roadmap consumes it. |
| Scient PDF reader / PDF.js | Shared PDF and generated-artifact preview | Adopted current implementation with producer-neutral workspace, environment, and generated sources. |
| `remark-math` + KaTeX | Chat and Markdown inline/display math | Adopted current implementation; keep corpus and fallback gate. |
| LaTeX Workshop | Root discovery, recipes, dependency watching, build and SyncTeX workflow reference | Adapt algorithms and UX behind Scient contracts; do not embed the VS Code extension. |
| managed TinyTeX and installed TeX / `latexmk` | Current LaTeX toolchain family | Adopted current implementation; keep discovery, diagnostics, and recovery replaceable. |
| Tectonic | Alternative managed local typesetting engine | Watch/qualify; not approved for bundling. |
| TexLab | LaTeX language-service candidate | External process candidate subject to GPL/distribution/lifecycle review. |
| Overleaf | Full product capability and service-separation reference | Reference/compatibility first; deeper integration requires a separate ADR. |
| Tiptap/ProseMirror | Structured manuscript visual projection | Leading prototype candidate, not manuscript truth. |
| Plate and Lexical | Rich-editor challengers and UX/performance sources | Same-fixture prototype before selection. |
| GenOffice | Original-OOXML preservation and DOCX/XLSX/PPTX engine concepts | Deep donor and corpus baseline; never adopt the whole suite. |
| EigenPal open core / Sobree | DOCX engine challengers | Same-corpus comparison; commercial EigenPal packages excluded. |
| Docxodus | Focused DOCX renderer/editor and OOXML implementation evidence | Serious bounded candidate; no fidelity claim until the Scient corpus passes. |
| `docx-preview` / Mammoth | Browser rendering and semantic extraction fallbacks | Derived/inspect candidates, never round-trip authority. |
| BetterOffice | Shared Rust/Wasm OOXML engine direction | Watch/revisit; too early for foundation selection. |
| Univer | Embedded spreadsheet surface/formula ecosystem | Later prototype; open core is not XLSX preservation authority. |
| Flyfish | Broad browser-native view-only coverage | Fixture-gated viewer candidate. |
| JupyterLab | Registry, context, factory, and explicit `Open With` patterns | Architecture and UX reference; not the application base. |
| H5Web / OHIF / VolView | HDF5, medical imaging, and volumetric domain viewers | Later domain adapters, not the universal core. |
| ONLYOFFICE / Collabora / LibreOffice / Microsoft Office | Mature suite behavior and compatibility | Reopen/visual/conversion oracles; optional isolated service only after separate decision. |
| Quarto/Pandoc | Multi-format publishing and executable-document adapter | Primary export prototype, not the canonical Scient model. |
| MyST / Stencila | Publishing challenger and semantic/provenance references | Compare against owned contracts; do not adopt as core prematurely. |
| Yjs/Hocuspocus / Automerge / ShareDB | Collaboration-engine candidates | Bounded prototypes; never project authorization or complete history. |
| AnyDoc and peer extractors | Derived searchable/agent-readable text | Extraction only; never viewing or round-trip fidelity authority. |

## Ordered Implementation Roadmap

These are dependency stages, not release dates. A later stage may be
researched in parallel, but it must not freeze a conflicting foundation before
the earlier contract is proven.

### Landed Foundation — Preserve And Extend

- Safe conditional workspace text editing, external-change conflicts,
  truncated-save refusal, and exact-file freshness.
- Direct opening for image/SVG, PDF, Markdown, text/source, HTML, audio, video,
  and unknown binary.
- Producer-neutral generated-document artifacts and PDF reader sources.
- Chat and Markdown math through KaTeX.
- LaTeX root discovery, build lifecycle, diagnostics, last-success PDF,
  toolchain recovery, and SyncTeX.

These are current implementation, not future stages. Their contracts and
regression fixtures remain mandatory inputs to later work.

### Stage 1 — Consume The File And Presentation Foundation

- Introduce stable `FileReference` identity without weakening current authority
  or replacing lower path-based I/O contracts.
- Add deterministic relocation and explicit ambiguity recovery.
- Replace parallel closed dispatchers with a static presenter registry and
  common shell while preserving current presenter behavior.
- Make `DocumentSession` consume the resolved resource and presentation rather
  than becoming another file opener.

### Stage 2 — Broad View-Only Coverage

- Establish the binary-document gateway.
- Run Flyfish and any alternatives against one frozen viewer corpus.
- Add honest fallbacks for Office and other common formats.
- Keep extraction/search separate from the visual result.

### Stage 3 — Document Kernel And DOCX Preservation Proof

- Formalize document identity, authority, revisions, anchors, projections,
  conversions, artifacts, and fidelity receipts based on evidence from the
  landed foundation and Stages 1-2.
- Benchmark GenOffice, EigenPal open core, Sobree, and Docxodus in the same host
  and corpus.
- Select or reject an engine only after Word/LibreOffice and loss-accounting
  gates pass.

### Stage 4 — Serious Structured Manuscript Authoring

- Run the Tiptap/Plate/Lexical common fixture.
- Establish stable scientific nodes and source/projection mapping.
- Integrate citations/evidence, equations, figures, tables, cross-references,
  metadata, manual edits, and reviewable agent proposals.
- Prove deterministic export through at least one source/publishing adapter.

### Stage 5 — Review, Durable History, And Recovery

- Add anchored comments, suggestions, tracked changes, mentions, assignments,
  comparisons, milestones, snapshots, deleted-file recovery, and restore.
- Use the same proposal lifecycle for humans and agents.
- Keep history portable and independent from an editor engine.

### Stage 6 — Realtime And Local-First Collaboration

- Prototype Yjs/Hocuspocus and challengers behind one collaboration adapter.
- Test offline edits, reconnect, attribution, conflicts, migration, revocation,
  ownership transfer, large assets, and restore.
- Connect to project identity and authorization rather than embedding policy in
  the collaboration document.

### Stage 7 — Publishing And Ecosystem

- Add publication profiles/templates, metadata/style checks, richer
  Quarto/Pandoc/MyST/LaTeX/Typst/DOCX/JATS exports, submission/deposit packages,
  reference-manager and Git continuity, and receipts.
- Decide any deeper Overleaf relationship only after a dedicated product,
  source, license, operations, migration, and local-first comparison.

### Stage 8 — Spreadsheet And Presentation Depth

- Begin only after shared `Dataset`, `Table`, `Figure`, `Artifact`, and
  publication contracts are stable enough to prevent Office formats from
  becoming accidental scientific truth.
- Prove view, no-op preservation, narrow edits, recalculation/layout behavior,
  external reopen, and platform performance separately for XLSX and PPTX.

### Stage 9 — Institution And Integrated Scientific Intelligence

- Add guest/group/institution roles, managed identities, SSO/provisioning,
  retention/offboarding, policy, audit, and accessible mobile review.
- Connect literature evidence, analysis runs, figures, manuscripts,
  reproducibility checks, peer review, and governed agents through the same
  project/document identities.

## Quality And Fixture Plan

### Universal Opener And Viewer Fixtures

- Open from Files tree, chat link, search, recent item, and direct supported
  local path; verify one session identity and correct focus/reuse.
- Loading, slow asset, changed asset, missing file, permission loss, unsupported
  format, encrypted file, malformed file, adapter crash, retry, and fallback.
- Light/dark themes, high contrast, zoom, keyboard, screen reader, bidi,
  resizing, reopen, close/reopen, and remote connection modes.
- Preserve existing Markdown, image/SVG, PDF, browser, diff, and external-open
  paths.

### Mathematics Fixtures

- Inline/display math, delimiters, escaping, literal dollars, code spans and
  fences, macros, unsupported commands, malformed expressions, copy, selection,
  streaming boundaries, long equations, accessibility, RTL paragraphs, and
  mixed-direction notation.

### Typesetting Fixtures

- Single and multi-file LaTeX; selected chapter and root; root magic comments;
  multiple credible roots; bibliography/index; images; local styles; output
  directories; XeLaTeX/LuaLaTeX differences; Unicode and fonts; missing engine,
  package, image, bibliography, or root; malformed input; cancellation;
  supersession; stale last-success PDF; external edits; project reopen; and
  later SyncTeX.
- Peer `.typ`, `.qmd`, and `.Rmd` fixtures prove adapter separability.

### DOCX Compatibility Corpus

- No-op ZIP/package identity where technically possible.
- Allowlisted OOXML differences after narrow word, paragraph, table, figure,
  comment, citation, and metadata edits.
- Equations, citations, fields, cross-references, footnotes/endnotes,
  headers/footers, sections, styles, numbering, tables, charts, images, tracked
  revisions, comments, unknown parts, macros, signatures, and external links.
- Hebrew, Arabic, mixed bidi, CJK, Unicode, IME, keyboard, screen reader, large
  documents, pagination, fonts, and unsupported content.
- Reopen in Microsoft Word and LibreOffice; compare rendering; save again;
  verify unedited content survival.
- External modification, stale save, conflict, crash, interrupted conversion,
  original recovery, and fidelity receipt accuracy.

### Structured Manuscript Fixture

- Stable sections, paragraphs, equations, citations/evidence, claims, figures,
  tables, cross-references, metadata, comments, suggestions, agent proposals,
  imports, exports, source/visual switching, collaboration, long-document
  performance, accessibility, and deterministic reconciliation.
- Replace one editor or export adapter without changing the canonical
  manuscript identities or losing history.

### XLSX And PPTX Fixtures

- XLSX formulas, cached values, recalculation, dates, locale, named ranges,
  merged cells, filters, charts, comments, validations, external links, macros,
  large sheets, and scientific numeric precision.
- PPTX layouts, masters, themes, fonts, images, charts, tables, notes, equations,
  animations, RTL, unknown extensions, and constrained layout changes.
- No-op and narrow-edit package diffs plus Excel/LibreOffice and
  PowerPoint/LibreOffice reopen.

## Platform Implications

### Desktop, Web, And Mobile

Desktop is the first full authoring/build host because it can access local
files, installed tools, and Electron capabilities. Browser continuation needs
server/remote capability discovery and must never present a local-only action
as available. Mobile begins with reading, comments, review, approvals, and
artifact access rather than compiler or full-editor parity.

### Local And Remote Environments

Document identity and capabilities must be scoped to the actual environment.
Asset URLs, builds, language services, file watches, and external-open actions
run where the file exists. Remote/relay/tunnel use must preserve typed contracts
and capability-aware UI rather than copying local filesystem assumptions into
the browser.

### macOS

Test sandboxed packaged-app behavior, MacTeX/BasicTeX and user-installed
engines, spaces and Unicode paths, fonts, quarantine/signing/notarization,
external apps, file replacement, and Intel/Apple Silicon distribution.

### Windows

Test MiKTeX/TeX Live discovery, drive letters, UNC paths, long paths, file
locking, antivirus interactions, process-tree cancellation, code pages, fonts,
and Office reopen automation where licensing permits.

### Linux

Test TeX distribution discovery, AppImage/installed-package behavior, font
availability, desktop portals, headless rendering, process trees, and
LibreOffice reopen/conversion. Do not weaken application sandboxing merely to
make a compiler easier to invoke.

### Licensing And Distribution

Every selected engine must have a documented license, attribution, source-code
or notice obligation, redistribution boundary, update owner, platform package
plan, and failure/rollback path. A repository being public does not make all
subdirectories, hosted services, models, fonts, templates, or binaries
redistributable.

## What Not To Build First

- Do not fork an Office suite or Overleaf to deliver the first viewer or LaTeX
  build.
- Do not create format-specific tabs, stores, process managers, and asset paths
  for every new extension.
- Do not make raw LaTeX, Markdown, HTML, DOCX OOXML, a rich-editor JSON tree,
  Pandoc AST, or CRDT state the universal Scient manuscript model by accident.
- Do not wait for perfect rich editing before showing ordinary files.
- Do not claim Office fidelity from unit-test volume, screenshots, or a
  successful conversion.
- Do not make extracted Markdown or agent-readable text the visual or
  round-trip truth.
- Do not let a compiler requirement prevent source editing.
- Do not build realtime collaboration before revisions, conflicts, authority,
  review, and recovery are understandable.
- Do not tie comments, agent proposals, or history permanently to one editor.
- Do not absorb datasets, analysis runtimes, source/evidence workflows, or all
  scientific formats into the document platform.

## Open Decisions And Gates

The following remain unresolved and require focused evidence or architecture
decisions:

- exact conceptual/API names and package boundaries for resources, sessions,
  surfaces, artifacts, builds, revisions, and fidelity receipts;
- the exact `FileReference` persistence boundary and relocation evidence ladder;
- recovery drafts and merge UX above the implemented conditional-write and
  external-change contract;
- `DocumentBuild` and `AnalysisRun` shared base without semantic collapse;
- whether Tectonic adds enough value beside managed TinyTeX and installed TeX;
- root-choice persistence/invalidation and output-directory defaults;
- TexLab lifecycle, GPL boundary, and platform distribution;
- later SyncTeX semantic-anchor depth beyond the implemented navigation;
- evidence that would justify a MathJax fallback beside the implemented KaTeX
  path;
- the broad viewer selected after fixture comparison;
- the DOCX engine selected after the GenOffice/EigenPal/Sobree/Docxodus corpus;
- the rich editor selected after the Tiptap/Plate/Lexical corpus;
- exact structured-native manuscript representation and citation/evidence
  contracts;
- the fidelity receipt and authority-conversion UX;
- the history/review operation model and collaboration-engine winner;
- the first XLSX and PPTX edit milestones;
- the publication profile, template, submission, and deposit model;
- whether any future Overleaf, ONLYOFFICE, or Collabora integration or service
  materially beats independent implementation behind Scient contracts; and
- where organization, institution, policy, and mobile depth enters actual
  product sequencing.

## Approval Proposal

Approve for focused architecture and implementation planning:

1. **Category name:** Scientific Document Platform.
2. **Boundary:** one document lifecycle spanning viewing, source and visual
   editing, builds, compatibility formats, review, collaboration, and
   publishing, subordinate to the accepted PRD.
3. **Next implementation order:** stable file identity and relocation, one
   presenter registry/shell, broad read-only format coverage, then the document
   kernel and DOCX preservation proof. Preserve the landed math, LaTeX, PDF,
   HTML, and text-editor foundations throughout.
4. **Durable foundation:** resource/session identity, explicit authority,
   revisions and conditional saves, registered surfaces/adapters, generic
   artifacts, specialized document builds, and fidelity receipts.
5. **Office posture:** GenOffice as a deep donor/corpus baseline; EigenPal open
   core, Sobree, and Docxodus as genuine DOCX challengers; `docx-preview` and
   Mammoth only as derived-view candidates; no dependency selection before the
   frozen compatibility corpus passes.
6. **Manuscript posture:** Tiptap/ProseMirror as the leading visual-editor
   prototype candidate, Plate and Lexical as required challengers, and a
   Scient-owned structured manuscript model rather than editor state as
   accidental truth.
7. **Overleaf posture:** capability and systems reference first; leave deeper
   integration, isolated services, or a maintained fork open only after a
   separate decision proves product, license, operational, local-first, and
   migration fit.
8. **User-experience invariant:** every supported resource opens to a useful,
   honest state; missing engines, unsupported editing, malformed documents, or
   adapter failures do not produce blank viewers or block source/external
   continuation.

Do not approve yet:

- a whole-suite fork or import;
- a managed TeX binary distribution;
- a DOCX, spreadsheet, presentation, rich-editor, or collaboration dependency;
- an Overleaf/ONLYOFFICE/Collabora deployment;
- a final schema or package architecture; or
- a claim of full Office, Overleaf, or multi-platform parity.

## Documentation And Implementation Handoffs

After human review and acceptance:

1. Promote accepted shared architecture into
   `docs/architecture/document-platform.md` rather than leaving architectural
   truth only in this roadmap.
2. Create ADRs only for hard-to-reverse accepted decisions such as authority,
   revision/artifact identity, or a selected preservation engine.
3. Keep detailed source pins and evidence in the focused source map.
4. Keep implementation architecture and contributor guidance in
   `scient-desktop/docs/internals/` once real code exists.
5. Add shipped behavior to `scient-desktop/docs/user/` only after the
   corresponding user-visible capability is implemented and verified.
6. Keep the product roadmap concise: it should sequence outcomes and link here,
   not duplicate this capability inventory.

## Roadmap Completion Criteria

This proposal is ready for an acceptance decision when reviewers agree that:

- the name and product boundary are correct;
- universal opening, computing, evidence/citation, project, and document owners
  are separated clearly;
- the landed LaTeX foundation remains a durable platform consumer rather than
  being replaced by a second build or PDF path;
- file-native and structured-native authority modes cover the intended
  workflows honestly;
- source roles and exclusions are reviewable in the focused source map;
- the stages preserve existing viewer/editor behavior while adding formats;
- the quality gates are strong enough to prevent silent data/fidelity loss;
- open dependency, license, architecture, and product decisions remain visible;
  and
- no proposed capability is described as current implementation.
