Date: 2026-08-07 06:15
Summary: Implemented add-www-to-dns with a record generator, DoH lookup, and G1–G7 provider guides.

[question]
实现 add-www-to-dns

[try to solve]
Shipped `/tools/add-www-to-dns` in ten locales.

**Features**
- Three record schemes: apex A + www CNAME / dual A/AAAA / CDN hostnames
- Generated table + copyable text; optional DoH lookup via `GET /api/tools/dns-lookup`
- Same-page G1–G7 provider guides (generic panel, Cloudflare, Route 53, Vercel, Netlify, Alibaba Cloud, self-hosted VPS)
- Related: website-headers, ip-address

**Verification**
- `npm run build:site` (sitemap 160 URLs)
- `npm run lint:seo` passed

[actions]
- Added `src/pages/addWwwToDnsPage.ts`, `src/endpoints/dnsLookup.ts`
- Updated `src/index.ts`, `src/site/tool-catalog.json`, `src/site/i18n/*.ts`, `scripts/site/i18n.mjs`, `README.md`
- Set `work-tasks/add-www-to-dns/02-tool-info.md` to `implemented`
