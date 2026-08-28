# Documentation Disposition Ledger — 2026-08-28

Status: Draft
Owner: Yaacov
Created: 2026-08-28
Last updated: 2026-08-28
Purpose: Records the reviewed migration disposition of existing Scient-family Markdown without turning the generated path inventory into a second documentation authority.
Doc type: Planning note

## Document Rules

This is a temporary migration authority. It reviews collections and named
exceptions against the exhaustive generated inventory. It does not authorize
bulk movement, deletion, public publication, or a claim that every document is
current. Preserve it until every in-scope collection has reached its durable
destination or an explicit retained state; then summarize any lasting
decisions in policy or the nearest owner and mark this ledger Historical.

The generated companion
`docs/research/documentation-inventory-2026-08-28.generated.json` records every
tracked Markdown path, blob, title, exact repository revision, preliminary
logical role, and routing default. `scient-agent` is explicitly excluded and
was not inspected.

## Disposition Vocabulary

- **Retain** — the current path and role are durable.
- **Retain and maintain** — the path stays, but current truth must continue to
  be reconciled as the product changes.
- **Qualify for publication** — canonical Help stays in `docs/user/`; a
  reviewed, version-aware website view may publish it.
- **Route logically** — the current compatibility path stays while indexes
  identify its logical role.
- **Historical or record** — preserve useful evidence but do not use it as
  current guidance.
- **Structurally excluded** — keep the file for its source, fixture, or vendored
  purpose; do not count it as authored product knowledge.
- **Generated view** — regenerate from owners; never hand-maintain a competing
  prose copy.
- **Review exception** — a named file needs a specific correction, successor,
  status, or later movement decision.

No disposition silently deletes material. A later removal requires exact
target review, successor/history preservation where useful, link validation,
and ordinary PR authorization.

## Reviewed Collections

| Repository and collection                                                           | Logical owner and question answered                                                             | Primary dependency                                                                | Update trigger                                                                                | Reviewed disposition                                                                                                                                            |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Scient/docs/product/`                                                              | Product truth, philosophy, identity, and cross-product capability routing                       | Accepted PRD and explicit human acceptance                                        | Product boundary, vocabulary, principle, or capability-family ownership changes               | Retain and maintain. The capability map routes; it does not duplicate desktop implementation detail.                                                            |
| `Scient/docs/architecture/`                                                         | Cross-product architecture direction and accepted decisions                                     | Product truth, implementation evidence, and decision status                       | Authority, invariant, hard-to-reverse boundary, or accepted decision changes                  | Retain. Do not promote proposals to accepted architecture implicitly.                                                                                           |
| `Scient/docs/planning/`                                                             | Roadmaps, implementation direction, intake, and historical migration plans                      | Product truth, capability map, research, and current implementation               | Priority, sequencing, selected architecture, completion, supersession, or retirement changes  | Retain with explicit status. Preserve historical and superseded plans with successors instead of flattening them into current truth.                            |
| `Scient/docs/research/`, `lab/external/`                                            | Source evidence, evaluations, spikes, and raw external evidence                                 | Inspected source and snapshot date                                                | Source changes, adoption decision, invalidated evidence, or a new synthesis                   | Retain. Keep evidence separate from selected dependency or accepted architecture. Generated inventory lives here as audit evidence.                             |
| `Scient/docs/quality/`, `docs/development/`, `docs/operations/`, and `docs/design/` | Cross-product doctrine, contributor guidance, operations, and design principles                 | Real implementation, workflow, or accepted principle                              | Commands, gates, process, supported platform, or durable principle changes                    | Retain and maintain; placeholders must remain honest until the surface exists.                                                                                  |
| `Scient/lab/notes/`                                                                 | Dated investigations and working records worth preserving                                       | Snapshot evidence and a current successor when one exists                         | Record correction or promotion of a durable conclusion                                        | Retain as records. Do not treat as policy or current implementation.                                                                                            |
| `Scient/skills/` and root orientation/protocol files                                | Repository-owned workflows and thin routing                                                     | Current repository paths and policy                                               | Workflow, route, or contributor contract changes                                              | Retain. Skills assist work but do not become product authority.                                                                                                 |
| `Scient/docs/documentation-policy.md` and `docs/onboarding.md`                      | Family governance and collaborator development route                                            | Accepted documentation system and current repository map                          | Documentation contract, authority, or onboarding route changes                                | Retain and maintain. Keep policy durable and onboarding navigational; neither replaces nearest owners.                                                          |
| `scient-desktop/docs/user/`                                                         | Canonical authored Help for released desktop behavior                                           | Current supported release and implementation                                      | User-visible behavior, limitation, setting, workflow, platform support, or correction changes | Retain and maintain; qualify each page for public Scient Docs through the temporary Help queue and later durable publication metadata. No copied website prose. |
| `scient-desktop/docs/internals/`                                                    | Mixed current capabilities, architecture, development, upstream context, and historical records | Current code, tests, `UPSTREAM.md`, and cross-product plans                       | Implementation, invariant, debugging workflow, T3 seam, or status changes                     | Route logically before moving. Keep compatibility paths through pilots; update existing owners before creating a new file.                                      |
| `scient-desktop/docs/architecture/`                                                 | Desktop-specific architecture boundaries                                                        | Current desktop implementation and accepted architecture decisions                | Renderer, authority, invariant, or hard-to-reverse implementation boundary changes            | Retain and maintain. Keep this explicit architecture path; do not move it into mixed internals for symmetry.                                                    |
| `scient-desktop/docs/operations/`                                                   | Desktop runbooks and recovery procedures                                                        | Real commands, workflows, release paths, and service behavior                     | Operational process, command, platform, failure mode, or rollback changes                     | Retain and maintain. Historical rehearsals remain records with a clear label.                                                                                   |
| `scient-desktop/UPSTREAM.md` and dated upstream receipts in `docs/internals/`       | T3 donor ancestry, protected divergences, conflicts, and reviewed integration evidence          | Exact upstream and integration revisions                                          | Upstream refresh, conflict resolution, protected-seam change, or divergence retirement        | Retain. `UPSTREAM.md` is the current authority and routes to dated evidence; receipts remain records, not competing policy.                                     |
| `scient-desktop/docs/reports/`                                                      | Dated forensic investigations and temporary migration records                                   | Exact checkout/PR evidence and current durable successors                         | Factual correction, reconciliation, or completion of the migration purpose                    | Retain as records during this program. The three investigations become Historical evidence; temporary queues retire after their exit conditions.                |
| `scient-desktop` package/source `README.md` files                                   | Local development or component reference beside code                                            | The owning package, source, command, or API                                       | Local component behavior, setup, or contract changes                                          | Retain beside source. Do not centralize merely for folder symmetry.                                                                                             |
| `scient-desktop/.agents/skills/` support Markdown and `.macroscope/` references     | Repository-owned workflow and development-tooling guidance                                      | The owning skill or check-run tool                                                | Tool contract, fixture, convention, or validation behavior changes                            | Retain beside the workflow/tooling. Do not treat these files as product Help or architecture authority.                                                         |
| `scient-desktop/apps/marketing/tweets.md`                                           | Dated product-communication material                                                            | Historical release/message context                                                | Correction or explicit reuse                                                                  | Retain as a record; it does not govern current product behavior.                                                                                                |
| Nested mobile-module `UPSTREAM.md` and `THIRD_PARTY_NOTICES.md` files               | Local adaptation ancestry and third-party attribution                                           | The owning adapted module, dependency, and license                                | Donor/dependency update, adaptation change, or attribution change                             | Retain beside source. Route nested upstream records as Upstream and notices as development references.                                                          |
| `scient-desktop/docs/fixtures/`                                                     | Markdown test inputs                                                                            | Tests that consume them                                                           | Parser/rendering fixture requirement changes                                                  | Structurally excluded from authored documentation migration.                                                                                                    |
| `scient-desktop/.repos/` Markdown                                                   | Vendored donor/reference material                                                               | Vendored source revision and license                                              | Vendor refresh                                                                                | Structurally excluded from Scient-authored totals and decisions; never rewrite as Scient documentation.                                                         |
| Website root governance and contributor Markdown                                    | Website implementation, publishing, and deployment ownership                                    | Website code and the selected docs source/version                                 | Publishing architecture, build, deployment, or contribution contract changes                  | Retain and maintain in the website repository.                                                                                                                  |
| Website `docs/architecture/`                                                        | Website-specific architecture boundaries                                                        | Website implementation and accepted cross-repository publishing contract          | Renderer, transport, source/version, deployment, or hard-to-reverse website boundary changes  | Retain and maintain in the website repository; link to family policy without copying it.                                                                        |
| Future website `/docs` content, indexes, and manifests                              | Public rendering, navigation, search, and exact source/version disclosure                       | Qualified `scient-desktop/docs/user/` source and independently deployable website | Help qualification, source revision, supported release, correction, or publishing failure     | Generated or source-linked view only. Stable and preview truth must be explicit; rollback must not mutate canonical Help.                                       |

## Named Exceptions Already Reconciled

- `scient-desktop/docs/internals/provider-lifecycle-unification-proposal.md`
  is Historical delivery context. Current behavior belongs to
  `provider-lifecycle.md`, `provider-lifecycle-capability-audit.md`, provider
  Help, and current code.
- `scient-desktop/docs/internals/scient-fork-pr-descriptions.md` is Historical
  PR wording for merged work. Current behavior belongs to
  `scient-fork-divergence.md` and conversation-fork Help.
- `scient-desktop/docs/internals/scientific-artifact-studio.md` is a
  superseded repository copy. The canonical proposed roadmap lives in
  `Scient/docs/planning/scientific-artifact-studio.md`.
- `scient-desktop/docs/reports/scient-specific-capabilities.md`,
  `scient-pr-and-evolution-ledger.md`, and
  `scient-t3-divergence-integration-and-retirements.md` are dated forensic
  evidence. They seed durable owners but must not become parallel living
  manuals.
- `scient-desktop/docs/reports/scient-docs-help-qualification-queue-2026-08-28.md`
  is temporary. It exits after every Help page has durable publication
  metadata or a documented not-public disposition.
- The provider lifecycle plan in `Scient` remains Proposed product and
  architecture direction; current desktop owners decide what is implemented.
- In-flight desktop PRs, including the draft `ComputeSession` foundation, are
  not shipped truth. Plans may account for them explicitly without rebuilding
  their accepted foundation or advertising them as current capability.

## Migration Actions And Gates

### Complete before broad normalization

1. Generate and review the exact three-repository path inventory.
2. Complete the Help publication queue without rewriting all Help solely for
   stylistic consistency.
3. Run three different pilots: Projects/Getting Started, Files/PDF/LaTeX, and
   Providers.
4. In each pilot, prove nearest-owner updates, Help qualification, public
   source/version metadata, cross-repository dependency handling, stale-page
   correction, and rollback.
5. Record any repeated ambiguity. Promote only rules that proved necessary;
   avoid role folders or metadata that do not solve a real maintenance problem.

### Defer until the pilots prove value

- broad movement out of inherited `docs/internals/` paths;
- final public information architecture for every Help page;
- a universal machine-readable document schema;
- additional mandatory feature templates or review bureaucracy;
- a documentation MCP;
- product architecture rebuilds or shared-infrastructure rewrites.

The rest of the program does not wait: current truth repairs, governance,
inventory, capability routing, Help review, website publishing foundations,
and maintenance checks can proceed in this implementation goal.

## Exit Review

This ledger can retire only when:

- the generated inventory has no unreviewed in-scope collection or named
  exception;
- all Help pages have durable publication or not-public status;
- pilots have resolved the deferred structural choices;
- current indexes route every durable owner and useful historical record;
- links, metadata, and exact source/version publication checks pass;
- temporary queues have been removed or marked Historical with a successor;
- lasting rules have been promoted to policy, repository-local guidance, or
  the nearest durable owner; and
- a final review confirms that no Scient-authored Markdown was lost, silently
  reclassified as current, or confused with vendored T3 material.
