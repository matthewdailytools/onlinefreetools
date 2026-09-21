import { renderToolReferencesSection } from './site/toolContent';
import { renderLocalFileWorkbench } from './site/localFileWorkbench';
import type { SiteLang } from '../site/i18n';
/** Fresh PNG encoding deliberately discards the entire source metadata container. */
export const renderBulkStripPhotoExifPage = (opts: {lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[]}) => renderLocalFileWorkbench(opts, {
 slug:'bulk-strip-photo-exif',accept:'.jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp',multiple:true,
 messages:['cleaned','image_error','animation','output_format'],settings:l=>`<p class="mb-0">${l('output_format')}</p>`,
 referencesHtml:renderToolReferencesSection({lang:opts.lang,links:[{label:'Canvas image export',href:'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob'}]}),
 runtime:String.raw`
function dimensions(bytes){const d=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength),tag=(p,n)=>String.fromCharCode(...bytes.slice(p,p+n));
 if(bytes.length<12)throw new Error(M.image_error);
 if(tag(0,8)==='\x89PNG\r\n\x1a\n'){
 if(bytes.length<33||tag(12,4)!=='IHDR')throw new Error(M.image_error);let p=8;
 while(p+12<=bytes.length){const n=d.getUint32(p),t=tag(p+4,4);if(p+n+12>bytes.length)throw new Error(M.image_error);if(t==='acTL')throw new Error(M.animation);p+=n+12;if(t==='IEND')break;}
 return [d.getUint32(16),d.getUint32(20),'image/png'];}
 if(bytes[0]===255&&bytes[1]===216){let p=2;while(p+4<=bytes.length){if(bytes[p++]!==255)throw new Error(M.image_error);while(bytes[p]===255)p++;const marker=bytes[p++];if(marker===217||marker===218)break;if(marker===1||(marker>=208&&marker<=215))continue;const n=d.getUint16(p);if(n<2||p+n>bytes.length)throw new Error(M.image_error);if([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(marker)){if(n<8)throw new Error(M.image_error);return[d.getUint16(p+5),d.getUint16(p+3),'image/jpeg'];}p+=n;}throw new Error(M.image_error);}
 if(tag(0,4)==='RIFF'&&tag(8,4)==='WEBP'){let p=12,size=null;while(p+8<=bytes.length){const n=d.getUint32(p+4,true),t=tag(p,4),q=p+8;if(q+n>bytes.length)throw new Error(M.image_error);if(t==='ANIM'||t==='ANMF')throw new Error(M.animation);if(t==='VP8X'&&n>=10){if(bytes[q]&2)throw new Error(M.animation);size=[1+bytes[q+4]+(bytes[q+5]<<8)+(bytes[q+6]<<16),1+bytes[q+7]+(bytes[q+8]<<8)+(bytes[q+9]<<16)];}if(!size&&t==='VP8 '&&n>=10)size=[d.getUint16(q+6,true)&16383,d.getUint16(q+8,true)&16383];if(!size&&t==='VP8L'&&n>=5&&bytes[q]===47){const bits=d.getUint32(q+1,true);size=[(bits&16383)+1,((bits>>>14)&16383)+1];}p=q+n+(n%2);}if(size)return[...size,'image/webp'];}
 throw new Error(M.image_error);
}
async function clean(file){if(file.size>25*1024*1024)throw new Error(M.limit);const bytes=new Uint8Array(await file.arrayBuffer()),[w,h,type]=dimensions(bytes);if(!w||!h||w*h>24000000||w>16384||h>16384)throw new Error(M.limit);
 let bitmap,canvas;try{bitmap=await createImageBitmap(new Blob([bytes],{type}));if(bitmap.width*bitmap.height>24000000)throw new Error(M.limit);canvas=document.createElement('canvas');canvas.width=bitmap.width;canvas.height=bitmap.height;canvas.getContext('2d').drawImage(bitmap,0,0);const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error(M.image_error)),'image/png'));const out=new Uint8Array(await blob.arrayBuffer());const view=new DataView(out.buffer);for(let p=8;p+12<=out.length;){const n=view.getUint32(p),tag=String.fromCharCode(...out.slice(p+4,p+8));if(['eXIf','tEXt','zTXt','iTXt'].includes(tag))throw new Error(M.image_error);p+=n+12;}return out;}finally{if(bitmap)bitmap.close();if(canvas){canvas.width=1;canvas.height=1;}}}
async function convert(){await execute(async()=>{if(!files.length)throw new Error(M.invalid);if(files.length>20||files.reduce((n,f)=>n+f.size,0)>100*1024*1024)throw new Error(M.limit);const entries={};for(let i=0;i<files.length;i++){const file=files[i];progress(5+85*i/files.length,file.name);await yieldUi();try{const out=await clean(file),name=safeName(file.name,i,'.png');entries[name]=out;row(file.name,M.done,file.size,out.length,M.cleaned+' · '+name);}catch(e){row(file.name,M.skipped,file.size,'—',e.message||M.image_error);}}if(Object.keys(entries).length)await zipOutput(entries,'clean-photos.zip');});}
async function loadSample(){if(busy)return;const c=document.createElement('canvas');c.width=320;c.height=200;const ctx=c.getContext('2d');ctx.fillStyle='#2563eb';ctx.fillRect(0,0,320,200);ctx.fillStyle='white';ctx.fillRect(30,30,100,100);const version=selectionVersion;const b=await new Promise(r=>c.toBlob(r,'image/jpeg',.9));if(busy||version!==selectionVersion)return;choose([new File([b],'sample-photo.jpg',{type:'image/jpeg'})]);await convert();}
$('run').addEventListener('click',convert);$('sample').addEventListener('click',loadSample);
setTimeout(()=>{if(!busy&&!files.length)loadSample();},0);
`});
