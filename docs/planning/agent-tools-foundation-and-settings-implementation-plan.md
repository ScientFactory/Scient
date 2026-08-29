# Agent Tools Foundation And Settings Implementation Plan

Status: Proposed
Owner: Yaacov
Created: 2026-08-29
Last updated: 2026-08-29
Purpose: Defines the review, sequencing, proof gates, migration, T3 integration, documentation, and deferred work for implementing Scient's provider-independent Agent Tools foundation after Phase Zero.
Doc type: Implementation candidate

## Document Rules

This plan becomes executable only after the linked proposed ADRs are explicitly
accepted or revised. It does not authorize production edits, data migration,
provider workarounds, PDF-candidate integration, commits, or pull requests.

Current implementation truth remains in `scient-desktop`. This plan owns the
ordered future change program, not the permanent capability inventory. Once a
runtime registry exists, generated views and current desktop internals replace
manual operation lists.

This plan complements rather than supersedes
[`scient-and-external-agents-implementation-plan.md`](scient-and-external-agents-implementation-plan.md).
That older proposed plan owns the future native Scient-agent identity, source
foundation, runtime, and separation from independently connected external
agents. This plan owns the Scient-native operation, access-policy, workspace,
and provider-projection boundary that current external providers can use now
and a future native agent should consume later. The inherited `scient-agent`
repository remains outside this phase.

The current evidence owner is the [Phase Zero
report](../research/spike-reports/scient-agent-tools-and-project-scope-phase-zero-2026-08-29.md).
The proposed architecture owners are
[ADR-0007](../architecture/decisions/ADR-0007-logical-project-workspace-binding-and-operation-scope.md)
and
[ADR-0008](../architecture/decisions/ADR-0008-agent-tool-registry-and-access-policy.md).

## Outcome

After the implementation program:

- every Scient-native agent tool is a projection of a stable, typed Scient
  operation;
- policy is provider-independent and evaluated server-side;
- every stateful operation acts inside one verified environment/worktree
  binding;
- supported provider agents automatically receive the currently allowed tool
  set;
- users can later manage clear Browser, Sources, Documents, and future families
  under Settings → Agent Tools;
- project overrides follow verified logical-project lineage without sharing
  live execution state;
- Skills remain separately activated and can use tools only through current
  policy;
- analysis and compute cannot cross worktree boundaries accidentally;
- new Scient-owned modules and future plugins have one safe registration seam;
- Antigravity and other unsupported providers are reported honestly instead of
  receiving fragile workarounds; and
- the implementation remains a narrow, auditable divergence from upstream T3.

## Phase Zero Completion Boundary

This branch completes the non-code Phase Zero package:

1. exact current and in-flight evidence snapshot;
2. complete shipped tool and provider-delivery inventory;
3. current logical-project/workspace/worktree authority trace;
4. identified analysis and compute scope defect;
5. proposed workspace-binding and operation-scope ADR;
6. proposed operation-registry and access-policy ADR;
7. Agent Tools UX and migration direction;
8. implementation sequence and proof gates;
9. current destructive-intent enforcement gap and bounded approval direction;
10. explicit deferrals; and
11. documentation ownership and update plan.

Its refined exit is **ready for final review and explicit acceptance**, not yet
accepted or ready for production coding.

## Decisions Required Before Production Work

Review these as one coherent set:

| ID | Decision | Recommendation |
| --- | --- | --- |
| P0-D1 | Portable project identity versus exact operation authority | Accept ADR-0007's separate `ScientProjectId`, `WorkspaceBinding`, and `OperationScope`. |
| P0-D2 | How project policy follows worktrees | Inherit only across verified trusted lineage; never inherit live execution state. |
| P0-D3 | Canonical tool unit | Accept stable Scient operations/capabilities with MCP/provider projections. |
| P0-D4 | Interim behavior before the settings page | Automatically expose qualified built-in families to supported sessions under an explicit internal default policy. |
| P0-D5 | Legacy combined browser/Sources switch | Apply the recorded owner direction: an explicit legacy `false` turns Browser off while Sources remains at its reviewed automatic baseline. Document this deliberate cutover rather than claiming the old Sources behavior was preserved. |
| P0-D6 | Settings information architecture | Dedicated Agent Tools page, family profiles, progressive detail, search, project override, and emergency disablement. |
| P0-D7 | Skills relationship | Keep activation and trust in Skills; Agent Tools owns only operation availability. |
| P0-D8 | Unsupported providers | Keep Antigravity explicitly unsupported until a real private tool-injection seam exists. |
| P0-D9 | Deferred scope | Design the owned registration seam now; defer third-party install/marketplace/signing/public SDK, external MCP pairing, cross-device policy sync, and a universal user-configurable “Ask every time” mode. |
| P0-D10 | Implementation start point | Begin foundation production work from fresh desktop main after PDF disposition and the next upstream alignment are exact. The independent empty-input-schema hotfix may land earlier. |
| P0-D11 | Automatic availability versus destructive approval | Keep qualified tools discoverable automatically, but require a host-issued one-shot receipt before a destructive registered operation commits. |

## Integration Preconditions

### Independent MCP empty-input-schema hotfix

The PDF branch identifies a current-main compatibility defect that does not
belong to PDF or depend on this architecture: `scient_skills_list` currently
uses `Schema.Struct({})`, whose generated schema is not guaranteed to advertise
an object-only MCP input. A client may reject an invalid tool definition or
discard more of the tool catalog.

Extract this as one focused desktop pull request before or alongside
architecture acceptance:

- replace only the current empty Skills-list input with an object-only schema;
- add a catalog test covering the toolkits shipped on current main, without
  importing unmerged Documents code;
- prove the generated input has `type: "object"` and rejects extra fields;
- run a fresh Claude tool-discovery check as the real provider proof; and
- rebase or replay the PDF candidate so it does not carry a duplicate fix.

This hotfix is not the operation registry and must not grow into a partial
registry, provider rewrite, or PDF integration.

### PDF-authoring candidate

Phase Zero did not need to wait for PDF work because it edits only Scient
planning documents. At the 2026-08-29 refinement snapshot, the PDF branch is
clean and committed at `522c7444a8b6dba0c75e242f3aad4ef7c7dd05d9`, two
commits ahead of and zero commits behind desktop main, but it is not merged.
Foundation implementation should wait for one of these explicit PDF
dispositions:

1. the candidate is committed, reviewed, rebased, and merged;
2. it is intentionally abandoned; or
3. its exact operation/capability slice is split into a reviewed dependency.

The candidate is directionally compatible because it already introduces
`documents:build`, `scient_pdf_build`, exact project-relative paths, and a
provider tool-name projection. Its new MCP catalog test should be retained as
the first uniqueness/input-schema check, then expanded rather than replaced;
it does not yet own operation effects, scope, policy, or documentation. Before
the candidate is treated as a registry consumer, verify:

- exact replay and focused tests after any newer PDF or alignment head;
- current compute and provider changes do not invalidate it;
- Browser-off/Sources-baseline behavior matches the recorded owner decision;
- all supported providers discover and invoke the tool on a fresh turn;
- output containment, structural validation, immutable preview, and returned
  artifact path remain correct; and
- Antigravity remains an explicit deferral.

This program does not modify the PDF worktree. Its owner remains responsible
for review, merge, or an explicit extracted dependency.

Do not add `scient_latex_build` as another hand-wired MCP tool before the
registry. After the registry foundation exists, add LaTeX compilation through
the Documents build lane as a registered operation with exact workspace scope
and structured compiler output. Keep its capability assignment provisional
until the real compile effects and lifecycle are reviewed.

### T3 alignment

The exact integrated T3 base is `c8aba2587d`; fetched `upstream/main` is
`660cddd3bc9801e089afcabba11c62f41aeac5c3`, with 46 upstream-only commits,
including changes in provider adapters, `ProviderService`, server Settings,
and Settings UI—the same inherited seams this program will touch.

Therefore:

1. let the current alignment land or expose its exact final branch/head;
2. fetch and record the new merge base;
3. replay the proposed narrow mounts against that head;
4. update `UPSTREAM.md` and divergence records for every retained core touch;
   and
5. preserve upstream structure where no Scient invariant requires divergence.

Do not mix a broad upstream merge into the first foundation PR. Alignment and
feature work remain independently reviewable.

## Target Architecture

```text
Scient-owned domain and policy

packages/scient-operations/
  provider-neutral operation definition contracts
  capability and effect vocabulary

apps/server/src/scient/projectScope/
  workspace binding registry
  exact scope resolver
  authority generation and verification

apps/server/src/scient/operations/
  registry composition and validation
  operation dispatcher
  current-family registrations
  effect and provenance receipt coordination

apps/server/src/scient/agentTools/
  effective policy service
  policy schema and resolution rules
  provider projection descriptors
  policy and delivery diagnostics

               narrow adapters
                      |
       +--------------+---------------+
       |              |               |
 current MCP     manual UI       future adapters
 provider path   command path     automation/external/native agent
       |
 provider-specific name/config projection

apps/web/src/scient/agentTools/
  Agent Tools settings page
  family/profile editor
  project override and diagnostics
```

The exact package split is validated during implementation. Only the pure,
ingress-neutral operation definition and capability/effect contracts justify a
shared package. Registry composition, policy, host resolution, and persistence
stay in the server unless a second real consumer proves extraction useful.
Project authority is not owned by an Agent Tools package. React and provider
runtime code do not enter the pure operation package.

## Reuse And Replacement Boundary

| Existing foundation | Keep and reuse | Change through this program |
| --- | --- | --- |
| T3 environment, project, thread, and worktree records | Physical host discovery, lifecycle, and routing. | Add one narrow Scient resolver; do not replace T3 projects or copy their mutable records. |
| `@scientfactory/project-init` | `.scient/project.json` creation, validation, and portable project UUID ownership. | Compose it with app-private bindings; do not add runtime authority or secrets to the project file. |
| Current MCP HTTP server, session registry, provider-scoped credentials, and teardown | Internal provider transport and credential lifecycle. | Turn MCP into a filtered adapter over operations; replace hand-assembled capability/tool lists, not the whole server. |
| `@scientfactory/execution` | Language-neutral one-shot/duplex process ports, output, cancellation, and execution state-machine contracts. | Use it beneath operations that run processes; do not duplicate it or turn every operation into one execution lifecycle. |
| `@scientfactory/scient-sources` and Sources coordinators | Canonical record behavior, revisions, containment, idempotency, review, and recovery. | Route existing domain services through exact scope and finer capabilities. |
| `@scientfactory/analysis` and `@scientfactory/compute` | Distinct AnalysisRun and ComputeSession domain contracts and current runtime adapters. | Add binding ownership and migrate app-private keys; do not merge their lifecycles. |
| `@scientfactory/scient-skills` plus current release, activation, and trust services | Skill identity, immutable releases, project policy, lock trust, and progressive disclosure. | Register only the bounded loading operations and delivery status; do not move Skill activation into Agent Tools. |
| PDF candidate's document build service, provider projection, and MCP catalog test | Retain after its own review/rebase if the candidate lands. | Register the build as a Documents operation and expand catalog validation into the full registry contract. |

The program extracts shared infrastructure only where two real consumers need
the same invariant. It does not rebuild domain services merely to make the
folder tree look uniform.

## Data And Contract Shapes

### Workspace binding

The initial app-private binding record follows ADR-0007:

```ts
interface WorkspaceBindingRecordV1 {
  readonly bindingId: string;
  readonly environmentId: string;
  readonly hostProjectId: string;
  readonly canonicalRoot: string;
  readonly scientProjectId: string | null;
  readonly repositoryIdentity: unknown | null;
  readonly worktreeIdentity: unknown | null;
  readonly lineageBindingId: string | null;
  readonly trustState: "verified" | "unseen" | "ambiguous" | "revoked";
  readonly authorityGeneration: number;
  readonly createdAt: string;
  readonly lastVerifiedAt: string;
  readonly supersededBy: string | null;
}
```

Repository/worktree evidence should use existing normalized T3 contracts where
stable rather than copy their full mutable shape. `canonicalRoot` remains
app-private. A schema version and additive migration are mandatory.

### Operation registration

The pure registry should make omissions a compile/test failure:

```ts
interface ScientOperationDefinition<Input, Output> {
  readonly id: ScientOperationId;
  readonly version: number;
  readonly family: ScientToolFamilyId;
  readonly title: string;
  readonly description: string;
  readonly input: Schema<Input>;
  readonly output: Schema<Output>;
  readonly scope: "environment" | "workspace" | "initialized-project" | "record";
  readonly capabilities: readonly ScientCapabilityId[];
  readonly effects: ScientOperationEffects;
  readonly idempotency: ScientIdempotencyContract;
  readonly approval: ScientApprovalClass;
  readonly availability: "shipped" | "experimental" | "disabled" | "retired";
  readonly docs: ScientOperationDocumentationOwner;
}
```

Operation handlers are registered separately from definitions so pure metadata
does not smuggle host effects into the registry. Agent-tool and provider
projections are also registered separately against stable operation IDs so the
pure operation package contains no provider names or transport configuration.
A server validator checks the joined operation, handler, documentation, and
projection registrations for completeness.

### Effects

At minimum:

```ts
interface ScientOperationEffects {
  readonly readsProjectData: boolean;
  readonly writesProjectData: boolean;
  readonly runsCode: boolean;
  readonly usesNetwork: boolean;
  readonly destructive: boolean;
  readonly consumesUntrustedContent: boolean;
  readonly createsDurableArtifact: boolean;
}
```

MCP's `readOnlyHint`, `destructiveHint`, `idempotentHint`, and `openWorldHint`
are derived projections. They never replace these trusted fields or runtime
enforcement.

### Policy

Version one remains server-authoritative and environment-local:

```ts
interface AgentToolPolicyV1 {
  readonly schemaVersion: 1;
  readonly emergencyDisabled: boolean;
  readonly environmentProfiles: Readonly<Record<string, string>>;
  readonly projectOverrides: Readonly<
    Record<string, Readonly<Record<string, "inherit" | string>>>
  >;
  readonly operationExceptions: Readonly<
    Record<string, "inherit" | "allow" | "deny">
  >;
  readonly generation: number;
}
```

Implementation may normalize this into tables rather than store one object.
The semantic version and migration behavior matter more than the serialization.

## Pull-Request Sequence

Each pull request starts from then-current desktop main, remains independently
testable, and avoids mixing user Help with unshipped behavior.

### PR A — Accept and reconcile the architecture package

Repository: `Scient`

Scope:

- refine and explicitly accept or revise ADR-0007 and ADR-0008;
- promote this plan from Proposed only if its sequence is accepted;
- record the owner-directed P0-D5 Browser-off/Sources-baseline cutover;
- clarify ADR-0006 project identity wording;
- link the concrete scope/policy decisions from ADR-0004 and Project Format;
- record PDF and T3 exact heads at acceptance; and
- leave unsupported future plugin details proposed.

Gate:

- human review of all P0-D decisions;
- re-fetch and re-record exact Scient, desktop, PDF, and upstream heads
  immediately before acceptance;
- metadata, formatting, and local-link validation;
- no claim that desktop code has changed.

### PR B — Workspace binding kernel and migration skeleton

Repository: `scient-desktop`

Primary new ownership:

- `apps/server/src/scient/projectScope/` for binding persistence and resolution;
- additive Scient-owned migrations through the existing independent Scient
  migration ledger under `apps/server/src/orchestration/scient-fork/migrations/`;
- one narrow adapter from current thread/project projections; and
- internal current-implementation documentation.

Keep project-scope identity neutral and server-owned in this PR. Do not create
an Agent Tools package merely to hold workspace authority. Export only the
minimal stable scope types that existing server consumers actually require.

Do not change analysis/compute storage yet. First prove the resolver.

Required tests:

- same root reuse;
- two worktrees with one UUID;
- Scient-created trusted lineage;
- independent clone;
- copied UUID collision;
- relocation, cancellation, and rollback;
- remote environment separation;
- uninitialized folder;
- removed project and stale thread;
- path canonicalization, traversal, symlink swap, and root replacement; and
- idempotent migration/restart.

Gate:

- no current feature behavior changes;
- exact binding and generation can be inspected in diagnostics without leaking
  secrets or model-visible absolute paths;
- hosted and local tests pass on the aligned head.

### PR C — Analysis and compute workspace-scope correction

Repository: `scient-desktop`

Start this immediately after PR B. It fixes the only identified shipped
workspace-authority defect and does not depend on the operation registry. It
may proceed in parallel with PR D. This is a correctness migration, not a
generic runtime unification.

Scope:

- add `bindingId` to analysis run records, index keys, directories, and
  server-resolved command envelopes;
- add `bindingId` to compute session ownership, directories, internal gateway
  commands, subscriptions, and stored records;
- resolve the binding through PR B's server-owned scope resolver rather than
  trusting a client-, model-, path-, project-ID-, run-ID-, or session-ID claim;
- require current binding to match stored source/working directory authority;
- migrate or quarantine existing app-private state using stored paths;
- preserve language-neutral compute contracts and separate AnalysisRun,
  ComputeSession, and DocumentBuild lifecycles; and
- make cross-worktree aggregation a labeled read model, if desired, not shared
  mutation authority.

Required tests:

- two-worktree execution and history isolation;
- code from worktree B cannot enter worktree A's kernel;
- list/get/cancel/cleanup/promotion/artifact access are binding-fenced;
- relocation and missing-root quarantine;
- crash during migration and idempotent resume;
- old state rollback/read compatibility;
- remote environment separation;
- session generation plus binding generation; and
- real Python/compute and MATLAB/analysis product tests where currently
  available.

Gate:

- no ambiguous record is attached to the currently open worktree;
- no legacy data is deleted automatically;
- all migration receipts and limitations are inspectable.

### PR D — Operation registry and provider projection foundation

Repository: `scient-desktop`

Scope:

- introduce `packages/scient-operations/` for the pure operation-definition and
  capability/effect contracts, without host services or provider code;
- implement server-owned registry composition, validator, and dispatcher;
- generalize the PDF candidate's provider-name projection pattern;
- register current Browser, Sources, Skills-loading, and Documents definitions
  without changing their domain handlers;
- require dispatcher-created `OperationScope` before any registered stateful
  handler runs; leave an entry unavailable if no correct scope adapter exists;
- generate MCP tool metadata/listing from allowed registry entries;
- generate compact awareness from the same capability snapshot;
- retain current provider-scoped credentials and teardown lifecycle; and
- add a complete provider projection/support matrix test.

Keep the existing MCP server as an adapter. Do not build external pairing or a
second server. The independent empty-input-schema hotfix must remain a focused
predecessor, not be reimplemented as registry scaffolding here.

Required tests:

- unique stable operation IDs;
- complete capability/effect/docs/projection metadata;
- canonical and Claude-qualified name equivalence;
- only allowed tools appear in each provider session;
- unsupported providers stay explicit;
- Cursor's existing MCP path is tested with turn-scoped Skills discovery and
  loading so support is enabled if the real provider path works, or remains
  unsupported with exact failure evidence rather than assumption;
- tool annotations match trusted effects;
- absent/retired operations cannot dispatch;
- awareness never advertises withheld operations; and
- registry ordering is deterministic for prompt/tool-list stability.

Gate:

- no provider-specific domain behavior enters registry definitions;
- the registry is an enforcing dispatch boundary, not a metadata-only catalog;
- fresh-message discovery and invocation pass for each qualified provider;
- Antigravity remains deferred without fallback file injection.

### PR E — Sources as the first full operation-boundary proof

Repository: `scient-desktop`

Scope:

- route all nine Sources tools through registered operations and
  `OperationScope`;
- produce one reviewed tool-to-effect-and-capability matrix before freezing
  `sources:read`, `sources:write`, `sources:review`, `sources:delete`, or the
  Sources profile composition;
- split read, normal write, review, and destructive requirements according to
  that real operation mapping rather than the illustrative ADR vocabulary;
- keep current revision, duplicate, containment, and idempotency behavior;
- replace destructive tools' prompt-only “user explicitly asks” guidance with a
  bounded host confirmation/intent receipt tied to the actor, operation,
  canonical payload and target, exact binding, generation, and expiry;
- add the minimal shared confirmation surface needed to show the exact target
  and effect and return approve, deny, cancel, or expiry; do not add general
  approval settings in this PR;
- ensure exact active-worktree `.scient/sources` remains the only target; and
- emit bounded effect/provenance diagnostics appropriate to ADR-0004.

Required tests:

- all current Sources handler suites;
- complete mapping of all nine tools to effects, capabilities, and approval
  classes;
- read versus normal-write versus review/destructive boundaries;
- same UUID in two worktrees;
- stale revision and policy generation;
- approval denial, changed payload, expiry, cancellation, and replay;
- unavailable interactive owner plus duplicate/concurrent approval requests;
- alternate path/project-ID injection;
- credential revocation;
- agent-added review/removal recovery; and
- no absolute path in model-visible failures.

Gate:

- the final capability vocabulary matches real handler effects; otherwise
  revise ADR-0008 before treating those names as stable;
- manual Sources UI and agent tools invoke the same domain services;
- no direct mutation path bypasses current coordinator safeguards;
- current user Help remains truthful.

### PR F — Versioned policy and legacy-setting migration

Repository: `scient-desktop`

Scope:

- implement environment policy, verified-project overrides, emergency deny,
  generation, and effective-policy diagnostics;
- migrate missing, true, and explicit-false
  `enableAgentBrowserAccess` values according to the accepted table;
- refresh/revoke affected provider-session grants;
- keep interim automatic family defaults; and
- retain a bounded backward-compatibility read for older settings clients.

Do not add the full UI until migration and effective policy are tested through
server APIs.

Required tests:

- every legacy value and repeated migration;
- unknown future family/capability behavior;
- emergency deny precedence;
- project override only on verified bindings;
- remote environment isolation;
- stale provider credential/generation;
- protected effect revalidation; and
- settings read failures fail in the safe direction.

Gate:

- missing, true, and explicit-false values produce the accepted result,
  including Browser Off plus Sources baseline for explicit `false`;
- migration diagnostics, release notes, and retirement documentation identify
  the deliberate Browser/Sources split instead of claiming old Sources denial
  was preserved;
- running-session behavior is documented and deterministic;
- rollback can still read pre-migration settings/state.

### PR G — Agent Tools settings experience

Repository: `scient-desktop`

Primary new ownership:

- `apps/web/src/scient/agentTools/AgentToolsSettings.tsx` and focused helpers;
- one narrow inherited Settings route/navigation/search mount;
- shared server policy API from PR F; and
- Help and current-implementation docs.

Recommended information architecture:

```text
Agent Tools

  [Disable all Scient tools]                         emergency action

  Applies to: This environment / Selected project
  Search tools...

  Browser        Control     Available on Codex      >
  Sources        Manage      Available on Codex      >
  Documents      Build       Available on Codex      >

  Skills are managed separately in Settings → Skills
```

Expanded family:

```text
Sources                                      Manage
  Read project Sources                       included
  Add and update Sources                     included
  Review or remove Sources                   included, destructive label

  Provider: available
  Scope: exact selected project/worktree
  Learn more
```

UX requirements:

- ordinary users can understand the default view without MCP vocabulary;
- effect labels are calm, specific, and not alarmist;
- current provider limitations are status text, not duplicated policy;
- project override visibly distinguishes Inherit from an explicit profile;
- search finds family names, operation titles, and purpose terms;
- keyboard and screen-reader behavior is complete;
- compact and long synthetic registries remain usable;
- no setting claims immediate revocation unless implementation proves it; and
- the old Integrations row disappears only after migration compatibility is
  safe.

Required tests:

- family profile changes and inherited project values;
- emergency action and undo/confirmation behavior;
- provider unavailable diagnostics;
- settings search and deep links;
- mobile/remote client behavior against server-authoritative policy;
- large registry visual and interaction test;
- accessibility; and
- real provider-session refresh.

Gate:

- manual UI QA in an isolated current-head app;
- Browser/Sources/Documents end-to-end checks;
- user Help is accurate and public Docs sync remains independent of app
  release while version-qualified.

### PR H — Scient-owned extension proof, not public plugins

Repository: `scient-desktop`

Start only after at least Browser, Sources, and Documents use the registry and
policy correctly.

Scope:

- register one additional Scient-owned family through the extension contract
  without editing registry core;
- validate namespace collision, unavailable/retired behavior, policy defaults,
  provider projection, docs, and removal diagnostics;
- update that family's existing current-capability and implementation owner in
  the same pull request; and
- measure whether the API is stable enough for another internal consumer.

This proof may use an already planned bounded family. Do not invent a toy
public plugin or freeze a public SDK merely to satisfy the gate.

Gate:

- second owned consumer proves the seam;
- no self-granted authority;
- removal leaves inspectable history;
- public plugin work remains a later product/security decision.

### PR I — Documentation, generated inventory, and retirement cleanup

Repositories: `scient-desktop`, then website if publishing a reviewed build;
`Scient` receives only cross-product architecture/capability updates.

Start after PR C's correction and PR G and PR H's two policy consumers are
qualified, so the final reconciliation does not immediately become stale.

Desktop owners to create or update:

- current implementation: Agent Tools registry, policy, provider matrix, and
  workspace binding;
- current Sources, analysis, compute, Skills, and PDF/document build internals;
- T3 divergence and `UPSTREAM.md` seams;
- Help for Agent Tools and any changed user behavior;
- capability map/evolution and retirement record for the legacy switch; and
- contributor trigger: a new operation must update registry metadata, tests,
  and its existing Help/capability owner rather than create a PR diary file.

Generate from the registry where practical:

- operation/capability inventory;
- provider support matrix;
- settings family list;
- missing docs/effect/scope validation; and
- machine-readable documentation input for future agent retrieval.

The website renders the reviewed `scient-desktop/docs/user/` corpus. It does
not receive a second authored Agent Tools explanation. A future Docs MCP reads
that same corpus and is still deferred.

Gate:

- no duplicate prose authority;
- no Help for unshipped behavior;
- metadata, link, formatting, generated-drift, and rendered checks pass;
- retirement is recoverable through Git and documented at the correct role.

## Parallel Work Strategy

The dependency graph is:

```text
PR A -> PR B
          |-> PR C  analysis/compute correction ------------|
          |-> PR D -> PR E -> PR F -> PR G  settings UI ----|-> PR I docs
                                    |-> PR H  extension proof|
```

Analysis/compute correction and operation-registry work start from separate
branches after PR B. The correction does not wait for registry or Sources work.
PR F depends on the registered Sources proof. PR G and PR H may proceed on
separate branches after policy is real. Final documentation and program
acceptance cover both lanes plus PR C's correction.

Safe parallel lanes after the interfaces stabilize:

| Lane | Can proceed while another lane waits for CI | Must wait for |
| --- | --- | --- |
| PDF reconciliation | Rebase, focused tests, candidate review | Exact post-alignment main; recorded Browser-off/Sources-baseline behavior. |
| Provider certification fixtures | Adapter matrix and fresh-turn harnesses | Registry/projection interface from PR D. |
| Settings UX prototypes | Static information architecture and large-registry fixtures | Policy semantics before production wiring. |
| Documentation | Current evidence and proposed docs; prepare update diffs | Shipped truth before Help/current implementation claims. |
| T3 alignment | Independent upstream intake and seam conflict report | Nothing from feature branches; feature branches replay afterward. |
| Analysis/compute correction | Implementation, fixture construction, and migration dry runs on its own branch | Accepted and landed binding contract from PR B. |

Do not parallelize two branches that both redesign `ProviderService`, server
Settings schema, or the Settings route. One should land, then the other replays
on exact current main.

## T3 Conflict-Minimization Rules

1. Put product-neutral pure Scient contracts in `packages/scient-*`.
2. Put server implementation under `apps/server/src/scient/` and web UI under
   `apps/web/src/scient/`.
3. Touch inherited provider/session code only to call a Scient-owned resolver
   or projection service.
4. Touch inherited Settings code only for schema persistence and one route,
   navigation, and search mount.
5. Mark unavoidable direct changes with the established Scient fork markers
   where the surrounding file uses them.
6. Add seam tests that fail if upstream refactoring silently bypasses Scient
   scope/policy.
7. Never rename or broadly reformat inherited files in the same PR.
8. Record exact upstream base, conflict resolution, and retained divergence.
9. Prefer adapting upstream provider improvements instead of freezing copied
   adapters.
10. Re-run the full provider and settings matrix after each T3 intake.

## Provider Certification Matrix

Every family must distinguish these proofs:

| Proof | Question |
| --- | --- |
| Transport | Can Scient configure the provider with the session-scoped tool endpoint/credential? |
| Discovery | Does a fresh agent turn actually see the effective tool list? |
| Awareness | Can Scient privately explain the granted family without leaking unavailable features? |
| Invocation | Does the provider call the exact projected name and receive structured results/errors? |
| Scope | Does the call resolve the correct thread/worktree binding? |
| Revocation | Does policy/session teardown prevent future calls and fence uncommitted effects? |
| Skills | Can the provider separately discover/load currently active Skills? |
| Diagnostics | Can Scient explain unsupported or failed delivery to the user? |

Current provider targets:

- Codex, Claude, Droid, Grok, and OpenCode: full current tool and Skill path;
- Cursor: existing tool path; independently qualify MCP-delivered Skills on a
  fresh real turn even though private Scient awareness remains unsupported;
- Antigravity: unsupported until a reviewed private tool-delivery seam exists.

Do not equate configuration-file presence with discovery or invocation.

## Quality And Safety Gates

Every production PR must provide evidence proportional to its risk:

1. exact branch, base, and upstream comparison;
2. clean status before and after package-manager commands;
3. focused unit and integration tests;
4. same-project/two-worktree fixtures for stateful behavior;
5. remote-environment fixtures where scope crosses environment adapters;
6. stale generation, revocation, retry, and cancellation behavior;
7. path traversal, copied UUID, and client-supplied authority adversarial tests;
8. migration crash, resume, rollback, and quarantine evidence;
9. fresh-message provider discovery and invocation;
10. real artifact/source/session outputs for the affected family;
11. manual UI/runtime inspection when UX changes; and
12. documentation and T3-divergence reconciliation.

Static typecheck or a provider config snapshot alone is insufficient.

## What Not To Build Now

### Do not build the settings page before the policy is real

A polished page over the current bundle would harden the wrong model. The
interim automatic default is acceptable while the foundation lands.

### Do not build public plugin installation or a marketplace

Publisher identity, package signing, sandboxing, dependency installation,
network authority, updates, revocation, and incident response are not solved by
an operation registry.

### Do not build external MCP pairing

ADR-0004 sketches the later external-client security boundary. The current
provider-scoped internal MCP adapter should first prove the shared operation
core.

### Do not build the native Scient agent

This program deliberately excludes `scient-agent`. The future native agent
should consume the accepted operation/policy boundary when its own foundation
is selected.

### Do not add Antigravity workarounds

Do not write skills into provider folders, inject public prompt text as fake
authority, fork provider runtimes, or expose a broad local server solely to
claim parity.

### Do not unify AnalysisRun, ComputeSession, and DocumentBuild

They may share scope, capability, provenance, artifact, cleanup, and provider
adapters. Their lifecycle, state machine, and authority remain distinct.

### Do not expose every operation as a top-level toggle

Family profiles plus progressive detail are the default. Operation exceptions
remain advanced and evidence-driven.

### Do not build “Ask” as prompt text

Provider-independent just-in-time approval needs an exact operation/target
contract and deterministic host enforcement. Destructive operations whose
trusted approval class requires a one-shot receipt must implement that bounded
confirmation. Defer the broader user-configurable “Ask every time” mode rather
than pretending prompt text is enforcement.

### Do not synchronize policy across devices/environments yet

There is no accepted identity, collaboration, revocation, or conflict model for
that behavior. Environment-local app-private policy is honest and sufficient
for the first implementation.

## Documentation Ownership After Implementation

| Question | Canonical owner |
| --- | --- |
| Why exact workspace binding exists | Accepted ADR-0007 in `Scient`. |
| Why operations/capabilities/provider projections exist | Accepted ADR-0008 in `Scient`. |
| What is planned next | This implementation plan while active; later product roadmaps for domain features. |
| What desktop operations currently ship | Generated/current implementation record in `scient-desktop`. |
| How contributors register an operation | `scient-desktop/docs/development/` guide plus code schemas/tests. |
| How users enable or disable Agent Tools | `scient-desktop/docs/user/agent-tools.md` after the page ships. |
| How public Docs presents it | Website-rendered copy of the reviewed desktop Help source. |
| How a provider differs or conflicts with T3 | Desktop provider internals, `UPSTREAM.md`, and divergence record. |
| How Skills are activated | ADR-0003, desktop Skills internals, and user Skills Help. |
| What was retired | Capability evolution/retirement record and Git history, not a live settings guide. |

Required documentation update trigger for future feature work:

> Adding, changing, projecting, disabling, or retiring a Scient operation must
> update its registry definition and tests. Update the existing capability,
> Help, architecture, development, operations, or upstream owner only when that
> owner's truth changes. Do not create one Markdown file per tool or pull
> request.

## Cleanup And Retirement

After policy migration and UI qualification:

- remove the old Integrations “agent browser access” row;
- retain compatibility decoding for a bounded announced window;
- remove direct tool-family construction from `ProviderService` after registry
  projection owns it;
- consolidate duplicate provider tool-name logic into projection adapters;
- keep temporary migration diagnostics until rollback evidence expires;
- retire hand-maintained inventory tables superseded by generated output; and
- record the removal without deleting useful historical reasoning.

No cleanup occurs in the same PR that first migrates user policy unless rollback
and backward compatibility remain proven.

## Stop And Reconsider Conditions

Pause the program if:

- exact binding cannot be resolved without weakening current T3 project
  isolation;
- migration would silently attach ambiguous state to a workspace;
- a provider projection changes operation semantics rather than transport;
- the registry becomes a service locator for arbitrary host effects;
- project files can grant or widen app-private policy;
- the settings design requires users to understand raw MCP names;
- upstream T3 lands an equivalent stronger architecture that makes the planned
  seam redundant;
- PDF or another candidate introduces a contradictory accepted authority; or
- a phase requires broad inherited-core rewrites instead of narrow mounts.

## Final Acceptance Evidence

The full program is complete only when:

- ADR-0007 and ADR-0008 are accepted with any refinements;
- every shipped Scient agent tool is registered and policy-filtered;
- exact workspace scope is proven across worktrees and environments;
- analysis and compute are migrated without cross-worktree authority;
- the Agent Tools page is usable, truthful, and accessible;
- legacy settings are migrated and retired safely;
- all qualified providers pass fresh discovery/invocation certification;
- unsupported providers are explicit;
- current implementation, Help, capability, upstream, and retirement docs are
  reconciled without duplicate prose; and
- one additional Scient-owned family proves the extension seam before public
  plugin architecture is considered.

## Recommended Next Action

Discuss the eleven Phase Zero decisions first. Refine the proposed ADRs and this
plan in the clean Scient worktree. Do not begin desktop production code until
the decisions are accepted and the exact PDF/alignment heads are known.

Once that is true, start with PR B—the binding kernel—not the settings page or
plugin system. After PR B lands, begin PR C's analysis/compute correction and
PR D's registry foundation in parallel. This removes the current correctness
defect as early as possible while giving every later tool family a trustworthy
base.
