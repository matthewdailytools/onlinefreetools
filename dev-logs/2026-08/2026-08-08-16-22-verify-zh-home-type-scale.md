Date: 2026-08-08 16:22
Summary: Verified localhost /zh/ type scale hierarchy PASS; CSS tokens and new card classes live.

[question]
核查：http://localhost:8788/zh/

[try to solve]
Requested `/zh/` with browser-like `Accept: text/html` → 200; `site.css` and bootstrap/fonts vendor 200. Measured ladder: Hero 30–36 → section 22–24 → category 20 → Why/featured-card titles 17 → category cards 16 → body 15 → muted 14 → pill 12 — ORDER PASS. HTML no longer uses h5/h6/small for size. Note: curl without `text/html` in Accept gets 404 by design; browsers work normally.

[actions]
