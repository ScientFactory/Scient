# Model Benchmark Map

Status: Draft
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Maps what external model benchmarks measure, how trustworthy they are, and how much weight PapiLab should give them.
Doc type: Research evidence

## Document Rules

This document owns external benchmark research across the candidate portfolio. It does not approve models or define PapiLab's internal evaluation methodology.

Portfolio decisions live in `model-portfolio-and-provider-routing.md`. The later PapiLab-owned methodology will live in `../../quality/model-evaluation-methodology.md` when representative workflows and fixtures exist.

## Portfolio Coverage

External benchmark review must cover every current candidate where comparable results exist:

- DeepSeek V4 Flash
- GPT-5.6 Luna
- DeepSeek V4 Pro
- GPT-5.6 Terra
- Qwen 3.7 Plus
- Grok 4.5
- GPT-5.6 Sol

Record missing or non-comparable results instead of treating absence as failure or silently comparing different benchmark versions, prompts, tools, or reasoning settings.

## Required Capability Coverage

| Capability | Initial benchmarks or evidence to inspect | Why PapiLab needs it |
| --- | --- | --- |
| Science and health | GeneBench Pro, LifeSciBench, MedChemBench, HealthBench Professional | Scientific and biomedical reasoning. |
| Citations and evidence | Identify suitable external benchmarks; do not rely on generic factuality scores | Claim support, source fidelity, and citation integrity. |
| Mathematics | FrontierMath and other relevant mathematical evaluations | Quantitative reasoning and research calculations. |
| Data analysis | Identify evaluations for tables, statistics, code-assisted analysis, and interpretation | Data-to-result and data-to-figure workflows. |
| Coding | SWE-Bench Pro, Terminal-Bench, DeepSWE, and relevant coding-agent evaluations | Scripts, analysis code, debugging, and implementation work. |
| Tools and agents | Agents' Last Exam, Toolathlon, AutomationBench, and function-call evaluations | Multi-step work and reliable tool use. |
| Conversation and writing | Identify evaluations for instruction following, dialogue quality, editing, synthesis, and long-form writing | Everyday research collaboration and manuscript work. |
| Long context | MRCR and GraphWalks | Large literature collections and project context. |
| Vision and documents | MMMU Pro, document and PDF evaluations, table and OCR evidence | Figures, tables, scans, screenshots, and complex documents. |

This is an initial research queue, not an endorsement of the listed benchmarks.

## Benchmark Record

For each benchmark, record:

- name, version, owner, date, and primary source;
- what capability it claims to measure;
- task, dataset, domain, and scoring method;
- whether tools, browsing, multiple attempts, or hidden reasoning settings affect the result;
- whether results are independent, vendor-published, private, public, or contamination-prone;
- known limitations and criticism;
- which portfolio models have genuinely comparable results;
- relevance to concrete PapiLab use cases; and
- decision weight: `Primary`, `Supporting`, `Context only`, or `Exclude`.

## Trust Rules

- Do not rank models from one benchmark.
- Compare several benchmarks that measure the same capability differently.
- Do not combine scores from different versions or test conditions as if they were equivalent.
- Treat vendor-published results as useful but lower-confidence until independently reproduced or supported.
- Prefer benchmarks that resemble real PapiLab work, expose their method, and resist contamination.
- Keep benchmark capability separate from cost, privacy, provider reliability, and product fit.

## Later Internal Evaluation

External benchmarks will shortlist models and expose likely strengths. They will not determine final production roles or automatic routing.

In a later phase, PapiLab will build its own replayable evaluation suite around representative scientific projects, evidence and citation work, mathematics, data analysis, coding, tools, conversation, writing, long context, and visual documents. That suite will become the stronger release and routing evidence.
