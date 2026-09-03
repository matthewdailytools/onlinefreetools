Date: 2026-09-03 22:10
Summary: Optimized Indonesian organize-pdf title/meta for Bing CTR queries and added per-slug OG image signals for SERP thumbnails.
Visibility: people

[question]
Optimize https://onlinefreetools.org/id/tools/organize-pdf for Indonesian searches (urutkan dan hapus pdf, urut halaman pdf, cara ubah urutan pdf) with no clicks, and add a search-engine-friendly image for Bing SERP display.

[try to solve]
## Context
GSC/Bing showed impressions for Indonesian reorder/delete PDF queries on `/id/tools/organize-pdf` but near-zero CTR. The page H1 used generic “Atur PDF” wording that did not mirror how users search. All tool pages shared the same generic `og-image.png`, which Google/Bing treat as a weak preferred-image signal.

## Process
1. Mapped user queries to visible copy slots (H1, description, FAQ, How) per `tool-i18n-localization.mdc` absorb rules—no keyword list module.
2. Rewrote `src/site/i18n/tools/organize-pdf/id.ts`:
   - **H1/title**: `Urut Halaman PDF — Urutkan, Hapus & Ubah Urutan di Browser`
   - **Description**: leads with “urutkan dan hapus”, includes “cara ubah urutan” steps
   - **FAQ q3/q5**: question phrasing aligned to “cara ubah urutan halaman PDF” and “hapus halaman saat mengurutkan”
3. Implemented minimal SERP image pipeline (pilot on this slug):
   - `src/pages/site/ogImage.ts` → `resolveToolOgImageUrl(slug)` reads `public/og/tools/{slug}.webp`
   - Captured live UI screenshot of `/tools/organize-pdf` (Playwright CLI), cropped to **1280×720**, saved as `public/og/tools/organize-pdf.webp`
   - `organizePdfPage.ts`: `og:image`, visible `<figure>` preview, JSON-LD `WebPage.primaryImageOfPage` + `WebApplication.image`
   - `layout.ts`: added matching `twitter:image`
4. Ran `tool:touch`, `merge:tools`, `build:site`; verified prerendered `/id/tools/organize-pdf` head tags.

## Root cause / analysis
- **CTR**: Title/H1 emphasized “Atur PDF” (organize) while queries used **urut/urutkan** (sort) and **cara ubah urutan** (how to change order). Snippet mismatch → impressions without clicks.
- **Images**: Shared site OG card is valid but not page-representative; Bing/Google prefer ≥1200px tool UI images with consistent og + schema + visible `<img>` (see `docs/seo/2026-08-12/serp-image-thumbnail-plan.md`).

## Solution
| Query cluster | Visible landing |
|---|---|
| urut halaman pdf / urutkan dan hapus pdf | H1 + description opening |
| cara ubah urutan pdf | description steps + FAQ q3 |
| hapus halaman (while reordering) | FAQ q5 + use case 1 |

OG URL (all locales): `https://onlinefreetools.org/og/tools/organize-pdf.webp`

## Notes / boundaries
- Image is **English UI screenshot** (ten locales share one OG asset per SERP plan).
- `lint:tool-isolation` flags shared files (`ogImage.ts`, `layout.ts`, `toolContent.ts`); intentional pilot—set `CROSS_TOOL_UPDATE=1` if enforcing isolation in CI.
- SERP thumbnail display is **not guaranteed**; title/snippet alignment remains the primary CTR lever.
- Deploy required for production `/id/tools/organize-pdf` to serve new meta and image.

[actions]
- Updated `src/site/i18n/tools/organize-pdf/id.ts`, `organizePdfPage.ts`, `ogImage.ts`, `toolContent.ts`, `layout.ts`, `work-tasks/organize-pdf/03-locale-briefs.md`, `public/og/tools/organize-pdf.webp`, catalog `updatedAt`
