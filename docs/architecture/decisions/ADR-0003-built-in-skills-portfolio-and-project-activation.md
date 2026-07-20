# ADR-0003: Built-In Skills Portfolio And Project Activation

Status: Accepted
Owner: Yaacov
Created: 2026-07-19
Last updated: 2026-07-20
Purpose: Records where Scient-maintained built-in skills live, how projects preserve exact activation identity, and how application and agent delivery remain subordinate to Scient authority.
Doc type: Architecture decision

## Context

Accepted by Yaacov on 2026-07-19 while authorizing the first built-in skills
portfolio implementation and the exact Skill Authoring v0.1 release.

Scient's draft skills product direction distinguishes reusable procedures from
Scient operations, tools, dependable agent behavior, project state, and packs.
The desktop application already has a Scient-owned project-initialization
kernel with inspect, preview, apply, recovery, and rollback behavior. It also
inherits a generic cross-provider skills catalog. The planned Scient agent has
inherited skill-loading seams, but neither provider discovery nor an agent
runtime may own canonical Scient skill identity or project activation.

Built-ins must ship centrally without copying mutable skill bodies into every
project. Projects must remain able to identify the exact behavior they selected
without making runtime or provider state canonical project truth. The first
authored built-in is Skill Authoring v0.1, a user-visible meta-capability rather
than a project-scoped researcher-facing scientific skill.

## Decision

1. The canonical source for released Scient built-ins is the runtime-neutral
   `@scientfactory/scient-skills` package in the standalone
   `scient-desktop` repository. The draft candidate portfolio and product
   taxonomy remain in `docs/product/skills-system.md`; candidate rows do not
   become package entries until an actual skill release exists.
2. Every built-in release is immutable and identified by a canonical ID,
   semantic version, Scient origin, and SHA-256 content digest. Its portable
   `SKILL.md` remains separate from a Scient metadata sidecar. Generated runtime
   catalog data must be reproducible from those source files and checked for
   drift. The portfolio exposes only the highest released semantic version of
   each canonical ID for new activation while retaining older releases for
   exact lock resolution; retained versions do not become duplicate active
   skills.
3. The Scient app owns project activation. A project records exact selected
   built-in identities in `.scient/skills.lock.json`; it does not copy their
   mutable bodies into the project. `.scient/project.json` remains the minimal
   project identity and is still written last during initialization.
4. Explicit project initialization may create the activation lock through the
   existing previewed and recoverable transaction. Opening an ordinary folder
   remains zero-write. Initialization records identity but does not invoke a
   skill.
5. Built-ins declare either user-scoped or project-scoped activation.
   User-scoped meta-skills are controlled in application Settings and are not
   copied into each project's activation lock. Initialization may offer only
   project-scoped researcher-facing releases that the product can truthfully
   resolve and use. A selected researcher-facing skill with temporarily unmet
   prerequisites may be recorded as latent when the product can explain those
   prerequisites honestly.
6. Skill packs and project profiles remain different objects. A pack curates
   compatible skill identities; a profile may recommend structure or a pack.
   The existing project-profile file and guidance extension is not the
   activation mechanism for built-ins.
7. The inherited provider skills catalog and provider-native skill folders are
   delivery and compatibility surfaces only. Name-based provider precedence
   cannot replace or redefine a canonical Scient built-in. Imported skills
   remain externally originated until a separate trusted process says
   otherwise.
8. The Scient agent and eligible external agents receive only app-resolved
   skill guidance. Enabled skills are exposed with their trigger description
   and exact release path so an agent can automatically load the full skill
   when current work matches. Disabled skills are withheld. Agents and provider
   loaders do not own user or project skill state, scientific write-back, or
   canonical identity. A resolver must verify ID, version, origin, and digest
   before a release becomes available to an agent.
9. Skill Authoring v0.1 ships as a user-visible constructive meta-skill,
   enabled by default at user scope and deactivatable in Settings. It is
   automatically available to agents for matching authoring work while enabled,
   is excluded from ordinary project initialization, and does not validate,
   activate, publish, install, or approve the skills it produces.
10. The built-in source may move to an independently released repository only
    when a concrete cross-product, community, or release-lifecycle need
    justifies a fourth maintained repository. Until then, splitting it would
    add coordination and distribution cost without improving authority.

## Initial Implementation Boundary

The first implementation includes:

- the app-owned built-in portfolio package;
- the exact immutable Skill Authoring v0.1 release;
- catalog generation, digest verification, and exact-resolution behavior;
- a Settings surface for user-scoped built-in activation;
- app-managed delivery of enabled built-ins and semantic trigger guidance to
  agents, with disabled built-ins withheld;
- a portable `.scient/skills.lock.json` created by the existing initialization
  transaction; and
- initialization contracts that can carry explicit researcher-facing choices
  without treating Skill Authoring as such a choice.

It does not claim a researcher-facing foundational pack, Skill Library,
project-scoped scientific skill invocation, imported-skill trust flow,
project-owned derivatives, or invocation receipts. Those require their own
product foundations and validation. Delivery proves that an enabled skill was
available; it does not by itself claim that the agent invoked it. Evidence to
Note remains the first candidate researcher-facing scientific skill.

The initial boundary landed in
[desktop PR #35](https://github.com/ScientFactory/scient-desktop/pull/35).
Exact tested and merged revisions are recorded in
[`lab/external/sources.lock.md`](../../../lab/external/sources.lock.md); that
implementation evidence does not promote the remaining draft skill candidates.

## Alternatives Considered

### Keep Built-Ins In The Scient Documentation Repository

This would place authored content near product direction, but it would turn a
documentation-first repository into a runtime distribution dependency and
require cross-repository publishing before the current application could use a
skill. The documentation repository continues to own meaning and decisions;
the application repository owns released product artifacts.

### Keep Built-Ins In The Scient Agent Repository

This would make native-agent loading direct, but it would make a runtime appear
to own skills that must also work through the app and eligible external agents.
It would also blur the accepted rule that runtime state is not canonical
Scient project state.

### Reuse The Generic Provider Skills Catalog As Authority

The inherited catalog discovers user and provider files and resolves duplicate
names according to provider delivery needs. That behavior is useful for
compatibility but cannot provide stable Scient identity, immutable release
resolution, or project-owned activation.

### Copy Built-In Bodies Into Every Project

This would make each project self-contained at first, but it would duplicate
mutable content, obscure whether a project personalized a skill, and make
updates and historical attribution ambiguous. Exact activation identity gives
portability without silently forking every built-in.

### Put Skill Activations In Project Profiles Or AGENTS.md

Profiles and `AGENTS.md` can provide project structure and portable guidance,
but neither is an immutable activation ledger. Encoding built-ins there would
mix recommendation, prompt delivery, and project skill state.

## Consequences

- Built-in skill content can remain portable while Scient-specific release and
  trust metadata stays explicit.
- Project initialization gains one additional portable metadata file and must
  inspect, preview, recover, and roll it back with the same safety guarantees
  as the existing foundation.
- Existing initialized projects do not silently acquire built-ins. A later
  explicit skill-management or migration flow must create or change their
  activation record.
- Application builds must retain any built-in release they promise to resolve
  for existing projects, or report that exact release as unavailable rather
  than substituting another version.
- Skill Authoring can be used and deactivated as a real app capability without
  presenting a meta-skill as the first researcher-facing scientific proof.
- Agent delivery is implemented for enabled user-scoped built-ins. Invocation
  receipts remain later work; availability must not be reported as actual use.

## Revisit Triggers

Revisit this decision if:

- an independently versioned skills release or community contribution model
  makes a dedicated repository materially simpler;
- desktop packaging cannot preserve exact built-in releases without coupling
  skill content to provider-specific internals;
- a validated researcher workflow shows that project-owned portable copies are
  necessary for reasons exact activation identity cannot satisfy; or
- the first scientific skill demonstrates that activation, capability, or
  provenance requirements cannot be represented through this boundary.
