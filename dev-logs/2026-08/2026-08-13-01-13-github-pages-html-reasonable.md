Date: 2026-08-13 01:13
Summary: GitHub tracks ~270 non-tool HTML under _pages; tools are gitignored — optional, R2 is source of truth.

[question]
git hub上 _pages目录有大量的html文件，是否合理

[try to solve]
Reasonable but not required. The repo tracks about 270 pages (home, about, taxonomy, etc.). `public/_pages/*/tools/` (~1240) and `*.html.gz` are already gitignored and not on GitHub. Production HTML authority is R2, and `.assetsignore` excludes `_pages` from Assets. Keeping non-tool HTML helps diff/history; if the noise is unwanted, gitignore the whole tree and ship only via build + `upload:r2`.

[actions]
- Read-only explanation
