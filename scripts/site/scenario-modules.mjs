/**
 * where2use 场景可选「分模块」配置：标题/说明 + 本场景主工具 + 跨场景相关工具。
 * 仅声明的场景走模块化布局；其余场景仍用扁平卡片列表。
 */

/**
 * @typedef {{
 *   id: string,
 *   titleKey: string,
 *   descKey: string,
 *   upcomingKey?: string,
 *   primarySlugs: string[],
 *   relatedSlugs?: string[],
 * }} ScenarioModuleDef
 */

/**
 * SEO 分模块（对齐 docs/2026-08-09-seo-webmaster-tools-survey.md）。
 * primary：catalog.scenario === 'seo'；related：其它场景工具，仅作互链不改归属。
 * @type {Record<string, ScenarioModuleDef[]>}
 */
export const SCENARIO_MODULES = {
  seo: [
    {
      id: 'crawl',
      titleKey: 'taxonomy_scenario_seo_mod_crawl_title',
      descKey: 'taxonomy_scenario_seo_mod_crawl_desc',
      upcomingKey: 'taxonomy_scenario_seo_mod_crawl_upcoming',
      primarySlugs: ['indexnow', 'robots-txt-generator', 'sitemap-xml-generator'],
      relatedSlugs: [],
    },
    {
      id: 'technical',
      titleKey: 'taxonomy_scenario_seo_mod_technical_title',
      descKey: 'taxonomy_scenario_seo_mod_technical_desc',
      upcomingKey: 'taxonomy_scenario_seo_mod_technical_upcoming',
      primarySlugs: ['website-headers', 'domain-lookup', 'add-www-to-dns'],
      relatedSlugs: [],
    },
    {
      id: 'onpage',
      titleKey: 'taxonomy_scenario_seo_mod_onpage_title',
      descKey: 'taxonomy_scenario_seo_mod_onpage_desc',
      upcomingKey: 'taxonomy_scenario_seo_mod_onpage_upcoming',
      primarySlugs: ['meta-serp-preview'],
      relatedSlugs: ['markdown-to-html'],
    },
    {
      id: 'schema',
      titleKey: 'taxonomy_scenario_seo_mod_schema_title',
      descKey: 'taxonomy_scenario_seo_mod_schema_desc',
      upcomingKey: 'taxonomy_scenario_seo_mod_schema_upcoming',
      primarySlugs: ['schema-jsonld-generator'],
      relatedSlugs: ['json-schema-validator'],
    },
    {
      id: 'performance',
      titleKey: 'taxonomy_scenario_seo_mod_performance_title',
      descKey: 'taxonomy_scenario_seo_mod_performance_desc',
      upcomingKey: 'taxonomy_scenario_seo_mod_performance_upcoming',
      primarySlugs: ['core-web-vitals-checker'],
      relatedSlugs: ['image-compress', 'image-optimizer'],
    },
    {
      id: 'growth',
      titleKey: 'taxonomy_scenario_seo_mod_growth_title',
      descKey: 'taxonomy_scenario_seo_mod_growth_desc',
      upcomingKey: 'taxonomy_scenario_seo_mod_growth_upcoming',
      primarySlugs: [],
      relatedSlugs: [],
    },
    {
      id: 'social',
      titleKey: 'taxonomy_scenario_seo_mod_social_title',
      descKey: 'taxonomy_scenario_seo_mod_social_desc',
      upcomingKey: 'taxonomy_scenario_seo_mod_social_upcoming',
      primarySlugs: [],
      relatedSlugs: ['smart-website-color-scheme', 'wcag-contrast-checker'],
    },
  ],
};

/**
 * @param {string} scenarioId
 * @returns {ScenarioModuleDef[]|null}
 */
export const getScenarioModules = (scenarioId) => SCENARIO_MODULES[scenarioId] || null;
