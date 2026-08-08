# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`domain-lookup`（不新建 `dns-lookup` / `whois-lookup` / `rdap-lookup` 近义薄页）  
**路径**：`/tools/domain-lookup`  
**主方向**：A（A.10 DNS over HTTPS + 注册数据 RDAP）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。  
> 对齐方向：[A.10 DNS over HTTPS](../../docs/2026-07-28-tool-direction.md)；现有实现：`src/endpoints/dnsLookup.ts`。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. domain lookup / 域名查询  
  2. whois lookup / WHOIS 查询（用户口语；实现走 RDAP）  
  3. dns lookup / DNS 记录查询（A/MX/NS… → **同页 DNS 分区**，不拆页）  
  4. check domain registration / registrar / expiry（注册商、到期 → RDAP 区 + FAQ）  
  5. RDAP lookup（技术说法 → Rules/FAQ，不进 H1 堆砌）
- 用户真实任务：输入一个域名，看清现网 DNS 解析与注册局侧登记信息（注册商、状态、日期、权威 NS），并理解脱敏、超时、部分 TLD 无 RDAP 等边界。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  ICANN Lookup（RDAP）；各类 Whois/DNS 站：域名框、注册商/到期/状态、部分并排 DNS；多数上传或纯服务端；少有「DoH + RDAP 分区 + 边界诚实 + 十语检索向」同页；偶有拆成独立 DNS / WHOIS URL。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **WHOIS vs RDAP**：用户仍搜 whois，但 gTLD 侧已主推 RDAP；竞品常混称或只贴原始文本  
  2. **DNS 记录 ≠ 注册局 NS**：现网 DoH 结果与 RDAP nameservers 可能不一致——多数工具不对照说明  
  3. **隐私脱敏**：联系人常 redacted；竞品暗示「查到所有者」  
  4. **失败边界**：超时、不支持的 TLD、NXDOMAIN、非法主机名  
  5. **与「加 www」分工**：本站已有 `add-www-to-dns`，竞品站常把生成记录与查询搅在一起或缺内链  
  6. **多语言检索向正文**：多数英文；十语为可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：记录类型含义 + RDAP 字段解读 + WHOIS/RDAP 关系 → `#rules`  
  - **②** 边界：非法域、超时、无 RDAP、NXDOMAIN、脱敏 → FAQ + 结果区  
  - **③** Use cases：上线核对 / 到期与状态 / 邮件 MX·TXT → `#usecases`  
  - **④** 对照：DNS Answer vs RDAP nameservers（同页小对照）→ Rules/结果区  
  - **⑤** References：RFC 8484 DoH、RDAP/ICANN Lookup、RFC 1034/1035 → `References`  
  - **⑥** 隐私：查询经 Worker→上游；不存业务内容（诚实）→ FAQ  
  - **⑦** 十语 locale brief + ≥3 轮（见 `03`）  
  - **⑧** 固定 Example：`example.com` → 样例 DNS/RDAP 摘要  
  - **⑨** Related ≥2 → 页底
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并**。「whois」「dns lookup」「domain info」「rdap」同属「按域名查信息」；**禁止**拆 `/tools/whois-lookup`、`/tools/dns-lookup` 等 doorway。用 DNS 分区 + Registration 分区 + FAQ 覆盖。
- [x] 权威来源 URL：  
  - https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/  
  - https://lookup.icann.org/en  
  - https://datatracker.ietf.org/doc/html/rfc8484  
  - https://datatracker.ietf.org/doc/html/rfc9083（或现行 RDAP 响应规范入口）  
  - https://datatracker.ietf.org/doc/html/rfc1035
- [x] 行业/场景 Use case 文案草稿：  
  1. 上线前：确认 A/AAAA/CNAME 与预期主机一致  
  2. 续费/交接：看注册商、状态、到期事件（以 RDAP 为准，联系人可能脱敏）  
  3. 邮件：核对 MX 与相关 TXT（SPF 片段可见即可，不做完整邮件审计）
- [x] 边界/失败案例草稿：空域名；非法 hostname；URL 误贴（含协议/路径）；DoH 超时；RDAP 404/不支持 TLD；NXDOMAIN；隐私 redacted 字段；部分类型无 Answer  
- [x] 结果区信息如何落到可索引 Example / FAQ：固定 `example.com` Example + FAQ（whois/RDAP、脱敏、DNS vs NS、隐私、失败）  
- [x] Related / 主题内链计划（≥2）：`add-www-to-dns`，`website-headers`，`ip-address`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：DNS 类型 + RDAP 字段 + WHOIS/RDAP |
| 2 | 边界/失败 | FAQ + 结果区错误文案 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | DNS Answer vs RDAP nameservers |
| 5 | 权威引用 | DoH / ICANN Lookup / RDAP / DNS RFCs |
| 6 | 本地隐私 | FAQ：经 Worker 上游；不持久化业务内容 |
| 7 | 多语言 | 十语 brief + ≥3 轮（`03`） |
| 8 | 数值示例 | Example：`example.com` |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/站长 · 方向 A.10 · P1 |
| 场景与行业 | 站长 / 运维 / 开发者：域名 DNS + 注册信息核对 |
| 技术（包、Tier、本地处理） | Tier 0 UI；Worker：扩展 DoH（A/AAAA/CNAME/MX/NS/TXT/SOA）+ RDAP `fetch`；**非**纯本地——FAQ 诚实；复用/扩展 `dnsLookup.ts`；可选短 TTL 缓存；限流与超时 |
| Title (en) | `Domain Lookup — Check DNS Records & Registration Online \| {Brand}` |
| Description 要点 | ≥120；步骤（输入域名→并行查 DNS 与 RDAP→分区结果）+ whois/注册商/到期次词 + example.com 信号 + 经边缘查询与脱敏边界一句 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | whois 与 RDAP 关系；联系人为何空白/脱敏；DNS 与注册局 NS 为何不同；查询是否保存；部分 TLD 失败怎么办 |
| Disclaimer / References | 非 YMYL；数据来自上游实时查询，可能脱敏或不完整；不修改你的 DNS/注册；DoH、ICANN Lookup、RDAP/DNS RFC |
| related | `add-www-to-dns`, `website-headers`, `ip-address` |
| 验收 | `coverage:gate` 0b→2→4；`lint:seo`；进页样例跑出真实分区结果；无近义薄页；README 登记 |
| 工期粗估 | ~1d（扩 DoH 类型 + RDAP 端点 + 页面分区 + Rules/IG + 十语） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `domain-lookup`（用户指定；覆盖 whois/dns/rdap 意图；**不**拆 `dns-lookup` / `whois-lookup`） |
| 主检索词 → title/H1 | domain lookup → H1「Domain Lookup — Check DNS Records & Registration Online」 |
| 次要关键词 → desc / FAQ / Use cases | whois lookup→desc 前半 + FAQ（RDAP）；dns lookup / MX·NS→desc + DNS 区；registrar / expiry→Registration 区 + FAQ；rdap→Rules/FAQ（不进 H1 堆砌） |
| 用户搜索习惯判断 | 用户常搜 whois 或 dns lookup，真实任务是「这个域名现在解析到哪、注册情况怎样」；H1 用 domain lookup + DNS & registration 结果向，避免「A, AAAA, MX, NS, TXT」参数目录腔。 |
| 优化摘要 | 初稿若用「Domain Lookup — A, AAAA, MX, NS, TXT, WHOIS, RDAP」改为结果向「Check DNS Records & Registration」；whois/rdap 次词落 desc/FAQ；与 `add-www-to-dns` intent 边界写清（查信息 vs 生成 www 记录）。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 验收：`npm run coverage:gate -- --slug=domain-lookup --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 交互规格（给实现用）

- 输入：
  - **域名**（必填）：`example.com`（规范化：trim、小写、去协议/路径、去尾点；可选剥误贴的 `www.` 仅作查询提示，默认查用户规范化后的主机名；支持 punycode/IDN 的 ASCII 形式）
  - 操作：Lookup / Clear / Load sample；可选「只查 DNS / 只查注册」开关（默认两者都查）
- 输出：
  - **DNS 分区**：按类型分组的表格（Type | Name | TTL | Data）；覆盖 A、AAAA、CNAME、MX、NS、TXT、SOA（可并行多请求）
  - **Registration 分区**：Registrar、Status、Events（registration/expiration 等）、RDAP nameservers、链接到权威 RDAP/ICANN（若有）；脱敏字段标「redacted/unavailable」
  - 可选对照提示：RDAP NS 与 DNS NS 不一致时一句说明
  - 可复制摘要（纯文本）
- 核心规则 / 算法：
  - 主机名校验复用/对齐 `normalizeAndValidateHostname`（`dnsLookup.ts`）
  - DNS：Worker → Cloudflare DoH JSON；扩展允许类型含 MX/NS/TXT/SOA；超时与错误码可观测
  - RDAP：Worker → bootstrap（优先 `https://rdap.org/domain/{name}` 或 IANA bootstrap 后打权威 base）；解析 JSON 字段；跟随合理 redirect；超时
  - 并行：`Promise.allSettled` 风格——DNS 与 RDAP 互不拖死
  - 限流：按 IP/短窗；不对开放任意递归滥用面
- 失败与边界行为：
  - 空/非法域名 → 400 级可见错误，不发上游
  - DoH 失败 → DNS 区错误，注册区仍可成功
  - RDAP 失败/不支持 → 注册区错误，DNS 区仍可成功
  - NXDOMAIN / 无 Answer → 明确「无记录」而非空白
- 示例 Input → Output：
  - Input：`example.com`  
  - Output：DNS 区可见至少一种公共记录类型摘要；Registration 区可见 registrar 或 status/events（以实时上游为准；Example 文案写「典型字段」并与进页样例对齐说明）
- **进页样例（必填）**：默认样例域名 `example.com`；进页 `loadSample()` 自动触发与 Lookup 相同流水线，DNS 与 Registration 分区出现真实上游结果（或分区级错误文案）；与 H2 Example 描述一致。属只读查询，**允许**自动执行（非付费/破坏性写操作）。

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成上一节「清单前检索覆盖优化」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（DNS 类型 + RDAP/WHOIS + NS 对照）
- [x] Example（固定 `example.com`，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3（含 whois/RDAP、脱敏、隐私/边缘）
- [x] Related tools ≥2（`add-www-to-dns`, `website-headers`, `ip-address`）
- [x] References ≥1（DoH / ICANN Lookup / RDAP 或 DNS RFC）
- [x] Disclaimer — 非 YMYL；FAQ/Rules 已说明上游数据可能脱敏或不完整
- [x] `03-locale-briefs.md` 已填（实现十语前）
- [x] README 工具清单登记（实现时）
- [x] `tool-catalog.json` 注册（实现时；`faqPrefix: tool_domain_lookup`）
- [x] **不**注册独立 `dns-lookup` / `whois-lookup` / `rdap-lookup` 薄页 slug
