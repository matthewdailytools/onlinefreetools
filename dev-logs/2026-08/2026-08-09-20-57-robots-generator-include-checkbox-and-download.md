Date: 2026-08-09 20:57
Summary: Completed robots-txt-generator interaction spec: per-agent include checkboxes, hint copy, and robots.txt download (three new keys across 10 locales).

[question]
http://localhost:8788/zh/tools/robots-txt-generator 逻辑不对，没有对应的选择项，没有下载功能

[try to solve]
Root cause: `02-tool-info.md` required “include/add User-agent” plus output copy, but the UI only rendered every preset agent (no checkboxes) and only a copy button. Spec filled in:

1. Include checkboxes: each agent block gets “Include this User-agent” (`agent-include`). On load, all seven presets render (Googlebot/Bingbot/GPTBot/ClaudeBot/Google-Extended/CCBot/PerplexityBot); only Googlebot (Allow /) and GPTBot (Disallow /) are checked by default so initial output matches the H2 Example; others are visible and optional. Generate emits only checked groups.
2. Hint: under the agent label, “Check the crawlers to include…”.
3. Download: output “Download” button; Blob saves `robots.txt` (`text/plain`).

i18n: three keys × 10 locales — `tool_robots_include` / `tool_robots_agents_hint` / `tool_robots_download`.

Verification: template-escape scan clean; tool script syntax OK; DOM mock — 7 blocks on load, only Googlebot/GPTBot checked, Generate emits checked groups only, all-checked yields 7 groups, Download → robots.txt; 10-locale keysets match (48 keys); 119 tool-page scripts pass; build:site / lint:seo green.

[actions]
- src/pages/robotsTxtGeneratorPage.ts (checkboxes + hint + download + JS filter)
- src/site/i18n/tools/robots-txt-generator/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts (3 keys)
- work-tasks/robots-txt-generator/03-locale-briefs.md (interaction-enhance round)
- Commands: npm run merge:tools, npm run build:site, npm run lint:seo
