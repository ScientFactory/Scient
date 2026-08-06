# Desktop App Forks

Status: Draft
Owner: Scient 001
Created: 2026-07-08
Last updated: 2026-08-06
Purpose: Organizes upstream desktop and workbench apps used in the Scient lab.
Doc type: Planning note

## Role

Desktop app forks are source checkouts for products whose shell, UI, process
lifecycle, provider model, preview, terminal, diff, or desktop runtime behavior
may help Scient move faster.

Current owned source and deferred references:

- `ScientFactory/scient-desktop` - the owned Synara-derived Scient application
  continuity application. It is a workspace sibling, not a checkout inside
  this directory.
- `ScientFactory/scient-desktop-next` - the private owned T3-derived successor
  candidate. It is also a workspace sibling; official T3 is its fetch-only
  upstream rather than a checkout inside this directory.
- `goose-desktop.md` - pointer to the Goose checkout because Goose spans agent
  and desktop roles.

## Rules

- Do not let coding-product assumptions become Scient's project model.
- Record exact commits in `../sources.lock.md`.
- Use temporary external checkouts for bounded source inspection and fork
  experiments, then promote durable decisions to architecture or research
  docs.
