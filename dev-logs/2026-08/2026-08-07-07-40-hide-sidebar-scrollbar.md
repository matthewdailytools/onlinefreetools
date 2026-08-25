Date: 2026-08-07 07:40
Summary: Hid the left sidebar’s always-visible scrollbar; keep scroll, show a thin bar only on hover.

[question]
左侧菜单有滚动条实现下拉，看起来不美观

[try to solve]
Sidebar still uses `overflow-y: auto` (scroll when the menu is long), but the system scrollbar is hidden by default (Firefox `scrollbar-width: none`, WebKit width 0). On hover, a 4px thin scrollbar appears so a permanent thick bar does not dominate the UI.

[actions]
- `public/styles/site.css` — `#sidebar` scrollbar hide / hover thin-bar styles
