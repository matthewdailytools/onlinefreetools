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

const slug = 'inspect-video-file-tracks';
const prefix = 'tool_inspect_video_file_tracks';
const withLang = (lang: SiteLang, path: string, defaultLang: SiteLang) => lang === defaultLang ? path : '/' + lang + path;
export const renderInspectVideoFileTracksPage = (opts: { lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[] }) => {
  const path = '/tools/' + slug;
  const canonicalPath = withLang(opts.lang, path, opts.defaultLang);
  const tr = (key: string) => escapeHtml(t(opts.lang, prefix + '_' + key));
  const description = t(opts.lang, prefix + '_description');
  const alternates: HreflangAlternate[] = supportedLangs.map((lang) => ({ lang, href: 'https://onlinefreetools.org' + withLang(lang, path, opts.defaultLang) }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLang(opts.lang, '/', opts.defaultLang), navItems: buildToolPageNavItems(opts.lang, opts.defaultLang), enabledLangs: supportedLangs, langAlternates: Object.fromEntries(supportedLangs.map((lang) => [lang, '/' + lang + path])) });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: slug, currentAnchor: '#track-inspect' }), id: 'toolNav' });
  const contentHtml = [
    '<div id="track-inspect" class="tool-page-heading mb-3"><h1 class="h4">' + tr('title') + '</h1><p>' + tr('desc') + '</p></div>',
    '<section id="itPanel" class="tool-panel">',
    '<label id="itDrop" class="tool-dropzone mb-3" for="itFile"><input id="itFile" type="file" accept="video/*,.mp4,.mov,.webm,.mkv,.m4v" multiple><span class="tool-dropzone-title">' + tr('choose') + '</span><span class="tool-dropzone-hint">' + tr('hint') + '</span><span id="itName" class="tool-dropzone-file"></span></label>',
    '<div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button type="button" id="itInspect" class="btn btn-primary">' + tr('inspect') + '</button><button type="button" id="itStop" class="btn btn-outline-secondary" disabled>' + tr('stop') + '</button><button type="button" id="itSample" class="btn btn-outline-secondary">' + tr('sample') + '</button><button type="button" id="itClear" class="btn btn-outline-secondary">' + tr('clear') + '</button></div>',
    '<div id="itHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div id="itPct" class="bcw-hud-pct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">' + tr('progress') + '</div><div id="itStep" class="bcw-hud-step"></div><div id="itTime" class="bcw-hud-time"></div></div></div><div class="progress" style="height:1.35rem"><div id="itBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li data-step="read">' + tr('read') + '</li><li data-step="tracks">' + tr('tracks') + '</li><li data-step="report">' + tr('report') + '</li></ol></div>',
    '<div id="itEmpty" role="status">' + tr('empty') + '</div><div id="itOutput" hidden><h2 class="h5">' + tr('result_title') + '</h2><p class="small">' + tr('fit_hint') + '</p><div id="itRows"></div></div>',
    '</section>',
  ].join('');
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', howItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
  const tool = getToolBySlug(slug);
  const extraSections = tool ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool }) : '';
  const jsonLd = tool ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool, name: t(opts.lang, prefix + '_title'), description, canonicalPath }) : '';
  const references = renderToolReferencesSection({ lang: opts.lang, links: [{ label: 'Mediabunny — Reading media files', href: 'https://mediabunny.dev/guide/reading-media-files' }, { label: 'Mediabunny — Supported formats and codecs', href: 'https://mediabunny.dev/guide/supported-formats-and-codecs' }] });
  const keys = ['download','done','failed','stopped','summary','track_head','codec_head','detail_head','decode_head','container_fit','video','audio','yes','no','unknown','none','timing','video_detail','audio_detail','err_files','err_limit','err_sample','read','tracks','report'];
  const messages = Object.fromEntries(keys.map((key) => [key, t(opts.lang, prefix + '_' + key)]));
  return renderLayout({ lang: opts.lang, title: t(opts.lang, prefix + '_title') + ' | ' + t(opts.lang, 'brand'), description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: '<div dir="' + (opts.lang === 'ar' ? 'rtl' : 'ltr') + '">' + contentHtml + igHtml + extraSections + references + '</div>', footerHtml: renderFooter({ lang: opts.lang }), extraHeadHtml: '<style>' + bcwHudCss({ hudId: 'itHud', convertBtnId: 'itInspect' }) + '#content{min-width:0;overflow-wrap:anywhere}#itHud.is-error{border-color:#b91c1c;background:#fff1f2}#itDrop{position:relative;min-width:0}#itFile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}#itName,#itRows{overflow-wrap:anywhere}.it-track{border:1px solid #dee2e6;border-radius:.5rem;padding:.65rem;margin:.5rem 0}.it-track strong{display:block}.it-track p{margin:.2rem 0}.it-card{border:1px solid #ced4da;border-radius:.6rem;padding:1rem;margin-bottom:1rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>' + jsonLd, extraBodyHtml: '<script>window.videoTrackInspectMessages=' + JSON.stringify(messages).replace(/</g, '\\u003c') + ';function loadSample(){window.videoTrackInspectLoadSample?.()}</script><script type="module" src="/js/video-track-inspect-ui.mjs"></script>', mainClass: 'container py-4 tool-page', includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a' });
};
