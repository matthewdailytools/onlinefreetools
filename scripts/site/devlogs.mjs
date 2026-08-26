/**
 * 开发日志源文件收集与 sitemap 条目生成（`dev-logs/` → `public/devlogs/`）。
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
 * 收集开发日志 sitemap 条目（索引 + 各篇；单 URL，不按语言展开）。
 * @returns {Promise<Array<{ pathname: string, priority: string, singleUrl: true, sourceFiles: string[] }>>}
 */
export const collectDevlogSitemapEntries = async () => {
  const files = await collectDevLogMarkdownFiles();
  const allSources = files.map((f) => f.relPath);
  /** @type {Array<{ pathname: string, priority: string, singleUrl: true, sourceFiles: string[] }>} */
  const entries = [
    {
      pathname: '/devlogs/',
      priority: '0.5',
      singleUrl: true,
      sourceFiles: ['scripts/build-site.mjs', 'scripts/site/devlogs.mjs', ...allSources],
    },
  ];
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
