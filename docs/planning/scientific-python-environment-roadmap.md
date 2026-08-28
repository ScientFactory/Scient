# Scientific Python Environment Roadmap

Status: Proposed
Owner: Yaacov
Created: 2026-08-17
Last updated: 2026-08-28
Purpose: Proposes the full Python-specific scope Scient should support around an agentic platform where agents write and run Python inside a project, grounded in the everyday use cases scientists actually have for Python rather than in language-agnostic architecture.
Doc type: Planning note

## Document Rules

This document is a focused Python companion to the accepted [Product
Requirements Document](../product/PRD.md) and the proposed
[Scientific Computing And Data Analysis
Roadmap](scientific-computing-and-data-analysis-roadmap.md). It elaborates the
Python-specific scope at use-case depth. It does **not** replace the computing
roadmap, select a runtime dependency, define an exact persisted schema,
authorize a T3 divergence, or claim that its proposed Python capabilities are
implemented.

Its status is **Proposed**. It exists to capture the
Python scope while it is being shaped, not to commit Scient to building it in
this order or at this breadth. Nothing here is product truth until a human
review accepts it.

It coordinates with, but does not duplicate:

- the [File, Resource, And Presentation
  Foundation](file-resource-and-presentation-foundation.md), which owns file
  identity, relocation, presentation selection, shared viewer states, and
  broad read-only coverage;
- the [Scientific Computing And Data Analysis
  Roadmap](scientific-computing-and-data-analysis-roadmap.md), which owns the
  language-agnostic execution coordinator, project/dependency resolver,
  `AnalysisRun`, datasets, environments, and the adapter port this document
  specializes for Python;
- the [Scientific Artifact
  Studio](scientific-artifact-studio.md), which owns artifact inspection,
  multi-representation figures, composition, manual/agent operations, and
  publication export; and
- the [Scientific Document Platform
  Roadmap](scientific-document-platform-roadmap.md), which owns universal
  document viewing, mathematics, LaTeX/typesetting, manuscripts, and
  publishing.

### In-Flight Implementation Overlay

Current desktop `main` still has no first-party Python session product. Draft
[PR #129](https://github.com/ScientFactory/scient-desktop/pull/129), inspected
at remote head `4955966dc6731a262d839a13ced8faf40390384c` on 2026-08-28,
is a substantial in-flight candidate rather than merely a design proposal. It
implements the stateful Python keystone, bring-your-own runtime verification,
exact submitted-source provenance, durable compute history, file/selection/
`# %%` execution, bounded variables, static figures, generated project-image
capture, and the first neutral retained-representation foundation.

This overlay governs the prospective wording below: it does not make the PR
current product truth, but it prevents this roadmap from authorizing a second
kernel/session/store/results implementation. If PR #129 is accepted, Python
planning continues from its `ComputeSession` contracts into runtime acquisition,
datasets, richer representations, notebooks, reproducibility, and domain work.
If it is rejected, record the failing requirements and the reusable/rejected
parts before replacing it. Separate unpublished local candidates are evidence
to preserve and review, not dependencies this repository can assume.

### Update Policy

Update this document when the Python scope, keystone assumptions, sequencing,
or accepted/deferred boundary materially changes. Move accepted architecture
into `docs/architecture/` and shipped behavior into
`scient-desktop/docs/` rather than treating this proposal as either.

## Agentic Premise

The target premise that shapes every section below is that manual and agent
work should use the same project files, execution records, artifacts, review,
and recovery. Current Scient `main` can edit project code and its MATLAB lane
proves reviewable runtime/artifact mechanics, but it does not yet ship a
first-party Python execution lane or the complete durable scientific-project
lifecycle. PR #129 supplies the in-flight stateful Python candidate described
above. The goal is not to rebuild Jupyter inside Scient; it is to make the
things scientists reach for Python to do every day into first-class,
agent-amplified, reviewable project work while the scientist remains the owner.

The active `scient-desktop` baseline already proves the foundation
pattern this document specializes: a MATLAB analysis adapter with runtime
discovery/verification, per-runtime queues, restart recovery, figure capture
as native + static representations, and diagnostics mapped from the language's
native errors; interactive Plotly and Vega-Lite rendering in chat; KaTeX math;
and a LaTeX build subsystem. Python is the most common scientific language and
the natural next adapter, with one critical addition MATLAB batch mode does
not provide: stateful interactive execution.

## Decision Summary

Scient should support one coherent **Scientific Python Environment**, not a
collection of unrelated Python, notebook, dataset, statistics, and
visualization features. The environment should be agent-amplified: agents
write and run the Python, scientists review and own the results, and every
output stays connected to the data, code, run, environment, and claim that
produced it.

The proposed scope spans twelve use-case areas (A–L below). Three are
foundational, and the rest compose on top of them:

1. **Python execution with a stateful kernel** — PR #129 is the current
   implementation candidate: a separate persistent `ComputeSession`, rather
   than a mode of the isolated analysis adapter, keeps variables across
   executions. Qualification and merge remain pending.
2. **Datasets as first-class, inspectable project objects** — with a data
   viewer / variable explorer. Agents writing Python against data the
   scientist cannot inspect is the single biggest trust failure.
3. **Matplotlib/seaborn figure capture** — the lingua franca of scientific
   Python, and the entry point for the "point at the visual, ask the agent"
   edit-rerun loop. Interactive Plotly/Vega-Lite already render in chat.

Approve this document as a Python scope and sequencing direction only. Do not
yet approve a kernel implementation, package layout, persisted schema,
collaboration model, or domain-pack selection.

## Use-Case Landscape

These are the things scientists actually use Python for every day, mapped to
what Scient should provide around an agent that writes the code.

### A. Python Execution Foundation

The equivalent of the existing MATLAB execution capability, generalized to the
far more common Python case, but with a deliberately separate stateful-session
record.

- Runtime discovery: find `python`, `conda`, `mamba`, `uv`, and `venv` on
  macOS, Windows, and Linux; verify version, key packages, and architecture;
  configure the selected interpreter. Reuse the provider/process primitives in
  `@scientfactory/execution`, not the one-shot `AnalysisRuntimeAdapter` record.
- **Stateful IPython kernel per project** — variables persist across cells and
  runs, like Jupyter or RStudio. PR #129's `ComputeSession` is the current
  implementation candidate and must remain distinct from MATLAB `AnalysisRun`.
- Execution modes: run `.py` script, run `.ipynb` notebook, run cell, run
  selection, run Quarto `.qmd`.
- Output streaming, cancellation, and process-tree kill (already supported by
  the execution substrate).
- Traceback-to-diagnostics: map Python exceptions to the same diagnostic shape
  used for MATLAB `MException` (file, line, column, frames, related causes) so
  errors render inline against source.
- Long-running and background runs with status and logs.
- Safety policy: approved local execution, with network and file-write scope
  per project and environment.

### B. Data Layer — Datasets As First-Class Project Objects

Today data lives as anonymous files. Agents writing Python without the
scientist seeing the data is dangerous, so the data layer is a keystone, not an
add-on.

- Ingestion: CSV, TSV, Excel, Parquet, Arrow, JSON, HDF5, NetCDF, Stata, SAS,
  SPSS; REDCap API; SQL via SQLAlchemy or psycopg; REST APIs; DICOM and BIDS;
  images.
- Dataset identity and revision, sharing only genuinely generic identity and
  revision primitives with artifacts: a dataset is a distinct durable project
  object with provenance, schema, and version, not just a path or an artifact
  subtype.
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

Interactive Plotly and Vega-Lite already render in chat. The largest gap is
Matplotlib and seaborn, the lingua franca of scientific Python.

- Matplotlib and seaborn adapter: capture figures as SVG and PNG (and
  interactive where convertible), with code, data, and run provenance,
  mirroring how the MATLAB adapter captures `.fig` and `.png`.
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

If the dependency graph of A–L is drawn, three areas are foundational and the
rest compose on top of them:

1. **Python execution with a stateful kernel** (A) — without execution nothing
   else exists. PR #129 is the current candidate and keeps stateful
   `ComputeSession` separate from isolated MATLAB `AnalysisRun`.
2. **Datasets and a data viewer** (B) — agents writing Python against
   uninspectable data is the largest trust failure; first-class inspectable
   data is what makes agent-written transforms reviewable.
3. **Matplotlib figure capture** (E) — closes the largest visualization gap
   (interactive Plotly and Vega-Lite already render) and is the entry point for
   the point-at-visual agent loop.

Suggested ordering if the in-flight foundation is accepted:

- qualify A and the already implemented static portion of E, then add B rather
  than rebuilding A;
- Statistics results as artifacts (D) and the visual-edit loop (E) as the first
  capabilities that exploit the execution/data/figure foundation.
- Notebooks (G), reproducibility (F), and ML workflows (I) next.
- Domain adapters (J) and pipelines-at-scale (H) only after the generic
  workbench already handles ordinary analysis well.

## Open Questions And Deferred Decisions

- Whether PR #129's one-live-session-per-project policy, Jupyter bridge,
  persistence limits, and bring-your-own-runtime model pass current-main,
  Windows, packaged-app, and release gates without material redesign.
- How the stateful `ComputeSession` candidate and isolated `AnalysisRun` action
  should be presented together without conflating their receipts or promises.
- Environment management default: `venv`, `conda`, or `uv`, and whether the
  first slice depends on a managed distribution or only discovery of an
  existing interpreter.
- Data viewer scope for the first slice versus a full variable explorer with
  distributions and missingness.
- Where notebooks, Quarto, and the data viewer sit relative to the document
  platform's session and surface model, so Python surfaces do not become a
  parallel document system.
- How agent-proposed code execution is approved in the first implementation,
  and which reviewed-operation lifecycle should be shared with later document
  and artifact proposals.
- Which domain adapter, if any, is included in a first vertical slice versus
  kept strictly later.

## What This Proposal Is Not

- Not accepted direction. Its status is Proposed.
- Not a selection of a kernel implementation, package layout, persisted
  schema, environment manager, collaboration model, or domain pack.
- Not a claim that the in-flight candidate is shipped. The implemented `main`
  baseline today is the MATLAB adapter, Plotly and Vega-Lite chat rendering,
  KaTeX math, and the LaTeX build subsystem; PR #129 is separately identified
  above.
- Not a replacement for the computing roadmap, the artifact studio, or the
  document platform. It specializes their shared foundations for Python.
- Not a commitment to rebuild Jupyter. The goal is agent-amplified, reviewable,
  provenance-connected Python work, not JupyterLab parity.

## Approval Proposal

Approve for focused architecture and implementation planning only:

1. **Category:** Scientific Python Environment.
2. **Boundary:** the Python-specific scope across execution, data,
   exploration, statistics, visualization, reproducibility, notebooks,
   pipelines, ML, domain adapters, agentic affordances, and provenance,
   subordinate to the accepted PRD and the proposed computing roadmap.
3. **Keystone:** qualify PR #129's stateful Python and static-figure candidate;
   add datasets with a data viewer as the largest unimplemented keystone.
4. **Sequencing:** candidate qualification first; datasets, richer
   representations, statistics-as-artifacts, and the visual-edit loop next;
   notebooks, reproducibility, and ML after; domain adapters and scale last.
5. **Durable foundation:** reuse and specialize the existing analysis adapter
   port, execution substrate, and analysis-artifact seams; define reviewed
   operations with the document/artifact owners rather than building parallel
   Python-specific substitutes.
6. **Not yet approved:** merging or releasing PR #129, a managed environment,
   collaboration model, data-viewer dependency, notebook product, or any domain
   dependency.

Do not approve yet: PR #129 release acceptance, an environment manager, a
notebook engine, a data-viewer dependency, a statistics or ML dependency, a
workflow engine, or any domain-pack selection.
