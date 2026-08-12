Date: 2026-08-12 23:29
Summary: Align ops docs with deploy+verify:r2 flow (README, worker-r2-ops, keyword-to-tool, SEO checklist, Ops UI handbook).

[question]
ops对应修改

[try to solve]
同步运维文档与当前 `npm run deploy`（upload → verify → deploy → live）：
- `ops/README.md`：命令表、发版最低要求、工具 404 / verify 失败 / 部署失败排查
- `ops/worker-r2-ops.md`：CI 表述、抽检含 `/api/ops/pages-build`、本地 verify、新工具/回滚清单
- `ops/seo/keyword-to-tool-ops.md`：build 拍板后上线走 deploy
- `docs/SEO_PUBLISH_CHECKLIST.md`：增加 R2/版本对齐项
- `ops/seo/sitemap-ui.mjs`：Ops UI 手册白名单加入 worker-r2-ops

[actions]
- ops/README.md、ops/worker-r2-ops.md、ops/seo/keyword-to-tool-ops.md、ops/seo/sitemap-ui.mjs
- docs/SEO_PUBLISH_CHECKLIST.md
