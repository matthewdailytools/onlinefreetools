Date: 2026-08-08 21:25
Summary: Implemented domain-lookup tool (DoH multi-type + RDAP), ten-locale i18n, build:site and coverage gates green.

[question]
开始实现

[try to solve]
已实现 `domain-lookup`（`02` → `implemented`，`03` → `i18n-done`）。

**API**
- 共享 DoH：`src/endpoints/dnsDoh.ts`（类型扩至 A/AAAA/CNAME/MX/NS/TXT/SOA）
- `dnsLookup.ts` 改用共享模块
- 新接口：`GET /api/tools/domain-lookup?name=&dns=&rdap=`（`domainLookup.ts`；IANA RDAP bootstrap + 分区失败降级）
- `src/index.ts` 注册路由

**页面 / catalog / i18n**
- `domainLookupPage.ts`：进页 `loadSample()` → `example.com`
- `tool-catalog.d/domain-lookup.json`（featured；related：add-www-to-dns / website-headers / ip-address）
- 十语 `i18n/tools/domain-lookup/*`；icon SVG
- README 中英条目；清单表序号 9 → 已上线

**验收**
- `coverage:gate --phase=all` OK
- `npm run build:site` OK（58 tools）
- `npm run lint:seo` OK
- `CROSS_TOOL_UPDATE=1 TOOL_SLUG=domain-lookup lint:tool-isolation` OK（含共享 endpoint / index；工作区另有无关脏文件）

本地网络对 `cloudflare-dns.com` DoH 可能 `fetch failed`；Worker 边缘通常可达。RDAP（Verisign）已本地冒烟 200。

[actions]
- 新增/改：`src/endpoints/dnsDoh.ts`、`domainLookup.ts`、`dnsLookup.ts`、`domainLookupPage.ts`、catalog/i18n/icon、`index.ts`、README、inventory、work-tasks
- `npm run build:site`；`coverage:gate --phase=all`；`lint:seo`
