# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`meta-tag-generator`
**路径**：`/tools/meta-tag-generator`
**主方向**：A（浏览器 JS 能力）+ B3 场景
**YMYL**：否

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：Google Search Central — [Meta tags that Google understands](https://developers.google.com/search/docs/crawling-indexing/special-tags) / [Control title links](https://developers.google.com/search/docs/appearance/title-link) / [Canonical](https://developers.google.com/search/docs/crawling-indexing/canonical)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. meta tag generator / meta tags generator
  2. meta title & description generator
  3. head tag generator
  4. canonical / robots meta generator
  5. meta 标签生成（中文）
- 用户真实任务：新建页面或改模板时，把 title、description、canonical、robots 与 OG 字段填进表单，一键生成可直接贴进 `<head>` 的 HTML。
- [x] 竞品 SERP 前 5–10 都提供了什么？表单 + 生成的 head 片段 + 复制；部分与 SERP 预览合并。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. 生成的标签与 SERP 截断 / 分享预览的关系（联动预览）
  2. robots meta 各值含义（index/noindex、follow/nofollow）与默认建议
  3. 值需 HTML 转义（`&` → `&amp;`）避免标签破坏
  4. canonical 与 OG 同页并存规则
- [x] 我们补哪 ≥3 条增益？
  - **① 公式/规则**：各字段长度建议表 + robots 值含义表 + 转义规则
  - **② 边界**：空字段跳过、特殊字符转义、canonical URL 校验
  - **⑤ 权威引用**：Search Central special-tags + title-link + canonical
  - **⑧ 数值示例**：固定样例 → 生成的 head 片段
  - **⑨ Related ≥2**
- [x] 长尾：合并进本页（title/desc/canonical/robots/OG 同页表单，禁拆字段 URL）
- [x] 权威来源 URL：Search Central 上述 3 条 + MDN
- [x] 行业/场景 Use case 文案草稿：模板改造；外包交付 head；发布前与 SERP 预览联查
- [x] 边界/失败案例草稿：空字段；特殊字符；无协议 canonical
- [x] 结果区信息如何落到可索引 Example / FAQ：固定样例 → 完整 head 片段 + 长度提示；FAQ 讲 robots 值/转义/canonical 并存
- [x] Related / 主题内链计划（≥2）：`meta-serp-preview`、`open-graph-preview`、`on-page-seo-checker`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 字段长度建议表 + robots 值含义表 + 转义规则 |
| 2 | 边界/失败 | FAQ：空字段、特殊字符、canonical 校验 |
| 3 | 场景语境 | Use cases：模板改造 / 外包交付 / 发布前联查 |
| 5 | 权威引用 | Search Central special-tags + title-link + canonical |
| 8 | 数值示例 | 固定样例 → head 片段 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · onpage 模块 · S2 批次 |
| 场景与行业 | 站长 / 内容运营：head 标签生成 |
| 技术 | Tier 0；模板拼接 + escapeHtml；纯本地 `localProcessing: true` |
| Title (en) | Meta Tag Generator — Generate complete page head tags |
| Description 要点 | Your title and meta description are what users see in Google, and a wrong canonical can split your rankings across duplicate URLs. Fill in the title, description, canonical, robots and Open Graph fields to generate ready-to-paste <head> meta tags. Steps: enter your fields, read the length hints and previews, copy the generated HTML with correct escaping. Special characters such as & and < are escaped automatically so the tags stay valid. Runs entirely on your device—nothing is uploaded. Example: canonical and og tags side by side. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | robots 各值什么意思；特殊字符会被转义吗；canonical 与 OG 能并存吗；title 多长合适 |
| related | meta-serp-preview, open-graph-preview, on-page-seo-checker |
| 验收 | `npm run lint:seo`；人工抽 zh 等 |
| 工期粗估 | 0.5–1d（含 10 语） |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 保留 `meta-tag-generator`（主词 meta tag generator；禁拆字段长尾 URL） |
| 主检索词 → title/H1 | **Meta Tag Generator** — Generate complete page head tags（H1 含主词 Meta Tag Generator；结果向，避免字段枚举） |
| 次要关键词 → desc / FAQ / Use cases | meta title generator → desc/FAQ；head tag generator → Use cases；canonical → desc/FAQ；robots meta → FAQ；转义 → FAQ |
| 用户搜索习惯判断 | en 搜 “meta tag generator / meta tags generator / meta title generator”；zh 搜「meta标签生成 / 网页头标签 / 标题描述生成」 |
| 优化摘要 | H1 结果向「Create title, description & OG tags」；desc 含长度提示 + 本地处理 + 转义说明；次词 robots/canonical/转义落点 FAQ/Use cases；避免字段枚举入 H1 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=meta-tag-generator --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 交互规格（给实现用）

- 输入：title、description、canonical URL、robots（select：index,follow / noindex,follow / index,nofollow / noindex,nofollow / 空）、OG title/desc/image/type/url（选填）
- 输出：生成的 `<head>` HTML 片段 + 复制按钮 + 各字段长度提示（title 字符/像素；desc 字符）
- 核心规则 / 算法：
  - title：建议 ≤ 60 字符（近似）；desc 建议 ≤ 160 字符；仅提示不硬切
  - 转义：所有值 escapeHtml（`&` `<` `>` `"` `'`）
  - canonical 输出 `<link rel="canonical" href="{url}">`；URL 无协议 → 提示
  - robots 输出 `<meta name="robots" content="{value}">`
  - OG 输出 `<meta property="og:{field}" content="{value}">`（非空字段）
  - 视图语言标签 `<html lang>` 不在此工具范围（提示属于 hreflang 工具）
- 失败与边界行为：canonical 无协议 → 标黄提示；空字段 → 跳过输出；title/desc 超长 → 提示建议长度但保留完整值
- 示例 Input → Output：title「Meta Tag Generator — Generate complete page head tags」+ desc + canonical + robots=index,follow + og 字段 → 完整 head 片段
- **进页样例（必填）**：`loadSample()` 填样例字段并自动生成 head 片段；与 H2 Example 对齐

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
