/**
 * 工具卡片渲染：首页分类区与场景/对象列表页共用。
 */
import { t } from '../i18n.mjs';
import { withLangPath } from '../config.mjs';
import { getToolLogoUrl } from '../tool-catalog.mjs';

/** 站内打开工具/说明页：一律新标签，避免冲掉列表页滚动位置 */
const NEW_TAB = ' target="_blank" rel="noopener noreferrer"';

/**
 * 是否在卡片显示「不上传」标签（纯本地处理；缺省 true）。
 * @param {{localProcessing?: boolean}} tool
 */
export const showNoUploadTag = (tool) => tool.localProcessing !== false;

/**
 * 渲染「不上传」标签（链到隐私政策本地处理说明）。
 * 用 aria-label 代替长 title，减少首页重复属性字节。
 * @param {string} lang
 * @returns {string}
 */
export const renderNoUploadTag = (lang) => {
  const href = `${withLangPath(lang, '/privacy')}#local`;
  const label = t(lang, 'home_tag_no_upload');
  const title = t(lang, 'home_tag_no_upload_title');
  return `<a class="tool-no-upload-tag" href="${href}" aria-label="${title}"${NEW_TAB}>${label}</a>`;
};

/**
 * 渲染分类区工具卡片。
 * @param {{title:string,desc:string,href:string,cta:string,logo:string,noUploadHtml?:string,logoLoading?:'lazy'|'eager',logoFetchPriority?:'high'|'low'}} opts
 * @returns {string}
 */
export const renderToolEntryCard = ({
  title,
  desc,
  href,
  cta,
  logo,
  noUploadHtml = '',
  logoLoading = 'lazy',
  logoFetchPriority,
}) => {
  const prio = logoFetchPriority ? ` fetchpriority="${logoFetchPriority}"` : '';
  return `
  <div class="home-card-item">
    <div class="card tool-entry-card h-100 d-flex flex-column">
      <div class="card-body d-flex flex-column">
        <div class="tool-card-head">
          <img class="tool-card-logo" src="${logo}" width="32" height="32" alt="" decoding="async" loading="${logoLoading}"${prio} />
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
};

/**
 * 将目录条目渲染为分类区卡片 HTML。
 * @param {string} lang
 * @param {object} tool
 * @param {string} [cta]
 * @param {{logoEager?: boolean, desc?: string}} [opts] logoEager=true 时首屏优先拉取图标；desc 覆盖首页 homeDesc
 */
export const renderToolCard = (lang, tool, cta, opts = {}) =>
  renderToolEntryCard({
    title: t(lang, tool.homeTitleKey),
    desc: opts.desc || t(lang, tool.homeDescKey),
    href: withLangPath(lang, tool.path),
    logo: getToolLogoUrl(tool),
    cta: cta || t(lang, 'home_open'),
    noUploadHtml: showNoUploadTag(tool) ? renderNoUploadTag(lang) : '',
    logoLoading: opts.logoEager ? 'eager' : 'lazy',
    /** 仅首屏 eager 标 high；其余不写 fetchpriority，省属性字节 */
    logoFetchPriority: opts.logoEager ? 'high' : undefined,
  });

/**
 * 渲染工具卡片网格。
 * @param {string} lang
 * @param {object[]} tools
 */
export const renderToolCardGrid = (lang, tools) => {
  const openCta = t(lang, 'home_open');
  return `
    <div class="home-card-grid">
      ${tools.map((tool) => renderToolCard(lang, tool, openCta)).join('')}
    </div>`;
};
