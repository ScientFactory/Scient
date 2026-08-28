# File, Resource, And Presentation Foundation

Status: Proposed
Owner: Yaacov
Created: 2026-08-27
Last updated: 2026-08-28
Purpose: Proposes the horizontal identity, resolution, revision, presentation, recovery, and broad-viewing foundation shared by Scient file, document, artifact, and scientific-data surfaces.
Doc type: Planning note

## Document Rules

This document owns the proposed horizontal foundation for opening and keeping
ordinary files useful across chat, the project tree, recent items, generated
artifacts, document workbenches, and scientific viewers. It does not own a
universal editor, a canonical manuscript model, analysis execution, Artifact
Studio composition, or domain-specific scientific semantics.

It coordinates with:

- the [Scientific Document Platform](scientific-document-platform-roadmap.md),
  which owns document editing, typesetting, Office compatibility, manuscripts,
  review, collaboration, and publishing;
- [Scientific Computing And Data Analysis](scientific-computing-and-data-analysis-roadmap.md),
  which owns runtimes, notebooks, datasets, variables, analysis runs, and
  computational provenance;
- [Scientific Artifact Studio](scientific-artifact-studio.md), which owns
  artifact inspection, structured visual composition, operations, provenance,
  and publication export; and
- the accepted [PRD](../product/PRD.md), which governs if this proposal
  conflicts with product truth.

Current implementation behavior belongs in the active
`ScientFactory/scient-desktop` repository. External-source evidence belongs in
the [Scientific Document Platform Source Map](../research/source-evaluations/scientific-document-platform-source-map.md)
and the broader [Open-Source Adaptation Map](../research/source-evaluations/open-source-adaptation-map.md).
Hard-to-reverse architecture becomes an ADR only after explicit acceptance.

### Update Policy

Update this plan when current file behavior, identity/resolution requirements,
presentation quality levels, source evidence, or the implementation sequence
materially changes. Keep proposed contracts conceptual until their focused
implementation or architecture owner fixes exact APIs.

## Decision Summary

Scient should build one owned horizontal foundation for file identity,
resolution, revisions, presentation selection, common viewer behavior, and
recovery. It should **not** build one universal renderer, one universal editor,
or one union that collapses ordinary files, generated documents, analysis
artifacts, and structured manuscripts into false sameness.

The durable direction is:

1. Give an ordinary mutable file a stable logical reference independent of its
   current path.
2. Resolve that reference to a current, authorized location through bounded,
   evidence-based recovery with a human `Locate…` path when certainty is
   insufficient.
3. Route workspace files, direct external files, generated artifacts, and
   future workbench entry points through one static, typed presentation
   registry.
4. Give all presenters a compact shared shell for identity, freshness,
   loading, failure, relocation, retry, save/copy, reveal, and external
   continuation.
5. Provide broad viewing through explicit `Direct`, `Derived`, and `Inspect`
   quality levels before promising rich editing for every format.
6. Keep the original file canonical unless the user deliberately creates or
   adopts another authority. A PDF, HTML, thumbnail, extracted text, or table
   projection remains revision-bound derived presentation.
7. Preserve the current T3 text editor and the Scient PDF, HTML, media,
   LaTeX, analysis, and artifact implementations behind narrow adapters rather
   than replacing or copying them.

This proposal is the foundation for long-term Office, Overleaf-class,
notebook, Artifact Studio, and scientific-format work. It is not temporary
viewer code that those platforms should later remove.

## Current Implementation Truth

The implementation snapshot below was checked on 2026-08-28 against
`ScientFactory/scient-desktop` `origin/main`
`aa23f1d3b96f6904dcc1a114cc33415fa267315a`. It is source evidence, not a claim
that every installed release or platform has identical behavior.

### Foundations Already Present

- A chat-linked absolute file is inspected by the owning environment through a
  typed preparation contract. The server canonicalizes the path, inspects at
  most 64 KiB, and classifies image/SVG, PDF, HTML, Markdown, text, audio,
  video, or binary fallback.
- Direct files have in-app image, PDF, HTML Browser, Markdown, text, media, and
  metadata presentations. HTML supports normal JavaScript and relative local
  assets through a bounded document capability.
- Workspace text/source uses the inherited `@pierre/diffs/editor` surface with
  revision-aware conditional saves, atomic replacement, truncated-save
  refusal, and recoverable external-change behavior.
- Workspace images, PDFs, text, and LaTeX receive exact-file change hints and
  authoritative rereads. Clean content updates automatically; dirty buffers
  require an explicit reload or overwrite decision; manual reload remains a
  recovery action.
- The Scient PDF reader supports ordinary, environment, and generated PDF
  sources while preserving reader state independently of renewable URLs and
  authorizing thread IDs.
- Interactive HTML-to-PDF export, generated-document last-success behavior,
  inline/Markdown mathematics, the LaTeX build loop, and the MATLAB analysis
  runtime are implemented through specialized Scient-owned contracts.

### Current Structural Gaps

- Direct-file surfaces use the absolute path in their durable tab identity;
  workspace file surfaces use the relative path. A rename or move therefore
  changes identity and leaves the old surface unable to recover.
- The direct opener has eight presentation kinds, while workspace preview has
  a separate closed `empty | image | pdf | text` dispatch. The same file can
  therefore receive different capability or fallback behavior depending on
  where it was opened.
- Presenter selection is still encoded in coarse switches. Adding Office,
  notebooks, archives, data, scientific images, and domain formats separately
  to both routes would scale the inconsistency.
- Exact-file watchers refresh a known path; they do not locate a renamed or
  relocated file.
- No shared shell owns the complete missing/moved/unsupported/malformed/
  encrypted/conversion-failed state model across every presenter.
- There is no qualified broad Office, notebook, archive, tabular, or
  domain-format viewing layer yet.

## Product Promise

Opening a supported file should always lead to the best honest state Scient can
provide:

- a faithful direct presentation when a qualified renderer exists;
- a clearly labelled derivative when conversion is the best available view;
- metadata, structure, or safe extracted content when visual fidelity is not
  available;
- an explicit reason and recovery/continuation actions instead of a blank,
  black, corrupt-looking, or permanently loading panel; and
- a stable document experience when the file moves, its asset URL renews, its
  content changes, or the preferred presenter fails.

Viewing, editing, executing, converting, and exporting are separate
capabilities. Opening a notebook must not execute it. Viewing DOCX must not
imply safe Word round-trip editing. An unavailable compiler must not block
source reading. A conversion must not replace the original silently.

## Proposed Foundation Model

```text
Chat / project tree / recent item / artifact / document workbench
                              |
                              v
                        FileReference
                              |
                    bounded location resolver
                              |
                              v
                authorized preparation + revision
                              |
                              v
                   PresentationRegistry
                /          |          \
           Direct       Derived      Inspect
                \          |          /
                              v
                     SharedViewerShell
                              |
             specialist viewer or editor adapter
```

### `FileReference`: Identity Is Not Location

A mutable ordinary file needs a stable generated reference with:

- environment authority and filesystem/provider kind;
- current resolved location and known prior aliases;
- last observed revision evidence such as size, modification time, bounded
  signature, and an optional full content hash when already available or
  deliberately computed;
- optional platform-native identity evidence;
- last known display and containing context; and
- an explicit resolution state and confidence.

The current path remains the authorization and I/O locator. It stops being the
only identity of the user's file. The first implementation should introduce the
reference at the open-surface/session boundary and resolve back to the existing
path-based preparation APIs; it should not replace every lower-level path
parameter with a speculative resource union.

### Bounded Relocation Resolution

Resolution should use ordered evidence:

1. the current path if it still identifies the expected revision lineage;
2. aliases observed by Scient in known project roots;
3. host-native identity evidence when available and still authorized;
4. exact candidates in the workspace, recent roots, and explicitly authorized
   search roots;
5. filename, size, type, bounded signature, Git rename evidence, and optional
   full hash to rank candidates; and
6. a compact `Locate…` choice when one match is not sufficiently certain.

Only a single high-confidence candidate may auto-heal. Ambiguous copies must be
shown to the user. Search must remain bounded to known or explicitly selected
roots—never a silent whole-home or whole-disk scan. A resolved candidate is
re-authorized normally; identity recovery is not an access bypass.

Apple persistent bookmarks and Windows file IDs are useful host adapters, not
the cross-platform model. Linux, remote environments, containers, network
filesystems, copies, and cross-volume moves still require aliases, evidence,
and the explicit `Locate…` recovery path.

### `DocumentSession` And `EditableDocument`

`DocumentSession` coordinates a logical resource across its presentations. It
may retain chosen presenter, page/scroll/zoom, source-versus-preview mode,
selection, and adapter-specific view state. It does not own canonical bytes.

`EditableDocument` is a conditional working lifecycle over an explicitly
editable authority. It adds loaded revision, completeness, encoding, line
endings, dirty buffer, undo state, recoverable draft, conditional atomic save,
external-change conflict, and close/quit behavior. The current T3 editor should
remain the first text/source adapter.

### Static Presentation Registry

Begin with a typed, compile-time registry—not a plugin marketplace. Each
presenter declares:

- format match evidence and confidence;
- supported surfaces and actions;
- required source capability: bounded bytes, text, range reads, authorized
  URL, directory grant, or host-side derivative;
- authority and editability: authoritative, projected, generated, read-only,
  constrained, or unsupported;
- size, platform, environment, runtime, and interactivity limits;
- loading, stale, malformed, encrypted, unsupported, and failure behavior;
- deterministic fallback and external continuation; and
- the fixtures and quality gate required for activation.

Selection must be deterministic and observable. A preferred presenter may fail
over to another registered view, but Scient must not silently switch authority
or imply fidelity the fallback does not provide.

### Shared Viewer Shell

The shell should provide only genuinely shared behavior:

- stable, direction-aware title and current/last-known location;
- type, size, revision/freshness, authority, and presentation quality;
- loading, ready, stale, locating, moved, missing, unsupported, malformed,
  encrypted, conversion-warning, and adapter-failure states;
- retry/refresh, locate, reveal, copy path, save/download a copy, and
  capability-driven `Open With`;
- last-success preservation while refreshing, resolving, rebuilding, or
  reconverting; and
- view-state retention across renewable URLs, remounts, and presentation
  changes where semantics match.

Manual refresh remains valuable as explicit recovery even when automatic
watching works. It belongs in the shell's action area at the same scale and
placement as other document actions, not as an ad hoc control inside content.

### Keep Authority Families Distinct

| Record | Authority and lifecycle |
|---|---|
| `FileReference` | Mutable ordinary file with stable identity and resolvable current location. |
| `DocumentSession` | Presentation/editor coordination and view state; never canonical bytes. |
| `EditableDocument` | Conditional working state over a file or deliberately structured authority. |
| `GeneratedDocumentArtifact` | Immutable successful document revision and producer binding. |
| `AnalysisArtifact` | Run-owned output with representation, provenance, and staleness semantics. |
| Studio composition | Structured visual arrangement referencing artifact revisions and operations. |
| Structured manuscript | Future Scient-native scholarly authority with semantic identities, projections, history, and reconciliation. |

These records may share references, presentation descriptors, capabilities,
and shell actions. They must not share one unstructured lifecycle union.

## Presentation Quality Levels

- **Direct** — the presenter reads the original source and passes its fidelity,
  performance, accessibility, and failure fixtures.
- **Derived** — Scient produces a revision-bound read-only representation and
  records the converter, source revision, warnings, losses, and freshness.
- **Inspect** — Scient shows metadata, structure, safe extracted content, and
  useful continuation when faithful visual presentation is unavailable.

Every surface should expose the active level. Extraction is valuable for
search and agents, but extracted Markdown or text is not visual or round-trip
truth. Derived content is cached outside source directories by default and is
invalidated by source revision.

## Coverage Direction

| Family | Near-term best view | Longer-term owner |
|---|---|---|
| Text, source, Markdown, HTML, SVG, common images, audio, video, PDF | Unify current direct views without reducing quality | Shared foundation plus specialist current adapters |
| DOCX | Qualified direct visual view plus separate semantic/extracted view; optional PDF derivative | Scientific Document Platform preservation/editor lane |
| XLSX/XLS/ODS | PDF derivative for broad layout plus bounded typed table/sheet inspection | Document Platform and Computing data/table owners |
| PPTX/PPT/ODP | PDF derivative and slide metadata/thumbnails | Document Platform presentation lane |
| RTF and legacy Office | PDF/text derivative with explicit converter receipt | Document Platform compatibility lane |
| CSV, TSV, JSON, NDJSON | Bounded direct table/tree; worker/host streaming for larger inputs | Computing data viewer |
| Parquet and Arrow | Typed, lazy table view after engine proof | Computing data viewer |
| Jupyter notebooks | Read-only cells, Markdown, and stored outputs; never run on open | Computing notebook lane |
| ZIP and common archives | Member tree and metadata without automatic extraction | Shared foundation |
| HEIC, TIFF, EPS, and uncommon media | Native/qualified direct renderer or labelled derivative | Shared or Artifact Studio adapter |
| HDF5, NetCDF, DICOM, NIfTI, NWB, microscopy, molecules, geospatial, 3D | Metadata first, then specialist registered viewers | Domain interoperability packs |
| Unknown, encrypted, damaged, or oversized | Inspect state with exact reason and external continuation | Shared foundation |

The goal is strong coverage of researcher-relevant families, not the false
claim that every arbitrary binary can be rendered faithfully.

## Source Strategy

- Preserve Chromium, PDF.js, current Scient presenters, and the T3 editor as
  the current host foundation.
- Adapt JupyterLab's document registry, model/context, renderer factory, and
  `Open With` responsibilities as design patterns; do not embed JupyterLab.
- Treat Flyfish as a broad-viewer qualification candidate, not a replacement
  for Scient identity, lifecycle, shell, or specialist engines.
- Compare `docx-preview` for visual DOCX and Mammoth for semantic extraction,
  while evaluating GenOffice, EigenPal open core, Docxodus, Sobree, and
  BetterOffice against one scientific DOCX preservation corpus.
- Use LibreOffice as an optional host conversion provider and compatibility
  oracle first. A tiled-kit or hosted-suite integration requires a separate
  operations and product decision.
- Treat ONLYOFFICE and Collabora as compatibility/service references, not the
  local desktop core.
- Evaluate DuckDB-Wasm and Perspective behind a Computing-owned data-viewer
  contract rather than inside the generic viewer shell.
- Use H5Web, OHIF, VolView, and similar projects as domain-adapter candidates;
  no domain viewer becomes the universal foundation.

Small wrappers that compose the same libraries may supply fixture or UX ideas,
but extension counts and screenshots are not fidelity evidence.

## Ordered Implementation Roadmap

Each slice is permanent foundation work and should be independently useful.

### Stage 0 — Preserve And Describe Current Truth

Current direct opening, workspace editing, exact-file freshness, PDF,
interactive HTML, HTML-to-PDF, math, LaTeX, and MATLAB behavior is the baseline.
Keep regression coverage and implementation documentation current while the
new seams are added.

### Stage 1 — Durable File Reference And Relocation Recovery

- Add a versioned file-reference record and resolver in Scient-owned code.
- Migrate open file surfaces to reference identity while accepting old
  path-based descriptors during a bounded compatibility period.
- Record current location and Scient-observed aliases.
- Add bounded known-root resolution and a compact `Locate…` flow.
- Preserve last-success content and view state while missing or relocating.
- Add host-native identity adapters only as optional acceleration.

Exit: project renames/moves retain the open surface; missing and cross-root
moves recover or ask; ambiguous copies are never chosen silently; identical
paths in different environment authorities remain isolated; remote, offline,
permission-loss, delete/recreate, case-only rename, symlink, copy, Git rename,
and restart fixtures pass.

### Stage 2 — Shared Registry And Viewer Shell

- Route direct and workspace files through one preparation/presentation
  decision.
- Register the existing editor, image, PDF, Markdown, HTML, text, media,
  LaTeX, and binary presenters.
- Move only shared states and actions into the shell.
- Add range/URL/directory/derivative source capabilities without giving
  renderers unrestricted filesystem paths.

Exit: existing formats do not regress in fidelity, interaction, RTL, links,
selection, refresh, editing, or state retention; every entry point selects the
same presentation; adapter failure falls back without blanking; a fixture
presenter can be added without another top-level switch or click handler.

### Stage 3 — Qualitative Common-Format Viewing

Ship a coherent read-only milestone:

- DOCX visual and semantic modes;
- optional LibreOffice-derived PDF for Office/ODF/RTF;
- read-only notebook view;
- ZIP member inspection using the existing archive dependency; and
- bounded CSV/TSV/JSON table/tree views.

Conversion must be cancellable, atomic, revision-bound, cached, and recoverable
after failure. No child converter may outlive its owned job. Every unsupported,
encrypted, malformed, or oversized case retains Inspect and `Open With`.

### Stage 4 — Scientific Data And Domain Presenters

Add Parquet/Arrow and then domain formats in evidence-backed researcher-value
order. Coordinate with Computing and domain owners so presenters reuse future
data models rather than creating viewer-only dead ends.

### Stage 5 — Editing And Authoring Depth

Advance format-specific editing only through the shared conditional document
lifecycle:

- preserve current source/code editing;
- qualify one OOXML-native DOCX lane without promising unsupported fidelity;
- add structured-native scholarly editing after its manuscript fixture;
- treat spreadsheets and presentations as separate authority/adapters; and
- attach comments, suggestions, history, collaboration, and publishing to
  stable identities rather than editor-private state.

## Quality And Fixture Contract

Every presenter needs fixtures for:

- correct, misleading, absent, and signature-only format evidence;
- empty, truncated, corrupt, encrypted, unsupported, and boundary-size input;
- Unicode filenames/content, mixed direction, and full RTL;
- selectable/copyable text and functional links where the format supports it;
- fonts, equations, charts, tables, embedded media, nested containers, local
  assets, and missing resources as applicable;
- refresh, external modification, rename, move, delete/recreate, restart, and
  last-success behavior;
- direct, derived, inspect, and external-continuation states; and
- keyboard, screen reader, zoom, theme, high contrast, and responsive layout.

Visual comparison is necessary but insufficient. Assert text order, link
targets, page/sheet/slide counts, formula values where supported, table
structure, accessibility names, and explicit feature-loss receipts.

Performance evidence should include cold/warm open, peak memory, interaction
latency, cancellation, and large-file behavior. Classification stays bounded;
heavy engines lazy-load; large content uses range reads, workers, or host-side
streaming instead of whole-file renderer IPC. Derivative caches require
size/count bounds, atomic publication, failed-temporary cleanup, and protection
for open/referenced results.

## T3 Upstream Separation

Keep new identity, resolution, presenter, and shell behavior in Scient-owned
packages and `apps/*/src/scient`. The intended inherited seams are:

1. existing file-click/open dispatch;
2. one registration/mount point from the workspace file panel;
3. the existing T3 editor as an editable-text adapter; and
4. existing right-panel tab/shell lifecycle.

Do not transplant the registry into several inherited switches, fork the
editor, or make T3 relative-path state the new durable identity. Each slice
should name its inherited seams and protect them with a focused verifier so an
upstream merge cannot silently remove Scient behavior.

## Open Decisions And Gates

- exact storage owner, schema, and migration for `FileReference`;
- alias retention and privacy boundary;
- confidence thresholds and full-hash policy;
- native bookmark/file-ID adapters and platform packaging;
- shared preparation/presenter contract names and package boundaries;
- derivative cache location, retention, and receipts;
- the first broad-viewer composition after common-corpus evidence;
- DOCX visual, semantic, preservation, and editor providers;
- LibreOffice discovery, process isolation, packaging, and user consent;
- data-viewer engine and large-file budgets; and
- the first domain pack selected by a real scientific workflow.

No dependency or host service is approved by this proposal. A focused ADR for
file identity versus location should be created only after explicit acceptance
of that hard-to-reverse decision.

## Approval Proposal

Approve for focused architecture and implementation planning:

1. one horizontal identity/resolution/presentation foundation;
2. `FileReference` identity independent of current location;
3. bounded high-confidence repair plus explicit `Locate…`;
4. a static typed presentation registry and compact shared shell;
5. `Direct`, `Derived`, and `Inspect` quality levels;
6. original-source authority and truthful derivative receipts;
7. distinct ordinary-file, session, editable-document, generated-document,
   analysis-artifact, Studio-composition, and manuscript lifecycles;
8. relocation recovery before broad new formats;
9. broad viewing before broad editing; and
10. narrow T3 mounts with Scient-owned implementations.

Do not yet approve an exact schema, a renderer or Office engine, a LibreOffice
distribution, a plugin marketplace, a whole-product fork, or an unrestricted
filesystem search.

## Completion Criteria

This proposal is ready for an architecture decision when reviewers agree that
it solves moved-file recovery without confusing identity and authorization,
keeps current quality intact, gives new presenters one scalable seam, preserves
authority and conversion truth, supports the long-term document/computing/
artifact plans, and leaves all dependency and irreversible schema choices
behind explicit evidence gates.
