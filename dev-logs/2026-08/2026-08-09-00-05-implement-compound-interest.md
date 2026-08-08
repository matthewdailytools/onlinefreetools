Date: 2026-08-09 00:05
Summary: Implemented how-to-calculate-compound-interest with How to Calculate title pattern, ten locales, and SEO gates green.

[question]
好的，继续

[try to solve]
已对齐 title 并实现复利工具上线就绪交付：

- Title (en)：`Compound Interest Calculator — How to Calculate Future Value`（对齐 ROI/BMI）
- 页面：`src/pages/howToCalculateCompoundInterestPage.ts`（复利/单利、频率、进页 loadSample：10000×5%×10 年年复利 → 16288.95）
- Catalog/icon/十语 i18n；YMYL disclaimer + Investopedia 双引用
- `coverage:gate --phase=all` OK；`lint:seo` OK；`build:site` 后首页/nav 已出现工具
- 清单 §9 #99 → 已上线；README 中英条目已加；`02`=`implemented`，`03`=`i18n-done`

路径：`/tools/how-to-calculate-compound-interest`、`/zh/tools/how-to-calculate-compound-interest`

[actions]
- 更新 `work-tasks/how-to-calculate-compound-interest/02|03`
- 新增 catalog/page/icon/i18n×10
- 更新 README、inventory §9/§12
- `npm run merge:tools` / `build:site` / `lint:seo` / `coverage:gate --phase=all`
