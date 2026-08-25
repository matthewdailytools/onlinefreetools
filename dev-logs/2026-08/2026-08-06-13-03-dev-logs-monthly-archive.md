Date: 2026-08-06 13:03
Summary: Moved dev-log markdown into `YYYY-MM` folders and updated the build to list entries by month.

[question]
将dev-log内容进行分月归档

[try to solve]
Moved all Markdown under `dev-logs/` into monthly directories:

- `dev-logs/2026-01/` (57 articles)
- `dev-logs/2026-06/` (1 article)
- `dev-logs/2026-07/` (2 articles)
- `dev-logs/2026-08/` (5 articles)

`index.html` and `viewer.html` stay at the `dev-logs/` root. Public URLs (`/devlogs/<filename>.html`) are unchanged.

Build: `scripts/build-site.mjs` recursively reads monthly folders; the index page groups by `YYYY-MM`.

Rules: `.cursor/rules/dev-logs.mdc` and `.github/copilot-instructions.md` paths updated to `dev-logs/YYYY-MM/`.

Ran `npm run build:logs` to refresh `public/devlogs/`.

[actions]
- `dev-logs/2026-{01,06,07,08}/*.md` (moved from root and day folders)
- `scripts/build-site.mjs`
- `scripts/site/i18n.mjs`
- `.cursor/rules/dev-logs.mdc`
- `.github/copilot-instructions.md`
- `public/devlogs/`
