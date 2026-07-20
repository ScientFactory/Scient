# Scient Product Identity

Status: Accepted
Owner: Yaacov
Created: 2026-07-17
Last updated: 2026-07-20
Purpose: Defines the accepted company, product, agent, and external-agent naming system for Scient.
Doc type: Product truth

## Document Rules

This document owns the chosen public names, their meanings, the vocabulary used
to distinguish the Scient app, the Scient agent, and external agents, and the
forward naming/no-regression boundary. The PRD owns the broader product
requirements. Architecture documents own runtime and state boundaries. The
historical rename execution plan preserves migration order, detailed
compatibility behavior, verification, and rollback.

The identity decision is active for the company, repositories, application,
new first-party Scient package names, new product state, and new project
metadata. It does not require a bulk rename of inherited private implementation
identifiers. PapiLab remains only where required for migration compatibility or
historical truth. The public website cutover is complete in its independently
owned repository, while the native Scient agent is still planned rather than
implemented.

## Decision

Yaacov selected the following forward product identity on 2026-07-17:

| Layer | Chosen public name | Meaning |
|---|---|---|
| Company and product umbrella | **ScientFactory** | The company, website owner, and future umbrella for Scient and possible later products |
| Scientific workspace application | **Scient** | The local-first scientific workspace researchers open and use |
| Native first-party research agent | **Scient** | The owned OpenCode-derived agent that works inside the Scient app |
| Independently connected products | **External agents** | OpenCode, Codex, Claude, Droid, and other agents that retain their own identity and access paths |
| Primary website | **scientfactory.com** | The company and product website; deployment cutover is separate execution work |

The application and native agent intentionally share the public name
**Scient**. They are one coherent product experience, not two public brands
called “ScientApp” and “ScientAgent.” Context normally distinguishes them:

- “Open the project in Scient” refers to the app.
- “Ask Scient to analyze the dataset” refers to the agent.
- “Connect OpenCode to Scient” refers to an external-agent connection.

## Product Positioning

Working public descriptor:

> **Scient — Scientific Workspace**

Working positioning:

> One workspace for the whole scientific project.

These lines may evolve through brand and product-design work without changing
the accepted company, app, agent, or external-agent names.

## Precise Internal Vocabulary

Public copy may use **Scient** naturally. Architecture, implementation, tests,
support, and diagnostics must qualify the name whenever the app and agent could
be confused.

| Term | Meaning |
|---|---|
| **Scient app** / `ScientApp` | The scientific workspace application and product shell |
| **Scient agent** / `ScientAgent` | The native first-party OpenCode-derived research agent |
| **Scient project** / `ScientProject` | A project owned by the Scient app and usable independently of any one agent runtime |
| **External agent** / `ExternalAgent` | An independently identified agent product such as OpenCode, Codex, Claude, or Droid |
| **External-agent connection** / `ExternalAgentConnection` | One configured installation, endpoint, account, or connection for an external agent |
| **Execution target** / `ExecutionTarget` | The Scient agent or external-agent connection selected for a task |
| **Access method** | A subscription/account, API key, local model, or ScientFactory-managed access path |
| **Model** | The inference model available through the selected agent and access method |

`ScientApp`, `ScientAgent`, and similar compound forms are engineering
qualifiers, not additional public brands.

## Product And Agent Ownership Boundary

The shared public name does not collapse the architecture:

> The Scient app owns the scientific project and accepted state. The Scient
> agent performs bounded work and proposes changes.

The Scient agent and every external agent may retain useful execution state,
including sessions, transcripts, logs, caches, and native checkpoints. None of
those stores becomes canonical Scient project truth. Project intent, selected
context, permission scope, proposals, review decisions, provenance, accepted
state, and recovery remain owned by the Scient app and project format.

## Agent And Access Vocabulary

Agent selection and access are separate product decisions:

1. Choose the Scient agent or an external agent.
2. Configure an access method legitimately supported by that target.
3. Choose an available model when the target supports model selection.

Recommended settings groups:

- **Scient**
- **External agents**
- **Models and access**

“External subscription” may describe an access method. It must not be used as
the category name for external agents because some agents use local binaries,
endpoints, accounts, API keys, or no subscription at all.

## Product Namespace

Initialized Scient project metadata uses `.scient/`.

`.scient/` is the **Scient app's project metadata directory**. It is not the
Scient agent's home, session store, cache, credential location, or private
memory. A project must remain understandable and recoverable when the Scient
agent is unavailable and must remain usable manually or through an external
agent.

The exact contents and versioning of `.scient/` remain governed by the project
format and implementation evidence. The implemented project-init package
creates `.scient/project.json` and provides additive, conflict-safe migration
from supported `.papilab/project.json` projects.

## Technical Naming

The implemented app and project-init surfaces use these names. Agent-specific
rows remain reserved for the planned native Scient agent:

| Surface | Target direction |
|---|---|
| Company namespace | `scientfactory` |
| Product namespace | `scient` |
| New first-party Scient package scope | `@scientfactory/*` |
| Project metadata directory | `.scient/` |
| Application protocol | `scient://app` |
| Production bundle ID | `com.scientfactory.scient` |
| Development bundle ID | `com.scientfactory.scient.dev` |
| Product storage prefixes | `scient:` and `scient.` |
| Application-specific environment variables | `SCIENT_APP_*` where qualification is required |
| Agent-specific environment variables | `SCIENT_AGENT_*` |
| Application profile | `scient` and a separate development profile |
| Agent home/profile | A dedicated `scient-agent` location, isolated from the app and external OpenCode |
| Agent scratch workspaces | `scient-agent-workspaces` |

The Scient-agent home and scratch-workspace names remain planned until that
runtime exists. Any material change to the public identity returns to this
document for owner review.

## Repository Topology

The owned topology is:

| Repository role | Confirmed owner and target name |
|---|---|
| GitHub organization | `ScientFactory` |
| Parent product and documentation repository | `ScientFactory/Scient` |
| Standalone desktop source repository | `ScientFactory/scient-desktop` |
| Owned first-party agent source repository | `ScientFactory/scient-agent` |
| Public website repository | `ScientFactory/ScientFactory-website` |

The `ScientFactory` GitHub organization was created on 2026-07-17 and owns all
four repositories. The agent source repository is named `scient-agent` now by
explicit owner decision, even though the native agent product is not yet
implemented. It preserves official OpenCode as fetch-only upstream, Git
ancestry, licenses, attribution, inherited-core traceability, and reviewed
update history. External OpenCode remains a distinct external agent regardless
of repository topology.

## Current State

After the verified rename:

- Scient is the active parent repository and implemented desktop identity.
- `ScientFactory` owns `Scient`, `scient-desktop`, `scient-agent`, and
  `ScientFactory-website`.
- `@scientfactory/project-init` and `.scient/` are the implemented first-party
  project-initiation names; PapiLab inputs are accepted only by the documented
  migration path.
- The Scient agent is planned but not implemented.
- The broader scientific project format, agent gateway, and first vertical
  slice remain unbuilt.
- The public website is deployed from `ScientFactory-website:main` to
  `scientfactory.com` through Cloudflare Pages.

Do not rewrite historical LitRev or PapiLab evidence as though it occurred
under Scient. Do not infer a finished Scient-agent runtime from the owned
`scient-agent` repository name.

## Forward Naming And Compatibility Policy

The completed LitRev-to-PapiLab-to-Scient product rename has this forward
boundary:

- New first-party Scient packages use `@scientfactory/*`, and new active product
  surfaces use Scient/ScientFactory names. Do not introduce a new active LitRev
  or PapiLab identifier.
- Historical evidence keeps the names, URLs, SHAs, filenames, commands,
  screenshots, and paths that were true when it was produced.
- Supported `.papilab/` project inputs remain read-and-migrate compatibility.
  New project state is written to `.scient/`; migration must not silently
  choose between conflicting old and new identities.
- Every retained active LitRev or PapiLab compatibility identifier must have a
  specific migration or recovery reason and a verifiable retirement condition
  before it is removed. No sunset date is implied by this policy.

Inherited private workspace packages retain `@synara/*`; `SYNARA_*`
compatibility variables, Effect or service identifiers, upstream names,
persistence identifiers, and OpenCode internals are also not unfinished
LitRev/PapiLab rename work. They remain subject to the accepted inherited-source
boundary in
`../architecture/decisions/ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md`
and to separately reviewed source-adaptation and compatibility work. Public
product surfaces and new first-party Scient packages still follow the Scient
naming rules above.

## Clearance Boundary

Ownership of `scientfactory.com` supports the chosen website strategy but is
not legal, trademark, package-registry, marketplace, repository, or
international brand clearance. Complete appropriate clearance before public
release. If clearance forces a material public-name change, revisit this
accepted identity before changing durable technical state.
