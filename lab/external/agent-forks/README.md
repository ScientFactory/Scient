# Agent Forks

Status: Draft
Owner: Yaacov
Last updated: 2026-07-07
Purpose: Organizes upstream agent engines and automation systems used in the PapiLab lab.
Doc type: Planning note

## Role

Agent forks are source checkouts for systems that may provide local execution,
file editing, shell access, tool routing, provider abstraction, recipes, MCP
support, or broader automation behavior.

Current checkouts:

- `opencode/` - first local file/shell/edit executor candidate.
- `goose/` - broader local-agent, automation, desktop, and MCP/source reference.

## Rules

- Treat these projects as engines or references, not PapiLab's product center.
- Record exact commits in `../sources.lock.md`.
- Build PapiLab adapters in `../../papilab-bridge/` unless testing a fork-specific
  patch.
