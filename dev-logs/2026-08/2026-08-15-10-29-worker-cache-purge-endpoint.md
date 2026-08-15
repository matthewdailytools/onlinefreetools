Date: 2026-08-15 10:29
Summary: Preserved query strings in HTML cache keys and added a token-protected Worker cache purge endpoint.

[question]
**1、cache key 不应该清掉了 query。2、开发/运维级：加一个 admin/dev purge endpoint，按 URL 删除 caches.default 的 exact key，或者完全清除，但需要验证token**

[try to solve]
Implemented the cache changes. `buildHtmlCacheKey()` now preserves the original query string and only appends or overwrites the internal `__ce=identity` and `__v=<PAGES_CACHE_VERSION>` parameters. Added `POST /api/admin/cache/purge`, protected by `CACHE_ADMIN_TOKEN` from `Authorization: Bearer ...` or `X-Cache-Admin-Token`, with constant-time token comparison. The endpoint accepts `{ "url": "/zh/" }` or `{ "urls": ["/zh/", "/zh/tools/archive-extractor?preview=1"] }` and deletes each same-origin HTML cache exact key from `caches.default`. `all` / `purgeEverything` is token-gated but returns a clear unsupported response because Workers Cache API does not expose enumeration of all `caches.default` entries; release-wide invalidation should use `PAGES_CACHE_VERSION`, and CDN-wide purge should use Cloudflare Cache Purge outside the Worker. Updated the R2 ops manual with token setup and cache boundary notes.

[actions]
- Updated `src/site/r2Pages.ts` to preserve query strings in cache keys and export `deleteHtmlCacheForUrl()`.
- Updated `src/index.ts` with `CACHE_ADMIN_TOKEN` and `POST /api/admin/cache/purge`.
- Updated `ops/worker-r2-ops.md` with cache key and purge endpoint documentation.
- Ran `npm run build:site`, `npm run lint:seo`, `npm run lint:vendor`, `npm run lint:taxonomy`, esbuild bundle check, and `git diff --check`.
- Started local dev on port 8788 and verified missing token returns `503 cache_admin_token_not_configured`.
