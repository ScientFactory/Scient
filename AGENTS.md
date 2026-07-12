# AGENTS.md

Status: Active
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Defines how agents should work in this early LitRev repository.
Doc type: Agent protocol

## What This Repo Is

This repo is the early planning and documentation workspace for LitRev.

LitRev is a local-first, cloud-mirrored scientific workspace where researchers and AI agents run an entire research project together, from research question to publication-ready manuscript. The product direction is still being shaped.

## Current State

This repo is currently documentation-first.

The application architecture has not been built yet. Do not assume that app folders, package boundaries, runtime services, database schemas, sync engines, or agent execution layers already exist.

The current repo contents are working documents. They are expected to change as the product, architecture, and implementation plan become clearer.

## Core Working Principles

Think from first principles. Before changing product, code, architecture, or documentation, understand the real intent, the actual failure mode, and the underlying system boundary. Do not solve symptoms when the root cause is knowable.

Optimize for long-term quality. Prefer the correct, maintainable solution even when it requires harder work. Do not ship superficial fixes, speculative shortcuts, or vague documentation unless the user explicitly asks for a temporary stopgap and the limitation is documented.

Place documentation deliberately. Before creating a new document, decide where the information belongs in the existing documentation structure. Prefer updating the canonical existing document over creating a duplicate. If a new document is needed, give it the required metadata and link it from the relevant index.

Capture durable future context, not documentation volume. Preserve consequential decisions, constraints, interfaces, evidence, hard-won lessons, and repeated explanations. Do not promote every chat, meeting, transcript, or generated summary into repository knowledge.

AI may draft documentation, but it is not the accountable owner and cannot confer acceptance. Preserve uncertainty and specific reasoning for human review. When authoritative sources conflict, surface the contradiction and route it to the owning person or document instead of smoothing it into false agreement.

Keep this repository within its LitRev product and project boundary. Do not add company-wide finance, legal, people, customer-record, or cross-product authority here without an accepted repository-scope decision. Do not commit secrets or sensitive personal, customer, employee, or regulated data.

## Source Documents

Current important documents:

- `docs/README.md` - documentation map and current repo structure.
- `docs/documentation-policy.md` - rules for creating, updating, and classifying documentation.
- `docs/product/PRD.md` - product direction, core capabilities, user experience principles, and technical requirements.
- `docs/product/product-philosophy.md` - durable product principles that guide product, architecture, design, quality, and implementation.
- `docs/architecture/technology-stack.md` - current technology stack direction and open implementation decisions.

These documents are living drafts. Treat them as the best available source of truth, but do not treat every detail as final unless the document explicitly says so.

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

## Project Skills

Project-specific skills live under `skills/`.

Use `skills/product/litrev-product-stewardship/SKILL.md` for product management work, including PRD changes, feature analysis, roadmap notes, product decisions, and product research synthesis.

Use `skills/documentation/litrev-documentation-stewardship/SKILL.md` when creating, reviewing, moving, promoting, retiring, or reconciling durable documentation and project progress records.

The current Codex runtime installs are available at:

- `/Users/yaacov/.codex/skills/litrev-product-stewardship/SKILL.md`
- `/Users/yaacov/.codex/skills/litrev-documentation-stewardship/SKILL.md`

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
