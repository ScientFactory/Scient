# ADR-0004: Scient Operation, Capability, And Provenance Boundary

Status: Accepted
Owner: Yaacov
Created: 2026-07-31
Last updated: 2026-07-31
Purpose: Establishes one host-independent Scient operation boundary for the manual UI, agents, external MCP clients, automations, browser work, and scientific evidence capture.
Doc type: Architecture decision

## Context

Scient already has a capable Synara-derived desktop, a thread-scoped agent
gateway, a serious automation engine, a visible browser, and project/worktree
permission boundaries. Synara now also demonstrates useful external MCP,
provider-agnostic browser control, and DOM annotation systems. Those donor
features are valuable, but their task, chat, persistence, and product
assumptions must not become Scient's scientific architecture by accident.

Scient is about to add serious scientific features. Manual actions, provider
agents, the Scient agent, external tools, and scheduled work all need to invoke
the same scientific behavior. If each ingress owns a separate implementation,
permissions, provenance, recovery, and upstream maintenance will drift. If
chat, automation memory, browser state, or a donor database becomes scientific
truth, researchers cannot inspect or correct the real record independently of
an agent session.

ADR-0001 already requires Scient to own scientific project meaning,
capabilities, permission scope, context receipts, provenance, review, recovery,
and accepted state. This decision defines the common execution boundary that
implements that ownership rule. It remains valid whether the desktop host
continues from the current Scient/Synara foundation or later adopts more T3
infrastructure.

## Decision

1. Scient will expose product behavior through typed **Scient operations**.
   Operations are owned use cases such as reading project context, creating or
   driving work, capturing source evidence, proposing an annotation, accepting
   a scientific record, or exporting a reviewed artifact. Ingress adapters do
   not mutate protected state directly.
2. Every operation receives a host-resolved request envelope containing:
   - a unique operation and idempotency identity;
   - an actor kind and durable actor reference;
   - exact project scope and capabilities;
   - issue, expiry, and revocation context;
   - source ingress and parent operation/run lineage.
   Client-, model-, page-, or prompt-supplied authority fields are never
   trusted as proof. Execution emits an immutable result/effect receipt tying
   the resolved request to the authorization decision, timestamps, outcome or
   error, and the identities or hashes of affected records and artifacts.
3. Initial actor kinds are manual user action, provider-thread agent, external
   MCP integration, and automation run. New actor kinds must enter through the
   same authority boundary rather than bypassing it.
4. Capabilities are operation-oriented and default-deny. Thread read/drive,
   task creation, browser read/capture/action, project-file read/write,
   scientific-record propose/accept, export, and other consequential powers
   remain distinct. A lower-privileged actor cannot launder work through a
   higher-privileged thread or automation.
5. The manual UI, provider gateways, external MCP, and automations are adapters
   over the same operation services. Their transport, lifecycle, and UX may
   differ; their authorization and product semantics may not.
6. External MCP uses explicit pairing, a separate credential audience, hashed
   and expiring credentials, immediate revocation, bounded rates and
   concurrency, and explicitly selected existing projects by default. It does
   not silently grant all current or future projects, expose raw absolute paths
   by default, or inherit a provider thread's authority.
7. Automations store an inspectable grant snapshot and create a fresh actor for
   every run. Their schedule, retries, worktree, thread, transcript, and memory
   are execution state. They may propose or invoke scientific operations but
   never become scientific truth merely by completing successfully.
8. Browser control is split into read, capture, and action capabilities and is
   bound to the visible Scient browser, an owned browser-session lease, and an
   exact target. Navigation, human takeover, target replacement, or revocation
   invalidates stale references. Consequential actions need explicit authority
   and just-in-time user confirmation; page text cannot grant it.
9. Browser and imported content are untrusted. Source capture records source
   identity, quote, bounded context, timestamp, content hash, actor and
   operation provenance, and redaction decisions. Prompt-injection signals and
   uncertainty remain visible rather than being converted into instructions.
10. Durable scientific annotations and evidence are project-owned,
    inspectable, editable, and recoverable records. DOM selectors, screenshots,
    chat messages, agent memory, and browser sessions may be supporting
    receipts, but they are not canonical records. Capture creates a proposal;
    acceptance is a distinct Scient-owned operation.
11. The operation core is organized as a host-independent service boundary.
    Desktop, provider, browser, persistence, filesystem, Git, and future agent
    implementations are adapters. Donor code may supply bounded transport,
    security, and interaction patterns, but Scient owns operation names,
    policy, records, and authority.
12. Implementation follows a partial dependency order. The operation envelope,
    capability enforcement, and effect-receipt core land first. The thread
    gateway, external MCP, and automation adapters may then land independently
    as consumers of that stable core. Browser read/capture depends on the core
    and browser-session lease; browser action depends on that authority and
    read foundation. Durable annotations depend on the capture/proposal
    contract, not on external MCP, automation, or browser action. Each stage is
    separately reviewable and reversible.

## Current Implementation At Acceptance

The current desktop already implements a thread-scoped `scient_*` MCP gateway
with project isolation, privilege and worktree caps, in-memory
per-provider-session credentials revoked on session teardown or restart,
write requests pinned to the caller's active turn, idempotency, bounded waits,
and read/drive tools. The credentials have no wall-clock expiry. The gateway is
disabled by default and is wired primarily to Claude; its Codex configuration
builder is not yet a complete live path.

The current automation engine has schedules, permission snapshots, risk
acknowledgements, a modeled but not executed retry policy, crash recovery,
worktrees, and run history. The current browser has visible tabs, containment
and recovery behavior, PiP, and a Codex-compatible native pipe. These are
foundations, not evidence that this ADR is fully implemented.

Scient does not yet have the shared operation envelope, external pairing,
external MCP integration management, automation-to-operation adapter, general
provider browser tools, or durable scientific annotation model defined here.

## Donor Intake Boundary

The reviewed donor evidence is recorded in the
[2026-07-26 gateway, external-MCP, and automation review](../../../lab/external/upstream-reviews/2026-07-26-scient-desktop.md)
and the
[2026-07-30 browser-control and annotation review](../../../lab/external/upstream-reviews/2026-07-30-scient-desktop.md).
This ADR promotes bounded concepts and implementation patterns from those
records. It does not promote donor code, persistence, authority, product
semantics, or ancestry; the direct-intake rejections in those records remain
in force.

- Reuse Synara's external MCP pairing, local bridge, runtime proof, credential
  hashing, revocation, private-file, capacity, idempotency, audit, and recovery
  patterns where they survive Scient's authority model.
- Extract Synara's browser snapshot, stable-reference, wait, trusted-input,
  target-ownership, cancellation, upload, download, and diagnostics patterns
  behind Scient's browser adapter. Do not broad-merge its host or provider
  assumptions.
- Reuse Synara's annotation selection, sandboxed preload, metadata minimization,
  editable-content redaction, and marker lifecycle ideas. Reimplement durable
  records and acceptance against Scient's project-owned scientific seam.
- Reuse existing Scient automation lifecycle and permission machinery. Do not
  replace it with donor automation persistence or treat automation memory as a
  record of scientific fact.

## Alternatives Considered

### Import The Three Synara Features As Independent Subsystems

This is initially faster but leaves three authorization models and makes chat
or donor persistence the accidental integration layer.

### Put Scientific Features Directly In The Desktop UI

This gives the manual path first-class treatment but forces agents and
automations to duplicate or scrape UI behavior and makes a later host change
expensive.

### Let Each Provider Own Its MCP And Browser Tools

This maximizes provider-native behavior but fragments authority, provenance,
testing, and revocation and makes the strongest provider the de facto product
policy owner.

### Copy T3 Or Synara Infrastructure Before Defining Scient Operations

This may improve the host while leaving the scientific boundary undefined. The
operation seam is deliberately host-independent so infrastructure can still be
replaced later without restarting scientific product work.

## Consequences

- Scientific capabilities can be invoked consistently from the UI, agents,
  external clients, and schedules.
- Security and recovery work concentrates at one authority boundary instead of
  being repeated in every transport.
- The first implementation requires deliberate adapters and provenance fields,
  so it is more work than a direct donor feature port.
- External MCP, browser action, and scientific-record acceptance cannot be
  treated as one broad “agent access” permission.
- Automation and browser receipts remain useful and auditable without becoming
  canonical scientific truth.
- A future T3-, Synara-, or new-shell host can preserve the operation contracts
  while replacing adapters incrementally.

## Revisit Triggers

Revisit this decision if operation routing becomes a material performance or
reliability bottleneck, if a required scientific workflow cannot be expressed
without leaking host internals, if project-owned records cannot support needed
collaboration or institutional controls, or if a new host architecture provides
an equivalent stronger boundary with proven migration and rollback.

Do not weaken project scoping, explicit authority, provenance, or the separation
between execution state and accepted scientific truth merely to reduce adapter
work.
