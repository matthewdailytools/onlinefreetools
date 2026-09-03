# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按表格逐一立项和创建工具。

（同会话前置约束，须一并遵守）

- 批量不是在已有单文件页上加 `multiple`；每个批量作业独立工具、独立 IG、独立 slug。
- slug 只含 **一个** 选型词：`bulk` 或 `batch`。
- 本表行：`bulk-convert-images-to-png` / H1 **Bulk convert images to PNG**。
- **保 alpha**；禁止套用 JPG 垫底控件。
- 无损导致体积往往变大：报告里写「比原 JPEG 更大」警告。
- 动画 GIF 只取第一帧并标明。
- 页内**无**输出格式切换（避免三页同一套下拉）。
- related 只链已上线：`image-format-converter`、`image-compress`。

## 已知约束（若有）

- 参考现有工具：`image-format-converter`；ZIP `fflate`
- 必须本地处理：是
- YMYL：否
- 优先语言：十语（母版 en）
- 其他：无 Planner。进页 `loadSample()`。`page.style: opts`。约 20 文件、串行、失败跳过、成功 ZIP。与 `bulk-compress-png-images` 划界：本页是改成 PNG，那页是 PNG 变小。

## 建议 slug（可空，由讨论阶段拟定）

- `bulk-convert-images-to-png`
