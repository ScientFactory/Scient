# Upstream Review: Scient Desktop On 2026-07-18

Status: Active
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Records the disposition review of official Synara changes published after Scient's current integrated desktop base.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Owned head inspected: `2ecfbe19590c99386099c065846b5f3b987e953b`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Previous reviewed and integrated base:
  `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`
- Observed official tip: `69304bc1d59d86da8afbac367118c75db8c9dbfe`
- Official commits reviewed: 13
- Divergence at inspection: owned head 87 commits ahead and 13 commits behind
  the official tip by `git rev-list --left-right --count HEAD...upstream/main`

## Review Depth

The review fetched official `main`, inspected the complete first-parent range,
commit subjects, full changed-file lists, range statistics, and focused patches
for compatibility, reliability, security-adjacent, and likely intake candidates.
The very broad audit commit was reviewed by its named sub-lanes and file scope;
its hundreds of changed files were not independently re-audited line by line.

This is a disposition review. It does not claim the official range was built,
executed, integrated, or proven safe for Scient.

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

## Intake Decision

No official code was landed during this review. The file-icon hardening is the
smallest Adopt candidate. Namespaced Cursor/Grok IDs and app-owned external
OpenCode review are Adapt candidates. The broad audit remains a set of
lane-specific Reimplement candidates, with security, persistence, and release
lanes requiring attention before a public release.

## Resulting State

- `reviewedThrough`: `69304bc1d59d86da8afbac367118c75db8c9dbfe`
- `integrationBase`: `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`
- Update mode: `divergent-cherry-pick`; the broad audit range demonstrates that
  routine full-source merges are no longer the honest default.
- Code intake: none
- Remaining risk: the broad audit's security-relevant internals require focused
  review before related Scient work or public release; disposition does not
  equal a security audit.
