# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`markdown-to-html`（保持；不新建 `html-to-markdown`）  
**路径**：`/tools/markdown-to-html`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。  
> 对齐存量增强：卡片 B7 + C 表「Markdown → HTML」双向增强。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. markdown to html / Markdown 转 HTML  
  2. html to markdown / HTML 转 Markdown  
  3. convert markdown online / sanitize markdown html  
  4. paste html to md / rich text to markdown  
  5. CommonMark preview / export HTML document（场景意图，写入 FAQ/Use cases，不拆页）
- 用户真实任务：写完 MD 要安全预览或导出 HTML；或从网页/邮件/CMS 复制的 HTML 收回干净 Markdown，便于进 Git/博客/LLM。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  单向或双向粘贴框、即时预览、Copy/Download、「免费/隐私」口号；多数 MD→HTML 不强调消毒细节；HTML→MD 常不说明丢标签/表格/脚本的行为。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. MD→HTML 的消毒边界（哪些被剥掉、预览是否等于导出）  
  2. HTML→MD 的不可逆损失（`script`/`style`、复杂表格、内联样式、注释）  
  3. 双向同页时方向切换与示例对照，而非两套近义落地页  
  4. 粘贴文本是否上传 vs CDN 载库的诚实说明  
  5. CommonMark / Turndown 规则简述（非「魔法转换」）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：MD→HTML（marked + DOMPurify）与 HTML→MD（turndown）对照列表 → `#rules`  
  - **②** 边界：空输入、仅脚本的 HTML、超大粘贴、往返不完全还原 → `FAQ` + 结果区提示  
  - **④** 对照：双向「保留 / 丢弃 / 风险」列表（Rules 内）  
  - **⑥** 本地隐私：粘贴不离开浏览器；FAQ 区分文本不上传与 CDN 载库  
  - **⑧** 固定双向 Example（MD↔HTML 各一组 Input→Output）  
  - **⑨** Related ≥2 → 页底内链  
  - **③** Use cases：博客导出 HTML；CMS/邮件 HTML→MD；LLM 粘贴清洗
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并进本页（Tab）**。同一「文档互转」任务，仅方向相反；单独 `html-to-markdown` 易成 doorway/薄页。`html to md` / `rich text to markdown` 用 Tab + Use cases + FAQ 覆盖。
- [x] 权威来源 URL：  
  - https://github.com/markedjs/marked  
  - https://github.com/cure53/DOMPurify  
  - https://github.com/mixmark-io/turndown  
  - https://commonmark.org/  
- [x] 行业/场景 Use case 文案草稿：README/博客 MD→静态 HTML；从网页复制清理为 MD；Prompt/笔记去 HTML 噪音  
- [x] 边界/失败案例草稿：空输入；HTML 仅含 `<script>`；往返 MD→HTML→MD 不完全相等；超软上限（建议 ~200k 字符）  
- [x] 结果区信息如何落到可索引 Example / FAQ：双向固定示例 + FAQ（消毒、损失、隐私、CDN、往返）  
- [x] Related / 主题内链计划（≥2）：`text-diff`，`website-headers`（可保留 `ip-address` 作第三）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：marked/CommonMark、DOMPurify、turndown 规则要点 |
| 2 | 边界/失败 | FAQ + 空/脚本/大文本/往返不等 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | Rules：两方向保留/丢弃对照 |
| 5 | 权威引用 | References → marked、DOMPurify、turndown、CommonMark |
| 6 | 本地隐私 | How/FAQ：文本不上传；诚实说明 CDN |
| 7 | 多语言 | 十语 locale brief + 检索向重写 + ≥3 轮（见 `03`） |
| 8 | 数值示例 | Example：MD→HTML 与 HTML→MD 各一组固定文案 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/文本 · 方向 A · 存量增强 B7 |
| 场景与行业 | 文档/博客作者；开发者 README；编辑从 CMS 收回 MD；AI 粘贴清洗 |
| 技术（包、Tier、本地处理） | 现有 `marked` + `DOMPurify`（CDN）；新增 `turndown`（CDN 或动态 import，Tier 1）；**粘贴纯客户端、不上传**；FAQ 写清 CDN |
| Title (en) | `Markdown ↔ HTML Converter — Sanitize & Preview \| {Brand}`（覆盖双向主词；不堆砌同义词） |
| Description 要点 | ≥120；步骤（选方向→粘贴→预览/复制）+ 消毒与损失说明 + 示例；十语检索向（含 html to markdown） |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；应用名体现双向） |
| FAQ 要点（≥3） | HTML 是否消毒；HTML→MD 会丢什么；文本是否上传（含 CDN）；往返是否无损；支持哪些 MD 特性 |
| Disclaimer / References | 非 YMYL；marked、DOMPurify、turndown、CommonMark |
| related | `text-diff`, `website-headers`（可保留 `ip-address`） |
| 验收 | `lint:seo`；`03` ≥3 轮；README 工具清单更新文案为双向；Tab 两方向均可交互；无独立薄页 |
| 工期粗估 | ~0.5–1d（交互 Tab + turndown + 文案/IG 补齐 + 十语检索向） |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 交互规格（给实现用）

- 输入：
  - **模式 Tab / 切换**：`Markdown → HTML` | `HTML → Markdown`（默认保持现有 MD→HTML，避免破坏书签习惯）
  - MD→HTML：左侧 Markdown textarea；右侧 HTML 预览（现有）；选项「完整 HTML 文档」；Copy / Download HTML / Clear
  - HTML→MD：左侧 HTML textarea；右侧 Markdown 输出（纯文本/等宽）；Copy / Download `.md` / Clear；粘贴前可对危险片段先 `DOMPurify` 再喂 turndown（实现时二选一并在 Rules 写清）
- 输出：
  - MD→HTML：消毒后预览 + 可复制片段或完整文档
  - HTML→MD：Markdown 文本；大段损失时结果区简短提示（见边界）
- 核心规则 / 算法：
  - MD→HTML：`marked.parse` → `DOMPurify.sanitize`
  - HTML→MD：`new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' })`（选项可微调，须在 Rules 列出默认）
- 失败与边界行为：
  - 空输入 → 预览/输出清空或轻提示
  - 超软上限（建议 ~200k 字符）→ 警告仍可试
  - 仅脚本/空标签 HTML → 输出空或极少内容 + FAQ 指向
  - 库未加载 → 提示刷新/重试
- 示例 Input → Output：
  - MD→HTML：现有预填样例 + Example 节固定对照
  - HTML→MD：`<h1>Title</h1><p>Hello <strong>world</strong></p>` → `# Title\n\nHello **world**`（各语可本地化示例句，结构一致）

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要（改为双向表述）
- [x] 首屏工具交互区（Tab + 两方向）
- [x] How it works
- [x] Formula / Rules（两方向对照）
- [x] Example（双向固定文案）
- [x] Use cases（2–3）
- [x] FAQ ≥3（补消毒、损失、隐私、往返）
- [x] Related tools ≥2
- [x] References ≥1（marked / DOMPurify / turndown / CommonMark）
- [x] Disclaimer — 非 YMYL，隐私在 How/FAQ
- [x] `03-locale-briefs.md` 已填（实现十语前）
- [x] README 工具清单文案改为双向
- [x] **不**注册独立 `html-to-markdown` slug

## 复审修正（2026-09-05）

- 样例初始化抽出为具名 loadSample()，满足进页自动跑样例的工程门禁；行为不变（填两侧样例后走 applyDirUi() → render()）。
