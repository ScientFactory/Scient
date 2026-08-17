# Planning

Status: Active
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-08-18
Purpose: Defines where Scient planning documents live and how they relate to product truth, architecture, design, quality, and research documents.
Doc type: Repo orientation

Use this folder for plans that guide upcoming work.

Planning docs may include the active product roadmap, feature inventories, milestones, implementation plans, candidate work, and product or architecture next steps.

Do not use planning docs as product truth, accepted architecture, or current implementation references unless they link to the relevant source document.

Current planning docs:

- `product-measurement-and-analytics-plan.md` - proposed product-measurement
  contract, privacy boundary, event catalog, KPI model, dashboard portfolio,
  cross-repository implementation sequence, and activation gates.
- `desktop-fix-inbox.md` - current intake for observed problems in the
  T3-derived Scient desktop that need diagnosis or a bounded fix but are not
  being implemented immediately.
- `idea-inbox.md` - temporary intake for raw, unprocessed ideas before evaluation and routing.
- `linux-distribution-hardening.md` - proposed cross-repository migration from
  an insecure Ubuntu AppImage fallback to an installed, sandbox-preserving
  Linux distribution path with explicit release evidence.
- `memory-architecture-discovery.md` - draft discussion of candidate memory
  scopes, authority, lifecycle, agent access, local/cloud boundaries, and the
  questions to resolve before architecture or storage selection.
- `product-roadmap.md` - active sequence of coherent product outcomes, with the
  T3 foundation migration as the current enabling track before the first full
  Scient scientific project slice.
- `scientific-computing-and-data-analysis-roadmap.md` - proposed product boundary, source strategy, architecture direction, and ordered implementation path for manual code editing, Python, R, MATLAB, notebooks, datasets, figures, and reproducible analysis artifacts.
- `scientific-document-platform-roadmap.md` - proposed integrated product
  boundary, architecture direction, source strategy, quality gates, and ordered
  implementation path for universal document viewing, mathematics,
  LaTeX/typesetting, Office interoperability, manuscript authoring, review,
  collaboration, and publishing.
- `first-scient-vertical-slice-implementation-plan.md` - superseded
  Synara-specific source-tracing and implementation plan, preserved for its
  reasoning and completed project-initiation evidence.
- `scient-and-external-agents-implementation-plan.md` - proposed end-to-end plan for selecting a refreshed native foundation, building one owned Scient agent, using bounded specialist workers when justified, internalizing essential capabilities over time, and preserving external agents independently.
- `t3-foundation-migration-plan.md` - active destination, capability
  dispositions, proof gates, D4 completion state, later gate boundaries, and
  documentation transition system for replacing the Synara-derived desktop
  foundation with a fresh, ancestry-preserving T3-derived application.
- `papilab-to-scient-rename-execution-plan.md` - historical PapiLab-to-Scient migration, compatibility, rollback, and deferred-public-cutover record.
- `litrev-to-papilab-rename-execution-plan.md` - historical intermediate product-identity migration, verification, and rollback record for renaming LitRev to PapiLab.
- `gate-1-5-execution-plan.md` - historical execution plan for owned source repositories, upstream synchronization, and Synara identity isolation.
- `model-access-and-routing-evolution.md` - priorities and open choices for provider-connected, bring-your-own-key, Scient-managed, and automatically routed model access.
- `provider-connection-and-lifecycle-experience.md` - proposed M1 product and
  architecture plan for provider setup, authentication, verification,
  selection, maintenance, recovery, composer actions, and Settings clarity.
- `open-source-adaptation-build-strategy.md` - active evergreen ownership,
  fork/adapter, upstream-update, capability-internalization, and divergence
  strategy across T3, Synara, the still-open Scient-agent foundation, and other
  sources.
- `product-planning.md` - draft product planning after PRD acceptance, including candidate features, open product questions, and cross-document handoffs.
- `repository-scope-and-company-memory.md` - proposed boundary between this Scient product repository and a future connected company memory.
