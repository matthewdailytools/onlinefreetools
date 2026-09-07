Date: 2026-09-07 13:20
Summary: Differentiated the Chinese (and ten-locale) batch webpage-to-PDF vs webpage-to-JPG pages so each has independent information gain: A4 pagination/print archive versus viewport JPEG screenshots.
Visibility: people

[question]
https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-jpg 和 https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf, 页面内容过于相似，info gain不足

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-jpg
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-jpg
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf

[try to solve]
## Context
The two tools share a URL-list fetch pipeline (proxy once, skip failures, ZIP). After launch, the visible How / Rules / FAQ / lead still started from the same “paste URLs → Convert all → ZIP / fetched once, not stored” skeleton. Removing the H1 left two pages that read as format-suffix variants, which is a doorway / scaled-content risk under Google’s helpful-content and spam policies (information gain is a people-first content principle, not a claimed ranking switch).

The actual products already differed: PDF uses html2pdf with A4 portrait and CSS page-break; JPG uses html2canvas with viewport 1280/768/390, JPEG quality, and full page vs first screen.

## Process
1. Compared zh/en shards, catalog related, and Page sample HTML. JPG already named viewport/quality; PDF barely mentioned A4 and never FAQ-compared the JPG sibling.
2. Rewrote IG-bearing copy in all ten locales independently (not an English calque): PDF lead/meta/How/Rules/FAQ/Use cases now open on printable A4 pagination; JPG opens on screenshot width, chat/ticket rasters, and first-screen review.
3. PDF FAQ question order starts with the JPG contrast (or paper size, depending on locale) instead of the shared upload FAQ. Added a sixth FAQ on A4 vs one tall page.
4. PDF catalog `related` now includes `batch-convert-web-pages-to-jpg`. PDF hero uses the short `desc` (same pattern as JPG) so the first screen is not a cloned meta paragraph.
5. Sample pages no longer share the same Georgia help/policy HTML: PDF samples use `@page` A4 plus `page-break-after`; JPG samples use a system-ui ticket header that turns blue at max-width 500px. JPG sample URLs are ticket/mobile-hero; PDF keeps help/policy.
6. Raised PDF `howItemCount` to 6 and `ruleItemCount` to 5 so the merge-neighbor How step and the JPG/HTML/combine Rules contrast actually render.
7. Ran `coverage:gate --phase=all` on both slugs, `merge:tools`, full `build-site`, HTML smoke, `lint:seo` (OK), isolation with `CROSS_TOOL_UPDATE=1`.

## Root cause / analysis
Shared input (URL list + ZIP) is real, but that is not enough unique copy. The missing IG was the **artifact contract**:

- PDF: A4 portrait, CSS page breaks, print CSS can move cuts, archive/read/print, then Combine files if you want one booklet.
- JPG: chosen viewport layout, JPEG quality, full-page vs first-screen raster for chat and QA.

Without those sentences in How/Rules/FAQ, crawlers and people only see “batch convert web pages to {format}”. That fails the “strip the title, is the body still different?” test in `tool-i18n-seo.mdc`.

Honest boundary: html2pdf still captures via canvas then slices onto A4. Copy does **not** claim selectable text; it claims pagination and print-oriented pages.

## Solution
After this pass, stripping H1 still leaves two jobs:

- PDF zh lead: “把网址列表存成可打印的 A4 纵向 PDF…不是网页长图.” FAQ 1 vs JPG; Rules name CSS page-break; related includes the JPG tool.
- JPG zh lead: “按桌面/平板/手机视口把网址列表截成 JPEG…不是 A4 PDF.” Example uses ticket + mobile-hero samples; Advanced still documents viewport/quality/first screen.

Ten locales keep local H1s and different FAQ order so they are not isomorphic translations of one English block.

## Notes / boundaries
- Isolation for a single slug needs `CROSS_TOOL_UPDATE=1` because both tools were edited in one pass.
- JPG still does not auto-run `loadSample()` (html2canvas can freeze the tab); PDF same exception.
- Production Chinese URLs will show this after the next Pages deploy; local prerender already contains the new How sixth step and related JPG link.

[actions]
- Rewrote `src/site/i18n/tools/batch-convert-web-pages-to-pdf/{10 langs}.ts` and strengthened JPG IG keys
- PDF Page: short `desc` hero, A4 sample HTML, `howItemCount` 6 / `ruleItemCount` 5
- JPG Page: ticket/mobile-hero sample URLs and responsive sample HTML
- Catalog PDF `related` + `work-tasks` 02/03 coverage rows
- `coverage:gate` both slugs; `build:site`; `lint:seo` OK
