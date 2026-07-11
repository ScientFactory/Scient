# External Sources Lock

Status: Active
Owner: Yaacov
Last updated: 2026-07-11
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
| OpenCode | `agent-forks/opencode/`; Gate 1.5 worktree under ignored `lab/runtime/gate-1-5/` | `https://github.com/anomalyco/opencode.git`, `dev` | `https://github.com/yaacovcorcos/opencode`, public fork | `2db96c9b7e064c936836599a5c208f14dfa47ac0` | `6b252af6f5324e11b72cf721a8278a345a730c40` on `gate-1-5` | First file/shell/edit executor; owned, upstream-aligned, `adapter-maintained`; no LitRev core divergence in Gate 1.5. |
| Goose | `agent-forks/goose/` | `https://github.com/aaif-goose/goose.git`, `main` | None; owned repository deferred | Not tested in Gate 1.5 | Inspection checkout remains `3c1fdd692cc8aaa5f09b9175410c09a09d4dfe49` | Gate 1.6 research input only. Repository, build, ACP adapter, runtime, credentials, and adoption are all deferred. |
| Synara | `desktop-app-forks/synara/` | `https://github.com/Emanuele-web04/synara.git`, `main` | `https://github.com/yaacovcorcos/synara`, public fork | `3267a2fbf430b733a6d7ff1759f6689023d85689` | `77d0854c3cbfdf579e90ed61577a70553f5c3fa6` on `codex/gate-1-5` | Visible LitRev workbench; owned `thin-fork-merge`; must not own scientific project truth. |
| T3 Code | `desktop-app-forks/t3code/` | `https://github.com/pingdotgg/t3code.git`, `main` | None | Not tested in Gate 1.5 | Reference checkout `b9cc8d6ef17ca9f45bec621bef71ad3f706b9276` | Desktop/runtime/provider/process reference only. |

Gate 1.5 immutable tags in both owned repositories:

- `litrev-gate-1-baseline` preserves the Gate 1 source baseline.
- `litrev-gate-1-5-upstream-baseline` identifies the exact official upstream
  commit tested in Gate 1.5.

The source-review branches are available as open pull requests ready for review:

- Synara: <https://github.com/yaacovcorcos/synara/pull/1>
- OpenCode: <https://github.com/yaacovcorcos/opencode/pull/1>

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

Current Gate 1.5 state: Synara and OpenCode have writable owned `origin`
remotes. Their official remotes are named `upstream`, retain their official
fetch URLs, and use the literal disabled push URL `DISABLED`. The owned default
branches are protected against direct unreviewed changes, force-push, and
deletion; Synara requires its maintained quality and release-smoke checks, and
OpenCode requires the owned LitRev source-quality check.

Goose was not added to this ownership model during Gate 1.5. Its inspection
checkout still has only the official fetch-only `upstream`; the owned Goose
repository and every Goose build/integration action remain Gate 1.6 work.

## License And Notice Snapshot

The tested Synara and OpenCode source trees each contain an MIT license. Any
distribution of copied or modified source must preserve the applicable
copyright and permission notice in copies or substantial portions. This is an
engineering inventory, not a substitute for release-time legal, dependency,
trademark, signing, or store-policy review.
