Date: 2026-08-06 14:13
Summary: Added cross-platform start/stop/restart scripts for local wrangler dev server.

[question]
创建脚本，常见启动和停止应用的脚本

[try to solve]
新增本地开发启停脚本：

| 命令 / 文件 | 作用 |
|---|---|
| `npm run start:dev` | `build:site` + 后台 `wrangler dev`（默认 8787） |
| `npm run start:dev -- --no-build` | 跳过构建快速启动 |
| `npm run stop:dev` | 按 PID 文件或端口停止 |
| `npm run restart:dev` | 停止后重启 |
| `scripts/start-dev.ps1` / `stop-dev.ps1` | Windows 快捷入口 |
| `scripts/start-dev.sh` / `stop-dev.sh` | macOS/Linux 快捷入口 |

实现：`scripts/lib/dev-process.mjs`（PID/端口/杀进程）、`scripts/start-dev.mjs`、`scripts/stop-dev.mjs`。日志与 PID 在 `.run/`（已加入 `.gitignore`）。

[actions]
- scripts/lib/dev-process.mjs
- scripts/start-dev.mjs, stop-dev.mjs
- scripts/start-dev.ps1, stop-dev.ps1, start-dev.sh, stop-dev.sh
- package.json
- .gitignore
- .cursor/rules/cloudflare-workflow.mdc
