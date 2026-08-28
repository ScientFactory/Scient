# Architecture Decisions

Status: Active
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-08-28
Purpose: Indexes Scient's accepted and serious proposed architecture decision records and the rules for using them.
Doc type: Repo orientation

Accepted architecture decisions should live here when decisions are made.

Current decisions:

- `ADR-0002-standalone-source-ownership-and-upstream-authority.md` - accepts
  standalone ScientFactory desktop and agent repositories, fetch-only original
  sources, mandatory upstream awareness, and selective inheritance.
- `ADR-0003-built-in-skills-portfolio-and-project-activation.md` - accepts the
  app-owned built-in skills portfolio, immutable release identity, portable
  project activation lock, and delivery boundary for native and external
  agents.
- `ADR-0004-scient-operation-capability-and-provenance-boundary.md` - accepts one
  host-independent Scient operation, capability, and provenance boundary for
  manual actions, agents, external MCP clients, automations, visible-browser
  work, and project-owned scientific evidence.
- `ADR-0005-t3-derived-desktop-foundation.md` - accepts an
  ancestry-preserving T3-derived desktop foundation. Its 2026-08-23 amendment
  records the completed cutover to `ScientFactory/scient-desktop`,
  compatibility identity preservation, and retirement of the Synara-derived
  predecessor.
- `ADR-0006-project-owned-scient-state-and-source-store.md` - proposes
  `.scient/` as the project-owned Scient state boundary, documents the
  implemented Sources store, and keeps Zotero behind a local read-only
  adapter. It remains Proposed pending explicit architecture acceptance.

Superseded decisions:

- `ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md` -
  records the initial Synara/OpenCode foundation choice. ADR-0005 supersedes
  its forward desktop-foundation decision while preserving its Scient-agent,
  external-agent, scientific-authority, and justified-core-change boundaries.

Supporting file:

- `ADR-template.md` - future home for the architecture decision record template.

Use this folder for durable decision records that explain:

- decision
- context
- options considered
- reasoning
- consequences
- date accepted

Do not use as:

- scratch planning space
- raw research storage
- implementation notes without a decision
