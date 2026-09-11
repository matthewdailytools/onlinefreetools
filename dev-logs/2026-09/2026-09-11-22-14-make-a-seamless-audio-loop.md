Date: 2026-09-11 22:14
Summary: Briefed and shipped make-a-seamless-audio-loop (S5): one-region equal-power wrap to a looping WAV/MP3, with honest caps and ten locales.
Visibility: people

[question]
立项和实现：make-a-seamless-audio-loop

## Tool links (English)
- https://onlinefreetools.org/tools/make-a-seamless-audio-loop
Chinese: https://onlinefreetools.org/zh/tools/make-a-seamless-audio-loop

[try to solve]
## Context
Doc 12 row **S5** is a separate user job from trim/split: open a **local pad or phrase**, mark **Start and End**, **crossfade the tail into the head**, and download **one cycle that can loop** (WAV for engines, MP3 for size). That is not S1 (hand trim only), not M2 (two-file DJ transition), not S6 (30s ringtone M4A), and not Hub DAW. The user named the draft slug, so this round wrote `work-tasks/make-a-seamless-audio-loop/` and implemented the page. Ahrefs was down; coverage used public SERP (BPMsonic Loop Maker, Violet loop-maker, SoniqTools looper, Elysia 音频循环器) plus the 12 search cluster. No Keyword Planner CSV.

## Process
1. Copied the work-tasks template and filled `00`–`03`. Direction A is the browser tab: one dropzone, Start / End, Crossfade **in the input area**, **Make loop** then **Export WAV** / **Export MP3**. Files stay on the device.
2. Wrote the 0b coverage table, the full same-intent related-search table (seamless loop / audio loop crossfade / loop audio / audio looper / loop maker / looping background music), and the 0i intent review. Planner row is N/A. `coverage:gate --phase=0b` green.
3. Implemented catalog `page.style: "opts"`, icon, `makeASeamlessAudioLoopPage.ts`, English shard, then `coverage:gate --phase=2`. HUD stages are Decode / Loop / Encode. lamejs loads only after Export MP3.
4. Rewrote the other nine locales from the locale briefs (not English locked skeletons). Spot-check en/zh/es/ja H1 + desc/FAQ absorb terms; `coverage:gate --phase=4` and `--phase=all` green.
5. README Tools List (zh + en) and doc 12 (six live sound tools; S5 start-condition: do not open `/audio-looper` or `/loop-maker`). Did **not** reverse-link other tools’ `related` (avoids isolation on their shards).
6. `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=make-a-seamless-audio-loop` green (coverage all, full `build:site`, HTML smoke, lint:seo, vendor, isolation). Ten i18n shards each have 96 keys matching English.

## Root cause / analysis
SERP “audio looper / loop maker” pages mix three products: (1) wrap one region onto itself, (2) a miniature DAW, (3) two-song crossfade or ringtone export. Folding those onto one URL here would collide with Hub, M2, and S6. The wrap is **equal-power by default**: `outLen = regionLen − fadeLen`; sample `i < fade` mixes `head·sin(g·π/2) + tail·cos(g·π/2)`. Default fade is **50 ms** (chips 20 / 50 / 200 / 500). Repeats default **1** so game engines loop the file; Advanced 4 / 8 bakes copies for players that will not loop. Baked output **longer than about 180 s is refused**. Caps match S1: about **40 MB / 20 min** desktop, **20 MB / 8 min** narrow screen. Play with a result sets `loop=true` so the join is audible; without a result it plays the region once.

## Solution
- **H1 (en)**: Make a seamless audio loop (task sentence, not “Audio Looper” / “Loop Maker”).
- **Actions**: **Make loop** / **Export WAV** / **Export MP3** / Load sample / Clear. How steps use the same button words. Crossfade stays in the input area, not the primary button row.
- **Sample**: 5.00 s tone in memory, Start 1.00 / End 3.00, 50 ms equal-power wrap → about **1.95 s**. `loadSample()` auto-runs Make loop on enter; Export stays enabled. Play then loops the result.
- **Related**: `trim-an-audio-clip-and-export`, `split-an-audio-file-by-duration`. No related to unbriefed Hub.
- Catalog `localProcessing: true`, `primaryTopic: sound-editor`. English URL has no `/en` prefix. Files stay on the device and are not uploaded.

## Notes / boundaries
- Not hand trim (S1), not two-file DJ crossfade (M2), not ringtone M4A (S6), not Hub waveform DAW, not AI seam finding, not a 10-hour generator, not YouTube rip, not BPM snap.
- audio looper / loop maker / loop audio / seamless audio loop stay on **this** URL.
- Browser click-through was not run (no live browser MCP; leftover local :8799 returned 404 for the new path). Ship gates included prerender HTML smoke: English/Chinese H1, How matching Make loop / 做成循环, `loadSample()` on enter, and the home latest card for this slug.
- Isolation used `CROSS_TOOL_UPDATE=1` because `docs/sound-editor/12-slug-hub-and-scene.md` is outside the single-tool allowlist. README is allowlisted. Other tools’ related shards were left unchanged; lint:seo reports an inbound-related warning (orphan in the related graph).
- ar / ja / ru “pending native review” checkboxes stay unchecked in `03`, same pattern as neighboring sound tools.

[actions]
- Added `work-tasks/make-a-seamless-audio-loop/` (`00`–`03`)
- Added catalog shard, icon, `src/pages/makeASeamlessAudioLoopPage.ts`, ten i18n shards
- Updated README Tools List and `docs/sound-editor/12-slug-hub-and-scene.md`
- `npm run coverage:gate -- --slug=make-a-seamless-audio-loop --phase=all`
- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=make-a-seamless-audio-loop`
