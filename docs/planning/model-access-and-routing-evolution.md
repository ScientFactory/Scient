# Model Access And Routing Evolution

Status: Draft
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Tracks the rollout priorities and unresolved commercial choices for how PapiLab users access and select models.
Doc type: Planning note

## Document Rules

This document owns sequencing and open product choices. The accepted access requirement lives in `../product/PRD.md`; model comparisons live in `../research/source-evaluations/model-portfolio-and-provider-routing.md`; future runtime details belong in `../architecture/agent-runtime.md`.

## Priority 1: Initial Access

Launch with all three access paths:

1. **Provider-connected access** - connect a supported official provider account or subscription where the provider permits third-party use.
2. **Bring your own API key** - the user supplies provider credentials and pays that provider directly.
3. **PapiLab-managed access** - PapiLab pays providers and gives users access through a PapiLab plan.

Start with manual model choice. Always show the access source, provider, and model that will be used.

For PapiLab-managed access, the commercial options remain open:

- subscription with included usage;
- credits or pay-as-you-go;
- tiered plans; or
- a hybrid.

## Evaluation Phases

### Phase 1: External Benchmark Review

Before refining the portfolio, map several relevant benchmarks across all candidates. Record what each benchmark measures, how it is scored, its limitations, and how much decision weight it deserves. Cover science, citations and evidence, mathematics, data analysis, coding, tools and agents, conversation and writing, long context, and vision or document work.

This research belongs in `../research/source-evaluations/model-benchmark-map.md` and does not by itself approve a model.

### Phase 2: PapiLab-Owned Evaluation

Later, after PapiLab has concrete workflows and representative fixtures, build a replayable internal evaluation suite. It must test real PapiLab work and is required before final production role labels or automatic routing. The methodology will belong in `../quality/model-evaluation-methodology.md` when that later phase starts.

## Priority 2: Recommendations And Automatic Routing

Add task-aware recommendations, then an optional automatic router. The router should choose the lowest-cost eligible model expected to meet the task's quality, capability, privacy, tool, reliability, and latency requirements.

Do not enable automatic routing from external benchmark scores alone. It requires the later PapiLab-owned evaluation suite.

Routing may use provider-connected access, bring-your-own-key access, PapiLab-managed access, or an explicitly approved combination. The selected route, charging source, reason, and any fallback must be visible.

## Priority 3: Reassess Provider-Subscription Access

After real use, reconsider whether connecting consumer provider subscriptions remains reliable and worth supporting. PapiLab may later remove that path if provider terms, technical fragility, support burden, or user experience make it inferior to bring-your-own-key and PapiLab-managed access.

Do not remove it silently or assume today that every provider subscription supports third-party use.

## Open Decisions

- Which official provider subscriptions can PapiLab support legitimately and reliably?
- Which PapiLab-managed billing option best matches real usage and cost risk?
- Should automatic routing use user-connected and PapiLab-managed access together?
- What controls, receipts, and budget limits are required before automatic routing?
- When would provider-subscription access be deprecated?
