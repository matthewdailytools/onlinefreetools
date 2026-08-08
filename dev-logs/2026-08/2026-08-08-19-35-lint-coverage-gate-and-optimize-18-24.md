Date: 2026-08-08 19:35
Summary: Added title/coverage lint gate and rewrote tools 18–24 titles for search habit.

[question]
加这类 lint 门禁，并补跑 18–24 的实质覆盖优化

[try to solve]
1) Lint 门禁：新增 `scripts/lib/title-coverage-heuristics.mjs` + `scripts/validate-tool-title-coverage.mjs`，并入 `npm run lint:seo`。规则：参数枚举 H1 对「已有清单前覆盖专节」工具或强制 slug 列表（18–24）FAIL；旧工具仅 COVER-WARN；有专节的 02 须填满覆盖表、03 须勾选清单前覆盖。规则文档已同步（tool-i18n-localization / tool-i18n-seo / tool-creation）。

2) 实质覆盖：七工具十语 title 改为结果/场景向（去掉 MD5/UTF-8/秒毫秒等目录腔副标题）；回写 02 覆盖表优化摘要与 03 步 2/4 记录；补齐过短 zh description。`lint:seo` exit 0；已 `build:site`。

遗留：约 15 条旧工具 title COVER-WARN（如 image-compress、yaml-json），下次改那些工具时再收。

[actions]
- scripts/lib/title-coverage-heuristics.mjs
- scripts/validate-tool-title-coverage.mjs
- scripts/validate-tool-seo.mjs
- src/site/i18n/tools/{jwt-decoder,file-hash,base64,uuid-generator,password-generator,unix-timestamp,timezone-converter}/*
- work-tasks/{同上}/02–03
- .cursor/rules/tool-i18n-localization.mdc, tool-i18n-seo.mdc, tool-creation.mdc
- npm run merge:tools && npm run lint:seo && npm run build:site
