Date: 2026-08-08 22:24
Summary: Clarified that ~/.cf-turnstile-token is optional for day-to-day; .dev.vars secret is what local lookup needs.

[question]
本地的apitoken是否还需要

[try to solve]
日常跑站 / domain-lookup **不需要** `~/.cf-turnstile-token`（那是 Cloudflare 管理 API：建 widget、部署 siteverify Worker、改 secret）。运行时靠公开 sitekey + Worker/` .dev.vars` 里的 `TURNSTILE_SECRET_KEY`。本地 `wrangler dev` 仍建议保留 `.dev.vars` 中的 secret；生产已用 `wrangler secret put`。若近期不再做仪表盘级操作，可删掉 token 文件；需要时再按 Spin 流程重建。

[actions]
- 无代码改动
