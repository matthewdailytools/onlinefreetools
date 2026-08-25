Date: 2026-08-09 00:02
Summary: Added 8 locale i18n shards for the compound interest tool.

[question]
Create 8 i18n TypeScript files for the compound interest tool in /Users/xuli/vscodeai/onlinefreetools/src/site/i18n/tools/how-to-calculate-compound-interest/

Languages: es.ts, ar.ts, pt.ts, id.ts, fr.ts, ja.ts, ru.ts, de.ts

Mirror the KEYS exactly from en.ts (already written at that path). Each file must:
1. Have the same keys as en.ts
2. Be independently rewritten for local search habits (NOT English machine translation skeleton) — follow work-tasks/how-to-calculate-compound-interest/03-locale-briefs.md Title directions
3. Use format:
```
/**
 * i18n tool shard (how-to-calculate-compound-interest / {lang}).
 */
import type { SiteLangDict } from '../../../types';

const {lang}: SiteLangDict = { ... };
export default {lang};
```

Title requirements per brief:
- es: Calculadora de interés compuesto — Valor futuro paso a paso (include cómo calcular intent in title or desc)
- Better for SEO hybrid: include calculator + how to calculate pattern locally
- ar: حاسبة الفائدة المركبة — حساب القيمة المستقبلية
- pt: Calculadora de juros compostos — Valor futuro
- id: Kalkulator bunga majemuk — Hitung nilai masa depan
- fr: Calculateur d'intérêts composés — Valeur future
- ja: 複利計算ツール — 将来価値の求め方
- ru: Калькулятор сложного процента — будущая стоимость
- de: Zinseszinsrechner — Endkapital berechnen

Description must be roughly 120-160+ characters (can be longer), include formula signal + example 10000/5%/10 years ≈ 16288.95 + educational not advice disclaimer.

Include all UI labels, FAQ (≥5 q/a pairs same keys as en), disclaimer, references, formula items 1-4, usecases 1-3.

Example numbers: principal 10000, 5%, 10 years, annual compound → ~16288.95; simple → 15000.

YMYL: each lang needs non-investment-advice disclaimer in local natural wording.

Write all 8 files to disk. Return list of files written.

[try to solve]
Wrote 8 i18n shards with keys matching `en.ts` exactly (56 keys each). Each locale independently rewrote title/description/UI/FAQ/disclaimer per `03-locale-briefs.md`; includes formula A = P(1 + r/n)^(nt), example 10000/5%/10 years → ≈16288.95 (simple interest 15000), and a YMYL non-investment-advice disclaimer.

**Files written:**
- `src/site/i18n/tools/how-to-calculate-compound-interest/es.ts`
- `src/site/i18n/tools/how-to-calculate-compound-interest/ar.ts`
- `src/site/i18n/tools/how-to-calculate-compound-interest/pt.ts`
- `src/site/i18n/tools/how-to-calculate-compound-interest/id.ts`
- `src/site/i18n/tools/how-to-calculate-compound-interest/fr.ts`
- `src/site/i18n/tools/how-to-calculate-compound-interest/ja.ts`
- `src/site/i18n/tools/how-to-calculate-compound-interest/ru.ts`
- `src/site/i18n/tools/how-to-calculate-compound-interest/de.ts`

[actions]
- Created 8 locale i18n TypeScript shards under `src/site/i18n/tools/how-to-calculate-compound-interest/`
