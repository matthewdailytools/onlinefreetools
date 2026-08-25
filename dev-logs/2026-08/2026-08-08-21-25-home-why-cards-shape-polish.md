Date: 2026-08-08 21:25
Summary: Restyle the three home why cards with asymmetric shapes, index badges, and theme accents.

[question]
顶部三个卡片进行美化（可以调整卡片形状）

[try to solve]
Three Why cards are now `article` elements with 01/02/03 asymmetric index badges; each card uses different asymmetric corner radii; brand top edge stripe and corner theme glow; light hover lift. Colors and shadows based on `--brand*`. Ran `build:site`.

[actions]
- scripts/site/components/content-home.mjs
- public/styles/site.css (.home-why-item*)
- npm run build:site
