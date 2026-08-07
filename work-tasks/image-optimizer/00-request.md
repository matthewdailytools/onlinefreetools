# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项：图片高级编解码 （这个名称不太像seo用户搜索名称，需要根据用户搜索习惯确定）

## 已知约束（若有）

- 参考现有工具：方向文档 A.2「高级编解码｜`@squoosh/lib` WASM｜Tier 2」；已上线/立项的 `image-compress`（Canvas 压缩）、`image-format-converter`（Canvas 格式互转）均明示 **v1 不做** Squoosh
- 必须本地处理：是（文件类默认；不上传；WASM 在本机跑）
- YMYL：否
- 优先语言：十语（母版 en 或 zh）
- 其他：
  - 「高级编解码」是方向表技术别名，**不是**用户检索主词；命名须按搜索习惯另定
  - 与 `image-compress` / `photo-smart-compress`（已判定不新建）必须能讲清增量，否则易成 doorway

## 建议 slug（可空，由讨论阶段拟定）

- `image-optimizer`（**已确认**；对外主词 Image Optimizer / 图片优化）
