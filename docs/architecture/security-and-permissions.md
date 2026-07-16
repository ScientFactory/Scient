# Security And Permissions

Status: Draft
Owner: Yaacov
Last updated: 2026-06-27
Purpose: Defines PapiLab's early security, trust-boundary, and permission principles before implementation-specific architecture exists.
Doc type: Architecture direction

## Document Rules

This document defines security and permission principles for the future PapiLab architecture. It does not describe implemented authorization, accepted compliance posture, account architecture, sync protocol, cloud provider, or runtime sandbox.

Do not use this document as institutional compliance evidence. University, hospital, enterprise, grant, or regulated-data claims must be backed by later implementation, controls, tests, policies, and operating procedures.

Use it to evaluate architecture proposals, agent-tool contracts, local-first project design, cloud mirroring, sharing, and implementation plans. Update it when PapiLab has real architecture decisions or implemented security behavior.

## Current State

The current repo is documentation-first. PapiLab does not yet have an implemented app, auth system, sync engine, local sandbox, project permission model, or cloud collaboration model.

The principles below are adapted from the old PapiLab_2026 security baseline, but they are rewritten for the new local-first, cloud-mirrored product direction.

## Security Position

PapiLab will hold sensitive research material: sources, PDFs, notes, datasets, code, analysis outputs, manuscript drafts, memory, collaborator comments, agent logs, and potentially unpublished results.

Security must protect the research project as the durable center of work. Local files, local structured state, cloud mirrors, shared projects, agent tools, external imports, and publication exports must not become competing trust boundaries with unclear authority.

PapiLab should be designed so future institutional security review is possible without rewriting the product foundation. That means project ownership, identity, permissions, auditability, data lifecycle, cloud mirroring, local execution, agent tooling, and external integrations need explicit boundaries from the beginning, even when the first implementation is intentionally smaller.

## Sensitive Data Classes

PapiLab should assume that real projects may contain sensitive material, including:

- unpublished manuscripts, hypotheses, results, and intellectual property,
- licensed or institution-provided PDFs and source material,
- human-subject, clinical, patient-derived, or otherwise regulated research data,
- datasets, scripts, credentials, API keys, and external-service tokens,
- collaborator identities, comments, assignments, decisions, and review history,
- agent prompts, context receipts, tool calls, run logs, memory, and generated artifacts.

Before implementation, PapiLab must decide which sensitive data classes are supported, unsupported, or institution-gated at each product maturity level. Unsupported sensitive data should be clearly excluded rather than accidentally accepted by silence.

## Threat Sources To Model

Security design should consider at least these threat sources:

- mistaken, over-permissioned, compromised, or malicious collaborators,
- revoked collaborators or devices that still have stale local or offline access,
- stolen or shared devices containing local projects, exports, logs, or credentials,
- malicious imported files, PDFs, datasets, scripts, notebooks, citations, or source metadata,
- prompt injection or data exfiltration attempts hidden inside papers, project files, or external content,
- compromised, confused, or over-authorized agents, tools, models, connectors, or local executors,
- accidental disclosure through agent prompts, context receipts, logs, memory, exports, support bundles, or cloud mirrors,
- supply-chain risk from packages, parsers, model providers, sync engines, and external integrations.

## Core Invariants

### Permission Scope Belongs To PapiLab

The model does not decide what it may read, write, export, delete, share, or run.

Agent tools, local executors, cloud services, collaborators, and external integrations must operate inside permission scope enforced by PapiLab's architecture.

### AI Tools Do Not Widen Authority

Prompt output, model suggestions, tool-call requests, generated paths, generated identifiers, generated URLs, and generated commands are untrusted inputs.

An agent request to read a file, update evidence, edit a manuscript, run code, modify citations, change memory, or access a shared project must pass through explicit permission and project-context checks before it affects trusted state.

### Unknown Data Should Stay Unknown

Missing metadata, uncertain source identity, parser failures, low-confidence extraction, ambiguous duplicate matches, stale analysis outputs, and incomplete citation data should remain visible as uncertainty.

PapiLab should not silently invent authoritative values to make project state look cleaner than it is.

### Local Ownership Does Not Remove Trust Boundaries

Local-first does not mean every local operation is automatically safe.

The product still needs boundaries between:

- project files and non-project files,
- trusted project state and imported files,
- generated artifacts and accepted project truth,
- local-only state and cloud-mirrored state,
- personal project work and shared collaborator work,
- agent-readable context and private or out-of-scope material,
- executable code and ordinary research artifacts.

### Client-Visible Values Are Not Authority

Do not treat any of the following as sufficient proof of access or intent:

- project IDs, source IDs, file paths, run IDs, or artifact IDs supplied by a client,
- possession of a local path, URL, or exported file,
- hidden UI controls,
- route or command names,
- model-generated identifiers,
- cached context,
- sync metadata without project permission checks.

### High-Impact Actions Need Review And Recovery

High-impact changes should have permission levels, review states, provenance, and recovery paths. This includes destructive file operations, source or evidence mutation, manuscript edits, citation changes, memory writes, code execution, analysis outputs, figure updates, project sharing, cloud mirroring, and export or deposit actions.

The exact approval model belongs in future architecture and implementation docs, but the product must not rely on silent agent mutation for high-impact work.

### Security Findings Need Durable Follow-Through

Security-sensitive fixes should be accompanied by adversarial regression tests or an explicit reason why a different proof is stronger.

Repeated security findings should become durable repo guidance: architecture direction, implementation rules, tests, runbooks, or accepted decisions. A chat discussion alone is not durable security policy.

## Security Areas That Need Explicit Design

These areas need focused design before they become implementation commitments:

- identity, authentication, device identity, session management, and access revocation,
- project roles, permissions, invitations, membership, sharing, and collaborator attribution,
- local project boundaries, including which files are inside or outside agent-readable scope,
- cloud mirror boundaries, including offline behavior, conflicts, revocation, deletion, and restore,
- encryption and key management for local projects, cloud mirrors, backups, exports, and secrets,
- local code execution, process isolation, network access, filesystem access, and tool permissions,
- agent context capture, prompt-injection resistance, tool-call mediation, and model-output distrust,
- audit logs, provenance, review states, checkpoints, rollback, and evidence of high-impact changes,
- import, export, deposit, archive, and external integration trust boundaries,
- retention, deletion, portability, account closure, and institutional handoff behavior,
- vulnerability disclosure, incident response, security review, and regression-test expectations.

## Policy Transfer From PapiLab_2026

Carry forward these old-app lessons:

- authentication is not authorization,
- AI tools do not get to widen authority,
- request or client metadata is not proof of identity,
- privileged storage or database access makes app-layer validation critical,
- unknown data should stay unknown,
- model-generated tool calls and identifiers are untrusted,
- security fixes need adversarial regression coverage.

Do not carry forward old implementation-specific assumptions as product truth:

- Better Auth as the required identity authority,
- Supabase-specific storage or service-role rules,
- Vercel route or cron assumptions,
- hosted multi-tenant SaaS as the only trust model,
- old route names, database models, or middleware structure.

## Open Questions

- What is the first local project permission model?
- How does PapiLab distinguish project files from out-of-scope local files?
- Which agent actions require approval, and which can run under pre-approved scopes?
- How should cloud mirroring represent device identity, project membership, revocation, and conflict state?
- What is the minimum safe sandbox for local code execution?
- How should sensitive project memory be scoped across projects, users, devices, and cloud mirrors?
- Which sensitive data classes are explicitly supported, unsupported, or institution-gated in the first product versions?
- What account, device, and organization model is needed for university or lab teams without making the first product enterprise-heavy?
- Should PapiLab support institution-managed identity such as single sign-on early, later, or only after a specific partnership requires it?
- What encryption and key-management posture is required for local projects, cloud mirrors, backups, exports, and shared projects?
- What audit events must be durable enough for institutional review, and which logs are only developer diagnostics?
- How are prompts, context receipts, agent logs, memory, and generated artifacts redacted, retained, exported, or deleted?
- How should secrets, API keys, database credentials, and external connector tokens be stored, scoped, rotated, and excluded from agent-visible context?
- What is the first vulnerability disclosure and incident-response process once external users or institutions depend on PapiLab?
