Date: 2026-08-08 23:50
Summary: Merged Omni same-intent tools into how-to-calculate-* rows and expanded inventory §9 to 62 calculators.

[question]
按照这个逻辑梳理Omni的工具，合并相同的搜索意图，按照how to calculate {topic} slug整理补充到 docs/2026-08-08-tool-inventory-table.md

[try to solve]
已按「一页一意图 + how-to-calculate-{topic}」梳理 Omni：未把 ~3867 页照搬进清单，而是合并近义拆页后得到 **62** 个计算器意图，写入清单 §9（序号 93–154），§10 顺延至 155–158，全表 **1–158**。

要点：
- 已上线 slug 锁定：`how-to-calculate-bmi/roi/marginal-revenue/percentage-change/gradient`、`square-feet`
- 未上线原规划统一改名（如 `loan-emi`→`how-to-calculate-emi` 并吞并 mortgage；`bmr-tdee`→`how-to-calculate-bmr-tdee`）
- 补充折扣/VAT/通胀/平均数/圆体积/配速/欧姆定律等 Omni 热门教育向意图
- 明确不做：州税矩阵、BMI 分群、CI 分档、宽高比预设、宠物页、各国 VAT 税率页
- 明细源表：`docs/competitor-refs/omnicalculator-2026-08-08/omnicalculator-intent-merge-howto.tsv`
- 同步：§11/§12、`omnicalculator-formula-ref-shortlist.tsv`、策略文档 P1 slug、竞品 README

[actions]
- 更新 `docs/2026-08-08-tool-inventory-table.md` §9–§12 与统计
- 新增 `docs/competitor-refs/omnicalculator-2026-08-08/omnicalculator-intent-merge-howto.tsv`
- 重写 `omnicalculator-formula-ref-shortlist.tsv`（62 行）
- 更新 `docs/competitor-refs/omnicalculator-2026-08-08/README.md`、`docs/2026-08-08-omnicalculator-seo-traffic-strategy.md`
