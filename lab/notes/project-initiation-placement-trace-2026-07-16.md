# Project Initiation Placement Trace

Status: Draft
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Records the source-backed placement and dependency decision for the first permanent PapiLab project-initiation package.
Doc type: Research evidence

## Scope And Authority

This is the narrow placement trace required before the portable project-initiation
kernel is implemented. It does not complete the broader first-slice source trace,
activate `docs/architecture/project-format.md`, or claim that project initiation
is implemented. The accepted ownership boundary remains
`../../docs/architecture/decisions/ADR-0001-synara-opencode-foundation-and-papilab-ownership-boundary.md`.

## Selected Source Baseline

The trace used clean canonical owned checkouts on 2026-07-16:

| Source | Selected owned revision | Official upstream revision | Divergence at verification |
|---|---|---|---|
| Synara | `f2e8029cce55e3fbac5142bf9eb79752d23950de` on `main` | `a4dae80d74107c41ac5b3226316b5049c01dc958` on `upstream/main` | 20 ahead, 0 behind |
| OpenCode | `bcaef9349e6c238b4f739c441d42c64e207b3f55` on `dev` | `c69abee0c73253aebae65e87e4e1b9bfa8c38021` on `upstream/dev` | 13 ahead, 0 behind |

Both maintained upstream verifiers fetched the official remotes and confirmed
owned origins, disabled upstream push URLs, exact zero-behind state, and clean
worktrees. This placement trace did not rerun the full deterministic source
suites because the source pins were unchanged from the documented 2026-07-16
refresh. The project-initiation pull request must receive its normal hosted
quality checks before merge.

## Existing Folder And Project Path

At the selected Synara revision:

1. `apps/desktop/src/main.ts` owns the native directory picker and returns only
   the selected path through `desktop:pick-folder`.
2. `apps/desktop/src/preload.ts` exposes that picker through the constrained
   desktop bridge.
3. `apps/web/src/components/Sidebar.tsx` receives the path and calls
   `createOrRecoverProjectFromPath`.
4. `apps/web/src/lib/projectCreation.ts` currently creates a Synara
   orchestration project ID and dispatches `project.create` for the selected
   workspace root.
5. `apps/server/src/wsRpc.ts` and
   `apps/server/src/orchestration/dispatchCommandNormalization.ts` canonicalize
   the workspace path, optionally create a missing directory, and dispatch the
   orchestration command.
6. The resulting project and workspace path are Synara application projection
   state. No PapiLab project identity or universal project files are currently
   created in the selected folder.

This path already provides a useful UI selection seam, but it currently treats
adding a folder as creating an application project. PapiLab must separate a
zero-write **Open Folder** action from the explicit **Initialize PapiLab Project**
action.

## Existing Filesystem Boundary

The local server is the appropriate future integration owner for initialization
filesystem operations:

- `apps/server/src/workspace/Services/WorkspacePaths.ts` and its live layer own
  workspace-root normalization and relative-path checks;
- `apps/server/src/workspace/Services/WorkspaceFileSystem.ts` and its live layer
  own trusted local workspace reads and writes; and
- `apps/server/src/workspace/realPathContainment.ts` already treats real-path
  and symlink containment as a security requirement.

The Electron main process should continue to select folders, and the renderer
should display inspection and plan results, but neither should independently
reimplement project-initialization rules. A later server adapter should call the
portable kernel and expose narrow typed operations to the UI.

## Package Placement Comparison

| Option | Finding |
|---|---|
| Add initialization to `apps/web` | Rejected. It would place trusted filesystem and product rules in the renderer and duplicate server validation. |
| Add initialization directly to `apps/server` | Rejected as the domain home. It would couple portable project rules to Synara RPC and service internals. |
| Add initialization to `@synara/shared` | Rejected. That package already mixes cross-application utilities and depends on Synara contracts; it would obscure PapiLab ownership. |
| Create a separate external repository | Rejected for the first implementation. It adds packaging and versioning overhead without improving the accepted ownership boundary. |
| Create a PapiLab-owned workspace package in the Synara monorepo | Selected. It preserves one implementation source, clean dependency direction, focused tests, upstream-maintenance isolation, and later extractability. |

## Decision

Create the first permanent package at:

```text
packages/papilab-project-init/
```

Use the private workspace package name:

```text
@papilab/project-init
```

The package may use standard Node.js filesystem, path, and cryptography APIs.
It must not import from `apps/*`, `@synara/contracts`, `@synara/shared`, Electron,
React, OpenCode, SQLite, or provider/runtime modules.

The package owns:

- folder inspection and classification;
- initialization request validation;
- pure initialization planning and rendering;
- declarative profile-descriptor validation;
- safe filesystem application and interrupted-initialization recovery; and
- deterministic focused tests.

The package does not own UI, Synara orchestration projects, scientific records,
agent sessions, executor behavior, cloud state, or the eventual complete project
format.

## First Coding Backlog

1. Add the private workspace package and focused test configuration.
2. Implement zero-write folder inspection.
3. Implement deterministic request validation, rendering, and planning.
4. Implement create, preserve, propose, and conflict operations with apply-time
   preconditions.
5. Implement root and symlink containment for every generated target.
6. Implement a recoverable initialization transaction whose successful result
   contains `PROJECT.md`, `AGENTS.md`, and `.papilab/project.json` without an
   absolute path.
7. Implement retry and conservative rollback behavior for interrupted writes.
8. Validate data-only profile descriptors with a test fixture; ship no public
   scientific profile.
9. Prove empty, existing, compatible, partial, invalid, moved, raced, repeated,
   and interrupted-folder behavior with deterministic tests.
10. Add a developer-only harness for previewing and applying initialization in a
    temporary or explicitly supplied folder.

## Remaining Trace Work

The broader first-slice trace still must map manual scientific operations,
OpenCode execution, canonical scientific persistence, proposal/review,
filesystem scope for agents, non-Git recovery beyond initialization, and full
reopening behavior. OpenCode core remains unchanged until that evidence proves a
gap.

## Go Decision

The selected Synara baseline and monorepo topology provide a clean permanent
home for the portable project-initiation kernel. Implementation may begin in
the isolated package. Product UI, server RPC, scientific-state, and executor
integration remain no-go until the package is reviewed and the remaining
boundary trace is completed.
