# ADR-0010: Research Library, Project Use, And Annotation Ownership

Status: Proposed
Owner: Yaacov
Created: 2026-09-08
Last updated: 2026-09-09
Purpose: Defines the reviewable Phase 1 ownership, preservation, and authority contract for reusable research libraries, independent annotations, and project-owned uses.
Doc type: Architecture decision

## Decision And Acceptance Boundary

**Collect once; reuse deliberately; preserve what the project used.** A library
supports research across projects. Project Sources are a project's working
reference set, not its only annotatable files and not a live window into
someone's private library.

The owner accepted five directions on 2026-09-08. Product outcomes are recorded in the
[PRD](../../product/PRD.md#research-library-and-project-preservation): reusable
personal/team libraries; independent project preservation where permitted;
creation-context annotation ownership; independent annotation identities and
persistence outside Source payloads; and a carefully phased broader foundation.
Those choices are not being reopened here. **Accepted architecture constraint:**
annotations have independent stable identities/lifecycles and persistence
outside Source payloads. This sentence preserves the owner's explicit decision
in its architecture home; the PRD now expresses the user-visible independence.
It selects neither a database nor a directory layout.

**This detailed contract remains Proposed.** Phase 1 produces a reviewed
proposal, not deployed authority, a selected storage engine, or permission to
migrate user data. In particular, the explicit extension of accepted ADR-0004
below requires owner review. It does not blanket-accept ADR-0006 through
ADR-0009, their namespaces, or their interface proposals.

This ADR owns cross-library/project ownership and lifecycle semantics.
[ADR-0009](ADR-0009-evidence-continuity-and-durable-support.md) continues to own
capture, anchors, evidence interpretation and review;
[the file/resource foundation](../../planning/file-resource-and-presentation-foundation.md)
owns file resolution and presentations. The
[implementation plan](../../planning/sources-and-evidence-implementation-plan.md#current-six-phase-delivery-sequence)
owns sequencing and qualification.

## Evidence And Existing Foundations

Inspected desktop main and remote main were both `4d4d53d80595` on 2026-09-08.
The local Sources candidate is checkpoint `200373d70e2d` plus uncommitted work;
its saved-passage format is experimental, not a released general annotation
contract. The planning baseline before the local package was `84401ed99502`;
the predecessor plan is preserved in a [historical record](../../planning/sources-and-evidence-plan-history-2026-09-08.md)
independent of local commit retention. Refreshed planning main on that date was
`1e974e79ec21`. At that inspection, its PRD and existing ADR-0004/0006 baseline
were unchanged relative to the pre-package HEAD. These are dated observations;
refresh main before implementation. This proposal does not merge either worktree.

Reuse these inspected foundations rather than start another Sources system:

| Existing owner | Reuse | Gap this proposal must not describe as already solved |
| --- | --- | --- |
| [Sources model](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/packages/scient-sources/src/model.ts) | Project and Source IDs, typed metadata, stable PDF attachment IDs, hashes, revisions, actor categories and import receipts | No personal/team library authority or independent annotation store |
| [Sources store](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/packages/scient-sources/src/store.ts) | Root resolution, immutable PDF bytes, history, staged intake and revision checks | Deletion considers live Sources in one root, not every retained annotation/project dependency |
| [Scoped Sources MCP](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/apps/server/src/mcp/toolkits/sources/handlers.ts) | Server-resolved thread/worktree context and bounded tools | Existing HTTP/MCP adapters do not establish the complete shared commit-time authority contract |
| Local passage candidate | Capture profiles, geometry, exact-material checks, tombstones and QA cases | Embedded passages and whole-record projections cannot become mixed-audience annotation storage |

Official comparators inform, but do not dictate, the design: Zotero separates
personal and group libraries and makes cross-library copies independent
([groups](https://www.zotero.org/support/groups)); its
[sync protocol](https://www.zotero.org/support/dev/web_api/v3/syncing) illustrates
version preconditions and conflict reconciliation. W3C
[Web Annotation](https://www.w3.org/TR/annotation-model/) separates annotation,
body and target. None selects Scient's storage, collaboration or authorization
implementation. Existing Zotero integration remains an adapter, not Scient's
identity or permission authority.

## Proposed Contract

### 1. Minimum Identity And Ownership Vocabulary

These are semantic boundaries, not instructions to create one table or service
per row. Add representations only where a real lifecycle needs them.

| Concept | Identity and owner | What it must not imply |
| --- | --- | --- |
| Library | Stable library ID; personal or team ownership with separately resolved membership | A project UUID, global public collection, or automatic agent grant |
| Library reference | Stable ID within its library, versioned metadata and material associations | One universal editable record for every copy of a bibliographic work |
| Project reference | Project-owned working-set entry; preserve the existing Source ID | Automatic access to the originating library or its private annotations |
| Resource and revision | Stable authorized resource identity plus exact revision/content identity; existing material IDs where applicable | A path or matching SHA-256 proves ownership or continuity by itself |
| Annotation | Stable independent ID, owner scope, revisioned body, exact target and provenance | The target's owner owns every note about it, or notes live inside a Source payload |
| Region / target locator | The bounded passage/page area within an exact resource revision described by ADR-0009 | A new ownership scope, annotation ID, or different concept from the reader's passage/region |
| Pinned project use | Project-owned immutable selection of the revisions and dependencies actually used | Merely adding a reference constitutes scientific acceptance |
| Processing result | Identified output tied to exact input, engine/profile, options, coverage and provenance | Extracted text is the original, or every derivative may be discarded |

A DOI, title, external item key, or hash is correspondence evidence at a
particular level. Work, edition, PDF rendition, library holding and project use
can differ. Do not automatically merge their ownership, annotations or review
states. Correspondence can be recorded without rewriting existing IDs.

### 2. Files Can Be Read And Annotated Without Becoming Sources

Source is a reference role, not a file format. A PDF, draft, image or supported
document may be annotated in its current authorized context before anyone
registers it as a Source. Source registration adds a role/association; it does
not recreate the resource, change annotation IDs, or transfer private content.

Compose the proposed FileReference/resolver boundary with existing Source
material identities. A stored target records the exact revision and locator;
a live path is only a way to resolve that resource today. Recognized relocation
may update resolution, not historical targets. Ambiguous clones or identical
bytes require explicit correspondence rather than silent identity unification.

Creating a durable annotation also establishes responsibility for its permitted
target dependencies. For an ordinary mutable file, retain the captured revision
where authorized, or explicitly record that historical reopening is unavailable.
Do not promise durable visual return from a path and hash alone.

Page/region marks need geometry and exact material, not OCR. Native text is used
when trustworthy; text, location and reading-order confidence remain distinct.
OCR is an optional processing adapter, not the universal annotation substrate.
The shared processing contract must also support reading, extraction and agents,
not only annotation. Native-text/geometry qualification accompanies Phase 2
implementation; a new OCR engine or wider format has its own later gate.

### 3. Annotation Ownership Follows The Selected Creation Context

Personal-library annotations are personal and private. Project-created
annotations belong to that project and its authorized audience. Team-library
annotations follow that library's explicit membership policy. Authorship,
ownership, audience, target identity and scientific acceptance are separate.

Bind context when capture begins. Navigation or an agent's subsequent root
argument cannot silently move a pending note into another audience. If authority
changes before save, keep a recoverable draft only within its permitted
retention boundary; recovery must recheck access. Do not copy quoted project
content into a personal draft as a fallback after revocation. The interface
should make the destination understandable without
asking routine users to operate a permission matrix for every highlight.

Sharing a reference does not share annotations. Explicitly contributing a
selected personal annotation publishes an attributed, destination-owned copy of
that revision. It gets its own ID and origin correspondence. Later personal
edits stay private; project edits affect the project copy. An offered update is
a new operation, not automatic propagation. The selected contribution does not
include private revision history, unrelated notes, or private search context.
An update to a contributed annotation or an already-present project reference
requires destination mutation authority and an expected destination revision.
If both sides changed, expose a conflict; do not overwrite project edits or
silently create another active copy. Applying an update creates an explicit
successor, while existing pinned uses retain their prior revisions.

Capture/proposal and acceptance of an annotation revision are distinct internal
operations in its owning scope, including personal/team libraries. A deliberate
manual save may perform both with attributable receipts; it need not show a
second confirmation. Agent proposals require the applicable reviewed acceptance
path and cannot self-assert researcher approval. Acceptance here means the owner
has saved that annotation, not that its scientific interpretation is true.

Scientific acceptance of a use is a separate project action; import, contribution
and saving a note do not confer it. This extends ADR-0004/0009's review distinction
to library owners without making every ordinary highlight formal evidence.
Pinning dependencies is internal bookkeeping, not an extra user task.

### 4. Project Membership And Preserved Use Have Different Lifecycles

Adding a reference establishes project membership and material availability.
Using particular material in a retained annotation or scientific output creates
a pinned dependency set. Retain only the necessary, authorized dependencies:
reference metadata revision, exact material, target locator, selected annotation
body revision, and any processing output relied on, with provenance.

The project is responsible for retaining its permitted copies independently of
the personal/team library. Storage may eventually deduplicate bytes, but each
owner's retention obligations remain independent. Do not implement shared
physical garbage collection before it can honor every retention reference.

New metadata, editions, extraction results or annotation revisions can be
offered as updates. Reviewed uses do not silently move. Acceptance of a new
version creates a new use with explicit succession; the previous use remains
inspectable under retention policy.

Handoff must say whether each required dependency is retained, missing,
restricted, or unsupported. These are availability outcomes, not scientific
quality scores. Metadata and a hash are not a claim that full text was retained.
Restricted redistribution may permit a metadata-only entry; it must not be
presented as an independently reproducible full-material handoff.

### 5. Extend One Operation Boundary, Not A Second Tool System

**Proposed amendment to accepted ADR-0004:** extend its project-only protected
operation scope and project-only scientific annotation ownership to explicitly
resolved library scopes. All other accepted principles remain: typed operations,
authenticated actors, capabilities, intent, authority generations, idempotency,
commit-time fencing and receipts. Do not silently change the accepted ADR before
this extension is reviewed.

The minimal domain scope is a discriminated project or library scope:

- **Project:** the portable project identity, when initialized, plus the exact
  environment/workspace binding and authority generation proposed by ADR-0007.
  Same-project worktrees remain separately authorized physical targets.
- **Library:** library identity plus a server-resolved authority binding,
  authenticated owner/member and policy generation. A library ID is not a grant.
  The binding resolves the actual local/remote authority; no invented project or
  caller-supplied filesystem root stands in for a library.

#### Local Personal-Library Authority

The first implementation needs no Scient network account. Use a durable
Scient-owned local-profile principal and library ID, bound server-side to the
OS-user-owned configured state directory and current policy generation. A
candidate canonical location is `stateDir/scient/libraries/<libraryId>`; record
the final layout, private filesystem permissions and backup/export obligations
with the code. This is durable Scient data, not a cache or T3 session table.

The inspected configuration distinguishes development and production state
directories, with explicit launch overrides. Fixing the location must therefore
include documented and tested profile isolation, backup/restore and
uninstall/data-removal semantics. Do not silently share a production library
with a development build or infer library deletion policy from the lifetime of
T3's sibling session database. The exact platform location remains a candidate
until that implementation review.

Authenticate the owner-facing request through the existing local desktop session,
then resolve its local-profile principal. The current `desktop-bootstrap`
subject is an authentication channel, not a durable person. Neither localhost,
a caller's claimed desktop origin, nor a portable library ID establishes owner
authority. Add library-specific grants: existing environment-wide orchestration
scopes, paired clients and provider sessions confer no automatic library access.

This proposal reuses the inspected main's
[bootstrap grant](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/apps/server/src/auth/PairingGrantStore.ts),
[HTTP authentication](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/apps/server/src/auth/http.ts),
[configured state directory](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/apps/server/src/config.ts)
and [scope contracts](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/packages/contracts/src/auth.ts),
not an already implemented library principal. Profile/library restoration or
transfer requires explicit rebinding; copied identifiers are not credentials.
Multi-user identities, invitations and remote/team bindings are later gates.

Library authority must also hold across other Scient-mediated access paths,
including generic file reads, assets, search, exports and restored copies.
The inspected [workspace reader](https://github.com/ScientFactory/scient-desktop/blob/4d4d53d80595de0f0da2308ce9b25259e094d0c8/apps/server/src/workspace/WorkspaceFileSystem.ts)
allows absolute host-file reads. A library-specific operation grant alone
therefore does not establish isolation. Before library activation, inventory
these paths and enforce the same protected-resource policy at their shared
access boundary, including canonical paths/aliases. Prove that a client lacking
library authority cannot retrieve protected records or bytes through another
Scient API; preserving legitimate authorized file workflows is also required.

The protection here is through Scient operations. Same-OS-user processes with
broad native shell/file permission may read app-data files independently; current
provider full-access modes are not a library sandbox. Do not advertise operation
filtering or private filesystem permissions as isolation from such an agent.
Provider-native authority must be disclosed/enforced by its own permission owner.

Reused metadata intake must respect disclosure as well as read authority.
DOI/PMID lookup and enrichment can reveal reading interests to external services.
Define permitted destinations and payloads under the applicable network policy;
neither opening a library nor a metadata field authorizes unrelated uploads of
notes or full text. Preserve useful offline operation and test no-egress mode.
This does not require a new confirmation dialog for every permitted lookup.

This extension does not replace other ADR-0008 environment/browser scopes.
Ordinary uninitialized folder behavior stays zero-write on open; durable
project annotations require explicit initialization or another genuinely
authorized owner, not an invisible library fallback.

Manual UI, provider tools and future plugins invoke the same operation service
under their own grants. Reuse the shared registry and adapter seams. A project
agent does not inherit its human user's entire library access. A user-facing
library picker may use user authority; the agent receives only the selected,
explicitly granted scope/content. The interim automatic built-in-tool policy
is availability, not permission to search all personal/team libraries.

Filter bodies, tombstones, historical revisions, snippets, result counts,
receipts, indexes and exported provenance at their owning scope. Do not spread
canonical mixed-audience records into tool results. Already disclosed provider
context cannot be promised erased; subsequent reads and pending effects must
respect revocation. Provider availability must still be qualified separately.

### 6. Contribution Is An Explicit Cross-Scope Operation

Distinguish a revocable view from a retained contribution. The latter permits
the destination to retain the agreed dependency set; revoking the live source
grant does not recall an already authorized retained copy. Do not label these
two promises with an ambiguous generic “share” operation.

The architectural invariants are source read/disclosure/retention authority,
destination mutation authority, immutable selected revisions and dependency
manifest, exact destination binding, commit-time fencing of every applicable
authority, one complete visible contribution plus recoverable receipt, and
currently authorized result disclosure. A private annotation's owner cannot
grant redistribution of a separately governed target material.

The local implementation mechanism lives in
[Phase 2C](../../planning/sources-and-evidence-implementation-plan.md#c-local-personal-library-and-explicit-project-contribution).
It initially supports one local source authority and destination. Unsupported
team, cross-host or mixed-authority contributions fail explicitly rather than
silently reducing the checks. This ADR does not prescribe a distributed commit
service before the local path exists.

The contribution intent is a domain identity, not a reusable permission token
or replacement for ADR-0004's generation-bound request idempotency key. An
identical request retries its original envelope; changed authority or binding
requires a newly authorized reconciliation request. It may inspect the original
intent's authorized outcome, never treat copied intent data as permission to
execute in a different scope. Changed destination or selected content is a new
intent, not reconciliation.

Destination-side deduplication includes the original contribution intent so
two source-workspace clients cannot publish the same intent twice into the
same destination authority; each request still needs valid exact bindings.
Replaying into a different destination checkout is a changed destination and
requires a new intent. A copied receipt proves neither local material presence
nor permission to inspect another checkout. No logical-project-wide deduplication
service is implied. Different deliberate contributions have distinct intents
and must not be deduplicated just because their bytes match.

Ordinary contributions authorize the project's evolving authorized membership,
not a frozen list of people. The selected disclosure/retention policy must make
that consequence clear. Restricted dependencies cannot acquire broader rights
when a collaborator joins: enforce their compatible disclosure restriction or
keep them unavailable to that recipient. If the implementation cannot enforce
that boundary, reject the incompatible contribution rather than silently widen
access. Retention permission is not unrestricted future disclosure permission.

The source-authorization fence and destination commit need an enforceable
ordering with revocation, not two unchecked preflight reads. A single local
coordinator can be proved first. Cross-host publication must wait for a proven
grant/lease or coordinated protocol with stated revocation semantics. Uncertain
external completion is reconciled, not represented as a clean failure and retried.
Phase 2 implements and fault-tests local commit/recovery before enabling that
operation. Cross-host coordination is a later delivery gate, not a prerequisite
for building or releasing correctly scoped local behavior.

### 7. Deletion, Revocation, Retention And Offline Work

| Event | Required behavior |
| --- | --- |
| Remove a reference from a collection/working set | Remove that membership; do not delete unrelated uses, annotations or library holdings |
| Delete a library reference | Tombstone that identity; independently retained authorized project uses survive |
| Edit or replace material | Create an explicit revision/correspondence; retained annotations keep their original targets |
| Delete an annotation | Active lists omit it; authorized historical pinned uses may retain and display the selected revision; disclose that consequence before deletion |
| Revoke library/team membership | Fence pending effects and new reads; retained authorized contributions follow their agreed destination retention |
| Erasure or rights restriction | Apply reviewed redaction/purge policy to bodies, quotes, history, caches and backups; preserve only permitted minimal provenance and explicit unavailability |
| Offline stale edit after deletion/revocation | Reconcile against current authority/deletion state before publication; never resurrect the identity silently |
| Project handoff or owner leaves a team | Transfer only authorized dependencies and responsibility; do not depend on a former member's credentials/private library |

Deletion, access revocation and physical erasure are separate operations.
Erasure must also address retained annotation bodies in pinned uses and mark
affected content unavailable; ordinary deletion is not a promise of erasure.
Do not promise immediate recall of offline or exported copies. Do not retain
sensitive note bodies forever merely to satisfy a history claim. Restoration
requires a distinct authorized operation with provenance, not replay of a stale
write. Bounded tombstone compaction needs a stale-replica resynchronization rule;
its exact mechanism and limits belong to storage qualification.

### 8. Storage And Synchronization Constraints, Not A Premature Engine Choice

Preserve existing project/Source/material IDs, bytes and record history. Move
candidate passages into independent annotation persistence through a versioned,
recoverable mapping; an annotation ID can remain stable when its owner is
unchanged. Never silently label a migration as a personal-to-project transfer.

Phase 2 builds the actual persistence and operation path with regression and
fault tests alongside it, beginning with existing bounded-record/receipt
primitives. A named unresolved mechanism may justify a targeted experiment;
there is no mandatory three-engine comparison or throwaway prototype. No universal append-only log,
CRDT, shared blob service, new global namespace, database vendor or cloud
service is selected. Project state remains portable and Scient-owned, not
canonical T3 session/application data. Libraries also remain Scient-owned but
do not pretend their lifetime is one project's `.scient/` directory.

Old writers must not delete material now retained by independent annotations.
Unknown versions, mixed-version opening, migration interruption and rollback
need a whole-owner compatibility gate, not only a decoder for the new record.
The existing format-2 candidate's older-reader failure is a test case to resolve,
not an acceptable silent loss of access to the entire library.

## Scenario Review And Delivery-Specific Qualification

These are required outcomes, not claims that the implementation exists or that
AI review proves runtime behavior. Backend, rendered-document and human checks
are assigned in the implementation plan. Do not require team infrastructure
before local implementation or use mocked team members as delivery proof.

### Before Enabling The Local Slice

| Scenario | Required outcome and owner |
| --- | --- |
| Multiple annotations on identical bytes | Independent IDs/owners; hash never collapses notes (Phase 2A) |
| Ordinary PDF later registered as a Source | Preserve resource, annotation and capture identity without a registration gate (2A) |
| Old writer after migration | No loss of retained bytes/annotations; explicit supported/refused compatibility and recoverable rollback (2A) |
| Two worktrees share UUID | Exact bindings and authority stay separate; copied receipts do not establish local presence (2A/C) |
| Native, scanned, mixed, RTL or changed PDF | Honest text fidelity and geometry, useful region fallback, no silent rebind (rendered checks in 2A) |
| Agent reads/proposes/receives rejection | Bounded authorized projection, proposal/review provenance, no private/history leak (2B) |
| Same reference in personal library and two projects | Independent notes and project uses; no unintended disclosure (2C) |
| Client lacks library grant but uses another Scient API | Protected records/material remain inaccessible through generic file, asset, search and export paths, including path aliases (2C) |
| Metadata enrichment enabled or network access denied | Only policy-permitted endpoint/payload is sent; no-egress mode makes no external request and retains local utility (2C) |
| Contributed note and project copy both edited | Expected-version conflict; explicit successor, unchanged pinned uses (2C) |
| Local grant revoked during staging or draft recovery | Commit fenced; access rechecked; no personal fallback copy of restricted draft (2A/C) |
| Crash, lost response or copied contribution intent | Complete effect and receipt or no visible publication; deterministic authorized reconciliation (2A/C) |
| Library removed; project reopened/exported offline | Authorized retained dependency closure survives; missing/restricted content explicit (2C) |
| Annotation deleted, then retained use inspected or content erased | Active deletion differs from historical retention; erasure applies to retained bodies and reports unavailability (2A/C) |
| Request needs team, mixed-authority or cross-host transfer | Unsupported operation rejected in the real local service; not simulated as a successful transfer (2C) |

### Before Enabling Networked Team Delivery

| Scenario | Required real-system proof |
| --- | --- |
| Invite collaborator after restricted contribution | Independent authenticated members; evolving membership does not widen material disclosure rights |
| Lose team membership while editing, then reconnect/restart | Current membership fences commit and recovery; no stale resurrection or unauthorized disclosure |
| Personal annotation targets team-owned material | Every dependency authority is checked and coordinated; authoring a note does not grant material rights |
| Cross-host publication interrupted or revoked | Actual endpoints, durable intent, coordination, network partition and reconciliation behavior; no half-publication or blind retry |
| Team owner leaves/transfers responsibility | Data continuity without the former owner's credentials; separately authorized ownership transfer |
| Offline deletion/replay and history compaction | Real replicas reconcile deletions/revocations; bounded history does not permit stale resurrection |

Later OCR, wider-format and cross-provider claims likewise require their
specific qualification. Geometry-only capture does not qualify OCR, and one
provider's success does not establish parity. These gates are retained work,
not prerequisites to every local annotation.

## Implementation And Documentation Boundaries

- **Keep:** existing project store, imports, stable material identities, local
  passage QA and useful user flows. Do not discard them because the final owner
  boundary is broader.
- **Build and test in Phase 2 after applicable contract review:** minimal shared scope resolver,
  independent annotation persistence, pinned dependency retention and explicit
  contribution operations. Reuse ADR-0007/0008 work when qualified; no parallel
  Sources registry. Start with project annotation, then local personal-library
  contribution; tests and visual review accompany the actual implementation.
  Phase 3 improves everyday library use rather than starting another foundation.
- **Design for now, implement later:** team membership/sync transport, ownership
  transfer UX, broad organization/navigation, bidirectional Zotero, OCR engines,
  wider formats, formal evidence workflows and plugin distribution. These remain
  roadmap directions, not rejected scope. Team semantics are required now;
  networked team delivery is not a Phase 1 implementation requirement.
- **Upstream:** resolve current T3 environment/thread/worktree seams through
  narrow Scient adapters. Snapshot attachments remain transport/context, not
  retained evidence authority. Recheck main and ongoing upstream alignment before
  code starts; do not merge unfinished upstream work into this documentation pass.
- **Docs:** accepted principles live in PRD; this Proposed ADR owns the detailed
  contract; ADR-0009 owns capture/review; the plan owns gates. Update desktop
  internals, migration docs and Help only as the matching code is implemented and
  qualified. No website or public Help claim is added in Phase 1.

## Exact Architecture Reconciliation On Acceptance

| Owner | Required amendment; what remains unchanged |
| --- | --- |
| ADR-0004 decision items 2, 4 and 10 | Admit explicitly resolved library authority and creation-context annotation ownership; distinguish contribution identity from generation-bound request idempotency and require current authority for outcome disclosure; keep operation/receipt/review safeguards |
| ADR-0006 | Preserve initial project layout as implemented baseline; do not treat it as lifetime library storage or annotation ownership |
| ADR-0007 | Reuse exact project bindings unchanged; library binding is a distinct authority, never a fabricated project |
| ADR-0008 | Extend applicable scope/policy projections with library and cross-scope operations; preserve one registry, default-deny execution and provider qualification |
| ADR-0009 | Independent annotations and resource targets apply beyond Source records; exact capture/review rules remain; new namespaces still need acceptance |
| File/resource foundation | One resolver/revision boundary; explicitly retained dependencies are not disposable presentation caches |

## Review Disposition

Phase 1 recommends accepting the applicable contract, then implementing the real
local foundation with backend fault tests and rendered/manual review alongside
it. Exact schema/layout, local commit/recovery mechanism, principal recovery,
compatibility window and retention limits are bounded engineering decisions
recorded with implementation. Team identity/sync mechanics belong to later team
delivery; they do not block local work. Only a demonstrated unresolved question
justifies a separate experiment. No product UI, live-data migration or team
service is authorized merely because this document exists.
