Date: 2026-08-13 00:07
Summary: Explain PAGES_CACHE_VERSION Cache API busting and R2 verify alignment.

[question]
PAGES_CACHE_VERSION 的逻辑是什么？

[try to solve]
PAGES_CACHE_VERSION 是 wrangler vars 里的字符串（当前 "3"）。读 HTML 时 Workers Cache API 的 key = 公开 URL + `__ce=identity` + `__v=<版本>`；递增版本 → key 变了 → 旧缓存 miss → 重新从 R2 gunzip 写入。浏览器侧 max-age=0，主要管边缘 Cache（s-maxage=1d）。upload:r2 把同一版本写入 R2 `_meta/pages-build.json`；verify:r2 /live 与 Worker env 对齐，防「新 Worker + 旧 R2 清单」或反过来。它不改 R2 object key，也不自动随内容变——改 HTML 后要 upload；要立刻刷掉边缘旧页才手动递增并 deploy。

[actions]
- （无代码改动）
