Date: 2026-08-09 20:43
Summary: Fixed robots-txt-generator template-string escape crashes and added a sitemap-xml-generator download button; scanned and fixed the same class of bugs on eight pages.

[question]
http://localhost:8788/zh/tools/sitemap-xml-generator 提供下载；http://localhost:8788/zh/tools/robots-txt-generator 不可用，点击按钮没有反应；http://localhost:8788/zh/tools/robots-txt-generator 有错误；

[try to solve]
Root cause: tool-page TS `extraBodyHtml` is a template string. Single-backslash escapes (e.g. `\r?\n`, `'\n'`, regex `\d`/`\s`/`\.`) are evaluated by JS into real control characters or dropped backslashes, so the emitted inline script gets regex literals with line terminators, broken strings, and bad character classes — SyntaxError crashes the whole IIFE and kills event binding → Generate does nothing.

robots-txt-generator fix:
- `split(/\r?\n/)` → `split(/\\r?\\n/)`; `join('\n')` → `join('\\n')`; `join('\n\n')` → `join('\\n\\n')`.

Full scan of `src/pages/*.ts` template strings fixed the same hazard on eight pages:
- howToCalculateGpaPage.ts: `split(/\r?\n/)`, `split(/[,;\s，、]+/)`, sample `'4.0, 3\n3.0, 3'`.
- schemaJsonldGeneratorPage.ts: JSON-LD wrappers `'<script ...>\n'` and `'\n<\/script>'`.
- howToCalculatePValuePage.ts: missing closing paren on erfc chain (output JS syntax error).
- howToCalculateScientificNotationPage.ts / howToCalculateSignificantFiguresPage.ts: scientific-notation regex `\d`/`\.`/`\s`/`\*`/`\^` single backslashes.
- brandStyleGuidePage.ts: `/(\d+)/` primary-color share parse.
- smartWebsiteColorSchemePage.ts: `rgba()` parse regex `\(`/`\s`/`\d`/`\)`.

sitemap-xml-generator download: new `tool_sitemap_download` key (10 locales, independent translations) + output “Download” button (Blob → `a.download=sitemap.xml`).

Verification: template-escape scan 0 hazards; all 119 tool-page inline scripts passed `new Function` syntax check; DOM mock verified robots Generate grouping and sitemap Download → sitemap.xml; build:site and lint:seo green.

[actions]
- src/pages/robotsTxtGeneratorPage.ts (three escapes)
- src/pages/howToCalculateGpaPage.ts (two escapes)
- src/pages/schemaJsonldGeneratorPage.ts (JSON wrapper newlines)
- src/pages/howToCalculatePValuePage.ts (one closing paren)
- src/pages/howToCalculateScientificNotationPage.ts (sci-notation regex escapes)
- src/pages/howToCalculateSignificantFiguresPage.ts (sig-fig regex escapes)
- src/pages/brandStyleGuidePage.ts (primary-color ratio regex)
- src/pages/smartWebsiteColorSchemePage.ts (rgba parse regex)
- src/pages/sitemapXmlGeneratorPage.ts (download button + JS)
- src/site/i18n/tools/sitemap-xml-generator/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts (tool_sitemap_download)
- Commands: npm run merge:tools, npm run build:site, npm run lint:seo
