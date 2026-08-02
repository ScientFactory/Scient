# Scient And External Agents Implementation Plan

Status: Proposed
Owner: Yaacov
Created: 2026-07-17
Last updated: 2026-08-02
Purpose: Defines the end-to-end implementation plan for the Scient agent and for preserving independently connected external agents.
Doc type: Planning note

## Goal

Build the **Scient agent** as the native first-party research agent of the
Scient app while preserving every external-agent connection inherited from the
Synara application foundation.

Scient is the owned OpenCode-derived agent itself. It is one product, codebase,
runtime identity, process lifecycle, configuration, session system, release,
and update channel. Scient must not be implemented or described as a Scient
agent shell that launches a separately identified OpenCode engine.

Inside Scient's source, inherited OpenCode core and Scient-owned capabilities,
integrations, identity, and product behavior should remain distinguishable where
practical. That separation exists only to support ownership, review, selective
upstream updates, and deliberate divergence. It is not a separate user-visible
agent, engine choice, configuration, process, or product.

External OpenCode remains an independent external agent. It must never be
removed, renamed into Scient, silently redirected to Scient, or used as
Scient's credential and state store. A user must be able to use Scient and
external OpenCode on the same machine and in the same Scient installation
without either one reading, overwriting, updating, or impersonating the other.

Codex, Claude, Droid, Cursor, Antigravity, Grok, Kilo, Pi, and other supported
external agents remain separate choices as well. Their account, subscription,
API, binary, endpoint, configuration, and session paths remain owned by those
connections.

For scientific project work, the product-owned project layer—not the Scient
agent, external OpenCode, or another agent—owns the task intent, selected
project context, permission scope, proposed change, review decision, provenance,
and recovery record. Agents execute bounded work behind that boundary.

## Naming Status

ScientFactory is the company identity. Scient is the public name for both the
implemented app and its planned native first-party agent. In this
technical plan, **Scient** refers to the agent unless **Scient app** is stated.
`../product/scient-product-identity.md` owns the accepted vocabulary, and
`papilab-to-scient-rename-execution-plan.md` owns the identity migration.

Public trademark, marketplace, package, domain, and international brand
clearance remains outstanding. Complete that clearance before public release.
Until clearance is complete:

- use **Scient** as the shared public app and native-agent name;
- use a brand-neutral durable internal identity such as
  `first-party-agent` so a legal rename does not require project-record,
  settings, or migration rewrites;
- do not reuse `opencode` as Scient's durable identity; and
- do not infer product completion from the owned `scient-agent` repository
  name. The repository establishes the source boundary; running evidence must
  establish the native product identity and behavior.

## Review Brief

Review this plan against these questions:

1. Is Scient consistently represented as the owned OpenCode-derived agent
   itself, never as a wrapper around a separate OpenCode engine?
2. Can Scient's inherited OpenCode core still accept selected upstream changes
   without constraining Scient's product direction?
3. Do Scient and external OpenCode remain separate in identity, credentials,
   processes, storage, sessions, settings, updates, and user experience?
4. Are all inherited external agents preserved without falsely claiming that
   every CLI, subscription, or version is already certified?
5. Does Scient own scientific meaning and durable project records above every
   agent session?
6. Can Goose-derived capabilities later improve Scient without turning Scient
   into an engine-switching shell?
7. Does settings and thread migration preserve existing users' defaults,
   hidden-agent preferences, paths, endpoints, credentials, and history?
8. Does the sequence keep the first vertical slice bounded rather than blocking
   it on certification of every external agent?

## Authority And Scope

This document owns the proposed implementation sequence, migration safeguards,
verification matrix, and acceptance criteria for Scient and external agents.
It does not replace:

- the accepted naming system in `../product/scient-product-identity.md`;
- the accepted product direction in `../product/PRD.md`;
- the accepted ownership decision in
  `../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md`, which
  preserves the agent boundary established by superseded ADR-0001;
- the product sequence in `product-roadmap.md`; or
- the active desktop foundation sequence in
  `t3-foundation-migration-plan.md`.

This plan remains proposed and the native Scient agent remains unimplemented.
Refresh the OpenCode foundation and reconcile the desktop-agent contract only
when the post-foundation agent lane opens. Later phases expand and certify
external-agent paths after Scient completes the first bounded Scient workflow.
Promote stable runtime contracts into
`../architecture/agent-runtime.md` only after running implementation evidence
exists.

## Decision Summary

The Scient app supports two product-level agent categories:

1. **Scient**: the product's first-party research agent, owned and evolved from the
   OpenCode fork.
2. **External agents**: external agent products that users connect through
   their own installation, account, subscription, API, endpoint, or local
   configuration.

Source lineage does not merge product identities:

- Scient is OpenCode-derived but is not external OpenCode.
- External OpenCode is not a mode, account, or engine inside Scient.
- Scient releases update Scient, including its inherited core and owned
  additions, as one agent.
- External OpenCode updates through its own installation and connection path.
- Goose-derived capabilities may later become part of Scient after review.
- A future external Goose option would remain separate from Scient.

## Current Implementation Truth

At maintained desktop-source revision
`bd2a6eed6243b13fc1423b21b2454ae060bce5c7`, inspected on 2026-07-18, the
inherited host contains a shared provider adapter contract and adapters for:

- Codex;
- Claude (`claudeAgent` internally; the Claude Code CLI path);
- Cursor;
- Antigravity;
- Grok;
- Droid;
- Kilo;
- OpenCode; and
- Pi.

The main current surfaces are:

- `packages/contracts/src/orchestration.ts`, which defines inherited
  `ProviderKind` values;
- `apps/server/src/provider/Services/ProviderAdapter.ts`, which defines the
  shared adapter behavior;
- `apps/server/src/provider/Layers/ProviderAdapterRegistry.ts`, which registers
  the existing adapters;
- `packages/contracts/src/providerRuntime.ts`, which normalizes runtime events;
- `apps/web/src/appSettings.ts`, which persists provider visibility, order,
  defaults, binary paths, and OpenCode settings; and
- `apps/web/src/routes/_chat.settings.tsx`, which exposes provider setup.

Source presence proves these integration paths exist. It does not prove that
every external CLI version, subscription entitlement, account login, remote
endpoint, model, or provider-specific feature currently works. Preserve the
paths first, then certify compatibility honestly per agent.

The owned OpenCode-derived checkout in the workspace sibling
`../scient-agent/` (relative to the Scient repository root), maintained on
`dev` at `67e7f3f0341c7a5bad8d68e0a29f113b450eb02a`, is the accepted
source foundation for the Scient agent. Its repository and
maintenance-verifier identity are Scient-owned while its current runtime
remains upstream-aligned OpenCode source. Scient-agent packaging, private state
isolation, and owned scientific capabilities have not been implemented.

The following are also not yet implemented:

- a Scient execution target;
- a Scient-owned scientific task gateway;
- durable context, run, proposal, decision, and recovery records; or
- a certified external-agent compatibility matrix.

The existing `@scientfactory/project-init` package remains valid and agent-independent.
Its portable `AGENTS.md` guidance is project instruction material, not the
Scient product.

## Product Vocabulary

| Term | Meaning |
|---|---|
| Agent | A user-visible worker such as Scient, Codex, Claude, Droid, or OpenCode. |
| Scient | The product's first-party, owned OpenCode-derived research agent. |
| External agent | An external agent product connected through a user-owned installation, account, subscription, API, or endpoint. |
| Agent connection | One configured instance of an agent, including stable identity, health, capabilities, and non-secret configuration references. |
| Execution target | The Scient profile or external-agent connection selected for a task. |
| Inherited Scient core | OpenCode-derived source retained inside Scient and kept traceable for selective upstream updates. It is not a separate engine or product. |
| Scient-owned additions | Scientific capabilities, tools, policies, identity, integration, and product behavior owned directly by Scient inside Scient. |
| Access source | How model or service access is funded and authenticated: external subscription/account, bring-your-own key, or Scient-managed access. |
| Model | The selected inference model, distinct from agent and access source. |

The inherited source uses “provider” for several concepts. Do not begin with a
repository-wide rename. Treat `ProviderKind` as compatibility vocabulary for
existing external agents while introducing Scient-owned execution-target and
connection contracts above it.

Do not use “Scient Agent” as another product name. Use **Scient**. Use
“Scient agent gateway” only for the Scient-owned execution boundary, not for
the product name. Use “portable project agent guidance” for `AGENTS.md` content.

## Non-Negotiable Scient And External OpenCode Separation

| Surface | Scient | External OpenCode |
|---|---|---|
| Product identity | Scient | OpenCode |
| Durable internal identity | Brand-neutral Scient first-party-agent ID | Existing external `opencode` identity |
| User choice | “Scient” with a Scient first-party explanation | “OpenCode” under external agents |
| Source/runtime | One Scient-owned OpenCode-derived agent build | User-selected or externally installed OpenCode binary/server |
| Process lifecycle | Started and supervised as Scient | Existing OpenCode adapter lifecycle |
| Home/config directory | Dedicated Scient location | Existing external OpenCode location and Scient connection settings |
| Endpoint/password | Scient-owned internal endpoint and secret handling if needed | Existing `openCodeServerUrl` and `openCodeServerPassword` path |
| Credentials | Scient-specific access configuration | User's external OpenCode/provider credentials |
| Sessions/transcripts | Scient execution state, non-canonical | External OpenCode execution state, non-canonical |
| Skills/plugins/tools | Scient-owned catalog and policy over its inherited core | External OpenCode-discovered catalog and policy |
| Logs/cache | Scient namespace | External OpenCode namespace |
| Updates | One deliberate Scient release process | External OpenCode installation/update process |
| Canonical scientific record | Scient project records only | Scient project records only when invoked for a Scient task |

Additional rules:

- Never copy or reuse external OpenCode credentials to initialize Scient.
- Never make Scient depend on the external OpenCode binary path, endpoint,
  password, home, or update setting.
- Never silently migrate an existing thread from external OpenCode to Scient.
- Never let either runtime's database or transcript become canonical Scient
  scientific state.
- Never expose a second OpenCode-branded runtime as though it were a component
  users configure underneath Scient.
- Keep license notices, attribution, and source lineage even when Scient's
  product identity diverges.

## Target Architecture

```text
Scient project operation / task UI
            |
            v
Scient-owned scientific agent gateway
  - task intent and selected project context
  - permissions and filesystem confinement
  - execution-target identity
  - normalized progress and approvals
  - proposed change and review decision
  - provenance and recovery
            |
            +-------------------------------+
            |                               |
            v                               v
Scient                                      External-agent bridge
one owned OpenCode-derived agent              inherited adapter registry
  - one identity/runtime/release               +--> OpenCode
  - inherited core kept traceable               +--> Codex
  - Scient-owned capabilities                   +--> Claude
  - Scient-owned policy and tools                +--> Droid / others
```

The inherited generic chat host may continue to call provider services directly
during migration. The Scient gateway becomes mandatory for operations that
read or propose changes to canonical Scient project state.

## Working Contracts To Introduce

Exact names and schemas remain implementation decisions. The responsibilities
below must exist.

### Execution target descriptor

Distinguishes Scient from an external-agent connection without overloading
`ProviderKind`. It carries a stable target/connection ID. A likely conceptual
shape is:

```text
Scient target:
  category = first_party
  stable id = first-party-agent
  display name = Scient

External target:
  category = external
  stable connection id
  inherited provider kind = codex | claudeAgent | ... | opencode
```

### Executor port

Defines the minimum operations required by the Scient gateway: inspect health
and capabilities, start bounded work, stream normalized events, handle
approval, interrupt, and finish with a typed outcome. Scient implements this
port as one agent. The external-agent bridge adapts existing provider paths.

### Capability declaration

Reports what a target actually supports rather than assuming parity. Cover at
least model discovery, approval, steering, interruption, filesystem tools,
structured proposal output, and recoverable continuation.

### Scientific gateway record boundary

Records responsibility-level fields for task intent, project/context
references, execution target, effective permissions, run status,
proposed-change references, review decision, provenance, and recovery. Do not
invent the complete scientific object model in this work.

### Scient internal source boundary

Keeps inherited OpenCode-derived modules and Scient-owned modules identifiable
where practical. Scient-specific scientific capabilities should live in
Scient-owned modules or stable seams first. Core changes are allowed when a
demonstrated product, safety, or reliability requirement demands them.

This boundary must not create two launchers, two settings surfaces, two session
systems, or an engine selector inside Scient.

### Credential reference boundary

Provides credentials to an execution target through isolated, auditable means
without putting secret values in target descriptors, task records, transcripts,
or project files.

## Backward-Compatible Migration Rules

Before changing schemas or selectors, capture characterization tests for
current settings, thread decoding, and handoff behavior.

The migration must:

1. Continue decoding every current `ProviderKind`, including existing
   deprecated-value migrations.
2. Preserve `defaultProvider`, `hiddenProviders`, provider ordering, custom
   models, binary paths, endpoints, update preferences, and provider-specific
   settings without reinterpretation.
3. Preserve existing thread provider bindings and handoff history.
4. Keep the meaning of durable external `opencode` unchanged.
5. Give Scient a new brand-neutral durable identity.
6. Leave the user's current default unchanged until the user explicitly chooses
   Scient or approves a separately reviewed product migration.
7. Add Scient settings with safe defaults and no dependency on external
   OpenCode settings.
8. Keep the preceding schema decodable for at least one supported migration
   window.
9. Support disabling Scient without making existing threads or external agents
   unreadable.
10. Make migration idempotent and prove rollback from the first release that
    writes the new schema.

## Implementation Sequence

### Phase 0 — Canonical Reconciliation (completed direction work)

1. Name Scient in the PRD and distinguish it from external agents.
2. Preserve the one-agent/one-runtime ownership decision now carried forward
   by ADR-0005 from superseded ADR-0001.
3. Update technology and adaptation docs to describe OpenCode as Scient's source
   lineage rather than a separate engine beneath Scient.
4. Update the first vertical-slice plan to use Scient.
5. Separate agent selection from access-source and model selection.
6. Keep `agent-runtime.md` a placeholder until implementation validates the
   runtime contract.

Exit evidence: active product, architecture, planning, and source-research docs
use one coherent meaning for Scient.

### Phase 1 — Trace And Freeze The Existing Host Baseline

1. Record exact parent, desktop-fork, and OpenCode-source-fork revisions.
2. Trace selection from UI/settings through server configuration, discovery,
   adapter registry, session directory, runtime events, approvals, and
   persistence.
3. Classify each registered adapter as source-present, detectable, installed,
   authenticated, smoke-verified, or project-task-certified.
4. Capture current user-visible names, order, hiding, default, model selection,
   handoff, and maintenance behavior.
5. Add characterization tests before changing schemas or routing.
6. Record which checks require installed CLIs/accounts and which can use fakes.
7. Replace ambiguous user-facing “Scient agent guidance” wording with
   “portable project agent guidance” where it refers to `AGENTS.md`.
8. Preserve `scient-opencode-workspaces` as the external OpenCode scratch root.
   Give the future Scient agent a separate `scient-agent-workspaces` root; do
   not relabel external OpenCode state as native-agent state.

Exit evidence: a source-backed flow map and green baseline tests that detect
accidental removal or reinterpretation of external agents.

### Phase 2 — Introduce Scient-Owned Target And Executor Contracts

1. Add the execution-target union above inherited `ProviderKind`.
2. Add stable connection IDs so multiple future connections do not require
   another identity migration.
3. Define the executor port and capability declaration.
4. Adapt current normalized runtime events without rewriting provider adapters.
5. Implement a deterministic fake executor first.
6. Prove approval, interruption, failure mapping, cleanup, and event ordering.
7. Select permanent code placement from the trace; keep scientific contracts
   out of generic provider modules.

Exit evidence: deterministic tests address Scient and external targets without
treating them as the same kind.

### Phase 3 — Lock In External-Agent Preservation

1. Place the existing registry behind an external-agent bridge rather than
   replacing its adapters.
2. Add a registry invariant containing every current external provider kind.
3. Add round-trip tests for settings, thread bindings, handoffs, custom models,
   and OpenCode server configuration.
4. Preserve external installation, detection, update, and authentication flows.
5. Preserve generic external-agent chat while scientific routing is added.
6. Show honest compatibility status instead of hiding unverified adapters.

Exit evidence: every inherited adapter remains registered and its configuration
round-trips unchanged.

### Phase 4 — Build Scient As One Owned Agent

1. Add Scient as a new first-party execution target, never as an alias for
   `opencode`.
2. Build and package one Scient binary/runtime from the owned OpenCode-derived
   codebase. Internal inherited names may remain temporarily where changing them
   would create needless upstream conflict, but no second OpenCode product is
   exposed underneath Scient.
3. Create dedicated Scient configuration, home, logs, cache, sessions,
   endpoint/IPC, secrets, and process supervision.
4. Record the inherited OpenCode baseline and all Scient-owned source changes.
5. Prevent Scient from discovering or inheriting external OpenCode settings or
   credentials.
6. Report Scient product version and inherited-source revision diagnostically
   without presenting OpenCode as a user-configurable engine.
7. Put scientific tools and capabilities in Scient-owned modules or seams first;
   patch inherited core only for demonstrated gaps.
8. Release and update Scient as one agent. Do not independently update an
   internal “engine.”

Exit evidence: Scient and external OpenCode run concurrently with isolated
identity and state on clean-install and upgraded machines.

### Phase 5 — Put The Scientific Gateway In Front Of Project Work

1. Implement the smallest task-intent and project-context boundary required by
   the active vertical slice.
2. Route the deterministic fake through context, confinement, proposal, review,
   and recovery.
3. Route Scient through the same executor port.
4. Keep native session IDs and transcripts as references or diagnostics, never
   canonical project truth.
5. Reject or pause work when effective permissions exceed approved scope.
6. Keep proposed project mutations reviewable before acceptance.

Exit evidence: the first workflow can be reconstructed from Scient records
after Scient's session state is unavailable.

### Phase 6 — Prove Scient And External OpenCode Together

This is the first dual-path proof because shared lineage exposes accidental
coupling most effectively.

1. Configure Scient and external OpenCode in one Scient installation.
2. Run the same bounded, non-destructive task through each target.
3. Verify different labels, IDs, processes, versions, homes, credentials,
   endpoints, sessions, logs, and update controls.
4. Verify both produce the minimum Scient proposal/provenance envelope despite
   different native events.
5. Verify disabling, signing out of, corrupting, or removing one path does not
   prevent the other from starting.
6. Make handoff explicit and record source/destination target IDs.
7. Verify connecting or updating OpenCode never changes the Scient default, and
   updating Scient never changes external OpenCode.

Exit evidence: automated isolation tests and installed-app smoke prove both
agents coexist independently.

### Phase 7 — Certify External Agents Incrementally

1. Prioritize Codex, Claude, and Droid according to owner decision and available
   accounts.
2. For each agent, verify detection, authentication status, model discovery,
   approvals, interruption, project root, proposal normalization, cleanup,
   reopening, and recovery.
3. Record unsupported capabilities and degrade safely.
4. Continue with Cursor, Antigravity, Grok, Kilo, and Pi without blocking the
   completed Scient path.
5. Never declare project-task support merely because an adapter exists or a
   version command succeeds.

Exit evidence: a maintained compatibility matrix with repeatable contract tests
and dated live-smoke evidence where credentials are required.

### Phase 8 — Evaluate Goose For Scient

1. Begin only after the gateway and Scient path work.
2. Compare Goose capabilities, event fidelity, approval semantics, recovery,
   performance, and maintenance cost through a bounded experiment.
3. Identify capabilities or patterns worth implementing in Scient.
4. Integrate selected behavior through Scient-owned modules or deliberate core
   changes after license and security review.
5. Do not introduce an engine selector or a second hidden Goose runtime as
   Scient's product architecture merely to complete the comparison.
6. If users need external Goose, design it as a separately named connection
   with separate state and certification.

Exit evidence: a keep/adopt/reject decision for each evaluated capability,
without changing Scient's identity or canonical Scient records.

### Phase 9 — Complete The User Experience

1. Separate settings into **Scient** and **External agents**.
2. Keep OpenCode visibly under External agents.
3. Show install, authentication, health, compatibility, and capability state
   without secrets.
4. Separate agent selection from access-source and model selection.
5. Let users select an execution target per task and explicitly set defaults.
6. Explain which subscriptions/accounts belong to external tools and which
   access is managed by Scient.
7. Show handoff context and permissions before transfer.
8. Preserve accessibility, keyboard navigation, reduced motion, and clear error
   recovery.

Exit evidence: a new user can configure and distinguish Scient and external
OpenCode without reading architecture documentation.

### Phase 10 — Establish Release And Upstream Maintenance Lanes

Keep these lanes reviewable:

1. inherited Synara desktop core;
2. Scient desktop/domain modules;
3. narrow desktop integration seams;
4. unavoidable inherited Synara core patches;
5. Scient's inherited OpenCode core;
6. Scient-owned capabilities, identity, and policy; and
7. Scient packaging, release, and updates.

Every upstream sync must run the external-registry invariant, settings
migrations, Scient/external-OpenCode isolation suite, gateway contracts, and
installed-app smoke. A Scient update and an external OpenCode update remain
independent events.

Exit evidence: a repeatable sync/release report with exact revisions,
divergence, tests, migrations, and deliberately retained patches.

## Verification Matrix

| Verification | Scient | External OpenCode | Priority external agents | Remaining external agents |
|---|---:|---:|---:|---:|
| Target/registry presence | Required | Required | Required | Required |
| Settings round trip | Required | Required | Required | Required |
| Identity and state isolation | Required | Required | Required | Required |
| Hermetic executor contract | Required | Required | Required | Required |
| Live install/detection | Required | Required | Required | Before certification |
| Account/auth status | As applicable | As applicable | As applicable | Before certification |
| Model/capability discovery | Required | Required | Required | Before certification |
| Approval and confinement | Required | Required | Required | Before certification |
| Interruption and cleanup | Required | Required | Required | Before certification |
| Proposal normalization | Required | Required | Required | Before certification |
| Reopen and recovery | Required | Required | Required | Before certification |
| Installed-app smoke | Required | Required | Required | Before certification |
| Upstream-sync regression | Required | Required | Required | Required |

Required test layers:

- schema and migration tests;
- adapter characterization and registry-invariant tests;
- execution-target and capability contract tests;
- deterministic fake-executor tests;
- event ordering and failure mapping;
- approval, interruption, cancellation, and orphan-process cleanup;
- filesystem/project-root confinement;
- credential non-leakage;
- Scient/external-OpenCode process, path, environment, endpoint, and state
  isolation;
- project-record reconstruction and recovery;
- UI selection, status, handoff, accessibility, and error states;
- packaging and clean-install/upgrade behavior; and
- live smokes where real external behavior cannot be proven hermetically.

## Security, Privacy, And Trust

- External authentication remains owned by the external product unless an
  explicit Scient-managed path is implemented.
- Scient and Scient must not scrape, duplicate, or migrate external
  subscription tokens.
- Project records may retain non-secret agent identity, model, access-source
  label, version, capability snapshot, timing, and outcome metadata.
- Redact tokens, passwords, authorization headers, and sensitive environment
  variables from logs, receipts, exports, and crash reports.
- Scient computes and enforces permissions for Scient project work; an agent
  request cannot widen them.
- Filesystem access remains inside the selected project and explicitly approved
  external paths.
- Scientific changes remain reviewable and recoverable.
- Agent transcripts and session databases are diagnostic execution state, not
  automatically trusted evidence or scientific history.

## Observability

For each project run, retain non-secret metadata sufficient to diagnose and
reproduce behavior:

- target category and stable connection/profile ID;
- user-visible agent identity;
- Scient version and inherited OpenCode source revision, when applicable;
- external-agent adapter and detected external version, when applicable;
- selected model and access-source label when known;
- capability snapshot and effective permissions;
- normalized lifecycle and approval events;
- proposal, decision, cleanup, and recovery outcomes; and
- native session reference only when safe and useful.

Scient records must show whether a task was accepted, rejected, interrupted,
failed, or recovered without requiring raw native logs.

## Rollout

1. Keep Scient behind an internal feature flag during contract and isolation
   work.
2. Enable owner/developer use after deterministic and installed-app checks pass.
3. Offer Scient explicitly while preserving each user's existing default.
4. Certify external agents one at a time.
5. Make Scient the default only after onboarding, recovery, update, and failure
   behavior are proven and the owner approves that separate product decision.
6. Never hide or delete external agents to promote Scient adoption.

## Stop And Reconsider Conditions

Pause if implementation appears to require:

- reusing external `opencode` identity for Scient;
- representing OpenCode as a separately configured engine beneath Scient;
- sharing credentials, homes, endpoints, sessions, or updates between Scient
  and external OpenCode;
- treating an agent transcript/database as canonical Scient state;
- a repository-wide `ProviderKind` rename before the boundary works;
- modifying every external-agent adapter before the Scient path works;
- certifying every agent before the first scientific slice;
- allowing an agent to define scientific objects or permission scope;
- changing canonical records to accommodate Goose; or
- silently changing existing defaults, settings, threads, or handoffs.

## Pull Request And Review Lanes

Prefer narrow changes in this order:

1. Canonical documentation reconciliation.
2. Existing-host trace, compatibility inventory, and characterization tests.
3. Execution-target/executor contracts with deterministic fake.
4. External-registry preservation and settings migrations.
5. Scient identity, owned runtime packaging, and isolated state.
6. Scientific gateway and first bounded Scient workflow.
7. Scient/external-OpenCode coexistence proof.
8. Settings, selection, status, and handoff UI.
9. Per-agent compatibility certification.
10. Goose capability/architecture evaluation.

Do not mix upstream synchronization, broad inherited refactors, Scient domain
behavior, Scient core changes, and UI redesign in one review lane.

## Acceptance Criteria

This program is complete only when:

- all inherited external adapters remain present unless a separate explicit
  product decision removes one;
- Scient is a first-class option distinct from every external agent;
- Scient is implemented and released as one owned OpenCode-derived agent, not a
  shell plus a separately identified engine;
- external OpenCode remains independently selectable and configurable;
- Scient and external OpenCode have separate IDs, credentials, configuration,
  processes, homes, endpoints, sessions, logs, and updates;
- both coexist and complete the same bounded task;
- failure, sign-out, update, or removal of one does not disable the other;
- existing settings and threads migrate losslessly and idempotently;
- project operations pass through Scient-owned context, permission, proposal,
  review, provenance, and recovery boundaries;
- project truth is reconstructable without any agent's session database;
- agent, access source, provider, and model are visible and not conflated;
- compatibility claims are backed by the verification matrix;
- no secrets appear in project records or ordinary diagnostics;
- Scient and inherited desktop upstream updates are separately controlled and
  regression-tested; and
- useful future Goose capabilities can be added without changing Scient's
  identity or canonical Scient records.

## Explicit Exclusions

This plan does not authorize:

- removing an inherited external-agent adapter;
- replacing external OpenCode with Scient;
- copying external credentials or subscriptions into Scient;
- promising compatibility before verification;
- implementing the complete scientific schema;
- building cloud sync, collaboration, billing, or mobile execution;
- building a full automatic model router;
- mass-renaming inherited provider internals;
- deeply changing inherited OpenCode core without a demonstrated Scient need;
- implementing Scient as a generic engine-switching shell; or
- placing Goose on the first workflow's critical path.

## Documentation Follow-Through After Validation

Once running code proves stable responsibilities:

- promote the durable Scient/external-agent execution contract into
  `../architecture/agent-runtime.md`;
- keep technology roles and validation status in
  `../architecture/technology-stack.md`;
- keep user-facing Scient, external-agent, and access requirements in
  `../product/PRD.md`;
- keep source adoption and upstream-divergence decisions in ADRs and the
  open-source adaptation strategy; and
- keep dated compatibility evidence in lab or quality records rather than
  presenting it as timeless architecture truth.
