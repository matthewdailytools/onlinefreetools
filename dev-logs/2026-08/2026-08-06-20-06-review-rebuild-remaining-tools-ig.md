Date: 2026-08-06 20:06
Summary: Reviewed and rebuilt eight remaining tools to IG/SEO/i18n standards (shared helpers, work-tasks, ten-locale copy).

[question]
根据规则和策略，review和重建其他工具

[try to solve]
Per strategy §C “gap enhancement for existing tools” and the standards set by text-diff / markdown-to-html, reviewed and rebuilt the other eight live tools:

**Shared infrastructure**
- `src/pages/site/toolContent.ts` added `renderToolIgSections` and `renderToolReferencesSection` (How / Formula|Rules / Example / Use cases + clickable References)

**work-tasks** (all `02: implemented`; `03: pending-native-review` for ar/ja/ru)
- website-headers, ip-address, how-to-calculate-bmi, how-to-calculate-roi, how-to-calculate-marginal-revenue, square-feet, how-to-calculate-percentage-change, how-to-calculate-gradient

**Page IG fill (interactions kept)**
- Developer: website-headers (RFC/MDN refs, edge privacy FAQ), ip-address (edge view, VPN/proxy limits)
- YMYL: BMI (neutral screening tone, WHO/CDC clickable refs), ROI (assumptions table + Investopedia), marginal revenue (visible formula derivation)
- Other calculators: square-feet (real-estate/renovation scenes), percentage-change (percentage-points contrast), gradient (multivariable ∇f, not two-point slope; FAQ explains the difference)

**Verification**
- `npm run lint:seo` passed; `npm run build:site` ran (sitemap 120 URLs)
- `README.md` Tools List aligned with new titles/blurbs

**Follow-ups**
- Tool `03` files not marked `i18n-done`: need round checkboxes and clearing ar/ja/ru pending-native-review
- Gradient briefs originally drafted as two-point slope; implementation kept existing multivariable ∇f (noted in `02`)

[actions]
- Added work-tasks for 8 tools; extended toolContent IG helpers
- Rebuilt pages: websiteHeaders, ipAddress, BMI, ROI, marginalRevenue, squareFeet, percentageChange, gradient
- Updated src/site/i18n/*.ts (10 langs), scripts/site/i18n.mjs, README.md
- Ran npm run lint:seo && npm run build:site
