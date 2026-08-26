/**
 * Sitemap `<lastmod>`：按页面源文件内容哈希决定日期。
 * - 哈希未变：沿用状态（或旧 sitemap）中的日期
 * - 哈希变了 / 新建 URL：使用当前 HEAD 提交日（无 git 时用当天 UTC）
 *
 * 状态文件随仓库提交，保证 CI 重复构建同一提交时日期稳定。
 */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { promises as fs, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { siteConfig } from './config.mjs';
import { TOOL_CATALOG } from './tool-catalog.mjs';
import {
  SCENARIO_HUB_PATH,
  SUBJECT_HUB_PATH,
  TOOL_SCENARIO_ORDER,
  TOOL_SUBJECT_ORDER,
} from './taxonomy.mjs';

/** 仓库根目录。 */
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

/** catalog 分片目录（含 page.module；合并后的 catalog.json 不含 page）。 */
const catalogShardDir = path.join(rootDir, 'src/site/tool-catalog.d');

/** lastmod 状态文件（应入库；由全量 sitemap 构建更新）。 */
export const SITEMAP_LASTMOD_STATE_PATH = path.join(
  rootDir,
  'scripts/site/sitemap-lastmod-state.json'
);

/**
 * 今日 UTC 日期（yyyy-MM-dd）。
 * @returns {string}
 */
export const utcToday = () => new Date().toISOString().slice(0, 10);

/**
 * 校验并规范化 lastmod 字符串（只接受 yyyy-MM-dd 或 W3C datetime 前缀日期）。
 * @param {string|undefined|null} value
 * @returns {string|null}
 */
export const normalizeLastmodDate = (value) => {
  if (!value) return null;
  const s = String(value).trim();
  const m = s.match(/^(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : null;
};

/**
 * 从已有 sitemap XML 解析 loc → lastmod（日期部分）。
 * @param {string} xml
 * @returns {Map<string, string>}
 */
export const parseSitemapLastmods = (xml) => {
  /** @type {Map<string, string>} */
  const map = new Map();
  if (!xml) return map;
  const urlRe = /<url>([\s\S]*?)<\/url>/gi;
  let block;
  while ((block = urlRe.exec(xml)) !== null) {
    const body = block[1];
    const locMatch = body.match(/<loc>\s*([^<]+?)\s*<\/loc>/i);
    const lastmodMatch = body.match(/<lastmod>\s*([^<]+?)\s*<\/lastmod>/i);
    const loc = locMatch ? locMatch[1].trim() : '';
    const lastmod = normalizeLastmodDate(lastmodMatch ? lastmodMatch[1] : null);
    if (loc && lastmod) map.set(loc, lastmod);
  }
  return map;
};

/**
 * 读取磁盘上的 sitemap lastmod 映射（文件不存在则空表）。
 * @param {string} filePath
 * @returns {Promise<Map<string, string>>}
 */
export const loadSitemapLastmodsFromFile = async (filePath) => {
  try {
    const xml = await fs.readFile(filePath, 'utf-8');
    return parseSitemapLastmods(xml);
  } catch (err) {
    if (err && err.code === 'ENOENT') return new Map();
    throw err;
  }
};

/**
 * @typedef {{ hash: string, lastmod: string }} LastmodStateEntry
 * @typedef {{ version: number, entries: Record<string, LastmodStateEntry> }} LastmodState
 */

/**
 * 读取 lastmod 状态文件。
 * @returns {Promise<LastmodState>}
 */
export const loadLastmodState = async () => {
  try {
    const raw = await fs.readFile(SITEMAP_LASTMOD_STATE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') {
      return { version: 1, entries: {} };
    }
    return {
      version: Number(parsed.version) || 1,
      entries:
        parsed.entries && typeof parsed.entries === 'object' ? parsed.entries : {},
    };
  } catch (err) {
    if (err && err.code === 'ENOENT') return { version: 1, entries: {} };
    throw err;
  }
};

/**
 * 写入 lastmod 状态文件（按 loc 键排序，便于 diff）。
 * @param {LastmodState} state
 * @returns {Promise<void>}
 */
export const saveLastmodState = async (state) => {
  /** 排序后的条目，降低无意义 diff。 */
  const sortedKeys = Object.keys(state.entries || {}).sort();
  /** @type {Record<string, LastmodStateEntry>} */
  const entries = {};
  for (const key of sortedKeys) {
    entries[key] = state.entries[key];
  }
  const payload = `${JSON.stringify({ version: state.version || 1, entries }, null, 2)}\n`;
  await fs.mkdir(path.dirname(SITEMAP_LASTMOD_STATE_PATH), { recursive: true });
  await fs.writeFile(SITEMAP_LASTMOD_STATE_PATH, payload, 'utf-8');
};

/**
 * 当前 HEAD 提交日期（yyyy-MM-dd）；失败则 null。
 * @returns {string|null}
 */
export const getHeadCommitDate = () => {
  try {
    const out = execFileSync('git', ['show', '-s', '--format=%cs', 'HEAD'], {
      cwd: rootDir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    return normalizeLastmodDate(out.trim());
  } catch {
    return null;
  }
};

/**
 * 将站点公共路径转为仓库内文件路径（若以 / 开头）。
 * @param {string} publicPath 如 /icons/tools/x.svg
 * @returns {string}
 */
const publicToRepoPath = (publicPath) => {
  const p = String(publicPath || '').replace(/^\//, '');
  return path.join('public', p);
};

/**
 * catalog page.module → src/pages/*.ts 相对仓库根路径。
 * @param {string|undefined} modulePath 如 ../pages/unitConverterPage
 * @returns {string|null}
 */
const pageModuleToRepoPath = (modulePath) => {
  if (!modulePath) return null;
  const cleaned = String(modulePath)
    .replace(/^\.\.\//, 'src/')
    .replace(/\.ts$/, '');
  const baseAbs = path.join(rootDir, cleaned);
  for (const ext of ['.ts', '.tsx', '.js', '.mjs']) {
    if (existsSync(baseAbs + ext)) {
      return path.relative(rootDir, baseAbs + ext).replace(/\\/g, '/');
    }
  }
  /** 文件尚不存在时仍返回 .ts 约定路径，便于新建工具首次哈希。 */
  return `${cleaned}.ts`.replace(/\\/g, '/');
};

/**
 * 从 tool-catalog.d/{slug}.json 读取 page.module。
 * @param {string} slug
 * @returns {string|null}
 */
const readPageModuleFromShard = (slug) => {
  const shardPath = path.join(catalogShardDir, `${slug}.json`);
  try {
    const raw = JSON.parse(readFileSync(shardPath, 'utf8'));
    return raw?.page?.module || null;
  } catch {
    return null;
  }
};

/** slug → catalog 工具条目。 */
const toolBySlug = new Map(TOOL_CATALOG.map((t) => [t.slug, t]));

/** 规范 pathname → catalog 工具条目。 */
const toolByPathname = new Map(TOOL_CATALOG.map((t) => [t.path, t]));

/**
 * 解析某规范 pathname + 语言对应的源文件列表（相对仓库根；缺省文件仍列入，哈希时跳过）。
 * @param {string} pathname 如 /tools/bmi、/
 * @param {string} lang 语言代码
 * @returns {string[]}
 */
export const resolveSourceFilesForEntry = (pathname, lang) => {
  /** @type {string[]} */
  const files = [];
  const add = (rel) => {
    if (rel) files.push(rel.replace(/\\/g, '/'));
  };

  if (pathname === '/') {
    add('scripts/site/pages/home.mjs');
    add('scripts/site/components/content-home.mjs');
    add('scripts/site/components/content-tool-cards.mjs');
    add('src/site/tool-catalog.json');
    add(`src/site/i18n/core/${lang}.ts`);
    return files;
  }

  if (pathname === '/about') {
    add('scripts/site/pages/about.mjs');
    add('scripts/site/pages/info-page.mjs');
    add(`src/site/i18n/core/${lang}.ts`);
    return files;
  }

  if (pathname === '/privacy' || pathname === '/terms' || pathname === '/contact') {
    const name = pathname.slice(1);
    add(`scripts/site/pages/${name}.mjs`);
    add('scripts/site/pages/info-page.mjs');
    add('scripts/site/i18n-site-pages.mjs');
    add(`src/site/i18n/core/${lang}.ts`);
    return files;
  }

  if (pathname === SCENARIO_HUB_PATH || pathname === SUBJECT_HUB_PATH) {
    add('scripts/site/pages/taxonomy.mjs');
    add('scripts/site/taxonomy.mjs');
    add('scripts/site/components/content-taxonomy.mjs');
    add('scripts/site/i18n-taxonomy.mjs');
    add('src/site/tool-catalog.json');
    add(`src/site/i18n/core/${lang}.ts`);
    return files;
  }

  const scenarioLeaf = TOOL_SCENARIO_ORDER.find(
    (id) => pathname === `${SCENARIO_HUB_PATH}/${id}`
  );
  if (scenarioLeaf) {
    add('scripts/site/pages/taxonomy.mjs');
    add('scripts/site/taxonomy.mjs');
    add('scripts/site/components/content-taxonomy.mjs');
    add('scripts/site/i18n-taxonomy.mjs');
    add('src/site/tool-catalog.json');
    add(`src/site/i18n/core/${lang}.ts`);
    return files;
  }

  const subjectLeaf = TOOL_SUBJECT_ORDER.find(
    (id) => pathname === `${SUBJECT_HUB_PATH}/${id}`
  );
  if (subjectLeaf) {
    add('scripts/site/pages/taxonomy.mjs');
    add('scripts/site/taxonomy.mjs');
    add('scripts/site/components/content-taxonomy.mjs');
    add('scripts/site/i18n-taxonomy.mjs');
    add('src/site/tool-catalog.json');
    add(`src/site/i18n/core/${lang}.ts`);
    return files;
  }

  const tool = toolByPathname.get(pathname);
  if (tool) {
    add(`src/site/tool-catalog.d/${tool.slug}.json`);
    add(pageModuleToRepoPath(readPageModuleFromShard(tool.slug)));
    add(`src/site/i18n/tools/${tool.slug}/${lang}.ts`);
    if (tool.logo) add(publicToRepoPath(tool.logo));
    else add(publicToRepoPath(`/icons/tools/${tool.slug}.svg`));
    return files;
  }

  /** 未知路径：退化为空，调用方用 HEAD/当天日期。 */
  return files;
};

/**
 * 对源文件列表做内容哈希（缺失文件忽略；全部缺失则返回空串）。
 * @param {string[]} relPaths 相对仓库根
 * @param {Map<string, Buffer|null>} [fileCache] 可选：路径 → 内容（null=缺失），跨 URL 复用
 * @returns {Promise<string>}
 */
export const hashSourceFiles = async (relPaths, fileCache = new Map()) => {
  const hash = createHash('sha256');
  /** 是否读到过至少一个文件。 */
  let any = false;
  const unique = [...new Set(relPaths)].sort();
  for (const rel of unique) {
    let buf;
    if (fileCache.has(rel)) {
      buf = fileCache.get(rel);
    } else {
      const abs = path.join(rootDir, rel);
      try {
        buf = await fs.readFile(abs);
      } catch (err) {
        if (err && err.code === 'ENOENT') buf = null;
        else throw err;
      }
      fileCache.set(rel, buf);
    }
    if (!buf) continue;
    hash.update(rel);
    hash.update('\0');
    hash.update(buf);
    hash.update('\0');
    any = true;
  }
  return any ? hash.digest('hex') : '';
};

/**
 * 为 sitemap 条目计算每个绝对 loc 的 lastmod，并可选写回状态。
 * @param {{ pathname: string, priority: string }[]} entries
 * @param {string[]} langs
 * @param {(pathname: string) => string} toAbsUrl
 * @param {(lang: string, pathname: string) => string} withLangPath
 * @param {{
 *   previousByLoc?: Map<string, string>,
 *   persistState?: boolean,
 * }} [options]
 * @returns {Promise<{ lastmodByLoc: Map<string, string>, changedCount: number, reusedCount: number, newCount: number }>}
 */
export const resolveLastmodsForEntries = async (
  entries,
  langs,
  toAbsUrl,
  withLangPath,
  options = {}
) => {
  const previousByLoc = options.previousByLoc || new Map();
  const persistState = options.persistState !== false;
  const state = await loadLastmodState();
  /** 变更时使用的「新日期」：优先 HEAD 提交日，避免同一提交重复构建时钟漂移。 */
  const freshDate = getHeadCommitDate() || utcToday();

  /** @type {Map<string, string>} */
  const lastmodByLoc = new Map();
  /** 统计：哈希变化、沿用、新建。 */
  let changedCount = 0;
  let reusedCount = 0;
  let newCount = 0;

  /** @type {Record<string, LastmodStateEntry>} */
  const nextEntries = { ...state.entries };
  /** 文件内容缓存，避免同一源文件被多语 URL 重复读取。 */
  const fileCache = new Map();

  for (const entry of entries) {
    const { pathname, singleUrl, sourceFiles } = entry;
    /** @type {{ loc: string, lang: string }[]} */
    const targets = singleUrl
      ? [{ loc: toAbsUrl(pathname), lang: siteConfig.defaultLang }]
      : langs.map((lang) => ({
          loc: toAbsUrl(withLangPath(lang, pathname)),
          lang,
        }));

    for (const { loc, lang } of targets) {
      const sources =
        Array.isArray(sourceFiles) && sourceFiles.length
          ? sourceFiles
          : resolveSourceFilesForEntry(pathname, lang);
      const hash = await hashSourceFiles(sources, fileCache);
      const prevState = state.entries[loc];
      const prevSitemap = previousByLoc.get(loc);
      /** 最终写入的 lastmod。 */
      let lastmod;

      if (prevState && prevState.hash && hash && prevState.hash === hash) {
        lastmod = normalizeLastmodDate(prevState.lastmod) || freshDate;
        reusedCount += 1;
      } else if (prevState && prevState.hash && hash && prevState.hash !== hash) {
        lastmod = freshDate;
        changedCount += 1;
      } else if (!prevState && prevSitemap && hash) {
        /**
         * 首次建立状态：旧 sitemap 已有 lastmod 时先沿用，避免一次性全部刷成今天；
         * 哈希写入后，后续仅在内容变化时更新。
         */
        lastmod = prevSitemap;
        newCount += 1;
      } else if (!prevState && !prevSitemap) {
        lastmod = freshDate;
        newCount += 1;
      } else {
        lastmod = freshDate;
        changedCount += 1;
      }

      lastmodByLoc.set(loc, lastmod);
      if (hash) {
        nextEntries[loc] = { hash, lastmod };
      } else if (prevState) {
        nextEntries[loc] = { hash: prevState.hash || '', lastmod };
      } else {
        nextEntries[loc] = { hash: '', lastmod };
      }
    }
  }

  if (persistState) {
    await saveLastmodState({ version: 1, entries: nextEntries });
  }

  return { lastmodByLoc, changedCount, reusedCount, newCount };
};

/**
 * 供调试：列出某工具源文件。
 * @param {string} slug
 * @param {string} lang
 */
export const debugSourcesForTool = (slug, lang) => {
  const tool = toolBySlug.get(slug);
  if (!tool) return [];
  return resolveSourceFilesForEntry(tool.path, lang);
};
