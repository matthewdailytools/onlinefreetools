Date: 2026-08-28 14:32
Summary: Confirmed localhost /zh/ already returns the new homepage (no sidebar + latest tools); a stale browser view was the likely cause, not missing build output.

[question]
http://localhost:8787/zh/ 首页侧边栏和最新工具为什么没有按修改展现

[try to solve]
On disk, `public/zh/index.html` already has `layout-no-sidebar`, `#latest-tools`, and `最新上线`, with no `#sidebar` / `sidebarToggle`. A live request to `http://127.0.0.1:8787/zh/` with `Accept: text/html` returns the same markers (`has-latest=True`, `has-no-sidebar-layout=True`, `has-sidebar-id=False`). Response headers use `Cache-Control: public, s-maxage=86400, max-age=0` and `CF-Cache-Status: HIT` for the Worker Cache API — browser HTML should revalidate (`max-age=0`), so a tab still showing the old chrome is almost always a browser-cached document or an unrefreshed tab from before `build:site`. Fix: hard refresh (Ctrl+F5) or a private window; if it still looks old, `npm run restart:dev` to rebuild, re-seed local R2, and restart wrangler.

[actions]
- Compared `public/zh/index.html` with a live `Invoke-WebRequest` to `http://127.0.0.1:8787/zh/`
