Date: 2026-10-01 10:50
Summary: Browser Playwright full test passed for large-file streaming extract and mixed batch ZIP (4 small + 1×43 MiB).
Visibility: people

[question]
进行浏览器完整测试，使用大文件和批量文件

## Tool links (English)
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files

[try to solve]
## Context
Needed real-browser proof that the new stable-extract paths work beyond synthetic Load sample: one >40 MiB clip (stream MP3) and a five-file batch including a large member.

## Process
1. Confirmed local wrangler `:8787` returned 200 for both tool URLs.
2. Built ffmpeg fixtures under `/tmp/ea-fixtures/`: `large-stream.mp4` (~49 MiB, 25 s testsrc2/qp0), four 4 s clips, `batch-large-22s.mp4` (~43 MiB).
3. Playwright (headless Chrome): single page forced WAV UI on large file → streaming MP3 + forced-mp3 note; batch queued 5 files as MP3 → ZIP download; small clip still WAV decode.

## Root cause / analysis
Solid-color high-bitrate encodes stayed under 1 MiB; `testsrc2` + `-qp 0` was required to exceed the 40 MiB stream threshold. Batch format chips live inside collapsed `<details>`—tests must open Advanced before clicking MP3.

## Solution
All three cases passed (`ALL_PASS=true`). Report: `/tmp/ea-fixtures/browser-full-test-report.json`.

| Case | Input | Result |
|---|---|---|
| single_large_stream | 49.05 MiB / 25 s | MP3 294.8 KiB + 流式提示 · ~13.6 s |
| batch_mixed | 4×~67 KiB + 43.18 MiB | 5 packed · ZIP 1.64 MiB · ~12.0 s |
| single_small_wav | 67 KiB / 4 s | WAV 344.6 KiB · ~1.5 s |

## Notes / boundaries
- Stream path wall time tracks media duration / playbackRate (~2×), not file size alone.
- Fixtures are local `/tmp` only; not committed to the repo.

[actions]
- Generated `/tmp/ea-fixtures/*` with ffmpeg; ran Playwright suite against `:8787`
