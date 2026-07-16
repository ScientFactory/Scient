# ADR-0001: Synara And OpenCode Foundations With A PapiLab Ownership Boundary

Status: Accepted
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Records the decision to use the owned Synara and OpenCode forks as PapiLab's initial application and agent-runtime foundations while keeping scientific capabilities and canonical project meaning owned by PapiLab.
Doc type: Architecture decision

## Context

Accepted on 2026-07-16.

PapiLab needs a serious local desktop workbench and agent runtime before it can
validate a complete scientific workflow. The owned Synara fork already provides
desktop, workspace, provider, process, terminal, preview, diff, and review
machinery. The owned OpenCode fork already provides a capable local agent loop,
model integration, tools, permissions, sessions, and file and shell execution.

Gate 1 and Gate 1.5 proved that the maintained forks build, remain isolated from
the official applications, preserve reviewed upstream ancestry, and work
together for a constrained executor action. They did not create PapiLab's
scientific project model, agent contract, or accepted write-back path.

PapiLab must be free to adopt useful upstream changes without treating upstream
compatibility as more important than the product. It must also avoid scattering
scientific behavior through inherited internals when that behavior should be
available to both researchers and agents.

## Decision

1. The owned Synara fork is PapiLab's initial application foundation for the
   desktop shell, local workspace experience, UI, lifecycle, and runtime
   plumbing.
2. The owned OpenCode fork is PapiLab's initial agent-runtime foundation.
3. PapiLab owns the scientific project meaning, capabilities, permission scope,
   context receipts, proposed-change lifecycle, provenance, review, recovery,
   and accepted state built on those foundations.
4. PapiLab scientific operations should be separated from inherited cores where
   practical so the manual UI and agents can use the same operations. Separation
   means clear modules and interfaces; it does not require a separate repository
   or process.
5. Configuration, tools, skills, adapters, and other extension seams are the
   preferred first integration method because they reduce unnecessary fork
   conflict. This is a maintainability preference, not a prohibition on core
   changes.
6. PapiLab may patch Synara or OpenCode core when a demonstrated product,
   security, reliability, or runtime requirement cannot be met cleanly through
   an extension seam. Such patches should remain narrow and identifiable where
   practical.
7. A fork may progress deliberately from upstream-aligned, through isolated
   PapiLab patches, to selective divergence or full PapiLab ownership. Official
   upstream changes remain optional reviewed inputs, not a product dependency.
8. Synara and OpenCode runtime/session databases may remain useful execution
   state, but they are not canonical PapiLab scientific project state.
9. Goose remains a valuable later engine and architecture comparison. It is not
   on the critical path for the first PapiLab scientific project slice.

## Alternatives Considered

### Start A New Application Immediately

This would maximize structural control but require rebuilding substantial
desktop and agent infrastructure before PapiLab could validate a real scientific
workflow.

### Keep Synara And OpenCode As External Tools Only

This would simplify upstream updates but limit the integration depth and product
control PapiLab expects to need.

### Modify Inherited Cores Without A PapiLab Layer

This would move quickly at first but risk making coding-session, provider, and
engine state define the scientific product accidentally.

## Consequences

- The first implementation uses real maintained foundations rather than a
  disposable harness.
- Upstream synchronization remains useful but may become more manual as PapiLab
  intentionally diverges.
- PapiLab must define a small owned boundary before scientific work is accepted
  into project state.
- The first slice must pressure-test whether Synara can host PapiLab without
  forcing research into coding projects, Git worktrees, or provider chats.
- Exact package placement, schemas, runtime events, and storage models remain
  undecided until source tracing and implementation produce evidence.

## Revisit Triggers

The PapiLab ownership boundary in Decisions 3 and 8 implements the accepted
product requirement that external tools must not become canonical scientific
project truth. The triggers below apply to the selection and use of Synara and
OpenCode, not to that ownership boundary. Changing the boundary would require
an explicit product decision and a superseding architecture decision.

Revisit this decision if:

- Synara's architecture prevents a coherent scientific project experience;
- maintaining the fork costs more than retaining selected components in a new
  PapiLab shell;
- OpenCode cannot support required scientific or safety behavior without broad,
  unstable core changes;
- another runtime materially improves PapiLab's agent capabilities; or
- licensing, security, release, or platform constraints change the viability of
  either foundation.
