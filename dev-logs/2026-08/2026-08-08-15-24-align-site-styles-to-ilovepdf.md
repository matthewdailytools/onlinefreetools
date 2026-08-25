Date: 2026-08-08 15:24
Summary: Align site background, font, buttons, and cards with iLovePDF visual tokens.

[question]
将本站样式按照https://www.ilovepdf.com/  修改背景色，字体，按钮，卡片框

[try to solve]
Updated site-wide styles to iLovePDF visual tokens (restrained uptake; no hotlink of their private Graphik font):

- Background: `#f5f5fa`; body `#33333b` / secondary `#47474f`; border `#d6d6df`
- Primary: vermillion `#e5322d` (hover `#bd060a`)
- Font: Plus Jakarta Sans (open-source Graphik-ish stand-in); layout templates and static pages switched
- Buttons: 8px radius, solid red / outline red, no shadow (dropped prior pill + drop shadow)
- Cards: white, `1px #d6d6df`, 16px radius; hover border darkens to `#292931` (no lift shadow)
- Home hero became a light centered title band, closer to the reference site

Main edits: `public/styles/site.css`, `src/pages/site/layout.ts`, `scripts/site/layout.mjs`; ran `npm run build:site` to refresh static pages.

[actions]
- public/styles/site.css
- src/pages/site/layout.ts
- scripts/site/layout.mjs
- public/_pages/** (build:site)
- npm run build:site
