Date: 2026-08-07 06:09
Summary: Extended add-www-to-dns brief with same-page multi-provider scenario guides (G1–G7).

[question]
应该增加不同场景/云服务商的操作教程

[try to solve]
已更新立项：在同页增加 **Provider / scenario guides**（`#guides`），不拆近义 URL。

**MVP 教程清单（G1–G7）**
1. 通用 DNS 面板（注册商）
2. Cloudflare DNS（flattening / 橙云）
3. AWS Route 53（ALIAS）
4. Vercel Domains
5. Netlify
6. 阿里云解析 DNS
7. 自建 VPS（Nginx/Caddy + 301）

每篇统一结构：适用何时 → 推荐方案 → 面板步骤 → 字段对照 → 注意点 → 官方文档链。G8 Google Cloud DNS 可二期。

工期粗估调整为 ~1–1.5d。`02` 仍为 `ready`。

[actions]
- Updated `work-tasks/add-www-to-dns/01-direction-discussion.md`
- Updated `work-tasks/add-www-to-dns/02-tool-info.md`
- Updated `work-tasks/add-www-to-dns/03-locale-briefs.md`
