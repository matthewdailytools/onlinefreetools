Date: 2026-08-12 21:31
Summary: Confirmed per-locale `<url>` + full hreflang in one sitemap meets Google; file-split by language optional, not required at current size.

[question]
分语言生成@public/sitemap.xml 是否符合要求

[try to solve]
Compliant — if “per language” means each locale has its own `<url>`/`<loc>`, and each entry carries the full reciprocal `xhtml:link` set (including self-reference and `x-default`). That matches Google Localized versions Sitemap examples; this site’s `scripts/site/sitemap.mjs` → `public/sitemap.xml` (~1470 URLs / 2MB) already uses that shape.

If it means splitting into `sitemap-en.xml` etc. plus a sitemap index: allowed by the protocol, but we are far below the 50k URL / 50MB limits, so **not required**; each split file must still list the full locale hreflang set, not only its own language.

If it means shipping only one locale’s filtered build: **not compliant** — it breaks bidirectional annotations; filtered output is ops-only (`sitemap.filtered.xml`); release uses full `sitemap.xml`.

[actions]
- Cross-checked Google Search Central localized-versions against `scripts/site/sitemap.mjs` / `public/sitemap.xml`
