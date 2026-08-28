# ADR-0006: Project-Owned Scient State And Source Store

Status: Proposed
Owner: Yaacov
Created: 2026-08-12
Last updated: 2026-08-28
Purpose: Proposes `.scient/` as the durable project-owned Scient state boundary and documents the implemented source-store and Zotero-adapter contract inside it.
Doc type: Architecture decision

## Context

Scient needs a durable source library that can later support evidence,
citations, manuscripts, analysis, collaboration, and agents without allowing a
desktop host, chat database, or external reference manager to define scientific
truth. The first implementation imports selected references and local PDFs from
Zotero, shows incomplete metadata honestly, preserves duplicate decisions, and
opens imported PDFs through the current Scient reader.

T3's databases own application, environment, provider, session, and user-interface
state. They are not the authority for portable scientific records. Zotero is an
important continuity adapter, but its item schema and local database must not
become Scient's project model. A project-local SQLite database was also rejected
for this first boundary because ordinary file synchronization, Git, inspection,
and partial recovery are safer with small explicit records and immutable blobs.

The existing Scient project initializer already owns `.scient/project.json`.
This decision extends that accepted project boundary; it does not create a
second identity file or redefine project initialization.

## Proposed Decision

The Sources store described below is implemented in the T3-derived desktop,
but its use in code does not by itself make this broader architecture decision
accepted. Current implementation truth lives in
`scient-desktop/docs/internals/scient-sources.md` and
`packages/scient-sources`; explicit human acceptance is still required before
this ADR becomes architecture authority for future Scient namespaces.

### One project state boundary

`.scient/` is the project-owned state directory for durable Scient records.
`sources/` is its first implemented scientific area. Future evidence,
manuscript, and analysis owners may receive sibling namespaces only through
their own accepted contracts; they must not create competing top-level Scient
state directories.

The initial layout is:

```text
.scient/
├── project.json
└── sources/
    ├── records/
    ├── files/sha256/
    ├── history/
    ├── operations/
    ├── receipts/
    └── staging/
```

Every durable JSON shape carries its own format version. One source record lives
in one bounded JSON file. PDFs are immutable content-addressed files named by
SHA-256. Temporary bytes stay in `staging/` until validation and promotion.
Operation records make bounded imports resumable; completion and cancellation
receipts preserve what was imported, skipped, failed, or left unprocessed.
Immutable prior metadata revisions preserve edits and project-owned notes
without introducing a second record authority.

There is deliberately no canonical `sources/manifest.json` in the first format.
The record directory is authoritative, and indexes or manifests may be derived
later when measured scale requires them. This avoids two files claiming to be
the source of truth during the first slice.

### Existing project identity remains authoritative

`.scient/project.json` remains owned by the project-initialization contract. Its
version-one fields are a stable project UUID, `formatVersion: 1`, and an ISO
creation time. The source store validates that identity before reading or
writing and records the project UUID in every durable source and import record.

An application version is not stored as project identity. File-format versions
and explicit migrations, rather than whichever desktop build last touched a
project, determine compatibility.

### Ordinary files and artifacts remain separate authorities

The proposed file/resource foundation may persist stable references and
observed aliases for mutable ordinary files, but that does not change the
identity of a source record or its immutable content-addressed attachment.
Generated document revisions, analysis artifacts, and future Studio or
manuscript records likewise retain their own lifecycle and retention rules.
Any future `.scient/` namespace for those records requires its own accepted
contract; this Sources decision does not pre-authorize a universal file or
artifact store.

### Scient owns source meaning

A Scient source record has a first-class Scient source type, normalized
bibliographic fields and identifiers, external references, attachments, and
field-level provenance. The original Zotero item type remains provenance; it
does not control the Scient schema.

Missing title, creator, year, or persistent identifiers remain missing.
Metadata diagnostics are derived per field and shown to the researcher. A
single persisted `complete` or `partial` label is rejected because it would
become stale as the record and future requirements evolve.

Duplicate assessment is ordered and explicit:

1. same external origin;
2. same normalized persistent identifier;
3. same PDF content hash;
4. possible title, lead-creator, and year match; or
5. new source.

Possible metadata matches are never silently merged. Import refetches the
selected Zotero item immediately before writing and rechecks duplicates after
the PDF hash is known.

### Zotero is a local, read-only compatibility adapter

The first connector uses Zotero's documented version-three local HTTP API at
the fixed loopback endpoint. It performs only `GET` requests, stores no Zotero
credentials, never opens or copies Zotero's SQLite database, never writes back,
and never treats Zotero availability as required to reopen Scient-owned source
records.

The adapter distinguishes reachable-but-disabled, incompatible, malformed,
and unreachable states. An unreachable loopback service does not prove whether
Zotero is absent or merely closed, so Scient must not claim either without
separate operating-system evidence.

Official protocol references inspected for this decision:

- [Zotero Local API](https://www.zotero.org/support/dev/web_api/v3/local_api)
- [Zotero Web API v3 basics](https://www.zotero.org/support/dev/web_api/v3/basics)

### Narrow T3 host integration

The domain package must not depend on React, Electron, or T3 application
internals. The T3-derived app hosts Sources through one generic
`scient` right-panel surface with a `sources` module. All source behavior,
state, and UI remain in Scient-owned modules; inherited panel code knows only
how to open and label the bounded surface.

Imported PDFs use a narrow adapter into the current Scient PDF reader and its
authorized workspace-file route. The source feature does not fork the reader
or add another resource-serving mechanism.

## Alternatives Considered

### Store scientific records in T3 SQLite

Rejected. It would couple portable scientific truth to a host application's
session and migration lifecycle and make later native-agent, cloud, mobile, and
export work depend on T3 internals.

### Add a project-local SQLite database now

Rejected for the first slice. It gives stronger query performance but worse
file-sync conflict behavior, inspectability, partial recovery, and Git review.
It may be reconsidered as a derived index, not as an unexamined replacement for
the canonical records.

### Use Zotero as the canonical source library

Rejected. It would make projects incomplete without Zotero, inherit Zotero's
schema and identity assumptions, and prevent Scient from becoming a stronger
source, evidence, and citation system.

### Copy Zotero's local database

Rejected. Reading a live private database bypasses the supported protocol and
creates locking, schema, privacy, and corruption risks.

### Build a separate Studio route first

Rejected for this slice. Sources must be useful in the existing project right
panel and its maximize behavior before a separate full-screen composition is
justified.

## Consequences

- Scient projects gain an inspectable, portable source foundation that remains
  usable when Zotero is unavailable.
- Source imports cost additional local storage because PDFs are copied into the
  project. Content addressing removes duplicate bytes within one project.
- File synchronization and Git can reason about individual records, but future
  collaborative editing will need explicit record revisions, conflict rules,
  and cloud reconciliation.
- Large libraries may eventually require derived indexes. Those indexes must
  be rebuildable from canonical records.
- The implemented slice imports selected references, collections, whole local
  Zotero libraries, and direct PDFs. It does not provide continuous sync,
  writeback, annotations, evidence extraction, or a Zotero replacement UI.
- Source state follows the active project workspace or worktree. Branch and
  worktree behavior must remain explicit until the broader project-sync model
  is accepted.

## Revisit Triggers

Revisit this decision when measured project size makes directory scans
unacceptable; selected-user cloud sync or collaboration needs a canonical
conflict protocol; mobile requires a different local projection; source-record
revision or deletion is introduced; or another scientific namespace exposes a
contradiction in the `.scient/` authority boundary.
