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

  const categorySections = TOOL_CATEGORY_ORDER.map((category) => {
    const meta = CATEGORY_HOME_SECTION_KEYS[category];
    const tools = getToolsByCategory(category);
    return `
      <div class="home-cat" id="${getCategoryAnchor(category)}">
        <span class="home-cat-label">${t(lang, meta.labelKey)}</span>
        <h3>${t(lang, meta.descKey)}</h3>
        <p class="home-cat-blurb">${t(lang, meta.blurbKey)}</p>
        <div class="home-card-grid">
          ${tools.map((tool) => renderToolCard(lang, tool, openCta)).join('')}
        </div>
      </div>`;
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
