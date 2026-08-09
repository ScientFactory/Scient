# T3 Foundation Migration Plan

Status: Active
Owner: Yaacov
Created: 2026-08-01
Last updated: 2026-08-09
Purpose: Governs the proof-gated migration from the current Synara-derived Scient app to one fully ScientFactory-owned application with fresh official T3 ancestry.
Doc type: Planning note

## Document Rules

Yaacov accepted
[ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
and promoted this plan on 2026-08-02 after reviewing the
[Phase Zero dossier](../research/spike-reports/t3-foundation-phase-zero-2026-08-02.md).
ADR-0005 owns the durable desktop-foundation decision. This plan owns migration
sequencing, capability dispositions, proof gates, bootstrap scope, stop
conditions, documentation transitions, and the currently authorized next
gate.

Part I defines the accepted destination: what ScientFactory will own, how the
repositories would relate, and how Scient could continue receiving T3
improvements without allowing T3 to define the scientific product. Part II
dispositions the known Scient and Synara capability portfolio from first
principles. Part III defines the proof-gated migration constitution: the
baseline, contract, divergence, persistence, continuity, update, and cutover
rules that govern execution. Part IV defines how accepted
decisions, plans, current-state documentation, evidence, operations, and
cutover records must change without pretending future work is already real.
The public-source candidate, bounded D4/Proof 1 safety envelope, GitHub-hosted CI
configuration, Blacksmith removal, and managed local development app are now
integrated at the exact base and heads recorded in the dated D4 evidence. D4 is
complete. The bounded product rebrand is accepted and integrated through
candidate [`scient-desktop-next` PR #5](https://github.com/ScientFactory/scient-desktop-next/pull/5).
The candidate presents `Scient` and `Scient (Dev)` while deliberately
preserving the D4 `scient-next` runtime, state, protocol, and disabled-authority
boundaries. Subsequent focused M1 lanes and release-system implementation are
recorded below. No implemented capability, release workflow, compatibility
mirror, or selected version authorizes publication, legacy-data conversion,
cloud enablement, cutover, or retirement of the current application.

This plan records accepted direction and owns migration sequencing,
boundaries, and proof gates. It deliberately does not pre-write the
implementation plan for
skills, source intake, provider onboarding, voice, legacy-data transition, or
another selected capability. Each capability receives a separate focused plan
when its implementation lane is opened, using the then-current T3 source and
the evidence relevant to that feature. The legacy-data transition plan must be
accepted before old user data is converted or cutover is attempted, but it is
not a prerequisite for beginning the clean candidate foundation.

### Update Policy

Update this plan when accepted evidence changes a proof-gate state, a risk
disposition, a stop condition, or the next authorized transition. Keep detailed
task lists and capability implementation plans with their owning work. Never
predict another repository's implementation, release, cloud, mobile, or
cutover state here.

## Accepted Direction And Current State

During Yaacov's 2026-08-02 line-by-line review, he approved the directions
below. D2 then verified the current official T3 baseline and exposed the
identity, privacy, state, updater, cloud/mobile, and continuity risks now
assigned to explicit gates. These migration-sequencing decisions do not
silently amend the accepted PRD or claim implementation:

- build one fully ScientFactory-owned T3-derived application;
- keep the current application only as a usable bridge and direct new features
  and scientific architecture to the T3 candidate;
- keep the initial scientific application layer dependency-isolated inside the
  candidate rather than creating a separate `scient-core` repository now;
- begin with an upstream-aligned phase that normally merges reviewed T3 ranges
  with minimal avoidable rewriting;
- allow direct changes to T3-derived code whenever they are consciously better
  for Scient, while recording and maintaining those divergences;
- treat cloud and mobile as foundation constraints from the first scientific
  feature: preserve T3's applicable foundations, prepare cloud for near-term
  selected-user enablement, and keep mobile-ready contracts and data behavior
  without requiring the mobile product UI now;
- target the serious Scient skills product for the end of M1, while preserving
  an explicit decision gate to defer it until immediately after migration. Do
  not plan its detailed scope, storage, trust, adaptation, or import behavior
  in this plan; plan those when its implementation lane opens;
- include portable project inspection and initialization, durable scientific
  source and PDF intake, guided provider connection and managed provider
  lifecycle, and substantially improved mathematical and bidirectional text
  correctness in the first migration;
- treat durable generated images and screenshots as the highest-priority
  post-migration work rather than a migration or cutover requirement;
- use every adaptation from current Scient or Synara as a quality ratchet:
  preserve its real user value and hard-won edge cases, preserve or improve
  T3's stronger foundations, and redesign weak behavior rather than copying it;
- keep the full scientific annotation system out of M1 but make M1 source and
  artifact readers ready for a near-term, cross-artifact annotation product
  spanning PDFs, figures, graphs, images, and later scientific surfaces;
- defer selection-as-context to that annotation work, while using a strong
  generic T3 implementation instead if one arrives first;
- include voice transcription in M1 as a day-one capability rebuilt to a
  higher standard than current Scient, while leaving its detailed online,
  offline, fallback, privacy, model-delivery, and packaging design to its own
  implementation plan; and
- keep prompt-history navigation as a later/P2 opportunity rather than M1 or
  P1 work;
- keep T3's existing notification behavior unchanged in M1, then design a
  complete Scient activity center in P1 after real use shows which events
  should remain notifications, move into activity, or appear in both;
- include a high-quality, Scient-owned curated What's New experience in M1 so
  the first migrated release can explain its real changes clearly;
- treat automations as P2, with a possible late-P1 exception only if product
  evidence justifies it, and reassess T3 before owning generic scheduling while
  keeping later scientific automations Scient-owned;
- build a new scientific Studio, under a name still to be chosen, as an
  extreme-priority P1 surface inside each project for scientific work that
  deserves first-class UI beyond chat and the ordinary side panel; do not put
  it in M1 or port the inherited coding Studio or Kanban as its product model;
- keep governed agent work, context receipts, proposals, researcher review,
  and the Scient agent gateway out of M1 and desktop cutover. They are new
  Scient and Scient Agent product work whose sequencing must be reconciled with
  the agent roadmap rather than justified as migration parity;
- use T3's browser and preview system as-is in M1. Do not port Scient's HTML
  preview subsystem or add a general provenance, trust, or stale-artifact layer
  during migration; re-evaluate only concrete missing behaviors against the
  then-current T3 and Synara implementations after migration;
- treat old-Scient continuity as a bounded migration-only compatibility program
  with its own import, archive, rollback, and retirement plan. It must not
  distort the long-term product model merely to reproduce one-time state; that
  focused transition plan is written during migration and accepted before any
  user-data conversion or cutover;
- keep subagents, browser-aware chat and in-app browser control, cross-thread
  messaging, and provider handoff out of M1 while treating them as important
  post-migration decisions that must be rechecked against current T3 and Synara;
  conversation forks, pinned material, notes, and memory-like successors remain
  individually undecided;
- treat Antigravity and Factory Droid as P1 provider candidates rather than M1
  parity work. Recheck current T3 immediately before implementation, build only
  through its replaceable driver seam when an adequate upstream driver is still
  absent, and do not confuse Antigravity with the distinct Gemini CLI
  integration that T3 currently advertises as coming soon; and
- keep the provider drivers already present in the freshly selected T3
  baseline for M1. The M1 onboarding work improves their scientist-facing
  connection experience without making a new provider driver a cutover
  requirement;
- treat `scient-agent` as an independent source foundation whose native Scient
  product, scientific workflow, and release are not implemented yet. Run the
  current Foundation Gate before feature development and evaluate Pi, OpenCode,
  Hermes, Goose, and other agent sources deliberately rather than treating
  today's fork as a finished product or automatic future baseline; and
- discuss external MCP clients in P2.

ADR-0005 now replaces the forward desktop-foundation decision in ADR-0001.
The current Synara-derived Scient app remains the supported continuity product,
while the public-source T3-derived candidate has its D4 safety envelope and local
development path integrated. The candidate is not released or the current
product, and no user data, cloud service, release channel, or website surface
has changed. The bounded Scient rebrand is accepted and integrated in the
candidate, but it does not change the candidate's unreleased migration status. D4
is complete; later proof and feature lanes still require explicit
authorization under Part III.

## Authority And Reconciliation State

[ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
is the accepted forward desktop-foundation decision.
[ADR-0001](../architecture/decisions/ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md)
is superseded but preserved as the historical initial-foundation record.
[ADR-0002](../architecture/decisions/ADR-0002-standalone-source-ownership-and-upstream-authority.md)
continues to treat original sources as fetch-only, reviewed inputs rather
than owned integration bases. The active [product roadmap](product-roadmap.md),
the [first vertical-slice plan](first-scient-vertical-slice-implementation-plan.md),
the [open-source adaptation strategy](open-source-adaptation-build-strategy.md),
the [technology stack](../architecture/technology-stack.md), and the
[open-source adaptation map](../research/source-evaluations/open-source-adaptation-map.md)
were reconciled by the D3 change that promoted this plan. The D4 candidate now
exists with its safety envelope integrated, so this separate evidence update
records its exact observed base, reviewed heads, remotes, final candidate-main
head, and non-released state without changing which application is current.
Later gates must update current-implementation records only when stronger
release or cutover evidence exists.

The accepted [PRD](../product/PRD.md), the product principles in
[product philosophy](../product/product-philosophy.md), and the host-independent
scientific operation boundary in
[ADR-0004](../architecture/decisions/ADR-0004-scient-operation-capability-and-provenance-boundary.md)
remain the constraints against which this accepted host change must be judged.
In particular, T3 preview or composer annotations may supply useful interaction
receipts, but they cannot become canonical scientific annotations without the
durable identity, provenance, authority, and recovery rules required by
ADR-0004.

# Part I: The Future ScientFactory

## 1. Executive Direction

The accepted direction is:

> Build one fully ScientFactory-owned, T3-derived Scient desktop application
> with a rigorously isolated Scient-owned scientific application layer inside
> it, alongside the genuinely separate `scient-agent` source foundation and
> future native agent product.

This is neither a complete rewrite from zero nor an attempt to replay the
existing Scient commit history on top of T3.

T3 would supply the maintained generic application platform: desktop shell,
chat, provider sessions, terminals, files, previews, browser, Git, application
lifecycle, packaging, and updater foundations. Scient would own the scientific
project model, operations, provenance, review, recovery, scientific user
experience, native agent, and product identity.

ScientFactory fully owns and evolves the resulting application: its repository,
architecture, direct code changes, identity, privacy, data, releases, updater,
support, and acceptance criteria. Official T3 is a maintained fetch-only
upstream, not a product authority. Preserving T3 ancestry and separable Scient
boundaries makes upstream maintenance easier; it does not subordinate Scient
to T3 or restrict justified changes to T3-derived code.

The current Synara-derived application remains usable as a temporary bridge
until the T3-derived Scient application passes the cutover gates. Its source
lineage and required rollback history remain preserved afterward.

Cloud and mobile are planned continuations of the same Scient project, not
distant afterthoughts or separate scientific products. Cloud may remain
production-dark at first, but the architecture should prepare for selected-user
enablement soon. Mobile UI scope remains a later decision, while inherited T3
mobile foundations and the portability of new Scient capabilities must be
preserved from the beginning.

The central rule is:

> T3 may host Scient, but T3 must not define Scient's scientific truth.

The corresponding maintenance rule is:

> Preserve real T3 ancestry and, during the initial migration and stabilization
> phase, receive reviewed upstream ranges through ordinary bounded merges with
> minimal avoidable rewriting. Prefer dependency-isolated Scient packages and
> narrow adapters when they produce an equally strong design. Directly change
> T3-owned surfaces whenever that is clearly better for product quality or
> long-term architecture, and make each such divergence explicit, tested, and
> maintainable through future T3 updates.

In this plan, **independent** means that Scient owns the scientific data
model, contracts, state transitions, persistence rules, and tests, and that
these do not depend on T3 application internals. It does not initially mean a
separate `scient-core` repository, daemon, deployment, or second user-facing
platform. Repository extraction should follow demonstrated reuse or lifecycle
needs; it should not be used to manufacture them in advance.

## 2. Why This Direction

The current evidence indicates that T3 has become stronger than the
Synara-derived Scient application in many expensive generic platform areas,
including provider architecture, connection supervision, browser and preview
surfaces, files, terminals, Git and pull-request infrastructure, project import,
common provider maintenance, model support, image handling, packaging, signing,
and updater machinery.

Scient should not spend its limited product and engineering capacity rebuilding
or repeatedly adapting those systems. Its resources should concentrate on the
parts that create a scientific workspace:

- durable scientific projects;
- sources, evidence, claims, decisions, data, analyses, figures, and writing;
- manual and agent-assisted work over the same project objects;
- reviewable and recoverable scientific operations;
- provenance, uncertainty, staleness, and auditability;
- the first-party Scient agent;
- cloud, collaboration, and mobile continuation shaped from the local-first
  foundation;
- scientific user experience that remains useful without chat or an active
  agent session.

The existing Scient work remains valuable. Some of it can move almost directly
into host-independent packages, some should be reimplemented through T3's
better architecture, some is useful primarily as a behavioral test or design
lesson, and much of the generic host implementation should be replaced by T3.

The goal is not to preserve code for its own sake. The goal is to preserve user
value, product knowledge, scientific guarantees, and tested failure behavior.

## 3. Repository Topology

ScientFactory should remain a plain workspace containing independent
repositories. It should not become one Git monorepo. Product authority, the
desktop product, the native agent, and the public website have genuinely
different ownership or release lifecycles. The scientific application layer,
however, does not yet justify a repository of its own: it should initially be
co-located with the T3-derived desktop product and separated by package and
dependency boundaries.

### 3.1 During migration

```text
ScientFactory/
├── Scient/                 Product truth, architecture, roadmap, evidence
├── scient-agent/           Independent agent source foundation
├── scient-desktop-next/    Temporary fresh T3-derived application
│   ├── packages/scient-project/
│   ├── packages/scient-skills/
│   ├── packages/scient-sources/
│   └── apps/.../src/scient/  T3 adapters and Scient product surfaces
├── scient-desktop/         Current Synara-derived application
└── website/                Website, downloads, and public release surfaces
```

`scient-desktop-next` is the authorized provisional migration-repository name;
it is not the final public product or repository name. The internal package
names remain illustrative and are created only as real vertical slices require
them. The important durable decision is the dependency shape, not a speculative
package inventory.

The diagram does not imply that T3's current cloud, relay, web, or mobile
deployables should be removed or moved into new repositories. Phase Zero mapped
their official topology; D4 must preserve their source and build boundaries
without enabling live services. A separately deployed Scient cloud
service should trigger a repository and lifecycle decision before its first
selected-user environment, not an automatic extraction based only on plans.

### 3.2 After successful cutover

```text
ScientFactory/
├── Scient/
├── scient-agent/           Independent agent repository
├── <final-desktop-repo>/   T3-derived app and Scient packages
└── website/
```

The final desktop repository name must be selected before its first public
release after an updater, signing, release-feed, redirect, and rollback audit.
This plan does **not** assume that the new repository will be renamed to
`scient-desktop`, or that the old repository can safely surrender that name.
The old Synara-derived repository and release feed should retain a stable,
unambiguous identity throughout migration and the rollback window. It may be
archived later without deleting its history. A repository rename is permitted
only when its operational value and safety are demonstrated; it is not a
symbolic requirement for cutover.

## 4. Repository Responsibilities

### 4.1 `Scient`: product and project authority

The existing `Scient` repository should continue to own:

- accepted product direction;
- product philosophy and identity;
- architecture direction and decisions;
- roadmap and migration planning;
- scientific workflow requirements;
- source evaluations and provenance;
- cross-repository coordination;
- quality, security, review, and upstream-intake policy;
- evidence supporting promotion from proposal to accepted architecture.

It should not become a general implementation monorepo or contain the desktop
application, native agent, or canonical runtime source.

### 4.2 Scient scientific application layer: isolated, initially co-located

The T3-derived desktop repository should contain a small set of Scient-owned
packages that own host-independent scientific meaning and behavior. This is a
strong architectural boundary inside the repository, not a new repository or
runtime boundary. It must not begin as a large framework, local daemon, or
prematurely generalized platform.

Its responsibilities should grow only from validated scientific workflows and
may include:

- portable Scient project identity and initialization;
- scientific project objects and validation;
- sources, excerpts, evidence, claims, tasks, artifacts, decisions, and later
  analysis and manuscript relationships;
- manual and agent-callable scientific operations;
- proposals, approvals, operation receipts, and recovery semantics;
- provenance, uncertainty, conflict, and stale-state logic;
- Scient skills and project-level activation;
- host-neutral agent-gateway contracts;
- Scient-owned persistence contracts and implementations;
- project import and export contracts;
- deterministic fixtures and adapter conformance tests;
- reusable scientific presentation models;
- genuinely host-neutral scientific UI components when their independence is
  proven rather than assumed.

These packages must not import:

- T3 application internals;
- Synara application internals;
- Electron APIs;
- provider-specific session objects;
- T3 thread or project identity as canonical Scient identity;
- agent-runtime persistence as canonical project state.

The layer may run in-process inside the T3 local server and desktop application.
Dependency rules should prohibit imports from Scient domain, project,
operations, and gateway packages into React, Electron, provider-session, or T3
application packages; adapters depend inward on Scient contracts. Boundary
tests and import-lint rules should enforce this rather than relying on folder
names or convention.

Contracts that cross a repository or process boundary should use a
dependency-neutral serialized wire form, versioned compatibility rules, and
golden fixtures. Each runtime may own its validator and map that wire form into
its preferred internal types. The desktop and agent should not share live
Effect schemas merely because both currently use Effect: their release cycles
and pinned runtime versions already differ. A package such as `scient-wire`
may be useful, but the name, schema technology, and publication model remain
implementation choices. The architectural requirement is neutral wire
compatibility, not a new universal framework.

A separate repository should be considered only when evidence shows that the
boundary has become a true independently consumed or released product. Useful
extraction triggers include:

- a second real production consumer, such as a cloud service or another host;
- an independent release, security, or compatibility lifecycle;
- stable contracts whose cross-repository versioning cost is lower than
  continued co-location;
- repeated measured merge or CI interference that package boundaries cannot
  contain; or
- an operational need for process isolation, sharing, or scaling.

Even then, extraction should solve a present problem and preserve one product
model; it must not create a speculative universal API. A separate local daemon
requires its own demonstrated lifecycle, isolation, sharing, or performance
need.

Near-term selected-user cloud plans make this an early Phase Zero question,
not proof that extraction is already correct. If the cloud implementation can
consume the same packages within the T3-derived repository and share its
development lifecycle, co-location may remain simpler. If it requires an
independent deployment, security, compatibility, or release lifecycle, extract
only the boundaries whose independent ownership is then real.

### 4.3 `scient-agent`: the independent first-party agent foundation

The existing `scient-agent` repository should remain independent. Today it is
an OpenCode-derived source foundation with an active repository and upstream
maintenance boundary; the native Scient agent product identity, scientific
workflow layer, and release are still planned rather than implemented.

Before product feature work begins, the native foundation must be selected
through current source, license, quality, lifecycle, and implementation proof.
The current OpenCode-derived history is incumbent evidence, not an automatic
future baseline. Pi, OpenCode, Hermes, Goose, and other agent systems may supply
foundations, capabilities, architecture lessons, workers, or bounded source
adaptations, but none becomes product authority merely by being evaluated.
Their exact roles require separate decisions under Scient's agent plan.

When implemented, `scient-agent` should own:

- the first-party Scient agent runtime selected from that current evidence;
- reasoning and model interaction;
- agent-specific tools;
- execution lifecycle and process behavior;
- sandboxing and runtime confinement;
- agent identity, configuration, packaging, release, and updates; and
- the agent-side implementation of future Scient gateway contracts.

The future Scient agent is a worker inside the scientific project, not the
owner of the project model. It should obtain authorized context and propose
operations through the future Scient gateway.

The agent must not receive direct authority to mutate trusted scientific state
merely because it runs locally. High-impact agent work should use the same
Scient-owned operations, review states, receipts, and recovery behavior that
manual product surfaces use.

External agents remain separate products with their own identities,
credentials, sessions, permissions, and updates.

### 4.4 T3-derived `scient-desktop`: the primary host application

The T3-derived desktop repository should own host responsibilities:

- Electron and desktop lifecycle;
- windows, menus, IPC, and native integration;
- chat transport and presentation;
- provider sessions and external-agent integrations;
- terminal, file browser, preview, browser, and Git machinery;
- provider installation and updating where host-native;
- desktop notifications and operating-system interaction;
- application settings that are genuinely device or host state;
- packaging, signing, release, updater, and rollback;
- T3-to-Scient adapters;
- mounting Scient scientific surfaces;
- importing or linking old Scient installations during cutover.

It should not own the scientific meaning of sources, evidence, claims,
decisions, analyses, or accepted project records.

### 4.5 Cloud and mobile continuation

The T3-derived repository should preserve and evaluate T3's current cloud,
relay, web, and mobile foundations at the freshly selected baseline. Scient may
reuse their generic transport, deployment, and client infrastructure when it
meets Scient's requirements, but Scient owns scientific identity, project
membership, permissions, synchronization semantics, conflicts, provenance,
retention, recovery, and the decision to enable any service.

Cloud should first be provable without public availability or live user data,
then enabled only for an explicitly selected cohort after its dedicated gate.
Mobile should remain buildable and structurally compatible where T3 already
provides that foundation. New Scient capabilities should define their mobile
role and portable contracts now; their mobile screens and final interaction
design remain separately selected later work.

### 4.6 Current Synara-derived `scient-desktop`: temporary continuity host

During migration, the current application should receive:

- critical correctness, security, and data-protection fixes;
- work already necessary for current user continuity;
- an explicit export or migration path;
- a narrow adapter to a selected, versioned Scient package only when a real
  continuity need materially outweighs the additional cross-repository
  coordination.

It should not receive a second long-term scientific architecture or a promise
of permanent parity with the T3-derived host.

### 4.7 `website`: public distribution surface

The website repository should own public website and download surfaces. It
should not define release authority by itself. Release identity, artifacts,
channels, signatures, update metadata, and rollback rules must remain governed
by the owning application and release process.

## 5. Authority And Dependency Direction

The dependency direction is:

```text
T3 desktop, cloud, mobile, provider, file, and host services
                         │
                         ▼
                  narrow host adapters
                         │
                         ▼
M1 Scient project + source/PDF packages, plus skills only if its late-M1 gate accepts
                         │
                         ▼
later Scient operations and gateway contracts, when product work requires them
                         ▲
                         │
             later tested agent protocol adapter
                         ▲
                         │
        refreshed and implemented Scient agent product
```

The Scient packages and T3 adapters initially live in the same desktop
repository, but dependencies still point toward Scient-owned contracts. The
scientific application layer must not depend outward on a particular provider,
agent, desktop shell, mobile client, or cloud vendor. The planned selected-user
cloud path is a reason to prove the boundary and evaluate its lifecycle early;
it is not permission to let T3 account, relay, or session state become
canonical scientific truth.

The architecture should make three distinctions explicit:

1. **Scientific authority:** Scient project objects and operations.
2. **Execution evidence:** agent sessions, tool events, terminal output, model
   responses, and host projections.
3. **Presentation and infrastructure:** desktop UI, provider lifecycle,
   browser, files, Git, packaging, updater, and operating-system integration.

Execution evidence may support a scientific operation, but it does not become
accepted scientific truth without the applicable Scient operation and review
semantics.

## 6. Feature Placement Model

Every substantial feature should be decomposed before implementation.

### 6.1 Scientific meaning

The Scient scientific application layer owns the durable product meaning,
validation, relationships, permissions, operations, and recovery behavior.

### 6.2 Portable behavior

Pure or host-neutral logic belongs in Scient-owned packages with deterministic
tests and no dependency on T3 state or UI.

### 6.3 Reusable presentation

Scientific components may be reusable when they depend only on explicit
Scient contracts and stable presentation inputs. Reuse should be proven through
real adapters rather than achieved through a generic abstraction that exposes
every host detail.

### 6.4 Host integration

The desktop host owns routing, application state wiring, native APIs, provider
sessions, shell presentation, and narrow registration into T3 surfaces.

### 6.5 Agent integration

The agent owns execution-specific tools and behavior. It consumes Scient
context and operation contracts; it does not invent parallel scientific state.

### 6.6 Cloud and mobile readiness

Every durable feature should state its portable identity, serialized contract,
authorization and revocation behavior, offline state, synchronization and
conflict semantics, artifact-location assumptions, and intended mobile role.
This does not require implementing a cloud path or mobile UI for every feature
immediately. It prevents local database rows, absolute paths, T3 session state,
or desktop-only presentation from becoming the feature's hidden product model.

Examples:

| Feature | Scient-owned portion | Host-specific portion |
|---|---|---|
| PDF evidence | Source identity, page or region anchor, evidence relationship | Signed file access, viewer mount, navigation |
| Scientific annotations | Durable annotation identity, source/artifact anchor, version and stale-state semantics, provenance, relationships | T3 preview/file capture UI, coordinate or line extraction, viewer rendering, composer projection |
| Voice | Transcription request and result contract where reusable | Microphone capture, desktop IPC, composer action |
| Notifications | Scientific activity and review-event meaning | Desktop notification API and shell UI |
| Governed operations | Authority, proposal, receipt, decision, recovery | T3 RPC or MCP registration and presentation |
| Generated screenshots | Artifact identity, provenance, durable relationship | Attachment ingestion and chat rendering |
| Provider onboarding | Product policy and desired user outcome | T3 ProviderDriver lifecycle and account interaction |
| Automations | Schedule meaning, run envelope, outputs, receipts | Background-worker and operating-system lifecycle |
| Message forks | Scientific provenance when relevant | T3 thread events, projections, persistence, and chat UI |
| Cloud collaboration | Project membership, permissions, operation and sync semantics, conflict, provenance, recovery | Deployment, transport, authentication, storage, observability |
| Mobile continuation | Allowed operations, portable state, presentation inputs, offline and sync behavior | Mobile navigation, native APIs, caching, and interaction design |

Some capabilities are inherently host-native. Portability does not require
pretending otherwise. It requires keeping their scientific meaning independent
and their host integration explicit and replaceable.

## 7. T3 Relationship And Update Strategy

### 7.1 Preserve literal T3 ancestry

The new application should begin from an exact, freshly fetched revision of
the official `pingdotgg/t3code` repository and retain its Git ancestry. No
stale local T3 clone, prior report SHA, Fable baseline, or indirect fork may be
used to choose or describe the implementation baseline. The official `main`
tip should be refreshed when the migration repository is created; if stability
requires pinning an earlier tag or revision, that must be a conscious,
documented choice made *after* comparison with the fresh tip. All seam paths,
line locations, build assumptions, and estimates must then be re-derived at
that exact selected SHA.

Regular upstream intake should use ordinary merges of stable tags or bounded
ranges whenever the fork remains structurally compatible.

Scient should not recreate the current donor-intake model in which attractive
commits are repeatedly studied and rewritten one by one. Selective review
remains necessary for security, product, identity, data, and release policy,
but accepted upstream ranges should enter through real ancestry-preserving
merges where possible.

For the initial migration and early stabilization period, expected to last at
least the next few months, the default is to inherit reviewed T3 ranges largely
as they are and limit adaptation to Scient's deliberate identity, safety,
scientific, architecture, and product decisions. This consciously favors easy,
frequent upstream updates over optimizing every generic host behavior. It may
defer nonessential refinements, but it does not lower the required bar for
privacy, security, data integrity, release safety, scientific trust, recovery,
or essential user workflows.

This upstream-aligned phase is not permanent doctrine. Reconsider it after the
candidate has matured through real use and upstream rehearsals, and when the
value of greater Scient-specific quality or control exceeds the value of broad,
low-effort T3 intake. A later explicit decision may move the application toward
more selective merges, adaptations, reimplementations, or independently owned
host behavior.

### 7.2 Preserve T3 internals that users do not see

To avoid permanent conflict multiplication, the fork should not:

- globally rename `@t3tools/*` packages or internal imports;
- reformat or reorganize upstream-owned source;
- move T3 packages merely to match a Scient naming preference;
- copy T3 subsystems into parallel Scient implementations;
- delete unused upstream applications solely to make the repository look
  smaller;
- remove or freeze T3 cloud, relay, web, or mobile foundations merely because
  they are not enabled in the first Scient release;
- turn broad internal renaming into product identity work.

User-visible product identity, application IDs, protocols, data directories,
telemetry, updater ownership, release metadata, and public assets must be
Scient-owned and centralized.

### 7.3 Establish narrow extension seams

The initial T3 adaptation should create or validate only the extension points
needed by selected M1 behavior: project opening and initialization, source/PDF
viewing, provider onboarding, voice, transcript correctness, identity,
settings, persistence, migration, and cloud/mobile preservation. Add skills
seams only if the separate late-M1 skills plan is accepted before cutover.

Over later product development, similarly narrow extension points may be added
for scientific activity and artifact renderers, the scientific Studio and
other surfaces, annotation capture adapters, typed composer context, Scient
RPC or MCP capabilities, additional provider drivers, shell actions, and
activity or notification presentation. Those later categories are not initial
migration infrastructure merely because the architecture can accommodate
them.

These seams should be small registries or adapters, not a new framework layered
over all T3 behavior. Most feature implementation should live in new files;
integration should normally require a small, reviewable registration.

This is a design target, not an absolute prohibition. Some application-native
features will require changes to T3-owned code. Avoiding those changes must
never force an inferior workaround. Direct changes are appropriate when they
produce the better product and long-term design; they must be explicit, tested,
owned, and maintained through future T3 updates.

### 7.4 Maintain a divergence manifest

Every intentional difference from T3 should be classified as one of:

- Scient-owned package or directory;
- T3 host adapter;
- user-visible identity;
- privacy or security override;
- release or updater policy;
- deliberate change to a T3-owned surface.

The fork should enforce this classification in CI so an ordinary feature
cannot gradually introduce unreviewed edits across upstream-owned hot files.
Scient-specific identifiers should be mechanically recognizable and
namespaced where that improves enforcement. Behavioral canaries must prove the
registered seams still work; a changed-line counter alone cannot prove that an
upstream refactor preserved behavior. Generated files should be regenerated
and verified, not protected through custom merge strategies.

The manifest is default-deny governance, not a permanent ban on improving a
T3-owned surface. A high-value product feature may add a new deliberate
divergence after explicit review of user value, alternatives, ownership,
upstream conflict cost, tests, rollback, and whether a general extension seam
should instead be contributed upstream. Exact tooling remains to be designed
against the selected baseline.

### 7.5 Separate upstream maintenance from product development

T3 update branches and pull requests should not contain new Scient product
features. A future update cycle should conceptually:

1. establish the fetched T3 range and unmodified baseline;
2. merge it into an isolated update branch;
3. resolve known identity and adapter conflicts;
4. run T3 baseline checks;
5. run Scient package and adapter-conformance checks;
6. run the complete selected M1 behavior suite;
7. inspect changes to the divergence manifest and hot integration surfaces;
8. integrate the update independently from product feature branches.

Critical security and data-protection fixes may require immediate intake.
Ordinary upstream movement should be integrated in stable batches rather than
chasing every T3 main-branch commit as it lands.

The cadence should be chosen from observed risk and merge cost, not fixed in
advance to an arbitrary weekday or time budget. Track elapsed conflict work,
changed seams, regressions, and delayed security fixes for each update. Change
the cadence when those measurements show that updates are either too frequent
or too large.

### 7.6 Prove updateability before broad migration

Before migrating a large feature portfolio, the candidate application should
implement one deliberately representative slice:

- project inspection and initialization through one Scient-owned package;
- one source or PDF intake and reader path;
- one selected host-native adaptation such as provider onboarding, voice, or
  mathematical and bidirectional text correctness; and
- the smallest registration, settings, and presentation seams those real M1
  behaviors require.

It should then merge a recent high-churn T3 range. The measured conflicts,
behavioral regressions, and required adapter changes are the proof of whether
the proposed maintenance architecture works.

If this rehearsal requires broad recurring edits throughout T3 chat, RPC,
persistence, and desktop lifecycle code, the extension boundaries must be
revised before more migration work is authorized.

## 8. Quality Model

High quality must be established at every ownership boundary that actually
exists, not only through end-to-end application tests. M1 must not manufacture
agent, operation, review, or cloud product boundaries merely to run the later
checks described below.

### 8.1 Contract verification

Scient contracts should have stable serialization, validation, compatibility,
and error behavior. A host or agent must not reinterpret missing, stale,
uncertain, or rejected state as accepted scientific truth.

### 8.2 Scientific behavior verification

Scientific state transitions, provenance, permissions, proposals, decisions,
failure handling, and recovery should be deterministic and testable without a
desktop app or live model.

### 8.3 Persistence and migration verification

Scient-owned state should be tested for reopening, interruption, partial
failure, migration, import, and rollback. A T3 or legacy application database
must not be treated as compatible merely because both use SQLite.

### 8.4 Adapter conformance

The T3 adapter and any temporary importer or deliberately retained legacy
adapter should be tested against the same relevant Scient behavior where they
actually overlap. This does not require building the new feature in both
applications. Adapter conformance is more important than making them visually
identical.

### 8.5 Agent verification

When the later agent product and desktop integration exist, agent tests should
cover authorized context, permissions, proposals,
cancellation, failure, receipts, confinement, and recovery. Live model behavior
may supplement deterministic proof but must not replace it.

### 8.6 Host integration and product acceptance

The real application must prove the selected complete user behavior, including
manual control, failure handling, continuation, and recovery. Later reviewed
operation features must additionally prove inspection, editing, acceptance,
and rejection. Code tests do not replace visual, interaction, accessibility,
packaging, or platform validation where those forms of proof are required.

### 8.7 Upstream-update verification

A feature that modifies an upstream-owned hot surface is not fully proven until
it survives a realistic T3 update rehearsal or carries an explicit accepted
maintenance cost.

### 8.8 Cloud and mobile readiness verification

Cloud-ready means that representative contracts and state transitions survive
serialization, authorization, retry, offline mutation, conflict, revocation,
and recovery tests against a production-dark service path. Mobile-ready means
that domain behavior and presentation inputs can be consumed without importing
desktop internals. Neither term may be claimed from folder placement or an
unused interface alone.

## 9. Working Model For New Features

Every meaningful feature should begin with an ownership decision:

1. Is this scientific product meaning owned by the Scient scientific
   application layer?
2. Is it execution behavior owned by `scient-agent`?
3. Is it generic host behavior that should use T3 as-is?
4. Is it a T3 host adapter or unavoidable application-native feature?
5. Is it a current-app-only repair that should not enter the new architecture?
6. Is it a generic improvement that may be proposed upstream while remaining
   safe to carry locally if upstream does not accept it?
7. What cloud, offline, synchronization, and mobile consequences must its
   contracts preserve now, even when those adapters are not implemented yet?

A feature should not begin implementation while its authority is ambiguous.

When a selected lane is ready to begin, write its focused product and
implementation plan against the then-current T3 baseline. That plan should
resolve the concrete experience, data behavior, affected seams, alternatives,
verification, rollback, and any user decision specific to the feature. This
plan should not accumulate those implementation details in advance or
become a substitute for those plans.

The recommended delivery sequence is:

1. state the researcher outcome and owning scientific objects;
2. define the feature's local, cloud, offline, synchronization, and mobile
   roles without building unused product surfaces;
3. define or extend the smallest Scient contract;
4. implement deterministic scientific behavior in an isolated Scient package;
5. add the manual product path;
6. when the feature is intentionally agent-callable, add the agent-facing path
   through the same authorized behavior after the agent integration track is
   real;
7. add the narrow T3 adapter and product surface;
8. verify failure, recovery, reopening, permissions, and the applicable
   portability canaries;
9. rehearse the relevant upstream-update conflict surface;
10. when work genuinely spans repositories, integrate contracts and consumers
   in explicit dependency order.

Cross-repository work should use separate pull requests and commits. Most
desktop scientific work should not be cross-repository merely for the sake of
abstraction: the package, adapter, and product surface can land atomically in
the T3-derived desktop repository. When Scient Agent or another real repository
is a consumer, contracts should land before consumers, and no repository should
claim another repository's unmerged work as implemented.

## 10. Build Direction

Migration and scientific product development should pressure-test each other.
Scient should not spend months reproducing generic feature parity before
building scientific value, and it should not build its scientific architecture
inside the legacy host while planning to replace that host.

The planned high-level direction is:

### Foundation proof

- create a fresh T3-derived candidate only after explicit authorization;
- give the candidate a provisional Scient application identity, protocol, and
  state directory that cannot collide with T3 or the current Scient app;
- disable T3-owned outbound telemetry and update publication in the candidate
  until Scient explicitly owns and authorizes those paths;
- preserve T3 ancestry and baseline behavior;
- inherit T3's existing application persistence rather than designing a new
  host database during bootstrap;
- inventory and preserve the freshly selected T3 cloud, relay, web, and mobile
  foundations, including their build and deployment boundaries;
- record that Scient owns the meaning of future scientific data, cloud
  authorization, synchronization, conflict, offline, and recovery rules, while
  deciding their concrete contracts only in the features that need them;
- establish the narrow extension seams;
- prove an upstream merge rehearsal;
- record the old-Scient import boundary without designing the importer yet.

### Minimal migration-owned Scient layer

- move or re-establish project-init behind host-independent ownership;
- define only the project, source, and PDF state required by the selected M1
  capabilities;
- establish persistence and recovery only for those selected capabilities;
- provide deterministic fixtures and adapter conformance;
- connect the T3 host through a narrow adapter.

If the separate skills feature plan is accepted for late M1, add its serious
control foundation and only the skill state that plan requires. Otherwise,
defer it intact until immediately after migration rather than shipping a weak
parity version merely to satisfy M1.

This migration layer must not prebuild the governed-operation, proposal,
decision, agent-gateway, scientific-task, or agent-review model merely to prove
architecture. Those are separate product work.

### Representative M1 integration proof

A researcher should be able to:

- open or initialize a project;
- add and reopen one supported scientific source or PDF;
- use the selected M1 provider, voice, and transcript-correctness paths; and
- close, update, and reopen the app without losing or corrupting the selected
  M1 state.

After this proof, merge a representative high-churn T3 range and measure the
real maintenance burden. No Scient Agent integration is required to pass this
migration proof.

### Post-migration scientific product development

The accepted product roadmap's bounded scientific task, visible context,
proposal, researcher review, receipt, and recovery loop remains important. It
is new Scient and Scient Agent product work, not an inherited desktop feature
or M1 cutover requirement. Its product scope, desktop-agent contracts, and
implementation sequence should be reconciled with the Scient Agent plan after
the T3-derived app foundation is ready.

### Essential capability restoration

Only capabilities selected through the first-principles disposition in Part II
should be restored. A missing T3 feature is not automatically migration work,
and an existing Scient implementation is not automatically the right future
product shape. T3's stronger browser, Git, file, terminal, preview,
provider-session, backend, and updater foundations should be used rather than
reimplemented.

### Desktop cutover, selected-user cloud, and later mobile UI

Cutover should occur only after one-way import, user continuity, application
release, updater, recovery, and upstream-update behavior are proven. Desktop
cutover and cloud enablement are distinct decisions: neither one automatically
authorizes the other.

Cloud readiness should begin during the foundation and first-slice work. A
production-dark path may be built and tested before it is offered to users.
Selected-user enablement may follow soon, but only through a named cohort,
explicit service ownership, feature gating, privacy and security review,
identity and project authorization, tenant and project isolation, offline and
conflict recovery, backup and restore, observability, support, and rollback.
It is not broad public availability and must not silently turn cloud state into
the only project truth.

Mobile should initially be treated as a future reading, capture, review,
approval, notification, and continuation surface rather than requiring full
desktop parity. T3 mobile foundations should remain current and buildable where
the selected baseline supports them. New scientific capabilities should expose
portable contracts and presentation inputs so selected mobile adaptations can
follow without redesigning their scientific meaning; the mobile UI itself is
not part of the initial implementation commitment.

## 11. Explicit Rejections

This plan rejects:

- replaying all Scient commits onto T3;
- building a new generic desktop shell from zero now;
- placing scientific truth in T3 orchestration or session state;
- designing one enormous universal Scient API;
- introducing a permanent local microservice before its need is proven;
- implementing scientific behavior separately in every host;
- completing generic feature parity before one real scientific workflow;
- assuming conflict-free upstream merges are possible;
- treating T3 as Scient's permanent scientific product architecture rather
  than the selected primary host platform.

## 12. Principal Risks And Required Guardrails

### Risk: premature abstraction and repository extraction

Trying to make every future host imaginable work from day one could produce a
weak generic framework and unnecessary package-version choreography. The
scientific application layer should grow from real vertical slices inside the
T3-derived repository. Its dependency boundaries should make later extraction
possible, but extraction itself should wait for a real second consumer or
independent lifecycle.

### Risk: cloud-ready and mobile-ready become labels without proof

Interfaces that are never exercised can conceal local-only identities,
filesystem assumptions, unsafe authorization, unresolvable offline conflicts,
or desktop-coupled presentation. Require representative production-dark cloud
canaries and mobile contract consumers before calling foundational behavior
ready, without forcing every feature to ship on every platform immediately.

### Risk: the legacy bridge outlives its purpose

The bridge must remain usable until cutover without becoming a second feature
target. The migration plan must define explicit conditions for freezing and
retiring it.

### Risk: hidden T3 coupling

T3 thread, provider, project, and database identifiers may leak into Scient
contracts through convenience. Dependency and conformance tests should detect
that boundary erosion.

### Risk: too many small upstream patches

Individually harmless edits to T3 hot files can accumulate into a deeply
divergent fork. The divergence manifest and upstream rehearsal should be
required before the pattern becomes expensive.

### Risk: duplicated persistence or unsafe migration

The current Scient and T3 application migrations have already diverged. The
new application requires an explicit importer and distinctly Scient-owned
schema, migration authority, and state semantics; it must not open the old
database as though it were natively compatible. Whether the new Scient schema
uses the same physical SQLite file as the T3 host or a separate Scient database
is an unresolved engineering decision that must be settled before durable
records are implemented.

### Risk: replacing visible user value with architectural promises

The migration must inventory current user workflows and prove the selected
replacement behavior. A cleaner architecture does not compensate for losing a
critical daily workflow without an explicit decision.

### Risk: allowing the agent to become the product center

The Scient agent is important, but the durable research project remains the
product. Manual scientific surfaces must operate on the same objects and retain
full inspect, edit, review, and recovery behavior.

## 13. Decisions That Remain Open

Engineering decisions should be made at the latest responsible moment, but no
later. Four timing classes prevent both premature implementation planning and
dangerous architectural drift.

### 13.1 Accepted direction decisions

ADR-0005 and this active plan establish that ScientFactory will:

1. build one fully ScientFactory-owned application from a fresh official T3
   ancestry rather than replaying Scient commits or permanently maintaining two
   primary desktop products;
2. keep Scient's scientific meaning dependency-isolated inside the desktop
   repository initially, while keeping `scient-agent` genuinely separate and
   avoiding a speculative core repository or daemon;
3. use ordinary ancestry-preserving T3 merges during the initial aligned phase,
   while allowing conscious direct changes to T3-owned surfaces when they make
   the product materially better;
4. use the high-level M1, P1, later, use-T3, learn-only, and rejected
   capability boundaries in Part II, including the current application as a
   continuity bridge rather than a second feature target;
5. preserve useful T3 cloud and mobile foundations, keep scientific authority
   local-first and Scient-owned, prepare cloud for separately gated selected
   users, and defer mobile product UI decisions;
6. require explicit divergence ownership, update rehearsals, recovery, and
   stop-or-redesign gates instead of assuming the migration must continue after
   evidence shows a poor boundary; and
7. change architecture and planning authority before repository bootstrap
   changes implementation truth.

Exact names, paths, commands, schemas, providers, databases, and release
numbers are not direction decisions merely because they eventually matter.

### 13.2 Resolved Phase Zero and D4 bootstrap decisions

D3 resolves only the choices required to enter D4 safely:

1. provisional owned repository: `ScientFactory/scient-desktop-next`, private
   during foundation proof, with `main` as the default integration branch;
2. bootstrap base-selection rule: immediately before repository creation,
   freshly fetch official T3 and use its then-current `main` tip; record that
   exact revision and tag as the integration base after the pristine baseline
   passes. Do not keep editing this plan as T3 advances. An earlier revision may
   be selected only through a conscious documented exception made after
   comparison with the fresh tip;
3. writable owned `origin` and official `pingdotgg/t3code` fetch-only
   `upstream` with push disabled; no Synara remote in the candidate;
4. a collision-free provisional candidate identity and state namespace,
   selected in the candidate's first commit from the reserved
   `scient-desktop-next`/`Scient Next` family and verified against both current
   Scient and T3 before startup; these are migration identities, not the final
   public product name;
5. fail-closed telemetry and observability, no T3 provider-identity reads, no
   inherited update publication or live cloud endpoints, and explicit refusal
   of T3's legacy user-data fallback before candidate startup; and
6. preserve T3 cloud, relay, web, and mobile source/build foundations where
   practical while keeping every live service, public update, and mobile
   product release disabled.

The repository visibility is a bootstrap safety choice, not a permanent
product decision. It must be reconsidered with license, notice, contribution,
release, and public-source obligations before any external distribution.

Bootstrap does not require choosing a separate scientific database, designing
the legacy importer, enabling cloud, or finalizing signing, public updater,
supported release platforms, and distribution channels. Those decisions belong
to their focused feature or release gates. The final public repository name may
also remain provisional, provided the local candidate cannot collide with
current Scient or T3 state.

### 13.3 Focused lane-entry decisions

Each capability receives a separate focused product and implementation plan
when its lane is ready. That plan uses the then-current T3 base and decides only
what the capability actually needs. Examples include:

1. whether the first durable Scient-owned project or source records use
   namespaced tables and an independent ledger in T3's inherited SQLite file or
   a separate Scient file; this decision does not replace T3's database;
2. project initialization behavior and its smallest host adapter;
3. PDF/source identity, reader, storage, external-file, portability, and later
   annotation extension behavior;
4. provider onboarding and the lifecycle promises made for the provider drivers
   present in the selected T3 baseline;
5. voice transcription, mathematical and bidirectional correctness, and
   curated What's New through independent focused plans;
6. whether the serious skills product lands at the end of M1 or immediately
   afterward, followed by its own scope, storage, import, trust, adaptation,
   update, and ADR-0003 decisions;
7. the existing-user transition and archive/import/rollback experience before
   any legacy data is converted or cutover is attempted;
8. later Studio, annotation, generated-image, activity, browser-awareness,
   conversation-control, subagent, Antigravity, Factory Droid, automation, and
   other P1/P2 capabilities when their lanes open; and
9. the refreshed `scient-agent` foundation choice, current Pi/OpenCode proof,
   Hermes, Goose, other source roles, and desktop-agent contract in the separate
   agent track.

Every focused plan should state the user outcome, current-source evidence,
owner, alternatives, data and failure behavior, affected T3 and Scient seams,
cloud/mobile consequences where real, verification, rollback, upstream-update
cost, and the conditions for replacing local work with a later T3 capability.
It should not reopen the whole migration direction unless its evidence triggers
a stop or reconsideration gate.

### 13.4 Evidence-gated release and lifecycle decisions

These remain evidence-gated even when implementation work has begun. Decide or
activate them only when their named evidence and owners exist:

1. exact T3 update cadence and any later move from broad alignment to selective
   intake, based on measured merge cost and regressions;
2. selected-user cloud cohort, environment, identity, authorization, storage,
   synchronization, conflict, privacy, operations, support, incident, disable,
   and rollback boundaries;
3. the first mobile product roles and later UI scope;
4. final supported public operating systems, signing/notarization activation,
   website delivery, updater transition, and rollback window. The release
   machinery targets macOS arm64/x64, Windows x64, and Linux x64, and Yaacov has
   selected `v0.6.0` as the first intended successor version; neither choice is
   a support or publication claim before packaged acceptance;
5. quantitative dogfood, beta, cutover, and acceptance criteria;
6. the current application's freeze point, support boundary, legacy identity,
   and retirement timing; and
7. any final repository rename or source-monitoring retirement after its
   operational safety and value are demonstrated.

## 14. Accepted Destination In One Sentence

> ScientFactory should build one T3-derived Scient desktop application whose
> Scient-owned scientific application layer is logically independent and
> dependency-isolated inside the desktop repository, keep the first-party agent
> genuinely separate, preserve T3's useful cloud and mobile foundations, and
> make new scientific capabilities cloud- and mobile-ready without surrendering
> local-first ownership or extracting boundaries before real lifecycles justify
> it.

# Part II: Capability Portfolio And Integration Decisions

## 1. Purpose And Decision Boundary

This part decides how to treat the capabilities that exist in the current
Scient or its Synara lineage but are absent, weaker, differently implemented,
or newly superseded in T3.

It does not treat feature parity as the objective. The objective is the best
long-term Scient product: scientifically coherent, trustworthy, scalable,
maintainable, manually usable, agent-capable, and able to benefit from T3
without allowing T3's coding-workbench assumptions to define the research
workspace.

Yaacov approved these portfolio dispositions on 2026-08-02 as migration
planning direction. They remain planning rather than accepted product or
architecture truth until promoted through their owning documents. Timing
labels express dependency and product importance, not calendar commitments or
permission to implement.

## 2. First-Principles Decision Test

Every capability is evaluated in this order:

1. **Scientific value.** Does it materially improve real scientific work, or
   is it inherited coding-workbench surface?
2. **Project coherence.** Does the result become part of the durable research
   project, or remain trapped in chat, a provider session, or host state?
3. **Manual ownership.** Can a researcher inspect, edit, continue, and recover
   the same work without depending on agent prose?
4. **Trust.** Are provenance, authority, uncertainty, failure, staleness, and
   recovery visible where they matter?
5. **Correct owner.** Is the behavior in the Scient scientific application
   layer, agent runtime, reusable presentation, host integration, or generic T3
   platform behavior?
6. **Host independence.** Can the durable meaning survive replacement of T3?
7. **T3 maintenance cost.** Does the feature require recurring edits in chat,
   RPC, provider, settings, persistence, desktop, or release hot spots?
8. **Prerequisite quality.** Can it be implemented completely and safely now,
   or would doing it now freeze the wrong data model or produce a partial
   product?
9. **Option value.** Does deferring it preserve the ability to build it well
   later, or does delay create data, identity, or architectural lock-in?
10. **Cloud and mobile role.** Which identity, authorization, offline,
    synchronization, conflict, and portability properties must be stable now,
    and is the eventual mobile role full work, reading, capture, review,
    approval, notification, or none?

High quality does not mean carrying every old feature. It means building the
right features on the right foundations, rejecting attractive distractions,
and refusing to ship incomplete trust or recovery behavior merely to claim
parity.

### Migration quality floor

Current Scient and Synara are evidence of user value, failure cases, and tested
behavior; they are not automatic implementation templates or the quality
ceiling. Every selected adaptation must begin from the freshly selected T3
baseline, preserve T3 improvements in the affected generic platform, and avoid
regressions in architecture, performance, security, privacy, accessibility,
reliability, recovery, maintainability, or user experience. Where the inherited
feature is incomplete or awkward, migration should redesign it to a higher
standard rather than reproduce it faithfully. Acceptance must prove both the
intended researcher outcome and the relevant T3 baseline behavior.

## 3. Disposition And Integration Modes

Each capability receives one primary disposition:

| Mode | Meaning |
|---|---|
| **Integrate first** | Required to prove the architecture, protect users, or establish the first scientific product slice. |
| **Required before broad public cutover** | May follow the internal foundation proof, but the replacement should not be treated as a complete public successor without it or an explicit owner-approved exception. |
| **Planned next** | Strategically aligned and expected, but dependent on earlier Scient-owned state, authority, recovery, or product design. |
| **Keep available for later** | Preserve the user problem, design lesson, and test evidence; implement only when usage or the roadmap justifies it. |
| **Use T3** | The current T3 implementation is equal or better. Do not port Scient code. |
| **Learn only** | Retain security, reliability, performance, or UX lessons as requirements and tests, but do not carry the implementation. |
| **Reject** | Do not reproduce the old feature or architecture because it is strategically misaligned, permanently expensive, unsafe, or superseded by a better product interpretation. |

During this review, **M1** means the complete first migration and desktop
cutover scope, while **P1** means the highest-priority product work immediately
after that migration. **Later/P2** retains an opportunity beyond P1 without
making it a scheduled commitment. These labels do not replace the proof gates:
they make Yaacov's feature-sequencing decisions explicit. A capability may
appear in a later portfolio gate because of its owning subsystem while still
being required in M1.

Implementation relationship is recorded separately:

| Relationship | Meaning |
|---|---|
| **Scient-owned and isolated** | Lives in a dependency-isolated `packages/scient-*` package or in the genuinely separate `scient-agent` repository; isolation does not by itself require another repository. |
| **Thin T3 adapter** | Scient behavior remains separate; T3 receives narrow registration, translation, or presentation glue. |
| **Deliberate T3 divergence** | Scient intentionally changes a T3-owned surface because product identity, safety, release authority, or essential host behavior requires it. |
| **T3 as-is** | Use the upstream subsystem and remove or ignore the Scient equivalent. |
| **Native redesign later** | The user need survives, but the old object model or implementation should not. |

## 4. Evidence Corrections Since The Catalogs And Fable Plans

The source analyses remain valuable but are snapshots, not authority. A fresh
read-only comparison on 2026-08-02 found:

- the official `pingdotgg/t3code` `main` tip was
  `e60821f0e0d82a5d671ca3b94719c49d333921c8`. This was confirmed directly
  against the official remote, with push disabled in the disposable donor
  checkout; the latest observed tag was
  `v0.0.32-nightly.20260802.980` at that same commit. It is newer than the
  catalog's `03adf215c`, this plan's former `0ad91b6e` observation, and
  Fable's `a041981` seam baseline;
- all six commits from the proposal's former `0ad91b6e` observation through
  `e60821f0` were inspected, not merely the new tip. They add a substantial
  rollback-safe remote-server update state machine and stable launcher,
  correct a failed `npx` service-update handoff, improve relay-log severity,
  fix a sidebar control overlap, normalize icons, and separate legacy models
  in current web and mobile pickers. The server-update work strengthens the
  decision to use T3's host lifecycle rather than port Synara's, while making
  launcher, migration-preflight, and rollback compatibility mandatory inputs
  to the persistence and release proofs. The other five changes refine T3
  platform behavior but do not overturn the Part II portfolio decisions;
- `scient-desktop origin/main` was
  `3829e5dd82a4760184aabafa4c96127744ef79f2`, newer than this plan's former
  `a3f0a27ba` snapshot and Fable's `50cb55c5` snapshot. Earlier verified Scient
  behaviors remain migration evidence, but current-baseline claims must be
  refreshed before implementation;
- settings search and sidebar thread search are already present in modern T3,
  so Scient's old implementations are not migration gaps;
- modern T3 also has a substantial browser-preview annotation mode for DOM
  elements, rectangular regions, freehand strokes, comments, requested style
  changes, and annotated screenshot capture, plus file-line review comments.
  These are strong host interactions to reuse, but their composer-oriented
  records are not a durable Scient source-annotation model, and no
  PDF-specific persistent annotation subsystem was found in the inspected
  source;
- the current `scient-agent` repository is explicitly a source foundation, not
  an implemented native Scient agent product. Its local checkout and OpenCode
  ancestry are not a safe future dependency baseline and must be refreshed
  before agent feature work. Fable's exact runtime-package comparison is
  therefore not a migration premise. The durable conclusion is narrower:
  independently released runtimes need neutral wire contracts and fixtures
  when their integration is actually built, not shared runtime-specific schema
  objects created during desktop migration;
- Fable's named `onboarding-connect-accounts-wip` branch and claimed
  `57f4fef9` commit were not found in the canonical Scient checkout or in a
  read-only search of Git repositories in the inspected local ScientFactory
  workspace. They must
  not be pushed, cited as available source, or used for estimates until their
  exact repository path, full SHA, provenance, ownership, and state are
  identified;
- the exact seam files proposed by Fable are useful research leads, but their
  line locations and some component names have already drifted at the current
  T3 tip. They are baseline-specific hypotheses, not accepted architectural
  interfaces;
- both current Scient and current T3 have explicit build/release repository
  configuration around their updater machinery. Fable's claim that the feed
  simply follows `GITHUB_REPOSITORY` with zero configuration is too broad.
  Its underlying warning remains correct: repository identity, update feed,
  signatures, channels, redirects, and rollback must be proven together;
- T3 continues to enable its own PostHog telemetry by default in the inspected
  source. This remains a pre-build Scient privacy and identity blocker.

These observations are dated evidence, not a future baseline lock. The
implementation plan must refresh the official T3 and owned Scient heads again,
select an exact revision consciously, and re-run every structural claim at
that selected baseline.

## 5. Integration Order

### 5.1 Gate A: Foundation And User-Safety Blockers

These are the first changes because every later feature depends on them or
because an artifact must not be distributed without them.

| Capability | Plan decision | Ownership and divergence | Why first | Required proof |
|---|---|---|---|---|
| Scient identity, application IDs, protocols, and data directory | **Minimum local isolation first; full release identity later** | Deliberate, centralized T3 divergence; preserve internal `@t3tools/*` names | Even a local candidate must not identify or store itself as T3 or the current Scient app | Provisional bundle/app ID, protocol, executable, and state-directory isolation; final signing and public identity are release-gate work |
| Telemetry and privacy | **Integrate first** | Deliberate T3 divergence in the quiet telemetry service; Scient policy owns any future analytics | Unchanged T3 sends enabled telemetry to T3 Tools | No outbound analytics without the approved consent state; CI regression guard |
| Old-Scient continuity boundary | **Record the boundary now; design and prove before cutover** | Separate one-way importer or archive path with an explicit retirement condition; never reuse T3 migrations as though databases were compatible | The candidate can begin without an importer, but no user migration can | Current-user census, update-entry experience, dry-run, backup, idempotency, explicit loss reporting, partial-failure recovery, rollback, old-app reopening, and removal of temporary compatibility code when the support window ends |
| Extension seams and divergence manifest | **Integrate first** | Small intentional T3 patches plus Scient-owned registries and CI policy | They determine whether selected M1 features and later Scient work remain maintainable | Hostile merge rehearsal through the actual M1 seams: project initialization, source/PDF handling, settings or provider onboarding, composer behavior, and relevant dependency updates; include skills only if its late-M1 plan has opened |
| Credential, data, and release-safety audit | **Audit the exact implicated path before its feature or distribution gate** | Preserve T3 behavior where it is sound; change only demonstrated gaps in credentials, private state, selected M1 file access, identity, telemetry, updater, or release authority | Bootstrap can inherit the verified T3 baseline; shipping and sensitive features need focused proof | Exact-path audit and focused failure tests; no new restriction or parallel security layer without a demonstrated threat and user-compatible design |
| Cloud and mobile foundations | **Inventory and preserve at bootstrap; prove before use** | Keep the freshly selected T3 cloud, relay, web, and mobile paths buildable where practical; Scient owns scientific identity, authority, and sync semantics | Selected-user cloud is planned soon and mobile adaptation should not require a scientific-model rewrite | Bootstrap: topology, preservation, no accidental live endpoint or data. Before enablement: portable contracts, authorization, isolation, offline/conflict, recovery, and operations |
| Release qualification | **Integrate first before distributable artifacts** | T3 release pipeline plus additive Scient verification | A built package is not proof that the real signed application starts | Packaged startup, renderer readiness, signing evidence, updater identity, rollback, clean-artifact proof |
| Upstream and contribution governance | **Integrate first as process** | Adapt Scient intake, SHA pinning, review, and divergence evidence; do not port stale branches | Regular T3 merging depends on disciplined authority and evidence | Fetch-only upstream, exact baseline, separate update lane, reproducible review and verification |

This gate includes the value represented by S55, C28, C42, C44, C45, C47,
C48, C51, C52 and the useful conventions from B14. It carries P21 and C43 as
requirements, but the full released-migration lineage system should be
re-derived only after the new Scient lineage has real releases to protect.

### 5.2 Gate B: Selected M1 Scient Capabilities And Post-Migration Product Work

This table now distinguishes the Scient capabilities explicitly selected for
M1 from new scientific product work that should follow the migration. Moving
to T3 must not force the Scient Agent roadmap into desktop cutover.

| Capability | Plan decision | Best implementation | T3 relationship | Quality boundary |
|---|---|---|---|---|
| Project inspection and initialization | **Integrate first in M1** | Move or re-establish `@scientfactory/project-init` as a Scient-owned package; keep planning, containment, idempotency, and recovery headless | Thin adapter into T3 project creation/opening; do not substitute `t3.json` for the Scient project contract | Opening remains write-free; initialization is previewed, additive, race-safe, non-Git, and recoverable |
| Serious skills library and user/project control | **Target the end of M1, with an explicit option to defer until immediately after migration** | Write a separate product and implementation plan when this lane opens; do not port the minimal current feature merely to satisfy migration parity | Reuse T3 discovery, delivery, and presentation where they fit, with deliberate app changes only after the focused plan decides the strongest experience | M1 must not ship a rushed skills foundation. Scope, storage, import, trust, adaptation, and update behavior remain later decisions, not omissions in this plan |
| M1 capability-owned records | **Integrate only what the selected M1 features require** | Persist project initialization, source identity, and PDF intake without prebuilding skill, scientific-task, proposal, decision, or agent-run models; add skill state only if the late-M1 plan is accepted | T3 stores host references and presentation state; selected Scient records remain portable | Reopening the selected M1 state works without cloud or provider sessions; migration scope does not manufacture the later scientific domain model |
| Governed agent work and researcher review | **Post-migration Scient and Scient Agent product work; not M1 or cutover** | Design context receipts, operations, proposals, decisions, receipts, recovery, and manual review with the Scient Agent roadmap | Reuse T3 execution and presentation machinery where it fits; do not justify an agent gateway as migration parity | Must eventually prove inspect, edit, accept, reject, apply, and recover, but no placeholder contract or UI is required to migrate the desktop foundation |
| Scientific Studio (working name) | **Extreme-priority P1; explicitly not M1** | Build a new first-class scientific home inside each open project for workflows that deserve dedicated UI beyond chat and the ordinary side panel | Scient-owned product surface mounted through the smallest strong T3 application seam; do not port the inherited coding Studio or Kanban model | The final name remains open. It is not a project hub: the project is already the containing workspace. Scope must grow from real scientific surfaces rather than becoming a generic dashboard |
| Mathematical and bidirectional text correctness | **Integrate first in M1 with the first transcript surface** | Rebuild this capability to a higher standard than current Scient: robust KaTeX/LaTeX handling, direction inference, and explicit mixed-content boundaries with scoped styling | Small deliberate presentation divergence in composer, Markdown, message, and applicable export wrappers | Currency is not misparsed as math; mixed Hebrew/Arabic/LTR content, inline and block math, code, links, copy, selection, accessibility, and print/export remain correct |

M1 in this gate includes C01-C02, S18, C29, and only the feature-specific
portions of C54 and C55 that the selected M1 capabilities actually require.
C03-C04 and S26 enter M1 only if the later skills gate accepts them; otherwise
they move intact to immediate post-migration planning. C05, B01-B05, and
related agent-review work remain evidence for the separate post-migration
Scient Agent product. The 19 old RPCs and 27 shared modules must not be ported
as bulk inventories.

Current Scient's math and bidi behavior is evidence of the user need and useful
edge cases, not the M1 quality target. The migrated app should be stronger
across input, streaming and completed transcript rendering, nested Markdown,
mixed-direction paragraphs, equations, code, links, selection, and copy. This
is a correctness requirement for scientific communication, not optional visual
polish.

#### Skills platform direction

This subsection records product intent for the later focused skills plan. It
does not settle the feature's implementation design or make skills an early-M1
architecture dependency.

The first skills work should not merely recreate the current built-in package,
Skill Authoring toggle, or project activation lock. Those are valuable evidence
and accepted constraints, but the new product should establish a serious,
inspectable skills library in which a researcher can make an eligible skill
available, activate or deactivate it, choose user-wide or project scope, see
the effective state, and create a project-specific adaptation with visible
lineage rather than a hidden prompt override.

“Global” must not remain ambiguous. The product should distinguish at least a
local user scope across projects on one installation, project scope recorded in
portable project state, and any later account-synchronized scope across devices.
The user may choose among the scopes a skill safely supports; capability,
project-policy, or trust restrictions may prevent an unsafe scope rather than
being bypassed as a preference.

A researcher should be able to add a local custom skill without first creating
a cloud profile or publishing it. The exact storage design remains open, but a
user-controlled local library or folder plus explicit project references is a
valid candidate. Account identity becomes necessary when Scient synchronizes,
shares, publishes, or applies organization policy to a skill—not merely to use
one locally. Imported skills must remain inspectable and untrusted until their
origin, identity, requested capabilities, and conflicts are reviewed.

This direction preserves ADR-0003's accepted ownership, immutable identity,
exact project activation, no-silent-update, and provider-as-delivery rules. It
may require an explicit amendment to the earlier declared-scope model and to
the package's current repository location. The migration decision must
reconcile ADR-0003 rather than silently treating the old implementation as the
finished feature or the new proposal as already accepted architecture.

### 5.3 Gate C: Source And Artifact Foundation

Scient is source-centered. The old features should be rebuilt around durable
project material rather than copied as ephemeral chat conveniences.

| Capability | Plan decision | Best implementation | Divergence decision | Important future consequence |
|---|---|---|---|---|
| PDF and selected scientific-source intake | **Integrate a focused PDF/source path in M1 after the minimal project record exists** | The separate feature plan selects the initial file types and the smallest durable source identity required; it must not silently turn M1 into a universal dataset and document system | Scient-owned source behavior with a thin T3 file-access and reader adapter | Chat can refer to the selected project source instead of making the provider attachment the only copy; broader datasets, CSVs, and document workflows require their own product scope |
| PDF reading | **Integrate first in M1 for the source workflow** | Reuse proven PDF rendering components or libraries behind a Scient source-reader contract; choose a reader architecture with selection, page/region coordinate, overlay, and extension capabilities without implementing the annotation product | Mostly separate UI; small T3 dispatch and signed-file adapter | Stable source identity and content version are required in M1; do not freeze a PDF-only annotation schema before the cross-artifact design |
| Scientific annotations | **P1 scientific product; explicitly not M1** | Design one elaborate Scient-owned annotation system for PDFs, figures, graphs, images, and later scientific surfaces, with durable identity, target-specific anchors, content version, author, provenance, status, relationships, and evolution rules | Reuse T3 capture and presentation machinery through target adapters where it fits; do not treat composer-scoped preview annotations as canonical project records | M1 viewers must leave usable capture, coordinate, overlay, and extension seams; the later system must survive reopen, detect stale anchors, remain manually editable, and connect to evidence without silently becoming accepted evidence |
| Material selected outside the project folder | **Decide inside the focused source/PDF plan, not in this plan** | Determine then whether the initial behavior copies material into the project, references its original location, or offers an explicit choice | Do not add a broad arbitrary-absolute-path bypass to T3 merely to avoid making the product decision | The chosen behavior must explain portability and what happens if the original file moves or becomes unavailable |
| Generic non-image chat attachments | **Do not port Synara's implementation as-is** | First satisfy scientific files through durable source/artifact intake; add bounded ephemeral attachment support later only if a verified workflow remains | Avoid immediate changes across every provider adapter and chat union | Prevents scientific material from becoming disposable provider payload |
| HTML, local-file, and generated-artifact preview | **Use T3's browser and preview system as-is in M1** | Do not port C08-C09 or add a general Scient provenance, trust, or staleness layer during migration. After migration, recheck concrete gaps such as local HTML behavior, relative assets, live refresh, and generated-artifact open cards against then-current T3 and Synara | No M1 divergence or parallel browser manager | A later gap must be demonstrated as missing user behavior, not justified by a generic security label. Any future restriction must solve a specific threat without unnecessarily blocking legitimate files |
| Durable generated images and screenshots | **P1 immediately after migration; not an M1 or cutover requirement** | Reimplement the intended user behavior as artifact ingestion plus durable attachment projection; reuse T3 lightbox/compression | Proposed small hot-lane divergence after a renderer seam exists | Generated images should remain visible after reopen and connect to the task, inputs, code, and later figure record |

This replaces a naive direct port of S10, S14, C08, C09, S36 and the current
B08-derived image work. The value is retained, but its durable object model is
improved.

Source and PDF intake is an M1 scientific capability, not a port of the old
file viewer or a commitment to support every scientific file type. Its focused
feature plan must establish the source identity and local access needed by the
selected initial workflow while reusing T3's stronger generic viewing
infrastructure. Its reader
must be structurally capable of supporting later selection, region capture,
overlays, and target adapters, but M1 does not implement or prematurely freeze
the annotation model. The P1 annotation project should define a cross-artifact
scientific capability rather than adding PDF-only comments. Generated image and
screenshot durability is also deliberately separated from M1: it remains
valuable P1 work, but it must not expand or delay the migration itself.

### 5.4 Gate D: Researcher-Ready Host Experience Before Broad Public Cutover

These capabilities are not all required for the earliest internal proof, but a
public successor should not quietly regress important researcher workflows.
Current-user usage must decide whether any item becomes a strict cutover
blocker. An item explicitly assigned to P1 below remains post-M1 work despite
being inventoried in this host-experience gate.

| Capability | Plan decision | Best implementation | Divergence decision | Guardrail |
|---|---|---|---|---|
| Guided provider connection | **Integrate in M1 for the provider drivers already present in the selected T3 baseline** | Write a focused onboarding plan when this lane opens, then redesign the non-developer journey against T3 `ProviderInstance` and driver capabilities rather than porting current Scient screens | Proposed host-native divergence in provider lifecycle, authorization, onboarding, and settings; no new provider driver is required for M1 | A scientist can discover, connect, verify, understand, and recover a supported existing-T3 provider without using a terminal or being shown a false success state |
| Managed provider lifecycle | **Plan and implement in the M1 provider-onboarding lane only for the lifecycle promises Scient deliberately makes** | Use T3's stronger driver architecture; the focused plan decides installation, repair, update, rollback, disconnect, and sign-out behavior per existing driver instead of assuming every driver supports the same actions | Host-native divergence where the accepted user journey requires it; do not port the old closed provider union or static recipe table | Never claim an action the driver cannot safely complete; explain stage-specific failures and preserve credential isolation, recovery, and clean disconnection where promised |
| Provider secret durability | **Required** | Reuse T3 secret store with Scient atomic-write, fsync, and private-permission guarantees where the audit confirms a gap | Narrow server hardening | Crash, permissions, replacement, and stale-secret tests |
| Voice | **Integrate in M1 as a day-one capability through its own focused plan** | Rebuild the successful Scient product behavior to a higher standard through a portable transcription contract and narrow microphone/IPC/composer adapter; decide online, offline, fallback, model delivery, and packaging when implementation begins | Proposed bounded desktop/composer divergence; do not transplant the old subsystem blindly | Fast and understandable recording and transcription, multilingual accuracy, privacy, permission, cancellation, visible state, error recovery, accessibility, and packaged reliability |
| Activity and notifications | **Keep T3 notifications as-is in M1; build the complete Scient activity center in P1** | First experience and classify T3's notification behavior. Then derive scientific activity from runs, operations, review, and project state and use T3/OS delivery selectively | No notification divergence in M1; later add a separate Scient activity model with bounded host adapters | The activity center may coexist with notifications or replace only selected categories. Decide routing from evidence; avoid duplicate owning events, duplicate alerts, and competing status stores |
| Prompt history | **Keep for later/P2; not M1 or P1** | Recheck T3 first; add a small store and bounded composer keyboard integration only if the need still justifies a local feature | Proposed small composer patch only if T3 still lacks an adequate implementation | Preserve drafts and attachments, respect IME/menu/caret behavior, accessibility, and reset semantics |
| Selection as context | **Defer to the P1 scientific annotation system; do not implement independently in M1** | Let an annotation or selected scientific target become a visible typed context item with exact identity and provenance; use T3's generic implementation if it arrives and satisfies the non-scientific need | Annotation-system adapter plus only the smallest necessary composer integration | Exact target, range or region, content version, freshness, removal, and user visibility; no invisible prompt stuffing |
| Curated What's New | **Integrate first in M1 as a day-one release feature** | Build a polished Scient-owned release-communication system from the strongest current lessons; make entries complete, readable, dismissible, and easy to reopen | Reuse stable T3 shell or presentation primitives where useful, but keep content, release identity, and history Scient-owned | Show only verified Scient behavior; never present T3-branded notes as Scient history or let inherited release data define the Scient release |

The one-click PKCE branch may contain useful design work, but it is not an
implementation source until its provenance is recovered. Provider onboarding
must be built from requirements and current T3 architecture, not from an
unverified branch claim.

The M1 provider objective is not feature parity with current Scient and does
not require a new driver. It keeps the provider drivers present in the freshly
selected T3 baseline. At the 2026-08-02 evidence snapshot these are Codex,
Claude, Cursor, Grok, and OpenCode, but the exact set must be refreshed with the
implementation base. The focused onboarding plan then defines a calm,
end-to-end connection experience for those drivers and states exactly which
lifecycle actions Scient supports. T3's provider-instance and driver design is
the foundation; Scient owns the supported-provider promise and the quality of
the journey.

Voice is also an M1 continuity requirement because researchers already rely on
it and the first migrated release must not remove vocal interaction. Current
Scient supplies behavioral evidence, not the target implementation. Its
focused feature plan should make recording, transcription, cancellation,
permissions, failure recovery, multilingual use, privacy, and packaging clear
before implementation while preserving T3's stronger composer and session
behavior.

## 6. Deferred And Open Capabilities With Explicit Prerequisites

Some of these capabilities are strategically aligned but deferred; others are
still open questions whose inherited user value must be separated before a
product decision. Deferral protects quality, while inclusion in this section
does not silently approve an undecided feature.

### 6.1 Automations And Background Research

**Decision: P2, or late P1 only if earlier product evidence justifies it.
Recheck T3 before Scient owns generic scheduling infrastructure.**

Scheduled research is strongly aligned with Scient: source watching, recurring
analysis, nightly synthesis, data refresh, reproducibility checks, and long
running project work. It is not migration scope or an assumed P1 commitment.
Before scheduling it, recheck the then-current T3 product for a strong generic
scheduler, background-worker lifecycle, and notification integration that
Scient should reuse rather than duplicate.

Keep two responsibilities distinct. Generic host scheduling and background
execution may remain T3-owned if T3 supplies them well. Scientific automations
remain a later Scient product capability: their scientific intent, schedule,
run envelope, source scope, outputs, receipts, approvals, recovery, and
provenance belong to Scient. Do not port Synara's automation tables and UI
directly. The scheduler and OS/background worker are adapters; the scientific
operation and run remain Scient-owned project state.

Prerequisites:

- durable operations and receipts;
- bounded authority and approval policy;
- restart and missed-run semantics;
- overlapping-run and concurrency policy;
- resource, network, credential, and filesystem scope;
- visible outputs, failures, stale results, and cancellation;
- deterministic time and recovery tests.

### 6.2 Inherited Conversation Features And Possible Scientific Successors

**Decision: none of these capabilities belongs in M1. Cross-thread messaging
and provider handoff are important post-migration capabilities; the remaining
items stay individually open.**

The earlier heading compressed several different capabilities into language
that sounded like a new scientific system. The inherited or current-lineage
evidence is more concrete:

- pinned messages and text markers mark transcript material as important;
- thread notes and environment recaps preserve local conversation or session
  context;
- sidechat and message forks explore an alternative conversation without
  losing the original;
- cross-thread references and messages let one conversation use or contact
  another; and
- provider handoff continues the same conversation through another provider or
  execution target.

Those needs come from S16, S17, S20, S43, P13 and C23. Cross-thread messaging
and provider handoff are now explicitly wanted after migration, but their exact
P1/P2 order remains open. They should be rechecked against the then-current T3
and Synara behavior before Scient owns new chat seams. Pinned material, thread
notes, environment recaps, sidechat, message forks, scientific variants, and
memory-like successors remain separate undecided questions.

Possible future scientific successors are also separate product questions:

- project records and artifacts that can be referenced from any conversation;
- named analysis or interpretation variants with provenance;
- durable decisions, questions, notes, and bookmarks;
- explicit context references rather than transcript copying;
- continuation or handoff between execution targets without changing
  scientific identity;
- comparison, merge, supersession, and abandonment semantics.

These are new or expanded scientific concepts, not descriptions of one feature
Scient already has. First experience T3's current chat, branching, context, and
continuation behavior. Then evaluate each inherited need and each scientific
successor independently against the project model. Some may use T3 as-is, some
may become Scient-owned records, and some may be rejected.

### 6.3 External MCP Clients And Extensibility

**Decision: P2 discussion; no M1 or P1 implementation commitment.**

External MCP clients can extend Scient, but they introduce identity,
capability-discovery, credential, network, approval, revocation, audit, and data
exfiltration risks. Reimplement P02 only after the Scient gateway establishes a
default-deny capability model. Extensions must never obtain canonical project
authority by installation alone.

### 6.4 Provider Usage, Cost, And Limits

**Decision: planned later against T3 provider instances and Scient task
receipts.**

The old provider-usage panel should not be ported because it is keyed to the
old provider model. Future usage should distinguish provider account, instance,
model, access source, Scient-managed versus user-paid cost, task, estimate,
actual usage, missing telemetry, and rate-limit state. It should support user
understanding and project budgeting rather than gamification.

### 6.5 Additional Providers

**Decision: Antigravity and Factory Droid are P1 candidates, not M1 parity.
Recheck T3 immediately before implementation and add either one only through a
replaceable driver boundary when an adequate upstream implementation is still
absent.**

The initial host already gains T3's Codex, Claude, Cursor, Grok, and OpenCode
drivers. Native Scient remains a separate first-party execution target.

- Factory Droid is wanted in P1. Its current Scient behavior and reliability
  cases are valuable evidence, but the old closed-union adapter should not be
  transplanted. Rebuild it against T3's open `ProviderDriverKind`, instance
  registry, driver, capability, and generic settings boundaries. If T3 ships a
  sufficiently reliable native Droid driver first, use and extend that driver
  instead of maintaining a duplicate.
- Antigravity is also wanted in P1. It is not the same provider integration as
  Gemini CLI: both may expose Gemini-family models, but they use different
  executables, protocols, authentication, approvals, model discovery, and
  session behavior. Current Scient's migration of historical `gemini` settings
  to `antigravity` is local compatibility behavior, not proof that the products
  are interchangeable.
- Before selecting the first Google-provider implementation, verify the real
  access path used by the students in scope. A paid Gemini subscription must
  not be assumed to authorize Antigravity CLI, or vice versa. If their existing
  entitlement maps to Gemini CLI and T3 ships that driver adequately, the
  upstream Gemini path may solve the urgent user need better than a local
  Antigravity driver.
- At the official T3 `main` snapshot inspected on 2026-08-02
  ([`e60821f0`](https://github.com/pingdotgg/t3code/tree/e60821f0e0d82a5d671ca3b94719c49d333921c8)),
  Gemini appears only in the
  [`AddProviderInstanceDialog`](https://github.com/pingdotgg/t3code/blob/e60821f0e0d82a5d671ca3b94719c49d333921c8/apps/web/src/components/settings/AddProviderInstanceDialog.tsx)
  **Coming Soon** list; no Gemini, Antigravity, or Droid driver is registered in
  [`BUILT_IN_DRIVERS`](https://github.com/pingdotgg/t3code/blob/e60821f0e0d82a5d671ca3b94719c49d333921c8/apps/server/src/provider/builtInDrivers.ts).
  T3's public [Gemini request](https://github.com/pingdotgg/t3code/issues/424)
  and [Antigravity request](https://github.com/pingdotgg/t3code/issues/3056)
  remain open, while found Gemini, Antigravity, and Droid implementation pull
  requests were closed without merge. This makes upstream arrival plausible,
  not guaranteed.
- Build Antigravity as a bounded driver module only if it remains missing when
  P1 starts. Preserve conformance tests for completion, streaming, approvals,
  cancellation, authentication, model discovery, stale sessions, and runtime
  replacement so an adequate later T3 driver can replace the local one with a
  deliberate data and behavior transition.
- Direct Gemini CLI should normally arrive from T3 if its supported
  implementation lands. If it remains absent and researchers need it
  independently of Antigravity, evaluate it as its own provider rather than an
  alias.
- Pi remains a later candidate if real researcher need justifies it.
- Kilo should normally be reached through the OpenCode-compatible path unless
  a distinct driver provides demonstrated value.
- Adapter hardening commits become provider conformance and lifecycle test
  cases. They are not patches to transplant, and P1 status does not authorize
  carrying the current bespoke Antigravity release scraper or another parallel
  provider framework into the new application.

### 6.6 Subagents And Task Hierarchy

**Decision: important post-migration product work; explicitly not M1. Preserve
the reliability requirements, but do not port the current Scient/Synara
thread-tree implementation.**

Scient will need delegated subtasks. Their durable meaning should live in
scientific tasks, operations, runs, parent-child authority, outputs, and
receipts. The current Scient subtree deletion and lifecycle work supplies
valuable tests for descendant cleanup, cancellation, stale scope, archival,
and provider settlement. The Scient agent and host adapters should implement
those contracts later without making chat-thread hierarchy the canonical task
model. Provider-native subagents that T3 already supports may continue to work
through T3; that does not require Scient to build its own delegation product in
M1.

### 6.7 Browser-Aware Chat And In-App Browser Control

**Decision: high-priority post-migration decision; use T3's browser and preview
as-is in M1 and recheck both T3 and Synara before implementing.**

Scient should eventually let an authorized conversation understand the active
in-app browser state and use the browser deliberately: inspect tabs and pages,
open and navigate, capture a page or screenshot, interact when authorized, and
return visible results to the conversation. This is generic host and agent
interaction, not a reason to create a second Scient browser.

A targeted read-only inspection of freshly fetched Synara `main` at
`1eb7b2cc84083a1ae1b421a1af4effc9fc9f36c7` found that its 2026-08-01
`65f6684a` change primarily improved presentation of an existing browser-tool
catalog and its Codex health probe, while `1eb7b2cc` added scoped local-HTML
preview behavior. This is useful recent evidence, not proof that Scient should
port the implementation. Current T3 already has substantial preview-automation
and browser infrastructure. The post-migration decision should compare exact
capability, authorization, visibility, and maintenance gaps at that later
baseline and either use T3, contribute a general seam, or build only the
missing Scient behavior.

### 6.8 Platform Expansion

**Decision: cloud and mobile readiness begin with the foundation; user-facing
enablement remains separately gated.**

- Linux packaging and installed-package acceptance should become required
  before Scient publicly claims Linux support.
- Preserve and revalidate T3's current cloud, relay, web, and mobile foundations
  at the exact selected baseline instead of pruning them as unused surface.
- Build production-dark cloud canaries early enough to shape identity,
  authorization, persistence, synchronization, offline, conflict, revocation,
  backup, and recovery semantics. Do not use production credentials or live
  user data for architectural proofs.
- Enable cloud for a selected cohort only after the dedicated cloud gates in
  Part III. Restricted enablement is a real service release with security,
  privacy, operations, support, incident, and rollback obligations; it is not
  equivalent to broad public availability.
- Mobile should later begin with reading, capture, review, approval,
  notification, and continuation. New features should provide portable
  contracts and presentation inputs now, but should not manufacture unused
  mobile UI or promise full desktop parity.
- Cloud mirroring and collaboration must follow the Scient project model and
  authority semantics, not T3 relay, account, session, or storage state by
  convenience. The local project must remain useful and recoverable without
  the service.

## 7. Keep As Evidence Or Opportunity, Not Current Product Work

| Capability | Decision and reason |
|---|---|
| Tool-call inspector | Keep the need for understandable execution details; build as a sibling activity renderer only when scientific runs need more than T3's inline details. |
| Thread/session export and import | Preserve for cutover and user portability; design project-level export instead of permanently importing every provider transcript format. |
| Queue-versus-steer preference | Small real preference, but it touches a hot send path and does not affect scientific truth. Add only after usage shows need. |
| AppSnap native screenshot capture | Standard screenshot paste covers most value. Reconsider only with demonstrated use and a platform-neutral capture story. |
| Share conversation as image | Presentation convenience with high chat coupling. Reconsider only if scientific communication evidence supports it. |
| Theme packs | Do not port the editor. A later Scient design system may expose bounded tokens or accessibility themes without forking T3's full CSS architecture. |
| Prompt/provider performance bundles | Reprofile the actual T3-derived application. Retain hypotheses and measurement scripts, not tree-specific fixes. |
| Checkpoint working-index cache | The current Scient fix is strong and isolated. Reimplement or propose upstream after benchmarking the T3 driver; it is an optimization, not a cutover blocker. |
| Migration-lineage guard | Re-derive a slim guard once the new Scient application has released migrations. Do not reuse old tag counts, digests, file names, or assume a high numeric range cannot collide. |
| Browser-test corpus | Preserve high-value behavior and visual scenarios. Rebuild focused tests against surviving T3/Scient components; do not port thousands of lines tied to removed components. |
| Worktree cleanup and SQLite tuning | Retain as operational hypotheses. Implement only after T3-specific reproduction and measurement; do not import incompatible locking assumptions. |

## 8. Capabilities To Use From T3 Without Porting Scient Code

The following are valuable, but T3 should remain their implementation owner:

- browser and preview runtime, device controls, automation broker, crash
  recovery, tabs, local-server discovery, mini-player, picture-in-picture, and
  preview-annotation capture for DOM elements, regions, freehand drawings,
  comments, style requests, and annotated screenshots;
- right panel, file browser, file preview, editor basics, inline file comments,
  workspace search, settings search, sidebar search, and terminal;
- Git status, diffs, checkpoints, worktrees, source-control hosting, pull
  requests, stacked actions, generated Git text, and PR-template discovery;
- add-project, local folder, Git URL, GitHub, GitLab, Bitbucket, and Azure
  source flows;
- session engine, activity projection, approvals, pending input, plan state,
  thread settlement, archive behavior, backend supervision, reconnection, and
  transport recovery;
- common provider drivers, provider-instance identity, skill discovery,
  provider-reported slash commands, runtime modes, model support, and provider
  snapshot caching;
- image compression, image MIME parsing, attachment storage and confinement,
  lightbox presentation, file-line review comments, IME guards, scroll
  anchoring, changed-file cards, and transcript rendering foundations;
- Electron shell, window state, native titlebar behavior, environment
  resolution, packaging, signing, notarization, updater state machine, and
  release artifact creation;
- React compiler and current frontend/toolchain foundations.

Scient may add bounded product behavior around these systems, but it should not
carry parallel implementations or refactor them merely to match legacy code.

## 9. Capabilities And Implementations To Reject

### 9.1 Reject As Future Product Shape Or Implementation Source

- **Inherited coding Studio and Kanban implementation.** Their code-centered
  workspace, chat-output folders, and board model should not define the new
  product. Scient will instead build an extreme-priority P1 scientific Studio
  inside each project, under a final name still to be chosen, for first-class
  scientific UI beyond chat and the normal side panel. Useful interaction
  lessons may be retained without porting either inherited implementation.
- **Pull-request inbox as a primary product surface.** Retain T3's source-control
  tools for power users; do not make PR management a defining Scient workflow.
- **Split chat panes and sidechat as copied layout features.** Scientific
  comparison and multi-view work should be designed around sources, evidence,
  variants, analyses, and artifacts.
- **Profile streaks, activity heatmaps, and share cards.** Replace vanity usage
  metrics with project provenance, progress, review state, and meaningful
  research activity.
- **Full theme-pack editor and legacy UI-polish port.** Build a coherent Scient
  design system when scientific surfaces exist; do not sustain a fork of T3's
  hottest styling and shell files for inherited cosmetics.

### 9.2 Reject As Maintenance Dead Ends

- the current Antigravity adapter implementation, bespoke release scraper, and
  downstream patch bundle as code to transplant; the user capability itself
  remains an accepted P1 candidate through T3's replaceable driver seam;
- old closed-union provider adapters and provider-specific web conditionals;
- the Synara browser, right dock, terminal, Git, backend supervisor, WebSocket,
  projection, and updater implementations;
- old Bun/Turborepo packaging scar tissue and platform-specific fixes for paths
  T3 no longer uses;
- broad performance and architecture rewrites measured against the old tree;
- bulk-porting old RPCs, contracts, shared helpers, tests, or migrations;
- global T3 namespace renaming or large upstream directory deletion;
- the removed marketing website implementation;
- a permanent dual-host abstraction layer that makes every T3 feature support
  the legacy host.

### 9.3 Retain Lessons From Rejected Code

Rejecting an implementation does not discard its knowledge. Harvest and
re-express:

- provider completion, replacement, cancellation, notification-drain, and
  session-isolation races;
- durable secret writes, path confinement, bounded image reads, and linear
  image parsing;
- no unsafe RPC mutation replay after uncertain disconnects;
- descendant-first subtask cleanup and stale-scope rejection;
- interruption, recovery, archive, retention, and partial-failure scenarios;
- RTL, IME, accessibility, responsive, and reduced-motion expectations;
- packaged startup, process containment, signing, updater identity, and clean
  shutdown proof;
- visual and interaction expectations for images, artifacts, previews, and
  scientific review.

These should become tests, contracts, review checklists, or architecture
requirements at their new owning seam, not comments referring forever to old
code.

## 10. Deliberate Divergence Governance

Scient should accept real divergence where avoiding it would surrender product
identity, scientific authority, user safety, or essential usability.

This is not a numerical cap and it must not reward inferior indirection. The
decision criterion is the best durable Scient product: prefer a separable seam
when it is equally strong, but change a T3-owned surface directly when that is
the clearest, safest, and most maintainable design. The resulting maintenance
cost must be understood and accepted rather than hidden.

| Divergence surface | Why it is justified | How to contain it |
|---|---|---|
| Identity, protocol, data directories, privacy, telemetry, release and updater | The application must be Scient and must not send data or updates under T3 authority | Central configuration, path-scoped guard, no internal namespace rewrite |
| Scient project bootstrap | T3 project configuration is not the Scient project contract | Headless Scient project package plus one host adapter |
| Future Scient gateway and operations | T3 has transport and sessions but not Scient scientific authority; this is post-migration Scient and Scient Agent work | When that feature is scheduled, use one toolkit/RPC group, explicit authorization, and feature-scoped methods only |
| Scientific activity/artifact rendering | Durable scientific work must be visible in the app | Renderer registry, sibling components, one bounded dispatch seam |
| P1 scientific Studio and later manual review | First-class scientific work cannot remain only in chat, but the Studio and governed agent review are not M1 | Add the smallest strong surface seam when the P1 Studio or a later reviewed workflow actually needs it |
| Provider onboarding and managed lifecycle | Researchers should not need terminal expertise for supported providers | Extend the driver-instance capability model; one generic flow |
| Voice and native notifications | These inherently use desktop and composer APIs | Separate service/model logic; narrow IPC and UI mounts |
| Importer and compatibility | Existing user state cannot be abandoned or opened unsafely | One-way isolated importer with no permanent dual-write path |

Every additional divergent surface needs an explicit product reason, owning
maintainer, tests, update-rehearsal result, and rollback path. “Scient had this
before” is not sufficient justification.

## 11. Conflict-Minimizing Construction Rules

1. Prefer Scient-owned packages and new directories over modifications to T3
   files when they provide an equally strong design; do not create a weaker
   abstraction merely to avoid a justified host change.
2. Keep host-neutral contracts serializable and independent of T3 IDs and
   service types.
3. Add each RPC only with the feature that needs it; never port the old RPC
   catalog as infrastructure work.
4. Keep Scient registration entries together and mechanically identifiable
   where a T3 closed map must be edited.
5. Add scientific renderers as sibling components rather than growing
   `MessagesTimeline`, `ChatView`, or `ChatMarkdown` with feature logic.
6. Add one generic provider capability model rather than per-provider settings
   and onboarding branches.
7. Keep scientific schema and migration authority separate from T3 application
   migrations. Do not reserve an arbitrary high migration band and assume it
   is collision-proof. Decide the physical database boundary through the
   persistence proof gate in Part III.
8. Do not dual-write between legacy and new applications. Use explicit export,
   import, validation, backup, and rollback.
9. Keep user-visible rebranding centralized and leave internal T3 package names
   alone.
10. Do not delete T3 mobile, marketing, or relay trees merely to reduce local
    code size; exclude unsupported products from Scient build/release scope and
    revisit deletion only with measured maintenance evidence.
11. Reprofile performance on the selected T3 baseline before carrying any old
    optimization.
12. A feature touching a hot upstream surface must pass the hostile merge
    rehearsal before its integration shape becomes precedent.

## 12. Complete Catalog Coverage Map

The IDs below refer to the repo-local
[T3 migration capability catalog](../research/source-evaluations/t3-migration-capability-catalog.md),
which preserves the source IDs and titles from Yishay's 2026-07-31 analysis.
This map
ensures the evidence was dispositioned, but the IDs are research references,
not accepted implementation tickets.

| Catalog area | Integrate first / required early | Planned, open, or keep for later | Use T3 / learn only / reject |
|---|---|---|---|
| Providers | S38; C11, C12, C13; B06-B07 | S33 and S34 as P1 Factory Droid and Antigravity behavior evidence, rebuilt only if current T3 still lacks adequate drivers; S28 as an upstream-watch/direct-Gemini decision; S31, S35, S41, P23, C14, C16-C19 | S29, S30, S32, S37, S39-S40, S42, P05-P06, P19, C15, B12; do not transplant the old Droid, Gemini, or Antigravity implementations |
| Chat UX | S18, C29 | B08 as P1; S12, S15, S60; S16-S17 and S20 retained as individually open decision evidence | S03, S05, S19, S27, S59, S62, P07, P14-P15, C32, C34, C36, B13 |
| Composer | S10 reinterpreted as M1 source intake | S07 selection deferred to the P1 annotation system; S08 as later/P2; S11, P12 and remaining S07 concepts; P13 as wanted post-migration cross-thread capability | S06, C30 |
| Files and viewers | S14 for the selected M1 PDF/source workflow | C08-C09 only after a concrete post-migration comparison with then-current T3/Synara; remaining editor conveniences only when demanded | S13, S57; T3 now also supplies settings search |
| Terminal | None | None unless a measured T3 gap appears | S02, C40 |
| Browser and preview | Use T3 browser and preview as-is in M1 | P04 as high-priority post-migration browser-aware-chat evidence; re-evaluate only concrete missing HTML, artifact, and browser-control behavior | S01, C10 and the old parallel browser/preview stack |
| Git and VCS | B10 only after measurement; no product blocker | Worktree recovery hypothesis from P25 | S44, S45, S46, S47, P27, C37, C38, C39; reject Studio/PR-inbox coupling |
| Orchestration and sessions | P21 concept; B10 optimization | S04, P03, C24, C35; B09 as important post-migration subagent evidence; S43 as wanted post-migration provider handoff; C23 remains individually open | S21, S23, S48-S49, P09, P10, P11, C22; learn from but do not port S24 or the old Studio/session architecture |
| Agent integration | None required for early M1; C03-C04 and S26 only if the late-M1 skills gate accepts them | C05, B01-B05 and P01 as post-migration Scient Agent and governed-review evidence; P02 as a P2 discussion | Do not port the old gateway or agent-control implementation as migration parity |
| Scient domain | C01-C02 and only the records selected M1 features require | C03-C04 and broader B03-B05 domain objects through their later focused product slices | None; this is Scient-owned product value |
| Automations | None before operation authority | S25 and P08 as P2 or evidence-justified late-P1 scientific-native work; recheck T3 for generic scheduling first | Do not port Synara persistence/UI directly |
| Voice | C06 product behavior rebuilt in M1; C07 only if local Whisper is selected | Offline/local runtime depth after explicit privacy and packaging decision | S09 implementation |
| Notifications | Use T3 notifications as-is in M1 | Build C27 as the complete Scient activity center in P1; broader cross-device delivery follows cloud/mobile authority | S58 implementation and duplicate status stores |
| Theming and UI | Only Scient identity, accessibility, math, and bidi needs | S50 as a future bounded design-token question | S51, P26, C31, C33; do not port legacy polish |
| Desktop shell | Only verified process-containment gaps if T3 lacks them | Re-evaluate from failures | S52, S53, S54, P24, C20-C21; T3 owns the shell |
| Release and packaging | C41-C42, C47-C48 | C43 after released lineage; C50 and B11 when Linux is claimed; C07 with voice | S56, P20, P22, C46, C49; use T3 pipeline |
| Identity and branding | S55, C44-C45 | Historical import compatibility only as long as needed | No broad internal namespace rewrite |
| Process infrastructure | C48, C51-C52, useful B14 conventions | C53 scenarios rebuilt selectively | P18, C56, stale bookkeeping branches |
| Other | C25, C28; selective C55 modules | P16, P25 after measurement; feature-scoped C54 only | S22, S61, P17, C26; do not bulk-port performance or contracts |

The catalog omitted Kanban as a separate ID. The inherited implementation is
rejected as the future product model, but the need for a first-class scientific
home is explicitly accepted as the extreme-priority P1 scientific Studio. Its
final name, information architecture, and first scientific surfaces remain
later product decisions; it is inside an already open project, not a separate
project hub.

## 13. Portfolio Decision Summary

The first migration work should not be “port the missing features.” It should
be:

1. protect identity, privacy, data, release, and update authority;
2. prove the extension and upstream-merge architecture;
3. establish only the project, source, and PDF behavior explicitly selected
   for M1, adding skills only if its separate late-M1 gate accepts it;
4. preserve T3's browser and preview rather than adding a speculative artifact
   authority layer during migration;
5. restore researcher-critical host experience without reproducing obsolete
   internals;
6. preserve cloud and mobile foundations from the start, prove production-dark
   cloud readiness, and enable selected users only on top of the accepted
   scientific project and authority model;
7. keep new Scient Agent review, Studio, delegation, and conversation-control
   products out of desktop cutover while preserving them as deliberately
   sequenced post-migration work;
8. treat Factory Droid and Antigravity as replaceable P1 provider additions,
   not M1 work, and prefer adequate T3 drivers when they arrive; and
9. deliberately reject inherited implementation shapes and cosmetic features
   that do not strengthen the scientific product.

This is a conscious direction change from the earlier Synara-first foundation,
not a rejection of Scient's first principles. The first principles remain the
same: Scient owns scientific truth; researchers retain manual control; agent
work is reviewable and recoverable; projects are durable and portable; open
source serves the product without defining it. The accepted change is to use a
better-maintained host while making those principles more enforceable.

# Part III: Proof-Gated Migration Constitution

## 1. What This Part Decides

This part converts the destination and portfolio decisions into execution
rules. When promoted, D3 authorized only D4 candidate bootstrap. It did not
create the repository, freeze either current application, assign calendar
estimates, authorize feature migration, or imply continued investment after a
failed gate.

The accepted direction is to proceed toward a fresh T3-derived Scient
candidate through a sequence of falsifiable architecture and
continuity proofs. Do not begin with a parity port. Do not treat the migration
as committed merely because the new application builds.

The capability Gates A-D in Part II answer *what belongs when*. The proof gates
below answer *what must be demonstrated before more irreversible investment or
user migration is justified*.

## 2. Accepted Phase Zero Evidence And D4 Authorization

The dated
[Phase Zero dossier](../research/spike-reports/t3-foundation-phase-zero-2026-08-02.md)
is the accepted evidence input for D3. Its T3 revision records what D3 actually
inspected; it is not a moving D4 baseline lock. Immediately before repository
creation, D4 must freshly fetch official T3 and use the then-current official
`main` tip. If a demonstrated stability problem requires an earlier revision,
record the comparison and conscious exception. Record the exact selected
revision and tag as the candidate integration base only after its pristine
baseline passes. D4 must also refresh owned repository, branch, worktree,
pull-request, and responsibility overlap immediately before mutation.

### Repository creation authorization

Yaacov authorizes D4 to create one private provisional repository,
`ScientFactory/scient-desktop-next`, with `main` as its default integration
branch. Create it from the exact selected T3 history without squashing or
replaying Scient commits. Configure:

```text
origin   -> ScientFactory/scient-desktop-next; writable
upstream -> pingdotgg/t3code; fetch-only; push disabled
```

Do not configure Synara as a candidate remote. Synara remains a donor and the
foundation of the separately supported continuity application. Preserve T3's
MIT license, applicable component notices, and source lineage from the first
commit. Repository visibility and final public naming are later decisions; no
public release follows from repository creation.

Protect `main` as the integration branch and make the first Scient change
through a short-lived bootstrap branch and draft pull request. Do not push
product changes directly to `main`, rewrite inherited history, mix upstream
maintenance with Scient product work, or claim a baseline check for any commit
other than the exact revision tested. Establish repository-specific commands
and required checks from the pristine baseline before the first Scient commit;
do not copy Synara's commands or policies by name.

### First-commit safety envelope

Before a Scient-branded candidate process starts against a developer's normal
environment, the first Scient change must establish and test one centralized,
collision-free provisional identity matrix. D3 reserves these candidate-only
values; D4 must trace every T3 source location that implements them:

| Surface | Provisional D4 value |
|---|---|
| Display identity | `Scient Next` / `Scient Next Dev` |
| App and bundle/package ID | `com.scientfactory.scient.next` with an isolated development suffix where the platform requires one |
| Executable and artifact prefix | `scient-next` / `Scient-Next-` |
| Protocol schemes | `scient-next` / `scient-next-dev` |
| User-data and development state | a new `Scient Next` root that shares no path or fallback with T3 or current Scient |
| Preview/browser partition prefix | `persist:scient-next-preview-` |
| Update feed/channel | disabled; no inherited T3 or current-Scient feed |

Service, mobile, web, and build identifiers exercised by D4 must derive from
the same candidate namespace. These are migration identities, not a second
public brand or the final cutover identity.

The first change must also:

- refuse T3's legacy user-data fallback rather than reading an existing T3
  profile;
- avoid the current Scient app's data directory, protocols, credentials,
  partitions, updater, release feed, and installed identity;
- disable T3 `AnalyticsService`, PostHog delivery, provider-account identity
  reads from `~/.codex` and `~/.claude`, and any other inherited outbound
  analytics by default;
- omit inherited OTLP/Axiom endpoints, datasets, bearer tokens, and client
  tracing configuration from artifacts;
- disable update publication and every inherited T3 release authority;
- keep cloud, relay, web, and mobile source/build foundations where practical
  but configure no live Scient or T3 service endpoint or production credential;
  and
- add the minimum divergence record and behavioral guards needed to prevent
  those protections from disappearing during an upstream merge.

The first change may preserve T3's internal package names. It must not perform
a broad namespace rewrite, introduce scientific product features, open current
Scient data, or design a replacement database.

### Risk disposition and ownership

Yaacov is accountable for accepting each gate. D4's implementation owner must
record the exact operator in the candidate repository before work begins.

| D2 risk | D3 disposition | Required exit evidence |
|---|---|---|
| Service/update/rollback churn | Preserve the T3 implementation; disable publication in Proof 1; evaluate packaged startup and rollback before distribution | Proof 1 isolation, then Proof 5 packaged update and rollback |
| Fixed T3 brand, protocol, bundle, executable, state, and preview identities | Must be removed from the candidate safety envelope before normal startup | Central identity matrix plus collision and legacy-fallback tests |
| T3 host persistence versus Scient scientific truth | T3 keeps host state; no scientific tables enter D4 | Focused persistence decision and crash/recovery spike before the first durable Scient records |
| Cloud, relay, web, and mobile identity and operations | Preserve foundations, keep production-dark, inherit no T3 authority | Build-preservation evidence in D4; Cloud Gate 1 before any selected user; mobile checkpoint before mobile claims |
| Default analytics and provider identity reads | Disable fail-closed before candidate startup | No-network/default tests and source guards in Proof 1 |
| Public OTLP/Axiom client configuration | Omit at bootstrap; later use a separately approved Scient observability design or remain disabled | Artifact/config inspection in Proof 1 and the applicable cloud/release gate |
| Legacy T3 data fallback and preview partitions | Refuse fallback and allocate new partitions | Isolated state/profile tests before candidate startup |
| Optional mobile linters unavailable in D2 | Does not block desktop bootstrap; blocks mobile release claims | Supported mobile CI/toolchain evidence before mobile release |
| No D2 visual/manual validation | Correct for evidence-only D2 and D3; no UI claim is made | Human UI and accessibility evidence at the first affected user-facing gate |

### Current-user continuity census

Yaacov owns the continuity census. Before any importer design or user-data
conversion, inventory supported current Scient releases and platforms; app and
development data roots; SQLite schemas and migrations; settings; projects and
project-init records; threads and provider sessions; attachments, generated
files, previews, worktrees, logs, and archives; credential locations and
reauthentication boundaries; updater/channel state; and any known unsupported
or corrupted histories. Use schema inspection, synthetic fixtures, and
explicitly approved sanitized examples only—never production credentials or a
broad copy of live user data.

The census must classify each data class as import, archive, reauthenticate,
regenerate, intentionally leave behind with explanation, or still unresolved.
It is required before the focused importer plan and Proof 5, not before D4
repository creation.

### D4 stop conditions

Stop D4 before feature work if the exact baseline cannot be reproduced; literal
ancestry or notices cannot be preserved; the candidate cannot avoid T3 and
current-Scient identity/state; inherited telemetry, identity reads, update
publication, or live service endpoints cannot be made fail-closed; required
cloud/mobile foundations cannot remain buildable without accepting T3 service
authority; or another active worktree or branch ambiguously overlaps the
bootstrap. Resolve or explicitly amend the plan before continuing.

This authorization ends after the pristine baseline and first safety-envelope
change. Proof 2, feature migration, user-data conversion, cloud enablement,
distribution, and release each require their own gate.

## 3. Candidate Repository, Ancestry, And Identity

Under the bounded D4 authorization above:

1. create a new owned repository from the selected exact official T3 revision,
   preserving literal Git ancestry;
2. configure an owned writable `origin` and an official T3 fetch-only upstream
   with push disabled;
3. record the integration base separately from later observed T3 tips;
4. prove the untouched selected T3 base with its own documented build and test
   commands before the first Scient commit;
5. make the first Scient changes limited to provisional identity and state
   isolation, disabling T3-owned outbound telemetry and update publication,
   minimal boundary enforcement, preservation canaries, and proof
   infrastructure;
6. keep upstream-update branches independent from product-feature branches.

The repository's migration name may be provisional, but its permanent public
identity must be chosen before its first release. Cutover does not require a
GitHub name swap. The current Scient repository, releases, and updater feed
remain intact until the new application's upgrade and rollback behavior is
proven and the support window has actually ended.

Literal ancestry enables ordinary T3 merges; it does not grant T3 product
authority. T3 code remains subject to Scient identity, privacy, security,
release, and scientific-product policy.

## 4. The Scient Contract And Package Boundary

The initial `packages/scient-*` names are a working decomposition, not a
promise to create every package before the first slice. Create only the
smallest packages needed by a real workflow.

The dependency rules are non-negotiable:

- scientific domain and operation packages do not import React, Electron,
  T3 application services, provider sessions, or agent runtime state;
- T3 host adapters translate into Scient contracts and depend inward;
- future agent adapters consume the same versioned operation and context
  contracts after that separately gated integration exists;
- cloud and mobile adapters consume the same Scient-owned identities,
  operations, permissions, receipts, and presentation inputs without becoming
  alternate scientific authorities;
- T3 thread, project, account, session, and database identifiers remain host
  references, never canonical scientific identity;
- serialized boundaries are explicit, versioned, size-bounded, and reject
  unknown or incompatible authority-bearing input safely;
- golden fixtures are shared across runtimes, while runtime-specific
  validators and internal models may remain independently versioned;
- local operation remains possible without cloud availability, and offline
  state cannot be treated as implicitly accepted, rejected, or conflict-free;
- the wire package contains no database access, process control, UI, Effect
  services, provider SDK, or product policy hidden inside serialization.

This is the useful core of Fable's `scient-wire` recommendation. JSON Schema is
one possible implementation, not an architectural mandate. M1 should version
only the boundaries its selected features actually cross. When agent,
operation, receipt, or cross-repository integration is later implemented, the
same rule prevents an Effect upgrade in T3, an agent-runtime upgrade, or
repository extraction from silently changing meaning.

## 5. Baseline-Specific Seam Contract And Divergence Control

Fable's S1-S11 inventory is a valuable checklist of likely integration
categories, but its paths, components, line numbers, and edit budgets are not
accepted facts. They were derived from an older T3 revision and have already
drifted. After the exact baseline is selected, inspect current code and define
the smallest seam contract needed for the representative M1 integration slice.

The M1 seam inspection should begin with only the categories its selected
capabilities actually touch:

- project-open and project-initialization registration;
- skills discovery, scope control, and delivery;
- source/PDF reader or surface registration;
- settings navigation and provider-driver capabilities;
- the narrow composer and transcript behavior required by voice, math, and
  bidirectional correctness;
- cloud, relay, web, and mobile registration, authentication, transport, and
  projection boundaries;
- identity, telemetry, updater, and release configuration;
- Scient persistence and importer startup boundaries.

Future RPC, MCP, scientific activity or artifact rendering, generic panel,
typed-context, agent, notification, Studio, and review seams should be added
only when their separately scheduled feature requires them. Their appearance
in Fable's inventory does not make them migration infrastructure.

For every accepted seam, record:

- selected T3 base and current source location;
- exact user behavior and why a host edit is necessary;
- Scient owner and T3 owner;
- allowed files or generated outputs;
- stable behavioral contract, not just a line-count budget;
- deterministic and integration canaries;
- expected upstream-conflict risk and rollback;
- whether a general-purpose seam should be proposed upstream;
- retirement condition if T3 later supplies the capability natively.

CI should default-deny unexplained changes outside Scient-owned paths and the
declared divergence manifest. Namespaced Scient identifiers and compact
registration blocks may make changes easier to detect. However, path and line
sentinels are only alarms. Behavioral canaries must prove that authorization,
registration, rendering, persistence, release, and failure semantics still
work after an upstream merge.

Do not turn today's seam list into dogma. Editing `ChatView`, a composer, or
another T3-owned surface is expensive but not inherently forbidden. If the
best scientific product genuinely requires it, accept a conscious bounded
divergence after demonstrating that a sibling component, registry, or upstream
extension cannot deliver the behavior. A maintenance rule must not veto core
product value without a decision.

## 6. Persistence Must Be Decided By Evidence

T3 already has the application database that the new candidate will inherit.
At the inspected current baseline its server derives `state.sqlite` from the
configured `stateDir` and runs its own numbered SQLite migrations for generic
host state such as projects, threads, messages, provider sessions, approvals,
and related projections. The migration does not replace that database or port
the current Scient database into it.

This section applies only when Scient introduces durable scientific records
whose meaning T3 does not own, such as scientific source identity, later
annotations, provenance relationships, experiment state, or reviewed results.
The open question is where those new Scient-owned tables live, not whether the
inherited T3 database exists.

Fable recommends storing Scient tables in T3's SQLite file under a separate
migration ledger. An earlier version of this plan leaned toward distinct
Scient-owned persistence. These statements concern different dimensions:
schema authority can be independent whether the bytes live in one physical
database or two.

The following are required in either design:

- Scient owns its tables, schema, migration ledger, compatibility rules, and
  recovery semantics;
- no Scient migration reuses, renumbers, or assumes ownership of a T3
  migration sequence;
- Scient code does not write T3 tables directly, and T3 code does not write
  Scient tables directly;
- cross-boundary references use explicit adapters and soft external identity,
  not hard foreign keys into T3 internals;
- backups, import, integrity checks, partial failure, migration failure, and
  rollback are tested from real fixtures;
- old Scient data is read only through the importer, never opened as if it were
  the new native schema;
- scientific records remain intelligible and recoverable if the host changes.

Before implementing durable project records, run a bounded persistence spike:

| Option | Real advantages | Real risks to prove |
|---|---|---|
| Same physical SQLite database, independent Scient tables and ledger | Simpler host backup and transaction coordination; fewer packaged files | Tighter host lifecycle coupling; migration and corruption blast radius; harder host replacement; uncertain migrator-table support |
| Separate Scient-owned database | Clear authority and lifecycle; safer host replacement and independent backup/import | Cross-database operations are not atomic; packaging and backup coordination; more recovery states |

The initial proof must exercise local crash consistency, concurrent access,
backup and restore, migration rollback, packaging, T3's current launcher, and
the host's update-migration preflight. Add project-portability, large-artifact,
cloud synchronization, offline/conflict, and mobile-continuation proof only
when the corresponding feature actually needs them. Scient tables or a second
ledger must neither cause a safe T3 update to fail nor allow a
migration-bearing update to bypass the host's rollback rules. Choose one
explicitly before Gate B durable Scient records. Do not hide indecision behind
a high migration-number range or an unverified custom-ledger API.

## 7. Legacy Data And User Continuity

Migration is a one-way, user-controlled import into the new model, not a
permanent compatibility layer.

- the new application receives a distinct data identity and must never
  silently take over the old application's directory;
- discovery and dry-run are read-only;
- import requires a backup or byte-preserving recovery point;
- conversion is idempotent or records exactly why it cannot be repeated;
- partial failure leaves both the original and accepted new records coherent;
- unsupported histories are reported explicitly and have an export/archive
  fallback rather than disappearing;
- credentials move only through OS-appropriate, auditable mechanisms; when
  safe transfer cannot be proven, the user reauthenticates;
- no dual write keeps the applications synchronized;
- each imported scientific object records its legacy provenance and any loss
  of fidelity;
- the old application can be reopened during the rollback window without the
  new application having mutated its state.

Conversation fidelity should be governed by real usage. Scient must preserve
the project records, artifacts, decisions, and source relationships users need.
It need not make every historical provider event a permanent native model if a
searchable, clearly labeled archive preserves the remaining history more
safely.

## 8. Updater, Signing, Repository, And Release Continuity

Updater behavior is not inferred from repository names. The implementation
plan must trace the actual current configuration from build inputs through the
packaged application, feed lookup, signatures, channels, download website, and
rollback.

Use packaged, signed-or-test-signed fixtures for each supported operating
system to prove:

- an existing Scient release continues to query only its intended feed;
- the candidate queries only its intended feed and cannot consume a T3 or old
  Scient artifact accidentally;
- protocols, bundle IDs, app IDs, data directories, and executable names do
  not collide;
- upgrade, downgrade where supported, failed update, interrupted update, and
  rollback preserve user data;
- repository redirects or later renames do not silently alter release
  authority;
- old and new channels cannot publish ambiguous versions or metadata;
- website downloads and checksums point to the intended signed artifact.

No arbitrary version number, repository rename, bridge duration, or release
date belongs in this plan. They should be chosen only after current
release-state and packaged cross-grade evidence exist.

## 9. Proof Gates And Investment Sequence

### Proof 0: Pristine official baseline

The selected fresh official T3 revision builds, tests, packages, and launches
under documented conditions before Scient changes. License, telemetry,
services, updater, and release assumptions are known. A failure here stops the
migration until it is understood.

### Proof 1: Scient identity and safety envelope

Provisional application identity, protocol, executable, and state directory
are isolated from T3 and the current Scient app. T3-owned outbound telemetry
and update publication are disabled, and the initial divergence record and
minimum boundary checks exist. This is enough for local candidate development;
it does not claim signing, public updater, credential migration, or release
readiness. No public artifact is distributed.

### Proof 2: One complete representative M1 integration slice

Implement a real migration-scope workflow spanning project initialization,
one supported source or PDF path, and at least one selected host-native
adaptation such as provider onboarding, voice, or mathematical and
bidirectional text correctness. Reopen and recovery must cover the state those
selected M1 capabilities actually own. Skills are not required for this proof.

This proof creates only the contracts and packages the slice actually needs.
It must not create governed scientific operations, context receipts, agent
proposals, a Scient agent gateway, manual proposal review, or a scientific
Studio merely to satisfy an architectural demonstration.

### Proof 3: Hostile upstream merge rehearsal

Freshly fetch the official T3 remote again and merge a representative
high-churn range touching the slice's real seams, such as project creation,
source/PDF viewing, provider settings, composer/transcript rendering, desktop
lifecycle, or Effect. Include skills only if its separate late-M1 lane has
already opened. Record conflict time, altered seams, test failures, manual
reconciliation, and any unexplained upstream-owned edits.

If the slice requires broad recurring resolution or its scientific contracts
shift with T3 internals, redesign the boundary before more feature migration.

### Proof 4: Source, artifact, and researcher workflow foundation

Build the M1 subset of the dependency-ordered Gate C work and the Gate D items
promoted by the current-user census. The full annotation system,
annotation-derived selection-as-context, and image or screenshot durability
remain separately scheduled P1 work and are not requirements of this proof or
desktop cutover. T3's existing notification behavior is the M1 baseline; the
complete Scient activity center is P1 and is not a cutover requirement. The M1
browser and preview system is also used as-is; C08-C09 and a general Scient
artifact-trust layer are not cutover requirements. The M1 reader must
nevertheless preserve stable source and content identity and expose the
selection, coordinate, overlay, and extension capabilities needed by the later
cross-artifact annotation design. Validate real source, file-viewing, error,
offline, accessibility, bidi, and recovery behavior.

Passing Proof 2 may justify private architectural dogfooding. It is **not** a
user cutover. It proves only that selected migration capabilities can coexist
with a maintainable T3-derived host.

### Cloud Gate 1: Production-dark readiness

Before any user receives Scient cloud access, prove one representative
scientific workflow through the current selected T3 cloud foundation or the
explicitly chosen Scient replacement. The proof must cover local operation
without the service, stable identity, authentication and project authorization,
tenant and project isolation, encrypted transport and appropriate stored-data
protection, versioned contracts, idempotent retry, offline mutation, conflict
detection and resolution, revocation, deletion and export, backup and restore,
observability, service rollback, and recovery after partial failure.

This gate uses isolated non-production environments, synthetic or explicitly
approved sanitized fixtures, and non-production credentials. Passing it means
the path is technically and operationally ready for a restricted release; it
does not mean that a public service exists.

### Cloud Gate 2: Selected-user enablement

Selected-user cloud access requires Cloud Gate 1 plus a named cohort and owner,
explicit feature and environment gating, supported data classes, user-facing
consent and state, privacy and security review, access and revocation policy,
monitoring and incident response, quotas and abuse controls where applicable,
support responsibility, backup and restore operation, rollback criteria, and a
tested disable path that does not strand or corrupt local projects.

This is a real limited service release, distinct from production-dark proof,
broad public cloud availability, and desktop cutover. Its exact scope and date
remain later explicit decisions.

### Mobile foundation checkpoint

Before the first scientific contracts become difficult to change, preserve the
selected T3 mobile build and client boundaries where applicable and prove that
the representative Scient contract fixtures and presentation inputs do not
depend on desktop-only services. This checkpoint does not authorize mobile UI
implementation or promise feature parity. Each later mobile feature still
requires an explicit product role and platform acceptance gate.

### Proof 5: Import, packaged update, and rollback

During migration, write and accept the focused existing-user transition plan.
Then prove its selected persistence design, bounded migration-only importer or
archive fallback, packaged identity, signing, update entry path, feeds,
website delivery, rollback, and old-app reopening on every claimed platform
using representative fixtures. Temporary compatibility code has a documented
owner and retirement condition. None of this must be designed in full before
the clean candidate foundation begins, but no user data may be converted and
no cutover may occur before it passes.

### Proof 6: Deliberate cutover decision

Cutover requires the M1 capabilities selected from Parts II Gates A-C, every
Gate D item made mandatory by the user census, passing Proofs 0-5, no unresolved
critical data or security issue, an accepted support/rollback window, and a
named owner for remaining divergence and upstream intake. P1 capabilities in
those portfolio sections do not become cutover requirements merely because of
their placement. Cutover is a product and release decision, not an automatic
consequence of elapsed time or feature count.

## 10. Current Scient During Migration

The existing application remains the continuity product until Proof 6. It may
receive critical correctness, security, data-protection, and currently needed
user-continuity work. Other agents' existing work is not interrupted or
repurposed by this plan.

An explicit freeze begins only after Yaacov approves its scope against the
live branch/PR/worktree inventory. It must not be retroactively assigned to a
particular version from an AI estimate. New scientific architecture should
prefer the candidate, while unavoidable continuity work should be harvested as
behavioral evidence and importer requirements rather than automatically ported.

The two applications never become co-equal permanent hosts. There is no
promise to keep every new Scient feature running on both during migration.
Portable scientific packages may be consumed by the old host when that is the
safest way to preserve important user value, but each such adapter requires an
explicit benefit, retirement condition, and cost owner.

## 11. Ongoing T3 Intake After Bootstrap

Every T3 update should keep these states distinct:

- official observed T3 tip;
- selected or reviewed upstream range;
- fork integration base;
- tested owned head;
- published candidate release;
- accepted and deployed user state.

Use isolated upstream-update pull requests. Fetch the official remote, review
the complete bounded range for product, identity, privacy, security, data,
release, licensing, and seam effects, then merge it with ancestry preserved.
Do not combine the merge with new Scient features. Run upstream baseline
checks, Scient boundary and canary checks, the selected M1 behavior suite,
cloud/mobile preservation and contract canaries when implicated, packaging
when implicated, and a divergence-manifest audit.

During the initial upstream-aligned phase, the normal outcome for a qualified
range is to retain T3's implementation with minimal avoidable rewriting while
preserving Scient's deliberate overrides. A later move to selective intake is
a product and maintenance decision, not drift caused by increasingly difficult
merges.

Prefer stable bounded batches; accelerate security and data-loss fixes. Do not
promise that every upstream commit merges conflict-free. The success criterion
is that conflicts remain few, explicit, measured, owned, and cheaper than
maintaining the generic platform independently.

Revisit every seam when T3 adds a native extension. Retire the local patch when
the native mechanism satisfies Scient's behavior and safety. Contributing a
generic extension upstream should remain an option when it reduces long-term
cost without exposing Scient-specific product policy. It should not be closed
forever or made mandatory.

## 12. Estimate Discipline

Fable's week, person-week, line-budget, freeze-version, weekly-merge, and
rollback-window numbers are planning hypotheses, not evidence. Exact estimates
before Phase Zero and Proof 3 would create false confidence because the T3 tip,
seams, persistence choice, user-continuity scope, and platform release behavior
are still moving.

Estimate only after:

1. the official base and licenses are fixed;
2. the current-user continuity matrix is approved;
3. the seam and persistence spikes are complete;
4. one real representative M1 integration slice and hostile merge have
   produced measured data;
5. platform packaging and updater fixtures reveal the actual cutover burden.

Then estimate dependency-ordered outcomes with ranges and explicit
uncertainty. Do not use a deadline to lower source, recovery, security,
accessibility, release, or scientific-trust requirements.

## 13. Reconsider Or Stop Conditions

Pause expansion and reconsider the T3 strategy if evidence shows that:

- ordinary upstream ranges repeatedly require broad edits across unrelated T3
  hot surfaces;
- scientific identity, persistence, authority, or operations cannot remain
  independent of T3 session and application internals;
- T3 cloud or mobile foundations require Scient to make T3 account, relay,
  session, or storage state canonical scientific truth;
- selected-user cloud cannot provide strong isolation, offline conflict
  recovery, revocation, backup, disablement, or local-project continuity;
- the importer cannot preserve important user state with explicit loss and
  rollback;
- updater, signing, repository, or data-directory continuity cannot be proven
  safely;
- T3 licensing, governance, release direction, or architecture changes make
  the dependency unacceptable;
- the old and new applications are becoming permanent co-equal products;
- package separation is producing a speculative framework rather than making
  the first scientific workflow simpler and more trustworthy; or
- measured upstream maintenance cost approaches the cost of owning a more
  independent host.

Stopping under these conditions is not failure. The purpose of the proof gates
is to discover whether T3 is the best host before Scient's valuable scientific
work becomes trapped inside it.

## 14. Current Authorized Next Work

D0-D4 and the bounded Proof 1 safety envelope are complete. Focused M1 work has
since established project initialization, local voice dictation, conversation
forking, product identity, and the first assisted provider-lifecycle paths.
Other M1 capabilities remain governed by their focused plans and current
implementation evidence; this paragraph is not a claim that every M1 or
cutover gate has passed.

Yaacov has selected `v0.6.0` as the first intended successor release and
authorized implementation of the release system without authorizing a release.
The release-system lane therefore owns:

1. exact-commit promotion from green `scient-desktop-next/main` to
   `release/stable` without creating a release commit;
2. manual build-only and explicitly gated publication modes for native
   successor artifacts, signing evidence, updater manifests, checksums, the
   immutable server payload, and the Scient release handoff;
3. a manual compatibility mirror in the continuity repository that verifies
   and republishes those exact artifacts for installed legacy clients without
   rebuilding the successor; and
4. a website-owned release-source cutover that prefers verified successor
   releases, falls back only while no successor release exists, and fails
   closed on successor-feed outages; and
5. integration with the established Scient What's New catalog rather than a
   parallel release-note model.

Implementation is not activation. Publication remains fail-closed until the
exact candidate, native signing, packaged startup, website delivery,
legacy-to-successor update, successor-to-successor update, data/import choice,
rollback, and claimed-platform acceptance evidence are complete and Yaacov
explicitly approves release and cutover. The old application and its releases
remain available throughout the rollback window.

# Part IV: Decision And Documentation Transition

## 1. The Documentation Must Tell Three Truths At Once

During migration, ScientFactory will have an accepted destination that differs
from its current implementation. Documentation must represent that transition
directly instead of choosing one side and making the other disappear.

Every affected document must stay within one of these truth roles:

| Truth role | What it means | What it must not imply |
|---|---|---|
| **Current implementation** | What users, repositories, releases, and operations actually do at a verified owned revision | That an accepted target or open pull request already exists in production |
| **Accepted target** | What Yaacov has explicitly decided Scient should become | That the target is implemented, verified, released, or safe for cutover |
| **Transition progress** | Which migration gate is planned, in progress, verified, blocked, or complete, with exact evidence | That elapsed time, code volume, a draft PR, or an agent report proves completion |
| **Historical evidence** | What Scient previously decided, implemented, reviewed, or learned at a dated point | That superseded material is still current guidance |

The central documentation invariant is:

> An accepted target is not current implementation, implemented code is not
> verified behavior, verified candidate behavior is not a published release,
> and a published candidate is not the accepted user cutover.

A production-dark cloud path is not a user-enabled service, selected-user
cloud is not broad availability, and mobile-ready contracts are not an
implemented mobile product.

Documents that legitimately discuss both current and target state should use
plain labels such as **Current state**, **Accepted target**, and **Promotion
condition**. They should not rely on tense, implication, branch names, or a
single ambiguous status field to communicate the difference.

Historical decisions and evidence must not be rewritten as though they were
mistakes that never happened. Superseded documents retain their original
reasoning and gain an explicit successor link. Dated review and proof records
remain point-in-time evidence.

## 2. One Owner For Each Kind Of Truth

The documentation system should remain layered rather than copying the full
migration story into every repository:

| Question | Canonical owner |
|---|---|
| What product are we building and why? | Accepted [PRD](../product/PRD.md) and product philosophy |
| Which application foundation and ownership boundaries are accepted? | Architecture decision records |
| Which technology roles are selected or still open? | [Technology stack](../architecture/technology-stack.md) |
| What is the finite migration sequence and current gate? | This active migration plan |
| What is the order of researcher outcomes? | [Product roadmap](product-roadmap.md) |
| What cloud or mobile service, client, environment, command, or deployment exists now? | The owning implementation and operations documentation at an exact verified revision |
| How do owned and donor sources relate over time? | [Open-source adaptation strategy](open-source-adaptation-build-strategy.md), ADR-0002, and the operational intake procedure |
| What code and commands exist now? | The owning implementation repository's README, development, architecture, release, and protocol documentation |
| What was inspected or proven at an exact revision? | Dated research, spike, verification, or upstream-review evidence |
| What is currently fetched, reviewed, integrated, tested, published, or retired? | Repo-local machine state plus the cross-repository source lock and accepted evidence |

Dependent documents should link to these owners. They should not restate the
same architecture or gate status in slightly different words.

## 3. Accepted Foundation Record

Yaacov accepted the durable decision package on 2026-08-02 after D2 Phase Zero
evidence. The accepted ADR and this plan authorize only the bounded D4
bootstrap; they do not authorize product features, migration, or release.

[ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
records the resulting decision:

1. select a fresh, literal-ancestry T3-derived application as Scient's target
   desktop foundation, subject to the proof and stop gates in this plan;
2. state that the existing Synara-derived application remains the continuity
   product until an explicit cutover decision;
3. preserve the independent Scient agent source-foundation decision and
   external-agent separation without claiming that its native product or
   scientific workflow is implemented, and require a fresh OpenCode baseline
   plus explicit evaluation of Hermes, Goose, and other sources before agent
   feature work;
4. preserve Scient ownership of scientific project truth, operations,
   provenance, authority, review, recovery, identity, and releases;
5. define T3 as the maintained, fetch-only upstream relationship for the new
   application while keeping ScientFactory product authority;
6. adopt an initial upstream-aligned phase using ordinary bounded
   ancestry-preserving merges with minimal avoidable rewriting, preserve
   non-negotiable Scient overrides, and require an explicit later decision
   before moving to more selective intake;
7. make preservation of T3's useful cloud and mobile foundations, local-first
   scientific authority, production-dark cloud proof, separately gated
   selected-user enablement, and later explicit mobile UI scope part of the
   target architecture;
8. preserve the right to diverge, stop, or abandon the migration if the proof
   gates fail; and
9. name the decision's consequences for ADR-0001, ADR-0002, ADR-0003,
   ADR-0004, the current desktop, and the later cutover decision.

The decision restates the still-valid agent and scientific-ownership parts of
ADR-0001. ADR-0001 is therefore `Superseded` without discarding those
decisions; its historical body remains unchanged apart from metadata and a
clear successor notice.

ADR-0002 remains `Accepted` because the final decision satisfies
its standalone ownership, fetch-only remote, mandatory awareness, selective
absorption, and review-versus-integration rules. The new decision should apply
those rules to T3's different ancestry-preserving merge relationship. If the
operating model later genuinely contradicts ADR-0002, it must be amended or
superseded explicitly rather than describing a false compatibility.

ADR-0003 remains `Accepted` until an explicit successor or amendment changes
it. The migration should preserve its app-owned authority, immutable built-in
identity, exact project activation, no-silent-update, and provider-as-delivery
decisions. The serious skills direction proposed here may change which skills
are eligible for user-wide or project scope and where the released portfolio
lives in the new application; those differences must be reconciled explicitly,
not inferred from moving to T3.

ADR-0004 remains `Accepted`. It was designed to survive a T3, Synara, or other
host and should constrain the migration rather than be rewritten around T3.

The completed workflow was: proposed ADR, Phase Zero evidence, exact human
acceptance, reciprocal ADR supersession, plan promotion, documentation
reconciliation, and explicit D4 authorization. None of those steps claims that
the candidate exists.

## 4. Active Plan Promotion Record

This document is the finite execution owner. D3 promoted the reviewed
proposition rather than creating a parallel plan that could drift from it.

The promotion:

- renamed this file to `t3-foundation-migration-plan.md`;
- changed the title to **T3 Foundation Migration Plan** and status to `Active`;
- preserved its original `Created` date and recorded promotion on 2026-08-02;
- replaced proposal language where the accepted ADR resolved it;
- added an update policy defining gate-state and evidence updates;
- linked the accepted successor ADR as the architecture authority;
- retained the capability dispositions as planning decisions, while requiring
  baseline revalidation before implementation; and
- will mark the plan `Historical` after cutover and the defined rollback/support
  window close.

The plan should own a small gate table with exact states and evidence links. It
must not become a repository-wide dashboard or repeat every task and pull
request. Detailed implementation work belongs in the repository and subsystem
that owns it.

The existing Synara-specific
[first vertical-slice implementation plan](first-scient-vertical-slice-implementation-plan.md)
is `Superseded` because this active plan now owns the executable proof
sequence. It remains preserved as historical planning context.

The [open-source adaptation strategy](open-source-adaptation-build-strategy.md)
should become the evergreen owner of the accepted T3, Synara, OpenCode, and
selective-donor relationship. The promoted migration plan should own the finite
move and link to that strategy instead of maintaining a second long-term
upstream policy.

## 5. Document Transition Matrix

The default transition for each existing documentation surface is:

| Document or surface | D3 state | D3 treatment | Later evidence-triggered change |
|---|---|---|---|
| [PRD](../product/PRD.md) | Accepted product truth; not a host-selection document | No change merely because T3 is selected | Update only if the researcher promise or product boundary changes |
| ADR-0001 | Superseded initial Synara/OpenCode foundation decision | Preserve its body, reasoning, and reciprocal ADR-0005 link | Remains historical evidence |
| ADR-0005 | Accepted T3-derived successor-foundation decision | Governs the durable target; bootstrap authority stays in this plan | Revisit only through its named evidence triggers or another ADR |
| ADR-0002 | Accepted source ownership and upstream authority | Keep accepted if compatible; link the successor ADR rather than duplicating it | Amend only if the implemented T3 relationship contradicts it |
| ADR-0003 | Accepted built-in skills ownership, identity, project activation, and delivery boundary | Preserve its accepted constraints; do not pretend the old minimal implementation is the target skills product | Amend explicitly if user-selectable scope eligibility or the released-portfolio location changes; update from real skills-product decisions and implementation evidence |
| ADR-0004 | Accepted host-independent operation boundary | No status change; cite it as a migration constraint | Update only for a real operation-boundary decision, not host plumbing |
| [Skills system](../product/skills-system.md) | Draft product home combining accepted constraints, accepted directions, and proposed skill candidates | Reconcile the serious library, scope-control, local-import, and project-adaptation direction only after explicit product review | Keep proposed, accepted, deferred, and implemented states distinct as the new product is designed and built |
| [Technology stack](../architecture/technology-stack.md) | Proposed stack direction with current and target roles separated | Link accepted ADR-0005 and keep the integrated unreleased candidate distinct from current implementation | Replace current-state claims only when exact candidate or cutover evidence exists |
| [Product roadmap](product-roadmap.md) | Active researcher-outcome sequence with migration as the current enabling track | Preserve the scientific outcome and link this active plan | Change outcome order only for a product reason, not generic parity work |
| First vertical-slice plan | Superseded Synara-specific execution plan | Preserve as historical planning context and route current execution here | Reopen its scientific outcome only through the post-foundation roadmap |
| Open-source adaptation strategy | Active evergreen T3/Synara/OpenCode relationship | Apply accepted ADR-0005 and ADR-0002 without duplicating this finite migration | Update from measured merge cost or an explicit source-authority decision |
| [Open-source adaptation map](../research/source-evaluations/open-source-adaptation-map.md) | Research synthesis with T3 as selected target evidence and Synara as continuity evidence | Link accepted ADR-0005 without making research implementation truth | Continue to record external-source learning without becoming implementation truth |
| [Capability catalog](../research/source-evaluations/t3-migration-capability-catalog.md) | Draft research index linked to this active plan | Keep as research, not a backlog | Correct entries only from verified source evidence; do not use it as a task tracker |
| [Sources lock](../../lab/external/sources.lock.md) | Active accepted-default-branch evidence for repositories and exact reviewed/tested states | Keep D4 exact state in dated evidence until the coupled strict snapshot can be updated coherently | Add the now-public candidate only through a coherent snapshot/verifier update; update later states only from accepted evidence |
| [Upstream intake procedure](../operations/upstream-intake.md) | Active operations for the current desktop, candidate, and agent relationships | Keep observed T3 tips distinct from candidate ancestry and integration state | Preserve Synara monitoring while the continuity app remains supported; retire lanes only by explicit decision |
| Dated review and spike records | Point-in-time evidence | Never rewrite them into the new decision | Add new dated evidence and link from the active plan |
| Scient README, onboarding, `AGENTS.md`, and repository map | Current four-core migration workspace | List the candidate as public source but unreleased and not yet primary | Change primary/legacy labels only at the corresponding real transition |
| Current `scient-desktop` README, `UPSTREAM.md`, and release docs | Current supported Synara-derived product and operational truth | Remain current while that product is the continuity application | Add a migration-role notice after the candidate exists and its safety envelope is proven; mark legacy/deprecated only at cutover; retain updater/support truth through the support window |
| New T3-derived repository docs | Integrated on candidate `main` | Keep exact ancestry, identity, upstream, security, divergence, testing, release, and preserved cloud/mobile build and service boundaries truthful | Mark desktop primary only at cutover |
| `scient-agent` README, protocol, and upstream docs | Current OpenCode-derived historical incumbent; native product, scientific workflow, and release still planned | Preserve that truthful status and do not claim T3 integration or a refreshed foundation choice from an architecture decision alone | Run the current foundation gate before agent feature work; record the selected foundation, capability sources, and any workers; document a desktop-agent contract and supported host only after a tested contract actually lands |
| Website and download documentation | Current public Scient distribution | No public migration announcement required by the architecture decision | Add candidate/beta distribution only after Proof 5; switch primary downloads only through Proof 6 release authority |

This matrix is a transition contract, not permission to edit every row in one
large documentation pull request.

## 6. Gate-Coupled Documentation

Documentation should move with the proof that makes each claim true.

### Before Phase Zero

Completed through D1 before the read-only evidence pass:

- the predecessor proposition merged as the reviewed planning basis;
- a narrow successor foundation ADR in `Proposed` status;
- proposed-target wording reconciled where current documents would otherwise
  hide or contradict the investigation; and
- an explicit statement that current Scient remains the supported product.

### Before Repository Creation

Completed by D3 before candidate bootstrap:

- the successor foundation ADR accepted against the refreshed evidence;
- ADR-0001 marked `Superseded` with reciprocal links while its historical body
  remains intact;
- the predecessor proposition promoted into this active migration plan;
- reconciled technology-stack, roadmap, first-slice, adaptation-strategy, and
  source-evaluation roles;
- an accepted bootstrap dossier, unresolved-risk disposition, and explicit
  repository-creation authorization; and
- a current-user continuity census scope and owner, without requiring the
  importer design before bootstrap.

### Phase Zero And Proof 0

Record current evidence without claiming a product exists:

- a dated baseline dossier under
  [research spike reports](../research/spike-reports/);
- official T3 tip, selected base, tag, license, notices, build/test/package
  commands, service dependencies, telemetry, updater, platform, and release
  assumptions;
- exact current T3 cloud, relay, web, and mobile topology, build and deployment
  boundaries, authentication and storage assumptions, and preservation
  decisions;
- exact disposition of overlapping branches, worktrees, pull requests, and
  current Scient work;
- the selected repository name and bootstrap authorization; and
- unresolved risks and stop conditions.

This separate D4 evidence change updates workspace orientation and dated
evidence with the exact owned path, origin, fetch-only T3 remote, selected
ancestry base, reviewed heads, and final candidate-main head. The parent source
lock and machine manifest remained unchanged at D4 because their coupled strict
gate required a coherent refresh and the candidate was then private. The
candidate is public now, but a later focused operations change still owns the
coherent snapshot/verifier update. Never record an observed T3 tip as the
integration base unless that exact ancestry is present.

### Proof 1

The new repository must gain its own current documentation with candidate
status:

- README and contribution boundary;
- `AGENTS.md` and repository-specific verification commands;
- `UPSTREAM.md` and machine review state;
- license and notice inventory;
- provisional Scient identity, privacy default, telemetry status,
  data-directory and protocol isolation, plus explicit statements that public
  release publication remains disabled until its focused gate passes;
- divergence manifest and boundary enforcement;
- inherited secret-handling boundary and any known gap relevant to local
  development; and
- rollback for the identity and safety envelope.

The current desktop may then receive a short continuity-role notice. Its
current implementation and release instructions remain authoritative for that
application.

### Proofs 2 And 3

Documentation should follow the representative M1 integration slice and
hostile upstream merge:

- current package and adapter architecture in the new repository;
- selected persistence decision and its proof evidence;
- baseline-specific seam contract and divergence manifest;
- current user behavior and failure/recovery semantics for the slice;
- dated merge-rehearsal evidence with exact upstream range, conflicts, changed
  seams, verification, and measured maintenance work; and
- active-plan gate state only after the evidence is accepted.

If Proof 3 changes the architecture, update the successor ADR only when its
decision changes. Ordinary implementation learning belongs in the active plan,
current implementation docs, or dated evidence.

### Proof 4

Each scientific capability should update the smallest owning documentation:
product behavior where the user promise changes, architecture only when a
durable boundary changes, same-repository current implementation for real code,
and the capability catalog only when source evidence or disposition changes.
Do not turn feature delivery into a running rewrite of the PRD.

### Cloud Gates And Mobile Foundation

Production-dark cloud evidence should document the exact service revision and
environment, synthetic or sanitized fixtures, identity and authorization
mapping, isolation, storage and synchronization contracts, offline and conflict
behavior, backup and restore, observability, rollback, and limitations. It must
not describe a service as user-enabled.

Before Cloud Gate 2, the owning implementation and operations repositories must
document the selected cohort, environment and feature gates, supported data
classes, consent and privacy state, security review, monitoring and incident
ownership, quotas where applicable, support, disablement, export, backup,
restore, and rollback. Parent Scient planning records the accepted gate and
exact evidence only after those owners make it true. Website documentation must
not imply broad cloud availability merely because selected users are enabled.

The mobile foundation checkpoint should record only verified build, contract,
fixture, and dependency-boundary evidence. Mobile product behavior and UI remain
planned until their owning implementation and acceptance evidence exist.

### Proof 5

Before any desktop migration release or user migration invitation, complete:

- user-controlled import, archive fallback, backup, idempotency, data-loss,
  credential, and rollback documentation;
- platform packaging, signing, updater, feed, channel, repository, protocol,
  data-directory, and website-delivery documentation;
- support and rollback-window policy for both applications;
- representative fixture evidence on every claimed platform; and
- candidate release notes that describe only verified behavior.

### Proof 6 And Cutover

Cutover is a coordinated documentation and release transaction across separate
repositories. No repository may claim the new application is primary before
the cutover decision and release evidence exist.

The cutover bundle should update:

- the Scient technology stack, roadmap, repository map, onboarding, active
  migration plan, source lock, and upstream-intake roles;
- the new application's README, current implementation, release, updater,
  support, and security documents from candidate to primary;
- the current application's README and support policy from continuity product
  to legacy/rollback product without deleting its release history;
- the Scient agent's documented supported host contract if that integration is
  verified;
- the website's primary downloads, channels, checksums, support links, and
  migration guidance; and
- a dated cutover record containing exact owned commits, artifacts, channels,
  rollback authority, and support-window owner.

These are separate repository pull requests with explicit dependencies and one
named cutover owner. They are not a cross-repository commit and cannot be made
truthful merely by merging the parent documentation first.

### Retirement After The Support Window

Only after the accepted support and rollback window ends should the old desktop
be marked deprecated or archived, its active Synara monitoring lane be retired,
and the migration plan become `Historical`. Preserve the old repository,
release instructions needed for supported historical versions, source lineage,
licenses, migration evidence, and final tested rollback boundary.

## 7. Pull Request And Evidence Discipline

Every migration work item should answer before implementation:

1. Which repository owns the code?
2. Which document owns the decision?
3. Is the statement current, target, transition, or historical truth?
4. Which proof gate does the work enter and exit?
5. Which same-repository current implementation docs change with the code?
6. Which parent Scient plan or evidence record changes only after the code is
   merged and verified?
7. What exact rollback or retirement condition applies?

The execution rules are:

- one repository, branch, commit history, verification set, and pull request
  per owning change;
- architecture decisions, finite planning, current implementation, operations,
  and dated evidence stay in separate logical lanes even when coordinated;
- a code pull request updates same-repository current documentation when the
  implemented interface, command, configuration, behavior, or operation changes;
- a separate dependent Scient evidence or planning change records the landed
  owned commit and accepted proof; it never predicts another PR's result;
- no document calls a branch, draft PR, test plan, or local experiment
  implemented or verified;
- no agent changes a document to `Accepted` without explicit human authority;
- no cross-repository status changes are bundled into one commit;
- indexes and successor links change with the document they route; and
- opportunistic documentation cleanup does not ride with migration work unless
  it is required for truthfulness or navigation.

A pull request description should include a compact documentation impact
statement: changed current behavior, changed accepted decision, changed plan or
gate, evidence added, downstream docs intentionally deferred, and why. `None`
is valid when the change truly has no durable documentation effect.

### Recommended Documentation And Work Sequence

| Sequence | Owning change | What becomes true | Implementation authority |
|---|---|---|---|
| **D0: Proposition** | Historical Scient documentation change | The reviewed planning direction and transition system became available without changing architecture authority | Authorized only the proposed-ADR and evidence work named there |
| **D1: Proposed foundation decision and first reconciliation** | Separate Scient documentation pull request | A narrow successor ADR is `Proposed`; directly affected documents distinguish the proposed target from current implementation | Authorizes the read-only Phase Zero evidence pass, not repository bootstrap or product code |
| **D2: Phase Zero evidence** | Scient research/evidence pull request | The exact current baselines, risks, names, licenses, bootstrap isolation choices, and unresolved questions are reviewed; see [`t3-foundation-phase-zero-2026-08-02.md`](../research/spike-reports/t3-foundation-phase-zero-2026-08-02.md) | Supplies evidence for accepting or revising the ADR; still no repository or product code |
| **D3: Foundation acceptance and planning promotion** | Dependent Scient architecture and planning pull request or reviewed stack | ADR-0005 is accepted, ADR-0001 is superseded without losing preserved decisions, this plan is active, and technology, roadmap, source strategy, first-slice, and research roles no longer contradict the accepted target | Authorizes only D4 candidate bootstrap under the accepted dossier; no feature migration or legacy-data conversion |
| **D4: Candidate bootstrap** | New repository pull requests, followed by separate Scient evidence update | Complete: the then-private candidate, literal T3 ancestry, bootstrap documentation, pristine baseline, bounded Proof 1 safety envelope, GitHub-hosted CI, and managed local development app are integrated | Does not automatically authorize Proof 2, unrelated D5 features, release, or cutover |
| **D5: Proof and feature lanes** | Independent owning-repository code/documentation pull requests plus evidence follow-ups | The identity/safety envelope, scientific behavior, production-dark cloud path, selected-user cloud release when authorized, and mobile foundation become implemented and verified only through their applicable gates | Limited to the accepted next gate; no implied desktop cutover, broad cloud availability, or mobile product release |
| **D6: Cutover bundle** | Coordinated, dependency-labeled pull requests in Scient, both desktop roles, agent when affected, and website | The new release becomes the primary Scient application and the old application becomes the legacy rollback path | Release authority only after every required proof and explicit cutover acceptance |
| **D7: Retirement** | Post-support-window documentation and operations changes | The old application and its donor-monitoring lane are retired while history and recovery evidence remain available | No deletion or history rewrite implied |

D0 and D1 form the documentation-only first slice and may be prepared as a
reviewed stack, but they must merge in authority order. D2 must inspect the
state that exists after them. Later rows cannot be collapsed merely to reduce
the number of pull requests, because each row changes a different kind of
truth.

## 8. Preventing Documentation Drift During Development

The active migration plan should contain only the scoped gate state, exact
accepted evidence links, unresolved decisions, and next authorized transition.
Detailed task lists belong with the implementation work. This keeps the plan
useful without making it a second issue tracker.

At every gate review:

1. refresh exact owned and T3 revisions;
2. verify that links and indexes resolve;
3. search active documents for stale Synara-as-target, T3-as-reference-only,
   nonexistent-candidate, and premature-primary claims;
4. distinguish observed, decided, planned, implemented, verified, published,
   cut over, and retired states;
5. update current-state claims only from exact repository or release evidence;
6. confirm superseded documents point to their successor and are no longer
   routed as current guidance; and
7. record unresolved contradictions rather than smoothing them into agreement.

Documentation is not complete merely because every file mentions T3. It is
complete for a gate when the documents necessary to understand that gate are
truthful, navigable, non-duplicative, and supported by the same exact evidence
used to accept the gate.

## 9. Gate-Coupled Required Deliverables

This plan intentionally records architecture authority, portfolio decisions,
proof gates, and documentation transitions rather than a pretend-ready
backlog. After D3 acceptance and Phase Zero, produce only when their prerequisites
are real:

- the accepted successor foundation ADR and promoted active migration plan;
- the exact repository bootstrap and baseline record;
- the current-baseline seam contract and divergence manifest;
- the selected persistence ADR and proof evidence;
- the user-continuity, importer, archive, and rollback specification;
- the dependency-ordered implementation plan and measured estimates;
- the platform verification, packaging, signing, updater, and release plan;
- the production-dark cloud proof plan and selected-user cloud enablement,
  security, privacy, operations, support, incident, disablement, and rollback
  plan;
- the mobile foundation preservation and contract-readiness plan, separate from
  later mobile feature and UI selection;
- quantitative dogfood, beta, cutover, rollback-window, and retirement
  criteria;
- the ongoing T3 intake procedure and ownership map; and
- the gate-coupled product, architecture, planning, implementation,
  operations, source-lock, website, and legacy-retirement changes defined in
  this Part IV.

A versioned desktop-agent wire contract and conformance plan becomes a required
deliverable only when the later Scient Agent integration track is explicitly
opened. It is not a prerequisite for the desktop migration or M1 cutover.

## Research And Current-Truth Inputs

This plan synthesizes, without promoting research inputs to accepted truth:

- the accepted Scient product direction and current roadmap;
- the current proposed technology-stack and open-source adaptation documents;
- source and history analysis of the current Scient, Synara, and T3 codebases;
- the complete post-Synara Scient capability assessment;
- the repo-local
  [T3 migration capability catalog](../research/source-evaluations/t3-migration-capability-catalog.md),
  including input provenance for the supplied analyses;
- `t3code-migration-full-analysis.md` supplied by Yaacov as raw research;
- `feature-parity-catalog.md` supplied by Yishay as the source catalog;
- Fable's original `proud-napping-kitten.md` investigation;
- Fable's revised seam-contract migration plan supplied by Yaacov;
- prior temporary multi-host discussion and host-adapter reasoning;
- Yaacov's separate discussion challenging whether “independent platform” had
  been allowed to imply premature repository and runtime separation.

The large raw AI-generated reports are deliberately not copied into the
documentation tree as parallel truth. Their hashes and role are recorded in
the capability catalog, while this plan preserves the conclusions that
survived source verification. External and AI-generated analyses remain
research inputs. Exact code,
performance, security, migration, and user-experience claims must be reverified
at the selected implementation baselines before they govern execution.
