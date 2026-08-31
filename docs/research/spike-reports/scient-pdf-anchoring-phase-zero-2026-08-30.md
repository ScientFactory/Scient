# Scient PDF Anchoring Phase Zero — 2026-08-30

Status: Draft
Owner: Yaacov
Created: 2026-08-30
Last updated: 2026-08-31
Purpose: Records the isolated PDF anchoring experiment, its exact implementation and external-source boundaries, its deterministic exact/relocated/ambiguous/orphaned evidence, and the remaining gates before a durable Region contract may be proposed.
Doc type: Research evidence

## Document Rules

This is dated research evidence. It is not accepted architecture, a production
Region schema, permission to create `.scient/evidence/`, or proof that the
complete Sources and Evidence trust journey works.

Use it to review proposed
[ADR-0009](../../architecture/decisions/ADR-0009-evidence-continuity-and-durable-support.md)
and the [Sources and Evidence implementation
plan](../../planning/sources-and-evidence-implementation-plan.md). Current
desktop behavior remains owned by the exact desktop source and its
repository-local documentation.

The original experimental harness is intentionally gitignored in its desktop worktree.
It must be treated as disposable research machinery until the owner decides
whether a licensed real-world corpus and reusable extractor-version harness
belong in a permanent repository. This report preserves the reviewed result and
limitations; it does not turn the temporary descriptor into a supported format.

The dated follow-up below records a separate, reviewable desktop development
adapter and extractor-comparison script. It narrows the original experiment to
exact capture and return; it does not promote the synthetic relocation logic.

## Executive Result

The smallest multi-signal anchor model is technically plausible with Scient's
existing PDF.js dependency. In 14 deterministic cases across 11 controlled PDFs,
the experiment produced:

- 8 exact resolutions;
- 3 relocated resolutions;
- 1 ambiguous resolution; and
- 2 orphaned resolutions.

It never selected an ambiguous candidate and it preserved the original
capture-evidence hash after every attempt. It handled close/reopen, identical
reimport, a normalization change, repeated quotations, multiple lines and
rectangles, two columns, a table row, a figure caption, an image-only scan, an
OCR overlay, mixed Hebrew/English text, repagination and page-geometry change,
duplicated changed-version passages, and a removed passage.

The result supports continuing the architecture direction in ADR-0009:

1. identify one exact material before anchoring;
2. preserve several complementary selectors and PDF-coordinate return evidence;
3. distinguish exact, relocated, ambiguous, and orphaned outcomes;
4. preserve original capture evidence separately from later resolution
   evidence; and
5. treat poor or absent text layers as explicit states.

It does **not** justify freezing the experimental field shape. Synthetic PDFs,
item-level rectangles, uncalibrated context thresholds, one actual PDF.js
version, and no integrated reader capture are material limitations. P0.3 is
therefore partially proven, not complete.

## Exact Evidence Snapshot

| Scope | Exact state | Treatment |
| --- | --- | --- |
| Scient planning repository | `origin/main` `3689423e411cdf66b48a2ef86235319aa27dc060`; proposed Sources and Evidence package remains uncommitted on `codex/sources-evidence-decision-package-20260829` | Decision and research owner; no architecture was accepted. |
| Scient Desktop baseline | refreshed `origin/main` `26d381c565294adc0e87668bdd5e6dfa737b110a` | Current implementation base for the experiment. Main had advanced through desktop PR #212; no intervening commit changed current Sources files. |
| Material-selection candidate | `41d433559b80e89f1ec404073bf9b91b7bf080e1` on `codex/sources-material-selection-20260830` | Review-only prerequisite that removes implicit first-material authority across details, list actions, and metadata refresh and selects by stable material ID. Not shipped. |
| Workflow-controller candidate | top review branch at `8d057e1eb63c93120e22b5e1b9ef18e860224bf8` after restacking above the final material-selection head | Separate Lane B work. It does not own durable anchor or import state. Not shipped. |
| Anchoring harness | `.plans/sources-pdf-anchoring-spike/` in the isolated desktop worktree | Gitignored research machinery. No production package, endpoint, UI, or `.scient/` namespace was added. |
| Existing extractor | `pdfjs-dist` `6.2.108`, already pinned by Scient Desktop | Reused; no new runtime dependency. |

## Question And Stop Gate

The experiment asked whether one exact Source material can preserve enough
evidence to reopen a passage honestly across extraction and material changes
without silently selecting a wrong duplicate.

The stop gate was:

- do not call a result exact when material or extraction identity changed;
- do not pick one of several similarly plausible candidates;
- do not invent a passage for a scan with no text layer;
- do not mutate original capture evidence during resolution; and
- do not promote the descriptor to a production schema based on synthetic
  success.

All behavioral stop assertions passed. The schema-promotion stop remains active.

## Method

### Deterministic fixture generation

ReportLab and Pillow generated 11 invariant PDFs:

1. clean born-digital single-column text;
2. a repeated identical quotation with different local contexts;
3. a synthetic two-column paper;
4. a table plus vector figure and caption;
5. an image-only scan;
6. the same scan with an invisible OCR text layer;
7. correctly rendered Hebrew plus English text;
8. version one of a report;
9. version two moved from Letter page 1 to A4 page 2;
10. a changed version containing two equally plausible copies; and
11. a changed version in which the original passage was reworded.

Generation uses ReportLab invariant mode. Two complete generation and
resolution runs produced byte-identical machine results. The final
`results.json` SHA-256 was
`9a336df8433cf7c55271a4c1d98279694402b9bcb337fe2ce3d5c320da7e72ae`.

### Extraction

PDF.js `6.2.108` extracted page text items, direction, page geometry, and item
geometry. The harness built normalized page and document text while preserving
a mapping from normalized characters to source text items.

Normalizer `v1` applies Unicode NFKC, stable quote/dash normalization, and
whitespace collapse. `v2-dehyphenate` additionally removes a line-break hyphen
between letters. This controlled change proves that the same material can need
relocation when its extraction contract changes; it does not substitute for a
real PDF.js-version comparison.

### Experimental capture evidence

The disposable descriptor recorded:

- material SHA-256 and byte length;
- extractor name and version;
- normalizer version;
- exact normalized quote plus bounded prefix and suffix;
- page-relative and document-relative start/end positions;
- page number, dimensions, rotation, and a text/geometry fingerprint;
- one or more rectangles in PDF coordinates and normalized coordinates; and
- a SHA-256 over the original capture evidence.

These names and nesting are not a schema recommendation.

### Conservative resolution

The resolver returned `exact` only when material hash, extractor, normalizer,
page fingerprint, page number, position, and quote all agreed. Otherwise it
searched every exact normalized quote occurrence:

- one candidate became `relocated`;
- repeated candidates could become `relocated` only when bounded prefix/suffix
  context made one clearly stronger;
- similarly plausible candidates became `ambiguous` with no selected region;
  and
- no candidates became `orphaned`, with a distinct reason for no extractable
  text.

Every attempt returned new resolution evidence and left the capture object
unchanged.

## Result Matrix

| Case | Expected and actual result | Evidence |
| --- | --- | --- |
| Close and reopen | Exact | Serialized capture reopened with the same material, extraction contract, position, page fingerprint, quote, and rectangle. |
| Identical reimport | Exact | A second extraction of identical bytes retained content identity independent of path. |
| Normalizer change | Relocated | Same PDF bytes under `v2-dehyphenate` were not called exact. |
| Multi-line selection | Exact | One quote spanning two text items retained two rectangles. |
| Repeated quotation | Relocated | Two matches existed; only the capture's prefix/suffix context distinguished the selected occurrence. |
| Two-column passage | Exact | The synthetic content stream preserved the intended right-column reading order. |
| Figure caption | Exact | Quote, page, and rectangle reopened. |
| Table row | Exact | Label and value in separate text items retained two rectangles. |
| Image-only scan | Orphaned | The material had no extractable text; no passage was invented. |
| OCR overlay | Exact | Hidden text was extractable, while its quality remained explicitly unmeasured. |
| Hebrew and English | Exact | The rendered Hebrew was legible and PDF.js returned the Hebrew item with `dir: rtl`. |
| Repaginated changed version | Relocated | The same unique quote moved from Letter page 1 to A4 page 2 in changed bytes. |
| Duplicate changed version | Ambiguous | Two identical quote/context candidates remained; neither was selected. |
| Reworded changed version | Orphaned | The original quote was absent; no fuzzy substitute was accepted. |

## Structural And Visual Verification

- Poppler `pdfinfo` reopened every fixture and confirmed intended page counts,
  PDF 1.3 structure, and Letter/A4 geometry.
- Poppler rendered every page. Representative clean, multi-column, table,
  scan, OCR, RTL, and two-version pages were visually inspected.
- The first RTL generator attempt exposed a fixture defect: ReportLab had not
  applied bidi ordering. The generator was corrected to render the English and
  visually reordered Hebrew runs separately. The final visible phrase is
  correct and PDF.js extracts the logical Hebrew phrase as RTL.
- The scan and OCR-overlay pages are visually identical by design; only the OCR
  variant has hidden text drawing commands.
- Multi-line and table-row captures each preserved two rectangles. All captured
  rectangles were bounded by the corresponding page dimensions.

## External Evidence And Reuse Boundary

### W3C Web Annotation Data Model

The W3C Recommendation's Text Quote Selector records exact text plus prefix and
suffix to distinguish repeats. Its Text Position Selector records start and end
but is explicitly brittle when a resource changes. The experiment adapted this
complementary-signal idea only. It did not adopt JSON-LD identity, Web-resource
authority, or an assumption that web selectors solve PDF identity.

Reviewed references:

- <https://www.w3.org/TR/annotation-model/#text-quote-selector>
- <https://www.w3.org/TR/annotation-model/#text-position-selector>

### Hypothesis client

`hypothesis/client` main was
`b4d085a2f893aa6de3b61d8b8bc3ae4d0f24fc1a`. Its BSD-style licensed HTML
anchoring code records several selectors, uses position as a hint, validates
positional/range results against the exact quote, and falls back to quote
anchoring. This supported the multi-signal direction.

No Hypothesis code, DOM range model, account/storage model, or dependency was
copied or adopted. The experiment was independently implemented against PDF.js.

Exact source:

- <https://github.com/hypothesis/client/blob/b4d085a2f893aa6de3b61d8b8bc3ae4d0f24fc1a/src/annotator/anchoring/html.ts>

### Hypothesis PDF-region discussion

Open issue #3720 proposes page-number and PDF-coordinate rectangles and records
why viewer-specific text extraction and PDF.js version changes are hard. This
supported preserving page/rectangle evidence alongside text selectors. Its
proposed `PDFRegionSelector` shape was not adopted as a Scient schema.

- <https://github.com/hypothesis/client/issues/3720>

### Hypothesis PDF text-quality research

`hypothesis/pdf-text-quality` main was
`b293fdcfa51df1f69de4baeea8423315db38ed98`. Its documentation distinguishes
visible scan pixels from hidden OCR text and measures how well OCR-derived text
boxes align with visible words. This supports an explicit quality state rather
than treating text presence as trust.

No code or fixture was copied. A root `LICENSE` file was not present at the
reviewed revision, so reuse remains blocked until explicit license provenance is
resolved.

- <https://github.com/hypothesis/pdf-text-quality/tree/b293fdcfa51df1f69de4baeea8423315db38ed98>

### Mozilla PDF.js

Scient already pins Apache-2.0 `pdfjs-dist` `6.2.108`; tag `v6.2.108` resolved to
`0365cbde028bd92e58f2dab1bb70cd30ac7acfd7`. The spike reused that dependency.
It does not declare one PDF.js version to be durable scientific identity.

- <https://github.com/mozilla/pdf.js/tree/v6.2.108>

## Findings That Should Inform ADR-0009

1. One locator is not enough. Position, quote/context, material identity,
   extraction identity, page identity, and rectangles fail differently.
2. Exactness must be narrower than successful relocation.
3. Ambiguous and orphaned are normal states that must survive and remain
   reviewable.
4. Original capture selectors should remain immutable. Resolution attempts and
   accepted rebinding should be separate operation/provenance evidence.
5. Page rectangles are useful for return and visual review, but they do not
   replace semantic text selectors.
6. Image-only and OCR-derived materials require distinct quality and recovery
   paths.
7. The Source material-selection contract is a valid prerequisite because an
   anchor cannot be durable while “the first attachment” is its material
   identity.

## Original Experiment Limitations (2026-08-30)

- The fixtures are synthetic and deliberately ordered. Real publisher PDFs can
  interleave columns, glyphs, headers, footnotes, equations, and hidden layers.
- Rectangles are PDF.js text-item rectangles. A partial-item quote gets the
  whole item's rectangle; production needs character-accurate or reader-native
  selection geometry.
- The context threshold and score margin only make this experiment
  deterministic. They are not calibrated and must not ship.
- The experiment compares two normalizers but only one actual PDF.js version.
- OCR text presence is tested; OCR correctness and text/image alignment are not.
- The existing Scient reader's selection, zoom, rotation, keyboard, bidi, and
  reopen behavior were not integrated.
- Ligatures, vertical writing, equations, rotated pages, malformed encodings,
  overlapping hidden text, encrypted PDFs, and very long documents remain
  untested.
- Whole-document extraction and repeated quote scanning have no performance
  evidence.
- Material-version policy, accepted rebinding, workspace authority, operation
  receipts, and agent exposure remain architecture decisions, not spike output.

## Recommendation And Next Gates

Keep ADR-0009 Proposed and keep `.scient/evidence/` uncreated. Continue Phase
Zero with these gates:

1. assemble a clearly licensed real-world corpus covering real publishers,
   poor text layers, equations, reading-order failures, rotation, mixed RTL/LTR,
   and controlled material revisions;
2. compare at least two actual PDF.js versions and record page, text, direction,
   and geometry deltas;
3. measure OCR text/image alignment or expose an explicit unknown/poor state;
4. capture character-accurate rectangles from the existing reader and verify
   zoom, rotation, pagination, and reopen;
5. measure false relocations and missed relocations before choosing context or
   scoring thresholds; a wrong automatic relocation is a stop condition;
6. benchmark bounded extraction and resolution on long documents and many
   anchors;
7. review product presentation for exact, relocated, ambiguous, orphaned,
   no-text, and poor-OCR states; and
8. only then propose the smallest versioned Region contract and migration
   harness.

The following follow-up advances some gates. P0.3 must not be marked complete
overall.

## Reader And Actual-Extractor Follow-up — 2026-08-31

### Candidate and boundary

Desktop candidate `codex/sources-pdf-passage-proof-20260831` was implemented and
computer-use tested on `16266e27782c98d7d3a5722998ccddda9de7c218` (merged
PR #213). Main then gained the unrelated LaTeX diagnostic fix in PR #214;
after checking its four changed files for overlap, the candidate was
fast-forwarded to `705df5785abcdaf13905100dfd81792c78d13d9e`. The PDF changes
were preserved unchanged. At this evidence snapshot those changes are local
and uncommitted, not hosted or merged evidence.
The implementation is in `apps/web/src/scient/pdf/passages/`, with development
controls in `ScientPdfReader.tsx` and runtime reconstruction in
`useScientPdfReader.ts`. The existing `docs/internals/scient-pdf-reader.md`
documents reproduction and limits in that candidate. No T3-owned routing,
provider adapter, server contract, or dependency was changed.

The separate agent-tools operation-authority candidate is not duplicated or
assumed accepted. This proof uses existing authorized PDF loading and writes
no capture to `.scient/`, browser storage, or a provider. The Source attachment
selected by the existing UI remains the material; the reader hashes its loaded
bytes. Durable association with Source/attachment IDs still belongs to the
later reviewed domain contract, not this generic-reader descriptor.

The adapter captures a real DOM character range, not a whole PDF text item.
It compares raw text-layer content with PDF.js extraction before accepting
UTF-16 offsets, quote/context, page hashes, and native-PDF rectangles. Exact
return additionally requires identical bytes, extractor/profile, and intrinsic
page geometry. It deliberately does not search for a replacement passage.
One capture survives an explicit runtime reopen in memory, but not reader
unmount or app restart. No durable Region, Annotation, migration, export,
accepted rebinding, or downstream evidence-link decision has been made.

### Licensed corpus and extraction evidence

The read-only `scripts/scient-pdf-passage-corpus.mjs` compares actual PDF.js
6.2.108 and 5.4.624 in separate processes, then reopens with 6.2.108. Both use
the same installed canvas primitives for module initialization; this is text
and page-geometry evidence, not headless rendering evidence. The reference
module came from the official `pdfjs-dist` npm package; it is not installed as
a new application dependency. PDF.js retains its Apache-2.0 license.

Two real papers (six pages) were obtained from their publisher under CC BY 4.0:

- Stahl et al. (2025), [PDF Entity Annotation Tool (PEAT)](https://joss.theoj.org/papers/10.21105/joss.05336),
  four pages, 641,137 bytes, SHA-256
  `08bcf2d529714d0af8ee04fadb392995a6b22a59210a58833963bb97aa192c85`.
- LeBeau (2018), [pdfsearch](https://joss.theoj.org/papers/10.21105/joss.00668),
  two pages, 132,688 bytes, SHA-256
  `df5987349420372f8c4cdd67131e5e354ae4a0bd48df0e8f5b0cac124bb1b691`.

These PDFs are test material, not architecture endorsements. No code from PEAT
or pdfsearch was copied. The corpus remains small and single-publisher.

Five one-page fixtures from the original controlled corpus add mixed RTL/LTR,
two-column text, an image-only scan, an OCR overlay, and a table/figure. Across
all seven PDFs (11 pages), page text hashes, dimensions, intrinsic rotation,
and user units matched between the two actual engines and across current-engine
reopen. The scan produced zero text units; the OCR overlay produced 91. These
results do not measure OCR truth or alignment. The harness records cold timings,
but single runs are not a comparative performance benchmark.

### Integrated evidence and discoveries

An isolated Scient development app used only a disposable test project and
the licensed/controlled fixtures. Computer-use checks verified:

- partial-word selection in the real PEAT PDF, byte-verified capture, full PDF
  runtime destruction/reopen, exact return, and a visible character-range mark;
- a Hebrew word selected from the mixed-direction fixture, exact return after
  reopen, correct visible word marking, and preserved alignment after zoom;
- mark repaint after a 90-degree reader rotation; and
- capture, runtime reopen, exact return, and visible marking in the Sources
  attachment reader, using existing import and stable attachment selection.

On the image-only scan, dragging across visible words did not enable capture;
the existing reader notice correctly reported no selectable opening-page text.
No OCR was inferred from visible pixels.

The first real highlight check exposed a PDF.js API mismatch: the candidate
called a removed viewport rectangle conversion, hidden by an upstream `any`
return type. It now types the page-view seam and uses supported point
conversions. An adapter regression test checks conversions, repaint events,
and marker cleanup. This is why an exact-text assertion alone is insufficient
evidence for correct visible return.

Pure/model and runtime-adapter tests cover duplicate-looking text, immutable
capture data, changed bytes/text/extractor/geometry, missing pages, size bounds,
copy restrictions, retry after material-read failure, and no byte read for empty
selection. The development UI is opt-in and absent from production JavaScript.

The full repository test command passed on the PR #213 baseline. After the
non-overlapping main fast-forward, the focused PDF suite passed 131 tests
(37 new passage tests), the changed LaTeX suites passed 65 tests, and full
typecheck, full build, desktop smoke, formatting, and diff checks passed.
Full lint passed before that fast-forward; final changed-file lint also passed.
Existing unrelated lint/build suggestions remain. The full repository test
command and computer-use QA were not repeated after the LaTeX-only advance.
The isolated development app was stopped; its service, captured process tree,
and both listeners were confirmed absent. No stable app or other candidate
was stopped. These are local checks, not hosted CI or human product acceptance.

### Gate assessment

**Progress:** an initial licensed real-paper corpus, actual two-engine
comparison, and integrated character-range capture/reopen are now evidenced.
**Still open:** representative publisher/layout coverage, complex reading order,
multi-page and keyboard/accessibility qualification, malformed/encrypted PDFs,
poor-OCR behavior, long-document performance, calibrated relocation and false
matches, accepted material/version/rebinding policy, persisted schema/migrations,
and the complete human/agent review and export journey. Browser-only/remote/mobile
paths and human product acceptance are not established by this local desktop QA.

The next decision remains whether the evidence is sufficient to propose the
smallest durable capture contract after expanding the remaining risky cases.
Do not call this P0.3 complete or advertise saved highlights. ADR-0009 remains
Proposed and library organization/downstream evidence links remain open direction.

## Adversarial Hardening Follow-up — 2026-08-31

This follow-up remains on desktop base
`705df5785abcdaf13905100dfd81792c78d13d9e`, with local, uncommitted changes on
`codex/sources-pdf-passage-proof-20260831`. It does not incorporate the concurrent
upstream-alignment candidate or accept ADR-0009. Reproduction and implementation
limits remain in the desktop reader document named above.

The adversarial review found four concrete weaknesses: diagonal text received
an oversized rectangular mark; an unchanged but incorrect hidden OCR layer
could be mistaken for verified wording; full-file hashing ran synchronously;
and unsupported selections gave no useful explanation. The hardening changes
the proof as follows:

- Refuse diagonal text before collecting axis-aligned geometry. This prevents
  a misleading highlight; it **does not implement faithful diagonal capture**.
  Oriented geometry remains a durable-format acceptance gate.
- Show the extracted quote immediately and describe success as matching PDF
  and text location, explicitly not verified wording or scientific meaning.
  A controlled PDF with visible “increased…12%” but hidden “decreased…72%”
  confirms why that distinction is necessary; no OCR confidence score is invented.
- Transfer the loaded PDF byte view to a one-shot hash worker, share the
  material result per runtime, terminate workers on success/failure, and retry
  failed reads. PDF.js still supplies a full-byte copy. Clear/unmount reject
  late results rather than pretending to cancel the underlying bounded hash.
- Distinguish empty, ready, and refused selections, preserving the previous
  capture on refusal. Enforce page, character, raw rectangle, and DOM traversal
  budgets during collection and use set-based rectangle deduplication.

Repeated runtime testing also exposed retained PDF.js hidden copy helpers.
Detaching the viewer and document services before transport destruction fixes
that lifecycle defect in the shared reader, not only in the experiment.

### Current-run evidence

The run used the actual candidate frontend and isolated backend with synthetic
fixtures and the previously licensed PEAT paper. Browser debugging created
controlled ranges in the real PDF text layer; ordinary UI controls then performed
capture, reopen, return, and clear. Screenshots were inspected. This is integrated
browser proof, **not native mouse/keyboard or human acceptance**.

| Check | Observed result and limit |
| --- | --- |
| Diagonal and bad-OCR fixtures | Diagonal capture refused; extracted OCR quote and accuracy warning visible beside the page. |
| Selection boundary | Four pages captured; five-page refusal explained without replacing the prior quote. |
| RTL and Source attachment | Hebrew word and PEAT partial-title capture reopened and returned correctly; RTL mark also repainted after zoom and 90-degree rotation. |
| Runtime cleanup | 16 consecutive reopen/return cycles retained exactly one copy helper for one reader, with no new console errors. This is not exhaustive heap profiling. |
| Worker failure/cancellation | Forced worker failure preserved the prior quote and allowed retry; Clear during a deliberately delayed worker response stayed cleared after that response. |
| Large-file responsiveness | A valid 100,664,255-byte PDF (about 96 MiB) transferred its hash buffer in 1.1 ms; the observed window had 205 animation frames, maximum frame gap 16.1 ms, and no long-task entries. Cold development-worker hashing took 1,687 ms total. The fixture has a large embedded payload, not a scan-rendering workload; peak-memory/slow-network qualification remains open. |
| Model stress | 10,000 deterministic mixed-Unicode captures, 70,000 assertions; changed material/extractor/text/geometry/page refused and original evidence unchanged. |
| Live backend stress | 600 requests at concurrency eight: 200 full/HEAD successes, 200 byte-range successes, 100 invalid-token refusals, 100 unsatisfiable ranges; zero byte/header mismatches. The PDF is 4,757 bytes, so this is request correctness under concurrency, not large-file throughput. |
| Automated checks | Final focused PDF suite: 154 tests in 17 files passed. Full server rerun: 4,342 passed, 40 skipped. Final full web suite: 4,315 tests in 465 files passed. Final production build and web typecheck passed; emitted production JavaScript contains neither the probe nor its hash worker. |

The earlier all-package test attempt reported 25 of 26 packages passing and a
server failure; the focused full-server rerun above passed. Do not rewrite that
first attempt as green. Exact final command logs and screenshots are local QA
artifacts under `/tmp/scient-passage-hardening-U8tzBc`, not permanent dependencies
or hosted evidence.

One later PDF.js `offsetParent is not set -- cannot scroll` console message
appeared during the switch from the rotated workspace PDF to Sources. Subsequent
Source attachment capture/reopen/return succeeded; the message was not reproduced
or attributed to a particular change. It remains an observation to reproduce,
not a claim of a fully console-clean session or an accepted regression.

Native relaunch was blocked by local macOS development signing. No signing or
permission bypass was used. Browser automation also did not establish a normal
drag/keyboard selection, which is a testing limitation rather than a proven
Scient defect. These gates, faithful oriented geometry, broader publisher/OCR
coverage, peak memory, persisted decoding/integrity, and human product review
remain open. Nothing here makes saved annotations, relocation, or durable
evidence storage production-ready.

### Morning completion checks — 2026-08-31

The native signing blocker was diagnosed in the installed
`@electron/osx-sign` 1.3.3 traversal: framework directory aliases caused duplicate
signing of the same physical resource. The candidate's development signer now
deduplicates canonical filesystem targets. Distinct code remains signed;
certificate selection, entitlements, release policy, and macOS security settings
are unchanged. A normal launcher rebuild and a second signing pass both passed
`codesign --verify --deep --strict`. The focused launcher suite passed all nine
tests; the full desktop suite passed 684 tests with 10 skipped, and desktop
typechecking passed. These are local candidate checks, not release evidence.

Eight rapid rotated-PDF-to-Sources transitions did not reproduce the earlier
`offsetParent` warning, but did expose one startup cancellation with the proof
closed: PDF.js reported `Unable to initialize viewer` / `Transport destroyed`
and an unhandled pages-promise rejection. Its initialization catch has no stale
document guard before rejecting the viewer capability. Returning to the same
document rendered correctly. Eight further transitions waiting for page-region
visibility produced no new console errors; one region's text was still pending
at the immediate read, and final text rendering was verified separately. There
was one copy helper for one active reader. This is a remaining reader lifecycle
issue, not a claim of corruption, a proved regression, or a fixed warning.

Final native mouse/keyboard QA and the new desktop smoke run were not performed
in this morning pass: shared Mac automation was paused after another agent
detected outside interaction. The candidate was not launched into that session.
The earlier native proof remains dated evidence, not validation of the final
hardening diff. Human acceptance and the architecture gates above remain open.

### Resumed lifecycle repair and native review — 2026-08-31

The same pinned desktop candidate now includes a narrow pnpm patch for both
PDF.js 6.2.108 viewer builds. An independent real-engine reproduction confirmed
that an old failed request could reject a replacement reader's capability.
Startup, eager-page completion, metadata, page-250 continuation and queued
pages-loaded events now check attachment ownership. Active failures remain
visible, including the reader's normal initialization-error state. Parser,
worker, extraction identity and asset authority are unchanged. Connected-layout
checks prevent stale resize/restore work; initially hidden readers retain their
pending restore until layout recovers. The package patch and its upgrade/retirement
check belong in the desktop reader documentation, not in the durable evidence ADR.

Final local checks passed: 41 real installed-viewer lifecycle regressions;
197 PDF tests across 19 files; 4,358 web tests across 467 files; 65 focused
backend tests; 27-task repository typecheck; production build; PDF lint and
formatting; and strict development-bundle signature validation. Initial test
harness construction failures were corrected and are not represented as passing
runs. The previous full-server and 600-request stress evidence remains separately
dated; this follow-up changes no server implementation.

With fresh user authority and a coordinated Mac slot, native input verified
PEAT partial-word drag/capture/reopen/return, Hebrew word capture/reopen/return,
the Hebrew mark after 90-degree rotation, Tab/Enter activation of Return, and
opening the exact Source attachment. This advances native interaction evidence,
not complete keyboard-selection or screen-reader qualification. Outside Mac
interaction interrupted the rapid-switch loop; no completed native loop or
clean-console result is claimed. Native diagonal/OCR refusal and a new smoke
run were not completed in this slot; earlier browser evidence stays distinct.

The app was stopped and input reset/released. Its captured runner, web, app,
backend and both listeners are absent; fixtures and screenshots remain under
`/tmp/scient-passage-hardening-U8tzBc`. Changes remain local and uncommitted on
base `705df5785abcdaf13905100dfd81792c78d13d9e`; the concurrent upstream alignment
was not imported. ADR-0009 remains Proposed, P0.3 remains partially proven, and
no saved annotation namespace or product contract was accepted.

### Local checkpoint for later QA — 2026-08-31

At the user's request, the desktop candidate is now preserved in local commit
`f4df88c14c2cacfbeb8d7b19da6cf8c502101534` on
`codex/sources-pdf-passage-proof-20260831`. Its worktree is clean. The final
checkpoint rerun passed 206 tests across the PDF and desktop-launcher suites;
the normal staged-format hook also passed. No push, merge, or release occurred.
The candidate app, service, backend, and both listeners are stopped; existing
synthetic fixtures and local evidence were retained for resumption.

Resume with the remaining native rapid-switch/console, diagonal/OCR-refusal,
and desktop-smoke checks above before claiming final QA. Reconcile then-current
main and upstream changes separately before integration; this checkpoint keeps
the reviewed base unchanged. The associated architecture proposals remain
Proposed and are not accepted by saving this evidence.
