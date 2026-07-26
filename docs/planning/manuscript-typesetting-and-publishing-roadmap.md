# Manuscript, Typesetting, And Publishing Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-07-26
Last updated: 2026-07-26
Purpose: Proposes the product boundary, durable shared foundation, source strategy, validation approach, and staged path from a universal typesetting opener to a complete manuscript, review, collaboration, publication, and institutional workspace in Scient.
Doc type: Planning note

## Document Rules

This roadmap owns the proposed direction and dependency order for typesetting,
scholarly authoring, manuscripts, review, collaboration, publishing, and the
long-term Overleaf-class capability horizon. It does not own the active product
sequence, accepted architecture, current implementation, scientific runtime
workbench, or complete open-source inventory.

The accepted product contract lives in the [PRD](../product/PRD.md). Current
product sequencing lives in the [Product Roadmap](product-roadmap.md). The
shared computing and execution foundation is proposed in the
[Scientific Computing And Data Analysis Roadmap](scientific-computing-and-data-analysis-roadmap.md).
Domain-specific scientific and reporting requirements are proposed in the
[Scientific Domain Workflows Roadmap](scientific-domain-workflows-roadmap.md).
Detailed donor evidence lives in the
[Open-Source Adaptation Map](../research/source-evaluations/open-source-adaptation-map.md),
and source-relationship policy lives in the
[Open-Source Adaptation Build Strategy](open-source-adaptation-build-strategy.md).

Names in this document describe proposed responsibilities, not accepted
packages, schemas, APIs, storage formats, collaboration engines, compiler
distributions, or implementation locations. No reference to Overleaf or another
source accepts a fork, dependency, hosted-service relationship, license
obligation, or data model without the focused decision required for that choice.

### Update Policy

Update this document when its product boundary, first durable slice, maturity
path, shared-foundation contract, representation strategy, source strategy,
validation fixtures, or current implementation snapshot materially changes.
Keep detailed donor inventories in the research map and promote accepted hard
decisions into focused architecture documents or ADRs.

## Decision Summary

Scient should make LaTeX, Typst, Quarto, Markdown, citations, manuscripts,
review, collaboration, and publication parts of one **Manuscript, Typesetting,
And Publishing workspace**. It should not ship a disposable `LatexPreview`
mini-product that must later be removed to build a complete authoring platform.

The first release can still be deliberately small: open an arbitrary supported
typesetting file, edit it normally, resolve its document root, build it through
an explicit engine adapter, show source/preview/log together, surface useful
diagnostics, preserve the last successful artifact, and recover when the engine
or project is incomplete. That slice is the first client of permanent document,
project-resolution, build, diagnostic, artifact, and history contracts.

The long-term capability envelope should include the valuable parts of
Overleaf-class authoring and collaboration, but the implementation relationship
remains an evidence-gated choice. Scient may combine clean-room product
adaptation, compatible project exchange, small permissive components, isolated
services, and its own local-first architecture. It should not assume that
forking the whole Overleaf stack is the fastest or most maintainable route.

The document model must support two durable authority modes:

- **file-native projects**, where `.tex`, `.typ`, `.qmd`, `.md`, `.bib`, images,
  styles, and configuration remain canonical; and
- **structured-native manuscripts**, where semantic blocks, claims, evidence,
  citations, comments, suggestions, provenance, and multiple projections may be
  canonical without pretending they are one text buffer.

Those modes may coexist within one project, but every document must state which
representation is authoritative and must report projection loss or unresolved
material. This keeps the universal opener useful now without constraining a
future visual editor or full manuscript platform to brittle text round-trips.

The manuscript workspace and scientific workbench should share document
identity, surface selection, project resolution, execution lifecycle,
diagnostics, artifacts, history, permissions, review, and agent attribution.
They should not share one oversized domain record: `DocumentBuild` and
`AnalysisRun` retain distinct semantics.

The manuscript kernel must support domain profiles without becoming a separate
editor for each field. Clinical and medical reports need versioned study-type
and reporting-guideline profiles; biology, neuroscience, and chemistry need
sample/method/identifier and rich-figure links; mathematics needs theorem and
proof-aware authoring; and computer science needs algorithm, code, benchmark,
artifact, and anonymous-review workflows. Those requirements shape M1 now even
when their complete UX ships later.

This is a proposed direction, not accepted product truth or architecture.

## Product Boundary

This roadmap owns the experience of turning research material into an authored,
reviewed, reproducible, publishable scholarly object.

It includes:

- universal opening, editing, building, and preview of typesetting projects;
- manuscript structure, semantic scholarly blocks, citations, bibliography,
  cross-references, equations, tables, figures, supplements, and metadata;
- source, split, rendered, outline, and eventually visual-authoring modes;
- build recipes, engines, logs, diagnostics, generated artifacts, and
  source/output synchronization;
- comments, suggestions, review requests, decisions, versions, comparison,
  restore, attribution, and collaboration;
- templates, journal/conference profiles, export, submission, deposits,
  integrations, and later institutional administration;
- local-first and later remote/shared workflows; and
- agent assistance on the same documents, claims, sources, comments, builds,
  and publication constraints available to researchers manually.

It does not absorb every adjacent product area:

- Python, R, MATLAB, notebooks, datasets, runtime variables, and analysis runs
  belong to the [scientific-computing roadmap](scientific-computing-and-data-analysis-roadmap.md).
- The universal local-file opener and PDF/HTML/image/SVG/media viewers are
  horizontal infrastructure consumed by this workspace.
- Evidence review, literature retrieval, protocol/ELN behavior, project memory,
  and task coordination retain their own responsibilities even when linked into
  manuscripts.
- Identity, permissions, history, local-first sync, and collaboration are
  cross-cutting platform responsibilities; this roadmap states manuscript
  requirements but does not select their storage or transport architecture.
- A journal marketplace, publisher business, institutional identity provider,
  or general cloud drive is not required for the first complete authoring
  experience.
- Clinical study management, an EHR, regulatory submission platform,
  laboratory inventory, theorem prover, or CI system remains outside this
  workspace even when their artifacts and metadata link into a manuscript.

## Current Product Truth

This snapshot was verified on 2026-07-26 against the published
[Scient v0.5.13](https://github.com/ScientFactory/scient-desktop/releases/tag/v0.5.13)
release and `release/stable` commit
[`20c77213`](https://github.com/ScientFactory/scient-desktop/commit/20c77213659f6e98a3706de09fa83f7182a0bc94).
It is implementation evidence, not the long-term product contract.

| Capability | Verified state | Consequence |
|---|---|---|
| Open project and granted absolute local files | Yes through the universal file route. | The first typesetting slice should reuse this activation path. |
| Inspect ordinary typesetting source | Source-like text can use the read-only syntax/source surface. | Researchers can inspect source, but this is not an authoring experience. |
| Manually edit and save ordinary source | No general source editor exists. Only a narrow Markdown task-checkbox interaction writes from preview. | Revision-aware source editing is part of M0, not assumed infrastructure. |
| Build LaTeX, Typst, or Quarto as a document | No root resolver, engine/toolchain resolver, build coordinator, recipe, log, or `DocumentBuild` record exists. | The universal opener and build contract must be designed together. |
| View produced PDF/HTML/image/SVG | Yes through shared viewer routes. | M0 should compose with these viewers rather than create a private PDF stack. |
| Show source, preview, and log as one document | No typesetting workbench or last-success state exists. | M0 owns this composed UX. |
| Protect concurrent/external edits | The current write contract replaces full text without an expected revision. | General source editing would risk silent overwrite until conditional writes exist. |
| Protect large/partial source | Ordinary reads default to 1,000,000 bytes and report truncation. | Partial source must never be saved as the full file. |
| Structured manuscript, comments, review, versions, or co-editing | No first-party manuscript document model or collaborative authoring surface exists. | M1 and later are new product work, not extension toggles. |

Pinned implementation evidence:

- the
  [workspace preview](https://github.com/ScientFactory/scient-desktop/blob/20c77213659f6e98a3706de09fa83f7182a0bc94/apps/web/src/components/WorkspaceFilePreview.tsx)
  keeps ordinary source read-only and owns the narrow Markdown checkbox write;
- the
  [workspace filesystem](https://github.com/ScientFactory/scient-desktop/blob/20c77213659f6e98a3706de09fa83f7182a0bc94/apps/server/src/workspace/Layers/WorkspaceFileSystem.ts)
  uses full-replacement writes without a compare token and size-limited text
  reads; and
- the
  [viewer registry utility](https://github.com/ScientFactory/scient-desktop/blob/20c77213659f6e98a3706de09fa83f7182a0bc94/packages/shared/src/localPreviewFiles.ts)
  already routes source, Markdown, PDF, HTML, image, SVG, audio, and video.

Availability of a TeX distribution, Tectonic, Typst, Quarto, Pandoc, or TexLab
on one development machine is not product truth. Missing, multiple,
misconfigured, removed, differently installed, or unlicensed tools are normal
states that the packaged product must represent honestly.

## Target Researcher Experience

The experience should grow without a conceptual reset.

### Universal Typesetting Opener

Activating a `.tex`, `.typ`, `.qmd`, or related file from a project, chat,
search result, scratch area, or explicitly granted local path should:

1. open the selected file immediately in the best safe source/view mode;
2. resolve the likely document root, dependencies, engine, and recipe
   progressively without blocking the initial open;
3. expose `Source`, `Preview`, `Log`, `Outline`, and useful split modes according
   to available capabilities;
4. let the researcher build, rebuild, cancel, or supersede through one
   controlled build lifecycle;
5. stream diagnostics and link them to the exact source range when possible;
6. show the current attempt separately from the last successful PDF/HTML or
   other artifact;
7. explain missing engines, packages, fonts, bibliography tools, files, or
   permissions and offer useful continuations; and
8. preserve `Open externally`, `Reveal`, `Copy path`, and project import/copy
   options.

Project-owned text should be directly editable. An explicitly granted external
file should open in view mode and offer deliberate `Edit original` through a
revision-aware write capability, `Import or copy into project`, or `Open
externally`. Import should not be required merely to view or intentionally edit
a local file.

### Serious Individual Authoring

A researcher should be able to:

- navigate source, outline, labels, references, citations, figures, tables, and
  diagnostics without leaving the manuscript;
- write in source or an appropriate structured/visual surface while knowing
  which representation is authoritative;
- search and insert project bibliography entries, resolve duplicates and
  missing metadata, and see where a citation is used;
- reuse figures, tables, methods, claims, and artifacts with links to their
  producing analysis or evidence;
- compare versions, restore safely, inspect build receipts, and recover unsaved
  drafts or failed builds; and
- export a portable standards-based project that remains usable outside
  Scient.

### Review, Collaboration, And Publication

Researchers and collaborators should eventually be able to:

- comment or suggest changes on stable semantic or textual anchors;
- request review, resolve discussions, record decisions, and compare revisions;
- work offline or locally, reconnect, and reconcile without losing attribution;
- co-edit in realtime when the project and permissions allow it;
- validate a manuscript against a journal, conference, preprint, repository, or
  institutional profile;
- produce submission-ready source, PDF, HTML, metadata, figures, supplements,
  accessibility material, and deposits; and
- ask agents about exact claims, sources, analyses, comments, build failures,
  reviewer requests, or publication requirements while retaining manual
  authority.

## Product Invariants

These invariants should survive every maturity stage:

1. **The first opener is permanent infrastructure.** It is a thin first client
   of durable document/build contracts, not a preview that will be thrown away.
2. **One logical document, one explicit authority.** Source, visual, rendered,
   diff, comment, and agent projections never silently become competing truths.
3. **Portable project material outranks hidden state.** Standard source,
   bibliography, assets, configuration, and exports remain usable outside
   Scient.
4. **No silent overwrite or projection loss.** Conditional writes and explicit
   conversion reports protect concurrent edits and representation fidelity.
5. **Open before resolving deeply.** Root, dependency, engine, and project
   ambiguity never turn a viewable file into a blank panel.
6. **Build failure does not corrupt authoring.** Editing, preview, last success,
   logs, collaboration, and history have separable failure domains.
7. **Generated output is not canonical source by accident.** Temporary and
   intermediate files stay outside source directories by default unless the
   project recipe explicitly owns them.
8. **Artifacts remain connected.** A PDF, HTML site, figure, table, supplement,
   or deposit knows the build, document revision, inputs, and producing analysis
   where available.
9. **Comments and suggestions use durable anchors.** They survive reasonable
   edits or become explicitly orphaned; line numbers alone are insufficient.
10. **Collaboration is designed early.** Identity, attribution, permissions,
    history, proposals, review, revocation, and recovery precede realtime depth.
11. **Local-first does not mean local-only.** Shared and hosted services can
    attach without making opaque remote state the only canonical copy.
12. **Missing tools are normal.** Missing engines, packages, fonts, citations,
    network access, credentials, or services produce setup/recovery states.
13. **The engine remains replaceable.** Document identity, review, history, and
    publication semantics do not depend on one compiler distribution.
14. **The editor remains replaceable.** Text and rich editors are surfaces over
    documents, not the permanent project model.
15. **The collaboration engine remains replaceable.** Product permissions,
    history, attribution, review, and recovery are not reduced to CRDT internals.
16. **Overleaf compatibility is not Overleaf lock-in.** Import/export,
    capability parity, and optional interoperability remain separable from a
    wholesale fork or hosted dependency.
17. **Agent and human actions share authority.** Agents propose, edit, comment,
    build, and publish through the same permissions, receipts, and review paths.
18. **Accessibility and international research are architectural concerns.**
    Keyboard use, screen readers, bidirectional text, multilingual content,
    math accessibility, and constrained displays are not late cosmetic work.
19. **Reporting profiles guide human review.** A guideline name, checklist
    state, or automated check never becomes a scientific-quality, clinical,
    regulatory, or publication-compliance assertion.
20. **Study and domain identity remains linked.** Cohorts, protocols, samples,
    compounds, proofs, software versions, datasets, analyses, figures, and
    tables link to the manuscript without being copied into manuscript-private
    truth.
21. **Blinding is a projection, not destructive redaction.** Anonymous-review
    and restricted-review modes hide or warn about identifying material while
    preserving canonical authority and explicit export checks.

## Shared Foundation Contract

The computing and manuscript roadmaps should commission one cross-cutting
architecture package for these responsibilities. The names below are proposed
vocabulary, not accepted schemas.

### Document Identity And Representations

A document identity sits above a file buffer or rich editor and owns:

- stable project identity, revision, authority mode, capabilities, and
  provenance;
- file-backed or structured-native representations and their projections;
- text/semantic anchors, selections, comments, suggestions, diagnostics, and
  agent references;
- conditional updates, drafts, recovery, conflict, comparison, and history;
- source, rendered, outline, visual, review, and publication projections; and
- preservation/conversion reports for normalized, downgraded, unresolved, or
  lost material.

File-native documents retain canonical source files. Structured-native
documents require a focused architecture decision before implementation. A
future visual editor must not silently round-trip arbitrary LaTeX through a
lossy schema and overwrite the source.

### Surface Registry

The universal opener selects registered surfaces by content, extension,
project context, ambiguity, size, platform, and available dependencies. A
surface declares modes, edit/save/build capabilities, loading/failure/recovery
states, and fallbacks. Source, PDF, HTML, SVG, image, log, diff, outline,
citation, and future rich manuscript surfaces compose here rather than create
new click-routing systems.

### Project Resolver

An adapter-driven resolver progressively identifies:

- selected file and candidate document root;
- included source, bibliography, image, style, template, configuration, and
  generated-file relationships;
- explicit project recipes or conventional root evidence;
- engine/profile candidates and their reasoning;
- remembered explicit choices with scoped invalidation; and
- incomplete, ambiguous, cyclic, missing, external, or inaccessible edges.

Resolution is bounded and cancellable. The file opens first. A standalone
chapter must remain editable even when the root cannot be found.

### Execution Coordinator And `DocumentBuild`

The shared coordinator owns provider discovery, preparation, start, stream,
cancel, supersede, process ownership, receipts, recovery, logs, diagnostics,
artifacts, and last-success state. A typesetting adapter retains document
semantics:

- root, source graph, engine, recipe, passes, bibliography/index work;
- environment, fonts, shell-escape/network policy, and exact executable;
- diagnostic normalization and source/output synchronization;
- intermediate versus promoted outputs; and
- build-specific current/failed/stale/last-success behavior.

The viewer does not spawn a compiler directly. A `DocumentBuild` is not an
`AnalysisRun`, although both share lifecycle and event vocabulary.

### History, Permission, Review, And Collaboration Gate

Before document and artifact identities harden, define:

- actor/device/session attribution and human-versus-agent initiator;
- project, document, external-file, build, comment, suggestion, and publication
  permissions;
- revision and anchor semantics used by history and review;
- proposal, approval, reject, revoke, restore, and audit behavior;
- offline edit/reconnect/conflict expectations; and
- the narrow asynchronous shared-project slice required by the accepted
  product roadmap before realtime collaboration.

This gate is early architecture work. It does not require a realtime editor in
the first opener.

## First Durable Slice: Universal Typesetting Opener

The first slice should be small enough to ship and complete enough to establish
the permanent foundation.

### Required Capability

- Open a project-owned or explicitly granted `.tex` file through the universal
  opener, with `.typ` and `.qmd` following through adapters rather than forks.
- Provide first-class manual source editing with revision-aware saves,
  conflict, recovery, and large/partial-file protection.
- Resolve a likely root through explicit project configuration first, a
  remembered choice second, conventional directives and dependency evidence
  third, and the selected file as a valid fallback.
- Discover supported engines without assuming the GUI process inherits the
  shell `PATH`.
- Build through the shared coordinator and a `DocumentBuild` adapter.
- Show Source, Preview, Log, and split modes, with responsive switching and no
  blank shell during loading or failure.
- Normalize common file/line diagnostics while preserving the complete raw log.
- Keep the last successful output visible and labelled when the current build
  fails or becomes stale.
- Put intermediate output in an owned temporary/build location by default and
  promote explicit artifacts deliberately.
- Preserve source, logs, receipts, outputs, and recovery after cancellation,
  crash, restart, or missing output.
- Reuse the current PDF/HTML/image/SVG viewers rather than create typesetting-
  private renderers.

### Deliberately Deferred From The First Slice

- perfect visual round-tripping of arbitrary LaTeX;
- realtime collaboration;
- hosted compilation as the default;
- a bundled full TeX distribution;
- every bibliography/index/glossary recipe;
- complete package installation management;
- SyncTeX if it would delay reliable build/preview/log behavior;
- journal submission automation; and
- complete Overleaf import parity beyond normal portable project files.

### First-Slice Success Gate

The slice is useful on its own when a researcher can open a real multi-file
paper, make a manual edit, build it, understand and navigate a failure, view the
last successful PDF without confusion, recover after restart, and continue in
an external tool without proprietary conversion.

## Engine And Language Strategy

Use adapter contracts and fixtures before accepting a distribution.

| Candidate | Proposed role | Decision still required |
|---|---|---|
| Installed `latexmk` plus TeX Live/MiKTeX/MacTeX | Broad local LaTeX compatibility using user-owned tools | Discovery, recipes, package prompts, shell escape, output isolation, Windows/macOS/Linux behavior |
| [Tectonic](https://tectonic-typesetting.github.io/) | Reproducible, self-contained LaTeX engine candidate or optional managed path | Package/network/cache policy, compatibility envelope, binary distribution, license and update model |
| [Typst](https://github.com/typst/typst) | First-class modern typesetting peer, not a LaTeX conversion mode | Language service, package access, project model, PDF/source sync, license review |
| [Quarto](https://quarto.org/) and [Pandoc](https://pandoc.org/) | Executable and multi-format document adapters composed with scientific runtimes | Ownership of computation versus build, intermediate files, profiles, environment receipts |
| Remote build provider | Optional adapter for unavailable/heavy/shared toolchains | Explicit data transfer, credentials, retention, trust, cancellation, cost, offline fallback |
| [TexLab](https://github.com/latex-lsp/texlab) | Candidate diagnostics/completion/navigation service | GPL/process-boundary review, binary lifecycle, fixture quality, platform packaging |

The initial decision should separate three questions: what project formats
Scient supports, which installed engines it can connect to, and whether Scient
offers an optional managed engine. Those answers need not be identical.

## Capability Maturity Path

These are dependency stages, not release dates. Each stage must have its own
approval and quality gate.

## M0 — Durable Open, Edit, Build, Preview, And Recover

Deliver the first durable slice above. Establish file identity, root resolution,
`DocumentBuild`, diagnostics, receipts, last success, artifacts, and recovery.

## M1 — Manuscript Kernel And Early Collaboration Foundation

Define manuscript identity, sections/blocks, citations, figures, tables,
equations, claims/evidence links, stable anchors, comments/suggestions, history,
permissions, and authority/projection rules. Retain file-native authoring while
structured-native architecture is evaluated.

Define the profile boundary for clinical study semantics, life-science
identifiers, mathematical theorem/proof structures, and CS
software/experiment artifacts. These are typed links and profile fields over
the shared manuscript kernel, not four new manuscript models.

This is the point at which future collaboration constraints must shape the
model. It is not the point at which realtime co-editing must ship.

## M2 — Serious Individual Authoring And Asynchronous Review

Add strong outline/navigation, citation workflows, labels/references,
source/output sync, reusable scientific artifacts, templates, publication
profiles, accessibility checks, version comparison/restore, discussion and
suggestion workflows, and the narrow asynchronous shared-project validation
required by the active product roadmap.

Validate one medical-study profile with analysis-linked tables/figures and a
blinded export; one mathematics fixture with theorem/proof links; and one CS
fixture with exact code/benchmark/artifact references.

## M3 — Realtime Local-First Collaboration

Add presence, selections, co-editing, reconnect, offline reconciliation,
permissions, attribution, comments/suggestions under concurrent edits, and
recovery. Validate large documents, weak networks, device churn, revoked access,
engine mismatch, and agent/human concurrency before broad release.

## M4 — Publication And Ecosystem Integration

Add robust import/export, journal/conference/preprint profiles, submission
packages, repository/deposit integrations, bibliography/reference-manager
connections, project exchange, and optional Overleaf interoperability where an
approved relationship provides real user value.

Add JATS exchange and approved reporting-profile exports where their fidelity,
licensing, versioning, and human-review boundaries pass. Regulatory or
publisher-specific packages remain separately validated targets.

## M5 — Research Groups, Institutions, And Broader Access

Add group templates, roles, managed policy, institutional integrations,
retention, audit, data-region/deployment options if justified, project transfer,
administration, mobile/constrained-display review, internationalization, and
accessibility depth.

## M6 — Integrated Scientific Intelligence

Connect claims, evidence, protocols, analyses, figures, tables, datasets,
reviewer requests, publication checks, and agents into a traceable scientific
workflow. Scient's advantage should come from these connected research objects,
not merely matching a browser-based LaTeX editor.

## Full Capability Envelope

This table prevents a narrow first opener from becoming the accidental product
ceiling. It does not approve every row for implementation.

| Area | Long-term capability envelope | Earliest owning stage |
|---|---|---|
| Project and file lifecycle | Local folders, archives, templates, project import/export, external-file grants, rename/move/delete recovery, generated-file policy, large projects, assets, supplements, multiple roots | M0–M2 |
| Source authoring | Syntax editing, outline, symbols, labels/references, snippets, completion, diagnostics, formatting, multi-file navigation, search/replace, Git/diff, recovery | M0–M2 |
| Visual and structured authoring | Semantic blocks, equations, tables, figures, citations, footnotes, cross-references, tracked suggestions, source/visual transitions, fidelity reports | M1–M3 |
| Build and rendering | Local/managed/remote adapters, recipes, incremental build, bibliography/index/glossary, diagnostics, logs, last success, SyncTeX, PDF/HTML/ePub/Word where appropriate | M0–M4 |
| Citations and evidence | BibTeX/BibLaTeX/CSL, reference-manager connections, duplicate resolution, metadata repair, evidence links, claim-source relationships, retractions/updates | M1–M6 |
| Scientific content | Analysis-backed figures/tables, equations, methods, dataset/model/code references, executable documents, provenance, staleness | M1–M6 |
| Review and discussion | Comments, threads, suggestions, assignments, review requests, decisions, resolution, private/group scopes, durable anchors | M1–M3 |
| History and recovery | Revision history, named versions, compare, restore, drafts, autosave, crash recovery, attribution, audit, exportable history where feasible | M0–M3 |
| Collaboration | Sharing, roles, permissions, async review, presence, realtime co-editing, offline/reconnect, notifications, agent collaborators | M1–M3 |
| Templates and publication profiles | Journals, conferences, theses, preprints, institutional templates, compliance checks, metadata and packaging | M2–M5 |
| Submission and deposits | Publisher/preprint/repository packages, supplements, data/code links, ORCID/ROR/funder metadata, checks, status and receipt capture | M4–M6 |
| Integrations | Git, reference managers, cloud/project sources, storage, identity providers, compute/build providers, APIs, webhooks | M2–M5 |
| Groups and institutions | Managed templates, teams, transfer/ownership, governance, audit, retention, deployment/data-region options, administration | M5 |
| Accessibility and internationalization | Keyboard and screen-reader authoring/review, accessible math and documents, bidirectional/multilingual text, locale-aware metadata, mobile/constrained review | M1–M5 |
| Scientific and agent advantage | Claim/evidence/analysis graph, provenance, consistency review, artifact refresh, reviewer-response workflows, publication-readiness agents | M2–M6 |

## Domain Manuscript Profiles

The manuscript kernel should support versioned semantic profiles over the same
documents, blocks, anchors, figures, tables, citations, comments, builds, and
exports. A profile declares relevant fields, structures, checks, and exchange
targets. It does not fork the editor, replace the source format, or certify the
research.

### Clinical And Medical Studies

Scient should distinguish at least interventional trials, observational and
real-world-data studies, diagnostic studies, prognostic or prediction-model
studies, systematic reviews/meta-analyses, protocols, case reports, and
preclinical animal studies.

The profile must be able to link and render:

- protocol version, registration, design, setting, sites, eligibility,
  participants/cohort, arms or exposure/comparator, intervention, outcomes and
  endpoints, timepoints, analysis populations, randomization/blinding where
  relevant, and statistical analysis plan;
- recruitment or study flow, deviations, missing data, censoring, multiplicity,
  harms, subgroup and sensitivity analyses, and limitations;
- baseline-characteristics tables, effect estimates with uncertainty,
  adverse-event tables where relevant, forest plots, Kaplan-Meier plots,
  ROC/calibration figures, and participant/study-flow diagrams;
- source, derived, and analysis datasets plus the exact AnalysisRuns that
  generated reported values, tables, and figures;
- ethics, consent, registration, funding, conflicts, author roles, data/code
  availability, and terminology/standard versions; and
- blinded or double-blind review projections with explicit export checks for
  names, affiliations, acknowledgments, file metadata, tracked changes, and
  other identifying content.

Use the [EQUATOR Network](https://www.equator-network.org/) to select applicable
versioned profiles such as CONSORT, STROBE, PRISMA, SPIRIT, STARD, TRIPOD,
CARE, ARRIVE, and RECORD. Applicability and completion require human judgment.
Scient should link to authoritative guidance and store profile/version/user
state; it must not republish copyrighted checklists without permission or turn
checkboxes into an automatic compliance or quality score.

Use [JATS](https://jats.nlm.nih.gov/) as an important publishing and
article-exchange target. JATS is not the canonical manuscript model, and a
successful export is not a publisher acceptance guarantee.

### Biology, Neuroscience, And Chemistry

Profiles should support:

- sample/specimen/organism/cohort/condition definitions and stable domain
  identifiers;
- protocol, instrument, reagent, compound, sequence/reference, pipeline,
  software, parameter, unit, and accession/deposit links;
- rich multi-panel figures, source data, microscopy/neuroimaging/molecular
  views, spectra, supplements, and accessible alternative descriptions;
- generated results whose current/stale state follows their AnalysisRun; and
- domain repository identifiers and data/code/material availability statements.

The manuscript stores references and narrative, not private copies of the
laboratory, dataset, structure, or viewer state.

### Mathematics And Formal Methods

Profiles should support:

- definition, theorem, lemma, proposition, corollary, example, conjecture, and
  proof structures;
- exact equations, numbering, labels, cross-references, assumptions,
  notation/glossary, and commutative or generated diagrams;
- source links and checked proof artifacts with prover, library, version,
  status, diagnostics, and staleness; and
- LaTeX/Typst source escape hatches and publication export without claiming
  that rendered mathematics has been formally verified.

### Computer Science

Profiles should support:

- algorithms and pseudocode, code listings, repository/release/commit links,
  dependency and environment receipts, datasets/models, and licenses;
- evaluation questions, workloads, configurations, seeds, machines,
  repetitions, uncertainty, baselines, ablations, benchmark tables, traces,
  profiles, and reproducibility limitations;
- artifact appendices, availability/badging metadata, supplemental packages,
  and archival identifiers; and
- conference templates plus anonymous-review projections and export checks.

Exact conference or venue requirements remain versioned publication profiles,
not permanent manuscript-schema assumptions.

## Focused Source Strategy

The canonical source inventory and evidence belong in the
[Open-Source Adaptation Map](../research/source-evaluations/open-source-adaptation-map.md).
This roadmap keeps only the sources that constrain its architecture or an
upcoming gate.

| Source | Learn or adapt | Boundary |
|---|---|---|
| [LaTeX Workshop](https://github.com/James-Yu/LaTeX-Workshop) | Mature project-root heuristics, recipes, build/log/diagnostic flows, viewer synchronization, IntelliSense integration, user expectations | Study behavior and small eligible components only after license/dependency review; do not import a VS Code extension architecture wholesale |
| [Tectonic](https://github.com/tectonic-typesetting/tectonic) | Reproducible engine and bundle/cache behavior | Evaluate as an engine adapter or optional managed path, not as the document model |
| [TexLab](https://github.com/latex-lsp/texlab) | LaTeX language intelligence through a standard process boundary | GPL and binary-distribution review required; keep a replaceable LSP adapter |
| [Overleaf](https://github.com/overleaf/overleaf) product, docs, and Community Edition | Capability completeness, project/build separation, collaboration/review UX, history, templates, import/export, operational boundaries | Treat each component and service separately; hosted/Server Pro behavior is not automatically present in Community Edition; AGPL and operational cost are explicit gates |
| [Typst](https://github.com/typst/typst) | Modern typesetting, incremental compilation expectations, package/project UX | First-class peer format; do not make it a universal intermediate representation without fidelity evidence |
| [Quarto](https://github.com/quarto-dev/quarto-cli), [Pandoc](https://github.com/jgm/pandoc), and [MyST](https://github.com/jupyter-book/mystmd) | Multi-format scholarly documents, profiles, executable composition, cross-references, publication outputs | Compose via adapters; keep runtime execution distinct from document build and report conversion loss |
| [Stencila](https://github.com/stencila/stencila) | Executable scholarly documents, structured provenance, source mappings, agent-aware documents | Strong product/architecture reference; accept code or schemas only after focused license/compatibility review |
| [Tiptap](https://github.com/ueberdosis/tiptap), [Plate](https://github.com/udecode/plate), and [Lexical](https://github.com/facebook/lexical) | Rich-editor primitives, schema/plugin ergonomics, collaboration bindings | Candidate surfaces, not the canonical manuscript model; compare with real scientific fidelity fixtures |
| [Zotero](https://github.com/zotero/zotero), [JabRef](https://github.com/JabRef/jabref), and [Citation Style Language](https://citationstyles.org/) | Bibliography UX, metadata quality, citation styles, interoperability | Prefer standard interchange and APIs; do not recreate a reference manager inside the first authoring slice |
| [Yjs](https://github.com/yjs/yjs), [Hocuspocus](https://github.com/ueberdosis/hocuspocus), [Automerge](https://github.com/automerge/automerge), [ShareDB](https://github.com/share/sharedb), and [Yorkie](https://github.com/yorkie-team/yorkie) | Collaboration, offline merge, presence, provider boundaries, operational tradeoffs | Collaboration engine is a focused architecture decision; CRDT/OT state cannot be the whole permission/history/review model |
| Google Docs and Microsoft Word | Mainstream review, suggestion, comments, version, accessibility, and authoring expectations | Product references only; avoid proprietary-format lock-in and false parity promises |
| [OSF](https://github.com/CenterForOpenScience/osf.io), [Dataverse](https://github.com/IQSS/dataverse), and [OpenReview](https://github.com/openreview/openreview) | Research sharing/deposit, metadata, project governance, and review workflows | Integrate through standards/APIs where valuable; Scient need not become these services |
| [EQUATOR Network](https://www.equator-network.org/) | Authoritative routing to study-type reporting guidance and versioned human-review profiles | Link and track applicability/version; do not copy restricted checklists or certify compliance |
| [JATS](https://jats.nlm.nih.gov/) | Journal-article exchange, publishing packages, structured export, and round-trip fixture | Export/compatibility target, not the canonical manuscript model |
| [Lean](https://lean-lang.org/), [SymPy](https://docs.sympy.org/), and standard software artifact formats | Checked proof, exact-expression, benchmark, trace, and provenance links into mathematics/CS manuscripts | External artifacts and adapters remain distinct from manuscript authority |

### Source Decision Rules

For every candidate, classify the relationship before implementation:

- study only;
- product-pattern adaptation;
- dependency;
- copied/reimplemented component;
- process/service adapter;
- data-format or API compatibility;
- synchronized external service; or
- fork/self-hosted distribution.

Record license, exact version/commit, provenance, notices, update owner,
security/operations cost, replacement path, and Scient product boundary. No
single donor receives authority over document identity, permissions, history,
build receipts, or the scientific object graph.

## Overleaf Relationship Decision Gate

“Take everything valuable from Overleaf” is a capability goal, not an
implementation decision. Before accepting an Overleaf relationship, compare at
least these options against the same fixture and long-term product requirements:

1. **Independent Scient implementation with portable project compatibility.**
   Study Overleaf UX and support import/export without sharing runtime services.
2. **Interoperability adapter.** Explicit user-authorized import, export, or
   synchronization with an Overleaf project where APIs and terms support it.
3. **Selected isolated service or component adaptation.** Reuse only a
   separately evaluated build, history, realtime, or other service behind a
   Scient-owned boundary.
4. **Self-hosted or forked stack.** Accept the full license, operations,
   security, update, migration, and product-model consequences deliberately.
5. **Mixed strategy.** Combine portable compatibility, selected components, and
   Scient-native local-first/document architecture.

The gate must evaluate:

- the exact feature difference among hosted Overleaf, Server Pro, and the
  available Community Edition at a pinned revision;
- license and provenance per repository/component, including AGPL obligations;
- canonical document, history, permission, review, and identity models;
- local-first/offline fit and whether a server is mandatory;
- compilation isolation, package distribution, networking, and tenant safety;
- collaboration latency, recovery, scale, persistence, and operational burden;
- project exchange and fidelity with normal LaTeX repositories;
- accessibility, internationalization, mobile/constrained review, and
  institutional needs;
- migration and replacement cost if the relationship changes; and
- what product advantage remains uniquely Scient rather than a reskinned
  Overleaf deployment.

Default recommendation: begin with the mixed strategy—Scient-owned durable
document/build/history boundaries, portable project compatibility, and focused
adaptation of proven patterns or components. A wholesale fork should win only
if a pinned technical/product/license/operations evaluation demonstrates that
it is superior.

## Collaboration Sequencing

The accepted PRD and active product roadmap make collaboration a foundation,
not a distant add-on. This roadmap therefore separates **early collaboration
architecture** from **later realtime collaboration**:

1. M0 establishes document/build actor attribution, revisions, recovery, and
   future-compatible anchors.
2. M1 establishes identity, permissions, history, comments/suggestions, agent
   proposals, and offline/conflict semantics before representations harden.
3. M2 validates a narrow asynchronous shared-project and review slice after
   local state is reliable.
4. M3 adds realtime editing and presence only after the same objects remain
   correct under disconnect, conflict, revocation, and recovery.

This avoids both extremes: postponing collaboration until the document model is
too rigid, or making a realtime engine the first dependency before local
authoring is trustworthy.

## Platform Implications

### macOS

- GUI environment discovery cannot assume shell startup files or Homebrew-only
  paths.
- MacTeX, BasicTeX, Tectonic, Typst, Quarto, and user-selected binaries need
  explicit identity and version reporting.
- App signing/notarization, quarantine, child-process ownership, font access,
  sandbox behavior, and external-file grants require packaged-app validation.

### Windows

- MiKTeX/TeX Live discovery, drive letters, UNC paths, reserved names, long
  paths, quoting, process-tree cancellation, code pages, and file-lock behavior
  require native tests.
- Installation/package prompts must not hide behind a frozen build, and engine
  updates must remain user-controlled.

### Linux

- Distribution packaging and PATH variance are expected.
- TeX Live/package-manager ownership, fonts/fontconfig, Wayland/X11 viewer
  interactions, container/remote environments, and permissions need coverage.

### All Platforms

- Builds run through an owned coordinator with explicit working directory,
  environment, network/shell-escape policy, cancellation, resource limits, and
  artifact locations.
- The UI reports exact executable, version, recipe, root, output location, and
  meaningful setup/recovery actions.
- Paths and arguments use structured process APIs, not shell-string assembly.
- Build output is size-aware and cannot exhaust the renderer or history store.
- Renderer/process crashes and app restarts preserve source drafts and truthful
  abandoned-build state.
- Hosted or remote builds disclose transferred material, retention, region,
  credentials, cost, and fallback before execution.

## Quality And Fixture Plan

### Typesetting Opener Fixture Pack

Maintain one cross-platform fixture pack containing:

- single-file and multi-file LaTeX projects;
- explicit and ambiguous roots, standalone chapters, nested includes, cycles,
  missing files, spaces, Unicode, symlinks where supported, and external assets;
- BibTeX and BibLaTeX, bibliography/index/glossary recipes, labels/references,
  images, tables, equations, custom classes/packages, and fonts;
- successful, warning, error, cancelled, superseded, crashed, and missing-engine
  builds;
- huge logs, malformed/non-UTF-8 output, no produced PDF, changed output, and
  last-success/staleness scenarios;
- conditional-save conflicts, external edits, truncated/large files, recovery,
  restart, rename/move/delete, and read-only paths;
- `.typ` and `.qmd` peers proving that adapter boundaries are real; and
- packaged macOS, Windows, and Linux execution, not only development mode.

Pass criteria cover opening latency, root truth, save safety, diagnostics,
cancel/process cleanup, output isolation, last-success clarity, recovery, and
portable continuation outside Scient.

### Manuscript Platform Fixture

Before choosing a structured editor or collaboration engine, maintain a rich
scientific manuscript with:

- deep sectioning, equations, tables, figures, footnotes, cross-references,
  custom macros/environments, raw source escape hatches, multilingual and
  bidirectional text, accessibility metadata, and a large bibliography;
- claims/evidence and analysis-linked artifacts;
- comments, suggestions, resolved/orphaned anchors, named versions, comparison,
  restore, human/agent attribution, permission changes, and offline conflict;
- import/export among supported source formats with a machine-readable fidelity
  report; and
- collaboration stress under reconnect, concurrent structural/textual edits,
  revoked access, large documents, and device churn.

The fixture, not a polished demo, decides whether an editor, schema,
collaboration engine, or conversion route is acceptable.

### Domain Manuscript Fixtures

Maintain representative, synthetic or public fixtures for:

- a randomized-trial report, observational study, prediction-model study,
  systematic review/meta-analysis, protocol, and case report, each with an
  applicable versioned reporting profile and at least one intentional
  missing/inapplicable/ambiguous item;
- clinical tables and figures linked to preserved AnalysisRuns, plus
  protocol/registration, ethics, funding, conflicts, author roles, data/code
  availability, and a blinded export;
- a neuroscience or biology manuscript with domain identifiers, a rich
  multi-panel figure, source-data links, pipeline/software versions, and a
  repository accession;
- a chemistry manuscript with structure/spectrum references, units,
  stereochemistry-sensitive identity, and an analysis-linked figure;
- a mathematics manuscript with theorem environments, notation, diagrams, and
  a checked Lean proof artifact; and
- a CS conference manuscript with algorithms, exact repository release,
  build/test/benchmark receipts, evaluation table, trace/profile, artifact
  appendix, and anonymous-review projection.

Tests must distinguish structural validation, missing metadata, stale analysis,
export fidelity, checklist assistance, and claims requiring human judgment.
No passing fixture should imply clinical, regulatory, proof, or venue
certification.

### Publication Fixture

Maintain at least one journal article, conference paper, thesis chapter,
preprint/deposit, supplemental dataset/code package, and reviewer-response
workflow. Validate metadata, assets, citations, figure/table requirements,
accessible outputs, package contents, receipts, and a manual fallback when an
external service is unavailable. Include a JATS round-trip/fidelity report and
preserve unsupported material explicitly.

## What Not To Build First

- Do not create a standalone LaTeX preview with its own file, process, or PDF
  lifecycle.
- Do not block opening/editing on perfect project or root inference.
- Do not bundle or silently install a full TeX distribution before engine
  strategy, update ownership, size, licenses, and platform behavior are decided.
- Do not make hosted compilation mandatory for local files.
- Do not promise lossless visual editing of arbitrary LaTeX without the
  manuscript fixture and explicit unsupported/raw-source behavior.
- Do not use generated PDF/HTML as canonical editable source.
- Do not equate Git history, CRDT history, autosave snapshots, comments, and
  publication versions; define their relationships.
- Do not make realtime collaboration the foundation owner for identity,
  permissions, review, or recovery.
- Do not clone Overleaf's interface or stack wholesale before the relationship
  gate.
- Do not duplicate scientific runs, datasets, figures, tables, or evidence into
  manuscript-private copies.
- Do not republish reporting-guideline checklists without permission or turn
  checklist state into automatic scientific-quality or compliance claims.
- Do not treat JATS, a clinical standard, a theorem prover, or a conference
  template as the canonical manuscript model.
- Do not create dozens of speculative implementation documents before the
  relevant maturity stage becomes active.

## Approval Package

Approval should be separable rather than all-or-nothing.

### A. Product Horizon And Permanent Principles

Approve Manuscript, Typesetting, And Publishing as the owner of the capability
envelope above and approve the permanent invariants, including the dual
file-native/structured-native authority requirement.

### B. First Durable Slice

Approve M0: universal open, first-class source editing, progressive root
resolution, a shared `DocumentBuild` path, source/preview/log UX, diagnostics,
last success, artifacts, and recovery.

### C. Cross-Domain Contract

Approve one shared responsibility boundary with the scientific workbench for
document identity, surface registry, project resolution, execution lifecycle,
diagnostics, artifacts, history, permissions, review, and agent attribution,
while retaining distinct manuscript and analysis semantics.

Approve one profile mechanism for clinical/medical, life-science, mathematics,
and CS requirements over that same manuscript kernel. Profile approval does not
approve any particular reporting checklist, schema, editor, or export target.

### D. Authorized Spikes, Not Dependency Acceptance

Authorize the typesetting opener fixture; installed-engine/Tectonic/TexLab
platform and license evaluation; root/build contract proof; and the manuscript
fidelity fixture. Later editor, collaboration, Overleaf-relationship,
publication, and institutional spikes require their stage to become active.

### E. Explicitly Deferred Capability

Keep structured/visual authoring, broad asynchronous review, realtime
collaboration, publication integrations, institutional administration, and the
integrated scientific-intelligence horizon in the stated maturity order. Do not
treat their inclusion in the capability envelope as a first-release commitment.

## Open Decisions

- first supported local/managed engine set and distribution/update ownership;
- root-resolution precedence, persistence, invalidation, and project config;
- `DocumentBuild` event, receipt, artifact, last-success, and recovery contract;
- file-native versus structured-native authority rules;
- stable semantic/text anchors across source, rich editing, history, and sync;
- source editor and later structured/visual editor winners;
- fidelity/conversion schema and raw-source escape behavior;
- citation/bibliography ownership and reference-manager integrations;
- history, review, permission, offline, and collaboration architecture;
- exact Overleaf relationship, if any;
- template/publication profile model and external submission/deposit boundaries;
- reporting-profile applicability, checklist licensing, update ownership,
  human sign-off, and non-certification UX;
- JATS import/export fidelity and relationship to structured-native documents;
- clinical study, proof artifact, software experiment, and anonymous-review
  link/projection boundaries;
- institution/deployment/data-governance horizon; and
- accessibility, internationalization, and mobile/constrained-review gates.

## Next Planning Handoffs After Approval

Create only the handoffs required for active work:

1. universal typesetting opener architecture and interaction design;
2. shared execution/diagnostic/artifact architecture with a real
   `DocumentBuild` contract fixture coordinated with the computing roadmap;
3. installed LaTeX/Tectonic/Typst/TexLab platform, packaging, license, and
   quality spike;
4. typesetting opener fixture and packaged-app quality plan;
5. early manuscript identity/anchor/history/permission requirements routed to
   the existing cross-cutting architecture owners; and
6. domain manuscript fixtures and a reporting-profile/JATS exchange spike
   aligned to the Scientific Domain Workflows Roadmap.

Create structured editor, collaboration engine, Overleaf relationship,
publication, and institutional decision documents only when their stage becomes
active.

## Roadmap Completion Criteria

This proposal is ready for an approval decision when reviewers agree that it:

- keeps the first universal typesetting opener as permanent infrastructure;
- defines the long-term Overleaf-class capability envelope without silently
  choosing a fork or dependency;
- supports both portable file-native and future structured-native authority;
- shares the right foundation with scientific computing without merging domain
  semantics;
- supports clinical/medical, life-science, mathematics, and CS profiles without
  creating separate editors or false compliance claims;
- designs collaboration foundations early and realtime behavior later;
- has a coherent M0 stopping point and a dependency-ordered maturity path;
- validates engines, editors, conversions, collaboration, and publication with
  adversarial scientific fixtures;
- covers macOS, Windows, Linux, recovery, accessibility, and international use;
- preserves current Markdown, diff, terminal, PDF, HTML, image, SVG, and
  universal-viewer behavior; and
- leaves hard architecture, dependency, license, and service choices explicit.

It should remain Proposed until the owner accepts its decision package. Detail
alone does not make it Active or accepted architecture.
