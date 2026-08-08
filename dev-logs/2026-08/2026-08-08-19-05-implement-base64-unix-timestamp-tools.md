Date: 2026-08-08 19:05
Summary: Implemented base64 and unix-timestamp developer tools with full i18n shards.

[question]
Implement TWO developer tools for /Users/xuli/vscodeai/onlinefreetools. Follow src/pages/htmlEntityPage.ts pattern. Full Chinese comments on functions/key vars. Read work-tasks/{slug}/02-tool-info.md and 03-locale-briefs.md for each.

## 1. base64 (slug: base64)
Create catalog, icon, page, i18n (10 langs). UI: Encode/Decode tabs; UTF-8; Base64url; file input; Convert/Copy/Sample/Clear; loadSample on init. FAQ ≥5. References: RFC 4648.

## 2. unix-timestamp (slug: unix-timestamp)
Create catalog, icon, page, i18n (10 langs). UI: Bidirectional timestamp↔datetime; seconds/milliseconds; UTC + local; Now; Load sample; auto-run on init. FAQ ≥4.

For BOTH: mark work-tasks 02 as implemented; update 03 multi-round; add README zh+en list entries. Do NOT run merge:tools.

[try to solve]
已完成两个开发者工具的全部分片实现（未运行 merge:tools）：

**base64**
- `src/site/tool-catalog.d/base64.json` — developer / featured / related: image-to-base64, jwt-decoder, html-entity
- `src/pages/base64Page.ts` — Encode/Decode Tab、UTF-8 TextEncoder/btoa、Base64url 选项、文件字节编码、软上限警告、进页 loadSample 自动转换
- `public/icons/tools/base64.svg`
- `src/site/i18n/tools/base64/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts` — 5 条 FAQ、RFC 4648 References

**unix-timestamp**
- `src/site/tool-catalog.d/unix-timestamp.json` — related: timezone-converter, jwt-decoder
- `src/pages/unixTimestampPage.ts` — 双向 Tab、秒/毫秒切换与自动识别、UTC+local 并排、Now、BigInt 范围校验、进页样例 1516239022 自动转换
- `public/icons/tools/unix-timestamp.svg`
- `src/site/i18n/tools/unix-timestamp/{10 langs}.ts` — 4 条 FAQ、Wikipedia/MDN References

**文档**
- `work-tasks/*/02-tool-info.md` → `implemented`
- `work-tasks/*/03-locale-briefs.md` → 多轮记录与 `i18n-done`
- `README.md` 中英工具清单各增一条

上线前需运行 `npm run merge:tools && npm run lint:seo`。

[actions]
- src/site/tool-catalog.d/base64.json, unix-timestamp.json
- src/pages/base64Page.ts, unixTimestampPage.ts
- public/icons/tools/base64.svg, unix-timestamp.svg
- src/site/i18n/tools/base64/* (10), unix-timestamp/* (10)
- work-tasks/base64/02-tool-info.md, 03-locale-briefs.md
- work-tasks/unix-timestamp/02-tool-info.md, 03-locale-briefs.md
- README.md
