# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`brand-style-guide`  
**路径**：`/tools/brand-style-guide`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（`pending-native-review` — ar/ja/ru）  
**模块方案**：见 `notes.md`

> 已实现：`src/pages/brandStyleGuidePage.ts` + catalog 分片 + 十语 i18n；`lint:seo` OK。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. **brand style guide** / brand guidelines（EN 主检索）
  2. brand style guide **generator** / maker（工具意图；落 H1 副句「generate… you can edit」，不堆进 slug）
  3. brand design guidelines / brand book（→ desc / FAQ；不拆 URL）
  4. **品牌手册** / **品牌设计规范** / VI 手册（ZH 主检索）
  5. logo usage / Do’s and Don’ts / modular brand guide（→ 模块与样例区）
- 用户真实任务：用品牌名、主色、性格得到一份**可编辑、可导出**的视觉规范草稿（Logo 用法、色、字、间距、Do/Don’t），而不是云端 AI 黑盒长文或仅色板。
- [x] 竞品 SERP 前大致提供什么？
  - EN：Guidelines.online（上传 Logo→托管单页）、StyleGuideGen（向导→PDF/HTML/LLM prompt）、Storyflow/Scrollytelling/Autoposting（**AI** 生成 style guide / 可编辑画布）
  - ZH：uBrand / Zoviz「品牌手册生成器」、标智客/Sologo/Flato 偏 **VI 套件/物料**（名片门头）或 AI Brand Kit
- [x] 缺口 ≥3：
  1. 多数强调 **云端 AI / 上传托管**，缺少「规则可解释 + 浏览器本地」叙事
  2. **模块开关**与「元素级手动覆写（smart|manual）」讲不清；常是整页黑盒或静态模板
  3. **Do/Don’t 样例**与净空/最小尺寸等**可计算规则**弱；或与 VI 印刷物料生成器混意图
  4. 与「色阶 token / 网站语义 CSS」工具边界糊，易 doorway
  5. 十语检索向少；中文「品牌手册」与 EN style guide 常机翻同构
- [x] 增益 ≥3（§3.1）：
  1. **#1 规则**：性格×行业映射表可见；Logo 净空倍率、字阶比率写进 Rules
  2. **#2 边界**：对比失败警告；关模块不导出；商标/非官方结构样例免责
  3. **#3 场景**：独立站开品牌；外包交付规范；小团队多触点统一
  4. **#4 对照**：模块树 M0–M9；结构 preset Strict / Product / Friendly（学 NASA/Material/Mailchimp 结构，不抄资产）
  5. **#5 权威**：WCAG 对比；Material Styles / Carbon foundations 公开链接作系统化参考
  6. **#6 本地**：生成与 Logo 预览不上传
  7. **#8 示例**：进页 Northline Studio 样例跑出完整预览
  8. **#9 Related**：色 token / 网站语义色 / 对比度
- [x] 长尾：brand book / VI 手册 / logo guidelines / voice tone → **本页模块开关**；色阶深度 → Related token；网站 `:root` → Related color-scheme；不拆近义薄页
- [x] 权威来源 URL：
  - https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum/
  - https://m3.material.io/styles
  - https://carbondesignsystem.com/guidelines/color/overview/
  - （结构教育链，非资产下载）https://www.nasa.gov/nasa-brand-center/brand-guidelines/
- [x] Use cases：独立站从零写第一版规范；外包交付给客户可改的 Markdown；社媒/站点共用同一套 Do/Don’t
- [x] 边界：缺主色→用中性默认并提示；非法 HEX→不推衍色章；对比不达标→警告仍可导出；关闭模块→预览目录与导出省略；不提供第三方商标文件包
- [x] Example / FAQ：固定样例品牌与进页结果一致；FAQ 澄清 smart≠云端 AI、非官方 Brand Kit、与色板工具区别
- [x] Related：`brand-color-token-pack`，`smart-website-color-scheme`，`wcag-contrast-checker`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：映射表 + 净空/字阶；How：模块→元素→样例 |
| 2 | 边界/失败 | 结果区警告 + FAQ + Disclaimer |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | 模块开关表；三 preset 对照 |
| 5 | 权威引用 | WCAG + Material/Carbon +（可选）NASA 结构页 |
| 6 | 本地隐私 | How/FAQ |
| 7 | 多语言 | 十语 brief → 实现 |
| 8 | 数值示例 | Example + 进页样例 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C08 设计 SEO；设计师簇；**P1**（色工具闭环之后） |
| 场景与行业 | 品牌规范草稿：Logo/色/字/间距 + Do/Don’t；可导出 |
| 技术（包、Tier、本地处理） | Tier 0；纯 JS 映射表；可选本地 Logo 文件预览；MD/JSON 导出 |
| Title (en) | `Brand Style Guide — Generate a modular draft you can edit \| {Brand}` |
| Description 要点 | Build a brand style guide from name, industry, primary color, and personality: modules for logo clear space, colors, type, spacing, and Do/Don’t samples. Rule-based smart defaults you can override field-by-field; export Markdown/JSON. Runs locally—not a cloud AI brand kit. Sample: Northline Studio. Then refine colors with our token and website scheme tools. |
| Schema | WebApplication + BreadcrumbList；category `design` |
| FAQ 要点（≥3） | 「智能」如何工作（规则非 LLM）；能否当律师审过的商标规范；与色板/网站配色工具区别；模块关掉还导出吗；结构 preset 是否抄 NASA 资产 |
| Disclaimer / References | 输出为可编辑草稿，非法律意见、非第三方商标授权；WCAG；Material/Carbon foundations；结构参考链注明非附属 |
| related | brand-color-token-pack, smart-website-color-scheme, wcag-contrast-checker |
| 验收 | `npm run lint:seo`；进页样例出完整预览；人工抽 zh |
| 工期粗估 | 1–1.5d 交互 + i18n 多轮 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | **已改为 `brand-style-guide`**（夹名同步）。理由：EN SERP/竞品主词是 **brand style guide** / brand guidelines generator，强于 `brand-design-guideline`；不加 `generator`/`ai-` 进 slug（工具站惯例；且禁止 AI 误导）。不拆 `brand-book` / `vi-manual` / `logo-guidelines` 薄页。 |
| 主检索词 → title/H1 | EN：**Brand Style Guide** + 副句 Generate… you can edit；ZH：**品牌手册** / **品牌设计规范**（口语主词进 H1，勿「模块、元素、样例」目录腔） |
| 次要关键词 → desc / FAQ / Use cases | brand guidelines / brand book → desc；generator/maker → How/FAQ（澄清规则智能）；logo Do/Don’t / clear space → Rules + 样例区；VI 手册 → zh FAQ/Use cases；modular → How；export Markdown → 结果区 |
| 用户搜索习惯判断 | EN 搜 style guide / brand guidelines 多于 “design guideline”；ZH 搜「品牌手册」「品牌设计规范」「VI」；要「生成器」但厌恶空壳 AI 文时强调可改、本地、规则 |
| 优化摘要 | slug/title 对齐 style guide；智能=规则预填写进 desc/FAQ；与 AI Brand Kit / VI 物料站划清；色深化走 Related |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格（给实现用）

- **输入**
  - 品牌名（text）；行业（select）；主色（color + HEX）；性格标签（multi chips：calm / energetic / luxury / technical / playful / bold）
  - 结构 preset：Strict mark | Product system | Friendly brand（切换模块默认开关 + 文案模板，可再改）
  - 模块开关：M0–M5、M9 默认开；M6–M8 默认关（见 `notes.md`）
  - 各元素表单；已改字段标 `manual`；按钮：Generate / Regenerate smart-only / Load sample / Copy Markdown / Copy JSON / Clear
  - 可选：本地选择 Logo 图仅预览（不上传）
- **输出**
  - 实时规范预览（按开启模块目录）
  - 每模块：元素值 + Do/Don’t 样例卡
  - 色章内关键对自检徽章；失败 Warning
  - 导出 Markdown（人读）+ JSON（`{ meta, modules, elements, samples }`）
- **核心规则 / 算法**
  - `notes.md` §5 性格映射 → 圆角、主色面积建议、字体角色、Voice 要点
  - 主色 → secondary/accent/neutrals 简化推衍；status 与品牌解耦
  - Logo 净空默认 `1×` 字标高度（Strict preset 可 `1.5×`）；最小尺寸按触点表
  - Regenerate smart-only：只覆写 `source===smart` 字段
- **失败与边界**：见 IG「边界」；空品牌名用占位名仍可预览
- **示例 Input → Output**：Northline Studio；industry=saas；HEX=`#0F6E8C`；tags=calm+technical；preset=Product → M0–M5+M9 完整草稿
- **进页样例（必填）**：默认上述样例；进页 `loadSample()` → `generate()`，预览区已有完整规范 + Example H2 文案一致

## 页面模块清单（与 tool-creation 对齐）

> 覆盖表已完成，下列为实现承诺。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works（模块→元素→样例；智能预填再手改）
- [x] Formula / Rules（映射表 + 净空/字阶 + preset 说明）
- [x] Example（固定 = Northline 样例）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（WCAG + Material/Carbon；可选 NASA 结构）
- [x] Disclaimer（草稿非法律意见；结构样例非官方附属；非云端 AI）
- [x] `03-locale-briefs.md` 已填（`briefs-ready`）
