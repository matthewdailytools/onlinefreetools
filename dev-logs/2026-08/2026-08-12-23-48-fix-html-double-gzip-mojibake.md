Date: 2026-08-12 23:48
Summary: Fix HTML mojibake: stop serving R2 pre-gzip with Content-Encoding; always return identity and let runtime compress.

[question]
http://localhost:8788/zh/tools/add-watermark 乱码

[try to solve]
Root cause: R2 pre-compressed bytes + `Content-Encoding: gzip` + Cache round-trip made `encodeBody:manual` ineffective → double gzip; the browser decoded only one layer and showed mojibake.

Fix: `r2Pages.ts` always returns plaintext HTML to clients; R2 still stores gzip (gunzip on read); bump `PAGES_CACHE_VERSION` → 3 to bust old cache. Locally verified under browser-like Accept-Encoding: single-layer gzip and Chinese renders correctly.

[actions]
- src/site/r2Pages.ts; wrangler.jsonc / worker-configuration.d.ts (PAGES_CACHE_VERSION=3)
- docs/worker+R2架构/design.md, ops/worker-r2-ops.md
