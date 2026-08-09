# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`robots-txt-generator`
**路径**：`/tools/robots-txt-generator`
**主方向**：A（浏览器 JS 能力）+ B3 场景
**YMYL**：否

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：[RFC 9309 Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309.html) · [Google robots.txt 文档](https://developers.google.com/search/docs/crawling-indexing/robots/intro) · [Google：管理 AI 爬虫](https://developers.google.com/search/docs/crawling-indexing/ai-crawler)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. robots.txt generator
  2. robots.txt 生成器（中文）
  3. block AI crawlers / GPTBot robots
  4. robots.txt allow disallow
  5. robots txt sitemap（场景，不拆页）
- 用户真实任务：快速生成一份语法正确的 robots.txt，并了解各 bot（搜索引擎 + AI crawler）写法与更新时间。
- [x] 竞品 SERP 前 5–10 都提供了什么？bot 下拉、Disallow 路径输入、一键生成。多数无「AI crawler」说明或说明过时。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. 各 bot 官方文档与更新日期
  2. AI crawler（GPTBot / ClaudeBot 等）的 User-agent 写法
  3. Sitemap 指令与 allow/disallow 顺序规则
  4. 常见坑：`Disallow: /` 会阻止全部抓取
- [x] 我们补哪 ≥3 条增益？
  - **① 公式/规则**：robots.txt 语法规则（User-agent / Allow / Disallow / Sitemap / 通配符）
  - **⑤ 权威引用**：RFC 9309 + Google robots 文档 + AI crawler 文档
  - **⑧ 数值示例**：一个可跑的 robots.txt 样例
  - **⑨ Related ≥2**
  - **② 边界**：FAQ 覆盖常见坑
- [x] 长尾：合并本页（allow/disallow/sitemap/AI bots 一带多场景）
- [x] 权威来源 URL：
  - https://www.rfc-editor.org/rfc/rfc9309.html
  - https://developers.google.com/search/docs/crawling-indexing/robots/intro
  - https://developers.google.com/search/docs/crawling-indexing/ai-crawler
- [x] 行业/场景 Use case 文案草稿：新站上线生成；阻止 AI 爬虫抓训练语料；配合 sitemap 指令
- [x] 边界/失败案例草稿：Disallow 全部；路径大小写；通配符支持
- [x] 结果区信息如何落到可索引 Example / FAQ：固定样例 + FAQ
- [x] Related / 主题内链计划（≥2）：`sitemap-xml-generator`、`website-headers`、`indexnow`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | robots.txt 语法规则 + 指令顺序 |
| 2 | 边界/失败 | FAQ：Disallow 全部、大小写、通配符 |
| 5 | 权威引用 | RFC 9309 + Google 文档 |
| 8 | 数值示例 | 完整样例 robots.txt |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · 抓取与索引模块 · S1 |
| 场景与行业 | 站长 / SEO：生成与理解 robots.txt |
| 技术 | Tier 0；纯浏览器；`localProcessing: true` |
| Title (en) | Robots.txt Generator — Manage Allow & Disallow Rules for AI Crawlers |
| Description | Generate a robots.txt file in your browser. Steps: pick user-agents, add Allow / Disallow paths and a Sitemap line, then copy the plain-text result with syntax rules and updated AI-crawler user-agents explained. Runs locally—nothing is uploaded. Example: blocking GPTBot while keeping Googlebot fully enabled. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ ≥3 | Disallow 全部会怎样；AI crawler 怎么写；Sitemap 指令位置；本地生成 |
| related | sitemap-xml-generator, website-headers, indexnow |
| 验收 | coverage:gate all；lint:seo；进页样例；README |
| 工期粗估 | 0.75–1d（含 10 语） |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 保留 `robots-txt-generator`（检索主词 robots.txt generator；禁拆 allow/disallow URL） |
| 主检索词 → title/H1 | **Robots.txt Generator** — Manage Allow & Disallow Rules for AI Crawlers（H1 含主词；副标题单段动作向，避免参数枚举目录腔） |
| 次要关键词 → desc / FAQ / Use cases | robots.txt 生成器 → desc/FAQ；block AI crawlers → desc/FAQ；allow disallow → Rules；sitemap → Rules/Use cases |
| 用户搜索习惯判断 | en 搜 “robots.txt generator / block ai crawlers gptbot”；zh 搜「robots.txt 生成 / 阻止 AI 爬虫」 |
| 优化摘要 | H1 结果向；desc 含步骤 + 本地 + AI crawler 落点；次词进 FAQ/Rules |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格（给实现用）

- 输入：勾选/新增 User-agent；每 agent 下 Add Allow / Disallow 路径（可多行）；Sitemap URL
- 输出：robots.txt 纯文本 + 复制按钮
- 核心规则 / 算法：
  - 输出格式：`User-agent: X` → `Allow:` / `Disallow:` 行 → 空行分隔下一 agent
  - 末尾可选 `Sitemap:` 行
  - 预设 AI crawlers：GPTBot、ClaudeBot（Anthropic）、Google-Extended、CCBot（Common Crawl）、PerplexityBot 等（含说明与更新日期）
- 失败与边界行为：路径为空 → 允许留空（Disallow 空行合法但提示）；非法字符 → 按行清理
- 示例 Input → Output：Googlebot + GPTBot Disallow /，其余 allow → 输出对应文本
- **进页样例（必填）**：`loadSample()` 填 Googlebot + GPTBot 样例，自动生成文本；与 H2 Example 一致

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
