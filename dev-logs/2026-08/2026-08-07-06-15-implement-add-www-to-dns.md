Date: 2026-08-07 06:15
Summary: Implemented add-www-to-dns tool with record generator, DoH lookup, and G1–G7 provider guides.

[question]
实现 add-www-to-dns

[try to solve]
已实现 `/tools/add-www-to-dns`（十语）。

**功能**
- 三种记录方案：根域 A + www CNAME / 双 A/AAAA / CDN 主机名
- 生成表格 + 可复制文本；可选 DoH 查询（`GET /api/tools/dns-lookup`）
- 同页 G1–G7 服务商教程（通用面板、Cloudflare、Route 53、Vercel、Netlify、阿里云、自建 VPS）
- Related：website-headers、ip-address

**验证**
- `npm run build:site`（sitemap 160 URL）
- `npm run lint:seo` 通过

[actions]
- Added `src/pages/addWwwToDnsPage.ts`, `src/endpoints/dnsLookup.ts`
- Updated `src/index.ts`, `src/site/tool-catalog.json`, `src/site/i18n/*.ts`, `scripts/site/i18n.mjs`, `README.md`
- Set `work-tasks/add-www-to-dns/02-tool-info.md` to `implemented`
