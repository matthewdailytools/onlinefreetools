Date: 2026-08-08 10:32
Summary: Optimized zh /tools/ip-address copy for CN search intent (外网/公网, router vs WAN, VPN/NAS use cases).

[question]
细分分析用户需求和搜索习惯，优化 https://onlinefreetools.org/zh/tools/ip-address

[try to solve]
### 中文用户分层与检索习惯
| 人群 | 典型搜法 | 真正需求 |
|---|---|---|
| 普通用户 | 我的IP、IP地址查询、查IP | 一键看到当前地址，少术语 |
| 路由器用户 | 为什么和192.168不一样 | 理解内网 vs 公网/外网 |
| VPN/代理用户 | 外网IP、VPN IP | 确认出口是否切换 |
| 联机/运维 | 白名单、NAS、远程桌面 | 向管理员报可放行的公网 IP |

### 已落地（zh i18n）
- **Title**：`IP 地址查询 — 查看我的公网 IP（IPv4/IPv6）`（前置高频词「IP 地址查询」）
- **Description / 正文**：自然覆盖「外网 IP」口语；192.168 对比；VPN/白名单场景
- **FAQ ×5**：路由器 IP 差异 → 公网/外网 → VPN → IPv4/IPv6 → 隐私
- **Use cases**：NAS/游戏联机、VPN 验证、云安全组
- **UI**：`我的公网 IP` + `刷新查询`
- 同步 `scripts/site/i18n.mjs` 首页卡片；更新 `work-tasks/ip-address/03-locale-briefs.md` zh brief

[actions]
- src/site/i18n/zh.ts
- scripts/site/i18n.mjs
- work-tasks/ip-address/03-locale-briefs.md
