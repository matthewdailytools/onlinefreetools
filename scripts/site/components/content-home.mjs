/**
 * 首页内容：大气深色首屏 + Why×3 + Featured + 分类工具目录。
 * 站内工具链接使用显式语言前缀（含 /en/），避免切到英文后再被 Accept-Language 打回。
 */
import { t } from '../i18n.mjs';
import { withExplicitLangPath } from '../config.mjs';
import { TOOL_CATALOG, getToolsByCategory } from '../tool-catalog.mjs';
import {
  TOOL_CATEGORY_ORDER,
  getCategoryAnchor,
  CATEGORY_HOME_SECTION_KEYS,
} from '../categories.mjs';

/**
 * 解析工具 logo 路径。
 * @param {{slug:string,logo?:string}} tool
 */
const toolLogoUrl = (tool) =>
  tool.logo && String(tool.logo).trim() ? tool.logo : `/icons/tools/${tool.slug}.svg`;

/**
 * 渲染 Featured 主卡片（可交互入口）。
 * @param {{title:string,desc:string,href:string,cta:string,logo:string}} opts
 */
const renderPrimaryCard = ({ title, desc, href, cta, logo }) => `
  <div class="col">
    <div class="card tool-entry-card h-100 d-flex flex-column">
      <div class="card-body d-flex flex-column">
        <div class="tool-card-head">
          <img class="tool-card-logo" src="${logo}" width="36" height="36" alt="" decoding="async" />
          <h3 class="card-title h5 mb-0">${title}</h3>
        </div>
        <p class="card-text flex-grow-1">${desc}</p>
        <a href="${href}" class="mt-auto btn btn-primary btn-sm">${cta}</a>
      </div>
    </div>
  </div>`;

/**
 * 渲染分类区次级卡片。
 * @param {{title:string,desc:string,href:string,cta:string,logo:string}} opts
 */
const renderSecondaryCard = ({ title, desc, href, cta, logo }) => `
  <div class="col">
    <div class="card tool-entry-card h-100 d-flex flex-column">
      <div class="card-body d-flex flex-column">
        <div class="tool-card-head">
          <img class="tool-card-logo" src="${logo}" width="32" height="32" alt="" decoding="async" />
          <h3 class="card-title h6 mb-0">${title}</h3>
        </div>
        <p class="card-text small flex-grow-1">${desc}</p>
        <a href="${href}" class="mt-auto btn btn-primary btn-sm">${cta}</a>
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
    logo: toolLogoUrl(tool),
    cta,
  });

/**
 * 渲染首页主体。
 * @param {{lang:string}} opts
 */
export const renderHomeContent = ({ lang }) => {
  const openCta = t(lang, 'home_open');
  const featured = TOOL_CATALOG.filter((p) => p.featured !== false);

  const categorySections = TOOL_CATEGORY_ORDER.map((category) => {
    const meta = CATEGORY_HOME_SECTION_KEYS[category];
    const tools = getToolsByCategory(category);
    return `
      <div class="home-cat" id="${getCategoryAnchor(category)}">
        <span class="home-cat-label">${t(lang, meta.labelKey)}</span>
        <h3>${t(lang, meta.descKey)}</h3>
        <p class="home-cat-blurb">${t(lang, meta.blurbKey)}</p>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          ${tools.map((tool) => renderToolCard(lang, tool, openCta, renderSecondaryCard)).join('')}
        </div>
      </div>`;
  }).join('');

  return `
    <div class="home-wrap">
    <section class="home-hero" aria-labelledby="home-hero-heading">
      <div class="home-hero-inner">
        <h1 class="home-hero-brand" id="home-hero-heading">${t(lang, 'brand')}</h1>
        <div class="home-hero-actions">
          <a class="btn btn-primary btn-lg" href="#all-tools">${t(lang, 'home_cta_browse')}</a>
          <a class="btn btn-primary btn-lg" href="#featured">${t(lang, 'home_cta_featured')}</a>
        </div>
      </div>
    </section>

    <div class="home-main">
    <section class="home-why" aria-label="${t(lang, 'home_why_label')}">
      <div class="home-why-item">
        <h3>${t(lang, 'home_why_1_title')}</h3>
        <p>${t(lang, 'home_why_1_body')}</p>
      </div>
      <div class="home-why-item">
        <h3>${t(lang, 'home_why_2_title')}</h3>
        <p>${t(lang, 'home_why_2_body')}</p>
      </div>
      <div class="home-why-item">
        <h3>${t(lang, 'home_why_3_title')}</h3>
        <p>${t(lang, 'home_why_3_body')}</p>
      </div>
    </section>

    <section id="featured" class="mb-5">
      <div class="home-section-head">
        <h2>${t(lang, 'home_featured')}</h2>
        <a class="btn btn-sm btn-primary" href="#all-tools">${t(lang, 'home_view_all')}</a>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        ${featured.map((tool) => renderToolCard(lang, tool, openCta, renderPrimaryCard)).join('')}
      </div>
    </section>

    <section id="all-tools">
      <div class="home-section-head">
        <h2>${t(lang, 'home_all_tools')}</h2>
      </div>

      ${categorySections}
    </section>
    </div>
    </div>
  `;
};
