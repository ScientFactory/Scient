# Product Roadmap

Status: Active
Owner: Yaacov
Created: 2026-07-16
Last updated: 2026-08-12
Purpose: Defines the current sequence of coherent Scient product outcomes without turning technology experiments into the product roadmap.
Doc type: Planning note

## Document Rules

This roadmap owns product sequencing and validation outcomes. The accepted
product contract remains in `../product/PRD.md`. Architecture decisions,
implementation steps, source evaluations, and executed evidence belong in their
own documents.

Update this roadmap when the active product slice changes, when evidence changes
its order, or when a slice is accepted, deferred, or rejected.

## Now: T3 Foundation Migration

The researcher outcome below remains the product destination. The accepted
foundation transition changes where its remaining implementation will continue,
not why Scient is building it.

[ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
accepts a fresh T3-derived successor application, and the active
[T3 foundation migration plan](t3-foundation-migration-plan.md) defines the
proof-gated execution sequence. The Synara-derived app remains the supported
current application, and the earlier Synara-specific first-slice plan is
preserved as superseded planning. The public-source T3-derived candidate now
has its safety envelope, managed local development app, product identity,
project initialization, local voice dictation, conversation forking, and the
first assisted provider-lifecycle work integrated or in focused completion.
The rebrand was accepted and merged through
[`scient-desktop-next` PR #5](https://github.com/ScientFactory/scient-desktop-next/pull/5),
but the candidate is not released or the current app.

The immediate work combines completion of the remaining selected M1 outcomes
with release-readiness proof. Yaacov has selected `v0.6.0` as the first intended
successor version and authorized release-system implementation, not a release.
The machinery must preserve exact green-source provenance, fail-closed signing
and publication, the legacy updater handoff, the website release-source
cutover, and rollback. The product gate
still has to decide and prove the remaining source/PDF,
mathematical/bidirectional, What's New, migration/data, claimed-platform, and
packaged-update requirements before publication and cutover. A workflow, build,
or selected version is not acceptance evidence by itself.

## After The Foundation: First Scient Scientific Project Slice

A researcher can open a small local scientific project, add source material
manually, delegate one bounded task to **Scient**, inspect the context and
proposed result, accept or reject it, and reopen the project without losing its
scientific meaning or history. The Scient agent is one owned first-party agent;
it is not a thin shell over separately authoritative engines. Its refreshed
native source foundation remains unselected until the implementation-time gate
in the
[Scient and external agents implementation plan](scient-and-external-agents-implementation-plan.md).

The slice combines:

- a durable local project identity;
- one manually captured source excerpt;
- one bounded scientific task and visible context receipt;
- one Scient action using the selected native foundation and Scient-owned
  capabilities;
- one proposed evidence-linked note;
- inspect, edit, accept, and reject behavior;
- a recovery point; and
- close-and-reopen continuity from Scient-owned state.

The slice is desktop-first. It does not include mobile, cloud sync,
collaboration, full PDF parsing, full citation management, a complete manuscript
editor, a complete scientific schema, a notebook system, or Goose integration.
It must not depend on an optional specialist worker before the native Scient
path is useful and recoverable.

The earlier Synara-specific implementation plan is preserved as
[`first-scient-vertical-slice-implementation-plan.md`](first-scient-vertical-slice-implementation-plan.md).
Its product outcome remains important, but its implementation sequence is
superseded by the active migration plan and later focused Scient-agent work.

### Controlled Validation Project

The first scientific project is **Many Labs 2's Knobe side-effect effect**. It
provides a preregistered protocol-to-analysis-to-claim-audit loop that can be
kept small enough for the first product slice. Activation is conditional on a
clean audit of the exact artifacts, licenses, dependencies, and expected output.
**ManyBabies 4** is the designated replacement if that audit fails.

The accepted validation strategy uses three complementary tracks: rich
scientific validation projects, narrow capability fixtures, and external
agent-evaluation benchmarks. The source evidence, boundaries, reserves, and
activation conditions are recorded in
[`../research/source-evaluations/scientific-project-fixture-selection.md`](../research/source-evaluations/scientific-project-fixture-selection.md).

The tracks are not interchangeable. A benchmark score does not prove the
researcher review, provenance, recovery, and reopening loop; a rich project does
not replace deterministic component checks or comparable agent measurements.

## Next

- Strengthen the evidence-to-writing path based on the first slice.
- Design the collaboration foundation alongside the scientific project model:
  individual identity and affiliation, ad hoc teams, nested institutions and
  research groups, project membership, external collaborators, roles,
  permissions, attribution, version history, review, and recovery. This design
  must not delay the current local slice, but the project model should not need
  to be replaced later to support shared work.
- After the first single-researcher scientific-state path is stable, validate a
  narrow shared-project slice: invite one collaborator, assign a project role,
  comment or suggest a change, review it, preserve attribution and history, and
  revoke access without damaging the project. Expand from asynchronous review
  to simultaneous editing only after this shared-state boundary is dependable.
- Build the Many Labs 2 Knobe capsule now; do not let further portfolio research
  or benchmark integration delay it.
- When data-to-figure work begins, activate the narrowly scoped BCG
  `dat.colditz1994` statistics fixture and one pinned Our World in Data
  exact-output fixture.
- Activate the clinical phenotyping machine-learning project as the immediate
  second rich project, followed by the selected Cancer Biology replication.
- Prove BIDS ingestion and one behavioral result with OpenNeuro Flanker before
  activating NARPS as the fourth and flagship neuroscience project.
- Once the Scient-agent execution path is runnable, connect a small
  AstaBench-wrapped DiscoveryBench validation subset. Keep it parallel to, and
  non-blocking for, the rich-project sequence.
- Add scientific capabilities through the Scient-owned layer as real needs
  appear.
- Make isolated changes to Scient's selected inherited foundation only for
  demonstrated runtime gaps.
- Evaluate bounded coding, research, and remote-execution workers only after
  the native path works. Internalize recurring essential capabilities into one
  Scient agent when that improves product quality and ownership.

## Later

- Broader cloud mirroring, offline multi-device synchronization, synchronized
  co-editing across scientific surfaces, institution administration, managed
  identity, and organization policy controls after the narrow shared-project
  slice proves project membership, permissions, attribution, and recovery.
- Mobile reading, review, capture, and approval.
- Deeper source discovery, import, parsing, and citation workflows.
- Multi-paper medical evidence synthesis, with the BCG vaccine meta-analysis
  expanded beyond the early supplied-dataset fixture only after Scient supports
  search, screening, appraisal, and extraction provenance.
- Expanded AstaBench evaluation, followed by CORE-Bench v1.1/OOD for
  reliability and cost analysis and BixBench as a computational-biology stretch
  suite.
- ERP CORE and ATLAS Higgs remain reserve capability candidates; ManyBabies 4
  remains the designated first-project fallback.
- Manuscript, analysis, figure, publishing, and open-science expansion. The
  proposed [Scientific Document Platform roadmap](scientific-document-platform-roadmap.md)
  owns the integrated document/viewing/mathematics/typesetting/Office/manuscript
  direction; its stages are not inserted into the active sequence until the
  relevant product gate advances.

These later items remain sequencing direction, not implementation commitments.
