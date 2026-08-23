# Scient Desktop T3 Upstream Review Through `dedcd99a9d`

Status: Accepted
Owner: Yaacov
Reviewed at: 2026-08-22
Reviewed through: `dedcd99a9d16240327ce763b885b326aff607bdb`
Integration base: `dedcd99a9d16240327ce763b885b326aff607bdb`
Update mode: `thin-fork-merge`

## Scope

This record normalizes the accepted T3 review and integration evidence for the
T3-derived repository that becomes the current
`ScientFactory/scient-desktop` in the 2026-08-23 cutover. It does not re-review
the retired Synara-derived repository and does not make observed future T3
movement accepted input.

The accepted official range is
`be7d35aaeb49a04483ec5e0d2284e8b5b70a3b6e..dedcd99a9d16240327ce763b885b326aff607bdb`
(20 commits). The ancestry-preserving owned merge is
`e5669c1cbcab1c756c09ec97f8c013d03320e65d`, with the prior Scient head as
first parent and the exact official T3 tip as second parent.

## Disposition

The range was accepted as a bounded T3 platform refresh. It includes focused
chat, thread, terminal, remote-server, project-icon, search, mobile-connection,
and analytics-origin improvements. Fifteen merge conflicts and every
auto-merged both-sides-touched file were composed and audited so Scient's
projectless threads, queue and steering behavior, generated-document assets,
analysis boundaries, LaTeX behavior, custom protocol, migration lineage, and
scientific authority remained intact.

Scient-specific adaptations retained separate semantics for background draft
submission versus steering a live thread, preserved projectless draft
promotion, and renumbered the incoming upstream database migration so an
already-shipped Scient migration number was not reused.

## Evidence

Repository-local detail is preserved in
`docs/internals/2026-08-22-upstream-sync-dedcd99a9d.md` at the tested owned
head. Its recorded qualification includes:

- full non-server workspace suites and three server shards;
- focused conflict-resolution suites;
- Rust formatting and resource-monitor tests;
- formatting, lint, typecheck, production build, and desktop smoke;
- Scient brand, Quick Chat, analysis, LaTeX, and upstream-provenance seams; and
- an exact clean diff check.

The T3-derived repository's `upstream-state.json` exposes this review checkpoint
for cross-repository verification. Future movement of either owned `main` or
official T3 `main` is freshness information only until a later accepted review
intentionally advances this record.
