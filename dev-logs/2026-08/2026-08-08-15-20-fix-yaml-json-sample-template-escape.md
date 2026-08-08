Date: 2026-08-08 15:20
Summary: Fixed yaml-json empty sample: normalizeSample regex inside TS template literal broke the inline script.

[question]
http://localhost:8788/zh/tools/yaml-json 没有样例

[try to solve]
原因：在 `extraBodyHtml` 模板字符串里写了 `.replace(/\\n/g, '\n')`，生成到页面时变成非法的跨行字符串，整段脚本语法错误，样例无法填入。已去掉 `normalizeSample`，直接使用已修好的 i18n 样例。请硬刷新验证。

[actions]
- Updated `src/pages/yamlJsonPage.ts`（移除模板内 normalizeSample）
