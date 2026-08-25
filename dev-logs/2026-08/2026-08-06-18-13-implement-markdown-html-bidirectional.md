Date: 2026-08-06 18:13
Summary: Implemented bidirectional Markdown ↔ HTML on the existing markdown-to-html page with Turndown and ten-locale copy.

[question]
实现工具

[try to solve]
Shipped bidirectional conversion on existing `/tools/markdown-to-html` (no new `html-to-markdown` slug):

- Tabs: `Markdown → HTML` (default, marked + DOMPurify) | `HTML → Markdown` (DOMPurify then Turndown, ATX + fenced)
- SEO modules: How / Rules / Example / Use cases / FAQ×5 / Related / References
- Ten-locale search-intent copy + home cards + README; `related` → `text-diff`, `website-headers`, `ip-address`
- `npm run lint:seo` passed; `npm run build:site` completed
- Work-tasks status set to `implemented` / `i18n-done`

IG covered: ① Rules ② edge FAQ ③ Use cases ④ bidirectional contrast ⑥ privacy/CDN ⑧ Example ⑨ related.

[actions]
- Updated: `src/pages/markdownToHtmlPage.ts`
- Updated: `src/site/tool-catalog.json`
- Updated: `src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Updated: `scripts/site/i18n.mjs`
- Updated: `README.md`
- Updated: `work-tasks/markdown-to-html/02-tool-info.md`, `03-locale-briefs.md`
- Ran: `npm run lint:seo`, `npm run build:site`
