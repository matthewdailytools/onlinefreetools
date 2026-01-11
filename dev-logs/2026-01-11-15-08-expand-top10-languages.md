Date: 2026-01-11 15:08
Summary: Expanded i18n support to the top-10 internet user languages across both the static site generator and Worker-rendered tool pages.

[question]
将语言支持拓展到目前互联网用户top10的语言

[try to solve]
- Chose a practical top-10 set commonly used for internet language share: `en, zh, es, ar, pt, id, fr, ja, ru, de`.
- Updated the static site generator language config and translation dictionary so home pages can be generated for all 10 locales.
- Updated Worker i18n (types, language list, fallbacks) and language switcher labels so dynamic tool pages can render in all 10 locales.
- Added explicit localized home routes in the Worker to serve `/_pages/<lang>/index.html` for each of the 10 languages.
- Rebuilt the site and verified `public/_pages/<lang>/index.html` exists for all locales.

[actions]
- Updated: `scripts/site/config.mjs`
- Updated: `scripts/site/i18n.mjs`
- Updated: `src/site/i18n.ts`
- Updated: `src/pages/site/header.ts`
- Updated: `src/pages/websiteHeadersPage.ts`
- Updated: `src/index.ts`
