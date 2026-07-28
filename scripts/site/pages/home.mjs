/**
 * 首页模型：导航、侧栏分类与内容。
 */
import { t } from '../i18n.mjs';
import { withExplicitLangPath, withLangPath } from '../config.mjs';
import { renderHomeContent } from '../components.mjs';

/**
 * 生成指定语言的首页模型。
 * @param {string} lang
 */
export const getHomePageModel = (lang) => {
  const navItems = [
    { href: '#featured', label: t(lang, 'nav_featured') },
    { href: '#all-tools', label: t(lang, 'nav_all_tools') },
    { href: withExplicitLangPath(lang, '/about'), label: t(lang, 'nav_about') },
    { href: '/devlogs/', label: t(lang, 'nav_devlogs') },
  ];

  const sidebarTitle = t(lang, 'sidebar_categories');
  const sidebarItems = [
    { href: '#cat-calculator', label: t(lang, 'home_cat_calculator') },
    { href: '#cat-dev', label: t(lang, 'home_cat_dev') },
  ];

  const title = t(lang, 'home_title');
  const description = t(lang, 'home_description');

  const contentHtml = renderHomeContent({ lang });

  return {
    title,
    description,
    canonicalPath: withLangPath(lang, '/'),
    navItems,
    sidebarTitle,
    sidebarItems,
    contentHtml,
  };
};
