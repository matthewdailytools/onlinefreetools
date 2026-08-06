# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`text-diff`  
**路径**：`/tools/text-diff`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

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
  5. 是否上传服务器（多数仅口号，缺少可验证本地机制说明）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：三种粒度 + 忽略空白选项 → `Formula / Rules`  
  - **②** 边界：空输入、完全相同、仅换行差异、超大粘贴 → `FAQ` + `Example`  
  - **⑥** 本地隐私：粘贴不离开浏览器 → `How it works` / FAQ  
  - **⑧** 固定 Input→Output 示例（含一行修改例）→ `Example`  
  - **⑨** Related ≥2 → 页底内链  
  （可选加强 **③** Use cases：配置核对 / Prompt 迭代 / 译稿校对）
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并**。同一粘贴→Diff 流程，仅意图词不同；`word diff` / `compare json text` 等用 Use cases + FAQ 覆盖。JSON 结构化 Diff 若未来要做，须有独立解析规则再拆页。
- [x] 权威来源 URL：  
  - https://github.com/kpdecker/jsdiff（实现库）  
  - https://en.wikipedia.org/wiki/Diff（diff 概念 / 常见算法背景）  
  - （可选）https://www.gnu.org/software/diffutils/manual/html_node/Detailed-Description.html（经典 diff 语义对照）
- [x] 行业/场景 Use case 文案草稿：  
  1. **配置核对**：两段 `.env` / YAML 片段，用行级 Diff 找改动的键值。  
  2. **Prompt 迭代**：对比上一版与新版提示词，用词级 Diff 看措辞增删。  
  3. **译稿/文案校对**：原稿与修订稿并排，确认仅改了该改的句子。
- [x] 边界/失败案例草稿：  
  - 一侧为空 → 另一侧全部记为新增/删除  
  - 仅 CRLF↔LF → 行级可能「整行变更」；说明可规范化换行后再比  
  - 两侧完全相同 → 明确「0 differences」  
  - 超大粘贴 → 提示可能卡顿，建议截取关键段落（首版软上限文案）
- [x] 结果区信息如何落到可索引 Example / FAQ：  
  Example 固定展示：原文 3 行、改稿改 1 词 → 标明「1 line changed / word-level: 1 change」。FAQ 解释「为什么忽略空白后差异消失」。
- [x] Related / 主题内链计划（≥2）：`markdown-to-html`，`website-headers`（上线后可改链未来 `yaml-json` / `safe-paste-cleaner`）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：行/词/字符粒度；可选忽略空白；简述 Myers 类最短编辑脚本思路 |
| 2 | 边界/失败 | FAQ：空输入、相同文本、换行差异、体积上限 |
| 3 | 场景语境 | Use cases：配置 / Prompt / 译稿 |
| 4 | 对照表 | （可选）三种粒度对照表：速度、可读性、误报倾向 |
| 5 | 权威引用 | References → jsdiff + Wikipedia Diff |
| 6 | 本地隐私 | How/FAQ：浏览器内计算、不上传 |
| 7 | 多语言 | 上线 10 语人工审核 |
| 8 | 数值示例 | Example：固定双文本 → 变更摘要 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（PR 写明）**：① ② ⑥ ⑧ ⑨（+③ 场景）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/文本 · 方向 A · P0/P1 可排 |
| 场景与行业 | 开发者配置核对；AI Prompt 迭代；文案/译稿校对 |
| 技术（包、Tier、本地处理） | `diff`（jsdiff）；Tier 1 动态 import；纯客户端；可选后续 Worker |
| Title (en) | `Online Text Diff Checker — Compare Two Texts \| Online Free Tools` |
| Description 要点（步骤/公式 + 示例；≥120 字落地时再写满） | Paste left/right → choose line/word/char diff → highlight adds/deletes；example: change one word and see word-level hunk；runs locally in browser |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 1) 行级和词级有何区别？ 2) 会上传我的文本吗？ 3) 为什么只有换行不同却整行标红？ 4)（可选）能 Diff 二进制/图片吗？（否，纯文本） |
| Disclaimer / References | 非 YMYL；References：jsdiff、Wikipedia Diff |
| related | `markdown-to-html`, `website-headers` |
| 验收 | `npm run lint:seo`；人工抽 zh/en；UI 高亮与 Example 文案一致 |
| 工期粗估 | ~1d（交互 + en 文案）+ 0.5–1d（10 语） |

## 交互规格（给实现用）

- 输入：左侧 Text A、右侧 Text B（textarea）；模式开关：Lines / Words / Chars；可选 Ignore whitespace；可选规范化换行（CRLF→LF）
- 输出：并排或统一视图高亮（绿增 / 红删）；摘要：added / removed / unchanged 行（或词）计数；一键交换 A/B；一键清空
- 核心规则 / 算法：使用 `diff` 包对应 API（如 `diffLines` / `diffWords` / `diffChars`）；忽略空白时走库的 ignoreWhitespace 或预处理
- 失败与边界行为：两侧空 → 提示输入；超软上限 → 警告仍可尝试；完全相同 → 「No differences」
- 示例 Input → Output：  
  - A: `Hello world` / B: `Hello there` → word mode：`world`→`there` 一处替换  
  - A: `a\nb\nc` / B: `a\nB\nc` → line mode：第 2 行变更

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）— 本工具非 YMYL，可不做；隐私声明放 FAQ/How 即可
