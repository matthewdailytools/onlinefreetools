# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`find-and-validate-xml-sitemap`  
**路径**：`/tools/find-and-validate-xml-sitemap`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 选词：`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`。

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Enter site → discover sitemap → validate XML + count urls | **是** | H1 default |
| Distinguish sitemapindex vs urlset and sample locs | — | result chips |
| Generate a new sitemap.xml | — | 有意不满足 → sitemap-xml-generator |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. Find and validate XML sitemap
  2. xml sitemap checker / validator
  3. sitemap finder
  4. validate xml sitemap
  5. sitemap checker (head)
- 用户真实任务：找到站点 sitemap 并确认 XML 是否合法、是索引还是 urlset
- [x] 竞品 SERP：Checker/Validator/Tester 墙 + 文档页；少有本站「场景 H1 + 诚实边界 + 十语」组合。
- [x] 缺口（≥3）：生成与校验混为一谈；边界（CT lag / missing robots / RFC fields）讲不清；次词只堆 title。
- [x] 增益（≥3）：
- ① Rules: sitemaps.org root elements + well-formed XML
- ② Boundary: gzip, redirects, oversized bodies, non-XML
- ③ Scene: find + validate (not generate)
- ④ Table: index vs urlset signals
- ⑤ References: sitemaps.org + Google sitemap overview
- ⑧ Example: example.com → /sitemap.xml sample locs
- ⑨ Related: generator / IndexNow / on-page
- [x] 长尾：**合并本页**；Generation ≠ validation; keep separate from sitemap-xml-generator.
- [x] 权威来源：
- https://www.sitemaps.org/protocol.html
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- [x] Use cases / 边界 / Example / Related 见下

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：匹配/解析/CT/DoH 规则 |
| 2 | 边界/失败 | FAQ + 结果错误态 |
| 3 | 场景语境 | Use cases ×3；进页 = H1 场景 |
| 5 | 权威引用 | References |
| 8 | 数值示例 | loadSample + Example |
| 9 | 主题内链 | related ≥2 |

**硬性勾选**：① ② ③ ⑤ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | web-check 实现队列 · head（不占周进攻 KPI） |
| 场景与行业 | 站长 / SEO / 安全运维 |
| 技术（包、Tier、本地处理） | Tier 1 Worker；**`localProcessing: false`** |
| Catalog `page.style` | **opts** |
| Title (en) / H1 | **Find and validate XML sitemap** |
| Description 要点 | User enters a site URL; tool finds sitemap via robots.txt Sitemap: lines and/or /sitemap.xml; validates XML structure, counts urls, flags index vs urlset, shows sample locs. Not a generator. Example sample: https://example.com. Honest edge-fetch privacy (URL/domain sent to Worker, not stored as product DB). |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 见下 FAQ |
| Disclaimer / References | 非 YMYL；权威链见上 |
| related | `sitemap-xml-generator`, `indexnow`, `on-page-seo-checker` |
| 验收 | `coverage:gate --phase=0b` 绿；实现阶段再跑 2/4/all（本轮不建 Page/i18n） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-02 |
| slug 结论 | 保留 `find-and-validate-xml-sitemap`（场景任务句；禁并进 generator / 禁头词硬刚） |
| 主检索词 → title/H1 | **Find and validate XML sitemap** → H1「Find and validate XML sitemap」 |
| 次要关键词 → desc / FAQ / Use cases | xml sitemap checker / validator → desc + FAQ；sitemap finder → How + Use case (discover via robots.txt /sitemap.xml)；validate xml sitemap → desc + Rules (well-formed + root type)；sitemap checker (head) → FAQ absorb; H1 stays find+validate scene |
| 用户搜索习惯判断 | Bing Related 空 → 用有机 title 任务句代理；H1 跟紧场景句而非最短头词 |
| 优化摘要 | 2026-09-02：按 web-check selection 锁定 H1/slug；次词落 desc/FAQ/usecase；Ads/Planner N/A；禁并进 generator |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Google/Bing Keyword Planner / Ads 长尾分析；Bing Related 全空，仅 title 代理选词，见 selection.md）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-02 |
| 总判 | **满足**：输入站点 → 发现 sitemap → 校验 XML 并统计/抽样 loc |
| 主词搜索者任务 | 找到站点 sitemap 并确认 XML 是否合法、是索引还是 urlset |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 首屏输入 + Check；How 先答用户任务；loadSample=https://example.com；FAQ≥3；IG≥3 |
| 超出 / 应划边界 | 不做生成器；不批量提交 IndexNow；不深度抓取每个 URL |
| 缺口与已做优化 | How 步骤已按任务句回写；Related 划界；desc 去掉 SEO 元叙述 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：见 Job — User enters a site URL; tool finds sitemap via robots.txt Sitemap: lines and/or /sitemap.xml; validates XML structure, counts urls, flags index vs urlset, shows sample locs. Not a generator.
- 输出：Allowed/fields/dates/policy cards + matched evidence（非仅原文 dump）
- 核心规则：
- Discovery order: robots.txt Sitemap: lines → fallback /sitemap.xml (and optional user override URL).
- Validate XML parse; detect urlset vs sitemapindex; count <loc>; show ≤10 sample locs.
- Not a generator; do not write sitemap content for download as primary job.
- 失败与边界：No full crawl scoring；No IndexNow submit here → related indexnow
- 示例 Input → Output：sample `https://www.sitemaps.org/` → 可见结构化结果（findings 表）
- **进页样例（必填）**：loadSample() uses https://www.sitemaps.org/; auto-run Find when Worker allows; else safe demo explaining discovery order.
- **How it works 步骤（how_item）**：
1. Enter the site origin or homepage URL.
2. Click Find & validate; Worker checks robots.txt Sitemap: lines then /sitemap.xml.
3. Review root type (urlset vs sitemapindex), URL count, and sample <loc> values.
4. Fix XML issues flagged before submitting IndexNow or Search Console.
- **FAQ（≥3）**：
- Q: Is this a sitemap generator? A: No — find + validate only; use sitemap-xml-generator to build files.
- Q: Where do you look? A: robots.txt Sitemap: lines first, then /sitemap.xml fallback.
- Q: What is sitemapindex vs urlset? A: Index lists child sitemaps; urlset lists page locs — both shown.
- Q: Do you crawl every URL? A: No; count + sample locs + structure checks only.
- **实现防呆**：Page 用 `opts`；模板正则 `\\w`；`localProcessing: false`

## 页面模块清单（与 tool-creation 对齐）

> 覆盖表 + 意图审查已齐；本轮仅立项 ready，**不**实现 Page/i18n。

- [x] H1 + 一句话摘要（规格已定）
- [x] 首屏工具交互区（含进页自动样例结果）（规格已定）
- [x] How it works（含 how_item 步骤）
- [x] Formula / Rules
- [x] Example（与 loadSample 对齐）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer（非 YMYL；实现时可省略或短句）
- [x] `03-locale-briefs.md` 已填
