/**
 * SEO 校验：description 关键词、长度、FAQ 成对、YMYL disclaimer；
 * 工具图标 SVG；title 参数枚举启发式 + work-tasks 清单前覆盖表门禁。
 * 启发式检查，失败时以非零退出码提示 CI。
 * 注意：本脚本通过 ≠ 本地化步 2/4 实质检索判断已完成（见 tool-i18n-localization.mdc）。
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { validateToolIcons } from './validate-tool-icons.mjs';
import { validateToolTitleCoverage } from './validate-tool-title-coverage.mjs';
import { validateAllToolsWithCoverageSection } from './validate-tool-coverage-rounds.mjs';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const i18nDir = path.join(root, 'src/site/i18n');
const catalog = require(path.join(root, 'src/site/tool-catalog.json'));

/** Bing 等搜索引擎建议 meta description 至少约 120 字符 */
const MIN_DESCRIPTION_LENGTH = 120;

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

/**
 * 提取 tool_*_description 文案（支持单/双引号与换行缩进）。
 * @param {string} code
 * @returns {{ key: string, desc: string }[]}
 */
const extractDescriptions = (code) => {
  const out = [];
  const re = /(tool_[a-z0-9_-]+_description):\s*(?:\n\s*)?(?:"([^"]*)"|'((?:\\'|[^'])*)')/gi;
  let m;
  while ((m = re.exec(code))) {
    out.push({ key: m[1], desc: (m[2] ?? m[3] ?? '').replace(/\\'/g, "'") });
  }
  return out;
};

for (const file of files) {
  const code = fs.readFileSync(path.join(i18nDir, file), 'utf8');
  const lang = path.basename(file, '.ts');

  for (const { key, desc } of extractDescriptions(code)) {
    const kwList = keywords[lang] || keywords.en;
    const found = kwList.some((k) => desc.toLowerCase().includes(k.toLowerCase()));
    if (!found) {
      console.warn(`[SEO-WARN] ${file}: ${key} missing calculation/process/example keywords`);
      exitCode = 2;
    }
    if (desc.length < MIN_DESCRIPTION_LENGTH) {
      console.warn(
        `[SEO-WARN] ${file}: ${key} too short (${desc.length} chars, need ≥${MIN_DESCRIPTION_LENGTH})`
      );
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

const iconFails = validateToolIcons();
if (iconFails === 0) {
  console.log('Icon validator: OK — tool SVGs look clean');
} else {
  console.log(`Icon validator: ${iconFails} file(s) failed (illegal XML chars or malformed SVG).`);
  exitCode = exitCode || 2;
}

const coverFails = validateToolTitleCoverage();
if (coverFails === 0) {
  console.log('Title/coverage validator: OK — no param-enum titles; work-tasks coverage tables look filled');
} else {
  console.log(
    `Title/coverage validator: ${coverFails} issue(s). Fix titles (result/scenario-oriented) or complete 02 覆盖表 / 03 勾选.`
  );
  exitCode = exitCode || 2;
}

/** 有「清单前检索覆盖」专节且 ready/implemented 的工具：强制 0b+步2+步4 多轮行 */
const roundErrs = validateAllToolsWithCoverageSection();
if (roundErrs.length === 0) {
  console.log('Coverage rounds validator: OK — 0b/1b/2b rows present for tools with coverage section');
} else {
  for (const e of roundErrs) console.warn(`[COVER-FAIL] ${e}`);
  console.log(
    `Coverage rounds validator: ${roundErrs.length} issue(s). Run: npm run coverage:gate -- --slug=<slug> --phase=all`
  );
  exitCode = exitCode || 2;
}

process.exit(exitCode);
