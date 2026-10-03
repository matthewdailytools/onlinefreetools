Date: 2026-10-03 11:53
Summary: Updated the browser audio/video capability map with current engines, product shapes, large-file acceptance criteria, and search-intent boundaries.
Visibility: project

[question]
完善“浏览器端音视频能力全量图（工具 · 路径 · 实现方案）” md文档，枚举在浏览器端能够实现的工具（模式：一个工具实现一个功能，一个工具实现完整相关功能【综合】，批量完成），同时要求能够稳定实现大量任务和大文件任务，且页面需要有足够的Info gain，页面含相关搜索意图关键词，描述能够清晰描述等SEO能力。

[try to solve]
## Context

The October 1 capability map mixed implemented and speculative browser media paths. It still described Mediabunny and MKV-to-MP4 as absent even after the 4.90 release, while leaving file-size ceilings easy to mistake for tested maximums. It also lacked an explicit one-function versus comprehensive versus batch product decision and concrete SEO acceptance rules.

## Process

1. Compared the map with current catalog shards, the extract-audio, Mediabunny, Whisper, and transcription source, and the October 2–3 QA records.
2. Checked official WebCodecs, MediaRecorder, OPFS/storage, Mediabunny, and Google Search Central documentation for capability and search-quality limits.
3. Corrected the Mediabunny/MKV-to-MP4 status, separated code limits from tested file sizes, and identified the old `transcribe-an-audio-file-to-text` page's `SpeechRecognition.start()` path as unverified file transcription.
4. Added candidate matrices for single-function, complete-workflow, and batch tools. Each entry now names a likely implementation path, large-file status, tentative search intent, and the result-specific information gain required before a page is justified.
5. Added engineering acceptance checks for input probing, bounded memory, OPFS output, batch partial success, background progress, and downloaded-output inspection. Added related-query routing, description examples, and per-slug coverage gates.

## Root cause / analysis

An engine's declared container support and a page's hardcoded size ceiling are weaker evidence than a successful result in a real browser. Similarly, a keyword variant does not justify a separate URL unless the tool completes a distinct task with its own verifiable output and explanation. The prior map did not keep those distinctions explicit as implementation progressed.

## Solution

The map now treats installed tools, tested paths, and candidates separately. It records that production 4.90 includes the Mediabunny MKV-to-MP4 AAC tools, while browser and codec combinations for future WebM/MOV/video editing tools remain POC work. It also requires per-slug intent/coverage review before any candidate is marked ready or localized.

## Notes / boundaries

This turn changed planning documentation only. No new tool brief, tool page, locale shard, or production deployment was created. Candidate search phrases are hypotheses, not SERP/Planner results or formal keyword-pool verdicts. The existing `.DS_Store` and prior production-regression log changes were preserved.

[actions]
- Updated `docs/media/2026-10-01-browser-av-capability-map.md`.
- Checked registered-slug references and local relative links, and ran `git diff --check`.

## Follow-up: which existing tools justify a separate batch slug?

The first revision listed a few batch candidates but did not audit the rest of the registered single-file families. A follow-up review added §11.4, grouping every existing audio/video family by its repeatable user task. It distinguishes existing batch pages, independent batch candidates, capabilities that need a shared POC, tasks best kept in a single or comprehensive page, and tasks blocked by unstable single-file behavior. The strongest new engineering candidate is a mixed-input audio-to-MP3 queue; high-memory video and Whisper batch tasks remain conditional. These are product feasibility judgments, not formal keyword-pool verdicts or authorization to create slugs.
