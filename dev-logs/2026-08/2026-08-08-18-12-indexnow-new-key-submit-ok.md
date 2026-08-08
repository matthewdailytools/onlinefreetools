Date: 2026-08-08 18:12
Summary: Submitted 420 sitemap URLs via IndexNow with new apex key; Bing and api.indexnow.org both HTTP 200.

[question]
https://onlinefreetools.org/2f01147b65c24c4194c4f785eacafef9.txt 已更新

[try to solve]
新 key 线上可访问（HTTP 200，正文匹配）。仓库侧已是该 key（`public/{key}.txt` / config / Worker / wrangler）。

提交结果（host=`onlinefreetools.org`，keyLocation=该 txt，420 URLs）：
1. `https://api.indexnow.org/indexnow` → **HTTP 200**
2. `https://www.bing.com/indexnow` 首次 → 403 `SiteVerificationNotCompleted`（校验未完成）
3. 约 30s 后重试 Bing → **HTTP 200 OK（420 URLs）**

可在 Bing Webmaster → IndexNow 面板核对接收记录。

[actions]
- `npm run indexnow:check`
- `npm run indexnow -- --remote-sitemap --endpoint indexnow --require-live-key`
- `npm run indexnow -- --remote-sitemap --endpoint bing --require-live-key`（重试成功）
