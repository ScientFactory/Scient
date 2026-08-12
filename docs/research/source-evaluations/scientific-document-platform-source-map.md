# Scientific Document Platform Source Map

Status: Proposed
Owner: Yaacov
Created: 2026-08-12
Last updated: 2026-08-12
Purpose: Records the inspected external sources, pinned evidence, candidate roles, exclusions, and acceptance gates that inform Scient's proposed Scientific Document Platform.
Doc type: Research evidence

## Document Rules

This document owns focused external-source evidence for document viewing,
mathematics, typesetting, Office interoperability, manuscript authoring,
publishing, and document collaboration. The
[Scientific Document Platform Roadmap](../../planning/scientific-document-platform-roadmap.md)
owns the integrated proposal and delivery order. The broader
[Open-Source Adaptation Map](open-source-adaptation-map.md) owns the
portfolio-wide view across all Scient product areas.

This file does not approve dependencies, architecture, a fork, a hosted
service, or product truth. Repository claims, test counts, demos, and licenses
are evidence to verify, not acceptance. Only source and subdirectories whose
license and dependency closure have been reviewed may enter an implementation
candidate.

### Update Policy

Update a row when its inspected source revision, license boundary, relevant
architecture, commercial/open split, maintenance state, or Scient disposition
materially changes. Preserve the earlier verified revision when the current
head has not passed equivalent tests. Record implementation proof in a dated
spike or fixture report and promote accepted decisions into architecture.

## Evidence State

This focused map was assembled from earlier Scient source evaluations and a
fresh upstream check on 2026-08-12. Principal upstream `HEAD` revisions were
resolved directly from the official Git repositories on that date. A current
pin means the source location was refreshed; it does **not** mean Scient built,
tested, visually compared, packaged, or accepted that revision.

Repository-backed rows should record an exact inspected revision. Use the
literal token `pin: pending` only when a relevant repository has been
identified but its revision has not yet been refreshed; do not hide missing
evidence in prose such as "pin later." Non-repository products, official
documentation, installed tool families, and compatibility oracles should name
the dated evidence appropriate to them rather than invent a Git pin.

GenOffice is the clearest example. Earlier Scient work deeply exercised an
older revision and inspected its preservation paths, but the current head has
moved substantially. The current head is useful for continued evaluation and
must not inherit the older revision's test evidence automatically.

## Source-Disposition Vocabulary

| Disposition | Meaning |
|---|---|
| `current-host` | Existing Scient/T3-derived implementation to preserve or extend through owned seams. |
| `dependency-candidate` | A bounded package or binary may be selected after license, fixture, packaging, update, and rollback gates. |
| `adapter-candidate` | An external engine/service may sit behind a Scient-owned contract and remain replaceable. |
| `component-donor` | A bounded implementation or algorithm may be extracted, adapted, or maintained with attribution after review. |
| `behavior-reference` | Study UX, lifecycle, contracts, and failure behavior without taking the implementation. |
| `compatibility-oracle` | Use the system to reopen, render, convert, or compare outputs; it is not Scient's engine. |
| `watch` | Promising but too immature, unstable, incomplete, or weakly evidenced for current selection. |
| `excluded` | Does not meet the current open-source, license, product, fidelity, or architectural boundary. |

## Current Host And Viewer Foundation

| Source | Evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [Scient Desktop Next](https://github.com/ScientFactory/scient-desktop-next) | Inspected `origin/main` `cf4cfdab38289968336c147e7226eb2838519c77` on 2026-08-12. T3-derived Electron/web/server/mobile host with typed contracts, right-panel surfaces, file editing, assets, browser, terminal, and process substrate. | Keep one app shell and extend narrow file/surface/asset/process seams rather than importing a second office or typesetting shell. | Current file dispatch is narrow; generic document sessions, conditional saves, typesetting, Office engines, and manuscript semantics are not implemented. Inherited T3 behavior is implementation substrate, not Scient scientific authority. | `current-host` |
| [Scient PDF reader](https://github.com/ScientFactory/scient-desktop-next/blob/cf4cfdab38289968336c147e7226eb2838519c77/docs/internals/scient-pdf-reader.md) using [PDF.js](https://github.com/mozilla/pdf.js) | Scient-owned reader at the host pin uses `pdfjs-dist` `6.2.108` and already routes workspace PDFs through exact assets; its current internal doc records byte ranges, revision renewal, search, outline, passwords, virtualization, and local support assets. PDF.js is Apache-2.0; upstream head checked `c8fbf33e095945890b4a6699c87becd8603713ee`. | Shared PDF preview for ordinary files and generated LaTeX/Quarto/Typst/manuscript artifacts after its source boundary is generalized. | The installed package version, not a newer upstream head, is current implementation authority. The reader is workspace-path-shaped and does not define Scient annotations, OCR, document identity, or build artifacts. | `current-host` |
| [Flyfish File Viewer](https://github.com/flyfish-dev/file-viewer) | Current head `5e2f1db6aed15b0b1519114ad146f14b4a3842b0`; Apache-2.0 repository; project describes browser-native preview across many file extensions and pipelines. | Candidate for fast broad view-only coverage inside Scient's viewer shell. | Project claims and extension counts are not fidelity evidence. It is not a professional Office editor or preservation engine. Needs malformed/encrypted/large/RTL/Office fixture proof and fallback behavior. | `adapter-candidate` |

## PDF Production And Rendering

This lane produces visual PDF artifacts from browser surfaces and controlled
Scient content. It is distinct from opening an existing PDF, compiling LaTeX
or Typst, and performing semantic multi-format publishing. All successful
routes should return the shared PDF/artifact reference and a rendering or
conversion receipt rather than establish their own PDF identity.

| Source | Current pin or evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [Electron/Chromium `webContents.printToPDF`](https://www.electronjs.org/docs/latest/api/web-contents/#contentsprinttopdfoptions) | Scient Desktop Next at the host pin uses Electron `41.5.0`. The official API returns PDF bytes from a `webContents` and supports paper size, margins, page ranges, backgrounds, CSS page size, headers/footers, and experimental tagged-PDF/outline options. | First implementation route for visual export of browser surfaces and controlled Scient-rendered content without adding another runtime. | Chromium output is visual rendering, not semantic document export or proof of PDF/UA. Pagination, fonts, backgrounds, links, RTL, long content, deterministic readiness for controlled content, bounded readiness and recorded unresolved resources for browser surfaces, cancellation, and platform output require a frozen corpus. Arbitrary local HTML viewing must not silently become an executing export job. | `current-host` capability; first proof route |
| [Paged.js](https://github.com/pagedjs/pagedjs) | Current head `6b0ff8089f472a17247e44671da93d2d931e656e`; MIT repository. It paginates HTML in the browser around CSS Paged Media behavior. | Challenger for advanced paged layouts, running content, margin boxes, footnotes, and print-oriented previews when native Chromium output is insufficient. | Adds a DOM transformation/runtime and another readiness/failure surface. It must beat controlled Chromium output on Scient fixtures before adoption. | `watch` and challenger |
| [WeasyPrint](https://github.com/Kozea/WeasyPrint) | Current head `df7201d12012f4b12813f6846b787daab20cc49f`; BSD-3-Clause repository with a Python HTML/CSS pagination and PDF engine. | Challenger for server/headless controlled-document rendering where a non-Chromium engine materially improves paged-media output. | Adds Python and native-library packaging, font, platform, update, and parity costs. It does not execute JavaScript like a browser and is not the first desktop route. | `watch` and remote/headless adapter challenger |
| [Vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js) | Current head `832110cd634c8f56b54d7924cd71365aeeb714c8`; root AGPL-3.0 repository with paged-media core and viewer packages. | Behavior and fixture reference for sophisticated CSS typesetting, paginated preview, books, and web publications; later challenger if its capability materially exceeds lighter routes. | License/component closure, viewer coupling, JavaScript execution, packaging, and integration cost require focused review before any code use. Do not import its viewer as a second Scient shell. | `behavior-reference`; challenger only after license review |
| [wkhtmltopdf](https://github.com/wkhtmltopdf/wkhtmltopdf) | Head `024b2b2bb459dd904d15b911d04c6df4ff2c9031`; LGPL-3.0 repository archived and read-only since 2023, based on the older Qt WebKit path. | Historical compatibility evidence only. | Archived browser foundation and separate packaging burden do not justify a new Scient production dependency. | `excluded` |

## Chat And Markdown Mathematics

| Source | Evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [`remark-math`](https://github.com/remarkjs/remark-math) | Current head `76c14978ff6805011b8c56727c54104a511b9055`; MIT repository in the unified/remark ecosystem, designed to feed renderers such as KaTeX or MathJax. | Parse inline/display math through the existing ReactMarkdown pipeline without invoking a compiler. | Syntax integration must preserve existing GFM, raw/sanitize, code, clipboard, streaming, and bidi behavior. | `dependency-candidate` |
| [KaTeX](https://github.com/KaTeX/KaTeX) | Current head `a6646b2436929dc014bc4946d52b28781a5046e9`; MIT, browser-oriented, bundle/self-host capable, fast synchronous rendering. | First renderer candidate for chat and Markdown math. | Not a complete TeX engine; unsupported commands/macros and accessibility behavior need fixtures. Do not fetch runtime assets from a CDN by default. | `dependency-candidate` |
| [MathJax](https://github.com/mathjax/MathJax-src) | Current source head `fb987178c2d279a99b0db5ea02e751691703955e`; Apache-2.0 broader TeX/MathML-oriented web mathematics system. | Fallback challenger if required notation, MathML, or accessibility coverage is materially better than KaTeX in Scient's corpus. | Heavier runtime and configuration surface. Do not add both renderers without demonstrated need. | `behavior-reference` / challenger |

## LaTeX, Typesetting, And Language Services

| Source | Current pin or evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [LaTeX Workshop](https://github.com/James-Yu/LaTeX-Workshop) | Current head `2ee38959c778f0bea69772804b64c25fd15bf609`; MIT. Official [Compile](https://github.com/James-Yu/LaTeX-Workshop/wiki/Compile) and [View](https://github.com/James-Yu/LaTeX-Workshop/wiki/View) documentation cover root, recipes, output, PDF refresh, and SyncTeX workflows. | Strongest bounded reference for root discovery, build recipes/toolchains, dependency watching, cancellation, auxiliary/output directories, PDF refresh, and source-PDF synchronization. | It is a VS Code extension with VS Code workspace/settings/process assumptions. Adapt bounded algorithms and behavior with attribution; do not embed the extension or import its host model. | `component-donor` and `behavior-reference` |
| [Tectonic](https://github.com/tectonic-typesetting/tectonic) | Current head `d2224d9ba4185f952fd3d982eccd1f444dbdf895`; MIT repository; self-contained modernized TeX/XeTeX-oriented engine with bundle-based support. | Leading low-setup managed local compiler candidate behind `TypesettingEngineAdapter`; useful automatic multi-pass and cross-platform path. | Package compatibility, bundle/network behavior, fonts, native packaging, updates, signing, binary size, redistribution closure, and comparison with existing TeX projects require proof. Not approved for bundling. | `adapter-candidate` |
| installed TeX distributions and `latexmk` | Official TeX Live/MacTeX/BasicTeX/MiKTeX and `latexmk` behavior must be checked per platform during the spike. | Preserve compatibility with existing projects, explicit engines, shell-escape choices, custom packages, bibliography/index tools, and established user installations. | Discovery, version choice, environment inheritance, process trees, user configuration, and support burden differ by platform. Opening/editing must not require installation. | Required adapter family; selection matrix open |
| [TexLab](https://github.com/latex-lsp/texlab) | Current head `4cc18b37c0b46baf39189f173d1bd7468d3f56e1`; GPL-3.0 repository; external language server. | Cross-file diagnostics, completion, symbols, navigation, references, formatting, and potential forward-search integration over the standard LSP boundary. | Do not copy GPL implementation into Scient. Binary distribution, source obligations, update lifecycle, process ownership, platform packages, and relationship to compiler diagnostics need explicit review. | `adapter-candidate` |
| [Typst](https://github.com/typst/typst) | Current head `a51e028041cac426f97d34335bb01d8f1d8e5e8f`; Apache-2.0 compiler repository and modern typesetting ecosystem. | Peer typesetting adapter and future structured-export target. | Do not route Typst through a LaTeX compatibility hack or assume identical root/package/diagnostic behavior. A current pin is evidence location, not prototype acceptance. | `adapter-candidate` |

## Overleaf As Capability And Systems Evidence

| Source | Current pin or evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [Overleaf repository](https://github.com/overleaf/overleaf) | Current head `28ad3b03b71cb4311decdcb55c36b33ec10d72db`; AGPL-3.0 repository with a multi-service application. Community Edition documentation warns that local compiles are not sandboxed and assume trusted users. | Comprehensive system reference for project/file lifecycle, document updates, real-time editing, compilation, history, Git, notifications, web coordination, and operational separation. | Community Edition is not the complete hosted/professional product. Do not import its topology, assume all features are available, or copy/link AGPL components without a license/product/operations decision. | `behavior-reference`; deeper relationship gated |
| [Overleaf redesigned editor documentation](https://docs.overleaf.com/getting-started/how-do-i-use-overleaf/redesigned-overleaf-editor), [collaboration](https://docs.overleaf.com/collaborating/collaborating-in-overleaf), [track changes](https://docs.overleaf.com/collaborating/track-changes), and [history/versioning](https://docs.overleaf.com/writing-and-editing/history-and-versioning) | Official hosted-product documentation inspected as capability evidence. | Capability baseline for code/visual authoring, compilation, comments, tracked changes, history, collaboration, templates, integrations, institutions, and user expectations. | Documentation is not source availability or proof that Community Edition contains the feature. Scient's local-first, evidence-connected, structured-native goals are broader. | `behavior-reference` and compatibility target |

Any future Overleaf integration, synchronization adapter, isolated service,
self-hosted deployment, or maintained fork requires a dedicated decision. It
must compare hosted/professional/Community Edition capabilities, licensing,
canonical data/history, local-first behavior, structured-native manuscripts,
deployment, upgrades, observability, compiler isolation, migration, cost, and
exit/rollback.

## Rich Scientific Authoring

| Source | Current pin or evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [Tiptap](https://github.com/ueberdosis/tiptap) / [ProseMirror](https://prosemirror.net/) | Tiptap current head `3c929ad21119dfd159eb298674198c67bb1146f1`; MIT open core with a mature ProseMirror base and extension/collaboration ecosystem. | Default rich-editor projection candidate; custom scientific nodes, stable IDs, NodeViews, comments/collaboration integration, HTML/Markdown/static rendering, and alignment with the strongest current DOCX donor. | Commercial services/features require separate review. Tiptap JSON or ProseMirror operations must not become canonical manuscript truth by accident. Long-document, accessibility, bidi, scientific-node, and conversion fixtures remain open. | `dependency-candidate` and default prototype |
| [Plate](https://github.com/udecode/plate) | Current head `3add964236e300f93a0783f54395097e6bd28cb3`; MIT open repository built on Slate, with extensive editor/AI/component patterns. | Challenger for polished manuscript UX, comments/suggestions, AI-oriented editing, and document-component patterns. | Feature presence and demos do not prove long-manuscript stability, deterministic conversion, collaboration recovery, or open availability of every advertised capability. | Required challenger prototype |
| [Lexical](https://github.com/facebook/lexical) | Current head `2929ef39ecf479db5ee3f4473d3ba9c9086bc9f4`; MIT, extensible editor framework. | Challenger for performance, accessibility, headless architecture, and controlled editor state. | More scientific document behavior would be Scient-owned. Existing use in a composer does not prove suitability for manuscript authority or long-form editing. | Required challenger prototype |
| [Zettlr](https://github.com/Zettlr/Zettlr) | Current head `cb34e8199e5113a39030068842a296992f290e91`; GPL-3.0 desktop academic-writing application. | Local-first academic writing, citations, math/Mermaid, Pandoc profiles, templates, submission workflows, and external-file continuity reference. | Do not import another Electron shell, make Markdown the only authoring model, or copy GPL code without a focused decision. The current pin still requires a source-depth spike before implementation learning is treated as verified. | `behavior-reference` |

The editor shootout must use one identical scientific manuscript fixture and
host. API convenience or an attractive demo is not selection evidence.

## Office-Format Preservation And Editing

### GenOffice

[GenOffice](https://github.com/genspark-ai/genoffice) is the relevant
open-source asset from the Genspark organization. It is not the same decision
as adopting Genspark's AI service.

- Current head checked 2026-08-12:
  `dc4d7e5927864498913b7ba42d0da06cc7cf628e`.
- Earlier deeply reviewed Scient baseline: `d1de6ac4...`, with a related tested
  revision at `0127f628...`.
- [Change since the earlier review](https://github.com/genspark-ai/genoffice/compare/d1de6ac44b6f49b91c19f414c3750bb58faae307...dc4d7e5927864498913b7ba42d0da06cc7cf628e)
  is material; the current head has not inherited the earlier full local/CI
  verification.
- Core license is Apache-2.0; separately licensed `ee/` is excluded. Exact
  dependency, notice, generated-code, asset, model, font, and service closure
  still requires component-level review.
- Its AI/backend path depends on Genspark account/network behavior and is not a
  Scient agent/provider foundation.

| GenOffice lane | Scient value | Limits | Disposition |
|---|---|---|---|
| DOCX engine and Tiptap projection | Preserve the original OOXML package, anchor modeled structures, pass unsupported content through, and patch dirty regions instead of regenerating the complete document. This is the strongest current route to honest Word compatibility around a Scient-owned manuscript. | App conversion/UI is more coupled than the engine; current head is not acceptance tested; real scientific DOCX and Word/LibreOffice round trips remain unproven. | Primary donor/baseline; bounded engine extraction only if corpus wins. |
| XLSX sidecar/gateway/operation concepts | Streaming/viewport, copy-on-write package updates, revisions/conflicts, dry-run/approval, and fail-closed save behavior are useful for scientific tables and workbook artifacts. | Must not make Excel/Univer state canonical Scient dataset, analysis, or table truth. Defer until shared data/table/artifact contracts exist. | Later component/reference candidate. |
| PPTX engine/renderer/layout operations | Surgical package preservation, rendering, atomic edits, and constrained model-authored layout operations are valuable for scientific communication. | Large application coupling and limited independent fidelity evidence. Defer until manuscript/figure/artifact needs are proven. | Later component/reference candidate. |
| PDF application | Office-suite PDF behavior reference. | Scient already owns a stronger current PDF reader boundary; no reason to replace it. | `behavior-reference` only. |
| agent, provider/search, project store, and shell | A few cancellation, rollback, tab, and operation patterns may be informative. | Wrong product/authority boundary; service coupling; would create a second agent/runtime/store/shell. | Excluded as foundations. |

### DOCX Challengers

| Source | Current pin and license evidence | Potential advantage | Material limit | Disposition |
|---|---|---|---|---|
| [EigenPal docx-editor](https://github.com/eigenpal/docx-editor) | Current head `e8a7bb04dab5b02dcae081a4f0127ca65825fd3d`; Apache-2.0 open core. `packages/pro/` and `packages/editor-api/` are commercially licensed and excluded. | More naturally packaged embeddable DOCX core; generic unsupported-element retention; thinner framework adapters. | Young history; comments, tracked changes, custom nodes, and automation boundaries overlap commercially licensed packages. Claims/test volume do not prove scientific Word fidelity. | Genuine open-core challenger. |
| [Sobree](https://github.com/khayll/sobree) | Current head `094865ac48782b986bb214164c705e64c7df30ba`; MIT repository; modular print-oriented editor with optional review, headless, and Yjs-oriented packages. | Cleanest permissive/modular challenger and keeps more review/headless behavior open. | Early versions, limited adoption, and no independent foundation-grade fidelity evidence. | Genuine experimental challenger. |
| [BetterOffice](https://github.com/openooxml/betteroffice) | Current head `56fde139fb78e3649ab154c4994301e2e11a0ff0`; Apache-2.0; Rust/Wasm shared OOXML direction. | Attractive long-term cross-format native/headless engine architecture for DOCX/XLSX/PPTX. | Very early packages and maturity; project claims/benchmarks are not Scient proof. | `watch`; no foundation selection. |

The first DOCX selection compares GenOffice, EigenPal's open core, and Sobree
against one frozen corpus, the same host integration, and the same no-op,
narrow-edit, fidelity-receipt, Word-reopen, and LibreOffice-reopen gates.

### Spreadsheet And Presentation Sources

| Source | Current pin and evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [Univer](https://github.com/dream-num/univer) | Current head `770642a03e6ceced4db0aa896ba339c4e54855b7`; Apache-2.0 open core with an established plugin/canvas/formula ecosystem. Official import/export, collaboration, history, and server capabilities include commercial Pro offerings. | Leading embedded spreadsheet UI/formula surface candidate after Scient table/artifact contracts exist. | Open core is not the XLSX preservation authority. Do not assume Pro features are available or make workbook state canonical scientific data. | `dependency-candidate` for surface only. |
| GenOffice XLSX/PPTX paths | See current and earlier evidence above. | Open preservation gateway/sidecar and dirty-region operation concepts. | Current head revalidation, extraction cost, platform packaging, and format-specific corpus remain open. | Later component donor. |
| BetterOffice | See current evidence above. | Possible future shared Rust/Wasm preservation engine. | Too early. | `watch`. |

## Full-Suite Compatibility References

| Source | Evidence and license posture | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [ONLYOFFICE DocumentServer](https://github.com/ONLYOFFICE/DocumentServer) | Mature AGPL-oriented server/full-suite architecture with additional component and commercial considerations to review. | Broad DOCX/XLSX/PPTX/PDF behavior, collaboration, visual comparison, conversion, and reopen oracle; possible optional isolated service. | Heavy server/deployment and product surface; licensing and operations are not a narrow embedded-engine fit. | `compatibility-oracle`; future service only by separate ADR. |
| [Collabora Online](https://github.com/CollaboraOnline/online) | Mature browser/server collaboration suite based on LibreOffice technology; primarily MPL-2.0 repository with component obligations to verify. | Browser collaboration and LibreOffice-format compatibility reference; possible optional isolated service. | Heavy service and suite topology, deployment, upgrades, and integration cost. | `compatibility-oracle`; future service only by separate ADR. |
| [LibreOffice](https://www.libreoffice.org/) | Mature open desktop suite and conversion/runtime ecosystem. | Required reopen, layout, conversion, and round-trip oracle on supported test platforms. | Not the first embedded document engine; headless conversion is not proof of exact fidelity. | `compatibility-oracle`. |
| Microsoft Word, Excel, and PowerPoint | Dominant proprietary format implementations and researcher workflows. | Essential native reopen and visual/behavior acceptance where licenses and automation allow. | Closed source; external oracle, not implementation donor. | `compatibility-oracle` and product reference. |
| Google Docs/Sheets/Slides | Widely used collaborative product behavior. | UX, comments/suggestions, sharing, and external continuation reference. | Closed source/service; export behavior does not define Scient's canonical model. | `behavior-reference`. |

## Publishing And Interchange

| Source | Current pin or evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [Quarto](https://github.com/quarto-dev/quarto-cli) | Current head `abc6a78ed68f9e8bc9d54e27851093bd687a1cb7`; root `COPYING.md` is MIT. Official documentation covers [output formats](https://quarto.org/docs/output-formats/all-formats), [cross-references](https://quarto.org/docs/authoring/cross-references), citations, execution, and PDF options. | Primary pragmatic publishing adapter across HTML, PDF, DOCX, Typst, presentations, citations, math, figures, and executable documents. | Component/dependency/toolchain/distribution review remains required. Do not make `.qmd` or Quarto's internal model the only Scient authoring truth. | `adapter-candidate`. |
| [Pandoc](https://github.com/jgm/pandoc) | Current head `1552249b903651d181e1cb2450b5b1860d5eb03d`; GPL-2.0-or-later repository with a mature document-conversion ecosystem. | Multi-format import/export engine, AST/filter ecosystem, citation and template routes, and compatibility oracle. | Pandoc AST and successful conversion are not fidelity-complete canonical state. Distribution and invoked-tool closure require review. | `adapter-candidate`. |
| [MyST](https://github.com/jupyter-book/mystmd) | Current head `d41a821e2244c51375241b982c103d8b9c395092`; MIT repository. | Scientific Markdown/publishing challenger for citations, cross-references, notebooks, JATS, TeX/Typst, and web publishing. | Do not make source Markdown or MyST schema canonical without a focused decision. | Challenger adapter/reference. |
| [Stencila](https://github.com/stencila/stencila) | Current head `f49116894bfc58509c27feab7656230944f2b0a8`; Apache-2.0 repository. | Semantic scientific documents, executable/provenance concepts, document conversion, and agent-operation reference. | Do not adopt its schema/runtime as Scient truth without common-fixture evidence. The current pin does not replace a dedicated spike. | `behavior-reference` and challenger. |

## Collaboration And Review Engines

| Source | Current pin or evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [Yjs](https://github.com/yjs/yjs) + [Hocuspocus](https://github.com/ueberdosis/hocuspocus) | Yjs current head `567af9b41fe5e1290e0cfe7fcc025a9f98c514a0`; MIT. Mature rich-editor bindings, offline updates, awareness, and a self-hostable provider ecosystem. | First manuscript/note real-time collaboration prototype if the selected editor retains mature bindings. | Awareness is ephemeral; authorization is external; update state is not accepted scientific state, complete history, or large-asset storage. | `dependency-candidate`. |
| [Automerge](https://github.com/automerge/automerge) | Current head `8feb8be8be203e3b878bf2cb5919601094f3c816`; MIT, local-first JSON-like CRDT and change history. | Challenger for structured object collaboration, branching, offline change, and transport-independent sync. | Broad CRDT project state may complicate validation, permissions, schema evolution, selective sync, and accepted-operation semantics. | Challenger adapter. |
| [ShareDB](https://github.com/share/sharedb) | Current head `c951560f7e30acae980a42f74ec5f5cc3e94e586`; MIT OT-oriented real-time database. | Server-authoritative OT challenger and operational-transformation reference. | Server/canonical-state assumptions, offline behavior, history, schema migration, and local-first fit require comparison. The current pin does not replace the collaboration spike. | Challenger adapter. |

## Extraction And Agent-Readable Derivatives

| Source | Evidence | Useful Scient role | Limits and exclusions | Disposition |
|---|---|---|---|---|
| [AnyDoc evaluation](anydoc-source-evaluation-2026-08-06.md) | Existing focused Scient evaluation records fast local extraction across Office/OpenDocument/RTF/EPUB/CSV and uncomplicated text PDFs. | Cheap first-pass searchable/agent-readable derived text and metadata behind an extraction receipt. | Not a viewer, editor, preservation engine, layout truth, equation/citation authority, or spreadsheet quantitative-evidence authority. Conversion success may omit unsupported material without sufficient warning. | Experimental extraction adapter only. |
| Docling, Kreuzberg, GROBID, and specialized parsers | Portfolio evidence remains in the broader adaptation map; exact pins and licenses belong in focused parser spikes. | Common-corpus challengers for structured extraction, scholarly structure, coordinates, tables, equations, and citations. | Parser output is derived evidence and must retain source, confidence, loss, and exact-region links. | Separate extraction lane. |

## Recommended Source Composition

The current evidence supports a mix, not one source tree:

1. Keep the T3-derived Scient app as the host.
2. Keep and generalize the Scient PDF reader.
3. Prove Electron/Chromium `printToPDF` first for controlled visual PDF
   production; keep paged-media challengers evidence-gated.
4. Prototype `remark-math` + KaTeX for chat/Markdown math.
5. Adapt LaTeX Workshop's bounded workflow knowledge behind Scient contracts.
6. Prototype Tectonic plus installed-TeX/`latexmk` adapters.
7. Use Overleaf as the full capability/system benchmark, not the initial base.
8. Prototype Tiptap/ProseMirror, Plate, and Lexical on one manuscript.
9. Compare GenOffice, EigenPal open core, and Sobree on one DOCX corpus;
   GenOffice remains the provisional primary donor/baseline.
10. Evaluate Flyfish separately for view-only breadth.
11. Use Univer only as a possible spreadsheet surface paired with an open
    preservation gateway.
12. Use Quarto/Pandoc first for pragmatic multi-format publishing and MyST as a
    challenger.
13. Compare Yjs/Hocuspocus, Automerge, and ShareDB behind owned collaboration
    and history contracts.
14. Use AnyDoc and peer parsers only for derived extraction/search/agent
    context.
15. Use Microsoft Office, LibreOffice, ONLYOFFICE, and Collabora as
    compatibility oracles or later isolated integrations, not the first core.

## Acceptance Gates

### Every Dependency Or Donor

- exact source revision and component boundary;
- license, notices, transitive dependencies, assets, fonts, models, templates,
  generated code, commercial directories, and service requirements;
- build/test evidence on the source actually proposed;
- desktop/web/mobile and local/remote capability disposition;
- update, divergence, rollback, and removal plan;
- failure isolation and fallback;
- maintenance/community and security-response evidence; and
- proof that replacing the source would not replace Scient's canonical
  document/project model.

### Viewer

- frozen format corpus;
- malformed/encrypted/unsupported/large/RTL/accessibility fixtures;
- load/failure/retry/fallback UX;
- no blank or false-success state;
- asset/network behavior; and
- performance and cleanup in the actual Scient host.

### PDF Production

- frozen controlled-content and browser-surface corpus;
- deterministic render-ready signals for controlled Scient content, plus
  bounded readiness, recorded unresolved resources, and truthful warnings for
  arbitrary browser surfaces;
- paper, margin, background, font, link, image, pagination, long-content, RTL,
  accessibility, and platform fixtures;
- cancellation, timeout, renderer crash, missing asset, and partial-output
  recovery;
- output routed through the shared artifact/PDF reader and receipt contracts;
  and
- proof that visual PDF production is not misrepresented as semantic export,
  source fidelity, or PDF/UA conformance.

### Typesetting Engine

- project/root/dependency corpus;
- bibliography/index/font/package compatibility;
- cancellation and process-tree cleanup;
- deterministic or explained toolchain/bundle behavior;
- diagnostics and full log;
- output isolation and last-success artifacts;
- cross-platform packaging/discovery;
- license/redistribution/update path; and
- no compiler prerequisite for opening/editing source.

### DOCX Engine

- no-op and narrow-edit package diffs;
- unsupported OOXML survival;
- equations, citations, fields, notes, sections, comments, revisions, tables,
  figures, charts, headers/footers, macros/signatures, unknown extensions, RTL,
  CJK, and accessibility;
- Word and LibreOffice reopen, edit, save, and visual comparison;
- honest fidelity receipt;
- crash/external-change/conflict/recovery; and
- acceptable host coupling, performance, and source-update strategy.

### Rich Editor

- identical semantic scientific manuscript fixture;
- stable IDs/anchors and source/projection maps;
- citations/evidence, equations, figures/tables, cross-references, metadata,
  comments/suggestions, agent proposals, and history;
- long-document performance, accessibility, IME, RTL, and mobile review;
- deterministic import/export/reconciliation; and
- collaboration-engine replacement without canonical-data migration.

### Collaboration Engine

- offline and simultaneous edits;
- reconnect, attribution, awareness, conflicts, migration, compaction, and
  recovery;
- permissions/revocation and ownership transfer outside the document engine;
- portable history and snapshot/export;
- large assets separately versioned; and
- human and agent proposal/review behavior.

## Excluded Shortcuts

- Do not copy a whole GenOffice, Overleaf, ONLYOFFICE, Collabora, Zettlr, or
  other donor application into Scient to avoid defining the platform boundary.
- Do not use a commercial or separately licensed package because its sibling
  repository is open.
- Do not equate a repository's test count, stars, demo, benchmark, or format
  list with Scient acceptance.
- Do not equate successful extraction or conversion with complete fidelity.
- Do not make an AI backend, external account, hosted service, editor schema,
  Office package, Pandoc AST, Markdown file, LaTeX source, or CRDT state the
  universal Scient project/manuscript truth.
- Do not adopt an engine without a credible update and removal path.

## Immediate Evidence Work

1. Build the chat-math fixture and run KaTeX acceptance.
2. Build the cross-platform LaTeX project fixture and compare Tectonic with
   installed-TeX/`latexmk` paths.
3. Build the view-only corpus and evaluate Flyfish inside the actual host.
4. Freeze the scientific DOCX corpus and run GenOffice, EigenPal open core, and
   Sobree with Word/LibreOffice reopen.
5. Build the common structured-manuscript fixture for Tiptap, Plate, and
   Lexical.
6. Build the controlled visual-PDF corpus and establish the Chromium
   `printToPDF` baseline before adopting a paged-media challenger.
7. Refresh every repository-backed `pin: pending` entry before its evidence is
   used to schedule a spike or select a candidate.
8. Record exact license/dependency closure only for candidates that survive
   their capability fixture.
9. Promote a source choice into architecture only after its gate passes and
   the owning human accepts the consequence.
