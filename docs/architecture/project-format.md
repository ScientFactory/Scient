# Project Format

Status: Placeholder
Owner: Yaacov
Created: 2026-06-27
Last updated: 2026-07-19
Purpose: Defines what should be documented about Scient project structure once the format is designed.
Doc type: Future home

This page will document the Scient project format when it exists. Unprocessed
questions about project memory, conversations, files, portability, Git, cloud
folders, and storage boundaries remain in the draft
[Memory Architecture Discovery](../planning/memory-architecture-discovery.md).

The accepted minimum built-in skill activation boundary, including
`.scient/skills.lock.json`, currently lives in
[ADR-0003](decisions/ADR-0003-built-in-skills-portfolio-and-project-activation.md).
That narrow decision does not establish the rest of the project format.

Document here:

- project folder layout
- local database and file boundaries
- portable project metadata
- artifact locations
- snapshot and restore expectations
- relationship between files, database records, and cloud mirrors

Do not use as:

- accepted architecture
- implemented project format
- schema reference
