Date: 2026-08-08 10:45
Summary: Sync ten-locale IP tool i18n and clarify IPv4/IPv6 capability (detect one, not dual-stack both).

[question]
同步优化其他语言的页面，并确定是否实现ipv4、Ipv6的获取

[try to solve]
## Multilingual sync (ten locales)

Synced IP tool copy to the en/zh structure: `title` includes IPv4/IPv6 intent; `description` states “this connection shows IPv4 or IPv6”; `use cases`×3; `FAQ`×5 (including “cannot get both v4 and v6 at once”); added `ip_version_ipv4` / `ip_version_ipv6` UI keys. Completed previously unfinished **ar / ru / id**. Home cards in `scripts/site/i18n.mjs` aligned for all ten locales (`tool_ip_address_title` / `tool_ip_address_desc`). `npm run lint:seo` passed.

## IPv4 / IPv6 capability conclusion

| Capability | Status |
|------|------|
| Return this connection’s public IP | Done (`CF-Connecting-IP`, etc.) |
| Detect and label IPv4 or IPv6 | Done (API returns `{ ip, version }`; page shows badge) |
| Get **both** dual-stack addresses at once | **Not implemented** (a single HTTP request only sees one path’s address) |

FAQ and description already state: dual-stack users may see a different family after refresh or network change; side-by-side v4+v6 would need a separate project (WebRTC STUN, separate v4-only/v6-only endpoints, or third-party APIs — privacy and complexity cost).

[actions]
- src/endpoints/ipAddress.ts — normalizeClientIp, detectIpVersion, response version field
- src/pages/ipAddressPage.ts — IPv4/IPv6 badge beside result
- src/site/i18n/*.ts (ten locales) — title/description/FAQ/use cases/version keys
- scripts/site/i18n.mjs — home card title/desc sync
