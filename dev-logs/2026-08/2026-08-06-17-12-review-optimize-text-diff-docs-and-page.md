Date: 2026-08-06 17:12
Summary: Reviewed text-diff work-tasks and page against latest SEO/localization rules; filled locale briefs and improved IG, privacy, and structure.

[question]
按照最新的规则策略，review和优化text-diff的立项文档以及生成的text-diff工具的页面

[try to solve]
Reviewed against `seo-google-policy` / `tool-creation` / `tool-i18n-localization` and landed:

**Work-tasks**
- Added missing `work-tasks/text-diff/03-locale-briefs.md` (ten-locale search terms, button labels, ban-list checks, ≥3-round log; ar/ja/ru marked pending native review)
- Rewrote `02-tool-info.md` for Google-first, honest CDN library loading, IG dims 4/7, README acceptance, module order
- Updated `01` conclusion to shipped + pointer to `03`

**Page / i18n**
- Rules became a structured three-mode comparison list (fit and risks)
- First-screen presets use per-locale `sample_a` / `sample_b`; added green/red legend
- References moved after FAQ/Related
- How + FAQ privacy: distinguish “pasted text is not uploaded” vs “jsdiff may load from CDN”
- Localized Example samples in all ten languages (dropped isomorphic Hello world)
- `npm run lint:seo` passed

[actions]
- work-tasks/text-diff/01-direction-discussion.md
- work-tasks/text-diff/02-tool-info.md
- work-tasks/text-diff/03-locale-briefs.md (new)
- src/pages/textDiffPage.ts
- src/site/i18n/{en,zh,es,de,fr,pt,id,ja,ru,ar}.ts
