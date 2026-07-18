# Agent Workflow Visual References

Status: Active
Owner: Scient 001
Created: 2026-07-13
Last updated: 2026-07-18
Purpose: Indexes visual patterns for agent task plans, step trackers, progress states, and workflow controls placed near a conversation composer.
Doc type: Research evidence

## How To Use This Library

Use these references to compare how a long-running agent task can expose its plan without taking the user away from the conversation. Pay attention to the relationship between progress visibility, vertical space, current-step clarity, expansion controls, and the follow-up composer.

Everything here is raw research evidence. A saved reference is not an accepted Scient task model, progress taxonomy, composer layout, interaction rule, accessibility claim, implementation requirement, or instruction to copy another product.

Images belong in `images/` and use the filename pattern `<surface>-<state>-<YYYY-MM-DD>.<ext>`. Remove or blur project-specific wording and paths before committing a reference.

## Index

| ID | Reference | State | Notable idea | Captured | File |
| --- | --- | --- | --- | --- | --- |
| VR-019 | Agent task tracker above composer | Expanded | Full step list remains visible above the follow-up composer with per-step status markers | 2026-07-12 | [View expanded state](images/agent-task-tracker-expanded-2026-07-12.png) |
| VR-020 | Agent task tracker above composer | Collapsed | Current step remains visible while the remaining plan is hidden to reduce vertical footprint | 2026-07-12 | [View collapsed state](images/agent-task-tracker-collapsed-2026-07-12.png) |

## Reference Details

### VR-019 — Agent Task Tracker Above Composer, Expanded

- **Surface:** Agent conversation composer with an expanded multi-step task tracker directly above it.
- **Source:** Screenshot supplied by Yaacov; originating product or URL was not recorded.
- **Why it was saved:** Yaacov wants a reference for showing the steps an agent creates when a user gives it a long task.
- **Visible pattern:** A compact `Thought for 2s` summary sits above a bordered tracker. Four task rows show distinct status markers: completed or active orange dots, an outlined current or pending state, and a gray future state. Expand/collapse controls sit at the tracker’s upper-right edge. The follow-up composer and model/tool controls remain immediately below.
- **Design question to revisit:** Can the user understand what has happened, what is happening now, and what remains without opening a separate progress view?
- **Privacy handling:** Project-specific task wording was blurred before storage.
- **Retrieval terms:** agent workflow, task tracker, steps tracker, plan progress, expanded tracker, composer-adjacent, current step, completed step, future step, status dots, long-running task, follow-up composer, thought summary.
- **Status:** Raw visual reference only. No Scient task-state model or tracker layout has been accepted from it.

### VR-020 — Agent Task Tracker Above Composer, Collapsed

- **Surface:** Agent conversation composer with the task tracker collapsed to a single current-step row.
- **Source:** Screenshot supplied by Yaacov; originating product or URL was not recorded.
- **Why it was saved:** This is the compact counterpart to VR-019 and shows how progress context can remain available without keeping the full plan open.
- **Visible pattern:** One current step remains in a bordered header row with its status ring and an expand/collapse affordance. The follow-up composer and its controls retain the same position beneath it, preserving continuity while reducing vertical occupation.
- **Design question to revisit:** Which step summary and status signal are sufficient when the full plan is collapsed, and how obvious is the path back to the expanded list?
- **Privacy handling:** The source-path line at the top was cropped before storage.
- **State relationship:** VR-019 is the expanded state of the same tracker concept; VR-020 is the collapsed state.
- **Retrieval terms:** agent workflow, task tracker, steps tracker, collapsed tracker, current step, compact progress, composer-adjacent, expand control, vertical space, long-running task, follow-up composer.
- **Status:** Raw visual reference only. No Scient task-state model or tracker layout has been accepted from it.
