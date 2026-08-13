# Marketing And Website Visual References

Status: Active
Owner: Scient 001
Created: 2026-07-25
Last updated: 2026-07-25
Purpose: Indexes external public marketing and product-website surfaces — landing heroes, download and distribution flows, pricing, FAQ, and similar acquisition-facing pages — kept for later Scient website design comparison and inspiration.
Doc type: Research evidence

## How To Use This Library

Use these references to revisit public-website and download-experience design during later Scient website exploration, including messaging hierarchy, download and platform-selection flows, OS/architecture detection, social proof, and overall marketing tone.

Everything here is raw research evidence. A saved reference is not an accepted Scient design direction, selected palette, color token system, accessibility claim, implementation requirement, or instruction to copy another product.

Images belong in `images/` and use the filename pattern `<product>-<surface>-<distinctive-pattern>-<YYYY-MM-DD>.<ext>`. Remove or crop identifying information before committing a reference.

## Index

| ID | Reference | Notable idea | Captured | File |
| --- | --- | --- | --- | --- |
| VR-020 | Synara download page | OS-detected "For your device" recommendation, three per-platform cards, and an in-card Apple Silicon / Intel architecture switch, with download count and a "Browse all releases" escape hatch for older versions and checksums | 2026-07-25 | [View screenshot](images/synara-download-page-os-detection-highlight-arch-toggle-2026-07-25.png) |
| VR-021 | Synara landing hero | Provider-icon row, one-line value proposition, an OS-adaptive "Download for macOS" primary button paired with "Star on GitHub", and a download-count social-proof line | 2026-07-25 | [View screenshot](images/synara-landing-hero-provider-icons-download-github-2026-07-25.png) |

## Reference Details

### VR-020 — Synara Download Page

- **Product:** Synara (trysynara.com).
- **Surface:** Public desktop-app download page at `https://www.trysynara.com/` (download section).
- **Source:** Screenshot supplied and identified by Yaacov, captured 2026-07-25.
- **Why it was saved:** Yaacov considers Synara's website "pretty cool" and specifically wants to learn from its download experience to improve the Scient website. Kept as the visual companion to the paired idea-inbox entry on adopting an OS-aware download flow.
- **Download-flow patterns worth studying:**
  - **OS detection.** A line reads "Detected macOS — recommended option highlighted below," so the page adapts to the visitor's platform.
  - **Recommended-option highlight.** The matching platform card carries a "✓ For your device" badge and an accent border, visually steering the visitor to the right download without hiding the others.
  - **Three per-platform cards.** macOS (`.dmg · Apple Silicon & Intel`), Windows (`.exe installer · 64-bit`), and Linux (`.AppImage · x86_64`), each with a platform glyph, format/arch subtitle, and a single dark "Download" button.
  - **In-card architecture switch.** The macOS card contains an "Apple Silicon | Intel" segmented control that swaps which build the Download button delivers, rather than listing separate download rows.
  - **Social proof.** "Already downloaded by 10,771 people" beneath the cards.
  - **Escape hatch.** "Latest release v0.5.5. Looking for an older version or the checksums? Browse all releases." routes power users to full releases without cluttering the primary flow.
- **Overall design observations:** calm near-white canvas; large centered page title with a short two-line value subtitle; generous whitespace; restrained rounded cards with thin borders and low elevation; a single warm accent color used only for the "For your device" badge, highlight border, and the "Browse all releases" link.
- **Privacy handling:** None required; the page is public marketing with no personal account information.
- **Possible Scient relevance:** compare against the current Scient website download experience — OS/arch detection, a recommended-platform highlight, an in-card architecture switch, a download-count proof line, and a "browse all releases / checksums" link. Establishes no Scient copy, palette, tokens, layout, or implementation commitment.
- **Retrieval terms:** Synara, download page, OS detection, platform detection, recommended download, for your device, macOS, Windows, Linux, Apple Silicon, Intel, architecture toggle, segmented control, .dmg, .exe, AppImage, download count, social proof, browse all releases, checksums, marketing website.
- **Status:** Raw visual reference only. It is saved for comparison and inspiration, not an accepted Scient design direction, and it does not imply permission to copy Synara's product.

### VR-021 — Synara Landing Hero

- **Product:** Synara (trysynara.com).
- **Surface:** Public landing-page hero section at `https://www.trysynara.com/`.
- **Source:** Screenshot supplied and identified by Yaacov, captured 2026-07-25.
- **Why it was saved:** Retained alongside VR-020 as broader context for Synara's public website, which Yaacov wants to learn several things from.
- **Notable patterns:** a horizontal row of supported-provider icons above the headline; a large bold headline ("Built to make you extraordinarily productive."); a one-line subhead framing the "AI subscriptions you already pay for" positioning; a primary dark **"Download for macOS"** button whose label is OS-adaptive, paired with a secondary outlined **"Star on GitHub"** button; and a "Already downloaded by 10,771 people" social-proof line.
- **Overall design observations:** same restrained near-white palette and generous whitespace as the download page; strong typographic hierarchy; primary/secondary button pairing; provider icons used as trust/compatibility signaling.
- **Privacy handling:** None required; public marketing page.
- **Possible Scient relevance:** compare the hero's OS-adaptive primary CTA, provider-icon trust row, secondary GitHub action, and download-count proof with the current Scient homepage hero and its GitHub/download treatment. Relates to the existing idea about provider-logo presentation on the Scient website. Establishes no Scient copy, palette, tokens, layout, or implementation commitment.
- **Retrieval terms:** Synara, landing page, hero, provider icons, provider logos, value proposition, AI subscriptions you already pay for, download CTA, OS-adaptive button, download for macOS, star on GitHub, social proof, download count, marketing website.
- **Status:** Raw visual reference only. It is saved for comparison and inspiration, not an accepted Scient design direction, and it does not imply permission to copy Synara's product.
