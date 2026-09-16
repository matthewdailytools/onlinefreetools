Date: 2026-09-16 12:15
Summary: Finish the M4A converter with real media acceptance and an explicit oversized-input test waiver.
Visibility: project

[question]
跳过此次测试，继续

## Tool links (English)

- https://onlinefreetools.org/tools/convert-an-m4a-file-to-mp3

[try to solve]

## Implementation and scope

The independent converter validates an audio-only M4A/AAC input, decodes with browser audio APIs, and encodes MP3 with the existing same-origin encoder. Ten authored locale shards include 59 fields each. The original five-second stereo AAC sample is a checked-in static asset: normal builds and visitors do not need FFmpeg. Regeneration is optional developer tooling.

The release tree contains P3 and its verification support only. The unfinished MP3-to-WAV P2 sources and unrelated workflow drafts remain in the original working directory and are not included in this release. The cache version changes from 4.70 to 4.71.

## Evidence and recovery

The full build generated 225 tools in ten languages and 2730 gzip HTML files. Source coverage, HTML wiring, SEO and vendor checks passed. The aggregate isolation step encountered a sandbox child-process EPERM; rerunning that exact read-only check outside the sandbox passed. This was not a permission to bypass isolation.

The old cached Chromium lacks AAC decoding. Official Chrome for Testing successfully converted the real sample to a 120999-byte MP3: two non-silent channels and 5.0416 seconds including encoder padding. The test checks the actual downloaded bytes, output decoding, bitrate invalidation, mono M4A, ADTS AAC, platform-dependent ALAC handling, fragmented/video/protected/truncated rejection and failed-resource retries. Ten mobile locales are checked by the same runner. The site's existing analytics script is blocked during this test; the network assertion is scoped to the converter, not a claim that the site has no analytics.

The host has approximately 1 GiB RAM. Kernel logs recorded Chrome OOM kills at 12:00:06 and 12:07:11 UTC during oversized Buffer injection. The user explicitly waived only the over-40-MiB browser test. The runner accepts `--skip-oversized` and prints SKIP; the production guard is unchanged. The earlier full `/tmp` condition was separate and was resolved by moving release artifacts to the workspace filesystem. Build and browser verification are run serially.

## Release protocol

Applied repository coverage-pass, token-efficiency, converter SERP/landing SEO and converter input-UI workflows. Before publishing, finish the browser runner with the recorded waiver, refresh log/sitemap artifacts, and rerun applicable source/HTML/SEO/vendor/isolation checks. Upload uses remote manifest hash comparison, not a forced-full flag. Verify the remote manifest before pushing main, then verify the live cache version, tool/sample URLs and home-page discovery. Upload and live results are reported separately from this pre-release record.
