Date: 2026-08-13 07:57
Summary: Yes — edge serves zstd; Worker sends identity HTML.

[question]
是否压缩

[try to solve]
是。响应头有 `content-encoding: zstd`，说明 Cloudflare 边缘按客户端 Accept-Encoding 做了 Zstandard 压缩后再下发。Worker/R2 路径对外是明文 HTML（不设 Content-Encoding），由运行时协商压缩；Firefox 支持 zstd，故见 zstd 而非 gzip/br。

[actions]
- （只读回答）
