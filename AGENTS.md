# AGENTS.md

Status: Active
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-07-22
Purpose: Defines how agents should work in this early Scient repository.
Doc type: Agent protocol

## What This Repo Is

This repo is the early planning and documentation workspace for Scient.

Scient is a local-first, cloud-mirrored scientific workspace where researchers and AI agents run an entire research project together, from research question to publication-ready manuscript. The product direction is still being shaped.

## Current State

This parent repo remains documentation-first. The standalone desktop source
repository now contains the first permanent Scient-owned package,
`@scientfactory/project-init`,
but the broader application architecture and first scientific vertical slice
have not been built. Do not infer scientific-state, gateway, sync, cloud, or
production boundaries from that narrow package.

ScientFactory is the company and GitHub organization identity. **Scient** is
the public name for both the implemented application and its planned native
first-party research agent. In technical contexts, use **Scient app** and
**Scient agent** whenever the meaning could be ambiguous.

The Scient agent is planned but not yet implemented. Architecturally, it is the
owned OpenCode-derived agent itself—not an app shell around a separate OpenCode
engine. External OpenCode and the other inherited external-agent paths remain
separate choices with separate identity, configuration, credentials, sessions,
and updates. Public brand and trademark clearance remains outstanding and must
be completed before public release.

The current repo contents are working documents. They are expected to change as the product, architecture, and implementation plan become clearer.

## Internal Team Workspace

Internal contributors should open a contributor-owned parent directory as the
editor or agent workspace. Its name is arbitrary, and it must remain a plain,
non-Git container with the three core repositories as sibling checkouts:

```text
<scient-workspace>/
├── Scient/
├── scient-desktop/
├── scient-agent/
└── website/          # optional
```

`Scient/` owns product and project knowledge, cross-repository planning, and
source pins. `scient-desktop/` owns the application implementation.
`scient-agent/` owns the OpenCode-derived native-agent source foundation. Add
`website/` only when website or download-surface work needs it.

Starting an agent from the parent workspace gives it cross-repository read
context; it does not give every task cross-repository write scope. Identify the
owning repository before editing and keep unrelated sibling repositories
read-only. Do not add unrelated private company repositories, credentials,
personal files, or customer material to this workspace. External contributors
working in a public repository are not required to have the private `Scient`
checkout.

Treat these as independent repositories, not a monorepo. Run Git commands from
the intended repository, keep changes on repository-specific branches, and use
separate pull requests for cross-repository work. State dependencies between
those pull requests explicitly. Do not initialize Git in the container or put
temporary worktrees inside it; use a separate contributor-chosen worktree root.

## Core Working Principles

Think from first principles. Before changing product, code, architecture, or documentation, understand the real intent, the actual failure mode, and the underlying system boundary. Do not solve symptoms when the root cause is knowable.

Optimize for long-term quality. Prefer the correct, maintainable solution even when it requires harder work. Do not ship superficial fixes, speculative shortcuts, or vague documentation unless the user explicitly asks for a temporary stopgap and the limitation is documented.

Place documentation deliberately. Before creating a new document, decide where the information belongs in the existing documentation structure. Prefer updating the canonical existing document over creating a duplicate. If a new document is needed, give it the required metadata and link it from the relevant index.

Capture durable future context, not documentation volume. Preserve consequential decisions, constraints, interfaces, evidence, hard-won lessons, and repeated explanations. Do not promote every chat, meeting, transcript, or generated summary into repository knowledge.

AI may draft documentation, but it is not the accountable owner and cannot confer acceptance. Preserve uncertainty and specific reasoning for human review. When authoritative sources conflict, surface the contradiction and route it to the owning person or document instead of smoothing it into false agreement.

Keep this repository within its Scient product and project boundary. Do not add company-wide finance, legal, people, customer-record, or cross-product authority here without an accepted repository-scope decision. Do not commit secrets or sensitive personal, customer, employee, or regulated data.

## Source Documents

Current important documents:

- `docs/README.md` - documentation map and current repo structure.
- `docs/documentation-policy.md` - rules for creating, updating, and classifying documentation.
- `docs/product/PRD.md` - product direction, core capabilities, user experience principles, and technical requirements.
- `docs/product/skills-system.md` - draft product model, trust boundaries,
  candidate catalog, and validation order for reusable scientific skills; the
  accepted PRD governs conflicts.
- `docs/product/scient-product-identity.md` - accepted company, application, agent, external-agent, and naming vocabulary.
- `docs/product/product-philosophy.md` - durable product principles that guide product, architecture, design, quality, and implementation.
- `docs/architecture/technology-stack.md` - current technology stack direction and open implementation decisions.
- `docs/architecture/decisions/ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md` - accepted initial application/runtime foundations and the Scient-owned scientific boundary.
- `docs/architecture/decisions/ADR-0002-standalone-source-ownership-and-upstream-authority.md` - accepted standalone source-repository ownership and selective upstream authority.
- `docs/operations/upstream-intake.md` - active monitoring, review, and selective intake procedure for original source changes.
- `docs/operations/team-contribution-protocol.md` - active minimum branch,
  verification, self-review, independent-review, and contribution-evidence
  workflow across maintained ScientFactory repositories.
- `docs/planning/product-roadmap.md` - active sequence of coherent product outcomes.
- `docs/planning/first-scient-vertical-slice-implementation-plan.md` - concrete plan and acceptance criteria for the current implementation slice.
- `docs/planning/scient-and-external-agents-implementation-plan.md` - proposed implementation plan for the Scient agent, external-agent preservation, and Scient-versus-external-agent identity isolation.
- `docs/planning/papilab-to-scient-rename-execution-plan.md` - historical execution and rollback record for the PapiLab-to-Scient migration.

Use each document according to its metadata. The PRD and ADR-0001 are accepted
direction; the roadmap is active planning; the product philosophy, technology
stack, and implementation plan retain their stated draft or proposed limits.

Follow `docs/documentation-policy.md` when adding or changing durable documentation.

## Working Rules For Agents

Be honest about the repo's maturity. Do not describe planned architecture as implemented architecture.

When adding documentation, prefer clear current-state wording over polished but vague language.

If a document is useful now but does not yet have an obvious permanent home, it may be left in the repo temporarily. Later, as the repo architecture settles, documents should be moved into the right structure.

When moving or reorganizing documents, preserve their intent and history. Do not delete planning material just because it is rough.

When proposing technical direction, separate:

- product requirements
- architecture decisions
- implementation candidates
- deferred questions

The PRD should stay focused on product truth. Stack choices and implementation details should live in architecture documents unless they are direct product constraints.

Use **Scient** as the public name for both the app and native agent. In
technical or potentially ambiguous text, write **Scient app** or **Scient
agent**. Use **external agent** for an independently connected product such as
OpenCode, Codex, Claude, or Droid. Do not create “ScientApp” or “ScientAgent” as
separate public brands, and do not describe the Scient agent as a wrapper around
a separate OpenCode engine. “Agent guidance” and the portable `AGENTS.md` file
are project instructions, not the Scient agent product.

## Project Skills

Project-specific skills live under `skills/`.

Use `skills/product/scient-product-stewardship/SKILL.md` for product management work, including PRD changes, feature analysis, roadmap notes, product decisions, and product research synthesis.

Use `skills/documentation/scient-documentation-stewardship/SKILL.md` when creating, reviewing, moving, promoting, retiring, or reconciling durable documentation and project progress records.

Project skills are workflow helpers. They should point agents back to the canonical repo documents and must not override `docs/product/`, `docs/architecture/`, `docs/documentation-policy.md`, or this `AGENTS.md` file.

## Expected Evolution

This `AGENTS.md` file should be updated throughout the process.

As the repo grows, add concrete guidance here for:

- repo layout
- package boundaries
- commands
- tests
- local development
- architecture decision records
- agent permissions and safety rules
- documentation locations

Until those structures exist, avoid inventing instructions for them.
