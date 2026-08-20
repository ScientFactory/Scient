# Desktop Fix Inbox

Status: Active
Owner: Yaacov
Created: 2026-08-10
Last updated: 2026-08-20
Purpose: Captures observed problems in the current T3-derived Scient desktop app that need a bounded diagnosis or fix but are not being implemented immediately.
Doc type: Planning note

## Document Rules

This is the one current intake file for concrete desktop problems in the
T3-derived Scient app. Historical observations from the retired Synara-derived
application remain available in Git history, but must not guide new fixes
without fresh reproduction in the current app.

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
