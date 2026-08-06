Date: 2026-08-06 18:13
Summary: Implemented bidirectional Markdown ↔ HTML on existing markdown-to-html page with Turndown and ten-locale copy.

[question]
实现工具

[try to solve]
已在现有 `/tools/markdown-to-html` 落地双向转换（不新建 `html-to-markdown`）：

- Tab：`Markdown → HTML`（默认，marked + DOMPurify）| `HTML → Markdown`（DOMPurify 后 Turndown，ATX + fenced）
- SEO 模块：How / Rules / Example / Use cases / FAQ×5 / Related / References
- 十语检索向文案 + 首页卡片 + README；`related` → `text-diff`, `website-headers`, `ip-address`
- `npm run lint:seo` 通过；`npm run build:site` 完成
- 立项文档状态改为 `implemented` / `i18n-done`

IG：① Rules ② 边界 FAQ ③ Use cases ④ 双向对照 ⑥ 隐私/CDN ⑧ Example ⑨ related。

[actions]
- Updated: `src/pages/markdownToHtmlPage.ts`
- Updated: `src/site/tool-catalog.json`
- Updated: `src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Updated: `scripts/site/i18n.mjs`
- Updated: `README.md`
- Updated: `work-tasks/markdown-to-html/02-tool-info.md`, `03-locale-briefs.md`
- Ran: `npm run lint:seo`, `npm run build:site`
