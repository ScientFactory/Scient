# Sources And Evidence Implementation Plan

Status: Proposed
Owner: Yaacov
Created: 2026-08-29
Last updated: 2026-09-08
Purpose: Defines the phased library, project-preservation and annotation foundation, retaining the earlier Sources work packages and their proof gates without premature ontology or avoidable T3 divergence.
Doc type: Implementation candidate

## Document Rules

This document proposes sequencing, work boundaries, validation gates,
migrations, repository ownership, and documentation follow-through. It does not
accept architecture, redefine product truth, or describe proposed behavior as
implemented.

The accepted [PRD](../product/PRD.md) governs product conflicts. The proposed
experience is [Sources And Evidence Product
Experience](../product/sources-and-evidence-experience.md). The proposed durable
model is [ADR-0009: Evidence Continuity And Durable
Support](../architecture/decisions/ADR-0009-evidence-continuity-and-durable-support.md).
The active [Product Roadmap](product-roadmap.md) remains the product-sequencing
authority; this plan refines its first evidence-linked scientific-project slice
only if the owner accepts the package and updates that roadmap deliberately.
Workspace authority and provider-independent agent exposure depend on proposed
[ADR-0007](../architecture/decisions/ADR-0007-logical-project-workspace-binding-and-operation-scope.md)
and [ADR-0008](../architecture/decisions/ADR-0008-agent-tool-registry-and-access-policy.md).

### Update Policy

Update this plan when a decision is accepted or rejected, a proof gate changes,
a work package ships or retires, current-main evidence invalidates a dependency,
or a new cross-repository consequence appears. Current implementation and Help
must be updated in their owning repositories as work lands; this plan must not
become an accumulating feature changelog.

## Outcome

The first end-to-end foundation proof succeeds when a researcher can reuse a
library reference in a project, preserve its exact permitted material, keep
personal notes private, and retain an independently usable project annotation
and handoff. An ordinary project document must not need Source registration
before annotation. The saved-passage candidate supplies useful implementation
and QA evidence, not the permanent ownership boundary.

Connecting that evidence to claims, results, analyses, extraction values,
citations, and document passages remains a central future outcome. This plan
does not yet select the first downstream target or approve one universal
evidence-link record.

The program develops this broader library foundation in useful increments,
then expands into richer reading, deliberation, formal evidence workflows and
grounded synthesis. It does not build every library or collaboration feature
before proving the first complete path.

## Current Six-Phase Delivery Sequence

This sequence reflects the owner's 2026-09-08 acceptance of the broader
foundation direction. It supersedes the earlier numbered phase ordering below;
the `P0.*` and `P1.*` identifiers remain historical work-package references,
not the meaning of current Phase 1 or Phase 2.

| Phase | Deliverable and exit gate | Current disposition |
| --- | --- | --- |
| **1. Ownership and authority** | Record accepted principles in PRD; propose exact library/project scope, independent annotations, retained uses and contribution/deletion semantics in ADR-0010; reconcile owners and review hard lifecycle cases | Documentation package prepared locally; detailed contract awaits owner review; no runtime or migration implementation |
| **2. Persistence, authority and document-fidelity proofs** | Select the smallest storage/commit mechanism using isolated fixtures; demonstrate stable-ID migration, exact retention, old-writer protection, interrupted publication/retry/revocation, and native/RTL/scanned document fidelity | Next after contract review; no engine choice or successful proof claimed |
| **3. Local library-to-project foundation** | Implement one personal-library to project path with private notes, explicit contribution, independent project retention and offline handoff; use shared operations and qualified scope resolver | Not started; team ownership fits the contract, networked team delivery is separately gated |
| **4. Reading, annotations and agents** | Deliver ordinary-file and Source capture, reopen/review, minimalist interactions and bounded agent reads/proposals through the same service; no Source or OCR prerequisite for a region mark | Existing candidate contributes code and QA, not phase completion |
| **5. Processing and library workflows** | Qualify shared extraction/OCR adapters when justified; advance organization, retrieval, external continuity and team workflows through focused product gates | Retained roadmap; no taxonomy, OCR engine or universal evidence graph selected |
| **6. Migration rehearsal and release qualification** | Rehearse representative existing projects, rollback/recovery, user-visible compatibility and handoff; align fresh main, qualify providers and visual UX, update current docs, then request publication authority | Not started; migration tests begin in Phase 2, not postponed to release |

Phases describe dependency gates, not a demand for a six-step waterfall.
Document-corpus tests can run while storage faults are exercised; interaction
prototypes and organization research can proceed without committing schemas.
Existing reliability fixes remain useful. Broader schema changes wait for the
relevant accepted contract and proofs. Team transport, wide formats, formal
evidence and plugin programs are retained extensions, not all prerequisites for
the first release.

### Phase 1 Deliverables And Review Boundary

- Accepted direction: [PRD](../product/PRD.md#research-library-and-project-preservation).
- Detailed proposed contract and lifecycle scenario review:
  [ADR-0010](../architecture/decisions/ADR-0010-research-library-project-use-and-annotation-ownership.md).
- Reconciled product experience, ADR-0006/0009, file/resource foundation and
  product roadmap; earlier research is retained as dated evidence.
- Independent architecture and lifecycle review plus local documentation checks.
  These are document checks, not backend, visual, storage or OCR qualification.

Phase 1 does not accept all of ADR-0009, amend ADR-0004 silently, choose physical
storage, migrate the candidate, update public Help, launch an app or publish.
ADR-0010 contains the exact amendment map for owner review.

**Phase 1 review result, 2026-09-08:** independent authority and lifecycle
reviews challenged the draft, then confirmed their material findings resolved
after refinement. The contract now covers multi-authority dependencies,
contribution/request identity, ordinary save versus scientific acceptance,
retained deleted notes, expanding audiences, divergent updates and revoked-draft
recovery. Local checks passed for metadata, 132 local links and 14 anchors
across the 19-document changed package, including earlier preserved work;
`git diff --check` passed. These results qualify the proposal for owner review,
not its unimplemented runtime guarantees. The accepted ADR-0004 text is unchanged.

### Phase 2 Proof Plan

Use an isolated current-main desktop worktree and licensed/synthetic fixtures.
Keep private QA material out of Git and external processing without authority.
Do not migrate the user's live library for a spike.

1. **Refresh/reuse:** inspect merged main and agent-foundation/upstream work;
   map existing IDs, store history, operation receipts, native PDF reader and
   file resolver. Choose additive adapters, not a second registry.
2. **Parallel proofs:** compare the minimum state-plus-receipts/changefeed/domain
   event persistence needed by ADR-0010 while separately measuring native text,
   RTL/reading order, geometry, scanned/mixed pages and bounded agent extraction.
   Native extraction and geometry-only capture precede any OCR dependency.
3. **Fault gates:** run every ADR-0010 scenario with crashes before/after visible
   commit, lost responses, changed payloads, revoked grants, copied worktree
   intents, tombstone replay and old-reader/writer access. Prove no duplicate,
   no partial publication and no unauthorized result disclosure. Choose an
   enforceable authority fence; ordinary preflight checks are insufficient.
4. **Preservation gates:** preserve Source/material IDs, annotation lineage,
   exact bytes and relied-on processing outputs through restart, migration,
   rollback and library-independent handoff. Demonstrate restricted/missing
   outcomes; don't count a hash-only export as complete preservation.
5. **Decision output:** record measured results, selected schema/layout and
   commit mechanism, retention/compatibility bounds, unresolved failures and
   the smallest Phase 3 implementation slice in these owning docs. No universal
   engine, networked team service or destructive migration is a spike byproduct.

Stop at the failed boundary if authority cannot be fenced, old writers can
delete retained dependencies, or a fidelity claim exceeds evidence. A failure
may narrow delivery or refine mechanics without discarding accepted ownership.

## Current-State Baseline

### Current local continuation and practical order (2026-09-08)

The local desktop continuation is based on checkpoint `200373d70e2d`, aligned
with the main snapshot `4d4d53d80595`. Earlier dated snapshots below are
historical evidence, not today's main qualification. The owner authorized
implementation and review locally, without push, PR, merge, or deployment.

The candidate adds saved PDF passages, explicit notes, reopen/return, copy with
citation, safe removal, and bounded agent reads to the existing Sources store
and reader. Current behavior, limits, and verification boundaries belong in
desktop `docs/internals/scient-sources.md` and candidate-qualified Help, not in
a second implementation ledger here. This increment does not complete the
broader first trust journey, and the proposed architecture is not silently
accepted by implementation.

The following is the earlier candidate continuation checklist, retained as
work packages within the current six-phase sequence, not a competing order:

1. Qualify the local durable reading increment: real PDF selection, restart and
   reopen, exact return, notes, citation copy, missing/changed material,
   concurrent writes, bounded storage, and provider-scoped reads. Keep native
   visual acceptance separate from automated tests.
2. Review this narrow storage/interaction decision against the ownership gate
   below and reconcile accepted ADR-0004 authority and provenance before any
   publication. Preserve existing candidate data and QA evidence; do not
   further entrench Source-record format 2 as the general annotation model.
   Reuse existing scope while testing; do not wire an unfinished registry into
   production or build a competing registry.
3. Explore library organization alongside capture QA. Collections are a useful
   hypothesis, existing tags are reusable, and navigation rules remain open.
   Do not implement taxonomy or a full workspace before product review.
4. Once the durable manual workflow is accepted, design bounded agent
   interpretation with explicit proposal/review provenance and one concrete
   reuse destination, such as a project note. Do not begin with a generic
   `ProjectTarget`, universal evidence graph, or automatic claim acceptance.
5. Advance retrieval, larger-workspace, formal-review, and other retained
   directions when their own workflows and dependencies are ready. They are
   not rejected and need not all wait in one artificial waterfall.

Before resuming after a pause, inspect fresh main and the agent-foundation
branch again. In-flight registry/project-authority work is not automatically
shipped, and provider tool delivery is not proven by a registered tool alone.

### Ownership Gate Before Further Schema Commitment

The [first-principles ownership review](../research/source-evaluations/sources-and-document-processing-first-principles-2026-09-08.md#library-ownership-reconsideration)
led to the owner's accepted reusable personal/team libraries, independent
project preservation and context-owned independent annotations in PRD.
[ADR-0010](../architecture/decisions/ADR-0010-research-library-project-use-and-annotation-ownership.md)
proposes the detailed contract; no storage engine or event-log architecture is
accepted. The
existing local passage candidate remains useful implementation and QA evidence,
not authority for a permanent Source-only annotation format.

Coordinate these investigations without making them a serial product rewrite:

- **Ownership:** review ADR-0010's proposed implementation semantics for the
  accepted reusable-holdings/preserved-project model. Keep target, content owner,
  audience, project acceptance and authorized handoff separate; do not reopen
  the five accepted directions as an undecided product fork.
- **Corpus and processing:** evaluate bounded native extraction and optional
  OCR/layout on multilingual, scanned, mixed, changed and damaged materials.
  Use licensed fixtures; private material stays outside Git and is not uploaded
  without authority. Measure fidelity, geometry, coverage and resource costs.
- **Storage:** compare state-plus-receipts, transactional changefeeds and domain
  events using the same migration, conflict, offline deletion, crash and restore
  cases. Reuse existing operation IDs, actor categories and receipts; identify
  missing coverage. Do not assume one log or one new database is necessary.

These are proposed investigations, not completed spikes. Use isolated fixtures
and provisional adapters, not another production store. Conceptual ownership
must be clear before a storage result can justify a schema; empirical failures
must be allowed to change that conceptual model.

**Gate for new durable formats or publication:** demonstrate old project/Source
IDs and exact material references surviving migration, honest older-reader
behavior, crash recovery, and independent project handoff. Decide the minimum
retained evidence and unavailable-material behavior. Resolve ADR-0004's exact
project operation scope and project-owned scientific annotation requirements
explicitly before introducing personal/team library authority. Record reviewed
amendments in the owning ADRs; a successful storage benchmark is not acceptance.

Reader reliability fixes, existing-format tests and isolated region-capture
proofs need not wait for full Library, sync, two-way Zotero or OCR delivery.
New cross-project sharing, universal annotation storage and irreversible data
migrations do wait for the corresponding ownership decisions. Keep all work
local unless separately authorized for publication.

The original decision snapshot was verified on 2026-08-29. The Desktop Sources
baseline was refreshed after PR #213 merged on 2026-08-30; the 2026-08-31
follow-up also checks main through PR #214. Refresh this section again before
later production recommendations begin.

### Scient product and architecture repository

- `Scient` `origin/main` was `3689423e411cdf66b48a2ef86235319aa27dc060`
  when the Phase Zero agent-tool package was created.
- The Phase Zero documentation commit `8491b9a0c3bbfb2d516d1635c71f7e1c48f83fe2`
  adds proposed ADR-0007, proposed ADR-0008, its investigation report, and its
  implementation plan. This Sources package is intentionally stacked on that
  commit so its dependencies are reviewable together without copying them.
- ADR-0004 is Accepted. ADR-0006, ADR-0007, ADR-0008, and ADR-0009 remain
  Proposed until explicit owner review.

### Scient Desktop

- The merged Sources foundation baseline is
  `16266e27782c98d7d3a5722998ccddda9de7c218`, the merge of
  [PR #213](https://github.com/ScientFactory/scient-desktop/pull/213).
- On 2026-08-31, refreshed `origin/main` is
  `705df5785abcdaf13905100dfd81792c78d13d9e`: PR #214 changes LaTeX diagnostics,
  their tests, and their documentation, without changing Sources/PDF capture.
  The local passage-proof candidate includes that non-overlapping advance.
- The earlier reviewed baseline includes desktop PR
  [#203](https://github.com/ScientFactory/scient-desktop/pull/203), whose
  history-preserving merge integrates official T3 through
  `660cddd3bc9801e089afcabba11c62f41aeac5c3`.
- Generic chat-file transport remains separate from Source-material identity,
  evidence storage, and authority to use scientific evidence.
- `packages/scient-sources` owns the Source schema, project store, imports,
  revisions, duplicate handling, operations, and receipts independently of
  React, Electron, and T3 internals.
- `.scient/sources/` stores project-owned Source records and immutable
  content-addressed PDFs.
- `ScientSourceAttachment` already supplies the first material identity: an
  attachment ID, PDF kind, SHA-256 content identity, and portable relative
  path.
- The current Source record offers one optional Source-level note and an
  attachments array.
- The existing reader, authenticated attachment resolution, project/worktree
  containment, revisions, history, and nine Sources MCP tools are foundations
  to reuse.
- Current implementation documentation lives in
  `scient-desktop/docs/internals/scient-sources.md`; product Help lives in
  `scient-desktop/docs/user/` and must describe only released or explicitly
  preview-qualified behavior.

### Phase Zero Desktop implementation update

PR #213 merged the two bounded foundations previously described as local
candidates:

- provider-neutral material selection by stable attachment ID, with explicit
  multiple-, missing-, and invalid-material outcomes; and
- independent transient request lanes for import, overview, and Zotero
  workflows while durable server operations remain authoritative.

The merge completes the implementation work described in P0.2 and P0.5. It
does not accept this architecture package, create a Region or Annotation
schema, qualify the anchoring spike, or decide downstream evidence links.

## Retained Work Packages: Two Coordinated Lanes

The sections through the earlier Phase Five below preserve the original plan's
detail and historical evidence. Their legacy phase labels are not current
delivery numbering. Ownership/authority work now belongs to current Phase 1;
storage, anchoring and migration proofs to Phase 2; the thin trust slice to
Phases 3–4; library/retrieval and later workflows to Phase 5 and subsequent
focused programs. Release qualification is current Phase 6.

One long feature chain would either delay user value behind metadata hygiene or
let low-risk convenience work accidentally define the evidence model. Use two
coordinated lanes with explicit merge gates.

### Lane A: Evidence continuity and trust

This lane owns the differentiating vertical path:

- material selection and version identity;
- layered Region anchors;
- annotations;
- later evidence relationships once a concrete target boundary is accepted;
- agent proposal and researcher acceptance;
- provenance and recovery;
- evidence-aware reader and review interactions; and
- later structured evidence and synthesis.

It is gated by ADR review and anchoring proof.

### Lane B: Library utility and adoption hygiene

This lane improves the existing Source ledger without pretending to complete
the evidence product:

- workflow-controller cleanup;
- metadata and duplicate review;
- stable external provenance;
- identifier intake;
- RIS and BibTeX interoperability;
- multiple-material presentation;
- library organization and navigation exploration; and
- measured search/index work.

Lane B may progress while anchoring experiments run when its changes remain
additive, preserve current Source authority, and avoid freezing open evidence
schemas.

## Legacy Phase Zero: Decide And Prove The Foundation

Phase Zero ends with reviewable decisions and evidence, not a broad product
surface.

### P0.1 Review the decision package

Review explicitly:

- ADR-0006 project-owned state and Sources authority;
- ADR-0007 logical project versus exact workspace binding;
- ADR-0008 operation registry and agent-tool policy;
- ADR-0009 evidence continuity and durable support; and
- the product experience in this package.

Resolve amendments in the owning ADR. Do not approve an implementation plan as
a substitute for architecture acceptance.

**Gate:** every accepted, rejected, or deferred point is recorded with its
authority and dependent documents are reconciled.

### P0.2 Establish the SourceMaterial selection contract

Reuse current attachments. Introduce no evidence schema yet.

Define and test a provider-neutral selection service that:

- returns one eligible material only when policy can choose it unambiguously;
- addresses materials by stable attachment/material ID, never array position;
- preserves current deterministic single-PDF behavior for existing Sources;
- explains no-material, unsupported-material, several-material, missing-bytes,
  and hash-mismatch states;
- separates a temporary “primary material” choice from durable Source identity;
  and
- can later support user-selected versions without rewriting every caller.

**Gate:** no new Region, reader, or agent code depends on `attachments[0]` as
architectural meaning.

**2026-08-30 status:** completed in merged desktop PR #213. The merged contract
is implementation truth; it does not by itself accept ADR-0009 or authorize an
evidence namespace.

### P0.3 Run the anchoring spike

The spike is research evidence, not production schema.

Build the smallest isolated harness capable of:

1. loading an exact PDF material;
2. extracting normalized text and page geometry;
3. recording quote, context, positions, page identity, and rectangles;
4. closing and reopening;
5. resolving with the same extractor;
6. resolving after a controlled extractor-version or normalization change;
7. attempting resolution against an identical reimport and a changed version;
8. producing exact, relocated, ambiguous, and orphaned outcomes with reasons;
   and
9. preserving original anchor evidence after every attempt.

The fixture set must include:

- a clean born-digital single-column PDF;
- repeated identical quotations;
- a multi-column paper;
- a table and figure-caption case;
- a scanned or poor-text-layer PDF;
- an OCR-derived PDF;
- an RTL or mixed-direction document;
- two versions of one paper; and
- changed page geometry or pagination.

Candidate ideas may be adapted from:

- [W3C Selectors and States](https://www.w3.org/TR/selectors-states/);
- [Hypothesis client anchoring](https://github.com/hypothesis/client/blob/main/src/annotator/anchoring/html.ts);
- [Hypothesis PDF region-selector investigation](https://github.com/hypothesis/client/issues/3720);
- [Hypothesis PDF text-quality fixtures](https://github.com/hypothesis/pdf-text-quality); and
- the existing Scient PDF reader and extraction dependencies.

These are reference evidence, not selected dependencies. Preserve exact
versions, licenses, adapted ideas, and rejected assumptions in the spike report.

**Stop gate:** do not freeze the Region schema or claim exact evidence
continuity if the resolver can silently select a wrong duplicate or changed
passage.

**2026-08-30 research evidence:** the isolated deterministic harness and its
limits are recorded in [Scient PDF Anchoring Phase
Zero](../research/spike-reports/scient-pdf-anchoring-phase-zero-2026-08-30.md).
Fourteen synthetic cases produced 8 exact, 3 relocated, 1 ambiguous, and 2
orphaned outcomes. No ambiguous candidate was selected and original capture
evidence remained unchanged. This marks the synthetic harness complete while
leaving real-world corpus, actual extractor-version comparison,
character-accurate reader capture, false-relocation measurement, performance,
and integrated UX gates open. It does not freeze a Region schema or complete
P0.3 overall.

**2026-08-31 follow-up:** local desktop candidate
`codex/sources-pdf-passage-proof-20260831`, computer-use tested on merged PR
#213 then advanced without PDF changes to main `705df5785` (PR #214), adds a
development-only character-range capture and exact-return adapter plus a
read-only actual-extractor comparison script. The same report records seven
PDFs/11 pages compared with PDF.js 6.2.108 and 5.4.624, including two licensed
real papers, and integrated desktop capture/reopen, partial-word, RTL, zoom,
rotation, and Source-attachment evidence. This is local uncommitted candidate
work, not release or human-acceptance evidence. It advances the reader and
extractor gates but does not complete P0.3: representative corpus, accessibility,
relocation calibration, OCR quality, scale, and full review/export remain open.
No durable schema or project namespace was added. The independently developed
agent-tools authority foundation must be reviewed and reused before later
stateful/agent operations; do not duplicate it in this reader work.

### P0.4 Prototype the experience before building the workspace

Design and test the information architecture for:

- reader selection and capture;
- compact panel triage;
- organization and navigation when a project has many Sources;
- source-detail annotations and usage;
- agent proposal review beside exact evidence;
- unresolved and stale states; and
- the future full Sources and Evidence workspace.

The prototype should use realistic small and large libraries, Source,
annotation, proposal, conflict, and failure states. It must show
ordinary-research and formal-mode expansion without putting every future
control on the first screen. Possible organization ideas remain exploratory;
this phase does not approve categories, collections, hierarchy, tags, saved
views, or their storage model.

The full workspace is designed now so earlier surfaces fit it, but it is not
fully implemented in Phase Zero.

**Gate:** researchers can identify what a Source is, capture a passage without
leaving the reader, distinguish their note from an agent proposal, and recover
an unresolved passage without understanding internal graph terminology.

### P0.5 Reconcile the workflow-controller branch

The controller owns transient client request state only. Server operation
records, resumability, retries, cancellation, and durable item state remain
authoritative.

**Gate:** focused hook/controller tests, relevant Sources tests, formatting,
type checking, full CI, and manual import/detail/error/dismissal behavior pass
against the exact candidate commit.

**2026-08-30 status:** completed in merged desktop PR #213. Future workflow
changes must preserve this client/server authority split.

### P0.6 Bind future evidence operations to the common agent foundation

If ADR-0007 and ADR-0008 are accepted, register evidence operations through
their shared binding and operation registries. Do not add a direct MCP-only
path to accelerate the demo.

Phase Zero defines:

- stable candidate operation IDs;
- required capability atoms;
- exact initialized-project and workspace scope;
- read, write, proposal, review, and acceptance effects;
- provider projections or explicit unsupported results;
- context, operation, authorization, and review receipt ownership; and
- running-session refresh/revocation behavior relevant to the slice.

**Gate:** at least Sources and Documents prove the generic registry first, or
the evidence slice uses the same reviewed kernel while those family proofs are
completed. Evidence work must not invent a competing registry.

## Legacy Phase One: Implement The Thin Trust Slice

Phase One should be a small sequence of separately reviewable desktop changes.
Exact pull-request boundaries may change after Phase Zero evidence; the
dependency order should not.

### P1.1 Domain contracts and migration harness

The accepted direction requires independent annotations and a resource boundary
that also supports ordinary files. The Source-material adapter is one input,
not the general owner. ADR-0010 review and current Phase 2 proofs precede the
schema; the bullets below do not authorize Source-only annotations.

- Add versioned Region and Annotation contracts in a host-independent Scient
  package.
- Reference existing Source and attachment/material identities rather than
  duplicating Source metadata or PDF bytes.
- Add strict decoders, expected-version rules, stable IDs, migrations, and
  recovery fixtures.
- Establish `.scient/evidence/` only after the authorizing ADRs are accepted.
- Keep source-level notes unchanged.

**Gate:** round-trip, invalid-record, partial-write, migration, rollback, and
unknown-version tests pass without UI or provider dependencies.

### P1.2 Anchor resolver and material adapter

- Promote only the proven selectors and resolver behavior from the spike.
- Keep extractor versions and resolution reasons visible to the domain layer.
- Resolve against one exact material selected through the material contract.
- Emit anchor-resolution evidence without mutating original anchors.

**Gate:** all Phase Zero fixtures pass deterministically, including honest
ambiguous and orphaned outcomes.

### P1.3 Reader capture

- Add a narrow selection adapter to the existing PDF reader.
- Present the validated minimal capture actions.
- Persist a Region and user highlight or note through the operation service.
- Reopen and jump to exact, relocated, ambiguous, or orphaned states.
- Preserve reader behavior for ordinary PDFs not opened as Sources.

**Gate:** capture and reopen pass in an isolated candidate with keyboard,
selection, zoom, page navigation, RTL text, and failure-state review.

### P1.4 Bounded agent interpretation and review

- Expose only the selected Source or Region required by the operation.
- Record what the agent could inspect without retaining secrets or unbounded
  prompt content.
- Let the agent propose, never directly accept, one bounded note or
  interpretation attached to the exact Region.
- Present proposal wording, exact evidence, limitations, and effect to the
  researcher, with edit, accept, reject, correction, and supersession behavior.
- Verify consistent canonical behavior through at least two qualified provider
  projections and an explicit unsupported-provider case.

**Gate:** accepted and rejected states survive reopen; history remains
inspectable; provider names and tool transports do not appear in canonical
record identity; permission and exact-workspace tests prevent scope widening.

### P1.5 Continuity and portable output

- Close and reopen after every meaningful state.
- Test crash interruption before and after durable commit.
- Copy or export a compact evidence package containing Source identity,
  material version, quote, locator, annotation, attribution, and review
  provenance.
- Verify that the package remains understandable without the originating chat
  or derived index.

**Phase One exit gate:** one complete trust journey passes automated and manual
acceptance testing against the exact release candidate. A successful record
write without reader return, proposal review, recovery, and portable output is
not completion.

## Open Downstream Evidence-Link Decision

After the capture-and-review path is proven, select one real project use of
evidence and review it with the owning product area. Candidate targets include
claims, notes, analysis results, extraction values, citations, figures, tables,
and document passages. This list records direction, not a selected target.

That review must decide whether the first use needs a shared
`EvidenceRelation`, a target-owned usage record, or both. Do not create a
generic `ProjectTarget`, provisional Claim, or universal object-reference union
before this decision.

## Lane B During Phases Zero And One

The following work may proceed independently when it does not freeze evidence
architecture or compete for the same files:

### Workflow and reliability

- reconcile the existing workflow-controller branch;
- keep durable server operations authoritative;
- improve cancellation, status, and error recovery only against demonstrated
  failures; and
- retain focused UI-hook tests plus runtime validation.

### Metadata and provenance

- preserve and expose stable Zotero server/library/item/version provenance;
- continue exact DOI/PMID enrichment with honest offline behavior;
- improve metadata correction and duplicate-review queues; and
- avoid fuzzy identity merges without a separately reviewed model.

### Interoperability

- add bounded RIS and BibTeX import/export based on canonical Scient fields;
- record unsupported or lossy fields rather than inventing values;
- keep citation rendering derived; and
- add identifier intake only when exact matching and provenance are defined.

### Multiple materials

- replace first-array-element assumptions with the material-selection contract;
- allow researchers to understand which material is available or used;
- defer complex preferred-version policy until a real multi-version workflow
  is validated; and
- never let a display choice silently rebind existing evidence.

### Library organization and navigation exploration

- investigate how researchers find and manage Sources as project libraries
  grow;
- explore groupings, tags, saved or dynamic views, and attention-oriented
  navigation without approving those concepts yet;
- distinguish library organization from Study, screening, evidence, and other
  scientific workflow records; and
- prototype both compact-panel and larger-workspace navigation before choosing
  a durable model or implementation sequence.

Basic library improvements may proceed independently when they remain additive
and reviewed, but this proposal does not yet authorize a collection schema or
specific navigation design.

## Legacy Phase Two: Library Utility And Retrieval

After the trust slice establishes canonical records and anchor behavior:

### Search technology bakeoff

Define measurable requirements before selecting an index:

- source metadata, notes, annotations, quotes, and exact-region retrieval;
- multilingual and RTL text;
- hundreds and thousands of Sources;
- incremental updates and deterministic rebuild;
- offline behavior and bounded disk use;
- parser/extractor version changes;
- ranking transparency and exact-filter behavior; and
- future remote/mobile projections without moving canonical authority.

Evaluate SQLite FTS5 and other candidates behind a derived-index interface.
Vector or embedding retrieval is a separate evaluated layer, not a replacement
for exact search or canonical records.

**Gate:** deleting and rebuilding every derived index preserves all canonical
meaning and produces measured acceptable search behavior on representative
projects.

### Library organization and navigation

Develop the library beyond one flat list. Candidate ideas include
researcher-created groupings, tags, saved or dynamic views, and navigation for
Sources that need attention. The exact vocabulary, overlap rules, hierarchy,
Zotero relationship, agent behavior, persistence model, and compact-versus-
expanded presentation remain unapproved until product exploration is reviewed.

**Gate:** the selected direction helps researchers manage realistically large
project libraries without confusing organizational choices with scientific
workflow state or duplicating Source truth.

### Source detail and triage

- add material/version health;
- surface highlights, notes, and evidence usage;
- provide duplicate, missing-metadata, unresolved-anchor, stale-relation, and
  agent-review queues; and
- keep the compact panel focused on continuation rather than complete
  deliberation.

## Legacy Phase Three: Sources And Evidence Workspace

Implement the larger deliberation surface only after the trust slice and
library information architecture are validated.

The first workspace version should support:

- source and material navigation;
- annotations and exact-region return;
- evidence relationships to project notes, results, analyses, and document
  passages through the accepted downstream-link model;
- agent review queue;
- support, contradiction, uncertainty, staleness, and unresolved diagnostics;
- explicit Claim creation when its contract is accepted; and
- comparison across a bounded selected set of Sources.

Do not lead with a graph canvas. A graph may be offered later as a derived view
if real workflows benefit.

**Gate:** the workspace makes deliberation materially easier than the panel and
reader without duplicating canonical records or forcing formal-review concepts
into ordinary projects.

## Legacy Phase Four: Structured Evidence Workflows

Introduce formal mode through separately reviewed product and record contracts:

1. Study and report relationships;
2. reproducible SearchRun records;
3. criteria and stage-aware ScreeningDecision records;
4. ExtractionSchema and ExtractionValue records with supporting Regions;
5. evidence appraisal and limitation records;
6. conflict and adjudication behavior;
7. accounting and interoperable export; and
8. later multiple-reviewer responsibility.

Relevant reference evidence includes:

- [Cochrane Handbook, Chapter 4](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04-searching-selecting-studies);
- [Cochrane Handbook, Chapter 5](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-05);
- [PRISMA 2020 flow diagrams](https://www.prisma-statement.org/prisma-2020-flow-diagram); and
- current systematic-review product research preserved in the relevant source
  evaluation.

These references explain scientific requirements; they do not select a schema,
dependency, or enterprise-review product shape.

**Gate:** formal mode reuses the initial material, Region, evidence,
provenance, and authority foundations and can be disabled without degrading
ordinary projects.

## Legacy Phase Five: Evidence-Grounded Synthesis And Writing

Broad question answering and synthesis follow measurable retrieval and support
correctness.

Add in bounded stages:

- questions over an explicitly selected Source set;
- cross-source cited answers with exact passage inspection;
- gap, conflict, uncertainty, and unsupported-assertion diagnostics;
- save-to-note, evidence, Claim, analysis, or document workflows;
- evidence-aware drafting and citation intent;
- manuscript evidence rail and usage diagnostics; and
- staleness propagation when Sources, materials, analyses, or accepted wording
  change.

Evaluation must measure citation correctness, evidence coverage, unsupported
statements, retrieval misses, contradictory evidence, abstention, cost, and
latency. Fluency is not sufficient proof.

## Cross-Repository Ownership

| Repository | Owns during this program | Must not own |
| --- | --- | --- |
| `Scient` | Product direction, ADRs, cross-product architecture, roadmap, research evidence, this plan. | Current desktop behavior or public Help claims. |
| `scient-desktop` | Source/evidence implementation, current implementation docs, migrations, tests, T3 divergence, release-qualified Help. | Canonical cross-product product direction or a separate product roadmap. |
| Website | Scient Docs rendering, navigation, search, deployment, and exact published source/version. | A second hand-authored copy of Sources Help. |
| `scient-agent` | No work in this program until native Scient-agent implementation starts under its own accepted plan. | Constraints on the current provider-agent evidence slice merely because an inherited repository exists. |

A cross-repository consequence uses separate ordered pull requests. Matching
branch names do not establish dependency.

## T3 Alignment And Upstream-Conflict Strategy

1. Keep Source/evidence domain records, migrations, operations, and resolvers
   in Scient-owned packages.
2. Reuse T3 environment, project, thread, worktree, panel, route, and transport
   seams through narrow adapters.
3. Keep reader selection behind one adapter rather than forking the reader.
4. Keep provider-specific names and configuration in projection adapters, not
   domain operations.
5. Prefer additive Scient surfaces and registries to modifications in inherited
   generic components.
6. When a generic T3 seam must change, make the change upstream-friendly and
   record why Scient still needs any protected divergence.
7. Recheck every affected seam after upstream intake; do not preserve a
   divergence after T3 supplies an equivalent or stronger contract.
8. Never accept T3 session, chat, provider, or host-database state as canonical
   scientific evidence merely to reduce adapters.

## Migration And Compatibility Rules

- Existing Source IDs, metadata, attachments, hashes, revisions, operations,
  receipts, and history remain valid.
- Existing Source-level notes remain Source-level notes. Migration may offer an
  explicit user-reviewed conversion to an anchored Annotation later; it is not
  automatic.
- Initial evidence records reference current attachment IDs and hashes.
- Replacing first-attachment UI assumptions is additive and does not reorder or
  silently reinterpret stored attachment arrays.
- Every new canonical record has a versioned decoder and additive migration
  path.
- Migrations are idempotent, crash-recoverable, observable, and reversible
  during a bounded compatibility window.
- Unclassifiable legacy or damaged records are quarantined or reported; they
  are not attached to the currently open project by convenience.
- Derived indexes are disposable and excluded from canonical migrations.
- Extraction results used by retained quotations or accepted work are not
  merely disposable indexes: preserve the exact used result or approved
  bounded evidence and its provenance through migration.
- A future library binding must preserve existing project identity and pinned
  uses. Do not automatically merge project notes, apply library corrections to
  accepted evidence, or replace portable project state with private live links.

## Verification Matrix

Every implementation phase chooses the relevant rows and records exact fixture,
candidate commit, platform, provider, and result.

| Dimension | Minimum proof |
| --- | --- |
| Material identity | same bytes, changed bytes, several attachments, missing bytes, hash mismatch |
| Anchoring | exact, relocated, duplicate/ambiguous, orphaned, poor text, OCR, RTL, multi-column, tables |
| Project scope | main checkout, two worktrees sharing project UUID, independent clone, relocated root, remote environment |
| Record lifecycle | create, edit, no-op retry, stale revision, accept, reject, supersede, crash before/after commit |
| Agent delivery | two qualified providers, canonical and qualified tool names where applicable, explicit unsupported provider |
| Authority | read, annotate, propose, review, accept, destructive action, stale generation, expired/replayed receipt |
| Recovery | reopen, index deletion/rebuild, interrupted migration, missing material, damaged record, rollback |
| Portability | project copy, exported evidence package, no originating chat/provider/index required |
| Future library scope | same reference in two projects, private versus shared notes, handoff without originating library, deletion/reconnect, no unauthorized search leakage |
| Scale | representative small project plus measured hundreds/thousands library candidate before index selection |
| UX | keyboard, selection, zoom, RTL, long text, screen-reader labels, ambiguity, offline, proposal review |

Static type checking and unit tests do not prove the complete experience. Each
user-visible phase needs an isolated desktop candidate and manual runtime
review against realistic fixtures.

## Documentation Follow-Through

### Before architecture acceptance

- Keep ADR-0009, the product experience, and this plan Proposed.
- Preserve Phase Zero research as research evidence.
- Do not update public Help or current implementation docs with intended
  behavior.

### After architecture acceptance, before implementation

- Record exact acceptance amendments in the ADRs.
- Reconcile cross-links and remove any proposal language that now conflicts.
- Create a desktop implementation record only when code work starts and the
  nearest existing owner cannot coherently hold it.
- Record protected T3 seams before relying on them.

### As each slice ships

- Update `scient-desktop/docs/internals/scient-sources.md` with exact code
  anchors, format versions, migrations, limits, tests, and known failures.
- Update the desktop capability owner and operation registry from shipped code,
  not this plan.
- Update or extend existing `scient-desktop/docs/user/` pages for actual user
  workflows rather than creating one Help page per pull request.
- Publish public Scient Docs from the reviewed desktop Help corpus and exact
  release or labeled preview source.
- Record replaced behavior or removed capabilities in the appropriate
  retirement/current-implementation owner.

### After the program changes phase

- Update this plan's phase status and active gate.
- Update the product roadmap only when owner review changes the active product
  sequence.
- Promote stable implementation truth to capability and architecture owners;
  do not leave completed truth only in planning prose.
- Retire temporary spike reports or branch-specific checklists when their
  durable conclusions have been promoted and their evidentiary value no longer
  justifies retention.

## Future Capability Horizon And Current Boundaries

The first trust slice does not exhaust the intended Sources and evidence
product. Retain these future directions in the roadmap:

- a mature Sources and Evidence workspace with large-library organization and
  navigation;
- durable evidence use across notes, claims, analyses, extraction values,
  citations, figures, tables, and document passages;
- graph visualization and editing;
- broad library retrieval, grounded questions, and synthesis;
- explicit and later assisted Claim creation;
- formal screening, extraction, appraisal, and other scientific records;
- evaluated exact, full-text, vector, and hybrid retrieval;
- reviewed OCR and recovery for material without trustworthy text;
- EPUB, HTML, audio, video, and other material anchoring;
- multi-reviewer collaboration and realtime synchronization;
- deeper reference-management and Zotero continuity, up to a complete
  Scient-owned replacement experience;
- reusable personal/team libraries and project working sets, with independent
  ownership, sharing, preservation and version semantics;
- public plugins and extension distribution through their owning program; and
- native Scient-agent implementation through its owning program.

These capabilities are not rejected. Library ownership and preservation have
the accepted direction recorded above; their delivery mechanics still need
proof. Other capabilities' exact product shape, architecture,
dependencies, and order remain unapproved until their focused decisions are
made. The list is also not intended to limit Scient's longer-term ambition.

Two current architecture boundaries are different from future feature scope:

- do not hide formal screening or extraction inside permanent generic
  Annotation payloads; and
- do not create a Sources-specific provider or tool-authority path instead of
  the common Scient operation foundation.

## Program Review Questions

1. Is the two-lane structure preferable to one serial chain of metadata,
   architecture, and workspace pull requests?
2. Are the Phase Zero stop gates strong enough to prevent a misleading anchor
   implementation?
3. Should the trust slice permit bounded questions over the selected Region or
   Source, or should that interaction wait until after manual evidence
   continuity is proven?
4. Is the first portable output correctly limited to a compact evidence package
   rather than a full interchange format?
5. Is it correct to prove Region-attached annotations before selecting a
   downstream evidence target and relationship model?
6. Which library organization and navigation problems should be explored now,
   while keeping categories, collections, tags, hierarchy, and views
   unapproved?
7. Are any Lane B changes incorrectly treated as independent from the evidence
   model?
8. Is the full workspace implemented at the right point while still being
   designed during Phase Zero?
9. Are formal screening and extraction correctly preserved as distinct future
   records rather than phase-one schemas?
10. Does the repository and documentation ownership prevent duplicate truth and
   unnecessary T3 conflict?

## Readiness To Begin Implementation

Already-authorized local reliability work may continue under the ownership gate.
Entry into isolated Phase 2 experiments requires owner review of ADR-0010 and
agreement on the proof scope; it does not authorize a durable production store
or user-data migration. Entry into Phase 3 durable implementation requires:

- the owner has accepted the applicable ADR-0010 contract and explicit
  authority amendments, and those amendments are recorded in their owners;
- the applicable Phase 2 authority, retention, stable-ID migration,
  compatibility and recovery proofs pass, with fidelity limits recorded and
  any unsupported path explicitly withheld rather than claimed working;
- the dependency status of ADR-0006, ADR-0007, and ADR-0008 is explicit;
- an isolated current-main desktop candidate is selected;
- current main and the preserved local candidate are rechecked, rather than
  treating the historical PR #213 baseline as current qualification;
- the PDF fixture set and anchor spike acceptance criteria are approved; and
- current Phase 2 proofs are divided into independently reviewable,
  non-overlapping work packages.

Documentation approval alone does not prove the architecture implemented.
