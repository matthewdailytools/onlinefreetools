Date: 2026-08-08 10:52
Summary: Add lightweight region/ISP display from Cloudflare request.cf on IP tool.

[question]
做轻量版（只读 request.cf、不引第三方）

[try to solve]
已实现轻量版地区/运营商展示：

- **API**（`src/endpoints/ipAddress.ts`）：新增 `extractCfGeoIsp()`，响应 `{ ip, version, geo, isp }`；`geo` 含 country/region/regionCode/city/timezone；`isp` 含 organization/asn。只读 `request.cf`，无第三方 geo API。
- **页面**（`src/pages/ipAddressPage.ts`）：结果卡片增加大致地区、时区、网络/ISP 行及 disclaimer 说明。
- **十语 i18n**：新增 `ip_location_label`、`ip_timezone_label`、`ip_isp_label`、`ip_geo_unknown`、`ip_isp_unknown`、`ip_geo_note`；更新 description/article/how/rules/example；FAQ q6 说明精度与 VPN 局限。

`npm run lint:seo` 通过。仍为近似信息，非精确定位或查任意 IP。

[actions]
- src/endpoints/ipAddress.ts
- src/pages/ipAddressPage.ts
- src/site/i18n/*.ts（十语）
