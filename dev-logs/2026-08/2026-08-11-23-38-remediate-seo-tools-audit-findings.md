Date: 2026-08-11 23:38
Summary: Remediated audit findings for 10 SEO tools: website-headers coverage docs, lint:seo false positives, and meta descriptions to 120–160 characters.

[question]
需要

[try to solve]
Fixed and verified all three audit items:

1. **website-headers coverage docs**: Completed pre-checklist search coverage and Title/Description in `02-tool-info.md`; fixed misaligned table headers in `03-locale-briefs.md`, marked pre-checklist / search-coverage optimized, and filled `0b` / `1b` / `2b`. `coverage:gate --slug=website-headers --phase=all` → OK.

2. **lint:seo false positives**: `scripts/validate-tool-seo.mjs` `extractDescriptions` now validates only catalog `faqPrefix_description` fields and skips UI fields such as `tool_og_field_og_description`.

3. **meta description**: Rewrote 10 tools × 10 locales to roughly 120–160 characters, including SEO benefit and example/step keywords; removed mechanical filler and broken sentences. `npm run merge:tools` + `lint:seo` → OK; all 10 slugs `coverage:gate --phase=all` → OK.

[actions]
- `work-tasks/website-headers/02-tool-info.md`, `03-locale-briefs.md`
- `scripts/validate-tool-seo.mjs`
- `src/site/i18n/tools/{10 SEO slugs}/*.ts` + merge outputs
- `npm run merge:tools`, `npm run lint:seo`, `coverage:gate` ×10
