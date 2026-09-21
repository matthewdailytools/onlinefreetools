import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {unzipSync} from 'fflate';
import {PDFDocument,degrees,PDFName,PDFNumber} from 'pdf-lib';
const bytes=async(page,type='image/png')=>Buffer.from(await page.evaluate(async type=>{const c=document.createElement('canvas');c.width=60;c.height=40;const g=c.getContext('2d');g.fillStyle='red';g.fillRect(0,0,30,40);g.fillStyle='blue';g.fillRect(30,0,30,20);const b=await new Promise(r=>c.toBlob(r,type,.95));return Array.from(new Uint8Array(await b.arrayBuffer()));},type));
const input=(name,buffer,mimeType='application/octet-stream')=>({name,buffer,mimeType});
async function ready(page){await page.waitForFunction(()=>!document.getElementById('run').disabled&&!document.getElementById('download').disabled,{},{timeout:120000});}
async function run(page,files){await page.locator('#files').setInputFiles(files);assert.equal(await page.locator('#download').isDisabled(),true);await page.click('#run');await page.waitForFunction(()=>!document.getElementById('run').disabled,{},{timeout:120000});}
async function download(page,name){const promise=page.waitForEvent('download');await page.click('#download');const dl=await promise;const dest='.cache/four-tools/'+name;await dl.saveAs(dest);return unzipSync(await fs.readFile(dest));}
function crc(buf){let c=0xffffffff;for(const b of buf){c^=b;for(let j=0;j<8;j++)c=(c>>>1)^((c&1)?0xedb88320:0);}return(c^0xffffffff)>>>0;}
function chunk(name,data){const tag=Buffer.from(name),n=Buffer.alloc(4),c=Buffer.alloc(4);n.writeUInt32BE(data.length);c.writeUInt32BE(crc(Buffer.concat([tag,data])));return Buffer.concat([n,tag,data,c]);}
function exif(jpg){const tiff=Buffer.alloc(92);tiff.write('II');tiff.writeUInt16LE(42,2);tiff.writeUInt32LE(8,4);tiff.writeUInt16LE(2,8);
 tiff.writeUInt16LE(0x112,10);tiff.writeUInt16LE(3,12);tiff.writeUInt32LE(1,14);tiff.writeUInt16LE(6,18);
 tiff.writeUInt16LE(0x8825,22);tiff.writeUInt16LE(4,24);tiff.writeUInt32LE(1,26);tiff.writeUInt32LE(38,30);
 tiff.writeUInt16LE(2,38);tiff.writeUInt16LE(1,40);tiff.writeUInt16LE(2,42);tiff.writeUInt32LE(2,44);tiff.write('N',48);
 tiff.writeUInt16LE(2,52);tiff.writeUInt16LE(5,54);tiff.writeUInt32LE(3,56);tiff.writeUInt32LE(68,60);
 [37,48,30].forEach((n,i)=>{tiff.writeUInt32LE(n,68+i*8);tiff.writeUInt32LE(1,72+i*8);});const data=Buffer.concat([Buffer.from('Exif\0\0'),tiff]),header=Buffer.alloc(4);header[0]=255;header[1]=225;header.writeUInt16BE(data.length+2,2);return Buffer.concat([jpg.subarray(0,2),header,data,jpg.subarray(2)]);}
async function pixels(page,buffer){return page.evaluate(async b=>{const image=await createImageBitmap(new Blob([new Uint8Array(b)]));const c=document.createElement('canvas');c.width=image.width;c.height=image.height;const g=c.getContext('2d');g.drawImage(image,0,0);const out={w:c.width,h:c.height,pixels:Array.from(g.getImageData(0,0,c.width,c.height).data)};image.close();return out;},Array.from(buffer));}
export async function batchCases(page,slug){
await ready(page);
if(slug==='bulk-strip-photo-exif'){
 const jpg=exif(await bytes(page,'image/jpeg')),png=await bytes(page),webp=await bytes(page,'image/webp');
 const tagged=Buffer.concat([png.subarray(0,33),chunk('tEXt',Buffer.from('GPS\0PRIVATE_LOCATION')),png.subarray(33)]);
 const animated=Buffer.concat([png.subarray(0,33),chunk('acTL',Buffer.from([0,0,0,2,0,0,0,0])),png.subarray(33)]);
 await run(page,[input('=private.jpg',jpg),input('transparent.png',tagged),input('static.webp',webp),input('animated.png',animated),input('bad.jpg',Buffer.from('bad'))]);
 assert.equal(await page.locator('#results tr').count(),5);const zip=await download(page,'photos-tested.zip');assert.equal(Object.keys(zip).length,4);
 const report=Buffer.from(zip['processing-report.csv']).toString();assert.match(report,/'=private\.jpg/);assert.match(report,/animated.png/);assert.match(report,/Skipped/);
 const pngNames=Object.keys(zip).filter(k=>k.endsWith('.png'));assert.equal(pngNames.length,3);
 for(const name of pngNames){const out=Buffer.from(zip[name]);assert.equal(out.subarray(1,4).toString(),'PNG');let p=8;while(p+12<=out.length){assert.ok(!['eXIf','tEXt','zTXt','iTXt'].includes(out.toString('ascii',p+4,p+8)));p+=out.readUInt32BE(p)+12;}assert.ok(!out.includes(Buffer.from('PRIVATE_LOCATION')));}
 const oriented=await pixels(page,zip[pngNames[0]]);assert.equal(oriented.w,40);assert.equal(oriented.h,60);assert.deepEqual(oriented,await pixels(page,jpg),'EXIF orientation and decoded pixels must survive');
 assert.deepEqual(await pixels(page,zip[pngNames[1]]),await pixels(page,tagged),'PNG alpha and decoded pixels must survive');
 await run(page,[input('broken.png',Buffer.from('broken'))]);assert.equal(await page.locator('#download').isDisabled(),true);assert.match(await page.locator('#hud').getAttribute('class'),/is-fail/);
 await page.click('#sample');await ready(page);await run(page,Array.from({length:21},(_,i)=>input(i+'.jpg',jpg)));assert.equal(await page.locator('#download').isDisabled(),true);
 console.log('PASS photos: actual ZIP/CSV; GPS+EXIF JPEG, orientation and pixel equality; PNG text metadata and alpha; WebP; animation and corrupt-file skips; formula-safe CSV; retry and count limit.');
}
if(slug==='batch-watermark-pdf-drafts'){
 const sample=await download(page,'watermark-sample.zip');const name=Object.keys(sample).find(n=>n.endsWith('.pdf'));const saved=sample[name];const parsed=await PDFDocument.load(saved);assert.equal(parsed.getPageCount(),3);assert.equal(parsed.getPage(1).getRotation().angle,90);assert.deepEqual(parsed.getPage(2).getCropBox(),{x:60,y:40,width:650,height:350});
 const result=await page.evaluate(async data=>{const api=await import('/vendor/pdfjs/pdf.min.mjs');api.GlobalWorkerOptions.workerSrc='/vendor/pdfjs/pdf.worker.min.mjs';const doc=await api.getDocument({data:new Uint8Array(data)}).promise;const results=[];for(let n=1;n<=doc.numPages;n++){const p=await doc.getPage(n),v=p.getViewport({scale:1}),c=document.createElement('canvas');c.width=Math.ceil(v.width);c.height=Math.ceil(v.height);const g=c.getContext('2d');await p.render({canvasContext:g,viewport:v}).promise;const pix=g.getImageData(0,0,c.width,c.height).data;let minX=c.width,minY=c.height,maxX=0,maxY=0,count=0;for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++){const i=(y*c.width+x)*4;if(pix[i]>pix[i+1]+12&&pix[i]>pix[i+2]+12){count++;minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}}results.push({w:c.width,h:c.height,minX,minY,maxX,maxY,count});}await doc.destroy();return results;},Array.from(saved));
 for(const r of result){assert.ok(r.count>100);assert.ok(r.minX>0&&r.minY>0&&r.maxX<r.w-1&&r.maxY<r.h-1,'stamp within visible crop');assert.ok(Math.abs((r.minX+r.maxX)/2-r.w/2)<r.w*.1);assert.ok(Math.abs((r.minY+r.maxY)/2-r.h/2)<r.h*.1);}
 const doc=await PDFDocument.create();doc.addPage([220,180]);const good=await doc.save();
 const encrypted=await PDFDocument.create();encrypted.addPage();const enc=encrypted.context.obj({Filter:PDFName.of('Standard'),V:PDFNumber.of(1),R:PDFNumber.of(2)});encrypted.context.trailerInfo.Encrypt=encrypted.context.register(enc);const protectedBytes=await encrypted.save();
 await run(page,[input('same.pdf',Buffer.from(good)),input('same.pdf',Buffer.from(good)),input('broken.pdf',Buffer.from('broken')),input('protected.pdf',Buffer.from(protectedBytes))]);
 const zip=await download(page,'watermark-batch.zip');assert.equal(Object.keys(zip).filter(n=>n.endsWith('.pdf')).length,2);assert.equal(await page.locator('#results tr').count(),4);assert.match(Buffer.from(zip['processing-report.csv']).toString(),/protected.pdf/);
 await page.locator('summary').click();await page.locator('#stamp').fill('内部草稿');assert.equal(await page.locator('#download').isDisabled(),true);await page.click('#run');await ready(page);await download(page,'watermark-unicode.zip');
 await page.locator('#opacity').fill('101');await page.click('#run');assert.equal(await page.locator('#download').isDisabled(),true);assert.match(await page.locator('#hud').getAttribute('class'),/is-fail/);
 await page.locator('#opacity').fill('22');await run(page,[input('bad.pdf',Buffer.from('bad'))]);assert.equal(await page.locator('#download').isDisabled(),true);await page.click('#sample');await ready(page);
 console.log('PASS watermark: real PDF render verifies 3 mixed/rotated/offset-crop pages and centered red pixels; ZIP duplicates, bad/encrypted skip, Unicode, settings invalidation, all-failed and retry.');
}
if(slug==='bulk-optimize-svg-icon-set'){
 const previews=await page.evaluate(async()=>{const imgs=[...document.querySelectorAll('#previews img')];await Promise.all(imgs.map(i=>i.decode()));return imgs.map(i=>{const c=document.createElement('canvas');c.width=c.height=160;const g=c.getContext('2d');g.drawImage(i,0,0,160,160);return Array.from(g.getImageData(0,0,160,160).data);});});assert.equal(previews.length,2);assert.deepEqual(previews[0],previews[1]);
 const wrap=body=>'<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">'+body+'</svg>';
 const valid=wrap('<!-- remove -->\n<metadata>editor notes</metadata><defs><linearGradient id="g"><stop stop-color="red"/></linearGradient><clipPath id="c"><rect width="50" height="50"/></clipPath><mask id="m"><rect width="100" height="100" fill="white"/></mask><path id="p" d="M0 0H80V80Z"/></defs><title id="t">Title</title><use href="#p" fill="url(#g)" clip-path="url(#c)" mask="url(#m)" aria-labelledby="t"/><text y="90" xml:space="preserve"> A  B </text>');
 const bads=[wrap('<use href="#missing"/>'),wrap('<g id="x"/><g id="x"/>'),wrap('<script>alert(1)</script>'),wrap('<metadata><script>alert(1)</script></metadata>'),wrap('<use href="https://example.com/a.svg#x"/>'),wrap('<style>@import "https://example.com/x";</style>'),wrap('<rect style="fill:url(https://example.com/x)"/>'),'<?xml-stylesheet href="https://example.com/x"?>'+wrap(''),wrap('<image href="data:image/png;base64,eA=="/>'),'<svg>'];
 await run(page,[input('references.svg',Buffer.from(valid)),...bads.map((b,i)=>input('bad-'+i+'.svg',Buffer.from(b)))]);const zip=await download(page,'svg-tested.zip');const names=Object.keys(zip).filter(n=>n.endsWith('.svg'));assert.equal(names.length,1);const out=Buffer.from(zip[names[0]]).toString();assert.ok(out.length<valid.length);assert.ok(!out.includes('editor notes'));assert.ok(out.includes(' A  B '));for(const id of ['g','c','m','p','t'])assert.match(out,new RegExp('id="'+id+'"'));assert.equal(await page.locator('#results tr').count(),12);
 await run(page,[input('bad.svg',Buffer.from(bads[0]))]);assert.equal(await page.locator('#download').isDisabled(),true);assert.match(await page.locator('#hud').getAttribute('class'),/is-fail/);
 await page.click('#sample');await ready(page);await page.locator('summary').click();for(const id of ['comments','metadata','whitespace'])await page.locator('#'+id).uncheck();assert.equal(await page.locator('#download').isDisabled(),true);
 const minimal=wrap('<path d="M0 0H1V1Z"/>');await run(page,[input('minimal.svg',Buffer.from(minimal))]);const kept=await download(page,'svg-unchanged.zip');assert.equal(Buffer.from(kept[Object.keys(kept).find(n=>n.endsWith('.svg'))]).toString(),minimal);
 const bomSource=Buffer.concat([Buffer.from([239,187,191]),Buffer.from(minimal.replace('<svg ',`<svg aria-label='say "hello" "world"' `))]);await run(page,[input('bom.svg',bomSource)]);const bomZip=await download(page,'svg-bom.zip');assert.deepEqual(Buffer.from(bomZip[Object.keys(bomZip).find(n=>n.endsWith('.svg'))]),bomSource,'no-saving fallback must preserve BOM and exact source bytes');
 const styled=wrap('<style>g:empty{fill:red}</style>\n<metadata>keep</metadata>\n<g> </g>');for(const id of ['comments','metadata','whitespace'])await page.locator('#'+id).check();await run(page,[input('styled.svg',Buffer.from(styled))]);const styleZip=await download(page,'svg-stylesheet.zip');const styleOut=Buffer.from(styleZip[Object.keys(styleZip).find(n=>n.endsWith('.svg'))]).toString();assert.match(styleOut,/<metadata>keep<\/metadata>/);assert.match(styleOut,/<g> <\/g>/);
 console.log('PASS SVG: real ZIP and pixel-identical sample; gradient/clip/mask/use/ARIA references; text whitespace; 10 malformed/unsafe/reference failures; all-failed, retry, byte-exact BOM fallback, stylesheet preservation.');
}
}
