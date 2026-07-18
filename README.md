# Scient

Status: Active
Owner: Yaacov
Last updated: 2026-07-18
Purpose: Entry point for the Scient product and project repository.
Doc type: Repo orientation

Scient is the current repository and implemented desktop identity. The
repository is documentation-first, with one narrow project-initiation package
in the maintained desktop fork. The native Scient agent remains planned; its
owned source repository is `ScientFactory/scient-agent`.

## Related Repositories And Local Workspace

ScientFactory owns three independently versioned repositories:

- [`ScientFactory/Scient`](https://github.com/ScientFactory/Scient) - product
  direction, architecture, planning, cross-repository source pins, and the
  Scient-owned scientific boundary.
- [`ScientFactory/scient-desktop`](https://github.com/ScientFactory/scient-desktop) -
  the maintained Synara-derived desktop application foundation and current
  product implementation home.
- [`ScientFactory/scient-agent`](https://github.com/ScientFactory/scient-agent) -
  the maintained OpenCode-derived source foundation for the planned native
  Scient agent.

The recommended local workspace keeps them as sibling Git repositories inside
a plain, non-Git `ScientFactory/` directory:

```text
ScientFactory/
├── Scient/
├── scient-desktop/
└── scient-agent/
```

The container is local organization only; the ScientFactory GitHub
organization is the remote grouping. Run Git commands, create branches, and
open pull requests in the repository that owns the change. Keep temporary
worktrees outside the three-repository container.

Start here:

- [Collaborator onboarding](docs/onboarding.md) - read this first for the project journey, repository tour, and role-specific reading paths.
- [Documentation index](docs/README.md) - map of the repository's documentation areas.
- [Documentation policy](docs/documentation-policy.md) - rules for document authority, status, evidence, and placement.
- [Product requirements](docs/product/PRD.md) - accepted product direction.
- [Scient product identity](docs/product/scient-product-identity.md) - accepted company, app, native-agent, and external-agent naming system.
- [PapiLab-to-Scient rename record](docs/planning/papilab-to-scient-rename-execution-plan.md) - historical migration, compatibility, rollback, and deferred-public-cutover record.
- [Technology stack](docs/architecture/technology-stack.md) - proposed architecture and stack direction.
- [Agent guidance](AGENTS.md) - protocol for agents working in this repository.
