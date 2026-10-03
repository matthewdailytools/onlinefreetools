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

const slug = 'change-video-speed';
const prefix = 'tool_change_video_speed';
const withLang = (lang: SiteLang, path: string, defaultLang: SiteLang) => lang === defaultLang ? path : '/' + lang + path;
export const renderChangeVideoSpeedPage = (opts: { lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[] }) => {
  const path = '/tools/' + slug;
  const canonicalPath = withLang(opts.lang, path, opts.defaultLang);
  const tr = (key: string) => escapeHtml(t(opts.lang, prefix + '_' + key));
  const description = t(opts.lang, prefix + '_description');
  const alternates: HreflangAlternate[] = supportedLangs.map((lang) => ({ lang, href: 'https://onlinefreetools.org' + withLang(lang, path, opts.defaultLang) }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLang(opts.lang, '/', opts.defaultLang), navItems: buildToolPageNavItems(opts.lang, opts.defaultLang), enabledLangs: supportedLangs, langAlternates: Object.fromEntries(supportedLangs.map((lang) => [lang, '/' + lang + path])) });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: slug, currentAnchor: '#video-speed' }), id: 'toolNav' });
  const contentHtml = [
    '<div id="video-speed" class="tool-page-heading mb-3"><h1 class="h4">' + tr('title') + '</h1><p>' + tr('desc') + '</p></div>',
    '<section id="vsPanel" class="tool-panel">',
    '<label id="vsDrop" class="tool-dropzone mb-3" for="vsFile"><input id="vsFile" type="file" accept="video/*,.mp4,.mov,.webm,.m4v"><span class="tool-dropzone-title">' + tr('choose') + '</span><span class="tool-dropzone-hint">' + tr('hint') + '</span><span id="vsName" class="tool-dropzone-file"></span></label>',
    '<div class="mb-3"><label class="form-label">' + tr('source_preview') + '</label><video id="vsSource" controls preload="metadata" style="display:block;max-width:100%;width:100%;max-height:180px"></video><p id="vsSourceInfo" class="small mt-2"></p></div>',
    '<div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button type="button" id="vsConvert" class="btn btn-primary">' + tr('convert') + '</button><button type="button" id="vsDownload" class="btn btn-outline-primary" disabled>' + tr('download') + '</button><button type="button" id="vsStop" class="btn btn-outline-secondary" disabled>' + tr('stop') + '</button><button type="button" id="vsSample" class="btn btn-outline-secondary">' + tr('sample') + '</button><button type="button" id="vsClear" class="btn btn-outline-secondary">' + tr('clear') + '</button></div>',
    '<div class="row g-2 mb-3"><div class="col-12 col-md-6"><label for="vsRate" class="form-label">' + tr('speed') + '</label><select id="vsRate" class="form-select"><option value="0.5">0.5×</option><option value="0.75">0.75×</option><option value="1.25">1.25×</option><option value="1.5" selected>1.5×</option><option value="2">2×</option></select></div><div class="col-12 col-md-6"><label for="vsAudioMode" class="form-label">' + tr('audio_mode') + '</label><select id="vsAudioMode" class="form-select"><option value="follow">' + tr('follow_pitch') + '</option><option value="preserve">' + tr('preserve_pitch') + '</option><option value="mute">' + tr('mute') + '</option></select></div></div><p id="vsEstimate" class="form-text"></p><p class="form-text">' + tr('settings_hint') + '</p>',
    '<div id="vsHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div id="vsPct" class="bcw-hud-pct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">' + tr('progress') + '</div><div id="vsStep" class="bcw-hud-step"></div><div id="vsTime" class="bcw-hud-time"></div></div></div><div class="progress" style="height:1.35rem"><div id="vsBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li data-step="read">' + tr('read') + '</li><li data-step="encode">' + tr('encode') + '</li><li data-step="check">' + tr('check') + '</li></ol></div>',
    '<div id="vsEmpty" role="status">' + tr('empty') + '</div><div id="vsOutput" hidden><h2 class="h5">' + tr('result_title') + '</h2><p id="vsResult"></p><video id="vsVideo" controls preload="metadata" style="max-width:100%;max-height:320px"></video></div>',
    '</section>',
  ].join('');
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', howItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
  const tool = getToolBySlug(slug);
  const extraSections = tool ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool }) : '';
  const jsonLd = tool ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool, name: t(opts.lang, prefix + '_title'), description, canonicalPath }) : '';
  const references = renderToolReferencesSection({ lang: opts.lang, links: [ { label: 'Mediabunny — Conversion process options', href: 'https://mediabunny.dev/guide/converting-media-files' }, { label: 'MDN — WebCodecs codec selection', href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API/Codec_selection' } ] });
  const keys = ['elapsed','done','failed','empty','result','silent','source_info','stopped','err_file','err_limit','err_settings','err_container','err_codec','err_encoder','err_sample','err_audio','err_video','estimate','audio_follow','audio_preserved','audio_muted','err_pitch_limit'];
  const messages = Object.fromEntries(keys.map((key) => [key, t(opts.lang, prefix + '_' + key)]));
  return renderLayout({ lang: opts.lang, title: t(opts.lang, prefix + '_title') + ' | ' + t(opts.lang, 'brand'), description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: '<div dir="' + (opts.lang === 'ar' ? 'rtl' : 'ltr') + '">' + contentHtml + igHtml + extraSections + references + '</div>', footerHtml: renderFooter({ lang: opts.lang }), extraHeadHtml: '<style>' + bcwHudCss({ hudId:'vsHud',convertBtnId:'vsConvert' }) + '#content{min-width:0;overflow-wrap:anywhere}#vsHud.is-error{border-color:#b91c1c;background:#fff1f2}#vsDrop{position:relative;min-width:0}#vsFile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}#vsRate,#vsAudioMode{width:100%;max-width:100%;min-width:0}#vsName{overflow-wrap:anywhere}#vsEmpty{padding:.75rem 1rem;border:1px dashed #ced4da;border-radius:.5rem;color:#6c757d}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>' + jsonLd, extraBodyHtml: '<script>window.videoSpeedMessages=' + JSON.stringify(messages).replace(/</g, '\\u003c') + ';function loadSample(){window.videoSpeedLoadSample?.()}</script><script src="/js/video-speed.js" defer></script>', mainClass:'container py-4 tool-page', includeSidebarToggleScript:true, sidebarAutoCloseSelector:'#toolNav a' });
};
