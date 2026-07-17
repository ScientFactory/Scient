# Agent Forks

Status: Draft
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Organizes upstream agent engines and automation systems used in the Scient lab.
Doc type: Planning note

## Role

Agent forks are source checkouts for systems that may provide local execution,
file editing, shell access, tool routing, provider abstraction, recipes, MCP
support, or broader automation behavior.

Current and reserved checkouts:

- `scient-agent/` - owned OpenCode-derived source foundation for the planned
  native Scient agent.
- `goose/` - reserved restore path for later broader-agent, automation,
  desktop, and MCP/source research; no local checkout is retained currently.

## Rules

- Treat these projects as engines or references, not Scient's product center.
- Record exact commits in `../sources.lock.md`.
- Build Scient adapters in `../../scient-bridge/` unless testing a fork-specific
  patch.
