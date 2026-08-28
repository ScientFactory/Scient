# Documentation Disposition Ledger — 2026-08-28

Status: Historical
Owner: Yaacov
Created: 2026-08-28
Last updated: 2026-08-28
Purpose: Preserves the completed one-time migration disposition of existing Scient-family Markdown and the decisions promoted into durable owners.
Doc type: Planning note

## Document Rules

This was the temporary migration authority for the 2026-08-28 documentation
program. It reviewed collections and named exceptions against the exhaustive
generated inventory. It never authorized bulk movement, deletion, public
publication, or a claim that every document was current.

The migration review is complete and this record no longer governs recurring
documentation work. Durable rules now live in the documentation policy,
repository-local guidance and indexes, the capability map, canonical Help
pages, and the website publishing architecture. Consult this file only for the
one-time disposition rationale and exit evidence.

The generated companion
`docs/research/documentation-inventory-2026-08-28.generated.json` records every
tracked Markdown path, blob, title, exact repository revision, preliminary
logical role, and routing default. `scient-agent` is explicitly excluded and
was not inspected.

## Completion Record

- All 33 desktop Help pages received an explicit outcome in desktop PRs
  [#195](https://github.com/ScientFactory/scient-desktop/pull/195) and
  [#197](https://github.com/ScientFactory/scient-desktop/pull/197). Thirty-two
  desktop-first pages qualified for a labelled exact-source preview; the
  unreleased mobile page remains canonical Help but not public Scient Docs.
- Website [PR #31](https://github.com/ScientFactory/ScientFactory-website/pull/31)
  records the durable 32-page selection, exact desktop revision, page hashes,
  navigation metadata, source links, raw Markdown, and machine-readable index.
- Desktop [PR #198](https://github.com/ScientFactory/scient-desktop/pull/198)
  retires the completed Help queue and its index route. Git and the program
  record preserve the qualification and retirement evidence without a second
  permanent registry.
- The seven accepted desktop areas remain logical roles over useful existing
  paths. The pilots found no authority gain sufficient to justify broad
  movement of inherited `docs/user/` or mixed `docs/internals/` content.
- Existing current owners were corrected and routed rather than replaced by a
  universal feature schema. The compact capability map owns family routing;
  implementation, Help, architecture, operations, upstream, plans, and records
  retain their distinct nearest owners.
- The generated inventory remains reproducible audit evidence. It may be
  regenerated for a future migration or audit, but it is not a recurring
  hand-maintained catalog.

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

| Repository and collection                                                           | Logical owner and question answered                                                             | Primary dependency                                                                | Update trigger                                                                                | Reviewed disposition                                                                                                                               |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Scient/docs/product/`                                                              | Product truth, philosophy, identity, and cross-product capability routing                       | Accepted PRD and explicit human acceptance                                        | Product boundary, vocabulary, principle, or capability-family ownership changes               | Retain and maintain. The capability map routes; it does not duplicate desktop implementation detail.                                               |
| `Scient/docs/architecture/`                                                         | Cross-product architecture direction and accepted decisions                                     | Product truth, implementation evidence, and decision status                       | Authority, invariant, hard-to-reverse boundary, or accepted decision changes                  | Retain. Do not promote proposals to accepted architecture implicitly.                                                                              |
| `Scient/docs/planning/`                                                             | Roadmaps, implementation direction, intake, and historical migration plans                      | Product truth, capability map, research, and current implementation               | Priority, sequencing, selected architecture, completion, supersession, or retirement changes  | Retain with explicit status. Preserve historical and superseded plans with successors instead of flattening them into current truth.               |
| `Scient/docs/research/`, `lab/external/`                                            | Source evidence, evaluations, spikes, and raw external evidence                                 | Inspected source and snapshot date                                                | Source changes, adoption decision, invalidated evidence, or a new synthesis                   | Retain. Keep evidence separate from selected dependency or accepted architecture. Generated inventory lives here as audit evidence.                |
| `Scient/docs/quality/`, `docs/development/`, `docs/operations/`, and `docs/design/` | Cross-product doctrine, contributor guidance, operations, and design principles                 | Real implementation, workflow, or accepted principle                              | Commands, gates, process, supported platform, or durable principle changes                    | Retain and maintain; placeholders must remain honest until the surface exists.                                                                     |
| `Scient/lab/notes/`                                                                 | Dated investigations and working records worth preserving                                       | Snapshot evidence and a current successor when one exists                         | Record correction or promotion of a durable conclusion                                        | Retain as records. Do not treat as policy or current implementation.                                                                               |
| `Scient/skills/` and root orientation/protocol files                                | Repository-owned workflows and thin routing                                                     | Current repository paths and policy                                               | Workflow, route, or contributor contract changes                                              | Retain. Skills assist work but do not become product authority.                                                                                    |
| `Scient/docs/documentation-policy.md` and `docs/onboarding.md`                      | Family governance and collaborator development route                                            | Accepted documentation system and current repository map                          | Documentation contract, authority, or onboarding route changes                                | Retain and maintain. Keep policy durable and onboarding navigational; neither replaces nearest owners.                                             |
| `scient-desktop/docs/user/`                                                         | Canonical authored Help for released desktop behavior                                           | Current supported release and implementation                                      | User-visible behavior, limitation, setting, workflow, platform support, or correction changes | Retain and maintain. The reviewed website manifest selects exact-source public pages; unreleased mobile remains excluded. No copied website prose. |
| `scient-desktop/docs/internals/`                                                    | Mixed current capabilities, architecture, development, upstream context, and historical records | Current code, tests, `UPSTREAM.md`, and cross-product plans                       | Implementation, invariant, debugging workflow, T3 seam, or status changes                     | Route logically before moving. Keep compatibility paths through pilots; update existing owners before creating a new file.                         |
| `scient-desktop/docs/architecture/`                                                 | Desktop-specific architecture boundaries                                                        | Current desktop implementation and accepted architecture decisions                | Renderer, authority, invariant, or hard-to-reverse implementation boundary changes            | Retain and maintain. Keep this explicit architecture path; do not move it into mixed internals for symmetry.                                       |
| `scient-desktop/docs/operations/`                                                   | Desktop runbooks and recovery procedures                                                        | Real commands, workflows, release paths, and service behavior                     | Operational process, command, platform, failure mode, or rollback changes                     | Retain and maintain. Historical rehearsals remain records with a clear label.                                                                      |
| `scient-desktop/UPSTREAM.md` and dated upstream receipts in `docs/internals/`       | T3 donor ancestry, protected divergences, conflicts, and reviewed integration evidence          | Exact upstream and integration revisions                                          | Upstream refresh, conflict resolution, protected-seam change, or divergence retirement        | Retain. `UPSTREAM.md` is the current authority and routes to dated evidence; receipts remain records, not competing policy.                        |
| `scient-desktop/docs/reports/`                                                      | Dated forensic investigations and temporary migration records                                   | Exact checkout/PR evidence and current durable successors                         | Factual correction, reconciliation, or completion of the migration purpose                    | Retain the three Historical investigations. The completed Help qualification queue retires in desktop PR #198 after its exit condition.            |
| `scient-desktop` package/source `README.md` files                                   | Local development or component reference beside code                                            | The owning package, source, command, or API                                       | Local component behavior, setup, or contract changes                                          | Retain beside source. Do not centralize merely for folder symmetry.                                                                                |
| `scient-desktop/.agents/skills/` support Markdown and `.macroscope/` references     | Repository-owned workflow and development-tooling guidance                                      | The owning skill or check-run tool                                                | Tool contract, fixture, convention, or validation behavior changes                            | Retain beside the workflow/tooling. Do not treat these files as product Help or architecture authority.                                            |
| `scient-desktop/apps/marketing/tweets.md`                                           | Dated product-communication material                                                            | Historical release/message context                                                | Correction or explicit reuse                                                                  | Retain as a record; it does not govern current product behavior.                                                                                   |
| Nested mobile-module `UPSTREAM.md` and `THIRD_PARTY_NOTICES.md` files               | Local adaptation ancestry and third-party attribution                                           | The owning adapted module, dependency, and license                                | Donor/dependency update, adaptation change, or attribution change                             | Retain beside source. Route nested upstream records as Upstream and notices as development references.                                             |
| `scient-desktop/docs/fixtures/`                                                     | Markdown test inputs                                                                            | Tests that consume them                                                           | Parser/rendering fixture requirement changes                                                  | Structurally excluded from authored documentation migration.                                                                                       |
| `scient-desktop/.repos/` Markdown                                                   | Vendored donor/reference material                                                               | Vendored source revision and license                                              | Vendor refresh                                                                                | Structurally excluded from Scient-authored totals and decisions; never rewrite as Scient documentation.                                            |
| Website root governance and contributor Markdown                                    | Website implementation, publishing, and deployment ownership                                    | Website code and the selected docs source/version                                 | Publishing architecture, build, deployment, or contribution contract changes                  | Retain and maintain in the website repository.                                                                                                     |
| Website `docs/architecture/`                                                        | Website-specific architecture boundaries                                                        | Website implementation and accepted cross-repository publishing contract          | Renderer, transport, source/version, deployment, or hard-to-reverse website boundary changes  | Retain and maintain in the website repository; link to family policy without copying it.                                                           |
| Website `/docs` content, indexes, and manifests                                     | Public rendering, navigation, search, and exact source/version disclosure                       | Qualified `scient-desktop/docs/user/` source and independently deployable website | Help qualification, source revision, supported release, correction, or publishing failure     | Generated or source-linked view only. Stable and preview truth must be explicit; rollback must not mutate canonical Help.                          |

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
  was temporary and is retired by desktop PR #198 after every Help page gained
  durable publication metadata or a documented not-public disposition.
- The provider lifecycle plan in `Scient` remains Proposed product and
  architecture direction; current desktop owners decide what is implemented.
- In-flight desktop PRs, including the draft `ComputeSession` foundation, are
  not shipped truth. Plans may account for them explicitly without rebuilding
  their accepted foundation or advertising them as current capability.

## Migration Outcome And Separate Gates

The inventory, Help review, three pilots, nearest-owner corrections, public
source/version proof, cross-repository ordering, and rollback model were all
completed in the candidate PR stacks recorded above. The evidence supported
logical routing over physical movement, manifest-owned publication metadata
over per-page mandatory metadata, and generated views over copied prose.

The following remain separate product or release decisions rather than reasons
to keep this migration ledger active:

- stable public publication pinned to an exact released app source;
- a documentation MCP, considered only after real retrieval failures;
- product architecture rebuilds or shared-infrastructure rewrites;
- any future physical move whose authority gain exceeds link and upstream
  conflict cost; and
- live maintenance proof from the next real product-feature retirement and T3
  integration. Those events must use the durable contract when they occur, but
  they do not require a permanent migration registry.

## Exit Review

The retirement review confirmed that every in-scope collection and named
exception has a retained, routed, excluded, generated, or retired outcome; all
Help pages have durable public or not-public status; pilot structural choices
are recorded; indexes route durable owners and useful records; source, hash,
link, metadata, build, and rendered-preview checks pass; the temporary Help
queue has a durable successor and retirement record; and lasting rules have
been promoted.

No Scient-authored Markdown was discarded as part of broad normalization. The
only removed authored document is the queue whose own lifecycle required
retirement; its contents and deletion remain in Git history. Vendored T3
material remained structurally excluded and untouched, and `scient-agent`
remained uninspected.
