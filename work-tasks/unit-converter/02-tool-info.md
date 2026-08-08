# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`unit-converter`  
**路径**：`/tools/unit-converter`  
**主方向**：A  
**YMYL**：否  

## IG 预审

- 目标主词：unit converter；unit conversion calculator；单位换算；单位换算器
- 用户任务：选类别 → 输入数值与源/目标单位 → 得到换算结果；理解因子与温度公式
- [x] 竞品：多类别选择器 + 双向单位；常缺因子表与「不拆页」说明
- [x] 缺口：可见换算因子/温度公式；同单位/非数字边界；与 `square-feet` 面积专页分意图；禁单位对薄页
- [x] 增益：① 因子/公式 ④ 类别假设 ⑧ Example ② 边界 ③ Use cases ⑨ related
- [x] 长尾合并：length/mass/temp/area/volume/speed 同页 Tab；常见单位对作场景文案
- [x] 权威：NIST SI 前缀与单位关系说明；Wikipedia Unit conversion（或 NIST handbook 公开页）
- [x] Related：`square-feet`、`how-to-calculate-percentage-change`

### §3.1 维度

**硬性增益**：① 因子/公式 + ⑧ Example + 与 square-feet 分意图说明

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Unit Converter — Length / Mass / Temperature / Area / Volume / Speed |
| Description | Convert length, mass, temperature, area, volume, and speed on one page. Example: 1 mile → 1.60934 km. Browser-only; educational conversion factors — not a surveying or medical device. |
| related | square-feet, how-to-calculate-percentage-change |
| Schema | WebApplication + BreadcrumbList |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `unit-converter`；非 how-to-calculate；**不**按单位对拆页；面积深度场景指向 `square-feet` |
| 主检索词 → title/H1 | en：**Unit Converter — Length / Mass / Temperature / Area / Volume / Speed**；zh：**单位换算器 — 长度 / 质量 / 温度 / 面积 / 体积 / 速度** |
| 次要关键词 → desc/FAQ | unit conversion calculator → desc；km to miles / Celsius Fahrenheit → Example/FAQ；单位换算器 → zh |
| 用户搜索习惯判断 | en 搜 unit converter / unit conversion；勿堆「米、千克、摄氏」顿号进 H1；温度作类别非独立 URL |
| 优化摘要 | 枢纽向 Unit Converter；六类别直接进 H1（用 / 分隔，避免逗号目录腔）；与 square-feet 分意图 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=unit-converter --phase=0b`

## 交互规格

- 输入：类别（length/mass/temperature/area/volume/speed）；数值；源单位；目标单位
- 输出：换算结果；可选显示因子说明
- 温度：C↔F↔K 专用公式；其余类别：经 SI 基准线性换算
- 样例（长度）：1 mile → **1.60934** km
- 进页默认长度类别 + loadSample
- 失败：非数字；源=目标时直接回显；温度绝对零度以下拒绝

## 页面模块清单

> 勾选前须 0b 绿。

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
