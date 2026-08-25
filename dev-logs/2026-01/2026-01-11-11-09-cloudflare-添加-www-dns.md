Date: 2026-01-11 11:09
Summary: Documented adding a www DNS record in Cloudflare (CNAME to apex or Pages).

[question]
how cloudfare setting: add www domain  dns setting

[try to solve]
Goal: make `www.example.com` resolve.

### A (common/recommended): CNAME www → apex
1) Cloudflare Dashboard → site → DNS → Records → Add record.
2) Fields:
- Type: CNAME
- Name: `www`
- Target: `example.com` (or `@` if the UI allows)
- Proxy status: Proxied (orange cloud, usually recommended)
- TTL: Auto
3) Save; wait a few minutes for propagation.

### B (Cloudflare Pages): CNAME www → `xxx.pages.dev`
- Type: CNAME
- Name: `www`
- Target: `<your-project>.pages.dev`
- Proxy: Proxied/Auto per Pages guidance
Also add `www.example.com` as a Custom Domain on the Pages project (Cloudflare configures/validates).

### Common issues
- DNS only but still unreachable: check SSL/TLS and whether the origin accepts that Host.
- If you already 301 www → apex, still keep the www DNS record so clients can resolve before the redirect.
