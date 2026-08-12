Date: 2026-08-13 01:08
Summary: Checklist to confirm Worker+R2 live: pages-build, HTML 200, identity/gunzip, vendor.

[question]
已经上线，如何确认新架构生效

[try to solve]
验收清单：1) `GET /api/ops/pages-build` → `aligned:true` 且有 pagesCacheVersion（新接口，旧栈常 404）；2) `/` 与 `/tools/{slug}` 带 Accept:text/html 为 200，非工具 HTML 404；3) HTML 响应无 Worker 预置 Content-Encoding:gzip 乱码，浏览器 Accept-Encoding:gzip 时单层 gzip 可解且中文正常；4) `/vendor/*`、sitemap 200；5) 可选 dry-run/Dashboard 确认 Worker 包约数百 KiB。Agent 环境因代理无法代测生产，需本机 curl。

[actions]
- （说明；生产探针在 agent 侧 403）
