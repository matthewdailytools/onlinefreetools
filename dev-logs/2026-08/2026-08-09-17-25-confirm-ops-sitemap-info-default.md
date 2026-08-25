Date: 2026-08-09 17:25
Summary: Confirmed ops sitemap CLI and UI already default to excluding info pages, matching core site behavior.

[question]
ops中的sitemap生成是否同步修改了

[try to solve]
Yes. Ops is aligned with core: the CLI (`generate-sitemap.mjs`), ops UI (`sitemap-ui.html` / `sitemap-ui.mjs`), and `ops/README` all exclude about/privacy/terms/contact by default. Those URLs are included only when the UI checkbox or `--info` is set, and that counts as an explicit filter.

[actions]
- Read-only check of ops/seo/* and ops/README.md
