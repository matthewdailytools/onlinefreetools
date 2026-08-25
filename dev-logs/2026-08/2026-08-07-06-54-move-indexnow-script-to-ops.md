Date: 2026-08-07 06:54
Summary: Moved the IndexNow submit script from scripts/ to ops/seo/.

[question]
这个脚本迁移到 ops中

[try to solve]
Moved `scripts/submit-indexnow.mjs` to `ops/seo/submit-indexnow.mjs`: fixed repo-root and `scripts/site/config.mjs` imports; pointed `package.json` `indexnow*` scripts at the new path; synced `ops/README.md` layout and SEO strategy doc paths. Verified with `npm run indexnow -- --help` and `--dry-run --limit 2`. Historical dig-log paths were left unchanged.

[actions]
- moved: `scripts/submit-indexnow.mjs` → `ops/seo/submit-indexnow.mjs`
- modified: `package.json`, `ops/README.md`, `docs/2026-07-28-google-seo-strategy-implementation.md`
