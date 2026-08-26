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
 * @returns {Promise<Array<{ pathname: string, priority: string, singleUrl: true, sourceFiles: string[] }>>}
 */
export const collectDevlogSitemapEntries = async () => {
  const files = await collectDevLogMarkdownFiles();
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
  for (const { fileName, relPath } of files) {
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
