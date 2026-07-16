# External Sources Lock

Status: Active
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Records exact upstream source checkouts used in the LitRev lab.
Doc type: Research evidence

## Document Rules

This file records local source checkout provenance. It is not a dependency lock
file, accepted architecture, or a statement that LitRev depends on these
projects.

Update this file whenever a lab source checkout is added, removed, recloned, or
moved to a new commit.

## Sources

| Source | Local path | Official upstream | Owned repository | Tested upstream | Maintained/tested commit | Role and update mode |
|---|---|---|---|---|---|---|
| OpenCode | `agent-forks/opencode/`; clean canonical checkout present on `dev` | `https://github.com/anomalyco/opencode.git`, `dev` | `https://github.com/yaacovcorcos/opencode`, public fork | `c69abee0c73253aebae65e87e4e1b9bfa8c38021` | `bcaef9349e6c238b4f739c441d42c64e207b3f55` on `dev`; source-suite head `2bcbe3a818f35cf80406fd73a03370fdaf1467d1` | First file/shell/edit executor; owned, upstream-aligned, `adapter-maintained`; LitRev changes remain outside OpenCode core until a demonstrated gap requires otherwise. |
| Goose | `agent-forks/goose/` is the canonical restore path; no checkout is currently present after cleanup | `https://github.com/aaif-goose/goose.git`, `main` | None; owned repository deferred | Not tested in Gate 1.5 | Last inspected commit `3c1fdd692cc8aaa5f09b9175410c09a09d4dfe49`; checkout removed | Deferred broader-agent research input. Repository, build, ACP adapter, runtime, credentials, and adoption wait until after the first LitRev gateway. |
| Synara | `desktop-app-forks/synara/`; clean canonical checkout present on `main` | `https://github.com/Emanuele-web04/synara.git`, `main` | `https://github.com/yaacovcorcos/synara`, public fork | `a4dae80d74107c41ac5b3226316b5049c01dc958` | `f2e8029cce55e3fbac5142bf9eb79752d23950de` on `main`; source-suite head `76324a0c85e67c931d0ddae6882d6e013882a0aa` | Accepted initial application foundation; owned `thin-fork-merge`, with deliberate divergence allowed; must not own scientific project truth. |
| T3 Code | `desktop-app-forks/t3code/` is the canonical restore path; no checkout is currently present after cleanup | `https://github.com/pingdotgg/t3code.git`, `main` | None | Not tested in Gate 1.5 | Last inspected commit `b9cc8d6ef17ca9f45bec621bef71ad3f706b9276`; checkout removed | Desktop/runtime/provider/process reference only. |

Gate 1.5 immutable tags in both owned repositories:

- `litrev-gate-1-baseline` preserves the Gate 1 source baseline.
- `litrev-gate-1-5-upstream-baseline` identifies the exact official upstream
  commit tested in Gate 1.5.

The source-review branches were merged through these pull requests:

- Synara: <https://github.com/yaacovcorcos/synara/pull/1>
- OpenCode: <https://github.com/yaacovcorcos/opencode/pull/1>

Post-closeout Synara identity-copy maintenance was merged through
<https://github.com/yaacovcorcos/synara/pull/2> at
`baa7b3d8d604a72467f2a1f575af7c7d85daf94d`.

The 2026-07-16 upstream refresh was merged through:

- Synara: <https://github.com/yaacovcorcos/synara/pull/3>
- OpenCode: <https://github.com/yaacovcorcos/opencode/pull/3>

Both source-suite heads were zero commits behind the tested official upstream
heads. Synara passed identity, formatting, lint, typecheck, full tests, browser
tests, desktop build, release smoke, and Windows process regression checks on
its pinned Bun 1.3.12 toolchain. OpenCode passed its workspace typecheck, 3,175
tests, platform builds, and CLI smoke on its pinned Bun 1.3.14 toolchain. A live
compatibility smoke also connected Synara's pinned OpenCode SDK to the built
owned OpenCode 1.18.2 server, verified server health, resolved an isolated
non-Git fixture project, and listed sessions.

## Remote Ownership State

Repository ownership and adaptation depth are separate decisions:

- Synara and OpenCode use owned GitHub forks as writable `origin` remotes.
- The official repository is fetch-only `upstream` and must not be a push
  target.
- Owning a fork does not imply immediate divergence. OpenCode remains
  upstream-aligned, and LitRev changes begin in adapters, configuration,
  extensions, packaging, and isolated integration seams.
- A source may move from upstream-mergeable to selective cherry-pick only after
  LitRev deliberately accepts the maintenance cost.

At Gate 1.5 closeout, Synara and OpenCode had writable owned `origin` remotes.
Their official remotes were named `upstream`, retained their official fetch
URLs, and used the literal disabled push URL `DISABLED`. The owned default
branches remain protected against direct unreviewed changes, force-push, and
deletion; Synara requires its maintained quality and release-smoke checks, and
OpenCode requires the owned LitRev source-quality check.

On 2026-07-16, both owned defaults were refreshed through reviewed maintenance
pull requests and were zero commits behind the exact tested official upstream
heads recorded above. Later upstream movement is new maintenance work, not a
retroactive failure of this tested baseline; every future sync must use the
maintained fork verifiers and record a new exact pin here.

Goose was not added to this ownership model during Gate 1.5. At inspection
time, its checkout had only the official fetch-only `upstream`; no local Goose
checkout is currently present. The owned Goose repository and every Goose build
or integration action remain deferred until after the first LitRev gateway
works through OpenCode.

## License And Notice Snapshot

The tested Synara and OpenCode source trees each contain an MIT license. Any
distribution of copied or modified source must preserve the applicable
copyright and permission notice in copies or substantial portions. This is an
engineering inventory, not a substitute for release-time legal, dependency,
trademark, signing, or store-policy review.
