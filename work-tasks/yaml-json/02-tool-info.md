# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`yaml-json`（不新建 `json-to-yaml` / `yaml-to-json` 近义薄页）  
**路径**：`/tools/yaml-json`  
**主方向**：B（技术零件对齐方向 A.1 / Tier 1 `js-yaml`）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（brief + ≥3 轮；`lint:seo` ≠ 本地化完成）。  
> 对齐卡片：[A4 YAML ↔ JSON](../../docs/2026-07-28-per-tool-dev-seo-plans.md)；方向 A.1 + B「配置互通」。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. yaml to json / YAML 转 JSON  
  2. json to yaml / JSON 转 YAML  
  3. yaml json converter / YAML JSON 互转  
  4. kubernetes yaml to json / docker compose yaml json（场景意图 → Use cases/FAQ，**不拆页**）  
  5. yaml multi document / anchors aliases（边界意图 → Rules/FAQ）
- 用户真实任务：把配置 YAML（K8s、Compose、GitHub Actions、Helm values）转成程序可读 JSON；或把 API/工具输出的 JSON 写回可注释、可人工编辑的 YAML；转换时要搞清类型坑、多文档与往返损失。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  双向粘贴框、即时转换、Copy/Download、「浏览器本地/隐私」口号；部分写锚点展开、多文档；少数提到 `js-yaml` / YAML 1.2；个别讲 `yes`/`no` 类型推断或 JSON_SCHEMA。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **类型推断默认策略**：未引用字符串 `yes`/`no`/`on`/`off`/`2024-01-01` 在 DEFAULT vs JSON_SCHEMA 下差在哪（竞品说法互相矛盾或一笔带过）  
  2. **多文档政策**：`---` 流是「只取第一篇」还是「JSON 数组」——SERP 两边都有，用户无法预期  
  3. **往返不可逆**：注释丢失、锚点展开成重复值、键序/风格差异、JSON→YAML 无注释恢复  
  4. **隐私诚实边界**：文本不上传 vs 首次加载 CDN/`js-yaml` 的区别（多数只喊「100% private」）  
  5. **多语言检索向正文**：多数英文或机翻；本站十语 brief + 独立重写是可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：解析/序列化步骤 + **类型推断对照表**（DEFAULT vs 可选 JSON-safe）→ `#rules`  
  - **②** 边界：非法 YAML 行号、空输入、超软上限、循环锚点、往返不等 → `FAQ` + 结果区错误文案  
  - **③** Use cases：K8s/Compose 清单→JSON；API JSON→可读 YAML；CI/LLM 配置桥接  
  - **④** 对照表：多文档策略、锚点/注释/类型「保留 vs 丢失」→ Rules  
  - **⑤** References：YAML 1.2 / js-yaml / JSON RFC  
  - **⑥** 本地隐私：粘贴不离开浏览器；FAQ 区分文本与 CDN 载库  
  - **⑦** 十语 locale brief + 检索向重写 + ≥3 轮（见 `03`）  
  - **⑧** 固定双向 Example（YAML→JSON 与 JSON→YAML 各一组；可加 `yes` 类型边界例）  
  - **⑨** Related ≥2 → 页底内链
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并进本页（方向 Tab）**。同一「配置格式互通」任务，仅方向相反或场景不同；单独 `json-to-yaml` / `k8s-yaml-to-json` 易成 doorway。用 Tab + Use cases + FAQ 覆盖。
- [x] 权威来源 URL：  
  - https://yaml.org/spec/1.2.2/  
  - https://github.com/nodeca/js-yaml  
  - https://www.rfc-editor.org/rfc/rfc8259  
- [x] 行业/场景 Use case 文案草稿：  
  1. DevOps：多资源 K8s YAML（`---`）→ JSON 数组给脚本消费  
  2. 开发者：API/SDK 返回 JSON → 缩进 YAML 便于人工改配置  
  3. 数据/AI：流水线参数或 model config 在 YAML 可读性与 JSON 严格性之间互转
- [x] 边界/失败案例草稿：空输入；缩进错误（带 mark 行号）；仅注释的 YAML；多文档；`yes`/`no` 被当成布尔；往返后注释消失；软上限 ~200k 字符
- [x] 结果区信息如何落到可索引 Example / FAQ：双向固定示例 + FAQ（类型、多文档、锚点、注释、隐私、CDN、往返）
- [x] Related / 主题内链计划（≥2）：`markdown-to-html`，`text-diff`（卡片目标 `json-schema-validator` 未上线前用此对；上线后替换/追加）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：`js-yaml` load/dump；类型推断与缩进默认 |
| 2 | 边界/失败 | FAQ + 行号错误 + 往返/多文档/锚点 |
| 3 | 场景语境 | Use cases ×3（K8s/API/流水线） |
| 4 | 对照表 | Rules：类型 + 多文档 + 损失项 |
| 5 | 权威引用 | References → YAML 1.2、js-yaml、RFC 8259 |
| 6 | 本地隐私 | How/FAQ：文本不上传；诚实说明 CDN |
| 7 | 多语言 | 十语 brief + 检索向重写 + ≥3 轮（`03`） |
| 8 | 数值示例 | Example：双向固定 Input→Output（含类型边界例可选） |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤ References）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者/文本 · 方向 B · 卡片 A4 · P0 |
| 场景与行业 | 开发者 / DevOps / 数据：配置与程序数据格式互通（B2/B5） |
| 技术（包、Tier、本地处理） | Tier 1：`js-yaml`（动态 import）；双向；非法输入展示 **行/列**（`YAMLException.mark`）；**粘贴纯客户端、不上传**；FAQ 写清 CDN |
| Title (en) | `YAML ↔ JSON Converter — Types, Multi-doc & Local \| {Brand}`（覆盖双向；不堆砌同义词） |
| Description 要点 | ≥120；步骤（选方向→粘贴→复制）+ 类型/多文档说明 + 示例场景；十语检索向（含 json to yaml） |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；应用名体现双向） |
| FAQ 要点（≥3） | `yes`/`no` 会否变布尔；多文档如何输出；注释/锚点往返会丢什么；文本是否上传（含 CDN）；错误如何定位行号 |
| Disclaimer / References | 非 YMYL；YAML 1.2、js-yaml、RFC 8259 |
| related | `markdown-to-html`, `text-diff`（未来可换/加 `json-schema-validator`, `csv-json`） |
| 验收 | `lint:seo`；`03` ≥3 轮；两方向可交互；非法 YAML 可读错误；无独立反向薄页；README 清单登记 |
| 工期粗估 | ~1d（交互 Tab + js-yaml + Rules/IG 文案 + 十语检索向） |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 交互规格（给实现用）

- 输入：
  - **模式 Tab / 切换**：`YAML → JSON` | `JSON → YAML`（默认 YAML→JSON，对齐主检索词）
  - 左侧 textarea（YAML 或 JSON）；右侧输出（等宽）；选项：**缩进**（JSON：2 / 4 / minify；YAML：2 / 4）；可选开关 **JSON-safe typing**（实现时：YAML→JSON 用 `yaml.JSON_SCHEMA` 或等价，避免裸 `yes`/`no` 变布尔——默认策略须在 Rules 写死并与 UI 一致）
  - 操作：Convert（可即时）/ Copy / Download（`.json` 或 `.yaml`）/ Clear / Load sample
- 输出：
  - 成功：格式化后的对侧文本
  - 失败：简短错误 + **行/列**（若有）；不清空上次成功结果或给出明确失败态（实现择一并在 Rules 说明）
- 核心规则 / 算法：
  - YAML→JSON：`js-yaml.load` 或 `loadAll`（**定稿：多文档用 `loadAll` → JSON 数组**；单文档则输出该文档的 JSON 值，非强制包一层数组）
  - JSON→YAML：`JSON.parse` → `js-yaml.dump`（默认 `lineWidth: -1` 或合理宽度；`quotingType`/`forceQuotes` 保持简单可读）
  - 锚点/别名：解析时展开为具体值（JSON 无引用语法）
  - 注释：YAML→JSON **丢弃**；JSON→YAML **不恢复**原注释
- 失败与边界行为：
  - 空输入 → 输出清空或轻提示
  - 非法 YAML/JSON → 错误信息 + 行号（YAML）
  - 超软上限（建议 ~200k 字符）→ 警告仍可试；过大可切「手动 Convert」以免卡主线程
  - 库未加载 → 提示刷新/重试
- 示例 Input → Output：
  - YAML→JSON：
    ```yaml
    name: demo
    enabled: true
    items:
      - a
      - b
    ```
    → `{"name":"demo","enabled":true,"items":["a","b"]}`（展示用 2 空格缩进）
  - 类型边界例（写入 Example 或 FAQ）：裸 `flag: yes` 在默认 schema 下变为布尔 `true`（若开启 JSON-safe 则保持字符串——与 UI 默认一致后写死文案）
  - JSON→YAML：`{"title":"Hello","count":2}` → 对应缩进 YAML

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要（双向表述）
- [x] 首屏工具交互区（Tab + 两方向）
- [x] How it works
- [x] Formula / Rules（类型推断 + 多文档 + 损失对照）
- [x] Example（双向固定文案；可选类型边界例）
- [x] Use cases（2–3）
- [x] FAQ ≥3（类型、多文档、锚点/注释、隐私、往返）
- [x] Related tools ≥2
- [x] References ≥1（YAML 1.2 / js-yaml / RFC 8259）
- [x] Disclaimer — 非 YMYL，隐私在 How/FAQ
- [x] `03-locale-briefs.md` 已填（实现十语前）
- [x] README 工具清单登记
- [x] **不**注册独立 `json-to-yaml` / `yaml-to-json` slug
