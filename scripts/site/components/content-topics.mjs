/**
 * 主题 hub（入口卡片）与 leaf（Info Gain + 工具网格）内容渲染。
 */
import { t } from '../i18n.mjs';
import { withLangPath } from '../config.mjs';
import {
  TOOL_TOPIC_ORDER,
  TOPIC_I18N_KEYS,
  TOPICS_HUB_PATH,
} from '../topics.mjs';
import {
  getToolsByPrimaryTopic,
  getToolsBySecondaryTopicOnly,
  getToolsByTopicMembership,
} from '../tool-catalog.mjs';
import { renderToolCardGrid } from './content-tool-cards.mjs';

/**
 * Hub：各主题入口卡片（链到 leaf，避免与 leaf 重复直链工具）。
 * @param {{lang:string}} opts
 */
export const renderTopicsHubContent = ({ lang }) => {
  const hubTitle = t(lang, 'topics_hub_title');
  const hubIntro = t(lang, 'topics_hub_intro');
  const viewCta = t(lang, 'topics_view_tools');
  const countTpl = t(lang, 'topics_tools_count');

  const cards = TOOL_TOPIC_ORDER.map((id) => {
    const meta = TOPIC_I18N_KEYS[id];
    const tools = getToolsByTopicMembership(id);
    const countLabel = String(countTpl).replace(/\{n\}/g, String(tools.length));
    const href = withLangPath(lang, `${TOPICS_HUB_PATH}/${id}`);
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
  }).join('');

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
 * Leaf：可见面包屑 + Info Gain + primary/secondary 工具网格 + FAQ。
 * @param {{lang:string, id:string}} opts
 */
export const renderTopicsLeafContent = ({ lang, id }) => {
  const meta = TOPIC_I18N_KEYS[id];
  const homeHref = withLangPath(lang, '/');
  const hubHref = withLangPath(lang, TOPICS_HUB_PATH);
  const primaryTools = getToolsByPrimaryTopic(id);
  const secondaryTools = getToolsBySecondaryTopicOnly(id);

  const faqKeys = [
    [meta.faqQ1Key, meta.faqA1Key],
    [meta.faqQ2Key, meta.faqA2Key],
    [meta.faqQ3Key, meta.faqA3Key],
  ];
  const faqItems = faqKeys
    .map(([qKey, aKey]) => {
      const q = t(lang, qKey);
      const a = t(lang, aKey);
      return `
        <div class="mb-3">
          <h3 class="h6 mb-1">${q}</h3>
          <p class="text-muted mb-0">${a}</p>
        </div>`;
    })
    .join('');

  const secondaryBlock = secondaryTools.length
    ? `
    <section class="mb-4" id="topic-secondary">
      <h2 class="h4 mb-2">${t(lang, 'topics_secondary_heading')}</h2>
      ${renderToolCardGrid(lang, secondaryTools)}
    </section>`
    : '';

  return `
    <div class="home-wrap">
      <div class="home-main">
        <nav class="mb-3 small" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="${homeHref}">${t(lang, 'nav_home')}</a></li>
            <li class="breadcrumb-item"><a href="${hubHref}">${t(lang, 'nav_topics')}</a></li>
            <li class="breadcrumb-item active" aria-current="page">${t(lang, meta.labelKey)}</li>
          </ol>
        </nav>
        <section class="mb-4">
          <div class="home-cat">
            <span class="home-cat-label">${t(lang, meta.labelKey)}</span>
            <h1 class="h3">${t(lang, meta.titleKey)}</h1>
            <p class="home-cat-blurb">${t(lang, meta.introKey)}</p>
          </div>
        </section>
        <section class="mb-4">
          <h2 class="h4 mb-2">${t(lang, meta.chooseTitleKey)}</h2>
          <p class="text-muted mb-0">${t(lang, meta.chooseBodyKey)}</p>
        </section>
        <section class="mb-4">
          <h2 class="h4 mb-2">${t(lang, meta.limitsTitleKey)}</h2>
          <p class="text-muted mb-0">${t(lang, meta.limitsBodyKey)}</p>
        </section>
        <section class="mb-4" id="topic-primary">
          <h2 class="h4 mb-2">${t(lang, 'topics_primary_heading')}</h2>
          ${renderToolCardGrid(lang, primaryTools)}
        </section>
        ${secondaryBlock}
        <section class="mb-4">
          <h2 class="h4 mb-3">${t(lang, 'topics_faq_title')}</h2>
          ${faqItems}
        </section>
      </div>
    </div>
  `;
};
