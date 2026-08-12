Date: 2026-08-13 00:39
Summary: GitHub push can replace bare wrangler deploy if same commit and live verify waits for CF.

[question]
如下 npx wrangler deploy 这一步是否可以用 github 的 push 来替代？ npm run build:site / lint / upload:r2 / verify:r2 / wrangler deploy / verify:r2:live

[try to solve]
可以替代「只部署 Worker+Assets」那一步，前提：push 的 commit 与刚 build/upload 的代码和 `PAGES_CACHE_VERSION` 一致；CF 拉部署完成后再跑 `verify:r2:live`（异步部署，勿立刻探针）。不能替代 upload/verify；Git 路径也不会带上未 commit 的本地改动。推荐顺序：本地 build+lint+upload+verify → commit/push（触发 CF）→ 等部署成功 → verify:r2:live。若 CF Build 命令也跑 upload，会与本地 upload 重复，需二选一。

[actions]
- （只读说明）
