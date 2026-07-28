/**
 * SEO 校验：description 关键词、FAQ 成对、YMYL disclaimer。
 * 启发式检查，失败时以非零退出码提示 CI。
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const i18nDir = path.join(root, 'src/site/i18n');
const catalog = require(path.join(root, 'src/site/tool-catalog.json'));

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

const files = fs.readdirSync(i18nDir).filter((f) => f.endsWith('.ts') && !f.includes('.bak'));

/**
 * 从 i18n TS 文件中提取 string 字典项。
 * @param {string} code
 * @param {string} key
 */
const extractKey = (code, key) => {
  const re = new RegExp(`${key}:\\s*'((?:\\\\'|[^'])*)'`, 'm');
  const m = code.match(re);
  return m ? m[1] : null;
};

for (const file of files) {
  const code = fs.readFileSync(path.join(i18nDir, file), 'utf8');
  const lang = path.basename(file, '.ts');

  const re = /tool_[a-z0-9_-]+_description:\s*'([^']*)'/gi;
  let m;
  while ((m = re.exec(code))) {
    const desc = m[1];
    const key = m[0].split(':')[0];
    const kwList = keywords[lang] || keywords.en;
    const found = kwList.some((k) => desc.toLowerCase().includes(k.toLowerCase()));
    if (!found) {
      console.warn(`[SEO-WARN] ${file}: ${key} missing calculation/process/example keywords`);
      exitCode = 2;
    }
  }
}

// FAQ / YMYL：以英文词典为规范源（其他语言可回退到 en）
const enCode = fs.readFileSync(path.join(i18nDir, 'en.ts'), 'utf8');
for (const tool of catalog) {
  let faqPairs = 0;
  for (let i = 1; i <= 5; i++) {
    const q = extractKey(enCode, `${tool.faqPrefix}_faq_q${i}`);
    const a = extractKey(enCode, `${tool.faqPrefix}_faq_a${i}`);
    if (q && a) faqPairs += 1;
    else if (q || a) {
      console.warn(`[SEO-WARN] en.ts: incomplete FAQ pair for ${tool.faqPrefix} #${i}`);
      exitCode = 2;
    }
  }
  if (faqPairs < 3) {
    console.warn(`[SEO-WARN] en.ts: ${tool.slug} needs ≥3 FAQ pairs (found ${faqPairs})`);
    exitCode = 2;
  }
  if (tool.ymyl) {
    const d = extractKey(enCode, `${tool.faqPrefix}_disclaimer`);
    if (!d) {
      console.warn(`[SEO-WARN] en.ts: YMYL tool ${tool.slug} missing ${tool.faqPrefix}_disclaimer`);
      exitCode = 2;
    }
  }
}

if (exitCode === 0) {
  console.log('SEO validator: OK — descriptions, FAQ pairs, and YMYL disclaimers look good');
} else {
  console.log('SEO validator: WARNINGS detected. Please update translations / FAQ / YMYL copy.');
}

process.exit(exitCode);
