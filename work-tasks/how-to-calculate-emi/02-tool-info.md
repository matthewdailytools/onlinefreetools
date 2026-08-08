# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-emi`  
**路径**：`/tools/how-to-calculate-emi`  
**主方向**：C  
**YMYL**：是  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> Omni 合并：`docs/competitor-refs/omnicalculator-2026-08-08/omnicalculator-intent-merge-howto.tsv`。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. EMI calculator / how to calculate EMI  
  2. loan amortization schedule / mortgage payment calculator  
  3. 等额月供计算器 / EMI 计算公式 / 房贷月供  
  4. biweekly mortgage payment（同页付款频率，不拆页）  
  5. personal / home / bike loan EMI（场景文案，不拆页）
- 用户真实任务：输入贷款本金（或房价−首付）、年利率、年限与付款频率，得到每期还款、总利息与摊还拆分；理解非贷款/授信建议。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  本金/利率/期数 → EMI 数字；部分有摊还表；房贷/车贷分站或分 URL；少统一假设表与醒目免责。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. 月利率与期数口径假设表（名义年利率 / 等额本息）  
  2. 车/房/个人贷意图合并到一页（禁 doorway）  
  3. 双周付款作频率选项而非独立薄页  
  4. r=0、本金≤0、非法期数边界  
  5. 与复利/ROI 意图边界（Related）
- [x] 我们补哪 ≥3 条增益？  
  - **①** 可见公式：等额本息 \(E = P \frac{r(1+r)^n}{(1+r)^n-1}\)（r 为期利率）→ Formula  
  - **④** 假设表：名义年利率÷期数；不含税费保险；可选房价/首付推导本金 → Rules  
  - **⑤** References：Investopedia EMI + CFPB 抵押贷款教育 ≥2  
  - **②** 边界：P≤0、期数非法、r=0 时 E=P/n → FAQ  
  - **⑧** 固定数值 Example（与进页样例一致）  
  - **③** Use cases：房贷粗算、车贷/个人贷教育、摊还利息结构  
  - **⑨** related catalog  
  - **YMYL** Disclaimer
- [x] 长尾：**合并**进本页（mortgage / bike / personal / amortization / biweekly；勿拆 payoff 专用薄页——剩余本金概念进 FAQ）。
- [x] 权威来源 URL：  
  - https://www.investopedia.com/terms/e/equated_monthly_installment.asp  
  - https://www.consumerfinance.gov/owning-a-home/explore-rates/  
  - 公式对照（研发）：https://www.omnicalculator.com/finance/emi （不写入用户「来源」）
- [x] Use case 草稿：房贷月供粗算；车贷/个人贷课堂；看摊还前期利息占比  
- [x] 边界草稿：本金≤0；年利率=0 → 每期=本金/期数；负利率拒绝；期数非正整数拒绝  
- [x] 结果区 → Example + FAQ 固定数字与免责  
- [x] Related：`how-to-calculate-compound-interest`、`how-to-calculate-roi`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 等额本息公式可见；期利率定义 |
| 2 | 边界/失败 | FAQ：P≤0、r=0、非贷款建议 |
| 3 | 场景语境 | Use cases：房贷/车贷教育/摊还结构 |
| 4 | 对照表 | 假设表（名义年利率、不含税费保险） |
| 5 | 权威引用 | Investopedia EMI + CFPB ≥2 |
| 6 | 本地隐私 | 纯浏览器计算，无上传 |
| 7 | 多语言 | `03` 十语 brief |
| 8 | 数值示例 | Example = 进页样例 |
| 9 | 主题内链 | related ≥2 |

**计划硬性增益**：① ④ ⑤ + YMYL Disclaimer

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 计算器 · C-V4 财务 · **YMYL** · 清单 P1 · Omni 意图合并 |
| 场景与行业 | 借款人教育、学生作业、房贷/车贷月供粗算 |
| 技术（包、Tier、本地处理） | Tier 0；纯 JS；`localProcessing: true` |
| Title (en) | EMI Calculator — How to Calculate Loan Payments |
| Description 要点 | 用贷款本金、年利率与期数算等额本息 EMI/月供、总利息与摊还；可选房价/首付与双周付款；示例本金 100000、年利率 6%、5 年按月 → EMI ≈ 1933.28；非贷款建议。≥120 字落地 |
| Schema | WebApplication + BreadcrumbList（与可见免责一致） |
| FAQ 要点（≥3） | EMI 公式；摊还是什么；双周 vs 月供；是否贷款建议；利率为 0 |
| Disclaimer / References | **必备**非贷款/授信建议；Investopedia EMI + CFPB ≥2 |
| related | `how-to-calculate-compound-interest`, `how-to-calculate-roi` |
| 验收 | `lint:seo` YMYL；公式与假设表可见；进页样例出结果；`03` ≥3 轮后 `i18n-done` |
| 工期粗估 | ~1–1.5d（含十语） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-emi`：对齐「how to calculate EMI」与清单/Omni 合并表；不另拆 `mortgage-calculator` / `bike-emi` / `loan-amortization`（doorway） |
| 主检索词 → title/H1 | en：**EMI Calculator — How to Calculate Loan Payments**（对齐 ROI/BMI/复利杂交）；zh：**EMI / 等额月供计算器 — 如何计算贷款月供** |
| 次要关键词 → desc / FAQ / Use cases | amortization schedule → 摊还表 + FAQ；mortgage payment → Use cases/FAQ；biweekly → 付款频率控件 + FAQ；房贷月供/车贷 EMI → zh Use cases；勿拆 payoff 页 |
| 用户搜索习惯判断 | en 头词多为 “EMI calculator”“mortgage calculator”“loan amortization”；slug 用 how-to-calculate-emi，title 同时吃 Calculator；zh 搜「等额月供」「EMI 计算器」「房贷月供」；勿把「本金、利率、期数、首付」堆进 H1 |
| 优化摘要 | 参数枚举草稿 → 改为 `EMI Calculator — How to Calculate Loan Payments`；mortgage/bike/biweekly 为同页次词；与复利/ROI 分意图 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 验收：`npm run coverage:gate -- --slug=how-to-calculate-emi --phase=0b`

## 交互规格（给实现用）

- 输入：
  - 贷款本金 P（>0）；可选「房价 + 首付」模式：P = max(0, 房价 − 首付)
  - 名义年利率（% ，≥0）
  - 期限：年（>0）或直接月数（实现用「年」为主，内部转期数）
  - 付款频率：Monthly（默认，每年 12 期）| Biweekly（每年 26 期）
- 输出：每期还款 E；还款总期数 n；总还款；总利息；摊还表（默认展示前 12 期，可展开全部或滚动）
- 核心规则 / 算法：
  - 期利率 \(r = R_{\text{年}} / m\)，\(m=12\)（月）或 \(26\)（双周）；\(n = \mathrm{round}(years \times m)\)
  - \(r>0\)：\(E = P \dfrac{r(1+r)^n}{(1+r)^n-1}\)
  - \(r=0\)：\(E = P / n\)
  - 每期：利息 = 余额 × r；本金 = E − 利息；余额减少（末期待校正）
- 失败与边界行为：
  - 非数字 / P≤0 / years≤0 / n<1 → 行内错误  
  - 负利率拒绝  
  - 结果非有限数 → 提示检查输入
- 示例 Input → Output（与 Example / 进页样例一致）：
  - P=100000，年利率 6%，5 年，Monthly → E ≈ **1933.28**；总利息 ≈ **15996.81**；总还款 ≈ **115996.81**  
  - 第 1 期利息 500.00、本金 1433.28（与摊还表一致）
- **进页样例（必填）**：加载上述默认值并 `loadSample()` **自动算出** EMI 与前 12 期摊还；H2 Example 数字与结果区一致

## 页面模块清单（与 tool-creation 对齐）

> 勾选前已完成「清单前检索覆盖优化」且 `coverage:gate --phase=0b` 绿。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [x] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
