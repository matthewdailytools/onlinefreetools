Date: 2026-10-11 11:27
Summary: Authored people-first topic IG copy for video-editor across ten locales and partial-merged flattened keys after full build:topic-ig failed on unrelated catalog mismatches.
Visibility: people

[question]
Author people-first topic IG copy for the new topic id `video-editor` (already added to TOOL_TOPIC_ORDER and TOPIC_IG). Wire EN/ZH/rest packs, i18n hub keys, build-topic-guides, and ensure leaf IG keys land even if full build:topic-ig fails.

[try to solve]
## Context
The site already listed `video-editor` in `TOPIC_IG` / topic order with 37 primary slugs (convert, extract, edit, tracks, subtitles, frames, inspect) and a five-step workflow. Hub chrome and leaf IG copy were still missing, so `/topics/video-editor` would not show decision-table rows, flow steps, or localized FAQ/guides.

## Process
1. Modeled copy after the sound-editor cluster pattern: people-first H1 (job sentence, not “which X page”), EN meta desc 120–160 chars, four FAQ items, empty `secondary`, cite `mdn-videodecoder`, local-processing / no-upload / no-stream-rip boundaries.
2. Created `scripts/site/topic-ig-copy-video-editor.mjs` with `videoEditorEn`, `videoEditorZh`, and `buildVideoEditorExpand(lang)` for es/ar/pt/id; moved fr/ja/ru/de expand packs to companion `topic-ig-copy-video-editor-rest.mjs` after a single-file write truncated mid-locale.
3. Wired imports into `topic-ig-copy-en.mjs`, `topic-ig-copy-zh.mjs`, Spanish `topicsEs` via `expand(buildVideoEditorExpand('es'))` in `topic-ig-copy-rest.mjs` (comment 18→19 topics), and each `topic-ig-copy-rest-{ar,pt,id,fr,ja,ru,de}.mjs`.
4. Injected hub keys (`topic_video_editor*` including choose/limits/faq q1–q3) into all ten language blocks of `i18n-topics.mjs`.
5. Added `video-editor` guideTitle/guideBody/faqQ4/faqA4 for all languages in `build-topic-guides.mjs` and ran `node scripts/site/build-topic-guides.mjs` to regenerate `i18n-topics-guides.mjs`.
6. Ran `npm run build:topic-ig`; validation failed on unrelated topics (notably sound-editor catalog primaries not in TOPIC_IG groups). Ran a one-off flatten/merge that wrote only `topic_video_editor_*` keys (176 per lang × 10) into `i18n-topic-ig.mjs`.

## Root cause / analysis
Full `build:topic-ig` validates every topic’s catalog primaries against TOPIC_IG groups and copy rows. Existing mismatches (for example many audio/video tools still registered under sound-editor in catalog while TOPIC_IG sound-editor rows remain the older trim/split set) block regenerating the whole file. Partial merge is the same recovery path previously used for sound-editor IG keys.

## Solution
- Leaf IG source of truth: `topic-ig-copy-video-editor.mjs` (+ rest companion).
- Hub chrome: `i18n-topics.mjs`; guides: `i18n-topics-guides.mjs` via build-topic-guides.
- Flattened leaf keys: partial merge into `i18n-topic-ig.mjs` with header note that only video-editor was merged this round.
- Verified: `Object.keys(videoEditorEn.rows).length === 37`; each pack lang has 37 rows / flow×5 / faq×4; EN desc length 152; all ten langs have 176 `topic_video_editor_*` keys including inspect-tracks row.

## Notes / boundaries
- Did not change catalog shards or `topics.ts` / `topics.mjs` (already done upstream).
- Did not commit or deploy.
- Re-running full `npm run build:topic-ig` will stay red until sound-editor (and other) catalog↔TOPIC_IG drift is fixed; until then, re-merge video-editor with the same one-off flatten if copy changes.
- Companion split is size-only; `buildVideoEditorExpand` remains the public API for rest locales.

[actions]
- Added `scripts/site/topic-ig-copy-video-editor.mjs`, `scripts/site/topic-ig-copy-video-editor-rest.mjs`
- Wired en/zh/rest packs; updated `i18n-topics.mjs`, `build-topic-guides.mjs`, regenerated `i18n-topics-guides.mjs`
- Partial-merged `topic_video_editor_*` into `scripts/site/i18n-topic-ig.mjs`
