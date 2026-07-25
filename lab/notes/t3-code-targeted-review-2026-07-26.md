# T3 Code Targeted Review

Status: Draft
Owner: Yaacov
Created: 2026-07-26
Last updated: 2026-07-26
Purpose: Records the complete trigger-driven T3 Code inspection from the previous bounded review through the tip observed on 2026-07-26.
Doc type: Research evidence

## Verdict And Scope

T3 Code remains a reference-only subsystem donor, not a maintained Scient
upstream, application foundation, or integration base. This prompted review is
complete from `bf76535fe4da71d8de7b8bd5ffa0d2086b7af8d0` through
`5719e8ac4020dda0e375ef61d044b61f55a0df8a` (124 commits).

| Item | Evidence |
|---|---|
| Official source | `https://github.com/pingdotgg/t3code.git`, `main` |
| Previous review boundary | `bf76535fe4da71d8de7b8bd5ffa0d2086b7af8d0` |
| Last automation-observed tip | `38cfc25e` |
| Fetched tip | `5719e8ac4020dda0e375ef61d044b61f55a0df8a` |
| Stable release observed | `v0.0.28` |
| Latest tag observed | `v0.0.29-nightly.20260725.899`, at the fetched tip |
| Scient desktop base inspected | `dab9b6d58e2a3f3da02c5475b86dc083f71580f1` |
| Review method | Full commit/path/stat inventory, focused candidate patches, current Scient seams/tests, and live overlap inventory |

No donor or Scient UI was rendered. No browser automation, screenshots, visual
checks, geometry checks, or manual interaction acceptance were performed.

Ledger shorthand:

- `EQUIV`: current Scient has an equivalent or stronger owned behavior.
- `VISUAL`: appearance or interaction concept requiring validation prohibited in this automation.
- `PRODUCT`: T3-specific cloud/mobile/connect/identity/product assumption.
- `BROAD`: broad architecture or mixed refresh without one bounded Scient gap.
- `RELEASE`: donor publication/deployment/update authority.
- `LESSON`: useful idea, but no qualified, independently testable Scient gap now.

## Complete Commit Ledger

| T3 commit | Classification | Disposition | Scient decision |
|---|---|---|---|
| `ebe8afb1` | Branding | Reject | `PRODUCT` |
| `1735e27d` | Terminal selection copy | Reject | `EQUIV`; current Scient has explicit copy/error/whitespace tests |
| `4f117405` | App test workflow | Reject | Donor-only automation |
| `53e3c98a` | Nightly/dev branding | Reject | `PRODUCT` and `VISUAL` |
| `7a820abf` | Headless T3 Connect | Reject | `PRODUCT`; remote-connect architecture not adopted |
| `2b180a2b` | Connect authorization UI | Reject | `PRODUCT` and `VISUAL` |
| `398140a9` | OpenCode startup timeout | Reject | `EQUIV`; Scient's adapter owns stronger lifecycle/backstop logic |
| `e8ff6bc7` | Dead-code cleanup | Reject | No independent behavior |
| `271454cb` | Mobile stack | Reject | `PRODUCT` |
| `69c8be2e` | Donor test skill | Reject | Donor-only automation |
| `b511227b` | Sidebar polish | Defer | `VISUAL` |
| `7e1a0d55` | Draft-banner layout | Defer | `VISUAL` |
| `e34250df` | Mobile testing guidance | Reject | `PRODUCT` |
| `2640e6dc` | Connection probe | Defer | `LESSON`; no matching proven Scient latency defect |
| `3795dbb0` | Claude executable on Windows | Reject | `EQUIV`; Scient has provider binary discovery and isolated probes |
| `63b6b446` | Preview settings persistence | Reject | `EQUIV` |
| `78485e6d` | Preview clipboard permission | Defer | `VISUAL`/interactive and browser-permission-sensitive |
| `dfbda843` | Sidebar shortcut routing | Defer | `VISUAL`/interactive |
| `68ea2803` | Bedrock Claude auth | Reject | `EQUIV`; Scient maps Amazon Bedrock and provider auth independently |
| `d7baa37e` | Copy edit | Reject | No material gap |
| `749baec3` | Background-task titles | Reject | `EQUIV` |
| `3235658c` | OpenCode session titles | Reject | `EQUIV` |
| `df65a6c3` | Bulk archive | Reject | `EQUIV`; Scient has guarded archive behavior |
| `5fcfe242` | CLI force-remove projects | Reject | `PRODUCT`; conflicts with Scient project/data authority |
| `d266c068` | Narrow-viewport sidebar | Defer | `VISUAL`/geometry |
| `33f1cb42` | Web-search tool details | Reject | `EQUIV` |
| `40c0ab08` | Codex launch arguments | Reject | Protected credential/session/runtime lane; no demonstrated gap |
| `501ce27b` | Stale active turn | Reject | `EQUIV`; startup reconciliation and ProviderService tests cover stale state |
| `08993a5e` | Generated bindings | Reject | Donor protocol maintenance only |
| `2fae0d0a` | Localhost preview navigation | Reject | `EQUIV`; Scient's browser/local-preview trust paths are owned separately |
| `8e3467fe` | Mobile thread sync | Reject | `PRODUCT` |
| `b6d9ce32` | iOS glass layout | Reject | `PRODUCT` and `VISUAL` |
| `f4da4f3b` | OpenCode resume | Reject | `EQUIV`; persisted resume cwd and follow-up behavior are tested |
| `0ca32406` | OpenCode health check | Reject | `EQUIV`; Scient uses bounded CLI/provider probes |
| `946b8676` | Timeline hover target | Defer | `VISUAL`/geometry |
| `a135f2c2` | Approval details | Reject | `EQUIV`; Scient parses and presents structured approval detail |
| `c710167b` | Selection over composer chips | Defer | `VISUAL`/interactive |
| `fa69f05b` | Custom model slugs | Reject | `EQUIV`; provider-indexed custom models are normalized and tested |
| `0936fd27` | Workspace image preview | Reject | `EQUIV`; Scient's universal file viewer owns preview safety |
| `8ca4eec9` | Explorer drag-to-composer | Reject | `EQUIV`; Scient has native folder/file drop and attachment handling |
| `2c199aac` | Desktop window bounds | Reject | `EQUIV`; `windowState.ts` and tests own restoration |
| `db4b2d8a` | New-chat/offline propagation | Defer | `LESSON`; broad orchestration changes and no isolated current defect |
| `c8a04bd5` | Changed-files UI bundle | Reject | `EQUIV`; Scient PRs #110/#117 and active #127 own the seam |
| `5d34f9ff` | Hosted OAuth deploy | Reject | `RELEASE`/production credential lane |
| `c0bb2373` | Remote environment chip | Reject | `PRODUCT` and `VISUAL` |
| `23c18fda` | Disconnected composer | Reject | `EQUIV` |
| `62cf4617` | Provider/worktree defaults | Reject | `EQUIV`; Scient owns provider traits and origin-main workspace routing |
| `6f34ad3e` | Claude SDK event handling | Reject | `EQUIV`; Scient has native-event ordering and lifecycle coverage |
| `32c6012d` | Sidebar v2 | Reject | `BROAD` and `VISUAL` |
| `282ecb31` | Provider wizard validation | Reject | `EQUIV`; current setup validates before progression |
| `aa5ec803` | Claude probe isolation | Reject | `EQUIV`; Scient PR #116 owns clean probe isolation |
| `783692af` | Connecting status | Reject | `EQUIV` |
| `4e09cddb` | Stale OpenCode models | Reject | `EQUIV`; Scient PR #120 owns OpenCode model/completion lifecycle |
| `c7b21ff1` | Scoped package text | Reject | `EQUIV` |
| `b6e1b393` | Default provider | Reject | `EQUIV` |
| `571a8b44` | Worktree branch naming | Reject | `EQUIV`; Scient has owned workspace conventions |
| `020179c1` | Sidebar settled icon | Defer | `VISUAL` |
| `18b46887` | Sidebar animations | Defer | `VISUAL`/motion |
| `e5fba263` | Copy-link menu | Reject | `EQUIV` |
| `f74eb626` | Desktop EPIPE handling | Reject | `EQUIV`; `desktopProcessErrors` and graceful quit tests cover it |
| `18fa89c4` | Draft highlight | Defer | `VISUAL` |
| `7e2bb475` | Mobile timer | Reject | `PRODUCT` |
| `376c149e` | PR/session lifecycle | Reject | `EQUIV`; Scient has PR guards and provider lifecycle ownership |
| `9fe4832a` | New-thread palette | Defer | `VISUAL`/interactive |
| `9a0a0716` | Sticky PR fallback | Reject | `EQUIV`; Scient owns PR fallback/branch state |
| `78a0ea55` | Copy branch menu | Defer | `VISUAL`/interactive; low incremental value |
| `ab4a8838` | Remote server updates | Reject | `PRODUCT`/`RELEASE` |
| `593289c3` | Light sidebar polish | Defer | `VISUAL` |
| `bc9428a0` | Mobile VPN state | Reject | `PRODUCT` |
| `2d31cb02` | Branch/PR drift bundle | Reject | `EQUIV`; Scient owns guarded Git/PR synchronization |
| `c5ff51ec` | Application refresh | Reject | `BROAD` and `VISUAL` |
| `b6a2563d` | Dialog polish | Defer | `VISUAL` |
| `14b6bfdf` | Glass surfaces | Reject | `PRODUCT` and `VISUAL` |
| `29b1abc4` | Tooltip glass | Reject | `PRODUCT` and `VISUAL` |
| `6e5df67f` | Tooltip background | Defer | `VISUAL` |
| `10da67b9` | Picker glass | Reject | `PRODUCT` and `VISUAL` |
| `0b1ce588` | Glass slider | Reject | `PRODUCT` and `VISUAL` |
| `5961d367` | Palette glass | Reject | `PRODUCT` and `VISUAL` |
| `d330759f` | Composer glass alerts | Reject | `PRODUCT` and `VISUAL` |
| `160d97f4` | Composer glass opacity | Reject | `PRODUCT` and `VISUAL` |
| `39cd15b9` | Web test stabilization | Reject | Donor-only test infrastructure |
| `c38225ef` | Settings fade | Defer | `VISUAL` |
| `936394b6` | Desktop fixture | Reject | Coupled to rejected glass product styling |
| `9c9916ae` | Redesign follow-up | Reject | `BROAD` and `VISUAL` |
| `b44ed835` | Provider-banner dismissal | Reject | `EQUIV` |
| `16491a84` | Remote new-thread defaults | Reject | `PRODUCT`; local Scient defaults are owned separately |
| `fbd77420` | AI-reviewed Auto approvals | Reject | Imports donor approval authority and product assumptions |
| `1c9a6de2` | `t3.json` config | Reject | `PRODUCT`; conflicts with Scient project truth |
| `e51538b8` | Light-mode surfaces | Defer | `VISUAL` |
| `4d834364` | Dialog/composer glass | Reject | `PRODUCT` and `VISUAL` |
| `b41e89eb` | Silent Windows update warning | Reject | `RELEASE`; Scient updater authority is separately protected |
| `7609495b` | Project grouping settings | Reject | `PRODUCT`/`VISUAL` |
| `0542abc7` | Mobile grouping | Reject | `PRODUCT` |
| `719c905e` | Mobile grouping setting | Reject | `PRODUCT` |
| `315b2738` | Connection-failure dedupe | Reject | `EQUIV` |
| `3afb4a9e` | Sidebar grouped filtering | Reject | `PRODUCT`/`VISUAL` |
| `57100fba` | Sidebar project actions | Reject | `PRODUCT`/`VISUAL` |
| `9d9208ce` | Picker project groups | Reject | `PRODUCT`/`VISUAL` |
| `9cbe50d1` | Toolbar styling | Defer | `VISUAL` |
| `97985489` | Tooltip icon color | Defer | `VISUAL` |
| `88c69fff` | Update preflight version | Reject | `RELEASE` |
| `ddd5a46f` | Sidebar v2 polish | Reject | `BROAD` and `VISUAL` |
| `b3e51317` | Mobile grouping labels | Reject | `PRODUCT` |
| `79fe11bc` | Preview color controls/grouping | Defer | `VISUAL`; grouping sub-lane is `PRODUCT` |
| `edb12401` | Nightly favicons | Reject | `RELEASE`/branding |
| `91dfe60a` | Thread loading flash | Defer | `VISUAL`; requires interactive proof |
| `193e3c62` | Warm-thread settlement | Defer | `LESSON`; no isolated current Scient repro |
| `6ef7aa83` | Composer alignment/glass | Defer | `VISUAL` |
| `ce467da9` | iOS Git overlay | Reject | `PRODUCT` and `VISUAL` |
| `67a7b1a1` | Composer glass fallback | Reject | `PRODUCT` and `VISUAL` |
| `51672b6e` | Collapse large diffs | Reject | `EQUIV`; Scient owns compact changed-file/diff behavior |
| `2f41c073` | New-thread checkout inheritance | Reject | `EQUIV`; Scient PR #118 owns new-thread workspace routing |
| `fc3f78f5` | Branch-mismatch banner | Defer | `VISUAL` |
| `6b9a5987` | Claude skills picker | Reject | `EQUIV`; Scient has a first-party skill system and picker |
| `bb38c332` | Direct settled-thread access | Reject | `EQUIV`; current routing preserves direct thread access |
| `202e5609` | Thread snoozing | Reject | `PRODUCT`; no accepted Scient requirement |
| `5d173547` | Clerk/Expo packages | Reject | `PRODUCT`/dependency maintenance |
| `15e875a2` | Message contrast | Defer | `VISUAL`/appearance-dependent accessibility |
| `f7cc7764` | Model picker layout | Defer | `VISUAL` |
| `a7ee3092` | PR label hover | Defer | `VISUAL` |
| `ece05087` | Glass hover artifacts | Reject | `PRODUCT` and `VISUAL` |
| `41a430a8` | Claude Opus 5 | Defer | Active Scient PR #123 owns the provider/model seam |
| `38cfc25e` | Diff collapse-all | Defer | Useful interaction, but active PR #127 overlaps and browser proof is required |
| `5719e8ac` | Fast-mode bolt | Reject | Quality 4/5; `EQUIV` and better: Scient already uses a bolt with labels and tests |

## Ranked Result

No T3 change qualifies for automatic adaptation. The highest-value unlanded
concepts are diff collapse-all, warm-thread settlement, and lightweight
connection probing, in that order. The first overlaps an active diff lane and
requires interactive validation; the latter two lack a current reproducible
Scient gap and touch lifecycle behavior. Opus 5 is already owned by active PR
#123. All other commits are equivalent, visual, donor-product-specific,
release-specific, or too broad.

The reference boundary may be recorded as
`5719e8ac4020dda0e375ef61d044b61f55a0df8a`; this does not make T3 a maintained
upstream, integration base, or ongoing monitoring obligation.
