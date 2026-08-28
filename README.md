# Scient

Status: Active
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-08-28
Purpose: Entry point for the Scient product and project repository.
Doc type: Repo orientation

Scient is the product and planning repository. The active T3-derived desktop
application is independently versioned in `ScientFactory/scient-desktop`; the
native Scient agent remains planned in
`ScientFactory/scient-agent`.

[ADR-0005](docs/architecture/decisions/ADR-0005-t3-derived-desktop-foundation.md)
selected the T3-derived desktop foundation. The completed
[migration plan](docs/planning/t3-foundation-migration-plan.md) preserves the
proof-gated transition and cutover evidence. The active public repository is
now `ScientFactory/scient-desktop`; the Synara-derived predecessor is a
retired private repository.

## Related Repositories And Local Workspace

ScientFactory owns four independently versioned active product repositories:

- [`ScientFactory/Scient`](https://github.com/ScientFactory/Scient) - product
  direction, architecture, planning, cross-repository source pins, and the
  Scient-owned scientific boundary.
- [`ScientFactory/scient-desktop`](https://github.com/ScientFactory/scient-desktop) -
  the active public T3-derived application and current desktop release source.
- [`ScientFactory/scient-agent`](https://github.com/ScientFactory/scient-agent) -
  the owned source repository and historical OpenCode-derived incumbent for the
  planned native Scient agent; its refreshed implementation foundation remains
  unselected.
- [`ScientFactory/ScientFactory-website`](https://github.com/ScientFactory/ScientFactory-website) -
  the public website, download experience, and Cloudflare Pages deployment.

For internal team repository work, each contributor must create a local
workspace root that they control. The folder name is arbitrary;
`scient-workspace/` is only an example, not a required name or a company
repository. The root must remain a
plain, non-Git directory containing the three active product repositories as
sibling checkouts. Clone the website alongside them only when the work needs
website or download-surface context.

```text
<scient-workspace>/
├── Scient/
├── scient-desktop/
├── scient-agent/
└── website/          # optional
```

Open this parent directory as the editor or agent workspace so product
documentation, desktop code, and agent code are available in one working
context. That broader read context does not broaden write authority: identify
the owning child repository before editing, and run Git commands, create
branches, and open pull requests there. Keep temporary worktrees outside the
workspace root.

Internal contributors should follow the
[local workspace setup](docs/development/local-workspace-setup.md). Its
explicit clone procedure reflects the active three-repository layout; the
older bootstrap script is documented there as pending executable alignment.

Because the workspace root is a plain local container, it has no
version-controlled agent instructions of its own. Before an agent acts from
that root, have it read `Scient/AGENTS.md` and the applicable `AGENTS.md` and
`CONTRIBUTING.md` files in every repository within its task scope. Starting the
task from the owning repository is also valid while sibling repositories remain
available as read context.

The `Scient` repository is private and requires authorized organization access.
Contributors should clone only the repositories their work requires and follow
each owning repository's contributor guidance. An external contributor working
in a public sibling repository does not need this private parent repository.
Access to product documentation does not authorize retired private
repositories, unrelated private company repositories, credentials, personal
files, or customer material in the product workspace.

The workspace root is local organization only; the ScientFactory GitHub
organization is the remote grouping. Follow the
[GitHub operating model](docs/operations/github-operating-model.md) for branch,
promotion, release, deployment, and worktree rules.

Start here:

- [Collaborator onboarding](docs/onboarding.md) - read this first for the project journey, repository tour, and role-specific reading paths.
- [Documentation index](docs/README.md) - map of the repository's documentation areas.
- [Documentation policy](docs/documentation-policy.md) - rules for document authority, status, evidence, and placement.
- [Product requirements](docs/product/PRD.md) - accepted product direction.
- [Scient product identity](docs/product/scient-product-identity.md) - accepted company, app, native-agent, and external-agent naming system.
- [PapiLab-to-Scient rename record](docs/planning/papilab-to-scient-rename-execution-plan.md) - historical migration, compatibility, rollback, and deferred-public-cutover record.
- [Technology stack](docs/architecture/technology-stack.md) - proposed architecture and stack direction.
- [T3 foundation migration plan](docs/planning/t3-foundation-migration-plan.md) -
  historical proof-gated transition, cutover, and retirement record.
- [File, Resource, And Presentation Foundation](docs/planning/file-resource-and-presentation-foundation.md) -
  proposed durable direction for file identity, moved-file recovery, viewer
  capability routing, and broad read-only coverage.
- [Agent guidance](AGENTS.md) - protocol for agents working in this repository.
- [Team contribution protocol](docs/operations/team-contribution-protocol.md) -
  shared verification, review, human UI, and integration-readiness workflow.
