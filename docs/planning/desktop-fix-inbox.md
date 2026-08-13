# Desktop Fix Inbox

Status: Active
Owner: Yaacov
Created: 2026-08-10
Last updated: 2026-08-13
Purpose: Captures observed problems in the current T3-derived Scient desktop app that need a bounded diagnosis or fix but are not being implemented immediately.
Doc type: Planning note

## Document Rules

This is the one current intake file for concrete desktop problems in the
T3-derived Scient app. The [Legacy Desktop Fix
Inbox](desktop-fix-inbox-legacy.md) is historical evidence from the retired
Synara-derived application and must not guide new fixes without fresh
reproduction in the current app.

Use this file for concrete desktop problems whose current behavior has been
observed and whose desired behavior is understood well enough to investigate.
Raw product ideas belong in the [Idea Inbox](idea-inbox.md), and
accepted product direction belongs in the relevant product, design,
architecture, or planning document.

An entry records work that may need attention. It does not establish product
truth, priority, implementation approval, or release scope. Keep diagnosis and
evidence truthful about what has and has not been reproduced or verified.

All recorded causes and diagnoses are **possible**, agent-proposed explanations
that Yaacov has not validated. Treat every "Possible cause" as a hypothesis to
verify, not an established fact. Where an entry notes that a mechanism was
"read in the code", that means an agent inspected the source — it does not mean
the cause of the observed problem, or that the reading itself, has been
confirmed by Yaacov.

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

Fix identifiers in this file are scoped to the current T3-derived app.

## Open Fixes

### DF-001 — Opening A Project Sometimes Lands In The Previously Active Workspace

- **Date added:** 2026-08-10.
- **Status:** Observed; not yet reproduced or diagnosed. Awaiting bounded
  investigation and explicit implementation approval.
- **Observed behavior:** When selecting or opening a project, the app sometimes
  opens the conversation inside the *previously* active repository or workspace
  instead of the project just chosen. Intermittent.
- **Related observed behavior (folder picker):** Sometimes a project must be
  picked twice to open it — the first folder selection appears to just move one
  step back (e.g. dismiss or go up a level) instead of opening, and only the
  second selection actually opens the project. Likely shares a root cause with
  the mis-routing above, since both live in the project-open/folder-selection
  flow; recorded here per Yaacov as part of the same issue.
- **Expected behavior:** Opening or selecting a project must always route the
  conversation to that project's workspace; the previously active workspace
  must never capture the newly opened session.
- **Impact and reproduction:** Disruptive — the user can end up working against
  the wrong repository without realizing it. No reliable reproduction captured
  yet; trigger conditions are unknown and need to be pinned down (for example,
  switching while a thread is open, the timing of the project pick, or
  correlation with an in-flight conversation or running task).
- **Diagnosis state and seam:** Not yet diagnosed. Suspected in the
  project-selection → active-workspace/session routing path — wherever the
  chosen project id is resolved into the active workspace or thread context on
  open. Unverified; needs code investigation.
- **Validation needed:** A reliable reproduction first, then confirmation that
  opening a project always binds the conversation to that project across the
  timing and edge conditions found.
- **Related task, issue, or PR:** None yet.
- **Approved for implementation:** No — not yet approved by Yaacov.

### DF-002 — Add A "Start New Thread" Button Next To General Chat

- **Date added:** 2026-08-10.
- **Status:** Requested change; not yet designed or implemented. Logged as
  intake — explicit implementation approval not yet given.
- **Observed behavior:** Starting a new thread is currently only reachable from
  the control that starts threads for projects. There is no direct affordance
  to start a new thread next to "General chat".
- **Expected behavior:** Add a button to start a new thread directly next to
  "General chat", so starting a general thread is a first-class, discoverable
  action rather than being reachable only through the project thread-start
  control. Reuse the existing new-thread action for consistent behavior.
- **Impact and reproduction:** The current placement makes starting a
  general-chat thread less obvious and less consistent with how project threads
  are started. UI affordance change — no runtime reproduction needed.
- **Diagnosis state and seam:** Not investigated. Likely in the sidebar/general-
  chat header where "General chat" is rendered; wire a new-thread button to the
  same action already used by the project thread-start control. Unverified;
  needs code investigation.
- **Validation needed:** The new button reliably starts a new general thread;
  placement and labeling are consistent with the existing new-thread action;
  no duplicate or confusing entry points are introduced.
- **Related task, issue, or PR:** None yet.
- **Approved for implementation:** Not yet explicitly confirmed — recorded as a
  requested change per Yaacov.

### DF-003 — File Chip Shows A Stale "Cannot Read" Error Even When The File Exists

- **Date added:** 2026-08-10.
- **Status:** Observed; partially diagnosed with **two candidate causes** that
  require different fixes (see below). Not reproduced under controlled
  conditions. Awaiting a scope decision; not approved for implementation.
- **Observed behavior:** Clicking a file chip/link to open a file in the preview
  panel sometimes shows a read error and refuses to display the file, even
  though the file exists on disk at the reported path. Re-clicking the same chip
  does not help. It sometimes clears on its own after a few minutes.
- **Expected behavior:** Clicking a chip for a file that exists and is within the
  readable workspace should open and show it. When a read genuinely fails, the
  user should have an obvious way to retry, and the natural reflex — click the
  chip again — should force a fresh read.
- **Impact and reproduction:** The core "click to open a file" interaction
  dead-ends with no recourse. Seen after a file was created out-of-band (written
  directly to disk, not through the app's write path). No controlled repro yet.
- **Possible cause — verify which one before fixing.** Both mechanisms were
  read in `scient-desktop-next` code by an agent on 2026-08-10 and are **not
  validated by Yaacov**; which one produced the actual incident is unknown.
  - **A. Sticky negative cache with no retry (possible; read in code, unvalidated).** `readFile`
    is an SWR query atom (`packages/client-runtime/src/state/projectCommands.ts`
    ~69-74: staleTime 30s, idle-TTL 5min; `runtime.ts` ~522-526
    `revalidateOnMount`). A failed read is retained like a success. Nothing
    invalidates it except a successful in-app save
    (`confirmProjectFileQueryData`, `FilePreviewPanel.tsx` ~423), a per-env
    generation bump, or 5-min idle eviction — and there is no filesystem watcher
    for project reads (watchers exist only for settings/keybindings/git). Re-
    clicking does not refetch: `openFile` (`apps/web/src/rightPanelStore.ts`
    ~281-306) only increments `revealRequestId` (scroll-to-line); the atom key
    {env, cwd, relativePath} is unchanged, so there is no re-subscribe or
    refetch. The error UI (`FilePreviewPanel.tsx` ~992-994) renders the error
    with no Retry control, and an existing `refresh()` is never wired. Net: a
    transient or out-of-band read miss gets stuck.
  - **B. Wrong cwd / worktree-root boundary (possible; read in code, unvalidated; may be the real
    cause here).** Reads resolve `relativePath` against
    `cwd = activeThreadWorktreePath ?? activeProjectCwd`
    (`apps/web/src/components/ChatView.tsx` ~2662-2663). If the active thread has
    a worktree, chips resolve against the *worktree*, not the project root; and
    `apps/server/src/workspace/WorkspaceFileSystem.ts` realpaths the target and
    rejects anything outside the resolved root ("resolves outside workspace
    root") as a security boundary. A file living in a different root/worktree
    than the active cwd is therefore *persistently* unreadable — a fresh read
    keeps failing, so the caching fix would not help.
  - **Decisive test to disambiguate:** trigger a genuinely fresh read (e.g. a
    Retry). If it succeeds → Cause A. If it still fails → Cause B (wrong
    cwd/root), which needs a resolution fix, not a cache fix.
- **Diagnosis state and seam:** Caching seam = `rightPanelStore.openFile` + the
  `readFile` atom + the `FilePreviewPanel` error state. Resolution seam = the
  chip→cwd mapping in `ChatView` + the boundary check in `WorkspaceFileSystem`.
  Line references read in code 2026-08-10 (unvalidated); which cause drove the incident is not known.
- **Recommended fix (if Cause A), scoped and low-risk:** (1) wire a Retry button
  into the error state using the existing `refresh()`; (2) make re-clicking an
  already-open file force a refetch rather than only bumping `revealRequestId`;
  optionally (3) treat read *failures* as immediately stale / do not idle-retain
  them. Step 1 also serves as the diagnostic that distinguishes A from B.
- **Separate consideration (Cause B / UX):** out-of-root chips currently render
  as clickable but can never open under the active cwd. Decide whether to
  resolve them against the correct root or stop rendering them as openable.
  Track distinctly from the caching fix.
- **Validation needed:** Controlled repro of each mode; confirm a fresh read
  succeeds when the file is readable; confirm behavior for a genuinely out-of-
  root file is unambiguous (either opens against the correct root or is visibly
  not openable).
- **Related task, issue, or PR:** None yet. Loosely related to DF-001 (both
  touch project/worktree path handling).
- **Approved for implementation:** No — logged as intake; decide scope (A vs B)
  first.

### DF-004 — Preview Browser Shows Pre-Existing / Other Parties' Browsing (No Isolation Or Reset)

- **Date added:** 2026-08-10.
- **Status:** Observed; mechanisms read in code by an agent (possible,
  unvalidated by Yaacov), and the exact vector that brings *upstream T3
  developers'* browsing to an end user is not yet confirmed (needs a clean
  fresh-install test). Privacy-sensitive. Not approved for implementation.
- **Observed behavior:** Opening the in-app (preview) browser shows pages and
  history the current user never visited — reported as "all the pages opened by
  the T3 developers."
- **Expected behavior:** A fresh install / new user must start with an empty
  browser. Browsing state must be scoped to the current user (and ideally the
  project/thread), must never expose another party's history, and the shipped
  build must never carry developer browsing baked in.
- **Impact and reproduction:** Privacy leak and an unprofessional first-run
  experience; also a security/isolation concern (shared session, see cause).
  High severity for a shippable build. No controlled fresh-install repro yet.
- **Possible cause (mechanisms read in code 2026-08-10 — possible and unvalidated by Yaacov; leak vector flagged):**
  - **Persistent, shared-by-default partition.** The preview browser calls
    `session.fromPartition("persist:scient-next-preview-<sha>")` with default
    `scope = "shared"` (`apps/desktop/src/preview/BrowserSession.ts`; prefix
    from `packages/shared/src/scientNextIdentity.ts`). `persist:` writes
    cookies/localStorage/IndexedDB/serviceworkers/cache to userData, and the
    single shared scope means browsing is **not isolated per project/thread** —
    every preview shares one profile.
  - **No automatic reset.** `clearCookies`/`clearCache` are only invoked from a
    user menu (`apps/web/src/components/preview/PreviewMoreMenu.tsx`) / IPC,
    never on install or first run. Accumulated browsing therefore persists
    indefinitely and is shown to whoever opens the browser next.
  - **History store uses the upstream T3 namespace.** `browserHistoryStore`
    persists to localStorage key `t3code:browser-history:v1`
    (`apps/web/src/browserHistoryStore.ts`) — project-keyed but not scoped to
    Scient's identity or the user. On any origin/userData that previously ran
    T3 Code (e.g. a dev/build machine), that history carries over.
  - **Not committed in the repo** (agent inspection, unvalidated: no
    `Partitions`/`Local Storage`/`IndexedDB` directories checked in) — so the
    leak is likely via persisted/shared
    runtime state or a bundled userData, not repo data.
  - **Leading hypothesis:** dev/test browsing accumulated in a persistent,
    shared, never-reset profile (and/or an inherited `t3code:` localStorage)
    surfaces to anyone opening the browser, across projects and sessions.
    Whether the *packaged artifact itself* ships pre-populated userData is not
    yet confirmed.
- **Decisive check:** install the packaged build on a clean machine/user and
  open the preview browser — it must be empty. If it is not, the build ships
  pre-populated userData (a packaging defect). If it is empty, the leak is
  persistent-shared-state accumulation on already-used machines.
- **Diagnosis seam:** `BrowserSession.getPartition`/`getSession` (scope +
  `persist:`), the desktop first-run lifecycle (no reset), and the
  `browserHistoryStore` storage key/namespace.
- **Recommended fix directions:**
  1. Audit packaging + run the clean-install test to confirm no
     userData/partition/localStorage is bundled into the shipped app.
  2. Decide and apply an isolation model: scope the preview partition per
     project/thread (pass a real `scope`) and/or use a non-persistent partition
     if browsing should not survive restarts — do not default everything to one
     persistent "shared" profile.
  3. Rename the history storage key to Scient's own identity namespace (not
     `t3code:`); if history should persist, scope it to the user and ensure a
     new install starts empty.
  4. Ensure a clean first-run state; keep manual "clear cookies/cache" as
     recovery.
- **Validation needed:** clean fresh-install shows an empty browser; opening the
  browser in project A does not surface project B's pages (if per-project
  isolation is chosen); reinstall/update does not resurrect prior browsing; the
  shipped artifact contains no developer browsing data.
- **Related task, issue, or PR:** None yet. Same privacy/isolation family as
  DF-001 in spirit (both concern per-context state boundaries).
- **Approved for implementation:** No — logged as intake; privacy-sensitive,
  prioritize the clean-install check first.

### DF-005 — Edit And Resend A Previously Sent Message (Like Codex)

- **Date added:** 2026-08-10.
- **Status:** Requested change; not designed or implemented. Logged as intake —
  explicit implementation approval not yet given.
- **Observed behavior:** There is no way to go back to a message you already
  sent, edit its text, and resend it. Codex supports this.
- **Expected behavior:** Let the user select a previously sent user message,
  edit its content, and resend it, following the model Codex uses. Resending
  should behave consistently with how the app starts a new turn from that point.
- **Impact and reproduction:** Users must retype or rephrase from scratch to
  correct or iterate on an earlier prompt — slower and more error-prone than
  Codex-style edit-and-resend. UI/behavior change; no runtime repro needed.
- **Open design questions (to resolve before building):** What happens to
  messages after the edited one — truncate/replace, or fork a new branch? Does
  resend rewrite in place or create a new thread/fork? How does it interact with
  the existing fork/thread system and thread history? Is the original preserved?
  These remain intake, not decisions.
- **Possible implementation seam (unvalidated, not investigated):** likely the
  composer + message list in `apps/web/src/components/ChatView.tsx` and the
  thread/turn model, and probably related to the existing fork/thread
  machinery. Pointer only — not confirmed.
- **Validation needed:** define the post-edit semantics first; then confirm the
  feature integrates with thread history and fork behavior without corrupting
  state, and matches the intended Codex-like flow.
- **Related task, issue, or PR:** None yet. Possibly related to fork-system work.
- **Approved for implementation:** Not yet explicitly confirmed — recorded as a
  requested change per Yaacov.

### DF-006 — Codex Sign-In Succeeds In Browser But App Never Shows It Connected (Windows)

- **Date added:** 2026-08-10 (deepened 2026-08-10 after the reporter clarified
  the exact flow).
- **Status:** Observed on Windows with Codex. Several possible causes read in
  code (all unvalidated by Yaacov); the login-trigger wiring was not fully
  traced. Higher severity than first logged — a restart does not reliably fix
  it. Not approved for implementation.
- **Observed behavior:** On Windows, the user opens the app and Codex shows as
  **installed** with a **"Log in"** button. They click it, complete the OAuth
  login in the browser (browser shows "login successful"), and return to the
  app — but Codex is **still not shown as connected**, and this is not reliably
  cleared by reopening the app. Tested only on Windows, only with Codex; other
  providers / other OSes unknown.
- **Expected behavior:** After a successful Codex browser login, the app should
  detect the newly authenticated state and show Codex connected promptly,
  without a restart, on Windows.
- **Impact and reproduction:** Core provider onboarding is broken on Windows for
  Codex — the user cannot connect Codex at all through the UI. High severity.
  Repro: Windows + Codex → click Log in → complete browser login → status stays
  "Log in" / not connected.
- **How detection works (read in code 2026-08-10, unvalidated):** "Connected" is
  not read from a file — it is a **live subprocess probe**. The server spawns
  `codex app-server` (`apps/server/src/provider/Layers/CodexProvider.ts`
  ~340-362, via `resolveSpawnCommand`, env `CODEX_HOME=<resolved home>`), runs
  `initialize`, then `account/read` (~388). Account present → authenticated;
  `!account && requiresOpenaiAuth` → shows "Log in". The Codex home is resolved
  by `CodexHomeLayout` (`apps/server/src/provider/Drivers/CodexHomeLayout.ts`)
  which has a **"direct"** mode and an **"authOverlay"/shadow-home** mode; in
  overlay mode `auth.json` is kept a **private, real (non-symlinked) file** in
  the effective home (`PRIVATE_ENTRY_NAMES`, `ensureShadowAuthIsPrivate`).
- **Possible causes, ranked (all possible and unvalidated by Yaacov):**
  1. **CODEX_HOME / auth.json location mismatch (strongest, given the flow).**
     The browser login writes `auth.json` to one Codex home, but the probe reads
     `account/read` from a different `CODEX_HOME` (e.g. login uses the default
     `%USERPROFILE%\.codex` while the probe uses a managed/shadow effective home,
     or the login and probe app-servers use different homes). Because the overlay
     deliberately keeps `auth.json` **private and un-symlinked** between shared
     and effective homes, a token written to one is not visible to the other.
     This would make the app never see the login **even after a restart** —
     matching the report.
  2. **Windows symlink EPERM breaks the shadow home (Windows-specific
     aggravator).** `materializeCodexShadowHome` creates **symlinks**
     (`fileSystem.symlink`). On Windows `fs.symlink` needs admin or Developer
     Mode and otherwise throws `EPERM`; if overlay mode is active on Windows,
     materialization can fail, leaving the effective home broken/mislinked so the
     probe can't resolve a valid authenticated home — consistent with "only
     Windows."
  3. **No re-probe after login completion (secondary/contributory).** The Codex
     protocol emits `account/login/completed`; if the app does not react by
     immediately re-running the account probe (and only refreshes on the periodic
     maintenance scan — the original hypothesis for this entry), the UI stays on
     "Log in" until the next scan/restart. Alone this would not survive a
     restart, so it is likely contributory, not the whole story.
  4. **2-second probe force-kill (tertiary, possibly intermittent).**
     `CODEX_APP_SERVER_PROBE_FORCE_KILL_AFTER = "2 seconds"` (`CodexProvider.ts`
     ~39). Windows spawn via a shell shim + `initialize` + `account/read` (with a
     post-login token refresh) can exceed 2s and be killed → status "unknown" /
     not connected. Weakened because the "installed + Log in" state proves at
     least one probe completed, but a post-login refresh probe may be slower.
- **Not fully traced:** the exact "Log in" trigger wiring (`account/login/start`
  appears only in compiled `dist`, referenced indirectly in source), so which
  `CODEX_HOME` the login process uses versus the probe is the key unverified
  link for cause #1.
- **Decisive checks (on the Windows machine):**
  1. Compare where login wrote the token (`%USERPROFILE%\.codex\auth.json`,
     timestamp after login) against the `CODEX_HOME`/effective home the probe
     uses (server logs / resolved `effectiveHomePath`). Different → cause #1.
  2. Grep server logs for `CodexAppServerSpawnError`, a ~2s probe kill/timeout,
     or a symlink `EPERM` from `materializeCodexShadowHome` → causes #4 / #2.
  3. After login, run manual "Refresh provider availability". If it then shows
     connected → cause #3 (missing re-probe). If not → cause #1/#2.
  4. Check whether a shadow/overlay home (`shadowHomePath`) is configured; if so,
     causes #1/#2 are the prime suspects.
- **Diagnosis seam (possible):** `CodexProvider.ts` probe + `CODEX_HOME`,
  `CodexHomeLayout.ts` (direct vs authOverlay, private `auth.json`, Windows
  symlinks), the login-completion handler, and the availability refresh/stream
  (`providerMaintenance*`, `apps/web/src/state/server.ts`).
- **Recommended fix direction (pending the checks):** ensure the login writes to,
  and the probe reads from, the **same** Codex home on Windows; make the
  shadow-home overlay Windows-safe (avoid symlinks / fall back to copy or direct
  mode when symlinks are unavailable); re-probe immediately on
  `account/login/completed`; and consider making the 2s probe timeout
  platform-aware for Windows.
- **Validation needed:** on Windows, complete a Codex browser login and confirm
  the app shows connected within a second or two without restart; confirm on a
  non-admin / no-Developer-Mode Windows account; confirm other providers and
  macOS are unaffected.
- **Related task, issue, or PR:** None yet. Related to DF-003 (state not
  refreshed after an out-of-band event).
- **Approved for implementation:** No — logged as intake; run the decisive
  checks first, especially the CODEX_HOME comparison.

### DF-008 — Voice Insertion Leaves The Caret Before The Inserted Text (Composer)

- **Date added:** 2026-08-10.
- **Status:** Observed. Possible seam partially traced in code (unvalidated by
  Yaacov). Not approved for implementation.
- **Observed behavior:** When using voice input in the composer, after
  transcription finishes and the text is inserted, the caret (typing position)
  stays **before** the inserted text instead of after it. Typing immediately
  after insertion inserts the new characters in front of the transcribed text.
- **Expected behavior:** After the voice transcript is inserted, the caret
  should sit at the **end** of the inserted text, so continued typing appends
  after it.
- **Impact and reproduction:** Garbles the message when the user dictates then
  keeps typing — the most natural follow-on action. Repro: record voice in the
  composer, let it insert, then type a character → it lands before the
  transcript.
- **Possible seam (read in code 2026-08-10 — possible and unvalidated by
  Yaacov):** the composer is a Lexical editor
  (`apps/web/src/components/ComposerPromptEditor.tsx`) with caret helpers
  `$setSelectionAtComposerOffset(offset)` / `$setSelectionRangeAtComposerOffsets`
  and an imperative insert API (`insertTextAtEnd`, etc.); voice is captured by
  `apps/web/src/scient/voice/useVoiceRecorder.ts`. Likely cause: the voice-insert
  path sets the caret to the **pre-insertion** offset rather than
  `insertionOffset + insertedText.length`, so the selection is not advanced past
  the inserted transcript. The exact voice→composer insertion call site was not
  fully traced.
- **Fix direction (possible):** after inserting the transcript, set the selection
  to the end of the inserted text (advance the offset by the inserted length, or
  use an insert-at-caret path that moves the selection to the end of the inserted
  nodes).
- **Validation needed:** voice-insert then type appends after the transcript;
  also verify when the composer already has text and the caret is mid-text, and
  when inserting at end vs. at a mid-document caret.
- **Related task, issue, or PR:** None yet.
- **Approved for implementation:** No — logged as intake.

### DF-009 — Voice Transcript Goes To The Composer, Not The Ask-User-Question Answer Box

- **Date added:** 2026-08-10.
- **Status:** Observed. Possible seam read in code (unvalidated by Yaacov). Not
  approved for implementation. Sibling of DF-008 (both are voice-input targeting
  issues).
- **Observed behavior:** When an agent uses the "ask user question" tool and the
  user answers by voice, the transcription does not appear in the question's
  answer box — it is inserted into the main composer instead. The user cannot see
  their answer while answering and only discovers it in the composer after they
  have answered the question and sent it.
- **Expected behavior:** While answering an ask-user-question prompt, voice
  transcription should go into (and be visible in) the focused answer input for
  that question, not the main composer.
- **Impact and reproduction:** Voice is effectively unusable for answering agent
  questions, and the misrouted transcript can corrupt the next composer message.
  Repro: agent asks a question via the ask-user-question tool → user answers by
  voice → the transcript appears in the composer, not the answer field.
- **Possible seam (read in code 2026-08-10 — possible and unvalidated by
  Yaacov):** the voice control is composer-bound —
  `apps/web/src/scient/voice/ScientVoiceComposerControl.tsx` and
  `useScientVoiceController.ts` route `onTranscript` into the composer draft
  (`getDraft` / `onSetDraft`). There appears to be no voice binding to the
  ask-user-question answer input, so transcription always targets the composer
  regardless of which input is focused. (The ask-user-question answer component
  itself was not located in this pass.)
- **Fix direction (possible):** route voice transcription to the currently
  active/focused answer input when an ask-user-question prompt is open (or add a
  dedicated voice control on that answer input), instead of unconditionally to
  the composer.
- **Validation needed:** answering an ask-user-question by voice inserts into and
  is visible in the answer box; the composer draft is left untouched; correct for
  single- and multi-question prompts and when the composer already has a draft.
- **Related task, issue, or PR:** None yet. Sibling of DF-008.
- **Approved for implementation:** No — logged as intake.

### DF-010 — RTL Direction Not Applied To Inline Code Spans

- **Date added:** 2026-08-10.
- **Status:** Observed (screenshot provided, Hebrew message). Possible seam read
  in code (unvalidated by Yaacov). Not approved for implementation. Follow-on to
  the earlier RTL / arrow-direction fix.
- **Observed behavior:** In an RTL (e.g. Hebrew) message, text inside an
  **inline code** span renders left-to-right — the Hebrew words and the arrows
  (→) inside the `code` box appear in the wrong visual order. The earlier fix
  corrected arrow/text direction for normal RTL message text, but inline code
  was not handled. (Attachment: a Hebrew line with an inline-code box whose
  contents render LTR.)
- **Expected behavior:** Inline code in an RTL message should follow the
  message's content direction (RTL), so Hebrew text and arrows inside the `code`
  box read in the correct order — consistent with how normal RTL message text
  and tables are already handled.
- **Impact and reproduction:** RTL messages with inline code are misordered and
  hard to read. Repro: render an RTL (Hebrew) message containing an inline
  `code` span with RTL text and an arrow.
- **Possible seam (read in code 2026-08-10 — possible and unvalidated by
  Yaacov):** the bidi module (`apps/web/src/scient/bidi/`) already applies
  direction to message text and tables (`ChatMarkdown.tsx` uses
  `rehypeScientBidi`, `resolvePlainTextBoxDirection`, and `dir={tableDirection}`
  on tables). Inline code is specifically tagged (`remarkTagInlineCode` →
  `dataInlineCode`, `ChatMarkdown.tsx` ~263) because inline vs block `<code>` is
  otherwise indistinguishable — but the inline `<code>` element does not appear
  to get a `dir` applied the way paragraphs/tables do, so RTL content inside it
  renders LTR.
- **Fix direction (possible):** apply the message/content direction (or
  `dir="auto"`) to inline `<code>` spans — via `rehypeScientBidi` adding a dir
  attribute to inline code, or the `code` component setting `dir` in the inline
  (`dataInlineCode`) case — mirroring the existing table/message handling. Leave
  block/fenced code as-is (it already has its own plain-text-box direction
  handling).
- **Validation needed:** RTL message with inline code renders RTL (arrows/text in
  correct order); an LTR code identifier inside an RTL message still renders
  correctly; fenced/block code unchanged; mixed content stays sane.
- **Related task, issue, or PR:** None yet. Follow-on to the prior RTL
  arrow-direction fix, which covered message text but not inline code.
- **Approved for implementation:** No — logged as intake.
