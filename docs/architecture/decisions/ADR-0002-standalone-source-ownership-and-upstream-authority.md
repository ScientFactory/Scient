# ADR-0002: Standalone Source Ownership And Upstream Authority

Status: Accepted
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-08-02
Purpose: Records ScientFactory's decision to own standalone desktop and agent repositories while treating original projects as read-only, selectively reviewed sources.
Doc type: Architecture decision

## Context

Accepted by Yaacov on 2026-07-18 after the PapiLab-to-Scient repository
transfer and before the first recurring upstream review process was activated.

Scient's desktop application began as a GitHub fork of Synara, and the Scient
agent source began as a GitHub fork of OpenCode. The fork relationship helped
with early ancestry checks and GitHub comparisons, but it also presented the
repositories as subordinate copies and encouraged "zero commits behind" as a
false measure of product health.

ADR-0001 already establishes that Scient may evolve from an upstream-aligned
foundation to selective divergence or full ownership. ScientFactory now needs a
repository topology and maintenance authority that match that decision without
losing attribution or awareness of useful original-project work.

## Decision

1. `ScientFactory/scient-desktop` and `ScientFactory/scient-agent` are
   standalone ScientFactory-owned product repositories, not GitHub forks whose
   health is defined by synchronization with an original repository.
2. Each maintained checkout uses writable `origin` for the ScientFactory
   repository and fetch-only `upstream` for the original project. The upstream
   push URL remains disabled. Source lineage, licenses, notices, and exact
   integration bases remain auditable.
3. Official Synara and OpenCode changes are optional reviewed inputs. Scient is
   intentionally allowed to remain behind, adapt a change, reimplement its
   behavior, or reject it.
4. Upstream awareness is mandatory. Absorption is selective. Health means that
   upstream movement is detected and deliberately reviewed, not that every
   upstream commit is merged.
5. Review state and integration state are distinct. `reviewedThrough` means
   every official commit through a checkpoint received a recorded disposition.
   `integrationBase` means the latest contiguous official base present in the
   owned history. Selectively adopted commits are recorded individually and do
   not falsely advance the contiguous base.
6. Monitoring, review, and intake are separate activities. Monitoring may
   report movement but cannot advance review state or land code. Review may
   advance `reviewedThrough` only after every change is dispositioned. Intake
   uses an isolated maintenance branch and normal pull-request review.
7. Upstream intake never shares a commit or pull request with ordinary Scient
   product features. Repeated conflict in a source lane must lead to a clearer
   extension seam or an explicit move toward selective divergence.
8. Upstream session, provider, runtime, or application state never becomes
   canonical Scient scientific project truth.
9. No additional synchronized mirror repository is required. A mirror may be
   introduced later only if a concrete archival, legal, or contribution need
   justifies its maintenance cost.

The operating procedure, cadence, commands, state schema, and verification
matrix live in [`../../operations/upstream-intake.md`](../../operations/upstream-intake.md).

## Relationship To ADR-0005

[ADR-0005](ADR-0005-t3-derived-desktop-foundation.md) applies this ownership
model to the selected T3-derived successor: the future candidate is a
standalone ScientFactory-owned product repository, official T3 is fetch-only,
and review state remains distinct from integration state. During the initial
aligned phase, qualified reviewed T3 ranges will normally enter through
bounded ancestry-preserving merges. That source-specific maintenance choice is
compatible with this ADR: T3 remains an optional reviewed input, Scient owns
acceptance, and no observed tip becomes an integration base until its ancestry
is literally present in the owned repository.

## Alternatives Considered

### Keep The GitHub Fork Relationship

This preserves the Sync Fork button and native cross-fork comparisons. It also
keeps the owned products inside another project's fork network and makes broad
upstream synchronization appear more authoritative than Scient's selective
ownership model.

### Disconnect From Upstream Entirely

This maximizes visual independence but discards a valuable source of security,
reliability, compatibility, and UX improvements. Scient still benefits from
knowing what the original projects learn.

### Maintain A Clean Mirror And A Separate Product Repository

This preserves GitHub fork conveniences while giving the product a standalone
home. It adds two more repositories and a second synchronization process
without a current contribution or archival requirement.

### Continue Requiring Zero Commits Behind

This is simple to automate but treats upstream integration as mandatory. It
becomes increasingly unsafe and expensive as Scient deliberately changes the
desktop and agent products.

## Consequences

- ScientFactory owns repository direction, default branches, releases, and
  acceptance criteria without upstream control.
- GitHub's Sync Fork button and some fork-network comparison conveniences are
  no longer available for the owned product repositories.
- Maintainers compare and fetch through explicit read-only upstream remotes and
  recorded commits instead.
- Exact attribution and inherited licenses must remain intact.
- Automation must report review currency rather than fail merely because a
  repository is behind.
- Selective intake requires more judgment and evidence than automatic syncing,
  but it prevents inherited product assumptions from silently entering Scient.

## Revisit Triggers

Revisit this decision if:

- ScientFactory begins contributing substantial patches back to an original
  project and a dedicated fork mirror would materially improve that workflow;
- GitHub changes its repository-network model in a way that provides standalone
  ownership without the current tradeoff;
- licensing or attribution requirements change; or
- the maintenance cost of observing an upstream source exceeds its demonstrated
  value to Scient.
