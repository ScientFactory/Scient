# Provider Connection And Lifecycle Experience

Status: Proposed
Owner: Yaacov
Created: 2026-07-23
Last updated: 2026-08-13
Purpose: Preserves the proposed provider-lifecycle direction, records which initial slices now exist, and identifies the remaining nontechnical connection work.
Doc type: Implementation candidate

## Document Rules

This document owns the proposed provider-connection product journey, lifecycle
model, architecture direction, implementation sequence, and quality gates for
the M1 provider-onboarding lane. It develops the M1 requirement already owned
by the active
[T3 foundation migration plan](t3-foundation-migration-plan.md); it does not
change that plan's migration scope or add new M1 provider drivers.

This proposal is not accepted product truth, an architecture decision, a
source-code task list, or evidence that the behavior is implemented. The
[PRD](../product/PRD.md) owns accepted product direction,
[ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
owns the T3-derived desktop and upstream relationship, and
[Model Access And Routing Evolution](model-access-and-routing-evolution.md)
owns the broader provider-connected, bring-your-own-key, and Scient-managed
access sequence.

Detailed visual styling requires its own design review. Exact source paths,
schemas, RPC names, runtime recipes, supported release targets, and pull-request
boundaries must be selected in the owning desktop repository against the then-
current T3-derived implementation. Current behavior must not be inferred from
this proposal.

### Update Policy

Update this proposal when Yaacov accepts or revises its direction, when the
implementation base changes provider capabilities materially, when a provider
changes installation or authentication behavior, or when implementation and
packaged evidence prove that an assumption is wrong. Preserve the distinction
between proposed behavior, implemented behavior, and release-proven behavior.

## Implementation Status Snapshot

This proposal has been partially implemented since its evidence inspection.
The T3-derived desktop now has a Scient-owned lifecycle foundation and guided
managed-runtime flows for Codex and Claude. Current implementation truth lives
in the desktop repository, especially
`docs/internals/providers.md`, `docs/internals/connection-runtime.md`,
`docs/user/providers-codex.md`, and `docs/user/providers-claude.md`;
those files and the current code override source-path and behavior assumptions
in this planning document.

Cursor, Grok, OpenCode, Gemini, and Antigravity are not made complete or
release-supported by this proposal. The remaining shared experience,
additional provider adapters, platform proof, maintenance, recovery, cloud,
and mobile work stays proposed until implementation and release evidence says
otherwise. The 2026-08-09 pins below remain historical planning evidence, not
the current desktop baseline.

## 1. Executive Proposition

Scient should build one complete, calm, and recoverable provider lifecycle on
top of T3's existing provider-driver, provider-instance, model-discovery, and
environment architecture.

For a normal researcher, connecting an external agent should mean:

1. choose a recognizable provider or account;
2. let Scient detect what is already usable;
3. install the required provider tool when it is missing;
4. sign in through the provider's supported flow;
5. let Scient verify the runtime, account, and available models;
6. select the newly usable provider and model; and
7. return the researcher to the exact work that prompted setup.

The connection flow must be available at the point of need. In particular:

- the composer model selector must keep the relevant provider or account
  visible when it needs setup or sign-in, expose the correct action directly,
  and provide a compact `Connect another provider` path without becoming the
  complete provider catalog; and
- Settings > Providers must make connected, signed-out, missing, updating,
  failed, disabled, and unsupported states unmistakable and provide the next
  valid lifecycle action beside the affected provider.

For a provider-and-target pair that Scient explicitly advertises as fully
assisted, the ordinary path must not require a terminal, package manager,
administrator permission, PATH edit, binary path, environment variable,
provider-instance identifier, server URL, or knowledge of what a CLI is.
Unsupported or not-yet-proven pairs must say so and retain an honest advanced
or manual path. Advanced controls remain available for researchers and
developers who need custom installations, remote servers, multiple accounts,
or unusual provider configuration.

T3's provider architecture remains the foundation. Scient should adapt the
strongest old-Scient lifecycle ideas to that architecture rather than replaying
the old closed provider union, static provider UI branches, or central dialog.
Provider-specific differences should live behind registered lifecycle
capabilities. Shared composer and Settings surfaces should render semantic
states and actions without knowing provider-specific commands.

## 2. Evidence Boundary

This proposal is based on source and documentation inspection performed and
refreshed on 2026-08-09:

- owned T3-derived candidate
  [`ScientFactory/scient-desktop-next` `origin/main` at `440f1e5c`](https://github.com/ScientFactory/scient-desktop-next/commit/440f1e5cb15ecfa9d6b0565765b533350900ec36);
- integrated official T3 ancestor
  [`89ee692b`](https://github.com/pingdotgg/t3code/commit/89ee692bf0436505d008c1d70215e70836eba4e2),
  tagged `v0.0.33-nightly.20260808.1038`;
- freshly fetched official T3 `main` at
  [`ba9c9ae8`](https://github.com/pingdotgg/t3code/commit/ba9c9ae81dce4e554b4dd52abfd28d0c01b5c651),
  tagged `v0.0.33-nightly.20260809.1041` and not yet integrated into the
  owned candidate at this inspection;
- current Synara-derived
  [`ScientFactory/scient-desktop` at `3829e5dd`](https://github.com/ScientFactory/scient-desktop/commit/3829e5dd82a4760184aabafa4c96127744ef79f2);
  and
- current official provider documentation for Codex, Claude, Cursor, Grok,
  and OpenCode.

The inspection covered provider drivers and instances, settings schemas,
provider probes and snapshots, model discovery, maintenance actions, composer
and Settings behavior, Codex app-server login contracts, and the old Scient
managed-runtime and guided-connection implementation. A focused diff from the
previously inspected owned and official revisions to the refreshed refs found
no changes to the provider-driver, provider-snapshot, maintenance-coordinator,
model-picker, provider-card, or provider-settings seams on which this proposal
depends.

Key current source seams inspected at the pinned owned revisions include:

- candidate driver composition:
  [`ProviderDriver.ts`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/apps/server/src/provider/ProviderDriver.ts)
  and
  [`builtInDrivers.ts`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/apps/server/src/provider/builtInDrivers.ts);
- candidate provider snapshot and forward-compatible contracts:
  [`packages/contracts/src/server.ts`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/packages/contracts/src/server.ts);
- candidate maintenance coordination:
  [`providerMaintenanceCommandCoordinator.ts`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/apps/server/src/provider/providerMaintenanceCommandCoordinator.ts)
  and
  [`providerMaintenanceRunner.ts`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/apps/server/src/provider/providerMaintenanceRunner.ts);
- candidate selection and Settings behavior:
  [`providerInstances.ts`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/apps/web/src/providerInstances.ts),
  [`ModelPickerContent.tsx`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/apps/web/src/components/chat/ModelPickerContent.tsx),
  and
  [`ProviderInstanceCard.tsx`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/apps/web/src/components/settings/ProviderInstanceCard.tsx);
- candidate OpenCode secret gap and available secret boundary:
  [`settings.ts`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/packages/contracts/src/settings.ts)
  and
  [`ServerSecretStore.ts`](https://github.com/ScientFactory/scient-desktop-next/blob/440f1e5cb15ecfa9d6b0565765b533350900ec36/apps/server/src/auth/ServerSecretStore.ts);
- old Scient reviewed runtime recipes and trust primitives:
  [`providerRuntimeRecipes.ts`](https://github.com/ScientFactory/scient-desktop/blob/3829e5dd82a4760184aabafa4c96127744ef79f2/apps/server/src/provider/providerRuntimeRecipes.ts)
  and
  [`providerRuntimeFiles.ts`](https://github.com/ScientFactory/scient-desktop/blob/3829e5dd82a4760184aabafa4c96127744ef79f2/apps/server/src/provider/providerRuntimeFiles.ts).

No live provider account, fresh-machine install, provider billing path,
packaged authentication flow, visual design, browser interaction, or manual UI
acceptance was verified during this planning work. Provider release recipes,
terms, artifact URLs, checksums, and platform claims must be refreshed before
implementation and again before release.

Primary provider references inspected for this proposal:

- [Codex app-server authentication](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md);
- [Claude authentication](https://code.claude.com/docs/en/authentication) and
  [Claude CLI reference](https://code.claude.com/docs/en/cli-reference);
- [Cursor CLI authentication](https://docs.cursor.com/en/cli/reference/authentication);
- [Grok CLI reference](https://docs.x.ai/build/cli/reference); and
- [OpenCode CLI and authentication](https://opencode.ai/docs/cli/).

## 3. Product Problem And Success Standard

External agents are central to the current Scient experience, but their
installation and authentication mechanisms are implementation details that
many researchers do not understand and should not need to understand. A user
who already pays for ChatGPT, Claude, Cursor, Grok, or another supported service
should not have to discover a separate executable, install it globally, open a
terminal, run a login command, return to Settings, interpret a health message,
and guess whether the model selector is now usable.

The current T3 experience is strong for technical administration but weak for
ordinary onboarding. Its provider-instance wizard creates configuration; it
does not install a missing runtime, authenticate an account, verify models, or
complete selection. Missing and unauthenticated providers often lead to CLI
instructions or a model picker with no actionable models.

The old Scient experience addressed much of the user problem, but its provider
model was closed and provider-specific, parts of its central connection UI grew
large, some flows parsed terminal behavior, and several release targets and
fresh-account paths retained proof gates. It is valuable behavioral and failure
evidence, not the target architecture.

The M1 result succeeds only when a nontechnical researcher can:

- understand which supported providers are ready and which need action;
- start the correct setup or sign-in flow from the composer or Settings;
- install a supported missing tool without external prerequisites on every
  provider-and-target pair Scient advertises as fully assisted;
- complete provider-owned authentication without exposing credentials to
  Scient's ordinary UI state or logs;
- understand installation, authentication, verification, and failure as
  distinct stages;
- recover from interruption or failure without restarting from scratch;
- reach a verified provider with at least one usable model;
- continue the original draft or task immediately; and
- later inspect, update, repair, disconnect, sign out, or remove only what
  Scient actually owns and can safely control.

## 4. Product Principles For This Capability

### 4.1 Put the action at the point of need

A disconnected provider should not require the researcher to leave the
composer, remember an error, navigate through Settings, and rediscover the
provider. The model selector and provider Settings cards are first-class entry
points into the same lifecycle system.

### 4.2 Tell one truthful lifecycle story

`Installed`, `Signed in`, and `Ready to use` are different facts. Scient must
never show `Connected` merely because a configuration was saved or a binary
exists.
The user-facing state must derive from runtime and authentication evidence, not
from the last wizard step the user visited.

### 4.3 Make the ordinary path simple and the advanced path real

Simplicity must come from reliable automation and good defaults, not from
hiding unresolved work or making false assumptions. Binary paths, custom homes,
environment variables, remote OpenCode servers, multiple instances, and
provider-specific arguments remain available without becoming prerequisites
for ordinary setup.

### 4.4 Preserve what already works

Existing healthy system or custom installations and their provider-owned
credentials must remain usable. Scient must not silently replace, modify,
update, remove, or take ownership of an externally managed runtime.

### 4.5 Make provider differences explicit behind a common experience

The user journey can be coherent without pretending every provider exposes the
same installation, authentication, verification, update, rollback, or sign-out
operations. Each provider declares its actual capabilities. Scient offers only
actions that are safe and supported for that provider, instance, environment,
platform, and runtime source.

### 4.6 Treat routine setup as ordinary, not alarming

Being signed out, lacking an optional provider, or having an update available
is not automatically an error. Prominent warnings are reserved for a provider
the researcher was using that has become unusable, an interrupted operation,
a security concern, a failed update, or another state requiring attention
outside the model selector or Settings.

### 4.7 Preserve future access paths without prebuilding them

The contract should be able to distinguish browser-account access, API-key
access, remote-provider access, and future Scient-managed access. M1 provider
onboarding does not need to implement Scient-managed billing or automatic
routing, but it must not collapse every access source into one ambiguous
`provider` field that later has to be replaced.

## 5. Proposed User Experience

### 5.1 Composer model selector

The model selector must present three related things:

1. usable models for ready provider instances; and
2. the setup or recovery action for the provider relevant to the user's current
   selection, search, previous choice, or failure; and
3. a compact `Connect another provider` action that opens the broader supported
   provider choices.

Today, a provider without models can effectively disappear from the useful
selection path. The proposed selector keeps the relevant provider visible and
attaches the next valid action directly to it. It must not permanently render
every disconnected, unsupported, or advanced provider beside ordinary models;
Settings remains the complete provider catalog, while the explicit connection
action makes all supported choices reachable from the composer.

| Provider state | Selector presentation | Primary action |
|---|---|---|
| Ready to use with models | Provider/account label and selectable models | Select model |
| Tool missing | `Setup required` with a short explanation | `Set up` or `Install & connect` |
| Tool installed, signed out | `Sign-in required` | `Sign in` |
| Sign-in waiting in browser | Calm progress and provider name | `Continue sign-in` or `Cancel` |
| Verifying account or models | Noninteractive progress | None while verification is active |
| Ready but model catalog stale | Explain that models need refreshing | `Refresh` |
| Authentication expired | Explain that the existing connection needs renewal | `Sign in again` |
| Managed update available | Show as ordinary maintenance | `Update` |
| Recoverable setup failure | Stage-specific failure reason | `Retry` or the specific recovery action |
| Unsupported target or unavailable driver | Explain the exact limitation | `Learn more` or `Advanced setup` when valid |

The action label should describe the real next step. A user who only needs to
authenticate should see `Sign in`, not a generic `Set up` button. A user whose
tool is missing may see `Install & connect` when both stages are available. A
user with an incomplete browser flow should resume that flow rather than begin
another competing operation.

Clicking the provider row or its action opens the shared lifecycle experience
already targeted to that provider instance, environment, and required stage.
The user should not be sent to the first page of a generic wizard.

The composer draft, attachments, project, active thread, model-picker origin,
and intended provider must survive the connection flow. When setup succeeds,
Scient returns to the same composer context and selects the newly ready
provider and a valid model only when that selection does not violate an
existing thread or provider lock.

If a conversation is already bound to another provider and cannot safely
switch, setup may still finish, but Scient must explain that the new provider
will be available for a new conversation rather than silently changing the
current one.

### 5.2 Settings > Providers

Settings must be the complete inspection and maintenance surface for provider
instances. At a glance, each card must make these facts understandable:

- provider and user-visible account or instance label;
- environment on which it runs;
- whether its tool is installed and where its ownership lies;
- whether the account is signed in;
- whether the provider is ready and how many models are available;
- installed and available version when known;
- active installation, authentication, verification, repair, or update work;
- last checked time when useful; and
- the next safe action.

The visual hierarchy must distinguish at least:

- `Ready to use`, with a separate signed-in fact when it is positively known;
- `Sign-in required`;
- `Setup required`;
- `Checking`;
- `Needs attention`;
- `Disabled`; and
- `Unsupported here`.

The primary card action is state-dependent:

- missing managed-capable runtime: `Set up`;
- installed and signed out: `Sign in`;
- expired authentication: `Sign in again`;
- interrupted setup: `Resume`;
- failed stage: `Retry`, `Repair`, or a more precise action;
- managed update: `Update`;
- ready provider: no unnecessary primary action;
- external runtime requiring manual maintenance: clear instructions or an
  explicitly supported external update action; and
- disabled provider: `Enable` without implying that enabling completes setup.

Secondary or advanced actions may include refresh, sign out, disconnect,
repair, rollback, remove managed runtime, edit account label, edit custom binary
path, configure a separate credential home, manage sensitive environment
variables, or connect a remote server. The UI must not offer an operation that
the lifecycle capability does not support.

Routine signed-out and setup-required providers should remain discoverable
without producing a wall of warnings. Ready providers may be grouped or sorted
before providers that need setup, but all currently supported T3 drivers
should remain findable in Settings.

### 5.3 First-run and no-provider experience

If no provider is ready, the composer should not become a dead end. It should
offer a clear `Connect an AI account` action and a short explanation that the
researcher can use an existing supported account.

The ordinary first choice should use recognizable account language rather than
internal driver terminology. Candidate labels include:

- ChatGPT / Codex;
- Claude;
- Cursor;
- Grok.

OpenCode must not appear as though it were another single provider account. It
should remain available in a separate advanced group with an explicit action
such as `Connect through OpenCode` and an explanation that OpenCode then
connects to an underlying model provider. This preserves the current T3 driver
without making the ordinary path conceptually misleading.

The exact labels, descriptions, ordering, recommendation, icons, and account-
type explanations require design and provider-policy review. The internal
`driverKind` remains implementation metadata.

### 5.4 Shared setup experience

The same setup experience opens from the no-provider state, composer selector,
Settings, an authentication-expired failure, or a provider-specific recovery
action. It begins at the first unresolved stage:

```text
checking
  -> setup required
  -> awaiting installation consent
  -> downloading
  -> verifying download
  -> installing
  -> smoke testing
  -> sign-in required
  -> authenticating
  -> verifying account and models
  -> ready to use
```

Every active stage must define cancellation, timeout, failure, retry, and
restart behavior. Closing the surface should not accidentally start a second
operation or lose server-owned work. Reopening it should resume or reconcile
the current operation.

Installation consent must show the provider, source, version, approximate
download size when known, target environment, and the fact that Scient will
manage this copy. It should not expose archive names, package-manager commands,
or internal paths unless the user opens technical details.

Authentication stays provider-owned. Scient may open a provider URL, display
a short-lived device code, supervise an approved provider command, or use a
structured provider protocol. The UI must never claim success until the server
observes the provider-specific completion and verifies the resulting account
and model catalog.

### 5.5 Multiple accounts and advanced instances

Ordinary first setup should create or reuse one sensible default provider
instance without asking for an instance ID. Merely opening and cancelling the
flow must not leave phantom provider cards. Once the user explicitly begins
setup, an incomplete instance may remain only when doing so provides a clear
resume path; otherwise it should be cleaned up safely.

`Add another account` is a separate advanced action. The user may label an
account `Personal`, `University`, `Lab`, or another meaningful name. T3's
stable provider-instance identity remains internal unless advanced editing is
opened.

Separate provider instances must have isolated configuration, credential-home
selection where supported, processes, model catalogs, sessions, connection
operations, and failure state. They may share one verified managed executable
when the provider and environment permit it.

### 5.6 Completion and selection

After verified readiness, Scient should:

1. refresh the provider snapshot and model catalog;
2. select the provider instance the user asked to connect;
3. select the preserved requested model when it is available;
4. otherwise select the reviewed default available for that provider;
5. otherwise select the first valid available model and explain the fallback
   only when it matters;
6. close or complete the setup surface; and
7. return focus to the originating composer or Settings context.

The selection intent must expire on project or thread scope change, explicit
user cancellation, failed setup, or a provider lock. A stale success from an
older operation must never override a newer user selection.

Curated model recommendations and high-thinking defaults are related but
separate product decisions. This lifecycle guarantees a valid usable choice;
it does not define the complete future model-routing policy.

### 5.7 First real turn and recovery

Setup should not spend provider quota merely to prove that a connection works,
so the first real user message remains the final end-to-end execution proof.
That message must not become a data-loss or duplication boundary. If the first
turn reveals expired authentication, an unavailable model, a permission or
account limitation, or another provider-specific readiness failure, Scient
must:

- preserve the draft, attachments, project, thread, and intended provider;
- avoid submitting the message twice or presenting an unsubmitted message as
  sent;
- classify the failure semantically instead of parsing it only in the UI;
- open the targeted sign-in, refresh, model-selection, or recovery action; and
- return the researcher to the same composer context after recovery.

This recovery contract applies to later provider failures as well. A setup
wizard cannot guarantee reliability if the first ordinary turn can still lose
the researcher's work.

## 6. Truthful Lifecycle Model

The current T3 `ServerProvider` snapshot already contains structured runtime,
authentication, model, version, and update information. One additive optional
connection summary on that snapshot should carry only the missing lifecycle
facts while the combined snapshot remains the canonical current truth.
Commands, short-lived interactions, and transport events may use focused
contracts, but Scient must not create a second canonical lifecycle snapshot or
subscription that can disagree with `ServerProvider`.

### 6.1 Orthogonal facts

The proposed presentation derives from these separate facts:

#### Runtime

- source: custom, system, Scient-managed, bundled when applicable, remote, or
  missing;
- installation state;
- resolved executable identity kept server-side;
- installed version;
- supported-version status; and
- ownership and allowed maintenance operations.

#### Authentication

- signed in, signed out, expired, unknown, or not applicable;
- access method when safe to expose;
- account label or redacted identity when available;
- credential scope: app-private, shared user-wide, external-provider-owned,
  remote-host-specific, or unknown;
- the known effect of disconnect and sign-out actions on the provider CLI and
  other applications;
- required interaction, such as browser login or device code; and
- provider-specific sign-out support.

#### Readiness

- runtime can launch;
- provider transport or protocol initializes;
- authentication requirement is satisfied;
- model discovery completed;
- at least one usable model exists; and
- last verification result and time.

#### Maintenance

- current version when known;
- compatible update availability;
- managed versus externally managed update path;
- repair and rollback availability; and
- active or previous working managed release.

#### Operation

- operation identifier and target provider instance;
- kind;
- lifecycle stage;
- bounded progress when meaningful;
- start and update times;
- cancellation support;
- required user interaction;
- safe failure classification; and
- restart/reconciliation state.

### 6.2 Derived user-facing states

User-facing states must be derived deterministically from the facts above. The
renderer should not parse provider messages to decide whether to show `Sign
in`, `Install`, or `Retry`. Human-readable messages explain a semantic state;
they do not define it.

A conceptual lifecycle contract may expose:

- current runtime, authentication, readiness, maintenance, and operation
  snapshots;
- supported actions;
- required interaction;
- provider and environment identity; and
- safe presentation detail.

These are conceptual responsibilities, not approved TypeScript names or a
frozen wire schema.

### 6.3 Definition of ready

Scient may report `Ready to use` only when:

1. the exact configured or resolved provider runtime launches;
2. its version is supported or explicitly accepted;
3. the provider protocol or adapter initializes;
4. at least one usable model is available for the account and instance; and
5. authentication is positively verified when the provider exposes a reliable
   status or the provider-specific handler records another reviewed proof that
   the discovered account and models are actually usable.

`Ready to use` and `Signed in` remain separate claims. The UI may show `Signed
in` only from positive authentication evidence. A provider that proves real
usability while exposing authentication as `unknown` may be `Ready to use`,
but it must not be relabeled `Signed in`; Settings should explain that the
account state could not be independently identified when that distinction
matters. Avoid using the ambiguous label `Connected` as a substitute for both
facts.

Setup should not send a paid inference request automatically. The first real
user message is the final end-to-end execution proof. A future explicit `Test
connection` action may send a minimal request only after explaining that it may
consume provider quota.

When a provider cannot expose positive authentication status but can prove a
usable authenticated model catalog through its real protocol, the provider-
specific capability must document that proof. Scient must not convert an
unknown state into `Authenticated` merely to simplify UI.

## 7. Proposed Architecture

### 7.1 Preserve the T3 provider foundation

T3 remains authoritative for host-level provider drivers, provider instances,
session routing, model discovery, provider processes, adapters, and environment
identity. Scient must not create a parallel provider registry or route sessions
through a second provider model.

The lifecycle capability is host infrastructure inside the T3-derived desktop
repository. It is not scientific project truth and does not belong in a
separate Scient core repository or the future Scient agent.

### 7.2 Add one open lifecycle capability

Each supported driver may register an optional lifecycle handler keyed by its
open driver kind. The handler declares which operations it supports and owns
provider-specific detection, installation recipe selection, authentication,
verification, sign-out, update, repair, rollback, and removal behavior.

The capability model must remain open-ended:

- a new T3 driver without a Scient lifecycle handler still appears and can use
  T3's existing advanced/manual behavior;
- the UI does not need a new provider-specific branch merely to display it;
- unavailable actions remain absent instead of simulated; and
- provider-specific behavior stays outside common composer and Settings
  components.

The preferred initial seam is a Scient-owned lifecycle capability overlay keyed
by T3's open driver kind and composed beside the built-in driver list at the
server composition root. It must validate at compile time where practical and
at startup that every Scient handler references a registered T3 driver. A new
T3 driver without a Scient handler remains available through its inherited
manual or advanced behavior; it must not crash, disappear, or receive invented
actions.

This overlay is not a second provider registry: it cannot create provider
instances, route sessions, own model catalogs, or publish competing provider
truth. It supplies optional assisted-lifecycle behavior for instances owned by
T3. Keeping it Scient-owned avoids modifying every inherited driver merely to
attach downstream behavior. If implementation evidence shows that a small
generic field on `ProviderDriver` produces a materially stronger and equally
upstream-friendly design, that direct change remains allowed, but it is not the
default assumption. The proposal fixes the ownership and anti-drift invariant
without prematurely freezing the final TypeScript field name or Effect
environment shape.

### 7.3 Server-owned lifecycle service

A server-side lifecycle service coordinates operations by environment and
provider instance. It should:

- serialize incompatible mutations to the same managed runtime or instance;
- allow independent work for unrelated providers and environments;
- issue monotonic operation identities;
- reject stale commands and duplicate starts;
- publish semantic progress and required interaction;
- support cancellation where the underlying operation is cancellable;
- reconcile interrupted operations after server or application restart;
- refresh T3 provider snapshots after material changes;
- redact provider output before it crosses process boundaries; and
- preserve enough safe diagnostics for recovery without persisting secrets.

Runtime installation may be shared per provider and environment while
authentication remains per instance. Locking must therefore distinguish a
shared runtime mutation from an instance-specific sign-in operation.

The implementation should reuse T3's existing maintenance runner, per-target
exclusion, shared command locks, queued and running state, timeout behavior,
provider refresh, and post-update verification. It must not begin by replacing
that runner or building a parallel generic operation platform. The first Codex
slice should extract or expose only the smallest shared coordination primitive
needed to prevent install, repair, authentication, and inherited update work
from racing against one another. One narrow inherited change is justified when
it creates that single source of concurrency truth; a second coordinator with
independent locks is not.

The Scient-owned lifecycle service should therefore remain thin: resolve the
handler, authorize and coordinate the requested action, publish safe semantic
progress, refresh the canonical provider snapshot, and reconcile failure. New
generic infrastructure is added only after a concrete provider action proves
that an existing T3 primitive cannot satisfy the requirement cleanly.

Probe work must also scale intentionally. Runtime identity, installation, and
version probes should be coalesced and cached per environment and resolved
runtime identity. Authentication and model probes remain per provider instance
but require bounded concurrency, duplicate-request coalescing, backoff, and
explicit invalidation after lifecycle changes. Adding several accounts must
not create an unbounded child-process or network-probe storm on every refresh.

### 7.4 Managed runtime service

When no healthy custom or system runtime is available and the provider and
platform are supported, Scient should offer an app-private managed runtime.
The resolution order is:

1. valid explicit custom runtime;
2. healthy existing system runtime;
3. healthy Scient-managed runtime;
4. bundled runtime when a future provider legitimately ships that way; and
5. missing.

The exact order may be revised for a provider only with a documented product or
reliability reason. Discovery alone does not transfer ownership to Scient.

A managed installation must:

- use an exact reviewed provider artifact or explicitly governed stable
  channel;
- require HTTPS and allowlisted first-party or reviewed release hosts;
- verify version, size where known, and cryptographic digest;
- never execute an unreviewed remote installer script;
- extract in-process with traversal, link, file-count, and expanded-size
  protections;
- stage work in a unique private directory;
- run a bounded smoke test against the exact executable;
- activate atomically;
- preserve the previous working managed release;
- clean staging data after success, failure, or cancellation; and
- support repair and rollback where Scient promises those actions.

For initial M1 quality, exact recipes may remain compiled into signed app
releases. Scient should explicitly reuse the old Scient pin-and-review-gate
pattern: a provider or target becomes managed-install eligible only when its
exact version, artifact, host, digest, license, target mapping, and smoke test
have been reviewed and advanced in the signed release. Upstream publication of
a newer version must not make that version automatically installable. The
well-isolated download, digest, safe-extraction, staging, and activation
primitives may be adapted with provenance, while recipe discovery moves behind
the open lifecycle handler instead of restoring the old closed provider union.
A remotely advancing runtime catalog must not be introduced until it has an
accepted signature, rollback-protection, publication, monitoring, and
revocation design.

### 7.5 Provider-owned authentication adapters

Authentication remains owned by the external provider. Scient orchestrates
only reviewed public interfaces and receives the minimum state required to
guide the user and verify completion.

Each provider lifecycle handler should prefer, in order:

1. a structured provider protocol with explicit start, completion, cancel,
   status, and logout operations;
2. a documented machine-readable command with supervised process handling;
3. a provider-owned browser or device-code flow whose transient URL and code
   can be safely presented; and
4. clear manual guidance only when reliable automation is not available.

Each handler must also declare the credential scope and side effects it can
prove. `Disconnect from Scient` may remove an instance or stop Scient from
using an account without invalidating provider-owned credentials. `Sign out on
this machine` may affect the provider CLI and other applications that share the
same credential home. The UI may offer sign-out only when that effect is known,
supported, and explained; otherwise it should offer the narrower disconnect
action or clear manual guidance.

Raw tokens, passwords, refresh credentials, provider credential files, and
unredacted authentication output must not enter ordinary renderer state,
telemetry, logs, toasts, or persisted lifecycle records.

### 7.6 Additive lifecycle contracts

The existing `ServerProvider` contract should be extended only with the facts
that its current installed, version, authentication, model, availability, and
update fields cannot already express. The preferred shape is one additive,
forward-compatible optional connection summary rather than many new top-level
fields. It may carry runtime ownership, verified readiness, supported assisted
actions, and a bounded current setup or recovery operation summary.

Existing facts must be reused rather than copied into a second lifecycle state.
In particular, the new summary must not redefine authentication, models,
version, or T3's existing update state. User-facing status is derived from the
combined canonical `ServerProvider` facts. Its existing provider update stream
remains the canonical current-state transport.

Focused command and response contracts are still needed for:

- prepare/setup information and consent;
- operation start, cancel, retry, repair, rollback, update, removal, sign-in,
  and sign-out where supported;
- short-lived required interactions such as an authorization URL or device
  code;
- operation progress and completion; and
- structured, non-secret failure classification.

Short-lived interaction details may use a bounded operation response or event
when they should not persist in the provider snapshot. They must still reconcile
back into the canonical `ServerProvider` state. Older clients must not fail
when a newer server adds a state, action, interaction, or provider capability.
Unknown values should degrade to a safe non-actionable presentation rather
than an incorrect generic action.

Lifecycle publication must remain performance-bounded. The provider snapshot
should carry meaningful stage and current-progress summaries, coalesce rapid
changes, and avoid broadcasting every downloaded chunk, subprocess line, or
other high-frequency event across the shared provider stream.

### 7.7 Shared UI orchestration

The composer, Settings, first-run state, and recovery gates should all open one
shared connection controller and lifecycle surface. Those entry points supply
origin context and selection intent; they do not own installation or
authentication state.

Common UI renders lifecycle facts and capability-provided actions. Provider-
specific UI should be limited to real interaction differences such as choosing
an OpenCode upstream provider, selecting a Claude account type, or displaying a
device code. These differences should be registered modules rather than a
growing provider switch inside the model picker or Settings card.

### 7.8 Post-connection selection controller

Selection after connection remains a separate small controller. It records:

- origin scope;
- target provider instance;
- preferred model when one was requested;
- request and operation identity;
- whether the active conversation allows provider/model selection; and
- whether the user has since made a newer selection or cancelled.

It applies only after verified readiness and a nonempty model catalog. It must
not override a locked conversation, apply after scope change, or react to a
stale operation from an earlier setup attempt.

### 7.9 Restart and recovery

Provider truth should be reconstructed from the runtime, provider-owned
credentials, instance configuration, managed-runtime record, and fresh probes.
Persisted wizard-page state must not be treated as connection truth.

M1 should not introduce a general durable operation journal by default. On
restart, Scient should inspect managed-runtime records and staging state, clean
or reconcile incomplete work, probe the provider again, and present a clear
retry, repair, rollback, or cleanup result. It must not leave an indefinite
spinner or declare success from an incomplete prior operation.

A narrowly bounded journal or resumable-download record is justified only when
the exact provider artifact mechanism proves that resumption is safe and that
the record is required for correctness. Persisted wizard pages or generic
workflow state must not become connection truth.

### 7.10 Platform and target capability matrix

Provider support must be decided and proved per exact target rather than by a
single cross-platform provider flag. A target identity includes every dimension
that can change installation, authentication, execution, or recovery behavior:

- operating system and supported minimum version;
- processor architecture;
- local, remote, selected-user cloud, or other runtime host mode;
- provider artifact and packaging format;
- executable, temporary-directory, disk-space, and permission requirements;
- credential home, operating-system secret storage, and browser-launch
  behavior; and
- provider version, protocol, and maintenance capabilities.

macOS Apple Silicon and Intel, Windows architectures and native versus any
explicitly supported subsystem path, and materially different Linux targets
must receive separate rows whenever their artifacts or behavior differ. A
successful path on one row is not evidence for another.

Every provider-and-target row must have one truthful support tier:

| Tier | Product promise |
|---|---|
| Fully assisted | Scient can detect or install, authenticate, verify, maintain, recover, and complete the packaged flow without requiring technical setup |
| External runtime supported | Scient can use and verify a healthy user-managed runtime but does not promise managed installation or maintenance |
| Manual or advanced only | T3's honest custom or manual configuration remains available, with the unsupported assisted actions absent |
| Unsupported | The provider cannot be used on that target and Scient explains the concrete limitation |

The exact matrix belongs with the implementation evidence in the desktop
repository and must record at least:

| Provider | Host mode | OS/version | Architecture | Runtime source | Authentication | Maintenance | Evidence state |
|---|---|---|---|---|---|---|---|
| Codex first proof | Local | Exact implementation target | Exact implementation architecture | External and reviewed managed path | Browser and device-code path to prove | At least one managed path with failure rollback | Unproven until Phase 2 passes |

Phase 0 must expand this into one row for every provider and release target M1
intends to claim. A missing or incomplete row is not implicitly supported. The
shared UI consumes the resulting capabilities and support tier; it must not
grow provider-by-provider or operating-system branches.

Clean-machine evidence must isolate app state, provider credential homes or
keychains, executable discovery and `PATH`, temporary and managed-runtime
directories, and browser-authentication state. Otherwise the run is an
existing-machine compatibility check, not onboarding proof. Each claimed row
also needs bounded low-disk, permission, interrupted-network, proxy where
supported, cancellation, restart, and cleanup behavior. Scient should report a
specific limitation or recovery action instead of attempting a different
platform's installation strategy.

## 8. Provider-Specific M1 Direction

The exact implementation-base provider set must be refreshed when this lane
opens. At the 2026-08-09 inspection it remains Codex, Claude, Cursor, Grok, and
OpenCode. M1 keeps those drivers and improves their connection experience; it
does not add Antigravity, Factory Droid, or another new driver.

| Driver | Proposed assisted path | Verification | Important constraint |
|---|---|---|---|
| Codex | Detect or install a managed Codex runtime, then use structured ChatGPT browser or device-code login | Codex app-server account state plus current model discovery | Prefer app-server auth over parsing `codex login`; keep API-key and other advanced modes separate |
| Claude | Detect or install a supported native Claude runtime, then supervise the official login path appropriate to the selected account type | `claude auth status` plus T3's non-inference capability and model discovery | Confirm which subscription, Console, enterprise, and cloud methods Scient may support before release |
| Cursor | Detect or install on proven targets, open browser authentication, then verify status and models | `cursor-agent status` plus current ACP/model discovery | Use the official `cursor-agent` commands; keep unsupported targets honest and retain Early Access when warranted |
| Grok | Detect or install on proven targets, then use supported OAuth or device-code authentication | Positive account/model evidence from Grok commands and the current adapter | Current T3 auth can remain `unknown`; prove usability before `Ready to use` and auth before `Signed in` |
| OpenCode | Detect or install OpenCode, then guide selection of an underlying model provider and supported login method | Authenticated provider list plus model discovery | OpenCode is not one account; build a nested chooser and fix remote-server secret storage before simplifying that path |

### 8.1 Codex as the first vertical proof

Codex is the strongest first implementation because the candidate already
contains generated support for Codex app-server account read, browser login,
device-code login, login completion notifications, cancellation, account
updates, and logout. A direct structured integration should be more reliable,
testable, and maintainable than the old Scient approach that launched and
parsed a login command.

The Codex slice should prove the generic lifecycle, managed runtime, composer
entry, Settings entry, browser and device-code interaction, verification,
selection intent, first-turn recovery, at least one complete managed
maintenance path with verified failure rollback, restart reconciliation,
packaged behavior, and upstream-friendly integration before the same framework
is extended to other providers.

### 8.2 Claude

Claude exposes explicit login, logout, JSON authentication status, installation
diagnostics, and account methods. Scient should present only the account
choices it can legitimately and reliably support. Subscription, Console,
enterprise, and cloud-platform access must not be collapsed into one ambiguous
`Claude connected` state.

The provider's own credential precedence can make an environment API key
override a subscription login. Verification and diagnostics should identify
the effective method safely so Scient can explain a surprising account or
billing path without revealing credentials.

### 8.3 Cursor

Cursor offers browser authentication, semantic status, logout, model support,
and native update commands. The current T3 provider implementation contains
stale user-facing `agent login` error guidance even though the official command
is `cursor-agent login`. Scient's handler should use the current official
command and contribute the focused correction upstream when practical.

Automatic installation must remain target-gated. An existing healthy custom
or system runtime may remain usable on a target for which Scient does not yet
promise managed installation.

### 8.4 Grok

Grok exposes login, OAuth selection, device-code authentication, logout, model
listing, and native update behavior. The current T3 adapter can discover a
working runtime and models while leaving authentication semantically unknown.
The M1 handler must define a positive usability proof before the shared UI can
show `Ready to use`; it must never show `Signed in` until authentication is
positively identified.

### 8.5 OpenCode

OpenCode connects to many underlying model providers and authentication
methods. Its ordinary flow therefore needs a provider-and-method chooser driven
by current OpenCode capabilities rather than a static Scient list or a fake
single `Connect OpenCode` operation.

T3 currently allows an optional external OpenCode server password through a
setting documented as stored in plain text even though a server secret store
already exists. Moving that password into the audited secret boundary, with a
safe compatibility and removal path for existing configuration, is a
prerequisite for assisted OpenCode remote-password setup, not a blocker for the
Codex proof or unrelated providers. If that migration is not ready, M1 must
disable or keep the password-bearing remote-server path out of the assisted
OpenCode connection flow; it must not perpetuate plaintext storage. Local
OpenCode provider credentials should remain owned by OpenCode.

### 8.6 Unknown or newly inherited T3 drivers

A newly merged T3 driver without a Scient lifecycle handler must remain visible
and usable through whatever honest advanced behavior T3 supports. The common
UI should label its setup support accurately and must not crash, hide its
configuration, or invent installation and sign-in actions.

## 9. What To Reuse From Old Scient

Old Scient should be treated as behavior, failure, test, and selective source
evidence.

### Reuse or reimplement deliberately

- private managed-runtime storage;
- explicit custom -> healthy system -> managed -> bundled -> missing
  resolution;
- trusted download metadata and digest verification;
- the signed-release pin-and-review gate that prevents unreviewed upstream
  versions from becoming managed-install eligible;
- bounded safe extraction;
- staging, smoke testing, atomic activation, cleanup, and rollback;
- separate installation and authentication states;
- server-owned cancellation and progress;
- provider-owned credentials and redacted output;
- verification that requires a usable model catalog;
- provider selection only after verified readiness;
- stale-operation and scope-change protection;
- failure-specific recovery; and
- clean-machine and fresh-account release gates.

Well-isolated source such as hashing, archive validation, target detection, or
atomic activation may be adapted when it is cleaner and safer than rewriting
it. Provenance and applicable license obligations must remain explicit.

### Do not transplant as the target shape

- the old closed provider union;
- static provider recipe or presentation switches spread across the product;
- a large central connection dialog with provider-specific orchestration;
- terminal-output parsing when a structured provider interface now exists;
- provider assumptions that ignore T3 instances or environments;
- unresolved or unproven platform claims;
- an unsigned remotely mutable runtime catalog;
- obsolete provider commands or release metadata; or
- old UI merely because it existed before.

## 10. Security, Privacy, And Trust Boundary

### 10.1 Credential ownership

Provider credentials remain in provider-owned storage unless a separately
approved access path requires Scient to store a user-supplied secret. Scient
must never copy provider credential files into its project model or cloud
state.

Provider-owned does not necessarily mean isolated to Scient. A provider CLI
may use one user-wide credential home shared by other applications, while a
remote provider may authenticate on another host. Every lifecycle handler must
report the narrowest credential scope and sign-out effect it can prove. Scient
must distinguish removing an app instance, disconnecting Scient from an
account, deleting an app-private secret, and signing the provider out for other
tools on the same host.

Any API key or server password that Scient legitimately stores must use the
audited T3/Scient secret store with encrypted or operating-system-protected
storage, atomic replacement, private permissions, redacted reads, and explicit
removal. Secret values must not round-trip to the renderer after storage.

### 10.2 Renderer and log boundary

The renderer may receive only safe lifecycle state and short-lived interaction
material required for the user, such as a validated authorization URL or
device code. It must not receive raw provider stdout, environment secrets,
access tokens, refresh tokens, passwords, or unredacted credential errors.

### 10.3 Download trust

Every managed runtime source requires reviewed provenance, license, artifact
identity, cryptographic verification, target mapping, smoke test, and release
monitoring. Redirects, archive entries, file counts, expanded size, timeouts,
and output must be bounded. A failed or cancelled update must leave the active
runtime and credentials usable.

### 10.4 Consent and authority

Scient must obtain explicit consent before downloading, installing, updating,
repairing, rolling back, signing out, removing a managed runtime, or modifying
an externally managed installation. The action must identify which environment
and provider instance it affects.

### 10.5 Remote environments

The lifecycle service executes on the host where the provider runs, but remote
execution requires an explicit capability and permission boundary. A desktop
or mobile client must not gain package installation, process execution, secret
access, or sign-out authority merely because it can view a remote provider.

## 11. Cloud And Mobile Readiness

Provider lifecycle is host infrastructure, not local-desktop-only product
truth. Contracts must identify the target environment from the start.

For a local environment, the desktop can perform allowed local lifecycle
operations. For a remote or future selected-user cloud environment, the host
reports which operations are available and performs them under its own
permissions. For mobile, the client may inspect status and orchestrate an
authorized remote action, but it must explain when setup must be completed on
the provider host or desktop.

This proposal does not enable cloud, define cloud credentials, build mobile
screens, or authorize remote installation. It prevents a local executable path
or desktop-only wizard from becoming the hidden provider product model that
would later require replacement.

## 12. Upstream-Update Strategy

The implementation should preserve ordinary T3 updates by concentrating
Scient ownership in new modules and keeping inherited-surface edits narrow.

### Prefer Scient-owned or additive seams

- lifecycle domain and transition logic;
- managed runtime and trust implementation;
- provider lifecycle handlers;
- shared setup surface;
- connection controller and selection intent;
- tests, fixtures, and documentation; and
- capability registration.

### Keep inherited changes narrow

- one validated Scient-owned lifecycle capability overlay composed beside the
  inherited driver list, without changing every provider driver;
- additive forward-compatible contracts and RPC registration;
- the smallest shared operation-coordination seam required to prevent assisted
  setup and inherited maintenance from racing;
- one generic setup-action slot in the composer model selector;
- one generic lifecycle-summary/action slot in provider Settings cards; and
- minimal routing from existing authentication failure surfaces into the
  shared lifecycle controller.

Common T3 files must not absorb provider-specific lifecycle logic. The model
selector should ask, in effect, `what is this instance's presentation and next
action?`, not switch on Codex, Claude, Cursor, Grok, and OpenCode. Settings
should render one generic lifecycle view rather than five custom cards.

Direct T3-derived changes remain allowed when they produce a materially better
product, reliability, security, accessibility, or maintenance result. Each
such divergence requires an explicit reason, focused tests, an owning module,
rollback, and a hostile upstream-merge rehearsal. Avoiding all inherited-file
changes is not a goal when it would produce a weaker or indirect design.

## 13. Proposed Implementation Sequence

### Phase 0: Refresh and freeze the implementation evidence

1. Fetch the latest owned and official T3 refs.
2. Reconfirm built-in drivers, lifecycle probes, authentication APIs, release
   artifacts, terms, and platform support.
3. Record the exact integrated T3 ancestor, current official tip, and supported
   lifecycle promises per provider and target.
4. Create the explicit provider-and-target capability matrix, select the exact
   first Codex operating-system and architecture row, and leave every unproven
   row at `External runtime supported`, `Manual or advanced only`, or
   `Unsupported` as the evidence requires.
5. Verify that the Codex app-server browser login, device-code login,
   completion, cancellation, account-update, logout, and schema-generation
   contracts are present and reproducible at the exact implementation base.
6. Define the minimal inherited seams and hostile-merge rehearsal target.
7. Record the OpenCode password-bearing remote path as unavailable to assisted
   OpenCode setup until a focused compatibility-safe secret-store migration is
   ready. Do not make that migration a blocker for Codex or unrelated provider
   work.

### Phase 1: Minimum lifecycle foundation

1. Define only the semantic facts, exact actions, interaction responses,
   failure classes, and forward-compatibility behavior required by the Codex
   proof.
2. Add the validated Scient-owned capability overlay beside inherited driver
   registration and prove that it cannot reference an unknown driver.
3. Add one optional nested connection summary to `ServerProvider` plus focused
   commands and short-lived interaction responses. Reuse existing installed,
   authentication, model, version, availability, and update facts.
4. Expose or extract the smallest shared operation-coordination primitive
   needed for assisted work and existing T3 maintenance to share locks and
   target exclusion. Do not replace the maintenance runner.
5. Add cancellation, stale-operation guards, probe coalescing, safe output,
   and restart reconciliation only where the first provider action requires
   them.
6. Prove these boundaries with a fake handler and fake artifact server before
   depending on them in provider UI.

### Phase 2: Complete Codex vertical slice

The Codex proof may use several focused pull requests, but it is one quality
gate and must finish before provider-specific expansion:

1. Detect and preserve a healthy custom or system Codex runtime.
2. Implement structured app-server browser and device-code login, cancellation,
   semantic failure handling, and credential-scope-aware sign-out.
3. Verify account and models without a paid prompt.
4. Add generic composer and Settings entry points, preserve origin context, and
   apply post-connection selection safely.
5. Preserve drafts and attachments and open targeted recovery when the first
   real turn exposes an authentication, permission, or model failure.
6. Add the trusted managed Codex installation path with signed-release recipes,
   staging, verification, atomic activation, cleanup, and preservation of the
   previous working release.
7. Prove at least one complete managed update or repair path, including verified
   failure rollback, through the shared operation coordination rather than a
   second runner.
8. Prove restart reconciliation, clean-machine and fresh-account behavior, and
   packaged behavior on the first claimed target.
9. Rehearse a representative T3 merge across driver registration, contracts,
   Settings, and composer seams. Redesign recurring broad conflicts before
   multiplying handlers.

### Phase 3: Shared nontechnical experience

1. Complete first-run and no-provider composer behavior.
2. Complete relevant provider rows and setup actions in the model selector.
3. Complete ready-to-use, signed-in, setup-required, and recovery clarity in
   Settings.
4. Separate ordinary setup from advanced instance configuration.
5. Add accessible progress, cancellation, focus return, copy-link or device-
   code behavior, and failure recovery.
6. Keep the composer compact: relevant setup and recovery rows plus
   `Connect another provider`; retain the complete catalog in Settings.
7. Conduct human visual and interaction review outside automated upstream
   intake.

### Phase 4: Remaining existing-T3 providers

Implement each provider as a focused handler and proof lane, reusing the common
lifecycle and UI:

1. Claude;
2. Cursor;
3. Grok; and
4. OpenCode with its nested upstream-provider chooser and repaired secret
   boundary.

The exact order after Codex may change with provider terms, artifact quality,
or current user dependence. Do not lower readiness standards to make all rows
look identical.

### Phase 5: Maintenance and recovery completion

1. Complete managed update, repair, rollback, and removal only for the
   provider-and-target pairs that claim those capabilities; Codex already
   supplies the first proof in Phase 2.
2. Honest external-runtime update guidance or action.
3. Authentication expiry and sign-in-again recovery.
4. Credential-scope-aware sign-out, disconnect, instance removal, and
   app-private-secret removal semantics.
5. Stale model-catalog refresh and account-limited fallback.
6. Restart and interrupted-operation recovery.

### Phase 6: Upstream and release proof

1. Merge the latest representative T3 range across provider, Settings, and
   composer seams.
2. Measure conflicts and redesign broad recurring touch points.
3. Run the supported clean-machine and fresh-account matrix.
4. Prove packaged installation, authentication, restart persistence, update
   credential preservation, failed-update rollback, and non-interference with
   external installations.
5. Update current-implementation and operational documentation only after the
   behavior is integrated and release-proven.

## 14. Verification Doctrine

### 14.1 Automated contract and unit coverage

- state derivation for every runtime, auth, readiness, operation, and
  maintenance combination;
- forward-compatible unknown states and actions;
- capability absence and unsupported targets;
- stale operation, duplicate start, cancellation, timeout, and scope change;
- multi-instance and multi-environment isolation;
- target-matrix decoding, missing-row behavior, and capability differences
  across operating systems, architectures, and host modes;
- shared-runtime probe coalescing, per-instance probe bounds, cache
  invalidation, and backoff;
- selection intent and provider-lock behavior;
- first-turn failure recovery without draft, attachment, or message loss or
  duplicate submission;
- credential-scope and sign-out-impact presentation;
- secret redaction and safe diagnostics; and
- restart reconciliation.

### 14.2 Managed runtime coverage

- target and recipe selection;
- unsupported operating-system, architecture, minimum-version, and packaging
  combinations;
- resolution precedence;
- redirect and host allowlists;
- digest and size mismatch;
- archive traversal, unsafe links, file-count and expanded-size limits;
- insufficient disk or permissions;
- cancellation and staging cleanup;
- smoke-test failure;
- atomic activation;
- update failure and rollback;
- damaged runtime repair; and
- preservation of external installations and credentials.

### 14.3 Provider-handler coverage

- already installed and signed in;
- installed and signed out;
- missing runtime;
- browser launch failure;
- device-code fallback where supported;
- user cancellation;
- authentication timeout and expiry;
- empty, stale, or account-limited model catalog;
- effective account/access-method identification;
- disconnect, sign-out, instance removal, and reconnect with their actual
  credential scopes and side effects; and
- provider-specific command or protocol drift.

Routine CI should use fake executables, fake provider protocols, and fake
artifact servers. It must not require real credentials or paid inference.

### 14.4 Packaged and human acceptance

Before Scient advertises a provider and platform as fully assisted, a packaged
app must prove the claimed flow from a clean machine or clean account. This
includes real provider login, restart continuity, model discovery, update
credential preservation, first-turn recovery, and failure recovery. An
already-authenticated development machine is not sufficient onboarding proof.

Human review must verify the composer selector, Settings cards, setup surface,
progress, browser/device-code handoff, failure states, keyboard and screen-
reader behavior, responsive constraints relevant to supported desktop sizes,
and return to the original composer. Automated or agent-operated checks do not
replace the required human visual and interaction acceptance.

## 15. Explicit Non-Goals For This M1 Lane

- adding Antigravity, Factory Droid, Gemini CLI, or another new driver;
- building the native Scient agent;
- provider handoff inside an existing conversation;
- automatic model routing;
- a full model benchmark or recommendation system;
- Scient-managed billing or credits;
- a complete bring-your-own-key product beyond what an existing driver already
  safely supports;
- provider usage and cost analytics;
- cloud-service enablement;
- mobile setup screens;
- a parallel provider registry, provider-session model, or generic durable
  lifecycle workflow engine;
- a remotely mutable unsigned runtime catalog;
- importing old provider session history as scientific truth; or
- replacing T3's provider-session and model-discovery architecture.

These may remain valid later product areas. Excluding them prevents the M1
connection lane from becoming an unbounded model-access platform project.

## 16. Proposed Decisions And Remaining Questions

### Proposed decisions in this document

1. Use T3's provider drivers, instances, environments, probes, and model
   discovery as the foundation.
2. Add one Scient-owned open lifecycle capability and shared UI, not a second
   provider system.
3. Make the composer model selector and Settings equally valid setup entry
   points.
4. Keep supported providers discoverable before they have usable models:
   relevant setup and recovery rows in the composer and the complete catalog in
   Settings.
5. Show the exact next action: setup, sign in, resume, verify, refresh, update,
   repair, or retry.
6. Offer an app-private managed runtime when a supported tool is missing while
   preserving healthy custom and system installations.
7. Require runtime, protocol, and model proof before `Ready to use`; require
   positive authentication evidence before `Signed in` and never infer one
   label from the other.
8. Use provider-native structured authentication where available.
9. Register provider-specific lifecycle handlers through a validated
   Scient-owned overlay beside T3 driver registration, without modifying every
   inherited driver or creating a second provider registry.
10. Keep `ServerProvider` as the one canonical current lifecycle snapshot.
11. Reuse T3's existing maintenance runner and expose only the smallest shared
    operation-coordination seam required to prevent lifecycle actions from
    racing; do not build a parallel runner or generic workflow platform.
12. Make operations and probes instance-aware, environment-aware, bounded,
    cancellable, recoverable, and efficient across multiple accounts.
13. Select the requested provider only after readiness and only when the
   originating scope still permits it.
14. Keep Antigravity and Factory Droid outside M1.
15. Prove Codex first, then extend the same architecture to the other current
   T3 drivers.
16. Use a signed-release pin-and-review gate for every managed-runtime recipe;
    treat platform support as an evidence-gated promise, not assumed parity.
17. Treat the OpenCode plaintext server-password path as a prerequisite for
    assisted OpenCode remote-password setup, not as a blocker for Codex or
    unrelated providers.
18. Treat credential scope and the external effects of sign-out as explicit
    provider capabilities; do not collapse disconnect, instance removal,
    app-private secret removal, and provider-wide logout.
19. Preserve the original message and composer state when the first real turn
    exposes a connection failure, then route the user into targeted recovery
    without losing or duplicating the turn.
20. Prefer restart reconciliation and fresh probes over a general durable
    operation journal; add resumable records only where a concrete artifact
    mechanism proves they are necessary and safe.
21. Treat operating-system, architecture, host mode, artifact, credential, and
    maintenance differences as explicit provider-target capability rows. Claim
    fully assisted support only after packaged clean-machine proof of that exact
    row.

### Questions to resolve before implementation or release

- Which operating systems and architectures will M1 claim for fully managed
  installation of each provider?
- Which minimum operating-system versions, host modes, packaging formats, and
  resource requirements belong to each claimed target row?
- Which exact provider versions, release channels, artifact hosts, checksums,
  and licenses satisfy the first compiled runtime catalog?
- Which Claude subscription, Console, enterprise, and cloud authentication
  methods may Scient legitimately expose?
- For each provider and authentication method, which credentials are
  app-private, shared user-wide, or remote-host-specific, and what exactly does
  sign-out affect?
- Which positive Grok protocol and model proof is reliable enough for `Ready
  to use`, and what additional evidence is required before `Signed in`?
- How should OpenCode provider and authentication-method options be discovered
  without a static duplicate catalog?
- What compatibility, migration, and removal behavior is required when moving
  existing external OpenCode server passwords into the secret store?
- Which lifecycle actions may remote and selected-user cloud environments
  expose, and under what permissions?
- Which provider and account labels, ordering, descriptions, and recommendation
  should the first-run experience use?
- What later evidence would justify replacing M1's signed-release runtime
  recipes with a separately signed remote catalog?
- Which curated default model should apply after connection when the requested
  model is unavailable?

These questions do not weaken the proposed direction. They are the focused
evidence and design decisions that keep the product promise honest.

## 17. Acceptance And Documentation Transition

This proposal should remain `Proposed` until Yaacov reviews and accepts the
product journey, lifecycle promises, architecture boundary, provider-specific
direction, and implementation sequence.

After acceptance:

1. reconcile the accepted provider requirements into the appropriate product
   or architecture owner only where this proposal adds durable truth not
   already present;
2. write the exact implementation plan in the T3-derived desktop repository
   against its current main branch;
3. record the exact implementation base and provider capability matrix;
4. implement through isolated, reviewable slices;
5. update this living proposal when implementation evidence requires a
   conscious revision; and
6. add current-implementation and operational documentation only after the
   relevant behavior is integrated and verified.

## Handoffs

- Accepted product direction: [PRD](../product/PRD.md).
- Migration sequencing and M1 scope:
  [T3 Foundation Migration Plan](t3-foundation-migration-plan.md).
- Desktop ownership and upstream relationship:
  [ADR-0005](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md).
- Model-access sequencing:
  [Model Access And Routing Evolution](model-access-and-routing-evolution.md).
- Permission and trust boundary:
  [Security And Permissions](../architecture/security-and-permissions.md).
- Detailed visual design: `docs/design/` after the product journey is accepted.
- Exact implementation, source architecture, tests, and current behavior:
  the owning T3-derived desktop repository after this lane is opened.
