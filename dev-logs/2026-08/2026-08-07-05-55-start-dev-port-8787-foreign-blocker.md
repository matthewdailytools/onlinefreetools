Date: 2026-08-07 05:55
Summary: start-dev timeout was caused by port 8787 held by another project's wrangler; scripts now detect foreign blockers and suggest --port.

[question]
start-dev still fails: "Dev server failed to become ready within timeout" after ENOENT fix.

[try to solve]
根因不是本项目 wrangler 启动慢，而是 **8787 已被其他项目占用**（日志：`Address already in use`）。本机 listener 来自 `seoontest/funnyT/apps/api` 的 workerd，不是 onlinefreetools。

**立即可用**
```bash
npm run start:dev -- --port 8788
```
然后访问 http://127.0.0.1:8788/tools/html-entity

或停掉另一个项目的 wrangler，再在本项目用默认 8787。

**脚本改进**（`ops/lib/dev-process.mjs`、`ops/dev/start-dev.mjs`）
- 启动前检测端口；若为**其他项目**进程占用，打印其命令行并提示 `--port 8788`，不再等满 90s
- 仅清理**本仓库** wrangler/workerd，避免误杀其他项目
- 日志含 `Address already in use` 时快速失败

[actions]
- Updated `ops/lib/dev-process.mjs`, `ops/dev/start-dev.mjs`
