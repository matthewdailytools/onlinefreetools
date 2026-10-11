Date: 2026-10-11 12:54
Summary: Production QA of 99 video-editor and sound-editor tools found 98 smoke passes; strict Convert→Download confirmed core video/audio paths work, with one real defect on AIFF→WAV sample decode in Chrome.
Visibility: people

[question]
测试线上视频和声音工具是否功能正常

## Tool links (English)
- https://onlinefreetools.org/topics/video-editor
- https://onlinefreetools.org/topics/sound-editor
- https://onlinefreetools.org/tools/extract-audio-from-an-mp4-file
- https://onlinefreetools.org/tools/convert-an-mkv-file-to-an-mp4-file
- https://onlinefreetools.org/tools/trim-a-video-clip-and-export
- https://onlinefreetools.org/tools/make-srt-subtitles-from-a-video-file
- https://onlinefreetools.org/tools/trim-an-audio-clip-and-export
- https://onlinefreetools.org/tools/convert-an-aiff-file-to-wav

[try to solve]
## Context
After shipping the `video-editor` topic (cache 4.91), verify that production video and sound tools still complete Load sample → convert/export paths.

## Process
1. Added `scripts/qa/run-av-topic-prod-qa.mjs` and ran it against `https://onlinefreetools.org` for all 99 tools with `primaryTopic` in `{video-editor, sound-editor}`.
2. First-pass results: **pass=98, fail=1, warn=0** in ~3.7 minutes (video 37/37, sound 61/62). Sole fail: `convert-an-aiff-file-to-wav`.
3. Strict retests dismissed the Chinese locale banner, waited for sample file labels, and required Download/Export or result media. Confirmed extract/batch-extract MP4, MKV→MP4, video trim/compress, soft subs, video SRT (Whisper ~185s), and audio trim (Export WAV/MP3 enabled).
4. Headed Chrome reproduced AIFF failure: valid `public/samples/convert-an-aiff-file-to-wav.aiff` loads, then HUD reports browser decode failure; Download stays disabled.

## Root cause / analysis
- Most AV tools on production behave correctly for the sample path.
- AIFF→WAV depends on `decodeAudioData`; Chromium often cannot decode AIFF/CAF even when the file is a well-formed AIFF on disk. The tool already surfaces that limit; the built-in sample currently hits it, so “Load sample” never yields a WAV.
- First-pass automation can over-pass when status/HUD text appears before a real download; trim audio exports are labeled Export, not Download.

## Solution
- Documented results in `docs/manual-qa/2026-10-11-av-topic-prod-qa-report.md` (+ JSON / strict JSON).
- No production code change in this turn. Recommended fix for AIFF (separate task): ship a Chrome-decodable sample (e.g. WAV/CAF that the page accepts, or a tiny AIFF known to decode) and/or add a non-WebAudio decode fallback.

## Notes / boundaries
- Mic recording, waveform drag UX, and tap-to-LRC still need manual checks.
- Multi-GiB OPFS and wrong-format matrices were not re-run here.
- Re-run: `node scripts/qa/run-av-topic-prod-qa.mjs`

[actions]
- Added `scripts/qa/run-av-topic-prod-qa.mjs`; wrote `docs/manual-qa/2026-10-11-av-topic-prod-qa-*`; confirmed AIFF decode defect on production
