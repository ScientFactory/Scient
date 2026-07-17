# External Sources Lock

Status: Active
Owner: Yaacov
Last updated: 2026-07-17
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
| OpenCode | `agent-forks/opencode/`; clean canonical checkout present on `dev` at `8c19505ecc2780bce01dd8acb3a695a6b3b8868b` | `https://github.com/anomalyco/opencode.git`, `dev` | `https://github.com/yaacovcorcos/opencode`, public fork | `b527f605d9136a0b651cbc034e24ce02de15c631` | Tested head `865f8bde1aa64b7993b8211664c544ba6a4d3d68`; hosted PapiLab source-quality run `29571215689`; merged to owned `dev` as `8c19505ecc2780bce01dd8acb3a695a6b3b8868b` | First file/shell/edit executor; owned, upstream-aligned, `adapter-maintained`; PapiLab changes remain outside OpenCode core until a demonstrated gap requires otherwise. |
| Goose | `agent-forks/goose/` is the canonical restore path; no local checkout is retained. | `https://github.com/aaif-goose/goose.git`, `main` | None; owned repository deferred | Not tested in Gate 1.5 | Last inspected commit `3c1fdd692cc8aaa5f09b9175410c09a09d4dfe49` | Deferred broader-agent research input. Repository, build, ACP adapter, runtime, credentials, and adoption wait until after the first PapiLab gateway. |
| Synara-derived desktop | `desktop-app-forks/synara/`; clean canonical checkout present on `main` at `fd37cdcda16ff34c3b13d098e5a35d0d1aff5096` | `https://github.com/Emanuele-web04/synara.git`, `main` | `https://github.com/yaacovcorcos/papilab-desktop`, public fork | `9be46c3ce6a7521b64436b7334bc6fce16e3cac4` | Tested head `d4b10c27339992e63a16e83f2384ca53ccacabca`; hosted CI run `29567845155`; merged to owned `main` as `fd37cdcda16ff34c3b13d098e5a35d0d1aff5096` | Accepted initial application foundation; owned `thin-fork-merge`, with deliberate divergence allowed; must not own scientific project truth. |
| T3 Code | `desktop-app-forks/t3code/` is the canonical restore path; no local checkout is retained. | `https://github.com/pingdotgg/t3code.git`, `main` | None | Not tested in Gate 1.5 | Last inspected commit `b9cc8d6ef17ca9f45bec621bef71ad3f706b9276` | Desktop/runtime/provider/process reference only. |

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

The OpenCode 1.18.3 refresh was merged through:

- OpenCode: <https://github.com/yaacovcorcos/opencode/pull/4>, tested at
  `bb3e3867922a4f185f02541564bfb960e4fec03f` by hosted source-quality run
  `29569910754` and merged as
  `18ca88886d86e83ddd959f0f4eaf17948697ae17`.

An official review-tooltip follow-up published during closeout was then merged
through:

- OpenCode: <https://github.com/yaacovcorcos/opencode/pull/5>, tested at
  `865f8bde1aa64b7993b8211664c544ba6a4d3d68` by hosted source-quality run
  `29571215689` and merged as
  `8c19505ecc2780bce01dd8acb3a695a6b3b8868b`.

OpenCode 1.18.3 passed its workspace typecheck, 3,158 OpenCode tests, both
PapiLab verifier suites, platform builds, and CLI smoke on its pinned Bun
1.3.14 toolchain. Locally, the reviewed follow-ups also passed app and
workspace typechecks, a production Storybook build, and a final app production build.
The desktop fork's 2026-07-16
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
  `bb7ee10afa2b6a462d8e13204261fb355503036b`;
- smaller PapiLab icon follow-up:
  <https://github.com/yaacovcorcos/papilab-desktop/pull/7>, merged as
  `c48b015cfdbcb06eaf09418ef0f51fa1a782ed7c`;
- inherited example-playground cleanup:
  <https://github.com/yaacovcorcos/papilab-desktop/pull/8>, merged as
  `6d365700d7b57f53969529475d022a2fc6785977`;
- official Synara v0.5.5 maintenance sync:
  <https://github.com/yaacovcorcos/papilab-desktop/pull/9>, tested at
  `d4b10c27339992e63a16e83f2384ca53ccacabca` by hosted CI run
  `29567845155` and merged as
  `fd37cdcda16ff34c3b13d098e5a35d0d1aff5096`.

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

OpenCode was refreshed through 1.18.3 and the desktop fork through official
Synara v0.5.5 on 2026-07-17. At their exact tested heads, both owned defaults
were zero commits behind the official revisions recorded above.
Later upstream movement is new maintenance work, not a retroactive failure of
these tested baselines; every future sync must use the maintained fork
verifiers and record a new exact pin here.

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
