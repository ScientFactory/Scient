# Open-Source Adaptation Build Strategy

Status: Draft
Owner: Yaacov
Created: 2026-07-07
Last updated: 2026-08-02
Purpose: Defines the current source-ownership, adaptation, upstream-update, and divergence strategy for open-source foundations used by Scient.
Doc type: Planning note

## Document Rules

This file owns the conceptual adaptation and divergence strategy. It is not
product truth, accepted architecture, current implementation, an operational
runbook, or the product roadmap.

The accepted product contract lives in `docs/product/PRD.md`. Source evaluation
and candidate mapping live in
`docs/research/source-evaluations/open-source-adaptation-map.md`. Architecture
decisions must be promoted into `docs/architecture/` or
`docs/architecture/decisions/` when they become durable.

Do not use this file to invent package boundaries, schemas, APIs, commands,
sync protocols, sandbox details, or dependency commitments before they have been
validated.

## Proposed T3 Transition

[ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
proposes replacing the long-term Synara-derived desktop target with a fresh,
literal-ancestry T3-derived Scient application. The reviewed
[migration proposition](t3-foundation-migration-proposition.md) owns its
capability dispositions, proof gates, initial ancestry-preserving update
strategy, and stop conditions.

This proposal does not change current implementation truth. ADR-0001 remains
accepted, `scient-desktop` remains the supported Synara-derived application,
and no T3-derived candidate repository exists. Phase Zero must refresh and test
the exact official T3 baseline before ADR-0005 can be accepted. If accepted,
this strategy will be reconciled as the evergreen source-relationship owner;
until then, the Synara rules below describe the current foundation.

## Current Accepted State

The parent repository remains documentation-first. The maintained desktop source
contains the dependency-light `@scientfactory/project-init` package, but there is no
implemented scientific application, canonical project-state kernel, agent
gateway, sync layer, editor, analysis runtime, or Scient production pipeline.

The current practical direction is to build on owned, working foundations while
keeping Scient's scientific project meaning owned:

- use the owned Synara-derived source as the initial application foundation for desktop,
  workspace, UI, provider-session, and local-process work;
- use science apps from the 2026-07-07 scan as specialized sources around the
  shell: Zotero-family components for source/PDF work, Zettlr/Overleaf/Quarto
  for writing/export expectations, Jupyter-style tools for analysis
  compatibility, and ELN/RDM tools for protocol/lab/repository references;
- use `ScientFactory/scient-agent`, the owned OpenCode-derived source, as the
  source foundation for the product's first-party **Scient agent**;
- preserve external OpenCode and the other inherited external-agent paths as
  separate choices rather than aliases for Scient;
- evaluate Goose later as a source of capabilities and architecture lessons for
  Scient, or through a separately reviewed external-agent path;
- keep Scient and external agents behind a Scient-owned gateway for context, permissions,
  proposed changes, provenance, review, checkpoints, and write-back.

## First-Slice Constraints

The active product sequence lives in `product-roadmap.md`, and its concrete
implementation is planned in
`first-scient-vertical-slice-implementation-plan.md`. This strategy constrains
that work without duplicating it:

1. Use one vertical scientific workflow to pressure-test both foundations.
2. Keep scientific operations available to manual UI and agents through a
   Scient-owned layer where practical.
3. Preserve project meaning independently of Synara, Scient, and external-agent
   session state.
4. Prefer extension seams first, but make isolated core changes when a proven
   requirement cannot be met cleanly otherwise.
5. Reconsider the foundation if inherited coding assumptions prevent the
   accepted product workflow.

Names such as `ProjectKernel`, `AgentGateway`, `ProvenanceLog`, and
`ReviewableArtifact` are planning placeholders until architecture documents or
implementation make them real.

## Source Adaptation And Upstream Rules

Use the lightest source relationship that gives the required capability. These
labels must match the research map in
`docs/research/source-evaluations/open-source-adaptation-map.md`.
Standalone repository authority is accepted in
[`ADR-0002`](../architecture/decisions/ADR-0002-standalone-source-ownership-and-upstream-authority.md).
The actual monitoring, review, and intake workflow lives in
[`docs/operations/upstream-intake.md`](../operations/upstream-intake.md).

1. Prefer upstream-trackable integration through configuration, plugins, CLI,
   SDK, API, sidecar, wrapper, or adapter.
2. Put Scient-specific behavior in an add-on layer when possible, so the
   upstream tool core remains intact.
3. Use embedded engines for bounded execution tasks, but keep accepted project
   state in Scient-owned objects.
4. Use adapters for import, export, sync, search, or reconciliation, and keep the
   external format from becoming canonical.
5. Treat editor, chart, notebook, CRDT, or export-runtime state as a projection
   unless an architecture decision says otherwise.
6. Use a thin fork while missing integration seams can stay isolated and regular
   upstream merges remain valuable.
7. Move deliberately to selective divergence when Scient owns a changed product
   surface and accepts that updates may become manual cherry-picks.
8. Treat divergent upstream updates as reference/cherry-pick source: inspect,
   select, and adapt useful changes manually.
9. Preserve raw upstream runtime logs when useful, but normalize accepted project
   changes into Scient-owned records.
10. Track each source's update strategy before depending on it.

### Owned-Source Remote Topology

Scient owns standalone writable desktop and agent-source repositories derived
from the original projects. Any later Goose adaptation must first receive an
explicit owned-repository and upstream-authority decision. This is an ownership
and safety rule; it does not require immediate source divergence.

Each active source checkout should use:

```text
origin   -> ScientFactory-owned standalone repository; writable
upstream -> original project; fetch-only, push disabled
```

Before the first Scient source change:

1. create the owned repository and preserve source lineage and notices;
2. attach it as `origin`;
3. preserve the official repository as fetch-only `upstream`;
4. record the baseline upstream commit;
5. prove the unchanged source baseline builds or passes its smallest relevant smoke check;
6. make Scient changes in narrow, reviewable commits; and
7. review official changes through the upstream-intake procedure before any
   selected change enters a maintenance branch.

Keep change lanes separable where practical:

- identity and packaging;
- Scient adapters and extension seams;
- Scient-owned domain UI;
- unavoidable upstream-core patches; and
- release or updater configuration.

Synara is expected to carry visible Scient identity and domain UI. OpenCode is
Scient's inherited source foundation, not a separately branded engine beneath
Scient. Scient therefore needs its own product, binary, configuration, session,
release, and update identity while inherited OpenCode core remains traceable for
upstream maintenance and attribution. The external OpenCode option retains
OpenCode identity and remains independently configured. If Scient later adopts
Goose-derived capabilities, they become part of Scient unless Scient separately
decides to offer an external Goose agent.

Upstream awareness and code intake are different operations. Detect and review
official movement first. When a selected change has bounded value, use the
lightest appropriate path: learn, reimplement, patch-port or cherry-pick,
bounded merge, or broad merge only while the source remains honestly thin.
Never update an owned default branch directly from an unreviewed official head.

Update strategy values:

- `no-upstream` - Scient owns this part.
- `version-bump` - update directly with normal dependency testing.
- `adapter-maintained` - update upstream, then repair or validate the adapter.
- `thin-fork-merge` - keep the fork close enough that upstream merges remain
  plausible.
- `divergent-cherry-pick` - upstream is inspected and manually adapted; direct
  merges are not expected.
- `reference-only` - no dependency or maintained source integration.
- `deferred` - no active update work now.

These values describe adaptation depth. They do not replace the owned-source
remote topology above.

## Completed Preparation Evidence

The executable plan, evidence requirements, and pass/fail criteria live in
[`gate-1-5-execution-plan.md`](gate-1-5-execution-plan.md).

**2026-07-11 result: passed.** The then-current PapiLab project owned public,
upstream-connected Synara and OpenCode forks; Synara had an isolated PapiLab
development identity; and the owned OpenCode build passed the constrained
Synara smoke. The exact
history, checks, and documented execution-order correction are in the
[`Gate 1.5 report`](../../lab/notes/gate-1-5-execution-report-2026-07-11.md).

At that historical point, this preparation pass established:

1. Created owned forks for Synara and OpenCode and attached them as `origin`;
   kept official repositories as fetch-only `upstream`.
2. Established repeatable upstream verification and a baseline check per fork.
3. Applied a narrow Synara identity/namespace layer on auditable current-
   upstream ancestry without mixing identity with the upstream merge.
4. Proved the owned OpenCode build remains compatible with Synara's existing
   adapter and constrained approval/transcript behavior.

Gate 1.5 was preparation for implementation, not a new product-planning phase.
Its durable output is the proven source lineage, an upstream-safe Synara
identity layer, the owned OpenCode compatibility result, and repeatable source
verifiers. ADR-0002 later superseded the fork topology with standalone owned
repositories. Runtime homes and smoke artifacts are evidence, not product
architecture.

## Deferred Goose Evaluation

All Goose execution work is deferred until after the first Scient gateway works
through Scient, including:

- creating and attaching the owned Goose repository;
- building and releasing any owned Goose-derived binary;
- implementing the ACP-over-stdio adapter spike;
- testing approval, cancellation, tool-event, and session behavior;
- enforcing and proving outside-project path denial;
- deciding Goose runtime-state and credential isolation; and
- deciding whether particular Goose capabilities or architecture patterns add
  enough value to Scient, or whether a distinct external Goose path is useful.

The completed source-depth inspection remains research input, not a current
implementation commitment.

Stop relying on a forked workbench if it forces Scient to model research projects
as coding sessions, Git worktrees, provider chats, or engine-owned artifacts.

## Required Reviews Before Deeper Commitment

- License and attribution review for any copied code, fork, embedded engine, or
  bundled dependency.
- Source-depth review of the exact proposed T3 baseline and its Scient
  integration seams. Historical Synara evidence remains relevant to continuity
  and capability comparison. OpenCode baseline refresh and Goose integration
  review belong to the later Scient-agent work.
- Source-depth and license review of the science-app components that may become
  more than references, especially Zotero Reader, Zotero Document Worker,
  Paperlib, Tropy, Zettlr, Overleaf, JupyterLab Desktop, Stencila, and the ELN
  or RDM candidates.
- Security review of local file access, command execution, prompt injection,
  secrets, logs, and agent-readable context.
- Data-boundary review proving that external engine state does not become
  canonical Scient project state.
- Upgrade-path review showing how upstream updates can be pulled without
  rewriting Scient's project model.

## Open Questions

- Which T3 seams can remain upstream-aligned, and which product-quality needs
  justify deliberate, documented Scient ownership and divergence?
- Can a fresh T3-derived candidate host the first science-facing slice without
  leaking coding-product assumptions into the Scient project kernel, and can it
  still absorb bounded current T3 ranges at an acceptable cost?
- Which OpenCode-derived modules can remain close to upstream inside Scient,
  and which Scient-owned capabilities require deliberate divergence?
- Should Zotero Reader or Zotero Document Worker be embedded as components, or
  should Scient build/choose simpler PDF and extraction components while using
  Zotero as a reference and compatibility target?
- What is the exact minimal agent gateway event model?
- Which agent actions can be pre-approved, and which require explicit review?
- What source fixture best tests evidence, drafting, analysis, and recovery
  without expanding the first build too much?
- Which additional decisions from this strategy are hard enough to reverse that
  they should be promoted into focused ADRs?
