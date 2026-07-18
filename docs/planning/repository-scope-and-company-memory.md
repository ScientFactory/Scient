# Repository Scope And Company Memory

Status: Proposed
Owner: Yaacov
Created: 2026-07-13
Last updated: 2026-07-17
Purpose: Recommends how the Scient repository should relate to a broader connected company memory without mixing product authority with company-level authority.
Doc type: Planning note

## Document Rules

This document owns the unresolved repository-scope recommendation. It does not create a company knowledge hierarchy or make company-wide material authoritative inside this repository.

The current repository boundary remains defined by `../../README.md`, `../README.md`, and `../../AGENTS.md`. Durable documentation rules remain in `../documentation-policy.md`.

## Current Boundary

This repository is the Scient product and project knowledge workspace. It owns Scient product direction, architecture, planning, research, design, quality, future implementation guidance, operations guidance when real, lab evidence, and project-specific agent workflows.

Commercial, market, customer, or organizational material may live here when it directly informs Scient product work and is placed in the correct planning or research surface. This does not make the repository the unrestricted memory of the whole company.

## Options

| Model | Benefit | Main risk |
| --- | --- | --- |
| Scient product repository only | Clearest current boundary | Company context remains disconnected unless another system links it |
| One company-and-product repository | Simple navigation for a small team | Product and company authority boundaries become harder to preserve |
| Connected company and product repositories | One logical memory with separate authority boundaries | Requires deliberate cross-repository routing and discoverability |

## Recommendation

Use a connected company-memory model. Keep this repository as the Scient product branch of that memory, and create a separate company-level authority when company strategy, finance, legal, people, customer knowledge, or cross-product decisions need durable homes.

The logical hierarchy may be connected even when the underlying knowledge lives in more than one repository or system. Link to authoritative company material instead of duplicating it inside Scient.

## Principles For A Future Company Memory

- Organize knowledge from company direction down to products, projects, systems, and specific work.
- Give each durable item a real owner, status, purpose, evidence boundary, and clear place in the hierarchy.
- Preserve important decisions, constraints, interfaces, hard-won lessons, and repeated explanations; do not archive everything by default.
- Let agents draft and navigate, but keep humans accountable for accepted knowledge.
- Surface contradictions rather than synthesizing false agreement.
- Keep every durable surface readable and reviewable by humans.

## Decision Needed Before Structural Change

Before adding company-level folders or moving Scient under a broader hierarchy, decide:

- the company-memory owner;
- whether it is one repository or several connected systems;
- the company-level document and decision types;
- how authority and links flow between company and product knowledge; and
- how existing Scient history would be preserved.

Until then, do not create company, finance, legal, people, or customer-record folders in this repository merely to anticipate future scale.
