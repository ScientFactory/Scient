# Open-Source Adaptation Build Strategy

Status: Draft
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Defines the current fork, adaptation, upstream-update, and divergence strategy for open-source foundations used by PapiLab.
Doc type: Planning note

## Document Rules

This file owns the practical fork, adaptation, upstream-update, and divergence
strategy. It is not product truth, accepted architecture, current
implementation, or the product roadmap.

The accepted product contract lives in `docs/product/PRD.md`. Source evaluation
and candidate mapping live in
`docs/research/source-evaluations/open-source-adaptation-map.md`. Architecture
decisions must be promoted into `docs/architecture/` or
`docs/architecture/decisions/` when they become durable.

Do not use this file to invent package boundaries, schemas, APIs, commands,
sync protocols, sandbox details, or dependency commitments before they have been
validated.

## Current State

The parent repository remains documentation-first. The maintained desktop fork
contains the dependency-light `@papilab/project-init` package, but there is no
implemented scientific application, canonical project-state kernel, agent
gateway, sync layer, editor, analysis runtime, or PapiLab production pipeline.

The current practical direction is to build on owned, working foundations while
keeping PapiLab's scientific project meaning owned:

- use the owned Synara fork as the initial application foundation for desktop,
  workspace, UI, provider-session, and local-process work;
- use science apps from the 2026-07-07 scan as specialized sources around the
  shell: Zotero-family components for source/PDF work, Zettlr/Overleaf/Quarto
  for writing/export expectations, Jupyter-style tools for analysis
  compatibility, and ELN/RDM tools for protocol/lab/repository references;
- use the owned OpenCode fork as the initial agent-runtime foundation;
- evaluate Goose later as a broader local-agent and automation engine;
- keep all agents behind a PapiLab-owned gateway for context, permissions,
  proposed changes, provenance, review, checkpoints, and write-back.

## First-Slice Constraints

The active product sequence lives in `product-roadmap.md`, and its concrete
implementation is planned in
`first-papilab-vertical-slice-implementation-plan.md`. This strategy constrains
that work without duplicating it:

1. Use one vertical scientific workflow to pressure-test both foundations.
2. Keep scientific operations available to manual UI and agents through a
   PapiLab-owned layer where practical.
3. Preserve project meaning independently of Synara/OpenCode session state.
4. Prefer extension seams first, but make isolated core changes when a proven
   requirement cannot be met cleanly otherwise.
5. Reconsider the foundation if inherited coding assumptions prevent the
   accepted product workflow.

Names such as `ProjectKernel`, `AgentGateway`, `ProvenanceLog`, and
`ReviewableArtifact` are planning placeholders until architecture documents or
implementation make them real.

## Fork And Upstream Rules

Use the lightest source relationship that gives the required capability. These
labels must match the research map in
`docs/research/source-evaluations/open-source-adaptation-map.md`.

1. Prefer upstream-trackable integration through configuration, plugins, CLI,
   SDK, API, sidecar, wrapper, or adapter.
2. Put PapiLab-specific behavior in an add-on layer when possible, so the
   upstream tool core remains intact.
3. Use embedded engines for bounded execution tasks, but keep accepted project
   state in PapiLab-owned objects.
4. Use adapters for import, export, sync, search, or reconciliation, and keep the
   external format from becoming canonical.
5. Treat editor, chart, notebook, CRDT, or export-runtime state as a projection
   unless an architecture decision says otherwise.
6. Use a thin fork while missing integration seams can stay isolated and regular
   upstream merges remain valuable.
7. Move deliberately to selective divergence when PapiLab owns a changed product
   surface and accepts that updates may become manual cherry-picks.
8. Treat divergent upstream updates as reference/cherry-pick source: inspect,
   select, and adapt useful changes manually.
9. Preserve raw upstream runtime logs when useful, but normalize accepted project
   changes into PapiLab-owned records.
10. Track each source's update strategy before depending on it.

### Owned-Fork Remote Topology

PapiLab will own the writable fork of every source it may adapt directly,
including Synara, OpenCode, and Goose. This is an ownership and safety rule; it
does not mean every fork should immediately diverge from upstream.

Each active source checkout should use:

```text
origin   -> PapiLab-owned fork; writable
upstream -> official project; fetch-only, push disabled
```

Before the first PapiLab source change:

1. create the owned fork;
2. attach it as `origin`;
3. preserve the official repository as fetch-only `upstream`;
4. record the baseline upstream commit;
5. prove the unchanged fork builds or passes its smallest relevant smoke check;
6. make PapiLab changes in narrow, reviewable commits; and
7. test upstream updates on a temporary sync branch before merging them into the
   PapiLab-maintained branch.

Keep change lanes separable where practical:

- identity and packaging;
- PapiLab adapters and extension seams;
- PapiLab-owned domain UI;
- unavoidable upstream-core patches; and
- release or updater configuration.

Synara is expected to carry visible PapiLab identity and domain UI. OpenCode is
an embedded engine, so its standalone desktop branding does not need to change.
If PapiLab later adopts Goose, apply the same principle unless it decides to
distribute a standalone Goose-derived application.

An upstream sync should be a deliberate operation: fetch `upstream`, create a
sync branch from the PapiLab-maintained branch, merge the selected upstream
revision, resolve conflicts without flattening PapiLab patches, run the agreed
smoke suite, review release/security changes, then merge through normal review.
Do not update production integration directly from an unreviewed upstream head.

Update strategy values:

- `no-upstream` - PapiLab owns this part.
- `version-bump` - update directly with normal dependency testing.
- `adapter-maintained` - update upstream, then repair or validate the adapter.
- `thin-fork-merge` - keep the fork close enough that upstream merges remain
  plausible.
- `divergent-cherry-pick` - upstream is inspected and manually adapted; direct
  merges are not expected.
- `reference-only` - no dependency or fork.
- `deferred` - no active update work now.

These values describe adaptation depth. They do not replace the owned-fork
remote topology above.

## Completed Preparation Evidence

The executable plan, evidence requirements, and pass/fail criteria live in
[`gate-1-5-execution-plan.md`](gate-1-5-execution-plan.md).

**2026-07-11 result: passed.** PapiLab now owns public, upstream-connected
Synara and OpenCode forks; Synara has an isolated PapiLab development identity;
and the owned OpenCode build passed the constrained Synara smoke. The exact
history, checks, and documented execution-order correction are in the
[`Gate 1.5 report`](../../lab/notes/gate-1-5-execution-report-2026-07-11.md).

This preparation pass established:

1. Created owned forks for Synara and OpenCode and attached them as `origin`;
   kept official repositories as fetch-only `upstream`.
2. Established repeatable upstream verification and a baseline check per fork.
3. Applied a narrow Synara identity/namespace layer on auditable current-
   upstream ancestry without mixing identity with the upstream merge.
4. Proved the owned OpenCode build remains compatible with Synara's existing
   adapter and constrained approval/transcript behavior.

Gate 1.5 was preparation for implementation, not a new product-planning phase.
Its durable output is the maintained Synara/OpenCode fork topology, an
upstream-safe Synara identity layer, the owned OpenCode compatibility result,
and repeatable upstream verifiers. Runtime homes and smoke artifacts are
evidence, not product architecture.

## Deferred Goose Evaluation

All Goose execution work is deferred until after the first PapiLab gateway works
through OpenCode, including:

- creating and attaching the owned Goose repository;
- building and releasing the owned-fork Goose binary;
- implementing the ACP-over-stdio adapter spike;
- testing approval, cancellation, tool-event, and session behavior;
- enforcing and proving outside-project path denial;
- deciding Goose runtime-state and credential isolation; and
- deciding whether Goose is accepted as a PapiLab engine.

The completed source-depth inspection remains research input, not a current
implementation commitment.

Stop relying on a forked workbench if it forces PapiLab to model research projects
as coding sessions, Git worktrees, provider chats, or engine-owned artifacts.

## Required Reviews Before Deeper Commitment

- License and attribution review for any copied code, fork, embedded engine, or
  bundled dependency.
- Source-depth review of Synara and OpenCode integration seams. Goose integration
  review belongs to its later evaluation.
- Source-depth and license review of the science-app components that may become
  more than references, especially Zotero Reader, Zotero Document Worker,
  Paperlib, Tropy, Zettlr, Overleaf, JupyterLab Desktop, Stencila, and the ELN
  or RDM candidates.
- Security review of local file access, command execution, prompt injection,
  secrets, logs, and agent-readable context.
- Data-boundary review proving that external engine state does not become
  canonical PapiLab project state.
- Upgrade-path review showing how upstream updates can be pulled without
  rewriting PapiLab's project model.

## Open Questions

- Which Synara seams should remain upstream-aligned and which should become
  deliberately PapiLab-owned?
- Can a stabilized Synara fork host the first science-facing slice without
  leaking coding-product assumptions into the PapiLab project kernel?
- Should Zotero Reader or Zotero Document Worker be embedded as components, or
  should PapiLab build/choose simpler PDF and extraction components while using
  Zotero as a reference and compatibility target?
- What is the exact minimal agent gateway event model?
- Which agent actions can be pre-approved, and which require explicit review?
- What source fixture best tests evidence, drafting, analysis, and recovery
  without expanding the first build too much?
- Which additional decisions from this strategy are hard enough to reverse that
  they should be promoted into focused ADRs?
