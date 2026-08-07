Date: 2026-08-07 13:08
Summary: Create work-tasks brief for local image compressor (direction A).

[question]
工具立项：图片压缩

[try to solve]
已在 `work-tasks/image-compress/` 完成立项文档：

- **主方向 A**（A.2；与方向 B 平台规格图包分工：本页为通用压缩，不绑 Amazon 等合规表）
- **slug**：`image-compress`；catalog 分类 `image`；不拆 compress-jpg / reduce-image-size 等近义薄页
- **技术**：Tier 0 Canvas（最长边 + 质量 + 可选目标体积迭代）；可选 Tier 1 `browser-image-compression`；不做 Squoosh
- **Related 计划**：`image-format-converter`、`image-exif`
- `02` 状态 `ready`；`03` 十语 brief `briefs-ready`（实现前）

未改 `src/`；待用户明确要求实现后再按 `tool-creation.mdc` 落地。

[actions]
- Created `work-tasks/image-compress/00`–`03`
