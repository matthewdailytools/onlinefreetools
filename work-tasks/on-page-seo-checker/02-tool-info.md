# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`on-page-seo-checker`
**路径**：`/tools/on-page-seo-checker`
**主方向**：A（浏览器 JS 能力）+ B3 场景
**YMYL**：否

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：Google Search Central — [Meta tags that Google understands](https://developers.google.com/search/docs/crawling-indexing/special-tags) / [Canonical](https://developers.google.com/search/docs/crawling-indexing/canonical) / [hreflang](https://developers.google.com/search/docs/crawling-indexing/international/localized-versions)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. on-page SEO checker / on page seo audit
  2. meta tag checker / meta tags checker
  3. H1 tag checker
  4. canonical tag checker
  5. 页面 SEO 检测 / meta 标签检测（中文）
- 用户真实任务：发布或改版页面后，粘贴 URL 或 HTML 源码，核对 H1、title、meta description、canonical、OG/Twitter、JSON-LD 是否齐全正确，并得到修复建议。
- [x] 竞品 SERP 前 5–10 都提供了什么？URL 输入 + 列表式检查项 + 分数（多来自 SeaOcean/SmallSEOTools 类）；粘贴 HTML 少。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. 各检查项的「为什么重要」与修复写法（只给红绿不给修法）
  2. 多 H1、重复 title、无 canonical 等边界的具体建议
  3. mixed content 与 render-blocking 的判定边界（哪些是提示非硬错误）
  4. JSON-LD 与可见文案一致性说明
- [x] 我们补哪 ≥3 条增益？
  - **① 规则**：每检查项的判定规则 + Google 建议写法（title 长度、H1 唯一性、canonical 自引用）
  - **② 边界**：混合 content 分「错误/警告」、render-blocking 分资源类型、SSR/JS 渲染局限说明
  - **⑤ 权威引用**：Search Central special-tags / canonical / hreflang
  - **⑨ Related ≥2**
- [x] 长尾：合并进本页（meta/H1/canonical/OG/JSON-LD/mixed content/render-blocking 一带多场景，禁拆 140 薄页）
- [x] 权威来源 URL：Search Central 上述 3 条 + MDN `<meta>` 文档
- [x] 行业/场景 Use case 文案草稿：改版前单页体检；模板改造后核对 head；外包页面验收
- [x] 边界/失败案例草稿：粘贴非 HTML；多 H1；重复 title；混合内容仅提示
- [x] 结果区信息如何落到可索引 Example / FAQ：固定样例 HTML → 各检查项结果；FAQ 讲判定边界
- [x] Related / 主题内链计划（≥2）：`meta-serp-preview`、`meta-tag-generator`、`website-headers`、`schema-jsonld-generator`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 每检查项判定规则 + 建议写法表 |
| 2 | 边界/失败 | FAQ：混合 content / render-blocking 边界、SSR 局限、非 HTML 输入 |
| 3 | 场景语境 | Use cases：改版体检 / 模板核对 / 外包验收 |
| 5 | 权威引用 | Search Central special-tags + canonical + MDN |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · onpage 模块 · S2 批次 |
| 场景与行业 | 站长 / SEO：单页标签体检与修复建议 |
| 技术 | Tier 0；DOMParser 本地解析粘贴 HTML + URL 模式复用 Worker fetch；`localProcessing: false`（URL 模式需跨域） |
| Title (en) | On-Page SEO Checker — Find and fix page tag issues |
| Description 要点 | Weak titles, missing meta descriptions, duplicate H1s and broken canonicals quietly cost rankings and clicks. Paste a URL or HTML to audit title, H1, meta description, canonical, Open Graph, JSON-LD, mixed content and render-blocking, each with a fix suggestion. Paste mode runs on your device; URL mode fetches once without storing. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 什么是 on-page SEO 检查；为什么 H1 只能一个；canonical 必须自引用吗；mixed content 为什么提示；JSON-LD 需与正文一致吗 |
| related | meta-serp-preview, meta-tag-generator, website-headers, schema-jsonld-generator |
| 验收 | `npm run lint:seo`；人工抽 zh 等 |
| 工期粗估 | 1–2d（含 10 语） |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 保留 `on-page-seo-checker`（主词 on-page SEO checker / meta tag checker；禁拆 canonical/OG 等薄 URL） |
| 主检索词 → title/H1 | **On-Page SEO Checker** — Find and fix page tag issues（H1 含主词 On-Page SEO Checker） |
| 次要关键词 → desc / FAQ / Use cases | meta tag checker → desc/FAQ；H1 checker → FAQ；canonical tag checker → desc/FAQ；JSON-LD → FAQ；mixed content → FAQ/Use cases；render-blocking → FAQ |
| 用户搜索习惯判断 | en 搜 “on page seo checker / meta tag checker / h1 checker”；zh 搜「页面SEO检测 / meta标签检测 / H1检查」 |
| 优化摘要 | H1 结果向「Find and fix page tag issues」；desc 含粘贴/URL 双模式 + 本地与隐私说明；次词落点 FAQ/Use cases；不以「140 项分数」为卖点 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=on-page-seo-checker --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 交互规格（给实现用）

- 输入：URL（可选）或 HTML 源码（textarea）；两模式互斥选择
- 输出：检查项列表（title / meta description / H1 / canonical / robots meta / OG / Twitter / JSON-LD / mixed content / render-blocking），每项状态（OK / 警告 / 错误）+ 修复建议 + 原文/建议写法
- 核心规则 / 算法：
  - title：存在性、长度建议 ≤ 约 60 字符（像素以 meta-serp 逻辑估算）、唯一性
  - H1：数量（0 → 错误、>1 → 警告、=1 → OK）、位置（body 内）
  - canonical：存在性、是否自引用（非自引用 → 提示）、rel=alternate 共存
  - OG/Twitter：og:title / og:description / og:image 必备项缺失检查
  - JSON-LD：解析 script[type=application/ld+json]，提示与可见文案一致性
  - mixed content：解析 `http://` 资源引用在 HTTPS 上下文 → 警告
  - render-blocking：仅提示 CSS/JS 是否内联或带 defer/async（非真实测速，声明为启发式）
- 失败与边界行为：非 HTML 输入 → 提示不是 HTML；URL 拉取失败 → 明确错误；无法判定项 → 「无法检测」而非假阳性
- 示例 Input → Output：样例 HTML（含 title/H1/canonical/OG/JSON-LD 与一处 http 图片）→ 列表展示 10 项状态与建议
- **进页样例（必填）**：`loadSample()` 填入样例 HTML 并自动跑检查；与 H2 Example 对齐；URL 模式需要网络，进页默认走粘贴 HTML 模式自动跑样例

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
