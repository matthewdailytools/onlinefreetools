Date: 2026-08-14 23:00
Summary: Explained whether identical rendered HTML produces the same file hash when generated at different times.

[question]
相同内容，渲染生成html的时间不同，文件hash是否一样？

[try to solve]
Confirmed that the R2 upload hash is computed from the generated `.html.gz` bytes, not raw `.html`. In this project, `scripts/gzip-pages.mjs` uses Node `createGzip({ level: 9 })`. A local Node check showed gzip output for identical input is deterministic in this runtime: the gzip header mtime is zero and the sha256 hash is identical across runs. Therefore, if rendered HTML bytes are exactly the same, the `.html.gz` hash is also the same even when generated at different wall-clock times. If the HTML content itself embeds a changing timestamp, nonce, generated-at value, ordering difference, or other byte change, the hash will differ.

[actions]
- Inspected `scripts/gzip-pages.mjs`
- Inspected `scripts/lib/pages-build-meta.mjs`
- Ran a Node gzip determinism check
