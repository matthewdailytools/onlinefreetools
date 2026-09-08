Date: 2026-09-08 08:50
Summary: Added a multilingual JS speech-to-text architecture doc covering Web Speech, on-device Whisper, and Workers AI.
Visibility: people

[question]
新建一个语音转文字的文档，给出完整的js语音转文字方案，含多语

[try to solve]
## Context
The Text Converter Planner dropped ASR as a product, then the follow-up question established that JS STT exists in three unequal stacks. This turn asked for a durable technical document with multilingual coverage, not a shipped tool.

## Process
Wrote `docs/2026-09-08-js-speech-to-text-solutions.md`: S1 live dictation vs S2 file transcription vs S3 YouTube (refuse) vs S4 video extract. Scheme A is Web Speech with BCP-47 for the site’s ten UI languages. Scheme B is Transformers.js + multilingual `whisper-tiny` (not `.en`) after 16 kHz decode, vendor-git, click-to-load. Scheme C is existing Workers `AI` binding + `@cf/openai/whisper-large-v3-turbo` and ISO 639-1, Turnstile and a separate Neuron quota from Prompt AI. Cross-linked direction A.3, the 2026-06 media feasibility note, the package survey, Workers AI ops, and the 09-08 planner (still drop until a named brief).

## Root cause / analysis
Older site docs listed STT as Web Speech under “no upload,” which is false on Chrome and does not transcribe MP3. File multilingual quality belongs on turbo Whisper or a large local pack, not on the dictation API. Language chips must not become per-language URLs.

## Solution
One recommended page if the user later names a tool: files default to C, dictation to A with an honest network sentence, optional local tiny for privacy, no YouTube fetch. No `work-tasks/` in this turn.

## Notes / boundaries
Pricing and ONNX byte sizes are snapshots; Cloudflare docs win on conflict. POC list is required before promising 99-language product quality.

[actions]
- Added `docs/2026-09-08-js-speech-to-text-solutions.md` and cross-links
