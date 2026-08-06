# AnyDoc Source Evaluation — 2026-08-06

Status: Proposed
Owner: Yaacov
Created: 2026-08-06
Last updated: 2026-08-06
Purpose: Evaluates AnyDoc as a lightweight local document-extraction source and defines the evidence required before Scient adopts it behind an ingestion adapter.
Doc type: Research evidence

## Document Rules

This document owns the frozen source evaluation of AnyDoc at the revision named
below. It distinguishes inspected behavior, recommendation, and remaining proof.
It does not select a dependency, define the canonical Scient ingestion contract,
or describe implemented Scient behavior.

The cross-source synthesis belongs in
[`open-source-adaptation-map.md`](open-source-adaptation-map.md). An accepted
engine selection or hard-to-reverse ingestion boundary would belong in the
relevant architecture document or ADR after prototype evidence and explicit
acceptance.

This is a dated snapshot. Correct factual errors in place, but record a later
material re-evaluation in a new dated report so project age, source revision,
capabilities, and results are not silently rewritten.

## Executive Disposition

AnyDoc is a strong **experimental lightweight-ingestion candidate**. Its best
potential role is fast, fully local first-pass extraction from mixed Office,
OpenDocument, RTF, EPUB, CSV, and uncomplicated text-PDF inputs for attachment
understanding, search preparation, and agent-readable context.

It is not suitable as Scient's canonical document model, scientific evidence
representation, Office editing or round-trip layer, authoritative spreadsheet
parser, OCR pipeline, or scholarly-PDF parser. Successful conversion currently
does not prove that all meaningful source content survived.

The recommended next state is **Observed and recommended for a bounded
common-corpus prototype; not selected, adopted, implemented, published, or
integrated**.

## Source Snapshot

| Field | Inspected value |
|---|---|
| Source | [firecrawl/anydoc](https://github.com/firecrawl/anydoc) |
| Revision | [`8eecca5aa22cef0a196ebee482f5961c114e886d`](https://github.com/firecrawl/anydoc/commit/8eecca5aa22cef0a196ebee482f5961c114e886d) |
| Tree | `4cd60b81e1151d3c42d65cd158e0f0f82d93ca3c` |
| Branch | Official `main`, fetched and inspected read-only |
| Current release at inspection | [`v0.1.6`](https://github.com/firecrawl/anydoc/releases/tag/v0.1.6) |
| Inspection date | 2026-08-06 |
| License | MIT |
| Public history observed | 100 commits beginning 2026-07-30; 95 attributed to one author |
| Bindings | Rust, Node, Python, browser/Wasm, CLI, and an Agent Skill |

The repository and release history were only days old at inspection. Rapid
development, release breadth, and substantial early adoption are encouraging,
but they are not evidence of stable APIs, maintenance continuity, independent
review culture, or scientific-document fidelity.

## Scient Problem Being Evaluated

Scient needs more than one kind of document processing:

1. a cheap local path for extracting ordinary readable content from diverse
   attachments;
2. provenance-rich conversion for sources whose page, region, structure, or
   conversion uncertainty matters;
3. scholarly parsing for references, citation contexts, figures, and tables;
4. OCR for scanned or image-based sources;
5. format-specific handling for quantitative spreadsheets and editable Office
   projections; and
6. a Scient-owned result boundary that preserves source identity, warnings,
   limitations, staleness, and review state above every engine.

AnyDoc is evaluated for the first role. Its speed and deployment simplicity do
not justify assigning it the other roles without separate proof.

## What AnyDoc Provides

AnyDoc is a Rust library that converts DOC/DOCX/DOCM, PPT/PPTX-family files,
XLS/XLSX-family files, OpenDocument, RTF, EPUB, CSV, and text PDFs into
GitHub-Flavored Markdown. Most formats first enter one shared
[`Document`](https://github.com/firecrawl/anydoc/blob/8eecca5aa22cef0a196ebee482f5961c114e886d/src/model/mod.rs)
model and then use one Markdown renderer. PDF delegates directly to
`pdf-inspector` and returns Markdown rather than the shared model.

The shared representation contains body blocks, notes, and embedded asset
bytes. Its primary semantics are headings, paragraphs, lists, tables, quotes,
code, rules, styled text, links, images, anchors, and note references. This is a
useful normalized extraction shape, not a complete representation of the
source document.

### Material strengths

- Pure local Rust core with no required remote service or model.
- Small native distributions compared with model-heavy conversion stacks.
- Broad modern and legacy Office coverage without requiring LibreOffice.
- Content-based format detection instead of extension-only dispatch.
- Consistent Markdown escaping, lists, tables, links, and notes across formats.
- Embedded image and object bytes remain available as model assets.
- Node work runs through asynchronous native tasks; Python releases the GIL;
  browser/Wasm is available for worker-based use.
- Defensive archive, XML, table-expansion, asset, nesting, and record limits.
- Mutation tests, format fuzz targets, committed fixtures, strict Clippy, and
  multi-binding hosted CI.
- MIT licensing and a relatively small Rust dependency surface.

These properties make AnyDoc attractive for a replaceable local fast path in
the Scient app or Scient agent. They do not establish conversion completeness.

## Model And Fidelity Limits

The inspected shared model does not preserve:

- source file hash, revision, or immutable Scient asset identity;
- page, slide, worksheet, cell-range, paragraph, or general source coordinates;
- stable semantic identities for equations, citations, figures, tables,
  comments, suggestions, or publication metadata;
- equations or structured mathematics;
- citations, bibliography entries, or citation intent;
- comments, tracked-change state, or revision authorship;
- spreadsheet formulas, number formats, source coordinates, hidden state,
  validation, filters, named ranges, pivots, or charts as structured objects;
- document layout, geometry, sections, columns, themes, animations, and most
  appearance semantics; or
- a structured fidelity, warning, omission, or reconciliation report.

This matters because Scient's proposed scientific-computing direction requires
semantic identity to survive projections where the format permits and requires
projection loss to be visible rather than silent. An AnyDoc result can be a
derived convenience projection; it cannot satisfy that contract by itself.

### Format-specific observations

#### DOCX

The parser handles ordinary text, headings, lists, tables, links, bookmarks,
footnotes/endnotes, embedded assets, text boxes, cached chart data, SmartArt
text, and several recovery cases well. Accepted inserted text is included, but
revision identity is lost. Deleted revisions and comments are not represented.
Headers, footers, equations, sections, layout, color, underline, font size, and
other unsupported semantics can disappear without a structured loss record.

A generated GenOffice DOCX fixture containing normal content plus one Word
equation converted successfully and quickly. Ordinary text, links, lists, and
the table survived; the equation disappeared entirely and the caller received
no structured warning. A separate footnote fixture converted its note content
correctly to Markdown footnotes.

Nested source tables can also lose their inner grid when rendered to GFM; the
upstream project tracks this in
[#14](https://github.com/firecrawl/anydoc/issues/14).

#### Spreadsheets

The spreadsheet path uses `calamine`, materializes the populated range, and
turns current cell values into strings. It does not preserve enough workbook
semantics for quantitative scientific evidence.

Confirmed upstream examples include:

- a displayed `7.5%` becoming `0.075`, with no signal that its number format
  was dropped ([#27](https://github.com/firecrawl/anydoc/issues/27));
- hidden rows and columns appearing as ordinary visible content
  ([#9](https://github.com/firecrawl/anydoc/issues/9));
- worksheet identity and source coordinates disappearing
  ([#10](https://github.com/firecrawl/anydoc/issues/10)); and
- merged-cell spans collapsing when they extend beyond the populated range
  ([#8](https://github.com/firecrawl/anydoc/issues/8)).

The percentage case can change downstream interpretation by two orders of
magnitude. Until fixed and proven, AnyDoc spreadsheet output must not be used as
quantitative evidence or an authoritative representation of a workbook.

#### Presentations

PPTX support extracts text shapes, lists, tables, assets, embedded objects,
cached chart data, diagram text, and speaker notes. Slides are flattened into a
single block stream without a durable slide object or general slide locator.
Coordinates, layering, themes, animation, and layout semantics are lost. This
can be useful for broad agent context but not for slide-grounded citations,
editable presentations, or fidelity-sensitive artifacts.

#### PDF

Text PDFs use a separate Markdown-only path through `pdf-inspector`. Scanned
and image-only PDFs are unsupported, and pages requiring OCR can be skipped.
Broken font encodings can still yield a successful but degraded result. The
different return path also prevents one uniform AnyDoc model across PDF and the
other formats.

#### OpenDocument, legacy Office, RTF, and EPUB

The legacy DOC/PPT and RTF implementations have useful recovery, encoding,
list, table, and image support. OpenDocument covers core text, lists, tables,
notes, frames, and generated-index content, while annotations and tracked
changes are skipped. EPUB extracts chapter HTML/CSS into the shared model, but
metadata is not represented and damaged chapters may be skipped with logs.

This breadth is valuable for best-effort discovery of content in mixed legacy
collections. It is not evidence that every format retains its user-visible or
operational semantics.

## Success, Warnings, And Scientific Trust

[`ConvertError`](https://github.com/firecrawl/anydoc/blob/8eecca5aa22cef0a196ebee482f5961c114e886d/src/error.rs)
represents unsupported, malformed, encrypted, resource-limit, missing-part,
and I/O failures. The public documentation says conversion rejects only when
no meaningful Markdown can be produced.

Recoverable damage, skipped content, and unsupported constructs are generally
reported through Rust logging. The logging messages are not a stable public
API, and Node, Python, and Wasm results do not expose a structured warnings or
loss collection. Therefore:

> Successful AnyDoc conversion means that some meaningful Markdown was
> produced. It does not prove that all meaningful source content survived.

This is the largest obstacle to trusted unattended Scient use. A wrapper can
declare known format-level limitations, but it cannot reliably report an
actual omission that the engine never exposes. Structured diagnostics must be
added upstream, maintained in a bounded fork, or treated as an unresolved
limitation that prevents high-trust use.

## Security, Privacy, And Operational Assessment

The core performs local parsing and does not need network access or execute
document-provided code. External URLs can survive as links but are not fetched
by the parser. No project-owned `unsafe` blocks were found in the inspected
source.

The fixed limits include 128 MiB per archive entry, 512 MiB total decompressed
archive content, 100,000 entries, XML depth 256, two million XML nodes per
part, four million expanded table cells, 64 MiB duplicated expansion text, 128
MiB retained asset bytes, and bounded legacy-record traversal. These are good
parser-level protections, but they are deliberately non-configurable and are
too permissive to serve as Scient's only Electron, mobile, web, or
concurrent-ingestion budget. The exact constants are visible in
[`limits.rs`](https://github.com/firecrawl/anydoc/blob/8eecca5aa22cef0a196ebee482f5961c114e886d/src/package/limits.rs).

Scient would still need:

- preflight file and archive budgets below the engine maximums;
- worker or process isolation rather than renderer-thread execution;
- timeout, cancellation, memory, and concurrency controls;
- sanitization before extracted Markdown reaches a rendered surface;
- no automatic external-resource fetch;
- no automatic use of Firecrawl's hosted OCR/Parse fallback; and
- cache and invalidation keyed by immutable source hash, engine version, and
  extraction policy.

The supplied Agent Skill recommends `npx` execution and mentions a hosted
Firecrawl fallback for OCR. Scient should not install or invoke that skill as
its product integration. A pinned library behind an owned tool boundary is
more auditable, private, testable, and replaceable.

Supply-chain hardening remains incomplete. The inspected CI is substantial but
uses mutable major-version GitHub Action tags, installs one build tool through
a downloaded archive pipeline, and does not include an obvious dedicated
dependency-audit, license-policy, or security workflow. No `SECURITY.md` was
found in the inspected tree. A later dependency decision requires a complete
transitive license and vulnerability review.

## Verification Performed

The following read-only or build-artifact-producing checks were performed from
the detached inspected revision:

- `cargo fmt --all --check` — passed;
- `cargo clippy --workspace --all-targets --all-features -- -D warnings` —
  passed;
- `cargo test --locked` — passed with 182 unit tests, one mutation robustness
  test, and eight committed corpus/snapshot tests; one optional local-samples
  test was skipped because its gitignored corpus was absent;
- Python release wheel build and installation in an isolated temporary virtual
  environment — passed;
- Python binding unit tests — 9 passed; and
- generated GenOffice DOCX conversion checks — ordinary content and footnotes
  survived, while an embedded Word equation was silently omitted.

Hosted CI at the exact head was green across Rust, Node, Python, and Wasm.
Local `npm ci` under Node `v22.22.3`, despite the package declaring Node 20 or
newer, failed because the committed lockfile's `@emnapi/runtime@1.11.3` did not
satisfy a `2.0.0-alpha.3` requirement. Hosted Node 26 CI passed. This is a
source-build reproducibility and declared-runtime-coverage concern, not proof
that the published native package fails.

No browser automation, screenshots, visual comparison, Microsoft Office or
LibreOffice reopening, interactive acceptance, OCR evaluation, or
production-scale memory test was performed.

## Benchmark Interpretation

AnyDoc's published benchmark reports 100 real documents across fourteen
formats, a 4.4 ms median, and the highest aggregate quality score among its
tested tools. Its
[`bench/README.md`](https://github.com/firecrawl/anydoc/blob/8eecca5aa22cef0a196ebee482f5961c114e886d/bench/README.md)
also discloses important limits:

- the corpus is private and non-redistributable;
- only the first six rendered pages are shown to the LLM judge;
- visible rendered-page comparison cannot prove hidden semantics, formulas,
  revisions, source coordinates, provenance, or loss reporting;
- the tools cover different format subsets;
- some timing paths exclude process startup while CLI tools include it; and
- the benchmark is self-published and not independently replicated.

The benchmark supports the claim that AnyDoc is unusually fast and broad. It
does not establish scientific correctness, fidelity, safe unattended use, or
superiority for Scient's ingestion contract.

## Relationship To Other Scient Candidates

| Source | Strongest prospective role | Why AnyDoc does not replace it |
|---|---|---|
| Docling | Rich structured conversion, layout/OCR pipelines, item/page provenance, conversion status, errors, timings, and confidence. | AnyDoc is lighter and likely faster, but its model and result boundary expose substantially less trust information. |
| GROBID | Scholarly PDF structure, references, citation contexts, affiliations, figures, tables, and coordinates. | AnyDoc is not a scholarly parser and cannot support evidence-region traceability by itself. |
| GenOffice and its DOCX challengers | Byte-preserving Office editing, narrow rewrites, unsupported-OOXML survival, and editable projection fidelity. | AnyDoc is an extractor and Markdown converter, not an editing or round-trip engine. |
| Kreuzberg | Broad local document intelligence, OCR, metadata, pages, tables, structured elements, and many language bindings. | Its current capabilities make it a necessary comparator before selecting AnyDoc as the lightweight general-ingestion engine. A focused Scient source review is still required. |
| MarkItDown | Lightweight LLM-oriented conversion across documents and other media. | It is another useful Markdown baseline, but is Python-oriented and explicitly not a high-fidelity conversion system. |
| Specialized spreadsheet and dataset parsers | Exact values, formulas, types, coordinates, visibility, schemas, and quantitative validation. | AnyDoc's current spreadsheet flattening can silently change meaning. |

The likely long-term shape is a Scient-owned ingestion router, not one universal
parser. AnyDoc may serve the cheap path; Docling or Kreuzberg may serve richer
general conversion; GROBID may serve scholarly structure; OCR and quantitative
formats need separate qualified paths.

## Required Scient Adapter Boundary

If a prototype uses AnyDoc, the original immutable source remains canonical.
The derived output should be returned through a Scient-owned result containing
at least:

- original asset identity, cryptographic hash, name, media type, and detected
  format;
- engine name, package version, exact source revision, and extraction policy;
- derived Markdown or normalized blocks and extracted-asset mapping;
- source page, slide, sheet, cell, or range locators where the engine can
  provide them, with explicit `unavailable` states otherwise;
- declared per-format capabilities and known unsupported semantics;
- actual warnings, recoveries, partial failures, omitted parts, and uncertain
  output when observable;
- processing duration, resource outcome, cancellation state, and failure code;
- validity and staleness keyed to source and engine revisions; and
- an explicit statement of whether the result is suitable only for discovery,
  agent context, indexing, review, or evidence extraction.

An extracted chunk must retain its immutable source reference and must not be
presented as a precise citation when no source locator exists. Original bytes
must remain available for manual inspection and reprocessing through a richer
engine.

## Bounded Prototype And Selection Gates

Do not add AnyDoc as a product dependency from this source review alone. First:

1. Freeze a redistributable Scient ingestion corpus containing ordinary and
   legacy Office files, equations, citations, RTL, comments, tracked changes,
   formulas, percentages, hidden spreadsheet data, slide notes, charts,
   scanned PDFs, malformed archives, nested tables, and large documents.
2. Compare AnyDoc, Docling, Kreuzberg, MarkItDown, GROBID where applicable, and
   specialized format parsers through one owned result contract.
3. Measure content recall, semantic correctness, source localization,
   structured warnings, known and unknown loss, deterministic output, resource
   use, startup and package cost, cancellation, hostile-input handling, and
   integration complexity.
4. Resolve structured loss reporting. Prefer an upstream diagnostics API;
   consider a bounded fork only if the maintenance cost and source relationship
   are explicit.
5. Exclude quantitative spreadsheet use until display values, formulas,
   coordinates, visibility, and type semantics are preserved or the router
   reliably dispatches those files elsewhere.
6. Prove worker/process isolation and lower Scient-owned budgets on desktop;
   separately prove web, mobile, and concurrent-ingestion viability before
   enabling those hosts.
7. Complete dependency, license/notice, release-provenance, vulnerability, and
   API-stability review.
8. Decide per format and purpose. Do not select one engine merely to simplify
   the dependency diagram.

## Recommendation

Keep AnyDoc in the source map as an **experimental embedded-engine and adapter
candidate**. It deserves a bounded prototype because its local operation,
speed, format breadth, native Node integration, small deployment, and legacy
Office support could materially reduce the cost of ordinary attachment and
agent-context ingestion.

Do not promote it into the accepted technology stack or an ADR until the common
corpus proves a real role and the structured-loss boundary is credible. Even if
selected, keep it replaceable and preserve the original source, Scient-owned
identity, provenance, evidence, and review state above it.

## Evidence Links

- [AnyDoc repository and README](https://github.com/firecrawl/anydoc)
- [Inspected source revision](https://github.com/firecrawl/anydoc/tree/8eecca5aa22cef0a196ebee482f5961c114e886d)
- [Shared model](https://github.com/firecrawl/anydoc/tree/8eecca5aa22cef0a196ebee482f5961c114e886d/src/model)
- [Format implementations](https://github.com/firecrawl/anydoc/tree/8eecca5aa22cef0a196ebee482f5961c114e886d/src/formats)
- [Safety limits](https://github.com/firecrawl/anydoc/blob/8eecca5aa22cef0a196ebee482f5961c114e886d/src/package/limits.rs)
- [CI workflow](https://github.com/firecrawl/anydoc/blob/8eecca5aa22cef0a196ebee482f5961c114e886d/.github/workflows/ci.yml)
- [Release workflow](https://github.com/firecrawl/anydoc/blob/8eecca5aa22cef0a196ebee482f5961c114e886d/.github/workflows/release.yml)
- [Benchmark methodology](https://github.com/firecrawl/anydoc/blob/8eecca5aa22cef0a196ebee482f5961c114e886d/bench/README.md)
- [Docling structured conversion and result boundary](https://docling-project.github.io/docling/reference/document_converter/)
- [Docling document provenance](https://docling-project.github.io/docling/reference/docling_document/)
- [Kreuzberg repository](https://github.com/kreuzberg-dev/kreuzberg)
- [MarkItDown repository](https://github.com/microsoft/markitdown)
