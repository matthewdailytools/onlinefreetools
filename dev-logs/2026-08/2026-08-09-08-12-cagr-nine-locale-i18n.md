Date: 2026-08-09 08:12
Summary: Added independent zh/es/ja/fr/de/pt/id/ru/ar i18n rewrites for how-to-calculate-cagr with all en keys.

[question]
In /Users/xuli/vscodeai/onlinefreetools create independent locale rewrites for how-to-calculate-cagr based on src/site/i18n/tools/how-to-calculate-cagr/en.ts.

Write zh/es/ja/fr/de/pt/id/ru/ar under src/site/i18n/tools/how-to-calculate-cagr/ with ALL keys from en.

Titles:
- zh: CAGR 计算器 — 如何计算复合年增长率
- es: Calculadora CAGR — Tasa de crecimiento anual compuesto
- ja: CAGR（年平均成長率）の計算ツール — 複合年間成長率を求める
- fr: Calculateur CAGR — Taux de croissance annuel composé
- de: CAGR-Rechner — Jährliche Wachstumsrate berechnen
- pt: Calculadora CAGR — Taxa de crescimento anual composta
- id: Kalkulator CAGR — Tingkat pertumbuhan tahunan majemuk
- ru: Калькулятор CAGR — среднегодовой темп роста
- ar: حاسبة CAGR — معدل النمو السنوي المركب

Must include sample ~10.00% and YMYL not-investment advice. zh/ja desc ≥120 chars. No English UI buttons ("Calculate"/"Load sample"/"How it works"). CAGR acronym may stay.

Return list of files + zh button text.

[try to solve]
Wrote nine independent locale shards (42 keys each, aligned with en). Sample ~10.00% and a not-investment-advice disclaimer are included; zh/ja descriptions are about 130/136 characters.

Files:
- src/site/i18n/tools/how-to-calculate-cagr/zh.ts
- src/site/i18n/tools/how-to-calculate-cagr/es.ts
- src/site/i18n/tools/how-to-calculate-cagr/ja.ts
- src/site/i18n/tools/how-to-calculate-cagr/fr.ts
- src/site/i18n/tools/how-to-calculate-cagr/de.ts
- src/site/i18n/tools/how-to-calculate-cagr/pt.ts
- src/site/i18n/tools/how-to-calculate-cagr/id.ts
- src/site/i18n/tools/how-to-calculate-cagr/ru.ts
- src/site/i18n/tools/how-to-calculate-cagr/ar.ts

zh UI strings: Calculate = 开始计算; Load sample = 加载示例; Clear = 清空; How-it-works heading = 怎么用.

[actions]
- Created nine locale shards under src/site/i18n/tools/how-to-calculate-cagr/
