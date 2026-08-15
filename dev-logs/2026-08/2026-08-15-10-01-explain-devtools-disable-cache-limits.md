Date: 2026-08-15 10:01
Summary: Explained why browser DevTools Disable cache does not bypass Worker Cache API HTML.

[question]
为什么浏览器在dev工具 disable cache也没有作用

[try to solve]
Browser DevTools Disable cache only bypasses the browser's own HTTP cache while DevTools is open. It does not clear or bypass server-side caches, Cloudflare Worker `caches.default`, local workerd/Miniflare cache storage, R2 objects, or the Worker code path. In this project, `serveHomeHtml` checks `caches.default.match(cacheKey)` before reading `public/zh/index.html` from Assets. The cache key intentionally ignores query strings and only includes the public URL plus `PAGES_CACHE_VERSION`, so browser reloads, hard refreshes, and `?v=...` still hit the same Worker Cache entry. To invalidate it, restart the local dev runtime or change `PAGES_CACHE_VERSION`; for a code-level improvement, make local/dev requests with `Cache-Control: no-cache` bypass `caches.default`.

[actions]
- Added an explanation of Browser cache versus Worker Cache API behavior.
