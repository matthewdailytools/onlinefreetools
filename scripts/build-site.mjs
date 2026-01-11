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
    brandHref: withLangPath(lang, '/'),
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
    sidebarAutoCloseSelector: '#categoryList a',
  });

  await fs.writeFile(path.join(outRoot, 'index.html'), html, 'utf-8');
};

export const buildDevLogs = async () => {
  const lang = siteConfig.defaultLang;
  const outDir = path.join(publicDir, 'devlogs');
  await ensureDir(outDir);

  const files = (await fs.readdir(devLogsDir)).filter((f) => f.endsWith('.md'));
  files.sort((a, b) => b.localeCompare(a));

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
  for (const file of files) {
    const md = await fs.readFile(path.join(devLogsDir, file), 'utf-8');
    const { date, summary } = parseMeta(md);
    const htmlBody = marked.parse(md);
    const base = file.replace(/\.md$/, '');

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
    });
  }

  const indexTitle = `${t(lang, 'devlogs_title')} | ${siteConfig.brand}`;
  const indexDescription =
    lang === 'en'
      ? 'Project dev logs and Q&A notes, organized by date.'
      : 'Online Free Tools 开发日志清单，按日期汇总所有问答记录。';
  const indexCanonicalPath = '/devlogs/';

  const headerHtml = renderHeader({
    lang,
    brandHref: '/',
    navItems,
    showSidebarToggle: true,
    showSearch: false,
    showLangSwitcher: false,
  });

  const listHtml = `
    <section>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1 class="h4 mb-1">${t(lang, 'devlogs_title')}</h1>
          <p class="text-muted mb-0">${t(lang, 'devlogs_subtitle')}</p>
        </div>
        <a class="btn btn-outline-secondary btn-sm" href="/">${t(lang, 'back_home')}</a>
      </div>
      <ul class="list-group shadow-sm">
        ${items
          .map(
            (i) => `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <a href="${i.href}" class="text-decoration-none">${i.title}</a>
            <span class="badge text-bg-secondary">${i.date}</span>
          </li>`
          )
          .join('')}
      </ul>
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
};

const main = async () => {
  const langs = siteConfig.enabledLangs || [siteConfig.defaultLang];
  for (const lang of langs) {
    await buildHome(lang);
  }
  await buildDevLogs();
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
