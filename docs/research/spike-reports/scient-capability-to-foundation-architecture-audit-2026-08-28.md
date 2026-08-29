# Scient Capability-To-Foundation Architecture Audit — 2026-08-28

Status: Draft
Owner: Yaacov
Created: 2026-08-28
Last updated: 2026-08-28
Purpose: Maps every catalogued Scient-specific desktop capability to its current authority, shared foundations, T3 seams, source anchors, architectural disposition, and highest-value first-principles review questions.
Doc type: Research evidence

## Document Rules

This is a dated architecture audit, not accepted architecture and not a rebuild
authorization. It records what the inspected code, current implementation
records, accepted product principles, accepted ADRs, proposed plans, Git
ancestry, and in-flight branches support at the exact identities below.

Use this report to decide which foundations deserve a focused trace, ADR, or
incremental simplification. Do not use a `unify`, `extract`, `replace`, or
`retire` classification as permission to change code, move project data, merge
an open pull request, rewrite documentation authority, or publish a capability.

Current product behavior remains owned by the implementation and its repository-
local maintenance records. Accepted product truth and architecture remain owned
by the PRD and accepted ADRs. Proposed plans remain proposals. The three local
forensic reports used as the coverage baseline remain untracked candidate
records until deliberately placed and committed.

The current `scient-agent` repository is excluded by explicit decision. It is
an inherited OpenCode-derived starting repository on which native Scient agent
work has not begun. Its Markdown, source architecture, and inherited capability
surface were not inspected, counted, classified, or used to propose a shared
foundation here.

## Question, Scope, And Evidence

The audit asks:

> Which foundations do Scient's current desktop capabilities actually share,
> where are their authorities and lifecycle boundaries coherent, where has
> implementation accumulated avoidable duplication or incompatible concepts,
> and what—if anything—should be kept, simplified, unified, extracted,
> replaced, retired, or deferred?

### Exact evidence identities

| Evidence scope                         | Identity inspected                                                                                                         | Treatment                                                                                                        |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Scient product/planning repository     | `origin/main` `9a309d6bb952a3fae8c0dd3495139c7c0736b37a`                                                                   | Current accepted/proposed product, architecture, planning, research, and operating authority at the audit point. |
| Documentation-system candidate         | branch `codex/documentation-system-20260828` at the same base, with this report and the proposal/audit changes uncommitted | Candidate output only.                                                                                           |
| Scient Desktop current main            | `origin/main` `d5ff08e721086eec02a2a84ad1431b33da6f5269`                                                                   | Current source truth after merged upstream PR #189.                                                              |
| Capability, PR, and divergence reports | local desktop checkout at `aa23f1d3b96f6904dcc1a114cc33415fa267315a`                                                       | Coverage baseline. The `aa23f1d3..d5ff08e7` delta was reviewed separately.                                       |
| Exact current T3 integration base      | `c8aba2587d56edbf3b7872987719a12b42031f48`                                                                                 | Donor comparison and current ancestry boundary, not Scient product authority.                                    |
| In-flight desktop documentation        | draft PR #188, head `33cfee24d6551ec4fee701587b414bb7a60f6ca2`                                                             | Documentation reconciliation evidence; not current main.                                                         |
| In-flight stateful compute             | draft PR #129, head `4955966dc6731a262d839a13ced8faf40390384c`                                                             | Substantial implementation plus candidate foundation/help documentation; not a shipped capability.               |
| In-flight Overleaf sync                | draft PR #121, head `3bdf7486fc9ced9491168333e4daca67b7dc8d28`                                                             | Separate proposed integration; not current product truth.                                                        |
| In-flight provider-update proposal     | draft PR #179, head `02695010b6b13688bf3341ae5532ba0560fc0ffe`                                                             | Proposal only; no current runtime behavior.                                                                      |

Desktop PR #189 merged the official T3 range through `c8aba2587d` after the
capability catalog snapshot. Its 128-file delta is an upstream-host refresh and
protected-seam reconciliation, not a new Scient capability family. It advanced
the exact integrated T3 base, improved inherited provider, projection, mobile,
usage, Git, preview, and release behavior, and preserved Scient release,
provider-lifecycle, awareness, voice, sidebar, migration, and privacy seams.
The 38 named capability subsections plus the catalog's top-level cross-cutting
security/reliability family therefore remain a 39-item architecture coverage
baseline for current Scient-specific product behavior at `d5ff08e7`.

A later readiness recheck found desktop main at `c0baaab2` through merged PR
#190. Its seven-file settings/defaults change adds no new architecture family or
Markdown, so this report preserves the exact `d5ff08e7` map. The capability and
PR reports still require a post-snapshot #190 addendum before durable placement.

Scient's planning alignment is partly merged on current main through docs PRs
#99 and #100. The separate local planning branch diverges from their common
base with equivalent and follow-up documentation commits; it is not additional
accepted architecture. Desktop's seven-file implementation-record
reconciliation remains open as PR #188. This audit uses those branches only to
avoid proposing foundations that their evidence already shows as present or
deliberately separate.

### Method

1. Reconcile all 39 mapped items in the local capability catalog—38 named
   capability subsections plus its cross-cutting security/reliability family;
   37 are current, one is retired, and one is integration-only—with the PR and
   divergence ledgers.
2. Read the PRD, product philosophy, accepted ADRs 0002–0005, proposed ADR-0006,
   project-format and security direction, current upstream policy, and the
   relevant current implementation records.
3. Inspect representative contracts and implementation seams for project
   identity, Sources, skills, forks, queueing, provider lifecycle, file
   opening, right-panel identity, PDF/document artifacts, LaTeX, analysis,
   execution, voice, and in-flight compute.
4. Separate project-owned canonical records, ordinary files, app-private
   policy, server-derived execution state, external-system state, and UI
   projections.
5. Classify architecture findings only after identifying common authority,
   lifecycle, failure, recovery, retention, and T3-maintenance semantics.
6. Reconcile every proposed extraction with a concrete second consumer. Naming
   similarity alone is not evidence of a shared foundation.

## First-Principles Evaluation Criteria

The accepted PRD and architecture decisions produce the following tests:

1. **The project is the durable center of scientific work.** Host threads,
   provider sessions, browser tabs, runtime processes, and app databases may be
   useful projections or execution state; they are not automatically
   scientific truth.
2. **Scient owns authority and acceptance.** A model, provider, client path,
   page, prompt, runtime, external source, or upstream host cannot widen
   authority or define an accepted scientific record.
3. **Inspectability, provenance, review, and recovery are product behavior.**
   Failure and uncertainty must remain visible; last-success output must not be
   confused with the latest failed attempt.
4. **One authority may have several representations.** A file, source record,
   generated document, analysis artifact, or future manuscript may be opened
   through common presentation infrastructure without becoming one generic
   record type.
5. **Shared foundations require shared lifecycle.** Similar state names or
   download steps do not justify one manager when creation, authority,
   mutation, retention, and recovery differ.
6. **T3 is the maintained generic host, not product authority.** Prefer narrow
   Scient-owned packages and marked mounts while allowing justified direct
   inherited-core changes. Every divergence must remain explicit and tested.
7. **Agents use the same owned operations as manual flows.** Agent or automation
   execution must not bypass project scope, capabilities, authority generation,
   idempotency, provenance, or effect receipts.
8. **Extraction follows evidence.** Co-location is acceptable until a real
   independent consumer, release, security, deployment, or operational
   lifecycle proves a separate package, service, or repository.

## Current Architectural Shape

The current desktop is not one monolithic Scient subsystem. It is a layered
thin fork:

```text
official T3 ancestry and generic host
  Electron / React / Effect server / provider sessions / threads / files / browser
                              |
                    narrow protected mounts
                              |
      Scient-owned packages and server/web/desktop modules
                              |
        project records      derived execution state      app policy
        .scient/*            <state>/analysis             settings
        project files        <state>/latex                trust receipts
        promoted results     document-artifacts           provider overlays
                              |
          external adapters and engines remain replaceable
       Zotero / metadata APIs / provider CLIs / MATLAB / TeX / whisper.cpp
```

The structure is directionally coherent: most scientific behavior lives in
`packages/scient-*`, `apps/server/src/scient`, `apps/web/src/scient`, and
bounded desktop modules. The largest long-term risk is not that everything is
inside one repository. It is that several horizontal concerns—resource
identity, presentation selection, currentness, operation authority, derived-
state cleanup, and verified installation—are currently repeated at feature
boundaries or only partly generalized.

## Complete Capability-To-Foundation Map

All paths in the following tables are relative to `ScientFactory/scient-desktop`
unless stated otherwise. `Keep separate` means keep the domain authority or
lifecycle distinct; it does not forbid sharing lower-level utilities.

### Product, delivery, project entry, and navigation

|   # | Capability and state                                     | Authority and shared foundation                                                                                    | T3 seam and primary anchors                                                                                                                      | Disposition                                                                                                                                                      |
| --: | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1 | Scient identity and fork boundary — current              | Scient product/release policy; literal Git ancestry and recorded integration state                                 | `UPSTREAM.md`, `upstream-state.json`, product metadata, `apps/web/src/assets/scient-*`                                                           | **Keep.** This boundary is the reason generic host updates remain possible without surrendering product authority.                                               |
|   2 | Isolated development app and release lanes — current     | Candidate/stable process and state isolation; exact artifact promotion and release receipts                        | `scripts/`, `.github/workflows/`, `apps/desktop/`, release docs; inherited package/build seams                                                   | **Keep; simplify only locally.** Release authority must remain separate from T3 publication. Reuse shared verification helpers where evidence supports it.       |
|   3 | Scient What's New — current                              | Version-pinned local release communication; last-handled version is UI state                                       | `apps/web/src/scient/releaseNotes/`, sidebar mount, `docs/internals/scient-release-notes.md`                                                     | **Keep.** It is a bounded product surface, not a release generator or documentation authority. Link its approved entries to public Docs later.                   |
|   4 | Safe project initialization — current                    | `@scientfactory/project-init` owns `.scient/project.json`, known-file inspection, recovery, and exact preservation | `packages/scient-project-init/`, `apps/server/src/scientProject/`, initialization dialog/hook; T3 still owns project registration and navigation | **Keep and treat as foundational.** Its identity reader is already reused by Sources, skills, and analysis. Do not widen initialization into feature activation. |
|   5 | Compact getting-started flow — current                   | UI orchestration over canonical provider/project state plus small app-private preferences                          | `apps/web/src/scient/onboarding/` and three narrow host mounts                                                                                   | **Keep.** This is presentation policy, not a new provider, compute, or project state machine.                                                                    |
|   6 | Editorial thread titles — current                        | Product-level title rules; thread title remains host thread state                                                  | `packages/shared/src/scientForkTitle.ts`, fork title logic, provider title seam                                                                  | **Keep; share editorial rules only.** Do not create a second thread identity.                                                                                    |
|   7 | File breadcrumbs, path copy, and viewer layout — current | Presentation affordances over current file/environment identity                                                    | `apps/web/src/scient/layout/`, file-surface modules, `FilePreviewPanel.tsx`, tabs/sidebar mounts                                                 | **Unify with the viewer shell.** Path display/copy/reveal should consume the same resolved file reference and action contract, not remain entry-point-specific.  |

### Conversation and thread lifecycle

|   # | Capability and state                                    | Authority and shared foundation                                                                                            | T3 seam and primary anchors                                                                                                 | Disposition                                                                                                                                                               |
| --: | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   8 | Durable assistant-boundary conversation forks — current | Server-resolved transcript boundary, independent Scient migration ledger, durable lineage/saga, provider-neutral bootstrap | `apps/server/src/orchestration/scient-fork/`, fork reactor layers, web fork UI; narrow T3 command/projection/provider seams | **Keep.** It has a real durable lifecycle and restart model. Continue reducing host conflicts, but do not flatten it into client navigation.                              |
|   9 | Fork continuation with another provider — current       | Same fork authority plus explicit provider/runtime choice through current lifecycle contracts                              | fork bootstrap/provider-selection modules and provider lifecycle                                                            | **Keep as a composition.** Provider choice must remain explicit and must not become silent queue steering or transcript mutation.                                         |
|  10 | General Chat / Quick Chat — retired                     | Historical product experiment; migration removes projectless current authority                                             | migration 043, historical migration 010, PR and divergence records; live feature modules removed                            | **Retire completely in current docs and code.** Preserve provenance and compatibility decoding only where immutable history requires it.                                  |
|  11 | Per-thread queue and steer — current                    | Server file store owns pending composer payloads; ordinary `thread.turn.start` owns actual dispatch                        | `packages/contracts/src/scientThreadQueue.ts`, server/threadQueue, client/web queue modules, small composer/ChatView mounts | **Keep as a bounded removable layer.** It deliberately avoids orchestration state. Re-evaluate and retire when a qualified T3 queue supplies equivalent product behavior. |

### Provider lifecycle and local runtime setup

|   # | Capability and state                                 | Authority and shared foundation                                                                                                                      | T3 seam and primary anchors                                                                                                                                                  | Disposition                                                                                                                                                                                                                         |
| --: | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  12 | Capability-driven provider lifecycle — current       | Provider snapshots remain authoritative; Scient managers coordinate advertised connection/runtime operations and transient overlays                  | `packages/scient-provider-runtime/`, `apps/server/src/scient/providerLifecycle/`, web provider connection; T3 owns instances, drivers, sessions, model discovery, enablement | **Keep.** This area has already undergone the justified cross-provider unification. Avoid another rewrite; make targeted corrections against evidence.                                                                              |
|  13 | Codex runtime selection and authentication — current | Codex app-server/account API and fresh-process verification; Scient owns runtime-source selection and safe orchestration, not credentials            | Codex lifecycle modules and inherited Codex driver seam                                                                                                                      | **Keep provider-specific policy above shared managers.** A generic `connected` state would lose real credential and package semantics.                                                                                              |
|  14 | Assisted provider connections — current              | Shared setup host and manager lifecycle; each provider owns its protocol, credential ownership, URL/code semantics, and verification                 | provider-specific action modules plus `AssistedProviderSetupHost`                                                                                                            | **Keep the shared host and explicit provider adapters.** Do not pursue button parity or a dynamic adapter that silently inherits unsupported behavior.                                                                              |
|  15 | Capability-aware Scient context — current            | Server advertises only delivery seams a provider can actually receive                                                                                | `apps/server/src/provider/ScientAwareness.ts`, skills/source/rendering awareness modules, provider adapters                                                                  | **Keep and connect to capability records.** This is delivery, not proof of feature use or scientific authority.                                                                                                                     |
|  16 | Local Whisper transcription — current                | Desktop model selection and native lifecycle; host-independent voice package; web capture; optional provider correction is a separate data-flow step | `packages/scient-voice/`, desktop/web/server voice modules, staging scripts, composer mount                                                                                  | **Keep domain lifecycle separate; investigate shared verified-asset primitives.** Voice model selection, audio limits, and helper lifecycle must not be forced into provider or TeX managers. Correct public privacy documentation. |

### Skills, sources, citations, and agent-facing scientific access

|   # | Capability and state                                              | Authority and shared foundation                                                                                                           | T3 seam and primary anchors                                                                           | Disposition                                                                                                                                                                                 |
| --: | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  17 | Reviewed built-in and project-scoped skills — current             | Exact release/project identity, digest, trust receipt, activation policy, and immutable per-turn snapshot; skills are data, not authority | `packages/scient-skills/`, server/web skills modules, provider MCP/awareness seams, `.scient/skills*` | **Keep.** Preserve the distinction between portable project activation, app-private trust/policy, provider-native inventory, and actual invocation evidence.                                |
|  18 | Local-first project source library — current                      | Canonical project-owned records and content-addressed PDFs under `.scient/sources`; `.scient/project.json` is project identity            | `packages/scient-sources/`, server/web Sources modules, source-PDF adapter into existing reader       | **Keep as a distinct scientific authority.** Do not collapse source records into ordinary files, Zotero items, host SQLite, or a universal artifact store.                                  |
|  19 | Source intake and enrichment — current                            | Adapter candidates are normalized into Scient source truth; exact identifiers and field-level provenance constrain enrichment             | Zotero adapter, PDF intake, metadata resolver, NCBI/Crossref/Europe PMC seams                         | **Keep as adapters.** A provider or API response must remain provenance, not authority. Shared bounded-network utilities may be extracted only without weakening per-source evidence rules. |
|  20 | Notes, citation formatting, and source agent operations — current | One project-owned source note with optimistic revision; citation strings are derived; current agent operations are Sources-specific       | `packages/scient-citations/`, source note/edit operations, `scient_sources_*` delivery                | **Keep domain semantics; route future mutation through the accepted Scient operation envelope.** Citation rendering must remain derived and agent access must not bypass project scope.     |

### Chat content, rich rendering, and presentation

|   # | Capability and state                                         | Authority and shared foundation                                                                                               | T3 seam and primary anchors                                                             | Disposition                                                                                                                                                      |
| --: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  21 | Math rendering — current                                     | Authored Markdown remains canonical; local KaTeX rendering is a bounded representation                                        | `apps/web/src/scient/math/`, one `ChatMarkdown.tsx` seam                                | **Keep.** Share presentation loading/fallback conventions, not mathematical source identity.                                                                     |
|  22 | BiDi/RTL direction — current                                 | Structural direction metadata over authored content and composer state                                                        | `apps/web/src/scient/bidi/`, ChatMarkdown/composer seams                                | **Keep as cross-cutting presentation policy.** Reuse direction-aware title/action primitives in the shared viewer shell and public Docs.                         |
|  23 | Scient typography — current                                  | Small token profile over T3 appearance pipeline                                                                               | `apps/web/src/scient/typography/` and theme/CSS seams                                   | **Keep and minimize.** Do not fork the renderer or spread one-off sizes through inherited components.                                                            |
|  24 | Mermaid diagrams — current                                   | Authored fence is canonical; local sanitized renderer/card is disposable presentation                                         | `apps/web/src/scient/diagrams/`, `ScientRichFence.tsx`, ChatMarkdown settled-fence seam | **Keep inside a static renderer registry.** Durable artifact identity begins only when content is deliberately captured/promoted.                                |
|  25 | Vega-Lite charts — current                                   | Authored bounded JSON/JSONC is canonical; current view state is UI projection                                                 | `apps/web/src/scient/visualizations/`, `presentation/ScientRichFence.tsx`               | **Keep; share renderer capability descriptors and export actions.** Do not make the Vega view a project record.                                                  |
|  26 | Plotly charts — current                                      | Authored bounded figure spec is canonical; WebGL/activity state is disposable runtime state                                   | visualization modules and shared rich-fence seam                                        | **Keep; share lifecycle/resource-budget primitives where semantics match.** Preserve explicit network-resource labeling.                                         |
|  27 | Workspace image cards — current                              | Workspace/project file is canonical; signed URL and card state are renewable presentation                                     | `apps/web/src/scient/images/`, asset policy, ChatMarkdown image seam                    | **Unify with resource identity and viewer actions.** Do not turn every opened image into an analysis or document artifact.                                       |
|  28 | Static artifacts and generated-document foundation — current | Producer-owned artifact identity; immutable revisions; explicit provenance; generated-document binding preserves last success | `packages/scient-document-artifacts/`, server/desktop documentArtifacts, web artifacts  | **Keep authority families distinct; unify representation/resource vocabulary cautiously.** This is the strongest current shared document-output foundation.      |
|  29 | Scient right-panel surface registry — current                | Typed logical tab descriptors for Sources, source PDFs, artifacts, generated PDFs, and environment files                      | `apps/web/src/scient/rightPanel/surfaces.ts` and inherited right-panel host             | **Extend into the file/presentation convergence, not a universal scientific record.** Stable IDs should consume durable resource identity rather than raw paths. |

### Files, PDF, generated documents, and typesetting

|   # | Capability and state                           | Authority and shared foundation                                                                                                                                            | T3 seam and primary anchors                                                                                          | Disposition                                                                                                                                                                                  |
| --: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  30 | Universal file opening — current               | Owning environment server canonicalizes and classifies the path; presenters own viewing; source file remains authoritative                                                 | server `scient/fileOpening`, web fileOpening/fileSurfaces, `EnvironmentFilePresentation`, five inherited host mounts | **Unify direct and workspace dispatch behind `FileReference`, one registry, and a shared shell.** Preserve environment authority and existing specialist presenters.                         |
|  31 | Preview and workspace-file freshness — current | Exact-file watchers are hints; authoritative rereads and conditional-save revisions decide truth                                                                           | web fileOpening/fileSurfaces, workspace read/write/watch contracts, `FilePreviewPanel` seam                          | **Unify currentness vocabulary and observer plumbing where proven.** Rename/move recovery needs a stable file reference; dirty-buffer conflict semantics stay editor-specific.               |
|  32 | Scient PDF reader — current                    | Logical source descriptor owns identity; renewable URL is transport; reader session is bounded UI state                                                                    | `packages/scient-pdf-validation/`, web PDF modules, server asset routes, desktop Save Copy                           | **Keep as the polished PDF presenter.** Generalize its source adapter through resource/presentation contracts; do not create another PDF viewer per producer.                                |
|  33 | Browser HTML-to-PDF export — current           | Live Browser tab is renderer binding; generated-document store owns immutable PDF revision and last-success binding; local source identity is environment + canonical path | desktop documentExport, server documentArtifacts, web export lifecycle, Browser/PDF mounts                           | **Keep producer and artifact lifecycles separate.** Reuse a future `DocumentBuild`/conversion receipt vocabulary without relabeling a live-page export as a typesetting build.               |
|  34 | Local LaTeX build workflow — current           | `LatexBuildService` owns root/build state; `GeneratedDocumentStore` owns published revision; project `.tex` and dependency hashes own source truth                         | server/web LaTeX modules, `@scientfactory/execution` process port, document-artifact contracts, file-panel mount     | **Keep `DocumentBuild` distinct from analysis and compute.** Generalize only shared process, cancellation, diagnostic, artifact, and receipt primitives after concrete consumers prove them. |
|  35 | SyncTeX forward/inverse navigation — current   | Exact generated PDF revision plus retained index and workspace-contained source locations                                                                                  | LaTeX SyncTeX modules, verified helper staging, PDF/editor navigation mounts                                         | **Keep as a document-build auxiliary capability.** Share stable source/document anchors later; never navigate against a newer or evicted revision.                                           |

### Scientific execution and measurement

|   # | Capability and state                                                  | Authority and shared foundation                                                                                                                                                          | T3 seam and primary anchors                                                                             | Disposition                                                                                                                                                                                                                                                              |
| --: | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  36 | Analysis/execution runtime foundation — current, deliberately bounded | `@scientfactory/execution` owns a language-neutral run/process vocabulary; `@scientfactory/analysis` and server services own `AnalysisRun`, receipts, artifacts, recovery, and promotion | `packages/scient-execution`, `packages/scient-analysis`, server/web analysis, file auxiliary mount      | **Keep the specialization and existing execution kernel.** Add adapters and shared coordinator behavior only when real workflows prove it; do not turn all work into `AnalysisRun`.                                                                                      |
|  37 | Stateful compute and rich output — integration-only                   | PR #129 owns persistent `ComputeSession`, execution requests/results, Jupyter-compatible representation bundles, resources, variables, and history                                       | `packages/scient-compute`, server/web compute modules on head `4955966d`; no mainline product authority | **Keep as a sibling lifecycle and reconcile before merge.** Preserve `languageId` versus `transportKind`, project files versus submitted bytes, and `ComputeSession` versus `AnalysisRun`/`DocumentBuild`. Reuse Results/presentation seams without merging the records. |
|  38 | First-party analytics runtime — current but disabled by default       | Bounded event schemas, local outbox/worker, and privacy policy; enablement is explicit product/user state                                                                                | `packages/scient-analytics/`, server/web analytics, settings/release seams                              | **Keep disabled and isolated.** Product analytics is neither scientific provenance nor an authority for user projects. Enablement requires its separate rollout and privacy gates.                                                                                       |

### Cross-cutting security, reliability, and maintenance

|   # | Capability and state                                              | Authority and shared foundation                                                                                                                                                                                            | T3 seam and primary anchors                                                                                                                      | Disposition                                                                                                                                                                                             |
| --: | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  39 | Security, reliability, CI, release, and seam safeguards — current | Feature owners retain their safety contracts; exact artifact checks, bounded resources, race isolation, deterministic tests, provenance manifests, and static seam audits preserve them across release and upstream change | `.github/workflows/scient-*`, `scient-*-seams.json`, co-located adversarial/restart/race tests, release scripts, and small inherited corrections | **Keep as owned invariants and verification, not one generic reliability service.** Extract only proven lower-level helpers; keep security tests and seam ownership beside the capability they protect. |

## Foundation Findings

### F1. Project identity is already a real shared foundation — keep and formalize

`@scientfactory/project-init` is not merely an onboarding helper. Its exact
identity reader is imported by Sources and skills, and the analysis server uses
the same identity after initialization inspection. This is appropriate shared
infrastructure because the consumers agree on authority: `.scient/project.json`
is the stable project identity and none may redefine it.

The remaining decision is architectural authority, not code extraction.
Proposed ADR-0006 accurately describes the implemented Sources store and the
current one-`.scient/` direction, but it is still proposed. Before adding
evidence, manuscript, analysis, sync, or collaboration namespaces, accept,
revise, or replace ADR-0006. Do not let implementation-by-accumulation silently
make every future `.scient/*` representation canonical.

Keep these state families explicit:

| State family                                            | Current authority                              | Portability/retention consequence                                                    |
| ------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| Ordinary project files                                  | Current authorized path and file revision      | Mutable, user-owned, editor conflict semantics; future relocation identity needed.   |
| Project identity                                        | `.scient/project.json`                         | Durable and shared by scientific namespaces.                                         |
| Source records and imported PDFs                        | `.scient/sources/*`                            | Canonical project-owned scientific records and immutable attachments.                |
| Reviewed skill lock and project skill files             | `.scient/skills.lock.json`, `.scient/skills/*` | Portable activation/content; app-private trust and preferences still gate delivery.  |
| Analysis run history                                    | server `<state>/analysis`, keyed by project ID | Derived execution evidence; promoted `results/*` is the portable deliberate handoff. |
| Generated document revisions                            | server `<state>/document-artifacts`            | Derived immutable revisions with bounded retention and producer bindings.            |
| LaTeX aux/evidence/SyncTeX                              | server `<state>/latex`                         | Rebuild/navigation support, not canonical source; needs coherent cleanup.            |
| Thread queue                                            | server `<state>/scient/thread-queue`           | Pending composer state tied to host thread lifecycle; deliberately easy to retire.   |
| Provider, onboarding, analytics, and skill trust policy | app/server-private settings and caches         | Product/runtime policy, not project scientific truth.                                |

### F2. The accepted Scient operation boundary is not yet the common execution path — implement before widening agent effects

Accepted ADR-0004 defines one host-independent operation envelope with actor,
project scope, capabilities, authority generation, idempotency, lineage, and an
effect receipt. Current source has strong feature-local authorization and
recovery, but no common `ScientOperation`/operation-envelope implementation was
found across the inspected mainline scientific packages and server services.
The analysis implementation record also explicitly defers actor identity until
that accepted envelope exists.

This is the most important authority gap because future agent, external MCP,
automation, browser, source, analysis, document, and Studio mutations otherwise
risk receiving separate authorization and provenance models.

Recommended next proof:

1. Implement the smallest operation core for one existing low-risk read and one
   protected project mutation.
2. Resolve actor and project capability on the host; do not accept them from
   the request payload.
3. Bind idempotency to actor, project, operation, canonical payload, and
   authority generation.
4. Commit protected state and effect receipt atomically where the state owner
   permits it; classify uncertain external effects without automatic retry.
5. Adapt the manual UI and one agent-facing path to the same operation.
6. Preserve current domain stores and services behind the operation; this is an
   authority seam, not a rewrite of Sources or analysis.

Do not wait for the native Scient agent repository. The boundary is a desktop
product responsibility and is also required for external providers and future
automations.

### F3. File identity and presentation are the clearest justified unification

Four present-day dispatch families overlap without sharing one owner:

- direct file classification through `EnvironmentFilePresentation`;
- workspace preview's narrower format switch and inherited file panel;
- the typed `ScientRightPanelSurface` union;
- chat rich-fence, workspace-image, PDF-source, and analysis-artifact selection
  helpers.

These implementations share opening, title, freshness, retry, save/copy,
reveal, fallback, and view-state concerns. They do **not** share canonical
record identity. The proposed File, Resource, And Presentation Foundation has
the correct boundary:

- stable `FileReference` above path-based I/O;
- bounded, evidence-based relocation resolution;
- deterministic static presentation registry;
- compact shared viewer shell; and
- specialized adapters preserving current editor, PDF, Browser, LaTeX,
  analysis, and artifact behavior.

The first slice should migrate logical open-surface identity while continuing
to call current path-based preparation and asset APIs. It should not replace
all path parameters, invent a universal artifact union, or weaken environment
authorization. Direct and workspace entry points should converge only after a
fixture proves no regression in editing, PDF state, interactive HTML, RTL,
freshness, or failure recovery.

### F4. Currentness is cross-cutting, but staleness semantics remain producer-owned

Scient now has several strong currentness mechanisms:

- workspace files: content revision, conditional save, watcher hint, and
  dirty-buffer conflict;
- direct files: canonical path, size/mtime revision, signed exact-resource
  renewal, and explicit refresh;
- generated documents: binding generation, immutable revision, `current`/
  `stale`/`failed-production`, and last success;
- LaTeX: exact dependency SHA-256 evidence plus build attempt and PDF binding;
- Browser HTML export: source generation, Browser binding, update coalescing,
  and last successful PDF;
- analysis: source revision, run receipt, artifact hash, selected/current run,
  and promoted result capsule; and
- compute candidate: submitted code hash, source buffer state/revision,
  append-only display facts, and content-addressed resources.

The shared opportunity is a small revision/currentness vocabulary and a
dependency-edge contract used by presentation and future staleness graphs.
The source owner must still decide what a change means. A dirty editor buffer,
a failed LaTeX build, an outdated MATLAB figure, and an evicted generated PDF
cannot share one state machine merely because all can be called `stale`.

### F5. Execution has a proven low-level core; its three product lifecycles should remain siblings

`@scientfactory/execution` and `apps/server/src/scient/execution/LocalExecutionProcess.ts`
already provide a no-shell process port, output stream, exit observation, and
process-tree cancellation. Both the MATLAB analysis service and the real LaTeX
build service consume that foundation. This is a genuine shared layer, not a
future abstraction.

Above it, preserve separate product records:

| Product object   | Lifecycle that makes it distinct                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AnalysisRun`    | Bounded run action against a saved source revision; runtime profile; stdout/stderr; diagnostics; run-owned artifacts; history and promotion.      |
| `DocumentBuild`  | Resolved document root and dependencies; coalescing/supersession; compiler passes; diagnostics; last successful render; source-output navigation. |
| `ComputeSession` | Persistent language namespace; generation; queued executions; interrupt/restart; variables; submitted code; append-only rich display facts.       |

Share process control, normalized diagnostic primitives, bounded output/resource
transport, cancellation language, and base provenance only where the existing
consumers agree. A future execution coordinator may emerge from repeated
server orchestration, but neither LaTeX nor compute should depend on
`AnalysisService`, and no universal `Task` should erase specialized receipts.

PR #129 should be reviewed as an in-flight foundation integration, not rebuilt
from its feature labels. Its `languageId`/`transportKind` separation, durable
request/result split, source buffer truth, and Jupyter-compatible but Scient-
owned representation bundles are sound directions. The integration decision
must reconcile current main's MATLAB/AnalysisRun and result presentation rather
than keeping two long-term MATLAB execution authorities.

### F6. Representation selection can share a vocabulary without sharing artifact identity

Current code has:

- generated PDF descriptors and immutable document revisions;
- analysis artifacts with `static`/`interactive`/`native` representations;
- static artifact surface descriptors;
- chat fence renderer aliases;
- compute candidate MIME bundles and surface-owned priority selection; and
- resource URLs whose expiry never defines identity.

These are enough real consumers to justify a common representation descriptor
and renderer-capability vocabulary. They are not enough to justify one
artifact database. The shared layer should describe media type, content or
resource identity, byte bounds, interactivity, fidelity, required capability,
fallback, and selected presenter. Producer-specific provenance, revisions,
retention, and staleness stay with generated documents, analysis, compute,
Sources, or Studio.

### F7. Verified installation is repeated enough for a focused extraction spike

Provider runtimes, Whisper models, TinyTeX, SyncTeX staging, and whisper.cpp
staging independently implement combinations of:

- compile-time manifests and exact target selection;
- bounded HTTPS/redirect policy;
- expected size and digest verification;
- private staging and partial-download handling;
- archive traversal/link/duplicate/expansion defenses;
- required-file or magic-header checks;
- smoke tests and executable permissions;
- atomic activation and last-known-good preservation;
- interruption, superseded-root cleanup, receipts, and diagnostics.

The duplication is real, but the managers should remain separate: provider
selection includes credentials and runtime instances; voice installs large
resumable single-file models and coordinates a helper; TinyTeX performs
collections and package repair; build-time native staging produces release
assets rather than user-installed state.

Run a focused extraction spike for lower-level verified-asset primitives only.
Characterize the current threat and cancellation tests first. A neutral package
may own URL policy, streamed bounded download, digest/size verification, safe
archive extraction, receipt generation, and atomic directory activation. Each
domain should retain its manifest schema, selection, progress language, smoke
contract, credentials, repair, and removal semantics. Do not make LaTeX or
voice depend on a package named for providers.

### F8. Derived-state retention and cleanup need one operating contract, not one store

The generated-document store has bounded revision/byte retention and protects
active bindings. Analysis has explicit metadata-preserving cleanup and no
automatic deletion. LaTeX documents known orphan risks for build directories,
evidence, and SyncTeX indexes. Provider/TinyTeX installers clean superseded
roots under their own rules. Queue files are deleted with the last item and
quarantined on corruption.

Create a common operational contract for every server-derived state owner:

- authoritative versus rebuildable contents;
- measured bytes and item counts;
- automatic versus user-confirmed retention;
- pin/lease/protection rules;
- safe sweep and orphan reconciliation;
- corruption and partial-recovery behavior;
- project/worktree identity and deletion semantics; and
- user-visible storage summary and cleanup receipts.

Do not put all state into one database or one directory. A shared storage
dashboard and cleanup operation may coordinate owners while each owner keeps
its correct store and retention policy.

### F9. Provider lifecycle is a recent successful unification — do not restart it

The provider program already replaced provider-by-provider UI and operation
duplication with shared connection/runtime managers, a coordinator, truthful
capabilities, transient overlays, strict verification, a common setup host,
and provider-specific policy adapters. PR #150 is the integration parent.

The architecture review should therefore focus on evidence gaps, action
currentness, target qualification, and upstream conflict cost—not on another
generic provider framework. Draft PR #179 is planning for safe managed updates
and must be reconciled with current manifests and the landed manager before it
can become direction.

### F10. Thread queue separation is deliberate technical debt with an exit path

The queue is not an accidental failure to use orchestration. It intentionally
stores pending composer payloads outside thread events so a later T3-native
queue can replace it without event migration. Its hashed filenames, atomic
writes, limits, quarantine, serialized mutation lanes, and explicit dispatch
acknowledgement are proportionate.

Keep the current boundary while monitoring upstream. Architecture work should
not generalize this store into a universal work queue or silently steer queued
messages. Its maintenance document already contains a complete retirement
procedure.

## Architecture Disposition Ledger

| Finding                                                                   | Disposition                                    |  Confidence | Decision or proof required                                                                     |
| ------------------------------------------------------------------------- | ---------------------------------------------- | ----------: | ---------------------------------------------------------------------------------------------- |
| Literal T3 ancestry, fetch-only upstream, and protected seams             | Keep                                           |        High | Continue exact-range upstream receipts and hostile-merge rehearsal.                            |
| Shared `.scient/project.json` identity reader                             | Keep/formalize                                 |        High | Decide proposed ADR-0006 before new canonical namespaces.                                      |
| Sources as project-owned records                                          | Keep separate                                  |        High | Accept/revise source-store architecture; add sync/conflict design only when required.          |
| Skills activation/trust/turn snapshots                                    | Keep separate                                  |        High | Add invocation receipts only through an accepted operation/provenance path.                    |
| Direct/workspace file identity and presentation dispatch                  | Unify incrementally                            |        High | Accept a focused file-foundation slice and migration fixtures.                                 |
| Viewer titles, freshness, failure, retry, locate, save/copy, reveal       | Unify in shared shell                          |        High | Prove no regression across editor, PDF, HTML, image, media, remote, and RTL cases.             |
| Generated document, analysis artifact, compute representation descriptors | Unify vocabulary only                          | Medium-high | Define a minimal media/resource/capability contract against real producers.                    |
| `AnalysisRun`, `DocumentBuild`, `ComputeSession`                          | Keep as siblings                               |        High | Reconcile PR #129 with mainline analysis before integration.                                   |
| No-shell process control and tree cancellation                            | Keep/extract where already shared              |        High | Preserve current `@scientfactory/execution` and local process adapter tests.                   |
| Higher-level execution coordinator                                        | Defer/selectively extract                      |      Medium | Require repeated orchestration across at least two real product lifecycles.                    |
| Scient operation envelope                                                 | Implement focused core                         |        High | Produce actor/project/capability/idempotency/effect-receipt proof before agent effects expand. |
| Provider lifecycle managers and setup host                                | Keep; simplify locally                         |        High | Reconcile current proposals and close target/live qualification gaps.                          |
| Verified download/extract/activate mechanics                              | Investigate lower-level extraction             | Medium-high | Side-by-side threat, cancellation, restart, and rollback characterization.                     |
| Derived-state retention and cleanup                                       | Unify operating contract                       |        High | Inventory all state owners; design measured cleanup and receipts without one universal store.  |
| Rich-fence registry                                                       | Keep and extend as presentation adapter family |        High | Keep authored source canonical and streaming fallback readable.                                |
| Right-panel Scient surface registry                                       | Extend toward shared presentation identity     |        High | Migrate path-based IDs through compatibility decoding.                                         |
| Quick Chat                                                                | Retire                                         |        High | Preserve only migration/provenance/immutable decoding requirements.                            |
| Thread queue                                                              | Keep with retirement trigger                   |        High | Replace only after qualified T3-native behavior and data handoff.                              |
| Wholesale desktop or scientific-core rewrite                              | Defer/reject on current evidence               |        High | No authority failure currently justifies it; use focused traces and migrations.                |
| Separate Scient core repository/service now                               | Defer                                          |        High | Require a real independent consumer, release, security, deployment, or operational lifecycle.  |

## Deliberate Boundaries That Must Not Be “Simplified” Away

1. T3 host state versus Scient scientific truth.
2. Project identity versus environment, thread, provider session, worktree, or
   absolute path identity.
3. Mutable ordinary files versus immutable source attachments.
4. Source records versus citation strings, extracted metadata, or Zotero
   records.
5. Generated document revisions versus analysis artifacts and Studio
   compositions.
6. `AnalysisRun` versus `DocumentBuild` versus `ComputeSession`.
7. Provider enablement, runtime health, authentication, entitlement,
   readiness, and operation state.
8. Skill availability, activation, trust, selection, loading, invocation, and
   authority.
9. Authored chat fence source versus its disposable rendered card.
10. Manual UI, provider transport, external MCP, and automation ingress versus
    the common Scient operation semantics they should call.
11. Public product help versus internal capability, architecture, roadmap,
    evidence, and upstream records.
12. Current main versus open PR, local candidate, proposed plan, retired code,
    and historical evidence.

## Open-Source And External-Source Architecture Map

| Source                                    | Current use or evidence                                                                                       | Scient-owned boundary                                                                                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| T3                                        | Maintained Electron/React/Effect host, provider sessions, threads, files, Browser, release/runtime foundation | Git ancestry and generic host only; Scient owns product, scientific records, privacy, release, and accepted divergence.                |
| Effect                                    | Typed schemas, services, layers, streams, process/filesystem primitives                                       | Implementation substrate; does not define scientific domain records or authority.                                                      |
| PDF.js 6.2.108                            | Local PDF parse/render/search/outline/range validation and generated-PDF structural qualification             | Scient owns source descriptors, authorization, reader sessions, save/copy, freshness, and product quality.                             |
| whisper.cpp 1.9.1                         | Local speech inference helper and pinned native runtime                                                       | Scient owns model manifest, download/verification, lifecycle, IPC, cancellation, privacy boundary, and optional correction flow.       |
| KaTeX and remark-math                     | Local mathematical parsing/rendering                                                                          | Scient owns delimiter policy, safety bounds, fallback, source copy, streaming behavior, and mobile boundary.                           |
| Mermaid                                   | Local diagram renderer                                                                                        | Scient owns settled-fence gating, sanitization, resource limits, source/error states, export, and identity rebasing.                   |
| Vega, Vega-Lite, vega-embed, vega-tooltip | Declarative chart runtime                                                                                     | Scient owns schema/value bounds, CSP-safe expression path, network labeling, lifecycle, export, and renderer activation.               |
| Plotly strict and MathJax                 | Broad interactive chart rendering and labels                                                                  | Scient owns trace/value/frame bounds, WebGL pool, mutation queue, network disclosure, export, and failure fallback.                    |
| Zotero local API                          | Read-only local intake adapter                                                                                | Scient source schema, project record identity, duplicate decisions, provenance, and notes remain canonical.                            |
| NCBI E-utilities, Crossref, Europe PMC    | Exact-identifier metadata enrichment                                                                          | Only exact identifiers leave the project; responses are bounded evidence and never overwrite stronger source/user truth.               |
| parse5                                    | Bounded HTML/abstract parsing                                                                                 | Provider markup is normalized into Scient's plain-text/section source representation.                                                  |
| Citation.js, citeproc, CSL styles         | Derived citation formatting                                                                                   | Rendered references are not persisted as source truth.                                                                                 |
| MATLAB                                    | First external analysis engine                                                                                | Scient owns discovery/verification, process safety, source revision, run receipt, artifacts, history, and result promotion.            |
| `latexmk`, Tectonic, TinyTeX              | Replaceable local typesetting engines/distribution                                                            | Scient owns root resolution, build lifecycle, dependency evidence, diagnostics, last-success publication, and managed-install consent. |
| SyncTeX and zlib                          | Exact-revision source/PDF navigation helper                                                                   | Scient pins, builds, receipts, packages, confines, and refuses stale or unsafe navigation.                                             |
| Jupyter protocol and MIME conventions     | In-flight compute transport/representation compatibility                                                      | PR #129 keeps language, transport, session, durable records, resources, authority, and retention Scient-owned.                         |
| Agent Skills specification                | Portable skill document shape                                                                                 | Scient owns reviewed release metadata, exact digest/origin, project trust, activation, per-turn delivery, and capabilities.            |

These are adaptation inputs and replaceable engines, not a single dependency
stack to expose as product authority. Future source maps should record exact
versions, commits, licenses, receipt paths, evaluation dates, and the boundary
between adopted code, adapted pattern, protocol compatibility, and research
reference.

## Architecture Evolution Timeline

| Period              | Foundation evolution                                                                                                   | Long-term interpretation                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-08-06 to 08-09 | Literal T3 bootstrap, Scient identity/isolation/release guards, safe project initialization, durable fork, local voice | Established the thin-fork and project-boundary pattern before scientific breadth.                                                      |
| 2026-08-10 to 08-14 | Sources, PDF, universal opening, analysis/MATLAB, generated artifacts, math, LaTeX, diagrams, Vega, Plotly             | Added several strong vertical slices, each correctly owning domain behavior but creating horizontal presentation/currentness pressure. |
| 2026-08-15 to 08-23 | Repeated T3 refreshes, file/image/browser convergence, release cutover, onboarding, provider additions                 | Proved that marked seams and owned modules can survive upstream movement; also exposed duplicated provider and viewer dispatch.        |
| 2026-08-24 to 08-27 | Provider lifecycle integration, skills core/project skills, queue, SyncTeX, file/PDF freshness                         | Provider duplication was intentionally unified; currentness and trust became explicit cross-cutting concerns.                          |
| 2026-08-28          | T3 alignment through `c8aba2587d`, file/document/artifact planning alignment, capability/Markdown/architecture audits  | The correct next step is selective foundation work with accepted boundaries, not feature replay or wholesale rewrite.                  |

## Recommended First-Principles Review Order

### 0. Stabilize documentation authority

Accept or revise the documentation-system proposal, then run its three logical
pilots without a mass move. Promote the forensic capability/divergence/PR
reports into the appropriate permanent records only after current/open/retired
status and source anchors are refreshed against `d5ff08e7` and PR #188.

### 1. Trace file/resource/presentation end to end

Use at least these workflows:

- open the same workspace file from tree and chat;
- open an external or remote-environment file;
- rename/move/delete/recreate and resolve ambiguity;
- edit while an external write arrives;
- open PDF, interactive HTML, image, Markdown/math, unknown binary, and a
  generated PDF;
- lose/renew an asset URL and restart the app; and
- preserve RTL title, view state, last success, and recovery actions.

If the trace supports the current proposal, accept a focused ADR/slice for
`FileReference`, relocation, the static registry, and the viewer shell. This
has the highest roadmap leverage across Documents, Computing, and Artifact
Studio.

### 2. Implement the smallest operation-authority proof

Choose an existing manual operation with a real project mutation—such as a
source note update—plus a read. Route manual and one agent-facing call through
the same host-resolved envelope and effect receipt. Prove revocation,
idempotency conflict, stale expected version, retry, and receipt redaction.
Do not broaden external MCP or automation authority in the same slice.

### 3. Reconcile execution before integrating PR #129

Map mainline MATLAB `AnalysisRun`, LaTeX `DocumentBuild`, and candidate
`ComputeSession` against:

- project/source identity;
- adapter/runtime identity;
- process and cancellation ownership;
- event/output/diagnostic vocabulary;
- artifact/representation identity;
- storage, cleanup, recovery, and promotion;
- operation actor/provenance; and
- UI Results and figure-following surfaces.

Decide which MATLAB behavior moves into or consumes the compute foundation,
which analysis-run behavior remains for isolated reproducible runs, and how
project results link both. Avoid two long-term MATLAB authorities.

### 4. Characterize verified-install duplication

Compare provider runtime, Whisper model, TinyTeX, and native staging threat
models and tests. Extract only the lower-level primitives whose cancellation,
rollback, archive, progress, and receipt behavior can be represented without
domain conditionals.

### 5. Define derived-state storage operations

Inventory actual bytes and cleanup/recovery behavior for analysis, LaTeX,
document artifacts, compute candidate, provider runtimes, voice models, queue,
and caches. Design one storage summary and cleanup coordination contract while
leaving each store authoritative for its own data.

### 6. Review provider and thread foundations only for measured pain

Provider lifecycle is newly unified and the queue has an explicit retirement
plan. Revisit them only for a reproduced root-cause failure, repeated upstream
conflict, unsupported provider state, or qualified T3 replacement.

## Required Evidence Before Any Rebuild

A foundation should not be replaced or extracted without:

1. a current workflow trace and source-of-truth diagram;
2. the exact authority, lifecycle, data, and T3 seams being changed;
3. at least two real consumers for a proposed shared foundation;
4. a concrete failure, duplication, maintenance, security, or roadmap cost;
5. preserved behavior and explicit intended behavior changes;
6. data/state compatibility, migration, rollback, and cleanup plans;
7. focused contract, adversarial, restart, cancellation, and upstream-merge
   tests;
8. current/open/retired documentation updates in the owning repositories; and
9. an accepted ADR when the change is hard to reverse or establishes durable
   authority.

A clean package graph or shorter file list is not enough. The target must make
authority, recovery, provenance, upstream maintenance, and future workflows
better.

## Documentation Consequences

The proposed long-term capability record should make this map maintainable
without preserving this dated report as a hand-edited registry. Each current
capability page should state:

- user-visible behavior and limitations;
- current/open/retired status and release availability;
- authoritative state and lifecycle owner;
- primary packages/services/surfaces and narrow inherited T3 mounts;
- operations, permissions, failure, cancellation, retry, recovery, retention,
  and privacy behavior;
- open-source/adapted sources and exact provenance route;
- verification evidence and unqualified platforms/scenarios;
- related architecture decisions, proposals, roadmap stages, and retirement
  triggers; and
- update triggers naming which code/contract/PR changes require the page to be
  reviewed.

Architecture pages should own shared foundations, not repeat feature manuals.
Public Scient Docs should explain how to use released behavior and recover
from failure, not expose internal package topology. Roadmaps should link to
current capability records instead of repeating large current-state snapshots.
Upstream receipts should record each integration range and conflict decision
without becoming permanent capability descriptions.

The [documentation-system proposal](../../planning/scient-documentation-system-and-publishing.md)
and [Markdown audit](./documentation-system-markdown-audit-2026-08-28.md)
define how those owners should be classified, published, indexed, and kept
current across repositories.

## Review Conclusion

Scient's current architecture is not fundamentally misaligned. The strongest
foundations—thin-fork governance, project identity, Sources, skills trust,
provider lifecycle, generated document revisions, PDF presentation, and the
low-level execution process boundary—should be preserved.

The evidence does justify focused foundation work in four places:

1. file identity, relocation, presentation selection, and the shared viewer
   shell;
2. the accepted but not yet implemented Scient operation-authority envelope;
3. execution/representation reconciliation before stateful compute merges; and
4. lower-level verified-install plus derived-state lifecycle primitives after
   focused characterization.

It does not justify a wholesale desktop rewrite, one universal scientific
object, one universal lifecycle manager, a new Scient core repository, or
rebuilding current providers, Sources, skills, PDF, LaTeX, or analysis from
zero. The intelligent path is to preserve the vertical slices that already
prove product value, make their common seams explicit, and migrate one
foundation at a time behind compatibility and recovery gates.

## Completeness And Re-Review Record

The final coverage pass must continue to prove:

- all 39 mapped catalog items—38 named capability subsections plus the
  cross-cutting security/reliability family—appear exactly once in the
  numbered map;
- current, integration-only, retired, proposed, and disabled states are not
  collapsed;
- the `aa23f1d3..d5ff08e7` desktop delta and merged PR #189 are reconciled;
- open PRs #121, #129, #179, and #188 remain non-current;
- project files, source records, generated documents, analysis artifacts,
  build records, and compute sessions remain distinct authorities;
- every cited desktop path exists at its stated main or candidate revision;
- accepted ADRs, proposed ADR-0006, and planning proposals retain their actual
  authority status;
- no scient-agent Markdown or source was inspected or classified; and
- recommendations remain evidence and require separate acceptance and change
  authorization.
