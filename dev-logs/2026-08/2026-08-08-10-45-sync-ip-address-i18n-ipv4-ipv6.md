Date: 2026-08-08 10:45
Summary: Sync ten-locale IP tool i18n and clarify IPv4/IPv6 capability (detect one, not dual-stack both).

[question]
同步优化其他语言的页面，并确定是否实现ipv4、Ipv6的获取

[try to solve]
## 多语言同步（十语）

已按 en/zh 结构完成 IP 工具文案同步：`title` 含 IPv4/IPv6 检索意图；`description` 说明「本次连接可见 IPv4 或 IPv6」；`use cases`×3；`FAQ`×5（含「不能同时获得 v4 与 v6」）；新增 `ip_version_ipv4` / `ip_version_ipv6` UI 键。补全此前未完成的 **ar / ru / id**。首页卡片 `scripts/site/i18n.mjs` 十语 `tool_ip_address_title` / `tool_ip_address_desc` 已对齐。`npm run lint:seo` 通过。

## IPv4 / IPv6 实现结论

| 能力 | 状态 |
|------|------|
| 返回本次连接的公网 IP | ✅ 已实现（`CF-Connecting-IP` 等） |
| 识别并标注 IPv4 或 IPv6 | ✅ 已实现（API 返回 `{ ip, version }`，页面显示 badge） |
| **同时**获取双栈两个地址 | ❌ **未实现**（单次 HTTP 请求只能看到一条路径上的地址） |

FAQ 与 description 已明确：双栈用户刷新或换网络后结果可能切换；若需并列显示 v4+v6 需另立项（WebRTC STUN、分别走 v4-only/v6-only 端点或第三方 API，有隐私与复杂度成本）。

[actions]
- src/endpoints/ipAddress.ts — normalizeClientIp、detectIpVersion、响应 version 字段
- src/pages/ipAddressPage.ts — 结果旁 IPv4/IPv6 badge
- src/site/i18n/*.ts（十语）— title/description/FAQ/use cases/version 键
- scripts/site/i18n.mjs — 首页卡片 title/desc 同步
