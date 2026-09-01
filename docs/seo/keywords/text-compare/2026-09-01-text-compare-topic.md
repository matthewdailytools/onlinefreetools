# text-compare topic — 长尾 H1 与分场景 URL

- date: **2026-09-01 16:40**
- 词表：[Compare-Text Planner](../Compare-Text/Keyword%20Planner%2009-01-2026%20at%2002-27-45.csv) · [text-diff Planner](../text-diff/Keyword%20Planner%2009-01-2026%20at%2002-24-42.csv)
- SERP：[../text-diff/2026-09-01-compare-text-scene-serp.md](../text-diff/2026-09-01-compare-text-scene-serp.md)
- 旧分析（已被本文件取代「0 build」结论）：[../text-diff/2026-09-01-compare-text-scene-slugs.md](../text-diff/2026-09-01-compare-text-scene-slugs.md)
- 规则：§3.3 H 场景任务句；§3.3 G title 缺口优先；禁 doorway；H1 = Planner 长尾**原句**（禁营销后缀）
- **不建**自定义 hub `/text-compare`；站点正式主题页为 **`/topics/text-compare`**（五工具 `primaryTopic: text-compare`）

> 用户点名：保留 `/tools/text-diff` 优化 H1/长尾；其它**操作对象不同**的场景各一页；进页即该场景、少点控件。

---

## 0. Title 硬规则

| 要 | 不要 |
|---|---|
| H1 = 选用长尾原句（对象 + 看出什么） | `text compare` / `diff checker` / `JSON Diff Checker` 头词进攻 |
| `<title>` 同句，layout 再拼 `\| Brand` | `长尾 — Text Diff Checker` 卖点后缀 |
| 他语当地等价长尾 | 英模直搬十语 |

---

## 1. 独立 URL（本批实现 1 收割 + 4 新建）

| 场景 | 不用 | H1 | slug / path | 进页默认 |
|---|---|---|---|---|
| 粘贴两段纯文本看差 | `compare two texts online`（title 已占） | **Check difference between two texts** | 保持 `text-diff` `/tools/text-diff` | 双栏粘贴 + 样例已跑 |
| 选两个 .txt | `file diff` | **Compare two text files online** | `compare-two-text-files-online` | 两个文件选择器，选完对比 |
| 两份 Word 看改了什么 | `word compare`；泛 documents（混 PDF） | **Compare two Word documents for differences** | `compare-two-word-documents-for-differences` | 两个 .docx，抽文本再 diff |
| 两份 JSON 语义差 | `json diff checker` 头词 | **JSON diff checker online** | `json-diff-checker-online` | 两块 JSON，默认忽略键序 |
| 两份表对格子 | `excel compare` 光杆 | **Excel compare files** | `excel-compare-files` | 两个 xlsx/csv，默认第一张表 |

**不拆 URL**（同作业、只换视图/粒度）：side by side、string compare、compare two paragraphs、code/sql 当文本、yaml/xml **当行文本**。

**P2**（只记表，本批不实现 Page）：`yaml-diff-online` H1=YAML diff online；`xml-diff-checker` H1=XML diff checker。`list comparison tool` 不当 H1。

---

## 2. 每页 IG + 长尾归属

### 2.1 `text-diff` — Check difference between two texts

**IG（≥3）**

| # | 维度 | 本页 |
|---|---|---|
| 1 | 规则 | 行 / 词 / 字符何时误报整行 |
| 2 | 边界 | 空、全同、仅 CRLF、>100k |
| 6 | 隐私 | 粘贴不上传；可 CDN 载 jsdiff |

**长尾**

| 词 | 归属 | 落点 | 功能 |
|---|---|---|---|
| check difference between two texts | 主词 | H1 | 粘贴 A/B → 高亮 |
| compare two texts online | absorb | desc | 同上 |
| diff checker / text compare online | absorb | FAQ 别称 | 同上 |
| string compare / paragraphs / code as text | absorb | Use cases | 字符/词/行模式 |
| compare two text files / Word / JSON / Excel | 有意不满足 | FAQ 链到对应页 | 不在本页做文件/docx/树/格子 |

### 2.2 `compare-two-text-files-online`

**IG**

| # | 维度 | 本页 |
|---|---|---|
| 1 | 规则 | 按行 diff；UTF-8 默认 |
| 2 | 边界 | 非文本/空文件/过大/BOM |
| 4 | 对照 | 与粘贴页分工：本页无首屏大粘贴框 |

**长尾**

| 词 | 归属 | 落点 | 功能 |
|---|---|---|---|
| compare two text files online | 主词 | H1 | 两文件 → 对比 |
| compare two text files / text file compare | absorb | desc | 同上 |
| txt compare / file diff online | absorb | FAQ | 同上 |
| compare two files（泛） | 有意不满足 | FAQ：Word/Excel 另页 | 只 .txt/.text |

### 2.3 `compare-two-word-documents-for-differences`

**IG**

| # | 维度 | 本页 |
|---|---|---|
| 1 | 规则 | 抽可见段落文本再 diff，不是审阅窗格 |
| 2 | 边界 | 加密/损坏 docx、样式/页眉丢弃 |
| 4 | 对照 | vs Microsoft「比较文档」：无格式修订轨 |

**长尾**

| 词 | 归属 | 落点 | 功能 |
|---|---|---|---|
| compare two word documents for differences | 主词 | H1 | 两 docx → 文本差 |
| compare two word documents / word compare online | absorb | desc/FAQ | 同上 |
| compare two documents online | 有意不满足 | FAQ：混 PDF 去别的意图 | 本页只要 Word |

### 2.4 `json-diff-checker-online`

**IG**

| # | 维度 | 本页 |
|---|---|---|
| 1 | 规则 | 忽略键序的语义相等；路径级增删改 |
| 2 | 边界 | 非法 JSON、重复键、大数组 |
| 4 | 对照 | 数组作列表 vs 作集合 |

**长尾**

| 词 | 归属 | 落点 | 功能 |
|---|---|---|---|
| json diff checker online | 主词 | H1 | 两 JSON → 路径差 |
| json compare diff / json diff checker | absorb | desc/FAQ | 头词不进 H1 |
| yaml diff / xml diff | 有意不满足 | Related P2 / yaml-json | 本页不解析 YAML/XML |

### 2.5 `excel-compare-files`

**IG**

| # | 维度 | 本页 |
|---|---|---|
| 1 | 规则 | 按单元格坐标比对（A1…） |
| 2 | 边界 | 空格 vs 空单元格、类型数字/文本 |
| 4 | 对照 | 只比当前选中 sheet |

**长尾**

| 词 | 归属 | 落点 | 功能 |
|---|---|---|---|
| excel compare files | 主词 | H1 | 两表 → 格子高亮 |
| excel compare online | absorb | desc | online 不进 H1 |
| compare two csv / excel compare strings | absorb | FAQ/自动识别 csv | 字符串模式不另建 URL |

---

## 3. Related（簇内）

上线后互链：`text-diff` ↔ 文件页 ↔ Word ↔ JSON ↔ Excel；JSON 另链 `json-schema-validator`、`yaml-json`；Excel 另链 `csv-json`。未上线前收割页先链 yaml-json / json-schema-validator。

---

## 4. 实现顺序

1. 本文件 + `text-diff` H1 absorb  
2. `compare-two-text-files-online`  
3. `compare-two-word-documents-for-differences`  
4. `json-diff-checker-online`  
5. `excel-compare-files`  
6. P2 另决议
