# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`spf-dkim-dmarc-checker`  
**路径**：`/tools/spf-dkim-dmarc-checker`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`i18n-done`）

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 选词：`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`。

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Enter domain (+ DKIM selector) → SPF/DKIM/DMARC explained | **是** | H1 default; one page triple |
| Read DMARC p= policy in plain language | — | result explainer |
| Validate whether an email address exists | — | 有意不满足 — mailbox verification SERP pollution |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. SPF DKIM DMARC checker
  2. dmarc record checker / check dmarc record
  3. dmarc lookup / dmarc checker
  4. spf lookup
  5. email authentication checker
- 用户真实任务：检查域名邮件认证 DNS（SPF/DKIM/DMARC）并理解策略
- [x] 竞品 SERP：Checker/Validator/Tester 墙 + 文档页；少有本站「场景 H1 + 诚实边界 + 十语」组合。
- [x] 缺口（≥3）：生成与校验混为一谈；边界（CT lag / missing robots / RFC fields）讲不清；次词只堆 title。
- [x] 增益（≥3）：
- ① Rules: SPF mechanisms summary + DMARC p= explanation
- ② Boundary: no mailbox probe; DoH failures; missing records
- ③ Scene: triple auth checker
- ⑤ References: RFC 7208 / 6376 / 7489
- ⑧ Example: google.com + selector google
- ⑨ Related: domain-lookup / website-headers (no dns-lookup slug)
- [x] 长尾：**合并本页**；One page triple; do not split email-pack doorway URLs.
- [x] 权威来源：
- https://datatracker.ietf.org/doc/html/rfc7208
- https://datatracker.ietf.org/doc/html/rfc6376
- https://datatracker.ietf.org/doc/html/rfc7489
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
| Title (en) / H1 | **SPF DKIM DMARC checker** |
| Description 要点 | User enters domain + optional DKIM selector (default google); DoH TXT for SPF, _dmarc.domain, selector._domainkey; explain policy (p=, v=spf1 mechanisms summary) — not raw dump only. Example sample: google.com (selector: google). Honest edge-fetch privacy (URL/domain sent to Worker, not stored as product DB). |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 见下 FAQ |
| Disclaimer / References | 非 YMYL；权威链见上 |
| related | `domain-lookup`, `website-headers` |
| 验收 | `coverage:gate --phase=0b` 绿；实现阶段再跑 2/4/all（本轮不建 Page/i18n） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-02 |
| slug 结论 | 保留 `spf-dkim-dmarc-checker`（场景任务句；禁并进 generator / 禁头词硬刚） |
| 主检索词 → title/H1 | **SPF DKIM DMARC checker** → H1「SPF DKIM DMARC checker」 |
| 次要关键词 → desc / FAQ / Use cases | dmarc record checker / check dmarc record → desc + FAQ + DMARC result card；dmarc lookup / dmarc checker → FAQ absorb; same page triple；spf lookup → SPF card + mechanism summary；email authentication checker → FAQ: 有意不满足 — that SERP mixes email-address validators |
| 用户搜索习惯判断 | Bing Related 空 → 用有机 title 任务句代理；H1 跟紧场景句而非最短头词 |
| 优化摘要 | 2026-09-02：按 web-check selection 锁定 H1/slug；次词落 desc/FAQ/usecase；Ads/Planner N/A；禁并进 generator |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Google/Bing Keyword Planner / Ads 长尾分析；Bing Related 全空，仅 title 代理选词，见 selection.md）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-02 |
| 总判 | **满足**：输入域名与可选 DKIM selector → DoH 查 SPF/DKIM/DMARC 并解释策略 |
| 主词搜索者任务 | 检查域名邮件认证 DNS（SPF/DKIM/DMARC）并理解策略 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 首屏输入 + Check；How 先答用户任务；loadSample=google.com (selector: google)；FAQ≥3；IG≥3 |
| 超出 / 应划边界 | 不做邮箱地址是否存在校验；不只贴 TXT 原文 |
| 缺口与已做优化 | How 步骤已按任务句回写；Related 划界；desc 去掉 SEO 元叙述 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：见 Job — User enters domain + optional DKIM selector (default google); DoH TXT for SPF, _dmarc.domain, selector._domainkey; explain policy (p=, v=spf1 mechanisms summary) — not raw dump only.
- 输出：Allowed/fields/dates/policy cards + matched evidence（非仅原文 dump）
- 核心规则：
- DoH TXT: domain (SPF v=spf1), _dmarc.domain, {selector}._domainkey.domain.
- Explain SPF mechanisms briefly and DMARC p=/rua summary — not raw dump only.
- Never use email authentication checker as H1 (address-validator pollution).
- 失败与边界：No SMTP RCPT probing；No zone editing
- 示例 Input → Output：sample `google.com (selector: google)` → 可见结构化结果
- **进页样例（必填）**：loadSample() fills google.com + selector google and auto-runs DoH checks when Worker allows.
- **How it works 步骤（how_item）**：
1. Enter the sending domain and optional DKIM selector (default google).
2. Click Check; Worker queries DNS TXT via DoH for SPF, _dmarc, and selector._domainkey.
3. Read each record plus plain-language SPF mechanisms and DMARC p= policy.
4. Fix DNS at your provider, then re-check — this page does not rewrite your zone.
- **FAQ（≥3）**：
- Q: Why three records on one page? A: Deliverability checks usually need SPF + DKIM + DMARC together.
- Q: Default DKIM selector? A: google — change if you use another ESP selector.
- Q: Is this an email address validator? A: No — domain authentication DNS only; address existence checkers are out of scope.
- Q: Raw TXT only? A: No — results explain SPF mechanisms and DMARC policy, not just dumps.
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
- [x] Page + 十语 i18n 已落地（2026-09-02）
