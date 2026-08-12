Date: 2026-08-13 07:42
Summary: Explain home prefers Assets so R2-only upload does not refresh home.

[question]
如果上传，首页是不是不起作用

[try to solve]
是。Worker `serveHomeHtml` 顺序为 Cache → Assets → R2 兜底。Assets 已有 `_pages/{lang}/index.html` 时会直接命中，R2 上即使上传了新首页也不会生效（除非 Assets miss 或清/换 Cache）。更新首页须：`build:site` → commit 十语 `index.html` → `git push`（CF 部署 Assets）；可选仍 `upload:r2` 作兜底。工具等其它页仍只靠 R2，upload 即生效。

[actions]
- None (explanation only)
