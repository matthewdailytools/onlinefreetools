/**
 * 应用场景 / 操作对象：hub（只链到 leaf，不直链工具）与 leaf（工具卡片网格）。
 * 部分场景（如 seo）使用分模块布局：模块说明 + 本场景主工具 + 跨场景相关互链。
 */
import { t } from '../i18n.mjs';
import { withLangPath } from '../config.mjs';
import { TOOL_CATALOG } from '../tool-catalog.mjs';
import {
  TOOL_SCENARIO_ORDER,
  TOOL_SUBJECT_ORDER,
  SCENARIO_I18N_KEYS,
  SUBJECT_I18N_KEYS,
  SCENARIO_HUB_PATH,
  SUBJECT_HUB_PATH,
} from '../taxonomy.mjs';
import { getScenarioModules } from '../scenario-modules.mjs';
import { renderToolCardGrid, renderToolCard } from './content-tool-cards.mjs';

/**
 * @param {string} lang
 * @param {object[]} tools
 * @param {string} scenario
 */
export const getToolsByScenario = (tools, scenario) => tools.filter((p) => p.scenario === scenario);

/**
 * @param {object[]} tools
 * @param {string} subject
 */
export const getToolsBySubject = (tools, subject) => tools.filter((p) => p.subject === subject);

/**
 * 按 slug 从 catalog 解析工具（保持给定顺序；缺失则跳过）。
 * @param {string[]} slugs
 * @param {object[]} catalog
 */
const resolveToolsBySlugs = (slugs, catalog) => {
  /** @type {Map<string, object>} */
  const bySlug = new Map(catalog.map((tool) => [tool.slug, tool]));
  return slugs.map((slug) => bySlug.get(slug)).filter(Boolean);
};

/**
 * Hub：场景或对象入口卡片（链到 leaf，避免与 leaf 重复链工具）。
 * @param {{lang:string, kind:'scenario'|'subject'}} opts
 */
export const renderTaxonomyHubContent = ({ lang, kind }) => {
  const isScenario = kind === 'scenario';
  const order = isScenario ? TOOL_SCENARIO_ORDER : TOOL_SUBJECT_ORDER;
  const keysMap = isScenario ? SCENARIO_I18N_KEYS : SUBJECT_I18N_KEYS;
  const basePath = isScenario ? SCENARIO_HUB_PATH : SUBJECT_HUB_PATH;
  const hubTitle = t(lang, isScenario ? 'taxonomy_use_cases_title' : 'taxonomy_tool_type_title');
  const hubIntro = t(lang, isScenario ? 'taxonomy_use_cases_intro' : 'taxonomy_tool_type_intro');
  const viewCta = t(lang, 'taxonomy_view_tools');
  const countTpl = t(lang, 'taxonomy_tools_count');

  const cards = order
    .map((id) => {
      const meta = keysMap[id];
      const tools = isScenario
        ? getToolsByScenario(TOOL_CATALOG, id)
        : getToolsBySubject(TOOL_CATALOG, id);
      const countLabel = String(countTpl).replace(/\{n\}/g, String(tools.length));
      const href = withLangPath(lang, `${basePath}/${id}`);
      return `
      <div class="home-card-item">
        <div class="card tool-entry-card h-100 d-flex flex-column">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title home-card-title mb-2">
              <a class="home-card-title-link" href="${href}">${t(lang, meta.labelKey)}</a>
            </h3>
            <p class="card-text home-card-desc home-card-desc--sm flex-grow-1">${t(lang, meta.blurbKey)}</p>
            <p class="text-muted small mb-2">${countLabel}</p>
            <a href="${href}" class="mt-auto btn btn-primary btn-sm">${viewCta}</a>
          </div>
        </div>
      </div>`;
    })
    .join('');

  return `
    <div class="home-wrap">
      <div class="home-main">
        <section class="mb-4">
          <div class="home-section-head">
            <h1 class="h3 mb-2">${hubTitle}</h1>
            <p class="text-muted mb-0">${hubIntro}</p>
          </div>
          <div class="home-card-grid mt-3">
            ${cards}
          </div>
        </section>
      </div>
    </div>
  `;
};

/**
 * 渲染分模块 leaf（SEO 等）：目录 + 每模块说明/主工具/相关/规划。
 * @param {{lang:string, id:string, tools:object[], modules:object[]}} opts
 */
const renderModularScenarioLeaf = ({ lang, id, tools, modules }) => {
  const keysMap = SCENARIO_I18N_KEYS;
  const meta = keysMap[id];
  const hubHref = withLangPath(lang, SCENARIO_HUB_PATH);
  const homeHref = withLangPath(lang, '/');
  const hubLabel = t(lang, 'nav_use_cases');
  const relatedLabel = t(lang, 'taxonomy_mod_related');
  const upcomingLabel = t(lang, 'taxonomy_mod_upcoming');
  const tocLabel = t(lang, 'taxonomy_mod_toc');
  const openCta = t(lang, 'home_open');

  /** @type {Set<string>} */
  const assignedPrimary = new Set();

  const tocItems = modules
    .map(
      (mod) =>
        `<li class="mb-1"><a href="#mod-${mod.id}">${t(lang, mod.titleKey)}</a></li>`
    )
    .join('');

  const moduleHtml = modules
    .map((mod) => {
      const primary = resolveToolsBySlugs(mod.primarySlugs || [], TOOL_CATALOG);
      for (const tool of primary) assignedPrimary.add(tool.slug);
      const related = resolveToolsBySlugs(mod.relatedSlugs || [], TOOL_CATALOG);
      const upcomingText = mod.upcomingKey ? t(lang, mod.upcomingKey) : '';
      const primaryGrid = primary.length ? renderToolCardGrid(lang, primary) : '';
      const relatedGrid = related.length
        ? `
        <p class="small text-muted mb-2">${relatedLabel}</p>
        <div class="home-card-grid">
          ${related.map((tool) => renderToolCard(lang, tool, openCta)).join('')}
        </div>`
        : '';
      const upcomingBlock =
        upcomingText && upcomingText !== mod.upcomingKey
          ? `<p class="small mb-0 mt-3"><span class="fw-semibold">${upcomingLabel}:</span> ${upcomingText}</p>`
          : '';

      return `
      <section class="taxonomy-module mb-4 pb-3 border-bottom" id="mod-${mod.id}">
        <h2 class="h4 mb-2">${t(lang, mod.titleKey)}</h2>
        <p class="home-cat-blurb mb-3">${t(lang, mod.descKey)}</p>
        ${primaryGrid}
        ${relatedGrid}
        ${upcomingBlock}
      </section>`;
    })
    .join('');

  const leftover = tools.filter((tool) => !assignedPrimary.has(tool.slug));
  const leftoverHtml = leftover.length
    ? `
    <section class="taxonomy-module mb-4" id="mod-more">
      <h2 class="h4 mb-2">${t(lang, 'taxonomy_mod_more_tools')}</h2>
      ${renderToolCardGrid(lang, leftover)}
    </section>`
    : '';

  return `
    <div class="home-wrap">
      <div class="home-main">
        <nav class="mb-3 small" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="${homeHref}">${t(lang, 'nav_home')}</a></li>
            <li class="breadcrumb-item"><a href="${hubHref}">${hubLabel}</a></li>
            <li class="breadcrumb-item active" aria-current="page">${t(lang, meta.labelKey)}</li>
          </ol>
        </nav>
        <section class="mb-4">
          <div class="home-cat">
            <span class="home-cat-label">${t(lang, meta.labelKey)}</span>
            <h1 class="h3">${t(lang, meta.titleKey)}</h1>
            <p class="home-cat-blurb">${t(lang, meta.blurbKey)}</p>
          </div>
          <nav class="taxonomy-mod-toc mt-3 mb-4" aria-label="${tocLabel}">
            <p class="small fw-semibold mb-2">${tocLabel}</p>
            <ol class="small mb-0 ps-3">
              ${tocItems}
            </ol>
          </nav>
        </section>
        ${moduleHtml}
        ${leftoverHtml}
      </div>
    </div>
  `;
};

/**
 * Leaf：单一场景或对象下的全部工具（首页同款卡片）；场景若配置了模块则分模块渲染。
 * @param {{lang:string, kind:'scenario'|'subject', id:string, tools:object[]}} opts
 */
export const renderTaxonomyLeafContent = ({ lang, kind, id, tools }) => {
  const isScenario = kind === 'scenario';
  if (isScenario) {
    const modules = getScenarioModules(id);
    if (modules && modules.length) {
      return renderModularScenarioLeaf({ lang, id, tools, modules });
    }
  }

  const keysMap = isScenario ? SCENARIO_I18N_KEYS : SUBJECT_I18N_KEYS;
  const meta = keysMap[id];
  const hubPath = isScenario ? SCENARIO_HUB_PATH : SUBJECT_HUB_PATH;
  const hubLabel = t(lang, isScenario ? 'nav_use_cases' : 'nav_tool_type');
  const homeHref = withLangPath(lang, '/');
  const hubHref = withLangPath(lang, hubPath);

  return `
    <div class="home-wrap">
      <div class="home-main">
        <nav class="mb-3 small" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="${homeHref}">${t(lang, 'nav_home')}</a></li>
            <li class="breadcrumb-item"><a href="${hubHref}">${hubLabel}</a></li>
            <li class="breadcrumb-item active" aria-current="page">${t(lang, meta.labelKey)}</li>
          </ol>
        </nav>
        <section>
          <div class="home-cat">
            <span class="home-cat-label">${t(lang, meta.labelKey)}</span>
            <h1 class="h3">${t(lang, meta.titleKey)}</h1>
            <p class="home-cat-blurb">${t(lang, meta.blurbKey)}</p>
            ${renderToolCardGrid(lang, tools)}
          </div>
        </section>
      </div>
    </div>
  `;
};
