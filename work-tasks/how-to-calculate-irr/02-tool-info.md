# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-irr`  
**路径**：`/tools/how-to-calculate-irr`  
**主方向**：C  
**YMYL**：是（财务；disclaimer + 权威引用）  
**最近改写**：2026-10-15（薄页逐页改写队列 #31，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文极薄（How 一句；FAQ 为「Sample IRR? / Why Newton? / Advice?」式；description 两段重复拼接）。功能与事实缺陷：

- **样例结论错误**：页面写 −1000, 300, 420, 680 → IRR ≈ 18.9%，实际为 16.34%（Excel `=IRR` 同值）；
- 模板字符串里 `\s` 丢失成 `s`，换行 / 空格分隔的现金流被错误解析（如 `300\n420` 读成 300）；
- 牛顿法只从 10% 起步，多个 IRR 时只返回其中一个、不收敛时只报通用错误；
- 无 NPV / MIRR 对照、无手算插值过程、无按月 / 季度现金流的年化。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：输入一串现金流得到 IRR；能对照课本的插值法；知道是否高于要求收益率；月度现金流要正确年化
- [x] 竞品（calculator.net / omnicalculator / investopedia / Excel IRR 教程类）：多为逐年填框 + 牛顿法单根；少有多 IRR 检出、手算插值过程、月 IRR 有效年化与名义年化对照
- [x] 缺口：一框粘贴（含第 0 期 / 1100*12 重复）；全区间扫描列出全部 IRR；整数百分比插值过程；NPV = 0 验算表；NPV + MIRR；年 / 季 / 月年化
- [x] 增益：① 全部 IRR（−1600, 10000, −10000 → 25% 与 400%）② 插值过程（16% 6.40 / 17% −12.20 → 16.34%）③ 验算表（257.86 + 310.30 + 431.83 = 1,000）④ NPV 130.73 与 MIRR 14.60%（10%）⑤ 月 IRR 1.50% → 有效 19.53% vs 名义 17.97% ⑥ FAQ：好 IRR、课本插值偏差（15%/20% → 16.41%）、多 IRR、IRR vs NPV、月度、MIRR、与 Excel 一致性 ⑦ 权威引用
- [x] 权威：Investopedia — IRR；Microsoft Support — IRR function
- [x] Related：`how-to-calculate-npv`、`how-to-calculate-payback-period`、`how-to-calculate-roi`、`how-to-calculate-cagr`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | IRR Calculator — Find the Internal Rate of Return of Any Cash Flow Series, Step by Step |
| Description (en) | Calculate the internal rate of return (IRR) of an investment from yearly, quarterly or monthly cash flows. See the trial-and-error interpolation, a table proving NPV = 0 at the IRR, NPV and MIRR at your required return, and a warning when there is more than one IRR. |
| related | how-to-calculate-npv, how-to-calculate-payback-period, how-to-calculate-roi, how-to-calculate-cagr |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-irr`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**IRR Calculator — Find the Internal Rate of Return of Any Cash Flow Series, Step by Step**；zh：**内部收益率（IRR）计算器 — 输入现金流算出 IRR，附插值法过程** |
| 次要关键词 → desc/FAQ | how to calculate IRR → How 总答 + 4 步 + 插值行；IRR formula → Formula 1–2；IRR interpolation → 插值行 + Formula 2 + FAQ q2；multiple IRR → 警告行 + FAQ q3；IRR vs NPV → NPV 行 + FAQ q4；monthly IRR / annualize → 每期选择 + 年化行 + FAQ q5；MIRR → MIRR 行 + Formula 4 + FAQ q6；Excel IRR → 结果说明 + FAQ q7；good IRR → FAQ q1 |
| 用户搜索习惯判断 | 结果向（IRR 是多少）+ 过程向（怎么算 / 插值法）；「step by step」是检索主修饰，放副标题；不把 NPV / MIRR 串进 H1 |
| 优化摘要 | 保留 slug；H1 由「IRR Calculator — Internal Rate of Return」扩为含 any cash flow series 与 step by step；desc 去重并写清周期、插值、验算表、NPV/MIRR、多 IRR |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| irr calculator / internal rate of return calculator | 吸（主词） | title / H1 |
| how to calculate irr / irr formula | 吸 | How 总答 + 4 步；Formula 1 |
| irr interpolation formula / trial and error | 吸 | 插值行；Formula 2；FAQ q2 |
| multiple irr | 吸 | 多 IRR 警告；Formula 5；FAQ q3；样例 2 |
| monthly irr to annual | 吸 | 每期选择；年化行；Formula 3；FAQ q5；样例 3 |
| mirr calculator | 吸（次要） | MIRR 行；Formula 4；FAQ q6 |
| irr vs npv | 吸 | NPV 行；FAQ q4 |
| excel irr function | 吸 | 结果说明；FAQ q7；Use case 4 |
| what is a good irr | 吸 | FAQ q1 |
| xirr（不规则日期） | **不吸**（另一输入模型） | 结果说明与 FAQ q7 点明 |
| npv calculator | **不吸**（已有工具） | Related |
| payback period / roi / cagr | **不吸** | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | IRR 计算器，仍成立 |
| 主检索词任务 | 「输入现金流得到 IRR 并看懂怎么来的」——改写前样例结论错（18.9%）、换行输入解析错、多 IRR 不提示 → **不满足**；改写后：正确 IRR、全部根、插值 + 验算表、NPV/MIRR、年化 → **满足** |
| 超出 | 无第二工具抢首屏；NPV / MIRR 只作 IRR 旁的对照行 |
| 有意不满足 | XIRR（按日期）：结果说明与 FAQ 点明，不做 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：初始投资（可选，> 0，按第 0 期流出；留空则列表第一项即第 0 期）；现金流列表（空格 / 换行 / 制表符 / 分号分隔，可含负数，`金额*期数` 重复，最多 600 期）；每期长度（年 / 季 / 月）；要求收益率 %/年（可选，0–100）
- 小数点按页面语言（de/es/pt/id/fr/ru 逗号）；不换行空格（fr/ru 千分位）视为千分位
- 求根：对 ln(1 + r) 在 −99% 到 1000%（每期）均匀取 4000 点找 NPV 变号，二分 200 次；列出全部根
- 输出：IRR（每期）+ 期单位；非年期时年化有效 (1 + r)^k − 1 与名义 r × k；要求收益率下 NPV（常规现金流给出高于 / 低于结论，非常规提示看 NPV）；MIRR（融资与再投资同用要求收益率，非年期给出年化）；单根时：整数百分比插值过程、NPV = 0 验算、逐期折现表；多根时：列出全部根并提示改看 NPV / MIRR；单根但多次变号时提醒
- 报错：投资非正数 / 多值；现金流不足；非数字记号（点名）；收益率越界；超过 600 期；全为同号；区间内无根
- 样例轮换：1000 / 300 420 680 / 年 / 10%（默认，Example 一致：16.34%、NPV 130.73、MIRR 14.60%）→ 1600 / 10000 −10000 / 年 / 10%（25% 与 400%、NPV −773.55、MIRR 5.60%）→ 12000 / 1100*12 / 月 / 8%（1.50%/月、有效 19.53%、名义 17.97%、NPV 664.14、MIRR 13.98%/年）
- Clear 只清空、每期恢复为年，不重载样例；进度 HUD：不适用

## 验收记录（2026-10-15，英文本地预渲染页）

- 样例 1：16.34%；NPV 130.73（10%），高于要求收益率；MIRR 14.60%；插值 16% 6.40 / 17% −12.20 ≈ 16.34%；验算表折现系数 0.8595 / 0.7388 / 0.6350，现值 257.86 / 310.30 / 431.83，累计末行 0
- 样例 2：25.00% / 400.00%，变号 2 次警告，验算表隐藏；NPV −773.55 并提示以 NPV 判断；MIRR 5.60%
- 样例 3：1.50% 每月；年化 19.53%，名义 17.97%；NPV 664.14（8%）；MIRR 1.10%/期 ≈ 13.98%/年
- 投资留空 + 换行列表 −1000 / 300 / 420 / 680 → 16.34%；逗号加空格列表同值；无要求收益率时提示补填，MIRR 行隐藏
- 报错：`abc` 点名；全正数提示需要正负现金流；投资 −5 提示；100 / 1 1 → −89.49%（合法负 IRR）
- Clear：清空输入、每期恢复为年、隐藏结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
