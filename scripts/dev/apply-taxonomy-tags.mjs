#!/usr/bin/env node
/**
 * 为 tool-catalog.d 全部分片写入唯一 scenario + subject，并校验覆盖。
 * 用法：node scripts/dev/apply-taxonomy-tags.mjs
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TOOL_SCENARIO_ORDER, TOOL_SUBJECT_ORDER, isToolScenario, isToolSubject } from '../site/taxonomy.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const catalogDir = path.join(root, 'src/site/tool-catalog.d');

/**
 * 每工具唯一场景 + 操作对象（审阅表）。
 * @type {Record<string, {scenario:string, subject:string}>}
 */
const TAGS = {
  // —— PDF / documents ——
  'compress-pdf': { scenario: 'documents', subject: 'pdf' },
  'crop-pdf': { scenario: 'documents', subject: 'pdf' },
  'merge-pdf': { scenario: 'documents', subject: 'pdf' },
  'organize-pdf': { scenario: 'documents', subject: 'pdf' },
  'pdf-page-numbers': { scenario: 'documents', subject: 'pdf' },
  'pdf-to-markdown': { scenario: 'documents', subject: 'pdf' },
  'pdf-watermark': { scenario: 'documents', subject: 'pdf' },
  'protect-pdf': { scenario: 'documents', subject: 'pdf' },
  'rotate-pdf': { scenario: 'documents', subject: 'pdf' },
  'split-pdf': { scenario: 'documents', subject: 'pdf' },
  'unlock-pdf': { scenario: 'documents', subject: 'pdf' },
  'pdf-to-jpg': { scenario: 'documents', subject: 'pdf' },
  'pdf-page-to-image-sizes': { scenario: 'documents', subject: 'pdf' },

  // —— Image / media ——
  'add-watermark': { scenario: 'media', subject: 'image' },
  'flip-image': { scenario: 'media', subject: 'image' },
  'image-border': { scenario: 'media', subject: 'image' },
  'image-compress': { scenario: 'media', subject: 'image' },
  'image-crop': { scenario: 'media', subject: 'image' },
  'image-exif': { scenario: 'media', subject: 'image' },
  'image-format-converter': { scenario: 'media', subject: 'image' },
  'image-grayscale': { scenario: 'media', subject: 'image' },
  'image-merge': { scenario: 'media', subject: 'image' },
  'image-optimizer': { scenario: 'media', subject: 'image' },
  'image-overlay': { scenario: 'media', subject: 'image' },
  'image-to-base64': { scenario: 'media', subject: 'image' },
  'images-to-gif': { scenario: 'media', subject: 'image' },
  'images-to-pdf': { scenario: 'media', subject: 'image' },
  'images-to-ppt': { scenario: 'media', subject: 'image' },
  'images-to-word': { scenario: 'media', subject: 'image' },
  'how-to-calculate-aspect-ratio': { scenario: 'media', subject: 'number' },

  // —— Design ——
  'brand-color-token-pack': { scenario: 'design', subject: 'color' },
  'brand-style-guide': { scenario: 'design', subject: 'color' },
  'smart-website-color-scheme': { scenario: 'design', subject: 'color' },
  'wcag-contrast-checker': { scenario: 'design', subject: 'color' },
  'color-from-image': { scenario: 'design', subject: 'color' },

  // —— Developer ——
  'add-www-to-dns': { scenario: 'developer', subject: 'network' },
  'base64': { scenario: 'developer', subject: 'text' },
  'csv-json': { scenario: 'developer', subject: 'data' },
  'domain-lookup': { scenario: 'developer', subject: 'network' },
  'file-hash': { scenario: 'developer', subject: 'data' },
  'html-entity': { scenario: 'developer', subject: 'text' },
  'indexnow': { scenario: 'developer', subject: 'network' },
  'ip-address': { scenario: 'developer', subject: 'network' },
  'json-schema-validator': { scenario: 'developer', subject: 'data' },
  'jwt-decoder': { scenario: 'developer', subject: 'text' },
  'markdown-to-html': { scenario: 'developer', subject: 'text' },
  'password-generator': { scenario: 'developer', subject: 'text' },
  'text-diff': { scenario: 'developer', subject: 'text' },
  'timezone-converter': { scenario: 'developer', subject: 'data' },
  'unix-timestamp': { scenario: 'developer', subject: 'number' },
  'uuid-generator': { scenario: 'developer', subject: 'text' },
  'website-headers': { scenario: 'developer', subject: 'network' },
  'yaml-json': { scenario: 'developer', subject: 'text' },

  // —— Finance ——
  'how-to-calculate-break-even': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-cagr': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-compound-interest': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-contribution-margin': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-debt-payoff': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-discount': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-emi': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-gross-margin': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-inflation': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-irr': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-marginal-revenue': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-markup': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-npv': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-payback-period': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-percentage-change': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-present-value': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-profit-margin': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-roi': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-rule-of-72': { scenario: 'finance', subject: 'number' },
  'how-to-calculate-vat': { scenario: 'finance', subject: 'number' },

  // —— Health ——
  'how-to-calculate-bmi': { scenario: 'health', subject: 'number' },
  'how-to-calculate-bmr-tdee': { scenario: 'health', subject: 'number' },
  'how-to-calculate-body-fat': { scenario: 'health', subject: 'number' },
  'how-to-calculate-heart-rate': { scenario: 'health', subject: 'number' },
  'how-to-calculate-ideal-weight': { scenario: 'health', subject: 'number' },
  'how-to-calculate-macros': { scenario: 'health', subject: 'number' },

  // —— Sports ——
  'how-to-calculate-one-rep-max': { scenario: 'sports', subject: 'number' },
  'how-to-calculate-pace': { scenario: 'sports', subject: 'number' },

  // —— Math / stats / school ——
  'how-to-calculate-circle': { scenario: 'math', subject: 'number' },
  'how-to-calculate-confidence-interval': { scenario: 'math', subject: 'number' },
  'how-to-calculate-exponent': { scenario: 'math', subject: 'number' },
  'how-to-calculate-gpa': { scenario: 'math', subject: 'number' },
  'how-to-calculate-gradient': { scenario: 'math', subject: 'number' },
  'how-to-calculate-logarithm': { scenario: 'math', subject: 'number' },
  'how-to-calculate-mean': { scenario: 'math', subject: 'number' },
  'how-to-calculate-median': { scenario: 'math', subject: 'number' },
  'how-to-calculate-p-value': { scenario: 'math', subject: 'number' },
  'how-to-calculate-permutation-combination': { scenario: 'math', subject: 'number' },
  'how-to-calculate-pythagorean-theorem': { scenario: 'math', subject: 'number' },
  'how-to-calculate-quadratic-equation': { scenario: 'math', subject: 'number' },
  'how-to-calculate-sample-size': { scenario: 'math', subject: 'number' },
  'how-to-calculate-scientific-notation': { scenario: 'math', subject: 'number' },
  'how-to-calculate-significant-figures': { scenario: 'math', subject: 'number' },
  'how-to-calculate-slope': { scenario: 'math', subject: 'number' },
  'how-to-calculate-standard-deviation': { scenario: 'math', subject: 'number' },
  'how-to-calculate-triangle-area': { scenario: 'math', subject: 'number' },
  'how-to-calculate-volume': { scenario: 'math', subject: 'number' },
  'how-to-calculate-z-score': { scenario: 'math', subject: 'number' },

  // —— Construction ——
  'how-to-calculate-concrete': { scenario: 'construction', subject: 'number' },
  'how-to-calculate-paint': { scenario: 'construction', subject: 'number' },
  'how-to-calculate-tile': { scenario: 'construction', subject: 'number' },
  'square-feet': { scenario: 'construction', subject: 'unit' },

  // —— Everyday ——
  'how-to-calculate-age': { scenario: 'everyday', subject: 'number' },
  'how-to-calculate-date-difference': { scenario: 'everyday', subject: 'number' },
  'how-to-calculate-salary-hourly': { scenario: 'everyday', subject: 'number' },
  'how-to-calculate-tip': { scenario: 'everyday', subject: 'number' },
  'unit-converter': { scenario: 'everyday', subject: 'unit' },

  // —— Physics ——
  'how-to-calculate-acceleration': { scenario: 'physics', subject: 'number' },
  'how-to-calculate-density': { scenario: 'physics', subject: 'number' },
  'how-to-calculate-ohms-law': { scenario: 'physics', subject: 'number' },
  'how-to-calculate-velocity': { scenario: 'physics', subject: 'number' },
};

const main = async () => {
  const files = (await fs.readdir(catalogDir)).filter((f) => f.endsWith('.json'));
  const missing = [];
  const scenarioCounts = Object.fromEntries(TOOL_SCENARIO_ORDER.map((s) => [s, 0]));
  const subjectCounts = Object.fromEntries(TOOL_SUBJECT_ORDER.map((s) => [s, 0]));

  for (const file of files) {
    const slug = file.replace(/\.json$/, '');
    const tags = TAGS[slug];
    if (!tags) {
      missing.push(slug);
      continue;
    }
    if (!isToolScenario(tags.scenario) || !isToolSubject(tags.subject)) {
      throw new Error(`Invalid tags for ${slug}: ${JSON.stringify(tags)}`);
    }
    const fullPath = path.join(catalogDir, file);
    const entry = JSON.parse(await fs.readFile(fullPath, 'utf8'));
    entry.scenario = tags.scenario;
    entry.subject = tags.subject;
    await fs.writeFile(fullPath, `${JSON.stringify(entry, null, 2)}\n`, 'utf8');
    scenarioCounts[tags.scenario] += 1;
    subjectCounts[tags.subject] += 1;
  }

  if (missing.length) {
    console.error('Missing TAGS for:', missing.join(', '));
    process.exit(1);
  }

  const unusedTags = Object.keys(TAGS).filter((slug) => !files.includes(`${slug}.json`));
  if (unusedTags.length) {
    console.error('TAGS without catalog shard:', unusedTags.join(', '));
    process.exit(1);
  }

  for (const s of TOOL_SCENARIO_ORDER) {
    if (scenarioCounts[s] < 1) throw new Error(`Scenario empty: ${s}`);
  }
  for (const s of TOOL_SUBJECT_ORDER) {
    if (subjectCounts[s] < 1) throw new Error(`Subject empty: ${s}`);
  }

  console.log(`Tagged ${files.length} tools.`);
  console.log('Scenarios:', scenarioCounts);
  console.log('Subjects:', subjectCounts);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
