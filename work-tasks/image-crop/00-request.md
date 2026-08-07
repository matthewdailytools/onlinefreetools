# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项：图片尺寸裁剪

## 已知约束（若有）

- 参考现有工具：方向文档 A.2「压缩/缩放/裁剪」Canvas；已上线 `image-format-converter`、`image-exif`、`image-compress`（catalog `image`）
- 必须本地处理：是（文件类默认；不上传）
- YMYL：否
- 优先语言：十语（母版 en）；sitemap 默认仅 en/zh 收录，其它语仍生成
- 其他：通用裁剪/改尺寸（自由框选、比例预设、指定宽高），**不**绑 Amazon / App Store 等平台规格包（方向 B 的 `amazon-image-resizer`、`ios-app-screenshot-resizer` 等另立项）；与 `image-compress` 分工——本页主目标是**像素构图与输出尺寸**，不是目标文件 KB

## 建议 slug（可空，由讨论阶段拟定）

- `image-crop`
