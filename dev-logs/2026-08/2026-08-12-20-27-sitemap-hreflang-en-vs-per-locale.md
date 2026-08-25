Date: 2026-08-12 20:27
Summary: Compared two multilingual sitemap patterns; Google requires each locale as its own url entry with full reciprocal hreflang.

[question]
分析seo的sitemap 上能按照 en为主语言，其他rel="alternate" hreflang="en" 进行提交；和每个语言这么呈现一次；这两种方式，那种方式最符合谷歌seo

[try to solve]
Per Google Search Central “Localized versions” Sitemap rules: N language versions require N `<url>` entries, and each `<url>` must carry the same full set of `xhtml:link` annotations (including self-reference and reciprocal links). Therefore “one entry per language + full hreflang” matches the official pattern; “only en as loc, other languages as alternate only” does not match the official examples, weakens discovery/indexing signals for other locales, and risks missing bidirectional annotations. This site’s `public/sitemap.xml` / `scripts/site/sitemap.mjs` already follow the correct approach.

[actions]
- Cross-checked Google localized-versions docs against this site’s sitemap implementation
