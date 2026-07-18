# LitRev Coherence And Architecture Review (2026-06-28 Snapshot)

Status: Draft
Owner: Yaacov
Created: 2026-07-07
Last updated: 2026-06-28
Purpose: Records a deep coherence, alignment, and consistency audit of the LitRev planning documents, a decision-by-decision architecture review, and a concrete set of proposed fixes, as a dated snapshot.
Doc type: Research evidence

## Document Rules

This document is a dated audit snapshot taken on 2026-06-28. It is research evidence and planning input. It is not product truth, accepted architecture, or an implementation plan.

It records findings about how well the existing documents agree with each other, a verdict on each major decision, and proposed fixes. The proposed fixes are recommendations, not accepted changes. Nothing here becomes canonical until it is promoted into its owning document:

- product truth into `docs/product/`,
- accepted architecture direction into `docs/architecture/`,
- hard-to-reverse decisions into `docs/architecture/decisions/`,
- planning into `docs/planning/`.

As a snapshot, this report is not maintained as a live tracker. When its findings are acted on, the work and any ongoing tracking belong in the owning documents (and in `docs/planning/product-planning.md` for open questions), not here. A later audit should be a new dated snapshot rather than an edit of this one.

### Revision Note

This is revision 2, produced 2026-06-28 after an external review (Codex) of revision 1. Changes from revision 1: F1 narrowed to a principle-only scope that does not freeze object vocabulary; F16 reworded so planning links rather than owns open questions; F6 and F7 rescoped to architecture/planning first; tool- and license-specific claims marked as needing primary-source verification, with the Overleaf license claim verified; the report relocated from `docs/research/` to a dated file under `docs/research/spike-reports/`.

## Source Set Reviewed

Inspected on 2026-06-28, all in `/Users/yaacov/REPOs/LitRev`:

- `README.md`, `AGENTS.md`
- `docs/README.md`, `docs/documentation-policy.md`
- `docs/product/PRD.md`, `docs/product/product-philosophy.md`, `docs/product/README.md`
- `docs/architecture/technology-stack.md`, `docs/architecture/security-and-permissions.md`, `docs/architecture/README.md`
- `docs/architecture/project-format.md`, `docs/architecture/local-first-sync.md`, `docs/architecture/collaboration-model.md`, `docs/architecture/agent-runtime.md`
- `docs/architecture/decisions/README.md`, `docs/architecture/decisions/ADR-template.md`
- `docs/planning/product-planning.md`, `docs/planning/README.md`
- `docs/research/source-evaluations/open-source-adaptation-map.md`, `docs/research/source-evaluations/source-evaluation-template.md`, `docs/research/source-evaluations/README.md`
- `docs/research/spike-reports/litrev-2026-vnext-transfer-report-2026-06-27.md`, `docs/research/spike-reports/README.md`, `docs/research/README.md`
- `docs/quality/testing-philosophy.md`, `docs/quality/code-quality-principles.md`, `docs/quality/README.md`
- `docs/design/product-design-principles.md`, `docs/design/README.md`
- `docs/development/typescript.md`, `docs/development/README.md`
- `docs/operations/README.md`
- `skills/README.md`, `skills/product/litrev-product-stewardship/SKILL.md`

Line numbers cited below reflect the files as inspected on 2026-06-28.

### Evidence Status Of Tool-Specific Claims

Some findings below characterize external tools (for example GROBID's runtime footprint, and the relative roles of PowerSync and Electric). Those characterizations come from general knowledge and were **not** verified against primary sources during this audit. They are marked "needs verification" where they appear and should be confirmed (with source links and inspection dates) before they drive any decision, per `docs/documentation-policy.md` 81-92. The one license claim that has been verified is recorded as such.

## Overall Verdict

This is an unusually disciplined planning repository. The governance layer (`documentation-policy.md` → `AGENTS.md` → the product stewardship skill) is internally coherent, and one principle recurs faithfully across the PRD, stack, security, code-quality, testing, and open-source map:

> LitRev owns scientific truth. Everything external is an adapter, engine, projection, or export.

That spine is the repo's greatest strength. The weaknesses are not contradictions of philosophy. They are places where the philosophy has not yet been pushed through to its hard architectural consequences, plus freshness drift between documents written on the same day.

The single most load-bearing principle (the truth boundary) currently lives only in a "Proposed" research document and in stack prose. By the repo's own promotion rules the *principle* deserves to be captured as a decision — but only the narrow principle, not the not-yet-stable object vocabulary that accompanies it. That distinction is the main correction in this revision.

---

## Part 1 — Overall Architecture And Decision-By-Decision Review

This section reviews every material decision currently recorded in the repo, with a verdict and the condition under which the verdict holds. Status values are taken from the source documents.

### 1.1 Product-level decisions (from `docs/product/PRD.md` and `product-philosophy.md`)

| Decision | Source status | Verdict | Note |
|---|---|---|---|
| Product center is the durable research project, not chat | Accepted | Sound | Repeated and protected consistently across all docs. The strongest product commitment. |
| Agentic-first but researcher-owned; manual surfaces are a reliability requirement | Accepted | Sound | Well-defended; this is what keeps the agent from becoming the product. |
| Traceable scientific work; unknown stays unknown | Accepted | Sound | Mirrored verbatim in `security-and-permissions.md` and the open-source map non-negotiables. Strong coherence. |
| Local-first, cloud-mirrored, collaborative, versioned | Accepted | Sound but under-specified | The product promise is clean; the architectural consequences (A1, A5) are the hard part and unresolved. |
| Broad target users (PhD, postdoc, clinician-researcher, teams) | Accepted | Sound, one gap | No explicit "who this is not for." See Fix F12. |
| Connected outputs; open research ecosystem; external tools as adapters | Accepted | Sound | Consistent with the truth boundary. |
| Deferred scope / non-goals (no full Zotero/Overleaf/Jupyter/ELN replacement) | Accepted | Sound | Clear and disciplined. |
| Eight open product questions left explicitly open | Accepted | Sound | Honest. Overlaps with planning and security lists; see Fix F16. |

### 1.2 Stack decisions (from `docs/architecture/technology-stack.md`)

| # | Decision | Status | Verdict | Condition / risk |
|---|---|---|---|---|
| 1 | TypeScript as product language | Proposed | Sound | Low risk. |
| 2 | React as UI framework | Proposed | Sound | Low risk. |
| 3 | Electron desktop first; Tauri deferred | Proposed first choice | Sound | Correctly justified by the requirement set. Footprint risk when combined with #5, #14, #15 (B1). |
| 4 | Web app in React, likely Next.js, as "another client" | Proposed | Needs a product/architecture decision first | A browser cannot hold a local-first project. Authority relationship to local-first is unresolved (A2). |
| 5 | SQLite locally; per-project DB plus global app-state DB | Proposed | Sound intent, hard sync consequence | Per-project DBs vs a single cloud Postgres is the deepest sync risk (A5). |
| 6 | Drizzle or Kysely data layer | Proposed | Reasonable | Defer until schema exists; not hard to reverse. |
| 7 | Postgres as cloud DB | Proposed | Sound | Commitment is to Postgres, not Supabase-specifics. Good. |
| 8 | Supabase as initial cloud platform candidate | Initial default candidate | Sound, correctly hedged | No contradiction with the transfer report's "no Supabase-specific lock-in." |
| 9 | Local FS + cloud object storage for large assets | Proposed | Sound | S3/R2 kept open. Good. |
| 10 | Local-first sync, engine undecided (PowerSync/Electric/own) | Under evaluation | Highest-risk open item, honestly labeled | The two engines likely solve different halves (offline-write vs read/live-view); roles need verification (A5). |
| 11 | Convex rejected as primary DB/sync | Proposed | Sound | Consistent with portable-local-state requirement. |
| 12 | CRDT only for doc-like surfaces (Yjs candidate); not the whole DB | Proposed | Sound | Correct boundary. Convergence with #10 and #9 is the open problem (A1). |
| 13 | Layered versioning (domain history + snapshots + Git + CRDT history) | Proposed | Sound in principle, unproven in convergence | Three histories must roll up into one restore point (A1). |
| 14 | OpenCode first executor spike; Codex safety ref; Goose eval | Proposed | Sound but mislabeled layer | Stack treats Goose as an executor alternative; the map treats it as the substrate layer above executors (A4). |
| 15 | Python via uv as scientific runtime; R later | Proposed | Sound | Polyglot boundary adds IPC and sandbox complexity (B2). |
| 16 | Rust selectively, behind TS interfaces, deferred | Deferred | Sound | Good restraint. |
| 17 | ProseMirror/Tiptap-family editor | Candidate | Sound | Tiptap-JSON-as-projection rule is consistent across docs. |
| 18 | Auth under evaluation (Supabase Auth / Better Auth) | Under evaluation | Appropriately deferred | Requirements (membership, revocation, attribution) are named. |
| 19 | License policy: prefer MIT/Apache/BSD/MPL, avoid AGPL | Stated | Sound | Not yet applied to the open-source map candidates (C2). |
| 20 | Explicit non-decisions list | Stated | Excellent practice | Keeps proposals honest. |
| 21 | Deferred choices list | Stated | Excellent practice | |
| 22 | Narrow validation slice | Stated | Sound | Should explicitly name the per-project-DB↔Postgres topology as the risk it retires (A5). |

### 1.3 Research-direction decisions (from `docs/research/source-evaluations/open-source-adaptation-map.md`)

These are research directions, not accepted architecture. Verdicts are about whether the direction is well-reasoned, not whether the tool is chosen.

| Area | Current direction | Verdict | Condition |
|---|---|---|---|
| Truth boundary (canonical model vs adapter/projection/export/log) | Defined | Excellent; the narrow principle should be promoted to an ADR | This is the conceptual backbone (A3); do not freeze object vocabulary with it. |
| Agent substrate vs executor | Goose substrate; OpenCode/Codex executors | Sound, conflicts with stack labeling | Reconcile with stack (A4). |
| Evidence ingestion: GROBID + Docling | Sidecars | Sound on quality, unresolved on local footprint | GROBID's runtime footprint vs local-first desktop needs verification (B1). |
| Scientific QA/RAG: PaperQA | Engine/reference | Sound | Persistence must re-derive into LitRev objects. |
| Screening: ASReview | Source candidate | Sound | Model must not silently decide inclusion. |
| Editor shootout: Tiptap/Plate/Lexical | Tiptap first | Sound | Projection-not-truth maintained. |
| Citations: Zotero/JabRef/CSL | First-class kernel requirement | Sound | Reinforced by transfer-report market analysis. |
| Publishing: Quarto/Pandoc first, MyST challenger | Prototype | Sound | Export as artifact DAG; keep internal model separate. |
| Schema/provenance: Stencila | Deep evaluation | Sound | Translate into LitRev objects before adoption. |
| Analysis: marimo-inspired + DuckDB + pandas/Polars + Arrow/Parquet | Primary prototype | Sound and well-linked | Most evidence-backed lane (see C1 for the inversion problem). |
| Figures: multi-lane (Matplotlib/Plotly/Altair + tables) | Direction | Sound but over-developed for its risk tier (C1) | |
| Collaboration/sync: split into 3 problems | Direction | Sound framing | The convergence of the 3 is still the open problem (A1). |

### 1.4 Architecture homes that are still placeholders

`project-format.md`, `local-first-sync.md`, `collaboration-model.md`, and `agent-runtime.md` are all placeholders. This is honest, but note that the four hardest and most coherence-critical problems (project format, sync convergence, collaboration conflict semantics, agent runtime) all currently have no real home. The two most urgent to promote are `local-first-sync.md` (A1, A5) and a narrow truth-boundary ADR (A3).

### 1.5 Governance and meta-docs

| Doc | Verdict |
|---|---|
| `documentation-policy.md` | Strong, internally consistent. One defined-but-unused doc type ("Quality doctrine"). One unstated carve-out for skill frontmatter. |
| `AGENTS.md` | Strong, except one machine-specific absolute path embedded in a shared doc (E1 / F14). |
| Product stewardship skill | Well-aligned with the policy; correctly subordinate to the canonical docs. |

---

## Part 2 — Coherence, Stack, And Open-Source-Map Findings

Findings are ranked by impact within each group. IDs are stable so fixes in Part 3 can reference them.

### A. Cross-cutting coherence findings

**A1 — "One unified project history" (product) vs three independent sync/versioning mechanisms (stack). Highest technical-coherence risk.**
The PRD promises one inspectable history with snapshots, rollback, diffs, and recovery across everything (`docs/product/PRD.md` 388-396). The stack specifies three convergence mechanisms: CRDT/Yjs for documents (`technology-stack.md` 144-158), DB sync for structured state (128-142), object storage for files (111-126), plus layered versioning (162-171). Nothing yet explains how a Yjs edit, a SQLite row change, and an object-storage file revision roll up into one project timeline and one restore point. "Restore the project to last Tuesday" is easy to promise and hard to deliver across three systems. `local-first-sync.md` is still a placeholder, so the hardest problem has no home.

**A2 — Local-first ownership (product) vs a Next.js web client (stack). Unresolved authority question.**
The PRD makes local ownership the source of truth (`PRD.md` 56-58). The stack proposes a web app as "another client of the LitRev cloud/project model" (`technology-stack.md` 84-87). A browser cannot hold the local-first SQLite project, so a web-only collaborator necessarily treats the cloud mirror as authoritative for them. Either the web app is a read/review projection or web users get a cloud-authoritative variant that contradicts local-first. The working-out belongs in architecture; it reaches the PRD only if it changes the product contract (which it plausibly does, since it bears on who can own canonical state).

**A3 — The most load-bearing principle lives only in research evidence and prose, never promoted.**
The truth boundary is asserted in the open-source map (`open-source-adaptation-map.md` 76-90, status Proposed) and stack prose (`technology-stack.md` 27-30). The repo's promotion rules (`documentation-policy.md` 104-116) say a hard-to-reverse principle this central belongs in a decision. `decisions/` holds only a template. Promote the **narrow principle** (LitRev owns canonical project truth; external state is adapter/projection/export/log) — not the accompanying object vocabulary, which is not yet stable (Fix F1).

**A4 — Goose's role differs between two key docs.**
The map separates a local agent substrate/daemon (Goose as the leading reference) from executors (OpenCode/Codex) (`open-source-adaptation-map.md` 110-122). The stack table flattens this to "Agent executor: OpenCode" with "alternatives: Goose, Codex" (`technology-stack.md` 44-45), treating Goose as a fungible executor swap. Reconcile to a substrate / executor / adapter-role framing (Fix F3).

**A5 — Per-project SQLite ↔ single cloud Postgres is the deepest unproven assumption and is not flagged as such.**
The stack mandates per-project SQLite for portability (`technology-stack.md` 96-98). Sync engines such as PowerSync/Electric generally assume one logical Postgres↔client mapping; syncing many independent project DBs into one cloud with per-project row-level security is exactly where they may not fit. The stack reads as if PowerSync suits bidirectional offline writes while Electric is read/live-view oriented (137-138), but the summary table (43) lists them as interchangeable alternatives. *Needs verification:* the exact write-path models of PowerSync and Electric should be confirmed from primary sources before this characterization drives a decision. The validation slice (286-299) targets this but should name it as the central risk (Fix F2).

**A6 — The transfer report's PRD recommendations are largely stale; five of six already landed in PRD v1.**
The transfer report (Last updated 2026-06-28) lists six "highest-value minimal PRD refinements" and says it would not add five of them today (`litrev-2026-vnext-transfer-report-2026-06-27.md` 394-403). Five are already in the accepted PRD v1 (also dated 2026-06-28):

- evidence-linked vs auxiliary citations → already at `PRD.md` 342
- duplicate-safe identity + receipts → already at `PRD.md` 260
- visible context receipts → already at `PRD.md` 358
- import-fidelity honesty → already at `PRD.md` 350
- memory is not summaries → already at `PRD.md` 374

Only the sixth (blank/guided/sample project entry) is genuinely absent from the PRD. The report's "Current PRD Review" and "Recommended Next Direction" sections will mislead the next reader into re-adding accepted material (Fix F4).

**A7 — Object-vocabulary drift between the PRD and the research map.**
The PRD deliberately uses the broad term "source" and "analysis run" / "agent run" (`PRD.md` 232). The map's canonical-model lists use "Paper," "Analysis," and "AgentAction" (`open-source-adaptation-map.md` 82, 98, 358-364). Because the map's Prototype Step 0 is "define the first version of LitRev objects," the schema risks being bootstrapped from the narrower Paper-centric vocabulary, which is the literature-review gravity the transfer report warns against. The fix aligns wording toward the PRD's broader terms without claiming the vocabulary is final (Fix F9). This is closely related to A3/F1: the vocabulary is not yet stable, so it must not be frozen by either the ADR or this reconciliation.

### B. Deep stack analysis

Sound and well-reasoned: Electron-first with Tauri deferred and Rust-behind-TS-interfaces; the TS-owns-product / Python-owns-science split; Supabase hedged to Postgres + object storage; Tiptap-as-projection. The explicit non-decisions and deferred-choices lists are excellent discipline.

Under-examined risks:

**B1 — Cumulative native footprint vs local-first desktop.**
Electron + bundled Python (uv) + native DuckDB + native SQLite + agent CLIs + GROBID is a potentially large multi-runtime distribution. The map calls GROBID a "sidecar candidate" (`open-source-adaptation-map.md` 180). *Needs verification:* GROBID's actual deployment footprint and runtime requirements on an end-user laptop should be confirmed from primary sources; the concern is that a server-style sidecar conflicts with a lightweight local-first desktop install. There is no explicit "what runs locally vs cloud vs optional" story (Fix F8).

**B2 — Agentic-first + local Python + sensitive data is a serious local attack surface.**
The security doc says LitRev may hold clinical/patient-derived/regulated data (`security-and-permissions.md` 36) and run agent-written code and CLIs locally. The security doc handles this honestly as open questions and insists unsupported sensitive data be explicitly excluded rather than accepted by silence — good. But the PRD invites clinician-researchers and regulated data without cross-referencing that gating, and a PRD reader will not see the caveat (Fix F7 includes a PRD cross-reference).

**B3 — Model-provider lock-in is the one lock-in axis the philosophy never names.**
`product-philosophy.md` 13 enumerates "vendor, subscription, closed platform, or external data model" but never model provider, which for an agentic-first product is the most consequential lock-in. The stack has no AI/model-strategy section: provider portability, BYO-key vs hosted, cost surfacing, and offline-agent behavior are all absent (Fix F7).

### C. Deep open-source-adaptation-map analysis

This is the strongest document in the repo. The Truth Boundary table, do/don't-adopt columns, honest depth-status labels, the risk-ordered Prototype Sequence (starting from "define the canonical schema first"), and the Non-Negotiables list are all excellent.

Real weaknesses:

**C1 — Evidence maturity is inverted relative to risk.**
The doc admits it lacks source links, commit SHAs, license notes, inspection dates, and benchmarks for most sections (`open-source-adaptation-map.md` 43-56). Yet the figure/visualization section (lines 261-321) is the most evidence-backed (a full link list), while the agent-kernel, sync, and evidence-pipeline sections — the highest-risk, earliest in the Prototype Sequence (Steps 1-2) — have no links. Research depth is concentrated on a Step-6 concern. Rebalance toward the high-risk lanes (Fix F10).

**C2 — License triage is deferred wholesale, but some lanes are license-critical.**
"Avoid AGPL" is the stack policy (`technology-stack.md` 257), yet the map defers all license review. A cheap up-front AGPL / source-available pass would de-risk lanes early. The licenses and terms of Goose, OpenCode, and Codex matter if LitRev adapts their patterns, and some workflow/stat tools carry copyleft considerations; these *need verification* before they become decisions. One concrete data point is verified: **Overleaf Community Edition is AGPL-3.0** (per `github.com/overleaf/overleaf` README, accessed 2026-06-28) — but the map already says do not fork Overleaf, so that specific lane is unaffected. Flag known AGPL/source-available candidates as they are confirmed (Fix F10).

**C3 — The map and the transfer report do not cross-reference each other.**
The map cites "earlier LitRev prototype" and "earlier LitRev extraction work" as sources (`open-source-adaptation-map.md` 143, 183) without linking the transfer report, which documents exactly that old work and its lineage (the old repo's `open-source-steal-map`, `litrev-2026-vnext-transfer-report-2026-06-27.md` 72). The two research docs overlap heavily and should cross-reference (Fix F5).

**C4 — GROBID local-deployment reality is unaddressed.** See B1.

**C5 — No benchmark corpus is named** for the recurring "benchmark" claims (Marker, GROBID-vs-Docling, long-document editor tests). Belongs to a future evaluation harness; noted, not urgent.

### D. PRD-specific improvement opportunities

Most obvious refinements already landed in v1 (A6). Genuinely missing:

- **D1** — Sample/demo project plus blank/guided/sample entry paths. Not in the PRD; matters more for a local-first desktop app because an empty project folder feels inert (transfer report 323-331). Fix F11.
- **D2** — Web-client authority. Frame in architecture first; mirror as a PRD open question only because it bears on the product contract (A2). Fix F6.
- **D3** — Offline-agent behavior and model portability (B3). Fix F7.
- **D4** — Explicit non-target users. Target Users (`PRD.md` 30-34) lacks a "who this is not for," unlike the strong feature non-goals. Fix F12.
- **D5** — i18n/accessibility as a deliberate deferral. Currently unmentioned except a testing risk class and a design placeholder. Fix F13.

### E. Smaller consistency nits

- **E1** — `AGENTS.md` 70 embeds a machine-specific absolute path (`/Users/yaacov/.codex/skills/...`) in a shared durable doc. Fix F14.
- **E2** — `product-philosophy.md` is Status: Draft but Doc type: Product truth, and `AGENTS.md` treats it as canonical. Decide its status. Fix F15.
- **E3** — Overlapping open-question lists in the PRD (8), planning (10), and security (17) are not de-duplicated or cross-linked. Fix F16.
- **E4** — "Quality doctrine" is a defined doc type (`documentation-policy.md` 54) that nothing uses. Fix F17.
- **E5** — `SKILL.md` uses YAML frontmatter, not the mandated metadata block; the policy says "every durable Markdown document." Add a carve-out. Fix F18.

---

## Part 3 — Proposed Fixes, One By One

Each fix lists what to change, where, why (the finding it resolves), priority, and effort. Draft text is included for the highest-value fixes. None of these are applied yet.

### F1 — Promote the narrow truth-boundary principle to an ADR (without freezing object vocabulary)
- **Resolves:** A3. **Interacts with:** A7/F9.
- **Where:** new `docs/architecture/decisions/ADR-0001-litrev-owns-canonical-project-truth.md`; link from `docs/architecture/decisions/README.md` and `docs/architecture/README.md`.
- **Why:** the principle is the most stable, load-bearing commitment in the repo and constrains downstream design rather than being constrained by it. But the accompanying object vocabulary is explicitly a "first version" (`open-source-adaptation-map.md` Prototype Step 0) and the PRD avoids being a schema (`PRD.md` 232), so the ADR must capture the principle only.
- **Scope:** the ADR decides the principle and the four adapter categories. It does **not** freeze the object list; vocabulary stabilization is deferred to `project-format.md`, `local-first-sync.md`, and `agent-runtime.md` work.
- **Priority:** high. **Effort:** small.
- **Draft content:**

```md
# ADR-0001: LitRev Owns Canonical Project Truth

Status: Proposed
Owner: Yaacov
Last updated: 2026-06-28
Doc type: Architecture decision

## Context
LitRev integrates many external systems (executors, parsers, RAG engines,
screening engines, editors, CRDT layers, export formats). Each has its own
storage or document model. Without a firm boundary, the most convenient external
format tends to become the de facto product truth.

## Decision
LitRev maintains one canonical scientific project model as the single source of
truth. Every external system attaches to it as exactly one of:
- engine adapter state (cacheable, rebuildable from canonical truth),
- editor projection (used to render/edit, not to store truth),
- export artifact (generated from canonical truth),
- agent runtime log (a replayable history, not the truth itself).
External state may be cached, inspected, and rebuilt from the canonical model,
but is never the source of truth.

## Scope And Non-Scope
This decision fixes the principle and the four adapter categories only.
It does NOT fix the canonical object vocabulary (project, source, claim,
evidence link, analysis run, etc.). That vocabulary is an evolving first version
and will be stabilized in the project-format, local-first-sync, and agent-runtime
designs. The product naming authority for any vocabulary remains
`docs/product/PRD.md`.

## Alternatives Considered
- Adopt an external tool's model as the core (rejected: re-centers the product on
  a tool, not on the research project).
- No formal boundary (rejected: invites silent truth drift).
- Freeze the full object vocabulary now (rejected: premature; the format, sync,
  and runtime designs do not exist yet).

## Consequences
- Every prototype must read and write through the canonical model.
- Editor JSON, RAG stores, screening DBs, CRDT state, export ASTs, notebook
  state, and chart-library JSON are explicitly non-canonical.
- The object vocabulary can still change without reopening this ADR, as long as
  the principle and adapter categories hold.
```

### F2 — Promote `local-first-sync.md` from placeholder to draft and name the two hardest risks
- **Resolves:** A1, A5; also lands the stranded Zotero warning.
- **Where:** `docs/architecture/local-first-sync.md`.
- **Why:** the convergence of three sync/versioning mechanisms into one history, and the per-project-SQLite↔single-Postgres topology, are the deepest unknowns and currently have no home.
- **Priority:** highest. **Effort:** medium.
- **Content to add:** a "Central Risks" section stating (1) history convergence — how a Yjs document edit, a SQLite row mutation, and an object-storage file revision combine into one inspectable project timeline and one restore point; (2) sync topology — whether the chosen engine can map many per-project SQLite DBs to one cloud Postgres with per-project access control, and that this is the specific risk the validation slice exists to retire; (3) the Zotero lesson that naive cloud-folder syncing can corrupt database-backed local apps (transfer report 116), as an explicit constraint on the cloud-mirror design. Keep status Draft and clearly not-yet-accepted. The PowerSync/Electric write-path characterization should be verified from primary sources before it is written as fact.

### F3 — Reframe the agent layer as substrate / executor / adapter-role in the stack
- **Resolves:** A4.
- **Where:** `docs/architecture/technology-stack.md`, the Stack Summary table and the Agent Runtime section.
- **Why:** the stack and the map disagree on whether Goose is a layer or an alternative.
- **Priority:** high. **Effort:** small.
- **Change:** separate three roles — agent substrate/coordinator (Goose as leading reference), task executor (OpenCode first spike; Codex safety reference), and adapter role — instead of listing them as equal executor alternatives. Align the Agent Runtime prose to the map (`open-source-adaptation-map.md` 110-122).

### F4 — Reconcile the transfer report with PRD v1
- **Resolves:** A6.
- **Where:** `docs/research/spike-reports/litrev-2026-vnext-transfer-report-2026-06-27.md`, the "Current PRD Review" and "Recommended Next Direction" sections.
- **Why:** five of six recommended refinements already shipped in PRD v1; the report reads as if they are pending.
- **Priority:** high. **Effort:** small.
- **Change:** mark the five landed refinements as "already in PRD v1" with the line references from A6, and reduce the outstanding list to the sample/demo project entry. Bump Last updated.

### F5 — Cross-link the open-source map and the transfer report
- **Resolves:** C3.
- **Where:** both `open-source-adaptation-map.md` (the "earlier LitRev" rows) and the transfer report (its source list).
- **Why:** make the research lineage (old steal-map → new adaptation-map → transfer report) explicit.
- **Priority:** medium. **Effort:** small.

### F6 — Frame web-client authority in architecture; mirror a pointer in the PRD
- **Resolves:** A2 / D2.
- **Where:** primary home `docs/architecture/local-first-sync.md` (or a collaboration/web doc) as: "Can the web app author canonical project state, or is it a cloud-mirror/continuation client?"; a one-line pointer open question in `docs/product/PRD.md` Open Product Questions because it bears on the product contract.
- **Why:** the web client's authority relationship to local-first ownership is unresolved.
- **Priority:** medium-high. **Effort:** small.

### F7 — Add an AI / model strategy, scoped to architecture/planning first
- **Resolves:** B3 / D3; cross-references B2.
- **Where:** primary home a new "AI And Model Strategy" section in `docs/architecture/technology-stack.md` (provider portability, BYO-key vs hosted, cost surfacing, offline degradation, sensitive-data routing); one anti-lock-in line in `product-philosophy.md` naming model-provider dependence; a PRD cross-reference from the sensitive-data discussion to `security-and-permissions.md`. Defer broader PRD text until the architecture answer stabilizes.
- **Why:** for an agentic-first, local-first product, model-provider lock-in, cost, and offline behavior are first-order and currently absent; the philosophy lock-in list omits the model-provider axis.
- **Priority:** medium-high. **Effort:** medium.

### F8 — Add a "local vs cloud execution" subsection to the stack
- **Resolves:** B1 / C4.
- **Where:** `docs/architecture/technology-stack.md`.
- **Why:** Electron + Python + DuckDB + a GROBID sidecar is a potentially heavy local footprint; the local-first product needs an explicit statement of what runs locally, what can be offloaded to cloud, and what is optional. Confirm GROBID's footprint from primary sources first.
- **Priority:** medium. **Effort:** small to medium.

### F9 — Reconcile object vocabulary toward the PRD's broader terms (without claiming finality)
- **Resolves:** A7. **Interacts with:** A3/F1.
- **Where:** `docs/research/source-evaluations/open-source-adaptation-map.md` (canonical-model lists and Prototype Step 0), with the PRD as the naming authority.
- **Why:** prevent the schema being bootstrapped from "Paper"-centric vocabulary; prefer "source" (broad), "analysis run," "agent run." Keep the vocabulary explicitly first-version, consistent with F1's non-freeze scope.
- **Priority:** medium. **Effort:** small.

### F10 — Add a license-triage pass and rebalance evidence depth in the map
- **Resolves:** C1, C2.
- **Where:** `docs/research/source-evaluations/open-source-adaptation-map.md`.
- **Why:** the highest-risk lanes are the least evidence-backed, and a copyleft dependency could invalidate a prototype lane.
- **Priority:** medium. **Effort:** medium.
- **Change:** add a license column or a short license-triage subsection. Record confirmed licenses with source links and inspection dates (Overleaf CE = AGPL-3.0 is confirmed); mark unverified ones (Goose, OpenCode, Codex, workflow/stat tools) as needing verification rather than asserting. Add source links/inspection dates for the agent-kernel, sync, and evidence-pipeline sections to match the figure section's rigor.

### F11 — Add the sample/demo project and blank/guided/sample entry paths
- **Resolves:** D1.
- **Where:** `docs/planning/product-planning.md` first (feature inventory / roadmap seeds), then optionally one line in the PRD lifecycle once stable.
- **Why:** a blank local project folder feels inert; a worked sample demonstrates the full value (sources → evidence → analysis → figure → manuscript → agent run → recovery).
- **Priority:** medium. **Effort:** small.

### F12 — Add explicit non-target users to the PRD
- **Resolves:** D4.
- **Where:** `docs/product/PRD.md`, Target Users.
- **Why:** the repo rewards deliberate boundaries; state that LitRev is not built for general note-taking, knowledge management, or non-research writing.
- **Priority:** low. **Effort:** small.

### F13 — Record i18n/accessibility as a deliberate deferral
- **Resolves:** D5.
- **Where:** `docs/product/PRD.md` deferred scope, or `docs/planning/product-planning.md`.
- **Why:** turn a silent gap into a deliberate omission, consistent with the repo's ethos.
- **Priority:** low. **Effort:** small.

### F14 — Remove the machine-specific path from `AGENTS.md`
- **Resolves:** E1.
- **Where:** `AGENTS.md` 70.
- **Why:** an absolute user-machine path in a shared durable doc breaks portability and contradicts the repo's own truth/portability rules.
- **Priority:** medium. **Effort:** trivial.
- **Change:** phrase the repo-local skill as primary and describe any Codex runtime install as a local convenience without a machine-specific absolute path.

### F15 — Decide the status of `product-philosophy.md`
- **Resolves:** E2.
- **Where:** `docs/product/product-philosophy.md`.
- **Why:** `AGENTS.md` treats it as canonical product truth while it is labeled Draft.
- **Priority:** low. **Effort:** trivial.
- **Change:** promote to Accepted (or Active) if it is canonical, or add a short Document Rules note explaining it is durable guidance still under refinement.

### F16 — Make planning a dashboard that links open questions, not a second owner
- **Resolves:** E3.
- **Where:** `docs/planning/product-planning.md` Open Product Questions.
- **Why:** three overlapping lists drift, but planning must not become a second truth layer (its own Document Rules say it is not product truth). Each doc keeps ownership of its own questions; planning links to them.
- **Change:** reword the planning open-questions section to cross-link the PRD's, security's, and architecture's own question lists rather than restating or owning them.
- **Priority:** low to medium. **Effort:** small.

### F17 — Retire or reserve the unused "Quality doctrine" doc type
- **Resolves:** E4.
- **Where:** `docs/documentation-policy.md` 54.
- **Why:** a defined-but-unused type invites mislabeling.
- **Priority:** low. **Effort:** trivial.

### F18 — Add a skill-frontmatter carve-out to the documentation policy
- **Resolves:** E5.
- **Where:** `docs/documentation-policy.md` Required Metadata.
- **Why:** `SKILL.md` correctly uses YAML frontmatter, but the policy says "every durable Markdown document" must use the metadata block.
- **Priority:** low. **Effort:** trivial.

### F19 — Open further hard-to-reverse ADRs after the dependent decisions are validated
- **Resolves:** the empty `decisions/` folder vs several hard-to-reverse proposed decisions.
- **Where:** `docs/architecture/decisions/`.
- **Why:** the policy says serious hard-to-reverse proposed decisions belong in ADRs.
- **Priority:** medium (after F1 and F2). **Effort:** medium.
- **Candidates:** desktop shell (Electron vs Tauri), the TypeScript + Python execution boundary, and the local-first sync topology once F2 clarifies the risk.

## Suggested Sequence

1. F1 (narrow truth-boundary ADR) — anchors the spine without over-freezing.
2. F2 (sync risks) — the deepest unknowns get a home.
3. F4 and F5 (reconcile the transfer report and cross-link the research docs) — cheap freshness fixes.
4. F3 (agent layer framing).
5. F6, F7 (web authority and AI strategy, primarily in architecture/planning).
6. The remaining PRD/planning refinements (F8–F13) and nits (F14–F18).
7. F19 (further ADRs) once the dependent decisions are validated.

## Open Questions From This Review

- Is the web client intended as a full client, a projection, or a cloud-authoritative variant (A2)?
- Which sensitive-data classes are gated until the local execution sandbox exists (B2)?
- What is the intended model-provider posture and offline-agent behavior (B3)?
- Which tool-specific claims (PowerSync/Electric roles, GROBID footprint, candidate licenses) change a decision once verified, and therefore need primary-source confirmation first?
