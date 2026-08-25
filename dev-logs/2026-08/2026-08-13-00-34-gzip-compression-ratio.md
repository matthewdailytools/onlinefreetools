Date: 2026-08-13 00:34
Summary: Report current _pages gzip ratio (~82.5% saved) and that level is already max.

[question]
gzip 目前的压缩率是多少，能增加么？

[try to solve]
1510 file pairs: overall HTML 138.45MB → gzip 24.19MB, size kept ~17.5% (saved ~82.5%); median gz/html ≈ 0.175. Script already uses `createGzip({ level: 9 })` (zlib max). Almost no gain vs level 6. Brotli q11 could shrink another ~20–30% relative to gzip, but the Worker only gunzips today—switching formats needs storage and decompress changes. Conclusion: gzip side is maxed; further size cuts need another algorithm or smaller HTML sources.

[actions]
- Read-only measurement; no code changes
