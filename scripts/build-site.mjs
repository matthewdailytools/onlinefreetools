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
import { getPrivacyPageModel } from './site/pages/privacy.mjs';
import { getTermsPageModel } from './site/pages/terms.mjs';
import { getContactPageModel } from './site/pages/contact.mjs';
import { getTaxonomyHubPageModel, getTaxonomyLeafPageModel } from './site/pages/taxonomy.mjs';
import { buildToolPageNavItems } from './site/nav.mjs';
import { TOOL_CATALOG } from './site/tool-catalog.mjs';
import { markToolSlugsGenerated, resolveTargetToolSlugs, wantsChangedTools } from './lib/changed-tools.mjs';
import {
  TOOL_SCENARIO_ORDER,
  TOOL_SUBJECT_ORDER,
  SCENARIO_HUB_PATH,
  SUBJECT_HUB_PATH,
} from './site/taxonomy.mjs';
import { buildFullSitemap } from './site/sitemap.mjs';
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

/** 构建前复制同域 chrome / 图片工具 vendor（避免外网 CDN 阻塞首屏）。 */
try {
  await import('./copy-site-chrome-vendor.mjs');
} catch (err) {
  console.warn('[build-site] copy-site-chrome-vendor skipped:', err?.message || err);
}
try {
  await import('./copy-image-optimizer-vendor.mjs');
} catch (err) {
  console.warn('[build-site] copy-image-optimizer-vendor skipped:', err?.message || err);
}

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

/**
 * 构建各语言首页 HTML（**每种启用语言都进 Static Assets**）。
 * - **Assets（常规 URL）**：
 *   - 默认语：`public/index.html`（`/`）+ `public/{defaultLang}/index.html`（如 `/en/`）
 *   - 其它语：`public/{lang}/index.html`（如 `/zh/`、`/ja/`）
 * - **R2 备份**：仍写 `public/_pages/{lang}/index.html`（gzip/upload 兜底）
 * Worker：`serveHomeHtml` 对所有语言先读 Assets，miss 再读 R2。
 * @param {string} lang 语言码
 */
export const buildHome = async (lang) => {
  const pagesOutRoot = path.join(publicDir, '_pages', lang);
  await ensureDir(pagesOutRoot);

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
    /** 侧栏锚点跳转时展开对应 <details> 分类 */
    extraBodyHtml: `<script>
(function(){
  function openCat(id){
    if(!id) return;
    var el=document.getElementById(id);
    if(el && el.tagName==='DETAILS') el.open=true;
  }
  function fromHash(){ openCat((location.hash||'').replace(/^#/,'')); }
  fromHash();
  window.addEventListener('hashchange', fromHash);
  document.querySelectorAll('#categoryList a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(){ openCat((a.getAttribute('href')||'').slice(1)); });
  });
})();
</script>`,
  });

  // R2 / gzip 管道仍用 _pages
  await fs.writeFile(path.join(pagesOutRoot, 'index.html'), html, 'utf-8');

  // Assets：常规公开路径（/ 与 /{lang}/）
  const assetRoot = langOutRoot(lang);
  await ensureDir(assetRoot);
  await fs.writeFile(path.join(assetRoot, 'index.html'), html, 'utf-8');

  // 默认语额外写 /{defaultLang}/index.html，供语言切换器显式前缀（如 /en/）
  if (lang === siteConfig.defaultLang) {
    const explicitRoot = path.join(publicDir, lang);
    await ensureDir(explicitRoot);
    await fs.writeFile(path.join(explicitRoot, 'index.html'), html, 'utf-8');
  }
};

const removeStaticToolsDir = async (lang) => {
  // 历史：曾删除静态 tools 目录改走 Worker SSR。
  // 现架构：工具页预渲染进 `_pages/{lang}/tools/`，此函数保留为空操作以免外部引用报错。
  void lang;
};

/**
 * 从 dev-logs/*.md 生成 public/devlogs/ 索引与各篇 HTML。
 * 开发日志不参与 sitemap，且 head 含 robots noindex（与 robots.txt Disallow 双保险）。
 */
export const buildDevLogs = async () => {
  const lang = siteConfig.defaultLang;
  const outDir = path.join(publicDir, 'devlogs');
  await ensureDir(outDir);

  const fileEntries = await collectDevLogMarkdownFiles(devLogsDir);
  fileEntries.sort((a, b) => b.fileName.localeCompare(a.fileName));

  const headerNavItems = buildToolPageNavItems(lang);
  const sidebarItems = [{ href: '/', label: t(lang, 'nav_home') }];
  const sidebarHtml = renderSidebar({
    title: lang === 'en' ? 'Navigation' : '导航',
    items: sidebarItems,
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
      navItems: headerNavItems,
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
      robotsNoindex: true,
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
    navItems: headerNavItems,
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
    robotsNoindex: true,
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
 * 构建各语言静态信息页（About / Privacy / Terms / Contact）。
 * @param {string} lang 语言代码
 * @param {object} opts
 * @param {() => object} opts.getModel 返回与 About 同形的页面模型
 * @param {string} opts.path 规范路径，如 `/privacy`
 * @param {string} opts.outFile 输出文件名，如 `privacy.html`
 * @param {string} [opts.sidebarId] 侧栏 id（模型未带时回退）
 */
export const buildInfoPage = async (lang, { getModel, path: pagePath, outFile, sidebarId }) => {
  const outRoot = path.join(publicDir, '_pages', lang);
  await ensureDir(outRoot);

  const model = getModel(lang);
  const langAlternates = Object.fromEntries(
    (siteConfig.enabledLangs || []).map((code) => [code, withExplicitLangPath(code, pagePath)])
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
    id: model.sidebarId || sidebarId || 'infoNav',
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
      href: toAbs(withLangPath(code, pagePath)),
    })),
    headerHtml,
    sidebarHtml,
    contentHtml: model.contentHtml,
    footerHtml,
    headJsonLd: model.jsonLd,
    /** 与首页一致使用 --page-pad-x，勿套用首页的 content padding:0 */
    bodyClass: 'is-info-page',
  });

  await fs.writeFile(path.join(outRoot, outFile), html, 'utf-8');
};

/**
 * 构建各语言 About 静态页（Who / How / Why 信任信号）。
 * @param {string} lang
 */
export const buildAbout = async (lang) =>
  buildInfoPage(lang, {
    getModel: getAboutPageModel,
    path: '/about',
    outFile: 'about.html',
    sidebarId: 'aboutNav',
  });

/**
 * 构建 Privacy Policy 静态页。
 * @param {string} lang
 */
export const buildPrivacy = async (lang) =>
  buildInfoPage(lang, {
    getModel: getPrivacyPageModel,
    path: '/privacy',
    outFile: 'privacy.html',
    sidebarId: 'privacyNav',
  });

/**
 * 构建 Terms of Use 静态页。
 * @param {string} lang
 */
export const buildTerms = async (lang) =>
  buildInfoPage(lang, {
    getModel: getTermsPageModel,
    path: '/terms',
    outFile: 'terms.html',
    sidebarId: 'termsNav',
  });

/**
 * 构建 Contact 静态页。
 * @param {string} lang
 */
export const buildContact = async (lang) =>
  buildInfoPage(lang, {
    getModel: getContactPageModel,
    path: '/contact',
    outFile: 'contact.html',
    sidebarId: 'contactNav',
  });

/**
 * 将 taxonomy 页模型写入 `_pages/{lang}/...`（hub 用 index.html，leaf 用 {id}.html）。
 * @param {string} lang
 * @param {object} model
 * @param {string} outRelPath 相对 `_pages/{lang}/` 的输出路径
 */
const writeTaxonomyPage = async (lang, model, outRelPath) => {
  const outRoot = path.join(publicDir, '_pages', lang);
  const outFile = path.join(outRoot, outRelPath);
  await ensureDir(path.dirname(outFile));

  const pagePath = model.pagePath;
  const langAlternates = Object.fromEntries(
    (siteConfig.enabledLangs || []).map((code) => [code, withExplicitLangPath(code, pagePath)])
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
    id: model.sidebarId || 'taxonomyNav',
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
      href: toAbs(withLangPath(code, pagePath)),
    })),
    headerHtml,
    sidebarHtml,
    contentHtml: model.contentHtml,
    footerHtml,
    headJsonLd: model.jsonLd,
    bodyClass: model.bodyClass || 'is-home-page',
    sidebarAutoCloseSelector: `#${model.sidebarId || 'taxonomyNav'} a`,
  });

  await fs.writeFile(outFile, html, 'utf-8');
};

/**
 * 构建应用场景 / 操作对象 hub + leaf 静态页。
 * @param {string} lang
 */
export const buildTaxonomyPages = async (lang) => {
  const outRoot = path.join(publicDir, '_pages', lang);
  // 清理旧路径目录，避免残留 /use-cases|/subjects 静态页
  await fs.rm(path.join(outRoot, 'use-cases'), { recursive: true, force: true });
  await fs.rm(path.join(outRoot, 'subjects'), { recursive: true, force: true });

  const scenarioDir = SCENARIO_HUB_PATH.replace(/^\//, '');
  const subjectDir = SUBJECT_HUB_PATH.replace(/^\//, '');

  await writeTaxonomyPage(
    lang,
    getTaxonomyHubPageModel(lang, 'scenario'),
    path.join(scenarioDir, 'index.html')
  );
  for (const id of TOOL_SCENARIO_ORDER) {
    await writeTaxonomyPage(
      lang,
      getTaxonomyLeafPageModel(lang, 'scenario', id),
      path.join(scenarioDir, `${id}.html`)
    );
  }

  await writeTaxonomyPage(
    lang,
    getTaxonomyHubPageModel(lang, 'subject'),
    path.join(subjectDir, 'index.html')
  );
  for (const id of TOOL_SUBJECT_ORDER) {
    await writeTaxonomyPage(
      lang,
      getTaxonomyLeafPageModel(lang, 'subject', id),
      path.join(subjectDir, `${id}.html`)
    );
  }
};

/**
 * 构建完整 sitemap（委托 scripts/site/sitemap.mjs；不含 devlogs）。
 * @returns {Promise<void>}
 */
export const buildSitemap = async () => {
  const result = await buildFullSitemap();
  console.log(
    `Wrote sitemap with ${result.urlCount} URLs → ${result.outFile} (lastmod reused:${result.lastmodStats.reusedCount} changed:${result.lastmodStats.changedCount} new:${result.lastmodStats.newCount})`
  );
};

/**
 * 校验每个启用语言的首页已落在 Assets 常规路径（缺一则 build 失败）。
 * @param {string[]} langs 启用语言列表
 */
const assertLangHomeAssets = async (langs) => {
  const missing = [];
  const defaultLang = siteConfig.defaultLang;
  const required = [`${path.relative(root, path.join(publicDir, 'index.html'))} (default /)`];
  if (!(await fs.stat(path.join(publicDir, 'index.html')).catch(() => null))) {
    missing.push('public/index.html');
  }
  for (const lang of langs) {
    const rel = path.join('public', lang, 'index.html');
    required.push(`${rel} (/${lang}/)`);
    if (!(await fs.stat(path.join(publicDir, lang, 'index.html')).catch(() => null))) {
      missing.push(rel);
    }
  }
  if (missing.length) {
    throw new Error(`[build-site] missing lang home Assets:\n- ${missing.join('\n- ')}`);
  }
  console.log(`[build-site] lang home Assets OK (${langs.length} langs + /): default=${defaultLang}`);
  for (const line of required) console.log(`  - ${line}`);
};

const main = async () => {
  const langs = siteConfig.enabledLangs || [siteConfig.defaultLang];
  const argv = process.argv.slice(2);
  const forceFullTools = argv.includes('--full') || argv.includes('--all');
  const targets = forceFullTools
    ? { slugs: [], source: 'all', changedPaths: [] }
    : resolveTargetToolSlugs(argv, { requireTargets: false });
  const requestedIncrementalTools = !forceFullTools && (wantsChangedTools(argv) || targets.slugs.length > 0);
  if (targets.slugs.length > 0) {
    console.log(`[build-site] incremental tool pages: mode=${targets.source} slugs=${targets.slugs.join(',')}`);
  } else if (requestedIncrementalTools) {
    console.log('[build-site] incremental tool pages: no updated tool slugs detected');
  }
  for (const lang of langs) {
    await buildHome(lang);
    await buildAbout(lang);
    await buildPrivacy(lang);
    await buildTerms(lang);
    await buildContact(lang);
    await buildTaxonomyPages(lang);
  }
  await assertLangHomeAssets(langs);
  await buildDevLogs();
  await buildSitemap();

  // 工具页预渲染 → public/_pages/{lang}/tools/{slug}.html（Worker 不再 SSR）
  const { spawnSync } = await import('node:child_process');
  const findMissingToolGzipBaseline = async (limit = 20) => {
    const missing = [];
    for (const lang of langs) {
      for (const tool of TOOL_CATALOG) {
        const gz = path.join(publicDir, '_pages', lang, 'tools', `${tool.slug}.html.gz`);
        if (!(await fs.stat(gz).catch(() => null))) {
          missing.push(path.relative(root, gz));
          if (missing.length >= limit) return missing;
        }
      }
    }
    return missing;
  };

  const missingBeforePrerender = requestedIncrementalTools
    ? await findMissingToolGzipBaseline(5)
    : [];
  const fallbackFullTools = requestedIncrementalTools && missingBeforePrerender.length > 0;
  if (fallbackFullTools) {
    console.warn(
      `[build-site] incremental baseline missing; falling back to full tool prerender. Missing sample:\n- ${missingBeforePrerender.join(
        '\n- '
      )}`
    );
  }

  const shouldPrerenderTools = forceFullTools || fallbackFullTools || targets.slugs.length > 0 || !requestedIncrementalTools;
  const prerenderArgs = [path.join(root, 'scripts', 'prerender-tool-pages.mjs')];
  if (targets.slugs.length > 0 && !fallbackFullTools) prerenderArgs.push(`--slug=${targets.slugs.join(',')}`);
  if (shouldPrerenderTools) {
    console.log(
      `[build-site] prerender tool pages ${
        targets.slugs.length > 0 && !fallbackFullTools ? '(incremental)' : '(all)'
      } ...`
    );
    const prerender = spawnSync(process.execPath, prerenderArgs, {
      cwd: root,
      stdio: 'inherit',
      env: process.env,
    });
    if (prerender.status !== 0) {
      throw new Error('prerender-tool-pages failed');
    }
  } else {
    console.log('[build-site] prerender tool pages skipped (no updated tool slugs)');
  }

  console.log('[build-site] gzip _pages HTML ...');
  const gzip = spawnSync(process.execPath, [path.join(root, 'scripts', 'gzip-pages.mjs')], {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
  });
  if (gzip.status !== 0) {
    throw new Error('gzip-pages failed');
  }

  if (requestedIncrementalTools) {
    const missing = await findMissingToolGzipBaseline(20);
    if (missing.length) {
      throw new Error(
        `[build-site] incremental build requires an existing full public/_pages baseline. Missing:\n- ${missing.join(
          '\n- '
        )}\nRun npm run build:site:full once, then retry the incremental command.`
      );
    }
    console.log(`[build-site] incremental _pages baseline OK (${TOOL_CATALOG.length} tools x ${langs.length} langs)`);
  }

  const generatedToolSlugs =
    shouldPrerenderTools && (forceFullTools || fallbackFullTools || !requestedIncrementalTools)
      ? TOOL_CATALOG.map((tool) => tool.slug)
      : shouldPrerenderTools
        ? targets.slugs
        : [];
  if (generatedToolSlugs.length) {
    markToolSlugsGenerated(generatedToolSlugs);
    console.log(`[build-site] wrote tool generation state slugs=${generatedToolSlugs.length}`);
  }

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
