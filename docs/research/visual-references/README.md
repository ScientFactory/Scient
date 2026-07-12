# Visual References

Status: Active
Owner: Yaacov
Last updated: 2026-07-11
Purpose: Maps external and historical internal UI screenshots into retrieval-friendly categories for later product-design research.
Doc type: Repo orientation

Visual references are grouped by the product surface or interaction they illustrate. Each category owns its own index, descriptive filenames, source context, observations, and retrieval terms. Historical LitRev material must be labeled clearly so it cannot be mistaken for current product direction.

These references are research evidence. They are not accepted LitRev design direction and do not imply permission to copy another product.

## Categories

| Category | Contents | Index |
| --- | --- | --- |
| Authentication | Login, sign-up, account-entry routing, identity-provider, consent, and account-continuation patterns | [Browse authentication references](authentication/README.md) |

Future references about unrelated surfaces should receive their own descriptive category rather than being added to `authentication/`.

## Adding A Reference

1. Choose the category that matches the illustrated surface or interaction. Create a category only when no existing category fits.
2. Put the image in that category's `images/` folder.
3. Use the filename pattern documented in the category index.
4. Add a stable, library-wide reference ID and enough context to distinguish similar screenshots.
5. Record uncertainty, preference, and decision status explicitly. Inspiration is not product doctrine.
6. Remove or redact personal, credential, medical, financial, or other sensitive information before storing an image in the repo.
