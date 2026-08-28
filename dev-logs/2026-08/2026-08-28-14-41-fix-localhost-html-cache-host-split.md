Date: 2026-08-28 14:41
Summary: Fixed localhost vs 127.0.0.1 homepage split: HTML Cache API keys now use a canonical origin so both hosts share one entry.

[question]
无痕还是有侧边栏，没有最新工具模块

[try to solve]
Incognito was not the browser cache. `http://127.0.0.1:8787/zh/` already returned the new homepage (`layout-no-sidebar` + `#latest-tools`), while `http://localhost:8787/zh/` returned an older cached HTML (`sidebar-collapsed` + `#sidebar`, no latest section) with a different ETag. Cause: `buildHtmlCacheKey` used the full request URL, so `localhost` and `127.0.0.1` were two Cache API keys under the same `PAGES_CACHE_VERSION`; the localhost key stayed frozen from before the homepage edits. Fix: canonicalize the cache key to `https://onlinefreetools.org` + pathname/query (still add `__ce` / `__v`). After `npm run restart:dev -- --no-build --no-seed-r2`, both hosts return the same new ETag with latest tools and no sidebar. Immediate workaround without the code fix: open `http://127.0.0.1:8787/zh/`.

[actions]
- Updated `src/site/r2Pages.ts` (`buildHtmlCacheKey` host canonicalization)
- Ran `npm run restart:dev -- --no-build --no-seed-r2` and rechecked both hosts
