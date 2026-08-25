Date: 2026-08-09 22:17
Summary: Prefixed SEO-value opening sentences on nine more SEO tools across 10 locales, rewritten per local search phrasing.

[question]
上面的seo工具对seo的作用需要在描述中体现出来，注意各个语言需要符合用户语言习惯
（延续对 on-page-seo-checker 的处理，用户确认应用到其余 SEO 工具）

[try to solve]
For the remaining nine S1/S2 SEO tools, independently rewrote `tool_<x>_description` (page meta) and `tool_<x>_home_desc` (home card) per locale with SEO impact as the lead sentence—not English calques:

- meta-serp-preview: truncated titles cost search clicks (en “Titles that get cut off cost clicks in search”; zh native equivalent)
- schema-jsonld-generator: structured data helps Google understand the page and compete for richer SERP
- robots-txt-generator: bad rules can drop the whole site from search
- sitemap-xml-generator: helps Google discover and index pages faster
- website-headers: HTTP headers control crawl/cache/index; a wrong X-Robots-Tag can block indexing
- open-graph-preview: missing image/title wastes share clicks and forwards
- utm-builder: clean tagging attributes SEO/marketing spend
- hreflang-generator: avoids translation pages treated as duplicates so the right language is indexed
- meta-tag-generator: title/description are the search business card; wrong canonical splits ranking

Companion updates: nine `work-tasks/*/02-tool-info.md` SEO Description lines; nine `03-locale-briefs.md` multipass rows “5 description SEO-value enhance” (a script that used backticks corrupted some shell lines; fixed one by one).

Verification: ten tools (including on-page-seo-checker) have matching 10-locale keysets; `merge:tools` OK (124 / 10); aggregated home_desc live; nine zh meta descriptions include the SEO-value lead; `build:site` and `lint:seo` OK (0 inbound warn, no param-enum title).

[actions]
- Nine tools’ `src/site/i18n/tools/<slug>/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts` tool_<x>_description and tool_<x>_home_desc
- Nine `work-tasks/<slug>/02-tool-info.md`, `03-locale-briefs.md`
- Ran `npm run merge:tools`, `npm run build:site`, `npm run lint:seo`
