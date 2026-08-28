Date: 2026-08-28 14:02
Summary: Added a homepage Newest tools module that lists the eight most recently launched tools by frozen launchedAt, not by later content edits.

[question]
首页增加最新上线工具模块

[try to solve]
The homepage now has a Newest tools / 最新上线 section between Why and All tools. It shows eight cards sorted by first-ship time (`launchedAt`). Merge freezes that date into `tool-catalog.json` (shard field, then previous catalog, then git first-add of the page file, then `updatedAt`). Later `tool:touch` only bumps `updatedAt`, so editing an old tool does not promote it into this strip. New tools should set `launchedAt` once on the catalog shard. Ten-locale headings are independent chrome copy, not a lockstep English template. `npm run build:site` refreshed `public/index.html` and `public/{lang}/index.html`; the current strip starts with measuring-magnetic-fields, archive-extractor, unzip-file, and magnet-link-decoder.

[actions]
- Updated `scripts/site/components/content-home.mjs`, `scripts/site/pages/home.mjs`, `scripts/site/tool-catalog.mjs`, `scripts/site/i18n.mjs`, `public/styles/site.css`
- Updated `scripts/tool-modules/merge-all.mjs` to freeze `launchedAt`; `src/site/tools.ts` type; omni catalog writer; `tool:touch` comment
- Updated `.cursor/rules/tool-creation.mdc` and `tool-i18n-localization.mdc` homepage latest vs featured wording
- Ran `npm run build:site`
