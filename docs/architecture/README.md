# Architecture Documentation

Status: Active
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-08-02
Purpose: Defines where Scient architecture direction, future architecture homes, and decisions belong.
Doc type: Repo orientation

Architecture docs explain how Scient should be structured and why. They must clearly distinguish proposal, accepted direction, implementation candidate, and current implementation.

Current documents:

- `technology-stack.md` - current stack direction.
- `project-format.md` - future home for the Scient project format.
- `local-first-sync.md` - future home for local-first and sync architecture.
- `collaboration-model.md` - future home for collaboration architecture.
- `agent-runtime.md` - future home for detailed Scient and external-agent runtime
  architecture; ADR-0005 preserves the high-level agent boundary established
  by superseded ADR-0001.
- `security-and-permissions.md` - early security, trust-boundary, and permission principles.
- `decisions/` - accepted architecture decision records covering the inherited
  foundations, Scient-owned scientific boundary, standalone source-repository
  ownership, selective upstream authority, built-in skills activation, and the
  shared operation/capability/provenance boundary, plus the accepted T3-derived
  successor-foundation decision. ADR-0001 remains as the superseded historical
  initial-foundation record.
