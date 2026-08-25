Date: 2026-08-07 11:58
Summary: Renamed site brand in titles and chrome from Online Free Tools to OnlineFreeTools.org.

[question]
修改历史页面和模板：title上的Online Free Tools修改为OnlineFreeTools.org，以及首页logo边上的Online Free Tools

[try to solve]
Display name is now consistently **OnlineFreeTools.org**:

- **Templates/source**: ten-locale `brand`, `scripts/site/i18n.mjs`, `scripts/site/config.mjs`; header and home hero both read `t(lang,'brand')`.
- **Build output**: after `npm run build:site` / `build:logs`, home and `public/devlogs/` titles, navbar logo text, and footer use the new brand.
- **Legacy static pages**: nine older `public/devlogs/*.html` files (navbar-brand without logo) had title/navbar/footer hand-patched.
- **Source templates**: `dev-logs/index.html` and `dev-logs/viewer.html` title/meta/JSON-LD updated to OnlineFreeTools.org.
- Historical “Online Free Tools” strings inside log body `[question]` sections were left unchanged.

[actions]
- Updated i18n/config brand strings; rebuilt site/logs earlier in session
- Patched 9 legacy `public/devlogs/*.html` chrome (title, navbar, footer)
- Patched `dev-logs/index.html`, `dev-logs/viewer.html`
