# 01 — Direction

**Primary direction A: transcribe several independent audio files into editable SRTs.** Load one local multilingual Whisper model once, then process files serially. Each result has its own cue count, editable SRT and download. A failed/empty source does not erase successful subtitles. This differs from `make-srt-subtitles-from-an-audio-file` by queueing multiple independent source files, not by merging captions.

The audio-language choice is the language of speech inside files, not page/UI language. Auto detection is default. The tiny local model has accuracy limitations and may hallucinate in silence or struggle with accents/noise; users must review timestamps and text. Long inputs are bounded by source bytes and decoded duration, and no unlimited large-batch claim is made. The 45 MB model is lazy-loaded after an explicit action, never on page load.
