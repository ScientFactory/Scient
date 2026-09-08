# Sources And Document Processing: First-Principles Review

Status: Proposed
Owner: Yaacov
Created: 2026-09-08
Last updated: 2026-09-08
Purpose: Re-examines Sources ownership and agentic value, and proposes a shared document-processing/OCR boundary distinct from annotation and evidence authority.
Doc type: Research evidence

## Document Rules And Evidence

This report owns the dated investigation of what Sources should represent and
what shared processing should make project material usable. The complementary
[annotation and SnapShot investigation](document-annotations-and-snapshots-2026-09-08.md)
owns detailed annotation interaction, anchoring and upstream comparison.
Update this report when implementation, engine evidence or recommendations
materially change; promote decisions into their existing owners.

The accepted [PRD](../../product/PRD.md) governs purpose and
[ADR-0004](../../architecture/decisions/ADR-0004-scient-operation-capability-and-provenance-boundary.md)
governs operation authority. The
[Sources experience](../../product/sources-and-evidence-experience.md),
[ADR-0009](../../architecture/decisions/ADR-0009-evidence-continuity-and-durable-support.md),
[file/resource foundation](../../planning/file-resource-and-presentation-foundation.md)
and [Sources implementation plan](../../planning/sources-and-evidence-implementation-plan.md)
remain proposals. This report does not accept them or authorize a namespace,
dependency, migration or implementation. It is not another delivery ledger.

Inspected on 2026-09-08:

- Local desktop main `4d4d53d80595de0f0da2308ce9b25259e094d0c8`.
- Sources candidate `codex/sources-pdf-passage-proof-20260831`,
  `200373d70e2d3f2d754f6e07129364f9a666def2` plus existing dirty changes.
- Local planning proposals in `codex/sources-evidence-decision-package-20260829`.
- Official external documentation and selected repository metadata/README
  evidence cited below. No engine performance, packaging or output-fidelity
  benchmarks. Repository pins do not pin hosted documentation or model weights.

No computer use, product-code changes, installations, provider uploads, engine
runs, upstream merge or real-project mutation. Incoming upstream work remains
subject to later integration with reviewed main.

## 1. A Source Is A Reference Role, Not A File Format

**Proposed definition: a Source is an identifiable reference deliberately
kept for research, with its origin, reference metadata and access
to whatever representations are available.**

Current records are project-owned. Whether reusable reference holdings should
also exist outside projects is reopened below; project-centered research does
not by itself require every reference identity to originate inside a project.

It might be a paper, book, dataset release, software release, guideline,
webpage, archival document or interview recording. It can be a candidate to
investigate, background reading, a method, a counterexample or something
eventually cited. It need not already be trusted, relevant, accepted as
evidence, downloaded or available in full.

A PDF is one possible representation. The same bytes can be viewed as a
workspace file and used as Source material without becoming two independent
truths. Registering a Source adds a reference identity and managed lifecycle;
it must not be the prerequisite for basic file or agent capabilities.

### Distinctions That Earn Their Complexity

| Concept | Question it answers | Example |
|---|---|---|
| Project resource | What can I open, inspect or work on? | PDF, draft, script, image, dataset or remote resource |
| Source record | What reference are we tracking, and where did it come from? | Paper metadata/DOI before obtaining its full text |
| Material/revision | Which concrete content did we inspect? | Publisher PDF bytes or a preserved webpage version |
| Annotation | What did someone mark or say about a bounded part? | Highlighted paragraph or comment on a figure |
| Evidence use | Why does material or a result matter to a question or assertion? | Extracted result supporting or qualifying a conclusion |
| Processing result | How was machine-readable content obtained? | OCR blocks or extracted cells from an exact input revision |

These are not six new screens or storage services. Their separate meanings
prevent silent mistakes: citation metadata is not a read paper, OCR is not
the original, and a highlight is not a scientific conclusion.

### What Changes When A PDF Becomes A Source?

It gains library membership, an addressable reference record, bibliographic
or origin metadata, provenance and reference-specific operations: metadata
correction, duplicate review, reference formatting, material/version management
and later citation-use tracking. It should not gain the exclusive right to
be read, searched, annotated, OCR-processed or accessed by an agent.

For a one-off PDF question, file access and a reader may be enough. The Source
record earns its place when the project needs to identify, organize, revisit,
attribute, compare or cite the reference over time. Do not require every file
or agent read to become a library item.

For example, commenting on the project's own protocol should not require
pretending it is an imported paper. If a fixed protocol version later becomes
a managed reference, registration should connect to it without losing its
existing annotations. Exact resource identity and migration mechanics remain
design gates; this continuity is not already implemented.

### Current Code Already Distinguishes Record And File

Main's
[`packages/scient-sources/src/model.ts`](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/packages/scient-sources/src/model.ts)
includes article, preprint, book, chapter, conference paper, thesis, report,
dataset, web and other Source types. Its attachment array has no minimum
length. A record can exist without a PDF, while the attachment schema itself
is PDF-only. A non-PDF Source type therefore does not imply implemented
non-PDF attachment support.

Zotero likewise distinguishes regular reference items from attachment files.
Scient can learn this distinction without making its own general file
capabilities depend on bibliographic registration.
[Zotero intake documentation](https://www.zotero.org/support/adding_items_to_zotero).

## 2. Why Scient Needs Sources

Sources supports several researcher outcomes, not only storing papers:

- **Orientation:** keep relevant and potentially relevant references instead
  of repeatedly rediscovering files and browser tabs.
- **Attribution:** retain authors/origin, identifiers, reference details and
  versions, including references without obtainable full text.
- **Reading continuity:** retain materials, annotations and return-to-context.
- **Comparison:** organize and compare references, including contradictory
  or excluded ones, without making membership an endorsement.
- **Methods and reproducibility:** identify protocols, data/software releases
  and standards used by the project.
- **Writing:** later connect citations, bibliographies and backlinks to stable
  identities rather than independently maintained strings.
- **Agent collaboration:** let agents maintain and use the library people can
  inspect, rather than hide their research in chat or a vector index.
- **Change awareness:** later surface corrections, retractions, missing access
  and affected uses. This requires real connectors/workflows; it is not an
  automatic property of having a Source record.

Sources must not become all of Scient's knowledge. Evidence for the project's
own result may be a dataset and analysis run, not a passage in a paper. Those
objects retain their own authority. A stable project output may also acquire
a reference role without becoming a duplicate inside Sources.

Metadata confidence, extraction fidelity, relevance and scientific quality
are different judgments. A source can be worth retaining precisely because it
is disputed or documents why an approach failed. Formal screening, extraction
and appraisal require their own semantics rather than generic note fields.

### Is This Only For Scientific Research?

The concept is useful in scholarship, technical work, study and other
reference-based activity. In Scient it should serve the accepted purpose:
people and agents carrying out scientific and scholarly projects, not only
systematic reviews or one discipline.

An engineering methods project may need software documentation; a historical
project may need a letter; a researcher learning a technique may need a
lecture. Supporting these strengthens the same project workflow without
pivoting Scient into a generic personal-content manager or imposing formal
evidence grading on ordinary reading.

### Do Only PDFs Belong As Main Items?

No. The main item represents the reference. It may have zero, one or several
representations: PDF, HTML, EPUB, image, document, audio/video, data or a
versioned external location, once the appropriate adapters are qualified.
A physical or inaccessible reference can still have useful identity metadata.

DataCite resource types include datasets, software, images, sound, instruments
and standards. This supports broad interoperability, not exposing its entire
taxonomy in Scient. [DataCite schema 4.7](https://datacite-metadata-schema.readthedocs.io/en/4.7/appendices/appendix-1/resourceTypeGeneral/).

The dataset's descriptive PDF is not the dataset; a software paper is not its
executable release. Preserve useful relationships without conflating them.
Large/restricted materials may need versioned external locations rather than
unconditional copying. State actual availability and preservation guarantees.

## 3. Hard Cases That Shape The Boundary

| Question | Recommendation |
|---|---|
| Is everything an agent reads automatically a Source? | No. Reading and task context can be transient. Register references under user intent or delegated collection policy, not every file access. |
| Does membership imply a reference was read or accepted? | No. Metadata-only, partial processing and actual inspection differ from scientific acceptance. Don't invent a mandatory status taxonomy yet. |
| Can a project output be a reference? | Yes. Connect a reference role to the existing data/run/document authority when useful. |
| Are preprint and published paper always duplicates? | No. Content, identifiers and citation semantics can differ. Preserve distinctions; don't merge by similar title. |
| Does a shared hash prove two Sources are identical? | It proves equal bytes, not equivalent metadata, context or provenance. Deduplicate storage separately from source identity. |
| Is a live URL enough to reopen the original? | No. Record whether exact content was retained; otherwise do not promise historical quote recovery. |
| Can projects share a reference? | Yes, with independent notes, judgments and authority. Future byte caches must not leak private library membership or share decisions silently. |
| Is a collection a study or evidence status? | Not by default. Organization, study/report relationships and review have distinct meanings; exact designs remain open. |
| Can a synthesis validate its own claims by being cited again? | No. Preserve lineage; repetition must not make an unsupported statement look independently corroborated. |

Keep **Sources** for the project's references during this investigation. The
earlier dismissal of a wider Library was too strong: persistent reading and
cross-project reuse justify investigating it. That does not yet select a new
top-level screen, global store or user-visible ontology.

### Library Ownership Reconsideration

**Subsequent owner decision, 2026-09-08:** the reusable-library, independent
project-preservation and context-owned independent-annotation directions were
accepted after this comparison. The [PRD](../../product/PRD.md#research-library-and-project-preservation)
records the five decisions; [ADR-0010](../../architecture/decisions/ADR-0010-research-library-project-use-and-annotation-ownership.md)
proposes their Phase 1 contract. The comparison below retains its historical
dispositions; it is not a competing current decision gate. Storage, sync and
processing-engine choices remain unselected.

Fable's lifetime-library challenge and the additional Codex review were assessed
as competing model analyses, not acceptance or implementation instructions.
The researcher outcome is to collect once, preserve useful reading work, and
reuse references across projects without surrendering project independence.

Two factual corrections matter:

- Zotero collections reuse items within a library, but personal and group
  libraries are separate; moving items between them creates distinct copies.
  Its model therefore supports both reuse and ownership isolation, not one
  universal shared record. [Collections](https://www.zotero.org/support/collections_and_tags)
  and [groups](https://www.zotero.org/support/groups), inspected 2026-09-08.
- Scient already has import operation IDs, user/agent actor categories,
  completion/cancellation receipts and revision history. See the pinned
  [model](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/packages/scient-sources/src/model.ts)
  and [store](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/packages/scient-sources/src/store.ts).
  This does not prove full ADR-0004 coverage, durable individual/device identity,
  or a replication/conflict protocol. Extend and qualify existing mechanisms
  rather than describe them as absent.

#### Competing Models

| Model | Value | Failure to address | Disposition |
|---|---|---|---|
| Independent project stores | Explicit scope, offline ownership, portable project data; closest to current implementation | Repeated intake and disconnected reading history across projects | Preserve as the migration baseline, not assume it is the lifetime ceiling |
| Central personal/team library; projects hold live references only | Reusable holdings, organization and reading continuity | Private-library dependency, permission leakage, deletion and metadata changes affecting published work | Do not adopt without independent project preservation |
| Reusable holdings plus project-owned bindings and pinned uses | Cross-project continuity with project-specific judgments and retained evidence | More deliberate transfer, version and retention semantics | Recommended hypothesis to prove; no storage schema selected |

These compare ownership behavior, not JSON versus database technology. A
portable retained copy is not necessarily competing truth: an explicitly
versioned project snapshot can be a preservation artifact rather than a second
live editable master. Physical byte deduplication is a separate optimization.

A pinned use identifies the relevant reference metadata, material, annotation
content and processing-result revisions, not merely the latest library item.
Sharing an annotation does not accept its scientific meaning; accepting its
use in one project neither accepts it everywhere nor publishes private notes.

Distinguish bibliographic work, edition/release, exact material revision,
library holding and project use when their lifecycles differ. Do not immediately
turn all five into mandatory tables. A DOI, external item key, matching title
or byte hash supplies identity evidence at a particular level, not permission
to unify every record, annotation and judgment. Existing project records need
not be destructively merged to acquire explicit correspondence later.

#### Ownership And Annotation

An annotation has separable target, content, author/owner, audience and review
history. Its use in a project is another relationship. The same page may carry
a private reading note and a shared project interpretation without either
becoming globally visible. The [W3C annotation model](https://www.w3.org/TR/annotation-model/)
separates body and target; it does not decide Scient's access or scientific
acceptance policy.

Anchor to an exact resource revision and location, with the exact extraction
result referenced when used. Do not require a library entry or derivation to
exist before a region can be marked. Reusing extraction is safe only for
matching inputs, profiles and authorized scopes; human corrections are
attributed results, not a silent update to everybody's extracted text.

ADR-0004 section 10 currently requires project-owned durable scientific
annotations and evidence. Its section 2 also requires exact project scope in
operation envelopes. A personal-library operation outside any project needs
an explicit authority amendment or a reviewed separate scope contract. Neither
a fake project ID nor granting all-library access to every project agent is an
acceptable shortcut. A library extension should support, not displace, the
accepted PRD's durable research-project center.

#### Trust Journeys That Decide The Model

| Journey | Required outcome to prove |
|---|---|
| One reference, two projects | Reusable reference correspondence, independent interpretations and citation uses; no automatic scientific-judgment sharing |
| Share a project without the originating library | Authorized metadata, exact used versions and evidence remain understandable; restricted/unretained material is explicitly unavailable |
| Annotate a file, then register it as a Source | Preserve resource revision, marks and provenance; do not migrate them by guessing paths or text |
| Mark a scan, then rerun OCR | Original region survives; alternate texts retain their derivation/version; no silent relocation or quotation replacement |
| Agent works in a project | Only authorized holdings, notes and processing results are visible, including search results and counts; full-library discovery requires its own grant |
| Library or Zotero item changes | Offer updates with provenance; pinned reviewed project uses do not silently follow a live record or newer PDF |
| Remove, delete, revoke, then reconnect offline work | Project removal, library deletion, byte cleanup and access revocation have distinct effects; delayed replicas cannot silently resurrect deleted state |

These are proposed proof cases, not completed tests. A permitted project copy
may intentionally outlive library membership; revocation cannot promise to
erase an already exported copy. Conversely, preservation must not imply a
right to redistribute restricted files. Define retention and sharing policy
before cross-scope copying. Current main's Source removal checks remaining
references within its own root before byte cleanup; it is not a cross-library
retention implementation.

#### Storage And Synchronization: Invariants Before Technology

Require stable scoped identities, versioned schemas, expected-version writes,
idempotent effects, attributable changes, explicit conflicts/deletions, bounded
history, partial/offline recovery, and a migration/rollback story. Permission
revocation, encryption/key ownership and selective replication need explicit
design before syncing private/team content. A device identifies an execution
origin, not a scientific reviewer or sufficient authority.

An operation receipt proves an attempted effect; domain history preserves
meaning; a replication feed carries changes. Their storage may be shared if
transaction and retention requirements justify it, but they are not inherently
one log. [Zotero's sync protocol](https://www.zotero.org/support/dev/web_api/v3/syncing)
uses object/library versions, a saved synchronization baseline and conflict
handling. It provides a concrete comparison, not a Scient implementation choice.

Compare current per-record state plus receipts, transactional state with a
changefeed, and domain events with projections on the same migration/recovery
cases. A database is a storage choice, not the opposite of event sourcing.
Consider CRDTs only for fields with a defined merge meaning; never resolve
scientific acceptance by a universal last-writer-wins rule. A single immutable
log is not automatically compatible with selective sharing, redaction or
retention. Nor does choosing JSON guarantee safe collaborative synchronization.

The minimum shared contract should preserve identity and meaning across
schema evolution, not promise that future sync requires no transformation.
Measure listing/search, incremental writes, interruption, replay, conflict,
deletion, export and restore on representative data; 5,000 metadata-only items
alone do not qualify long histories or large scientific materials. No storage
spike or performance comparison was run for this refinement.

#### Reference-Management Strategy

Keep dependable organization, citation, intake/export and metadata correction
alongside Scient's distinctive agent reading and evidence-to-output workflows.
Neither requires cloning all competitors before releasing useful improvements.
Collections, tags, saved searches and the wider Library surface remain product
choices, not approved UI rules. Keep browser capture, deeper metadata services,
open-access retrieval and two-way Zotero continuity as future directions with
their own privacy, matching, provenance and recovery requirements.

Two-way Zotero linkage is not merely enabling writes on Scient's existing
read-only connector. The current [local API documentation](https://www.zotero.org/support/dev/web_api/v3/local_api),
inspected 2026-09-08, describes consent-based local writes for Zotero 10+.
Its server-instance identity and local object versions are distinct from Web
API versions; a local write key is not scoped to a single library. Scient would
need its own selected-library/item authorization, version-partitioned mapping,
revocation handling and conflict/recovery proof. This establishes a candidate
supported local path, not compatibility with the installed Zotero or completed
two-way synchronization. Compare local and Web transports, annotation mapping,
user corrections versus imported metadata and deletion semantics before
choosing a bridge. Do not read or patch Zotero's database.

#### Decision Disposition And Documentation Impact

| Position | Disposition in this refinement | Authority / next owner |
|---|---|---|
| Project-centered work and project-owned scientific acceptance | Accepted constraint, unchanged | PRD and ADR-0004 |
| No need to investigate a wider Library | Challenged and withdrawn | This research; Sources product proposal |
| Reusable holdings with independently usable projects | Recommended, Proposed | Product review, then ADR-0006/scope reconciliation |
| All annotations belong to a library derivation | Not adopted | General-resource proof and explicit ADR-0004/0009 reconciliation |
| One universal operation log, database or CRDT | Unresolved, no selection | Storage proof under ADR-0006 and operation authority |
| Local native extraction, cloud-only OCR | Not adopted | Shared processing qualification below |
| Full Zotero parity or sync before useful capture | Not a prerequisite; ambition retained | Existing Sources implementation plan |

Update the existing product proposal, delivery gates and small review warnings
in proposed ADR-0006/0009. Do not rewrite accepted PRD/ADR-0004, declare a new
namespace, change public Help, or present a speculative Library as shipped.
The active roadmap already links these owners; no new delivery phase is
accepted by this research.

## 4. Agentic-First Does Not Require Human Pre-Highlighting

The manual saved-passage workflow is a proof slice, not the intended ceiling
of agent capability. Agents should eventually discover references, register
candidates, obtain authorized material, inspect pages/regions, request
processing, locate passages, compare results and propose cited synthesis
without requiring the user to select every input manually.

For “Compare the measurement methods in these papers for our dataset,” an
agent should inspect available materials, request bounded extraction, locate
candidate passages and propose a comparison. Its result should reveal exact
versions and regions, unavailable material and interpretive steps. Accepting
the comparison must not invisibly modify the protocol or certify a claim.

Shared capability requirements, not approved new tool names:

1. Discover/list references and material availability within the project.
2. Read bounded native content, render a page/region or request processing.
3. Inspect progress, coverage, warnings and results; cancel/retry safely.
4. Propose library changes, annotations or interpretations with provenance.
5. Apply the relevant review policy to acceptance and downstream effects.

Use Scient operations and provider adapters. Do not install every OCR
vendor's MCP server into every provider or let skills create private evidence
stores. Routine reads and reversible delegated organization should not create
one confirmation per item; precise automation policy still needs approval
where it affects protected records. ADR-0004 remains authoritative.

Destructive changes, external transfer and scientific acceptance are distinct
from permission to process material. A provider without image delivery needs
an honest limitation or supported text result, not invented visual reading.
Local processing and remote upload are different authorities. Agents must
distinguish metadata-only, partial and full inspection in their answers.

## 5. What OCR Infrastructure Exists Today?

**No integrated OCR engine or OCR operation was found in the inspected main
and Sources candidate.** They read embedded PDF text, which may include a
pre-existing OCR layer. That is not recognition from pixels. A program
installed on the computer or used by an external agent is not thereby Scient
product infrastructure.

| Existing code | Verified behavior | Not established |
|---|---|---|
| `apps/web/src/scient/pdf/pdfRuntime.ts` | PDF.js rendering, text layer and search | OCR, semantic reading order or a general agent extraction service |
| `useScientPdfReader.ts` `detectScannedDocument` | Samples first three pages for nonempty embedded text | Whole-document classification, mixed-page coverage or text quality |
| Server `scient/sources/LocalPdfSourceAdapter.ts` `extractPdfMetadata` | Info/XMP plus first two pages' text, bounded to 64 Ki characters, for identifiers/metadata | Full-document understanding, OCR or table extraction |
| Candidate `pdfPassageCapture.ts` and `packages/scient-sources/src/passages.ts` | Text-layer order, offsets and geometry; bounded reads of saved passages | Pixel recognition, newly agent-selected passages or scan/region fallback |
| `packages/scient-pdf-validation/src/validate.ts` | Structural validation through page operator lists | Correct words, rendering fidelity or scientific validity |
| `BuiltInSkillSources.ts` and document toolkits | Authoring instructions and HTML/LaTeX PDF-build operations | OCR runtime or ingestion service |
| `PythonRuntimeAdapter.ts` | Discovers existing Python/Jupyter for compute | Managed, isolated OCR installation or shared processing operation |

Main-side paths refer to
[the inspected desktop revision](https://github.com/ScientFactory/scient-desktop/tree/4d4d53d80595de0f0da2308ce9b25259e094d0c8).
Source and dependency-manifest searches found no wired Tesseract/OCRmyPDF,
Docling or Kreuzberg adapter in these two states. This is not an inventory of
every unrelated branch or installed program, nor a runtime-readiness test.

The earlier Hebrew selection failure happened in embedded-text capture. It
should not be called an OCR failure without evidence. OCR could offer another
reading but is not automatically the root-cause fix for selection mapping.

## 6. Build Shared Document Processing, Not Annotation-Specific OCR

OCR recognizes text from pixels. Native extraction, layout analysis, table
structure, reference parsing, crop rendering, search indexing and scientific
interpretation are different capabilities. Recommend a small processing
boundary beneath their consumers:

```text
Authorized resource + exact revision
              |
   Native extraction / rendering
              |
   Optional OCR or specialist parser
              |
 Versioned result + locations + coverage + provenance
              |
 Reader | agent context | search | extraction workflows | export
```

This is a dependency map, not five services or a demand to process every file
on import. Sources owns reference meaning; annotations own saved marks; data,
analysis and authoring retain their own domains. The
[existing ingestion strategy](open-source-adaptation-map.md#document-ingestion-and-evidence-extraction)
already proposes replaceable engines. Refine that direction instead of
creating a competing OCR platform.

### Minimum Useful Result Boundary

Demonstrate an adapter that reports:

- Exact authorized input revision/hash, requested pages/regions and operation.
- Engine, model/version or artifact digest, options, language and extraction
  profile. A hosted model name alone does not guarantee reproducibility.
- Text/structure, explicit coordinates, page origin and crop/deskew transforms.
  Report mapping precision: a paragraph box is not word-level geometry.
- Coverage: successful, failed, skipped and unprocessed units. Partial success
  is not a full-document reading claim.
- Original extraction, matching projections and corrections as distinct,
  attributed results. Scores from different engines are not automatically
  comparable or calibrated.
- Result identity, bounded retrieval, warnings and recoverable operation state,
  without making consumers parse vendor-specific stdout or own its schema.

Not all engines must provide every structure. Advertise supported outputs
and fail honestly when a requested kind is unavailable. Retain vendor output
where useful for inspection, but use a small typed Scient envelope instead
of adopting an enormous universal document model.

**Derived does not always mean disposable.** An index can be rebuilt. An OCR
result used in an accepted quotation or analysis must remain inspectable at
that exact revision even if a rerun differs. Retain the used result or
sufficient bounded evidence under the accepted retention contract; don't
depend solely on a model name and a future ability to regenerate it.

### Execution And Routing

Prefer native extraction for useful embedded text and direct format parsers
for native tables/documents. Inspect quality and coverage per page or region:
a searchable title page must not suppress OCR of later scans, and a few
hidden glyphs do not prove a good text layer. Allow targeted OCR for missing
or suspect regions and preserve disagreement between readings. Don't run every
engine or OCR every PDF automatically.

Processing should be task-driven, resumable, cancellable and bounded by pages,
pixels, time, memory, disk and approved remote cost. Cache keys include input
revision, selected scope, engine/model/options and rendering profile.
Deduplicate in-flight work within authorized scope; distinguish cancellation
from failure. Derived indexes and thumbnails must remain rebuildable.

Heavy parsers belong in isolated workers with bounded inputs, controlled
network access and validated output. Reuse suitable existing process/runtime
and artifact lifecycle primitives, but don't install arbitrary packages into
the researcher's analysis environment or require Jupyter to read a scan.
Current generated-document artifacts are PDF-specific: OCR JSON does not
become a `DocumentBuild` merely because its input was a PDF. The concrete
processing-job boundary still needs design.

Local versus hosted is an execution choice, not a fixed native-PDF versus OCR
split. Docling documents offline model use and separately opted-in remote
processing in its [advanced options](https://docling-project.github.io/docling/usage/advanced_options/).
Qualification must establish which local configurations meet Scient's language,
quality and hardware needs. A cloud adapter can extend capacity without
changing result meaning or silently uploading private input on local failure.

Keep original files unchanged. A searchable PDF is a new derived artifact,
not an in-place repair of evidence. Record transforms from processed images
back to original pages. Reauthorization at effect commit, idempotent result
publication and failed-job cleanup belong to the shared operation foundation.

### Uses Beyond Annotation

The same boundary can serve agent reading, full-text search, scanned notes,
accessible/searchable derivatives, translation inputs, scholarly parsing and
later table/figure extraction. Quality gates differ: search tolerates errors
that make numeric extraction or a quotation unacceptable. Read CSV/XLSX
structurally rather than screenshotting and OCRing it. Audio transcription and
scientific-image analysis are specialist adapters, not OCR by another name.

## 7. Engine Evidence And An Honest Selection Process

There is no basis yet to call any stack the best for Scient. Official support
and benchmarks establish candidates, not performance on required languages,
scientific layouts or this product's hardware.

| Candidate | Useful role | Decision-facing limitation |
|---|---|---|
| Existing PDF.js | Native extraction/rendering baseline | Not OCR; round trips don't prove reading order. |
| Docling | General structured conversion with replaceable OCR | Its layout/provenance model remains adapter output, not canonical Scient evidence. |
| GLM-OCR | Visual recognition/layout challenger | Full SDK pipeline differs from a bare model call. Test grounding and omissions, not only readable Markdown. |
| PaddleOCR / PP-StructureV3 | Layout, text, tables/formulas and reading order | Qualify exact recognizer and language; multilingual support doesn't establish Hebrew or mixed-direction quality. |
| OCRmyPDF with a qualified OCR engine | Searchable-PDF derivative and practical baseline | Understand rewriting and sidecar semantics; not an annotation or table authority. |
| GROBID | Scholarly structures, citation contexts and coordinates | Specialist parsing, not general OCR or scientific interpretation. |
| AnyDoc / Kreuzberg | Existing general-ingestion challengers | Not refreshed or qualified here; AnyDoc's evaluation does not select it as OCR. |

Primary evidence and implications:

- [Docling's representation](https://docling-project.github.io/docling/concepts/docling_document/)
  describes hierarchy, layout and provenance; its
  [OCR interface](https://docling-project.github.io/docling/concepts/OCR/)
  supports replaceable engines with engine-specific language behavior.
- [GLM-OCR's README](https://github.com/zai-org/GLM-OCR/blob/cef4d0ea120d1741f5cefe8985eee45f6c8eff1d/README.md)
  distinguishes cloud forwarding from self-hosted layout/region recognition
  and JSON/Markdown output. Convenient cloud defaults must not become an
  invisible fallback in local-first Scient.
- [PP-StructureV3 documentation](https://www.paddleocr.ai/latest/en/version3.x/pipeline_usage/PP-StructureV3.html)
  separates layout, OCR and optional table/formula/chart components. Compare
  those capabilities separately, not with one overall OCR score.
- [OCRmyPDF's cookbook](https://ocrmypdf.readthedocs.io/en/stable/cookbook.html)
  warns that its text sidecar omits text from pages not OCRed. Its
  [advanced modes](https://ocrmypdf.readthedocs.io/en/stable/advanced.html)
  distinguish skipping, redoing and forcing OCR; forcing can rasterize content.
  Don't treat the sidecar as the complete document or overwrite originals.
- [GROBID coordinates](https://grobid.readthedocs.io/en/latest/Coordinates-in-PDF/)
  describe location-bearing scholarly structures. The
  [existing AnyDoc evaluation](anydoc-source-evaluation-2026-08-06.md)
  retains its separate scope and fidelity gates.

Repository heads recorded for follow-up, not qualified engines:
Docling `82e6361224a71caf7ed57f49fe96274f07cae1b1`;
GLM-OCR `cef4d0ea120d1741f5cefe8985eee45f6c8eff1d`;
PaddleOCR `2661c7c0ef5c613e8f93c6e93b2e052399f0f854`;
OCRmyPDF `196072acef056aa11b63e60564d98762bd38f638`.
These are source pins, not release or model-weight qualification. Docling's
README identifies MIT code with separate model licenses; GLM-OCR identifies
Apache-2.0 code, MIT model weights and separately identified layout components.
No full license/dependency or distribution audit was done; none is approved
for bundling.

**First comparison:** preserve PDF.js as baseline; exercise one Docling
configuration with a language-qualified OCR backend and one self-hosted
GLM-OCR configuration through the same bounded result adapter. Use a simple
OCR baseline where needed to identify which stage fails. Bring in the
separate Paddle pipeline or GROBID when an unmet layout/scholarly need
justifies it. Don't bundle several engines in advance or choose from README
rankings. A small successful corpus justifies larger qualification, not
universal claims.

## 8. Annotation Must Not Depend On OCR

| Intent | OCR-independent target | What processing could add later |
|---|---|---|
| Mark a figure, table, handwritten area or scanned paragraph | Exact page/image region plus note | Proposed text/structure with separate attribution |
| Comment on one PDF page | Material revision and page | Searchable text, not the existence of the comment |
| Note something about the whole work | Source/document identity with clear scope | Usually nothing required |
| Highlight born-digital text | Native text and geometry mapping | Alternative reading if useful, never silent replacement |
| Comment on Markdown/native document | Revision-aware source/structure position | No OCR needed for native content |
| Discuss a dataset cell or analysis result | Domain-specific dataset/run locator | No OCR when structured values exist |
| Annotate audio/video later | Media revision and time range | Speech transcription, a different adapter |

The initial PDF fallback should use page-native rectangles and render from
retained originals, not OS screenshots. Text selection can improve separately.
A region note remains valid while OCR is unavailable, downloading, cancelled
or wrong. Page notes offer an alternative to precise dragging.

Later OCR text selection must map to original pixels and disclose recognition.
A model returning text without useful location mapping cannot support precise
word highlights by guessing boxes. An OCR upgrade must not move or erase an
existing region mark. The annotation report retains detailed raw/normalized
text, receipt and anchor-repair requirements.

## 9. Proof And Practical Next Steps

### Product And Ownership

Demonstrate a metadata-only reference, the same PDF opened as file and Source,
a draft annotated without registration, and one non-PDF reference concept.
No duplicate notes, alternate reader or mandatory graph should be necessary.
Prove continuity when a file later acquires a Source role; the precise identity
and migration contract remains a gate.

Let an agent initiate bounded inspection without prior manual highlighting
and let a person inspect/correct the same result. Show metadata-only, partial
and missing-material cases. The agent must not claim to have searched the
project when it only received a reference list or a few saved passages.

### Processing Quality

Use redistributable, independently labeled fixtures before the private corpus:
born-digital/scanned/mixed pages, Hebrew/English and other required scripts,
columns, tables, equations, superscripts, poor resolution, rotations, crops,
handwriting, hidden bad OCR and repeated text.

Measure transcription errors, reading order, omissions, numeric/sign/unit
errors, region alignment and table structure separately. Keep raw versus
normalized evaluation distinct. A high average score can hide a changed
decimal, lost negation or reversed comparison. Report abstentions and failures
by document class/language; don't assume confidence is calibrated.

Measure startup/download size, RAM, CPU/GPU requirements, cancellation,
bounded partial work, recovery and repeated-run behavior on supported systems.
Test no-network use and refusal of unauthorized remote fallback. Verify
page/crop transforms and coverage reporting. No performance measurements or
engine quality benchmarks were produced in this pass.

### Recommended Sequence

1. Review reusable-library ownership, project preservation and the
   general-resource boundary against the trust journeys above. Retain current
   Sources as the migration baseline, not as the predetermined final scope.
2. Preserve existing annotation QA fixes and storage compatibility gates.
   Prototype OCR-independent capture without freezing new record ownership;
   publication waits for the narrow authority and migration decision. Neither
   a full Library implementation nor an OCR engine is a prerequisite.
3. Prove one shared processing request/result path and the small comparison
   above, with a runtime independent of the user's analysis environment.
4. Expose a qualified result to one reader workflow and one agent workflow
   before expanding to indexing or structured extraction. This tests whether
   the foundation is genuinely shared rather than a renamed PDF helper.
5. Expand material adapters, reuse destinations and formal evidence workflows
   when their contracts are ready. Integrate upstream after the ongoing
   alignment becomes reviewed main, as already requested.

Corpus/engine evaluation and ownership/storage investigation can proceed in
parallel through isolated proofs with throwaway adapters. Feed observed
fidelity and recovery failures back into the model. This is a recommended next
work program, not a claim that a fixture harness or storage spike was built in
this documentation pass.

## 10. Documentation Consequences And Remaining Decisions

This pass refines the existing Proposed Sources experience: no mandatory
attachment, no required Source registration for annotation or agent reading,
and no assumption that all project evidence originates in Sources. Research
is indexed rather than copied into public Help.

ADR-0009 remains SourceMaterial-focused. General resource annotations need
explicit reconciliation with the file/resource foundation; this report does
not silently widen its authority or define a universal target graph. The
raw-versus-normalized quotation reconciliation, ADR-0006 storage gate and
ADR-0004 receipts remain open. Update implementation owners when code changes,
not now to describe an absent OCR service as shipped.

Review must still settle the first non-PDF material, representation/version
relationships, retention of referenced derivatives, processing runtime
packaging, remote-processing policy, language/hardware quality floors and
the smallest resource adapter needed for continuity. These are concrete gates,
not reasons to build a universal platform before making PDF reading reliable.
