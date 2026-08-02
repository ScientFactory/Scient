# T3 Migration Capability Catalog

Status: Draft
Owner: Yaacov
Created: 2026-08-02
Last updated: 2026-08-02
Purpose: Preserves a compact, repo-local index of the capabilities evaluated for the proposed T3 foundation migration.
Doc type: Research evidence

## How To Use This Catalog

This file preserves the 159 source IDs and titles used by the
[T3 foundation migration proposition](../../planning/t3-foundation-migration-proposition.md).
It is an evidence index, not product truth, an implementation backlog, or proof
that a capability exists at the current head of any repository.

The proposition owns the current disposition of each ID. Before implementation,
verify the behavior and owning seam against the exact selected Scient, Synara,
T3, and Scient Agent revisions. Branch-derived entries require provenance,
ownership, and state verification before they may be treated as available work.

The large raw AI reports are not committed beside this index because they mix
useful observations with stale baselines, unverified paths, estimates, and
recommendations. Their input identity is recorded below so a future review can
identify the exact material without creating parallel canonical documentation.

## Input Provenance

- `feature-parity-catalog.md` supplied by Yishay — SHA-256 `380080c7821c29abc6c44ab47fe7fd15e087e13dd4a50d84be580750164d5a7c`; source of the IDs and titles below.
- `t3code-migration-full-analysis.md` supplied by Yaacov — SHA-256 `7a8bebb30e0167d34ef1266db343a9d7a48c20a7202b831a74caa958894d0306`; comparative migration research.
- `proud-napping-kitten.md`, Fable's first investigation — SHA-256 `c22e3eec1b965c698be842da1559bea9a987de652268c02fa7b325690a413102`; pre-proposition research.
- Fable's revised seam-contract plan supplied as `pasted-text.txt` — SHA-256 `d15ce84d0db3a58635079a351325f7b8d899a5759d164b1aaa72db64dbf197b5`; critical review and alternative migration plan.

Source prefixes:

- **S** — Synara-derived or inherited capability evidence.
- **P** — post-fork Synara capability evidence.
- **C** — Scient-added capability evidence.
- **B** — branch or in-flight capability evidence; not accepted as current code without exact provenance.

## Synara-derived capabilities present in the starting Scient lineage (62)

- **S28** — Gemini provider integration
- **S29** — OpenCode and Kilo Code provider integration
- **S30** — Cursor CLI provider integration
- **S31** — Pi provider integration
- **S32** — Grok provider integration and ACP hardening
- **S33** — Factory Droid CLI provider integration
- **S34** — Antigravity CLI provider integration
- **S35** — Codex adapter: thread compaction and adapter hardening
- **S36** — Codex image generation with secure local-image route
- **S37** — Claude 1M context window (per-thread) and runaway-usage controls
- **S38** — Claude adapter: model tiers, credential keepalive and hardening
- **S39** — Provider maintenance and settings surface
- **S40** — Provider model/agent discovery and scoping hardening
- **S41** — Provider usage panel and rate-limit tracking
- **S42** — Provider session lifecycle and recovery hardening
- **S03** — Sidebar navigation surfaces: search palette, import mode, recent switcher
- **S05** — Sidebar organization and polish
- **S12** — Live message trail and share-as-image
- **S15** — Transcript tool-call details dialog
- **S16** — Pinned messages, thread notes and text markers
- **S17** — Environment panel and chat recap
- **S18** — Chat markdown rendering (math, link chips, code blocks)
- **S19** — Split chat panes
- **S20** — Sidechat threads
- **S27** — Plan mode
- **S59** — Transcript rendering, streaming defaults and turn presentation
- **S60** — Thread export and in-app feedback commands
- **S62** — Thread-title auto-generation and normalization
- **S06** — Provider-specific slash commands and keybinding surface
- **S07** — Composer @mention system and context features
- **S08** — Prompt history navigation in composer
- **S10** — Chat file attachments
- **S11** — AppSnap: macOS app-screenshot capture shortcut
- **S13** — Inline file comments (composer and preview)
- **S14** — Secure local file/PDF preview with explicit preview grants
- **S57** — Workspace tooling: editor integration, editor mode, explorer and search
- **S02** — Terminal workspace subsystem
- **S01** — Embedded browser panel and browser-use lifecycle
- **S44** — Managed git worktrees
- **S45** — In-app git actions and branch recovery
- **S46** — GitHub pull request integration
- **S47** — Diff panel, diff scopes and diff performance
- **S04** — Thread import and history backfill from provider CLI sessions
- **S21** — Thread lifecycle: temporary threads, archive, bulk actions, retention and soft delete
- **S23** — Projects, workspace folders and directory model
- **S24** — Studio workspace surface
- **S43** — Cross-provider thread handoff
- **S48** — WebSocket-to-Effect-RPC server migration
- **S49** — Orchestration projection, turn-state and persisted-state hardening
- **S26** — Portable cross-provider skills system
- **S25** — Automations subsystem
- **S09** — Voice transcription in composer (Synara implementation)
- **S58** — Task completion notifications and status banners
- **S50** — Theming: theme pack editor, tokens, density and appearance
- **S51** — UI polish and shared component primitives
- **S52** — Desktop shell hardening (startup, window state, environment, shutdown)
- **S53** — Custom Windows titlebar and native caption buttons
- **S54** — Desktop auto-update UX and cached release feed
- **S56** — Release/packaging process maintenance and feature flags
- **S55** — DP Code to Synara rebrand, identity bridge and home-data migration
- **S22** — Profile stats, activity heatmap and stats archive
- **S61** — Client and server performance work

## Synara changes after the Scient fork that were not inherited (27)

- **P05** — Claude native CLI subagents, dynamic workflows and agents chrome
- **P06** — Runtime modes and auto-approval across providers
- **P19** — Remove legacy effect-acp compatibility layer
- **P23** — Post-fork provider adapter hardening bundle
- **P07** — Universal live tool activity in the chat timeline
- **P14** — Anchor sent messages while streaming responses
- **P15** — Sidebar refinement and live-thread prioritization
- **P12** — Configurable queue-or-steer follow-up behavior
- **P13** — Thread @-mentions / cross-thread referencing
- **P04** — Provider-agnostic visible browser control and DOM annotations
- **P27** — Git/PR workflow polish (post-fork)
- **P03** — Project spaces and space-aware orchestration
- **P09** — WebSocket transport negotiation, delta resume and precompressed assets
- **P10** — Session, checkpoint and turn recovery hardening
- **P11** — Turn settlement, revert and provider-admission hardening (v0.6.3)
- **P21** — v0.6.1 wedged-database recovery and migration lineage guard
- **P01** — Synara Agent Gateway (MCP app-control tools for provider threads)
- **P02** — External MCP client integration and runtime management
- **P08** — Automation agent-surface and Codex-parity run protocol
- **P26** — Post-fork UI polish bundle
- **P24** — Keybinding and platform shortcut fixes
- **P20** — v0.6.0 Windows/Linux packaging stabilization saga
- **P22** — Canary pre-release channel workflow
- **P18** — Large-scale internal architecture decomposition
- **P16** — Server latency and startup performance bundle
- **P17** — React Compiler adoption and render hot-path optimization
- **P25** — Post-fork infrastructure hardening (DNS, SQLite locking, worktree cleanup, provenance)

## Scient-added capabilities (56)

- **C11** — Guided provider connection flow
- **C12** — Managed provider runtime installation (install recipes)
- **C13** — Managed provider lifecycle actions and connection-state reconciliation
- **C14** — Grok direct OAuth sign-in
- **C15** — Provider selection defaults, discovery caching and refresh policy
- **C16** — OpenCode/Kilo turn-completion hardening
- **C17** — Claude/Codex adapter recovery and isolation fixes
- **C18** — Antigravity provider fix bundle
- **C19** — Small provider adapter fixes (Droid, Cursor, Grok, Gemini)
- **C29** — Bidirectional (RTL) chat rendering
- **C32** — Changed-file cards: accessibility, density and compact previews
- **C34** — Right dock surfaces with file and explorer panes
- **C36** — Explicit new-thread workspace intent and safe project selection
- **C30** — IME composition Enter guard
- **C08** — Secure HTML artifact previews with isolated execution and live refresh
- **C09** — Universal local file viewer and artifact preview cards
- **C40** — Terminal fixes (AppImage env scrub, selection actions)
- **C10** — Browser panel reliability and UX (isolation, recovery, tabs, picture-in-picture)
- **C37** — Git text-generation policy and PR template discovery
- **C38** — Git correctness and responsiveness fixes
- **C39** — Studio Git gating and folder access
- **C22** — WS transport and stream lifecycle correctness
- **C23** — Message-level conversation forks and fork provenance
- **C24** — Orchestration turn/thread lifecycle fixes
- **C35** — Add Project dialog with git clone and native folder drop
- **C05** — Scient agent gateway: host-served MCP
- **C01** — Scient project-init engine (@scientfactory/project-init)
- **C02** — Project-init host integration (RPC seam, dialog, packaging)
- **C03** — Built-in skills activation system (@scientfactory/scient-skills)
- **C04** — Shipped skill content (skill-authoring, evidence-to-note, medical-exam-study)
- **C06** — ChatGPT-first voice transcription with local Whisper fallback
- **C27** — Unified notification / activity center
- **C31** — Renderer and platform polish (typography, motion, fonts, zoom, settings defaults)
- **C33** — Branch/automation workflow affordances and native clipboard fallback
- **C20** — Desktop backend lifecycle supervisor and crash breaker
- **C21** — Connection recovery: RPC replay policy, resupervision and diagnostics
- **C07** — Whisper runtime staging and packaging
- **C41** — Curated in-app release notes (What's New)
- **C42** — Packaged desktop startup proof
- **C43** — Released migration lineage guard
- **C46** — Code signing and notarization (macOS and Windows)
- **C47** — Trusted update policy and updater ownership invariant
- **C49** — Cross-platform frozen release staging
- **C50** — Linux packaging and development support
- **C44** — Brand identity guard and product identity chain (LitRev to PapiLab to Scient)
- **C45** — Secure Scient state initialization and data-directory boundary
- **C48** — Workflow action SHA-pinning guard
- **C51** — Upstream intake tooling and review checkpoints
- **C52** — Engineering process: contribution, stacked-PR governance and design-QA verification
- **C53** — Browser test harness (.browser.tsx corpus and vitest configs)
- **C56** — Marketing website built then removed
- **C25** — Server security hardening (secrets, attachment confinement, image parsing)
- **C26** — Server and renderer performance bundle
- **C28** — Consent-aware analytics and telemetry ownership
- **C54** — Additive contracts surface (19 new RPCs and schemas)
- **C55** — Additive shared package surface (27 new modules)

## In-flight or branch-derived analysis (14)

- **B06** — One-click browser account connect and first-run onboarding
- **B07** — Codex extraction-hang fix, CLI error surfacing and provider disconnect
- **B12** — Codex warning text normalization
- **B08** — Durable and clickable chat images
- **B13** — Small upstream-derived UI branches (new-chat project heading, project actions menu focus)
- **B09** — Subagent subtree lifecycle
- **B10** — Checkpoint working-index stat cache
- **B01** — Agent gateway Slice 1: read/coordination tools
- **B02** — Agent gateway Slice 2: send_message and interrupt drive tools
- **B03** — Scient operation authority (governed execution policy)
- **B04** — Scient operation executor (centralized governed execution)
- **B05** — Scient durable operation receipts and migration 061
- **B11** — Linux packaged acceptance CI and installed-package updater identity
- **B14** — Maintenance and release bookkeeping branches
