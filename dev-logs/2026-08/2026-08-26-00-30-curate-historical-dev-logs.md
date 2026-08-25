Date: 2026-08-26 00:30
Summary: Curated historical dev logs: archived 58 git-ops posts, skipped _dirs in build, purged orphan HTML.

[question]
梳理历史的日志

[try to solve]
Applied the new relevance screen to existing `dev-logs/` without mass-rewriting keepers (avoids scaled thin / unedited AI translation spam).

**Archived (58 posts → `dev-logs/_archive/YYYY-MM/`):** pure `git add` / `commit` / `push` Q&As and one leftover meta-log. Manifest: `dev-logs/_curation/2026-08-26-archive-manifest.json`. Source files kept for audit; not deleted.

**Still published (587):** substantive notes (tool work, SEO/i18n decisions, debugging). Historical Chinese bodies left as-is; new logs stay English-only. Filename tokens like `commit`/`push` remain only when the post itself has reusable content (e.g. deploy vs Wrangler, IndexNow incremental).

**Build:** `collectDevLogMarkdownFiles` skips `_`-prefixed dirs; `buildDevLogs` removes orphan `public/devlogs/*.html` after regenerate. Ran `npm run build:logs` — published HTML count matches 587 sources.

[actions]
- moved 58 logs → `dev-logs/_archive/`
- `dev-logs/_archive/README.md`
- `dev-logs/_curation/2026-08-26-archive-manifest.json`
- `.cursor/rules/dev-logs.mdc` (historical curation + `_` skip)
- `scripts/build-site.mjs` (skip `_` dirs; purge orphans; English index description)
- `npm run build:logs`
