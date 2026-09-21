/** Shared accessible file-processing shell for the four September 2026 batch tools. */
import { t, supportedLangs, type SiteLang } from '../../site/i18n';
import { renderLayout, escapeHtml } from './layout';
import { renderHeader } from './header';
import { renderFooter } from './footer';
import { buildToolPageNavItems } from './nav';
import { renderSidebar, buildToolSidebarItems } from './sidebar';
import { getToolBySlug } from '../../site/tools';
import { renderToolIgSections, renderToolExtraSections, buildToolJsonLd } from './toolContent';
import { bcwHudCss } from './bcwHudCss';

export type WorkbenchOptions = { lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[] };
export function renderLocalFileWorkbench(opts: WorkbenchOptions, config: {
 slug: string; accept: string; multiple: boolean; settings: (label: (key: string) => string) => string;
 runtime: string; messages: string[]; referencesHtml: string; editable?: boolean;
}) {
 const prefix = 'tool_' + config.slug.replace(/-/g, '_');
 const tr = (key: string) => t(opts.lang, `${prefix}_${key}` as any);
 const label = (key: string) => escapeHtml(tr(key));
 const path = '/tools/' + config.slug;
 const lp = (lang: SiteLang, p: string) => lang === opts.defaultLang ? p : '/' + lang + p;
 const canonicalPath = lp(opts.lang, path);
 const tool = getToolBySlug(config.slug)!;
 const keys = ['ready','working','done','failed','skipped','empty','limit','invalid','load_error','report','file','status','before','after','detail','prepare','process','package','elapsed',...config.messages];
 const messages = Object.fromEntries(keys.map(k => [k, tr(k)]));
 const content = `<div id="workbench"><h1 class="h4">${label('title')}</h1><p>${label('intro')}</p>
 <label class="tool-dropzone mb-3" id="drop" for="files"><input id="files" type="file" accept="${config.accept}" ${config.multiple ? 'multiple' : ''}><span class="tool-dropzone-title">${label('choose')}</span><span class="tool-dropzone-hint">${label('limits')}</span><span class="tool-dropzone-file" id="selection"></span></label>
 <details class="mb-3"><summary>${label('settings')}</summary><fieldset id="settings" class="p-3 d-flex flex-wrap gap-3">${config.settings(label)}</fieldset></details>
 <div class="d-flex flex-wrap gap-2 mb-3"><button class="btn btn-primary" id="run">${label('process')}</button><button class="btn btn-success" id="download" disabled>${label('download')}</button><button class="btn btn-outline-secondary" id="sample">${label('sample')}</button><button class="btn btn-outline-secondary" id="clear">${label('clear')}</button></div>
 <section id="hud" class="bcw-hud mb-3" hidden aria-live="polite"><div class="bcw-hud-top"><span class="bcw-hud-spin" aria-hidden="true"></span><strong class="bcw-hud-pct" id="percent">0%</strong><div class="bcw-hud-copy"><div id="message" class="bcw-hud-title"></div><div id="current" class="bcw-hud-step"></div><div id="elapsed" class="bcw-hud-time"></div></div></div><div class="progress" role="progressbar" aria-label="${label('process')}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar" id="bar" style="width:0%"></div></div><ol class="bcw-hud-steps"><li>${label('prepare')}</li><li>${label('process')}</li><li>${label('package')}</li></ol></section>
 <div class="table-responsive"><table class="table"><thead><tr>${['file','status','before','after','detail'].map(k=>'<th scope="col">'+label(k)+'</th>').join('')}</tr></thead><tbody id="results"></tbody></table></div>
 ${config.editable ? `<label for="text">${label('output')}</label><textarea id="text" class="form-control" rows="12" spellcheck="false"></textarea>` : '<div id="previews" class="d-flex flex-wrap gap-3"></div>'}</div>`;
 const json = JSON.stringify(messages).replace(/</g, '\\u003c');
 const extraBodyHtml = `<script>(()=>{'use strict';const M=${json};${workbenchRuntime}\n${config.runtime}\n})();</script>`;
 return renderLayout({lang:opts.lang,title:tr('title')+' | '+t(opts.lang,'brand'),description:tr('description'),canonicalPath,ogImageUrl:'https://onlinefreetools.org/og-image.png',ogType:'website',
 alternates:supportedLangs.map(lang=>({lang,href:'https://onlinefreetools.org'+lp(lang,path)})),
 headerHtml:renderHeader({lang:opts.lang,brandHref:lp(opts.lang,'/'),navItems:buildToolPageNavItems(opts.lang,opts.defaultLang),enabledLangs:supportedLangs,langAlternates:Object.fromEntries(supportedLangs.map(lang=>[lang,'/'+lang+path]))}),
 sidebarHtml:renderSidebar({title:t(opts.lang,'nav_tools'),groups:buildToolSidebarItems({lang:opts.lang,defaultLang:opts.defaultLang,currentSlug:config.slug,currentAnchor:'#workbench'}),id:'toolNav'}),footerHtml:renderFooter({lang:opts.lang}),
 contentHtml:content+renderToolIgSections({lang:opts.lang,prefix,mode:'rules',howItemCount:4,ruleItemCount:3,usecaseCount:3,whyChooseItemCount:3})+renderToolExtraSections({lang:opts.lang,defaultLang:opts.defaultLang,tool})+config.referencesHtml,
 extraHeadHtml:'<style>'+bcwHudCss({hudId:'hud',convertBtnId:'run'})+'.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;align-items:center;justify-content:center;max-width:100%}#settings label{display:flex;flex-direction:column;gap:.3rem}#workbench table{min-width:36rem}#workbench th,#results td:nth-child(3),#results td:nth-child(4){white-space:nowrap}#results td{max-width:24rem;overflow-wrap:anywhere}#previews img{width:160px;height:160px;object-fit:contain;border:1px solid #ddd}#previews figure{max-width:340px}#previews figcaption{overflow-wrap:anywhere}</style>'+buildToolJsonLd({lang:opts.lang,defaultLang:opts.defaultLang,tool,name:tr('title'),description:tr('description'),canonicalPath}),extraBodyHtml,includeSidebarToggleScript:true,sidebarAutoCloseSelector:'#toolNav a'});
}

/** Runs only in the page. All user strings go through textContent; downloads use Blob URLs. */
const workbenchRuntime = String.raw`
const $=id=>document.getElementById(id), yieldUi=()=>new Promise(r=>setTimeout(r,0));
let files=[], busy=false, output=null, outputName='', urls=[], rows=[], started=0, timer=null, selectionVersion=0;
const release=()=>{urls.forEach(u=>URL.revokeObjectURL(u));urls=[];};
function invalidate(){output=null;$('download').disabled=true;$('results').replaceChildren();rows=[];release();if($('text'))$('text').value='';if($('previews'))$('previews').replaceChildren();$('hud').hidden=true;}
function progress(pct,name='',phase=1){$('hud').hidden=false;$('percent').textContent=Math.round(pct)+'%';$('bar').style.width=pct+'%';$('bar').parentElement.setAttribute('aria-valuenow',String(Math.round(pct)));$('current').textContent=name;document.querySelectorAll('.bcw-hud-steps li').forEach((el,i)=>el.className=i<phase?'is-done':i===phase?'is-on':'');}
function lock(value){busy=value;document.querySelectorAll('#workbench button,#workbench input,#workbench select,#workbench textarea').forEach(e=>e.disabled=value);$('download').disabled=value||!output;$('settings').disabled=value;$('run').setAttribute('aria-busy',String(value));}
function row(name,status,before,after,detail){const values=[name,status,before,after,detail];rows.push(values);const tr=document.createElement('tr');values.forEach(v=>{const td=document.createElement('td');td.textContent=String(v);tr.append(td);});$('results').append(tr);}
function reportBytes(){const cell=v=>'"'+String(v).replace(/^[=+@\-\t\r]/,"'"+'$&').replace(/"/g,'""')+'"';return new TextEncoder().encode('\uFEFF'+[[M.file,M.status,M.before,M.after,M.detail],...rows].map(r=>r.map(cell).join(',')).join('\r\n'));}
function safeName(name,index,ext){return String(index+1).padStart(3,'0')+'-'+name.replace(/\.[^.]+$/,'').replace(/[^a-zA-Z0-9\u0080-\uFFFF _-]/g,'_').slice(0,100)+ext;}
async function loadScript(src,globalName){if(window[globalName])return window[globalName];await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>{s.remove();reject(new Error(M.load_error));};document.head.append(s);});if(!window[globalName])throw new Error(M.load_error);return window[globalName];}
async function zipOutput(entries,name){progress(96,'',2);await yieldUi();const z=await loadScript('/vendor/fflate/index.js','fflate');entries['processing-report.csv']=reportBytes();output=new Blob([z.zipSync(entries,{level:1})],{type:'application/zip'});outputName=name;}
async function execute(task){if(busy)return;invalidate();lock(true);started=Date.now();$('elapsed').textContent=M.elapsed+' 0 s';$('hud').className='bcw-hud is-on';$('message').textContent=M.working;progress(0,'',0);timer=setInterval(()=>{$('elapsed').textContent=M.elapsed+' '+Math.floor((Date.now()-started)/1000)+' s';},500);try{await yieldUi();await task();if(!output)throw new Error(M.empty);progress(100,'',3);$('message').textContent=M.done;$('hud').className='bcw-hud is-done';}catch(e){$('message').textContent=e.message||M.failed;$('hud').className='bcw-hud is-fail';}finally{clearInterval(timer);lock(false);}}
function choose(list){if(busy)return;selectionVersion++;invalidate();files=Array.from(list);$('selection').textContent=files.map(f=>f.name).join(', ');}
$('files').addEventListener('change',e=>choose(e.target.files));$('drop').addEventListener('dragover',e=>e.preventDefault());$('drop').addEventListener('drop',e=>{e.preventDefault();choose(e.dataTransfer.files);});$('settings').addEventListener('input',()=>{if(!busy)invalidate();});$('settings').addEventListener('change',()=>{if(!busy)invalidate();});$('clear').addEventListener('click',()=>{choose([]);$('files').value='';});
$('download').addEventListener('click',()=>{if(!output)return;const u=URL.createObjectURL(output),a=document.createElement('a');a.href=u;a.download=outputName;a.click();setTimeout(()=>URL.revokeObjectURL(u),30000);});
window.addEventListener('pagehide',release);
`;
