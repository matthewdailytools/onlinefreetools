# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项 CSV ↔ JSON

## 已知约束（若有）

- 参考现有工具：`yaml-json`（同为数据交换双向转换器、同页双向 Tab、不拆反向薄页）；`markdown-to-html`（双向同页范式）；`text-diff`（转换前后对照）
- 方向文档定位：A「浏览器 JS 能力」候选（`papaparse` + `csv-stringify`，Tier 1，"类型推断需说明"）；B「表数据互通」`csv-json`（场景 B2/B4，1→1，P1）；卡片 [B2 CSV ↔ JSON（产品 feed）](../../docs/2026-07-28-per-tool-dev-seo-plans.md)
- 必须本地处理：是（粘贴/上传内容不离开浏览器）
- YMYL：否
- 优先语言：10 语全量（实现阶段按 `tool-i18n-localization.mdc` 稳妥常态）
- 其他：先立项文档；**同页双向**（`CSV → JSON` / `JSON → CSV` Tab），不拆 `json-to-csv` 近义薄页；slug 对齐卡片 `csv-json`

## 建议 slug（可空，由讨论阶段拟定）

- `csv-json`
