# Sources And Evidence Product Experience

Status: Proposed
Owner: Yaacov
Created: 2026-08-29
Last updated: 2026-09-08
Purpose: Proposes how researchers and agents should collect, understand, connect, review, and reuse scientific Sources and evidence throughout a Scient project.
Doc type: Product truth

## Document Rules

This document proposes the durable product experience for Sources and evidence.
It requires explicit human acceptance before it becomes product authority. The
accepted [PRD](PRD.md) governs conflicts until then.

This document owns researcher outcomes, product vocabulary, surface roles,
interaction principles, ordinary and formal-use modes, failure behavior, and
the first complete trust journey. It does not own record schemas, anchor
algorithms, storage, permissions, provider adapters, pull-request sequencing,
or current implementation claims.

The proposed architecture lives in [ADR-0009: Evidence Continuity And Durable
Support](../architecture/decisions/ADR-0009-evidence-continuity-and-durable-support.md).
The proposed delivery sequence lives in the [Sources And Evidence
Implementation Plan](../planning/sources-and-evidence-implementation-plan.md).

### Update Policy

Update this document when the accepted product promise, user vocabulary,
surface ownership, formal-review boundary, or agent-review experience changes.
Shipped behavior and instructions belong in `scient-desktop` Help and current
implementation documents; do not turn this proposal into a second Help corpus.

## Product Promise

### Immediate scope and retained ambition

The existing local candidate explores useful manual reading: save an exact PDF passage,
add a short note, reopen it, return to its original location, and copy it with a
citation. Agents may read the same saved passages through existing authorized
Sources access. This is a useful increment on its own; it does not claim to
complete the agent-proposal and researcher-review journey below. The current
next step is the broader ownership foundation in
[ADR-0010](../architecture/decisions/ADR-0010-research-library-project-use-and-annotation-ownership.md)
and the phased plan, not further commitment to embedded Source passages.

The broader experience remains Proposed. User authorization to build the local
candidate is not acceptance of every future object, surface, or workflow in
this document. A saved quotation is not automatically accepted evidence for a
claim, and a researcher's note is interpretation rather than verified fact.
The downstream relationship model remains open until a concrete use, such as
reusing a passage in a project note, demonstrates what needs to be shared.

Library organization should be explored alongside this increment. Simple
researcher-created collections are a leading hypothesis, not an approved UI,
schema, hierarchy, or requirement to duplicate existing tags. A large evidence
workspace is not a prerequisite to useful capture or library organization.

Scient should let a researcher move from **“I read this”** to **“I can use and
defend this”** without losing the path between the two.

The researcher should be able to:

- bring a scientific source into the current project;
- read the exact material that was imported;
- preserve an important passage or region at the moment it becomes meaningful;
- add their own interpretation without prematurely formalizing it;
- later connect evidence to the project notes, claims, analyses, and documents
  that use it, through a boundary that still requires product and architecture
  review;
- understand what an agent inspected and why it proposed a conclusion;
- accept, reject, correct, or supersede agent work;
- reopen the project and recover the same scientific meaning; and
- reuse or export the evidence with its locator, citation, attribution, and
  uncertainty intact.

The mature Sources experience is therefore not merely a bibliography manager
and not primarily a graph editor. The library is the foundation. The internal
support graph connects the project. **Evidence continuity is what the
researcher experiences.**

## Why Scient Should Own This

Researchers commonly keep papers, highlights, notes, spreadsheets, analyses,
AI answers, and drafts in separate tools. The relationships among those things
live in memory. That fragmentation makes it difficult to revisit why a result
was trusted, correct an interpretation, identify conflicting evidence, or
review what an agent actually used.

Reference managers already solve much of bibliographic intake and citation
formatting. Scient should interoperate with them now. If Scient later replaces
more or all of that workflow, it should do so around the living scientific
project rather than by merely cloning an existing reference-manager interface:
reading, evidence capture, interpretation, project use, agent context, review,
analysis, writing, and recovery.

This capability compounds the value of the rest of Scient. Sources can support
project notes, analysis decisions, extracted data, claims, figures, synthesis,
manuscripts, peer review, and later collaboration without becoming separate
copies in every surface.

## Product Principles

### Capture where understanding happens

The primary capture interaction belongs in the reader. A researcher should not
leave the passage, open another route, and reconstruct what they meant.

### Make rigor available without making it compulsory

An ordinary researcher can highlight, write a note, ask about a passage, and
connect useful evidence without learning systematic-review terminology. Formal
screening, extraction, appraisal, and accounting appear only when the project
uses those workflows.

### Formalize progressively

A passage can begin as a highlight, become an annotation, later support an
assertion, and eventually participate in structured extraction or synthesis.
Scient should preserve continuity through those promotions rather than ask the
researcher to classify every thought in advance.

Progressive formalization does not mean storing every future concept as an
untyped note. Once a workflow needs dedicated criteria, conflicts, accounting,
review, or export, Scient should present the appropriate concept clearly.

### Keep manual and agent work in one understandable project

Researchers must be able to perform, inspect, correct, and continue the same
work without an agent. Agents accelerate discovery, organization, comparison,
and proposal; they do not create a parallel invisible knowledge base.

### Show why, not only what

An answer or assertion should expose the exact material and region that support
it, the interpretation or transformation involved, and who reviewed it.
Scient should distinguish direct quotation, researcher interpretation, agent
proposal, accepted relation, and generated summary.

### Preserve uncertainty and failure

Poor PDF text, ambiguous anchors, missing materials, conflicting sources,
stale relationships, incomplete metadata, and unsupported providers are real
states. Scient should explain them and offer recovery, not silently substitute
confidence.

### Keep the project authoritative and portable

Evidence should survive closing a chat, changing a provider, reopening the
project, working offline, or replacing a derived index. An external reference
manager, model provider, chat transcript, or inherited host database must not
be required to understand accepted project evidence.

A future personal or team library must not become another hidden dependency.
Project handoff should preserve the authorized reference metadata, exact used
versions and evidence needed to understand the work. If material cannot be
retained or shared, show that limitation rather than promise full portability.

## User Vocabulary

The interface should use the smallest vocabulary needed for the current task.
Architecture terms need not all appear as first-level product nouns.

| Product term | Meaning for the researcher |
| --- | --- |
| Source | An identifiable reference kept for research, including candidates, background and contradictory work; not necessarily read, trusted or cited yet. Its use and judgments in a project remain project-specific. |
| Material | A particular PDF or other concrete version of a Source. Usually shown only when a Source has several files or versions. |
| Passage or region | The exact text, page area, figure, table part, or later media range being discussed. |
| Highlight | A lightweight saved passage. |
| Note | The researcher's or agent's interpretation associated with a Source or passage. |
| Evidence | Material, observations or results used for a specific project question or assertion, with their context and uncertainty; not limited to Source passages. |
| Assertion or claim | Something the project says and may need to support, qualify, or challenge. |
| Proposed | Created by an agent or workflow and waiting for researcher judgment. |
| Accepted | Reviewed project meaning, not a declaration of universal scientific truth. |

“Supports” and “contradicts” describe a relationship to a particular assertion;
they should not be displayed as permanent labels on an entire paper.

## Sources, Project Files, And Information In The Workspace

A project may contain many files and pieces of information that are not
Sources. A script, raw dataset, meeting note, draft paragraph, or image can be
important project material without being a bibliographic Source.

A Source has a reference identity with bibliographic or origin information,
provenance, and zero or more available materials. The current candidate uses
project-owned records; that is not a decision that references must remain
isolated by project forever. A record for a
book, dataset release or inaccessible paper can be useful without a local PDF.
Registering a Source means keeping track of the reference in the project's
explicit library; it does not certify its relevance or scientific reliability.
This can be a manual action or delegated collection work under the applicable
review policy. Merely opening a file does not silently register it.

The distinction is a role, not a file format or permission gate:

- use Sources to identify, organize, revisit, compare and cite references;
- use project files for ordinary reading, annotation, editing, data and code;
- do not require Source registration merely to annotate a protocol, ask an
  agent about a PDF, search a file or request document processing; and
- connect reference roles to existing project resources when useful, without
  creating competing copies of their identity, annotations or accepted work.

The library's main item represents the reference, not its PDF. Later material
adapters can support HTML, EPUB, images, documents, audio/video and versioned
data or external locations. Availability and retention must be explicit;
these formats are not claimed as implemented by this proposal. One Source
may have several representations, but preprints, editions, corrections and
published versions must not be silently merged as interchangeable content.

Sources is the project's reference library, not all its knowledge. An internal
dataset and analysis run can support a result without becoming bibliographic
Sources. A stable project output may also acquire a reference role, while its
data, run or document record remains authoritative.

These workflows are useful beyond papers and formal reviews, including
scholarly, technical and learning work that serves a research project. Scient
remains focused on the accepted scientific-workspace purpose rather than a
generic personal-content library. The source-backed rationale, current OCR
inventory and proposed shared processing boundary live in the
[first-principles investigation](../research/source-evaluations/sources-and-document-processing-first-principles-2026-09-08.md).

## Surface Responsibilities

### Research Library And Project Sources: Accepted Direction

Researchers should be able to retain references and reading work beyond a
single project, then deliberately reuse them in another. The owner accepted
reusable personal/team libraries connected to project working sets, with exact
used versions independently preserved by the project where permitted. The
[PRD](PRD.md#research-library-and-project-preservation) records the five accepted
directions; this does not approve a new page, collection taxonomy or migration.

The desired experience is simple: collect for research, use in a project, and
choose what accompanies that use. Reusing a reference should not automatically
share private notes, another project's judgments, or the entire library with
collaborators or agents. Changes to library metadata or material should be
discoverable without silently changing previously reviewed project evidence.

Separate what an annotation targets, who owns its content, who can see it, and
how a project uses it as evidence. A mark on a scanned figure should survive
without OCR; private reading work and shared scientific judgments need not have
the same audience. Personal-library notes stay private, project-created notes
are project-owned, and annotations have independent identities and persistence
outside Source payloads. These directions are accepted. The detailed authority,
explicit sharing and retention mechanism in
[ADR-0010](../architecture/decisions/ADR-0010-research-library-project-use-and-annotation-ownership.md)
remains Proposed, including its explicit amendment to accepted ADR-0004.

For example, highlighting a project draft must not require registering a Source.
Registering it later adds a reference role without moving or recreating the
annotations. Contributing a personal note to a project should clearly identify
the selected revision and destination; it must not expose the rest of the
personal notebook. These are contract requirements, not additional setup screens.

Reference-management fundamentals and Scient's distinctive reading, agent and
evidence workflows both matter. Keep import/export, organization, citation and
external continuity on the horizon without making complete Zotero replacement
or two-way synchronization prerequisites for every useful increment. The
[ownership alternatives and decision gates](../research/source-evaluations/sources-and-document-processing-first-principles-2026-09-08.md#library-ownership-reconsideration)
record the reasoning; storage and sync choices do not belong in this product
document.

### Source library

The project library helps researchers find and manage the Sources used in the
project. A future wider library should reuse the same reference capabilities,
not introduce a second incompatible reference manager.

It should support:

- clear source identity and useful metadata;
- search, filtering, and an approved organization and navigation model as the
  library grows;
- direct import from supported reference and identifier paths;
- duplicate and metadata-review queues;
- material availability and version health;
- recent annotations and evidence activity; and
- entry into reading, detail, or evidence review.

It should not lead with internal provenance fields, operation records, graph
structure, or implementation terminology.

### Library organization and navigation

One flat list will not remain sufficient as a project library grows. Scient
should develop a coherent way to organize, browse, filter, and revisit many
Sources without making evidence work depend on a rigid filing system.

Possible directions include researcher-created groupings, tags, saved or
dynamic views, and views for work that needs attention. These are ideas to
explore, not an approved vocabulary, hierarchy, data model, or interface.
Design work must also clarify how organization differs from scientific concepts
such as Study, screening state, evidence status, and imported Zotero collection
provenance.

The compact panel and a future larger workspace may need different navigation
presentations while exposing the same project-owned library. Their exact
relationship remains open for prototype and researcher review.

### Reader

The reader is the primary capture surface. Selecting text or a page region
should expose a minimal action set such as:

- Highlight;
- Add note;
- Use as evidence; and
- Ask Scient.

Final labels and layout require design validation. The interaction principle is
the decision: preserve context at the moment of reading and avoid forcing
navigation before capture.

“Ask Scient” initially means a bounded question about the explicitly selected
passage or Source. The interface should state the scope clearly. It should not
imply that every project Source or private file was searched when it was not.

### Compact Sources panel

The compact panel is a triage and continuation surface:

- quick search and recent Sources;
- imports or duplicates requiring attention;
- recent notes and highlights;
- agent proposals awaiting review;
- lightweight metadata actions; and
- direct jumps back to the relevant material or passage.

It is not expected to contain the complete mature evidence workspace. Making
the panel larger does not solve information architecture.

### Source detail

Source detail explains one Source:

- bibliographic identity and provenance;
- available materials and versions;
- notes, highlights, and evidence extracted from it;
- where the Source is used in the project once the downstream-link model is
  accepted;
- unresolved or stale passage links;
- citation and export actions; and
- agent activity affecting the Source.

### Sources and Evidence workspace

A larger workspace becomes useful when researchers need deliberation rather
than quick capture:

- compare evidence across Sources;
- inspect relationships to project assertions, results, and documents through
  the accepted downstream-link model;
- review agent proposals efficiently;
- identify conflicting, unsupported, ambiguous, or stale support;
- navigate structured screening or extraction in formal mode; and
- understand project-wide evidence coverage.

Keep the larger workspace in view while validating actual reader and library
workflows. Neither its complete design nor its implementation is a prerequisite
to the first useful manual capture increment.

### Chat, analyses, notes, and documents

Project outputs that use evidence should provide a consistent path back to it.
Useful actions include:

- Why does Scient say this?
- Show the supporting passage.
- Which Sources disagree or qualify it?
- Where else is this Source used?
- What became stale after this result, material, or wording changed?

Those surfaces display or invoke the same project-owned evidence records. They
do not maintain private copies of support inside chat messages or editor state.

## The First Complete Trust Journey

This is the first complete **reading and review** journey, retained within
current Phases 3–4 of the broader foundation plan, not a competing first phase.
It builds on the library-to-project preservation path and should prove:

1. The researcher imports or opens one project Source with a PDF.
2. They select a meaningful passage in the reader.
3. They save a highlight or short note without choosing a complex scientific
   object type.
4. They close and reopen the project and return to the exact passage.
5. They ask Scient to interpret or work with only the selected passage for one
   bounded task.
6. Scient shows what it inspected and proposes a note or interpretation tied
   to that exact passage.
7. The researcher reviews the wording and evidence side by side.
8. They accept, reject, or edit the proposal.
9. The accepted path survives another reopen and can be copied or exported
   with its quote, locator, citation, note, attribution, and review provenance.

This first journey deliberately stops before linking evidence to a generic
“project target.” Scient still intends to connect evidence to claims, results,
analyses, extraction values, figures, tables, citations, and document passages.
The first concrete downstream use and whether those links share one record
model remain unresolved product and architecture decisions.

The journey is incomplete if only the happy-path UI works. It must also handle
poor text extraction, a replaced PDF, duplicate quotations, stale material, a
provider without tool delivery, offline metadata, rejection, and
recovery after interruption.

## Agent Experience

### What agents should do well

Manual capture proves an important workflow; it is not a requirement that a
researcher pre-highlight everything an agent can inspect. Agents should be
able to initiate authorized material discovery, bounded reading/rendering and
document processing, then propose the same inspectable annotations and project
changes a person can make. Reading ordinary project files must not depend on
first registering them as Sources. The agent must distinguish metadata-only,
partial and full inspection rather than imply it read unavailable content.

Agents are valuable for work that is expensive to produce and comparatively
cheap for a researcher to verify:

- locate candidate passages in explicitly authorized Sources;
- explain or compare selected evidence;
- propose notes and interpretations, and later evidence relationships once the
  downstream-link model is accepted;
- normalize metadata and identify possible duplicates;
- propose screening or extraction results once those workflows exist;
- identify unsupported, conflicting, stale, or incomplete project assertions;
  and
- prepare cited synthesis for review.

### What remains researcher judgment

Researchers decide:

- whether a passage is relevant evidence for the project purpose;
- how strong or applicable the evidence is;
- whether an interpretation is faithful;
- how conflicting evidence should affect the project;
- which wording the project accepts; and
- when a structured record or output is ready to rely on.

### Review should be proportional

User-authored notes and highlights should feel like normal saves. Internally,
Scient can preserve separate capture and acceptance provenance without adding
a second confirmation when the trusted manual save is itself the researcher's
intentional acceptance. Agent-proposed interpretations, and later scientific
relationships, should remain visibly proposed and reviewable. High-impact
formal records require explicit acceptance. Routine read-only actions should
not generate approval fatigue.

The review surface should answer:

- What did the agent see?
- What did it propose?
- What exact passage or record supports the proposal?
- What was omitted, unavailable, or uncertain?
- What will change if I accept?
- Can I edit, reject, or revisit the decision later?

## Ordinary Research And Formal Evidence Mode

### Ordinary research

The default experience stays light:

- Sources;
- reading;
- highlights and notes;
- bounded questions;
- evidence connected to notes, results, assertions, and writing; and
- simple agent proposal review.

The researcher is not asked to configure screening stages, extraction schemas,
appraisal tools, or study groups unless those workflows are activated.

### Formal evidence work

A project may deliberately enable a more structured workflow for systematic or
other formal review work:

- study and report relationships;
- reproducible searches;
- inclusion and exclusion criteria;
- screening stages and reasons;
- extraction schemas and values;
- supporting quotations;
- quality or risk appraisal;
- conflict and adjudication;
- accounting and export; and
- later multi-reviewer responsibility.

Formal mode reuses the same Sources, materials, Regions, provenance, operations,
and project authority. It does not create a parallel product or force ordinary
projects to adopt its ceremony.

## Failure, Recovery, And Honesty

| Situation | Required product behavior |
| --- | --- |
| PDF has no usable text layer | Explain that exact text capture is unavailable; allow honest page/region capture where supported; offer a separately reviewed OCR path later. |
| Passage cannot be relocated | Show it as unresolved and preserve the quote, material version, and history; never jump to an arbitrary match. |
| Several matches are plausible | Show ambiguity and let the researcher choose or create a successor anchor. |
| Source material changed | Preserve the old version relationship, identify affected evidence, and require review before rebinding. |
| A later linked note, result, claim, or other project object changed | Through the accepted downstream-link model, mark dependent evidence uses potentially stale and show why. |
| Metadata service or Zotero is unavailable | Keep project-owned Sources usable and explain which optional enrichment failed. |
| Provider cannot receive Sources or evidence tools | Report the provider limitation without changing the user's evidence policy or record meaning. |
| Agent proposal is rejected | Preserve appropriate review provenance without presenting the proposal as accepted project truth. |
| Derived search index is missing or corrupt | Rebuild it from canonical records; do not lose highlights, evidence, or decisions. |

## Quality Bar

The experience is not ready merely because records can be created. A release
candidate should demonstrate that:

- a scientist unfamiliar with developer tooling understands why Sources belong
  inside a project;
- capture is faster than copying a quote into a separate notes application;
- the exact material and passage remain inspectable after reopen;
- the interface distinguishes missing, ambiguous, proposed, accepted, and
  stale states without overwhelming ordinary use;
- agent scope and proposal status are clear without exposing transport jargon;
- manual work remains first-class;
- an exported evidence package remains understandable outside Scient;
- the design remains usable with a large library and long project history; and
- formal workflows add rigor without reshaping every ordinary project.

## Future Capability Horizon Beyond The First Trust Slice

The first trust slice is a narrow proof, not the boundary of the intended
product. Scient intends to grow into the following areas and beyond them:

- deeper reference management and Zotero continuity, up to a complete
  Scient-owned replacement experience;
- reusable personal/team libraries with explicit project working sets,
  independent judgments and portable project handoff;
- automatic web-scale literature discovery;
- broad cross-library question answering;
- durable evidence links to notes, claims, analyses, extraction values,
  citations, figures, tables, and document passages;
- a mature Sources and Evidence workspace with large-library organization and
  navigation;
- graph visualization and editing;
- assisted Claim discovery and creation with appropriate review;
- a full systematic-review platform;
- multi-reviewer realtime collaboration;
- EPUB, HTML, audio, or video anchoring;
- reviewed OCR and recovery for material without trustworthy text;
- full manuscript evidence diagnostics; and
- mobile parity.

These are retained future directions, not rejected capabilities. The library,
project-preservation and annotation ownership directions are already accepted
in PRD; their implementation and delivery remain phased. Other directions' exact
scope, experience, architecture, dependencies, and sequence are not approved by
this proposal. They should enter through the same continuity, authority,
uncertainty, and review foundations rather than bypass them.

## Product Review Questions

1. Is “evidence continuity” the clearest description of the user value, while
   keeping the support graph an internal concept?
2. Is reader-first capture the correct primary interaction?
3. Are the panel, reader, source-detail, and full-workspace responsibilities
   separated correctly?
4. What library organization and navigation problems must Scient solve as a
   project grows, without prematurely selecting categories, collections,
   hierarchy, or saved-view rules?
5. Does progressive formalization keep ordinary use simple without weakening
   formal scientific workflows?
6. Is a bounded “Ask Scient about this passage or Source” appropriate in the
   first trust journey, while broad library Q&A remains later?
7. Is it correct for the first journey to stop at a reviewed Region-attached
   note or interpretation while the downstream evidence-link model remains
   open?
8. Are agent proposal and human acceptance applied to the right classes of
   work?
9. Does the Source-versus-project-file explanation match how non-developer
   scientists should understand the product?
10. Are any future capabilities essential to the first complete trust journey?
11. Does ADR-0010's explicit contribution and availability behavior implement
    the accepted privacy and project-preservation directions clearly enough?
    The five ownership directions themselves are decided, not open questions.
