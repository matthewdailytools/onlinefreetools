Date: 2026-08-07 00:35
Summary: Implemented the html-entity tool page with Tier 0 encode/decode, ten-language i18n, and catalog registration.

[question]
实现 html-entity

[try to solve]
Shipped the HTML entity encode/decode tool at `/tools/html-entity` (ten locales).

**Features**
- Encode / Decode tabs on one page
- Encode: scope (minimal / non-ASCII only / all) + output form (named / decimal / hex)
- Decode: Strict / Lenient; Once / Until stable; plain-text preview (`textContent`)
- Tier 0 zero-dependency native implementation; Copy / Sample / Clear; debounced live convert on input

**Engineering**
- `src/pages/htmlEntityPage.ts`
- Registered in `src/site/tool-catalog.json` + `src/index.ts`
- Ten-locale `src/site/i18n/*.ts` + home `scripts/site/i18n.mjs`
- `README.md` tool list
- `npm run build:site` (sitemap 150 URLs) and `npm run lint:seo` passed

[actions]
- Added `src/pages/htmlEntityPage.ts`
- Updated `src/site/i18n/*.ts`, `src/site/tool-catalog.json`, `src/index.ts`, `scripts/site/i18n.mjs`, `README.md`
- Set `work-tasks/html-entity/02-tool-info.md` status to `implemented`
