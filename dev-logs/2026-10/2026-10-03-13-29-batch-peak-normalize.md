Date: 2026-10-03 13:29
Summary: Implemented and locally verified ten-language batch audio sample-peak normalization with individual gain reports and large WAV output.
Visibility: project

[question]
Implement every unimplemented browser-feasible function in the AV capability map step by step, with early intent keywords, information gain, and full local page tests.

[try to solve]
## Fourth completed item

`/tools/batch-normalize-audio-files-to-peak` processes up to 20 separate MP3, WAV, M4A, FLAC or OGG inputs in a local browser queue. It measures each source sample peak, computes an individual constant gain for the common -1/-3/-6 dBFS target, measures the exported 16-bit PCM WAV peak, and reports the input/output values and file size. The page explains that this is not LUFS matching or intersample true-peak limiting. Ten localized opening descriptions place the batch peak task and result before the technical detail.

The first browser run found a real ID3 signature error: a 4-character slice was compared to a 3-character tag. Corrected it and added a valid ID3 MP3 to the mixed-format acceptance. Output uses bounded PCM chunks and OPFS for real files, with a 96 MiB retained-output memory fallback. Code caps are 20 files, 20 MiB/5 minutes per input and 60 MiB per WAV; these are not all empirically tested maxima.

## Verification

- `coverage:gate --phase=all`, `npm run build:site`, and `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-normalize-audio-files-to-peak`: passed. Gate evidence `.cache/verify-tool/batch-normalize-audio-files-to-peak/1791005296737-fef92a6f-0941-4a26-9cf2-0799cd03ba7d`.
- Final-build `node scripts/tool-modules/test-batch-peak-browser.mjs`: passed. Both auto samples downloaded with measured peaks near -1.00015 dBFS and distinct gains; -6 dBFS with 48 kHz mono changed actual output. Mixed OGG/ID3 MP3 succeeded while silent WAV/damaged MP3 failed independently; retry, 20 same-name inputs, stop/resume, input cap, ten mobile locales and RTL passed.
- A real four-minute MP3 generated a >40 MiB OPFS WAV. `ffprobe` confirmed PCM 16-bit, 44.1 kHz, stereo and 240 seconds. Download, OPFS cleanup and no-OPFS memory fallback passed. No unexpected network request or page exception occurred.

## Limits and next work

This is local only, not deployed. Maximum configured input size, 20 simultaneous long inputs, storage-quota exhaustion and crash recovery remain untested. The next §11.4 candidate is batch removal of silence. Other unimplemented browser-feasible audio, video and subtitle functions remain in the queue.

[actions]
- Added catalog, page, icon, ten locale shards, briefs and browser acceptance script.
- Added inbound related link from the single-file peak normalization tool.
- Updated capability map with local acceptance and the next priority.
