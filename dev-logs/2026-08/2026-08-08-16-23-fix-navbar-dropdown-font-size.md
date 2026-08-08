Date: 2026-08-08 16:23
Summary: Shrink navbar dropdown-item below nav-link size (Bootstrap 1rem was larger than --fs-nav).

[question]
但菜单下拉的字体大小明显比菜单主题还大

[try to solve]
Bootstrap `.dropdown-item` 默认 1rem，顶栏 `.nav-link` 为 `--fs-nav`（0.9375rem/15px）。已在 site.css 将 `.navbar .dropdown-item` 设为 `--fs-muted`（14px），语言按钮字号对齐 `--fs-nav`。硬刷新即可。

[actions]
- public/styles/site.css
