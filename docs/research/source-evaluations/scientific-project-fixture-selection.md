# Scientific Validation Portfolio And Evaluation Strategy

Status: Accepted
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Records Scient's selected validation projects, capability fixtures, agent-evaluation benchmarks, source evidence, and activation conditions.
Doc type: Research evidence

## Document Rules

This document owns the source evaluation, portfolio choice, intended role, and
activation conditions for three complementary validation tracks: scientific
validation projects, capability fixtures, and agent-evaluation benchmarks. It
does not change the product contract in `../../product/PRD.md`, define
implementation architecture, or claim that an experiment or benchmark has been
run. The product roadmap owns sequence, implementation plans own build work,
quality documents own general testing doctrine, and dated execution records
must own actual results.

"Selected" means accepted for the validation portfolio. It does not mean every
linked artifact has already been downloaded, licensed for redistribution, or
proven reproducible in Scient's environment. Before activation, every project,
fixture, or benchmark needs a narrow audit covering the exact source snapshot,
data and code licenses, dependencies, expected outputs or scorer, and
redistribution boundary.

Sources were last inspected on 2026-07-18.

## Decision

Use three validation tracks. They answer different questions and must not be
collapsed into one ranked list.

### Track 1: Scientific Validation Projects

These are rich, end-to-end project capsules. They test whether a researcher can
use Scient to understand sources, perform or inspect analysis, review claims,
accept or reject agent work, and reopen a project with provenance and history
intact.

Use four projects, in this order:

1. **Many Labs 2, Knobe side-effect effect** - first controlled project.
2. **Clinical phenotyping with machine learning** - immediate second project.
3. **Reproducibility Project: Cancer Biology, drug-repurposing replication** -
   biomedical replication and claim-comparison project.
4. **NARPS** - flagship neuroscience project for analytic flexibility,
   provenance, and claim comparison.

Keep **ManyBabies 4** as the replacement for the first project if the Many Labs
2 artifact audit fails.

### Track 2: Capability Fixtures

These are small, deterministic checks of one capability. They can support a
validation project, but passing one does not prove the complete Scient product
loop.

1. **Our World in Data** - pinned CSV to exact number and independently
   generated figure.
2. **BCG `dat.colditz1994` with `metafor`** - supplied table to pooled estimate,
   heterogeneity output, and forest plot. This early fixture does not include a
   new systematic review or extraction from the original papers.
3. **OpenNeuro Flanker (`ds000102`)** - BIDS ingestion, metadata, behavioral
   comparison, and later one deliberately bounded imaging derivative.

### Track 3: Agent-Evaluation Benchmarks

These are external scored harnesses for measuring Scient-agent and scaffold
behavior over time. They complement rather than replace the internal project
and capability tracks.

1. Start with a small **AstaBench-wrapped DiscoveryBench validation subset**.
2. Expand only after the adapter, scoring, logging, and repeat-run policy are
   stable.
3. Add **CORE-Bench v1.1/OOD** later for reliability, efficiency, and
   model-versus-scaffold analysis rather than saturated headline accuracy.
4. Add **BixBench** last as a difficult computational-biology stretch suite.

Keep **ERP CORE** and the **ATLAS Higgs challenge** as reserves. Keep the
Reproducibility Project: Psychology and ReScience C as source pools rather than
active commitments. Deprioritize DABStep unless generic business-style tabular
analysis becomes a specific product need.

This strategy is complete enough to build against. Further portfolio research
must not delay the Many Labs 2 artifact audit and first project capsule.

## Selection Criteria

All three tracks were chosen for:

- an understandable and worthwhile scientific question or capability;
- accessible source material, data, code, or structured analysis inputs;
- work scientists actually perform: reading methods, planning analyses,
  running code, checking data, regenerating outputs, and auditing claims;
- a result or behavior that can be judged against a published, predeclared, or
  versioned reference;
- safe local execution without clinical decisions or new human-subject work;
- complementary stress on Scient rather than redundant domain coverage; and
- a scope that can be reduced without misrepresenting the scientific task.

Track 1 additionally requires a meaningful researcher review and continuity
loop. Track 2 requires deterministic or tightly bounded expected outputs. Track
3 requires a versioned scorer and enough run metadata to distinguish model,
scaffold, environment, and cost effects.

No candidate is accepted merely because its data are open or it emits a score.
The useful unit is a versioned task with known inputs, explicit boundaries, and
an evaluation method whose limitations are visible.

## Portfolio at a Glance

### Track 1: Scientific Validation Projects

| Project | Role | Main workflow | Principal stress | Activation |
| --- | --- | --- | --- | --- |
| Many Labs 2: Knobe effect | First project | Protocol to analysis to claim audit | Preregistration, provenance, statistical reproduction | Now, after artifact audit |
| Clinical phenotyping ML | Second project | Simulation, inference, ML, sensitivity analysis | Python execution and overclaim control | Hold ready behind the first project |
| Cancer Biology replication | Third project | Original claim versus registered replication | Multi-source biomedical evidence and disagreement | After the core evidence loop works |
| NARPS | Fourth and flagship project | One dataset, predefined hypotheses, many analysis teams | Analytic flexibility, provenance, QC, claim comparison | After lighter data and BIDS work |

### Track 2: Capability Fixtures

| Fixture | Bounded proof | Explicit non-goal | Activation |
| --- | --- | --- | --- |
| Our World in Data | Pinned CSV to exact statistic and independently generated reference-matched figure | Complete research project or copied OWID visualization | When data-to-figure work begins |
| BCG `dat.colditz1994` | Supplied table to pooled estimate, heterogeneity, and forest plot | Search, screening, or fresh extraction from 13 papers | First deterministic statistics fixture |
| OpenNeuro Flanker | Pinned BIDS metadata and behavioral result; one later derivative | Full fMRI reproduction or flagship claim audit | Before NARPS |

### Track 3: Agent-Evaluation Benchmarks

| Phase | Benchmark | Primary signal | Activation |
| --- | --- | --- | --- |
| 1 | AstaBench / DiscoveryBench subset | Data-driven discovery quality, trace, latency, and cost | Small validation subset after the Scient-agent path is runnable |
| 2 | Expanded AstaBench | Broader scientific-agent capability under one harness | After scorer and repeated-run behavior are stable |
| 3 | CORE-Bench v1.1/OOD | Reliability, efficiency, generalization, and scaffold effects | Later, with container execution available |
| 4 | BixBench | Hard computational-biology analysis | Stretch target after the lighter suites |

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

## 4. NARPS: Neuroimaging Analysis Replication And Prediction Study

### Topic

NARPS asked 70 independent analysis teams to test the same nine predefined
hypotheses using the same functional MRI dataset. The underlying mixed-gambles
study includes behavioral, anatomical, and functional imaging data from 108
participants in BIDS format, together with preregistered exclusion criteria,
quality-control material, team analysis descriptions, statistical maps, and
published comparisons across pipelines and conclusions.

### Why It Is The Flagship Fourth Project

- It directly tests Scient's trust mission: reasonable teams can make different
  analysis choices and reach different answers from the same data and
  hypotheses.
- It connects protocol, BIDS data, preprocessing and model choices, quality
  control, statistical maps, binary hypothesis judgments, and a published
  cross-team synthesis.
- It gives Scient something more meaningful to preserve than one correct
  number: the inspectable path from analytic decisions to claims.
- It combines a compelling scientific story with a demanding test of large
  structured data, provenance, disagreement, and reproducible computation.

### Limits and Risks

- The whole project is too large for one capsule. Scient must select one
  hypothesis and a deliberately small comparison of analysis paths before
  expanding.
- There is no single universally correct fMRI pipeline. The expected result
  must test traceability and faithful comparison, not pretend that one team is
  the gold standard.
- Raw imaging, derivatives, team reports, maps, and code have separate
  provenance and may have separate redistribution terms.
- Historical preprocessing and neuroimaging environments are expensive and
  sensitive to software versions. NARPS must follow lighter BIDS and
  data-to-figure fixtures rather than becoming initial infrastructure work.

### Scient Project Capsule

1. Read the preregistered criteria and nine hypotheses, then select one
   hypothesis and define the allowed evidence before revealing team outcomes.
2. Validate a pinned BIDS snapshot or documented subset and generate a methods,
   subject, and quality-control inventory from its metadata.
3. Ingest a small, preselected set of team pipeline descriptions, maps, and
   hypothesis decisions without flattening their methodological differences.
4. Reproduce one bounded behavioral validation result or one deliberately
   pinned derivative-level comparison outside and then inside Scient.
5. Compare how analytic choices affected the selected hypothesis, with every
   conclusion linked to the relevant pipeline, subjects, code, map, and QC
   decisions.
6. Reject an intentionally overgeneralized conclusion, revise it into a
   supportable claim, and verify that the evidence and decision history survive
   reopening.

Activation requires pinning the dataset and result snapshots, selecting one
hypothesis and exact teams or aggregate outputs, auditing licenses separately,
freezing any executed environment, and defining success criteria for both
scientific fidelity and product-state continuity. Begin only after the
OpenNeuro Flanker precursor has established basic BIDS handling.

### Primary Sources

- [Cross-team NARPS analysis in Nature](https://doi.org/10.1038/s41586-020-2314-9)
- [NARPS data descriptor](https://doi.org/10.1038/s41597-019-0113-7)
- [OpenNeuro dataset `ds001734`](https://openneuro.org/datasets/ds001734)
- [Task and behavioral validation code](https://github.com/rotemb9/NARPS_scientific_data)
- [Cross-team report and map analysis code](https://github.com/poldrack/narps)
- [Pinned NARPS analysis release](https://doi.org/10.5281/zenodo.3709273)

## Track 1 Reserve: ManyBabies 4

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

## Track 2A. Our World In Data Exact-Output Fixture

### Topic And Role

Our World in Data publishes downloadable chart data and machine-readable
metadata. A selected chart can provide a small, transparent path from a pinned
CSV through a published value to a Scient-generated figure.

This is the cleanest early smoke test for data import, calculation, figure
generation, source attribution, and stale-output detection. It is not a rich
scientific project and must not be presented as one.

### Bounded Fixture

1. Select one stable chart with useful scientific or public-health meaning.
2. Archive the exact CSV and metadata response with retrieval date and hashes.
3. Verify the chart-specific data provider, citation, and license.
4. Recalculate one or more declared values and generate a new figure from the
   pinned data rather than copying the OWID visualization.
5. Compare values and labels with the pinned reference and report any mismatch.
6. Change the input deliberately and prove that Scient marks the result stale.

Activation requires selecting the chart, checking the underlying provider's
terms, pinning the snapshot, and recording the expected values and tolerances.
OWID's API and site license do not erase third-party data terms.

### Primary Sources

- [OWID Grapher Chart API](https://docs.owid.io/projects/etl/api/chart-api/)
- [OWID reuse and third-party licensing guidance](https://ourworldindata.org/faqs)

## Track 2B. BCG `dat.colditz1994` Statistics Fixture

### Topic

The `dat.colditz1994` dataset contains aggregate results from 13 studies of BCG
vaccination for preventing tuberculosis. It supports effect-size calculation,
random-effects meta-analysis, forest plots, heterogeneity analysis, and
moderator analysis using study year, geographic latitude, and allocation method.

### Why It Is Early

- It is a compact, medically meaningful deterministic test of effect-size
  calculation, a random-effects model, heterogeneity, and figure generation.
- The curated dataset and mature `metafor` examples make numerical outputs easy
  to verify while still exposing substantial heterogeneity.
- It can test whether Scient keeps study-level evidence, transformations,
  pooled estimates, prediction uncertainty, and narrative conclusions linked.

### Limits and Risks

- The early fixture begins from the supplied `dat.colditz1994` table. It does
  not reproduce search, screening, full-text appraisal, or independent
  extraction from the 13 original reports.
- The studies and review are old, and some source articles may not be openly
  accessible or redistributable.
- A pooled estimate without heterogeneity and context would be misleading.
- Dataset and package licensing still need confirmation for a distributed
  fixture.

### Bounded Fixture

1. Pin the exact `metadat`, `metafor`, R, and dataset versions.
2. Recalculate study effect sizes from the supplied treatment and control
   counts.
3. Reproduce one declared random-effects model and forest plot.
4. Report heterogeneity and the difference between confidence and prediction
   intervals.
5. Write a short evidence-linked interpretation that remains educational and
   does not become an individual treatment recommendation.

The early fixture ends there. A later multi-paper validation project may add
original-report retrieval, screening, extraction provenance, appraisal, and
moderator analysis, but that expansion must not be smuggled into this smoke
test. Before packaging, audit the dataset and package licenses and record exact
expected numbers and figure characteristics.

### Primary Sources

- [Original JAMA meta-analysis](https://doi.org/10.1001/jama.1994.03510330076038)
- [`dat.colditz1994` dataset documentation](https://wviechtb.github.io/metadat/reference/dat.colditz1994.html)
- [`metafor` project and worked examples](https://wviechtb.github.io/metafor/)

## Track 2C. OpenNeuro Flanker BIDS Precursor (`ds000102`)

### Topic And Role

The dataset contains behavioral and fMRI data from 26 healthy adults performing
the Eriksen Flanker task. It is a smaller and more teachable BIDS project than
NARPS, making it useful for proving ingestion and pipeline mechanics before the
flagship neuroscience project.

### Bounded Fixture

1. Pin and validate the BIDS dataset version.
2. Generate a methods and file inventory from BIDS metadata.
3. Reproduce one behavioral congruent-versus-incongruent comparison from event
   files with transparent exclusions.
4. Record basic QC outputs and provenance.
5. Only after those are stable, add one pinned precomputed derivative or one
   deliberately fixed imaging path.

This fixture does not claim to reproduce the full group-level publication. Its
job is to make BIDS ingestion, metadata, behavior, QC, and derivative lineage
reliable enough that NARPS can test scientific disagreement rather than basic
file handling.

### Primary Sources

- [OpenNeuro dataset `ds000102`](https://openneuro.org/datasets/ds000102)
- [Legacy OpenfMRI dataset description](https://www.openfmri.org/dataset/ds000102/)
- [Associated publication](https://pubmed.ncbi.nlm.nih.gov/20974260/)
- [BIDS specification](https://bids-specification.readthedocs.io/)

## Track 3A. AstaBench And DiscoveryBench

### Role

AstaBench is the preferred integration surface for external scientific-agent
evaluation. It wraps DiscoveryBench and other research tasks in standardized
environments, records repository state and run metadata, and reports both score
and cost. DiscoveryBench contributes real and synthetic data-driven discovery
tasks requiring statistical analysis and semantic interpretation.

### Initial Evaluation

1. Implement the smallest adapter needed to run the Scient agent through
   AstaBench without changing Scient's product-state model to fit the harness.
2. Start with 5-10 public validation tasks selected for data loading,
   statistical analysis, and evidence-grounded interpretation.
3. Preserve task version, benchmark and Scient commits, model/provider version,
   tools, prompts or skills, sandbox image, attempts, evaluator version, score,
   latency, token use, and cost.
4. Inspect traces and failure classes; do not reduce all learning to one score.
5. Expand only after repeated runs are stable enough to separate model variance,
   scaffold changes, scorer variance, and environment failures.

DiscoveryBench includes open-ended scientific answers and evaluator-model
judgment, so its scores are not perfectly deterministic. Public validation
answers also create contamination risk. Use validation tasks for development
and reserve held-out test evaluation for intentional checkpoints.

### Primary Sources

- [AstaBench repository](https://github.com/allenai/asta-bench)
- [AstaBench paper](https://arxiv.org/abs/2510.21652)
- [DiscoveryBench repository](https://github.com/allenai/discoverybench)
- [DiscoveryBench paper](https://arxiv.org/abs/2407.01725)

## Track 3B. CORE-Bench v1.1 And OOD

### Role

CORE-Bench tests agents that reproduce computational results from research code
and artifacts. It is close to Scient's paper-reproduction use case, but it is
container-heavy and should follow the first AstaBench integration.

The original benchmark's hard split later showed task errors, exploitable
shortcuts, and accuracy saturation. Scient should therefore target the audited
v1.1 and out-of-distribution suites. Its main value is measuring reliability,
efficiency, generalization, and model-versus-scaffold effects, not chasing a
saturated accuracy headline.

Activation requires a current task audit, controlled container execution,
repeated runs, cost limits, and explicit reporting of failures caused by the
benchmark rather than Scient.

### Primary Sources

- [Original CORE-Bench repository](https://github.com/siegelz/core-bench)
- [Original CORE-Bench paper](https://arxiv.org/abs/2409.11363)
- [CORE-Bench v1.1 and OOD re-audit](https://arxiv.org/abs/2606.26158)

## Track 3C. BixBench Stretch Suite

### Role

BixBench packages difficult computational-biology and bioinformatics notebook
tasks with real data, containerized execution, and mixed exact or model-based
verification. It is the best later biomedical stress test among the reviewed
agent benchmarks.

It is not an early dependency. Runs can be expensive and long, answer material
is public for some tasks, and the environment adds substantial operational
weight. Activate a small audited subset only after Scient performs reliably on
the lighter data-analysis and reproduction suites.

### Primary Sources

- [BixBench repository](https://github.com/Future-House/BixBench)

## Additional Reserves

### ERP CORE

ERP CORE provides raw and processed EEG data from 40 participants, six
paradigms, seven event-related potential components, experiment materials,
analysis pipelines, and reference results. It is a strong medium-weight bridge
between tabular statistics and fMRI.

It is not MATLAB-locked: the maintained MNE-BIDS-Pipeline provides a Python
reference path. Activation still requires selecting one component and figure,
pinning the data and pipeline version, and auditing data, code, and derivative
licenses separately.

- [ERP CORE project](https://erpinfo.org/erp-core)
- [ERP CORE paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC7909723/)
- [MNE-BIDS-Pipeline ERP CORE example](https://mne.tools/mne-bids-pipeline/stable/examples/ERP_CORE.html)

### ATLAS Higgs Challenge

The CERN Open Data release contains a CC0, documented version of the 2014 ATLAS
Higgs machine-learning challenge with labels, weights, and the approximate
median significance metric. It is a good future physics and tabular-ML fixture,
but it adds less near-term coverage than the selected clinical ML project and
does not test a broad provenance or researcher-review loop by itself.

- [ATLAS Higgs challenge dataset](https://opendata.cern.ch/record/328)

## Reviewed But Not Activated

- **Reproducibility Project: Psychology:** scientifically valuable, but too
  broad and too overlapping with Many Labs 2 for the active portfolio. Keep it
  as a future source pool.
- **ReScience C:** a useful source of article-specific computational
  reproductions and figure targets. Select and audit an individual article
  before treating any case as lightweight; the journal as a whole is not one
  fixture.
- **DABStep:** useful objective scoring for multi-step tabular analysis, but its
  synthetic business and finance tasks, hidden main-test answers, and lack of
  figures make it lower priority for Scient's scientific trust loop.
Primary source pools:

- [Reproducibility Project: Psychology](https://osf.io/ezcuj/)
- [ReScience C](https://rescience.github.io/)
- [DABStep dataset](https://huggingface.co/datasets/adyen/DABstep)

## Activation Sequence and Exit Criteria

Do not activate a whole track at once. Start the Many Labs 2 artifact audit and
capsule now; no benchmark integration or additional taxonomy work may block it.

For each scientific validation project:

1. complete the artifact, license, and environment audit;
2. define one scientific question and one bounded expected output;
3. create protocol-only, data, output, and claim-audit stages where the source
   supports them;
4. record a known-good manual reproduction outside Scient;
5. run the Scient workflow with inspect, accept, reject, revise, and reopen
   behavior; and
6. keep the project only if failures can be attributed to the product rather
   than an ambiguous scientific target.

The first project is complete only when Scient can preserve the full chain from
source and task through execution, proposed conclusion, researcher decision,
and reopened project state. Scientific agreement with the expected output is
necessary, but it is not sufficient without provenance and recoverability.

For each capability fixture:

1. pin the exact input, environment, expected output, tolerance, and license;
2. establish a known-good manual or reference run;
3. test the narrow capability and its provenance without claiming a complete
   scientific workflow; and
4. include at least one changed-input, stale-output, or failure case where
   relevant.

For each agent-evaluation run, preserve:

- Scient app, Scient agent, benchmark, dataset, scorer, and sandbox revisions;
- model, provider, reasoning configuration, tools, prompts, and project skills;
- validation or test split, attempts, seeds where available, and any retries;
- score components, trace or failure class, latency, token use, and cost; and
- known contamination, evaluator-model, benchmark-error, and environment
  limitations.

Do not turn one run into a release gate. Establish repeated-run variance first,
report distributions or reliability rates where possible, and use external
benchmark evidence together with Scient-owned project and capability results.

## Recommended Sequence

1. Audit and build the Many Labs 2 Knobe capsule for the current source-to-note
   slice. Use ManyBabies 4 only if the audit fails.
2. Keep the first slice bounded: data and figures may be pinned project context,
   but they do not need to become an analysis workbench yet.
3. When data-to-figure work begins, activate the BCG single-dataset statistics
   fixture and one OWID exact-output fixture.
4. Activate the clinical phenotyping project, then the Cancer Biology project.
5. Prove BIDS ingestion with OpenNeuro Flanker before activating NARPS as the
   flagship neuroscience project.
6. Once the Scient-agent execution path is runnable, add a small AstaBench /
   DiscoveryBench validation subset without delaying Track 1 product work.
7. Expand AstaBench only after repeated-run behavior is understood; add
   CORE-Bench v1.1/OOD and BixBench later.
