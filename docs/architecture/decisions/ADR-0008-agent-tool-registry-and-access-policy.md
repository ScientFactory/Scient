# ADR-0008: Agent Tool Registry And Access Policy

Status: Proposed
Owner: Yaacov
Created: 2026-08-29
Last updated: 2026-08-29
Purpose: Proposes one provider-independent registry, capability policy, projection boundary, and future settings model for Scient-owned agent operations and tools.
Doc type: Architecture decision

## Document Rules

This is a proposed decision and requires explicit human acceptance before it
governs implementation. It owns Scient-native operation registration,
capability policy, provider projection, and the future Agent Tools settings
model. It does not define provider-native shell/file permissions, Skill
activation, third-party plugin installation, external MCP pairing, or a native
Scient-agent runtime.

Exact current evidence lives in the [Phase Zero
report](../../research/spike-reports/scient-agent-tools-and-project-scope-phase-zero-2026-08-29.md).
Exact project/workspace authority is proposed in
[ADR-0007](ADR-0007-logical-project-workspace-binding-and-operation-scope.md).

## Context

Scient already gives eligible provider agents 26 Scient MCP tools for Browser,
Sources, and Skills. An unmerged PDF-authoring candidate adds a Documents build
capability and tool. More scientific operations are planned for
analysis, compute, literature, evidence, manuscripts, artifacts, and
integrations.

Current access is not scalable. One setting named for browser access grants or
withholds Browser plus Sources read and write. Browser observation, page
actions, capture, Sources reads, additive mutations, and destructive mutations
are not separate policy atoms. A future with dozens of tools cannot be managed
as either one switch or one first-screen switch per MCP name.

Providers also differ. Claude may expose a qualified MCP name, some providers
can receive tools but not private Scient awareness or Skills, and Antigravity
has no current reviewed Scient tool-delivery seam. Provider quirks must not
define operation identity or user policy.

ADR-0004 already accepts typed Scient operations, default-deny capabilities,
host-resolved scope, authority generation, idempotency, provenance, and
multiple ingress adapters. This decision operationalizes that boundary for
agent tool exposure and user control.

## Proposed Decision

### 1. Stable Scient operations are the canonical unit

Scient will maintain a typed registry of stable operation definitions. An
operation is a product use case, not an MCP name.

Each registry entry includes at least:

```text
operationId              stable namespaced identifier
version                  contract version
familyId                 Browser, Sources, Documents, and so on
title / description      human and agent-facing meaning
input / output contract  runtime-neutral schemas
scopeRequirement         environment, workspace, initialized project, record
requiredCapabilities     one or more stable permission atoms
effectMetadata           read, write, execute, network, destructive, external
idempotency              key and retry semantics
approvalClass            automatic, one-shot-host-confirmed, separately accepted
provenanceOwner          receipt/effect owner when required
availability             shipped, experimental, disabled, retired
documentationOwner       current implementation/help owner
```

The trusted registry is app-owned and reviewed. MCP annotations and settings
rows are derived from it; untrusted third-party metadata cannot override
Scient's effect or authority classification.

Ingress and provider adapters register their projections separately against a
stable `operationId`. The core operation definition contains no provider name,
MCP-qualified name, provider configuration shape, or provider support claim.
A completeness validator joins both registries and requires an explicit
projection or unsupported reason for every shipped agent-exposed operation.

### 2. Capabilities are stable permission atoms

Capabilities describe authority independently of provider and transport. The
initial target vocabulary is deliberately finer than the user-facing profiles:

```text
browser:observe
browser:capture
browser:control
sources:read
sources:write
sources:review
sources:delete
documents:build
skills:read
```

Future families may add atoms such as:

```text
analysis:run
analysis:manage
compute:execute
compute:manage
evidence:read
evidence:propose
evidence:accept
```

Names are illustrative until implementation review confirms exact operation
boundaries. Capability additions are append-only within one policy version;
renames use migration aliases rather than silently changing meaning.

The first complete Sources registration must map all nine shipped Sources
tools to their real read, normal-write, review, and destructive effects before
the `sources:review` and `sources:delete` names or profile composition become a
stable compatibility promise.

A convenient user profile may grant several atoms, but the operation handler
checks its exact requirements.

### 3. Policy is provider-independent and evaluated server-side

Effective authority is the intersection of:

```text
product availability
AND provider delivery support
AND environment default policy
AND verified project override, when present
AND exact workspace binding/trust
AND current authority generation
AND operation-specific intent/approval requirements
```

No factor widens another. Provider support cannot grant a disabled capability.
A project override cannot exceed an environment emergency deny. A model cannot
change the policy by selecting another tool name or path.

The server issues provider-session credentials and tool lists from this
effective policy. Protected operations revalidate scope and generation before
commit as required by ADR-0004 and ADR-0007.

### 4. Interim automatic exposure is a versioned default policy

Until the dedicated Agent Tools page ships, qualified built-in Scient tool
families may be automatically exposed to supported provider sessions. This is
the explicitly chosen interim product behavior.

“Automatic” means no new per-family setup is required. It does not mean:

- all providers are supported;
- every tool is safe to invoke without matching user intent;
- destructive actions lose their current explicit-request rules;
- tools may operate outside the exact workspace;
- provider-native permission modes are bypassed; or
- future third-party plugins receive automatic trust.

The default must exist in a versioned policy resolver, even if the first
storage schema is implicit. New operation families declare their interim
default deliberately and pass effect, containment, provider-delivery, and
documentation review before exposure.

### 5. A dedicated Agent Tools settings page will replace accidental bundling

The future route is **Settings → Agent Tools**.

The page controls Scient-native tools. Provider-native file editing, shell,
network, and approval behavior remain in Permission Modes or the provider's
own policy. Skill activation remains in Skills.

The first view groups operations by family and offers useful profiles:

| Family | Initial profiles | Meaning |
| --- | --- | --- |
| Browser | Off, View, Control | View grants observation and bounded capture; Control also grants navigation and page input/actions. |
| Sources | Off, Read, Manage | Read grants list/get; Manage grants normal add/update/attach behavior and clearly discloses review/removal effects. |
| Documents | Off, Build | Build grants validated project document construction and artifact opening. |
| Future families | Hidden until real operations ship | Plans do not become settings rows. |

Each family may expand to show:

- included operations and their plain-language purpose;
- read/write/run/network/destructive indicators;
- current global/environment default and project override;
- whether the current provider can receive the family;
- relevant documentation; and
- advanced operation exceptions only when a validated need justifies them.

The page also provides:

- search/filter as the registry grows;
- one clear emergency action to disable all Scient agent tools;
- a project selector or Project Settings deep link using the same policy
  editor rather than duplicate controls; and
- diagnostics when a family is enabled by policy but unavailable to a
  provider, project, or environment.

The page will not show one primary toggle per raw MCP tool name.

### 6. Environment defaults and project overrides use one schema

Version one policy storage is app-private and server-authoritative:

```text
AgentToolPolicyV1
  schemaVersion: 1
  emergencyDisabled: boolean
  environmentProfiles: familyId -> profileId
  projectOverrides: ScientProjectId -> familyId -> inherit | profileId
  operationExceptions?: operationId -> inherit | allow | deny
  generation
```

Exact persisted shape may change during implementation, but these invariants do
not:

- the policy is not written to project files;
- project overrides apply only through a verified binding;
- cross-environment synchronization is not implied;
- operation exceptions are advanced and sparse;
- unknown future capabilities fail closed or use an explicitly versioned
  default migration; and
- changes advance an authority generation and refresh/revoke affected
  provider-session grants.

### 7. Provider projection is a separate adapter registry

The operation registry produces a canonical operation definition. A separate
Agent Tools projection registry binds eligible operation IDs to a canonical
tool descriptor and an explicit supported/unsupported result for each provider
adapter. A provider projection may change:

- the visible tool name;
- an MCP configuration shape;
- deferred discovery or tool-search instructions;
- provider-supported result content; and
- compact awareness telling the model which granted surfaces exist.

Projection does not redefine capability, scope, effect classification, input or
output meaning, or operation semantics. Provider-specific branches stay at
adapter boundaries and are covered by a complete provider matrix so adding a
built-in driver cannot silently omit a decision. The canonical operation
registry does not import provider adapters.

MCP is the first transport, not the architecture. A future native agent,
external MCP bridge, automation adapter, or manual UI invokes the same
operation service under its own authenticated actor and scope.

### 8. Tool lists reveal only effective capabilities

Provider sessions receive only tools they can currently use. Disabled or
unsupported tools are omitted rather than advertised and rejected later,
except where a provider's protocol requires a documented deferred-discovery
mechanism.

Awareness is assembled from the same effective capability snapshot. It cannot
claim a tool or Skill that the session lacks.

Policy changes advance generation and apply to newly prepared sessions. The
implementation must define bounded refresh/revocation for running sessions;
the current behavior where a running agent keeps its original tool set cannot
remain accidental once destructive families expand.

### 9. Skills remain a distinct authority

ADR-0003 continues to own built-in Skill identity, release, activation, trust,
and provider delivery. The Agent Tools registry may register the bounded
Skill-loading operations needed by compatible providers, but it does not own
which Skills are active.

A Skill may declare tool compatibility or refer to tools. It cannot grant a
capability. The Agent Skills `allowed-tools` field is experimental and varies
between clients; Scient may use it as compatibility input only after
intersection with Scient policy.

The Agent Tools page links to Skills and may report Skill delivery status. It
does not duplicate per-Skill activation controls.

### 10. The plugin seam is designed now but third-party loading is deferred

Future Scient-owned modules and plugins will register operations through the
same registry contract. Extension entries must use namespaced stable IDs,
declare capabilities/effects/scope/docs, and pass collision and completeness
validation.

An extension can request or define capabilities but cannot self-grant them,
alter another family's policy, replace a core operation silently, or bypass
workspace scope. Removal leaves a diagnosable unavailable/retired registry
state rather than making historical receipts meaningless.

This decision does not authorize:

- a public marketplace;
- dynamic third-party code installation;
- package signing or publisher trust policy;
- automatic network access;
- remote MCP discovery; or
- a stable public plugin SDK.

Those require concrete product and threat-model evidence after the core
registry works for multiple Scient-owned families.

### 11. Legacy setting migration records the deliberate product split

The current `enableAgentBrowserAccess` setting controls Browser plus Sources in
merged main, despite its browser-oriented name. Migration to the versioned
policy must distinguish:

| Legacy value | Proposed migrated behavior |
| --- | --- |
| Missing | Apply the current version's automatic built-in defaults. |
| `true` | Browser Control and Sources Manage, matching the current grant; new families use their reviewed interim defaults. |
| Explicit `false` | Browser Off. Sources remains at the reviewed automatic baseline, currently Sources Manage; new families use their reviewed interim defaults unless the emergency deny is set. |

Owner direction recorded on 2026-08-29 treats `enableAgentBrowserAccess` as a
Browser preference at the cutover, not as a durable general Agent Tools or
Sources deny. This knowingly supersedes merged main's bundled behavior and
earlier copy. Sources is a core project operation family for eligible agents;
its availability should not be governed accidentally by an optional Browser
surface. The current unmerged PDF candidate already follows that interim
direction by keeping Sources available when Browser access is off. A future
Sources family profile provides the proper independent way to disable Sources.

After successful migration, the Integrations row and legacy key are retired
through a compatibility window. The migration is idempotent, observable, and
tested against old settings files. Release notes and the capability-retirement
record must identify the deliberate split; implementation must not claim that
an old explicit `false` was preserved for Sources.

### 12. Operation effects remain stricter than family availability

Enabling a family makes eligible operations available to the agent. It does
not automatically approve every invocation.

Existing requirements remain valid:

- destructive Source actions require revision fencing plus a host-issued,
  one-shot approval/intent receipt bound to the actor, exact workspace,
  operation, canonical target/payload, authority generation, and short expiry;
- browser page actions are bound to an owned visible target and may require
  just-in-time confirmation;
- code execution uses runtime/environment policy and exact workspace scope;
- accepted scientific records require their own proposal/review/acceptance
  operation; and
- imported or browser content remains untrusted.

The current Sources tool descriptions that say “after the user explicitly
asks” are guidance, not proof that the host holds such a receipt. The first
destructive-operation retrofit must close that gap rather than relabel it.

A user-configurable provider-independent “Ask every time” mode may be added
later when Scient can present exact operation, target, effects, and recovery
consistently across families. That deferred general mode is separate from a
mandatory bounded confirmation for an operation whose trusted registry class
requires one. Neither is simulated with prompt text or provider-specific
approval hacks.

## Alternatives Considered

### Keep one broad “agent access” switch

Rejected. It becomes less meaningful with every family and makes disabling one
surface disable unrelated core workflows.

### Add one setting per MCP tool

Rejected. Raw transport names are unstable and a long toggle wall is unusable.
Advanced operation exceptions remain possible behind family profiles.

### Configure policy separately for every provider

Rejected as the default. It duplicates intent and lets provider capability
shape product policy. Provider support is reported as status.

### Let every feature register MCP tools directly

Rejected. Effects, scope, policy, projection, documentation, and lifecycle
would drift. Features implement operations; adapters project them.

### Build the full plugin marketplace first

Rejected. Dynamic extension trust depends on the registry and exact scope, not
the reverse.

### Wait for every provider to offer identical APIs

Rejected. Scient can expose the same operation through qualified adapters and
report unsupported providers honestly. Unsupported does not justify unsafe
workarounds.

### Treat MCP annotations or Agent Skills `allowed-tools` as permission

Rejected. Both are metadata/compatibility signals, not Scient authorization.

## Consequences

- New Scient tools gain one reviewable path from operation to policy, provider
  projection, settings, tests, and documentation.
- The user sees stable families rather than provider or MCP implementation
  details.
- Provider adapters remain necessary, but they become thinner and easier to
  certify.
- Current tools need reclassification and capability migration.
- Running-session refresh/revocation and settings migration require deliberate
  lifecycle code.
- Some users may see previously bundled behavior split into clearer controls.
- Future plugin work has a safe extension target without prematurely freezing
  a public SDK.

## Required Proof Before Acceptance As Implemented

1. Registry IDs and capability IDs are unique, stable, and validated.
2. Every shipped operation declares scope, effects, policy, docs, and provider
   projection or an explicit unsupported state.
3. MCP lists and annotations are generated from trusted entries and filtered by
   current effective policy.
4. Canonical and provider-qualified tool names invoke the same operation.
5. Policy cannot widen exact workspace scope.
6. Missing, true, and explicit-false legacy settings migrate as decided.
7. Emergency disablement revokes or refreshes provider-session grants and
   fences protected uncommitted effects.
8. Project overrides apply only through verified bindings and do not cross
   environments silently.
9. Skills remain activatable/deactivatable independently and grant no tools.
10. At least Sources and Documents prove separate families before a public
    extension API is considered.
11. Provider certification covers Codex, Claude, Droid, Grok, OpenCode, Cursor
    tool transport plus a fresh Cursor Skills qualification decision, and
    explicit Antigravity deferral.
12. Settings UX remains usable with a synthetic large registry and does not
    render one first-level control per operation.
13. Destructive Sources operations cannot commit from tool-description guidance
    alone; approval receipts reject changed payloads, stale generations,
    expiry, cancellation, and replay.

## Follow-Through If Accepted

- Link this concrete registry/policy model from ADR-0004 without weakening its
  accepted operation boundary.
- Keep ADR-0003 as the Skills authority.
- Implement exact scope through ADR-0007 before exposing stateful execution
  operations.
- Update the Scient capability map and desktop current-implementation docs as
  each family is registered.
- Add user Help only when the Agent Tools page ships; public Scient Docs then
  syncs from `scient-desktop/docs/user/` rather than receiving separate prose.
- Record retirement of the legacy Integrations setting after its compatibility
  window.

## Revisit Triggers

Revisit this decision if a major provider cannot project stable operations
without unacceptable semantic loss, if real users cannot understand family
profiles, if operation exceptions become the dominant policy unit, if
collaboration requires centrally synchronized policy, or if third-party
plugins create a concrete signing, publisher, isolation, and revocation model.

Do not collapse capability, provider availability, Skill activation, and exact
workspace authority merely to reduce the number of concepts in the UI.
