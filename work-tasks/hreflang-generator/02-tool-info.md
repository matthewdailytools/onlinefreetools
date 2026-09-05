# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`hreflang-generator`
**路径**：`/tools/hreflang-generator`
**主方向**：A（浏览器 JS 能力）+ B3 场景
**YMYL**：否

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：Google Search Central — [Localized versions / hreflang](https://developers.google.com/search/docs/crawling-indexing/international/localized-versions)（支持 `<link>`、HTTP 头、sitemap 三种形态）。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. hreflang generator / hreflang tag generator
  2. hreflang sitemap
  3. hreflang attributes / multilingual SEO
  4. x-default hreflang
  5. hreflang 标签生成（中文）
- 用户真实任务：多语站点发布同一页面的多语言版本时，标注各语言/地区 URL 的对应关系，让 Google 把用户引向正确语言版本。
- [x] 竞品 SERP 前 5–10 都提供了什么？语言码输入 + URL 列表 → 生成 `<link>` 标签。多数只输出 HTML 形态。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. 三种输出形态（link / HTTP 头 / sitemap）各自适用场景
  2. x-default 何时用（非语言回退、如 /en 首页）
  3. 自引用（每个 URL 必须包含自己的 hreflang）规则
  4. 语言码与地区码格式（en-US vs en；zh-Hans）与校验
- [x] 我们补哪 ≥3 条增益？
  - **① 公式/规则**：hreflang 三形态规则 + 语言码表 + 自引用/x-default 说明
  - **② 边界**：缺自引用、语言码格式错误、URL 缺失协议
  - **⑤ 权威引用**：Search Central localized-versions
  - **⑧ 数值示例**：固定多语 URL 集 → 三种形态输出
  - **⑨ Related ≥2**
- [x] 长尾：合并进本页（link/HTTP/sitemap 三形态同页输出，禁拆 URL）
- [x] 权威来源 URL：https://developers.google.com/search/docs/crawling-indexing/international/localized-versions
- [x] 行业/场景 Use case 文案草稿：多语站点上线；改版后同步 hreflang；sitemap 内嵌 xhtml:link
- [x] 边界/失败案例草稿：URL 无协议；语言码非法；漏自引用
- [x] 结果区信息如何落到可索引 Example / FAQ：固定样例 → 三形态输出 + 校验提示；FAQ 讲形态选择/x-default/自引用
- [x] Related / 主题内链计划（≥2）：`sitemap-xml-generator`、`schema-jsonld-generator`、`meta-tag-generator`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 三形态规则 + 语言码表 + 自引用/x-default |
| 2 | 边界/失败 | FAQ：缺自引用、语言码格式、URL 协议 |
| 3 | 场景语境 | Use cases：多语上线 / 改版同步 / sitemap 嵌入 |
| 5 | 权威引用 | Search Central localized-versions |
| 8 | 数值示例 | 固定样例 → 三形态输出 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · growth 模块 · S2 批次 |
| 场景与行业 | 多语站点站长 / 前端：hreflang 标注 |
| 技术 | Tier 0；语言码表 + 手写拼接；纯本地 `localProcessing: true` |
| Title (en) | Hreflang Generator — Create hreflang tags for multilingual sites |
| Description 要点 | Without hreflang, Google may treat your translated pages as duplicates and show the wrong language version in search. Turn a set of language URLs into hreflang markup in three forms: <link> tags, HTTP Link header and sitemap <xhtml:link>. Steps: paste each language URL with its code, choose a form, copy the generated snippet. Every URL gets its own self-referencing hreflang, and an optional x-default fallback can be added. Runs entirely on your device—nothing is uploaded. Example: en, es and ja versions of one page. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 三种形态怎么选；x-default 什么时候用；每个 URL 都要自引用吗；语言码格式 |
| related | sitemap-xml-generator, schema-jsonld-generator, meta-tag-generator |
| 验收 | `npm run lint:seo`；人工抽 zh 等 |
| 工期粗估 | 1d（含 10 语） |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 保留 `hreflang-generator`（主词 hreflang generator；禁拆三形态 URL） |
| 主检索词 → title/H1 | **Hreflang Generator** — Create hreflang tags for multilingual sites（H1 含主词 Hreflang Generator） |
| 次要关键词 → desc / FAQ / Use cases | hreflang sitemap → desc/FAQ；x-default → FAQ；multilingual SEO → Use cases；语言码校验 → FAQ；自引用 → FAQ |
| 用户搜索习惯判断 | en 搜 “hreflang generator / hreflang tag generator / hreflang sitemap”；zh 搜「hreflang标签生成 / 多语SEO / hreflang 是什么」 |
| 优化摘要 | H1 结果向「Create hreflang tags for multilingual sites」；desc 明确三形态 + 本地处理；次词 x-default/自引用/语言码落点 FAQ/Use cases；避免「link/HTTP/sitemap」参数枚举入 H1 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=hreflang-generator --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 交互规格（给实现用）

- 输入：URL + 语言码 行列表（每行 `url hreflang` 或表格两列）；可选 x-default URL 下拉
- 输出：三种形态 tab（`<link>` HTML / HTTP Link 头 / sitemap `<xhtml:link>`）+ 一键复制
- 核心规则 / 算法：
  - 每行解析 `{lang} {url}` 或 `{url} {lang}`，支持常见分隔
  - 校验：URL 需含协议；语言码符合 `[a-z]{2,3}(-[A-Za-z0-9]+)*` 或常见词（x-default）
  - link 形态：每个 URL 生成 `<link rel="alternate" hreflang="{lang}" href="{url}">`
  - HTTP 形态：`Link: <{url}>; rel="alternate"; hreflang="{lang}"`（多组逗号连接）
  - sitemap 形态：`<url><loc>{url}</loc><xhtml:link rel="alternate" hreflang="{lang}" href="{url}"/></url>`
  - 每个 URL 须含自引用（自动补当前语言）；可选加 x-default
- 失败与边界行为：语言码非法 → 标红提示；URL 无协议 → 自动补 https 并提示；空行忽略；全部无有效行 → 提示
- 示例 Input → Output：`en https://example.com/` + `es https://example.com/es/` → 三形态含自引用与可选 x-default
- **进页样例（必填）**：`loadSample()` 填 3 行样例 URL+语言码并自动生成三形态；与 H2 Example 对齐

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

## 复审修正（2026-09-05）

- `buildAll()` 新增 `xmlAttr()`：link 标签与 sitemap 形态对 URL / 语言码做 `& < > "` 转义。带查询串的 URL（`?a=1&b=2`）原样写入时会让 XML sitemap 解析失败。
- HTTP `Link` 响应头形态刻意不转义——它不是标记语境。
