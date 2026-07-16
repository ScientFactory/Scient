# External Source Checkouts

Status: Draft
Owner: Yaacov
Last updated: 2026-07-07
Purpose: Explains how upstream source checkouts are organized inside the PapiLab lab.
Doc type: Planning note

## Purpose

This folder contains local checkouts of upstream projects used for early PapiLab
fork, integration, and source-reading experiments.

The local source trees are ignored by the parent repository. Keep the parent repo
clean by tracking only source metadata and lab notes.

## Layout

- `agent-forks/` - agent engines or local automation systems that may become
  embedded engines, sidecars, adapters, or references.
- `desktop-app-forks/` - desktop apps and workbench products used as shell,
  runtime, UI, and feature-reference sources.
- `sources.lock.md` - current local source inventory with URL, branch, commit,
  role, and update strategy.

## Rules

- Clone upstream projects into the correct category folder.
- Record exact source commits in `sources.lock.md`.
- Prefer one physical checkout per upstream repository.
- Use pointer notes when one repository spans multiple roles.
- Keep PapiLab-owned bridge code outside these upstream trees unless a fork patch
  is intentionally being tested.
