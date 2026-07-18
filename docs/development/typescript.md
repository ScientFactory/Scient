# TypeScript Conventions

Status: Placeholder
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-07-17
Purpose: Future home for Scient TypeScript conventions once implementation begins.
Doc type: Future home

This file will define Scient's TypeScript conventions when the repo has TypeScript code.

The conventions below are candidates to revisit before implementation. They are not yet active coding standards because no TypeScript project structure exists in this repo.

## Candidate Conventions

- Prefer `interface` for object shapes and `type` for unions, intersections, mapped types, and aliases.
- Avoid `any`; use `unknown` plus explicit narrowing when a value is not yet typed.
- Keep local helper types private. Export public types next to the implementation they describe.
- Use typed function components. Do not require `React.FC` unless it improves clarity.
- Name props interfaces `{ComponentName}Props`.
- Use `React.ReactNode` for `children`.
- Prefer clear import boundaries. Decide absolute import aliases after the package layout exists.
- Avoid broad barrel files that hide dependency direction. Allow narrow package-boundary barrels only when they clarify public API.

## Do Not Use As

- active coding standard
- lint policy
- implemented project convention
- command reference
