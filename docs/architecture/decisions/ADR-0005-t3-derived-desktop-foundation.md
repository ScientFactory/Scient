# ADR-0005: T3-Derived Desktop Foundation

Status: Accepted
Owner: Yaacov
Created: 2026-08-02
Last updated: 2026-08-06
Purpose: Selects a fresh T3-derived foundation for the successor Scient app while preserving Scient ownership, scientific authority, current-user continuity, and the independent Scient agent boundary.
Doc type: Architecture decision

## Document Rules

This ADR owns the durable desktop-foundation and upstream relationship. The
active migration plan may authorize a bounded candidate bootstrap under the
accepted Phase Zero evidence. This ADR does not authorize feature migration,
cloud enablement, user-data conversion, release, cutover, or retirement of the
current application.

The living
[T3 foundation migration plan](../../planning/t3-foundation-migration-plan.md)
owns capability sequencing, proof gates, open implementation choices, and the
documentation transition. Ordinary implementation learning belongs in that
plan or dated evidence; a material decision change requires an explicit
amendment or successor.

## Context

[ADR-0001](ADR-0001-synara-opencode-foundation-and-scient-ownership-boundary.md)
accepted the current Synara-derived desktop foundation, the OpenCode-derived
source foundation for the planned Scient agent, external-agent separation, and
Scient ownership of scientific truth. That decision enabled the current
application and its first permanent Scient-owned packages.

The current evidence reviewed in the migration plan indicates that
modern T3 is a stronger maintained source for much of the generic application
platform: desktop and service lifecycle, provider sessions, chat, browser and
preview, files, terminals, Git, packaging, updater behavior, and current
tooling. Continuing to reproduce those improvements through commit-by-commit
adaptation would spend Scient capacity on generic platform work rather than the
scientific workspace.

Changing the host must not make T3 the owner of Scient's scientific model or
force inferior product choices merely to preserve easy merges. It also must not
turn the current app and a new candidate into permanent co-equal products.

Yaacov approved the migration direction on 2026-08-02, reviewed the resulting
ADR point by point, and accepted this exact post-evidence decision on
2026-08-02. The
[Phase Zero dossier](../../research/spike-reports/t3-foundation-phase-zero-2026-08-02.md)
verified the official T3 baseline and did not trigger a stop condition. The
candidate repository did not yet exist when this decision was accepted. It now
exists as a private D4 candidate with a reviewed draft pull request; the active
migration plan and dated D4 evidence govern that progress. This does not amend
the decision or imply integration, release, or cutover.

## Decision

1. ScientFactory will target one successor Scient desktop application derived
   from a freshly fetched official T3 revision with literal Git ancestry. The
   exact revision remains a Phase Zero decision.
2. The successor will be a standalone ScientFactory-owned repository with a
   writable owned `origin` and official T3 configured as fetch-only
   `upstream`, with push disabled. ScientFactory owns its architecture,
   identity, privacy, data policy, releases, updater, support, acceptance, and
   direct code changes.
3. During the initial migration and stabilization period, qualified reviewed
   T3 ranges will normally enter through bounded ancestry-preserving merges
   with minimal avoidable rewriting. This is an initial maintenance strategy,
   not permanent T3 product authority or a promise to accept every change.
4. Scient-owned scientific meaning and behavior will remain dependency-isolated
   from T3 application internals. T3 thread, project, account, provider-session,
   and database identities may be host references but cannot become canonical
   scientific identity or accepted scientific truth.
5. The scientific application layer will initially be co-located in the
   successor desktop repository behind package and dependency boundaries. A
   separate core repository, daemon, or service will be introduced only when a
   real independent consumer, release, security, deployment, or operational
   lifecycle justifies it.
6. Extension seams and Scient-owned packages are preferred when they produce an
   equally strong design. Scient may change T3-owned surfaces directly whenever
   a demonstrated product, architecture, security, privacy, reliability,
   accessibility, or release need is better served that way. Such divergence
   must remain explicit, tested, owned, and rehearsed against later T3 updates.
7. The current Synara-derived Scient app remains the supported continuity
   application until an explicit, evidence-backed cutover. It may receive
   critical fixes and necessary continuity work, but it is not a second
   long-term scientific-feature target.
8. The separate `scient-agent` repository remains the source foundation for the
   planned first-party Scient agent. This desktop decision neither claims that
   product is implemented nor selects its future refreshed OpenCode baseline or
   the roles of Hermes, Goose, and other agent sources. External agents remain
   separate products with separate identities, credentials, sessions, and
   updates.
9. Useful T3 cloud, relay, web, and mobile foundations will be preserved and
   evaluated rather than removed during bootstrap. Scient retains authority
   over scientific identity, project membership, permissions, synchronization,
   conflicts, provenance, recovery, service enablement, and mobile product
   scope. No cloud or mobile product is authorized by this ADR.
10. Repository bootstrap and continued investment remain conditional on the
    evidence, proof gates, and stop conditions in the migration plan. Scient
    may revise or abandon the T3 strategy if update cost, coupling, licensing,
    data continuity, cloud/mobile constraints, or product quality fail those
    gates.

## Decisions Preserved From ADR-0001

This ADR supersedes ADR-0001 as the forward desktop-foundation decision. The
following durable boundaries remain in force:

- the Scient agent is the owned first-party agent product planned from an
  independently maintained source foundation, not a wrapper around an
  independently identified OpenCode engine;
- external OpenCode and other external agents remain distinct choices;
- Scient owns scientific project meaning, operations, permissions, context,
  provenance, review, recovery, and accepted state;
- separation means clear ownership and interfaces, not an automatic repository
  or process split;
- extension seams are a preference rather than a ban on justified inherited-core
  changes; and
- host, provider, session, and agent-runtime persistence is not canonical
  scientific project truth.

ADR-0001 is now `Superseded`. Its historical body remains unchanged apart from
metadata and a reciprocal successor notice. It continues to explain why the
initial foundation was chosen and to supply the preserved boundaries named
above.

## Relationship To Other Accepted Decisions

- [ADR-0002](ADR-0002-standalone-source-ownership-and-upstream-authority.md)
  continues to govern standalone ownership, fetch-only original sources,
  mandatory awareness, review-versus-integration state, and optional
  absorption. This ADR selects an initial policy in which accepted T3 ranges
  normally use literal merges during the initial aligned phase; it does not
  make T3 authoritative.
- [ADR-0003](ADR-0003-built-in-skills-portfolio-and-project-activation.md)
  remains accepted. Any future change to skill ownership, scope eligibility,
  released location, or activation requires its own explicit reconciliation.
- [ADR-0004](ADR-0004-scient-operation-capability-and-provenance-boundary.md)
  remains accepted and constrains the new host. T3 execution and presentation
  state cannot replace the Scient operation, authority, provenance, and
  scientific-record boundary.

## Explicit Non-Decisions

This ADR does not decide:

- candidate repository name, final public repository name, or exact T3 base;
- final package names or number of Scient-owned packages;
- whether future Scient-owned tables share T3's SQLite file or use a separate
  database;
- legacy import details, supported platforms, signing, release channels,
  updater transition, cutover date, or rollback window;
- cloud service topology, selected-user cohort, synchronization implementation,
  or mobile UI;
- M1 feature implementation details, provider additions, skill design, or
  Scient-agent protocol; or
- the later point at which broad T3 alignment should become more selective.

These decisions belong to the evidence and focused gates identified by the
migration plan. The plan may make a provisional bootstrap choice without
turning that choice into durable architecture or a public product identity.

## Alternatives Considered

### Keep The Synara-Derived App As The Long-Term Foundation

This preserves current implementation continuity but continues the generic
platform-maintenance burden and commit-by-commit adaptation pattern that
motivated the investigation.

### Replay Scient History Onto T3

This appears to preserve code but would transplant obsolete assumptions,
conflicts, and implementation shapes instead of preserving user value and
tested guarantees against current T3 architecture.

### Build A New Generic Desktop Shell From Zero

This maximizes structural control while spending substantial effort rebuilding
the maintained generic platform Scient is trying to avoid owning.

### Maintain T3-Derived And Synara-Derived Apps Permanently

This would multiply release, support, feature, data, and testing obligations
and recreate the platform burden rather than concentrating on one product.

### Extract A Separate Scient Core Before The First Workflow

This may look portable but would introduce speculative API, versioning, and
release boundaries before a second consumer or independent lifecycle proves
they are useful.

## Expected Consequences

- Scient can receive broad generic platform improvements through ordinary Git
  ancestry while concentrating engineering on the scientific workspace.
- A temporary second runnable application is required during migration, with
  explicit identity, data-directory, release, and rollback isolation.
- Some Scient requirements will create deliberate conflicts with later T3
  ranges; divergence ownership and hostile-merge rehearsal become continuing
  engineering responsibilities.
- Existing Scient and Synara implementations remain valuable as behavior,
  failure, test, migration, and design evidence rather than code that must be
  replayed.
- Scientific package boundaries must be proven through real workflows instead
  of becoming a speculative universal platform.
- Acceptance of this ADR changes the target foundation, not the current
  implementation, published application, user data, cloud availability, or
  release state.

## Acceptance Evidence

The Phase Zero record refreshed and reviewed:

- the exact official T3 tip, candidate base choice, tag comparison, license,
  notices, assets, and provenance;
- untouched T3 build and test behavior at the selected base;
- current telemetry, updater, state-directory, service, cloud, relay, web, and
  mobile roots and defaults;
- exact owned repository, branch, worktree, pull-request, and responsibility
  overlap;
- a safe owned-`origin` and fetch-only-T3 remote topology;
- provisional non-colliding candidate identity, protocol, executable, and state
  directory; and
- evidence that could have triggered a stop or material revision to this
  decision.

The exact official T3 tip remained
`e60821f0e0d82a5d671ca3b94719c49d333921c8`, tagged
`v0.0.32-nightly.20260802.980`, when D3 refreshed it. The untouched baseline
passed the recorded Node 24 build, test, check, typecheck, mobile-lint, and
release-smoke commands in the disposable fetch-only checkout. The dossier
identified mandatory identity, telemetry, state, updater, cloud/mobile, and
legacy-fallback controls; it found no reason to reject the foundation.

Yaacov explicitly authorized D3 end to end on 2026-08-02. Repository bootstrap
is authorized only through the narrower scope, risk dispositions, and stop
conditions in the active migration plan.

## Revisit And Stop Triggers

Reconsider this decision if evidence shows that:

- normal T3 updates repeatedly require broad unrelated changes;
- scientific authority cannot remain independent of T3 application state;
- licensing, governance, security, privacy, or release constraints make the
  foundation unacceptable;
- current-user data and rollback cannot be protected;
- preserving useful cloud or mobile foundations would force T3 account or
  service state to become scientific truth; or
- package isolation makes the first scientific workflow less coherent or more
  fragile rather than easier to own.
