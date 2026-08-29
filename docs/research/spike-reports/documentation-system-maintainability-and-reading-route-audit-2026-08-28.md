# Documentation System Maintainability And Reading-Route Audit

Status: Draft
Owner: Yaacov
Created: 2026-08-28
Last updated: 2026-08-28
Purpose: Tests whether the proposed Scient documentation system gives contributors and agents short, unambiguous routes to the correct content owner without creating excessive recurring update work.
Doc type: Research evidence

## Document Rules

This report is dated decision-readiness evidence for the proposed [Scient
Documentation System And
Publishing](../../planning/scient-documentation-system-and-publishing.md). It
tests governance reading routes and representative update workflows against the
exact repository revisions below.

It does not accept the proposal, replace current repository guidance, authorize
file moves, establish a website publishing transport, or make its suggested
limits into policy. Promote accepted rules into the concern-specific policy,
contribution, agent, index, and content owners described by the proposal.

The current `scient-agent` repository is outside this investigation. No file in
that repository was read. It remains the planned home for future native Scient
agent work, while its current OpenCode-derived checkout is not treated as
implemented Scient-agent documentation.

## Question

Can the proposed system remain understandable and current when ordinary feature
agents, public contributors, internal cross-repository contributors, website
publishers, upstream integrators, and documentation stewards use it repeatedly?

The test is deliberately narrower than another corpus audit. The [Markdown
audit](documentation-system-markdown-audit-2026-08-28.md) already enumerates
the files, and the [capability-to-foundation architecture
audit](scient-capability-to-foundation-architecture-audit-2026-08-28.md)
already maps the implementation. This report tests the missing operating
question: whether a person or agent can find and maintain those owners without
reading the whole governance system or creating one document per change.

## Evidence Boundary

The reading tests used these exact states on 2026-08-28:

| Repository or candidate              | Exact identity                                                                                             | Surfaces inspected                                                                                                                                               |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Scient` proposal candidate          | `9a309d6bb952a3fae8c0dd3495139c7c0736b37a` plus the uncommitted proposal and dated audits in this worktree | `AGENTS.md`, documentation policy, documentation index, onboarding, team contribution protocol, project-skill index, and the complete relevant proposal sections |
| `scient-desktop` current remote main | `d5ff08e721086eec02a2a84ad1431b33da6f5269`                                                                 | `AGENTS.md`, `CONTRIBUTING.md`, `docs/README.md`, work-artifacts guidance, pull-request template, and upstream-maintenance owner                                 |
| Desktop documentation PR #188        | head `33cfee24` compared with current remote main                                                          | Its seven changed documents and especially the proposed desktop index additions; it remains open and behind current main                                         |
| Website current remote main          | `f129246a9e59894c7bb19dc2d17b7c6ac3b0ce82`                                                                 | `AGENTS.md`, `README.md`, `CONTRIBUTING.md`, and pull-request template                                                                                           |

The local canonical desktop and website checkouts were behind their remotes, so
the tests read `origin/main` objects rather than treating those local working
trees as current. The proposal candidate remains uncommitted and therefore is
not current policy.

A later readiness recheck found desktop main at `c0baaab2` through merged PR
#190. It changes no Markdown or governance surface, so the route simulations
remain evidence for their exact `d5ff08e7` baseline. Its user-visible settings,
sensitive-display, and agent-access defaults must nevertheless pass the
proposed documentation-impact route during Phase 0B.

## Method And Pass Conditions

Each reading-route simulation begins with a real question rather than a folder
name. A route passes only when it lets an oriented contributor or agent:

1. identify the repository that owns the fact;
2. reach a real content owner, or an explicit statement that the owner does not
   exist yet;
3. distinguish current, candidate, proposed, and historical material;
4. know whether another repository has a genuine dependent change; and
5. avoid reading every policy, index, onboarding guide, skill, contributor
   guide, and pull-request template before acting.

This test separates three kinds of reading:

- **Onboarding** is a deliberate, occasional deep journey through product,
  authority, repository, and contribution context.
- **Task reorientation** is the short recurring path used by an already
  oriented contributor before a specific change.
- **Content investigation** is the task-dependent reading of the actual help,
  capability, architecture, source, code, tests, or history that owns the
  subject.

The proposed system becomes too expensive if it turns onboarding into a
per-pull-request ritual. Conversely, a short route does not excuse shallow
content investigation after the correct owner is found.

## Outcome

The proposed model is maintainable with several explicit safeguards. Its core
nearest-owner model, update-before-create rule, logical-before-physical
migration, and zero-to-two ordinary-update target survive the simulations.
Seven logical areas do not by themselves create seven files per feature.
Keeping docs/user/ as the durable physical Help source is consistent with this
finding and removes the need for a parallel target directory.

The present repositories are not yet sufficient to operate the complete model:

- desktop guidance can usually route an agent by audience, but its public
  contributor boundary is stale, its indexes are incomplete, and it has no
  documentation-impact declaration;
- Scient identifies repository ownership and has strong documentation policy,
  but that policy explicitly governs only Scient and the shared contribution
  protocol does not yet require documentation-impact evidence;
- the website identifies the repository family and deployment owner, but it
  does not identify desktop documentation as the app-help source or define a
  versioned publication route; and
- the current upstream and temporary-work routes are already strong and should
  be preserved rather than redesigned.

The proposal should therefore be tightened, not expanded. It needs a clear
one-time-onboarding versus recurring-route distinction, an explicit route
success criterion, current-path compatibility during migration, and one
additional factual baseline repair in the website repository-family wording.
It does not need another registry, another document category, mandatory
capability pages for every feature, or an MCP before publication is proven.

## Current Front-Door Map

| Surface                               | Current strength                                                                                                                                             | Current limitation                                                                                                                                                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Scient/AGENTS.md`                    | Clearly identifies sibling repository ownership, independent pull requests, current product maturity, durable-document placement, and the stewardship skill. | It is an internal, broad orientation surface. It should route rather than become the recurring copy of family policy.                                                                                              |
| `Scient/docs/documentation-policy.md` | Strong metadata, status, placement, evidence, promotion, history, conflict, and truth rules.                                                                 | It explicitly governs only the Scient repository and does not yet establish the proposed family nearest-owner contract.                                                                                            |
| `Scient/docs/onboarding.md`           | Provides a careful shared reading journey and contribution-area routes.                                                                                      | Its depth is appropriate for onboarding, not for every ordinary feature update.                                                                                                                                    |
| Shared team contribution protocol     | Clearly owns separate pull requests, evidence, review, and dependency ordering across repositories.                                                          | It has no concise documentation-impact declaration or update responsibility yet.                                                                                                                                   |
| Desktop `AGENTS.md`                   | Gives public local safety rules, direct documentation categories, upstream routing, and strong temporary-artifact rules before inherited T3 guidance.        | The document is necessarily long because it preserves inherited guidance, and its documentation route remains audience-shaped rather than authority-shaped.                                                        |
| Desktop `CONTRIBUTING.md`             | Gives a simple external proposal boundary.                                                                                                                   | It still describes the released repository as a private migration candidate and provides no documentation placement or impact route.                                                                               |
| Desktop `docs/README.md`              | Separates user and maintainer material and links many current owners.                                                                                        | The corpus audit found six public-help and fourteen non-receipt internal documents missing from current index routes; logical current-capability ownership is not explicit.                                        |
| Desktop work-artifacts guidance       | Already provides the right durable-facts, GitHub-plans, temporary-work, and merged-PR model.                                                                 | It is labelled as an internal document rather than visibly presented as the local feature-document lifecycle owner. A move is not required to fix that.                                                            |
| Desktop pull-request template         | Keeps contribution evidence concise.                                                                                                                         | It does not ask whether documentation changed or whether a dependent documentation pull request exists.                                                                                                            |
| Website `AGENTS.md`                   | Correctly routes to local contribution rules and requires separate cross-repository pull requests.                                                           | It does not say who authors app-help prose or what source/version facts a Docs publisher must preserve.                                                                                                            |
| Website `README.md`                   | Clearly owns the website, deployment, downloads, and current operational systems.                                                                            | It has no public-Docs source contract. Its repository-family summary describes `scient-agent` as owning a native-agent source foundation without clarifying that native Scient-agent implementation has not begun. |
| Website pull-request template         | Captures checks, human preview review, quality review, integration readiness, and deployment impact.                                                         | It does not expose documentation-source or version impact.                                                                                                                                                         |

## Question-Based Reading Routes

### Route 1: Public Desktop Contributor

**Question:** “I changed behavior that a Scient user will notice. Where do I
document it?”

Current route for an agent:

1. Desktop `AGENTS.md` says user-visible behavior belongs in `docs/user/` and
   points to the local documentation split.
2. Desktop `docs/README.md` should lead to the subject page.
3. The existing subject page and source own the actual behavior.

Current verdict: **conditional pass**. This route is self-contained and does
not require private Scient access, which is essential. It fails when the page
is one of the currently unindexed documents, when a current capability fact is
mistaken for user instructions, or when a human contributor enters through the
stale `CONTRIBUTING.md` and never receives the documentation route.

Target route after Phase 1:

1. Desktop `AGENTS.md` or `CONTRIBUTING.md` gives one short trigger and links
   the local index.
2. The desktop index maps the logical role—help, capability, architecture,
   development, operations, upstream, or record—to the real current path.
3. The subject owner is updated; a new page is created only if no coherent
   owner exists.

During migration, the index must continue to identify `docs/user/` as the real
and durable help source. Phase 1 must not direct contributors to a parallel
help tree or cause a cosmetic mass move. A normal visible feature should reach
its owner after at most two routing surfaces.

### Route 2: Internal Cross-Repository Feature Agent

**Question:** “This feature changes desktop behavior and may affect product
planning. Which repositories and documents change?”

Current route:

1. Scient `AGENTS.md` identifies the repository owners and separate-pull-request
   rule.
2. Scient policy classifies product, planning, architecture, research, and
   current implementation material, but only inside Scient.
3. Desktop guidance and index route to local implementation documentation.
4. The team contribution protocol governs separate pull requests but does not
   yet require an explicit documentation-impact result.

Current verdict: **partial pass**. An informed agent can find the repositories,
but no accepted family contract says that ordinary current implementation facts
remain with desktop while Scient changes only when product direction,
cross-product architecture, planning, or research authority actually changes.
This leaves room for over-updating roadmaps or copying current behavior into the
private parent.

Target route:

1. An oriented internal agent uses the family rule in Scient `AGENTS.md` or the
   accepted policy to identify the nearest repository owner.
2. The owning repository's local index leads to the content owner.
3. The pull request reports `None`, `Updated`, or `Dependent PR` for
   documentation impact.
4. A Scient pull request is opened only when a fact Scient owns genuinely
   changes, with explicit landing order.

The stewardship skill is appropriate when documentation placement or
reconciliation is the task. It should not be mandatory machinery for every
ordinary code edit, and it cannot replace the policy or content owner.

### Route 3: Website Docs Publisher

**Question:** “Which app-help source and version should this website preview or
production build render?”

Current route:

1. Website `AGENTS.md` leads to website contribution guidance and the
   repository-family section.
2. Website `README.md` explains deployment and desktop release metadata.
3. No current owner defines an app-help source, source transport, preview
   identity, or stable documentation version.

Current verdict: **fail, with an honest missing decision**. An agent cannot
safely implement canonical Docs publishing from current guidance. It should
report the gap rather than copy prose into the website or guess that branch
`main` equals the released desktop version.

Target route:

1. Website `AGENTS.md` states that desktop owns app-help prose and that website
   work owns rendering plus exact source/version behavior.
2. Website `README.md` or a focused local operations owner records the
   transport selected by the publishing pilot.
3. A reviewed manifest selects release- and surface-qualified pages from
   desktop docs/user/; inherited directory membership is not publication
   approval.
4. A preview identifies an exact candidate source; stable Docs identify an
   exact released source and support version-truthful corrections.
5. Generated HTML, raw content, navigation, and page metadata come from that
   source without a second authored website corpus.

Phase 1 can establish ownership, but it must not pretend the transport has been
selected. The correct route ends at a visible “pilot decision required” boundary
until Phase 4 proves checkout, manifest, release artifact, or another bounded
transport.

### Route 4: Upstream Integration Agent

**Question:** “Why does this T3-derived fork differ, and what records change for
an upstream merge?”

Current route:

1. Desktop `AGENTS.md` directly requires `UPSTREAM.md`,
   `upstream-state.json`, and the D4 bootstrap record before protected-divergence
   work.
2. `UPSTREAM.md` identifies the owned repository, official source, current
   verified ancestry, integration method, protected seams, and dated receipt.
3. The new integration receives one dated receipt and updates the current
   upstream state.

Current verdict: **pass**. The route is direct, repository-local, public, and
source-backed. The current owner plus machine state plus immutable receipts is
the strongest existing example of the proposed current-versus-history model.

Target treatment: preserve the root `UPSTREAM.md` compatibility route. The
logical `upstream` area may index it without moving it. Do not make every
capability page repeat the integrated commit range; update a capability or
architecture owner only when its own Scient seam or behavior changed.

### Route 5: Documentation-Only Or Feature-Planning Agent

**Question:** “I have investigation notes, a plan, a handoff, and several
possible Markdown files. Which ones belong in Git?”

Current desktop route:

1. Desktop `AGENTS.md` says plans and scratch artifacts do not belong in the
   source tree.
2. The work-artifacts owner distinguishes current durable facts, GitHub-owned
   planned work, temporary work outside the tree, and the merged pull request
   as implementation record.

Current Scient route:

1. Scient `AGENTS.md` routes to the documentation policy and stewardship skill.
2. The policy applies durable-knowledge, evidence, placement, status,
   promotion, history, and conflict tests.
3. The relevant area index and existing owner are read before a new file is
   admitted.

Current verdict: **pass with repository-specific scope**. Desktop already has
the stronger feature-work rule; Scient already has the stronger durable
planning and research classification rule. The target system should connect
these without copying either one wholesale into the other repository.

Target treatment: update an existing durable owner first. Keep active
implementation progress in the GitHub item and pull request. Keep scratch,
transcripts, temporary research, and session handoffs outside the worktree.
Create a new durable file only when it owns a distinct lasting question and can
state its repository, owner, status, evidence boundary, index route, and update
trigger.

### Route 6: User Or Support Agent Seeking Released Behavior

**Question:** “How do I do this in the version of Scient I actually have?”

Current verdict: **fail as a complete public system**. Desktop has useful
`docs/user/` pages, but there is no complete version-selected public Scient Docs
surface and no public retrieval contract for support agents.

Target route:

1. The user or support agent enters the website's `/docs` surface.
2. Stable HTML, stable anchors, raw or structured content, generated page
   metadata, search, and visible source/version identity all come from the same
   released desktop documentation source.
3. Candidate behavior appears only in a labelled preview.

This route does not require MCP. A future MCP is justified only if measured
retrieval failures remain after the public HTML, raw content, index, search,
anchors, and version model are stable.

## Representative Update Simulations

These simulations test recurring authoring cost. “Primary owners” means
documents whose own fact changed. Index, metadata, receipt, or navigation work
is counted separately when it is a one-time or structural consequence.

| Change                                             | Normal primary owners                                                                                          | Conditional owners                                                                                                                                                       | Expected recurring fan-out                                                             |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Ordinary user-visible feature or bounded fix       | Existing help page; capability-family record when availability, limits, support, or maturity changed           | Operations only for a real runbook change; architecture only for a changed invariant                                                                                     | Usually one or two                                                                     |
| Privacy, permission, authority, or recovery change | Help and capability truth                                                                                      | Architecture or ADR when authority/lifecycle changed; website only if its own published claim or pipeline changed; Scient product truth only if product policy changed   | Usually two or three because omission is high risk                                     |
| Shared implementation foundation                   | Owning implementation architecture record                                                                      | Affected capability-family records; ADR for a hard-to-reverse decision; Scient cross-product architecture only when the decision crosses repositories or product systems | One to three, proportional to real authority                                           |
| T3 upstream integration                            | Current upstream owner and one dated receipt/machine-state update                                              | Capability, help, architecture, or operations only where the integration changed a fact those documents own                                                              | Usually two upstream artifacts, without global fan-out                                 |
| Capability retirement                              | Released help removal or replacement and capability disposition                                                | Upstream record for a protected divergence; architecture for a removed invariant; historical record only when reasoning remains useful                                   | Two to four; retirements legitimately exceed ordinary work                             |
| In-flight feature pull request                     | Candidate help/capability/architecture changes on the same branch when they are needed to review the candidate | A labelled website preview from that exact head; a proposed Scient decision only if the feature changes an owner there                                                   | No stable publication before merge/release; no repository plan merely to mirror the PR |
| Documentation-only correction                      | The document containing the wrong fact                                                                         | Index only if navigation or identity changed; dependent repository only if its separately owned fact is also wrong                                                       | Usually one                                                                            |

### Simulation Findings

1. **Current help and current capability are intentionally separate.** A help
   page answers how a user performs a task; a capability record answers what is
   implemented, where, with which limits, dependencies, support, and evolution.
   They should link, not copy each other's full content.
2. **A roadmap is not a release ledger.** It changes only when desired outcome,
   scope, dependency, sequence, or gates change. Landing another step does not
   require rewriting every related plan if current implementation truth has a
   nearer owner.
3. **Cross-repository does not mean multi-repository by default.** A desktop
   behavior change can be complete in desktop. A dependent Scient or website
   pull request exists only when that repository owns a changed fact or
   publication mechanism.
4. **Stable publishing removes duplicate website updates.** Once the website
   consumes an exact released desktop source, ordinary help changes should not
   require a prose-edit pull request in the website.
5. **In-flight truth must remain visibly in flight.** Candidate documentation
   can travel with a feature branch and power a labelled preview, while stable
   Docs remain pinned to a released source. An abandoned branch should not
   leave an implemented claim on stable Docs.
6. **Removal requires disposition, not unlimited history.** Preserve reasoning
   when it remains useful, but do not keep a second living checklist for every
   removed button or minor state.

## Overcomplication And Drift Tests

The proposed system should fail review if implementation introduces any of the
following maintenance burdens without new evidence:

- contributors must read the full onboarding journey for every pull request;
- a feature must create one help, capability, architecture, roadmap, upstream,
  and record file whether or not those owners changed;
- a parallel help directory is created while docs/user/ remains a usable
  T3-compatible source merely to make the tree look complete;
- a global hand-maintained list must mirror every Markdown file after the
  migration inventory has served its temporary purpose;
- private Scient documentation is required to make a valid public desktop or
  website contribution;
- the website maintains an authored copy of desktop help;
- a support MCP maintains answers separately from the public corpus;
- every repository receives the same policy text or pull-request template for
  visual symmetry;
- a missing publishing transport is hidden behind vague “source of truth”
  language; or
- scient-agent governance is invented before native Scient-agent work gives it
  a real owner and implementation boundary.

Seven logical desktop areas are therefore a **classification vocabulary**, not
seven mandatory physical directories and not seven update obligations. A
repository index can map inherited `docs/user/`, `docs/internals/`,
`docs/operations/`, root `UPSTREAM.md`, package READMEs, and later target paths
into those roles while preserving useful T3 compatibility.

## Required Proposal Tightening

The evidence supports these focused changes to the proposal before acceptance:

1. State explicitly that the deep onboarding journey is occasional, while an
   oriented contributor's recurring route should normally use no more than two
   governance/routing surfaces before the actual content owner. Treat this as
   a design diagnostic, not CI or a substitute for task research.
2. Mark the question-based routes as target logical routes. Until migration,
   the local index must map each role to real current paths, and agents must not
   create missing target folders merely to satisfy the taxonomy.
3. Define route success as reaching the real owner **or an explicit missing
   decision** with status, version, and repository boundary intact. Website
   source transport is the important current example.
4. Keep the five original governance route tests and add the public user or
   support-agent retrieval path as the publishing acceptance test.
5. Add a Phase 0 factual repair for the website repository-family wording so it
   describes `scient-agent` as the planned native-agent home and does not imply
   that native implementation already exists. This change does not require
   reading or modifying the current scient-agent repository.
6. Preserve desktop's existing upstream and work-artifact models as foundations
   to link and clarify, not replace.

No new policy layer or acceptance question is needed for these refinements.
They clarify how the already-proposed governance and publishing choices should
operate.

## Post-Review Proposal Refinements

Subsequent independent reviews and owner discussion strengthened the proposal
without changing this audit's evidence boundary:

- docs/user/ remains the durable Help source; no docs/help/ migration is a
  target or acceptance requirement;
- Phase 0 is split into immediately justifiable truth/preservation work and
  moving-baseline reconciliation;
- PR #188 receives a bounded disposition and blocks only overlapping desktop
  documentation edits;
- Phase 1 distinguishes a small required promotion set from conditional
  surfaces and requires the proposal to stop competing with promoted policy;
- the publishing pilot must prove page qualification, update triggers,
  freshness, visible failure, and a stable-correction path;
- capability records start from a minimal schema, while the longer question
  set remains a completeness prompt; and
- docs/user/ verification is a temporary generated queue, not a permanent
  registry.

These are proposed design dispositions, not accepted policy or implementation
evidence.

## Minimal Phase 1 Promotion

If the proposal is accepted, the smallest operational promotion remains:

1. **Scient:** family policy owns nearest-owner and durable-knowledge rules;
   the shared contribution protocol owns documentation-impact and dependent-PR
   evidence; `AGENTS.md`, onboarding, indexes, and the skill remain thin routes.
2. **Desktop:** after PR #188's overlapping disposition is known, repair the
   stale contributor boundary; make `AGENTS.md` route by logical role; make
   `docs/README.md` the compatibility map to real paths; preserve and clarify
   work-artifacts guidance; add one concise documentation-impact field to the
   existing pull-request template. PR #188 does not block unrelated truth,
   Scient, website, or architecture work.
3. **Website:** make `AGENTS.md` identify desktop app-help ownership and local
   rendering/version ownership; correct the planned agent-repository wording;
   add one source/version-impact field to the existing pull-request template.
   Do not document a transport until the publishing pilot selects it.
4. **All repositories:** use separate branches and pull requests with explicit
   dependency order. Do not move the full corpus and do not change
   `scient-agent`.

Scient does not need a pull-request template merely for symmetry during the
pilot. The shared protocol and local agent guidance can establish the field;
repeated omission would be evidence for adding a minimal template later.

## Pilot Measurements

The three documentation verticals and the maintenance-loop phase should record
only measurements that can help simplify the system:

- routing surfaces read before reaching the content owner;
- primary authoritative documents updated;
- navigation, metadata, receipt, or historical files updated separately;
- dependent repository pull requests and why each was necessary;
- new durable files admitted and which admission criterion required them;
- owner ambiguity or conflicting current claims encountered;
- stable-versus-preview source identity and publication result; and
- documentation corrections required after implementation review or human use.

Do not convert these measurements into a permanent per-feature dashboard unless
the pilot proves durable operational value. Their first purpose is to detect
unnecessary fan-out, missing owners, and false cross-repository dependencies.

## Decision-Readiness Verdict

**Ready for human decision on the core contract, not ready for broad
migration.** The model gives every tested question a coherent target route,
keeps ordinary authoring bounded, preserves strong existing local practices,
and exposes the website transport as a deliberate unresolved choice rather than
an invisible gap.

The first implementation should remain Phase 0A truth/preservation work,
Phase 0B baseline reconciliation, and then the small Phase 1 governance
promotion. The vertical pilots must then prove real authoring, qualified
source-version publishing, stable correction, and maintenance cost before the
complete corpus is normalized or MCP is considered.

## Remaining Risks

- Desktop documentation PR #188 is open and behind current main; its final
  disposition can change the exact Phase 1 index edit.
- Current indexes remain incomplete, so the migration ledger still needs a
  refreshed exact-head review after active documentation work lands.
- Capability-family record shape is not yet proven. The pilots should begin
  with only the fields needed to answer current behavior, ownership, support,
  limits, evidence, dependencies, evolution, and update trigger.
- Website source transport, release/correction trigger, freshness expectation,
  stable-correction mechanism, and rollback are intentionally undecided until
  the publishing pilot.
- A good paper route can still fail in real agent use. Phase 1 should rerun
  these questions with fresh agents or contributors who did not author the
  policy and record where they hesitate.
- Public Docs cannot be called complete until released behavior, privacy,
  limitations, troubleshooting, version identity, navigation, search, and
  publication failure behavior are verified in a real website preview.
