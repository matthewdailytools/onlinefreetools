Date: 2026-09-12 01:06
Summary: Refreshed /topics/sound-editor so the leaf lists all seven shipped sound jobs, including the 30-second MP3 ringtone, then prepared the cluster for commit.
Visibility: people

[question]
更新主题页，然后commit

## Tool links (English)
- https://onlinefreetools.org/tools/make-a-30-second-mp3-ringtone
- https://onlinefreetools.org/tools/make-a-seamless-audio-loop
- https://onlinefreetools.org/tools/remove-silence-from-a-recording
- https://onlinefreetools.org/tools/split-a-disc-image-with-a-cue-sheet
- https://onlinefreetools.org/tools/split-a-recording-on-silence
- https://onlinefreetools.org/tools/split-an-audio-file-by-duration
- https://onlinefreetools.org/tools/trim-an-audio-clip-and-export
Topic leaf: https://onlinefreetools.org/topics/sound-editor
Chinese: https://onlinefreetools.org/zh/topics/sound-editor

[try to solve]
## Context
The catalog already had seven `sound-editor` primaries (S1 trim, S2 remove silence, A3 split on silence, S3 split by duration, S4 cue-sheet split, S5 seamless loop, S6 30-second MP3 ringtone). The topic leaf `/topics/sound-editor` still read as a three-job cluster: trim, remove silence, split-on-silence. Hub blurbs and the limits body in several locales still described “trim only” or “do not split into a ZIP”. After S6 shipped, that copy was false and thin relative to the cards a leftover renderer might still show.

This round updates the topic surfaces and commits them together with the already-implemented ringtone tool.

## Process
1. Confirmed `TOPIC_IG.sound-editor` already grouped all seven slugs (`trim`, `silence`, `split` with three ZIP jobs, `loop`, `ringtone`) and a five-step workflow that ends on the ringtone page.
2. Confirmed ten-locale IG copy in `topic-ig-copy-en.mjs`, `topic-ig-copy-zh.mjs`, and the rest packs already named all seven rows, five flow steps, and four FAQs. English `desc` stays inside 120–160 characters.
3. Rewrote hub/fallback strings in `scripts/site/i18n-topics.mjs` for es/ar/pt/id/fr/ja/ru/de (en/zh were already on the seven-job H1). Hub cards use `blurb`; the leaf limits paragraph still comes from `limits_body` (IG does not overwrite it), so those two keys had to stop saying “trimmer only”.
4. Updated `scripts/site/build-topic-guides.mjs` FAQ4 / guide title for the remaining locales so the generated `i18n-topics-guides.mjs` no longer claims the first job is trim-export only. Leaf FAQ4 is still the IG YouTube/M4R answer because merge order is topics → guides → topic IG last.
5. Full `npm run build:topic-ig` still fails: other catalog primaries are missing from `TOPIC_IG`. Flattened **only** `topic_sound_editor_*` keys into `scripts/site/i18n-topic-ig.mjs`, then ran `node scripts/site/build-topic-guides.mjs`.
6. Ran `npm run build:site` so prerendered `/topics/sound-editor` HTML, home cards, and sitemap pick up the seven-job H1, decision table, and S6 row.
7. Wrote this people log and `npm run build:logs`.

## Root cause / analysis
A topic leaf is a second indexable surface. Catalog `primaryTopic` plus leftover cards are not enough: H1, intro, decision table, workflow, example, limits, and FAQ must name every shipped job, or the page still answers “how do I trim” while listing other tools below. Google’s scaled-content and doorway rules also forbid a second URL that only restates one of those jobs (mp3 cutter, ringtone maker). Those searches stay absorbed: cutter/trim/crop → trimmer; ringtone maker → S6.

The practical engineering constraint is the full-catalog `build:topic-ig` validator. Merging only sound-editor keys is the same workaround used when S2 landed; it does not invent a new pipeline.

## Solution
- **English leaf H1**: Shorten, split, loop, or make a 30-second MP3 ringtone
- **Chinese leaf H1**: 裁短、分轨、做成循环，或做成 30 秒 MP3 铃声
- Decision table groups: start–end export; dead air still one file; many files in a ZIP (silence / equal duration / cue); seamless loop; ~30 s faded MP3 ringtone
- Limits copy now says: not a multitrack DAW, **does not write iPhone M4R**, must not rip streams. ZIP splits are in-cluster, not a “we do not ZIP” denial.
- Honest skip cells still send M4R seekers off the ringtone row (export MP3, then GarageBand/Finder).

## Notes / boundaries
- Core chrome short labels (`topic_sound_editor`) stay “Sound editor” / 「声音编辑」; the leaf H1 is the search-facing product sentence.
- Did not reverse-link other tools’ `related` in this topic-only pass.
- `npm run build:topic-ig` (all topics) remains red for unrelated missing primaries.
- No browser MCP click-through in this round; acceptance is prerendered HTML grep for the new H1, S6 row slug, and five workflow steps.

[actions]
- Updated `scripts/site/i18n-topics.mjs` eight-locale sound-editor hub/fallback copy
- Regenerated `scripts/site/i18n-topic-ig.mjs` (sound-editor keys only) and `scripts/site/i18n-topics-guides.mjs`
- Ran `npm run build:site` and `npm run build:logs`
