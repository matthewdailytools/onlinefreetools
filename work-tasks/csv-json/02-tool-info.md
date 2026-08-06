# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`csv-json`（不新建 `json-to-csv` / `excel-to-json` / `tsv-to-json` 近义薄页）  
**路径**：`/tools/csv-json`  
**主方向**：B（技术零件对齐方向 A / Tier 1 `papaparse`）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。  
> 对齐卡片：[B2 CSV ↔ JSON（产品 feed）](../../docs/2026-07-28-per-tool-dev-seo-plans.md)；方向 A「CSV ↔ JSON / papaparse」+ B「表数据互通」。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. csv to json / CSV 转 JSON  
  2. json to csv / JSON 转 CSV  
  3. csv json converter / CSV JSON 互转  
  4. excel to json / csv to json array / tsv to json（场景/格式意图 → Use cases/FAQ，**不拆页**）  
  5. nested json to csv / csv semicolon delimiter / csv with commas（边界意图 → Rules/FAQ）
- 用户真实任务：把电子表格导出的行列数据（产品表 SKU/title/price、报表、埋点导出）转成 API/程序要的 JSON；或把接口/工具输出的 JSON 转回 CSV 给 Excel / 商品 feed；转换时要搞清**类型推断、分隔符、引号转义、表头、嵌套如何扁平化**这些坑。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  双向粘贴/上传框、即时转换、Copy/Download、「浏览器本地/隐私」口号；多数支持表头开关；部分提到分隔符选择；少数讲类型推断或嵌套。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **类型推断策略**：CSV 单元格本是字符串——`"1"`/`"007"`/`"true"`/空值/`"3.0"`/大数/前导零（邮编、电话、SKU）在"转数字/布尔/null"时会静默失真；竞品要么强转要么全字符串，少有讲清并给开关  
  2. **分隔符与地区**：逗号 vs **分号**（欧洲 Excel）vs **制表符（TSV）**；自动探测 vs 手选；SERP 常默认逗号导致欧洲用户踩坑  
  3. **引号 / 转义 / 换行**：字段内含逗号、双引号、换行时的 RFC 4180 双引号转义；CRLF vs LF；UTF-8 **BOM**（Excel）  
  4. **JSON → CSV 的扁平化**：嵌套对象/数组如何落到列（点号路径展开？整体 `JSON.stringify` 进单元格？）；不同对象键不一致时的**列并集补空**——SERP 几乎不解释  
  5. **隐私诚实边界**：文本/文件不上传 vs 首次加载 CDN/`papaparse` 的区别（多数只喊「100% private」）  
  6. **多语言检索向正文**：多数英文或机翻；本站十语 brief + 独立重写是可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：解析/序列化步骤 + **类型推断对照表**（关闭=全字符串 vs 开启=数字/布尔/null，及前导零/大数保真）→ `#rules`  
  - **②** 边界：非法/不齐行、空输入、超软上限、含分隔符/引号/换行字段、重复表头、嵌套往返 → `FAQ` + 结果区错误文案  
  - **③** Use cases：电商产品 feed CSV→JSON 给 API；API/导出 JSON→CSV 回 Excel/Merchant feed；埋点/报表桥接  
  - **④** 对照表：分隔符（`,`/`;`/`\t`）、表头有无、类型推断「开/关」、嵌套扁平化策略 → Rules  
  - **⑤** References：RFC 4180（CSV）、papaparse、RFC 8259（JSON）  
  - **⑥** 本地隐私：粘贴/文件不离开浏览器；FAQ 区分文本与 CDN 载库  
  - **⑦** 十语 locale brief + 检索向重写 + ≥3 轮（见 `03`）  
  - **⑧** 固定双向 Example（CSV→JSON 与 JSON→CSV 各一组；含前导零/含逗号字段边界例）  
  - **⑨** Related ≥2 → 页底内链
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并进本页（方向 Tab + 选项）**。`excel to json`、`tsv to json`、`csv semicolon`、`nested json to csv` 都是同一「表数据 ↔ JSON」任务的格式/场景变体，靠分隔符选项 + Use cases + FAQ 覆盖；单独建页易成 doorway / scaled content。
- [x] 权威来源 URL：  
  - https://www.rfc-editor.org/rfc/rfc4180  
  - https://www.papaparse.com/docs  
  - https://www.rfc-editor.org/rfc/rfc8259
- [x] 行业/场景 Use case 文案草稿：  
  1. 电商：Excel 产品表（SKU/title/price）→ JSON 数组喂店铺/Marketplace API  
  2. 开发者：API/SDK 返回 JSON → CSV 便于在表格里筛选、对账、交付  
  3. 数据/运营：报表或埋点 CSV（含分号/TSV）→ JSON 进流水线；含逗号/换行字段安全转义
- [x] 边界/失败案例草稿：空输入；列数不齐的行（补空 vs 报错）；字段含逗号/引号/换行；分号/TSV 未识别；前导零/大数被转成数字失真；`"true"`/空串是否转布尔/null；嵌套 JSON 扁平化后往返不完全一致；UTF-8 BOM；软上限（建议 ~5MB / ~50k 行，过大切手动 Convert）
- [x] 结果区信息如何落到可索引 Example / FAQ：双向固定示例 + FAQ（类型推断、分隔符、含逗号字段、嵌套扁平化、隐私、CDN、BOM/CRLF）
- [x] Related / 主题内链计划（≥2）：`yaml-json`，`text-diff`（未来 `json-schema-validator` 上线后加入或替换，用于校验转出的商品 JSON）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：`papaparse` parse/unparse；类型推断、分隔符、表头、扁平化默认 |
| 2 | 边界/失败 | FAQ + 结果区错误 + 不齐行/引号/嵌套往返 |
| 3 | 场景语境 | Use cases ×3（电商 feed / API 回表 / 报表流水线） |
| 4 | 对照表 | Rules：分隔符 + 表头 + 类型推断开关 + 扁平化策略 |
| 5 | 权威引用 | References → RFC 4180、papaparse、RFC 8259 |
| 6 | 本地隐私 | How/FAQ：内容不上传；诚实说明 CDN |
| 7 | 多语言 | 十语 brief + 检索向重写 + ≥3 轮（`03`） |
| 8 | 数值示例 | Example：双向固定 Input→Output（含前导零/含逗号边界例） |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/数据 · 方向 B · 卡片 B2 · P1 |
| 场景与行业 | 电商 / 开发者 / 数据：表数据与程序 JSON 互通（B2/B4；示例列 SKU/title/price） |
| 技术（包、Tier、本地处理） | Tier 1：`papaparse`（动态 import；解析 + `unparse` 反向）；双向；错误行/信息可读；**粘贴/文件纯客户端、不上传**；FAQ 写清 CDN |
| Title (en) | `CSV ↔ JSON Converter — Types, Delimiters & Local \| {Brand}`（覆盖双向；不堆砌同义词） |
| Description 要点（步骤/公式 + 示例；≥120 落地时写满） | ≥120；步骤（选方向→粘贴/上传→设分隔符/表头→复制）+ 类型推断/分隔符/引号说明 + 电商 feed 示例场景；十语检索向（含 json to csv、excel to json） |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；应用名体现双向） |
| FAQ 要点（≥3） | 数字/前导零/空值会否被转坏（类型推断开关）；分号/TSV 是否自动识别；字段含逗号/引号/换行怎么处理；嵌套 JSON 转 CSV 如何扁平化；内容是否上传（含 CDN）；BOM/CRLF |
| Disclaimer / References | 非 YMYL；RFC 4180、papaparse、RFC 8259 |
| related | `yaml-json`, `text-diff`（未来可换/加 `json-schema-validator`） |
| 验收 | `npm run lint:seo`；`03` ≥3 轮；两方向可交互；含逗号/引号字段正确转义；类型推断开关有效；无独立反向薄页；README 清单登记 |
| 工期粗估 | ~1d（交互 Tab + papaparse + Rules/IG 文案 + 十语检索向） |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 交互规格（给实现用）

- 输入：
  - **模式 Tab / 切换**：`CSV → JSON` | `JSON → CSV`（默认 CSV→JSON，对齐主检索词）
  - 左侧 textarea（CSV 或 JSON）+ 可选「上传文件」（`.csv` / `.tsv` / `.json`，本地 `FileReader`，不上传）；右侧输出（等宽）
  - 选项（CSV→JSON）：**分隔符**（自动 / `,` / `;` / `\t`）；**首行为表头**（开=对象数组 / 关=数组的数组）；**类型推断**（关=全字符串保真 / 开=数字/布尔/null，注明前导零/大数风险）；输出**缩进**（2 / 4 / minify）
  - 选项（JSON→CSV）：**分隔符**；**扁平化策略**（点号路径展开嵌套 / 嵌套整体 `JSON.stringify` 进单元格）；列取所有对象键**并集**（缺失补空）
  - 操作：Convert（可即时）/ Copy / Download（`.json` 或 `.csv`）/ Clear / Load sample
- 输出：
  - 成功：格式化后的对侧文本 + 轻量摘要（行/列数、识别到的分隔符）
  - 失败：简短错误（如非法 JSON、空输入）；papaparse `errors` 摘要（行号/类型）；不静默清空上次成功结果或给明确失败态（实现择一并在 Rules 说明）
- 核心规则 / 算法：
  - CSV→JSON：`papaparse.parse`（`header` 开关；`delimiter` 自动/指定；`dynamicTyping` 映射到「类型推断」开关；`skipEmptyLines`）
  - JSON→CSV：`JSON.parse` → 扁平化（默认点号路径 flatten）→ `papaparse.unparse`（或 `csv-stringify`）；列 = 所有记录键并集
  - 引号/转义：遵循 RFC 4180（字段含分隔符/引号/换行时用双引号包裹、内部引号翻倍）
  - 换行/BOM：输出可选 CRLF；下载 CSV 可选加 UTF-8 BOM（Excel 友好），在 Rules/FAQ 说明
- 失败与边界行为：
  - 空输入 → 输出清空或轻提示
  - 列数不齐 → 补空并提示（或按 papaparse error 列出行号）
  - 非法 JSON（JSON→CSV）→ 错误信息（尽量带位置）
  - 类型推断开启时：`007`/长数字串默认**保留为字符串**以防失真（须与 UI 默认一致后写死文案）
  - 超软上限（建议 ~5MB / ~50k 行）→ 警告仍可试；过大切「手动 Convert」以免卡主线程
  - 库未加载 → 提示刷新/重试
- 示例 Input → Output：
  - CSV→JSON（首行表头 + 含逗号字段）：
    ```csv
    sku,title,price
    A-001,"Chair, oak",129.9
    A-002,Desk,89
    ```
    → `[{"sku":"A-001","title":"Chair, oak","price":129.9},{"sku":"A-002","title":"Desk","price":89}]`（类型推断开启；展示 2 空格缩进）
  - 类型边界例（写入 Example 或 FAQ）：`zip` 列 `"07030"` 在类型推断下**保留字符串**（不变 `7030`）——与 UI 默认一致后写死文案
  - JSON→CSV（嵌套扁平化）：`[{"sku":"A-001","dim":{"w":40,"h":90}}]` → 表头 `sku,dim.w,dim.h` + 行 `A-001,40,90`（点号路径策略）

## 页面模块清单（与 tool-creation 对齐）

- [ ] H1 + 一句话摘要（双向表述）
- [ ] 首屏工具交互区（Tab + 两方向 + 分隔符/表头/类型推断选项）
- [ ] How it works
- [ ] Formula / Rules（类型推断 + 分隔符 + 引号转义 + 扁平化对照）
- [ ] Example（双向固定文案；含逗号/前导零边界例）
- [ ] Use cases（2–3：电商 feed / API 回表 / 报表流水线）
- [ ] FAQ ≥3（类型、分隔符、含逗号字段、嵌套扁平化、隐私、BOM/CRLF）
- [ ] Related tools ≥2（`yaml-json`, `text-diff`）
- [ ] References ≥1（RFC 4180 / papaparse / RFC 8259）
- [ ] Disclaimer — 非 YMYL，隐私在 How/FAQ
- [ ] `03-locale-briefs.md` 已填（实现十语前）
- [ ] README 工具清单登记（中英各一条，与 `tool-catalog.json` 一致）
- [ ] `tool-catalog.json` 注册（`faqPrefix: tool_csv_json`；`related` ≥ 2）
- [ ] **不**注册独立 `json-to-csv` / `excel-to-json` / `tsv-to-json` slug
