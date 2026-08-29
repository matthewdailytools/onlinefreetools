/**
 * 静态站点顶栏导航项。
 * - 首页：各主题下拉（多行）+ 主题/场景/类型 + 开发日志（保持原样）
 * - 工具页：首页 + 「工具」巨型菜单（悬停按主题展开）+ 主题/类型 + 开发日志
 */
import { t } from './i18n.mjs';
import { withLangPath } from './config.mjs';
import { getToolsByPrimaryTopic } from './tool-catalog.mjs';
import { TOOL_TOPIC_ORDER, TOPIC_I18N_KEYS, TOPICS_HUB_PATH } from './topics.mjs';

/**
 * 各主题顶栏下拉（首页用：标签 = 主题短名，子项 = 查看全部 + primary 工具）。
 * @param {string} lang
 */
export const buildTopicNavDropdowns = (lang) =>
  TOOL_TOPIC_ORDER.map((topic) => {
    const meta = TOPIC_I18N_KEYS[topic];
    const hubHref = withLangPath(lang, `${TOPICS_HUB_PATH}/${topic}`);
    const tools = getToolsByPrimaryTopic(topic);
    return {
      type: 'dropdown',
      label: t(lang, meta.labelKey),
      items: [
        {
          href: hubHref,
          label: t(lang, 'topics_view_all'),
          openInNewTab: false,
        },
        ...tools.map((tool) => ({
          href: withLangPath(lang, tool.path),
          label: t(lang, tool.homeTitleKey),
          openInNewTab: true,
        })),
      ],
    };
  });

/**
 * 构建「工具」巨型菜单（仅工具 slug 页）：按主题分列。
 * @param {string} lang
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
        label: t(lang, tool.homeTitleKey),
        openInNewTab: true,
      })),
    };
  }),
});

/**
 * 首页 taxonomy：主题 + 应用场景 + 工具类型。
 * @param {string} lang
 */
export const buildHomeTaxonomyNavLinks = (lang) => [
  { href: withLangPath(lang, TOPICS_HUB_PATH), label: t(lang, 'nav_topics') },
  { href: withLangPath(lang, '/where-to-use-tools'), label: t(lang, 'nav_use_cases') },
  { href: withLangPath(lang, '/tool-type'), label: t(lang, 'nav_tool_type') },
];

/**
 * 工具页 taxonomy：主题 + 工具类型（不含应用场景）。
 * @param {string} lang
 */
export const buildTaxonomyNavLinks = (lang) => [
  { href: withLangPath(lang, TOPICS_HUB_PATH), label: t(lang, 'nav_topics') },
  { href: withLangPath(lang, '/tool-type'), label: t(lang, 'nav_tool_type') },
];

/**
 * 开发日志顶栏入口（全局 `/devlogs/`，无语言前缀）。
 * @param {string} lang
 */
export const buildDevlogsNavLink = (lang) => ({
  href: '/devlogs/',
  label: t(lang, 'nav_devlogs'),
});

/**
 * 工具页顶栏：首页 + 工具巨型菜单 + 主题/类型 + 开发日志。
 * @param {string} lang
 */
export const buildToolPageNavItems = (lang) => [
  { href: withLangPath(lang, '/'), label: t(lang, 'nav_home') },
  buildToolsMegaNavItem(lang),
  ...buildTaxonomyNavLinks(lang),
  buildDevlogsNavLink(lang),
];

/**
 * 首页顶栏（保持原多主题下拉，不改为巨型「工具」菜单）。
 * @param {string} lang
 */
export const buildHomeNavItems = (lang) => [
  ...buildTopicNavDropdowns(lang),
  ...buildHomeTaxonomyNavLinks(lang),
  buildDevlogsNavLink(lang),
];
