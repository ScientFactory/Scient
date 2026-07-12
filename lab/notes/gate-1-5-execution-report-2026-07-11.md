# Gate 1.5 Execution Report

Status: Historical
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Records the executed Synara and OpenCode ownership, updateability, identity-isolation, and compatibility gate.
Doc type: Research evidence

## Verdict

**Gate 1.5 passed on 2026-07-11.** The permanent outputs are owned public
Synara and OpenCode forks, auditable official-upstream ancestry, an isolated
LitRev desktop identity, an owned OpenCode binary contract, and repeatable
upstream verifiers. The generated runtime homes, build caches, fixture, logs,
and browser snapshots were retained through review, then deleted after explicit
user approval on 2026-07-12; they were evidence, not product architecture.

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
| Synara | Public GitHub fork, `yaacovcorcos/synara` | `Emanuele-web04/synara`, `main` | `codex/gate-1-5`; [PR #1](https://github.com/yaacovcorcos/synara/pull/1), merged as `536064b23d4211f33a812a1d6303c7029b9ed146` | `3267a2fbf430b733a6d7ff1759f6689023d85689` | `77d0854c3cbfdf579e90ed61577a70553f5c3fa6` |
| OpenCode | Public GitHub fork, `yaacovcorcos/opencode` | `anomalyco/opencode`, `dev` | `gate-1-5`; [PR #1](https://github.com/yaacovcorcos/opencode/pull/1), merged as `f338a9c3478940925cc6cb799f5b7cb807f3a16d` | `2db96c9b7e064c936836599a5c208f14dfa47ac0` | `6b252af6f5324e11b72cf721a8278a345a730c40` |

After Gate acceptance, [Synara PR #2](https://github.com/yaacovcorcos/synara/pull/2)
removed remaining LitRev-owned developer and dormant updater copy, broadened
the identity regression guard, passed the complete maintained Synara checks,
and merged as `baa7b3d8d604a72467f2a1f575af7c7d85daf94d`.

Both checkouts use this topology:

```text
origin   -> LitRev-owned GitHub fork; fetch and push
upstream -> official repository; fetch only; push URL is DISABLED
```

Both owned forks carry immutable `litrev-gate-1-baseline` and
`litrev-gate-1-5-upstream-baseline` tags. At closeout, both review branches are
pushed, clean, zero commits behind their tested upstream, and merged through
protected pull requests. OpenCode PR #1 merged as `f338a9c3`; Synara PR #1
merged as `536064b2`.

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
   and diagnostics cleanup; and
7. `0dd63e2b10f3869a3c322e27be2d379f5e369492` — enforced zero-behind
   acceptance, explicit dual-lock updater policy, and distributable LitRev
   package metadata checks;
8. `6ad31ce77ecf74f2d50ded20e8bca6958978ca5d` — merged the next official
   upstream provider task-tracking and resume update after a final freshness
   check; and
9. `280292ab2d92a84bee69c98d26de7c99c4605af6` — applied the repository formatter
   to three files affected by the upstream merge and conflict resolution; and
10. `729a21fd610bb5b622960d8cabf57ebe66626a3e` — corrected the remaining
    user-facing LitRev worktree-prefix expectation in browser coverage; and
11. `a0fd3063dbc6d737d9fe6be9d2d231a65249fa3f` — merged the official follow-up
    formatting-only CI repair found by the final freshness check;
12. `b601413a51eb27ac949d7e057da9384701b5c293` — merged the official Synara
    0.5.0 release commit; and
13. `77d0854c3cbfdf579e90ed61577a70553f5c3fa6` — prevented upstream Synara
    release marketing from rendering as LitRev release history and added a
    regression guard for that user-facing boundary.

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
- update channel `litrev`, with publication separately gated by
  `LITREV_DESKTOP_RELEASES_ENABLED=true` and an owned
  `LITREV_DESKTOP_UPDATE_REPOSITORY`; installed clients remain hard-disabled
  until a reviewed code change explicitly enables update consumption.

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
- `bun run fmt:check`: all 1,594 matched files formatted;
- `bun run lint`: 178 inherited warnings, zero errors;
- `bun run typecheck`: eight of eight tasks successful;
- `bun run test`: all ten package tasks successful, including 2,426 web
  tests and 1,698 server tests; six server tests remained intentionally
  skipped;
- `bun run build:desktop`: five of five tasks successful;
- `bun run release:smoke`: release gating and updater configuration passed;
  and
- `bun run litrev:upstream-check --checks`: remote topology, zero-behind
  divergence, identity, updater disablement, clean-source enforcement, and the
  complete deterministic source suite above.

The final pre-merge freshness check found official commit `7c32e880`, which
adds provider task tracking and resume coverage across Claude, Codex, Gemini,
and OpenCode adapters. It was reviewed and merged before acceptance. The full
provider and source suites above passed at the new zero-behind head. Because it
arrived after the retained live UI run, the evidence manifest does not claim
that this official adapter-event update was exercised by that earlier smoke.

### OpenCode

OpenCode used its own pinned Bun toolchain and repository rules. The initially
tested official baseline `9976269a` passed package type-check, all-platform
build, and source/dev version checks. During closeout official `dev` advanced
to `2db96c9b7`; its single filesystem-search cache change was reviewed, merged,
and put through the complete verifier before acceptance. The source package
version is `1.17.18`; the binary
used by the retained compatibility smoke reported
`0.0.0-gate-1-5-202607111555`, and the final source-verification build reported
`0.0.0-gate-1-5-202607111944`. Build metadata was attached to local binaries
rather than changing OpenCode core.

LitRev-authored changes touch only the root verification command, its verifier,
verifier tests, and the owned CI workflow; the additional core change is the
unmodified official upstream commit. The complete verifier runs package
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
  accepts equivalent GitHub SSH/HTTPS forms, preserves command diagnostics,
  and rejects any nonzero behind count unless diagnostic mode is explicit;
- keeps release publication and client update consumption as separate safety
  locks, with source checks proving that client updates remain disabled;
- checks LitRev product name, staged package name, description, author, bundle
  identity, LitRev-owned release-note surface, and reviewed visual-asset
  digests while explicitly retaining internal `@synara/*` compatibility
  namespaces;
- adds unit coverage for both source verifiers;
- adds `lab/scripts/verify-gate-1-5.sh` as the cross-repository gate command,
  combining both source suites with the retained transcript, approval,
  fixture-integrity, credential-cleanup, port-cleanup, and evidence-digest
  checks; and
- establishes an owned GitHub-hosted OpenCode quality workflow. Inherited
  upstream workflows are disabled in the fork because they depend on upstream
  infrastructure; LitRev's workflow is the maintained fork check; and
- protects the owned Synara `main` and OpenCode `dev` branches: changes require
  pull requests, resolved review conversations, and their maintained quality
  checks; force-push and deletion are disabled.

Hosted verification is recorded in the
[Synara quality run](https://github.com/yaacovcorcos/synara/actions/runs/29167351567)
and the
[OpenCode LitRev quality run](https://github.com/yaacovcorcos/opencode/actions/runs/29165886544).
The OpenCode workflow was bootstrapped through the separate, merged
[CI PR #2](https://github.com/yaacovcorcos/opencode/pull/2) before it was made a
required check on the protected `dev` branch.

Synara's inherited Linux browser step is explicitly non-blocking in its
workflow while upstream rendering failures are being repaired. The refreshed
run exposed one stale `synara/` worktree-prefix assertion from the LitRev
cutover; it now consumes the shared `WORKTREE_BRANCH_PREFIX` and its focused
browser test passes. Other non-blocking Linux browser failures are inherited
and remain outside Gate 1.5; they are not described as green coverage.

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

The ignored evidence tree at `lab/runtime/gate-1-5/` occupied approximately
**18 GB** and contained **470,290 files** at closeout. It included:

- exact Bun 1.3.12 and 1.3.14 toolchains;
- current-upstream Synara and OpenCode worktrees and dependency/build caches;
- isolated Synara/OpenCode homes and SQLite projection evidence;
- source-check and targeted-test logs;
- the owned OpenCode Darwin arm64 build;
- browser/Playwright accessibility snapshots and console log; and
- local UI smoke state.

A compact committed smoke extract and SHA-256 manifest record the source
heads, SQLite database, historical executable, selected source logs, UI snapshot,
console log, fixture, and pinned Bun executables. CI verifies the committed
extract and manifest structure. Before deletion, the full parent verifier also
authenticated the local artifacts against that inventory. The local files,
temporary fixture, registered OpenCode worktree, caches, and toolchains were
deleted on 2026-07-12 after all Gate pull requests and the post-closeout Synara
copy fix were merged. The manifest retains their historical paths, sizes, and
digests without implying that a fresh clone or the current workstation still
contains the live-smoke environment.

The dependency caches and generated worktrees accounted for nearly all of the
space and were reproducible from the recorded source history. Deletion gives up
inspection of the exact historical local SQLite and UI artifacts, but does not
remove source history, hosted checks, the committed smoke extract, or the Gate
decision.

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

- Three official Synara updates arrived during closeout and were reconciled:
  provider task tracking, its formatting repair, and the 0.5.0 release. This
  proved the update path and exposed the upstream release-note identity leak;
  unattended merges remain forbidden.
- Synara retains 178 upstream lint warnings. They are not Gate 1.5 regressions,
  but they should not be described as a warning-free baseline.
- The missing Cursor icon endpoint remains a non-blocking inherited UI issue.
- Production release identity, signing, updater repository, and migration from
  any existing user data are deliberately unimplemented.
- Exact local SQLite, UI, log, toolchain, and executable artifacts are no longer
  retained after the explicit 2026-07-12 cleanup; future live reproduction must
  regenerate an isolated runtime from the recorded source history.
- Goose owned repository, build, ACP integration, permissions, credentials,
  runtime isolation, and adoption decision are all Gate 1.6 work.

## Recommendation

Gate 1.5 is accepted. The OpenCode, Synara, and parent LitRev Gate pull requests
are merged, as is the post-closeout Synara identity-copy maintenance. The fork
and identity work is real maintained infrastructure, not a disposable spike;
only its generated local runtime evidence was deleted.

After acceptance, handle Goose only in Gate 1.6. Do not let that gate redesign
the LitRev scientific truth boundary; Goose, like OpenCode, must remain a
replaceable engine behind a LitRev-owned contract.
