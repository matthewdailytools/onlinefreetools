Date: 2026-08-14 21:13
Summary: Clarify whether start:dev with a custom port follows updatedAt incrementality.

[question]
npm run start:dev -- --port 8788 符合这个逻辑么

[try to solve]
`npm run start:dev -- --port 8788` 符合新的 `updatedAt` 构建逻辑，前提是该端口上的 dev server 还没有健康运行。`--port 8788` 只改变 Wrangler 监听端口；脚本仍会先执行 `npm run build:site`，而 `build:site` 默认按工具 catalog shard 的 `updatedAt` 与 `.cache/tool-build-state.json` 的 `toolGeneratedAt` 做增量预渲染。随后脚本会执行 `npm run upload:r2:local` 灌本地 R2 模拟桶，再启动 Wrangler。注意：如果 8788 上已有健康 dev server，脚本会直接复用并跳过 build/seed；如果加 `--no-build`，也会绕过这个增量构建流程。

[actions]
- Checked `ops/dev/start-dev.mjs` and package scripts.
