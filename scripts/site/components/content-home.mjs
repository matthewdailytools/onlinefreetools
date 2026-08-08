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
 * 是否在首页卡片显示「不上传」标签（纯本地处理；缺省 true）。
 * @param {{localProcessing?: boolean}} tool
 */
const showNoUploadTag = (tool) => tool.localProcessing !== false;

/**
 * 渲染「不上传」标签（链到隐私政策本地处理说明）。
 * @param {string} lang
 * @returns {string}
 */
/** 站内打开工具/说明页：一律新标签，避免冲掉首页滚动位置 */
const NEW_TAB = ' target="_blank" rel="noopener noreferrer"';

const renderNoUploadTag = (lang) => {
  const href = `${withExplicitLangPath(lang, '/privacy')}#local`;
  const label = t(lang, 'home_tag_no_upload');
  const title = t(lang, 'home_tag_no_upload_title');
  return `<a class="tool-no-upload-tag" href="${href}" title="${title}"${NEW_TAB}>${label}</a>`;
};

/**
 * 渲染 Featured 主卡片（可交互入口）。
 * @param {{title:string,desc:string,href:string,cta:string,logo:string,noUploadHtml?:string}} opts 卡片文案与链接
 * @returns {string} 推荐区卡片 HTML（标题用 --featured，描述用正文阶）
 */
const renderPrimaryCard = ({ title, desc, href, cta, logo, noUploadHtml = '' }) => `
  <div class="home-card-item">
    <div class="card tool-entry-card h-100 d-flex flex-column">
      <div class="card-body d-flex flex-column">
        <div class="tool-card-head">
          <img class="tool-card-logo" src="${logo}" width="36" height="36" alt="" decoding="async" fetchpriority="high" />
          <div class="tool-card-head-text">
            <h3 class="card-title home-card-title home-card-title--featured mb-0">
              <a class="home-card-title-link" href="${href}"${NEW_TAB}>${title}</a>
            </h3>
            ${noUploadHtml}
          </div>
        </div>
        <p class="card-text home-card-desc flex-grow-1">${desc}</p>
        <a href="${href}" class="mt-auto btn btn-primary btn-sm"${NEW_TAB}>${cta}</a>
      </div>
    </div>
  </div>`;

/**
 * 渲染分类区次级卡片。
 * @param {{title:string,desc:string,href:string,cta:string,logo:string,noUploadHtml?:string}} opts 卡片文案与链接
 * @returns {string} 分类区卡片 HTML（标题/描述各降一阶，不用 Bootstrap h6/small）
 */
const renderSecondaryCard = ({ title, desc, href, cta, logo, noUploadHtml = '' }) => `
  <div class="home-card-item">
    <div class="card tool-entry-card h-100 d-flex flex-column">
      <div class="card-body d-flex flex-column">
        <div class="tool-card-head">
          <img class="tool-card-logo" src="${logo}" width="32" height="32" alt="" decoding="async" loading="lazy" />
          <div class="tool-card-head-text">
            <h3 class="card-title home-card-title mb-0">
              <a class="home-card-title-link" href="${href}"${NEW_TAB}>${title}</a>
            </h3>
            ${noUploadHtml}
          </div>
        </div>
        <p class="card-text home-card-desc home-card-desc--sm flex-grow-1">${desc}</p>
        <a href="${href}" class="mt-auto btn btn-primary btn-sm"${NEW_TAB}>${cta}</a>
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
    noUploadHtml: showNoUploadTag(tool) ? renderNoUploadTag(lang) : '',
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
        <div class="home-card-grid">
          ${tools.map((tool) => renderToolCard(lang, tool, openCta, renderSecondaryCard)).join('')}
        </div>
      </div>`;
  }).join('');

  return `
    <div class="home-wrap">
    <!-- 顶区氛围带：Hero + Why + 推荐，背景随主题品牌色 -->
    <div class="home-top">
    <section class="home-hero" aria-labelledby="home-hero-heading">
      <div class="home-hero-inner">
        <h1 class="home-hero-brand" id="home-hero-heading">${t(lang, 'brand')}</h1>
        <div class="home-hero-actions">
          <a class="btn btn-primary btn-lg" href="#all-tools">${t(lang, 'home_cta_browse')}</a>
          <a class="btn btn-primary btn-lg" href="#featured">${t(lang, 'home_cta_featured')}</a>
        </div>
      </div>
    </section>

    <div class="home-main home-main--top">
    <section class="home-why" aria-label="${t(lang, 'home_why_label')}">
      <article class="home-why-item home-why-item--local">
        <span class="home-why-bg" aria-hidden="true"></span>
        <span class="home-why-index" aria-hidden="true">I</span>
        <div class="home-why-body">
          <h3>${t(lang, 'home_why_1_title')}</h3>
          <p class="home-why-tag-demo">${renderNoUploadTag(lang)}</p>
          <p>${t(lang, 'home_why_1_body')}</p>
        </div>
      </article>
      <article class="home-why-item home-why-item--signup">
        <span class="home-why-bg" aria-hidden="true"></span>
        <span class="home-why-index" aria-hidden="true">II</span>
        <div class="home-why-body">
          <h3>${t(lang, 'home_why_2_title')}</h3>
          <p>${t(lang, 'home_why_2_body')}</p>
        </div>
      </article>
      <article class="home-why-item home-why-item--process">
        <span class="home-why-bg" aria-hidden="true"></span>
        <span class="home-why-index" aria-hidden="true">III</span>
        <div class="home-why-body">
          <h3>${t(lang, 'home_why_3_title')}</h3>
          <p>${t(lang, 'home_why_3_body')}</p>
        </div>
      </article>
    </section>

    <section id="featured" class="home-featured">
      <div class="home-section-head">
        <h2>${t(lang, 'home_featured')}</h2>
        <a class="btn btn-sm btn-primary" href="#all-tools">${t(lang, 'home_view_all')}</a>
      </div>
      <div class="home-card-grid home-card-grid--featured">
        ${featured.map((tool) => renderToolCard(lang, tool, openCta, renderPrimaryCard)).join('')}
      </div>
    </section>
    </div>
    </div>

    <div class="home-main">
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
