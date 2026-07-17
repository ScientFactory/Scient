# Code Quality Principles

Status: Draft
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Defines Scient's code quality principles before implementation-specific standards and gates exist.
Doc type: Engineering doctrine

This document defines the engineering quality bar Scient should use when code exists. It is not a command reference, style guide, lint policy, or CI plan.

## Core Position

Scient should optimize for long-term correctness, explainable ownership, and recoverable scientific work over quick local fixes.

A small change is good only if it solves the real problem without making the system harder to reason about.

## Root Cause Over Symptom Patches

Start from the real behavior, constraint, and failure mode before changing code.

Prefer root-cause fixes over patches that hide symptoms. If the honest fix requires a deeper refactor, design the refactor instead of stacking brittle workarounds.

Temporary stopgaps are allowed only when explicitly marked with scope, risk, and follow-up.

## Ownership of Truth

Do not introduce new state ownership without naming who owns truth.

For Scient, ambiguous truth ownership is a critical failure mode. Project files, local databases, cloud mirrors, agent logs, evidence records, manuscript state, and snapshots must not become competing sources of truth.

New code should make ownership, mutation authority, and recovery behavior explicit.

## Boundary Quality

Good architecture has testable boundaries.

Keep product/domain logic separate from UI convenience, sync mechanics, provider internals, and agent session details.

Do not let agents, UI, sync, and database code mutate the same durable truth through unrelated paths.

If a boundary is hard to observe, hard to test, or hard to explain, treat that as design feedback.

## Abstractions

Do not add abstraction because future complexity is imaginable.

Add abstraction only when it reduces current real complexity, protects a stable boundary, removes meaningful duplication, or makes correctness easier to test.

Speculative abstractions are technical debt even when they look clean.

## Comments and Documentation

Comments and docs should clarify intent, constraints, and non-obvious decisions.

Do not use comments or docs to compensate for confusing code, hidden side effects, unclear ownership, or behavior the implementation does not guarantee.

When behavior changes, update the relevant durable docs in the same task.

## Review Bar

Passing tests does not make brittle design acceptable.

Review should still ask:

- Does this fix the real failure mode?
- Does the proof match the risk?
- Does the change preserve clear ownership and boundaries?
- Does it avoid duplicate or mirrored state?
- Can a future maintainer understand the behavior without chat context?
- Is any deferral explicit?

## Review Lenses

Meaningful implementation changes should be reviewed through three lenses:

- Reuse: does the change duplicate existing primitives, helpers, patterns, or domain concepts?
- Quality: does the change preserve clear ownership, boundaries, maintainability, and product intent?
- Efficiency: does the change avoid unnecessary work, hot-path bloat, leaks, broad reads, and no-op updates?

Prefer existing primitives before adding new helpers, utilities, abstractions, constants, state containers, parsing logic, or validation logic.

Avoid duplicate or mirrored state. Local databases, cloud mirrors, files, snapshots, agent logs, and scientific records must not become competing sources of truth.

Do not expose provider internals, agent session details, database mechanics, or sync implementation details through product or domain APIs unless that exposure is the explicit contract.

Avoid parameter sprawl that keeps a weak abstraction alive. If a function needs repeated new flags or loosely related options, reconsider the boundary.

Unify copy-paste only when the abstraction is real. Repetition is acceptable when the shared concept is not stable yet; duplicated product rules should become one named boundary.

Efficiency is part of quality. Avoid duplicate reads or calls, run independent work concurrently when safe, keep blocking work out of hot paths, guard against no-op state updates, clean up listeners and resources, avoid unbounded memory growth, and prefer narrow reads over broad loading.

For filesystem, sync, and project-artifact operations, avoid time-of-check/time-of-use patterns unless there is a product reason to pre-check. Prefer performing the operation and handling the resulting error.

Findings should be fixed in the same task when they are true, scoped, and safe. Otherwise, document the deferral or create the appropriate follow-up.

## Repeated Findings

Repeated issues should become infrastructure.

- One-off issue: fix it locally.
- Repeated issue: document the rule.
- Repeated rule violation: make it executable if practical.
- Repeated agent mistake: add it to `AGENTS.md` or a future Scient skill.

Do not let review comments become permanent folklore.

## Governance and Lint Rules

Repo-specific governance rules must be earned by real failure modes.

Do not start with a large custom lint regime. Begin with ordinary formatter, lint, typecheck, and test gates once code exists.

Every custom rule should name the failure mode it prevents, have tests for the rule itself, and be either enforced, explicitly tracked, or removed.

Warning-only rules should not live forever without a decision.

## Deferred Execution Details

Do not use this document as:

- implemented coding standard
- command reference
- CI policy
- Git workflow
- lint configuration
- release gate
