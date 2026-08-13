Date: 2026-08-13 07:50
Summary: Homepage headers show CDN HIT; max-age=14400 vs designed max-age=0.

[question]
分析首页httpheader:HTTP/2 200 
date: Wed, 12 Aug 2026 23:49:48 GMT
content-type: text/html; charset=utf-8
cf-ray: a2a360eeaccc759e-SEA
cf-cache-status: HIT
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=l9atmrw9TsJWgkmLMqOC6ubjgqZDNpvAuH%2BSh1Zh18jy9FkbUe9iiFK%2BqUojTlWzQP%2FMq%2BNCVZ4s%2FvEJfK1gGi8ua8DBbcRyKK7tAXjTiQNHU5%2BqyY71ktqvnBKK1g6veP%2Bnu4a9"}]}
age: 1183
cache-control: public, max-age=14400, s-maxage=86400
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
vary: Accept-Encoding
server-timing: cfCacheStatus;desc="HIT"
server-timing: cfEdge;dur=55,cfOrigin;dur=0,cfWorker;dur=37
content-encoding: zstd
alt-svc: h3=":443"; ma=86400
X-Firefox-Spdy: h2

[try to solve]
结论：首页边缘缓存已生效（HIT），链路健康；max-age=14400 与代码设计的 max-age=0 不一致，多半是 Cloudflare 区域级 Browser Cache TTL 改写。

逐项：HTTP/2 200、text/html 正常；cf-cache-status HIT + age 1183 表示 SEA 已缓存约 19.7 分钟；cfOrigin=0 未回源；cfWorker≈37ms Worker 仍执行；cfEdge≈55ms TTFB 较好；Cache-Control 为 CDN 1 天、浏览器 4 小时；zstd 边缘压缩；Vary 仅 Accept-Encoding 合理。

与仓库差异：identityHtmlResponse / design 为 `public, s-maxage=86400, max-age=0`，线上 max-age=14400 恰为 CF 常见 Browser Cache TTL=4h。发版后浏览器可能最多 4h 见旧首页；CDN 仍可用 s-maxage + PAGES_CACHE_VERSION。若要发版即对新访客可见，Dashboard 将 Browser Cache TTL 设为 Respect Existing Headers。

性能：相对此前 Cache miss+R2，边缘 HIT 已达成；若仍慢，主因更可能是 HTML 体积/图标，而非回源 header。

[actions]
- （只读分析 headers 与 src/site/r2Pages.ts / design.md）
