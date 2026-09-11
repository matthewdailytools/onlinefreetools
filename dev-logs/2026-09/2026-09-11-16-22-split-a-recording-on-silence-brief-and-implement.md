Date: 2026-09-11 16:22
Summary: Briefed and shipped split-a-recording-on-silence as a ZIP-of-clips job, distinct from one-file silence removal.
Visibility: people

[question]
立项和实现split-a-recording-on-silence

## Tool links (English)
- https://onlinefreetools.org/tools/split-a-recording-on-silence
Chinese: https://onlinefreetools.org/zh/tools/split-a-recording-on-silence

[try to solve]
## Context
The sound-editor table in `docs/sound-editor/12-slug-hub-and-scene.md` already named **A3** as a separate user job: cut a recording at long pauses and take **many files in a ZIP**. That is not S2 (`remove-silence-from-a-recording`), which stitches **one** shorter file, and not S3 equal-duration split or S4 cue sheets. The user asked to brief and implement the named slug in one pass.

## Process
1. Copied `work-tasks/_template/` into `work-tasks/split-a-recording-on-silence/` and filled `00`–`03` plus `notes.md` from public SERP (FyleTools, TunePocket, AudioForges, SoniqTools, GigAI). There is no Planner CSV for this cluster. Ahrefs was not available.
2. Locked the English H1 as the task sentence **Split a recording on silence**. Chinese H1: **按静音把一段录音切成多段**. Same-intent phrases (split audio by silence, split mp3 on silence, detect silence and split, 按静音分割音频) go in description / FAQ / use cases. One-file silence removal, equal-duration split, cue split, mute video, and “sound editor” stay out of the attacking H1.
3. Ran `coverage:gate --phase=0b` green, then marked `02` ready and implemented: catalog `opts`, icon, `splitARecordingOnSilencePage.ts`, English shard, then nine locales rewritten from the locale briefs (not an English skeleton).
4. Reused S2 decode / 50 ms RMS / HUD chrome. The cut rule is different: each qualifying silence range becomes a **midpoint cut**, clips shorter than the minimum are dropped, more than 50 clips is a hard refuse. **Download ZIP** lazy-loads `/vendor/jszip/jszip.min.js`; MP3 inside the ZIP lazy-loads lamejs.
5. Sample math (defaults −40 dB / 1.0 s / 0.3 s min clip): 0.80 + 1.20 + 0.80 + 1.20 + 1.00 → cuts at 1.40 s and 3.40 s → three clips **1.40 / 2.00 / 1.60 s**. `loadSample()` auto-runs Split on silence so Download ZIP is enabled; it does not auto-download or load JSZip on first paint.
6. Updated S2 related (backlink), README, topic cluster `sound-editor` (third group + three-step workflow + leaf H1 that names all three jobs), and doc 12. Flattened only the sound-editor keys into `i18n-topic-ig.mjs` because full `build:topic-ig` still fails on unrelated catalog primaries.
7. `coverage:gate --phase=all` and `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=split-a-recording-on-silence` both green.

## Root cause / analysis
Competitors often stack silence-split, equal parts, and manual markers on one URL. That would collide with S3 and with S2. This page only does silence-split → ZIP. Speech default minimum silence is **1.0 s** (longer than S2’s 0.5 s dead-air cutter) so breaths are less likely to become extra files. Cut-at-midpoint keeps a little quiet on clip edges instead of jump-cutting like a stitcher.

## Solution
- Slug / H1: `split-a-recording-on-silence` / Split a recording on silence
- Primary buttons: **Split on silence** / **Download ZIP** / Load sample / Clear
- Presets: Speech −40 / 1.0 / 0.3; Lecture −40 / 2.0 / 0.5; Album −45 / 1.5 / 1.0
- Caps: same as S1/S2 (about 40 MB / 20 min desktop, 20 MB / 8 min narrow); max 50 clips
- Related: `remove-silence-from-a-recording`, `trim-an-audio-clip-and-export`
- Catalog `page.style: "opts"`, `localProcessing: true`, `primaryTopic: sound-editor`

## Notes / boundaries
- No browser-click pass in this session (no live browser MCP). Prerendered English/Chinese HTML shows the H1, How steps matching button labels, sample durations, and `loadSample` in the page script. `verify:tool` HTML smoke passed.
- ar / ja / ru still have “pending native review” unchecked in `03`, same as S2.
- Do not fold this job back into S2. Do not add equal-duration or cue modes on this URL.
- Isolation required `CROSS_TOOL_UPDATE=1` because S2 related, topic IG copy, README, and doc 12 changed with the new slug.

[actions]
- Added `work-tasks/split-a-recording-on-silence/` (`00`–`03`, `notes.md`)
- Added catalog shard, icon, `src/pages/splitARecordingOnSilencePage.ts`, ten i18n shards
- Updated S2 related, README, `scripts/site/topic-ig.mjs` + ten topic copy files + flattened `i18n-topic-ig.mjs`, `docs/sound-editor/12-slug-hub-and-scene.md`
- `npm run coverage:gate -- --slug=split-a-recording-on-silence --phase=all`
- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=split-a-recording-on-silence`
