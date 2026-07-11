# Open-Source Adaptation Build Strategy

Status: Draft
Owner: Yaacov
Last updated: 2026-07-11
Purpose: Starts the intentionally unfinished build strategy for adapting open-source systems into LitRev without making them product truth.
Doc type: Planning note

## Document Rules

This file is unfinished. It is a planning note for the next build strategy, not
accepted architecture, current implementation, or a full roadmap.

The accepted product contract lives in `docs/product/PRD.md`. Source evaluation
and candidate mapping live in
`docs/research/source-evaluations/open-source-adaptation-map.md`. Architecture
decisions must be promoted into `docs/architecture/` or
`docs/architecture/decisions/` when they become durable.

Do not use this file to invent package boundaries, schemas, APIs, commands,
sync protocols, sandbox details, or dependency commitments before they have been
validated.

## Current State

LitRev is still documentation-first. There is no implemented app, project
kernel, agent gateway, sync layer, editor, analysis runtime, or build pipeline in
this repo.

The current practical direction is to move faster by borrowing working
infrastructure while keeping LitRev's scientific project model owned:

- use a Synara-derived or Synara-inspired workbench prototype if it accelerates
  desktop shell, chat, terminal, diff, provider-session, and local-process work;
- treat that Synara-derived workbench as a prototype to stabilize, not as the
  LitRev product core;
- use science apps from the 2026-07-07 scan as specialized sources around the
  shell: Zotero-family components for source/PDF work, Zettlr/Overleaf/Quarto
  for writing/export expectations, Jupyter-style tools for analysis
  compatibility, and ELN/RDM tools for protocol/lab/repository references;
- embed OpenCode first as the local file/shell/edit executor candidate;
- evaluate Goose as a broader local-agent and automation engine;
- keep all agents behind a LitRev-owned gateway for context, permissions,
  proposed changes, provenance, review, checkpoints, and write-back.

## Minimal Strategy For The Next Build Pass

The first pass should prove the boundary, not the whole product.

1. Define the smallest LitRev-owned project kernel needed for one local project
   scenario.
2. Define a minimal agent gateway contract that can call one embedded executor
   and record context, approvals, actions, diffs, artifacts, errors, and final
   proposed changes.
3. Put a workbench shell around that boundary only where it helps show the real
   workflow: project home, project chat, file/activity view, terminal/log view,
   diff/review view, and artifact output.
4. Run one vertical scientific workflow through the boundary: project context,
   one imported source or fixture, one readable/annotatable source surface, one
   evidence-linked note or draft paragraph, one analysis or artifact output if
   needed, one agent task, one review step, and one recovery or rollback path.
5. Pressure-test the Synara fork with that scientific workflow before deepening
   the fork. If the shell forces LitRev to model research as coding sessions,
   Git worktrees, provider chats, or engine-owned artifacts, stop treating the
   fork as the base and keep only useful parts as reference/cherry-pick source.

Names such as `ProjectKernel`, `AgentGateway`, `ProvenanceLog`, and
`ReviewableArtifact` are planning placeholders until architecture documents or
implementation make them real.

## Fork And Upstream Rules

Use the lightest source relationship that gives the required capability. These
labels must match the research map in
`docs/research/source-evaluations/open-source-adaptation-map.md`.

1. Prefer upstream-trackable integration through configuration, plugins, CLI,
   SDK, API, sidecar, wrapper, or adapter.
2. Put LitRev-specific behavior in an add-on layer when possible, so the
   upstream tool core remains intact.
3. Use embedded engines for bounded execution tasks, but keep accepted project
   state in LitRev-owned objects.
4. Use adapters for import, export, sync, search, or reconciliation, and keep the
   external format from becoming canonical.
5. Treat editor, chart, notebook, CRDT, or export-runtime state as a projection
   unless an architecture decision says otherwise.
6. Use a thin fork only for missing integration seams that can stay isolated and
   remain mergeable from upstream.
7. Use a divergent fork only after license review, source-depth review, and an
   explicit decision that direct upstream updates are no longer expected.
8. Treat divergent upstream updates as reference/cherry-pick source: inspect,
   select, and adapt useful changes manually.
9. Preserve raw upstream runtime logs when useful, but normalize accepted project
   changes into LitRev-owned records.
10. Track each source's update strategy before depending on it.

### Owned-Fork Remote Topology

LitRev will own the writable fork of every source it may adapt directly,
including Synara, OpenCode, and Goose. This is an ownership and safety rule; it
does not mean every fork should immediately diverge from upstream.

Each active source checkout should use:

```text
origin   -> LitRev-owned fork; writable
upstream -> official project; fetch-only, push disabled
```

Before the first LitRev source change:

1. create the owned fork;
2. attach it as `origin`;
3. preserve the official repository as fetch-only `upstream`;
4. record the baseline upstream commit;
5. prove the unchanged fork builds or passes its smallest relevant smoke check;
6. make LitRev changes in narrow, reviewable commits; and
7. test upstream updates on a temporary sync branch before merging them into the
   LitRev-maintained branch.

Keep change lanes separable where practical:

- identity and packaging;
- LitRev adapters and extension seams;
- LitRev-owned domain UI;
- unavoidable upstream-core patches; and
- release or updater configuration.

Synara is expected to carry visible LitRev identity and domain UI. OpenCode and
Goose should initially be embedded engines, so their desktop branding does not
need to be changed unless LitRev later distributes their standalone apps.

An upstream sync should be a deliberate operation: fetch `upstream`, create a
sync branch from the LitRev-maintained branch, merge the selected upstream
revision, resolve conflicts without flattening LitRev patches, run the agreed
smoke suite, review release/security changes, then merge through normal review.
Do not update production integration directly from an unreviewed upstream head.

Update strategy values:

- `no-upstream` - LitRev owns this part.
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

## Gate 1.5: Synara And OpenCode Fork Preparation

The executable plan, evidence requirements, and pass/fail criteria live in
[`gate-1-5-execution-plan.md`](gate-1-5-execution-plan.md).

Complete this short preparation pass before the LitRev-owned Gate 2 bridge:

1. Create owned forks for Synara and OpenCode and attach them as `origin`; keep
   official repositories as fetch-only `upstream`.
2. Establish a repeatable upstream-sync branch procedure and one baseline smoke
   check per fork.
3. Make one narrow Synara identity/namespace patch and prove it survives an
   upstream sync without mixing identity with runtime changes.
4. Prove the owned OpenCode build remains compatible with Synara's existing
   adapter and constrained approval/transcript behavior.

Gate 1.5 is preparation for implementation, not a new product-planning phase.
Its output is maintained Synara/OpenCode fork topology, an upstream-safe Synara
identity layer, and an owned OpenCode compatibility result.

## Gate 1.6: Goose Fork And ACP Boundary

All Goose execution work is deferred to Gate 1.6, including:

- creating and attaching the owned Goose repository;
- building and releasing the owned-fork Goose binary;
- implementing the ACP-over-stdio adapter spike;
- testing approval, cancellation, tool-event, and session behavior;
- enforcing and proving outside-project path denial;
- deciding Goose runtime-state and credential isolation; and
- deciding whether Goose is accepted as a LitRev engine.

The completed source-depth inspection is research input for Gate 1.6, not a
Gate 1.5 deliverable or acceptance condition.

Stop relying on a forked workbench if it forces LitRev to model research projects
as coding sessions, Git worktrees, provider chats, or engine-owned artifacts.

## Required Reviews Before Deeper Commitment

- License and attribution review for any copied code, fork, embedded engine, or
  bundled dependency.
- Source-depth review of Synara, OpenCode, and Goose integration seams.
- Source-depth and license review of the science-app components that may become
  more than references, especially Zotero Reader, Zotero Document Worker,
  Paperlib, Tropy, Zettlr, Overleaf, JupyterLab Desktop, Stencila, and the ELN
  or RDM candidates.
- Security review of local file access, command execution, prompt injection,
  secrets, logs, and agent-readable context.
- Data-boundary review proving that external engine state does not become
  canonical LitRev project state.
- Upgrade-path review showing how upstream updates can be pulled without
  rewriting LitRev's project model.

## Open Questions

- Does the first prototype actually need a Synara fork, or can Synara remain a
  reference while LitRev starts from a smaller shell?
- Can a stabilized Synara fork host the first science-facing slice without
  leaking coding-product assumptions into the LitRev project kernel?
- Should Zotero Reader or Zotero Document Worker be embedded as components, or
  should LitRev build/choose simpler PDF and extraction components while using
  Zotero as a reference and compatibility target?
- What is the exact minimal agent gateway event model?
- Which agent actions can be pre-approved, and which require explicit review?
- What source fixture best tests evidence, drafting, analysis, and recovery
  without expanding the first build too much?
- When should the build strategy graduate into architecture documents or ADRs?
