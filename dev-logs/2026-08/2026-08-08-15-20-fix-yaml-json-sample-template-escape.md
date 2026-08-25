Date: 2026-08-08 15:20
Summary: Fixed yaml-json empty sample: normalizeSample regex inside TS template literal broke the inline script.

[question]
http://localhost:8788/zh/tools/yaml-json 没有样例

[try to solve]
Cause: inside the `extraBodyHtml` template string, `.replace(/\\n/g, '\n')` became an illegal cross-line string in the generated page, so the whole script failed to parse and samples never filled. Removed `normalizeSample` and use the already-fixed i18n samples directly. Hard-refresh to verify.

[actions]
- Updated `src/pages/yamlJsonPage.ts` (removed in-template normalizeSample)
