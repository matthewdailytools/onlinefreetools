Date: 2026-08-03 20:59
Summary: Serve Google HTML verification file at exact URL with 200 and no redirect

[question]
google2cb457f0956f79d9.html 这个页面放在public下面，需要可以直接访问http://Onlinefreetools.org/google2cb457f0956f79d9.html,不能跳转，以满足谷歌验证的要求

[try to solve]
线上 `/google….html` 被 Cloudflare Workers Assets 默认 `html_handling` 307 到 `/google…`（无扩展名）。本地 `wrangler dev` 下通过 Worker 显式路由 + `html_handling: "none"` 可对精确 `.html` 返回 200；多次部署后生产仍 307（Assets 配置变更似乎未按预期落到该域名的静态命中路径）。首页已注入 meta 验证标签可作为备用。

[actions]
- 更新：`wrangler.jsonc`（`run_worker_first: ["/google2cb457f0956f79d9.html"]`，`html_handling: "none"`）
- 更新：`src/index.ts`（验证路径 200 直出；跳过语言协商；`/devlogs/` 索引）
- 保留：`public/google2cb457f0956f79d9.html` 与 `verification/` 备份
- 本日志：`dev-logs/2026-08-03-20-59-google-html-verification-no-redirect.md`
