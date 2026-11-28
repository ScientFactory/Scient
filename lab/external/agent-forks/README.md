# Agent Forks

Status: Draft
Owner: Scient 001
Created: 2026-07-08
Last updated: 2026-11-28
Purpose: Organizes upstream agent engines and automation systems used in the Scient lab.
Doc type: Planning note

## Role

Agent forks are source checkouts for systems that may provide local execution,
file editing, shell access, tool routing, provider abstraction, recipes, MCP
support, or broader automation behavior.

Current owned source and deferred references:

- `ScientFactory/scient-agent` - Scient Agent, the native Scient agent, built
  from the selected Oh My Pi foundation. Its
  [maintainer guide](https://github.com/ScientFactory/scient-agent/blob/main/SCIENT.md)
  owns isolation and upstream alignments; `scient.json` records its exact
  upstream source. It is a workspace sibling, not a checkout inside this
  directory.
- Goose - deferred broader-agent, automation, desktop, and MCP/source research;
  no local checkout is retained currently.

## Rules

- Treat external projects as engines or references, not Scient's product
  center. The owned `scient-agent` repository remains a separate source
  foundation with the product boundary defined by Scient architecture.
- Preserve the parent [source lock](../sources.lock.md) as tested historical
  evidence; its OpenCode pin is not current Scient Agent provenance.
- Build Scient adapters in `../../scient-bridge/` unless testing a fork-specific
  patch.
