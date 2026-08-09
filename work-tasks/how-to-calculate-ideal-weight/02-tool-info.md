# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-ideal-weight`  
**路径**：`/tools/how-to-calculate-ideal-weight`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：ideal weight calculator；how to calculate ideal body weight；理想体重计算器
- 用户任务：输入身高与性别 → 多公式理想体重区间；理解非医疗建议
- [x] 竞品：单公式或简单区间；少多公式对照与醒目免责
- [x] 缺口：Devine/Robinson/Miller/Hamwi 同页；英寸换算假设；与 BMI 分意图
- [x] 增益：① 公式 ④ 假设 ⑤ 权威 ② 边界 ⑧ Example ③ Use cases ⑨ related YMYL
- [x] 长尾合并：ideal body weight / IBW 同页
- [x] 权威：https://www.ncbi.nlm.nih.gov/books/NBK541070/ ；Devine/Robinson 经典 IBW 文献说明页
- [x] Related：`how-to-calculate-bmi`、`how-to-calculate-body-fat`

### §3.1 硬性增益：① ④ ⑤ + Disclaimer

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Ideal Weight Calculator — How to Estimate Ideal Body Weight |
| Description | Estimate ideal body weight with Devine, Robinson, Miller, and Hamwi formulas on one page. Example: male 178 cm → Devine about 73.2 kg (range ~70.4–75.2 kg). Browser-only; educational — not medical advice. |
| related | how-to-calculate-bmi, how-to-calculate-body-fat |
| Schema | WebApplication + BreadcrumbList |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-ideal-weight`；不拆公式薄页 |
| 主检索词 → title/H1 | en：**Ideal Weight Calculator — How to Estimate Ideal Body Weight**；zh：**理想体重计算器 — 如何估算理想体重区间** |
| 次要关键词 → desc/FAQ | IBW / Devine / Robinson → Formula；ideal body weight → title/desc |
| 用户搜索习惯判断 | en 搜 ideal weight calculator；勿堆「身高、性别、公式名」逗号进 H1 |
| 优化摘要 | 结果向 Ideal Body Weight；多公式同页 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-ideal-weight --phase=0b`

## 交互规格

- 输入：性别；身高 cm；公式选项 all|devine|robinson|miller|hamwi（默认 all 显示区间+各值）
- 输出：所选公式 kg；all 时显示 min–max 与分项
- 样例：男、178 cm、all → Devine **73.2** kg；区间约 **70.4–75.2** kg
- 进页 loadSample
- 失败：身高≤0 或过低（公式要求身高>5 ft 时提示局限）

## 页面模块清单

> 勾选前须 0b 绿。

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References / Disclaimer
- [x] `03-locale-briefs.md` 已填
