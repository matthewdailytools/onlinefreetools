# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`product-design-prompt-builder`  
**路径**：`/tools/product-design-prompt-builder`  
**主方向**：B  
**YMYL**：否  
**Topic**：`ai-prompt-template-builder`

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Product design prompt builder | **是** | H1 |
| 通用四字段模板 | — | **有意不满足**（链到 prompt-template-builder） |
| 云端代写全文 | — | **有意不满足** |

---

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-02 |
| slug | 保留 `product-design-prompt-builder` |
| 主检索词 → H1 | **Product design prompt builder** |
| 次词 | UX wireframe prompt → use case 1; design tokens → rules_item_2 |
| 用户习惯 | 搜 product design prompt builder 要进页即用字段 + 样例 + 本地组装 |
| 优化摘要 | H1 锁定 Product design prompt builder — Local + Optional AI；次词落 desc/FAQ/use cases；vs prompt-template-builder FAQ 划界 |
| [x] coverage:gate 0b | 2026-09-02 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-02 |
| 总判 | **满足**：场景字段 + 进页样例 + 本地组装 + 可选 AI/Turnstile |
| 主任务 | product design prompt builder 本地组装并粘贴到 ChatGPT 等 |
| 超出 / 边界 | 不代写全文、不调用 ChatGPT API；AI 可选且 rate-limited |
| [x] 已回写 How / FAQ / desc | |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) / H1 | **Product design prompt builder — Local + Optional AI** |
| `localProcessing` | **true**（可选 AI 须 consent + Turnstile） |
| `page.style` | **opts** |
| `primaryTopic` | **ai-prompt-template-builder** |
| related | `prompt-template-builder`, `android-prompt-builder`, `ios-prompt-builder` |
| DOM 前缀 | `pdb` |

## 交互规格

- 字段：persona, problem, wireframe_scope, design_tokens
- 输出：Markdown（Role/Task/Constraints/Output）或 JSON
- **进页样例**：`loadSample()` 默认预设
- 可选 AI：Expand/Polish + Turnstile（共享 promptAiPanel）

## 页面模块清单

- [x] H1 + 首屏交互 + loadSample
- [x] How / Rules / Example / Use cases / FAQ / Related / References
- [x] Optional AI panel + Turnstile
