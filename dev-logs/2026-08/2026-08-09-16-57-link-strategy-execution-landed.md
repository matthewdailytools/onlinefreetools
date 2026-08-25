Date: 2026-08-09 16:57
Summary: Implement Google-aligned internal/external link execution plan for the site.

[question]
内链与外链落地执行方案

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

[try to solve]
Landed per plan: docs (internal three-tier / outbound / inbound), lint gate, default-lang URL normalization, Related same-tag links, catalog related same-cluster fill (zero-inbound cleared), markdown/text-diff References, BMI/compress-pdf/ROI contextual links, removed “See related tools” placeholders, white-hat outreach monthly checklist. `npm run lint:seo` and `build:site` passed.

[actions]
- docs/seo/2026-08-09/link-strategy-execution.md; §7 / seo README / SEO_PUBLISH_CHECKLIST backlinks
- ops/seo/inbound-link-outreach.md; ops/README index
- scripts/validate-tool-links.mjs + lint:seo wiring
- nav/cards/taxonomy/footer → withLangPath; Related without target=_blank
- tool-catalog.d related fixes; merge + build:site
- markdown/text-diff References; renderContextualToolLinks; i18n placeholder cleanup
