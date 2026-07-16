# Agent Runtime

Status: Placeholder
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Defines what should be documented about PapiLab agent execution once implementation begins.
Doc type: Future home

This page will document PapiLab's agent runtime architecture when it exists.

The accepted high-level foundation and ownership boundary currently lives in
`decisions/ADR-0001-synara-opencode-foundation-and-papilab-ownership-boundary.md`.
This file remains a placeholder until the first vertical slice validates a
defensible runtime contract.

Document here:

- executor selection and integration
- tool contracts
- filesystem and terminal boundaries
- approval flows
- audit logs
- checkpoints and rollback behavior
- safety constraints for scientific changes

Do not use as:

- accepted agent runtime architecture
- implemented executor contract
- provider-specific session model
