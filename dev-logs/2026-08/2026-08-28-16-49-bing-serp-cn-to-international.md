Date: 2026-08-28 16:49
Summary: Bing SERP scraper now detects CN Bing and automatically retries with the international index (ensearch=1).

[question]
判断如果是cn bing，采用国际版再搜索

[try to solve]
Added CN Bing detection (cn.bing.com host, Chinese UI including 国际版 entry, high CN-domain organic ratio). On detection for non-zh-CN markets, set ENSEARCH cookies and re-search via `cn.bing.com?...&ensearch=1` (official international toggle). Parse retries once if navigation destroys the execution context. `--allow-cn` keeps domestic SERP; `zh-CN` mkt does not force switch. Verified: first hit cn.bing.com, retry international, exit 0.

[actions]
- Updated `ops/seo/bing_serp/{bing_parse,browser_util,run_bing_serp,README}.*`
