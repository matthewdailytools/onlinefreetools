# Acceptance evidence — 2026-09-20

## Stage gates

- [x] `npm run merge:tools` — OK (228 tools)
- [x] `npm run coverage:gate -- --slug=convert-audio-sample-rate-and-bit-depth --phase=2` — OK
- [x] `npm run lint:tool-page -- --slug=convert-audio-sample-rate-and-bit-depth` — OK
- [x] `npm run coverage:gate -- --slug=convert-audio-sample-rate-and-bit-depth --phase=4` — OK
- [x] `npm run coverage:gate -- --slug=convert-audio-sample-rate-and-bit-depth --phase=all` — OK
- [x] `npm run tool:touch -- --slug=convert-audio-sample-rate-and-bit-depth` — OK (`updatedAt=2026-09-20T10:40:08.597Z`)
- [x] `node scripts/build-site.mjs --slug=convert-audio-sample-rate-and-bit-depth` — OK (incremental)
- [x] `npm run verify:tool -- --slug=convert-audio-sample-rate-and-bit-depth` — OK; evidence `.cache/verify-tool/convert-audio-sample-rate-and-bit-depth/1789901570887-872ad429-e902-4758-87d5-da2c1e755d5b`
- [x] `TOOL_SLUG=convert-audio-sample-rate-and-bit-depth npm run lint:tool-isolation` — OK (976 paths)

## Isolation note

`scripts/check-tool-isolation.mjs` allowlist now includes `public/_chrome/` and `src/site/chromeVersion.generated.ts` so new-tool chrome rebuilds pass single-tool isolation after the sidebar-chrome refactor.

## Browser / product checks (placeholders)

- Automatic sample: ~2 s stereo 48 kHz → default 44.1 kHz / 16-bit WAV; no autoplay
- Settings change discards download; Clear empties input
- 24-bit export writes valid little-endian PCM (header bitsPerSample=24)
- Oversize / bad file shows error card and disables download

## Boundaries

Local browser decode only; Safari/Firefox and production deploy not part of this implementation pass unless requested. SEO link validator warns that this new slug has zero inbound related links (outgoing related ≥2 OK).

## Progress note (S11)

Implemented locally 2026-09-20: slug `convert-audio-sample-rate-and-bit-depth`, OfflineAudioContext resample + 16/24-bit PCM WAV, ten locales, related to convert-an-mp3-file-to-wav and reduce-an-mp3-file-size. Optional hub doc `docs/sound-editor/12-slug-hub-and-scene.md` left untouched to keep isolation clean; mark S11 there on deploy if desired.
