# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-convert-web-pages-to-excel`  
**路径**：`/tools/batch-convert-web-pages-to-excel`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 多条公开页一次抽出 HTML 表进一本工作簿 | batch convert web pages to excel; convert webpage to excel | URL 列表 → 多 sheet `.xlsx` | **默认**：一行一个 https；每张 HTML 表一张工作表；跳过过小表；Convert all；Download Excel |
| 单条 webpage / web page to excel（Planner） | convert web page to excel; webpage to excel; export webpage to excel | **同作业、一条列表** | absorb：贴一行即可；不拆 doorway |
| 粘贴 HTML / HTML table to excel | convert html to excel; html table to excel; html to xlsx | 粘贴源码 → 同一映射 | Tab：Paste HTML；同一 Convert |
| 要像素截图 | batch convert web pages to jpg/png | **另一作业** | FAQ 链 JPG/PNG 批处理 |
| 要 A4 打印件 | batch convert web pages to pdf | **另一作业** | FAQ 链 PDF 批处理 |
| 要可改段落/标题 | convert html web pages to word | **另一作业** | FAQ 链 HTML→Word |
| 已有 CSV/JSON | csv-json | **另一作业** | FAQ 链 csv-json |
| PDF 里的表 | pdf table to excel | **有意不满足** | FAQ：无 OCR、不读 PDF |
| Excel Online / mhtml | excel web; mhtml to excel | **drop** | FAQ 一句：不是在线表格套件，不做 .mhtml |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch convert web pages to Excel；convert web page to excel；html table to excel；convert html to excel；html to xlsx
- 用户真实任务：从公开页或粘贴 HTML 抽出 **`<table>` 单元格**，下载一本可在 Excel 里改数字的 `.xlsx`（多 URL / 多表 = 多工作表）。
- [x] 竞品常见：云端 webpage to excel 常把整页当一张图或一团纯文本；或不说明与 PDF 打印件、Word 文稿的差异。
- [x] 缺口：① 是否只抽 HTML table（散文忽略）；② 多 URL 是一本多 sheet 还是 ZIP 截图；③ rowspan/过小导航表怎么处理；④ 与 Word/PDF/JPG 划界。
- [x] 本页增益：DOM 抽 th/td；默认一表一 sheet；过小表可跳过；一批 URL 进**同一工作簿**（不是 PNG ZIP）；诚实声明不是截图、不是 PDF 表格 OCR。
- [x] 长尾：Planner `convert html to excel` / `html table to excel`（100–1k）absorb 进 Paste HTML Tab；`convert web page to excel` 进默认 URL 列表。不拆 `/html-to-excel` doorway。不做 mhtml、不做 pdf table。
- [x] 权威来源 URL：https://docs.sheetjs.com/ ；https://html.spec.whatwg.org/multipage/tables.html
- [x] Use case：价目表/SKU HTML 进 Excel 再透视；帮助中心参数表归档；不要打印 PDF。
- [x] 边界：无 `<table>` 则该行 skip；脚本渲染的表抽不到；colspan 展开为空格、rowspan 摊平；登录墙失败。
- [x] Example：载入样例填入价目表 + 库存表两个本地 URL，Convert 后启用 Download Excel。
- [x] Related：`convert-html-web-pages-to-word-document`、`csv-json`、`batch-convert-web-pages-to-pdf`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 只映射 `<table>`；一表一 sheet（可改为一 URL 一 sheet 叠表）；过小表默认跳过 |
| 2 | 边界/失败 | 无表 skip；JS 表失败；PDF/mhtml 有意不满足；rowspan 摊平 |
| 3 | 场景语境 | 价目/SKU 表进 Excel 再算，不是截图归档 |
| 6 | 本地隐私 | 粘贴留标签页；URL 代抓一次不落盘 |
| 9 | 主题内链 | Word / csv-json / PDF 批处理 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | web-page 转换簇；新建 |
| 场景与行业 | 运营把网页 HTML 表拉进 Excel |
| 技术（包、Tier、本地处理） | SheetJS + DOMPurify；Tier 1；URL 代抓 `localProcessing: false` |
| Catalog `page.style` | **opts** |
| Title (en) | Batch convert web pages to Excel |
| Description 要点（步骤/公式 + 示例；≥120 字落地时再写满） | 前 160 字：batch convert + HTML tables into one .xlsx（不是截图/PDF）。Steps: paste URLs, Convert all, Download Excel. Example: price + stock tables. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 存储？和 Word/PDF/JPG 差在哪？一条 URL？无 table？PDF 表？粘贴 HTML？ |
| Disclaimer / References | SheetJS docs；HTML tables spec |
| related | convert-html-web-pages-to-word-document, csv-json, batch-convert-web-pages-to-pdf |
| 验收 | `npm run lint:seo`；`verify:tool` |
| 工期粗估 | 1 会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-07 |
| slug 结论 | 保留 `batch-convert-web-pages-to-excel`：用户原话 + 与 JPG/PNG/PDF 批处理同构任务句；头词 html to excel 不拆 doorway |
| 主检索词 → title/H1 | **Batch convert web pages to Excel**（任务句；批量是作业，头词 webpage to excel absorb） |
| 次要关键词 → desc / FAQ / Use cases | convert web page to excel / webpage to excel → desc 与 How「一行即可」；html table to excel / convert html to excel / html to xlsx → Paste HTML Tab、FAQ、How；export table to excel → Rules「只抽 table」；pdf table to excel → FAQ 有意不满足 |
| 用户搜索习惯判断 | 英语搜 convert/export … to excel；中文搜「网页转 Excel / HTML 表格转 Excel」。H1 用批量任务句，避免硬刚 Excel Online 头词 `excel web` |
| 优化摘要 | 初稿若写成「HTML to Excel Converter」会撞套件词且不像批处理；改为 Batch convert…；差异写成「HTML tables → one workbook」，禁止质量/视口/A4 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-convert-web-pages-to-excel --phase=0b`

## Ads / Keyword Planner 长尾（有分析时必做）

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/web-page/excel-Keyword Planner 09-06-2026 at 05-21-44.csv`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| convert web page to excel / webpage to excel / export webpage to excel / web page to excel converter（10–100） | absorb | desc、How 一行 URL、FAQ 单条 | 默认 URL 列表贴一行即 Convert | |
| convert html to excel / html to excel / html to excel converter（100–1k）；html to xlsx（10–100） | absorb | Paste HTML Tab、FAQ、How | Tab 粘贴源码，同一 table→sheet 映射 | 不拆 `/html-to-excel` |
| html table to excel / convert html table to excel / export html table to excel（100–1k） | absorb | H1 差异句、Rules、usecase 价目表 | 只抽 `<table>`，散文忽略 | |
| pdf table to excel / convert pdf table to excel（100–1k） | drop / 有意不满足 | FAQ 一句 | 无 | 无 OCR、本页不读 PDF |
| excel web / microsoft excel for the web / online excel sheet（头词/套件） | drop | 不进 H1 | 无 | Excel Online 壳，禁进攻 |
| save excel as web page / excel sheet to web page | drop | 不写 | 无 | 反向作业 |
| mhtml to excel / convert chrome html to excel | drop | FAQ 一句导出 HTML | 无 | 与 Word 页一致不做 mhtml |
| convert spreadsheet to excel / xlsx converter | drop | 不写 | 无 | 已是表格文件，不是网页 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-07 |
| 总判 | **满足**：默认 URL 列表完成「批量网页→Excel」；Paste HTML Tab 覆盖更大头词 html to excel / html table，但不抢默认首屏 |
| 主词搜索者任务 | 打开页要把若干公开页里的 **HTML 表**变成能在 Excel 里改的格子，不是要一张图或一篇 Word |
| Ads/Planner 长尾任务 | webpage to excel：一行 URL 能办成。html table / html to excel：切 Tab 粘贴能办成。pdf table：有意不满足。excel web：drop |
| 满足之处 | 默认 textarea=H1 批量作业；Convert all → 一本 xlsx；样例两张真实表 |
| 超出 / 应划边界 | 不把视口/质量/A4 搬进本页；不首屏同时铺 URL+粘贴（用 Tab）；desc 不写 SEO 自述 |
| 缺口与已做优化 | How 先写「抽出 HTML 表」再写按钮；FAQ 划界 Word/PDF/JPG 与 PDF 表格；高级设置收起：一表一 sheet / 跳过过小表 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**默认** URL 列表（一行一个 https，最多 10）。次 Tab：Paste HTML（一份源码）。禁止云盘。
- 输出：一本 `.xlsx`（`web-pages.xlsx`）。Download 无产物时 disabled。不是 ZIP 截图。
- 核心规则 / 算法：DOMPurify → DOMParser → 每个 `<table>` 的 tr/th/td 文本成 AOA；SheetJS `aoa_to_sheet` + `book_append_sheet`。默认 **一表一 sheet**；可选 **一 URL 一 sheet**（表与表之间空一行）。默认跳过行数&lt;2 或列数&lt;2 的表。colspan 用空单元格占位；rowspan 摊平（Rules 写清）。工作表名 ≤31 字符。
- 失败与边界行为：无合格表 → 该行 skip，其余继续；坏 URL 不请求；登录墙/空 HTML 失败该行。
- 示例 Input → Output：两条样例 URL（价目表、库存表）→ 工作簿里至少两张 sheet，数字可改。
- **进页样例（必填）**：填入 `https://example.com/data/price-list` 与 `https://example.com/data/stock-grid`，用**本地 HTML 表**转换（不打外网），自动 `loadSample()`（无 html2canvas，不卡标签页）。Example 文案与此一致。
- **实现防呆**：`page.style: opts`；正则 `\\w`；B 后 `lint:tool-page --slug=batch-convert-web-pages-to-excel`

按钮行：Convert all / Download Excel / Load sample / Clear。高级设置折叠：Sheet layout、Skip tiny tables。

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）— 本页非 YMYL
- [x] `03-locale-briefs.md` 已填（实现十语前）
