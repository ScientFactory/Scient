# Upstream Review: Scient Desktop And Synara, 2026-07-28

Status: Draft
Owner: Yaacov
Created: 2026-07-28
Last updated: 2026-07-28
Purpose: Records the complete Synara review from the accepted July 26 checkpoint through the official tip observed on July 28.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Owned head inspected: `ef9f5e8aa635f57df3cd7a5920828923ce6babef`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Documented `reviewedThrough`: `8ea6da0a0715c69f7b744fd4c8b38d698ab7687e`
- Last tip observed by the intake automation: `8ea6da0a0715c69f7b744fd4c8b38d698ab7687e`
- Official tip fetched: `b989c1da95ba97fb285b62e956a04c1a16067356`
- Latest stable release observed: `v0.6.3`, peeled to `d958a9e583377a30cf4d97fb4c5e1d834eafbf92`
- Complete and daily range: `8ea6da0a0715c69f7b744fd4c8b38d698ab7687e..b989c1da95ba97fb285b62e956a04c1a16067356` (21 commits)
- Review evidence: fetched commit graph, per-commit subject/path/stat inspection, focused patches for candidate and protected lanes, current Scient source/tests, and refreshed live PR/worktree overlap inventory.

## Review Depth And Boundaries

Every commit in the complete contiguous range received a disposition below.
Mixed commits retain a parent row and are decomposed in the sub-lanes. This is
source-intake evidence, not a claim that donor code was executed or completely
audited. No donor or Scient UI was rendered. No computer use, browser
automation, screenshots, geometry checks, visual tests, or manual UI acceptance
were performed.

T3 Code was also inspected read-only through
`a148e08197fc38b24e59c10c7cd5ba06dd182dab` for the scheduled product report.
That scan does not advance a repository checkpoint: current Scient policy keeps
T3 trigger-driven and reference-only, with the durable review boundary at
`bf76535fe4da71d8de7b8bd5ffa0d2086b7af8d0`.

## Complete Synara Commit Ledger

| Official commit | User or operational effect | Donor quality | Scient fit and portability | Difficulty and protected risk | Disposition |
|---|---|---|---|---|---|
| `b3fc9783` | Avoids transferring four full patches just to show working-tree totals; also applies a broad React Compiler sweep. | 4/5; strong server-side stats seam, overly broad parent. | Stats fit is high and adaptable; compiler sweep has low fit. | Medium; RPC/contracts are bounded, UI sweep is appearance-sensitive. | **Adapt stats; reject compiler sweep.** |
| `1ab8778d` | Quarantines late unblock deliveries after interrupted turns. | 5/5; careful lifecycle tests. | Useful lesson, but Scient lacks the donor command-journal seam. | Hard; provider/session lifecycle and active overlap. | **Defer.** |
| `b55c5827` | Adds exclusive SQLite locking and subagent transcript behavior. | 4/5; coherent but coupled. | Low direct portability; Scient uses a different storage and transcript model. | Very Hard; storage, concurrency, lifecycle, and presentation. | **Defer.** |
| `c851e1ce` | Adds user customization for donor Void Spaces. | 3/5; complete for donor product. | Conflicts with Scient project authority; presentation-only value. | Hard; donor product/storage and visual proof. | **Reject.** |
| `a897cbe6` | Lazily initializes startup work and cleans artifacts. | 4/5; useful performance intent, broad implementation. | Some concepts fit; direct portability is low. | Very Hard; provider, process, storage, route preloading, overlap. | **Defer.** |
| `94b59220` | Makes physical Ctrl-minus zoom out reliably on Windows, including embedded browser focus. | 5/5; small, cross-surface, well tested. | High concept fit; bounded adaptation into existing Scient shortcuts. | Easy; nonvisual keyboard behavior with focused tests. | **Adapt.** |
| `bb34f163` | Adds a queue/steer preference. | 4/5; solid donor implementation. | Scient already owns queue/steer behavior and coverage. | Medium; donor settings and composer assumptions. | **Reject as equivalent.** |
| `dea03edb` | Polishes composer menus and controls. | 4/5; visually coherent. | Presentation ideas may fit; code portability is low. | Medium; visual and interactive acceptance required. | **Defer.** |
| `13f7aad1` | Makes completion notifications easier to read. | 4/5; good parsing/presentation intent. | Medium concept fit; current Scient owns its work-log model. | Medium; appearance and parsing proof required. | **Defer.** |
| `94651068` | Improves provider reconnect status. | 4/5; reasonable lifecycle handling. | Potential gap, but provider/session seams are actively owned elsewhere. | Hard; protected lifecycle and PR overlap. | **Defer.** |
| `e6d9c6d9` | Prevents stale live projections. | 4/5; broad state repair. | Concept fits, direct portability is low. | Very Hard; projection architecture and lifecycle. | **Defer.** |
| `728c1a3f` | Shows live tool activity more consistently. | 4/5; useful donor UX. | Presentation concept only; Scient has an owned work-log model. | Hard; broad state plus visual acceptance. | **Defer.** |
| `23b85cd7` | Refines settings and elevated surfaces. | 3/5; competent presentation work. | Low code portability. | Medium; visual and permission-adjacent surfaces. | **Defer.** |
| `997648e8` | Releases 0.6.2 and bundles small exactness fixes. | 3/5; mixed release commit. | Release authority does not port; minor fixes have no proven Scient gap. | Hard as a parent; packaging and presentation. | **Reject parent; defer notification lesson.** |
| `68e2e311` | Raises release-build heap limits. | 3/5; donor-specific build fix. | No demonstrated Scient build gap. | Hard; packaging/release authority and active overlap. | **Reject.** |
| `35ccf57b` | Hardens turn attribution, interruption, provider control, checkpoints, and replay. | 5/5; extensive reliability work. | High lesson value, low direct portability. | Very Hard; 38 files across providers, approvals, storage, lifecycle. | **Defer.** |
| `8f0e1eb7` | Adds revert rescue, admission ordering, and compensation. | 5/5; strong failure-recovery design. | Valuable concepts, but tightly coupled to donor state. | Very Hard; data loss, concurrency, recovery, permissions. | **Defer.** |
| `cd092c0d` | Corrects admission priority versus admissibility. | 5/5; focused audit follow-up. | Depends on the deferred revert/admission architecture. | Very Hard; protected state and lifecycle dependency. | **Defer.** |
| `bfbfdeb0` | Reworks session orchestration, undo, generation leases, and provider handling. | 5/5; ambitious and well tested. | Low direct portability; overlaps active provider work. | Very Hard; 18 files across protected session/storage seams. | **Defer.** |
| `d958a9e5` | Releases Synara 0.6.3. | 3/5; release bookkeeping. | No Scient product behavior and no publication authority. | Hard; donor release-only. | **Reject.** |
| `b989c1da` | Resets a browser-test projection fixture. | 3/5; appropriate donor test repair. | No product gap; donor-only browser evidence. | Easy technically, prohibited and irrelevant locally. | **Reject.** |

## Mixed-Commit Sublanes

| Commit and sub-lane | User effect | Scient-native decision |
|---|---|---|
| `b3fc9783` server-side working-tree statistics | Opens the diff scope picker without fetching four complete unified patches merely to count lines. | **Adapt.** Add a narrow server/RPC statistic contract while retaining Scient's existing diff rendering and scope authority. |
| `b3fc9783` React Compiler sweep | Reworks memoization and component shapes across visible surfaces. | **Reject.** Broad, appearance-sensitive, and not justified by a specific Scient defect. |
| `997648e8` release and what's-new material | Publishes donor 0.6.2. | **Reject.** Donor publication authority never transfers. |
| `997648e8` compiler/parser/test exactness | Removes a compiler-sensitive default parameter, guards one notification parser, and updates donor browser fixtures. | **Defer parser lesson; reject the rest.** No current reproducible Scient gap, and UI/browser proof is outside this lane. |
| `35ccf57b` turn delivery and interruption | Prevents late provider delivery from escaping the interrupted turn and bounds interruption. | **Defer.** Retain the invariant; require a focused Scient repro after active provider lanes settle. |
| `35ccf57b` provider command attempts and locking | Serializes and bounds provider-control attempts. | **Defer.** Protected process/provider ownership and active overlap. |
| `35ccf57b` checkpoint and replay ordering | Validates checkpoints and working directories and hardens replay order. | **Defer.** Storage, approval, and recovery authority require dedicated evidence. |
| `8f0e1eb7` revert rescue and compensation | Preserves recoverability when revert/admission steps fail. | **Defer.** Strong learn-only evidence until Scient proves the same state-machine gap. |
| `cd092c0d` priority/admissibility audit | Keeps urgent work from bypassing admission requirements. | **Defer.** Correct principle, dependent on the unowned donor admission model. |
| `bfbfdeb0` three-way undo | Makes undo state explicit across success, absence, and failure. | **Defer.** High value but protected persistence/recovery breadth. |
| `bfbfdeb0` generation leases and lifecycle reconciliation | Prevents stale sessions from retaining or mutating current ownership. | **Defer.** Requires a Scient-specific concurrency repro and provider-lane isolation. |

## Intake Decision

Two independent nonvisual adaptations were selected from the complete range:
server-side working-tree statistics from `b3fc9783` and physical Windows
Ctrl-minus handling from `94b59220`. They are to remain separate Scient-native
draft PRs based on exact owned head
`ef9f5e8aa635f57df3cd7a5920828923ce6babef`. No donor commit or donor ancestry
is integrated, and `integrationBase` remains
`9be46c3ce6a7521b64436b7334bc6fce16e3cac4`.

No third candidate met the automatic lane: the remaining strong work is visual,
protected, broad, actively overlapping, dependent on donor architecture, or
insufficiently proven in current Scient. Publication details, exact candidate
heads, verification, independent reviews, and hosted CI belong in the draft PRs
and the run report rather than this pre-publication evidence record.

## Proposed Checkpoint

After maintainer acceptance of this review and the dependent desktop-state
change, the proposed repo-local checkpoint is:

- `reviewedThrough`: `b989c1da95ba97fb285b62e956a04c1a16067356`
- `reviewedAt`: `2026-07-28`
- `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`
- `updateMode`: unchanged as `divergent-cherry-pick`

Until both drafts are accepted, the authoritative documented Synara boundary
remains `8ea6da0a0715c69f7b744fd4c8b38d698ab7687e`.
