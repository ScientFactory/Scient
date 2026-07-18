# Agent Forks

Status: Draft
Owner: Scient 001
Created: 2026-07-08
Last updated: 2026-07-18
Purpose: Organizes upstream agent engines and automation systems used in the Scient lab.
Doc type: Planning note

## Role

Agent forks are source checkouts for systems that may provide local execution,
file editing, shell access, tool routing, provider abstraction, recipes, MCP
support, or broader automation behavior.

Current owned source and deferred references:

- `ScientFactory/scient-agent` - the owned OpenCode-derived source foundation
  for the planned native Scient agent. It is a workspace sibling, not a
  checkout inside this directory.
- Goose - deferred broader-agent, automation, desktop, and MCP/source research;
  no local checkout is retained currently.

## Rules

- Treat external projects as engines or references, not Scient's product
  center. The owned `scient-agent` repository remains a separate source
  foundation with the product boundary defined by Scient architecture.
- Record exact commits in `../sources.lock.md`.
- Build Scient adapters in `../../scient-bridge/` unless testing a fork-specific
  patch.
