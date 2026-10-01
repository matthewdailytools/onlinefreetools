Date: 2026-10-01 14:55
Summary: Published a full browser A/V capability map (tools, paths, formats, implementation options) for confirmation before any MKV→MP4 or demux work.
Visibility: people

[question]
音频和视频工具在网页端的能力和做到的程度，支持格式等需要清晰的全量工具和路径，以及实现方案，重新进行调研，给出完整的能力，形成文档，确认后再继续

[try to solve]
## Context
After Witcher-class MKV (~2.8 GiB, eac3) failed extract and a “batch convert to MP4” idea appeared, the product needed one inventory of what the site can actually do in-browser versus what would require new engines.

## Process
1. Enumerated catalog slugs that are real audio/video jobs (exclude OCR/spreadsheet false positives).
2. Mapped page implementations to four stacks: A PCM+lamejs, B OftExtractAudio, C MediaRecorder video re-encode, D Whisper.
3. Locked numbers from `stable-extract.js` and representative pages (80 MiB / 180 s video edit; 40–120 MiB Whisper; ISOBMFF 5 GiB vs fallback 500 MiB).
4. Documented gaps: no ffmpeg.wasm, no Matroska demux, no E-AC-3; remux-only MP4 does not fix DDP.
5. Wrote confirmation checklist D1–D7 (honest FAQ vs convert tool vs demux vs codec POC).

## Root cause / analysis
Capability was previously split across extract P0 logs and Whisper maps; video edit tools and audio convert tools were not in one matrix, so “batch to MP4” looked like a small sibling of extract when it is a new base.

## Solution
Authority draft: `docs/media/2026-10-01-browser-av-capability-map.md`. No new tools or engines until decisions D1–D7 are confirmed.

## Notes / boundaries
- Companion docs listed in the map header.
- Implementation must not start from this chat’s convert suggestion alone.

[actions]
- Added `docs/media/2026-10-01-browser-av-capability-map.md`
