# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`sketch-prompt-generator`  
**路径**：`/tools/sketch-prompt-generator`  
**主方向**：B  
**YMYL**：否  
**Topic**：`ai-prompt-template-builder`

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Sketch.app 操作 Prompt（AI 按步骤在 Sketch 里建稿/出图导出） | **是** | H1 |
| 铅笔/线稿文生图风格 Prompt | — | **有意不满足**（链到 `midjourney-prompt-builder`） |
| 通用四字段模板 | — | **有意不满足**（链到 `prompt-template-builder`） |
| 云端代写全文 / 代跑 Sketch 插件 | — | **有意不满足**（本页只组装可粘贴 Prompt） |

---

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-02 |
| slug | 保留 `sketch-prompt-generator`（用户确认意图枢轴：Sketch.app，非素描线稿） |
| 主检索词 → H1 | **Sketch.app prompt generator**（检索壳仍含 sketch prompt generator） |
| 次词 | Sketch Mac design prompt → desc；artboard / symbol / export steps → FAQ + Use cases；line-art sketch → FAQ 有意不满足→Midjourney |
| 用户习惯 | 搜 sketch prompt / Sketch.app 时要：目标稿 + Artboard + Symbol/样式 + 导出步骤 → 粘贴给 ChatGPT 等，让 AI 写出可在 Sketch.app 执行的操作说明 |
| 优化摘要 | H1 钉 **Sketch.app** 消歧；字段从 medium/stroke 改为 goal/artboard/symbols/export；related 改产品设计簇；线稿意图 FAQ 划界 |
| [x] coverage:gate 0b | 2026-09-02（意图枢轴后重跑） |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-02 |
| 总判 | **满足**（用户明确要求第一种：Prompt 让 AI 操作 Sketch.app 出图/导出） |
| 主任务 | 组装「在 Sketch.app 里建 Artboard / Symbol / 导出」的可粘贴 Prompt |
| 超出 / 边界 | 不运行 Sketch、不代写插件、不调用 ChatGPT API；可选 CF AI 仅扩写/润色文本 |
| [x] 已回写 How / FAQ / desc | |

## Ads / Keyword Planner 长尾

| 项 | 说明 |
|---|---|
| 来源 | `docs/seo/keywords/prompt-builder/2026-09-01-prompt-builder-keyword-planner.md` 原将本词放在 **S1 图像·线稿** |
| 处理 | **产品意图枢轴**（站长确认）：功能与文案改为 Sketch.app；原线稿任务 **有意不满足**，FAQ 指向 Midjourney 页 |
| 功能覆盖 | goal / artboard / symbols / export 四字段可完成「让 AI 写出 Sketch 操作步骤」 |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) / H1 | **Sketch.app prompt generator — Local + Optional AI** |
| `localProcessing` | **true**（可选 AI 须 consent + Turnstile） |
| `page.style` | **opts** |
| `primaryTopic` | **ai-prompt-template-builder** |
| related | `product-design-prompt-builder`, `prompt-template-builder`, `midjourney-prompt-builder` |
| DOM 前缀 | `skg` |

## 交互规格

- 字段：`goal`（交付物）、`artboard`（画板/尺寸）、`symbols`（Symbol / Shared Style / Library）、`export_ops`（导出与交接步骤）
- 输出：Markdown（Role/Task/Constraints/Output）或 JSON
- Role 固定为「Sketch.app 操作助手」口吻（非文生图像素描）
- **进页样例**：`loadSample()` 默认预设（登录屏 Artboard + Symbol + PNG/PDF 导出）
- 可选 AI：Expand/Polish + Turnstile（共享 promptAiPanel）

## 页面模块清单

- [x] H1 + 首屏交互 + loadSample
- [x] How / Rules / Example / Use cases / FAQ / Related / References
- [x] Optional AI panel + Turnstile

## 复审修正（2026-09-05）

- catalog `localProcessing` 改为 `false`：可选 Expand/Polish 会经 Turnstile 把正文 POST 到 Workers AI，首页不得再标「不上传」。
- AI 回写改为整段 Markdown（不再只取首行）。
- Turnstile 校验绑定 `hostname` + `action={slug}-ai`。
- 十语清理英文残留/西语污染；How 去掉「进页已自动跑样例」元叙事，改为可执行的 Load sample 动作。
