Date: 2026-10-01 19:40
Summary: Extended the browser A/V capability map with a full in-browser video conversion tool inventory (V0/V1/V2 engines, shipped adjacent pages, candidate convert pairs).
Visibility: project

[question]
在文档中增加视频转换工具清单，且能在浏览器完成的

[try to solve]
## Context
The capability map already covered extract/audio stacks; product needed an explicit list of **video conversion** jobs that can finish in the browser (not cloud/ffmpeg-desktop wrappers).

## Process
1. Confirmed catalog has no `convert-*-to-mp4` / video-to-gif / compress-video landings; only V0 MediaRecorder adjacent tools and image `images-to-gif`.
2. Split browser video-convert bases into V0 MediaRecorder, V1 WebCodecs+mux (mp4box/mediabunny), V2 ffmpeg.wasm.
3. Added §4.6 tables: shipped adjacent, candidate format pairs, edit converts, subtitle writeouts, matrix, suggested ship order; extended §8 with D8/D9.

## Solution
Updated `docs/media/2026-10-01-browser-av-capability-map.md` §4.6 (+ cross-links in §0/§3/§6/§8). Still awaiting confirmation before implementation.

[actions]
- Edited docs/media/2026-10-01-browser-av-capability-map.md
