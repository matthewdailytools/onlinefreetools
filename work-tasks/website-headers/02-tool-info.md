# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`website-headers`  
**路径**：`/tools/website-headers`  
**主方向**：A  
**YMYL**：否  
**性质**：存量缺口增强（非新产品）  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 缺口清单：`docs/2026-07-28-per-tool-dev-seo-plans.md` §C。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. check http headers / website headers online  
  2. view response headers  
  3. CORS / Cache-Control / CSP header check（场景，不拆页）  
  4. 查看网站响应头 / HTTP 头检测  
  5. security headers checker（FAQ 覆盖）
- 用户真实任务：粘贴或输入 URL，看清线上返回了哪些响应头，并理解常见头含义与拉取方式局限。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  URL 输入框、原始头列表、「免费/快」口号；部分列常见安全头勾选。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. How：从输入到展示的具体步骤（含边缘/代理角色）  
  2. 可点击的 HTTP/RFC 权威引用  
  3. 隐私：本站如何处理目标 URL、是否存日志  
  4. 失败边界：超时、HTTPS 错误、拒绝连接  
  5. related 主题链（多数孤立）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** How 步骤细化（有序步骤与 UI 一致）→ `#how`  
  - **⑤** References：RFC 9110 / Cache-Control 等可点外链 → `References`  
  - **⑥** FAQ：URL 请求经边缘、不存业务内容（诚实表述）→ `FAQ`  
  - **②** 边界：超时、无效 URL、非 HTTP(S) → `FAQ`  
  - **⑨** Related 保持 catalog ≥2 → 页底（**不**提前链未上线 meta-serp）
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并**。同一「URL→响应头」流程；CORS/缓存/安全头用 How + FAQ 覆盖。
- [x] 权威来源 URL：  
  - https://www.rfc-editor.org/rfc/rfc9110.html  
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers  
  - https://www.rfc-editor.org/rfc/rfc9111.html（Cache-Control / 缓存语义，可选）
- [x] 行业/场景 Use case 文案草稿：上线前核对 Cache-Control；排查 CORS；检查 CSP/安全头是否下发  
- [x] 边界/失败案例草稿：空 URL；非 http(s)；超时；目标拒绝；仅看到边缘侧可见头  
- [x] 结果区信息如何落到可索引 Example / FAQ：固定示例头片段 + FAQ（隐私、失败、RFC）  
- [x] Related / 主题内链计划（≥2）：**保持** `ip-address`, `markdown-to-html`, `text-diff`（`tool-catalog.json`）；meta-serp 上线后再扩

### 计划勾选的 §3.1 维度（至少 3）— 实现前计划，模块清单未勾

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | How：请求路径步骤；常见头含义简述 |
| 2 | 边界/失败 | FAQ：超时/无效 URL/协议限制 |
| 3 | 场景语境 | Use cases：缓存/CORS/安全头核对 |
| 5 | 权威引用 | References → RFC 9110 + MDN Headers（可点击） |
| 6 | 本地隐私 | FAQ：边缘代理目的与是否持久化 |
| 7 | 多语言 | 十语 locale brief（见 `03`） |
| 9 | 主题内链 | related 保持 catalog |

**计划硬性增益**：① ② ⑤ ⑥ ⑨（+③ 场景）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者 · 方向 A · **存量增强** |
| 场景与行业 | 站长/开发者：核对响应头与安全/缓存策略 |
| 技术（包、Tier、本地处理） | 现有 Worker/边缘拉取；Tier 0/1；**非**纯本地——FAQ 须诚实 |
| Title (en) | 保持检索向主词；避免同义词堆砌（实现时对照 brief） |
| Description | ≥120；步骤 + 示例头 + 隐私一句 |
| Schema | WebApplication + BreadcrumbList |
| FAQ（≥3） | How/步骤确认；隐私与边缘；失败边界；是否等于浏览器 DevTools |
| Disclaimer / References | 非 YMYL；RFC 9110、MDN HTTP Headers |
| related | `ip-address`, `markdown-to-html`, `text-diff`（**保持**；勿链未上线页） |
| 验收 | `lint:seo`；How 有序；References 可点；FAQ 隐私；`03` ≥3 轮后改 i18n |
| 工期粗估 | ~0.5–1d 文案/模块补齐（交互大体已有） |

## 交互规格（给实现用）

- 输入：目标 URL（https 优先）
- 输出：响应头名/值列表；状态码（若已有则保留）
- 核心规则：经边缘代理发起请求；展示边缘可见响应头
- 失败与边界：无效 URL、超时、网络错误 → 可见错误文案
- 示例：文档化一组示例头（如 `content-type`, `cache-control`）供 Example 区

## 页面模块清单（与 tool-creation 对齐）

> 实现待定 — 下列均为计划项，**未勾选**。

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区
- [ ] How it works（**本缺口重点：步骤细化**）
- [ ] Formula / Rules（可选：常见头速查列表）
- [ ] Example（固定文案）
- [ ] Use cases（2–3）
- [ ] FAQ ≥3（含隐私/本地或边缘说明）
- [ ] Related tools ≥2（保持现有）
- [ ] References ≥1（HTTP RFC，可点击；放在 FAQ/Related **之后**）
- [ ] Disclaimer — 非 YMYL
- [ ] `03-locale-briefs.md` 已填（实现十语前）
