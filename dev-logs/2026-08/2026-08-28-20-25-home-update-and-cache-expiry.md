Date: 2026-08-28 20:25
Summary: Homepage HTML updates via build:site plus git push; Cache API does not auto-bust on file change and needs TTL, PAGES_CACHE_VERSION, or URL purge.

[question]
如何实现首页更新，首页的缓存自动时效

[try to solve]
Homepage cards are written by `npm run build:site` into `public/index.html` and `public/{lang}/index.html` (Static Assets) plus `public/_pages/{lang}/index.html` (R2 fallback). The Worker serves homes as Cache API → Assets → R2. Production homes therefore need those Asset files committed and git-pushed; `upload:r2` only refreshes the R2 fallback.

The Cache API does not watch disk or R2. HTML is stored under a key of public URL + `__ce=identity` + `__v=<PAGES_CACHE_VERSION>` with `Cache-Control: public, s-maxage=86400, max-age=0`. After a rebuild, the old home stays HIT until one of: natural 24h expiry; bumping `wrangler.jsonc` `vars.PAGES_CACHE_VERSION` then `upload:r2` + git push; `POST /api/admin/cache/purge` for exact home URLs; or a local `restart:dev` (in-memory workerd cache). `build:site` does not increment the version automatically.

Typical stale-home cases: disk new / browser old = Cache HIT; repo new / live old = Assets not pushed or CF deploy still running; tool page new / home old = tools are R2 while homes are Assets+Cache.

[actions]
- Read homepage serve path in `src/site/r2Pages.ts` (`serveHomeHtml`) and cache notes in `ops/worker-r2-ops.md` §6.
- Confirmed current `PAGES_CACHE_VERSION` is `4.2` in `wrangler.jsonc`.
