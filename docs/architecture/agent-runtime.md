# Agent Runtime

Status: Placeholder
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Defines what should be documented about Scient-agent and external-agent execution once implementation begins.
Doc type: Future home

This page will document Scient's agent runtime architecture when it exists.

The accepted high-level foundation and ownership boundary currently lives in
`decisions/ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md`.
The proposed implementation sequence and identity-isolation requirements live
in `../planning/scient-and-external-agents-implementation-plan.md`.
This file remains a placeholder until the first vertical slice validates a
defensible runtime contract.

Document here:

- Scient-agent and external-agent selection and integration
- Scient's internal inherited-core versus owned-addition maintenance boundary
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
