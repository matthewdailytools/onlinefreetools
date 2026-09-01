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
| Title (en) | **Check difference between two texts**（Planner 原句；`<title>` 同句，layout 再拼 `\| Brand`。禁止破折号营销后缀） |
| Description | ≥120；步骤（粘贴→选方式→高亮）+ 示例；次长尾 compare two texts online / diff checker 进 desc/FAQ；十语检索向 |
| Schema | WebApplication + BreadcrumbList |
| FAQ（≥3） | 行 vs 词；文本是否上传（含 CDN 说明）；换行标红；能否比图片/Word/二进制；与 diff checker 是否同一作业 |
| Disclaimer / References | 非 YMYL；jsdiff、Wikipedia Diff |
| related | 簇内互链：文件/Word/JSON/Excel 页上线后写入；过渡期可保留 `markdown-to-html` / `yaml-json` |
| 验收 | `lint:seo`；`03` ≥3 轮；`README.md` 工具清单已含本工具；UI 高亮与 Example 一致 |
| 工期粗估 | （已实现）交互 + 十语检索向 + 规则对齐优化 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `text-diff` 与 `/tools/text-diff`（已收录 path；不改成 check-difference-between-two-texts） |
| 主检索词 → title/H1 | Planner 原句 **Check difference between two texts**（大小写可句首；不加 “— Text Diff Checker”） |
| 次要关键词 → desc / FAQ / Use cases | compare two texts online → description；diff checker / text compare online → FAQ 别称；string/paragraphs/code as text → Use cases；txt/Word/JSON/Excel → FAQ 有意不满足并划界 |
| 用户搜索习惯判断 | 搜 check difference between two texts / compare two texts / diff checker；H1 跟紧更细任务句，短头词只进 FAQ |
| 优化摘要 | 2026-09-01：H1 从营销后缀改为 Planner 长尾原句；次长尾进 desc/FAQ；文件类作业划出本页 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [ ] 不适用
- [x] 已引用分析路径：`docs/seo/keywords/text-compare/2026-09-01-text-compare-topic.md`（CSV：Compare-Text / text-diff Planner）

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| check difference between two texts | build 主词 | H1 | 粘贴 A/B → 高亮 | |
| compare two texts online | absorb | desc | 同上粘贴作业 | 前排 title 已写该短句，不进 H1 |
| diff checker / text compare online | absorb | FAQ 别称 | 同上 | 头词不进攻 H1 |
| string compare / paragraphs / code as text | absorb | Use cases | 字符/词/行模式 | 同粘贴作业不拆 URL |
| compare two text files / Word / JSON / Excel | 有意不满足 | FAQ 划界 | 不提供文件选择器 | 对象不同，各有独立页 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：进页双栏已预填并自动跑出差异；有意不满足文件/Word/JSON/Excel |
| 主词搜索者任务 | 把两段纯文本贴进去，看出增删改在哪 |
| Ads/Planner 长尾任务 | check difference 能办成；compare two texts / diff checker 同作业；文件类 FAQ 划界 |
| 满足之处 | 预填样例 + runDiff；行/词/字符；CRLF 开关 |
| 超出 / 应划边界 | 首屏不要文件选择器；desc 不写 SEO 自述 |
| 缺口与已做优化 | H1 改为长尾原句；FAQ 写清与文件/Word 页分工 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

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
