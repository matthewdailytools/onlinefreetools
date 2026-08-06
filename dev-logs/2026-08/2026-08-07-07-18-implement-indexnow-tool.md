Date: 2026-08-07 07:18
Summary: Implemented IndexNow tool page with Worker check-key/submit APIs and ten-locale copy.

[question]
开始实现 indexnow工具

[try to solve]
已实现 `/tools/indexnow`：生成 key、下载 `{key}.txt`、Worker `GET /api/tools/indexnow/check-key` 与 `POST /api/tools/indexnow/submit`（限流、host 校验、最多 500 URL）、状态码表、Rules/Example/FAQ、Related（website-headers、add-www-to-dns）。十语 i18n + 首页短文案 + README + catalog；`build:site` 170 URLs；`lint:seo` OK。`work-tasks/indexnow/02` → `implemented`；`03` 为 `pending-native-review`（ar/ja/ru）。

[actions]
- added: `src/pages/indexNowPage.ts`, `src/endpoints/indexnow.ts`
- modified: `src/index.ts`, `src/site/tool-catalog.json`, `src/site/i18n/*.ts`, `scripts/site/i18n.mjs`, `README.md`, `work-tasks/indexnow/*`, sitemap/home via `build:site`
