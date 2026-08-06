# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-bmi`（保持）  
**路径**：`/tools/how-to-calculate-bmi`  
**主方向**：A  
**YMYL**：是  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`。  
> 对齐存量：`docs/2026-07-28-per-tool-dev-seo-plans.md` §C BMI。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. how to calculate BMI / BMI calculator
  2. BMI formula metric imperial
  3. BMI categories / WHO cutoffs
  4. BMI for athletes limitation（写入 FAQ，不拆页）
  5. body mass index online
- 用户真实任务：输入身高体重，得到 BMI 数值与成人筛查分类，并理解局限与免责。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  双单位切换、即时结果、分类色块、「不是医疗建议」短句。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. 公制 vs 英制公式对照与单位换算步骤  
  2. 成人 cutoff 来源（WHO）可点击引用  
  3. 运动员/儿童/孕妇等边界为何不适用  
  4. 结果区解读常带诊断口吻（应改为筛查语气）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Formula：公制/英制公式 + 分类表 → `#formula`  
  - **②** 边界：运动员/儿童/非法输入 → FAQ + 结果提示  
  - **⑤** References：WHO（及 CDC/权威分类页）可点击 → `#references`  
  - **⑧** Example：70kg / 175cm → 22.9 Normal  
  - **③** Use cases：健康自查 / 健身入门 / 单位换算核对  
  - **⑦** 十语 brief + 检索向重写
- [x] 长尾：合并进本页。理由：同一公式与交互，仅意图词不同。
- [x] 权威来源 URL：  
  - https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight  
  - https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html  
- [x] Related：`how-to-calculate-percentage-change`，`square-feet`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Formula：metric/imperial + adult cutoffs |
| 2 | 边界/失败 | FAQ：运动员、儿童、空输入 |
| 3 | 场景语境 | Use cases ×3 |
| 5 | 权威引用 | WHO + CDC 可点击 |
| 7 | 多语言 | 见 `03` |
| 8 | 数值示例 | Example 固定文案 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ⑤ ⑦ ⑧ ⑨ + Disclaimer

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 计算器 · 存量 YMYL · §C |
| 场景与行业 | 成人筛查自查；健身入门；非诊疗 |
| 技术 | Tier 0；纯前端；无上传 |
| Title (en) | `BMI Calculator — How to Calculate Body Mass Index \| {Brand}` |
| Description | ≥120；公式 + 步骤 + 示例；筛查非诊断 |
| Schema | WebApplication + BreadcrumbList |
| FAQ（≥3） | 公式；分类含义；运动员局限；（可选）儿童 |
| Disclaimer / References | 醒目 disclaimer；WHO/CDC 链接 |
| related | percentage-change, square-feet |
| 验收 | `lint:seo`；无诊断口吻；引用可点 |
| 工期粗估 | ~0.5–1d（含十语） |
| 本地化核查 | 见 `03` |

## 交互规格

- 输入：公制 kg+cm 或英制 lb+ft/in
- 输出：BMI（1 位小数）+ 成人分类标签 + 中性筛查解读
- 核心规则：metric `kg/m²`；imperial `703×lb/in²`；cutoff &lt;18.5 / 18.5–24.9 / 25–29.9 / ≥30
- 失败：空/非正数不展示结果
- 示例：70kg、175cm → 22.9（Normal）

## 页面模块清单

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区
- [ ] How it works
- [ ] Formula / Rules
- [ ] Example（固定文案）
- [ ] Use cases（2–3）
- [ ] FAQ ≥3
- [ ] Related tools ≥2
- [ ] References ≥2（可点击）
- [ ] Disclaimer（YMYL 必备，醒目）
- [ ] `03-locale-briefs.md` 已填
