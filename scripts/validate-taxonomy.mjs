#!/usr/bin/env node
/**
 * 校验每个工具恰好一个合法 scenario + subject，且各枚举至少 1 个工具。
 */
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  TOOL_SCENARIO_ORDER,
  TOOL_SUBJECT_ORDER,
  isToolScenario,
  isToolSubject,
} from './site/taxonomy.mjs';

const require = createRequire(import.meta.url);
const catalogPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/site/tool-catalog.json'
);
const catalog = require(catalogPath);

const errors = [];
const scenarioCounts = Object.fromEntries(TOOL_SCENARIO_ORDER.map((s) => [s, 0]));
const subjectCounts = Object.fromEntries(TOOL_SUBJECT_ORDER.map((s) => [s, 0]));
/** @type {Map<string, string[]>} */
const scenarioMembers = new Map(TOOL_SCENARIO_ORDER.map((s) => [s, []]));
/** @type {Map<string, string[]>} */
const subjectMembers = new Map(TOOL_SUBJECT_ORDER.map((s) => [s, []]));

for (const tool of catalog) {
  if (!tool.scenario || !isToolScenario(tool.scenario)) {
    errors.push(`${tool.slug}: missing/invalid scenario ${tool.scenario}`);
  } else {
    scenarioCounts[tool.scenario] += 1;
    scenarioMembers.get(tool.scenario).push(tool.slug);
  }
  if (!tool.subject || !isToolSubject(tool.subject)) {
    errors.push(`${tool.slug}: missing/invalid subject ${tool.subject}`);
  } else {
    subjectCounts[tool.subject] += 1;
    subjectMembers.get(tool.subject).push(tool.slug);
  }
}

for (const s of TOOL_SCENARIO_ORDER) {
  if (scenarioCounts[s] < 1) errors.push(`scenario empty: ${s}`);
}
for (const s of TOOL_SUBJECT_ORDER) {
  if (subjectCounts[s] < 1) errors.push(`subject empty: ${s}`);
}

// 同一工具不得出现在多个场景/对象列表（字段唯一即可保证）
const scenarioSeen = new Set();
for (const [, slugs] of scenarioMembers) {
  for (const slug of slugs) {
    if (scenarioSeen.has(slug)) errors.push(`duplicate scenario membership: ${slug}`);
    scenarioSeen.add(slug);
  }
}
const subjectSeen = new Set();
for (const [, slugs] of subjectMembers) {
  for (const slug of slugs) {
    if (subjectSeen.has(slug)) errors.push(`duplicate subject membership: ${slug}`);
    subjectSeen.add(slug);
  }
}

if (errors.length) {
  console.error('[taxonomy] FAIL');
  for (const e of errors) console.error(' -', e);
  process.exit(1);
}

console.log(
  `[taxonomy] OK — ${catalog.length} tools; scenarios=${JSON.stringify(scenarioCounts)}; subjects=${JSON.stringify(subjectCounts)}`
);
