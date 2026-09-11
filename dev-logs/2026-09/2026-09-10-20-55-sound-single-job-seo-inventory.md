Date: 2026-09-10 20:55
Summary: Rewrote sound-editor doc 12 as a demand-and-search inventory of single-job audio tools, no longer filtering rows by shared JS controls.
Visibility: people

[question]
再次分析 docs/sound-editor/12-slug-hub-and-scene.md，是否已经枚举完可以做的单个功能的sound 工具，将每个单点功能与用户需求和搜索关键词seo关联 ，优化补充完整文档（不考虑js是否同一个控件，以用户需求和搜索出发）

[try to solve]
## Context

Doc 12 previously listed eight satellite slugs whose **primary control differed** from the waveform hub (extract, join, split-on-silence, transcribe, waveform-video, ID3, sleep mixer, bulk wav→mp3). Everything else (cutter, recorder, denoise, pitch, ringtone) was a hub chip because it shared AudioMass. The user asked to re-enumerate **single-function sound tools from jobs and search**, and explicitly not to use “same JS control” as a filter.

## Process

- Re-read 05 (full job universe), 02 §12 absorb table, 11 hub contract, STT bounds, long-tail §3.3 (doorway still applies to **synonym empty pages**).
- Compared 123apps/mp3cut-style standalone tools (cut, join, mix overlay, video mute/replace, file-size compress vs dynamics compressor, noise generator vs sleep mixer).
- Ahrefs MCP was unavailable; search “档” is qualitative (头/中/长尾) pending Keyword Planner. Did not invent volumes.
- Rewrote `12-slug-hub-and-scene.md`; pointed README/11 at the new inventory. No work-tasks, no `src/`.

## Root cause / analysis

The old funnel asked the wrong first question. “Same waveform” is an implementation fact, not a user job. Searchers query *noise reduction*, *volume booster*, *mix voice and music*, *mp4 to mp3*, *white noise generator* as **one-task tools**. Filtering those out made the satellite list look complete when it only listed control-different pages.

Synonym doorway still holds: *cut mp3* / *trim audio* / *crop audio* stay one job. Overlay mix is not concatenate. Remove-silence-to-one-file is not split-on-silence-to-ZIP. Dynamic compressor is not “compress mp3 file size.”

## Solution

12 is now F1–F14 tables: each row = job + en/zh search cluster + 档 + 近义不拆 + draft scene slug + landing (`hub` / `scene` / `pair` / `defer` / `drop`). Hub and scene may both be true (capability on the editor **and** a one-task landing candidate). Building a URL still needs an explicit 立项 command, 0b, and full IG.

Gaps filled versus old A1–A8: video mute/add/replace audio; overlay mix and crossfade; silence-remove vs duration-split vs cue; high-search format pairs; file-size compress; TTS/noise/tone generators; subtitles/translate; BPM/key/tuner/metronome; vocal remover as defer, not missing.

## Notes / boundaries

- Not a ship plan: P0–P3 hub path unchanged; extra scene rows are unscheduled.
- *youtube to mp3* remains drop (ToS) even though it is a head query.
- 11 “never split cutter/recorder/wav-mp3” still means the hub must perform those jobs; 12 may list them as scene candidates.

[actions]
- Rewrote `docs/sound-editor/12-slug-hub-and-scene.md`
- Updated `docs/sound-editor/README.md` and a pointer in `11-executable-plan.md`
