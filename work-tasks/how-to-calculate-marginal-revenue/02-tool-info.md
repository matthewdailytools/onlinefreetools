# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-marginal-revenue`  
**路径**：`/tools/how-to-calculate-marginal-revenue`  
**主方向**：C  
**YMYL**：是  
**性质**：存量缺口增强（非新产品）  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：策略 §3.1 / §3.8；YMYL §2.3。  
> 缺口：`docs/2026-07-28-per-tool-dev-seo-plans.md` §C。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. how to calculate marginal revenue  
  2. marginal revenue formula / MR calculator  
  3. 边际收益计算 / 边际收入公式  
  4. MR vs average revenue（FAQ）  
  5. change in total revenue / change in quantity
- 用户真实任务：输入 ΔTR 与 ΔQ（或两档销量与收入），得到 MR，并看懂推导。
- [x] 竞品提供什么？输入框 + 结果；公式常一笔带过；免责弱。
- [x] 缺口（≥3）：  
  1. 可见逐步推导（非只贴最终式）  
  2. YMYL disclaimer（非定价/投资建议）  
  3. ΔQ=0 边界  
  4. 离散两档 vs 连续导数差异说明  
  5. 权威引用
- [x] 我们补哪 ≥3 条：  
  - **①** Formula：MR = ΔTR / ΔQ 逐步推导可见 → `#formula`  
  - **YMYL** Disclaimer → 页内  
  - **⑤** References（教材/Investopedia 类）≥1–2  
  - **⑧** 数值 Example（两档销量）  
  - **②** FAQ：ΔQ=0；非最优定价保证  
  - **⑨** related catalog
- [x] 长尾：**合并**。
- [x] 权威来源 URL：  
  - https://www.investopedia.com/terms/m/marginal-revenue-mr.asp  
  - 可选第二：公开教材或同等权威 MR 定义页
- [x] Use case：产量加一档粗算；微观经济作业  
- [x] 边界：ΔQ=0；收入下降导致负 MR  
- [x] 结果 → Example + FAQ  
- [x] Related：`how-to-calculate-roi`, `how-to-calculate-percentage-change`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | **可见推导** MR = ΔTR/ΔQ |
| 2 | 边界/失败 | FAQ：ΔQ=0、负 MR |
| 3 | 场景语境 | Use cases |
| 5 | 权威引用 | Investopedia 等 |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | 完整两档数字 |
| 9 | 主题内链 | related |

**计划硬性增益**：①（推导）+ Disclaimer + ⑤

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 计算器 · C-V4 · **YMYL** · 存量增强 |
| 场景与行业 | 教学；粗算加量收入 |
| 技术 | Tier 0 |
| Title (en) | Marginal Revenue Calculator / How to Calculate… |
| Description | 推导步骤 + 数值例 + 非财务建议提示 |
| Schema | WebApplication + BreadcrumbList |
| FAQ（≥3） | 公式；与平均收入差；是否建议；除零 |
| Disclaimer / References | **必备**；Investopedia ≥1–2 |
| related | `how-to-calculate-roi`, `how-to-calculate-percentage-change` |
| 验收 | lint YMYL；推导可见；`03` ≥3 轮 |
| 工期粗估 | ~0.5–1d |

## 交互规格（给实现用）

- 输入：Q1, TR1, Q2, TR2 — 或直接 ΔQ, ΔTR
- 输出：MR；展示 ΔTR、ΔQ
- 核心规则：MR = (TR2−TR1)/(Q2−Q1)；UI 旁显示推导
- 失败：ΔQ=0；非数字
- 示例：Q 10→11，TR 1000→1080 → MR=80（与文案一致）

## 页面模块清单（实现待定 — 未勾选）

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区
- [ ] How it works
- [ ] Formula / Rules（**推导可见**）
- [ ] Example
- [ ] Use cases（2–3）
- [ ] FAQ ≥3
- [ ] Related tools ≥2
- [ ] References ≥1（建议 ≥2）
- [ ] Disclaimer（**YMYL 必备**）
- [ ] `03-locale-briefs.md` 已填
