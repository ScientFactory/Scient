# ADR-0001: Synara And OpenCode Foundations With A LitRev Ownership Boundary

Status: Accepted
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Records the decision to use the owned Synara and OpenCode forks as LitRev's initial application and agent-runtime foundations while keeping scientific capabilities and canonical project meaning owned by LitRev.
Doc type: Architecture decision

## Context

Accepted on 2026-07-16.

LitRev needs a serious local desktop workbench and agent runtime before it can
validate a complete scientific workflow. The owned Synara fork already provides
desktop, workspace, provider, process, terminal, preview, diff, and review
machinery. The owned OpenCode fork already provides a capable local agent loop,
model integration, tools, permissions, sessions, and file and shell execution.

Gate 1 and Gate 1.5 proved that the maintained forks build, remain isolated from
the official applications, preserve reviewed upstream ancestry, and work
together for a constrained executor action. They did not create LitRev's
scientific project model, agent contract, or accepted write-back path.

LitRev must be free to adopt useful upstream changes without treating upstream
compatibility as more important than the product. It must also avoid scattering
scientific behavior through inherited internals when that behavior should be
available to both researchers and agents.

## Decision

1. The owned Synara fork is LitRev's initial application foundation for the
   desktop shell, local workspace experience, UI, lifecycle, and runtime
   plumbing.
2. The owned OpenCode fork is LitRev's initial agent-runtime foundation.
3. LitRev owns the scientific project meaning, capabilities, permission scope,
   context receipts, proposed-change lifecycle, provenance, review, recovery,
   and accepted state built on those foundations.
4. LitRev scientific operations should be separated from inherited cores where
   practical so the manual UI and agents can use the same operations. Separation
   means clear modules and interfaces; it does not require a separate repository
   or process.
5. Configuration, tools, skills, adapters, and other extension seams are the
   preferred first integration method because they reduce unnecessary fork
   conflict. This is a maintainability preference, not a prohibition on core
   changes.
6. LitRev may patch Synara or OpenCode core when a demonstrated product,
   security, reliability, or runtime requirement cannot be met cleanly through
   an extension seam. Such patches should remain narrow and identifiable where
   practical.
7. A fork may progress deliberately from upstream-aligned, through isolated
   LitRev patches, to selective divergence or full LitRev ownership. Official
   upstream changes remain optional reviewed inputs, not a product dependency.
8. Synara and OpenCode runtime/session databases may remain useful execution
   state, but they are not canonical LitRev scientific project state.
9. Goose remains a valuable later engine and architecture comparison. It is not
   on the critical path for the first LitRev scientific project slice.

## Alternatives Considered

### Start A New Application Immediately

This would maximize structural control but require rebuilding substantial
desktop and agent infrastructure before LitRev could validate a real scientific
workflow.

### Keep Synara And OpenCode As External Tools Only

This would simplify upstream updates but limit the integration depth and product
control LitRev expects to need.

### Modify Inherited Cores Without A LitRev Layer

This would move quickly at first but risk making coding-session, provider, and
engine state define the scientific product accidentally.

## Consequences

- The first implementation uses real maintained foundations rather than a
  disposable harness.
- Upstream synchronization remains useful but may become more manual as LitRev
  intentionally diverges.
- LitRev must define a small owned boundary before scientific work is accepted
  into project state.
- The first slice must pressure-test whether Synara can host LitRev without
  forcing research into coding projects, Git worktrees, or provider chats.
- Exact package placement, schemas, runtime events, and storage models remain
  undecided until source tracing and implementation produce evidence.

## Revisit Triggers

Revisit this decision if:

- Synara's architecture prevents a coherent scientific project experience;
- maintaining the fork costs more than retaining selected components in a new
  LitRev shell;
- OpenCode cannot support required scientific or safety behavior without broad,
  unstable core changes;
- another runtime materially improves LitRev's agent capabilities; or
- licensing, security, release, or platform constraints change the viability of
  either foundation.
