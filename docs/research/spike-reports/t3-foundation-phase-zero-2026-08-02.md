# T3 Foundation Phase Zero Evidence (2026-08-02)

Status: Draft
Owner: Yaacov
Created: 2026-08-02
Last updated: 2026-08-02
Purpose: Records the refreshed T3 and owned-repository baseline, isolated untouched T3 verification, candidate identity risks, and evidence required before foundation acceptance or repository bootstrap.
Doc type: Research evidence

## Document Rules

This is a dated Phase Zero evidence record for the proposed T3 migration. It
does not accept ADR-0005, supersede ADR-0001, create a repository, authorize
product code, migrate user data, enable cloud, or select a release identity.
Those actions remain gated by the proposed foundation ADR and the migration
constitution.

The governing proposed decision is
[ADR-0005](../../architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md);
the planning context is the [T3 foundation migration
proposition](../../planning/t3-foundation-migration-proposition.md). This
report supplies evidence to those documents but does not become their
authority.

The inspection was read-only with respect to the owned primary checkouts. The
T3 inspection checkout was disposable, detached at the exact official tip,
fetch-only, and had push disabled. Package installation and verification
artifacts were confined to that disposable checkout and were not source
changes. No browser, computer-use, screenshot, visual, or manual UI
validation was performed.

## Inspection Times And Authority Snapshot

Inspection timestamps: 2026-08-02 20:51:01 Asia/Jerusalem / 2026-08-02
17:51:01 UTC. These times identify this evidence snapshot; they do not make a
future revision current.

The toolchain verification was strengthened after review: a final exact-tip
rerun completed at 2026-08-02 21:10:24 Asia/Jerusalem / 2026-08-02 18:10:24
UTC under Node `v24.13.1`, matching T3's root engine requirement. The earlier
Node 22 run remains useful as setup history but is not the final baseline
claim.

| Authority | Exact ref observed | Role | State used for this dossier |
|---|---|---|---|
| Scient | `origin/main` `d2438caeb2e45e2cb5c5684fc24f1c5419e39f2d` | Product policy and migration authority | Fetched official owned head; the primary checkout is dirty and was not edited |
| scient-desktop | `origin/main` `3829e5dd82a4760184aabafa4c96127744ef79f2` | Current Synara-derived desktop bridge | Fetched official owned head; no candidate work was performed here |
| scient-agent | `origin/dev` `60ed22de93a70d0e2079f545a62eafd8d740aed5` | Separate native-agent foundation | Fetched official owned head; no agent implementation was performed here |
| website | `origin/main` `2861028885b952413ef45b3b0af8bf9befa8fbd1` | Public website and release surface | Fetched official owned head; no website work was performed here |
| T3 Code | `upstream/main` `e60821f0e0d82a5d671ca3b94719c49d333921c8` | Official donor only | Freshly fetched in the disposable inspection checkout; exact current tag is `v0.0.32-nightly.20260802.980` |

The owned heads above were read from the official remotes immediately before
this dossier was written. Local primary checkouts are not treated as current
authority when they differ from those refs.

## Repository, Worktree, And Pull-Request Inventory

The Scient primary checkout at `/Users/yaacov/REPOs/ScientFactory/Scient` has
unrelated user/agent edits and is 29 commits behind its remote. It remains
untouched. The D2 worktree is clean and isolated:

| Repository/worktree | Branch and base | Cleanliness | Disposition |
|---|---|---|---|
| Scient primary | local `main`, remote `origin/main` above | Dirty and behind | Unrelated; untouchable |
| D2 evidence worktree | `docs/t3-foundation-phase-zero-20260802`, exact base `d2438cae...` | Clean before this evidence change | Same D2 lane; safely resumable |
| D1 evidence worktree | `docs/t3-foundation-proposed-adr-20260802`, prior merged work | Preserved | Completed evidence; not reused for D2 mutation |
| scient-desktop primary and existing worktrees | Many active feature/review/release branches | Mixed; unrelated to D2 | Untouchable; no overlapping T3-candidate lane exists |
| scient-agent primary and worktrees | `dev` plus review worktrees | Mixed; unrelated to D2 | Untouchable; agent remains a separate future lane |
| website primary and worktrees | `main` plus brand/review worktrees | Mixed; unrelated to D2 | Untouchable; no D2 change |

At inspection, open pull requests were:

- Scient PR #78, draft `docs/upstream-review-20260802`, unrelated upstream
  evidence.
- scient-desktop PR #193 (draft Codex health isolation), #194 (draft Synara
  checkpoint), #184 and #182 (dependent browser/automation lanes), and #58
  (draft packaged Linux lifecycle), all unrelated to this D2 lane.
- scient-agent PR #15, Dependabot, unrelated.
- website: no open pull requests.

No existing worktree, branch, or pull request has unambiguous ownership of a
T3-derived Scient candidate. That ambiguity blocks no read-only evidence, but
it would block any overlapping bootstrap mutation until the candidate owner,
base, and purpose are explicit.

## Official T3 Freshness And Donor Provenance

The inspection checkout is `/Users/yaacov/REPOs/ScientFactory-d2-t3-20260802`.
It has a single remote named `upstream` with fetch URL
`https://github.com/pingdotgg/t3code.git` and an explicitly invalid push URL
`disabled-no-push://invalid/t3code`. It is detached at `upstream/main`; it is
not a canonical checkout and has no owned writable remote.

The previous Scient source-lock snapshot recorded T3 through
`ca72e381c64f25d771236eecf70219f68e5f365b`, tagged
`v0.0.32-nightly.20260801.969`. The freshly observed tip is seven commits
later. The exact freshness delta is:

| Commit | Subject | Main affected areas | Phase Zero implication |
|---|---|---|---|
| `e60821f0` | Fold legacy models into separate menus | Provider/model capabilities, web and mobile pickers, contracts/tests | Current multi-surface provider contracts must be the baseline; do not port from the stale snapshot |
| `64bf0161` | Stop `npx` service updates silently leaving the old server running | Service boot/update and tests | Updater/service behavior is active high-risk code, not a stable copy seam |
| `5192f777` | Surface cloudflared FTL/PNC relay logs as warnings | Managed endpoint runtime/tests | Relay/cloud operational behavior is still evolving and must be isolated from Scient authority |
| `283c7ac4` | Normalize app icon glyph sizing | Brand assets | T3 visual/brand assets cannot be adopted as Scient identity |
| `78eb3eca` | Stop settle controls overlapping the status label | Web sidebar presentation | UI changes remain later, non-automatic evidence; no visual proof was attempted |
| `d3037064` | Make remote updates rollback-safe | Service launcher, preflight, rollback, activation, tests/docs | Large, sensitive update surface requires its own later proof and cannot be treated as a trivial merge |
| `0ad91b6` | Follow branch drift in dedicated worktrees | Checkpoint reactor and tests | T3 worktree/thread assumptions need an explicit Scient boundary |

Full delta count: 7 commits, 70 changed paths, 3,538 insertions, and 2,355
deletions. The current exact tag is a nightly tag at the current tip; no
stable release tag is being asserted as the candidate base. The provisional
implementation-base recommendation is the exact current tip/tag above,
subject to ADR acceptance and a later explicit bootstrap authorization. It is
not yet an integration base because no owned candidate repository exists.

## Untouched T3 Baseline

### Toolchain and setup

- T3 root package manager: `pnpm@11.10.0`.
- T3 root engine expectation: Node `^24.13.1`. The final baseline rerun used
  official Node `v24.13.1`; an earlier setup pass used Node `v22.22.3`, which
  is retained only as setup history. The server package also accepts Node
  `^22.16 || ^23.11 || >=24.10`.
- Global `vp` was unavailable. The repository-local installation supplied
  `vp v0.2.2` and the pinned Vite+/Vitest/Ox tooling.
- `pnpm install --frozen-lockfile --ignore-scripts` was first used only to
  establish dependencies in the disposable checkout. Because that suppresses
  Electron's lifecycle download, the isolated checkout then ran the normal
  frozen install and Electron's local installer. The Electron binary was
  present for the final test run. No tracked source changed.

### Verification results

All commands below ran in the detached disposable checkout at the exact T3
tip. They are baseline evidence, not a claim that a Scient candidate has been
created.

| Command | Result | Limitations and observations |
|---|---|---|
| `pnpm exec vp run build` | Passed under Node 24 | Marketing, web, server, and Electron desktop artifacts built; normal large-chunk/plugin timing and sourcemap/dependency warnings were emitted |
| `pnpm exec vp run test` | Passed under Node 24 after isolated Electron repair | All workspace suites completed; the server reported 201 passed and 2 skipped files, 1,825 passed and 7 skipped tests; no source changes |
| `pnpm exec vp check` | Passed under Node 24 | 2,263 files checked; 0 lint errors and 11 existing warnings, mainly nested React components and one array-index key |
| `pnpm exec vp run typecheck` | Passed under Node 24 | No errors; six TypeScript suggestions in SSH, desktop WSL/desktop test, and server decider code |
| `pnpm exec vp run lint:mobile` | Passed under Node 24 | Mobile source analysis completed; optional `swiftlint`, `ktlint`, and `detekt` were not installed and were skipped |
| `pnpm run release:smoke` | Passed under Node 24 | Setup emitted the known deprecation/peer warnings; no release was published |
| `git status --short --branch` | Clean | Only ignored dependency/build artifacts existed after verification |

The first test invocation failed only because the intentionally script-free
install had no Electron binary. After repairing Electron inside the isolated
checkout, the canonical command passed. This is an environment/setup note,
not a T3 source failure.

No browser automation, computer use, screenshot comparison, visual regression,
geometry/responsive validation, or manual UI acceptance was performed. Those
are outside this evidence phase and remain required only where a later gate
explicitly needs them.

## T3 Surface Inventory And Isolation Requirements

The following are observed T3 surfaces that a candidate must consciously
rename, isolate, disable, or preserve. These are not yet implementation
decisions for a repository that does not exist.

The primary inspection paths were `AGENTS.md`, `README.md`,
`docs/internals/workspace-layout.md`, `docs/internals/scripts.md`,
`docs/internals/ci.md`, `docs/internals/t3-connect.md`,
`docs/internals/server-updates.md`, `docs/user/updating.md`,
`docs/internals/resource-telemetry.md`, `apps/server/src/config.ts`,
`apps/server/src/cloud/publicConfig.ts`, `apps/desktop/src/electron/`,
`apps/mobile/app.config.ts`, `scripts/build-desktop-artifact.ts`,
`apps/server/src/telemetry/AnalyticsService.ts`,
`apps/server/src/telemetry/Identify.ts`,
`apps/desktop/src/app/DesktopEnvironment.ts`,
`apps/desktop/src/app/DesktopAppIdentity.ts`,
`apps/desktop/src/preview/BrowserSession.ts`,
`scripts/lib/public-config.ts`, `packages/shared/src/relayTracing.ts`, and
`infra/relay/README.md`. These paths are evidence pointers, not a claim that
their current APIs are Scient contracts.

### Desktop identity, protocol, and release

- Display identity is `T3 Code (Alpha)` / `T3 Code (Nightly)`.
- Electron app ID is `com.t3tools.t3code`.
- Production and development schemes are `t3code` and `t3code-dev`, with
  protocol host `app`.
- Packaged executable is `t3code`; artifact names begin `T3-Code-`; publisher
  and update configuration point at T3's GitHub release surface.
- Tests and browser partitions also use `t3code`-prefixed identities.

A Scient candidate must receive collision-safe identity, protocol, executable,
artifact, and update-feed decisions before distribution. Keeping T3's values
would risk opening the wrong app, sharing Electron partitions, colliding with
credentials, or consuming T3 update authority. `DesktopAppIdentity` also
falls back to a legacy T3 user-data directory when it exists, so changing only
the app ID or display name is insufficient. The candidate must explicitly
disable that legacy fallback and use a new preview partition prefix as well as
new protocol, executable, bundle, state, and update identities. Rebranding is
not a cosmetic search-and-replace task.

### Server state and persistence

T3 derives a state directory from `T3CODE_HOME` and keeps
`<base>/userdata/state.sqlite` (or a development state root), attachments,
logs, provider logs, worktrees, anonymous/environment identifiers, runtime
state, and secrets beneath that boundary. This is a useful host foundation,
not Scient's canonical scientific model. A later candidate must preserve the
T3 host state contract where useful while assigning scientific identity,
operations, provenance, receipts, and migrations to Scient-owned contracts.
No database migration or user-data conversion was attempted in D2.

### Cloud, relay, and telemetry

The server's public configuration has optional Clerk publishable identity,
CLI OAuth, secure relay URL, and OTLP trace endpoint/dataset/token values.
T3's cloud documentation describes hosted relay, Cloudflare/cloudflared and
Tailscale paths, Clerk authentication, mobile notifications, and relay-side
storage/deployment boundaries. Public configuration is absent unless supplied;
no cloud credentials, deployment, or selected-user enablement was performed.

T3 also has a separate `AnalyticsService` whose current defaults enable
PostHog delivery (`T3CODE_TELEMETRY_ENABLED=true`, a bundled T3 PostHog key,
and `https://us.i.posthog.com`). Its identifier helper first reads
`~/.codex/auth.json` or `~/.claude.json` and hashes the provider account/user
value; those paths are outside `T3CODE_HOME`. Provider/session usage metadata
is also recorded by the service. This is a concrete identity and privacy
boundary, not merely an optional configuration detail. A candidate must fail
closed before startup unless this service is disabled or replaced by a
Scient-owned, consented implementation, and must not inherit the host
provider-identity lookup.

T3's public-config/build path can also map OTLP/Axiom endpoint, dataset, and
ingest-token values into `EXPO_PUBLIC_*` and `VITE_*` client configuration;
the mobile manifest's observability block serializes those values and the
relay client sends a bearer token. These values must be treated as public
artifact material, never as a Scient secret boundary: a candidate must use a
separate Scient project/token with explicit redaction and consent, or disable
client tracing entirely. No T3 endpoint, dataset, token, or PostHog identity
was enabled in a candidate runtime or copied into Scient in D2; the values
remain present only in the disposable donor checkout as observed source
evidence.

T3 also has local resource/process telemetry and optional OTLP configuration;
resource telemetry can observe process command lines and descendant provider
processes. The inspected resource-telemetry documentation does not describe a
mandatory telemetry database, but a candidate still requires redaction,
consent, and no endpoint inheritance before any trace or process data leaves
the device. Cloud/mobile foundations remain available for later production-
dark and selected-user gates only after these controls are proven.

### Mobile

T3 has development, preview, and production variants named `T3 Code Dev`,
`T3 Code Preview`, and `T3 Code`, using schemes `t3code-dev`,
`t3code-preview`, and `t3code`; bundle/package identifiers are the matching
`com.t3tools.t3code.*` values. The config includes Expo EAS updates,
fingerprint runtime policy, Clerk `clerk.t3.codes`, app groups/widgets,
sharing, push notifications, and mobile cloud roots.

These foundations are valuable future host capabilities, but their current
identities, credentials, update URL, and legal/brand surfaces cannot be
released as Scient. Mobile UI is not a D2 deliverable; the eventual mobile
foundation must consume Scient contracts rather than become a second scientific
authority.

### Services and updater

T3's systemd service launcher owns version directories, preflight, activation,
trial/rollback, and receipts. Its update documentation forbids remote database
migrations/downgrades and requires exact migration compatibility. The latest
freshness delta includes a substantial rollback-safety refactor. This is a
strong donor capability, but also a protected high-risk seam: it requires a
separate identity, state, packaging, release, and rollback proof before a
Scient candidate can publish or self-update.

## License, Notices, Assets, And Provenance

The T3 root is MIT licensed, copyright T3 Tools Inc. The inspected `LICENSE`
SHA-256 is
`935d8f2af0c703f9c39517ee57cc4930b19d02d533be930b63f0e82f93614b43`. The
checkout also contains component-level licenses/notices, including the mobile
composer/markdown modules, Ghostty fonts/native runtime, embedded Effect
repositories, and skill licenses. A candidate must retain applicable notices,
review bundled assets and trademarks, and replace T3 marketing/legal text
before any public release. No asset or notice was copied into Scient in D2.

## Provisional Decisions And Stop Conditions

The evidence supports the following provisional choices for the next gate:

1. Use the freshly fetched T3 `main` tip `e60821f0...` (nightly tag
   `v0.0.32-nightly.20260802.980`) as the candidate-base recommendation,
   unless the accepted ADR deliberately chooses another exact revision.
2. Create no candidate repository until the successor ADR is accepted and a
   separate bootstrap authorization names the repository, owned `origin`,
   fetch-only T3 upstream, exact base, and responsible owner.
3. Treat T3's desktop, server, identity, cloud, mobile, telemetry, updater,
   and state surfaces as host infrastructure requiring explicit Scient
   isolation—not as scientific truth and not as an automatic brand port.
4. Preserve the current Synara-derived application as the continuity bridge;
   do not freeze, retire, or migrate its data during D2.
5. Keep cloud foundations available for later production-dark and selected-user
   gates, but do not enable cloud, add credentials, or deploy relay services.

No D2 stop condition was triggered. The following risks remain open and block
foundation acceptance or bootstrap until assigned a gate and owner:

| Risk | Severity | Why it matters | Required next proof |
|---|---|---|---|
| T3 service/update/rollback churn | High | Current tip changed a large, failure-sensitive lifecycle surface | Proof 1/packaged startup, identity, rollback, and update-feed isolation |
| Fixed T3 brand/protocol/bundle/state identities | High | Collisions could affect installed apps, credentials, partitions, and update routing | Candidate identity matrix and collision tests before bootstrap release work |
| T3 host persistence versus Scient scientific truth | High | Reusing `state.sqlite` as scientific authority would couple the product to host internals | Scient contract/persistence boundary and sanitized continuity fixtures |
| Cloud/relay/mobile operational and legal identity | High | T3 credentials, endpoints, terms, and update roots cannot be inherited blindly | Production-dark cloud and mobile foundation design before selected-user enablement |
| Default T3 AnalyticsService and host-provider identity | High | Current defaults can send PostHog events and correlate `~/.codex`/`~/.claude` identifiers outside `T3CODE_HOME` | Fail-closed analytics disablement/replacement and identity-source tests before candidate startup |
| Public OTLP/Axiom client configuration | High | Build/mobile config can ship endpoint, dataset, and bearer-token values into public artifacts | Separate Scient observability project/token or disabled client tracing, with redaction and consent proof |
| Legacy T3 user-data fallback and preview partitions | High | A clone can reuse existing T3 credentials/state or Electron preview sessions even after superficial renaming | Collision matrix, legacy-path refusal, new partition prefix, and isolated-state tests |
| Optional mobile linters unavailable | Low/Medium | Mobile static analysis is incomplete in this environment | Run the platform linters in the supported CI/toolchain before mobile release claims |
| No visual/manual validation | Low for D2 | This dossier makes no appearance claim | Apply the visual gate only to later user-facing implementation |

## Phase Status And Recommendation

| Phase | State after this dossier | What it authorizes |
|---|---|---|
| D0 proposition | Merged | Planning basis only |
| D1 proposed ADR and reconciliation | Merged; ADR-0005 remains `Proposed` | Read-only Phase Zero evidence |
| D2 Phase Zero evidence | This dossier, pending review/merge | Evidence for accepting or revising ADR-0005; no repository or code |
| D3 foundation acceptance and planning promotion | Pending | May authorize candidate bootstrap after accepted evidence |
| D4 candidate bootstrap | Not started | None |

Recommendation: merge this dossier only as reviewed evidence, then hold a
human decision on ADR-0005. If the evidence is accepted, D3 should reconcile
the active plan, technology/source/roadmap roles, ADR-0001 successor links,
and bootstrap authorization. Until that happens, the only correct state is
“T3 baseline observed and verified; Scient candidate not created.”
