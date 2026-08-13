# Dashboard And Settings Visual References

Status: Active
Owner: Scient 001
Created: 2026-07-12
Last updated: 2026-07-25
Purpose: Indexes external administrative dashboards and settings interfaces kept for later product-design comparison and inspiration.
Doc type: Research evidence

## How To Use This Library

Use these references to revisit overall interface design during later Scient exploration, including information hierarchy, spacing, status communication, controls, surfaces, and visual tone.

Everything here is raw research evidence. A saved reference is not an accepted Scient design direction, selected palette, color token system, accessibility claim, implementation requirement, or instruction to copy another product.

Images belong in `images/` and use the filename pattern `<product>-<surface>-<distinctive-pattern>-<YYYY-MM-DD>.<ext>`. Remove or crop identifying information before committing a reference.

## Index

| ID | Reference | Notable idea | Captured | File |
| --- | --- | --- | --- | --- |
| VR-015 | Resend domain dashboard | Clear administrative hierarchy, restrained controls, status communication, spacing, surfaces, and visual tone | 2026-07-12 | [View privacy-cropped image](images/resend-domain-dashboard-status-and-configuration-2026-07-12.png) |
| VR-016 | Cloudflare domain overview | Dense but structured overview combining analytics cards, configuration summaries, quick actions, and contextual help | 2026-07-12 | [View privacy-cropped image](images/cloudflare-domain-overview-analytics-and-quick-actions-2026-07-12.png) |
| VR-018 | Factory AI/Droid Opus 5 notification card | Compact model-availability announcement with a short headline, explanatory copy, close control, and learn-more action | 2026-07-25 | [View supplied screenshot](images/factory-ai-droid-opus-5-notification-card-2026-07-25.png) |
| VR-019 | Factory AI "Factory Academy" learning hub | In-product learning academy: sidebar module nav, tiered course catalog, per-card lessons/duration/difficulty, and locked-until-prerequisite progression | 2026-07-25 | [View privacy-redacted screenshot](images/factory-ai-academy-course-catalog-tiered-locked-modules-2026-07-25.png) |

## Reference Details

### VR-015 — Resend Domain Dashboard

- **Product:** Resend.
- **Surface:** Desktop administrative dashboard showing an email-domain status and configuration view.
- **Source:** Resend screenshot supplied and identified by Yaacov; the original page URL was not recorded.
- **Why it was saved:** Yaacov considers Resend's overall design good and wants this screen available as a reference to look at during later Scient design work.
- **Overall design observations:** clear information hierarchy; generous whitespace; compact controls; restrained corner radii and borders; low visual noise; readable status progression; and a contained configuration panel beneath the overview.
- **Notable color relationships:** a predominantly white canvas; very light gray controls and selected states; thin low-contrast borders; near-black primary text; muted secondary text; pale mint status fills; and darker green icons, labels, and outlines for verified or successful states.
- **Surface treatment:** restrained corner radii, minimal elevation, generous whitespace, and a dotted neutral timeline field that adds texture without becoming visually dominant.
- **Privacy handling:** The account sidebar was cropped from the supplied screenshot before storage because it contained identifying account text.
- **Retrieval terms:** Resend, dashboard, domains, settings, configuration, status timeline, information hierarchy, spacing, neutral dashboard, white canvas, light gray, mint green, success state, low-contrast border, restrained UI, admin interface, surface treatment.
- **Status:** Raw visual reference only. It is saved to look at, not to establish the colors or overall design Scient will use. No Scient palette, design system, product-design decision, or implementation commitment has been made from it.

### VR-016 — Cloudflare Domain Overview Dashboard

- **Product:** Cloudflare.
- **Surface:** Desktop domain overview combining traffic analytics, DNS state, AI-bot controls, and quick operational actions.
- **Source:** Cloudflare screenshot supplied and identified by Yaacov; the original page URL was not recorded.
- **Why it was saved:** Yaacov wants the Cloudflare dashboard available as a reference to look at during later Scient design work.
- **Overall design observations:** a broad overview with a strong page title and explanatory line; time-range controls above repeated metric cards; compact chart-and-number pairings; a distinct right-hand column for status, configuration, and quick actions; restrained blue links and chart lines; and dense functionality separated by whitespace, rules, and card boundaries.
- **Information architecture observations:** overview information remains central while operational controls are grouped to the side; related settings are divided into labeled sections; premium-only capability is marked inline; and explanatory copy stays near each control.
- **Privacy handling:** The account and navigation sidebar was cropped from the supplied screenshot because it contained identifying account text and additional domain names.
- **Retrieval terms:** Cloudflare, dashboard, domain overview, analytics cards, charts, DNS, AI bot access, quick actions, configuration sidebar, settings, information hierarchy, dense dashboard, operational controls, contextual help, blue accent.
- **Status:** Raw visual reference only. It is saved for comparison and inspiration, not as an accepted Scient layout, navigation model, palette, design system, product-design decision, or implementation commitment.

### VR-018 — Factory AI/Droid Opus 5 Notification Card

- **Product:** Factory AI/Droid. The card announces Claude Opus 5 availability
  inside Factory's product; it is not a Claude application surface.
- **Surface:** Compact in-app model-availability announcement card.
- **Source:** Screenshot supplied by Yaacov; the original page or application context was not recorded.
- **Why it was saved:** Yaacov wants to retain the card as an idea for shaping the Scient desktop release-notification or “What’s New” card.
- **Notable patterns:** short availability headline; restrained explanatory copy; generous internal spacing; a prominent circular close control; and a simple orange learn-more action separated from the body text.
- **Possible Scient relevance:** compare the card's information hierarchy, density, dismissal affordance, and secondary learn-more action with the existing `WhatsNewSidebarCard` and release-note surfaces. This does not establish Scient copy, colors, tokens, layout, or interaction behavior.
- **Retrieval terms:** Factory AI, Droid, Claude Opus 5, release notification, update card, what's new, announcement card, availability, close button, learn more, compact notification, release communication.
- **Status:** Raw visual reference only. It is saved for comparison and inspiration, not as an accepted Scient release-notification design or implementation requirement.

### VR-019 — Factory AI "Factory Academy" Learning Hub

- **Product:** Factory AI (Droid).
- **Surface:** In-product learning academy — a full-page course catalog reached from the app's account menu, with a left module-navigation sidebar and a card-grid main pane.
- **Source:** Screenshot supplied by Yaacov, captured 2026-07-25. Original page URL not recorded.
- **Why it was saved:** Yaacov wants to adapt the idea of an in-app academy that teaches users how to use the product, and specifically admires the visual design. Kept as the visual companion to the paired idea-inbox entry "In-app learning academy" so the design can be revisited during later Scient exploration.
- **Overall design observations:** calm near-white canvas with a faint diagonal hatch texture; strong page title plus a one-line explanatory subtitle; a bordered "Welcome" intro panel stating the tier model, unlock rules, and pass threshold; courses grouped under tier headings ("Droid Essentials", "Droid Specialist", …) as a two-column card grid; restrained thin borders, minimal elevation, generous whitespace, low visual noise.
- **Progression and status patterns:** a left sidebar lists every module with lock glyphs on gated ones; locked course cards are visibly dimmed/greyed with a lock icon and an inline "Unlocks after passing …" prerequisite line; each card carries a compact metadata row (lesson count, estimated minutes) and a small difficulty pill ("Basic" green, "Intermediate" amber); the current module is highlighted in the sidebar.
- **Notable color relationships:** predominantly white/very-light-gray surfaces; near-black primary text; muted secondary text; grey overlay for locked/unavailable state; pale green and pale amber difficulty pills as the only saturated accents.
- **Privacy handling:** The account name and avatar bar at the bottom of the sidebar was painted out before storage because it contained the identifying account name. The rest of the account menu popover (Settings, Analytics, Wiki, Academy, Support, Change theme, Log out) was retained because it shows where the Academy entry point sits in the product.
- **Possible Scient relevance:** compare the tiered catalog, prerequisite-gated progression, per-course metadata/difficulty treatment, and account-menu entry point with any future Scient in-app learning or onboarding surface. This establishes no Scient copy, palette, tokens, layout, curriculum model, or implementation commitment.
- **Retrieval terms:** Factory AI, Droid, academy, learning hub, in-app education, onboarding, course catalog, tiers, curriculum, locked modules, prerequisites, unlock, progression, difficulty pill, lessons, sidebar navigation, card grid, certification, quiz, dashboard tone.
- **Status:** Raw visual reference only. It is saved for comparison and inspiration, not an accepted Scient design direction, and it does not imply permission to copy Factory AI's product.
