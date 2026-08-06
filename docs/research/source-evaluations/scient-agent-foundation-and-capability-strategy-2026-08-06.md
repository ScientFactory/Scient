# Scient Agent Foundation And Capability Strategy Investigation

Status: Draft
Owner: Yaacov
Created: 2026-08-06
Last updated: 2026-08-06
Purpose: Records the current source-backed comparison of candidate Scient-agent foundations, specialist workers, and capability sources without selecting a final foundation or worker architecture.
Doc type: Research evidence

## Authority And Decision Status

This document is research evidence. It does not select Pi, OpenCode, Hermes,
Goose, OpenHands, Codex, Aider, or another system as Scient's native-agent
foundation. It does not authorize a source rebootstrap, implementation, bundled
worker, release, credential flow, or external service.

The accepted product and ownership boundaries remain authoritative:

- Scient will provide one owned first-party **Scient agent**;
- Scient owns scientific project meaning, operations, permissions, selected
  context, provenance, proposals, review, recovery, and accepted state;
- agent sessions, transcripts, memories, worker databases, and runtime state
  are execution evidence rather than canonical scientific truth;
- external agents remain distinct products and connections; and
- a material foundation change requires an explicit architecture decision or
  amendment after implementation-time evidence.

[ADR-0005](../../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
preserves the first-party-agent boundary while explicitly declining to select
the future refreshed OpenCode baseline or the roles of Hermes, Goose, and other
agent sources. The proposed
[Scient and external agents implementation plan](../../planning/scient-and-external-agents-implementation-plan.md)
owns the future selection gate and implementation sequence.

## Executive Finding

The historical OpenCode choice should not be replayed automatically when
Scient-agent implementation begins. The current comparison leaves two serious
native-foundation finalists:

1. **Pi** is the stronger long-term ownership challenger. Its compact
   TypeScript agent core, embedding SDK, extension lifecycle, session tree, and
   emerging runtime-neutral client/protocol architecture fit an owned Scient
   product unusually well.
2. **OpenCode V2** is the stronger ready-made coding platform. Its project,
   workspace, server, permissions, MCP, subagent, terminal, session, diff, and
   recovery machinery may substantially reduce the generic infrastructure
   Scient must build.

The investigation produced a provisional analytical preference for Pi if it
can pass the safety, recovery, remote-client, upstream-update, and coding-quality
proof. **Yaacov has not accepted that recommendation.** Pi and OpenCode remain
unselected candidates.

Hermes, Goose, OpenHands, Codex, and Aider contain valuable capabilities and
architecture lessons. Current evidence does not justify making any of them the
native foundation without the same focused proof. Hermes and OpenCode may be
useful bounded specialist workers if Pi or another smaller kernel becomes the
foundation, but that worker topology is also unselected.

## Owner-Approved Long-Term Direction

Scient's long-term target is one owned first-party Scient agent that includes
the essential research, scientific, coding, browser, analysis, memory, skill,
delegation, safety, and recovery capabilities researchers need.

That agent may be derived from multiple sources. Scient may learn from,
reimplement, adapt, retain as an upstream package, or selectively absorb useful
capabilities from Pi, OpenCode, Hermes, Codex, Goose, OpenHands, Aider, and
future projects. Source lineage does not create multiple product identities:
once a capability becomes part of the native Scient agent, Scient owns its
product behavior, integration, quality bar, permissions, release, and support.

"One agent" does not require one source origin, one large module, one process,
or the elimination of ordinary libraries, sandboxes, model providers, remote
compute, and tool adapters. It means one coherent first-party product and
authority:

- one user-visible Scient-agent identity;
- one product-owned task and context boundary;
- one permission and approval model;
- one normalized run, provenance, review, and recovery model;
- one release and support responsibility; and
- no separately authoritative hidden agent whose state defines Scient.

Early Scient versions may delegate bounded work to specialist workers to gain
quality and capability before the team can responsibly internalize everything.
Those workers are acceleration, fallback, and comparison mechanisms. The
long-term objective is that no essential Scient workflow depends on a
separately branded downstream agent for its semantics, authority, or
continuity. Optional external-agent connections may remain for user choice and
specialized frontier work.

## Inspection Boundary

Official sources were refreshed on 2026-08-06. The revisions below are
evidence snapshots, not bootstrap pins. The implementation gate must fetch the
then-current official versions again.

| Source | Official revision inspected | Current release observed | License | Depth |
|---|---|---|---|---|
| [Pi](https://github.com/earendil-works/pi) | `9859eaa2690b4ffb92f32128826d76979a684709` on `main` | `v0.83.0` | MIT | Source, package, SDK, extension, protocol, client, server, session, security, test, and release inspection |
| [OpenCode](https://github.com/anomalyco/opencode) | `def7220bfc65b84046e597e9be772eae81f663ff` on `dev` | `v1.18.14`; V2 documentation remains beta | MIT | Current V2 source, plugin, server, permissions, tools, sessions, provider, MCP, workspace, and migration inspection |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | `8f2712725af78c98c9ef7cdd447d14cb9348428d` on `main` | `v2026.8.3` | MIT | Architecture, tool, browser, memory, skill, delegation, scheduling, LSP, gateway, security, and source inspection |
| [Goose](https://github.com/aaif-goose/goose) | `dafdbb7364cb8f145a71e2fd4e080136e225ad14` on `main` | `v1.45.0` | Apache-2.0 | Source, ACP, MCP, custom-distribution, provider, permission, session, and architecture inspection |
| [OpenHands Software Agent SDK](https://github.com/OpenHands/software-agent-sdk) | `da6f5463be9364e55db40435017549340c73bdea` on `main` | `v1.40.1` | MIT | SDK, agent server, remote workspace, tool, plugin, event, confirmation, and source inspection |
| [Codex](https://github.com/openai/codex) | `7a0e974e08c798d1e8d59d407aeb6e24db1313af` on `main` | `rust-v0.146.1` | Apache-2.0 | Rust core, app server, protocol, approvals, sandbox, MCP, skills, multi-agent, and provider inspection |
| [Aider](https://github.com/Aider-AI/aider) | `5dc9490bb35f9729ef2c95d00a19ccd30c26339c` on `main` | `v0.86.0` | Apache-2.0 | Lighter repository and product-role screening |

The maintained `scient-agent` checkout was also inspected. At this snapshot its
owned branch and refreshed official OpenCode branch had diverged; the owned
changes were primarily source governance, identity, CI, release-lane work, and
small inherited-product corrections rather than implemented scientific-agent
behavior. That history remains valuable evidence, but the checkout must not be
treated as a current capability baseline or automatic future implementation
base.

## Evaluation Lens

Foundation fitness is not a feature-count contest. The implementation gate
must judge:

- coding and repository-task quality under the same models;
- ability to embed one first-party Scient product rather than wrap a separately
  branded engine;
- context, tool, event, cancellation, approval, and failure fidelity;
- separation between runtime state and Scient-owned scientific truth;
- safe filesystem, process, network, credential, and project boundaries;
- session continuation, compaction, crash recovery, and uncertain effects;
- provider neutrality and model switching;
- desktop, cloud, mobile, and remote-client compatibility;
- extension and internalization seams;
- package, release, startup, and operational cost;
- upstream change rate and realistic merge or adaptation burden; and
- license, attribution, supply-chain, and long-term team ownership.

Real-model task performance and deterministic lifecycle proof are both
required. A strong benchmark score cannot prove authorization, recovery, or
product ownership; a clean architecture cannot prove useful coding behavior.

## Pi

### Material Strengths

Pi has evolved into a modular TypeScript monorepo rather than only a small
terminal interface. Relevant packages separate model/provider I/O, a stateful
tool-calling agent core, the coding-agent harness, TUI components, an embedding
SDK, JSON/RPC modes, an experimental binary protocol, a transport-neutral
client, an experimental server, and optional SQLite session storage.

The [SDK](https://pi.dev/docs/latest/sdk) exposes agent sessions, event
subscriptions, prompt steering, follow-up work, model switching, compaction,
abort, tree navigation, and runtime replacement. The
[extension system](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/extensions.md)
can register or replace tools, intercept and block tool calls, inject context,
customize compaction, persist custom state, register providers, and alter the
interface. These are strong seams for Scient-owned operations and product
behavior.

Pi's emerging
[protocol](https://github.com/earendil-works/pi/blob/main/packages/protocol/README.md)
uses validated, bounded, transport-neutral framing and distinguishes
authoritative snapshots from transient progress. Its
[client](https://github.com/earendil-works/pi/blob/main/packages/client/README.md)
supports multiple sessions per connection, explicit shared or exclusive
session leases, backpressure-aware transports, and deliberate reconciliation
behavior. These ideas fit future desktop, cloud, and mobile clients.

The inspected source showed disciplined package separation, strict TypeScript,
substantial focused tests, exact direct dependency pinning, release-install
smokes, and recent supply-chain hardening. Pi is materially easier to
understand and own than the larger full-product candidates.

### Material Gaps And Risks

Pi intentionally omits built-in MCP, subagents, permission popups, plan mode,
todos, and background shell orchestration. Those can be implemented through
extensions, but Scient must prove that doing so remains bounded rather than
rebuilding a second generic agent platform.

Pi explicitly provides no built-in permission boundary or operating-system
sandbox. Its built-in tools and extensions run with the launching process's
authority. Project trust controls input loading, not tool authority. The
[security guidance](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/security.md)
recommends containers, virtual machines, micro-VMs, or policy-controlled
sandboxes for real isolation.

The [server package](https://github.com/earendil-works/pi/blob/main/packages/server/README.md)
is experimental, has no compatibility guarantee, and requires the application
to supply the actual service. This is architecturally clean but not yet a
production remote-agent platform.

### Scient Fit

Pi is the strongest inspected candidate for a small, deeply owned native-agent
foundation. It is not selected. It must prove that Scient can add its required
safety, remote lifecycle, scientific-operation boundary, worker contracts, and
coding quality without broad unstable core work.

## OpenCode V2

### Material Strengths

OpenCode provides the most complete inspected open TypeScript coding platform.
Current V2 source includes project and workspace ownership, provider and model
resolution, a server and generated clients, sessions and durable events,
permissions, tools, MCP, subagents, terminals, Git-aware behavior, diffs,
snapshots, and recovery-oriented lifecycle machinery.

Its [V2 permission rules](https://opencode.ai/v2/docs/permissions) support
ordered allow, deny, and ask decisions across files, external directories,
shell commands, subagents, skills, web operations, and MCP tools. Its server and
plugin hooks give Scient more ready-made infrastructure than Pi.

### Material Gaps And Risks

OpenCode is a large, rapidly changing product rather than a small kernel. A
Scient-owned build would inherit more product assumptions, state, UI, server,
workspace, and release machinery. That may reduce initial construction while
increasing long-term coupling, upstream conflict, and the risk that OpenCode
runtime concepts become accidental Scient architecture.

The current V2
[migration guidance](https://opencode.ai/v2/docs/migrate-v1) still describes a
beta and requires explicit compatibility verification. OpenCode permissions
are meaningful policy but not a complete operating-system sandbox: the
official permission documentation says shell execution retains the host
user's filesystem, process, and network authority and matches raw command text.

### Scient Fit

OpenCode remains the strongest lower-risk foundation for reaching a complete
coding agent quickly. It is the historical incumbent and a required benchmark,
not a confirmed future foundation. If selected, Scient should use the same
native runtime for ordinary coding instead of adding a redundant downstream
OpenCode agent without a demonstrated isolation or concurrency need.

## Hermes Agent

Hermes is the broadest inspected research and personal-assistant system. Its
[architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)
includes a shared agent loop across CLI, gateway, ACP, API, and batch entry
points; many providers and API modes; a large dynamic tool registry; browser,
web, media, file, terminal, MCP, remote-environment, memory, skill, scheduling,
messaging, and session systems; and extensive tests.

Its [delegation system](https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation)
supports isolated child contexts, bounded concurrency, background completion,
progress, and cancellation. These are valuable research-worker and future
native-capability references.

Hermes also carries broad Python product assumptions, multiple persistence and
automation systems, a large side-effect surface, and local execution paths that
do not themselves create hostile-code isolation. Its memory, session, cron,
gateway, and worker state cannot become Scient truth.

Current evidence supports Hermes as a leading research-worker candidate and
capability source, not a selected native foundation or required dependency.

## Goose

Goose is a large general agent with Rust foundations, broad provider and MCP
support, sessions, recipes, scheduling, subagents, memory, browser/computer
capabilities, and an open custom-distribution model. Its
[custom distribution guidance](https://github.com/aaif-goose/goose/blob/main/CUSTOM_DISTROS.md)
documents custom web/mobile interfaces and ACP operation with streaming,
permission requests, cancellation, session continuation, and dynamic MCP
configuration.

Goose is relevant to Scient as an ACP/MCP, permission-interaction, custom
distribution, and general-agent architecture source. Its size, Rust stack,
general-assistant assumptions, and extensive product surface make it a costly
native foundation. A future external Goose connection or bounded worker would
remain a separate decision.

## OpenHands Software Agent SDK

OpenHands provides a composable Python SDK, local or ephemeral workspaces,
Docker/Kubernetes execution, an agent server, REST/WebSocket integration,
tools, MCP, skills, plugins, confirmations, resource locks, secrets, and
observability. The official
[SDK repository](https://github.com/OpenHands/software-agent-sdk) describes
both local execution and remote Agent Server workspaces.

It is a strong reference or later component for cloud execution and managed
remote workspaces. Its Python service stack, workspace assumptions, dependency
breadth, and packaging boundary make it a weaker fit for the first native
TypeScript Scient agent.

## Codex

Codex supplies the strongest inspected operating-system sandbox, approval,
app-server, interruption, recovery, skills, MCP, and multi-agent patterns. The
[app-server protocol](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)
supports structured thread/turn/item lifecycles, streaming tool events,
server-initiated approvals, bounded queues, interruption, and generated client
schemas.

Codex is large, Rust-based, and strongly oriented around OpenAI and ChatGPT
product semantics. That makes it a valuable external coding/review worker and
safety/protocol source, but not the preferred provider-neutral native
foundation under current evidence.

## Aider And Narrower Candidates

Aider remains useful for Git-centered editing discipline, repository maps,
patch quality, and rollback ergonomics. It is a narrower pair-programming and
coding tool rather than a complete first-party research-agent runtime.

IDE-centered systems such as Cline and Roo Code are weaker native-foundation
candidates because their product and lifecycle are tied to editor-extension
assumptions. Benchmark and research runners such as SWE-agent are valuable for
evaluation and agent-loop ideas but do not supply the product, client, session,
permission, and lifecycle foundation Scient needs.

These systems should remain targeted capability or benchmark sources unless
future evidence changes their role.

## Comparative Decision Summary

| Candidate | Strongest fit | Main cost | Current disposition |
|---|---|---|---|
| Pi | Small, ownable, embeddable native kernel | Missing mature permission, sandbox, MCP, worker, and remote-service infrastructure | Native-foundation finalist; unselected |
| OpenCode V2 | Complete TypeScript coding platform | Size, churn, product coupling, and upstream-maintenance burden | Native-foundation finalist and historical incumbent; unselected for refreshed implementation |
| Hermes | Broad research, browser, media, skill, memory, scheduling, and delegation capability | Large Python assistant platform and competing runtime state | Leading research-worker/capability-source candidate; unselected |
| Goose | ACP/MCP, custom distribution, broad general-agent patterns | Large Rust product and broad inherited assumptions | Reference and possible external/worker candidate |
| OpenHands SDK | Remote workspace and cloud executor | Python service and deployment stack | Later cloud-execution candidate/reference |
| Codex | Coding quality, sandbox, approvals, app-server, recovery | Large OpenAI-oriented Rust runtime | External coding/review worker and safety reference |
| Aider | Repository maps and Git-centered edit discipline | Not a complete product runtime | Targeted reference/benchmark |

## Transitional Specialist Workers

A specialist-worker topology is an option, not a final decision. If Pi or
another small kernel is selected, an early arrangement could use:

- the native Scient agent for researcher interaction, project understanding,
  planning, authority, synthesis, and ordinary work;
- OpenCode or Codex for substantial repository implementation and review;
- Hermes for broad web, browser, document, media, or parallel research; and
- later sandbox or remote-execution workers where isolation or compute requires
  them.

The native Scient agent must remain useful by itself. It should not delegate
every file action to a coding worker or every source lookup to a research
worker. Delegation is justified when specialization, context isolation,
concurrency, safety, or task length materially improves the result.

Every worker request should carry an exact objective, bounded context receipt,
project/workspace scope, capability grant, credential audience, time/cost and
concurrency bounds, cancellation/revocation information, and required output
contract. Workers return evidence, patches, artifacts, logs, uncertainty, and
typed outcomes. They do not accept scientific state or broaden their own
authority.

Workers must not silently share native-agent or scientific databases, inherit
complete conversation history, recursively spawn unbounded work, or become the
only place an essential Scient capability exists without a documented
temporary rationale.

## Capability Internalization Policy

As the team grows and real use clarifies the product, Scient should consider
internalizing a worker capability when:

- it is central to recurring scientific work;
- cross-agent delegation repeatedly loses important context or provenance;
- privacy, offline use, latency, cost, or reliability requires native control;
- inconsistent permissions or recovery harm the product experience;
- upstream integration repeatedly breaks; or
- the team can maintain a more coherent and higher-quality native subsystem.

Internalization may mean adopting a maintained package, adapting bounded code,
or reimplementing the behavior. It does not require copying code or eliminating
a safe low-level service merely to make the architecture look self-contained.
License, notice, provenance, security, test, release, and update obligations
must remain explicit.

## Required Foundation Proof

When the Scient-agent implementation lane opens:

1. Fetch the latest official stable Pi and OpenCode versions. Do not use the
   2026-08-06 revisions or the preserved local fork as automatic bases.
2. Recheck license, notices, ownership, release cadence, open security issues,
   protocol maturity, provider support, and breaking changes.
3. Build the same minimal Scient adapter through supported extension or SDK
   seams in each candidate before changing broad core code.
4. Use a deterministic fake provider for lifecycle, event, cancellation,
   permission, recovery, and failure tests.
5. Use the same real models and tasks for coding-quality comparison.
6. Exercise a repository-understanding task, multi-file change with tests,
   scientific-computing task, source/evidence operation, long-context
   compaction, permission denial, cancellation, revocation, crash recovery,
   uncertain external effect, session continuation, and remote-client flow.
7. Prove that Scient-owned operations remain authoritative when native runtime
   session state is missing or corrupt.
8. Measure adapter size, internal coupling, core patches, packaging, startup,
   resource cost, provider behavior, structured event fidelity, and failure
   recovery.
9. Rehearse an upstream update after the Scient adapter exists. A useful method
   is to build the proof on one official release and integrate the next
   qualified release or current stable tip.
10. Decide the native foundation and initial workers separately, then record
    the accepted result through an ADR or explicit amendment before production
    implementation.

Pi should be selected only if the required safety, recovery, remote lifecycle,
and coding quality can be reached through bounded owned modules and honest
core changes. OpenCode should be selected if its mature generic machinery
materially reduces Scient-owned infrastructure while remaining separable and
maintainable. Another candidate may enter only with equivalent evidence.

## Explicit Non-Decisions

This investigation does not decide:

- the native foundation;
- the future `scient-agent` repository history or rebootstrap method;
- whether OpenCode, Hermes, Codex, Goose, or OpenHands will be bundled;
- whether any worker is required for the first scientific slice;
- final process, package, protocol, sandbox, storage, cloud, or mobile design;
- which capabilities will be native in the first release;
- how quickly transitional workers should be internalized; or
- whether optional external-agent connections remain enabled by default.

The next durable decision is the implementation-time foundation gate, not a
documentation-only selection now.
