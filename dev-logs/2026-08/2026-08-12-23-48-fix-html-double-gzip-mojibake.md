Date: 2026-08-12 23:48
Summary: Fix HTML mojibake: stop serving R2 pre-gzip with Content-Encoding; always return identity and let runtime compress.

[question]
http://localhost:8788/zh/tools/add-watermark 乱码

[try to solve]
根因：R2 预压缩字节 + `Content-Encoding: gzip` + Cache 往返后 `encodeBody:manual` 失效 → 双重 gzip，浏览器只解一层显示乱码。
修复：`r2Pages.ts` 对外始终返回明文 HTML；R2 仍存 gzip（读时 gunzip）；`PAGES_CACHE_VERSION`→3 失效旧缓存。已本地验证浏览器式 Accept-Encoding 下仅单层 gzip 且中文正常。

[actions]
- src/site/r2Pages.ts；wrangler.jsonc / worker-configuration.d.ts（PAGES_CACHE_VERSION=3）
- docs/worker+R2架构/design.md、ops/worker-r2-ops.md
