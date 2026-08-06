# Open-Source Adaptation Build Strategy

Status: Active
Owner: Yaacov
Created: 2026-07-07
Last updated: 2026-08-06
Purpose: Defines the evergreen source-ownership, adaptation, upstream-update, and divergence strategy for T3, Synara, the still-open Scient-agent foundation, and other open-source inputs used by Scient.
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

## Accepted T3 Relationship

[ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
accepts replacing the long-term Synara-derived desktop target with a fresh,
literal-ancestry T3-derived Scient application. The reviewed
[migration plan](t3-foundation-migration-plan.md) owns its
capability dispositions, proof gates, initial ancestry-preserving update
strategy, and stop conditions.

This accepted target does not change current implementation truth.
`scient-desktop` remains the supported Synara-derived continuity application,
while the private T3-derived candidate now exists with a reviewed D4 draft. The
candidate safety envelope is not integrated, released, or the current product.
ADR-0001 is superseded as the forward desktop-foundation decision but preserved
as history; ADR-0002 continues to govern standalone ownership and fetch-only
source authority.

For the future candidate, qualified reviewed T3 ranges normally enter through
bounded ancestry-preserving merges during the initial aligned phase. T3 does
not become product authority, and an observed tip does not become an
integration base until its ancestry is literally present. Scient may carry
explicit direct divergences when product quality, scientific ownership,
identity, privacy, security, accessibility, reliability, or release safety
requires them. The active migration plan owns the finite move and the later
evidence-based decision about when broad alignment should become selective.

## Current Implementation And Accepted Target

The parent repository remains documentation-first. The maintained desktop source
contains the dependency-light `@scientfactory/project-init` package, but there is no
implemented scientific application, canonical project-state kernel, agent
gateway, sync layer, editor, analysis runtime, or Scient production pipeline.

Current implementation and forward source roles are:

- keep the owned Synara-derived desktop as the supported continuity
  application and source of behavior, failure, migration, and design evidence;
- continue the successor candidate created from the exact official T3 base
  recorded by the migration plan, with owned `origin`, fetch-only T3
  `upstream`, literal ancestry, and explicit divergence;
- use science apps from the 2026-07-07 scan as specialized sources around the
  shell: Zotero-family components for source/PDF work, Zettlr/Overleaf/Quarto
  for writing/export expectations, Jupyter-style tools for analysis
  compatibility, and ELN/RDM tools for protocol/lab/repository references;
- preserve `ScientFactory/scient-agent` as the owned repository and historical
  OpenCode-derived source evidence for the planned first-party **Scient agent**;
- select the refreshed native-agent foundation only through the future gate in
  the [Scient and external agents implementation plan](scient-and-external-agents-implementation-plan.md),
  using then-current Pi, OpenCode, and any equivalently qualified evidence;
- preserve external OpenCode and the other inherited external-agent paths as
  separate choices rather than aliases for Scient;
- use Pi, OpenCode, Hermes, Codex, Goose, OpenHands, Aider, and later sources as
  capability or architecture inputs according to the
  [2026-08-06 foundation investigation](../research/source-evaluations/scient-agent-foundation-and-capability-strategy-2026-08-06.md),
  without treating an analytical recommendation as an owner decision;
- build any later Scient-agent gateway as new Scient and Scient Agent work
  after the desktop foundation, not as migration parity.

Scient's long-term target is one owned first-party agent whose essential
capabilities may be derived from several sources. Early specialist workers are
bounded acceleration or fallback paths, not permanent owners of native Scient
semantics. A capability may move from worker to native Scient through a
maintained package, bounded adaptation, or reimplementation when recurring
product value, quality, privacy, reliability, offline use, or coherence
justifies the ownership cost.

## Migration And First-Scientific-Slice Constraints

The active product sequence lives in `product-roadmap.md`, and the executable
foundation sequence lives in `t3-foundation-migration-plan.md`. The superseded
Synara-specific first-slice plan remains historical evidence. This strategy
constrains current and future source work without duplicating those plans:

1. Use the selected migration and scientific workflows to pressure-test the
   T3 foundation while keeping the current app as continuity evidence.
2. Keep scientific operations available to manual UI and agents through a
   Scient-owned layer where practical.
3. Preserve project meaning independently of Synara, Scient, and external-agent
   session state.
4. Prefer extension seams when they are equally strong, but make explicit core
   changes when they are the better durable product design.
5. Reconsider the foundation if inherited coding assumptions, update cost, or
   authority coupling prevent the accepted product workflow.

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
from original projects. The current agent repository is OpenCode-derived, but
its future refreshed foundation and any rebootstrap method remain unselected.
Any selected foundation, retained fork, or separately maintained worker must
receive an explicit owned-repository, provenance, license, and upstream-authority
decision. This is an ownership and safety rule; it does not require immediate
source divergence.

Each active source checkout should use:

```text
origin   -> ScientFactory-owned standalone repository; writable
upstream -> original project; fetch-only, push disabled
```

Before the first source change against a newly selected foundation:

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

The T3-derived candidate is expected to carry visible Scient identity and
domain UI after its safety envelope is proven. The Synara-derived app retains
its current identity and continuity role rather than receiving new scientific
features. The native-agent foundation, once selected, becomes inherited source
inside one Scient agent rather than a separately branded engine beneath it.
Scient therefore needs its own product, configuration, session, release, and
update identity while all retained source remains traceable for maintenance and
attribution. External OpenCode and other external agents remain independently
configured. A capability absorbed from Pi, OpenCode, Hermes, Codex, Goose,
OpenHands, or another source becomes part of Scient unless a separate decision
keeps it as a worker or external-agent option.

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

## Scient-Agent Foundation And Capability Evaluation

The native-agent foundation must be selected from freshly fetched official
sources when the implementation lane opens. The current finalists are Pi and
OpenCode; the evidence and proof matrix live in the
[2026-08-06 investigation](../research/source-evaluations/scient-agent-foundation-and-capability-strategy-2026-08-06.md).
Neither the current OpenCode-derived checkout nor the report's provisional Pi
preference is an accepted future baseline.

Foundation selection and worker selection are separate decisions. A smaller
native foundation may justify a bounded OpenCode coding worker or Hermes
research worker; an OpenCode-derived native agent may make a second OpenCode
worker redundant. Codex, Goose, OpenHands, and future candidates remain
available for focused proofs rather than automatic integration.

All worker execution work is deferred until the native Scient path and gateway
work without it, including:

- bundling or maintaining a worker runtime;
- implementing worker transport or ACP/MCP adapters;
- testing approval, cancellation, tool-event, session, and recovery behavior;
- enforcing and proving project, filesystem, process, network, credential, and
  recursive-delegation boundaries;
- deciding worker runtime-state, update, distribution, and credential isolation;
  and
- deciding whether a capability should remain delegated, become native, or be
  rejected.

The completed source inspections remain research input, not implementation
commitments.

Stop relying on a forked workbench if it forces Scient to model research projects
as coding sessions, Git worktrees, provider chats, or engine-owned artifacts.

## Required Reviews Before Deeper Commitment

- License and attribution review for any copied code, fork, embedded engine, or
  bundled dependency.
- Source-depth review of the exact selected T3 baseline and its Scient
  integration seams. Historical Synara evidence remains relevant to continuity
  and capability comparison. Fresh Pi/OpenCode foundation comparison and any
  selected worker review belong to the later Scient-agent work.
- Same-model and deterministic comparison of native-foundation finalists,
  including safety, cancellation, recovery, event fidelity, desktop/remote
  clients, packaging, and a rehearsed upstream update.
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
- Which freshly inspected native-agent foundation best balances coding quality,
  ownership, safety, remote clients, provider neutrality, and update cost?
- Which inherited foundation modules can remain close to upstream, and which
  Scient-owned capabilities require deliberate divergence?
- Which specialist-worker capability, if any, is valuable enough to justify an
  early bounded dependency after the native path works?
- When should a recurring delegated capability become an integrated native
  Scient capability, and should that use a package, adaptation, or
  reimplementation?
- Should Zotero Reader or Zotero Document Worker be embedded as components, or
  should Scient build/choose simpler PDF and extraction components while using
  Zotero as a reference and compatibility target?
- What is the exact minimal agent gateway event model?
- Which agent actions can be pre-approved, and which require explicit review?
- What source fixture best tests evidence, drafting, analysis, and recovery
  without expanding the first build too much?
- Which additional decisions from this strategy are hard enough to reverse that
  they should be promoted into focused ADRs?
