Date: 2026-08-08 19:05
Summary: Implemented timezone-converter tool with Intl multi-zone UI and ten-locale i18n shards.

[question]
Implement timezone-converter for /Users/xuli/vscodeai/onlinefreetools. Read work-tasks/timezone-converter/02-tool-info.md and 03-locale-briefs.md. Create catalog shard, icon, page, ten i18n shards; mark 02 implemented, update 03, README zh+en. Do NOT merge:tools. Do NOT edit plan. Return file list when done.

[try to solve]
已实现 `timezone-converter` 全套分片：

- **Catalog**：`src/site/tool-catalog.d/timezone-converter.json`（developer、featured、related unix-timestamp/ip-address）
- **页面**：`src/pages/timezoneConverterPage.ts` — datetime-local + 源 IANA 下拉 + 多区 checkbox 对照表；Convert/Now/Load sample/Clear；进页自动样例 `2026-06-15T14:30` @ `America/Los_Angeles` → UTC/NY/London/Tokyo；DST gap 报错；References IANA TZDB + MDN Intl
- **图标**：`public/icons/tools/timezone-converter.svg`
- **i18n**：十语独立重写于 `src/site/i18n/tools/timezone-converter/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- **文档**：`02` → `implemented`；`03` → `i18n-done`；`README.md` 中英各一条

**未执行** `npm run merge:tools`（按请求）。上线前需 merge + `lint:seo` + `TOOL_SLUG=timezone-converter npm run lint:tool-isolation`。

[actions]
- src/site/tool-catalog.d/timezone-converter.json
- public/icons/tools/timezone-converter.svg
- src/pages/timezoneConverterPage.ts
- src/site/i18n/tools/timezone-converter/*.ts (×10)
- work-tasks/timezone-converter/02-tool-info.md
- work-tasks/timezone-converter/03-locale-briefs.md
- README.md
