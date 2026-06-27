# LitRev Product Requirements Document

Status: Accepted
Version: v1
Owner: Yaacov
Last updated: 2026-06-28
Purpose: Defines LitRev's product direction, core capabilities, user experience principles, and product constraints.
Doc type: Product truth

## Document Rules

The PRD defines what LitRev should be and why it matters. It should not define how the product is implemented.

Implementation plans, package structure, task sequencing, and framework-specific code patterns do not belong in the PRD. Those belong in planning, architecture, development, or quality docs.

### Update Policy

Always update the current status of a PRD item when its real product or implementation state changes.

Update the PRD whenever LitRev's product direction changes, including adding, removing, or materially changing a feature, capability, product constraint, or user experience principle.

## Product Overview

LitRev is a local-first scientific workspace where researchers, collaborators, and AI agents run an entire research project together, from early project formation through publication-ready outputs. Each project brings research materials, sources, data, analysis work, writing, citations, decisions, memory, collaboration, and outputs into one durable workspace.

The agent is a real project worker inside LitRev's workspace. Chat is a primary way researchers work with the agent: asking questions, planning, delegating tasks, discussing project context, and turning conversation into durable project changes. Chat should be project-native and connected to the workspace, while the project record, evidence, files, data, draft, artifacts, and review surfaces remain the product center.

The goal of LitRev is to make scientific work faster without making it opaque. Researchers should be able to work manually, delegate safely, collaborate, preserve project history, and keep ownership of the work.

## Target Users

LitRev is built for people doing scientific and scholarly research: PhD students, postdocs, clinician-researchers, academic researchers, research assistants, and small research teams who need one durable workspace for a project from early formation through publication-ready outputs.

LitRev should organize work around the research project, not around one fixed user type. Role-specific capabilities should be added when they strengthen the shared project workflow.

## Product Principles

### Project-Centered Research

LitRev should organize scientific work around the research project as the durable center of work. Sources, notes, protocols, evidence, data, analysis, figures, manuscripts, memory, agent actions, and collaboration should belong to one connected project record instead of being scattered across tools, files, notebooks, and chat threads.

### Agentic-First, Workspace-Native, Researcher-Owned

LitRev is agentic-first and workspace-native. Researchers should be able to work conversationally with the project agent, delegate from project objects, and continue the same work through high-quality manual surfaces. The agent does real project work inside the project context: sources, evidence, files, code, analyses, figures, drafts, citations, scientific methods, and artifacts.

Agentic-first does not mean chat-only or agent-only. Important work must remain inspectable, editable, correctable, and recoverable through high-quality product surfaces. Manual interaction is a reliability requirement: it lets researchers understand, verify, continue, and own the work agents help produce.

### Traceable Scientific Work

LitRev should preserve the relationships that make research trustworthy. Claims, sources, source regions, extracted evidence, citations, analysis outputs, figures, tables, manuscript text, and decisions should remain connected.

When support is missing, weak, uncertain, conflicting, or agent-generated, LitRev should make that visible instead of hiding uncertainty behind polished output.

Unknown data should stay unknown. Missing metadata, uncertain source identity, parser failures, low-confidence extraction, ambiguous duplicate matches, stale analysis outputs, and incomplete citation data should remain visible instead of being silently converted into authoritative-looking values.

### Local-First, Collaborative, And Versioned

LitRev projects should be locally owned, cloud-mirrored when useful, and designed for collaborative and versioned research work. Cloud mirroring should support backup, cross-device continuation, sharing, teamwork, and collaboration without becoming the only source of truth.

LitRev should support multi-user project work, including comments, suggestions, assignments, approvals, and synchronized co-editing where real-time collaboration is useful. Real-time collaborative editing should strengthen the shared project record without replacing version history, attribution, review, or recovery.

LitRev should work naturally with Git or Git-like versioning for project history, review, comparison, recovery, and power-user workflows. Git integration should strengthen transparency and portability, but normal collaboration should not require researchers to manage Git directly.

### Connected Research Outputs

LitRev should connect research inputs to research outputs. Manuscripts, reports, figures, tables, exports, and publication artifacts should remain connected to the sources, evidence, data, analysis, decisions, and revisions that produced them.

### Open Research Ecosystem

LitRev should connect deliberately with useful external research tools, formats, databases, and services while keeping the LitRev-owned project model at the center.

Researchers should be able to bring work in and send work out through reference managers, citation formats, scholarly databases, document formats, data files, code environments, publishing systems, repositories, cloud drives, and open-science platforms. External integrations should extend the project workspace without defining its core shape or fragmenting the project record.

External tools should act as adapters, engines, projections, import sources, export targets, or continuation paths. They should not become the source of truth for LitRev's scientific project model.

## Research Project Lifecycle

LitRev should support a scientific or scholarly research project from early formation through publication-ready outputs, preservation, and future continuation.

The lifecycle is not strictly linear. Researchers often revisit the question, sources, evidence, methods, data, analysis, figures, and writing as the project develops. A project may start from a research question, a literature gap, a clinical or applied problem, an existing dataset, data gathered before the question is settled, a protocol, a draft, or a collection of sources. LitRev should support multiple entry points while helping the researcher turn loose material into an organized project record.

Not every project needs every stage. A literature-heavy review, a computational project, a thesis chapter, a clinical report, and a multi-paper PhD project may emphasize different parts of the lifecycle. The product requirement is that the work remains connected.

### 1. Define The Project Direction

Researchers should be able to capture the project's topic, question, goals, hypotheses, scope, collaborators, constraints, and initial plan.

For structured projects, this may become a protocol, eligibility criteria, extraction plan, analysis plan, or reporting plan. For exploratory or data-first projects, it may begin as notes, datasets, observations, and decisions that become more structured over time.

### 2. Gather And Organize Project Material

Researchers should be able to bring in the materials their work depends on: papers, references, PDFs, notes, protocols, datasets, code, images, prior drafts, institutional files, and external project artifacts.

LitRev should help organize these materials with metadata, provenance, search, and links to the project record.

### 3. Read, Annotate, And Make Decisions

Researchers should be able to read sources, annotate important passages, record interpretations, screen or classify material when needed, and preserve decisions.

These decisions may include inclusion or exclusion reasons, quality judgments, method choices, unresolved questions, assumptions, analysis choices, and writing decisions.

### 4. Build Evidence And Project Knowledge

LitRev should help turn reading and project work into reusable knowledge: source chunks, evidence records, extracted values, claims, notes, decisions, and links between them.

The project should support synthesis, comparison, contradiction tracking, uncertainty, and source-grounded answers without turning evidence into opaque chat output.

### 5. Work With Data And Computation

Many research projects require data, code, statistics, or computational workflows.

LitRev should support datasets, scripts, notebooks or notebook-compatible work, analysis runs, parameters, methods, outputs, and run history. Computational work should connect back to the project's claims, figures, tables, manuscript sections, and decisions instead of living in a separate analysis island.

### 6. Create Figures, Tables, And Artifacts

Researchers should be able to produce and manage outputs of analysis and interpretation: tables, figures, charts, diagrams, reports, extraction tables, generated artifacts, and visual plans.

These outputs should remain connected to the sources, data, analysis, evidence, decisions, and manuscript text that use them.

### 7. Write And Revise Research Outputs

LitRev should support drafting and revising manuscripts, reports, thesis sections, grant-supported arguments, protocols, and other scholarly outputs.

Writing should connect to citations, evidence, claims, figures, tables, comments, and revision history. Researchers should be able to work at both focused section level and whole-document level when needed.

### 8. Export, Publish, Preserve, And Continue

Researchers should be able to turn project work into durable outputs: manuscripts, reports, figures, tables, data packages, citation files, publication artifacts, deposits, and archives.

Exported or deposited work should preserve enough provenance for researchers to understand what produced it. A LitRev project should remain useful for revisions, follow-up papers, future grants, related analyses, and long-term scholarly memory.

### Cross-Cutting Lifecycle Work

Across the lifecycle, advisors, coauthors, assistants, analysts, librarians, reviewers, and agents may all contribute to the same project over time.

LitRev should keep those contributions attributable and folded into the project record instead of scattering decisions across email, chat, documents, notebooks, and disconnected files.

## Core Project Workspace Requirements

A LitRev project should behave as one durable scientific workspace, not as a collection of disconnected files, chats, notebooks, references, and exported documents.

These requirements describe what the workspace must make possible across the project. They do not define database objects, app pages, implementation architecture, or a complete feature list.

### Unified Project Context

The workspace should keep research materials, data, code, notes, decisions, analysis work, writing, citations, agent work, collaboration, and outputs in one connected project context.

A project may begin from a question, dataset, draft, protocol, paper collection, clinical problem, or loose early material. The workspace should help that material become more organized, traceable, and useful over time.

### Project Orientation

Researchers should be able to understand the state of the project without reconstructing it from scattered files or chat history.

The workspace should make it clear what exists, what changed, what needs attention, what is uncertain, what is blocked, what the agent is doing, and what outputs or decisions may need review.

Project state should be explicit where it affects trust or continuation, including local-only, syncing, conflicted, failed, stale, waiting for approval, blocked, and recoverable states.

### Agentic Project Work

Agents should work inside the same project workspace the researcher uses, with access to the project's materials, history, decisions, current state, and goals.

When an agent extracts evidence, edits text, runs analysis, creates a figure, updates citations, or proposes a change, that work should land in the relevant project area rather than remaining hidden in chat.

### Researcher Ownership And Control

Researcher control is the reliability layer for agentic work. Researchers must be able to inspect agent-assisted work, understand how it affects the project, correct it directly, continue from it, or restore earlier states when needed.

Manual work is not a fallback for failed automation. It is a first-class reliability surface for reading, organizing, writing, evidence review, analysis review, citation editing, figure correction, and final ownership of scientific outputs.

### Connected Research Material

Sources, PDFs, references, notes, datasets, scripts, extracted evidence, citations, figures, tables, drafts, and outputs should not live as isolated project fragments.

Researchers and agents should be able to move across the project: from a manuscript claim to its support, from a figure to the data or analysis behind it, from a citation to the source material, and from a decision to the context that produced it.

### Traceable Scientific Reasoning

The workspace should preserve the reasoning behind the research: assumptions, interpretations, evidence judgments, methodological choices, analysis choices, unresolved questions, uncertainty, and conflicts.

When support is missing, weak, disputed, stale, or agent-generated, the workspace should make that visible enough for a researcher to inspect and challenge it.

### Data, Code, Analysis, And Artifact Continuity

Datasets, scripts, notebooks or notebook-compatible work, parameters, analysis runs, generated tables, figures, reports, and other artifacts should stay connected to the claims, manuscript sections, evidence, and decisions they support.

When upstream data, code, methods, or evidence change, the workspace should help identify outputs that may need review or regeneration.

### Collaborative Research Work

The workspace should support research projects involving advisors, coauthors, assistants, analysts, librarians, reviewers, and other collaborators.

LitRev should support comments, suggestions, assignments, approvals, attribution, shared review, synchronized co-editing, and real-time collaboration where useful. Collaboration should strengthen the project record instead of scattering decisions across email, chat, duplicated documents, and disconnected files.

Concurrent edits and contributions should produce understandable attribution, conflict, review, and recovery states.

### History, Review, And Recovery

Meaningful changes by researchers, collaborators, agents, tools, and analysis runs should leave enough history to inspect what changed, compare versions, recover earlier states, and continue work confidently.

The workspace should support review, provenance, snapshots, rollback, version history, and exportability as part of its reliability contract.

### Portability And External Continuation

The workspace should remain useful outside a single cloud service, model provider, or external integration.

Researchers should be able to bring materials in, send outputs out, preserve project records, and continue the research through external tools, repositories, publication systems, or archives when needed.

## Core Product Surfaces

LitRev should have a recognizable product shape. These are the main product surfaces a researcher should be able to recognize in LitRev, even if the final UI combines, splits, or rearranges them. They are product surfaces, not mandatory routes, tabs, database tables, or implementation boundaries.

| Surface | Product responsibility |
|---|---|
| Project Home | Orient the researcher to project status, recent changes, open tasks, blocked work, stale outputs, collaborator activity, agent activity, review needs, and next actions. |
| Project Agent And Chat | Provide the primary conversational surface for asking questions, planning work, delegating tasks, discussing project context, and turning conversation into durable project changes. Chat should be project-native, context-receipted, task-aware, and connected to project records rather than detached conversation. |
| Project Direction And Protocol | Capture the topic, question, goals, hypotheses, scope, criteria, methods, analysis plan, reporting plan, milestones, and decision history. Support guided bootstrap from loose starting material into a reviewed project scaffold. |
| Source Library And Reader | Manage sources, PDFs, references, metadata, duplicate-safe import, reading, annotations, parser state, source detail, and backlinks. |
| Evidence Ledger And Claims | Support screening, extraction, evidence tables, evidence records, quality and risk judgments, claim support, contradictions, uncertainty, and unsupported-claim diagnostics. |
| Synthesis Surface | Support project-grounded Q&A, comparisons, gaps, conflicts, uncertainty, and saving useful synthesis into notes, evidence, claims, decisions, or draft material. |
| Draft And Manuscript Workspace | Support manual and agent-assisted writing, section and full-draft work, citations, bibliography, evidence rail, comments, suggestions, metadata, import, export, and reconciliation. |
| Data And Analysis Workbench | Support datasets, scripts, notebook-compatible work, runs, parameters, methods, outputs, reproducibility context, and stale-output signals. |
| Figures, Tables, And Artifacts | Manage generated and editable tables, figures, charts, diagrams, visual plans, captions, artifact review, manuscript usage, and export readiness. |
| Agent Runs And Review | Show delegated tasks, context receipts, proposed changes, generated artifacts, logs, approvals, rejections, failures, retries, diffs, checkpoints, and recovery paths. |
| Memory, History, And Decisions | Make notes, interpretations, decisions, unresolved questions, project memory, prior agent work, provenance, version history, snapshots, rollback, and audit trails inspectable and correctable. |
| Collaboration And Mobile Continuation | Support members, roles, permissions, comments, suggestions, assignments, attribution, shared review, notifications, and mobile reading, capture, approval, and task status. |
| Settings, Integrations, And Export | Manage project configuration, citation formats, import and export paths, external connections, repositories, archives, cloud mirror state, and portability controls. |

Every important project object or change should have an obvious place to inspect it. Researchers should be able to find where a change landed and what related project material it affects.

Core product surfaces should remain connected by project-wide search, navigation, backlinks, status indicators, object-aware actions, and project agent chat. A researcher should be able to move from an output to the material that produced it, from a claim to its support, from agent work to the affected artifacts, and from a changed source or analysis to the project areas that may need review.

LitRev should maintain stable product vocabulary for durable project records and relationships without turning the PRD into a database schema. Important records include the project, protocol, source, file, source region or chunk, screening decision, extraction, claim, evidence link, dataset, analysis run, figure, table, manuscript, citation, note, agent run, proposed artifact, memory, collaborator, and export or deposit record.

## Primary Product Journeys

These journeys are not roadmap phases or implementation slices. They describe the core flows LitRev must make coherent across product surfaces.

- Start a project from a question, files, sources, dataset, protocol, or draft.
- Use project agent chat to ask questions, plan work, delegate tasks, and create reviewable project changes.
- Import sources, preserve source identity, and read or annotate source material.
- Screen, extract, evaluate evidence, and connect evidence to claims.
- Ask grounded questions and save synthesis into project records.
- Write a cited section with visible evidence support.
- Run analysis and connect results to figures, tables, claims, and manuscript sections.
- Review agent-proposed changes, accept or reject them, and recover from mistakes.
- Collaborate, export, archive, or continue the project externally.

## Source, Evidence, Claims, And Scientific Trust

LitRev should make scientific support inspectable. Sources, extracted evidence, claims, citations, analysis outputs, figures, tables, and agent-generated material should remain connected so researchers can understand why a statement exists, what supports it, what weakens it, and what still needs review.

This trust layer is not only for formal systematic reviews. It should support ordinary research reading, exploratory synthesis, clinical or applied reports, computational projects, thesis work, manuscripts, and grant or proposal arguments whenever the project depends on sources, evidence, or claims.

LitRev should support literature review and evidence synthesis workflows, including source discovery, screening, extraction into the evidence ledger, evidence-strength or quality appraisal, methodological review where relevant, and synthesis of supported, conflicting, weak, or uncertain findings.

### Source Records And Reading

Researchers should be able to discover, import, deduplicate, normalize, read, annotate, and organize scholarly and project sources. Source records should preserve enough metadata and provenance to support citation, later review, export, and recovery.

Source import should be duplicate-safe. LitRev should distinguish new sources, strong duplicates, and possible duplicates; preserve identity confidence where useful; require researcher review for ambiguous matches; and provide import receipts explaining what was added, merged, skipped, repaired, or left unresolved.

When sources are found through database search, API search, imported query results, or external search strategies, LitRev should preserve enough search provenance for researchers to understand where the source set came from and how it could be reviewed or reproduced.

When LitRev parses PDFs, documents, tables, figures, citation contexts, or other source material, the result should remain connected to exact source regions where possible. Parser confidence, missing material, unsupported structure, and extraction failures should be visible enough for researchers and agents to avoid treating uncertain source material as settled fact.

### Source Detail And Backlinks

Each important source or study should have an inspectable detail view or equivalent surface showing its metadata, files, annotations, screening decisions, extracted evidence, quality judgments, linked notes, citations, draft usage, related figures or analysis, unresolved issues, and agent work.

Researchers should be able to move from a source to every project place that uses it, and from a citation, claim, evidence table cell, note, figure, or draft passage back to the relevant source support.

### Screening, Extraction, And Evidence Tables

LitRev should support researcher-controlled screening and classification when a project requires it. Inclusion and exclusion decisions should preserve reasons, criteria, reviewer attribution where relevant, and enough accounting to support reporting needs such as PRISMA-style counts when appropriate.

LitRev should support extraction schemas, extraction tables, extracted values, and evidence records. Extracted values and table cells should link back to their source support, carry enough context to be reviewed, and remain exportable for analysis, reporting, or external continuation.

Agents may suggest screening decisions, extracted values, evidence links, or table updates, but high-impact evidence work must remain reviewable, correctable, attributable, and recoverable.

### Claims And Evidence Links

Claims in notes, synthesis, manuscripts, reports, figures, tables, and other project outputs should be linkable to supporting sources, source regions, extracted evidence, data, analysis outputs, and decisions.

LitRev should make unsupported, weakly supported, conflicting, uncertain, stale, or agent-generated claims visible. When evidence quality, risk of bias, study limitations, methodological concerns, or contradictory findings matter to the workflow, LitRev should preserve those judgments alongside the evidence and claims they affect.

### Evidence-Grounded Synthesis

LitRev should support project Q&A and synthesis grounded in project material. Answers should show their support, identify gaps or conflicts, and distinguish source-grounded statements from inference, speculation, or agent-generated language.

Useful synthesis should be able to become durable project work: notes, evidence links, draft material, decisions, unresolved questions, or review tasks. It should not remain trapped in opaque chat history when it affects the research record.

## Data, Code, Analysis, Figures, And Artifacts

LitRev should support the data, computation, and artifact work needed for real research projects without becoming only a notebook app, statistics package, workflow platform, or figure editor. The product requirement is continuity: datasets, code, methods, runs, results, tables, figures, captions, claims, and manuscript sections should stay connected.

This is first-class product scope because many research projects depend on data and computation as much as literature. LitRev should let researchers and agents work with analysis material while preserving enough provenance, reviewability, and recovery to make outputs scientifically trustworthy.

### Data, Tables, And Project Artifacts

Researchers should be able to bring datasets, data tables, images, intermediate outputs, generated files, reports, figures, and other artifacts into the project. These materials should have useful metadata, provenance, version awareness, and links to the project questions, sources, methods, analyses, claims, and outputs they affect.

LitRev should distinguish durable research artifacts from temporary files. Important artifacts should be easy to inspect, reuse, cite within the project, export, archive, and recover.

### Code, Notebooks, And Analysis Runs

LitRev should support scripts, notebook import/export or notebook-compatible work, approved local code execution, analysis parameters, method notes, run logs, generated outputs, and run history.

Researchers should be able to understand what was run, which inputs were used, what assumptions or methods were applied, what outputs were produced, and which later project materials depend on those outputs.

When needed for reproducibility, LitRev should capture environment or dependency information at the product level without requiring one specific runtime, notebook format, package manager, workflow engine, or execution architecture.

### Results, Methods, And Stale Outputs

Analysis results should connect to the data, code, parameters, methods, evidence, tables, figures, claims, captions, and manuscript sections that depend on them. Researchers should be able to compare relevant runs and understand which outputs are current.

When upstream data, code, parameters, methods, source evidence, or extraction tables change, LitRev should help identify results, tables, figures, claims, captions, and manuscript sections that may be stale or need review.

Later product depth may include statistical helpers, method-assumption checks, meta-analysis helpers, larger workflow or pipeline support, and domain-specific analysis adapters where the project requires them.

### Figures, Tables, And Visual Work

LitRev should support publication-oriented tables, static computational figures, interactive figures, editable chart specifications, diagrams, graph visuals, visual plans, and editable scientific visuals.

These outputs should remain connected to their underlying data, code, analysis, evidence, source material, captions, claims, manuscript usage, and revision history.

Researchers should be able to inspect how a figure or table was produced, distinguish generated content from manual edits, update outputs when upstream material changes, and export artifacts in forms useful for manuscripts, reports, presentations, repositories, or external editing.

### Agent-Assisted Analysis And Artifact Work

Agents may help clean data, write or revise code, run approved analyses, summarize results, generate tables, create figures, flag stale outputs, suggest methods, and propose artifact updates.

Agent-assisted analysis work should leave bounded tasks, logs, outputs, and recovery points. High-impact changes to data, code, results, tables, figures, captions, or manuscript-linked outputs should land as proposed or inspectable project changes, not as unreviewed chat output.

## Manuscript, Publishing, And Research Outputs

LitRev should support serious scholarly writing, not only generated draft text. Researchers should be able to draft, revise, comment, cite, structure, adapt, export, and reconcile research outputs while keeping claims connected to sources, evidence, data, analysis, figures, tables, and decisions.

The writing surface should support focused section-level work and whole-document work. Manuscripts, reports, thesis chapters, grant or proposal sections, protocols, and publication artifacts should be editable by researchers directly and assistable by agents through reviewable suggestions.

Citations, bibliographies, evidence rails, claim-support diagnostics, comments, suggestions, cross-references, figures, tables, and publication requirements should remain part of the same project record. Exported documents should be outputs of the project, not detached files that sever provenance.

LitRev should distinguish evidence-linked citations from auxiliary citations. Evidence-linked citations support, weaken, contradict, or contextualize claims through source and evidence links. Auxiliary citations are legitimate for background, methods, guidelines, definitions, or context, but they should not silently satisfy evidence-support diagnostics.

LitRev should own structured references, citation rendering, bibliography generation, metadata repair, style validation, locators, citation diagnostics, and cited-versus-uncited visibility. Models may propose citation intent, but model-written reference text should not become canonical citation state.

Manuscripts should preserve meaningful publication metadata, including title, authors, affiliations, funding, conflicts, ethics, registration, data and code availability, journal profile, and reporting profile where relevant.

LitRev should support import, export, and reconciliation with external writing and publishing tools where researchers already work. The PRD should not require one editor engine, export format, typesetting system, or submission workflow as the product core.

Manuscript import and reconciliation should be honest about fidelity. LitRev should report which content, citations, cross-references, figures, tables, metadata, comments, or formatting were preserved, downgraded, unresolved, or lost.

## Agent Delegation, Review, And Safe Automation

LitRev agents should perform bounded project work inside the same project workspace researchers use. Agents should be able to organize sources, extract evidence, write and edit files, revise drafts, write and run code, run approved local tools, create analyses and figures, update citations, identify gaps, prepare artifacts, and assist with scientific or methodological knowledge.

Agent work should be object-scoped and context-aware. A researcher should be able to delegate from a source, evidence table, manuscript section, dataset, analysis run, figure, citation, note, or project task, and LitRev should capture the relevant project context for that work.

Context capture should be visible. When a researcher sends project material to an agent, LitRev should show a context receipt describing which sources, selections, notes, figures, draft sections, analyses, tasks, or workspace state are attached. LitRev should avoid invisible prompt stuffing that affects agent behavior without giving the researcher a way to inspect what context was used.

Agent outputs should land as reviewable project changes: proposed edits, artifacts, evidence records, run results, comments, task updates, logs, or diffs. Proposed changes should support a clear lifecycle: propose, inspect, edit where appropriate, accept, reject, apply, checkpoint, compare, and recover.

Durable agent runs should preserve what was asked, what context was used, what actions were taken, what changed, what failed, what is waiting for approval, and what can resume or roll back.

Agents, integrations, collaborators, and local tools should not widen their own authority. High-impact actions need permission scope, review state, provenance, and recovery paths before they affect trusted project work.

The PRD should define the user/product contract for safe automation, not runtime architecture, model routing internals, executor storage, or external connector design.

## Project Memory And Continuity

LitRev should maintain inspectable project memory so work can continue across sessions, collaborators, and agent runs. Project memory should include project direction, protocol decisions, source judgments, extraction choices, writing preferences, analysis decisions, unresolved questions, collaborator decisions, and prior agent work.

Memory should be useful, editable, and challengeable. Researchers should be able to inspect, correct, pin, forget, distrust, or update remembered context when it is stale, wrong, incomplete, or no longer relevant.

Memory should carry enough trust metadata to be evaluated, including source, authority, confidence, freshness, conflict or staleness state, and whether it was pinned, archived, forgotten, or superseded. Summaries may help navigation and continuation, but summaries are not canonical memory when they obscure the underlying project record.

Project memory should strengthen continuity without becoming opaque authority. Agents may use memory to work more effectively, but memory-driven behavior should remain understandable and recoverable when it affects project work.

## Local-First Ownership, Collaboration, And Mobile Continuation

LitRev projects should be locally owned and durable, with cloud mirroring used where helpful for backup, cross-device continuation, sharing, teamwork, and collaboration. Cloud services should extend the project workspace without becoming the only source of truth.

LitRev should support multi-user project work through project membership, roles, permissions, invitations, access revocation, comments, suggestions, assignments, attribution, shared review, notifications, and synchronized co-editing where real-time collaboration is useful.

Collaboration should preserve project history. Researchers should be able to see who contributed what, review major changes, resolve conflicts, and recover earlier states.

Mobile should be a continuation surface, not full desktop parity by default. Its likely first role is reading, capture, quick notes, comments, task status, lightweight review, approvals, notifications, and continuation.

## Provenance, Versioning, Recovery, And Auditability

LitRev should preserve enough history for researchers to understand what changed, who or what changed it, why it changed, and how to recover from mistakes. This applies to sources, evidence, citations, drafts, data, code, analysis runs, figures, tables, exports, agent actions, and collaboration.

The workspace should support event history, source provenance, evidence provenance, citation provenance, analysis provenance, agent action logs, diffs, checkpoints, snapshots, rollback, version comparison, and recovery after failed or partial work.

Provenance should be useful to researchers, not only mechanically complete. LitRev should help users inspect and recover meaningful project changes without forcing normal users to understand raw logs, schemas, sync internals, or version-control mechanics.

Git or Git-like workflows may support readable artifacts, review, comparison, portability, and power-user workflows, but normal collaboration should not require researchers to manage Git directly.

## External Scholarly Interoperability

LitRev should deliberately connect with the research tools, formats, databases, repositories, and services researchers already depend on. External systems should extend the LitRev project workspace without defining its core shape or fragmenting the project record.

Researchers should be able to bring work in and send work out through reference managers, citation formats, scholarly databases, document formats, data files, code environments, cloud drives, repositories, publishing systems, archives, and open-science platforms.

Interoperability should prioritize continuity: references should remain citeable, documents should remain exportable, datasets and artifacts should remain portable, and deposited or shared outputs should preserve enough provenance for later review, revision, and reuse.

## Deferred Scope And Non-Goals

LitRev should not try to fully replace every adjacent research tool in its first product shape. It may include reference management, writing, source screening, analysis, figures, collaboration, and export, but it should not initially become a full Zotero replacement, full Overleaf replacement, full Jupyter replacement, full ELN, full enterprise systematic-review platform, full statistics package, full workflow-pipeline platform, full repository platform, complete journal-submission system, or full mobile-parity product.

Deferred does not mean irrelevant. These areas should remain compatible paths, integration targets, or later product expansions when they strengthen the core project workflow.

LitRev should protect its center: the durable research project itself. Adjacent tools should extend that workspace, not pull sources, evidence, data, analysis, writing, memory, or collaboration back into disconnected systems.

## Product Readiness Criteria

Use these criteria to evaluate future product, design, architecture, and implementation decisions against this PRD:

- LitRev's product center is clearly the durable research project, not chat, a reference manager, a notebook, a manuscript editor, or an external service.
- Important project work has an owning workspace area, visible state, provenance, and recovery path.
- Researchers can trace claims, citations, figures, tables, and outputs back to supporting sources, evidence, data, analysis, and decisions where relevant.
- Agent work is object-scoped, context-receipted, reviewable, permissioned, attributable, and recoverable.
- Unknown, weak, stale, conflicting, imported, or agent-generated material remains visible instead of being silently normalized into false certainty.
- External tools, formats, and services extend the LitRev project without defining its core model or becoming its only source of truth.
- Deferred areas are clearly compatible paths or later expansions, not hidden requirements for the first product shape.

## Open Product Questions

These questions are intentionally left open by this PRD and should be resolved in planning, architecture, design, or implementation documents when the product direction requires it:

- What is the first coherent roadmap slice through the project workspace?
- Which source connector or import path should be first?
- Which citation import, export, and rendering paths are required first?
- What parser strategy should support source-region provenance without making parser output the canonical product model?
- What are the first cloud mirroring and collaboration semantics, including offline behavior, conflicts, revocation, and restore?
- What exact mobile actions are allowed first, and which remain desktop-only?
- Which high-impact actions require approval in the first implementation, and how should that approval be expressed in the product?
- Which sensitive data classes are supported, unsupported, or institution-gated at each product maturity level?
