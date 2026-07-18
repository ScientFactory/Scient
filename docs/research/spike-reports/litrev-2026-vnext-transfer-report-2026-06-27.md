# LitRev 2026 And vNext Transfer Report

Status: Draft
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-06-28
Purpose: Synthesizes what the new LitRev repo should learn from LitRev_2026 and vNext planning without copying the old product shape.
Doc type: Research evidence

## Document Rules

This report is research evidence and planning input. It is not canonical product truth, architecture direction, or an implementation plan.

Use it to decide what to refine in `docs/product/PRD.md`, `docs/planning/product-planning.md`, architecture placeholders, quality doctrine, and future design documents. Promote only the stable product requirements, architecture decisions, or policies into their owning documents.

### Freshness (2026-06-28)

This report predates the acceptance of PRD v1 on 2026-06-28. Most of the product refinements it recommends have since landed in the PRD. Per-item status is marked inline below (look for "→ Landed in PRD v1") and summarized in "Current PRD Review Against Transfer Findings." Only the blank/guided/sample project-start path remains outstanding. The report's external market analysis, the carry-forward and what-not-to-carry-forward synthesis, and the old-app lineage remain current and useful.

This report is grounded in inspected local repo files from:

- current repo: `/Users/yaacov/REPOs/LitRev`
- old app repo: `/Users/yaacov/REPOs/LitRev_2026`
- vNext planning worktree: `/Users/yaacov/REPOs/LitRev_2026/.worktrees/litrev-vnext-model-analysis`

## Executive Judgment

The new LitRev should not become a local-first rewrite of LitRev_2026.

LitRev_2026 is a valuable implemented proof of several hard product patterns: protocol-aware evidence work, structured source and draft objects, reviewable agent artifacts, durable agent runs, memory metadata, citation diagnostics, file/PDF intake, context capture, and security boundaries. But its product center is a hosted web evidence-review and drafting workflow.

The new LitRev is broader and more ambitious: a local-first, cloud-mirrored scientific project workspace where researchers, collaborators, and agents work across sources, data, code, analysis, figures, manuscripts, memory, review, provenance, and continuation. The current PRD already reflects that broader identity. The transfer work should therefore preserve the old repo's strongest product contracts and reliability patterns, while rejecting its narrower scope, hosted persistence assumptions, and tab/chat-shaped product gravity.

The main next move is not to add more broad PRD sections. The PRD now has the right section set. The work should shift to:

1. sharpening a few under-specified product contracts,
2. adding source-backed planning notes for old-app transfer items,
3. turning placeholder policy/design docs into real doctrine where the old repo already has strong reusable lessons,
4. defining the next validation/prototype sequence without collapsing LitRev back into only literature review.

## Source Set Reviewed

Current LitRev docs reviewed:

- `docs/product/PRD.md`
- `docs/planning/product-planning.md`
- `docs/research/source-evaluations/open-source-adaptation-map.md`
- `docs/architecture/technology-stack.md`
- `docs/architecture/security-and-permissions.md`
- `docs/design/product-design-principles.md`
- `docs/quality/testing-philosophy.md`
- `docs/quality/code-quality-principles.md`
- `docs/documentation-policy.md`

LitRev_2026 docs and code evidence reviewed:

- `PRD.md`
- `AGENTS.md`
- `README.md`
- `docs/ideas/product-ideas.md`
- `docs/plans/plan-agentic.md`
- `docs/plans/plan-memory.md`
- `docs/plans/plan-draft-authoring-platform.md`
- `docs/plans/plan-context-capture.md`
- `docs/plans/plan-ledger.md`
- `docs/plans/README.md`
- `docs/runbooks/security-baseline.md`
- `docs/architecture/frontend-quality-bar.md`
- `next-app/prisma/schema.prisma`
- `next-app/lib/server/ai/tools/*`
- `next-app/lib/server/agent/*`

vNext planning evidence reviewed:

- `docs/ideas/litrev-vnext/features-list.md`
- `docs/ideas/litrev-vnext/old-current-litrev-feature-inventory-2026-06-26.md`
- `docs/ideas/litrev-vnext/open-source-steal-map-2026-06-27.md`
- `docs/ideas/litrev-vnext/source-architecture-scorecard-2026-06-26.md`
- `docs/ideas/litrev-vnext/source-landscape-deepening-2026-06-26.md`
- `docs/ideas/litrev-vnext/source-alternatives-matrix-2026-06-26.md`

External product and market evidence reviewed on 2026-06-27:

- Overleaf official product, university, Commons, premium feature, Git, track-changes, templates, and pricing pages: [Overleaf](https://www.overleaf.com/), [premium features](https://docs.overleaf.com/getting-started/free-and-premium-plans/premium-features), [plans](https://www.overleaf.com/user/subscription/plans), [universities](https://www.overleaf.com/for/universities), [version history](https://docs.overleaf.com/writing-and-editing/history-and-versioning), [track changes](https://docs.overleaf.com/collaborating/track-changes), [Git and GitHub sync](https://docs.overleaf.com/integrations-and-add-ons/git-integration-and-github-synchronization).
- Zotero official product, sync, storage, groups, PDF reader, word-processor plugin, Web API, local-data, and terms pages: [Zotero](https://www.zotero.org/), [sync](https://www.zotero.org/support/sync), [storage](https://www.zotero.org/storage), [groups](https://www.zotero.org/support/groups), [PDF reader](https://www.zotero.org/support/pdf_reader), [word processor plugin](https://www.zotero.org/support/word_processor_plugin_usage), [local data](https://www.zotero.org/support/zotero_data), [Web API](https://www.zotero.org/support/dev/web_api/v3/start).
- Consensus official product, pricing, help, API, university-access, responsible-AI, and feature pages: [Consensus](https://consensus.app/), [pricing](https://consensus.app/pricing/), [help center](https://help.consensus.app/), [API](https://consensus.app/api/), [university access](https://help.consensus.app/en/articles/8789828-university-access), [responsible AI](https://consensus.app/responsible-ai/).
- Elicit official product, pricing, systematic-review, evaluation, and API pages: [Elicit](https://elicit.com/), [pricing](https://elicit.com/pricing), [systematic review](https://elicit.com/solutions/systematic-review), [PRISMA 2020 release](https://elicit.com/blog/systematic-review-for-prisma-2020), [evaluation](https://elicit.com/blog/evaluating-elicit-slr), [API](https://elicit.com/api).
- scite official product, features, and pricing pages: [scite](https://scite.ai/), [features](https://scite.ai/features), [pricing](https://scite.ai/pricing).
- SciSpace, ResearchRabbit, Connected Papers, and Semantic Scholar official product/pricing/API pages as literature-discovery and paper-map expectation checks: [SciSpace](https://scispace.com/), [SciSpace pricing](https://scispace.com/pricing), [ResearchRabbit](https://www.researchrabbit.ai/), [Connected Papers](https://www.connectedpapers.com/), [Connected Papers pricing](https://www.connectedpapers.com/pricing), [Semantic Scholar product](https://www.semanticscholar.org/product), [Semantic Scholar API](https://www.semanticscholar.org/product/api).
- Rayyan official product and pricing pages: [Rayyan](https://www.rayyan.ai/), [pricing](https://www.rayyan.ai/pricing/).
- Covidence official systematic-review, protocol, data-extraction, and risk-of-bias materials: [Covidence](https://www.covidence.org/), [protocol guide](https://www.covidence.org/resource/protocol-development-for-systematic-reviews/), [data extraction](https://www.covidence.org/platform/data-extraction/), [risk of bias](https://www.covidence.org/platform/risk-of-bias/).
- BioRender official product, pricing, graphing, collaboration, and publication-figure materials: [BioRender](https://www.biorender.com/), [pricing](https://www.biorender.com/pricing), [graphing](https://www.biorender.com/product/graphing), [publication figures](https://www.biorender.com/features/publications).
- GraphPad Prism official product, feature, pricing/procurement, and release-note pages: [GraphPad Prism](https://www.graphpad.com/scientific-software/prism/), [how to buy](https://www.graphpad.com/how-to-buy/), [features](https://www.graphpad.com/features).
- Paperpile and ReadCube/Papers official product and pricing pages as reference-manager expectation checks: [Paperpile](https://paperpile.com/), [Paperpile pricing](https://paperpile.com/pricing/), [Papers](https://www.papersapp.com/), [Papers pricing](https://www.papersapp.com/pricing/).

Business-strategy notes below are inferred from public product, pricing, plan,
institution, help, and documentation pages. They are not claims about private
company strategy.

## External Product And Business Strategy Lessons

The strongest external lesson is that adjacent research products win by owning a
painful, trusted workflow very clearly. Overleaf owns collaborative LaTeX and
publication preparation. Zotero owns source/library/citation trust. Consensus
owns fast source-grounded paper search and synthesis. Elicit owns structured
literature-review labor reduction. Rayyan and Covidence own screening,
extraction, review-team workflow, and auditability. BioRender and GraphPad Prism
own publication-quality scientific outputs.

LitRev should not try to be all of those products stitched together. The useful
lesson is that researchers will pay for speed only when it preserves trust,
review, export, collaboration, and output quality. LitRev's opportunity is to
connect those workflow categories inside one project record, not to clone each
category as a separate module.

### Market Signals

| Source pattern | Public signal | LitRev implication |
|---|---|---|
| Overleaf | Freemium individual entry, paid collaboration/history/Git features, group and institutional Commons subscriptions, journal templates, and direct submission patterns. | Serious manuscript work needs collaboration, comments/suggestions, change history, templates, export/build diagnostics, and external submission packages. LitRev should learn from Overleaf's workflow quality without becoming LaTeX-first or cloud-only. |
| Zotero | Free local-first open-source core, paid storage/sync services, institution storage, group libraries, PDF annotations, word-processor plugins, local API, and explicit local data ownership. | Source/citation trust is infrastructure. LitRev should integrate deeply with Zotero, CSL, BibTeX, RIS, and local libraries before attempting to replace a reference manager. Zotero also warns that naive cloud-folder syncing can corrupt database-backed local apps, which matters for LitRev's cloud-mirror design. |
| Consensus | Individual and team plans sell search depth, deep reviews, paper snapshots, Ask Paper, source-grounded answers, API access, and university/team access. Its public trust story emphasizes searching the literature before AI synthesis. | LitRev needs fast grounded answers, but the product value should be answer-to-project capture: turn a synthesis into evidence links, notes, review tasks, claims, or draft material. A standalone answer engine would underuse LitRev's project workspace. |
| Elicit | Pricing and product pages center search, screening, extraction, systematic-review workflows, automated reports, Zotero import, enterprise/API access, and public evaluations of retrieval/screening/extraction accuracy. | Users pay for reduced literature-review labor when the workflow is structured, auditable, and reviewable. LitRev should borrow the workflow shape of protocol, search, screening, extraction, synthesis, and reports, but keep outputs inside the local project graph. |
| SciSpace / ResearchRabbit / Connected Papers / Semantic Scholar | Public pages emphasize AI literature review, PDF chat, paper maps, citation networks, personalized recommendations, alerts, and APIs over large scholarly graphs. | Discovery is exploratory and ongoing, not only a one-time database query. LitRev should eventually support source neighborhoods, citation maps, alerts, and discovery provenance, but the first priority is capturing useful discoveries into the project library and evidence workflow. |
| Rayyan / Covidence | Public pages emphasize AI-assisted screening, deduplication, PICO or criteria extraction, exclusion reasons, collaboration, dual review, data extraction, quality/risk-of-bias assessment, PRISMA/accounting, and team/institution use. | Screening and extraction should be treated as review workflows with criteria, reasons, attribution, conflicts, and audit history. AI can prioritize or suggest, but should not silently decide. Enterprise-level review management stays later unless the first target workflow demands it. |
| scite | Smart citation classification highlights supporting, contrasting, and mentioning citation contexts, with an assistant layered on top. | LitRev's citation/evidence layer should distinguish "this source exists in the bibliography" from "this claim is supported, weakened, contradicted, or merely contextualized by this source." This strengthens the evidence-linked versus auxiliary citation contract. |
| BioRender / GraphPad Prism | Pricing and feature pages monetize publication-ready visuals, graphing/statistics guidance, high-resolution exports, journal use, collaboration, templates, and output polish. | Figures and tables are not decorative extras. LitRev should support data-to-figure and evidence-to-table continuity, editable chart specifications, manual polish, captions, manuscript usage, and export-quality artifacts without trying to rebuild BioRender or Prism first. |
| Paperpile / ReadCube/Papers | These products sell simple reference capture, PDF reading, cloud sync, citation insertion, Google Docs or Word integration, mobile access, and AI/PDF assistant features. | Researchers expect reference tools to disappear into their writing flow. LitRev's interoperability must preserve active citations, bibliography refresh, PDF reading, mobile reading/review, and handoff to existing writing/reference environments. |

### Product Lessons To Carry Forward

1. **Reference trust before reference replacement.** Build excellent Zotero/JabRef/CSL/BibTeX/RIS interoperability, citation metadata repair, duplicate-safe identity, and citation round-tripping before attempting broad reference-manager replacement.

2. **Collaborative manuscript work needs a real review/history model.** Overleaf and Word/Google Docs expectations imply comments, suggestions, track-change-like review, version history, templates, export/build diagnostics, and coauthor handoff. LitRev's manuscript area cannot be only an AI draft generator.

3. **Grounded synthesis must become project material.** Consensus and Elicit show that users want fast AI help across papers. LitRev's differentiator should be that useful answers become durable project work: evidence records, claims, notes, extraction rows, decisions, unresolved questions, or draft sections.

4. **Discovery should become project intake, not a separate map.** SciSpace, ResearchRabbit, Connected Papers, and Semantic Scholar show demand for source neighborhoods, citation maps, alerts, and recommendations. LitRev should preserve search and discovery provenance, but should not overbuild literature-map UI before imported sources, source identity, and evidence capture work.

5. **Screening and extraction are labor workflows, not just AI features.** Rayyan, Covidence, Elicit, and ASReview all point toward criteria, queues, inclusion/exclusion reasons, reviewer attribution, conflicts, extraction forms, quality judgments, and PRISMA-style accounting when relevant.

6. **Data and figure output quality is core to scientific work.** GraphPad and BioRender make clear that researchers pay for output confidence, guided analysis, editable visuals, high-quality export, and collaboration. LitRev should prove at least one table/figure path early so it does not regress into a literature-only product.

7. **Team and institution readiness should shape the foundation, not the first product center.** Overleaf Commons, Zotero institution storage, Elicit teams/enterprise, Rayyan teams, and BioRender teams all point toward roles, permissions, shared projects, storage/sync, audit, and admin needs. LitRev should make local/cloud/collaboration semantics ready for this, but admin dashboards and compliance suites should not dominate the early product.

8. **Mobile is validated as continuation, not full parity.** Zotero and Rayyan show that mobile can matter for reading, annotation, sync, screening, and review. This supports the current PRD's mobile-continuation stance.

9. **Accuracy and evaluation claims become part of the product promise.** Elicit's public evaluation posture and Consensus's grounding narrative show that research AI products need explicit quality language. LitRev should later define evaluations for retrieval, extraction, citation correctness, draft verification, agent recovery, import/export fidelity, and stale-output detection.

### What This Adds To The Report

This external-product pass reinforces the current direction rather than changing
the PRD structure. The PRD already has the right top-level sections. The added
insight is about priority and product quality:

- source/citation interoperability should be treated as core infrastructure;
- manuscript collaboration/history/export diagnostics should be stronger than a simple draft area;
- evidence synthesis should include answer-to-project capture;
- literature discovery can later include source neighborhoods, citation maps, recommendations, and alerts, but only after reliable project intake and provenance exist;
- screening/extraction should preserve review-team semantics even when thin;
- figure/table output quality should stay in the early coherence test;
- team/institution readiness should influence permissions, sync, and collaboration foundations without making admin/billing the first product center.

## Current Truth In The New Repo

The current repo is documentation-first. There is no implemented application architecture yet.

The current PRD already does several important things correctly:

- It defines LitRev as a local-first scientific workspace, not just a literature-review app.
- It names researchers, collaborators, and agents as project participants.
- It treats data, code, analysis, figures, and artifacts as first-class product scope.
- It preserves serious manuscript work, publication outputs, citations, import/export, and reconciliation.
- It makes local ownership, optional cloud mirroring, collaboration, mobile continuation, provenance, versioning, and recovery part of the product contract.
- It avoids naming specific runtimes, databases, notebook engines, sync engines, or editor engines as product truth.

The planning file at the time contained a broad feature inventory and a useful placement map. Its main risk was duplication: several promoted ideas still remained as active-looking planning scaffolding. During this transfer pass, the old early-validation bundle was widened so it no longer leaned only toward a single literature-review path.

## Core Difference: Old App Versus New App

| Dimension | LitRev_2026 | New LitRev direction |
|---|---|---|
| Product center | Evidence-review workspace from question to defensible draft. | Durable research project workspace from early formation through publication-ready outputs and future continuation. |
| Primary user story | Medical/scientific evidence review, protocol, screening, ledger, draft, verification. | Scientific and scholarly project work across sources, evidence, data, code, analysis, figures, manuscripts, collaboration, memory, and agent work. |
| Persistence assumption | Hosted web app with Postgres, Better Auth, Supabase Storage, Prisma, web routes. | Local-first project ownership with optional cloud mirroring, project files, local state, versioning, and later collaboration. |
| Agent model | Project copilot and tool system operating through server-side web app objects. | Agent as a real project worker inside the local scientific workspace, able to work with files, code, sources, evidence, drafts, figures, and artifacts under review. |
| Manual work | Manual pages must remain usable when AI is unavailable. | Manual work is a first-class reliability surface for scientific ownership, not just a fallback. |
| Data and computation | Mostly outside v1; built-in meta-analysis was explicitly out of scope. | First-class product area: datasets, scripts, notebook-compatible work, analysis runs, methods, stale outputs, figures, tables, and artifacts. |
| Collaboration | Multi-rater and enterprise collaboration mostly out of v1. | Collaboration is designed into the foundation: local ownership, cloud mirror, roles, comments, synchronized co-editing where useful, attribution, and recovery. |
| UI gravity | Web app shell with project tabs, chat/copilot, protocol, ledger, draft, memory, notes. | Research cockpit/workspace surfaces around the project record, with chat/agent work as one surface rather than the product center. |
| Reuse strategy | The old app is real implementation evidence. | Use it as a product-kernel and reliability-pattern donor, not as the new product shape. |

## What To Carry Forward

### 1. Scientific Project Kernel

LitRev_2026 already proved that project, protocol, study/source, draft, note, memory, file, run, and artifact concepts can support real evidence-grounded workflows. The vNext feature list expands this into the right broader kernel: project, source chunk, source region, search, screening decision, extraction schema, extracted data item, claim, evidence link, dataset, analysis run, figure, table, manuscript, citation, comment, agent run, tool call, artifact, approval decision, memory, and sync/share event.

The new repo should not promote that list as a database schema. The better transfer is product-level: every important project material, decision, artifact, claim, and agent change needs a stable home, links to related material, provenance, review, and export/continuation path.

Current coverage: strong in the PRD. The current `Core Project Workspace Requirements` and `Core Product Surfaces` sections are the right abstraction.

Follow-up: the plan should keep the old object list only as a traceability aid, not as a future schema or page list.

### 2. Reviewable Proposed Artifacts

The old app's artifact system is one of the most important patterns to preserve. Agent work can produce proposals such as protocol suggestions, study proposals, study updates, draft diffs, screening batches, evidence tables, plans, memory proposals, and memory-forget proposals. The implementation includes artifact status, review, apply, undo/checkpoint behavior, and conflict checks for stale draft edits.

The new PRD already says agent outputs should land as reviewable project changes. That is correct but still abstract. → Landed in PRD v1: the proposed-change lifecycle (propose, inspect, edit, accept, reject, apply, checkpoint, compare, recover) is now stated in `PRD.md` 360.

Follow-up: product planning should explicitly carry "proposed artifact lifecycle" as a product pattern: propose, inspect, edit when appropriate, accept, reject, apply, checkpoint, compare, recover. This belongs mostly in `Agent Delegation, Review, And Safe Automation` and `Provenance, Versioning, Recovery, And Auditability`, not as a standalone PRD section.

### 3. Durable Agent Runs, Decisions, And Recovery

LitRev_2026 has a real agent-run shape: `AgentRun`, `RunEvent`, `RunCheckpoint`, `ToolIdempotencyRecord`, `DecisionRequestRecord`, `DecisionResolutionRecord`, and artifact links. Its agent plans emphasize runtime truth over prompt folklore: state, continuation, retries, tool results, decisions, and checkpoints should be structured runtime/project facts.

The new PRD covers safe automation and recovery, but the plan should preserve the stronger old-app lesson: agent work should not disappear into chat transcripts, temporary tool logs, or model prose. A researcher should be able to inspect what the agent tried, what it touched, what failed, what is waiting for approval, and what can be resumed or recovered.

Follow-up: current architecture placeholders for `agent-runtime.md`, `security-and-permissions.md`, and `project-format.md` should eventually absorb this as architecture direction after prototype work.

### 4. Context Capture As A Product Contract

The old context-capture plan is especially relevant. It treats selected protocol fields, draft selections, ledger studies, study sets, notes, artifacts, and assistant messages as typed context targets, not as invisible prompt stuffing.

The most transferable product idea is "context receipts": when a researcher sends something to the agent, LitRev should show what context is attached, allow removal/reordering when relevant, preserve recent context where safe, and avoid hidden context injection.

Current coverage: the PRD mentions object-scoped delegation and captured context. The plan mentions context capture. The explicit receipt/history idea is not yet strong enough. → Landed in PRD v1: visible context receipts are now a stated product expectation in `PRD.md` 358.

Follow-up: add to product planning, not necessarily the PRD yet: context targets, visible context receipts, recent-context reuse, and no invisible context injection.

### 5. Citation Architecture

The old product ideas and draft-authoring plan contain a crucial distinction: citations should be structured app-owned references, not model-written bibliography text.

Important transfer points:

- A source/study identity should be the canonical evidence anchor for evidence-linked citations.
- The app should own citation rendering, bibliography generation, and style validation.
- The model should emit citation intent, not canonical reference text.
- Evidence-linked citations and auxiliary bibliography citations are different product concepts.
- Auxiliary citations are legitimate for methods, background, guidelines, and context, but they should not silently satisfy evidence-support diagnostics.
- Scholarly writing needs locators, prefix/suffix, multi-item citations, citation modes, bibliography refresh, missing metadata repair, cited-vs-uncited visibility, and CSL-compatible style boundaries.

Current coverage: the PRD has citations, bibliography, citation diagnostics, and interoperability. The plan has CSL JSON, BibTeX, RIS, and reference-manager import/export. The evidence-vs-auxiliary citation distinction is not yet visible enough. → Landed in PRD v1: the evidence-linked vs auxiliary citation distinction is now stated in `PRD.md` 342.

Follow-up: promote this carefully, probably into product planning first. The PRD may later need one concise paragraph in `Manuscript, Publishing, And Research Outputs` or `Source, Evidence, Claims, And Scientific Trust` explaining that citation handling must distinguish evidence support from general bibliography management.

### 6. Duplicate-Safe Source And Study Ingestion

The old ledger plan has a sharper ingestion contract than the current PRD. The key rule is not just "deduplicate"; it is duplicate-safe import with identity confidence:

- classify incoming PDFs/search results as new source, strong duplicate, or possible duplicate,
- reserve strong duplicate for reliable identifiers such as DOI, PMID, or equivalent stable IDs,
- treat title/year heuristics as possible duplicates requiring confirmation,
- let the user attach to existing, create new anyway, or cancel when identity is ambiguous,
- produce receipts explaining what happened,
- keep AI/search import paths aligned with the same identity rules.

Current coverage: the PRD and plan mention deduplication and metadata normalization. They do not yet name duplicate-safe ingestion, identity confidence, or post-import receipts. → Landed in PRD v1: duplicate-safe import with identity confidence and import receipts is now stated in `PRD.md` 260.

Follow-up: add this to product planning under source discovery/import. The PRD itself may only need a compact product-level addition later if source identity becomes a core early validation requirement.

### 7. Manuscript Quality Beyond "Draft Area"

The old draft-authoring plan is much stronger than the current PRD on scholarly writing details. The important transfer is not implementation architecture; it is the product quality bar:

- serious manual writing must be excellent even without AI,
- one manuscript truth, not separate route states,
- citations, crossrefs, figures, tables, equations, comments, suggestions, and metadata are scientific objects, not formatting decoration,
- import must be honest, with preserved/downgraded/unresolved reporting,
- manuscript metadata matters: title, abstract, authors, affiliations, funding, conflicts, ethics, registration, data/code availability, journal profile, and reporting profile,
- page/web/focus/review/submission modes may be useful workflow views, but should not fork the document truth.

Current coverage: the PRD covers serious scholarly writing, citations, evidence rails, comments, crossrefs, figures, tables, import/export, and reconciliation. It does not yet capture manuscript metadata, import downgrade reports, auxiliary citations, or the full scholarly citation ergonomics. → Largely landed in PRD v1: publication metadata (`PRD.md` 346), import downgrade reports (`PRD.md` 350), and auxiliary citations (`PRD.md` 342) are now stated. Still open: the full scholarly citation ergonomics (locators, prefix/suffix, multi-item citations, citation modes) belong to manuscript/editor architecture, not the PRD.

Follow-up: keep detailed editor-object decisions out of the PRD for now, but add manuscript quality-bar items to the plan and later design/architecture docs.

### 8. Memory Trust Metadata

The old repo has stronger memory semantics than the current PRD. Its plans and schema include user, project, and study memory; memory retrieval records; memory embeddings; trust metadata; contradictions; archive/supersede behavior; and a distinction between trusted memory and untrusted conversation summaries.

The new PRD correctly says memory should be inspectable, editable, challengeable, and not opaque authority. The plan already mentions memory health, freshness, confidence, conflicts, inspect/edit/forget, and pinned context.

Follow-up: preserve the old-app distinction that summaries are not canonical memory, and memory should expose enough authority, source, freshness, confidence, and conflict metadata for researchers to challenge it. This probably belongs in `docs/planning/product-planning.md` and later `docs/architecture/agent-runtime.md` or a memory-specific architecture note. → Landed in PRD v1: the summaries-are-not-canonical-memory distinction and the trust metadata (source, authority, confidence, freshness, conflict/staleness) are now stated in `PRD.md` 374. Deeper memory architecture remains for `agent-runtime.md`.

### 9. Security And Permission Boundaries

The old security baseline is one of the best policy donors. It is web/SaaS-specific in places, but several principles transfer directly to local-first/cloud-mirrored LitRev:

- AI tools do not widen authority.
- Model output, tool-call requests, and AI-produced identifiers are untrusted inputs.
- The system, not the model, decides scope and permissions.
- Unknown data should stay unknown.
- Client-submitted IDs, paths, URLs, request metadata, hidden UI controls, and model-generated tool calls are not authorization boundaries.
- Security-sensitive fixes require adversarial regression tests.

Current coverage: `docs/architecture/security-and-permissions.md` has now been promoted from placeholder to draft architecture direction with local-first security and permission principles. Testing and code-quality docs already mention permissions, trust boundaries, duplicate mutations, recovery, and not mocking owned state.

Follow-up: keep expanding the security/permissions direction only when real architecture decisions appear. Do not copy old multi-tenant/Supabase-specific policy wholesale.

### 10. Future Product Design Principles

The old frontend quality bar contains some potentially useful UI instincts, but they should not be promoted into a design doctrine yet. At this stage, they overlap too much with PRD/product-contract language and risk importing the old app's surface assumptions into the new product.

Current coverage: `docs/design/product-design-principles.md` is a placeholder future home. It should remain unwritten until LitRev has real design principles grounded in product decisions, design explorations, or prototypes.

Follow-up: revisit design principles after UI prototypes exist, especially around conversation/workspace structure, information density, review placement, mobile continuation, accessibility, and visual system choices.

### 11. Evaluation And Benchmark Categories

vNext and old product ideas repeatedly mention benchmark categories:

- PDF extraction,
- evidence retrieval,
- screening assistance,
- draft verification,
- citation formatting,
- code execution,
- agent run recovery,
- import/export fidelity,
- long-manuscript performance,
- stale output detection.

Current coverage: the testing philosophy already names local-first behavior, sync conflicts, fixture projects, permission checks, audit checks, rollback/checkpoints, and scientific integrity. Product planning includes benchmark/prototype reminders. The specific benchmark categories are not gathered in one current place.

Follow-up: add a future "scientific quality/evaluation harness" planning note when implementation planning begins. Do not promote numeric gates before the product has measurable workflows.

### 12. Project Start, Orientation, And Sample Projects

The old app has more than a create-project button. It supports blank projects, guided setup, sample/demo review creation, last-project restore, onboarding state, and project-level summary ideas.

The new app should preserve the product lesson, not the old web flow: researchers need low-friction ways to enter a project, understand what exists, and see a complete example of the product's value. This matters even more in a local-first desktop app because a blank project folder can feel inert until it has visible structure.

Current coverage: the PRD mentions project orientation, useful next actions, guided bootstrap, project status, and recent changes. The plan mentions guided bootstrap but does not yet emphasize sample/demo projects or project summary/orientation as carry-forward lessons. → Outstanding (the one PRD refinement from this report not yet landed): blank/guided/sample project-start paths and a worked sample/demo project are not yet in PRD v1.

Follow-up: keep "blank / guided / sample" as a planning pattern. A sample project should eventually demonstrate sources, evidence, analysis, figure, manuscript, agent run, provenance, and recovery together, not only a literature review.

### 13. Command Palette And Object-Aware Actions

The old app's command palette and keyboard shortcuts are useful evidence that LitRev should not route every action through navigation tabs or chat. Researchers should be able to act from the object they are inspecting: source, claim, draft selection, protocol field, table, figure, dataset, note, or agent run.

Current coverage: the PRD workspace map mentions object-aware actions. The plan has a `Command Palette And Object-Aware Quick Actions` feature entry.

Follow-up: preserve this as early connective tissue once the first real project objects exist. It is not just a power-user feature; it is how agentic work stays object-scoped instead of becoming vague chat.

### 14. Copilot Is A Surface, Not The Product Center

LitRev_2026 has both global AI chat and project copilot/popup chat. The important lesson is that different agent surfaces serve different jobs:

- global AI can orient across projects or start broad work,
- project copilot can act inside the active project,
- popup/context chat can work from a specific object or selection,
- artifact review keeps generated work attached to the affected project object.

The new app should not simply copy these surfaces. It should use the distinction to design agent work around project objects, context, task status, review, and recovery.

Current coverage: the PRD correctly keeps the agent inside the project workspace rather than making chat the product center. The plan captures context capture and agent work surfaces.

Follow-up: future UI/design work should avoid a single generic chat pane as the main product surface. Agent panels, task queues, context receipts, and review surfaces should exist only where they strengthen the project workspace.

## What Not To Carry Forward

Do not carry forward these old-app assumptions:

- Medical evidence review as the whole product identity.
- "Question to defensible draft" as the narrow lifecycle.
- Hosted Postgres/Supabase/web app persistence as the product source of truth.
- Static library routes, tab structure, or the old shell as the desired UX.
- Chat as the place where project truth lives.
- LocalStorage-style draft persistence as local-first architecture.
- Admin, billing, telemetry, and hosted workspace management as early product center.
- Old onboarding as a fixed wizard that forces premature project certainty.
- Old command/chat surfaces as UI to clone rather than interaction patterns to reinterpret.
- Multi-tenant SaaS security policy as-is.
- Full systematic-review enterprise scope.
- Built-in statistical meta-analysis as day-one scope.
- Full Zotero, Overleaf, Jupyter, ELN, or repository replacement.
- Any open-source tool's product shape as LitRev's product shape.

## Current PRD Review Against Transfer Findings

The current PRD is directionally strong. It does not need another large top-level section right now.

The PRD already covers:

- broad target users,
- project-centered lifecycle,
- agentic-first but researcher-owned work,
- local-first collaboration and versioning,
- source/evidence/claim trust,
- data/code/analysis/figures/artifacts,
- manuscript/export/reconciliation,
- agent delegation and review,
- memory,
- provenance/versioning/recovery,
- interoperability,
- non-goals.

The highest-value minimal PRD refinements identified by this report, with status updated 2026-06-28 after PRD v1 acceptance:

1. Citation handling should distinguish evidence-linked citations from auxiliary bibliography citations. → Landed in PRD v1 (`PRD.md` 342).
2. Source import should express duplicate-safe identity handling, not only deduplication. → Landed in PRD v1 (`PRD.md` 260).
3. Agent context capture should make visible context receipts a product expectation, not invisible prompt state. → Landed in PRD v1 (`PRD.md` 358).
4. Manuscript import should mention honest import/reconciliation reports for preserved, downgraded, and unresolved content. → Landed in PRD v1 (`PRD.md` 350).
5. Project memory should distinguish authoritative memory from summaries or stale recalled context. → Landed in PRD v1 (`PRD.md` 374).
6. Project start/orientation should preserve blank, guided, and sample/demo paths without forcing a rigid setup wizard. → Outstanding: not yet in PRD v1. Tracked in `docs/planning/product-planning.md`.

Status note (2026-06-28): five of these six refinements were absorbed into PRD v1 on the same day this report was written, so the original "refine in the plan first" guidance is superseded. Only item 6 remains open.

## Former PRD Plan Review

The former PRD plan was valuable but had started to carry three jobs at once:

1. section planning for the PRD,
2. traceability from source research into promoted PRD sections,
3. raw feature backlog.

Because the PRD sections are now promoted, planning should stop acting like an active PRD table of contents. It should remain a compact planning and feature-refinement document.

Planning cleanup direction:

- Keep high-value carry-forward patterns in product planning only when they are still useful for roadmap, feature, or handoff decisions.
- Mark which items are already covered by the PRD, which need later refinement, which belong in architecture or policy, and which should stay deferred.
- Keep early roadmap seeds broad enough to include analysis, figures, artifacts, and agent safety, without over-centering only one literature-review path.
- Preserve sample/demo projects, project orientation, context receipts, duplicate-safe import identity, citation contracts, manuscript import reports, and proposed artifact lifecycle as planning vocabulary where useful.
- Keep old object lists as planning vocabulary, not product truth or schema.
- Keep design, security, and policy lessons in their owning docs once real doctrine exists.

## Policy And Doctrine Transfer

### Security And Permissions

Current home: `docs/architecture/security-and-permissions.md`

Applied transfer: old security invariants have been adapted into local-first/cloud-mirrored language in `docs/architecture/security-and-permissions.md`.

Do promote:

- model/tool requests are untrusted;
- permission scope is enforced by LitRev, not by agent intent;
- unknown source/project data stays unknown;
- local files, cloud mirrors, shared projects, and external imports each need explicit trust boundaries;
- security-sensitive fixes need adversarial tests.

Do not promote yet:

- Better Auth/Supabase-specific authority language,
- Vercel route assumptions,
- hosted-only tenant model,
- specific middleware architecture.

### Future Product Design Principles

Current home: `docs/design/product-design-principles.md`

Applied transfer: none. The design file has been kept as a placeholder future home rather than current doctrine.

Potential future inputs:

- information density for real research work;
- conversation/workspace interaction patterns;
- placement of review, diff, provenance, and recovery controls;
- empty/loading/error/conflict states;
- accessibility and mobile continuation;
- visual hierarchy and navigation once surfaces are explored.

### Testing And Quality

Current homes: `docs/quality/testing-philosophy.md`, `docs/quality/code-quality-principles.md`

Recommended transfer: current docs are already aligned. Later implementation docs should add specific evaluation lanes for PDF extraction, citations, draft verification, evidence retrieval, agent recovery, sync conflicts, and analysis reproducibility.

## Recommended Next Direction

The next product work should be a tightening pass, not another broad expansion.

Recommended order:

1. Decide which of the new transfer-feature entries should become concise PRD refinements.
2. Prototype the critical seams: local project kernel, agent executor, source/evidence import, manuscript editor, and analysis/figure continuity.
3. Refine design and security doctrine as soon as real UI and architecture proposals exist.
4. Then do a PRD refinement pass for only the product truths that remain stable after plan cleanup.

The most useful first validation scenario should probably combine five thin but real lanes:

- local project workspace,
- source import/evidence/citation support,
- one manuscript section with claim support,
- one analysis run that produces a table or figure,
- one reviewable agent task that touches project material and leaves provenance/recovery.

That scenario is intentionally not a full product slice and not a rigid MVP. It is a coherence test: can LitRev keep source work, data work, writing, agent work, and recovery in one durable project record?

## Open Questions

- Should the first validation scenario be biomedical, broad PhD/researcher, computational/bioinformatics, or mixed?
- What is the minimum "analysis/figure" lane that proves LitRev is broader than evidence review without delaying source/evidence/draft validation?
- How much citation detail belongs in the PRD versus manuscript/editor architecture docs?
- Should project memory be its own future architecture document, or remain inside agent runtime/project format until implementation pressure clarifies it?
- Which design principles are durable enough to promote now, and which should wait for UI prototypes?

## Bottom Line

The old app gives LitRev a head start, but only if it is treated as evidence, not destiny.

Carry forward the scientific kernel, artifact review, context capture, citation semantics, memory trust metadata, durable agent runs, duplicate-safe ingestion, and security/design quality bars. Do not carry forward the hosted evidence-review product shape.

The current PRD has the right broad structure. The most important work now is to make the planning layer smarter, promote only a few precise product refinements, and prepare the design/security docs before implementation begins.
