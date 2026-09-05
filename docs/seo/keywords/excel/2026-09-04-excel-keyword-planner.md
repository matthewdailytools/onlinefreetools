# Excel Keyword Planner — 归类与选词

- date: **2026-09-04 21:42**
- locale / gl: en / us（Google Keyword Planner 导出）
- source: [`Keyword Planner 09-04-2026 at 13-37-29.csv`](./Keyword%20Planner%2009-04-2026%20at%2013-37-29.csv)（**1162** 词；**63** 广告组）
- catalog：已有 `excel-compare-files`、`csv-json`（本批**无** compare / csv 转换搜法，不往这两页塞品牌词）
- 规则：[`../../keyword-planner-analysis-rules.md`](../../keyword-planner-analysis-rules.md) + 策略 **§3.3 H**
- SERP：**无** → 当时不得标 `long_gap`；**2026-09-04 22:00** 用户确认 12 条 defer slug 立项并实现（见 tracker）  
- **Catalog 2026-09-04 23:03**：用户要求下线 N9–N12（出图 / 看板 / 透视 / 浏览器打开）。站内保留公式与发票·预算·工时共 **8** 页。分析表仍记录原 defer 建议，不以删除改写归类史。

> **结论先行**  
> 1）本 CSV 的种子是 **Microsoft Excel 桌面软件 / Office 套件**，不是 PDF 那批的「文件作业」（合并、转换、填表）。约 **七成以上**是品牌导航、下载安装、教程课程、版本号、拼写残渣 → **drop**。  
> 2）拆页轴仍 = **用户这一次要办成的事**。本批能抽出的可交互作业只有：**写 IF/IFS/IFNA/COUNTIF 公式**、**公式速查**、**按场景生成 xlsx 模板**、**从表出图 / 透视**、**浏览器里打开表**。  
> 3）**禁** `online-excel` / `free-excel` / `excel-editor` / `spreadsheet-software` 壳页——那是 Excel Online / Google Sheets 级套件，本站不做克隆。头词只做 FAQ 分发。  
> 4）**本批 0 命中** 的文件作业（xlsx↔csv、合并工作簿、Excel→PDF、解锁、拆 sheet）**不臆造 slug**；建议另跑文件作业种子（§9）。  
> 5）已有 `excel-compare-files`：**不改 path**；本批无 compare 词，不把 `ms excel` 类词 absorb 进去。未实现场景一律 **defer**（须实现规格 + 场景 H1）；周 build **0**。

---

## 0. 本批拆页规则

| 可拆（独立 slug） | 不可拆（doorway） |
| --- | --- |
| 函数不同：嵌套 IF ≠ IFS ≠ IFNA ≠ COUNTIF | 只换 Free / Online / Microsoft / MS 前缀 |
| 产出物不同：发票 xlsx ≠ 预算表 ≠ 工时表 | invoice template ≈ excel invoice template |
| 浏览速查 ≠ 填条件生成公式 | formulas / functions / cheat sheet 近义进同一速查页 |
| 出一张图 ≠ 做透视汇总 ≠ 做多图看板 | create graph ≈ excel graphs ≈ charts excel |
| 只打开看 ≠ 在线编辑整本工作簿 | xls ≈ xlsx 同一查看器 |
| 已有页办不成这件事 | 品类头词再铺一页（online excel / spreadsheet software / excel tools） |

对照 PDF 批：那边 CSV **里面就有** merge / word to pdf；这边 CSV **没有** convert/merge。没有证据的作业不立项。

---

## 1. 量级分桶（只筛选）

| 带 | n | 角色 |
| --- | --- | --- |
| 10万–100万 | 2 | `ms excel`、`excel 2016` — 品牌/版本头词，禁进攻 H1 |
| 1万–10万 | 14 | `online excel`、`download excel`、`spreadsheets`、`excel 2010/2013/365`、`word excel`、拼写残渣 — 几乎全 drop |
| 1k–10k | 61 | 套件导航 + 少量作业：`invoice template excel`、`excel formulas cheat sheet`、`pivot table excel`、`ifs excel` |
| 100–1k | 235 | 场景长尾主观察（仍大量教程/技能词） |
| 10–100 / 0–10 | 704+146 | 微尾；公式/模板证据仍收录 |

粗筛（品牌/下载/教程/版本/明显拼写）掉约 **700** 条。剩余仍混有「excel skills / blog / guru」百科残渣。有作业句、可产品化的代表词约 **80**；下表只收这些。

---

## 2. 使用场景表（一意图一 slug）

### 2.1 已上线 — 本批 **无新搜法**（不 absorb 品牌词）

| ID | 使用场景 | Planner 证据 | 结论 |
| --- | --- | --- | --- |
| **A1** | 两份表按单元格对比 | **本批 0 词**（compare / diff / merge 均未出现） | 保持 `/tools/excel-compare-files`；H1 仍走 text-compare 主题的 **Excel compare files**；禁止把 `ms excel` / `online excel` 写进该页主词 |
| **A2** | CSV ↔ JSON | **本批 0 词** | 保持 `csv-json`；不把 spreadsheet 头词并进来 |

### 2.2 未实现 — 须独立 slug（defer；待 SERP 钉进攻词）

| ID | 使用场景（情境→动作→结果） | Planner 证据（量级） | 作业类型 | 为何不并进邻页 | 建议 slug | 建议 H1（场景句，待 SERP） | 主控件规格（摘要） |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **N1** | 多个条件 → 写出 **嵌套 IF** 公式 | `nested if excel`（100–1k）、`how to use if statement in excel`、`excel if statement multiple conditions`、`multiple if statements excel`、`write if statement excel`、`excel if function multiple conditions`、`if contains excel` | 公式生成 | ≠ IFS 函数名（N2）；≠ 速查浏览（N5） | `write-nested-if-formula-for-excel` | Write a nested IF formula for Excel | 条件行（等于/包含/空白）；预览公式；用样例格试算；老版 Excel 兼容 |
| **N2** | 多个条件 → 写出 **IFS** 公式 | `ifs excel`（1k–10k）、`ifs function excel`（100–1k） | 公式生成 | 输出语法是 `IFS()` 不是 `IF(IF())`；Excel 2019 / Microsoft 365+ 边界 | `write-ifs-formula-in-excel` | Write an IFS formula in Excel | 条件表→IFS()；永久版 Excel 2016 及更早版本改用 N1。**禁 H1=`IFS Excel`** |
| **N3** | 公式会 `#N/A` → 包一层 **IFNA** | `ifna excel`（100–1k）、`excel if na`（10–100） | 公式包装 | ≠ 多条件分支 | `wrap-formula-with-ifna` | Wrap a formula with IFNA | 粘贴已有公式 + 替代值 → `IFNA(...)` |
| **N4** | 区域里 **计数** 满足条件的格 | `excel countif like`（10–100） | 公式生成 | 弱证据仍覆盖；≠ IF 分支 | `write-countif-formula-in-excel` | Write a COUNTIF formula in Excel | range + criteria；LIKE/通配边界。后排 |
| **N5** | 查常用公式 → **复制走** | `excel formulas cheat sheet`（1k–10k）、`formulas for excel`、`show formulas excel`（UI 意图另 FAQ） | 速查 | 浏览≠生成；禁并进 N1 | `excel-formulas-cheat-sheet` | Copy common Excel formulas（cheat sheet 只进 FAQ「也叫」） | 可筛选函数卡 + 复制 + 迷你试算。**禁 H1 硬刚 cheat sheet 头词进攻** |
| **N6** | 填发票字段 → 下载 **xlsx** | `invoice template excel`（1k–10k） | 模板生成 | ≠ 通用 template 壳；≠ 预算/工时 | `create-invoice-spreadsheet` | Create an invoice spreadsheet | 表单（买卖方、行项目、税）→ 本地下载 xlsx。轻财务 disclaimer |
| **N7** | 填收支项 → 下载预算表 | `free budget spreadsheet excel`（10–100）、`accounting spreadsheet`（100–1k，模板意图） | 模板生成 | ≠ 发票 | `create-budget-spreadsheet` | Create a budget spreadsheet | 类别/月列 → xlsx |
| **N8** | 填工时 → 下载 timesheet | `excel time tracking`（100–1k） | 模板生成 | ≠ 预算 | `create-excel-timesheet` | Create an Excel timesheet | 日期/项目/小时 → xlsx |
| **N9** | 贴表格数据 → **出一张图** | `create graph excel`（100–1k）、`excel graphs`、`excel timeline chart`、`charts excel` | 可视化 | ≠ 透视（N11）；≠ 多图看板（N10） | `create-graph-from-spreadsheet-data` | Create a graph from spreadsheet data | 粘贴/CSV → 选列 → PNG 或带图 xlsx |
| **N10** | 多图汇总成 **看板** | `create dashboard excel`（100–1k）、`dashboards excel` | 多图布局 | 控件远重于 N9 | `create-excel-dashboard` | Create an Excel dashboard | 后排；可行性风险（多图+布局） |
| **N11** | 表数据 → **透视汇总** | `pivot table excel`（1k–10k）、`excel pivot`（100–1k） | 透视 | ≠ 出图；**禁 H1=`Pivot table Excel`** | `build-pivot-table-from-spreadsheet` | Build a pivot table from a spreadsheet | 上传/粘贴 → 行/列/值 → 预览表 |
| **N12** | 打开 xlsx **只看不改** | `xls online`（100–1k）、`excel xls`、`microsoft xls` | 预览 | ≠ Excel Online 编辑器（drop 壳）；≠ 对比页 | `open-excel-file-in-browser` | Open an Excel file in the browser | 本地渲染格子；无编辑控件。编辑意图 FAQ 划界 |

**N10** 浏览器落地重 → 词池 `feasibility` 标风险，仍保留独立 slug，避免并进 N9 万能出图页。

---

## 3. 每 URL 仅一条主打

| slug | 主打关键词 | 次词（同页 FAQ/芯片） | 禁止当本页 H1 |
| --- | --- | --- | --- |
| `excel-compare-files` | excel compare files（来自 text-compare 主题，非本 CSV） | — | ms excel / online excel |
| `write-nested-if-formula-for-excel` | write a nested IF formula for Excel | nested if excel、how to use if statement in excel、if contains excel、excel if function text、excel if 2 conditions | IF statement Excel 光杆教程头词 |
| `write-ifs-formula-in-excel` | write an IFS formula in Excel | ifs function excel；FAQ「也叫 ifs excel」 | IFS Excel |
| `wrap-formula-with-ifna` | wrap a formula with IFNA | ifna excel、excel if na | — |
| `write-countif-formula-in-excel` | write a COUNTIF formula in Excel | excel countif like | — |
| `excel-formulas-cheat-sheet` | copy common Excel formulas | excel formulas cheat sheet、formulas for excel、formulas and functions in excel | Excel formulas / cheat sheet 头词进攻 |
| `create-invoice-spreadsheet` | create an invoice spreadsheet | invoice template excel（FAQ 也叫） | invoice template excel 头词进攻 |
| `create-budget-spreadsheet` | create a budget spreadsheet | free budget spreadsheet excel、accounting spreadsheet（模板义） | free excel / template 壳 |
| `create-excel-timesheet` | create an Excel timesheet | excel time tracking | — |
| `create-graph-from-spreadsheet-data` | create a graph from spreadsheet data | excel graphs、excel timeline chart、charts excel、best excel charts（评测义 drop，出图义链此） | best excel charts |
| `create-excel-dashboard` | create an Excel dashboard | dashboards excel、excel reporting dashboard | — |
| `build-pivot-table-from-spreadsheet` | build a pivot table from a spreadsheet | excel pivot、pivot table tutorial（教程义 FAQ 划界） | Pivot table Excel |
| `open-excel-file-in-browser` | open an Excel file in the browser | xls online、excel xls | online excel / spreadsheet editor |

---

## 4. 头词 → 只分发，不立项壳页

| 查询 | 量级 | 处理 |
| --- | --- | --- |
| `ms excel` / `microsoft excel` / `excel 365` / `office 365 excel` / `msexcel` | 10万+ / 1k | **品牌导航** drop；不建 `/tools/excel` |
| `online excel` / `ms excel online` / `web excel` / `free online excel` / `use excel online free` | 1万+ / 1k | **FAQ 分发**：只看→N12；写 IF→N1；出图→N9。**不**建在线表格套件 |
| `online excel sheet editor` / `spreadsheet editor` / `excel sheet editor` | 100–1k / 10–100 | 套件级编辑器。划界：本站不做 Excel Online；打开看走 N12 |
| `download excel` / `install excel` / `microsoft excel free download` / `free excel` | 1万+ / 1k | 下载/安装 drop |
| `excel 2016` / `excel 2010` / `excel 2013` / `excel 2007` | 10万 / 1万 | 版本 drop |
| `excel formulas` / `formulas for excel` / `microsoft excel functions` | 100–1k | **FAQ 分发**：生成→N1/N2；速查→N5。**不**建 formula 教程站 |
| `excel template` / `templates for excel spreadsheets` | 100–1k | **FAQ 分发**：发票 N6 / 预算 N7 / 工时 N8。**不**建 template 库壳 |
| `spreadsheets` / `spreadsheet software` / `excel spreadsheet software` | 1万+ / 1k | 品类软件 drop |
| `pivot table excel` / `excel pivot table tutorial` | 1k | 教程义 drop；做表义 → N11（H1 不用头词） |
| `excel tips and tricks guide` / `excel tutorial beginners` / courses / training | 1万+ / 1k | 学习意图 drop |
| `word excel` / `docs excel` / `calc excel` / `google spreadsheets excel` | 1万+ / 1k / 100 | 套件/竞品对比 drop；Sheets 公式差异最多 N1/N5 一句 |
| `show formulas excel` | 100–1k | Excel 快捷键（Ctrl+`），不是网页工具；N5 FAQ 一句 |
| `excel test online` | 100–1k | 考证/测验 drop |
| `create excel sheet` | 10–100 | 下载空表 IG 过薄；N6–N8 FAQ「从空白开始」即可，不单独立页 |

`title_gap_fallback`：各新 slug 待 SERP 后再选是否用上表 H1。本批不预设 G 命中。

---

## 5. 关键词归属（作业词 → 唯一落点）

广告组不是拆页轴。下表只列**有作业**的代表词。

| 代表词 | 落点 slug | 位置 |
| --- | --- | --- |
| nested if excel / how to use if statement in excel / multiple if statements excel / write if statement excel / excel if function multiple conditions | `write-nested-if-formula-for-excel` | 主打 / FAQ |
| if contains excel / excel if function text / excel if 2 conditions / excel if condition / if then statements excel | 同上 | 芯片（条件类型：包含/文本/两条件） |
| ifs excel / ifs function excel | `write-ifs-formula-in-excel` | 主打；ifs excel 仅 FAQ「也叫」 |
| ifna excel / excel if na | `wrap-formula-with-ifna` | 主打 |
| excel countif like | `write-countif-formula-in-excel` | 主打 |
| excel formulas cheat sheet / formulas for excel / formulas and functions in excel / excel formulas cheat sheet 近义 | `excel-formulas-cheat-sheet` | 主打为 copy common…；cheat sheet FAQ |
| invoice template excel | `create-invoice-spreadsheet` | 主打场景句；template 词 FAQ |
| free budget spreadsheet excel / accounting spreadsheet（模板） | `create-budget-spreadsheet` | 主打 / FAQ |
| excel time tracking | `create-excel-timesheet` | 主打 |
| create graph excel / excel graphs / excel timeline chart / charts excel / excel data charts / excel chart type | `create-graph-from-spreadsheet-data` | 主打 / 次词 |
| create dashboard excel / dashboards excel / excel reporting dashboard / excel templates dashboard | `create-excel-dashboard` | 主打 |
| pivot table excel / excel pivot | `build-pivot-table-from-spreadsheet` | 主打场景句；头词 FAQ |
| xls online / excel xls / microsoft xls / ms xlsx / spreadsheet xlsx | `open-excel-file-in-browser` | 主打 / 次词 |
| google excel formulas | N1 + N5 FAQ | Sheets 与 Excel 公式差一句；不另页 |
| excel macros / vba if then / do while loop excel vba | drop | 桌面 VBA/IDE，不是浏览器作业 |
| calculation sheet excel | 过泛 | 不单列；财务计算走站内已有 calculator，不冒充 Excel |

---

## 6. 先剔除（drop）— 仅非工具意图

| 类型 | 例 | n 约 | 处理 |
| --- | --- | --- | --- |
| 品牌/套件导航 | ms excel、microsoft excel、office 365 excel、excel app、msexcel | 100+ | 无产品覆盖 |
| 下载/安装/购买 | download excel、install excel、buy excel online、purchase excel | 40+ | 非浏览器作业 |
| 教程/课程/培训 | excel tutorial beginners、excel training courses、tips and tricks | 180+ | 不做网课 |
| 版本号 | excel 2016、2010、2013、2007、2019 | 30+ | drop |
| 拼写残渣 | microsaoft excel、execel、tutotial、onlline | 400+ | drop |
| 百科 | excel definition、excel wiki、what does mean in excel | 6 | 最多主题 FAQ 一句 |
| 评测/附近课程 | best excel courses、excel courses near me、best excel charts（评测义） | 少 | drop |
| 套件克隆壳 | online excel、spreadsheet software、free excel、spreadsheet editor | 头词 | **禁止**独立 URL |
| 桌面 VBA | excel vba course、macros on excel | 少 | drop |
| Planner 噪声 | 广告组 Keyword Like: msexcel365 的半截域名 | 一组 | drop |

**未**把嵌套 IF / 发票表 / 出图等真实场景放进本表。

---

## 7. SERP 复核（待采）

未采不得 `long_gap`。建议按**场景句**抓（§3.3 I），不要抓 `ms excel` / `online excel`：

1. `write a nested IF formula for Excel`
2. `write an IFS formula in Excel`
3. `wrap a formula with IFNA`
4. `copy common Excel formulas`
5. `create an invoice spreadsheet`
6. `create a budget spreadsheet`
7. `create an Excel timesheet`
8. `create a graph from spreadsheet data`
9. `build a pivot table from a spreadsheet`
10. `open an Excel file in the browser`

---

## 8. 对已有 slug 的动作

| slug | 动作 |
| --- | --- |
| `excel-compare-files` | **不改 H1/path**。本批无 compare 搜法。Related 可链未来 N12（打开）/ N5（公式），上线后再加 |
| `csv-json` | 本批无 csv 转换搜法；保持 |
| 站内计算器（NPV/IRR 等） | 不把 `excel data analysis` / `calculation sheet excel` absorb 进来（意图是 Excel 产品，不是网页计算器） |

---

## 9. 周产能 / 下一步

| 项 | 结论 |
| --- | --- |
| 周 build | **0**（无 SERP） |
| 已有 absorb | **0**（本批对现页无同意图搜法） |
| 新 slug defer | **12** 条（N1–N12）；优先 N1/N2/N5/N6/N9/N11/N12；N4/N10 后排 |
| work-tasks | **禁止**本分析自动创建 |
| **另跑 Planner** | 文件作业种子（本 CSV **0 命中**，不臆造）：`excel to csv`、`xlsx to csv`、`merge excel files`、`excel to pdf`、`unlock excel`、`split excel sheet`、`convert xls to xlsx`。跑完再开第二篇分析 |

---

## 10. 验收自检

```text
[x] 广告组未当拆页轴
[x] 函数/产出物/浏览vs生成能分开的意图各有独立 slug
[x] 近义（free/online/ms/microsoft、xls/xlsx 查看）未拆第二 URL
[x] 无 online-excel / excel-editor / spreadsheet-software / excel-tools 壳 slug
[x] absorb 仅已实现同意图；本批未把品牌词标进 excel-compare-files
[x] 生成（写公式）≠ 速查（cheat sheet）；查看器 ≠ 在线编辑套件
[x] 无 SERP → 无 long_gap
[x] 词池已按场景行更新；未建 work-tasks
[x] 本批没有的文件转换作业未臆造 slug
```
