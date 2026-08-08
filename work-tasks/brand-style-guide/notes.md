# notes — Brand Design Guideline 调研与模块方案

**日期**：2026-08-08（修订：slug → `brand-style-guide`；覆盖表见 `02`）  
**状态**：调研定稿；`02`=`ready`；`03`=`briefs-ready`  
**计划路径**：`/tools/brand-style-guide`  
**产品目标**：智能预填 + 全量手动可调的 Brand Style Guide；结构 = **模块 → 元素 → 样例**。

---

## 1. 概念分层（本站用语）

| 层级 | 含义 | 工具里怎么呈现 |
|---|---|---|
| **Guideline（整份规范）** | 一份可导出的品牌设计规范文档 | 预览区 + Export |
| **Module（模块）** | 规范的大章节；可开关 | 左侧模块开关 / 勾选 |
| **Element（元素）** | 模块内可配置字段（色值、字号、净空规则…） | 表单控件；智能默认 + 手动覆写标记 |
| **Sample（样例）** | Do / Don’t 示意，或「结构参考」预设 | 卡片：允许 / 禁止；可换示例文案 |

**智能 vs 手动**

```
输入：品牌名 / 行业 / 主色 / 性格标签（冷静·活力·奢华·技术…）/ 可选 Logo 占位
        ↓ 规则引擎（可解释）
预填：各模块元素默认值 + 默认 Do/Don’t 文案
        ↓ 用户覆写任一元素
定稿：导出 Markdown / HTML / JSON（tokens 子集）
```

- 每个元素保留 `source: smart | manual`（或「已改」徽章）。
- 「重新智能填充」只覆盖仍为 `smart` 的字段，或提供「覆盖全部 / 仅未改」选项。
- 模块关闭 = 不出现在导出与预览目录（元素值可保留以便再开）。

---

## 2. 建议模块树（MVP → 扩展）

> MVP 建议默认开启 M0–M5；M6–M9 默认关，可勾选。

### M0 · Brand Foundation（品牌基础）

| 元素 | 类型 | 智能预填线索 | 样例 |
|---|---|---|---|
| Brand name | text | 用户输入 | — |
| One-liner / promise | text | 行业模板句 | 好/坏口号对比（勿空话） |
| Personality tags | chips | 用户选 → 驱动后续默认 | 标签释义卡 |
| Audience | text | 行业默认 | — |
| Do / Don’t tone bullets | list | 性格映射 | 语气正反例 |

### M1 · Logo & Mark（标识）

| 元素 | 类型 | 智能预填线索 | 样例 |
|---|---|---|---|
| Logo variants list | checklist | 默认 Primary / Reverse / Mono | 变体命名约定 |
| Clear space | formula | 以「字标高度 × N」表达 | 净空正确/侵入 |
| Min size | number+unit | 行业默认（屏 16–24px 等） | 过小不可读 |
| Misuse rules | list | 通用：勿拉伸/改色/加阴影 | Do/Don’t 六宫格 |
| Placement priority | enum | 角标 / 居中等 | 布局示意 |

### M2 · Color（色彩）

| 元素 | 类型 | 智能预填线索 | 样例 |
|---|---|---|---|
| Primary | color | 用户主色 | 色块 + HEX |
| Secondary / Accent | color | 互补/邻近推衍 | — |
| Neutrals | scale | 与 `smart-website-color-scheme` 同逻辑简化 | 灰阶条 |
| Semantic status | colors | 与品牌解耦的成功/警告/危险 | 状态≠品牌色说明 |
| Link vs Action | note | 本站已验证规则摘要 | 链过去细化 |
| Contrast gate | pass/fail | WCAG 关键对 | 链 `wcag-contrast-checker` |
| Usage ratios | text | 「主色 ≤X% 面积」类建议 | 大面积滥用 Don’t |

### M3 · Typography（字体）

| 元素 | 类型 | 智能预填线索 | 样例 |
|---|---|---|---|
| Display / Heading / Body / Mono | font families | 性格 → 建议字体族（系统/开源名） | 角色对照 |
| Type scale | table | 基准字号 × 比率（可链 type-scale） | 阶梯表 |
| Weight rules | enum | 标题粗 / 正文常规 | — |
| Line-height / tracking | numbers | 角色默认 | — |
| Don’t | list | 勿装饰字体写正文等 | 正反例 |

### M4 · Spacing & Layout（间距与版式）

| 元素 | 类型 | 智能预填线索 | 样例 |
|---|---|---|---|
| Base unit | number | 4 / 8 px | 网格示意 |
| Radius scale | tokens | 性格 → 方/软 | 圆角阶梯 |
| Grid / columns | text | 12 栏简版说明 | — |
| Elevation / shadow | tokens | 可选浅阴影阶 | 勿多层炫光 Don’t |

### M5 · Imagery & Iconography（图像与图标）

| 元素 | 类型 | 智能预填线索 | 样例 |
|---|---|---|---|
| Photo style | tags | 行业默认（实拍/插画/抽象） | 风格 moodboard 文案 |
| Icon style | enum | outline / filled / duotone | 混用 Don’t |
| Stroke / corner | numbers | 与 radius 对齐 | — |
| Illustration rules | list | 可选模块 | — |

### M6 · Motion（动效）— 默认关

| 元素 | 样例要点 |
|---|---|
| Duration / easing tokens | 快反馈 / 慢入场 |
| Prefer reduce-motion | 无障碍一句 |
| Don’t | 勿连续弹跳/闪烁 |

### M7 · Voice & Tone（文案语气）— 默认关

| 元素 | 样例要点 |
|---|---|
| Voice principles | 参考 Mailchimp「原则列表」结构 |
| Writing Do/Don’t | 短句对比 |
| UI microcopy patterns | 按钮动词表 |

### M8 · Application / Touchpoints（应用触点）— 默认关

| 元素 | 样例要点 |
|---|---|
| Web / App / Social / Print 清单 | 每触点最小规范子集 |
| Favicon / OG 提示 | Related 交付包工具 |

### M9 · Accessibility & Legal（无障碍与使用边界）— 建议默认开精简版

| 元素 | 样例要点 |
|---|---|
| Contrast policy | AA 正文 / 大字 |
| Trademark / third-party use | 「勿暗示 endorsement」类通用句（教育） |
| Asset ownership note | 用户自有资产声明 |

---

## 3. 知名品牌 Guideline 样例（结构对照）

> **用途**：模块划分与「规则类型」参考。  
> **禁止**：在工具内提供可下载的官方 Logo/色库冒充 Brand Kit；引用仅链到官方公开页。

### 3.1 NASA — Graphics Standards / Brand Guidelines

- **官方**：https://www.nasa.gov/nasa-brand-center/brand-guidelines/  
- **类型**：强合规政府标识规范（14 CFR 1221）
- **模块印象**：Insignia（Meatball）→ Typography → Logotype（Worm）→ Supporting Elements → Restrictions
- **可学元素**：变体（full / one-color / reverse）；**protected space**；最小尺寸；背景色约束；**违规列表**；标识与封印分工（Seal vs Insignia）
- **对本工具**：强化 M1「净空/最小尺寸/Don’t」与 M9「使用边界」；不必做成宇航局级审批流

### 3.2 Spotify — Partner Design & Branding Guidelines

- **官方**：https://developer.spotify.com/documentation/design  
- **类型**：第三方集成 / 合作方品牌使用规范
- **模块印象**：Logo（full vs icon）→ Exclusion zone → 与元数据/内容归属 → 禁止仿造品牌元素
- **可学元素**：「图标可独用、字标不可无图标」；排他区用「半个图标高度」等**可计算规则**；禁止合牌暗示
- **对本工具**：M1 变体规则 + M8 合作/嵌入场景的短规则模板

### 3.3 IBM — Brand → Design Language → Carbon

- **官方入口**：IBM Brand Center；实现层 https://carbondesignsystem.com/ （Design Language 与 Carbon 分层）
- **类型**：企业品牌 + 产品 Design System 分层
- **模块印象**：Brand story → Design Language（色、字、2x grid、图标）→ Carbon tokens/themes/components
- **可学元素**：**role-based color tokens**；多主题映射同一 token；字体角色（IBM Plex）；品牌层与产品 UI 层分离
- **对本工具**：M2/M3 用「角色名」而非仅 HEX；导出 JSON 时用语义 token 名；说明「品牌规范 ≠ 完整组件库」

### 3.4 Google Material Design 3 — Styles

- **官方**：https://m3.material.io/styles  
- **类型**：跨产品数字界面系统（非单一消费品牌手册，但是公开「样式模块」标杆）
- **模块印象**：Color / Typography / Shape / Motion / Iconography 等 Styles 并列
- **可学元素**：从种子色生成 tonal palette；Shape scale；动效 token；系统化程度高
- **对本工具**：智能预填可借鉴「种子色 → 色阶/角色」；M4 Shape、M6 Motion 作可选模块

### 3.5 Uber — Brand system / Base

- **公开叙事**：品牌页强调核心视觉元素系统；产品侧 Base（typography / color / grid / motion）+ Base Web
- **类型**：品牌故事系统 + 产品 design language
- **可学元素**：少数核心元素讲故事；字体**按角色**（Display / Heading / Label / Paragraph）；「Less is more / Go big」原则驱动默认
- **对本工具**：M0 Personality → 直接映射原则句；M3 四角色而非十几级随意命名

### 3.6 Airbnb — Design Language System（DLS）叙事

- **公开材料**：设计团队文章 / DLS 回顾（非完整对外 Brand PDF）
- **类型**：产品视觉语言 + 原则（Unified / Universal / Iconic / Conversational）
- **可学元素**：原则驱动组件；克制色板；图片优先；组件按 Navigation / Content / Image 等分类（偏产品，不全是品牌手册）
- **对本工具**：M0 原则卡片；提醒用户「品牌手册」与「组件库」可分阶段，MVP 不做组件库

### 3.7 Mailchimp — Brand assets + Voice

- **官方资产页**：https://mailchimp.com/about/brand-assets/  
- **Voice**：Intuit Content Design — Mailchimp voice（Expert Absurdist 等）
- **类型**：轻量公开资产页 + 强文案人格
- **可学元素**：Hero color + accent；Logo + 吉祥物配对规则；**Voice principles 列表** + 正反例
- **对本工具**：M2 主色叙事命名（可给色起名）；M7 Voice 模块模板

### 3.8 Atlassian — Design System foundations

- **官方**：https://atlassian.design/ （Logos、Color、Typography、Spacing、Content）
- **类型**：产品 Design System + Logo 使用分层（Brand / inverse / neutral）
- **可学元素**：8px 节奏；token 化；Logo 在营销 vs 产品内用法不同；中性主导 + 语义饱和色克制
- **对本工具**：M4 间距；M1 色彩环境变体；导出与「产品 UI 克制」提示

---

## 4. 样例（Sample）在产品里的三种形态

| 形态 | 说明 | 来源 |
|---|---|---|
| **A. Do/Don’t 示意** | CSS/SVG 示意块 + 短文案；不依赖商标图 | 规则引擎按模块生成 |
| **B. 结构参考预设** | 「NASA 型 / Material 型 / Mailchimp 轻量型」——只切换**模块开关组合 + 规则措辞模板** | 内置 preset id |
| **C. 用户自有样例** | 上传自有 Logo（本地预览）填入 M1 | 不上传服务器 |

结构参考预设建议（MVP 3 个即可）：

1. **Strict mark**（学 NASA/Spotify）：强 M1 + M9，弱 Motion  
2. **Product system**（学 Material/Carbon/Atlassian）：强 M2–M4 token，弱 Voice  
3. **Friendly brand**（学 Mailchimp）：强 M0/M2/M7，轻 Layout  

---

## 5. 智能规则引擎（草案，可解释）

输入维度示例：

- `industry`: saas / ecommerce / food / education / nonprofit / personal  
- `personality`: calm | energetic | luxury | technical | playful | bold  
- `primaryHex`  
- `density`: compact | comfortable  

映射示例（实现时落表，须在 UI 显示「为何如此默认」）：

| 性格 | 圆角 | 主色面积建议 | 字体倾向 | Voice |
|---|---|---|---|---|
| calm | sm | ≤15% | 人文衬线或中性无衬线 | 克制、短句 |
| energetic | md | ≤25% | 几何无衬线 | 动词多、感叹克制 |
| luxury | none/sm | ≤10% | 高对比衬线 + 细无衬线 | 少emoji、留白 |
| technical | sm | ≤20% | 无衬线 + mono | 精确、术语可保留 |
| playful | lg | ≤30% | 圆润无衬线 | 可幽默但 UI 仍清晰 |

颜色：主色 → 推衍 secondary/accent/neutrals；状态色固定语义、与品牌解耦（对齐本站色系统文档）。

---

## 6. 导出与和现有工具的衔接

| 导出 | 内容 |
|---|---|
| Markdown | 完整 guideline（按开启模块） |
| JSON | `{ modules, elements, meta }` 便于再编辑 |
| CSS 片段 | 仅颜色/字号/间距 token 子集 → 可「送到」`smart-website-color-scheme` 思路 |

Related 文案方向：颜色精调 / 对比度 / 色阶 /（未来）字阶与 Favicon 包。

---

## 7. 竞品与差异化（粗）

| 类型 | 例子 | 本站差异 |
|---|---|---|
| 模板 PDF/Notion | 静态 Brand Book 模板 | 可交互智能预填 + 可解释默认 |
| Coolors 等 | 色板灵感 | 本工具是**多模块规范文档**，色只是一章 |
| Frontify 等 | 企业 DAM + 规范托管 | 本站不做托管/协作权限；本地生成 |
| 官方 Brand Center | NASA/Spotify… | 我们做**生成器 + 结构教育**，不做官方镜像 |

---

## 8. 风险与合规

1. **商标**：结构参考须标注「非官方、非附属」；禁止再分发他人标识文件。  
2. **Scaled content**：十语须按 localization 规则重写；禁止批量空壳「brand guide」页。  
3. **Doorway**：Logo-only / Color-only / Voice-only 不拆独立薄 URL。  
4. **期望管理**：输出是「可编辑的规范草稿」，不是律师审过的商标使用许可。

---

## 9. 建议实现分期

| 期 | 范围 |
|---|---|
| **P0** | M0–M5 + M9 精简；智能预填；手动覆写；Do/Don’t；MD 导出；3 个结构 preset |
| **P1** | M6 Motion、M7 Voice；JSON 导出；与 color-scheme / contrast 深链带参 |
| **P2** | 简易 PDF 打印样式；本地 Logo 上传预览；更多行业模板 |

---

## 10. 下一步

- [x] 清单前检索覆盖 → `02`（slug 改为 `brand-style-guide`）
- [x] `02` IG / 交互 / 清单 → `ready` → **`implemented`**
- [x] `03` 十语 brief → 落地 i18n（ar/ja/ru 待母语抽查）
- [x] 页面实现：`brandStyleGuidePage.ts` + catalog + icon + README；`lint:seo` / `build:site` OK
- [ ] 抽查语覆盖优化 + 清 ar/ja/ru 待母语 → `i18n-done`
