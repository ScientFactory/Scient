---
name: papilab-documentation-stewardship
description: Apply PapiLab's documentation policy to create, update, review, move, promote, retire, and reconcile repository documentation and progress records. Use for documentation audits, repository-scope and placement questions, AI-assisted durable knowledge capture, metadata or status changes, placeholder activation, index maintenance, conflict or drift reconciliation, and documentation resulting from product, architecture, research, implementation, or operations. Do not use for product analysis alone, code changes without documentation impact, or read-only status lookup.

---

# PapiLab Documentation Stewardship

## Core Judgment

Preserve one coherent, truthful project knowledge system. Update the existing owner before creating a new document, and keep accepted truth distinct from proposals, planning, research, placeholders, experiments, and implementation.

Capture only knowledge that creates durable future context. AI may draft and organize it, but a real human owns accepted or active material.

In the current documentation-first phase, repository documents are the main durable record of project direction and state.

Use this skill as a workflow. Treat `docs/documentation-policy.md`, `AGENTS.md`, the relevant area index, and each document's own rules as authority.

Use `papilab-product-stewardship` for product judgment. Use both skills when product work also changes durable documentation.

## Choose The Mode

Choose the smallest mode that satisfies the request:

- `review` - inspect and report without editing.
- `plan` - recommend a documentation change without applying it.
- `update` - revise an existing owner; use this by default for changes.
- `create` - add a durable document only when no correct home exists.
- `promote` - move evidence, planning, or a proposal into durable authority after acceptance or proof.
- `reconcile` - repair indexes, links, statuses, or stale dependent claims.
- `retire` - deprecate, supersede, or mark material historical while preserving useful context.

Do not edit in `review` or `plan` mode unless the user explicitly expands the request.

## Read Proportionally

Always:

1. Inspect the worktree and preserve unrelated changes.
2. Confirm that the material belongs inside the current PapiLab repository.
3. Read the complete target document, including metadata, document rules, and any update policy.
4. Read the owning area index and any canonical source the target depends on.

Then load only what the task requires:

- For creation, movement, promotion, retirement, or broad audits, read `docs/documentation-policy.md` in full and inspect `docs/README.md`.
- For product or architecture truth, read the relevant canonical product or architecture documents before changing downstream material.
- For current-code, command, configuration, API, deployment, or test claims, inspect source or verified command output. Label unverified claims as inferred.
- For progress, read the planning, architecture gate, lab evidence, implementation, or operations surface that owns that progress.
- For collaborator or agent routing, inspect `docs/onboarding.md`, `AGENTS.md`, and `skills/README.md` as relevant.

Do not scan the whole repository when a narrow read can establish the truth.

Ask only when a missing answer changes authority, placement, privacy, or permission. Otherwise inspect the repository, make the narrowest reasonable assumption, and label uncertainty.

## Apply The Workflow

1. Decide whether the material creates durable future context. Do not promote raw chat, meeting, transcript, or task output by default.
2. Classify it using the narrowest accurate type in the documentation policy. Split it only when different authorities should own different parts.
3. Find the current owner. Prefer updating it and linking from dependent documents. AI is not the accountable owner.
4. Choose a truthful status and update `Last updated` when the document's meaning changes. Never mark material `Accepted` or `Active` without human authority or existing evidence of it.
5. Preserve uncertainty, exact reasoning, exceptions, and source context. Label drafts, proposals, assumptions, open questions, and unverified findings.
6. Make the narrowest coherent edit. Use clear current-state language and repository-relative links.
7. Update the owning index when adding, moving, renaming, superseding, or deprecating a durable document.
8. Search for directly affected references, changed dependencies, and stale claims. Reconcile only those surfaces.
9. If governing sources conflict, do not choose silently or synthesize false agreement. State the contradiction and route it to the owning person, document, or open-question surface.

Keep raw ideas in `docs/planning/idea-inbox.md` until evaluated. Keep temporary experiment evidence under `lab/` until promoted. Keep repeated repository-wide agent behavior in `AGENTS.md`; use a project skill for a repeated task-specific workflow.

## Handle Placeholders And Progress

Treat placeholders as intentional future homes, not unfinished tasks. Leave them unfilled until real decisions, evidence, implementation, or operating practice exists. When activating one, revise its purpose and rules, change its status and date, and update its index.

Record progress only in the surface that owns it:

- candidate work and open questions in planning;
- architecture validation in the defining architecture document;
- exact experiment results in dated lab notes or spike reports;
- accepted decisions in their canonical owner or an architecture decision record;
- implemented or operational behavior only where current evidence supports it.

Distinguish planned, in-progress, completed, verified, deferred, blocked, rejected, and promoted work in the owning progress content; do not turn these into document metadata status values. Do not invent a global tracker, roadmap, cadence, or status dashboard.

## Safety

- Keep review-only requests read-only.
- Preserve user and concurrent-agent changes; re-read touched files immediately before patching.
- Do not invent architecture, commands, environment variables, services, schemas, decisions, progress, tests, or approvals.
- Do not expose secrets, credentials, private data, or raw sensitive logs.
- Do not fill placeholders to imply maturity or silently promote planning, research, or lab evidence.
- Do not stage, commit, push, publish, upload, delete, or broadly reorganize documentation unless the user authorizes that action.
- Do not let chat history, agent memory, or this skill become project authority.

## Verify

Before finishing, check:

1. Metadata, status, purpose, document type, content, and authority agree.
2. The material belongs in the PapiLab repository and has a real accountable owner where required.
3. Placement follows the documentation policy, context is navigable, and canonical truth is not duplicated.
4. Planned, proposed, experimental, implemented, and historical material remain distinct.
5. Contradictions and uncertainty remain visible instead of being smoothed away.
6. New or changed links resolve and affected indexes are current.
7. Renamed, moved, retired, or dependency-changed paths have no stale references or claims.
8. Implementation claims are source-backed, verified, or explicitly labeled inferred.
9. The final diff contains only intended changes and leaves unrelated work untouched.
10. `git diff --check` passes and the changed documents read coherently in their real order.

Use `rg`, scoped diffs, and `git status --short` for targeted verification. Do not invent repository-specific validation commands.

## Report

State the mode used, files reviewed or changed, where durable truth now lives, status or promotion decisions, validation performed, remaining uncertainty, and relevant pre-existing changes left untouched.
