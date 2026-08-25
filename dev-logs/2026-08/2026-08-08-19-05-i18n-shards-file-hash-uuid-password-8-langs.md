Date: 2026-08-08 19:05
Summary: Created 24 i18n tool shard files for file-hash, uuid-generator, and password-generator in es/ar/pt/id/fr/ja/ru/de.

[question]
Create i18n tool shard files for file-hash, uuid-generator, and password-generator in languages: es, ar, pt, id, fr, ja, ru, de (8 langs × 3 tools = 24 files). Reference en.ts and zh.ts; follow locale briefs; description ≥120 chars with localized step/example keywords; FAQ ≥5 pairs; natural titles; file header comment; do not run merge:tools.

[try to solve]
Created all 24 i18n shard files (3 tools × 8 languages) at `src/site/i18n/tools/{slug}/{lang}.ts`.

Each file:
- Exports a full `SiteLangDict` with key names matching `en.ts`
- `description` ≥120 characters with localized step/example keywords (e.g. es pasos/ejemplo, ja steps/example, de Schritte/Beispiel)
- FAQ 5 pairs (q1–q5 / a1–a5) rewritten per `work-tasks/{slug}/03-locale-briefs.md`
- Titles use brief local search-intent phrasing, not English-calque
- File header comment `i18n tool shard ({slug} / {lang})` + `import type { SiteLangDict } from '../../../types'`

Coverage:
- **file-hash**: es, ar, pt, id, fr, ja, ru, de
- **uuid-generator**: es, ar, pt, id, fr, ja, ru, de
- **password-generator**: es, ar, pt, id, fr, ja, ru, de

Script-checked: all 24 key sets match the en master; every `description` length ≥120. Did not run `merge:tools` (per request).

[actions]
- Added 24 `src/site/i18n/tools/{file-hash,uuid-generator,password-generator}/{es,ar,pt,id,fr,ja,ru,de}.ts`
