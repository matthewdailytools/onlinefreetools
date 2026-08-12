Date: 2026-08-12 20:27
Summary: Compared two multilingual sitemap patterns; Google requires each locale as its own url entry with full reciprocal hreflang.

[question]
分析seo的sitemap 上能按照 en为主语言，其他rel="alternate" hreflang="en" 进行提交；和每个语言这么呈现一次；这两种方式，那种方式最符合谷歌seo

[try to solve]
按 Google Search Central「Localized versions」Sitemap 规则：有 N 个语种版本就要有 N 个 `<url>`，且每个 `<url>` 内挂同一套完整 `xhtml:link`（含自引用与互指）。因此「每种语言各呈现一次 + 全量 hreflang」最符合官方；「仅 en 作 loc、他语只写 alternate」不符合官方示例，他语发现/索引信号更弱，也易缺双向互指。本站 `public/sitemap.xml` / `scripts/site/sitemap.mjs` 已是正确做法。

[actions]
- 查阅 Google localized-versions 文档与本站 sitemap 实现对照
