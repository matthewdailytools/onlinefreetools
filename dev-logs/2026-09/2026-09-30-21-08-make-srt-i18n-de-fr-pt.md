Date: 2026-09-30 21:08
Summary: Rewrote make-srt-subtitles-from-an-audio-file i18n for de, fr, and pt to match the on-device Whisper master (99 keys each).
Visibility: people

[question]
Rewrite i18n for make-srt-subtitles-from-an-audio-file locales: de, fr, pt. Independent rewrite per locale — NOT English isomorphic translate. Privacy phrasing required. Keep every key from en.ts. No merge/build.

## Tool links (English)
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file

[try to solve]
## Context
The English master had already moved to on-device Whisper tiny (q8) under `/vendor/whisper`, with HUD steps Model / Decode / Transcribe / Write SRT, ~45 MB first download, editable SRT, and optional Web Speech mic. The existing `de.ts` / `fr.ts` / `pt.ts` shards still described the old SpeechRecognition playthrough path, mixed English leftovers, and were missing many master keys.

## Process
1. Read `en.ts` (99 keys), `03-locale-briefs.md` (local search terms, H1, button labels, privacy angle), and the three outdated locale files.
2. Rewrite each locale independently around local search phrasing (de: Audio zu SRT / Untertitel aus Audio; fr: audio vers srt / sous-titres depuis audio; pt: áudio para srt / legendas a partir de áudio).
3. Align How steps with local button labels (de: SRT erstellen / Beispiel laden; fr: Créer SRT / Exemple; pt: Criar SRT / Amostra).
4. Apply privacy pairs: de ohne Server-Upload + bleiben auf dem Gerät; fr sans envoi au serveur + restent sur l’appareil; pt sem enviar ao servidor + ficam no dispositivo.
5. Verified key sets against en with a Node key extract (missing/extra empty).

## Root cause / analysis
Locale shards lagged the Whisper engine rewrite. Batch-style leftovers from the SpeechRecognition era would fail key parity and mislead users about upload behavior and first-run cost.

## Solution
Wrote full independent copy in `src/site/i18n/tools/make-srt-subtitles-from-an-audio-file/{de,fr,pt}.ts`. Key-count match vs en: **de 99/99**, **fr 99/99**, **pt 99/99**. No `merge:tools` / `build:site` in this pass (per request).

## Notes / boundaries
- Why choose items are page-verifiable (on-device Whisper, 45 MB HUD, editable SRT, related tools)—not generic “fast/free.”
- Mic dictation remains optional and may use a browser-vendor speech service; Whisper file path stays on-device.
- Other locales (zh/es/ja/…) were not updated in this task.

[actions]
- Rewrote `src/site/i18n/tools/make-srt-subtitles-from-an-audio-file/de.ts`
- Rewrote `src/site/i18n/tools/make-srt-subtitles-from-an-audio-file/fr.ts`
- Rewrote `src/site/i18n/tools/make-srt-subtitles-from-an-audio-file/pt.ts`
