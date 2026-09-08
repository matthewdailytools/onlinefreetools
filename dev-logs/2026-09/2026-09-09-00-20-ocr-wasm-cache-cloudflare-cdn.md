Date: 2026-09-09 00:20
Summary: OCR WASM and language packs are cached in three layers — in-tab worker, IndexedDB for traineddata, and Cloudflare edge for /vendor — even though Cache-Control is max-age=0 must-revalidate.
Visibility: people

[question]
WASM 会缓存么？cloudflare cdn起作用么

[try to solve]
## Context
OCR tools lazy-load Tesseract from same-origin `/vendor/tesseract/` (core `*.wasm.js` ~3.7 MB, language `.traineddata.gz` a few MB each). First Convert feels slow. The question is whether that download repeats, and whether Cloudflare’s CDN helps.

## Process
1. Confirmed serving path: `/vendor/*` is Workers Static Assets (`public/vendor/` in `wrangler.jsonc`), not R2 HTML. `PAGES_CACHE_VERSION` only keys Worker Cache API for prerendered HTML, not these files.
2. Fetched production headers for `tesseract-core-simd-lstm.wasm.js`, `eng.traineddata.gz`, and `tesseract.min.js`.
3. Read tesseract.js `cacheMethod` (default `write`) and `src/worker-script/browser/cache.js` (IndexedDB via idb-keyval) plus Cloudflare’s documented default asset headers.

## Root cause / analysis
There are three different “caches,” and they do not all store the WASM core the same way.

1. **Same tab (JavaScript).** Each OCR page keeps one `tessWorker`. Convert all / a second photo in the same visit does not reload the engine.
2. **Same browser, later visit — language packs.** tesseract.js default `cacheMethod: 'write'` stores `.traineddata` in IndexedDB. A later visit on the same origin skips re-downloading chi_sim/eng/etc. unless site data is cleared. The WASM *core* is not what IndexedDB stores.
3. **HTTP + Cloudflare edge — scripts and WASM.** Workers Static Assets send `Cache-Control: public, max-age=0, must-revalidate` plus `ETag` (Cloudflare default). The browser may keep the file but must revalidate. If the ETag matches, the response is 304 — no 3.7 MB body. Cloudflare still caches the asset at the PoP: production showed `cf-cache-status: HIT` on `eng.traineddata.gz` and `tesseract.min.js`, and `MISS` on a first fetch of the WASM JS from another PoP (then that PoP fills). So the CDN *does* work; it does not replace the first-ever download for a cold browser.

`max-age=0` is why DevTools can still show a request on every visit: it is often a cheap revalidate against the nearest Cloudflare edge, not a pull from GitHub/origin.

## Solution
No code change in this round. Practical expectation:

- First Convert in a clean profile: full WASM + language download (HUD wait is real).
- Same tab, more photos: memory worker, no reload.
- Return visitor, same origin: language packs from IndexedDB; WASM/script usually 304 or edge HIT, not a cold origin fetch.
- Incognito / clear site data: IndexedDB gone; HTTP cache may be gone too.

Optional later: a `public/_headers` rule such as `/vendor/tesseract/*` with a long `max-age` would skip browser revalidation until TTL, at the cost of slower pickup if those files change without a new URL.

## Notes / boundaries
Measured on `https://onlinefreetools.org/vendor/tesseract/...` (2026-09-08). Cloudflare documents that `CF-Cache-Status` can occasionally be a false HIT/MISS. HTML pages use a different cache (`s-maxage` + `PAGES_CACHE_VERSION`); do not mix that with vendor WASM.

[actions]
- Production HEAD of WASM/lang/script; read tesseract.js IndexedDB cache and Cloudflare Static Assets header docs
