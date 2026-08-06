Date: 2026-01-11 12:42
Summary: Made devlogs global (no language split) and served from the root /devlogs/ path.

[question]
devlogs不用区分语言，devlogs文件夹放在根目录下

[try to solve]
- Updated the static site generator to build devlogs only once into `public/devlogs/` (no `/zh/devlogs` or `/en/devlogs`).
- Updated the home page nav to link to `/devlogs/` without any language prefix.
- Hid the language switcher on devlogs pages to avoid implying language-specific devlogs URLs.
- Updated Worker language negotiation to exclude `/devlogs/*` (and the static `/tools/markdown-to-html.html`) from redirects, preventing broken `/<lang>/devlogs` paths.
- Improved devlog front-matter parsing so both legacy CN (`日期/摘要`) and new EN (`Date/Summary`) log headers are recognized.
- Cleaned legacy generated outputs and rebuilt the site.

[actions]
- Updated: `scripts/build-site.mjs`
- Updated: `scripts/build-logs.mjs`
- Updated: `scripts/site/pages/home.mjs`
- Updated: `scripts/site/components/header.mjs`
- Updated: `src/index.ts`
- Removed: `public/zh/devlogs/`
- Removed: `public/en/devlogs/`
- Removed: `public/dev-logs/`
- Ran: `npm run build:logs`
- Ran: `SITE_LANGS=zh,en SITE_DEFAULT_LANG=en npm run build:site`
