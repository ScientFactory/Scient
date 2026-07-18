# Authentication Visual References

Status: Active
Owner: Yaacov
Created: 2026-07-12
Last updated: 2026-07-17
Purpose: Indexes external and historical internal login, sign-up, account-entry, identity-provider, and authentication-consent UI references.
Doc type: Research evidence

## How To Use This Library

Each saved reference gets a stable library-wide ID, a descriptive filename, its source context when known, and a short explanation of what made it worth keeping. These references are inspiration and research evidence; they are not accepted Scient design direction. Historical LitRev references are not current product truth or current implementation.

When adding a reference:

1. Put the original image in `images/`.
2. Name it `<company-or-product>-<surface>-<distinctive-pattern>-<YYYY-MM-DD>.<ext>`.
3. Add one row to the index and a short detail section below it.
4. Record the source URL and capture date when known. If either is unknown, say so.
5. Use concrete retrieval terms such as `login`, `authentication`, `card`, or `SSO`, not only subjective descriptions.

## Index

| ID | Reference | Surface and notable idea | Captured | File |
| --- | --- | --- | --- | --- |
| VR-001 | Cloudflare login | Returning-user sign-in page with grouped social login, SSO, credentials, and account-recovery paths | 2026-07-11 | [View image](images/cloudflare-login-authentication-options-card-2026-07-11.png) |
| VR-002 | Factory AI sign-up | New-account creation page with first and last name, email, and Google sign-up paths in a dark visual treatment | 2026-07-11 | [View image](images/factory-ai-sign-up-account-creation-dark-form-2026-07-11.png) |
| VR-003 | Vercel login | Existing-account login page with email-first access and a broad vertical list of identity-provider options | 2026-07-11 | [View image](images/vercel-login-email-and-identity-provider-options-2026-07-11.png) |
| VR-004 | Vercel sign-up — collapsed options | New-account sign-up card with product-outcome headline, primary identity providers, deferred email path, and Adobe proof point | 2026-07-11 | [View image](images/vercel-sign-up-collapsed-provider-options-adobe-proof-2026-07-11.png) |
| VR-005 | Vercel sign-up — expanded options | New-account sign-up card with additional provider choices exposed and an eBay proof point | 2026-07-11 | [View image](images/vercel-sign-up-expanded-provider-options-ebay-proof-2026-07-11.png) |
| VR-006 | Factory AI authentication entry chooser | Gateway page requiring an explicit choice between login and sign-up before either flow begins | 2026-07-11 | [View image](images/factory-ai-auth-entry-login-or-sign-up-choice-grid-2026-07-11.png) |
| VR-007 | Stripe login | Existing-account sign-in card combining email and password with Google, passkey, and SSO alternatives over a colorful gradient | 2026-07-11 | [View image](images/stripe-login-password-passkey-sso-gradient-card-2026-07-11.png) |
| VR-008 | Stripe sign-up | New-account form presented as a foreground modal over a blurred Stripe dashboard | 2026-07-11 | [View image](images/stripe-sign-up-account-creation-modal-blurred-dashboard-2026-07-11.png) |
| VR-009 | Base44 sign-up | Split-screen account-creation page pairing social and credential sign-up with a soft product-promise visual | 2026-07-11 | [View image](images/base44-sign-up-social-email-cloudflare-turnstile-product-visual-2026-07-11.png) |
| VR-010 | Google account continuation prompt | Contextual consent popup showing a known Google account and offering a one-action `Continue as…` path | 2026-07-11 | [View redacted image](images/google-account-continue-as-consent-prompt-redacted-2026-07-11.png) |
| VR-011 | Notion login | Email-first login with Google, Apple, Microsoft, passkey, and SSO options arranged as compact tiles | 2026-07-11 | [View image](images/notion-login-email-social-passkey-sso-options-2026-07-11.png) |
| VR-012 | Notion sign-up | Work-email account creation with Google and Microsoft alternatives in a sparse centered layout | 2026-07-11 | [View image](images/notion-sign-up-work-email-google-microsoft-options-2026-07-11.png) |
| VR-013 | Historical LitRev 2026 login | Old LitRev login using an email magic link or Google inside a warm, softly blurred visual treatment | 2026-07-11 | [View image](images/litrev-2026-historical-login-magic-link-google-warm-background-2026-07-11.png) |
| VR-014 | Historical LitRev 2026 sign-up | Old LitRev account creation using a magic link or Google with the same branded card treatment | 2026-07-11 | [View image](images/litrev-2026-historical-sign-up-magic-link-google-warm-background-2026-07-11.png) |

## Reference Details

### VR-001 — Cloudflare Login Authentication Options Card

- **Product:** Cloudflare
- **Surface:** Login / sign-in for an existing account
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov liked the overall visual treatment and wants it available as inspiration for future Scient UI exploration.
- **Notable patterns:** a large centered card; clear heading; Google, Apple, and GitHub options grouped in one row; a prominent full-width SSO option; a quiet `or` divider; conventional email and password fields; a single strong primary action; secondary sign-up and recovery links; legal text outside the card; and a small `Last used` cue on the remembered provider.
- **Retrieval terms:** Cloudflare, login, sign in, authentication, auth card, social login, identity providers, Google, Apple, GitHub, SSO, email and password, last used, account recovery, centered form.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-002 — Factory AI Sign-Up Account-Creation Form

- **Company:** Factory AI, the company behind Droid.
- **Surface:** Sign-up / new-account creation
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov wants this Factory AI sign-up treatment available as a distinct reference for future Scient UI exploration.
- **Notable patterns:** a centered Factory wordmark above the form; dark near-black page and card surfaces; a thin, low-contrast card border; first and last name fields paired in one row; a full-width email field; an outlined `Continue` action; an `OR` divider; Google as an alternative sign-up method; a sign-in link for existing users; and restrained purple focus and link accents.
- **Retrieval terms:** Factory AI, Factory, Droid, sign up, signup, account creation, registration, onboarding, dark theme, dark form, first name, last name, email, Google sign-up, existing-account sign-in link, purple accent.
- **Distinction from VR-001:** This is a **sign-up page for creating a new account**. VR-001 is Cloudflare's **login page for signing in to an existing account**.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-003 — Vercel Login With Email And Identity-Provider Options

- **Product:** Vercel
- **Surface:** Login / sign-in for an existing account
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov wants Vercel's login treatment preserved separately from its sign-up flow.
- **Notable patterns:** a highly minimal full-page layout without a surrounding form card; centered narrow content; email as the first path with a strong black action; a divider before alternative methods; separate full-width buttons for Google, GitHub, Apple, SAML SSO, and passkey access; progressive disclosure through `Show other options`; a sign-up link for new users; sparse corner branding and navigation; and low-emphasis legal links at the bottom edge.
- **Retrieval terms:** Vercel, login, log in, sign in, existing account, email login, Google, GitHub, Apple, SAML SSO, passkey, authentication methods, progressive disclosure, minimal auth page.
- **Lifecycle distinction:** This is Vercel's **login page for existing accounts**. VR-004 and VR-005 are Vercel **sign-up pages for creating new accounts**.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-004 — Vercel Sign-Up With Collapsed Provider Options

- **Product:** Vercel
- **Surface:** Sign-up / new-account creation
- **Variant:** Default view with additional provider options collapsed
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov wants Vercel's sign-up treatment preserved distinctly from the Vercel login page and from the expanded sign-up state.
- **Notable patterns:** a centered bordered card; an outcome-led headline connecting registration to a first deployment; full-width Google, GitHub, and Apple choices; `Show other options` progressive disclosure; email registration as a lower-emphasis text link; terms inside the card; a login escape route in the top-right corner; and an Adobe customer proof point below the card.
- **Retrieval terms:** Vercel, sign up, signup, registration, new account, first deploy, product outcome headline, Google, GitHub, Apple, collapsed options, progressive disclosure, continue with email, Adobe, customer proof, centered card.
- **Lifecycle distinction:** This is a **sign-up page for creating a new account**. VR-003 is Vercel's **login page for existing accounts**.
- **State relationship:** VR-005 shows the same sign-up concept with additional provider options exposed.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-005 — Vercel Sign-Up With Expanded Provider Options

- **Product:** Vercel
- **Surface:** Sign-up / new-account creation
- **Variant:** Expanded view with additional identity-provider choices visible
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** This captures the expanded state of Vercel's sign-up treatment, which would be lost if only the default state were retained.
- **Notable patterns:** the same centered sign-up card and outcome-led headline as VR-004; Google, GitHub, and Apple as labeled primary options; two additional compact icon-only provider buttons; email registration as a text link; terms inside the card; a top-right login escape route; and an eBay customer proof point below the card.
- **Retrieval terms:** Vercel, sign up, signup, registration, new account, expanded options, additional identity providers, Google, GitHub, Apple, icon-only provider buttons, continue with email, eBay, customer proof, centered card.
- **Lifecycle distinction:** This is a **sign-up page for creating a new account**. VR-003 is Vercel's **login page for existing accounts**.
- **State relationship:** VR-004 shows the corresponding sign-up view before the additional provider options are exposed.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-006 — Factory AI Authentication Entry Chooser

- **Company:** Factory AI, the company behind Droid.
- **Surface:** Authentication gateway before login or sign-up
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov is unsure whether he likes or wants this pattern, but believes there may be useful lessons in how Factory asks users to choose their account path before showing a form.
- **Preference signal:** Exploratory and uncertain. This is **not** a preferred pattern or proposed Scient direction.
- **Notable patterns:** an explicit login-versus-sign-up decision before either flow begins; two adjacent actions with sign-up visually dominant; centered logo and welcome message; a sparse composition with substantial empty space; and a full-page square grid used as the visual background.
- **Potential questions to revisit:** Does the extra gateway clarify user intent or add an unnecessary step? Is emphasizing sign-up appropriate for the expected user mix? Could the distinction be handled inside one authentication surface while preserving a clear escape route between flows?
- **Retrieval terms:** Factory AI, Factory, Droid, authentication gateway, auth entry, login or sign up, account-path chooser, welcome screen, bifurcated auth flow, explicit choice, grid background, sign-up emphasis.
- **Lifecycle distinction:** This page is neither the login form nor the sign-up form. It routes users to one of those two flows. VR-002 is Factory AI's actual sign-up form.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-007 — Stripe Login With Password, Passkey, And SSO

- **Product:** Stripe
- **Surface:** Login / sign-in for an existing account
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov wants Stripe's login treatment preserved separately from its account-creation flow.
- **Notable patterns:** a large white rounded card over a colorful gradient background; conventional email and password fields; password recovery aligned with the password label; a checked `Remember me on this device` control; a prominent purple primary action; a labeled divider; separate full-width Google, passkey, and SSO alternatives; and a visually contained account-creation prompt at the bottom of the card.
- **Retrieval terms:** Stripe, login, sign in, existing account, email and password, forgot password, remember me, Google login, passkey, SSO, authentication alternatives, purple accent, gradient background, rounded card.
- **Lifecycle distinction:** This is Stripe's **login page for existing accounts**. VR-008 is Stripe's **sign-up page for creating a new account**.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-008 — Stripe Sign-Up Modal Over A Blurred Dashboard

- **Product:** Stripe
- **Surface:** Sign-up / new-account creation
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov wants Stripe's sign-up treatment preserved distinctly from its login page, including the way the product interface remains visible as context behind the form.
- **Notable patterns:** a centered white modal with strong elevation over a blurred and dimmed Stripe dashboard; email, full-name, password, and country fields in one linear form; country selection with flag context; optional marketing consent with supporting privacy text; a purple account-creation action; a divider followed by Google sign-up; and an existing-account sign-in link at the bottom.
- **Retrieval terms:** Stripe, sign up, signup, create account, registration, new account, modal, blurred dashboard, product preview, background context, email, full name, password, country selector, marketing consent, Google sign-up, purple accent.
- **Lifecycle distinction:** This is Stripe's **sign-up page for creating a new account**. VR-007 is Stripe's **login page for existing accounts**.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-009 — Base44 Sign-Up With Product-Promise Visual

- **Product:** Base44
- **Surface:** Sign-up / new-account creation
- **Classification note:** Confirmed by Yaacov as sign-up. The visible UI also says `Create your account` and directs existing users to `Log in`.
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov wants Base44's authentication-page treatment available for later UI comparison and learning.
- **Notable patterns:** a split-screen composition; Base44 branding in the upper-left corner; Google, GitHub, and Apple sign-up options before the email-and-password path; a compact `OR` divider; Cloudflare human verification; an existing-account login link; legal consent at the bottom edge; and a large soft blue product visual on the right built around the promise `Turn your ideas into apps`.
- **Retrieval terms:** Base44, sign up, signup, create account, registration, new account, split screen, social sign-up, Google, GitHub, Apple, email and password, Cloudflare Turnstile, human verification, product-promise visual, turn your ideas into apps, soft blue background.
- **Lifecycle distinction:** This is a **sign-up page for creating a new account**, not a sign-in page. The screenshot does not include Base44's actual login form.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-010 — Google Account `Continue As…` Consent Prompt

- **Provider:** Google
- **Example host product:** Notion
- **Surface:** Contextual account-continuation and consent prompt layered over another page
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded. The stored image redacts Yaacov's name, email address, avatar initial, and personalized button label.
- **Why it was saved:** Yaacov wants to consider whether Scient should eventually support a similarly low-friction Google account continuation prompt.
- **Notable patterns:** the prompt appears in context rather than requiring an immediate full-page authentication transition; it recognizes an available Google account; the primary action is personalized as `Continue as…`; it states which profile information will be shared; it links to the host site's privacy policy and terms; and it provides a prominent close action.
- **Potential value:** It may reduce friction for returning or already-recognized users while keeping the selected identity and data-sharing terms visible before continuation.
- **Risks and questions:** The pattern could feel intrusive if shown too aggressively; dismissal and fallback paths must remain clear; account-selection behavior, browser support, consent requirements, accessibility, privacy, and the exact Google integration would need validation before adoption.
- **Retrieval terms:** Google, Continue as, account continuation, recognized account, contextual login, sign-in prompt, identity prompt, consent popup, federated identity, profile sharing, returning user, low-friction authentication, Notion example, redacted screenshot.
- **Candidate status:** Worth evaluating as an authentication option. It is **not** an accepted Scient requirement, design decision, or implementation commitment.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-011 — Notion Login With Social, Passkey, And SSO Options

- **Product:** Notion
- **Surface:** Login / sign-in for an existing account
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov wants Notion's login treatment preserved separately from its sign-up flow.
- **Notable patterns:** a sparse centered layout without a surrounding card; the Notion mark and `Your AI workspace` product framing above the form; email-first continuation with organization-email guidance; a strong blue primary action; five alternative methods arranged as compact tiles for Google, Apple, Microsoft, passkey, and SSO; a sign-up link for new users; legal links below the form; and a language selector anchored near the bottom of the viewport.
- **Retrieval terms:** Notion, login, log in, sign in, existing account, AI workspace, email first, organization email, Google, Apple, Microsoft, passkey, SSO, identity-provider tiles, language selector, minimal authentication page.
- **Lifecycle distinction:** This is Notion's **login page for existing accounts**. VR-012 is Notion's **sign-up page for creating a new account**.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-012 — Notion Sign-Up With Work Email And Social Options

- **Product:** Notion
- **Surface:** Sign-up / new-account creation
- **Source:** Screenshot supplied by Yaacov; original page URL was not recorded.
- **Why it was saved:** Yaacov wants Notion's sign-up treatment preserved distinctly from its login page.
- **Notable patterns:** the same sparse centered composition, Notion mark, and `Your AI workspace` framing as the login page; work email as the primary registration path; organization-email guidance emphasizing teammate collaboration; a strong blue action; only Google and Microsoft shown as alternative sign-up providers; a login link for existing users; legal links below the form; and a language selector at the bottom.
- **Retrieval terms:** Notion, sign up, signup, create account, registration, new account, AI workspace, work email, organization email, collaboration prompt, Google, Microsoft, identity-provider tiles, language selector, minimal authentication page.
- **Lifecycle distinction:** This is Notion's **sign-up page for creating a new account**. VR-011 is Notion's **login page for existing accounts**.
- **Cross-flow observation:** The login surface exposes Apple, passkey, and SSO in addition to Google and Microsoft, while the sign-up surface displays only Google and Microsoft. This is an observed UI difference, not a Scient recommendation.
- **Status:** Raw visual reference only. No Scient design decision has been made from it.

### VR-013 — Historical LitRev 2026 Login With Magic Link And Google

- **Product:** Old LitRev 2026
- **Surface:** Login / sign-in for an existing account
- **Source type:** Historical internal LitRev reference supplied by Yaacov.
- **Authority boundary:** This is an old product surface. It is not current Scient design, product truth, architecture, or implementation.
- **Why it was saved:** Yaacov wants the old LitRev 2026 authentication work available for comparison alongside external login references.
- **Notable patterns:** the old LitRev symbol, wordmark, and `Literature Review Assistant` descriptor centered above a white card; email-based passwordless login through a secure magic link; Google as the only visible alternative provider; an account-creation link outside the card; warm off-white colors; orange accents; soft shadows; and a blurred abstract background.
- **Retrieval terms:** LitRev 2026, old LitRev, historical LitRev, legacy login, sign in, existing account, passwordless, magic link, Google login, literature review assistant, warm background, orange accent, blurred background, centered card.
- **Lifecycle distinction:** This is the historical **login page for existing accounts**. VR-014 is the matching historical **sign-up page for creating a new account**.
- **Historical status:** Preserve as design history and comparison evidence only. Do not treat it as a baseline to restore or copy without a new design decision.

### VR-014 — Historical LitRev 2026 Sign-Up With Magic Link And Google

- **Product:** Old LitRev 2026
- **Surface:** Sign-up / new-account creation
- **Source type:** Historical internal LitRev reference supplied by Yaacov.
- **Authority boundary:** This is an old product surface. It is not current Scient design, product truth, architecture, or implementation.
- **Why it was saved:** Yaacov wants the old LitRev 2026 account-creation work available for comparison alongside external sign-up references.
- **Notable patterns:** the same centered LitRev branding, white card, warm palette, orange accent, soft shadow, and blurred background as the historical login page; email-based account creation through a magic link; Google as the alternative creation method; and an existing-account sign-in link outside the card.
- **Retrieval terms:** LitRev 2026, old LitRev, historical LitRev, legacy sign-up, create account, registration, new account, passwordless, magic link, Google sign-up, literature review assistant, warm background, orange accent, blurred background, centered card.
- **Lifecycle distinction:** This is the historical **sign-up page for creating a new account**. VR-013 is the matching historical **login page for existing accounts**.
- **Historical status:** Preserve as design history and comparison evidence only. Do not treat it as a baseline to restore or copy without a new design decision.
