/**
 * 主题 hub / leaf 页模型（/topics、/topics/{id}）。
 */
import { t } from '../i18n.mjs';
import { siteConfig, withLangPath, absoluteUrl } from '../config.mjs';
import {
  TOOL_TOPIC_ORDER,
  TOPIC_I18N_KEYS,
  TOPICS_HUB_PATH,
  isToolTopic,
} from '../topics.mjs';
import { buildToolPageNavItems } from '../nav.mjs';
import {
  renderTopicsHubContent,
  renderTopicsLeafContent,
} from '../components/content-topics.mjs';
import { getToolsByTopicMembership } from '../tool-catalog.mjs';

/**
 * 主题总览 hub 页模型。
 * @param {string} lang
 */
export const getTopicsHubPageModel = (lang) => {
  const path = TOPICS_HUB_PATH;
  const titleText = t(lang, 'topics_hub_title');
  const description = t(lang, 'topics_hub_desc');
  const canonicalPath = withLangPath(lang, path);

  const sidebarItems = TOOL_TOPIC_ORDER.map((id) => ({
    href: withLangPath(lang, `${path}/${id}`),
    label: t(lang, TOPIC_I18N_KEYS[id].labelKey),
  }));

  return {
    title: `${titleText} | ${siteConfig.brand}`,
    description,
    canonicalPath,
    pagePath: path,
    navItems: buildToolPageNavItems(lang),
    sidebarTitle: t(lang, 'nav_topics'),
    sidebarItems,
    sidebarId: 'topicsNav',
    contentHtml: renderTopicsHubContent({ lang }),
    jsonLd: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: titleText,
      description,
      url: absoluteUrl(canonicalPath),
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.brand,
        url: siteConfig.baseUrl,
      },
    }),
    bodyClass: 'is-home-page',
  };
};

/**
 * 单主题 leaf 页模型（含 Info Gain 与工具列表）。
 * @param {string} lang
 * @param {string} id
 */
export const getTopicsLeafPageModel = (lang, id) => {
  if (!isToolTopic(id)) throw new Error(`Unknown topic: ${id}`);
  const meta = TOPIC_I18N_KEYS[id];
  const path = `${TOPICS_HUB_PATH}/${id}`;
  const titleText = t(lang, meta.titleKey);
  const description = t(lang, meta.descKey);
  const canonicalPath = withLangPath(lang, path);
  const tools = getToolsByTopicMembership(id);

  const sidebarItems = TOOL_TOPIC_ORDER.map((tid) => ({
    href: withLangPath(lang, `${TOPICS_HUB_PATH}/${tid}`),
    label: t(lang, TOPIC_I18N_KEYS[tid].labelKey),
  }));

  const itemListElement = tools.map((tool, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: t(lang, tool.homeTitleKey),
    url: absoluteUrl(withLangPath(lang, tool.path)),
  }));

  const jsonLd = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: titleText,
      description,
      url: absoluteUrl(canonicalPath),
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.brand,
        url: siteConfig.baseUrl,
      },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: tools.length,
        itemListElement,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t(lang, 'nav_home'),
          item: absoluteUrl(withLangPath(lang, '/')),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t(lang, 'nav_topics'),
          item: absoluteUrl(withLangPath(lang, TOPICS_HUB_PATH)),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: t(lang, meta.labelKey),
          item: absoluteUrl(canonicalPath),
        },
      ],
    },
  ]);

  return {
    title: `${titleText} | ${siteConfig.brand}`,
    description,
    canonicalPath,
    pagePath: path,
    navItems: buildToolPageNavItems(lang),
    sidebarTitle: t(lang, 'nav_topics'),
    sidebarItems,
    sidebarId: 'topicsNav',
    contentHtml: renderTopicsLeafContent({ lang, id }),
    jsonLd,
    bodyClass: 'is-home-page',
  };
};
