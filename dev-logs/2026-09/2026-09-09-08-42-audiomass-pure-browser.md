Date: 2026-09-09 08:42
Summary: Official AudioMass is a client-side browser editor: Web Audio + plain JS, no audio backend; the Go/Python servers only serve static files.
Visibility: people

[question]
AudioMass 是否纯浏览器实现

[try to solve]
## Context

The sound-editor research in `docs/sound-editor/` treats AudioMass as the main no-upload competitor. The question is whether that claim holds: is AudioMass a pure in-browser implementation, or does it send audio to a server?

## Process

1. Read the in-repo survey (`docs/sound-editor/01-js-implementation-research.md`), which already classified AudioMass as a local web editor (lane C).
2. Checked the official site welcome copy at https://audiomass.co and the about page.
3. Checked the GitHub repo `pkalogiros/AudioMass` (production branch): README, `src/about.html`, and `src/audiomass-server.go`.
4. Separated official AudioMass from third-party forks (for example audio.addy.ie adding “Transcribe with AI”).

## Root cause / analysis

“Pure browser” can mean three different things. AudioMass satisfies the product meaning, not a “zero native code in the whole stack” meaning.

| Meaning | AudioMass |
|---|---|
| Audio never uploaded; all edit/FX/export run in the tab | **Yes** |
| No native plugin, no desktop app | **Yes** (PWA optional) |
| Zero native code anywhere | **No** — `decodeAudioData` uses the browser engine’s codecs; MP3 uses lame.js (LAME port) often in a Worker |

The Go/Python files in the repo look like “a backend” but they are static HTTP servers for local development: CORS, `application/wasm` MIME, no-cache on JS. They do not decode, mix, or encode user audio.

Author statements that match the code:

- Welcome: “runs entirely in the browser with no backend and no plugins required.”
- About: “written solely in plain old-school javascript… has no backend or framework dependencies.”
- About: “runs locally in the browser with no backend, and can keep working offline after it has been loaded.”

Runtime stack (official):

- Decode/play: Web Audio `decodeAudioData` / `AudioBufferSourceNode`
- Waveform: vendored WaveSurfer 2.x
- Cut/FX: JS buffer ops + `OfflineAudioContext` (effects can be previewed before apply)
- Record: `getUserMedia`
- MP3: lame.js in a Worker
- Drafts/sessions: IndexedDB; multitrack `.amss` is local audio + JSON, LZMA-compressed
- Offline: PWA after first load

Caveats that do **not** make it a cloud editor:

- “Load from URL” is a browser fetch into the tab, then local processing.
- Filters historically run on the main thread and can freeze the UI; the author says moving them to a Worker (or WASM) would be better. That is still client-side.
- Forks that add cloud AI (transcription, etc.) are not official AudioMass.

## Solution

Treat official AudioMass as **pure browser for audio work**: static hosting + Web Audio + JS/Workers. Do not treat the Go/Python helpers as an audio API. Do not confuse it with Wavacity (Audacity → WASM, GPL-2) or with upload editors (TwistedWave, mp3cut).

For this site: same privacy lane is valid; do not iframe or fork the AudioMass shell.

## Notes / boundaries

- Live: https://audiomass.co — Source: https://github.com/pkalogiros/AudioMass
- License of the shell is MIT; lame is LGPL.
- This log does not change `src/` or create a tool page.

[actions]
- Verified AudioMass about/README/static-server against the in-repo sound-editor survey
