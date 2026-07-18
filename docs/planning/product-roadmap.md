# Product Roadmap

Status: Active
Owner: Yaacov
Created: 2026-07-16
Last updated: 2026-07-18
Purpose: Defines the current sequence of coherent Scient product outcomes without turning technology experiments into the product roadmap.
Doc type: Planning note

## Document Rules

This roadmap owns product sequencing and validation outcomes. The accepted
product contract remains in `../product/PRD.md`. Architecture decisions,
implementation steps, source evaluations, and executed evidence belong in their
own documents.

Update this roadmap when the active product slice changes, when evidence changes
its order, or when a slice is accepted, deferred, or rejected.

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

### Controlled Validation Fixture

The first scientific project is **Many Labs 2's Knobe side-effect effect**. It
provides a preregistered protocol-to-analysis-to-claim-audit loop that can be
kept small enough for the first product slice. Activation is conditional on a
clean audit of the exact artifacts, licenses, dependencies, and expected output.
**ManyBabies 4** is the designated replacement if that audit fails.

The accepted portfolio, source evidence, fixture boundaries, and replacement
conditions are recorded in
[`../research/source-evaluations/scientific-project-fixture-selection.md`](../research/source-evaluations/scientific-project-fixture-selection.md).

## Next

- Strengthen the evidence-to-writing path based on the first slice.
- Activate the clinical phenotyping machine-learning fixture as the immediate
  second project, followed by the selected Cancer Biology replication and then
  OpenNeuro Flanker as the heavier data-workflow benchmark.
- Add scientific capabilities through the Scient-owned layer as real needs
  appear.
- Make isolated changes to Scient's inherited OpenCode core only for
  demonstrated runtime gaps.
- Evaluate Goose as a later source of capabilities and architecture lessons for
  Scient, without turning Scient into an engine-switching shell.
- Choose the next coherent workflow, with data-to-figure as a leading candidate.

## Later

- Cloud mirroring and collaboration.
- Mobile reading, review, capture, and approval.
- Deeper source discovery, import, parsing, and citation workflows.
- Multi-paper medical evidence synthesis, with the BCG vaccine meta-analysis
  held as the first reserve fixture for that capability.
- Manuscript, analysis, figure, publishing, and open-science expansion.

These later items remain sequencing direction, not implementation commitments.
