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

### Project And Workspace

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Default project workspace and starting material.** Plan how a new Scient user's basic desktop project workspace should be set up when the app creates and works with local files and folders. | Not recorded | 2026-07-12 | The evaluated skills-system direction now lives in the [Scient Skills System](../product/skills-system.md). Remaining questions include built-in starter guidance, standard places for articles and PDFs, other common project material, what Scient creates automatically, what remains visible versus app-managed, and how non-skill starting material works when opening an existing folder. | Product planning, project-format architecture, onboarding, and product design |

### Research Exploration And Visualization

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Visual literature map.** Add an interactive, Obsidian-style graph view of the literature sources in a Scient project. Sources would appear as nodes, with inspectable relationships such as citations, shared topics, project links, or researcher-created connections. The view should help researchers explore clusters, identify central or isolated sources, review gaps, filter the collection, and open each source in its normal detail view. | Yishai | 2026-07-18 | Spoken idea. The initial scope should focus on sources already imported into the project; broader scholarly-network discovery and the exact relationship types remain open questions. | Source-library product planning, literature-review UX, design, and future source-relationship architecture |

### Memory, Context, And Continuity

| Idea | Raised by | Date added | Context or source | Possible area |
|---|---|---|---|---|
| **Future Scient memory architecture.** Discuss Scient's complete memory architecture as a dedicated future product and architecture project before selecting schemas, databases, or synchronization machinery. | Yaacov | 2026-07-18 | Questions about project records, conversations, SQLite, Git, user-selected cloud folders, recovery, and future Scient cloud sync arose during the first-slice source review. They belong to the broader memory-system discussion, not the completed T3 reliability work or an immediate persistence decision. Reusable questions from an oversized standalone persistence brief were condensed here before that out-of-scope architecture file was removed. | Product planning, future memory architecture, agent runtime, project format, security, provenance, synchronization, and product design |

#### Candidate scopes and questions to preserve

Candidate scopes to discuss, not accepted layers:

- **Conversation memory:** short-lived or derived context from one conversation,
  distinct from the complete transcript.
- **Task or run memory:** working state for one delegated task or agent run,
  including what may expire when the run completes.
- **Project memory:** durable project direction, decisions, source judgments,
  analysis choices, unresolved questions, collaborator decisions, and prior
  work needed for continuity.
- **User memory:** personal preferences, recurring choices, and working style
  that may apply across projects without silently overriding project rules.
- **Team or organization memory:** shared methods, conventions, and
  institutional knowledge with explicit membership, permission, and ownership
  boundaries.
- **Scient-maintained knowledge:** built-in product guidance, scientific skills,
  and maintained procedures; this may require different authority and update
  rules from user-generated memory.
- **Raw history and provenance:** complete conversations, events, actions, and
  evidence that may support memory but are not automatically trusted memory.

Questions for the future discovery project:

- Which candidate scopes are actually needed, and what are their precise names
  and responsibilities?
- Who owns, reads, edits, shares, exports, deletes, or promotes information in
  each scope?
- What is ephemeral, retained for continuity, durable, canonical, derived, or
  rebuildable?
- What is the difference between a complete conversation transcript,
  conversation context, a summary, and trusted memory?
- Can a conversation or task propose project memory, and which promotions
  require explicit researcher review?
- How are source, authority, confidence, freshness, conflict, staleness,
  distrust, archival, forgetting, and supersession represented?
- What happens when user memory conflicts with project memory, or project
  memory conflicts with current files and evidence?
- How can researchers inspect, correct, pin, challenge, archive, forget, or
  disable remembered information?
- Which memory can Scient use, and which memory may be disclosed to an external
  agent for one bounded task?
- How does task context include only the appropriate user, project,
  conversation, and run information?
- How do project memory and provenance relate to ordinary researcher-owned
  files without turning generated summaries into project authority?
- How do projects remain friendly to Git while never requiring Git for ordinary
  use, history, or recovery?
- How should projects behave in iCloud Drive, Dropbox, OneDrive, external
  drives, network locations, and other user-selected folders?
- Which information belongs in the project folder, local application storage,
  a user account, or future Scient cloud storage?
- What remains fully useful offline, and what is restored or synchronized when
  cloud access returns?
- How are concurrent edits, offline divergence, deletion, restoration, device
  loss, and collaborator removal handled?
- How are conversations, memory, decisions, and provenance retained, backed up,
  exported, transferred, encrypted, redacted, or permanently deleted?
- Which privacy, sensitive-data, institutional-control, and regional-storage
  requirements constrain the design?
- What scale, latency, reliability, recovery, migration, portability, and exit
  requirements must be accepted before evaluating storage technologies?
- Only after the memory model is understood, which persistence approaches
  should be evaluated, including SQLite, structured files, derived indexes,
  local databases, cloud databases, and combinations of them?
- If SQLite remains a candidate at that later stage, what evidence is required
  for crash behavior, journal/WAL handling, active copying, cloud-folder sync,
  backup and restore, integrity checks, locking, migrations, packaging,
  performance, readable export, and exit from the format?

Explicit non-decisions:

- These scopes are prompts for discussion, not accepted memory architecture.
- Conversation, user, project, task, team, and system memory are not yet formal
  product objects or storage boundaries.
- No database, schema, project ledger, cloud-sync protocol, or retention policy
  is selected or authorized.
- The existing application SQLite database remains current app/session
  implementation; it does not settle the future memory architecture.
- This future discovery does not block T3 reliability work or unrelated product
  work.
