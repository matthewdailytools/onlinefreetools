Date: 2026-08-09 09:03
Summary: Diagnosed releasematch IndexNow failure as upstream api.indexnow.org HTTP 429 rate limit, not key/sitemap parse.

[question]
https://releasematch.com/Cnu4Ma9IVbcgCMu81QRFzqOOTUUFTR5G.txt 通过sitemap.xml上传，反馈提交失败或返回非成功状态。 HTTP 429，{ "ok": false, "status": 429, "endpoint": "https://api.indexnow.org/indexnow", ... "bodyPreview": "{\"errorCode\":\"TooManyRequests\",...}" }

[try to solve]
Conclusion: the key and the 37-URL `urlList` assembled correctly; the failure is rate limiting on the IndexNow aggregate endpoint (`TooManyRequests`), not local validation or sitemap expansion. Wait 15–60 minutes and submit once, or use Bing direct; also note `releasematch.com/sitemap.xml` had returned HTTP 500, so paste local XML if needed.

[actions]
- Verified key txt HTTP 200 / body match
- Attempted to fetch sitemap.xml (observed 500)
