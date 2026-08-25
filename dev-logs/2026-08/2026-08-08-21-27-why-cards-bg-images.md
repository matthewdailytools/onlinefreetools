Date: 2026-08-08 21:27
Summary: Add theme-tinted SVG background illustrations to the three home why cards.

[question]
why卡片尝试增加背景图片

[try to solve]
Added corner watermark illustrations on the three Why cards: single-color SVGs `why-local`, `why-signup`, and `why-process`, tinted via CSS `mask-image` and `--brand` so they follow the theme; hover slightly raises opacity. Ran `build:site`.

[actions]
- public/icons/home/why-local.svg, why-signup.svg, why-process.svg
- scripts/site/components/content-home.mjs (.home-why-bg)
- public/styles/site.css
- npm run build:site
