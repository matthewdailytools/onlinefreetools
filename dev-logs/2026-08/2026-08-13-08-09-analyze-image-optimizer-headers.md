Date: 2026-08-13 08:09
Summary: image-optimizer headers: HTTP/3 miss path; Worker~276ms; design Cache-Control; zstd.

[question]
分析https://onlinefreetools.org/zh/tools/image-optimizer httpheader：HTTP/3 200 
date: Thu, 13 Aug 2026 00:08:41 GMT
priority: u=0,i
content-type: text/html; charset=utf-8
server-timing: cfEdge;dur=37,cfOrigin;dur=0,cfWorker;dur=276
server-timing: cfExtPri
cache-control: public, s-maxage=86400, max-age=0
server: cloudflare
vary: Accept-Encoding
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gAyALy9GBC%2FZKSqodKQ19pWkva3IaPksiUP%2F7oWADh83PCbFyPVdCJyAxwUr%2BSTI0iCGlLpL7yiX1uNoYM45jM78UGxdyWn2DwrGHyYN07hCGXiUuaTA4%2FhmSjOTBTOU9%2BWdzls%2B"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
content-encoding: zstd
cf-ray: a2a37c964de383bf-SEA
alt-svc: h3=":443"; ma=86400

[try to solve]
工具页冷/miss：无 HIT/age；Cache-Control 为 Worker 设计头 max-age=0、s-maxage=1d；cfWorker≈276ms + cfOrigin=0 ≈ Cache miss→R2 get+gunzip（绑定不计 origin）；边缘 zstd；HTTP/3 + priority/cfExtPri 为协议层，与缓存无关。与 image-format-converter miss（~333ms）同型；再刷预期 HIT、Worker 降至十余 ms、max-age 可能被 Browser Cache TTL 改成 14400。

[actions]
- （只读分析）
