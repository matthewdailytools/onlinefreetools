Date: 2026-08-06 17:29
Summary: Initiated HTML↔Markdown as bidirectional enhancement of existing markdown-to-html (no thin new slug).

[question]
立项“HTML 转Markdown”，可以与目前的Markdown → HTML 合并

[try to solve]
已立项：在 `work-tasks/markdown-to-html/` 落文档，主方向 A，**增强现有** `/tools/markdown-to-html`，同页 Tab 做 MD→HTML | HTML→MD，**不**新建 `html-to-markdown` 薄页（对齐 B7 / 长尾一带多场景）。

| 文件 | 内容 |
|---|---|
| `00-request.md` | 用户原话与约束 |
| `01-direction-discussion.md` | 主方向 A；`turndown` + 现有 `marked`/`DOMPurify` |
| `02-tool-info.md` | 状态 `ready`；IG ≥3；交互规格（Tab、边界、往返损失） |
| `03-locale-briefs.md` | 十语检索 brief（`briefs-ready`；实现时 ≥3 轮） |

技术：CDN/`turndown`（Tier 1）；粘贴本地处理。Title 方向覆盖双向主词。Related 计划：`text-diff`、`website-headers`。

下一步：你确认后按 `tool-creation.mdc` 改页面与十语（按 `03` brief 重写，非直译）。

[actions]
- Added: `work-tasks/markdown-to-html/00-request.md`
- Added: `work-tasks/markdown-to-html/01-direction-discussion.md`
- Added: `work-tasks/markdown-to-html/02-tool-info.md`
- Added: `work-tasks/markdown-to-html/03-locale-briefs.md`
