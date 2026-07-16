# LitRev Lab

Status: Active
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Defines the experimental lab area for early LitRev source forks, adapters, and integration spikes.
Doc type: Repo orientation

## Purpose

The lab is the controlled experimental area for turning LitRev's product and
open-source adaptation plans into working prototypes.

Use this area to inspect upstream projects, run fork experiments, build bridge
code, and capture notes before anything is promoted into real product
architecture.

## Boundaries

- `external/` holds local checkouts of upstream projects.
- `litrev-bridge/` holds LitRev-owned adapter and integration experiments.
- `notes/` holds lab inspection notes and temporary decisions.
- `scripts/` holds repeatable lab-level verification that coordinates more than
  one owned source repository without making either engine canonical.

## Current Inspection Notes

- `notes/gate-1-5-execution-report-2026-07-11.md` - historical Synara/OpenCode ownership, identity isolation, updateability, owned-binary compatibility, and Gate 1.5 verdict. Body text may retain contemporary Gate 1.6 next-step language.
- `notes/synara-gate-1-baseline-2026-07-11.md` - historical Gate 1 baseline, correction run with the official OpenCode CLI, and contemporary Gate 2 next-step verdict preserved as point-in-time wording.
- `notes/synara-first-inspection-2026-07-07.md` - first Synara desktop-base inspection, OpenCode connection path, Goose integration path, and LitRev ownership boundary; planning language is superseded by ADR-0001 and the product roadmap.
- `notes/goose-source-depth-inspection-2026-07-11.md` - research input covering Goose architecture, ACP integration seam, safety gaps, and owned-fork recommendation; implementation is deferred until after the first LitRev gateway.

The upstream source trees under `external/` are intentionally ignored by the
parent LitRev repository. Track their URLs, commits, roles, and update strategy
in `external/sources.lock.md` instead of committing their source code here.

## Promotion Rule

Nothing in `lab/` is accepted architecture or current implementation until it is
promoted into the appropriate durable document or future product package.

When a lab experiment becomes durable, move the idea or code into the right
home, such as `docs/architecture/`, `docs/research/spike-reports/`, `apps/`, or
`packages/`.

## Guardrails

- Do not let upstream app state become LitRev project truth.
- Do not put LitRev-owned adapter code inside upstream forks unless the change is
  truly fork-specific.
- Do not duplicate large upstream repositories in multiple lab folders.
- Treat `runtime/` as disposable generated state. Extract durable findings into
  a note, then remove runtime homes, caches, fixtures, and credentials after the
  experiment closes.
- Do not treat the lab layout as final product architecture.
- Preserve source provenance before copying, adapting, or modifying code.
