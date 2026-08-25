Date: 2026-08-09 22:03
Summary: Prefixed on-page-seo-checker descriptions in all 10 locales with an SEO-value opening sentence tailored to each language.

[question]
上面的seo工具对seo的作用需要在描述中体现出来，注意各个语言需要符合用户语言习惯

[try to solve]
Independently rewrote on-page-seo-checker `tool_onpage_description` (page meta/H1 summary) and `tool_onpage_home_desc` (home card) per locale so the SEO impact leads the copy—not an English calque.

- en lead: Weak titles, missing meta descriptions, duplicate H1s and broken canonicals quietly cost rankings and clicks.
- zh lead: 标题偏弱、meta 描述缺失、重复 H1 或 canonical 配置错误，都会悄悄拖累搜索排名与点击。
- es/ja/ar/pt/id/fr/ru/de each rewritten for local phrasing of ranking/clicks; kept check list, local-processing note, and examples.
- Synced `work-tasks/on-page-seo-checker/02-tool-info.md` SEO card Title/Description points and `03-locale-briefs.md` multipass log (new row: description SEO-value enhance).
- Verification: `npm run merge:tools` (124 tools / 10 locales); aggregated home_desc live; zh/en meta descriptions include the SEO-value lead; `lint:seo` OK (0 inbound warn, no param-enum title); `build:site` OK.

[actions]
- `src/site/i18n/tools/on-page-seo-checker/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts` tool_onpage_description and tool_onpage_home_desc
- `work-tasks/on-page-seo-checker/02-tool-info.md`, `03-locale-briefs.md`
- Ran `npm run merge:tools`, `npm run build:site`, `npm run lint:seo`
