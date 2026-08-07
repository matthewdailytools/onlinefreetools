Date: 2026-08-07 17:08
Summary: Move About and Dev Logs from header nav to footer

[question]
将菜单中的关于和开发日志移到foot中

[try to solve]
顶栏已移除「关于」「开发日志」；页脚现为：关于 · 开发日志 · 隐私 · 条款 · 联系（`/devlogs/` 保持根路径无语言前缀）。

涉及：`nav.mjs` / `nav.ts`、`footer.mjs` / `footer.ts`、`info-page.mjs`、`build-site.mjs`（devlogs 顶栏与工具页一致）；已 `npm run build:site`。

[actions]
- `scripts/site/nav.mjs`, `scripts/site/pages/home.mjs`, `scripts/site/pages/info-page.mjs`
- `scripts/site/components/footer.mjs`, `scripts/build-site.mjs`
- `src/pages/site/nav.ts`, `src/pages/site/footer.ts`
- `public/_pages/*/index.html` 等构建产物
