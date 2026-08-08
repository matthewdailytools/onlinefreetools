Date: 2026-08-08 15:03
Summary: Shipped json-schema-validator end-to-end: briefs 00–03, Ajv page, ten-locale shards, merge/registry fixes, and rule audit.

[question]
JSON Schema 校验器：立项 + 实现 + 规则核查

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

[try to solve]
已完成 `json-schema-validator` 全流程。

**立项**：`work-tasks/json-schema-validator/`（00–03；主方向 B；`02`→`implemented`；`03`→`i18n-done`；核查见 `notes.md`）。

**实现**：
- 页面 `src/pages/jsonSchemaValidatorPage.ts`：双栏 Schema/Instance，Ajv **8.17.1**（jsDelivr ESM），进页失败样例自动校验，JSON Pointer 错误列表
- 分片 catalog + 十语 `i18n/tools/json-schema-validator/`
- 图标、README 中英条目
- Related：本工具 → yaml-json / csv-json；反向追加进 yaml-json、csv-json
- `merge:tools` 注册 33 工具

**结构层修复（为可启动）**：catalog/`lib.mjs` 修正 `marginalRevenuePage`、`indexNowPage`/`renderIndexNowPage` 路径与导出名。

**验收**：`lint:seo` OK；`CROSS_TOOL_UPDATE=1` isolation OK；`/tools/json-schema-validator` 与 `/zh/...` 200。

[actions]
- Added work-tasks/json-schema-validator/*, src/pages/jsonSchemaValidatorPage.ts, tool-catalog.d/json-schema-validator.json, i18n/tools/json-schema-validator/{10 langs}, public/icons/tools/json-schema-validator.svg
- Updated yaml-json/csv-json related; indexnow + marginal-revenue page wiring; scripts/tool-modules/lib.mjs; README.md; ran merge:tools
