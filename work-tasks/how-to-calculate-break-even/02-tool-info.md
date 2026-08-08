# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-break-even`  
**路径**：`/tools/how-to-calculate-break-even`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：break even calculator；how to calculate break even point；盈亏平衡点；保本销量
- 用户任务：输入固定成本、单价、单位变动成本 → 平衡销量与平衡收入；理解贡献边际与非经营建议
- [x] 竞品：三输入 + 销量结果；少假设表与醒目免责
- [x] 缺口：贡献边际可见；P≤V 边界；与 ROI/毛利率分意图；非经营建议
- [x] 增益：① 公式 ④ 假设表 ⑤ Investopedia ≥2 ② 边界 ⑧ Example ③ Use cases ⑨ related YMYL
- [x] 长尾合并：break-even units / revenue 同页
- [x] 权威：https://www.investopedia.com/terms/b/breakevenpoint.asp ；https://www.investopedia.com/terms/c/contributionmargin.asp
- [x] Related：`how-to-calculate-roi`、`how-to-calculate-marginal-revenue`

### §3.1 维度：公式、边界、场景、权威、示例、内链、YMYL

**硬性增益**：① ④ ⑤ + Disclaimer

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Break-Even Calculator — How to Calculate Break-Even Point |
| Description | Fixed cost, price, variable cost → units and revenue at break-even. Example: FC 10,000, price 50, VC 30 → 500 units / 25,000 revenue. Browser-only; educational — not business advice. |
| related | how-to-calculate-roi, how-to-calculate-marginal-revenue |
| Schema | WebApplication + BreadcrumbList |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-break-even`；不拆行业/收入专用薄页 |
| 主检索词 → title/H1 | en：**Break-Even Calculator — How to Calculate Break-Even Point**；zh：**盈亏平衡计算器 — 如何计算保本销量** |
| 次要关键词 → desc/FAQ | contribution margin → Formula/FAQ；break-even revenue → 结果区；保本点 → zh |
| 用户搜索习惯判断 | en 搜 break even calculator / break even point；勿堆「固定成本、单价、变动成本」进 H1 |
| 优化摘要 | 结果向 Break-Even Point；与 ROI 分意图 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-break-even --phase=0b`

## 交互规格

- 输入：固定成本 FC>0；单价 P>0；单位变动成本 V≥0（须 P>V）
- 输出：平衡销量 Q=FC/(P−V)；平衡收入 = Q×P；单位贡献边际 = P−V
- 样例：FC=10000，P=50，V=30 → Q=**500**；收入=**25000**；贡献边际=**20**
- 进页 loadSample 自动计算
- 失败：P≤V、FC≤0、非数字

## 页面模块清单

> 勾选前须 0b 绿。

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References / Disclaimer
- [x] `03-locale-briefs.md` 已填
