/**
 * Sitemap 生成核心：全量或按语言 / 信息页 / 分类 / 场景 / 工具类型筛选。
 * 供 `scripts/build-site.mjs` 全量构建与 `ops/seo/*` 运维 UI/CLI 共用。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { siteConfig, withLangPath } from './config.mjs';
import { TOOL_CATALOG } from './tool-catalog.mjs';
import {
  TOOL_SCENARIO_ORDER,
  TOOL_SUBJECT_ORDER,
  SCENARIO_HUB_PATH,
  SUBJECT_HUB_PATH,
} from './taxonomy.mjs';

/** 仓库根目录（scripts/site → ../..）。 */
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

/** 默认写入的全站 sitemap 路径。 */
export const DEFAULT_SITEMAP_PATH = path.join(rootDir, 'public', 'sitemap.xml');

/** 筛选生成时的默认旁路文件名（避免误覆盖生产全量 sitemap）。 */
export const DEFAULT_FILTERED_SITEMAP_PATH = path.join(
  rootDir,
  'public',
  'sitemap.filtered.xml'
);

/**
 * 可勾选的信息页（不含首页；首页单独用 includeHome）。
 * @type {ReadonlyArray<{ id: string, path: string, priority: string, label: string }>}
 */
export const SITEMAP_INFO_PAGES = Object.freeze([
  { id: 'about', path: '/about', priority: '0.7', label: '关于 / About' },
  { id: 'privacy', path: '/privacy', priority: '0.6', label: '隐私 / Privacy' },
  { id: 'terms', path: '/terms', priority: '0.6', label: '条款 / Terms' },
  { id: 'contact', path: '/contact', priority: '0.6', label: '联系 / Contact' },
]);

/**
 * 转义 XML 文本节点 / 属性值。
 * @param {string} s 原始字符串
 * @returns {string}
 */
export const escapeXml = (s) =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

/**
 * 将站点相对路径转为绝对 URL。
 * @param {string} pathname 以 / 开头的路径
 * @returns {string}
 */
export const toAbsUrl = (pathname) => {
  const base = siteConfig.baseUrl.replace(/\/$/, '');
  return `${base}${pathname}`;
};

/**
 * 生成一组 URL 的 xhtml hreflang 交替链接（含 x-default）。
 * @param {string} pathname 规范路径（无语言前缀，如 /tools/bmi）
 * @param {string[]} langs 参与 hreflang 的语言列表
 * @returns {string} XML 片段（多行）
 */
export const hreflangLinksXml = (pathname, langs) => {
  const links = langs.map((code) => {
    const href = toAbsUrl(withLangPath(code, pathname));
    return `    <xhtml:link rel="alternate" hreflang="${escapeXml(code)}" href="${escapeXml(href)}" />`;
  });
  const xDefault = toAbsUrl(withLangPath(siteConfig.defaultLang, pathname));
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />`
  );
  return links.join('\n');
};

/**
 * @typedef {object} SitemapBuildOptions
 * @property {string[]} [langs] 语言代码；默认 siteConfig.enabledLangs
 * @property {boolean} [includeHome] 是否包含各语言首页；默认 true
 * @property {string[]} [infoPages] 信息页 id：about|privacy|terms|contact；默认全部
 * @property {boolean} [includeScenarioHub] 是否包含 /where-to-use-tools hub；默认 true
 * @property {boolean} [includeSubjectHub] 是否包含 /tool-type hub；默认 true
 * @property {string[]} [scenarios] 场景 leaf id；空数组且未禁用场景时表示全部场景 leaf
 * @property {string[]} [subjects] 工具类型 leaf id；空且未禁用时表示全部 subject leaf
 * @property {boolean} [includeScenarioLeaves] 是否输出场景 leaf；默认 true
 * @property {boolean} [includeSubjectLeaves] 是否输出工具类型 leaf；默认 true
 * @property {boolean} [includeTools] 是否输出工具页；默认 true
 * @property {string[]} [categories] 工具 category 过滤；空=不按 category 限制
 * @property {string[]} [toolScenarios] 工具 scenario 过滤；空=不按 scenario 限制工具
 * @property {string[]} [toolSubjects] 工具 subject 过滤；空=不按 subject 限制工具
 * @property {string} [outFile] 输出绝对或相对仓库根的路径
 * @property {boolean} [dryRun] 只生成不写盘
 */

/**
 * 规范化语言列表：只保留启用语言。
 * @param {string[]|undefined} langs
 * @returns {string[]}
 */
const normalizeLangs = (langs) => {
  const enabled = siteConfig.enabledLangs || [siteConfig.defaultLang];
  if (!langs || !langs.length) return [...enabled];
  const set = new Set(enabled);
  const picked = langs.map((l) => String(l).trim()).filter((l) => set.has(l));
  return picked.length ? picked : [...enabled];
};

/**
 * 判断工具是否命中分类/场景/类型过滤（多维 OR；若三维皆空则全部工具）。
 * @param {{category?:string,scenario?:string,subject?:string}} tool
 * @param {{categories:string[],toolScenarios:string[],toolSubjects:string[]}} filters
 * @returns {boolean}
 */
const toolMatchesFilters = (tool, filters) => {
  const { categories, toolScenarios, toolSubjects } = filters;
  const hasCat = categories.length > 0;
  const hasSc = toolScenarios.length > 0;
  const hasSub = toolSubjects.length > 0;
  if (!hasCat && !hasSc && !hasSub) return true;
  if (hasCat && categories.includes(tool.category)) return true;
  if (hasSc && toolScenarios.includes(tool.scenario)) return true;
  if (hasSub && toolSubjects.includes(tool.subject)) return true;
  return false;
};

/**
 * 收集 sitemap 中的规范 pathname 条目（尚未按语言展开）。
 * @param {SitemapBuildOptions} options
 * @returns {{ pathname: string, priority: string }[]}
 */
export const collectSitemapEntries = (options = {}) => {
  const includeHome = options.includeHome !== false;
  /** 未传 infoPages 时默认四页；显式 [] 表示不包含信息页。 */
  const infoIds = Array.isArray(options.infoPages)
    ? options.infoPages.map(String)
    : SITEMAP_INFO_PAGES.map((p) => p.id);
  const infoSet = new Set(infoIds);

  const includeScenarioHub = options.includeScenarioHub !== false;
  const includeSubjectHub = options.includeSubjectHub !== false;
  const includeScenarioLeaves = options.includeScenarioLeaves !== false;
  const includeSubjectLeaves = options.includeSubjectLeaves !== false;
  const includeTools = options.includeTools !== false;

  /**
   * 场景 leaf：未传 options.scenarios 时默认全部；传 [] 表示不输出 leaf。
   * @type {string[]}
   */
  const scenarios = Array.isArray(options.scenarios)
    ? options.scenarios.filter((id) => TOOL_SCENARIO_ORDER.includes(/** @type {any} */ (id)))
    : [...TOOL_SCENARIO_ORDER];
  /**
   * 工具类型 leaf：未传时默认全部；传 [] 表示不输出。
   * @type {string[]}
   */
  const subjects = Array.isArray(options.subjects)
    ? options.subjects.filter((id) => TOOL_SUBJECT_ORDER.includes(/** @type {any} */ (id)))
    : [...TOOL_SUBJECT_ORDER];

  const categories = (options.categories || []).map(String).filter(Boolean);
  /** 工具过滤：优先 toolScenarios/toolSubjects；否则回退到 scenarios/subjects 勾选。 */
  const toolScenarios = Array.isArray(options.toolScenarios)
    ? options.toolScenarios.map(String).filter(Boolean)
    : Array.isArray(options.scenarios)
      ? scenarios
      : [];
  const toolSubjects = Array.isArray(options.toolSubjects)
    ? options.toolSubjects.map(String).filter(Boolean)
    : Array.isArray(options.subjects)
      ? subjects
      : [];

  /** @type {{ pathname: string, priority: string }[]} */
  const entries = [];

  if (includeHome) {
    entries.push({ pathname: '/', priority: '1.0' });
  }

  for (const page of SITEMAP_INFO_PAGES) {
    if (infoSet.has(page.id)) {
      entries.push({ pathname: page.path, priority: page.priority });
    }
  }

  if (includeScenarioHub) {
    entries.push({ pathname: SCENARIO_HUB_PATH, priority: '0.75' });
  }
  if (includeSubjectHub) {
    entries.push({ pathname: SUBJECT_HUB_PATH, priority: '0.75' });
  }

  if (includeScenarioLeaves) {
    for (const id of scenarios) {
      entries.push({ pathname: `${SCENARIO_HUB_PATH}/${id}`, priority: '0.7' });
    }
  }
  if (includeSubjectLeaves) {
    for (const id of subjects) {
      entries.push({ pathname: `${SUBJECT_HUB_PATH}/${id}`, priority: '0.7' });
    }
  }

  if (includeTools) {
    const filters = { categories, toolScenarios, toolSubjects };
    for (const tool of TOOL_CATALOG) {
      if (!toolMatchesFilters(tool, filters)) continue;
      entries.push({ pathname: tool.path, priority: '0.9' });
    }
  }

  return entries;
};

/**
 * 将条目展开为 urlset XML 字符串。
 * @param {{ pathname: string, priority: string }[]} entries
 * @param {string[]} langs
 * @returns {{ xml: string, urlCount: number }}
 */
export const entriesToSitemapXml = (entries, langs) => {
  const langList = normalizeLangs(langs);
  /** hreflang 始终指向本次选中的语言集合（子集 sitemap 也自洽）。 */
  const urls = [];
  for (const { pathname, priority } of entries) {
    for (const lang of langList) {
      const loc = toAbsUrl(withLangPath(lang, pathname));
      urls.push(`  <url>
    <loc>${escapeXml(loc)}</loc>
    <priority>${priority}</priority>
${hreflangLinksXml(pathname, langList)}
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return { xml, urlCount: urls.length };
};

/**
 * 构建 sitemap 并可选写入磁盘。
 * @param {SitemapBuildOptions} [options]
 * @returns {Promise<{ xml: string, urlCount: number, entryCount: number, outFile: string|null, langs: string[] }>}
 */
export const buildSitemapXml = async (options = {}) => {
  const langs = normalizeLangs(options.langs);
  const entries = collectSitemapEntries(options);
  const { xml, urlCount } = entriesToSitemapXml(entries, langs);

  let outFile = null;
  if (!options.dryRun) {
    const target = options.outFile
      ? path.isAbsolute(options.outFile)
        ? options.outFile
        : path.join(rootDir, options.outFile)
      : DEFAULT_SITEMAP_PATH;
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, xml, 'utf-8');
    outFile = target;
  }

  return {
    xml,
    urlCount,
    entryCount: entries.length,
    outFile,
    langs,
  };
};

/**
 * 全量 sitemap（与历史 buildSitemap 行为一致）。
 * @returns {Promise<{ xml: string, urlCount: number, entryCount: number, outFile: string|null, langs: string[] }>}
 */
export const buildFullSitemap = async () => buildSitemapXml({});

/**
 * UI/CLI 元数据：可选语言、分类、场景、工具类型、信息页。
 * @returns {{
 *   languages: {code:string,label:string}[],
 *   enabledLangs: string[],
 *   categories: string[],
 *   scenarios: string[],
 *   subjects: string[],
 *   infoPages: typeof SITEMAP_INFO_PAGES,
 *   scenarioHubPath: string,
 *   subjectHubPath: string,
 *   defaultSitemapPath: string,
 *   defaultFilteredPath: string,
 *   toolCount: number
 * }}
 */
export const getSitemapUiMeta = () => {
  const categories = [
    ...new Set(TOOL_CATALOG.map((t) => t.category).filter(Boolean)),
  ].sort();
  return {
    languages: siteConfig.languages || [],
    enabledLangs: [...(siteConfig.enabledLangs || [])],
    categories,
    scenarios: [...TOOL_SCENARIO_ORDER],
    subjects: [...TOOL_SUBJECT_ORDER],
    infoPages: SITEMAP_INFO_PAGES,
    scenarioHubPath: SCENARIO_HUB_PATH,
    subjectHubPath: SUBJECT_HUB_PATH,
    defaultSitemapPath: 'public/sitemap.xml',
    defaultFilteredPath: 'public/sitemap.filtered.xml',
    toolCount: TOOL_CATALOG.length,
  };
};
