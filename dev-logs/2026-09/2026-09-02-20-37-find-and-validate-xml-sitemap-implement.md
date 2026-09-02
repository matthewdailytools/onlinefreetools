Date: 2026-09-02 20:37
Summary: Implemented find-and-validate-xml-sitemap page, ten-locale i18n, README entries; coverage gates 2/4/all and lint:tool-page green (no build:site).
Visibility: people

[question]
Implement FULL tool `find-and-validate-xml-sitemap` mirroring check-robots-txt-url-blocked: Page, ten locales, mark 02/03, README, run coverage gates + merge + lint:tool-page (NO build:site).

[try to solve]
## Context
Work-tasks were already `ready` (0b + intent review). Catalog shard, icon, and Worker API `GET /api/tools/find-and-validate-xml-sitemap` existed. Remaining work: interactive opts page, ten-locale i18n shards, brief status updates, README ZH+EN list entries, and coverage/page wiring gates.

## Process
1. Mirrored `checkRobotsTxtUrlBlockedPage.ts` into `findAndValidateXmlSitemapPage.ts` with PREFIX `tool_find_and_validate_xml_sitemap`.
2. Wired UI: site URL input; Find & validate / Load sample / Clear; fetch API; render findings table (url, httpStatus, kind, locCount, locSamples, validStructure) plus site/primary/candidates summary.
3. `loadSample()` uses `https://www.sitemaps.org/` and auto-runs on page load (template regexes use `\\w` / `\\/` escapes).
4. Wrote ten locale shards under `src/site/i18n/tools/find-and-validate-xml-sitemap/` with H1s from `03-locale-briefs.md`, how_item_1..4, formula rules, FAQ≥3, usecases, sitemaps.org + Google references.
5. Marked `02` → `implemented`; `03` → `i18n-done` with 1b/2b rows naming en,zh,es,ja; updated README ZH+EN; `merge:tools` + coverage gates + `lint:tool-page`.

## Root cause / analysis
Sibling robots checker returns a single allow/block card; this tool returns a multi-candidate findings list, so the result UI is a table plus primary summary rather than a badge+preview. Sample host was switched from brief `example.com` to `sitemaps.org` so auto-run usually hits a real public protocol site.

## Solution
- Page: `src/pages/findAndValidateXmlSitemapPage.ts` (`opts`, IG formula mode, References).
- i18n: ten `{lang}.ts` shards; catalog already pointed at the page export.
- Briefs/README updated; gates all OK without `build:site` (per request).

## Notes / boundaries
- Ship still needs `npm run build:site` (and usually `--require-html`) before production/home cards.
- Edge tool: `localProcessing: false`; privacy copy states Worker fetch, not “no upload”.
- Does not generate sitemaps — related `sitemap-xml-generator` / IndexNow stay separate.

[actions]
- Added `src/pages/findAndValidateXmlSitemapPage.ts`
- Added `src/site/i18n/tools/find-and-validate-xml-sitemap/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Updated `work-tasks/find-and-validate-xml-sitemap/02-tool-info.md`, `03-locale-briefs.md`
- Updated `README.md` ZH+EN tool list; touched catalog `updatedAt`
- Ran `merge:tools`, `coverage:gate` phase 2/4/all, `lint:tool-page`
