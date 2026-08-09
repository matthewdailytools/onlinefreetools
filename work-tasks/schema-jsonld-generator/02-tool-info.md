# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`schema-jsonld-generator`（由 `faq-schema-generator` 演进，多类型单页）
**路径**：`/tools/schema-jsonld-generator`
**主方向**：A（浏览器 JS 能力）+ B3 场景
**YMYL**：否

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：[Schema.org](https://schema.org/) · [Google 结构化数据指南](https://developers.google.com/search/docs/appearance/structured-data) · Google Search Central — [了解 JSON-LD](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. JSON-LD generator / schema markup generator
  2. FAQ schema generator
  3. JSON-LD generator 中文 / 结构化数据生成器
  4. schema generator for SEO
  5. Article / Breadcrumb schema（场景，不拆页）
- 用户真实任务：选一种结构化数据类型，填字段，得到可粘贴的 JSON-LD 片段，并确认它没有语法错误、与页面可见内容一致。
- [x] 竞品 SERP 前 5–10 都提供了什么？类型下拉、字段表单、JSON 输出框、复制按钮。多数单类型页（faq / article / breadcrumb 各自一页）。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. 常见类型用法的边界（FAQ 富结果已退役的现状）
  2. JSON-LD 校验反馈（语法错、字段缺、@id 一致性）
  3. 与可见正文一致性的要求（Google 政策）
  4. 嵌套结构示例（FAQ 的 mainEntity 数组）
- [x] 我们补哪 ≥3 条增益？
  - **① 公式/规则**：各类型必填/推荐字段表 + JSON-LD 语法要点
  - **② 边界**：字段缺失、非法 JSON 的 FAQ
  - **⑤ 权威引用**：Schema.org / Search Central
  - **⑧ 数值示例**：FAQ mainEntity 数组样例、Breadcrumb itemListElement 样例
  - **⑨ Related ≥2**
- [x] 长尾：合并本页（FAQ/Article/Breadcrumb/Organization 单页类型下拉；禁拆 URL）
- [x] 权威来源 URL：
  - https://schema.org/
  - https://developers.google.com/search/docs/appearance/structured-data
  - https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- [x] 行业/场景 Use case 文案草稿：FAQ 页加 JSON-LD；文章页 Article schema；面包屑结构
- [x] 边界/失败案例草稿：JSON 语法错误；必填字段缺失；描述与可见正文不一致
- [x] 结果区信息如何落到可索引 Example / FAQ：固定样例 + FAQ（JSON-LD 是给谁看的、是否保证富结果）
- [x] Related / 主题内链计划（≥2）：`json-schema-validator`、`markdown-to-html`、`meta-serp-preview`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 各类型必填字段表 + JSON 语法规则 |
| 2 | 边界/失败 | FAQ：非法 JSON、字段缺失 |
| 3 | 场景语境 | Use cases：FAQ/Article/Breadcrumb |
| 5 | 权威引用 | Schema.org + Search Central |
| 8 | 数值示例 | mainEntity / itemListElement 样例 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · 结构化数据模块 · P1 S1 |
| 场景与行业 | 站长 / 内容 / 开发者：为页面生成 JSON-LD |
| 技术 | Tier 0；纯浏览器；`localProcessing: true` |
| Title (en) | JSON-LD Generator — Schema Markup for FAQ, Article & Breadcrumb |
| Description | Generate JSON-LD in your browser. Steps: pick a type (FAQ, Article, Breadcrumb, Organization), fill the required fields, and copy valid Schema.org markup with a paste-ready script tag. Shows required vs optional fields and validates JSON before you copy. Nothing is uploaded. Example: a 2-item FAQ produces mainEntity with two Question nodes. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ ≥3 | JSON-LD 是给谁看的；是否保证富结果；必填字段；与正文一致性 |
| related | json-schema-validator, markdown-to-html, meta-serp-preview |
| 验收 | coverage:gate all；lint:seo；进页样例；README |
| 工期粗估 | 1–1.5d（含 10 语） |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 改为 `schema-jsonld-generator`（faq-schema-generator 演进；主词 JSON-LD generator 更宽，FAQ 富结果已退役；禁拆类型 URL） |
| 主检索词 → title/H1 | **JSON-LD Generator** — Schema Markup for FAQ, Article & Breadcrumb（H1 含主词） |
| 次要关键词 → desc / FAQ / Use cases | schema markup generator → desc；FAQ schema → title/desc/FAQ；structured data → desc/FAQ；schema generator for SEO → Use cases/FAQ |
| 用户搜索习惯判断 | en 搜 “json-ld generator / schema markup generator / faq schema generator”；zh 搜「JSON-LD 生成 / 结构化数据生成器」 |
| 优化摘要 | slug 从 FAQ-only 演进为多类型单页（覆盖 JSON-LD generator 主意图）；H1 结果向；desc 含类型列举 + 校验 + 本地处理 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格（给实现用）

- 输入：类型下拉（FAQ / Article / Breadcrumb / Organization）；每类型一组表单字段
- 输出：JSON-LD 文本 + `<script type="application/ld+json">` 包裹预览 + 复制按钮
- 核心规则 / 算法：
  - FAQ：mainEntity = Question[]（name / acceptedAnswer.text）
  - Article：headline / description / author / datePublished / dateModified / image 可选
  - Breadcrumb：itemListElement[]（position / name / item）
  - Organization：name / url / logo 可选
  - 输出前 `JSON.parse(JSON.stringify())` 校验合法性；字段缺失时以提示标注
- 失败与边界行为：必填字段缺失 → 提示但仍可生成（标注缺失）；非法输入字符 → 转义
- 示例 Input → Output：2 个问答 → mainEntity 两个 Question 节点 JSON
- **进页样例（必填）**：`loadSample()` 填 FAQ 类型 2 个问题样例，自动生成 JSON-LD 并展示；与 H2 Example 一致

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
- [ ] Disclaimer — 非 YMYL
- [x] `03-locale-briefs.md` 已填（实现十语前）
