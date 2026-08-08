# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`smart-website-color-scheme`  
**路径**：`/tools/smart-website-color-scheme`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`  
**方法对齐**：`docs/2026-08-08-site-color-system.md`

> IG 依据：策略文档 §3.1 / §3.8。对齐方向文档专题 D.1 / D.2。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. website color scheme generator / UI color scheme
  2. 智能配色 / smart color scheme（中文主流量说法；EN 用 smart 表「按规则自动推导」，非 LLM 承诺）
  3. CSS color variables / design tokens for website（→ 导出区，不拆「仅 CSS vars」薄页）
  4. semantic color tokens（bg/surface/action/link）
  5. brand + neutrals / accessible theme（→ 中性衍生 + 方案内自检；精调 Related 对比页）
- 用户真实任务：选定品牌主色后，得到一套**可落地的浅色站语义色板**（页面底、卡片面、正文/次要字、边框、中性链接、行动色及其 hover/soft/focus、固定状态色），在迷你 chrome 预览里看是否「链接刷成品牌色」，并复制 `:root` CSS。
- [x] 竞品 SERP：Coolors（灵感板）、Realtime Colors / Huebert（UI scheme + 预览）、ColorUI/DesignSystems（OKLCH 色阶+语义）、中文 meetsite/配色宝/「网站配色生成器」（主色→色阶+部分语义+CSS，教育浅）。
- [x] 缺口 ≥3：① 多数把 **link 与 primary/action 绑死**，未讲「链接默认中性」② **状态色（danger 等）与品牌主色解耦**写不清或跟主题一起变 ③ **primitives → semantics → components** 分层与「组件禁止写死 HEX」规则缺教育 ④ 与「单色 50–950 token」工具边界糊，易 doorway ⑤ 十语检索向少
- [x] 增益 ≥3：① Rules：分层流程 + link≠action + status≠brand（对齐本站文档）② 边界：非法 HEX、过浅主色导致按钮字对比失败、琥珀主题仍保持 danger 红 ③ Use cases：工具站 chrome、落地页主题、多品牌 `data-theme` ④ Example：本站 teal `#0F6E8C` 样例方案 ⑤ W3C WCAG 对比 + Primer/SGDS 语义色参考链 ⑥ 本地 ⑧ 进页自动生成完整 token 表 ⑨ related ≥2
- [x] 长尾：CSS variables / semantic tokens / multi-theme → **合并本页模块**；色阶深度 → Related `brand-color-token-pack`；精细 AA 调色 → Related `wcag-contrast-checker`
- [x] 权威：https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum/ ；https://primer.style/foundations/color/overview ；https://designsystem.tech.gov.sg/foundations/colour/semantic-colour
- [x] Use cases：浅色 SaaS/工具站主题；落地页品牌换肤；`html[data-theme]` 多主色共用中性骨架
- [x] 边界：非法/缺 `#` HEX；主色过浅导致 `--on-action` 对比失败时警告并建议加深；不解析半透明品牌色；不做暗色整页换肤（v1 浅色方案；暗色可 FAQ 说明后续）
- [x] Example：Brand `#0F6E8C` → `--action` 同色、`--link`≈neutral-800、`--danger` 固定红、`--bg` 微染底 + 导出 CSS
- [x] Related：`brand-color-token-pack`，`wcag-contrast-checker`（可选第三链 `color-from-image`）

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：三层 token；hover/soft/focus 衍生；中性阶固定；对比公式链 WCAG |
| 2 | 边界/失败 | FAQ + 结果区警告（非法 HEX、对比失败） |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | 语义角色表（bg/surface/link/action/danger…） |
| 5 | 权威引用 | WCAG + Primer/SGDS |
| 6 | 本地隐私 | How/FAQ：浏览器本地 |
| 8 | 数值示例 | Example + 进页样例 teal |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C08 · 设计师簇 · **P0**（补「整站方案」位，衔 token + 对比闭环） |
| 场景与行业 | 前端/设计师：品牌主色 → 可粘贴的网站语义配色 + 轻量预览 |
| 技术（包、Tier、本地处理） | Tier 0；纯 JS；复用相对亮度；无 CDN |
| Title (en) | `Smart Website Color Scheme — Semantic CSS Tokens \| {Brand}` |
| Description 要点 | Smart scheme from one brand color → neutrals + action/hover/focus + neutral links + status colors; live UI preview; copy `:root` CSS; sample teal `#0F6E8C`; runs locally (rule-based, not cloud AI). |
| Schema | WebApplication + BreadcrumbList；category `design` |
| FAQ 要点（≥3） | 何谓智能配色（规则推衍非云端 AI）；link 为何不是品牌色；danger 为何不随主题变；与 brand-color-token-pack 区别；如何贴进 CSS；对比不达标怎么办 |
| Disclaimer / References | 非设计咨询替代；WCAG + Primer/SGDS |
| related | brand-color-token-pack, wcag-contrast-checker |
| 验收 | `npm run lint:seo`；进页样例出完整语义表 + 预览；人工抽 zh |
| 工期粗估 | 0.5–1d（交互）+ i18n 多轮 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08（修订：slug 增加智能配色） |
| slug 结论 | **已改为 `smart-website-color-scheme`**：保留 website color scheme，并前置 `smart` 覆盖中文「智能配色」与 EN “smart color scheme”；不用 `ai-`（本工具为规则推衍，禁止暗示云端 AI）；不单独拆 `/tools/智能配色` 或 `smart-color-matching` 薄页 |
| 主检索词 → title/H1 | EN：Smart Website Color Scheme / Semantic CSS Tokens；ZH：智能配色 / 网站颜色搭配方案 |
| 次要关键词 | CSS variables → Copy CSS；semantic tokens → Rules 表；neutrals/brand → 输出分组；accessible → 自检 + Related 对比页；「自动生成配色」→ How/FAQ（规则智能，非模型） |
| 用户搜索习惯 | EN：website color scheme / smart color scheme / CSS variables；ZH：**智能配色**、网站配色方案、网页配色；title 中文侧优先「智能配色」口语，英文侧 Smart + Scheme，不堆 primitives 术语 |
| 优化摘要 | slug/title 同时覆盖「网站方案」+「智能配色」；FAQ 澄清 smart=规则自动推导非 LLM；色阶长尾仍 Related token 页 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格（给实现用）

- **输入**
  - 品牌主色：`type=color` + HEX 文本（必填）
  - 可选：主题名标签（默认 `brand` / 样例 `teal`）；「再加一套主题」最多 4 套（共用中性 + 各自主色）— 对齐本站四主题模型，非强制
  - 按钮：Generate / Load sample / Copy CSS / Copy JSON / Clear
- **输出分组**
  1. **Primitives**：共享 neutrals（0/50/200/300/600/800/950）；当前主题 brand / brand-hover / brand-soft / tint-bg
  2. **Semantics**：`--bg` `--surface` `--text*` `--border*` `--link*` `--action*` `--focus-ring` `--danger` `--success` `--warning` `--info` `--on-action`
  3. **自检**：正文 on surface、muted on surface、on-action on action 的对比比率 + AA 徽章
  4. **轻量预览**（非建站器）：顶栏条 + 侧栏选中条 + 卡片 + 主按钮描边 + 文字链接 + 错误提示字 — 用于验证「链接非品牌色、行动色点缀」
- **核心规则 / 算法（v1，与站内文档一致）**
  - Neutrals：固定浅色工具站灰阶（可文档写死表，跨主题不变）
  - Brand → `--action`；hover = 同色相压暗（如相对亮度降低或 HSL L×0.78）；soft = `rgba(r,g,b,.10)`；focus-ring ≈ `rgba(...,.40)`；氛围 `--bg` = 极淡 brand 染色中性底（或固定 tint 表）
  - `--link` / `--link-hover` = text / text-strong（**中性**），禁止默认等于 `--action`
  - Status：固定四色，不随 brand 变
  - `--on-action`：白或黑，取对比更高者；若均 <4.5 警告
- **失败与边界**：非法 HEX → 错误提示不生成；主色对比失败 → 仍生成但标 Warning；多主题时切换预览 `data-theme` 模拟
- **示例**：`#0F6E8C` → 见站内文档 §5.2 teal 行
- **进页样例（必填）**：默认 HEX `#0F6E8C`（teal）；进页 `loadSample()` → `generate()`，结果区展示完整语义 token 表 + 预览已着色 + 自检徽章；与 H2 Example 文案一致

## 页面模块清单（与 tool-creation 对齐）

> 覆盖表已完成，下列为实现承诺。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works（三层：primitives → semantics → components）
- [x] Formula / Rules（衍生规则 + link≠action + status≠brand + 对比）
- [x] Example（固定文案 = teal 样例）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（WCAG + 建议 Primer/SGDS）
- [ ] Disclaimer（非 YMYL，可选一句「非专业设计咨询」）
- [x] `03-locale-briefs.md` 已填（实现十语前；状态 `briefs-ready`）
