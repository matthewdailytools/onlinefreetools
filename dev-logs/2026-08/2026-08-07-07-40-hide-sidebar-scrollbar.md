Date: 2026-08-07 07:40
Summary: Hid the left sidebar’s always-visible scrollbar; keep scroll, show a thin bar only on hover.

[question]
左侧菜单有滚动条实现下拉，看起来不美观

[try to solve]
侧栏仍 `overflow-y: auto`（菜单过长时可滚），但默认隐藏系统滚动条（Firefox `scrollbar-width: none`、WebKit 宽度 0）。鼠标悬停时再显示 4px 细滚动条，避免常驻粗条影响观感。

[actions]
- `public/styles/site.css` — `#sidebar` 滚动条隐藏 / 悬停细条样式
