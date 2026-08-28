Date: 2026-08-28 18:55
Summary: Shipped terraform-cidrsubnet: in-browser HashiCorp-aligned cidrsubnet (plus below-fold cidrhost/cidrnetmask), official 10.1.2.240/28 sample on load, and a template-escape fix so result placeholders actually fill.

[question]
实现 terraform-cidrsubnet

[try to solve]
Implemented `/tools/terraform-cidrsubnet` from the Session A brief. Catalog style must be `opts` (not `pair`) so prerender passes `{ lang, defaultLang, enabledLangs }`. The first screen evaluates `cidrsubnet(prefix, newbits, netnum)` only; `cidrhost` and `cidrnetmask` sit in a below-fold `<details>`. Load sample is HashiCorp’s IPv4 worked example: `cidrsubnet("10.1.2.0/24", 4, 15)` → `10.1.2.240/28`. Out-of-range netnum errors instead of emitting a wrong CIDR; `cidrnetmask` rejects IPv6; IPv4 leading zeros parse as decimal.

A real bug: `extraBodyHtml` is a TypeScript template literal, so `/{(\w+)}/g` compiled to `/{(w+)}/g` and `{max}` / bit-split copy never substituted. The regex is now `/{(\\w+)}/g` in source so the HTML contains a real `\w`. Engine checks (official IPv4, `172.16.0.0/12`+4+2, IPv6 ULA, `cidrhost(..., -2)`, netnum 16, IPv6 netmask) all match. `coverage:gate --phase=all` green. `lint:seo` only warns that this slug has no inbound related links (expected; no CROSS_TOOL_UPDATE). Isolation vs `origin/main` still fails on pre-existing CIDR keyword docs and Bing SERP `__pycache__`, not on other tools’ shards. Local tool URL returns 200 with the sample and fixed fill regex; homepage disk HTML includes the card (Worker Cache API may still serve an older home until purged).

[actions]
- Added catalog shard, `terraformCidrsubnetPage.ts`, ten locale shards, SVG icon, README ZH/EN list entries
- Marked `work-tasks/terraform-cidrsubnet/02-tool-info.md` implemented; `03` i18n-done
- merge:tools, prerender/gzip this slug, coverage:gate phase=all, lint:seo
