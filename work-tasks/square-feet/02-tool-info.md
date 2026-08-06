# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`square-feet`  
**路径**：`/tools/square-feet`  
**主方向**：B  
**YMYL**：否  
**性质**：存量缺口增强（非新产品）  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：策略 §3.1 / §3.8。缺口：§C — 房产/装修场景，避免纯泛化单位感。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. square feet to square meters / sq ft calculator  
  2. convert square feet  
  3. 平方英尺换算 / 平方英尺转平方米  
  4. apartment size sq ft（房产场景）  
  5. flooring / renovation area（装修场景）
- 用户真实任务：把房源或图纸上的 ft² 换成当地习惯的 m²（或反向），用于看房/估材料。
- [x] 竞品提供什么？双向换算框、换算因子；Use cases 常「anyone」。
- [x] 缺口（≥3）：  
  1. 房产 listing / 装修报量真实场景  
  2. 可居住面积 vs 建筑面积口径提示（边界）  
  3. 完整数值例绑定场景  
  4. 权威换算因子引用  
  5. 与纯「单位转换超市」的差异叙事
- [x] 我们补哪 ≥3 条：  
  - **③** Use cases：看房对比、地板/油漆估算、跨国 listing → Use cases  
  - **①** Rules：1 ft² = 0.09290304 m²（写清）→ Formula  
  - **⑧** Example：如 850 ft² → m² 完整数字  
  - **②** FAQ：套内/建筑口径本工具不区分；仅单位换算  
  - **⑤** NIST/标准换算引用  
  - **⑨** related catalog
- [x] 长尾：**合并**（地板面积、房源面积同页场景）。
- [x] 权威来源 URL：  
  - https://www.nist.gov/pml/special-publication-811（或同等 SI 换算权威）  
  - https://en.wikipedia.org/wiki/Square_foot（辅助）
- [x] Use case 草稿：美式房源看面积；装修估地板；留学租房单位对照  
- [x] 边界：仅平面面积；不含层高/容积率；各国「坪」另说明若支持  
- [x] 结果 → Example 固定数字  
- [x] Related：`how-to-calculate-percentage-change`, `how-to-calculate-bmi`（catalog 现状）

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 精确换算因子 |
| 2 | 边界/失败 | FAQ：口径/非估价 |
| 3 | 场景语境 | **房产/装修 Use cases 改写** |
| 5 | 权威引用 | NIST/标准 |
| 7 | 多语言 | `03`（各地面积习惯词） |
| 8 | 数值示例 | 完整换算例 |
| 9 | 主题内链 | related |

**计划硬性增益**：③ ① ⑧

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 计算器 · 方向 B 场景 · **存量增强** |
| 场景与行业 | 房产看房；装修材料面积 |
| 技术 | Tier 0 |
| Title (en) | Square Feet Converter（可带 to m²；避免堆砌） |
| Description | 换算因子 + 房产/装修例 + 数字 |
| Schema | WebApplication + BreadcrumbList |
| FAQ（≥3） | 因子；套内/建筑；能否估房价（否） |
| Disclaimer / References | 非 YMYL；换算标准引用 |
| related | `how-to-calculate-percentage-change`, `how-to-calculate-bmi` |
| 验收 | Use cases 非泛化；Example 完整；`03` ≥3 轮 |
| 工期粗估 | ~0.5d 文案为主 |

## 交互规格（给实现用）

- 输入：数值 + 方向（ft²↔m² 等既有单位）
- 输出：换算结果；显示所用因子
- 核心规则：标准 SI 因子；四舍五入规则在 FAQ 说明
- 失败：非数字、负数面积
- 示例：850 ft² → 78.97 m²（与文案一致，按既有精度）

## 页面模块清单（实现待定 — 未勾选）

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区
- [ ] How it works
- [ ] Formula / Rules
- [ ] Example
- [ ] Use cases（**房产/装修重点**）
- [ ] FAQ ≥3
- [ ] Related tools ≥2
- [ ] References ≥1
- [ ] Disclaimer — 非 YMYL（可选「非估价」一句）
- [ ] `03-locale-briefs.md` 已填
