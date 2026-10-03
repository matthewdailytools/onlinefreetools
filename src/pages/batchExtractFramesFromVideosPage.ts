import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import { renderToolExtraSections, renderToolIgSections, renderToolReferencesSection, buildToolJsonLd } from './site/toolContent';
import { bcwHudCss } from './site/bcwHudCss';

const slug = 'batch-extract-frames-from-videos';
const prefix = 'tool_batch_extract_frames_from_videos';
const withLang = (lang: SiteLang, path: string, defaultLang: SiteLang) => lang === defaultLang ? path : '/' + lang + path;

export const renderBatchExtractFramesFromVideosPage = (opts: { lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[] }) => {
  const path = '/tools/' + slug;
  const canonicalPath = withLang(opts.lang, path, opts.defaultLang);
  const tr = (key: string) => escapeHtml(t(opts.lang, prefix + '_' + key));
  const description = t(opts.lang, prefix + '_description');
  const alternates: HreflangAlternate[] = supportedLangs.map((lang) => ({ lang, href: 'https://onlinefreetools.org' + withLang(lang, path, opts.defaultLang) }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLang(opts.lang, '/', opts.defaultLang), navItems: buildToolPageNavItems(opts.lang, opts.defaultLang), enabledLangs: supportedLangs, langAlternates: Object.fromEntries(supportedLangs.map((lang) => [lang, '/' + lang + path])) });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: slug, currentAnchor: '#batch-video-frames' }), id: 'toolNav' });
  const contentHtml = `
    <div id="batch-video-frames" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section id="bvfPanel" class="tool-panel">
      <label class="tool-dropzone mb-3" for="bvfFile"><input id="bvfFile" type="file" multiple accept="video/*,.mp4,.webm,.mov,.m4v,.mkv"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="bvfName" class="tool-dropzone-file"></span></label>
      <label for="bvfTimes" class="form-label">${tr('times_label')}</label><input id="bvfTimes" type="text" class="form-control mb-1" value="1, 3" inputmode="decimal" aria-describedby="bvfTimesHint"><p id="bvfTimesHint" class="form-text mb-3">${tr('times_hint')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button id="bvfExtract" type="button" class="btn btn-primary">${tr('extract')}</button><button id="bvfZip" type="button" class="btn btn-outline-primary" disabled>${tr('zip')}</button><button id="bvfStop" type="button" class="btn btn-outline-secondary" disabled>${tr('stop')}</button><button id="bvfSample" type="button" class="btn btn-outline-secondary">${tr('sample')}</button><button id="bvfClear" type="button" class="btn btn-outline-secondary">${tr('clear')}</button></div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><div class="row g-2 mt-1"><div class="col-sm-6"><label for="bvfWidth" class="form-label">${tr('width')}</label><select id="bvfWidth" class="form-select"><option value="320">320 px</option><option value="640" selected>640 px</option><option value="1280">1280 px</option></select></div><div class="col-sm-6"><label for="bvfQuality" class="form-label">${tr('quality')}</label><select id="bvfQuality" class="form-select"><option value="0.7">70%</option><option value="0.85" selected>85%</option><option value="0.95">95%</option></select></div></div><p class="form-text mt-2">${tr('settings_hint')}</p></details>
      <div id="bvfHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="bvfPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div id="bvfStep" class="bcw-hud-step"></div></div></div><div class="progress" style="height:1.35rem"><div id="bvfBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li>${tr('read')}</li><li>${tr('seek')}</li><li>${tr('save')}</li><li>${tr('pack')}</li></ol></div>
      <div id="bvfEmpty" class="bvf-empty" role="status">${tr('empty')}</div><ul id="bvfList" class="list-group mb-3" aria-live="polite"></ul><div id="bvfOutput" hidden><h2 class="h5">${tr('result_title')}</h2><p id="bvfResult"></p></div>
    </section>`;
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', howItemCount: 4, whyChooseItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
  const tool = getToolBySlug(slug);
  const extraSections = tool ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool }) : '';
  const jsonLd = tool ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool, name: t(opts.lang, prefix + '_title'), description, canonicalPath }) : '';
  const references = renderToolReferencesSection({ lang: opts.lang, links: [ { label: 'MDN — Drawing video on canvas', href: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images' }, { label: 'MDN — HTMLMediaElement seeking', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seeking_event' } ] });
  const messages = Object.fromEntries(['queue_count','status_pending','status_running','current','frame_status','row_ok','result','done','failed','empty','read','seek','save','pack','err_files','err_file','err_times','err_budget','err_decode','err_short','err_seek','err_encode','err_none','err_zip','err_sample','stopped'].map((key) => [key, t(opts.lang, prefix + '_' + key)]));
  const safeMessages = JSON.stringify(messages).replace(/</g, '\\u003c');
  return renderLayout({ lang: opts.lang, title: t(opts.lang, prefix + '_title') + ' | ' + t(opts.lang, 'brand'), description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: '<div dir="' + (opts.lang === 'ar' ? 'rtl' : 'ltr') + '">' + contentHtml + igHtml + extraSections + references + '</div>', footerHtml: renderFooter({ lang: opts.lang }), extraHeadHtml: '<style>' + bcwHudCss({ hudId: 'bvfHud', convertBtnId: 'bvfExtract' }) + '#bvfHud.is-error{border-color:#b91c1c;background:#fff1f2}.bvf-empty{padding:.75rem 1rem;border:1px dashed #ced4da;border-radius:.5rem;color:#6c757d}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>' + jsonLd, extraBodyHtml: '<script>window.batchVideoFramesMessages=' + safeMessages + ';function loadSample(){window.batchVideoFramesLoadSample?.()}</script><script src="/js/batch-video-frames.js" defer></script>', mainClass: 'container py-4 tool-page', includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a' });
};
