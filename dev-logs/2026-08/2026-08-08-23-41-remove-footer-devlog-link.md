Date: 2026-08-08 23:41
Summary: Removed Dev Logs link from site footer.

[question]
底部删除devlog入口

[try to solve]
已从页脚移除 Dev Logs / 开发日志入口。改动了 `src/pages/site/footer.ts` 与 `scripts/site/components/footer.mjs` 的 `FOOTER_LINKS`，并执行 `npm run build:site` 刷新静态页。页脚现仅保留 About / Privacy / Terms / Contact；`/devlogs/` 路由与页面本身未删除。

[actions]
- Updated `src/pages/site/footer.ts`
- Updated `scripts/site/components/footer.mjs`
- Ran `npm run build:site`
