Date: 2026-08-06 20:06
Summary: Reviewed and rebuilt eight remaining tools to IG/SEO/i18n standards (shared helpers, work-tasks, ten-locale copy).

[question]
根据规则和策略，review和重建其他工具

[try to solve]
按策略 §C「存量缺口增强」与 text-diff / markdown-to-html 已定标准，对除这两页外的 8 个已上线工具做了 review + 重建：

**共享基建**
- `src/pages/site/toolContent.ts` 新增 `renderToolIgSections`、`renderToolReferencesSection`（How / Formula|Rules / Example / Use cases + 可点击 References）

**work-tasks（均已 `02: implemented`；`03: pending-native-review`，ar/ja/ru 待母语抽查）**
- website-headers、ip-address、how-to-calculate-bmi、how-to-calculate-roi、how-to-calculate-marginal-revenue、square-feet、how-to-calculate-percentage-change、how-to-calculate-gradient

**页面 IG 补齐（保留原交互）**
- 开发者：website-headers（RFC/MDN 引用、边缘隐私 FAQ）、ip-address（边缘视角、VPN/代理局限）
- YMYL：BMI（中性筛查语气、WHO/CDC 可点引用）、ROI（假设表 + Investopedia）、边际收益（公式推导可见）
- 其他计算器：square-feet（房产/装修场景）、percentage-change（百分点对照）、gradient（多元 ∇f，非两点斜率；FAQ 说明差异）

**校验**
- `npm run lint:seo` 通过；`npm run build:site` 已跑（sitemap 120 URLs）
- `README.md` 工具清单已与新 title/说明对齐

**未完成 / 后续**
- 各工具 `03` 未标 `i18n-done`：需完成轮次勾选并清掉 ar/ja/ru「待母语抽查」
- gradient 的 brief 初稿曾按「两点斜率」写过，实现保持存量多元 ∇f 口径（已在 `02` 注明）

[actions]
- Added work-tasks for 8 tools; extended toolContent IG helpers
- Rebuilt pages: websiteHeaders, ipAddress, BMI, ROI, marginalRevenue, squareFeet, percentageChange, gradient
- Updated src/site/i18n/*.ts (10 langs), scripts/site/i18n.mjs, README.md
- Ran npm run lint:seo && npm run build:site
