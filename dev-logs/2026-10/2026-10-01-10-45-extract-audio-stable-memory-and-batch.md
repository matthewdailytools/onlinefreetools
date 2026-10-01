Date: 2026-10-01 10:45
Summary: Extract-audio now uses decode-or-stream-MP3 for large files; shipped batch-extract-audio-from-video-files with sequential memory-safe ZIP; single-file page links to batch in desc/FAQ/related.
Visibility: people

[question]
extract-audio-from-a-video-file，优化：解决大内存文件稳定抽取。增量批量处理的slug：batch-extract-audio-from-video-files,也需要解决大批量文件和内存问题。然后在extract-audio-from-a-video-file描述处给出链接到batch-extract-audio-from-video-files和说明

## Tool links (English)
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files
- Chinese: https://onlinefreetools.org/zh/tools/extract-audio-from-a-video-file
- Chinese: https://onlinefreetools.org/zh/tools/batch-extract-audio-from-video-files

[try to solve]
## Context
Single-file extract used full `arrayBuffer` + `decodeAudioData`, capped at 80 MiB / 10 min. Long videos peak on full Float32 PCM. Users also need many files without holding every decode at once, plus clear SEO/UX split from the single-file page.

## Process
1. Added shared vendor `public/vendor/extract-audio/stable-extract.js` (`window.OftExtractAudio`): short path decode; long/large path MediaElement + ScriptProcessor → streaming lamejs MP3; limits ≈200 MiB / 3 h; AbortSignal.
2. Rewired `extractAudioFromAVideoFilePage.ts` to load lamejs + stable-extract; Stop; update en/zh (+ stub keys elsewhere); description/FAQ/related → batch slug.
3. Shipped `batch-extract-audio-from-video-files` (brief 0b/0i, catalog, Page, ten locales): queue ≤30, serial `extractFile`, ZIP, skip failures, related back to single extract.
4. Gates: coverage all + `CROSS_TOOL_UPDATE=1 verify:tool` both slugs; full `build:site`; local Playwright Load sample both OK.

## Root cause / analysis
Whisper-style sliding windows do not apply to extract: the bomb is whole-file PCM. Streaming encode while playing avoids retaining a full `AudioBuffer`. Batch safety is **serial** processing + release between files, not parallel decode.

## Solution
| Path | When | Output |
|---|---|---|
| decode | ≤≈40 MiB and ≤≈15 min | WAV or MP3 |
| stream-mp3 | larger / longer (to ≈200 MiB / 3 h) | MP3 only (forced if WAV selected) |
| batch | many videos | serial extract → ZIP |

## Notes / boundaries
- Stream path needs Web Audio + playable blob; exotic codecs still fail honestly.
- Playback rate ×2 on stream path; longer wall-clock than offline demux/ffmpeg.
- Skills: tool-coverage-pass, tool-token-efficiency, converter-input-ui.
- Not deployed unless requested.

[actions]
- Added `public/vendor/extract-audio/stable-extract.js`; lint:vendor required path
- Updated extract Page + i18n + catalog related
- Added batch work-tasks, catalog, Page, i18n, icon
- verify:tool OK both; build:site OK; Playwright sample OK
