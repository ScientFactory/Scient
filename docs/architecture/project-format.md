# Project Format

Status: Proposed
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-08-28
Purpose: Maps the implemented minimum Scient project identity and source-store shape while keeping broader project-format choices explicit and unaccepted.
Doc type: Architecture direction

## Document Rules

This page is a proposed human-readable map, not an accepted schema. Current
implementation truth remains in the owning desktop packages and documentation;
hard-to-reverse direction requires an explicitly accepted ADR. Update this map
when the implemented project namespace, identity fields, or source-store shape
changes, without using future sections as claims of current behavior.

Unprocessed questions about project memory, conversations, files, portability,
Git, cloud folders, and broader storage boundaries remain in the draft
[Memory Architecture Discovery](../planning/memory-architecture-discovery.md).

The accepted minimum built-in skill activation boundary, including
`.scient/skills.lock.json`, currently lives in
[ADR-0003](decisions/ADR-0003-built-in-skills-portfolio-and-project-activation.md).
That narrow decision does not establish the rest of the project format. The
implemented project-state and source-store boundary is described by proposed
[ADR-0006](decisions/ADR-0006-project-owned-scient-state-and-source-store.md).

## Implemented Minimum Layout

```text
<project-root>/
├── PROJECT.md
├── AGENTS.md
└── .scient/
    ├── project.json
    ├── project-init.json
    ├── skills.lock.json          # only when the accepted skills feature activates it
    └── sources/
        ├── records/
        ├── files/sha256/
        ├── history/
        ├── operations/
        ├── receipts/
        └── staging/
```

`PROJECT.md` and `AGENTS.md` are project-facing guidance. Existing copies are
preserved during initialization. `.scient/project-init.json` is bounded setup
recovery state, not scientific truth.

The current implementation uses `.scient/` as its one project-owned state
directory and Sources as its first scientific namespace. This implementation
fact does not by itself accept every future namespace or portability rule.

## Project Identity

`.scient/project.json` version one currently contains:

```json
{
  "projectId": "stable UUID",
  "formatVersion": 1,
  "createdAt": "ISO-8601 timestamp"
}
```

The initializer owns this file. Other features validate and reference the
project UUID rather than replacing or extending the identity independently.

## Source State

The current Sources implementation uses:

- one bounded, versioned JSON file per canonical source record;
- content-addressed immutable PDFs under `files/sha256/`;
- immutable prior metadata revisions under `history/`;
- field-level provenance and derived metadata diagnostics;
- durable import operations and completion or cancellation receipts;
- temporary bytes only in `staging/`;
- Zotero identity as external provenance rather than project authority; and
- rebuildable views rather than a second canonical manifest.

Current implementation detail lives in
`scient-desktop/docs/internals/scient-sources.md` and
`packages/scient-sources`. Source records and PDFs belong to the active project
workspace, not the host application's session database.

## Ordinary Files And Generated Artifacts

The proposed [File, Resource, And Presentation
Foundation](../planning/file-resource-and-presentation-foundation.md) adds a
stable `FileReference` above mutable ordinary-file paths. That reference must
remain scoped to the owning project/environment and must not become another
project identity, a replacement for source-record identity, or a generic
artifact union. Its exact persisted shape and relationship to `.scient/` remain
unaccepted.

Immutable source attachments, mutable ordinary files, generated document
revisions, analysis artifacts, Studio compositions, and future structured
manuscripts have different authority and retention semantics. They may share
project identity, revision vocabulary, and references, but the project format
must not collapse them into one record type merely because all can be opened.

## Still Undecided

The implemented minimum does not settle:

- annotation, source-region, citation, evidence, claim, or manuscript schemas;
- cloud mirroring, mobile projections, collaboration, and conflict resolution;
- backup, restore, archive, and legacy-project import policy;
- Git defaults for large project PDFs;
- derived search-index technology and rebuild protocol;
- where stable ordinary-file references and observed relocation aliases live;
  or
- whether future analysis artifacts are canonical files, records, or both.

These questions require their own product evidence and accepted decisions.
