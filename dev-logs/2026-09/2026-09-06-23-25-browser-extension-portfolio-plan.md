Date: 2026-09-06 23:25
Summary: Planned a three-extension portfolio from 206 site tools, with enhancement vs website parity and store/social/SEO traffic lanes.
Visibility: people

[question]
制作一个文件夹，分析本站工具，准备将工具做成浏览器插件，给出本站做浏览器插件的详细方案，需要考虑分几个插件，实现什么功能，那些功能是增强的，如何做浏览器流量搜索流量，如何实现社交流量（已经注册了tiktok，reddits，x.com,youtube），seo流量

[try to solve]
## Context
The site has 206 catalog tools (developer 66, calculator 66, pdf 35, image 35, design 4). The request was a product plan for Chrome/Edge/Firefox extensions, not implementation. Chrome Web Store quality guidelines require a single narrow purpose and explicitly call out “toolbars that provide a broad array of functionality or entry points into services” as a violation, so wrapping the whole catalog in one listing is not viable.

## Process
1. Counted catalog shards: 206 tools, 184 local-processing, 22 remote (URL fetch, AI prompts, DNS, IndexNow, etc.).
2. For each slug, asked three questions: live-tab context, store-search intent, same purpose as an existing listing.
3. Read Chrome’s single-purpose policy and listing ranking notes (title/summary/description relevance plus ratings and install vs uninstall).
4. Mapped every slug into E1 PDF, E2 Image, E3 Page Inspector, later E4/E5, or stay-web; wrote a TSV plus narrative docs under `docs/browser-extensions/`.
5. Separated traffic into Chrome Web Store search, Google queries for “chrome extension”, social (TikTok/YouTube/Reddit/X), and on-site install badges — without hijacking NTP/search (policy) and without 206 extension landing URLs (scaled content).

## Root cause / analysis
Website SEO and store discovery optimize for different queries. Calculators win on Google how-to tails (existing Omni strategy) and have almost no store demand. The website webpage-to-PDF path must fetch public URLs through a Worker and fails on login walls; an extension can print the already-rendered, authenticated tab. That delta is the reason to ship E1 first. Image right-click and on-page SEO of the current DOM are the same class of enhancement for E2/E3.

Shipping one suite or 206 listings both fail: the first on single-purpose and permission surface, the second on store spam and maintenance. Three purpose sentences that do not join unrelated user jobs is the compliance fit.

## Solution
Documented folder `docs/browser-extensions/`:

- README with the decision: 3 listings, calculators stay on the site.
- `01` + `tool-extension-map.tsv`: 12+16 PDF, 10+20 image, 5+7 inspector, 115 stay-web, 21 later.
- `02` portfolio, permissions, fallback split if CWS rejects save-page + merge as two purposes.
- `03` enhancement vs parity (login-page PDF, right-click compress, inspect this tab).
- `04` store search keywords and Google extension-intent pages (`/extensions` + 3 landings only).
- `05` social: demo the enhancement; YouTube first for search; Reddit help-then-disclose; UTM via existing builder.
- `06` SEO: SoftwareApplication, badges only on related tool pages, no doorway copies.
- `07` MV3 architecture and phased roadmap (M1 = save this tab only).

No extension source was added; no catalog/i18n changes.

## Notes / boundaries
- Chrome policy and Google Search Central outrank this folder.
- Do not index empty `/extensions` pages before a real listing exists.
- Do not add calculator or prompt listings.
- If E1 is rejected for mixed purpose, split E1a (save page) and E1b (PDF files) rather than exploding into one listing per verb.

[actions]
- Added `docs/browser-extensions/` (README, 00–07, tool-extension-map.tsv)
- Linked the folder from `docs/seo/README.md`
