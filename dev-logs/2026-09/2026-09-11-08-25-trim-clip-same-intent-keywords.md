Date: 2026-09-11 08:25
Summary: Absorbed every same-intent trim/cut/crop/cutter query into the audio-clip tool’s description, FAQ, and use cases without new URLs.
Visibility: people

[question]
优化页面的seo描述和关键词，需要包含同一个搜索意图的所有关键词

## Tool links (English)
- https://onlinefreetools.org/tools/trim-an-audio-clip-and-export
Chinese: https://onlinefreetools.org/zh/tools/trim-an-audio-clip-and-export

[try to solve]
## Context
The trimmer already had a task-sentence H1. Meta and FAQ only named a few synonyms (mp3 cutter, cut mp3, crop audio). Same-intent searches such as trim audio, cut audio, trim mp3, crop mp3, audio cutter, and the Chinese 剪切/切割/剪音频 set were incomplete. Visible FAQ also said “we do not split URLs,” which is engineering talk banned on the page.

## Process
1. Listed the S1 cluster from `docs/sound-editor/12-slug-hub-and-scene.md` plus local 03 search terms: cut/trim/crop of one start–end range on a local file. Left out different jobs (sound editor H1, ringtone M4A, video/YouTube, batch trim).
2. Rewrote `tool_*_description` so the first ~120–160 characters stay a snippet (verb + crop/trim + WAV/MP3 + not uploaded), then Steps/Example, then remaining synonyms in one natural sentence.
3. Expanded FAQ q2/a2 and Use cases in all ten locales; removed “extra URL / 近义网址” lines.
4. Updated `02` coverage table and `03` 0b/1b/2b rows (en,zh,es,ja named in 2b). `coverage:gate --phase=all` green.

## Root cause / analysis
Same intent must live on one URL (doorway policy). Completeness means every synonym has a landing in description/FAQ/usecase, not a keyword meta tag (Google ignores it) and not a “related keywords” list.

## Solution
English snippet opens with “Trim audio on your device: crop a local clip…”. Absorb list in copy: trim audio, trim an audio clip, crop audio, cut audio, audio trimmer, audio cutter, mp3 cutter, mp3 trimmer, cut mp3, trim mp3, crop mp3. Chinese: 剪音频 / 裁剪音频 / mp3剪切 / 剪mp3 / 音频裁剪 / 剪切mp3 / 切割mp3 / 裁剪mp3 / 音频剪切 / 音频剪辑 / mp3切割 / 在线剪音频. Other locales use local cut/trim/crop verbs from `03`. H1 unchanged.

## Notes / boundaries
- H1 stays the job sentence; *sound editor* stays FAQ-only.
- No `meta keywords` tag.
- Local HTML Cache API still needs a version bump + R2 seed to preview meta in wrangler.

[actions]
- ten-locale desc / FAQ q2 / usecases
- `work-tasks/trim-an-audio-clip-and-export/02-tool-info.md` and `03-locale-briefs.md`
- catalog `updatedAt`; `coverage:gate --phase=all`
