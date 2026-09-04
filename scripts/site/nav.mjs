/**
 * 静态站点顶栏导航项。
 * 首页与工具页共用同一套：首页 + 「工具」巨型菜单 + 主题/类型 + 开发日志。
 */
import { t } from './i18n.mjs';
import { withLangPath } from './config.mjs';
import { getToolsByPrimaryTopic } from './tool-catalog.mjs';
import { TOOL_TOPIC_ORDER, TOPIC_I18N_KEYS, TOPICS_HUB_PATH } from './topics.mjs';

/**
 * 构建「工具」巨型菜单：按主题分列，首页与工具页共用。
 * @param {string} lang 当前语言
 */
export const buildToolsMegaNavItem = (lang) => ({
  type: 'mega',
  label: t(lang, 'nav_tools'),
  href: withLangPath(lang, TOPICS_HUB_PATH),
  columns: TOOL_TOPIC_ORDER.map((topic) => {
    const meta = TOPIC_I18N_KEYS[topic];
    const tools = getToolsByPrimaryTopic(topic);
    return {
      id: topic,
      heading: {
        href: withLangPath(lang, `${TOPICS_HUB_PATH}/${topic}`),
        label: t(lang, meta.labelKey),
      },
      items: tools.map((tool) => ({
        href: withLangPath(lang, tool.path),
        label: t(lang, tool.i18nKey),
        openInNewTab: true,
      })),
    };
  }),
});

/**
 * 首页 taxonomy：主题 + 应用场景 + 工具类型。
 * @param {string} lang 当前语言
 */
export const buildHomeTaxonomyNavLinks = (lang) => [
  { href: withLangPath(lang, TOPICS_HUB_PATH), label: t(lang, 'nav_topics') },
  { href: withLangPath(lang, '/where-to-use-tools'), label: t(lang, 'nav_use_cases') },
  { href: withLangPath(lang, '/tool-type'), label: t(lang, 'nav_tool_type') },
];

/**
 * 工具页 taxonomy：主题 + 工具类型（不含应用场景）。
 * @param {string} lang 当前语言
 */
export const buildTaxonomyNavLinks = (lang) => [
  { href: withLangPath(lang, TOPICS_HUB_PATH), label: t(lang, 'nav_topics') },
  { href: withLangPath(lang, '/tool-type'), label: t(lang, 'nav_tool_type') },
];

/**
 * 开发日志顶栏入口（全局 `/devlogs/`，无语言前缀）。
 * @param {string} lang 当前语言
 */
export const buildDevlogsNavLink = (lang) => ({
  href: '/devlogs/',
  label: t(lang, 'nav_devlogs'),
});

/**
 * 工具页顶栏：首页 + 工具巨型菜单 + 主题/类型 + 开发日志。
 * @param {string} lang 当前语言
 */
export const buildToolPageNavItems = (lang) => [
  { href: withLangPath(lang, '/'), label: t(lang, 'nav_home') },
  buildToolsMegaNavItem(lang),
  ...buildTaxonomyNavLinks(lang),
  buildDevlogsNavLink(lang),
];

/**
 * 首页顶栏：与工具页完全同一套菜单（Home → Tools mega → topics / tool-type → Dev Logs）。
 * @param {string} lang 当前语言
 */
export const buildHomeNavItems = (lang) => buildToolPageNavItems(lang);
