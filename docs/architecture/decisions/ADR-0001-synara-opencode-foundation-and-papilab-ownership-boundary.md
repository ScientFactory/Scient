# ADR-0001: Synara And OpenCode Foundations With A PapiLab Ownership Boundary

Status: Accepted
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Records the decision to use the owned Synara fork as PapiLab's application foundation and the owned OpenCode fork as the source foundation for Scient while keeping external agents and canonical scientific state separately owned.
Doc type: Architecture decision

## Context

Originally accepted on 2026-07-16. Amended by Yaacov on 2026-07-17 to name
Scient and clarify that it is the owned OpenCode-derived agent itself, while
external OpenCode remains separate.

The accepted future product identity also names the application **Scient**.
Until that rename is executed, this ADR uses PapiLab for the current app and
Scient for the planned agent. After cutover, precise architecture text must use
**Scient app** and **Scient agent** where the shared public name could be
ambiguous. `../../product/scient-product-identity.md` owns that naming decision.

PapiLab needs a serious local desktop workbench and first-party agent before it can
validate a complete scientific workflow. The owned Synara fork already provides
desktop, workspace, provider, process, terminal, preview, diff, and review
machinery. The owned OpenCode fork already provides a capable local agent loop,
model integration, tools, permissions, sessions, and file and shell execution.

The chosen name for PapiLab's first-party research agent is **Scient**. Scient
is the agent derived from the owned OpenCode fork. It is not a PapiLab wrapper
around a separately operated or separately branded OpenCode engine. External
OpenCode remains an independent external-agent choice in the application.

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
2. Scient is PapiLab's first-party research agent. Scient is one owned
   OpenCode-derived agent product, runtime, and codebase—not a separate agent
   shell that delegates to an independently identified OpenCode engine.
3. Within Scient's codebase, inherited OpenCode core and Scient-owned
   capabilities, integrations, identity, and product behavior should remain
   identifiable where practical. This is a source-maintenance boundary for
   selective upstream updates, not a separate product, process, user choice, or
   runtime identity.
4. External OpenCode remains a separate external agent alongside Codex,
   Claude, Droid, and the other inherited external-agent paths. Scient must not
   reuse or silently redirect external OpenCode's durable identity,
   configuration, credentials, subscription path, sessions, or update channel.
5. PapiLab owns the scientific project meaning, capabilities, permission scope,
   context receipts, proposed-change lifecycle, provenance, review, recovery,
   and accepted state built on those foundations.
6. PapiLab scientific operations should be separated from inherited cores where
   practical so the manual UI and agents can use the same operations. Separation
   means clear modules and interfaces; it does not require a separate repository
   or process.
7. Configuration, tools, skills, adapters, and other extension seams are the
   preferred first integration method because they reduce unnecessary fork
   conflict. This is a maintainability preference, not a prohibition on core
   changes.
8. PapiLab may patch Synara or Scient's inherited OpenCode core when a
   demonstrated product, security, reliability, or runtime requirement cannot
   be met cleanly through an extension seam. Such patches should remain narrow
   and identifiable where practical.
9. A fork may progress deliberately from upstream-aligned, through isolated
   PapiLab patches, to selective divergence or full PapiLab ownership. Official
   upstream changes remain optional reviewed inputs, not a product dependency.
10. Synara, Scient, and external-agent runtime/session databases may remain
    useful execution state, but they are not canonical PapiLab scientific
    project state.
11. Goose remains valuable later as a source of agent capabilities and
    architecture lessons for Scient. Any adopted behavior becomes part of
    Scient rather than creating a hidden engine-switching product. A future
    external Goose option, if separately chosen, would remain distinct from
    Scient. Goose is not on the critical path for the first PapiLab scientific
    project slice.

## Alternatives Considered

### Start A New Application Immediately

This would maximize structural control but require rebuilding substantial
desktop and agent infrastructure before PapiLab could validate a real scientific
workflow.

### Keep Synara And OpenCode As External Tools Only

This would simplify upstream updates but limit the integration depth and product
control PapiLab expects to need.

### Put A Generic First-Party Shell In Front Of A Separate OpenCode Engine

This would make the product/runtime boundary look replaceable, but it would
misstate the ownership decision. PapiLab intends to own and evolve the
OpenCode-derived agent itself. Scient is that agent; OpenCode lineage is an
internal source-maintenance concern, not a second product underneath it.

### Modify Inherited Cores Without A PapiLab Layer

This would move quickly at first but risk making coding-session, provider, and
engine state define the scientific product accidentally.

## Consequences

- The first implementation uses real maintained foundations rather than a
  disposable harness.
- Scient has one product identity, runtime lifecycle, configuration, release,
  and update channel even while its inherited OpenCode core remains traceable.
- External OpenCode remains independently available and independently
  configured.
- Upstream OpenCode synchronization remains useful but may become more manual as
  Scient intentionally diverges.
- PapiLab must define a small owned boundary before scientific work is accepted
  into project state.
- The first slice must pressure-test whether Synara can host PapiLab without
  forcing research into coding projects, Git worktrees, or provider chats.
- Exact package placement, schemas, runtime events, and storage models remain
  undecided until source tracing and implementation produce evidence.

## Revisit Triggers

The PapiLab ownership boundary in Decisions 5 and 10 implements the accepted
product requirement that external tools must not become canonical scientific
project truth. The triggers below apply to the selection and use of Synara and
Scient's OpenCode-derived source foundation, not to that ownership boundary.
Changing the boundary would require an explicit product decision and a
superseding architecture decision.

Revisit this decision if:

- Synara's architecture prevents a coherent scientific project experience;
- maintaining the fork costs more than retaining selected components in a new
  PapiLab shell;
- Scient's inherited OpenCode core cannot support required scientific or safety
  behavior without broad, unstable core changes;
- another source or architecture materially improves Scient's capabilities; or
- licensing, security, release, or platform constraints change the viability of
  either foundation.
