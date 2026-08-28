# Product Roadmap

Status: Active
Owner: Yaacov
Created: 2026-07-16
Last updated: 2026-08-28
Purpose: Defines the current sequence of coherent Scient product outcomes without turning technology experiments into the product roadmap.
Doc type: Planning note

## Document Rules

This roadmap owns product sequencing and validation outcomes. The accepted
product contract remains in `../product/PRD.md`. Architecture decisions,
implementation steps, source evaluations, and executed evidence belong in their
own documents.

Update this roadmap when the active product slice changes, when evidence changes
its order, or when a slice is accepted, deferred, or rejected.

## Now: Build Scientific Work On The Current Desktop Foundation

[ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
selected the literal-ancestry T3-derived application. That application is now
the active `ScientFactory/scient-desktop` repository and release source; the
Synara-derived predecessor is retired. The
[T3 foundation migration plan](t3-foundation-migration-plan.md) is therefore a
historical transition record, not the current product track.

The active desktop already contains materially more scientific foundation than
the pre-cutover plans recorded: universal direct file opening; safe editable
workspace text; exact-file freshness; a full PDF reader; interactive HTML and
HTML-to-PDF export; inline and Markdown mathematics; local LaTeX builds with
diagnostics, last-success PDF, and SyncTeX; rich Mermaid, Vega-Lite, and Plotly
chat presentations; and the first MATLAB analysis runtime and artifact path.
These are implementation facts at the current desktop source, not acceptance
of every larger platform proposal or a claim of complete cross-platform
parity.

The immediate product work should consolidate that progress into foundations
the first coherent scientific-project experience can depend on:

1. make ordinary file identity survive rename and relocation, then unify
   workspace/direct presentation and broad read-only coverage through the
   proposed [File, Resource, And Presentation Foundation](file-resource-and-presentation-foundation.md);
2. keep document, computing, and artifact work on their distinct proposed
   owners while sharing file, revision, presentation, execution, and artifact
   seams;
3. review, realign, and qualify the stateful Python/compute candidate in draft
   [desktop PR #129](https://github.com/ScientFactory/scient-desktop/pull/129),
   then add the missing data path and durable artifact-to-chat continuity
   without rebuilding its accepted foundations; and
4. use these capabilities in the first end-to-end scientific project slice
   rather than accumulating unrelated format demos.

Detailed dependency, schema, Office-engine, rich-editor, kernel, data-viewer,
canvas, and collaboration choices remain proposed and evidence-gated. The
product roadmap sequences outcomes; it does not approve those architecture
decisions.

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
superseded by the current product roadmap and later focused Scient-agent work.

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
  proposed [File foundation](file-resource-and-presentation-foundation.md),
  [Scientific Document Platform](scientific-document-platform-roadmap.md),
  [Scientific Computing And Data Analysis](scientific-computing-and-data-analysis-roadmap.md),
  [Scientific Python Environment](scientific-python-environment-roadmap.md),
  and [Scientific Artifact Studio](scientific-artifact-studio.md) own distinct
  layers of that direction. Their stages are not automatically inserted into
  the active product sequence merely because the proposals are detailed.

These later items remain sequencing direction, not implementation commitments.
