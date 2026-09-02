# ai-prompt-template-builder topic — 分场景工具 + Info Gain

- date: **2026-09-01 22:35**（修订：**本 topic 立项不看 SERP**）
- 主题 id（拟）：**`ai-prompt-template-builder`**
- 站点 hub：**`/topics/ai-prompt-template-builder`**（十语；**不**另建自定义 marketing hub）
- 词表：[`2026-09-01-prompt-builder-keyword-planner.md`](./2026-09-01-prompt-builder-keyword-planner.md)
- SERP 批次（**仅存档，不参与本 topic 排期**）：[`2026-09-01-prompt-builder-serp.md`](./2026-09-01-prompt-builder-serp.md) · [`2026-09-01-prompt-builder-bing-serp.md`](./2026-09-01-prompt-builder-bing-serp.md)
- 竞品：[`2026-09-01-feedough-prompt-tools-inventory.md`](./2026-09-01-feedough-prompt-tools-inventory.md)
- 二合一方案：[`2026-09-01-local-and-cf-ai-hybrid-scheme.md`](./2026-09-01-local-and-cf-ai-hybrid-scheme.md)
- 先例：[`../text-compare/2026-09-01-text-compare-topic.md`](../text-compare/2026-09-01-text-compare-topic.md)
- 规则：§3.3 H 场景任务句；禁 doorway；**H1 = Planner 场景长尾原句**；命名须 **prompt + (builder|generator)**，宜含 **ai**

> **分析结论（不看 SERP）**  
> **可以**按竞品思路「分场景、进页即用」，但**不能**抄 Feedough 的「模型/技法换皮 URL」。  
> 立项门禁只剩：**Planner 有搜法 → 主控件/对象不同 → ≥3 条 IG → 进页自动样例**。  
> **新建 topic + 分场景建工具** 为推荐路径；排期按**产品差异与产能**，不按 competition_tier / long_gap。  
> **未**改 `topics.ts` / catalog；实现走 `work-tasks/` + `coverage:gate`。

---

## 0. 立项门禁（替代 SERP）

| 须满足 | 说明 |
| --- | --- |
| **场景证据** | Planner 或已确认用户搜法（本批 S0–S6；无词不臆造 video/论文/代码） |
| **控件差** | 与簇内其它 URL **主控件/默认态**实质不同（§3.3 H） |
| **IG ≥ 3** | 规则 / 边界 / 对照 / 场景样例等可验证增量 |
| **进页即用** | 场景默认 + Load sample + 进页自动跑 |
| **命名** | prompt + (builder\|generator)；H1 = 场景长尾原句 |
| **不建** | 同控件换平台名；技法百科壳；服务/品牌 |

**本 topic 明确不采用**：SERP tier、long_gap、周 build 名额、GSC 展示 作为是否建页条件。

---

## 1. 能不能学竞品分场景？

| 维度 | Feedough | 本站可学 | 本站禁止 |
| --- | --- | --- | --- |
| 进页即用 | 填一句 → 云端生成 | ✅ 场景预设 + 自动样例 | ❌ 空壳文案 |
| 分场景 | 图像 / 写作 / 视频… | ✅ Planner 有证据 + **控件不同** | ❌ ChatGPT/Gemini 各一页 |
| 生成方式 | 默认 LLM | ✅ 本地结构化；可选 CF AI | ❌ 假 unlimited |
| 铺量 | 31 页矩阵 | ✅ **3–4 个**场景 URL + 1 收割页 | ❌ 模型皮 / 技法 / 无搜法 |

---

## 2. Topic 定义

| 项 | 值 |
| --- | --- |
| Topic id | `ai-prompt-template-builder` |
| Hub | `/topics/ai-prompt-template-builder` |
| Hub 标题（建议） | AI prompt template builder & generator tools |
| 范围 | 草稿/场景 → 可粘贴 AI Prompt（结构化；非代写服务） |
| `dev-data` | 现页 `prompt-template-builder` 上线 topic 时 **primaryTopic 迁到本 topic** |

---

## 3. 独立 URL 一览（权威 · 产品驱动）

### 3.1 收割页 S0（已有，P0 强化）

| H1 | slug | 主打词 | 进页默认 |
| --- | --- | --- | --- |
| **Prompt template builder** | `prompt-template-builder` | ai prompt builder；prompt template builder；templates | 四字段；text-to / copilot / website 芯片；样例 → MD/JSON |

`ai prompt generator` 等头词：**FAQ 划界 + 链到本页**，不作独立 generator URL。

### 3.2 场景页（独立 slug · 2026-09-02 定稿）

| 优先级 | 场景 | H1 | slug | 主控件差 |
| --- | --- | --- | --- | --- |
| P0 | S0 收割 | Prompt template builder | `prompt-template-builder` | 四字段 + 场景芯片 |
| P1 | 写作/随机 | Writing prompt generator | `writing-prompt-generator` | 对白/角色/剧本/Random |
| P1 | 图像 | Midjourney prompt builder | `midjourney-prompt-builder` | MJ 参数字段 |
| P1 | Sketch.app 操作 | Sketch.app prompt generator | `sketch-prompt-generator` | 目标/Artboard/Symbol/导出（非线稿文生图） |
| P1 | 电影 | Film prompt builder | `film-prompt-builder` | logline/三幕/场景 |
| P1 | 短剧 | Short drama prompt generator | `short-drama-prompt-generator` | 分集/钩子/cliffhanger |
| P1 | 产品设计 | Product design prompt builder | `product-design-prompt-builder` | persona/线框/设计令牌 |
| P1 | Android | Android prompt builder | `android-prompt-builder` | Kotlin/Compose Agent |
| P1 | iOS | iOS prompt builder | `ios-prompt-builder` | Swift/SwiftUI Agent |

**S0 芯片保留**（用户定稿）：各场景仍有独立 URL；芯片作快速预填并链到专用页。  
**全簇双模式**：本地默认 + 可选 CF AI Expand/Polish + Turnstile（见 `src/pages/site/promptAiPanel.ts`）。

**本 topic URL 数**：**9 工具 + 1 hub**。

### 3.3 仍不建（与 SERP 无关 · 产品规则）

| 类型 | 例 | 原因 |
| --- | --- | --- |
| 模型皮 **独立 URL** | `/chatgpt-prompt-generator` 等各一页 | **同控件**，仅换平台名 → doorway |
| 技法壳 | CoT / ToT / zero-shot / few-shot | 教育意图，非「进来即用」场景 |
| 无 Planner 词 | 视频 / 论文 | 仍无搜法；不臆造 |
| 服务/品牌 | Prompt Service、betterprompt | 非工具 |
| Optimiser/Checker 单页 | 并入 S0 可选 AI 润色 | 非独立场景 |
| Feedough 31 页矩阵 | 见 §7 | 换皮 / 无控件差 |

**S12 说明**：ChatGPT / Gemini / Claude / DeepSeek **须**在 description 与页面可见文案中体现；**禁止**为每个平台各建 slug。

---

## 4. Info Gain（每页硬门槛）

### 4.1 `prompt-template-builder`

| # | 维度 | 增量 |
| ---: | --- | --- |
| 1 | 规则 | Role/Task/Constraints/Output；MD vs JSON |
| 2 | 边界 | 默认本地；可选 CF AI 数据去向；空字段/超长 |
| 3 | 对照 | vs {{var}} 填充器；vs 云端 unlimited generator |
| 4 | 场景 | text-to / copilot / website 芯片 + **电影 / 短剧 / Android / iOS 芯片** + 自动样例 |
| 5 | 平台 | **ChatGPT / Gemini / Claude / DeepSeek** 在 description、首屏、FAQ 点名（不拆 URL） |
| 6 | 可选 | Hybrid Expand/Polish；失败回退本地 |

### 4.2 `writing-prompt-generator`

| # | 维度 | 增量 |
| ---: | --- | --- |
| 1 | 规则 | 写作 Task 模板 + Random 种子写入方式 |
| 2 | 边界 | 随机不保证质量；对白 vs 大纲模式 |
| 3 | 对照 | vs 通用 template builder（本页默认写作态） |
| 4 | 样例 | 对白 / 角色 / random 进页各可见一例 |

### 4.3 `midjourney-prompt-builder`

| # | 维度 | 增量 |
| ---: | --- | --- |
| 1 | 规则 | 主体/风格/光线/画幅 → MJ 参数句映射表 |
| 2 | 边界 | 本地组装；不替代官方客户端 |
| 3 | 对照 | vs S0 通用 builder；vs image-to-prompt（反向意图） |
| 4 | 样例 | 一条完整 MJ prompt 进页自动生成 |

---

## 5. 「进来即可用」

| 要求 | 落地 |
| --- | --- |
| H1 = 场景 | 打开即该场景默认芯片/模式 |
| 自动样例 | `loadSample()` 进页执行 |
| 少控件 | 主操作 + 场景选项 + 输出 |
| 本地可用 | 不依赖 AI binding 完成主路径 |

---

## 6. 推荐实施顺序（产能 · 不看 SERP）

| 阶段 | 交付 |
| --- | --- |
| **A** | Topic 工程：`topics.ts` + 十语 topic 文案 + hub 页 |
| **B** | 现页强化：S4–S7 芯片/FAQ/样例；`primaryTopic` 迁移 |
| **C** | `writing-prompt-generator` 立项 → 实现 → ship |
| **D** | `midjourney-prompt-builder` 立项 → 实现 → ship |
| **E** | 可选 Hybrid CF AI 挂 S0（不增 URL） |

并行：C 与 D 可分批，但每 slug 仍须单独 `coverage:gate`。

---

## 7. 为何仍不做 Feedough 31 页

与 SERP 无关，因 **scaled content / doorway 产品风险**：

- 8 个模型 generator = 同表单换 title  
- 技法页 = 无独立交互场景  
- 视频等 = Planner 无词  

**3 场景页 + 1 通用页** 已覆盖本批 Planner 全部有证据场景（S0–S6）。

---

## 8. 实现检查

- [x] Topic id `ai-prompt-template-builder`
- [x] Slug 清单：9 工具（见 `work-tasks/ai-prompt-template-builder/03-cluster-slugs.md`）
- [x] 每 slug：`work-tasks/` + IG 表 + 自动样例 + AI 面板
- [x] Related 簇内互链  

---

## 9. Related

`prompt-template-builder` ↔ `writing-prompt-generator` ↔ `midjourney-prompt-builder`；  
外链：`chatgpt-export-to-markdown`、`json-schema-validator`。

---

## 10. 修订

| 日期 | 变更 |
| --- | --- |
| 2026-09-01 | 初稿 |
| 2026-09-01 | **用户：无需考虑 SERP** — 门禁改为场景+控件+IG；P1 写作/随机与图像均可排期；删 tier/周名额条件 |
