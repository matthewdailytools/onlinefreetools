# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`validate-security-txt`  
**路径**：`/tools/validate-security-txt`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 选词：`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`。

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Enter domain → fetch security.txt → field checklist | **是** | H1 default |
| Confirm Expires still valid and Contact present | — | result badges |
| Write vulnerability report to a vendor | — | 有意不满足 — only validate discovery file |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. Validate security.txt
  2. security.txt checker
  3. security.txt validator
  4. RFC 9116 security.txt
  5. .well-known/security.txt
- 用户真实任务：验证站点是否发布合法 security.txt 及必填字段
- [x] 竞品 SERP：Checker/Validator/Tester 墙 + 文档页；少有本站「场景 H1 + 诚实边界 + 十语」组合。
- [x] 缺口（≥3）：生成与校验混为一谈；边界（CT lag / missing robots / RFC fields）讲不清；次词只堆 title。
- [x] 增益（≥3）：
- ① Rules: RFC 9116 field set + URI schemes for Contact
- ② Boundary: expired Expires, missing Contact, HTTP→HTTPS redirects
- ③ Scene: validate published file
- ⑤ References: RFC 9116 + securitytxt.org
- ⑧ Example: onlinefreetools.org or example.com fetch demo
- ⑨ Related: headers / on-page / OG preview
- [x] 长尾：**合并本页**；RFC docs SERP dropped as H1; keep product H1 Validate security.txt.
- [x] 权威来源：
- https://www.rfc-editor.org/rfc/rfc9116.html
- https://securitytxt.org/
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
| Title (en) / H1 | **Validate security.txt** |
| Description 要点 | User enters domain/URL; fetch https://host/.well-known/security.txt (fallback /security.txt); parse Contact/Expires/Preferred-Languages/Canonical per RFC 9116; report missing required fields. Example sample: https://onlinefreetools.org. Honest edge-fetch privacy (URL/domain sent to Worker, not stored as product DB). |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 见下 FAQ |
| Disclaimer / References | 非 YMYL；权威链见上 |
| related | `website-headers`, `on-page-seo-checker`, `open-graph-preview` |
| 验收 | `coverage:gate --phase=0b` 绿；实现阶段再跑 2/4/all（本轮不建 Page/i18n） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-02 |
| slug 结论 | 保留 `validate-security-txt`（场景任务句；禁并进 generator / 禁头词硬刚） |
| 主检索词 → title/H1 | **Validate security.txt** → H1「Validate security.txt」 |
| 次要关键词 → desc / FAQ / Use cases | security.txt checker → desc + FAQ；security.txt validator → desc (near-synonym)；RFC 9116 security.txt → Rules + References (not H1 — docs SERP)；.well-known/security.txt → How step (fetch path) |
| 用户搜索习惯判断 | Bing Related 空 → 用有机 title 任务句代理；H1 跟紧场景句而非最短头词 |
| 优化摘要 | 2026-09-02：按 web-check selection 锁定 H1/slug；次词落 desc/FAQ/usecase；Ads/Planner N/A；禁并进 generator |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Google/Bing Keyword Planner / Ads 长尾分析；Bing Related 全空，仅 title 代理选词，见 selection.md）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-02 |
| 总判 | **满足**：输入域名 → 拉取 security.txt → 解析字段并报告缺失项 |
| 主词搜索者任务 | 验证站点是否发布合法 security.txt 及必填字段 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 首屏输入 + Check；How 先答用户任务；loadSample=https://onlinefreetools.org；FAQ≥3；IG≥3 |
| 超出 / 应划边界 | 不接收漏洞报告；不做扫描器；RFC 不进 H1 |
| 缺口与已做优化 | How 步骤已按任务句回写；Related 划界；desc 去掉 SEO 元叙述 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：见 Job — User enters domain/URL; fetch https://host/.well-known/security.txt (fallback /security.txt); parse Contact/Expires/Preferred-Languages/Canonical per RFC 9116; report missing required fields.
- 输出：Allowed/fields/dates/policy cards + matched evidence（非仅原文 dump）
- 核心规则：
- Fetch order: /.well-known/security.txt then /security.txt.
- Parse signed/cleartext fields; require Contact; warn on missing/expired Expires; show Preferred-Languages & Canonical.
- Do not use "RFC 9116 security.txt" as H1 (docs intent).
- 失败与边界：Not a disclosure mailbox；Not a full pentest
- 示例 Input → Output：sample `https://onlinefreetools.org` → 可见结构化结果
- **进页样例（必填）**：loadSample() uses https://onlinefreetools.org (or example.com if needed); auto-run Validate when Worker allows.
- **How it works 步骤（how_item）**：
1. Enter a domain or HTTPS URL.
2. Click Validate; Worker fetches /.well-known/security.txt then /security.txt.
3. Review parsed fields: Contact, Expires, Preferred-Languages, Canonical, extras.
4. Fix missing required fields before publishing your own security.txt.
- **FAQ（≥3）**：
- Q: Where should security.txt live? A: Prefer https://host/.well-known/security.txt; /security.txt is fallback.
- Q: What fields are required? A: At least Contact; Expires strongly expected per RFC 9116 practice — tool flags gaps.
- Q: Is RFC 9116 the H1? A: No — RFC belongs in Rules/References; H1 is Validate security.txt.
- Q: Do you store reports? A: No; fetch+parse only via Worker.
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
