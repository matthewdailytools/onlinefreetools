# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`json-schema-validator`  
**路径**：`/tools/json-schema-validator`  
**主方向**：B（场景桥接；技术零件对齐 Ajv / draft-07）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 对齐卡片：[A1 JSON Schema Validator](../../docs/2026-07-28-per-tool-dev-seo-plans.md)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. json schema validator / JSON Schema 校验  
  2. validate json against schema  
  3. json schema draft 07 online  
  4. json pointer validation errors（→ Rules/结果区，不拆页）  
  5. validate llm json output / openai structured output（→ Use cases，不拆页）
- 用户真实任务：粘贴 Schema 与实例 JSON，立刻看到是否通过；失败时拿到可定位的路径（JSON Pointer）与可读原因，用于修模型输出或 feed。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  双栏 Schema/Instance、Validate、错误列表、「本地/隐私」、部分 draft 选择；少数展示 instance path。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **错误路径语义**：JSON Pointer vs 模糊行号，多数一笔带过  
  2. **draft 默认**：声称支持多 draft 却不写默认与差异  
  3. **AI/feed 场景**：很少写「模型缺字段」失败例与修法  
  4. **CDN vs 文本隐私**：只喊 private，不区分库加载与粘贴不上传  
  5. **十语检索向正文**：多数英文或机翻
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：校验步骤 + Pointer 如何读 → `#rules`  
  - **②** 边界：非法 JSON、缺 required、类型错、超大粘贴 → FAQ + 结果区  
  - **③** Use cases：LLM 输出、电商 feed、API 契约  
  - **⑤** References：json-schema.org、RFC 8259、Ajv  
  - **⑥** 本地：粘贴不上传；FAQ 说明 CDN 只拉库  
  - **⑧** 合法 + 故意失败双示例（进页跑失败样例出真实错误）  
  - **⑨** Related ≥2 → yaml-json / csv-json
- [x] 长尾：合并进本页。同一校验任务，场景不同不拆 `llm-json-schema` 等 doorway。
- [x] 权威来源 URL：  
  - https://json-schema.org/  
  - https://json-schema.org/understanding-json-schema/  
  - https://www.rfc-editor.org/rfc/rfc8259  
  - https://ajv.js.org/
- [x] 行业/场景 Use case 文案草稿：  
  1. AI：校验模型 structured JSON 是否缺字段/类型错  
  2. 电商/feed：商品 JSON 对照 Schema 再入库  
  3. 后端：粘贴请求 payload 对照 OpenAPI 抽出的 Schema 片段
- [x] 边界/失败案例草稿：空输入；Schema/实例非法 JSON；缺 `required`；类型不匹配；`additionalProperties: false`；软上限 ~200k；Ajv 未加载
- [x] 结果区信息如何落到可索引 Example / FAQ：固定通过/失败例 + FAQ（Pointer、draft-07、隐私、CDN、为何失败）
- [x] Related：`yaml-json`，`csv-json`（上线后反向追加本 slug）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：compile → validate；Pointer + keyword |
| 2 | 边界/失败 | FAQ + 结果区错误列表 |
| 3 | 场景语境 | Use cases ×3（AI / feed / API） |
| 5 | 权威引用 | json-schema.org、RFC 8259、Ajv |
| 6 | 本地隐私 | How/FAQ：粘贴本地；CDN 只载库 |
| 8 | 数值示例 | Example：合法 + 缺字段失败 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选**：① ② ③ ⑤ ⑥ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 · P0 · 卡片 A1 |
| 场景与行业 | 开发者 / AI：Schema + JSON → 通过或路径错误（B1/B4/B5） |
| 技术（包、Tier、本地处理） | Tier 1：**Ajv 8.17.1**（jsDelivr ESM，draft-07 默认）；纯客户端；软上限 200k |
| Title (en) | `JSON Schema Validator — Draft-07 Paths & Local \| {Brand}` |
| Description 要点 | validate against Schema + JSON Pointer errors + fail example；≥120 落地 |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 为何失败；Pointer 怎么读；draft-07；是否上传；CDN |
| Disclaimer / References | 非 YMYL；json-schema.org、RFC 8259、Ajv |
| related | `yaml-json`, `csv-json` |
| 验收 | `lint:seo`；isolation；进页失败样例出真实错误；README |
| 工期粗估 | ~1–1.5d |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 交互规格（给实现用）

- 输入：左 Schema JSON、右 Instance JSON；标注 draft-07（本页固定，UI 只读说明即可）
- 输出：状态通过/失败；失败列表每行 **JSON Pointer（instancePath）+ message**；语法错误单独 alert
- 操作：Validate / Load failing sample / Load valid sample / Clear / Copy errors
- 核心规则：`JSON.parse` → `new Ajv({ allErrors: true }).compile(schema)` → `validate(instance)`；错误用 `instancePath`（空则 `/`）+ `message`（可附 `params`）
- 失败与边界：空输入提示；非法 JSON；compile 失败；软上限 warn；库未加载
- 示例：  
  - Schema：对象，`required: ["sku","price"]`，`price` number ≥0，`additionalProperties: false`  
  - Valid：`{"sku":"A-1","price":9.5}`  
  - Fail：`{"sku":"A-1"}`（缺 price）→ Pointer 指向缺字段相关错误
- **进页样例（必填）**：默认载入 **失败样例**并自动 `validate()`，结果区显示真实错误列表；与 H2 Example 对齐；另提供「合法样例」按钮

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
