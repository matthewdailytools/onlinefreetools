Date: 2026-08-13 07:57
Summary: Explain cfOrigin dur=0: no HTTP origin fetch; R2/Assets bindings not counted.

[question]
origin 仍为 0的含义

[try to solve]
`server-timing: … cfOrigin;dur=0` 表示本次请求在 Cloudflare 计时里**没有对「HTTP Origin」发起回源 fetch**（或耗时记为 0）。对本站：工具页冷路径是 Worker 内 R2 绑定 `get` + gunzip，首页可走 ASSETS 绑定；这些是 Worker binding，一般**不计入** cfOrigin。因此 HIT 时 origin=0 正常；miss 时也可能仍是 0（只打了 R2/Assets，没打传统源站 URL）。cfOrigin>0 才更像 Worker/`fetch` 打了外部/源站主机。不要把 origin=0 理解成「没读任何存储」——读 R2/Cache/Assets 的时间在 `cfWorker` 里。

[actions]
- （只读解释）
