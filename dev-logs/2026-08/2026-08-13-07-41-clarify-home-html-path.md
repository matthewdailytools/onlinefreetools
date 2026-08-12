Date: 2026-08-13 07:41
Summary: Clarify home HTML lives under public/_pages/{lang}/index.html.

[question]
为什么npm run build:site 后，public没有出现首页的html

[try to solve]
首页不在 `public/index.html`，而在 `public/_pages/{lang}/index.html`（当前十语均有，如 en ~193KB）。公开 URL `/` 由 Worker 映射到该内部路径后再从 Assets 读。若侧栏看不到 `_pages`，多半是资源管理器隐藏了 gitignore 路径；用终端 `ls public/_pages/*/index.html` 可确认。

[actions]
- Inspected `public/_pages/*/index.html` and `scripts/build-site.mjs` output path
