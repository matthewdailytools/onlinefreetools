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

const slug = 'convert-subtitle-files-between-srt-vtt-and-ass';
const prefix = 'tool_convert_subtitle_files_between_srt_vtt_and_ass';
const withLang = (lang: SiteLang, path: string, defaultLang: SiteLang) => lang === defaultLang ? path : '/' + lang + path;
export const renderConvertSubtitleFilesBetweenSrtVttAndAssPage = (opts: { lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[] }) => {
  const path = '/tools/' + slug;
  const canonicalPath = withLang(opts.lang, path, opts.defaultLang);
  const tr = (key: string) => escapeHtml(t(opts.lang, prefix + '_' + key));
  const description = t(opts.lang, prefix + '_description');
  const alternates: HreflangAlternate[] = supportedLangs.map((lang) => ({ lang, href: 'https://onlinefreetools.org' + withLang(lang, path, opts.defaultLang) }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLang(opts.lang, '/', opts.defaultLang), navItems: buildToolPageNavItems(opts.lang, opts.defaultLang), enabledLangs: supportedLangs, langAlternates: Object.fromEntries(supportedLangs.map((lang) => [lang, '/' + lang + path])) });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: slug, currentAnchor: '#subtitle-convert' }), id: 'toolNav' });
  const formatOptions = ['vtt', 'srt', 'ass', 'ssa', 'sbv', 'lrc'].map((value) => '<option value="' + value + '">' + value.toUpperCase() + '</option>').join('');
  const encodingOptions = ['utf-8', 'gb18030', 'big5', 'shift_jis', 'windows-1251', 'windows-1252'].map((value) => '<option value="' + value + '">' + value + '</option>').join('');
  const contentHtml = [
    '<div id="subtitle-convert" class="tool-page-heading mb-3"><h1 class="h4">' + tr('title') + '</h1><p>' + tr('desc') + '</p></div>',
    '<section id="scPanel" class="tool-panel">',
    '<label id="scDrop" class="tool-dropzone mb-3" for="scFile"><input id="scFile" type="file" accept=".srt,.vtt,.ass,.ssa,.sbv,.lrc,text/plain,text/vtt" multiple><span class="tool-dropzone-title">' + tr('choose') + '</span><span class="tool-dropzone-hint">' + tr('hint') + '</span><span id="scName" class="tool-dropzone-file"></span></label>',
    '<div class="mb-3"><label for="scTarget" class="form-label">' + tr('target') + '</label><select id="scTarget" class="form-select">' + formatOptions + '</select></div>',
    '<div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button type="button" id="scConvert" class="btn btn-primary">' + tr('convert') + '</button><button type="button" id="scDownloadZip" class="btn btn-outline-primary" disabled>' + tr('download_zip') + '</button><button type="button" id="scStop" class="btn btn-outline-secondary" disabled>' + tr('stop') + '</button><button type="button" id="scSample" class="btn btn-outline-secondary">' + tr('sample') + '</button><button type="button" id="scClear" class="btn btn-outline-secondary">' + tr('clear') + '</button></div>',
    '<details class="mb-3"><summary>' + tr('advanced') + '</summary><div class="row g-2 mt-1"><div class="col-12 col-md-6"><label for="scEncoding" class="form-label">' + tr('encoding') + '</label><select id="scEncoding" class="form-select"><option value="auto">' + tr('auto') + '</option>' + encodingOptions + '</select></div><div class="col-12 col-md-6 d-flex align-items-end"><label class="form-check"><input id="scBom" type="checkbox" class="form-check-input"><span class="form-check-label">' + tr('bom') + '</span></label></div></div></details>',
    '<div id="scHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div id="scPct" class="bcw-hud-pct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">' + tr('progress') + '</div><div id="scStep" class="bcw-hud-step"></div><div id="scTime" class="bcw-hud-time"></div></div></div><div class="progress" style="height:1.35rem"><div id="scBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li data-step="read">' + tr('read') + '</li><li data-step="parse">' + tr('parse') + '</li><li data-step="check">' + tr('check') + '</li></ol></div>',
    '<div id="scEmpty" role="status">' + tr('empty') + '</div><div id="scOutput" hidden><h2 class="h5">' + tr('result_title') + '</h2><p class="small">' + tr('zip_limit') + '</p><div class="table-responsive"><table class="table table-sm"><thead><tr><th>' + tr('name') + '</th><th>' + tr('status') + '</th><th>' + tr('details') + '</th><th>' + tr('download') + '</th></tr></thead><tbody id="scRows"></tbody></table></div></div>',
    '</section>',
  ].join('');
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', howItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
  const tool = getToolBySlug(slug);
  const extraSections = tool ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool }) : '';
  const jsonLd = tool ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool, name: t(opts.lang, prefix + '_title'), description, canonicalPath }) : '';
  const references = renderToolReferencesSection({ lang: opts.lang, links: [{ label: 'W3C — WebVTT', href: 'https://www.w3.org/TR/webvtt1/' }, { label: 'Library of Congress — SubRip SRT', href: 'https://www.loc.gov/preservation/digital/formats/fdd/fdd000569.shtml' }] });
  const keys = ['done','failed','stopped','summary','none','preview','err_files','err_limit','err_zip','err_sample','read','parse','check','download'];
  const messages = Object.fromEntries(keys.map((key) => [key, t(opts.lang, prefix + '_' + key)]));
  return renderLayout({ lang: opts.lang, title: t(opts.lang, prefix + '_title') + ' | ' + t(opts.lang, 'brand'), description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: '<div dir="' + (opts.lang === 'ar' ? 'rtl' : 'ltr') + '">' + contentHtml + igHtml + extraSections + references + '</div>', footerHtml: renderFooter({ lang: opts.lang }), extraHeadHtml: '<style>' + bcwHudCss({ hudId: 'scHud', convertBtnId: 'scConvert' }) + '#content{min-width:0;overflow-wrap:anywhere}#scHud.is-error{border-color:#b91c1c;background:#fff1f2}#scDrop{position:relative;min-width:0}#scFile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}#scName{overflow-wrap:anywhere}#scRows td{overflow-wrap:anywhere;min-width:8rem}@media(max-width:575px){#scOutput table,#scRows,#scRows tr,#scRows td{display:block;width:100%;max-width:100%;min-width:0}#scOutput thead{display:none}#scRows tr{border:1px solid #dee2e6;border-radius:.5rem;margin-bottom:.75rem;padding:.5rem}#scRows td{border:0;padding:.25rem;overflow-wrap:anywhere}#scRows td:last-child button{width:100%}}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>' + jsonLd, extraBodyHtml: '<script>window.subtitleConvertMessages=' + JSON.stringify(messages).replace(/</g, '\\u003c') + ';function loadSample(){window.subtitleConvertLoadSample?.()}</script><script type="module" src="/js/subtitle-convert-ui.mjs"></script>', mainClass: 'container py-4 tool-page', includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a' });
};
