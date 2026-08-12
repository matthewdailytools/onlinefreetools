Date: 2026-08-12 23:59
Summary: Explain current HTML cache layers (Cache API + R2 storage + Assets fallback + runtime compress) and residual risks.

[question]
目前缓存实现了哪几层？实现逻辑是什么，会不会产生所有的缓存的bug

[try to solve]
当前 HTML：① Workers Cache API（明文，s-maxage=1d，key 含 URL+PAGES_CACHE_VERSION）；② R2 为权威存储（gzip，读时 gunzip，非缓存语义）；③ ASSETS 明文回退；④ 运行时/边缘再压（Worker 不设 Content-Encoding）。对外不再直出预压缩体，双重 gzip 乱码类 bug 已规避。残留风险：改 HTML 未 upload、未递增版本导致旧 Cache/R2；Assets 与 R2 双源；浏览器 max-age=0 主要靠边缘。静态 vendor 另走 Assets，不经此链路。

[actions]
- （说明，无代码改动）
