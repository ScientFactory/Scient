# Upstream Intake

Status: Active
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-08-06
Purpose: Defines the repeatable process for detecting, reviewing, and selectively inheriting changes from Scient's original desktop and agent sources.
Doc type: Operational procedure

## Document Rules

This document owns the cross-repository upstream maintenance procedure. It does
not decide repository authority, replace repo-local commands, or record current
pins. ADR-0002 owns authority and topology. Each source repository's
`UPSTREAM.md` owns its exact commands and protected invariants. Repo-local
`upstream-state.json` files own machine review checkpoints. The parent
`lab/external/sources.lock.md` and dated review records preserve cross-repository
evidence.

### Update Policy

Update this procedure when monitoring, review, intake, verification, rollback,
or evidence practice changes. Update a repo-local state file and the parent
source evidence only after a completed review or accepted intake; never advance
them merely because a monitor observed a new tip.

## Principle

**Upstream awareness is mandatory. Upstream absorption is selective.**

Scient may remain intentionally behind. Unknown upstream movement, an invalid
checkpoint, or an unrecorded decision is a maintenance failure. A nonzero Git
behind count is not.

## Maintained Sources

| Owned repository | Official source | Owned branch | Official branch |
|---|---|---|---|
| `ScientFactory/scient-desktop` | `Emanuele-web04/synara` | `main` | `main` |
| `ScientFactory/scient-agent` | `anomalyco/opencode` | `dev` | `dev` |

Every checkout used for maintained upstream intake must have a writable
`origin` and fetch-only `upstream` with push URL `DISABLED`. An ordinary
contributor clone initially has only `origin`; the workspace bootstrap does not
create donor remotes. Before intake, configure and verify the official remote
under the owning repository's `UPSTREAM.md`. The owned repositories remain
standalone; the upstream remote records lineage and provides review input.

ADR-0005 selects official T3 as the upstream for the successor desktop. The
private repository now exists with literal T3 ancestry and a reviewed D4 draft,
but its safety-envelope pull request and repo-local checkpoint are not
integrated. It is therefore a provisional `thin-fork-merge` lane, not yet a
maintained source in the table or machine verifier above. After integration,
add it through a separate exact-state evidence change. Observed T3 movement
never advances its literal `integrationBase` without owned ancestry and
verification. The current Synara lane remains active for the supported
continuity application until an explicit retirement decision.

## State Model

Keep these concepts distinct:

- **Owned head** - calculated current commit of the owned branch; never manually
  maintained as a recurring bookkeeping pin.
- **Observed upstream head** - latest official tip seen by monitoring. It lives
  in the rolling issue or command output and does not create a source commit.
- **Reviewed through** - newest official commit for which every change through
  that point has a recorded disposition.
- **Integration base** - newest contiguous official upstream base actually
  present in owned history.
- **Selective intake** - exact non-contiguous official commits or behaviors
  adopted, adapted, or reimplemented; recorded in the review/intake evidence
  rather than misrepresented as a contiguous base.
- **Tested owned head** - exact owned commit for which the stated source or
  cross-repository verification passed; recorded in parent evidence and the PR.

The machine-readable state in each code repository contains repository identity,
branches, update mode, `reviewedThrough`, `reviewedAt`, `integrationBase`, and a
review-record reference. `sources.lock.md` is the human-readable cross-repository
evidence snapshot, not an input parser for the verifier.

## Parent Evidence Verification

Parent CI keeps four evidence questions separate:

- **Local consistency** validates the committed manifest, source-lock rows, and
  review references without contacting another repository. It is required for
  every pull request and `main` update.
- **Pinned integrity** verifies that the `upstream-state.json` at each exact
  recorded `testedHead` agrees with the parent snapshot. It runs when owned
  source evidence or its verifier changes.
- **Current-head strictness** additionally requires each recorded `testedHead`
  to equal the live owned default-branch head. It runs only when a pull request
  or push changes the owned-source snapshot in `owned-sources.json` or
  `sources.lock.md`.
- **Freshness reporting** compares the accepted tested snapshot with live owned
  heads on a schedule or manual dispatch. Ordinary head movement is reported as
  stale but does not fail: a tested head is durable evidence, not a recurring
  bookkeeping pin. An unavailable or malformed live result remains an error
  because the workflow cannot honestly report freshness.

These checks do not advance evidence automatically. A strict result is true at
the time it ran; source movement after that check requires a fresh observation
when current-head equality matters.

## Three Activities

| Activity | Trigger | May write product code? | May advance state? |
|---|---|---:|---|
| Monitor | Weekly schedule or manual dispatch | No | No; it only updates one rolling issue with the observed tip. |
| Review | New issue, security signal, pre-release check, inherited-core work, or deliberate cadence | No | May advance `reviewedThrough` after every change is dispositioned. |
| Intake | A reviewed change has bounded Scient value | Yes, on an isolated maintenance branch | May record selective intake; advances `integrationBase` only when a contiguous official base was actually incorporated. |

While the sources remain relatively close, review them at least monthly and
before a Scient release. Review immediately when the monitor identifies a
security-looking change or when work is about to touch the affected inherited
core. This cadence is a review trigger, not an obligation to merge code.

## Classification And Disposition

Classify what a change affects:

- safety or reliability;
- provider, protocol, or runtime compatibility;
- UX or performance;
- architecture or refactoring;
- product assumptions, identity, or branding; or
- release, CI, or upstream-only infrastructure.

Then give it one disposition:

- **Adopt** - take substantially unchanged.
- **Adapt** - land with Scient-specific changes.
- **Reimplement** - preserve the useful behavior on a Scient-owned seam.
- **Defer** - potentially valuable, but not now.
- **Reject** - intentionally not wanted.

A review can select Adopt, Adapt, or Reimplement without immediately starting
intake. The dated record must say whether code was landed, selected for later
intake, or only retained as a lesson.

## Change Lanes

Keep these lanes identifiable during conflict analysis:

- identity, packaging, release, and updater;
- storage, migrations, credentials, and sessions;
- Scient domain features and project initiation;
- providers, adapters, protocols, and contracts;
- inherited core; and
- upstream-only infrastructure.

If a lane repeatedly conflicts, extract an extension seam or declare the lane
selectively divergent. Do not repeatedly flatten Scient changes into broad
upstream merges.

## Monitor Procedure

The scheduled workflow in each source repository:

1. reads the committed repo-local review checkpoint;
2. fetches the official branch;
3. verifies that the checkpoint remains on official history;
4. exits quietly when the official tip equals the checkpoint;
5. otherwise updates one rolling `upstream-review` issue with the observed tip,
   commit count, digest, and a security-subject signal; and
6. closes the rolling issue after a later accepted review catches up.

Monitoring must never open a code PR, merge, update `reviewedThrough`, update
`integrationBase`, or decide a disposition.

## GitHub Automation Safety

Standalone ownership can activate workflows that were inert or constrained in
a GitHub fork. Keep Scient-owned quality, read-only test, and upstream-monitor
workflows enabled. Keep inherited community-management, generated-commit,
publication, deployment, scheduled sync, and issue/PR-closing workflows
disabled unless a separate review adapts and authorizes them for ScientFactory.

Audit workflow states after creating, transferring, renaming, or recreating a
source repository, and after any intake that changes `.github/workflows/`.
Repository recreation is incomplete until write-capable inherited automation is
confirmed disabled and required Scient checks are restored on the owned default
branch.

## Review Procedure

1. Start from clean current owned branches and fetch both `origin` and
   `upstream`.
2. Run the repo-local verifier in default mode to capture topology, current
   owned head, official tip, divergence, and the committed checkpoint.
3. Inspect the complete range `reviewedThrough..upstream/<branch>`. Review
   commit subjects, file scope, range statistics, and focused patches for
   security, compatibility, or likely intake candidates.
4. Classify and disposition every official commit. A very broad commit may be
   dispositioned by explicitly named sub-lanes, but the record must not imply a
   full correctness or security audit if none occurred.
5. Create a dated record from
   `lab/external/upstream-reviews/review-template.md`.
6. Update the repo-local state to the exact reviewed tip and run
   `--require-reviewed-tip`. The older `--review-check` spelling remains a
   strict compatibility alias.
7. Submit the source-state and parent-evidence changes through their own
   repository PRs. Cross-link dependencies; do not combine repositories into
   one Git commit.

Advancing `reviewedThrough` means the range was evaluated and dispositioned. It
does not mean the code was executed, accepted, integrated, or proven safe.

## Intake Preference Order

Use the lightest safe relationship:

1. learn only;
2. Scient-owned reimplementation or adapter;
3. focused cherry-pick or patch port;
4. bounded range merge on a maintenance branch; or
5. broad merge only while the source honestly remains `thin-fork-merge`.

Follow the branch convention of the repository receiving the change. The
branch and PR must contain upstream inheritance only. Record exact official
commits, the selected disposition, conflict decisions, and protected Scient
lanes.

## Intake Verification

| Layer | Required evidence |
|---|---|
| Source verification | Repo-local `--intake` command and the maintained CI checks for touched inherited areas. |
| Scient invariants | Identity, storage and migrations, credentials and sessions, project-init boundaries, permissions, and release/update controls affected by the change. |
| Cross-repository smoke | Required when provider, protocol, runtime, approval, tool-event, session, packaging, or shared contract coupling changes; not required for isolated cosmetic work. |

A security fast path may omit unrelated peripheral tests, but it may never omit
affected invariants. If verification discovers new generated files, state,
credentials, or runtime artifacts, clean them before acceptance and record any
durable lesson.

## Acceptance And Evidence

An intake PR is acceptable only when:

- every included upstream change has an explicit disposition;
- protected Scient lanes and conflict resolutions were reviewed;
- required source, invariant, and coupling checks are green;
- rollback is clear; and
- the review record, repo-local state, and parent source evidence tell the same
  story.

After merge, record the exact tested owned head and PR. Advance
`integrationBase` only when the new base is literally present as contiguous
upstream ancestry. For a cherry-pick, adaptation, or reimplementation, list the
source commits and owned PR without advancing the base beyond what history
supports.

## Rollback

Prefer reverting the isolated intake PR. Do not rewrite a protected default
branch. If an intake includes a migration or persisted-state change, use the
source repository's tested recovery path and preserve evidence needed to
reconstruct the pre-intake state.
