Date: 2026-08-13 01:13
Summary: GitHub _pages has ~270 non-tool HTML tracked; tools gitignored — optional, R2 is source of truth.

[question]
git hub上 _pages目录有大量的html文件，是否合理

[try to solve]
合理但非必须。仓库约 270 个入库页：首页/about/taxonomy 等；`public/_pages/*/tools/`（约 1240）与 `*.html.gz` 已 gitignore，不上 GitHub。生产 HTML 权威在 R2，且 `.assetsignore` 排除 `_pages` 不上 Assets。保留非工具 HTML 便于 diff/历史；若嫌吵可整树 gitignore，发版只靠 build+upload:r2。

[actions]
- （只读说明）
