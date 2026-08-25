Date: 2026-08-13 00:46
Summary: Refresh ops docs for upload → git push → live verify deploy path.

[question]
更新运维文档

[try to solve]
Rewrote/aligned ops docs to the current release path: `npm run deploy` (upload+verify) → git push (CF) → `verify:r2:live`. Updated `ops/worker-r2-ops.md` (release overview at top, §2–10), `ops/README.md`, `ops/seo/keyword-to-tool-ops.md`; Ops UI handbook title now reflects upload / git push / verify.

[actions]
- Rewrote `ops/worker-r2-ops.md`
- Updated `ops/README.md`, `ops/seo/keyword-to-tool-ops.md`, `ops/seo/sitemap-ui.mjs`
