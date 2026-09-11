# Notes — split-a-disc-image-with-a-cue-sheet (S4)

Date: 2026-09-11. No Keyword Planner CSV for this slug.

## Competitor SERP (public pages, 2026-09-11)

| Page | What they ship | Gap vs this job |
|---|---|---|
| Vibes CUE Splitter | Audio + .cue **or** paste timestamps **or** waveform markers; WAV/MP3; local | Three jobs on one URL (YouTube chapters / hand markers ≠ cue INDEX). Weak on MM:SS:FF / INDEX 00 vs 01. |
| AlienFusion split-wav-cue | WAV + cue, local, CSV/permalink extras | WAV-only; disc-image BIN / FLAC / MP3 not the H1 job. |
| Digidust APE to FLAC/WAV | APE+CUE → FLAC/WAV ZIP, claims local | Converter H1 (APE→FLAC), not “split disc image”; APE decode in-browser is often oversold. |
| FFcuesplitter / shnsplit / bchunk | Desktop CLI, tags, APE via native codecs | Not a browser tool; no ZIP HUD; users still search *online cue splitter*. |
| Medieval CUE Splitter / CUETools | Windows GUI classics | Install; not a page. |

PAA / related (same job): cue splitter; split ape cue; split flac cue; split wav cue; bin cue splitter; split album with cue file; cue sheet track split; INDEX 01; shnsplit online; extract tracks from cue.

Out of intent: split audio by silence; split by duration; mp3 cutter; youtube chapters without a cue; ISO data disc; YouTube rip.

## Caps (honest)

A full 700 MB `.bin` CD image will not fit a tab. Desktop ~80 MB / 30 min; narrow ~30 MB / 10 min. WAV/BIN uses byte slicing (no whole-album float32). Compressed formats use `decodeAudioData` and the same cap. APE/TTA/WavPack: explicit cannot-decode. Multi-FILE cue (already one file per track): refuse.
