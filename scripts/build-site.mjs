#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

import { siteConfig, getLangConfig, withLangPath, withExplicitLangPath } from './site/config.mjs';
import { t } from './site/i18n.mjs';
import { renderLayout } from './site/layout.mjs';
import { renderFooter, renderHeader, renderSidebar } from './site/components.mjs';
import { getHomePageModel } from './site/pages/home.mjs';
import { getAboutPageModel } from './site/pages/about.mjs';
import { TOOL_CATALOG } from './site/tool-catalog.mjs';
const require = createRequire(import.meta.url);
let marked;
try {
  marked = (await import('marked')).marked;
} catch {
  marked = require('marked').marked;
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const devLogsDir = path.join(root, 'dev-logs');

/**
 * 递归收集 dev-logs 下所有 Markdown 源文件（支持 dev-logs/YYYY-MM/ 分月目录）。
 * @param {string} dir
 * @returns {Promise<{ fullPath: string, fileName: string }[]>}
 */
const collectDevLogMarkdownFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectDevLogMarkdownFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push({ fullPath, fileName: entry.name });
    }
  }
  return files;
};

/**
 * 从日志文件名提取 YYYY-MM 月份键（用于索引分组）。
 * @param {string} fileName
 * @returns {string}
 */
const devLogMonthKey = (fileName) => {
  const m = fileName.match(/^(\d{4}-\d{2})/);
  return m ? m[1] : 'other';
};

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const toAbs = (pathname) => {
  const base = siteConfig.baseUrl.replace(/\/$/, '');
  return `${base}${pathname}`;
};
const parseMeta = (md) => {
  const lines = md.split(/\r?\n/);
  let date = '';
  let summary = '';
  for (const line of lines) {
    if (!date && line.startsWith('日期：')) date = line.replace('日期：', '').trim();
    if (!summary && line.startsWith('摘要：')) summary = line.replace('摘要：', '').trim();
    if (!date && line.startsWith('Date:')) date = line.replace('Date:', '').trim();
    if (!summary && line.startsWith('Summary:')) summary = line.replace('Summary:', '').trim();
    if (date && summary) break;
  }
  return { date, summary };
};

const langOutRoot = (lang) => {
  const { pathPrefix } = getLangConfig(lang);
  const prefixDir = String(pathPrefix || '').replace(/^\//, '');
  return prefixDir ? path.join(publicDir, prefixDir) : publicDir;
};

export const buildHome = async (lang) => {
  const outRoot = path.join(publicDir, '_pages', lang);
  await ensureDir(outRoot);

  const model = getHomePageModel(lang);
  const langAlternates = Object.fromEntries(
    (siteConfig.enabledLangs || []).map((code) => [code, withExplicitLangPath(code, '/')])
  );

  const headerHtml = renderHeader({
    lang,
    brandHref: withExplicitLangPath(lang, '/'),
    navItems: model.navItems,
    showSidebarToggle: true,
    showSearch: true,
    langAlternates,
  });

  const sidebarHtml = renderSidebar({
    title: model.sidebarTitle,
    items: model.sidebarItems,
    id: 'categoryList',
  });

  const footerHtml = renderFooter({ lang });

  // Google Search Console：仅注入到各语言首页 <head>
  const googleSiteVerificationMeta = siteConfig.googleSiteVerification
    ? `<meta name="google-site-verification" content="${siteConfig.googleSiteVerification}" />`
    : '';

  const html = renderLayout({
    lang,
    title: model.title,
    description: model.description,
    canonicalPath: model.canonicalPath,
    ogImageUrl: siteConfig.ogImage,
    ogType: 'website',
    alternates: (siteConfig.enabledLangs || []).map((code) => ({
      lang: code,
      href: toAbs(withLangPath(code, '/')),
    })),
    headerHtml,
    sidebarHtml,
    contentHtml: model.contentHtml,
    footerHtml,
    extraHeadHtml: googleSiteVerificationMeta,
    sidebarAutoCloseSelector: '#categoryList a',
  });

  await fs.writeFile(path.join(outRoot, 'index.html'), html, 'utf-8');
};

const removeStaticToolsDir = async (lang) => {
  try {
    const toolsDir = path.join(publicDir, '_pages', lang, 'tools');
    // remove if exists
    await fs.rm(toolsDir, { recursive: true, force: true });
    console.log(`Removed static tools dir for ${lang} if it existed: ${toolsDir}`);
  } catch (err) {
    // non-fatal
  }
};

export const buildDevLogs = async () => {
  const lang = siteConfig.defaultLang;
  const outDir = path.join(publicDir, 'devlogs');
  await ensureDir(outDir);

  const fileEntries = await collectDevLogMarkdownFiles(devLogsDir);
  fileEntries.sort((a, b) => b.fileName.localeCompare(a.fileName));

  const navItems = [
    { href: '/', label: t(lang, 'nav_home') },
    { href: '/devlogs/', label: t(lang, 'nav_devlogs') },
  ];
  const sidebarHtml = renderSidebar({
    title: lang === 'en' ? 'Navigation' : '导航',
    items: navItems,
    id: 'navList',
  });
  const footerHtml = renderFooter({ lang });

  const items = [];
  for (const { fullPath, fileName } of fileEntries) {
    const md = await fs.readFile(fullPath, 'utf-8');
    const { date, summary } = parseMeta(md);
    const htmlBody = marked.parse(md);
    const base = fileName.replace(/\.md$/, '');

    const pageTitle = summary ? `${summary} | ${t(lang, 'nav_devlogs')}` : base;
    const description = summary || `${siteConfig.brand} dev logs`;
    const canonicalPath = `/devlogs/${encodeURIComponent(base)}.html`;

    const headerHtml = renderHeader({
      lang,
      brandHref: '/',
      navItems,
      showSidebarToggle: true,
      showSearch: false,
      showLangSwitcher: false,
    });

    const contentHtml = `
      <section class="mb-3">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h1 class="h4 mb-0">${pageTitle}</h1>
          <a class="btn btn-outline-secondary btn-sm" href="${withLangPath(lang, '/devlogs/')}">${t(lang, 'back_devlogs')}</a>
        </div>
        <article class="bg-white shadow-sm p-3 p-md-4 rounded">${htmlBody}</article>
      </section>
    `;

    const page = renderLayout({
      lang,
      title: pageTitle,
      description,
      canonicalPath,
      ogImageUrl: siteConfig.ogImage,
      ogType: 'article',
      alternates: [],
      headerHtml,
      sidebarHtml,
      contentHtml,
      footerHtml,
    });

    await fs.writeFile(path.join(outDir, `${base}.html`), page, 'utf-8');

    items.push({
      href: `/devlogs/${base}.html`,
      title: `${base.replace(/^[0-9-]+/, '').trim() || summary || base}`,
      date: (date || '').split(' ')[0] || date || '',
      month: devLogMonthKey(fileName),
    });
  }

  const indexTitle = `${t(lang, 'devlogs_title')} | ${siteConfig.brand}`;
  const indexDescription =
    lang === 'en'
      ? 'Project dev logs and Q&A notes, organized by month.'
      : 'OnlineFreeTools.org 开发日志清单，按月汇总所有问答记录。';
  const indexCanonicalPath = '/devlogs/';

  const headerHtml = renderHeader({
    lang,
    brandHref: '/',
    navItems,
    showSidebarToggle: true,
    showSearch: false,
    showLangSwitcher: false,
  });

  const months = [...new Set(items.map((i) => i.month))].sort((a, b) => b.localeCompare(a));
  const listHtml = `
    <section>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1 class="h4 mb-1">${t(lang, 'devlogs_title')}</h1>
          <p class="text-muted mb-0">${t(lang, 'devlogs_subtitle')}</p>
        </div>
        <a class="btn btn-outline-secondary btn-sm" href="/">${t(lang, 'back_home')}</a>
      </div>
      ${months
        .map((month) => {
          const monthItems = items.filter((i) => i.month === month);
          const monthLabel =
            month === 'other'
              ? lang === 'en'
                ? 'Other'
                : '其他'
              : month;
          return `
      <div class="mb-4">
        <h2 class="h5 text-muted mb-2">${monthLabel}</h2>
        <ul class="list-group shadow-sm">
          ${monthItems
            .map(
              (i) => `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <a href="${i.href}" class="text-decoration-none">${i.title}</a>
            <span class="badge text-bg-secondary">${i.date}</span>
          </li>`
            )
            .join('')}
        </ul>
      </div>`;
        })
        .join('')}
    </section>
  `;

  const indexJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t(lang, 'devlogs_title'),
    url: `${siteConfig.baseUrl.replace(/\/$/, '')}${indexCanonicalPath}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t(lang, 'nav_home'),
          item: `${siteConfig.baseUrl.replace(/\/$/, '')}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t(lang, 'nav_devlogs'),
          item: `${siteConfig.baseUrl.replace(/\/$/, '')}${indexCanonicalPath}`,
        },
      ],
    },
  });

  const indexPage = renderLayout({
    lang,
    title: indexTitle,
    description: indexDescription,
    canonicalPath: indexCanonicalPath,
    ogImageUrl: siteConfig.ogImage,
    ogType: 'website',
    alternates: [],
    headJsonLd: indexJsonLd,
    headerHtml,
    sidebarHtml,
    contentHtml: listHtml,
    footerHtml,
  });

  await fs.writeFile(path.join(outDir, 'index.html'), indexPage, 'utf-8');
  return items;
};

/**
 * 构建各语言 About 静态页（Who / How / Why 信任信号）。
 * @param {string} lang
 */
export const buildAbout = async (lang) => {
  const outRoot = path.join(publicDir, '_pages', lang);
  await ensureDir(outRoot);

  const model = getAboutPageModel(lang);
  const langAlternates = Object.fromEntries(
    (siteConfig.enabledLangs || []).map((code) => [code, withExplicitLangPath(code, '/about')])
  );

  const headerHtml = renderHeader({
    lang,
    brandHref: withExplicitLangPath(lang, '/'),
    navItems: model.navItems,
    showSidebarToggle: true,
    showSearch: false,
    langAlternates,
  });

  const sidebarHtml = renderSidebar({
    title: model.sidebarTitle,
    items: model.sidebarItems,
    id: 'aboutNav',
  });

  const footerHtml = renderFooter({ lang });

  const html = renderLayout({
    lang,
    title: model.title,
    description: model.description,
    canonicalPath: model.canonicalPath,
    ogImageUrl: siteConfig.ogImage,
    ogType: 'website',
    alternates: (siteConfig.enabledLangs || []).map((code) => ({
      lang: code,
      href: toAbs(withLangPath(code, '/about')),
    })),
    headerHtml,
    sidebarHtml,
    contentHtml: model.contentHtml,
    footerHtml,
    headJsonLd: model.jsonLd,
  });

  await fs.writeFile(path.join(outRoot, 'about.html'), html, 'utf-8');
};

/**
 * 转义 XML 文本节点 / 属性值。
 * @param {string} s
 */
const escapeXml = (s) =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

/**
 * 生成一组 URL 的 xhtml hreflang 交替链接（含 x-default）。
 * @param {string} pathname 规范路径（无语言前缀的基础路径，如 /tools/bmi）
 * @param {string[]} langs
 */
const hreflangLinks = (pathname, langs) => {
  const links = langs.map((code) => {
    const href = toAbs(withLangPath(code, pathname));
    return `    <xhtml:link rel="alternate" hreflang="${escapeXml(code)}" href="${escapeXml(href)}" />`;
  });
  const xDefault = toAbs(withLangPath(siteConfig.defaultLang, pathname));
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />`
  );
  return links.join('\n');
};

/**
 * 构建完整 sitemap：各语言首页、About、全部工具（不含 devlogs 内部日志页）。
 */
export const buildSitemap = async () => {
  const langs = siteConfig.enabledLangs || [siteConfig.defaultLang];
  const urls = [];

  const pushLocalized = (pathname, priority = '0.8') => {
    for (const lang of langs) {
      const loc = toAbs(withLangPath(lang, pathname));
      urls.push(`  <url>
    <loc>${escapeXml(loc)}</loc>
    <priority>${priority}</priority>
${hreflangLinks(pathname, langs)}
  </url>`);
    }
  };

  pushLocalized('/', '1.0');
  pushLocalized('/about', '0.7');

  for (const tool of TOOL_CATALOG) {
    pushLocalized(tool.path, '0.9');
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

  await fs.writeFile(path.join(publicDir, 'sitemap.xml'), xml, 'utf-8');
  console.log(`Wrote sitemap with ${urls.length} URLs`);
};

const main = async () => {
  const langs = siteConfig.enabledLangs || [siteConfig.defaultLang];
  for (const lang of langs) {
    // Ensure any stale static tool pages are removed before building
    await removeStaticToolsDir(lang);
    await buildHome(lang);
    await buildAbout(lang);
  }
  await buildDevLogs();
  await buildSitemap();
  console.log(`Built site for langs: ${langs.join(', ')}`);
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
    console.error(err);
    process.exit(1);
  });
}
