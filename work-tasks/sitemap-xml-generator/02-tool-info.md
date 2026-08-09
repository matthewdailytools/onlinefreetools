# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`sitemap-xml-generator`
**路径**：`/tools/sitemap-xml-generator`
**主方向**：A（浏览器 JS 能力）+ B3 场景
**YMYL**：否

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：[sitemaps.org](https://www.sitemaps.org/protocol.html) · [Google XML sitemap 文档](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. sitemap generator / xml sitemap generator
  2. sitemap.xml 生成器（中文）
  3. create sitemap from urls
  4. sitemap lastmod changefreq
  5. xml sitemap generator online（场景，不拆页）
- 用户真实任务：把站点 URL 列表（可能带 lastmod 等元数据）快速转成符合 sitemap 协议的 XML，粘贴或保存为 sitemap.xml。
- [x] 竞品 SERP 前 5–10 都提供了什么？URL 输入框、可选 changefreq/priority、生成按钮。多数无转义与协议边界说明。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. URL 数上限与 sitemap 索引（>50k 时需拆分）
  2. lastmod 格式（W3C datetime）
  3. changefreq / priority 是否为强信号（Google 忽略 changefreq）
  4. 与 IndexNow 的区别
- [x] 我们补哪 ≥3 条增益？
  - **① 公式/规则**：sitemap 协议规则（<loc> 必填、lastmod 格式、changefreq 语义）
  - **② 边界**：URL 转义、数量上限、非 http 前缀
  - **⑤ 权威引用**：sitemaps.org + Google 文档
  - **⑧ 数值示例**：2–3 条 URL 的完整 XML 样例
  - **⑨ Related ≥2**
- [x] 长尾：合并本页（URL 列表 / 带元数据 / 数量边界 一带多场景）
- [x] 权威来源 URL：
  - https://www.sitemaps.org/protocol.html
  - https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- [x] 行业/场景 Use case 文案草稿：新站上线生成 sitemap；更新后加 lastmod；结合 robots.txt Sitemap 指令
- [x] 边界/失败案例草稿：非法 URL、特殊字符、超 50k URL 提示拆分
- [x] 结果区信息如何落到可索引 Example / FAQ：固定样例 + FAQ
- [x] Related / 主题内链计划（≥2）：`indexnow`、`robots-txt-generator`、`website-headers`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | sitemap 协议规则 + lastmod 格式 |
| 2 | 边界/失败 | FAQ：URL 转义、数量上限、changefreq 信号弱 |
| 5 | 权威引用 | sitemaps.org + Google |
| 8 | 数值示例 | 完整 XML 样例 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · 抓取与索引模块 · S1 |
| 场景与行业 | 站长 / SEO：生成 XML sitemap |
| 技术 | Tier 0；纯浏览器；`localProcessing: true` |
| Title (en) | XML Sitemap Generator — Create sitemap.xml From URLs |
| Description | Turn a URL list into sitemap.xml in your browser. Steps: paste one https URL per line with optional lastmod / changefreq / priority, preview the generated XML with proper escaping, and copy it to your site root. Shows protocol rules and limits. Nothing is uploaded. Example: 3 URLs → urlset with three url entries. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ ≥3 | 上限多少；lastmod 格式；changefreq 是否重要；与 IndexNow 区别 |
| related | indexnow, robots-txt-generator, website-headers |
| 验收 | coverage:gate all；lint:seo；进页样例；README |
| 工期粗估 | 0.75–1d（含 10 语） |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 保留 `sitemap-xml-generator`（检索主词 xml sitemap generator / sitemap.xml 生成器；禁拆 URL） |
| 主检索词 → title/H1 | **XML Sitemap Generator** — Create sitemap.xml From URLs（H1 含主词） |
| 次要关键词 → desc / FAQ / Use cases | sitemap.xml 生成器 → desc/FAQ；create sitemap from urls → desc；lastmod changefreq → Rules/FAQ；xml sitemap → desc |
| 用户搜索习惯判断 | en 搜 “xml sitemap generator / create sitemap from urls”；zh 搜「sitemap 生成 / sitemap.xml 生成器」 |
| 优化摘要 | H1 结果向；desc 含步骤 + 本地 + 转义；次词进 FAQ/Rules |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格（给实现用）

- 输入：每行一个 https URL；可选 lastmod（yyyy-MM-dd）、changefreq（下拉）、priority（0.0–1.0）
- 输出：sitemap.xml 文本 + 复制按钮
- 核心规则 / 算法：
  - `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` → 每 URL `<url><loc>…</loc>` + 可选 lastmod/changefreq/priority
  - XML 转义：`& < > " '` → 实体
  - lastmod 校验：非 yyyy-MM-dd 或 datetime → 警告
  - 数量 > 50,000 或文件 > 50MB → 提示拆分（sitemap 索引）
- 失败与边界行为：URL 非 http(s) → 跳过并提示；含控制字符 → 清理
- 示例 Input → Output：3 条 URL（1 条带 lastmod）→ 对应 XML
- **进页样例（必填）**：`loadSample()` 填 3 条 URL 样例，自动生成 XML；与 H2 Example 一致

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
