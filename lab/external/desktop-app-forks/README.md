# Desktop App Forks

Status: Draft
Owner: Yaacov
Last updated: 2026-07-07
Purpose: Organizes upstream desktop and workbench apps used in the PapiLab lab.
Doc type: Planning note

## Role

Desktop app forks are source checkouts for products whose shell, UI, process
lifecycle, provider model, preview, terminal, diff, or desktop runtime behavior
may help PapiLab move faster.

Current checkouts:

- `synara/` - first desktop workbench shell candidate.
- `t3code/` - desktop/runtime/provider/process lifecycle reference.
- `goose-desktop.md` - pointer to the Goose checkout because Goose spans agent
  and desktop roles.

## Rules

- Do not let coding-product assumptions become PapiLab's project model.
- Record exact commits in `../sources.lock.md`.
- Use these checkouts for source inspection and fork experiments, then promote
  durable decisions to architecture or research docs.
