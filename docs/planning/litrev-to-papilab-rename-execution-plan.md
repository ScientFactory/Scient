# LitRev-To-PapiLab Rename Execution Plan

Status: Active
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Defines and records the controlled migration from the LitRev product identity to PapiLab across product truth, documentation, owned source repositories, local state, packaging, infrastructure, and public surfaces.
Doc type: Planning note

## Execution Status

The local documentation, owned Synara/PapiLab desktop surfaces, owned
OpenCode maintenance surfaces, project-initiation namespace, and GitHub
repository names have been cut over to PapiLab on 2026-07-16. The exact source
commits and checks are recorded in
`../../lab/notes/papilab-rename-execution-report-2026-07-16.md`.

The public `papilab.com` deployment still serves an existing page titled
“LitRev Dashboard”. That hosted deployment is outside this documentation-only
repository and remains a coordinated follow-up, not a silently changed DNS or
production release. The rename is therefore not declared fully complete until
the owning deployment is updated and the public/authentication/download paths
are reverified.

## Goal

Rename the active product and maintained product-owned implementation identity
from **LitRev** to **PapiLab** without losing historical truth, damaging the
Synara/OpenCode upstream relationship, breaking or silently discarding local
state, colliding with official applications, or leaving the project with two
unresolved active identities.

This plan gives future reviewers and maintaining agents one place to verify the
intended scope, decision prerequisites, change order, compatibility policy,
evidence requirements, rollback path, and the external conditions still
required for full public cutover. The local portion has been executed; this
document remains the canonical closeout and rollback record. It does not create
a legal entity, provide legal or trademark clearance, or replace product
truth.

## Document Rules

This document owns the rename sequence, workstreams, verification, and
closeout criteria. It records Yaacov's 2026-07-16 decision to use PapiLab as
the canonical product identity and intended company/organization identity, but
it does not create a legal entity, provide legal or trademark clearance,
replace product truth, or define current implementation.

The canonical product name and positioning must be promoted into
`docs/product/`, and the hard-to-reverse technical identity and reset/rollback
choices are recorded in an accepted architecture decision and remain the
authority for runtime maintenance after the local cutover.

Historical documents and exact evidence must continue to describe the name,
paths, commands, identifiers, commits, tags, and results that existed when the
evidence was produced. Active guidance may point readers from the former name
to the new identity, but it must not rewrite history.

### Update Policy

Update this plan when:

- the name is accepted, rejected, or materially changed;
- an identity, compatibility, repository, or infrastructure choice is made;
- a phase starts, completes, fails, or is deliberately skipped;
- execution reveals a rename surface or migration risk not represented here;
  or
- the merge order, rollback path, or completion criteria change.

Do not mark this document `Accepted` merely because individual rename tasks
have been completed. Product truth and architecture decisions own acceptance;
this planning note should eventually become `Historical` after verified
closeout.

## Current Truth

- The repository is still documentation-first. It does not yet contain the
  implemented scientific project kernel, project format, agent gateway, or
  first complete scientific workflow.
- The accepted PRD defines a product broader than literature review: one local-
  first workspace for an entire scientific or scholarly research project.
- ADR-0001 accepts the owned Synara fork as the initial application foundation
  and the owned OpenCode fork as the initial agent-runtime foundation while
  keeping canonical scientific meaning product-owned.
- Gate 1.5 established an isolated LitRev desktop identity in the Synara fork.
  That identity is real code and includes application naming, bundle IDs,
  protocol, local homes, browser/storage namespaces, workspace names, update
  configuration, tests, and maintenance tooling.
- OpenCode remains an upstream-aligned owned engine. Its upstream name and core
  identity are not product branding and should not be renamed merely for
  cosmetic uniformity.
- Gate 1 and Gate 1.5 notes, tags, commit references, pull requests, and exact
  commands are historical evidence produced under the LitRev name.
- `papilab.com` is owned by Yaacov, but domain ownership alone is not product-
  name, company-name, package-name, app-store, or trademark clearance.
- Choosing the final name before creating a durable `.litrev` project format
  avoids introducing an unnecessary project-format migration immediately after
  implementation begins.
- On 2026-07-16, Yaacov selected PapiLab as the canonical product name, stated
  that it is also the intended company name, and decided that the parent GitHub
  repository will be renamed from `LitRev` to `PapiLab`.

## Accepted Working Identity

The working brand system for execution is:

- **Company/organization identity:** `PapiLab`, subject to legal availability
  and any later incorporation or organization decision
- **Product name:** `PapiLab`
- **Technical slug and namespace:** `papilab`
- **Primary descriptor:** `Scientific Workspace`
- **Primary positioning line:** `Run your entire scientific project with AI agents.`
- **Domain:** `papilab.com`
- **Parent GitHub repository:** `PapiLab`
- **Desktop fork repository:** `papilab-desktop`
- **Agent-runtime repository:** keep `opencode`

The company/organization statement is an intended identity, not a claim that a
legal entity or GitHub organization already exists. The descriptor and
positioning line are the working public presentation for this rename and may be
revisited later without reopening the technical namespace.

## Decisions Recorded For Execution

Use these decisions unless Yaacov explicitly revises them before the identity
architecture decision is accepted:

1. `PapiLab` is the canonical product name and `papilab` is the technical
   namespace.
2. PapiLab is also the intended company/organization identity, subject to legal
   and naming availability. The current product may be presented as
   `PapiLab — Scientific Workspace` when a descriptor is useful.
3. The primary positioning line is
   `Run your entire scientific project with AI agents.`
4. The parent GitHub repository will become `PapiLab` under its current owner.
   Creating or transferring it to a future PapiLab GitHub organization is a
   separate later operation.
5. The owned Synara fork will become `papilab-desktop`, while its official
   `upstream` remains Synara and its fork ancestry is preserved.
6. The owned OpenCode repository remains `opencode`; only the PapiLab-owned
   adapter, verifier, CI, and documentation surfaces change names.
7. New durable project metadata uses `.papilab`. No new implementation may
   introduce `.litrev` as a project-format path.
8. Existing LitRev runtime state is development-only and will be archived if it
   has value, followed by a clean PapiLab start. The rename will not add an
   automatic general LitRev-to-PapiLab state migration unless pre-cutover
   inventory finds valuable state that changes this decision.
9. The clean cutover will not retain general `litrev://`, `LITREV_*`, or
   `litrev:*` compatibility aliases. Former identifiers remain only in
   historical evidence, archive tooling, and narrowly named legacy detection
   code needed to avoid collisions.
10. Automatic desktop updates remain disabled until the complete PapiLab
    publication and client-consumption contract is separately enabled and
    verified.

## Remaining Prerequisites And Follow-Up

The choices above removed implementation ambiguity. The local rename work is
complete; the remaining prerequisites are evidence, legal, and external-state
requirements:

1. Complete serious preliminary naming clearance before company formation,
   trademark filing, or public commercial claims, with professional review.
2. Repository names and GitHub ownership have been cut over; retain the
   captured settings and recheck protection rules after every repository move.
3. The former LitRev development state was kept outside the new PapiLab
   namespaces; any future archive or import must remain an explicit decision.
4. Confirm the credentials and access needed later for GitHub settings, domain,
   deployment, signing, email, authentication, and release destinations.
5. The accepted working identity is now recorded in product truth and
   ADR-0001; keep those documents authoritative for future runtime changes.

### Naming Clearance

Before an irreversible public cutover:

- search exact and confusingly similar names in relevant global, national, and
  regional trademark registers;
- search company registries, scientific software, AI products, research
  platforms, GitHub, package registries, app stores, and social handles;
- inspect `PapiLab`, `Papi Lab`, `Papi Labs`, `PapyLab`, and similar spellings;
- evaluate the meaning and tone of the name in important user languages;
- record discovered conflicts, relevant goods/services, jurisdictions, and the
  decision to proceed, narrow, or reject the name; and
- obtain professional review before filing or making claims of legal clearance.

A preliminary search may reject the candidate, but it cannot by itself certify
that the name is safe.

## Success Conditions

The rename is successful only when all of the following are true:

1. Active product truth, active guidance, public surfaces, and maintained
   product-owned code use one canonical PapiLab identity.
2. Every remaining LitRev occurrence is classified as historical evidence, an
   intentional legacy archive/detection identifier, an immutable external
   reference, or an explicitly approved short-lived bridge.
3. Synara and OpenCode upstream names, licenses, ancestry, and remote topology
   remain accurate and reviewable.
4. A fresh PapiLab installation uses isolated PapiLab runtime, browser,
   storage, project, and package namespaces.
5. The LitRev-state policy is verified: selected development state is archived,
   PapiLab starts clean, and predecessor state remains untouched.
6. PapiLab can coexist with official Synara, official OpenCode, and any retained
   LitRev development installation without reading or overwriting their state.
7. Full required source checks, identity checks, packaging checks, and manual
   smoke tests pass at the exact merged heads.
8. Repository links, source locks, CI settings, release configuration, domain
   routing, and public metadata point to the intended owners and destinations.
9. Rollback is possible without deleting the last valid LitRev data or losing
   the exact pre-cutover source state.

## Rename Principles

1. **Do not run a blind global replacement.** Classify every occurrence before
   deciding whether it should change.
2. **Preserve history.** Historical evidence must retain exact former names and
   identifiers, with a concise supersession note where readers may otherwise
   mistake it for current guidance.
3. **Keep upstream identity separate from product identity.** Do not rename
   Synara/OpenCode core packages, copyrights, licenses, imports, or official
   URLs merely because the product becomes PapiLab.
4. **Separate upstream refreshes from the rename.** Refresh and verify the
   maintained source baselines first; do not hide upstream changes inside a
   brand migration.
5. **Reset cleanly without destroying evidence.** Archive selected development
   state before starting PapiLab clean. Do not automatically import browser,
   runtime, credential, or scratch state merely because it exists.
6. **Avoid unnecessary compatibility.** Because there is no public LitRev user
   base, do not introduce general legacy aliases. Any legacy detector retained
   for collision prevention or archival must be narrow, named, and tested.
7. **Move infrastructure last.** Code, tests, packages, and documentation should
   be coherent before repository, release, website, email, or DNS cutovers.
8. **Use narrow review lanes.** Product truth, desktop identity, OpenCode
   integration, documentation/history, and infrastructure should remain
   separately reviewable.
9. **Evidence is part of completion.** A passing search alone does not prove
   clean state isolation, package identity, release behavior, coexistence, or
   rollback.
10. **Freeze project-format identity.** No project-initiation implementation may
    create `.litrev`, `@litrev/*`, or a new LitRev-named permanent package while
    the rename is in progress. Reconcile the first-slice/initiation plan to
    `.papilab` and PapiLab package names after the identity decision lands.

## Working Identity Matrix

This matrix is the selected identity architecture and execution ledger. Values
that already equal the target are complete for the local cutover; rows marked
pending remain external or intentionally deferred.

| Surface | Observed/current state | Target or remaining state | Required treatment |
|---|---|---|---|
| Company/organization identity | Not established in this repository | `PapiLab` | Treat as intended identity pending legal and organizational setup. |
| Product display name | `PapiLab` | `PapiLab` | Complete locally; reverify public deployment. |
| Product descriptor | `Scientific Workspace` | `Scientific Workspace` | Complete locally; retain as the clarifying descriptor. |
| Positioning line | `Run your entire scientific project with AI agents.` | Same | Complete as the working primary product promise. |
| Technical namespace | `papilab` | `papilab` | Use consistently for new product-owned identifiers. |
| Parent repository | `PapiLab` | `PapiLab` | Complete; preserve repository settings. |
| Desktop repository | `papilab-desktop` | `papilab-desktop` | Complete locally; preserve official Synara `upstream`. |
| Agent-runtime repository | Owned `opencode` fork | Keep `opencode` | Rename only PapiLab-owned adapters and maintenance surfaces. |
| Application protocol | `papilab://app` | `papilab://app` | Complete; no general legacy forwarding. |
| Production bundle ID | `com.yaacovcorcos.papilab` | `com.yaacovcorcos.papilab` | Complete locally; test signing/updating assumptions before release. |
| Development bundle ID | `com.yaacovcorcos.papilab.dev` | `com.yaacovcorcos.papilab.dev` | Complete; preserve production/development isolation. |
| Product home | `~/.papilab` | `~/.papilab` | Complete; former state remains separate. |
| Desktop user-data profile | `papilab` / `papilab-dev` | `papilab` / `papilab-dev` | Complete; test predecessor coexistence on each release candidate. |
| Browser partition | `papilab-browser` | `papilab-browser` | Complete; do not import browser state or read official Synara state. |
| Persisted browser/storage keys | `papilab:*` and `papilab.*` | `papilab:*` and `papilab.*` | Complete; no general legacy key migration or aliasing. |
| Runtime environment | PapiLab-owned variables use `PAPILAB_*`; inherited `SYNARA_*` remain where required | New PapiLab variables | Keep compatibility variables documented and do not add LitRev aliases. |
| Update channel/configuration | PapiLab-named channel and variables; client updates disabled | PapiLab-named channel and variables | Keep updates disabled until the PapiLab release contract is independently verified. |
| Scratch workspace directory | `papilab-opencode-workspaces` | `papilab-opencode-workspaces` | Complete; do not migrate disposable scratch state. |
| Worktree/branch prefix | `papilab` | `papilab` | Complete; keep historical branch and tag names unchanged. |
| Project metadata | `.papilab` is the project-initiation namespace | `.papilab` | Complete for the current package; do not introduce `.litrev`. |
| Maintenance/verifier names | PapiLab-named equivalents | PapiLab-named equivalents | Complete; keep historical Gate scripts immutable. |
| Historical Gate tags | `litrev-gate-*` | Keep unchanged | Immutable historical evidence. |

## Occurrence Classification

Before editing, build a complete rename ledger covering tracked content,
tracked paths, generated assets, local source checkouts, repository settings,
and external operational surfaces. Search at least for:

- `LitRev`, `litrev`, `LITREV`, `Lit Rev`, and `lit-rev`;
- current bundle IDs, protocol origins, home paths, storage prefixes, browser
  partitions, workspace names, update channels, and repository URLs;
- user-visible `Synara` references that may still belong to inherited source or
  may incorrectly remain on product surfaces; and
- generated artifacts whose source template may not contain the final rendered
  identity.

Assign every result to exactly one class:

1. **Active canonical:** change to PapiLab.
2. **Historical evidence:** preserve exactly; add a naming note only when
   necessary for interpretation.
3. **Legacy archive or detection:** preserve under an explicit `legacy` name
   only when needed for archival, collision prevention, or historical
   interpretation, with tests and a retirement condition.
4. **Upstream identity:** preserve Synara/OpenCode names, licenses, package
   scopes, imports, official URLs, and inherited internals when they remain
   source truth rather than product branding.
5. **Immutable external reference:** preserve exact commits, tags, branches,
   pull requests, release artifacts, and historical paths.
6. **Generated output:** change the owning template/configuration and rebuild;
   do not hand-edit generated copies.
7. **Obsolete:** remove only when independently shown to be unused and when
   removal is in scope for the relevant change lane.

The rename must not proceed while meaningful occurrences remain unclassified.

## Phase 0: Close Naming And Brand Prerequisites

### Work

1. Treat the PapiLab product-name decision as recorded; do not reopen it merely
   because implementation has not started.
2. Preserve the remaining naming-clearance and professional-review work before
   company formation, trademark filing, or public commercial claims.
3. Test the name, pronunciation, descriptor, and positioning with a small set
   of representative English-speaking and multilingual researchers.
4. Confirm that the `Papi` connotations remain acceptable for a professional,
   international scientific product and company identity.
5. Record any required professional legal follow-up before company formation,
   filing, or public commercial claims.

### Exit condition

The phase passes when the recorded identity has enough preliminary clearance
to justify source investment, representative-language review identifies no
material brand blocker, and later professional/legal work is explicitly scoped.
If clearance rejects or materially changes the name, revise this plan before
doing any source or infrastructure rename.

## Phase 1: Freeze And Record The Pre-Rename Baseline

### Work

1. Resolve, commit, or deliberately set aside unrelated work in the parent,
   Synara, and OpenCode checkouts. Do not begin on a dirty or ambiguous source
   baseline.
2. Fetch official upstreams and determine whether either maintained fork has
   moved behind its upstream.
3. If an upstream refresh is desired, perform it through its own reviewed
   maintenance branch and merge it before the rename.
4. Record exact parent, Synara, and OpenCode commits; remotes; branches; tags;
   toolchain versions; and baseline test results.
5. Create recoverable pre-rename tags or equivalent immutable references in
   every changed repository.
6. Inventory LitRev local profiles and archive only the development state that
   has continuing value; record enough information to restore or inspect it.
7. Pause unrelated identity, packaging, storage, release, and project-format
   work until the cutover lanes are complete.

### Exit condition

Every changed repository has a clean, reviewed, reproducible baseline; upstream
movement is not mixed into the rename; and selected local state has a verified
archive or an explicit disposable classification.

## Phase 2: Approve The Durable Decisions

### Work

1. Update the accepted PRD so it owns the canonical PapiLab product name and
   product description.
2. Add an architecture decision for the technical identity, repository naming,
   clean-reset policy, absence of general compatibility aliases, and rollback
   contract.
3. Add a concise naming/supersession note to ADR-0001 without rewriting the
   decision that was accepted under the LitRev name.
4. Confirm the identity matrix in this plan against those governing documents.
5. Mark any unresolved matrix rows as blockers rather than guessing during
   implementation.

### Exit condition

Product truth owns the accepted name, architecture owns the hard-to-reverse
technical identity and clean-reset decisions, and this plan contains no
unresolved choice that would change the implementation strategy.

## Phase 3: Build The Complete Rename Ledger

### Parent repository

Inventory:

- root orientation and agent instructions;
- product, architecture, planning, research, onboarding, development,
  operations, quality, and design documentation;
- filenames, directory names, relative links, headings, and anchors;
- repository-local skills, skill names, descriptions, and skill indexes;
- lab paths, scripts, fixtures, notes, reports, evidence manifests, and source
  locks;
- Git remotes, GitHub references, badges, pull request links, and release links;
  and
- ignored or generated material that may be used by verification.

### Synara-derived desktop repository

Inventory:

- application name, copy, icons, bundle IDs, schemes, origins, and deep links;
- production/development profiles and Electron user-data paths;
- browser/webview partitions, localStorage keys, snapshots, migrations, and
  repair manifests;
- `LITREV_*` variables, configuration, diagnostics, and CLI flags;
- scratch workspaces, project/worktree branch prefixes, and hidden paths;
- package metadata, installers, artifact names, executable descriptions,
  permissions, and signing/notarization inputs;
- update channels, repository destinations, manifests, release workflows, and
  disabled-update safety locks;
- feedback, analytics, telemetry, crash, notification, and support identifiers;
- tests, snapshots, fixtures, generated theme/assets, comments, and developer
  messages; and
- brand guard and upstream verifier behavior.

### OpenCode repository

Inventory only the PapiLab-owned integration surface:

- LitRev-named verifier scripts and package commands;
- PapiLab-owned branches, CI jobs, adapter fixtures, and documentation;
- exact Gate tags and historical references that must remain unchanged; and
- any product-specific environment or packaging hooks.

Do not treat general `opencode`, upstream package names, or official project
identity as rename targets.

### External and operational surfaces

Inventory:

- GitHub repository names, descriptions, topics, default branches, protection
  rules, variables, secrets, environments, actions, releases, and webhooks;
- `papilab.com`, `www`, redirects, DNS, certificates, deployment aliases, and
  any existing application currently served there;
- email sending domains, sender identities, authentication callbacks, and
  support addresses;
- package registries, app-store records, code signing, notarization, update
  feeds, analytics, error reporting, and social handles; and
- public screenshots, download links, documentation, legal copy, and
  attribution.

### Exit condition

The ledger covers every repository and operational owner, every result has a
classification, and reviewers can distinguish active targets from historical,
legacy, upstream, external, and generated names.

## Phase 4: Prepare Active Documentation And Repository Knowledge

The local documentation cutover has been executed after the durable decisions
were approved. Use this phase as the review checklist for keeping active docs,
indexes, source locks, and historical notes synchronized with the maintained
source heads. Do not merge wording that claims public deployment completion
while the external site still serves the former identity.

### Work

1. Rename active product terminology in the PRD, product philosophy, roadmap,
   implementation plans, architecture direction, onboarding, root orientation,
   and agent instructions.
2. Rename active document and skill paths only when the path is part of current
   PapiLab identity; update all inbound links in the same change.
3. Rename `lab/papilab-bridge` only after classifying whether its contents are
   active scaffolding or historical evidence.
4. Update active source-lock role descriptions while preserving exact former
   tags, commits, branches, pull requests, and historical commands.
5. Add one concise note to historical Gate documents explaining that the
   product was later renamed to PapiLab. Do not rewrite their body evidence.
6. Keep current, historical, and external-pending states explicit. Do not
   imply public deployment completion before its source and hosting owners
   have reverified the public surfaces.
7. Update `docs/README.md`, area indexes, architecture-decision indexes, skills
   indexes, and any root navigation affected by moved or renamed files.

### Exit condition

A review-ready documentation change uses PapiLab consistently for accepted
active direction, preserves exact historical evidence, resolves all relative
links, and keeps metadata and authority valid. Its merged current-state wording
must match the source state at the time it lands.

## Phase 5: Cut Over The Synara-Derived Desktop Identity

Keep this work in identifiable commits or pull-request lanes.

### Lane A: Shared identity constants

- Establish one PapiLab identity module for display name, protocol, origins,
  bundle IDs, update channel, profile names, and other shared constants.
- Replace duplicated LitRev literals with shared PapiLab constants where doing
  so reduces drift.
- Keep legacy constants clearly named, such as `LEGACY_LITREV_*`, and use them
  only in archival or collision-detection code.

### Lane B: Packaging and application lifecycle

- Change application name, production/development bundle IDs, protocol
  registration, artifact names, package metadata, installer metadata, and
  generated application assets.
- Verify that production and development profiles remain isolated.
- Recheck signing, notarization, replacement detection, restart/update prompts,
  and application discovery because the bundle ID changes the operating-
  system identity.

### Lane C: Runtime and browser isolation

- Change the product home, Electron user-data names, browser partitions,
  storage namespaces, notification tags, scratch workspace names, and product-
  owned worktree/branch prefixes.
- Keep official Synara state outside every archive source and PapiLab target.
- Verify that PapiLab does not read from or write to the official Synara,
  official OpenCode, or unrelated Codex profiles.

### Lane D: Clean reset and predecessor archive

- Archive selected LitRev development profiles before the first PapiLab launch;
  do not move or delete the originals as part of cutover.
- Start PapiLab with empty PapiLab-owned home, user-data, browser, and storage
  namespaces.
- Do not import LitRev browser state, storage keys, scratch workspaces,
  credentials, sessions, or runtime databases automatically.
- Detect a predecessor profile only when needed to prevent collision or tell
  the developer where the archived state remains; do not turn detection into a
  general compatibility layer.
- Verify that repeated PapiLab launches remain clean and do not rediscover or
  modify former LitRev state.
- Document the manual archive-inspection or recovery path.
- If pre-cutover inventory finds state valuable enough to require automated
  migration, stop and revise the architecture decision and this plan before
  implementing it.

### Lane E: Release and update safety

- Rename release variables, update repository configuration, channels,
  manifest expectations, and release-smoke assertions.
- Preserve the current safe default: PapiLab clients must not perform update
  activity until both publication and client consumption are deliberately
  enabled and tested together.
- Inspect generated update artifacts rather than relying only on workflow text.
- Do not publish to a LitRev or Synara destination by fallback.

### Lane F: Tests and identity guard

- Update unit, integration, browser, packaging, clean-reset/predecessor, and
  release tests.
- Replace the current brand guard with a PapiLab guard that checks user-facing
  and packaged surfaces.
- Maintain an explicit allowlist for historical, upstream, and legacy
  archive/detection references; require a reason for every allowlisted path or
  token.
- Make unexpected active `LitRev` branding and predecessor `Synara` branding
  fail in protected product surfaces.

### Exit condition

The PapiLab desktop build has one coherent runtime identity, passes the complete
required suite, starts clean under the accepted predecessor policy, and can
coexist with all official and retained predecessor profiles.

## Phase 6: Rename Only The PapiLab-Owned OpenCode Surface

### Work

1. Keep OpenCode's upstream product name, package identity, source structure,
   license, copyrights, official URLs, and general core symbols unchanged.
2. Rename LitRev-owned maintenance commands, verifier scripts, CI job labels,
   adapter fixtures, and documentation to PapiLab equivalents where they are
   current rather than historical.
3. Preserve immutable `litrev-gate-*` tags and exact Gate evidence.
4. Verify the writable `origin`, fetch-only official `upstream`, current
   divergence, generated-file checks, typecheck, test, build, and CLI smoke.
5. Re-run the cross-repository compatibility smoke against the exact PapiLab
   desktop head.

### Exit condition

The OpenCode fork remains recognizably and maintainably OpenCode, while its
product-owned integration surface uses PapiLab and remains compatible with the
renamed desktop application.

## Phase 7: Establish The PapiLab Project Namespace

### Work

1. Reserve `.papilab` for PapiLab-owned project metadata and generated project
   support files.
2. Confirm that the current first-slice/initiation draft and the owned package
   use `.papilab`, `packages/papilab-project-init`, and `@papilab/project-init`;
   no new `.litrev` project format may be introduced.
3. Ensure the first project-initiation design offers the accepted clean-project
   and PapiLab-initiated project choices without introducing `.litrev` as a new
   active format.
4. Use PapiLab terminology in default project instructions, agent guidance,
   templates, receipts, and future project schema work.
5. Do not retrofit a complete project schema into the rename. The rename owns
   the namespace; the first vertical slice owns the smallest real project
   contract.
6. If any prototype `.litrev` project already exists by execution time,
   inventory it and add an explicit project-format migration decision before
   proceeding.

### Exit condition

New project work has one reserved PapiLab namespace and the rename has not
prematurely defined the scientific object model.

## Phase 8: Repository And Infrastructure Cutover

Perform this phase only after the source and documentation changes are green.

### GitHub and source control

1. Rename the parent repository from `LitRev` to `PapiLab`.
2. Rename the owned Synara repository to `papilab-desktop`; preserve its fork
   relationship, official Synara `upstream` remote, and disabled upstream push.
3. Keep the owned OpenCode repository named OpenCode unless a separate decision
   changes its ownership model.
4. Update local remotes, source locks, submodule or checkout instructions,
   badges, links, repository descriptions, topics, environments, variables,
   secrets, branch protections, required checks, webhooks, and release targets.
5. Verify GitHub redirects, but do not rely on redirects as the permanent
   configuration.

### Domain and hosted surfaces

1. Inspect what currently serves `papilab.com` and `www.papilab.com` before any
   alias or DNS change.
2. Prepare the PapiLab website/application, redirects, authentication callback
   URLs, email domain, support identity, legal copy, analytics, and download
   destinations before switching traffic.
3. Capture the current DNS, deployment aliases, certificates, and rollback
   destination.
4. Move the domain only after the target is healthy at a temporary verified
   address.
5. Verify both apex and `www`, login/authentication paths, downloads, update
   feeds, and outbound email after cutover.

### Exit condition

The owned repositories and maintained desktop surfaces resolve to the intended
PapiLab owners and artifacts, no critical local integration depends on a stale
LitRev URL, and the previous domain/deployment state can still be restored.
The public website and deployment remain a separate pending phase.

## Phase 9: End-To-End Verification

Verification must cover all layers below at exact candidate merge heads.

### Static and documentation verification

- Run case-sensitive and case-insensitive searches for all LitRev variants and
  former technical identifiers.
- Compare every remaining match against the approved ledger and allowlist.
- Check renamed paths, relative Markdown links, metadata, indexes, generated
  files, and `git diff --check`.
- Confirm that active docs say what is proposed, implemented, or historical
  truthfully.

### Source and CI verification

- Run the complete required Synara-derived desktop suite: formatting, lint,
  typecheck, unit/integration tests, browser tests, desktop build, identity
  checks, clean-reset/predecessor tests, release smoke, and relevant platform
  regressions.
- Run the complete required OpenCode suite: upstream verifier, typecheck, tests,
  platform builds, CLI smoke, and generated-file checks.
- Require hosted checks and zero unresolved review threads; local targeted tests
  are not sufficient merge proof.

### Fresh-install verification

- Install or run PapiLab with no predecessor state.
- Verify PapiLab display and package identity, protocol, home, browser
  partition, storage keys, scratch workspaces, and production/development
  isolation.
- Open, close, reopen, and recover a representative non-Git project.
- Confirm that no LitRev migration runs when no legacy state exists.

### Predecessor-state verification

- Start PapiLab with a controlled LitRev development profile present.
- Verify that PapiLab creates and uses only its clean PapiLab namespaces and
  does not import or mutate LitRev state.
- Verify the selected archive is readable and the original LitRev profile
  remains intact through cutover and rollback testing.
- Confirm that any predecessor detector is read-only, narrowly scoped, and not
  a hidden compatibility path.

### Coexistence verification

- Run PapiLab alongside retained LitRev development state and official Synara.
- Connect the owned OpenCode runtime without overwriting official OpenCode or
  Codex credentials/state.
- Verify distinct processes, bundle IDs, protocols, user-data paths, browser
  partitions, ports where applicable, and scratch workspaces.

### Package and release verification

- Inspect the built application, installer, executable metadata, icons,
  entitlements, bundle identifiers, update manifests, artifact names, and
  release notes.
- Verify that update publication cannot become active while clients remain
  unable to consume the feed, and that clients cannot consume an unintended
  LitRev/Synara feed.
- Verify update behavior from an eligible previous PapiLab build when updates
  are intentionally enabled.

### Product smoke

- Open or create the controlled scientific-project capsule used by the first
  vertical slice.
- Run the bounded owned OpenCode action through the renamed desktop foundation.
- Verify project root, context, approval behavior, transcript/event fidelity,
  result display, cleanup, reopening, and recovery.
- Do not claim that this smoke validates a complete scientific project model.

### Exit condition

All required checks are green, every exception is documented, the live smoke
uses exact reviewed heads, and no blocker is deferred into the public cutover.

## Executed Change And Merge Order

The following order was used to keep each change independently reviewable. Do
not collapse future public or release work into one cross-repository
mega-commit. Steps 2 through 6 are complete locally; steps 7 and 8 remain
pending until the external public surfaces and final hosted evidence are ready.

1. **Baseline maintenance:** optional upstream refreshes and exact source pins,
   with no rename changes.
2. **Decision change:** accepted product-name update and technical identity/
   clean-reset decision.
3. **OpenCode integration change:** PapiLab-owned verifier/adapter terminology,
   while preserving OpenCode core and historical tags.
4. **Desktop identity change:** shared identity, packaging, runtime isolation,
   predecessor archive/clean-reset policy, release safety, tests, and brand
   guard.
5. **Parent knowledge change:** active docs, paths, skills, lab scaffolding,
   indexes, source locks, and historical naming notes.
6. **Repository settings change:** GitHub names, remotes, protections,
   variables, secrets, and release destinations.
7. **Hosted/public change:** website, domain, email, authentication callbacks,
   downloads, and public metadata.
8. **Closeout change:** final exact commit references, evidence report,
   remaining compatibility inventory, and transition of this plan to
   `Historical`.

The exact order of steps 3 through 5 may be adjusted to satisfy a real build
dependency, but each pull request must state which temporary mixed-name state
it creates and which subsequent pull request removes it. Temporary mixed-name
states may exist only on coordinated rename branches or during one controlled
cross-repository merge wave. During that window:

- do not publish a desktop release;
- do not redirect public traffic;
- do not begin project-initiation implementation;
- keep the exact compatible branch/commit set recorded; and
- reconcile all active default branches before ordinary feature work resumes.

Infrastructure and public traffic remain last.

## Rollback Plan

### Before cutover

- preserve exact pre-rename commits and tags;
- export GitHub settings that cannot be reconstructed from source;
- archive selected LitRev profiles and verify that the archive is readable;
- record DNS, deployment aliases, authentication callbacks, email records, and
  release/update destinations; and
- define who decides to roll back and what constitutes a rollback trigger.

### Source rollback

- Revert the narrow rename pull request instead of resetting shared history.
- Restore the previous release target only from an exact verified commit.
- Ensure that a failed PapiLab launch cannot modify the retained LitRev source
  profile.

### Data rollback

- Never make the PapiLab cutover delete the LitRev profile or its selected
  archive.
- Restore or reopen the retained LitRev state if PapiLab verification fails.
- Do not import or reconcile state automatically; require a new explicit
  decision if later recovery needs data from the former profile.

### Infrastructure rollback

- Restore the previous deployment aliases or DNS records from the captured
  state.
- Revert authentication and email callback/sender configuration together with
  the domain surface.
- Disable release/update publication if artifact identity or feed ownership is
  uncertain.

### Rollback triggers

Roll back or stop the affected lane when:

- a profile, storage, or credential collision is observed;
- archive/reset handling loses, overwrites, or exposes state;
- official Synara/OpenCode state is accessed unexpectedly;
- package, signing, update, or release identity is inconsistent;
- required hosted checks are red or review blockers remain unresolved;
- the public domain points at an unverified or partially renamed application;
  or
- the identity ledger cannot explain remaining active LitRev references.

## Stop Conditions

Pause execution and return to owner review if:

- preliminary clearance or representative-language review finds a material
  problem with the accepted name or company identity;
- valuable predecessor state is discovered that would require automated
  migration after the clean-reset policy is accepted;
- upstream refresh conflicts are broad enough to obscure the rename;
- a repository cannot preserve owned-origin and official-upstream topology;
- the bundle-ID change creates an unreviewed signing, entitlement, store, or
  updater consequence;
- a required external credential, legal decision, or platform permission is
  missing; or
- a broad architectural refactor becomes necessary to complete the rename.

The rename must not be used as cover for unrelated product, schema, or source-
core redesign.

## Completion Checklist

The rename is complete only after reviewers can answer **yes** to every item:

- [ ] Yaacov's PapiLab product, intended company, repository, namespace,
      descriptor, and positioning decisions are recorded in the governing
      product and architecture documents.
- [ ] Relevant naming and trademark clearance was completed or consciously
      scoped by the owner.
- [ ] Product truth and the technical identity decision are current.
- [ ] Exact pre-rename commits, settings, and selected data are recoverable.
- [ ] Every LitRev occurrence is classified and every active exception is
      allowlisted with a reason and retirement condition.
- [ ] Active documentation, paths, indexes, and project skills use PapiLab.
- [ ] Historical Gate evidence retains its exact LitRev-era facts.
- [ ] Synara/OpenCode upstream identity, ancestry, licenses, remotes, and update
      strategy remain correct.
- [ ] The desktop app uses coherent PapiLab display, bundle, protocol, profile,
      browser, storage, workspace, packaging, and release identities.
- [ ] The clean-reset and predecessor-archive policy is tested,
      non-destructive, and recoverable.
- [ ] Fresh install, reopen, clean reset, coexistence, package, release,
      and cross-repository smoke checks pass.
- [ ] Required hosted CI is green and review threads are resolved.
- [ ] Repository settings, source locks, links, variables, secrets, and release
      destinations use the intended owners.
- [ ] `papilab.com`, `www`, authentication, email, downloads, and update feeds
      are verified after public cutover.
- [ ] The rollback path was tested or exercised sufficiently to be credible.
- [ ] A final evidence report records exact merged commits and any intentionally
      retained legacy identifiers.
- [ ] This plan is marked `Historical` only after all required closeout work is
      complete.

## First Action After Approval

Do not start by editing names. The product identity has been selected, so start
by completing the remaining Phase 0 clearance and language review. Then record
the clean pre-rename baseline in Phase 1, promote the recorded decisions into
product truth and the identity architecture decision in Phase 2, and build the
classified rename ledger before the first product-identity code change.
