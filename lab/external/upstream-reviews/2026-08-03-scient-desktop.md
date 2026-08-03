# Synara Scheduled Review Continuation, 2026-08-03

Status: Draft
Owner: Yaacov
Created: 2026-08-03
Last updated: 2026-08-03
Purpose: Records the complete Synara continuation observed after the unfinished 2026-08-02 review evidence.
Doc type: Research evidence

## Scope

- Owned repository and branch: `ScientFactory/scient-desktop`, `main`
- Owned head inspected and used as the product-lane base: `3829e5dd82a4760184aabafa4c96127744ef79f2`
- Official repository and branch: `Emanuele-web04/synara`, `main`
- Documented `reviewedThrough` on accepted desktop `main`: `ab33931da4c8da884b1445244085f4eeee3eafb6`
- Earlier evidence in this draft PR: [`2026-08-02-scient-desktop.md`](2026-08-02-scient-desktop.md) covers `ab33931d..65f6684` (4 commits), but remains research evidence until accepted
- Last observed tip used only for the daily digest: `65f6684aa6ff88c8d57a9f11d541a54b41be1539`, recorded by the 2026-08-02 automation run
- Bounded observation: 2026-08-03; exact inspection times are recorded in the automation report and PR
- Current fetched tip: `928cfaa07778098518835062798365e4555070b7`
- Current stable release: `v0.6.5`, peeled to `fcf24599c165383e83d6f8b9981623468d071c98`; main is six commits ahead
- Full authoritative range: `ab33931d..928cfaa0` (35 commits)
- Already covered by accepted authoritative dispositions in that range: 0
- Commits re-inspected and dispositioned in this run: 35
- Daily continuation listed in this record: `65f6684..928cfaa0` (31 commits)
- Remaining undispositioned: 0
- Literal integration base: `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`

## Review Depth

Every commit in the complete 35-commit range received subject, parent, path,
statistic, focused or complete patch, dependency, migration, workflow, release,
protected-lane, current Scient implementation, current tests, pull-request,
branch, and worktree inspection. Broad parents remain visible and are
decomposed below; merge, release, test-only, formatting, visual, and equivalent
changes retain individual rows.

No donor or Scient UI was rendered. No browser automation, computer use,
screenshots, geometry checks, responsive or motion inspection, visual tests,
or manual UI acceptance were performed. Presentation, scroll, and image-quality
ideas remain recommendation evidence only.

## Daily Commit Ledger

| Source | Commit | What changes for users or operators | Quality and reason | Current Scient behavior and owning seam | Concept fit | Code portability | Steal difficulty | Risk and dependencies | Disposition | Implemented? | Recommendation |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Synara | `f5ec4b65` | Prevents malformed Pi extension display metadata from making the whole model catalog unavailable. | 4/5; the normalization and per-model isolation are good, but the first version incorrectly normalized lookup identity until `f41a68a2`. | Scient's `PiAdapter.listModels` maps raw name/provider metadata directly across a trimmed-string RPC contract, so one malformed extension row can fail the list. | High | High after including the later correction | Easy | Provider identity, registry resolvability, thinking metadata, and extension isolation | **Adapt; selected with `2f33cd70` and `f41a68a2`.** | Selected; final result recorded below | Reimplement one descriptor boundary that trims display fields, rejects invalid identities, and isolates each row. |
| Synara | `c47eee68` | Adds a cross-project Activity feed, persistent Done/Undo lifecycle, date buckets, filters, pinned rows, shared status controls, and a storage migration. | 4/5; coherent and well tested, but it is a 31-file product/storage change whose correction chain continues through much of the range. | Scient already owns a persisted, deduplicated Activity Center for background work and attention items; it does not own Synara's server-backed settled-thread feed or Done lifecycle. | Medium | Low | Very Hard | Competing information architecture, migration 088, multi-client convergence, visual hierarchy, accessibility, and later fixes | **Defer; decompose below.** | No | Make a human product/design decision between extending Scient's Activity Center and owning a second thread-feed lifecycle before any schema work. |
| Synara | `270a39ee` | Keeps the Activity surface toggle synchronized across tabs and animates responsive surface changes. | 4/5; correctly handles storage events and transitions, but it only exists with the donor Activity surface. | Scient persists Activity Center items, but has no Synara Activity/classic surface toggle. | Low until the parent is selected | Low | Hard | Cross-tab state, motion, reduced motion, focus continuity, and visual acceptance | **Defer with the parent Activity concept.** | No | Revisit only after selecting an owned Activity information architecture. |
| Synara | `2f33cd70` | Replaces a generic Pi fixture with the real trailing-whitespace OpenRouter model metadata that exposed the failure. | 4/5; realistic, focused regression evidence with no independent product behavior. | Scient has Pi discovery tests but no malformed extension-metadata regression. | High as proof | High | Easy | Test realism and keeping the resolvable identity unchanged | **Adopt as test evidence for the selected adaptation.** | Selected; final result recorded below | Preserve the concrete failure while adding blank and identity-resolvability cases. |
| Synara | `ac579280` | Replaces a segmented sidebar switcher with a described surface menu and moves Search/Activity into header chrome. | 3/5; polished and accessibility-aware, but the value is donor-specific visual hierarchy and copy. | Scient has its own sidebar header, surface routing, Search, and lower Activity Center. | Medium concept; low direct | Low | Hard | Visual density, focus, keyboard behavior, responsive width, branding, and screen-reader copy | **Defer.** | No | Inspect the owned header with human design and accessibility review before borrowing any hierarchy. |
| Synara | `bc11baa0` | Condenses Activity rows to two lines and renames settled work to Done. | 4/5; coherent information-density cleanup, but inherently visual and coupled to the unselected surface. | Scient Activity Center rows use status groups, timestamps, destinations, and attention copy rather than project/branch Done rows. | Medium | Low | Hard | Copy semantics, truncation, branch/project hierarchy, responsive layout, and visual proof | **Defer.** | No | Treat two-line task rows and Done terminology as design references only. |
| Synara | `9ff77314` | Adds recent-versus-project grouping and moves mark-all-read into an Activity filter menu. | 4/5; useful grouping with clear logic, but it introduces a different navigation model. | Scient groups Activity Center items by attention status and limits the preview; it has no project-scoped thread feed. | Medium | Low | Hard | Product grouping, current-project truth, discoverability, keyboard navigation, and visual acceptance | **Defer.** | No | Validate whether researchers need project filtering in the existing Activity Center before creating another feed. |
| Synara | `e615b5fe` | Reformats the browser-tool presentation map. | 2/5; deterministic formatting only, with no user or operational effect. | Scient owns a different browser catalogue and formatting baseline. | None | None | Easy | None beyond noisy lineage | **Reject.** | No | No intake. |
| Synara | `51a984cd` | Corrects Activity empty copy and expires a stale optimistic Done override after lost/reordered projection pushes. | 4/5; precise user-state correction and defensive convergence behavior. | Scient has no `settledAt` Activity override; its Activity Store has separate timestamp, replay, retention, and stale-attention reconciliation. | Low direct; useful state lesson | Low | Hard | Projection sequence, multi-client latency, stale local overrides, and dependency on the parent lifecycle | **Defer.** | No | Preserve the bounded-override lesson if Scient later adds an optimistic durable action. |
| Synara | `342c0fd4` | Makes pinned Activity rows obey the selected project scope. | 4/5; a focused filtering invariant with clear user effect. | Scient has no donor project-scoped Activity feed. | Low | None direct | Medium | Parent surface and filter semantics | **Defer with the parent.** | No | If project filtering is selected, apply one scope consistently to every row source. |
| Synara | `d297ca67` | Rewrites one settle-hook expression for React Compiler and lengthens the stale-override expiry. | 4/5 within the donor implementation, but it has no standalone capability. | Scient has neither the settle hook nor this override. | None now | None | Easy | Dependent compiler and lifecycle assumptions | **Reject as dependent implementation maintenance.** | No | Retain only the general compiler-compatibility lesson. |
| Synara | `10f30d7e` | Keeps approval/error/running urgency visible when a thread is in Done. | 4/5; prevents a real attention-state loss, but correctness is presentation-dependent. | Scient's Activity Center already distinguishes `needs_attention`, `in_progress`, and `recent`; it does not dim threads through a Done shelf. | Medium concept | Low | Hard | Status precedence, copy, color, focus, screen-reader output, and parent lifecycle | **Defer.** | No | Preserve urgent-state precedence in any future completed-work grouping. |
| Synara | `6bfed30e` | Updates a browser test to find the Search icon by accessible name. | 4/5 as accessibility-aware test maintenance, with no independent product behavior. | Scient's Search placement and browser tests differ. | Low | Low | Easy | Donor DOM assumptions and prohibited local browser execution | **Reject as donor test maintenance.** | No | Continue preferring accessible selectors in owned tests. |
| Synara | `24a7039b` | Falls back to all projects when the selected Activity scope disappears. | 4/5; a precise stale-selection recovery with focused logic proof. | Scient has no project-scoped Activity feed; its current persisted store validates and normalizes stale records. | Medium as a state invariant | Low | Medium | Deleted projects, stale storage, cross-tab changes, and parent surface | **Defer.** | No | Apply visible fallback whenever an owned persisted filter loses its target. |
| Synara | `1eb7b2cc` | Mixes scoped local-HTML preview, provider replay containment, test-query extraction, and browser/work-row presentation changes. | 4/5 as a parent; some sub-lanes are excellent, but the commit crosses 28 files and unrelated authorities. | Scient's local HTML capability is substantially stronger; deleted subagent tombstones and per-event worker containment already exist; Scient has no donor accepted-open-turn replay journal; presentation differs. | Mixed | Low as a parent | Very Hard | Browser filesystem/network authority, provider lifecycle, deleted data, startup recovery, and visual hierarchy | **Decompose: reject equivalents, defer absent-journal and visual lessons.** | No | See the named sub-lanes below; do not import the mixed parent. |
| Synara | `7e055bb2` | Merges donor main into the Activity follow-up branch and resolves one query-file overlap. | 2/5; merge bookkeeping with no independently selectable behavior. | Scient does not import donor ancestry and reviews the resulting sub-lanes directly. | None | None | Easy | Misrepresenting merge ancestry | **Reject as merge-only.** | No | No intake. |
| Synara | `32b85ec5` | Adds Activity shortcut/filter refinements, fail-closed migration handling, durable optimistic sequence reconciliation, picker/sidebar changes, and transcript tests. | 4/5; thoughtful correction work, but another 31-file mixed product/migration/UI commit. | Scient has separate keybindings, Activity Center, migration discipline, project picker, and transcript implementation; no donor settled lifecycle exists. | Medium by sub-lane | Low | Very Hard | Migration correctness, command sequence, multi-client replay, shortcuts, settings defaults, visual hierarchy, and browser proof | **Defer; decompose below.** | No | Carry the fail-closed migration and sequence-acknowledgement lessons into any independently authorized owned feature. |
| Synara | `160f8426` | Unblocks the preceding PR with exact-optional fixes, formatting, and test adjustments. | 3/5; correct maintenance, but no new standalone user behavior. | Scient does not contain the donor PR's surface. | None | None | Easy | Dependency on the broad parent | **Reject as verification-only follow-up.** | No | No intake. |
| Synara | `e80af937` | Serializes image intake, safely inspects and downsizes oversized raster images, limits decoded pixels, moves work to a worker when possible, and preserves local-image provider inputs. | 4/5; strong bounded resource design and broad tests, but 26 files couple decode quality, composer state, provider contracts, and multiple entry points. | Scient currently rejects images above the 10 MiB provider cap; it has persisted composer attachments and local image preview but no automatic optimization pipeline. | High concept | Medium | Very Hard | Decode bombs, memory, cancellation, thread switching, capacity races, worker fallback, visual legibility, provider payloads, and 26-file breadth | **Reimplement later.** | No | Build an owned image-preparation seam only with human legibility/appearance proof and focused lifecycle/performance tests. |
| Synara | `d55e19ec` | Merges the Activity feature branch. | 2/5; merge wrapper with no independent behavior beyond the already listed commits. | Scient does not import donor merge ancestry. | None | None | Easy | Lineage confusion | **Reject as merge-only.** | No | No intake. |
| Synara | `39b1a532` | Stabilizes Activity ordering, urgent indicators, hover-card metadata, and sidebar state glyphs. | 4/5; substantial correction coverage, but value remains tied to visual hierarchy and the unselected Activity lifecycle. | Scient owns status-prioritized Activity Center grouping and different hover/sidebar surfaces. | Medium | Low | Hard | Sorting stability, current time, status precedence, hover/focus, responsive density, and browser proof | **Defer.** | No | Reuse only named ordering/status invariants on an owned surface. |
| Synara | `5ee408be` | Keeps a thread hover card visibly active while its source row is active. | 3/5; small and understandable, but entirely appearance-dependent. | Scient has different row and hover-card ownership. | Low | Low | Medium | Hover/focus state, contrast, and visual acceptance | **Defer.** | No | Validate the current owned active-state treatment visually before changing it. |
| Synara | `fe28ff17` | Restyles the sidebar surface picker. | 3/5; donor-specific polish without independently demonstrable Scient value. | Scient owns different surfaces and brand tokens. | Low | None direct | Hard | Brand identity, density, focus, responsive layout, and visual proof | **Reject.** | No | Do not import donor styling. |
| Synara | `aae78bb2` | Opens a new chat in the latest project relevant to the current Activity scope. | 4/5; good contextual continuity with focused tests. | Scient has no donor Activity scope; project selection follows current owned chat/sidebar logic. | Medium concept | Low | Hard | Project deletion, stale scope, split view, routing, and visual interaction proof | **Defer with the parent.** | No | If an owned filtered feed gains New Chat, make the target project explicit and test stale-project fallback. |
| Synara | `b071c5dd` | Improves transcript scroll settling and immediately aligns workspace-root metadata after local/worktree handoff. | 4/5; both sub-lanes are carefully tested, but one is geometry-dependent and the other is already stronger in Scient. | Scient immediately patches thread workspace state, refreshes the shell snapshot, and resolves cwd-bound surfaces through `resolveSharedThreadWorkspaceCwd`; transcript scrolling uses a different timeline. | High for the user outcomes; mixed current gap | Low direct | Hard | Scroll geometry/motion/user takeover; worktree identity, file/terminal authority, and handoff races | **Decompose: reject workspace sub-lane as equivalent/better; defer transcript sub-lane.** | No | Keep the current Scient workspace behavior; evaluate scroll settling only with human geometry and interaction proof. |
| Synara | `c2e53031` | Cancels native smooth scrolling and virtual-list bookkeeping when the user takes over the transcript. | 5/5; precise ownership behavior with focused logic and browser regressions. | Scient has its own timeline and scrolling implementation; no equivalent cancellation proof was found on the donor seam. | High concept | Low direct | Hard | Geometry, pointer/wheel/touch/keyboard input, virtual-list state, motion, and visual acceptance | **Reimplement later.** | No | Reproduce on Scient's current timeline, then design one cancellation token and verify with permitted human interaction/visual acceptance. |
| Synara | `fcf24599` | Publishes Synara 0.6.5 metadata, changelog, version bumps, and release-blocking test/type formatting. | 3/5; complete donor release bookkeeping, but no independently selectable Scient behavior. | Scient owns a separate protected release, package versions, changelog, and updater authority. | None | None | Hard | Release authority, packaging, provenance, and active draft #58 | **Reject as donor release-only.** | No | Do not copy donor version or release metadata. |
| Synara | `ee250ffc` | Merges donor main into the Pi fix branch. | 2/5; merge bookkeeping only. | Scient takes a bounded adaptation without donor ancestry. | None | None | Easy | Lineage confusion | **Reject as merge-only.** | No | No intake. |
| Synara | `f41a68a2` | Rejects Pi rows whose provider or model identity would change under trimming, preserving registry-resolvable slugs. | 5/5; it closes the subtle correctness flaw in the earlier normalization and adds exact regressions. | Scient's raw Pi mapping has no isolation boundary, but raw identities must remain exact for lookup. | High | High | Easy | Provider/model identity, slug stability, and extension omission behavior | **Adapt; required correction for the selected Pi lane.** | Selected; final result recorded below | Trim display metadata only; never silently normalize registry identities. |
| Synara | `fff93e1e` | Retargets transcript anchoring during streaming and limits Recent Activity to the current 04:00-based working day. | 4/5; strong focused logic plus extensive browser coverage, but the 358-line anchor rewrite remains appearance/geometry-sensitive and one browser case stays quarantined. | Scient has a different transcript timeline and Activity Center retention/grouping model. | High for stable streaming; low for the donor date policy | Low | Very Hard | Geometry, streaming growth, user takeover, virtualization, browser timing, time zones, and product date semantics | **Defer; decompose below.** | No | Reproduce transcript jitter on current Scient before a dedicated visual lane; do not import the 04:00 policy without product evidence. |
| Synara | `928cfaa0` | Merges the Pi metadata fix branch after the identity correction. | 2/5; no behavior beyond `f5ec4b65`, `2f33cd70`, and `f41a68a2`. | Scient records exact donor commits without importing merge ancestry. | None | None | Easy | Lineage confusion | **Reject as merge-only.** | No | Cite the three substantive commits only. |

## Mixed-Commit Sublanes

| Parent and sub-lane | Exact user or operational effect | Current Scient seam | Smallest Scient-native action | Proof required | Decision |
|---|---|---|---|---|---|
| `c47eee68` Activity feed presentation | Flat working feed, project filters, date buckets, pinned/Done rows, and new header/navigation hierarchy. | Persisted lower-left Activity Center plus owned sidebar/search/project navigation. | First decide whether researchers need a second thread feed or an extension of the existing center. | Human product, visual, keyboard, screen-reader, responsive, motion, empty/loading/error, and large-history review. | **Defer; automatically ineligible.** |
| `c47eee68` durable settle lifecycle | Adds `settledAt`, `thread.meta.update isSettled`, migration 088, optimistic Done/Undo, and multi-client convergence. | No owned settled-thread lifecycle. | Specify the user meaning, retention, concurrency, undo, deletion, and projection contract independently. | Migration/restart/rollback, multi-client command ordering, stale push, retention, data recovery, and human UI acceptance. | **Defer; migration and broad lifecycle.** |
| `c47eee68` shared status/action components | Keeps kanban and sidebar status/archive/PR chips aligned. | Scient has its own sidebar and kanban components. | Audit actual duplication before extracting an owned shared component. | Nonvisual component state tests plus human visual/accessibility review. | **Defer; no demonstrated current gap.** |
| `1eb7b2cc` local HTML preview | Allows local HTML with relative assets through a tokenized custom Electron protocol. | Scient already has server-issued HMAC capability proof, canonical source authority, per-tab isolated sessions, sealed/reviewed network policy, replacement fencing, file watching, and extensive reliability tests. | None. | Existing Scient protected-lane evidence is stronger than the donor design. | **Reject as equivalent/inferior.** |
| `1eb7b2cc` deleted subagent replay | Avoids re-creating a soft-deleted native child and keeps later ingestion moving. | Current `ProviderRuntimeIngestion` consults refreshed tombstones, returns the deleted child, allows only terminal lifecycle settlement, rejects later content/metadata/child creation, and has focused regressions. | None. | Existing 129-test focused baseline includes tombstone refresh and continued-worker behavior. | **Reject as equivalent/better; the provisional lane stopped with zero edits.** |
| `1eb7b2cc` accepted open-turn startup replay | Makes one unreplayable journal row log a warning instead of blocking backend startup. | Scient has no durable `ProviderRuntimeEventRepository`, accepted-open-turn ledger, consumer cursor, or startup replay path at the inspected base. | Do not invent the donor journal. Reassess only if Scient independently adds durable provider delivery/replay. | Architecture decision, migrations, cursor/high-water correctness, interrupt propagation, crash-at-every-boundary, retention, redaction, and rollback. | **Defer as a future design lesson; no current seam.** |
| `1eb7b2cc` browser/work-row presentation | Simplifies labels and activity metadata. | Scient owns a different browser catalogue, activity hierarchy, icons, and timeline. | Compare current owned states before any coherent presentation change. | Human visual/interaction/accessibility proof across running, completed, failed, cancelled, and permission states. | **Defer; automatically ineligible.** |
| `32b85ec5` migration and optimistic sequence | Stops migration 088 from swallowing real SQL errors and acknowledges Done/Undo by durable sequence. | Scient migration doctrine is fail-closed, but the underlying Activity migration/command does not exist. | Apply these invariants if an owned feature later adds the schema and command. | Lock/read-only/I/O failures, idempotence, command replay, reconnect batching, and multi-client races. | **Defer with the unselected parent.** |
| `32b85ec5` UI, shortcuts, picker, and transcript | Adds Activity shortcuts, refines filters/pickers/sidebar, and changes transcript/settings behavior. | Different owned surfaces and defaults. | No automatic action. | Human visual, keyboard, screen-reader, responsive, motion, and product-copy acceptance. | **Defer; automatically ineligible.** |
| `e80af937` bounded image preparation | Inspects dimensions before decode, caps source/render pixels, serializes work, and resizes in a worker or bounded fallback. | Composer image intake and attachment limits. | Build an owned isolated preparation service, not a 26-file port. | Decode bombs, EXIF/orientation, alpha/color, output size, cancellation, memory, concurrency, malformed files, and human legibility. | **Reimplement later; automatically ineligible today.** |
| `e80af937` provider/composer plumbing | Preserves local-image versus data-URL provider inputs and waits for async intake before send. | Composer drafts, Codex adapter/manager, orchestration contracts, AppSnap, browser, and kanban entry points. | Specify one attachment lifecycle and provider contract after preparation is proven. | Thread switch/disposal, retry, capacity races, persisted hydration, provider fallback, privacy, and cross-provider smoke. | **Defer; too broad and protected.** |
| `b071c5dd` workspace handoff/root | Updates the local store immediately and uses the materialized worktree for cwd-bound surfaces. | `useThreadWorkspaceHandoff` already patches the store, syncs the shell, and `ChatView` resolves shared thread cwd for file/terminal/Git surfaces. | None. | Current source and focused handoff tests. | **Reject as equivalent/better.** |
| `b071c5dd` transcript settling | Uses staged scroll settlement to converge after late layout changes. | Different current timeline. | Reproduce on current Scient before an owned fix. | Geometry, virtualization, streaming, replaced conversations, direct input, and human visual acceptance. | **Defer; automatically ineligible.** |
| `fff93e1e` streaming anchor | Retargets the same motion as the tail grows. | Different current timeline. | Dedicated owned scroll lane after repro. | Browser geometry/motion/input matrix and human acceptance. | **Defer; automatically ineligible.** |
| `fff93e1e` 04:00 Recent boundary | Defines a working day for Activity recency. | Scient Activity Center groups by status and retains bounded items for 30 days. | Establish researcher need and time-zone semantics first. | Time zones, DST, travel, locale, long-running work, and product validation. | **Reject as an unowned donor product policy for now.** |

## Ranked Intake Decision

1. The Pi descriptor boundary across `f5ec4b65`, `2f33cd70`, and
   `f41a68a2` ranks first: a confirmed Scient failure boundary, direct model
   discoverability benefit, high-quality corrected donor behavior, two-file
   scope, high portability, no active exact-file overlap, and complete
   nonvisual proof.
2. Oversized-image preparation ranks second for user benefit, but it is a
   26-file composer/provider/lifecycle change whose correctness includes image
   legibility and appearance; it is automatically ineligible.
3. Transcript user-takeover and streaming-anchor work ranks next, but every
   qualified proof depends on geometry, motion, browser interaction, and human
   visual acceptance.
4. The Activity feed/Done lifecycle offers substantial task-orientation value,
   but it competes with Scient's existing Activity Center and requires product
   direction, a migration, broad UI work, and a long correction chain.
5. The deleted-subagent replay sub-lane was provisionally assigned, then its
   clean 129-test baseline established that Scient already owns equivalent or
   stronger behavior. The separate startup-journal behavior has no current
   Scient seam, so the lane stopped without edits or a commit.
6. Browser presentation and remaining Activity refinements are visual or
   dependent. Release, merge, formatting, donor-style, and equivalent changes
   are rejected.

## Intake Decision

One bounded Scient-native adaptation is selected: isolate Pi model-descriptor
metadata at the current adapter boundary while keeping lookup identities exact.
No donor commit is cherry-picked and no donor ancestry, identity, storage,
credential model, session model, migration, release authority, browser/UI
surface, or automation is adopted.

Implementation evidence:

- Branch: `fix/upstream-pi-model-metadata-20260803`
- Exact base: `3829e5dd82a4760184aabafa4c96127744ef79f2`
- Commits: `e7a281dd33b3bc5cbac3e1e7035fe98c36cd0cdc` and security-review
  follow-up `32eb90fd804d7e9feeaa06b20e97c20c70a98601`; final head
  `32eb90fd804d7e9feeaa06b20e97c20c70a98601`
- Worktree: isolated outside the shared workspace at
  `/Users/yaacov/REPOs/ScientFactory-worktrees/scient-desktop-upstream-pi-model-metadata-20260803`
- Production change: `apps/server/src/provider/Layers/PiAdapter.ts` adds one
  descriptor boundary that normalizes extension-owned display metadata,
  preserves exact registry identities, omits malformed identities, and keeps
  supported thinking metadata
- Regression change: `apps/server/src/provider/Layers/PiAdapter.test.ts` adds
  exact cases for valid identity, display trimming, blank-display fallback,
  blank identity, unresolvable trimmed identity, and thinking metadata
- Diff: 2 files, 170 additions, 22 deletions (production +50/-22; tests +120)
- Focused baseline: 6/6 Pi adapter tests passed
- Final nonvisual verification: 13/13 focused Pi adapter tests; server
  typecheck; scoped formatting; scoped lint with zero errors and six inherited
  warnings; full server suite with 2,959 passing and 10 skipped tests across
  233 passing and 2 skipped files; server build; and `git diff --check` passed
- One full-suite attempt with an incomplete shell `PATH` failed ACP child spawn
  and the native `lsof` test; the complete rerun with the configured runtime
  paths passed, so this was an execution-environment failure, not a source
  regression
- The implementation history records all three donor revisions and MIT
  provenance. The owning server package received its full suite and build; the
  root aggregate suite was not duplicated in this isolated lane
- Independent security review found that a slash-bearing extension provider ID
  could serialize to a slug that selected a different provider/model. The
  follow-up omits that unroundtrippable identity and adds the exact collision
  boundary regression before publication
- No browser, computer use, screenshots, geometry, visual tests, manual UI
  acceptance, credentials, persistence, release authority, or live data were
  used or changed

The provisional provider-replay lane stopped at its clean exact-base baseline:
two focused files and 129 tests passed, current tombstone behavior proved
equivalent or stronger, and the accepted-open-turn journal seam does not exist.
Its isolated worktree and branch remain clean at the exact owned base with no
diff or commit.

## Resulting State

- Complete contiguous disposition evidence in this unfinished draft sequence extends through `928cfaa07778098518835062798365e4555070b7`.
- Full revalidated range: `ab33931d..928cfaa0` (35 commits), zero remaining.
- Daily delta: `65f6684..928cfaa0` (31 commits), every commit explicitly listed above.
- Proposed repo-local `reviewedThrough`: `928cfaa07778098518835062798365e4555070b7`.
- Accepted repo-local checkpoint while this evidence remains draft: `ab33931da4c8da884b1445244085f4eeee3eafb6`.
- Literal `integrationBase`: unchanged at `9be46c3ce6a7521b64436b7334bc6fce16e3cac4`.
- Selected intake: Pi descriptor containment; implemented independently through desktop head `32eb90fd804d7e9feeaa06b20e97c20c70a98601`, pending final recertification and draft publication.
- Rolling issue: `ScientFactory/scient-desktop#15` remains open until the dependent checkpoint is accepted.
