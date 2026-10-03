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

const SLUG = 'merge-video-clips-in-order';
const P = 'tool_merge_video_clips_in_order';
const withLang = (lang: SiteLang, path: string, def: SiteLang) => lang === def ? path : `/${lang}${path}`;

export const renderMergeVideoClipsInOrderPage = (opts: { lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[] }) => {
  const toolPath = `/tools/${SLUG}`;
  const canonicalPath = withLang(opts.lang, toolPath, opts.defaultLang);
  const description = t(opts.lang, `${P}_description`);
  const title = `${t(opts.lang, `${P}_title`)} | ${t(opts.lang, 'brand')}`;
  const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));
  const langAlternates = Object.fromEntries(supportedLangs.map((code) => [code, `/${code}${toolPath}`]));
  const alternates: HreflangAlternate[] = supportedLangs.map((code) => ({ lang: code, href: `https://onlinefreetools.org${withLang(code, toolPath, opts.defaultLang)}` }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLang(opts.lang, '/', opts.defaultLang), navItems: buildToolPageNavItems(opts.lang, opts.defaultLang), enabledLangs: supportedLangs, langAlternates });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: SLUG, currentAnchor: '#merge-clips' }), id: 'toolNav' });
  const keys = ['up','down','remove','load','read','encode','write','done','failed','result','empty','err_count','err_limit','err_codec','err_encoder','err_format','err_output','err_aborted','err_sample'];
  const messages = Object.fromEntries(keys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));
  const contentHtml = `
    <div id="merge-clips" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section id="mvPanel" class="tool-panel">
      <label for="mvFiles" class="form-label">${tr('choose')}</label><input id="mvFiles" class="form-control mb-2" type="file" accept="video/*,.mp4,.mov,.webm,.mkv,.m4v" multiple><p class="form-text mb-3">${tr('hint')}</p>
      <ol id="mvList" class="list-group list-group-numbered mb-3" aria-live="polite"></ol>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button id="mvMerge" class="btn btn-primary" type="button">${tr('merge')}</button><button id="mvDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button><button id="mvStop" class="btn btn-outline-secondary" type="button" disabled>${tr('stop')}</button><button id="mvSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button><button id="mvClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button></div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label class="form-label mt-2" for="mvQuality">${tr('quality')}</label><select class="form-select form-select-sm" id="mvQuality" style="max-width:20rem"><option value="medium">${tr('quality_medium')}</option><option value="high">${tr('quality_high')}</option><option value="low">${tr('quality_low')}</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="mvHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="mvPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div id="mvStep" class="bcw-hud-step"></div><div id="mvTime" class="bcw-hud-time"></div></div></div><div class="progress" style="height:1.35rem"><div id="mvBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li data-step="load">${tr('load')}</li><li data-step="read">${tr('read')}</li><li data-step="encode">${tr('encode')}</li><li data-step="write">${tr('write')}</li></ol><div id="mvCurrent" class="bcw-hud-url"></div></div>
      <p id="mvEmpty" role="status">${tr('empty')}</p><div id="mvOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="mvResult"></p><ol id="mvSources" class="small"></ol><video id="mvPreview" controls preload="metadata" style="display:block;max-width:100%;max-height:360px"></video></div>
    </section>`;
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix: P, mode: 'rules', howItemCount: 4, whyChooseItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
  const referencesHtml = renderToolReferencesSection({ lang: opts.lang, links: [{ label: 'Mediabunny: Media sources', href: 'https://mediabunny.dev/guide/media-sources' }, { label: 'Mediabunny: Media sinks', href: 'https://mediabunny.dev/guide/media-sinks' }] });
  const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'mvHud', convertBtnId: 'mvMerge' })}#content{min-width:0;overflow-wrap:anywhere}#mvPanel{min-width:0}#mvFiles{width:100%;min-width:0;max-width:100%}#mvHud.is-error{border-color:#b91c1c;background:#fff1f2}#mvPreview{width:100%;max-width:420px}#mvList .list-group-item{min-width:0;overflow-wrap:anywhere}#mvList .mv-name{min-width:0;flex:1}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;
  const extraBodyHtml = `<script>
  (function(){'use strict';
    const M=${JSON.stringify(messages).replace(/</g, '\\u003c')};const $=(id)=>document.getElementById(id);
    let files=[],url='',cleanup=null,abort=null,busy=false,timer=0,began=0;
    const size=(n)=>n>=1048576?(n/1048576).toFixed(1)+' MiB':(n/1024).toFixed(1)+' KiB';
    const fill=(s,v)=>s.replace(/\\{(\\w+)\\}/g,(_,k)=>String(v[k]??''));
    const stage=(pct,key,detail='')=>{const h=$('mvHud');h.hidden=false;h.classList.add('is-on');$('mvPct').textContent=Math.round(pct)+'%';$('mvBar').style.width=Math.max(0,Math.min(100,pct))+'%';$('mvBar').setAttribute('aria-valuenow',String(Math.round(pct)));$('mvStep').textContent=M[key]||key;$('mvCurrent').textContent=detail;};
    const lock=(on)=>{busy=on;for(const el of $('mvPanel').querySelectorAll('button,input,select')){if(el.id==='mvStop')el.disabled=!on;else if(el.id==='mvDownload')el.disabled=on||!url;else el.disabled=on;}$('mvMerge').setAttribute('aria-busy',String(on));};
    async function discard(){const v=$('mvPreview');v.pause();v.removeAttribute('src');v.load();if(url)URL.revokeObjectURL(url);url='';if(cleanup){try{await cleanup()}catch(_){}}cleanup=null;$('mvOutput').hidden=true;$('mvDownload').disabled=true;$('mvEmpty').hidden=false;}
    function renderRows(){const list=$('mvList');list.replaceChildren();files.forEach((f,i)=>{const li=document.createElement('li');li.className='list-group-item d-flex align-items-center flex-wrap gap-2';const name=document.createElement('span');name.className='mv-name';name.textContent=f.name+' · '+size(f.size);li.append(name);for(const [action,label,enabled] of [['up',M.up,i>0],['down',M.down,i<files.length-1],['remove',M.remove,true]]){const b=document.createElement('button');b.type='button';b.className='btn btn-sm btn-outline-secondary';b.textContent=label;b.setAttribute('aria-label',label+' '+f.name);b.disabled=busy||!enabled;b.addEventListener('click',async()=>{if(busy)return;await discard();if(action==='remove')files.splice(i,1);else{const to=i+(action==='up'?-1:1);[files[i],files[to]]=[files[to],files[i]]}renderRows()});li.append(b)}list.append(li)})}
    async function run(){if(busy)return;await discard();$('mvHud').classList.remove('is-error','is-done');if(files.length<2||files.length>30){stage(0,'err_count');$('mvHud').classList.add('is-error');return}lock(true);abort=new AbortController();began=Date.now();timer=setInterval(()=>$('mvTime').textContent=Math.round((Date.now()-began)/1000)+'s',500);
      try{stage(3,'load',files[0].name);const mod=await import('/vendor/mediabunny/merge-video-clips.js');stage(10,'read',files.map(f=>f.name).join(' → '));const out=await mod.mergeVideoClips(files,{signal:abort.signal,quality:$('mvQuality').value,onProgress:(ratio,index)=>stage(12+Math.max(0,Math.min(1,ratio))*83,'encode',(index+1)+'/'+files.length+' · '+files[index].name)});stage(97,'write');cleanup=out.cleanup;url=URL.createObjectURL(out.blob);$('mvPreview').src=url;$('mvOutput').hidden=false;$('mvEmpty').hidden=true;$('mvResult').textContent=fill(M.result,{count:files.length,duration:Number(out.duration).toFixed(2),width:out.width,height:out.height,input:size(files.reduce((s,f)=>s+f.size,0)),output:size(out.blob.size),audio:out.info.audioCodec==='none'?'silent':'AAC'});const list=$('mvSources');list.replaceChildren();out.clips.forEach((clip,i)=>{const li=document.createElement('li');li.textContent=files[i].name+' · '+clip.videoCodec+'/'+clip.audioCodec+' · '+clip.width+'×'+clip.height+' · '+clip.duration.toFixed(2)+'s';list.append(li)});stage(100,'done');$('mvHud').classList.add('is-done');}
      catch(e){await discard();const code=e?.code||e?.message;stage(0,M[code]?code:'failed');$('mvHud').classList.add('is-error');}finally{clearInterval(timer);lock(false);renderRows();abort=null;}
    }
    $('mvFiles').addEventListener('change',async()=>{files=[...$('mvFiles').files];await discard();renderRows()});$('mvQuality').addEventListener('change',discard);
    $('mvMerge').addEventListener('click',run);$('mvStop').addEventListener('click',()=>abort?.abort());$('mvClear').addEventListener('click',async()=>{if(abort)abort.abort();files=[];$('mvFiles').value='';await discard();renderRows();$('mvHud').hidden=true;$('mvHud').classList.remove('is-error','is-done');$('mvEmpty').textContent=M.empty});
    $('mvDownload').addEventListener('click',()=>{if(!url)return;const a=document.createElement('a');a.href=url;a.download='merged-video-clips.mp4';a.click()});
    async function loadSample(){if(busy)return;try{const names=['/samples/convert-a-webm-file-to-an-mp4-file.webm','/samples/convert-a-mov-file-to-an-mp4-file.mov'];files=await Promise.all(names.map(async(n)=>{const r=await fetch(n);if(!r.ok)throw Error();return new File([await r.blob()],n.split('/').pop(),{type:n.endsWith('.webm')?'video/webm':'video/quicktime'})}));renderRows();await run()}catch(_){stage(0,'err_sample');$('mvHud').classList.add('is-error')}}
    $('mvSample').addEventListener('click',loadSample);window.addEventListener('pagehide',()=>{abort?.abort();if(url)URL.revokeObjectURL(url)});setTimeout(loadSample,120);
  })();
  </script>`;
  const toolMeta = getToolBySlug(SLUG);
  const extraSectionsHtml = toolMeta ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta }) : '';
  const toolJsonLd = toolMeta ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta, name: t(opts.lang, `${P}_title`), description, canonicalPath }) : '';
  return renderLayout({ lang: opts.lang, title, description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: `<div dir="${opts.lang === 'ar' ? 'rtl' : 'ltr'}">${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}</div>`, footerHtml: renderFooter({ lang: opts.lang }), extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`, extraBodyHtml, mainClass: 'container py-4 tool-page', includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a' });
};
