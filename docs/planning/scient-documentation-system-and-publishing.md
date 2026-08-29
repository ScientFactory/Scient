# Scient Documentation System And Publishing

Status: Accepted
Owner: Yaacov
Created: 2026-08-28
Last updated: 2026-08-29
Purpose: Defines the accepted sustainable cross-repository documentation system and staged implementation program for public Scient Docs, current capabilities, architecture, development, operations, upstream divergence, planning, research, and historical evidence.
Doc type: Planning note

## Document Rules

This document owns the accepted documentation information architecture,
cross-repository authority model, public publishing direction, update triggers,
and staged migration sequence for the Scient repository family.

Yaacov explicitly accepted this documentation-system direction on 2026-08-28,
with the qualifications recorded in [Acceptance Record](#acceptance-record).
Acceptance authorizes staged implementation of the documentation system; it
does not authorize an indiscriminate file move, deploy an MCP server, change an
app release, or promote proposed product architecture into accepted direction.
The recurring rules are now promoted into their durable owners. The current
[Documentation Policy](../documentation-policy.md), repository AGENTS.md files,
contribution guidance, area indexes, desktop Help, and website publishing
architecture are operationally authoritative.

Phase 1 promoted recurring rules into the [Documentation
Policy](../documentation-policy.md), [Team Contribution
Protocol](../operations/team-contribution-protocol.md), and repository-local
agent, contributor, index, work-artifact, and pull-request surfaces. Use those
owners for recurring decisions. This accepted planning note remains the
decision record for the completed inventory, pilots, publishing proof, and
migration, plus the limited remaining release, maintenance-evidence,
automation, and MCP gates. It does not compete with the promoted policy.

Current product behavior belongs beside the implementation that provides it.
Product direction and cross-product planning belong in this Scient repository.
Website deployment remains owned by the website repository.

### Update Policy

Update this plan while implementation changes the intended documentation
authorities, public publishing model, repository family, migration sequence, or
accepted qualifications. Promote durable rules into the documentation policy,
repository guidance, and owning indexes rather than leaving this plan as a
second competing authority. Mark this plan Superseded when the durable owners
and remaining roadmap fully replace its governing role.

## Decision Summary

Scient should maintain **two authored documentation systems** and publish them
through multiple delivery surfaces:

1. **Scient Docs**: the complete public product-help corpus for people and
   support agents learning or using released Scient behavior.
2. **Engineering knowledge**: the capability, architecture, development,
   operations, upstream, planning, research, quality, and historical material
   needed to build and maintain Scient correctly.

The central rule is:

> One authoritative fact, multiple linked or generated views.

The accepted direction is:

- use **Docs** as the public website label and /docs as the public route;
- keep the authored source for current app help with the app implementation in
  ScientFactory/scient-desktop;
- keep the inherited docs/user/ path as the durable default source for that
  public-help corpus and classify it logically as **Help**;
- publish only reviewed, release-qualified pages from docs/user/ rather than
  treating directory membership as automatic public eligibility;
- make the website a renderer, navigator, search surface, and release selector
  for the same corpus, not a second prose authority;
- build any later documentation MCP as a thin, version-aware retrieval adapter
  over that same corpus, not as an independently maintained knowledge base;
- keep current implementation capability records and implementation
  architecture in the repository that owns the code;
- keep product truth, philosophy, cross-product architecture, roadmaps,
  research, quality doctrine, and cross-repository operating policy in this
  Scient repository;
- preserve useful development, operational, upstream, philosophical,
  first-principles, historical, and research documents throughout the
  transition; and
- prove the authoring and update loop with a small vertical pilot before any
  broad migration.

## Why This System Is Needed

The current repositories contain substantial useful documentation, but their
placement does not consistently explain authority or update responsibility.

In scient-desktop, docs/user/ is already the established T3-compatible location
for user-facing guidance. Its folder name does not by itself say whether a page
is a tutorial, workflow, behavioral reference, candidate, or release-qualified
statement, but that ambiguity should be solved through logical classification,
indexing, and publication qualification rather than a second help directory.
The inherited docs/internals/ name groups current Scient capability records,
architecture, contributor reference, upstream receipts, proposals, and
historical plans under one broad label.

The public website currently has a small hard-coded Docs page rather than a
complete documentation publishing system. Maintaining a second manually
written website corpus would create immediate drift from application behavior.

The large scientific-platform plans preserve valuable current-state snapshots
and source context, but several plans repeat the same implementation facts. As
Scient advances, repeating current capability truth in every roadmap would make
ordinary changes expensive and allow those copies to disagree.

The T3-derived desktop requires ongoing upstream integration. A physical
reorganization that ignores inherited paths could turn every upstream
documentation update into unnecessary conflict work.

The current scient-agent repository is an OpenCode-derived fork checkout,
not an implemented native Scient agent or a Scient-owned documentation corpus.
Its Markdown should remain outside the initial inventory and migration. The
documentation model should extend to that repository when native Scient-agent
implementation begins, without treating inherited OpenCode pages as Scient
product guidance automatically.

The target system must therefore improve clarity without requiring every
feature change to update many copies across several repositories.

## Design Principles

### 1. Nearest Authoritative Owner

A fact belongs in the repository and document closest to the authority that can
verify and change it.

- Shipped app behavior belongs with the app.
- Native-agent implementation behavior belongs with the native agent when it
  exists.
- Website behavior belongs with the website.
- Product requirements and cross-product direction belong in Scient.
- T3 or OpenCode integration details belong with the fork that performs the
  integration.

Cross-repository documents link to that owner. They do not copy its complete
current state.

### 2. Purpose Before Audience

Folder and document names should explain what knowledge they own, not merely
who might read them. A user, support agent, developer, architecture agent, or
maintainer may read several areas for different purposes.

This is a logical ownership rule, not a mandate to rename useful inherited
paths. The durable docs/user/ compatibility path can own the logical **Help**
role while its index and publishing manifest make purpose, release, and surface
qualification explicit.

### 3. Public And Internal Documents Are Different Owners

Scient Docs and capability records are related, but one is not an “internal
version” of the other.

- A Docs page teaches a person how to use released behavior safely and
  truthfully.
- A capability record describes implementation status, files, contracts,
  tests, T3 seams, limitations, evolution, and roadmap relationships.

They should link through a stable capability name or slug, but neither should
copy all of the other's content.

### 4. Version-Aware Public Truth

Public Docs should default to the current released product, not automatically
to development main. Candidate or unreleased material may appear in an explicit
preview, but it must not be presented as stable released behavior.

### 5. Plans Describe Deltas

Roadmaps own intended outcomes, dependencies, decisions, sequencing, and
acceptance gates. They should link to current capability truth rather than
maintain competing inventories of what is already implemented.

### 6. History Remains Available Without Governing Current Work

Forensic reports, migration plans, upstream receipts, retired capabilities, and
superseded proposals preserve important reasoning. Their status and placement
must prevent them from appearing current.

### 7. Prove Maintainability Before Scaling

The system should be exercised through representative capability changes and
an upstream integration before broad migration. If the update burden is high,
the model should be simplified before more documents are converted.

## Repository Authority Model

| Repository                          | Proposed documentation authority                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ScientFactory/Scient                | Product truth, product philosophy, first principles, cross-product architecture and decisions, roadmaps, research, quality doctrine, documentation policy, cross-repository operating procedures, and the compact repository-family capability map.                                                                                                                       |
| ScientFactory/scient-desktop        | Public app Docs source, current app capability records, implementation architecture, development guidance, desktop operations, T3 divergence and integration records, and desktop implementation history.                                                                                                                                                                 |
| ScientFactory/scient-agent          | Deferred from the initial documentation audit and migration. When native-agent implementation begins, this repository should own native-agent capability and implementation documentation, agent development and operations, and relevant OpenCode divergence and integration records. Its current inherited Markdown does not become Scient documentation automatically. |
| ScientFactory/ScientFactory-website | Docs rendering, navigation, search, stable public URLs, source-version selection, preview and production deployment, and website-specific behavior. It does not own a second copy of product-help prose.                                                                                                                                                                  |

The repositories remain independent. Cross-repository work uses separate
branches, commits, pull requests, and explicit dependency order under the
[GitHub Operating Model](../operations/github-operating-model.md).

## Observed Markdown Baseline

The 2026-08-28 audit found that a raw `.md` count does not describe the actual
documentation corpus. The refreshed remote heads inspected were Scient
`9a309d6bb952a3fae8c0dd3495139c7c0736b37a`, scient-desktop
`d5ff08e721086eec02a2a84ad1431b33da6f5269`, and the website
`f129246a9e59894c7bb19dc2d17b7c6ac3b0ce82`. Scient documentation alignment
[PR #99](https://github.com/ScientFactory/Scient/pull/99) and desktop upstream
alignment [PR #189](https://github.com/ScientFactory/scient-desktop/pull/189)
were merged at those heads. Desktop documentation alignment
[PR #188](https://github.com/ScientFactory/scient-desktop/pull/188) remained an
open draft and is not represented in desktop `origin/main`. Its branch was one
commit ahead and 28 commits behind current desktop main; a merge-tree check
found no textual conflict, but its existing checks predate PR #189 and do not
prove the combined baseline.

Other open desktop work also carries documentation consequences that are not
current main: PR #179 adds a managed-provider-runtime proposal; PR #121 adds
Overleaf capability and help pages plus an index change; and PR #129 adds the
substantial ComputeSession implementation, a 3,398-line proposed foundation
record, candidate public computing help, and an index change. PR #188 separately
reconciles adjacent file, analysis, LaTeX, PDF, and Artifact Studio records,
including explicit in-flight compute boundaries. Treat these as independent
candidate surfaces, not one combined current corpus.

| Repository area |                                                                                                                                                                                                                          Observed Markdown |
| --------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Scient          |                                                                                                                                              118 tracked files: 85 under docs/, 27 under lab/, three project skills, and three root files. |
| scient-desktop  | 1,070 tracked files, of which 928 are vendored under .repos/. The remaining 142 non-vendored tracked Markdown files include 113 under docs/. Three additional forensic reports under docs/reports/ were untracked in the audited checkout. |
| Website         |                                                                                                                                             Six tracked repository, contribution, and brand-support files; no authored Scient Docs corpus. |

The scoped audit therefore contains 266 tracked non-vendored Markdown
files, or 269 when the three untracked forensic reports are included. Of these,
201 are in the primary Scient and desktop documentation trees when the reports
are included. This does not make all 201 files equally authoritative: fixtures,
historical records, proposals, current implementation, public guidance, and
repository orientation have different roles.

The dated [file-by-file Markdown audit](../research/spike-reports/documentation-system-markdown-audit-2026-08-28.md)
records the purpose, authority, exact T3-base provenance, preliminary
disposition, active documentation-PR paths, metadata anomalies, and index gaps
behind these totals. It is audit evidence, not a permanent hand-maintained
registry or permission to perform its proposed dispositions.

The desktop concentration explains the current ambiguity. Its 68
docs/internals/ files contained 29 upstream or migration-history records, 20
Scient capability or current-implementation documents, 14 inherited or shared
technical references, and five proposals, audits, or old plans. The problem is
therefore not merely naming. Several kinds of authority currently share one
folder and inconsistent status conventions.

These counts are a dated planning snapshot, not a permanent registry. Refresh
the baseline after desktop documentation PR #188 or any later documentation or
upstream change lands. The current scient-agent source tree is deliberately
excluded until native Scient-agent work begins.

A final readiness recheck found that desktop main subsequently advanced to
`c0baaab2cda29a84682b77b8384bb7542e59a8bd` through
[PR #190](https://github.com/ScientFactory/scient-desktop/pull/190). That pull
request changes seven non-Markdown files, so the audited Markdown counts remain
unchanged. It does change user-visible provider/settings defaults, sensitive
email display behavior, and default agent browser/Sources access without a
documentation update. Phase 0B must reconcile its documentation impact, and
P0-DESKTOP-FORENSICS must extend the capability/PR evidence through #190,
rather than rewriting the exact `d5ff08e7` audit snapshot as if it had included
the later change.

## Proposed scient-desktop Documentation Areas

The seven areas are a logical classification vocabulary. They are not seven
required directories, and the owner-selected default is to preserve useful
inherited paths:

| Logical area | Current or default physical owner                                                                                    | Physical-path rule                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Help         | docs/user/                                                                                                           | Keep as the durable authored source for public Scient Docs. Do not create a parallel docs/help/ tree.   |
| Capabilities | Primarily Scient-owned records currently under docs/internals/                                                       | Normalize ownership during pilots; move only when clarity gain exceeds T3 merge and link cost.          |
| Architecture | docs/architecture/, focused ADRs, and current shared-foundation records under docs/internals/                        | Preserve inherited architecture paths; separate capability detail only when a proven owner requires it. |
| Development  | Existing contributor references, package READMEs, docs/internals/work-artifacts.md, and repository guidance          | Keep useful guidance beside the workflow or package it owns.                                            |
| Operations   | docs/operations/ and focused runbooks                                                                                | Keep the existing area and distinguish runbooks from product help.                                      |
| Upstream     | Root UPSTREAM.md, machine state, seam registries, and dated integration records                                      | Preserve the operational entry point and history-preserving T3 integration surfaces.                    |
| Records      | Dated reports, receipts, completed migrations, retirements, and superseded plans in their reviewed durable locations | Create or move records only through explicit disposition; do not build a cosmetic archive tree.         |

The repository docs/README.md is the compatibility map from these logical roles
to real paths. New physical areas may be proposed later only when pilots show a
durable authority benefit; completing the taxonomy is never a reason to create
empty or parallel directories.

### Help — Authored Source For Scient Docs

This area should answer how to use released Scient. The website presents it as
**Docs**.

Its navigation may include:

- getting started;
- concepts;
- workflows;
- features;
- providers and integrations;
- troubleshooting and recovery; and
- exact behavioral reference.

The physical source remains docs/user/. It can remain relatively flat. Website
navigation, page selection, and generated metadata should not force deep
repository nesting before the corpus size requires it.

A public Docs page should state only behavior appropriate to its documented
release or preview context. It may explain relevant limitations, local versus
remote behavior, platform differences, permissions, privacy and data-transfer
boundaries, recovery, and external continuation. It should not contain
implementation file maps, speculative roadmaps, unreviewed architecture, or
internal integration receipts.

### Capabilities — Current Implementation Truth

Each capability-family record should make the following questions answerable:

- what user or system outcome the capability provides;
- which behavior exists on current main;
- whether it is released, unreleased, in flight, proposed, retired, or
  platform-limited;
- which clients, providers, environments, and operating systems are qualified;
- which state or service is authoritative;
- important packages, contracts, services, UI roots, and tests;
- architecture dependencies and failure or recovery behavior;
- permissions, privacy, and local or external data-flow boundaries;
- T3 seams or other inherited-source relationships;
- open-source sources, donors, references, or compatibility oracles actually
  used;
- current limitations and non-goals;
- related public Docs pages;
- related product requirements and roadmaps;
- important PR and evolution history; and
- retirement, replacement, or upstream-adoption conditions.

Use one record per durable capability family, not one record per PR, button,
component, or minor variation.

Capability status should not be compressed into one ambiguous word. The pilot
should test a small set of separate implementation, release, and qualification
fields before a mandatory schema is accepted.

The list above is a completeness prompt, not a mandatory set of headings. The
pilot starts with only:

- stable capability identity and accountable owner;
- implementation, release, and qualification status as separate facts;
- current implementation/source owner;
- related public help, architecture, and upstream owner when applicable; and
- the change that should trigger review of the record.

Add detail only when the capability's authority, risk, dependencies, evolution,
or support needs justify it.

### Architecture — Foundations And Invariants

Architecture documents should describe shared authority, identity, lifecycle,
dependency direction, contracts, failure and recovery semantics, resource
bounds, security and privacy boundaries, and difficult decisions.

They should not repeat complete public instructions or one capability dossier
per UI feature. Hard-to-reverse accepted choices should use focused ADRs.
Cross-product architecture belongs in Scient; desktop implementation
architecture belongs in scient-desktop.

### Development

This area should preserve contributor setup, source layout, commands, tests,
debugging, fixtures, APIs, configuration, and extension guidance. Useful
inherited T3 development documentation should remain available and should not
be moved merely to make the tree visually uniform.

### Operations

This area should preserve real runbooks for development instances, releases,
publication, migrations, observability, recovery, support, and maintenance.
Operational authority must remain distinct from product explanation.

### Upstream

This area should own the current T3 integration contract and navigable history:

- current upstream base and process;
- protected Scient divergence registry;
- seam files and machine checks;
- why each divergence exists;
- conflict-resolution rules;
- upstream adoption or retirement conditions; and
- dated integration receipts.

The current root UPSTREAM.md may remain a special compatibility and process
entry point. The migration should decide what it continues to own and what it
indexes rather than moving it automatically.

### Records

This area should contain immutable or historical evidence that remains useful
but does not govern current implementation:

- forensic capability and PR reports;
- retired and removed capabilities;
- completed migrations;
- superseded implementation plans;
- historical upstream reviews and receipts; and
- dated architecture or implementation investigations.

Records should identify their snapshot date, commit or range, authority limit,
and current successor where one exists.

## Scient Repository Documentation Areas

The current Scient categories remain useful and should not be replaced by the
desktop model:

- product/ owns accepted or proposed product truth according to status;
- architecture/ and architecture/decisions/ own cross-product structure and
  accepted difficult decisions;
- planning/ owns proposed direction and ordered future work;
- research/ owns source evidence and evaluations;
- quality/ owns quality and testing doctrine;
- development/ owns repository-specific contributor guidance;
- operations/ owns cross-repository operating procedures; and
- a later records area may receive completed or historical material when a
  focused migration proves that placement useful.

The [Product Philosophy](../product/product-philosophy.md), accepted
[Product Requirements](../product/PRD.md), quality doctrine,
source-adaptation strategy, and architecture decisions are governing context.
This documentation project must preserve their authority and must not flatten
them into capability pages or website help.

## Cross-Product Capability Map

Scient should eventually contain one compact repository-family capability map.
It should include only information needed to navigate ownership:

- stable capability name or slug;
- owning implementation repository;
- current detailed capability record;
- related product requirement;
- related roadmap or accepted architecture; and
- major cross-repository dependencies.

It should change when a capability is introduced, retired, renamed, or changes
ownership. It should not duplicate complete current implementation status,
source-file maps, or test evidence from the owning repository.

## Public Publishing Model

### Canonical Source

The proposed authored source for current app help is
scient-desktop/docs/user/. The public label is **Scient Docs**, and the website
route is /docs. The physical path is deliberately retained as a useful T3
compatibility surface; the public name does not need to match its source folder.

Directory membership does not make a page public automatically. The publishing
pilot should prove a generated or reviewed manifest that selects pages from
docs/user/, records exact source identity, and excludes candidate, inherited,
platform-inapplicable, or unverified guidance.

### Publication Qualification

The first public corpus should be desktop-first. A page may be published only
when its documented behavior is verified for the applicable released version
and product surface. Inherited T3 pages remain useful source material, but are
not Scient product promises merely because they live under docs/user/.

Publication metadata should support corpus-level defaults plus page-level
exceptions for desktop, web, mobile, provider, environment, or operating-system
scope. Do not require repetitive platform metadata on every page when one
qualified corpus default is accurate.

### Website Responsibility

The website should own:

- rendering and visual design;
- navigation and search;
- stable public URLs and anchors;
- accessibility and responsive behavior;
- source-version selection;
- preview and production deployment; and
- website-specific analytics or operational behavior under their existing
  privacy and activation rules.

It should not maintain an independent prose copy of the same app instructions.

### Version Selection

Stable public Docs should be built from an exact released desktop commit, tag,
or equivalent release-proven source. A candidate Docs preview may render a
specific documentation or application PR head, but it must be labelled as a
preview and must not silently replace stable public guidance.

The exact transport—multi-repository checkout, pinned source manifest,
release-owned documentation artifact, or another bounded mechanism—should be
selected during the publishing pilot. The decision must preserve exact source
identity, reproducible builds, preview support, failure visibility, and a
simple rollback path. It must also define:

- the release or documentation event that triggers publication;
- the maximum acceptable lag between an applicable release or correction and
  stable Docs;
- the owner and visibility of a failed or stale publication;
- a stable-Docs correction path that can repair public guidance without
  requiring a new app binary; and
- how a corrected page remains truthfully associated with the app versions to
  which it applies.

### Agent-Readable Delivery

Before building MCP, the public Docs surface should provide:

- stable HTML pages;
- stable section anchors;
- raw Markdown or an equivalent structured representation;
- a generated page index containing title, summary, topic, version, and source
  identity; and
- useful search.

These delivery artifacts should be generated from the canonical corpus, not
maintained separately.

### Future Documentation MCP

A later public documentation MCP may provide version-aware topic search,
section retrieval, page listing, and source or version reporting. It should be
a thin retrieval adapter over the same public corpus.

It must not:

- become a second authored knowledge base;
- silently synthesize undocumented product claims;
- expose proposals as released behavior;
- mix private or internal operational information into public help; or
- require maintainers to update separate MCP answers after each feature.

MCP implementation should wait until stable page identities, version semantics,
and the public corpus have been proven.

## Agent Reading Routes

Repository guidance should eventually route agents by question. These are
target logical routes, not instructions to create every target folder during
Phase 1. Until a path is deliberately migrated, each repository's documentation
index should map the logical role to its real current compatibility path.

The full collaborator onboarding journey is occasional orientation, not a
per-change checklist. An already-oriented contributor or agent should normally
reach the actual content owner through no more than two governance or routing
surfaces: one family or repository front door and, when needed, one local
index. This is a design diagnostic rather than a CI limit, and it does not
reduce the source, code, test, history, or runtime investigation required after
the owner is found.

| Question                                               | Primary source                                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| How does a person use released Scient?                 | scient-desktop/docs/user/ or the published Scient Docs version of a qualified page.        |
| What does the current app implement?                   | The indexed capability-family owner at its current path and current source.                |
| Why is the app structured this way?                    | Repo-local architecture and ADRs, plus cross-product architecture in Scient when relevant. |
| What should Scient become next?                        | Scient/docs/product/ and Scient/docs/planning/, honoring status.                           |
| How is an external source used or evaluated?           | Scient/docs/research/ and the owning source-adaptation or upstream records.                |
| How should the repository be built or tested?          | The owning repository's development guidance and AGENTS.md.                                |
| How is it released, monitored, migrated, or recovered? | The owning repository's operations guidance.                                               |
| Why does the fork differ from upstream?                | The owning fork's upstream documentation and divergence registry.                          |
| What existed or was removed previously?                | Capability evolution sections and historical records.                                      |

A route succeeds when it reaches the real owner or an explicit missing
decision while preserving repository, status, release or preview version, and
cross-repository dependency boundaries. A missing owner or undecided mechanism
must remain visible; agents must not fill the gap by copying prose or inventing
authority.

The dated [maintainability and reading-route
audit](../research/spike-reports/documentation-system-maintainability-and-reading-route-audit-2026-08-28.md)
tests these routes against the current Scient, desktop, website, and open
documentation-candidate surfaces. It finds that upstream and temporary-work
routing are already strong, desktop routing is usable but incomplete, the
cross-repository documentation-impact rule is not yet operational, and website
Docs publishing correctly remains blocked on an explicit source-transport
pilot.

## Governance Surfaces And Promotion Map

The repository-family contract should be promoted through the smallest set of
surfaces that can make it usable. Policy, agent instructions, indexes,
contributor guides, pull-request templates, onboarding, and skills have
different jobs. Repeating the full taxonomy in all of them would create the
very drift this proposal is intended to remove.

The current audit found a workable base with several boundaries that Phase 1
must make explicit:

- Scient/docs/documentation-policy.md is the active authority for durable
  documentation inside Scient, but it currently says that it governs only that
  repository;
- Scient's AGENTS.md, onboarding, documentation index, and stewardship skill
  already route collaborators toward that policy, with some repeated guidance;
- scient-desktop's AGENTS.md owns local agent behavior and currently routes
  user-visible behavior to docs/user/, architecture and contributor material to
  docs/internals/, and runbooks to docs/operations/;
- scient-desktop/docs/internals/work-artifacts.md already owns the local rule
  that durable facts belong in current documentation, active plans belong in
  GitHub, and temporary agent artifacts stay outside the worktree;
- the desktop and website already have pull-request templates, while Scient
  does not; and
- the website has repository, contribution, and deployment guidance but no
  documentation-corpus policy or duplicate public-help corpus.

Desktop documentation PR #188 changes docs/README.md and remains an open,
behind draft at the observed baseline. Its disposition is a bounded Phase 0B
decision: rebase, reverify, and merge it, or close it and carry its still-useful
reconciliations into the relevant pilot. Only the overlapping desktop index and
content edits should wait for that decision; it must not block truth repairs,
Scient policy work, website ownership work, or independent architecture review.

### One Role Per Governance Surface

| Surface                                                                                              | What it owns                                                                                                                                  | What it must not own                                                                                  |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Family documentation policy                                                                          | Durable knowledge classes, statuses, evidence, canonical ownership, promotion, history, and family-level update principles.                   | Repository-specific commands, a copied map of every file, or current feature facts.                   |
| Shared contribution protocol                                                                         | Cross-repository pull-request separation, documentation-impact evidence, dependent-PR ordering, and shared review expectations.               | Local build commands, local paths, or the documentation taxonomy in full.                             |
| Repository AGENTS.md                                                                                 | Short, executable rules for agents in that repository, including which local owner to inspect and which changes trigger documentation review. | Product truth, a second documentation index, detailed publishing design, or long feature inventories. |
| Repository documentation index                                                                       | The current local map from logical purpose to real path, including compatibility paths that have not moved.                                   | Policy, implementation truth, or a manually maintained global inventory.                              |
| Owning help, capability, architecture, operations, upstream, product, planning, or research document | The actual durable fact and its evidence boundary.                                                                                            | Repository-wide routing rules unrelated to its subject.                                               |
| CONTRIBUTING.md                                                                                      | Human and external-contributor expectations, proposal intake, local contribution workflow, and public-accessible minimum rules.               | Internal product policy or a copy of every agent instruction.                                         |
| Pull-request template                                                                                | A concise prompt that makes documentation impact and cross-repository dependencies visible.                                                   | The explanation of how the documentation system works or a large checklist.                           |
| Project skill                                                                                        | Repeatable workflow for finding and updating the real owner, followed only when the skill applies.                                            | Project authority, accepted decisions, or a private answer store.                                     |
| Root README and onboarding                                                                           | Human orientation and reading route into the governing sources.                                                                               | Detailed policy, feature behavior, or implementation plans.                                           |

The current accepted local rule remains authoritative until a focused Phase 1
change updates it. After promotion, the concern-specific owner above governs:
the policy classifies durable knowledge, the contribution protocol governs the
shared pull-request requirement, repository guidance makes that requirement
actionable locally, and the subject document owns the fact. An index or skill
cannot override a content owner. When two accepted sources disagree, agents
must report the conflict and route a reconciliation change; they must not infer
precedence from repository size, file age, or link order.

### Phase 1 Owner Surfaces And Change Triggers

This map identifies possible owners, not a checklist requiring every listed
file to change. Phase 1 should touch a surface only when its owned instruction
changes.

The initially required promotion set is intentionally small:

- Scient documentation policy, team contribution protocol, AGENTS.md, and
  documentation index;
- desktop AGENTS.md, documentation index, work-artifacts guidance,
  CONTRIBUTING.md, and pull-request template; and
- website AGENTS.md and pull-request template.

Onboarding, skills, root READMEs, and contributor guides outside that required
set change only if the accepted route alters what they actually instruct a
reader to do. Phase 0 factual corrections remain independently justified and
do not make every corrected surface a recurring governance owner.

| Repository and surface                                                | Minimal Phase 1 responsibility                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scient/docs/documentation-policy.md                                   | Add the accepted family-level nearest-owner, public-versus-engineering, update-before-create, temporary-artifact, status, history, and conflict rules. Keep Scient-specific placement rules clearly scoped rather than implying that desktop uses the same folders.                         |
| Scient/docs/operations/team-contribution-protocol.md                  | Own the concise `Documentation impact` declaration and dependent documentation-PR ordering as shared contribution evidence.                                                                                                                                                                 |
| Scient/AGENTS.md                                                      | Route agents to the policy, protocol, owning repository, and documentation stewardship skill. Keep only the local actions an agent must perform; do not restate the entire target hierarchy.                                                                                                |
| Scient/docs/README.md                                                 | Map only Scient's current documentation areas and link the accepted family contract and cross-product capability map when they exist.                                                                                                                                                       |
| Scient/docs/onboarding.md                                             | Change only if the accepted reading journey cannot reach the governing sources through the updated index and AGENTS.md. Preserve the existing journey otherwise.                                                                                                                            |
| Scient/skills/documentation/scient-documentation-stewardship/SKILL.md | Change only if its procedure or owner-selection workflow changes. The skill remains non-authoritative and returns agents to policy and content owners. Update skills/README.md only if the skill's identity, scope summary, or index route changes.                                         |
| Scient pull-request surface                                           | Do not create a new template merely for repository symmetry. Require the field through the shared protocol and agent guidance during the pilot; add a minimal template later only if omitted declarations become a repeated failure.                                                        |
| scient-desktop/AGENTS.md                                              | Replace the audience-only documentation routing sentence with concise logical-role triggers and a link to the local index. Preserve the Scient safety override and inherited T3 guidance; do not copy the Scient policy.                                                                    |
| scient-desktop/docs/README.md                                         | Own the real local path map and logical classification, including docs/user/, docs/internals/, docs/operations/, root UPSTREAM.md, and package READMEs. This is the compatibility layer while physical paths remain mixed. Start from PR #188's explicit disposition for overlapping edits. |
| scient-desktop/docs/internals/work-artifacts.md                       | Remain the detailed local owner for feature plans, GitHub work, temporary artifacts, merged-PR records, new-file admission, and updating existing durable owners. Treat it logically as development guidance until a later move is justified.                                               |
| scient-desktop/CONTRIBUTING.md                                        | Keep external proposal and contribution expectations self-contained; add only the public minimum for documentation placement and impact reporting.                                                                                                                                          |
| scient-desktop/.github/pull_request_template.md                       | Add one proportional documentation-impact field with `None`, `Updated`, or `Dependent PR`; do not add a taxonomy checklist.                                                                                                                                                                 |
| website/AGENTS.md                                                     | Tell agents that app-help prose is owned in scient-desktop, website Docs work owns rendering and exact source/version behavior, and cross-repository changes use dependent pull requests.                                                                                                   |
| website/README.md                                                     | Continue to own website role, build, deployment, and repository-family orientation. Correct factual repository-family wording in Phase 0A; document Docs transport only after the publishing pilot chooses it.                                                                              |
| website/CONTRIBUTING.md                                               | Change only if website-specific branch, check, preview, or human-review instructions change; link rather than repeat the source-ownership design.                                                                                                                                           |
| website/.github/pull_request_template.md                              | Add one documentation/source-version impact field, preserving the existing validation and deployment evidence.                                                                                                                                                                              |

The current scient-agent repository is intentionally absent from this map.
Phase 1 should not inspect or change its inherited OpenCode documentation. Add
repo-local governance there only when native Scient-agent work begins and the
real implementation boundary can be documented.

### Public-Repository Self-Sufficiency

Scient is private while scient-desktop is public. A public contributor must not
need private repository access to understand the minimum rules for a desktop
change. The public repository should therefore state the small actionable rule
locally—where current help, implementation, operations, upstream, and temporary
work belong—and link to public local owners. It should not copy private product
plans, the complete family policy, or internal cross-product reasoning.

This is deliberate bounded duplication of an instruction, not duplication of
the underlying product fact. The local sentence is updated only when the
action a public contributor must take changes.

### Governance Update Triggers

| Change                                                                             | Required governance update                                                                                                         |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Family-level document class, status, evidence, promotion, or history rule changes  | Family policy; stewardship skill only if its procedure changes; local AGENTS.md only if an agent action changes.                   |
| Shared pull-request evidence or dependent-PR rule changes                          | Team contribution protocol and affected pull-request templates; do not rewrite content indexes.                                    |
| A repository adds, renames, moves, or retires a documentation area                 | That repository's documentation index; AGENTS.md or CONTRIBUTING.md only if the route a contributor follows changes.               |
| A feature or architecture fact changes                                             | The owning subject document under the relevance test; no governance file merely because the topic is related.                      |
| Website source transport, version selection, preview, or rollback behavior changes | Website README or operations owner and affected agent rule; desktop release documentation only when its producer contract changes. |
| A new workflow repeatedly fails because agents cannot find the owner               | First repair the nearest index or local instruction. Change family policy only if the rule itself is missing across repositories.  |

Phase 1 should validate these routes with a small set of question-based reading
tests: a public desktop contributor, an internal cross-repository feature
agent, a website publishing agent, an upstream-integration agent, and a
documentation-only agent should each reach the correct content owner without
reading every governance surface.

## Documentation Update Contract

Every implementation or documentation pull request should explicitly assess
documentation impact. A concise field is preferred over a large ritual:

    Documentation impact:
    - None — <reason>
    - Updated — <paths>
    - Dependent PR — <repository and link>

The expected owner depends on the change:

| Change                                                                                                       | Documentation consideration                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| User steps, visible behavior, privacy, data flow, permissions, recovery, or terminology changes              | Public Docs source in the owning implementation repository.                                                                       |
| Capability availability, limits, platform support, provider support, or maturity changes                     | Capability record.                                                                                                                |
| Authority, identity, lifecycle, dependency direction, shared foundation, or hard-to-reverse contract changes | Architecture document or ADR.                                                                                                     |
| T3 or OpenCode seam, conflict rule, protected divergence, or upstream disposition changes                    | Owning fork's upstream documentation.                                                                                             |
| Build, test, configuration, debugging, fixture, or contributor workflow changes                              | Development documentation or repository guidance.                                                                                 |
| Release, migration, deployment, monitoring, support, or recovery procedure changes                           | Operations documentation.                                                                                                         |
| Desired product outcome, scope, or sequence changes                                                          | Scient product or planning owner.                                                                                                 |
| External dependency, source, license, donor, or research evidence changes                                    | Scient research or source map and any accepted dependent decision.                                                                |
| Capability removal, replacement, or retirement                                                               | Capability disposition, public Docs change at the appropriate release, upstream disposition when relevant, and historical record. |

A code change should update current implementation documentation in the same
repository and preferably the same pull request. A genuinely cross-repository
documentation consequence uses a separate dependent pull request with explicit
ordering. Matching branch names are not dependency evidence.

Website publication should consume the approved source version. Maintainers
should not manually repeat the same product instructions in a website pull
request.

## Feature Documentation Lifecycle

Feature work does not receive a new Markdown file by default. An agent or
maintainer should first decide whether the information is temporary work,
whether an existing durable owner should change, and whether a new owner is
actually necessary.

### During Investigation And Implementation

- Keep agent scratch, transcripts, session handoffs, temporary research, and
  implementation checklists outside the worktree.
- Track active outcome, constraints, acceptance criteria, and implementation
  progress in the owning GitHub issue, project item, and pull request.
- Update an existing help, capability, architecture, upstream, development, or
  operations owner before proposing a new document.
- Put reusable source evaluation or cross-product planning in Scient only when
  it has durable evidence, scope, and an appropriate planning or research
  owner. Do not copy ordinary feature implementation notes into Scient.

### Admission Test For A New Durable File

Create a new document only when all of the following are true:

1. The knowledge will remain useful after the feature pull request closes.
2. No existing document can own it coherently without confusing authority.
3. It answers a distinct durable question for a defined audience.
4. Its accountable repository, owner, status, evidence boundary, and update
   trigger can be stated.
5. It can be indexed from the appropriate documentation map without becoming
   one record per PR, component, button, or minor state.

A feature may update zero, one, or several existing documents. That is not a
requirement to create one file in every area. For example, a user-visible change
may update a public Docs page and its capability-family record while requiring
no architecture document because no shared invariant changed.

### Relevance Test And Fan-Out Budget

A document should change only when a fact it owns changed. Topical relation is
not enough:

- update public Docs only when user behavior, availability, limitations,
  privacy, permissions, recovery, or terminology changed;
- update a capability record when implementation, qualification, support,
  limits, ownership, dependencies, or evolution changed;
- update architecture or an ADR only when a shared authority, lifecycle,
  contract, invariant, or difficult decision changed;
- update a roadmap only when desired outcome, scope, dependency, sequence, or
  acceptance gates changed;
- update an index only when navigation, placement, status, or page identity
  changed; and
- do not rewrite a historical record merely because later work is related.
  Add a successor or disposition only when its interpretation changed.

As a pilot target, an ordinary bounded change should normally require zero to
two primary authoritative document updates. Three can be reasonable when the
same change genuinely spans public behavior, current capability truth, and a
shared architecture or operational contract. More than three primary owners
should trigger a relevance and ownership review, not an automatic failure.

Large cross-cutting programs, retirements, and upstream integrations may
legitimately exceed that target. Their review should distinguish recurring
authority updates from one-time navigation, metadata, evidence, and historical
disposition work. This is a diagnostic budget, not a CI quota and not a reason
to omit a changed privacy, safety, recovery, or authority claim.

### At Merge And Afterward

- Update current implementation documentation in the implementation pull
  request whenever practical.
- Use an explicitly ordered dependent pull request only for a genuine
  cross-repository consequence.
- Treat the merged pull request as the implementation record. Do not preserve a
  duplicate completed checklist or agent handoff in the repository.
- Promote durable decisions, evidence, or constraints into their existing
  owners, then supersede or retain any predecessor according to its real
  historical value.
- When a capability is removed, update its disposition and release-appropriate
  public guidance; preserve a separate record only when the evolution or
  reasoning remains useful.

### Markdown That Is Not Product Documentation

The inventory and agent rules must distinguish these classes rather than route
every Markdown file into the documentation hierarchy:

| Class                                      | Treatment                                                                                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Durable project documentation              | Classify by help, capability, architecture, development, operations, upstream, product, planning, research, quality, or records authority. |
| Package or source README                   | Keep beside the package or source it explains; index it only when broader navigation needs it.                                             |
| Agent protocol or project skill            | Keep in AGENTS.md or SKILL.md under its workflow rules; it must not become product or architecture authority.                              |
| Test or visual fixture                     | Keep with fixtures and label it non-authoritative; do not publish it as Docs.                                                              |
| Vendored or inherited source documentation | Preserve with its source boundary and exclude it from Scient-owned documentation counts unless deliberately adapted.                       |
| Temporary work artifact                    | Keep outside the worktree or in the owning GitHub work item; do not rename it to bypass the policy.                                        |

## Pre-Acceptance Maintenance Tabletop

A read-only tabletop applied the proposed contract to five real merged desktop
changes. The observed documentation files below describe what the pull requests
actually changed; they are not assumed to be sufficient merely because they
exist.

### User-Visible Feature: Voice Transcript Correction, [PR #164](https://github.com/ScientFactory/scient-desktop/pull/164)

The 54-file feature changed only `docs/operations/local-dev-app.md`. It added an
optional, default-off setting that passes locally transcribed text to the
selected authenticated provider runtime for LLM correction and falls back to
the original local transcript on failure. The current public voice page still
states that recordings and transcripts are processed entirely by the bundled
local runtime, while the current voice architecture record does not describe
the correction path.

Under the proposed model, the voice help page and voice capability record are
the two primary feature owners. The local-development runbook changes only if
the development-app lifecycle also changed; it does not substitute for either
feature owner. This is a material privacy and authority drift that the update
contract should have caught without requiring a new document.

### Cross-Cutting Architecture: Provider Lifecycle, [PR #150](https://github.com/ScientFactory/scient-desktop/pull/150)

The 100-file integration touched ten documentation files: three provider help
pages, current provider and lifecycle architecture, a Codex-specific deep dive,
an evidence audit, an implementation proposal, the glossary, and the index.
That breadth is defensible for a one-time multi-provider architecture program,
but it should not become the recurring cost of every provider fix.

The target model keeps shared current behavior in one provider-lifecycle
capability and focused architecture owners, keeps provider-specific help only
where behavior genuinely differs, and treats the audit as evidence. The
implementation proposal currently still says final integration is open even
though PR #150 merged; it should receive a historical disposition rather than
continue as a living implementation owner. Index and glossary changes are
one-time navigation or vocabulary work, not recurring capability fan-out.

### Retirement: Quick Chat And Projectless Threads, [PR #146](https://github.com/ScientFactory/scient-desktop/pull/146)

The retirement updated `UPSTREAM.md`, fork divergence, and onboarding, and
deleted the 150-line current Quick Chat record plus a 45-line design-QA file.
The target model would update the capability disposition, released help if a
public page existed, the project-ownership or upstream invariant that changed,
and a historical record only where the reasoning remains useful.

The retirement is summarized in current upstream documentation and described
in the forensic capability and divergence reports. Those reports were still
untracked at the audited baseline, so Phase 2 must give them an explicit durable
disposition before relying on them as the navigable retirement record.

### Bounded Maintenance Change: HTML/PDF Freshness, [PR #187](https://github.com/ScientFactory/scient-desktop/pull/187)

The 13-file change updated one current implementation document,
`scient-browser-pdf-export.md`. That is proportionate for the source identity,
automatic refresh, stale-revision rejection, and recovery contract. The public
Docs owner should also change if the visible Update/Retry workflow or its
limitations are part of the user contract; related roadmaps and historical PDF
plans should not change merely because they discuss PDF.

### Upstream Integration: T3 Through c8aba2587d, [PR #189](https://github.com/ScientFactory/scient-desktop/pull/189)

The 100-file merge updated the root upstream contract, added one dated
integration receipt, and updated the asset README for an actual asset-source
change. This matches the target model: one current upstream owner, one immutable
receipt, and a package-local README only when its own source boundary changed.
It did not require every affected capability or roadmap to repeat the adopted
upstream range.

### Tabletop Conclusion

The model survives the tabletop with bounded recurring fan-out. The failures
were not caused by too many proposed categories; they came from missing update
triggers, a completed plan that remained live, and retirement evidence without
a final durable disposition. The relevance test, feature lifecycle, and
logical-before-physical migration directly address those failures. The later
vertical pilots must still prove the model in normal authoring and publication
work; this tabletop is design evidence, not completion of Phase 5.

## Migration Rules

### Logical Classification Before Physical Movement

The first migration should produce two complementary outputs.

The **generated exhaustive inventory** should mechanically enumerate Markdown
paths in each in-scope repository and classify obvious structural boundaries,
including documentation trees, root protocols, package-local reference,
skills, fixtures, lab evidence, vendored material, and relevant untracked
candidate documents. Vendored files should be counted and excluded rather than
silently mixed into Scient-owned totals. This generated output is audit
evidence, not a manually maintained source of truth.

The **human-reviewed disposition ledger** should cover the primary durable
documentation set and classify each current document by:

- repository and accountable owner;
- path, title, and document class;
- purpose and doc type;
- current authority and status;
- intended audience and current consumers;
- related capability or foundation;
- update trigger;
- implementation, product, roadmap, research, or historical dependencies;
- intended logical area;
- public or internal delivery;
- keep, revise, merge, move, supersede, deprecate, or retain-as-record action;
  and
- source evidence needed before rewriting factual claims.

Review this inventory before moving files.

The disposition ledger is a temporary migration authority. After the migration,
normal area indexes, document metadata, and proportional validation should make
the corpus navigable; maintainers should not have to keep a second exhaustive
manual spreadsheet or global status dashboard synchronized forever.

### Preserve Upstream Compatibility Deliberately

The T3-derived desktop receives upstream documentation in inherited docs/user/
and docs/internals/ paths. Do not mass-rename inherited material for visual
purity. The logical documentation index may present clearer areas before every
physical path changes.

Move Scient-owned documents only when the authority gain exceeds future merge
cost. Keep inherited paths when they remain useful compatibility surfaces, and
document their logical classification in the index.

### Preserve History And Successors

Moving or retiring a document must preserve its intent, Git history where
practical, inbound references, status, and current successor. Do not delete a
useful plan merely because its implementation landed or its source path is no
longer fashionable.

## Overcomplication Constraints

The accepted system should reject the following unless later evidence requires
them:

- no docs/docs/ folder merely to match the public label;
- no parallel docs/help/ tree while docs/user/ remains the durable Help source;
- no automatic publication of every inherited docs/user/ page merely because
  it is in the source directory;
- no separately authored website copy of app help;
- no separately authored MCP answer store;
- no one document per PR, component, button, or minor UI state;
- no global dashboard that duplicates every repository's detailed state;
- no requirement to update every roadmap after every implementation change;
- no mass movement of inherited T3 or OpenCode documentation for cosmetic
  consistency;
- no deep folder hierarchy before corpus size proves it useful;
- no large mandatory metadata schema before the pilot proves which fields are
  necessary;
- no repetitive platform field on every page when a qualified corpus default
  plus explicit exceptions is truthful;
- no accepted proposal left as the recurring policy after its rules have been
  promoted to durable owners;
- no automation that can mark a proposal accepted or claim implementation
  maturity; and
- no deletion of philosophy, first-principles, quality, development,
  operations, upstream, or historical evidence merely because it is not public
  user help.

## Implementation Sequence

The accepted implementation goal authorizes this documentation program through
focused branches and pull requests. Each phase still receives proportional
review, validation, and collision checks. Merge, deployment, release, MCP, and
product-architecture authority remain separate where stated below.

### Phase 0A — Repair Truth And Preserve Evidence

Phase 0A contains factual corrections and preservation work that do not depend
on accepting the target documentation system:

1. Correct the voice page and voice capability record so they distinguish
   local audio/transcription from optional provider-based transcript-text
   correction.
2. Reconcile the stale private-migration-candidate boundary in desktop
   CONTRIBUTING.md with the active public released repository.
3. Correct or retire the stale provider-lifecycle implementation proposal while
   preserving its useful rationale and current successor.
4. Correct the website repository-family description so `scient-agent` is the
   planned home for future native-agent work, not an already implemented native
   source foundation. This does not require reading or changing scient-agent.
5. Repair the three concrete Scient metadata anomalies identified by the
   Markdown audit.
6. Preserve this accepted plan and its dated Draft audits on their isolated
   Scient branch without claiming that acceptance proves implementation.
7. Preserve the three desktop forensic reports on an isolated branch based on
   current desktop main, add appropriate metadata and an index route, and keep
   their dated snapshot boundaries explicit. Do not commit them from the
   behind canonical desktop checkout.

Preservation does not settle final records placement or prove any migration.
Truth repairs may use separate focused pull requests where repository, review,
or collision boundaries require them.

### Phase 0B — Reconcile The Moving Baseline

1. Confirm any active upstream integration and its dependent documentation
   rechecks are complete.
2. Confirm the exact merged heads in every affected repository.
3. Recheck cross-repository links and implementation snapshots.
4. Reconcile active documentation and feature candidates as candidate—not
   merged-current—evidence, and reconcile merged PR #190's user-visible default
   and privacy/display implications against current help and capability owners.
5. Decide the disposition of desktop documentation PR #188: either rebase,
   reverify, and merge it, or close it and transfer still-useful reconciliations
   into the relevant pilot.
6. Resolve the six missing public-help index routes, fourteen missing
   non-receipt internal routes, and one historical migration route through
   focused index or collection links rather than listing every upstream receipt
   individually.

Desktop upstream PR #189 is complete at the observed baseline. PR #188 affects
the desktop index and adjacent file, analysis, LaTeX, PDF, and Artifact Studio
records, but it is not a gate for unrelated repository work. Substantial
feature drafts remain in-flight evidence and do not require the inventory to
wait indefinitely for every open branch.

These are targeted baseline repairs, not permission for a broad migration.

### Phase 1 — Promote The Documentation Contract

After explicit decision, promote only the accepted rules in dependency order:

1. In Scient, update the documentation policy and team contribution protocol,
   then update AGENTS.md and the documentation index. Change onboarding or the
   stewardship skill only if their actual route or procedure changes.
2. After the overlapping disposition of desktop documentation PR #188 is
   known, update desktop AGENTS.md, docs/README.md, the existing work-artifacts
   guide, contributor guide, and pull-request template in one focused
   repository-local change.
3. Update the website agent guidance and pull-request template, changing its
   README or contributor guide only where the accepted source-ownership rule
   changes their actual responsibility.
4. Run the question-based reading tests in the governance map and record any
   ambiguous route before beginning the inventory. Include a public user or
   support agent seeking version-correct released behavior, and use a fresh
   contributor or agent that did not author the policy for at least one pass.

Each repository uses its own branch, commit, pull request, checks, and review.
The Scient policy change lands first; the desktop and website changes identify
that dependency explicitly but remain self-contained for contributors who
cannot read Scient. Do not change scient-agent in this phase.

Do not move the full corpus in this phase.

Phase 1 is not complete until accepted rules have durable owners and this
proposal no longer competes with them. At the exit gate, mark this document's
real disposition, link to the promoted policy and repository-local owners, and
state which later pilot and migration choices remain open. Agents should not
need this planning document as recurring policy after promotion.

### Phase 2 — Build The Cross-Repository Inventory

Generate the exhaustive Markdown inventory and review the durable-document
disposition ledger across Scient, scient-desktop, and the website. Record the
scient-agent scope boundary but do not inspect or migrate its current inherited
OpenCode Markdown. Reconcile duplicate or conflicting authority before
rewriting prose.

Use the dated file-by-file audit as the seed rather than repeating its work by
hand. Phase 2 still must refresh the exact merged heads after Phase 0, reconcile
the active candidate branches, and complete the human owner, audience,
dependency, update-trigger, and final-disposition review before the temporary
ledger can govern migration.

Generate a temporary help-verification queue from docs/user/. It should record
publication eligibility, applicable release and surface, factual verification,
and any required correction or exclusion. Prioritize Getting Started,
Projects, Providers, Voice, file handling, PDF, and LaTeX. Retire this queue
after the corpus has durable page ownership and generated publication metadata;
do not turn it into a permanent second registry.

### Phase 3 — Prove Three Vertical Pilots

Use three representative app areas:

1. **Projects and Getting Started**: public workflow and project-owned state.
2. **File viewing, PDF, and LaTeX**: Scient-owned capabilities, shared
   architecture, generated documents, and cross-product roadmap links.
3. **Providers**: inherited T3 host behavior, Scient lifecycle divergence,
   remote environments, provider-specific differences, and troubleshooting.

For each pilot, produce only the necessary:

- public Docs page or page set;
- capability record;
- shared architecture link or focused architecture update;
- upstream record when applicable;
- roadmap and product links; and
- historical disposition where prior material is superseded.

### Phase 4 — Prove Website Publishing

Render the pilot public Docs from an exact desktop source version in a website
preview. Verify navigation, links, search or index generation, accessibility,
responsive behavior, source or version display, preview versus stable
separation, failure behavior, and rollback.

The pilot must also select and prove:

- the manifest or other bounded page-selection mechanism over docs/user/;
- source transport without preselecting checkout, pinned manifest, or release
  artifact before evidence;
- release and documentation-correction publication triggers;
- maximum acceptable freshness lag and visible stale/failure behavior;
- a correction path for stable Docs that does not require a new app binary;
- truthful version association after a correction; and
- corpus-level surface qualification with page-level exceptions.

### Phase 5 — Prove The Maintenance Loop

Process at least:

- one real user-visible feature change;
- one architecture-affecting change;
- one feature retirement or supersession case; and
- one T3 upstream integration

through the proposed update contract. Measure how many authored documents each
change truly requires. Simplify the model if ordinary work causes excessive
fan-out or ambiguous ownership.

Use the next real retirement and upstream integration that occur during the
program. Do not manufacture product or upstream work merely to satisfy this
proof; those cases may remain pending while unrelated phases continue.

### Phase 6 — Migrate The Remaining Corpus

After the pilots and the maintenance proof available from real changes, proceed
with safe normalization. The next real product retirement and T3 integration
must still use the contract, but their absence does not justify retaining
temporary ledgers or postponing unrelated corpus work:

- write the complete release-qualified or explicitly labelled candidate
  Scient Docs corpus;
- normalize capability-family records;
- consolidate shared architecture and ADRs;
- preserve and clarify development and operations guidance;
- create the navigable upstream divergence system;
- place audits, retirements, migrations, and historical plans appropriately;
- reduce repeated current-state sections in roadmaps to links where safe; and
- update repository indexes and reading routes.

### Phase 7 — Add Proportional Automation

Only after the structure stabilizes, add checks that provide clear value:

- local and cross-repository link validation;
- generated navigation and page indexes;
- source-version and release-pin validation;
- detection of missing documentation-impact declarations;
- checks for broken canonical-owner links;
- status or metadata validation for the small accepted schema; and
- reproducible website Docs builds.

Automation supports human-auditable documentation. It does not decide truth or
acceptance.

### Phase 8 — Evaluate Documentation MCP

Evaluate actual agent retrieval failures against the mature public corpus.
Build the thin MCP only if it materially improves discoverability, version
selection, citation, or support-agent reliability beyond the website, raw
content, index, and search surfaces.

## Relationship To The First-Principles Architecture Review

The documentation program should supply evidence for the architecture review,
not become a reason to postpone it. The review can begin once the inventory and
a small representative set of capability records reliably describe current
authority, lifecycle, dependencies, seams, failure behavior, and limitations.
It does not need to wait for every public Docs page or historical record to be
polished.

The dated
[capability-to-foundation architecture audit](../research/spike-reports/scient-capability-to-foundation-architecture-audit-2026-08-28.md)
completes the initial cross-capability evidence pass at the exact source and
in-flight identities it records. Its classifications remain research evidence;
they do not accept a foundation, authorize a rewrite, or replace the focused
workflow traces and decisions below.

Documentation readiness must not serialize independent architecture work. With
focused authorization and current source evidence, the architecture track may:

- decide proposed ADR-0006 before another canonical .scient/ namespace is
  introduced;
- run the smallest accepted-operation-envelope proof and the end-to-end
  file/resource/presentation trace as separate architecture slices; and
- require the F5 execution reconciliation between AnalysisRun, DocumentBuild,
  ComputeSession, MATLAB, and Results before compute PR #129 can merge.

These are decision and merge gates, not implementation authorization embedded
in this documentation proposal. Each architecture slice retains its own review,
branch, tests, migration safety, and acceptance decision.

### Review Foundations, Not The Order Features Happened To Land

The review should group current capabilities by the foundations they actually
share. It should not assume that a sequence of individually successful feature
pull requests produced the best long-term boundaries. For each foundation,
trace representative end-to-end workflows and ask:

- Which product invariant or first principle requires this foundation?
- What object, identity, state, or service is authoritative?
- Who owns creation, mutation, persistence, synchronization, cleanup, and
  recovery?
- Which contracts cross packages, processes, clients, providers, or
  repositories, and is dependency direction coherent?
- Where do multiple features duplicate state, lifecycle, orchestration,
  validation, presentation, provenance, or recovery logic?
- Which layers are intentional T3 seams, which are protected Scient
  divergences, and which are accidental workarounds that no longer serve a
  product need?
- What are the failure, cancellation, retry, resource-bound, permission,
  privacy, and observability semantics?
- Which tests and operational evidence prove the foundation rather than only
  one feature path?

### Classify Findings Before Choosing A Rewrite

Each finding should receive one explicit disposition:

- keep the current boundary;
- simplify it in place;
- unify duplicated implementations behind one existing owner;
- extract a shared foundation because multiple real consumers and a distinct
  lifecycle now prove the boundary;
- replace or rebuild a foundation whose authority or contracts are wrong;
- retire an obsolete layer or compatibility path; or
- defer because evidence is incomplete.

The review should resist both extremes: preserving accidental structure merely
because it exists, and creating speculative shared infrastructure merely
because several features look related. Shared foundations should follow proven
common authority and lifecycle, not naming similarity.

### Review And Migration Order

1. Build the capability-to-foundation map from current source, tests, runtime
   evidence, capability records, T3 seams, and source provenance.
2. Select the foundations with the highest duplication, authority ambiguity,
   failure risk, upstream conflict cost, or roadmap leverage.
3. Trace representative workflows and write the current-state boundary before
   recommending a target.
4. Compare keep, simplify, unify, extract, replace, and retire alternatives
   against product principles, migration risk, update cost, and reversibility.
5. Accept focused architecture decisions only with evidence and a migration
   path that preserves user value, project data, provenance, and rollback.
6. Implement incrementally where possible, update capability and architecture
   owners with the code, and mark superseded paths clearly.

Architecture findings should update the owning architecture or capability
record. Accepted rebuilds should preserve observable behavior unless a product
decision explicitly changes it. Public Docs should change only when user
behavior, availability, limitations, or recovery changes.

## Requested Scope Coverage And Completion Boundary

The documentation-system design is supported by complementary evidence rather
than one document that tries to own product history, current implementation,
architecture, policy, and public help simultaneously.

| Requested concern                                                                                                                                   | Evidence owner                                                                                                                                                                                      | Coverage at the observed baseline                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Every Scient-specific capability, including small fixes, files, behavior, and why it exists                                                         | `scient-desktop/docs/reports/scient-specific-capabilities.md` plus the [capability-to-foundation audit](../research/spike-reports/scient-capability-to-foundation-architecture-audit-2026-08-28.md) | Complete dated inventory: 38 named capabilities plus the cross-cutting security/reliability family, reconciled to current desktop `d5ff08e7`.                                                                                                                                                                                                 |
| Every desktop pull request, integration chain, quick timeline, and feature evolution                                                                | `scient-desktop/docs/reports/scient-pr-and-evolution-ledger.md`                                                                                                                                     | All 184 live PR records through #190 are reconciled: 181 records through #187 plus the #188–#190 addendum. The six earlier absent numbers remain recorded rather than invented.                                                                                                                                                               |
| T3 ancestry, integration, conflicts, protected divergences, and why each category remains                                                           | `scient-desktop/docs/reports/scient-t3-divergence-integration-and-retirements.md`, current `UPSTREAM.md`, machine state, and dated receipts                                                         | Complete dated divergence narrative through #187 with a current-main #189 addendum; live operational authority remains `UPSTREAM.md` and `upstream-state.json`.                                                                                                                                                                               |
| Features and implementation approaches built and later removed, replaced, renamed, rejected, superseded, or deferred                                | The divergence/retirement report and PR ledger                                                                                                                                                      | Twelve explicit retirement/replacement/defer cases plus current-versus-integration-only status. Capability records preserve evolution without making retired work current.                                                                                                                                                                    |
| First-principles architecture, accidental layering, shared foundations, simplification, unification, extraction, replacement, and rebuild questions | [Capability-to-foundation architecture audit](../research/spike-reports/scient-capability-to-foundation-architecture-audit-2026-08-28.md)                                                           | Complete initial 39-item map, ten foundation findings, disposition ledger, deliberate non-unifications, evidence gates, and review order. It recommends focused foundation work rather than a wholesale rewrite.                                                                                                                              |
| Open-source donors, external services, versions, licenses, adaptation boundaries, and what remains Scient-owned                                     | Forensic capability/divergence reports, architecture audit, and Scient source maps                                                                                                                  | Covered for T3, Effect, PDF.js, whisper.cpp, KaTeX, Mermaid, Vega, Plotly, Zotero and metadata APIs, citation tooling, MATLAB, TeX/TinyTeX/SyncTeX, Jupyter conventions, and Agent Skills. Source maps remain evidence, not automatic dependency selection.                                                                                   |
| Every existing Markdown file, what it currently does, authority, provenance, and preliminary disposition                                            | [File-by-file Markdown audit](../research/spike-reports/documentation-system-markdown-audit-2026-08-28.md)                                                                                          | Every tracked path at the exact Scient, desktop, and website heads is accounted for; every non-vendored file is individually classified; vendored boundaries, open-PR Markdown, and three untracked forensic reports are explicit. The current scient-agent checkout is excluded by decision.                                                 |
| Where feature agents put plans, scratch notes, handoffs, research, current facts, and new durable Markdown                                          | Feature-document lifecycle in this proposal plus desktop work-artifacts guidance                                                                                                                    | Complete proposed rule: GitHub owns active work; temporary material stays outside the tree; merged PRs are implementation records; existing durable owners are updated first; new files must pass the admission test.                                                                                                                         |
| Complete public documentation for users and support agents, website publication, versioning, and a possible MCP                                     | Public publishing model, desktop Help owners, and website publishing architecture                                                                                                                   | Complete merged preview corpus: 31 canonical Help pages render from exact desktop main commit `7d2187eb383505956e95c8ebcfcfe8006d6edba2` with HTML, UTF-8 raw Markdown, JSON index, search, source/version evidence, and explicit preview status. Unreleased mobile guidance is internal; stable-release publication and MCP remain deferred. |
| Clean internal capability, architecture, development, operations, upstream, roadmap, research, quality, and historical documentation                | Repository authority model, proposed desktop areas, Scient areas, and cross-product capability map                                                                                                  | Complete logical target. The areas are classification and ownership roles, not mandatory physical folders or one-file-per-feature requirements.                                                                                                                                                                                               |
| Cross-repository ownership, dependency order, agent instructions, contributor guidance, indexes, templates, and update triggers                     | Governance promotion map and documentation update contract                                                                                                                                          | Complete proposed contract with one concern per governance surface, public-repository self-sufficiency, separate dependent PRs only for genuine consequences, and a concise documentation-impact declaration.                                                                                                                                 |
| Preservation of useful philosophy, first principles, development, quality, planning, research, upstream, and historical records                     | Migration rules, history/successor rules, and overcomplication constraints                                                                                                                          | Explicitly protected. Logical classification precedes movement; inherited compatibility paths may remain; temporary migration ledgers disappear after use; useful history is not deleted for cosmetic consistency.                                                                                                                            |
| Proof that the system can remain understandable and inexpensive to update                                                                           | [Maintainability and reading-route audit](../research/spike-reports/documentation-system-maintainability-and-reading-route-audit-2026-08-28.md)                                                     | Six reading routes and seven representative update simulations pass the proposed target with bounded recurring fan-out and explicit unresolved publication transport.                                                                                                                                                                         |
| Concurrent upstream and documentation work                                                                                                          | Exact evidence identities and Phase 0                                                                                                                                                               | Merged upstream PR #189 is reconciled. Documentation PR #188, its dependent governance consolidation in #194, and the final Help consolidation in #199 are merged. PR #190's provider-default consequence is reflected in the current implementation and Help owners.                                                                         |
| Current `scient-agent` repository                                                                                                                   | Explicit exclusion throughout the proposal and audits                                                                                                                                               | Deferred exactly as requested. No inherited OpenCode Markdown or source was inspected or classified; repository-local governance begins only when native Scient-agent implementation starts.                                                                                                                                                  |

This matrix proves coverage of the **design and audit objective**. Acceptance,
migration, publication, and maintenance proof are deliberately separate
states:

1. **Investigated and designed:** the proposal and dated evidence suite cover
   the requested scope and expose their exact snapshots and unresolved risks.
2. **Accepted:** a human explicitly decides the acceptance questions below and
   promotes only those choices into policy.
3. **Operational:** Phase 0A truth/preservation work, Phase 0B baseline
   reconciliation, and Phase 1 repository-local governance changes land in
   their owning repositories.
4. **Proven at scale:** vertical authoring, website publishing, maintenance,
   migration, and automation phases pass their stated gates.

The evidence package and merged implementation have now reached states 1–4 for
the candidate-preview corpus. Stable-release publication, the next real
retirement and upstream-integration cases, additional automation, and a
possible MCP remain separately gated below.

## Accepted Package

The evidence supported accepting the core documentation contract without
settling the deferred implementation details.

The accepted decisions are:

- accept **Scient Docs** as the public label and /docs as the website route;
- accept scient-desktop/docs/user/ as the durable authored source for current
  app help, with no parallel docs/help/ directory;
- accept a reviewed publication manifest, desktop-first qualification, stable
  publication pinned to an exact released source, labelled candidate previews,
  and a truthful stable-correction path;
- accept public Docs and internal capability records as separate but linked
  owners;
- accept the federated nearest-owner model across Scient, scient-desktop, and
  the website, with scient-agent deferred until native implementation begins;
- accept the seven-area desktop model as a logical classification target, not
  a mass-move instruction;
- accept update-before-create, the concise documentation-impact declaration,
  and the feature-document admission test;
- accept the one-role-per-governance-surface promotion map, including
  a small required promotion set, conditional edits elsewhere, proposal
  self-supersession, and self-contained minimum rules in public repositories
  without copied private product or planning authority;
- accept generated exhaustive inventory plus a temporary reviewed disposition
  ledger rather than a permanent manual catalog of every Markdown path;
- require logical classification and three vertical pilots before broad
  migration; and
- defer MCP until the public corpus and retrieval model are proven.

Acceptance should deliberately defer:

- the exact website-to-desktop source transport;
- mandatory capability metadata beyond the small pilot schema;
- physical movement of inherited or Scient-owned files outside explicitly
  reviewed dispositions; docs/user/ remains the durable default;
- the final automation and validation portfolio;
- any MCP interface or deployment choice; and
- any architecture simplification, extraction, replacement, or rebuild until
  the first-principles review produces evidence and a focused decision.

These were the choices deliberately left open at acceptance. The completed
pilots later selected an exact desktop-revision manifest with per-page hashes,
manifest-owned navigation metadata, logical rather than broad physical
classification, and the existing heterogeneous capability records plus a
compact family map instead of a universal document schema. The source
transport remains subject to the recorded re-evaluation conditions; MCP and
product-architecture implementation remain deferred.

## Accepted Questions

The explicit questions answered by the acceptance record are:

1. Is the public label **Scient Docs** with website route /docs accepted?
2. Is scient-desktop accepted as the canonical authored source for current app
   help?
3. Is docs/user/ accepted as the durable default Help source, with no parallel
   docs/help/ tree and publication controlled by qualification rather than
   directory membership?
4. Is the separation between public Docs and internal capability records
   accepted?
5. Is the federated nearest-owner model across Scient, scient-desktop, and the
   website accepted now, with scient-agent joining only when native
   implementation begins?
6. Should stable public Docs default to an exact released app source, with
   candidate documentation available only through labelled previews and a
   version-truthful stable-correction path?
7. Is the seven-area logical desktop model—help, capabilities, architecture,
   development, operations, upstream, and records—accepted as the target for
   classification and pilots?
8. Is logical classification before physical movement accepted, including the
   deliberate preservation of useful inherited paths?
9. Is the concise documentation-impact field accepted as the default pull
   request coordination mechanism?
10. Is the feature-document lifecycle accepted, including update-before-create,
    temporary work outside the source tree, and the new-file admission test?
11. Is the two-layer generated inventory and reviewed disposition ledger
    accepted instead of a permanently hand-maintained list of every Markdown
    path?
12. Is the three-pilot proof required before full migration?
13. Is MCP deferred until the public corpus, version model, and retrieval needs
    are proven?
14. Is the governance promotion map accepted, including one concern-specific
    owner, a small required file set, conditional edits elsewhere, thin routing
    surfaces, proposal self-supersession, and self-contained minimum
    instructions in public repositories?

## Acceptance Record

Yaacov accepted all fourteen questions on 2026-08-28, with these binding
clarifications:

- **Public identity:** the public product-help surface is **Scient Docs** at
  /docs.
- **Source ownership:** scient-desktop is the authored source for current app
  help, and its inherited docs/user/ path remains the durable default. Do not
  create a parallel docs/help/ tree.
- **Independent delivery:** the website and the desktop app have separate
  release lifecycles. Publishing or correcting Docs must not require a new app
  release, while stable pages must remain truthful about the app versions and
  behavior they describe.
- **Separate but linked truth:** public help and internal capability or
  architecture records answer different questions and must not become copied
  prose authorities.
- **Repository family:** use nearest authoritative ownership across Scient,
  scient-desktop, and the website. scient-agent remains excluded until native
  Scient-agent work begins.
- **Logical areas:** Help, Capabilities, Architecture, Development, Operations,
  Upstream, and Records are accepted roles, not mandatory folders or a reason
  for cosmetic mass movement.
- **Minimal coordination:** trial one concise documentation-impact declaration.
  Keep it useful and small; do not grow a broad metadata or pull-request
  bureaucracy without repeated evidence that it is needed.
- **Gradual features:** feature work often lands in slices. Each slice should
  update the stable owners for the same capability when their truth changes;
  it should not create a new durable document merely because there is a new PR,
  implementation phase, or partial milestone.
- **Inventory:** use generated exhaustive inventory plus a temporary reviewed
  disposition ledger. Do not impose a permanently hand-maintained list of every
  Markdown path.
- **Pilot boundary:** the three pilots happen inside this implementation
  program. They gate broad remaining-corpus migration, final capability schemas,
  and full public publishing—not Phase 0 truth repair, evidence preservation,
  core governance, inventory, initial capability mapping, publishing
  foundations, or other safe preparation that can be completed now.
- **Future MCP:** an agent-facing documentation MCP remains a later option. It
  is not part of this implementation pass.
- **Anti-complexity rule:** every governance surface, field, file, and automated
  check must earn its maintenance cost. Prefer existing owners, generated views,
  links, and conditional updates; remove temporary migration machinery after it
  has served its purpose.

These decisions authorize the staged documentation implementation described
here. Repository merges, website deployment, app release, MCP implementation,
and separately proposed product-architecture changes retain their normal
review or authorization gates.

## What Acceptance Would And Would Not Mean

Acceptance would establish the intended information architecture, authority
model, public publishing direction, update contract, and staged order.

Acceptance would not by itself:

- move or delete documents;
- mark existing proposals as accepted architecture;
- publish unreleased behavior;
- merge or deploy website changes;
- create an MCP server;
- change T3 or OpenCode integration policy;
- accept every metadata field or publishing transport discussed here; or
- authorize the complete migration without phase-specific review.

Phase 0A truth repairs and evidence preservation are part of the accepted
implementation program. They remain deliberately separate from policy
promotion so their factual evidence and review boundaries stay clear.

## Implementation Start Gate

The documentation program began after:

1. the human acceptance answers above were recorded explicitly;
2. the accepted proposal and Draft audits were prepared for preservation and
   the desktop forensic reports were queued for a current-base isolated branch;
3. exact repository heads and active overlapping pull requests were refreshed;
4. Phase 0A and Phase 0B work are separated from Phase 1 policy promotion;
5. each repository change has its own branch, scope, tests, review, and landing
   order;
6. no corpus migration, website publication, MCP, or architecture
   implementation is inferred from plan acceptance; and
7. scient-agent remains excluded until native Scient-agent implementation
   begins.

The initial accepted goal authorized the in-scope documentation work through
focused repository-local branches and pull requests. Later explicit
authorization covered review and integration of that implementation. Neither
authorization included an app release, MCP work, or product-architecture
changes.

### Prepared Initial Work Packages

These are authorized initial scopes. Refresh their exact heads and collision
checks immediately before creating branches.

| Package               | Repository     | Focused scope                                                                                                                                                                                  | Dependency and exit evidence                                                                                                               |
| --------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| P0-SCIENT-EVIDENCE    | Scient         | Preserve this accepted plan, the three dated Draft audits, and their index entries without conflating acceptance with operational completion.                                                  | Current Scient main; formatting, metadata, local-link, and diff checks. No policy promotion.                                               |
| P0-DESKTOP-FORENSICS  | scient-desktop | Place the three forensic reports on an isolated current-main branch, reconcile the post-snapshot #190 change, add metadata and a discoverable index route, and preserve exact snapshot limits. | Current desktop main and refreshed capability/PR evidence; no claim that reports are live implementation authority.                        |
| P0A-DESKTOP-TRUTH     | scient-desktop | Correct voice privacy/data flow, public contributor boundary, and stale provider-proposal disposition; reconcile index omissions only where the same focused owner is touched.                 | Current main plus collision review with PR #188 and other documentation candidates; targeted documentation checks and source verification. |
| P0A-SCIENT-TRUTH      | Scient         | Repair the three audited metadata anomalies without changing their evidence content or authority.                                                                                              | P0-SCIENT-EVIDENCE or a clean non-conflicting branch; metadata and link validation.                                                        |
| P0A-WEBSITE-TRUTH     | Website        | Correct repository-family wording for the planned scient-agent boundary.                                                                                                                       | Current website main; repository checks. No Docs transport or site construction.                                                           |
| P0B-DESKTOP-188       | scient-desktop | Rebase/reverify/merge PR #188 or close it and record where still-useful reconciliations will move.                                                                                             | Current desktop main and active feature-branch review; explicit human disposition.                                                         |
| P1-SCIENT-GOVERNANCE  | Scient         | Promote accepted family policy, contribution evidence, AGENTS.md route, and documentation index only.                                                                                          | Human acceptance; P0 truth complete; fresh-agent route tests; proposal disposition updated at exit.                                        |
| P1-DESKTOP-GOVERNANCE | scient-desktop | Promote self-contained public rules through AGENTS.md, docs/README.md, work-artifacts, CONTRIBUTING.md, and the PR template.                                                                   | Accepted Scient contract and known PR #188 disposition; public-contributor route test.                                                     |
| P1-WEBSITE-GOVERNANCE | Website        | Promote app-help ownership, website rendering/version ownership, dependency rules, and the concise PR field.                                                                                   | Accepted Scient contract; website remains transport-neutral until the pilot.                                                               |

Phase 2 inventory, the three vertical pilots, website publication,
remaining-corpus normalization, and the first maintenance proof are complete.
The next real retirement and upstream-integration cases remain future
maintenance evidence. Additional automation and a possible MCP remain separate
gates and should be added only when demonstrated update or retrieval failures
justify their cost.

## Implementation Progress And Remaining Gates

The first implementation pass is complete through the consolidated pull
requests below. Superseded intermediate PRs remain available as review history,
but only the durable net results were merged:

| Work area                               | Durable evidence                                                                                                                                                                                                                                                         | Merged result                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accepted package and Scient truth       | [Scient #101](https://github.com/ScientFactory/Scient/pull/101) and [#102](https://github.com/ScientFactory/Scient/pull/102)                                                                                                                                             | Preserves the accepted package and dated audits, then repairs the three scoped metadata anomalies without changing their evidence.                                                                                                                                                                                                                                                                    |
| Durable Scient governance               | [Scient #103](https://github.com/ScientFactory/Scient/pull/103)                                                                                                                                                                                                          | Promotes repository-family authority, logical roles, gradual-feature ownership, the concise documentation-impact declaration, and reading routes into policy, contribution guidance, agent guidance, and indexes.                                                                                                                                                                                     |
| Generated inventory and routing         | [Scient #107](https://github.com/ScientFactory/Scient/pull/107), consolidating historical candidates #104–#106                                                                                                                                                           | Regenerates the exhaustive inventory at the final merged product heads: 1,203 Markdown files across Scient, desktop, and website, including 31 canonical Help pages and 928 structurally excluded vendored donor files. Adds the compact capability map, reconciles capability boundaries, records the scient-agent exclusion without inspection, and closes the temporary disposition ledger.        |
| Desktop baseline, truth, and governance | [Desktop #188](https://github.com/ScientFactory/scient-desktop/pull/188) and [#194](https://github.com/ScientFactory/scient-desktop/pull/194), consolidating historical candidates #191–#193                                                                             | Aligns file/document planning, preserves the forensic reports, completes index routes, corrects voice/provider/contributor truth, and promotes self-contained Desktop documentation governance.                                                                                                                                                                                                       |
| Help qualification and user review      | [Desktop #199](https://github.com/ScientFactory/scient-desktop/pull/199), consolidating historical qualification candidates #195–#198                                                                                                                                    | Publishes 31 concise canonical Help pages after full content and rendered review. Forking is documented inside **Message Scient**; unreleased mobile guidance moved to an internal release hold; the temporary qualification queue is retired.                                                                                                                                                        |
| Website ownership and publishing        | [Website #28](https://github.com/ScientFactory/ScientFactory-website/pull/28), [#29](https://github.com/ScientFactory/ScientFactory-website/pull/29), and [#31](https://github.com/ScientFactory/ScientFactory-website/pull/31), with #30 retained only as pilot history | Publishes all 31 pages from exact merged desktop commit `7d2187eb383505956e95c8ebcfcfe8006d6edba2`. HTML, UTF-8 raw Markdown, JSON index, search, six manifest-owned categories, collapsible navigation, direct downloads, source/version evidence, immutable hashes, independent scrolling, fail-closed generation, correction triggers, rollback, local browser review, and hosted checks all pass. |

### Pilot Decisions Supported By Evidence

The pilots support the smallest version of the accepted model:

- keep `scient-desktop/docs/user/` flat and canonical; do not create a second
  Help tree or commit generated website prose;
- use a reviewed website manifest pinned to a full desktop commit and per-page
  hashes for the present transport, while retaining an explicit re-evaluation
  condition if availability, scale, privacy, or release engineering changes;
- keep public navigation metadata in the publishing manifest rather than add a
  mandatory metadata block to every inherited Help page;
- expose version-aware HTML, exact raw Markdown, and a JSON index before
  considering an MCP;
- retain the logical roles and current inherited physical paths; the pilots did
  not reveal a clarity benefit large enough to justify broad file movement; and
- keep migration machinery temporary. The complete-corpus manifest now owns
  publication selection, desktop #199 retires the Help queue, and the completed
  disposition ledger is Historical rather than a second recurring registry.

The website browser review found and corrected two issues that static checks
did not reveal: hidden search results still occupied layout space, and raw
Markdown needed explicit UTF-8 response headers. A subsequent mobile review
replaced the full pre-content table of contents with a compact disclosure while
preserving the desktop sidebar. These findings justify retaining proportional
rendered-preview review alongside deterministic source and build checks.

The complete-corpus pass then found one additional scale issue: 31 links could
overwhelm both navigation surfaces. Website #31 uses six collapsible,
manifest-owned categories, keeps less-used pages behind small More disclosures,
and lets the desktop sidebar and article scroll independently. Its raw routes
return `text/markdown; charset=utf-8`, and its index identifies all 31 pages.
Automated, local browser, iterative human, hosted CI, and Cloudflare preview
review all passed before integration.

### Maintenance-Loop Evidence

Three real changes have exercised the update contract during this pass:

1. Merged desktop [PR #190](https://github.com/ScientFactory/scient-desktop/pull/190)
   changed provider and agent defaults across seven implementation files but
   shipped without Markdown. Desktop #196 routes the consequence back into the
   existing provider capability owner and the three Help owners whose visible
   behavior changed, plus the then-temporary qualification queue. It creates no
   new permanent feature document. The four durable authored updates are
   justified by the change spanning shared, Codex, and Claude behavior; an
   ordinary single-provider slice should normally touch fewer. Consolidated
   desktop #199 later removes the temporary row owner after its evidence is
   consumed.
2. Website #30 is an architecture-affecting change to the documentation system
   itself. It adds one focused publishing-architecture owner, one reviewed
   machine selection manifest, and one thin README route. Rendering, generated
   pages, raw content, and the search index remain generated views rather than
   additional authored authorities.
3. Consolidated desktop #199 and the historical disposition ledger exercise
   documentation retirement itself. One temporary file and one temporary index
   route are removed only after the canonical Help pages, exact-source
   manifest, mobile exclusion, Git history, and program record preserve every
   lasting fact. No replacement prose registry is created.

The product-feature retirement and upstream portions of Phase 5 remain
deliberately pending.
The earlier Quick Chat retirement [desktop #146](https://github.com/ScientFactory/scient-desktop/pull/146)
and T3 integration [desktop #189](https://github.com/ScientFactory/scient-desktop/pull/189)
remain valid tabletop and baseline evidence, but both predate the live
maintenance proof. No later real retirement or T3 intake occurred during this
pass. The accepted rule forbids manufacturing either change to close the gate;
the next real cases must use the durable update contract and record their
actual authored-document fan-out.

### Completed Work And Remaining External Gates

The pending live product retirement and upstream cases did not postpone work
that could be completed safely. The migration program has now completed
governance promotion, the exact inventory and final owner review, capability
routing, all-page Help qualification, nearest-owner corrections, the complete
desktop-first preview corpus, source/hash validation, generated navigation,
UTF-8 raw and JSON delivery, rendered desktop/mobile checks, logical corpus
normalization, and retirement of both temporary migration authorities.

The pilots rejected a universal capability schema and broad physical moves as
unnecessary maintenance cost. Existing detailed owners remain heterogeneous
where their questions differ; the compact map supplies family-level routing.
The proportional automation portfolio is the existing metadata and link
checks, generated inventory, website exact-revision and hash rejection,
generated navigation/indexes, reproducible builds, and rendered preview review.
Automatic enforcement of every possible documentation impact remains
unjustified unless repeated omissions appear.

The remaining gates require release authority or a future real event:

1. selection of an exact stable app release before public Docs can default to
   stable rather than a clearly labelled candidate preview;
2. the next real product-feature retirement and T3 integration maintenance
   cases; and
3. separately authorized MCP or product-architecture work, if later justified.

Do not add automatic enforcement for every possible documentation impact yet.
The concise pull-request declaration is still a trial; add enforcement only if
repeated omissions show that repository guidance and review are insufficient.
The documentation MCP remains outside this pass.

## Completion Criteria For The Documentation Program

The documentation program is complete when:

- users and support agents can reliably learn and troubleshoot released Scient
  through one version-aware public Docs corpus;
- each current capability has one discoverable implementation owner and an
  appropriately scoped record;
- shared architecture, authority, lifecycle, and divergence are explicit;
- product direction, current implementation, proposals, research, and history
  remain distinguishable;
- plans no longer need to duplicate current implementation inventories;
- development, operations, philosophy, first principles, quality doctrine, and
  upstream knowledge remain preserved and navigable;
- cross-repository update responsibility is clear to contributors and agents;
- feature agents update durable owners without leaving redundant plans,
  transcripts, handoffs, or one-file-per-feature debris;
- website and any future MCP publish or retrieve canonical content rather than
  maintaining separate prose;
- a real feature change, retirement, and upstream integration have proven the
  maintenance loop; and
- the ongoing update cost is low enough that normal product work can keep the
  system truthful.
