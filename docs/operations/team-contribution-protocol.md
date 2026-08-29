# Team Contribution Protocol

Status: Active
Owner: Yaacov
Created: 2026-07-22
Last updated: 2026-08-28
Purpose: Defines the minimum shared workflow and verification evidence for contributions across maintained ScientFactory repositories.
Doc type: Operational procedure

## Outcome

Contributors work in the repository that owns the change, prove the affected
behavior in proportion to its risk, complete a Quality Review before presenting
the work as ready, and complete an Integration Readiness Review before merge.
Automated checks, manual verification, review, merge, deployment, and release
remain separate facts.

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
6. Before marking the pull request ready or requesting final peer review,
   complete the required automated verification, manual verification, and
   Quality Review below.
7. Mark the pull request ready only when its description and evidence match the
   final diff.
8. Request peer review when it would improve the change; it is not a default
   approval gate and this protocol does not prescribe a fixed reviewer count.
9. Once the exact candidate and its required evidence are current, complete an
   Integration Readiness Review against that head. Merge only after required
   checks pass, applicable human UI review is complete, and review
   conversations are resolved.
10. Verify deployment or publication separately when the change affects a
    deployed or released surface.

Use separate pull requests for separate repositories. Cross-repository work
must state its dependencies and landing order rather than relying on matching
branch names.

Every implementation or documentation pull request must make its documentation
impact explicit in one concise declaration:

```text
Documentation impact: None — <reason>
Documentation impact: Updated — <paths>
Documentation impact: Dependent PR — <repository and link>
```

Use one line, choosing the applicable form. `None` requires a real reason, not
silence. `Updated` points to the existing owners changed with the work. A
genuine cross-repository consequence uses `Dependent PR` and states the landing
order; do not copy the same prose into both repositories. This trial remains
deliberately smaller than a taxonomy checklist and should grow only if repeated
failures prove another field is needed.

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

### Manual Verification And Human UI Review

Every changed user-facing behavior must be manually exercised by a human before
merge. The author should do this before requesting final review when practical.
Test the affected journey and relevant failure, cancellation, restart,
recovery, empty, and loading states in proportion to the risk.

Record the candidate, reviewer, environment, steps, and observed result. Include
before-and-after screenshots for visible UI changes and a short recording when
motion or interaction cannot be judged from still images.

Every user-visible UI or interaction change requires a human to inspect the
rendered candidate. Apply product judgment to the relevant behavior, hierarchy,
copy, states, interaction, visual quality, responsiveness, and accessibility.
Automated checks and agent-operated acceptance may support but never replace
this inspection.

The human reviewer may be the author, product owner, or another suitable
reviewer unless a repository-specific rule says otherwise. This requirement is
a product-acceptance gate, not a requirement for a non-author GitHub approval.
Without the required human inspection, the change is not integration-ready.

For changes with no user-facing behavior, such as documentation-only work,
manual product testing may be marked `Not applicable` with a short reason.

## Quality Review

Before marking a pull request ready or requesting another person's final
review, establish the intended outcome and acceptance criteria from the pull
request, linked issue or decision, and current behavior. Then review the complete
candidate diff against its intended base, together with the affected tests and
documentation. The contributor remains accountable for this review even when
agents or other people assist with it.

Start with the [Code Quality
Principles](../quality/code-quality-principles.md), especially its three Quality
Review lenses:

- Reuse: use existing concepts and primitives where they are the better fit.
- Quality: keep the change correct, coherent, maintainable, and well-owned.
- Efficiency: avoid unnecessary work, avoidable cost, and resource retention.

These are prompts, not limits. Follow any material concern revealed by the
actual change.

Confirm that the scope is coherent, the real need is addressed, ownership and
failure behavior remain sound, tests and documentation match, temporary or
unrelated material is absent, and limitations are explicit.

Classify each material finding as resolved, not applicable or incorrect with a
short rationale, residual risk accepted by the appropriate owner, or deferred
with an owner or follow-up location when one exists. Fix true, scoped problems
without using review as permission for unrelated refactoring.

Agent-assisted or generated work has the same requirement.

## Integration Readiness Review

Before merge, review the exact final candidate head in its current integration
context. Confirm the base, complete diff, intended behavior, dependencies,
verification evidence, unresolved conversations, and operational or release
impact. Earlier review evidence may be reused only when later commits did not
invalidate it.

Apply the concerns relevant to the change, including:

- correctness, reliability, concurrency, lifecycle, performance, recovery,
  regression, and paths that could lose user work or durable data;
- security, privacy, permissions, credentials, sessions, migrations,
  destructive operations, updater behavior, deployment, and release safety;
  and
- architecture, ownership, reuse, maintainability, product identity, test
  sufficiency, product behavior, UX, information hierarchy, interaction,
  visual consistency, responsive behavior, and accessibility.

These groupings organize attention without limiting investigation.

Investigate broadly and report precisely. Follow relevant unchanged callers,
contracts, history, and runtime paths when needed. Before labeling a concern a
defect, verify its concrete trigger, affected invariant, observable impact, and
root cause against the current code and evidence. For other material findings,
name the relevant principle or constraint and the practical consequence.
Distinguish a validated defect from missing evidence, state material
uncertainty, and consolidate multiple symptoms of one root cause. Personal
taste and unsupported hypotheticals are not findings; product judgment tied to
the intended experience or an established principle may be.

Review tests, fixtures, and workflows as evidence-bearing code. Confirm that a
green result was not obtained by weakening assertions, removing meaningful
cases, making required checks conditional or non-blocking, or changing fixtures
to encode the new result without proving the intended behavior. Any intentional
change to a verification gate must be explicit and justified.

When capable agent-review infrastructure is available and separate perspectives
would improve confidence, use independent read-only agents for distinct
concerns. Give them the candidate, intent, constraints, evidence, and known
uncertainty; let them conclude independently before reconciling findings.

Reviewer arrangement is risk-based rather than fixed. A small coherent change
may need one reviewer, while broad or high-risk work benefits from separate
specialists. Agent availability never turns weak evidence into sufficient
evidence.

Record a clear verdict: integration-ready, not integration-ready with findings,
or blocked on missing evidence or authority. An unresolved finding that could
materially harm correctness, security, privacy, durable data, user experience,
operations, or release safety blocks an integration-ready verdict unless the
appropriate owner explicitly accepts the residual risk.

After a material change, repeat only the Quality Review and verification that
could have been invalidated, then issue a fresh Integration Readiness verdict
for the new head.

## Pull Request Evidence

Repository templates may use different headings, but a meaningful pull request
should make these facts easy to find:

- problem and intended outcome;
- scope and repository ownership;
- risk or affected invariant;
- automated verification with exact commands or hosted checks;
- manual verification steps and result;
- UI evidence when applicable;
- Quality Review findings and dispositions;
- Integration Readiness Review verdict and remaining findings;
- known limitations or deferrals; and
- cross-repository, deployment, migration, or release impact; and
- the concise documentation-impact declaration above.

Small changes may answer briefly. Evidence should be proportional, not omitted
or padded with irrelevant ceremony.

## Review And Merge

Green checks do not prove that the scope, design, ownership, user experience,
or recovery behavior is correct. Review must compare the stated outcome,
actual diff, and verification evidence.

Quality Review and Integration Readiness Review are different gates. The first
improves the candidate before it is presented as ready; the second decides
whether the exact final candidate is safe and appropriate to integrate now.
They need not be separate meetings, reviewers, or reports. When a small
candidate remains unchanged, one proportional review pass may satisfy both if
it covers both purposes and records the final head and verdict. Neither review
is a release decision.

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

Automated or agent-operated evidence cannot satisfy the human UI review
requirement.
