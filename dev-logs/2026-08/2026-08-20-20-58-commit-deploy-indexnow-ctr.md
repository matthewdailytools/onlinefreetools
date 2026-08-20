Date: 2026-08-20 20:58
Summary: Committed CTR meta, deployed R2, pushed main, IndexNow 40 URLs OK; live ru image-merge title verified.

[question]
需要

[try to solve]
已完成 commit + 部署 + IndexNow：

- Commit `325abf29`：seo front-load CTR meta（四工具 + 生成物 + 首页/sitemap + 开发日志）
- `npm run deploy`：R2 增量上传 490 对象，verify:r2 OK（PAGES_CACHE_VERSION=4.1）
- `git push` main → origin
- IndexNow：`--tool image-merge,schema-jsonld-generator,how-to-calculate-volume,how-to-calculate-npv --require-live-key` → 40 URL，HTTP 200
- 线上抽查：`/ru/tools/image-merge` title 已是「Склеить фото онлайн — …」
- 跟进 commit `9f2fbd3b`：03-todo 勾选部署/IndexNow

[actions]
- git commit 325abf29 / 9f2fbd3b；git push origin main
- npm run deploy（R2 upload 490）
- npm run indexnow -- --tool … --require-live-key（40 URLs HTTP 200）
- docs/seo/reviews/2026-08-12/03-todo.md
