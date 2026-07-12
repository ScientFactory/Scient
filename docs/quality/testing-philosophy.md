# Testing Philosophy

Status: Draft
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Defines LitRev's testing philosophy before implementation-specific commands, lanes, and CI gates exist.
Doc type: Testing doctrine

This document defines how LitRev should think about tests. It is not a command reference, CI plan, coverage policy, or test framework decision.

## Core Position

Testing exists to protect LitRev's product invariants: scientific truth, durable project state, user control, local-first reliability, cloud consistency, agent safety, and recoverability.

The goal is not test volume. The goal is to catch real regressions early with the smallest reliable proof that exercises the actual failure mode.

## Required Reasoning

Every meaningful change must identify:

- the invariant it protects
- the risk class it touches
- the test layer that can truthfully catch the failure

Common risk classes:

- product behavior
- scientific integrity
- persistence
- local-first sync and cloud mirroring
- permissions and trust boundaries
- agent execution
- file and artifact safety
- editor and document-model behavior
- UI, accessibility, and usability
- performance and scale
- migration and compatibility

## Regression Proof

Every bug fix needs regression proof unless automation is genuinely impossible.

A regression test should reproduce:

- the triggering condition
- the broken invariant
- the expected post-fix behavior

If automation is not currently viable, document the manual verification path and why automation is not viable yet.

## Smallest Honest Test Layer

Use the cheapest layer that truthfully proves the behavior.

- Pure logic should use fast deterministic tests.
- Domain and project-state rules should test the owned boundary, not only isolated helpers.
- Persistence behavior should use real persistence boundaries when the risk is storage, reload, migration, or recovery.
- Local-first and sync behavior should test offline work, reconnect, conflicts, partial failure, stale clients, and recovery.
- Agent behavior should use replayable scenarios, fixture projects, permission checks, audit checks, and rollback or checkpoint validation.
- Editor and browser behavior should use browser or editor-level tests when the bug depends on real interaction, selection, rendering, or document structure.
- Manual review is valid for product judgment and visual quality, but it does not replace regression proof for known behavior.

Do not invent `unit`, `integration`, or `end-to-end` labels before the implementation has boundaries that make those labels truthful.

## Behavior Over Implementation Detail

Tests should assert product behavior, durable contracts, and observable failure handling.

Avoid tests that depend on incidental helper ordering, private implementation structure, styling details that are not contractual, or internal calls that can change without breaking the product.

If a test would pass while production could still fail, the test is not enough.

## Mock Boundaries

Mocks are acceptable for external providers, clocks, nondeterminism, and expensive dependencies when the mock does not remove the risk being tested.

Do not mock owned state, permissions, persistence, file writes, sync behavior, or agent tool boundaries when those are the actual risk under test.

## LitRev-Specific Proof Obligations

Durable scientific state must have persistence proof: save, reload, migration, failure recovery, and compatibility where relevant.

Local-first and cloud-mirrored behavior must not be proven only through happy paths. Important cases include offline writes, reconnect, conflicts, interrupted sync, partial object upload, stale clients, duplicate mutations, and restore.

Agent actions must be reviewable, attributable, auditable, and reversible. High-impact agent changes must be checkpointed or reversible, or require an explicit irreversible-action approval path. High-impact agent changes require proof that the user can inspect what changed before accepting it.

Scientific integrity needs dedicated coverage. Claims, citations, source records, extraction fields, paper decisions, and manuscript text must not silently detach from evidence.

Scientific runtime execution must be reproducible where possible. Tests and verification should preserve pinned environments, captured inputs, deterministic outputs where practical, and artifact provenance.

Performance is part of correctness for core workflows. A feature that only works on toy projects is not done.

## Model Evaluation

External benchmarks are comparative research, not release proof. Before LitRev assigns final production model roles or enables automatic routing, it must run a replayable internal evaluation suite on representative LitRev workflows.

That later suite should cover scientific faithfulness, citations and evidence, mathematics, data analysis, coding, tools and agents, conversation and writing, long context, and vision or document work. Runs should preserve the model and provider version, reasoning settings, prompts and fixtures, tools, attempts, scoring method, latency, and cost.

Define the detailed methodology in `docs/quality/model-evaluation-methodology.md` when real LitRev workflows and fixtures exist. Until then, external benchmark analysis belongs in `docs/research/source-evaluations/model-benchmark-map.md`.

## Architecture Feedback

When a feature is hard to test truthfully, first ask whether the boundary is wrong.

Weak tests often indicate unclear ownership, hidden coupling, unstable contracts, effect-driven orchestration, or poor observability.

## Review Beyond Automated Checks

When CI and release gates exist, passing them will be necessary but not sufficient.

Tests verify behavior. Review still judges whether the design preserves clear ownership, source truth, recoverability, and long-term maintainability.

## Candidate Testing Conventions

These conventions should be revisited when LitRev has implementation and selected test tooling.

### File Organization

- Prefer tests close to the source or owned boundary they protect.
- Do not force a repo-wide test relocation for aesthetics.
- Use deterministic placement rules once package layout exists.
- E2E and browser tests will likely live in a dedicated `e2e/` area, but this should be decided with the app layout.

### Test Structure

- Use descriptive test names that state the behavior and condition.
- Prefer one behavior per test. Multiple assertions are acceptable when they prove one coherent behavior.
- Prefer `beforeEach` for setup that mutates state. Use `beforeAll` only for immutable expensive setup that cannot leak between tests.

### Mocking

- Mock at true external boundaries, not internal implementation details.
- Do not mock the system boundary that the test is meant to prove.
- Reset or restore mocks, timers, globals, storage, and environment overrides after each test.
- Consider MSW or an equivalent tool for API boundary mocking once frontend or web test tooling is selected.

## Future Execution Docs

When implementation exists, test commands and local execution guidance should live in `docs/development/testing.md`.

When CI, release gates, or scheduled certification exist, their operating policy should live in `docs/operations/ci.md` or another operations document linked from `docs/operations/README.md`.

Do not use as:

- implemented test plan
- command reference
- CI policy
- coverage threshold
- framework lock-in
