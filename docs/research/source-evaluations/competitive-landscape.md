# Competitive Landscape

Status: Draft
Owner: Yaacov
Created: 2026-07-13
Last updated: 2026-07-23
Purpose: Maps direct competitors, substitute workflows, specialized alternatives, and integration candidates against Scient's product scope.
Doc type: Research evidence

## Document Rules

This document is a living source evaluation, not product truth or a roadmap. Product scope remains owned by `../../product/PRD.md`. Promote only stable product implications into product or planning documents after review.

The original landscape descriptions below come from public vendor or project
pages inspected on 2026-07-12. The focused collaboration references were
inspected from official documentation on 2026-07-23. Gaps, transferable
lessons, and strategic posture are Scient interpretations, not exhaustive
product audits.

## Comparison Lens

Compare alternatives across Scient's connected project lifecycle: source discovery and reading; screening, extraction, evidence, and claims; synthesis; data and computation; figures and tables; manuscripts; agent work; durable project state; collaboration; provenance and recovery; local ownership; and interoperability.

## Landscape

| Alternative | Strongest overlap | Current Scient interpretation |
| --- | --- | --- |
| [SciSpace](https://scispace.com/) | AI literature search, paper reading, systematic reviews, and cited writing | One of the closest AI research assistants, but not presented as a local-first scientific project record spanning computation and governed agent changes. |
| [Elicit](https://elicit.com/) | Search, extraction, reports, research agents, and PRISMA-oriented systematic reviews | A close AI-native competitor whose reproducible, traceable review workflow reaches beyond simple search and summarization. |
| [Nested Knowledge](https://about.nested-knowledge.com/) | Search, screening, extraction, appraisal, qualitative and quantitative synthesis, and manuscript work | A particularly close competitor for evidence-to-writing and living-review workflows. |
| [DistillerSR](https://www.distillersr.com/) | Enterprise evidence review, AI-assisted screening and extraction, human validation, audit trails, and regulatory workflows | A serious competitor for governed and institution-ready evidence work. |
| [Covidence](https://www.covidence.org/) | Collaborative systematic-review management | An established workflow standard for structured reviews, but narrower than Scient's full project lifecycle. |
| [Rayyan](https://www.rayyan.ai/) | Search, screening, extraction, risk of bias, PRISMA, collaboration, and AI prioritization | A broad systematic-review competitor rather than only a screening tool. |
| [NotebookLM](https://notebooklm.google/) | Source-grounded multi-document questions, synthesis, reports, and generated learning artifacts | A strong substitute for understanding a source collection, but not a structured scientific project, analysis, or reviewable-change system. |
| [Consensus](https://consensus.app/) | Peer-reviewed search, full-text analysis, cited answers, and research reports | A strong discovery and evidence-synthesis alternative, but not a complete project workspace. |
| [Zotero](https://www.zotero.org/) | Research collection, PDFs, annotations, organization, citation, and sharing | The incumbent researcher-owned source library; an important integration target and potential replacement barrier. |
| [JupyterLab](https://jupyter.org/) and [Quarto](https://quarto.org/) | Interactive computation and reproducible publication | The strongest data-to-figure-to-publication substitute, with limited ownership of literature evidence and governed agent work. |
| [Overleaf](https://www.overleaf.com/) | Collaborative LaTeX manuscript production | A dominant downstream writing tool that begins near the manuscript rather than the whole project record. |
| [ResearchRabbit](https://www.researchrabbit.ai/), [Litmaps](https://www.litmaps.com/), and [Scite](https://scite.ai/) | Discovery, citation navigation, and citation-context intelligence | Specialized competitors and likely integration or acquisition channels rather than complete workspace substitutes. |
| [OpenAI Deep Research](https://openai.com/index/introducing-deep-research/) and [Gemini Deep Research](https://ai.google.dev/gemini-api/docs/deep-research) | Autonomous multi-step search and cited research reports | General research agents can satisfy an important early job, but do not by themselves provide Scient's durable scientific project model. |
| [Benchling](https://www.benchling.com/notebook) and [LabArchives](https://www.labarchives.com/products/eln-for-research) | Laboratory records, data, protocols, collaboration, permissions, and audit history | Important durable-record competitors for laboratory teams, but specialized toward experimental and institutional workflows. |

## Substitute Workflows

The strongest practical competitor may be the stack researchers already assemble:

- literature-heavy work: Zotero plus Elicit, SciSpace, NotebookLM, or Consensus plus Overleaf;
- systematic reviews: Covidence, Rayyan, Nested Knowledge, or DistillerSR plus reference and writing tools;
- computational research: Zotero plus JupyterLab, Quarto, and Git;
- wet-lab research: Benchling or LabArchives plus separate literature, analysis, and publication tools; and
- fast research reports: a general deep-research agent plus documents and a writing tool.

## Collaboration Reference Models

Collaboration is not one feature or one engine. Scient should study several
proven models because they solve different parts of shared scientific work.
These are product and architecture references, not dependency selections.

| Reference | Proven mechanisms to study | Scient interpretation and boundary |
|---|---|---|
| [Google Docs and Drive sharing](https://support.google.com/drive/answer/2494822), [suggestions and comments](https://support.google.com/docs/answer/6239410), and [version history](https://support.google.com/docs/answer/190843) | Low-friction sharing, visible collaborator presence, viewer/commenter/editor roles, comments, suggestions, accept/reject, attributed live edits, and understandable version restoration. | This is the baseline ordinary researchers will expect. Scient should make common collaboration easier than Git, while extending the same interaction model across manuscripts, evidence, notes, decisions, and other scientific objects rather than only documents. |
| [Overleaf collaboration](https://docs.overleaf.com/collaborating/collaborating-in-overleaf), [track changes](https://docs.overleaf.com/collaborating/track-changes), [history and versioning](https://docs.overleaf.com/writing-and-editing/history-and-versioning), and [group subscriptions](https://docs.overleaf.com/subscriptions-payments-and-billing/group-subscription) | Real-time scientific manuscript editing, comments, tracked review, accept/reject, project history, ownership transfer, lab/department/faculty groups, institution participation, and collaboration outside the group. | Scient should learn from Overleaf's scientific familiarity and the separation between a person's account, group membership, and project collaboration. Scient must extend beyond LaTeX and manuscript production to the connected research project. |
| [OSF Projects](https://help.osf.io/article/353-welcome-to-projects) and [research groups](https://help.osf.io/article/413-getting-started-for-research-groups) | Research-centered projects, independently permissioned nested components, granular contributors, lab and consortium structures, project activity, registrations, and external integrations. | OSF is the strongest open-science reference for project organization and handoff. Scient should keep the connected local working project as its center while supporting OSF-style sharing, registration, and deposit rather than becoming another repository portal. |
| [eLabFTW](https://doc.elabftw.net/) | Multi-team laboratory work, granular read/write access, experiment comments, revision history, locking, ownership transfer, audit, signatures, timestamps, and immutable archives. | This is a stronger source for laboratory continuity and durable scientific records than a generic document editor. Scient should learn from its traceability without claiming regulated compliance before controls and validation exist. |
| [OpenReview groups](https://docs.openreview.net/getting-started/objects-in-openreview/groups) | Hierarchical role groups, invitations, assignments, scoped readers/writers/signatures, anonymous identities, review stages, and explicit decisions. | Scient should adapt the idea that authority and allowed operations can change by workflow stage. Conference-specific roles should not become the general project vocabulary. |
| [Notion groups and sharing](https://www.notion.com/help/create-and-manage-groups) and [members and guests](https://www.notion.com/help/add-members-admins-guests-and-groups) | Workspace members, external guests, group owners, teamspaces, inherited page permissions, guest approval, and SCIM-managed groups. | Useful institution-administration reference. Scient should make cross-institutional guests first class and avoid accidental over-access from inherited organization structure. |
| [Git distributed workflows](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows) | Durable history, independent local work, branches, comparison, integration review, conflict handling, and recovery without one editor session being the only record. | Git is a strong model for versioned contribution and advanced workflows, not the default user experience. Scient should expose understandable changes, proposals, checkpoints, comparisons, and recovery while keeping raw Git optional. |
| [GitHub organization teams and nested teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams) | Organizations, nested teams, maintainers, team visibility, inherited access, review requests, and external-collaborator distinctions. | Nested teams are a useful reference for institution -> department -> lab -> subgroup structure, but cascading permissions can overgrant access and GitHub restricts some outside-collaborator participation. Scient should keep affiliation, organization membership, project access, and scientific responsibility distinct. |
| [GitHub pull-request reviews](https://docs.github.com/en/pull-requests/reference/pull-request-reviews) and [code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) | Draft proposals, exact diffs and suggestions, approve/request-changes decisions, required expert review, automated checks, and a durable decision timeline. | The proposal-and-review model should extend to human and agent changes across evidence, analyses, figures, protocols, and manuscripts. Ordinary researchers should not need to understand branches or commits. |

### Product Implications To Evaluate

The current research interpretation is that Scient needs ten connected
collaboration layers:

1. person identity and scientific affiliation;
2. organizations and nested groups such as institutions, departments, labs,
   research groups, and subgroups;
3. ad hoc teams, cross-institutional projects, external collaborators, and
   project-specific membership;
4. roles, permissions, invitations, revocation, ownership continuity, and
   institutional handoff;
5. asynchronous comments, suggestions, assignments, proposals, approvals, and
   review;
6. collaborator presence and simultaneous editing on surfaces where it is
   genuinely useful;
7. offline and cross-device sync of structured scientific state with visible
   conflict and recovery behavior;
8. separate version and transfer semantics for PDFs, datasets, code, figures,
   and other large or binary artifacts;
9. attributed version history, provenance, comparison, rollback, and recovery
   across both human and agent work; and
10. institution administration, open-science sharing, registration, deposit,
    citation, and publication handoff.

The exact account model, hierarchy constraints, permission inheritance, sync
engine, cloud authority, and realtime technology remain open. A rigid
institution -> lab -> project tree would be insufficient because researchers
may belong to several organizations, ad hoc teams, and cross-institutional
projects at once. Conversely, a flat list of project invites would be
insufficient for labs and institutions that need durable communities,
administration, shared methods, and continuity when members leave.

The highest-confidence sequencing implication is to validate invitations,
project roles, external guests, comments or suggestions, reviewable proposals,
attribution, recovery, ownership transfer, and revocation before selecting a
realtime or whole-project sync engine. The deeper source and engine comparison
lives in
[`open-source-adaptation-map.md`](open-source-adaptation-map.md#collaboration-sync-sharing-and-cloud).

## Strategic Interpretation

No inspected product presents the same complete product center as Scient. This is an inference from their public product surfaces, not proof that no private or emerging competitor exists.

Scient's opportunity is to connect:

`sources -> evidence -> claims -> data and analysis -> figures and tables -> manuscript -> reviewed agent changes -> history and provenance`

The competitive risk is that specialized products continue expanding across adjacent stages while general agents make one-off research reports increasingly sufficient. Scient must therefore prove that a durable connected project is materially better than both a polished research answer and a familiar modular stack.

## Priority Follow-Up

Deepen the comparison first for:

1. Google Docs, Overleaf, Git, GitHub or GitLab, and scientific team platforms
   as distinct collaboration and organization reference models.
2. Elicit and SciSpace as AI-native research assistants.
3. Nested Knowledge, DistillerSR, Rayyan, and Covidence as governed evidence systems.
4. NotebookLM and Consensus as source-grounded synthesis tools.
5. Zotero, JupyterLab, Quarto, and Overleaf as the incumbent modular workflow.
6. General deep-research agents as rapidly improving substitutes.

Add separate product evaluations only when a deeper inspection would change Scient's product requirements, first workflow, integration strategy, or competitive positioning.
