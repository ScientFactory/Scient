# Product Roadmap

Status: Active
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Defines the current sequence of coherent LitRev product outcomes without turning technology experiments into the product roadmap.
Doc type: Planning note

## Document Rules

This roadmap owns product sequencing and validation outcomes. The accepted
product contract remains in `../product/PRD.md`. Architecture decisions,
implementation steps, source evaluations, and executed evidence belong in their
own documents.

Update this roadmap when the active product slice changes, when evidence changes
its order, or when a slice is accepted, deferred, or rejected.

## Now: First LitRev Scientific Project Slice

A researcher can open a small local scientific project, add source material
manually, delegate one bounded task to the LitRev agent through the owned
OpenCode runtime, inspect the context and proposed result, accept or reject it,
and reopen the project without losing its scientific meaning or history.

The slice combines:

- a durable local project identity;
- one manually captured source excerpt;
- one bounded scientific task and visible context receipt;
- one OpenCode-backed agent action;
- one proposed evidence-linked note;
- inspect, edit, accept, and reject behavior;
- a recovery point; and
- close-and-reopen continuity from LitRev-owned state.

The slice is desktop-first. It does not include mobile, cloud sync,
collaboration, full PDF parsing, full citation management, a complete manuscript
editor, a complete scientific schema, a notebook system, or Goose integration.

The implementation plan is
[`first-litrev-vertical-slice-implementation-plan.md`](first-litrev-vertical-slice-implementation-plan.md).

## Next

- Strengthen the evidence-to-writing path based on the first slice.
- Add scientific capabilities through the LitRev-owned layer as real needs
  appear.
- Make isolated OpenCode core changes only for demonstrated runtime gaps.
- Run the established boundary through Goose as a broader-engine comparison.
- Choose the next coherent workflow, with data-to-figure as a leading candidate.

## Later

- Cloud mirroring and collaboration.
- Mobile reading, review, capture, and approval.
- Deeper source discovery, import, parsing, and citation workflows.
- Manuscript, analysis, figure, publishing, and open-science expansion.

These later items remain sequencing direction, not implementation commitments.
