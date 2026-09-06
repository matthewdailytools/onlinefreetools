Date: 2026-09-06 17:15
Summary: Batch checksum release files keeps a default-on MD5 checkbox and drops the duplicate toolbar chip that only turned MD5 on.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/batch-checksum-release-files 剔除 "同时算md5"按钮，只保留"同时算md5"option，默认选中

## Tool links (English)
- https://onlinefreetools.org/tools/batch-checksum-release-files
Chinese: https://onlinefreetools.org/zh/tools/batch-checksum-release-files

[try to solve]
## Context
The Chinese page had two MD5 controls that did the same job: a toolbar chip labeled「同时算 MD5」(`#bckChipMd5`) and a checkbox labeled「同时计算 MD5」(`#bckMd5`). The chip only set `md5Check.checked = true`. The checkbox started unchecked, and Load sample forced it off, so SHA-256 ran alone unless the user clicked the chip or the box.

The request was to remove the chip, keep the option, and select it by default.

## Process
1. Read `src/pages/batchChecksumReleaseFilesPage.ts`. The toolbar rendered the chip next to Hash all / Export / Sample / Clear. The checkbox sat under the bar. The inline script bound the chip to `md5Check.checked = true` and `loadSample()` set `md5Check.checked = false` before hashing the two short binaries.
2. Removed `#bckChipMd5` and its click listener. Marked `#bckMd5` with `checked`. Stopped Load sample from clearing the box so the auto-run sample matches the default.
3. Deleted the unused `tool_batch_checksum_release_files_chip_md5` key from all ten locale shards. Merged i18n, touched `updatedAt`, prerendered and gzipped this slug, uploaded the ten language HTML files to the local R2 pages bucket.
4. Verified at `http://127.0.0.1:8788/zh/tools/batch-checksum-release-files`: toolbar is Hash all, Export CSV, Export SUMS, Load sample, Clear. Checkbox「同时计算 MD5」is checked. Sample rows show MD5 for `release-a.bin` and `release-b.bin`. `#bckChipMd5` is absent.

## Root cause / analysis
The chip was a one-way shortcut onto the same flag as the checkbox. Two labels for one boolean made the bar look like a second hash mode. Default-off MD5 also fought the chip: Sample reset the box, so a first-load table had empty MD5 until the user opted in. One checked checkbox is enough: SHA-256 still always runs; MD5 is extra and can be turned off.

## Solution
- Toolbar: no MD5 chip.
- Option: `#bckMd5` stays, `checked` in the HTML.
- Sample and first paint keep that default, so the MD5 column fills when crypto-js loads.
- Unchecking still skips MD5 (`wantsMd5()`).

Worker HTML Cache API keys include `PAGES_CACHE_VERSION`. Local verification used a cache-busting query, then the version was raised to `4.55` so the original path without a query serves the new HTML.

## Notes / boundaries
- How-to item 2 and FAQ A4 still say “turn MD5 on” in the ten locales. The control is now a default-on checkbox; copy was left as-is because this round was UI-only.
- Isolation lint on this slug is noisy when the working tree already has other tools dirty; this change stayed in the batch-checksum shard, page module, and generated merge output.

[actions]
- `src/pages/batchChecksumReleaseFilesPage.ts`: removed chip; default-checked MD5; sample no longer unchecks.
- `src/site/i18n/tools/batch-checksum-release-files/{lang}.ts`: removed `chip_md5`.
- `src/site/tool-catalog.d/batch-checksum-release-files.json`: `updatedAt` touch.
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.55.
- `npm run merge:tools`; prerender + gzip this slug; local R2 upload of the ten HTML files.
