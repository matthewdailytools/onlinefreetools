Date: 2026-08-08 15:18
Summary: Fixed yaml-json (and other tools) literal \\n samples; corrected locale parse/escape in tool-modules lib.

[question]
http://localhost:8788/zh/tools/yaml-json 也有类似错误

[try to solve]
与 JSON Schema 相同：结构层 split/merge 把样例里的换行写成了字面 `\\n`。已修复 `parseLocaleDict` / `escapeSingleQuoted`；批量修正 yaml-json / csv-json / text-diff / markdown-to-html 十语分片；`yamlJsonPage` 载入样例时再规范化；`merge:tools` 后页面样例为真换行。

请硬刷新 `/zh/tools/yaml-json` 验证。

[actions]
- Updated `scripts/tool-modules/lib.mjs`, `src/pages/yamlJsonPage.ts`, i18n tools shards (40 files), ran `merge:tools`
