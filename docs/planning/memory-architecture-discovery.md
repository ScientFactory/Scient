# Memory Architecture Discovery

Status: Draft
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Preserves the candidate scopes, vocabulary, product questions, trust boundaries, and investigation sequence required before Scient proposes or implements a memory architecture.
Doc type: Planning note

## Document Rules

- This is a discovery document, not accepted product truth, architecture, an
  ADR, a database design, or implementation authorization.
- The accepted [PRD](../product/PRD.md), especially Project Memory And
  Continuity, owns current product principles. This document must not weaken or
  silently extend them.
- Candidate memory scopes are discussion tools. Their names, number,
  responsibilities, and relationships are not selected.
- Storage technology comes after the memory model. SQLite, structured files,
  indexes, cloud databases, and other mechanisms remain later candidates.
- Do not make this discovery a dependency of the completed T3 reliability work
  or unrelated product development.
- When the discovery becomes active, record accepted product outcomes in the
  appropriate product/planning document, proposed technical direction in a
  focused architecture document, and consequential accepted choices in ADRs.

## Why This Discovery Exists

Scient intends to provide continuity across conversations, tasks, agent runs,
devices, collaborators, and the long life of a scientific project. The PRD
already requires memory that is inspectable, correctable, challengeable, and
supported by trust metadata. It also distinguishes helpful summaries from
canonical memory when summaries obscure the underlying project record.

Those principles do not yet define one memory system. Open questions include:

- which kinds or scopes of memory Scient needs;
- how complete conversation history differs from remembered context;
- what belongs to a user, project, task, team, organization, or device;
- how information is proposed, reviewed, promoted, inherited, corrected,
  forgotten, or superseded across scopes;
- what Scient and external agents may access;
- how memory relates to ordinary files, provenance, decisions, and accepted
  project records;
- how local-first behavior, user-selected cloud folders, Git, and future Scient
  cloud synchronization interact; and
- only after those answers, which persistence technologies are appropriate.

These questions surfaced during the first-slice source trace and were briefly
framed too narrowly as a project-persistence or SQLite decision. They belong
together as a future memory-architecture discovery.

## What Is Already Product Direction

The following are existing product-level directions, not discoveries made by
this file:

- the research project is the durable center of work;
- project memory should support continuity across sessions, collaborators, and
  agent runs;
- memory should be inspectable, editable, correctable, challengeable, and
  recoverable when it affects project work;
- researchers should be able to pin, distrust, update, archive, forget, or
  supersede remembered information;
- memory needs enough source, authority, confidence, freshness, conflict, and
  staleness information to be evaluated;
- summaries may help continuation but must not silently become authority;
- ordinary researchers must not depend on Git for basic use or recovery;
- local work should remain useful without Scient cloud access; and
- external tools and agents must not become the only owners of Scient project
  meaning or accepted scientific work.

The discovery must translate these directions into a coherent model without
mistaking them for a schema.

## Vocabulary That Must Be Separated

The future discussion should avoid using `memory` as a synonym for every form
of stored data.

| Term | Candidate meaning | Why it must remain distinct |
|---|---|---|
| Complete transcript | The full messages and events from a conversation | Retaining history does not make every message trusted memory |
| Conversation context | The bounded material available while continuing one conversation | It may be temporary, summarized, truncated, or reconstructed |
| Task/run state | Inputs, progress, tool evidence, outputs, and status for one delegated action | Operational continuity and audit evidence are not automatically reusable memory |
| Memory | Information intentionally retained to improve future continuity or decisions | It needs scope, authority, lifecycle, and correction semantics |
| Summary | A compressed interpretation of larger material | It may omit nuance and must expose its sources and limitations |
| Provenance | Evidence of where information or an artifact came from and how it changed | Provenance supports evaluation but is not itself always remembered guidance |
| Decision/history record | A durable account of a choice, revision, or prior state | Historical truth and current guidance can diverge |
| Project file | Researcher-owned source, data, code, analysis, figure, note, or manuscript material | Files remain ordinary project material and should not all be duplicated as memory |
| Application state | Settings, registered paths, UI projections, caches, queues, and sessions | Useful implementation state must not silently define project memory |
| Scient-maintained knowledge | Product guidance, built-in scientific skills, and maintained procedures | Its authority and update path differ from user-generated memory |

The discovery may revise these terms, but it should not proceed while their
meanings remain collapsed.

## Candidate Memory Scopes

These are candidate scopes to compare, combine, rename, or reject.

### Conversation memory

Possible purpose:

- continue one conversation coherently;
- remember temporary conversational goals, references, and unresolved threads;
- retain or derive context without repeatedly replaying the full transcript.

Open distinction: the transcript, a generated summary, and remembered context
may be three different objects with different retention and trust rules.

### Task or run memory

Possible purpose:

- continue or retry one delegated task;
- preserve bounded inputs, decisions, tool evidence, outputs, and failure state;
- help an agent resume without receiving unrelated project or user context.

Open distinction: run evidence may be important provenance without becoming
future guidance.

### Project memory

Possible purpose:

- preserve project direction, protocol decisions, source judgments, extraction
  choices, analysis decisions, writing choices, unresolved questions,
  collaborator decisions, and relevant prior work;
- support continuity across conversations, agents, users, and devices;
- remain inspectable and correctable by project members.

Open distinction: accepted project records, current files, historical events,
and memory may overlap without being identical.

### User memory

Possible purpose:

- preserve personal working preferences, recurring choices, communication
  style, accessibility needs, and preferred review behavior across projects;
- reduce repetitive setup without placing private preferences into every
  project.

Open distinction: user memory must not silently override project rules,
evidence, collaborator decisions, institutional policy, or explicit current
instructions.

### Team or organization memory

Possible purpose:

- preserve shared methods, terminology, templates, conventions, and
  institutional knowledge;
- support continuity across projects and changing membership.

Open distinction: this scope requires explicit governance, permission,
attribution, revocation, and ownership. It should not be assumed necessary just
because user and project memory exist.

### Scient-maintained knowledge

Possible purpose:

- provide maintained product guidance, scientific procedures, and built-in
  skills;
- give users a stable baseline that is versioned and updated by Scient rather
  than learned implicitly from one user's behavior.

Open distinction: maintained product knowledge may belong in documentation or
skills rather than the same memory subsystem as personal or project memory.

### Raw history and provenance

Possible purpose:

- preserve complete conversations, events, tool activity, proposal history,
  decisions, and source relationships;
- allow memory claims and project changes to be audited or reconstructed.

Open distinction: raw history can support memory without being injected into
future context or treated as current guidance.

## Candidate Scope Matrix

Every candidate scope should eventually answer the following. Empty or vague
cells indicate unresolved architecture, not permission to inherit defaults.

| Scope | Candidate owner | Typical lifetime | Candidate sharing | Authority question |
|---|---|---|---|---|
| Conversation | Participant or project, undecided | One conversation to retained history | Usually bounded to participants/project | What survives after the conversation, and why? |
| Task/run | Project or execution owner, undecided | One run through audit/recovery retention | Bounded participants and reviewers | Which evidence may influence later work? |
| Project | Project and authorized members | Project lifetime and export/retention period | Project members and bounded agents | What can become trusted project memory? |
| User | Individual user | Account/device lifetime subject to user control | Private by default | When may it affect a shared project? |
| Team/organization | Governed shared entity | Policy-defined | Members according to roles | Who may publish, revoke, or supersede it? |
| Scient-maintained knowledge | Scient product governance | Versioned product lifetime | Product users | How are versions, authority, and updates exposed? |
| Raw history/provenance | Depends on originating object | Retention-policy dependent | Auditors, participants, or project members | What must be retained versus deleted or redacted? |

## Relationships Between Scopes

### Proposal and promotion

The discovery should determine whether lower-scope information can propose a
higher-scope memory. Example questions:

- Can a conversation propose project memory?
- Can repeated user corrections propose a user preference?
- Can one task produce project memory, or only evidence for researcher review?
- Which promotions require explicit approval?
- Is automatic promotion ever acceptable, and how is it reversed?

### Context assembly and inheritance

An agent should not receive every available memory item. The discovery should
define how a task assembles only appropriate context from:

- explicit current instructions;
- project rules and accepted project memory;
- user preferences that are permitted in that project;
- conversation context;
- task/run state;
- relevant files and evidence; and
- Scient-maintained guidance or skills.

The resulting context should remain inspectable enough to understand why the
agent behaved as it did.

### Conflict and precedence

Candidate conflicts include:

- user preference versus project rule;
- remembered project direction versus a newer explicit decision;
- summary versus source evidence;
- project memory versus changed project files;
- two collaborators recording incompatible judgments;
- team convention versus project-specific method; and
- stale memory versus current instructions.

The discovery must not assume that one universal priority order resolves every
case. Some conflicts may require visible coexistence and researcher judgment.

### Correction, forgetting, and history

The discussion should distinguish:

- correcting current memory;
- superseding it while preserving history;
- distrusting it without deleting evidence;
- archiving it from active retrieval;
- forgetting or permanently deleting it;
- redacting sensitive content while retaining an audit event; and
- removing a collaborator's access without falsifying prior attribution.

## Core Product Questions

### Scope and ownership

- Which candidate scopes are actually necessary?
- Is conversation memory a separate scope or a view of project/user memory?
- Is task/run memory a memory scope, operational state, provenance, or some
  combination?
- Can one memory item belong to more than one scope?
- Who owns and administers each scope?
- What happens to personal contributions when a user leaves a project or team?

### Authority and trust

- Which memories can affect future agent behavior automatically?
- Which require researcher confirmation before use?
- What source, authority, confidence, freshness, and conflict metadata are
  mandatory?
- How are inferred memories distinguished from explicit user statements and
  accepted project decisions?
- How is stale or contradicted memory detected and surfaced?
- Can an agent challenge memory, and can it change memory without approval?

### Conversation lifecycle

- Are complete conversations always retained, optionally retained, or governed
  by project/account policy?
- Can users delete a conversation while preserving promoted project memory and
  necessary provenance?
- What must be available to continue a conversation on another device?
- How are summaries regenerated, versioned, corrected, or distrusted?
- Which provider-native transcript data must be normalized or exported so
  continuity does not depend on one provider?

### Project and user interaction

- When may private user memory influence shared project work?
- Should collaborators see that a private preference affected an output without
  seeing the preference itself?
- Can a project prohibit particular categories of user memory?
- How are project-specific preferences prevented from leaking into other
  projects?
- What happens when one user corrects a project memory that other collaborators
  still rely on?

### Agent access and disclosure

- Which memory scopes may the native Scient agent access by default?
- Which scopes may an external agent receive for one bounded task?
- How are sensitive or unrelated memories excluded from prompts and tools?
- How does the researcher inspect the memory/context receipt supplied to an
  agent?
- How are retrieval, disclosure, use, and resulting changes audited?
- Can an agent propose a memory without gaining permission to write it?

### Files, Git, and user-selected folders

- How does project memory refer to ordinary files without duplicating all file
  content?
- What happens when referenced files move, change, disappear, or conflict?
- Which memory or provenance material should be Git-friendly?
- How does non-Git recovery work for ordinary users?
- How should projects behave in iCloud Drive, Dropbox, OneDrive, external
  drives, network locations, and other folders selected by the researcher?
- Can Scient detect divergent copies without blocking user control over folder
  location?
- What is included when a researcher copies, exports, archives, or transfers a
  project?

### Local-first and future Scient cloud

- What remains fully usable offline?
- Which scopes synchronize across a user's devices?
- Which scopes synchronize with project collaborators?
- How are offline divergence, concurrent edits, deletion, and restoration
  represented?
- Is the cloud a mirror, collaboration authority, backup, or different things
  for different scopes?
- How do Scient cloud and user-selected folder synchronization coexist without
  silently overwriting work?
- What happens when cloud access, account access, or project membership is
  revoked?
- How can a researcher leave Scient while retaining understandable project
  material and memory exports?

### Privacy, security, and retention

- Which memory categories may contain unpublished research, health data,
  credentials, personal preferences, or institutional information?
- What must remain local-only or institution-controlled?
- Which scopes require encryption at rest or end to end?
- How are retention, legal hold, export, redaction, and permanent deletion
  expressed?
- How are embeddings, derived summaries, caches, and backups deleted when their
  source memory is forgotten?
- What diagnostics can be shared without disclosing memory content?
- Which regional-storage or institutional requirements may constrain cloud
  behavior?

## Scenarios The Discovery Should Test

1. A conversation produces a useful project decision. The researcher approves
   it as project memory, later corrects it, and can still inspect its source.
2. A user's private writing preference affects their own draft assistance but
   does not become a collaborator's preference or override a project style rule.
3. An agent run fails halfway through. Operational state supports retry and
   audit without turning every tool event into active memory.
4. A researcher deletes a conversation while preserving an independently
   accepted project decision and the minimum provenance required to understand
   it.
5. Two collaborators record conflicting interpretations. Scient shows the
   conflict rather than silently choosing one memory.
6. A project moves into Dropbox or iCloud Drive, remains usable offline, and
   later reconnects to Scient cloud without silent data loss.
7. An external agent receives only the project and task context authorized for
   one action, not unrelated user or organization memory.
8. A collaborator loses access. Their prior attributed contributions remain
   intelligible while private or revoked memory is no longer disclosed.
9. A researcher exports or leaves Scient and can retain understandable project
   files, relevant memory, decisions, and provenance without requiring the
   original provider transcript.

## Historical Reference: LitRev 2026

The historical [LitRev 2026](https://github.com/yaacovcorcos/LitRev_2026)
project contains a substantial implemented memory and retrieval system. Scient
will use it as a reference implementation from which to retrieve and
selectively adapt useful ideas, not as an architecture, dependency,
compatibility target, or system to copy wholesale.

Useful reference areas include capture-before-belief, scoped memory,
provenance and authority metadata, review-before-promotion, lifecycle controls,
bounded and auditable retrieval, and durable background extraction. Its limits
are also evidence: Scient should avoid treating ordinary event history as
memory, injecting every user preference globally, duplicating canonical
project records, or inheriting storage-specific assumptions. Every borrowed
pattern must be reevaluated against Scient's local-first, portable,
user-controlled, and future-cloud requirements.

## Persistence Questions Come Later

Only after the scope, authority, lifecycle, privacy, portability, and sync
requirements are understood should the project compare persistence models.
Candidates may include:

- existing application SQLite for operational app/session concerns;
- project-owned structured files;
- a local database;
- canonical files with a derived local index;
- app-local storage with explicit portable export;
- a cloud database or event service; or
- different mechanisms for different memory scopes.

If SQLite remains a candidate, later technical evaluation should cover crash
behavior, journal/WAL handling, active copying, cloud-folder behavior, backup
and restore, integrity checks, locking, migrations, packaging, performance,
readable export, and exit from the format. Those are evaluation questions, not
reasons to select SQLite now.

## Discovery Sequence

When Yaacov starts the memory project, proceed in this order:

1. **Vocabulary and scenarios:** refine the terms and select representative
   user scenarios without discussing tables or libraries.
2. **Scope model:** compare, combine, rename, or reject the candidate memory
   scopes and define ownership boundaries.
3. **Authority and lifecycle:** define promotion, precedence, trust,
   correction, forgetting, retention, and provenance behavior.
4. **Access and privacy:** define native/external-agent access, collaborator
   permissions, sensitive-data boundaries, and inspectable context assembly.
5. **Local/cloud behavior:** define offline continuity, portability, Git and
   cloud-folder behavior, device sync, collaboration, conflict, export, and
   exit requirements.
6. **Technology evaluation:** compare persistence and sync candidates using the
   accepted behavioral requirements and realistic failure cases.
7. **Architecture proposal:** write a focused architecture document with
   rejected alternatives, limitations, and migration/exit paths.
8. **Acceptance and implementation planning:** create ADRs where required and a
   bounded implementation plan only after explicit human review.

## Expected Outputs Of The Future Discovery

- accepted vocabulary or a clearly documented set of remaining terminology
  disputes;
- a memory-scope and ownership model;
- promotion, conflict, correction, forgetting, and retention rules;
- conversation/history/provenance boundaries;
- an agent access and context-assembly model;
- local, project-folder, device, collaborator, and cloud authority boundaries;
- portability, Git, cloud-folder, export, privacy, and recovery requirements;
- a technology-neutral test and evaluation plan;
- a proposed architecture document; and
- explicit decisions about what is deferred.

## Explicit Non-Decisions

This discovery does not currently decide:

- that every candidate scope should exist;
- that conversation memory differs from task or project memory;
- whether complete transcripts are project-owned, user-owned, or provider-owned;
- how memory is represented in code or storage;
- whether SQLite, structured files, Postgres, embeddings, a graph, or an event
  log should be used;
- whether all memory synchronizes through Scient cloud;
- a schema, package boundary, API, sync protocol, retention schedule, or
  encryption design;
- the complete relationship between memory and accepted scientific records;
- implementation sequencing; or
- any dependency on T3 Code.

## Related Documents

- [Product Requirements](../product/PRD.md), especially Project Memory And
  Continuity, Local-First Ownership, and Provenance/Recovery.
- [Product Planning](product-planning.md), especially the Project Memory feature
  row and cross-project memory question.
- [Agent Runtime](../architecture/agent-runtime.md) for future runtime context
  and agent boundaries.
- [Security And Permissions](../architecture/security-and-permissions.md) for
  trust, disclosure, and sensitive-data questions.
- [Project Format](../architecture/project-format.md) for future project-folder
  and portable-record boundaries.
- [Local-First Sync](../architecture/local-first-sync.md) for future offline,
  cloud-mirror, and conflict semantics.
- [First-Slice Source Trace](../../lab/notes/first-slice-source-trace-2026-07-18.md)
  for the source evidence that exposed—but did not resolve—the memory boundary.
- [T3 Code Targeted Review](../../lab/notes/t3-code-targeted-review-2026-07-18.md)
  for the independent T3 reliability intake and its explicit stop boundary.
