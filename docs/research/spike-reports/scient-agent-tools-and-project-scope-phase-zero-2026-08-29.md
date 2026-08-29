# Scient Agent Tools And Project Scope Phase Zero — 2026-08-29

Status: Draft
Owner: Yaacov
Created: 2026-08-29
Last updated: 2026-08-29
Purpose: Freezes the current and in-flight evidence for Scient-owned agent tools, provider delivery, project/workspace authority, and the decisions required before implementing a unified Agent Tools foundation.
Doc type: Research evidence

## Document Rules

This is dated decision-readiness evidence. It is not accepted architecture,
current desktop implementation documentation, a settings specification that
may be implemented without review, or permission to merge an in-flight branch.

Use it to review the two proposed ADRs and the implementation plan produced by
this Phase Zero. Current behavior remains owned by the exact desktop source and
its repository-local documentation. The PDF-authoring work described here is a
committed but unmerged local candidate, not shipped truth. `scient-agent` is
excluded by explicit decision because native Scient-agent work has not begun in
that inherited fork.

Update or supersede this report if the PDF candidate, upstream alignment, or
desktop main changes before the decisions are accepted. Do not maintain this
dated inventory as a permanent second capability registry after the proposed
runtime registry exists.

## Executive Result

Phase Zero supports building a unified Scient-owned agent-tool foundation, but
not as one giant MCP server setting or as a provider-specific compatibility
layer.

The recommended architecture has four separate concepts:

1. **Scient operations** define stable product behavior and effects.
2. **Capabilities and policy** decide which operations an actor may invoke.
3. **An exact workspace binding** decides which checkout and environment an
   operation may affect.
4. **Provider projections** expose the allowed operations through MCP or another
   provider-supported transport without becoming product authority.

This direction reuses substantial existing work:

- the accepted operation/capability/provenance contract in ADR-0004;
- T3's environment, project, thread, and worktree records;
- Scient's `.scient/project.json` logical identity;
- provider-scoped MCP credentials and capability filtering;
- the existing Skills release, policy, trust, and provider-delivery seams;
- current Sources domain services and exact active-root resolution; and
- the merged analysis and compute domain services.

The main missing foundation is an app-private binding between a portable Scient
project and one exact authorized workspace. Without it, analysis history and
compute sessions can be selected by logical project ID even when the caller is
operating from a different worktree. That is now a current-main issue because
desktop PR #129 has merged.

The recommended user surface is a future **Agent Tools** settings page. It
should present small capability families with useful profiles and optional
detail, not one switch per raw MCP name. Until that page exists, newly qualified
Scient-owned tools may be available automatically to supported provider
sessions, as directed for this interim period, but automatic exposure must not
remove exact project scope, revision checks, destructive-action rules, or other
operation-level authority.

No production code should be started from the evidence snapshot itself. The two
proposed ADRs should be reviewed first, and implementation should begin from a
fresh desktop main after the PDF candidate and the next upstream-alignment
result are reconciled.

## Exact Evidence Snapshot

| Scope | Exact state inspected | Treatment |
| --- | --- | --- |
| Scient planning repository | `origin/main` `3689423e411cdf66b48a2ef86235319aa27dc060`; branch `codex/agent-tools-phase-zero-20260829` at that head with only four new package documents and three index edits | Product, planning, and architecture evidence plus this unaccepted package. |
| Scient Desktop | `main` and `origin/main` `b9a880c94b7281100f09e402b412d5d01760cb99` | Current implementation truth. Includes merged compute PR #129, provider updates PR #200, Docs PR #199, settings PR #190, and T3 intake through `c8aba2587d`. |
| Official T3 upstream | fetched `upstream/main` `660cddd3bc9801e089afcabba11c62f41aeac5c3`; merge base `c8aba2587d56edbf3b7872987719a12b42031f48`; current comparison `593` Scient-side and `46` upstream-side commits | Current donor delta, not Scient authority. The 46 fetched but unintegrated upstream commits include provider and Settings changes that a later implementation must replay against. |
| PDF-authoring candidate | clean local branch `codex/pdf-authoring-foundation-20260829` at `522c7444a8b6dba0c75e242f3aad4ef7c7dd05d9`, two commits ahead of and zero commits behind desktop main | Substantial committed but unmerged candidate. Used only to avoid designing a foundation that immediately conflicts with its intended tool and capability seams. |
| Overleaf | desktop draft PR [#121](https://github.com/ScientFactory/scient-desktop/pull/121), `DIRTY`, last updated 2026-08-21 | In-flight and conflicting. It does not define current behavior or block Phase Zero documentation. |
| Other open desktop PRs | None at inspection time | There was no additional open PR to treat as current or in-flight evidence. |
| Native Scient agent | Explicitly excluded | The inherited `scient-agent` repository was not inspected and does not constrain this phase. |

The earlier deep architecture draft in a separate worktree was used as a lead,
not copied as current truth. Its snapshot treated compute PR #129 as unmerged;
that claim is now stale and is corrected throughout this report.

## Method

1. Enumerate every shipped Scient MCP tool and its capability and effect hints.
2. Trace how each built-in provider receives MCP configuration, Scient
   awareness, and Skills.
3. Compare the shipped access setting with the unmerged PDF candidate.
4. Trace T3 host projects, UI grouping, thread worktrees, `.scient` identity,
   Skills trust, Sources, analysis, and compute from ingress to storage.
5. Test each concept against worktrees, clones, relocation, remote
   environments, stale sessions, and duplicate project identities.
6. Reconcile the result with ADR-0003, ADR-0004, proposed ADR-0006, the current
   project-format and security direction, the prior architecture audit, and the
   current T3 donor delta.
7. Check the current official MCP and Agent Skills specifications rather than
   relying on remembered protocol behavior.

Primary external references inspected on 2026-08-29:

- [MCP tools, 2026-07-28 draft](https://modelcontextprotocol.io/specification/draft/server/tools)
- [MCP tool schema and annotations, 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25/schema)
- [MCP authorization, 2025-06-18](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)
- [MCP roots deprecation and security boundary](https://modelcontextprotocol.io/specification/draft/client/roots)
- [Agent Skills specification](https://agentskills.io/specification)
- [Agent Skills client implementation guidance](https://agentskills.io/client-implementation/adding-skills-support)

Two protocol conclusions materially affect the proposal:

- MCP annotations are useful UX and risk hints, not authorization guarantees.
- MCP roots are informational rather than access control and are now deprecated
  in the draft protocol. Scient must therefore resolve workspace authority
  server-side instead of trusting a provider/client root declaration.

### Current desktop code anchors

These paths in the inspected `scient-desktop` head are the shortest routes back
to the evidence. They are anchors, not a promise that implementation should
keep every current file boundary.

| Concern | Current anchors |
| --- | --- |
| T3 host project/thread/worktree state | `packages/contracts/src/orchestration.ts`; `apps/server/src/orchestration/Services/ProjectionSnapshotQuery.ts` |
| Presentation-only project grouping | `packages/client-runtime/src/state/projectGrouping.ts` |
| Portable Scient project identity | `packages/scient-project-init/src/index.ts` |
| MCP capabilities, session scope, credentials, and server | `apps/server/src/mcp/McpInvocationContext.ts`; `apps/server/src/mcp/McpSessionRegistry.ts`; `apps/server/src/mcp/McpHttpServer.ts` |
| Browser, Sources, and Skills tool definitions/handlers | `apps/server/src/mcp/toolkits/preview/`; `apps/server/src/mcp/toolkits/sources/`; `apps/server/src/mcp/toolkits/skills/` |
| Provider grants, MCP injection, and awareness | `apps/server/src/provider/Layers/ProviderService.ts`; `apps/server/src/provider/Layers/*Adapter.ts`; `apps/server/src/provider/ScientAwareness.ts` |
| Current combined setting and UI | `packages/contracts/src/settings.ts`; `apps/web/src/components/settings/IntegrationsSettings.tsx`; `apps/web/src/components/settings/SettingsPanels.tsx` |
| Skill project policy and exact-root/lock trust | `apps/server/src/scient/skills/ScientSkillPolicy.ts`; `apps/server/src/scient/skills/ScientSkillSession.ts`; `packages/scient-skills/src/projectLock.ts` |
| Sources exact active-root resolution | `apps/server/src/mcp/toolkits/sources/handlers.ts`; `packages/scient-sources/src/store.ts` |
| Analysis project-keyed derived state | `apps/server/src/scient/analysis/AnalysisService.ts`; `apps/server/src/scient/analysis/AnalysisRunIndex.ts`; `apps/server/src/scient/analysis/LocalAnalysisStore.ts` |
| Compute project-keyed session state | `packages/scient-compute/src/service.ts`; `apps/server/src/scient/compute/ComputeRpcGateway.ts`; `apps/server/src/scient/compute/ComputeSessionService.ts`; `apps/server/src/scient/compute/LocalComputeStore.ts` |

## First-Principles Tests

The proposal is judged against these requirements:

1. A model, provider, prompt, path, tool name, client root, or `.scient` UUID
   cannot grant itself authority.
2. The exact workspace affected by an operation must be resolved by Scient from
   current host state.
3. The same product operation must retain the same meaning across providers.
4. A provider's inability to receive a tool is a delivery limitation, not a
   change in Scient policy.
5. Skills provide procedures and context. They do not grant tools,
   credentials, or permissions.
6. Automatic availability is not unrestricted authority. Revision checks,
   confirmation requirements, containment, provenance, and recovery still
   apply.
7. A tool description or model instruction cannot prove user approval for a
   destructive effect; the host must hold a bounded approval or intent receipt.
8. A logical project may span trusted worktrees, but one operation may affect
   only one exact workspace binding unless a separately authorized
   cross-workspace operation exists.
9. User settings must remain understandable when Scient has dozens or hundreds
   of operations.
10. The implementation should concentrate Scient-owned behavior under narrow
   mounts so normal T3 intake does not repeatedly merge product internals.
11. A permanent document should have one clear update trigger. A generated
    registry should replace manually synchronized tool inventories once code
    exists.

## Vocabulary That Must Stay Separate

| Term | Meaning | Must not be confused with |
| --- | --- | --- |
| Scient operation | Stable product use case with typed input, output, effects, scope, and authority requirements. | One MCP tool name or provider command. |
| Tool projection | The transport-visible representation of an allowed operation, such as an MCP tool. | The canonical operation or permission policy. |
| Capability | Stable permission atom required by one or more operations. | A settings page row, provider support flag, or Skill. |
| Tool family | Human-facing grouping of related operations, such as Browser, Sources, or Documents. | One broad authority grant. |
| Skill | Versioned instructions and resources loaded progressively to help an agent perform a workflow. | A tool, executable permission, or scientific record. |
| Scient awareness | Compact private guidance telling a provider what Scient is and which granted surfaces exist. | Authorization or proof that a tool was used. |
| T3 host project | Environment-scoped application project with an ID and physical `workspaceRoot`. | Portable Scient project identity. |
| Scient project ID | UUID in `.scient/project.json` identifying one logical Scient project lineage. | Proof that the current root is authorized. |
| Workspace binding | App-private, verified relationship between one environment, exact canonical root/worktree, host project, and logical Scient project. | UI grouping or a client-submitted path. |
| Operation scope | Current actor/thread plus an exact workspace binding and authority generation. | A reusable project UUID alone. |
| UI project group | Presentation grouping across physical projects or worktrees. | Execution or storage authority. |

## Current Agent-Tool Inventory

Current desktop main exposes 26 MCP tools across three families. The capability
set on a provider-scoped credential is currently:

```ts
"preview" | "skills:read" | "sources:read" | "sources:write"
```

### Browser and preview — 14 tools

All 14 tools currently require the single `preview` capability.

| Tool | Purpose | Current effect classification |
| --- | --- | --- |
| `preview_status` | Inspect whether a collaborative browser tab is available and report its state. | Read-only, idempotent. |
| `preview_open` | Create or reuse a browser tab and optionally show its preview. | Local state change; non-destructive. |
| `preview_navigate` | Navigate to a URL or environment port. | Open-world navigation; non-destructive hint. |
| `preview_resize` | Change viewport mode or size. | Local state change; idempotent. |
| `preview_set_appearance` | Change color-scheme emulation. | Local state change; idempotent. |
| `preview_snapshot` | Return semantic page state, diagnostics, and a screenshot. | Read-only, idempotent; consumes untrusted page content. |
| `preview_click` | Click a page target. | Potentially consequential page action. |
| `preview_type` | Insert text into a page input. | Potentially consequential page action. |
| `preview_press` | Send a keyboard key or shortcut. | Potentially consequential page action. |
| `preview_scroll` | Scroll the page or a container. | Local page-state change; non-destructive. |
| `preview_evaluate` | Execute JavaScript in the page. | May mutate page state and deserves a stronger capability than observation. |
| `preview_wait_for` | Wait for page, URL, locator, or text conditions. | Read-only, idempotent. |
| `preview_recording_start` | Begin recording the collaborative browser. | Starts a local capture. |
| `preview_recording_stop` | Stop recording and save a local evidence artifact. | Creates an artifact; non-destructive. |

The current single `preview` capability is too coarse for the accepted ADR-0004
direction, which already distinguishes browser read, capture, and action. A
future settings page can still show a simple Browser profile while the policy
engine uses separate atoms.

### Sources — 9 tools

| Tool | Capability | Purpose | Current effect classification |
| --- | --- | --- | --- |
| `scient_sources_list` | `sources:read` | Search and list canonical project Sources. | Read-only, idempotent, closed-world. |
| `scient_sources_get` | `sources:read` | Read one Source and its metadata, provenance, and attachment identity. | Read-only, idempotent, closed-world. |
| `scient_sources_note_update` | `sources:write` | Add, replace, or clear a Source note with revision fencing. | Mutating, non-destructive, idempotent. |
| `scient_sources_update` | `sources:write` | Update canonical metadata or tags with revision and duplicate checks. | Mutating, non-destructive, idempotent. |
| `scient_sources_remove` | `sources:write` | Remove a canonical Source after an explicit user request. | Destructive, idempotent. |
| `scient_sources_review` | `sources:write` | Approve or reject an agent-added Source. Rejection removes it. | Destructive-capable, idempotent. |
| `scient_sources_add` | `sources:write` | Add a project Source, optionally from a project PDF. | Additive, idempotent. |
| `scient_sources_attach_pdf` | `sources:write` | Attach a project PDF to a Source after containment and revision checks. | Additive, idempotent. |
| `scient_sources_detach_pdf` | `sources:write` | Detach a PDF from a Source. | Destructive, idempotent. |

The Sources family is already a good first operation-boundary proof: reads and
writes are separate, writes use revisions or stable keys, errors hide absolute
host paths, and the server resolves the active thread's worktree/root. The
remaining weakness is that `sources:write` includes additive, metadata,
review, and destructive operations under one atom.

There is also an important distinction between a current contract and current
enforcement. Destructive tool descriptions say to invoke only after the user
explicitly asks, but the host currently enforces the session capability,
project root, revisions, and record rules—not a one-shot user-approval receipt.
The proposed boundary must not describe prompt/tool text as deterministic
authorization.

### Skills — 3 tools

| Tool | Capability | Purpose |
| --- | --- | --- |
| `scient_skills_list` | `skills:read` | List the exact turn-scoped Scient Skills available to the agent. |
| `scient_skill_load` | `skills:read` | Load the selected Skill instructions. |
| `scient_skill_read_resource` | `skills:read` | Read a bounded resource belonging to an available Skill. |

Skills are delivered through MCP for compatibility, but the policy remains the
Skills system: immutable releases, user/project activation, project-lock trust,
and turn-scoped disclosure. The future Agent Tools page should link to Skills,
not duplicate Skill activation controls.

## Provider Delivery Is Three Different Matrices

Current code deliberately distinguishes tool transport, compact Scient
awareness, and Skill delivery. A provider may support one and not another.

| Provider | Scient MCP tool configuration | Scient awareness | Scient Skill delivery | Current conclusion |
| --- | --- | --- | --- | --- |
| Claude | Yes | System-preset append | MCP | Qualified, with provider-specific projected names where required. |
| Codex | Yes | Developer instructions | MCP | Qualified. |
| Cursor | Yes | No reviewed private-system seam | Unsupported | Tools can be configured, but Scient awareness and Skills are incomplete. |
| Droid | Yes | System-prompt append | MCP | Qualified. |
| Grok | Yes | Rules append | MCP | Qualified. |
| OpenCode | Yes | Per-message system guidance | MCP | Qualified. |
| Antigravity | No current Scient MCP injection seam | No reviewed private-system seam | Unsupported | Explicitly deferred. Do not add prompt, filesystem, or provider-fork workarounds merely to claim parity. |

“Qualified” here means the current code has the delivery seam. It does not mean
every operation has been manually acceptance-tested on every current provider
release, nor that a provider can bypass Scient policy.

## Current Access Policy And Its Problem

Current main has one server-authoritative setting,
`enableAgentBrowserAccess`, defaulting to `true`. When true, a provider session
receives:

```text
preview + sources:read + sources:write
```

When false, it receives none of those. `skills:read` is added independently
when the provider supports Scient Skills.

The credential is random, provider-session scoped, normally revoked on session
or thread teardown, and otherwise expires after a 24-hour no-liveness window;
MCP traffic and provider turns refresh liveness. That is useful transport
containment, but it is not yet a policy generation. A running session can keep
the capability snapshot with which it started unless a lifecycle path revokes
or replaces it, so later policy work must define refresh and effect fencing
rather than merely changing the next session's tool list.

This is safe enough as an early gate but is not a scalable product model:

- the label says browser while the effect includes project Sources;
- read, write, destructive mutation, capture, navigation, and JavaScript
  evaluation are bundled;
- a new family has no principled place to join;
- provider support and user policy can easily become conflated; and
- adding every future raw tool as a setting would create an unusable page.

The unmerged PDF candidate correctly moves toward independent capabilities:

- adds `documents:build` and `scient_pdf_build`;
- keeps `preview` controlled by the existing browser setting;
- exposes Sources and document building as baseline Scient capabilities;
- adds a provider projection for canonical versus Claude-qualified tool names;
- adds a small MCP catalog test for unique names and object-shaped inputs; this
  is useful validation to retain, but it is not yet the proposed operation,
  effect, scope, policy, or documentation registry; and
- keeps Skills independent.

That direction fits the interim automatic-access decision. Owner direction
recorded on 2026-08-29 resolves the legacy question: the old
`enableAgentBrowserAccess` value is treated as a Browser preference at cutover,
not as a durable Sources or general Agent Tools deny. Sources remains at its
reviewed automatic baseline even when the old value is explicitly `false`.
This deliberately supersedes merged main's bundled behavior and earlier copy;
Sources is a core project operation family and should not be governed by an
optional Browser surface. The later migration and retirement record must say
so rather than claiming the old Sources behavior was preserved. The future
Sources family profile is the independent control for Sources.

The candidate also contains an independent provider-compatibility correction:
the empty-input `scient_skills_list` tool uses an object-only schema instead of
`Schema.Struct({})`, and a catalog test requires object-shaped input schemas.
That small current-main fix should be extracted and proven in its own focused
desktop pull request without importing Documents code or waiting for this
architecture program. The PDF branch then replays without duplicating it.

Do not add a separate hand-wired `scient_latex_build` MCP tool before the
registry. A future LaTeX compiler operation belongs in the Documents family
through the same registered build lane, with exact workspace scope and
structured compiler output. Whether it shares `documents:build` or needs a
narrower capability remains open until the real operation boundary is proven.

## Current Project And Workspace Concepts

Scient currently has several legitimate identities. The issue is not that they
all exist; it is that some paths use the wrong one as authority.

| Concept | Current owner and anchors | Appropriate use | Current risk |
| --- | --- | --- | --- |
| T3 host project | T3 contracts, projection records, `workspaceRoot`, environment-scoped project ID | Navigation, thread ownership, environment routing, physical project discovery | Not portable across environments and not a logical Scient identity. |
| Thread worktree | Thread `worktreePath`, falling back to project `workspaceRoot` | Exact checkout for a thread's files and root-backed operations | Must be re-resolved on every protected operation. |
| UI project group | `packages/client-runtime/src/state/projectGrouping.ts` | Present related physical projects/worktrees together | Presentation only; must never authorize access or key scientific state. |
| Scient project ID | `.scient/project.json`, owned by `@scientfactory/project-init` | Portable logical lineage and references inside project-owned records | A copied UUID is an identity claim, not proof that a root is trusted. |
| Skill policy identity | App-private project policy plus exact root/lock-digest trust receipt | Let activation follow a project while exact content remains trusted | This is the strongest current precedent but is specific to Skills. |
| Sources root | Thread worktree or project workspace resolved server-side | Read/write `.scient/sources` in the active checkout | Correctly exact-root scoped, though not yet expressed through a reusable operation scope. |
| Analysis state | App-private `<analysisDir>/runs/<projectId>/<runId>` and an index keyed by project ID | Derived run history and artifacts | Two worktrees sharing a Scient project ID share the same history namespace. |
| Compute state | App-private `<computeDir>/sessions/<projectId>/<sessionId>`; record also stores `workingDirectory` | Stateful runtime/session history | Lookup and commands resolve only project ID, so a caller in worktree B can reach a session whose kernel belongs to worktree A. |
| Overleaf candidate | Absolute `workspaceRoot` in draft PR #121 | Proposed external synchronization target | Avoids cross-worktree ambiguity but is not portable and is currently stale/conflicting. |

## The Current Scope Defect In Simple Terms

Imagine two Git worktrees of one Scient project:

```text
/work/project-main       .scient/project.json -> projectId P
/work/project-experiment .scient/project.json -> projectId P
```

They are the same logical project, but they are different checked-out files and
may contain different code.

Current compute start from `project-main` stores a session under project ID
`P` and records `/work/project-main` as its working directory. Later, compute
list/get/submit from `project-experiment` inspects its `.scient/project.json`,
also obtains `P`, and addresses the same session by `P + sessionId`. The code
submitted from the experiment worktree can therefore be sent to a kernel whose
imports and process state belong to main.

Analysis has the same namespace problem for history, cleanup, promotion, and
artifact lookup: app-private paths and indexes are keyed by `projectId`, not an
exact workspace binding.

This is partly an interaction with inherited T3 concepts, but it is not simply
an inherited T3 bug. T3 supplies physical projects and worktrees. Scient added
portable `.scient` identity plus analysis and compute state. The defect arose
because the Scient layers used the logical UUID where they needed both logical
identity and exact workspace authority.

## Recommended Identity And Authority Model

The smallest complete model is:

```text
HostProjectRef
  = environmentId + T3 projectId

ScientProjectId
  = UUID read from verified .scient/project.json

WorkspaceBinding
  = bindingId
  + environmentId
  + canonicalRoot
  + HostProjectRef
  + ScientProjectId (when initialized)
  + repository/worktree evidence when available
  + trust state
  + authority generation

OperationScope
  = actor/session/thread
  + WorkspaceBinding
  + required capabilities
  + current authority generation
```

The binding is app-private. It must not be written into the project as a secret
or permission grant. `.scient/project.json` remains portable identity. The
server derives the exact root from current thread/project state, canonicalizes
it, inspects its identity, resolves or verifies the binding, and only then
invokes an operation.

### State classification under this model

| State | Logical project behavior | Exact workspace behavior |
| --- | --- | --- |
| `.scient/project.json` and project-owned record formats | Portable identity/record lineage may follow the project. | The active physical copy is always read or written through the exact binding. |
| User/project Agent Tools policy | May follow a verified logical project across trusted Scient-created worktrees. | Effective policy is still intersected with the current binding and environment. |
| Skill activation lock | Portable project selection. | Exact lock content remains subject to root and digest trust. |
| Sources records and attached PDFs | Belong to the logical project's project-owned format. | Operations affect only the active checkout's `.scient/sources`. No silent cross-worktree mutation. |
| Analysis runs and artifacts | Can retain logical project lineage for grouping/export. | Storage, lookup, cleanup, promotion, and currentness must include `bindingId`. |
| Compute sessions | Can retain logical project lineage for display/history. | Session ownership and commands must include `bindingId`; the stored working directory must match the current binding. |
| Document builds | Output is an ordinary project artifact. | Source, output, preview, and temporary renderer state are confined to the exact binding. |
| UI project grouping | May group trusted related worktrees. | Never changes an operation's binding. |

## Required Scenario Behavior

| Scenario | Required result |
| --- | --- |
| Existing initialized project reopened at the same root | Reuse the verified binding if host project and canonical root still match; advance generation when relevant policy changes. |
| Scient creates a Git worktree | Create a new binding linked to the same logical project through trusted parent lineage; inherit eligible project policy, never live execution state. |
| User opens an independently cloned folder carrying the same project UUID | Treat it as an unseen binding. Do not silently inherit sensitive project policy until identity/root trust is confirmed. |
| Project folder is moved on the same environment | Detect relocation from repository and project evidence, require a bounded confirmation when ambiguous, create/supersede the binding, and preserve recoverable app-private history. |
| Two unrelated folders contain the same copied project UUID | Keep separate bindings and surface an identity collision. Never merge state merely because UUIDs match. |
| Same project is opened on a remote environment | Create a distinct environment binding. Do not silently copy local credentials, trust receipts, or policy that the remote environment cannot enforce. |
| Thread changes worktree or its project is removed | Re-resolve scope, advance/revoke the prior generation, and reject stale provider credentials or queued mutations. |
| Ordinary folder without `.scient/project.json` | Browser tools may work under environment/thread scope; project-record, analysis, compute, and Sources operations fail clearly or require explicit initialization. No silent project write. |
| A model supplies another path, project ID, or MCP root | Treat it as input only. Resolve allowed files beneath the server-owned binding or reject it. |
| A project policy disables a family | Hide the family's projected tools from new sessions; revoke/refresh current grants according to the accepted lifecycle; revalidate before protected effects commit. |

## Findings

### F1 — Build on ADR-0004 instead of creating another tool architecture

ADR-0004 already accepts typed operations, default-deny capabilities,
host-resolved scope, actor identity, authority generation, idempotency,
provenance, and multiple adapters. The new work should operationalize that
decision for current tools. A second “unified MCP” abstraction would duplicate
the hardest concepts and still leave manual UI and automations outside it.

### F2 — The first shared foundation is workspace binding, not a plugin system

Every current or planned stateful tool depends on exact project scope. Building
a marketplace, dynamic plugin loader, or public SDK before this foundation
would let extensions inherit ambiguous authority. A narrow registry extension
contract can be designed now, but third-party installation and trust belong
later.

### F3 — The stable unit is an operation/capability, not a transport name

The PDF candidate's `ScientToolProjection` is directionally correct: Claude may
need a qualified visible name while Scient retains one canonical operation.
The separate Agent Tools projection registry should generalize this pattern.
Provider-specific names and MCP metadata are adapter outputs, not fields that
make the canonical operation provider-aware.

### F4 — Tool annotations must be derived from trusted registry metadata

Current tools already set MCP read-only, destructive, idempotent, and
open-world hints. Those should remain, but deterministic Scient policy and
operation handlers—not annotations—must enforce safety.

### F5 — Automatic interim access should be an explicit policy, not absence of policy

The interim direction can be represented as an internal versioned default:
qualified built-in families are exposed automatically to supported provider
sessions. That keeps later migration possible and preserves a place for future
family denies, emergency disablement, project overrides, and provider
limitations without reviving the retired combined switch.

### F6 — Agent Tools and Skills should remain adjacent but separate

Skills answer “what procedure should the agent follow?” Agent Tools answer
“what Scient operations may this agent invoke?” Project Skill activation,
trust, and invocation policy remain in Skills. The Agent Tools page can show
Skill delivery status and link to Skills without copying its controls.

### F7 — Provider availability is status, not a second policy dimension

The user should not configure the same capability separately for Claude,
Codex, Droid, Grok, OpenCode, and future providers by default. Scient policy is
provider-independent; the page reports when the selected provider cannot
receive a family. Provider-specific exceptions should be introduced only when
a real incompatibility requires one.

### F8 — The settings page needs progressive detail

The first view should expose families and useful profiles:

| Family | Useful profiles | Underlying examples |
| --- | --- | --- |
| Browser | Off, View, Control | Observe/status/wait; capture/snapshot/record; navigate/input/evaluate. |
| Sources | Off, Read, Manage | List/get; add/update/note/attach; review/remove/detach. |
| Documents | Off, Build | Build and open a validated project artifact. |
| Analysis and Compute | Future, after scope retrofit | Run code, inspect results, manage sessions, cleanup. |

An expandable detail view may show operations, effects, scope, and provider
support. It should not force users to manage dozens of raw MCP names.

### F9 — One emergency off control is justified

As the registry grows, a clear “Disable all Scient tools for agents” action is
useful for containment and support. It does not replace family policy or
operation-level approval.

### F10 — T3 conflicts can remain narrow

Most new contracts and services can live under Scient-owned packages and
`apps/*/src/scient`. Expected inherited-core touches are limited to provider
session preparation, server Settings schema/migration, Settings navigation and
search, and thread/project resolution adapters. The current upstream delta
touches all of those seams, so production implementation should begin after
the ongoing alignment and rebase each narrow mount rather than carrying a
large pre-alignment branch.

## Decisions Ready For Review

The Phase Zero recommendation is represented in:

- [ADR-0007: Logical Project, Workspace Binding, And Operation Scope](../../architecture/decisions/ADR-0007-logical-project-workspace-binding-and-operation-scope.md)
- [ADR-0008: Agent Tool Registry And Access Policy](../../architecture/decisions/ADR-0008-agent-tool-registry-and-access-policy.md)
- [Agent Tools Foundation And Settings Implementation Plan](../../planning/agent-tools-foundation-and-settings-implementation-plan.md)

The following choices need explicit review before code implementation:

1. Accept the logical-project versus exact-workspace binding model.
2. Accept server-resolved `OperationScope` as mandatory for stateful Scient
   operations.
3. Accept a registry of stable operations/capabilities with generated provider
   projections.
4. Accept automatic qualified built-in exposure as a temporary default policy,
   not a permanent absence of controls.
5. Confirm the recorded owner direction that an explicit legacy
   `enableAgentBrowserAccess: false` turns Browser off while Sources remains at
   its reviewed automatic baseline during the interim and later migration.
6. Accept a dedicated future Agent Tools page with family profiles, progressive
   detail, project overrides, and an emergency disable action.
7. Keep Skills activation and trust separate from Agent Tools policy.
8. Keep Antigravity unsupported until a real private tool-delivery seam exists.
9. Design the owned registration seam now while deferring public plugin
   installation, third-party trust, external MCP pairing, cross-device policy
   sync, and a universal user-configurable “Ask every time” mode.
10. Start production implementation from fresh desktop main after the PDF
    disposition and next upstream alignment are exact.
11. Keep automatic tool availability separate from approval to commit an effect;
   require a host-issued, one-shot receipt for destructive operations instead
   of relying on an instruction inside the tool description.

## What Phase Zero Does Not Authorize

- no production code or data migration;
- no rebase, commit, or merge of the PDF or Overleaf candidates;
- no settings page implementation;
- no provider-specific workaround for Antigravity;
- no native Scient-agent work;
- no public plugin marketplace or dynamic third-party code loading;
- no broad T3 core rewrite;
- no assumption that all agent actions are safe because tools are built in;
- no claim that the current tool list is permanently complete; and
- no acceptance of ADR-0006 or the two new ADRs merely because they are written.

## Remaining Evidence Gaps

The code trace is sufficient to identify the scope defect and propose a
contract, but implementation must still prove it with runtime fixtures:

- two worktrees with the same `.scient` UUID and different files;
- relocation and duplicate-UUID behavior;
- local versus remote-environment bindings;
- stale thread and capability generations;
- provider tool-list refresh after policy change;
- migration from missing, true, and explicit-false legacy settings into the
  deliberately split Browser and Sources policy;
- destructive-operation approval, cancellation, expiry, and replay behavior;
- the final PDF candidate replayed on the post-alignment desktop head.

These are implementation proof gates, not reasons to keep the architecture
undefined.

## Recommendation

Perform the final review of ADR-0007, ADR-0008, and the implementation plan
together, then explicitly accept or revise them.

Once accepted, first build the exact workspace-binding and scope resolver. Then
correct analysis/compute workspace ownership immediately while the operation
registry and current-tool projections proceed on a parallel branch. Prove the
operation boundary with Sources after the registry exists. Build the Agent
Tools UI only after the policy model and migration are real enough for the page
to tell the truth.

That order gives PDF and future scientific tools a stable foundation, avoids a
provider-by-provider rewrite, prevents a plugin system from inheriting unsafe
scope, and keeps the T3 divergence small and explainable.
