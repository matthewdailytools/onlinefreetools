import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import { renderToolExtraSections, renderToolIgSections, renderToolReferencesSection, buildToolJsonLd } from './site/toolContent';

const slug = 'sync-song-lyrics-to-lrc-by-tapping';
const prefix = 'tool_sync_song_lyrics_to_lrc_by_tapping';
const withLang = (lang: SiteLang, path: string, defaultLang: SiteLang) => lang === defaultLang ? path : '/' + lang + path;
export const renderSyncSongLyricsToLrcByTappingPage = (opts: { lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[] }) => {
  const path = '/tools/' + slug;
  const canonicalPath = withLang(opts.lang, path, opts.defaultLang);
  const tr = (key: string) => escapeHtml(t(opts.lang, prefix + '_' + key));
  const description = t(opts.lang, prefix + '_description');
  const alternates: HreflangAlternate[] = supportedLangs.map((lang) => ({ lang, href: 'https://onlinefreetools.org' + withLang(lang, path, opts.defaultLang) }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLang(opts.lang, '/', opts.defaultLang), navItems: buildToolPageNavItems(opts.lang, opts.defaultLang), enabledLangs: supportedLangs, langAlternates: Object.fromEntries(supportedLangs.map((lang) => [lang, '/' + lang + path])) });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: slug, currentAnchor: '#lyric-sync' }), id: 'toolNav' });
  const contentHtml = [
    '<div id="lyric-sync" class="tool-page-heading mb-3"><h1 class="h4">' + tr('title') + '</h1><p>' + tr('desc') + '</p></div>',
    '<section class="tool-panel"><label class="tool-dropzone mb-2" for="lsFile"><input id="lsFile" type="file" accept="audio/*,.mp3,.m4a,.wav,.ogg,.flac"><span class="tool-dropzone-title">' + tr('choose') + '</span><span class="tool-dropzone-hint">' + tr('hint') + '</span><span id="lsName" class="tool-dropzone-file"></span></label>',
    '<audio id="lsAudio" controls preload="metadata" class="w-100 mb-2"></audio>',
    '<label for="lsLyrics" class="form-label">' + tr('lyrics_label') + '</label><textarea id="lsLyrics" rows="5" class="form-control mb-2" placeholder="' + tr('lyrics_placeholder') + '"></textarea>',
    '<div class="tools-bar d-flex flex-wrap mb-2" style="gap:.5rem"><button type="button" id="lsPrepare" class="btn btn-primary">' + tr('prepare') + '</button><button type="button" id="lsTap" class="btn btn-outline-primary">' + tr('tap') + '</button><button type="button" id="lsDownload" class="btn btn-outline-primary" disabled>' + tr('download') + '</button><button type="button" id="lsSample" class="btn btn-outline-secondary">' + tr('sample') + '</button><button type="button" id="lsClear" class="btn btn-outline-secondary">' + tr('clear') + '</button></div>',
    '<details class="mb-3"><summary>' + tr('settings') + '</summary><div class="row g-2 mt-1"><div class="col-sm-6"><label for="lsOffset" class="form-label">' + tr('offset') + '</label><input id="lsOffset" type="number" min="-60000" max="60000" step="100" value="0" class="form-control form-control-sm"><div class="form-text">' + tr('offset_hint') + '</div></div><div class="col-sm-6"><label for="lsSpeed" class="form-label">' + tr('speed') + '</label><select id="lsSpeed" class="form-select form-select-sm"><option value="0.75">0.75×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option></select></div></div></details>',
    '<div id="lsStatus" role="status" aria-live="polite" class="mb-2"></div><div id="lsCurrent" class="ls-current mb-2"></div><div id="lsRows"></div><label for="lsPreview" class="form-label mt-2">' + tr('preview') + '</label><textarea id="lsPreview" class="form-control" rows="7" readonly></textarea></section>'
  ].join('');
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', howItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
  const tool = getToolBySlug(slug);
  const extraSections = tool ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool }) : '';
  const jsonLd = tool ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool, name: t(opts.lang, prefix + '_title'), description, canonicalPath }) : '';
  const references = renderToolReferencesSection({ lang: opts.lang, links: [{ label: 'MDN — HTMLMediaElement.currentTime', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime' }, { label: 'LRC file format', href: 'https://en.wikipedia.org/wiki/LRC_(file_format)' }] });
  const keys = ['choose','hint','prepare','tap','download','sample','clear','status_ready','status_next','status_missing','status_order','status_empty','status_audio','status_play','status_done','status_limit','status_negative','retap','earlier','later','preview','sample_lines'];
  const messages = Object.fromEntries(keys.map((key) => [key, t(opts.lang, prefix + '_' + key)]));
  return renderLayout({ lang: opts.lang, title: t(opts.lang, prefix + '_title') + ' | ' + t(opts.lang, 'brand'), description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: '<div dir="' + (opts.lang === 'ar' ? 'rtl' : 'ltr') + '">' + contentHtml + igHtml + extraSections + references + '</div>', footerHtml: renderFooter({ lang: opts.lang }), extraHeadHtml: '<style>#content{min-width:0;overflow-wrap:anywhere}.tool-panel{min-width:0}#lsAudio{display:block;width:100%;max-width:300px;min-width:0}#lsFile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.tool-dropzone{position:relative}.ls-current{font-weight:700;font-size:1.2rem;padding:.6rem;background:#e6f8f3;border-radius:.5rem}.ls-row{display:grid;grid-template-columns:minmax(0,1fr) auto auto auto;gap:.35rem;align-items:center;padding:.45rem;border-bottom:1px solid #ddd}.ls-row span{overflow-wrap:anywhere}.ls-row button{min-width:2.5rem}@media(max-width:560px){.ls-row{grid-template-columns:minmax(0,1fr) auto auto}.ls-row .ls-retap{grid-column:1/-1}}</style>' + jsonLd, extraBodyHtml: '<script>window.lyricSyncMessages=' + JSON.stringify(messages).replace(/</g, '\u003c') + ';function loadSample(){window.lyricSyncLoadSample?.()}</script><script type="module" src="/js/lyric-sync-ui.mjs"></script>', mainClass: 'container py-4 tool-page', includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a' });
};
