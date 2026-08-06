Date: 2026-08-06 15:19
Summary: Fixed ops dev start/stop on Windows; added status:dev and health-check before reporting ready.

[question]
http://127.0.0.1:8787 无法访问，请对运维手册的命令进行测试

[try to solve]
测试发现两类问题：

1. **假「已在运行」**：PID 文件记录 spawn 进程，Wrangler 实际监听在子进程；stop 后 PID 仍被误判为存活。
2. **误判不可访问**：PowerShell/curl 无 `Accept: text/html` 时 Worker 对 `/` 返回 404，但浏览器正常。

修复：
- 启动前/后做 HTTP 健康检查（含 Accept: text/html）
- 等待日志 `Ready on http://127.0.0.1:8787` 再报成功
- stop 优先杀端口 LISTEN 进程
- stale PID 自动清理
- 新增 `npm run status:dev`

验证：`status:dev` → HTTP health OK；`Invoke-WebRequest` + Accept → 200；`restart:dev -- --no-build` 通过。

[actions]
- ops/lib/dev-process.mjs
- ops/dev/start-dev.mjs, stop-dev.mjs, status-dev.mjs
- package.json, ops/README.md, cloudflare-workflow.mdc
