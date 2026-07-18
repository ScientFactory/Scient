# Scientific Project Fixture Selection

Status: Accepted
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Records the selected scientific projects for validating Scient, the evidence behind the selection, and the conditions for activating each fixture.
Doc type: Research evidence

## Document Rules

This document owns the source evaluation, portfolio choice, intended role, and
activation conditions for Scient's scientific validation projects. It does not
change the product contract in `../../product/PRD.md`, define implementation
architecture, or claim that an experiment has been reproduced. The product
roadmap owns sequence, implementation plans own build work, and dated execution
records must own actual results.

"Locked" means accepted for the validation portfolio. It does not mean every
linked artifact has already been downloaded, licensed for redistribution, or
proven reproducible in Scient's environment. Before activation, each project
needs a narrow artifact audit covering the exact source snapshot, data and code
licenses, dependencies, expected outputs, and redistribution boundary.

Sources were last inspected on 2026-07-18.

## Decision

Use four complementary projects, in this order:

1. **Many Labs 2, Knobe side-effect effect** - first controlled fixture.
2. **Clinical phenotyping with machine learning** - immediate second fixture.
3. **Reproducibility Project: Cancer Biology, drug-repurposing replication** -
   biomedical replication and claim-comparison fixture.
4. **OpenNeuro Flanker task (`ds000102`)** - heavier neuroscience data and
   workflow fixture.

Keep two deliberate reserves:

- **ManyBabies 4** - replacement for the first fixture if the Many Labs 2
  artifact audit fails, and a later infant-cognition reliability benchmark.
- **BCG vaccine meta-analysis** - future medical evidence-synthesis fixture
  once Scient can support a multi-paper extraction and meta-analysis loop.

This is a portfolio rather than six versions of the same benchmark. Together,
the projects cover preregistered behavioral research, statistical and machine
learning analysis, biomedical replication, neuroimaging, Bayesian and
frequentist workflows, and multi-study evidence synthesis.

## Selection Criteria

The projects were chosen for:

- an understandable and worthwhile scientific question;
- accessible source material, data, code, or structured analysis inputs;
- work scientists actually perform: reading methods, planning analyses,
  running code, checking data, regenerating outputs, and auditing claims;
- a result that can be judged against a published or predeclared reference;
- safe local execution without clinical decisions or new human-subject work;
- complementary stress on Scient rather than redundant domain coverage; and
- a scope that can be compressed into a controlled fixture.

No candidate is accepted merely because its data are open. The useful unit is a
small, versioned scientific task with known inputs, expected outputs, and
explicit claim boundaries.

## Portfolio at a Glance

| Project | Role | Main workflow | Principal stress | Activation |
| --- | --- | --- | --- | --- |
| Many Labs 2: Knobe effect | First fixture | Protocol to analysis to claim audit | Preregistration, provenance, statistical reproduction | Now, after artifact audit |
| Clinical phenotyping ML | Second fixture | Simulation, inference, ML, sensitivity analysis | Python execution and overclaim control | Hold ready behind first fixture |
| Cancer Biology replication | Third fixture | Original claim versus registered replication | Multi-source biomedical evidence and disagreement | After the core evidence loop works |
| OpenNeuro Flanker | Fourth fixture | BIDS validation, behavioral analysis, imaging derivative | Large structured data, QC, reproducible pipelines | After lighter fixtures |
| ManyBabies 4 | Reserve A | Registered report, simulation, Bayesian and frequentist analysis | Exclusions, reliability, multi-lab inference | Replace fixture 1 if needed; otherwise later |
| BCG meta-analysis | Reserve B | Extraction, effect sizes, random effects, forest plot | Heterogeneity and multi-paper synthesis | When evidence-synthesis support exists |

## 1. Many Labs 2: Knobe Side-Effect Effect

### Topic

Many Labs 2 ran preregistered replications of 28 psychology findings across 125
samples, 36 countries and territories, and 15,305 participants. The selected
effect asks whether people judge an action as intentional differently when its
foreseen side effect is harmful rather than helpful.

The published replication reported a strong harmful-versus-helpful difference.
It also changed the original binary response into a seven-point intentionality
scale, which creates a useful, concrete methods-to-claim audit.

### Why It Is First

- The protocol and peer-reviewed preregistration precede the outcome, so Scient
  can be tested without leaking the answer into the planning stage.
- The question and statistics are understandable enough to debug the product
  loop instead of spending the first project on domain infrastructure.
- One effect can be isolated from the much larger project while retaining real
  materials, data, analysis decisions, and a published comparison.
- It directly tests Scient's central trust loop: inspect sources, declare an
  analysis, run it, connect outputs to claims, and preserve review history.

### Limits and Risks

- The full Many Labs project is too broad; only the selected effect belongs in
  the first capsule.
- Some cleaning and deduplication records involve project-wide or restricted
  information. The fixture must use only the minimum legally shareable inputs.
- The original and replication response formats differ. Scient must report that
  distinction rather than describing the replication as mechanically identical.
- Old analysis material may rely on external paths or historical dependencies.

### Scient Fixture

1. **Protocol only:** extract the hypothesis, variables, exclusions, and planned
   comparison; produce an analysis plan without seeing results.
2. **Data release:** validate the effect-specific data, execute the primary
   comparison, and record exclusions and software details.
3. **Output reproduction:** regenerate one compact result table or figure and
   compare it with the published value.
4. **Claim audit:** explain whether the result supports the replicated claim,
   including the changed response scale and remaining uncertainty.
5. **Product-state test:** accept, reject, revise, and reopen the evidence note
   while preserving sources, context, outputs, and decisions.

The activation audit must identify the exact effect files, executable analysis
path, license or permission for every packaged artifact, and a stable expected
output. If that cannot be done cleanly, activate ManyBabies 4 instead.

### Primary Sources

- [Original Knobe study](https://doi.org/10.1093/analys/63.3.190)
- [Many Labs 2 paper](https://doi.org/10.1177/2515245918810225)
- [Many Labs 2 OSF project](https://osf.io/mu4tr/)
- [Accepted study design and preregistration](https://osf.io/ejcfw/)
- [Materials, data, and project wiki](https://osf.io/8cd4r/)
- [Documented protocol deviations](https://osf.io/7mqba/)
- [Documented analysis-plan changes](https://osf.io/4rbh9/)
- [Published analysis documentation](https://manylabsopenscience.github.io/)

## 2. Clinical Phenotyping With Machine Learning

### Topic

This 2025 PLOS ONE study uses a simulated randomized trial of 1,000 patients to
show how an average treatment effect can hide heterogeneous response. It then
uses an XGBoost model to identify responder phenotypes and tests how performance
changes when an important variable is omitted.

### Why It Is Second

- It combines conventional inference, machine learning, clinical framing,
  sensitivity analysis, code execution, and figures in one compact project.
- Because the cohort is simulated, Scient can know the ground truth and test
  whether an analysis recovers it without exposing private patient data.
- The omitted-variable experiment is an excellent test of uncertainty and
  overclaim control: high apparent model performance is not the final story.
- The paper is open access and the authors provide a small public code and data
  repository under an MIT license.

### Limits and Risks

- It is a methodological simulation, not evidence that a treatment works in
  real patients. Every generated conclusion must preserve that boundary.
- The repository does not visibly pin a complete execution environment, so a
  clean-room run may expose version drift.
- A high predictive score is easy for an agent to oversell. Evaluation must
  reward calibrated interpretation, sensitivity reporting, and refusal to make
  clinical recommendations.
- A single synthetic cohort does not exercise messy clinical-data governance.

### Scient Fixture

1. Read the paper and code to construct a methods and claim map.
2. Reproduce the traditional treatment-effect analysis from the supplied
   cohort.
3. Reproduce the main machine learning result and one principal figure.
4. Repeat the omitted-variable sensitivity test and compare the degradation.
5. Write an evidence-linked note that distinguishes average effect, responder
   classification, known simulated truth, and real-world clinical validity.
6. Test rejection of an intentionally overstated clinical conclusion.

Activation requires a pinned Python environment, a clean execution from the
archived repository snapshot, hashes for the supplied cohort and outputs, and a
check that the article and repository licenses cover the intended fixture use.

### Primary Sources

- [PLOS ONE article](https://doi.org/10.1371/journal.pone.0334858)
- [Author code and data repository](https://github.com/stepdaug/ML-and-clinical-phenotyping)

## 3. Reproducibility Project: Cancer Biology - Drug Repurposing

### Topic

The Reproducibility Project: Cancer Biology coordinated registered replications
of influential preclinical cancer findings. The selected study tests important
parts of a claim that public gene-expression compendia can identify new cancer
indications for existing drugs.

### Why It Is Third

- It is a serious biomedical case with an original claim, a planned replication,
  shared project records, replication results, and collection-level context.
- It tests a more difficult scientific judgment than matching one number:
  original and replication evidence can agree in part, differ in magnitude, or
  leave a claim unresolved.
- The source claim began with computational drug repositioning, while the
  selected replication provides tractable statistical comparisons and a
  meta-analysis of preclinical validation experiments.
- It exercises evidence comparison, provenance, caveats, and claim revision -
  capabilities scientists need when literature is not cleanly consistent.

### Limits and Risks

- The broader project is heterogeneous and includes wet-lab work. The fixture
  is an analysis and evidence-review capsule, not a laboratory recreation.
- Source artifacts span publishers and OSF, with potentially different licenses
  and redistribution terms.
- Historical software and data dependencies may not run unchanged.
- "Replication succeeded" or "failed" is too crude. Scient must separate each
  tested claim, effect, method, and uncertainty.

### Scient Fixture

1. Build a claim map from the original study context and registered replication
   question.
2. Inspect the replication protocol before reading the outcome.
3. Reproduce one tractable computational analysis or reported result from a
   pinned, shareable subset.
4. Compare original and replication evidence at the claim level, including
   design differences and effect-size uncertainty.
5. Produce a reviewable conclusion that can be revised as sources or analyses
   change.

Activation requires selecting the exact computational result, tracing every
input to its source, confirming licenses, pinning the historical environment,
and defining an expected result that does not imply reproduction of the wet-lab
components.

### Primary Sources

- [eLife Reproducibility Project: Cancer Biology collection](https://elifesciences.org/collections/9b1e83d1/reproducibility-project-cancer-biology)
- [OSF project collection](https://osf.io/collections/rpcb/)
- [Original drug-repurposing study](https://pmc.ncbi.nlm.nih.gov/articles/PMC3502016/)
- [Registered replication report](https://elifesciences.org/articles/06847)
- [Selected replication study](https://elifesciences.org/articles/17044)
- [Selected study's OSF project](https://osf.io/hxrmm/)

## 4. OpenNeuro Flanker Task (`ds000102`)

### Topic

This dataset contains behavioral and fMRI data from 26 healthy adults performing
the Eriksen Flanker task. Participants respond to a central target while
ignoring surrounding distractors; congruent and incongruent trials test
attention and cognitive control. The dataset is distributed through OpenNeuro
in the Brain Imaging Data Structure (BIDS).

### Why It Is Fourth

- It introduces a real, standardized neuroscience project structure rather
  than another small analysis table.
- It tests metadata interpretation, BIDS validation, event-level behavioral
  analysis, imaging quality control, derivatives, and methods reporting.
- The task is conceptually accessible, but its data expose whether Scient can
  manage larger files and multi-step scientific pipelines with traceability.
- It is a bridge from document-and-table workflows to serious scientific data
  engineering.

### Limits and Risks

- The dataset is not naturally preregistration-first, so it should not replace
  the first protocol-to-result fixture.
- Neuroimaging results depend heavily on preprocessing, quality control, model
  specification, and software versions.
- OpenNeuro notes that uploaded data are not guaranteed to have passed all
  quality checks. Motion and other exclusions must be assessed, not assumed.
- A small subject subset is useful for product testing but cannot be presented
  as a reproduction of the full group-level result.

### Scient Fixture

1. Read the task design and produce explicit behavioral and imaging hypotheses.
2. Validate a pinned BIDS snapshot and generate a methods inventory from its
   metadata.
3. Reproduce a behavioral congruent-versus-incongruent comparison from event
   files.
4. Run and record quality-control checks with transparent exclusions.
5. Use a pinned precomputed derivative, or one deliberately fixed preprocessing
   path, to reproduce one narrow contrast or figure.
6. Link the final claim to the task definition, exact subjects, code, derivative,
   and QC decisions.

Activation requires pinning the dataset version, deciding whether derivatives
may be redistributed, selecting the full or reduced subject set, and freezing
the preprocessing and analysis environment. Begin with behavior and BIDS
validation; imaging comes only after those outputs are stable.

### Primary Sources

- [OpenNeuro dataset](https://openneuro.org/datasets/ds000102)
- [Legacy OpenfMRI dataset description](https://www.openfmri.org/dataset/ds000102/)
- [Associated Flanker and resting-state publication](https://pubmed.ncbi.nlm.nih.gov/20974260/)
- [BIDS specification](https://bids-specification.readthedocs.io/)
- [OpenNeuro documentation](https://docs.openneuro.org/)

## Reserve A. ManyBabies 4

### Topic

ManyBabies 4 is a registered, multi-lab infant-cognition project examining
whether infants prefer helpers over hinderers. The project reports contributions
from 37 labs in 18 countries and includes protocol development, simulations,
pilot work, data cleaning, and both Bayesian and frequentist analyses.

### Why Keep It

- It preserves the strongest properties of the first choice: a staged
  registered-report design, open analysis, a clear hypothesis, and a published
  outcome.
- Its analysis repository is unusually useful for testing a full sequence from
  simulation and cleaning through Bayesian and frequentist inference.
- Infant research introduces meaningful exclusion, measurement-reliability,
  multi-lab, and null-or-uncertain-result reasoning.

### Limits and Risks

- Its behavioral replication role overlaps substantially with Many Labs 2, so
  activating both immediately would add less coverage than the clinical ML
  fixture.
- Bayesian dependencies and hierarchical choices make it heavier as the first
  product-debugging case.
- Project materials and code use different stated licenses; each packaged
  artifact needs separate review.
- Infant looking-time measures and exclusions need careful interpretation and
  should not be flattened into a simple preference score.

### Scient Fixture

If it replaces Many Labs 2, use the same staged reveal: registered protocol and
simulations, then cleaned data, then Bayesian and frequentist reproduction, then
comparison with the final paper. If used later, emphasize agreement between the
two inferential approaches, exclusion sensitivity, lab-level variation, and
measurement reliability.

Activation requires choosing one analysis target, freezing the R environment,
auditing the data/material/code licenses separately, and establishing a small
expected-output set.

### Primary Sources

- [ManyBabies 4 project page](https://manybabies.org/MB4/)
- [Documentation and protocols](https://osf.io/xe2pj/)
- [Materials, data, and code resources](https://osf.io/kr8tx/resources)
- [Final publication](https://doi.org/10.1111/desc.13581)
- [Analysis repository](https://github.com/manybabies/mb4-analysis)

## Reserve B. BCG Vaccine Meta-Analysis

### Topic

The `dat.colditz1994` dataset contains aggregate results from 13 studies of BCG
vaccination for preventing tuberculosis. It supports effect-size calculation,
random-effects meta-analysis, forest plots, heterogeneity analysis, and
moderator analysis using study year, geographic latitude, and allocation method.

### Why Keep It

- It is a compact, medically meaningful test of a workflow not covered by the
  first four projects: synthesizing several studies rather than reproducing one.
- The curated dataset and mature `metafor` examples make numerical outputs easy
  to verify while still exposing substantial heterogeneity.
- It can test whether Scient keeps study-level evidence, transformations,
  pooled estimates, prediction uncertainty, and narrative conclusions linked.

### Limits and Risks

- The curated table is not the complete systematic-review workflow. It does not
  by itself reproduce search, screening, full-text appraisal, or independent
  extraction from the original reports.
- The studies and review are old, and some source articles may not be openly
  accessible or redistributable.
- A pooled estimate without heterogeneity and context would be misleading.
- Dataset and package licensing still need confirmation for a distributed
  fixture.

### Scient Fixture

1. Construct a study-to-extraction table with explicit source status.
2. Recalculate study effect sizes from treatment and control counts.
3. Reproduce a random-effects model and forest plot.
4. Explain heterogeneity and the difference between confidence and prediction
   intervals.
5. Run one predeclared moderator analysis and distinguish exploration from
   confirmation.
6. Write a medical evidence note that remains educational and does not become
   an individual treatment recommendation.

Activate this only when Scient can represent multiple papers, extraction
provenance, and analysis lineage. Before packaging, audit the dataset license,
pin R and `metafor`, and decide which original reports can be included versus
linked only.

### Primary Sources

- [Original JAMA meta-analysis](https://doi.org/10.1001/jama.1994.03510330076038)
- [`dat.colditz1994` dataset documentation](https://wviechtb.github.io/metadat/reference/dat.colditz1994.html)
- [`metafor` project and worked examples](https://wviechtb.github.io/metafor/)

## Activation Sequence and Exit Criteria

Do not ingest all six projects at once. For each active fixture:

1. complete the artifact, license, and environment audit;
2. define one scientific question and one bounded expected output;
3. create protocol-only, data, output, and claim-audit stages where the source
   supports them;
4. record a known-good manual reproduction outside Scient;
5. run the Scient workflow with inspect, accept, reject, revise, and reopen
   behavior; and
6. keep the fixture only if failures can be attributed to the product rather
   than an ambiguous scientific target.

The first fixture is complete only when Scient can preserve the full chain from
source and task through execution, proposed conclusion, researcher decision,
and reopened project state. Scientific agreement with the expected output is
necessary, but it is not sufficient without provenance and recoverability.
