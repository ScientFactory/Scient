# External Sources Lock

Status: Active
Owner: Scient 001
Created: 2026-07-08
Last updated: 2026-07-31
Purpose: Records exact owned and external source provenance, tested owned revisions, and cross-repository upstream review evidence used by Scient.
Doc type: Research evidence

## Document Rules

This file records local source checkout provenance and a human-readable
cross-repository evidence snapshot. It is not a dependency lock file, a parser
input for source verifiers, accepted architecture, or a statement that Scient
depends on these projects.

Update this file whenever an owned or lab source checkout is added, removed,
recloned, relocated, or moved to a new tested commit, and after an accepted
upstream review or code intake changes the evidence snapshot.

Maintained owned checkout paths in the table are relative to the `Scient`
repository root and may begin with `../` because the repositories are workspace
siblings. A deferred source with no retained checkout says so explicitly.

## Sources

| Source | Local path | Official upstream | Owned repository | Tested integrated upstream base | Maintained/tested commit | Role and update mode |
|---|---|---|---|---|---|---|
| Scient agent source (OpenCode-derived) | `../scient-agent/`; preserved primary sibling currently on local `dev` at `709a26002c697f06cbaebeb8fac40e87de0ab6b3`, behind the tested remote head and not used as current-state evidence | `https://github.com/anomalyco/opencode.git`, `dev` | `https://github.com/ScientFactory/scient-agent`, public standalone repository | `69a80663a2ed7d671d2b4d5dd6f2d605714675a5` | Tested owned `origin/dev` `60ed22de93a70d0e2079f545a62eafd8d740aed5`; exact rename and maintenance evidence below | Owned source foundation for the planned Scient agent; `adapter-maintained`; native Scient runtime identity is not yet implemented. |
| Goose | No local checkout is retained. | `https://github.com/aaif-goose/goose.git`, `main` | None; owned repository deferred | Not tested in Gate 1.5 | Last inspected commit `3c1fdd692cc8aaa5f09b9175410c09a09d4dfe49` | Deferred broader-agent research input. Repository, build, ACP adapter, runtime, credentials, and adoption wait until after the first Scient gateway. |
| Scient desktop (Synara-derived) | `../scient-desktop/`; preserved primary sibling currently on local `agent/fix-file-link-worktree-resolution-20260726` at `8ff39926789e0479539497a72f6ed90aa1433e2c`, not used as current-state evidence | `https://github.com/Emanuele-web04/synara.git`, `main` | `https://github.com/ScientFactory/scient-desktop`, public standalone repository | `9be46c3ce6a7521b64436b7334bc6fce16e3cac4` | Maintained owned `origin/main` `a9d762f8d5f05c5d1fc0042acd909acf892e435c`; last fully green hosted source head `9dadc5c3935d6e0209978d92a1a887ea2c34dd93`; exact current verification limitations below | Accepted initial application foundation; `divergent-cherry-pick`; must not own scientific project truth. |
| T3 Code | No canonical local checkout is retained. A disposable fetch-only bare inspection repository was used for the July 30-31 scan and retained no canonical authority. | `https://github.com/pingdotgg/t3code.git`, `main` | None | Not tested in Gate 1.5 | Durable targeted-review boundary remains `bf76535fe4da71d8de7b8bd5ffa0d2086b7af8d0`; the complete scheduled scan through `df78cda8bf9c0971300e1bf35251774d9fbc833a` is recorded in [`2026-07-30-t3-code.md`](upstream-reviews/2026-07-30-t3-code.md) | Trigger-driven desktop/runtime/provider/process reference only; not a continuously monitored upstream. |

## Maintained Upstream Review State

Repo-local `upstream-state.json` files are the machine-readable checkpoints.
This table is the cross-repository evidence view. The observed official tip
belongs in verifier output or the rolling monitor issue until a disposition
review is accepted.

| Source | Tested owned head | Reviewed through | Integration base | Update mode | Review evidence |
|---|---|---|---|---|---|
| Scient desktop | `a9d762f8d5f05c5d1fc0042acd909acf892e435c` | `04703ddb4c951378aca9a1c7b71263b8648efd7f` on 2026-07-29 | `9be46c3ce6a7521b64436b7334bc6fce16e3cac4` | `divergent-cherry-pick` | [`2026-07-28-scient-desktop.md`](upstream-reviews/2026-07-28-scient-desktop.md); Scient PR #65 accepted the disposition record as merge `78f2816b7ad18956e695431fda3e3d111fc5e9b8`, and desktop PR #147 accepted the repo-local checkpoint as merge `a9d762f8d5f05c5d1fc0042acd909acf892e435c`; hosted PR/main CI runs `30498596721` and `30498880305` each failed only the release-tag manifest count after a new tag, while their other completed jobs passed; last fully green exact-head matrix remains `30430184097` at `9dadc5c3935d6e0209978d92a1a887ea2c34dd93`; the updated [`2026-07-30-scient-desktop.md`](upstream-reviews/2026-07-30-scient-desktop.md) proposes review through `96d4f69bc3f8d48120142b035e8c25faaa096d10` without advancing the literal integration base |
| Scient agent source | `60ed22de93a70d0e2079f545a62eafd8d740aed5` | `fab213312927ea64cf968832c527206e8c944f9e` on 2026-07-18 | `69a80663a2ed7d671d2b4d5dd6f2d605714675a5` | `adapter-maintained` | [`2026-07-18-scient-agent.md`](upstream-reviews/2026-07-18-scient-agent.md); current owned head passed hosted Scient quality run `30305988037`; no code intake |

## Standalone Ownership And Maintenance Rollout

The selective-upstream system was implemented and verified through separate
source-repository pull requests:

- Desktop [PR #1](https://github.com/ScientFactory/scient-desktop/pull/1)
  established the operator card, review state, verifier modes, CI integration,
  and monitor; exact head `b6171e272b6f5ea441840135964cc67fe5c1acbd`
  passed hosted CI run `29639112594` and merged as
  `c132da96fef80c9c9387359b74d6fa4abba1e342`.
- Desktop [PR #2](https://github.com/ScientFactory/scient-desktop/pull/2)
  fixed monitor repository targeting; exact head
  `e8b3b42728be226849bda06e027262835f21eba1` passed hosted CI run
  `29639452686` and merged as
  `b068d9eb2d18ab56f2e67441e485794272178b6f`.
- Desktop [PR #3](https://github.com/ScientFactory/scient-desktop/pull/3)
  made the integration base provably part of both official and owned history;
  exact head `c8f3651fabe722ac60bb727f6c66afc30cbed9e7` passed hosted CI
  run `29640292072`, attempt 2, including the browser suite, and merged as
  `d78388a42bcc09dabc926c0885ec34a8de6427b0`. Final monitor run
  `29640770607` passed on that exact owned head without opening a review issue.
- Desktop [PR #4](https://github.com/ScientFactory/scient-desktop/pull/4)
  established the standalone Scient repository identity and merged as
  `0b6f135c2d19e93b0d790b2427c56b6a368a2bca`.
- Desktop [PR #5](https://github.com/ScientFactory/scient-desktop/pull/5)
  aligned owned automation with the standalone repository and merged as
  `91b38b1c45eb8bdef4da458bbc56d67419269588`.
- Desktop [PR #12](https://github.com/ScientFactory/scient-desktop/pull/12)
  established the maintained repository-governance baseline and merged as
  `2bb8623f17c28c0dd4d50bf484ac8cf5065ce2eb`.
- Desktop [PR #13](https://github.com/ScientFactory/scient-desktop/pull/13)
  hardened immutable workflow and local-action verification; exact head
  `4498b72d8edf96bc246088f0b9ca9ba3d516cc33` passed hosted CI run
  `29644350698` and merged as
  `57e6b2cde09f64db367b894506f56db605fb91b4`. A local arm64 DMG built from
  that merge embedded commit `57e6b2cde09f`, had SHA-256
  `41f9abc5a39cfdae470ad5580ea61c7da969023c445d10196db46b4e92df4424`,
  and passed the disk-image checksum. A profile-overridden isolated test copy
  launched and initialized `PROJECT.md`, `AGENTS.md`, and
  `.scient/project.json` in a fresh folder. The artifact is ad-hoc rather than
  distribution-signed and fails strict code-sign verification, so public
  release remains blocked by
  [issue #6](https://github.com/ScientFactory/scient-desktop/issues/6).
- Desktop [PR #14](https://github.com/ScientFactory/scient-desktop/pull/14)
  adapted six bounded T3-informed reliability protections and browser-session
  isolation fixes; exact head `8a8398e817b803ccf7811d6f4f378bee1fa85d77`
  passed hosted CI run `29646625880`, including browser, Windows process, build,
  and release-smoke coverage, and merged as
  `bd2a6eed6243b13fc1423b21b2454ae060bce5c7`.
- Desktop [PR #35](https://github.com/ScientFactory/scient-desktop/pull/35)
  added the built-in skill portfolio, Skill Authoring v0.1, project activation
  records, Skills settings controls, and active-skill provider delivery. Exact
  head `1c4bf4f6b2b273932a5c0e4c280a76b12fa7a460` passed hosted CI run
  `29726334525`, including format, lint, typecheck, unit, browser, Windows
  process, release-smoke, and desktop-build coverage, and merged as
  `9e0e909a9df9da55f201c11b80ff69867f8a35e1`.
- Desktop [PR #41](https://github.com/ScientFactory/scient-desktop/pull/41)
  removed the migrated public website, obsolete Cloudflare deploy authority,
  and marketing-only release inputs from the desktop repository. Exact head
  `361f282b2b5647da129a49856cb55af939a8a382` passed hosted CI run
  `29744874577`, including format, lint, typecheck, unit, browser, Windows
  process, release-smoke, and desktop-build coverage, and merged as owned
  `main` `726c62890b35e88b57315c96249a0eceffafe35a`.
- Subsequent Scient-owned product PRs
  [#43](https://github.com/ScientFactory/scient-desktop/pull/43),
  [#44](https://github.com/ScientFactory/scient-desktop/pull/44),
  [#47](https://github.com/ScientFactory/scient-desktop/pull/47),
  [#48](https://github.com/ScientFactory/scient-desktop/pull/48) through
  [#53](https://github.com/ScientFactory/scient-desktop/pull/53),
  [#55](https://github.com/ScientFactory/scient-desktop/pull/55), and
  [#56](https://github.com/ScientFactory/scient-desktop/pull/56) advanced owned
  `main` to `f658bbc503d81f191e97bea357bfa79cf027ff37`. These changes do not
  advance the reviewed official checkpoint or integration base. Main-head CI
  run `29814408439` is the verification evidence for the synchronized tested
  head.
- Desktop PRs [#57](https://github.com/ScientFactory/scient-desktop/pull/57),
  [#59](https://github.com/ScientFactory/scient-desktop/pull/59),
  [#60](https://github.com/ScientFactory/scient-desktop/pull/60),
  [#62](https://github.com/ScientFactory/scient-desktop/pull/62) through
  [#65](https://github.com/ScientFactory/scient-desktop/pull/65), and
  [#70](https://github.com/ScientFactory/scient-desktop/pull/70) through
  [#72](https://github.com/ScientFactory/scient-desktop/pull/72) subsequently
  advanced owned `main` to
  `5982a794f16c61841bff9cf334575cd6e0ed0c6c` without changing the reviewed
  official checkpoint or integration base. PR #72 head
  `35e50c0612bed2e19785f6e805b828317933c2dd` passed hosted CI run
  `29906551895`, including format, lint, typecheck, unit, browser, Windows
  process, release-smoke, and desktop-build coverage, before the ordinary
  squash merge.
- Desktop [PR #69](https://github.com/ScientFactory/scient-desktop/pull/69)
  then advanced owned `main` to
  `abb7a05bf04be8c968fdf240732a61744d0e8493` without changing the reviewed
  official checkpoint or integration base. Its exact head
  `b509b56e28922eb7b6f5f7dc2110b02582eab6bf` passed hosted CI run
  `29911307148`, including format, lint, typecheck, unit, browser, Windows
  process, release-smoke, and desktop-build coverage, before the ordinary
  squash merge.
- Desktop PRs [#75](https://github.com/ScientFactory/scient-desktop/pull/75)
  through [#83](https://github.com/ScientFactory/scient-desktop/pull/83),
  [#85](https://github.com/ScientFactory/scient-desktop/pull/85), and
  [#86](https://github.com/ScientFactory/scient-desktop/pull/86) subsequently
  advanced owned `main` to
  `8d421bb32ac0a49dc500c0fa065df2b611c03ecd` without changing the reviewed
  official checkpoint or integration base. PR #86 head
  `9642ac16239ae0138d5e47eff8ee63b041a5de09` passed hosted CI run
  `29972028842`, including format, lint, typecheck, unit, browser, Windows
  process, release-smoke, and desktop-build coverage, before the ordinary
  squash merge.
- Desktop [PR #87](https://github.com/ScientFactory/scient-desktop/pull/87)
  removed electron-builder's automatic unsandboxed AppImage fallback and added
  an artifact-level release gate for the packaged Linux launcher. Exact head
  `006030c2b6dc1b936d30274228f1c65e626ec568` passed hosted CI run
  `29975290967`, including format, lint, typecheck, unit, browser, Windows
  process, release-smoke, and desktop-build coverage. The ordinary squash merge
  advanced owned `main` to
  `640473ff3d1bbce9ec3cbb48b940cb46c99a3e03` with a tree identical to the
  reviewed candidate, without changing the reviewed official checkpoint or
  integration base.
- Desktop PRs [#124](https://github.com/ScientFactory/scient-desktop/pull/124)
  and [#125](https://github.com/ScientFactory/scient-desktop/pull/125)
  added the file-explorer selected state and prevented background Cursor probes
  from opening login browsers. The ordinary squash merges advanced owned
  `main` to `dab9b6d58e2a3f3da02c5475b86dc083f71580f1`; main-head CI run
  `30158224041` passed the complete desktop matrix. These Scient-owned changes
  do not advance the reviewed official checkpoint or integration base.
- Desktop [PR #129](https://github.com/ScientFactory/scient-desktop/pull/129)
  then added the Scient-owned append-only migration-lineage guard and advanced
  `main` to `5d5df0c41e09a6dceb0bdb13f63167bc46ff3370`. This owned guard is relevant
  equivalence evidence for the July 26 Synara review, but it does not import the
  donor's database-recovery, updater, or Windows recovery-execution paths and
  does not advance the integration base.
- Desktop [PR #134](https://github.com/ScientFactory/scient-desktop/pull/134)
  accepted the complete July 26 Synara disposition review and advanced the
  repo-local `reviewedThrough` checkpoint to
  `8ea6da0a0715c69f7b744fd4c8b38d698ab7687e` without advancing the literal
  integration base. The merge commit was
  `869d71d100c167b164e49df831feb16b6e4768ee`.
- Scient [PR #65](https://github.com/ScientFactory/Scient/pull/65)
  accepted the complete review through
  `04703ddb4c951378aca9a1c7b71263b8648efd7f` as merge
  `78f2816b7ad18956e695431fda3e3d111fc5e9b8`. Desktop
  [PR #147](https://github.com/ScientFactory/scient-desktop/pull/147) then
  accepted the dependent repo-local checkpoint as merge
  `a9d762f8d5f05c5d1fc0042acd909acf892e435c`, without advancing the literal
  integration base. Hosted PR/main CI runs `30498596721` and `30498880305`
  failed the release-tag manifest count after a new release tag; every other
  completed job in those runs passed. This is an explicit verification
  limitation, not a green exact-head matrix.
- Before PR #147, owned desktop work had advanced `main` to
  `9dadc5c3935d6e0209978d92a1a887ea2c34dd93` without advancing the then-current
  checkpoint or integration base. Exact-head hosted CI run `30430184097` passed source
  ownership, identity, migration lineage, typecheck, unit, browser, build,
  release smoke, Windows process, and platform HTML-preview checks across all
  five jobs.
- Agent [PR #1](https://github.com/ScientFactory/scient-agent/pull/1)
  established the operator card, review state, verifier modes, owned source
  quality workflow, and monitor; exact head
  `84dbdc1df4017dc643a7c2de9d737797ae9991ef` passed hosted source-quality
  run `29639452734` and merged as
  `6a0e5a176f188e25312f10f587f30f37f930ff65`.
- Agent [PR #2](https://github.com/ScientFactory/scient-agent/pull/2)
  guarded inherited write-capable automation; exact head
  `894dfd433f7e6345800e2f5ea894f0b1df08023c` passed hosted source-quality
  run `29639935967` and merged as
  `998fb0ef9feecabea4cdfd1957038d506c1ac0ef`.
- Agent [PR #3](https://github.com/ScientFactory/scient-agent/pull/3)
  made the integration base provably part of both official and owned history;
  exact head `e75da027d45579646392bcfb1dd6ee86930f3977` passed hosted
  source-quality run `29640340180` and merged as
  `14003a01350c69dedf90c97f9f2b5db733f49951`. Final monitor run
  `29640673934` passed on that exact owned head without opening a review issue.
- Agent [PR #4](https://github.com/ScientFactory/scient-agent/pull/4)
  established the standalone Scient repository identity and merged as
  `b2fa83199171b4d9b1bec7287ed7121a9590c38b`.
- Agent [PR #5](https://github.com/ScientFactory/scient-agent/pull/5)
  hardened source-review enforcement and inherited workflow isolation; exact
  head `3ff0b98634bece0e5b3c295b74d7b877629f48f7` passed hosted source-quality
  run `29644353059` and merged as
  `a4a9f25eebc5517e139bdd08da3693f389b896e9`.
- Agent [PR #6](https://github.com/ScientFactory/scient-agent/pull/6)
  refreshed the exact immutable `nixbuild/nix-quick-install-action` pin in the
  retained, disabled Nix workflows; exact head
  `012398b080696691864f985f310dfefaf9d9a749` passed hosted source-quality run
  `29644889618` and merged as
  `f7d61d3583687ddc09919ca9e70d69d06b0861f8`.
- Agent [PR #7](https://github.com/ScientFactory/scient-agent/pull/7)
  moved the active quality and upstream-monitor workflows to immutable
  Node 24 action releases; exact head
  `e6a06de63ce668144bb00e20dbd8f392a4da230a` passed hosted source-quality run
  `29645764713` without annotations and merged as
  `bc125cbc60c36e4b7013f8d7cf755f745af509b3`.
- Agent [PR #8](https://github.com/ScientFactory/scient-agent/pull/8)
  refreshed the immutable `apple-actions/import-codesign-certs` pin in the
  retained, upstream-guarded publish workflow; exact head
  `08a9ccec50bf1100d9ad32211a9bbaec0db06717` passed hosted source-quality run
  `29646968673` and merged as
  `67e7f3f0341c7a5bad8d68e0a29f113b450eb02a`.
- Agent [PR #10](https://github.com/ScientFactory/scient-agent/pull/10)
  established the protected agent release-promotion policy and validation
  workflow. Exact head `460a70488e8482c9d406c199b1dadc234bca3153`
  passed hosted source-quality run `29745004499` and merged as current owned
  `dev` `709a26002c697f06cbaebeb8fac40e87de0ab6b3`. Manual release-policy run
  `29745960225` then passed on the identical `release/stable` head.
- Agent [PR #12](https://github.com/ScientFactory/scient-agent/pull/12)
  updated the session UI's DOMPurify dependency. The ordinary squash merge
  advanced owned `dev` to `ec28557c86c2d3bad50f9f83f0d5996e6614bd44`;
  main-head Scient quality run `30158013257` passed. This owned maintenance
  change does not advance the reviewed official checkpoint or integration base.
- Agent [PR #13](https://github.com/ScientFactory/scient-agent/pull/13)
  advanced the immutable `docker/setup-buildx-action` pin in inherited,
  upstream-repository-guarded workflows. The ordinary squash merge advanced
  owned `dev` to `acdf841703cea2d36428f203d41aa48d2b470e55`; exact-head Scient
  quality run `30173924772` passed. This owned maintenance change does not
  advance the reviewed official checkpoint or integration base.
- Agent [PR #14](https://github.com/ScientFactory/scient-agent/pull/14)
  aligned contribution and repository guidance. The ordinary merge advanced
  owned `dev` to `60ed22de93a70d0e2079f545a62eafd8d740aed5`; exact-head Scient
  quality run `30305988037` passed. This documentation change does not advance
  the reviewed official checkpoint or integration base.

No source code from the reviewed official ranges was integrated during this
rollout. The PRs above establish ownership, review, monitoring, and verification
machinery only.

Gate 1.5 immutable tags in both owned repositories:

- `litrev-gate-1-baseline` preserves the Gate 1 source baseline.
- `litrev-gate-1-5-upstream-baseline` identifies the exact official upstream
  commit tested in Gate 1.5.

The historical source-review branches and pull requests are preserved in the
archived GitHub forks:

- Synara: <https://github.com/ScientFactory/scient-desktop-fork-archive/pull/1>
- OpenCode: <https://github.com/ScientFactory/scient-agent-fork-archive/pull/1>

Post-closeout Synara identity-copy maintenance was merged through
<https://github.com/ScientFactory/scient-desktop-fork-archive/pull/2> at
`baa7b3d8d604a72467f2a1f575af7c7d85daf94d`.

The OpenCode 1.18.3 refresh was merged through:

- OpenCode: <https://github.com/ScientFactory/scient-agent-fork-archive/pull/4>, tested at
  `bb3e3867922a4f185f02541564bfb960e4fec03f` by hosted source-quality run
  `29569910754` and merged as
  `18ca88886d86e83ddd959f0f4eaf17948697ae17`.

An official review-tooltip follow-up published during closeout was then merged
through:

- OpenCode: <https://github.com/ScientFactory/scient-agent-fork-archive/pull/5>, tested at
  `865f8bde1aa64b7993b8211664c544ba6a4d3d68` by hosted source-quality run
  `29571215689` and merged as
  `8c19505ecc2780bce01dd8acb3a695a6b3b8868b`.

The owned source repository was transferred and renamed to
`ScientFactory/scient-agent`, then reconciled with official upstream
`69a80663a2ed7d671d2b4d5dd6f2d605714675a5`. Exact rename head
`5d232a34638fdc2333535f1916e20e968a3bbe6e` passed hosted Scient
source-quality run `29595488492` and merged through
<https://github.com/ScientFactory/scient-agent-fork-archive/pull/6> as
`5ffaf9a2dfa5b958e8f4856b94b50d26b00c6b76`. The protected `dev`
branch now requires `Scient source quality`. This establishes source and
maintenance identity only; it does not claim an implemented native Scient
runtime.

OpenCode 1.18.3 passed its workspace typecheck, 3,158 OpenCode tests, both
PapiLab verifier suites, platform builds, and CLI smoke on its pinned Bun
1.3.14 toolchain. Locally, the reviewed follow-ups also passed app and
workspace typechecks, a production Storybook build, and a final app production build.
The desktop fork's 2026-07-16
upstream reconciliation and PapiLab cutover were merged through:

- upstream lane: <https://github.com/ScientFactory/scient-desktop-fork-archive/pull/6>,
  merged as `012b8bf48575a45ce4ecf13f8e5abeb444368679`;
- identity and project-init lane:
  <https://github.com/ScientFactory/scient-desktop-fork-archive/pull/4>, tested at
  `2ecdbb5e6f41248200b75bf61a0e6c3dacab7364` by hosted CI run
  `29514254313` and merged as
  `50294e6400737e28753d995f1252025f6c76e901`;
- application-foundation follow-up:
  <https://github.com/ScientFactory/scient-desktop-fork-archive/pull/5>, tested at
  `f7760e9757e9df286c37317d1a3f2052d2e5949b` by hosted CI run
  `29515163695` and merged as
  `bb7ee10afa2b6a462d8e13204261fb355503036b`;
- smaller PapiLab icon follow-up:
  <https://github.com/ScientFactory/scient-desktop-fork-archive/pull/7>, merged as
  `c48b015cfdbcb06eaf09418ef0f51fa1a782ed7c`;
- inherited example-playground cleanup:
  <https://github.com/ScientFactory/scient-desktop-fork-archive/pull/8>, merged as
  `6d365700d7b57f53969529475d022a2fc6785977`;
- official Synara v0.5.5 maintenance sync:
  <https://github.com/ScientFactory/scient-desktop-fork-archive/pull/9>, tested at
  `d4b10c27339992e63a16e83f2384ca53ccacabca` by hosted CI run
  `29567845155` and merged as
  `fd37cdcda16ff34c3b13d098e5a35d0d1aff5096`.

The Scient application rename was then merged through
<https://github.com/ScientFactory/scient-desktop-fork-archive/pull/12>. Exact source head
`179fa01ed39b7c62d8f8e8b89565d83434e572ce` passed hosted CI run
`29595506303` and merged to owned `main` as
`d9d8992a62e4dda37543c214f96fc97556c798f2`. The same head passed local full
tests, typecheck, lint, formatting, desktop build, release smoke, brand checks,
an exact-commit DMG inspection, and an isolated packaged-app migration smoke.

Subsequent reviewed application follow-ups merged through
<https://github.com/ScientFactory/scient-desktop-fork-archive/pull/13> and
<https://github.com/ScientFactory/scient-desktop-fork-archive/pull/14>, advancing current
owned `main` to `2ecfbe19590c99386099c065846b5f3b987e953b` without changing the
tested official-upstream pin above.

The earlier Gate 1.5 suite and compatibility smoke remain historical evidence
for their recorded source pins.

## Remote Ownership State

Repository ownership and adaptation depth are separate decisions:

- The Synara-derived desktop and OpenCode-derived agent source use standalone
  ScientFactory repositories as writable `origin` remotes.
- The official repository is fetch-only `upstream` and must not be a push
  target.
- Standalone ownership does not imply immediate divergence. The inherited
  OpenCode core remains traceable, and Scient changes begin in adapters, configuration,
  extensions, packaging, and isolated integration seams.
- A source may move from upstream-mergeable to selective cherry-pick only after
  Scient deliberately accepts the maintenance cost.

At Gate 1.5 closeout, Synara and OpenCode had writable owned-fork `origin`
remotes. Those historical fork repositories were later archived and replaced
at the product names by standalone ScientFactory repositories while preserving
source history and the read-only official remotes.
The preserved GitHub fork-network and pull-request history lives in
[`scient-desktop-fork-archive`](https://github.com/ScientFactory/scient-desktop-fork-archive)
and
[`scient-agent-fork-archive`](https://github.com/ScientFactory/scient-agent-fork-archive).
Their official remotes were named `upstream`, retained their official fetch
URLs, and used the literal disabled push URL `DISABLED`. The owned default
branches block force-push and deletion and require maintained checks before a
pull request can merge: desktop quality plus release smoke, and
`Scient source quality` for the agent source. The current rules require zero
approving reviews and do not enforce restrictions for administrators; this
document does not overstate those settings as mandatory human approval or
administrator enforcement.
After standalone recreation, inherited OpenCode community-management,
generated-commit, publication, deployment, scheduled-sync, and closing
workflows were disabled; only reviewed Scient quality/read-only checks and the
owned upstream monitor remain enabled. Workflow state must be re-audited after
future workflow intake.

The inherited OpenCode core was refreshed through source version 1.18.3 and the
desktop fork through official Synara v0.5.5 on 2026-07-17. At their exact rename
heads, both owned forks were zero commits behind the official revisions
recorded above.
Later upstream movement is new maintenance work, not a retroactive failure of
these tested baselines. Every future review or intake must use the maintained
source verifiers and record exact evidence through the upstream-intake process.

Goose was not added to this ownership model during Gate 1.5. At inspection
time, its checkout had only the official fetch-only `upstream`; no local Goose
checkout is currently present. The owned Goose repository and every Goose build
or integration action remain deferred until after the first Scient gateway
works through the Scient agent source foundation.

## License And Notice Snapshot

The tested Synara and OpenCode source trees each contain an MIT license. Any
distribution of copied or modified source must preserve the applicable
copyright and permission notice in copies or substantial portions. This is an
engineering inventory, not a substitute for release-time legal, dependency,
trademark, signing, or store-policy review.
