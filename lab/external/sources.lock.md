# External Sources Lock

Status: Draft
Owner: Yaacov
Last updated: 2026-07-11
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
| OpenCode | `agent-forks/opencode/` | `https://github.com/anomalyco/opencode.git` | `dev` | `14a5529793a91001ca81c80e96f39533eab79127` | First local file/shell/edit executor candidate. | owned upstream-aligned fork plus `adapter-maintained`; avoid unnecessary core divergence. | Upstream default branch verified before clone. |
| Goose | `agent-forks/goose/` | `https://github.com/aaif-goose/goose.git` | `main` | `3c1fdd692cc8aaa5f09b9175410c09a09d4dfe49` | Broader local-agent, automation, ACP, recipes, and MCP/source candidate. | owned upstream-aligned fork plus `adapter-maintained`; avoid unnecessary core divergence. | Source-depth inspection recorded in `../notes/goose-source-depth-inspection-2026-07-11.md`. |
| Synara | `desktop-app-forks/synara/` | `https://github.com/Emanuele-web04/synara.git` | `main` | `03d8b2c2eafa1c5e5158dcd2706053e73cbeaa9f` | First desktop workbench shell candidate. | owned fork with `thin-fork-merge`; may become `divergent-cherry-pick` if deeply reshaped. | Must not own LitRev scientific project truth. |
| T3 Code | `desktop-app-forks/t3code/` | `https://github.com/pingdotgg/t3code.git` | `main` | `b9cc8d6ef17ca9f45bec621bef71ad3f706b9276` | Desktop/runtime/provider/process lifecycle reference. | `reference-only` first. | Feature/source reference, not first base. |

## Remote Ownership State

For Synara, OpenCode, and Goose, repository ownership and adaptation depth are
separate decisions:

- LitRev will use an owned GitHub fork as writable `origin` before making source
  changes.
- The official repository is fetch-only `upstream` and must not be a push
  target.
- Owning a fork does not imply immediate divergence. OpenCode and Goose should
  begin as upstream-aligned forks with LitRev changes concentrated in adapters,
  configuration, extensions, packaging, and isolated integration seams.
- A source may move from upstream-mergeable to selective cherry-pick only after
  LitRev deliberately accepts the maintenance cost.

Current local state: the three official remotes have been renamed to
fetch-only `upstream`, with push disabled. Owned `origin` remotes have not yet
been created or attached.

Gate assignment: Gate 1.5 creates owned repositories for Synara and OpenCode.
The owned Goose repository and every Goose build/integration action are deferred
to Gate 1.6.
