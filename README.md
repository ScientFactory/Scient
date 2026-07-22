# Scient

Status: Active
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-07-22
Purpose: Entry point for the Scient product and project repository.
Doc type: Repo orientation

Scient is the current repository and implemented desktop identity. The
repository is documentation-first, with one narrow project-initiation package
in the standalone desktop source repository. The native Scient agent remains
planned; its owned source repository is
`ScientFactory/scient-agent`.

## Related Repositories And Local Workspace

ScientFactory owns four independently versioned repositories:

- [`ScientFactory/Scient`](https://github.com/ScientFactory/Scient) - product
  direction, architecture, planning, cross-repository source pins, and the
  Scient-owned scientific boundary.
- [`ScientFactory/scient-desktop`](https://github.com/ScientFactory/scient-desktop) -
  the standalone desktop source repository and current product implementation
  home.
- [`ScientFactory/scient-agent`](https://github.com/ScientFactory/scient-agent) -
  the maintained OpenCode-derived source foundation for the planned native
  Scient agent.
- [`ScientFactory/ScientFactory-website`](https://github.com/ScientFactory/ScientFactory-website) -
  the public website, download experience, and Cloudflare Pages deployment.

For internal team repository work, each contributor must create a local
workspace root that they control. The folder name is arbitrary;
`scient-workspace/` is only an example, not a required name or a company
repository. The root must remain a
plain, non-Git directory containing the three core product repositories as
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

Internal contributors need authorized access to the private `Scient`
repository. External contributors working in a public repository are not
required to clone it and should be able to follow that public repository's own
contributor guidance. Do not place unrelated private company repositories,
credentials, personal files, or customer material in the product workspace.

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
- [Agent guidance](AGENTS.md) - protocol for agents working in this repository.
