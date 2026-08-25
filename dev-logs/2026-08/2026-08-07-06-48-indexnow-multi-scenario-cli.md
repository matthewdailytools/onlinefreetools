Date: 2026-08-07 06:48
Summary: Expanded the IndexNow CLI with tool/lang/path/home/check-key and other scenario flags.

[question]
npm run indexnow 创建一个脚本，适配各种场景参数

[try to solve]
Rewrote `scripts/submit-indexnow.mjs` for multi-scenario flags; added npm shortcuts `indexnow:check` / `indexnow:help`. Docs updated in `ops/README.md` and the SEO checklist.

Main flags: `--tool` / `--lang` / `--path` / `--home` / `--about` / `--url` / `--urls-file` / `--from-sitemap` / `--include` / `--exclude` / `--check-key` / `--require-live-key` / `--dry-run` / `--endpoint` / `--limit` / `--verbose`, and related options.

Checks: `--tool html-entity` expands to 10 locales; `--check-key` now returns HTTP 200 with bodyMatch=true.

[actions]
- scripts/submit-indexnow.mjs
- package.json
- ops/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
