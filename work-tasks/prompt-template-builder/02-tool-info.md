# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`prompt-template-builder`  
**路径**：`/tools/prompt-template-builder`  
**主方向**：B  
**YMYL**：否  

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| 自由 Prompt → 结构化模板 | **是** | H1 |
| 填 Role/Task/Constraints/Output 字段合并 | 同页 | 字段优先于解析 |
| 输出 Markdown 模板 | 默认芯片 | |
| 输出 JSON `{role,task,constraints,output}` | 芯片 | absorb |
| 调用 LLM 生成文案 | — | **有意不满足** |

---

## IG 预审

- 目标主词：prompt template builder；prompt template generator；structured prompt template
- 用户真实任务：把草稿 Prompt 整理成 Role/Task/Constraints/Output 可复用块，复制或下载，文本留在设备。
- [x] 竞品：Notion 模板、ChatGPT「帮我写 Prompt」、付费 Prompt 库。
- [x] 缺口：无模型调用、轻量分段、JSON 芯片、与导出工具分工。
- [x] 增益：Rules 字段定义；自由文本 Role:/Task: 轻解析；Example loadSample；Related 导出与 schema。
- [x] 长尾：prompt structure / reusable template → FAQ 与 How；不拆 URL。
- [x] 权威：OpenAI prompting guide、Anthropic prompt engineering。
- [x] Use cases：Agent 系统 Prompt；团队共享模板；从 ChatGPT 导出提炼后再结构化。
- [x] 边界：不生成新文案、不估 token、不云端保存。
- [x] Example：样例字段 + 自由文本 → Markdown 模板。
- [x] Related：`chatgpt-export-to-markdown`、`json-schema-validator`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Role/Task/Constraints/Output 字段表 |
| 2 | 边界/失败 | 空输入；仅自由文本时轻分段或包进 Task |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | vs ChatGPT 导出工具、vs LLM 生成 |
| 5 | 权威引用 | OpenAI / Anthropic prompting |
| 6 | 本地隐私 | 留在设备 |
| 7 | 多语言 | 03 十语 |
| 8 | 数值示例 | loadSample 自动出 Markdown |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P1；B1 Prompt 工程 |
| 场景与行业 | Agent / Prompt 模板固化 |
| 技术 | Tier 0 纯 JS；localProcessing true；page.style opts |
| Catalog `page.style` | **opts** |
| Title (en) / H1 | **Prompt template builder** |
| Description 要点 | Turn draft prompt into Role/Task/Constraints/Output template; MD/JSON chips; stays on device, not uploaded. Not an LLM. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？是否 LLM？vs 导出工具？JSON 芯片？ |
| related | chatgpt-export-to-markdown, json-schema-validator |
| 验收 | coverage 0b→4；verify:tool |
| 本地化核查 | 03 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `prompt-template-builder`（场景：builder 非 generator 头词进攻） |
| 主检索词 → title/H1 | **Prompt template builder** |
| 次要关键词 → desc / FAQ / Use cases | prompt template generator → desc 划界「builder 非 LLM」；structured prompt / reusable template → How + Use cases；prompt structure → Rules |
| 用户搜索习惯判断 | 搜 prompt template builder / generator 想要结构化块；H1 用 builder；generator 次词 FAQ 说明不调用模型 |
| 优化摘要 | 2026-09-01：H1 锁定 Prompt template builder；MD/JSON 芯片不拆 URL；强调非 LLM |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 无 Planner 批 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：首屏字段 + 自由文本 → 结构化模板；有意不满足 LLM 生成 |
| 主词搜索者任务 | 把草稿整理成 Role/Task/Constraints/Output 可复用模板并复制 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | loadSample 自动出 Markdown；Convert/Copy/Download；字段与轻分段 |
| 超出 / 应划边界 | 不做模型调用、不做 token 计数、不做云端 Prompt 库 |
| 缺口与已做优化 | How 先写「整理模板」，FAQ 划界 vs chatgpt-export 与 vs LLM |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：自由文本 textarea + 可选 Role / Task / Constraints / Output format 四字段
- 输出：默认 Markdown（## Role …）；芯片 JSON `{role,task,constraints,output}`
- 核心规则：字段非空则覆盖解析；仅自由文本时检测 `Role:`/`Task:`/`Constraints:`/`Output:` 行首分段，否则全文包进 Task
- 失败：全空 → 提示
- 示例：代码审查 Agent 样例 → Markdown
- **进页样例**：`loadSample()` 填字段并 Convert
- **实现防呆**：opts；DOM 前缀 `ptb`；模板正则 `\\w`

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
- [ ] Disclaimer — 非 YMYL
- [x] `03-locale-briefs.md` 已填
