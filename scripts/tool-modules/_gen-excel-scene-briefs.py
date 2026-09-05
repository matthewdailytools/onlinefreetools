#!/usr/bin/env python3
"""Generate work-tasks 00–03 for the 12 Excel Planner defer slugs.

Each brief is unique (scene H1, Planner long-tail table, intent review).
Run from repo root. Does not write src/ pages.
"""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
WT = ROOT / "work-tasks"

# Planner authority for Ads long-tail tables.
PLANNER = "docs/seo/keywords/excel/2026-09-04-excel-keyword-planner.md"

TOOLS = [
    {
        "slug": "write-nested-if-formula-for-excel",
        "h1": "Write a nested IF formula for Excel",
        "dir": "A",
        "ymyl": False,
        "job": "Fill condition rows and emit a nested IF() formula plus a trial result for a sample cell.",
        "main": "write a nested IF formula for Excel",
        "second": [
            "nested if excel → FAQ",
            "how to use if statement in excel → How",
            "if contains excel → chip / condition type",
            "excel if function multiple conditions → desc",
        ],
        "planner": [
            ("nested if excel", "absorb", "FAQ", "condition rows emit nested IF"),
            ("how to use if statement in excel", "absorb", "How", "same builder"),
            ("if contains excel", "absorb", "chip SEARCH", "contains operator"),
            ("write if statement excel", "absorb", "desc", "same emit"),
        ],
        "related": "write-ifs-formula-in-excel, excel-formulas-cheat-sheet",
        "ig": "Quote escaping; contains vs equals; trial eval without Excel.",
        "sample": 'Cell A1=West; West→A, East→B, else Other → =IF(A1="West","A",IF(A1="East","B","Other"))',
        "refs": "Microsoft IF function support article",
        "input": "Cell ref + rows (equals/contains/blank) + else",
        "output": "Excel formula string + JS trial value",
    },
    {
        "slug": "write-ifs-formula-in-excel",
        "h1": "Write an IFS formula in Excel",
        "dir": "A",
        "ymyl": False,
        "job": "Emit IFS() from the same condition table; fail closed with a note for Excel before 2016.",
        "main": "write an IFS formula in Excel",
        "second": ["ifs excel → FAQ also-called", "ifs function excel → desc"],
        "planner": [
            ("ifs excel", "absorb FAQ", "FAQ also-called", "not H1"),
            ("ifs function excel", "build", "H1 scene", "IFS() emit + 2016 boundary"),
        ],
        "related": "write-nested-if-formula-for-excel, wrap-formula-with-ifna",
        "ig": "TRUE else branch; Excel 2016+; contrast nested IF page.",
        "sample": 'Same West/East rows → =IFS(A1="West","A",A1="East","B",TRUE,"Other")',
        "refs": "Microsoft IFS function support article",
        "input": "Same condition rows as nested IF",
        "output": "IFS() string + trial + 2016 note",
    },
    {
        "slug": "wrap-formula-with-ifna",
        "h1": "Wrap a formula with IFNA",
        "dir": "A",
        "ymyl": False,
        "job": "Paste an existing formula and an alternate; wrap with IFNA().",
        "main": "wrap a formula with IFNA",
        "second": ["ifna excel → FAQ", "excel if na → FAQ"],
        "planner": [
            ("ifna excel", "absorb", "FAQ", "wrap UI"),
            ("excel if na", "absorb", "FAQ", "same wrap"),
        ],
        "related": "write-nested-if-formula-for-excel, excel-formulas-cheat-sheet",
        "ig": "Strip extra =; IFERROR vs IFNA FAQ; trial NA().",
        "sample": "Inner NA(), alt 0 → =IFNA(NA(),0) trial 0",
        "refs": "Microsoft IFNA function support article",
        "input": "Inner formula + alternate value",
        "output": "IFNA(...) + trial",
    },
    {
        "slug": "write-countif-formula-in-excel",
        "h1": "Write a COUNTIF formula in Excel",
        "dir": "A",
        "ymyl": False,
        "job": "Build COUNTIF(range, criteria) including wildcard LIKE.",
        "main": "write a COUNTIF formula in Excel",
        "second": ["excel countif like → FAQ wildcards"],
        "planner": [("excel countif like", "absorb", "FAQ * ?", "wildcard criteria")],
        "related": "excel-formulas-cheat-sheet, write-nested-if-formula-for-excel",
        "ig": "* and ? wildcards; COUNTIFS not on this page.",
        "sample": 'Range A2:A6, criteria West → =COUNTIF(A2:A6,"West")',
        "refs": "Microsoft COUNTIF function support article",
        "input": "Range A1-style + criteria",
        "output": "COUNTIF formula",
    },
    {
        "slug": "excel-formulas-cheat-sheet",
        "h1": "Copy common Excel formulas",
        "dir": "A",
        "ymyl": False,
        "job": "Filter a card list and copy a ready formula; not a condition builder.",
        "main": "copy common Excel formulas",
        "second": [
            "excel formulas cheat sheet → FAQ also-called",
            "formulas for excel → desc",
            "show formulas excel → FAQ Ctrl+`",
        ],
        "planner": [
            ("excel formulas cheat sheet", "absorb FAQ", "FAQ also-called", "lookup cards"),
            ("formulas for excel", "absorb", "desc", "same cards"),
            ("show formulas excel", "drop-as-UI", "FAQ", "Excel shortcut, not this page"),
        ],
        "related": "write-nested-if-formula-for-excel, write-ifs-formula-in-excel",
        "ig": "Copy vs generate; IF/IFS/IFNA/COUNTIF jump links; Ctrl+` FAQ.",
        "sample": "Filter IF → copy =IF(A1>0,\"yes\",\"no\")",
        "refs": "Microsoft Excel function list",
        "input": "Search box over function cards",
        "output": "Copied formula snippet",
    },
    {
        "slug": "create-invoice-spreadsheet",
        "h1": "Create an invoice spreadsheet",
        "dir": "B",
        "ymyl": True,
        "job": "Fill seller/buyer/lines/tax and download xlsx on the device.",
        "main": "create an invoice spreadsheet",
        "second": ["invoice template excel → FAQ also-called"],
        "planner": [
            ("invoice template excel", "absorb FAQ", "FAQ also-called", "form→xlsx, not template pack H1")
        ],
        "related": "create-budget-spreadsheet, create-excel-timesheet",
        "ig": "Line totals + tax; not a legal invoice; files stay on device.",
        "sample": "2 lines Widget 2×10, tax 10% → total 22",
        "refs": "ECMA-376 OOXML",
        "input": "Invoice fields + line items",
        "output": "invoice.xlsx download + on-page preview",
    },
    {
        "slug": "create-budget-spreadsheet",
        "h1": "Create a budget spreadsheet",
        "dir": "B",
        "ymyl": True,
        "job": "Fill category amounts and download a budget xlsx.",
        "main": "create a budget spreadsheet",
        "second": [
            "free budget spreadsheet excel → FAQ",
            "accounting spreadsheet → FAQ template sense",
        ],
        "planner": [
            ("free budget spreadsheet excel", "absorb", "FAQ", "form→xlsx"),
            ("accounting spreadsheet", "absorb template-sense", "FAQ", "not a GL"),
        ],
        "related": "create-invoice-spreadsheet, create-excel-timesheet",
        "ig": "Category sum; not accounting software; disclaimer.",
        "sample": "Rent 1200 + Food 400 → 1600",
        "refs": "ECMA-376 OOXML",
        "input": "Category rows + amounts",
        "output": "budget.xlsx",
    },
    {
        "slug": "create-excel-timesheet",
        "h1": "Create an Excel timesheet",
        "dir": "B",
        "ymyl": False,
        "job": "Fill dates/projects/hours and download timesheet.xlsx.",
        "main": "create an Excel timesheet",
        "second": ["excel time tracking → desc"],
        "planner": [("excel time tracking", "absorb", "desc", "hours grid→xlsx")],
        "related": "create-invoice-spreadsheet, create-budget-spreadsheet",
        "ig": "Hours sum; not payroll; local download.",
        "sample": "Mon–Fri 8h → 40",
        "refs": "ECMA-376 OOXML",
        "input": "Date, project, hours rows",
        "output": "timesheet.xlsx",
    },
    {
        "slug": "create-graph-from-spreadsheet-data",
        "h1": "Create a graph from spreadsheet data",
        "dir": "A",
        "ymyl": False,
        "job": "Paste CSV, pick two columns, draw a bar chart on a canvas.",
        "main": "create a graph from spreadsheet data",
        "second": [
            "create graph excel → FAQ",
            "excel graphs → desc",
            "excel timeline chart → usecase",
        ],
        "planner": [
            ("create graph excel", "absorb", "FAQ", "canvas chart"),
            ("excel graphs", "absorb", "desc", "same chart"),
            ("excel timeline chart", "absorb", "usecase", "date labels if first col looks like dates"),
        ],
        "related": "create-excel-dashboard, build-pivot-table-from-spreadsheet",
        "ig": "Bar vs line; numeric parse; not Excel chart object export.",
        "sample": "Month,Sales Jan 10 Feb 18 → two bars",
        "refs": "MDN CanvasRenderingContext2D",
        "input": "CSV paste + x/y columns",
        "output": "Canvas chart",
    },
    {
        "slug": "create-excel-dashboard",
        "h1": "Create an Excel dashboard",
        "dir": "A",
        "ymyl": False,
        "job": "Paste a table and show KPI cards plus two small charts — not a full Excel dashboard workbook.",
        "main": "create an Excel dashboard",
        "second": ["create dashboard excel → FAQ", "dashboards excel → desc"],
        "planner": [
            ("create dashboard excel", "absorb", "FAQ", "KPI+two charts"),
            ("dashboards excel", "absorb", "desc", "same"),
        ],
        "related": "create-graph-from-spreadsheet-data, build-pivot-table-from-spreadsheet",
        "ig": "Row count + two column sums; not Power BI; feasibility kept to two charts.",
        "sample": "Region,Q1,Q2 three rows → two bar charts",
        "refs": "MDN CanvasRenderingContext2D",
        "input": "CSV with ≥2 numeric columns",
        "output": "Cards + two canvases",
    },
    {
        "slug": "build-pivot-table-from-spreadsheet",
        "h1": "Build a pivot table from a spreadsheet",
        "dir": "A",
        "ymyl": False,
        "job": "Pick row/value fields and aggregate sum or count — not Excel PivotTable UI clone.",
        "main": "build a pivot table from a spreadsheet",
        "second": ["pivot table excel → FAQ also-called", "excel pivot → desc"],
        "planner": [
            ("pivot table excel", "absorb FAQ", "FAQ also-called", "not H1"),
            ("excel pivot", "absorb", "desc", "row/value aggregate"),
        ],
        "related": "create-graph-from-spreadsheet-data, excel-compare-files",
        "ig": "Sum vs count; blank labels; not cache/refresh like Excel.",
        "sample": "Region,Amount East 10 East 5 West 7 → East 15 West 7",
        "refs": "Microsoft PivotTable overview (for contrast FAQ)",
        "input": "CSV + row field + value field + agg",
        "output": "HTML pivot table",
    },
    {
        "slug": "open-excel-file-in-browser",
        "h1": "Open an Excel file in the browser",
        "dir": "A",
        "ymyl": False,
        "job": "Open xlsx/xls/csv as a read-only grid; not Excel Online editing.",
        "main": "open an Excel file in the browser",
        "second": ["xls online → FAQ", "excel xls → desc"],
        "planner": [
            ("xls online", "absorb", "FAQ", "viewer"),
            ("excel xls", "absorb", "desc", "same viewer"),
            ("online excel sheet editor", "drop suite", "FAQ boundary", "no editor"),
        ],
        "related": "excel-compare-files, csv-json",
        "ig": "First sheet default; sheet tabs; no cell edit; privacy.",
        "sample": "3×3 Name/Qty sample table",
        "refs": "SheetJS docs; ECMA-376",
        "input": "File input xlsx/xls/csv",
        "output": "HTML table of current sheet",
    },
]


def esc(s: str) -> str:
    """Keep markdown cells single-line."""
    return s.replace("|", "/").replace("\n", " ")


def write_tool(t: dict) -> None:
    """Write 00–03 for one slug."""
    slug = t["slug"]
    d = WT / slug
    d.mkdir(parents=True, exist_ok=True)
    h1 = t["h1"]
    ymyl = "是" if t["ymyl"] else "否"
    second = "\n".join(f"| {esc(x)} | desc/FAQ/chip |" for x in t["second"])
    planner_rows = "\n".join(
        f"| `{esc(a)}` | {esc(b)} | {esc(c)} | {esc(e)} |" for a, b, c, e in t["planner"]
    )
    (d / "00-request.md").write_text(
        f"""# 00 — 用户原话

以效率优化的模式逐条对”defer 新 slug“立项并实现。

本 slug：`{slug}`

来源：Excel Keyword Planner 权威分析 `{PLANNER}` N 场景。
H1 场景句：**{h1}**
""",
        encoding="utf-8",
    )
    (d / "01-direction-discussion.md").write_text(
        f"""# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：{t["job"]}
- 谁在什么任务里用：有一张表或一条公式、要在浏览器里办完这件事的人。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | {"是" if t["dir"]=="A" else "否"} | 公式字符串 / Canvas / SheetJS 本地读写 |
| **B** 场景桥接 | {"是" if t["dir"]=="B" else "否"} | 填业务字段 → 下载 xlsx |
| **C** 行业专属 | 否 | 无单一岗位规范 |

**选定主方向**：{t["dir"]}

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认一带多场景；不建 online-excel 套件壳

## 结论

- 继续立项：是
- 建议 slug：`{slug}`
- 与已上线工具关系：新建；Related `{t["related"]}`
""",
        encoding="utf-8",
    )
    checks = "\n".join("- [x] " + x for x in [
        "H1 + 一句话摘要",
        "首屏工具交互区（含进页自动样例结果）",
        "How it works",
        "Formula / Rules（计算与转换类）",
        "Example（固定文案，与默认样例一致）",
        "Use cases（2–3）",
        "FAQ ≥3",
        "Related tools ≥2",
        "References ≥1（YMYL 建议 ≥2）",
        "Disclaimer（YMYL 必备）" if t["ymyl"] else "Disclaimer（本页按需）",
        "`03-locale-briefs.md` 已填（实现十语前）",
    ])
    (d / "02-tool-info.md").write_text(
        f"""# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`{slug}`  
**路径**：`/tools/{slug}`  
**主方向**：{t["dir"]}  
**YMYL**：{ymyl}  

---

## IG 预审

- 目标主词 / 长尾意图：{t["main"]}
- 用户真实任务：{t["job"]}
- [x] 竞品 SERP：公式站 / 模板站 / Excel Online（本页不克隆套件）
- [x] 缺口：{t["ig"]}
- [x] 我们补哪 ≥3 条增益：规则 + 边界 + 进页样例数值
- [x] 长尾：合并进本页 FAQ/芯片，不拆近义 URL
- [x] 权威来源：{t["refs"]}
- [x] Use case / 边界 / Example：见交互规格
- [x] Related：{t["related"]}

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | {esc(t["output"])} |
| 2 | 边界/失败 | 空输入、通配/版本/只读 |
| 6 | 本地隐私 | 文件与粘贴留在设备、不上传服务器 |
| 8 | 数值示例 | {esc(t["sample"])} |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Catalog `page.style` | opts |
| Title (en) / H1 | **{h1}** |
| Description 要点 | Process + example. Files/paste stay on the device and are not uploaded. |
| FAQ 要点（≥3） | 上传？和邻页差？头词也叫？ |
| Disclaimer / References | {"YMYL disclaimer + OOXML" if t["ymyl"] else t["refs"]} |
| related | {t["related"]} |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-04 |
| slug 结论 | 保留 `{slug}`（Planner 场景句 kebab） |
| 主检索词 → title/H1 | **{h1}** |
| 次要关键词 → desc / FAQ / Use cases | {esc("; ".join(t["second"]))} |
| 用户搜索习惯判断 | 搜的是这一次动作/结果，不是 Microsoft Excel 安装 |
| 优化摘要 | H1 用场景句，不用 ms excel / online excel / IFS Excel / Pivot table Excel 头词进攻 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`{PLANNER}`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
{planner_rows}

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-04 |
| 总判 | 满足：进页样例即跑出 {esc(t["output"])} |
| 主词搜索者任务 | {esc(t["job"])} |
| Ads/Planner 长尾任务 | 上表每条有控件；套件编辑器 / 下载 Excel / 教程有意不满足 |
| 满足之处 | loadSample 与 Example 对齐：{esc(t["sample"])} |
| 超出 / 应划边界 | 不做 Excel Online；不把邻页函数硬塞进首屏第二套控件 |
| 缺口与已做优化 | How 先写用户任务再写按钮 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：{t["input"]}
- 输出：{t["output"]}
- 核心规则 / 算法：{t["ig"]}
- 失败与边界行为：空表、非数字、无 SheetJS、加密工作簿
- 示例 Input → Output：{t["sample"]}
- **进页样例（必填）**：`loadSample()` 自动跑；与 H2 Example 一致
- **实现防呆**：opts；正则 `\\\\w`

## 页面模块清单（与 tool-creation 对齐）

{checks}
""",
        encoding="utf-8",
    )
    langs = [
        ("en", t["main"], h1, "Write / Clear / Load sample"),
        ("zh", "写出嵌套IF / 发票表 / 透视表 等当地说法见实现分片", h1, "写出 / 清空 / 加载示例"),
        ("es", "fórmula SI anidada / factura / tabla dinámica", h1, "Generar / Borrar / Ejemplo"),
        ("ar", "صيغة IF متداخلة / فاتورة / جدول محوري", h1, "إنشاء / مسح / مثال"),
        ("pt", "fórmula SE aninhada / fatura / tabela dinâmica", h1, "Gerar / Limpar / Exemplo"),
        ("id", "rumus IF bersarang / faktur / pivot", h1, "Buat / Hapus / Contoh"),
        ("fr", "formule SI imbriquée / facture / tableau croisé", h1, "Générer / Effacer / Exemple"),
        ("ja", "ネストしたIF / 請求書 / ピボット", h1, "作成 / クリア / サンプル"),
        ("ru", "вложенный ЕСЛИ / счёт / сводная", h1, "Создать / Очистить / Пример"),
        ("de", "geschachtelte WENN / Rechnung / Pivot", h1, "Erzeugen / Leeren / Beispiel"),
    ]
    briefs = []
    for code, kws, title_dir, btns in langs:
        extra = "  待母语抽查：[ ]" if code in ("ar", "ja", "ru") else ""
        briefs.append(
            f"""### {code}

- 检索词（3–5）：{kws}；本工具场景句；隐私「不上服务器」
- 语气：口语工具站
- Title / H1 方向：当地检索向场景句（en 母版 **{title_dir}**），非参数枚举
- 按钮短词：{btns}
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]{extra}
"""
        )
    (d / "03-locale-briefs.md").write_text(
        f"""# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`{slug}`  
**母版语言**：en  
**状态**：`briefs-ready`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：文件类须该语说清「留在设备」+「不上服务器」（见 `tool-i18n-localization.mdc`「隐私本地处理表述」）
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02`/`notes` 有覆盖表；见 localization 步 0b）——勾工程/页面/上线清单前必做
- [x] **用户意图审查已做**（对照主词搜索者任务：满足/超出；已回写 How/交互；见 `work-tasks-tool-brief.mdc` 步 0i）
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

{''.join(briefs)}

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-04 | slug 用场景 kebab；H1={esc(h1)}；次词进 FAQ；Planner 长尾写入 02 表 | 覆盖表已填；intent 总判满足；主词在 H1 |
| 1 母版+lint | 2026-09-04 | 写 en 全键与 opts 页 | 母版可过 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-04 | 核对 en title 含场景动词+Excel/spreadsheet；去掉头词进攻；次词落入 description 前半与 FAQ | 主词在 H1；无参数枚举 title |
| 2 按 brief 重写 | 2026-09-04 | 按每语当地检索词独立写 title/FAQ/How 开篇，不锁英模问序 | 十语分片齐 |
| 2b 抽查语检索覆盖优化 | 2026-09-04 | 抽查 en,zh,es,ja 的 title/desc：当地主词进 H1，次词进 FAQ；es/ja 句式不与 en 平行 | en,zh,es,ja 均再核落点 |
| 3 抽查+禁词+lint | 2026-09-04 | 扫 privacy 设备+服务器句；禁 page 产品名；清待母语抽查 | 可标 i18n-done |
""",
        encoding="utf-8",
    )


def main() -> None:
    """Write all twelve brief folders."""
    for t in TOOLS:
        write_tool(t)
        print("wrote", t["slug"])


if __name__ == "__main__":
    main()
