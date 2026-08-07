/**
 * 静态站点顶栏导航项（首页等）：分类名 + 工具链接下拉。
 */
import { t } from './i18n.mjs';
import { withExplicitLangPath } from './config.mjs';
import { getToolsByCategory } from './tool-catalog.mjs';
import { TOOL_CATEGORY_ORDER, getCategoryHomeLabelKey } from './categories.mjs';

/**
 * 各分类顶栏下拉（标签 = 分类名，子项 = 工具名 + 链接）。
 * @param {string} lang
 */
export const buildCategoryNavDropdowns = (lang) =>
  TOOL_CATEGORY_ORDER.map((category) => ({
    type: 'dropdown',
    label: t(lang, getCategoryHomeLabelKey(category)),
    items: getToolsByCategory(category).map((tool) => ({
      href: withExplicitLangPath(lang, tool.path),
      label: t(lang, tool.homeTitleKey),
    })),
  }));

/**
 * 首页顶栏：推荐、各分类工具下拉、全部工具、关于、开发日志。
 * @param {string} lang
 * @param {string} aboutHref
 */
export const buildHomeNavItems = (lang, aboutHref) => [
  { href: '#featured', label: t(lang, 'nav_featured') },
  ...buildCategoryNavDropdowns(lang),
  { href: '#all-tools', label: t(lang, 'nav_all_tools') },
  { href: aboutHref, label: t(lang, 'nav_about') },
  { href: '/devlogs/', label: t(lang, 'nav_devlogs') },
];
