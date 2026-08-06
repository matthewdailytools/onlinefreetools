# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`add-www-to-dns`（不新建 `www-cname` / `non-www-to-www` / `apex-cname` 近义薄页）  
**路径**：`/tools/add-www-to-dns`  
**主方向**：A（方向 A.10 DNS over HTTPS + A.12 站长/SEO 场景语境）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。  
> 对齐方向：[A.10 DNS over HTTPS](../../docs/2026-07-28-tool-direction.md)；包调研：[dns-packet / DoH](../../docs/2026-07-09-js-tool-packages-survey.md)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. add www to dns / 给域名加 www DNS  
  2. www cname record / www 子域名 CNAME  
  3. www vs non-www dns / apex and www DNS  
  4. cloudflare / vercel / route53 / 阿里云 加 www（场景教程 → **同页 Provider guides**，**不拆页**）  
  5. can apex be cname / cname flattening ALIAS（边界 → Rules/FAQ）
- 用户真实任务：在 DNS 面板为站点加上 `www`，使 `www.example.com` 与 apex 解析到同一服务；搞清该用 **CNAME 还是 A**、apex 能否 CNAME、解析后要不要 **301**；并能按 **自己用的云/注册商面板** 照步骤点完。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  多为博客/帮助文「加一条 CNAME」；各云厂商官方文档分散；少数在线生成器输出记录表；偶有「查 DNS」工具但与「加 www」拆开；少有「生成记录 + 多服务商点击路径 + apex/301」同页。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **apex 禁止裸 CNAME**（RFC 1034）及 ALIAS / CNAME flattening 例外——竞品常一笔带过或给错误示例  
  2. **DNS 解析 ≠ 规范主机名**：仍需服务器/CDN **301**——多数教程混为一谈  
  3. **记录方案对照**：`A@+CNAME www` vs `双 A` vs CDN flattening——缺可复制表  
  4. **分服务商操作路径**：Cloudflare / Route 53 / Vercel / 阿里云等面板字段名与点击步骤分散在各官方站，无「同一任务下并排对照」  
  5. **现网核对**：生成后是否冲突——少有一键 DoH  
  6. **多语言检索向正文**：多数英文托管商文档；本站十语是可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：推荐记录步骤 + **apex 不可 CNAME** → `#rules`  
  - **②** 边界：错误 apex CNAME、TTL、传播、证书 SAN → FAQ + 结果提示  
  - **③** Use cases + **Provider guides**：自托管 / CDN / SEO；以及 Cloudflare、Route 53、Vercel、Netlify、阿里云 DNS、通用注册商等 **分场景步骤** → `#guides`  
  - **④** 对照表：方案 A/B/C + 服务商能力（flattening / ALIAS / 仅 A）→ Rules  
  - **⑤** References：RFC 1034、DoH、Google canonicalization、各厂商官方 DNS 文档链  
  - **⑥** 隐私：查询经 Worker→DoH；生成不上传  
  - **⑦** 十语 locale brief + ≥3 轮（见 `03`）  
  - **⑧** 固定 Example：`example.com` + IP → 记录行  
  - **⑨** Related ≥2 → 页底内链
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并进本页**。「www CNAME」「apex A」「Cloudflare www」「Vercel www」同属「给站点加/理清 www DNS」；**禁止**拆 `/tools/cloudflare-add-www` 等 doorway。用「记录方案」选择器 + **同页 Provider guides（Tab/手风琴）** + FAQ 覆盖。
- [x] 权威来源 URL：  
  - https://datatracker.ietf.org/doc/html/rfc1034  
  - https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/  
  - https://developers.google.com/search/docs/crawling-indexing/canonicalization  
  - （实现时在各 Provider 小节下挂官方文档，如 Cloudflare DNS、AWS Route 53 ALIAS、Vercel Domains、阿里云解析等现行 URL）
- [x] 行业/场景 Use case 文案草稿：  
  1. 自托管：apex 已有 A，补 `www` CNAME 到 apex  
  2. CDN/托管：面板要求 `www` CNAME 到 `xxx.cdn.example`，apex 用 flattening/ALIAS  
  3. SEO：选定规范主机后，先保证两侧都能解析，再在边缘做 301  
- [x] **分场景 / 云服务商操作教程（同页 `#guides`，MVP 清单）**：  
  每篇结构统一：**适用何时** → **推荐方案编号（1/2/3）** → **面板步骤（4–7 步）** → **Name/Type/Value 对照** → **注意（proxied/橙云、ALIAS、证书）** → **官方文档链**。  
  | ID | 场景/服务商 | 教程要点（草稿） |
  |---|---|---|
  | G1 | **通用 DNS 面板**（GoDaddy / Namecheap / 任意注册商） | 进 DNS Management → Add Record；Host=`www` Type=CNAME Value=apex；根域 A=服务器 IP；提醒字段名可能是 Host/Name |
  | G2 | **Cloudflare DNS** | DNS → Records；www CNAME → `@` 或 apex；根域 A；说明 **CNAME flattening** 与 **Proxied（橙云）** 对证书/源站的影响；链官方 |
  | G3 | **AWS Route 53** | Hosted zone → Create record；www CNAME → apex；apex 用 **A–Alias** 指向 CloudFront/ELB（勿裸 CNAME）；链官方 |
  | G4 | **Vercel** | Project → Domains 添加 `www` 与 apex；若 DNS 在外部：按 Vercel 给出的 CNAME/A 值填写；apex 常需 A/`10.0.0.0` 类说明以官方为准；链官方 |
  | G5 | **Netlify** | Domain management → DNS 或外部 DNS；www CNAME → Netlify 主机名；apex 用 Netlify DNS 或 ALIAS/A；链官方 |
  | G6 | **阿里云解析 DNS** | 云解析 → 添加记录；主机记录 `www`，记录类型 CNAME，记录值=主域名或目标；@ 主机记录 A；说明「主机记录」填法；链官方 |
  | G7 | **自建 / VPS（Nginx/Caddy）** | DNS 用方案 1 后，服务器 `server_name` 含两侧；301 示例（www↔apex 择一）；证书 SAN 含两侧 |
  | G8 | **Google Cloud DNS**（可选 P1.5） | 记录集创建；www CNAME；apex A；链官方 |
  **MVP 必做**：G1–G7；G8 可二期。文案须可操作，禁止只堆品牌名无步骤。UI：手风琴或 Tab，默认展开 G1；选择「记录方案 3」时可提示优先看 G2–G5。  
  **红线**：不拆 `/tools/cloudflare-www-dns` 等；不冒充官方；步骤过时时以官方链为准并在 Disclaimer 说明「面板 UI 可能变更」。
- [x] 边界/失败案例草稿：空域名；非法 hostname；apex 填了 CNAME（明确报错文案）；无 IP 时仅生成 CNAME 方案并提示 A 需 IP；DoH 超时/失败；查询到冲突记录；IPv6-only（AAAA）；传播未完成；教程与面板 UI 不一致（引导看官方）  
- [x] 结果区信息如何落到可索引 Example / FAQ：固定 example.com 示例 + FAQ（apex CNAME、301、CNAME vs A、传播、隐私）+ Provider guides 可见 HTML（可索引）  
- [x] Related / 主题内链计划（≥2）：`website-headers`，`ip-address`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：推荐记录集 + apex 禁 CNAME |
| 2 | 边界/失败 | FAQ + 结果区：非法域、冲突、DoH 失败 |
| 3 | 场景语境 | Use cases ×3 + Provider guides（Cloudflare / R53 / Vercel / 阿里云等） |
| 4 | 对照表 | Rules：A+CNAME / 双 A / flattening；服务商能力差异 |
| 5 | 权威引用 | RFC 1034、DoH、Google canonicalization |
| 6 | 本地隐私 | FAQ：生成本地；查询经 Worker→DoH |
| 7 | 多语言 | 十语 brief + ≥3 轮（`03`） |
| 8 | 数值示例 | Example：固定域名+IP → 记录表 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/站长 · 方向 A.10 · P1 |
| 场景与行业 | 站长 / SEO / 前端：加 www DNS；覆盖 Cloudflare、Route 53、Vercel、Netlify、阿里云、通用注册商、自建 |
| 技术（包、Tier、本地处理） | Tier 0 记录生成（纯前端）；可选 Worker DoH；**同页 Provider guides**（i18n 键或结构化区块）；**不**代写用户 DNS 面板；无第三方业务存储 |
| Title (en) | `Add WWW to DNS — A/CNAME, Apex Rules & Provider Guides \| {Brand}` |
| Description 要点 | ≥120；步骤（输入域名→选方案→复制→按服务商教程添加→可选查现网）+ apex 不可 CNAME + Cloudflare/Vercel 等场景；十语检索向 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | apex 能 CNAME 吗；CNAME vs A；DNS 与 301；Cloudflare 橙云要注意什么；传播多久；查询是否上传 |
| Disclaimer / References | 非 YMYL；不修改你的 DNS 区；面板 UI 可能变更请以官方为准；RFC 1034；DoH；canonicalization；各厂商官方链 |
| related | `website-headers`, `ip-address` |
| 验收 | `npm run lint:seo`；`03` ≥3 轮；生成表可复制；**G1–G7 教程可见且含步骤+官方链**；DoH 可选；无近义薄页；README 登记 |
| 工期粗估 | ~1–1.5d（表单 + 生成表 + DoH + **7 篇服务商教程** + Rules/IG + 十语） |
| 本地化核查 | 见 `03-locale-briefs.md`（教程步骤须按语种检索向重写，勿十语同构机翻） |

## 交互规格（给实现用）

- 输入：
  - **域名**（必填）：`example.com`（规范化：去协议、去尾斜杠、小写、可选剥 `www.` 得 apex）
  - **服务器 IPv4**（可选）：用于生成 apex/`www` 的 A 记录
  - **服务器 IPv6**（可选）：生成 AAAA
  - **记录方案**（单选）：
    1. **推荐：Apex A/AAAA + www CNAME → apex**（默认；有 IP 时填 A；无 IP 时只输出 www CNAME 并提示补 A）
    2. **双 A/AAAA**：apex 与 www 同 IP（适合不支持 CNAME 到本域的面板）
    3. **CDN / 主机名目标**：用户填「目标主机名」（如 `cname.vercel-dns.com`），输出 `www` CNAME → 该主机；apex 提示使用面板 ALIAS/flattening 或 A
  - **TTL**（可选，默认 3600）显示在表中
  - **场景/服务商快捷跳转**（可选）：下拉或芯片 → 滚动到 `#guide-cloudflare` 等锚点（与下方 guides 模块对应）
  - 操作：Generate / Copy all / Copy row / Clear / Load sample；**Check current DNS**（可选，调 Worker DoH 查 apex 与 www 的 A/AAAA/CNAME）
- 输出：
  - 表格列：Type | Host/Name | Value/Target | TTL | Notes
  - 纯文本块（可复制 BIND/通用面板风格）
  - 警告条：apex 勿用 CNAME；DNS ≠ 301；证书需含两侧主机名
  - 查询结果区：现有记录摘要 + 与推荐方案差异（缺记录 / 冲突）
  - **Provider guides 区块**（`#guides`）：手风琴/Tab，G1–G7 全文可见（非仅 JS 注入），每篇含步骤列表 + 与当前生成表「字段对照」说明 + 官方文档外链
- 核心规则 / 算法：
  - 规范化域名：拒绝空、空格、非法标签；支持 IDN 时可用 `URL`/`punycode`（实现择一并在 Rules 说明）
  - 方案 1：`@`/`example.com` → A/AAAA；`www` → CNAME `example.com.`（注意面板有的填相对名 `www`、目标不带尾点）
  - 方案 2：`@` 与 `www` 均 A/AAAA 同 IP
  - 方案 3：`www` CNAME → 用户目标；apex 行显示「使用提供商 ALIAS / CNAME flattening / 或 A 记录」占位说明
  - DoH：Worker 请求 `https://cloudflare-dns.com/dns-query?name=…&type=…`，`Accept: application/dns-json`；限流与超时；不对用户开放任意递归代理滥用面（仅查用户提交的 hostname，校验为本工具合法域名格式）
- 失败与边界行为：
  - 空域名 → 提示
  - 方案 1/2 无 IP → 仍生成 CNAME/说明行，A 行标「需要 IP」
  - DoH 失败 → 不影响已生成表；错误文案可读
  - 查询发现 apex 已是 CNAME → 高亮警告（不合规/依赖 flattening）
- 示例 Input → Output：
  - Input：domain=`example.com`，IPv4=`203.0.113.10`，方案 1  
  - Output：
    ```
    Type  Name  Value           TTL
    A     @     203.0.113.10    3600
    CNAME www   example.com     3600
    ```

## 页面模块清单（与 tool-creation 对齐）

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区（表单 + 记录表 + 可选 Check DNS）
- [ ] How it works
- [ ] Formula / Rules（方案对照 + apex 禁 CNAME + DNS vs 301）
- [ ] Example（固定 example.com）
- [ ] Use cases（2–3）
- [ ] **Provider / scenario guides（G1–G7，同页 `#guides`，可见步骤 + 官方链）**
- [ ] FAQ ≥3（含 Cloudflare 橙云 / 服务商差异至少 1 条）
- [ ] Related tools ≥2（`website-headers`, `ip-address`）
- [ ] References ≥1（RFC 1034 / DoH / Google canonicalization + 服务商官方）
- [ ] Disclaimer — 非 YMYL；不修改 DNS 区；面板 UI 可能变更以官方为准
- [ ] `03-locale-briefs.md` 已填
- [ ] README 工具清单登记
- [ ] `tool-catalog.json` 注册（`faqPrefix: tool_add_www_to_dns`；`related` ≥ 2）
- [ ] **不**注册独立 `www-cname` / `cloudflare-www-dns` / `vercel-www` 等薄页 slug
- [ ] 若实现 DoH：Worker 路由 + 域名校验 + 合理超时/限流
