# Goose Source-Depth Inspection

Status: Draft
Owner: Yaacov
Last updated: 2026-07-16
Purpose: Records research evidence on Goose integration seams, runtime boundaries, safety gaps, and its possible later role in LitRev.
Doc type: Research evidence

## Outcome

Goose is a strong candidate for LitRev's broader local-agent engine, especially
for MCP extensions, recipes, repeatable workflows, scheduling, provider choice,
and subagents. It should sit behind a LitRev-owned gateway; it should not define
LitRev project truth, permissions, provenance, or accepted write-back.

The recommended first integration is `goose acp` over stdio. It gives a local
client structured, bidirectional streaming without opening a network port and
supports permission requests, tool updates, cancellation, and session
lifecycle. The earlier plan to use the standalone `goosed` REST server is stale:
current upstream removed that crate and replaced the custom-client path with ACP.

Goose is not a filesystem sandbox. Its working directory anchors relative
paths, but its built-in file tools accept absolute paths and its shell tool runs
normal host commands. LitRev must provide the project boundary, approval policy,
and independent run receipt.

## Inspected Source

| Field | Value |
|---|---|
| Local checkout | `lab/external/agent-forks/goose` |
| Official upstream | `https://github.com/aaif-goose/goose.git` |
| Branch | `main` |
| Commit | `3c1fdd692cc8aaa5f09b9175410c09a09d4dfe49` |
| Workspace version | `1.42.0` |
| License | Apache-2.0 |
| Local remote state | official source is fetch-only `upstream`; push disabled; owned `origin` not yet attached |

The checkout was initially pinned at
`f96f62d985846bc8a5755d02fb12f15f52e1b2c9`. Current upstream was 23 commits
ahead. The fast-forward included removal of the stale `crates/goose-server`
REST/OpenAPI implementation, which is why current source—not the earlier
snapshot—must drive the integration decision.

No build or model-backed runtime test was run in this inspection. The findings
below are source-backed and still require a small isolated adapter spike.

## Current Architecture

The current repository is a Rust workspace with separate core, CLI, ACP, MCP,
provider, SDK, local-inference, test, and desktop surfaces.

Important components:

| Component | Role relevant to LitRev |
|---|---|
| `crates/goose` | Core agent loop, sessions, recipes, extensions, permissions, hooks, security inspectors, and ACP implementation. |
| `crates/goose-cli` | `goose acp`, `goose serve`, interactive sessions, one-shot runs, recipes, scheduler commands, and configuration. |
| `crates/goose-mcp` | Built-in MCP servers and developer, memory, computer, and tutorial tooling. |
| `crates/goose-providers` | Provider implementations and model streaming. |
| `crates/goose-sdk` | Rust bindings layer and a reference ACP client; Python/Kotlin bindings currently expose a narrower provider surface. |
| `ui/sdk` | TypeScript ACP client/types plus optional platform-specific Goose binaries. |
| `ui/desktop` | Goose's own Electron client; useful as ACP-client reference, not a UI to embed in LitRev. |

Goose itself now uses ACP as the main separation between client UI and agent
runtime. This aligns better with LitRev than copying Goose desktop components.

## Integration Options

| Option | Current assessment |
|---|---|
| `goose acp` over stdio | Recommended first spike. Local child-process lifecycle, no listening port, structured streaming, permissions, tool events, cancellation, and sessions. |
| `goose serve` over authenticated HTTP/WebSocket | Viable later when LitRev needs a longer-lived or separately managed backend. Requires `GOOSE_SERVER__SECRET_KEY`, origin handling, lifecycle supervision, and a local network threat review. |
| TypeScript `@aaif/goose-sdk` | Useful protocol/client reference and possible packaging shortcut, but the official packages bundle official binaries. An owned-fork release path would need its own package/binary provenance. |
| Direct Rust embedding through Goose crates/SDK | Deferred. It couples LitRev more tightly to fast-moving internal APIs and adds Rust/native build complexity before the adapter contract is proven. |
| `goose run` text/CLI parsing | Suitable for smoke tests or automation, but weaker than ACP for approvals, structured events, cancellation, and interactive control. |
| Goose desktop embedding | Not recommended. LitRev already has a workbench candidate, and embedding another desktop product would duplicate UI, state, and orchestration. |

## Capabilities Worth Reusing

- ACP initialization, session creation/loading/listing/closing/forking, prompt
  streaming, tool-call updates, permission requests, and cancellation.
- Client-provided filesystem and terminal capabilities, which allow a LitRev
  client to own some tools and show native diffs or terminal output.
- MCP extensions over stdio and Streamable HTTP, plus frontend-provided tools.
- Recipes with parameters, response JSON schemas, extensions, retry settings,
  sub-recipes, and delegated subagents.
- Persistent session storage and export/import for runtime diagnostics.
- Provider abstraction, model switching, and broader automation than the first
  OpenCode executor path.
- Pre-tool, post-tool, failure, session, and stop hooks as useful enforcement
  and observability seams.
- Configurable state isolation through `GOOSE_PATH_ROOT`.

These are engine capabilities. LitRev must decide which context is supplied,
which tools are exposed, which changes are proposed, and which outputs become
accepted scientific state.

## Safety And Boundary Findings

1. **Autonomous mode is the documented default.** LitRev must never inherit
   that default silently. The first adapter should require explicit approval or
   a stricter LitRev-controlled policy.
2. **Working directory is not a sandbox.** Relative paths resolve from the
   session working directory, but absolute file paths are accepted. Shell
   commands run through the host shell and can address paths outside the
   project.
3. **Tool classification is best effort.** Goose distinguishes read, write,
   shell, and other operations and provides manual/smart permission modes, but
   documentation states classification is interpretive. LitRev needs its own
   enforceable scope checks.
4. **Hooks are helpful but not a sole security boundary.** Pre-tool hooks can
   block calls, yet hook execution errors are logged and treated as allow. A
   failing hook must not become LitRev's only containment mechanism.
5. **Engine state is persistent and non-canonical.** Sessions are stored in a
   Goose SQLite database under its data root. This is useful for runtime resume
   and diagnostics but must remain reconstructable or discardable relative to
   LitRev-owned records.
6. **Some extensions write engine-specific project state.** The memory MCP can
   use `.goose/memory` under the working directory. Do not enable that behavior
   as LitRev project memory without an explicit adapter decision.
7. **ACP is still marked experimental.** It is the strongest current seam, but
   the adapter must pin and test the protocol/version surface during updates.
8. **Upstream is moving quickly.** Twenty-three commits in four days removed a
   major server surface and changed over 200 files. Updateability requires an
   owned upstream-aligned fork, a sync branch, and contract tests.

## Owned-Fork Recommendation

Maintain a LitRev-owned Goose fork even while keeping it close to upstream:

```text
origin   -> LitRev-owned Goose fork
upstream -> aaif-goose/goose, fetch-only
```

Initially keep LitRev changes outside Goose core where possible:

- a LitRev ACP adapter/client;
- LitRev recipes and MCP extensions;
- packaging and pinned binary provenance;
- narrowly scoped configuration defaults; and
- upstreamable generic fixes.

Do not rebrand or distribute Goose desktop merely because the source supports
custom distributions. If Goose remains an embedded engine, its standalone UI
is not part of the LitRev product surface. Revisit deeper ownership only if ACP,
recipes, extensions, and adapter seams cannot satisfy real LitRev workflows.

Apache-2.0 permits modification and distribution subject to license and notice
requirements. Goose's own custom-distribution guidance also cautions against
using Goose trademarks in a way that implies official endorsement. A formal
license/notice review is still required before distribution.

## First Adapter Spike

After the owned fork exists:

1. build or obtain the pinned owned-fork Goose binary;
2. launch `goose acp` over stdio with an isolated `GOOSE_PATH_ROOT`;
3. create one session rooted in a synthetic non-Git fixture;
4. expose only the minimum client/tool capabilities;
5. require approval for the single harmless action;
6. capture ACP text, tool, permission, cancellation, and completion events;
7. prove that an attempted absolute-path access outside the fixture is denied by
   LitRev rather than trusted to Goose's working directory;
8. produce a LitRev-owned run receipt independent of Goose's `sessions.db`; and
9. stop the child process and verify state and credentials remain isolated.

The spike passes only if LitRev can reconstruct what was requested, approved,
executed, produced, and rejected without treating Goose session storage as
canonical.

## Recommendation

Defer the owned Goose fork and ACP-over-stdio adapter spike until after the first
LitRev gateway works through the owned OpenCode runtime. Use Goose later to test
the broader agent and automation role through that established boundary. Do not
add Goose directly to Synara as an unrestricted provider and do not begin from
Goose desktop or the removed REST server.
