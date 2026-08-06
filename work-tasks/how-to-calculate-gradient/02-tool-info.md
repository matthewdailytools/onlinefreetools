# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-gradient`（保持）  
**路径**：`/tools/how-to-calculate-gradient`  
**主方向**：A  
**YMYL**：否  
**性质**：存量缺口增强（非新产品）  
**产品口径说明**：本页实现为**多元标量函数梯度 ∇f（偏导向量）**，不是两点 rise/run 斜率计算器；FAQ 须写明与「坡度/斜率」检索的差异，避免 doorway 误解。  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：策略 §3.1 / §3.8。缺口：§C — 公式清晰；与相关计算器互链（catalog 现状；站长/设计工具上线后再扩）。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. how to calculate gradient / slope calculator  
  2. rise over run  
  3. 斜率计算 / 梯度计算（注意语种歧义）  
  4. slope between two points  
  5. percent grade（FAQ，若支持或不支持须写清）
- 用户真实任务：由两点或 rise/run 得到斜率 m，看懂公式并链到百分比变化等工具。
- [x] 竞品：坐标输入 + m；公式偶发不清；内链少。
- [x] 缺口（≥3）：  
  1. 公式与符号（m、Δy/Δx）清晰对照  
  2. Δx=0 垂直线边界  
  3. related 主题内链  
  4. 「gradient」在机器学习语境的歧义澄清（FAQ）  
  5. 数值 Example
- [x] 我们补哪 ≥3 条：  
  - **①** Formula：m = (y2−y1)/(x2−x1) 清晰展示 → Formula  
  - **⑧** Example 完整坐标数字  
  - **②** FAQ：竖直线；与 ML gradient 区别  
  - **⑨** Related 保持 catalog（percentage-change、ROI）；文档 C08 互链待后续  
  - **⑤** 可选数学参考链接
- [x] 长尾：**合并**。
- [x] 权威来源 URL：  
  - https://en.wikipedia.org/wiki/Slope  
  - 可选：https://www.khanacademy.org/（斜率入门，若用须可点且相关）
- [x] Use case：直线拟合预习；简易坡度比；图表两点斜率  
- [x] 边界：Δx=0；重复点  
- [x] 结果 → Example  
- [x] Related：`how-to-calculate-percentage-change`, `how-to-calculate-roi`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | **清晰斜率公式** |
| 2 | 边界/失败 | Δx=0 FAQ |
| 3 | 场景语境 | Use cases |
| 5 | 权威引用 | Slope / 教材链 |
| 7 | 多语言 | `03`（避开 ML「梯度」歧义） |
| 8 | 数值示例 | 两点完整例 |
| 9 | 主题内链 | **related 保持并确认可点** |

**计划硬性增益**：① ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 计算器 · 方向 A · 存量增强 |
| 场景与行业 | 数学辅助；简易坡度；图表斜率 |
| 技术 | Tier 0 |
| Title (en) | Gradient / Slope Calculator（brief 定主词，避 ML 歧义） |
| Description | 公式 + 两点例 + 边界一句 |
| Schema | WebApplication + BreadcrumbList |
| FAQ（≥3） | 公式；竖直线；vs 百分比变化；非 ML gradient |
| Disclaimer / References | 非 YMYL；Wikipedia Slope 等 |
| related | `how-to-calculate-percentage-change`, `how-to-calculate-roi` |
| 验收 | 公式清晰；related 可点；`03` ≥3 轮 |
| 工期粗估 | ~0.5d |

## 交互规格（给实现用）

- 输入：(x1,y1)、(x2,y2) 或 rise/run
- 输出：slope m；可选角度（若已有则与公式一致说明）
- 核心规则：m = Δy/Δx
- 失败：Δx=0 → 明确「垂直/未定义」
- 示例：(1,2)(4,8) → m=2

## 页面模块清单（实现待定 — 未勾选）

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区
- [ ] How it works
- [ ] Formula / Rules（**清晰公式**）
- [ ] Example
- [ ] Use cases（2–3）
- [ ] FAQ ≥3
- [ ] Related tools ≥2（确认 catalog）
- [ ] References ≥1
- [ ] Disclaimer — 非 YMYL
- [ ] `03-locale-briefs.md` 已填
