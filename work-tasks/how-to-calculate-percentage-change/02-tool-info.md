# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-percentage-change`  
**路径**：`/tools/how-to-calculate-percentage-change`  
**主方向**：A  
**YMYL**：否  
**性质**：存量缺口增强（非新产品）  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：策略 §3.1 / §3.8。缺口：§C — 完整数值例 + 商业/数据场景。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. percentage change calculator / how to calculate percentage change  
  2. percent increase / percent decrease  
  3. 百分比变化 / 涨跌幅计算  
  4. MoM / YoY change（商业场景 FAQ）  
  5. from old to new value percent
- 用户真实任务：给定旧值与新值，得到涨跌百分比，并对照商业/数据场景理解符号。
- [x] 竞品：双输入 + 结果%；Example 常缺失或过短。
- [x] 缺口（≥3）：  
  1. 完整 Input→Output 数值推演  
  2. 营收/流量/价格等商业或数据场景  
  3. 旧值=0 边界  
  4. 涨 vs 跌符号说明  
  5. 与 ROI 差异（related）
- [x] 我们补哪 ≥3 条：  
  - **⑧** 完整数值 Example（逐步）→ Example  
  - **③** Use cases：GMV 环比、DAU、标价调整 → Use cases  
  - **①** Formula：(new−old)/old×100% → Formula  
  - **②** FAQ：old=0；负值含义  
  - **⑨** related ROI / MR
- [x] 长尾：**合并**（increase/decrease 同页）。
- [x] 权威来源 URL：  
  - https://en.wikipedia.org/wiki/Relative_change  
  - 或同等数学/统计入门权威
- [x] Use case 草稿：月度营收环比；A/B 指标；物价对比  
- [x] 边界：old=0；从正到负  
- [x] 结果 → Example 固定推演  
- [x] Related：`how-to-calculate-roi`, `how-to-calculate-marginal-revenue`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 标准相对变化公式 |
| 2 | 边界/失败 | old=0 FAQ |
| 3 | 场景语境 | **商业/数据 Use cases** |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | **完整逐步例** |
| 9 | 主题内链 | related |

**计划硬性增益**：⑧ ③ ①

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 计算器 · 方向 A · 存量增强 |
| 场景与行业 | 运营数据分析；价格/指标涨跌 |
| 技术 | Tier 0 |
| Title (en) | Percentage Change Calculator |
| Description | 公式 + 完整数字例 + 商业场景一句 |
| Schema | WebApplication + BreadcrumbList |
| FAQ（≥3） | 公式；涨跌；除零；vs ROI |
| Disclaimer / References | 非 YMYL；Relative change 引用 |
| related | `how-to-calculate-roi`, `how-to-calculate-marginal-revenue` |
| 验收 | Example 逐步完整；Use cases 非空泛；`03` ≥3 轮 |
| 工期粗估 | ~0.5d |

## 交互规格（给实现用）

- 输入：old value、new value
- 输出：percentage change %；可选绝对差
- 核心规则：(new−old)/|old| 或 /old — **实现须与 Formula 文案一致**（选定一种并写清）
- 失败：old=0；非数字
- 示例：80 → 100 = +25%（完整步骤写入 Example）

## 页面模块清单（实现待定 — 未勾选）

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区
- [ ] How it works
- [ ] Formula / Rules
- [ ] Example（**完整数值推演**）
- [ ] Use cases（**商业/数据**）
- [ ] FAQ ≥3
- [ ] Related tools ≥2
- [ ] References ≥1
- [ ] Disclaimer — 非 YMYL
- [ ] `03-locale-briefs.md` 已填
