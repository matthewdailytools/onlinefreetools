Date: 2026-08-13 07:53
Summary: Second home headers: Worker design Cache-Control; miss path ~333ms Worker.

[question]
分析：HTTP/2 200 
date: Wed, 12 Aug 2026 23:53:04 GMT
content-type: text/html; charset=utf-8
server-timing: cfEdge;dur=8,cfOrigin;dur=0,cfWorker;dur=333
cache-control: public, s-maxage=86400, max-age=0
vary: Accept-Encoding
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=N05r5DgYHfksP4GN005XWGRQLv0xDv7fDXUlK%2F7AhVL%2BSh5Cv9X%2FlusxQMQpCS7NMkLihI%2BBTMDBsglYa%2F3eahHCHcKpxELCyU3vXGwr%2BD0qAdn3eLpKV2m6yA3Kgsl93wWdyDbw"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
content-encoding: zstd
server: cloudflare
cf-ray: a2a365bb6a3f759e-SEA
alt-svc: h3=":443"; ma=86400
X-Firefox-Spdy: h2

[try to solve]
与上一组（HIT、age=1183、Worker≈37ms、max-age=14400）对比：本组无 cf-cache-status/age，Cache-Control 为设计值 `public, s-maxage=86400, max-age=0`（identityHtmlResponse），说明走了 Worker 改写头；cfOrigin=0 未打 R2，多半 Assets；cfWorker=333ms 像 Cache API miss 后读 Assets+组响应，比 HIT 路径贵约 9×。上一组 max-age=14400 更像边缘 HIT 的旧/Assets 默认或 Browser Cache TTL 变体；本组证明 Worker 直出时浏览器不强制 4h。性能上本组 TTFB 主要花在 Worker 333ms，热路径应再观察是否回到 HIT+低几十 ms。

[actions]
- （只读对比两组 headers）
