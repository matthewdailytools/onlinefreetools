Date: 2026-08-13 08:10
Summary: image-optimizer refresh HIT; Worker 276→37ms; max-age rewritten to 14400.

[question]
刷新后：HTTP/2 200 
date: Thu, 13 Aug 2026 00:09:46 GMT
content-type: text/html; charset=utf-8
cf-ray: a2a37e319dad252d-SEA
cf-cache-status: HIT
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tGo7eULEbZ1ChWI2HLpNcxgyvlDLo9IPz9Ub0yM1MuYggDLj2AudyvxWKOYN5Yp%2B4RXVuXeuV747wkWSpNj0pjaWVA%2FzKNzrJR%2FjVzwy0YuVZgrw6iNF1RtBeqpaOu9%2FVG%2B46twB"}]}
age: 65
cache-control: public, max-age=14400, s-maxage=86400
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
vary: Accept-Encoding
server-timing: cfCacheStatus;desc="HIT"
server-timing: cfEdge;dur=43,cfOrigin;dur=0,cfWorker;dur=37
content-encoding: zstd
alt-svc: h3=":443"; ma=86400
X-Firefox-Spdy: h2

[try to solve]
同 URL 热路径确认：HIT、age=65、Worker 276→37ms、仍 zstd、origin=0。max-age 0→14400 再次印证 CF Browser Cache TTL 出站改写。与 image-format-converter 刷新模式一致；缓存链路正常。

[actions]
- （只读对比 miss/HIT）
