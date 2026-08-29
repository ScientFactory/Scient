# ADR-0007: Logical Project, Workspace Binding, And Operation Scope

Status: Proposed
Owner: Yaacov
Created: 2026-08-29
Last updated: 2026-08-29
Purpose: Proposes the identity and authority contract that separates portable Scient projects from exact environment/worktree bindings and scopes every protected Scient operation to one verified workspace.
Doc type: Architecture decision

## Document Rules

This is a proposed decision and requires explicit human acceptance before it
governs implementation. It owns the relationship between logical Scient
identity, physical host projects/worktrees, app-private trust, and operation
scope. It does not choose a cloud collaboration model, cross-device identity,
project-file synchronization engine, or general file-reference schema.

Current evidence and the discovered defect live in the [Phase Zero
report](../../research/spike-reports/scient-agent-tools-and-project-scope-phase-zero-2026-08-29.md).
Agent-tool registry and policy behavior is proposed separately in
[ADR-0008](ADR-0008-agent-tool-registry-and-access-policy.md).

## Context

Scient uses two valid but different project concepts:

- T3 provides environment-scoped host projects, physical workspace roots,
  threads, and optional worktree paths.
- Scient writes a stable UUID to `.scient/project.json` so project-owned records
  can retain a portable logical identity.

The UUID is useful across trusted worktrees and relocation, but it cannot prove
that a root is currently authorized. A UUID can be copied. Two worktrees with
the same UUID can contain different code. Remote environments cannot safely
inherit local trust or credentials merely because project files match.

Current Sources operations resolve the active thread's exact worktree/root and
therefore avoid cross-worktree mutation. Skills similarly combine logical
project policy with an exact root and lock-digest trust receipt. Analysis and
compute instead address app-private state primarily by logical project UUID.
After compute PR #129 merged, a session started in one worktree can be found
and commanded from another worktree carrying the same UUID even though the
kernel's working directory and imported state belong to the first checkout.

ADR-0004 already requires host-resolved exact project scope and rejects
client-supplied authority. This decision defines the missing scope model.

## Proposed Decision

Scient will represent portable project identity, exact workspace authority,
and presentation grouping as separate concepts.

### 1. Host project reference

`HostProjectRef` identifies the current T3 host project inside one environment:

```text
HostProjectRef
  environmentId
  hostProjectId
```

It is used to resolve current host state. It is not portable project identity.

### 2. Logical Scient project identity

`ScientProjectId` is the UUID read from a valid `.scient/project.json` owned by
the project initializer.

It identifies project lineage and may appear in portable project-owned records.
It is an identity claim, not an authorization credential, trust receipt,
workspace locator, or proof that two physical roots may share live execution
state.

The phrase “project identity remains authoritative” in proposed ADR-0006 is
interpreted narrowly: the initializer remains authoritative for the portable
project-record identity. Runtime authority still requires a verified workspace
binding.

### 3. Workspace binding

`WorkspaceBinding` is an app-private, server-resolved record for one authorized
physical workspace:

```text
WorkspaceBinding
  bindingId
  environmentId
  canonicalRoot
  hostProjectId
  scientProjectId?       # absent for an uninitialized ordinary folder
  repositoryIdentity?    # normalized donor/host evidence, not sole authority
  worktreeIdentity?      # when the host can establish it
  lineageBindingId?      # trusted parent when Scient created the worktree
  trustState
  authorityGeneration
  createdAt
  lastVerifiedAt
  supersededBy?
```

The binding is not stored in `.scient/` and contains no project-secret grant.
Absolute paths and environment details remain app-private. Portable project
files cannot edit their own authority.

`bindingId` is the primary scope key for app-private execution state.
`ScientProjectId` remains available for lineage, grouping, and portable record
references.

### 4. Operation scope

Every protected Scient operation receives a server-created `OperationScope`:

```text
OperationScope
  actor
  ingress
  environmentId
  threadId?
  hostProjectRef
  workspaceBinding
  scientProjectId?
  authorityGeneration
  requiredCapabilities
  issuedAt
```

The host creates this envelope from current state. A model, provider, browser,
tool input, project file, MCP root, path argument, project UUID, run ID, or
session ID cannot create or widen it.

The operation revalidates current authority before a protected effect commits,
as required by ADR-0004. A stale generation cannot commit a Scient-owned
transactional effect.

`canonicalRoot` is not by itself a permanent filesystem capability. Protected
file effects resolve the final project-relative target beneath the current
binding at the effect boundary, reject absolute or escaping paths, and recheck
symlink or root replacement where the owning environment can observe it. A
root whose current filesystem or repository/worktree evidence no longer
matches the binding advances or revokes authority instead of silently reusing
a cached canonical string.

### 5. Scope resolution

For a thread-scoped operation, the server will:

1. Resolve the authenticated actor/provider session and current thread.
2. Resolve the thread's current T3 host project.
3. Choose the physical root from current `worktreePath` or the project's
   `workspaceRoot`; never accept a replacement root from the model.
4. Canonicalize the root using the owning environment's filesystem semantics
   and verify it remains within the active host project/worktree authority.
5. Inspect `.scient/project.json` when the operation requires initialized
   Scient state.
6. Resolve or verify the app-private `WorkspaceBinding` and its trust state.
7. Intersect current capabilities and policy with that binding and generation.
8. Issue the operation scope only if every required condition remains valid.

Manual UI, provider MCP, future external MCP, automation, and future native
agent adapters must use the same resolver. Transport-specific context may help
locate the actor/thread, but cannot bypass scope resolution.

### 6. State scope categories

#### Portable project-owned state

Project identity, Skills activation locks, Sources records, immutable source
attachments, and future accepted project-record formats may carry
`ScientProjectId` and move with the project.

Every read or write still targets the active physical copy through one exact
binding. A logical project relation does not authorize silent cross-worktree
mutation or merge.

#### App-private project policy

Eligible policy may follow `ScientProjectId` across bindings that Scient can
prove belong to a trusted lineage. Policy is not stored in project files.

A new independently opened root with a known UUID does not automatically
inherit sensitive policy. It receives the safe default or awaits bounded user
confirmation. Provider credentials, external tokens, and environment-specific
trust never move merely because policy follows the logical project.

#### Workspace-specific execution and derived state

Analysis runs, compute sessions, renderer/build staging, process handles,
runtime caches, currentness observations, cleanup queues, and similar derived
state are keyed by `bindingId` as well as their domain identity.

They may retain `ScientProjectId` for display and export, but list, get,
submit, cancel, cleanup, promotion, artifact access, and session commands must
fence by the exact binding.

#### Presentation-only grouping

T3/Scient UI project grouping may display related physical projects together.
Its key, repository identity, label, or representative project is never used as
operation or storage authority.

### 7. Worktree behavior

When Scient creates a worktree from a currently trusted binding, it may create
a child binding with trusted lineage and the same logical project ID after
verifying the new checkout's identity.

The child may inherit eligible project-level policy. It never inherits:

- live compute sessions or process handles;
- analysis currentness or unpromoted derived artifacts;
- provider credentials or thread sessions;
- absolute-path trust receipts;
- open files, browser targets, or renderer staging; or
- a right to mutate the parent worktree.

Cross-worktree operations require a separately named operation that resolves
and authorizes both bindings. No ordinary operation silently broadens to every
binding in a logical project.

### 8. Relocation, clones, and collisions

#### Relocation

When a root moves, Scient may propose that it supersedes an existing binding
using repository/worktree evidence and the project UUID. Ambiguous relocation
requires user confirmation. The old binding remains a recoverable historical
reference until retention policy removes it; it is not silently rewritten.

#### Independent clone

A clone carrying the same `.scient/project.json` is a new binding. It may be
the same logical project lineage, but it does not automatically receive local
trust, secrets, live state, or destructive permissions.

#### Duplicate UUID collision

If two unrelated roots present the same UUID without trusted lineage, Scient
keeps separate bindings and surfaces a collision. It does not merge app-private
state or choose one root silently.

#### Remote environment

The same project on another environment always receives another binding. The
remote environment must independently prove filesystem containment and tool
availability. Cross-environment policy synchronization remains deferred until
a real identity and synchronization authority exists.

### 9. Ordinary uninitialized folders

An ordinary folder may have a T3 host project and workspace binding without a
`ScientProjectId`. Generic thread, file, shell, or browser behavior may continue
under the host's existing authority.

Operations that require project-owned Sources, analysis, compute, or another
`.scient` namespace fail clearly with “project not initialized” or route to an
explicit initialization flow. Opening a folder remains zero-write.

### 10. Persistence and migration

The initial binding registry will be app-private, versioned, and local to the
owning environment. It may use the existing Scient migration ledger and local
database infrastructure, but its schema and service remain Scient-owned.

Analysis and compute migration will:

1. retain existing logical project IDs and domain record IDs;
2. derive a binding from each record's stored source/working directory when it
   can be verified;
3. quarantine records whose root is missing, ambiguous, or colliding rather
   than attach them to the currently open worktree;
4. add `bindingId` to app-private directory and index keys;
5. keep a rollback/read-compatibility window until migrated data is verified;
   and
6. never delete legacy state merely because migration cannot classify it.

The migration must be idempotent and crash-recoverable. A failed or uncertain
migration cannot make old execution state appear current in another binding.

## Alternatives Considered

### Use `.scient/project.json` alone

Rejected. It is portable and copyable, and therefore cannot identify an exact
authorized checkout or environment. It produces the current analysis/compute
collision.

### Use absolute workspace path alone

Rejected. It gives exactness but no portable lineage, breaks on relocation, and
cannot explain trusted worktrees or remote copies. It is the opposite shortcut
used by the current Overleaf candidate.

### Use T3 project ID alone

Rejected. It is environment/host state, can be recreated, and does not provide
Scient's portable project identity.

### Use repository identity or UI project grouping

Rejected. Several projects can live in one repository, worktrees can differ,
and presentation grouping deliberately preserves multiple physical targets.

### Put binding and permissions in `.scient/`

Rejected. Project files, Git branches, imported archives, or a model could then
copy or modify authority. Portable state may identify the project but cannot
grant the host permission to act.

### Build one universal project abstraction and replace T3 projects

Rejected. T3 already owns useful environment, thread, project, and worktree
orchestration. A narrow Scient binding composes those seams and creates much
less upstream divergence.

## Consequences

- Project-level identity and policy can follow trusted worktrees without
  sharing live execution state.
- Sources, analysis, compute, document builds, and future plugins gain one
  exact scope vocabulary.
- More app-private records carry a binding ID and generation, and relocation
  requires explicit lifecycle behavior.
- Existing analysis and compute data need a careful additive migration.
- Some same-project histories that currently appear together will be separated
  by workspace. A later UI may intentionally aggregate them while preserving
  their binding labels.
- T3 intake remains manageable because T3 project/thread records are reused
  through a narrow resolver instead of replaced.

## Required Proof Before Acceptance As Implemented

1. Two worktrees with one Scient UUID cannot list, command, clean up, promote,
   or resolve each other's workspace-specific state.
2. A Scient-created child worktree inherits only eligible project policy.
3. An independent clone or copied UUID does not silently inherit trust.
4. Relocation has verified, ambiguous, cancelled, rollback, and stale-root
   tests.
5. Local and remote bindings remain distinct.
6. Thread/worktree changes revoke or advance stale operation generations.
7. A model-supplied alternate root or project ID cannot widen scope.
8. Existing analysis and compute state migrates, quarantines, and rolls back
   deterministically.
9. Sources still affect only the active checkout.
10. UI project grouping remains presentation-only in tests and code ownership.
11. Symlink swaps, root replacement, and path aliases cannot move a protected
    file effect outside the currently verified binding.

## Follow-Through If Accepted

- Amend [ADR-0004](ADR-0004-scient-operation-capability-and-provenance-boundary.md)
  only to link this concrete scope definition; do not rewrite its accepted
  operation principles.
- Clarify the authority wording in
  [ADR-0006](ADR-0006-project-owned-scient-state-and-source-store.md).
- Update [Project Format](../project-format.md) to explain logical identity
  versus runtime binding.
- Update current desktop internals for project scope, analysis, compute,
  Sources, and Agent Tools as implementation lands.
- Record any protected T3 seam in `scient-desktop/UPSTREAM.md` and its
  divergence documentation.

## Revisit Triggers

Revisit this decision if T3 adopts an equivalent stronger binding model that
can preserve Scient's portable identity and migration, if collaboration needs
one authoritative remote project instance across devices, if filesystem
virtualization makes canonical roots unstable, or if a validated workflow
requires intentional multi-binding operations that cannot be expressed as
explicitly authorized operations.

Do not remove exact workspace authority merely to make histories look unified.
