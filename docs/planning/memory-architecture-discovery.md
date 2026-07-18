# Memory System Ideas And Open Questions

Status: Draft
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Preserves the main ideas and questions to discuss before Scient defines its memory system or selects storage technology.
Doc type: Planning note

## How To Use This Note

This is a discussion note, not accepted architecture or implementation
authorization. The accepted [PRD](../product/PRD.md) owns current product
direction. Decisions reached later should move into the appropriate product,
architecture, or ADR document.

## Why This Matters

Scient needs continuity across conversations, agent work, devices,
collaborators, and research projects that may last for months or years. It
should reduce repeated explanation without remembering information beyond the
researcher's knowledge or control.

The central question is:

> What should Scient remember, for whom, under whose control, and how should
> it remain reliable across conversations, projects, devices, and future cloud
> synchronization?

This was initially framed too narrowly as a project-persistence or SQLite
decision. Storage should be chosen only after the product questions are clear.

## Current Directions

- Scient should preserve conversation history reliably, subject to future
  retention and deletion decisions.
- The research project is the central durable workspace, and project continuity
  should work across conversations, sessions, collaborators, and agent runs.
- Researchers should be able to inspect, correct, remove, export, or disable
  remembered information.
- Project files should remain ordinary researcher-owned files.
- Users should be free to keep projects in local folders, iCloud Drive,
  Dropbox, OneDrive, external drives, or other chosen locations.
- Scient should be Git-friendly but must not require Git for normal use or
  recovery.
- Scient should remain useful offline while accounting for future Scient cloud
  synchronization.
- Native Scient and external agents should receive only the memory and context
  they are allowed to access.

These directions do not select a schema, database, or sync protocol.

## Topics And Questions To Discuss

### Memory scopes and relationships

Possible scopes include conversation, project, user, task or agent-run, and
later shared team or organization memory. These are candidates, not accepted
layers.

- Which scopes does Scient actually need, and which are needed first?
- Is task or agent-run state memory, or separate operational state?
- How can information move from a conversation into project memory or become a
  user preference?
- Which movements require explicit approval?
- What happens when user memory conflicts with project memory, current files,
  evidence, or explicit instructions?

### Conversations, history, and memory

Complete conversation history, generated summaries, and trusted memory may be
different things. That distinction is enough for now; Scient does not need a
formal memory vocabulary or ontology yet.

- Should every conversation be retained, and for how long?
- What is needed to continue a conversation across app restarts and devices?
- What must a researcher approve before a conversation affects future work?
- If a conversation is deleted, what happens to an accepted project decision
  that came from it?

### Researcher control, trust, and privacy

- What should be remembered automatically, proposed for review, or retained
  only after explicit approval?
- Can researchers see why something was remembered and where it came from?
- Can they edit, correct, pin, distrust, archive, forget, or permanently delete
  it?
- Which source, authority, freshness, or conflict information is needed to
  evaluate important memories?
- Which memory is private to a user, shared with a project, or controlled by an
  organization?
- What additional controls are needed for sensitive research data?

### Agents and collaboration

- What project or user memory may the native Scient agent access?
- What memory may be disclosed to an external agent for one bounded task?
- Can researchers inspect the context sent to an agent?
- What can collaborators see, change, approve, or delete, and what happens when
  a collaborator loses access?

### Project files, local use, cloud, and recovery

- What information must travel with the project folder, and what belongs in
  application-local or future cloud storage?
- How should memory relate to files, decisions, and provenance without
  duplicating every project file?
- Can a project move between folders or computers without losing continuity?
- How should projects behave in iCloud Drive, Dropbox, OneDrive, external
  drives, and other user-selected locations?
- What must work fully offline, and how will future Scient cloud sync coexist
  with those locations?
- How are concurrent changes, deletion, restoration, device loss, and
  interrupted synchronization handled?
- How does Scient provide understandable backup and recovery without requiring
  Git?

### Persistence technology comes later

After the questions above are understood, Scient can compare storage options.

- Should conversations, project memory, user memory, and app state use the same
  storage system?
- Should any database live inside the project folder?
- What backup, export, migration, corruption-recovery, and cloud-sync
  requirements must storage meet?
- Should Scient use SQLite, structured files, a derived index, app-local
  storage, cloud storage, or a combination?

If SQLite remains a candidate, evaluate it later for reliability, locking,
backup and restore, cloud-folder behavior, portability, performance, readable
export, and the ability to move away from it.

## Deliberately Undecided

This note does not decide:

- the final memory scopes or their names;
- whether task state, conversation history, summaries, or provenance count as
  memory;
- what is remembered automatically;
- where memory or conversations are stored;
- the database, file format, or cloud-sync design;
- retention and deletion policies; or
- implementation sequencing.

## Relationship To Current Work

This future discussion is independent of the completed T3 reliability work and
does not block the current Scient product slice. The existing application
database may continue serving current app and session needs without settling
the future memory system.

## Related Documents

- [Product Requirements](../product/PRD.md), especially Project Memory And
  Continuity, Local-First Ownership, and Provenance And Recovery.
- [Product Planning](product-planning.md), especially its Project Memory feature
  and cross-project memory question.
- [Project Format](../architecture/project-format.md), [Agent
  Runtime](../architecture/agent-runtime.md), [Security And
  Permissions](../architecture/security-and-permissions.md), and [Local-First
  Sync](../architecture/local-first-sync.md) for future technical work.
- [First-Slice Source Trace](../../lab/notes/first-slice-source-trace-2026-07-18.md)
  for the work that exposed these questions without resolving them.
