Date: 2026-08-08 21:25
Summary: Implemented domain-lookup tool (DoH multi-type + RDAP), ten-locale i18n, build:site and coverage gates green.

[question]
开始实现

[try to solve]
Implemented `domain-lookup` (`02` → `implemented`, `03` → `i18n-done`).

**API**
- Shared DoH: `src/endpoints/dnsDoh.ts` (types extended to A/AAAA/CNAME/MX/NS/TXT/SOA)
- `dnsLookup.ts` switched to the shared module
- New endpoint: `GET /api/tools/domain-lookup?name=&dns=&rdap=` (`domainLookup.ts`; IANA RDAP bootstrap + per-section degrade on failure)
- Routes registered in `src/index.ts`

**Page / catalog / i18n**
- `domainLookupPage.ts`: on-enter `loadSample()` → `example.com`
- `tool-catalog.d/domain-lookup.json` (featured; related: add-www-to-dns / website-headers / ip-address)
- Ten-locale `i18n/tools/domain-lookup/*`; icon SVG
- README EN/ZH entries; inventory row 9 → shipped

**Verification**
- `coverage:gate --phase=all` OK
- `npm run build:site` OK (58 tools)
- `npm run lint:seo` OK
- `CROSS_TOOL_UPDATE=1 TOOL_SLUG=domain-lookup lint:tool-isolation` OK (shared endpoint / index; unrelated dirty files in the workspace)

Local network may `fetch failed` against `cloudflare-dns.com` DoH; Worker edge is usually reachable. RDAP (Verisign) smoked locally with HTTP 200.

[actions]
- Added/updated: `src/endpoints/dnsDoh.ts`, `domainLookup.ts`, `dnsLookup.ts`, `domainLookupPage.ts`, catalog/i18n/icon, `index.ts`, README, inventory, work-tasks
- `npm run build:site`; `coverage:gate --phase=all`; `lint:seo`
