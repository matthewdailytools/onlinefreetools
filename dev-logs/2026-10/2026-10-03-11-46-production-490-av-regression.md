Date: 2026-10-03 11:46
Summary: Confirmed production cache 4.90 and verified live audio extraction, error recovery, background progress, and Whisper SRT output.
Visibility: project

[question]
优先核实 `4.90` 的生产部署与线上回归，再处理临时脚本

[try to solve]
## Context

The October 2 audio/video defect fixes were committed, but the earlier log still described production as pending. The three untracked WebM/MKV locale generators also remained in `scripts/tmp/` after the corrected locale copy had shipped.

## Process

1. Ran `npm run verify:r2:live`. The local build, remote R2 metadata, and live Worker all reported `PAGES_CACHE_VERSION=4.90`; R2 matched 3,380 local gzip pages and the content hash.
2. Compared SHA-256 of the live and local `stable-extract.js` and `whisper-loader.js` files; both pairs matched. The relevant tool pages and vendor URLs returned HTTP 200.
3. Ran live Chrome file-input tests and inspected the downloaded results with `ffprobe` and `ffmpeg volumedetect`:
   - A 52 MiB WebM yielded a 14.98-second, 192 kb/s stereo MP3 with mean volume -24.3 dB.
   - A 147 MiB MOV batch yielded a ZIP with a 30.07-second, 192 kb/s stereo MP3 with mean volume -24.4 dB.
4. A corrupt WebM produced an error and kept Download disabled. Clear followed by Load sample succeeded and enabled Download. A simulated hidden tab with dead `requestAnimationFrame` completed MKV extraction.
5. The live audio-to-SRT sample completed after about 212 seconds of first-load model transfer. Its downloaded SRT contained one valid timestamped caption and recognized speech text. A shorter first observation ended at 181 seconds while model transfer was still advancing at 92%; that observation alone was not counted as success.
6. Confirmed no repository references to the three untracked locale generators, inspected their source, then removed them. The locale-leak scan reports the WebM/MKV tools clean. It still reports the previously known Japanese hub copy residue in `extract-audio-from-a-video-file`.

## Root cause / analysis

The older deployment-pending note was superseded by the later production upload and Git push. Version, hash, vendor asset, and actual downloaded-output checks now independently support the live 4.90 state. The first SRT sample is slow because its model assets download before transcription; progress continues rather than triggering the former total-time cutoff.

## Solution

Production 4.90 is confirmed. The targeted live regressions passed, and the obsolete untracked locale generators were removed. No tool source or production asset was changed in this verification turn.

## Notes / boundaries

This is a targeted live regression, not a full repeat of every setting across all 14 audio/video tools. The Japanese hub copy residue remains a separate known issue. The three pre-existing `.DS_Store` modifications were preserved.

[actions]
- `npm run verify:r2:live` passed.
- Live Chrome conversion, download, invalid-input, sample-retry, hidden-tab, and SRT checks passed.
- Removed three obsolete untracked `scripts/tmp/*webm*mkv*.mjs` generators.
