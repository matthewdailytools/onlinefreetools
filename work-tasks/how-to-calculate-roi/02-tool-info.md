# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-roi`  
**路径**：`/tools/how-to-calculate-roi`  
**主方向**：C  
**YMYL**：是  
**性质**：存量缺口增强（非新产品）  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：策略 §3.1 / §3.8；YMYL 见策略 §2.3 与 `seo-google-policy.mdc`。  
> 缺口：`docs/2026-07-28-per-tool-dev-seo-plans.md` §C。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. how to calculate ROI / ROI calculator  
  2. return on investment formula  
  3. 投资回报率计算 / ROI 公式  
  4. marketing ROI（场景，不拆页）  
  5. ROI vs ROAS（FAQ 对照，不拆页）
- 用户真实任务：输入成本与收益（或净利润与投资），得到 ROI%，并理解假设与「非投资建议」。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  双输入框、百分比结果、简短公式；少假设表；免责常缺失或弱。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. 成本/收益口径假设表（含不含税、时间段）  
  2. 醒目非投资建议 disclaimer  
  3. Investopedia 级可点权威定义  
  4. 负 ROI / 零成本除零边界  
  5. 与百分比变化、边际收益的关系
- [x] 我们补哪 ≥3 条增益？  
  - **④** 假设表（成本口径、时间、含税与否）→ `#rules` / 假设区  
  - **⑤** References：Investopedia ROI 等 ≥2 → `References`  
  - **YMYL** Disclaimer 醒目 → 页内免责  
  - **①** 公式 ROI = (Gain − Cost) / Cost × 100%（或站点既有口径写清）→ Formula  
  - **⑧** 完整数值 Example  
  - **②** 零成本、负收益 FAQ  
  - **⑨** related catalog
- [x] 长尾：**合并**（营销 ROI / 项目 ROI 用 Use cases）。
- [x] 权威来源 URL：  
  - https://www.investopedia.com/terms/r/returnoninvestment.asp  
  - https://www.investopedia.com/articles/basics/10/guide-to-calculating-roi.asp（或同等权威第二链）
- [x] Use case 草稿：广告投放粗算；课程作业；项目事后复盘（均标注估算）  
- [x] 边界草稿：Cost=0；Gain&lt;Cost；多期现金流不在本工具（FAQ 指向局限）  
- [x] 结果区 → Example + FAQ 固定数字与免责  
- [x] Related：`how-to-calculate-marginal-revenue`, `how-to-calculate-percentage-change`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Formula 可见 |
| 2 | 边界/失败 | FAQ：除零、负 ROI、非多期模型 |
| 3 | 场景语境 | Use cases：营销/项目估算 |
| 4 | 对照表 | **假设表**（口径/时间） |
| 5 | 权威引用 | Investopedia 类 ≥2 |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | Example 完整一组 |
| 9 | 主题内链 | related catalog |

**计划硬性增益**：① ④ ⑤ + YMYL Disclaimer（存量验收必查）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 计算器 · C-V4 财务 · **YMYL** · 存量增强 |
| 场景与行业 | 运营/创业粗算回报；教学 |
| 技术 | Tier 0 纯客户端公式 |
| Title (en) | ROI Calculator / How to Calculate ROI（对照 brief） |
| Description | 公式 + 假设一句 + 示例数字 + 非投资建议提示 |
| Schema | WebApplication + BreadcrumbList（与可见免责一致） |
| FAQ（≥3） | 公式口径；假设；是否投资建议；零成本 |
| Disclaimer / References | **必备** disclaimer；Investopedia ≥2 |
| related | `how-to-calculate-marginal-revenue`, `how-to-calculate-percentage-change` |
| 验收 | `lint:seo` YMYL 字段；假设表可见；References 可点；`03` ≥3 轮 |
| 工期粗估 | ~0.5–1d |

## 交互规格（给实现用）

- 输入：投资/成本、收益/回报（或净利润）；单位货币自释
- 输出：ROI %；可选绝对利润
- 核心规则：写清所用公式；与假设表一致
- 失败与边界：Cost=0 → 错误提示；非数字 → 校验
- 示例：Cost 1000，Gain 1300 → ROI 30%（与 Example 文案一致）

## 页面模块清单（实现待定 — 未勾选）

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区
- [ ] How it works
- [ ] Formula / Rules（含**假设表**）
- [ ] Example（固定数值）
- [ ] Use cases（2–3）
- [ ] FAQ ≥3（含局限/免责类）
- [ ] Related tools ≥2
- [ ] References ≥2（YMYL）
- [ ] Disclaimer（**YMYL 必备**）
- [ ] `03-locale-briefs.md` 已填
