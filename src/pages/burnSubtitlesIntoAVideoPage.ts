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

const SLUG = 'burn-subtitles-into-a-video';
const P = 'tool_burn_subtitles_into_a_video';
const withLang = (lang: SiteLang, path: string, def: SiteLang) => lang === def ? path : `/${lang}${path}`;

export const renderBurnSubtitlesIntoAVideoPage = (opts: { lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[] }) => {
  const toolPath = `/tools/${SLUG}`;
  const canonicalPath = withLang(opts.lang, toolPath, opts.defaultLang);
  const description = t(opts.lang, `${P}_description`);
  const title = `${t(opts.lang, `${P}_title`)} | ${t(opts.lang, 'brand')}`;
  const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));
  const langAlternates = Object.fromEntries(supportedLangs.map((code) => [code, `/${code}${toolPath}`]));
  const alternates: HreflangAlternate[] = supportedLangs.map((code) => ({ lang: code, href: `https://onlinefreetools.org${withLang(code, toolPath, opts.defaultLang)}` }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLang(opts.lang, '/', opts.defaultLang), navItems: buildToolPageNavItems(opts.lang, opts.defaultLang), enabledLangs: supportedLangs, langAlternates });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: SLUG, currentAnchor: '#burn-subtitles' }), id: 'toolNav' });
  const keys = ['load','read','encode','write','done','failed','result','empty','err_file','err_subtitle','err_limit','err_codec','err_encoder','err_format','err_output','err_aborted','err_sample'];
  const messages = Object.fromEntries(keys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));
  const contentHtml = `
    <div id="burn-subtitles" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section id="bsPanel" class="tool-panel">
      <div class="row g-3 mb-3"><div class="col-md-6"><label for="bsVideoFile" class="form-label">${tr('choose_video')}</label><input id="bsVideoFile" type="file" class="form-control" accept="video/*,.mp4,.mov,.webm,.mkv,.m4v"></div><div class="col-md-6"><label for="bsSubtitleFile" class="form-label">${tr('choose_subtitle')}</label><input id="bsSubtitleFile" type="file" class="form-control" accept=".srt,.vtt,text/vtt,text/plain"></div></div>
      <p class="form-text mb-3">${tr('hint')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button id="bsBurn" class="btn btn-primary" type="button">${tr('burn')}</button><button id="bsDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button><button id="bsStop" class="btn btn-outline-secondary" type="button" disabled>${tr('stop')}</button><button id="bsSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button><button id="bsClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button></div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><div class="row g-2 mt-1"><div class="col-sm-4"><label class="form-label" for="bsSize">${tr('size')}</label><input id="bsSize" class="form-control" type="number" min="3" max="12" value="5"></div><div class="col-sm-4"><label class="form-label" for="bsMargin">${tr('margin')}</label><input id="bsMargin" class="form-control" type="number" min="3" max="25" value="8"></div><div class="col-sm-4"><label class="form-label" for="bsColor">${tr('color')}</label><input id="bsColor" class="form-control form-control-color" type="color" value="#ffffff"></div></div><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="bsHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="bsPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div id="bsStep" class="bcw-hud-step"></div><div id="bsTime" class="bcw-hud-time"></div></div></div><div class="progress" style="height:1.35rem"><div id="bsBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li data-step="load">${tr('load')}</li><li data-step="read">${tr('read')}</li><li data-step="encode">${tr('encode')}</li><li data-step="write">${tr('write')}</li></ol><div id="bsCurrent" class="bcw-hud-url"></div></div>
      <p id="bsEmpty" role="status">${tr('empty')}</p><div id="bsOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="bsResult"></p><video id="bsPreview" controls preload="metadata" style="display:block;max-width:100%;max-height:360px"></video></div>
    </section>`;
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix: P, mode: 'rules', howItemCount: 4, whyChooseItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
  const referencesHtml = renderToolReferencesSection({ lang: opts.lang, links: [{ label: 'Mediabunny: Converting media files', href: 'https://mediabunny.dev/guide/converting-media-files' }, { label: 'MDN: WebVTT', href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API' }] });
  const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'bsHud', convertBtnId: 'bsBurn' })}#content{min-width:0;overflow-wrap:anywhere}#bsPanel{min-width:0}#bsPanel .col-md-6{min-width:0}#bsVideoFile,#bsSubtitleFile{width:100%;max-width:100%;min-width:0}#bsHud.is-error{border-color:#b91c1c;background:#fff1f2}#bsPreview{width:100%;max-width:420px}#bsColor{max-width:7rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;
  const extraBodyHtml = `<script>
  (function(){'use strict';
    const M=${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const $=(id)=>document.getElementById(id);
    let file=null, subtitle=null, resultUrl='', cleanup=null, abort=null, busy=false, timer=0, began=0;
    const formatSize=(n)=>n>=1048576?(n/1048576).toFixed(1)+' MiB':(n/1024).toFixed(1)+' KiB';
    const fill=(s,v)=>s.replace(/\\{(\\w+)\\}/g,(_,k)=>String(v[k]??''));
    const stage=(pct,key,detail='')=>{const h=$('bsHud');h.hidden=false;h.classList.add('is-on');$('bsPct').textContent=Math.round(pct)+'%';$('bsBar').style.width=Math.max(0,Math.min(100,pct))+'%';$('bsBar').setAttribute('aria-valuenow',String(Math.round(pct)));$('bsStep').textContent=M[key]||key;$('bsCurrent').textContent=detail;};
    const lock=(on)=>{busy=on;for(const el of $('bsPanel').querySelectorAll('button,input')){if(el.id==='bsStop')el.disabled=!on;else if(el.id==='bsDownload')el.disabled=on||!resultUrl;else el.disabled=on;}$('bsBurn').setAttribute('aria-busy',String(on));};
    async function discard(){const v=$('bsPreview');v.pause();v.removeAttribute('src');v.load();if(resultUrl)URL.revokeObjectURL(resultUrl);resultUrl='';if(cleanup){try{await cleanup()}catch(_){}}cleanup=null;$('bsOutput').hidden=true;$('bsDownload').disabled=true;$('bsEmpty').hidden=false;}
    function reset(){if(abort)abort.abort();file=null;subtitle=null;$('bsVideoFile').value='';$('bsSubtitleFile').value='';discard();$('bsHud').hidden=true;$('bsHud').classList.remove('is-error','is-done');$('bsEmpty').textContent=M.empty;}
    async function run(){if(busy)return;await discard();$('bsHud').classList.remove('is-done','is-error');const video=file||$('bsVideoFile').files[0];const captions=subtitle||$('bsSubtitleFile').files[0];if(!video){stage(0,'err_file');$('bsHud').classList.add('is-error');return}if(!captions){stage(0,'err_subtitle');$('bsHud').classList.add('is-error');return}
      lock(true);abort=new AbortController();began=Date.now();timer=setInterval(()=>$('bsTime').textContent=Math.round((Date.now()-began)/1000)+'s',500);
      try{stage(3,'load',video.name);const mod=await import('/vendor/mediabunny/burn-subtitles.js');stage(8,'read',captions.name);const format=/\\.vtt$/i.test(captions.name)?'vtt':'srt';const text=await captions.text();const out=await mod.burnSubtitles(video,text,format,{fontPercent:+$('bsSize').value,safePercent:+$('bsMargin').value,color:$('bsColor').value,signal:abort.signal,onProgress:(r)=>stage(10+Math.min(1,Math.max(0,r))*84,'encode',video.name)});stage(98,'write',video.name);cleanup=out.cleanup;resultUrl=URL.createObjectURL(out.blob);$('bsPreview').src=resultUrl;$('bsOutput').hidden=false;$('bsEmpty').hidden=true;$('bsResult').textContent=fill(M.result,{cues:out.cues,frames:out.frames,input:formatSize(video.size),output:formatSize(out.blob.size),audio:out.info.audioCodec==='none'?'silent':'AAC'});stage(100,'done',video.name);$('bsHud').classList.add('is-done');}
      catch(e){await discard();const code=e?.code||e?.message;stage(0,M[code]?code:'failed',video.name);$('bsHud').classList.add('is-error');}finally{clearInterval(timer);lock(false);abort=null;}
    }
    $('bsVideoFile').addEventListener('change',()=>{file=$('bsVideoFile').files[0]||null;discard()});$('bsSubtitleFile').addEventListener('change',()=>{subtitle=$('bsSubtitleFile').files[0]||null;discard()});
    for(const id of ['bsSize','bsMargin','bsColor'])$(id).addEventListener('change',discard);
    $('bsBurn').addEventListener('click',run);$('bsClear').addEventListener('click',reset);$('bsStop').addEventListener('click',()=>abort?.abort());
    $('bsDownload').addEventListener('click',()=>{if(!resultUrl)return;const a=document.createElement('a');a.href=resultUrl;a.download=(file?.name||'captioned-video').replace(/\\.[^.]+$/,'')+'-subtitled.mp4';a.click()});
    async function loadSample(){if(busy)return;try{const r=await fetch('/samples/convert-a-webm-file-to-an-mp4-file.webm');if(!r.ok)throw Error();file=new File([await r.blob()],'subtitle-burn-example.webm',{type:'video/webm'});subtitle=new File(['1\\n00:00:00,500 --> 00:00:02,300\\nCaptions burned into the video\\n'],'example.srt',{type:'text/plain'});await run()}catch(_){stage(0,'err_sample');$('bsHud').classList.add('is-error')}}
    $('bsSample').addEventListener('click',loadSample);
    window.addEventListener('pagehide',()=>{abort?.abort();if(resultUrl)URL.revokeObjectURL(resultUrl)});
    setTimeout(loadSample,120);
  })();
  </script>`;
  const toolMeta = getToolBySlug(SLUG);
  const extraSectionsHtml = toolMeta ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta }) : '';
  const toolJsonLd = toolMeta ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta, name: t(opts.lang, `${P}_title`), description, canonicalPath }) : '';
  return renderLayout({ lang: opts.lang, title, description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: `<div dir="${opts.lang === 'ar' ? 'rtl' : 'ltr'}">${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}</div>`, footerHtml: renderFooter({ lang: opts.lang }), extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`, extraBodyHtml, mainClass: 'container py-4 tool-page', includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a' });
};
