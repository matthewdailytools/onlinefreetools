/**
 * 静态站点顶栏导航项（首页等）：主题名 + 工具链接下拉（多行换行）。
 */
import { t } from './i18n.mjs';
import { withLangPath } from './config.mjs';
import { getToolsByPrimaryTopic } from './tool-catalog.mjs';
import { TOOL_TOPIC_ORDER, TOPIC_I18N_KEYS, TOPICS_HUB_PATH } from './topics.mjs';

/**
 * 各主题顶栏下拉（标签 = 主题短名，子项 = 查看全部 + primary 工具）。
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
          /** 工具页在新标签打开，保留当前首页/工具页上下文 */
          openInNewTab: true,
        })),
      ],
    };
  });

/**
 * 应用场景 / 工具类型 / 主题 hub 入口（置于主题下拉之后）。
 * @param {string} lang
 */
export const buildTaxonomyNavLinks = (lang) => [
  { href: withLangPath(lang, TOPICS_HUB_PATH), label: t(lang, 'nav_topics') },
  { href: withLangPath(lang, '/where-to-use-tools'), label: t(lang, 'nav_use_cases') },
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
 * 工具页 / 信息页顶栏：首页 + 各主题工具下拉 + 场景/类型 + 开发日志。
 * @param {string} lang
 */
export const buildToolPageNavItems = (lang) => [
  { href: withLangPath(lang, '/'), label: t(lang, 'nav_home') },
  ...buildTopicNavDropdowns(lang),
  ...buildTaxonomyNavLinks(lang),
  buildDevlogsNavLink(lang),
];

/**
 * 首页顶栏：各主题工具下拉 + 场景/类型 + 开发日志。
 * @param {string} lang
 */
export const buildHomeNavItems = (lang) => [
  ...buildTopicNavDropdowns(lang),
  ...buildTaxonomyNavLinks(lang),
  buildDevlogsNavLink(lang),
];
