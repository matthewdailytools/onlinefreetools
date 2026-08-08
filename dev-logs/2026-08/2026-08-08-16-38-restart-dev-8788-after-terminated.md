Date: 2026-08-08 16:38
Summary: Explained zsh terminated on start:dev; cleared stale 8787/8788 workerd and restarted on 8788.

[question]
@terminals/1.txt:457-458 (zsh: terminated npm run start:dev --port 8788)

[try to solve]
`zsh: terminated` = 进程收到 SIGTERM（常因端口已被旧 workerd 占用、或 stop/冲突杀进程）。当时 8788 有僵尸 workerd、健康实例在 8787。已 force-kill 后 `start:dev --port 8788 --no-build`，Ready；`/zh/` 200 且含 theme-switcher。

[actions]
- kill stale workerd; npm run start:dev -- --port 8788 --no-build
