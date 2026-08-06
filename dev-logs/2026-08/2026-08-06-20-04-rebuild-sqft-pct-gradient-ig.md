Date: 2026-08-06 20:04
Summary: Rebuilt square-feet, percentage-change, and gradient pages to BMI-style IG pattern with ten-locale copy.

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
三页已按 BMI 的 IG 模式重建：`renderToolIgSections`（How / Formula / Example / Use cases）+ `renderToolReferencesSection`；保留计算器交互。

- **square-feet**：长×宽单位切换保留；结果同时显示 sq ft 与 m²（NIST 因子 0.09290304）；房产/装修场景；NIST SP 811 引用；FAQ 含套内/建筑口径与非估价。
- **percentage-change**：公式 (new−old)/old×100；示例 80→100=+25%；商业/数据 Use cases；百分点 FAQ；Relative change 引用。
- **gradient**：按用户要求保持**多元 ∇f**（非两点斜率）；演示函数求值交互；优化/ML Use cases；Wikipedia Gradient + Khan Academy；related 仍为 percentage-change、roi。

十语独立文案已写入 `src/site/i18n/*.ts`；首页卡片 title/desc 已同步 `scripts/site/i18n.mjs`。`npm run lint:seo` 通过。

**Gaps**：① work-tasks gradient `02`/`03` 偏向两点斜率，实现按用户指令保留多元微积分；② ar/ja/ru 仍建议母语抽查；③ `03` 轮次勾选未改（未要求）；④ square-feet 仍是 L×W 面积工具（非纯面积数值双向换算框）。

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
