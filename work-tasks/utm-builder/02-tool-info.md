# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`utm-builder`
**路径**：`/tools/utm-builder`
**主方向**：A（浏览器 JS 能力）
**YMYL**：否

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：Google Analytics — [Custom campaigns / UTM](https://support.google.com/analytics/answer/1033863)（GA4）· [Campaign URL Builder](https://ga-dev-tools.google/ga4/campaign-url-builder/) · Search Central [URL parameters](https://developers.google.com/search/docs/crawling-indexing/url-structure)（参数与索引）。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. UTM builder / UTM generator
  2. campaign URL builder
  3. UTM parameters
  4. GA4 campaign tracking
  5. UTM 链接生成（中文）
- 用户真实任务：在做投放 / 社媒 / 邮件推广时，把落地页 URL 与来源、媒介、活动名拼成带 UTM 参数的链接，保证 GA4 里能归因渠道。
- [x] 竞品 SERP 前 5–10 都提供了什么？URL + 5 参数输入框 → 生成链接 + 复制；Google 官方 ga-dev-tools 最常用。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. 每个参数的推荐写法与常见错误（source 与 medium 区别、大小写规范）
  2. 参数值里空格 / 非 ASCII / 已有查询串时如何处理（编码）
  3. 已有其他参数时如何合并而不是覆盖
  4. 参数大小写敏感性与 GA4 属性分组建议
- [x] 我们补哪 ≥3 条增益？
  - **① 公式/规则**：UTM 五参数定义 + 推荐命名表 + URL 编码规则
  - **② 边界**：已有查询串合并、空格/中文编码、大小写敏感 FAQ
  - **⑤ 权威引用**：GA 官方 UTM 文档
  - **⑧ 数值示例**：固定样例 → 生成的完整链接
  - **⑨ Related ≥2**
- [x] 长尾：合并进本页（utm_source/medium/campaign 长度、编码、参数合并一带多场景，禁拆 URL）
- [x] 权威来源 URL：GA 官方 UTM 文档 + ga-dev-tools
- [x] 行业/场景 Use case 文案草稿：社媒投放归因；邮件活动追踪；QR 码落地页参数
- [x] 边界/失败案例草稿：URL 无协议；已有 query 合并；中文字符编码；参数大小写
- [x] 结果区信息如何落到可索引 Example / FAQ：固定样例 → 完整链接 + 参数表；FAQ 讲编码/合并/大小写
- [x] Related / 主题内链计划（≥2）：`indexnow`、`website-headers`、`meta-serp-preview`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 五参数定义 + 推荐命名表 + 编码规则 |
| 2 | 边界/失败 | FAQ：已有 query 合并、中文/空格编码、大小写 |
| 3 | 场景语境 | Use cases：社媒 / 邮件 / QR 归因 |
| 5 | 权威引用 | GA 官方 UTM 文档 |
| 8 | 数值示例 | 固定样例 → 完整链接 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · growth 模块 · S2 批次 |
| 场景与行业 | 营销 / 增长运营：活动追踪链接 |
| 技术 | Tier 0；URLSearchParams 或手写编码；纯本地 `localProcessing: true` |
| Title (en) | UTM Builder — Create campaign tracking URLs |
| Description 要点 | Clean UTM tags are the only way to prove which campaigns, emails or posts actually drive your traffic — without them, your SEO and marketing efforts are invisible in analytics. Build a campaign tracking link from your landing page URL and utm_source, utm_medium, utm_campaign, utm_term and utm_content. Steps: paste the base URL, fill the five parameters, copy the generated link with correct URL encoding. Existing query parameters are kept and merged, not overwritten. Runs entirely on your device—nothing is uploaded. Example: https://example.com/page with source=newsletter, medium=email and campaign=summer_sale. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | source 与 medium 区别；已有参数怎么合并；值里空格/中文怎么办；参数大小写敏感吗 |
| related | indexnow, website-headers, meta-serp-preview |
| 验收 | `npm run lint:seo`；人工抽 zh 等 |
| 工期粗估 | 0.5–1d（含 10 语） |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 保留 `utm-builder`（主词 UTM builder / campaign URL builder；禁拆参数长尾 URL） |
| 主检索词 → title/H1 | **UTM Builder** — Create campaign tracking URLs（H1 含主词 UTM Builder） |
| 次要关键词 → desc / FAQ / Use cases | UTM parameters → desc；campaign URL builder → desc/FAQ；GA4 tracking → Use cases/FAQ；URL 编码 → FAQ；参数合并 → FAQ |
| 用户搜索习惯判断 | en 搜 “utm builder / campaign url builder / utm generator”；zh 搜「UTM链接生成 / 活动追踪链接 / GA4 追踪」 |
| 优化摘要 | H1 结果向「Create campaign tracking URLs」；desc 含编码 + 本地处理 + 已有 query 合并边界；次词落点 FAQ/Use cases；不以「5 参数表单」目录腔为 H1 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=utm-builder --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 交互规格（给实现用）

- 输入：落地页 URL（必填）+ utm_source / utm_medium / utm_campaign / utm_term / utm_content（后两者选填）
- 输出：生成的完整 URL（带编码）+ 参数拆解表 + 一键复制
- 核心规则 / 算法：
  - 解析基础 URL，保留已有 query 并以 `&` 追加新参数
  - 参数值编码：空格 → `%20`（或 `+`，说明差异）、非 ASCII → encodeURIComponent、`#` hash 置于参数之后
  - 大小写：参数值建议小写规范（GA4 属性分组建议）
  - 校验：URL 需含协议（https:// / http://）；campaign 必填
- 失败与边界行为：URL 无协议 → 自动补 `https://` 并提示；campaign 为空 → 提示；值为空可选参数 → 不加入 URL
- 示例 Input → Output：`https://example.com/page` + source=newsletter + medium=email + campaign=summer_sale → `https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale`
- **进页样例（必填）**：`loadSample()` 填样例 URL 与参数并自动生成链接；与 H2 Example 对齐

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
