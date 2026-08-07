# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

工具立项：图片压缩

## 已知约束（若有）

- 参考现有工具：方向文档 A.2「压缩/缩放」与「智能压缩」`browser-image-compression`；已上线 `image-format-converter`、`image-exif`（同属 catalog `image`）
- 必须本地处理：是（文件类默认；不上传）
- YMYL：否
- 优先语言：十语（母版 en）
- 其他：通用压缩（质量 / 最长边 / 目标体积），**不**绑 Amazon 等平台规格表（那是方向 B 的 `amazon-image-resizer` 等）；不与「仅换 title 的 online image compressor」空壳混淆——本页须有可验证规则与边界

## 建议 slug（可空，由讨论阶段拟定）

- `image-compress`
