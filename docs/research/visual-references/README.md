# Visual References

Status: Active
Owner: Yaacov
Last updated: 2026-07-17
Purpose: Maps external and historical internal UI screenshots into retrieval-friendly categories for later product-design research.
Doc type: Repo orientation

Visual references are grouped by the product surface or interaction they illustrate. Each category owns its own index, descriptive filenames, source context, observations, and retrieval terms. Historical LitRev material must be labeled clearly so it cannot be mistaken for current product direction.

These references are research evidence kept for later comparison and inspiration. They are not accepted Scient design direction, selected colors, design tokens, or implementation requirements, and they do not imply permission to copy another product.

## Categories

| Category | Contents | Index |
| --- | --- | --- |
| Authentication | Login, sign-up, account-entry routing, identity-provider, consent, and account-continuation patterns | [Browse authentication references](authentication/README.md) |
| Agent workflows | Agent task plans, step trackers, progress states, and composer-adjacent workflow surfaces | [Browse agent workflow references](agent-workflows/README.md) |
| Dashboards and settings | Administrative dashboards, configuration views, status communication, hierarchy, spacing, surfaces, and visual tone | [Browse dashboard and settings references](dashboard-and-settings/README.md) |
| Dialogs and overlays | Important prompts, blocking modals, confirmations, warnings, interruptions, and other layered interactions | [Browse dialog and overlay references](dialogs-and-overlays/README.md) |
| Identity | Historical LitRev symbol sources, adopted scaffold identity, and unselected visual alternatives | Not yet indexed |
| Motion and interaction | Hover responses, transitions, animated previews, state changes, and other time-dependent interface behavior | [Browse motion and interaction references](motion-and-interaction/README.md) |

Future references should be indexed by the product surface or interaction they primarily illustrate. Visual qualities such as color may be noted inside a reference without making that image a selected Scient palette.

## Adding A Reference

1. Choose the category that matches the illustrated surface or interaction. Create a category only when no existing category fits.
2. Put the image in that category's `images/` folder.
3. Use the filename pattern documented in the category index.
4. Add a stable, library-wide reference ID and enough context to distinguish similar screenshots.
5. Record uncertainty, preference, and decision status explicitly. Inspiration is not product doctrine.
6. Remove or redact personal, credential, medical, financial, or other sensitive information before storing an image in the repo.
