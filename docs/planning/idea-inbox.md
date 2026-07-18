# Idea Inbox

Status: Active
Owner: Scient 001
Created: 2026-07-11
Last updated: 2026-07-18
Purpose: Provides one temporary intake surface for unprocessed Scient ideas before they are evaluated and routed to their durable homes.
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
| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Short title.** Description. | Person's name | YYYY-MM-DD | ... | Product, architecture, design, research, quality, or unknown |
```

Preserve the original intent. Do not turn intake into analysis unless the idea
is being triaged. `Raised by` identifies the human source of the idea, not the
person or agent who edited this file. If the source cannot be established,
write `Not recorded` rather than guessing.

## Triage Destinations

- Product candidates and open product questions: `product-planning.md`
- Architecture direction or decisions: `../architecture/`
- Product design observations: `../design/`
- External evidence and source evaluations: `../research/`
- Build experiments and temporary implementation findings: `../../lab/`
- Accepted product truth: `../product/`, only after explicit promotion

## Unprocessed Ideas

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Default project workspace and starting material.** Plan how a new Scient user's basic desktop project workspace should be set up when the app creates and works with local files and folders. | Not recorded | 2026-07-12 | The evaluated skills-system direction now lives in the [Scient Skills System](../product/skills-system.md). Remaining questions include built-in starter guidance, standard places for articles and PDFs, other common project material, what Scient creates automatically, what remains visible versus app-managed, and how non-skill starting material works when opening an existing folder. | Product planning, project-format architecture, onboarding, and product design |
| **Visual literature map.** Add an interactive, Obsidian-style graph view of the literature sources in a Scient project. Sources would appear as nodes, with inspectable relationships such as citations, shared topics, project links, or researcher-created connections. The view should help researchers explore clusters, identify central or isolated sources, review gaps, filter the collection, and open each source in its normal detail view. | Yishai | 2026-07-18 | Spoken idea. The initial scope should focus on sources already imported into the project; broader scholarly-network discovery and the exact relationship types remain open questions. | Source-library product planning, literature-review UX, design, and future source-relationship architecture |
