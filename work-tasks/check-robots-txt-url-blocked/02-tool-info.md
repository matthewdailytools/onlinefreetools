# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`check-robots-txt-url-blocked`  
**路径**：`/tools/check-robots-txt-url-blocked`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 选词：`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`。

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Paste page URL → see if path is blocked for Googlebot/* | **是** | H1 default |
| Compare Allow/Disallow match lines for a custom UA | — | UA selector chip |
| Write a new robots.txt file from scratch | — | 有意不满足 → related robots-txt-generator |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. Check if a URL is blocked by robots.txt
  2. robots.txt tester / validator
  3. check robots.txt online
  4. test crawler access / AI crawler rules
  5. robots.txt checker (head)
- 用户真实任务：判断某个页面路径是否被 robots.txt 禁止抓取（含匹配规则）
- [x] 竞品 SERP：Checker/Validator/Tester 墙 + 文档页；少有本站「场景 H1 + 诚实边界 + 十语」组合。
- [x] 缺口（≥3）：生成与校验混为一谈；边界（CT lag / missing robots / RFC fields）讲不清；次词只堆 title。
- [x] 增益（≥3）：
- ① Rules: RFC 9309 / Google matching (longest match, Allow vs Disallow)
- ② Boundary: missing robots, redirect loops, non-2xx, invalid UTF-8
- ③ Scene: URL-is-blocked task (not file generator)
- ⑤ References: Google robots.txt + RFC 9309
- ⑧ Example: https://example.com/secret → matched Disallow
- ⑨ Related: generator / headers / on-page SEO
- [x] 长尾：**合并本页**；Forbid absorb into robots-txt-generator; generation ≠ validation (§3.3 E).
- [x] 权威来源：
- https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt
- https://www.rfc-editor.org/rfc/rfc9309.html
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
| Title (en) / H1 | **Check if a URL is blocked by robots.txt** |
| Description 要点 | User pastes a page URL; Worker fetches origin /robots.txt; tool reports whether that path is allowed for a chosen user-agent (default Googlebot + *), and shows matched Allow/Disallow rules. Example sample: https://example.com/admin. Honest edge-fetch privacy (URL/domain sent to Worker, not stored as product DB). |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 见下 FAQ |
| Disclaimer / References | 非 YMYL；权威链见上 |
| related | `robots-txt-generator`, `website-headers`, `on-page-seo-checker` |
| 验收 | `coverage:gate --phase=0b` 绿；实现阶段再跑 2/4/all（本轮不建 Page/i18n） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-02 |
| slug 结论 | 保留 `check-robots-txt-url-blocked`（场景任务句；禁并进 generator / 禁头词硬刚） |
| 主检索词 → title/H1 | **Check if a URL is blocked by robots.txt** → H1「Check if a URL is blocked by robots.txt」 |
| 次要关键词 → desc / FAQ / Use cases | robots.txt tester / validator → desc + FAQ (same-page chip; not H1)；check robots.txt online → desc + Use case 1；test crawler access / AI crawler rules → FAQ + Use case (UA selector incl. Googlebot / GPTBot-style examples)；robots.txt checker (head) → FAQ: head term absorbed; H1 stays URL-blocked scene |
| 用户搜索习惯判断 | Bing Related 空 → 用有机 title 任务句代理；H1 跟紧场景句而非最短头词 |
| 优化摘要 | 2026-09-02：按 web-check selection 锁定 H1/slug；次词落 desc/FAQ/usecase；Ads/Planner N/A；禁并进 generator |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Google/Bing Keyword Planner / Ads 长尾分析；Bing Related 全空，仅 title 代理选词，见 selection.md）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-02 |
| 总判 | **满足**：贴 URL → 拉 robots.txt → 报告路径对 UA 是否允许并展示匹配规则 |
| 主词搜索者任务 | 判断某个页面路径是否被 robots.txt 禁止抓取（含匹配规则） |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 首屏输入 + Check；How 先答用户任务；loadSample=https://example.com/admin；FAQ≥3；IG≥3 |
| 超出 / 应划边界 | 不做生成器；不抓页面正文；不替代 GSC robots 测试器声明官方结果 |
| 缺口与已做优化 | How 步骤已按任务句回写；Related 划界；desc 去掉 SEO 元叙述 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：见 Job — User pastes a page URL; Worker fetches origin /robots.txt; tool reports whether that path is allowed for a chosen user-agent (default Googlebot + *), and shows matched Allow/Disallow rules.
- 输出：Allowed/fields/dates/policy cards + matched evidence（非仅原文 dump）
- 核心规则：
- Fetch only https?://{origin}/robots.txt from Worker (normalize URL; reject private hosts).
- Parse groups; evaluate selected UA then *; show matched directive + line text.
- Forbid absorb into robots-txt-generator (separate check vs generate intents).
- 失败与边界：No live crawl of the page itself — only robots.txt evaluation for the path.；No sitemap discovery here → related find-and-validate-xml-sitemap later.
- 示例 Input → Output：sample `https://example.com/admin` → 可见结构化结果
- **进页样例（必填）**：loadSample() fills example.com/admin + Googlebot; if Worker demo/mock unavailable, show safe demo path explaining fetch will run on Check (document in 02). Prefer auto-run against public example.com when Worker allows.
- **How it works 步骤（how_item）**：
1. Paste the full page URL you care about (path matters).
2. Pick a user-agent (default Googlebot; also evaluate *).
3. Click Check; wait for the Worker to fetch origin /robots.txt.
4. Read Allowed/Blocked, matched rule lines, and fetch status.
- **FAQ（≥3）**：
- Q: Does this generate robots.txt? A: No — checker only; use robots-txt-generator to write files.
- Q: Why Googlebot and *? A: Most crawlers fall back to *; Googlebot has its own group when present.
- Q: What if robots.txt is missing or 404? A: Treat as allow-all per common crawler practice; show fetch status.
- Q: Can I test AI crawlers? A: Yes via UA selector; rules still follow RFC 9309 matching.
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
