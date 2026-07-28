/**
 * About 页模型：站点 Who / How / Why 与免责声明。
 */
import { t } from '../i18n.mjs';
import { siteConfig, withExplicitLangPath, withLangPath, absoluteUrl } from '../config.mjs';

/**
 * 生成指定语言的 About 页渲染模型。
 * @param {string} lang
 */
export const getAboutPageModel = (lang) => {
  const navItems = [
    { href: withExplicitLangPath(lang, '/'), label: t(lang, 'nav_home') },
    { href: withExplicitLangPath(lang, '/about'), label: t(lang, 'nav_about') },
    { href: '/devlogs/', label: t(lang, 'nav_devlogs') },
  ];

  const sidebarTitle = t(lang, 'nav_about');
  const sidebarItems = [
    { href: '#who', label: t(lang, 'about_who_title') },
    { href: '#how', label: t(lang, 'about_how_title') },
    { href: '#why', label: t(lang, 'about_why_title') },
    { href: '#disclaimer', label: t(lang, 'about_disclaimer_title') },
  ];

  const title = `${t(lang, 'about_title')} | ${siteConfig.brand}`;
  const description = t(lang, 'about_description');
  const canonicalPath = withLangPath(lang, '/about');

  const contentHtml = `
    <article class="mb-4">
      <h1 class="h3 mb-3">${t(lang, 'about_title')}</h1>
      <p class="lead text-muted">${t(lang, 'about_intro')}</p>

      <section id="who" class="mb-4">
        <h2 class="h5">${t(lang, 'about_who_title')}</h2>
        <p>${t(lang, 'about_who_body')}</p>
      </section>

      <section id="how" class="mb-4">
        <h2 class="h5">${t(lang, 'about_how_title')}</h2>
        <p>${t(lang, 'about_how_body')}</p>
      </section>

      <section id="why" class="mb-4">
        <h2 class="h5">${t(lang, 'about_why_title')}</h2>
        <p>${t(lang, 'about_why_body')}</p>
      </section>

      <section id="disclaimer" class="mb-4">
        <h2 class="h5">${t(lang, 'about_disclaimer_title')}</h2>
        <p>${t(lang, 'about_disclaimer_body')}</p>
      </section>
    </article>
  `;

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t(lang, 'about_title'),
    description,
    url: absoluteUrl(canonicalPath),
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.brand,
      url: siteConfig.baseUrl,
    },
  });

  return {
    title,
    description,
    canonicalPath,
    navItems,
    sidebarTitle,
    sidebarItems,
    contentHtml,
    jsonLd,
  };
};
