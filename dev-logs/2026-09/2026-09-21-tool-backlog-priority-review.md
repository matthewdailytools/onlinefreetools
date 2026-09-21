# Tool backlog priority review

Date: 2026-09-21
Visibility: project

[question]
分析目前待建的工具以及优先级

[try to solve]
Compared catalog shards and page-module existence against sound and keyword planning documents. The current catalog has 274 entries, including 60 in the sound-editor topic. The sound roadmap has 99 explicit candidate slugs: 60 registered and 39 absent; ten further task rows do not specify independent slugs. Historical planning and tracker statuses lag implementation.

Prioritized verification of existing file-transcription and waveform-editor capabilities before downstream features. A source inspection found no-argument SpeechRecognition.start followed by speaker playback, which does not directly feed the chosen file into recognition. This is a source finding, not a completed browser audit. Suggested BPM detection, a metronome and a noise generator as the next sound candidates, subject to search-gap and output-quality validation. Cross-topic candidates emphasize reuse of OCR and batch-processing capabilities.

The detailed review is in docs/seo/reviews/2026-09-21/tool-backlog-priority.md, linked from the keyword tracker. No tool implementation, candidate verdict, deployment or pre-existing generated-file changes were modified. No current traffic forecast or exhaustive live acceptance was claimed.
