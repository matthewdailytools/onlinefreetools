Date: 2026-08-06 16:05
Summary: Implemented the text-diff tool page with 10-locale i18n, catalog entry, and local jsdiff UI.

[question]
按该定稿开始实现页面

[try to solve]
Implemented the text Diff comparer per `work-tasks/text-diff/02-tool-info.md`:

- Page: `src/pages/textDiffPage.ts` (dual paste panes; line/word/char; ignore whitespace; CRLF→LF; swap/clear; local highlight; How / Rules / Example / Use cases / References)
- Registration: `tool-catalog.json` + `src/index.ts`; Related cross-links to markdown / headers
- i18n: 10-locale title/description/article/example/FAQ/UI; home card in `scripts/site/i18n.mjs`
- Checks noted in source: `npm run lint:seo` OK; `npm run build:site` (sitemap 120 URLs)
- Work-task status set to `implemented`

URL: `/tools/text-diff` (and language prefixes).

IG placement: ① Rules ② FAQ boundaries ③ Use cases ⑥ local-privacy FAQ ⑧ Example ⑨ Related.

[actions]
- `src/pages/textDiffPage.ts`
- `src/index.ts`
- `src/site/tool-catalog.json`
- `src/site/i18n/*.ts`
- `scripts/site/i18n.mjs`
- `work-tasks/text-diff/02-tool-info.md`
- `public/_pages/*/index.html`, `public/sitemap.xml` (via `build:site`)
