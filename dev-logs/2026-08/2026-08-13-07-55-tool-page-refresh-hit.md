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
同 URL `/zh/tools/image-format-converter` 刷新后确认热路径：HIT、age=108（约 1.8 分钟前填入）、Worker 333ms→8ms、Edge≈9ms、origin=0。缓存填充正常。HIT 时 `max-age` 从 Worker 的 0 变为 14400，与首页 HIT 一致，指向 Cloudflare Browser Cache TTL（4h）在边缘出站改写；miss 时仍见设计头 max-age=0。结论：R2+Cache 链路健康；若要浏览器也强制每次再校验，Dashboard 将 Browser Cache TTL 设为 Respect Existing Headers。

[actions]
- （只读分析刷新后 headers）
