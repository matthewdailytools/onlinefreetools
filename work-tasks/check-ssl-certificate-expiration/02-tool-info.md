# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`check-ssl-certificate-expiration`  
**路径**：`/tools/check-ssl-certificate-expiration`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（`briefs-ready`）

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 选词：`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`。

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Enter hostname → see newest CT cert notAfter / issuer | **是** | H1 default |
| Plan renewals before expiry | — | Use case |
| Full live TLS handshake / chain deep dive | — | 有意不满足 — Workers cannot read peer cert; CT lag disclosed |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. Check SSL certificate expiration
  2. ssl certificate expiry checker
  3. ssl expiry date checker
  4. ssl certificate chain checker
  5. ssl certificate checker (head)
- 用户真实任务：查看域名 SSL 证书何时过期
- [x] 竞品 SERP：Checker/Validator/Tester 墙 + 文档页；少有本站「场景 H1 + 诚实边界 + 十语」组合。
- [x] 缺口（≥3）：生成与校验混为一谈；边界（CT lag / missing robots / RFC fields）讲不清；次词只堆 title。
- [x] 增益（≥3）：
- ① Rules: CT query + newest cert selection
- ② Boundary: CT lag vs live TLS; no peer cert from fetch
- ③ Scene: expiration check
- ⑤ References: crt.sh + CT project
- ⑧ Example: example.com CT dates
- ⑨ Related: headers / domain-lookup / private CIDR
- [x] 长尾：**合并本页**；Do not hard-rank on bare "ssl certificate checker" H1; expiration scene is intentional.
- [x] 权威来源：
- https://crt.sh/
- https://certificate.transparency.dev/
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
| Title (en) / H1 | **Check SSL certificate expiration** |
| Description 要点 | User enters hostname; query Certificate Transparency via crt.sh JSON API (Workers cannot read peer cert from fetch); show notBefore/notAfter/issuer of newest matching cert. Rules must state CT lag vs live handshake. Example sample: example.com. Honest edge-fetch privacy (URL/domain sent to Worker, not stored as product DB). |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 见下 FAQ |
| Disclaimer / References | 非 YMYL；权威链见上 |
| related | `website-headers`, `domain-lookup`, `private-cidr-ranges` |
| 验收 | `coverage:gate --phase=0b` 绿；实现阶段再跑 2/4/all（本轮不建 Page/i18n） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-02 |
| slug 结论 | 保留 `check-ssl-certificate-expiration`（场景任务句；禁并进 generator / 禁头词硬刚） |
| 主检索词 → title/H1 | **Check SSL certificate expiration** → H1「Check SSL certificate expiration」 |
| 次要关键词 → desc / FAQ / Use cases | ssl certificate expiry checker → desc + Use case；ssl expiry date checker → FAQ + result labels notAfter；ssl certificate chain checker → FAQ chip — partial; CT leaf focus, not full chain walk；ssl certificate checker (head) → FAQ: 有意不满足 as sole H1; scene is expiration |
| 用户搜索习惯判断 | Bing Related 空 → 用有机 title 任务句代理；H1 跟紧场景句而非最短头词 |
| 优化摘要 | 2026-09-02：按 web-check selection 锁定 H1/slug；次词落 desc/FAQ/usecase；Ads/Planner N/A；禁并进 generator |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Google/Bing Keyword Planner / Ads 长尾分析；Bing Related 全空，仅 title 代理选词，见 selection.md）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-02 |
| 总判 | **满足**：输入主机名 → CT 查询 → 展示最新证书有效期与颁发者，并诚实披露 CT 延迟 |
| 主词搜索者任务 | 查看域名 SSL 证书何时过期 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 首屏输入 + Check；How 先答用户任务；loadSample=example.com；FAQ≥3；IG≥3 |
| 超出 / 应划边界 | 不做实时握手读证；不做完整链审计为首屏 |
| 缺口与已做优化 | How 步骤已按任务句回写；Related 划界；desc 去掉 SEO 元叙述 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：见 Job — User enters hostname; query Certificate Transparency via crt.sh JSON API (Workers cannot read peer cert from fetch); show notBefore/notAfter/issuer of newest matching cert. Rules must state CT lag vs live handshake.
- 输出：Allowed/fields/dates/policy cards + matched evidence（非仅原文 dump）
- 核心规则：
- Query crt.sh JSON API for hostname; pick newest matching cert; show notBefore/notAfter/issuer.
- Rules MUST state: CT lag may differ from live handshake; Workers cannot read peer cert from fetch.
- Reject cleartext private/literal IPs when inappropriate; link private-cidr-ranges.
- 失败与边界：Not a TLS handshake auditor；Not a CA order tool
- 示例 Input → Output：sample `example.com` → 可见结构化结果
- **进页样例（必填）**：loadSample() fills example.com and auto-runs Check against crt.sh via Worker when allowed.
- **How it works 步骤（how_item）**：
1. Enter a hostname (no path required).
2. Click Check; Worker queries crt.sh JSON for matching certificates.
3. Read notBefore, notAfter, and issuer for the newest match.
4. Treat dates as CT-published — confirm with a live handshake if timing-critical.
- **FAQ（≥3）**：
- Q: Is this a live SSL handshake? A: No — Cloudflare Workers cannot read the peer certificate from fetch; we use Certificate Transparency (crt.sh).
- Q: Why might dates lag? A: CT logs can lag behind issuance/renewal; Rules explain CT vs handshake.
- Q: Do you check the full chain? A: Focus is expiration of newest matching cert; chain-only tools are a secondary chip, not H1.
- Q: Private IP hosts? A: Reject or warn; see private-cidr-ranges for private space context.
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
