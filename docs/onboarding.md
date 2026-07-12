# Collaborator Onboarding

Status: Active
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Gives new LitRev collaborators a deliberate reading journey through the project, its repository, and its sources of truth before task-specific work begins.
Doc type: Repo orientation

## Document Rules

This guide owns the collaborator reading journey and repository tour. It does not own product direction, architecture, planning, research conclusions, agent rules, access setup, contribution mechanics, or individual task instructions.

Use the linked source documents as authority. Do not copy their detailed content into this guide. Update this guide when the repository's maturity, structure, authority boundaries, or essential reading path changes.

## Who This Is For

This guide is for anyone joining LitRev work: product collaborators, researchers, designers, engineers, reviewers, and people working through AI agents.

Complete the shared reading journey before starting the contribution-area route that matches your work. The task itself should arrive separately, with its own objective, scope, authority, expected output, and validation requirements.

## Current Project State

LitRev is a local-first, cloud-mirrored scientific workspace where researchers, collaborators, and AI agents should be able to carry a research project from its initial question to publication-ready outputs.

This repository is still documentation-first. It contains accepted product direction, evolving architecture and planning, source-backed research, quality principles, and controlled lab experiments. It does not yet contain the complete LitRev application or all of the development and operational workflows that the documents anticipate.

The repository currently owns LitRev product and project knowledge. It is not yet the general memory for company strategy, finance, legal, people, customer records, or cross-product authority. A proposed connected-company model is documented in [Repository Scope And Company Memory](planning/repository-scope-and-company-memory.md), but it does not change the current boundary.

Keep that maturity boundary in mind throughout onboarding:

- accepted product direction describes what LitRev should become;
- proposed or draft architecture describes direction that may still change;
- planning documents organize possible or upcoming work without becoming product truth;
- research and lab evidence can inform decisions without becoming accepted architecture or current implementation;
- placeholder documents reserve future homes and must not be treated as present guidance.

## Documentation Foundation And Placeholders

The repository's documentation structure is an intentional foundation for the project, not a claim that every part of LitRev has already been designed or built. The [Documentation index](README.md) establishes the main knowledge areas, and the [Documentation Policy](documentation-policy.md) defines how material enters those areas and becomes trustworthy. Product, architecture, planning, research, design, quality, development, and operations work should grow on top of this base instead of creating disconnected documents or competing sources of truth.

Many files are deliberately marked `Placeholder`. For example, the [Development](development/README.md) and [Operations](operations/README.md) documents reserve homes for workflows that do not exist yet. Other placeholder files reserve future homes within their own areas. A placeholder should explain what will belong there, why the home exists, and what it must not be used as today. It is not an accepted decision, current guidance, an implementation specification, or evidence that the described system exists.

As LitRev matures, collaborators should build on this documentation base deliberately:

1. Put new knowledge in the existing area or placeholder that was created to own it.
2. Add real content only when there is a decision, evidence, implementation, or operating practice to document.
3. Update the document's status, date, rules, and owning index when its role changes.
4. Promote material from planning, research, or experiments only when it has earned a durable product, architecture, implementation, or operational home.
5. Create a new document only when the existing structure has no correct home.

Do not fill placeholders merely to make the repository look complete. Their purpose is to keep future growth coherent, make missing decisions visible, and prevent premature ideas from being mistaken for project truth.

## Shared Reading Journey

Read these documents in order. The order is intentional: understand the accepted product first, then its evolving principles, then learn how project knowledge is organized and governed, and finally understand how agents are expected to work inside the repository.

1. **Enter through the repository.** Read the [LitRev repository README](../README.md) for the shortest current-state statement and the official starting links.
2. **Understand the product.** Read the [LitRev Product Requirements Document](product/PRD.md) in full. It is the accepted product truth. Pay particular attention to its document rules, product overview, principles, research lifecycle, workspace requirements, primary journeys, non-goals, readiness criteria, and open questions.
3. **Understand the principles behind the product.** Read the [Product Philosophy](product/product-philosophy.md). It explains the long-term ownership and first-principles posture behind the work. Its status is `Draft`, so use it as evolving product guidance and do not let it override the accepted PRD.
4. **Learn the repository map.** Read the [Documentation index](README.md) to understand where product, architecture, planning, research, design, quality, development, and operations knowledge belongs.
5. **Learn how to judge what you read.** Read the [Documentation Policy](documentation-policy.md), especially its status values, placement rules, evidence rules, promotion rules, and truth rules. This is what lets you distinguish accepted direction from proposals, plans, evidence, placeholders, and implemented behavior.
6. **Understand the agent boundary.** Read [AGENTS.md](../AGENTS.md), even if an agent will do most of the repository work. It defines how agents must reason, which sources they must trust, how they should place documentation, and what they must not invent.

Do not replace this sequence with a chat summary. Summaries can help with comprehension, but the linked repository documents remain the durable project knowledge.

## Repository Tour

After the shared journey, use this map to know where to look. You do not need to read every area immediately; open the area index before working in that area.

| Area | Start with | What it contains and how to treat it |
| --- | --- | --- |
| Product | [Product Documentation](product/README.md) | Product truth and durable product principles. This is the first place to check what LitRev should be and why. |
| Architecture | [Architecture Documentation](architecture/README.md) | Architecture direction, proposed decisions, future architecture homes, and accepted decision records. Check each document's status before relying on it. |
| Planning | [Planning](planning/README.md) | Roadmap seeds, candidate work, open questions, and build sequencing. Planning is not product truth or current implementation. |
| Research | [Research](research/README.md) | External-source evaluations, spike reports, visual references, and research evidence. Research must be promoted before it becomes product or architecture authority. |
| Design | [Design](design/README.md) | Early design notes, future design homes, and surface-specific guidance. Much of this area is still draft or placeholder material. |
| Quality | [Quality](quality/README.md) | Testing, engineering, and quality doctrine. These documents define principles, not yet-complete command or CI references. |
| Development | [Development](development/README.md) | A placeholder for setup, commands, package structure, APIs, and development workflows once real implementation surfaces exist. |
| Operations | [Operations](operations/README.md) | A placeholder for deployment, monitoring, support, backup, release, and maintenance workflows once they exist. |
| Experimental work | [LitRev Lab](../lab/README.md) | Controlled source inspection, forks, adapters, prototypes, and verification evidence. Nothing here is accepted architecture or current product implementation unless it has been promoted. |
| Agent workflows | [Project Skills](../skills/README.md) | Workflow helpers for agents. Skills route agents back to project authority; they do not become authority themselves. |

## Contribution-Area Reading Routes

After completing the shared journey, follow every route relevant to your contribution. Read each route in the order shown.

### Product And Product Planning

The accepted [LitRev Product Requirements Document](product/PRD.md) and draft [Product Philosophy](product/product-philosophy.md) from the shared journey come first. Then read:

1. [Planning](planning/README.md) to understand what planning documents may and may not own.
2. [Product Planning](planning/product-planning.md) for current roadmap seeds, candidate features, open product questions, and cross-document handoffs.

Treat product-planning material as draft planning until stable decisions are promoted into the accepted product or architecture documents.

### Product Design And UX

Complete the product route first. Then read:

1. [Design](design/README.md) to understand the maturity and boundaries of the design area.
2. [UX/UI Notes](design/ux-ui-notes.md) for early cross-surface observations that have not yet become durable design doctrine.
3. [Chat Interface UX](design/chat-interface-ux.md) only when the work touches chat or streaming conversation behavior.

Do not infer implemented interfaces from design notes, screenshots, or placeholders.

### Architecture And Engineering Direction

1. [Architecture Documentation](architecture/README.md) to learn the architecture area's authority and current map.
2. [Technology Stack](architecture/technology-stack.md) for the proposed stack direction, actual scaffold state, explicit non-decisions, deferred choices, and validation gates.
3. [Security And Permissions](architecture/security-and-permissions.md) for the draft trust-boundary and permission principles that architecture and agent-tool proposals must respect.
4. Continue only into the task-relevant architecture documents identified by the [architecture index](architecture/README.md) or the task handoff.

The stack is proposed, security guidance is draft, and several architecture files are future homes. None of them should be described as implemented unless current repository evidence proves it.

### Open-Source Evaluation And Prototyping

Complete the architecture route first when the work may influence implementation direction. Then read:

1. [Research](research/README.md) for the research area's evidence and promotion boundaries.
2. [Source Evaluations](research/source-evaluations/README.md) for the rules governing evaluations of external systems.
3. [LitRev Open-Source Adaptation Map](research/source-evaluations/open-source-adaptation-map.md) for the current cross-source synthesis, candidate roles, LitRev-owned boundaries, and prototype sequence.
4. [Open-Source Adaptation Build Strategy](planning/open-source-adaptation-build-strategy.md) for the draft path from research candidates toward controlled build experiments.
5. [LitRev Lab](../lab/README.md) for the experimental layout, promotion rule, current evidence map, and lab guardrails.
6. Read only the spike report, lab note, or source material named by the task handoff; do not read raw research chronologically and assume the newest or most detailed file is authoritative.

### Quality And Implementation Review

Complete the architecture route first when reviewing or writing implementation. Then read:

1. [Quality](quality/README.md) for the boundary between quality doctrine and future execution documentation.
2. [Testing Philosophy](quality/testing-philosophy.md) for LitRev's risk-based testing posture and scientific-workflow proof obligations.
3. [Code Quality Principles](quality/code-quality-principles.md) for the engineering review bar, truth ownership, boundary quality, and root-cause expectations.

These documents define the intended quality bar before complete project-specific commands, test lanes, and CI procedures exist.

### Agent-Assisted Work

The shared journey already requires [AGENTS.md](../AGENTS.md). Then read:

1. [Project Skills](../skills/README.md) to see which repository-specific workflows exist and how they relate to project authority.
2. For product management, PRD changes, feature analysis, roadmap work, or product research synthesis, read the [LitRev Product Stewardship skill](../skills/product/litrev-product-stewardship/SKILL.md) before acting.

An agent's memory, chat history, or generated summary is not project authority. Agents and collaborators must return to the linked repository sources when making or reviewing durable claims.

### Documentation Stewardship

The shared journey already includes the [Documentation index](README.md) and [Documentation Policy](documentation-policy.md). Before changing a durable document:

1. When an agent will manage the documentation, have it read the [LitRev Documentation Stewardship skill](../skills/documentation/litrev-documentation-stewardship/SKILL.md).
2. Open the index for the area that should own the information.
3. Read the target document in full, including its metadata and document rules.
4. Decide whether the material is product truth, architecture direction, an architecture decision, planning, research evidence, current implementation, or a future home.
5. Update the existing canonical document when it has a proper home; create a new document only when it does not.

If the material concerns company-wide strategy, finance, legal, people, customer records, or cross-product authority, read [Repository Scope And Company Memory](planning/repository-scope-and-company-memory.md) and do not create a new LitRev folder until that broader repository scope is accepted.

## How To Reorient Before New Work

Onboarding creates a shared baseline, but the repository will continue to change. Before each new piece of work:

1. Re-check the metadata and document rules in the sources that govern the work.
2. Start from accepted product truth, then follow links into the relevant architecture, planning, research, design, quality, or experimental context.
3. Read the current target files instead of relying on remembered wording, old chat context, or a previous summary.
4. Treat implementation claims as current only when they are supported by current repository files or verified behavior.
5. Keep the task handoff separate from onboarding. The handoff should identify the objective, scope, relevant files, decision authority, expected output, and required validation for that particular assignment.

## Onboarding Completion Check

A collaborator is oriented when they can:

- explain what LitRev is, who it is for, and the research lifecycle it aims to support;
- state honestly that the repository is documentation-first and distinguish planned or experimental work from implemented product behavior;
- identify where product truth, architecture direction, planning, research evidence, quality doctrine, lab evidence, and agent guidance live;
- interpret `Accepted`, `Active`, `Draft`, `Proposed`, `Placeholder`, `Deprecated`, `Superseded`, and `Historical` correctly;
- find the correct reading route for their contribution area;
- explain why planning, research, lab notes, agent memory, and chat summaries cannot silently override durable project authority;
- begin a task-specific handoff without needing a general repository tour repeated.

## Maintenance

Keep this guide short enough to remain usable and complete enough to prevent authority mistakes. Update it when:

- the repository moves from documentation-first planning into real implementation;
- the required shared reading order changes;
- a new canonical document or contribution area is added;
- a placeholder becomes active guidance;
- development or operational workflows become real;
- agent protocols or project-skill routing materially change.

Do not turn this guide into a roadmap, contribution task list, setup manual, or duplicate project specification. It should remain the stable route into the sources that own those subjects.
