Date: 2026-08-13 01:14
Summary: Gitignore entire public/_pages/; untrack 270 HTML from index.

[question]
把整个 public/_pages/ 都 gitignore

[try to solve]
`.gitignore` 改为 `public/_pages/`；`git rm -r --cached` 移除已跟踪的约 270 个非工具 HTML（本地文件保留）。已同步 ops/worker-r2-ops、ops/README、cloudflare-workflow、design.md。发版仍靠 build:site + upload:r2；需再 commit/push 后 GitHub 才会去掉这些文件。

[actions]
- Updated `.gitignore`; `git rm --cached public/_pages`
- Updated ops/docs/rules mentioning _pages tracking
