# Architecture Decisions

Status: Active
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-07-19
Purpose: Indexes Scient's accepted architecture decision records and the rules for using them.
Doc type: Repo orientation

Accepted architecture decisions should live here when decisions are made.

Current decisions:

- `ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md` - accepts the owned Synara-derived source as the initial application foundation, OpenCode-derived source as the inherited foundation for the planned Scient agent, external OpenCode as a separate external agent, and the Scient-owned scientific boundary around agent execution.
- `ADR-0002-standalone-source-ownership-and-upstream-authority.md` - accepts
  standalone ScientFactory desktop and agent repositories, fetch-only original
  sources, mandatory upstream awareness, and selective inheritance.
- `ADR-0003-built-in-skills-portfolio-and-project-activation.md` - accepts the
  app-owned built-in skills portfolio, immutable release identity, portable
  project activation lock, and delivery boundary for native and external
  agents.

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
