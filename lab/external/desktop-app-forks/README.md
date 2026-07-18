# Desktop App Forks

Status: Draft
Owner: Yaacov
Created: 2026-07-08
Last updated: 2026-07-18
Purpose: Organizes upstream desktop and workbench apps used in the Scient lab.
Doc type: Planning note

## Role

Desktop app forks are source checkouts for products whose shell, UI, process
lifecycle, provider model, preview, terminal, diff, or desktop runtime behavior
may help Scient move faster.

Current owned source and deferred references:

- `ScientFactory/scient-desktop` - the owned Synara-derived Scient application
  foundation. It is a workspace sibling, not a checkout inside this directory.
- T3 Code - deferred desktop/runtime/provider/process lifecycle reference; no
  local checkout is retained currently.
- `goose-desktop.md` - pointer to the Goose checkout because Goose spans agent
  and desktop roles.

## Rules

- Do not let coding-product assumptions become Scient's project model.
- Record exact commits in `../sources.lock.md`.
- Use temporary external checkouts for bounded source inspection and fork
  experiments, then promote durable decisions to architecture or research
  docs.
