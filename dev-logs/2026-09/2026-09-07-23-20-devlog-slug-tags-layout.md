Date: 2026-09-07 23:20
Summary: Dev log pages now use info-page gutters, a centered title, and HTML-tag-style slug chips that open the English tool URL.
Visibility: people

[question]
优化 devlog 。1、devlog的slug链接 采用 类似html的展示slug tag，点击slug跳转 Tool links (English)的样式。2、优化devlog，左右需要留空白。3、title居中

[try to solve]
## Context
Public `/devlogs/` pages used the home-page body class. Home sets `#content` padding to zero, so articles sat flush against the layout edge. The visible H1 was a left-aligned document title (`Summary | Dev Logs`) next to Back, and Tool links rendered as full `https://onlinefreetools.org/tools/...` URLs.

## Process
Dev log article and index pages now use `is-info-page is-devlog-page`, the same horizontal gutter as About (`--page-pad-x`, centered `--home-max`). The visible H1 is the Summary only, centered. English tool slugs are parsed from the Tool links (English) section and rendered as monospace chips that look like HTML tags (`<slug>`); the `href` is the English default path `/tools/{slug}`. The same chip style is used on the monthly index list (filename slug → that log). Chinese `/zh/tools/...` lines are not turned into chips.

## Root cause / analysis
Home padding:0 was applied because `renderLayout` defaults to `is-home-page`. Tool links were passed through `marked` as ordinary markdown links, so readers saw long URLs instead of the slug.

## Solution
Helpers in `scripts/site/devlogs.mjs` extract slugs and rewrite that section before `marked.parse`. CSS lives in `public/styles/site.css`. Rebuild with `npm run build:logs`.

## Notes / boundaries
Logs without a Tool links section have no tool chips under the title. Index chips still go to the log page, not a tool. This change does not alter tool HTML or R2 cache.
