#!/usr/bin/env node
/**
 * Sitemap 生成 CLI：全量或按语言 / 信息页 / 分类 / 场景 / 工具类型筛选。
 *
 * 示例：
 *   npm run sitemap
 *   npm run sitemap -- --lang en,zh --info about,privacy
 *   npm run sitemap -- --scenario documents,media --subject pdf,image --out public/sitemap.filtered.xml
 *   npm run sitemap -- --category pdf --no-tools
 *   npm run sitemap -- --help
 */
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import {
  buildSitemapXml,
  DEFAULT_FILTERED_SITEMAP_PATH,
  DEFAULT_SITEMAP_PATH,
  getSitemapUiMeta,
  SITEMAP_INFO_PAGES,
} from '../../scripts/site/sitemap.mjs';

/**
 * 打印帮助。
 */
const printHelp = () => {
  const meta = getSitemapUiMeta();
  console.log(`Sitemap generator (full or filtered)

Usage:
  node ops/seo/generate-sitemap.mjs [options]

Options:
  --full                 Full sitemap → public/sitemap.xml (default when no filters)
  --lang <codes>         Comma-separated langs (default: all enabled)
  --info <ids>           about,privacy,terms,contact (default: all four)
  --no-home              Omit homepage URLs
  --no-info              Omit all info pages
  --category <ids>       Tool category filter (OR with scenario/subject)
  --scenario <ids>       where-to-use leaf ids; also filters tools by scenario
  --subject <ids>        tool-type leaf ids; also filters tools by subject
  --no-scenario-hub      Omit /where-to-use-tools hub
  --no-subject-hub       Omit /tool-type hub
  --no-scenario-leaves   Omit scenario leaf pages
  --no-subject-leaves    Omit tool-type leaf pages
  --no-tools             Omit tool pages
  --out <path>           Output path (default: sitemap.xml or sitemap.filtered.xml)
  --overwrite-main       Force write public/sitemap.xml even when filtered
  --dry-run              Print stats only
  --meta                 Print selectable ids as JSON
  --help                 This help

Enabled langs: ${meta.enabledLangs.join(', ')}
Categories: ${meta.categories.join(', ')}
Scenarios: ${meta.scenarios.join(', ')}
Subjects: ${meta.subjects.join(', ')}
Info pages: ${SITEMAP_INFO_PAGES.map((p) => p.id).join(', ')}
`);
};

/**
 * 解析逗号分隔列表。
 * @param {string|undefined} value
 * @returns {string[]}
 */
const splitList = (value) =>
  String(value || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

/**
 * 解析 CLI 参数。
 * @param {string[]} argv
 */
const parseArgs = (argv) => {
  /** @type {Record<string, any>} */
  const opts = {
    full: false,
    langs: null,
    infoPages: null,
    includeHome: true,
    includeScenarioHub: true,
    includeSubjectHub: true,
    includeScenarioLeaves: true,
    includeSubjectLeaves: true,
    includeTools: true,
    categories: [],
    scenarios: [],
    subjects: [],
    outFile: null,
    overwriteMain: false,
    dryRun: false,
    meta: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const take = () => {
      const v = argv[++i];
      if (v == null) throw new Error(`${arg} requires a value`);
      return v;
    };
    if (arg === '--help' || arg === '-h') opts.help = true;
    else if (arg === '--full') opts.full = true;
    else if (arg === '--meta') opts.meta = true;
    else if (arg === '--dry-run') opts.dryRun = true;
    else if (arg === '--overwrite-main') opts.overwriteMain = true;
    else if (arg === '--no-home') opts.includeHome = false;
    else if (arg === '--no-info') opts.infoPages = [];
    else if (arg === '--no-tools') opts.includeTools = false;
    else if (arg === '--no-scenario-hub') opts.includeScenarioHub = false;
    else if (arg === '--no-subject-hub') opts.includeSubjectHub = false;
    else if (arg === '--no-scenario-leaves') opts.includeScenarioLeaves = false;
    else if (arg === '--no-subject-leaves') opts.includeSubjectLeaves = false;
    else if (arg === '--lang' || arg === '--langs') opts.langs = splitList(take());
    else if (arg === '--info') opts.infoPages = splitList(take());
    else if (arg === '--category' || arg === '--categories')
      opts.categories = splitList(take());
    else if (arg === '--scenario' || arg === '--scenarios')
      opts.scenarios = splitList(take());
    else if (arg === '--subject' || arg === '--subjects' || arg === '--tool-type')
      opts.subjects = splitList(take());
    else if (arg === '--out') opts.outFile = take();
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return opts;
};

/**
 * 是否存在任何「非全量」筛选意图。
 * @param {ReturnType<typeof parseArgs>} opts
 */
const isFiltered = (opts) => {
  if (opts.full) return false;
  if (opts.langs && opts.langs.length) return true;
  if (opts.infoPages && opts.infoPages.length !== SITEMAP_INFO_PAGES.length) return true;
  if (opts.infoPages && opts.infoPages.length === 0) return true;
  if (!opts.includeHome) return true;
  if (!opts.includeTools) return true;
  if (!opts.includeScenarioHub || !opts.includeSubjectHub) return true;
  if (!opts.includeScenarioLeaves || !opts.includeSubjectLeaves) return true;
  if (opts.categories.length || opts.scenarios.length || opts.subjects.length) return true;
  return false;
};

/**
 * CLI 入口。
 */
const main = async () => {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    return;
  }
  if (opts.meta) {
    console.log(JSON.stringify(getSitemapUiMeta(), null, 2));
    return;
  }

  const filtered = isFiltered(opts);
  let outFile = opts.outFile;
  if (!outFile) {
    outFile = filtered && !opts.overwriteMain
      ? DEFAULT_FILTERED_SITEMAP_PATH
      : DEFAULT_SITEMAP_PATH;
  }

  /**
   * 未传 `--scenario` / `--subject` 时勿传空数组：
   * 核心模块里 `scenarios: []` 表示「不输出 leaf」，与「默认全部 leaf」不同。
   */
  const scenarios = opts.scenarios.length ? opts.scenarios : undefined;
  const subjects = opts.subjects.length ? opts.subjects : undefined;
  /** 工具过滤与 leaf 勾选共用；未指定时不限制工具。 */
  const toolScenarios = scenarios;
  const toolSubjects = subjects;

  const result = await buildSitemapXml({
    langs: opts.langs || undefined,
    includeHome: opts.includeHome,
    infoPages: opts.infoPages === null ? undefined : opts.infoPages,
    includeScenarioHub: opts.includeScenarioHub,
    includeSubjectHub: opts.includeSubjectHub,
    includeScenarioLeaves: opts.includeScenarioLeaves,
    includeSubjectLeaves: opts.includeSubjectLeaves,
    includeTools: opts.includeTools,
    categories: opts.categories.length ? opts.categories : undefined,
    scenarios,
    subjects,
    toolScenarios,
    toolSubjects,
    outFile,
    dryRun: opts.dryRun,
  });

  console.log(
    [
      filtered ? 'Filtered sitemap' : 'Full sitemap',
      `entries=${result.entryCount}`,
      `urls=${result.urlCount}`,
      `langs=${result.langs.join(',')}`,
      opts.dryRun ? 'dry-run' : `wrote=${path.relative(process.cwd(), result.outFile || outFile)}`,
    ].join(' | ')
  );
};

const isDirectRun = (() => {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return import.meta.url === pathToFileURL(entry).href;
  } catch {
    return false;
  }
})();

if (isDirectRun) {
  main().catch((err) => {
    console.error(err?.stack || err);
    process.exit(1);
  });
}
