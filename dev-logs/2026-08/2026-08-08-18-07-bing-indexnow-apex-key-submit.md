Date: 2026-08-08 18:07
Summary: Confirmed IndexNow uses apex keyLocation (not www); Bing still returns 403 for this key.

[question]
应该使用https://onlinefreetools.org/8212779ba7e9451aa4faed4cfd20ded4.txt，而不是https://www.onlinefreetools.org/8212779ba7e9451aa4faed4cfd20ded4.txt ，发送的格式文档：https://www.bing.com/indexnow/getstarted

[try to solve]
已按你的要求对齐：只用裸域 key，不用 www。

1) 已撤回误换新 key 的本地改动，恢复 `8212779ba7e9451aa4faed4cfd20ded4`。
2) 线上校验：`https://onlinefreetools.org/8212779ba7e9451aa4faed4cfd20ded4.txt` → HTTP 200，正文匹配。
3) 提交载荷（对齐 Bing getstarted）：
   - host=`onlinefreetools.org`
   - keyLocation=`https://onlinefreetools.org/8212779ba7e9451aa4faed4cfd20ded4.txt`
   - urlList 全部为 apex（sitemap 420 条，www=0）
4) 实际 POST 到 `api.indexnow.org` 与 `www.bing.com/indexnow`，以及单 URL GET：均返回 **HTTP 403** `UserForbiddedToAccessSite`（User is unauthorized to access the site. Please verify the site using the key and try again）。
5) CLI dry-run 亦确认 `host` / `keyLocation` 均为裸域，不是 www。

结论：www/裸域格式问题已排除；当前是 Bing 侧拒收该 key 与站点绑定（常见于早期 key 文件曾 404 后被判无效）。需在 Bing Webmaster → IndexNow 重新 Generate key 并替换托管文件后再提交，或确认 BWT 中站点属性为 `https://onlinefreetools.org/`。

[actions]
- restored: `public/8212779ba7e9451aa4faed4cfd20ded4.txt`, `scripts/site/config.mjs`, `src/index.ts`, `wrangler.jsonc`
- removed local new-key file `public/ed49147f*.txt`
- curl POST IndexNow (apex payload) → 403
- `npm run indexnow -- --remote-sitemap --endpoint bing --require-live-key --limit 1 --dry-run`
