# Desktop Fix Inbox

Status: Active
Owner: Yaacov
Created: 2026-07-25
Last updated: 2026-07-30 (DF-015 added)
Purpose: Captures observed Scient desktop problems that need a bounded diagnosis or fix but are not being implemented immediately.
Doc type: Planning note

## Document Rules

Use this file for concrete desktop problems whose current behavior has been
observed and whose desired behavior is understood well enough to investigate.
Raw product ideas belong in [Idea Inbox](idea-inbox.md), and accepted product
direction belongs in the relevant product, design, architecture, or planning
document.

An entry records work that may need attention. It does not establish product
truth, priority, implementation approval, release scope, or permission to
modify `scient-desktop`. Keep diagnosis and evidence truthful about what has
and has not been reproduced or verified.

When a fix is merged, remove its open entry and preserve the completion record
in the linked pull request and Git history. Do not turn this file into a second
roadmap or a permanent archive of completed work.

## Entry Shape

Each open fix should record:

- a stable `DF-###` identifier and short title;
- the observed and expected user-visible behavior;
- impact and available reproduction evidence;
- diagnosis state and the smallest plausible implementation seam;
- validation needed before the fix is considered complete;
- date added and related task, issue, or pull request when available; and
- whether Yaacov has explicitly approved implementation.

## Open Fixes

### DF-002 — Show CLI Update Only For A Confirmed Available Update

- **Date added:** 2026-07-25.
- **Status:** Diagnosed and awaiting explicit implementation approval.
- **Observed behavior:** In Settings > Providers > Provider tools > Installed
  CLIs, an **Update** button can appear even when Scient has not established
  that a newer version exists. In the supplied screenshot, Cursor and
  Antigravity show **Update** while the same card says “No provider updates
  detected.” The button therefore reads as a confirmed update even though the
  underlying result may only mean that Scient knows how to run that provider's
  updater.
- **Expected behavior:** Show **Update** only after a successful, current check
  has confirmed that the installed version is older than an available version.
  An unknown, unavailable, failed, stale, or unsupported latest-version check
  must not produce an Update button. Keep “can execute an updater” separate
  from “an update is available,” and keep the card summary and row actions in
  agreement.
- **User impact:** A false-positive Update action can make users run provider
  installers unnecessarily, erodes trust in the status shown by Settings, and
  can create avoidable provider downtime or version churn.
- **Diagnosis:** Inspected the authoritative current `scient-desktop`
  `origin/main` on 2026-07-25. The card summary uses
  `getVisibleProviderUpdateStatuses`, which accepts only a
  `behind_latest` advisory with a known latest version. The Installed CLIs row
  instead permits `shouldOfferProviderUpdateAction` when the advisory is
  `unknown`, provided an update command exists, and then explicitly renders
  the button for `showProviderUpdateStatus || status === "unknown"`. Cursor
  always exposes a native `cursor-agent update` command, and native-provider
  update capability can exist without latest-version metadata. This makes
  updater capability look like confirmed update availability.
- **Smallest plausible implementation seam:** Make the Installed CLIs action
  gate consume the same confirmed-availability predicate as the summary,
  while treating an already queued or running update as a separate transient
  state. If a provider has only a self-updater and no reliable check-only
  mechanism, do not label or expose that capability as an available update.
  Preserve explicit provider Connect, setup, custom-binary, and managed-runtime
  flows.
- **Validation needed:** Unit coverage for `current`, `behind_latest`, and
  `unknown` advisories with and without update commands; Settings component or
  browser coverage proving that summary text and row buttons cannot
  contradict each other; failed, stale, and disabled-check states; queued,
  running, succeeded, and unchanged transitions; keyboard and accessible-name
  checks; and focused regression coverage for Cursor, Antigravity, and
  Scient-managed runtimes.
- **Evidence:** User-supplied Settings screenshot from 2026-07-25 showing the
  contradictory summary and row actions.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records diagnosis and
  expected behavior only.

### DF-003 — Raise And Speed Up The "Add Project" Toolbar Tooltip

- **Date added:** 2026-07-27.
- **Status:** Captured; not yet diagnosed.
- **Observed behavior:** Hovering the "Add project" toolbar button (the
  folder-with-plus icon) shows an "Add project" tooltip. The tooltip sits
  slightly low relative to the button and takes a small beat to appear on
  hover.
- **Expected behavior:** Make just two adjustments — position the tooltip a
  little higher, and shorten its hover-open delay so it appears a little
  faster. Keep the label, trigger, placement side, and all other tooltip
  behavior unchanged.
- **User impact:** Minor interaction polish. Low, but the current position and
  delay make the affordance feel slightly sluggish and misaligned.
- **Diagnosis:** Not yet investigated. Plausible seam: the tooltip's vertical
  offset/placement and its hover-open delay for this toolbar button. Before
  changing the delay, confirm whether it is set globally on a shared tooltip
  primitive or per-instance here, so the change does not silently retime every
  tooltip in the app when only this one should move.
- **Validation needed:** Confirm the "Add project" tooltip now sits slightly
  higher and opens slightly sooner; confirm no unintended change to other
  tooltips' position or timing (unless a shared-primitive change is
  intentional); keyboard-focus trigger and accessible name unchanged.
- **Evidence:** User-supplied screenshot from 2026-07-27 showing the
  "Add project" tooltip beside the folder-with-plus toolbar icon.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records the requested change
  and expected behavior only.

### DF-004 — Clicking A File Reference From Another File's Render Opens The Wrong Path (ENOENT)

- **Date added:** 2026-07-27.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** Some files still do not open when clicked. In the
  supplied example, clicking a file reference that appeared in the rendered
  output of another file did not open the target file. Instead the viewer
  showed a resolution error: `workspaceFileSystem.realpath failed for
  /Users/yaacov/REPOs/ScientFactory: ENOENT: no such file or directory,
  realpath '/Users/yaacov/REPOs/ScientFactory/.plan/agentGateway/mcpInjection.ts'`.
  The breadcrumb rendered as `ScientFactory > .plan > agentGateway >
  mcpInjection.ts`.
- **Expected behavior:** A file reference clicked from within another file's
  rendered content should resolve against the correct base directory (the repo
  or document that produced the reference) and open the real file, or show a
  clear "file not found" state — not resolve a relative path against the wrong
  workspace root and surface a raw `realpath`/ENOENT error.
- **User impact:** Broken navigation between files; clickable references can
  dead-end on a raw filesystem error instead of opening or failing gracefully.
- **Diagnosis:** Not yet investigated. Note for the later look: the failing
  path was resolved against the top-level workspace directory
  (`/Users/yaacov/REPOs/ScientFactory`) rather than a repo beneath it (e.g.
  `.../scient-desktop`), so the likely seam is how relative file references
  from rendered content pick their base/root before `workspaceFileSystem.realpath`.
- **Validation needed:** Reproduce with a file reference embedded in another
  file's render; confirm correct base-directory resolution across repos under
  the workspace root; confirm a missing target yields a friendly not-found
  state rather than a raw ENOENT string.
- **Evidence:** User-supplied screenshot from 2026-07-27 showing the ENOENT
  `realpath` error in the file viewer.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.

### DF-005 — "Run Dev Server" Confirm Dismisses But Nothing Opens

- **Date added:** 2026-07-27.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** Opening the top HTML entrypoint in the artifact list
  (`apps/web/index.html`, labeled "Web app source · runs a dev server") shows a
  dialog: "This HTML entrypoint needs its development server. Run this command?
  `npm run dev`, Working directory:
  `/Users/yaacov/REPOs/ScientFactory/scient-desktop/apps/web`" with Cancel and
  Confirm. Pressing **Confirm** dismisses the dialog/card as if it succeeded,
  but nothing actually opens — no dev-server preview appears (no visible change
  beyond the card disappearing).
- **Expected behavior:** Confirming should start the dev server and open its
  preview, or surface a clear error/progress state if it cannot. It must not
  silently no-op while looking like it worked.
- **User impact:** A primary "open the web app" path appears to succeed but
  produces nothing, leaving the user with no preview and no error.
- **Diagnosis:** Not yet investigated. Likely related to the HTML preview /
  dev-server launch pipeline in `scient-desktop` (the recently merged artifact
  preview work). Later look should confirm whether the dev server actually
  starts, whether the preview tab/URL is ever opened, and whether a
  readiness/failure state is being swallowed.
- **Validation needed:** Reproduce with `apps/web/index.html`; confirm Confirm
  either opens a working preview or reports a clear failure; cover the case
  where `npm run dev` fails or the port never becomes ready.
- **Evidence:** User-supplied screenshot from 2026-07-27 showing the dev-server
  confirmation dialog for `apps/web/index.html`.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.

### DF-006 — Contradictory Preview Toasts On The Graceful-Failure HTML Fixture

- **Date added:** 2026-07-27.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** Opening the last HTML in the artifact list
  (`docs/manual-testing/html-preview/fixture-pack/broken-page.html`, titled
  "Graceful failure fixture", which intentionally references a missing image)
  shows conflicting toasts across attempts: in one, an error toast **"Could not
  preview HTML"**; in another, a warning toast **"HTML preview opened with
  limits"** — while the page text does render (heading plus "Visible after the
  missing resource", with a broken-image placeholder).
- **Expected behavior:** For a page that renders with only a missing sub-resource,
  show a single consistent, truthful status. If the preview did open in a
  degraded mode, "opened with limits" is appropriate and "Could not preview
  HTML" should not also appear; the two messages should not contradict each
  other for the same outcome.
- **User impact:** Contradictory success/failure messaging erodes trust in the
  preview and makes it unclear whether the artifact actually opened.
- **Diagnosis:** Not yet investigated. Likely in the HTML preview status/toast
  logic from the recently merged artifact preview pipeline in `scient-desktop`.
  Later look should determine which message is correct for a missing-sub-resource
  page and why both can fire.
- **Validation needed:** Reproduce with the `broken-page.html` fixture; confirm
  a single consistent status for the missing-resource-but-renders case; check
  the fully-unpreviewable case still reports a clean failure.
- **Evidence:** Two user-supplied screenshots from 2026-07-27 showing the same
  "Graceful failure fixture" preview with a "Could not preview HTML" toast in
  one and an "HTML preview opened with limits" toast in the other.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.

### DF-007 — Images Frequently Fail To Display Or Open ("Couldn't Open This Image")

- **Date added:** 2026-07-27.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** Images often cannot be seen or opened. Instead of
  rendering, the image shows a card reading "Couldn't open this image — The
  file may have moved or be unavailable." with a **Download** button. In the
  supplied example, several images in a single rendered message all failed this
  way at once. Reported as a recurring ("often") problem, not a one-off.
- **Expected behavior:** Images that exist should render inline and be
  openable. A "couldn't open" state should be reserved for genuinely
  missing/moved files, and should be accurate rather than the common case.
- **User impact:** Images are a core part of reading messages and sources; when
  they routinely fail to display, content is effectively lost and the app feels
  unreliable.
- **Diagnosis:** Not yet investigated. Note for the later look: determine
  whether the underlying file is actually missing or whether image resolution
  is looking in the wrong place (e.g. attachment path/base-directory
  resolution, or a stale reference after the file was stored/moved). May share
  a root with DF-004 (path/base resolution). Confirm whether the referenced
  images still exist on disk when the card appears.
- **Validation needed:** Reproduce with images that are known to exist on disk;
  confirm they render and open; confirm the "couldn't open" card only appears
  for genuinely missing files; check both freshly added and previously stored
  images, and any attachment-directory resolution involved.
- **Evidence:** User-supplied screenshot from 2026-07-27 showing multiple
  "Couldn't open this image / The file may have moved or be unavailable" cards
  in a single rendered message.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.

### DF-008 — Offer "Copy Link" When Double-Clicking A Link

- **Date added:** 2026-07-28.
- **Status:** Requested; not yet diagnosed.
- **Observed behavior:** Double-clicking a link does not offer a way to copy
  the link's URL.
- **Expected behavior:** Double-clicking a link should let the user "copy
  link" (copy the underlying URL/target to the clipboard). Keep normal
  single-click activation unchanged.
- **User impact:** Minor convenience gap; users have no quick way to grab a
  link's address without other menus.
- **Diagnosis:** Not yet investigated. Later look should confirm the desired
  trigger (double-click vs. context menu) and where link interaction is handled
  so single-click open behavior is preserved.
- **Validation needed:** Confirm double-clicking a link copies the correct URL
  to the clipboard; confirm single-click activation and text selection are not
  broken; check across the link surfaces where this should apply.
- **Evidence:** User request from 2026-07-28.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records the requested change
  and expected behavior only.

### DF-009 — Clicking The App During Update Restart Can Break The Update

- **Date added:** 2026-07-28.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** After pressing the **Update** button the app closes to
  apply the update. If the user clicks/tries to reopen the app before it
  relaunches itself, it somehow crashes/interrupts the update, leaving the
  update not applied.
- **Expected behavior:** The update should complete reliably even if the user
  interacts with the app (or its dock/taskbar icon) during the
  close-and-relaunch window. The update must go through to completion, or fail
  with a definite, actionable error that clearly requires quitting/retrying the
  update.
- **User impact:** High for an update flow — a normal, likely user action
  (impatiently clicking to reopen) can corrupt or abort the update, which can
  leave the install in a bad or half-updated state.
- **Diagnosis:** Not yet investigated. Later look should identify the
  close/relaunch window in the auto-update flow and what a premature
  launch/activation does to the in-progress update (e.g. a second instance
  racing the updater). Suggested direction from the report: hold off allowing
  the app to reopen until the update has gone through, or until a definite
  error state that requires quitting the update — i.e. guard the relaunch/
  single-instance behavior against a user-triggered launch mid-update.
- **Validation needed:** Reproduce by clicking/reopening during the update
  restart window on each platform; confirm the update completes or reports a
  clear terminal error; confirm no second instance can race the updater;
  confirm the app ends in a consistent, fully-updated state.
- **Evidence:** User report from 2026-07-28.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.

### DF-010 — Cloning A Remote Repo Fails With Raw "An error occurred in Effect.tryPromise"

- **Date added:** 2026-07-28.
- **Status:** Claude diagnosis — to be reviewed.
- **Observed behavior:** Trying to clone/pull a remote repo fails in the
  "Select where to clone" destination picker, which shows a raw error banner:
  **"An error occurred in Effect.tryPromise"**. It appeared both when the typed
  destination did not exist (e.g. `/Users/yaacov/main`, "No matching folders")
  and when browsing an existing folder (e.g. `/Users/yaacov/RTL/` listing
  `icons` and `privacy-site`), so the clone did not succeed in either case.
- **Expected behavior:** Cloning to a valid destination should succeed. When it
  cannot, show a specific, actionable message (e.g. invalid/non-existent
  destination, permission denied, auth failure, network error) — never a raw
  internal `Effect.tryPromise` string.
- **User impact:** The clone/pull-a-remote-repo path is broken or unusable, and
  the only feedback is an opaque internal error that gives the user nothing to
  act on.
- **Diagnosis (Claude diagnosis — to be reviewed):** Root cause is a
  catch-less `Effect.tryPromise` in the clone RPC handler that swallows the
  real error. The handler at `apps/server/src/wsRpc.ts:780-784` wraps the
  server-side clone as
  `Effect.tryPromise(() => cloneProjectSource(input, config.homeDir))` in the
  thunk-only form (no `catch`). When that promise rejects, Effect wraps the
  rejection in an `UnknownException` whose `.message` is the literal default
  `"An error occurred in Effect.tryPromise"`; the real error is preserved only
  on `UnknownException.error`, which nothing reads. `toWsRpcError`
  (`apps/server/src/wsRpc.ts:184-192`) then uses
  `cause instanceof Error && cause.message.length > 0 ? cause.message : fallbackMessage`,
  so the `UnknownException`'s non-empty default message wins over both the real
  error and the `"Failed to clone repository"` fallback. That string is placed
  on `WsRpcError`, sent over the WebSocket, and rendered verbatim in the picker
  banner (`AddProjectDialog.tsx:334-335`, `:956-959`).
  - The messages being masked are already good, user-facing strings thrown by
    `cloneProjectSource` (`apps/server/src/projectSources.ts:182-232`): "The
    clone destination parent folder does not exist.", "The clone destination
    already exists. Choose a new folder.", and "Unable to clone the repository.
    Check access and try again." / "Clone cancelled."
  - The directory listing in the picker is a **separate** path
    (`api.filesystem.browse` via `ProjectPathBrowser`,
    `AddProjectDialog.tsx:148`) and was succeeding in both screenshots, so the
    banner is a failed clone *attempt*, not a listing failure. The true reason
    (most likely destination-already-exists, or an access/auth failure on
    `git clone` / `gh repo clone` / `glab repo clone`) was flattened into the
    generic Effect string.
  - Sibling latent case: `wsRpc.ts:777`
    (`Effect.tryPromise(() => getRepositorySourceStatuses())`) has the same
    catch-less pattern but is currently harmless because that callee catches
    internally.
  - **Two fix options.** (a) Localized: give the clone `Effect.tryPromise` a
    `catch` that maps to `WsRpcError` using the original error's message — the
    object `{ try, catch }` form already used across
    `apps/server/src/git/Layers/*`; targeted, low blast radius. (b) Systemic:
    make `toWsRpcError` unwrap Effect's `UnknownException` (read `.error`)
    before falling back to `.message`; fixes every catch-less `tryPromise` at
    once and fits the maintainability preference, but touches a shared error
    path. Suggested: (a) on the clone handler plus the sibling at `:777`.
  - Still open for the reviewer: confirm the exact `UnknownException` default
    string in the installed `effect` version, and confirm whether a
    non-existent typed path should be created vs. rejected and whether an
    existing folder is a valid clone target.
- **Validation needed:** Reproduce the clone flow with a valid empty
  destination, an existing folder, and a non-existent typed path; confirm a
  successful clone works and that each failure yields a clear, specific message
  rather than the raw Effect error.
- **Evidence:** Two user-supplied screenshots from 2026-07-28 showing the
  "Select where to clone" picker with the "An error occurred in
  Effect.tryPromise" banner.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.

### DF-011 — Queued Messages All Flush At Once Instead Of One At A Time

- **Date added:** 2026-07-28.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** While a thread is still generating a response, the user
  can queue one or more messages. If several messages are queued back-to-back,
  then when the in-flight response finishes, all queued messages are sent
  together at once rather than the next single queued message being sent.
- **Expected behavior:** When the active response completes, only the next
  queued message (the first still-pending one) should be sent. Remaining queued
  messages should stay queued and each be released one at a time as the
  preceding response completes, preserving order.
- **User impact:** Batch-flushing the whole queue collapses several intended
  separate turns into one, so the assistant sees them merged/out of the user's
  intended cadence, wastes the queuing feature, and can produce a confused or
  conflated response instead of handling each message in sequence.
- **Diagnosis:** Not yet investigated. Plausible seam: the queue-drain logic
  that runs on response-completion likely dispatches the entire pending queue
  in one pass instead of dequeuing a single message and waiting for the next
  completion. Later look should confirm where queued messages are stored and
  what event triggers the flush, and whether "send one and re-arm on next
  completion" is the intended contract.
- **Validation needed:** Queue two and then three messages during an in-flight
  response; confirm exactly one is sent when the response completes, the rest
  remain queued in order, and each subsequent one is released only after the
  prior response finishes; confirm no message is dropped, duplicated, or
  reordered, and that clearing/editing the queue mid-drain behaves correctly.
- **Evidence:** User report from 2026-07-28 (no screenshot).
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.

### DF-012 — Can't Edit And Resend A Message That Was Stopped Before The AI Answered

- **Date added:** 2026-07-28.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** If the user sends a message and then stops the run
  before the AI has produced its answer, that message cannot afterward be
  edited and re-sent. Ordinary already-answered messages higher up in the
  thread offer the usual edit-and-send affordance, but a sent-then-stopped
  message does not.
- **Expected behavior:** A message that was sent and then interrupted before a
  response should be editable and re-sendable just like any other prior user
  message — same edit affordance, same send behavior.
- **User impact:** After stopping a run, the user is stuck with the original
  message text and must retype it as a new message instead of adjusting and
  resending the one they already wrote, which is friction and easy to mistake
  for the feature being broken.
- **Diagnosis:** Not yet investigated. Plausible seam: the edit-message
  affordance is likely gated on a message state (e.g. "has a completed
  assistant response" / "not the active turn") that a sent-then-stopped message
  fails to satisfy, so the edit control is hidden or disabled for it. Later
  look should confirm which state flag governs the edit affordance and whether
  an interrupted/aborted user turn is being left in a state that excludes it.
- **Validation needed:** Send a message, stop the run before any answer, then
  confirm the message can be edited and re-sent with the same affordance as
  older messages; confirm this holds whether the stop happens before any
  streaming begins and after partial streaming; confirm no duplicate turn,
  orphaned partial response, or broken thread ordering results.
- **Evidence:** User report from 2026-07-28 (no screenshot).
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.

### DF-013 — Broken Card UI In The "Open Project" Initialization Choice

- **Date added:** 2026-07-28.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** When opening a project on an existing folder or Git
  repo, Scient presents a choice card offering how to open it (e.g. initialize
  as a Scient project vs. open the folder without initialization). The visual
  layout of that choice card is broken.
- **Expected behavior:** The choice card should render cleanly and correctly —
  proper layout, spacing, and alignment of its options and labels — consistent
  with the rest of the app's dialog/card styling.
- **User impact:** A broken card at the moment of opening a project looks
  unpolished and can make the choice hard to read or trust at a key first-run
  moment. Presentation only; distinct from the wording problem in DF-014.
- **Diagnosis:** Not yet investigated. Later look should locate the specific
  open-project choice card component and identify what is visually broken
  (layout/styling regression) and its scope. Pairs with DF-014, which concerns
  the wording of the same card's options — keep the two fixes coordinated since
  they touch the same surface.
- **Validation needed:** Open a project on an existing non-empty folder and on
  a Git repo; confirm the choice card renders correctly across window sizes and
  in light/dark themes, with no clipped, misaligned, or overlapping elements.
- **Evidence:** User report from 2026-07-28 (no screenshot).
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.

### DF-014 — "Open Empty Folder" Wording Is Misleading For A Folder That Has Content

- **Date added:** 2026-07-28.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** In the same open-project choice card, the option to
  open a folder/repo without Scient initialization is labeled with wording like
  "open an empty folder" even when the selected folder or repo already contains
  content. Nothing is actually emptied — the folder opens with all of its
  contents intact — but the label reads as if opening will empty it.
- **Expected behavior:** When the target folder/repo already has content, the
  "open without initialization" option should use wording that makes clear the
  folder opens as-is with its existing contents (e.g. "Open current folder as
  is" / "Open folder without initializing"), not wording that implies the
  folder is or must be empty. Exact wording to be decided; the point is to
  remove the false impression that content will be discarded.
- **User impact:** The current wording can scare a user into thinking opening
  will erase their folder, discouraging a safe, correct action and eroding
  trust — even though the behavior is non-destructive.
- **Diagnosis:** Not yet investigated. Later look should find where the option
  label is produced and whether it is static or already branches on
  folder-empty vs. folder-has-content state, then choose accurate, reassuring
  wording for the non-empty case (and confirm the empty-folder wording still
  makes sense for a genuinely empty target). Pairs with DF-013 on the same
  card.
- **Validation needed:** Open an empty folder, a non-empty folder, and a Git
  repo; confirm the non-initialization option's label accurately describes the
  non-destructive open-as-is behavior in each case and never implies content
  will be removed; confirm the actual open behavior remains non-destructive.
- **Evidence:** User report from 2026-07-28 (no screenshot).
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only. Final wording is explicitly still to be decided.

### DF-015 — Mixed-Language Lines In A Hebrew Answer Render Left-To-Right Instead Of RTL

- **Date added:** 2026-07-30.
- **Status:** Reported; not yet diagnosed.
- **Observed behavior:** In an answer written in Hebrew, most of the text
  renders right-to-left correctly, but individual lines and bullet items that
  begin with a Latin-script token or a number render left-to-right. The
  observed example is a Hebrew medical answer where lines such as the
  "55,000 לויקוציטים עם 95% PMN" bullet and its sub-lines (e.g. beginning with
  "Polymorphonuclear Neutrophils — PMN…" and "ספירת תאים מעל 50,000…"), and a
  trailing line beginning "MRSA — Methicillin-resistant … Staphylococcus
  aureus", are laid out LTR — so punctuation and the leading number/term land
  on the wrong (left) side and the line reads misaligned against the
  surrounding RTL text.
- **Expected behavior:** When an answer is in Hebrew (RTL), every line,
  paragraph, and list item in that answer should inherit the answer's dominant
  RTL base direction, including lines that happen to start with an English word
  or a digit. Embedded Latin words, numbers, and inline code should still read
  left-to-right within the line (per the Unicode bidi algorithm), but the base
  direction of the block should stay RTL so alignment and punctuation placement
  are correct.
- **User impact:** Hebrew answers look broken and hard to read wherever they
  mix in English terms or numbers — which is common in scientific/medical
  content — undermining the RTL experience the app otherwise provides.
- **Diagnosis:** Not yet investigated. Likely cause is per-line/per-block base
  direction being inferred from the first strong character (or `dir="auto"`)
  rather than from the answer's dominant language: a block whose first strong
  character is Latin or whose leading token is a number gets treated as LTR.
  Later look should find where message/markdown blocks set their text direction
  (the renderer for assistant answers and its list-item/paragraph handling) and
  decide direction at the answer level (or from dominant-script detection)
  instead of per-block first-strong inference, so mixed lines keep the RTL base
  direction while still shaping embedded LTR runs correctly.
- **Validation needed:** Render a Hebrew answer containing: a bullet that starts
  with a number (e.g. "55,000 …"), a line that starts with an English term
  (e.g. "Polymorphonuclear Neutrophils — PMN …"), inline code, and a trailing
  line starting with an acronym (e.g. "MRSA — …"); confirm all lines share the
  RTL base direction with correct alignment and punctuation placement while
  embedded Latin/number runs still read LTR. Confirm no regression for
  English-only (LTR) answers and for genuinely mixed threads.
- **Evidence:** User report from 2026-07-30 with screenshot of a Hebrew medical
  answer showing the affected lines rendering LTR.
- **Related task, issue, or pull request:** Not yet created.
- **Implementation approval:** Not yet; this entry records reported behavior
  and expected behavior only.
