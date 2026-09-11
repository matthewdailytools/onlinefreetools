Date: 2026-09-11 20:43
Summary: Briefed and shipped split-a-disc-image-with-a-cue-sheet (S4): INDEX 01 album split to a named-track ZIP, with honest APE/size refusals and ten locales.
Visibility: people

[question]
立项和实现：split-a-disc-image-with-a-cue-sheet

## Tool links (English)
- https://onlinefreetools.org/tools/split-a-disc-image-with-a-cue-sheet
Chinese: https://onlinefreetools.org/zh/tools/split-a-disc-image-with-a-cue-sheet

[try to solve]
## Context
Doc 12 row **S4** is a separate user job from the other sound splitters: open a **whole-album image plus a cue sheet**, cut at **INDEX 01**, and take **named tracks in a ZIP**. That is not A3 (cut on silence), not S3 (equal clock slices), not S2 (stitch one shorter file), and not S1 (hand trim). The user named the draft slug, so this round wrote `work-tasks/split-a-disc-image-with-a-cue-sheet/` and implemented the page. Ahrefs was down; coverage used public SERP (Vibes, AlienFusion, Digidust, FFcuesplitter, ArchWiki) plus the 12 search cluster. No Keyword Planner CSV.

## Process
1. Copied the work-tasks template and filled `00`–`03` plus `notes.md`. Direction A is the browser tab: one dropzone for the image and `.cue`, optional paste of the same sheet, **Split tracks** then **Download ZIP**.
2. Wrote the 0b coverage table, the full same-intent related-search table (cue splitter / split flac cue / split wav cue / split ape cue / bin cue / paste cue), and the 0i intent review. Planner row is N/A. `coverage:gate --phase=0b` green.
3. Implemented catalog `page.style: "opts"`, icon, `splitADiscImageWithACueSheetPage.ts`, English shard, then `coverage:gate --phase=2`. HUD stages are Parse / Decode / Split / Pack (Encode before Pack when the ZIP is MP3). JSZip and lamejs load only after Download ZIP.
4. Rewrote the other nine locales from the locale briefs (not English locked skeletons). Spot-check en/zh/es/ja H1 + desc/FAQ absorb terms; `coverage:gate --phase=4` and `--phase=all` green.
5. Reverse-linked S3 and A3 `related`, README Tools List (zh + en), and doc 12 (five live sound tools; S4 start-condition: do not re-brief a near-synonym cue-splitter URL).
6. `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=split-a-disc-image-with-a-cue-sheet` green (coverage all, full `build:site`, HTML smoke, lint:seo, vendor, isolation). Ten i18n shards each have 105 keys matching English.

## Root cause / analysis
SERP “cue splitter” pages mix three different products: (1) true INDEX cuts, (2) YouTube-chapter / waveform markers with no FILE line, (3) format conversion that advertises APE in the H1. Folding those onto one URL here would collide with Hub marker editing and would over-promise decode. Cue times are **CD frames**, not milliseconds: `t = mm×60 + ss + ff/75` (75 frames/s). **INDEX 01** is the start of the track; **INDEX 00** is pregap and is shown, not used as the default cut. The last track runs to EOF. A cue with several `FILE` lines is already one file per track, so this page refuses it instead of pretending to split. WAVE / BINARY `.bin` (2352-byte CDDA sectors, 588 frames) can be sliced as bytes before wrapping an AudioBuffer; MP3/FLAC/M4A use `decodeAudioData`. APE/TTA/WavPack fail in plain language: convert the image to WAV or FLAC, keep the same cue, then Split tracks again. Caps are honest refusals, not silent truncation: about **80 MB / 30 min** on desktop, **30 MB / 10 min** on a narrow screen, plus a Float32 RAM cap around 280 MB; a **700 MB CD `.bin` will not fit**. Max **50** tracks.

## Solution
- **H1 (en)**: Split a disc image with a cue sheet (task sentence, not “Cue Splitter Online”).
- **Input**: one multi-file dropzone that sorts the image vs `.cue`; `<details>` paste is the same sheet, not a YouTube chapter list.
- **Actions**: **Split tracks** / **Download ZIP** (disabled until tracks exist) / Load sample / Clear. How steps use the same button words.
- **ZIP names**: `{nn} {title}.wav` (or MP3 from Advanced); archive `{album}-cue-tracks.zip`.
- **Sample**: 6.00 s (440 / 550 / 660 Hz, two seconds each) with INDEX 01 at 00:00:00 / 00:02:00 / 00:04:00 titled Intro / Middle / Outro Tone → **2.00 / 2.00 / 2.00 s**. `loadSample()` auto-splits on enter so Download ZIP is enabled; it does not load JSZip on first paint.
- **Related**: `split-an-audio-file-by-duration`, `split-a-recording-on-silence`.
- Catalog `localProcessing: true`, `primaryTopic: sound-editor`. English URL has no `/en` prefix. Files stay on the device and are not uploaded.

## Notes / boundaries
- Not silence ZIP (A3), not equal-duration ZIP (S3), not one-file silence removal (S2), not hand trim (S1), not YouTube chapters, not ISO data discs, not YouTube rips, not APE decode.
- flac/wav/ape/bin/mp3 + cue stay on **this** URL; paste-cue is absorb, not a second page.
- Browser click-through was not run (no live browser MCP). Ship gates included prerender HTML smoke: English/Chinese H1, How matching Split tracks / 按曲目切开, `loadSample()` on enter, and the home latest card for this slug.
- Isolation needed `CROSS_TOOL_UPDATE=1` because S3/A3 related, README, and `docs/sound-editor/12-slug-hub-and-scene.md` changed with the new slug.
- ar / ja / ru “pending native review” checkboxes stay unchecked in `03`, same pattern as neighboring sound tools.

[actions]
- Added `work-tasks/split-a-disc-image-with-a-cue-sheet/` (`00`–`03`, `notes.md`)
- Added catalog shard, icon, `src/pages/splitADiscImageWithACueSheetPage.ts`, ten i18n shards
- Updated S3 and A3 catalog `related`, README Tools List, `docs/sound-editor/12-slug-hub-and-scene.md`
- `npm run coverage:gate -- --slug=split-a-disc-image-with-a-cue-sheet --phase=all`
- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=split-a-disc-image-with-a-cue-sheet`
