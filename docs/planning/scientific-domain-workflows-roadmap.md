# Scientific Domain Workflows Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-07-26
Last updated: 2026-07-26
Purpose: Proposes how Scient should validate and extend its shared scientific-computing, document, viewer, manuscript, provenance, and collaboration foundations for neuroscience, biology, clinical and medical research, chemistry, mathematics, and computer science without fragmenting into separate products.
Doc type: Planning note

## Document Rules

This roadmap owns the proposed cross-domain capability boundary, domain
validation overlay, first complete slice for each named field, source strategy,
and activation gates. It does not own the active product sequence, accepted
architecture, current implementation, complete source inventory, or the
discipline-neutral computing and manuscript foundations.

The accepted product contract lives in the [PRD](../product/PRD.md). Current
product sequencing lives in the [Product Roadmap](product-roadmap.md). The
shared workbench is proposed in the
[Scientific Computing And Data Analysis Roadmap](scientific-computing-and-data-analysis-roadmap.md).
Authoring and publication depth live in the
[Manuscript, Typesetting, And Publishing Roadmap](manuscript-typesetting-and-publishing-roadmap.md).
Detailed source evidence belongs in the
[Open-Source Adaptation Map](../research/source-evaluations/open-source-adaptation-map.md),
and selected rich-project fixtures live in
[Scientific Project Fixture Selection](../research/source-evaluations/scientific-project-fixture-selection.md).

Names in this document describe proposed responsibilities and compatibility
targets, not accepted schemas, packages, engines, viewers, dependencies, or
implementation locations. A source listed here is a candidate to study,
prototype, embed, or adapt after its exact license, version, update path,
platform behavior, and replacement boundary are reviewed.

### Update Policy

Update this document when a domain's first complete slice, validation fixture,
source relationship, activation gate, or shared-foundation requirement changes.
Promote durable architecture into focused architecture documents or ADRs.
Keep detailed source investigations in research evidence rather than turning
this plan into an unmaintainable source catalog.

## Decision Summary

Scient should not choose between a generic computing product and serious
domain support. It should build one discipline-neutral scientific foundation
and continuously prove that foundation against real domain workflows.

Six lanes are first-class:

1. neuroscience;
2. biology, bioinformatics, and bioimaging;
3. clinical and medical research;
4. chemistry;
5. mathematics and formal methods; and
6. computer science and software experiments.

Neuroscience, biology, and clinical research should enter validation earlier
because they represent current users and already-selected product projects.
That is an evidence and sequencing choice, not a claim that mathematics,
computer science, or chemistry matter less. Mathematics and CS receive
concrete early fixtures and permanent requirements now so the foundation
cannot harden around only tabular life-science workflows.

The implementation strategy should be a mix:

- Scient owns project identity, documents, datasets, studies, analyses, runs,
  artifacts, provenance, review, permissions, history, and the unified UX.
- Mature domain standards remain compatibility targets rather than being
  translated into one invented universal schema.
- Permissive browser-native viewers and local engines may be embedded behind
  the Surface Registry and adapter contracts after focused evaluation.
- Full external applications, pipelines, repositories, ELNs, clinical
  platforms, IDEs, and theorem-proving environments remain external
  continuations or adapters until a complete Scient slice proves deeper value.
- Domain transformations are explicit runs that produce new artifacts; merely
  opening a valid file must stay fast, smooth, and useful.

Domain support is an overlay across the computing and manuscript stages, not a
single final stage after generic work is supposedly complete.

This is a proposed direction, not accepted product truth or architecture.

## Why A Domain Overlay Is Necessary

Generic file, editor, execution, artifact, and manuscript contracts are
necessary but insufficient. Real scientific projects expose requirements that
small CSV and script examples do not:

- hierarchical collections such as participants, samples, sites, sessions,
  runs, assays, channels, conditions, timepoints, cohorts, and versions;
- units, coordinate/reference systems, controlled vocabularies, ontologies,
  and standard versions;
- very large, n-dimensional, chunked, compressed, indexed, or remote-backed
  data that cannot be loaded eagerly;
- domain-specific quality control, missingness, censoring, batching,
  calibration, validation, and uncertainty;
- multi-step pipelines that resume, fan out, run remotely, or depend on
  containers and schedulers;
- restricted or identifiable data whose location, exportability, and review
  state are part of correct workflow behavior;
- specialized viewers whose state must remain linked to files, runs, figures,
  and manuscripts; and
- publication conventions that differ substantially across clinical trials,
  observational studies, mathematical proofs, and systems papers.

Conversely, building a separate domain product for each field would duplicate
file access, execution, artifacts, history, review, collaboration, and agent
behavior. The right boundary is shared infrastructure with typed domain
adapters and semantic profiles.

## Permanent Cross-Domain Requirements

The shared foundation should preserve these requirements from its first
implementation:

1. **Collections are not flattened into files.** A project may expose typed,
   hierarchical relationships while original files remain portable.
2. **Original data is read-only by default.** Cleaning, conversion,
   de-identification, resampling, normalization, and annotation produce
   explicit derived data or reviewable changes.
3. **Units and reference systems are first-class metadata.** A value without
   its unit, coordinate frame, sampling basis, vocabulary, or standard version
   is not silently treated as complete.
4. **Large data is progressively inspected.** Metadata, indexes, sampling,
   paging, tiles, chunks, regions, and server ranges precede full loading.
5. **Standards are compatibility contracts, not Scient's core model.** BIDS,
   NWB, AnnData, OMOP, FHIR, CDISC, DICOM, JATS, chemical formats, notebook
   formats, and proof artifacts remain identifiable and round-trippable.
6. **Domain viewers are replaceable surfaces.** Their camera, selection,
   annotation, layer, track, molecule, spectrum, trace, or proof-state
   projections never become the only project truth.
7. **Pipelines preserve the same run truth.** A local script, notebook,
   workflow engine, container, remote job, or scheduler task shares lifecycle,
   diagnostics, receipts, artifacts, cancellation, recovery, and provenance
   vocabulary while retaining its specialized semantics.
8. **Restricted data stays explicitly located.** Scient records location,
   access scope, de-identification or pseudonymization state, permitted
   exports, and audit-relevant actions without copying patient identifiers or
   sensitive records into generic agent context.
9. **Domain metadata is attributable and versioned.** Imported, inferred,
   user-entered, agent-proposed, and standard-derived assertions remain
   distinguishable.
10. **Manual and agent workflows remain equivalent.** Researchers can inspect,
    correct, run, stop, review, and export without granting an agent broader
    authority.
11. **Opening is never held hostage by domain depth.** A recognized file gets a
    useful metadata/raw/external surface while optional validation, indexing,
    conversion, or rich-viewer setup proceeds or fails.
12. **Domain failures are polished product states.** Missing codecs, packages,
    runtimes, licenses, standards metadata, credentials, indexes, or network
    access produce specific recovery actions, never blank panels.

## Domain Validation Overlay

The active Product Roadmap remains the sequence authority. This overlay says
which domain evidence should accompany the shared computing and manuscript
stages.

| Overlay gate | Shared-stage dependency | Required domain proof |
|---|---|---|
| D0 — Recognize and continue | Computing Stages 0–1 and manuscript M0 | Representative domain source, metadata, structured, binary, image, and archive files classify correctly; each opens to source, metadata, bounded preview, or a useful external continuation. |
| D1 — Execute and preserve | Computing Stages 2–5 | Bounded workflows produce truthful run receipts and artifacts in Python, R, MATLAB where available, one symbolic-math case, and one CS build/test/benchmark case. |
| D2 — Inspect and connect | Computing Stages 6–8 and manuscript M1–M2 | Typed data/viewer prototypes preserve original-file identity, large-data behavior, domain metadata, figure/table provenance, and links into a domain-appropriate manuscript. |
| D3 — Reproduce and interoperate | Computing Stages 9–10 and manuscript M3–M4 | Selected pipelines, remote/HPC runs, repository exchange, publication packages, and restricted-data boundaries work without replacing the Scient project record. |

The initial fixture portfolio should include:

- OpenNeuro Flanker for BIDS ingestion and a behavioral result;
- the selected clinical phenotyping and Cancer Biology projects;
- BCG meta-analysis for an R-backed medical-statistics and forest-plot path;
- a small single-cell or genomics collection with deterministic metadata;
- a small molecule plus macromolecular structure and later a spectrum;
- a symbolic derivation plus a checked Lean theorem;
- a multi-language CS repository with build, tests, benchmark, trace, and exact
  revision;
- NARPS, CORE-Bench, and BixBench only after their lighter precursors pass.

## Prioritization Rules

Use these rules when choosing the next domain increment:

1. Prefer a complete researcher loop over the number of recognized formats.
2. Prioritize requirements shared by several fields: collections, units,
   n-dimensional data, provenance, pipelines, viewers, and publication links.
3. Use current-user demand and the active rich-project sequence to order
   validation, not to erase other domains from architecture.
4. Prefer an adapter or embedded permissive component when it gives a polished
   complete slice without owning Scient's domain model.
5. Require a small deterministic fixture before a large flagship project.
6. Keep restricted-data, licensing, and standard-version behavior visible in
   product UX rather than treating them as hidden implementation concerns.
7. Do not activate a full platform category—ELN, LIMS, EHR, clinical decision
   support, bioinformatics portal, CAS, theorem-proving IDE, CI system, or
   MLOps suite—when a focused adapter proves the required workflow.

## Lane 1 — Neuroscience

### Researcher Workflows

Neuroscience users need more than an fMRI viewer. The lane must cover:

- behavioral and cognitive tabular experiments;
- BIDS project structure, participants, sessions, tasks, runs, events,
  sidecars, derivatives, and validator results;
- volumetric and surface neuroimaging with orientation, coordinate, contrast,
  overlay, and provenance truth;
- EEG, MEG, iEEG, NIRS, epochs, channels, montages, events, sampling, artifacts,
  and preprocessing;
- neurophysiology and behavior collections in NWB, including DANDI workflows;
- Python, R, and MATLAB continuation because MNE, EEGLAB, FieldTrip, SPM, and
  lab-specific code coexist; and
- pipeline/HPC execution, QC, derivatives, large files, and repository
  preparation.

### First Complete Slice

1. Recognize BIDS directories and common NIfTI, JSON, TSV, EEG/MEG, and NWB
   files without claiming full support.
2. Show the BIDS relationship tree, essential metadata, official validation
   result, and clear raw/external fallbacks.
3. Reproduce the pinned OpenNeuro Flanker behavioral result through a normal
   AnalysisRun.
4. Prototype a NiiVue-based NIfTI surface with orientation and source identity,
   and a Neurosift/PyNWB-style read-only NWB inspection route.
5. Preserve selected image/layer/channel/time-range state as a projection that
   can link to a figure or comment.
6. Validate R and MATLAB parity with a small neuroscience-relevant analysis,
   not only a generic arithmetic script.

### Later Expansion

Add MNE/MNE-BIDS workflows, EEG/MEG/iEEG viewers, CIFTI/GIFTI, DANDI
import/deposit, dataset-level QC, pipeline provenance, Slurm/container adapters,
and eventually DICOM/microscopy connections where a real project requires
them. NARPS remains the flagship analytic-flexibility validation after the
lighter BIDS path succeeds.

### Sources To Learn From

| Source | Candidate use | Boundary |
|---|---|---|
| [BIDS](https://bids-specification.readthedocs.io/) and [BIDS Validator](https://github.com/bids-standard/bids-validator) | Compatibility, validation, project relationships | BIDS does not become the universal Scient project model |
| [OpenNeuro](https://docs.openneuro.org/) | BIDS UX, validation, DataLad/Git-aware transfer, repository preparation | External repository adapter; do not make remote state canonical |
| [MNE](https://mne.tools/) and [MNE-BIDS](https://mne.tools/mne-bids/stable/) | Python EEG/MEG/iEEG/NIRS processing and BIDS workflows | Runtime adapter/reference, not a separate MNE workbench |
| [NWB](https://nwb.org/), [PyNWB](https://github.com/NeurodataWithoutBorders/pynwb), [MatNWB](https://github.com/NeurodataWithoutBorders/matnwb), and [DANDI](https://www.dandiarchive.org/) | Neurophysiology standard, Python/MATLAB access, archive interoperability | Preserve NWB identity and extensions; do not flatten into generic tables |
| [NiiVue](https://niivue.com/) | Browser-native NIfTI and neuroimaging viewer prototype | Replaceable Surface Registry provider |
| [Neurosift](https://github.com/flatironinstitute/neurosift) | Browser NWB/DANDI visualization and large remote-data patterns | Study or embed selected behavior only after focused dependency review |

### Not First

Do not build a full neuroimaging processing suite, duplicate SPM/FSL/MNE, or
promise lossless visualization for every modality before BIDS metadata,
behavioral analysis, large-data handling, and viewer-state provenance pass.

## Lane 2 — Biology, Bioinformatics, And Bioimaging

### Researcher Workflows

Biology needs a coherent path from samples and assays to pipelines, statistical
analysis, images, figures, and manuscripts:

- samples, specimens, organisms, conditions, batches, replicates, timepoints,
  assays, features, observations, and controlled terms;
- FASTA/FASTQ, BAM/CRAM, VCF/BCF, BED, GFF/GTF, count matrices, and reference
  assemblies;
- single-cell and spatial data with AnnData, R/Bioconductor, and equivalent
  portable formats;
- workflow execution through scripts and later Snakemake, Nextflow/nf-core, or
  Galaxy compatibility;
- multidimensional microscopy, OME metadata, OME-TIFF/OME-Zarr, annotations,
  segmentation, measurement, and derived figures; and
- genomics, bioimage, and statistical outputs connected to the sample,
  pipeline, run, and manuscript that produced them.

### First Complete Slice

1. Make sample sheets, assay metadata, FASTA, BED/GFF, and small count matrices
   open usefully through source/table/metadata surfaces.
2. Add bounded metadata and index inspection for BAM/CRAM and VCF without
   pretending to load whole files.
3. Prove one R/Bioconductor analysis path and the selected Cancer Biology
   replication beside the Python proof.
4. Prototype an IGV.js genomic-locus surface using local files and a small
   indexed fixture.
5. Inspect an AnnData file lazily, preserving observation, variable, layer,
   embedding, and provenance relationships.
6. Prototype an OME-Zarr image surface or external napari continuation with
   explicit scale, channel, region, and annotation state.

### Later Expansion

Add Nextflow/nf-core and Snakemake adapters, Galaxy interoperability, reference
data identity, container/HPC execution, richer single-cell/spatial exploration,
bioimage annotation and quantitative pipelines, repository deposits, and BixBench
only after smaller biological workflows pass.

### Sources To Learn From

| Source | Candidate use | Boundary |
|---|---|---|
| [Bioconductor](https://www.bioconductor.org/) | R-native reproducible biological analysis and data conventions | Runtime/package compatibility, not a separate product shell |
| [AnnData](https://anndata.readthedocs.io/) and [Scanpy](https://scanpy.readthedocs.io/) | Single-cell/spatial data relationships and backed access | Preserve format/version; do not make AnnData the universal dataset model |
| [IGV.js](https://igv.org/doc/igvjs/) | Embeddable browser-native genome viewer with local-file support | Replaceable viewer projection; validate index and range behavior |
| [Nextflow](https://nextflow.io/), [nf-core](https://nf-co.re/), [Snakemake](https://snakemake.readthedocs.io/), and [Galaxy](https://galaxyproject.org/) | Pipeline portability, reuse, provenance, HPC/cloud, and accessible workflow UX | Adapter/reference set; none owns Scient's run or project record |
| [napari](https://napari.org/), [OME-Zarr](https://ngff.openmicroscopy.org/), [Viv](https://github.com/hms-dbmi/viv), [Fiji](https://imagej.net/software/fiji/), [CellProfiler](https://cellprofiler.org/), and [QuPath](https://qupath.github.io/) | Multidimensional image viewing, layers, annotations, pathology, and image-analysis expectations | Start with viewing/continuation and provenance, not a new bioimage suite |

### Not First

Do not build a complete bioinformatics portal, workflow language, reference
genome service, lab inventory, or microscopy-analysis suite before sample,
metadata, indexed-file, R/Python run, and viewer-provenance fundamentals work.

## Lane 3 — Clinical And Medical Research

### Researcher Workflows

Scient should explicitly distinguish:

- interventional trials;
- observational and real-world-data studies;
- diagnostic and prognostic model studies;
- systematic reviews and meta-analyses; and
- research using medical imaging.

The project must be able to connect protocol version and registration; study
design; sites; cohort and eligibility; arms or exposure/comparator; outcomes
and endpoint definitions; analysis populations; timepoints; randomization and
blinding where relevant; source, derived, and analysis datasets; statistical
analysis plan; deviations; missingness; censoring; harms; sensitivity and
subgroup analyses; and the final report.

### First Complete Slice

1. Use the selected synthetic clinical phenotyping project to prove cohort
   definition, outcome definition, conventional inference, prediction,
   calibration/discrimination, sensitivity analysis, and rejection of an
   overstated clinical conclusion.
2. Run the pinned BCG meta-analysis in R to produce effect estimates,
   heterogeneity, and a forest plot connected to methods and manuscript.
3. Represent a cohort or phenotype definition as a versioned artifact with
   vocabulary and observation-window metadata, not merely an informal query.
4. Prototype metadata-only import/inspection for FHIR, OMOP, CDISC study
   exchange, and DICOM without copying restricted records into generic app or
   agent state.
5. Prototype an OHIF/Cornerstone DICOM surface using a de-identified local
   fixture and explicit DICOMweb/local authority.
6. Add study-type reporting profiles and clinical manuscript fixtures in the
   manuscript roadmap.

### Standards And Data Boundaries

| Standard or source | Candidate use | Boundary |
|---|---|---|
| [HL7 FHIR](https://hl7.org/fhir/overview.html) | Healthcare-data exchange and resource identity | Exchange adapter, not the internal study or EHR model |
| [OMOP Common Data Model](https://ohdsi.github.io/CommonDataModel/) | Observational analytics compatibility and vocabulary-aware cohort data | Database adapter; do not copy clinical warehouses into project files |
| [OHDSI HADES](https://ohdsi.github.io/Hades/), ATLAS, CohortDiagnostics, and DataQualityDashboard | Cohort definition, diagnostics, observational methods, and R workflows | Adapt workflows through versioned artifacts/runs; do not fork the platform first |
| [CDISC](https://www.cdisc.org/standards) ODM, SDTM, ADaM, and Define-XML | Study-data exchange, analysis datasets, metadata, and later submission compatibility | Compatibility/export targets; no claim of regulatory conformance without focused validation |
| [DICOM](https://www.dicomstandard.org/) and DICOMweb | Medical-image and metadata interoperability | Preserve original identity and de-identification state |
| [OHIF](https://docs.ohif.org/) and [Cornerstone3D](https://www.cornerstonejs.org/) | Browser-native DICOM viewer architecture and tools | Replaceable viewer; no clinical-diagnostic-use claim |
| SNOMED CT, LOINC, RxNorm, and ICD families | Versioned terminology identity and mappings | Respect license, region, release, and user authority; do not silently bundle or normalize |

### Restricted-Data Product Requirements

Restricted-data behavior is part of a smooth clinical workflow:

- display whether data is project-owned, external, institutional, remote, or
  restricted and which actions are available;
- record de-identification or pseudonymization assertions, their actor and
  method, without asserting safety Scient has not established;
- prevent accidental inclusion of identifiers in generic agent context,
  exports, logs, screenshots, or generated examples;
- make permitted aggregate outputs, review requirements, and manual
  continuations obvious;
- preserve audit-relevant import, query, transformation, access, and export
  receipts; and
- degrade to metadata, synthetic fixtures, or an approved external tool rather
  than a blank or unusable viewer.

### Later Expansion

Add approved institutional connectors, richer OMOP cohort workflows, study
data standards, DICOMweb repositories, multicenter provenance, federated or
remote analysis where justified, systematic-review workflows, trial result
packaging, and JATS/registry/repository interoperability.

### Not First

Do not build an EHR, clinical decision-support device, patient-care workflow,
full electronic data-capture system, regulatory submission system, or automatic
reporting-guideline certification. The first product supports research and
traceable human review.

## Lane 4 — Chemistry

### Researcher Workflows

Chemistry requires identity and representation fidelity before broad
computation:

- SMILES/SMARTS, InChI, MOL/SDF, RXN, CML, PDB/mmCIF, XYZ, and common
  computational outputs;
- atoms, bonds, charges, stereochemistry, conformers, reactions, compounds,
  samples, quantities, units, concentrations, conditions, and provenance;
- 2D structure drawing, 3D molecular viewing, spectra and chromatograms, and
  reaction/analysis outputs; and
- scripts, notebooks, instruments, ELN/repository continuation, figures, and
  manuscripts linked to the relevant chemical identity and source file.

### First Complete Slice

1. Classify and safely show raw/metadata views for SMILES, MOL/SDF, PDB/mmCIF,
   and XYZ fixtures, including multi-molecule and malformed cases.
2. Use RDKit behind an analysis adapter for parsing, identity, basic
   descriptors, 2D depiction, and explicit errors.
3. Prototype Ketcher for 2D structure editing with round-trip and
   stereochemistry fixtures.
4. Prototype Mol* for macromolecular or large 3D structures; keep 3Dmol.js as a
   challenger.
5. Preserve selected molecule, representation, camera, and annotation state as
   viewer projection linked to the original structure and produced figure.
6. Add NMRium later in the same surface contract for a small 1D/2D spectrum
   fixture; do not make spectra a prerequisite for the initial structure slice.

### Sources To Learn From

| Source | Candidate use | Boundary |
|---|---|---|
| [RDKit](https://www.rdkit.org/) | Permissive chemistry engine for parsing, descriptors, depiction, and analysis | Embedded engine; retain input/output identity and version |
| [Ketcher](https://github.com/epam/ketcher) | Embeddable 2D molecule/reaction editor | Projection with round-trip fixtures; no Ketcher data-model authority |
| [Mol*](https://molstar.org/) and [3Dmol.js](https://3dmol.csb.pitt.edu/) | Web-native 3D molecular/macromolecular visualization | Prototype both against large structures and Electron constraints |
| [NMRium](https://docs.nmrium.org/) | React-based 1D/2D NMR viewing and processing | Later spectrum surface behind explicit format/provenance handling |
| [Open Babel](https://openbabel.org/docs/) | Broad chemical format conversion | GPL process/dependency boundary requires focused review; conversion is an explicit run |
| [Chemotion ELN](https://chemotion.net/) | Chemistry ELN, samples, reactions, spectra, repository and instrument workflow reference | AGPL/reference or adapter only; do not fork into the core |

### Not First

Do not build a full ELN, inventory, instrument-control system, reaction
database, quantum-chemistry platform, or universal chemical converter before
structure identity, units, viewing/editing fidelity, and artifact provenance
pass.

## Lane 5 — Mathematics And Formal Methods

### Researcher Workflows

Mathematics is both computational and formal:

- exact and symbolic algebra, calculus, number theory, discrete mathematics,
  optimization, simulation, and visualization;
- notebooks and scripts whose exact expressions remain distinct from
  approximate numeric output and rendered notation;
- theorem, definition, lemma, proof, notation, dependency, citation, and
  checked proof artifacts;
- proof-state diagnostics, goals, source locations, compiler versions, and
  library dependencies; and
- publication-quality equations, theorem environments, diagrams, references,
  and arXiv/journal packages.

### First Complete Slice

1. Run a deterministic SymPy derivation that records exact expression,
   assumptions, simplified result, numeric check, plot, and environment receipt.
2. Keep SageMath as a Jupyter-kernel/CLI compatibility candidate when a project
   needs its broader system; do not make a full Sage distribution the first
   foundation.
3. Add Lean 4 plus mathlib as the first formal-proof adapter proof: edit a small
   theorem, show diagnostics/goals, check it, and preserve a proof receipt
   linked to exact source, Lean/mathlib versions, and manuscript statement.
4. Support theorem/lemma/definition/proof structure, equation numbering,
   notation/glossary, and commutative or generated diagrams in the manuscript
   fixture.
5. Ensure arbitrary mathematical source and LaTeX remain manually editable
   even when CAS or proof tools are unavailable.

### Sources To Learn From

| Source | Candidate use | Boundary |
|---|---|---|
| [SymPy](https://docs.sympy.org/) | Exact symbolic computation in the initial Python runtime | Engine output is an artifact, not semantic truth without assumptions and version |
| [SageMath](https://www.sagemath.org/) | Broad mathematical software and Jupyter compatibility | Optional external/runtime adapter; complex GPL distribution is not a first bundled dependency |
| [Lean 4](https://lean-lang.org/) and [mathlib](https://leanprover-community.github.io/) | Formal proof, goals, diagnostics, checked artifacts, reusable mathematical library | First proof adapter candidate; no universal proof schema |
| Coq and Isabelle | Later formal-method compatibility and architecture challengers | External adapters only when a project requires them |
| LaTeX, Typst, TikZ, MathJax, and accessible math standards | Authoring, rendering, diagrams, and publication | Rendering is a projection; source and semantic links stay explicit |

### Not First

Do not build a new computer-algebra system, universal theorem representation,
proof assistant, or mathematical knowledge base. Prove replaceable runtime and
proof adapters plus excellent authoring and artifact links.

## Lane 6 — Computer Science And Software Experiments

### Researcher Workflows

Computer science research needs more than source editing:

- multi-language repositories, build systems, dependencies, containers, tests,
  benchmarks, datasets, models, generated artifacts, and exact revisions;
- reproducible experiments across machines, compilers, accelerators, seeds,
  configurations, and workloads;
- logs, structured metrics, traces, profiles, flame graphs, test failures, and
  regression comparisons;
- ML experiments with dataset/model/code identity and evaluation provenance;
- formal verification shared with the mathematics lane; and
- algorithms, pseudocode, code listings, evaluation tables, artifact
  appendices, conference templates, double-blind review, releases, and badges.

### First Complete Slice

1. Open a small multi-language repository and resolve its standard manifests
   without making one IDE or build system canonical.
2. Run build, unit tests, and a deterministic benchmark through the shared
   coordinator; preserve toolchain, commit, configuration, dataset, seed,
   machine, result, and comparison receipts.
3. Ingest a standard trace or profile and prototype a Perfetto or speedscope
   viewing continuation connected to the producing run.
4. Produce a conference-style manuscript containing algorithm/pseudocode,
   source links, exact release/commit, evaluation table, artifact appendix, and
   blinded projection.
5. Reuse the Lean proof adapter for one verified program/property case.

### Sources To Learn From

| Source | Candidate use | Boundary |
|---|---|---|
| Standard language servers, debug adapters, build/test tools, Git, and CI APIs | Navigation, diagnostics, execution, test and review interoperability | Adapter layer; Scient does not become a general IDE or CI service |
| [Perfetto](https://perfetto.dev/docs/) and [speedscope](https://www.speedscope.app/) | Browser-local trace/profile inspection and comparison patterns | Replaceable artifact viewers; preserve raw trace and run identity |
| [DVC](https://dvc.org/) and [MLflow](https://mlflow.org/) | Data/model/experiment versioning and interoperability | Later adapters; neither owns the canonical Scient project |
| OCI containers, devcontainers, Nix, and HPC schedulers | Reproducible/remote environment compatibility | Opt-in environment adapters after ordinary local runs work |
| Lean and other formal systems | Program verification and checked artifacts | Shared formal-method adapter, not a separate silo |

### Not First

Do not rebuild VS Code, GitHub, a CI fleet, container platform, MLOps suite, or
benchmark marketplace. Scient's differentiator is connecting software
experiments, evidence, artifacts, review, and manuscripts with scientific
provenance.

## Domain-Aware Manuscript Requirements

The manuscript roadmap owns implementation depth. This companion establishes
the minimum semantic profiles it must be able to express.

### Clinical And Medical Reports

A report profile should identify study type and guideline version, then support
the applicable structure and evidence:

- protocol/registration linkage, design, setting, participants, eligibility,
  cohort/arms, intervention/exposure/comparator, outcomes, timepoints, analysis
  populations, methods, deviations, missing data, harms, and limitations;
- participant or study flow; baseline characteristics; effect estimates with
  uncertainty; subgroup and sensitivity analyses; adverse-event tables where
  relevant; forest, Kaplan-Meier, ROC, and calibration figures where relevant;
- ethics, consent, registration, funding, conflicts, author roles, and
  data/code availability metadata; and
- blinded/double-blind projections and checks that do not mutate the canonical
  manuscript.

Use the [EQUATOR Network](https://www.equator-network.org/) to select
versioned, human-reviewed profiles such as CONSORT, STROBE, PRISMA, SPIRIT,
STARD, TRIPOD, CARE, ARRIVE, and RECORD where applicable. Scient must not
republish copyrighted checklists without permission or convert checklist
completion into an automatic scientific-quality or compliance claim.

Use [JATS](https://jats.nlm.nih.gov/) as an important article-exchange and
publishing target, not as Scient's canonical manuscript model.

### Biology, Neuroscience, And Chemistry

Support sample/organism/cohort definitions, methods and protocols, instrument
or pipeline versions, domain identifiers, units, accession/deposit identifiers,
rich figures, figure panels, source-data links, supplements, and domain-specific
data/code availability. Generated tables and figures retain AnalysisRun
lineage and staleness.

### Mathematics

Support theorem/lemma/definition/proof environments, exact equations, numbering,
notation/glossary, citations, diagrams, proof-source links, and checked-artifact
status without conflating rendered math with a verified proof.

### Computer Science

Support algorithms/pseudocode, code listings, exact commits/releases,
environments, datasets/models, evaluation tables, benchmark uncertainty,
artifact appendices, conference templates, anonymous-review projections, and
later artifact-evaluation metadata.

## Platform And Scale Implications

### Desktop And Browser Surfaces

- WebGL/WebGPU, canvas, workers, SharedArrayBuffer requirements, local file
  handles, range requests, content security policy, and Electron isolation must
  be evaluated per viewer.
- Embedded components must have explicit local-asset, network, cache, and
  navigation behavior; unsupported interactivity should degrade to clear
  controls rather than a blank surface.
- Viewer crashes or GPU failures must not close the document or lose the raw
  metadata/external continuation.
- Large viewers should be code-split and loaded on demand so ordinary source
  and document opening does not regress.

### Data And Compute

- Indexed and chunked formats require bounded reads, cancellation, memory
  budgets, worker/process isolation, and remote-range support.
- Workflow engines and HPC jobs need queued/running/reconnecting/lost truth,
  confirmed cancellation, resumable transfer, and local/remote artifact
  authority.
- Proprietary runtimes and licensed vocabularies remain user- or
  institution-owned and produce setup/capability states when unavailable.
- Platform fixtures must cover macOS, Windows, Linux, WSL, network drives,
  external storage, containers, and representative remote/HPC paths.

## Source And License Gate

The 2026-07-26 repository scan found credible permissive candidates including
BIDS Validator and OpenNeuro (MIT), MNE/MNE-BIDS (BSD-3-Clause), NiiVue
(BSD-2-Clause), MatNWB (BSD-2-Clause), DANDI CLI (Apache-2.0), Neurosift
(Apache-2.0), IGV.js (MIT), AnnData/Scanpy/napari (BSD-3-Clause), Nextflow
(Apache-2.0), nf-core and Snakemake (MIT), Viv (MIT), OHDSI HADES/ATLAS/WebAPI
(Apache-2.0), OHIF/Cornerstone3D (MIT), Lean/mathlib (Apache-2.0), Julia/Pluto
(MIT), Perfetto (Apache-2.0), speedscope (MIT), RDKit (BSD-3-Clause), Ketcher
(Apache-2.0), Mol* (MIT), and NMRium (MIT).

That scan is triage, not dependency approval. Before implementation:

1. pin the exact repository and revision;
2. inspect the actual license and bundled/transitive assets;
3. classify study, dependency, embedded component, process adapter, fork, or
   compatibility relationship;
4. measure bundle, startup, GPU, memory, offline, CSP, accessibility, and
   platform behavior;
5. define upstream update ownership and a replacement path; and
6. record required notices and security/operations implications.

GPL or AGPL sources such as Sage's distribution, Open Babel, and Chemotion
require a focused process/service/fork boundary review. Source-available or
commercial references may shape product expectations but provide no automatic
code-reuse right.

## What Not To Build First

- Do not create six standalone domain apps or duplicate the workbench.
- Do not make one field's file format the Scient project schema.
- Do not equate recognizing an extension with supporting a researcher workflow.
- Do not load large binary or multidimensional data eagerly.
- Do not silently convert or overwrite original scientific data.
- Do not let a viewer's internal state become the only record of a selection,
  annotation, or figure.
- Do not bundle every runtime, pipeline, standard, vocabulary, or database.
- Do not claim clinical, regulatory, diagnostic, reporting-guideline, or proof
  correctness that the product has not established.
- Do not postpone mathematics and computer science until every life-science
  feature is finished.
- Do not activate flagship projects before deterministic precursor fixtures.

## Approval Package

Approval should be separable.

### A. Permanent Cross-Domain Foundation

Approve the shared requirements for collections, units/reference systems,
large-data access, standards identity, replaceable viewers, pipelines,
restricted locations, versioned metadata, polished failure states, and
human/agent parity.

### B. Domain Validation Overlay

Approve D0–D3 as validation obligations attached to the shared computing and
manuscript stages. This does not change the Product Roadmap's sequencing
authority.

### C. First Domain Slices

Approve planning and fixture work for:

- BIDS/OpenNeuro behavioral analysis and bounded NIfTI/NWB inspection;
- biological sample/genomics/single-cell inspection plus one R/Bioconductor
  path and the selected Cancer Biology project;
- synthetic clinical phenotyping, BCG meta-analysis, cohort artifact,
  de-identified DICOM viewing, and medical manuscript profiles;
- chemistry structure file viewing with RDKit plus Ketcher/Mol* prototypes;
- one SymPy derivation and one Lean theorem;
- one multi-language CS build/test/benchmark/trace/manuscript loop.

### D. Authorized Source Spikes, Not Dependency Acceptance

Authorize focused fixture-based evaluations of NiiVue, Neurosift/PyNWB,
IGV.js, AnnData, OME-Zarr/Viv, OHIF/Cornerstone, RDKit/Ketcher/Mol*,
SymPy/Sage/Lean, and Perfetto/speedscope. Each winner still requires its own
license, packaging, platform, accessibility, update, and architecture decision.

### E. Explicitly Deferred Breadth

Keep full pipeline portals, heavy image processing, ELN/LIMS depth, clinical
platforms, regulatory submission, broad terminology services, instrument
control, universal CAS/proof support, CI/MLOps platforms, and flagship
benchmarks behind the stated gates.

## Open Decisions

- exact typed-collection and domain-metadata relationship to the proposed
  Dataset and Artifact objects;
- whether a multi-step workflow is a specialized run, a graph of AnalysisRuns,
  or another typed record over the shared lifecycle;
- viewer state and annotation persistence without donor lock-in;
- local, remote-range, cache, and data-location authority for large files;
- restricted-data labels, agent-context policy, review, audit, and export
  boundaries;
- first accepted standards and version-support promises in each domain;
- exact viewer/engine winners after fixture-based prototypes;
- terminology licensing and institution-owned vocabulary connections;
- medical reporting-profile ownership, licensing, updates, and human sign-off;
- structured manuscript relationship to domain study/proof/software objects;
- source-map rows that graduate from candidate to evaluated; and
- which domain increment the active Product Roadmap schedules after each gate.

## Next Planning Handoffs After Approval

Create only the handoffs needed by the active sequence:

1. shared typed-collection, metadata, units, large-data, and viewer-state
   requirements for the existing foundation architecture work;
2. D0 domain file/metadata fixture pack;
3. neuroscience/BIDS and biological/clinical deterministic fixtures aligned to
   the already-selected rich projects;
4. medical manuscript reporting-profile and JATS exchange spike;
5. bounded chemistry, mathematics, and CS proof fixtures; and
6. focused component evaluations only when their fixture and owning stage are
   active.

## Roadmap Completion Criteria

This proposal is ready for an approval decision when reviewers agree that it:

- keeps one Scient scientific product while making all six lanes first-class;
- gives current life-science users earlier complete proofs without making math
  or CS architecturally secondary;
- connects domain requirements to the existing computing and manuscript
  foundations;
- defines a useful, bounded first slice and a clear non-goal for every lane;
- covers clinical study workflows and medical manuscript preparation without
  making unsafe or false compliance claims;
- identifies concrete open-source candidates while keeping license and
  dependency decisions explicit;
- validates large data, specialized viewers, pipelines, restricted locations,
  provenance, review, and publication through real fixtures;
- preserves smooth universal opening and external continuation; and
- leaves active sequencing and hard architecture decisions with their owning
  documents.
