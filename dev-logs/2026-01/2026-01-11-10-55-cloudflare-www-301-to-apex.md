Date: 2026-01-11 10:55
Summary: Documented Cloudflare Redirect Rules to 301 www to the apex (non-www) domain.

[question]
how cloudfare setting: www domain 301 redirect to none www domain

[try to solve]
Prefer Cloudflare Redirect Rules to permanently redirect `www.example.com` to `example.com`, preserving path and query string.

Prerequisites
- DNS: `www` must resolve (usually `CNAME www → example.com` or A/AAAA), proxied (orange cloud) so redirect rules apply.
- SSL/TLS: HTTPS available (typically Full or Full (strict)).

### A. Redirect Rules (recommended)
1) Cloudflare Dashboard → site → Rules → Redirect Rules.
2) Create rule.
3) When incoming requests match…
- Field: `Hostname`
- Operator: `equals`
- Value: `www.example.com`
4) Then…
- Action: Static redirect
- URL: `https://example.com/$1`
- Status: `301`
- Preserve query string (or equivalent)
- Preserve path / Dynamic as needed so the original path is kept (UI labels vary; goal is keep path).
5) Save and place the rule early (above other rewrite/redirect rules).

### B. Bulk Redirects (optional, many mappings)
1) Rules → Bulk Redirects → Create.
2) List entries such as:
- Source: `http://www.example.com/*` and `https://www.example.com/*`
- Target: `https://example.com/$1`
- Status: 301
3) Create and enable the Bulk Redirect rule.

Self-test: `https://www.example.com/some/path?x=1` should 301 to `https://example.com/some/path?x=1`.
