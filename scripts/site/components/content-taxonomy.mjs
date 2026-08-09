/**
 * 应用场景 / 操作对象：hub（只链到 leaf，不直链工具）与 leaf（工具卡片网格）。
 */
import { t } from '../i18n.mjs';
import { withExplicitLangPath } from '../config.mjs';
import { TOOL_CATALOG } from '../tool-catalog.mjs';
import {
  TOOL_SCENARIO_ORDER,
  TOOL_SUBJECT_ORDER,
  SCENARIO_I18N_KEYS,
  SUBJECT_I18N_KEYS,
  SCENARIO_HUB_PATH,
  SUBJECT_HUB_PATH,
} from '../taxonomy.mjs';
import { renderToolCardGrid } from './content-tool-cards.mjs';

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
      const href = withExplicitLangPath(lang, `${basePath}/${id}`);
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
 * Leaf：单一场景或对象下的全部工具（首页同款卡片）。
 * @param {{lang:string, kind:'scenario'|'subject', id:string, tools:object[]}} opts
 */
export const renderTaxonomyLeafContent = ({ lang, kind, id, tools }) => {
  const isScenario = kind === 'scenario';
  const keysMap = isScenario ? SCENARIO_I18N_KEYS : SUBJECT_I18N_KEYS;
  const meta = keysMap[id];
  const hubPath = isScenario ? SCENARIO_HUB_PATH : SUBJECT_HUB_PATH;
  const hubLabel = t(lang, isScenario ? 'nav_use_cases' : 'nav_tool_type');
  const homeHref = withExplicitLangPath(lang, '/');
  const hubHref = withExplicitLangPath(lang, hubPath);

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
