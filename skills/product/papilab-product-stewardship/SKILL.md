---
name: papilab-product-stewardship
description: Shape PapiLab product direction, PRDs, feature analysis, roadmap notes, and product decisions while preserving repo truth, evidence boundaries, and the distinction between product, architecture, planning, and research.
---

# PapiLab Product Stewardship

Use this skill when shaping PapiLab product direction, updating product docs, evaluating product items, writing PRD material, synthesizing research input, or clarifying product decisions.

PapiLab is an agent-driven workspace for scientists to keep an entire research project in one place: evidence, files, code, data analysis, citations, collaboration, and the path to a publication-ready manuscript.

## First Move

Before writing or changing anything, identify what kind of work this is:

- product truth
- architecture direction
- architecture decision
- implementation candidate
- research evidence
- planning note
- current implementation

Use the repo documentation policy to place it correctly.

## Required Behavior

- Read the relevant current repo docs before proposing changes.
- Do not describe planned architecture as implemented architecture.
- Keep the PRD focused on what PapiLab should be and why.
- Put stack, runtime, package, sync, database, and implementation details in architecture or planning docs.
- Preserve uncertainty. Mark assumptions, open questions, guesses, and unvalidated recommendations.
- Prefer clear current-state wording over polished vague language.
- Compare real alternatives when useful, then make a concrete recommendation.
- Do not import another product's shape just because its tooling is attractive.
- Treat external model answers, competitor notes, and OSS evaluations as research evidence until promoted.
- Avoid fake precision. Use metrics only when they are real, measurable, or explicitly proposed.

## Product Checks

Before recommending a product direction, ask:

- Does this improve agent-driven scientific work?
- Does this preserve or improve the manual researcher workflow?
- Will researchers need this in their real workflow?
- Do agent edits and manual edits stay synchronized on the same project objects?
- Can the researcher inspect, understand, and continue the work manually?
- Is this strengthening the workspace, or merely routing more behavior through chat?
- Is this necessary for the current step, or should it be deferred?
- What is the right mobile role for this item, if any?

## Platform And Timing Checks

For every product item, decide whether it belongs in the current step and whether it needs a mobile version.

Ask:

- Will researchers need this in their real workflow?
- Is this necessary now, later, or not at all?
- What user workflow, product risk, or scientific-workflow gap does it solve at this step?
- What is the smallest complete version that preserves PapiLab's quality bar?
- Would delaying this block agent-driven work, manual researcher work, trust, review, sync, or project coherence?
- Should this exist on mobile?
- If yes, is mobile meant to provide full parity, lightweight review, reading, capture, approvals, notifications, or project continuation?

Do not assume mobile parity by default. Do not ignore mobile by default. Make the role explicit.

## Useful Outputs

Choose the lightest artifact that fits the task:

- PRD update
- feature brief
- product decision note
- roadmap note
- research synthesis
- competitive or OSS source evaluation
- open-questions list
- recommendation with tradeoffs

## Output Shape

For most tasks, use this structure:

1. Current truth
2. Product question
3. Options or interpretation
4. Recommendation
5. Risks and open questions
6. Where this belongs in the repo

## Hard Boundaries

- Do not create new durable docs unless the existing docs do not have a proper home for the material.
- Do not duplicate canonical truth across files.
- Do not invent commands, schemas, services, APIs, users, metrics, launch plans, or stakeholder approvals.
- Do not let generic SaaS product-management templates override PapiLab's scientific-workflow reality.
- Do not make the manual workspace a secondary viewer for agent output.

## Final Check

Before finishing, verify:

- Is this product truth, architecture, research, or planning?
- Did I preserve the repo's current maturity?
- Did I keep claims evidence-backed or clearly labeled?
- Did I protect both agent-driven work and first-class manual control?
- Did I evaluate whether each product item is necessary now, later, or not at all?
- Did I decide what mobile role, if any, each product item should have?
- Did I avoid unnecessary process and template bulk?
