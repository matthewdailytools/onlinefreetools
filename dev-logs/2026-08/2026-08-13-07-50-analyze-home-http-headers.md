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
Verdict: edge cache for the homepage is working (HIT) and the path looks healthy; `max-age=14400` disagrees with the designed `max-age=0`, most likely Cloudflare zone Browser Cache TTL rewriting outbound headers.

Per header: HTTP/2 200 and `text/html` are fine; `cf-cache-status: HIT` plus `age: 1183` means SEA has cached for ~19.7 minutes; `cfOrigin=0` (no HTTP origin fetch); `cfWorker≈37ms` (Worker still runs); `cfEdge≈55ms` TTFB is good; Cache-Control is CDN 1 day / browser 4 hours; zstd edge compression; `Vary: Accept-Encoding` only is reasonable.

Vs repo: `identityHtmlResponse` / design use `public, s-maxage=86400, max-age=0`; live `max-age=14400` matches CF’s common Browser Cache TTL=4h. After a deploy, browsers may keep an old home up to 4h; CDN can still use `s-maxage` + `PAGES_CACHE_VERSION`. For immediate visibility to new visitors, set Dashboard Browser Cache TTL to Respect Existing Headers.

Performance: vs earlier cache miss + R2, edge HIT is achieved; if still slow, weight is more likely HTML size/icons than origin headers.

[actions]
- Read-only analysis of headers vs `src/site/r2Pages.ts` / design.md
