Date: 2026-08-07 07:18
Summary: Implemented the IndexNow tool page with Worker check-key/submit APIs and ten-locale copy.

[question]
开始实现 indexnow工具

[try to solve]
Shipped `/tools/indexnow`: generate a key, download `{key}.txt`, Worker `GET /api/tools/indexnow/check-key` and `POST /api/tools/indexnow/submit` (rate limit, host checks, max 500 URLs), status-code table, Rules/Example/FAQ, Related (website-headers, add-www-to-dns). Ten-locale i18n + home short copy + README + catalog; `build:site` 170 URLs; `lint:seo` OK. `work-tasks/indexnow/02` → `implemented`; `03` is `pending-native-review` (ar/ja/ru).

[actions]
- added: `src/pages/indexNowPage.ts`, `src/endpoints/indexnow.ts`
- modified: `src/index.ts`, `src/site/tool-catalog.json`, `src/site/i18n/*.ts`, `scripts/site/i18n.mjs`, `README.md`, `work-tasks/indexnow/*`, sitemap/home via `build:site`
