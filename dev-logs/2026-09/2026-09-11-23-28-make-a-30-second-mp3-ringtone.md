Date: 2026-09-11 23:28
Summary: Briefed and shipped make-a-30-second-mp3-ringtone (S6): a local 30-second window plus linear fades, exported as MP3 only, with honest M4R limits and ten locales.
Visibility: people

[question]
立项和实现make-a-30-second-mp3-ringtone

## Tool links (English)
- https://onlinefreetools.org/tools/make-a-30-second-mp3-ringtone
Chinese: https://onlinefreetools.org/zh/tools/make-a-30-second-mp3-ringtone

[try to solve]
## Context
Doc 12 row **S6** is a separate user job from trim and loop: open a **local song**, keep about **30 seconds**, add **fade in and fade out**, and download an **MP3 ringtone**. That is not S1 (arbitrary start/end trim), not S5 (equal-power wrap loop), not Hub DAW, and not an iPhone **M4R/M4A** installer. The user named the draft slug, so this round wrote `work-tasks/make-a-30-second-mp3-ringtone/` and implemented the page. Ahrefs was down; coverage used public SERP (SnipSound, Loopaloo, Notevibes, Tembrica/Favtoo, Chinese ringtone-maker pages) plus the 12 search cluster. No Keyword Planner CSV. v1 **does not write M4R**.

## Process
1. Copied the work-tasks template and filled `00`–`03`. Direction A is the browser tab: one dropzone, Start + Duration (default **30s**, chips **15 / 20 / 30 / 40**), Fade in **0.5s** / Fade out **1.5s** in the input area, **Make ringtone** then **Export MP3** only. Files stay on the device.
2. Wrote the 0b coverage table, the full same-intent related-search table (ringtone maker / mp3 to ringtone / ringtone cutter / android ringtone / 铃声制作 / 手机铃声), and the 0i intent review. Planner row is N/A. `coverage:gate --phase=0b` green. Intent verdict: **satisfy** the 30s fade+MP3 job; **intentionally unsatisfy** M4R, Hub, S1 arbitrary trim, S5 loop, YouTube rip.
3. Implemented catalog `page.style: "opts"`, icon, `makeA30SecondMp3RingtonePage.ts`, English shard, then `coverage:gate --phase=2`. HUD stages are Decode / Fade / Encode. lamejs loads only after Export MP3. No WAV button.
4. Rewrote the other nine locales from the locale briefs (not English locked skeletons). Spot-check en/zh/es/ja H1 + desc/FAQ absorb terms (`song to ringtone` / 歌曲做成铃声 / creador de tonos / 曲を着信音にする); `coverage:gate --phase=4` and `--phase=all` green.
5. README Tools List (zh + en) and doc 12 (seven live sound tools; S6 start-condition: do not open `/ringtone-maker` or `/mp3-to-ringtone`, do not promise M4R). Did **not** reverse-link other tools’ `related` (avoids isolation on their shards).
6. `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=make-a-30-second-mp3-ringtone` (coverage all, full `build:site`, HTML smoke, lint:seo, vendor, isolation). Isolation needs the flag because `docs/sound-editor/12-slug-hub-and-scene.md` is outside the single-tool allowlist.

## Root cause / analysis
SERP “ringtone maker / mp3 to ringtone” pages mix three products: (1) cut-and-fade a local file to a phone-length MP3, (2) an iPhone M4R packager, (3) a miniature DAW. Folding those onto one URL here would collide with Hub and would **lie** if this site does not encode AAC-M4R. The ringtone is a **slice plus linear fades**: output length equals the region length; fades change gain only (`g_in = i/fadeIn`, `g_out = (N-1-i)/fadeOut`). Default duration is **30s**; region **longer than 40s is refused** (Apple-style cap without pretending to write M4R). Fade in + fade out **≥ region length is refused**. Caps match S1: about **40 MB / 20 min** desktop, **20 MB / 8 min** narrow screen. Play with a result sets `loop=true` so the clip rings like a phone; without a result it does not encode.

## Solution
- **H1 (en)**: Make a 30-second MP3 ringtone (task sentence, not “Ringtone Maker”).
- **H1 (zh)**: 做成 30 秒 MP3 铃声.
- **Actions**: **Make ringtone** / **Export MP3** / Load sample / Clear. How steps use the same button words. Duration and fades stay in the input area, not the primary button row.
- **Sample**: 32.00 s tone in memory, Start 1.00 / Duration 30, fade in 0.5s / fade out 1.5s → about **30.00 s**. `loadSample()` auto-runs Make ringtone on enter; Export MP3 stays disabled until a result exists, then enables. Play then loops the faded clip. Sample does **not** open the HUD.
- **Related**: `trim-an-audio-clip-and-export`, `make-a-seamless-audio-loop`. No related to unbriefed Hub.
- Catalog `localProcessing: true`, `primaryTopic: sound-editor`. English URL has no `/en` prefix. Files stay on the device and are not uploaded.

## Notes / boundaries
- Not hand trim (S1), not seamless wrap-loop (S5), not Hub waveform DAW, not M4R/M4A, not a system ringtone installer, not YouTube rip, not copyright license.
- ringtone maker / mp3 to ringtone / ringtone cutter / 铃声制作 / 手机铃声 / 安卓铃声 stay on **this** URL.
- iPhone searches can use the same 30s faded MP3, then GarageBand/Finder; this page does not pretend the browser can write M4R.
- Isolation used `CROSS_TOOL_UPDATE=1` because `docs/sound-editor/12-slug-hub-and-scene.md` is outside the single-tool allowlist. README is allowlisted. Other tools’ related shards were left unchanged. lint:seo reports an inbound-related warning (orphan in the related graph) because those neighbors were not reverse-linked.
- ar / ja / ru “pending native review” checkboxes stay unchecked in `03`, same pattern as neighboring sound tools.
- Local check after `start:dev --no-build`: Worker needs `Accept: text/html` (bare curl 404s). Tool URLs then return 200 with H1 **Make a 30-second MP3 ringtone** / **做成 30 秒 MP3 铃声** and Make ringtone / Export MP3. Disk and Assets `/index.html` / `/zh/index.html` show the latest home card. Bare `/` can still hit a stale Worker cache of an older homepage. Headless Chrome dump-dom aborted (exit 134) in this agent environment, so the 30.00s sample result was not re-clicked in a live browser; `verify:tool` HTML smoke already required `loadSample()` on the prerendered page.

[actions]
- Added `work-tasks/make-a-30-second-mp3-ringtone/` (`00`–`03`)
- Added catalog shard, icon, `src/pages/makeA30SecondMp3RingtonePage.ts`, ten i18n shards
- Updated README Tools List and `docs/sound-editor/12-slug-hub-and-scene.md`
- `npm run coverage:gate -- --slug=make-a-30-second-mp3-ringtone --phase=all`
- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=make-a-30-second-mp3-ringtone`
