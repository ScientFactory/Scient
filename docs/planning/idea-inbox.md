# Idea Inbox

Status: Active
Owner: Scient 001
Created: 2026-07-11
Last updated: 2026-07-25
Purpose: Provides one temporary intake surface for unprocessed Scient ideas and a compact index of ideas routed to durable homes or completed with verified evidence.
Doc type: Planning note

## Document Rules

Use this file only for raw or unprocessed ideas that do not yet belong in the
product feature inventory, an architecture document, a design note, research,
or an implementation plan.

Ideas recorded here are not product truth, accepted architecture, commitments,
priorities, or current implementation. They may be incomplete, contradictory,
or later rejected.

Once an idea is evaluated, move the useful detail into its owning document and
remove the raw inbox entry. A short summary may remain in the routed and
completed index so people can still discover the original idea and follow its
durable link. Do not duplicate the detailed content in both places.

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

### Scientific Paper And PDF Acquisition

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Full scientific-paper and PDF acquisition pipeline as a near-term priority.** Expand Scient with substantially more native scientific capabilities, beginning as soon as possible with a complete in-project workflow for acquiring scientific papers and their PDFs. Starting from an identified or selected paper, the pipeline should resolve legitimate available acquisition routes, retrieve the PDF and metadata, validate the file and source identity, handle duplicates and versions, preserve acquisition provenance, and import the result as reliable project material. The exact first scope, supported sources, and implementation sequence still need evaluation. | Yaacov | 2026-07-23 | Spoken product idea emphasizing that Scient should add much more scientific functionality soon and that paper/PDF acquisition should be among the first major scientific capabilities implemented. Existing product planning already identifies source discovery, import, and reading as core; this entry preserves the requested urgency and end-to-end acquisition scope. | Source acquisition and import product planning, scholarly integrations, project source library, PDF validation and parsing, provenance, security, architecture, and implementation planning |

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

### Website Content And Provider Presentation

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Website FAQ and provider-logo presentation.** Add a short set of useful questions and answers near the bottom of the public Scient website. Also explore a polished way to show the logos of AI providers that Scient actually supports. Before designing or implementing the provider presentation, inspect how the Synara website handles it as a visual reference, then adapt the idea to Scient's own design, current provider support, accessibility needs, and brand or trademark constraints without implying unsupported integrations or partnerships. The exact questions, answers, placement, provider set, and visual treatment remain to be decided. | Yaacov | 2026-07-23 | Spoken website idea. Synara's website was identified as a reference that should be checked before implementation, not as an accepted design to copy directly. | Website product content, marketing design, FAQ information architecture, provider representation, accessibility, brand review, and implementation planning |

### Browser Automation And Agent Tools

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Provider-neutral collaborative browser automation.** Evaluate making Scient's in-app browser a first-class capability that the researcher and their chosen agent can use together in the same visible tabs. The complete experience should let an authorized agent inspect page semantics and diagnostics, navigate, click, type, press keys, scroll, wait for page changes, resize the viewport, capture screenshots, and record useful evidence while keeping actions visible, attributable, permission-scoped, and interruptible by the researcher. Use T3 Code's product-native preview automation as a detailed reference, but adapt the capability to Scient's scientific workflows, provider model, project provenance, privacy boundaries, and review requirements rather than copying its implementation wholesale. | Yaacov | 2026-07-23 | Spoken idea prompted by reports that T3 Code has strong browser automation. Current-source review found that T3 Code commit [`2d31cb022dee43e5a729273a6936228f30077e29`](https://github.com/pingdotgg/t3code/tree/2d31cb022dee43e5a729273a6936228f30077e29) exposes an explicit scoped `preview_*` MCP toolkit with semantic snapshots, interaction, viewport sizing, diagnostics, and recording. Scient desktop `main` at [`4c678deb74f64286c106da79b7e6997b9bb10db8`](https://github.com/ScientFactory/scient-desktop/tree/4c678deb74f64286c106da79b7e6997b9bb10db8) already has a shared in-app browser, screenshots, a Codex-compatible browser-use pipe, and CDP control; installed behavior and the gaps to a provider-neutral product capability still require direct validation. | Browser product planning, agent tools and provider capability contracts, desktop architecture, permissions and security, scientific provenance, evidence capture, design, and cross-provider quality evaluation |

### File Viewing And Specialized Formats

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Specialized in-app file viewers beyond the first universal-opening scope.** Explore adding dedicated Scient viewers for EPUB books, Jupyter notebooks, archive contents, fonts, structured tables, Office/iWork/ODF documents, and specialized scientific formats such as medical imaging, CAD, or domain-specific data. Future viewers should join the same consistent file-opening experience rather than introduce separate click handlers, but the useful formats, renderer dependencies, editing versus read-only behavior, mobile role, sequencing, and fallback to registered system applications remain to be evaluated. | Yaacov | 2026-07-24 | Spoken follow-up while defining the current universal local-file and full HTML viewer implementation. These specialized formats were explicitly deferred so they would not block the first complete viewer release. | File-viewer product planning, format research, renderer architecture, accessibility, desktop/mobile role, and specialized scientific workflows |

### Desktop Navigation And Thread Activity

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Progressive-density desktop thread list.** Keep Scient's existing project and worktree grouping. Within each group, show live or attention-requiring threads as compact, information-rich cards, while quiet, seen, or completed threads remain simple rows. Rich cards could expose existing status, title, branch or worktree, provider, pull-request state, and diff summary when available. Derive the presentation from Scient's existing activity and attention state rather than introducing a separate persisted settled lifecycle. Desktop only; defer evaluation and implementation. | Yaacov | 2026-07-22 | T3 Code commit [`32c6012dabdbd0eb178b25ea4225d889ec8f6475`](https://github.com/pingdotgg/t3code/commit/32c6012dabdbd0eb178b25ea4225d889ec8f6475), dated 2026-07-22: “Sidebar v2 beta: flat thread list with a server-backed settled lifecycle” ([PR #4026](https://github.com/pingdotgg/t3code/pull/4026)). Inspect that exact commit before any future evaluation. The transferable idea is progressive visual density; T3's flat cross-project list as a hierarchy replacement, persisted settle or unsettle lifecycle, storage migration, controls, identity, and mobile implementation are out of scope. | Desktop sidebar and thread-list design, activity and attention presentation, accessibility, and future UX evaluation |
| **Inline fork provenance marker.** When a conversation is forked, show a short, persistent inline message near the beginning of the forked chat, such as “Conversation forked from: [previous message name].” This should read as part of the conversation rather than a temporary toast or a separate Activity notification, so the user can understand the fork’s origin later. The exact placement, source-message label, and behavior when the source message is renamed or unavailable still need to be defined. | Yaacov | 2026-07-25 | Spoken quick-fix idea while reviewing the desktop fork-chat experience. The desired treatment is a small, centered or otherwise unobtrusive conversation line, not a transient notification. | Desktop conversation forks, message provenance, thread history, and inline system-message design |

### Reliability, Recovery, And Data Safety

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Fail-closed local database recovery.** When Scient cannot open or migrate its local database, preserve the original database and related files before attempting any repair; explain the exact failure in plain language; offer bounded choices such as retry, restore a verified backup, or start with a quarantined fresh database; and make every automated step idempotent, observable, and reversible. Recovery must protect Scient's own migration lineage and user data rather than replaying another product's schema assumptions. | Yaacov | 2026-07-25 | Future investigation should begin with Synara commit [`5495a6e81e4da80e996867a1c487c9546cbd0196`](https://github.com/Emanuele-web04/synara/commit/5495a6e81e4da80e996867a1c487c9546cbd0196), especially `apps/desktop/src/desktopMigrationRecovery.ts`, `apps/server/src/persistence/MigrationBackup.ts`, `apps/server/src/persistence/Migrations.ts`, `packages/shared/src/migrationRecovery.ts`, and their tests; Windows coverage follows in [`47dc7145174b71e2813b63b976a72807ad96262e`](https://github.com/Emanuele-web04/synara/commit/47dc7145174b71e2813b63b976a72807ad96262e). In Scient, inspect `scient-desktop/apps/server/src/persistence/Migrations.ts`, `scient-desktop/apps/server/src/persistence/Migrations/`, `scient-desktop/apps/desktop/src/main.ts`, and the actual SQLite startup/shutdown boundary before designing anything. Borrow failure classification, backup verification, idempotency, explicit user choices, and adversarial tests; do not copy Synara's migration aliases, replay map, Space-specific repair, updater assumptions, or database replacement policy without a Scient-specific data model, threat analysis, rollback proof, and cross-platform recovery test matrix. | Local data durability, migration architecture, desktop startup recovery, backup and restore, recovery UX, security, and cross-platform release validation |

### Interface And Notification Design

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Redesign in-app notification presentation.** Current notifications use a conspicuous blue treatment and appear in the middle of the interface, making them feel visually inconsistent and intrusive. Evaluate the shared notification system and define accessible, non-obstructive styling, placement, hierarchy, timing, and behavior that fit the rest of Scient. | Yaacov | 2026-07-22 | Spoken product-design issue based on the current app experience. The affected notification types and components, exact placement behavior, visual references, and desired interaction rules still need review. | Product design, desktop and web notification system, accessibility, responsive layout, and design-system implementation |
| **Do not add a separate Activity notification when a thread receives an answer.** When an answer arrives in a thread, stop creating an additional notification item in the Activity box if the thread itself already communicates the new answer or attention state. The exact ownership of unread state, thread attention, and Activity entries still needs to be verified against the current notification and activity flows. | Yaacov | 2026-07-25 | Spoken product idea. Intended to reduce duplicate attention signals when a thread answer is already visible through the thread surface. | Desktop thread activity, notification ownership, unread and attention state, and interaction design |

### Permissions And Trust

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Minimize and contextualize app permission requests.** Users should not encounter a large collection of access requests when first entering Scient. Audit which permissions are truly necessary, remove unnecessary requests, and defer optional permissions until the user invokes the feature that needs them. Before an operating-system prompt appears, explain in plain language what access is requested, why the current action needs it, what Scient will and will not access, and whether the user can continue without granting it. | Yaacov | 2026-07-23 | Spoken product and trust concern about the current first-run experience. The exact prompts, platforms, triggering features, required versus optional permissions, and behavior after denial still need diagnosis. | Desktop onboarding, privacy and security, operating-system permissions, feature gating, trust UX, and clean-machine validation |

### Feedback And Support

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **In-context screenshot feedback.** Make a feedback action available from anywhere in Scient. A user should be able to invoke it, instantly capture the current Scient view or select the relevant area, add a written comment, review the submission, and send the screenshot and comment to the Scient team. | Yaacov | 2026-07-20 | Spoken idea. Open questions include full-view versus region capture, annotation and redaction, which diagnostic context may accompany a submission, how feedback is received and tracked, failure handling, and explicit consent safeguards so project content or sensitive information is never sent unexpectedly. | Product planning, desktop and web UX, feedback and support operations, privacy and security, and diagnostics |

## Routed And Completed Idea Index

This index preserves discoverability without keeping duplicate detail in the
raw inbox. `Routed` means the idea remains proposed or unresolved in the linked
owner; it does not mean accepted or implemented.

| Idea | Raised by | Date added | State | Durable location or evidence |
|---|---|---|---|---|
| **Provider connection, onboarding, updates, and defaults.** Give users one coherent provider lifecycle with guided setup, inline `Connect` and `Update CLI` actions, automatic selection after connection, current runtimes and model catalogs, and reviewed high-thinking defaults without routine provider-status notifications. | Yaacov | 2026-07-22 | Routed | Full candidate behavior, preserved source ideas, sequencing, platform role, and open questions live in [Provider Connection And Lifecycle Experience](provider-connection-and-lifecycle-experience.md). |
| **Skill-assisted repository knowledge as a project-memory bootstrap.** Use a governed skill to help recognize and document durable project knowledge and project-specific preferences in readable repository files now, while planning the real inspectable project-memory system rather than treating the skill as that system. | Yaacov | 2026-07-23 | Routed | The recommended bootstrap boundary, relationship to user memory, prohibited shortcuts, future migration questions, and real memory-discovery sequence live in [Memory Architecture Discovery](memory-architecture-discovery.md#skill-assisted-repository-knowledge-as-a-bootstrap). |
| **Controlled desktop releases and trusted in-app updates.** Keep development on `main` separate from deliberate public promotion, publish immutable releases from `release/stable`, and let installed apps offer trusted updates. | Yaacov | 2026-07-19 | Implemented and operationally routed | Current release and updater behavior lives in the desktop repository's [Release Checklist](https://github.com/ScientFactory/scient-desktop/blob/main/docs/release.md). |
| **Stop routine snapshot notifications on startup.** Routine AppSnap availability should remain silent on startup while actionable failures may still be explained. | Yaacov | 2026-07-22 | Completed | The startup announcement was removed from desktop `main` in [scient-desktop PR #80](https://github.com/ScientFactory/scient-desktop/pull/80). |
