Date: 2026-08-14 22:15
Summary: Fixed tool updated date display to avoid timezone-shifted visible times.

[question]
unzip file 的时间是不是有问题：<time datetime="2026-08-14T00:00:00.000Z">2026年8月14日 08:00</time>

[try to solve]
Confirmed the issue came from the shared `formatToolUpdatedAt` renderer: full ISO timestamps were formatted with local time, so UTC midnight displayed as 08:00 in Chinese/Asia-Shanghai contexts. Changed the visible tool updated marker to format only the UTC date, while preserving the exact ISO timestamp in the `datetime` attribute. Also fixed `scripts/bump-tool-updated-at.mjs`, whose insertion order could overwrite a newly bumped `updatedAt` with the old value. Bumped `unzip-file` and ran `npm run build:site`; the incremental build correctly prerendered only `unzip-file` across 10 languages. Verified generated output now shows a locale “Last updated” label with `<time datetime="2026-08-14T14:15:19.108Z">` and a date-only visible calendar day (no shifted clock time).

[actions]
- Updated `src/pages/site/toolContent.ts`
- Updated `scripts/bump-tool-updated-at.mjs`
- Ran `npm run tool:touch -- --slug=unzip-file`
- Ran `npm run build:site`
