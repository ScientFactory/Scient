# Linux Distribution Hardening Plan

Status: Proposed
Owner: Yaacov
Created: 2026-07-21
Last updated: 2026-07-21
Purpose: Defines the proposed cross-repository migration from an insecure Ubuntu AppImage fallback to a supported, sandbox-preserving Linux distribution path.
Doc type: Implementation candidate

## Document Rules

This document owns the candidate outcome, cross-repository sequence, security
invariants, and acceptance evidence for hardening Scient's Linux distribution.
It does not describe current release behavior as fixed, approve an architecture
decision, or authorize a public release. Current implementation and release
behavior remain owned by the `scient-desktop` and
`ScientFactory-website` repositories and their exact Git history.

The broader release-promotion policy remains owned by [GitHub Operating
Model](../operations/github-operating-model.md). Product requirements remain
owned by the [PRD](../product/PRD.md).

### Update Policy

Update this plan when the packaging direction is accepted, rejected, or
replaced; when an implementation pull request changes the proposed mechanics;
when a supported Linux target is added or removed; or when packaged acceptance,
upgrade, uninstall, publication, or installed-app evidence changes the truthful
status of the work.

## Outcome

Scient should provide an installed `.deb` package as the supported path for
Ubuntu and Debian-family systems. The installed package should preserve
Chromium's process sandbox through an exact-path AppArmor profile on supported
Ubuntu systems, with a verified setuid Chromium sandbox helper only as a
compatibility fallback where the AppArmor/user-namespace path cannot work.

Production launch must never silently add or accept `--no-sandbox`. A portable
AppImage may remain available only as a secondary artifact that fails closed
with an actionable message when it cannot initialize Chromium's sandbox.

This direction is proposed, not accepted or implemented.

## Why This Work Exists

Electron documents that `--no-sandbox` disables Chromium's sandbox for every
process and should be used only for testing, never production. The sandbox is
the boundary that limits what a compromised renderer or utility process can do
to the user's machine. Scient handles local projects and files and orchestrates
provider-owned credentials and local processes, so silently removing that
boundary is a material security defect even when the application appears to
work normally.

Ubuntu 23.10 and later restrict unprivileged user namespaces through AppArmor.
Chromium's guidance explains that downloaded binaries at changing paths cannot
receive a safe persistent exception without privileged host configuration. A
root-installed package can instead place the executable at a stable path and
install a root-owned, exact-path AppArmor profile. Globally disabling Ubuntu's
restriction is explicitly outside this plan.

## Evidence Snapshot

The following evidence was refreshed on 2026-07-21. Commit pins identify the
inspected state; later code must be re-read before implementation.

### Scient

- `scient-desktop` `main` at
  [`f658bbc503d81f191e97bea357bfa79cf027ff37`](https://github.com/ScientFactory/scient-desktop/commit/f658bbc503d81f191e97bea357bfa79cf027ff37)
  builds Linux as AppImage and pins electron-builder 26.15.3. The relevant
  current sources are
  [`package.json`](https://github.com/ScientFactory/scient-desktop/blob/f658bbc503d81f191e97bea357bfa79cf027ff37/package.json#L46-L60),
  [`build-desktop-artifact.ts`](https://github.com/ScientFactory/scient-desktop/blob/f658bbc503d81f191e97bea357bfa79cf027ff37/scripts/build-desktop-artifact.ts#L89-L93),
  and the
  [release matrix](https://github.com/ScientFactory/scient-desktop/blob/f658bbc503d81f191e97bea357bfa79cf027ff37/.github/workflows/release.yml#L219-L223).
- The current updater policy explicitly disables Linux updates when the app is
  not running as AppImage in
  [`updateState.ts`](https://github.com/ScientFactory/scient-desktop/blob/f658bbc503d81f191e97bea357bfa79cf027ff37/apps/desktop/src/updateState.ts#L151-L170).
- `ScientFactory-website` `main` at
  [`6879b47a78abc1fae58436199322769a7e8601b7`](https://github.com/ScientFactory/ScientFactory-website/commit/6879b47a78abc1fae58436199322769a7e8601b7)
  selects `-x86_64.AppImage` as the Linux download in
  [`download-assets.ts`](https://github.com/ScientFactory/ScientFactory-website/blob/6879b47a78abc1fae58436199322769a7e8601b7/src/lib/download-assets.ts#L7-L12).
- Draft desktop PR
  [#58](https://github.com/ScientFactory/scient-desktop/pull/58), head
  `53ef0e20f43ac68ad87a22e631bed6ef84bfee68`, exercises the real packaged
  lifecycle. Its current
  [Packaged Linux Acceptance job](https://github.com/ScientFactory/scient-desktop/actions/runs/29808598598/job/88566616743)
  fails because the actual AppImage process contains `--no-sandbox`. That
  failure is useful evidence: the acceptance gate is detecting the product
  defect rather than proving the present artifact safe.

### Upstream Packaging Behavior

- electron-builder's current generated AppImage launcher probes
  `unshare -Ur true` and injects `--no-sandbox` when the probe fails. The source
  says it prefers startup without sandboxing over a startup failure. See
  [`appImageUtil.ts`](https://github.com/electron-userland/electron-builder/blob/96a4aee1d91deef71f404dba524b79f692dc75c8/packages/app-builder-lib/src/targets/linux/appimage/appImageUtil.ts#L298-L327).
- electron-builder can produce Debian packages and includes an exact-path
  AppArmor profile template. Its default post-install script also treats
  sandbox-helper permission changes as non-fatal with `|| true`. Scient should
  not rely on that fail-open behavior for a security invariant. See the
  [Linux target documentation](https://www.electron.build/docs/linux/),
  [default post-install template](https://github.com/electron-userland/electron-builder/blob/96a4aee1d91deef71f404dba524b79f692dc75c8/packages/app-builder-lib/templates/linux/after-install.tpl#L13-L57),
  and
  [AppArmor profile template](https://github.com/electron-userland/electron-builder/blob/96a4aee1d91deef71f404dba524b79f692dc75c8/packages/app-builder-lib/templates/linux/apparmor-profile.tpl#L1-L9).

### T3 Code Comparison

T3 Code does not currently provide a secure precedent for this problem.
Inspection of `pingdotgg/t3code` `main` at
[`c0bb2373450231e3931937d2f703e35ce906ed85`](https://github.com/pingdotgg/t3code/commit/c0bb2373450231e3931937d2f703e35ce906ed85)
found that:

- Linux still defaults to AppImage in
  [`build-desktop-artifact.ts`](https://github.com/pingdotgg/t3code/blob/c0bb2373450231e3931937d2f703e35ce906ed85/scripts/build-desktop-artifact.ts#L97-L106)
  and its
  [release matrix](https://github.com/pingdotgg/t3code/blob/c0bb2373450231e3931937d2f703e35ce906ed85/.github/workflows/release.yml#L332-L338);
- the local Electron launcher automatically adds `--no-sandbox` when its
  setuid helper check fails in
  [`electron-launcher.mjs`](https://github.com/pingdotgg/t3code/blob/c0bb2373450231e3931937d2f703e35ce906ed85/apps/desktop/scripts/electron-launcher.mjs#L360-L400);
- the repository pins electron-builder 26.15.6 in
  [`apps/desktop/package.json`](https://github.com/pingdotgg/t3code/blob/c0bb2373450231e3931937d2f703e35ce906ed85/apps/desktop/package.json#L31-L35),
  which generates the same AppImage fallback; and
- the inspected nightly release,
  [`v0.0.29-nightly.20260721.864`](https://github.com/pingdotgg/t3code/releases/tag/v0.0.29-nightly.20260721.864),
  publishes an AppImage and no `.deb` artifact.

This comparison is source-derived. The T3 Code AppImage itself was not executed
during this review.

## Security Invariants

The implementation must make these properties falsifiable and testable:

1. No supported production launch path adds, accepts, or tolerates
   `--no-sandbox`.
2. The supported Ubuntu executable has one stable installation path governed by
   a root-owned, exact-path AppArmor profile when that mechanism is available.
3. If a setuid `chrome-sandbox` helper is used, it is a regular file owned by
   root with the exact required mode; a failed ownership or permission change
   aborts installation.
4. If neither the AppArmor/user-namespace path nor the verified helper path can
   be established, installation or launch fails closed with an actionable
   message.
5. Scient never asks users to disable
   `kernel.apparmor_restrict_unprivileged_userns` globally.
6. Upgrade and uninstall preserve user data while updating or removing
   package-owned policy safely.
7. Release promotion cannot succeed without a fresh installed-package sandbox
   and lifecycle result for the exact artifact being promoted.

## Proposed Package Design

### Supported Ubuntu And Debian Path

Build an `amd64` `.deb` from `scient-desktop` and install the application at a
stable path such as `/opt/Scient/scient`. Configure the package with an
exact-path profile similar to:

```text
abi <abi/4.0>,
include <tunables/global>

profile scient /opt/Scient/scient flags=(unconfined) {
  userns,
  include if exists <local/scient>
}
```

The exact sanitized product path must be taken from the produced package and
verified in CI rather than assumed from this example.

Provide custom package lifecycle scripts instead of relying on
electron-builder's permissive defaults. The install path should:

1. use `set -eu` or equivalent fail-closed shell behavior;
2. verify the packaged executable and `chrome-sandbox` are regular files at the
   expected root-owned path;
3. validate, install, and load the exact AppArmor profile when supported;
4. otherwise configure and verify the setuid helper only when required;
5. abort if the selected sandbox mechanism cannot be established; and
6. update desktop and MIME databases without weakening the sandbox failure
   rules.

The removal path should unload and remove the package-owned profile without
removing user-owned local overrides or application data.

### Portable AppImage

AppImage may remain a secondary download for compatible distributions, but it
must not be presented as the supported Ubuntu path. Its launcher must refuse to
continue when Chromium's sandbox cannot initialize. Documentation may explain
the limitation; it must not recommend `--no-sandbox` or a global sysctl change.

### Updates

The initial `.deb` release may notify users and open the trusted download page
rather than performing an in-app privileged installation. The durable target
should be a signed APT repository whose signed metadata and package path are
managed as a separate reviewed operational surface.

Do not enable electron-updater's Debian installation path without a separate
trust review. Its current implementation permits unverified local packages by
default and may invoke `apt --allow-unauthenticated`; direct `dpkg` installation
also does not verify a package signature. See
[`DebUpdater.ts`](https://github.com/electron-userland/electron-builder/blob/96a4aee1d91deef71f404dba524b79f692dc75c8/packages/electron-updater/src/DebUpdater.ts#L55-L93).

## Cross-Repository Work Packages

| Order | Owning repository | Candidate work | Completion evidence |
| --- | --- | --- | --- |
| 1 | `ScientFactory/scient-desktop` | Add the `.deb` target, exact AppArmor profile, fail-closed package lifecycle scripts, production `--no-sandbox` refusal, updater policy, release metadata, and installed-package acceptance tests. | Reviewed PR on `main`; exact `.deb` installs and launches sandboxed on fresh Ubuntu 24.04; required checks pass. |
| 2 | `ScientFactory/ScientFactory-website` | Make `.deb` the primary Ubuntu/Debian download, explain its installation, and demote or remove AppImage according to the accepted compatibility decision. | Reviewed website PR after the release asset contract exists; preview proves correct asset selection and copy. |
| 3 | `ScientFactory/Scient` | Update this plan with accepted decisions, exact merged PRs and commits, and verified release evidence. Promote durable architecture or operations decisions only to their owning documents. | Planning status and evidence match merged and released reality. |
| 4 | Release promotion | Promote the exact integrated desktop head through `release/stable` only after package, lifecycle, upgrade, uninstall, and installed-app evidence passes. | Published artifact, checksums, website download, and installed app all resolve to the recorded release head. |

Each repository must use its own branch, commit, and pull request. The desktop
package contract lands before the website consumes it.

## Acceptance Plan

Run the acceptance flow on a fresh Ubuntu 24.04 environment with AppArmor
enabled and install the exact release candidate through the normal package
manager path.

Required evidence:

1. Install the `.deb`, confirm the expected files, owners, modes, AppArmor
   profile, and package metadata, then launch as an ordinary user.
2. Inspect the complete Scient process tree and reject any process containing
   `--no-sandbox`.
3. Record renderer sandbox evidence, including seccomp state where available.
   `Seccomp: 2` is supporting evidence, not sufficient proof by itself.
4. Exercise fresh-profile startup, project creation, terminal/PTY behavior,
   backend restart and reconnect, persistence, graceful shutdown, forced
   cleanup, and subsequent relaunch.
5. Upgrade from the previous `.deb` to the candidate and prove settings,
   projects, conversations, credentials in provider-owned storage, and private
   file permissions are preserved.
6. Uninstall and prove package-owned AppArmor policy is removed while user data
   remains untouched unless an explicit purge contract says otherwise.
7. Verify release metadata, checksums, download selection, and the installed
   artifact against the exact protected `release/stable` head.
8. Aggregate packaged Linux acceptance into a protected release gate. A test
   that examines only harness-constructed arguments does not satisfy the
   sandbox invariant; it must inspect the actual launched artifact.

## Rollout And Rollback

Roll out in three stages:

1. land desktop packaging and acceptance without promoting a public release;
2. publish a release candidate and validate clean install, upgrade, uninstall,
   website preview, and installed-app behavior; and
3. promote the exact tested head and then switch the website's primary Linux
   download.

If package validation fails, stop release promotion and keep the previous
public artifact available. If the website has already changed, revert its
download selection through a reviewed website pull request. Do not restore
availability by reintroducing `--no-sandbox`.

## Alternatives Not Selected By This Proposal

- **Keep AppImage and silently disable the sandbox:** rejected because it
  preserves startup by removing a critical production security boundary.
- **Ask users to disable Ubuntu's restriction globally:** rejected because it
  weakens the host for unrelated applications.
- **AppImage that only fails closed:** acceptable as a secondary portable
  artifact, but not a good primary Ubuntu experience because many users would
  receive a startup failure with no install-time mechanism to add exact policy.
- **Snap or Flatpak as the immediate replacement:** deferred. Scient needs broad
  access to user-selected repositories, local terminals, agent executables, and
  provider-owned authentication. A confined packaging redesign needs its own
  compatibility and permission review and is larger than this fix.
- **Setuid helper as the only strategy:** not preferred. It provides a broader
  compatibility fallback but introduces a root-owned setuid binary and uses an
  older sandbox mechanism. Exact-path AppArmor/user namespaces remain the
  preferred Ubuntu path.

## Open Decisions

- Which Ubuntu and Debian versions will be explicitly supported by the first
  `.deb` release?
- Will a fail-closed AppImage remain available for non-Debian distributions?
- What signing key, repository host, rotation process, and rollback protection
  will govern a future APT repository?
- What is the interim Linux update experience before a signed APT repository is
  operational?
- Which exact runtime signals, in addition to process arguments and seccomp
  state, will constitute sufficient sandbox proof in the release gate?
- Should the setuid helper fallback ship in the first `.deb`, or should the
  package support only the exact-path AppArmor/user-namespace mechanism at
  first?

## Rough Delivery Size

The package target, installer lifecycle, release/website migration, and fresh
Ubuntu acceptance are estimated at three to five focused engineering days once
the open decisions above are resolved. A signed APT repository and a fully
validated updater migration are a separate approximately three-to-seven-day
work package. These are planning estimates, not commitments.

## Primary External References

- [Electron process sandboxing](https://www.electronjs.org/docs/latest/tutorial/sandbox)
- [Chromium: AppArmor user-namespace restrictions](https://chromium.googlesource.com/chromium/src/%2Bshow/main/docs/security/apparmor-userns-restrictions.md)
- [Chromium Linux sandboxing](https://chromium.googlesource.com/chromium/src/%2B/127.0.6533.88/docs/linux/sandboxing.md)
- [electron-builder Linux targets](https://www.electron.build/docs/linux/)
