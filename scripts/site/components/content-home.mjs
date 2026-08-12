/**
 * 首页内容：Hero（工具数量）+ Why×3 + 分类工具目录。
 * 站内工具链接使用显式语言前缀（含 /en/），避免切到英文后再被 Accept-Language 打回。
 */
import { t } from '../i18n.mjs';
import { TOOL_CATALOG, getToolsByCategory } from '../tool-catalog.mjs';
import {
  TOOL_CATEGORY_ORDER,
  getCategoryAnchor,
  CATEGORY_HOME_SECTION_KEYS,
} from '../categories.mjs';
import { renderNoUploadTag, renderToolCard } from './content-tool-cards.mjs';

/**
 * 渲染首页主体。
 * @param {{lang:string}} opts
 */
export const renderHomeContent = ({ lang }) => {
  const openCta = t(lang, 'home_open');
  /** 站内工具总数（catalog 行数），用于 Hero 数量文案 */
  const toolCount = TOOL_CATALOG.length;
  const toolsCountLabel = String(t(lang, 'home_tools_count')).replace(/\{n\}/g, String(toolCount));
  /** 首屏优先加载的图标数（仅第一个展开分类内） */
  const EAGER_LOGO_COUNT = 12;
  /** 已分配 eager 的图标计数 */
  let eagerLeft = EAGER_LOGO_COUNT;

  const categorySections = TOOL_CATEGORY_ORDER.map((category, catIndex) => {
    const meta = CATEGORY_HOME_SECTION_KEYS[category];
    const tools = getToolsByCategory(category);
    /** 仅默认展开第一个分类，降低首屏布局与图标请求 */
    const openAttr = catIndex === 0 ? ' open' : '';
    const cards = tools
      .map((tool) => {
        const logoEager = catIndex === 0 && eagerLeft > 0;
        if (logoEager) eagerLeft -= 1;
        return renderToolCard(lang, tool, openCta, { logoEager });
      })
      .join('');
    return `
      <details class="home-cat"${openAttr} id="${getCategoryAnchor(category)}">
        <summary class="home-cat-summary">
          <span class="home-cat-label">${t(lang, meta.labelKey)}</span>
          <h3>${t(lang, meta.descKey)}</h3>
        </summary>
        <p class="home-cat-blurb">${t(lang, meta.blurbKey)}</p>
        <div class="home-card-grid">
          ${cards}
        </div>
      </details>`;
  }).join('');

  return `
    <div class="home-wrap">
    <!-- 顶区氛围带：Hero + Why，背景随主题品牌色 -->
    <div class="home-top">
    <section class="home-hero" aria-labelledby="home-hero-heading">
      <div class="home-hero-inner">
        <h1 class="home-hero-brand" id="home-hero-heading">${t(lang, 'brand')}</h1>
        <div class="home-hero-actions">
          <p class="home-hero-tool-count" aria-label="${toolsCountLabel}">${toolsCountLabel}</p>
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
