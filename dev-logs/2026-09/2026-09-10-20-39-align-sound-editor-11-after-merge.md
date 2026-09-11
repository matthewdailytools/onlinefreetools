Date: 2026-09-10 20:39
Summary: Aligned docs 11/12 and the folder README with the AudioMass vendor-copy engine after the origin/save merge left the old no-fork contract in place.
Visibility: people

[question]
修正冲突遗漏的地方

[try to solve]
## Context

Merging `origin/save` into `main` only conflicted in `docs/sound-editor/README.md`. Git auto-merged `11-executable-plan.md` and `12-slug-hub-and-scene.md` from save. Those two files were written against the older 01 (self-built EDL, do not fork AudioMass). Local 01/02 round 12 already switched the engine to an MIT vendor copy of AudioMass.

## Process

Searched the sound-editor folder for leftover “no fork / self-built EDL / S1 without RNNoise / invent two-track in S3” lines. Confirmed 01 §4–§10 and 02 §13–§15 as the current engine and capability list. Rewrote 11 so sequencing still exists, but S1/S2 no longer strip upstream menus. Updated 12 hub chips and the README one-sentence conclusion.

## Root cause / analysis

Two parallel twelfth-round documents:

- Save branch (11/12, 2026-09-10): ship a from-scratch editor in slices; forbid AudioMass fork because locale/HUD/license felt uncontrollable.
- Local main (00/01/02/06): user allowed a full MIT tree copy; EDL is post-launch; multi-track/RNNoise/LUFS come with upstream and must stay on.

Keeping 11’s old stack (`wavesurfer v7` or canvas, npm SoundTouch, S3 two-track) would make the next “按方案执行” session rebuild the rejected engine.

## Solution

**11** now:

- Engine = `public/vendor/audiomass/` plus site chrome (HUD, 10 locales, file cap, isolation).
- Ban list = Wavacity, iframe to audiomass.co, Rubber Band GPL, first-screen FFmpeg — not “do not copy AudioMass”.
- S1 = vendor in the page; do not peel Effects / MultiTrack.
- S2 = packaging (visible LUFS, RNNoise HUD+FAQ, speed vs pitch copy), not a second DSP stack.
- S3 = optional later EDL memory swap, not “invent two tracks”.
- Session split A–E unchanged; start still requires an explicit 立项 command.

**12**: hub control is AudioMass commands, not EDL; chips for LUFS/denoise/speed stay on in S1; satellite POCs must not block vendor wrap.

**README**: states the aligned contract; dropped the “11 still forbids fork” leftover sentence.

Historical people logs from 15:26 / 15:33 were left as written (that day’s plan). This note supersedes their engine sentences.

## Notes / boundaries

Still no `work-tasks/` and no `src/` audio page. Next start is still 11 stage A after the user says 按方案执行 / 立项.

[actions]
- Rewrote `docs/sound-editor/11-executable-plan.md`
- Updated `docs/sound-editor/12-slug-hub-and-scene.md` and `docs/sound-editor/README.md`
