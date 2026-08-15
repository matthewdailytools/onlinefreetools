Date: 2026-08-15 09:53
Summary: Corrected the localhost homepage diagnosis to a stale Worker Cache API response.

[question]
“关键点出来了：http://localhost:8788/zh/ 现在返回的是 404 Content-Length: 0，不是旧首页 HTML。所以它不是“首页里没这个工具”，而是当前 wrangler dev 服务没有把 /zh/ 这类静态首页路由接上” 这个上面的分析是错误的，http://localhost:8788/zh/ 网页打开有数据

[try to solve]
You are right. The earlier 404 diagnosis was wrong because the first curl request did not include `Accept: text/html`; browser navigation does include that header, so `/zh/` returns a page. The corrected diagnosis is that `/zh/` is serving an older cached homepage. Local `public/zh/index.html` already contains `archive-extractor`, while the HTML returned from `http://localhost:8788/zh/` differs and does not contain the slug. The response also shows a cache hit, so the issue is stale Worker Cache API HTML keyed by the current `PAGES_CACHE_VERSION`, not a missing generated homepage.

[actions]
- Rechecked the repository rules before adding this log.
- Confirmed the corrected cause from the prior curl results: `Accept: text/html` returns HTML, but it is stale versus `public/zh/index.html`.
