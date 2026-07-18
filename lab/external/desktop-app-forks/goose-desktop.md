# Goose Desktop Pointer

Status: Draft
Owner: Yaacov
Created: 2026-07-08
Last updated: 2026-07-18
Purpose: Records Goose's cross-role research status without implying a retained local checkout.
Doc type: Planning note

Goose spans agent-runtime and desktop-app roles. No local Goose checkout is
currently retained. `../sources.lock.md` records the inspected upstream source
and exact last-inspected commit.

If a later bounded experiment restores Goose, use one physical checkout,
record its actual location in `sources.lock.md`, and inspect that checkout for
desktop behavior, app packaging, sidecar/runtime boundaries, recipes, provider
handling, MCP behavior, or automation surfaces. Do not add Goose as a fourth
canonical repository inside the three-repository ScientFactory workspace.
