# Product Roadmap

Status: Active
Owner: Yaacov
Created: 2026-07-16
Last updated: 2026-08-02
Purpose: Defines the current sequence of coherent Scient product outcomes without turning technology experiments into the product roadmap.
Doc type: Planning note

## Document Rules

This roadmap owns product sequencing and validation outcomes. The accepted
product contract remains in `../product/PRD.md`. Architecture decisions,
implementation steps, source evaluations, and executed evidence belong in their
own documents.

Update this roadmap when the active product slice changes, when evidence changes
its order, or when a slice is accepted, deferred, or rejected.

## Proposed Enabling Track: T3 Foundation Migration

The researcher outcome below remains the product destination. A proposed
foundation transition now changes where its remaining implementation would
continue, not why Scient is building it.

[ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
proposes a fresh T3-derived successor application, and the
[T3 foundation migration proposition](t3-foundation-migration-proposition.md)
defines the evidence and promotion sequence. While that ADR is `Proposed`, the
Synara-derived app remains the supported current application and the existing
first-slice plan remains the truthful current implementation record. No
candidate repository exists.

The next proposed work is the read-only Phase Zero evidence pass. If the
foundation ADR is accepted, the migration plan will become the active enabling
track and will re-establish the smallest project and source behavior before the
new Scient-agent and researcher-review work resumes. This preserves the
scientific outcome without building new scientific architecture in the
continuity host.

## Now: First Scient Scientific Project Slice

A researcher can open a small local scientific project, add source material
manually, delegate one bounded task to **Scient**, inspect the context and
proposed result, accept or reject it, and reopen the project without losing its
scientific meaning or history. The Scient agent is the owned OpenCode-derived
first-party agent; it is not a separate shell over an OpenCode engine.

The slice combines:

- a durable local project identity;
- one manually captured source excerpt;
- one bounded scientific task and visible context receipt;
- one Scient action using its inherited OpenCode-derived capabilities;
- one proposed evidence-linked note;
- inspect, edit, accept, and reject behavior;
- a recovery point; and
- close-and-reopen continuity from Scient-owned state.

The slice is desktop-first. It does not include mobile, cloud sync,
collaboration, full PDF parsing, full citation management, a complete manuscript
editor, a complete scientific schema, a notebook system, or Goose integration.

The implementation plan is
[`first-scient-vertical-slice-implementation-plan.md`](first-scient-vertical-slice-implementation-plan.md).

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
- Make isolated changes to Scient's inherited OpenCode core only for
  demonstrated runtime gaps.
- Evaluate Goose as a later source of capabilities and architecture lessons for
  Scient, without turning Scient into an engine-switching shell.

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
- Manuscript, analysis, figure, publishing, and open-science expansion.

These later items remain sequencing direction, not implementation commitments.
