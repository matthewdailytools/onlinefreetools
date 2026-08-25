Date: 2026-08-09 08:38
Summary: IndexNow sitemap flow now expands <loc> into urlList instead of submitting the sitemap URL itself.

[question]
IndexNow 提交Sitemap逻辑应该是解析 出Sitemap的url list 进行提交，而不是直接提交sitemap

[try to solve]
Aligned with the IndexNow protocol: submit page `urlList` only; do not treat a sitemap address as a changed page.

1. Worker adds `POST /api/tools/indexnow/resolve-urls`: fetch same-host sitemap (including recursive sitemapindex) and expand `<loc>` into a page list.
2. `submit` expands sitemap-shaped URLs before forwarding the POST.
3. Tool page preview/submit calls resolve; pasted sitemap URLs or sitemapindex XML are expanded.
4. CLI keeps recursing into locs that still look like child sitemaps inside a urlset, and defensively strips mistaken sitemap URLs.
5. Ten-locale i18n and ops README now state that pages are submitted after resolve, not the sitemap itself.

CLI dry-run confirmed: `public/sitemap.xml` → page URLs (e.g. `/`, `/zh/`), not `sitemap.xml`.

[actions]
- src/endpoints/indexnow.ts
- src/index.ts
- src/pages/indexNowPage.ts
- src/site/i18n/tools/indexnow/*.ts (+ merge:tools)
- ops/seo/submit-indexnow.mjs
- ops/README.md
