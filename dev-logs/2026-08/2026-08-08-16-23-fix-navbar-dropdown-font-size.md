Date: 2026-08-08 16:23
Summary: Shrink navbar dropdown-item below nav-link size (Bootstrap 1rem was larger than --fs-nav).

[question]
但菜单下拉的字体大小明显比菜单主题还大

[try to solve]
Bootstrap `.dropdown-item` defaults to 1rem while navbar `.nav-link` uses `--fs-nav` (0.9375rem/15px). Set `.navbar .dropdown-item` to `--fs-muted` (14px) in site.css and aligned the language button size to `--fs-nav`. Hard-refresh to see the change.

[actions]
- public/styles/site.css
