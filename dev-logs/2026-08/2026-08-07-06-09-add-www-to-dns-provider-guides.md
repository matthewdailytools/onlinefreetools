Date: 2026-08-07 06:09
Summary: Extended the add-www-to-dns brief with same-page multi-provider scenario guides (G1–G7).

[question]
应该增加不同场景/云服务商的操作教程

[try to solve]
The brief now includes **Provider / scenario guides** on the same page (`#guides`), without near-duplicate URLs.

**MVP guide list (G1–G7)**
1. Generic DNS panel (registrar)
2. Cloudflare DNS (flattening / orange-cloud)
3. AWS Route 53 (ALIAS)
4. Vercel Domains
5. Netlify
6. Alibaba Cloud DNS
7. Self-hosted VPS (Nginx/Caddy + 301)

Each guide follows one structure: when it applies → recommended approach → panel steps → field mapping → caveats → official docs. G8 Google Cloud DNS can wait for a later phase.

Rough effort estimate adjusted to ~1–1.5d. `02` remains `ready`.

[actions]
- Updated `work-tasks/add-www-to-dns/01-direction-discussion.md`
- Updated `work-tasks/add-www-to-dns/02-tool-info.md`
- Updated `work-tasks/add-www-to-dns/03-locale-briefs.md`
