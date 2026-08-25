Date: 2026-08-13 01:14
Summary: Gitignore entire public/_pages/; untrack ~270 HTML files from the index.

[question]
把整个 public/_pages/ 都 gitignore

[try to solve]
`.gitignore` now uses `public/_pages/`; `git rm -r --cached` removed the previously tracked ~270 non-tool HTML files (local files kept). Synced notes in ops/worker-r2-ops, ops/README, cloudflare-workflow, and design.md. Releases still rely on `build:site` + `upload:r2`; GitHub drops those files only after another commit/push.

[actions]
- Updated `.gitignore`; `git rm --cached public/_pages`
- Updated ops/docs/rules mentioning `_pages` tracking
