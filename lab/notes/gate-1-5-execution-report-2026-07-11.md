# Gate 1.5 Execution Report

Status: Active
Owner: Yaacov
Last updated: 2026-07-11
Purpose: Records the executed Synara and OpenCode ownership, updateability, identity-isolation, and compatibility gate.
Doc type: Research evidence

## Verdict

**Gate 1.5 passed on 2026-07-11.** The permanent outputs are owned public
Synara and OpenCode forks, auditable official-upstream ancestry, an isolated
LitRev desktop identity, an owned OpenCode binary contract, and repeatable
upstream verifiers. The generated runtime homes, build caches, fixture, logs,
and browser snapshots are retained evidence, not product architecture.

Goose was not implemented, built, connected, assigned credentials, given an
owned remote, or adopted in this gate. The pre-existing read-only inspection
checkout and source-depth note remain research input only. Every Goose
execution decision is Gate 1.6 work.

Gate 1.5 therefore no longer blocks the next phase. Gate 1.6 should handle
Goose separately; the LitRev scientific object contract and local truth
boundary remain a later LitRev-owned implementation decision.

## Owned Repositories And Review State

| Source | Ownership | Official upstream | Review branch and pull request | Tested upstream | Final reviewed commit |
|---|---|---|---|---|---|
| Synara | Public GitHub fork, `yaacovcorcos/synara` | `Emanuele-web04/synara`, `main` | `codex/gate-1-5`; [PR #1](https://github.com/yaacovcorcos/synara/pull/1), ready for review | `c865c5e8246c6f7f38dcd8f560546cba68e6a075` | `db1aca27296bbb647db2a4bd2eafba4d3a0a8ef7` |
| OpenCode | Public GitHub fork, `yaacovcorcos/opencode` | `anomalyco/opencode`, `dev` | `gate-1-5`; [PR #1](https://github.com/yaacovcorcos/opencode/pull/1), ready for review | `9976269ab1accfc5f9dc98a4a688c516934de422` | `65cfb2df90495f70a24d00ea80f959c48016c636` |

Both checkouts use this topology:

```text
origin   -> LitRev-owned GitHub fork; fetch and push
upstream -> official repository; fetch only; push URL is DISABLED
```

Both owned forks carry immutable `litrev-gate-1-baseline` and
`litrev-gate-1-5-upstream-baseline` tags. At closeout, both review branches are
pushed, clean, zero commits behind their tested upstream, and represented by
open pull requests ready for review. The Gate source branches have not been
merged; only the separate OpenCode CI-bootstrap PR was merged so PR #1 could
receive an owned hosted check.

## Synara Maintained History

The owned Synara review branch preserves these lanes:

1. `4a55bdc5291a30ff31c14ef6b35014780adf68f8` — auditable merge of current
   official `upstream/main` into the owned history;
2. `415a7e0643fdcb835e3bc50f1a700ea5db9ab8b1` — repair of inherited current-
   upstream formatting and type-check failures;
3. `d8c5288d3eb3543e2f644cb0c1989b5f02afd3ee` — isolated LitRev desktop
   identity and state boundary;
4. `42e2a3974cb01470815d425665c025fc435c3518` — repeatable upstream verifier;
   and
5. `f3a235f45ad027b7436d3339a336e96ca22074a0` — two remaining user-visible
   Synara identity leaks found during the real UI smoke; and
6. `db1aca27296bbb647db2a4bd2eafba4d3a0a8ef7` — review closeout: stale
   cutover fixtures, full-suite verification, release gating, remote freshness,
   and diagnostics cleanup.

The original plan proposed applying identity to the historical Gate 1 source
and then merging current upstream. Current source inspection showed that the
official project had since centralized the branding, state, and updater seams
needed for a narrow permanent patch. Execution therefore merged current
upstream first and layered LitRev identity afterward. The merge had no content
conflicts. This execution-order correction is intentional: it keeps the real
LitRev patch on the maintained source surface instead of creating throwaway
work against obsolete seams.

The historical Gate 1 baseline remains recoverable by tag, current official
upstream remains explicit as the merge's second parent and by tag, and LitRev's
changes remain isolated above it. The verifier reports divergence and prevents
the next official update from being accepted without the same identity,
updater, cleanliness, and source checks.

## Synara Identity, State, And Updater Boundary

The maintained Synara fork now uses:

- visible name `LitRev`, with `LitRev (Dev)` for development;
- bundle IDs `com.yaacovcorcos.litrev` and
  `com.yaacovcorcos.litrev.dev`;
- trusted desktop scheme/origin `litrev://app`;
- `LITREV_HOME`, with a default `~/.litrev` home;
- Electron user-data profiles `litrev` and `litrev-dev`;
- default chat/project root `Documents/LitRev`;
- browser partition `persist:litrev-browser`;
- LitRev-prefixed web storage keys and snapshots;
- `litrev/` branch/worktree naming and `litrev-opencode-workspaces` scratch
  workspaces;
- LitRev-owned icons and logo assets derived from the existing LitRev symbol;
- no automatic import of an installed Synara profile at startup; and
- update channel `litrev`, with desktop updates disabled unless
  `LITREV_DESKTOP_RELEASES_ENABLED=true` and
  `LITREV_DESKTOP_UPDATE_REPOSITORY` names the owned release repository.

The internal `@synara/*` package namespace remains unchanged on purpose. It is
an implementation namespace, not user-visible identity, and retaining it
avoids a broad update-hostile rename. A compatibility-only inherited
`SYNARA_HOME` variable may carry the same already-isolated LitRev path into
unchanged internals; it does not select or read the installed Synara home.

## Source Checks

### Synara

The unchanged current official baseline was characterized before LitRev
identity changes. Desktop build and lint passed; lint reported 178 warnings and
zero errors. Formatting failed on six current-upstream files, and type-checking
failed on inherited Claude adapter test fixtures and related current-source
drift. Those failures were repaired in the separate `415a7e06` commit rather
than hidden inside the LitRev identity patch.

The resulting maintained branch passed:

- `bun run brand:check`: LitRev identity invariants passed;
- `bun run fmt:check`: all 1,591 matched files formatted;
- `bun run lint`: 178 inherited warnings, zero errors;
- `bun run typecheck`: eight of eight tasks successful;
- `bun run test`: all ten package tasks successful, including 2,425 web
  tests and 1,690 server tests; six server tests remained intentionally
  skipped;
- `bun run build:desktop`: five of five tasks successful;
- `bun run release:smoke`: release gating and updater configuration passed;
  and
- `bun run litrev:upstream-check --checks`: remote topology, zero-behind
  divergence, identity, updater disablement, clean-source enforcement, and the
  complete deterministic source suite above.

### OpenCode

OpenCode used its own pinned Bun toolchain and repository rules. The exact
official baseline `9976269a` passed package type-check, all-platform build, and
source/dev version checks. The source package version is `1.17.18`; the binary
used by the retained compatibility smoke reported
`0.0.0-gate-1-5-202607111555`, and the final source-verification build reported
`0.0.0-gate-1-5-202607111732`. Build metadata was attached to local binaries
rather than changing OpenCode core.

The owned branch changes only the root verification command, its verifier,
verifier tests, and the owned CI workflow. Its complete verifier runs package
type-check, every package test, all-platform build, source and executable
version checks, remote topology, current upstream divergence, and clean-source
checks. Two inherited integration files are resource-sensitive: one PTY file is
order-sensitive after the rest of the suite, and a subprocess file can starve
its own timing oracle on a two-core runner. The verifier gives both controlled
fresh processes, preserving complete coverage without accepting false timing
failures. The push hook also completed all 30 Turbo type-check tasks. Hosted
verification recorded 3,097 passing tests in the 244-file main partition, four
passing PTY tests, and 13 passing CLI subprocess tests; 22 inherited tests were
skipped and one remained marked todo.

### Review Closeout

Review found that the first report overstated verification while Synara CI was
red. The four failures were stale `synara-codex-workspaces` fixtures after the
runtime moved to `litrev-opencode-workspaces`; the runtime behavior itself was
not regressed. The fixtures now consume the shared LitRev constants and the
complete source suite is part of the repeatable verifier.

The closeout also:

- gates tag publication behind an explicit owned release switch and repository,
  so release jobs cannot request updater manifests that the build did not
  generate;
- fetches official upstream by default, validates both fetch and push ownership,
  accepts equivalent GitHub SSH/HTTPS forms, and preserves command diagnostics;
- adds unit coverage for both source verifiers;
- adds `lab/scripts/verify-gate-1-5.sh` as the cross-repository gate command,
  combining both source suites with the retained transcript, approval,
  fixture-integrity, credential-cleanup, and port-cleanup evidence; and
- establishes an owned GitHub-hosted OpenCode quality workflow. Inherited
  upstream workflows are disabled in the fork because they depend on upstream
  infrastructure; LitRev's workflow is the maintained fork check; and
- protects the owned Synara `main` and OpenCode `dev` branches: changes require
  pull requests, resolved review conversations, and their maintained quality
  checks; force-push and deletion are disabled.

Hosted verification is recorded in the
[Synara quality run](https://github.com/yaacovcorcos/synara/actions/runs/29161245556)
and the
[OpenCode LitRev quality run](https://github.com/yaacovcorcos/opencode/actions/runs/29161981336).
The OpenCode workflow was bootstrapped through the separate, merged
[CI PR #2](https://github.com/yaacovcorcos/opencode/pull/2) before it was made a
required check on the protected `dev` branch.

## Owned-Binary Compatibility Smoke

The final smoke used the owned Darwin arm64 OpenCode binary through the
maintained Synara fork—not the installed official CLI—and a synthetic non-Git
fixture at `/private/tmp/litrev-gate-1-5-fixture`.

The UI rendered `LitRev (Dev)`, the LitRev logo and settings identity, and the
custom provider as `OpenCode Custom Current v1.17.18`. Two constrained turns
used `opencode` with `openai/gpt-5.6-sol-fast` and produced the exact stored
transcripts:

```text
LITREV_OPENCODE_OWNED_OK /private/tmp/litrev-gate-1-5-fixture
LITREV_OPENCODE_APPROVAL_OK /private/tmp/litrev-gate-1-5-fixture
```

Synara's SQLite projection records both threads as `approval-required`, with
provider and adapter `opencode`. The first turn also records one resolved
approval with decision `acceptForSession`. The UI displayed `Approval
resolved`. The second turn reused the session decision, so the evidence does
not claim that a second manual approval was required.

The fixture still contains only its original `README.md`, whose SHA-256 remains
`054d15459112497cdeb08b5632d02202b72e06180e94bf21eb95b6f529ecbdc0`.
The browser console recorded only two non-blocking 404 requests for a missing
Cursor editor icon. The smoke also found two stale user-visible Synara labels;
these were fixed in the final Synara commit and rechecked for formatting and
web type safety.

## Isolation And Cleanup Evidence

The final run used isolated OS home, app state, database, and project roots
under ignored `lab/runtime/gate-1-5/`, with server port `58091` and web port
`8943`. Both managed ports were closed after the run. The temporary OpenCode
credential copy used for the isolated smoke was removed. The user's installed
Synara and OpenCode applications and their normal profiles were not stopped,
replaced, or modified by cleanup.

No Synara or OpenCode session database is designated as LitRev project truth.
They remain replaceable engine/workbench state. Gate 1.5 did not create the
canonical LitRev object model or scientific kernel.

## Runtime Evidence Inventory

The ignored evidence tree is retained at `lab/runtime/gate-1-5/` pending the
user's explicit decision. At closeout it occupies approximately **18 GB** and
contains **470,290 files**. It includes:

- exact Bun 1.3.12 and 1.3.14 toolchains;
- current-upstream Synara and OpenCode worktrees and dependency/build caches;
- isolated Synara/OpenCode homes and SQLite projection evidence;
- source-check and targeted-test logs;
- the owned OpenCode Darwin arm64 build;
- browser/Playwright accessibility snapshots and console log; and
- local UI smoke state.

The evidence has forensic value if the pull requests need review or a failure
must be reproduced, but the dependency caches account for most of its size.
It has not been deleted or moved outside the lab because the execution plan
requires explicit user direction to retain, archive, or delete it.

## License, Attribution, And Release Boundaries

The tested Synara and OpenCode repositories each contain an MIT license. Their
copyright and permission notices must remain in copies or substantial portions
of distributed source or software. The source licenses remain present in both
owned forks.

Gate 1.5 does not approve public distribution, code signing, notarization,
store submission, production auto-updates, or third-party trademark use. A
release-time dependency, attribution, trademark, signing, and store-policy
review is still required. Automatic LitRev desktop updates remain disabled.

## Residual Risks And Deferred Work

- No new official Synara commit arrived after the LitRev identity layer, so the
  first post-fork update will be the first live repair of that layer. The
  auditable history and verifier are ready for that review; unattended merges
  remain forbidden.
- Synara retains 178 upstream lint warnings. They are not Gate 1.5 regressions,
  but they should not be described as a warning-free baseline.
- The missing Cursor icon endpoint remains a non-blocking inherited UI issue.
- Production release identity, signing, updater repository, and migration from
  any existing user data are deliberately unimplemented.
- The large retained runtime evidence needs an explicit retain/archive/delete
  decision after pull-request review.
- Goose owned repository, build, ACP integration, permissions, credentials,
  runtime isolation, and adoption decision are all Gate 1.6 work.

## Recommendation

Gate 1.5 is accepted and its three pull requests are ready for review. The fork
and identity work is real maintained infrastructure, not a disposable spike.
Keep the Synara/OpenCode PRs separate from the parent documentation PR so each
source history can be reviewed and merged deliberately.

After acceptance, handle Goose only in Gate 1.6. Do not let that gate redesign
the LitRev scientific truth boundary; Goose, like OpenCode, must remain a
replaceable engine behind a LitRev-owned contract.
