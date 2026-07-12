# Idea Inbox

Status: Active
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Provides one temporary intake surface for unprocessed LitRev ideas before they are evaluated and routed to their durable homes.
Doc type: Planning note

## Document Rules

Use this file only for raw or unprocessed ideas that do not yet belong in the
product feature inventory, an architecture document, a design note, research,
or an implementation plan.

Ideas recorded here are not product truth, accepted architecture, commitments,
priorities, or current implementation. They may be incomplete, contradictory,
or later rejected.

Once an idea is evaluated, move the useful result into its owning document and
remove the raw inbox entry. Do not leave duplicate copies here and elsewhere.

## Entry Shape

Use the lightest useful form:

```md
### YYYY-MM-DD — Short title

- Idea: ...
- Context or source: ...
- Possible area: product, architecture, design, research, quality, or unknown
```

Preserve the original intent. Do not turn intake into analysis unless the idea
is being triaged.

## Triage Destinations

- Product candidates and open product questions: `product-planning.md`
- Architecture direction or decisions: `../architecture/`
- Product design observations: `../design/`
- External evidence and source evaluations: `../research/`
- Build experiments and temporary implementation findings: `../../lab/`
- Accepted product truth: `../product/`, only after explicit promotion

## Unprocessed Ideas

### 2026-07-12 — Default project workspace and built-in starting material

- Idea: Plan how a new LitRev user's basic desktop project workspace should be
  set up when the app creates and works with local files and folders.
- Things to remember: possible built-in starter documentation or guidance, a
  small set of built-in skills, a standard place for articles and PDFs, and
  sensible places for other common research-project material.
- Open questions: what LitRev should create automatically; which areas should
  be visible folders or files versus app-managed state; which starting material
  belongs to the app versus each project; and how this should work when opening
  an existing folder.
- Possible area: product planning, project-format architecture, onboarding, and
  product design.
