Date: 2026-09-12 10:26
Summary: Added an `audio` tool-type leaf at /tool-type/audio and moved the seven shipped sound jobs off the structured-data tag.
Visibility: people

[question]
tool-type 增加新的type

## Tool links (English)
- https://onlinefreetools.org/tool-type/audio
- https://onlinefreetools.org/tools/make-a-30-second-mp3-ringtone
- https://onlinefreetools.org/tools/make-a-seamless-audio-loop
- https://onlinefreetools.org/tools/remove-silence-from-a-recording
- https://onlinefreetools.org/tools/split-a-disc-image-with-a-cue-sheet
- https://onlinefreetools.org/tools/split-a-recording-on-silence
- https://onlinefreetools.org/tools/split-an-audio-file-by-duration
- https://onlinefreetools.org/tools/trim-an-audio-clip-and-export
Chinese: https://onlinefreetools.org/zh/tool-type/audio

[try to solve]
## Context
`/tool-type` lists tools by **what they act on** (image, PDF, text, numbers, …). The seven sound-editor jobs were tagged `subject: data`, so they sat with CSV/JSON/zip instead of a sound-file type. After those tools shipped, the hub still had no Audio card. This round adds `audio` as a first-class type and retags those seven catalog shards.

## Process
1. Extended `ToolSubject` and `TOOL_SUBJECT_ORDER` in `src/site/taxonomy.ts` and `scripts/site/taxonomy.mjs` (`image`, `pdf`, **`audio`**, then text/number/…).
2. Wrote ten-locale hub/leaf copy in `scripts/site/i18n-taxonomy.mjs` (EN H1 **Tools for audio**; ZH **工具类型：音频**). Hub meta lists audio with the other operands.
3. Set `subject: "audio"` on the seven sound catalog shards (scenario stays `media`). Recorded the same tags in `scripts/dev/apply-taxonomy-tags.mjs`.
4. `lint:taxonomy` then failed on a pre-existing invalid tag: `convert-html-web-pages-to-word-document` used `subject: "word"`, which is not in the enum. Recategorized it to `text` (primary input is HTML/web text; same convention as other converters that tag the input, not the output).
5. `npm run merge:tools`, `lint:taxonomy` (audio=7), `npm run build:site`. Sitemap gained ten `/tool-type/audio` language URLs.

## Root cause / analysis
Topic `sound-editor` groups jobs by user task. Tool-type groups by **operand**. Those axes should not share a URL: `/topics/sound-editor` stays the decision table; `/tool-type/audio` is the file-type list. Leaving audio tools on `data` made the type hub lie about what “structured data” contains.

A one-tool `/tool-type/word` leaf was not added. That would be a thin listing. HTML→Word stays on `text`.

## Solution
- New leaf: https://onlinefreetools.org/tool-type/audio (`ItemList` of 7).
- Hub sidebar order now includes **Audio** after PDF.
- `lint:taxonomy` green: 221 tools; `audio: 7`.

## Notes / boundaries
- Did not add `video` or `word` types.
- Did not reverse-link other tools’ `related`.
- Prerendered HTML checked via grep (H1, seven cards, sitemap). No live browser click-through.
- `_pages` HTML is gitignored; deploy still needs R2 upload on push.

[actions]
- Added `audio` to taxonomy enums and ten-locale copy
- Retagged seven sound catalog shards to `subject: audio`
- Recategorized `convert-html-web-pages-to-word-document` from invalid `word` to `text`
- `npm run merge:tools`, `lint:taxonomy`, `build:site`
