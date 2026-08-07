/**
 * 静态信息页（About / Privacy / Terms / Contact）共用模型构建。
 * 产出与 `getAboutPageModel` 同形的渲染模型，供 `build-site` 写入 `_pages/{lang}/*.html`。
 */
import { t } from '../i18n.mjs';
import { siteConfig, withLangPath, absoluteUrl } from '../config.mjs';
import { buildToolPageNavItems } from '../nav.mjs';

/**
 * 信息页顶栏：与工具页一致（关于、开发日志见页脚）。
 * @param {string} lang 语言代码
 */
export const buildInfoPageNavItems = (lang) => buildToolPageNavItems(lang);

/**
 * 将文案中的 `{email}` 替换为可点击的 mailto 链接（HTML）。
 * @param {string} text 含可选 `{email}` 占位符的文案
 * @param {string} email 公开联系邮箱
 * @returns {string}
 */
export const injectEmailHtml = (text, email) => {
  const safeEmail = String(email || siteConfig.contactEmail || '').trim();
  const mailto = `<a href="mailto:${safeEmail}">${safeEmail}</a>`;
  return String(text || '').split('{email}').join(mailto);
};

/**
 * 构建信息页渲染模型。
 * @param {object} opts
 * @param {string} opts.lang 语言代码
 * @param {string} opts.path 规范路径，如 `/privacy`
 * @param {string} opts.titleKey i18n 标题键
 * @param {string} opts.descriptionKey i18n meta 描述键
 * @param {string} opts.introKey i18n 导语键
 * @param {{id:string,titleKey:string,bodyKey:string}[]} opts.sections 正文分节
 * @param {string} [opts.schemaType='WebPage'] Schema.org @type
 * @param {string} [opts.sidebarId='infoNav'] 侧栏 DOM id
 * @returns {object} 供 layout 使用的页面模型
 */
export const getInfoPageModel = ({
  lang,
  path,
  titleKey,
  descriptionKey,
  introKey,
  sections,
  schemaType = 'WebPage',
  sidebarId = 'infoNav',
}) => {
  const titleText = t(lang, titleKey);
  const description = t(lang, descriptionKey);
  const canonicalPath = withLangPath(lang, path);
  const email = siteConfig.contactEmail;

  const sectionHtml = (sections || [])
    .map(
      (sec) => `
      <section id="${sec.id}" class="mb-4">
        <h2 class="h5">${t(lang, sec.titleKey)}</h2>
        <p>${injectEmailHtml(t(lang, sec.bodyKey), email)}</p>
      </section>`
    )
    .join('');

  const contentHtml = `
    <article class="mb-4">
      <h1 class="h3 mb-3">${titleText}</h1>
      <p class="lead text-muted">${injectEmailHtml(t(lang, introKey), email)}</p>
      ${sectionHtml}
    </article>
  `;

  const sidebarItems = (sections || []).map((sec) => ({
    href: `#${sec.id}`,
    label: t(lang, sec.titleKey),
  }));

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: titleText,
    description,
    url: absoluteUrl(canonicalPath),
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.brand,
      url: siteConfig.baseUrl,
    },
  });

  return {
    title: `${titleText} | ${siteConfig.brand}`,
    description,
    canonicalPath,
    navItems: buildInfoPageNavItems(lang),
    sidebarTitle: titleText,
    sidebarItems,
    sidebarId,
    contentHtml,
    jsonLd,
  };
};
