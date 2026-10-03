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

const slug = 'batch-make-srt-subtitles-from-audio-files';
const prefix = 'tool_batch_make_srt_subtitles_from_audio_files';
const speechLanguages: Array<[string, string]> = [["en", "english"], ["zh", "chinese"], ["de", "german"], ["es", "spanish"], ["ru", "russian"], ["ko", "korean"], ["fr", "french"], ["ja", "japanese"], ["pt", "portuguese"], ["tr", "turkish"], ["pl", "polish"], ["ca", "catalan"], ["nl", "dutch"], ["ar", "arabic"], ["sv", "swedish"], ["it", "italian"], ["id", "indonesian"], ["hi", "hindi"], ["fi", "finnish"], ["vi", "vietnamese"], ["he", "hebrew"], ["uk", "ukrainian"], ["el", "greek"], ["ms", "malay"], ["cs", "czech"], ["ro", "romanian"], ["da", "danish"], ["hu", "hungarian"], ["ta", "tamil"], ["no", "norwegian"], ["th", "thai"], ["ur", "urdu"], ["hr", "croatian"], ["bg", "bulgarian"], ["lt", "lithuanian"], ["la", "latin"], ["mi", "maori"], ["ml", "malayalam"], ["cy", "welsh"], ["sk", "slovak"], ["te", "telugu"], ["fa", "persian"], ["lv", "latvian"], ["bn", "bengali"], ["sr", "serbian"], ["az", "azerbaijani"], ["sl", "slovenian"], ["kn", "kannada"], ["et", "estonian"], ["mk", "macedonian"], ["br", "breton"], ["eu", "basque"], ["is", "icelandic"], ["hy", "armenian"], ["ne", "nepali"], ["mn", "mongolian"], ["bs", "bosnian"], ["kk", "kazakh"], ["sq", "albanian"], ["sw", "swahili"], ["gl", "galician"], ["mr", "marathi"], ["pa", "punjabi"], ["si", "sinhala"], ["km", "khmer"], ["sn", "shona"], ["yo", "yoruba"], ["so", "somali"], ["af", "afrikaans"], ["oc", "occitan"], ["ka", "georgian"], ["be", "belarusian"], ["tg", "tajik"], ["sd", "sindhi"], ["gu", "gujarati"], ["am", "amharic"], ["yi", "yiddish"], ["lo", "lao"], ["uz", "uzbek"], ["fo", "faroese"], ["ht", "haitian creole"], ["ps", "pashto"], ["tk", "turkmen"], ["nn", "nynorsk"], ["mt", "maltese"], ["sa", "sanskrit"], ["lb", "luxembourgish"], ["my", "myanmar"], ["bo", "tibetan"], ["tl", "tagalog"], ["mg", "malagasy"], ["as", "assamese"], ["tt", "tatar"], ["haw", "hawaiian"], ["ln", "lingala"], ["ha", "hausa"], ["ba", "bashkir"], ["jw", "javanese"], ["su", "sundanese"]];
const withLang = (lang: SiteLang, path: string, defaultLang: SiteLang) => lang === defaultLang ? path : '/' + lang + path;
export const renderBatchMakeSrtSubtitlesFromAudioFilesPage = (opts: {lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[]}) => {
  const path = '/tools/' + slug, canonicalPath = withLang(opts.lang,path,opts.defaultLang);
  const tr = (key: string) => escapeHtml(t(opts.lang,prefix+'_'+key));
  const description = t(opts.lang,prefix+'_description');
  const alternates: HreflangAlternate[] = supportedLangs.map(lang=>({lang,href:'https://onlinefreetools.org'+withLang(lang,path,opts.defaultLang)}));
  const headerHtml = renderHeader({lang:opts.lang,brandHref:withLang(opts.lang,'/',opts.defaultLang),navItems:buildToolPageNavItems(opts.lang,opts.defaultLang),enabledLangs:supportedLangs,langAlternates:Object.fromEntries(supportedLangs.map(lang=>[lang,'/'+lang+path]))});
  const sidebarHtml = renderSidebar({title:t(opts.lang,'nav_tools'),groups:buildToolSidebarItems({lang:opts.lang,defaultLang:opts.defaultLang,currentSlug:slug,currentAnchor:'#batch-audio-srt'}),id:'toolNav'});
  const languageOptions = speechLanguages.map(([code,name])=>`<option value="${escapeHtml(name)}">${escapeHtml(name)} (${code})</option>`).join('');
  const contentHtml = `
    <div id="batch-audio-srt" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section id="basPanel" class="tool-panel">
      <label class="tool-dropzone mb-3" for="basFile"><input id="basFile" type="file" multiple accept="audio/*,.wav,.mp3,.m4a,.aac,.ogg,.opus,.flac,.aiff,.aif,.webm"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span></label>
      <p id="basMeta" class="form-text mb-2">${tr('count').replace('{n}','0')}</p>
      <label for="basLang" class="form-label">${tr('language_label')}</label><select id="basLang" class="form-select mb-1"><option value="auto" selected>${tr('language_auto')}</option>${languageOptions}</select><p class="form-text mb-3">${tr('language_hint')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button id="basMake" type="button" class="btn btn-primary">${tr('make')}</button><button id="basStop" type="button" class="btn btn-outline-secondary" disabled>${tr('stop')}</button><button id="basSample" type="button" class="btn btn-outline-secondary">${tr('sample')}</button><button id="basClear" type="button" class="btn btn-outline-secondary">${tr('clear')}</button></div>
      <div id="basHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="basPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div id="basStep" class="bcw-hud-step"></div></div></div><div class="progress" style="height:1.35rem"><div id="basBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li>${tr('step_model')}</li><li>${tr('step_decode')}</li><li>${tr('step_transcribe')}</li><li>${tr('step_write')}</li></ol></div>
      <div id="basEmpty" class="bas-empty" role="status">${tr('empty')}</div><ul id="basList" class="list-group mb-3" aria-live="polite"></ul><div id="basOutput" hidden><h2 class="h5">${tr('result_title')}</h2><p id="basResult"></p></div>
    </section>`;
  const igHtml = renderToolIgSections({lang:opts.lang,prefix,mode:'rules',howItemCount:4,whyChooseItemCount:4,ruleItemCount:4,usecaseCount:3});
  const tool=getToolBySlug(slug);
  const extraSections=tool?renderToolExtraSections({lang:opts.lang,defaultLang:opts.defaultLang,tool}):'';
  const jsonLd=tool?buildToolJsonLd({lang:opts.lang,defaultLang:opts.defaultLang,tool,name:t(opts.lang,prefix+'_title'),description,canonicalPath}):'';
  const references=renderToolReferencesSection({lang:opts.lang,links:[{label:'Whisper — multilingual speech recognition',href:'https://github.com/openai/whisper'},{label:'MDN — AudioBuffer',href:'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer'}]});
  const messages=Object.fromEntries(['pending','running','ready','partial','stopped','edit_label','download_one','count','result','done','failed','status_model','model_progress','decode','transcribe','window','err_files','err_format','err_limit','err_unsupported','err_decode','err_transcribe','err_empty','err_none','err_model','err_sample'].map(key=>[key,t(opts.lang,prefix+'_'+key)]));
  const safeMessages=JSON.stringify(messages).replace(/</g,'\\u003c');
  return renderLayout({lang:opts.lang,title:t(opts.lang,prefix+'_title')+' | '+t(opts.lang,'brand'),description,canonicalPath,ogImageUrl:'https://onlinefreetools.org/og-image.png',ogType:'website',alternates,headerHtml,sidebarHtml,contentHtml:'<div dir="'+(opts.lang==='ar'?'rtl':'ltr')+'">'+contentHtml+igHtml+extraSections+references+'</div>',footerHtml:renderFooter({lang:opts.lang}),extraHeadHtml:'<style>'+bcwHudCss({hudId:'basHud',convertBtnId:'basMake'})+'#basHud.is-error{border-color:#b91c1c;background:#fff1f2}.bas-empty{padding:.75rem 1rem;border:1px dashed #ced4da;border-radius:.5rem;color:#6c757d}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>'+jsonLd,extraBodyHtml:'<script>window.batchAudioSrtMessages='+safeMessages+';function loadSample(){window.batchAudioSrtLoadSample?.()}</script><script src="/js/batch-audio-srt.js" defer></script>',mainClass:'container py-4 tool-page',includeSidebarToggleScript:true,sidebarAutoCloseSelector:'#toolNav a'});
};
