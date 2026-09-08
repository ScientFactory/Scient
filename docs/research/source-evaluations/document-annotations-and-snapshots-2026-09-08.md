# Document Annotations And SnapShots: Source Evaluation And Recommendations

Status: Proposed
Owner: Yaacov
Created: 2026-09-08
Last updated: 2026-09-08
Purpose: Evaluates document annotation workflows, selection and anchoring systems, and incoming T3 SnapShots to recommend a simple, durable Scient annotation foundation without prematurely accepting storage or implementation decisions.
Doc type: Research evidence

## Scope And Authority

This file owns the dated external-system comparison and its implications for
Scient annotations. It is not an accepted ADR, implementation completion
record, second roadmap, or replacement for the broader
[document platform source map](scientific-document-platform-source-map.md).
Update it when new source evidence or a proof changes a recommendation;
promote accepted decisions into their existing owners rather than treating
this investigation as product truth.

The accepted [PRD](../../product/PRD.md) and
[ADR-0004](../../architecture/decisions/ADR-0004-scient-operation-capability-and-provenance-boundary.md)
govern product and operation authority. Proposed owners remain:

- [Sources experience](../../product/sources-and-evidence-experience.md): researcher journeys and product boundaries.
- [ADR-0009](../../architecture/decisions/ADR-0009-evidence-continuity-and-durable-support.md): evidence continuity, records, anchors and review.
- [Sources implementation plan](../../planning/sources-and-evidence-implementation-plan.md): delivery order and proof gates.
- [File/resource foundation](../../planning/file-resource-and-presentation-foundation.md): resource identity, resolution and presentation.
- [Document platform](../../planning/scientific-document-platform-roadmap.md): document editing, review and authoring.
- [ADR-0006](../../architecture/decisions/ADR-0006-project-owned-scient-state-and-source-store.md): project-owned storage conventions. New namespaces remain a decision, not permission supplied by this report.

### Evidence Boundary

Source inspection and official documentation research on 2026-09-08; no
computer use, new native QA, provider turns, product-code edits, upstream
integration, or real-project mutation in this pass. External products were
not run side by side. A repository pin is inspected source, not proof that
the corresponding feature ships in a released product.

| Scient reference | Exact inspected state | Qualification |
|---|---|---|
| Local desktop main | `4d4d53d80595de0f0da2308ce9b25259e094d0c8` | Current local baseline, not a newly fetched remote-main assertion. |
| Local Sources candidate | `codex/sources-pdf-passage-proof-20260831`, `200373d70e2d3f2d754f6e07129364f9a666def2` plus pre-existing uncommitted changes | Experimental saved-passage implementation; committed HEAD alone does not reproduce the reviewed candidate. |
| Incoming T3 | `349ce3014233352e073a5fc1b3f12bd786160913` | Read through Git objects. The active `codex/t3-sync-349ce301-20260908` worktree is mid-merge; its conflicted files are not a finished Scient integration. |
| Planning package | `codex/sources-evidence-decision-package-20260829`, `84401ed99502cd88cdb203830d2310d5553574c4` plus existing proposals | ADR-0009 and the focused Sources product/implementation documents are local proposals, not accepted or published architecture. |

Earlier private-corpus QA is separate evidence: it found a saved Hebrew quote
with reversed word order despite successful location matching, an import
failure associated with a Unicode filename, and several persistence/UX
defects. Those findings inform the gates below; they were not re-tested or
fixed here. Private papers, filenames, excerpts, and screenshots stay outside
this repository. The local QA report retains the detailed reproductions.

## Recommendation In Brief

Build one Scient-owned annotation lifecycle, with document-specific targeting
adapters and familiar interaction components. Start by qualifying PDF capture,
including a region option, rather than building an all-format annotation
platform immediately. Sources is the first owning workflow, not the mandatory
container for every document a researcher may annotate.

Keep these distinctions visible in the design, not as extra setup screens:

1. Selecting something is temporary; highlighting or commenting intentionally saves work.
2. A saved annotation belongs to a particular document revision, not a chat message.
3. Locating a mark, transcribing its text correctly, and accepting scientific support are different facts.
4. Sending context to an agent is a projection of selected material, not a new source of authority.
5. An annotation may inform a claim or manuscript without already being a claim, citation, screening decision, or edit proposal.

The goal is a dependable reading-to-reuse loop: mark, optionally explain,
continue reading, find it again, reopen its context, and reuse it without
silently changing what was captured. The scientific advantage comes from
this continuity, not from having the largest annotation toolbar.

## What The Existing Systems Teach Us

### Zotero: Reading Into Notes And Citations

Zotero connects reader annotations to notes and return-to-page links; ordinary
selection can expose highlighting actions without a mandatory review form.
It also permits adding selected text to a note without first making a
highlight. Its annotations live separately from PDF bytes, and annotated
copies can be exported. These are useful workflow and persistence references.
[Reader documentation](https://www.zotero.org/support/pdf_reader),
[storage explanation](https://www.zotero.org/support/kb/annotations_in_database).

At reader pin `1f3263034b4cfc4e1aa324f88126a933b6f1f595`,
[native selection mapping](https://github.com/zotero/reader/blob/1f3263034b4cfc4e1aa324f88126a933b6f1f595/src/pdf/native-text-selection-map.mjs)
maps DOM offsets to reader characters, normalizes matching, handles some
hyphen differences and rejects unsuccessful matches.
[Selection logic](https://github.com/zotero/reader/blob/1f3263034b4cfc4e1aa324f88126a933b6f1f595/src/pdf/selection.js)
uses character geometry and semantic-flow revisions. This is evidence that
better selection needs a mapping layer, not just a different popup. It is
not proof of universal RTL correctness: this file even contains an `isRTL`
stub returning false; the full behavior across code paths needs fixtures.

**Scient implication:** learn the low-friction reading loop and investigate
bounded character/flow mapping. Do not copy Zotero's entire library database,
silently normalize original quotations, or import annotations by modifying
the original PDF. The reader's
[COPYING](https://github.com/zotero/reader/blob/1f3263034b4cfc4e1aa324f88126a933b6f1f595/COPYING)
states AGPLv3: behavior reference now; any code reuse needs a separate
license and dependency review. No donor adoption is approved here.

### Hypothesis: Multiple Anchors And Honest Missing Locations

Hypothesis distinguishes highlights, annotations and whole-document notes.
Its “Page Note” is about the web document as a whole, not necessarily one
numbered PDF page. It preserves unanchored annotations rather than treating
an unsuccessful location lookup as deletion.
[Annotation types](https://web.hypothes.is/help/whats-the-difference-between-an-annotation-and-a-highlight/),
[unanchored annotations](https://web.hypothes.is/help/what-are-unanchored-annotations/).

At client pin `b4d085a2f893aa6de3b61d8b8bc3ae4d0f24fc1a`, the
[PDF adapter](https://github.com/hypothesis/client/blob/b4d085a2f893aa6de3b61d8b8bc3ae4d0f24fc1a/src/annotator/anchoring/pdf.ts)
checks position against a quote, then falls back to quote matching. It also
has page/shape targeting. These paths are useful comparisons, not a license
to silently relocate Scient evidence using approximate matches.

**Scient implication:** preserve the annotation when its location is missing;
offer explicit repair with the original anchor retained. Study page/shape and
quote/position adapters. Do not adopt global document-text offsets as the
only PDF anchor or reconstruct every preceding page for every capture.
The [client license](https://github.com/hypothesis/client/blob/b4d085a2f893aa6de3b61d8b8bc3ae4d0f24fc1a/LICENSE)
contains two-clause redistribution terms and separately licensed components;
inspect the exact dependency closure before adaptation.

### PDF++: Regions And Backlinks Without Mandatory Library Import

PDF++ supports both backlink-based highlighting and annotations written into
PDFs. Its rectangular embeds use PDF user-space coordinates, with a warning
that the enhanced link syntax depends on the plugin.
[Annotation modes](https://ryotaushio.github.io/obsidian-pdf-plus/annotating-pdfs.html),
[rectangular embeds](https://ryotaushio.github.io/obsidian-pdf-plus/embedding-rectangular-selections.html).

**Scient implication:** a figure, table or scanned passage can be useful as a
region even with no trustworthy text. Reuse should link back to its location.
Keep normal workspace documents annotatable without forcing them to become
bibliographic Sources. Do not make a filesystem path plus viewer URL the only
durable identifier. This is a behavior reference, not a selected dependency;
repository head inspected was `6a3218b9c506076b405438489e614bc9e22b833b`.

### Acrobat: Review Intent Is Not An Applied Edit

Acrobat distinguishes highlighting from insertion, replacement and deletion
markup. Those are useful author-review intents, not interchangeable marks.
[Official review documentation](https://helpx.adobe.com/ie/acrobat/web/share-review-and-export/review-pdfs/markup-document-redlining.html).

**Scient implication:** a comment on a draft may later become a proposed edit,
but saving that comment must not apply an edit. A research highlight likewise
must not automatically become accepted support for a claim. Retain these
future workflows without placing a full editorial toolbar in the first PDF
reading increment.

### Supporting References, Not New Platform Dependencies

- **W3C Web Annotation:** body, target, selector and representation state are
  useful interoperability concepts. Text positions require normalized logical
  text and Unicode code points, not arbitrary DOM or UTF-16 offsets. Scient's
  current `pdfjs-text-layer-utf16-eol-v1` capture profile is therefore not
  automatically a conforming Web Annotation selector. An export adapter must
  convert deliberately; adopting the concepts does not require JSON-LD as
  canonical storage. [Recommendation](https://www.w3.org/TR/annotation-model/#selectors).
- **ProseMirror:** decorations can be mapped through editor transactions.
  That is useful for maintaining visible marks during an editing session,
  not by itself a durable anchor across disk edits, reloads or another editor.
  [Guide](https://prosemirror.net/docs/guide/). Reuse the actual Scient editor's
  mapping seam; do not switch editors solely to obtain annotations.
- **Annotorious:** a client-side image annotation component is a possible
  future image/large-image adapter. It is not document identity, PDF reading
  order, or Scient persistence. Its site identifies BSD-3-Clause licensing;
  no source/dependency qualification was performed here.
  [Project documentation](https://annotorious.dev/).
- **Readwise Reader:** its API connects document/highlight records and notes,
  useful as a reference for agent-addressable reading workflows. This is not
  a reason to make a cloud service or its document model authoritative for
  Scient. [API](https://readwise.io/reader_api).

No inspected system demonstrates “correct selection in every PDF.” The useful
combination is good interaction, redundant location evidence, retained source
identity, a non-text route, and explicit uncertainty when these disagree.

## SnapShots And Existing Scient/T3 Seams

### Four Different Meanings Of Snapshot

| Thing | What it preserves | What it cannot establish by itself |
|---|---|---|
| Incoming T3 SnapShot | Active-window pixels and optional app/accessibility context for a chat draft | Document revision, PDF page anchor, faithful quotation, or scientific acceptance |
| PDF region rendering | A crop derived from known PDF bytes and page geometry | Correct OCR or a claim's validity |
| Immutable document revision | Exact owned artifact bytes and revision/provenance identity | User annotation intent or a selected passage |
| Application/project checkpoint | Some recoverable application or project state | A document annotation unless its records and material dependencies are actually included |

Incoming [Snap Shot documentation](https://github.com/pingdotgg/t3code/blob/349ce3014233352e073a5fc1b3f12bd786160913/docs/user/snap-shot.md)
describes window capture, optional accessibility context and draft attachment.
The [coordinator](https://github.com/pingdotgg/t3code/blob/349ce3014233352e073a5fc1b3f12bd786160913/apps/web/src/components/desktop/SnapShotCoordinator.tsx#L134)
compresses the image, rescales accessibility bounds, persists the composer
attachment, then acknowledges the desktop capture. That acknowledgment means
draft delivery, not annotation commitment. The named
[RegionSnapShot](https://github.com/pingdotgg/t3code/blob/349ce3014233352e073a5fc1b3f12bd786160913/apps/desktop/src/snapShot/RegionSnapShot.ts)
captures a Windows window rectangle; it is not a PDF region-selector contract.

Source review also found that the coordinator's capture destination is held
in memory rather than persisted with the capture. Native recovery and routing
after restart remain unqualified. Do not infer original intended project
authority from whichever thread is open during replay.

### Reuse Existing Infrastructure At The Correct Boundary

| Existing seam | Recommended use | Boundary to retain |
|---|---|---|
| `apps/web/src/lib/selectionActions.ts` and `AssistantSelectionToolbar.tsx` | Gesture/placement, selection preservation and action presentation patterns | Chat-message identity is not a document anchor; PDF needs its own target adapter. |
| `packages/contracts/src/ipc.ts` `PreviewAnnotationPayload`; desktop preview annotation UI and `Manager.ts` | Region/comment interaction, cancellation, late-completion and screenshot lifecycle patterns | Browser viewport/DOM coordinates are not persisted PDF user-space geometry. |
| `apps/web/src/components/files/fileCommentAnnotations.ts` | Existing file-line comment and remapping vocabulary | Session line annotations are not proof of revision-safe durable document comments. |
| `apps/web/src/lib/previewAnnotation.ts`, composer draft and attachment storage | Optional context cards/crops sent to an agent | Prompt projection is lossy: region/ink geometry becomes counts in its text summary. Never reconstruct canonical annotations from this. |
| `packages/scient-document-artifacts/src/contracts.ts` and `binding.ts` | Existing authority, artifact/revision IDs, content hash, producer provenance and superseded-completion rules | Current generated-artifact schema is PDF-specific, not a completed universal resource service. |
| `packages/scient-sources/src/{model,store,passages}.ts` in the candidate | Source/material identity, original bytes, bounded validation, optimistic concurrency and retry protections | Current Source-embedded passage schema is experimental, not the approved general annotation model. |
| Existing Sources HTTP/MCP and future shared operation foundation | One operation implementation, with host-resolved project/workspace scope | A skill explains use; MCP transports calls; neither owns evidence or grants authority. |

Main-side examples are pinned at
[desktop main](https://github.com/ScientFactory/scient-desktop/tree/4d4d53d80595de0f0da2308ce9b25259e094d0c8).
Candidate-only paths refer to the dirty candidate identified above.

For known PDFs, render selected regions from the document renderer. Do not
require screen-recording permission, a foreground window, or a native
SnapShot merely to save a figure from a PDF Scient already has open. Reuse
chat attachment transport when the user sends that crop, not as the canonical
place to retain it.

SnapShot is off by default; its
[accessibility inclusion defaults on](https://github.com/pingdotgg/t3code/blob/349ce3014233352e073a5fc1b3f12bd786160913/packages/contracts/src/settings.ts#L430)
when capture is enabled. Window metadata and accessibility content can reveal
more than a crop. Untrusted-data labeling is important but not redaction.
Keep context inspectable, bounded and explicitly sent; do not attach unrelated
window text to a document region. Hash equality establishes byte identity,
not authenticity or scientific correctness.

### Upstream Intake Plan, Not An Upstream Merge

Continue research and isolated regressions now. After the alignment lands,
align this candidate with reviewed main, then inspect only the shared seams:
selection actions, preview annotation contracts, composer draft persistence,
attachment compression/cleanup, provider projection and document binding.
Preserve Scient's attachment failure cleanup and queue-protocol safeguards;
source comparison found main-side behavior absent from the pinned upstream
normalizer, not a proven defect in the unfinished merge result.

Keep scientific records and resolver behavior in Scient-owned modules. Add
small adapters at host seams. Do not cherry-pick the active alignment, fork
its capture implementation, or wait for SnapShots before making durable PDF
storage correct. Real adapter/desktop tests must follow the eventual merge.

## Proposed Researcher Experience

### One Small Context Action, Not A Floating Application

On completed text selection, show a compact **Highlight** and **Comment**
action group. An **Ask Scient** action can reuse existing chat context once
that projection is qualified; it need not block the first durable slice.
Keep ordinary selection/copy intact and provide keyboard/menu equivalents.
Do not save just because the user selected text.

Highlight should be one deliberate action, with a small acknowledgement and
undo/recovery rather than a mandatory form. Comment opens a small note editor
showing enough selected context to orient the user. Saved quote details and
page context remain inspectable. Where extraction is known to be problematic,
warn before offering it as a quotation and offer area capture instead.

This refines the earlier QA suggestion of a capture-review panel on every
save: inspection must be easy, but normal highlighting should not require an
extra confirmation screen. ADR-0009 already proposes that a trusted manual
action can sequence capture and acceptance operations internally. That
proposal still needs acceptance; a compact UI cannot waive accepted
ADR-0004's receipts or turn an agent proposal into accepted evidence.

### Text Is Not The Only Selection Mode

**Select area** should be a discoverable reader action for figures, equations,
tables and scans, available without first failing text selection. Save the
page region and optional comment even when no reliable quotation exists.
Offer a simple page note when precise targeting is unnecessary. Text and
area marks should appear in the same annotation list, not separate products.

An area crop is not structured table extraction or OCR. If text is added
later, retain the distinction between extracted text, human transcription,
AI/OCR proposal and the note's interpretation. Never silently replace the
original extraction with a cleaned-up quotation.

### Preserve The Reading Loop

Saving should not open the large passage tray, move to another page, steal
focus, or erase Sources search. Keep one explicit annotations view; clicking
a mark and clicking its list entry should navigate to each other. If the
list is already open, reveal the new item there. Put context-specific
actions near the selected mark, not permanent controls on every row.

Notes must survive ordinary navigation through the established draft/save
convention, including conflicts. Missing materials should leave an inspectable
note with **Locate original** or another real recovery action, not a blank
reader or raw server error. Ambiguous anchors should remain visible as
unresolved annotations, not disappear from the list.

Color alone must not communicate authorship, review or failure. Test focus,
keyboard selection, popup dismissal, text direction, zoom and narrow layouts.
Minimalism means removing needless decisions and controls, not hiding saved
work, failure recovery, or accessibility affordances.

## Proposed Engineering Boundary

### One Lifecycle; A Small Set Of Target Adapters

The common lifecycle owns stable annotation identity, body revisions, actor
and operation provenance, expected-version mutation, recovery, list/read and
export. Target adapters own selection, validation, resolution and rendering.
This is a module boundary, not a proposal for several services or databases.

| Target family | Appropriate anchor | Important limit |
|---|---|---|
| Source PDF material | Existing Source/material reference plus exact content hash, page and text/region selector | Source metadata and default attachment can change; neither selects the original material implicitly. |
| Generated document | Existing artifact authority and immutable revision, with presentation-native selector | Rebuilding produces another revision; don't move annotations to it invisibly. |
| Ordinary project document | Authorized stable resource reference plus exact revision evidence, with format-specific selector | The planned resource identity service is not fully implemented. Don't equate path, title or matching bytes with complete ownership. |

Implement the PDF adapter first. Prove the common lifecycle with a small
non-PDF text prototype before declaring it generic; do not ship a universal
resource union or migrate all viewers first. Existing source-level notes
remain source notes; chat annotations and user Markdown ledgers remain what
they are. No automatic conversion into new annotation records.

Annotations on a researcher's protocol or draft should belong to that project
document. They should not require **Add to Sources**. Sources import remains
an optional, explicit bibliographic workflow, not a prerequisite for durable
document comments. Conversely, do not build a second isolated annotation
database for ordinary workspace files. Cross-format delivery depends on
settling resource identity and retention, not on pretending it already exists.

### Separate Three Truths

| Axis | Example information | What it must not imply |
|---|---|---|
| Location | Original revision available; geometry matches; text anchor changed; ambiguous or missing | That extracted words are in the intended reading order |
| Text fidelity | Extraction profile; original extraction; unavailable text; separately attributed transcription/review | Scientific validity, even when a person corrected the quotation |
| Scientific review | Annotation, agent proposal, reviewed interpretation, explicit accepted support through the owning workflow | That every highlight needs a claim or a formal appraisal |

These are conceptual distinctions, not three badges required on every
highlight. Show normal content plainly and surface the relevant uncertainty
where it affects copying, reuse, repair or acceptance. Avoid a single green
“verified” indicator that collapses all three.

### PDF Selection And Anchoring

1. Retain the original bytes/hash and extraction profile. Build a mapping
   between visible selection, page-local character spans and geometry;
   validate these against each other. Raw DOM order alone is insufficient.
2. Store page geometry in a documented PDF coordinate system including crop
   box, rotation and user unit. Support multiple quads/runs rather than one
   large rectangle spanning unrelated columns. Treat a cross-page selection
   as explicitly bounded page-local parts.
3. Preserve original extracted text. Use normalization only in a versioned
   matching projection; don't silently change ligatures, minus signs,
   superscripts, bidirectional order or hyphens in the saved quotation.
4. Resolve the exact material first. On that material, geometry can remain
   valid when the text extractor changes. Report text verification separately
   rather than making all location recovery depend on the old extractor.
5. Use quote/context matching as a bounded recovery aid. Repeated quotes and
   multiple candidates require explicit choice; replacement bytes require a
   new reviewed target revision. Never search the whole disk or guess the
   nearest-looking passage and call it the original.
6. When text is absent or untrustworthy, region/page capture remains useful.
   OCR and improved layout analysis can later produce attributed derivatives;
   neither is a silent repair or prerequisite for basic annotation.

Specific proposal reconciliation: ADR-0009's layered-anchor section currently
specifies an “exact normalized quote” and normalized positions without
explicitly retaining a raw counterpart. Before schema acceptance, distinguish
the immutable original extraction, the versioned matching projection and any
separately attributed transcription. Following the older wording must not
discard the original extraction or present normalized text as verbatim.

General-document adapters must be honest about their representation. Markdown
source offsets, rendered text offsets and editor positions are different.
In-session transaction mapping helps with edits; external file changes and
reloads still require revision checks and re-resolution. A comment on a
rendered PDF is not automatically a DOCX paragraph or LaTeX source comment.
Later source maps can connect them with explicit mapping evidence.

### Persistence And Compatibility: Decision Before Publication

The current candidate embeds passages in Source format 2. Older format-1
readers can fail the whole Sources listing. This is a publication blocker,
not a reason to remove the version guard and allow old writers to strip data.

Prefer independently versioned, project-owned annotation persistence rather
than continuing to grow each Source record. Keep existing Source/material
ownership and reference it. ADR-0009 currently proposes `.scient/evidence/`
subject to its and ADR-0006's acceptance; the earlier QA report considered a
Sources-adjacent sidecar. The broader document need favors a reusable owner,
but this investigation does not settle the namespace, file layout or receipt
transaction format. Do not create an additional `.scient/annotations/`
namespace by accident.

Select the smallest format that proves all of the following:

- Old Sources readers/writers can still use ordinary bibliography data;
  new readers isolate unsupported/corrupt records with actionable reporting
  and reject unsafe writes. New data must not disappear silently.
- Annotation listing and recovery remain possible if a Source or attachment
  was removed by an older writer. An ignored sidecar does not itself preserve
  the original material; retention/deletion behavior must be explicit.
- Source removal, annotation removal, retention of revisions, and physical
  erasure have distinct documented effects. Compact anti-replay receipts
  must retain command identity; deleted full bodies should not exhaust active
  annotation capacity forever. “Remove” must not claim secure erasure.
- A partial operation cannot leave accepted state without its receipt or
  acknowledge a save that is not durable. Use the existing operation and
  atomic-write infrastructure with deterministic recovery; choose a journal
  only if the concrete multi-record transaction needs it.
- Retry keys bind the payload, actor and exact project/workspace. Keep
  uncertain-save reconciliation separate from renderer cancellation. Closing
  or replacing a PDF runtime must not discard a completed note mutation.
- Migrating the disposable experimental format has dry-run, backup, rollback
  and mixed-version tests. No mutation of real projects during design work.

A reader-first minimum-version rollout is an alternative, but only with an
explicit supported-client and rollback contract. It is not implicit consent
to break existing project access. A process-local lock also does not prove
cross-process, cross-worktree or future cross-device conflict safety.

### Scale Without A Second Platform

Use bounded per-document/page queries and render marks only for visible
pages. Deduplicate extraction work and cache it with document revision and
extractor profile keys; bound memory and cancel superseded reads. Derived
indexes, thumbnails and search results must be rebuildable.

Do not attach every annotation or a whole PDF to every agent turn. Expose
bounded list/read/get-region operations through the existing Scient-owned
service; resolve IDs under current authority. Provider image limits may
require a smaller derived crop, but must not mutate the original capture.
Keep original versus derived identities in context projection. Agent writes
and acceptance remain separately authorized operations, not automatic
privileges gained from having a skill installed.

Measure real workloads before selecting a database or elaborate cache. Test
hundreds of pages and thousands of annotations, bounded payloads, stable
memory, late-page capture, repeated open/close and incremental list reads.
Agree interaction budgets on the reference machine before implementation;
this source-only pass establishes no performance benchmark or guarantee.

## Proof Gates And Practical Next Order

### Work That Can Proceed Without The Upstream Merge

1. Review the decisions below and retain this source map. Build redistributable
   fixtures for the demonstrated failures; keep private research out of Git.
2. Fix the independently understood import, note-draft, retry, missing-file,
   cache, loading and focus defects through existing boundaries when
   implementation resumes. These do not require adopting SnapShots.
3. Prove the storage/compatibility contract before extending persisted capture
   shapes. Test old/new readers and writers, crash points, conflict/retry,
   deletion versus replay, changed/missing material, scope changes and recovery.
4. Prototype selection mapping and area capture against the same fixture set.
   Compare a bounded adapter with existing engines before choosing a donor.
   Keep any normalization distinguishable from the original quotation.

### After Alignment And Before Calling The Slice Ready

5. Align with the accepted main result and reconcile the narrow upstream seams
   above. Repeat attachment, selection, navigation and projection regressions;
   source inspection of the incoming commit is not merge qualification.
6. Integrate one coherent capture experience and shared lifecycle. Verify the
   original reading loop, then notes, reopening and one explicit reuse path.
   Do not make the universal evidence-link model a dependency.
7. Run native visual/keyboard QA and backend stress/fault tests, then update
   the implementation owners and release-qualified Help. Review acceptance
   and publication separately. No such implementation or qualification was
   performed in this pass.

The fixture matrix must include two-column articles, dense tables, Hebrew and
mixed-direction text, ligatures, math/superscripts, repeated quotes, rotated
and cropped pages, cross-page selection, tagged and untagged PDFs, scans with
and without OCR, malformed or missing material, and Unicode filenames.
Expected reading order and selected regions must be independently labeled;
an extractor tested against its own output is not a quotation oracle.

Reopen after a cold app restart; simulate a committed save with lost response,
delete followed by delayed save, note conflict, renderer replacement and
project/worktree switch during a mutation. Verify that no action redirects
to the new project and no unresolved anchor disappears. Test Markdown later
with source/render differences, external edits and duplicate text before
claiming cross-format support.

### Decisions Still Requiring Review

1. **Interaction:** accept low-friction highlight/comment plus a first-class
   area path, with inspectable extraction and no silent transcription repair?
   Reconcile ADR-0009's normalized-quote wording with the raw/matching/
   transcription distinction before freezing a capture schema.
2. **Ownership:** accept the direction of one project-owned lifecycle with
   Sources as the first target, while ordinary documents eventually retain
   their own resource identity rather than mandatory library import?
3. **Persistence:** settle ADR-0009/0006 storage and retention, compatibility
   and migration before publication; choose the smallest proven record layout.
4. **Authority:** reconcile the proposed one-action manual save with accepted
   capture/acceptance receipts; qualify exact workspace binding and distinguish
   agent interpretation proposals from scientific acceptance.

No new agent settings page, generic evidence graph, full OCR/layout platform,
collaboration engine or upstream merge is necessary to answer these decisions.

## Retained Directions, Not Rejected Features

Library organization and navigation; annotation search and filtering;
highlight-to-note/citation reuse and backlinks; Zotero/PDF annotation import
and non-destructive export; OCR and layout-aware extraction; manuscript
comments, suggestions and source-map reconciliation; collaborative attribution
and conflict handling; agent-proposed interpretations; claim support,
contradictions, screening, extraction and evidence tables all remain future
work in the existing product and roadmap owners.

Their detailed taxonomy, privacy defaults, sync model, first downstream
destination and delivery order are not approved here. Interoperability needs
loss reporting, duplicate-safe import and preservation of original bytes;
collaboration needs real identity and authorization rather than assumed
private highlights. Retaining these directions does not require implementing
their infrastructure in the first reading slice.

## Documentation Follow-Through

This investigation is indexed under Source Evaluations. No accepted document
was rewritten to make the proposal appear settled. On owner review, reconcile
the Sources experience, ADR-0009 and implementation plan; let the existing
file/resource and document-platform plans own their respective extensions.

At implementation, update desktop `docs/internals/scient-sources.md`, the
PDF/document capability and architecture owners actually affected, and
`docs/user/` instructions for the qualified release channel. Upstream notes
should record only actual host integration seams. The website remains a
publication of Help, not a second authored specification. No new provider
skill, MCP server, documentation portal or progress ledger is needed for
these findings.
