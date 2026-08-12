Date: 2026-08-12 23:43
Summary: Clarify online switch testing is not supported end-to-end; only design stubs (PAGES_R2_PREFIX) and local/preview bucket.

[question]
目前是否支持在线切换测试

[try to solve]
不支持「线上一点切换、多版本并行测」的完整能力。现状：生产单桶单前缀；`PAGES_R2_PREFIX` 仅 Worker 读取、upload/verify/wrangler vars 未接好；无 staging env、无 Ops UI 切流。可用的是本地 wrangler / preview 桶、改 `PAGES_CACHE_VERSION` 后 redeploy、或整站 upload 覆盖。若要蓝绿切换需补 upload 前缀、Dashboard 改 var、verify 对齐。

[actions]
- （说明，无代码改动）
