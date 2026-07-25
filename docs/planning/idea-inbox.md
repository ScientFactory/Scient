# Idea Inbox

Status: Active
Owner: Scient 001
Created: 2026-07-11
Last updated: 2026-07-25
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

### Skills And Extensibility

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Project skill management after initialization.** ADR-0003 already accepts project-scoped built-in identities, an initialization-time activation lock, and the rule that activation is not invocation. Future product work should let users inspect and change a project's active skills after setup and decide whether optional domain skills that are available at user scope can be enabled or disabled for individual projects. An active skill is only eligible for use; an agent should load and follow it only when the current work matches its trigger. Do not build this management flow solely for the initial medical-exam-study skill; for now, that skill can remain user-scoped, disabled by default, and semantically invoked only for matching study work. | Yaacov | 2026-07-22 | Spoken product idea while defining the medical-exam-study built-in. Existing accepted project-activation architecture is recorded in ADR-0003; the unresolved idea is post-initialization management and user-versus-project activation composition. | Skills product planning, project settings, activation override semantics, agent skill routing, and UX |

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

### Desktop Navigation And Thread Activity

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Progressive-density desktop thread list.** Keep Scient's existing project and worktree grouping. Within each group, show live or attention-requiring threads as compact, information-rich cards, while quiet, seen, or completed threads remain simple rows. Rich cards could expose existing status, title, branch or worktree, provider, pull-request state, and diff summary when available. Derive the presentation from Scient's existing activity and attention state rather than introducing a separate persisted settled lifecycle. Desktop only; defer evaluation and implementation. | Yaacov | 2026-07-22 | T3 Code commit [`32c6012dabdbd0eb178b25ea4225d889ec8f6475`](https://github.com/pingdotgg/t3code/commit/32c6012dabdbd0eb178b25ea4225d889ec8f6475), dated 2026-07-22: “Sidebar v2 beta: flat thread list with a server-backed settled lifecycle” ([PR #4026](https://github.com/pingdotgg/t3code/pull/4026)). Inspect that exact commit before any future evaluation. The transferable idea is progressive visual density; T3's flat cross-project list as a hierarchy replacement, persisted settle or unsettle lifecycle, storage migration, controls, identity, and mobile implementation are out of scope. | Desktop sidebar and thread-list design, activity and attention presentation, accessibility, and future UX evaluation |

### Reliability, Recovery, And Data Safety

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Fail-closed local database recovery.** When Scient cannot open or migrate its local database, preserve the original database and related files before attempting any repair; explain the exact failure in plain language; offer bounded choices such as retry, restore a verified backup, or start with a quarantined fresh database; and make every automated step idempotent, observable, and reversible. Recovery must protect Scient's own migration lineage and user data rather than replaying another product's schema assumptions. | Yaacov | 2026-07-25 | Future investigation should begin with Synara commit [`5495a6e81e4da80e996867a1c487c9546cbd0196`](https://github.com/Emanuele-web04/synara/commit/5495a6e81e4da80e996867a1c487c9546cbd0196), especially `apps/desktop/src/desktopMigrationRecovery.ts`, `apps/server/src/persistence/MigrationBackup.ts`, `apps/server/src/persistence/Migrations.ts`, `packages/shared/src/migrationRecovery.ts`, and their tests; Windows coverage follows in [`47dc7145174b71e2813b63b976a72807ad96262e`](https://github.com/Emanuele-web04/synara/commit/47dc7145174b71e2813b63b976a72807ad96262e). In Scient, inspect `scient-desktop/apps/server/src/persistence/Migrations.ts`, `scient-desktop/apps/server/src/persistence/Migrations/`, `scient-desktop/apps/desktop/src/main.ts`, and the actual SQLite startup/shutdown boundary before designing anything. Borrow failure classification, backup verification, idempotency, explicit user choices, and adversarial tests; do not copy Synara's migration aliases, replay map, Space-specific repair, updater assumptions, or database replacement policy without a Scient-specific data model, threat analysis, rollback proof, and cross-platform recovery test matrix. | Local data durability, migration architecture, desktop startup recovery, backup and restore, recovery UX, security, and cross-platform release validation |

### App Distribution, Updates, And Releases

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Controlled desktop releases and trusted in-app updates.** Let installed Scient apps check for an explicitly published release, show a clear update action, download it safely, and install it with an understandable restart flow. Keep ordinary pushes to `main` separate from public releases so development can continue without updating users. Use a protected stable release branch, such as `release/stable`, as the deliberate promotion boundary: when a tested commit is ready, promote it from `main` to that branch and publish the public release from there. Only the explicit release should become the website download and the update offered to installed apps, with an immutable version tag and release artifacts recording the exact source that shipped. | Yaacov | 2026-07-19 | Spoken idea. The desktop repository already contains a Check for Updates menu item, update-button states, background check/download machinery, a GitHub Releases feed, website downloads from the latest release, and a tag/manual-dispatch release workflow. Client updates are still disabled in source pending a reviewed activation and installed-app feed test. The unresolved idea is therefore release activation and governance, not updating users from every push. | Desktop product and release planning, update UX, release-channel governance, CI/CD, code signing and notarization, installed-app testing, and website distribution |

### Feedback And Support

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **In-context screenshot feedback.** Make a feedback action available from anywhere in Scient. A user should be able to invoke it, instantly capture the current Scient view or select the relevant area, add a written comment, review the submission, and send the screenshot and comment to the Scient team. | Yaacov | 2026-07-20 | Spoken idea. Open questions include full-view versus region capture, annotation and redaction, which diagnostic context may accompany a submission, how feedback is received and tracked, failure handling, and explicit consent safeguards so project content or sensitive information is never sent unexpectedly. | Product planning, desktop and web UX, feedback and support operations, privacy and security, and diagnostics |
