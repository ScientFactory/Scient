# Dialog And Overlay Visual References

Status: Active
Owner: Scient 001
Created: 2026-07-12
Last updated: 2026-07-18
Purpose: Indexes external modal, dialog, warning, confirmation, and overlay patterns kept for later product-design comparison and inspiration.
Doc type: Research evidence

## How To Use This Library

Use these references to compare how interfaces interrupt normal work, communicate importance, focus attention, explain consequences, and provide action or escape paths.

Everything here is raw research evidence. A saved reference is not an accepted Scient interaction pattern, severity model, accessibility claim, implementation requirement, or instruction to copy another product.

Images belong in `images/` and use the filename pattern `<product>-<surface>-<dialog-pattern>-<YYYY-MM-DD>.<ext>`. Remove or crop identifying information before committing a reference.

## Index

| ID | Reference | Notable idea | Captured | File |
| --- | --- | --- | --- | --- |
| VR-017 | Cloudflare Observatory enable-RUM modal | Attention-blocking overlay that explains a consequential feature through three benefits, a primary action, and explicit decline and close paths | 2026-07-12 | [View privacy-cropped image](images/cloudflare-observatory-important-enable-rum-modal-2026-07-12.png) |

## Reference Details

### VR-017 — Cloudflare Observatory Important Enable-RUM Modal

- **Product:** Cloudflare.
- **Surface:** Centered modal shown over the dimmed Observatory dashboard when prompting the user to enable Real User Monitoring.
- **Source:** Cloudflare screenshot supplied and identified by Yaacov; the original page URL was not recorded.
- **Why it was saved:** Yaacov wants this available as a reference for an important or blocking popup pattern during later Scient design work.
- **Interaction distinction:** The overlay blocks interaction with the page behind it while open, but it does not force acceptance. The user can enable the feature, explicitly decline it, or close the dialog.
- **Notable patterns:** strong dimming isolates the dialog from a visually dense page; the white rectangular surface has clear elevation; the title is centered; three icon-supported benefit statements explain the proposal before the decision; the blue primary action is visually dominant; the decline action is explicit rather than hidden; and a conventional close control remains visible in the upper-right corner.
- **Questions for later evaluation:** Which Scient situations genuinely justify interrupting work? When should a decline option, close option, or both be available? How should focus trapping, keyboard dismissal, screen-reader labeling, and return of focus behave? These remain design questions, not conclusions established by the screenshot.
- **Privacy handling:** The image was tightly cropped to remove account and domain-navigation details while retaining the dimmed-page context around the modal.
- **Retrieval terms:** Cloudflare, Observatory, modal, dialog, popup, important prompt, blocking overlay, attention interruption, dimmed backdrop, feature enablement, RUM, Real User Monitoring, benefits list, primary action, decline action, close button, escape path.
- **Status:** Raw visual reference only. It is saved for comparison and inspiration, not as an accepted Scient modal, severity pattern, interaction rule, visual design, or implementation commitment.
