# Desktop Fix Inbox

Status: Active
Owner: Yaacov
Created: 2026-07-25
Last updated: 2026-07-25
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
