# Quality

Status: Active
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-07-22
Purpose: Defines where Scient quality, testing, and engineering-standard documentation lives.
Doc type: Repo orientation

Use this folder for quality principles and testing philosophy. Verification strategy belongs here when it is discussed and accepted; execution commands and CI operations belong later under `docs/development/` or `docs/operations/`.

Current files:

- `testing-philosophy.md` - draft testing doctrine for Scient.
- `code-quality-principles.md` - draft code quality doctrine for Scient.

The active minimum contribution workflow that currently operationalizes a
small subset of these doctrines lives in the [Team Contribution
Protocol](../operations/team-contribution-protocol.md). Repository-specific
commands and CI remain in the owning implementation repositories.

Do not use this folder as:

- implemented test plan
- command reference
- CI documentation
