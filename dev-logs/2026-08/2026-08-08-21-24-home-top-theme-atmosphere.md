Date: 2026-08-08 21:24
Summary: Beautify home top band through Featured with theme-following gradients and navbar accent.

[question]
顶部（截止“推荐”）颜色过于单调，进行美化（需要跟随主题）

[try to solve]
Wrapped Hero + Why + Featured in a continuous `home-top` atmosphere band (radial glow, dot grid, brand gradient base); navbar gets light theme wash and brand bottom edge highlight; brand name uses text gradient tied to `--brand`; Featured heading gets a left brand accent bar. All driven by `--brand` / `--brand-tint` so theme switches recolor. Ran `build:site`.

[actions]
- scripts/site/components/content-home.mjs (home-top / home-featured)
- public/styles/site.css (navbar + home-top atmosphere)
- npm run build:site
