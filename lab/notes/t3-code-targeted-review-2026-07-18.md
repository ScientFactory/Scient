# T3 Code Targeted Review

Status: Historical
Owner: Yaacov
Created: 2026-07-18
Last updated: 2026-07-18
Purpose: Records the bounded T3 Code inspection, accepted reliability intake, and explicit stop boundary for future T3-derived work.
Doc type: Research evidence
Completion: Complete through the recorded donor revision and accepted reliability intake

## Verdict

T3 Code remains a useful subsystem donor, not Scient's application foundation,
product roadmap, or continuously monitored upstream. The targeted review is
complete through T3 Code revision
`bf76535fe4da71d8de7b8bd5ffa0d2086b7af8d0`.

The review found three small reliability changes worth adapting immediately,
one subscription-startup risk that Scient's current Effect runtime already
handles correctly, and one real multi-socket browser isolation defect in the
Scient desktop. Larger T3 architecture remains either part of an existing
Scient plan, deferred until a concrete trigger appears, or rejected for the
current product scope.

## Source Snapshot

| Item | Evidence |
|---|---|
| Official source | `https://github.com/pingdotgg/t3code.git` |
| Branch inspected | `main` |
| Review boundary | `bf76535fe4da71d8de7b8bd5ffa0d2086b7af8d0` |
| Review date | 2026-07-18 |
| License observed | MIT |
| Scient desktop base reviewed | `57e6b2cde09f64db367b894506f56db605fb91b4` |
| Review method | Exact donor commits, corresponding Scient seams, existing tests, and deterministic characterization tests were inspected locally. |

The temporary T3 checkout used for this review is not a canonical Scient source
checkout. `lab/external/sources.lock.md` remains the durable provenance record.

## Accepted Reliability Intake

| T3 evidence | Scient seam | Disposition | Scient evidence |
|---|---|---|---|
| `ed81c156daf3d8ce7d3599236df7a26c11ef145f` | `apps/server/src/imageMime.ts` | Adapted. The payload parser now scans linearly instead of applying a regex to multi-megabyte base64 content. | Desktop commit `9c36410e`; focused tests cover malformed input, padding, whitespace, case handling, and a 14 MB payload from a deep stack. |
| `58302b2010913d6e236570bbe8c9abe38de7fa18` | `apps/server/src/git/Layers/GitCore.ts` | Adapted. Selected paths use Git's global `--literal-pathspecs` option. | Desktop commit `ee705427`; integration coverage includes brackets, glob characters, question marks, pathspec magic, a leading dash, spaces, and Unicode. |
| `1047dac0c5296b1c548e607f061f95227a706b49` | `apps/server/src/terminal/Layers/Manager.ts` | Adapted. AppImage markers and mount-prefixed path entries are removed at the terminal child-environment boundary. | Desktop commit `353f8d67`; tests prove marker/path cleanup, unrelated-variable preservation, non-AppImage identity behavior, and no host-environment mutation. |

These changes preserve Scient's existing contracts and introduce no new runtime
dependency, provider model, or T3-owned abstraction.

## Characterization Results

### Snapshot And Live-Event Startup

T3 commit `c14a5ca492b4da11da81e482e307222946536300` fixed events dropped while an
initial thread snapshot loaded. Scient uses `Stream.merge` for the analogous
shell and thread subscriptions.

A deterministic barrier test now proves that Scient's current Effect runtime:

1. subscribes to the live stream while the snapshot is blocked;
2. captures an event emitted during snapshot loading;
3. emits the snapshot first;
4. emits the during-snapshot event exactly once; and
5. continues with later live events in order.

The characterization passed without a runtime behavior change. Desktop commit
`f12d5b56` names the shared subscription seam and adds the regression test.

### Browser Native-Pipe Socket Isolation

The Scient browser-use bridge attached CDP listeners per session but broadcast
every notification to every connected native-pipe socket. A two-socket protocol
test proved that a tab event for session A leaked to session B. The same test
also showed that disconnecting a socket left its CDP listener active.

Desktop commits `fe4668fa` and `8a8398e8` bind each attached session to its
owning socket, send notifications only through that socket, reject cross-client
attach, detach, and CDP requests, dispose the session listener on disconnect,
and preserve the other socket. The test exercises real framed native-pipe
requests and two distinct tabs rather than only testing an internal helper. The
complete bounded intake passed hosted CI at exact head `8a8398e8` and merged as
`bd2a6eed` through
[Scient desktop PR #14](https://github.com/ScientFactory/scient-desktop/pull/14).

## Use During Existing Scient Work

T3's provider-instance separation is useful evidence for Phase 2 of
`docs/planning/scient-and-external-agents-implementation-plan.md`. It does not
justify a separate T3-alignment project.

When the first scientific vertical slice reaches its execution contract:

- keep `ProviderKind` as an external-provider implementation detail;
- add stable agent-connection identity above it;
- represent native Scient and external-agent connections as distinct execution
  targets;
- later evaluate one narrow executor port; Yaacov deferred the deterministic
  fake-executor product proof;
- preserve existing external adapters and settings; and
- keep canonical scientific state independent of every provider session store.

The independent T3 intake is complete and has no dependency on the future
memory-architecture project. Raw questions about conversation, user, project,
and task/run memory; portability; recovery; Git and cloud folders; and future
Scient cloud sync are preserved separately in the
[`Memory Architecture Discovery`](../../docs/planning/memory-architecture-discovery.md).

## Triggered Shelf

The following ideas are not scheduled. Reinspect T3 only when the named trigger
exists.

| Candidate | Trigger required before work | First bounded proof |
|---|---|---|
| Connection supervisor | More than one real connection or recurring lifecycle leaks | Tested connection state machine |
| Desktop-main decomposition | Repeated feature collisions in the same desktop lifecycle seam | Extract only the seam under active change |
| Diagnostics bundle | A user-visible failure cannot be diagnosed from existing logs | Redaction-first diagnostic export |
| Reusable Codex protocol package | A second genuine protocol consumer | Extract only proven shared protocol types |
| VCS/forge abstraction | The scientific slice requires a demonstrated collaboration operation | Model that operation only |
| Execution environments or SSH | An accepted remote-execution scenario | One target-specific adapter |
| Capability authorization | An executor gains a new privileged action | Explicit capability and denial tests |

## Rejected For Current Scope

- broad T3 architecture alignment;
- replacing the Synara-derived desktop foundation;
- importing T3's coding-product assumptions;
- mobile companion work;
- cloud or relay synchronization;
- Tailscale integration;
- WSL expansion; and
- speculative SSH or remote-environment infrastructure.

## Operating Rule After This Review

Do not monitor T3 Code as though it were an owned upstream. Future T3 inspection
must begin with a concrete Scient problem, name the exact source revision and
files inspected, produce a bounded adaptation or explicit rejection, and stop
when that problem is resolved.

The primary product track returns to the first scientific vertical slice.
