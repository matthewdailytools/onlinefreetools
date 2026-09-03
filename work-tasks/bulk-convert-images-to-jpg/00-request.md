# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按表格逐一立项和创建工具。

（同会话前置约束，须一并遵守）

- 批量不是在已有单文件页上加 `multiple`；每个批量作业独立工具、独立 IG、独立 slug。
- slug 只含 **一个** 选型词：`bulk` 或 `batch`（按搜法，不是近义堆砌）；落选词只进 FAQ。
- 禁止一个万能转换页用芯片改 JPEG/PNG/AVIF；按**输出格式**拆独立 slug。
- 本表行：`bulk-convert-images-to-jpg` / H1 **Bulk convert images to JPG**。
- **转换优先**：进页即 JPEG；透明输入必须整批同一垫底（白/黑/自定义），否则拒绝并记失败。
- 扩展名统一 `.jpg`（搜 jpeg 只进 FAQ，不拆第二 URL）。
- HEIC/PNG→JPG 作为本页场景芯片，**不**另开 `heic-to-jpg` / `png-to-jpg` 批量页。
- related 只链已上线 catalog slug：`image-format-converter`、`image-compress`。

## 已知约束（若有）

- 参考现有工具：`image-format-converter`（单张改格式）；ZIP 对齐 `fflate.zipSync`
- 必须本地处理：是
- YMYL：否
- 优先语言：十语（母版 en）
- 其他：无 Keyword Planner / SERP 本主题，不得标 `long_gap`。进页 `loadSample()`。`page.style: opts`。队列约 20、串行、失败跳过、成功打 ZIP。浏览器解不出的 HEIC 记失败行，不中止整批。

## 建议 slug（可空，由讨论阶段拟定）

- `bulk-convert-images-to-jpg`
