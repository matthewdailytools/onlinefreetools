Date: 2026-08-08 10:52
Summary: Add lightweight region/ISP display from Cloudflare request.cf on IP tool.

[question]
做轻量版（只读 request.cf、不引第三方）

[try to solve]
Shipped lightweight region/ISP display:

- **API** (`src/endpoints/ipAddress.ts`): added `extractCfGeoIsp()`; response `{ ip, version, geo, isp }`; `geo` has country/region/regionCode/city/timezone; `isp` has organization/asn. Reads only `request.cf`; no third-party geo API.
- **Page** (`src/pages/ipAddressPage.ts`): result card adds approximate region, timezone, network/ISP rows plus disclaimer copy.
- **Ten-locale i18n**: added `ip_location_label`, `ip_timezone_label`, `ip_isp_label`, `ip_geo_unknown`, `ip_isp_unknown`, `ip_geo_note`; updated description/article/how/rules/example; FAQ q6 covers accuracy and VPN limits.

`npm run lint:seo` passed. Still approximate info — not precise location or lookup of arbitrary IPs.

[actions]
- src/endpoints/ipAddress.ts
- src/pages/ipAddressPage.ts
- src/site/i18n/*.ts (ten locales)
