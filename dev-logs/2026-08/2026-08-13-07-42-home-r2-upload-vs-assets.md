Date: 2026-08-13 07:42
Summary: Home prefers Assets, so an R2-only upload does not refresh the homepage.

[question]
如果上传，首页是不是不起作用

[try to solve]
Correct. Worker `serveHomeHtml` order is Cache → Assets → R2 fallback. When Assets already has `_pages/{lang}/index.html`, that wins; a newer home on R2 does not apply unless Assets miss or Cache is cleared/versioned. Updating home requires: `build:site` → commit the ten-language `index.html` files → `git push` (CF deploys Assets); optional `upload:r2` remains fallback. Other pages (tools, etc.) still depend only on R2, so upload takes effect immediately.

[actions]
- None (explanation only)
