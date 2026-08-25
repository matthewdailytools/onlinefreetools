Date: 2026-08-08 10:42
Summary: Explained browser JS limits for dual-stack IPv4+IPv6 public IP detection.

[question]
能否js本地实现获取ipv4 ipv6

[try to solve]
You **cannot** discover public IPv4 and IPv6 with pure browser JS “locally” — there is no `navigator`-style API that reads the public egress address.

Feasible paths and limits:

1. **WebRTC + STUN (in-page JS)**: ICE `srflx` candidates can indirectly expose egress IP. Modern Chrome/Firefox/Safari heavily restrict this (mDNS, candidate filtering, fingerprint privacy). Getting **both v4 and v6 reliably on dual-stack is unreliable**, and it often looks like fingerprinting — a poor fit for this site’s people-first positioning.

2. **Parallel hits to v4-only / v6-only hosts (preferred if dual-stack is required)**: e.g. `v4.example.com` A-only and `v6.example.com` AAAA-only, each hitting a Worker that returns `{ ip }`. The browser must take separate IPv4/IPv6 paths — **still not pure-local**, but self-hosted with no third party. Hitting the same hostname twice does not work (Happy Eyeballs usually picks one path).

3. **Third-party APIs** (ipify, etc.): easy to implement; external dependency and privacy disclosure cost.

**Conclusion**: If the product must show v4 and v6 side by side, use v4-only/v6-only dual hosts plus the existing API; do not use WebRTC. The current single-connection `{ ip, version }` response honestly reflects what the edge sees.

[actions]
- (Q&A only; no code changes)
