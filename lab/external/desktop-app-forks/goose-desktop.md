# Goose Desktop Pointer

Status: Draft
Owner: Yaacov
Last updated: 2026-07-07
Purpose: Records how Goose is represented in the desktop-app fork area without duplicating the checkout.
Doc type: Planning note

Goose spans agent-runtime and desktop-app roles. To avoid duplicating the same
upstream repository, the physical checkout lives at:

`../agent-forks/goose/`

Use that checkout when inspecting Goose desktop behavior, app packaging,
sidecar/runtime boundaries, recipes, provider handling, MCP behavior, or
automation surfaces.
