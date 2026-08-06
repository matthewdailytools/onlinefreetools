Date: 2026-08-07 06:48
Summary: Expanded IndexNow CLI with tool/lang/path/home/check-key and other scenario flags.

[question]
npm run indexnow 创建一个脚本，适配各种场景参数

[try to solve]
已重写 `scripts/submit-indexnow.mjs`，支持多场景参数；`npm run indexnow:check` / `indexnow:help` 快捷命令已加。文档同步至 `ops/README.md` 与 SEO checklist。

主要参数：`--tool` / `--lang` / `--path` / `--home` / `--about` / `--url` / `--urls-file` / `--from-sitemap` / `--include` / `--exclude` / `--check-key` / `--require-live-key` / `--dry-run` / `--endpoint` / `--limit` / `--verbose` 等。

验证：`--tool html-entity` 展开 10 语；`--check-key` 现为 HTTP 200 且 bodyMatch=true。

[actions]
- scripts/submit-indexnow.mjs
- package.json
- ops/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
