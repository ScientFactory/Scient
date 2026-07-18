# External Source Checkouts

Status: Active
Owner: Yaacov
Last updated: 2026-07-18
Purpose: Explains how owned source repositories, external provenance, and optional reference checkouts are organized locally.
Doc type: Repo orientation

## Purpose

This folder owns provenance metadata for upstream projects used in Scient fork,
integration, and source-reading work. The maintained owned repositories do not
live here: `Scient`, `scient-desktop`, and `scient-agent` are independent
siblings inside the plain local `ScientFactory/` workspace.

Optional temporary reference checkouts may be retained under this folder when
a bounded lab task needs them, but they are never canonical owned checkouts.
Keep the parent repository clean by tracking only source metadata, pointer
notes, and lab evidence.

## Layout

- `../scient-agent/` - canonical maintained Scient agent-source sibling,
  expressed relative to the `Scient` repository root.
- `../scient-desktop/` - canonical maintained Scient application sibling,
  expressed relative to the `Scient` repository root.
- `agent-forks/` and `desktop-app-forks/` - provenance and pointer-note areas
  for deferred or temporary external references, not homes for the two
  maintained owned repositories.
- `sources.lock.md` - current local source inventory with URL, branch, commit,
  role, and update strategy.
- `upstream-reviews/` - dated disposition evidence for official source changes;
  repo-local `upstream-state.json` files remain the machine checkpoints.

## Rules

- Keep the maintained owned repositories at the sibling paths recorded in
  `sources.lock.md`.
- Record the actual location of any temporary external reference checkout; do
  not infer a checkout merely because a pointer directory exists.
- Record exact source commits in `sources.lock.md`.
- Prefer one physical checkout per upstream repository.
- Use pointer notes when one repository spans multiple roles.
- Keep Scient-owned bridge code outside temporary upstream trees unless a fork
  patch is intentionally being tested.
