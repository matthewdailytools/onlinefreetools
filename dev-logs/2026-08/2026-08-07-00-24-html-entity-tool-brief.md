Date: 2026-08-07 00:24
Summary: Created work-tasks brief for HTML entity encode/decode tool (slug html-entity).

[question]
立项：HTML 实体编解码

[try to solve]
已在 `work-tasks/html-entity/` 完成立项文档，状态 `ready` / `briefs-ready`，可直接进入实现。

**结论摘要**
- **slug**：`html-entity`（`/tools/html-entity`）
- **主方向**：A（文本与文档格式 · Tier 0）
- **形态**：Encode / Decode 同页 Tab，不拆 encoder/decoder 近义 URL
- **技术**：默认零依赖原生编解码；可选 lazy `he` 补全 HTML5 命名实体
- **IG 增量**：编码范围对照（minimal / non-ASCII / all）、命名 vs 数字实体、双重编码、属性 vs 文本节点、无效实体 strict/lenient
- **Related**：`markdown-to-html`、`text-diff`

**文档**
- `00-request.md` — 用户原话
- `01-direction-discussion.md` — 主方向 A + 红线
- `02-tool-info.md` — IG 预审 + 交互规格 + SEO 卡片（`ready`）
- `03-locale-briefs.md` — 十语检索 brief（`briefs-ready`）

下一步：确认后按 `tool-creation.mdc` 实现页面与十语 i18n。

[actions]
- Added `work-tasks/html-entity/00-request.md`
- Added `work-tasks/html-entity/01-direction-discussion.md`
- Added `work-tasks/html-entity/02-tool-info.md`
- Added `work-tasks/html-entity/03-locale-briefs.md`
