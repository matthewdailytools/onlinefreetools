Date: 2026-08-12 23:37
Summary: Fix Ops UI handbook dropdown not refreshing; restart UI so Worker+R2 doc appears.

[question]
ops ui的页面运维手册上没有刷新到上述运维手册

[try to solve]
原因：1) Ops UI 进程未重启，白名单仍是旧 HANDBOOK_DOCS；2) 前端仅在 `select.options.length===0` 时填充下拉，刷新正文也不更新文档列表。
修复：`sitemap-ui.html` 每次 `loadHandbook` 用服务端 `docs` 同步下拉；手册内相对 `.md` 链接可切换文档；已重启 Ops UI（8791）。下拉应含「Worker + R2 运维」；默认 README 正文已含 `verify:r2` / `npm run deploy`。

[actions]
- ops/seo/sitemap-ui.html（syncHandbookSelect + md 链切换）
- 重启本地 Ops UI :8791
