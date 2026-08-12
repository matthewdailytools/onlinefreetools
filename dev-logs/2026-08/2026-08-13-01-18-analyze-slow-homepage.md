Date: 2026-08-13 01:18
Summary: Homepage slowness mainly large HTML (~192KB) + 125 icons + R2/cache miss TTFB.

[question]
首页打开较缓慢，分析原因

[try to solve]
首页 HTML ~192KB（124 工具卡、125 个 SVG img、重复引入 bootstrap/font CSS）；Worker 对外先出明文再边缘压缩，Cache miss 时还有 R2 get+gunzip。本机 TTFB~8ms；生产抽样 TTFB~1.0s、total~2.8s（未压缩体）。主因是页面体量大与首包链路，非单纯 Worker 包。优化方向：首屏精简卡片/分页、去重 CSS、确认 Cache HIT、或评估流式/预压缩协商。

[actions]
- （只读分析）
