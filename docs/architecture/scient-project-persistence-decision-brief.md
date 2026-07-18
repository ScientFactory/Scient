# Scient Project Persistence Decision Brief

Status: Draft
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Frames the open decision about where Scient-owned scientific records should live and what evidence is required before selecting or implementing a persistence design.
Doc type: Architecture direction

## Document Rules

- This is a review brief, not accepted architecture, an implementation plan, or
  evidence that a project-local database exists.
- The accepted PRD owns the product outcomes. This brief translates those
  outcomes into persistence questions and proof obligations.
- SQLite is one serious candidate. It is not selected by this document.
- The inherited application SQLite database is current implementation, but it
  is not automatically the canonical Scient project store.
- No production persistence code, schema, sync layer, or migration should be
  created from this brief before the decision process reaches explicit human
  acceptance.

## Executive Summary

Scient needs a durable home for scientific records that must survive beyond a
chat, agent session, provider, or one installation of the desktop app. The
current product foundation can identify and reopen a Scient project folder, and
the inherited host can persist application projects, threads, messages, and
provider sessions. It does not yet own a canonical source-to-task-to-proposal-
to-decision history.

Project-local SQLite is attractive because it can provide atomic transactions,
constraints, migrations, indexed history, and non-Git recovery in one embedded
file. It also creates serious questions about cloud-synchronized folders,
active-copy safety, binary Git behavior, multi-device collaboration, readable
exports, backup, schema evolution, corruption response, and the relationship
between project files, database rows, CRDT history, object storage, and a future
cloud mirror.

The immediate decision is therefore not "use SQLite." The immediate work is to
agree on requirements, compare credible storage models, run a disposable
persistence evaluation against real failure modes, and only then produce an
architecture decision for Yaacov to accept or reject.

## Why This Decision Exists

The first scientific workflow eventually needs to preserve relationships such
as:

```text
exact source revision
  -> bounded task revision
  -> immutable context receipt
  -> run and proposal revision
  -> researcher decision
  -> accepted scientific record
  -> recovery history
```

If those relationships live only in application state, deleting or moving the
application may detach a project from its accepted scientific history. If they
live only in an agent transcript, deleting or replacing the provider may do the
same. If they rely only on Git, non-Git researchers cannot receive the promised
recovery behavior.

The storage choice matters before that workflow is implemented because it will
shape record identity, atomicity, revision semantics, recovery, UI queries,
agent tool contracts, export, backup, sync, migration, and support. Choosing too
early risks freezing an unproven topology; choosing after production records
exist creates a costly and risky migration.

## Relationship To The T3 Code Work

The bounded T3 Code review is a separate lane. It produced small reliability
improvements for image parsing, literal Git paths, AppImage child environments,
snapshot/live-event characterization, and browser native-pipe isolation. Those
changes do not require or select a Scient project database.

T3 supplied implementation evidence and comparison points for desktop runtime
boundaries. It did not supply Scient's scientific record model. This persistence
question comes from Scient's own researcher-ownership, provenance, review, and
non-Git recovery requirements. T3 completion must not be blocked by this later
decision.

## Explicit User Direction At This Checkpoint

Yaacov provided the following direction on 2026-07-18:

Approved requirements:

- recovery must work without Git;
- project filesystem scope must be enforced at a trusted Scient boundary rather
  than delegated to prompt wording or an unrestricted shell; and
- native Scient runtime state must remain completely independent from the
  user's external OpenCode installation.

Deferred:

- deterministic fake-executor implementation and its controlled product test
  will be discussed later.

Open for later review:

- the permanent code/package seam for ongoing scientific project operations;
- the canonical storage representation and location;
- whether project-local SQLite is suitable;
- the exact portability, backup, sync, and collaboration model; and
- the implementation sequence that depends on those choices.

## Current Implemented State

### Portable project initialization

The permanent `@scientfactory/project-init` package can inspect, plan,
initialize, recover, and roll back project-folder setup. It creates or preserves
`PROJECT.md`, `AGENTS.md`, and `.scient/project.json`. That JSON file provides a
path-independent project identity. The package intentionally has no SQLite,
agent, React, Electron, or inherited Synara dependency.

It does not currently store scientific sources, tasks, context receipts,
proposals, decisions, accepted revisions, or recovery history.

### Host application state

The Synara-derived desktop server places its application database at
`~/.scient/userdata/state.sqlite` in production. It stores and projects host
concerns such as project registration, workspace paths, threads, messages,
turns, approvals, provider sessions, and application activity.

That database is valuable current implementation. It is tied to the local app
installation and must not be relabeled as canonical scientific project truth
without a separate decision.

### Missing project-owned record boundary

No implemented store currently proves that accepted scientific records:

- survive deletion of host project, chat, provider, or agent state;
- move or restore with the research project;
- remain coherent after interruption during acceptance;
- recover without Git;
- export completely into a documented researcher-readable representation; or
- synchronize safely across devices or collaborators.

## Required Outcomes Before Selecting A Technology

These are candidate requirements for review. They must be accepted, revised, or
rejected independently of any database library.

### Ownership and authority

1. Scient-owned scientific records remain authoritative independently of chat,
   provider, executor, or host UI projections.
2. Deleting or rebuilding app-level state cannot silently delete accepted
   project truth.
3. Provider transcripts and tool logs may be evidence, but are not the only
   reconstruction path for accepted records.
4. Secrets, provider credentials, authentication tokens, and unrelated user
   settings never enter the project-owned scientific store.

### Integrity and recovery

5. Accept, reject, revise, and recover operations have explicit atomicity or an
   equivalently proven repair protocol.
6. A crash or forced termination at every durable-write boundary cannot produce
   a falsely accepted or partially advanced scientific record.
7. Recovery appends an auditable action; it does not erase prior decisions.
8. Corruption, incompatible schema, or failed migration becomes an explicit
   safe state and never triggers silent destructive repair.
9. Backup and restore reproduce IDs, relationships, accepted pointers, and
   decision history exactly.

### Portability and researcher control

10. Moving or renaming a complete local project preserves its identity and
    record history.
11. The supported transfer unit is explicitly defined: folder copy, backup
    bundle, export/import, Git clone, cloud mirror, or another mechanism.
12. Researchers can export all canonical records and relationships in a
    documented, readable, non-proprietary representation.
13. Scient can explain which files or stores must be copied and whether the app
    must be closed first.
14. Unsupported network or cloud-folder behavior is detected or documented
    honestly rather than implied safe.

### Performance and scale

15. Project open, common reads, proposal review, acceptance, history browsing,
    backup, migration, and integrity checks meet explicit budgets on realistic
    projects rather than only toy fixtures.
16. Performance remains understandable as sources, revisions, tasks, runs,
    proposals, decisions, figures, analyses, and manuscript links grow.
17. Startup does not require scanning or reparsing an unbounded project history
    when an index or checkpoint can be validated safely.
18. Large assets remain ordinary files or object-storage content; structured
    metadata does not accidentally duplicate entire PDFs, datasets, or outputs.

### Concurrency, sync, and collaboration

19. A second local Scient process cannot unknowingly become a conflicting
    writer.
20. The design states whether concurrent readers are supported and how stale
    views are refreshed.
21. The behavior of active databases or ledgers inside iCloud Drive, Dropbox,
    OneDrive, network filesystems, backup tools, and file-level sync is tested or
    explicitly unsupported.
22. Multi-device and multi-user writes are not claimed solved by a single local
    file format.
23. A future cloud mirror has a defined authority and conflict relationship to
    local project truth before bidirectional sync is selected.
24. Structured state, document/CRDT history, large-file revisions, and Git
    artifacts can eventually participate in one inspectable project timeline
    and restore story.

### Maintainability and support

25. Schema and format versions are explicit and migrations are deterministic,
    tested, resumable or safely restartable, and backed up before destructive
    steps.
26. The chosen library and native dependencies package reliably on supported
    macOS, Windows, and Linux targets.
27. Integrity inspection, backup, export, recovery, and support diagnostics are
    available without exposing sensitive content unnecessarily.
28. The design has a credible path for future schema evolution without freezing
    the complete scientific object model in the first slice.

## Candidate Storage Models

This list is a shortlist for investigation, not a verdict.

### Candidate A: project-local SQLite as canonical structured state

Example shape:

```text
project/
  .scient/
    project.json
    project.sqlite
```

Potential strengths:

- mature atomic transactions and crash recovery;
- foreign keys, uniqueness, checks, and indexed queries;
- explicit migrations and integrity checks;
- one embedded structured store with no server process; and
- strong local query performance at likely first-slice scale.

Questions and risks:

- active WAL and shared-memory side files complicate naive copying or file-level
  cloud sync;
- a binary database is not human-readable or meaningfully Git-mergeable;
- branch, clone, backup, and folder-transfer semantics need an explicit policy;
- multi-device writes and cloud collaboration require more than SQLite itself;
- corruption, migration, locking, checkpoint, and backup UX become product
  responsibilities; and
- a per-project SQLite-to-single-cloud-database topology is already identified
  as a deep unproven sync assumption.

Primary SQLite references for the review:

- SQLite documents atomic commit and rollback behavior in
  [Atomic Commit In SQLite](https://www.sqlite.org/atomiccommit.html).
- The [Write-Ahead Logging](https://www.sqlite.org/wal.html) documentation
  explains the single-writer model, checkpointing, additional `-wal` and
  `-shm` files, and the limitation that all WAL processes must be on the same
  host.
- [WAL-mode File Format](https://www.sqlite.org/walformat.html) describes the
  persistent database, WAL, and shared-memory files that copy, backup, and
  recovery procedures must account for.
- [SQLite Backup API](https://www.sqlite.org/backup.html) describes consistent
  live snapshots and the separate `VACUUM INTO` snapshot option.
- [`PRAGMA integrity_check`](https://www.sqlite.org/pragma.html#pragma_integrity_check)
  documents one integrity diagnostic, while also making clear that foreign-key
  errors require a separate check.

These references support SQLite-specific test design. They do not establish
that SQLite is the right product architecture or that a naive folder copy or
file-level synchronization protocol is safe.

### Candidate B: append-only structured project files

Example shapes include one immutable JSON record per event/revision, a segmented
JSONL log, or content-addressed records plus explicit pointers.

Potential strengths:

- inspectable with ordinary tools;
- potentially easier to copy, archive, diff, and include in Git; and
- canonical records naturally live in the project folder.

Questions and risks:

- cross-record atomicity, pointer updates, locking, compaction, and crash repair
  become custom protocols;
- high record counts may require a derived index;
- partial file sync, rename semantics, duplicate events, and conflicting writers
  still need explicit handling;
- migrations may become many-file rewrites or layered readers; and
- "human-readable" files can still be too numerous or relationally complex for
  meaningful manual inspection.

### Candidate C: append-only canonical files plus a derived SQLite index

The project files would own durable events or records; SQLite would be a
rebuildable local index or materialized view.

Potential strengths:

- combines inspectable canonical records with efficient local queries;
- deleting the index would not delete project truth; and
- Git/copy/export behavior may be clearer than a canonical binary database.

Questions and risks:

- introduces two representations whose derivation must be deterministic;
- replay, checkpoints, invalidation, and index rebuild time require proof;
- atomic acceptance spanning canonical files and current pointers is still a
  custom protocol; and
- sync conflicts in canonical event files remain unresolved.

### Candidate D: app-local canonical database with explicit portable bundles

Canonical structured state would remain under `~/.scient`; project export or
backup would create a portable, self-contained bundle.

Potential strengths:

- follows a conventional application-state model;
- avoids active database files inside ordinary project folders; and
- can make locking, migration, and local performance operationally simpler.

Questions and risks:

- the project folder alone is incomplete;
- move, reinstall, and cross-device behavior depend on users understanding
  export/import;
- deletion of app state becomes a higher-consequence event;
- background backups must be reliable and discoverable; and
- it may conflict with the product promise that the researcher owns the local
  project rather than an opaque app library.

### Candidate E: another embedded store or bundle format

Other embedded databases, archive formats, or content-addressed designs may be
proposed by reviewers. A new candidate should be evaluated against the same
requirements rather than added because of library familiarity.

## Questions For SQLite Reviewers

A reviewer assessing project-local SQLite should answer at least these
questions and cite implementation evidence or primary documentation where
possible.

### Reliability

1. Which journal mode is appropriate for a portable desktop project, and why?
2. What exactly happens if the process is terminated during each acceptance,
   migration, backup, or checkpoint phase?
3. How will Scient distinguish recoverable interruption from corruption?
4. Which SQLite integrity checks run automatically, manually, and before backup
   or migration?
5. What is the repair policy, and which failures must remain read-only pending
   user action?
6. How are disk-full, read-only filesystem, permission, antivirus, and sudden
   device-removal failures surfaced?

### Copy, backup, and restore

7. Can the whole project be copied safely while Scient is open? If not, how is
   that prevented or explained?
8. Will Scient use the SQLite backup API, `VACUUM INTO`, a closed-file copy, or
   another snapshot protocol?
9. How are WAL and shared-memory files handled during close, backup, restore,
   crash, and manual folder copying?
10. How is a backup verified before it is declared usable?
11. Can restore be tested into a different path and machine without mutating the
    original project?
12. What retention and user-visible recovery points are required?

### Filesystems and synchronization

13. Which local, removable, network, and cloud-synchronized filesystems are
    supported on macOS, Windows, and Linux?
14. What happens when iCloud, Dropbox, or OneDrive copies an active SQLite file
    and its transient companions independently?
15. Can Scient detect known-unsafe locations or simultaneous file-level sync?
16. Is file-level sync prohibited in favor of an application-level sync or
    export protocol?
17. What is the behavior after an offline divergent copy returns?

### Git and developer workflows

18. Is the project database committed, ignored, exported, or represented by a
    separate portable form?
19. What happens across branch switches, worktrees, rebases, and clones?
20. If the database is not Git-tracked, how does a Git clone receive canonical
    scientific history?
21. If it is tracked, how are binary merge conflicts prevented or resolved?

### Concurrency and collaboration

22. What locking proves that only one writer owns a project?
23. Can multiple readers or processes safely inspect it?
24. How are stale locks distinguished from a live owner after a crash?
25. How would local IDs, mutations, attribution, and conflicts map to a future
    cloud/Postgres mirror?
26. Does one database per project fit the likely cloud security and row-level
    access-control topology?
27. Which collaboration promises are deliberately deferred?

### Performance and capacity

28. What are realistic small, medium, and stress project sizes?
29. What budgets apply to open, common query, acceptance, history, migration,
    backup, export, and integrity check?
30. How do indexes, WAL growth, checkpoints, vacuuming, and long-running readers
    behave under those sizes?
31. What disk amplification results from revisions, backups, exports, and
    content hashes?
32. Can the app remain responsive while maintenance operations run?

### Schema and maintainability

33. Which layer owns SQL, migrations, transactions, IDs, and invariants?
34. Should Scient reuse Effect SQL, introduce a query builder, or keep a narrow
    owned repository layer?
35. How is the complete schema versioned and inspected for support?
36. How are forward-incompatible projects handled by older app versions?
37. Can migrations be retried safely, and how is rollback handled when they
    cannot?
38. How do we avoid freezing the complete future project graph in the first
    schema?

### Transparency and researcher experience

39. What readable export contains every canonical record, ID, relationship,
    decision, and accepted pointer?
40. Can an export be validated and re-imported into an empty installation?
41. How does the UI explain backup health, migration, read-only mode,
    corruption, conflicting writers, and recovery without database jargon?
42. What diagnostics can a researcher safely share with support?
43. Can a researcher leave Scient without losing access to their record history?

## Questions For Every Candidate

The decision must also answer technology-neutral questions:

- What is the canonical unit: project, record, event, file, bundle, or database?
- Which identifiers survive move, copy, export, restore, and cloud mirror?
- Which operation constitutes acceptance, and what exact failure states exist?
- Which data is immutable, append-only, mutable, derived, cached, or external?
- How are ordinary files and structured records linked without duplicating or
  silently detaching them?
- How is one complete project timeline reconstructed across structured records,
  documents, files, Git artifacts, agent evidence, and later cloud state?
- What does "portable" mean for folder copy, Git clone, backup, export, and a
  second device?
- What is the smallest implementation that proves the first source-to-note
  workflow without pretending to solve full collaboration?
- What evidence would cause us to reject the candidate?
- What is the migration path if the candidate later proves unsuitable?

## Proposed Evaluation Protocol

The evaluation must be disposable and must not become production code by
accident. It does not need a real model, native Scient agent, or the user's live
research project.

### Shared minimal record model

Each candidate implements only enough to exercise:

1. create and reopen a project identity;
2. append a source revision and exact excerpt digest;
3. append a task and immutable context receipt;
4. append a proposal revision;
5. accept or reject it while preserving the previous accepted state;
6. append a recovery action;
7. export every record and relationship;
8. close, move, reopen, back up, restore, and verify the project; and
9. detect a conflicting writer and an incompatible schema.

The executor output is fixed test input. This is a persistence evaluation, not
the deferred fake-executor product implementation.

### Failure matrix

Inject interruption or failure:

- before any durable write;
- after each record write or pointer update;
- before and after commit or equivalent publish step;
- during migration;
- during backup and restore;
- with disk-full and read-only paths;
- with a killed process and stale lock;
- with missing, truncated, duplicated, or modified records;
- while a second process attempts to write; and
- during a representative copy or synchronization operation.

After every case, verify whether the project is unchanged, fully advanced, or
explicitly read-only/recoverable. No case may produce silently inconsistent
accepted truth.

### Scale and performance matrix

Define realistic small, medium, and stress fixtures before measurement. Record:

- cold and warm open time;
- common source/task/proposal/history query latency;
- acceptance and recovery latency;
- export, backup, integrity-check, and migration duration;
- memory and disk use;
- database, log, index, and backup growth; and
- UI responsiveness during maintenance work.

Do not accept a candidate using only tiny synthetic records. Do not set final
budgets after seeing results; proposed budgets must be reviewed before the
comparison run.

### Portability matrix

Verify at least:

- folder rename and move on one filesystem;
- move to a different local volume;
- backup and restore into a different path;
- reopen on another supported operating system where practical;
- Git repository and non-Git folder behavior;
- active and closed copy behavior;
- representative cloud-synchronized folder behavior; and
- explicit rejection or warning for unsupported locations.

## Decision Gates

### Gate 1: requirements review

Yaacov reviews the required outcomes, scope, and deliberately deferred
collaboration claims. No storage technology is selected.

### Gate 2: candidate and test-plan review

Reviewers confirm that the candidate list and failure, scale, portability,
backup, export, migration, and concurrency tests are sufficient and fair.

### Gate 3: evidence run

Run the disposable evaluation and preserve reproducible commands, fixtures,
results, limitations, and failures. Narrow unit tests do not substitute for real
persistence, copy, process, and filesystem behavior.

### Gate 4: proposed architecture decision

Write an ADR that states the selected model, rejected alternatives, evidence,
constraints, migration/exit path, unsupported behavior, and remaining risks.
Its status remains Proposed until Yaacov accepts it.

### Gate 5: implementation authorization

Only after acceptance should production schema, package APIs, migration paths,
project UI, or agent tools depend on the selected persistence model.

## Reviewer Assignment

A reviewer can use this document without reading the complete repository first.
They should receive:

- this brief;
- the accepted [PRD](../product/PRD.md), especially local ownership,
  inspectable history, review, and recovery;
- the [technology stack](technology-stack.md), while honoring its proposed
  status;
- the existing [coherence report](../research/spike-reports/coherence-report-2026-06-28.md),
  especially findings A1 and A5;
- the [testing philosophy](../quality/testing-philosophy.md);
- the [first-slice source trace](../../lab/notes/first-slice-source-trace-2026-07-18.md);
  and
- the placeholder [project format](project-format.md) and
  [local-first sync](local-first-sync.md) homes.

Ask the reviewer to return:

1. corrected or missing requirements;
2. a critique of every candidate, not only SQLite;
3. any additional candidate worth testing;
4. the minimum fair evaluation implementation;
5. required failure, scale, filesystem, backup, migration, and export tests;
6. primary-source evidence for external technology claims;
7. explicit reasons to reject project-local SQLite;
8. explicit reasons to reject file-based or app-local alternatives;
9. risks that belong in product scope rather than implementation; and
10. a recommendation about what Yaacov must decide before any code begins.

## Non-Goals

This brief does not:

- select SQLite or another store;
- define production tables or the complete scientific object graph;
- authorize `packages/scient-project` or another permanent package seam;
- implement the deferred fake executor;
- implement sync, collaboration, cloud Postgres, CRDTs, object storage, or a web
  client;
- claim active cloud-folder copying is safe;
- make T3 Code a product architecture dependency; or
- block completion of the bounded T3 reliability work.

## Current Verdict

Document and evaluate; do not implement yet.

The product need for durable, app-independent, non-Git-recoverable scientific
records is credible. Project-local SQLite remains a strong candidate, but its
reliability, portability, usability, Git, sync, collaboration, backup, and
migration consequences require explicit evidence and human review before it can
become Scient architecture.
