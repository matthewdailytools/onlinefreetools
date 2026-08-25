Date: 2026-08-08 19:35
Summary: Added title/coverage lint gate and rewrote tools 18–24 titles for search habit.

[question]
加这类 lint 门禁，并补跑 18–24 的实质覆盖优化

[try to solve]
1) Lint gate: added `scripts/lib/title-coverage-heuristics.mjs` + `scripts/validate-tool-title-coverage.mjs`, wired into `npm run lint:seo`. Rules: param-enumeration H1 FAIL for tools with a pre-checklist coverage section or forced slug list (18–24); older tools COVER-WARN only; sectioned `02` must fill coverage tables and `03` must check pre-checklist coverage. Rules docs synced (tool-i18n-localization / tool-i18n-seo / tool-creation).

2) Substantive coverage: seven tools × ten locales titles shifted to result/scenario (dropped MD5/UTF-8/sec-ms catalog subtitles); wrote back 02 coverage optimization notes and 03 step 2/4 rows; fixed too-short zh descriptions. `lint:seo` exit 0; already ran `build:site`.

Leftover: ~15 older-tool title COVER-WARNs (e.g. image-compress, yaml-json)—address when those tools are next edited.

[actions]
- scripts/lib/title-coverage-heuristics.mjs
- scripts/validate-tool-title-coverage.mjs
- scripts/validate-tool-seo.mjs
- src/site/i18n/tools/{jwt-decoder,file-hash,base64,uuid-generator,password-generator,unix-timestamp,timezone-converter}/*
- work-tasks/{same}/02–03
- .cursor/rules/tool-i18n-localization.mdc, tool-i18n-seo.mdc, tool-creation.mdc
- npm run merge:tools && npm run lint:seo && npm run build:site
