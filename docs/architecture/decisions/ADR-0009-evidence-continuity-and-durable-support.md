# ADR-0009: Evidence Continuity And Durable Support

Status: Proposed
Owner: Yaacov
Created: 2026-08-29
Last updated: 2026-09-08
Purpose: Proposes the durable source-material, region, annotation, anchoring, review, and provenance boundary for evidence continuity while leaving the exact downstream evidence-link model open for a later decision.
Doc type: Architecture decision

## Document Rules

This is a proposed decision. It requires explicit human acceptance before it
governs implementation or authorizes a new `.scient/` namespace.

This ADR proposes the minimum durable capture boundary for evidence continuity:
material identity, Regions, Annotations, anchor resolution, review state,
provenance, agent operations, and the separation between canonical records and
derived retrieval. It records downstream evidence linking as required future
direction, but does not yet select one generic relation or project-target
contract. It does not own interface copy, visual design, implementation
sequencing, parser selection, search technology, or the detailed schemas of
later formal-review workflows.

The proposed researcher experience lives in [Sources And Evidence Product
Experience](../../product/sources-and-evidence-experience.md). The proposed
delivery sequence and proof gates live in the [Sources And Evidence
Implementation Plan](../../planning/sources-and-evidence-implementation-plan.md).
The accepted [PRD](../../product/PRD.md) governs product conflicts.

This decision composes the accepted operation and provenance boundary in
[ADR-0004](ADR-0004-scient-operation-capability-and-provenance-boundary.md) and
depends on explicit review of the proposed project-state, workspace-scope, and
agent-tool decisions in [ADR-0006](ADR-0006-project-owned-scient-state-and-source-store.md),
[ADR-0007](ADR-0007-logical-project-workspace-binding-and-operation-scope.md),
and [ADR-0008](ADR-0008-agent-tool-registry-and-access-policy.md). Acceptance of
this ADR does not silently accept those proposals; unresolved conflicts must be
decided explicitly.

## Decision Summary

### Accepted Ownership Direction And Proposed Reconciliation

The [2026-09-08 first-principles refinement](../../research/source-evaluations/sources-and-document-processing-first-principles-2026-09-08.md#library-ownership-reconsideration)
led to the owner's accepted library and independent-annotation directions in
the [PRD](../../product/PRD.md#research-library-and-project-preservation).
[ADR-0010](ADR-0010-research-library-project-use-and-annotation-ownership.md)
proposes their detailed ownership/retention contract and explicit ADR-0004 scope
amendment. Those mechanisms remain reviewable. The Source and
SourceMaterial path below is an initial research slice, not a requirement that
ordinary documents become Sources before reading, processing or annotation.
Separate the exact target revision/location, annotation content and audience,
and project evidence use. Extraction may support anchoring; it must not be
required for a page/region mark to exist.

Accepted ADR-0004 still requires project-owned scientific annotations and exact
project-scoped operation envelopes. Personal/team-library ownership is not
authorized by renaming these records. Resolve scope, retention, project handoff
and migration through ADR-0010, ADR-0006 and the file/resource owner before
freezing a broader schema. Preserve the local candidate and QA findings; do not
publish its storage choice as the settled general annotation architecture.

### Bounded local candidate, not blanket acceptance

The 2026-09-08 local implementation explores a smaller storage boundary:
saved PDF passages and researcher notes within the existing Source record and
revision history. The owner has since chosen independent annotation identities
and persistence outside Source payloads. Retain this candidate as migration and
QA evidence, not the target persistence model. Independent records do not
require four databases or services. The candidate introduces no new `.scient/`
namespace and no universal project-target or support-edge model. Older builds
reject Source format 2 and can fail to load the entire library on encountering
one such record. That blocks accidental older writes but is a compatibility
failure, not a satisfactory safety design. The embedded format-2 model must
not ship as this program's annotation storage; preserve the candidate locally
and port useful behavior through the implementation plan's migration path.

Exact material identity is primary. A changed text extractor is not itself a
lost material: saved geometry can still be shown if the original bytes and page
geometry match, explicitly without claiming reverified text. The versioned
capture profile preserves raw PDF.js text and UTF-16 offsets; any later
normalization or anchor migration must be explicit rather than silently changing
the quotation's meaning.

This candidate reuses existing authenticated Sources transport and scoped MCP
reads; it does not activate or reimplement the separate agent-foundation branch.
Its manual actor field and ordinary record history are not the shared operation
envelope or capture/acceptance receipts required by accepted ADR-0004.
Reconciliation of those boundaries remains a publication gate, not a claim that
this local increment completes ADR-0004, ADR-0007, or ADR-0008. This ADR remains
Proposed; later agent-authored interpretation and acceptance require their own
explicit authority and review path.

Scient will preserve **evidence continuity**: first, an inspectable path from a
concrete source material to an exact Region and reviewed interpretation; later,
reviewable uses of that evidence in project assertions and outputs.

The source library remains the foundation. A support graph is a useful internal
representation, but users are not required to understand or maintain a graph.
The product experience is the ability to answer, reliably and with appropriate
uncertainty, “Why can I trust or use this?”

Within ADR-0010's broader library/project foundation, prove the following
Source-backed capture adapter (ordinary resources use the same annotation
boundary without the first Source association):

1. Source;
2. source material;
3. region;
4. annotation;
5. linked provenance and review receipts.

The product still needs evidence links, claim support, citations, extraction,
and other downstream uses. Their shared and target-specific boundaries remain
open until one concrete target workflow can prove what should be common.

Richer scientific concepts remain distinct in the conceptual model and become
first-class records when their real workflows require dedicated lifecycle,
query, review, accounting, or export behavior. They are neither all built now
nor permanently hidden inside generic annotation payloads.

## Context

The current desktop implements a serious project-owned Sources foundation. A
Scient source has normalized bibliographic identity, provenance, revisions,
duplicate handling, one optional project note, and zero or more immutable
content-addressed PDF attachments. Agents can list, read, add, update, review,
attach, detach, and remove Sources through the same canonical store.

This foundation was first rechecked after PR #203 integrated official T3
through `660cddd3bc9801e089afcabba11c62f41aeac5c3`. Desktop PR
[#213](https://github.com/ScientFactory/scient-desktop/pull/213) then merged at
`16266e27782c98d7d3a5722998ccddda9de7c218`, adding stable material selection
and reconciled transient workflow state. Generic chat-file compatibility
remains a separate transport concern and does not replace durable
Source-material identity or evidence continuity.

That implementation is a trustworthy reference ledger, not yet a complete
evidence system. It does not provide durable passage anchors, multiple
annotations, evidence-to-project relationships, claim support, structured
screening or extraction, anchor-health diagnostics, or a reviewable agent path
from exact source context to accepted scientific meaning.

The accepted PRD already requires discoverable Sources, exact source regions,
annotations, screening decisions, extraction, evidence, claims, synthesis,
citations, provenance, review, and visible uncertainty. Those names describe
important scientific distinctions. They do not require every distinction to
become a phase-one table, route, or settings surface.

Without an explicit boundary, Scient risks one of two failures:

- building a large ontology and several specialized interfaces before one
  complete evidence path works; or
- simplifying every scientific act into generic notes and links whose hidden
  payloads later cannot support reproducible review, conflict resolution,
  provenance, or export.

This decision chooses a small implementation kernel without erasing the
conceptual distinctions the mature product will need.

## Proposed Decision

### 1. Evidence continuity is the architectural objective

A durable capture path connects:

```text
Authorized resource (optionally associated with a Source)
  -> exact material/resource revision
  -> anchored Region
  -> optional Annotation or reviewed interpretation
```

The mature product also needs to connect a Region or reviewed interpretation
to claims, notes, results, analyses, extraction values, citations, and document
passages. This proposal does not yet know whether those uses should share one
generic relation record, use several target-owned records, or combine both.
That choice requires a concrete stable target and its real lifecycle.

The path is owned by its creation context under ADR-0010; the initial project
path remains project-owned. It is inspectable without the originating chat,
correctable, exportable, and recoverable. Agent sessions, retrieval indexes, rendered
citations, PDF-reader state, and chat messages may help create or display the
path but are not its canonical authority.

The path may be incomplete. Scient must represent missing, ambiguous,
conflicting, stale, or unresolved support honestly instead of manufacturing a
complete-looking result.

### 2. Resource capture and the optional Source association

An exact authorized resource revision is the common target. Source and
SourceMaterial describe its reference role when present; Region and Annotation
also work on ordinary project resources through the shared resource adapter.
This distinction does not require separate services or duplicate material stores.

#### Source

A `Source` represents the intellectual or bibliographic work: for example a
journal article, preprint, book, report, dataset, protocol, or webpage.

Source identity remains owned by the existing Sources contract. A Source is not
the same as one file, one imported provider item, or one study. One Source may
have several concrete materials. One study may later have several Sources or
reports.

#### Source material

A `SourceMaterial` is one concrete representation or version of a Source, such
as a particular PDF, supplementary file, preserved HTML representation, or
later an EPUB.

The current `ScientSourceAttachment` is the first implemented material
boundary. Initial evidence work should extend that boundary rather than rename
or rewrite it merely for architectural purity. Each material used by an anchor
has a stable attachment/material ID, media type, exact content hash, and
versioned decoding contract.

A Region never points only to an abstract Source when the evidence came from a
specific material. Re-downloaded, revised, translated, OCR-processed, or
otherwise changed materials do not silently inherit exact-region authority from
another version.

#### Region

A `Region` is the target/locator concept in ADR-0010: a bounded part of an exact
authorized resource revision, including a SourceMaterial when a Source exists.
It is not an annotation ID. Initial regions target PDF text and page geometry.
The model must be extensible to a
figure area, table cell or block, page, timestamped media range, or region in a
future HTML or EPUB material without pretending those targets share one
selector implementation.

A Region stores the original anchor and its material identity. Resolution is a
repeatable operation that emits evidence; it does not rewrite history to make a
new match appear original.

#### Annotation

An `Annotation` has its own stable identity and captures a human or agent mark
or interpretation associated with an authorized resource/Region; a Source
association is optional. Source-level notes remain a separate existing feature.
Initial annotation kinds may include highlight, note,
question, and interpretation.

Annotations are useful independently of formal evidence. A researcher may
highlight or note a passage without deciding what claim it supports. The
ordinary manual interaction may feel like one normal save, but the operation
layer preserves ADR-0004's distinction between capture/proposal and acceptance.
A trusted manual save may execute both operations in sequence when the user's
intentional action supplies the acceptance; the separate records and receipts
remain inspectable. Agent-authored interpretations remain proposals unless a
separately accepted policy identifies a lower-risk automatic class.

Annotation is not a permanent untyped container for every future scientific
record. When screening, extraction, appraisal, or another workflow needs
dedicated invariants, queries, accounting, conflicts, and export, that workflow
receives an explicit record contract.

### 3. Downstream evidence use is required but not yet designed

Scient's long-term product direction requires researchers to connect evidence
to project work and later inspect support, contradiction, context, uncertainty,
and staleness. `EvidenceRelation` is retained as a working architectural term,
not an accepted record shape.

The first implementation must not invent a universal `ProjectTarget`, create a
provisional Claim merely to satisfy the diagram, or bind evidence to an
unstable file path. Before a downstream-link contract is accepted, one real
workflow must identify:

- the target owner's stable identity and version boundary;
- the relationship meaning required by that workflow;
- authorship, review, staleness, and correction behavior; and
- whether a shared relation record or a target-specific record is the clearer
  durable authority.

Possible targets remain future direction, including notes, claims, analysis
results, extraction values, citations, tables, figures, and document passages.
No item in that list is selected as the first target by this ADR.

### 4. Provenance is linked but not collapsed into one receipt

Scient preserves several related but distinct forms of evidence:

| Record | Question answered |
| --- | --- |
| Context receipt | What exact materials, regions, record versions, and bounded project context could the actor or agent inspect? |
| Operation receipt | Which operation ran, through which ingress, with what actor, scope, tool/model implementation, inputs, outcome, and affected identities? |
| Authorization or intent receipt | Why was this effect allowed for this actor, exact workspace, operation, payload, generation, and time window? |
| Review and acceptance provenance | Who proposed, accepted, rejected, corrected, or superseded the scientific record, and against which version? |
| Anchor-resolution receipt | Which resolver and extraction versions attempted to locate the original Region, which selectors matched, and with what result? |

These records may reference one another. They do not become one overloaded
“evidence receipt.” Scientific provenance, runtime execution, authorization,
and human acceptance answer different questions and have different retention
and privacy implications.

Receipts must avoid storing provider credentials, unrestricted prompts,
unbounded project content, or sensitive material merely for audit convenience.
The implementation plan owns the privacy and retention review before schemas
are frozen.

### 5. Region anchoring is layered and failure-explicit

An initial PDF text Region records complementary selectors rather than trusting
one coordinate system:

- stable resource/material ID and exact revision/content hash, plus Source ID
  and attachment identity where the target has that reference role;
- media type and material format version;
- text extractor identity, version, and normalization profile;
- original extracted quote plus bounded prefix and suffix context, preserved
  under the exact capture profile rather than silently normalized;
- text start/end positions with explicit offset units and extraction profile;
- separately versioned normalized matching text/positions when useful, never
  substituted for the captured quotation or an attributed correction;
- physical page index and displayed page label;
- one or more native PDF coordinate rectangles when available; and
- bounded page/text fingerprints useful for relocation diagnostics.

No selector independently proves identity. Content hash establishes an exact
material version but cannot relocate an anchor to a changed material. Text
positions are efficient but brittle across extraction changes. Quotes can be
ambiguous. Page geometry survives some text-extraction differences but can
change after cropping, replacement, or pagination changes.

Resolution returns one of these canonical states:

- `exact` - the original material and region resolve exactly;
- `relocated` - a different selector or reviewed successor material locates one
  sufficiently strong match while preserving that relocation provenance;
- `ambiguous` - more than one plausible target exists or evidence conflicts;
- `orphaned` - the region cannot currently be located.

The resolver also returns structured reasons and selector results. Product copy
may use simpler language, but `ambiguous` and `orphaned` must not be hidden
inside a generic degraded state.

Scient never silently rebinds an ambiguous or orphaned Region. A researcher may
review and create a versioned successor anchor while preserving the original
record and its prior relationships.

### 6. Review, anchor, authorship, and freshness are separate state axes

One status field must not answer unrelated questions. At minimum, records and
relations preserve separate concepts for:

| Axis | Illustrative values |
| --- | --- |
| Authorship | user, agent, imported, system-derived |
| Review | draft, proposed, accepted, rejected, superseded |
| Anchor resolution | exact, relocated, ambiguous, orphaned |
| Freshness | current, potentially stale, stale, unknown |
| Evidence-use meaning | future target-specific or shared relationship vocabulary |

The exact persisted values require schema review. The separation is the
decision. A user-authored note can target an orphaned Region, and a precisely
resolved passage can support a rejected agent proposal. Future downstream uses
will also need freshness and relationship meaning without collapsing those
axes into review status.

Location resolution does not certify text fidelity. Native extraction, OCR,
manual transcription and corrected text retain their distinct provenance;
matching the right rectangle does not prove the quotation's word order. Owner
and audience are also not inferred from authorship or from sharing a target.

### 7. Claims are explicit, not inferred from text frequency

Scient does not automatically create canonical claims because normalized text
matches or because several notes or future evidence links use similar language.

A claim or project assertion becomes first-class through an explicit manual or
agent-proposal operation with reviewable wording and identity. Unsupported,
weakly supported, and contradicted claims are important future states. The
first capture slice does not create provisional Claims or use normalized
assertion text as a durable identity key.

### 8. Later scientific records retain their conceptual distinctions

The following records are deferred from the initial kernel, not rejected or
redefined as generic annotations:

| Concept | Why it remains distinct | Promotion trigger |
| --- | --- | --- |
| Study | One scientific study may have several reports, materials, registrations, datasets, and corrections. | A validated workflow must group multiple Sources or project objects as one study. |
| SearchRun | Reproducible discovery needs database, query, filters, date, result set, deduplication, and selection lineage. | Search or systematic-discovery work ships beyond an ephemeral lookup. |
| ScreeningDecision | Criteria, stage, reason, reviewer, conflict, adjudication, and accounting differ from free annotation. | Formal screening and PRISMA-style accounting are implemented. |
| ExtractionSchema and ExtractionValue | Schema version, units, missingness, normalization, table coordinates, conflicts, and review need dedicated rules. | Structured extraction and comparison are implemented. |
| Evidence appraisal | Quality, bias, applicability, and limitations are judgments with their own method and provenance. | A validated appraisal workflow is selected. |
| Claim | Stable assertion identity, wording revisions, evidence diagnostics, and document usage require explicit lifecycle. | Claims become a first-class project workflow rather than only relation targets. |
| CitationUse | A bibliographic Source and its formatted or manuscript-specific use are different authorities. | The document platform needs durable usage, locator, and reconciliation behavior. |

Promotion requires a concrete product workflow, schema and migration review,
query and export requirements, and explicit authority. It does not require
replacing the initial SourceMaterial, Region, Annotation, or provenance
foundations.

### 9. Canonical project state and derived retrieval remain separate

If this ADR and ADR-0006 are accepted, the project-owned records may use the
proposed `.scient/evidence/` namespace. This is not a global library location;
ADR-0010 owns library authority and independent annotation persistence. The exact directory layout and
record schemas remain implementation decisions, but they must preserve:

- bounded versioned records with stable IDs;
- atomic writes and expected-version conflict handling;
- immutable or append-only acceptance/provenance history;
- references to resources and optional Sources, reusing bytes within the same
  retention authority when safe; cross-owner preservation may require a copy;
- deterministic recovery from partial operations;
- migration and rollback evidence; and
- inspection and export independent of a running provider or chat session.

The existing `.scient/sources/` store remains the authority for its Source
records and attachments, not for every annotatable file or all retained bytes.
Existing source notes remain valid source-level notes. They are not silently
rewritten into anchored annotations.

Full-text indexes, vector indexes, embeddings, parser caches, thumbnails,
retrieval rankings, support-graph projections, and saved-view caches are
derived state. They are rebuildable and cannot become the only copy of an
annotation, relation, acceptance decision, or anchor.

An extraction result actually used by retained quotations or accepted work is
not automatically a disposable parser cache. Preserve that result revision or
the reviewed bounded evidence needed to inspect the use; rerunning an engine
later is not proof that it will reproduce the same text.

No search engine or local database technology is selected by this ADR.

### 10. Manual and agent actions use the same Scient operation boundary

The manual UI, provider agents, future native Scient agent, external MCP
clients, and automations invoke the same domain operations under ADR-0004.
Exact workspace authority is server-resolved through the ADR-0007 model if it
is accepted. Provider projection and effective capability policy follow
ADR-0008 if accepted.

Initial operation families should distinguish at least:

```text
evidence:read
evidence:annotate
evidence:propose
evidence:review
evidence:accept
```

These names remain illustrative until operation-registration review. The
invariant is that read, ordinary annotation, proposal, review, and acceptance
are not one broad permission.

Agent proposals include the exact material and Region versions the agent could
inspect. A provider's inability to receive an operation is reported as a
delivery limitation; it does not change Scient's record meaning or policy.

### 11. Capture occurs in the reader; deliberation is not constrained to one panel

The architecture exposes a reader-selection adapter that returns a bounded,
material-versioned Region candidate. The PDF reader does not become evidence
record authority and does not write canonical records directly.

The existing Sources panel may host triage and quick review. A larger Scient
surface may later host source detail, comparison, backlinks, and deliberation.
Both call the same operations and render the same records. The inherited T3
panel, chat, or route store must not own the evidence schema.

### 12. The T3 boundary remains narrow

Scient-owned domain packages contain evidence records, validation, migrations,
operations, and anchor resolution without importing React, Electron, provider,
or T3 internals.

Host integration is limited to generic surface mounting, current project and
thread resolution, file presentation, PDF selection events, provider
projection, and authenticated transport. Scient should reuse maintained T3
project, thread, worktree, panel, and environment seams through adapters rather
than fork them or replace T3's host model.

Any protected T3 seam required by implementation is documented in the desktop
upstream-divergence owner. Ordinary T3 intake must not require merging Scient's
evidence internals repeatedly.

## Evidence And External-Source Boundary

The proposal draws on external standards, scientific-method guidance, and
open-source implementations as evidence. None is selected as Scient's canonical
schema, storage model, authority system, or dependency by this ADR.

| Source | Useful evidence or idea | Boundary for Scient |
| --- | --- | --- |
| [W3C Selectors and States](https://www.w3.org/TR/selectors-states/) | Quote, position, and state concepts for identifying content. | Adapt selector ideas behind a Scient-owned versioned Region contract; do not assume web selectors alone solve PDF identity. |
| [Hypothesis client anchoring](https://github.com/hypothesis/client/blob/main/src/annotator/anchoring/html.ts) and [PDF region investigation](https://github.com/hypothesis/client/issues/3720) | Multiple-selector fallback, anchoring failure evidence, and native PDF-region considerations. | Evaluate algorithms and fixtures with exact version and license review; do not import Hypothesis account, document, permission, storage, or product assumptions. |
| [Hypothesis PDF text-quality fixtures](https://github.com/hypothesis/pdf-text-quality) | Real poor-text-layer and extraction-quality failure cases. | Use or adapt only after fixture license and representativeness review; preserve Scient-specific RTL, tables, versions, and recovery tests. |
| [Zotero PDF reader](https://www.zotero.org/support/pdf_reader) and [annotation storage](https://www.zotero.org/support/kb/annotations_in_database) | Reader-first capture, portable annotations separate from PDF bytes, and return-to-page behavior. | Keep Zotero an interoperability adapter; Scient records, project use, acceptance, and future evidence-use records remain canonical. |
| [W3C PROV](https://www.w3.org/TR/prov-dm/) | Separating entities, activities, agents, derivation, and attribution. | Reuse conceptual discipline without importing the complete model or allowing provenance vocabulary to dictate product UX. |
| [Cochrane Handbook, Chapter 5](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-05) and [PRISMA 2020](https://www.prisma-statement.org/prisma-2020-flow-diagram) | Study/report distinctions, selection, extraction, reasons, and accountable review flow. | Preserve formal-workflow concepts as future first-class contracts; do not force systematic-review ceremony on ordinary projects. |

Any code reuse requires a separate exact-source evaluation covering version,
license, dependency shape, security, maintenance, tests, and the smallest
adaptable unit. Product resemblance or an external model recommendation is not
adoption authority.

## Phase Zero Experimental Evidence

The dated [Scient PDF Anchoring Phase Zero
report](../../research/spike-reports/scient-pdf-anchoring-phase-zero-2026-08-30.md)
records an isolated synthetic experiment using Scient Desktop's existing
PDF.js dependency. Fourteen cases across 11 generated PDFs produced 8 `exact`,
3 `relocated`, 1 `ambiguous`, and 2 `orphaned` outcomes. The resolver never
selected the ambiguous duplicate and every attempt preserved the original
capture-evidence hash.

This result supports four parts of the proposal:

- stable material selection is a prerequisite for durable anchoring;
- quote/context, position, material and extractor identity, page identity, and
  PDF rectangles provide complementary evidence rather than interchangeable
  truth;
- `ambiguous` and `orphaned` are ordinary outcomes that must remain explicit;
  and
- capture evidence should remain immutable while later resolution or reviewed
  rebinding creates separate provenance.

It does not accept this ADR or qualify a production Region schema. The corpus
was synthetic, geometry was text-item rather than character accurate, scoring
thresholds were uncalibrated, only one actual PDF.js version was exercised,
OCR quality was not measured, and the existing reader was not integrated. A
licensed real-world corpus, extractor-version comparison, integrated reader
capture, false-relocation measurement, and performance evidence remain stop
gates for the corresponding implemented behaviors. They are exercised while
building the real path, not a requirement to finish all OCR or relocation
research before an exact-revision/geometry-only annotation can be implemented.

## Initial Trust Slice Authorized By This Model

If accepted, this ADR supports one deliberately narrow first implementation:

1. select text or a region in a Source PDF or ordinary project PDF;
2. create and persist a Region plus user annotation;
3. reopen and resolve the exact Region;
4. let an eligible agent inspect only the explicitly scoped resource or Region;
5. let the agent propose a bounded interpretation or note attached to that
   exact Region;
6. show the proposal beside its exact evidence and provenance;
7. accept, edit, or reject it through a separate operation;
8. reopen the project and verify continuity; and
9. copy or export a compact quote, citation, note, and provenance package.

This slice does not decide the first downstream project target. Evidence links,
broad retrieval, Claims, formal screening and extraction, and the complete
Sources workspace remain visible future directions with separate product and
architecture review.

## Alternatives Considered

### Build only a better bibliography manager

Rejected. Better import, metadata, and citation hygiene are important, but they
do not solve the project-wide loss of connection between what a researcher read
and what the project later asserts or publishes.

### Freeze a generic EvidenceRelation and ProjectTarget now

Rejected for the initial capture slice. Scient needs downstream evidence links,
but no stable first target has been selected and the document, analysis,
extraction, citation, and Claim owners have distinct lifecycles. A generic
record may still be correct later; it must be justified by concrete target
workflows rather than by a diagram alone.

### Implement the complete scientific ontology now

Rejected. It would create schemas, migrations, permissions, and interfaces
before the first evidence path validates their need.

### Store all evidence as source-note Markdown

Rejected. Free notes cannot reliably preserve exact material regions,
relationship semantics, independent review, staleness, or structured export.

### Build general grounded question answering before durable capture

Rejected as the first slice. Cross-library retrieval introduces extraction,
indexing, ranking, prompting, evaluation, and citation-correctness risk before
durable anchor and acceptance behavior is proven. It remains planned future
direction; bounded questions over an explicitly selected Region or Source may
join the trust slice after the canonical path works.

### Store evidence in T3 or provider databases

Rejected. Host and provider state cannot be the portable scientific authority.

### Make a graph editor the primary initial interface

Rejected as the starting interaction. A graph editor or derived graph view
remains future product direction, but researchers should gain continuity
without manually constructing or understanding graph structure.

## Consequences

- Scient gains a durable base for evidence-linked notes, claims, extraction,
  synthesis, manuscripts, analyses, and agent work without building those
  complete workflows immediately.
- Source material identity and anchor resolution become foundational work,
  requiring difficult fixtures and migration discipline before broad feature
  expansion.
- The first capture path uses resource/material identity, Region and Annotation,
  optionally associated with a Source; downstream evidence-link shape remains open.
- Project files remain inspectable and portable, while derived indexes can be
  replaced as scale and retrieval needs become measurable.
- Agents can perform high-volume proposal work without silently becoming the
  authority for accepted scientific meaning.
- A complete Sources workspace, graph views, formal-review mode, broad
  synthesis, and downstream evidence relationships remain later product
  decisions and implementation phases rather than rejected scope.
- Existing Sources records and notes remain valid; migration is additive.

## Required Proof Before Acceptance As Implemented

Architecture acceptance and implementation qualification are separate. Before
an enabled slice is described as qualified, apply the relevant rows below.
Project annotation need not wait for library/team delivery, broad OCR or agent
features not yet enabled. The implementation plan's activation matrix owns the
exact local, provider, visual and future-team gates:

1. a Region resolves across close/reopen without text or coordinate drift;
2. an identical reimport is recognized as the same material content;
3. a changed material version never inherits an exact anchor silently;
4. duplicate quotes produce an ambiguous result rather than an arbitrary match;
5. scanned/OCR, RTL, multi-column, table, and poor-text-layer fixtures report
   honest resolution limits;
6. selector and extractor version changes preserve original evidence and emit
   resolution receipts;
7. user annotations, agent proposals, acceptance, rejection, correction, and
   supersession survive crash-safe reopen and migration;
8. changed or missing material makes affected Regions and Annotations
   diagnosable without silently rebinding them;
9. two worktrees with one Scient project UUID cannot read or mutate each
   other's workspace-scoped evidence without an explicit cross-workspace
   operation;
10. each advertised provider is qualified on the real proposal operation;
    cross-provider claims require at least two, while a limited local preview
    explicitly names its qualified provider and does not claim wider parity;
11. a provider without delivery support cannot bypass the operation boundary;
12. export preserves known Source identity, material identity, locator, available quote or region, annotation,
    attribution, and review provenance without requiring Scient to interpret a
    proprietary database; and
13. derived search/retrieval state can be deleted and rebuilt without losing
    canonical scientific meaning.

## Acceptance Questions

The reviewer should decide these points explicitly rather than approving the
document only in general:

1. Is evidence continuity the correct durable objective?
2. Is SourceMaterial a required architecture concept even if the current code
   continues to call it an attachment initially?
3. Does the resource/Region/Annotation boundary, with optional Source
   association, implement independent annotation without premature ontology?
4. Are `exact`, `relocated`, `ambiguous`, and `orphaned` the correct canonical
   anchor states?
5. Should `.scient/evidence/` become the project-owned namespace if ADR-0006 is
   accepted?
6. Should the exact downstream evidence-link record remain open until one
   stable target workflow is selected?
7. Should claims be created explicitly rather than inferred from normalized
   wording or relationship counts?
8. Should a trusted manual save be allowed to pair capture and acceptance in
   one interaction while preserving separate ADR-0004 operations and receipts?
9. Should agent-created interpretations require proposal and separate
   acceptance by default in the first slice?
10. Is broad cross-library question answering correctly sequenced after the
   trust slice and retrieval evaluation are proven?

## Follow-Through If Accepted

- Record the acceptance date and any explicit amendments in this ADR.
- Reconcile ADR-0006, ADR-0007, and ADR-0008 without duplicating their
  authority.
- Keep the product experience and implementation plan aligned with the exact
  accepted decision.
- Add current implementation documentation in `scient-desktop` as each slice
  ships; do not describe this proposal as shipped Help.
- Add or update public Help only for behavior that is released or explicitly
  published through a labeled preview channel.
- Record every protected T3 seam and any later retirement of legacy source-note
  or material-selection assumptions.

## Revisit Triggers

Revisit this decision if real anchoring evidence shows the layered model cannot
provide honest useful recovery; if collaboration requires a different
canonical conflict model; if source materials become remotely authoritative;
if formal-review workflows prove that the initial promotion boundaries are
wrong; or if a stronger upstream model can replace part of the boundary without
weakening project ownership, provenance, uncertainty, or portability.

Do not remove the material-version boundary, silently rebind evidence, or
collapse proposal and acceptance merely to simplify implementation.
