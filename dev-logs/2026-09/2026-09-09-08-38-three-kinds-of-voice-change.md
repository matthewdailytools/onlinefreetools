Date: 2026-09-09 08:38
Summary: Documented the three voice-change layers in full: DSP pitch toys, OpenVoice-style timbre paint, and RVC train-then-infer.
Visibility: people

[question]
详细解释三种变声

[try to solve]
## Context
The previous note named V0/V1/V2 in a table. The user asked for a full explanation of what each kind actually changes in a voice.

## Process
Wrote `docs/sound-editor/04-three-kinds-of-voice-change.md`: speech as content + prosody + timbre; V0 algorithms (playbackRate, SoundTouch, LPC formant keep, Jungle); V1 as a frozen converter plus a 256-d embedding averaged from reference clips; V2 as a speaker-specific checkpoint trained on 10–50 min of audio, with browser limited to inference of an existing model. Linked from README, 00, and 03.

## Root cause / analysis
People collapse “voice change” into one slider. V0 twists the same speaker; V1 paints source words with a target color without new weights; V2 grows those weights offline. Mixing them produces impossible product promises (clone someone by pitching, or train RVC in a tab).

## Solution
Use the three-layer model to pick a stack. Site default: V0 in the waveform editor; V1 as a possible later slug; no in-page V2 training.

## Notes / boundaries
Still no work-tasks or pages.

[actions]
- Added `docs/sound-editor/04-three-kinds-of-voice-change.md`
- Updated `docs/sound-editor/README.md`, `00-request.md`, `03-voice-conversion-from-speaker-samples.md`
