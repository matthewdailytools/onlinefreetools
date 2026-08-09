/**
 * 应用场景 / 操作对象 hub 与 leaf 页模型。
 */
import { t } from '../i18n.mjs';
import { siteConfig, withLangPath, withExplicitLangPath, absoluteUrl } from '../config.mjs';
import { TOOL_CATALOG } from '../tool-catalog.mjs';
import {
  TOOL_SCENARIO_ORDER,
  TOOL_SUBJECT_ORDER,
  SCENARIO_I18N_KEYS,
  SUBJECT_I18N_KEYS,
  SCENARIO_HUB_PATH,
  SUBJECT_HUB_PATH,
  isToolScenario,
  isToolSubject,
} from '../taxonomy.mjs';
import { buildToolPageNavItems } from '../nav.mjs';
import {
  renderTaxonomyHubContent,
  renderTaxonomyLeafContent,
  getToolsByScenario,
  getToolsBySubject,
} from '../components/content-taxonomy.mjs';

/**
 * @param {string} lang
 * @param {'scenario'|'subject'} kind
 */
export const getTaxonomyHubPageModel = (lang, kind) => {
  const isScenario = kind === 'scenario';
  const path = isScenario ? SCENARIO_HUB_PATH : SUBJECT_HUB_PATH;
  const titleKey = isScenario ? 'taxonomy_use_cases_title' : 'taxonomy_tool_type_title';
  const descKey = isScenario ? 'taxonomy_use_cases_desc' : 'taxonomy_tool_type_desc';
  const order = isScenario ? TOOL_SCENARIO_ORDER : TOOL_SUBJECT_ORDER;
  const keysMap = isScenario ? SCENARIO_I18N_KEYS : SUBJECT_I18N_KEYS;

  const titleText = t(lang, titleKey);
  const description = t(lang, descKey);
  const canonicalPath = withLangPath(lang, path);

  const sidebarItems = order.map((id) => ({
    href: withExplicitLangPath(lang, `${path}/${id}`),
    label: t(lang, keysMap[id].labelKey),
  }));

  return {
    title: `${titleText} | ${siteConfig.brand}`,
    description,
    canonicalPath,
    pagePath: path,
    navItems: buildToolPageNavItems(lang),
    sidebarTitle: titleText,
    sidebarItems,
    sidebarId: isScenario ? 'useCasesNav' : 'subjectsNav',
    contentHtml: renderTaxonomyHubContent({ lang, kind }),
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
 * @param {string} lang
 * @param {'scenario'|'subject'} kind
 * @param {string} id
 */
export const getTaxonomyLeafPageModel = (lang, kind, id) => {
  const isScenario = kind === 'scenario';
  if (isScenario && !isToolScenario(id)) throw new Error(`Unknown scenario: ${id}`);
  if (!isScenario && !isToolSubject(id)) throw new Error(`Unknown subject: ${id}`);

  const hubPath = isScenario ? SCENARIO_HUB_PATH : SUBJECT_HUB_PATH;
  const path = `${hubPath}/${id}`;
  const keysMap = isScenario ? SCENARIO_I18N_KEYS : SUBJECT_I18N_KEYS;
  const meta = keysMap[id];
  const tools = isScenario
    ? getToolsByScenario(TOOL_CATALOG, id)
    : getToolsBySubject(TOOL_CATALOG, id);

  const titleText = t(lang, meta.titleKey);
  const description = t(lang, meta.descKey);
  const canonicalPath = withLangPath(lang, path);
  const order = isScenario ? TOOL_SCENARIO_ORDER : TOOL_SUBJECT_ORDER;

  const sidebarItems = order.map((sid) => ({
    href: withExplicitLangPath(lang, `${hubPath}/${sid}`),
    label: t(lang, keysMap[sid].labelKey),
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
          name: t(lang, isScenario ? 'nav_use_cases' : 'nav_tool_type'),
          item: absoluteUrl(withLangPath(lang, hubPath)),
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
    sidebarTitle: t(lang, isScenario ? 'nav_use_cases' : 'nav_tool_type'),
    sidebarItems,
    sidebarId: isScenario ? 'useCasesNav' : 'subjectsNav',
    contentHtml: renderTaxonomyLeafContent({ lang, kind, id, tools }),
    jsonLd,
    bodyClass: 'is-home-page',
  };
};
