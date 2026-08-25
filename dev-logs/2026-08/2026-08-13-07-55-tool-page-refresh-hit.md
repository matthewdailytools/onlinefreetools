Date: 2026-08-13 07:55
Summary: Tool page refresh confirms edge HIT; Worker 8ms; max-age rewritten to 14400.

[question]
上述页面刷新后：HTTP/2 200 
date: Wed, 12 Aug 2026 23:54:53 GMT
content-type: text/html; charset=utf-8
cf-ray: a2a36861ba19759e-SEA
cf-cache-status: HIT
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DzMabE04Opha8P8qVjn3M7uhGvtXC%2FYaHUv7CLS6mMAI1byNHdbrrKXvdOWyOdoOolEoFx7okERJzZgckG2R9H5TPJKdqNaf4VxBTwyFFqkgbl0UKksfPFO6Pa2kYiAeNtBMsZpv"}]}
age: 108
cache-control: public, max-age=14400, s-maxage=86400
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
vary: Accept-Encoding
server-timing: cfCacheStatus;desc="HIT"
server-timing: cfEdge;dur=9,cfOrigin;dur=0,cfWorker;dur=8
content-encoding: zstd
alt-svc: h3=":443"; ma=86400
X-Firefox-Spdy: h2

[try to solve]
Same URL `/zh/tools/image-format-converter` after refresh confirms the hot path: HIT, age=108 (~1.8 minutes since fill), Worker 333ms→8ms, Edge≈9ms, origin=0. Cache fill is healthy. On HIT, `max-age` moves from Worker’s 0 to 14400—same as home HIT—pointing to Cloudflare Browser Cache TTL (4h) rewriting at the edge; on miss the designed max-age=0 still appears. Conclusion: R2+Cache path is healthy; to force browsers to revalidate every time, set Dashboard Browser Cache TTL to Respect Existing Headers.

[actions]
- Read-only analysis of post-refresh headers
