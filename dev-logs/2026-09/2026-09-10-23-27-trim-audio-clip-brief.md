Date: 2026-09-10 23:27
Summary: Briefed trim-an-audio-clip-and-export as a one-task local trimmer under a new sound-editor topic; coverage gate 0b is green; the tool page is not implemented yet.
Visibility: people

[question]
立项：trim-an-audio-clip-and-export，归属新的topic:sound editor

[try to solve]
## Context

The user named slug `trim-an-audio-clip-and-export` (doc 12 **S1**: start/end + export, not a mini DAW) and asked for a new topic id **sound editor**. This round is brief only: `work-tasks/` + topic registration. No `*Page.ts`, no catalog shard, no `build:site`.

Doc 01/11 still forbid pretending a thin cutter is the *sound editor* hub. Doc 12 allows a **scene** URL for the same job. The brief follows 12 for this slug and keeps Hub (`edit-audio-on-waveform`) unbuilt.

## Process

- Copied `work-tasks/_template/` to `work-tasks/trim-an-audio-clip-and-export/` and filled `00`–`03` plus `notes.md`.
- Direction **A** (Web Audio decode + slice; lamejs lazy on Export MP3). Related tools already shipped: `file-metadata-analyzer`, `file-hash`.
- 0b coverage: H1 **Trim an audio clip and export**; *mp3 cutter* / *cut mp3* / *audio trimmer* / *crop audio* absorb into desc/FAQ; *sound editor* stays off this page’s attacking H1 (topic FAQ + later Hub).
- Intent review: **满足** the trim-and-export job; **有意不满足** DAW H1, M4A ringtone spec, video extract, YouTube rip, silence-to-ZIP, synonym cutter URLs. No Keyword Planner CSV → Ads table marked 不适用.
- Registered topic `sound-editor` after `files-archives` in `topics.ts` / `topics.mjs` / `merge-all.mjs` `TOOL_TOPIC_IDS`, `TOPIC_IG`, ten-locale topic IG copy, `i18n-topics.mjs`, core short labels, and `build-topic-guides.mjs`. Regenerated `i18n-topics-guides.mjs`.
- `npm run coverage:gate -- --slug=trim-an-audio-clip-and-export --phase=0b` → OK.
- `node scripts/site/build-topic-ig.mjs` still fails on **pre-existing** catalog vs `TOPIC_IG` drift (pdf-docs / image-media extra primaries, unrelated to this topic). No `sound-editor` errors in that log. Flattened `i18n-topic-ig.mjs` was not rewritten.

## Root cause / analysis

S1 is a high-search one-task job (*trim audio*, *mp3 cutter*) that must not become `/mp3-cutter` doorway pages, and must not steal the Hub’s *sound editor* H1. A dedicated scene slug plus a topic cluster named `sound-editor` splits those intents: the tool URL is the job sentence; the topic leaf can host the head query until the waveform hub exists.

Empty `/topics/sound-editor` HTML would be thin if generated before the catalog shard exists (decision-table rows skip missing slugs). Hence no `build:site` in this round.

## Solution

- `02` status `ready`; `03` status `briefs-ready`. Implement only after an explicit 实现 command.
- Catalog (when built): `page.style: "opts"`, `primaryTopic: "sound-editor"`, `localProcessing: true`. Caps aligned with doc 11 (about 40 MB / 20 min desktop; ~20 MB / 8 min narrow). HUD capsules Decode / Trim / Encode. How verbs = **Trim** / **Export WAV** / **Export MP3**.
- Topic leaf H1 names **trimmer tools**, not “which sound editor page”.

## Notes / boundaries

- Do not iframe audiomass.co or copy the AudioMass tree into this page; that belongs to the Hub.
- Do not `build:site` until the tool ships, or the new topic leaf/hub card will publish with zero catalog tools.
- `build:topic-ig` needs a separate cleanup of stale TOPIC_IG groups before it can flatten `sound-editor` row copy into `i18n-topic-ig.mjs`. Leaf copy already lives in `i18n-topics.mjs` and the copy sources.
- Hub slug remains unbriefed until named.

[actions]
- Added `work-tasks/trim-an-audio-clip-and-export/` (`00`–`03`, `notes.md`)
- Registered `sound-editor` in topic enums, `TOPIC_IG`, ten-locale IG/guide/i18n copy, and core labels
- Regenerated `scripts/site/i18n-topics-guides.mjs`
- Noted S1 立项 on `docs/sound-editor/12-slug-hub-and-scene.md` and README
- Ran `npm run coverage:gate -- --slug=trim-an-audio-clip-and-export --phase=0b`
