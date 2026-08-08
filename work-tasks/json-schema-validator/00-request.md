# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

用一个工具重新跑全流程，立项和实现：JSON Schema 校验器；然后核查对比规则是否一一匹配和认真实现。

## 已知约束（若有）

- 参考现有工具：`yaml-json` / `csv-json`（双栏 + CDN）；结构层分片（`tool-catalog.d` / `i18n/tools`）
- 必须本地处理：是
- YMYL：否
- 优先语言：十语（en 母版）
- 其他：slug 与清单一致为 `json-schema-validator`；Ajv draft-07；进页 `loadSample`；规则对照验收

## 建议 slug（可空，由讨论阶段拟定）

- `json-schema-validator`
