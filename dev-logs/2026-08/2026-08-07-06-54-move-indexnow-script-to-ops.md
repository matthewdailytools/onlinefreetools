Date: 2026-08-07 06:54
Summary: Move IndexNow submit script from scripts/ to ops/seo/.

[question]
这个脚本迁移到 ops中

[try to solve]
已将 `scripts/submit-indexnow.mjs` 迁移为 `ops/seo/submit-indexnow.mjs`：修正仓库根与 `scripts/site/config.mjs` 引用；`package.json` 的 `indexnow*` 命令改指向新路径；同步 `ops/README.md` 目录结构与 SEO 策略文档中的路径。`npm run indexnow -- --help` 与 `--dry-run --limit 2` 验证通过。历史 dig-log 中旧路径不改写。

[actions]
- moved: `scripts/submit-indexnow.mjs` → `ops/seo/submit-indexnow.mjs`
- modified: `package.json`, `ops/README.md`, `docs/2026-07-28-google-seo-strategy-implementation.md`
