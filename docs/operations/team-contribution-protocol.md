# Team Contribution Protocol

Status: Active
Owner: Yaacov
Created: 2026-07-22
Last updated: 2026-07-27
Purpose: Defines the minimum shared workflow and verification evidence for contributions across maintained ScientFactory repositories.
Doc type: Operational procedure

## Outcome

Contributors work in the repository that owns the change, prove the affected
behavior in proportion to its risk, review their own final diff, and seek peer
review when another person's judgment would improve the change. Automated
checks, manual verification, review, merge, deployment, and release remain
separate facts.

This is the current minimum protocol. It is intentionally small and should be
improved when repeated contribution or review failures show that another rule
is needed.

## Document Rules

This document owns the shared contribution flow across maintained
ScientFactory repositories. Each repository's `CONTRIBUTING.md`, `AGENTS.md`,
package documentation, and workflows own repository-specific commands and
technical constraints. The [GitHub operating model](github-operating-model.md)
owns repository roles, branch authority, release promotion, deployment, and
worktree handling.

The draft [Testing Philosophy](../quality/testing-philosophy.md) and [Code
Quality Principles](../quality/code-quality-principles.md) explain the broader
reasoning behind this protocol. Their draft status does not weaken the minimum
workflow defined here, and this protocol does not make every candidate
convention in those documents mandatory.

### Update Policy

Update this protocol when the shared contribution flow, required evidence,
review requirements, or repository boundaries change. Keep implementation
commands in the owning code repository instead of copying them here.

## Shared Contribution Flow

1. Start from the current integration branch of the repository that owns the
   change.
2. Create a short-lived branch for one coherent outcome. Follow any stricter
   branch convention in the owning repository.
3. Understand the current behavior, intended outcome, and affected risk before
   changing files.
4. Run focused checks while developing. Open a draft pull request early when
   hosted checks or collaborator feedback will help.
5. Push fixes to the same task branch. Pull-request checks rerun on the updated
   head; a second staging branch that copies the integration branch is not part
   of the normal flow.
6. Before marking the pull request ready or requesting peer review, complete the
   required automated verification, manual verification, and author self-review
   below.
7. Mark the pull request ready only when its description and evidence match the
   final diff.
8. Merge only after current required checks pass and review conversations are
   resolved. Request peer review when it would improve the change; it is not a
   default approval gate.
9. Verify deployment or publication separately when the change affects a
   deployed or released surface.

Use separate pull requests for separate repositories. Cross-repository work
must state its dependencies and landing order rather than relying on matching
branch names.

## Verification Standard

Verification must match the behavior and risk being changed. Passing a broad
test suite is useful evidence, but it does not replace a focused proof of the
affected behavior.

Every meaningful pull request must identify:

- the problem or intended outcome;
- the important behavior, boundary, or invariant affected;
- the automated checks performed;
- the manual verification performed, or why it is not applicable; and
- anything deferred, unverified, or still uncertain.

### Automated Verification

Use the smallest reliable test layer that can fail for the real regression.
Bug fixes require regression proof unless automation is genuinely impractical.
When automation is not viable, record why and provide a repeatable manual path.

Run repository-wide checks once the change is stable rather than repeatedly
during every edit. The owning repository defines the exact commands and hosted
checks.

### Manual Verification

The author must manually exercise every changed user-facing behavior before
requesting review. Test the real affected journey and relevant failure,
cancellation, restart, recovery, empty, or loading states when they are part of
the risk.

Record enough detail for a reviewer to understand what was exercised: the
environment, starting state, actions, and observed result. Include screenshots
for visible UI changes and a short recording when motion or interaction cannot
be judged from still images.

For changes with no user-facing behavior, such as documentation-only work,
manual product testing may be marked `Not applicable` with a short reason.

### Author Self-Review

Before marking a pull request ready or requesting another person's review, the
author must review the complete final pull-request diff as if it were someone
else's change. Confirm that:

- every changed file belongs to the stated outcome;
- the implementation addresses the real failure or need;
- existing primitives were considered before adding duplicate logic or state;
- important failure and recovery behavior is handled;
- tests and documentation describe the implemented behavior;
- temporary logging, debugging artifacts, secrets, and unrelated changes are
  absent; and
- limitations and deferrals are stated explicitly.

Agent-assisted or generated work has the same requirement. The contributor who
submits it remains accountable for understanding and reviewing the result.
Self-review is always required. Peer review adds independent judgment when
useful, but this shared protocol does not require a non-author approval.

## Pull Request Evidence

Repository templates may use different headings, but a meaningful pull request
should make these facts easy to find:

- problem and intended outcome;
- scope and repository ownership;
- risk or affected invariant;
- automated verification with exact commands or hosted checks;
- manual verification steps and result;
- UI evidence when applicable;
- author self-review confirmation;
- known limitations or deferrals; and
- cross-repository, deployment, migration, or release impact.

Small changes may answer briefly. Evidence should be proportional, not omitted
or padded with irrelevant ceremony.

## Review And Merge

Green checks do not prove that the scope, design, ownership, user experience,
or recovery behavior is correct. Review must compare the stated outcome,
actual diff, and verification evidence.

Request peer review when another person's judgment would materially improve the
change, especially for risky, security-sensitive, or product-direction work.
Peer review is not a default merge gate, and this shared protocol does not set a
required approval count.

New commits require the current head to be rechecked under the owning branch's
protection rules. Do not bypass required checks or leave review conversations
unresolved. A repository-specific or change-specific review requirement still
applies when its owner explicitly establishes one. Emergency handling and
release promotion follow the [GitHub operating model](github-operating-model.md).

## Exceptions And Deferrals

Do not silently convert a failed or unavailable check into success. State what
could not be verified, why, what evidence exists instead, and who is accepting
the remaining risk. A deferral should identify the unresolved work and its
owner or follow-up location when one exists.

Repository or product owners may accept a documented exception. An exception
does not establish a new default and should become a rule only when the same
case repeats and the revised rule is deliberately adopted.
