# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`jwt-decoder`（不新建 `jwt-parser` / `jwt-debugger` / `decode-jwt-online` 近义薄页）  
**路径**：`/tools/jwt-decoder`  
**主方向**：A（方向 A.6 加密、编码与身份 · Tier 0 原生 Base64url）  
**YMYL**：否（须可见**不验签**免责声明；不可用于授权/安全决策）  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 对齐方向：[A.6 JWT 解码](../../docs/2026-07-28-tool-direction.md)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. jwt decoder / JWT 解码  
  2. decode jwt / JWT 解析  
  3. jwt parser / jwt payload viewer  
  4. jwt debug online / bearer token decode（场景 → Use cases/FAQ，**不拆页**）  
  5. jwt base64url / exp iat decode（边界 → Rules/FAQ + 互链 base64、unix-timestamp）
- 用户真实任务：粘贴 access token / ID token，快速查看 header（`alg`/`typ`）与 payload claims（`sub`/`aud`/`exp`/`iat`）；理解 JWT 三段子结构；**明确知道解码不等于验证签名**。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  粘贴框、三栏或 JSON 展示、Copy、部分标注「decode only」；jwt.io 类站点可验签但复杂；多数强调在线/免费/隐私。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **不验签边界**：小字带过，少有 FAQ 说明「能读 payload ≠ token 可信」  
  2. **Base64url**：`-`/`_` 与标准 Base64、`=` padding 处理——与通用 Base64 工具差异  
  3. **Registered claims**：`exp`/`nbf`/`iat` 为 **Unix 秒**；过期/未生效如何判断（须链时间工具）  
  4. **Malformed JWT**：段数 ≠3、非法 JSON、空 payload、超长 token  
  5. **隐私**：token 常含 PII/sub/email——须强调本地不上传  
  6. **多语言检索向正文**：多数英文；本站十语 brief 为增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：JWT 结构 + Base64url 步骤 + registered claims 表 → `#rules`  
  - **②** 边界：malformed、段数错误、strict JSON、空输入 → FAQ + 结果区  
  - **③** Use cases：OAuth 调试、核对 `aud`/`exp`、教学 JWT 结构  
  - **④** 对照表：header vs payload vs signature（验签与否）→ Rules + **Disclaimer**  
  - **⑤** References → RFC 7519、RFC 7515  
  - **⑥** 本地隐私：token 不上传；FAQ 诚实说明无后端  
  - **⑦** 十语 brief + ≥3 轮（`03`）  
  - **⑧** 固定 Example：经典三段子 demo JWT + 解码 JSON  
  - **⑨** Related ≥2 → `base64`, `unix-timestamp`
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并进本页**。`jwt parser`、`jwt payload viewer`、`decode jwt online` 为同一解码任务变体；拆页易 doorway。
- [x] 权威来源 URL：  
  - https://www.rfc-editor.org/rfc/rfc7519  
  - https://www.rfc-editor.org/rfc/rfc7515
- [x] 行业/场景 Use case 文案草稿：  
  1. 全栈：调试 OAuth access token 的 `sub`/`scope`/`exp`  
  2. API 网关：核对 issuer `iss` 与 audience `aud` 是否与文档一致  
  3. 教学：展示 JWT 三段子与 Base64url（Related → base64）
- [x] 边界/失败案例草稿：非 3 段；header/payload 非合法 Base64url；JSON parse 失败；空粘贴；signature 段仅展示不验证；`exp` 已过期提示（基于当前时间，FAQ 说明）
- [x] 结果区信息如何落到可索引 Example / FAQ：固定 demo JWT + FAQ（不验签、Base64url、claims 时间、隐私、malformed）
- [x] Related / 主题内链计划（≥2）：`base64`, `unix-timestamp`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：JWT 结构 + Base64url + claims |
| 2 | 边界/失败 | FAQ + UI：malformed、不验签 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | header / payload / signature 对照 |
| 5 | 权威引用 | RFC 7519 / 7515 |
| 6 | 本地隐私 | How/FAQ：token 不上传 |
| 7 | 多语言 | `03` brief + ≥3 轮 |
| 8 | 数值示例 | Example：demo JWT → JSON |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/编码 · 方向 A.6 · P1（清单序号 18） |
| 场景与行业 | 后端 / 全栈 / 安全调试：OAuth、API Bearer token |
| 技术（包、Tier、本地处理） | **Tier 0**：`split('.')` + Base64url→Base64 + `atob` + `JSON.parse`；**不验签**；signature 原文展示；可选 claims 时间格式化；**纯客户端、不上传** |
| Title (en) | `JWT Decoder — Read Header & Payload Locally (No Verify) \| {Brand}` |
| Description 要点（步骤/公式 + 示例；≥120 落地时写满） | ≥120；步骤（粘贴 JWT→自动拆 header/payload→复制 JSON）+ **不验证签名** 声明 + demo token 示例 + `exp`/`iat` 解读；十语检索向（jwt decoder、decode jwt） |
| Schema | WebApplication + BreadcrumbList（应用名含 Decoder；与 Disclaimer 一致） |
| FAQ 要点（≥3） | 是否验证签名（否，为何）；Malformed JWT；Base64url 与 Base64 区别；`exp`/`iat` 如何读；内容是否上传；能否用于生产授权（否） |
| Disclaimer / References | **可见 Disclaimer：不验签、不可用于授权决策**；RFC 7519、RFC 7515 |
| related | `base64`, `unix-timestamp` |
| 验收 | `lint:seo`；`03` ≥3 轮；进页 loadSample 自动解码；Disclaimer 可见；无验签功能；无近义薄页 |
| 工期粗估 | ~0.5d（Tier 0 + IG 文案 + 十语 brief） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `jwt-decoder`（用户会搜 jwt decoder/decode jwt；与 `base64` intent 分离） |
| 主检索词 → title/H1 | jwt decoder / JWT 解码 → H1「JWT Decoder — Read Header & Payload Locally (No Verify)」 |
| 次要关键词 → desc / FAQ / Use cases | `jwt parser`→desc；`exp`/`iat`→Rules+FAQ+unix-timestamp；`base64url`→Rules+base64 related |
| 用户搜索习惯判断 | 开发者搜「decode jwt」「jwt decoder online」要即时 JSON；H1 结果向，不写「三段、Base64url、Copy 按钮」目录腔 |
| 优化摘要 | 2026-08-08：十语 title 副标题统一为「本地查看 header/payload（不验签）」结果向；去掉参数目录腔；slug 保持 jwt-decoder |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格（给实现用）

- 输入：
  - 单行或多行 textarea 粘贴完整 JWT（`header.payload.signature`）
  - 操作：Decode（可 debounce 即时）/ Copy header JSON / Copy payload JSON / Clear / Load sample
  - 可选：展示 signature 段原文（只读）；对 payload 中 `exp`/`iat`/`nbf`（数字秒）显示 UTC + 本地人类可读时间
- 输出：
  - Header：格式化 JSON + Copy
  - Payload：格式化 JSON + Copy + claims 时间行（若有）
  - Signature：原文 + 固定文案「Not verified — this tool does not validate signatures」
  - 错误：段数 ≠3、Base64url/JSON 失败 → 简短错误，不静默
- 核心规则 / 算法：
  - `parts = token.trim().split('.')`；须 `parts.length === 3`
  - Base64url：`replace(/-/g,'+').replace(/_/g,'/')`；补 `=` padding 至长度 %4===0
  - `JSON.parse(atob(...))` 分别解析 header/payload
  - **禁止**实现 HMAC/RSA 验签；**禁止**把 token 发往服务器
- 失败与边界行为：
  - 空输入 → 清空结果
  - 非法段 → 错误信息指明 header 或 payload
  - 超大 token（软上限 ~8KB）→ 警告
- 示例 Input → Output：
  - Input：`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
  - Header：`{"alg":"HS256","typ":"JWT"}`
  - Payload：`{"sub":"1234567890","name":"John Doe","iat":1516239022}`
- **进页样例（必填）**：进页 `loadSample()` 填入上述 demo JWT 并 **自动 decode**；结果区展示 header/payload JSON 与 signature 未验证提示；与 H2 Example 完全一致

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要（含 no verify）
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（JWT 结构 + Base64url + claims）
- [x] Example（固定 demo JWT，与 loadSample 一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3（不验签、malformed、Base64url、隐私、claims 时间）
- [x] Related tools ≥2（`base64`, `unix-timestamp`）
- [x] References ≥1（RFC 7519 / 7515）
- [x] Disclaimer — **不验签**（可见，非 YMYL 但仍必备本工具免责）
- [x] `03-locale-briefs.md` 已填（实现十语前）
- [x] README 工具清单登记（实现时，与 catalog 一致）
- [x] `tool-catalog.json` 注册（实现时；`faqPrefix: tool_jwt_decoder`；`related` ≥ 2）
- [x] **不**注册独立 `jwt-parser` / `jwt-debugger` slug

## 与相邻工具边界

| 工具 | 本页不做 | 本页可做 |
|---|---|---|
| `base64` | 通用文本/文件 Base64 编解码 | JWT 三段子 + claims + 不验签声明 |
| `unix-timestamp` | 通用时间戳↔日期互转 | 解读 payload 内 `exp`/`iat` 并互链 |
| jwt.io 类验签 | HMAC/RSA 签名验证 | 仅解码；Disclaimer 说明 |
