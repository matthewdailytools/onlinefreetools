Date: 2026-08-07 00:35
Summary: Implemented the html-entity tool page with Tier 0 encode/decode, ten-language i18n, and catalog registration.

[question]
实现 html-entity

[try to solve]
已实现 HTML 实体编解码工具，路径 `/tools/html-entity`（十语）。

**功能**
- Encode / Decode 同页 Tab
- 编码：范围（最小 / 仅非 ASCII / 全部）+ 输出形式（命名 / 十进制 / 十六进制）
- 解码：Strict / Lenient；Once / Until stable；纯文本预览（textContent）
- Tier 0 零依赖原生实现；Copy / Sample / Clear；输入 debounce 即时转换

**工程**
- `src/pages/htmlEntityPage.ts`
- `src/site/tool-catalog.json` + `src/index.ts` 注册
- 十语 `src/site/i18n/*.ts` + 首页 `scripts/site/i18n.mjs`
- `README.md` 工具清单
- `npm run build:site`（sitemap 150 URL）与 `npm run lint:seo` 通过

[actions]
- Added `src/pages/htmlEntityPage.ts`
- Updated `src/site/i18n/*.ts`, `src/site/tool-catalog.json`, `src/index.ts`, `scripts/site/i18n.mjs`, `README.md`
- Set `work-tasks/html-entity/02-tool-info.md` status to `implemented`
