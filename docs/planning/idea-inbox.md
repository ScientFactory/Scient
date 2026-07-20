# Idea Inbox

Status: Active
Owner: Scient 001
Created: 2026-07-11
Last updated: 2026-07-20
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

Group entries under the nearest broad area and use the lightest useful form:

```md
### Area

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Short title.** Description. | Person's name | YYYY-MM-DD | ... | Product, architecture, design, research, quality, or unknown |
```

Preserve the original intent. Do not turn intake into analysis unless the idea
is being triaged. `Raised by` identifies the human source of the idea, not the
person or agent who edited this file. If the source cannot be established,
write `Not recorded` rather than guessing.

An unusually broad idea may have a short question inventory below its table row
when that is necessary to preserve the raw scope. The inventory remains intake,
not analysis or architecture, and should move with the idea when it is promoted.

## Triage Destinations

- Product candidates and open product questions: `product-planning.md`
- Architecture direction or decisions: `../architecture/`
- Product design observations: `../design/`
- External evidence and source evaluations: `../research/`
- Build experiments and temporary implementation findings: `../../lab/`
- Accepted product truth: `../product/`, only after explicit promotion

## Unprocessed Ideas

### Research Exploration And Visualization

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Visual literature map.** Add an interactive, Obsidian-style graph view of the literature sources in a Scient project. Sources would appear as nodes, with inspectable relationships such as citations, shared topics, project links, or researcher-created connections. The view should help researchers explore clusters, identify central or isolated sources, review gaps, filter the collection, and open each source in its normal detail view. | Yishai | 2026-07-18 | Spoken idea. The initial scope should focus on sources already imported into the project; broader scholarly-network discovery and the exact relationship types remain open questions. | Source-library product planning, literature-review UX, design, and future source-relationship architecture |

### Citations And Publishing

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Project-native and standalone citation generator.** Let a user provide a DOI, URL, article title, or available bibliographic information, choose a citation style, and generate the corresponding formatted citation. Offer the capability both as an agent-accessible tool within a Scient project and as a lightweight standalone UI for one-off citation generation. | Yaacov | 2026-07-18 | Spoken idea. Open questions include supported identifiers and source types, in-text citation versus bibliography output, metadata lookup and correction, style coverage, copy or export formats, and how a generated citation should become a project source when used inside Scient. | Citation and manuscript product planning, source metadata, standalone utility UX, agent tools, and citation-style integration |

### Scientific Domains And Disciplines

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Scientific domain and interdisciplinary support.** Create a clean way for Scient to recognize and support different scientific domains, including medicine, biology, chemistry, physics, computer science, mathematics, engineering, social sciences, and other fields, while also supporting projects that span multiple disciplines. | Yaacov | 2026-07-18 | Spoken idea. The necessary product features and boundaries are still unresolved; the immediate need is to investigate what should stay common across Scient and what should adapt to a project's scientific domain or combination of domains. | Product planning, project setup, scientific skills and packs, agent context and routing, methods and evidence standards, product design, and evaluation |

Questions to preserve:

- Should researchers select one or more domains, should Scient infer them, or
  should both be possible and correctable?
- Which differences actually require domain adaptation: terminology, source
  types and databases, methods, evidence standards, safety or regulatory
  constraints, data and analysis tools, or expected outputs?
- Which adaptations belong in domain-specific skills, packs, templates, tools,
  or guidance rather than the shared Scient product core?
- How should domain context affect agent behavior, model or tool selection, and
  scientific evaluation without creating opaque assumptions?
- How should interdisciplinary projects combine domain support without forcing
  the project into one silo or duplicating the shared project workflow?

### App Distribution, Updates, And Releases

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Controlled desktop releases and trusted in-app updates.** Let installed Scient apps check for an explicitly published release, show a clear update action, download it safely, and install it with an understandable restart flow. Keep ordinary pushes to `main` separate from public releases so development can continue without updating users. Use a protected stable release branch, such as `release/stable`, as the deliberate promotion boundary: when a tested commit is ready, promote it from `main` to that branch and publish the public release from there. Only the explicit release should become the website download and the update offered to installed apps, with an immutable version tag and release artifacts recording the exact source that shipped. | Yaacov | 2026-07-19 | Spoken idea. The desktop repository already contains a Check for Updates menu item, update-button states, background check/download machinery, a GitHub Releases feed, website downloads from the latest release, and a tag/manual-dispatch release workflow. Client updates are still disabled in source pending a reviewed activation and installed-app feed test. The unresolved idea is therefore release activation and governance, not updating users from every push. | Desktop product and release planning, update UX, release-channel governance, CI/CD, code signing and notarization, installed-app testing, and website distribution |

### Feedback And Support

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **In-context screenshot feedback.** Make a feedback action available from anywhere in Scient. A user should be able to invoke it, instantly capture the current Scient view or select the relevant area, add a written comment, review the submission, and send the screenshot and comment to the Scient team. | Yaacov | 2026-07-20 | Spoken idea. Open questions include full-view versus region capture, annotation and redaction, which diagnostic context may accompany a submission, how feedback is received and tracked, failure handling, and explicit consent safeguards so project content or sensitive information is never sent unexpectedly. | Product planning, desktop and web UX, feedback and support operations, privacy and security, and diagnostics |
