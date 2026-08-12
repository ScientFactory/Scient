# Scientific Document Platform Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-08-12
Last updated: 2026-08-12
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
code in `ScientFactory/scient-desktop-next`.

The [Scientific Computing And Data Analysis Roadmap](scientific-computing-and-data-analysis-roadmap.md)
is a sibling plan. It owns analysis runtimes, notebooks, datasets, variables,
analysis runs, and computational figures. The two plans must share document,
project-resolution, execution, diagnostics, and artifact foundations without
merging `DocumentBuild` and `AnalysisRun` into one ambiguous record.

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

1. Preserve one universal resource-opening path. The separate universal-opener
   work resolves a click or path into an openable resource; this platform owns
   what happens after resolution.
2. Replace format-specific preview branching with a document-session and
   surface-adapter boundary that can grow across formats.
3. Add inline and display mathematics to chat and Markdown independently from
   full document compilation.
4. Use a universal LaTeX opener as the first complete build-oriented vertical
   slice: immediate source, root discovery, compilation, diagnostics, log, and
   retained PDF preview.
5. Reuse and generalize Scient's existing PDF reader for generated artifacts
   rather than creating a LaTeX-specific PDF surface.
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
10. Grow the first LaTeX work into serious authoring, citations and evidence,
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
| Resolve a chat link, Files-tree entry, search result, or arbitrary supported local path | Universal file-opening work | Produces one bounded openable resource. This platform must consume it rather than add competing click handlers or path rules. |
| File/document viewing, editing, builds, Office compatibility, manuscripts, review, and publishing | This roadmap | Owns the document lifecycle after resource resolution. |
| Python, R, MATLAB, notebooks, datasets, variables, analysis runs, and computational provenance | [Scientific Computing And Data Analysis](scientific-computing-and-data-analysis-roadmap.md) | Shares editors, project resolution, execution events, diagnostics, and artifacts while preserving analysis-specific semantics. |
| Sources, reading, extraction, evidence, claims, and citation meaning | PRD source/evidence areas and future focused plans | Supplies structured references, evidence links, source regions, and claim relationships to manuscripts. |
| Figures and tables | Computing/artifact and manuscript areas jointly | A figure/table may be an analysis artifact, editable document object, and manuscript projection without becoming three unrelated copies. |
| Project identity, storage, sync, authorization, and recovery | Future focused architecture and accepted project/collaboration decisions | The document platform consumes these contracts and must not invent a private project or permission model. |
| Domain data such as DICOM, NIfTI, NWB, microscopy, molecules, and very large scientific arrays | Domain interoperability packs | May use the universal viewer shell and artifact identities but should not be forced into a manuscript representation. |

## Current Scient Desktop Next Baseline

This snapshot was inspected on 2026-08-12 at
`ScientFactory/scient-desktop-next` `origin/main`
`cf4cfdab38289968336c147e7226eb2838519c77`. It is implementation evidence,
not a promise that every installed or future release has the same state.

### Foundations To Preserve

- The thread-scoped right panel already owns ordered file, browser, terminal,
  diff, and related surface descriptors. File surfaces have stable identities
  based on their relative paths.
- The Files panel already edits ordinary text through the inherited
  `@pierre/diffs/editor` integration and renders Markdown through the shared
  chat Markdown component.
- Image extensions include SVG and use exact workspace-file asset URLs with
  explicit loading and failure states.
- Scient owns a PDF.js reader with search, outline, thumbnails, passwords,
  exact short-lived asset capabilities, byte ranges, and revision-aware
  renewal.
- The server has typed contracts, workspace-root file services, signed asset
  transport, and a bounded generic process runner.
- Existing file-opening paths converge substantially on the Files/right-panel
  surface, giving the platform a useful host seam.

### Gaps The Platform Must Address

- File-preview dispatch is a closed `empty | image | pdf | text` union. HTML
  is known to the shared preview-extension helper but is not a first-class
  Files-panel kind.
- Binary Office formats and other unsupported binary files fall into the text
  path and are rejected rather than routed through a capability registry.
- Text reads are capped at 1 MiB and report truncation; saving or editing a
  partial read must never overwrite the complete file.
- File writes replace text without an expected-revision/conditional-write
  contract, leaving external-edit and concurrent-save behavior incomplete for
  serious document editing.
- Chat Markdown uses GFM, raw HTML, sanitization, syntax highlighting, and bidi
  handling, but no math parser or renderer is configured.
- The PDF reader requests a workspace-file asset by path. Generated build
  output needs a generic PDF/artifact source instead of pretending to be an
  ordinary source file.
- The process runner supplies useful timeout and output-bound mechanics but is
  not a document-build manager with streaming events, cancellation,
  supersession, dependency tracking, diagnostics, and last-success semantics.
- There is no LaTeX root resolver, typesetting engine adapter, language-service
  lifecycle, SyncTeX support, Office engine, rich manuscript model, or
  document collaboration/history model.

Relevant pinned implementation evidence:

- [file preview dispatch](https://github.com/ScientFactory/scient-desktop-next/blob/cf4cfdab38289968336c147e7226eb2838519c77/apps/web/src/components/files/filePreviewMode.ts)
- [Files-panel host](https://github.com/ScientFactory/scient-desktop-next/blob/cf4cfdab38289968336c147e7226eb2838519c77/apps/web/src/components/files/FilePreviewPanel.tsx)
- [right-panel surfaces](https://github.com/ScientFactory/scient-desktop-next/blob/cf4cfdab38289968336c147e7226eb2838519c77/apps/web/src/rightPanelStore.ts)
- [chat Markdown](https://github.com/ScientFactory/scient-desktop-next/blob/cf4cfdab38289968336c147e7226eb2838519c77/apps/web/src/components/ChatMarkdown.tsx)
- [workspace file service](https://github.com/ScientFactory/scient-desktop-next/blob/cf4cfdab38289968336c147e7226eb2838519c77/apps/server/src/workspace/WorkspaceFileSystem.ts)
- [process runner](https://github.com/ScientFactory/scient-desktop-next/blob/cf4cfdab38289968336c147e7226eb2838519c77/apps/server/src/processRunner.ts)
- [Scient PDF reader boundary](https://github.com/ScientFactory/scient-desktop-next/blob/cf4cfdab38289968336c147e7226eb2838519c77/docs/internals/scient-pdf-reader.md)

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

This platform consumes the universal opener's resource and owns a coherent
viewer shell with:

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

Add a Markdown math syntax plugin and a bundled/self-hosted renderer. The first
candidate is `remark-math` plus KaTeX; MathJax is a fallback candidate only if
the fixture corpus demonstrates required TeX or MathML coverage that KaTeX
cannot provide acceptably.

Required behavior includes inline and display math, streaming stability,
copyable raw TeX, code/dollar disambiguation, malformed expressions, unsupported
commands, keyboard and screen-reader behavior, light/dark themes, and mixed
RTL/LTR content. This work does not require or substitute for a PDF compiler.

### 3. Universal Typesetting Opener

The first LaTeX slice should:

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
10. Add forward/inverse source-PDF navigation later through reviewed SyncTeX
    support and durable anchors.

Root evidence should consider a prior explicit project choice, root magic
comments, project configuration, document-root markers, bounded reverse
dependency discovery, and an explicit chooser when ambiguity remains.

Tectonic is the leading managed low-setup candidate. Installed `latexmk`, TeX
Live, MacTeX, BasicTeX, MiKTeX, XeLaTeX, and LuaLaTeX paths remain important for
real project compatibility. Typst is a peer adapter. Quarto/Pandoc builds
compose with analysis receipts but must not become the only route to every
typesetting engine.

### 4. Broad View-Only Document Coverage

Add a binary-document gateway and view adapters for common Office/OpenDocument,
ebook, archive, media, and scientific artifact formats as evidence justifies.
Flyfish is a candidate for a bounded broad-viewer proof. AnyDoc may supply
derived text for search and agents but cannot prove visual fidelity.

Every adapter needs malformed, encrypted, missing-resource, oversized,
unsupported-feature, cancellation, crash, and fallback tests. The platform
must remain useful when an optional viewer is absent or fails.

### 5. DOCX Compatibility Editing

Run GenOffice's DOCX engine path, EigenPal's open core, and Sobree through one
frozen scientific-DOCX harness. The provisional preference is GenOffice's
original-package preservation and dirty-region patching approach, but no
engine is selected.

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

Tiptap/ProseMirror is the default candidate because it aligns with the
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
| T3-derived Scient Desktop Next | Host shell, right-panel/file workflow, typed RPC, assets, process substrate | Preserve and extend through narrow Scient-owned seams. |
| Scient PDF reader / PDF.js | Shared PDF and generated-artifact preview | Adopted current implementation; generalize its source boundary. |
| `remark-math` + KaTeX | Chat and Markdown inline/display math | First bounded dependency proof. |
| LaTeX Workshop | Root discovery, recipes, dependency watching, build and SyncTeX workflow reference | Adapt algorithms and UX behind Scient contracts; do not embed the VS Code extension. |
| Tectonic | Managed local typesetting-engine candidate | Prototype; not approved for bundling. |
| installed TeX / `latexmk` | Existing-project compatibility | Required adapter family; platform discovery matrix remains open. |
| TexLab | LaTeX language-service candidate | External process candidate subject to GPL/distribution/lifecycle review. |
| Overleaf | Full product capability and service-separation reference | Reference/compatibility first; deeper integration requires a separate ADR. |
| Tiptap/ProseMirror | Structured manuscript visual projection | Default prototype candidate, not manuscript truth. |
| Plate and Lexical | Rich-editor challengers and UX/performance sources | Same-fixture prototype before selection. |
| GenOffice | Original-OOXML preservation and DOCX/XLSX/PPTX engine concepts | Primary Office-format donor/baseline; never adopt the whole suite. |
| EigenPal open core / Sobree | DOCX engine challengers | Same-corpus comparison; commercial EigenPal packages excluded. |
| BetterOffice | Shared Rust/Wasm OOXML engine direction | Watch/revisit; too early for foundation selection. |
| Univer | Embedded spreadsheet surface/formula ecosystem | Later prototype; open core is not XLSX preservation authority. |
| Flyfish | Broad browser-native view-only coverage | Fixture-gated viewer candidate. |
| ONLYOFFICE / Collabora / LibreOffice / Microsoft Office | Mature suite behavior and compatibility | Reopen/visual/conversion oracles; optional isolated service only after separate decision. |
| Quarto/Pandoc | Multi-format publishing and executable-document adapter | Primary export prototype, not the canonical Scient model. |
| MyST / Stencila | Publishing challenger and semantic/provenance references | Compare against owned contracts; do not adopt as core prematurely. |
| Yjs/Hocuspocus / Automerge / ShareDB | Collaboration-engine candidates | Bounded prototypes; never project authorization or complete history. |
| AnyDoc and peer extractors | Derived searchable/agent-readable text | Extraction only; never viewing or round-trip fidelity authority. |

## Ordered Implementation Roadmap

These are dependency stages, not release dates. A later stage may be
researched in parallel, but it must not freeze a conflicting foundation before
the earlier contract is proven.

### Stage 0 — Correct And Generalize Current File Handling

- Preserve existing Markdown, image, SVG, PDF, browser, diff, and external-open
  behavior with regression tests.
- Ensure binary/unsupported files route to a useful state rather than the text
  reader failure path.
- Separate resource resolution from document-surface selection.
- Introduce the format/surface registry seam.
- Add conditional writes, external-change conflicts, and truncated-file save
  protection before serious editing expands.
- Generalize asset/PDF sources for generated artifacts.

### Stage 1 — Chat And Markdown Math

- Integrate the selected math syntax/renderer through the existing Markdown and
  bidi pipeline.
- Complete streaming, malformed-input, copy, accessibility, theme, and RTL
  fixtures.
- Keep code and literal-dollar behavior stable.

### Stage 2 — First Universal LaTeX Build Loop

- Add root/project resolver and typesetting adapter contracts.
- Prove Tectonic and at least one installed-TeX/`latexmk` route.
- Implement source, preview, problems, log, cancel/supersede, and last-success
  behavior.
- Reuse the generalized Scient PDF reader.
- Add platform fixtures and missing-engine/package recovery.

### Stage 3 — Broad View-Only Coverage

- Establish the binary-document gateway.
- Run Flyfish and any alternatives against one frozen viewer corpus.
- Add honest fallbacks for Office and other common formats.
- Keep extraction/search separate from the visual result.

### Stage 4 — Document Kernel And DOCX Preservation Proof

- Formalize document identity, authority, revisions, anchors, projections,
  conversions, artifacts, and fidelity receipts based on evidence from Stages
  0-3.
- Benchmark GenOffice, EigenPal open core, and Sobree in the same host and
  corpus.
- Select or reject an engine only after Word/LibreOffice and loss-accounting
  gates pass.

### Stage 5 — Serious Structured Manuscript Authoring

- Run the Tiptap/Plate/Lexical common fixture.
- Establish stable scientific nodes and source/projection mapping.
- Integrate citations/evidence, equations, figures, tables, cross-references,
  metadata, manual edits, and reviewable agent proposals.
- Prove deterministic export through at least one source/publishing adapter.

### Stage 6 — Review, Durable History, And Recovery

- Add anchored comments, suggestions, tracked changes, mentions, assignments,
  comparisons, milestones, snapshots, deleted-file recovery, and restore.
- Use the same proposal lifecycle for humans and agents.
- Keep history portable and independent from an editor engine.

### Stage 7 — Realtime And Local-First Collaboration

- Prototype Yjs/Hocuspocus and challengers behind one collaboration adapter.
- Test offline edits, reconnect, attribution, conflicts, migration, revocation,
  ownership transfer, large assets, and restore.
- Connect to project identity and authorization rather than embedding policy in
  the collaboration document.

### Stage 8 — Publishing And Ecosystem

- Add publication profiles/templates, metadata/style checks, richer
  Quarto/Pandoc/MyST/LaTeX/Typst/DOCX/JATS exports, submission/deposit packages,
  reference-manager and Git continuity, and receipts.
- Decide any deeper Overleaf relationship only after a dedicated product,
  source, license, operations, migration, and local-first comparison.

### Stage 9 — Spreadsheet And Presentation Depth

- Begin only after shared `Dataset`, `Table`, `Figure`, `Artifact`, and
  publication contracts are stable enough to prevent Office formats from
  becoming accidental scientific truth.
- Prove view, no-op preservation, narrow edits, recalculation/layout behavior,
  external reopen, and platform performance separately for XLSX and PPTX.

### Stage 10 — Institution And Integrated Scientific Intelligence

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
- the universal-opener handoff for external absolute files and sibling assets;
- the conditional-write, recovery-draft, merge, and external-change contract;
- `DocumentBuild` and `AnalysisRun` shared base without semantic collapse;
- Tectonic bundling versus discovery-only and the installed-TeX support matrix;
- root-choice persistence/invalidation and output-directory defaults;
- TexLab lifecycle, GPL boundary, and platform distribution;
- the first SyncTeX milestone;
- KaTeX acceptance or evidence for a MathJax fallback;
- the broad viewer selected after fixture comparison;
- the DOCX engine selected after the GenOffice/EigenPal/Sobree corpus;
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
3. **First implementation order:** current file truth and registry, chat math,
   then the universal LaTeX build loop using the existing PDF reader.
4. **Durable foundation:** resource/session identity, explicit authority,
   revisions and conditional saves, registered surfaces/adapters, generic
   artifacts, specialized document builds, and fidelity receipts.
5. **Office posture:** GenOffice as the provisional primary donor/baseline;
   EigenPal open core and Sobree as genuine DOCX challengers; no dependency
   selection before the frozen compatibility corpus passes.
6. **Manuscript posture:** Tiptap/ProseMirror as the default visual-editor
   candidate, Plate and Lexical as required challengers, and a Scient-owned
   structured manuscript model rather than editor state as accidental truth.
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
   `scient-desktop-next/docs/internals/` once real code exists.
5. Add shipped behavior to `scient-desktop-next/docs/user/` only after the
   corresponding user-visible capability is implemented and verified.
6. Keep the product roadmap concise: it should sequence outcomes and link here,
   not duplicate this capability inventory.

## Roadmap Completion Criteria

This proposal is ready for an acceptance decision when reviewers agree that:

- the name and product boundary are correct;
- universal opening, computing, evidence/citation, project, and document owners
  are separated clearly;
- the first LaTeX work is a durable platform consumer rather than throwaway UI;
- file-native and structured-native authority modes cover the intended
  workflows honestly;
- source roles and exclusions are reviewable in the focused source map;
- the stages preserve existing viewer/editor behavior while adding formats;
- the quality gates are strong enough to prevent silent data/fidelity loss;
- open dependency, license, architecture, and product decisions remain visible;
  and
- no proposed capability is described as current implementation.
