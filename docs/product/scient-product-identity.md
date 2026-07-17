# Scient Product Identity

Status: Accepted
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Defines the chosen company, product, agent, and external-agent naming system for the future Scient identity.
Doc type: Product truth

## Document Rules

This document owns the chosen public names, their meanings, and the vocabulary
used to distinguish the Scient app, the Scient agent, and external agents. The
PRD owns the broader product requirements. Architecture documents own runtime
and state boundaries. The rename execution plan owns migration order,
compatibility, verification, and rollback.

The identity decision is accepted direction. It does not mean the current
PapiLab repositories, packages, local state, project metadata, application
identity, website, or releases have already been renamed.

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

## Target Product Namespace

The accepted target for initialized project metadata is `.scient/`.

`.scient/` is the **Scient app's project metadata directory**. It is not the
Scient agent's home, session store, cache, credential location, or private
memory. A project must remain understandable and recoverable when the Scient
agent is unavailable and must remain usable manually or through an external
agent.

The exact contents and versioning of `.scient/` remain governed by the project
format and implementation evidence. The current implemented package still
creates `.papilab/`; migration to `.scient/` has not yet been executed.

## Target Technical Naming Direction

The rename plan will validate and execute these targets:

| Surface | Target direction |
|---|---|
| Company namespace | `scientfactory` |
| Product namespace | `scient` |
| Package scope | `@scientfactory/*` |
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

These are accepted naming targets, not claims about current implementation.
Exact identifiers may change before execution if platform constraints,
availability, migration safety, or formal clearance requires it. Any material
change to the public identity returns to this document for owner review.

## Repository Direction

The intended long-term topology is:

| Repository role | Confirmed owner and target name |
|---|---|
| GitHub organization | `ScientFactory` |
| Parent product and documentation repository | `ScientFactory/Scient` |
| Maintained desktop fork | `ScientFactory/scient-desktop` |
| Owned OpenCode-derived source repository before the Scient agent exists | `ScientFactory/opencode` |
| Owned first-party agent repository after the Scient agent exists | `ScientFactory/scient-agent` |

The `ScientFactory` GitHub organization was created on 2026-07-17. Repository
ownership has not yet moved there. The current OpenCode-derived source
repository must transfer to the organization as `opencode` and retain that name
until it actually builds and packages the Scient agent. A later repository
rename must preserve official OpenCode as fetch-only upstream, Git ancestry,
licenses, attribution, inherited-core traceability, and reviewed update
history. External OpenCode remains a distinct external agent regardless of
repository topology.

## Current-State Boundary

At acceptance time:

- PapiLab remains the active repository and implemented desktop identity.
- The `ScientFactory` GitHub organization exists, but it does not yet own the
  parent, desktop, or OpenCode-derived repositories.
- `@papilab/project-init` and `.papilab/` are the only implemented first-party
  project-initiation names.
- The Scient agent is planned but not implemented.
- The broader scientific project format, agent gateway, and first vertical
  slice remain unbuilt.
- The public website and deployment have not been cut over to Scient.

Do not rewrite historical LitRev or PapiLab evidence as though it occurred
under Scient. Do not describe target names as implemented until the execution
plan records verified cutover evidence.

## Clearance Boundary

Ownership of `scientfactory.com` supports the chosen website strategy but is
not legal, trademark, package-registry, marketplace, repository, or
international brand clearance. Complete appropriate clearance before public
release. If clearance forces a material public-name change, revisit this
accepted identity before changing durable technical state.
