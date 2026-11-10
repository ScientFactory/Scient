# Sources And Evidence Implementation Plan

Status: Proposed
Owner: Yaacov
Created: 2026-08-29
Last updated: 2026-09-10
Purpose: Sequences real, incrementally tested annotation and research-library implementation, with scoped safety gates and preserved Sources research.
Doc type: Implementation candidate

## Document Rules

This is the single current delivery plan. The [PRD](../product/PRD.md) owns
accepted product requirements; [ADR-0010](../architecture/decisions/ADR-0010-research-library-project-use-and-annotation-ownership.md)
owns the proposed ownership/authority contract; [ADR-0009](../architecture/decisions/ADR-0009-evidence-continuity-and-durable-support.md)
owns capture/review; the [experience](../product/sources-and-evidence-experience.md)
owns user journeys. The [roadmap](product-roadmap.md) owns product sequencing.

The owner requested building the real foundation and reviewing it as it is
built, not a disposable prototype or a storage bakeoff before implementation.
This revision applies that direction. Detailed architecture still needs its
applicable acceptance; this documentation pass does not implement code,
authorize live-data migration, or grant publication permission.

### Update Policy

Update the phase/activation status, owning decision, or proof result when it
changes. Keep executed code evidence in desktop internals, tests and the owning
PR; do not accumulate another changelog here. Superseded planning and dated
results are routed in the appendix rather than maintained as a second sequence.

## Outcome And Dependency Order

Build one system whose annotations have independent identity and whose owners
can be projects or personal/team libraries. Implement the project path first;
then use the same foundation for local personal-library contribution. This is
the accepted broader foundation delivered incrementally, not a permanent
project-only implementation followed by an unrelated library rewrite.

Two useful outcomes can be reviewed independently:

- **Project reading:** open a Source PDF or an ordinary project PDF, save a
  passage/region and note, reopen it, inspect a bounded agent proposal, review
  it, and export the permitted evidence without depending on a chat.
- **Library reuse:** retain a reference and private notes personally, explicitly
  contribute selected material/notes into a project, and continue that project
  after the originating library is unavailable.

The first scientific-project pilot needs the first outcome, not library
navigation, accounts, team sync or a full reference manager. Its native
Scient-agent dependency remains owned by its separate plan. Qualified external
providers may verify this Sources increment without claiming the native-agent
pilot complete. Library reuse can follow or proceed in parallel once its shared
record/authority prerequisites are stable.

## Current Six-Phase Delivery Sequence

These are implementation increments and expansion areas, not a waterfall that
withholds useful work until every future capability exists.

| Phase | What is built/reviewed | Exit or activation boundary |
| --- | --- | --- |
| **1. Ownership and authority** | Accepted directions recorded; proposed shared contract and dependent docs reconciled | Reviewable package exists; the [earlier checkpoint](sources-and-evidence-plan-history-2026-09-08.md) is preserved as history. Current refinements remain Proposed, not blanket architecture acceptance |
| **2. Build and review the real local foundation** | Independent annotations, exact project resources, real persistence/recovery, reader integration and bounded proposal review; then the thin personal-library/contribution path | Actual backend/integration tests and rendered/manual review for each enabled slice; project-only path can qualify before local library reuse |
| **3. Complete everyday library use** | Refine the working library/project surfaces, intake, reference/material handling and navigation based on real use | Review specific UX and organization choices before adding them; no new ownership engine |
| **4. Deeper reading and agent work** | Broader proposal/review, comparison and concrete evidence reuse workflows | Initial capture and bounded proposal review belong to Phase 2; expansion is not a prerequisite for the first pilot |
| **5. Processing, collaboration and advanced workflows** | Qualified OCR/formats, retrieval, team sync, richer reference continuity and formal evidence in separately scoped increments | Each capability passes its own gates; local tests do not qualify networked teamwork |
| **6. Release qualification, repeated per increment** | Fresh-main alignment, migration rehearsal, required checks, human UI review and accurate Help | Applies whenever a slice is proposed for release, not only after Phases 3–5; separate approval to publish |

Backend tests are part of implementation, not a separate product. Start with
the smallest maintainable storage/operation design that satisfies the contract.
Run an isolated experiment only for a named unresolved question whose answer
changes an implementation decision; time-box it and feed the result back into
the real code and tests. Do not build three competing stores by default.

## Disposition Of The Existing Passage Candidate

The inspected local candidate remains at desktop checkpoint `200373d70e2d`
plus local changes, based on main `4d4d53d80595`. Refresh its status before
implementation. The planning checkpoint does not commit or qualify that code.

- Preserve its reader adapters, geometry/capture profiles, note UI, material
  checks, lifecycle fixes and regression fixtures. Inventory and checkpoint
  the candidate-owned pending work locally before refactoring, under the next
  authorized code task; exclude private QA material and unrelated changes.
- **The embedded saved-passage Source format 2 is not the release target and
  must not ship as this program's annotation storage.** Stop adding features to
  that representation; migrate its useful behavior onto independent records.
- Key annotations by stable annotation ID. A material hash identifies bytes,
  not the annotation: many notes can target the same material, with different
  owners and lifecycles. Preserve existing passage IDs where unambiguous;
  otherwise preserve an explicit old-to-new mapping and provenance.
- Preserve source-level notes as source-level notes; do not silently turn them
  into anchored annotations. Preserve original quotes, UTF-16/profile semantics,
  deletion history, exact material IDs and capture provenance.
- Test both current format-1 Sources and experimental format-2 fixtures.
  Format 2's unknown-version rejection can make an older build fail to load
  the entire library; this is a compatibility failure, not a design merit.
- Convert through a recoverable migration, not deletion of the candidate or
  resetting QA projects. Commit useful code before changing its persistence;
  do not merge experimental persistence merely under an “evidence” label.

No desktop files, branches, projects or runtimes are changed by this plan update.

## Phase 2: Real Implementation In Reviewable Slices

### Entry, Ownership And Reuse

Refresh main and inspect the ongoing agent-foundation/upstream work before
choosing the code worktree. Record which scope/operation seams are merged,
in flight or missing. Reuse the shared Scient operation service and exact
workspace resolver; if a required primitive is absent, implement that bounded
dependency in its owning module or coordinate its intake. Do not wait for the
entire settings/plugin program, wire unfinished authority into production,
or create a Sources-only registry.

Record acceptance of the applicable ADR-0006/0009 namespace/annotation choices
before activating their durable format. Record ADR-0010's library extension
to ADR-0004 before enabling library operations. Project-only work need not wait
for unrelated team contracts or every part of ADR-0008's future settings page.
Architecture acceptance authorizes the design, not a claim that its code passed.

Review the durable namespace, format/versioning, ownership and migration contract
with the first implementation diff. Record applicable acceptance in ADR-0006/0009
or their linked owning contract before enabling the new format in user projects.
Amend an ADR when those architectural commitments change, not for every internal
layout detail. Isolated implementation and fixture tests may proceed alongside
this review; they do not authorize writes to live user projects.

Develop against isolated synthetic/licensed test data, then authorized copies
of realistic projects. No migration of the user's live data or private uploads.
Separate desktop and planning repositories; retain narrow T3 adapters.

### A. Independent Records And The Project Reading Path

Implement production-path domain operations and persistence with tests in the
same changes, then connect the existing reader as soon as the minimal save/read
path works.

- Keep annotation ID, owner scope, expected revision, target resource/revision,
  selector, body, authorship and review/provenance explicit. Store annotations
  outside Source payloads as already decided. The same contracts admit a later
  library owner; no fake project for a library.
- Prefer extending existing bounded, versioned records and operation/receipt
  helpers. Implement the minimum journal/transaction/recovery boundary needed
  for complete visible effects. The exact layout is recorded with the first
  code diff; do not turn JSON sidecars into a substitute for commit correctness.
  A different engine needs a demonstrated requirement, not a mandatory bakeoff.
- Add the minimum common resource adapter for Source materials and ordinary
  project PDFs. Stable attachment IDs remain valid. Do not replace every file
  API or require the whole document-platform roadmap before useful annotation.
- Retain the exact permitted target revision needed by a durable annotation.
  New retention must survive deletion by old Source writers; a new decoder or
  manifest ignored by old binaries is not protection. Prove old-writer behavior
  using the old implementation. Use independently retained bytes or another
  demonstrated protection before enabling mutation on migrated projects.
  Budget and measure any extra retained storage during that compatibility
  window. This is not one PDF copy per annotation: deduplicate within a protected
  retention owner when safe, without depending on legacy cleanup to honor new
  references.
- Preserve exact-root/worktree authority, current grants/generations, expected
  revisions, durable recovery and bounded history. Actor category alone is not
  authenticated actor identity. Strictly scope read projections and receipts.
- Bring over save/note/reopen/return/copy/delete and recovery interactions.
  Support geometry-only capture when text is unusable; raw extraction and user
  correction have different provenance. Source registration is optional.
  Moving/registering a resource does not recreate or re-own annotations.

**Reviewable result:** a project can keep and reopen useful annotations through
the real backend and reader, including a PDF never registered as a Source.
No personal library UI or network account is required to test this result.

**Local implementation status (2026-09-10):** the desktop candidate now contains
the independent record/store, exact-root/session-bound host operations, protected
material retention and explicit legacy import, plus one shared project-PDF and
Source-PDF reader with autosave, area capture and reversible removal. Its concrete
layout and qualification evidence live in desktop
`docs/internals/scient-document-annotations.md`, not a second plan here.
Actual old-writer deletion and backend/interaction proofs have run. This is not
Phase 2A acceptance: user visual review, realistic storage/restart qualification,
explicit move/Source-registration handoff integration and orphaned-resource
navigation remain gates. No live project migration, ADR acceptance, new provider
write qualification, Phase 2B/2C completion or publication is implied.

### B. Bounded Agent Proposal And Review

Reuse the same operations for manual and agent work. Expose bounded reads and
one Region-attached note/interpretation proposal, with exact context receipts.
Manual save may pair capture and acceptance internally; an agent proposal
cannot claim human acceptance. Show inspect/edit/accept/reject and preserve
the outcome through restart.

This is the minimum evidence-linked note for the first scientific-project
pilot; it does not select a generic ProjectTarget or downstream relation schema.
Agents may initiate bounded authorized reading, not only read passages a human
already selected. Distinguish metadata-only, partial and full inspection.

Test the operation service without a provider first, then the real projections
being enabled. One provider can qualify an explicitly limited local preview;
cross-provider support requires two qualified providers and an explicit
unsupported-provider case. Do not call mocked delivery provider qualification.
The native Scient-agent program remains independent.

### C. Local Personal Library And Explicit Project Contribution

Implement the minimal local library owner described by ADR-0010, using the
same domain/service contracts. This is one OS-user-owned local profile, not
accounts, invitations or remote membership. Keep library storage outside
project roots and outside disposable caches/T3 session data. Record its exact
platform location, access controls, backup and identity binding in desktop
internals with the code.

Document and test development/production profile isolation, explicit state-path
overrides, backup/restore, and uninstall/data-removal behavior when fixing that
location. A development build must not silently open or migrate the production
library. Sharing an app-data parent with T3 does not make its session database
the library's owner or make library records disposable.

Before enabling the library, cover alternate Scient access paths—not only new
library operations. Inventory file/asset/search/export ingress and enforce
protected-resource authority through the shared access boundary, including
absolute paths and aliases. Test real requests from clients without library
grants and regression-test legitimate authorized file use. Broad provider-native
shell access is a separate disclosed boundary, not an excuse for a Scient API
bypass.

Reuse reference/material intake and a minimal library/project selector. A
researcher can save a private note, choose what accompanies “use in project,”
and reopen the project without the library. Normal operations should not
present raw scope IDs or a permission matrix. Defer taxonomy/hierarchy until
its focused UX decision; do not build another reference manager.

Apply the relevant disclosure/network policy to DOI/PMID lookup and metadata
enrichment. Specify permitted endpoints and outbound fields; do not send private
notes or document contents merely because a reference needs metadata. Test
permitted-payload requests and offline/no-egress behavior while preserving
local intake. Reuse the existing network-policy owner where available rather
than creating a Sources-only consent system.

Implement the local contribution mechanism in the real service:

1. Resolve the source, all retained dependencies and exact destination binding.
   Authorize read plus permitted disclosure/retention and destination mutation.
   The first slice supports one local source authority and one local destination;
   reject unsupported mixed-authority, team or cross-host transfers explicitly.
2. Freeze selected reference/material/annotation revisions, permitted dependency
   manifest and destination in an immutable contribution intent. Bind each
   execution to current grants/generations. Changed content/destination is a
   new intent; copied IDs confer no authority.
3. Stage privately. Coordinate grant revocation and publication within the
   local authority service; a preflight permission check is insufficient.
   Publish a complete destination state and receipt under a recoverable commit
   boundary. Readers must not see a half-published reference/annotation pair.
4. Reconcile crashes/lost responses by durable intent/result. Request
   idempotency stays generation-bound; result disclosure still needs current
   authority. Do not replay into another destination checkout using a copied
   receipt. Cleanup affects owned staging only.

No distributed transaction/lease service is required for this local path.
Networked contributions remain disabled until their separate coordination and
revocation protocol exists and is tested with real endpoints.

**Reviewable result:** collect personally, contribute deliberately, keep other
notes private, change/remove the library, and reopen/export the independent
project copy with honest unavailable/restricted states. A/B can be reviewed
while C is built; C cannot be claimed finished from backend records alone.

## Verification And Activation Gates

These tests exercise the implementation being built. Failure blocks the
affected operation or slice, not every unrelated future feature.

| Gate | Required actual evidence | What it does not prove |
| --- | --- | --- |
| Project backend (A) | Stable-ID migration; multiple annotations on one hash; create/edit/conflict/no-op retry; material retain/delete; capture/acceptance receipts; old-writer protection; crash/restart/rollback; exact worktree/clone/relocation fencing | Correct visual selection or library sharing |
| Reader (A) | Rendered selection/highlight alignment, partial-word, duplicate text, multi-column, tables/figures, long PDFs, RTL, zoom/rotation, keyboard/accessibility, draft close/recovery and honest region fallback | OCR accuracy or every PDF ever produced |
| Agent path (B) | Real scoped operations/projections, selected context, no private/history leakage, stale/expired grants and approval replay, proposal/review/restart; provider qualification for the claimed support | Native-agent completion, unsupported providers, blanket cross-provider parity |
| Local contribution (C) | Private vs project notes in two projects; explicit revision copies; destination-edit conflicts; local grant revoked during staging; crash before/after publication and lost response; copied-worktree intents; library-independent offline handoff | Team membership, remote revocation or sync |
| Library access and egress (C) | Requests through library and generic file/asset/search/export APIs obey the same authority, including aliases; permitted metadata payloads/endpoints and zero requests in no-egress mode; authorized file-workflow regressions | Isolation from separately authorized native shell access |
| Local lifecycle (A/C) | Delete annotation vs retained historical use; applicable erasure; unavailable material; bounded tombstones/history; stale replay cannot resurrect; draft recovery rechecks access; canonical meaning survives index rebuild | Recall of offline/exported copies or indefinite retention |
| Networked teams (later) | Real independent principals and endpoints; invite/role change, restricted-audience expansion, ownership transfer, revocation races, offline replay, membership loss and recovery, cross-host partial failures | Satisfied by fake members or changing a local generation counter |
| Processing/format expansion (later) | Licensed representative corpus, engine/profile/language provenance, fidelity/coverage/geometry, failures, cancellation, resource limits and runtime qualification | Satisfied by native text extraction tests or geometry-only marks |

Use deterministic tests and process-level fault injection for local commit,
restart and migration behavior; mocks are useful unit tests but cannot replace
actual filesystem/recovery or endpoint tests. Record exact candidate, fixtures,
platform, provider and outcomes. Backend tests can cover data/privacy/lifecycle;
rendered automation and human inspection cover geometry and usability.

The native-document corpus includes single/multi-column, repeated quotes,
partial words, tables/figures, scanned and mixed pages, OCR-derived input, RTL,
material revisions and changed pagination. Native versus corrected text,
location versus reading-order fidelity, and unavailable text remain separate.
A scanned fixture must exercise a useful mark/fallback; it does not require
shipping OCR. New OCR engines wait for their own measured need and qualification.

### Migration And Safe Release

Test format-1 and experimental format-2 migration in disposable fixtures before
authorized project copies. Preserve IDs, Source-level notes, original bytes,
history, receipts, accepted revisions and used processing results. Quarantine
damaged/unclassifiable records without attaching them to the current project.
Migrations are versioned, repeatable, crash-recoverable and observable.

Define the compatibility window and bounded retention policy with the code.
Rollback must retain newer data, restore a verified snapshot where appropriate,
or refuse safely; do not promise every old app can edit new state. Do not solve
compatibility by making the whole library fail to load silently. Restored/cloned
portable records require a newly verified local binding, not inherited authority.

Each deployable slice needs focused tests, applicable repo checks, code/quality
review, human UI review and current-main integration review. Keep failing or
unqualified capabilities disabled. Update internals and candidate-qualified Help
with actual limits. Publishing, live-data migration and release remain separate
authority decisions, not automatic consequences of completing Phase 2.

## Later Work: Retained Directions And Their Triggers

Phase 3 improves the real library path instead of rebuilding its foundation.
Phase 4 expands reading and evidence use; Phase 5 contains separately deliverable
processing, collaboration and scientific workflows. These directions remain
intended, not rejected because they are outside the first increment.

| Area | Retained work and entry criterion |
| --- | --- |
| Library utility | Metadata repair/duplicate review, exact DOI/PMID intake, stable Zotero server/library/item/version provenance, offline enrichment, RIS/BibTeX import/export with loss reporting, multiple-material/version health |
| Organization/navigation | Researcher groupings, tags, saved/dynamic views and attention queues remain alternatives; review realistic small/large library UX before choosing vocabulary, hierarchy, cross-library meaning or agent operations |
| Retrieval | Metadata/notes/quotes/region search, multilingual/RTL, incremental updates, deterministic rebuild, bounded disk and hundreds/thousands scale; evaluate FTS5/other indexes against needs; vectors are not canonical truth |
| Sources and Evidence workspace | Detail, comparison, review queues, missing/ambiguous/stale diagnostics and backlinks when these materially improve on reader/panel; graph views are optional derived presentations, not the starting UI |
| Downstream evidence use | Choose one stable target with its owner—note, claim, result, extraction value, citation, figure/table or document passage; define identity/version, review, staleness and correction before choosing shared vs target-owned links |
| Formal scientific work | Preserve distinct Study/report, SearchRun, ScreeningDecision, ExtractionSchema/Value, appraisal, conflict/adjudication and accounting/export contracts; explicit formal mode must not degrade ordinary research |
| Grounded synthesis/writing | Selected-source comparison, cited answers, gap/conflict/unsupported diagnostics, saving reviewed work, evidence-aware drafting, citation intent and manuscript evidence rails; measure support correctness, coverage, abstention, misses, cost and latency |
| Wider library and processing | Deeper reference management up to a Scient-owned replacement experience, two-way Zotero when reviewed, shared OCR/layout, HTML/EPUB/images/audio/video and other adapters; no engine or connector adoption by prose |
| Team, mobile and extensions | Personal/team ownership, asynchronous and real-time collaboration, sync/ownership transfer, mobile continuation, plugins and the native Scient agent through their own qualification/authority programs |

Organization is not screening status; a display preference does not rebind used
material; formal scientific records must not become permanent untyped annotation
payloads. No generic ProjectTarget, Claim-by-text-hash or universal evidence graph
is selected. Useful additive metadata/workflow work may proceed alongside A–C
when it preserves these boundaries and does not compete for the same files.

## Repository, Upstream And Documentation Handoff

- **Scient:** accepted product direction, proposed/accepted ADRs, this plan and
  source-backed research. Update existing owners rather than one file per PR.
- **scient-desktop:** real code, tests, migrations, current internals/capability
  records and Help. Reuse Scient-owned domain packages and T3 host/project/
  thread/worktree/reader mounts; protect necessary seams in UPSTREAM/divergence
  docs. Snapshots/chat attachments are context transport, not durable evidence.
- **Website:** publish the reviewed Help corpus/version; no second prose owner.
- **scient-agent:** no inspection or changes in this program; native runtime
  remains under its separate plan.

Before coding, refresh main and scope work, but do not ingest an unfinished
upstream merge. Record actual overlaps and boundaries; disjoint changed paths
alone do not prove integration readiness. Retire a Scient divergence when T3
provides an equivalent or stronger boundary, not merely the same UI feature.

The earlier local checkpoint also contains agent-foundation refinements; its
Sources plan is preserved in the [historical record](sources-and-evidence-plan-history-2026-09-08.md).
Before a PR, review separation into focused commits/PRs against fresh main:
agent-foundation refresh versus Sources/annotation ownership. Do not rewrite
that checkpoint or split branches during this documentation-only pass. Any
dependent repository PRs need explicit landing order and documentation impact.
No commit/push/merge is implied by this update request.

## Appendix: Prior Evidence And Review Disposition

This appendix is historical context, not another numbered implementation plan.
The predecessor body is retained in the [dated historical record](sources-and-evidence-plan-history-2026-09-08.md),
so access does not depend on a local commit surviving the eventual merge method.
Repeated proposals are consolidated above and superseded numbering is retired,
not silently treated as current. The old Program Review Questions are no longer
an active checklist: obsolete sequencing questions are retired; bounded proposal,
export, formal-record and repository-boundary questions are addressed here and
in ADR-0009/0010. Still-open organization, workspace and downstream-link choices
remain in the later-work table and product experience. Their underlying product
ambitions are not retired.

| Earlier work | Evidence retained / current home |
| --- | --- |
| Original agent Phase Zero | `8491b9a0c3bb`; [scope/tool report](../research/spike-reports/scient-agent-tools-and-project-scope-phase-zero-2026-08-29.md); ADR-0007/0008 retain their own acceptance |
| Material selection and transient workflow lanes | Merged [desktop PR #213](https://github.com/ScientFactory/scient-desktop/pull/213), `16266e27782c`; stable attachment IDs, no `attachments[0]` meaning, durable server operations remain authoritative |
| Early anchoring harness | [Anchoring report](../research/spike-reports/scient-pdf-anchoring-phase-zero-2026-08-30.md): 14 synthetic cases, 8 exact/3 relocated/1 ambiguous/2 orphaned; not representative production qualification |
| Reader/extractor follow-up | Same report: 7 PDFs/11 pages, PDF.js 6.2.108 vs 5.4.624 and local reader work; retains limits, licensing, RTL, geometry and subsequent QA evidence |
| Broader first-principles investigation | [Sources/processing research](../research/source-evaluations/sources-and-document-processing-first-principles-2026-09-08.md) and [annotations/snapshots research](../research/source-evaluations/document-annotations-and-snapshots-2026-09-08.md); dated evidence, not acceptance or current support claims |
| Legacy work-package requirements | Capture/migration/proposal/export gates now in A–C and verification; metadata, organization, retrieval, formal review and synthesis remain in the later-work table and ADR-0009; none are retired product ambitions |

At Phase 1 checkpoint, two **Codex read-only subagents**, Leibniz (authority)
and Pascal (lifecycle), reviewed and re-reviewed the proposal. They were
AI-assisted review, not human acceptance. Local metadata/link/anchor checks
passed for that checkpoint; those results do not qualify later edits or any
unimplemented runtime.

The subsequent Fable review correctly identified circular sequencing, overbroad
future-feature gates, missing candidate disposition/local authority, misleading
format-2 wording and mixed current/legacy numbering. This revision addresses
those findings. Fable clarified that material hashes were proposed for target
lookup, with independent annotation IDs; that distinction agrees with this plan,
not an alternative annotation identity model. Disjoint paths are not proof of a
clean or semantically safe merge. Accepted persistence separation is retained
in ADR-0010; the PRD expresses user-visible lifecycle independence.

**Ready-to-build means:** applicable contract accepted, bounded local scope
clear, real implementation slices identified, reusable code preserved and tests
attached to the behavior being built. It does not mean all future team/OCR
proofs ran first, nor that tests, implementation or release have already happened.
