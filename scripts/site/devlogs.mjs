/**
 * 开发日志源文件收集、分页路径与 sitemap 条目生成（`dev-logs/` → `public/devlogs/`）。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** 仓库根目录（scripts/site → ../..）。 */
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

/** 开发日志 Markdown 源目录。 */
export const DEVLOGS_SOURCE_DIR = path.join(rootDir, 'dev-logs');

/**
 * 顶栏「开发日志」链接路径（全局单语，无语言前缀）。
 * @type {string}
 */
export const DEVLOGS_NAV_PATH = '/devlogs/';

/** 开发日志索引每页条目数。 */
export const DEVLOGS_PAGE_SIZE = 30;

/**
 * 对人有帮助、默认可索引并进入 sitemap。
 * @type {'people'}
 */
export const DEVLOG_VISIBILITY_PEOPLE = 'people';

/**
 * 仅项目留档：公开 HTML 带 noindex,nofollow，且不进 sitemap。
 * @type {'project'}
 */
export const DEVLOG_VISIBILITY_PROJECT = 'project';

/**
 * 解析开发日志 Markdown 头部元数据（Date / Summary / Visibility / Robots）。
 * @param {string} md 源 Markdown 全文
 * @returns {{ date: string, summary: string, visibility: 'people'|'project', robotsContent: string }}
 */
export const parseDevLogMeta = (md) => {
  const lines = String(md || '').split(/\r?\n/);
  let date = '';
  let summary = '';
  /** @type {'people'|'project'} */
  let visibility = DEVLOG_VISIBILITY_PEOPLE;
  let robotsContent = '';
  let sawVisibility = false;
  let sawRobots = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!date && trimmed.startsWith('日期：')) date = trimmed.replace('日期：', '').trim();
    if (!summary && trimmed.startsWith('摘要：')) summary = trimmed.replace('摘要：', '').trim();
    if (!date && trimmed.startsWith('Date:')) date = trimmed.replace(/^Date:\s*/i, '').trim();
    if (!summary && trimmed.startsWith('Summary:')) summary = trimmed.replace(/^Summary:\s*/i, '').trim();

    if (!sawVisibility && /^Visibility:\s*/i.test(trimmed)) {
      sawVisibility = true;
      const raw = trimmed.replace(/^Visibility:\s*/i, '').trim().toLowerCase();
      if (
        raw === 'project' ||
        raw === 'internal' ||
        raw === 'noindex' ||
        raw === 'private'
      ) {
        visibility = DEVLOG_VISIBILITY_PROJECT;
      } else {
        visibility = DEVLOG_VISIBILITY_PEOPLE;
      }
    }

    if (!sawRobots && /^Robots:\s*/i.test(trimmed)) {
      sawRobots = true;
      robotsContent = trimmed.replace(/^Robots:\s*/i, '').trim();
      const lower = robotsContent.toLowerCase();
      if (lower.includes('noindex')) {
        visibility = DEVLOG_VISIBILITY_PROJECT;
      }
    }

    // 头部常见字段读完即可；正文很长时避免全文件扫描
    if (trimmed.startsWith('[question]') || trimmed.startsWith('[try to solve]')) break;
  }

  if (visibility === DEVLOG_VISIBILITY_PROJECT && !robotsContent) {
    robotsContent = 'noindex, nofollow';
  }

  return { date, summary, visibility, robotsContent };
};

/**
 * 递归收集 dev-logs 下所有 Markdown 源文件（支持 dev-logs/YYYY-MM/ 分月目录）。
 * 跳过以下划线开头的目录（如 `_archive`、`_curation`），不参与公开构建。
 * @param {string} [dir] 起始目录，默认 `dev-logs/`
 * @returns {Promise<{ fullPath: string, fileName: string, relPath: string }[]>}
 */
export const collectDevLogMarkdownFiles = async (dir = DEVLOGS_SOURCE_DIR) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  /** @type {{ fullPath: string, fileName: string, relPath: string }[]} */
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_')) continue;
      files.push(...(await collectDevLogMarkdownFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push({
        fullPath,
        fileName: entry.name,
        relPath: path.relative(rootDir, fullPath).replace(/\\/g, '/'),
      });
    }
  }
  return files;
};

/**
 * 开发日志索引第 `page` 页的公开路径（1-based）。
 * 第 1 页为 `/devlogs/`；其后为 `/devlogs/page-{n}.html`。
 * @param {number} page 页码（从 1 起）
 * @returns {string} 站点路径
 */
export const devlogsIndexPathname = (page) => {
  const n = Math.max(1, Math.floor(Number(page) || 1));
  return n <= 1 ? '/devlogs/' : `/devlogs/page-${n}.html`;
};

/**
 * 开发日志索引第 `page` 页对应的输出文件名（相对于 `public/devlogs/`）。
 * @param {number} page 页码（从 1 起）
 * @returns {string} 如 `index.html` 或 `page-2.html`
 */
export const devlogsIndexFileName = (page) => {
  const n = Math.max(1, Math.floor(Number(page) || 1));
  return n <= 1 ? 'index.html' : `page-${n}.html`;
};

/**
 * 按每页条数计算总页数（至少 1 页）。
 * @param {number} totalItems 条目总数
 * @param {number} [pageSize=DEVLOGS_PAGE_SIZE] 每页条数
 * @returns {number} 总页数
 */
export const devlogsTotalPages = (totalItems, pageSize = DEVLOGS_PAGE_SIZE) => {
  const size = Math.max(1, pageSize);
  const total = Math.max(0, totalItems);
  return Math.max(1, Math.ceil(total / size));
};

/**
 * 收集开发日志 sitemap 条目（索引各页 + 各篇；单 URL，不按语言展开）。
 * `Visibility: project`（或 Robots 含 noindex）的篇目**不**写入 sitemap。
 * @returns {Promise<Array<{ pathname: string, priority: string, singleUrl: true, sourceFiles: string[] }>>}
 */
export const collectDevlogSitemapEntries = async () => {
  const files = await collectDevLogMarkdownFiles();
  /** @type {{ fileName: string, relPath: string, fullPath: string }[]} */
  const indexableFiles = [];
  for (const file of files) {
    const md = await fs.readFile(file.fullPath, 'utf-8');
    const { visibility } = parseDevLogMeta(md);
    if (visibility === DEVLOG_VISIBILITY_PROJECT) continue;
    indexableFiles.push(file);
  }
  const allSources = files.map((f) => f.relPath);
  const pageCount = devlogsTotalPages(files.length);
  /** @type {Array<{ pathname: string, priority: string, singleUrl: true, sourceFiles: string[] }>} */
  const entries = [];
  for (let page = 1; page <= pageCount; page++) {
    entries.push({
      pathname: devlogsIndexPathname(page),
      priority: page === 1 ? '0.5' : '0.4',
      singleUrl: true,
      sourceFiles: ['scripts/build-site.mjs', 'scripts/site/devlogs.mjs', ...allSources],
    });
  }
  for (const { fileName, relPath } of indexableFiles) {
    const base = fileName.replace(/\.md$/, '');
    entries.push({
      pathname: `/devlogs/${encodeURIComponent(base)}.html`,
      priority: '0.4',
      singleUrl: true,
      sourceFiles: [relPath],
    });
  }
  return entries;
};
