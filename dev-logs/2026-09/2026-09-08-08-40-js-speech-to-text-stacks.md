Date: 2026-09-08 08:40
Summary: JS speech-to-text exists in three stacks; Chrome Web Speech is not local, WASM Whisper is huge, Workers AI uploads audio.
Visibility: people

[question]
js有没有将语音转换为文字的js？

[try to solve]
## Context
After dropping the Text Converter Planner ASR cluster, the question is whether JavaScript can transcribe speech at all, and whether that changes the “do not ship STT” product call.

## Process
Checked existing direction docs (`docs/2026-06-23-10-15-js-media-conversion-feasibility.md`, `docs/2026-07-28-tool-direction.md` A.3, JS package survey). Those list **Web Speech API** as the STT path and mark audio tools as “usable, not first wave.” They do not split live dictation vs file/YouTube transcription, and they do not warn that Chrome’s `SpeechRecognition` typically sends audio to Google.

## Root cause / analysis
Three different products hide under “JS STT”:

1. **Web Speech API (`webkitSpeechRecognition`)** — live microphone dictation. Chrome/Edge generally use a **network recognizer**, so a page cannot claim `localProcessing` the way N1 OCR does. It does **not** consume an uploaded MP3 or a YouTube URL. Firefox support is historically weak.
2. **On-device Whisper / similar (transformers.js, whisper.cpp WASM)** — can transcribe a file in the tab, but English tiny models are still tens of MB; multilingual packs are larger. Same LCP/vendor-git problem as Paddle OCR, worse.
3. **Workers AI `@cf/openai/whisper`** — already typed in this repo’s Worker config. Audio goes to Cloudflare. Same privacy class as optional prompt AI, not same-origin WASM OCR.

Planner heads (`speech to text`, `mp3 to text`, `youtube to text`) match (2) or (3) or a full SaaS, not (1).

## Solution
JS **can** do STT, but not as a drop-in local “mp3/youtube to text” twin of N1. Keep the 2026-09-08 drop for that cluster. A future dictation page would need an honest “Chrome sends audio to the recognizer” label, or a click-to-load Whisper vendor with a POC, or Workers AI + Turnstile — each is a named product decision, not a FAQ on the JPG OCR tool.

## Notes / boundaries
Direction A.3 already allowed a simple TTS reader and a recorder as later audio tools. That is not the same as shipping a transcription desk. No page was implemented in this turn.

[actions]
- None (docs already listed Web Speech; this log records the local-vs-cloud split)
