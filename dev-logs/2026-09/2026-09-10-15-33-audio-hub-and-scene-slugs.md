Date: 2026-09-10 15:33
Summary: Split the audio demand map into one hub editor (same-control jobs as chips) plus a short list of single-job slugs whose primary controls actually differ.
Visibility: people

[question]
调研需求细化能做的slug，按照一个大的编辑器（都满足）+细化一个点的需求模式（只满足）和规划

[try to solve]
## Context

The user wanted the sound-domain demand (doc 05) turned into slugs using the site’s existing hub-and-scene pattern: one big editor that covers a job family, plus pages that each only satisfy one refined job. This had to stay inside Google doorway rules and §3.3 H (split only when primary control / object / failure mode differ).

## Process

- Re-read §3.3 H, tool-i18n-seo split rules, and the image analogue (`image-compress` vs `bulk-compress-product-photos`).
- Walked 05 jobs (edit, repair, format, stems, identity, TTS, STT, publish, vertical kits) against 11 (hub S1/S2) and the STT architecture doc.
- Rejected same-control variants (cutter / recorder / wav-mp3 / ringtone / nightcore) as extra URLs.
- Wrote `docs/sound-editor/12-slug-hub-and-scene.md` and pointed 11/README at it.

## Root cause / analysis

“Refine one point” is not “one search phrase × one URL.” On this site, a point is either:

- a **chip** on the hub (same waveform, different default), or
- a **slug** only if the user expects a different control (video demux, file queue, transcript pane, ID3 form, loop mixer, bulk ZIP).

A tiny waveform page that only Trims would be a doorway of the hub. Satellite pages must stay one input / one primary action / one result, with related links back to the hub.

## Solution

- **Hub** (draft `edit-audio-on-waveform`): satisfies the whole timeline-edit type; absorbs trim/record/export/fade/normalize/denoise/pitch as chips across S1/S2.
- **Build satellites (draft, 0b later)**: extract-from-video, join-in-order, split-on-silence, transcribe-to-text, waveform-video, ID3 tags, sleep mixer (license-gated), bulk wav→mp3 only.
- **Plan**: P0 hub S1 → P1 extract+join → P2 hub S2 then transcribe or split → P3 the rest by 0b. No work-tasks this round.

## Notes / boundaries

- Slugs are scene-sentence drafts, not frozen H1s.
- 11 still forbids cutter/recorder/format-pair URLs; 12 adds *different-job* URLs only.
- STT-in-the-editor timeline stays out; a separate transcribe page is A4 and needs its own 立项口令.

[actions]
- Added `docs/sound-editor/12-slug-hub-and-scene.md`; updated `docs/sound-editor/11-executable-plan.md` and `README.md`
