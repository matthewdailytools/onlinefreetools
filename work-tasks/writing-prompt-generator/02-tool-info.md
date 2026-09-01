# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`writing-prompt-generator`  
**路径**：`/tools/writing-prompt-generator`  
**主方向**：B  
**YMYL**：否  
**Topic**：`dev-data`（topic hub 上线后迁 `ai-prompt-template-builder`）

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| 写作 Prompt（对白/角色/剧本/大纲） | **是** | H1 |
| Random prompt generator | 同页 Random 模式 | absorb，不拆 URL |
| 调用 LLM 生成全文 | — | **有意不满足**（本地组装） |

---

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-02 |
| slug | `writing-prompt-generator` |
| 主检索词 → H1 | **Writing prompt generator** |
| 次词 | random prompt generator → Random 模式芯片 + FAQ q4；dialogue/character/script → 模式芯片 + desc |
| 用户习惯 | 搜 writing/random prompt generator 要进页即用字段或随机 → 默认 Dialogue 样例 + Random roll |
| 优化摘要 | H1 锁定 Writing prompt generator；random absorb 同页；vs prompt-template-builder FAQ 划界 |
| [x] coverage:gate 0b | 2026-09-02 |

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-02 |
| 总判 | **满足**：对白/角色/剧本/随机四模式 + 进页样例 + 复制 |
| 主任务 | 写作/随机 Prompt 本地组装并粘贴到 ChatGPT 等 |
| 超出 / 边界 | 不代写全文、不调用模型、random 不承诺质量 |
| [x] 已回写 How / FAQ / desc | |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) / H1 | **Writing prompt generator** |
| `localProcessing` | **true** |
| `page.style` | **opts** |
| related | `prompt-template-builder`, `chatgpt-export-to-markdown` |
| DOM 前缀 | `wpg` |

## 交互规格

- 模式：Dialogue / Character / Script / Random
- 输出：Markdown（Role/Task/Constraints/Output）或 JSON
- **进页样例**：`loadSample()` 对白预设
- Random：可选 seed + Roll random

## 页面模块清单

- [x] H1 + 首屏交互 + loadSample
- [x] How / Rules / Example / Use cases / FAQ / Related / References
