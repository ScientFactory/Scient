# Synara Gate 1 Inherited Scaffold Baseline

Status: Historical
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Records the end-to-end Gate 1 run against the pinned Synara scaffold and the evidence for its go/no-go result.
Doc type: Research evidence

## Historical Scope

This note preserves the Gate 1 experiment and its contemporary Gate 2
references as point-in-time wording. Do not rewrite those body references to
match later sequencing. Current product sequencing lives in
`../../docs/planning/product-roadmap.md`.

## Outcome

**Gate 1 passed against the actual supported baseline: Synara plus the official
OpenCode CLI installed on `PATH`. Gate 2 may start.**

The inherited scaffold installs, builds, boots, opens an isolated fixture,
renders Markdown, runs a terminal, discovers OpenCode, presents approval UI,
and completes a harmless OpenAI-backed OpenCode turn with an exact transcript.

The first run used an experimental launcher for the pinned OpenCode source
checkout. That route had an expired copied OAuth credential and produced a
corrupted projected response with a free model. It was not the setup used by
the working Synara application and is no longer the Gate 1 baseline.

The correction run used Homebrew OpenCode `1.17.18` at
`/opt/homebrew/bin/opencode`, a valid OpenAI login, and a truly standalone
non-Git fixture. One approved `pwd` completed and both the UI and Synara SQLite
stored exactly:

```text
SYNARA_OPENCODE_COMPARE_OK /private/tmp/litrev-synara-cli-compare-fixture
```

No checkpoint warning occurred in the correction-run server log. This closes
the transcript, credential, and project-boundary concerns that blocked the
original verdict. External Browser DNS and stale marker cleanup after an
interrupted development runner remain follow-ups, but neither blocks the first
LitRev-owned build slice in Gate 2.

## Tested Sources

| Source | Path | Commit | Role |
|---|---|---|---|
| Synara | `lab/external/desktop-app-forks/synara` | `03d8b2c2eafa1c5e5158dcd2706053e73cbeaa9f` | inherited desktop scaffold |
| OpenCode | `lab/external/agent-forks/opencode` | `14a5529793a91001ca81c80e96f39533eab79127` | first executor through Synara's existing adapter |

The OpenCode source checkout is retained as upstream research material, not as
the supported local executable. The runtime baseline is the official CLI:
`/opt/homebrew/bin/opencode`, version `1.17.18`.

Both ignored source checkouts were clean after the run.

The parent LitRev worktree was already dirty before Gate 1. No checkpoint
commit was made. The pre-existing tracked diff hash was
`70053e48731ec1f988118d3a63fa684b7bf739d281a067489490115ad2bef58d`,
with `docs/planning/idea-inbox.md` as the only untracked file at baseline.

## Isolation Boundary

The authoritative run used both an isolated process home and Synara's explicit
state home:

```text
HOME=/Users/yaacov/REPOs/LitRev/lab/runtime/synara-gate1-authoritative/os-home
SYNARA_HOME=/Users/yaacov/REPOs/LitRev/lab/runtime/synara-gate1-authoritative/home
```

Important finding: `--home-dir` alone isolates Synara's server state but not
Electron/XDG state. A first non-authoritative attempt omitted the isolated
`HOME`; it was stopped before fixture interaction, but it read the existing
Synara Dev Electron profile and created two bootstrap rows in the first lab
database that pointed at the real home directory. That attempt was quarantined
during the experiment under `lab/runtime/synara-gate1/`. The authoritative run
used a new database and a new Electron profile under
`synara-gate1-authoritative/`.

The production Synara app remained running and was not operated. The installed
OpenCode app was idle, was normally quit to avoid an OAuth refresh race, and was
reopened after the managed turn. The temporary credential symlink was removed
after shutdown.

The following were the authoritative state paths during the run:

| State | Path |
|---|---|
| Synara SQLite | `lab/runtime/synara-gate1-authoritative/home/dev/state.sqlite` |
| Synara settings | `lab/runtime/synara-gate1-authoritative/home/dev/settings.json` |
| Electron profile | `lab/runtime/synara-gate1-authoritative/os-home/Library/Application Support/synara-dev` |
| OpenCode database | `lab/runtime/synara-gate1-authoritative/os-home/.local/share/opencode/opencode-local.db` |
| Public synthetic fixture | `lab/runtime/synara-gate1/fixture` |

These generated runtime artifacts were removed after the findings were
extracted into this report. They are reproducible evidence locations, not
durable repository artifacts.

## Runtime And Commands

Synara declares Bun `1.3.12`; OpenCode declares Bun `1.3.14`. Both were
installed under ignored `lab/runtime/` paths and invoked by absolute path. No
global Bun path or shell profile change remains.

The command snippets below use:

```sh
AUTHORITATIVE_OS_HOME=/Users/yaacov/REPOs/LitRev/lab/runtime/synara-gate1-authoritative/os-home
AUTHORITATIVE_SYNARA_HOME=/Users/yaacov/REPOs/LitRev/lab/runtime/synara-gate1-authoritative/home
```

Dependency and build checks:

```sh
# From the Synara checkout
HOME="$AUTHORITATIVE_OS_HOME" \
  /Users/yaacov/REPOs/LitRev/lab/runtime/bun-1.3.12/bin/bun \
  install --frozen-lockfile

/Users/yaacov/REPOs/LitRev/lab/runtime/bun-1.3.12/bin/bun \
  run build:desktop

# From the OpenCode checkout
HOME="$AUTHORITATIVE_OS_HOME" CI=1 \
  /Users/yaacov/REPOs/LitRev/lab/runtime/bun-1.3.14/bin/bun \
  install --frozen-lockfile
```

All three commands passed without changing either lockfile. The desktop build
reported only a module-type warning and Vite large-chunk warnings.

Authoritative server and local web run:

```sh
env -u T3CODE_AUTH_TOKEN \
  HOME="$AUTHORITATIVE_OS_HOME" \
  PATH="/Users/yaacov/REPOs/LitRev/lab/runtime/synara-gate1/bin:/Users/yaacov/REPOs/LitRev/lab/runtime/bun-1.3.12/bin:$PATH" \
  T3CODE_PORT_OFFSET=3158 \
  T3CODE_NO_BROWSER=1 \
  T3CODE_AUTO_BOOTSTRAP_PROJECT_FROM_CWD=0 \
  /Users/yaacov/REPOs/LitRev/lab/runtime/bun-1.3.12/bin/bun run dev -- \
  --home-dir "$AUTHORITATIVE_SYNARA_HOME" \
  --port 58090
```

Authoritative desktop run:

```sh
env -u T3CODE_AUTH_TOKEN \
  HOME="$AUTHORITATIVE_OS_HOME" \
  PATH="/Users/yaacov/REPOs/LitRev/lab/runtime/synara-gate1/bin:/Users/yaacov/REPOs/LitRev/lab/runtime/bun-1.3.12/bin:$PATH" \
  T3CODE_PORT_OFFSET=3158 \
  T3CODE_NO_BROWSER=1 \
  T3CODE_AUTO_BOOTSTRAP_PROJECT_FROM_CWD=0 \
  /Users/yaacov/REPOs/LitRev/lab/runtime/bun-1.3.12/bin/bun run dev:desktop -- \
  --home-dir "$AUTHORITATIVE_SYNARA_HOME"
```

The original run pinned an experimental local OpenCode launcher in Synara
settings:

```text
/Users/yaacov/REPOs/LitRev/lab/runtime/synara-gate1/bin/opencode
```

It ran the pinned source entry point with Bun `1.3.14`. A source run reported
version `local`; Synara nevertheless discovered it through a successful
`opencode --version` probe. This launcher has been retired. The supported
configuration now leaves `binaryPath` as `opencode`, resolving the official
Homebrew CLI from `PATH`.

Observed ports:

| Surface | Port | Binding |
|---|---:|---|
| local web UI | `8891` | `localhost` |
| explicit web-mode server | `58090` | local server |
| desktop backend | `55535` | `127.0.0.1` |
| managed OpenCode server | `56349` | `127.0.0.1` |

The web-mode `/health` response was:

```json
{"status":"ok","startupReady":true,"pushBusReady":true,"keybindingsReady":true,"terminalSubscriptionsReady":true,"orchestrationSubscriptionsReady":true}
```

## Verification Results

| Gate 1 check | Result | Evidence |
|---|---|---|
| Exact dependency install | Pass | Both frozen lockfile installs completed; source checkouts stayed clean. |
| Desktop build | Pass | `build:desktop` completed all five tasks. |
| Server and health | Pass | Server listened on `58090`; every health readiness field was `true`. |
| Local web UI | Pass | UI rendered with no visible user projects or chats and no browser console errors. |
| Isolated SQLite | Pass | Authoritative database and paths resolved only under the isolated homes. The two initial rows were the scaffold's hidden `Home` and `Studio` project kinds. |
| Desktop UI | Pass | Fresh Electron profile launched against the isolated backend. |
| Project/folder opening | Pass | `lab/runtime/synara-gate1/fixture` appeared as project `fixture`. |
| File preview | Pass | Explorer opened `README.md`; Source and rendered Preview modes worked. |
| Terminal | Pass | Terminal was rooted in the fixture and `pwd` returned `/Users/yaacov/REPOs/LitRev/lab/runtime/synara-gate1/fixture`. |
| Browser panel | Partial | Local discovery and `http://localhost:8891/` loaded. `https://example.com/` failed as `chrome-error://chromewebdata/`; Electron logged `ERR_NAME_NOT_RESOLVED`. |
| Provider status | Pass | Settings showed OpenCode in the provider picker and Installed CLIs; its absolute binary override persisted. |
| OpenCode discovery | Pass | `opencode models openai --pure` returned the OpenAI model inventory; Synara loaded both OpenAI and OpenCode Zen model groups. This did not prove that OAuth was usable. |
| OpenAI-backed turn | Pass on supported baseline | Official OpenCode `1.17.18`, model `openai/gpt-5.6-sol-fast`, Default permissions, one `pwd`, and one **Approve once** completed with valid authentication. The earlier `401` belonged to an expired credential copied into the experimental source-run home. |
| Harmless OpenCode turn | Pass | The official CLI returned the expected standalone fixture path. Synara marked the turn complete with runtime mode `approval-required`. |
| Synara transcript fidelity | Pass on supported baseline | The Synara UI and SQLite stored the exact same final response. The corruption was reproduced only through the retired pinned-source/free-model route. |
| Checkpoint capture | Pass for the intended boundary | The correction used `/tmp/litrev-synara-cli-compare-fixture`, outside every Git worktree. The turn completed and the server log contained no checkpoint warning. The earlier failure came from placing the fixture inside the parent repository's ignored `lab/runtime` directory. |
| Clean shutdown | Follow-up | All tested ports and managed comparison processes closed. A stale marker after forced development-runner interruption remains worth fixing, but it does not indicate a running process or block Gate 2. |
| Fixture integrity | Pass | The fixture still contained only `README.md`, SHA-256 `c7db7a6d3914dadff26ded24b610dadf01a3f3ca6afc81a5e85690d3164f16e3`; OpenCode recorded no write tool. |

The first multiline UI automation attempt created an unsent draft fragment; it
did not create a provider turn. The two recorded turns are the failed OpenAI
OAuth attempt and the completed free-model attempt.

## Additional Scaffold Findings

- In web mode, `T3CODE_AUTO_BOOTSTRAP_PROJECT_FROM_CWD=0` did not reach the
  server through the current Turborepo environment allowlist; startup reported
  `autoBootstrapProjectFromCwd: true`. Desktop mode reported `false`.
- `T3CODE_LOG_PROVIDER_EVENTS` is likewise not in the current Turborepo
  allowlist, so provider event logging cannot be enabled through the shown
  `dev` command without changing the scaffold or bypassing Turborepo.
- Desktop startup warns when the separately installed production Synara app is
  running. The two apps can coexist on isolated server ports, but UI automation
  must target `Synara (Dev)` explicitly.
- The desktop runtime emitted Node's `url.parse()` deprecation warning and the
  experimental SQLite warning. Neither blocked startup.

## Closeout And Follow-Ups

Gate 1 is closed. Use the official `opencode` CLI on `PATH`; do not restore the
experimental pinned-source launcher as the application baseline.

Carry these as non-blocking scaffold follow-ups:

1. Verify that a normal packaged-app quit removes the runtime marker, then
   separately improve cleanup after forced development-runner interruption.
2. Recheck external Browser navigation in a runtime with working DNS to
   distinguish an environment failure from a Browser manager defect.
3. Keep non-Git fixture projects outside a parent repository when testing the
   local-folder boundary.

The next implementation action is Gate 2: the smallest LitRev-owned local
boundary and one executor action inside it.
