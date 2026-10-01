Date: 2026-09-30 21:08
Summary: Independently rewrote zh, es, and ja i18n for make-srt-subtitles-from-an-audio-file to match the on-device Whisper en master (99 keys each).
Visibility: people

[question]
Rewrite i18n for make-srt-subtitles-from-an-audio-file locales: zh, es, ja.

## Tool links (English)
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file
Chinese: https://onlinefreetools.org/zh/tools/make-srt-subtitles-from-an-audio-file

[try to solve]
## Context
The English master already described on-device Whisper tiny (same-origin `/vendor/whisper`), first ~45 MB download, editable SRT, optional mic, and privacy (files stay on device / not uploaded to a server). Existing `zh.ts` / `es.ts` / `ja.ts` still described the older Web Speech “play while recognizing” path and used outdated keys (missing HUD/model keys).

## Process
1. Read `en.ts` (99 keys) and `03-locale-briefs.md` for local search terms and button labels.
2. Rewrote each locale independently from local search habits—not English isomorphic translate.
3. Aligned How steps to that locale’s button labels; privacy phrasing per rule (zh 不上传服务器; es sin subir al servidor; ja サーバーにアップロードしない + 端末内).
4. Verified key lists: each locale has the same 99 keys as en, zero missing/extra.

## Root cause / analysis
Locale shards lagged the Whisper engine rewrite. Shipping them as machine-translated English or leaving Web Speech copy would break UI labels, FAQ honesty, and localization policy (independent rewrite + privacy wording).

## Solution
Full rewrite of:
- `src/site/i18n/tools/make-srt-subtitles-from-an-audio-file/zh.ts`
- `src/site/i18n/tools/make-srt-subtitles-from-an-audio-file/es.ts`
- `src/site/i18n/tools/make-srt-subtitles-from-an-audio-file/ja.ts`

H1 / buttons follow briefs (e.g. zh 生成 SRT / 加载样例 / 下载 SRT; es Crear SRT / Cargar muestra / Descargar SRT; ja SRTを作る / サンプル / ダウンロード). Merge/build intentionally skipped per request.

## Notes / boundaries
- Key-count check: zh=99, es=99, ja=99, en=99.
- Remaining locales and `coverage:gate --phase=4` / `merge:tools` / `build:site` are separate follow-ups.
- Skills applied: `tool-token-efficiency` (scoped reads); localization rules from `tool-i18n-localization.mdc`. No merge/build gates run (user forbid).

[actions]
- Rewrote zh.ts, es.ts, ja.ts for on-device Whisper
- Confirmed key parity with en.ts (99 each)
