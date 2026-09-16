Date: 2026-09-16 10:22
Summary: Repair the M4A converter and record verification blockers without claiming a release.
Visibility: project

[question]
继续完成工具，然后部署

## Tool links (English)

- https://onlinefreetools.org/tools/convert-an-m4a-file-to-mp3

[try to solve]

## Changes

P3 now has an independent renderer. The old wrapper reused the WAV converter but accessed `info.channels` before assigning M4A metadata. Restored the published P1 renderer to HEAD after removing this dependency; unrelated P2 changes remain untouched. Added bounded MP4 audio-track and ADTS framing validation, fixed the file chooser accept list, and report channels/duration from the decoded buffer rather than trusting MP4 metadata.

All ten language shards now contain 59 authored fields with the correct conversion direction, explicit no-upload privacy, codec limitations, lossy-output caveats and localized FAQs. Completed source-level review is distinct from a human native-speaker review or browser verification.

Added structural regression tests, a reproducible FFmpeg synthetic AAC/M4A sample generator, a real browser integration runner, and an inventory guard against missing statically referenced sample assets. The browser runner is provided but has not passed in this environment.

## Actual checks

- `node scripts/tool-modules/test-m4a-source.mjs`: exit 0. Synthetic container/ADTS framing, invalid tracks/limits, all ten key sets and placeholders. This does not test real AAC decoding.
- `node scripts/tests/tool-workflow.test.mjs`: 7 tests passed, exit 0, including missing sample inventory rejection.
- `npm run coverage:gate -- --slug=convert-an-m4a-file-to-mp3 --phase=all`: exit 0.
- `npm run lint:tool-page -- --slug=convert-an-m4a-file-to-mp3`: exit 0 (source only).
- `node scripts/tool-modules/generate-m4a-sample.mjs`: exit 1, FFmpeg ENOENT. The cached Playwright FFmpeg has no audio encoder. A full FFmpeg download also failed DNS resolution. The sample remains missing, not replaced with a mislabeled WAV.
- Cached Chromium 131 starts its process but exits with `setsockopt: Operation not permitted`; actual browser conversion remains unverified.
- `npm run verify:tool -- --slug=convert-an-m4a-file-to-mp3`: exit 1 at artifact inventory, correctly reporting the absent sample. Evidence: `.cache/verify-tool/convert-an-m4a-file-to-mp3/1789553937467-65beb66c-a318-4676-802f-2f6b35b60645/report.json`.
- `npm run verify:r2`: exit 1 after three S3 attempts, DNS EAI_AGAIN. GitHub DNS probe also exits 1 with EAI_AGAIN.

## Remaining release work

Use an environment supporting Chromium sockets, full FFmpeg AAC encoding and outbound R2/GitHub connectivity. Generate and inspect the real five-second sample, run the browser test (including real ADTS/mono fixtures beyond this initial runner), then perform the full aggregate build/HTML SEO/vendor/isolation gates in a P3-only release tree. Do not include the unfinished P2 tool. Only after successful verification perform hash-incremental R2 upload, version verification, production push and live checks. No upload or production push was performed here; the current production version was not changed.

## Workflow applied

Applied repository coverage-pass, token-efficiency, converter SERP/landing SEO and converter input-UI workflows. Missing artifacts stop the aggregate gate; structural tests and prose reviews do not substitute for real browser or remote release evidence. Full build, generated HTML SEO, vendor/isolation and live verification were not reached in this run.
