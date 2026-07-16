# First LitRev Vertical Slice Implementation Plan

Status: Draft
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Defines the bounded implementation and verification plan for the first LitRev scientific project slice.
Doc type: Planning note

## Document Rules

This plan operationalizes the active product slice in `product-roadmap.md` and
the ownership decision in
`../architecture/decisions/ADR-0001-synara-opencode-foundation-and-litrev-ownership-boundary.md`.
It does not define the full project format, final runtime architecture, or
implemented behavior.

Do not invent exact package paths, APIs, schemas, or commands before the current
Synara and OpenCode sources have been traced. Update this plan when that trace or
implementation evidence resolves an open boundary.

## Goal

Build one permanent LitRev-owned workflow on the maintained Synara and OpenCode
foundations: manual source capture, bounded agent assistance, a visible proposal
and decision, and durable reopening and recovery.

## Scope

1. Open or create a local non-Git LitRev project.
2. Persist minimal LitRev-owned project identity.
3. Add one public or synthetic source excerpt manually.
4. Create one bounded scientific task with an inspectable context receipt.
5. Execute the task through the owned OpenCode runtime.
6. Record the action and result in a LitRev-owned run/proposal boundary.
7. Return one evidence-linked note as a proposal.
8. Let the researcher inspect, edit, accept, or reject the proposal.
9. Create a recovery point before accepted state changes.
10. Close and reopen the project with the accepted state and history intact.

Names such as project record, context receipt, run receipt, and proposal are
responsibility labels for this slice, not a frozen general schema.

## Implementation Sequence

1. Refresh the owned Synara and OpenCode source checkouts and record the exact
   revisions used without merging upstream changes automatically.
2. Trace project/workspace selection, provider invocation, runtime events,
   approvals, file changes, persistence, and reopening through the current
   source.
3. Identify the smallest clean LitRev application seam and decide the first
   permanent code placement from evidence.
4. Implement minimal LitRev project persistence and the source-excerpt record.
5. Implement the minimum task, context, execution, proposal, and decision path.
6. Expose the same source/note operations to manual UI and the agent-facing
   integration.
7. Add the smallest UI needed to create the project, inspect context, review the
   proposal, and continue manually.
8. Add checkpoint, failure, cancellation, and reopening behavior required by the
   slice.
9. Run deterministic tests with a controlled executor and one live OpenCode
   end-to-end smoke.
10. Review whether Synara remains a suitable application foundation and record
    any justified OpenCode or Synara core patch.

## Acceptance Criteria

- The fixture project does not require Git or cloud services.
- Manual and agent-assisted work use the same LitRev-owned project operations.
- The user can inspect the exact project material supplied to the agent.
- Agent output remains proposed until the researcher accepts it.
- Accept, edit, reject, failure, and cancellation do not create unexplained
  partial accepted state.
- The project reopens with its accepted note, source relationship, task,
  proposal decision, and recovery information understandable from LitRev-owned
  state.
- Synara/OpenCode session state remains execution evidence rather than canonical
  scientific truth.
- Tests include a deterministic executor path and one live owned-OpenCode smoke;
  live model wording is not the only proof.

## Explicit Exclusions

- Goose integration
- cloud sync, accounts, sharing, or collaboration
- mobile implementation
- complete PDF parsing or citation management
- full manuscript, analysis, notebook, or figure systems
- complete project schema or agent-run architecture
- broad Synara redesign or package renaming
- speculative OpenCode core changes

## Stop And Reconsider Conditions

Stop and report before widening scope if:

- the shell requires scientific state to become Synara session or projection
  state;
- a non-Git project cannot be supported without adopting worktree assumptions;
- the UI must depend directly on provider-specific state to express the workflow;
- accepted state cannot be recovered independently of an executor session;
- safe file scope or proposal review cannot be enforced; or
- completing the slice requires a broad inherited-core rewrite not justified by
  the single workflow.

## Evidence To Record

- exact source revisions and source paths used;
- the chosen code boundary and why;
- commands and tests run;
- fixture and deterministic expectations;
- live smoke inputs, approvals, outputs, and cleanup;
- state and artifact locations;
- failures and recovery behavior; and
- the resulting decision about deeper Synara/OpenCode ownership.
