# Production release evidence — 2026-09-16

- Outcome: implemented and deployed; production cache version **4.71**.
- Production commit: **ae54b9df** (`tools: ship M4A to MP3 converter`). GitHub main push succeeded; Cloudflare live version check succeeded.
- Release checkout: `/mnt/app/onlinefreetools/p3-release-20260916` (clean after commit).
- The original working tree was intentionally preserved, including unfinished P2 and unrelated workflow drafts. Its local main remains at the older base; do not deploy that working tree blindly. Reconcile it with the release commit before the next production release, preserving its outstanding changes.

## Verification

- Final `verify:tool`: exit 0, all nine stages passed, including full build, HTML, SEO, vendor and isolation. Report: `/mnt/app/onlinefreetools/p3-release-20260916/.cache/verify-tool/convert-an-m4a-file-to-mp3/1789561051332-ae1dd5a5-5e90-4b9c-9cce-0c60dbcb1a07/report.json`.
- Structural input and ten-locale key/placeholder checks: passed. Workflow tests: 7 passed.
- Local real-browser acceptance: passed with **one explicit waiver**, `--skip-oversized`. The user requested skipping the over-40-MiB browser input after kernel-confirmed host OOM. The production 40-MiB guard remains enabled. This is SKIP, not PASS.
- Real sample, mono M4A, AAC ADTS, ALAC platform handling, malformed/protected/video/fragmented rejection, bitrate invalidation, actual download, failed-resource retry, ten-language mobile layout and Arabic RTL were exercised. Site analytics was blocked in browser tests.
- R2 deployment: hash-incremental mode (`changedOnly=true`, `delta=delta`); all 2730 HTML objects had changed hashes. OG: 0 uploads, 197 unchanged assets.
- Remote manifest and local content hash match: `87d42b0f0be751b6153650d01ae784617b71cbfd270c9237bfa6219460bbf4c5`, file count 2730, version 4.71. `verify:r2:live` exit 0.
- Live smoke: ten tool locales HTTP 200; English/Chinese home discovery passed; unfinished P2 absent. Live browser converted the sample and downloaded **120999 bytes**, two non-silent channels, playback duration **5.0416326530612245 seconds** including MP3 padding.
- Static sample SHA-256 matches production: `8dede3c1de1db9058ca6eb95950cac771b3726a39d9d2ec8934134a2c3fa35eb`.
- Logs in the release checkout: `.cache/p3-browser.log`, `.cache/p3-final-verify.log`, `.cache/p3-deploy.log`, `.cache/p3-push.log`, `.cache/p3-live-version.log`, `.cache/p3-live-smoke.log`.

## Applied workflows

Repository skills: tool-coverage-pass, tool-token-efficiency, converter-serp-landing-seo, converter-input-ui. No gate was bypassed except the explicitly waived oversized browser case. FFmpeg was temporary developer tooling for generating original static audio, not a production or normal build dependency.
