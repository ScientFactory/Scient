# Scient And External Agents Implementation Plan

Status: Proposed
Owner: Yaacov
Created: 2026-07-17
Last updated: 2026-08-06
Purpose: Defines the end-to-end implementation plan for one owned Scient agent, its still-open native-foundation selection, transitional specialist workers, and independently connected external agents.
Doc type: Planning note

## Goal

Build the **Scient agent** as one owned native first-party research agent of the
Scient app while preserving independently connected external agents.

Scient is one product, runtime identity, configuration and authority boundary,
release, and update responsibility. Its native source foundation remains
unselected between the refreshed candidates evaluated in
[`scient-agent-foundation-and-capability-strategy-2026-08-06.md`](../research/source-evaluations/scient-agent-foundation-and-capability-strategy-2026-08-06.md).
OpenCode is the historical incumbent; Pi is a serious challenger. Neither this
plan nor that research report selects the future foundation.

Scient's long-term target is one first-party agent that owns its essential
scientific, research, coding, browser, analysis, memory, skill, safety, and
recovery behavior. Scient may derive that agent from several open-source
systems and selectively internalize useful capabilities over time. Source
lineage and internal modules do not create separate user-visible agents or
separately authoritative engines.

Early versions may delegate bounded work to specialist workers such as
OpenCode, Hermes, Codex, or another qualified runtime. Workers are optional
acceleration, fallback, and comparison mechanisms. They must not own Scient's
scientific semantics, become required hidden product centers, or prevent the
native agent from remaining useful on its own.

External OpenCode remains an independent external agent. It must never be
removed, renamed into Scient, silently redirected to Scient, or used as
Scient's credential and state store. A user must be able to use Scient and
external OpenCode on the same machine and in the same Scient installation
without either one reading, overwriting, updating, or impersonating the other.

Codex, Claude, Droid, Cursor, Antigravity, Grok, Kilo, Pi, and other supported
external agents remain separate user choices as well. A separately connected
external agent is distinct from a bounded worker that Scient may invoke behind
its own operation boundary. Their account, subscription, API, binary, endpoint,
configuration, and session paths remain owned by those connections.

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

1. Is Scient consistently represented as one owned first-party agent rather
   than a thin shell over separately authoritative engines?
2. Does the implementation-time gate compare fresh official candidate sources
   instead of replaying the preserved OpenCode checkout by default?
3. Do Scient and external OpenCode remain separate in identity, credentials,
   processes, storage, sessions, settings, updates, and user experience?
4. Are all inherited external agents preserved without falsely claiming that
   every CLI, subscription, or version is already certified?
5. Does Scient own scientific meaning and durable project records above every
   agent session?
6. Can Pi-, OpenCode-, Hermes-, Codex-, Goose-, OpenHands-, or other-derived
   capabilities improve one Scient agent without turning it into an
   engine-switching shell?
7. Does settings and thread migration preserve existing users' defaults,
   hidden-agent preferences, paths, endpoints, credentials, and history?
8. Do transitional workers remain bounded, replaceable, non-canonical, and
   unnecessary for basic native-agent usefulness?
9. Does the sequence keep the first vertical slice bounded rather than blocking
   it on certification of every candidate or external agent?

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
Refresh all serious native-foundation candidates and reconcile the
desktop-agent contract only when the post-desktop-foundation agent lane opens.
The foundation gate must complete before native-runtime implementation. Later
phases may add bounded workers and certify external-agent paths without making
them prerequisites for the first useful Scient workflow.
Promote stable runtime contracts into
`../architecture/agent-runtime.md` only after running implementation evidence
exists.

## Decision Summary

The Scient app supports two product-level agent categories:

1. **Scient**: the product's one owned first-party research agent, built from a
   freshly selected source foundation and Scient-owned capabilities.
2. **External agents**: external agent products that users connect through
   their own installation, account, subscription, API, endpoint, or local
   configuration.

Source lineage does not merge product identities:

- The current `scient-agent` history is OpenCode-derived evidence; the future
  refreshed native foundation remains unselected.
- External OpenCode is not a mode, account, or engine inside Scient.
- Scient releases update the selected inherited core, absorbed capabilities,
  and owned additions as one agent.
- External OpenCode updates through its own installation and connection path.
- Capabilities derived from Pi, OpenCode, Hermes, Codex, Goose, OpenHands, or
  another source may become part of Scient after source, license, safety, and
  product review.
- Specialist workers may temporarily or optionally execute bounded tasks, but
  their state and identity do not become Scient's product center.
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
`../scient-agent/` is historical incumbent source evidence. Its repository and
maintenance-verifier identity are Scient-owned, but it is not current
capability evidence or an automatic future bootstrap base. The 2026-08-06
foundation investigation found that its Scient-specific history is primarily
governance, identity, CI, release-lane, and small inherited-product work rather
than an implemented native scientific agent. Scient-agent packaging, private
state isolation, scientific capabilities, and the future refreshed foundation
remain unimplemented and unselected.

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
| Scient | The product's one owned first-party research agent. Its refreshed native source foundation remains unselected. |
| External agent | An external agent product connected through a user-owned installation, account, subscription, API, or endpoint. |
| Specialist worker | A bounded runtime Scient may invoke for a particular capability. It is not a second product center and does not own scientific truth. |
| Agent connection | One configured instance of an agent, including stable identity, health, capabilities, and non-secret configuration references. |
| Execution target | The Scient profile or external-agent connection selected for a task. |
| Native source foundation | The official source lineage selected through the future foundation gate and then owned and evolved as part of Scient. |
| Inherited Scient core | Source retained from the selected foundation and kept traceable for attribution and deliberate upstream updates. It is not a separate engine or product. |
| Scient-owned additions | Scientific capabilities, tools, policies, identity, integration, and product behavior owned directly by Scient inside Scient. |
| Access source | How model or service access is funded and authenticated: external subscription/account, bring-your-own key, or Scient-managed access. |
| Model | The selected inference model, distinct from agent and access source. |

The inherited source uses “provider” for several concepts. Do not begin with a
repository-wide rename. Treat `ProviderKind` as compatibility vocabulary for
existing external agents while introducing Scient-owned execution-target and
connection contracts above it.

Use **Scient** as the shared public product name. Technical and planning text
may use **Scient agent**, **Scient Agent**, or `ScientAgent` to distinguish the
native agent from the Scient app; these are qualifiers rather than separate
public brands. Use “Scient agent gateway” only for the Scient-owned execution
boundary. Use “portable project agent guidance” for `AGENTS.md` content.

## Non-Negotiable Scient And External OpenCode Separation

| Surface | Scient | External OpenCode |
|---|---|---|
| Product identity | Scient | OpenCode |
| Durable internal identity | Brand-neutral Scient first-party-agent ID | Existing external `opencode` identity |
| User choice | “Scient” with a Scient first-party explanation | “OpenCode” under external agents |
| Source/runtime | One Scient-owned agent build from the selected native foundation and absorbed capabilities | User-selected or externally installed OpenCode binary/server |
| Process lifecycle | Started and supervised as Scient | Existing OpenCode adapter lifecycle |
| Home/config directory | Dedicated Scient location | Existing external OpenCode location and Scient connection settings |
| Endpoint/password | Scient-owned internal endpoint and secret handling if needed | Existing `openCodeServerUrl` and `openCodeServerPassword` path |
| Credentials | Scient-specific access configuration | User's external OpenCode/provider credentials |
| Sessions/transcripts | Scient execution state, non-canonical | External OpenCode execution state, non-canonical |
| Skills/plugins/tools | Scient-owned catalog and policy over its selected core and native capabilities | External OpenCode-discovered catalog and policy |
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
- Never expose a second OpenCode-branded runtime as though it owns or configures
  the native Scient agent. A bounded OpenCode worker, if selected, remains an
  implementation adapter under Scient authority rather than Scient's identity
  or state store.
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
            +-----------------------+--------------------------+
            |                       |                          |
            v                       v                          v
Scient native agent          Specialist-worker bridge   External-agent bridge
  - one identity/release       bounded optional jobs       user-selected products
  - selected foundation         +--> coding worker          +--> OpenCode
  - absorbed capabilities       +--> research worker        +--> Codex / Claude
  - Scient policy/tools         +--> sandbox/remote         +--> Droid / others
```

The inherited generic chat host may continue to call provider services directly
during migration. The Scient gateway becomes mandatory for operations that
read or propose changes to canonical Scient project state. The native agent
owns task planning and final synthesis even when a worker executes a bounded
subtask.

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

Keeps inherited foundation modules, directly adapted source, and Scient-owned
modules identifiable where practical. Scient-specific capabilities should live
in Scient-owned modules or stable seams first. Core changes are allowed when a
demonstrated product, safety, quality, or reliability requirement demands them.
Direct adaptations retain provenance, license, notice, tests, and an explicit
update strategy.

This boundary must not create two launchers, two settings surfaces, two session
systems, or an engine selector inside Scient.

### Specialist-worker task envelope

Provides an exact objective, selected context receipt, project and workspace
scope, capability grant, credential audience, time/cost/concurrency limits,
cancellation and revocation state, parent-run lineage, and required output
contract. A worker returns typed outcomes, evidence, artifacts, patches, logs,
and uncertainty. It cannot accept scientific state, widen its authority, or
turn its memory/session database into Scient history.

The worker bridge should allow different qualified coding, research, browser,
or remote-execution workers without exposing an engine selector as the native
Scient product. Recursive delegation is denied by default and requires an
explicit bounded capability.

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
3. Record OpenCode as historical incumbent source evidence while keeping the
   refreshed native-foundation decision open.
4. Update the first vertical-slice plan to use Scient.
5. Separate agent selection from access-source and model selection.
6. Keep `agent-runtime.md` a placeholder until implementation validates the
   runtime contract.
7. Record the owner-approved long-term target of one native Scient agent that
   may absorb capabilities from multiple sources, with specialist workers only
   as bounded transitional, fallback, or optional paths.

Exit evidence: active product, architecture, planning, and source-research docs
use one coherent meaning for Scient.

### Foundation Gate — Select The Native Source Before Runtime Work

This gate runs when the post-desktop-foundation Scient-agent lane opens and
must complete before Phase 4 begins. Its evidence process is defined in the
[2026-08-06 foundation investigation](../research/source-evaluations/scient-agent-foundation-and-capability-strategy-2026-08-06.md).

1. Fetch the latest official stable Pi and OpenCode sources; admit another
   candidate only with equivalent source-depth evidence.
2. Recheck license, notices, security, release cadence, protocol stability,
   provider support, and breaking changes. Do not use today's revisions or the
   preserved local OpenCode fork as automatic pins.
3. Implement the same minimal Scient-operation adapter in each finalist through
   supported SDK or extension seams before broad core changes.
4. Run deterministic lifecycle, permission, cancellation, revocation, recovery,
   and uncertain-effect tests plus same-model real coding and scientific tasks.
5. Prove desktop embedding and a simulated remote client without making native
   session state canonical.
6. Measure core changes, coupling, packaging, resource cost, event fidelity,
   provider behavior, and the amount of generic infrastructure Scient must own.
7. Rehearse a real upstream update after the adapter exists.
8. Select the native foundation and initial specialist workers as separate
   decisions. Record a material foundation change through an ADR or amendment
   before implementation.

Exit evidence: one explicitly accepted source foundation, exact fresh baseline,
proven update path, bounded Scient adapter, and separately dispositioned worker
candidates. Zero selected workers is valid.

### Phase 1 — Trace And Freeze The Existing Host Baseline

1. Record exact parent, desktop-fork, historical agent-source, and freshly
   inspected foundation-candidate revisions.
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
2. Build and package one Scient binary/runtime from the source foundation
   accepted by the Foundation Gate. Internal inherited names may remain
   temporarily where changing them would create needless upstream conflict, but
   no separately authoritative foundation product is exposed underneath Scient.
3. Create dedicated Scient configuration, home, logs, cache, sessions,
   endpoint/IPC, secrets, and process supervision.
4. Record the inherited foundation baseline, every directly adapted source,
   and all Scient-owned source changes.
5. Prevent Scient from discovering or inheriting external OpenCode settings or
   credentials.
6. Report Scient product version and inherited-source revisions diagnostically
   without presenting the foundation as a user-configurable engine.
7. Put scientific tools and capabilities in Scient-owned modules or seams first;
   patch inherited core only for demonstrated gaps.
8. Release and update Scient as one agent. Do not independently update an
   internal “engine.”

Exit evidence: Scient runs as one owned agent and coexists with external
OpenCode with isolated identity and state on clean-install and upgraded
machines.

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

### Phase 8 — Add Bounded Workers And Internalize Capabilities Deliberately

1. Begin only after the native Scient path and gateway work without a worker.
2. Evaluate the highest-value bounded worker need rather than integrating every
   candidate: for example OpenCode or Codex for substantial coding, Hermes for
   broad research, Goose for ACP/MCP comparison, or OpenHands-style execution
   for remote workspaces.
3. Prove the specialist-worker task envelope, authority, cancellation,
   isolation, event fidelity, recovery, performance, and maintenance cost.
4. Keep each worker optional, replaceable, separately versioned, and unable to
   define canonical Scient state.
5. Identify recurring capabilities worth implementing in the native Scient
   agent. Internalize them through maintained packages, bounded adaptations,
   reimplementation, or deliberate core changes after product, license,
   security, provenance, and update review.
6. Do not introduce an engine selector or a hidden multi-agent product center
   merely to complete a comparison.
7. A user-selected external connection remains separately named, configured,
   updated, and certified even if the same upstream also supplies a bounded
   internal worker or an absorbed capability.

Exit evidence: explicit keep/adopt/reimplement/defer/reject decisions for each
evaluated worker and capability, with no change to Scient's identity or
canonical records.

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
5. Scient's inherited native-foundation core;
6. directly adapted capability-source modules and worker adapters;
7. Scient-owned capabilities, identity, and policy; and
8. Scient packaging, release, and updates.

Every native-foundation or adapted-source update must run the relevant source
lineage checks, external-registry invariant, settings migrations,
Scient/external-OpenCode isolation suite, gateway and worker contracts, and
installed-app smoke. A Scient update, worker update, and external-agent update
remain independent events.

Exit evidence: a repeatable sync/release report with exact revisions,
divergence, tests, migrations, and deliberately retained patches.

## Verification Matrix

| Verification | Scient | Selected workers | External OpenCode | Other external agents |
|---|---:|---:|---:|---:|
| Target/registry presence | Required | Required | Required | Required |
| Settings round trip | Required | Required | Required | Required |
| Identity and state isolation | Required | Required | Required | Required |
| Hermetic executor contract | Required | Required | Required | Required |
| Live install/detection | Required | Required before use | Required | Before certification |
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
- native-agent/worker identity, process, path, credential, session, and state
  isolation;
- Scient/external-OpenCode process, path, environment, endpoint, and state
  isolation;
- project-record reconstruction and recovery;
- UI selection, status, handoff, accessibility, and error states;
- packaging and clean-install/upgrade behavior; and
- live smokes where real external behavior cannot be proven hermetically.

## Security, Privacy, And Trust

- External authentication remains owned by the external product unless an
  explicit Scient-managed path is implemented.
- The native Scient agent and selected workers must not scrape, duplicate, or
  migrate external-agent subscription tokens.
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
- Scient version, selected foundation revision, and directly adapted source
  revisions, when applicable;
- worker identity, version, capability grant, and parent-run lineage, when
  applicable;
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
4. Add a specialist worker only after the native path works and that worker's
   bounded contract is certified.
5. Certify external agents one at a time.
6. Make Scient the default only after onboarding, recovery, update, and failure
   behavior are proven and the owner approves that separate product decision.
7. Never hide or delete external agents to promote Scient adoption.

## Stop And Reconsider Conditions

Pause if implementation appears to require:

- reusing external `opencode` identity for Scient;
- representing any foundation or worker as a separately authoritative engine
  beneath Scient;
- sharing credentials, homes, endpoints, sessions, or updates between Scient
  and external OpenCode;
- treating an agent transcript/database as canonical Scient state;
- a repository-wide `ProviderKind` rename before the boundary works;
- modifying every external-agent adapter before the Scient path works;
- certifying every agent before the first scientific slice;
- allowing an agent to define scientific objects or permission scope;
- changing canonical records to accommodate a foundation or worker;
- making an essential first Scient workflow depend on a worker before the
  native path is useful and recoverable; or
- silently changing existing defaults, settings, threads, or handoffs.

## Pull Request And Review Lanes

Prefer narrow changes in this order:

1. Canonical documentation reconciliation.
2. Fresh native-foundation comparison and accepted selection record.
3. Existing-host trace, compatibility inventory, and characterization tests.
4. Execution-target/executor contracts with deterministic fake.
5. External-registry preservation and settings migrations.
6. Scient identity, owned runtime packaging, and isolated state.
7. Scientific gateway and first bounded native Scient workflow.
8. Scient/external-OpenCode coexistence proof.
9. One bounded specialist-worker proof when justified.
10. Settings, selection, status, and handoff UI.
11. Per-agent compatibility certification.
12. Capability internalization work, one coherent capability at a time.

Do not mix upstream synchronization, broad inherited refactors, Scient domain
behavior, Scient core changes, and UI redesign in one review lane.

## Acceptance Criteria

This program is complete only when:

- all inherited external adapters remain present unless a separate explicit
  product decision removes one;
- Scient is a first-class option distinct from every external agent;
- the native foundation was selected from fresh evidence and its exact lineage,
  license, update path, and deliberate divergences remain auditable;
- Scient is implemented and released as one owned agent, not a shell plus a
  separately authoritative foundation or worker;
- external OpenCode remains independently selectable and configurable;
- Scient and external OpenCode have separate IDs, credentials, configuration,
  processes, homes, endpoints, sessions, logs, and updates;
- both coexist and complete the same bounded task;
- failure, sign-out, update, or removal of one does not disable the other;
- existing settings and threads migrate losslessly and idempotently;
- project operations pass through Scient-owned context, permission, proposal,
  review, provenance, and recovery boundaries;
- project truth is reconstructable without any agent's session database;
- the native Scient path remains useful and recoverable without an optional
  worker, and any selected worker is bounded, replaceable, and non-canonical;
- agent, access source, provider, and model are visible and not conflated;
- compatibility claims are backed by the verification matrix;
- no secrets appear in project records or ordinary diagnostics;
- Scient, native-foundation, adapted-source, worker, external-agent, and desktop
  updates are separately controlled and regression-tested; and
- useful capabilities from multiple sources can be internalized over time
  without changing Scient's identity or canonical Scient records.

## Explicit Exclusions

This plan does not authorize:

- removing an inherited external-agent adapter;
- replacing external OpenCode with Scient;
- copying external credentials or subscriptions into Scient;
- promising compatibility before verification;
- selecting Pi, OpenCode, Hermes, or another foundation from this plan alone;
- bundling OpenCode, Hermes, Codex, Goose, OpenHands, or another worker without
  its own bounded proof and distribution decision;
- implementing the complete scientific schema;
- building cloud sync, collaboration, billing, or mobile execution;
- building a full automatic model router;
- mass-renaming inherited provider internals;
- deeply changing inherited foundation core without a demonstrated Scient need;
- implementing Scient as a generic engine-switching shell; or
- placing any optional specialist worker on the first native workflow's
  critical path.

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
