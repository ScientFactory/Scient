# Scientific Python Environment Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-08-17
Last updated: 2026-08-23
Purpose: Preserves the proposed Python-specific use-case catalog for scientific computing in Scient while deferring implemented architecture, qualification, and sequencing to the accepted `scient-desktop-next` compute ADR.
Doc type: Planning note

## Document Rules

This document is a focused Python use-case companion to the accepted [Product
Requirements Document](../product/PRD.md), the proposed
[Scientific Computing And Data Analysis
Roadmap](scientific-computing-and-data-analysis-roadmap.md), and the accepted
[Stateful Scientific Compute Foundation](https://github.com/ScientFactory/scient-desktop-next/blob/codex/scient-compute-figure-follow-20260821/docs/internals/scient-compute-session-foundation.md)
currently reviewed in draft
[`scient-desktop-next` PR #129](https://github.com/ScientFactory/scient-desktop-next/pull/129).
It owns proposed Python use cases at product depth. It does **not** replace the
compute ADR, select a runtime or data dependency, define a persisted schema,
authorize a T3 divergence, or own implementation sequencing or qualification.

Its status is **Proposed** and it is not accepted product truth. It exists to capture the
Python scope while it is being shaped, not to commit Scient to building it in
this order or at this breadth. Nothing here is product truth until a human
review accepts it.

It coordinates with, but does not duplicate:

- the [Scientific Computing And Data Analysis
  Roadmap](scientific-computing-and-data-analysis-roadmap.md), which preserves
  the proposed cross-language capability catalog and source research;
- the accepted compute ADR, which owns `ComputeSession`, runtime and transport
  ports, persistence, source authority, delivered Phase 0-4 behavior, and
  post-baseline dependency gates; and
- the [Scientific Document Platform
  Roadmap](scientific-document-platform-roadmap.md), which owns universal
  document viewing, mathematics, LaTeX/typesetting, manuscripts, and
  publishing.

### Update Policy

Update this document when the Python use-case scope or accepted/deferred
boundary materially changes. Update implementation and sequencing in the
owning `scient-desktop-next` ADR first. Move accepted cross-repository
architecture into its proper architecture owner and shipped behavior into
`scient-desktop-next/docs/` rather than treating this proposal as either.

## Agentic Premise

The premise that shapes every section below is that researchers and agents
should eventually operate the same project files, compute sessions, outputs,
and review surfaces. The goal is not to rebuild Jupyter inside Scient; it is to
make the things scientists use Python for into first-class, agent-amplified,
reviewable project work while the scientist remains the owner.

Agent compute is not implemented in PR #129. External agents can edit ordinary
project files through their existing project tools, but direct
`ComputeSession` operation remains gated on the accepted operation envelope,
actor attribution, project scope, capability checks, and provider isolation.

The current `scient-desktop-next` candidate proves the Python foundation this
document originally proposed: optional runtime settings and verification, one
stateful project session, file/selection/explicit-cell execution, bounded live
variables, text and traceback output, static PNG/SVG capture, durable history,
interrupt/restart/stop, and file-first Code/Split/Results viewing with full and
floating figure presentation. It is locally owner-accepted on macOS in draft
PR #129; Windows real-kernel evidence, installed packaged-app acceptance,
review, and release approval remain pending.

## Decision Summary

Scient should support one coherent **Scientific Python Environment**, not a
collection of unrelated Python, notebook, dataset, statistics, and
visualization features. The environment should be agent-amplified: agents
write and run the Python, scientists review and own the results, and every
output stays connected to the data, code, run, environment, and claim that
produced it.

The proposed scope spans twelve use-case areas (A–L below). Three form the
initial product keystone, but their implementation state now differs:

1. **Python execution with a stateful kernel** — delivered in the Phase 0-4
   candidate through the language-neutral `ComputeSession` domain.
2. **Inspectable project datasets and bounded structured values** — still a
   first-class gap. File-backed datasets and transient live variables require
   distinct identities even when they share a table renderer.
3. **Matplotlib/seaborn figure capture** — static PNG/SVG capture and viewing
   are delivered; richer representations, interactive formats, safe HTML, and
   portable publication remain post-baseline capabilities.

Use this document to review the proposed Python use-case scope. It does not
request approval of an implementation sequence or reopen the accepted
`ComputeSession`, Python-adapter, transport, persistence, or Phase 0-4
architecture. Post-baseline dependency selections, notebook semantics,
collaboration, and domain-pack choices remain separate decisions.

## Use-Case Landscape

These are the things scientists actually use Python for every day, mapped to
what Scient should provide around an agent that writes the code.

### A. Python Execution Foundation

The equivalent of the existing MATLAB adapter, generalized to the far more
common Python case, plus stateful execution.

- Runtime adapter: extend the delivered `ComputeLanguageAdapter` and runtime
  settings model to discover project and user-selected Python environments,
  then add conda/mamba/uv breadth only through explicit, measured slices.
  `ComputeSession` remains separate from one-shot `AnalysisRun`.
- **Stateful IPython kernel per project** — variables persist across cells and
  runs, like Jupyter or RStudio. This is the largest expectation gap versus
  MATLAB `-batch` and is foundational.
- Execution modes: run `.py` script, run `.ipynb` notebook, run cell, run
  selection, run Quarto `.qmd`.
- Output streaming, cancellation, and process-tree kill (already supported by
  the execution substrate).
- Traceback-to-diagnostics: map Python exceptions to the same diagnostic shape
  used for MATLAB `MException` (file, line, column, frames, related causes) so
  errors render inline against source.
- Long-running and background runs with status and logs.
- Safety policy: authorized local execution runs with the server account's
  filesystem and network authority; project scoping protects Scient's control
  boundaries but is not a sandbox.

### B. Data Layer — Datasets As First-Class Project Objects

Today data lives as anonymous files. Agents writing Python without the
scientist seeing the data is dangerous, so the data layer is a keystone, not an
add-on.

- Ingestion: CSV, TSV, Excel, Parquet, Arrow, JSON, HDF5, NetCDF, Stata, SAS,
  SPSS; REDCap API; SQL via SQLAlchemy or psycopg; REST APIs; DICOM and BIDS;
  images.
- Dataset identity and revision begin from authoritative project files and
  explicit provenance. Do not force file-backed datasets, transient live
  variables, retained compute output, and promoted project results into one
  universal artifact record before their shared behavior is demonstrated.
- Data viewer / variable explorer: a spreadsheet-style grid (VS Code, RStudio,
  or Spyder style) with column types, missingness, filtering, sorting, and
  preview, inspectable by both scientist and agent. This is the surface that
  makes agent-written transforms trustworthy.
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

Static Matplotlib and seaborn output now renders in the file-first Results
experience. The remaining gap is a neutral multi-representation pipeline for
interactive Plotly/Vega/Vega-Lite, structured data, documents, safe HTML, and
later widgets.

- Preserve the delivered Matplotlib/seaborn SVG/PNG capture, immutable inline
  history, ordinary full/floating viewers, and stable follow behavior.
- Point-at-the-visual, agent-edit, rerun loop: the existing browser element
  picker should connect to Matplotlib and Plotly figures so "make this axis
  log scale, add error bars, use a colorblind palette" becomes a reviewed code
  diff and a new figure revision, not a magic pixel drag.
- Figure as artifact with representations: static PNG or SVG, interactive
  Plotly where converted, the underlying data table, and the source code.
- Multi-panel composition through a later accepted shared artifact surface:
  compose Matplotlib and Plotly panels into a publication figure with labels,
  scale bars, captions, and an export receipt.
- Domain visualizations, later: `napari` for images, `geopandas` and `folium`
  for maps, `networkx` for graphs, `pyvista` for 3D.

### F. Reproducibility And Environment

This is where an agentic platform beats a notebook in a vacuum: the agent can
package reproducibility on demand.

- Environment capture: auto-generate `requirements.txt`,
  `environment.yml`, or `pyproject.toml` from the actual run environment; pin
  and lock with `uv`, `pip-tools`, or `conda-lock`.
- Per-project isolated environment (venv, conda, or uv) the agent can recreate.
- Dependency diagnostics: a missing package becomes an agent-proposed install
  in the project environment with approval, paralleling the existing LaTeX
  missing-package recovery.
- Run provenance: each run records Python version, package versions, seed,
  input data revision, code revision, and environment hash.
- Reproducibility check: rerun and diff outputs.
- Containerization (Docker or devcontainer) for hard cases, later.

### G. Notebooks And Reproducible Documents

- Notebook surface: open, edit, and run `.ipynb` (cells, outputs, markdown);
  the agent writes cells, runs them, and proposes edits. Notebook-compatible,
  not a full JupyterLab rebuild.
- Jupytext: notebooks as Markdown or `.py` for clean Git history and agent
  editing.
- Quarto `.qmd`: prose plus Python plus results, rendered to HTML, PDF, or
  Word, composing with the document platform and LaTeX work.
- Cell-level execution and kernel state.
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

## Keystone And Sequencing

The original keystone remains useful as a product-value lens, but it is not a
serial implementation plan. Its current state is:

1. **Python execution with a stateful kernel** (A) — delivered in the Phase 4
   candidate.
2. **Datasets and a data viewer** (B) — still missing and elevated into the
   first post-baseline product program beside runtime onboarding and neutral
   representations.
3. **Matplotlib figure capture** (E) — delivered for static PNG/SVG; interactive
   and document representations remain.

Current sequencing guidance:

- Close and continuously requalify the Phase 4 candidate on current `main`.
- Investigate runtime acquisition and the neutral representation/data contract
  first, then implement bounded user-value slices rather than another broad
  infrastructure branch.
- Begin notebook document/trust work and a real second-language transport proof
  early in parallel; neither waits for every table or renderer.
- Keep agent compute behind the operation envelope and keep portable result
  promotion distinct from private operational history.
- Domain adapters and pipelines-at-scale remain later than dependable ordinary
  analysis, but notebooks, additional languages, interactive figures, and safe
  HTML are first-class product work rather than minor polish.

## Open Questions And Deferred Decisions

- Native notebook document, saved-output, trust, attachment, and round-trip
  semantics over the delivered `ComputeSession` service.
- The first real second-language transport and adapter proof, including exact
  kernel selection independent from any bridge-host runtime.
- Environment management default: `venv`, `conda`, or `uv`, and whether the
  first slice depends on a managed distribution or only discovery of an
  existing interpreter.
- Data viewer scope for the first slice versus a full variable explorer with
  distributions and missingness.
- Where notebooks, Quarto, and the data viewer sit relative to the document
  platform's session and surface model, so Python surfaces do not become a
  parallel document system.
- The operation envelope and review lifecycle required before agents receive
  compute-session capabilities.
- Which domain adapter, if any, is included in a first vertical slice versus
  kept strictly later.

## What This Proposal Is Not

- Not accepted direction. Its status is Proposed.
- Not a selection of a post-baseline environment manager, notebook model,
  data-viewer dependency, collaboration model, or domain pack.
- Not the owner of implementation truth. The implemented Phase 0-4 Python
  baseline and its pending qualification gates live in the accepted compute
  ADR; the remaining use cases here are proposed.
- Not a replacement for the computing roadmap or the document platform. It
  specializes their shared foundations for Python.
- Not a commitment to rebuild Jupyter. The goal is agent-amplified, reviewable,
  provenance-connected Python work, not JupyterLab parity.

## Current Planning Use

Use this proposed document to preserve and evaluate Python use cases. It does
not request approval of an implementation sequence. Current accepted decisions
and delivered behavior are intentionally linked to the compute ADR rather than
duplicated here:

1. **Category:** Scientific Python Environment.
2. **Boundary:** the Python-specific scope across execution, data,
   exploration, statistics, visualization, reproducibility, notebooks,
   pipelines, ML, domain adapters, agentic affordances, and provenance,
   subordinate to the accepted PRD and the proposed computing roadmap.
3. **Keystone:** preserve stateful Python execution and static figure capture;
   elevate datasets and bounded structured inspection as the missing keystone.
4. **Sequencing:** follow the accepted ADR's dependency gates, with notebooks
   and a second language receiving early architecture proofs rather than being
   placed behind every data or visualization capability.
5. **Durable foundation:** extend `ComputeSession`, its adapter/transport ports,
   neutral representations, ordinary project files, and explicit result
   promotion rather than building Python-specific substitutes.
6. **Not yet approved:** a post-baseline environment manager, notebook model,
   data-viewer dependency, collaboration model, or any domain dependency.

Do not use this catalog to approve an environment manager, notebook engine,
data-viewer dependency, statistics or ML dependency, workflow engine, or
domain-pack selection.
