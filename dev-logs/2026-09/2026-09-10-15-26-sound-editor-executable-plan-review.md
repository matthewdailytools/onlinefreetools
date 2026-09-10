Date: 2026-09-10 15:26
Summary: Reviewed the sound-editor docs against site constraints; locked an executable S1/S2 plan on one slug, starting only after an explicit 执行/立项 command.
Visibility: people

[question]
之前方案进行review，给出可执行方案，后面按方案执行

[try to solve]
## Context

After clarifying that “audio space” means a product continent (not a podcast subdomain), the user asked to review the existing sound-editor scheme and turn it into a plan later sessions can execute without re-litigating scope.

Existing material: `docs/sound-editor/01`–`10` (editor research, universe map, W0–W6, clone/cover costs). No `work-tasks/` folder, no catalog slug, zero shipped audio tools.

## Process

- Re-read 01 Q-bar / EDL stack, 02 v1 chrome and “must ship all effects,” 06 W0–W6 vs “if only this site, W0+W1 DSP subset.”
- Checked tool-creation gates (0b/0i, opts, `build:site`, vendor, gold HUD) and token-efficiency session splits A–D.
- Confirmed related candidates `file-metadata-analyzer` and `file-hash` exist; `audio-trim` does not.
- Wrote `docs/sound-editor/11-executable-plan.md` and pointed the folder README at it.

## Root cause / analysis

The direction was right: one waveform editor page, absorb trim/record/export, no Wavacity/format matrix, stay in the local-edit layer rather than ElevenLabs.

The ship shape was wrong. 02 required LUFS, RNNoise, and SoundTouch in the first release. That is several times a normal weekly tool, while 01 already advised POC-then-effects. 06’s seed library and eight V0 filters do not belong on this site’s first page. A subdomain still does not create a channel.

## Solution

Contract in **11**:

- Same slug forever for cutter/recorder/wav-mp3.
- **S1**: real editor (EDL, zero-cross, undo, preview on gain/fade/peak-norm, record, WAV+MP3, gold HUD, 10 locales).
- **S2** (same URL, separate user command): LUFS, EQ, compressor, RNNoise, time-stretch pair.
- **S3** two-track only if asked again.
- Sessions: A brief → B1 POC engine → B2 export+en → C locales → D ship → E S2.
- Start A only when the user says 按方案执行 / 立项 / 创建.

## Notes / boundaries

- 11 overrides 02’s “v1 must include every effect on first ship” for sequencing only; Q-bar in 01 still applies (do not claim “best” after S1).
- This round did not create `work-tasks/` or `src/` files.

[actions]
- Added `docs/sound-editor/11-executable-plan.md`; updated `docs/sound-editor/README.md`
