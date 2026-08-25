Date: 2026-08-08 15:15
Summary: Fixed json-schema-validator samples: literal \\n broke JSON.parse; use compact JSON and pretty-print on load.

[question]
http://localhost:8788/zh/tools/json-schema-validator 出错，结果输出框没有数据，另外“JSON Schema"上面显示红色字"Schema 不是合法 JSON（或编译失败）。 Expected property name or '}' in JSON at position 1 (line 1 column 2)”；最后：JSON Schema和实例 JSON 框为什么会有 "\n"字符

[try to solve]
Root cause: ten-locale i18n samples used `\\n` (literal `\`+`n`). Textareas showed visible `\n`, `JSON.parse` failed at position 1, and the result area stayed empty.

Fix: samples are valid compact JSON; on load, pretty-print with `JSON.stringify(..., null, 2)`; ran `merge:tools`. Hard-refresh the page to verify.

[actions]
- Updated `src/site/i18n/tools/json-schema-validator/{10 langs}.ts` sample/placeholder keys
- Updated `src/pages/jsonSchemaValidatorPage.ts` (`prettyJson` on loadSample)
- Ran `npm run merge:tools`
