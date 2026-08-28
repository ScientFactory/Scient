# Scient Documentation Markdown Audit — 2026-08-28

Status: Draft
Owner: Yaacov
Created: 2026-08-28
Last updated: 2026-08-28
Purpose: Provides a dated, file-by-file authority and disposition audit of the in-scope Scient, Scient Desktop, and website Markdown corpus that grounds the proposed long-term documentation system.
Doc type: Research evidence

## Document Rules

This report is dated research evidence for the proposed documentation system. It owns the audited path inventory, observed role classification, provenance method, current conflicts, and preliminary disposition recommendations at the exact source identities below. It does not replace repository policy, product truth, current implementation source, public help, architecture decisions, pull requests, or the owning documentation indexes.

Do not maintain this file as a permanent global registry. When the baseline materially changes, preserve this snapshot and generate a new dated audit or the temporary Phase 2 disposition ledger. A `keep`, `revise`, `merge`, `move`, or `retain` recommendation is planning evidence, not authorization to perform that action.

The current scient-agent repository is excluded by explicit decision. Its inherited OpenCode Markdown was not inspected, counted, or classified.

## Audit Question And Method

The audit asks which Markdown files currently exist, what each one is for, what authority it has, whether it is Scient-created or inherited where that distinction can be proven, and what preliminary treatment the proposed system should consider.

Evidence was gathered from:

- Scient `origin/main` at `9a309d6bb952a3fae8c0dd3495139c7c0736b37a`;
- scient-desktop `origin/main` at `d5ff08e721086eec02a2a84ad1431b33da6f5269`;
- website `origin/main` at `f129246a9e59894c7bb19dc2d17b7c6ac3b0ce82`;
- desktop's recorded exact integrated T3 base `c8aba2587d56edbf3b7872987719a12b42031f48`;
- current GitHub pull-request metadata inspected on 2026-08-28; and
- the three untracked forensic reports in the audited desktop checkout.

For desktop provenance, every non-vendored Markdown blob on scient-desktop main was compared with the same path at the exact integrated T3 base. `T3 unchanged at integrated base` means identical blobs at those two commits. `T3 path modified in Scient` proves a changed inherited path, but does not imply that every line is Scient-specific. `Scient-created path` means the path does not exist at that T3 base. Content-level ownership still requires reading the file and implementation evidence.

## Count Reconciliation

| Scope                        | Tracked Markdown | Authority treatment                                                                                                                                   |
| ---------------------------- | ---------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scient                       |              118 | File-by-file ledger below: 85 under docs/, 27 under lab/, three root files, and three project-skill files.                                            |
| scient-desktop, non-vendored |              142 | File-by-file ledger below: 113 under docs/, five root files, and 24 protocol, skill, package, asset, application, infrastructure, or packaging files. |
| scient-desktop, vendored     |              928 | Structurally excluded from Scient documentation authority: 872 under `.repos/effect-smol/` and 56 under `.repos/alchemy-effect/`.                     |
| Website                      |                6 | File-by-file ledger below; no authored Scient Docs corpus exists.                                                                                     |
| Total tracked                |            1,194 | 266 non-vendored files receive individual authority classification; 928 vendored files are classified by read-only donor boundary.                    |
| Desktop forensic reports     |      3 untracked | Candidate historical records; not current repository truth until deliberately placed and committed.                                                   |

Of the 142 non-vendored desktop files, 84 are Scient-created paths, 21 are
inherited T3 paths whose blobs differ on Scient main, and 37 are unchanged from
the exact integrated T3 base. These are provenance counts, not a claim that all
content inside a modified file is Scient-owned.

Before this report was written, the proposal worktree added one proposed planning path and modified the planning index. Open desktop PRs add five other candidate Markdown paths and modify existing files. Counting those independent candidates and the three untracked reports produces 275 unique non-vendored Markdown input paths in the observed main-plus-candidate universe. This report, the later [capability-to-foundation architecture audit](./scient-capability-to-foundation-architecture-audit-2026-08-28.md), and the later [maintainability and reading-route audit](./documentation-system-maintainability-and-reading-route-audit-2026-08-28.md) are evidence outputs and are deliberately excluded from that input count. The candidates are not one mergeable baseline and must not be presented as current main.

A readiness recheck after the audit found desktop main at `c0baaab2` through merged PR #190. That pull request changes seven non-Markdown files, so the counts and file-by-file ledger below remain exact for the Markdown corpus. Its user-visible defaults and privacy/display implications still require Phase 0B documentation-impact review and a forensic-ledger addendum; this dated audit is not rewritten as though `d5ff08e7` contained the later code.

## High-Confidence Findings

### 1. A policy exists, but there is no accepted family-wide promotion contract

Scient already has a strong active documentation policy, metadata system, area indexes, onboarding route, and documentation stewardship skill. Desktop already has a useful engineering-work-artifact rule. The missing layer is the accepted division of responsibility across repositories and governance surfaces described in the [documentation-system proposal](../../planning/scient-documentation-system-and-publishing.md).

### 2. The `user` and `internals` ambiguity is structural, not cosmetic

Desktop has 33 docs/user/ files and 68 docs/internals/ files. The internals folder combines dated upstream receipts, inherited architecture, current Scient capability records, evidence audits, implementation proposals, contributor reference, and historical plans. Renaming the folders without classification would preserve the ambiguity under new names and increase T3 merge cost.

Post-audit review therefore retains docs/user/ as the durable physical Help source. Its pages still require release and surface qualification before public publication, but no parallel docs/help/ directory or cosmetic move is recommended. The `internals` corpus remains disposition-led because its mixed authorities—not its name alone—are the actual problem.

### 3. Current, proposed, and historical desktop material conflict in several places

- `CONTRIBUTING.md` still describes a private migration candidate, while AGENTS.md and the repository state describe the active public released desktop.
- `provider-lifecycle-unification-proposal.md` says final PR #150 integration remains open even though PR #150 merged.
- `scient-pdf-export-rendering-plan.md` begins by saying implementation has not started while later sections record landed foundations; draft PR #188 attempts part of this reconciliation.
- `scientific-artifact-studio.md` mixes desktop-current implementation with cross-product future direction that also has an owning Scient planning document.
- `scient-fork-pr-descriptions.md` preserves completed PR-drafting content already substantially owned by the fork-divergence record and merged PR history.

### 4. Public-help discoverability and truth need a focused repair

Six current docs/user/ pages are not linked from the desktop documentation index: `composer.md`, `content-direction.md`, `getting-started.md`, `latex.md`, `math-in-chat.md`, and `voice-dictation.md`. Fourteen non-receipt internal pages and the v0.6.0 migration rehearsal are also absent from that index. Twenty-seven dated upstream or qualification receipts are intentionally not listed individually, but the index needs a clear route to their collection.

The voice page still claims entirely local recording and transcript processing even though optional provider-based transcript correction can transfer transcript text to the selected authenticated provider runtime. The install and updating pages also retain T3-facing titles that need an explicit compatibility-versus-product-identity decision.

### 5. Scient metadata is mostly coherent, with three concrete anomalies

`lab/external/upstream-reviews/2026-08-22-scient-desktop-t3.md` is missing four required metadata fields. `lab/notes/first-slice-source-trace-2026-07-18.md` and `lab/notes/t3-code-targeted-review-2026-07-18.md` use completion phrases as document statuses even though the active policy reserves status for authority and lifecycle. Completion should remain inside their evidence content while metadata uses a valid status.

### 6. In-flight documentation must remain separate from merged truth

- Desktop PR #188 is an open, behind draft changing seven existing documentation files; its checks predate the latest merged upstream range.
- Desktop PR #179 adds `docs/internals/managed-provider-runtime-latest-updates-proposal.md` as a 618-line proposal, not current capability truth.
- Desktop PR #129 adds the substantial in-flight ComputeSession implementation, `docs/internals/scient-compute-session-foundation.md`, `docs/user/scientific-computing.md`, and an index change. The two new pages are candidate architecture/help, not current main. PR #188 separately reconciles adjacent implementation records and labels the compute relationship as in flight.
- Desktop PR #121 adds `docs/internals/scient-overleaf.md` and `docs/user/overleaf-sync.md` plus an index change; none is current main.
- Scient has no open pull requests. Website PR #27 changes dependencies only and adds no Markdown.

### 7. The vendored corpus is large but simple to govern

All 928 vendored Markdown files live under two explicit `.repos/` donor boundaries. They are read-only implementation references, not Scient Docs, capability records, product truth, or project policy. A generated path inventory may enumerate them mechanically, but maintainers should not review or migrate them one by one unless a source is deliberately adapted.

## Preliminary Repair And Migration Order

1. Repair the current voice privacy/data-flow claim, stale desktop contributor boundary, stale provider-lifecycle proposal disposition, website repository-family wording, Scient metadata anomalies, and preservation of the three forensic reports.
2. Resolve or refresh desktop documentation PR #188 against current main as a bounded overlapping-documents decision; do not let it block unrelated truth or policy work.
3. Accept or revise the documentation-system contract before changing repository-wide guidance.
4. Build the temporary human disposition ledger and a generated docs/user/ publication-verification queue from the file-by-file evidence below; do not mass-move inherited T3 paths.
5. Use the three vertical pilots to prove help, capability, architecture, upstream, record, page-selection, version, and surface-qualification boundaries before broad migration.

## In-Flight And Untracked Markdown

| Surface                            | Paths                                                                                                                                                                                                                                                                                                                                       | Current treatment                                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| This proposal worktree             | `docs/planning/scient-documentation-system-and-publishing.md`; modified `docs/planning/README.md`                                                                                                                                                                                                                                           | Proposed and uncommitted; not accepted policy.                                                                                       |
| Documentation-system audit outputs | `docs/research/spike-reports/documentation-system-markdown-audit-2026-08-28.md`, `docs/research/spike-reports/scient-capability-to-foundation-architecture-audit-2026-08-28.md`, `docs/research/spike-reports/documentation-system-maintainability-and-reading-route-audit-2026-08-28.md`; modified `docs/research/spike-reports/README.md` | Draft dated evidence created from the snapshot and later reviews; excluded from the input count.                                     |
| Desktop PR #188                    | `docs/README.md`, `docs/internals/scient-analysis-runtime-foundation.md`, `docs/internals/scient-latex.md`, `docs/internals/scient-pdf-export-rendering-plan.md`, `docs/internals/scient-universal-file-opening.md`, `docs/internals/scientific-artifact-studio.md`, and `docs/user/file-previews.md`                                       | Open draft, behind current main; either rebase/reverify it or close it and transfer still-useful reconciliations into a pilot.       |
| Desktop PR #179                    | `docs/internals/managed-provider-runtime-latest-updates-proposal.md`                                                                                                                                                                                                                                                                        | Open draft proposal; future direction, not current behavior.                                                                         |
| Desktop PR #129                    | `docs/internals/scient-compute-session-foundation.md`, `docs/user/scientific-computing.md`, and modified `docs/README.md`                                                                                                                                                                                                                   | Substantial compute implementation and its own candidate architecture/help remain in flight; none is current main or released truth. |
| Desktop PR #121                    | `docs/internals/scient-overleaf.md`, `docs/user/overleaf-sync.md`, and modified `docs/README.md`                                                                                                                                                                                                                                            | Open draft feature documentation; not current main or released help.                                                                 |
| Desktop checkout                   | `docs/reports/scient-specific-capabilities.md`, `docs/reports/scient-pr-and-evolution-ledger.md`, and `docs/reports/scient-t3-divergence-integration-and-retirements.md`                                                                                                                                                                    | Untracked dated forensic evidence; decide a durable records location before depending on it.                                         |

## File-By-File Ledger

Each entry states the role and authority observed at the audited snapshot. Treatments are preliminary planning recommendations. They do not authorize movement, deletion, status promotion, or rewriting.

### Scient

Scient metadata provides the primary purpose and authority signal. Project skills and the minimal CLAUDE.md compatibility import are exempt from the ordinary metadata block.

#### Root protocols and orientation

- `AGENTS.md` — **Active / Agent protocol.** Defines how agents should work in this early Scient repository. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `CLAUDE.md` — **metadata-exempt / type missing.** Minimal compatibility file. **Treatment:** Keep as a minimal compatibility import; it is metadata-exempt and must not duplicate AGENTS.md.
- `README.md` — **Active / Repo orientation.** Entry point for the Scient product and project repository. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.

#### Documentation governance and onboarding

- `docs/documentation-policy.md` — **Active / Documentation policy.** Defines how Scient documentation should be created, classified, updated, and trusted. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/onboarding.md` — **Active / Repo orientation.** Gives new Scient collaborators a deliberate reading journey through the project, its repository, and its sources of truth before task-specific work begins. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/README.md` — **Active / Repo orientation.** Maps the Scient documentation structure and where each kind of information belongs. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.

#### Scient docs/architecture

- `docs/architecture/agent-runtime.md` — **Placeholder / Future home.** Defines what should be documented about Scient-agent and external-agent execution once implementation begins. **Treatment:** Retain only as a clearly reserved home; activate or remove only through a focused decision.
- `docs/architecture/collaboration-model.md` — **Placeholder / Future home.** Defines what should be documented about sharing and collaboration once the model is designed. **Treatment:** Retain only as a clearly reserved home; activate or remove only through a focused decision.
- `docs/architecture/decisions/ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md` — **Superseded / Architecture decision.** Records the decision to use owned Synara-derived source as Scient's application foundation and owned OpenCode-derived source as the foundation for Scient while keeping external agents and canonical scientific state separately owned. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `docs/architecture/decisions/ADR-0002-standalone-source-ownership-and-upstream-authority.md` — **Accepted / Architecture decision.** Records ScientFactory's decision to own standalone desktop and agent repositories while treating original projects as read-only, selectively reviewed sources. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/architecture/decisions/ADR-0003-built-in-skills-portfolio-and-project-activation.md` — **Accepted / Architecture decision.** Records where Scient-maintained built-in skills live, how projects preserve exact activation identity, and how application and agent delivery remain subordinate to Scient authority. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/architecture/decisions/ADR-0004-scient-operation-capability-and-provenance-boundary.md` — **Accepted / Architecture decision.** Establishes one host-independent Scient operation boundary for the manual UI, agents, external MCP clients, automations, browser work, and scientific evidence capture. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md` — **Accepted / Architecture decision.** Selects the T3-derived foundation for Scient Desktop while preserving Scient ownership, scientific authority, user continuity, and the independent Scient agent boundary; records the completed repository cutover and predecessor retirement. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/architecture/decisions/ADR-0006-project-owned-scient-state-and-source-store.md` — **Proposed / Architecture decision.** Proposes `.scient/` as the durable project-owned Scient state boundary and documents the implemented source-store and Zotero-adapter contract inside it. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/architecture/decisions/ADR-template.md` — **Placeholder / Future home.** Defines what should become the standard architecture decision record template once agreed. **Treatment:** Retain only as a clearly reserved home; activate or remove only through a focused decision.
- `docs/architecture/decisions/README.md` — **Active / Repo orientation.** Indexes Scient's accepted and serious proposed architecture decision records and the rules for using them. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/architecture/local-first-sync.md` — **Placeholder / Future home.** Defines what should be documented about Scient local-first storage and cloud sync once the design is validated. **Treatment:** Retain only as a clearly reserved home; activate or remove only through a focused decision.
- `docs/architecture/project-format.md` — **Proposed / Architecture direction.** Maps the implemented minimum Scient project identity and source-store shape while keeping broader project-format choices explicit and unaccepted. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/architecture/README.md` — **Active / Repo orientation.** Defines where Scient architecture direction, future architecture homes, and decisions belong. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/architecture/security-and-permissions.md` — **Draft / Architecture direction.** Defines Scient's early security, trust-boundary, and permission principles before implementation-specific architecture exists. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/architecture/technology-stack.md` — **Proposed / Architecture direction.** Records Scient's current technology stack direction and open implementation decisions. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.

#### Scient docs/design

- `docs/design/chat-interface-ux.md` — **Draft / Planning note.** Captures early UX/UI notes for Scient chat and streaming conversation surfaces. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/design/product-design-principles.md` — **Placeholder / Future home.** Future home for Scient product design principles once there are real design decisions or prototypes to document. **Treatment:** Retain only as a clearly reserved home; activate or remove only through a focused decision.
- `docs/design/README.md` — **Active / Repo orientation.** Defines where Scient product design documentation should live. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/design/ux-ui-notes.md` — **Draft / Planning note.** Collects early UX/UI observations before they become product design principles, surface-specific guidance, research evidence, or implementation specifications. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.

#### Scient docs/development

- `docs/development/local-workspace-setup.md` — **Active / Operational procedure.** Provides the repeatable setup procedure for an internal contributor's local multi-repository ScientFactory workspace. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/development/README.md` — **Active / Repo orientation.** Indexes implemented contributor setup and future development documentation for Scient repositories. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/development/typescript.md` — **Placeholder / Future home.** Future home for Scient TypeScript conventions once implementation begins. **Treatment:** Retain only as a clearly reserved home; activate or remove only through a focused decision.

#### Scient docs/operations

- `docs/operations/github-operating-model.md` — **Active / Operational procedure.** Defines how ScientFactory repositories, branches, pull requests, releases, deployments, permissions, and local worktrees are operated. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/operations/README.md` — **Active / Repo orientation.** Indexes Scient's real monitoring, release-adjacent, support, and maintenance procedures. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/operations/team-contribution-protocol.md` — **Active / Operational procedure.** Defines the minimum shared workflow and verification evidence for contributions across maintained ScientFactory repositories. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/operations/upstream-intake.md` — **Active / Operational procedure.** Defines the repeatable process for detecting, reviewing, and selectively inheriting changes from Scient's original desktop and agent sources. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.

#### Scient docs/planning

- `docs/planning/desktop-fix-inbox.md` — **Active / Planning note.** Captures observed problems in the current T3-derived Scient desktop app that need a bounded diagnosis or fix but are not being implemented immediately. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/planning/file-resource-and-presentation-foundation.md` — **Proposed / Planning note.** Proposes the horizontal identity, resolution, revision, presentation, recovery, and broad-viewing foundation shared by Scient file, document, artifact, and scientific-data surfaces. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/first-scient-vertical-slice-implementation-plan.md` — **Superseded / Planning note.** Preserves the bounded Synara-specific source-tracing, implementation, and verification plan that preceded the active T3 foundation migration. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `docs/planning/gate-1-5-execution-plan.md` — **Historical / Planning note.** Defines the end-to-end preparation gate for owned Synara and OpenCode repositories, upstream updates, and Synara identity isolation. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `docs/planning/idea-inbox.md` — **Active / Planning note.** Provides one temporary intake surface for unprocessed Scient ideas and a compact index of ideas routed to durable homes or completed with verified evidence. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/planning/linux-distribution-hardening.md` — **Proposed / Implementation candidate.** Defines the proposed cross-repository migration from an insecure Ubuntu AppImage fallback to a supported, sandbox-preserving Linux distribution path. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/litrev-to-papilab-rename-execution-plan.md` — **Historical / Planning note.** Preserves the executed LitRev-to-PapiLab intermediate identity migration, evidence requirements, and rollback context. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `docs/planning/memory-architecture-discovery.md` — **Draft / Planning note.** Preserves the candidate scopes, vocabulary, product questions, trust boundaries, and investigation sequence required before Scient proposes or implements a memory architecture. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/model-access-and-routing-evolution.md` — **Draft / Planning note.** Tracks the rollout priorities and unresolved commercial choices for how Scient users access and select models. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/open-source-adaptation-build-strategy.md` — **Active / Planning note.** Defines the evergreen source-ownership, adaptation, upstream-update, and divergence strategy for the current T3-derived desktop, the still-open Scient-agent foundation, historical Synara evidence, and other open-source inputs used by Scient. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/planning/papilab-to-scient-rename-execution-plan.md` — **Historical / Planning note.** Preserves the executed PapiLab-to-Scient migration, compatibility contract, verification requirements, and later repository-visibility follow-ups. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `docs/planning/product-measurement-and-analytics-plan.md` — **Proposed / Planning note.** Defines the proposed product-measurement contract, privacy boundary, implementation sequence, event catalog, KPI model, dashboard portfolio, and activation gates for Scient. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/product-planning.md` — **Draft / Planning note.** Tracks current product planning after the accepted PRD, including candidate features, open product questions, and cross-document handoffs. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/product-roadmap.md` — **Active / Planning note.** Defines the current sequence of coherent Scient product outcomes without turning technology experiments into the product roadmap. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/planning/provider-connection-and-lifecycle-experience.md` — **Proposed / Implementation candidate.** Preserves the proposed provider-lifecycle direction, records which initial slices now exist, and identifies the remaining nontechnical connection work. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/README.md` — **Active / Repo orientation.** Defines where Scient planning documents live and how they relate to product truth, architecture, design, quality, and research documents. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/planning/repository-scope-and-company-memory.md` — **Proposed / Planning note.** Recommends how the Scient repository should relate to a broader connected company memory without mixing product authority with company-level authority. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/scient-and-external-agents-implementation-plan.md` — **Proposed / Planning note.** Defines the end-to-end implementation plan for one owned Scient agent, its still-open native-foundation selection, transitional specialist workers, and independently connected external agents. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/scientific-artifact-studio.md` — **Proposed / Planning note.** Proposes the product boundary, durable object model, experience, source strategy, capability envelope, quality gates, and staged growth path for Scient's scientific artifact inspection, composition, revision, and export workspace. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/scientific-computing-and-data-analysis-roadmap.md` — **Proposed / Planning note.** Proposes the product boundary, architecture direction, source-adaptation strategy, and ordered implementation path for manual code editing, Python, R, MATLAB, notebooks, executable documents, datasets, tables, figures, analysis runs, reproducible computational work, and the shared foundations it coordinates with Scient's document platform. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/scientific-document-platform-roadmap.md` — **Proposed / Planning note.** Proposes Scient's integrated product boundary, architecture direction, source-adaptation strategy, quality gates, and ordered implementation path for universal document viewing, scientific mathematics, source and visual authoring, typesetting, Office interoperability, review, collaboration, and publishing. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/scientific-python-environment-roadmap.md` — **Proposed / Planning note.** Proposes the full Python-specific scope Scient should support around an agentic platform where agents write and run Python inside a project, grounded in the everyday use cases scientists actually have for Python rather than in language-agnostic architecture. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/planning/t3-foundation-migration-plan.md` — **Historical / Planning note.** Preserves the proof-gated migration, cutover, compatibility, and predecessor-retirement record that produced the current T3-derived Scient Desktop. **Treatment:** Retain as a record with its successor and do not use it as current guidance.

#### Scient docs/product

- `docs/product/PRD.md` — **Accepted / Product truth.** Defines Scient's product direction, core capabilities, user experience principles, and product constraints. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/product/product-philosophy.md` — **Draft / Product truth.** Defines Scient's durable product principles across product, architecture, design, quality, and implementation. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/product/README.md` — **Active / Repo orientation.** Defines where Scient product documentation lives. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/product/scient-product-identity.md` — **Accepted / Product truth.** Defines the accepted company, product, agent, and external-agent naming system for Scient. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/product/skills-system.md` — **Draft / Product truth.** Defines the proposed product model, trust boundaries, candidate catalog, and validation order for reusable scientific skills in Scient. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.

#### Scient docs/quality

- `docs/quality/code-quality-principles.md` — **Draft / Engineering doctrine.** Defines Scient's code quality principles before implementation-specific standards and gates exist. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/quality/README.md` — **Active / Repo orientation.** Defines where Scient quality, testing, and engineering-standard documentation lives. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/quality/testing-philosophy.md` — **Draft / Testing doctrine.** Defines Scient's testing philosophy before implementation-specific commands, lanes, and CI gates exist. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.

#### Scient docs/research

- `docs/research/README.md` — **Active / Repo orientation.** Maps where Scient external research, source evaluations, and spike reports live. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/research/source-evaluations/anydoc-source-evaluation-2026-08-06.md` — **Proposed / Research evidence.** Evaluates AnyDoc as a lightweight local document-extraction source and defines the evidence required before Scient adopts it behind an ingestion adapter. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/source-evaluations/competitive-landscape.md` — **Draft / Research evidence.** Maps direct competitors, substitute workflows, specialized alternatives, and integration candidates against Scient's product scope. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/source-evaluations/model-benchmark-map.md` — **Draft / Research evidence.** Maps what external model benchmarks measure, how trustworthy they are, and how much weight Scient should give them. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/source-evaluations/model-portfolio-and-provider-routing.md` — **Draft / Research evidence.** Tracks Scient's candidate model portfolio and the distinct value each model must prove before selection. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/source-evaluations/open-source-adaptation-map.md` — **Proposed / Research evidence.** Maps which open-source systems Scient should study, prototype, adapt, or integrate, and which product boundaries Scient must keep owned. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/source-evaluations/README.md` — **Active / Repo orientation.** Maps evaluations of external sources and tools that may inform Scient product and architecture decisions. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.
- `docs/research/source-evaluations/scient-agent-foundation-and-capability-strategy-2026-08-06.md` — **Draft / Research evidence.** Records the current source-backed comparison of candidate Scient-agent foundations, specialist workers, and capability sources without selecting a final foundation or worker architecture. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/source-evaluations/scientific-document-platform-source-map.md` — **Proposed / Research evidence.** Records the inspected external sources, pinned evidence, candidate roles, exclusions, and acceptance gates that inform Scient's proposed Scientific Document Platform. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/source-evaluations/scientific-project-fixture-selection.md` — **Accepted / Research evidence.** Records Scient's selected validation projects, capability fixtures, agent-evaluation benchmarks, source evidence, and activation conditions. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `docs/research/source-evaluations/source-evaluation-template.md` — **Placeholder / Future home.** Defines what should become the source evaluation template once agreed. **Treatment:** Retain only as a clearly reserved home; activate or remove only through a focused decision.
- `docs/research/source-evaluations/t3-migration-capability-catalog.md` — **Draft / Research evidence.** Preserves a compact, repo-local research index of the capabilities evaluated for the accepted T3 foundation migration direction. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/spike-reports/coherence-report-2026-06-28.md` — **Draft / Research evidence.** Records a deep coherence, alignment, and consistency audit of the LitRev planning documents, a decision-by-decision architecture review, and a concrete set of proposed fixes, as a dated snapshot. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/spike-reports/litrev-2026-vnext-transfer-report-2026-06-27.md` — **Draft / Research evidence.** Synthesizes what the new LitRev repo should learn from LitRev_2026 and vNext planning without copying the old product shape. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/spike-reports/README.md` — **Active / Research index.** Indexes dated reports from technical or product spikes. **Treatment:** Keep as the current area index and update it when reports are added, moved, or retired.
- `docs/research/spike-reports/spike-report-template.md` — **Placeholder / Future home.** Defines what should become the spike report template once agreed. **Treatment:** Retain only as a clearly reserved home; activate or remove only through a focused decision.
- `docs/research/spike-reports/t3-foundation-d4-bootstrap-2026-08-06.md` — **Active / Research evidence.** Records the exact D4 candidate creation, literal T3 ancestry, bounded safety envelope, integration, local development path, verification, and remaining limitations. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `docs/research/spike-reports/t3-foundation-phase-zero-2026-08-02.md` — **Draft / Research evidence.** Records the refreshed T3 and owned-repository baseline, isolated untouched T3 verification, candidate identity risks, and evidence required before foundation acceptance or repository bootstrap. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `docs/research/visual-references/agent-workflows/README.md` — **Active / Research evidence.** Indexes visual patterns for agent task plans, step trackers, progress states, and workflow controls placed near a conversation composer. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `docs/research/visual-references/authentication/README.md` — **Active / Research evidence.** Indexes external and historical internal login, sign-up, account-entry, identity-provider, and authentication-consent UI references. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `docs/research/visual-references/dashboard-and-settings/README.md` — **Active / Research evidence.** Indexes external administrative dashboards and settings interfaces kept for later product-design comparison and inspiration. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `docs/research/visual-references/dialogs-and-overlays/README.md` — **Active / Research evidence.** Indexes external modal, dialog, warning, confirmation, and overlay patterns kept for later product-design comparison and inspiration. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `docs/research/visual-references/marketing-and-website/README.md` — **Active / Research evidence.** Indexes external public marketing and product-website surfaces — landing heroes, download and distribution flows, pricing, FAQ, and similar acquisition-facing pages — kept for later Scient website design comparison and inspiration. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `docs/research/visual-references/motion-and-interaction/README.md` — **Active / Research evidence.** Indexes external motion, hover, transition, and animated-state references that must be understood over time rather than from a still image alone. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `docs/research/visual-references/README.md` — **Active / Repo orientation.** Maps external and historical internal UI screenshots into retrieval-friendly categories for later product-design research. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.

#### Lab orientation and experiments

- `lab/README.md` — **Active / Repo orientation.** Defines the experimental lab area for early Scient source forks, adapters, and integration spikes. **Treatment:** Keep as the current lab index; its linked evidence retains its own dated authority boundary.
- `lab/scient-bridge/README.md` — **Draft / Planning note.** Holds Scient-owned adapter and integration experiments connecting lab source checkouts. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.

#### Lab external-source boundaries

- `lab/external/agent-forks/README.md` — **Draft / Planning note.** Organizes upstream agent engines and automation systems used in the Scient lab. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `lab/external/desktop-app-forks/goose-desktop.md` — **Draft / Planning note.** Records Goose's cross-role research status without implying a retained local checkout. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `lab/external/desktop-app-forks/README.md` — **Draft / Planning note.** Organizes upstream desktop and workbench apps used in the Scient lab. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `lab/external/README.md` — **Active / Repo orientation.** Explains how owned source repositories, external provenance, and optional reference checkouts are organized locally. **Treatment:** Keep as the current external-source route; do not let it make dated evaluations current.
- `lab/external/sources.lock.md` — **Active / Research evidence.** Records exact owned and external source provenance, tested owned revisions, and cross-repository upstream review evidence used by Scient. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.

#### Lab upstream-review evidence

- `lab/external/upstream-reviews/2026-07-18-scient-agent.md` — **Active / Research evidence.** Records the disposition review of official OpenCode changes published after Scient's current integrated agent-source base. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `lab/external/upstream-reviews/2026-07-18-scient-desktop.md` — **Active / Research evidence.** Records the disposition review of official Synara changes published after Scient's current integrated desktop base. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `lab/external/upstream-reviews/2026-07-26-scient-desktop.md` — **Active / Research evidence.** Records the complete Synara review from Scient's previous checkpoint through the official tip observed on 2026-07-26. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `lab/external/upstream-reviews/2026-07-28-scient-desktop.md` — **Active / Research evidence.** Records the complete Synara review from the accepted July 26 checkpoint through the official tip observed on July 29. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `lab/external/upstream-reviews/2026-07-30-scient-desktop.md` — **Active / Research evidence.** Records the complete Synara disposition review from the accepted July 29 checkpoint through the current official tip observed on July 31. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `lab/external/upstream-reviews/2026-07-30-t3-code.md` — **Draft / Research evidence.** Records the complete scheduled T3 Code research-donor scan from the durable targeted-review boundary through the official tip observed on July 31. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `lab/external/upstream-reviews/2026-07-31-scient-desktop-tail.md` — **Active / Research evidence.** Records the complete Synara disposition review after the merged July 30-31 evidence through the current official tip. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `lab/external/upstream-reviews/2026-07-31-t3-code-tail.md` — **Active / Research evidence.** Records the complete T3 Code research-donor tail after the merged July 30-31 scheduled scan. **Treatment:** Keep as dated evidence; reverify dependencies before reuse and do not promote it silently.
- `lab/external/upstream-reviews/2026-08-22-scient-desktop-t3.md` — **Accepted / type missing.** Title: Scient Desktop T3 Upstream Review Through `dedcd99a9d`. **Treatment:** Retain as dated upstream evidence; repair its missing Created, Last updated, Purpose, and Doc type metadata in a focused reconciliation.
- `lab/external/upstream-reviews/README.md` — **Active / Repo orientation.** Indexes dated evidence for reviews of changes in Scient's original desktop and agent sources. **Treatment:** Keep as the current review index while preserving each review's exact source and date boundary.
- `lab/external/upstream-reviews/review-template.md` — **Draft / Research evidence.** Records the inspected upstream range, dispositions, and any selected intake for one maintained Scient source. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.

#### Lab investigation and execution evidence

- `lab/notes/first-slice-source-trace-2026-07-18.md` — **Complete as source evidence; memory and package architecture not selected / Implementation evidence.** Maps the first scientific slice's current source seams and proven gaps without selecting memory layers, persistence technology, or permanent product architecture. **Treatment:** Retain as evidence, but normalize the non-policy status into a valid document status while preserving completion inside the content.
- `lab/notes/gate-1-5-execution-report-2026-07-11.md` — **Historical / Research evidence.** Records the executed Synara and OpenCode ownership, updateability, identity-isolation, and compatibility gate. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `lab/notes/goose-source-depth-inspection-2026-07-11.md` — **Draft / Research evidence.** Records research evidence on Goose integration seams, runtime boundaries, safety gaps, and its possible later role in Scient. **Treatment:** Keep non-canonical; revise, accept, supersede, or retain as evidence only through its accountable owner.
- `lab/notes/papilab-rename-execution-report-2026-07-16.md` — **Historical / Research evidence.** Records the executed PapiLab identity cutover, verification results, and remaining external cutover work. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `lab/notes/project-initiation-placement-trace-2026-07-16.md` — **Historical / Research evidence.** Records the source-backed placement and dependency decision for the first permanent PapiLab project-initiation package. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `lab/notes/README.md` — **Active / Repo orientation.** Maps temporary inspection notes and lab decisions before promotion into durable docs. **Treatment:** Keep as the current lab-note index and route promoted conclusions to their durable owners.
- `lab/notes/synara-first-inspection-2026-07-07.md` — **Historical / Research evidence.** Preserves the first technical inspection of Synara and the initial ownership plan that preceded the accepted foundation decision. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `lab/notes/synara-gate-1-baseline-2026-07-11.md` — **Historical / Research evidence.** Records the end-to-end Gate 1 run against the pinned Synara scaffold and the evidence for its go/no-go result. **Treatment:** Retain as a record with its successor and do not use it as current guidance.
- `lab/notes/t3-code-targeted-review-2026-07-18.md` — **Complete / Research evidence.** Records the bounded T3 Code inspection, accepted reliability intake, and explicit stop boundary for future T3-derived work. **Treatment:** Retain as evidence, but normalize the non-policy status into a valid document status while preserving completion inside the content.

#### Project workflow skills

- `skills/documentation/scient-documentation-stewardship/SKILL.md` — **metadata-exempt / Project skill.** Apply Scient's documentation policy to create, update, review, move, promote, retire, and reconcile repository documentation and progress records. Use for documentation audits, repository-scope and placement questions, AI-assisted durable knowledge capture, metadata or status changes, placeholder activation, index maintenance, conflict or drift reconciliation, and documentation resulting from product, architecture, research, implementation, or operations. Do not use for product analysis alone, code changes without documentation impact, or read-only status lookup. **Treatment:** Keep as a non-authoritative workflow helper and route back to governing documents.
- `skills/product/scient-product-stewardship/SKILL.md` — **metadata-exempt / Project skill.** Shape Scient product direction, feature choices, PRDs, roadmap priorities, and product research through first-principles reasoning grounded in researcher value, scientific trust, product quality, long-term ownership, coherence, and scale. **Treatment:** Keep as a non-authoritative workflow helper and route back to governing documents.
- `skills/README.md` — **Active / Repo orientation.** Indexes local workflow skills that help agents work on Scient without becoming project authority. **Treatment:** Keep at its current owner; update only when the fact, decision, route, or procedure it owns changes.

### scient-desktop

Desktop does not currently apply Scient's metadata schema. The ledger therefore uses path role, title, exact T3-base blob provenance, and content review for ambiguous files.

#### Agent-operated testing or debugging workflow

- `.agents/skills/ios-debugger-agent/SKILL.md` — Title: iOS Debugger Agent. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside agent tooling; it is not product or architecture authority.
- `.agents/skills/ios-simulator-browser/SKILL.md` — Title: iOS Simulator Browser. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside agent tooling; it is not product or architecture authority.
- `.agents/skills/test-t3-app/references/sqlite-fixtures.md` — Title: SQLite fixtures. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside agent tooling; it is not product or architecture authority.
- `.agents/skills/test-t3-app/SKILL.md` — Title: Test T3 App. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside agent tooling; it is not product or architecture authority.
- `.agents/skills/test-t3-mobile/SKILL.md` — Title: Test T3 Mobile. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside agent tooling; it is not product or architecture authority.

#### Automated review-agent prompt or criterion

- `.macroscope/approvability.md` — No H1 title at the audited snapshot. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep with the review tool; do not treat it as general project documentation.
- `.macroscope/check-run-agents/effect-service-conventions.md` — Title: Effect service review. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep with the review tool; do not treat it as general project documentation.
- `.macroscope/check-run-agents/ui-consistency.md` — Title: UI consistency review. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep with the review tool; do not treat it as general project documentation.

#### Compatibility import

- `CLAUDE.md` — No H1 title at the audited snapshot. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep minimal and subordinate to AGENTS.md.

#### Completed pull-request drafting artifact

- `docs/internals/scient-fork-pr-descriptions.md` — Title: Draft PR descriptions for Scient fork modernization. **Provenance:** Scient-created path. **Treatment:** Retire from current documentation unless unique reasoning is promoted to scient-fork-divergence.md; merged PRs are the implementation record.

#### Contributor guidance with a stale migration-candidate boundary

- `CONTRIBUTING.md` — Title: Contributing. **Provenance:** T3 path modified in Scient. **Treatment:** Reconcile its private-candidate wording with the active public released repository in Phase 0; keep external contribution rules self-contained.

#### Current conversation-fork architecture and protected T3 divergence

- `docs/internals/scient-fork-divergence.md` — Title: Scient conversation fork: design, provenance, and T3 divergence. **Provenance:** Scient-created path. **Treatment:** Keep as capability/upstream truth; avoid duplicate PR drafting artifacts.

#### Current getting-started capability architecture

- `docs/internals/scient-onboarding.md` — Title: Scient getting started. **Provenance:** Scient-created path. **Treatment:** Keep as capability truth and link it to public getting-started help; avoid duplicating product direction.

#### Current operational runbook

- `docs/operations/local-dev-app.md` — Title: Scient Local Dev App. **Provenance:** Scient-created path. **Treatment:** Keep logically under operations and update with the procedure it owns.
- `docs/operations/mobile-app-store-screenshots.md` — Title: Mobile app-store screenshot harness. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under operations and update with the procedure it owns.
- `docs/operations/observability.md` — Title: Observability. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under operations and update with the procedure it owns.
- `docs/operations/relay-observability.md` — Title: Relay observability. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under operations and update with the procedure it owns.
- `docs/operations/release.md` — Title: Scient desktop release runbook. **Provenance:** T3 path modified in Scient. **Treatment:** Keep logically under operations and update with the procedure it owns.

#### Current public/help candidate

- `docs/user/background-service.md` — Title: Running Scient in the Background. **Provenance:** T3 path modified in Scient. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/charts-in-chat.md` — Title: Interactive charts in chat. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/composer.md` — Title: Message composer. **Provenance:** T3 path modified in Scient. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/content-direction.md` — Title: Conversation text direction. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/conversation-forks.md` — Title: Fork a conversation. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/diagrams-in-chat.md` — Title: Diagrams in chat. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/file-previews.md` — Title: File previews. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/getting-started.md` — Title: Getting started with Scient. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/images-in-chat.md` — Title: Images in chat. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/keybindings.md` — Title: Keybindings. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/latex.md` — Title: LaTeX. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/math-in-chat.md` — Title: Math in chat. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/matlab-run-file.md` — Title: Run a MATLAB file. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/mobile-appearance.md` — Title: Mobile appearance. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/pdf-reader.md` — Title: PDF reader. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/permission-modes.md` — Title: Permission Modes. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/project-settings.md` — Title: Project settings. **Provenance:** T3 path modified in Scient. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/projects.md` — Title: Starting a project. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/providers-antigravity.md` — Title: Antigravity in Scient. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/providers-claude.md` — Title: Claude in Scient. **Provenance:** T3 path modified in Scient. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/providers-codex.md` — Title: Codex in Scient. **Provenance:** T3 path modified in Scient. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/providers-cursor.md` — Title: Cursor in Scient. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/providers-droid.md` — Title: Droid (Factory) in Scient. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/providers-grok.md` — Title: Grok in Scient. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/providers.md` — Title: Providers in Scient. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/remote-access.md` — Title: Remote Access. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/source-control.md` — Title: Source Control Integrations. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/sources.md` — Title: Sources and PDF import. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/thread-sidebar.md` — Title: Organizing threads. **Provenance:** T3 path modified in Scient. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.
- `docs/user/usage.md` — Title: Review usage. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep in docs/user/ as the durable Help source and verify against released Scient behavior before publication.

#### Current queue capability, T3 seams, and retirement contract

- `docs/internals/scient-thread-queue.md` — Title: Scient thread queue: design, seams, and retirement plan. **Provenance:** Scient-created path. **Treatment:** Keep as capability plus upstream-seam truth; update when queue semantics or upstream retirement conditions change.

#### Current Scient capability or implementation record

- `docs/internals/scient-analysis-runtime-foundation.md` — Title: Scient analysis runtime foundation. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-browser-pdf-export.md` — Title: Scient browser HTML → PDF export. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-chat-diagrams.md` — Title: Scient rich chat diagrams. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-chat-images.md` — Title: Scient inline workspace images. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-chat-visualizations.md` — Title: Scient rich chat visualizations. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-codex-runtime-auth.md` — Title: Scient Codex runtime and authentication. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-content-direction.md` — Title: Scient content direction. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-latex.md` — Title: Scient LaTeX build. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-math.md` — Title: Scient math rendering. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-pdf-reader.md` — Title: Scient PDF reader. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-project-initialization.md` — Title: Scient project initialization. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-skills.md` — Title: Scient skills core. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-sources.md` — Title: Scient Sources foundation. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-typography.md` — Title: Scient typography profile. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-universal-file-opening.md` — Title: Scient universal file opening. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.
- `docs/internals/scient-voice.md` — Title: Scient local voice architecture. **Provenance:** Scient-created path. **Treatment:** Normalize into a capability-family owner, separating shared architecture and historical evolution where necessary.

#### Current shared or inherited implementation architecture

- `docs/internals/connection-runtime.md` — Title: Connection Runtime. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under architecture; preserve inherited paths unless a move produces clear authority value.
- `docs/internals/environment-auth.md` — Title: Environment Authentication Profile. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under architecture; preserve inherited paths unless a move produces clear authority value.
- `docs/internals/overview.md` — Title: Architecture. **Provenance:** T3 path modified in Scient. **Treatment:** Keep logically under architecture; preserve inherited paths unless a move produces clear authority value.
- `docs/internals/provider-lifecycle.md` — Title: Provider lifecycle architecture. **Provenance:** Scient-created path. **Treatment:** Keep logically under architecture; preserve inherited paths unless a move produces clear authority value.
- `docs/internals/providers.md` — Title: Provider architecture. **Provenance:** T3 path modified in Scient. **Treatment:** Keep logically under architecture; preserve inherited paths unless a move produces clear authority value.
- `docs/internals/remote.md` — Title: Remote Architecture. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under architecture; preserve inherited paths unless a move produces clear authority value.
- `docs/internals/resource-telemetry.md` — Title: Resource telemetry architecture. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under architecture; preserve inherited paths unless a move produces clear authority value.
- `docs/internals/server-updates.md` — Title: Server Update Architecture. **Provenance:** T3 path modified in Scient. **Treatment:** Keep logically under architecture; preserve inherited paths unless a move produces clear authority value.
- `docs/internals/t3-connect.md` — Title: T3 Connect. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under architecture; preserve inherited paths unless a move produces clear authority value.

#### Current T3 integration and protected-divergence contract

- `UPSTREAM.md` — Title: Upstream maintenance. **Provenance:** Scient-created path. **Treatment:** Keep as the special root upstream entry point and index historical receipts from it or the documentation map.

#### Current What's New capability and authoring contract

- `docs/internals/scient-release-notes.md` — Title: Scient release notes. **Provenance:** Scient-created path. **Treatment:** Keep as a capability/operations boundary; public release content should be release-qualified.

#### Dated T3 integration, bootstrap, or qualification record

- `docs/internals/2026-08-17-upstream-sync-cd096b9ad5.md` — Title: Upstream sync through `c7e6d711d3`. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-19-upstream-sync-f2d5fc91e3.md` — Title: Upstream sync through `f2d5fc91e3`. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-20-upstream-sync-beab6886f4.md` — Title: Upstream sync through `beab6886f4`. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-21-upstream-sync-be7d35aaeb.md` — Title: Upstream sync through `be7d35aaeb`. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-22-upstream-sync-dedcd99a9d.md` — Title: Upstream sync through `dedcd99a9d`. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-23-upstream-sync-b1670ac7d9.md` — Title: T3 upstream sync through b1670ac7d9. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-24-upstream-sync-e6a109b9f7.md` — Title: T3 upstream sync through e6a109b9f7. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-25-upstream-sync-082e6ea521.md` — Title: T3 upstream sync through 082e6ea521. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-25-upstream-sync-1a4a7596c2.md` — Title: T3 upstream sync through 1a4a7596c2. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-25-upstream-sync-99960383d0.md` — Title: T3 upstream sync through 99960383d0. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/2026-08-28-upstream-sync-c8aba2587d.md` — Title: T3 upstream sync through c8aba2587d. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/scient-next-d4-bootstrap.md` — Title: Scient Next D4 bootstrap record. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-foundation-refresh-20260807-b.md` — Title: T3 foundation refresh — 2026-08-07 (second range). **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-foundation-refresh-20260807.md` — Title: T3 foundation refresh — 2026-08-07. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-foundation-refresh-20260809-1a003e38.md` — Title: T3 foundation refresh — 2026-08-09 through `1a003e38`. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-foundation-refresh-20260809.md` — Title: T3 foundation refresh — 2026-08-09. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-foundation-refresh-20260811-78f462c4.md` — Title: T3 foundation refresh — 2026-08-11 through `78f462c4`. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-phase-2-gates-2-3-20260811.md` — Title: T3 phase two Gates 2 and 3. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260811-2db08457f.md` — Title: T3 upstream sync through 2db08457f. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260811-65b005f1.md` — Title: T3 upstream sync through 65b005f1. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260811-ac4780f4.md` — Title: T3 upstream sync through ac4780f4. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260812-849bac894.md` — Title: T3 upstream sync through 849bac894. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260813-5015d7cf.md` — Title: T3 upstream sync through 5015d7cf. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260813-97db94c9.md` — Title: T3 upstream sync through 97db94c9. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260814-5304f3e9.md` — Title: T3 upstream sync through 5304f3e9. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260814-7e01d33f.md` — Title: T3 upstream sync through 7e01d33f. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260815-6ae9662d8e.md` — Title: T3 upstream sync through 6ae9662d8e. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260815-8c628f14.md` — Title: T3 upstream sync through 8c628f14. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.
- `docs/internals/t3-upstream-sync-20260816-bab4b6f02b.md` — Title: T3 upstream sync through bab4b6f02b. **Provenance:** Scient-created path. **Treatment:** Retain immutably under the logical upstream/records area; do not use as current behavior.

#### Desktop copy of a cross-product roadmap with current-state material

- `docs/internals/scientific-artifact-studio.md` — Title: Scientific Artifact Studio roadmap. **Provenance:** Scient-created path. **Treatment:** After PR #188, keep desktop implementation truth locally and let Scient's planning document own future cross-product direction.

#### Desktop documentation index

- `docs/README.md` — Title: Scient Desktop documentation. **Provenance:** T3 path modified in Scient. **Treatment:** Make it the compatibility map from logical roles to current physical paths; begin from PR #188's explicit disposition for overlapping edits.

#### Development or contributor reference

- `docs/internals/ci.md` — Title: CI quality gates. **Provenance:** T3 path modified in Scient. **Treatment:** Keep logically under development; update only when the local workflow or vocabulary changes.
- `docs/internals/glossary.md` — Title: Glossary. **Provenance:** T3 path modified in Scient. **Treatment:** Keep logically under development; update only when the local workflow or vocabulary changes.
- `docs/internals/scripts.md` — Title: Scripts. **Provenance:** T3 path modified in Scient. **Treatment:** Keep logically under development; update only when the local workflow or vocabulary changes.
- `docs/internals/work-artifacts.md` — Title: Engineering work artifacts. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under development; update only when the local workflow or vocabulary changes.
- `docs/internals/workspace-layout.md` — Title: Workspace layout. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under development; update only when the local workflow or vocabulary changes.

#### Historical migration rehearsal

- `docs/operations/v060-migration-rehearsal.md` — Title: v0.6.0 migration rehearsal. **Provenance:** Scient-created path. **Treatment:** Retain as a record rather than a current runbook once no supported migration path depends on it.

#### Historical provider-lifecycle implementation proposal with stale completion text

- `docs/internals/provider-lifecycle-unification-proposal.md` — Title: Provider Lifecycle Unification Proposal. **Provenance:** Scient-created path. **Treatment:** Correct its disposition after merged PR #150; current behavior belongs in provider-lifecycle.md and capability records.

#### Inherited/shared implementation architecture

- `docs/architecture/terminal-renderers.md` — Title: Terminal renderers. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep logically under architecture; preserve the upstream path while it remains a useful merge surface.

#### Mixed implementation plan and landed-progress ledger

- `docs/internals/scient-pdf-export-rendering-plan.md` — Title: Scient PDF Export And Rendering Implementation Plan. **Provenance:** Scient-created path. **Treatment:** After PR #188 is resolved, separate current capability truth from remaining proposed deltas and retain useful completed-plan reasoning as a record.

#### Non-authoritative rendering or visual fixture

- `docs/fixtures/scient-chat-diagrams.md` — Title: Scient chat diagram visual fixtures. **Provenance:** Scient-created path. **Treatment:** Keep with fixtures and exclude from public Docs and capability authority.
- `docs/fixtures/scient-chat-images.md` — Title: Scient inline image fixtures. **Provenance:** Scient-created path. **Treatment:** Keep with fixtures and exclude from public Docs and capability authority.
- `docs/fixtures/scient-chat-plotly.md` — Title: Scient Plotly chat fixtures. **Provenance:** Scient-created path. **Treatment:** Keep with fixtures and exclude from public Docs and capability authority.
- `docs/fixtures/scient-chat-visualizations.md` — Title: Scient chat visualization fixtures. **Provenance:** Scient-created path. **Treatment:** Keep with fixtures and exclude from public Docs and capability authority.

#### Package-, asset-, or source-local reference

- `apps/marketing/tweets.md` — No H1 title at the audited snapshot. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside the code or asset it explains; index only when broader navigation needs it.
- `apps/mobile/modules/t3-markdown-text/UPSTREAM.md` — Title: Upstream Attribution. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside the code or asset it explains; index only when broader navigation needs it.
- `apps/mobile/modules/t3-terminal/README.md` — Title: T3 Mobile Terminal Native Module. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside the code or asset it explains; index only when broader navigation needs it.
- `apps/mobile/README.md` — Title: T3 Code Mobile. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside the code or asset it explains; index only when broader navigation needs it.
- `apps/web/src/terminal/ghostty/README.md` — Title: Ghostty web terminal. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside the code or asset it explains; index only when broader navigation needs it.
- `assets/README.md` — Title: Brand icons. **Provenance:** T3 path modified in Scient. **Treatment:** Keep beside the code or asset it explains; index only when broader navigation needs it.
- `infra/relay/README.md` — Title: T3 Connect Relay. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside the code or asset it explains; index only when broader navigation needs it.
- `packages/client-runtime/README.md` — Title: Client Runtime. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside the code or asset it explains; index only when broader navigation needs it.
- `packaging/aur/README.md` — Title: AUR packaging. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside the code or asset it explains; index only when broader navigation needs it.

#### Package-local license and attribution notice

- `apps/mobile/modules/t3-terminal/THIRD_PARTY_NOTICES.md` — Title: Third-Party Notices. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep beside the distributed package and update with dependency provenance.
- `apps/web/THIRD_PARTY_NOTICES.md` — Title: Third-Party Notices. **Provenance:** T3 path modified in Scient. **Treatment:** Keep beside the distributed package and update with dependency provenance.

#### Provider capability evidence audit

- `docs/internals/provider-lifecycle-capability-audit.md` — Title: Provider Lifecycle Capability Audit. **Provenance:** Scient-created path. **Treatment:** Retain as evidence, but distinguish observations from current architecture and reverify before reuse.

#### Public help with a material privacy/data-flow drift

- `docs/user/voice-dictation.md` — Title: Voice dictation. **Provenance:** Scient-created path. **Treatment:** Keep in docs/user/; correct the claim that all transcript processing is local when optional provider-based correction is enabled, then release-qualify it before publication.

#### Public installation help retaining a T3 title

- `docs/user/install.md` — Title: Install T3 Code. **Provenance:** T3 path modified in Scient. **Treatment:** Keep in docs/user/; reconcile product identity and release qualification, preserving only compatibility terms that users genuinely encounter.

#### Public update help retaining T3 identity

- `docs/user/updating.md` — Title: Keeping T3 Code in Sync. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep in docs/user/; reconcile Scient product wording while preserving real T3 server/CLI compatibility vocabulary where technically required.

#### Pull-request evidence prompt

- `.github/pull_request_template.md` — No H1 title at the audited snapshot. **Provenance:** T3 unchanged at integrated base. **Treatment:** Keep concise and add the accepted documentation-impact field in Phase 1.

#### Repository and product orientation

- `README.md` — Title: Scient desktop. **Provenance:** T3 path modified in Scient. **Treatment:** Keep as the human entry point; preserve the Scient override above inherited T3 orientation.

#### Repository triage operations

- `.github/triage/PLAYBOOK.md` — Title: Scient triage playbook. **Provenance:** T3 path modified in Scient. **Treatment:** Keep as repository-specific operations guidance.

#### Repository-local agent protocol

- `AGENTS.md` — Title: Scient desktop instructions. **Provenance:** T3 path modified in Scient. **Treatment:** Keep as the executable local rule surface and route to the documentation index rather than duplicating policy.

#### Shipped built-in Scient skill definition

- `apps/server/src/scient/skills/built-ins/improve-workspace-readiness/SKILL.md` — Title: Improve Workspace Readiness. **Provenance:** Scient-created path. **Treatment:** Keep with runtime source; this is product content, not project documentation.
- `apps/server/src/scient/skills/built-ins/scient-skill-authoring/SKILL.md` — Title: Scient Skill Authoring. **Provenance:** Scient-created path. **Treatment:** Keep with runtime source; this is product content, not project documentation.
- `apps/server/src/scient/skills/built-ins/workspace-readiness-review/SKILL.md` — Title: Workspace Readiness Review. **Provenance:** Scient-created path. **Treatment:** Keep with runtime source; this is product content, not project documentation.

### Website

The website has no product-help corpus. Its six files own repository operation, contribution, compatibility routing, pull-request evidence, and brand-asset support.

- `.github/pull_request_template.md` — **Pull-request evidence prompt.** No H1 title at the audited snapshot. **Treatment:** Keep website validation/deployment evidence and add one source/version documentation-impact field after acceptance.
- `AGENTS.md` — **Website agent protocol.** Title: AGENTS.md. **Treatment:** Keep concise; route app-help prose to desktop and website work to rendering/version ownership.
- `assets/brand/README.md` — **Brand asset source and generation reference.** Title: Scient brand assets. **Treatment:** Keep beside brand assets; it is not product-help prose.
- `CLAUDE.md` — **Compatibility import.** No H1 title at the audited snapshot. **Treatment:** Keep minimal and subordinate to AGENTS.md.
- `CONTRIBUTING.md` — **Website contribution and human-preview procedure.** Title: Contributing. **Treatment:** Keep website-specific; link rather than copy family documentation policy.
- `README.md` — **Website repository, deployment, and analytics orientation.** Title: ScientFactory Website. **Treatment:** Keep as the human entry point; record Docs source transport only after the publishing pilot selects it.

## Coverage Conclusion

The audit accounts for every tracked Markdown path in the three in-scope repositories at the exact heads above, every non-vendored file individually, both vendored donor boundaries, the three untracked forensic reports, and every Markdown path in the four open desktop pull requests. It deliberately does not claim that every proposal is correct, every help page is release-qualified, or every file should remain where it is.

The evidence supports the proposed logical areas and update-before-create policy. It also shows why migration must be disposition-led: the immediate quality problems are stale authority, mixed lifecycle states, missing index routes, and privacy or product-identity drift, not merely folder names.
