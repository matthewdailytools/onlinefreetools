/**
 * 首页内容：由工具目录驱动，覆盖全部工具。
 * 站内工具链接使用显式语言前缀（含 /en/），避免切到英文后再被 Accept-Language 打回。
 */
import { t } from '../i18n.mjs';
import { withExplicitLangPath } from '../config.mjs';
import { TOOL_CATALOG, getToolsByCategory } from '../tool-catalog.mjs';

/**
 * 渲染 Featured 主卡片。
 * @param {{title:string,desc:string,href:string,cta:string}} opts
 */
const renderPrimaryCard = ({ title, desc, href, cta }) => `
  <div class="col">
    <div class="card h-100 shadow-sm d-flex flex-column">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${title}</h5>
        <p class="card-text text-muted flex-grow-1">${desc}</p>
        <a href="${href}" class="mt-auto btn btn-primary btn-sm">${cta}</a>
      </div>
    </div>
  </div>`;

/**
 * 渲染分类区次级卡片。
 * @param {{title:string,desc:string,href:string,cta:string}} opts
 */
const renderSecondaryCard = ({ title, desc, href, cta }) => `
  <div class="col">
    <div class="card h-100 d-flex flex-column">
      <div class="card-body d-flex flex-column">
        <h6 class="card-title">${title}</h6>
        <p class="card-text small text-muted flex-grow-1">${desc}</p>
        <a href="${href}" class="mt-auto btn btn-outline-primary btn-sm">${cta}</a>
      </div>
    </div>
  </div>`;

/**
 * 将目录条目渲染为卡片 HTML。
 * @param {string} lang
 * @param {object} tool
 * @param {string} cta
 * @param {(opts:object)=>string} renderer
 */
const renderToolCard = (lang, tool, cta, renderer) =>
  renderer({
    title: t(lang, tool.homeTitleKey),
    desc: t(lang, tool.homeDescKey),
    href: withExplicitLangPath(lang, tool.path),
    cta,
  });

/**
 * 渲染首页主体（Featured + Calculator + Developer）。
 * @param {{lang:string}} opts
 */
export const renderHomeContent = ({ lang }) => {
  const openCta = t(lang, 'home_open');
  const featured = TOOL_CATALOG.filter((p) => p.featured !== false);
  const calculators = getToolsByCategory('calculator');
  const developers = getToolsByCategory('developer');

  return `
    <section id="featured" class="mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 mb-0">${t(lang, 'home_featured')}</h2>
        <a class="btn btn-sm btn-outline-secondary" href="#all-tools">${t(lang, 'home_view_all')}</a>
      </div>
      <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-3">
        ${featured.map((tool) => renderToolCard(lang, tool, openCta, renderPrimaryCard)).join('')}
      </div>
    </section>

    <section id="all-tools">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 mb-0">${t(lang, 'home_all_tools')}</h2>
      </div>

      <div class="mb-4" id="cat-calculator">
        <div class="d-flex align-items-center mb-2 flex-wrap gap-2">
          <span class="badge text-bg-secondary">${t(lang, 'home_cat_calculator')}</span>
          <span class="text-muted small">${t(lang, 'home_cat_calculator_desc')}</span>
        </div>
        <p class="small text-muted mb-3">${t(lang, 'home_cat_calculator_blurb')}</p>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          ${calculators.map((tool) => renderToolCard(lang, tool, openCta, renderSecondaryCard)).join('')}
        </div>
      </div>

      <div class="mb-4" id="cat-dev">
        <div class="d-flex align-items-center mb-2 flex-wrap gap-2">
          <span class="badge text-bg-secondary">${t(lang, 'home_cat_dev')}</span>
          <span class="text-muted small">${t(lang, 'home_cat_dev_desc')}</span>
        </div>
        <p class="small text-muted mb-3">${t(lang, 'home_cat_dev_blurb')}</p>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          ${developers.map((tool) => renderToolCard(lang, tool, openCta, renderSecondaryCard)).join('')}
        </div>
      </div>
    </section>
  `;
};
