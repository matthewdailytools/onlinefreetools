# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`open-graph-preview`
**路径**：`/tools/open-graph-preview`
**主方向**：A（浏览器 JS 能力）+ B3 场景
**YMYL**：否

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：Meta 官方 [Open Graph protocol](https://ogp.me/) / X [Card Validator](https://developer.x.com/en/docs/twitter-for-websites/cards/overview/markup)（当前为 X 文档）。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. open graph preview / og preview
  2. social share preview
  3. og tag checker / open graph validator
  4. twitter card preview
  5. 链接分享预览 / 社交卡片预览（中文）
- 用户真实任务：把页面 head 里的 og / twitter 标签（或 URL）粘贴进来，看它在 Facebook、X、WhatsApp 等平台分享时会显示成什么样的卡片，缺什么字段。
- [x] 竞品 SERP 前 5–10 都提供了什么？URL 输入 + Facebook/X 预览图 + og 标签列表。多数需服务端抓取。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. og:image 尺寸与不同平台裁剪差异（1.91:1 vs 2:1 vs 1:1）
  2. twitter:card 各类型（summary / summary_large_image）与 og 的关系
  3. 缺 og:title/og:image 时平台各自 fallback 规则
  4. 无 og 时各平台取什么（title/description/第一张图）
- [x] 我们补哪 ≥3 条增益？
  - **① 公式/规则**：og 必备字段表 + 各平台图片比例/裁剪差异
  - **② 边界**：缺字段 fallback 规则、无 og 标签时的表现、URL 拉取失败
  - **⑤ 权威引用**：ogp.me + X Card docs
  - **⑧ 数值示例**：固定样例标签 → 预览卡片
  - **⑨ Related ≥2**
- [x] 长尾：合并进本页（OG + Twitter Card + 多平台同页，禁拆平台 URL）
- [x] 权威来源 URL：https://ogp.me/ + https://developer.x.com/en/docs/twitter-for-websites/cards/overview/markup
- [x] 行业/场景 Use case 文案草稿：发布前检查分享卡片；改 og:image 尺寸；排查分享图不显示
- [x] 边界/失败案例草稿：无 og 标签；缺 og:image；图片比例错误；URL 抓取超时
- [x] 结果区信息如何落到可索引 Example / FAQ：固定样例标签 → 三平台卡片 + 字段表；FAQ 讲 fallback 与比例
- [x] Related / 主题内链计划（≥2）：`meta-tag-generator`、`meta-serp-preview`、`on-page-seo-checker`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | og 必备字段表 + 平台图片比例表 |
| 2 | 边界/失败 | FAQ：缺字段 fallback、无 og 表现、抓取失败 |
| 3 | 场景语境 | Use cases：发布前检查 / 图片尺寸排查 |
| 5 | 权威引用 | ogp.me + X Card |
| 8 | 数值示例 | 固定样例 → 预览卡片 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · social 模块 · S2 批次 |
| 场景与行业 | 内容运营 / 站长：分享卡片预览 |
| 技术 | Tier 0；正则解析 og:/twitter: 标签；CSS 模拟卡片；URL 模式复用 Worker fetch；`localProcessing: false` |
| Title (en) | Open Graph Preview — Check social share cards |
| Description 要点 | Open Graph tags decide how your page looks every time it is shared — a missing image or title costs you clicks and shares. Paste your og:/twitter:card tags or a URL to preview the Facebook, X and WhatsApp-style share card, spot missing fields and fix image ratios. Steps: paste tags or fetch a URL, read the three preview cards and the field table, then fix what is missing. Paste mode runs on your device; URL mode fetches the page once and does not store it. Example: a page with a 1200×630 og:image shared as a large card. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 没有 og 标签会发生什么；og:image 需要多大；twitter:card 与 og 关系；缺 og:image 平台怎么处理 |
| related | meta-tag-generator, meta-serp-preview, on-page-seo-checker |
| 验收 | `npm run lint:seo`；人工抽 zh 等 |
| 工期粗估 | 1d（含 10 语） |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 保留 `open-graph-preview`（主词 open graph preview / og checker；禁拆平台 URL） |
| 主检索词 → title/H1 | **Open Graph Preview** — Check social share cards（H1 含主词 Open Graph Preview） |
| 次要关键词 → desc / FAQ / Use cases | og tag checker → desc；twitter card preview → desc/FAQ；social share preview → Use cases/FAQ；og image size → FAQ；fallback → FAQ |
| 用户搜索习惯判断 | en 搜 “open graph preview / og checker / social share preview”；zh 搜「Open Graph 预览 / 链接分享预览 / og 标签」 |
| 优化摘要 | H1 结果向「Check social share cards」；desc 含粘贴/URL 双模式 + 本地与隐私说明；次词落点 FAQ/Use cases；补充平台 fallback 规则 IG |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=open-graph-preview --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 交互规格（给实现用）

- 输入：og:/twitter: 标签文本（textarea）或 URL；两模式互斥选择
- 输出：Facebook / X / 通用（WhatsApp 风格）三张预览卡片 + 字段状态表（必需/可选/缺失）+ 图片比例警告
- 核心规则 / 算法：
  - 解析 `property="og:*"` / `name="twitter:*"` / `<meta property>` 两种写法
  - 必备字段：og:title、og:description、og:image（missing → 提示）
  - 图片比例：og:image 建议 1200×630（1.91:1）；Facebook 2021 后 2:1 或 1:1；twitter:card summary_large_image 建议 1200×628
  - twitter:card 未设置时平台按 og 推断 summary
  - 无 og → 说明平台会取 title/description/首图 fallback
- 失败与边界行为：无任何 og/twitter 标签 → 「未检测到 OG 标签」+ fallback 说明；URL 拉取失败 → 明确错误
- 示例 Input → Output：样例 og 标签集 → 三平台卡片 + 字段表 + 图片比例提示
- **进页样例（必填）**：`loadSample()` 填样例 og 标签并自动渲染预览；与 H2 Example 对齐；进页默认走粘贴模式自动跑样例

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成上一节「清单前检索覆盖优化」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
