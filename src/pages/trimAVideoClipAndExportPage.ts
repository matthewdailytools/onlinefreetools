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

const slug = 'trim-a-video-clip-and-export';
const prefix = 'tool_trim_a_video_clip_and_export';
const withLang = (lang: SiteLang, path: string, defaultLang: SiteLang) => lang === defaultLang ? path : '/' + lang + path;
export const renderTrimAVideoClipAndExportPage = (opts: { lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[] }) => {
  const path = '/tools/' + slug;
  const canonicalPath = withLang(opts.lang, path, opts.defaultLang);
  const tr = (key: string) => escapeHtml(t(opts.lang, prefix + '_' + key));
  const description = t(opts.lang, prefix + '_description');
  const alternates: HreflangAlternate[] = supportedLangs.map((lang) => ({ lang, href: 'https://onlinefreetools.org' + withLang(lang, path, opts.defaultLang) }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLang(opts.lang, '/', opts.defaultLang), navItems: buildToolPageNavItems(opts.lang, opts.defaultLang), enabledLangs: supportedLangs, langAlternates: Object.fromEntries(supportedLangs.map((lang) => [lang, '/' + lang + path])) });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: slug, currentAnchor: '#video-trim' }), id: 'toolNav' });
  const contentHtml = [
    '<div id="video-trim" class="tool-page-heading mb-3"><h1 class="h4">' + tr('title') + '</h1><p>' + tr('desc') + '</p></div>',
    '<section id="vtPanel" class="tool-panel">',
    '<label id="vtDrop" class="tool-dropzone mb-3" for="vtFile"><input id="vtFile" type="file" accept="video/*,.mp4,.mov,.webm,.m4v"><span class="tool-dropzone-title">' + tr('choose') + '</span><span class="tool-dropzone-hint">' + tr('hint') + '</span><span id="vtName" class="tool-dropzone-file"></span></label>',
    '<div class="row g-2 mb-3"><div class="col-6 col-md-3"><label for="vtStart" class="form-label">' + tr('start') + '</label><input id="vtStart" class="form-control" type="number" min="0" step="0.01" value="2"></div><div class="col-6 col-md-3"><label for="vtEnd" class="form-label">' + tr('end') + '</label><input id="vtEnd" class="form-control" type="number" min="0.01" step="0.01" value="5"></div><div class="col-12 col-md-6"><label class="form-label">' + tr('source_preview') + '</label><video id="vtSource" controls preload="metadata" style="display:block;max-width:100%;width:100%;max-height:180px"></video></div></div>',
    '<div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button type="button" id="vtConvert" class="btn btn-primary">' + tr('convert') + '</button><button type="button" id="vtDownload" class="btn btn-outline-primary" disabled>' + tr('download') + '</button><button type="button" id="vtStop" class="btn btn-outline-secondary" disabled>' + tr('stop') + '</button><button type="button" id="vtSample" class="btn btn-outline-secondary">' + tr('sample') + '</button><button type="button" id="vtClear" class="btn btn-outline-secondary">' + tr('clear') + '</button></div>',
    '<details class="mb-3"><summary>' + tr('advanced') + '</summary><div class="row g-2 mt-1"><div class="col-6 col-md-3"><label for="vtQuality" class="form-label">' + tr('quality') + '</label><select id="vtQuality" class="form-select"><option value="high">' + tr('high') + '</option><option value="medium">' + tr('medium') + '</option><option value="low">' + tr('low') + '</option></select></div><div class="col-6 col-md-3"><label for="vtChannels" class="form-label">' + tr('channels') + '</label><select id="vtChannels" class="form-select"><option value="2">' + tr('stereo') + '</option><option value="1">' + tr('mono') + '</option></select></div></div><p class="form-text">' + tr('settings_hint') + '</p></details>',
    '<div id="vtHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div id="vtPct" class="bcw-hud-pct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">' + tr('progress') + '</div><div id="vtStep" class="bcw-hud-step"></div><div id="vtTime" class="bcw-hud-time"></div></div></div><div class="progress" style="height:1.35rem"><div id="vtBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li data-step="read">' + tr('read') + '</li><li data-step="encode">' + tr('encode') + '</li><li data-step="check">' + tr('check') + '</li></ol></div>',
    '<div id="vtEmpty" role="status">' + tr('empty') + '</div><div id="vtOutput" hidden><h2 class="h5">' + tr('result_title') + '</h2><p id="vtResult"></p><video id="vtVideo" controls preload="metadata" style="max-width:100%;max-height:320px"></video></div>',
    '</section>',
  ].join('');
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', howItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
  const tool = getToolBySlug(slug);
  const extraSections = tool ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool }) : '';
  const jsonLd = tool ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool, name: t(opts.lang, prefix + '_title'), description, canonicalPath }) : '';
  const references = renderToolReferencesSection({ lang: opts.lang, links: [ { label: 'Mediabunny — Converting media files', href: 'https://mediabunny.dev/guide/converting-media-files' }, { label: 'MDN — WebCodecs codec selection', href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API/Codec_selection' } ] });
  const keys = ['elapsed','done','failed','empty','result','silent','source_info','stopped','err_file','err_limit','err_range','err_container','err_codec','err_encoder','err_sample','err_audio','err_video'];
  const messages = Object.fromEntries(keys.map((key) => [key, t(opts.lang, prefix + '_' + key)]));
  return renderLayout({ lang: opts.lang, title: t(opts.lang, prefix + '_title') + ' | ' + t(opts.lang, 'brand'), description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: '<div dir="' + (opts.lang === 'ar' ? 'rtl' : 'ltr') + '">' + contentHtml + igHtml + extraSections + references + '</div>', footerHtml: renderFooter({ lang: opts.lang }), extraHeadHtml: '<style>' + bcwHudCss({ hudId:'vtHud',convertBtnId:'vtConvert' }) + '#content{min-width:0;overflow-wrap:anywhere}#vtHud.is-error{border-color:#b91c1c;background:#fff1f2}#vtDrop{position:relative;min-width:0}#vtFile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}#vtName{overflow-wrap:anywhere}#vtEmpty{padding:.75rem 1rem;border:1px dashed #ced4da;border-radius:.5rem;color:#6c757d}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>' + jsonLd, extraBodyHtml: '<script>window.videoTrimMessages=' + JSON.stringify(messages).replace(/</g, '\\u003c') + ';function loadSample(){window.videoTrimLoadSample?.()}</script><script src="/js/video-trim.js" defer></script>', mainClass:'container py-4 tool-page', includeSidebarToggleScript:true, sidebarAutoCloseSelector:'#toolNav a' });
};
