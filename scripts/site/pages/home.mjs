/**
 * 首页模型：导航、侧栏分类与内容。
 */
import { t } from '../i18n.mjs';
import { withExplicitLangPath, withLangPath } from '../config.mjs';
import { renderHomeContent } from '../components.mjs';
import { buildHomeNavItems } from '../nav.mjs';
import { TOOL_CATEGORY_ORDER, getCategoryAnchor, getCategoryHomeLabelKey } from '../categories.mjs';

/**
 * 生成指定语言的首页模型。
 * @param {string} lang
 */
export const getHomePageModel = (lang) => {
  const navItems = buildHomeNavItems(lang, withExplicitLangPath(lang, '/about'));

  const sidebarTitle = t(lang, 'sidebar_categories');
  const sidebarItems = TOOL_CATEGORY_ORDER.map((category) => ({
    href: `#${getCategoryAnchor(category)}`,
    label: t(lang, getCategoryHomeLabelKey(category)),
  }));

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
