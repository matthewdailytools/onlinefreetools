# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按表格逐一立项和创建工具。

（同会话前置约束，须一并遵守）

- 批量不是在已有单文件页上加 `multiple`；每个批量作业独立工具、独立 IG、独立 slug。
- slug 只含 **一个** 选型词：`bulk` 或 `batch`。
- 本表行：`bulk-convert-images-to-webp` / H1 **Bulk convert images to WebP**。
- **有损质量 + 可保透明**（与 JPG 垫底、PNG 无损都不同）。
- 不得当唯一转换页；页内无格式下拉改 JPG/PNG。
- FAQ 写邮件客户端/部分 CMS 不认 WebP。
- related 只链已上线：`image-format-converter`、`image-compress`。

## 已知约束（若有）

- 参考现有工具：`image-format-converter`；ZIP `fflate`
- 必须本地处理：是
- YMYL：否
- 优先语言：十语（母版 en）
- 其他：无 Planner。进页 `loadSample()`。`page.style: opts`。约 20、串行、失败跳过、成功 ZIP。WebP 不支持则该行失败，不偷偷改成 JPEG。

## 建议 slug（可空，由讨论阶段拟定）

- `bulk-convert-images-to-webp`
