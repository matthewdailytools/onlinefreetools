Date: 2026-10-11 11:32
Summary: Added a `video-editor` topic so the Tools mega menu, sidebar, and /topics leaf list the 37 browser video tools instead of burying them under sound-editor.
Visibility: people

[question]
需要（在顶栏「工具」也出现独立视频入口：新建 topic 并改挂 primaryTopic）

## Tool links (English)
- https://onlinefreetools.org/topics/video-editor
- https://onlinefreetools.org/tools/convert-an-mkv-file-to-an-mp4-file
- https://onlinefreetools.org/tools/extract-audio-from-an-mp4-file
- https://onlinefreetools.org/tools/trim-a-video-clip-and-export
- https://onlinefreetools.org/tools/add-soft-subtitles-to-an-mp4
- https://onlinefreetools.org/tools/inspect-video-file-tracks
Chinese: https://onlinefreetools.org/zh/topics/video-editor

[try to solve]
## Context
Homepage `category: video` (`#cat-video`) was already live, but the top-nav **Tools** mega menu, tool sidebar accordion, and `/topics/*` leaves are driven by `primaryTopic`. All 37 video workflows still used `primaryTopic: sound-editor`, so the UI looked like there was no video section.

## Process
1. Added `video-editor` to `TOOL_TOPIC_ORDER` / `ToolTopic` in `src/site/topics.ts` and `scripts/site/topics.mjs` (after `image-media`).
2. Allowed the id in `scripts/tool-modules/merge-all.mjs` `TOOL_TOPIC_IDS`.
3. Set `primaryTopic: "video-editor"` on all 37 `category: video` catalog shards and bumped `updatedAt`.
4. Registered `TOPIC_IG.video-editor` with seven groups (convert / extract / edit / tracks / subtitles / frames / inspect) covering every primary slug, a five-step workflow, and related topics `sound-editor` + `image-media`.
5. Authored ten-locale hub copy (`i18n-topics.mjs`), leaf IG packs (`topic-ig-copy-video-editor*.mjs` wired into en/zh/rest), guides (`build-topic-guides.mjs`), and core chrome labels `topic_video_editor`. Full `build:topic-ig` still fails on unrelated catalog/TOPIC_IG drift; video-editor keys were partially merged into `i18n-topic-ig.mjs` (same pattern as sound-editor).
6. Ran `merge:tools`, `build:site`, `lint:seo`, `lint:vendor`, `lint:taxonomy`, and `npm run verify` (pass). Local HTML shows mega rail **Video editor** / **视频编辑**, 37 pane links, sidebar topic, and leaf H1 with ItemList of 37 tools.

## Root cause / analysis
Three navigation layers must stay distinct: home `category`, mega-menu/`/topics` `primaryTopic`, and taxonomy `subject`/`scenario`. Shipping only the home category left the most visible chrome (Tools dropdown) unchanged. A dedicated topic is the correct fix for that surface; it is not a second doorway URL for one job—the leaf is a cluster index with a decision table.

## Solution
- New topic id: `video-editor` (EN label “Video editor”, ZH 「视频编辑」).
- Leaf H1 (EN): Convert, trim, extract audio, or add soft subtitles to a video.
- 37 tools primary-listed under the topic; sound-editor keeps audio-only jobs.
- Production still needs `npm run deploy` + `git:deploy` (and a `PAGES_CACHE_VERSION` bump) before the live mega menu updates.

## Notes / boundaries
- IG copy detail for all locales lives under `scripts/site/topic-ig-copy-video-editor.mjs` (+ rest pack); see also the companion IG authoring note from the same day.
- Did not change tool URLs, titles, or runtime behavior—navigation and topic leaf only.
- Skills applied: topic/i18n localization rules for leaf H1 and ten-locale hub/IG copy; no new-tool coverage-pass (no new slugs).

[actions]
- Wired `video-editor` topic order, merge allowlist, TOPIC_IG, catalog primaryTopic×37, ten-locale topic/IG/guides, merge:tools + build:site + verify
