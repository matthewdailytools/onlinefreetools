Date: 2026-08-08 10:42
Summary: Explained browser JS limits for dual-stack IPv4+IPv6 public IP detection.

[question]
能否js本地实现获取ipv4 ipv6

[try to solve]
**不能**用纯浏览器 JS「本地算出来」公网 IPv4 和 IPv6——没有 `navigator` 一类 API 能直接读公网出口。

可行路径与局限：

1. **WebRTC + STUN（页面内 JS）**：通过 ICE `srflx` 候选间接暴露出口 IP。现代 Chrome/Firefox/Safari 已大幅限制（mDNS、候选过滤、指纹隐私），**双栈同时拿 v4+v6 不可靠**，且易被视为指纹采集，不适合本站 people-first 定位。

2. **并行请求 v4-only / v6-only 主机（推荐若要做双栈）**：例如 `v4.example.com` 仅 A、`v6.example.com` 仅 AAAA，各 hit 一次 Worker 返回 `{ ip }`。浏览器须分别走 IPv4/IPv6 路径——**仍非纯本地**，但可自控、无第三方。同域名连打两次无效（Happy Eyeballs 通常只走一条路径）。

3. **第三方 API**（ipify 等）：实现简单，有外部依赖与隐私披露成本。

**结论**：若产品要并列显示 v4+v6，建议 v4-only/v6-only 双子域 + 现有 API；不建议 WebRTC 方案。当前单连接 `{ ip, version }` 实现已诚实反映边缘所见。

[actions]
- （问答-only，无代码改动）
