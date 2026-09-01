# Compare-Text / text-diff — 使用场景 → slug 与 SEO 策略

- date: **2026-09-01 14:10**
- locale / gl: en / us（Keyword Planner + Bing SERP）
- 词表：[`../Compare-Text/Keyword Planner 09-01-2026 at 02-27-45.csv`](../Compare-Text/Keyword%20Planner%2009-01-2026%20at%2002-27-45.csv)（733 词）· [`Keyword Planner 09-01-2026 at 02-24-42.csv`](./Keyword%20Planner%2009-01-2026%20at%2002-24-42.csv)（491 词）
- 去重后 **983** 条唯一关键词；两表重叠集中在「粘贴两段文本看增删」
- SERP：[2026-09-01-compare-text-scene-serp.md](./2026-09-01-compare-text-scene-serp.md)（Bing intl ×15，`usable=yes`，无污染行）
- catalog：**已有** `/tools/text-diff`（粘贴双栏、行/词/字符）
- 权威：长尾策略 §3.3 / **§3.3 G** / **§3.3 H**；禁 doorway；一带多场景

> **结论先行（2026-09-01 14:10）**：当时建议 0 build。**已被取代**：用户 16:40 点名 [text-compare topic](../text-compare/2026-09-01-text-compare-topic.md) — 保留 `text-diff` 并改长尾 H1；文件 / Word / JSON / Excel 分场景建页。

---

## 0. 量级分桶（只筛选）

| 带 | Compare-Text | text-diff | 角色 |
| --- | --- | --- | --- |
| 1万–10万 | 2 | 4 | 头词种子：`text compare` / `text compare online` / `compare text online` / `diff checker` — **禁作进攻 H1** |
| 1,000–1万 | 16 | 13 | 须过 SERP；含 `json diff checker`、`string compare online`、`compare two files` |
| 100–1,000 | 102 | 85 | 场景长尾主观察带 |
| 10–100 | 520 | 355 | FAQ / 芯片；慎独立 URL |
| 0–10 | 93 | 34 | 微尾；默认不立项 |

Planner **广告组**是近义换词簇（Online / Free / Tool），**不是**使用场景。场景按下表「作业类型」切，不按广告组拆页。

---

## 1. 先剔除（drop）

| 类型 | 例 | 处理 |
| --- | --- | --- |
| 作文/教育 | `compare and contrast`、`comparison table example`、`comparison chart types` | drop；不是交互 diff |
| 品牌导航 | `diffchecker`、`text-compare.com`、`textcompare org`、`mergely` | drop |
| 桌面/IDE | `winmerge`、`vscode diff`、`notepad++ diff`、`sublime text compare`、`linux diff` | drop；FAQ 一句「浏览器粘贴即可」 |
| 库/API | `python difflib`、`numpy diff`、`pandas diff` | drop；文档意图 |
| 同形/噪声 | `overleaf text size`、`online text classification`、`correction for multiple comparisons`、`option compare text` | drop |
| 购买/软件评测 | `best document comparison software`、`text compare download` | drop |

---

## 2. 用户实际任务（§3.3 H）→ 作业类型

搜的人要办的是下面**某一件**；打开页应对准该件。平台/品牌不是拆 URL 的理由。

| 作业类型 | 情境 + 动作 + 结果 | 典型搜法（Planner） | 主控件是否已有 `text-diff` | URL 策略 |
| --- | --- | --- | --- | --- |
| **A. 粘贴两段纯文本** | 原文 vs 改稿（配置 / Prompt / 文案）→ 高亮增删 | `compare two texts online`（100–1k）；头词 `text compare online`（1万–10万） | 是：双栏粘贴 + 行/词/字符 | **唯一收割 URL**：现有 `text-diff` |
| **B. 打开两个 .txt** | 选两个文本文件 → 看行级差异 | `compare two text files`（100–1k） | 算法同 A；缺文件选择器 | **芯片 absorb**，不拆 URL |
| **C. 并排视图** | 同一对比，要左右对照而不是统一视图 | `compare texts side by side`（10–100） | 现页偏统一高亮 | **视图芯片**，不拆 URL |
| **D. 字符串/字符** | 比两条短 string / 大小写 / 逐字符 | `string compare online`（1k–10k） | 字符模式已覆盖 | absorb A |
| **E. 段落/句子校对** | 两段散文要看词级改动 | `compare two paragraphs`（10–100）；`check difference between two texts`（100–1k） | 词模式已覆盖 | absorb A（Use cases） |
| **F. 把代码当文本** | 两段源码/SQL 脚本看行 diff（非 AST） | `code diff online`（10–100）；`sql diff checker`（100–1k） | 行模式已覆盖 | absorb A；**不做**语义/三路 merge |
| **G. YAML/XML 当文本** | 配置文件当行对比（不解析树） | `yaml diff`（100–1k）；`xml diff`（100–1k） | 行模式可用 | absorb A FAQ；结构化另见 H |
| **H. JSON 结构化 diff** | 忽略键序、按路径标差异 | `json diff checker`（1k–10k） | **否**（当文本会误报键序） | 可独立意图；Bing **head** → **defer** |
| **I. Word .docx** | 上传两份 Word → 像「审阅-比较」 | `compare two word documents`（100–1k） | **否**（须解析 docx） | 可独立；Bing **mid_covered** → **defer** |
| **J. 泛「两个文档」** | Word/PDF/文本混搜 | `compare two documents online`（10–100） | 对象不清 | 不单独立项；Word→I，纯文本→A |
| **K. Excel / CSV 格子** | 两表按单元格/列对齐 | `excel compare online`（100–1k） | **否** | 可独立；Bing **head** → **defer** |
| **L. PDF 页比较** | 两份 PDF 抽文本或视觉差 | `pdf diff checker`（10–100） | **否** | 量薄 + 工具站已有 → defer |
| **M. 无序列表差集** | 两列名单求只在一侧出现的行 | `list comparison tool`（100–1k） | 可「忽略顺序」芯片 | absorb A，不拆 |
| **N. 二进制/三路 merge** | hex / 三文件合并 | `binary diff`、`diff merge online` | **否** | drop / defer |

**禁止**：`compare-text`、`text-diff-pack`、按 Free/Online/Tool 广告组拆第二 URL。

---

## 3. 头词 → 收割页（已有 slug，不占周进攻）

**触发**：`text compare` / `text compare online` / `diff checker` Bing 前 10 ≈ 全是 Diffchecker / text-compare.com / 换皮工具站 → `head`。

### 3.1 §3.3 G title_gap_fallback（人工）

| 候选长尾 | 量级 | 区别词 | 前排 title 是否已写区别词 | 缺口？ |
| --- | --- | --- | --- | --- |
| `compare two texts online` | 100–1k | `two texts` | 是（diffchecker.dev、comparetwotexts.net） | **弱**；现 H1 已用此句，保持 |
| `check difference between two texts` | 100–1k | `difference between` | 多写 find/compare differences，少写整句 | 弱；进 desc/FAQ |
| `compare two text files` | 100–1k | `text files` | 是（text-compare.com、diff.tools） | 否；芯片不改 H1 |
| `compare texts side by side` | 10–100 | `side by side` | 是（plainbench、difftext.io） | 否；视图芯片 |

**选用主词（已落地）**：`compare two texts online`  
**path**：保持 `/tools/text-diff`（已收录，**不改 slug**；slug 是历史品类名，H1 才是场景任务句）  
**H1**：Compare Two Texts Online（现 en title 已对齐）  
**verdict**：`absorb` + `competition_tier=head`；`gap_notes=harvest|seed=text compare online`  
**能力**：粘贴 A/B；行/词/字符；忽略空白；CRLF=LF。并入 B–G、M 芯片/FAQ。

---

## 4. 意图聚类 → 选词 / slug（权威表）

| 聚类 | 主选长尾（量级） | tier / 规则 | slug | H1 | verdict |
| --- | --- | --- | --- | --- | --- |
| 粘贴两段文本（头词收割） | `compare two texts online`（100–1k） | head；H1 已是场景句 | `text-diff` | Compare Two Texts Online | **absorb**（不占周） |
| 打开两个文本文件 | `compare two text files`（100–1k） | head；同作业 A | `text-diff` | （芯片） | absorb |
| 并排视图 | `compare texts side by side`（10–100） | head | `text-diff` | （芯片） | absorb |
| 字符串 | `string compare online`（1k–10k） | head | `text-diff` | 字符模式 | absorb |
| 段落校对 | `check difference between two texts`（100–1k） | head | `text-diff` | 词模式 Use case | absorb |
| 代码/SQL 当文本 | `code diff online` / `sql diff checker` | head（换皮工具多） | `text-diff` | 行模式 Use case | absorb；禁 AST/schema 页 |
| YAML/XML 当文本 | `yaml diff` / `xml diff` | head（yamldiff.com / CodeBeautify） | `text-diff` | FAQ 行模式 | absorb |
| JSON 结构化 | `json diff checker`（1k–10k） | head（jsondiff.com 等） | `json-diff-checker`（建议，未建） | JSON Diff Checker | **defer** |
| Word 文档 | `compare two word documents`（100–1k） | mid_covered（Microsoft 文档 + Draftable / compare2word） | `compare-two-word-documents`（建议，未建） | Compare two Word documents | **defer** |
| 泛文档 | `compare two documents online` | head（Draftable / iLovePDF / Copyleaks） | — | — | drop 独立 URL；分流 A/I |
| Excel | `excel compare online`（100–1k） | head（diffsheets 等） | `excel-compare-online`（建议，未建） | Excel compare online | **defer** |
| PDF | `pdf diff checker`（10–100） | 未单采；量薄 | — | — | defer |
| 列表差集 | `list comparison tool`（100–1k） | 未单采；近义 A | `text-diff` | 忽略顺序芯片 | absorb |
| 作文 contrast | `compare and contrast`（1k–10k） | 教育 | — | — | **drop** |

### 独立 URL 一览（最多 4；默认 absorb）

| 优先级 | slug | H1 | 并入（不另建） | ≥3 IG（若将来点名） | 周名额 |
| --- | --- | --- | --- | --- | --- |
| 收割 | `text-diff` | Compare Two Texts Online | 头词、.txt、并排、string、段落、代码/SQL 文本、YAML/XML 当行、列表差集 | 行/词/字符误判；CRLF；本地不上传（已有） | **不占周** |
| defer | `compare-two-word-documents` | Compare two Word documents | Word / docs / DOCX 近义 | 忽略格式 vs 保留修订；样式误报；纯文本粘贴降级 | 不进攻 |
| defer | `json-diff-checker` | JSON Diff Checker | json compare；YAML/XML **结构化**作芯片（同树 diff） | 键序忽略；数组作集合；路径级 | 不进攻 |
| defer | `excel-compare-online` | Excel compare online | csv/xlsx 近义 | 列对齐；类型/空单元格；多 sheet | 不进攻 |

YAML/XML **若**将来做结构化页：并入 `json-diff-checker` 芯片，**禁止** `yaml-diff` / `xml-diff` 第三、第四 URL。

---

## 5. 关键词归属（广告组 / 长尾 → slug）

只列归属规则与高量代表词；983 条不逐行入库（禁 scaled 堆词）。

### 5.1 → `text-diff`（absorb）

| 来源广告组（两表） | 归属关键词（代表） | 落点 |
| --- | --- | --- |
| Compare Text Online / Text Compare Online Tool / Free | `text compare online`、`compare text online`、`compare two texts online` | H1 已覆盖场景句；头词只收割 |
| Compare Text / Text Diff / Text Difference / Text Online | `text compare`、`text diff`、`text difference online`、`find differences in text` | desc / FAQ |
| Diff Checker / Online Diff Checker / Online Diff / Diff Check | `diff checker`、`diff checker online`、`online diff`、`text diff checker` | FAQ「也叫 diff checker」；**不**用品牌词当 H1 |
| Compare Two Text / Find Difference Text / Check Difference Text | `compare two texts`、`check difference between two texts` | Use cases 校对 |
| Compare File Online / Compare Text File / Diff File / Diff Two File | `compare two text files`、`compare text files online`、`txt compare` | 文件芯片 + FAQ |
| Side Side | `compare text side by side`、`compare documents side by side`（纯文本义） | 并排芯片 |
| Online Comparison / String 相关组 | `string compare online`、`text comparison online` | 字符模式 |
| Diff（代码/SQL 当文本的那些） | `code diff online`、`sql diff checker`、`sql text compare` | 行模式 Use case |
| YAML/XML 当文本 | `yaml diff`、`xml diff` | FAQ：未解析树时用行模式；结构化见 defer JSON 页 |
| Keyword Like: comparetool / diffwizard（非品牌站名） | `comparetext`、`textdiff`、`onlinediff`、`string difference checker` | 近义，不进 H1 |

### 5.2 → defer 候选 slug（未建）

| 建议 slug | Planner 代表词 | 不进现页 H1 的原因 |
| --- | --- | --- |
| `compare-two-word-documents` | `compare two word documents`、`word compare online`、`compare word documents`、Compare Word / Compare Two Word Document 组 | 须 .docx 解析；Microsoft + Draftable 已占 |
| `json-diff-checker` | `json diff checker`、`json compare diff`、`online json diff checker` | 键序/路径；jsondiff.com 等已占 |
| `excel-compare-online` | `excel compare online`、`excel compare files`、Excel Compare 组 | 格子对齐；专用表工具已占 |

泛文档组（Compare Document / Compare Two Document / Document Comparison Tool）：**不**整组并入 A。搜 Word 的进 defer Word；搜「任意两文件」的 SERP 是 Draftable/PDF，禁止用纯文本页抢 H1。

### 5.3 drop（不归属工具 H1）

Compare Contrast / Comparison Table / Comparison Chart 组；品牌域名词；IDE/WinMerge/VS Code；numpy/pandas/difflib；binary；作文 generator。

---

## 6. Bing SERP 人工复核（相对脚本草稿）

脚本 15/15 `usable=yes`、草稿多为 `head`；人工**维持**，并补充：

| 词 | 草稿 | 人工 | 说明 |
| --- | --- | --- | --- |
| `compare two texts online` 及粘贴近义 8 词 | head | **head** | Diffchecker 簇工具≈8–10；Related 指向 json/sql 是**邻接意图**不是本页 H1 |
| `compare two word documents` | mid_covered | **mid_covered** | 文档教程 + compare2word/Draftable；title 已含该长尾 → G 不触发 |
| `json diff checker` / `yaml diff` / `xml diff` | head | **head** | 语义 JSON/YAML 专用站；勿把换皮 text-diff 当缺口 |
| `sql diff checker` | head | **head** | 前排多为文本 diff 换皮 + Aiven 模式对比；无「缺工具」 |
| `excel compare online` | head | **head** | diffsheets / exceltool 密集 |
| `diff checker` | head | **head** | 品牌词；只 FAQ 消歧 |

**无** `long_gap` / `locale_gap`。Related 偶发空（CN 国际版常见），不据此标缺口。

---

## 7. 对已有 `text-diff` 的 SEO / 功能策略（absorb，不改 URL）

现页 en H1 已是场景句，**先不改 slug**。下一步只丰富，不立项：

1. **文案**：次词落入 FAQ/Use cases — `diff checker`、`compare two text files`、side-by-side、`string compare`、SQL/YAML **当文本**；明确「Word/PDF/Excel/语义 JSON 不在本页」。
2. **功能芯片（同一 URL）**：`.txt` 本地选择；可选并排视图；可选忽略行序（列表差集）。不要为芯片新建 path。
3. **内链**：`yaml-json`、`json-schema-validator`、`csv-json`（转换/校验 ≠ diff）；勿把校验页改成 diff。
4. **有意不满足**：docx / xlsx / 语义 JSON / 三路 merge / 抄袭检测（Copyleaks SERP）— FAQ 一句 + 不扩 H1。

---

## 8. 周产能

1. **本周 0 build**。  
2. 产能若做存量：只 absorb `text-diff` 文案/芯片。  
3. Word / JSON / Excel **须用户点名**才开 `work-tasks/`；点名后仍要重新跑覆盖门禁，且默认不进进攻队列（head/mid）。

未建 work-tasks。
