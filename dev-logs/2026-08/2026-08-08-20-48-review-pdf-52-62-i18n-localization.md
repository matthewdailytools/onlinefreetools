Date: 2026-08-08 20:48
Summary: Re-reviewed ten-locale copy for PDF tools #52–62; fixed vague “local” titles and library jargon in user-facing strings.

[question]
重新review本地化的个语言描述实现

[try to solve]
对照 `tool-i18n-localization.mdc` 复审清单 #52–62 十语文案。

**结论（修前）**
1. Title 主词与结果向整体合格；十语非纯英壳。
2. 首页 `_desc` 多数已含「设备 + 不上服务器」。
3. 问题：`pdf-watermark` / `pdf-to-markdown` 多语 title 用 Locally / en local / 在本地 / lokal 等含糊说法；用户可见 How/FAQ/Rules/article 大量出现 `pdf-lib` / `fflate` / `copyPages` / `PDF.js`；部分 How 仍写 “runs locally” 未说清不上服务器。

**已修**
- watermark / markdown 各语 title 改为 browser/设备向。
- 十一工具十语用户文案去掉实现库名（键名 `err_fflate` 等保留）；How/Rules 补设备/标签页 + 不上服务器。
- 中文破损句（「在浏览器里在浏览器里」等）已修；`merge:tools` / `lint:seo` / 抽查 coverage:gate 通过。

[actions]
- 改 `src/site/i18n/tools/{11 slugs}/*.ts`；`npm run merge:tools`
- 更新部分 `work-tasks/*/03-locale-briefs.md` 3b 行
