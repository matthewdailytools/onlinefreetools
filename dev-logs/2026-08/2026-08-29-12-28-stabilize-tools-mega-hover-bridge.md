Date: 2026-08-29 12:28
Summary: Stabilized Tools mega-menu hover with a hit-area bridge and 220ms close delay so the panel no longer vanishes while moving onto it.

[question]
仅工具页：悬停展开,但是想移动到菜单上时候，菜单容易消失

[try to solve]
Root cause: absolutely positioned panel sits below the navbar while the hover target is only the “Tools” link; the gap between link and panel is not part of `:hover`, so the menu closed mid-move.

Fix: (1) pull panel up 4px and add a 28px invisible `::before` hit bridge on the panel; (2) desktop JS keeps `.is-open` with a 220ms mouseleave delay, cancelled when re-entering the item or panel. Rebuilt tool pages.

[actions]
- public/styles/site.css — bridge + overlap
- src/pages/site/layout.ts, scripts/site/layout.mjs — delayed close
- npm run build:site
