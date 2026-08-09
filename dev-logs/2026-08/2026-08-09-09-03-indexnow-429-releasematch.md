Date: 2026-08-09 09:03
Summary: Diagnosed releasematch IndexNow failure as upstream api.indexnow.org HTTP 429 rate limit, not key/sitemap parse.

[question]
https://releasematch.com/Cnu4Ma9IVbcgCMu81QRFzqOOTUUFTR5G.txt 通过sitemap.xml上传，反馈提交失败或返回非成功状态。 HTTP 429，{ "ok": false, "status": 429, "endpoint": "https://api.indexnow.org/indexnow", ... "bodyPreview": "{\"errorCode\":\"TooManyRequests\",...}" }

[try to solve]
结论：密钥与 37 条 urlList 组装正常；失败来自 IndexNow 聚合端点限流（TooManyRequests），不是本站校验或 sitemap 展开错误。建议停顿 15–60 分钟后只提交一次，或改 Bing 直连；并注意 releasematch.com/sitemap.xml 曾出现 HTTP 500，必要时粘贴本地 XML。

[actions]
- 校验 key txt HTTP 200 / 正文匹配
- 尝试拉取 sitemap.xml（观察到 500）
