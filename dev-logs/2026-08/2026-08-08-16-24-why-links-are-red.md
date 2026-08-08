Date: 2026-08-08 16:24
Summary: Explained red link/active colors come from global a{--accent} and sidebar active rules (iLovePDF red).

[question]
为什么相关工具和左侧菜单选中的工具，以及底部的关于等是红色字体

[try to solve]
全站 `a { color: var(--accent) }`，`--accent` 为对齐 iLovePDF 的红 `#e5322d`，故「相关工具」、页脚「关于/隐私…」等未单独设色的链接一律红色。侧栏选中项另有 `#sidebar .list-group-item.active { color: var(--accent) }` 显式用强调色。若希望 chrome 链接用正文色、仅 CTA/当前态用红，需改全局链接与侧栏/页脚规则。

[actions]
