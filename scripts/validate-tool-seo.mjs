import fs from 'fs';
import path from 'path';

// Simple validator: ensure each tool_*_description in src/site/i18n/*.ts
// contains at least one keyword indicating calculation/process/example
// for a set of supported languages. This is a heuristic check to
// enforce the default SEO rule requiring calculation process and examples.

const i18nDir = path.resolve('src/site/i18n');
const files = fs.readdirSync(i18nDir).filter((f) => f.endsWith('.ts'));

const keywords = {
  en: ['calculate', 'calculate the', 'formula', 'steps', 'process', 'example'],
  zh: ['计算', '过程', '步骤', '示例', '例子', '公式'],
  es: ['calcula', 'calcular', 'proceso', 'pasos', 'ejemplo', 'fórmula'],
  fr: ['calcul', 'calculer', 'processus', 'exemple', 'formule', 'étapes'],
  de: ['berechnen', 'berechnung', 'prozess', 'beispiel', 'formel', 'schritte'],
  ru: ['расч', 'процесс', 'пример', 'формула', 'шаг'],
  pt: ['calcular', 'processo', 'exemplo', 'fórmula', 'passos'],
  ja: ['計算', 'プロセス', '手順', '例', '方式', '公式'],
  id: ['hitung', 'proses', 'contoh', 'rumus', 'langkah'],
  ar: ['حساب', 'عملية', 'مثال', 'خطوات', 'صيغة'],
};

let exitCode = 0;

for (const file of files) {
  const code = fs.readFileSync(path.join(i18nDir, file), 'utf8');
  const lang = path.basename(file, '.ts');

  // find tool_xxx_description: '...'
  const re = /tool_[a-z0-9_-]+_description:\s*'([^']*)'/gi;
  let m;
  while ((m = re.exec(code))) {
    const desc = m[1];
    const key = m[0].split(':')[0];

    const kwList = keywords[lang] || keywords['en'];
    const found = kwList.some((k) => desc.toLowerCase().includes(k.toLowerCase()));
    if (!found) {
      console.warn(`[SEO-WARN] ${file}: ${key} seems short or missing calculation/process/example keywords`);
      exitCode = 2;
    }
  }
}

if (exitCode === 0) {
  console.log('SEO validator: OK — all tool descriptions contain process/example keywords (heuristic)');
} else {
  console.log('SEO validator: WARNINGS detected. Please update translations to include calculation process and examples.');
}

process.exit(exitCode);
