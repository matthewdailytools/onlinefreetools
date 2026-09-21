import { renderToolReferencesSection } from './site/toolContent';
import { renderLocalFileWorkbench } from './site/localFileWorkbench';
import type { SiteLang } from '../site/i18n';
/** Scanned PDF pages follow the same PDF.js → Tesseract pipeline as scanned-PDF-to-Word. */
export const renderExtractTextFromAScannedPdfPage = (opts: {lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[]}) => renderLocalFileWorkbench(opts, {
 slug:'extract-text-from-a-scanned-pdf',accept:'.pdf,application/pdf',multiple:false,editable:true,
 messages:['language','first','last','page','no_text','page_error','range_error'],
 referencesHtml:renderToolReferencesSection({lang:opts.lang,links:[{label:'Tesseract.js',href:'https://github.com/naptha/tesseract.js'},{label:'PDF.js',href:'https://mozilla.github.io/pdf.js/'}]}),
 settings:l=>`<label>${l('language')}<select id="language" class="form-select"><option value="eng">English</option><option value="chi_sim+eng">简体中文 + English</option><option value="jpn+eng">日本語 + English</option><option value="ara+eng">العربية + English</option></select></label><label>${l('first')}<input id="first" class="form-control" type="number" min="1" value="1"></label><label>${l('last')}<input id="last" class="form-control" type="number" min="1" placeholder="—"></label>`,
 runtime:String.raw`
let pdfjs=null;
async function getPdfJs(){if(!pdfjs){try{pdfjs=await import('/vendor/pdfjs/pdf.min.mjs');}catch{throw new Error(M.load_error);}pdfjs.GlobalWorkerOptions.workerSrc='/vendor/pdfjs/pdf.worker.min.mjs';}return pdfjs;}
async function convert(){await execute(async()=>{
 if(files.length!==1||!files[0].name.toLowerCase().endsWith('.pdf'))throw new Error(M.invalid);
 const file=files[0];if(file.size>12*1024*1024)throw new Error(M.limit);
 const first=Number($('first').value),rawLast=$('last').value;
 if(!Number.isInteger(first)||first<1||(rawLast&&(!Number.isInteger(Number(rawLast))||Number(rawLast)<first)))throw new Error(M.range_error);
 let doc,worker,loading;
 try{
 const api=await getPdfJs();loading=api.getDocument({data:new Uint8Array(await file.arrayBuffer()),isEvalSupported:false});loading.onPassword=()=>{loading.destroy();};try{doc=await loading.promise;}catch{throw new Error(M.invalid);}
 const last=rawLast?Number(rawLast):doc.numPages;if(first>doc.numPages||last>doc.numPages||last-first+1>20)throw new Error(M.range_error);
 const tess=await loadScript('/vendor/tesseract/tesseract.min.js','Tesseract');let current=first;
 worker=await tess.createWorker($('language').value,1,{workerPath:'/vendor/tesseract/worker.min.js',corePath:'/vendor/tesseract/core',langPath:'/vendor/tesseract/lang',workerBlobURL:false,logger:m=>{if(m.status==='recognizing text')progress(10+80*((current-first+(m.progress||0))/(last-first+1)),file.name+' · '+M.page+' '+current);}}).catch(()=>{throw new Error(M.load_error);});
 const parts=[];
 for(current=first;current<=last;current++){
 let page,canvas;
 try{progress(10+80*(current-first)/(last-first+1),file.name+' · '+M.page+' '+current);await yieldUi();page=await doc.getPage(current);const v=page.getViewport({scale:1}),scale=Math.min(3,2200/Math.max(v.width,v.height)),vp=page.getViewport({scale});canvas=document.createElement('canvas');canvas.width=Math.ceil(vp.width);canvas.height=Math.ceil(vp.height);await page.render({canvasContext:canvas.getContext('2d'),viewport:vp}).promise;
 const result=await worker.recognize(canvas),text=result.data.text.trim();row(M.page+' '+current,text?M.done:M.skipped,'—',text.length,text?Math.round(result.data.confidence)+'%':M.no_text);if(text)parts.push('--- '+M.page+' '+current+' ---\n'+text);
 }catch(e){row(M.page+' '+current,M.skipped,'—','—',M.page_error);}finally{if(canvas){canvas.width=1;canvas.height=1;}if(page)page.cleanup();}}
 if(parts.length){$('text').value=parts.join('\n\n');output=new Blob([$ ('text').value],{type:'text/plain;charset=utf-8'});outputName=safeName(file.name,0,'.txt');}
 }finally{if(worker)await worker.terminate();if(doc)await doc.destroy();else if(loading)await loading.destroy();}
 });}
$('text').addEventListener('input',()=>{output=$('text').value?new Blob([$ ('text').value],{type:'text/plain;charset=utf-8'}):null;$('download').disabled=!output;});
async function loadSample(){if(busy)return;lock(true);try{const lib=await loadScript('/vendor/pdf-lib/pdf-lib.min.js','PDFLib'),doc=await lib.PDFDocument.create();const c=document.createElement('canvas');c.width=1200;c.height=800;const ctx=c.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='black';ctx.font='48px sans-serif';ctx.fillText('SCAN SAMPLE',80,140);ctx.fillText('Order 1042',80,240);ctx.fillText('Total 125 dollars',80,340);const blob=await new Promise(r=>c.toBlob(r,'image/png'));const pic=await doc.embedPng(await blob.arrayBuffer());doc.addPage([600,400]).drawImage(pic,{x:0,y:0,width:600,height:400});const sample=new File([await doc.save()],'sample-scan.pdf',{type:'application/pdf'});lock(false);choose([sample]);$('language').value='eng';$('first').value='1';$('last').value='';await convert();}catch(e){lock(false);$('hud').hidden=false;$('hud').className='bcw-hud is-fail';$('message').textContent=e.message||M.failed;}}
$('run').addEventListener('click',convert);$('sample').addEventListener('click',loadSample);
// OCR intentionally starts only after a user click; no automatic model download.
`});
