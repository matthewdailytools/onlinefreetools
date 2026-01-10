import { t } from '../i18n.mjs';
import { withLangPath } from '../config.mjs';
import { renderHomeContent } from '../components.mjs';

export const getHomePageModel = (lang) => {
  const navItems = [
    { href: '#featured', label: t(lang, 'nav_featured') },
    { href: '#all-tools', label: t(lang, 'nav_all_tools') },
    { href: withLangPath(lang, '/devlogs/'), label: t(lang, 'nav_devlogs') },
  ];

  const sidebarTitle = t(lang, 'sidebar_categories');
  const sidebarItems = [
    { href: '#cat-text', label: t(lang, 'home_cat_text') },
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
