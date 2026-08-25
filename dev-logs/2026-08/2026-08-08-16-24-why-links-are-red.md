Date: 2026-08-08 16:24
Summary: Explained red link/active colors come from global a{--accent} and sidebar active rules (iLovePDF red).

[question]
为什么相关工具和左侧菜单选中的工具，以及底部的关于等是红色字体

[try to solve]
Site-wide `a { color: var(--accent) }` with `--accent` set to iLovePDF-aligned red `#e5322d`, so Related tools, footer About/Privacy, and other links without a local color all render red. Sidebar active items also use `#sidebar .list-group-item.active { color: var(--accent) }` explicitly. To use body text color for chrome links and reserve red for CTA/current state only, global link and sidebar/footer rules need changing.

[actions]
