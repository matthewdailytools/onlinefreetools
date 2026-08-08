# 规则对照核查（2026-08-08）

## A. Brief / 方向（work-tasks-tool-brief）

- [x] 00–03 齐全；`02` 曾为 `ready`，现为 `implemented`
- [x] 仅主方向 B；work-tasks 无源码
- [x] `03` 非空后写十语；≥3 轮记录已填；状态 `i18n-done`

## B. 工程隔离（tool-creation 结构层）

- [x] 本工具：`tool-catalog.d/json-schema-validator.json`、`i18n/tools/json-schema-validator/`、`jsonSchemaValidatorPage.ts`、icon、brief、README
- [x] 反向 related：`yaml-json` / `csv-json` 追加本 slug（`CROSS_TOOL_UPDATE=1`）
- [x] 顺带修注册路径：`marginalRevenuePage`、`indexNowPage` + `lib.mjs` overrides（结构层可运行性）
- [x] 未手改生成物逻辑（仅 `merge:tools` 刷新）
- [x] `CROSS_TOOL_UPDATE=1 TOOL_SLUG=json-schema-validator npm run lint:tool-isolation` OK
- [x] `npm run lint:seo` OK

## C. 页面 / SEO

- [x] H1、交互区、How/Rules、Example、Use cases×3、FAQ≥5、Related≥2、References≥1
- [x] 进页默认失败样例 + `validate()`（Ajv 8.17.1 ESM）
- [x] JSON-LD 经 `buildToolJsonLd`；无虚假评分
- [x] 冒烟：`/tools/json-schema-validator`、`/zh/tools/json-schema-validator` → 200

## D. 卡片 A1

- [x] 双面板 + JSON Pointer 错误列表
- [x] draft-07 说明 + json-schema.org / Ajv / RFC 8259
- [x] 合法 + 失败双示例按钮；进页失败例
- [x] AI / feed / API Use cases
