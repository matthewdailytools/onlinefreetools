Date: 2026-08-13 07:57
Summary: Yes — edge serves zstd; Worker sends identity HTML.

[question]
是否压缩

[try to solve]
Yes. Response headers include `content-encoding: zstd`, so the Cloudflare edge compressed with Zstandard per the client’s Accept-Encoding before delivery. The Worker/R2 path emits plaintext HTML (no Content-Encoding set) and lets the runtime negotiate compression; Firefox supports zstd, so you see zstd rather than gzip/br.

[actions]
- Read-only answer
