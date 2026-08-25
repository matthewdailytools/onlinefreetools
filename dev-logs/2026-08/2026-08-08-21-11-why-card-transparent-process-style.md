Date: 2026-08-08 21:11
Summary: Rename why card 3 to transparent process and restyle all three why cards to theme tokens.

[question]
第三个卡片把过程看得见改为过程透明，描述进行润色。然后这三个卡片的字体排版背景色进行优化（注意匹配主题）

[try to solve]
Why card 3 title is now “Transparent process” (ten-locale: Transparent process / Proceso transparente / etc.); body polished to stress visible formulas, steps, and boundaries—not black-box numbers. All three cards restyled with brand tint/`color-mix` gradient fills and brand borders; titles use `--text-strong`, body slightly tighter line-height and tracking; hover deepens theme color. Ran `build:site`.

[actions]
- scripts/site/i18n.mjs (home_why_3_* ×10)
- public/styles/site.css (.home-why-item typography and theme backgrounds)
- npm run build:site
