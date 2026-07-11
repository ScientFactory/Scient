# Gate 1.5 Execution Plan

Status: Historical
Owner: Yaacov
Last updated: 2026-07-11
Purpose: Defines the end-to-end preparation gate for owned Synara and OpenCode repositories, upstream updates, and Synara identity isolation.
Doc type: Planning note

## Document Rules

This is an execution plan, not current implementation or accepted product
architecture. It operationalizes the fork and agent-seam direction in
`open-source-adaptation-build-strategy.md` and uses the source evidence under
`lab/`.

Update this plan when a phase is completed, a decision changes, or current
upstream evidence invalidates a command or acceptance criterion. Record actual
run evidence in dated lab notes rather than turning this file into a log.

## Goal

Gate 1.5 prepares LitRev to modify Synara and OpenCode without losing a
controlled path to upstream updates. It proves that LitRev can own a visible
Synara-derived application and a pinned OpenCode engine while continuing to
accept reviewed upstream changes.

Gate 1.5 does not build the LitRev scientific kernel, define the canonical
object contract, or start Gate 2. Every Goose action is deferred to Gate 1.6,
including its owned repository, build, ACP adapter, runtime proof, and adoption
decision.

## Execution Result

**2026-07-11 result: passed with one documented execution-order correction.**
LitRev now owns public Synara and OpenCode forks under `yaacovcorcos`, each has
a writable `origin` and a fetch-only official `upstream`, Synara carries an
isolated LitRev development identity, and an owned OpenCode build passed the
constrained Synara compatibility smoke. Goose remained outside the execution
scope and is assigned in full to Gate 1.6.

The original drill proposed applying LitRev identity to the historical Synara
baseline and then merging current upstream. Source inspection showed that
current upstream had introduced the centralized branding, state, and updater
seams needed to make the patch narrow. Execution therefore preserved and
tagged the historical baseline, merged current official upstream as an
auditable merge commit, repaired the unchanged upstream checks separately, and
then layered the LitRev identity in isolated commits. This is the maintained
history. It avoids a throwaway identity implementation against obsolete seams.
The repeatable upstream verifier now enforces remotes, divergence, identity,
updater safety, source cleanliness, and the source check suite for the next
real upstream sync. The cross-repository compatibility and retained-evidence
checks live in `lab/scripts/verify-gate-1-5.sh`, keeping Synara and OpenCode
source verifiers honest about their repository-local scope.

See
[`lab/notes/gate-1-5-execution-report-2026-07-11.md`](../../lab/notes/gate-1-5-execution-report-2026-07-11.md)
for exact repositories, commits, checks, runtime evidence, and residual risks.

## Recorded Starting Point

| Source | Local baseline | Current upstream | Drift | Intended role |
|---|---|---|---:|---|
| Synara | `03d8b2c2eafa1c5e5158dcd2706053e73cbeaa9f` | `c865c5e8246c6f7f38dcd8f560546cba68e6a075` on `main` | 63 commits behind | Visible LitRev workbench fork; thin and upstream-mergeable first. |
| OpenCode | `14a5529793a91001ca81c80e96f39533eab79127` | `9976269ab1accfc9f9dc98a4a688c516934de422` on `dev` | 68 commits behind | Embedded file/shell/edit executor through an adapter. |

At the start of the gate, the Synara and OpenCode official repositories were
configured locally as fetch-only `upstream` remotes with push disabled, and no
owned writable `origin` was attached. The pre-existing Goose research checkout
was outside this gate and was not changed during execution.

Execution confirmed `yaacovcorcos` as owner, activated that GitHub account, and
selected public GitHub forks for Synara and OpenCode.

## Blocking Decisions Before Execution

### 1. Repository Owner

Choose the GitHub user or organization that will own the Synara and OpenCode
writable repositories. Prefer the same durable owner as LitRev unless there is
a clear organizational reason to separate them.

Pass condition: the owner is explicitly recorded before any remote repository
is created.

### 2. Public Fork Or Private Mirror

GitHub network forks of these public projects will also be public. Choose one
model for the initial work:

| Model | Benefit | Cost |
|---|---|---|
| Public GitHub forks | Native fork relationship, simple upstream comparison, and easy upstream contribution. | LitRev changes are public immediately. |
| Private owned mirrors | Product changes stay private and repository names can be LitRev-specific. | No GitHub fork-network relationship; upstream comparison and contributions require normal Git remotes or a separate public contribution fork. |

Both models preserve upstream updates. In either case, LitRev owns the writable
repository and the official project remains fetch-only `upstream`.

Pass condition: visibility and repository naming are chosen before creation.

### 3. Development Identity

Choose the temporary development display name, bundle/application identifiers,
and state namespace. The plan assumes a visibly distinct LitRev development app
that cannot read or overwrite the installed Synara app's state.

Do not choose a production updater channel, signing identity, or public release
name in this gate. Automatic updates remain disabled until LitRev owns and tests
its release channel.

## Repository And Branch Model

Each Gate 1.5 source repository uses:

```text
origin   -> LitRev-owned repository; writable
upstream -> official project; fetch-only; push disabled
```

Preserve each actively adapted source's official default branch name:

- Synara: `main`
- OpenCode: `dev`

The owned default branch is the LitRev-maintained integration branch. Use short
feature branches for isolated changes and `sync-upstream-YYYY-MM-DD` branches
for upstream merges. OpenCode branches must also follow its local rule: at most
three words, hyphen-separated, with no slash or type prefix.

Do not rebase a published maintained branch. Upstream updates should remain
visible merge operations so LitRev changes and upstream ancestry can be audited.

Create baseline tags after the owned repositories exist:

```text
litrev-gate-1-baseline
litrev-gate-1-5-upstream-baseline
```

Tags must resolve to recorded commits; do not move them.

## Commit Lanes

Keep changes reviewable and separable:

1. upstream baseline or sync merge;
2. identity and visual assets;
3. state namespace and migration policy;
4. updater, signing, and packaging configuration;
5. agent adapters and protocol code;
6. LitRev-owned domain behavior; and
7. generated files only when required by the source repository.

Do not mix Synara rebranding, Goose integration, scientific object design, and
upstream synchronization in one commit.

## Phase 0: Preserve The Planning Baseline

Before touching remote repositories:

1. review the current LitRev documentation diff;
2. exclude unrelated `.DS_Store` and `outputs/` material unless separately
   approved;
3. commit and push the owned-fork strategy, Goose inspection, and this plan as
   one documentation checkpoint; and
4. confirm the parent LitRev worktree is clean except for explicitly retained
   unrelated files.

Pass condition: the plan and source evidence are recoverable from GitHub before
source-repository mutations begin.

## Phase 1: Create And Attach Owned Repositories

For Synara and OpenCode:

1. activate the confirmed GitHub account;
2. create either the selected public fork or private mirror;
3. add its SSH URL locally as `origin`;
4. keep the existing official URL as `upstream`;
5. keep upstream push disabled;
6. push the selected baseline branch and immutable baseline tag to `origin`;
7. verify `origin` is writable and `upstream` is not; and
8. update `lab/external/sources.lock.md` with the owned URL, visibility model,
   exact commit, branch, and update strategy.

Verification for every checkout:

```sh
git remote -v
git status --short --branch
git rev-parse HEAD
git rev-parse upstream/<default-branch>
git rev-parse origin/<default-branch>
```

Do not test upstream push by sending an object. Verify the configured push URL
and use a dry-run only if needed.

Pass condition: every actively adapted source has a writable owned `origin`, a
fetch-only official `upstream`, recorded provenance, and no uncommitted source
changes.

## Phase 2: Establish Current Unchanged Baselines

Build and inspect current upstream before applying LitRev changes. Dependency
installs and build caches must live inside ignored source/runtime areas, not the
parent LitRev Git history.

### Synara

First preserve the Gate 1 commit/tag, then create a clean branch at current
`upstream/main` and run the unchanged current baseline with Bun `1.3.12`:

```sh
bun install --frozen-lockfile
bun run build:desktop
bun run fmt:check
bun run lint
bun run typecheck
```

Use the source repository's required test command form (`bun run test`, never
`bun test`) for any targeted tests selected during execution.

Run a narrow isolated smoke check:

- separate OS/Electron profile and Synara home;
- non-default ports;
- server health ready;
- desktop and local web UI render;
- synthetic non-Git project opens;
- official OpenCode CLI is discovered; and
- one harmless approved `pwd`-class turn renders exactly.

This repeats only the compatibility-critical part of Gate 1 against the 63 new
upstream commits; it is not another broad product test.

### OpenCode

Create a clean current-upstream baseline at `upstream/dev`, expected to carry
source version `1.17.18`, and use Bun `1.3.14`:

```sh
bun install --frozen-lockfile
cd packages/opencode
bun run typecheck
bun run build
bun run dev --version
```

Run only targeted package tests if a baseline or adapter concern requires them;
the repository explicitly forbids root-level tests.

The official installed CLI remains the Gate 1 runtime reference. Gate 1.5 adds
an owned source baseline; it does not silently replace the working installed
CLI with a local build.

Pass condition: each unchanged current-upstream baseline builds with its own
declared toolchain, the source trees remain clean, and failures are classified
as upstream baseline failures rather than LitRev regressions.

## Phase 3: Synara Identity And State Patch

Use the previously Gate-1-tested Synara commit as the historical fork baseline
and keep the identity work in narrow commits. Current upstream already contains
substantial identity-cutover and update-feed work, so inspect the centralized
branding and migration seams before editing rather than repeating a global text
replacement.

### Patch A: Visible Identity

Change only the selected development display name, application icon/logo,
window/about copy, package product name, and other user-visible identity routed
through existing centralized branding seams.

Do not rename the full `@t3tools/*` package namespace in this gate.

### Patch B: State Isolation

Give the LitRev development app its own:

- Electron user-data profile;
- app home/environment variable;
- SQLite/state directory;
- browser partition and browser database;
- local-storage key namespace;
- branch/worktree prefix; and
- updater cache identity.

The app must not auto-import or migrate the installed Synara application's
projects, chats, credentials, browser state, or updater cache. Any future import
must be explicit and reviewable.

### Patch C: Updater Safety

Disable automatic update checks in LitRev development builds or point them only
at an explicitly configured non-production LitRev channel. Never query or
install from Synara's official release feed under LitRev identity.

### Real Upstream-Sync Drill

Execution used the existing upstream gap as the updateability proof, with the
order corrected after inspecting the current source:

1. preserve and tag the historical Gate 1 baseline;
2. merge current `upstream/main` into the owned maintained history without
   flattening upstream ancestry;
3. repair current-upstream check failures in their own commit;
4. apply the narrow identity, state, updater, and verification commits on the
   current centralized seams;
5. rerun the source checks and isolated smoke; and
6. review the resulting diff by commit lane and touched-file concentration.

The merge itself had no content conflicts. The only execution correction was
ordering the identity layer after the upstream merge so the permanent patch
uses current, centralized seams instead of obsolete historical ones.

Pass conditions:

- Synara and LitRev development apps can coexist;
- each uses distinct profiles, state, browser data, and update cache;
- the LitRev app does not read or modify Synara production state;
- the current upstream runtime improvements remain present;
- branding/state patches remain understandable as isolated commits; and
- the approved OpenCode smoke passes on the resulting maintained history.

Stop if identity requires a broad package-wide rename, updater isolation cannot
be proven, or merging upstream forces LitRev scientific concepts into Synara's
session/worktree model.

## Phase 4: OpenCode Update Contract

Do not modify OpenCode core during Gate 1.5 unless the current source baseline
or a real adapter need proves a missing seam.

Define the consumption contract:

- LitRev development may use the installed official CLI as a known-good
  fallback.
- LitRev releases consume a pinned, tested binary produced from the owned fork.
- OpenCode never self-updates behind LitRev's back.
- Updating OpenCode means syncing the owned fork, building it, running adapter
  contract checks, recording the version/commit, then deliberately updating the
  LitRev pin.
- LitRev changes should begin in the adapter, configuration, plugins, or
  packaging before OpenCode core.

Run the same harmless Synara/OpenCode turn against the candidate owned-fork
binary in an isolated state home. Compare the projected result and executor
record exactly, as in Gate 1.

Pass condition: the owned-fork binary can replace the official CLI in the test
harness without changing transcript fidelity, approval behavior, project root,
or cleanup behavior.

## Phase 5: Updateability Automation

Add the smallest repeatable checks to each owned repository:

- verify `upstream` fetch URL and disabled push URL;
- report current divergence from the official default branch;
- run the source's baseline build/check suite;
- run the relevant repository-local identity checks and invoke the
  cross-repository adapter smoke from the parent LitRev verifier;
- detect unexpected generated or lockfile changes; and
- record the exact upstream commit tested.

Do not enable unattended upstream merges or automatic runtime upgrades. A bot
may open a sync proposal later, but a human reviews and approves the tested
version that LitRev consumes.

## Phase 6: Evidence, Cleanup, And Closeout

Create one dated Gate 1.5 report containing:

- owned repository URLs and visibility model;
- exact baseline and final commits;
- remote/branch topology;
- license and attribution obligations;
- commands and checks run;
- Synara identity/state/updater diff summary;
- upstream merge conflicts and their resolutions;
- OpenCode owned-binary compatibility result;
- confirmation that Goose remained untouched and deferred to Gate 1.6;
- failures, deferred risks, and Gate 2 recommendation; and
- explicit inventory of generated runtime evidence.

Generated runtime data should live under ignored `lab/runtime/gate-1-5/` or a
temporary external fixture root. At closeout:

1. stop all managed processes and verify ports;
2. remove temporary credential links or copies;
3. report runtime size, file count, and evidence value;
4. extract durable findings into the dated report; and
5. ask the user whether to retain, archive, or delete the runtime evidence.

Never delete Gate 1.5 runtime evidence automatically.

Commit source changes in their owning repositories. Commit only provenance,
plans, reports, and LitRev-owned adapter code in the parent LitRev repository.
Do not commit upstream checkouts, caches, credentials, or unrelated outputs.

## Gate 1.5 Definition Of Done

Gate 1.5 passes only when all are true:

- [x] Repository owner and public-fork/private-mirror model are recorded.
- [x] Synara and OpenCode have owned writable repositories.
- [x] Official remotes are fetch-only `upstream` with push disabled.
- [x] Exact commits, URLs, licenses, and update modes are recorded.
- [x] Current upstream baselines were characterized before adaptation:
      OpenCode passed; Synara's build and lint passed while inherited formatting
      and type errors were recorded, repaired in a separate commit, and then
      all scoped checks passed before the LitRev identity patch.
- [x] Synara has isolated LitRev development identity, state, browser data, and
      updater behavior.
- [x] Synara's historical baseline, current-upstream merge, and LitRev identity
      patches remain separate and auditable; the execution-order correction is
      recorded above and in the dated report.
- [x] The owned OpenCode binary passes the constrained Synara compatibility
      smoke.
- [x] No engine session/database is treated as canonical LitRev project truth.
- [x] Goose source, remotes, builds, adapters, runtime state, and adoption remain
      untouched and explicitly assigned to Gate 1.6.
- [x] Runtime evidence is inventoried and retained pending explicit user
      direction; it will be archived or deleted only
      with explicit user direction.
- [x] A dated report gives a clear go/no-go for the next implementation gate.

## Gate 1.5 Stop Conditions

Stop and report rather than widening scope if:

- repository ownership or visibility is unresolved;
- an unchanged current-upstream baseline does not build;
- license, notice, trademark, or release obligations are unclear;
- Synara identity cannot be isolated without broad uncontrolled churn;
- upstream merging destroys the separation between LitRev patches and Synara
  runtime code;
- an owned OpenCode build behaves differently from the supported CLI and the
  cause is unknown;
- credentials would need to be copied into tracked or project state; or
- completing the spike would require defining the Gate 2 canonical object
  model prematurely.

## Recommended Execution Order

```text
confirmed owner and public visibility
  -> committed the planning baseline
  -> created owned repositories and remotes
  -> merged and verified current upstream baselines
  -> layered isolated Synara identity/state/updater patches
  -> proved the owned OpenCode binary through Synara
  -> added repeatable update checks
  -> inventoried evidence and published the Gate 1.5 verdict
```

Gate 1.5 is complete. Gate 1.6 remains the separate Goose gate; neither gate
defines the LitRev-owned scientific object contract that the next product
implementation slice will require.
