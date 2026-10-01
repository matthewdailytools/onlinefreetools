Date: 2026-10-01 09:35
Summary: Shipped make-srt-subtitles-from-a-video-file as a video-first Whisper SRT page (distinct from the audio tool), with shared loader opt-in sliding windows and cross-links.
Visibility: people

[question]
新开一个slug，make-srt-subtitles-from-an-video-file，把两者的用户体验，功能和区别 seo做到最好

## Tool links (English)
- https://onlinefreetools.org/tools/make-srt-subtitles-from-a-video-file
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file
- Chinese: https://onlinefreetools.org/zh/tools/make-srt-subtitles-from-a-video-file

[try to solve]
## Context
The audio SRT pilot already accepted video soundtracks, so a second URL risked doorway/scaled-content abuse unless UX, features, and SEO were truly split. The user asked for a new video slug with best differentiation.

## Process
1. Corrected draft slug `…-an-video-…` → **`make-srt-subtitles-from-a-video-file`** (grammar + search phrasing).
2. Wrote work-tasks 00–03 with 0b coverage + 0i intent review: primary **video to srt**; reject pure audio; no mic; video preview; related to audio SRT + waveform video.
3. Implemented catalog `opts`, Page (video-only accept, MP4 sample, `sliding_windows: true` on shared loader), icon, ten-locale i18n.
4. Cross-linked audio tool (`related` + FAQ en/zh) without changing Whisper default API.
5. Sample MP4 via ffmpeg (dark frame + existing JFK WAV). Isolation allowlist `.mp4`.
6. Gates: coverage 0b/2/4/all, verify:tool, full `build:site` (homepage cards present).
7. Local smoke (wrangler `:8787`): zh page 200; Playwright `#srtSample` → timed SRT in ~15.5s (JFK line); markers: `accept=video/*`, `<video>` preview, no mic, related → audio tool.
8. Full local retest 2026-10-01 ~10:00: restart `:8787`; Playwright suite allPass (video zh/en sample, audio sample, video rejects WAV with `err_audio_only`); `CROSS_TOOL_UPDATE=1 verify:tool` OK for both slugs.

## Root cause / analysis
Near-duplicate H1s would violate doorway policy. Differentiation is input type + preview + SEO primary keyword + missing mic path—not a title swap.

## Solution
| | Audio tool | Video tool |
|---|---|---|
| H1 | … from an **audio** file | … from a **video** file |
| Accept | audio (+ optional video) | **video only** |
| Preview | audio player | **video player** |
| Mic | optional | **none** |
| Engine | shared `/vendor/whisper` | same, explicit `sliding_windows: true` |

## Notes / boundaries
- Shared loader default remains non-sliding (POC/future tools safe).
- Production deploy not requested; local cache bumped toward 4.83 during seed.
- Skills: tool-coverage-pass + tool-token-efficiency.

[actions]
- Added work-tasks + catalog + Page + i18n + sample MP4 + README
- Updated audio related/FAQ; isolation allowlist mp4; vendor-whisper preserve-loader already in place
- verify:tool OK; build:site full OK; local Playwright Load sample → srt_ok
