Date: 2026-08-13 07:53
Summary: Second header capture matches Worker design Cache-Control; miss path ~333ms Worker.

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
Compared with the prior set (HIT, age=1183, Worker≈37ms, max-age=14400): this set has no `cf-cache-status`/`age`, and Cache-Control is the designed `public, s-maxage=86400, max-age=0` from `identityHtmlResponse`, so headers were rewritten by the Worker. `cfOrigin=0` means no R2-as-HTTP-origin; likely Assets. `cfWorker=333ms` looks like Cache API miss then Assets read + response build—about 9× costlier than the HIT path. Prior `max-age=14400` looks more like an edge HIT variant (old/Assets default or Browser Cache TTL); this set shows Worker-direct responses do not force a 4h browser max-age. TTFB here is mostly the 333ms Worker; watch whether the hot path returns to HIT with tens of ms.

[actions]
- Read-only comparison of two header captures
