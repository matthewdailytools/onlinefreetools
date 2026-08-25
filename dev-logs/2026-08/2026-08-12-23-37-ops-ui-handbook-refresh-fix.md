Date: 2026-08-12 23:37
Summary: Fix Ops UI handbook dropdown not refreshing; restart UI so Worker+R2 doc appears.

[question]
ops ui的页面运维手册上没有刷新到上述运维手册

[try to solve]
Causes: (1) Ops UI process was not restarted, so the whitelist was still the old `HANDBOOK_DOCS`; (2) the frontend only filled the dropdown when `select.options.length===0`, so refreshing body text never updated the doc list.

Fix: `sitemap-ui.html` now syncs the dropdown from the server `docs` list on every `loadHandbook`; relative `.md` links inside a handbook can switch docs. Restarted Ops UI on 8791. Dropdown should include “Worker + R2 ops”; default README body already mentions `verify:r2` / `npm run deploy`.

[actions]
- ops/seo/sitemap-ui.html (syncHandbookSelect + md-link switching)
- Restarted local Ops UI on :8791
