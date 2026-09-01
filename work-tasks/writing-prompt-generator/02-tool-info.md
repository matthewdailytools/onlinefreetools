# 02 — 工具信息定稿

**状态**：`draft`  
**slug**：`writing-prompt-generator`  
**路径**：`/tools/writing-prompt-generator`  
**主方向**：B  
**YMYL**：否  
**Topic**：`ai-prompt-template-builder`（上线时挂 primaryTopic）

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| 写作 Prompt（对白/角色/剧本/大纲） | **是** | H1 |
| Random prompt generator | 同页芯片/模式 | absorb，不拆 URL |
| 调用 LLM 生成全文 | — | **有意不满足**（本地组装） |

---

## IG 预审（topic §4.2）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 规则 | 写作 Task 模板 + Random 种子写入 |
| 2 | 边界 | 随机不保证质量；对白 vs 大纲模式 |
| 3 | 对照 | vs `prompt-template-builder` 通用 builder |
| 4 | 样例 | 对白 / random 进页 `loadSample()` |

---

## 开发 / SEO 卡片（草稿）

| 字段 | 内容 |
|---|---|
| Title (en) / H1 | **Writing prompt generator** |
| Description 要点 | Writing + random prompt blocks; local assembly; paste into ChatGPT/Gemini/Claude/DeepSeek |
| Catalog `page.style` | **opts** |
| `localProcessing` | **true** |
| related | `prompt-template-builder`, `chatgpt-export-to-markdown` |
| 验收 | coverage 0b→4；verify:tool |

## 清单前检索覆盖优化

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 主检索词 → H1 | writing prompt generator |
| 次词 | random prompt generator → 同页芯片/FAQ |
| [ ] coverage:gate `--phase=0b` | 未跑 |

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | draft — 待 0b 绿后标 ready |
| 主任务 | 写作/随机 Prompt 进页即用并复制 |

## 交互规格（给实现用）

- 输入：写作维度字段 + Random 模式（种子/类型芯片）
- 输出：Markdown 或 JSON 写作 Prompt 块
- **进页样例**：`loadSample()` 写作对白预设
- DOM 前缀：待定（如 `wpg`）

## 页面模块清单

- [ ] 全部 — 待标 ready 后勾选
