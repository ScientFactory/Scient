# Project Skills

Status: Active
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Indexes local workflow skills that help agents work on LitRev without becoming project authority.
Doc type: Repo orientation

This folder keeps LitRev-specific agent skills together so they are easy to find when working on this project.

Project skills are workflow helpers. They should point agents back to the canonical repo documents and must not override `AGENTS.md`, `docs/product/`, `docs/architecture/`, or `docs/documentation-policy.md`.

## Skills

- [`documentation/litrev-documentation-stewardship/SKILL.md`](documentation/litrev-documentation-stewardship/SKILL.md) - governed documentation creation, review, placement, promotion, progress routing, reconciliation, and validation.
- [`product/litrev-product-stewardship/SKILL.md`](product/litrev-product-stewardship/SKILL.md) - product management, PRD, feature analysis, roadmap, and product decision support.

## Adding Skills

Place new project skills under a domain folder:

```text
skills/<domain>/<skill-name>/SKILL.md
```

Use the narrowest useful domain, such as `product`, `documentation`, `research`, `engineering`, `quality`, or `design`.

If a skill should be available to Codex globally, link or install it under `/Users/yaacov/.codex/skills/`. Keep this repo folder as the easy-to-find project collection.
