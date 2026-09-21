import { renderToolReferencesSection } from './site/toolContent';
import { renderLocalFileWorkbench } from './site/localFileWorkbench';
import type { SiteLang } from '../site/i18n';
export const renderBatchWatermarkPdfDraftsPage = (opts: {lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[]}) => renderLocalFileWorkbench(opts, {
 slug:'batch-watermark-pdf-drafts',accept:'.pdf,application/pdf',multiple:true,
 messages:['stamp','opacity','angle','relative_width','watermarked','pdf_error','settings_error','page'],
 settings:l=>`<label>${l('stamp')}<input id="stamp" class="form-control" maxlength="60" value="DRAFT"></label><label>${l('opacity')}<input id="opacity" class="form-control" type="number" min="5" max="80" value="22"></label><label>${l('angle')}<input id="angle" class="form-control" type="number" min="-90" max="90" value="35"></label><label>${l('relative_width')}<input id="width" class="form-control" type="number" min="10" max="90" value="65"></label>`,
 referencesHtml:renderToolReferencesSection({lang:opts.lang,links:[{label:'PDF page drawing and page boxes',href:'https://pdf-lib.js.org/docs/api/classes/pdfpage'}]}),
 runtime:String.raw`
async function convert(){await execute(async()=>{
 if(!files.length)throw new Error(M.invalid);if(files.length>20||files.reduce((n,f)=>n+f.size,0)>100*1024*1024)throw new Error(M.limit);
 const text=$('stamp').value.trim(),opacity=Number($('opacity').value)/100,angle=Number($('angle').value),fraction=Number($('width').value)/100;
 if(!text||Array.from(text).length>60||/[\u0000-\u001f]/.test(text)||!Number.isFinite(opacity)||opacity<.05||opacity>.8||!Number.isFinite(angle)||angle< -90||angle>90||!Number.isFinite(fraction)||fraction<.1||fraction>.9)throw new Error(M.settings_error);
 const lib=await loadScript('/vendor/pdf-lib/pdf-lib.min.js','PDFLib');await document.fonts.ready;
 const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');ctx.font='bold 120px sans-serif';const measured=ctx.measureText(text).width;canvas.width=Math.min(4096,Math.max(64,Math.ceil(measured+48)));canvas.height=192;ctx.font='bold 120px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#b02020';ctx.fillText(text,canvas.width/2,canvas.height/2,canvas.width-48);const png=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error(M.failed)),'image/png'));const stampBytes=await png.arrayBuffer(),aspect=canvas.height/canvas.width;canvas.width=canvas.height=1;
 const entries={};
 for(let i=0;i<files.length;i++){const file=files[i];await yieldUi();try{
 if(!file.name.toLowerCase().endsWith('.pdf'))throw new Error(M.pdf_error);if(file.size>25*1024*1024)throw new Error(M.limit);
 const doc=await lib.PDFDocument.load(await file.arrayBuffer());if(doc.isEncrypted)throw new Error(M.pdf_error);if(!doc.getPageCount()||doc.getPageCount()>200)throw new Error(M.limit);const image=await doc.embedPng(stampBytes);
 for(let n=0;n<doc.getPageCount();n++){
 progress(5+85*(i+n/doc.getPageCount())/files.length,file.name+' · '+M.page+' '+(n+1));await yieldUi();const page=doc.getPage(n),box=page.getCropBox(),rotation=page.getRotation().angle;
 if(!Number.isFinite(box.width)||!Number.isFinite(box.height)||box.width<=0||box.height<=0)throw new Error(M.pdf_error);
 const theta=(angle+rotation)*Math.PI/180,c=Math.cos(theta),s=Math.sin(theta),displayWidth=rotation%180?box.height:box.width;
 const w=Math.min(displayWidth*fraction,box.width*.92/(Math.abs(c)+aspect*Math.abs(s)),box.height*.92/(Math.abs(s)+aspect*Math.abs(c))),h=w*aspect;
 page.drawImage(image,{x:box.x+box.width/2-(w*c-h*s)/2,y:box.y+box.height/2-(w*s+h*c)/2,width:w,height:h,rotate:lib.degrees(angle+rotation),opacity});}
 const out=await doc.save(),name=safeName(file.name,i,'.pdf');entries[name]=out;row(file.name,M.done,file.size,out.length,M.watermarked+' '+doc.getPageCount()+' · '+name);
 }catch(e){row(file.name,M.skipped,file.size,'—',e.message===M.limit?M.limit:M.pdf_error);}}
 if(Object.keys(entries).length)await zipOutput(entries,'watermarked-pdfs.zip');
 });}
async function loadSample(){if(busy)return;lock(true);try{const lib=await loadScript('/vendor/pdf-lib/pdf-lib.min.js','PDFLib'),doc=await lib.PDFDocument.create();for(const [w,h,rot] of [[595,842,0],[420,300,90],[800,450,0]]){const p=doc.addPage([w,h]);p.setRotation(lib.degrees(rot));p.drawText('Sample PDF '+w+' x '+h,{x:25,y:h-50,size:18});}doc.getPage(2).setCropBox(60,40,650,350);const f=new File([await doc.save()],'mixed-pages.pdf',{type:'application/pdf'});lock(false);choose([f]);await convert();}catch(e){lock(false);$('hud').hidden=false;$('hud').className='bcw-hud is-fail';$('message').textContent=M.load_error;}}
$('run').addEventListener('click',convert);$('sample').addEventListener('click',loadSample);setTimeout(()=>{if(!files.length&&!busy)loadSample();},0);
`});
