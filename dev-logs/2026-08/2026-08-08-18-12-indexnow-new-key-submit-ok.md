Date: 2026-08-08 18:12
Summary: Submitted 420 sitemap URLs via IndexNow with new apex key; Bing and api.indexnow.org both HTTP 200.

[question]
https://onlinefreetools.org/2f01147b65c24c4194c4f785eacafef9.txt 已更新

[try to solve]
New key is live (HTTP 200, body matches). Repo already uses that key (`public/{key}.txt` / config / Worker / wrangler).

Submit results (host=`onlinefreetools.org`, keyLocation=that txt, 420 URLs):
1. `https://api.indexnow.org/indexnow` → **HTTP 200**
2. `https://www.bing.com/indexnow` first try → 403 `SiteVerificationNotCompleted`
3. ~30s later retry Bing → **HTTP 200 OK (420 URLs)**

Check Bing Webmaster → IndexNow panel for receipt records.

[actions]
- `npm run indexnow:check`
- `npm run indexnow -- --remote-sitemap --endpoint indexnow --require-live-key`
- `npm run indexnow -- --remote-sitemap --endpoint bing --require-live-key` (retry succeeded)
