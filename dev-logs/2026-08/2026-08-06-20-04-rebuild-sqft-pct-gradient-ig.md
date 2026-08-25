Date: 2026-08-06 20:04
Summary: Rebuilt square-feet, percentage-change, and gradient pages to the BMI-style IG pattern with ten-locale copy.

[question]
In /Users/xuli/vscodeai/onlinefreetools, rebuild these EXISTING calculator pages to match IG pattern in howToCalculateBmiPage.ts (helpers: renderToolIgSections, renderToolReferencesSection from src/pages/site/toolContent.ts).

## Tools
1. square-feet — src/pages/squareFeetPage.ts + tool_squarefeet_*
2. how-to-calculate-percentage-change — src/pages/howToCalculatePercentageChangePage.ts + tool_percentage_change_*
3. how-to-calculate-gradient — src/pages/howToCalculateGradientPage.ts + tool_gradient_*

## Specs
Read work-tasks/{slug}/02-tool-info.md and 03-locale-briefs.md.

### square-feet
- Keep unit conversion calculator UI
- How + Formula + Example + Use cases (real estate / flooring / renovation — not generic unit converter fluff)
- References: NIST or other unit conversion authority (≥1)
- All 10 langs independently

### percentage-change
- Keep calculator
- Full numeric example + business/data use cases
- Formula visible; FAQ on percentage points vs percent
- References optional but good (e.g. educational math source)
- All 10 langs

### gradient
- Keep calculator if present
- Clear multivariable gradient formula
- Use cases optimization/ML
- References: math education sources
- related stays percentage-change, roi per catalog
- All 10 langs

## Rules
- Full function comments in page TS
- description ≥120
- Update scripts/site/i18n.mjs home cards when titles change
- NOT isomorphic ten-lang paste
- Do not modify BMI, headers, text-diff, markdown pages
- Run npm run lint:seo and fix your failures

Return files changed + gaps.

[try to solve]
Rebuilt three pages to the BMI IG pattern: `renderToolIgSections` (How / Formula / Example / Use cases) + `renderToolReferencesSection`; calculator UI kept.

- **square-feet**: L×W unit switching kept; results show both sq ft and m² (NIST factor 0.09290304); real-estate/renovation use cases; NIST SP 811 reference; FAQ covers net vs gross area and non-appraisal.
- **percentage-change**: formula (new−old)/old×100; example 80→100 = +25%; business/data use cases; percentage-points FAQ; Relative change reference.
- **gradient**: kept multivariable ∇f per user request (not two-point slope); demo function evaluation UI; optimization/ML use cases; Wikipedia Gradient + Khan Academy; related remains percentage-change, roi.

Ten-locale independent copy written to `src/site/i18n/*.ts`; home-card titles/descs synced in `scripts/site/i18n.mjs`. `npm run lint:seo` passed.

**Gaps**: (1) work-tasks gradient `02`/`03` leaned two-point slope; implementation kept multivariable calculus per user instruction; (2) ar/ja/ru still recommend native review; (3) `03` round checkboxes unchanged (not requested); (4) square-feet remains an L×W area tool (not a pure area-value bidirectional converter).

[actions]
- src/pages/squareFeetPage.ts
- src/pages/howToCalculatePercentageChangePage.ts
- src/pages/howToCalculateGradientPage.ts
- src/site/i18n/en.ts
- src/site/i18n/zh.ts
- src/site/i18n/es.ts
- src/site/i18n/ar.ts
- src/site/i18n/pt.ts
- src/site/i18n/id.ts
- src/site/i18n/fr.ts
- src/site/i18n/ja.ts
- src/site/i18n/ru.ts
- src/site/i18n/de.ts
- scripts/site/i18n.mjs
- npm run lint:seo
