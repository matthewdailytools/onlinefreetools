Date: 2026-08-08 20:20
Summary: Implemented full pdf-page-numbers tool (#57) with pdf-lib, 10-locale i18n, and all quality gates green.

[question]
Implement full `pdf-page-numbers` in /Users/xuli/vscodeai/onlinefreetools.

## Spec
- slug: pdf-page-numbers, category: pdf, #57
- work-tasks ready. Title: "Add Page Numbers to PDF — In Your Browser"
- Tech: pdf-lib CDN. drawText page numbers on every page. Controls: position (bottom-center default, four corners + bottom/top center), start-at number (default 1), margin pt (default 24), font size (default 12). Format: just the number (or optional "Page N" if easy).
- related: ["pdf-watermark","organize-pdf"]
- After shipping, also update pdf-watermark related to include pdf-page-numbers if still pointing only to rotate-pdf
- loadSample(): 3-page sample → bottom-center numbers from 1 → numbered.pdf downloadable
- Privacy, 25MB, encrypted errors

## Create catalog, icon, pdfPageNumbersPage.ts, 10 i18n (full independent keys).

## Update 02/03 with 1b+2b (en,zh,es,ja), inventory #57, README

## Gates until green:
npm run merge:tools && npm run coverage:gate -- --slug=pdf-page-numbers --phase=all && npm run build:site && npm run lint:seo && CROSS_TOOL_UPDATE=1 TOOL_SLUG=pdf-page-numbers npm run lint:tool-isolation

No plan/commit. 中文 brief. Chinese comments.

[try to solve]
已完成 `pdf-page-numbers`（清单 #57）全量实现，所有门禁通过。

**功能**
- `src/pages/pdfPageNumbersPage.ts`：pdf-lib CDN，每页 `drawText` 页码
- 控件：位置（底中默认 + 四角 + 顶/底居中）、起始页码（默认 1）、边距 pt（默认 24）、字号（默认 12）、格式（纯数字 / Page N）
- `loadSample()`：3 页样例 → 底中从 1 编号 → 可下载 `numbered.pdf`
- 25 MB 软警告、加密/损坏可读错误、隐私 FAQ

**交付物**
- `src/site/tool-catalog.d/pdf-page-numbers.json` + `public/icons/tools/pdf-page-numbers.svg`
- 十语 i18n：`src/site/i18n/tools/pdf-page-numbers/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- `pdf-watermark` related 更新为 `["add-watermark","pdf-page-numbers"]`
- `work-tasks/pdf-page-numbers/02` → implemented；`03` 补 1b/2b 行
- `docs/2026-08-08-tool-inventory-table.md` #57 → 已上线
- `README.md` 中英各增一条

**门禁（全部绿）**
- `coverage:gate --phase=all`
- `build:site`（52 tools，sitemap 570 URLs）
- `lint:seo`
- `CROSS_TOOL_UPDATE=1 lint:tool-isolation`

[actions]
- src/site/tool-catalog.d/pdf-page-numbers.json, pdf-watermark.json
- src/pages/pdfPageNumbersPage.ts
- public/icons/tools/pdf-page-numbers.svg
- src/site/i18n/tools/pdf-page-numbers/*.ts (10 locales)
- work-tasks/pdf-page-numbers/02-tool-info.md, 03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md, README.md
