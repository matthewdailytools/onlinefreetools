Date: 2026-08-12 00:02
Summary: Integrate sitemap:ui / ops:ui into start-dev and stop-dev lifecycle scripts.

[question]
将 npm run sitemap:ui / npm run ops:ui 融入到 start-dev.sh和stop-dev.sh 脚本里面

[try to solve]
`start-dev.sh` / `stop-dev.sh` 本身转发到 `.mjs`；已在启停链路默认一并管理 Ops UI（等同 `sitemap:ui` / `ops:ui`）：

- **start**：wrangler 就绪后后台拉起 `ops/seo/sitemap-ui.mjs`（`.run/ops-ui.pid` / `.run/ops-ui.log`）；`--no-ops-ui` 可跳过；站点已在跑时也会补齐 Ops UI。
- **stop**：同时清理 wrangler 与 Ops UI；外站占用端口不误杀、不因此失败。
- **status**：同时报告两侧健康检查。
- 同步更新 `.ps1`、`ops/README.md`。

[actions]
- `ops/lib/dev-process.mjs`
- `ops/dev/start-dev.mjs`, `stop-dev.mjs`, `status-dev.mjs`
- `ops/dev/start-dev.sh`, `stop-dev.sh`, `status-dev.sh`, `start-dev.ps1`, `stop-dev.ps1`
- `ops/README.md`
