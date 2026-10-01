Date: 2026-10-01 09:40
Summary: Wrote search-oriented independent i18n rewrites for nine locales of make-srt-subtitles-from-a-video-file (not English skeleton clones).
Visibility: people

[question]
Write SEARCH-oriented independent rewrites (NOT English skeleton clones) for locale files under src/site/i18n/tools/make-srt-subtitles-from-a-video-file/{zh,es,ja,de,fr,pt,id,ar,ru}.ts; update 03-locale-briefs 轮次1 and note locales written.

## Tool links (English)
- https://onlinefreetools.org/tools/make-srt-subtitles-from-a-video-file
Chinese: https://onlinefreetools.org/zh/tools/make-srt-subtitles-from-a-video-file

[try to solve]
## Context
The video→SRT tool already had an English master. Nine other locales needed full key coverage with local search phrasing from `03-locale-briefs.md`, preserving hard product facts (video-only, on-device Whisper tiny, ~45 MB first download, sliding windows, no burn-in / no YouTube caption grab, `err_audio_only`).

## Process
1. Used `en.ts` as the key inventory (97 keys) and brief Title/H1 + button labels per locale.
2. Wrote each locale as an independent rewrite: local H1 in title/How/Why choose; privacy as device + not uploaded to server; FAQ order varied across languages to avoid isomorphic clones.
3. Pointed pure-audio rejects to the localized audio-SRT tool name in each language.
4. Updated `03-locale-briefs.md`: checked 轮次 1 and 轮次 2; recorded locales written in the multi-round table.

## Root cause / analysis
Machine-translate or English skeleton clones fail `tool-i18n-localization.mdc`: local search terms must land in H1, Why choose H2 must use local phrasing with the local tool name, and privacy must not stop at vague “local”.

## Solution
Nine complete `export default` shards with full key parity to `en.ts`. Verified 97/97 keys and presence of `err_audio_only` for each locale.

## Notes / boundaries
- Did not edit `en.ts` or other tools.
- Phase-4 coverage gate / 轮次 3 / `i18n-done` left for the ship step.

[actions]
- Wrote nine locale shards under `src/site/i18n/tools/make-srt-subtitles-from-a-video-file/`
- Updated `work-tasks/make-srt-subtitles-from-a-video-file/03-locale-briefs.md`
