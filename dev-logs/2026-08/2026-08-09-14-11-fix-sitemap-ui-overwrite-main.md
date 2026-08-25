Date: 2026-08-09 14:11
Summary: Fixed sitemap ops UI overwrite-main target path (dry-run + live hint).

[question]
覆盖主文件选项不起作用

[try to solve]
Fixed. Root cause: dry-run preview API always returned `outFile` as `null`, and results used `mode=filtered` for content filtering, which looked like writes still went to the filtered file; the “full” preset also stuck overwrite checked as true.

Changes:
- Server `resolveOutFile`: preview and live both return the resolved target path and `overwriteMain`
- Ops UI shows live “current target” path; results separate “content=filtered/full” from “target=…”
- “Full” preset no longer checks overwrite main (full already writes the main file)

Restart `npm run sitemap:ui` to verify: filter + overwrite checked → target should be `public/sitemap.xml`.

[actions]
- Updated `ops/seo/sitemap-ui.mjs`, `ops/seo/sitemap-ui.html`
