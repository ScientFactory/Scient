# Chat Interface UX

Status: Draft
Owner: Yaacov
Last updated: 2026-06-28
Purpose: Captures early UX/UI notes for PapiLab chat and streaming conversation surfaces.
Doc type: Planning note

## Document Rules

This is a surface-specific UX note for chat and streaming conversation behavior.

It is not product truth, a final UI specification, implemented behavior, or a generic chat-app checklist.

Add only concrete insights from product discussion, source review, prototypes, or implementation feedback. Keep durable product requirements in `docs/product/PRD.md`, and keep architecture or implementation details in their owning docs.

## Current State

PapiLab does not have an implemented chat interface yet.

The accepted PRD says PapiLab's product center is the durable research project, not chat. Chat should support project work, while important agent outputs should land in the relevant project surface for review and continuation.

## Captured Insight: Streaming Scroll Behavior

Source: shadcn post shared by Yaacov on 2026-06-28. The external post has not been independently inspected.

Core insight: in a streaming chat, preserving the reader's position is part of the product experience. The interface should follow the stream only while the user appears to be following it.

Candidate implications for PapiLab chat surfaces:

- Keep the live response in view while the researcher is at the live edge.
- Stop following when the researcher scrolls away, selects text, uses keyboard navigation, opens a link, searches, or focuses something inside the transcript.
- Start a new assistant turn with enough vertical room to read it from the beginning.
- Keep enough previous conversation visible for context.
- Let offscreen streaming continue without moving the reader.
- Show a quiet indicator when streaming or new messages continue out of view.
- Provide a clear way to jump back to the latest reply and resume following.
- Reopen a saved conversation near the last meaningful turn, not blindly at the absolute bottom.
- Preserve scroll position when markdown, code blocks, images, embedded artifacts, or older messages change layout.
- Do not let stop, retry, regenerate, branching, or error states steal the reader's position.

## Open Questions

- Which chat surfaces does PapiLab need first: project-wide agent chat, object-scoped chat, review chat, mobile chat, or some combination?
- What counts as the last meaningful turn in a research project: last user instruction, last review checkpoint, last unresolved agent proposal, or last opened project object?
- How should chat position interact with position inside source readers, evidence views, manuscript sections, code outputs, and artifact previews?
- What is the right mobile role for streaming chat: reading, review, approvals, lightweight continuation, or fuller conversation?
