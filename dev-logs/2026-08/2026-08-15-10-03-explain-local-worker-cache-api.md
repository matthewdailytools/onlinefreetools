Date: 2026-08-15 10:03
Summary: Explained that Worker Cache API also affects the local development runtime.

[question]
Cache API 对本地开环境也器作用么

[try to solve]
Yes. Local `wrangler dev` runs a local Cloudflare Worker runtime, not a plain static file server, so Worker Cache API calls such as `caches.default.match()` and `caches.default.put()` can affect local requests too. Browser DevTools Disable cache only bypasses the browser HTTP cache; it does not bypass the runtime's `caches.default`. In this project the homepage code checks Worker Cache before reading the current Assets HTML, so an old local Worker Cache entry can make `http://localhost:8788/zh/` show stale HTML even though `public/zh/index.html` has already been rebuilt. For development, the clean fix is to bypass Worker Cache on localhost/dev or when the request sends `Cache-Control: no-cache`.

[actions]
- Added a concise explanation of local Worker Cache API behavior.
