/**
 * 静态站点顶栏导航项（首页等）：分类名 + 工具链接下拉。
 */
import { t } from './i18n.mjs';
import { withLangPath } from './config.mjs';
import { getToolsByCategory } from './tool-catalog.mjs';
import { TOOL_CATEGORY_ORDER, getCategoryHomeLabelKey } from './categories.mjs';

/**
 * 各分类顶栏下拉（标签 = 分类名，子项 = 工具名 + 链接）。
 * 内容链用 withLangPath（默认语无 /en），与 sitemap/canonical 一致。
 * @param {string} lang
 */
export const buildCategoryNavDropdowns = (lang) =>
  TOOL_CATEGORY_ORDER.map((category) => ({
    type: 'dropdown',
    label: t(lang, getCategoryHomeLabelKey(category)),
    items: getToolsByCategory(category).map((tool) => ({
      href: withLangPath(lang, tool.path),
      label: t(lang, tool.homeTitleKey),
      /** 工具页在新标签打开，保留当前首页/工具页上下文 */
      openInNewTab: true,
    })),
  }));

/**
 * 应用场景 / 工具类型 hub 入口（不替换原分类下拉；不直链工具；置于导航末尾）。
 * @param {string} lang
 */
export const buildTaxonomyNavLinks = (lang) => [
  { href: withLangPath(lang, '/where-to-use-tools'), label: t(lang, 'nav_use_cases') },
  { href: withLangPath(lang, '/tool-type'), label: t(lang, 'nav_tool_type') },
];

/**
 * 工具页 / 信息页顶栏：首页 + 各分类工具下拉 + 场景/类型（关于、开发日志在页脚）。
 * @param {string} lang
 */
export const buildToolPageNavItems = (lang) => [
  { href: withLangPath(lang, '/'), label: t(lang, 'nav_home') },
  ...buildCategoryNavDropdowns(lang),
  ...buildTaxonomyNavLinks(lang),
];

/**
 * 首页顶栏：各分类工具下拉 + 场景/类型入口（无「推荐」锚点项）。
 * @param {string} lang
 */
export const buildHomeNavItems = (lang) => [
  ...buildCategoryNavDropdowns(lang),
  ...buildTaxonomyNavLinks(lang),
];
