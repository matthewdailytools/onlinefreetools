Date: 2026-08-08 18:21
Summary: Added IndexNow incremental submit via local state file and optional --since-git mapping.

[question]
indexnow增加实现增量推送功能

[try to solve]
Added incremental submit in `ops/seo/submit-indexnow.mjs`:

1. **State file** `.run/indexnow-state.json` (gitignore): records URLs successfully submitted.
2. **`--incremental`**: candidate URLs minus those already in state, then POST; write state back on success.
3. **`--baseline`**: write currently collected URLs into state without POST (avoids a full re-push after cold start).
4. **`--since-git <ref>`**: map `git diff ref...HEAD` tool/page changes → multilingual URLs; when used alone, does not pull the full sitemap.
5. **`--reset-state` / `--state-file` / `--no-save-state`**.
6. npm scripts: `indexnow:incremental`, `indexnow:baseline`, `indexnow:since-git`; docs synced in `ops/README.md`, `docs/SEO_PUBLISH_CHECKLIST.md`.

Checks: `--baseline --remote-sitemap` wrote 420; then `--incremental` pending=0; `--since-git HEAD~3 --dry-run` expands changed-tool URLs.

[actions]
- ops/seo/submit-indexnow.mjs
- ops/seo/submit-indexnow.sh
- package.json
- ops/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
