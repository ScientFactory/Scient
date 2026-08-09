# Product Measurement And Analytics Plan

Status: Proposed
Owner: Yaacov
Created: 2026-08-09
Last updated: 2026-08-09
Purpose: Defines the proposed product-measurement contract, privacy boundary, implementation sequence, event catalog, KPI model, dashboard portfolio, and activation gates for Scient.
Doc type: Planning note

## Document Rules

This document owns the cross-repository plan for measuring how Scient is used
and whether it creates reliable researcher value. It does not make planned
events, dashboards, privacy controls, or retention jobs implemented behavior.
The accepted [Product Requirements](../product/PRD.md), [Product
Philosophy](../product/product-philosophy.md), and [T3-derived desktop
foundation decision](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
govern conflicts.

The `Scient` repository owns measurement meaning and policy. The website
repository owns the first-party gateway, D1 schema, PostHog forwarding, and
dashboard-management code. `scient-desktop-next` owns the desktop adapter,
local consent and outbox state, instrumentation, and user-facing privacy
controls. Each repository must use an independent branch, worktree, commit,
and pull request.

### Update Policy

Update this plan when the event contract, KPI definitions, privacy or retention
policy, identity boundary, dashboard portfolio, implementation status, or
activation evidence changes. Keep **Proposed**, **Implemented**, **Enabled**,
and **Release-proven** distinct.

## Executive Direction

Scient should collect enough structured product evidence to understand
activation, retention, feature value, reliability, provider experience, and
scientific-workflow progress without collecting the research itself.

The architecture is:

```text
Scient feature seam
  -> Scient-owned measurement contract
  -> local privacy filter
  -> durable local outbox
  -> https://events.scientfactory.com/v1/events
  -> strict versioned validation
  -> first-party Cloudflare D1 ledger
  -> pseudonymous EU PostHog copy
  -> governed dashboards and alerts
```

The desktop must not embed a PostHog SDK, project token, personal API key, or
direct PostHog host. Renderer autocapture, session replay, DOM capture,
keystroke capture, and provider-account-derived identity are prohibited.

Scient should preserve T3's useful analytics call sites when their semantics
and properties satisfy this contract, but replace T3 delivery and identity with
one Scient-owned adapter. New Scient features should emit through the same
adapter rather than creating feature-specific clients.

## Researcher And Product Outcomes

Measurement must help the team answer:

1. Can a new researcher install Scient, add a project, connect a provider, and
   receive a successful answer without giving up?
2. Do researchers return and complete meaningful work rather than merely open
   the app?
3. Which capabilities create repeated value, and which add complexity without
   use?
4. Where do provider, lifecycle, project, fork, voice, preview, and scientific
   workflows fail or become slow?
5. Do releases improve product outcomes without creating regressions?
6. Can the team trust the analytics pipeline itself?

Counts that cannot support a product, reliability, or operational decision
should not be collected merely because they are easy to emit.

## Non-Negotiable Data Boundary

Normal analytics must never contain:

- prompts, assistant responses, reasoning, tool input, or tool output;
- research documents, source text, annotations, notes, generated content, or
  scientific results;
- filenames, folder names, repository names, file paths, URLs with query
  strings, terminal commands, Git diffs, branches, or commit messages;
- screenshots, audio, transcription text, attachment names, MIME payloads, or
  clipboard contents;
- credentials, tokens, provider account identifiers, email addresses, IP
  addresses, device fingerprints, advertising identifiers, or operating-system
  usernames;
- raw error messages, stack traces, process arguments, environment variables,
  or arbitrary free text; or
- exact provider resume cursors, thread identifiers, project identifiers, or
  other application database keys.

Event properties must be typed, bounded, and allowlisted. Unknown properties
must be rejected at the gateway rather than silently stored. Arbitrary strings
must be normalized to a fixed enum or omitted. Numeric values must have
documented bounds.

Voluntary contribution data, such as an explicitly reviewed feedback report,
is a separate product workflow with its own preview and consent. It must not be
smuggled into analytics properties.

## Privacy And Consent Model

The proposed ordered levels are:

| Level | Meaning | Outbound behavior |
| --- | --- | --- |
| Off | No analytics leaves the device | Do not enqueue; delete any unsent outbox entries after confirmation of the setting change |
| Essential | Bounded reliability and delivery health | Installation/session pseudonyms and coarse operational outcomes only; no feature-use counts or project/thread counts |
| Product | Essential plus structured product usage | Activation, feature, provider, workflow, and retention events with allowlisted properties |
| Diagnostic | Product plus bounded technical diagnostics | Coarse duration buckets, failure classes, platform/build facts, and resource buckets; never raw logs or stack traces |
| Contribution | Explicit user-initiated submission | Separate reviewed payload and transport; not an automatic analytics tier |

Development, test, preview, and disposable worktree builds remain **Off** by
default and must use an explicit local override to exercise a synthetic
analytics environment. Production collection must not be enabled merely
because the implementation exists.

A consent change must take effect before the next event is recorded. Moving to
a lower level must purge ineligible unsent events locally. Remote deletion must
be available by random installation identifier and must remove corresponding
D1, PostHog, identity, consent, and link records. A consent record may preserve
the fact and time of the user's choice without retaining disallowed behavioral
events.

The initial selected-user beta should present a clear choice before Product
analytics begins. Essential collection should not be enabled by default until
the exact first-run copy, legal notice, and operational need receive human
review.

## Identity Model

Initial desktop analytics uses three random, opaque values:

- `installation:<uuid>` persists for one Scient installation until reset or
  deletion;
- `session:<uuid>` changes for each bounded app/server session; and
- a unique event identifier makes retries idempotent.

These identifiers must not be derived from provider accounts, user files,
hardware, network attributes, current Scient/Synara state, or T3 state.

Account linking remains disabled during the initial desktop implementation.
When selected-user cloud accounts exist, only an authenticated Scient service
may link an installation to an opaque `account:<uuid>`. Browser and desktop
clients must never assert account identity directly. Linking must not raise the
user's consent level or revive deleted history.

## Retention And Deletion Proposal

Until legal or operational requirements establish a stricter rule:

- D1 canonical raw events: 180 days;
- PostHog pseudonymous Product and Essential events: 13 months;
- Diagnostic events: 30 days;
- failed delivery metadata without event properties: 30 days;
- aggregate, non-identifying product metrics: may be retained longer; and
- Contribution payloads: follow the separate feedback workflow, not this plan.

Retention enforcement must be implemented and verified before desktop
production activation. Retention must not depend only on a dashboard filter.

## Event Contract

### Common envelope

Every accepted desktop event uses schema version 1 and includes:

| Field | Rule |
| --- | --- |
| `id` | Random event identifier, stable across retries |
| `name` | Registered event name only |
| `source` | `desktop` |
| `occurred_at` | UTC timestamp within the accepted replay window |
| `distinct_id` | Random installation identifier |
| `session_id` | Random session identifier when applicable |
| `privacy_level` | Minimum level required by the event definition |
| `consent_level` | User's effective level when recorded |
| `properties` | Registered, typed, bounded allowlist only |

Every desktop event also carries the bounded application version and build
channel. This permits release-regression analysis without adding a device,
project, thread, or provider-account identifier.

The gateway must reject an event when its declared privacy level does not match
the registry, its consent is insufficient, its property set is not exact, or a
value is outside its defined enum or range.

### Initial registered events

The first implementation should register this bounded catalog. “Existing seam”
means the T3-derived code already emits a useful call site; it does not mean
Scient currently sends the event.

| Event | Minimum level | Initial properties | Source seam | Initial disposition |
| --- | --- | --- | --- | --- |
| `app.session.started` | Essential | app version, build channel, platform, architecture | server lifecycle | Add in core |
| `app.session.ended` | Essential | duration bucket, shutdown class | server lifecycle | Add in core |
| `server.boot.heartbeat` | Essential | app version, build channel | existing startup seam | Keep, remove project/thread counts at Essential |
| `project.added` | Product | method: picker/drag-drop/recent | project registration | Instrument after core |
| `project.add.failed` | Essential | bounded stage: validation/inspection/registration/navigation | project registration | Instrument after core |
| `project.opened` | Product | existing/new, initialization state | project open | Instrument after core |
| `project.initialization.completed` | Product | outcome, files-created count bucket | Scient project init | Instrument after core |
| `project.initialization.failed` | Essential | bounded failure class | Scient project init | Instrument after core |
| `provider.session.started` | Product | provider kind, runtime mode, resume/cwd/model booleans | existing provider seam | Preserve through adapter |
| `provider.session.recovered` | Product | provider kind, strategy, resume boolean | existing provider seam | Preserve through adapter |
| `provider.session.stopped` | Product | provider kind, stop class | existing provider seam | Preserve through adapter |
| `provider.sessions.stopped_all` | Essential | count bucket, shutdown class | existing provider seam | Preserve with reduced properties |
| `provider.runtime_mode.changed` | Product | provider kind, from, to | existing provider seam | Preserve through adapter |
| `provider.turn.sent` | Product | provider kind, normalized model family, interaction mode, runtime mode, attachment count bucket, input boolean | existing provider seam | Preserve through adapter |
| `provider.turn.completed` | Product | provider kind, duration bucket, tool-use boolean, attachment boolean | orchestration terminal outcome | Add after core |
| `provider.turn.failed` | Essential | provider kind, bounded failure class, duration bucket | orchestration terminal outcome | Add after core |
| `provider.turn.interrupted` | Product | provider kind, initiator | existing provider seam | Preserve through adapter |
| `provider.request.responded` | Product | provider kind, request kind, decision | existing provider seam | Preserve through adapter |
| `provider.conversation.rolled_back` | Product | provider kind, turn-count bucket | existing provider seam | Preserve through adapter |
| `thread.created` | Product | creation source | orchestration thread lifecycle | Instrument after core |
| `thread.fork.completed` | Product | workspace mode, boundary class, refork boolean | Scient fork reactor | Instrument after core |
| `thread.fork.failed` | Essential | workspace mode, bounded failure class | Scient fork reactor | Instrument after core |
| `thread.revert.completed` | Product | boundary class | revert completion | Instrument after core |
| `thread.revert.failed` | Essential | bounded failure class | revert failure | Instrument after core |
| `voice.transcription.started` | Product | engine class, language mode | voice controller | Instrument after core |
| `voice.transcription.completed` | Product | engine class, duration bucket, audio-duration bucket | voice controller | Instrument after core |
| `voice.transcription.failed` | Essential | engine class, bounded failure class | voice controller | Instrument after core |
| `voice.transcription.cancelled` | Product | stage | voice controller | Instrument after core |
| `surface.opened` | Product | surface: files/preview/browser/terminal/usage/settings/whats-new | owning navigation seam | Instrument selectively |
| `setting.changed` | Product | setting: direction/theme/notifications, normalized value | settings controller | Instrument selectively |
| `scient.operation.started` | Product | registered operation kind, trigger | future Scient operation gateway | Reserve, do not emit yet |
| `scient.operation.completed` | Product | operation kind, duration bucket, review required boolean | future Scient operation gateway | Reserve, do not emit yet |
| `scient.operation.failed` | Essential | operation kind, bounded failure class | future Scient operation gateway | Reserve, do not emit yet |

Model values must be normalized through a maintained registry. Unknown or
custom model strings become `other`; raw model text is not transmitted.
Durations and counts use documented buckets rather than unbounded exact values
unless an exact value is necessary for a reliability metric and approved in
the registry.

## KPI Model

### Primary outcome

**Weekly Meaningful Active Installations (WMAI)** counts installations that,
during a seven-day window, either:

- complete at least three successful assistant turns across at least two app
  sessions; or
- complete at least one registered scientific operation.

This avoids treating an app launch or accidental click as meaningful use.

### Activation

An installation is activated when, within seven days of its first app session,
it:

1. adds or opens a project;
2. starts a provider session; and
3. completes a successful assistant turn.

Report overall conversion, time to activation, and loss at each step. A future
guided-provider funnel may add connection-specific stages without redefining
activation.

### Retention

Week-1 and Week-4 retained activation count activated installations that
qualify for WMAI in the corresponding later week. Report cohort denominators
and exclude installations without a complete observation window.

### Reliability guardrails

Track:

- successful assistant-turn rate;
- provider session start and recovery success;
- project initialization success;
- fork and revert success by workspace mode;
- voice transcription success;
- p50/p95 duration buckets for startup, turn completion, fork, and voice; and
- analytics delivery lag, rejection rate, retry depth, and D1/PostHog
  reconciliation.

Reliability metrics must distinguish user cancellation from failure.

## Dashboard Portfolio

| Dashboard | Primary decision |
| --- | --- |
| `00 Executive Product Health` | Are activation, meaningful use, retention, and reliability improving? |
| `01 Activation & Onboarding` | Where do new researchers fail to reach a successful first answer? |
| `02 Engagement & Retention` | Who returns, how deeply, and through which workflows? |
| `03 Providers & Agent Runtime` | Which providers, runtime modes, and lifecycle paths work reliably? |
| `04 Feature Adoption` | Which product capabilities earn repeated use? |
| `05 Reliability & Release Health` | Did a release create failures, latency, or recovery regressions? |
| `06 Scientific Workflows` | Which registered scientific operations create reviewed outcomes? |
| `07 Cloud & Mobile` | Are later cloud and mobile surfaces healthy and useful? |
| `90 Analytics Pipeline & Data Quality` | Is the measurement system complete, fresh, reconciled, and trustworthy? |

Dashboard definitions, descriptions, filters, and source queries must be kept
in version control and applied idempotently through the PostHog API. Personal
API keys remain in the operator's keychain and never enter Git or CI logs.
Dashboards must not be shared publicly by default.

## Performance, Volume, And Cost Budget

Analytics is subordinate to product work. The renderer may normalize a small
bounded event in memory and send a fire-and-forget request to the local Scient
server, but it must never wait for local persistence, gateway delivery, or
PostHog. SQLite and network work belong in the dedicated analytics worker.
Events are persisted in batches, sent in batches, and retried with bounded
backoff. Shutdown receives only a short local-persistence budget and never
waits for the network.

The initial operating budget is:

- no autocapture, session replay, pointer stream, keystroke stream, or generic
  click event;
- meaningful outcomes and failures are retained; low-value surface signals are
  coalesced to at most once per renderer session;
- the in-memory queue is capped at 1,000 events and the durable outbox at
  10,000, trimming summary events before core or critical events;
- desktop ingress is limited per random installation and remains behind an
  immediate Cloudflare kill switch;
- the pipeline dashboard reports rolling 30-day event volume against the
  current PostHog allowance; and
- operators review volume at 50%, 75%, and 90% of the chosen monthly budget
  before widening a cohort.

The current PostHog Product Analytics free allowance is one million events per
month. This is an operational planning input, not permission to collect weak
signals. If volume becomes material, reduce or coalesce summary events before
sampling failures or meaningful product outcomes.

## Implementation Sequence

### Phase 0 — Measurement constitution

- add this plan and reconcile affected documentation;
- review the event names and properties against actual implementation seams;
- establish forbidden-data and consent invariants as testable contracts; and
- keep all planned behavior clearly labeled.

### Phase 1 — Gateway and PostHog foundation

- replace syntactic event acceptance with a versioned registry and exact
  property validation;
- add deletion, retention, rejection, and reconciliation operations;
- keep D1 as the canonical first-party event ledger;
- preserve idempotent D1-to-PostHog forwarding and bounded retries;
- establish abuse-rate controls before widening desktop collection, since a
  public desktop client cannot safely hold a gateway secret;
- add a pipeline-health report that never prints user-level rows; and
- add version-controlled dashboard definitions and a dry-run/apply tool.

### Phase 2 — Inactive desktop analytics core

- add a Scient-owned analytics package with the shared registry types;
- add a separate durable outbox and random installation/session identity;
- implement consent filtering, downgrade purge, retry/backoff, and shutdown
  flush without blocking startup or user work;
- adapt the inherited `AnalyticsService` seam rather than scattering a second
  telemetry system through provider code; and
- leave production delivery disabled.

### Phase 3 — Core instrumentation and privacy UI

- activate only the registered lifecycle, project, provider, and turn events;
- implement the Data & Privacy choice, deletion/reset, offline behavior, and
  user-readable descriptions; and
- update the public privacy notice to describe implemented behavior exactly.

### Phase 4 — Feature coverage

- instrument fork/revert, voice, selected surfaces, and later scientific
  operations at their authoritative completion seams;
- avoid click-level noise when a meaningful outcome is available; and
- add dashboard tiles only after the underlying event is verified.

### Phase 5 — Selected-user activation

- test with synthetic identifiers and a non-production build channel;
- reconcile accepted events from desktop outbox to D1 and PostHog;
- verify consent changes, deletion, retention, offline retry, duplicate
  suppression, app shutdown, and gateway rejection behavior;
- complete human review of privacy copy and settings UX;
- enable only the approved selected-user cohort; and
- monitor pipeline health before widening collection.

## Current Evidence Snapshot

Read-only inspection on 2026-08-09 established:

- the PostHog project is EU-hosted, named `ScientFactory`, and has project ID
  `228610`;
- PostHog contained 594 events across six existing website/gateway event names;
- the canonical D1 `analytics_events` ledger contained the same 594 events and
  all were marked `sent`, providing an exact aggregate reconciliation at the
  inspection time;
- the production gateway reported storage and PostHog forwarding configured;
- authenticated account identity linking remained unconfigured;
- `scient-desktop-next` still provides `AnalyticsService.layerDisabled` in
  production candidate startup and therefore sends no desktop analytics;
- the gateway enforces bounded payloads and pseudonymous installation identity
  but currently accepts syntactically valid event names and arbitrary bounded
  property objects; and
- the website privacy notice describes planned desktop privacy levels that are
  not yet implemented in the candidate and must remain clearly future-facing
  until Phase 3 lands.

This snapshot is evidence, not a permanent health claim. Re-run reconciliation
before each activation or release gate.

## Draft Implementation Progress

Work on 2026-08-09 advances the safe, inactive foundation without authorizing
production desktop collection. The earlier foundation PRs are integrated. The
current work is published for review as the `scient-desktop-next` draft stack
[#22](https://github.com/ScientFactory/scient-desktop-next/pull/22),
[#23](https://github.com/ScientFactory/scient-desktop-next/pull/23), and
[#24](https://github.com/ScientFactory/scient-desktop-next/pull/24), plus the
website gateway draft
[#20](https://github.com/ScientFactory/ScientFactory-website/pull/20). Published
still does not mean merged, enabled, deployed, or release-proven:

- the website foundation and current hardening provide a 33-event
  schema-version-1
  registry, aggregate D1/PostHog reconciliation, and an idempotent dashboard
  manager;
- the current website hardening adds an explicit production ingress kill
  switch, per-installation rate limiting without IP storage, installation-owned
  deletion credentials, bounded retries through PostHog's supported
  distinct-ID person/event deletion API, a 180-day D1 retention job, one
  identity write per batch, and prepared source queries for dashboards `00`
  through `07`;
- the EU PostHog project now has the source-backed `90 — Scient analytics
  pipeline and data quality` dashboard with four current-coverage insights;
- dashboards `00` through `07` remain version-controlled prepared definitions,
  not misleading empty live dashboards; the manager will apply them only after
  their required events are observed and reconciled;
- the desktop SQLite outbox and all network delivery now run in a dedicated
  worker thread, with bounded memory and disk queues, batched persistence,
  priority-aware trimming, retry/backoff, corrupt-row quarantine, and a
  300-millisecond local-only shutdown budget;
- canonical provider and orchestration streams supply bounded provider, public
  model-key, completion, failure, duration, tool, attachment, fork, revert, and
  project-initialization outcomes;
- narrow Scient-owned UI adapters add project, new-thread, voice, selected
  surface, and direction-setting events without generic click tracking;
- a user privacy control can change consent dynamically, purge ineligible local
  events, request deletion, and rotate the anonymous installation identity; and
- the desktop server remains fully Off unless the master build gate is
  deliberately enabled. Development and worktree builds therefore remain Off.

Remote deletion is deliberately conservative. D1 deletion and local identity
rotation are implemented. Forwarded desktop events create only a pseudonymous
PostHog person record, without person properties, so the scheduled gateway can
submit the opaque distinct ID to PostHog's supported person/event deletion API.
Failed submissions remain visible as pending and become blocked after ten
attempts for operator review. This is implemented but not deployed or
release-proven; production activation still requires a narrow `person:write`
secret, a configured project ID, and an end-to-end selected-user proof. The UI
describes an accepted deletion request and does not claim immediate remote
erasure.

## Activation Gates

Desktop production collection remains prohibited until all are true:

1. the registered event catalog and property allowlists are current;
2. no T3 PostHog key, host, identity path, or direct SDK is reachable;
3. development and disposable worktree builds are Off by default;
4. consent is applied before enqueue and downgrade purges are proven;
5. deletion and retention are implemented and proven across D1 and PostHog,
   including successful submission and observable handling of blocked retries;
6. startup and user actions never wait for analytics delivery;
7. offline, retry, duplicate, shutdown, and corrupt-outbox cases pass focused
   tests;
8. gateway rejects unregistered events and properties;
9. D1/PostHog reconciliation and pipeline-health dashboards are verified;
10. gateway abuse-rate controls and analytics-integrity monitoring are active;
11. privacy copy and the Data & Privacy experience receive human review; and
12. Yaacov explicitly authorizes the selected-user production cohort.

## Decisions Deferred Without Blocking Safe Implementation

- the final Essential default for selected-user beta;
- exact account-link activation and account-service authority;
- final alert recipients and operating cadence;
- whether aggregate metrics need retention beyond the proposed periods; and
- later cloud/mobile-specific properties and scientific operation kinds.

These decisions block only their associated activation or feature coverage.
They do not block the disabled gateway, desktop core, registry, tests, or
dashboard-definition work.
