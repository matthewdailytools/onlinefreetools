Date: 2026-08-12 21:31
Summary: Confirmed per-locale `<url>` + full hreflang in one sitemap meets Google; file-split by language optional, not required at current size.

[question]
分语言生成@public/sitemap.xml 是否符合要求

[try to solve]
符合——若「分语言」指每个语种各有一条 `<url>`/`<loc>`，且每条内挂完整互指 `xhtml:link`（含自引用与 `x-default`）。这正是 Google Localized versions 官方 Sitemap 示例；本站 `scripts/site/sitemap.mjs` → `public/sitemap.xml`（约 1470 URL / 2MB）已是该形态。

若指拆成 `sitemap-en.xml` 等多文件 + sitemap index：协议允许，但当前远低于 5 万 URL / 50MB 上限，**非必需**；拆分时每文件内仍须写全量语种 hreflang，不能只挂本语。

若指生产只提交某一语筛选版：不符合——会破坏双向互指；筛选仅用于运维旁路（`sitemap.filtered.xml`），发版以全量 `sitemap.xml` 为准。

[actions]
- 对照 Google Search Central localized-versions 与 `scripts/site/sitemap.mjs` / `public/sitemap.xml`
