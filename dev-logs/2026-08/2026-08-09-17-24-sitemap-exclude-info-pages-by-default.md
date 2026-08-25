Date: 2026-08-09 17:24
Summary: Exclude about/privacy/terms/contact from default sitemap generation.

[question]
sitemap 生成，默认剔除: 关于，隐私，联系，条款

[try to solve]
Production full sitemap no longer includes about/privacy/terms/contact by default (4 × 10 langs = 40 URLs). Include them only via explicit `--info about,...` or ops-UI checkboxes. Updated `scripts/site/sitemap.mjs`, CLI, sitemap-ui, ops/README, SEO_PUBLISH_CHECKLIST; `npm run sitemap` → 1360 URLs with zero info-page locs.

[actions]
- scripts/site/sitemap.mjs: infoPages default []
- ops/seo/generate-sitemap.mjs, sitemap-ui.mjs, sitemap-ui.html
- ops/README.md, docs/SEO_PUBLISH_CHECKLIST.md
- npm run sitemap refreshed public/sitemap.xml
