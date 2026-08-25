Date: 2026-08-08 18:07
Summary: Confirmed IndexNow uses apex keyLocation (not www); Bing still returns 403 for this key.

[question]
应该使用https://onlinefreetools.org/8212779ba7e9451aa4faed4cfd20ded4.txt，而不是https://www.onlinefreetools.org/8212779ba7e9451aa4faed4cfd20ded4.txt ，发送的格式文档：https://www.bing.com/indexnow/getstarted

[try to solve]
Aligned to apex-only key (no www), as requested.

1) Reverted mistaken local new-key change; restored `8212779ba7e9451aa4faed4cfd20ded4`.
2) Live check: `https://onlinefreetools.org/8212779ba7e9451aa4faed4cfd20ded4.txt` → HTTP 200, body matches.
3) Submit payload (per Bing getstarted):
   - host=`onlinefreetools.org`
   - keyLocation=`https://onlinefreetools.org/8212779ba7e9451aa4faed4cfd20ded4.txt`
   - urlList all apex (sitemap 420 URLs, www=0)
4) Actual POST to `api.indexnow.org` and `www.bing.com/indexnow`, plus single-URL GET: all returned **HTTP 403** `UserForbiddedToAccessSite` (User is unauthorized to access the site. Please verify the site using the key and try again).
5) CLI dry-run also confirmed `host` / `keyLocation` are apex, not www.

Conclusion: www vs apex formatting is ruled out; Bing is rejecting this key/site binding (common after an early key file 404 marked the key invalid). Next: Bing Webmaster → IndexNow → Generate a new key, replace the hosted file, then resubmit — or confirm the BWT property is `https://onlinefreetools.org/`.

[actions]
- restored: `public/8212779ba7e9451aa4faed4cfd20ded4.txt`, `scripts/site/config.mjs`, `src/index.ts`, `wrangler.jsonc`
- removed local new-key file `public/ed49147f*.txt`
- curl POST IndexNow (apex payload) → 403
- `npm run indexnow -- --remote-sitemap --endpoint bing --require-live-key --limit 1 --dry-run`
