# Local-First Sync

Status: Placeholder
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-07-17
Purpose: Defines what should be documented about Scient local-first storage and cloud sync once the design is validated.
Doc type: Future home

This page will document Scient's local-first and sync architecture when it
exists. The upstream decision context is currently captured in the draft
[Scient Project Persistence Decision Brief](scient-project-persistence-decision-brief.md),
which does not select a canonical project store or sync engine.

Document here:

- offline behavior
- local application-state and project-owned-state boundaries
- cloud mirror semantics
- sync engine selection
- conflict handling
- mutation and audit model
- cross-device behavior
- failure and recovery rules

Do not use as:

- accepted sync protocol
- implemented storage design
- vendor commitment
