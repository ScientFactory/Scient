# Scient Skills System

Status: Draft
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-20
Purpose: Defines the proposed product model, trust boundaries, candidate catalog, and validation order for reusable scientific skills in Scient.
Doc type: Product truth

## Document Rules

This document is the draft product home for what skills mean in Scient, how
researchers should discover and control them, how they relate to projects and
agents, and which skill families are worth considering. It separates accepted
constraints inherited from the PRD from proposed direction and uncommitted
candidate skills.

The accepted [PRD](PRD.md) governs when the documents conflict. This document
does not define runtime discovery, package formats, filesystem paths,
precedence algorithms, storage schemas, APIs, or implementation claims. Those
details belong in architecture or planning after the relevant product behavior
is accepted. Concrete build sequence, tasks, and acceptance tests belong in
planning.

### Update Policy

Update this document when a material skills-product decision is accepted or
reversed, a candidate is promoted or rejected, the foundational pack changes,
or implementation evidence changes what Scient can truthfully offer. Keep the
catalog's horizons and dependencies honest as the project-object and agent
boundaries become real.

## Status And Decision Labels

Scient's accepted PRD already requires a project-centered, researcher-owned,
traceable workspace; explicit non-destructive project initialization; bounded
agent work; visible context; reviewable proposals; permissions; provenance;
and recovery. Those accepted constraints govern the skills product.

The skills model in this document is still mostly draft product direction.
[ADR-0003](../architecture/decisions/ADR-0003-built-in-skills-portfolio-and-project-activation.md)
accepts the app-owned built-in portfolio boundary, immutable built-in release
identity, and `.scient/skills.lock.json` project activation record. The first
implementation contains only the user-visible Skill Authoring v0.1
meta-capability. It is activated at user scope, enabled by default, visible in
Settings, and automatically available to agents for matching skill-authoring
work. It does not implement a researcher-facing scientific skill,
foundational pack, Skills Library, personalization flow, project-scoped
scientific invocation, or skill invocation receipt.

The following labels apply within this document:

- **Accepted constraint** - existing accepted product direction that this
  system must preserve.
- **Accepted direction** - a skills-product decision explicitly accepted for
  implementation without promoting unrelated candidates in this draft.
- **Proposed direction** - the current recommendation, awaiting explicit
  acceptance.
- **Candidate** - worth validating or retaining in the working catalog, but not
  promised scope.
- **Deferred** - intentionally outside the early skills product.

## Product Purpose

**Proposed direction:** Scient skills are reusable, inspectable procedures that
help researchers and agents perform bounded scientific work consistently. A
skill may construct a reviewable project artifact, review existing work, or
orient a researcher to project state. It orchestrates Scient-owned operations
and permitted tools; it does not become project truth or gain authority merely
because an agent used it.

Skills should help move scientific work out of opaque chat and into the same
durable project record that researchers inspect and edit manually. They should
improve both agent-driven and researcher-driven work rather than making the
manual workspace a secondary viewer for agent output.

## Product Taxonomy

### Researcher-Facing Scientific Skills

**Proposed direction:** These are visible, inspectable procedures that create
or review scientific project work. Researchers can understand their purpose,
invoke them when relevant, inspect their requirements, and review their output.
Depending on project policy, they may also activate, deactivate, replace, or
personalize them.

Researcher-facing skills can be:

1. **Universal** - useful across multiple scientific disciplines.
2. **Domain-specific** - specialized for a discipline or research workflow
   while preserving the shared Scient project model.
3. **Project-personalized derivatives** - editable project-owned adaptations
   of a universal, domain, imported, or previously project-owned skill.

### Skill-System Meta-Capabilities

**Accepted direction:** Skill Authoring is a user-visible constructive
meta-capability for creating, revising, adapting, and reviewing candidate
skills. It is enabled by default at user scope and may be deactivated in
Settings. While enabled, agents should automatically load it when the current
work matches its trigger contract; while disabled, it is unavailable for new
work. It is not an ordinary researcher-facing scientific skill, does not
appear in project initialization, and cannot activate, publish, approve, or
validate what it produces. Its v0.1 release exists to improve real authoring
work without substituting dogfooding for scientific validation.

**Candidate:** Skill Personalization, Skill Validation, and Skill Update Review
remain later platform-assisted workflows. They should follow only after the
basic skills product is trustworthy.

### Packs And Project Profiles

**Proposed direction:** A pack is a curated collection of compatible skills. A
project profile may recommend a pack, project structure, views, or guidance.
Neither is itself an executable skill, and neither should create an
incompatible Scient project format.

**Accepted direction:** Skill packs remain a later product feature. Scient
should first make individual skills easy to install, inspect, activate,
deactivate, invoke, attribute, update, and recover. A later pack may offer one
visible activation or deactivation action for a curated collection, but the
researcher must still be able to inspect the member skills and understand the
effective activation state. Exact behavior for overlapping packs, individual
member overrides, compatibility, and pack updates remains open.

### Plugins And Extension Delivery

**Accepted direction:** A plugin is a future executable extension, not a skill
or a pack. Plugins may eventually contribute compatible tools, integrations,
views, or skills, but installing a plugin must not make its guidance, output,
or bundled skills canonical Scient project authority. Plugin execution,
isolation, permissions, packaging, installation, and lifecycle belong to a
separate future extension-product and architecture direction.

The early skills product does not depend on a general plugin platform. It
should prove first-party and imported declarative skills before executable
third-party extensions broaden the trust boundary.

## Boundary With Scient Authority And Agent Behavior

**Accepted constraint:** Skills may orchestrate permitted Scient operations,
but they do not own canonical scientific state, project-object meaning,
permissions, context receipts, proposal handling, provenance storage, or
recovery.

**Proposed direction:** Project operations, tools, skill-management
infrastructure, and user interfaces are supporting systems, not optional
skills.

**Accepted constraint:** Because the PRD makes researcher control and
scientific reliability mandatory, a project cannot deactivate dependable trust
behavior - including grounded answers, bounded and visible context, visible
uncertainty, and recovery explanations - by turning off a skill. Its detailed
product and runtime definition belongs with the Scient agent, not in this
document.

**Accepted direction:** Generic desktop or provider skill catalogs, portable
skill folders, prompt delivery, and external-agent configuration may deliver or
expose compatible skills. They do not own canonical Scient skill identity,
project activation, attribution, or scientific project effects. ADR-0003 owns
the corresponding architecture boundary.

External agents may receive compatible skill guidance, but they do not own
project skill state or scientific write-back. Their outputs enter trusted
project work only through Scient-owned operations, permissions, attribution,
review, and recovery. Projection format, eligible skills, and user experience
remain open for later architecture and planning.

## Skill Roles

**Proposed direction:** A skill should have one primary role:

- **Constructive** - proposes a new or revised project artifact, such as an
  evidence-linked note, decision rationale, synthesis, or manuscript passage.
- **Review** - evaluates existing work and returns inspectable findings or
  proposed corrections without silently applying them.
- **Orientation** - explains current project state, gaps, blockers, or open
  questions without becoming the canonical status record itself.

A larger workflow may compose several skills with operations, tools, and human
decisions. Scient should avoid giant skills such as "do the literature review,"
"analyze the data," "write the paper," or "complete the project."

## Skill Product Contract

**Proposed direction:** A candidate should not enter the maintained catalog
until its product-facing contract can state:

- name and stable identity;
- purpose and primary role;
- when it should and should not be used;
- expected project-object inputs;
- expected proposed output or review finding;
- required Scient operations, tools, and permissions;
- whether it uses the network, executes code, or writes project material;
- quality criteria, stop conditions, and known limitations;
- origin, maintainer, version, and content identity;
- activation mode and project compatibility; and
- evaluation fixtures or acceptance criteria.

Every invocation that affects meaningful project work should identify the
skill's identity, version or content digest, origin, relevant context, resulting
proposal or artifact, and researcher decision linkage. This document requires
skill-use attribution; it does not define the general provenance ledger,
storage model, event history, or recovery architecture.

## Product Principles

### Procedures Do Not Become Truth

**Accepted constraint:** Skills may analyze, draft, recommend, or propose.
Claims, evidence, decisions, accepted changes, and scientific conclusions
remain part of the Scient-owned project record and its ordinary review rules.

### Researcher Control And Manual Continuation

**Accepted constraint:** Important agent work must remain inspectable,
editable where appropriate, attributable, reviewable, and recoverable. A
researcher should be able to continue the same work manually on the same
project objects.

**Proposed direction:** Before invoking a skill, the researcher should be able
to inspect its purpose, origin, required capabilities, important limitations,
and whether it can use the network, execute code, or propose writes.

### Constructive And Review Work Belong Together

**Proposed direction:** Scient should not become only an audit system. Its
skill catalog should balance procedures that construct useful scientific work
with procedures that review support, coherence, uncertainty, and provenance.

### Small, Composable, Operation-Backed Skills

**Proposed direction:** Prefer bounded procedures with explicit inputs and
outputs. A skill should depend on real Scient operations rather than simulate
missing project objects through prose or chat state.

### Capability Safety

**Accepted constraint:** Instructions never widen authority. Runtime and
project permissions govern network access, code execution, file access,
external actions, and project changes regardless of what a skill requests.

### Reproducible Identity And No Silent Behavioral Change

**Accepted direction:** Scient-maintained built-ins have stable identity,
version, origin, and content digest. Existing projects should not silently
receive behavior-changing updates. Historical work should remain associated
with the skill identity actually used even after deactivation, replacement, or
update. The first package implements immutable release identity and exact
resolution; historical invocation attribution remains future work.

### Imported Skills Begin Untrusted

**Proposed direction:** Imported or externally discovered skills should be
inspectable before activation. Conflicts, duplicate identities, executable
content, unusual permissions, and uncertain origin should be visible rather
than resolved silently.

## Skill Lifecycle And Project Activation

**Proposed direction:** Activation is not execution. Meaningful invocation must
remain attributable, deactivation or replacement must not damage historical
attribution, and existing projects must not silently receive behavior-changing
updates.

**Candidate product shape:** Scient may distinguish:

1. **Available** - compatible and eligible for activation.
2. **Active** - selected for the project; activation alone does not execute it.
3. **Invoked** - used for a specific task with an invocation receipt.
4. **Deactivated or replaced** - unavailable for future invocation while prior
   work and provenance remain intact.

The exact names and discovery model remain open. An active skill may remain
latent until its required project objects and capabilities exist. Latent skills
are not invocable, but their activation record remains visible.

Opening an ordinary folder remains a zero-write action. Explicitly initializing
a Scient project is the first appropriate moment to offer a small visible
foundational pack.

**Current recommendation:** Show the foundational pack in the initialization
preview, selected by default, and activate it through the same explicit setup
confirmation. Let the researcher inspect the pack, remove optional entries,
or choose a minimal setup. Initialization records activation identity; it does
not execute a skill, and skills with unmet prerequisites remain latent.

Whether every foundational entry is required, recommended, or optional remains
an open product decision.

## Built-Ins, Derivatives, And Updates

**Accepted direction:** Scient-maintained built-in skills ship centrally from
the app-owned built-in portfolio rather than copying mutable bodies into every
project. A project preserves the exact built-in identity it activates in
`.scient/skills.lock.json`. ADR-0003 owns the package, digest, activation, and
delivery architecture.

Personalizing a built-in should create an editable project-owned derivative
rather than silently changing the product copy. The derivative should preserve
its parent identity and version, its own content identity, the project-specific
changes, and any changed capability requirements. The portable project
location and format remain unresolved.

When a built-in update is available, Scient should explain what changed,
whether the project has a derivative, and whether review or reapproval is
required. A later advanced flow may compare the original built-in version, the
project derivative, and the new built-in version.

## Skills Library

**Proposed direction:** Researchers should have a modest surface where they can
inspect active skills, understand origin and required capabilities, activate or
deactivate eligible skills, and see which skill produced meaningful work. Skill
recommendations should explain their relevance and must not activate silently.

The first validation needs only enough interface to inspect an active built-in,
invoke it from a bounded task, and identify the skill behind a result.

**Candidate later interface shape:** A fuller Skills Library may organize:

- active in this project;
- Scient built-ins;
- recommended for the current project or stage;
- workflow and domain packs;
- organization-provided skills and packs;
- project-created or personalized; and
- imported.

The complete library, remote catalogs, public publishing, ratings, and a
marketplace are later possibilities, not requirements for validating the first
skills.

## Candidate Universal Skill Catalog

No row below is scheduled work, roadmap scope, or an implementation promise
unless it is separately accepted and promoted into planning.

Horizons describe candidate readiness, not commitments:

- **First validation** - the first candidate end-to-end skill proof.
- **Second validation** - follows the first proof after claim objects exist.
- **Foundation candidate** - considered for a small cross-project starting pack
  after the first two validations work.
- **Setup recommendation** - offered while shaping or initializing a project,
  but not proposed as a permanently active default.
- **Later candidate** - depends on additional project objects, operations, or
  evaluation evidence and has no sequence defined here.

### Sources, Evidence, And Knowledge

| Candidate skill | Role | Horizon | Required product foundation |
|---|---|---|---|
| Evidence to Note | Constructive | First validation | Selected source evidence, note proposal, review, provenance, recovery |
| Claim-Evidence Audit | Review | Second validation | Claims, evidence links, review findings, visible uncertainty |
| Source Intake Triage | Review | Later candidate | Source identity, duplicate candidates, import receipts |
| Screening Decision | Constructive | Later candidate | Criteria, source records, attributed review decisions |
| Passage Annotation to Interpretation | Constructive | Later candidate | Source regions, annotations, linked notes or decisions |
| Claim from Evidence | Constructive | Later candidate | Evidence records, claim proposals, support relationships |
| Evidence Synthesis | Constructive | Later candidate | Multiple evidence records, synthesis notes, conflict representation |
| Evidence Conflict Review | Review | Later candidate | Evidence relationships, contradictions, uncertainty |
| Evidence Quality and Risk Appraisal | Review | Later candidate | Review schema, evidence-quality judgments, limitations |
| Unsupported-Claim Diagnostics | Review | Later candidate | Draft or note claims, evidence links, review findings |
| Citation and Locator Verification | Review | Later candidate | Canonical references, locators, citation diagnostics |
| Source Role Summary | Orientation | Later candidate | Source backlinks across project objects |
| Results-to-Claims Traceability | Review | Later candidate | Analysis results, figures, tables, claims, dependency links |

### Project Formation, Orientation, And Continuity

| Candidate skill | Role | Horizon | Required product foundation |
|---|---|---|---|
| Project Status Review | Orientation | Foundation candidate | Inspectable project objects and review state |
| Decision Rationale Capture | Constructive | Foundation candidate | Decision proposals, rationale, provenance |
| Open Questions Review | Orientation | Foundation candidate | Open-question records and project context |
| Research Question Framing | Constructive | Setup recommendation | Project direction proposal and review |
| Scope and Objective Review | Review | Later candidate | Project direction, scope, and change history |
| Hypothesis Framing | Constructive | Later candidate | Project direction and hypothesis proposals where relevant |
| Gap and Next-Step Review | Orientation | Later candidate | Project state, open questions, task proposals |
| Project Coherence Audit | Review | Later candidate | Cross-object relationships and conflict findings |
| Project Risk and Blocker Review | Orientation | Later candidate | Tasks, decisions, unresolved dependencies, review state |
| Uncertainty and Limitations Review | Review | Later candidate | Claims, evidence, methods, limitations, uncertainty |
| Project Milestone Review | Orientation | Later candidate | Project plan, stages, completed and outstanding work |
| Change-Impact Review | Review | Later candidate | Dependency links and version-aware project objects |
| Project Handoff Preparation | Constructive | Later candidate | Project status, decisions, provenance, unresolved work |

### Writing And Communication

| Candidate skill | Role | Horizon | Required product foundation |
|---|---|---|---|
| Evidence-Backed Section Draft | Constructive | Later candidate | Accepted evidence or claims, draft proposals, citation intent |
| Claim-to-Paragraph | Constructive | Later candidate | Accepted claims and support links |
| Related-Work Paragraph | Constructive | Later candidate | Source comparison, evidence, draft proposals |
| Manuscript Claim-Evidence Audit | Review | Later candidate | Draft claims, support links, section-level findings |
| Revision with Provenance | Constructive | Later candidate | Versioned drafts, linked claims, inspectable diffs |
| Figure and Table Review | Review | Later candidate | Figures, tables, underlying data or results, captions |
| Abstract-to-Manuscript Consistency | Review | Later candidate | Structured manuscript sections and claim links |
| Terminology and Definition Consistency | Review | Later candidate | Project terminology and document-wide references |
| Peer-Review Response Preparation | Constructive | Later candidate | Reviewer comments, manuscript claims, proposed revisions |

### Methods, Data, Analysis, And Artifacts

| Candidate skill | Role | Horizon | Required product foundation |
|---|---|---|---|
| Method and Assumptions Review | Review | Later candidate | Method or protocol objects, assumptions, limitations |
| Dataset Orientation | Orientation | Later candidate | Dataset records, metadata, permitted inspection |
| Analysis Plan from Question | Constructive | Later candidate | Project question, datasets, method proposals |
| Statistical Assumptions Check | Review | Later candidate | Analysis plan or run, variables, method metadata |
| Reproducibility Readiness Check | Review | Later candidate | Inputs, versions, parameters, environments, runs, outputs |
| Protocol-to-Execution Comparison | Review | Later candidate | Versioned protocol and execution records |
| Research Artifact Inventory | Orientation | Later candidate | Durable artifact identity and relationships |
| Data Dictionary Creation | Constructive | Later candidate | Dataset variables, metadata, reviewable definitions |
| Reproducible Analysis Assistance | Constructive | Later candidate | Approved execution, run receipts, parameters, outputs |
| Results-to-Figure/Table Proposal | Constructive | Later candidate | Results, visual or table specifications, artifact proposals |
| Methods Note from Run | Constructive | Later candidate | Run receipt, methods, parameters, result links |
| Stale Output Review | Review | Later candidate | Dependency graph and upstream-change detection |

### Governance, Publishing, And External Continuation

| Candidate skill | Role | Horizon | Required product foundation |
|---|---|---|---|
| Provenance Completeness Review | Review | Later candidate | Provenance model and review findings |
| Sensitive-Data and Privacy Review | Review | Later candidate | Data classification guidance and project policy |
| External-Action Readiness Review | Review | Later candidate | Export, share, deposit, or publication proposal |
| Export and Archive Readiness | Review | Later candidate | Export package, provenance, compatibility checks |
| Reporting Checklist Review | Review | Later candidate | Selected reporting profile and linked project material |

These governance skills can flag concerns or prepare a checklist. Runtime
permissions, privacy restrictions, approvals, and institutional controls remain
non-optional product enforcement.

## Candidate Packs And Domain Specialization

**Candidate:** Early specialization should follow real workflows before Scient
tries to fill a comprehensive discipline catalog. Useful pack candidates
include:

- Evidence to Writing;
- Systematic Review;
- Clinical Evidence Review;
- Computational Reproducibility;
- Experimental Methods;
- Statistical Analysis Review;
- Thesis or Dissertation;
- Manuscript Submission; and
- Peer-Review Response.

A Systematic Review pack might specialize Research Question Framing, Scope and
Objective Review, Screening Decision, evidence extraction, risk-of-bias review,
Evidence Synthesis, and Reporting Checklist Review. It would still use the same
source, evidence, claim, decision, review, provenance, and recovery foundations
as other Scient projects.

**Deferred:** Broad built-in catalogs for medicine, mathematics, biology,
chemistry, physics, data science, qualitative research, engineering,
psychology, social science, ecology, and other disciplines should be added only
when grounded in real project needs and evaluation material. Domain depth must
extend the common project model rather than fragment it.

## Project-Personalized Derivatives

**Candidate:** A researcher may eventually derive a laboratory-specific
Protocol Review, project-specific Screening Decision, journal-specific
Manuscript Consistency Review, team-specific Evidence Extraction procedure, or
organization-specific Reproducibility Review from a maintained skill.

The derivative is its own reviewable project artifact, not a hidden prompt
override. It should preserve visible lineage and must not silently weaken
permission, provenance, review, or recovery requirements.

## Candidate Validation Order

This order is a candidate product-validation dependency, not an implementation
plan or roadmap.

The active
[First Scient Vertical Slice Implementation Plan](../planning/first-scient-vertical-slice-implementation-plan.md)
continues to own the scientific workflow build. The separately authorized
ADR-0003 implementation establishes the built-in portfolio, user-scoped Skill
Authoring activation and agent delivery, and the portable project activation
record. It does not add a researcher-facing skill to that slice or change its
Evidence to Note prerequisites. Project-scoped scientific invocation still
requires reviewed planning after its product foundations exist.

### 0a - Evidence To Note Prerequisites

The first validation needs exact source evidence, evidence-linked note
proposals, bounded visible context, review and researcher decision, skill-use
attribution, reopening, and recovery.

### First Validation

Validate **Evidence to Note** end to end:

1. The researcher selects existing source evidence.
2. The skill receives a visible bounded context.
3. It proposes an editable evidence-linked note.
4. The researcher inspects, edits, accepts, or rejects the proposal.
5. The invocation identity and decision remain inspectable after reopening.
6. Deactivation affects future use without damaging historical work.

### 0b - Claim-Evidence Audit Prerequisites

The second validation additionally needs claim objects, claim-evidence
relationships, audit findings, and visible support and uncertainty states.

### Second Validation

Validate **Claim-Evidence Audit** against existing claim and evidence objects,
including partial support, contradiction, missing support, uncertainty, and
researcher-reviewed findings.

### 0c - Foundational Pack Prerequisites

The foundational shortlist additionally needs inspectable project status,
decision records, and unresolved-question records.

### Candidate Foundational Pack

The current recommended pack is:

1. Evidence to Note;
2. Claim-Evidence Audit;
3. Project Status Review;
4. Decision Rationale Capture; and
5. Open Questions Review.

This balances constructive work, scientific review, and project orientation.
Research Question Framing and Scope and Objective Review should be setup
recommendations rather than permanently active defaults.

Later expansion may include evidence synthesis, scientific writing, methods,
data, reproducibility, specialized packs, and personalization. Its sequencing
belongs in planning after the necessary product direction and project
foundations are accepted.

## Mobile Role

**Proposed direction:** The early skills product is desktop-first because the
first validation depends on source selection, detailed context inspection,
proposal review, and project recovery. A later mobile surface may support skill
inspection, lightweight invocation, status briefings, comments, approvals, and
review of bounded proposals. Full authoring, personalization, code-executing
skills, and complete desktop parity are not early mobile requirements.

## Deferred Product Areas

The following should not block the first validations:

- a public skill marketplace;
- community ratings and monetization;
- remote skill catalogs;
- a general plugin distribution and execution platform;
- private organization distribution of skills, packs, and compatible plugins;
- organization-wide extension policy or enforcement;
- automatic activation inferred from project contents;
- automatic skill generation from project history;
- cross-project skill analytics;
- real-time collaborative skill editing;
- complete domain catalogs; and
- full mobile parity.

## Open Product Questions

ADR-0003 resolves two different activation scopes. User-scoped meta-skills are
controlled in Settings and are not written into each project. Project-scoped
scientific skills are selected during explicit setup; setup records their
identities without invoking them, and no second post-setup activation action is
required.

1. Which foundational skills are required, recommended, or optional during
   project initialization?
2. Which properties must be visible before activation versus before each
   invocation?
3. What evaluation standard must a Scient-maintained built-in pass?
4. Which skill updates require explicit project reapproval?
5. How should project owners require, prohibit, or replace particular skills?
6. How should a personalized derivative receive and compare upstream updates?
7. Which compatible skills should Scient project to external agents, in what
   format, and how should the interface identify their use?
8. When does a workflow deserve a maintained pack rather than a recommendation
   list?
9. Which real project should ground the first specialized pack?
10. How should pack activation, member deactivation, overlapping packs, and
    pack updates compose without hiding the effective skill state?
11. When organization support exists, how should an organization share private
    skills, packs, and compatible plugins while preserving visible origin,
    version, capability requirements, member control, and project authority?

## Decision Register

| Direction | Status | Basis or next decision |
|---|---|---|
| Ordinary folders can open without modification; Scient project initialization is explicit and non-destructive | Accepted constraint | Accepted PRD project-entry direction |
| Skills cannot become project truth or widen authority; important work remains reviewable, attributable, and recoverable | Accepted constraint | Accepted PRD researcher-ownership, review, permission, and provenance requirements |
| Organize scientific skills as universal, domain-specific, and project-personalized | Proposed direction | Validate against real projects without fragmenting the project format |
| Keep permissions, review, provenance, recovery, and dependable trust behavior independent of optional skill state | Accepted constraint | Accepted PRD researcher-control and scientific-reliability requirements |
| Treat project operations, tools, skill-management infrastructure, and user interfaces as supporting systems rather than optional skills | Proposed direction | Preserve a clear skills-product boundary without specifying those systems here |
| Treat generic or provider skill plumbing as delivery rather than canonical Scient skill authority | Accepted direction | ADR-0003; enabled built-in delivery is implemented while invocation receipts remain open |
| Let external agents receive app-resolved compatible guidance without owning user or project skill state or scientific write-back | Accepted direction | ADR-0003; broader compatibility formats and invocation UX remain open |
| Offer a visible foundational pack during explicit project initialization | Proposed direction | Decide required versus recommended entries and presentation; setup confirmation already records the selected identities under ADR-0003 |
| Centrally maintain built-ins and preserve exact project activation identity | Accepted direction | ADR-0003; initial app-owned package and activation lock implementation |
| Ship Skill Authoring v0.1 as a user-visible, default-enabled, deactivatable meta-skill outside project initialization | Accepted direction | Automatically guide matching authoring work without treating dogfooding as scientific validation |
| Create project-owned derivatives with visible lineage | Proposed direction | Portable format and location remain open |
| Preserve attribution across activation, invocation, deactivation, replacement, and non-silent updates | Proposed direction | Exact lifecycle and storage design remain open |
| Use the four-state lifecycle vocabulary in this draft | Candidate | Validate the names and transitions after the first skills exist |
| Use the fuller Skills Library organization in this draft | Candidate | Validate only after the modest first interface works |
| Validate Evidence to Note first, then Claim-Evidence Audit after claims exist | Candidate | Promote into planning only after product review |
| Use the five-skill foundational shortlist in this draft | Candidate | Evaluate after the first two validations |
| Build workflow or domain packs only from real projects | Candidate | Select the first grounded project later |
| Build individual skill installation and control before skill packs or executable plugins | Accepted direction | Keep the first system small and prove activation, invocation, attribution, update, and recovery before broader composition or execution |
| Keep private organization distribution of skills, packs, and compatible plugins as later product scope | Accepted direction | Revisit after personal and project skill flows plus organization identity, collaboration, permissions, and trust foundations are proven |
| Defer remote catalogs and a public marketplace | Deferred | Revisit after trust, identity, updates, and permissions are proven |
