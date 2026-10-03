Date: 2026-10-03 13:25
Summary: Implemented and locally verified batch MP3 size reduction with measured per-file outcomes across ten locales.
Visibility: project

[question]
Continue implementing the unimplemented browser-feasible tools from the AV capability map in priority order, with search-intent SEO, real information gain, and complete local page tests.

[try to solve]
## Second completed item

`/tools/batch-reduce-mp3-file-sizes` provides one 20-file MP3 queue with a shared 64/96/128/192 kbps target, optional mono for speech, serial decode and re-encode, and independent downloads. Each row reports measured input and output size and actual saving. A result that grows is marked “Not smaller” and its downloaded filename says `reencoded`, avoiding a false compression claim. The built-in 192/64 kbps samples demonstrate both outcomes. Ten locale pages put local batch-compression intent in title and lead; How, limits, example and FAQ explain lossy re-encoding, realistic size estimates, browser storage, and no server upload.

## Verification

- `npm run coverage:gate -- --slug=batch-reduce-mp3-file-sizes --phase=all`: passed.
- `npm run build:site`: passed after final page changes; regenerated ten-language pages, home, sitemap, and chrome.
- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-reduce-mp3-file-sizes`: passed; evidence under `.cache/verify-tool/batch-reduce-mp3-file-sizes/1791002998621-b32a47e5-ca1d-4f93-8675-da5fba462704`.
- `node scripts/tool-modules/test-batch-reduce-browser.mjs`: passed on final build. A 192→128 kbps sample changed 71.0→47.8 KiB (32.8% smaller); a 64→128 kbps sample changed 24.0→48.6 KiB and was labeled not smaller. A downloaded output decoded to 3.056 seconds of non-silent audio. Mono option produced a one-channel downloadable MP3. Ten mobile locales generated sample results without horizontal overflow, including Arabic RTL. Twenty same-name files yielded distinct downloads; stop/resume, damaged-file partial success/retry and over-limit rejection passed without unexpected network requests or page exceptions.

## Limits and next work

The 40 MiB and 10-minute per-file limits are code guards, not demonstrated successful large-file sizes. This run used approximately three-second audio fixtures and did not inject OPFS quota failure. Local implementation is not production deployment. The remaining candidate list in §11 of the capability map still needs individual tool briefs, implementation and acceptance; MP3→WAV and batch peak normalization/removal of silence follow the two completed audio batch tools, while video candidates depend on format-specific single-file proof.

[actions]
- Added catalog, page, icon, ten locale shards and work-task briefs for `batch-reduce-mp3-file-sizes`.
- Added a browser acceptance script and a related link from the existing single-file MP3 size reducer.
- Updated the capability map with local completion and honest size-test limits.
