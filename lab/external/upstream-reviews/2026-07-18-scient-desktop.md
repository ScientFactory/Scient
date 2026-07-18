# Upstream Review: Scient Desktop On 2026-07-18

Status: Active
Owner: Scient 001
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Records the disposition review of official Synara changes published after Scient's current integrated desktop base.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`,
  `agent/synchronize-upstream`
- Owned default-branch base:
  `bd2a6eed6243b13fc1423b21b2454ae060bce5c7`
- Owned intake head inspected:
  `2a66d69f46d930d4cd8d702152efa19e952ddf54`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Previous reviewed and integrated base:
  `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`
- Observed official tip: `3a5720bdd0ae4ace444379cabf0a634941d232fd`
- Official commits reviewed: 26 total; 13 after the earlier
  `69304bc1d59d86da8afbac367118c75db8c9dbfe` checkpoint
- Divergence at inspection: intake head 135 commits ahead and 26 commits behind
  the official tip by `git rev-list --left-right --count HEAD...upstream/main`

## Review Depth

The review fetched official `main`, inspected the complete first-parent range,
commit subjects, full changed-file lists, range statistics, and focused patches
for compatibility, reliability, security-adjacent, and likely intake candidates.
The very broad audit commit was reviewed by its named sub-lanes and file scope;
its hundreds of changed files were not independently re-audited line by line.

The selected adaptations were implemented on an isolated owned branch and
verified with the full local intake gate, stable and geometry browser suites,
actual macOS arm64 packaging, and a cross-repository owned-agent smoke test.
Focused implementation, dependency, release, architecture, and security reviews
found and fixed a Codex startup race and an attachment symlink escape before
publication.

This evidence does not claim the whole official range was integrated or proven
safe. In particular, the remote-access architecture in the broad audit was
reviewed and rejected rather than imported.

## Dispositions

| Official commit | Classification | Disposition | Reason and follow-up |
|---|---|---|---|
| `f9d365c2070b6491b868b139164a5701e1466afb` | Provider compatibility | Adapt | Namespaced Cursor/Grok ACP model IDs are useful; port only when that external-agent path is exercised against Scient's current adapter. |
| `0593435aca9eb7e4be78e618231f9cd760f6e448` | Reliability and input hardening | Adopt | Own-property checks prevent prototype members from resolving as file icons. Candidate for a focused small intake. |
| `af057220480b327c60406c419c72503caa5ddf75` | Reliability, security, architecture, persistence, release | Reimplement | The audit contains valuable fixes across auth, attachments, WebSockets, migrations, provider lifecycle, orchestration, and release provenance, but it is too broad to merge safely. Review and port those lanes independently before release or inherited-core changes. |
| `ad141b9873bebfe7a6932fe640be373f5aab1c61` | Upstream infrastructure | Reject | The Synara Canary identity and launcher are not a Scient product path. Retain only the isolation lesson. |
| `475174b4f951f52119c52d14e6677f540281c80a` | Upstream infrastructure | Reject | This repairs the rejected Synara Canary workflow and does not belong in Scient as-is. |
| `91c4507f6b2e784d0ebf687730300b1f8c079524` | Attachment reliability and upstream infrastructure | Adapt | Reject the Canary-specific work; separately inspect and port the bounded attachment-upload hardening if Scient's current route still needs it. |
| `076050df13e244a1076caab2c63786d9339d0cd3` | UX | Defer | A closed-folder icon is low-risk polish but should follow Scient's own visual language. |
| `765198630b03bc6805a6c783ab41c0cfc1f06e7b` | UX | Defer | Composer contrast improvements are potentially useful but belong in a focused Scient UI review. |
| `4961445ff08aced4c88e67f2642f7d2e2aae9ac4` | External-agent compatibility | Adapt | App-owned `/review` for external OpenCode fixes a real command-discovery mismatch; port with Scient/external-agent terminology and focused tests. |
| `9356d91ee93c7c66e2baf8d81de1a352febf4324` | Performance | Defer | Model prefetching may improve new-thread UX, but provider discovery cost and Scient's project flow need measurement first. |
| `aa09d67f594aa5c8e06e22801126cf6e90ad56b5` | Product assumptions and UX | Reimplement | Removing inherited novelty/demo surfaces is useful; do that in Scient-owned UI work without importing Synara chrome and changelog assumptions. |
| `16eaa4314c4ee956fe926c64f2408ea8e996d9a4` | Branding | Reject | Synara logo styling must not enter Scient. |
| `69304bc1d59d86da8afbac367118c75db8c9dbfe` | Branding | Reject | Synara logo sizing must not enter Scient. |
| `4efc69452eca4eff31d11dd6a40e5ebad0158e8b` | Streaming persistence performance | Adapt | Port the redundant-query and transaction reductions with Scient's existing projection semantics and regression suite. Implemented in desktop PR #16. |
| `02cbd7e40fb0fe2240c782a79eea2aed055f7d17` | Codex startup performance | Adapt | Prepare overlays outside the blocking startup path, then add per-thread serialization and single-flight discovery to prevent duplicate concurrent processes. Implemented and hardened in desktop PR #16. |
| `da56dbcb7fde18f8a1ec826492278075651cded4` | Turn-start performance | Adapt | Parallelize independent checkpoint and prompt-image I/O while bounding attachment reads. Implemented with attachment-root confinement in desktop PR #16. |
| `a10e965955a1ed050b5b2ebe5bf68689e72c398a` | Secret durability and thread deletion | Adapt | Preserve the durable private-write and deleted-thread cleanup behavior without importing unrelated upstream architecture. Implemented in desktop PR #16. |
| `4bace1148664069166c1feb1cc9e51c48ab19fa9` | Claude startup performance | Adopt | Avoid the redundant first-turn permission request while preserving the existing approval boundary. Implemented with focused tests in desktop PR #16. |
| `0a7e0ec2807a9faa59f60ab123f1b57ca1a7a3e8` | New-chat performance | Adapt | Defer non-critical persistence and mounting and prefetch models without changing Scient project initialization semantics. Implemented in desktop PR #16. |
| `ef16dee917722d27782e95bba9c286967d61d5ed` | Claude reliability and upstream-native orchestration | Mixed | Adapt live mutable Claude settings and bounded replay. Reject native Claude subagents and dynamic workflows because Scient keeps an independent `scient-agent` boundary. |
| `23753040ed6e72b2a72159eab1e7be78750db619` | Provider maintenance and packaging | Adapt | Pin the provider-update npm prefix and verify staged patches, then strengthen the owned release stage with a frozen filtered production install. Implemented in desktop PR #16. |
| `2da3d4c625e5fb265b2b56e211770fb4612bd0a1` | Effect ACP deletion planning | Defer | Retain as a reference for later compatibility cleanup; do not bundle a broad deletion plan into this intake. |
| `d8a8d0d8aa8ff046baa6dd3d1cc06cc8d8c68ee9` | Native Claude subagent and workflow follow-up | Defer | The stop, command-admission, interrupt-error, effort, and background-notice lessons are useful, but this patch depends on the rejected native Claude subagent/workflow architecture. Re-evaluate those behaviors against Scient's independent agent control plane rather than importing this implementation. |
| `6832113503b7ed6e18a9006e1151e2a1cd9a458c` | Native-agent workflow UI | Reference | Keep the calmer state-color, compact phase, model-label, and background-notice ideas as design input for a future Scient-owned agent surface. Do not import the provider-native Claude workflow assumptions or Synara chrome as product behavior. |
| `b1458ed6710aee77931e86ad70347484460a695e` | Native-agent workflow phase UI | Reference | Showing all phases by default with optional pill filtering is a useful future Scient-agent design idea. This patch only changes the rejected provider-native workflow card, so no code intake is warranted now. |
| `3a5720bdd0ae4ace444379cabf0a634941d232fd` | Native-agent workflow layout | Reference | A single text-alignment rail is a useful visual-design lesson, but this is another narrow adjustment to the rejected provider-native workflow card. Keep the idea, not the implementation. |

## Intake Decision

Selective intake was implemented and submitted in
[desktop PR #16](https://github.com/ScientFactory/scient-desktop/pull/16) at
exact head `2a66d69f46d930d4cd8d702152efa19e952ddf54`. It adapts the bounded
reliability, performance, dependency, release, and test-enforcement lanes
recorded above while preserving Scient identity and independent runtime
boundaries.

The exact-head [hosted CI run](https://github.com/ScientFactory/scient-desktop/actions/runs/29661006145)
passed formatting, lint, typechecking, the full unit/integration suite, release
smoke, Windows process regression, and the stable keybindings and ChatView
browser files. The stable EventRouter browser file still failed two
Linux-hosted synchronization assertions, so the PR is not ready to merge. This
is accepted review and pending intake, not evidence that the owned default
branch has already integrated the code.

## Resulting State

- `reviewedThrough`: `3a5720bdd0ae4ace444379cabf0a634941d232fd`
- `integrationBase`: `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`
- Update mode: `divergent-cherry-pick`; the broad audit range demonstrates that
  routine full-source merges are no longer the honest default.
- Code intake: pending desktop PR #16 at
  `2a66d69f46d930d4cd8d702152efa19e952ddf54`
- Hosted gate: blocked by two EventRouter Linux browser synchronization
  assertions in run `29661006145`; no production failure was established.
- Remaining risk: signing, notarization, updater policy, Windows installer
  identity, and broader Effect ACP compatibility cleanup remain separate work.
  The rejected remote-access architecture remains outside Scient.
