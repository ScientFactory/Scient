# Product Measurement And Analytics Plan

Status: Proposed
Owner: Yaacov
Created: 2026-08-09
Last updated: 2026-09-06
Purpose: Defines the proposed product-measurement contract, privacy boundary, implementation sequence, event catalog, KPI model, dashboard portfolio, and activation gates for Scient.
Doc type: Planning note

## Document Rules

This document owns the cross-repository plan for measuring how Scient is used
and whether it creates reliable researcher value. It does not make planned
events, dashboards, privacy controls, or retention jobs implemented behavior.
The accepted [Product Requirements](../product/PRD.md), draft [Product
Philosophy](../product/product-philosophy.md), and accepted [T3-derived desktop
foundation decision](../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
govern conflicts.

The `Scient` repository owns measurement meaning and policy. The website
repository owns the first-party gateway, D1 schema, PostHog forwarding, and
dashboard-management code. `scient-desktop` owns the desktop adapter,
local consent and outbox state, instrumentation, and user-facing privacy
controls. Each repository must use an independent branch, worktree, commit,
and pull request.

The August 9 and August 31 snapshots below are historical. The
[September 6 recovery decision](#september-6-recovery-decision) supersedes their
storage/activation restrictions where stated. None of these snapshots proves
current production health. This remains a revisable proposition: qualify each seam
against its real behavior, improve the plan when evidence requires it, and do
not add abstraction or instrumentation solely to satisfy a checklist.

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
  -> Essential/Product-class pseudonymous EU PostHog copy
  -> governed dashboards and alerts
```

Diagnostic-class records stay in the central D1 ledger and its operator report,
not in PostHog. The local outbox is only a delivery buffer, not the team's data store.

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

| Level        | Meaning                                    | Outbound behavior                                                                                                    |
| ------------ | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Off          | No analytics leaves the device             | Do not enqueue; delete any unsent outbox entries after confirmation of the setting change                            |
| Essential    | Bounded reliability and delivery health    | Installation/session pseudonyms and coarse operational outcomes only; no feature-use counts or project/thread counts |
| Product      | Essential plus structured product usage    | Activation, feature, provider, workflow, and retention events with allowlisted properties                            |
| Diagnostic   | Product plus bounded technical diagnostics | Coarse duration buckets, failure classes, platform/build facts, and resource buckets; never raw logs or stack traces |
| Contribution | Explicit user-initiated submission         | Separate reviewed payload and transport; not an automatic analytics tier                                             |

Development, test, preview, and disposable worktree builds remain **Off** by
default and must use an explicit local override to exercise a synthetic
analytics environment. Production collection must not be enabled merely
because the implementation exists.

A consent change must take effect before the next event is recorded. Moving to
a lower level must purge ineligible unsent events locally. Remote deletion must
be available by random installation identifier and must remove corresponding
D1, PostHog, identity, consent, and link records. An erasure receipt and a
minimal non-behavioral tombstone are the explicit exception: retaining the
opaque installation ID and authentication hash prevents late retries from
recreating deleted history. This safeguard's lifetime needs privacy-owner
review; it must not become a retained behavioral profile. The gateway's
last-observed consent is not authoritative current consent: offline clients may
deliver older observations later.

The initial selected-user beta should present a clear choice before Product
analytics begins. Essential collection should not be enabled by default until
the exact first-run copy, legal notice, and operational need receive human
review.

## Identity Model

Initial desktop analytics uses three random, opaque values:

- `installation:<uuid>` persists for one Scient server-state profile until reset or
  deletion;
- `session:<uuid>` changes for each bounded app/server session; and
- a unique event identifier makes retries idempotent.

These identifiers must not be derived from provider accounts, user files,
hardware, network attributes, current Scient/Synara state, or T3 state.

An installation is not a person or necessarily a physical computer. Isolated
profiles, remote servers, WSL, reinstalls, and identity resets affect counts.
Do not infer total users, total installations, or adoption by non-consenting
users from this population. No cross-device fingerprinting is permitted.

Account linking remains disabled during the initial desktop implementation.
When selected-user cloud accounts exist, only an authenticated Scient service
may link an installation to an opaque `account:<uuid>`. Browser and desktop
clients must never assert account identity directly. Linking must not raise the
user's consent level or revive deleted history.

## Retention And Deletion Proposal

Until legal or operational requirements establish a stricter rule:

- D1 canonical raw events: 180 days;
- PostHog pseudonymous Product and Essential events: provider-managed retention;
- Diagnostic events: 30 days in Scient's first-party storage, never exported to PostHog;
- failed delivery metadata without event properties: 30 days;
- aggregate, non-identifying product metrics: may be retained longer; and
- Contribution payloads: follow the separate feedback workflow, not this plan.

Retention enforcement must be implemented and verified before desktop
production activation. Retention must not depend only on a dashboard filter.
Desktop event age is measured from occurrence, not reset by offline delivery
or retries. D1 also enforces its receipt-age limit. Ingestion and forwarding
must reject/skip expired desktop data before scheduled pruning catches up.

The owner approved this storage split on September 6 instead of the earlier
unqualified 13-month/30-day PostHog physical-deletion requirements. A project
query-access window must not be described as physical retention enforcement.

## Event Contract

### Common envelope

Every accepted desktop event uses schema version 1 and includes:

| Field           | Rule                                            |
| --------------- | ----------------------------------------------- |
| `id`            | Random event identifier, stable across retries  |
| `name`          | Registered event name only                      |
| `source`        | `desktop`                                       |
| `occurred_at`   | UTC timestamp within the accepted replay window |
| `distinct_id`   | Random installation identifier                  |
| `session_id`    | Random session identifier when applicable       |
| `privacy_level` | Minimum level required by the event definition  |
| `consent_level` | User's effective level when recorded            |
| `properties`    | Registered, typed, bounded allowlist only       |

Every desktop event also carries the bounded application version and build
channel. This permits release-regression analysis without adding a device,
project, thread, or provider-account identifier.

The gateway must reject an event when its declared privacy level does not match
the registry, its consent is insufficient, its property set is not exact, or a
value is outside its defined enum or range.

### Initial registered events

This is the original revision-1 catalog. The source-owned revision-2 contract
and coverage checkpoint below supersede its implementation dispositions;
registered names are not evidence that a producer exists. “Existing seam”
means the T3-derived code already emits a useful call site; it does not mean
Scient currently sends the event.

| Event                               | Minimum level | Initial properties                                                                                             | Source seam                     | Initial disposition                             |
| ----------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------------------------------------------- |
| `app.session.started`               | Essential     | app version, build channel, platform, architecture                                                             | server lifecycle                | Add in core                                     |
| `app.session.ended`                 | Essential     | duration bucket, shutdown class                                                                                | server lifecycle                | Add in core                                     |
| `server.boot.heartbeat`             | Essential     | app version, build channel                                                                                     | existing startup seam           | Keep, remove project/thread counts at Essential |
| `project.added`                     | Product       | method: picker/drag-drop/recent                                                                                | project registration            | Instrument after core                           |
| `project.add.failed`                | Essential     | bounded stage: validation/inspection/registration/navigation                                                   | project registration            | Instrument after core                           |
| `project.opened`                    | Product       | existing/new, initialization state                                                                             | project open                    | Instrument after core                           |
| `project.initialization.completed`  | Product       | outcome, files-created count bucket                                                                            | Scient project init             | Instrument after core                           |
| `project.initialization.failed`     | Essential     | bounded failure class                                                                                          | Scient project init             | Instrument after core                           |
| `provider.session.started`          | Product       | provider kind, runtime mode, resume/cwd/model booleans                                                         | existing provider seam          | Preserve through adapter                        |
| `provider.session.recovered`        | Product       | provider kind, strategy, resume boolean                                                                        | existing provider seam          | Preserve through adapter                        |
| `provider.session.stopped`          | Product       | provider kind, stop class                                                                                      | existing provider seam          | Preserve through adapter                        |
| `provider.sessions.stopped_all`     | Essential     | count bucket, shutdown class                                                                                   | existing provider seam          | Preserve with reduced properties                |
| `provider.runtime_mode.changed`     | Product       | provider kind, from, to                                                                                        | existing provider seam          | Preserve through adapter                        |
| `provider.turn.sent`                | Product       | provider kind, normalized model family, interaction mode, runtime mode, attachment count bucket, input boolean | existing provider seam          | Preserve through adapter                        |
| `provider.turn.completed`           | Product       | provider kind, duration bucket, tool-use boolean, attachment boolean                                           | orchestration terminal outcome  | Add after core                                  |
| `provider.turn.failed`              | Essential     | provider kind, bounded failure class, duration bucket                                                          | orchestration terminal outcome  | Add after core                                  |
| `provider.turn.interrupted`         | Product       | provider kind, initiator                                                                                       | existing provider seam          | Preserve through adapter                        |
| `provider.request.responded`        | Product       | provider kind, request kind, decision                                                                          | existing provider seam          | Preserve through adapter                        |
| `provider.conversation.rolled_back` | Product       | provider kind, turn-count bucket                                                                               | existing provider seam          | Preserve through adapter                        |
| `thread.created`                    | Product       | creation source                                                                                                | orchestration thread lifecycle  | Instrument after core                           |
| `thread.fork.completed`             | Product       | workspace mode, boundary class, refork boolean                                                                 | Scient fork reactor             | Instrument after core                           |
| `thread.fork.failed`                | Essential     | workspace mode, bounded failure class                                                                          | Scient fork reactor             | Instrument after core                           |
| `thread.revert.completed`           | Product       | boundary class                                                                                                 | revert completion               | Instrument after core                           |
| `thread.revert.failed`              | Essential     | bounded failure class                                                                                          | revert failure                  | Instrument after core                           |
| `voice.transcription.started`       | Product       | engine class, language mode                                                                                    | voice controller                | Instrument after core                           |
| `voice.transcription.completed`     | Product       | engine class, duration bucket, audio-duration bucket                                                           | voice controller                | Instrument after core                           |
| `voice.transcription.failed`        | Essential     | engine class, bounded failure class                                                                            | voice controller                | Instrument after core                           |
| `voice.transcription.cancelled`     | Product       | stage                                                                                                          | voice controller                | Instrument after core                           |
| `surface.opened`                    | Product       | surface: files/preview/browser/terminal/usage/settings/whats-new                                               | owning navigation seam          | Instrument selectively                          |
| `setting.changed`                   | Product       | setting: direction/theme/notifications, normalized value                                                       | settings controller             | Instrument selectively                          |
| `scient.operation.started`          | Product       | registered operation kind, trigger                                                                             | future Scient operation gateway | Reserve, do not emit yet                        |
| `scient.operation.completed`        | Product       | operation kind, duration bucket, review required boolean                                                       | future Scient operation gateway | Reserve, do not emit yet                        |
| `scient.operation.failed`           | Essential     | operation kind, bounded failure class                                                                          | future Scient operation gateway | Reserve, do not emit yet                        |

Model values must be normalized through a maintained registry. Unknown or
custom model strings become `other`; raw model text is not transmitted.
Durations and counts use documented buckets rather than unbounded exact values
unless an exact value is necessary for a reliability metric and approved in
the registry.

## KPI Model

### Primary outcome

**Weekly Meaningful Active Installations (WMAI)** counts installations that,
during one complete calendar week, either:

- complete at least three successful assistant turns across at least two app
  sessions; or
- complete at least one registered scientific operation.

Count deduplicated event IDs among Product/Diagnostic participants. Only
completed `pdf-export`, `source-import`, `compute-run`, `compute-artifact`,
`latex-build`, or `document-export` outcomes qualify as scientific work; a
browser action or preview open does not. A completed technical operation is
not evidence that the researcher reviewed or accepted its scientific result.
Skipped/no-op outcomes never qualify. Source imports count successful
source-store item attempts, not entire batches; retries of already saved
sources are skips rather than additional useful completions.
Run File capture qualifies only when its saved receipt succeeds with at least
one artifact. Empty capture is skipped; partial/failed capture is not a
successful scientific operation. This is one capture workflow per admitted
run, not a count of figures or evidence of scientific review.
Interactive compute similarly counts one capture summary per admitted
execution, not each output/update. Only retained rich output without a capture
failure completes. Empty/text-only execution skips capture even when the code
fails or is cancelled; those execution outcomes are reported separately.
Retaining output is not proof of rendering or human acceptance.
Browser PDF completion means the initiating render/publication/presentation
flow succeeded; it does not establish visual fidelity. PDF Save Copy counts as
completed `document-export` only with a host `saved` receipt. Browser download
requests are unconfirmed and must not count as durable-save completion or be
inferred to have failed. These observers do not cover other export formats.
Keep execution/capture outcomes grouped by operation kind rather than adding
them as independent user jobs; WMAI still counts the installation only once.

This avoids treating an app launch or accidental click as meaningful use.
The initial dashboard shows twelve complete weeks and excludes the current
partial week. Qualify the PostHog project timezone/week boundary before
publication and keep it consistent across activation and retention; the local
counterexample tests use Sunday-start UTC weeks. Any rolling seven-day or
week-to-date view must be labelled separately rather than silently changing
this metric's denominator.

The current session identifier describes an analytics-enabled server/runtime
session, not a human visit or a new foreground window. A continuously running
server can span several days. Keep that limitation visible when qualifying the
two-session criterion; do not relabel runtime sessions as visits or add wakeups
just to make the metric easier to count.

### Activation

The measurable initial funnel is **first-observed Product participation**, not
physical installation time. Its server-owned cohort anchor is the earliest
eligible event observed after cohort tracking was introduced; legacy identities
with unknown starts are excluded rather than assigned a fabricated start.
Within seven days of that anchor, an installation:

1. opens a project (including a newly added project);
2. starts a provider session; and
3. completes a successful assistant turn.

Report overall conversion, time to activation, and loss at each step. A future
guided-provider funnel may add connection-specific stages without redefining
activation.

Require these steps in order. Report only seven-day-mature cohorts in conversion
denominators and show immature cohorts separately. Late/offline arrivals can
revise a historical cohort; dashboards must state their observation window.

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

Reliability metrics must distinguish user cancellation from failure. A Stop
request is not a second terminal outcome. Product success rates must use
successes and failures from the same Product/Diagnostic population; Essential
failures remain useful counts but cannot be mixed into that denominator. Bucket
histograms are not exact p50/p95 timings. Unproduced events, missing data, and
unknown classifications must remain visibly unknown rather than zero.

## Dashboard Portfolio

| Dashboard                              | Primary decision                                                        |
| -------------------------------------- | ----------------------------------------------------------------------- |
| `00 Executive Product Health`          | Are activation, meaningful use, retention, and reliability improving?   |
| `01 Activation & Onboarding`           | Where do new researchers fail to reach a successful first answer?       |
| `02 Engagement & Retention`            | Who returns, how deeply, and through which workflows?                   |
| `03 Providers & Agent Runtime`         | Which providers, runtime modes, and lifecycle paths work reliably?      |
| `04 Feature Adoption`                  | Which product capabilities earn repeated use?                           |
| `05 Reliability & Release Health`      | Did a release create failures, latency, or recovery regressions?        |
| `06 Scientific Workflows`              | Which registered scientific operations complete successfully?           |
| `07 Cloud & Mobile`                    | Are later cloud and mobile surfaces healthy and useful?                 |
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
- the pipeline dashboard reports rolling 30-day event volume; any cost/budget
  comparison uses the operator's current plan and actual billing period; and
- operators review volume at 50%, 75%, and 90% of the chosen monthly budget
  before widening a cohort.

Do not hardcode an assumed free allowance as a current billing fact. If volume
becomes material, reduce or coalesce summary events before sampling failures or
meaningful product outcomes.

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

## Historical August 9 Implementation Progress

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

## September 6 Recovery Decision

Yaacov authorized recovery, completion and activation of the analytics work,
then explicitly accepted first-party-only diagnostics with PostHog-managed
retention for Product/Essential copies. This replaces the former proposal to
block activation until PostHog offered configurable physical-deletion deadlines.
It does not authorize collecting research content or overriding user consent.

The three original dirty worktrees were snapshotted and left untouched; their
useful changes were recovered onto fresh `codex/analytics-recovery-20260906`
branches. This is still a local candidate, not a merged/deployed/released claim.
The desktop recovery base is `6ad24893f139b1bf02b2ba96b48931ad1fd0fdc9`;
website and Scient bases remain those in the historical table below.

Current implementation and qualification owners are the desktop analytics
document and website README. The recovery adds Pi to the bounded registry,
suppresses inherited terminal-event double counting, fences lifecycle history
and buffered events across consent/deletion, and forwards bounded renderer
termination observations without raw crash details. Packaged release builds
make settings available; consent remains Off by default and existing choices
are preserved. This is not silent opt-in or a claim to measure all users.

Diagnostics are available centrally through the website's
`bun run analytics:report`, including 30-day breakdowns and maintenance status.
PostHog reconciliation excludes these deliberately first-party-only records.
PostHog deletion requests complete only after provider verification; pending
and blocked failures remain operator-visible. Serialized delivery, deletion
tombstones and identity rotation prevent intentional reuse. Verification is
not a promise of a synchronous transaction over ambiguous provider captures.
Legacy records without sufficient erasure evidence still need operator review.

The fresh candidate has passed focused backend/privacy tests and the built
worker-to-gateway proof under both ordinary Node and Electron's non-GUI runtime.
Prepared HogQL queries were also accepted by the live project in a read-only
check. These checks do not prove production deployment, human privacy review,
or a release. Gateway migration/deployment, synthetic live delivery/deletion,
human consent-copy review, and the desktop release remain separate gates.

Read-only PostHog project inspection on September 6 reported a 12-month
query-access window and `events_retention_enforced=false`; this is not a
configurable physical-deletion guarantee. See
[PostHog data storage and deletion](https://posthog.com/docs/privacy/data-storage).

## August 31 Readiness Checkpoint

This is local implementation evidence, not merged, deployed, activated, or
release-proven behavior. The three dedicated `codex/analytics-readiness-20260831`
branches are independent candidates. Current implementation details belong to
`scient-desktop/docs/internals/product-analytics.md` and the website README;
this plan owns meaning, policy, sequencing, and unresolved choices.

### Implemented locally

- One desktop-owned revision-2 wire validator generates the gateway copy; a
  90-case corpus covers all 45 registered events and private-input normalization.
  Schema version 1 remains compatible; the optional bounded contract revision
  distinguishes producers without accepting arbitrary extensions.
- The master gate and Off preference remain inert. UI discovery is coalesced,
  events are not replayed before consent, in-flight work is bounded, and Off
  produces no per-action analytics request. Consent controls fence pending
  work, discard correlation state, purge ineligible rows, and fail closed on
  invalid saved preferences. The privacy settings wording identifies the random
  installation identifier instead of claiming anonymous usage; controls,
  defaults and flow are unchanged and still require human review.
- Worker-owned batching, retry limits, strict persisted-row revalidation,
  bounded quarantine metadata, age limits, and local-only shutdown protect
  product responsiveness. No idle delivery timer runs with an empty queue.
- Provider discovery/readiness/source changes and observed managed install,
  update, repair, remove, sign-in, and sign-out outcomes use canonical owners.
  Turn cancellation is separate from failure. Compute and LaTeX use durable
  outcomes; agent PDF export observes the completed build effect, not acceptance
  of an asynchronous job. Revert failures use the existing canonical activity
  kind without reading its private summary/details; successful and failed
  revert notifications are deduplicated locally. Local operation keys never
  enter event properties.
- Run File's separate analysis service also observes newly persisted
  submissions and terminal results through the existing operation observer.
  Both compute services distinguish new submissions from queue/phase updates,
  so progress after a consent reset cannot restart tracking old work. Duration
  includes queue time. Recovered history is not replayed, and successful
  computation does not imply successful artifact capture or scientific review.
- Run File's requested artifact capture now has separate started/completed/
  failed/cancelled/skipped outcomes from its saved receipts. Empty capture
  cannot count as meaningful work; partial failure stays visible even when
  figures were saved. Later run failure does not erase a recorded capture
  success. Durations include queueing/execution; this is not a count of figures
  or coverage of interactive-compute output publication. No new transport,
  runtime authority, or event properties were added for this follow-up.
- Interactive compute now separately summarizes retained rich outputs and
  generated project figures at its existing persistence/collection seams.
  Repeated chart/display updates produce one capture result per execution,
  not one analytics event per update. Empty/text-only work skips capture;
  partial/rejected capture fails; retained output can complete even if the
  execution itself fails or is interrupted. Correlation includes session
  generation, is bounded in memory, and is discarded at consent changes.
  No output, warning text, transcript scan, extra filesystem/network request,
  transport change or scientific-state owner is introduced.
- Browser PDF generation and PDF Save Copy now observe the existing user
  flow without adding UI state, polling or awaiting analytics. Coalesced PDF
  requests emit one attempt; completion follows publication and presentation/
  association checks. Save Copy distinguishes confirmed saves, cancellation,
  failure and unconfirmed web download requests. Private content and paths are
  never inspected by the observers. A short-lived server consent context
  fences delayed UI outcomes across controls, deletion and restarts, and is
  removed before analytics recording. Older clients keep their existing
  protocol; older servers do not enable these new UI-operation observations.
  Failed controls recover through bounded discovery on later activity, not a
  timer or replay. Registry revision/event properties remain unchanged.
- Source-import observation now covers actual item attempts in local PDF and
  Zotero batches and agent source additions. A saved source-store result,
  duplicate/possible-match skip and failure are distinct; the new bounded
  `scient.operation.skipped` event never qualifies for WMAI. Polling, begin,
  cancelled pending work and restored terminal history do not create attempts.
  A genuine retry is measured anew. No source metadata, private identifiers or
  errors cross the observer, and consent resets suppress in-flight completions.
  Later batch bookkeeping/cleanup errors do not undo a successful source-store
  result or change existing product failure/retry behavior. This is item-level
  persistence coverage, not a claim of batch conversion or review acceptance.
- Packaged desktop metadata supplies the real app version to native and WSL
  backends without changing collection/consent gates. Diagnostics are bounded
  delivery summaries, not logs, exception text, or continuous resource polling.
- The gateway adds atomic erasure/tombstone handling, conservative legacy
  migration, monotonic observation timestamps, stable capture UUIDs, serialized
  bounded export, and a separate disabled desktop-to-PostHog gate. Website
  forwarding remains independent. D1 retention includes the 30-day diagnostic
  limit and reports an unfinished backlog instead of false success.
- Reconciliation compares the same source, occurrence window, and event-ID
  grain. Pending delivery, outstanding erasures, mismatches, and no data are
  distinct. Operator requests have fixed destinations, time/body limits, and
  no blind retries of dashboard creation.
- Prepared metrics have synthetic counterexample tests for ordered activation,
  consent/source denominators, complete weeks, mature retention and terminal
  durations. These execute the query logic through a small local SQL adapter;
  they do not replace real HogQL execution or installed-dashboard review.
  Renamed managed insights retain aliases so correction does not duplicate
  the existing dashboard tiles.

### Local qualification evidence

Checked August 31 on the uncommitted candidates below. A base revision identifies
the checkout, not the entire candidate: review the local diff as well. None of
this evidence authorizes activation or describes production deployment.

| Repository       | Candidate base                             | Remote `main` checked |
| ---------------- | ------------------------------------------ | --------------------- |
| `scient-desktop` | `6e608aadf29ad083c46c8552fea6a1ce4b4e7554` | Same as base          |
| `website`        | `36b92247ead94cb5d4e38f54e3fc48ca3eaf74ec` | Same as base          |
| `Scient`         | `3689423e411cdf66b48a2ef86235319aa27dc060` | Same as base          |

- The original desktop base was `16266e27782c98d7d3a5722998ccddda9de7c218`.
  After its full server run passed 4,351 tests with 40 skipped, the dedicated
  branch fast-forwarded to current `main` above. Hash comparisons proved every
  tracked diff and untracked file survived unchanged. No commit, stash, reset,
  rebase, or push was used; dependencies were refreshed with the frozen lockfile.
- On the candidate base above, full-repository type checking, production builds, lint,
  formatting and branding checks passed. Existing unrelated lint warnings remain.
  The recursive full test run (`pnpm exec vp run -r --concurrency-limit 2 test`)
  passed all 26 tasks after source-import instrumentation, including 4,387
  server tests (40 skipped), 4,290 web tests and 691 desktop tests (10 skipped).
  Focused observer tests cover eight
  cases and the UI consent/recovery gate covers five.
- The 69-test Run File, interactive-compute and shared-operation suite covers
  durable success/failure/cancellation, observer failure, Off-to-Product and
  consent-reset transitions, queue advancement and history recovery. Eight new
  integration cases were added for the Run File/consent follow-up; the full
  repository checks above were repeated afterward. A separate read-only review
  found no actionable issue in that follow-up; it was source/test review, not
  another independent test run or human product acceptance.
- The source-import follow-up passed 41 coordinator/MCP/analytics tests,
  including 11 new cases for failure/retry, duplicates, cancellation, consent
  changes, observer defects, and saved sources followed by cleanup failure.
  Independent review found the cleanup seam needed to observe the saved store
  result; that issue was fixed and the targeted recheck passed.
- The subsequent Run File artifact follow-up passed 91 analysis, local-store,
  interactive-compute and shared-observer tests, including 14 new artifact
  cases. They cover nonempty/empty capture, partial warnings, collection and
  publication failures, process failure, later bookkeeping failure, queued
  cancellation, preparation failure, Off, consent reset, and observer failure.
  Review found cancellation could mask a saved partial capture failure; the
  mapping was corrected and two store-publication-barrier tests prove both
  capture success and failure survive concurrent cancellation. The independent
  targeted recheck passed with no remaining finding in that correction.
  Server type checking, scoped lint, formatting and production bundle passed.
  The 26-task result above predates the Run File artifact and interactive-output
  follow-ups and is not a full-suite claim for the newer diff.
- The interactive-output follow-up passed 110 focused compute-session,
  analysis and operation-observer tests. Synthetic transports with real local
  storage cover images, rich bundles, chart updates, collected project figures,
  warnings, missing resources, budget rejection, failed/lost execution,
  interruption, Off, observer defects and consent reset. Helper tests prove
  bounded correlation and duplicate/post-terminal suppression. Review caught
  execution failure being incorrectly labelled as empty-capture failure, and
  an ignored test injection; both were corrected and the independent
  correction-only recheck found no actionable issue. Server type checking,
  scoped lint, formatting, production bundling and generated wire/corpus parity
  passed. No new transport contract or event properties were added.
- Website `bun run check` passed formatting, type/binding checks, 131 tests,
  Astro generation and Worker compilation. Its one opt-in cross-repository test
  is skipped by default, then was executed separately against the built desktop
  candidate with synthetic records, actual SQLite and loopback-only transport.
- That built-worker/gateway proof also passed under Electron 41.5.0 / Node
  24.15.0 in `ELECTRON_RUN_AS_NODE` mode, without opening a window. It covers
  normalized delivery (including the new skipped event), runtime-source
  metadata, consent reduction, deletion and rejected late replay; PostHog is
  mocked rather than a live provider proof.
- Exact generated wire/corpus parity and whitespace checks passed across the
  candidates. Query counterexamples execute locally; live HogQL parsing and
  the real PostHog project's time boundaries still require qualification.
- No desktop merge conflict occurred. The qualification above refers to this
  exact `main` snapshot, not future upstream changes. Recheck the base and
  applicable checks when preparing a pull request.

No production data, credentials, dashboard mutation, deployment, publication,
or collection activation was used for this qualification. Real privacy-UI
acceptance, Windows/Linux packaging, hosted D1 behavior and external retention/
erasure guarantees are not covered by these local results.
The generic GUI desktop-smoke command was not rerun on this final base because
no GUI launch was authorized. The non-GUI Electron proof above validates the
analytics worker boundary, not the entire desktop UI; capture the normal
integrated/manual evidence before merge or activation as applicable.

### Coverage boundaries to finish or qualify

The event registry is not a promise of exhaustive coverage. In particular,
non-PDF document/figure exports, fork-failure
producers, desktop/renderer crash coverage, update/migration outcomes,
and cloud/mobile instrumentation require owner-specific qualification before
their dashboards can claim coverage. Provider source _changes_ are observed;
an explicit source-switch funnel is not inferred from them. Never parse raw
provider error output merely to fill a failure category.

Source-import preflight/PDF preparation, batch abandonment, later bookkeeping/
cleanup failures and review acceptance remain separate uninstrumented outcomes.
Do not infer those funnels from the item-attempt producer or count batch
`state: completed` as proof that every item succeeded.

Fork failures need attempt semantics, not another generic terminal hook:
`ScientForkReactor` persists some failed provisioning attempts for retry after
restart, while terminal abandonment can remove the unusable thread. Do not
count every failed attempt as an irrecoverable fork, infer failure from a thread
deletion, or parse the saved error. Revert coverage instead has an existing
canonical `checkpoint.revert.failed` activity and does not require such a new
lifecycle model. This is an intentional distinction, not a reason to force
both operations into the same instrumentation.

Concurrent compute authority work must include its server-resolved workspace
binding/generation in **local-only** dedupe keys. Keep analytics downstream of
the durable execution publication. Do not add a second mutation, session,
operation, or scientific-state owner.

### Historical external-proof blocker — superseded September 6

The following records why the August candidate stayed inactive. The September 6
storage decision above replaces this candidate's permanent completion block
and proposed PostHog retention requirements; it does not erase the limitations
of asynchronous provider APIs.

The current public API evidence does not prove an end-to-end erasure barrier:
capture acknowledgement is asynchronous, and PostHog verifies a deletion
predicate with a cutoff rather than guaranteeing that all ambiguous/in-flight
captures have settled. Seeing a capture UUID is not proof that every retry is
settled. Repeated deletion requests or arbitrary sleeps do not close this gap.

The candidate therefore completes erasures locally/D1 when no export was ever
attempted; attempted exports submit/poll the provider operation but remain
`blocked` with `export-settlement-unverified` after provider verification.
Legacy erasures without trustworthy credentials/settlement evidence remain
blocked. Account-linked desktop erasure is not guessed: desktop account linking
is disabled until its scoped deletion model is qualified.

Physical PostHog retention at 13 months for Product/Essential and 30 days for
Diagnostic also lacks verified enforcement. Query visibility settings are not
physical deletion proof. Before activation, obtain a provider-supported
guarantee/operator procedure for both erasure settlement and retention, or
explicitly decide on a different analysis architecture/policy. A D1-only
analysis path may be considered; it is not silently adopted by this candidate.

Evidence inspected August 30–31: [PostHog ingestion pipeline](https://posthog.com/docs/how-posthog-works/ingestion-pipeline),
[event deletion cutoff](https://github.com/PostHog/posthog/blob/e62b8dd5e87c8af6819fc2372c18b1172b10df51/posthog/models/async_deletion/delete_events.py#L139-L180),
and [team retention configuration](https://github.com/PostHog/posthog/blob/e62b8dd5e87c8af6819fc2372c18b1172b10df51/posthog/api/team.py#L1024-L1032).
Recheck these provider-dependent findings before changing the gate.

### Historical August 31 qualification and release order

1. Review the local desktop and gateway candidates, forbidden-data/conformance
   tests, lifecycle/outcome tests, performance bounds, and built-worker proof.
   Rehearse changes against current `main`; do not rewrite generic T3 services
   merely for telemetry. Supported-platform packaging/runtime proof is a
   separate gate from unit tests on one Mac.
2. Integrate gateway contract/migration support **with both desktop gates Off**
   before releasing revision-2 desktop producers. Apply/verify migrations and
   retention on the exact approved deployment, not just local SQLite. This
   order is mandatory because old gateways reject new properties/event names.
3. Qualify live aggregate reconciliation, exact HogQL queries, deletion,
   retention, rate limiting, and dashboards with authorized synthetic data.
   Unit tests do not prove deployed D1 or PostHog behavior. A dashboard marked
   `planned` stays uninstalled until its producers/population are verified.
   Installation tokens prove pseudonymous continuity, not that an authentic
   app produced an event. Per-installation rate limits alone do not stop
   attackers rotating IDs; qualify edge abuse controls and a project-wide
   ingestion/cost budget before exposing collection more widely.
4. Review privacy copy and settings with Yaacov, including the tombstone
   exception and external proof above. Discuss consent/cohort/activation
   separately; no preparation step may switch collection on.

The public privacy notice currently explains queued erasure but not the new
minimal anti-resurrection record. Prepare its update with the gateway change;
do not publish a claimed retention duration or completed downstream erasure
until qualified. Candidate wording for the privacy owner's review, **not an
approved notice**:

> When Scient accepts your deletion request, it clears the installation's
> first-party analytics history and replaces its local analytics identifier.
> Removal from downstream analytics services is processed separately; accepting
> a request does not mean every copy has already been removed. A minimal deletion
> receipt and identifier-verification record are retained to prevent delayed
> retries from recreating deleted history. They contain no usage events or
> research content.

## Activation Gates

Desktop production collection remains prohibited until all are true:

1. the registered event catalog and property allowlists are current;
2. no T3 PostHog key, host, identity path, or direct SDK is reachable;
3. development and disposable worktree builds are Off by default;
4. consent is applied before enqueue and downgrade purges are proven;
5. D1 retention and first-party-only diagnostic routing are proven; PostHog
   copies have truthful provider-managed retention disclosure, verified erasure
   processing and observable pending/blocked retries (submission alone does
   not satisfy this gate);
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
