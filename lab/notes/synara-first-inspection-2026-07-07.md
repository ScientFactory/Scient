# Synara First Inspection And Ownership Plan

Status: Historical
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Preserves the first technical inspection of Synara and the initial ownership plan that preceded the accepted foundation decision.
Doc type: Research evidence

## Historical Scope

The inspected source findings remain useful evidence. Body text may retain
contemporary planning and Gate 1.6 language as point-in-time wording. Current
foundation and sequencing decisions live in
`../../docs/architecture/decisions/ADR-0001-synara-opencode-foundation-and-papilab-ownership-boundary.md`,
`../../docs/planning/product-roadmap.md`, and the first-slice implementation
plan.

## Source Snapshot

Local source checkouts inspected:

| Source | Local path | Commit inspected | Current role in this note |
| --- | --- | --- | --- |
| Synara | `lab/external/desktop-app-forks/synara` | `03d8b2c2` | First desktop base candidate |
| OpenCode | `lab/external/agent-forks/opencode` | `14a552979` | First embedded executor candidate |
| Goose | `lab/external/agent-forks/goose` | `f96f62d98` | Agent substrate, ACP/MCP reference, later adapter candidate |
| T3 Code | `lab/external/desktop-app-forks/t3code` | `b9cc8d6e` | Reference and cherry-pick shelf |

This note is based on local source inspection only. It does not claim that PapiLab has already implemented this architecture.

## Core Verdict

Start the desktop app from Synara, but do it with a controlled ownership boundary.

Synara is strong enough to be the first desktop shell because it already has the hard product machinery we do not want to rebuild first: Electron desktop runtime, React chat/workbench UI, typed WebSocket transport, local SQLite state, provider session routing, terminals, Git/diff surfaces, local file previews, browser panels, and an existing OpenCode adapter.

The dangerous mistake would be letting Synara's coding-workbench model become PapiLab's scientific project model. Synara should own the shell, session UI, provider plumbing, and local workbench mechanics at first. PapiLab must own the scientific project kernel, evidence model, provenance ledger, task/run model, review logic, and scientific object views.

The first agent connection should be OpenCode through Synara's existing OpenCode adapter. Goose should come after that as a separate upstream-trackable agent substrate or provider adapter. Goose is valuable, but it should not replace Synara as the first UI base.

## What Synara Already Gives Us

| Area | What exists now | Why it matters for PapiLab |
| --- | --- | --- |
| Desktop shell | `apps/desktop` launches Electron, backend process, update flow, file dialogs, clipboard, notifications, in-app browser IPC. | Avoids building the whole native app shell from zero. |
| Web UI | `apps/web` has chat, sidebar, project/thread navigation, composer, provider/model picker, terminal panes, diff/file preview, browser panel. | Gives us a usable workbench before PapiLab-specific scientific panels exist. |
| Server runtime | `apps/server` exposes WebSocket RPC, static hosting, filesystem, terminal, Git, provider, orchestration, automation, browser, and config methods. | Provides the local coordinator process we can wrap before extracting anything. |
| Typed contracts | `packages/contracts` defines provider, orchestration, project, browser, terminal, and WebSocket contracts with Effect schemas. | Gives us a disciplined boundary for adding PapiLab contracts. |
| Provider abstraction | `ProviderAdapterShape` supports `startSession`, `sendTurn`, approvals, user-input responses, rollback, compact, fork, discovery, models, skills, plugins, and event streaming. | This is close to the interface needed for "agents inside our agent." |
| Provider service | `ProviderService` routes calls to adapters, persists resume cursors, recovers sessions, tracks runtime status, and publishes canonical runtime events. | PapiLab can add a gateway above this instead of calling agent SDKs directly from UI. |
| OpenCode adapter | Synara already includes `OpenCodeAdapter` using `@opencode-ai/sdk/v2`, starts/connects to an OpenCode-compatible server, maps permissions/questions/events, and supports model/agent discovery, compaction, rollback, and fork. | OpenCode integration is not a from-zero project. First work is verification and hardening. |
| Local workbench tools | Terminal, Git status/diff, file search/read/write, project scripts, file previews including PDF/image/markdown-ish rendering. | These are immediately useful for scientific projects, even before scientific task loops exist. |
| Browser runtime | Electron-managed per-thread browser tabs, screenshots, CDP execution, OAuth popups, persistent browser partition. | Gives us a path toward web/PubMed/search workflows and sign-in flows. |
| Evented projections | SQLite migrations include orchestration events, provider runtime bindings, read-model projections, message/activity/session state, worktrees, handoffs, subagents, automations. | Useful as app/session projection state, but not as the scientific source of truth. |

## What PapiLab Must Own

These parts should not be inherited as Synara's product assumptions:

| PapiLab-owned area | Meaning |
| --- | --- |
| Scientific project kernel | The source of truth for research questions, hypotheses, evidence, sources, datasets, figures, notebooks, analyses, manuscripts, review state, and publication artifacts. |
| `.papilab/` project record | A local-first project record inside or beside the user's research folder. Synara thread/session rows can point at it, but should not define it. |
| Task and run ledger | Each AI run should have a PapiLab-owned record: intent, inputs, source files, web/database queries, citations, commands, changed files, generated artifacts, approvals, failures, and review status. |
| Evidence and citation model | Papers, PDFs, PubMed/OpenAlex/Semantic Scholar records, Zotero imports, quote/evidence snippets, claims, and manuscript citations. |
| Scientific permission policy | Rules for local data, lab files, clinical/private data, destructive operations, external network use, and publication-quality evidence. |
| Agent gateway | A PapiLab-owned layer that turns scientific tasks into provider turns and records results back into PapiLab state. Providers are executors, not the product brain. |
| Scientific UI panels | Literature queue, evidence table, source reader, manuscript outline, figure/data views, analysis runs, review checklist, and provenance inspection. |
| Product identity | App name, home directory, app IDs, browser partition, branch prefix, package namespace, updater channel, visible copy, and state migration policy. |

## Ownership Map

| Thing we take | Use type | How to own it |
| --- | --- | --- |
| Synara desktop app | Thin fork first, divergent fork over time | Keep upstream shape while bootstrapping. Diverge where PapiLab identity, scientific project model, and domain UI require it. |
| Synara provider adapter contract | Upstream-trackable integration and compatibility target | Preserve the adapter shape as long as possible. Add PapiLab gateway above it rather than rewriting every provider. |
| Synara `ProviderService` | Embedded runtime facade | Use it to route provider calls and recover sessions. Do not let it become the PapiLab task ledger. |
| Synara OpenCode adapter | Embedded engine via adapter | Verify it first. Patch only where needed for PapiLab permission, provenance, and OpenCode version drift. |
| OpenCode repo fork | Upstream-trackable agent fork | Keep mostly intact. Pull upstream updates. Add PapiLab-specific behavior through config, adapter prompts, skills, or small patches only after proving need. |
| Goose core | Upstream-trackable embedded agent / adapter target | Treat as a powerful internal agent platform and future provider adapter. Keep Goose itself intact where possible. |
| Goose desktop app | Reference and cherry-pick shelf | Do not use as the first desktop base. Borrow patterns for provider setup, recipes, MCP apps, ACP client handling, remote server settings, and extension management. |
| Goose ACP and SDK surfaces | Gate 1.6 adapter target | A future Synara/PapiLab provider adapter should start with `goose acp` over stdio. Authenticated `goose serve` is a later process-separated option; the old `goosed` REST server was removed upstream. |
| Goose recipes | Reference, possible import/export target | Map to PapiLab scientific task templates later, but PapiLab recipes/runs must have their own provenance schema. |
| T3 Code | Reference and cherry-pick shelf | Use only to understand Synara lineage and recover simpler patterns if Synara has over-complicated areas. |
| Synara SQLite projections | Projection, not source of truth | Useful for app/session state. PapiLab scientific state should live in a PapiLab-owned project record. |
| Synara ChatView | Divergent fork candidate | Keep initially. Split and reshape before adding heavy scientific panels. |
| Synara browser manager | Add-on layer first, later scientific browser | Keep mechanics, add PapiLab capture/provenance around searches, PDFs, PubMed, and source pages. |
| Synara Git/worktree support | Compatibility target | Useful for code/data repos, but scientific project state cannot require Git from day one. |
| Synara automations | Deferred shelf | Potentially useful later for scheduled review/search/watch tasks, but not first slice. |

## Agent Connection Strategy

The UI should not talk directly to OpenCode, Goose, Codex, or Claude as product concepts. It should talk to a PapiLab agent gateway.

Proposed stack:

```text
PapiLab UI panels and chat
  -> PapiLab Agent Gateway
    -> Synara ProviderService
      -> ProviderAdapterShape implementations
        -> OpenCode adapter first
        -> Codex / Claude / Gemini / Cursor / other Synara adapters where useful
        -> Goose adapter later
```

The gateway is where PapiLab owns meaning:

- A user asks for a literature review, data analysis, project setup, manuscript edit, or source audit.
- The gateway creates a PapiLab task/run record.
- The gateway chooses a provider and sends the provider turn through Synara's provider layer.
- Provider runtime events stream back through Synara.
- The gateway records artifacts, changed files, sources, citations, commands, approvals, and review state in PapiLab's project record.
- The provider transcript remains useful evidence, but it is not the canonical scientific project state.

### OpenCode First

Synara already has the OpenCode path:

- OpenCode provider kind exists in contracts.
- `OpenCodeProviderStartOptions` supports binary path, server URL, server password, and experimental WebSockets.
- `OpenCodeAdapter` can start or connect to an OpenCode-compatible local server.
- It creates/resumes OpenCode sessions and stores resume cursors.
- It maps OpenCode permission asks and questions into Synara's approval/user-input events.
- It supports model list, agent list, native commands, compaction, rollback, and fork.

First OpenCode work should therefore be:

1. Boot Synara in an isolated lab home.
2. Verify the current OpenCode adapter with the local or installed OpenCode runtime.
3. Record exact failure modes.
4. Add only the minimum patch needed to make OpenCode reliable as PapiLab's default executor.

### Goose Later

Goose should be connected as a separate provider or sidecar, not by replacing the desktop base.

Useful Goose surfaces:

- Core agent loop with interface/agent/extensions split.
- MCP extension management and allowlist concepts.
- ACP providers for Claude Code, Codex, Amp, Pi, and similar subscription-backed agents.
- `goose acp` over stdio and authenticated `goose serve` over HTTP/WebSocket.
- `@aaif/goose-sdk` and ACP client surfaces.
- Recipes, subrecipes, frontend tools, MCP apps, and provider setup flows.
- Session import/export and foreign agent transcript import.

Likely first Goose integration:

| Synara adapter method | Goose-backed behavior |
| --- | --- |
| `startSession` | Create or resume a Goose session through ACP. |
| `sendTurn` | Send prompt/input to Goose session. |
| `streamEvents` | Convert Goose/ACP session notifications into Synara `ProviderRuntimeEvent` values. |
| `respondToRequest` | Map approvals or elicitation responses. |
| `listModels` | Read Goose provider/model inventory. |
| `listSkills` / `listPlugins` | Map Goose extensions, recipes, and MCP apps where appropriate. |
| `compactThread` / `forkThread` | Implement only if Goose supports reliable equivalents for the chosen connection path. |

Goose is especially interesting for science because recipes/extensions can become scientific task templates and tool bundles. But that should plug into PapiLab's task/run model, not replace it.

## First Work Package For Synara

### 1. Baseline and Health Check

Goal: know what we inherited before changing it.

Actions:

- Install dependencies exactly as Synara expects.
- Boot server/web/desktop with an isolated lab home, not the real Synara user state.
- Capture current run commands, ports, env vars, and any startup errors.
- Smoke test chat creation, project creation, file preview, terminal, browser panel, provider status, and OpenCode provider discovery.
- Do not rebrand or refactor during this step.

Suggested isolated state:

```text
PAPILAB_LAB_HOME=lab/runtime/synara-home
SYNARA_HOME=lab/runtime/synara-home
```

The app should be treated as borrowed machinery until this baseline is written down.

### 2. Identity And State Namespace Fork

Goal: make sure PapiLab does not accidentally use Synara/T3 state, auth, browser, update, or branch namespaces.

This should be the first actual fork patch after baseline:

| Namespace | Current examples | PapiLab target |
| --- | --- | --- |
| Home env var | `SYNARA_HOME`, `DPCODE_HOME`, `T3CODE_HOME` | `PAPILAB_HOME`, with optional lab-only fallback during migration |
| Default home dir | `~/.synara` | `~/.papilab` or lab-specific `.papilab-lab` while prototyping |
| App display name | `Synara` | `PapiLab` or chosen brand name |
| App model ID | `com.t3tools.synara` | owned PapiLab bundle ID |
| Browser partition | `persist:synara-browser` | `persist:papilab-browser` |
| LocalStorage keys | `synara:*` | `papilab:*` |
| Branch prefix | `synara/` | `papilab/` |
| Package namespace | `@t3tools/*` | defer broad rename until build is stable, but isolate user-visible identity first |
| Updater source | Synara GitHub release assumptions | disabled or PapiLab-owned channel during lab work |

Recommendation: do not auto-import Synara user state. PapiLab is a new product. If needed later, create explicit import tools.

### 3. PapiLab Bridge Contract

Goal: create an owned layer before scientific features touch provider internals.

Start in `lab/papilab-bridge` before deciding final package placement.

Minimal contract concepts:

| Concept | Meaning |
| --- | --- |
| `PapiLabProjectRef` | Path and identity for a local scientific project. |
| `PapiLabTaskIntent` | A typed user/scientific task, such as literature search, source extraction, data analysis, repo setup, manuscript edit, or figure audit. |
| `PapiLabRun` | One execution attempt by an agent or tool. |
| `PapiLabRunInput` | Prompt, files, selected sources, datasets, settings, and constraints. |
| `PapiLabRunReceipt` | Provider, model, commands, files touched, network sources, approvals, outputs, errors, and status. |
| `PapiLabArtifactRef` | File, dataset, figure, note, manuscript section, source extraction, or result produced by a run. |

This bridge can initially call Synara through its WebSocket/API layer or through extracted server services, but the important point is conceptual: PapiLab asks for scientific tasks, providers execute turns.

### 4. Minimal PapiLab Project Mode

Goal: let the user open a scientific folder and run useful agent work without pretending the full kernel exists.

First slice:

- Use Synara project/workspace selection to choose a local research folder.
- Create a `.papilab/` manifest in that folder or in a lab fixture.
- Keep a basic task/run log under `.papilab/runs/`.
- Let OpenCode operate in the project folder.
- Capture changed files and agent outputs into PapiLab run receipts.
- Add one tiny UI affordance that proves the distinction between "chat thread" and "PapiLab project" without redesigning the whole app.

Do not add the full literature/evidence/manuscript/data model before this bridge works.

### 5. Scientific Feature Slice

Only after the agent gateway exists:

First useful scientific skill should probably be one of:

| Candidate | Why it is good first |
| --- | --- |
| Project setup / clean research repo | Uses existing file/write/run-code abilities and immediately teaches PapiLab project structure. |
| Literature search and source capture | Uses browser/web/API/PDF flow and starts building the evidence model. |
| Basic data analysis assistant | Uses local files, Python/R/Excel/notebooks, and artifact capture. |

Recommendation: start with project setup plus a very small source-capture path. It creates the project substrate and proves evidence/provenance, while avoiding a giant literature-review loop too early.

## First Code Changes I Would Actually Make

In order:

1. Add a lab runbook for booting Synara with isolated state.
2. Boot and smoke test Synara unchanged.
3. Verify OpenCode provider discovery and one simple OpenCode turn.
4. Create a small PapiLab bridge contract note or package in `lab/papilab-bridge`.
5. Patch identity/state namespace in Synara fork.
6. Add a minimal PapiLab project manifest/run receipt experiment.
7. Add the smallest UI entry point to show a PapiLab project context.
8. Only then start Goose adapter spike.

The temptation will be to start with visible UI rebranding. Do not make that the whole first step. The first real step is proving we can run Synara safely and own state boundaries.

## Main Risks

| Risk | Meaning | Mitigation |
| --- | --- | --- |
| Product model drift | Synara is organized around coding projects, Git worktrees, provider threads, diffs, and terminals. PapiLab needs scientific objects and provenance. | Keep PapiLab kernel separate from Synara projections. |
| Giant UI component | `ChatView.tsx` is a large central component. Scientific panels will make it worse if added directly. | Split before heavy domain UI. |
| Hidden identity state | Synara/T3 names appear in env vars, storage, branch prefixes, package names, tests, updater config, and copy. | Controlled identity namespace patch. |
| Provider abstraction mismatch | Provider events are turn/chat oriented, while PapiLab needs task/run/artifact/evidence semantics. | PapiLab agent gateway above provider layer. |
| Goose overlap | Goose can do many of the same things as Synara providers, causing duplicated orchestration. | Treat Goose as a provider/substrate behind the gateway, not as a competing app shell. |
| Upstream churn | Synara, OpenCode, and Goose are active projects. | Keep forks clean, patch through adapters/add-ons first, cherry-pick divergent code later. |
| Scientific safety | Agents can read/write files, run commands, browse, and modify project state. | PapiLab-owned permission policy and run receipts from the beginning. |

## Open Questions

- Should the first product name be final before namespace patch, or should we use a temporary `PapiLab Lab` identity?
- Should `.papilab/` live inside the user project by default, or should there be an app-managed mirror for folders the user does not want modified?
- Should PapiLab call Synara services in-process, through WebSocket, or through a small extracted package?
- Does the current OpenCode adapter work with the pinned OpenCode commit and the locally installed `opencode` binary?
- Goose was assigned to the former Gate 1.6 plan. Current sequencing is owned by the product roadmap; the inspected `goose acp` recommendation remains research evidence.
- Which first scientific slice should be used to validate the gateway: project setup, source capture, or data analysis?

## Recommendation

Use Synara as the first desktop base. Keep the first fork as thin as possible around runtime machinery, but become deliberately divergent around identity, scientific project state, and domain UI.

Use OpenCode first because Synara already has a serious adapter for it. The first OpenCode task is verification and hardening, not invention.

Keep Goose upstream-trackable and bring it in after the gateway exists. Goose is too valuable to ignore, especially for ACP/MCP/recipes/extensions, but it should become an agent substrate behind PapiLab's gateway rather than the first UI base.

Most important: create the PapiLab agent gateway and project record early. That is the difference between "a Synara fork for scientists" and "PapiLab owning scientific work with reusable agents inside it."
