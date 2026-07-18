# Upstream Review: Scient Agent On 2026-07-18

Status: Active
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Records the disposition review of official OpenCode changes published after Scient's current integrated agent-source base.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-agent`, `dev`
- Owned head inspected: `5ffaf9a2dfa5b958e8f4856b94b50d26b00c6b76`
- Official repository and branch: `anomalyco/opencode`, `dev`
- Previous reviewed and integrated base:
  `69a80663a2ed7d671d2b4d5dd6f2d605714675a5`
- Observed official tip: `fab213312927ea64cf968832c527206e8c944f9e`
- Official commits reviewed: 10
- Divergence at inspection: owned head 26 commits ahead and 10 commits behind
  the official tip by `git rev-list --left-right --count HEAD...upstream/dev`

## Review Depth

The review fetched official `dev`, inspected every commit subject and file list,
the complete range statistics, and focused patches for reasoning semantics and
review-file navigation. Service, localization, Nix-hash, and reverted TUI
changes were inspected to the depth needed to identify their scope and final
effect.

This is a disposition review. It does not claim the official range was built,
executed, integrated, or proven safe for Scient.

## Dispositions

| Official commit | Classification | Disposition | Reason and follow-up |
|---|---|---|---|
| `38989c57a0a1bff612604b6675e713e3febb4919` | Dependency | Reject | The OpenTUI 0.4.5 upgrade is explicitly reverted later in the same range. |
| `0df2f6245a9cd966c0912e12db2c9d809e0c589f` | Upstream infrastructure | Reject | Nix hashes accompany the superseded dependency state and do not benefit Scient independently. |
| `49d2dd8a38d0dfbf14ae8c87a517f95a22fb63bc` | Provider compatibility | Adopt | Explicit reasoning options should not silently fall back to invented variants; this is a bounded candidate with focused tests. |
| `41405c9eb00569e19d06dd1df72791a7dac79013` | Generated test formatting | Adopt | Take only with the reasoning-semantics candidate whose tests it normalizes. |
| `a46374e90e60fab59e55ee888638b06db54432a5` | Upstream service/product | Reject | Kimi K3 promotion changes OpenCode's hosted service and localization, not Scient's owned runtime behavior. |
| `45cd8d76920839e4a7b6b931c4e26b52e1495636` | Upstream service documentation | Reject | Zen model documentation belongs to OpenCode's hosted service. |
| `86e04d4174b8a1c6496a37ef858a39e6afcaeaf4` | Dependency | Reject | This reverts the earlier OpenTUI upgrade; the net dependency remains at the current base. |
| `3476e6baa5a7296e37136c8b7d740c62174178f9` | Upstream infrastructure | Reject | Nix hashes accompany the dependency revert and add no standalone Scient behavior. |
| `901c9e732921891e1fd71eb735ef5e78013f582f` | UX reliability | Adopt | Disabling unavailable previous/next file navigation is a bounded correctness improvement for the inherited review component. |
| `fab213312927ea64cf968832c527206e8c944f9e` | Upstream enterprise service | Reject | Trust-center domain and console copy are OpenCode service infrastructure, not Scient agent behavior. |

## Intake Decision

No official code was landed during this review. Reasoning-option semantics and
bounded review-file navigation are selected Adopt candidates for separate,
focused intake. OpenCode-hosted service, trust-center, and localization changes
are intentionally excluded.

## Resulting State

- `reviewedThrough`: `fab213312927ea64cf968832c527206e8c944f9e`
- `integrationBase`: `69a80663a2ed7d671d2b4d5dd6f2d605714675a5`
- Code intake: none
- Remaining risk: Adopt candidates still require Scient source verification and
  any relevant desktop coupling smoke before integration.
