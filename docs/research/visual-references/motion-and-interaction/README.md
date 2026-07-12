# Motion And Interaction Visual References

Status: Active
Owner: Yaacov
Last updated: 2026-07-12
Purpose: Indexes external motion, hover, transition, and animated-state references that must be understood over time rather than from a still image alone.
Doc type: Research evidence

## How To Use This Library

Use these references to locate and re-observe time-dependent interface behavior. A screenshot can identify the surface, but it cannot preserve timing, easing, sequencing, cursor movement, or entry and exit behavior. Follow the recorded live source and inspection steps before drawing conclusions.

Everything here is raw research evidence. A saved reference is not an accepted LitRev motion language, navigation pattern, interaction rule, accessibility claim, implementation requirement, or instruction to copy another product.

Static images belong in `images/`. Use `<product>-<surface>-<interaction-pattern>-<YYYY-MM-DD>.<ext>` and remove or crop browser or identifying information before committing a reference.

## Index

| ID | Reference | What requires live inspection | Captured | File |
| --- | --- | --- | --- | --- |
| VR-018 | xAI Products header hover | Mega-menu entrance and exit, selected-row response, and animated preview transition as the pointer moves between product choices | 2026-07-12 | [View browser-cropped image](images/xai-products-header-hover-mega-menu-2026-07-12.png) |

## Reference Details

### VR-018 — xAI Products Header Hover And Reactive Preview

- **Product:** xAI.
- **Surface:** Desktop homepage header and the `Products` hover mega-menu.
- **Live source:** [x.ai](https://x.ai/).
- **Source evidence:** Screenshot supplied by Yaacov and live interaction inspected on 2026-07-12.
- **Why it was saved:** Yaacov wants the motion and the way it reacts to hover preserved as a reference for later LitRev design work. The screenshot is a locator for the interaction, not a complete record of it.

#### Where To Look

1. Open the xAI homepage at a desktop width.
2. Hover over `Products` in the top header and watch how the large menu enters beneath the navigation.
3. Move the pointer between `Chat`, `Build`, `Imagine`, and `Voice` in the menu's left column.
4. Watch the selected row, the right-side preview, and the transition between product-specific visual states.
5. Move the pointer between the header, menu, and outside area to inspect how the menu remains open or exits.

#### What Was Observed

- Hovering `Products` opens a wide two-part mega-menu without requiring a click.
- The left column combines product names with short descriptions and gives the hovered row a quiet filled background.
- The right preview reacts to the hovered product. During inspection, the Chat state showed animated conversation content and the Voice state changed to an animated iridescent sphere.
- The large animated preview makes the hover response feel like a product demonstration rather than a conventional link list.

#### Motion Extraction Note

Revisit the live page before using this reference. Record or inspect the menu at normal speed and in slow motion to extract entrance delay, easing, preview crossfade or replacement behavior, pointer-travel tolerance, row-highlight timing, menu persistence, and exit timing. The still screenshot cannot establish those values, and the live implementation may change.

- **Privacy handling:** Browser tabs, controls, and address-bar content were cropped from the supplied screenshot before storage.
- **Retrieval terms:** xAI, x.ai, header, navigation, Products, hover, mega-menu, dropdown, reactive preview, animated preview, motion, transition, Chat, Build, Imagine, Voice, iridescent sphere, row highlight, hover intent, menu persistence, exit behavior.
- **Status:** Raw visual and interaction reference only. No LitRev motion, navigation, menu, visual-design, or implementation decision has been made from it.
