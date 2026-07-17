# Model Portfolio And Provider Routing Evaluation

Status: Draft
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Tracks Scient's candidate model portfolio and the distinct value each model must prove before selection.
Doc type: Research evidence

## Document Rules

This is a candidate portfolio, not an accepted model registry or implemented routing policy. It is adapted from a dated Scient_2026 review. Model names, capabilities, prices, availability, and provider terms must be rechecked before a decision.

Access priorities live in `../../planning/model-access-and-routing-evolution.md`. External benchmark analysis lives in `model-benchmark-map.md`. Future routing architecture belongs in `../../architecture/agent-runtime.md`.

## Access Boundary

This curated portfolio applies primarily to Scient-managed access. Provider-connected and bring-your-own-key users may choose from the broader set of models Scient can support through their provider.

## Current Candidate Portfolio

| Model | Candidate role | Distinct use case |
| --- | --- | --- |
| DeepSeek V4 Flash | Fast and inexpensive | Summaries, rewriting, extraction, classification, and low-risk background work. |
| GPT-5.6 Luna | Everyday default | General research, writing, tools, coding, and long-document work. |
| DeepSeek V4 Pro | Scientific value | High-volume synthesis, evidence-table reasoning, complex extraction, and tool-heavy tasks. |
| GPT-5.6 Terra | Advanced research | Large scientific synthesis and very long-context work when Luna may be insufficient but Sol is unnecessarily expensive. |
| Qwen 3.7 Plus | Vision and documents | Figures, tables, scans, screenshots, and visually complex documents. |
| Grok 4.5 | Strong agent | Difficult multi-step work, coding, and complex tool orchestration. |
| GPT-5.6 Sol | Premium | The hardest scientific synthesis, protocol work, and high-stakes second passes. |

Keep all seven in consideration until the broader review is complete. Refine, remove, or add models only when comparison shows a clearer use case, better value, or a missing capability.

## Selection Standard

Every Scient-managed model should add a real role. Compare candidates on:

- scientific faithfulness and citation integrity;
- mathematical and quantitative reasoning;
- data analysis and interpretation;
- coding, agent, and tool reliability;
- conversation and writing quality;
- text, vision, document, and long-context capabilities;
- privacy and provider terms;
- latency and operational reliability; and
- effective cost per successful task.

Vendor claims, single benchmark scores, and headline token prices are not enough. Use the benchmark map to understand external evidence, then select exact models and routes from Scient-specific use cases and later internal evaluations.

## Routing Direction

Begin with manual choice. Later, evaluate recommendations and automatic routing across eligible models and access sources. Model identity, provider route, reasoning level, charging source, and fallbacks must remain explicit.

## Next Research

1. Recheck the seven candidates against primary sources.
2. Map relevant external benchmarks across every candidate.
3. Look for missing roles before adding more models.
4. Define the later Scient-owned evaluation suite.
5. Compare alternatives, then retain only models with distinct value.
