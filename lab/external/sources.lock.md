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
| OpenCode | `agent-forks/opencode/` is the canonical restore path; no checkout is currently present after closeout cleanup | `https://github.com/anomalyco/opencode.git`, `dev` | `https://github.com/yaacovcorcos/opencode`, public fork | `2db96c9b7e064c936836599a5c208f14dfa47ac0` | `f338a9c3478940925cc6cb799f5b7cb807f3a16d` on `dev`; reviewed head `6b252af6f5324e11b72cf721a8278a345a730c40` | First file/shell/edit executor; owned, upstream-aligned, `adapter-maintained`; no LitRev core divergence in Gate 1.5. |
| Goose | `agent-forks/goose/` is the canonical restore path; no checkout is currently present after cleanup | `https://github.com/aaif-goose/goose.git`, `main` | None; owned repository deferred | Not tested in Gate 1.5 | Last inspected commit `3c1fdd692cc8aaa5f09b9175410c09a09d4dfe49`; checkout removed | Deferred broader-agent research input. Repository, build, ACP adapter, runtime, credentials, and adoption wait until after the first LitRev gateway. |
| Synara | `desktop-app-forks/synara/` is the canonical restore path; no checkout is currently present after closeout cleanup | `https://github.com/Emanuele-web04/synara.git`, `main` | `https://github.com/yaacovcorcos/synara`, public fork | `3267a2fbf430b733a6d7ff1759f6689023d85689` | `baa7b3d8d604a72467f2a1f575af7c7d85daf94d` on `main`; Gate reviewed head `77d0854c3cbfdf579e90ed61577a70553f5c3fa6` | Accepted initial application foundation; owned `thin-fork-merge`, with deliberate divergence allowed; must not own scientific project truth. |
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

On 2026-07-12, both owned defaults were one official commit behind their
upstreams after new post-gate movement: Synara upstream
`0450f43966a43c23e8aef976eb1c52586d7ad04d` and OpenCode upstream
`34e58090595d44e3e7cc37498f16753a98627456`. This is queued maintenance,
not a retroactive Gate 1.5 failure; the next sync must use the maintained fork
verifiers.

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
