Date: 2026-09-11 15:14
Summary: Shipped S2 remove-silence-from-a-recording as a one-file silence cutter with ten-locale copy, RMS gap detection, and a green verify:tool pass.
Visibility: people

[question]
实现

## Tool links (English)
- https://onlinefreetools.org/tools/remove-silence-from-a-recording
- https://onlinefreetools.org/tools/trim-an-audio-clip-and-export
Chinese: https://onlinefreetools.org/zh/tools/remove-silence-from-a-recording

[try to solve]
## Context

The brief for 12-table **S2** was already green at `coverage:gate --phase=0b`. This round had to ship the page: cut long quiet gaps from a local recording and export **one** shorter WAV or MP3. That is not S1 (hand-set start and end) and not A3 (split-on-silence ZIP). SEO still had to stay people-first: task-sentence H1, same-intent synonyms absorbed in description/FAQ, no doorway URL for “silence remover”.

## Process

1. Wired catalog `page.style: "opts"`, an SVG icon, and `src/pages/removeSilenceFromARecordingPage.ts`. The IIFE reuses S1 decode/export/HUD patterns: gold-standard capsules Decode / Detect / Cut / Encode, lamejs only after **Export MP3**, desktop cap about 40 MB / 20 min and narrow-screen about 20 MB / 8 min.
2. Implemented windowed RMS (~50 ms). `levelDb = 20 * log10(rms)`. Runs below the threshold that last at least the minimum silence are shortened to the keep length (half at each edge of the gap) with a few milliseconds of fade at joins. Defaults match Speech: −40 dB / 0.5 s / 0.15 s keep. Gentle and Tight chips fill the advanced `<details>`.
3. Built-in sample is 5.00 s of tone with two 1.20 s gaps (`0.80 + 1.20 + 0.80 + 1.20 + 1.00`). On load the page auto-runs Remove silence so Export is enabled and the result line can show about **2.90 s** (`0.80 + 0.15 + 0.80 + 0.15 + 1.00`). A user file decodes and paints red gap bands but does **not** auto-cut. Video MIME is rejected. Export filenames are `{stem}-no-silence.wav|.mp3`.
4. Wrote ten i18n shards from the locale briefs (not an English skeleton). Master H1 is **Remove silence from a recording**; Chinese H1 is **从一段录音里去掉静音**. Each locale states the file stays on the device and is not uploaded. Why-choose titles include that locale’s H1. FAQ is q1–q8 only.
5. Linked the already-shipped trimmer’s `related` to this slug (`CROSS_TOOL_UPDATE=1`). README gained Chinese and English list rows next to the trimmer.
6. Because this slug’s `primaryTopic` is `sound-editor`, the topic leaf would fail or show empty rows unless S2 was in `TOPIC_IG` groups and had row copy. Added a `silence` group and ten-locale topic copy. Full `npm run build:topic-ig` still fails on unrelated catalog slugs that are not in `TOPIC_IG`; sound-editor keys were merged into `scripts/site/i18n-topic-ig.mjs` so the leaf H1, decision table, and workflow actually list both jobs.
7. Gates: `coverage:gate` phase 2, 4, and all green; `npm run verify:tool -- --slug=remove-silence-from-a-recording` green (with `CROSS_TOOL_UPDATE=1` because trim related, topic copy, and `docs/sound-editor/12-slug-hub-and-scene.md` changed). First `build:site` attempt failed on a missing local `tesseract.js` install; that is an environment gap, not this tool. After installing the already-declared package, site build and HTML smoke passed.

## Root cause / analysis

Competitor silence pages often stack three modes (remove all / trim edges / split ZIP) under a head-term H1 such as “Silence Remover Online”. Doorway policy forbids a second URL that only swaps delete/cut/truncate. The implementable difference is therefore one default job, visible seconds-removed, an honest size/time cap, and a keep-padding so cuts are not jump-cuts.

The topic cluster is a second surface. Leaving S2 only in the tool catalog would make `/topics/sound-editor` still read as “trimmer only”, which is false once two primary tools exist. Updating `topic-ig.mjs` plus copy is required; flattening only sound-editor was the practical way around the broken full-catalog `build:topic-ig` validator.

## Solution

| Item | Shipped |
|---|---|
| Slug / en H1 | `remove-silence-from-a-recording` / **Remove silence from a recording** |
| zh H1 | **从一段录音里去掉静音** |
| Algorithm | Tab RMS, one stitched `AudioBuffer`, WAV PCM / MP3 lamejs lazy |
| Sample | 5.00 s → about 2.90 s at Speech defaults |
| Related | trimmer ↔ this page; `file-metadata-analyzer` |
| Topic leaf | Two jobs in the decision table; H1 covers trim **or** remove silence |
| Status | `02` `implemented`, `03` `i18n-done` |

Pre-rendered English HTML confirms **Remove silence** is primary, **Export WAV** / **Export MP3** start `disabled`, HUD uses `.bcw-hud`, and How steps match those button labels. The English topic leaf title is “Trim a clip or remove silence, then export WAV or MP3” with a row linking this slug.

This session had no browser automation. Interactive checks not run here: red gap overlay after a user file, sample duration string ~2.90 s, MP3 download after lamejs load, video-drop error. Those belong in a local tab against `/tools/remove-silence-from-a-recording`.

## Notes / boundaries

- Do not add Split ZIP, a video dropzone, denoise, or filler-word removal on this URL.
- Do not related-link the unbuilt Hub `edit-audio-on-waveform` or A3.
- `npm run build:topic-ig` (all topics) still fails because many catalog primaries are missing from `TOPIC_IG`; that is a pre-existing repo issue, not introduced by S2.
- ar / ja / ru native-review checkboxes stay unchecked on purpose; status is still `i18n-done` after lint.

[actions]
- Added catalog shard, icon, Page, and ten i18n shards for `remove-silence-from-a-recording`
- Pointed trimmer `related` at the new slug
- Updated sound-editor topic IG copy, chrome, and flattened keys
- Updated README tool lists and `docs/sound-editor/12-slug-hub-and-scene.md`
- Marked `02` implemented and `03` i18n-done
- Ran coverage:gate 2/4/all and `verify:tool` (green)
