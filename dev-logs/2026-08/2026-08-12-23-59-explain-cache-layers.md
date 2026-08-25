Date: 2026-08-12 23:59
Summary: Explain current HTML cache layers (Cache API + R2 storage + Assets fallback + runtime compress) and residual risks.

[question]
目前缓存实现了哪几层？实现逻辑是什么，会不会产生所有的缓存的bug

[try to solve]
Current HTML path: (1) Workers Cache API (plaintext, s-maxage=1d, key = URL + PAGES_CACHE_VERSION); (2) R2 as source of truth (gzip on disk, gunzip on read—not a cache layer semantically); (3) ASSETS plaintext fallback; (4) runtime/edge recompression (Worker does not set Content-Encoding). Clients no longer receive pre-compressed bodies, so double-gzip mojibake-class bugs are avoided.

Residual risks: HTML changed but not uploaded, or version not bumped → stale Cache/R2; dual source Assets vs R2; browser max-age=0 so freshness relies mainly on the edge. Static vendor still goes through Assets, outside this pipeline.

[actions]
- Explanation only; no code changes
