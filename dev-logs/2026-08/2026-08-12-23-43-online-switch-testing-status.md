Date: 2026-08-12 23:43
Summary: Clarify online switch testing is not supported end-to-end; only design stubs (PAGES_R2_PREFIX) and local/preview bucket.

[question]
目前是否支持在线切换测试

[try to solve]
Full “one-click online switch / multi-version parallel testing” is not supported. Today: one production bucket and one prefix; `PAGES_R2_PREFIX` is read by the Worker only—upload/verify/wrangler vars are not wired; no staging env and no Ops UI traffic switch. What works: local wrangler / preview bucket, bump `PAGES_CACHE_VERSION` then redeploy, or whole-site upload overwrite. Blue/green would need upload prefix support, Dashboard var changes, and verify alignment.

[actions]
- Explanation only; no code changes
