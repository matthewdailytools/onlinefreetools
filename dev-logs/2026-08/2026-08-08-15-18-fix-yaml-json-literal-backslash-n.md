Date: 2026-08-08 15:18
Summary: Fixed yaml-json (and other tools) literal \\n samples; corrected locale parse/escape in tool-modules lib.

[question]
http://localhost:8788/zh/tools/yaml-json 也有类似错误

[try to solve]
Same class of bug as JSON Schema: structure-layer split/merge wrote sample newlines as literal `\\n`. Fixed `parseLocaleDict` / `escapeSingleQuoted`; batch-corrected ten-locale shards for yaml-json / csv-json / text-diff / markdown-to-html; `yamlJsonPage` normalizes again on sample load; after `merge:tools`, page samples use real newlines.

Hard-refresh `/zh/tools/yaml-json` to verify.

[actions]
- Updated `scripts/tool-modules/lib.mjs`, `src/pages/yamlJsonPage.ts`, i18n tools shards (40 files), ran `merge:tools`
