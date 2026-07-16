# Documentation Policy

Status: Active
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Defines how PapiLab documentation should be created, classified, updated, and trusted.
Doc type: Documentation policy

## Required Metadata

Every durable Markdown document must place this metadata block immediately after the H1 title:

```md
Status: ...
Owner: ...
Last updated: YYYY-MM-DD
Purpose: ...
Doc type: ...
```

Repo-local `SKILL.md` files are exempt from this metadata block. They must use portable YAML frontmatter with `name` and `description`, live under `skills/`, and be indexed in `skills/README.md`. Skills are workflow helpers and must not become project authority.

Use a real owner when possible. For now, use `Yaacov` unless a real person or team is responsible for the document.

## Human Accountability And AI Assistance

AI may help interview, draft, organize, compare, and reconcile documentation. It is never the accountable owner and cannot make material accepted merely by writing it confidently.

The named owner is responsible for the document's direction and maintenance. Before material becomes `Accepted` or `Active`, a responsible human must review it closely enough to stand behind its claims, boundaries, status, and placement.

Preserve specific reasoning, exceptions, uncertainty, and hard-won context. Do not let AI smooth useful detail into generic prose or hide missing evidence behind polished language.

## Status Values

- `Placeholder` - future home; not an accepted decision or implemented behavior.
- `Draft` - actively evolving and not yet complete.
- `Proposed` - recommended direction that still needs validation or acceptance.
- `Accepted` - current agreed direction.
- `Active` - current operational or orientation document.
- `Deprecated` - still present, but should no longer be used for new work.
- `Superseded` - replaced by a newer document.
- `Historical` - preserved for context, not current guidance.

Use `Active` for orientation, policy, and operating documents. Use `Accepted` for durable product or architecture direction.

## Doc Types

Use the narrowest accurate type:

- `Product truth`
- `Architecture direction`
- `Architecture decision`
- `Implementation candidate`
- `Research evidence`
- `Planning note`
- `Current implementation`
- `Future home`
- `Repo orientation`
- `Agent protocol`
- `Documentation policy`
- `Testing doctrine`
- `Engineering doctrine`
- `Quality doctrine`

## Placement Rules

Keep product truth in `docs/product/`.

Keep architecture direction in `docs/architecture/`.

Keep accepted architecture decisions in `docs/architecture/decisions/`.

Keep planning material in `docs/planning/`.

Keep raw research, source evaluations, and spike reports in `docs/research/`.

Use `docs/development/` only when there is code, commands, tests, APIs, or configuration to document.

Use `docs/operations/` only when there are real operational surfaces, deployment paths, monitoring, support, or maintenance workflows.

Keep root files special and minimal:

- `README.md` - human entry point.
- `AGENTS.md` - agent protocol.
- `docs/README.md` - documentation map.
- `docs/documentation-policy.md` - documentation rules.

Do not turn root files into broad planning or architecture documents.

## Repository Scope And Connected Knowledge

This policy governs durable documentation in the PapiLab repository. The repository currently owns PapiLab product and project knowledge; it is not the unrestricted memory of the whole company.

Company, commercial, market, or customer material may live here when it directly informs PapiLab and is placed as product truth, planning, research, architecture, or another existing type. Company-wide strategy, finance, legal, people, customer records, and cross-product authority require a separately accepted home and authority model.

A broader company memory may connect to PapiLab through links and shared conventions without living in the same repository. Connected context does not override the nearest authoritative source.

The current scope recommendation and unresolved structural choices live in `docs/planning/repository-scope-and-company-memory.md`.

## Knowledge Selection Rules

Create durable documentation when it will provide future context: an important decision and its reasoning, a durable principle or constraint, an owned interface or process, source-backed research, a hard-won lesson, a repeated explanation, or knowledge at real risk of disappearing.

Do not preserve every meeting, chat, transcript, task trace, or generated summary by default. Treat those as inputs. Promote only the parts that have a durable owner, purpose, evidence boundary, and correct home.

Documentation volume is not a quality measure. Prefer a small coherent knowledge system over a large archive that obscures authority.

## Evidence Rules

Durable factual claims should be grounded in one of:

- current repo files
- explicit user decisions
- accepted product or architecture documents
- inspected external sources
- verified command output

If a claim is inferred, speculative, unverified, or an open question, label it clearly.

Claims about current code must cite repo paths or verified commands. External tool evaluations should preserve source links, inspection date, and license when relevant. Model answers are research evidence unless promoted into product truth, architecture direction, or an accepted decision.

Do not add one document-level confidence field when claims inside the document have different evidence. Label uncertainty where it occurs and preserve the evidence or verification method needed to evaluate it.

## Context And Navigation Rules

Every durable document must have an understandable owning area. Area indexes should make durable documents discoverable, and documents whose authority could be confused should link to the governing source rather than copy its content.

Context should inherit through placement, indexes, and links: specific work should be traceable to the system, project, product requirement, decision, evidence, or policy that gives it meaning. Do not force every document to repeat the entire hierarchy.

Keep durable knowledge readable by humans. Machine-readable metadata and automation may support navigation, but they must not replace a human-auditable document.

## Placeholder Rules

Placeholder documents must explain:

- what will belong there later
- why the file exists now
- what the file must not be used as today

Placeholder documents must not define accepted architecture or implemented behavior.

## Promotion and Update Rules

Change document status deliberately:

- `Draft` becomes `Proposed` when it recommends a concrete direction.
- `Proposed` becomes `Accepted` only after explicit acceptance.
- `Accepted` becomes `Superseded` when a newer document replaces it.
- `Accepted` or `Active` becomes `Deprecated` when it still exists but should no longer guide new work.
- `Historical` is for preserved context that is no longer current guidance.

When a document's meaning changes, update `Last updated`.

Recheck a document when the decision, implementation, external source, provider, metric, process, or evidence it depends on materially changes. Update, deprecate, supersede, or mark it historical according to its real role. Do not change dates merely to simulate freshness.

Planning notes, research evidence, and implementation candidates are not canonical by themselves. They become canonical only when promoted into product truth, architecture direction, current implementation docs, or accepted decision records.

## Document Rules Sections

Canonical source-of-truth documents should include a short `Document Rules` section near the top when their authority boundary could be confused.

Keep `Document Rules` concise. It should clarify how to use the document, not repeat the full documentation policy.

A `Document Rules` section should usually include:

- what the document owns
- what the document must not own
- which document owns related detail

If the document is expected to change as work progresses, include a short `### Update Policy` subsection under `Document Rules`.

An `Update Policy` should define:

- when the document must be updated
- what status or evidence must be kept current
- what kinds of changes require updates to this document

Do not add boilerplate `Document Rules` sections to small indexes, placeholders, or templates unless the boundary needs clarification.

## Conflict Rules

When governing or factual sources disagree, do not choose silently and do not write a smooth synthesis that hides the disagreement.

Identify the conflicting sources, state the contradiction precisely, preserve the relevant evidence, and route the unresolved question to the person or document that owns the decision. Dependent material should not present either side as settled until the conflict is resolved.

## Architecture Decision Rules

Use `docs/architecture/decisions/` for accepted architecture decisions and serious proposed decisions that are hard to reverse.

An architecture decision record should include:

- context
- decision
- alternatives considered
- consequences
- status

Do not use architecture decision records for scratch notes, raw research, or ordinary implementation details.

## Memory And Preference Rules

Do not treat chat history, agent-local memory, private notes, or tool-specific memory files as project authority.

Personal preferences are advisory unless they are promoted into repo documentation.

Project decisions must live in the appropriate durable repo document:

- product decisions in `docs/product/`
- architecture decisions in `docs/architecture/` or `docs/architecture/decisions/`
- quality and testing doctrine in `docs/quality/`
- development conventions in `docs/development/`
- planning notes and open work in `docs/planning/`
- research evidence in `docs/research/`

Accepted architecture decisions should use `docs/architecture/decisions/`.

When the user says "remember this" or repeats an instruction, classify it before writing it down:

- personal preference
- project decision
- project context
- planning note
- known issue
- convention or rule
- research evidence

Put the information in the correct durable document. If it is not yet accepted project truth, label it as a candidate, draft, placeholder, or planning note.

Do not create tool-specific memory folders such as `.factory/` for project authority. If local or private preference files are used later, they must remain advisory and must not override repo documentation.

## Sensitive Information Rules

Do not commit secrets or sensitive personal, customer, employee, or regulated data. Keep restricted material in an appropriate controlled system and link to it when useful.

## Truth Rules

Do not describe planned architecture as implemented architecture.

Do not invent commands, environment variables, services, schemas, deployment steps, or test coverage.

Do not duplicate canonical truth across multiple files. Link to the source document instead.

Separate raw research from synthesis. Preserve source context when evaluating external tools or model answers.
