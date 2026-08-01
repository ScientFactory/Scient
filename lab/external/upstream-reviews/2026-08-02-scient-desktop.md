# Synara Scheduled Review, 2026-08-02

Status: Draft
Owner: Yaacov
Created: 2026-08-02
Last updated: 2026-08-02
Purpose: Records the complete Synara range observed after the accepted 2026-08-01 review checkpoint.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Owned head inspected: `3829e5dd82a4760184aabafa4c96127744ef79f2`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Accepted documented `reviewedThrough`: `ab33931da4c8da884b1445244085f4eeee3eafb6`
- Prior observed tip used only for the daily digest: `ab33931da4c8da884b1445244085f4eeee3eafb6`, recovered from the archived prior-run report because the automation memory file was absent
- Bounded observation: 2026-08-02 02:37:06 IDT / 2026-08-01 23:37:06 UTC
- Current fetched tip: `65f6684aa6ff88c8d57a9f11d541a54b41be1539`
- Current stable release: `v0.6.4`, peeled to `b85190f2b2e230e2eb68009714651bee78cc0bd8`; main is one commit ahead
- Full required range: `ab33931d..65f6684` (4 commits)
- Already covered by authoritative dispositions in that range: 0
- Newly dispositioned in this record: 4
- Remaining undispositioned: 0
- Literal integration base: `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`

## Review Depth

Every commit received subject, parent, changed-path, statistic, complete-patch,
dependency, workflow or release, protected-lane, current Scient seam, and test
inspection. Current Scient source was inspected before each disposition. The
review used fetched Git objects and a donor-tag namespace because the owned and
donor repositories both advertise a `v0.6.4` tag with different ownership.

No donor or Scient UI was rendered. No browser automation, computer use,
screenshots, geometry checks, visual tests, or manual UI acceptance were
performed. The presentation sub-lane remains recommendation evidence only.

## Daily Commit Ledger

| Source | Commit | What changes for users or operators | Quality and reason | Current Scient behavior and owning seam | Concept fit | Code portability | Steal difficulty | Risk and dependencies | Disposition | Implemented? | Recommendation |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Synara | `32126a8a` | Gives the donor release preflight five more minutes before GitHub cancels it. | 2/5; mechanically safe, but it raises a timeout without a measured cause or a regression signal. | Scient owns a substantially different protected release workflow. Its preflight is currently ten minutes, and draft PR #58 already overlaps `.github/workflows/release.yml`. | Low | Low | Easy | Release authority, hosted duration variance, and active overlap | **Reject as donor-specific release tuning.** | No | Measure Scient preflight duration and diagnose a real timeout before changing its release gate. |
| Synara | `394cbe08` | Retries deletion of the Windows packaged-smoke temporary directory for up to five seconds after terminating the app. | 3/5; uses the Node retry primitive correctly, but the next commit shows retry alone did not solve the lock. | Scient's `cleanupPackagedStartupTemporaryRoot` preserves failed process evidence and reports cleanup failure instead of silently discarding it; the release-smoke lane is also owned by draft PR #58. | Low | Medium | Easy | Windows process lifetime, artifact evidence, release smoke, and active overlap | **Reject as superseded and inferior to Scient's evidence-preserving failure model.** | No | Keep cleanup failure visible; improve process containment only from a reproduced Scient failure. |
| Synara | `b85190f2` | After retry exhaustion, turns a Windows `EPERM` cleanup lock into a warning and lets the smoke run continue while leaving the directory for runner cleanup. | 3/5; narrowly handles the observed code, but treats incomplete cleanup as success and relies on ephemeral runner behavior. | Scient deliberately preserves the directory and fails with combined startup, process, cleanup, output, and log diagnostics. | Low | Medium | Easy | Leaked process or handle, runner-only assumptions, suppressed release evidence, and draft PR #58 | **Reject; Scient already has a stricter and more informative solution.** | No | Do not weaken the packaged-smoke acceptance boundary to absorb `EPERM`. |
| Synara | `65f6684a` | Prevents a Codex authentication health check from loading configured MCP servers; also replaces provider-state-heavy tool text with shorter action-first browser labels and surface icons. | 4/5 as a mixed parent: 5/5 for the bounded Codex probe isolation with focused tests; 4/5 for coherent presentation cleanup, but that lane changes visible hierarchy and copy. | Scient's `ProviderHealth` still runs `codex login status` with the user's current `CODEX_HOME`, so MCP configuration can be loaded during a probe. Scient owns related tool-label, live-activity, browser-catalogue, icon, and transcript seams, with different browser authority work in progress. | High for the health probe; medium for presentation | High for the probe; low direct for presentation | Easy for the probe; Hard for the presentation sweep | Codex CLI config precedence and compatibility; presentation needs visual, interaction, accessibility, and copy proof | **Decompose: Adapt the health-probe isolation now; defer the presentation concept for human UI review.** | Health sub-lane selected; presentation no | Add `-c mcp_servers={}` only to the Codex auth probe, preserving version/config/custom-provider logic. Audit action-first browser presentation separately. |

## Mixed-Commit Sublanes

| Commit and sub-lane | Exact user or operational effect | Current Scient seam | Smallest Scient-native implementation | Proof required | Decision |
|---|---|---|---|---|---|
| `65f6684a` Codex health-probe isolation | Routine availability/authentication refreshes cannot initialize, discover, or trigger configured MCP servers. | `apps/server/src/provider/Layers/ProviderHealth.ts` and its focused test file | Use one named constant for `-c mcp_servers={} login status`; leave version, custom provider, `CODEX_HOME`, timeout, parsing, identity, credentials, and sessions unchanged. | Exact command arguments across authenticated, unauthenticated, unsupported-command, custom executable, and `CODEX_HOME` cases; full nonvisual source checks. | **Adapt; selected fast lane.** |
| `65f6684a` browser action labels and icons | Browser work rows become shorter and action-first, completed rows drop redundant state text, failures remain explicit, and browser calls use a recognizable surface icon. | Scient-owned browser catalogue, `toolCallLabel`, `liveActivityPresentation`, and timeline work rows | First compare the current Scient catalogue and activity hierarchy; implement only a coherent owned presentation change if human inspection finds a real gap. | Human visual and interaction review across running/completed/failed/cancelled states, grouping, themes, responsive widths, focus, reduced motion, screen-reader output, and browser-tool permissions. | **Defer; valuable but automatically ineligible.** |

## Ranked Intake Decision

1. `65f6684a` Codex health-probe isolation ranks first: direct user privacy and
   reliability benefit, a confirmed Scient gap, very small code surface, high
   portability, no active exact-file PR overlap, and complete nonvisual proof.
2. `65f6684a` browser presentation ranks second within this donor range, but it
   is automatically ineligible because value and correctness depend on rendered
   hierarchy, copy, focus, responsive behavior, and human UI judgment.
3. `394cbe08` plus `b85190f2` do not qualify: Scient's current smoke harness has
   a stronger evidence-preserving cleanup boundary and active release overlap.
4. `32126a8a` is donor-only release tuning without a demonstrated Scient
   failure and is rejected.

## Intake Decision

One bounded Scient-native adaptation is selected from `65f6684a`: isolate the
Codex authentication health probe from configured MCP servers. It remains an
independent desktop draft based on the exact owned head above and does not
import the donor's browser presentation changes.

Implementation evidence:

- Branch: `maintenance/upstream-codex-health-mcp-isolation-20260802`
- Exact base: `3829e5dd82a4760184aabafa4c96127744ef79f2`
- Commit: `099c6d124e85c63b506cd1b78cb533fedc1bfbd7`
- Production change: `apps/server/src/provider/Layers/ProviderHealth.ts`,
  adding the scoped `-c mcp_servers={} login status` arguments only to the
  Codex authentication probe
- Regression change: `apps/server/src/provider/Layers/ProviderHealth.test.ts`,
  covering authenticated, unauthenticated, unsupported-command, custom
  executable, configured `CODEX_HOME`, Windows verbatim, cache/re-enable, and
  provider-selection behavior
- Diff: 2 files, 20 additions, 26 deletions (production +3/-1; tests +17/-25)
- Focused baseline and final: 125/125 tests passed
- Nonvisual verification: brand identity, formatting, lint (0 errors; inherited
  warnings), typecheck, desktop build, and `git diff --check` passed
- Full `bun run test`: attempted and stopped on one unrelated
  `electronUpdaterSecurity.test.ts` assertion because Bun 1.3.12 prints
  `1.3.12` while the test requires a leading `v`; the exact same focused
  failure reproduces on the untouched owned base
- No browser, computer use, screenshots, geometry, visual tests, manual UI
  acceptance, credentials, persistence, release authority, or live data were
  used or changed

The browser presentation concept remains recommended but not implemented. The
release timeout and Windows cleanup changes are rejected. No donor commit is
cherry-picked, and no donor ancestry, release authority, packaging policy,
identity, credential model, session model, persistence, or UI is adopted.

## Resulting State

- Complete contiguous disposition evidence: `ab33931d..65f6684` (4 commits), zero remaining.
- Proposed repo-local `reviewedThrough`: `65f6684aa6ff88c8d57a9f11d541a54b41be1539`.
- Accepted repo-local checkpoint while this record is a draft: `ab33931da4c8da884b1445244085f4eeee3eafb6`.
- Literal `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`.
- Selected intake: Codex health-probe MCP isolation; implemented at desktop commit `099c6d124e85c63b506cd1b78cb533fedc1bfbd7`, pending independent review and draft publication.
- Rolling issue: `ScientFactory/scient-desktop#15` remains open until the dependent checkpoint is accepted.
