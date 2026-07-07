# LitRev Bridge

Status: Draft
Owner: Yaacov
Last updated: 2026-07-07
Purpose: Holds LitRev-owned adapter and integration experiments connecting lab source checkouts.
Doc type: Planning note

## Purpose

This folder is for LitRev-owned bridge code and contracts that connect upstream
tools without letting any upstream project define LitRev's product model.

Early bridge work may include:

- Synara-to-OpenCode task invocation experiments.
- Agent result and changed-file capture.
- Context receipt and proposed-change experiments.
- Goose sidecar or recipe experiments.
- Local project folder fixture experiments.

## Rules

- Keep bridge code LitRev-owned.
- Prefer small, inspectable contracts over broad hidden coupling.
- Record assumptions in `../notes/` when they are not ready for durable docs.
- Promote stable architecture into `docs/architecture/` or ADRs later.
