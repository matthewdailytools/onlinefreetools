/**
 * 主题 hub（入口卡片）与 leaf（决策表 / 工作流 / 簇级示例 + 工具网格）内容渲染。
 */
import { t } from '../i18n.mjs';
import { withLangPath } from '../config.mjs';
import {
  TOOL_TOPIC_ORDER,
  TOPIC_I18N_KEYS,
  TOPICS_HUB_PATH,
  topicKeyFragment,
} from '../topics.mjs';
import {
  getToolsByPrimaryTopic,
  getToolsBySecondaryTopicOnly,
  getToolBySlug,
} from '../tool-catalog.mjs';
import { renderToolCard } from './content-tool-cards.mjs';
import { TOPIC_IG, topicIgSlugKey } from '../topic-ig.mjs';

/**
 * 转义写入 HTML 文本节点的字符串。
 * @param {string} value
 */
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * 读取文案：缺键或键名回退时空串，避免把 raw key 渲染进页面。
 * @param {string} lang
 * @param {string} key
 */
const tOrEmpty = (lang, key) => {
  const value = t(lang, key);
  if (!value || value === key) return '';
  return String(value);
};

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
    const ig = TOPIC_IG[id];
    const n = (ig?.groups || []).reduce((sum, g) => sum + g.slugs.length, 0);
    const countLabel = String(countTpl).replace(/\{n\}/g, String(n));
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
 * 渲染一张决策表（一组 slug）。
 * @param {{lang:string, topicId:string, group:{id:string, slugs:string[]}}} opts
 */
const renderDecisionTable = ({ lang, topicId, group }) => {
  const f = topicKeyFragment(topicId);
  const groupTitle = tOrEmpty(lang, `topic_${f}_grp_${group.id}`);
  const colJob = t(lang, 'topics_ig_col_job');
  const colTool = t(lang, 'topics_ig_col_tool');
  const colNeed = t(lang, 'topics_ig_col_need');
  const colSkip = t(lang, 'topics_ig_col_skip');
  const rows = group.slugs
    .map((slug) => {
      const tool = getToolBySlug(slug);
      if (!tool) return '';
      const sk = topicIgSlugKey(slug);
      const href = withLangPath(lang, tool.path);
      const name = t(lang, tool.homeTitleKey);
      const job = tOrEmpty(lang, `topic_${f}_row_${sk}_job`);
      const need = tOrEmpty(lang, `topic_${f}_row_${sk}_need`);
      const skip = tOrEmpty(lang, `topic_${f}_row_${sk}_skip`);
      return `
        <tr>
          <td>${escapeHtml(job)}</td>
          <td class="topic-ig-tool"><a href="${escapeHtml(href)}">${escapeHtml(name)}</a></td>
          <td>${escapeHtml(need)}</td>
          <td>${escapeHtml(skip)}</td>
        </tr>`;
    })
    .join('');
  const heading = groupTitle
    ? `<h3 class="h6 topic-ig-group-title">${escapeHtml(groupTitle)}</h3>`
    : '';
  return `
    ${heading}
    <div class="topic-ig-table-wrap">
      <table class="topic-ig-table">
        <thead>
          <tr>
            <th>${escapeHtml(colJob)}</th>
            <th>${escapeHtml(colTool)}</th>
            <th>${escapeHtml(colNeed)}</th>
            <th>${escapeHtml(colSkip)}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
};

/**
 * 按分组渲染工具卡片；描述用枢纽 best-for，不用首页 homeDesc。
 * @param {{lang:string, topicId:string, groups:Array<{id:string, slugs:string[]}>}} opts
 */
const renderGroupedPrimaryCards = ({ lang, topicId, groups }) => {
  const f = topicKeyFragment(topicId);
  const openCta = t(lang, 'home_open');
  return groups
    .map((group) => {
      const groupTitle = tOrEmpty(lang, `topic_${f}_grp_${group.id}`);
      const toolsHtml = group.slugs
        .map((slug) => {
          const tool = getToolBySlug(slug);
          if (!tool) return '';
          const sk = topicIgSlugKey(slug);
          const card = tOrEmpty(lang, `topic_${f}_card_${sk}`);
          return renderToolCard(lang, tool, openCta, { desc: card || undefined });
        })
        .join('');
      const heading = groupTitle
        ? `<h3 class="h6 topic-ig-group-title">${escapeHtml(groupTitle)}</h3>`
        : '';
      return `
        ${heading}
        <div class="home-card-grid">${toolsHtml}</div>`;
    })
    .join('');
};

/**
 * Leaf：面包屑 + 决策表 + 工作流/示例 + 边界引用 + 分组卡片 + FAQ。
 * 不渲染 choose/guide（与表重复）。
 * @param {{lang:string, id:string}} opts
 */
export const renderTopicsLeafContent = ({ lang, id }) => {
  const meta = TOPIC_I18N_KEYS[id];
  const ig = TOPIC_IG[id];
  const f = topicKeyFragment(id);
  const homeHref = withLangPath(lang, '/');
  const hubHref = withLangPath(lang, TOPICS_HUB_PATH);
  const secondaryTools = getToolsBySecondaryTopicOnly(id);
  const primaryListed = new Set((ig?.groups || []).flatMap((g) => g.slugs));
  /** 结构漏列时仍展示 catalog 主工具，避免枢纽丢卡 */
  const leftoverPrimary = getToolsByPrimaryTopic(id).filter((tool) => !primaryListed.has(tool.slug));

  const tableTitle = tOrEmpty(lang, `topic_${f}_table_title`) || t(lang, meta.chooseTitleKey);
  const tables = (ig?.groups || [])
    .map((group) => renderDecisionTable({ lang, topicId: id, group }))
    .join('');

  const flowSlugs = ig?.workflow || [];
  const flowItems = flowSlugs
    .map((slug, index) => {
      const tool = getToolBySlug(slug);
      const step = tOrEmpty(lang, `topic_${f}_flow_${index + 1}`);
      if (!tool || !step) return '';
      const href = withLangPath(lang, tool.path);
      const name = t(lang, tool.homeTitleKey);
      return `<li>${escapeHtml(step)} — <a href="${escapeHtml(href)}">${escapeHtml(name)}</a></li>`;
    })
    .filter(Boolean)
    .join('');
  const flowBlock =
    flowItems && flowSlugs.length >= 2
      ? `
    <section class="mb-4" id="topic-workflow">
      <h2 class="h4 mb-2">${escapeHtml(t(lang, 'topics_ig_workflow'))}</h2>
      <ol class="topic-ig-flow text-muted mb-0">${flowItems}</ol>
    </section>`
      : '';

  const exampleTitle = tOrEmpty(lang, `topic_${f}_example_title`);
  const exampleBody = tOrEmpty(lang, `topic_${f}_example_body`);
  const exampleBlock =
    exampleTitle && exampleBody
      ? `
    <section class="mb-4" id="topic-example">
      <h2 class="h4 mb-2">${escapeHtml(exampleTitle)}</h2>
      <p class="text-muted mb-0">${escapeHtml(exampleBody)}</p>
    </section>`
      : '';

  const boundary = tOrEmpty(lang, `topic_${f}_boundary`);
  const related = (ig?.relatedTopics || [])
    .filter((tid) => TOPIC_I18N_KEYS[tid])
    .map((tid) => {
      const href = withLangPath(lang, `${TOPICS_HUB_PATH}/${tid}`);
      const label = t(lang, TOPIC_I18N_KEYS[tid].labelKey);
      return `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`;
    })
    .join('');
  const cites = (ig?.citations || [])
    .map((cite) => {
      const label = tOrEmpty(lang, `topic_${f}_cite_${cite.id}`) || cite.href;
      return `<li><a href="${escapeHtml(cite.href)}" rel="noopener noreferrer" target="_blank">${escapeHtml(label)}</a></li>`;
    })
    .join('');
  const limitsExtra = [
    boundary ? `<p class="text-muted mb-2">${escapeHtml(boundary)}</p>` : '',
    related
      ? `<p class="small fw-semibold mb-1">${escapeHtml(t(lang, 'topics_ig_related'))}</p><ul class="topic-ig-related mb-3">${related}</ul>`
      : '',
    cites
      ? `<p class="small fw-semibold mb-1">${escapeHtml(t(lang, 'topics_ig_refs'))}</p><ul class="topic-ig-refs mb-0">${cites}</ul>`
      : '',
  ].join('');

  const leftoverGrid = leftoverPrimary.length
    ? `<div class="home-card-grid mt-3">${leftoverPrimary.map((tool) => renderToolCard(lang, tool)).join('')}</div>`
    : '';

  const secondaryBlock = secondaryTools.length
    ? `
    <section class="mb-4" id="topic-secondary">
      <h2 class="h4 mb-2">${t(lang, 'topics_secondary_heading')}</h2>
      <div class="home-card-grid">
        ${secondaryTools
          .map((tool) => {
            const sk = topicIgSlugKey(tool.slug);
            const why = tOrEmpty(lang, `topic_${f}_sec_${sk}`);
            return renderToolCard(lang, tool, t(lang, 'home_open'), {
              desc: why || undefined,
            });
          })
          .join('')}
      </div>
    </section>`
    : '';

  const faqKeys = [
    [meta.faqQ1Key, meta.faqA1Key],
    [meta.faqQ2Key, meta.faqA2Key],
    [meta.faqQ3Key, meta.faqA3Key],
    [meta.faqQ4Key, meta.faqA4Key],
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

  const groupedCards = ig
    ? renderGroupedPrimaryCards({ lang, topicId: id, groups: ig.groups })
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
        <section class="mb-4" id="topic-ig-table">
          <h2 class="h4 mb-2">${escapeHtml(tableTitle)}</h2>
          ${tables}
        </section>
        ${flowBlock}
        ${exampleBlock}
        <section class="mb-4">
          <h2 class="h4 mb-2">${t(lang, meta.limitsTitleKey)}</h2>
          <p class="text-muted mb-2">${t(lang, meta.limitsBodyKey)}</p>
          ${limitsExtra}
        </section>
        <section class="mb-4" id="topic-primary">
          <h2 class="h4 mb-2">${t(lang, 'topics_primary_heading')}</h2>
          ${groupedCards}
          ${leftoverGrid}
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
