Date: 2026-01-15 15:30
Summary: Apply OmniCalculator-inspired UI and styles site-wide

[question]
参考 ：https://www.omnicalculator.com/的页面ui设计和样式，修改本项目的ui和样式

[try to solve]
Implemented an OmniCalculator-like visual update across the site:
- Added a global stylesheet `public/styles/omnicalc.css` with color tokens, card, button, input and result styles.
- Injected the stylesheet into server-rendered pages via `src/pages/site/layout.ts` so dynamic tool pages inherit the new look.
- Added stylesheet link to localized homepages (`public/_pages/*/index.html`) and to the logs viewer (`dev-logs/viewer.html`).
- Updated several tool pages to use unified classes: `input-lg` for inputs, `btn btn-primary` for primary actions, `card` for main containers, and `result` for result blocks. Specific pages adjusted: markdown-to-html, website-headers, marginal revenue, BMI, square-feet.
- Simplified and removed some duplicated inline styles in favor of the global stylesheet while keeping a few page-specific helpers where useful.

[actions]
- Created: public/styles/omnicalc.css
- Edited: dev-logs/viewer.html
- Edited: public/_pages/en/index.html
- Edited: public/_pages/zh/index.html
- Edited: public/_pages/es/index.html
- Edited: public/_pages/fr/index.html
- Edited: public/_pages/id/index.html
- Edited: public/_pages/ja/index.html
- Edited: public/_pages/pt/index.html
- Edited: public/_pages/ru/index.html
- Edited: public/_pages/de/index.html
- Edited: public/_pages/ar/index.html
- Edited: src/pages/site/layout.ts
- Edited: src/pages/markdownToHtmlPage.ts
- Edited: src/pages/websiteHeadersPage.ts
- Edited: src/pages/marginalRevenuePage.ts
- Edited: src/pages/howToCalculateBmiPage.ts
- Edited: src/pages/squareFeetPage.ts

Additional fix (2026-01-15 16:10):
- Observed build error: "Unexpected '.'" from `src/pages/howToCalculateBmiPage.ts` due to a broken template string where CSS was accidentally placed outside the template.
- Fix applied: merged the stray CSS back into the `extraHeadHtml` template string and cleaned duplicated rules.
- Edited: src/pages/howToCalculateBmiPage.ts

Notes:
- To preview locally, run the project's dev server (e.g. `npm run dev` or `wrangler dev`) and open an index or a tool page in the browser.
- I can continue refining tool card grid layout or update additional pages on request.
- After this fix, you can run `npm run build` or `wrangler dev` to verify the site builds cleanly.
