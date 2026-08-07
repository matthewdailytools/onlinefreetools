Date: 2026-08-07 11:22
Summary: Tool brief for PNG/JPEG/WebP/AVIF image format converter (direction A)

[question]
工具立项：格式转换 PNG/JPEG/WebP/AVIF

[try to solve]
已在 `work-tasks/image-format-converter/` 完成立项（尚未写页面代码）。

**主方向：A**（浏览器 JS · A.2 图片处理），不是 B 的平台规格图包线。
- slug：`image-format-converter` → `/tools/image-format-converter`
- 技术：Tier 0 Canvas `toBlob`，本地不上传；v1 不引 Squoosh
- 四格式同页选择目标格式；**不拆** `png-to-webp` 等近义 URL
- `02-tool-info.md` 状态 **`ready`**（IG：格式对照表、透明→JPEG 底色、编码/`blob.type` 回退检测、隐私、十语）
- `03-locale-briefs.md` 状态 **`briefs-ready`**（十语检索词与按钮说法已填）

实现前请明确说「按 brief 实现」；届时走 `tool-creation.mdc` + 母版一语 → 逐语重写 ≥3 轮。

[actions]
- Created work-tasks/image-format-converter/00-request.md
- Created work-tasks/image-format-converter/01-direction-discussion.md
- Created work-tasks/image-format-converter/02-tool-info.md (ready)
- Created work-tasks/image-format-converter/03-locale-briefs.md (briefs-ready)
