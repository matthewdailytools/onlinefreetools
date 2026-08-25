Date: 2026-08-09 17:48
Summary: Delivered an SEO/webmaster tools market survey and a buildable checklist for this site.

[question]
调研网站seo工具，例如：Performance Metrics等，写一份调研报告，以及本站能制作那些工具

[try to solve]
Free SEO tool sites are highly homogeneous: generators (meta/robots/schema/sitemap/OG/UTM) + single-page checkers + Performance (almost all wrap PageSpeed Insights) + content/pseudo-ranking (density, DR, llms.txt).

This site already has website-headers, domain-lookup, add-www-to-dns, and indexnow; most checklist SEO core pages (meta-serp-preview and peers) were not started yet.

Recommendation: S1 ship the closed loop (SERP preview → Schema → robots/sitemap); S2 UTM/hreflang/OG; S3 CWV as a PSI API wrapper (do not invent fake scores). Do not build llms.txt, Ahrefs DR, keyword-density matrices, or full-site crawler SaaS.

Full report: `docs/2026-08-09-seo-webmaster-tools-survey.md`; canvas: `canvases/seo-webmaster-tools-survey.canvas.tsx`.

[actions]
- docs/2026-08-09-seo-webmaster-tools-survey.md
- canvases/seo-webmaster-tools-survey.canvas.tsx (Cursor side)
