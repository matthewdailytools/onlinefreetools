Date: 2026-08-08 10:32
Summary: Optimized zh /tools/ip-address copy for CN search intent (public/WAN IP, router vs WAN, VPN/NAS use cases).

[question]
细分分析用户需求和搜索习惯，优化 https://onlinefreetools.org/zh/tools/ip-address

[try to solve]
### Chinese user segments and search habits
| Segment | Typical queries | Real need |
|---|---|---|
| Everyday users | my IP / IP address lookup | See current address in one click; few jargon terms |
| Router users | why different from 192.168 | Understand LAN vs public / WAN |
| VPN/proxy users | public/WAN IP, VPN IP | Confirm egress switched |
| Gaming/ops | allowlist, NAS, remote desktop | Report an allowlist-ready public IP to admins |

### Shipped (zh i18n)
- **Title**: IP address lookup — view my public IP (IPv4/IPv6); front-loads the high-frequency lookup phrasing
- **Description / body**: natural coverage of spoken “public/WAN IP”; 192.168 contrast; VPN/allowlist scenarios
- **FAQ ×5**: router IP mismatch → public/WAN → VPN → IPv4/IPv6 → privacy
- **Use cases**: NAS/game join, VPN check, cloud security groups
- **UI**: “My public IP” + refresh/lookup button labels in zh
- Synced home card in `scripts/site/i18n.mjs`; updated `work-tasks/ip-address/03-locale-briefs.md` zh brief

[actions]
- src/site/i18n/zh.ts
- scripts/site/i18n.mjs
- work-tasks/ip-address/03-locale-briefs.md
