Date: 2026-08-09 19:05
Summary: Surveyed seaocean.io/features (SEO+GEO audit SaaS) and folded findings into the SEO tools inventory.

[question]
调研 https://seaocean.io/features 的工具，整合到seo工具中清单中

[try to solve]
SeaOcean is a single-subscription SaaS (Free / Pro $19 / Agency $49, peers SEMrush/Ahrefs/SE Ranking). Product = instant SEO Audit (140+ checks) + GEO marketing (AI visibility, /aiseo, /free-geo-audit). The 142 checks break down into Basic SEO (Title/Meta/H1/Canonical), Social & OG (og:*/Twitter Card), Technical (HTTPS/sitemap/robots/mixed content), Performance (page size/compression/cache headers/render-blocking); GEO side includes llms.txt Generator, AI SoV, 9 GEO factors, and AI citation-rate narrative.

Site decision: absorb the single-page checker shape and check dictionary → inventory §6 adds **`on-page-seo-checker`** (P2: paste URL/HTML → H1, canonical, meta quality, OG/Twitter, JSON-LD detection, mixed content, render-blocking summary + fix tips; merge the former canonical-check candidate so one tool covers many scenes without thin pages). Explicitly **do not** build: llms.txt generator (Google says it can be ignored), GEO Score / AI SoV / citation-rate promises (black box, no first-party data), full-site crawl audit/monitor/rank/PDF SaaS (wrong product shape), or nine factors as separate pages (people-first bits fold into seo-launch-checklist, not branded GEO). Synced survey doc §§1.4 / 2.2 / 3.2 / 3.3 / 5 / 8 / 9.

[actions]
- docs/competitor-refs/seaocean-2026-08-09/README.md (new snapshot: feature list + decision matrix + capability absorb matrix)
- docs/2026-08-09-seo-webmaster-tools-survey.md (§1.4 SeaOcean, §2.2/§3.2 add on-page-seo-checker, §3.3/§8 bans, §5 schedule, §9 status)
- docs/2026-08-08-tool-inventory-table.md (§6 add on-page-seo-checker=78, renumber §§7–10 to 79–159, stats 1–159 / P2 ~81)
