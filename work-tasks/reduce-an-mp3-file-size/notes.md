# Acceptance evidence — 2026-09-20

## Applied repository skills

- `.cursor/skills/tool-coverage-pass/SKILL.md`: 0b/0i, master phase 2, ten-locale phase 4 and final all-phase gate.
- `.cursor/skills/tool-token-efficiency/SKILL.md`: single-tool scope, source shards, sequential locale batches and complete local delivery.
- `.cursor/skills/converter-serp-landing-seo/SKILL.md`: task-specific H1, 120–160-character descriptions, settings/FAQ boundaries and button-matched How.
- `.cursor/skills/converter-input-ui/SKILL.md`: one MP3 input, collapsed settings, separate Compress/Download actions, visible progress/error cards and stale-output invalidation.

## Stage gates

- `npm run coverage:gate -- --slug=reduce-an-mp3-file-size --phase=0b`: exit 0 before engineering.
- `npm run coverage:gate -- --slug=reduce-an-mp3-file-size --phase=2`: exit 0 after English master.
- `npm run lint:tool-page -- --slug=reduce-an-mp3-file-size`: exit 0 before other locales.
- `npm run coverage:gate -- --slug=reduce-an-mp3-file-size --phase=4`: exit 0 after three batches of three locales.
- `npm run lint:taxonomy`: exit 0, 227 tools and 13 audio tools.
- Independent key audit: all ten locales contain the same 63 keys; final descriptions range from 126 to 148 characters.

## Browser core acceptance

Command: `SOURCE=1 MODE=core node .cache/test-mp3-size.mjs`.
Chromium 131, real browser file selection, encoding, Blob preview, download and decoding. Exit 0; `.cache/mp3-size-browser/report-core.json` records 12 passed cases and no page errors.

| Case | Actual result |
|---|---|
| Automatic sample | 3.03 s decoded input; MP3 71.0 KiB → 47.8 KiB; saved output 48,901 bytes; output decodes to 3.0563 s, stereo, nonzero signal; no autoplay |
| File input 192 → 128 kbps | 48,901 → 33,018 bytes; 2.0637 s stereo output |
| Same input → 64 kbps mono | 16,509 bytes; one decoded channel; 2.0637 s; nonzero signal |
| Already small MP3 | Higher selected bitrate produces a larger file and the visible “not smaller” warning |
| Invalid fake MP3 | Error card; previous preview removed and download disabled |
| Retry | Valid file succeeds immediately after invalid input |
| ID3 tags | ID3v2 leading and ID3v1 trailing tags accepted |
| MPEG-2 input | 22.05 kHz mono MP3 decodes and re-encodes successfully |
| Duration bound | Repeated valid frames exceeding ten minutes rejected before decode |
| File bound | 40 MiB + 1 byte rejected |
| Clear and empty input | No stale download; choose-file guidance shown |
| Encoder load failure | Aborted encoder request gives visible error; restoring the request and loading sample succeeds |

The test script and artifacts are local diagnostics under `.cache/`; no user file or external audio fixture is used. Sample numbers in all ten Example sections were adjusted from estimated 72→49 KiB to measured approximations 71→48 KiB.

## Full-build recovery

The first `verify:tool` process exited 143 before completing the full build. Its run `1789866072457-bd177d00-fc90-4056-ad8e-983002f11a90` is incomplete, not a pass. A previous combined browser run also exited 143; the core and locale groups were subsequently separated and rerun. No cause for these external termination signals is assumed.

The full verification is being rerun with an independent process supervisor, `.cache/run-mp3-verify.mjs`. It calls the unchanged `scripts/verify-tool.mjs`, preserves its unique step reports, and records the final process code/signal separately in `.cache/mp3-size-verify-exit.json`.

## Boundaries

No deployment or live-site verification is part of this task. Browser execution is tested in Chromium, not Safari or Firefox. Output is lossy MP3 at 44.1 kHz; metadata is dropped and padding can slightly extend duration. There is no guaranteed exact MB target or guaranteed reduction. Frame validation deliberately rejects free-format, changing-layout and unusual trailing-tag streams.

## Isolation baseline

The repository was clean at task start, at commit `8a69d1bb4e3e13bb7351d41b37dd033c440bc423`. The default isolation gate compares against an older `origin/main` and includes pre-existing MP3→WAV/M4A→MP3 commits and workflow files. Those files were not edited in this task.

To preserve the validator and the original repository references, a separate local Git directory and index under `.cache/mp3-task-git` uses the task-start commit as both its HEAD and comparison ref. It shares read-only Git objects through `objects/info/alternates` and points `GIT_WORK_TREE` at the same working tree. This checks every actual tracked/untracked task change with the existing allowlist; it does not set `CROSS_TOOL_UPDATE` or disable any rule. The explicit scoped isolation check passed (504 paths while the build was in progress).

The second verification run was deliberately stopped at its build child after this baseline issue was diagnosed; its observed build failure is preserved. The final full run uses the independent supervisor with `GIT_DIR`/`GIT_WORK_TREE` from `.cache/mp3-isolation-baseline.json`. Original Git refs/index/config remain untouched. Local browser servers now close keep-alive connections explicitly during teardown.

## Locale and visual acceptance

- `SOURCE=1 MODE=locales-a node .cache/test-mp3-size.mjs`: exit 0 for en, zh, es, ja, de.
- `SOURCE=1 MODE=locales-b node .cache/test-mp3-size.mjs`: exit 0 for fr, pt, id, ar, ru after explicit server connection cleanup.
- All ten languages run the automatic example at a 390×844 viewport, have the correct HTML language and localized H1, show no raw translation keys, and have no document-level horizontal overflow.
- Desktop and Chinese mobile screenshots were visually inspected. Artifacts: `.cache/mp3-size-browser/desktop.png`, `zh-mobile.png`, `ar-mobile.png`; per-group JSON reports contain each locale H1.

## Static browser acceptance and SEO correction

`MODE=core node .cache/test-mp3-size.mjs` served the generated `public/_pages` HTML, not the source-render fallback. Exit 0: all 12 core cases plus English and Chinese home-entry checks passed (14 total), with no page errors. The downloaded MP3 and screenshots were refreshed from the generated page.

The next complete build reached SEO lint, where the initial descriptions failed the repository’s literal process/example vocabulary check. Each locale was revised naturally to mention steps or an example while retaining privacy and the task. `npm run merge:tools` and `npm run lint:seo` then exited 0. `npm run lint:vendor` also passed. The final full verification regenerates pages with those corrected descriptions.

The link validator reports a non-blocking lack of inbound *related-tool* links for this new tool (along with four existing tools). Home, navigation and topic entries are generated; two outgoing related tools are present. Other tool shards were kept unchanged.

## Final local delivery

- Full scoped `npm run verify:tool -- --slug=reduce-an-mp3-file-size`: exit 0; report status `passed`; all 9 stages passed.
- Evidence: `.cache/verify-tool/reduce-an-mp3-file-size/1789867609560-a8920c9b-f24a-4f5c-b2b7-ba67e26aeeb2/report.json`.
- Supervisor: `.cache/mp3-size-verify-exit.json`, code 0, no signal, finished 2026-09-20T01:33:17.878Z.
- Final generated-file audit: all ten descriptions exactly match the locale sources; all ten pages accept MP3, and all ten language URLs are in the sitemap.
- Static browser acceptance: 14 cases passed; locale/mobile source acceptance: ten languages passed. No runtime code changed after browser acceptance; the final rebuild changed description text and timestamps.
- No required local gate skipped. Isolation uses the documented task-start baseline; Safari/Firefox and production deployment were not tested or requested.

Status at implementation handoff: implemented locally and verified; deployment followed below.

## Production deployment completed (2026-09-20)

- User request: `deploy`. Released from isolated checkout `/mnt/app/onlinefreetools/s10-release-20260920`, based on production `ae54b9df`, excluding unrelated unreleased local work.
- Production commit: `d26325b8` (`tools: ship MP3 file-size compression`), pushed successfully to `origin/main`. Cloudflare Workers Builds, build, deploy, report-build-status and GitHub verify all completed successfully.
- Cache version 4.72. Uploaded all 2,740 HTML gzip objects and 197 OG assets. R2 manifest and every HTML object's actual SHA-256 matched local output. Content hash: `58ee93e6935666ef451ca063ff842ff79ac5f43354cc1609460fcf314302e73f`.
- Release checkout's full nine-stage `verify:tool` passed with ordinary origin/main isolation. Local generated-page core and all ten mobile locales passed.
- `npm run verify:r2:live`: exit 0, production Worker and R2 aligned at 4.72.
- Production Chromium acceptance: all 14 core cases and ten mobile languages plus English/Chinese home entries passed, exit 0. First core attempt hit a 30-second Playwright timeout while serializing a 40 MiB buffer through CDP; retry used a real local fixture path and all assertions passed. No product code change was needed.
- Evidence in release checkout: `.cache/release-verify-exit.json`, `.cache/release-upload-exit.json`, `.cache/remote-bytes-report.json`, `.cache/release-live-verify.log`, `.cache/release-checks.json`, `.cache/mp3-size-browser/report-core.json`, `.cache/mp3-size-browser/report-locales.json`.
- Chinese production URL: https://onlinefreetools.org/zh/tools/reduce-an-mp3-file-size
- English production URL: https://onlinefreetools.org/tools/reduce-an-mp3-file-size

Status: deployed and production-verified. The original implementation workspace retains its pre-existing local branch and unrelated work; the clean release checkout contains the exact production commit.
