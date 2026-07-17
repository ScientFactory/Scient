# External Source Checkouts

Status: Draft
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Explains how external source provenance and ignored local checkouts are organized for the Scient lab.
Doc type: Planning note

## Purpose

This folder owns provenance metadata for upstream projects used in Scient fork,
integration, and source-reading work. Active owned checkouts live in ignored
root-level folders so they can be maintained as independent repositories without
being mistaken for tracked parent-repository content.

The local source trees are ignored by the parent repository. Keep the parent repo
clean by tracking only source metadata and lab notes. Legacy duplicate checkouts
under this directory are not canonical and should be removed after their useful
branches or evidence have been reconciled.

## Layout

- `../../agent-forks/` - canonical owned agent-engine checkouts that may become
  embedded engines, sidecars, adapters, or references.
- `../../desktop-app-forks/` - canonical owned desktop/workbench checkouts used as shell,
  runtime, UI, and feature-reference sources.
- `sources.lock.md` - current local source inventory with URL, branch, commit,
  role, and update strategy.

## Rules

- Restore or clone an active source into the root-level category recorded in
  `sources.lock.md`.
- Record exact source commits in `sources.lock.md`.
- Prefer one physical checkout per upstream repository.
- Use pointer notes when one repository spans multiple roles.
- Keep Scient-owned bridge code outside these upstream trees unless a fork patch
  is intentionally being tested.
