# PapiLab-To-Scient Rename Execution Plan

Status: Historical
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Preserves the executed PapiLab-to-Scient migration, compatibility contract, verification requirements, and deferred public cutover.
Doc type: Planning note

## Goal

Record how the active PapiLab product and maintained product-owned
implementation were renamed to Scient without losing project data, confusing
the Scient app with the Scient agent, damaging Synara/OpenCode upstream
lineage, breaking external-agent connections, or rewriting historical evidence.

This document began as the execution plan and now preserves the verified
sequence, compatibility policy, rollback expectations, and closeout boundary.
The final source revisions and hosted verification are recorded in the
execution outcome and source lock; this document alone is not runtime evidence.

## Execution Outcome

The rename of existing owned surfaces is complete:

- the GitHub organization and owned repositories use `ScientFactory/Scient`,
  `ScientFactory/scient-desktop`, and `ScientFactory/scient-agent`;
- agent-source [PR #6](https://github.com/ScientFactory/scient-agent/pull/6)
  passed hosted run `29595488492` at `5d232a34` and merged to `dev` as
  `5ffaf9a2`;
- desktop [PR #12](https://github.com/ScientFactory/scient-desktop/pull/12)
  passed hosted run `29595506303` at `179fa01e` and merged to `main` as
  `d9d8992a`;
- the app, packages, project metadata, protocol, bundle IDs, profiles, storage,
  artifacts, workflows, and current documentation use Scient naming;
- supported PapiLab app/project state has an additive migration path and remains
  preserved for rollback;
- Synara and OpenCode remain named where they identify inherited upstream code,
  licenses, attribution, compatibility, or external-agent behavior; and
- the public website cutover is explicitly deferred to the owner.

The `scient-agent` repository name establishes the owned source boundary now.
It does not claim that the native Scient agent runtime is implemented. That
future product work remains governed by
`scient-and-external-agents-implementation-plan.md`.

## Authorities

- `../product/scient-product-identity.md` owns the accepted company, app,
  agent, and external-agent names.
- `../product/PRD.md` owns the broader product requirements.
- `../architecture/decisions/ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md`
  owns the inherited application/agent foundations and canonical project-state
  boundary until it is deliberately renamed or superseded.
- `litrev-to-papilab-rename-execution-plan.md` remains the historical execution
  and rollback record for the preceding rename.
- This document preserves the executed PapiLab-to-Scient migration sequence,
  verification, rollback, and closeout criteria.

## Accepted Name Map

| Layer | Current active identity | Accepted target |
|---|---|---|
| Company/product umbrella | PapiLab | ScientFactory |
| Application | PapiLab | Scient |
| Native first-party agent | Planned Scient agent | Scient |
| Other agents | Inherited provider and product-specific labels | External agents |
| Website | `papilab.com` | `scientfactory.com` |
| GitHub owner | `yaacovcorcos` | `ScientFactory` |
| Parent repository | `yaacovcorcos/PapiLab` | `ScientFactory/Scient` |
| Desktop repository | `yaacovcorcos/papilab-desktop` | `ScientFactory/scient-desktop` |
| OpenCode-derived source repository | `yaacovcorcos/opencode` | `ScientFactory/scient-agent` |
| Package scope | `@papilab/*` | `@scientfactory/*` |
| Project metadata | `.papilab/` | `.scient/` |
| Application protocol | `papilab://app` | `scient://app` |
| Product namespace | `papilab` | `scient` |

The public app and native agent intentionally share the name Scient. Technical
and architecture work must use `ScientApp`/Scient app and
`ScientAgent`/Scient agent when ambiguity is possible.

## Current Truth Before Execution

- The parent repository and maintained desktop are currently PapiLab.
- The `ScientFactory` GitHub organization exists and was empty when verified on
  2026-07-17; the product repositories have not yet transferred to it.
- The desktop fork contains the implemented `@papilab/project-init` package,
  which creates `.papilab/project.json`.
- The Scient agent identity and runtime do not exist yet.
- The owned OpenCode fork is the accepted source foundation for the future
  Scient agent and remains upstream-traceable source code.
- External OpenCode and the other inherited agent adapters must remain
  independently selectable and configured.
- No complete scientific project format, gateway, canonical run ledger, cloud
  sync layer, or first scientific vertical slice has been implemented.
- Historical LitRev and PapiLab commits, tags, evidence, paths, commands, and
  screenshots remain exact historical truth.
- The public deployment is owner-controlled and is not changed by documenting
  or executing repository work unless explicitly included in the authorized
  scope.

## Rename Principles

1. **One active forward identity.** After verified cutover, new product-owned
   work uses Scient/ScientFactory, not a mixture of live PapiLab and Scient
   names.
2. **History remains exact.** Historical evidence retains the names and paths
   that existed when it was produced.
3. **Current and target stay explicit.** Planning may name targets; current
   implementation docs must not claim them before verification.
4. **The app and agent stay technically distinct.** Shared public branding does
   not permit shared state, credentials, processes, or authority.
5. **The project belongs to the app.** `.scient/` is project metadata, never
   Scient-agent private state.
6. **External agents remain external.** No existing OpenCode, Codex, Claude,
   Droid, or other connection is silently renamed, redirected, or absorbed.
7. **Upstream lineage remains reviewable.** Synara and OpenCode upstream names,
   ancestry, licenses, attribution, and fetch-only remotes remain intact.
8. **Migration is additive and recoverable.** Existing local state and projects
   receive explicit, tested migration or an explicit archive/reset decision.
9. **Public cutover is last.** Website, downloads, authentication callbacks,
   and update feeds move only after local artifacts and recovery are proven.

## Scope Inventory

The execution audit must cover at least:

- product truth, architecture, planning, research, onboarding, skills, agent
  instructions, indexes, and current implementation documentation;
- parent, desktop, and agent repository names, descriptions, topics, remotes,
  default branches, protections, workflows, status checks, release settings,
  source locks, local checkout directories, registered Git worktrees, and
  editor/workspace references;
- application display name, bundle IDs, executable/product names, protocol,
  deep links, icons, installers, artifacts, updater channels, signing and
  release configuration;
- application user-data paths, development profile, browser partition,
  storage keys, database/profile names, logs, cache, scratch workspaces,
  worktree/branch prefixes, environment variables, diagnostic labels, and
  generated metadata;
- `@papilab/project-init`, package imports, workspace manifests, lockfiles,
  tests, fixtures, `AGENTS.md` templates, `.papilab/`, project schema/version,
  initialization, reopening, recovery, and migration behavior;
- Scient-agent binary/package identity, repository topology, home, config,
  credentials, sessions, logs, cache, IPC/endpoint, process supervision,
  version reporting, release, update, and inherited OpenCode attribution;
- external-agent vocabulary, settings, identities, stored connections,
  defaults, hidden/order preferences, binary paths, endpoints, credentials,
  threads, handoffs, version detection, and update behavior;
- telemetry, diagnostics, crash reports, privacy surfaces, support language,
  screenshots, visual assets, and test snapshots;
- website, DNS, deployment, authentication callbacks, email identity,
  downloads, documentation URLs, release endpoints, and app-store/notarization
  surfaces when explicitly authorized.

## Compatibility And Migration Policy

### Project metadata

The target project directory is `.scient/`. Migration must:

- detect a valid `.papilab/` project without mistaking arbitrary directories
  for PapiLab projects;
- preview the proposed migration before changing user files;
- preserve project ID and supported metadata exactly;
- write through a recoverable staging/commit sequence;
- remain idempotent after interruption;
- reject conflicting `.papilab/` and `.scient/` identities rather than choosing
  silently;
- keep a tested rollback or backup path for the supported migration window;
  and
- prove that projects reopen without Git and remain manually understandable.

Do not create `.scient/` as an agent-session or credential store.

### Application state

Decide explicitly whether each PapiLab state surface is migrated, imported
once, retained read-only for an upgrade window, or intentionally reset because
it is disposable development state. Never use an unrestricted search-and-copy
of the old application profile.

### External-agent state

External-agent identities and settings keep their meaning. The rename must not:

- copy external credentials into the Scient agent;
- reinterpret external OpenCode as the Scient agent;
- change existing external-agent defaults without explicit approval;
- lose hidden/order preferences, binary paths, endpoints, model selections,
  thread bindings, or handoff history; or
- claim compatibility that has not been tested.

### Historical aliases

Retain only narrow aliases required for a defined upgrade window or safe error
message. Do not introduce indefinite PapiLab aliases into new project formats,
protocols, storage, packages, or public copy.

## Execution Sequence

### Phase 0 — Freeze And Clear The Identity

1. Treat `scient-product-identity.md` as the naming authority.
2. Complete appropriate trademark, marketplace, package-scope, repository,
   app-store, and international clearance before public release.
3. Confirm the created `ScientFactory` organization as the durable GitHub owner
   and recheck that the three target repository names remain available.
4. Confirm package scope, bundle IDs, protocol handlers, signing identifiers,
   and update repository availability.
5. Record exact parent, desktop, agent-source, and official-upstream revisions.
6. Inventory uncommitted work and assign every change to the naming-decision,
   app, agent, external-agent, source-sync, or historical-evidence lane.

Exit evidence: an approved exact target matrix and cleanly assigned change
lanes, with no unresolved naming question that would change durable state.

### Phase 0A — Prepare The GitHub Organization

Complete this preflight before transferring any repository:

1. Keep `ScientFactory` empty. Do not create placeholder `Scient`,
   `scient-desktop`, `opencode`, or `scient-agent` repositories that could
   block or confuse transfers.
2. Set the organization display name, description, website, and visual profile
   without implying that public product cutover is complete.
3. Confirm the owner's two-factor authentication and recovery methods before
   enabling organization-wide two-factor enforcement.
4. Restrict repository and team creation to organization owners while the
   organization is centrally maintained. Keep the default repository
   permission at no broader than `Read`.
5. Verify organization-level GitHub Actions policy with owner-level settings
   access and confirm that every action used by the existing workflows remains
   permitted after transfer.
6. Preserve current visibility by default: the parent remains private and the
   maintained Synara and OpenCode forks remain public unless the owner approves
   a separate visibility change.
7. Decide whether the organization needs a paid plan before relying on branch
   protection for the private parent repository. Do not claim that private
   branch protection exists until it is verified on the destination.
8. Inventory repository secrets, variables, environments, deploy keys,
   webhooks, branch protections, required checks, release settings, open pull
   requests, and fork relationships immediately before each transfer.
9. Consider a second highly trusted organization owner for recovery
   continuity; do not add one merely to satisfy the checklist.

Exit evidence: the organization settings are recorded, required Actions are
allowed, recovery access is safe, repository names remain unoccupied, and the
visibility and private-branch-protection decisions are explicit.

### Phase 1 — Reconcile Canonical Documentation

1. Promote the Scient identity through the PRD and agent protocol.
2. Qualify Scient app versus Scient agent wherever architecture could be
   ambiguous.
3. Replace forward “connected agent” vocabulary with “external agent.”
4. Preserve “connected” only as an ordinary verb or in exact historical text.
5. Update ADR paths/titles only through repository-aware moves that repair all
   references.
6. Mark the LitRev-to-PapiLab plan Historical only after its remaining public
   status is transferred or explicitly superseded.
7. Keep implementation claims in current-state language until source changes
   merge.

Exit evidence: product truth, architecture, planning, indexes, onboarding, and
agent instructions agree on the name system and distinguish accepted target
from implemented current state.

### Phase 2 — Prepare Repository Topology

1. Commit and push the accepted naming decision and this execution plan before
   moving repository ownership.
2. Create reviewed branches from exact maintained defaults and record the
   pre-transfer repository settings and revisions.
3. Transfer repositories one at a time, immediately reconciling and verifying
   each destination before moving the next repository:
   - `yaacovcorcos/PapiLab` to `ScientFactory/Scient`;
   - `yaacovcorcos/papilab-desktop` to
     `ScientFactory/scient-desktop`; and
   - `yaacovcorcos/opencode` to `ScientFactory/scient-agent`.
4. Keep official Synara and OpenCode fetch-only upstream remotes unchanged and
   keep both transferred forks in their official GitHub fork networks.
5. By explicit owner decision, name the owned source boundary `scient-agent`
   now while stating clearly that the native agent runtime remains unbuilt.
6. Preserve official OpenCode upstream and attribution across that source
   repository rename.
7. Never point writable origin at an official repository.
8. Update writable origins, source locks, workflow references, required checks,
   and release configuration immediately after each transfer. Verify CI before
   continuing.
9. Preserve GitHub's old-location redirects and do not recreate repositories
   at the previous personal-account locations.
10. Rename local checkout directories only after confirming no running agent,
   terminal, editor workspace, build process, or registered worktree depends on
   the old absolute path. Update worktree registrations and workspace references
   deliberately; do not move the shared checkout during concurrent work.

Exit evidence: owned origins, disabled upstream push paths, default branches,
protections, CI, and source locks all report the intended topology.

### Phase 3 — Rename The Scient App Identity

1. Change only product-owned PapiLab surfaces to Scient.
2. Preserve inherited Synara names where required for source compatibility,
   license truth, or historical migration.
3. Cut over display name, bundle IDs, protocol, application profile,
   development profile, browser partition, storage prefixes, scratch/worktree
   naming, build metadata, artifacts, updater policy, assets, and protected
   user-visible copy.
4. Add focused identity assertions for every packaged platform and generated
   artifact.
5. Verify official Synara, retained PapiLab state, and Scient can coexist
   without path, protocol, bundle, process, or storage collision.

Exit evidence: installed Scient artifacts expose only intended Scient identity
while inherited/historical names remain limited to allowlisted internal truth.

### Phase 4 — Migrate Project Initiation And `.scient/`

1. Rename the owned package to `@scientfactory/project-init` after confirming
   package-scope availability.
2. Change new initialization from `.papilab/project.json` to
   `.scient/project.json`.
3. Define and test the PapiLab-to-Scient project migration described above.
4. Update portable project guidance without turning it into Scient-agent
   private instruction state.
5. Refresh workspace manifests and lockfiles.
6. Verify clean initialization, existing-folder initialization, interruption,
   rollback, reopening, conflict detection, and no-Git behavior.

Exit evidence: new projects use `.scient/`; supported `.papilab/` projects
migrate safely; existing user files are not overwritten.

### Phase 5 — Establish The Scient Agent Identity (Deferred Product Work)

1. Build the owned OpenCode-derived runtime as the Scient agent, not as a
   Scient shell over a separately exposed OpenCode engine.
2. Give it dedicated identity, binary/package, config, credentials, home,
   sessions, logs, cache, endpoint/IPC, process lifecycle, release, and update
   paths.
3. Keep inherited OpenCode core and Scient-owned additions traceable for
   review and selective upstream updates.
4. Preserve licenses, notices, ancestry, and diagnostic inherited-source
   revision.
5. Prevent the Scient agent from discovering or inheriting external OpenCode
   credentials, settings, sessions, or updates.
6. Keep external OpenCode independently selectable.

This phase was removed from the rename closeout because no pre-existing native
agent identity required migration. Repository naming and inherited-source
verification are complete; implementing and proving the native runtime remains
future product work.

Exit evidence for that later work: the Scient app and Scient agent work
together while the Scient agent and external OpenCode coexist with isolated
identity and state.

### Phase 6 — Rename And Preserve The External-Agent Layer

1. Use **External agents** in user-facing settings and documentation.
2. Introduce `ExternalAgent` and `ExternalAgentConnection` only in owned
   contracts; do not mass-rename inherited provider internals without need.
3. Preserve every current adapter and configuration path before refactoring.
4. Separate agent choice from access method and model choice.
5. Characterize settings and thread migrations before changing schemas.
6. Certify agents incrementally and report unverified compatibility honestly.

Exit evidence: Scient and every retained external-agent connection preserve
their identity, settings, defaults, history, and independent failure behavior.

### Phase 7 — Reconcile CI, Release, And Upstream Maintenance

1. Rename product-owned checks, scripts, workflow labels, release variables,
   artifacts, and diagnostics.
2. Keep historical Gate evidence and immutable tags unchanged.
3. Run inherited-core, identity, migration, external-agent registry,
   Scient/external-OpenCode isolation, packaging, and release-smoke checks.
4. Verify updater publication and client consumption as separate safety locks.
5. Record exact tested heads, official upstream pins, divergence, and final
   merged defaults.

Exit evidence: repeatable maintenance and release verification fails on stale
identity, lost adapters, unsafe migration, unreviewed divergence, or incorrect
update configuration.

### Phase 8 — Run App Coexistence And Recovery Proofs

Verify on clean-install and upgrade paths:

- Scient app alongside official Synara and retained PapiLab state;
- when the native Scient agent is later implemented, Scient agent alongside
  external OpenCode;
- for existing app surfaces, isolated processes, profiles, storage, endpoints,
  logs, caches, and updates;
- `.papilab/` migration to `.scient/`, including interruption and rollback;
- open, initialize, reopen, and recover without Git;
- external-agent settings and threads round-trip unchanged;
- for future agent implementation, failure, sign-out, update, corruption, or
  removal of one agent does not disable the other; and
- canonical project state remains reconstructable without any agent session
  database.

Exit evidence: automated tests plus an installed-app smoke at exact candidate
heads.

### Phase 9 — Cut Over Public Surfaces (Owner-Deferred)

The owner explicitly deferred the live website/deployment cutover. When it is
authorized, perform it only after local and release evidence is clean:

1. Update `scientfactory.com` content and product routes.
2. Update authentication callbacks, emails, downloads, documentation URLs,
   release endpoints, privacy/support language, and any app-store records.
3. Decide redirects from old domains deliberately.
4. Verify production aliases and downloadable artifacts rather than assuming
   merged repositories changed the live product.

Exit evidence: the public website, authentication, downloads, and released
application agree on ScientFactory and Scient.

### Phase 10 — Close Out

1. Update current implementation and source-lock documents with exact merged
   revisions and verification evidence.
2. Keep this plan Historical after verified closeout of the existing owned
   surfaces.
3. Preserve the LitRev-to-PapiLab plan and both rename reports as history.
4. Remove only temporary branches, worktrees, archives, and evidence that are
   confirmed unnecessary; preserve user artifacts and required migration
   fixtures.
5. Confirm default branches are clean, synchronized, protected, and free of
   unintended open rename PRs.

## Verification Matrix

| Area | Required proof |
|---|---|
| Product vocabulary | ScientFactory, Scient app, Scient agent, and external agents are used consistently |
| Documentation | Metadata valid, indexes current, links resolve, historical evidence unchanged |
| Application identity | Display, bundle, protocol, profile, partition, storage, artifacts, and updater isolated |
| Project migration | `.papilab/` to `.scient/` is explicit, idempotent, recoverable, and conflict-safe |
| Scient agent | Dedicated identity/state; inherited OpenCode lineage and attribution preserved |
| External agents | Registry, settings, credentials, defaults, threads, handoffs, and updates preserved |
| Canonical state | Project truth survives unavailable or corrupted agent runtime state |
| Coexistence | Scient app/agent, official Synara, retained PapiLab state, and external OpenCode do not collide |
| Release | Packaged artifacts and update policy match the intended repository and identity |
| Public | Website, authentication, downloads, and release endpoints verified live |

## Rollback Expectations

- Keep parent, desktop, and agent-source rename lanes independently revertible
  until the tested integration point.
- Preserve pre-migration project metadata or an equivalent restorable snapshot
  for the supported upgrade window.
- Do not delete PapiLab profiles or `.papilab/` metadata merely because Scient
  starts successfully once.
- Treat public DNS/deployment rollback separately from local repository and app
  rollback.
- Record exact commands and revisions during execution rather than inventing
  them in this pre-execution plan.

## Stop Conditions

Pause and review if execution would require:

- silently choosing between conflicting `.papilab/` and `.scient/` identities;
- sharing app and agent private state merely because both are named Scient;
- reusing external OpenCode credentials or sessions for the Scient agent;
- removing or redirecting an external agent without explicit product approval;
- rewriting historical evidence to remove PapiLab or LitRev;
- losing upstream ancestry, licenses, attribution, or fetch-only remote safety;
- publishing an updater feed that the installed client cannot consume;
- changing the live website, DNS, authentication, or downloads without explicit
  authorization; or
- describing target identifiers as implemented before verified source evidence.

## Completion Criteria

The rename is complete only when:

- accepted product truth and existing implementation identify the company as
  ScientFactory and the app as Scient, while reserving Scient for the planned
  native agent;
- technical documentation distinguishes Scient app from Scient agent;
- external agents remain independently selectable and configured;
- new projects use `.scient/` and supported `.papilab/` projects migrate safely;
- application identity/state is isolated from PapiLab and inherited products;
  future Scient-agent identity/state isolation remains an implementation
  requirement rather than a completed rename claim;
- owned repositories, protections, workflows, packages, artifacts, and source
  locks use the verified final topology;
- installed and upgrade-path verification passes at exact merged heads;
- historical evidence remains accurate;
- public website, authentication, downloads, and release endpoints have been
  verified or are explicitly recorded as a separately deferred owner task; and
- no unexplained active PapiLab product identity remains outside documented
  migration compatibility or history.

## Explicit Exclusions

This plan does not itself authorize:

- implementing the complete scientific project schema;
- building cloud sync, collaboration, billing, or mobile execution;
- changing Synara or OpenCode licensing or attribution;
- removing external agents;
- copying external subscriptions or credentials;
- broad inherited-core refactors unrelated to the rename;
- declaring Scient publicly cleared for release; or
- changing production infrastructure without separate execution authority.
