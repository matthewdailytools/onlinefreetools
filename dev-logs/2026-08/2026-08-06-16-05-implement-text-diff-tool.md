Date: 2026-08-06 16:05
Summary: Implemented text-diff tool page with 10-lang i18n, catalog, and local jsdiff UI.

[question]
按该定稿开始实现页面

[try to solve]
已按 `work-tasks/text-diff/02-tool-info.md` 实现文本 Diff 对比器：

- 页面：`src/pages/textDiffPage.ts`（双栏粘贴、行/词/字符、忽略空白、CRLF→LF、交换/清空、本地高亮；How / Rules / Example / Use cases / References）
- 注册：`tool-catalog.json` + `src/index.ts`；Related 互链 markdown / headers
- i18n：10 语 title/description/article/example/FAQ/UI；首页 `scripts/site/i18n.mjs` 卡片
- 校验：`npm run lint:seo` OK；`npm run build:site`（sitemap 120 URLs）
- 工作任务状态改为 `implemented`

访问路径：`/tools/text-diff`（及各语言前缀）。

IG 落点：① Rules ② FAQ 边界 ③ Use cases ⑥ 本地隐私 FAQ ⑧ Example ⑨ Related。

[actions]
- src/pages/textDiffPage.ts
- src/index.ts
- src/site/tool-catalog.json
- src/site/i18n/*.ts
- scripts/site/i18n.mjs
- work-tasks/text-diff/02-tool-info.md
- public/_pages/*/index.html, public/sitemap.xml (via build:site)
