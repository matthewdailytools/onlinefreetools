Date: 2026-08-08 21:02
Summary: Added a home tool-card “No upload” badge (linked to privacy#local) and catalog localProcessing flag.

[question]
放弃前一条要求，改为：工具卡片增加不上传标签。

[try to solve]
Dropped the “force no-server-upload into titles” approach. Featured / category tool cards on the home page now show a short “No upload” badge under the title (ten-locale `home_tag_no_upload`), linking to `/{lang}/privacy#local`.

Catalog gained `localProcessing`: true for pure local tools; false for `website-headers` / `ip-address` / `indexnow` (no badge). Rules updated in `tool-i18n-localization.mdc` and `tool-creation.mdc`; privacy page copy synced. After `build:site`, zh home ~108 badges / 114 cards (edge tools appear twice, neither with a badge).

[actions]
- `scripts/site/components/content-home.mjs`, `public/styles/site.css`, `scripts/site/i18n.mjs`
- `src/site/tool-catalog.d/*` + `tools.ts`; rules / copilot / privacy i18n
- `npm run merge:tools && npm run build:site`
