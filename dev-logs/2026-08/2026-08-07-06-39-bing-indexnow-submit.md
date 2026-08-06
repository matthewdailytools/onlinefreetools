Date: 2026-08-07 06:39
Summary: Implemented Bing IndexNow key hosting + sitemap submit script; production custom domain not bound to this CF account.

[question]
api key：8212779ba7e9451aa4faed4cfd20ded4，使用这个api，完成 bing indexnow 功能

[try to solve]
已完成 IndexNow 工程接入，并用该 key 跑通提交流程（协议侧 HTTP 202）。

实现内容：
1. 公钥文件 `public/8212779ba7e9451aa4faed4cfd20ded4.txt`（正文 = key；IndexNow 要求公开托管）
2. Worker 对 `/{key}.txt` 直出（`src/index.ts`，并加入 `wrangler.jsonc` 的 `run_worker_first`）
3. 提交脚本 `scripts/submit-indexnow.mjs` + `npm run indexnow`（默认读 `public/sitemap.xml`，支持 `--url` / `--dry-run` / `--endpoint bing`）
4. 配置项 `siteConfig.indexNowKey`；文档：`ops/README.md`、`docs/SEO_PUBLISH_CHECKLIST.md`、策略文档清单

验证：
- `npm run indexnow -- --dry-run`：160 URLs OK
- `npm run indexnow`：`https://api.indexnow.org/indexnow` 返回 **HTTP 202**（已接收，key 校验待完成）
- 生产 `https://onlinefreetools.org/{key}.txt` 仍为 **404**

根因：当前 Wrangler 账号（Vscodeai@outlook.com）下 **没有** `onlinefreetools.org` zone；`wrangler deploy` 只更新 `onlinefreetools.*.workers.dev`，自定义域由其他账号/部署在服务。需把域名 Custom Domain 绑到本 Worker，或在实际服务该域的项目中同步 key 文件后再提交。

[actions]
- public/8212779ba7e9451aa4faed4cfd20ded4.txt
- scripts/submit-indexnow.mjs
- scripts/site/config.mjs
- src/index.ts
- wrangler.jsonc
- package.json
- ops/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
- docs/2026-07-28-google-seo-strategy-implementation.md
- npm run deploy / npm run indexnow
