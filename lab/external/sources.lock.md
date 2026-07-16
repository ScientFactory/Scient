# External Sources Lock

Status: Active
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Records exact upstream source checkouts used in the PapiLab lab.
Doc type: Research evidence

## Document Rules

This file records local source checkout provenance. It is not a dependency lock
file, accepted architecture, or a statement that PapiLab depends on these
projects.

Update this file whenever a lab source checkout is added, removed, recloned, or
moved to a new commit.

Local paths in the table are relative to the parent repository root.

## Sources

| Source | Local path | Official upstream | Owned repository | Tested upstream | Maintained/tested commit | Role and update mode |
|---|---|---|---|---|---|---|
| OpenCode | `agent-forks/opencode/`; clean canonical checkout present on `dev` | `https://github.com/anomalyco/opencode.git`, `dev` | `https://github.com/yaacovcorcos/opencode`, public fork | `c69abee0c73253aebae65e87e4e1b9bfa8c38021` | `f85656c0185904bb2b7624ae0b49ea79957efb2f` on `dev`; hosted PapiLab quality run `29509883409` | First file/shell/edit executor; owned, upstream-aligned, `adapter-maintained`; PapiLab changes remain outside OpenCode core until a demonstrated gap requires otherwise. |
| Goose | `agent-forks/goose/` is the canonical restore path; no canonical root checkout is present. A clean legacy duplicate remains at `lab/external/agent-forks/goose/` pending cleanup. | `https://github.com/aaif-goose/goose.git`, `main` | None; owned repository deferred | Not tested in Gate 1.5 | Last inspected commit `3c1fdd692cc8aaa5f09b9175410c09a09d4dfe49` | Deferred broader-agent research input. Repository, build, ACP adapter, runtime, credentials, and adoption wait until after the first PapiLab gateway. |
| Synara-derived desktop | `desktop-app-forks/synara/`; clean canonical checkout present on the separate one-commit cosmetic branch `codex/smaller-papilab-icon` at `7df1fbbd9dee42fec8f53cdff4cad46ff908fc62` | `https://github.com/Emanuele-web04/synara.git`, `main` | `https://github.com/yaacovcorcos/papilab-desktop`, public fork | `3603a00e9f57aacf73ebaef8296eee8e4f55dd20` | Tested head `f7760e9757e9df286c37317d1a3f2052d2e5949b`; hosted CI run `29515163695`; merged to owned `main` as `bb7ee10afa2b6a462d8e13204261fb355503036b` | Accepted initial application foundation; owned `thin-fork-merge`, with deliberate divergence allowed; must not own scientific project truth. |
| T3 Code | `desktop-app-forks/t3code/` is the canonical restore path; no canonical root checkout is present. A clean legacy duplicate remains at `lab/external/desktop-app-forks/t3code/` pending cleanup. | `https://github.com/pingdotgg/t3code.git`, `main` | None | Not tested in Gate 1.5 | Last inspected commit `b9cc8d6ef17ca9f45bec621bef71ad3f706b9276` | Desktop/runtime/provider/process reference only. |

Gate 1.5 immutable tags in both owned repositories:

- `litrev-gate-1-baseline` preserves the Gate 1 source baseline.
- `litrev-gate-1-5-upstream-baseline` identifies the exact official upstream
  commit tested in Gate 1.5.

The historical source-review branches were merged through these pull requests
(the repository rename may redirect these links):

- Synara: <https://github.com/yaacovcorcos/papilab-desktop/pull/1>
- OpenCode: <https://github.com/yaacovcorcos/opencode/pull/1>

Post-closeout Synara identity-copy maintenance was merged through
<https://github.com/yaacovcorcos/papilab-desktop/pull/2> at
`baa7b3d8d604a72467f2a1f575af7c7d85daf94d`.

The current 2026-07-16 OpenCode upstream refresh was merged through:

- OpenCode: <https://github.com/yaacovcorcos/opencode/pull/3>

OpenCode passed its workspace typecheck, 3,175 tests, platform builds, and CLI
smoke on its pinned Bun 1.3.14 toolchain. The desktop fork's 2026-07-16
upstream reconciliation and PapiLab cutover were merged through:

- upstream lane: <https://github.com/yaacovcorcos/papilab-desktop/pull/6>,
  merged as `012b8bf48575a45ce4ecf13f8e5abeb444368679`;
- identity and project-init lane:
  <https://github.com/yaacovcorcos/papilab-desktop/pull/4>, tested at
  `2ecdbb5e6f41248200b75bf61a0e6c3dacab7364` by hosted CI run
  `29514254313` and merged as
  `50294e6400737e28753d995f1252025f6c76e901`;
- application-foundation follow-up:
  <https://github.com/yaacovcorcos/papilab-desktop/pull/5>, tested at
  `f7760e9757e9df286c37317d1a3f2052d2e5949b` by hosted CI run
  `29515163695` and merged as
  `bb7ee10afa2b6a462d8e13204261fb355503036b`.

The earlier Gate 1.5 suite and compatibility smoke remain historical evidence
for their recorded source pins.

## Remote Ownership State

Repository ownership and adaptation depth are separate decisions:

- Synara and OpenCode use owned GitHub forks as writable `origin` remotes.
- The official repository is fetch-only `upstream` and must not be a push
  target.
- Owning a fork does not imply immediate divergence. OpenCode remains
  upstream-aligned, and PapiLab changes begin in adapters, configuration,
  extensions, packaging, and isolated integration seams.
- A source may move from upstream-mergeable to selective cherry-pick only after
  PapiLab deliberately accepts the maintenance cost.

At Gate 1.5 closeout, Synara and OpenCode had writable owned `origin` remotes.
Their official remotes were named `upstream`, retained their official fetch
URLs, and used the literal disabled push URL `DISABLED`. The owned default
branches remain protected against direct unreviewed changes, force-push, and
deletion; Synara requires its maintained quality and release-smoke checks, and
OpenCode requires the owned PapiLab source-quality check.

On 2026-07-16, both owned defaults were refreshed through reviewed maintenance
pull requests and were zero commits behind the exact tested official upstream
heads recorded above. Later upstream movement is new maintenance work, not a
retroactive failure of this tested baseline; every future sync must use the
maintained fork verifiers and record a new exact pin here.

Goose was not added to this ownership model during Gate 1.5. At inspection
time, its checkout had only the official fetch-only `upstream`; no local Goose
checkout is currently present. The owned Goose repository and every Goose build
or integration action remain deferred until after the first PapiLab gateway
works through OpenCode.

## License And Notice Snapshot

The tested Synara and OpenCode source trees each contain an MIT license. Any
distribution of copied or modified source must preserve the applicable
copyright and permission notice in copies or substantial portions. This is an
engineering inventory, not a substitute for release-time legal, dependency,
trademark, signing, or store-policy review.
