# Documentation

Status: Active
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-08-06
Purpose: Maps the Scient documentation structure and where each kind of information belongs.
Doc type: Repo orientation

This parent repository remains documentation-first. The standalone desktop
source repository contains the first narrow Scient-owned
project-initiation package, while the scientific application architecture and
vertical slice remain unbuilt. This structure gives product, architecture,
planning, research, development, and operations material clear homes without
presenting planned behavior as current implementation. It is not currently the
unrestricted memory of the whole company; the proposed connected-company
boundary lives in [Repository Scope And Company
Memory](planning/repository-scope-and-company-memory.md).

The root [Scient README](../README.md) owns the internal workspace map: four
core migration repositories, with the website optional when relevant. This
index owns the documentation map inside the `Scient` repository and does not
turn the sibling repositories into a monorepo.

Start here:

- [Collaborator onboarding](onboarding.md) - ordered project journey, repository tour, and contribution-area reading routes.
- [Documentation policy](documentation-policy.md) - documentation rules, metadata, statuses, and placement policy.
- [Product requirements](product/PRD.md) - canonical product direction.
- [Scient skills system](product/skills-system.md) - draft product model, trust
  boundaries, candidate catalog, and validation order for reusable scientific
  skills; honor its Draft status, and use the accepted PRD to govern conflicts.
- [Scient product identity](product/scient-product-identity.md) - accepted company, app, native-agent, external-agent, and naming vocabulary.
- [Product philosophy](product/product-philosophy.md) - draft durable product principles; the accepted PRD governs conflicts.
- [Technology stack](architecture/technology-stack.md) - current proposed stack direction.
- [Idea inbox](planning/idea-inbox.md) - lightweight intake for unresolved ideas
  before they are evaluated and routed.
- [Memory architecture discovery](planning/memory-architecture-discovery.md) -
  draft candidate scopes, questions, scenarios, and discovery sequence; no
  memory architecture or storage technology is selected.
- [Product roadmap](planning/product-roadmap.md) - current sequence of coherent product outcomes.
- [T3 foundation migration plan](planning/t3-foundation-migration-plan.md) -
  active proof-gated transition to the accepted successor foundation and the
  exact D4 bootstrap authorization.
- [First vertical-slice implementation plan](planning/first-scient-vertical-slice-implementation-plan.md) -
  superseded Synara-specific plan preserved for historical reasoning and
  completed project-initiation evidence.
- [Scient and external agents implementation plan](planning/scient-and-external-agents-implementation-plan.md) - proposed plan for selecting a refreshed foundation, building one owned Scient agent, using bounded specialist workers when justified, and preserving external agents independently.
- [Scient-agent foundation and capability investigation](research/source-evaluations/scient-agent-foundation-and-capability-strategy-2026-08-06.md) - current Pi/OpenCode foundation comparison, broader source findings, long-term one-agent direction, worker options, and explicit non-decisions.
- [PapiLab-to-Scient rename execution record](planning/papilab-to-scient-rename-execution-plan.md) - historical migration, compatibility, rollback, and deferred-public-cutover record.
- [LitRev-to-PapiLab rename execution plan](planning/litrev-to-papilab-rename-execution-plan.md) - historical intermediate identity migration, verification, and rollback record.
- [Architecture](architecture/README.md) - architecture direction, future architecture homes, and decisions.
- [Design](design/README.md) - future home for product design principles and UI guidance.
- [Quality](quality/README.md) - quality principles and testing philosophy.
- [Planning](planning/README.md) - plans that guide upcoming work.
- [Research](research/README.md) - external source evaluations, spikes, visual references, and raw or synthesized research.
- [Development](development/README.md) - implemented contributor setup and
  future code, command, testing, and configuration documentation.
- [Operations](operations/README.md) - active maintenance procedures, beginning with upstream monitoring, review, and selective intake.
