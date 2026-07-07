# External Sources Lock

Status: Draft
Owner: Yaacov
Last updated: 2026-07-07
Purpose: Records exact upstream source checkouts used in the LitRev lab.
Doc type: Research evidence

## Document Rules

This file records local source checkout provenance. It is not a dependency lock
file, accepted architecture, or a statement that LitRev depends on these
projects.

Update this file whenever a lab source checkout is added, removed, recloned, or
moved to a new commit.

## Sources

| Source | Local path | Upstream URL | Default branch | Current commit | Lab role | Update strategy | Notes |
|---|---|---|---|---|---|---|---|
| OpenCode | `agent-forks/opencode/` | `https://github.com/anomalyco/opencode.git` | `dev` | `14a5529793a91001ca81c80e96f39533eab79127` | First local file/shell/edit executor candidate. | `adapter-maintained`; avoid core fork. | Upstream default branch verified before clone. |
| Goose | `agent-forks/goose/` | `https://github.com/aaif-goose/goose.git` | `main` | `f96f62d985846bc8a5755d02fb12f15f52e1b2c9` | Broader local-agent, automation, desktop, and MCP/source reference. | `adapter-maintained`; avoid core fork. | Also represented by `desktop-app-forks/goose-desktop.md`. |
| Synara | `desktop-app-forks/synara/` | `https://github.com/Emanuele-web04/synara.git` | `main` | `03d8b2c2eafa1c5e5158dcd2706053e73cbeaa9f` | First desktop workbench shell candidate. | `thin-fork-merge`; may become `divergent-cherry-pick` if deeply reshaped. | Must not own LitRev scientific project truth. |
| T3 Code | `desktop-app-forks/t3code/` | `https://github.com/pingdotgg/t3code.git` | `main` | `b9cc8d6ef17ca9f45bec621bef71ad3f706b9276` | Desktop/runtime/provider/process lifecycle reference. | `reference-only` first. | Feature/source reference, not first base. |
