# Scientific Python Environment Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-08-17
Last updated: 2026-11-28
Purpose: Proposes Python workflows and sequencing for scientists and agents using Compute.
Doc type: Planning note

## Document Rules

This proposed roadmap specializes the accepted [PRD](../product/PRD.md) and
the [Scientific Computing And Data Analysis Roadmap](scientific-computing-and-data-analysis-roadmap.md)
for Python workflows. Compute owns shared execution, datasets, environments,
and run records. Use the
[File, Resource, And Presentation Foundation](file-resource-and-presentation-foundation.md)
for file identity and viewing, the
[Scientific Artifact Studio](scientific-artifact-studio.md) for inspection and
composition, and the
[Scientific Document Platform](scientific-document-platform-roadmap.md) for
executable-document publishing.

### Update Policy

Update Python scope and sequencing when the Compute baseline or the
accepted/deferred boundary changes. Record accepted cross-product architecture in
`docs/architecture/`. Document released behavior in
[`scient-desktop/docs/user/scientific-computing.md`](https://github.com/ScientFactory/scient-desktop/blob/main/docs/user/scientific-computing.md)
and implementation contracts in
[`scient-desktop/docs/internals/scient-compute.md`](https://github.com/ScientFactory/scient-desktop/blob/main/docs/internals/scient-compute.md).

## Desktop Baseline

Use the [Compute baseline](scientific-computing-and-data-analysis-roadmap.md#desktop-baseline)
and [merged workbench](scientific-computing-and-data-analysis-roadmap.md#compute-workbench).
Desktop main supports stateful Python, interpreter selection, optional managed
Python and toolkits, notebooks with parameters and Reader, dataset profiles,
figure capture, and result comparison and handoff. Eligible runs can add a
missing package and offer an explicit rerun. The
[Compute sequence](scientific-computing-and-data-analysis-roadmap.md#recommended-next-implementation)
tracks packaged qualification and fresh notebook environment recovery.

## Decision Summary

Build on the shared Compute surfaces so researchers and agents can use the
same Python code, data, runs, and figures. Keep those outputs connected to the
environment and evidence that produced them. Prioritize recovery from a failed
fresh notebook run and trustworthy comparison and handoff of saved results.

## Use-Case Landscape

### A. Python Execution Foundation

Extend the stateful Python kernel and its existing file, selection, cell, and
notebook paths. Use the resolved runtime and its project or server context in
run records. Improve dependency diagnostics, runtime recovery, and agent
parity through the Compute environment contract. Preserve output streaming,
cancellation, and source-linked tracebacks. Apply the project's file-write
and network permissions on the execution host. Quarto is a later document
adapter.

### B. Data Layer — Datasets As First-Class Project Objects

Build on the existing grid, variable inspection, profiles, and
saved views. Link reviewed data and transforms to the runs that used them.

- Ingestion: CSV, TSV, Excel, Parquet, Arrow, JSON, HDF5, NetCDF, Stata, SAS,
  SPSS; REDCap API; SQL via SQLAlchemy or psycopg; REST APIs; DICOM and BIDS;
  images.
- Dataset identity and revision, sharing only genuinely generic identity and
  revision primitives with artifacts: a dataset is a distinct durable project
  object with provenance, schema, and version, not just a path or an artifact
  subtype.
- Extend the grid and variable explorer with clear source and revision
  evidence for filters, selections, profiles, and derived tables.
- Schema and codebook: inferred dtypes, units, value labels, missing codes,
  categorical levels.
- Variables inspector: per-variable distributions, summary statistics, and
  missingness.
- Dataset-to-table-artifact relationship, shared with the document platform.

### C. Exploration Surfaces

- Auto-EDA and profiling reports (ydata-profiling or sweetviz style) as
  reviewable artifacts.
- Quick plots from data: "plot the distribution of X by group" becomes agent
  code that renders inline.
- Reviewable data-cleaning operations: filter, recode, handle missing values,
  parse messy dates — each a proposed, inspectable, reversible operation with a
  log, not an invisible mutation.
- The notebook as the primary exploration surface (see G).

### D. Analysis And Statistics

The agent writes the statistics code; the platform makes the results
inspectable and trustworthy.

- Statistics as reviewable agent tasks: regression, ANOVA and GLM, mixed models,
  survival (`lifelines`), Bayesian (`PyMC`, `Bambi`, `ArviZ`), meta-analysis,
  power analysis, causal inference (`DoWhy`, `econml`), psychometrics.
- Results as artifacts: a regression result is a coefficients table plus
  diagnostic plots plus assumption checks, linked to the code and data that
  produced it.
- Assumption checks surfaced, not hidden: residuals, normality,
  multicollinearity, influence. The agent shows them; the scientist judges.
- Method suggestion: given the question and the data shape, the agent proposes
  the appropriate test with reasoning and references before writing code.
- Parameters and random seeds captured per run.
- Staleness graph: when data or code changes, flag which results, figures, and
  manuscript claims are now stale. This generalizes the existing
  `current / stale / failed-latest` artifact lifecycle.

### E. Visualization

Build on Matplotlib figure capture and existing interactive chart rendering.
Preserve figure provenance and reuse the same capture path for seaborn plots.

- Point-at-the-visual, agent-edit, rerun loop: the existing browser element
  picker should connect to Matplotlib and Plotly figures so "make this axis
  log scale, add error bars, use a colorblind palette" becomes a reviewed code
  diff and a new figure revision, not a magic pixel drag.
- Figure as artifact with representations: static PNG or SVG, interactive
  Plotly where converted, the underlying data table, and the source code.
- Multi-panel composition through the Scientific Artifact Studio: compose
  Matplotlib and Plotly panels into a publication figure with labels, scale
  bars, captions, and an export receipt.
- Domain visualizations, later: `napari` for images, `geopandas` and `folium`
  for maps, `networkx` for graphs, `pyvista` for 3D.

### F. Reproducibility And Environment

- First deliver [Python notebook environment recovery](scientific-computing-and-data-analysis-roadmap.md#first-milestone-python-notebook-environment-recovery).
  Offer **Use once** with a verified interpreter, restore from `uv.lock`
  explicitly, and expose the same operations to people and agents.
- Build on interpreter selection, managed toolkits, and the result
  manifest. Capture the runtime, package and lockfile evidence, parameters,
  seed where available, code, and input revisions. Report missing evidence.
- Use native project recipes when available. Extend explicit restoration and
  approved dependency changes through the owning environment manager.
- Plan an explicit export of a reviewed environment declaration from a verified
  run, with unresolved dependencies visible.
- Extend package verification after the input provenance and notebook recovery
  gates pass. Keep containers and wider environment managers for later.

### G. Notebooks And Reproducible Documents

- Preserve Jupyter round-trip fidelity across editing, inline outputs,
  parameterized runs, and Reader mode. Apply the same run and recovery contract
  to manual and agent notebook work.
- Jupytext: notebooks as Markdown or `.py` for clean Git history and agent
  editing.
- Quarto `.qmd`: prose plus Python plus results, rendered to HTML, PDF, or
  Word, composing with the document platform and LaTeX work.
- Output-to-artifact promotion: lift a cell's figure into a durable figure
  artifact with one action.

### H. Pipelines And Scale

- Workflow engines: Snakemake or Nextflow integration for reproducible DAGs,
  essential in genomics; or a lighter Scient-owned task DAG.
- Caching and memoization of expensive steps.
- Parallelism with `joblib` or `Dask`.
- Big data with `Dask`, `modin`, `polars`, or `pyspark` for out-of-core work.
- GPU use: CUDA, RAPIDS, or PyTorch detection and use for ML and imaging.
- Background job management, building on the existing process substrate.

### I. Machine Learning Workflows

- `scikit-learn`, `xgboost`, `lightgbm` pipelines, model selection,
  cross-validation, and hyperparameter tuning with `optuna`.
- Deep learning training runs (PyTorch, TensorFlow, JAX) with logs,
  checkpoints, and metrics.
- Interpretability: SHAP and LIME plots as artifacts.
- Evaluation artifacts: confusion matrices, ROC and PR curves, calibration,
  each linked to the data and model that produced it.

### J. Domain Adapters

Named deliberately later, once the generic workbench can already open, edit,
run, inspect, compare, and recover ordinary analysis.

| Domain | Representative libraries |
|---|---|
| Bioinformatics and single-cell | Biopython, `scanpy`, `anndata`, `pysam` |
| Cheminformatics | RDKit |
| Neuroimaging | `nibabel`, `nilearn`, MNE, BIDS |
| Medical and microscopy imaging | `pydicom`, `SimpleITK`, MONAI, `napari`, `cellpose`, `stardist`, `scikit-image` |
| Geospatial | `geopandas`, `rasterio`, `xarray`, `folium`, `cartopy` |
| Text mining and NLP | `spaCy`, `transformers` (for literature extraction and EHR) |
| Networks | `networkx` |
| Time series and econometrics | `statsmodels`, `prophet`, `sktime` |

### K. Agentic Leverage Layer

What the agent uniquely does inside project context with review, turning a
Python environment into a categorically better Jupyter.

- Describe, code, run, review: the scientist states the analysis in prose; the
  agent writes code, runs it, and shows results for approval, edit, or reject.
- Visual targeting to code edit to rerun (the E loop, agent-driven).
- Explain output: the agent explains a regression table, flags violated
  assumptions, and proposes fixes.
- Code review and diff before running agent-proposed code.
- Reproducible packaging on demand: "make this deposit-ready" produces
  environment, code, data references, figures, and a receipt.
- Natural-language data cleaning with an operation log that is reviewable and
  reversible.
- Method suggestion with references, linked to the project Sources library.
- Error recovery: the agent reads a traceback, proposes a fix, and reruns.
- Literature-aware analysis: "this follows Smith 2023" links the analysis to
  the source.

### L. Connective Tissue — Provenance And Trust

Cross-cuts everything above and is the PRD's central trust requirement.

- Every result, figure, and table links to the data revision, code revision,
  run, environment, and parameters that produced it.
- Staleness propagation: a data or code change flags stale results, figures,
  and manuscript claims.
- Claim-to-evidence: a manuscript claim points at the analysis result that
  supports it.
- Export with provenance: deposit packages include code, environment, data
  references, figures, and receipts.

## Sequencing

1. Qualify the merged results, notebook, data, and handoff workflows. Build
   notebook environment recovery on the existing Python execution foundation.
2. Extend reviewable statistics and the visual edit/rerun loop on top of saved
   datasets, provenance, and figure capture.
3. Add Quarto, wider environment and ML workflows, and reusable pipelines as
   concrete research workflows require them. Keep domain adapters and
   scheduler recovery behind the generic workflow.

## Open Questions And Deferred Decisions

- Which native environment managers and remote-host restoration paths should
  follow the first lockfile workflow?
- Which richer variable summaries, figure representations, and dataset
  codebook features should follow the grid and profile qualification?
- Which statistics, publishing, ML, and domain workflows justify dedicated
  adapters after the generic workbench is qualified?

## Approval Proposal

Approve Python workflow and sequencing as proposed planning scope. Use the
existing Compute, dataset, and figure foundations. Prioritize environment
recovery, reproducible handoff, and agent parity before expanding into
specialized statistics, publishing, and domain workflows.
