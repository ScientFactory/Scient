# LitRev Lab

Status: Draft
Owner: Yaacov
Last updated: 2026-07-11
Purpose: Defines the experimental lab area for early LitRev source forks, adapters, and integration spikes.
Doc type: Planning note

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

## Current Inspection Notes

- `notes/synara-gate-1-baseline-2026-07-11.md` - executed Gate 1 baseline, correction run with the official OpenCode CLI, and pass-to-Gate-2 verdict.
- `notes/synara-first-inspection-2026-07-07.md` - first Synara desktop-base inspection, OpenCode connection path, Goose integration path, and LitRev ownership boundary.

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
