# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`text-diff`  
**路径**：`/tools/text-diff`  
**主方向**：A  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. text diff online / online diff checker  
  2. compare two texts / 文本对比  
  3. line by line diff / word diff  
  4. diff two strings / paste diff  
  5. CRLF vs LF / whitespace ignore（场景意图，写入 FAQ，不拆页）
- 用户真实任务：粘贴原文与改稿（或两段配置），看清增删改位置，并理解「按行还是按词」为何结果不同。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  双栏粘贴、并排/统一视图、颜色高亮增删、基本「Ignore whitespace」开关、「快/免费/隐私」口号。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. 行级 vs 词级 vs 字符级的适用场景与误判  
  2. 换行符（CRLF/LF）、尾随空格、末尾空行对结果的影响  
  3. 算法/规则简述（Myers / LCS 类 diff，非「魔法高亮」）  
  4. 超大文本性能与浏览器限制  
  5. 是否上传服务器（多数仅口号；须诚实说明：粘贴文本不上传，但库可从 CDN 加载）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：三种对比方式对照列表 + 忽略空白/换行选项 → `#rules`  
  - **②** 边界：空输入、完全相同、仅换行差异、超大粘贴 → `FAQ` + 结果区提示  
  - **④** 对照：行/词/字符「适用场景 · 风险」列表（Rules 内）  
  - **⑥** 本地隐私：粘贴不离开浏览器；FAQ 区分「文本不上传」与「可加载开源库 CDN」  
  - **⑧** 固定 Input→Output 示例 + 首屏本地化预填 → `Example` + 工具区  
  - **⑨** Related ≥2 → 页底内链  
  - **③** Use cases：配置核对 / Prompt 迭代 / 译稿校对
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并**。同一粘贴→Diff 流程，仅意图词不同；`word diff` / `compare json text` 等用 Use cases + FAQ 覆盖。JSON 结构化 Diff 若未来要做，须有独立解析规则再拆页。
- [x] 权威来源 URL：  
  - https://github.com/kpdecker/jsdiff  
  - https://en.wikipedia.org/wiki/Diff  
- [x] 行业/场景 Use case 文案草稿：配置核对；Prompt 迭代；译稿/文案校对  
- [x] 边界/失败案例草稿：一侧空；仅 CRLF↔LF；完全相同；超软上限（~100k 字符/侧）  
- [x] 结果区信息如何落到可索引 Example / FAQ：固定示例 + FAQ（行/词、隐私、换行、纯文本限制）  
- [x] Related / 主题内链计划（≥2）：`markdown-to-html`，`website-headers`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：Myers 类最短编辑思路 + jsdiff；行/词/字符 |
| 2 | 边界/失败 | FAQ + 空/相同/大文本警告 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | Rules 内三种方式对照列表 |
| 5 | 权威引用 | References → jsdiff + Wikipedia Diff |
| 6 | 本地隐私 | How/FAQ：文本不上传；诚实说明 CDN 载库 |
| 7 | 多语言 | 十语 locale brief + 检索向重写 + ≥3 轮（见 `03`） |
| 8 | 数值示例 | Example + 本地化预填样例 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（已落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/文本 · 方向 A |
| 场景与行业 | 开发者配置核对；AI Prompt 迭代；文案/译稿校对 |
| 技术（包、Tier、本地处理） | `diff`（jsdiff）经 **CDN**（jsDelivr）加载 UMD；Tier 1；**粘贴文本纯客户端对比、不上传**；库文件来自 CDN（FAQ 须写清） |
| Title (en) | `Compare Two Texts Online — Text Diff Checker \| {Brand}` |
| Description | ≥120；步骤（粘贴→选方式→高亮）+ 示例；十语检索向 |
| Schema | WebApplication + BreadcrumbList |
| FAQ（≥3） | 行 vs 词；文本是否上传（含 CDN 说明）；换行标红；能否比图片/二进制 |
| Disclaimer / References | 非 YMYL；jsdiff、Wikipedia Diff |
| related | `markdown-to-html`, `website-headers` |
| 验收 | `lint:seo`；`03` ≥3 轮；`README.md` 工具清单已含本工具；UI 高亮与 Example 一致 |
| 工期粗估 | （已实现）交互 + 十语检索向 + 规则对齐优化 |

## 交互规格（给实现用）

- 输入：左侧 Text A、右侧 Text B；模式：Lines / Words / Chars；Ignore whitespace；规范化换行（CRLF→LF，默认开）
- 输出：统一视图高亮（绿增 / 红删）+ 图例；摘要 added/removed 块计数；交换 A/B；清空
- 核心规则：`Diff.diffLines` / `diffWords` / `diffChars`；忽略空白走库选项
- 失败与边界：两侧空 → 提示；超软上限 → 警告仍可试；完全相同 → No differences；库未加载 → 提示刷新
- 示例 / 预填：各语 `sample_a` / `sample_b`（与 Example 文案同语种）

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含本地化预填 + 绿/红图例）
- [x] How it works
- [x] Formula / Rules（结构化三种方式列表）
- [x] Example（固定文案）
- [x] Use cases（2–3）
- [x] FAQ ≥3（`renderToolExtraSections`）
- [x] Related tools ≥2
- [x] References ≥1（放在 FAQ/Related **之后**）
- [x] README 工具清单已更新
- [ ] Disclaimer — 非 YMYL，隐私说明在 How/FAQ
