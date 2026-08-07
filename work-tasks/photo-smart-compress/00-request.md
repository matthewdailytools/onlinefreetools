# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项：照片图片智能压缩

## 已知约束（若有）

- 参考现有工具：方向文档 A.2「智能压缩」`browser-image-compression`；已上线 `image-compress`（质量 / 最长边 / 目标体积）、`image-format-converter`、`image-exif`、`image-crop`
- 必须本地处理：是（文件类默认；不上传）
- YMYL：否
- 优先语言：十语（若新建；本夹结论为不新建）
- 其他：用户用语含「照片」「智能」；需与通用「图片压缩」及方向 B 平台规格包区分，并判断是否构成独立 slug

## 建议 slug（可空，由讨论阶段拟定）

- 讨论前候选：`photo-smart-compress` / `smart-image-compress`
- **讨论后**：不注册新 slug → 映射既有 `image-compress`
