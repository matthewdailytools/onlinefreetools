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
      /** 工具页在新标签打开，保留当前首页/工具页上下文 */
      openInNewTab: true,
    })),
  }));

/**
 * 工具页 / 信息页顶栏：首页 + 各分类工具下拉（关于、开发日志在页脚）。
 * @param {string} lang
 */
export const buildToolPageNavItems = (lang) => [
  { href: withExplicitLangPath(lang, '/'), label: t(lang, 'nav_home') },
  ...buildCategoryNavDropdowns(lang),
];

/**
 * 首页顶栏：各分类工具下拉（无「推荐」锚点项）。
 * @param {string} lang
 */
export const buildHomeNavItems = (lang) => [...buildCategoryNavDropdowns(lang)];
