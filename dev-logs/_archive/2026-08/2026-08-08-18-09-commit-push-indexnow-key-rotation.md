Date: 2026-08-08 18:09
Summary: Committed and pushed IndexNow key rotation to 2f01147b65c24c4194c4f785eacafef9.

[question]
commit and push 2f01147b65c24c4194c4f785eacafef9.txt

[try to solve]
已提交并推送到 `origin/main`：`286be90`。

为完整轮换，一并更新了 Worker/配置中的旧 key 引用：
- 新增 `public/2f01147b65c24c4194c4f785eacafef9.txt`
- 删除 `public/8212779ba7e9451aa4faed4cfd20ded4.txt`
- 同步 `src/index.ts`、`wrangler.jsonc`、`scripts/site/config.mjs`

线上 keyLocation：`https://onlinefreetools.org/2f01147b65c24c4194c4f785eacafef9.txt`（待 CF 部署完成后可用）。

[actions]
- commit `286be90` chore(seo): rotate IndexNow key to 2f01147b65c24c4194c4f785eacafef9
- push `main` → `origin/main`
