Date: 2026-08-13 01:18
Summary: Homepage slowness is mainly large HTML (~192KB), 125 icons, and R2/cache-miss TTFB.

[question]
首页打开较缓慢，分析原因

[try to solve]
Home HTML is ~192KB (124 tool cards, 125 SVG imgs, duplicated bootstrap/font CSS). The Worker emits plaintext outward and relies on edge compression; on cache miss there is also R2 get + gunzip. Local TTFB ~8ms; a production sample showed TTFB ~1.0s and total ~2.8s (uncompressed body). Main causes are page weight and first-byte path, not Worker bundle size alone. Directions: trim first-screen cards/pagination, dedupe CSS, confirm Cache HIT, or evaluate streaming / precompressed negotiation.

[actions]
- Read-only analysis
