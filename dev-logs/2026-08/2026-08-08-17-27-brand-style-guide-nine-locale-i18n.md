Date: 2026-08-08 17:27
Summary: Created nine brand-style-guide i18n locale shards (zh/es/ar/pt/id/fr/ja/ru/de) with 130 keys each aligned to en.ts and locale briefs.

[question]
Create 9 i18n TypeScript files for the tool slug `brand-style-guide` in the repo `/Users/xuli/vscodeai/onlinefreetools`.

## Paths to create
- `/Users/xuli/vscodeai/onlinefreetools/src/site/i18n/tools/brand-style-guide/zh.ts`
- `.../es.ts`, `ar.ts`, `pt.ts`, `id.ts`, `fr.ts`, `ja.ts`, `ru.ts`, `de.ts`

## Format (required)
Each file must look like:
```ts
/**
 * i18n tool shard (brand-style-guide / {lang}). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const {lang}: SiteLangDict = {
  // all keys
};
export default {lang};
```

## Keys
Copy EVERY key from `/Users/xuli/vscodeai/onlinefreetools/src/site/i18n/tools/brand-style-guide/en.ts` — same key names, translated values. Do not omit any key.

## Localization rules (critical)
- Do NOT machine-translate with identical sentence skeletons across all languages.
- Follow briefs in `/Users/xuli/vscodeai/onlinefreetools/work-tasks/brand-style-guide/03-locale-briefs.md` for each language.
- Title/H1 direction from briefs:
  - zh: 品牌手册 — 智能预填的设计规范，可手动改
  - es: Guía de estilo de marca — borrador modular que puedes editar
  - ar: دليل أسلوب العلامة — مسودة وحدات قابلة للتعديل
  - pt: Guia de estilo da marca — rascunho modular editável
  - id: Panduan gaya merek — draf modular yang bisa diedit
  - fr: Charte graphique — brouillon modulaire à modifier
  - ja: ブランドスタイルガイド — 自動下書きを手直しできる
  - ru: Гайд по стилю бренда — модульный черновик, который можно править
  - de: Brand-Style-Guide — modularer Entwurf zum Nachbearbeiten
- `tool_*_desc` ≈ short home card (~160 chars), local search words
- `tool_*_description` ≥120 chars, steps + sample Northline #0F6E8C + local/rule-based (NOT cloud AI)
- Clarify smart = rule-based, not AI/LLM
- Keep HEX, WCAG, Markdown, JSON, Logo, Do/Don’t (or local equivalent), M0–M9 codes
- Industry copy keys `tool_brand_style_guide_copy_*_one` must keep the `{brand}` placeholder literally
- FAQ question order may vary slightly per language for less isomorphism
- Button labels per brief (Generate / Sample / Copy Markdown etc. in local short words)
- No SEO meta-narration (doorway, thin page, slug)
- User rule: respond/write content in the target language for user-facing strings; code comments in files can be English like en.ts

## After writing
Verify each file exports default and has the same number of keys as en.ts (count `tool_brand_style_guide_` keys).

Return a short summary of files written and any keys you struggled with.

[try to solve]
Created nine locale shards under `src/site/i18n/tools/brand-style-guide/`: `zh.ts`, `es.ts`, `ar.ts`, `pt.ts`, `id.ts`, `fr.ts`, `ja.ts`, `ru.ts`, `de.ts`.

**Verification**: All ten locales (including en) have **130** `tool_brand_style_guide_*` keys matching en.ts exactly; each file `export default {lang}`; all six `copy_*_one` strings keep the literal `{brand}` placeholder.

**Localization notes**:
- Titles/H1 and short button labels follow `03-locale-briefs.md` per language
- “Smart” / intelligent-prefill clarified as rule-based prefill, not cloud AI/LLM
- FAQ question order adjusted in zh/ja (and similar) to reduce isomorphism
- ja uses natural “when you need this” phrasing for use-cases heading; ar uses do/don’t equivalents; de keeps Do’s/Don’ts

**Harder keys**: `rules_item_*` and `description` needed balance between rule visibility and length; ar mixes retained HEX/Logo/Markdown with natural RTL wording; ja avoids catalog-tone katakana “use cases.”

[actions]
- Added `src/site/i18n/tools/brand-style-guide/{zh,es,ar,pt,id,fr,ja,ru,de}.ts`
