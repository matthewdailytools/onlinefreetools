Date: 2026-08-08 16:38
Summary: Explained zsh terminated on start:dev; cleared stale 8787/8788 workerd and restarted on 8788.

[question]
@terminals/1.txt:457-458 (zsh: terminated npm run start:dev --port 8788)

[try to solve]
`zsh: terminated` means the process received SIGTERM (often because the port was held by an old workerd, or a stop/conflict killed the process). At the time, 8788 had a zombie workerd while a healthy instance was on 8787. Force-killed stale processes, then `start:dev --port 8788 --no-build` → Ready; `/zh/` 200 and includes the theme-switcher.

[actions]
- kill stale workerd; npm run start:dev -- --port 8788 --no-build
